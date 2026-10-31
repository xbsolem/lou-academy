-- Notes personnelles par leçon.
-- À exécuter APRÈS 001–011 et 020_octalysis.sql.
-- Idempotent et non destructif : ne touche pas au contenu pédagogique ni à la progression.

CREATE TABLE IF NOT EXISTS lesson_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT '',
  body_html TEXT NOT NULL DEFAULT '',
  body_text TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS lesson_notes_user_idx ON lesson_notes(user_id);
CREATE INDEX IF NOT EXISTS lesson_notes_course_idx ON lesson_notes(course_id);
CREATE INDEX IF NOT EXISTS lesson_notes_lesson_idx ON lesson_notes(lesson_id);

ALTER TABLE lesson_notes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "notes_select_own" ON lesson_notes;
DROP POLICY IF EXISTS "notes_insert_own" ON lesson_notes;
DROP POLICY IF EXISTS "notes_update_own" ON lesson_notes;
DROP POLICY IF EXISTS "notes_delete_own" ON lesson_notes;

CREATE POLICY "notes_select_own" ON lesson_notes
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');

CREATE POLICY "notes_insert_own" ON lesson_notes
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "notes_update_own" ON lesson_notes
  FOR UPDATE USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "notes_delete_own" ON lesson_notes
  FOR DELETE USING (user_id = auth.uid() OR get_user_role() = 'admin');
