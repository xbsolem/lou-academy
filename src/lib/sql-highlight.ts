const KEYWORDS = new Set([
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "NOT",
  "IN",
  "IS",
  "NULL",
  "LIKE",
  "BETWEEN",
  "JOIN",
  "INNER",
  "LEFT",
  "RIGHT",
  "FULL",
  "OUTER",
  "ON",
  "AS",
  "ORDER",
  "BY",
  "GROUP",
  "HAVING",
  "LIMIT",
  "OFFSET",
  "DISTINCT",
  "UNION",
  "ALL",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "WITH",
  "ASC",
  "DESC",
  "COUNT",
  "SUM",
  "AVG",
  "MIN",
  "MAX",
  "CAST",
  "COALESCE",
  "EXISTS",
]);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function highlightSql(sql: string): string {
  const parts: string[] = [];
  const re =
    /('(?:''|[^'])*'|--[^\n]*|\/\*[\s\S]*?\*\/|\b[A-Za-z_][A-Za-z0-9_]*\b|\d+(?:\.\d+)?|.)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(sql))) {
    const token = match[0];
    if (token.startsWith("--") || token.startsWith("/*")) {
      parts.push(`<span class="sql-cm">${escapeHtml(token)}</span>`);
    } else if (token.startsWith("'")) {
      parts.push(`<span class="sql-str">${escapeHtml(token)}</span>`);
    } else if (/^\d/.test(token)) {
      parts.push(`<span class="sql-num">${escapeHtml(token)}</span>`);
    } else if (KEYWORDS.has(token.toUpperCase())) {
      parts.push(`<span class="sql-kw">${escapeHtml(token)}</span>`);
    } else {
      parts.push(escapeHtml(token));
    }
  }
  return parts.join("");
}
