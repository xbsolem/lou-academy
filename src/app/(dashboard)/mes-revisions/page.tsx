import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { loadRevisionLibrary } from "@/lib/revisions/load";
import { groupRevisionLibrary } from "@/lib/revisions/group";
import RevisionsClient from "./RevisionsClient";

export default async function MesRevisionsPage() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { items, tablesMissing } = await loadRevisionLibrary(user.id);

  return (
    <>
      <h1>Mes révisions</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Notes personnelles et fiches de révision, regroupées par formation. Vous seul y avez accès.
      </p>
      {tablesMissing && (
        <p className="form-info" role="status">
          Les tables notes / fiches ne sont pas encore créées. Collez dans l&apos;éditeur SQL Supabase, dans cet
          ordre : <code>020_octalysis.sql</code>, <code>021_lesson_notes.sql</code>,{" "}
          <code>022_revision_sheets.sql</code>.
        </p>
      )}
      <RevisionsClient groups={groupRevisionLibrary(items)} />
    </>
  );
}
