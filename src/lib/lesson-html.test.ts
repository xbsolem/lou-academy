import { describe, expect, it } from "vitest";
import { lessonBlockHtml, looksLikeHtml, sanitizeLessonHtml, wrapTables } from "./lesson-html";

describe("lesson HTML", () => {
  it("detects markup versus plain text", () => {
    expect(looksLikeHtml("<table><tr><td>A</td></tr></table>")).toBe(true);
    expect(looksLikeHtml("Un paragraphe sans balise.")).toBe(false);
  });

  it("wraps tables so they can scroll inside the player", () => {
    const wrapped = wrapTables("<p>x</p><table><tr><td>wide</td></tr></table>");
    expect(wrapped).toContain('class="table-responsive"');
    expect(wrapped).toContain("<table>");
  });

  it("strips scripts from lesson HTML", () => {
    const clean = sanitizeLessonHtml(`<p>ok</p><script>alert(1)</script><table><tr><td onclick="x">1</td></tr></table>`);
    expect(clean).not.toMatch(/script/i);
    expect(clean).not.toMatch(/onclick/i);
    expect(clean).toContain("table-responsive");
  });

  it("turns plain text into wrapped paragraphs", () => {
    const html = lessonBlockHtml("Ligne 1\n\nLigne 2");
    expect(html).toContain("<p>");
    expect(html).toContain("Ligne 1");
  });
});
