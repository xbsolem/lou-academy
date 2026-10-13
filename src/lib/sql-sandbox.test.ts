import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import initSqlJs from "sql.js";
import {
  SqlInitError,
  SqlSandbox,
  assertSafeSelect,
  createSqlSandbox,
  describeSqlInitError,
  matchExerciseResult,
  translateSqliteError,
  type SqlModule,
} from "./sql-sandbox";

const SETUP = `
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, city TEXT);
  INSERT INTO users (id, name, city) VALUES
    (1, 'Ada', 'Paris'),
    (2, 'Bob', 'Lyon'),
    (3, 'Chloé', 'Paris');
`;

let SQL: SqlModule;
let sandbox: SqlSandbox;

beforeAll(async () => {
  SQL = (await initSqlJs()) as unknown as SqlModule;
  sandbox = new SqlSandbox(SQL, SETUP);
});

describe("SQL sandbox security", () => {
  it("accepts a correct SELECT", () => {
    const result = sandbox.execute("SELECT name FROM users WHERE id = 1");
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.result.columns).toEqual(["name"]);
      expect(result.result.values).toEqual([["Ada"]]);
    }
  });

  it("rejects DROP / DELETE / UPDATE / INSERT / ALTER / ATTACH", () => {
    const dangerous = [
      "DROP TABLE users",
      "DELETE FROM users",
      "UPDATE users SET name = 'x'",
      "INSERT INTO users (id, name) VALUES (9, 'Eve')",
      "ALTER TABLE users ADD COLUMN age INTEGER",
      "ATTACH DATABASE ':memory:' AS evil",
    ];
    for (const sql of dangerous) {
      const result = sandbox.execute(sql);
      expect(result.ok, sql).toBe(false);
      if (!result.ok) {
        expect(result.code).toBe("forbidden");
        expect(result.error.toLowerCase()).not.toContain("sqlite");
      }
    }
  });

  it("rejects multiple statements even when the first is a SELECT", () => {
    const result = sandbox.execute("SELECT name FROM users; DROP TABLE users");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("multiple");
  });

  it("rejects write hidden after a comment", () => {
    const result = sandbox.execute("SELECT 1; --\nDELETE FROM users");
    expect(result.ok).toBe(false);
  });

  it("does not persist writes even if parse were bypassed: snapshot isolation", () => {
    sandbox.execute("INSERT INTO users (id, name) VALUES (99, 'Hacker')");
    const after = sandbox.execute("SELECT COUNT(*) AS n FROM users");
    expect(after.ok).toBe(true);
    if (after.ok) {
      expect(Number(after.result.values[0][0])).toBe(3);
    }
  });

  it("rejects dangerous PRAGMA", () => {
    const result = sandbox.execute("PRAGMA query_only = OFF");
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.code).toBe("forbidden");
  });

  it("allows a string that merely contains the word DELETE", () => {
    const result = sandbox.execute("SELECT name FROM users WHERE name = 'DELETE'");
    expect(result.ok).toBe(true);
  });

  it("allows CASE expressions (END is not treated as a write)", () => {
    const result = sandbox.execute(
      "SELECT CASE WHEN city = 'Paris' THEN name ELSE 'other' END AS label FROM users WHERE id = 1"
    );
    expect(result.ok).toBe(true);
  });
});

describe("SQL pedagogical errors", () => {
  it("explains an unknown column in French", () => {
    const result = sandbox.execute("SELECT missing FROM users");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("unknown_column");
      expect(result.error).toMatch(/Colonne inconnue/);
      expect(result.error).toMatch(/missing/);
      expect(result.error.toLowerCase()).not.toContain("no such column");
    }
  });

  it("explains an unknown table in French", () => {
    const result = sandbox.execute("SELECT * FROM missing_table");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("unknown_table");
      expect(result.error).toMatch(/Table inconnue/);
      expect(result.error.toLowerCase()).not.toContain("no such table");
    }
  });

  it("explains a syntax error in French", () => {
    const result = sandbox.execute("SELECT * FROM users WHERE = 1");
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toMatch(/syntaxe/i);
      expect(result.error.toLowerCase()).not.toMatch(/near "/);
    }
  });

  it("never returns a raw sqlite dump as the only message", () => {
    const translated = translateSqliteError(new Error("no such column: foo"));
    expect(translated.error.toLowerCase()).not.toContain("no such column");
    expect(assertSafeSelect("")).not.toBeNull();
  });
});

describe("SQL result matching", () => {
  const expected = {
    expectedColumns: ["name"],
    expectedResult: [["Ada"], ["Bob"], ["Chloé"]],
    orderRequired: false,
  };

  it("accepts equivalent queries that produce the same result set", () => {
    const a = sandbox.verify("SELECT name FROM users", expected);
    const b = sandbox.verify("SELECT u.name FROM users AS u", expected);
    const c = sandbox.verify("SELECT name FROM users ORDER BY id DESC", expected);
    expect(a.ok).toBe(true);
    expect(b.ok).toBe(true);
    expect(c.ok).toBe(true);
  });

  it("accepts swapped column order when names are provided", () => {
    const spec = {
      expectedColumns: ["name", "id"],
      expectedResult: [
        ["Ada", "1"],
        ["Bob", "2"],
        ["Chloé", "3"],
      ],
      orderRequired: false,
    };
    const result = sandbox.verify("SELECT id, name FROM users", spec);
    expect(result.ok).toBe(true);
  });

  it("requires row order when asked", () => {
    const spec = {
      expectedColumns: ["name"],
      expectedResult: [["Ada"], ["Bob"], ["Chloé"]],
      orderRequired: true,
    };
    const ok = sandbox.verify("SELECT name FROM users ORDER BY id", spec);
    const bad = sandbox.verify("SELECT name FROM users ORDER BY id DESC", spec);
    expect(ok.ok).toBe(true);
    expect(bad.ok).toBe(false);
  });

  it("supports multiple valid result shapes", () => {
    const spec = {
      expectedResult: [] as string[][],
      expectedResults: [
        { columns: ["name"], rows: [["Ada"]] },
        { columns: ["name", "city"], rows: [["Ada", "Paris"]] },
      ],
    };
    expect(sandbox.verify("SELECT name FROM users WHERE id = 1", spec).ok).toBe(true);
    expect(sandbox.verify("SELECT name, city FROM users WHERE id = 1", spec).ok).toBe(true);
    expect(sandbox.verify("SELECT name FROM users WHERE id = 2", spec).ok).toBe(false);
  });

  it("treats an empty expected result as a valid empty set", () => {
    const spec = {
      expectedColumns: ["name"],
      expectedResult: [] as string[][],
      orderRequired: false,
    };
    const empty = sandbox.verify("SELECT name FROM users WHERE 1 = 0", spec);
    expect(empty.ok).toBe(true);
    const notEmpty = sandbox.verify("SELECT name FROM users WHERE id = 1", spec);
    expect(notEmpty.ok).toBe(false);
  });

  it("reports empty actual results when rows were expected", () => {
    const result = sandbox.verify("SELECT name FROM users WHERE 1 = 0", expected);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.code).toBe("empty_result");
      expect(result.error).toMatch(/vide/i);
    }
  });

  it("does not match on SQL text, only on the result set", () => {
    const executed = sandbox.execute("SELECT name FROM users WHERE city = 'Paris' ORDER BY id");
    expect(executed.ok).toBe(true);
    if (!executed.ok) return;
    const match = matchExerciseResult(executed.result, {
      expectedColumns: ["name"],
      expectedResult: [["Ada"], ["Chloé"]],
      orderRequired: false,
    });
    expect(match).toBe(true);
  });
});

describe("sql-debutants setupSql", () => {
  const db = JSON.parse(
    readFileSync(join(process.cwd(), "src/content/sql-debutants/db.json"), "utf8")
  ) as { setupSql: string };

  it("allows DROP/CREATE in teacher setupSql then SELECT * FROM clients", async () => {
    expect(db.setupSql).toMatch(/DROP TABLE IF EXISTS/i);
    const real = await createSqlSandbox(db.setupSql);
    const result = real.execute("SELECT * FROM clients");
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.result.columns.map((c) => c.toLowerCase())).toEqual([
      "id",
      "prenom",
      "nom",
      "age",
      "ville",
    ]);
    expect(result.result.values).toHaveLength(8);
  });

  it("still rejects dangerous learner SQL against the real boutique schema", async () => {
    const real = await createSqlSandbox(db.setupSql);
    const dangerous = [
      "DROP TABLE clients",
      "DELETE FROM clients",
      "UPDATE clients SET ville = 'x'",
      "INSERT INTO clients (id, prenom, nom, age, ville) VALUES (99, 'A', 'B', 1, 'Paris')",
      "CREATE TABLE hack (id INTEGER)",
      "ALTER TABLE clients ADD COLUMN secret TEXT",
    ];
    for (const sql of dangerous) {
      const result = real.execute(sql);
      expect(result.ok, sql).toBe(false);
      if (!result.ok) expect(result.code).toBe("forbidden");
    }
    const after = real.execute("SELECT COUNT(*) AS n FROM clients");
    expect(after.ok).toBe(true);
    if (after.ok) expect(Number(after.result.values[0][0])).toBe(8);
  });

  it("surfaces a schema error, not a wasm error, when setupSql is invalid", () => {
    expect(() => new SqlSandbox(SQL, "THIS IS NOT SQL")).toThrow(SqlInitError);
    try {
      new SqlSandbox(SQL, "THIS IS NOT SQL");
    } catch (err) {
      expect(err).toBeInstanceOf(SqlInitError);
      if (err instanceof SqlInitError) {
        expect(err.kind).toBe("schema");
        expect(describeSqlInitError(err)).toMatch(/schéma SQL/i);
        expect(describeSqlInitError(err).toLowerCase()).not.toContain("initialisation du moteur");
      }
    }
  });
});
