const ALLOWED = new Set(["P", "H3", "H4", "STRONG", "B", "EM", "I", "UL", "OL", "LI", "BR", "DIV", "SPAN"]);

export function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|h3|h4|li|div)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function escapeText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitizeNode(node: Node, doc: Document): Node | null {
  if (node.nodeType === 3) {
    const text = node.textContent || "";
    return text ? doc.createTextNode(text) : null;
  }
  if (node.nodeType !== 1) return null;
  const el = node as Element;
  const tag = el.tagName.toUpperCase();
  if (tag === "SCRIPT" || tag === "STYLE" || tag === "IFRAME") return null;
  if (!ALLOWED.has(tag)) {
    const frag = doc.createDocumentFragment();
    Array.from(el.childNodes).forEach((child) => {
      const clean = sanitizeNode(child, doc);
      if (clean) frag.appendChild(clean);
    });
    return frag.childNodes.length ? frag : null;
  }
  const cleanEl = doc.createElement(tag === "B" ? "strong" : tag === "I" ? "em" : tag.toLowerCase());
  Array.from(el.childNodes).forEach((child) => {
    const clean = sanitizeNode(child, doc);
    if (clean) cleanEl.appendChild(clean);
  });
  return cleanEl;
}

export function sanitizeNoteHtml(html: string): string {
  if (!html || typeof html !== "string") return "";
  if (typeof window === "undefined" || typeof DOMParser === "undefined") {
    return sanitizeNoteHtmlFallback(html);
  }
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
  const root = doc.body.firstElementChild;
  if (!root) return "";
  const out = doc.createElement("div");
  Array.from(root.childNodes).forEach((child) => {
    const clean = sanitizeNode(child, doc);
    if (clean) out.appendChild(clean);
  });
  return out.innerHTML.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").trim();
}

/** Fallback déterministe pour les tests Node / SSR (pas d’exécution de script). */
export function sanitizeNoteHtmlFallback(html: string): string {
  const withoutDanger = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<\/?(img|iframe|object|embed|link|meta|svg)[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, " ");
  const allowed = withoutDanger.replace(
    /<\/?(?!p|h3|h4|strong|b|em|i|ul|ol|li|br|div|span)[a-z0-9]+(?:\s[^>]*)?>/gi,
    ""
  );
  return allowed.replace(/\s(style|class|id|src|href)=("[^"]*"|'[^']*'|[^\s>]+)/gi, "").trim();
}

export function noteIsEmpty(html: string): boolean {
  return stripTags(html).length === 0;
}

export function escapeNoteTitle(title: string): string {
  return escapeText(title).slice(0, 180);
}
