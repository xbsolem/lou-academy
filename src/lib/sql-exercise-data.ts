export interface ExpectedShape {
  columns?: string[];
  rows: string[][];
  orderRequired?: boolean;
}

export interface SqlExerciseData {
  instructions: string;
  schema: string;
  setupSql: string;
  expectedResult: string[][];
  expectedColumns?: string[];
  expectedResults?: ExpectedShape[];
  orderRequired?: boolean;
  hints: string[];
  solution: string;
  starterQuery: string;
  points?: number;
  practicalExam?: boolean;
}

export const DEFAULT_SQL_EXERCISE: SqlExerciseData = {
  instructions: "",
  schema: "",
  setupSql: "",
  expectedResult: [],
  expectedColumns: [],
  expectedResults: [],
  orderRequired: false,
  hints: [],
  solution: "",
  starterQuery: "SELECT ",
  points: 4,
  practicalExam: false,
};

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((v) => String(v));
}

function asRowMatrix(value: unknown): string[][] {
  if (!Array.isArray(value)) return [];
  return value.map((row) => (Array.isArray(row) ? row.map((cell) => (cell == null ? "NULL" : String(cell))) : [String(row)]));
}

function asShapes(value: unknown): ExpectedShape[] | undefined {
  if (!Array.isArray(value) || value.length === 0) return undefined;
  return value
    .map((item) => {
      if (Array.isArray(item)) {
        return { rows: asRowMatrix(item) };
      }
      if (item && typeof item === "object") {
        const rec = item as Record<string, unknown>;
        const rows = asRowMatrix(rec.rows ?? rec.values ?? rec.expectedResult);
        const columns = rec.columns ? asStringArray(rec.columns) : undefined;
        return {
          rows,
          columns,
          orderRequired: Boolean(rec.orderRequired),
        };
      }
      return { rows: [] };
    });
}

export function parseSqlExerciseData(raw: unknown): SqlExerciseData | null {
  let value = raw;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return { ...DEFAULT_SQL_EXERCISE };
    try {
      value = JSON.parse(trimmed);
    } catch {
      return {
        ...DEFAULT_SQL_EXERCISE,
        instructions: trimmed,
      };
    }
  }
  if (!value || typeof value !== "object") return null;
  const rec = value as Record<string, unknown>;
  const hints = Array.isArray(rec.hints) ? rec.hints.map((h) => String(h)) : [];
  return {
    instructions: String(rec.instructions ?? ""),
    schema: String(rec.schema ?? ""),
    setupSql: String(rec.setupSql ?? rec.setup_sql ?? ""),
    expectedResult: asRowMatrix(rec.expectedResult ?? rec.expected_result),
    expectedColumns: rec.expectedColumns
      ? asStringArray(rec.expectedColumns)
      : rec.expected_columns
        ? asStringArray(rec.expected_columns)
        : undefined,
    expectedResults: asShapes(rec.expectedResults ?? rec.expected_results),
    orderRequired: Boolean(rec.orderRequired ?? rec.order_required),
    hints,
    solution: String(rec.solution ?? ""),
    starterQuery: String(rec.starterQuery ?? rec.starter_query ?? ""),
    points: typeof rec.points === "number" && Number.isFinite(rec.points) ? rec.points : 4,
    practicalExam: Boolean(rec.practicalExam ?? rec.practical_exam),
  };
}

export function serializeSqlExerciseData(data: SqlExerciseData): string {
  return JSON.stringify({
    instructions: data.instructions,
    schema: data.schema,
    setupSql: data.setupSql,
    expectedResult: data.expectedResult,
    expectedColumns: data.expectedColumns ?? [],
    expectedResults: data.expectedResults ?? [],
    orderRequired: Boolean(data.orderRequired),
    hints: data.hints,
    solution: data.solution,
    starterQuery: data.starterQuery,
    points: data.points ?? 4,
    practicalExam: Boolean(data.practicalExam),
  });
}
