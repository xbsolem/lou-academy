import { lessonBlockHtml } from "@/lib/lesson-html";

export default function LessonHtml({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={`lesson-html ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: lessonBlockHtml(content) }}
    />
  );
}
