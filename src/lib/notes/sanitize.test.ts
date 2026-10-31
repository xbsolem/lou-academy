import { describe, expect, it } from "vitest";
import { noteIsEmpty, sanitizeNoteHtmlFallback, stripTags } from "./sanitize";

describe("sanitizeNoteHtmlFallback", () => {
  it("drops scripts and event handlers", () => {
    const dirty = `<p onclick="alert(1)">Bonjour</p><script>alert(2)</script><img src=x onerror=alert(3)>`;
    const clean = sanitizeNoteHtmlFallback(dirty);
    expect(clean).not.toMatch(/script/i);
    expect(clean).not.toMatch(/onerror/i);
    expect(clean).not.toMatch(/onclick/i);
    expect(clean).toMatch(/Bonjour/);
  });

  it("keeps titles, lists and bold", () => {
    const html = `<h3>Titre</h3><ul><li><strong>Point</strong></li></ul>`;
    const clean = sanitizeNoteHtmlFallback(html);
    expect(clean).toContain("<h3>Titre</h3>");
    expect(clean).toContain("<strong>Point</strong>");
    expect(clean).toContain("<li>");
  });
});

describe("stripTags / empty", () => {
  it("treats whitespace-only notes as empty", () => {
    expect(noteIsEmpty("<p><br></p>")).toBe(true);
    expect(noteIsEmpty("<h3>Résumé</h3>")).toBe(false);
    expect(stripTags("<strong>abc</strong>")).toBe("abc");
  });
});
