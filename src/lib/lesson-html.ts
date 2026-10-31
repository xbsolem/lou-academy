const HTML_HINT = /<\/?(table|thead|tbody|tr|td|th|ul|ol|li|p|h[1-6]|pre|code|div|section|article|br|strong|em)\b/i;

export function looksLikeHtml(value: string): boolean {
  return HTML_HINT.test(value);
}

export function wrapTables(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    if (/table-responsive/.test(table)) return table;
    return `<div class="table-responsive">${table}</div>`;
  });
}

export function sanitizeLessonHtml(html: string): string {
  const withoutScripts = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "");
  return wrapTables(withoutScripts);
}

export function plainTextToHtml(text: string): string {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .split(/\n{2,}/)
    .map((para) => `<p>${para.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export function lessonBlockHtml(content: string): string {
  const raw = content || "";
  if (looksLikeHtml(raw)) return sanitizeLessonHtml(raw);
  return plainTextToHtml(raw);
}
