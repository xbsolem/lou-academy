import type { ExpectedShape, SqlExerciseData } from "./sql-exercise-data";

export const SQL_MAX_ROWS = 500;
export const SQL_TIMEOUT_MS = 2000;

const WRITE_KEYWORDS = new Set([
  "ALTER",
  "ANALYZE",
  "ATTACH",
  "BEGIN",
  "COMMIT",
  "COPY",
  "CREATE",
  "DELETE",
  "DETACH",
  "DROP",
  "GRANT",
  "INSERT",
  "PRAGMA",
  "REINDEX",
  "RELEASE",
  "REVOKE",
  "ROLLBACK",
  "SAVEPOINT",
  "TRUNCATE",
  "UPDATE",
  "VACUUM",
]);

const READ_START = new Set(["SELECT", "WITH", "VALUES"]);

const DENIED_FUNCTIONS = new Set([
  "LOAD_EXTENSION",
  "READFILE",
  "WRITEFILE",
  "EVAL",
]);

export interface SqlJsStatement {
  step(): boolean;
  get(): unknown[];
  getColumnNames(): string[];
  free(): void;
}

export interface SqlJsDatabase {
  run(sql: string, params?: unknown[]): unknown;
  exec(sql: string): { columns: string[]; values: unknown[][] }[];
  prepare(sql: string): SqlJsStatement;
  export(): Uint8Array;
  close(): void;
}

export interface SqlModule {
  Database: new (data?: ArrayLike<number> | null) => SqlJsDatabase;
}

export interface QueryResult {
  columns: string[];
  values: unknown[][];
  truncated?: boolean;
}

export type SandboxErrorCode =
  | "empty"
  | "multiple"
  | "forbidden"
  | "syntax"
  | "unknown_column"
  | "unknown_table"
  | "empty_result"
  | "timeout"
  | "row_limit"
  | "readonly"
  | "mismatch"
  | "generic";

export const SQL_WASM_PUBLIC_PATH = "/sql-wasm.wasm";

export type SqlInitErrorKind = "wasm" | "schema";

export class SqlInitError extends Error {
  readonly kind: SqlInitErrorKind;

  constructor(kind: SqlInitErrorKind, message: string) {
    super(message);
    this.name = "SqlInitError";
    this.kind = kind;
  }
}

export function describeSqlInitError(err: unknown): string {
  if (err instanceof SqlInitError) return err.message;
  const raw = err instanceof Error ? err.message : String(err);
  if (/wasm|locateFile|WebAssembly|fetch|Failed to load|network|404/i.test(raw)) {
    return "Impossible de charger le moteur SQL. Actualisez la page, puis réessayez.";
  }
  if (/syntax|no such|constraint|table|SQL/i.test(raw)) {
    return "Impossible de préparer la base de l'exercice. Le schéma SQL (tables et données) contient une erreur.";
  }
  return "Impossible de préparer l'exercice SQL. Actualisez la page, puis réessayez.";
}

export interface SandboxFailure {
  ok: false;
  error: string;
  code: SandboxErrorCode;
}

export interface SandboxSuccess {
  ok: true;
  result: QueryResult;
}

export type SandboxExecuteResult = SandboxSuccess | SandboxFailure;

export interface VerifySuccess {
  ok: true;
  result: QueryResult;
}

export interface VerifyFailure {
  ok: false;
  error: string;
  code: SandboxErrorCode;
  result?: QueryResult;
}

export type VerifyResult = VerifySuccess | VerifyFailure;

let enginePromise: Promise<SqlModule> | null = null;

type InitSqlJsFn = (config?: {
  locateFile?: (filename: string, prefix?: string) => string;
  wasmBinary?: ArrayBuffer | Uint8Array;
}) => Promise<SqlModule>;

function resolveInitSqlJs(mod: unknown): InitSqlJsFn {
  const rec = mod as { default?: unknown };
  const candidate = rec?.default ?? mod;
  if (typeof candidate !== "function") {
    throw new SqlInitError(
      "wasm",
      "Impossible de charger le moteur SQL. Actualisez la page, puis réessayez."
    );
  }
  return candidate as InitSqlJsFn;
}

async function browserEngineConfig(): Promise<{
  locateFile: (filename: string) => string;
  wasmBinary: Uint8Array;
}> {
  try {
    const response = await fetch(SQL_WASM_PUBLIC_PATH);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const wasmBinary = new Uint8Array(await response.arrayBuffer());
    if (wasmBinary.byteLength < 1024) {
      throw new Error("WASM trop petit");
    }
    return {
      wasmBinary,
      // Browser sql.js asks for sql-wasm-browser.wasm; we vendor a single identical file.
      locateFile: () => SQL_WASM_PUBLIC_PATH,
    };
  } catch {
    throw new SqlInitError(
      "wasm",
      "Impossible de charger le moteur SQL. Actualisez la page, puis réessayez."
    );
  }
}

export async function loadSqlEngine(): Promise<SqlModule> {
  if (!enginePromise) {
    enginePromise = (async () => {
      try {
        const initSqlJs = resolveInitSqlJs(await import("sql.js"));
        if (typeof window !== "undefined") {
          return initSqlJs(await browserEngineConfig());
        }
        return initSqlJs();
      } catch (err) {
        if (err instanceof SqlInitError) throw err;
        throw new SqlInitError(
          "wasm",
          "Impossible de charger le moteur SQL. Actualisez la page, puis réessayez."
        );
      }
    })().catch((err) => {
      enginePromise = null;
      throw err;
    });
  }
  return enginePromise;
}

export function stripSqlTrivia(sql: string): string {
  let out = "";
  let i = 0;
  let inSingle = false;
  let inDouble = false;
  let inLineComment = false;
  let inBlockComment = false;
  while (i < sql.length) {
    const ch = sql[i];
    const next = sql[i + 1];
    if (inLineComment) {
      if (ch === "\n") {
        inLineComment = false;
        out += ch;
      }
      i += 1;
      continue;
    }
    if (inBlockComment) {
      if (ch === "*" && next === "/") {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }
    if (!inSingle && !inDouble && ch === "-" && next === "-") {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (!inSingle && !inDouble && ch === "/" && next === "*") {
      inBlockComment = true;
      i += 2;
      continue;
    }
    if (!inDouble && ch === "'") {
      out += ch;
      if (inSingle && next === "'") {
        out += next;
        i += 2;
        continue;
      }
      inSingle = !inSingle;
      i += 1;
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      out += ch;
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

export function splitSqlStatements(sql: string): string[] {
  const stripped = stripSqlTrivia(sql);
  const statements: string[] = [];
  let current = "";
  let inSingle = false;
  let inDouble = false;
  for (let i = 0; i < stripped.length; i++) {
    const ch = stripped[i];
    if (!inDouble && ch === "'") {
      current += ch;
      if (inSingle && stripped[i + 1] === "'") {
        current += stripped[i + 1];
        i += 1;
      } else {
        inSingle = !inSingle;
      }
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      current += ch;
      continue;
    }
    if (!inSingle && !inDouble && ch === ";") {
      const trimmed = current.trim();
      if (trimmed) statements.push(trimmed);
      current = "";
      continue;
    }
    current += ch;
  }
  const trimmed = current.trim();
  if (trimmed) statements.push(trimmed);
  return statements;
}

function tokenizeSql(sql: string): string[] {
  const stripped = stripSqlTrivia(sql);
  const withoutStrings = stripped.replace(/'(?:''|[^'])*'/g, " ");
  return withoutStrings.match(/[A-Za-z_][A-Za-z0-9_]*/g)?.map((t) => t.toUpperCase()) ?? [];
}

export function assertSafeSelect(sql: string): SandboxFailure | null {
  const trimmed = sql.trim();
  if (!trimmed) {
    return { ok: false, code: "empty", error: "Votre requête est vide. Écrivez une instruction SELECT." };
  }
  const statements = splitSqlStatements(trimmed);
  if (statements.length === 0) {
    return { ok: false, code: "empty", error: "Votre requête est vide. Écrivez une instruction SELECT." };
  }
  if (statements.length > 1) {
    return {
      ok: false,
      code: "multiple",
      error: "Plusieurs instructions SQL sont interdites. Envoyez une seule requête SELECT.",
    };
  }
  const statement = statements[0];
  const tokens = tokenizeSql(statement);
  if (tokens.length === 0) {
    return { ok: false, code: "empty", error: "Votre requête est vide. Écrivez une instruction SELECT." };
  }
  if (!READ_START.has(tokens[0])) {
    return {
      ok: false,
      code: "forbidden",
      error: "Seules les requêtes de lecture (SELECT) sont autorisées dans cet exercice.",
    };
  }
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const next = tokens[i + 1];
    if (WRITE_KEYWORDS.has(token) || (token === "REPLACE" && (next === "INTO" || i === 0))) {
      return {
        ok: false,
        code: "forbidden",
        error: "Les requêtes d'écriture (INSERT, UPDATE, DELETE, DROP, ALTER, …) ne sont pas autorisées.",
      };
    }
    if (DENIED_FUNCTIONS.has(token) || token.startsWith("PRAGMA")) {
      return {
        ok: false,
        code: "forbidden",
        error: "Cette instruction n'est pas autorisée dans l'environnement d'apprentissage.",
      };
    }
  }
  return null;
}

export function translateSqliteError(err: unknown): { error: string; code: SandboxErrorCode } {
  const raw = err instanceof Error ? err.message : String(err);
  const noColumn = raw.match(/no such column:\s*([^\s(]+)/i);
  if (noColumn) {
    return {
      code: "unknown_column",
      error: `Colonne inconnue : « ${noColumn[1]} ». Vérifiez l'orthographe ou le schéma de l'exercice.`,
    };
  }
  const noTable = raw.match(/no such table:\s*([^\s(]+)/i);
  if (noTable) {
    return {
      code: "unknown_table",
      error: `Table inconnue : « ${noTable[1]} ». Cette table n'existe pas dans la base de l'exercice.`,
    };
  }
  if (/incomplete input/i.test(raw)) {
    return {
      code: "syntax",
      error: "Requête incomplète. Avez-vous oublié de terminer l'instruction ?",
    };
  }
  if (/syntax error/i.test(raw) || /near "/i.test(raw)) {
    return {
      code: "syntax",
      error: "Erreur de syntaxe SQL. Vérifiez les mots-clés, virgules et parenthèses.",
    };
  }
  if (/readonly|attempt to write|query_only/i.test(raw)) {
    return {
      code: "readonly",
      error: "Les requêtes d'écriture (INSERT, UPDATE, DELETE, DROP, …) ne sont pas autorisées.",
    };
  }
  return {
    code: "generic",
    error: "Erreur SQL. Vérifiez votre requête (noms de tables, colonnes et syntaxe).",
  };
}

export function normalizeCell(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  return String(value);
}

function normalizeColumn(name: string): string {
  return name.trim().toLowerCase();
}

function rowToRecord(columns: string[], row: unknown[]): Record<string, string> {
  const rec: Record<string, string> = {};
  columns.forEach((col, i) => {
    rec[normalizeColumn(col)] = normalizeCell(row[i]);
  });
  return rec;
}

function recordsEqual(a: Record<string, string>, b: Record<string, string>): boolean {
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((key) => a[key] === b[key]);
}

function matchNamedRows(
  actual: QueryResult,
  expectedColumns: string[],
  expectedRows: string[][],
  orderRequired: boolean
): boolean {
  const actualCols = actual.columns.map(normalizeColumn);
  const expectedCols = expectedColumns.map(normalizeColumn);
  if (actualCols.length !== expectedCols.length) return false;
  if (![...actualCols].sort().every((col, i) => col === [...expectedCols].sort()[i])) return false;

  const actualRecords = actual.values.map((row) => rowToRecord(actual.columns, row));
  const expectedRecords = expectedRows.map((row) => rowToRecord(expectedColumns, row));
  if (actualRecords.length !== expectedRecords.length) return false;
  if (orderRequired) {
    return actualRecords.every((rec, i) => recordsEqual(rec, expectedRecords[i]));
  }
  const remaining = [...expectedRecords];
  for (const rec of actualRecords) {
    const idx = remaining.findIndex((exp) => recordsEqual(exp, rec));
    if (idx < 0) return false;
    remaining.splice(idx, 1);
  }
  return remaining.length === 0;
}

function matchPositionalRows(actual: QueryResult, expectedRows: string[][], orderRequired: boolean): boolean {
  const actualRows = actual.values.map((row) => row.map(normalizeCell));
  const expected = expectedRows.map((row) => row.map((cell) => normalizeCell(cell)));
  if (actualRows.length !== expected.length) return false;
  if (expected[0] && actualRows[0] && actualRows[0].length !== expected[0].length) return false;
  if (orderRequired) {
    return actualRows.every((row, i) => row.length === expected[i].length && row.every((cell, j) => cell === expected[i][j]));
  }
  const remaining = [...expected];
  for (const row of actualRows) {
    const key = JSON.stringify(row);
    const idx = remaining.findIndex((exp) => JSON.stringify(exp.map(normalizeCell)) === key);
    if (idx < 0) return false;
    remaining.splice(idx, 1);
  }
  return remaining.length === 0;
}

export function matchResultSet(actual: QueryResult, shape: ExpectedShape): boolean {
  const orderRequired = Boolean(shape.orderRequired);
  if (shape.columns && shape.columns.length > 0) {
    return matchNamedRows(actual, shape.columns, shape.rows, orderRequired);
  }
  return matchPositionalRows(actual, shape.rows, orderRequired);
}

export function expectedShapesFromExercise(data: Pick<SqlExerciseData, "expectedResult" | "expectedColumns" | "expectedResults" | "orderRequired">): ExpectedShape[] {
  if (data.expectedResults && data.expectedResults.length > 0) {
    return data.expectedResults.map((shape) => ({
      columns: shape.columns,
      rows: shape.rows,
      orderRequired: shape.orderRequired ?? data.orderRequired,
    }));
  }
  return [
    {
      columns: data.expectedColumns,
      rows: data.expectedResult || [],
      orderRequired: Boolean(data.orderRequired),
    },
  ];
}

export function hasExpectedShape(data: Pick<SqlExerciseData, "expectedResult" | "expectedColumns" | "expectedResults">): boolean {
  if (data.expectedResults && data.expectedResults.length > 0) return true;
  return (data.expectedResult && data.expectedResult.length > 0) || Boolean(data.expectedColumns && data.expectedColumns.length > 0);
}

export function matchExerciseResult(
  actual: QueryResult,
  data: Pick<SqlExerciseData, "expectedResult" | "expectedColumns" | "expectedResults" | "orderRequired">
): boolean {
  if (!hasExpectedShape(data)) {
    return true;
  }
  return expectedShapesFromExercise(data).some((shape) => matchResultSet(actual, shape));
}

function enableQueryOnly(db: SqlJsDatabase) {
  try {
    db.run("PRAGMA query_only = ON");
  } catch {
    // Older builds may ignore this; parse + snapshot still apply.
  }
}

export class SqlSandbox {
  private snapshot: Uint8Array;
  private SQL: SqlModule;

  constructor(SQL: SqlModule, setupSql: string) {
    this.SQL = SQL;
    const db = new SQL.Database();
    try {
      if (setupSql && setupSql.trim()) {
        // Teacher schema (DROP/CREATE/INSERT) is trusted and must run here.
        // Learner queries go through assertSafeSelect() and stay SELECT-only.
        try {
          db.run(setupSql);
        } catch {
          throw new SqlInitError(
            "schema",
            "Impossible de préparer la base de l'exercice. Le schéma SQL (tables et données) contient une erreur."
          );
        }
      }
      this.snapshot = db.export();
    } finally {
      db.close();
    }
  }

  execute(sql: string, limits?: { maxRows?: number; timeoutMs?: number }): SandboxExecuteResult {
    const blocked = assertSafeSelect(sql);
    if (blocked) return blocked;

    const maxRows = limits?.maxRows ?? SQL_MAX_ROWS;
    const timeoutMs = limits?.timeoutMs ?? SQL_TIMEOUT_MS;
    const statementSql = splitSqlStatements(sql)[0];
    const db = new this.SQL.Database(this.snapshot);
    let stmt: SqlJsStatement | null = null;
    try {
      enableQueryOnly(db);
      try {
        db.run("BEGIN");
      } catch {
        /* ignore */
      }
      stmt = db.prepare(statementSql);
      const columns = stmt.getColumnNames();
      const values: unknown[][] = [];
      const started = Date.now();
      let truncated = false;
      while (stmt.step()) {
        if (Date.now() - started > timeoutMs) {
          return {
            ok: false,
            code: "timeout",
            error: `La requête a dépassé le temps imparti (${Math.round(timeoutMs / 1000)} s). Simplifiez-la ou ajoutez une clause LIMIT.`,
          };
        }
        if (values.length >= maxRows) {
          truncated = true;
          break;
        }
        values.push(stmt.get());
      }
      if (truncated) {
        return {
          ok: false,
          code: "row_limit",
          error: `La requête a renvoyé trop de lignes (limite : ${maxRows}). Ajoutez une clause LIMIT.`,
        };
      }
      return { ok: true, result: { columns, values } };
    } catch (err) {
      const translated = translateSqliteError(err);
      return { ok: false, ...translated };
    } finally {
      try {
        stmt?.free();
      } catch {
        /* ignore */
      }
      try {
        db.run("ROLLBACK");
      } catch {
        /* ignore */
      }
      db.close();
    }
  }

  verify(
    sql: string,
    data: Pick<SqlExerciseData, "expectedResult" | "expectedColumns" | "expectedResults" | "orderRequired">
  ): VerifyResult {
    const executed = this.execute(sql);
    if (!executed.ok) return executed;
    const { result } = executed;
    if (!hasExpectedShape(data)) {
      return { ok: true, result };
    }
    const shapes = expectedShapesFromExercise(data);
    const expectsRows = shapes.some((shape) => shape.rows.length > 0);
    if (result.values.length === 0 && expectsRows) {
      return {
        ok: false,
        code: "empty_result",
        error: "Résultat vide. Votre requête ne renvoie aucune ligne.",
        result,
      };
    }
    if (!matchExerciseResult(result, data)) {
      return {
        ok: false,
        code: "mismatch",
        error: "Le résultat ne correspond pas à l'attendu. Vérifiez les colonnes, les valeurs et éventuellement l'ordre des lignes.",
        result,
      };
    }
    return { ok: true, result };
  }
}

export async function createSqlSandbox(setupSql: string, SQL?: SqlModule): Promise<SqlSandbox> {
  const mod = SQL ?? (await loadSqlEngine());
  return new SqlSandbox(mod, setupSql);
}
