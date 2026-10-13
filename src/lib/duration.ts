export function formatCourseDuration(minutes: number | null | undefined): string {
  if (minutes == null || minutes <= 0) return "";
  if (minutes === 120) return "2h";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours > 0 && rest > 0) return `${hours}h${String(rest).padStart(2, "0")}`;
  if (hours > 0) return `${hours}h`;
  return `${minutes} min`;
}
