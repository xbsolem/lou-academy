type Result<T> = { data: T | null; error: { message?: string; code?: string } | null };

export function tableMissing(error: { message?: string; code?: string } | null | undefined): boolean {
  if (!error) return false;
  const code = error.code || "";
  const message = (error.message || "").toLowerCase();
  return (
    code === "42P01" ||
    code === "PGRST205" ||
    code === "PGRST204" ||
    message.includes("does not exist") ||
    message.includes("schema cache") ||
    message.includes("could not find")
  );
}

export function rows<T>(result: Result<T[] | null>): T[] {
  if (result.error || !result.data) return [];
  return result.data;
}

export function one<T>(result: Result<T | null>): T | null {
  if (result.error || !result.data) return null;
  return result.data;
}
