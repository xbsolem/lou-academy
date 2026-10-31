-- Fiches de révision générées à partir du contenu réel de la leçon.
-- À exécuter APRÈS 001–011, 020_octalysis.sql et 021_lesson_notes.sql.
-- Idempotent et non destructif.

CREATE TABLE IF NOT EXISTS revision_sheets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT '',
  sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  source_hash TEXT,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS revision_sheets_user_idx ON revision_sheets(user_id);
CREATE INDEX IF NOT EXISTS revision_sheets_course_idx ON revision_sheets(course_id);
CREATE INDEX IF NOT EXISTS revision_sheets_lesson_idx ON revision_sheets(lesson_id);
CREATE INDEX IF NOT EXISTS revision_sheets_generated_idx ON revision_sheets(user_id, generated_at DESC);

ALTER TABLE revision_sheets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "sheets_select_own" ON revision_sheets;
DROP POLICY IF EXISTS "sheets_insert_own" ON revision_sheets;
DROP POLICY IF EXISTS "sheets_update_own" ON revision_sheets;
DROP POLICY IF EXISTS "sheets_delete_own" ON revision_sheets;

CREATE POLICY "sheets_select_own" ON revision_sheets
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');

CREATE POLICY "sheets_insert_own" ON revision_sheets
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "sheets_update_own" ON revision_sheets
  FOR UPDATE USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "sheets_delete_own" ON revision_sheets
  FOR DELETE USING (user_id = auth.uid() OR get_user_role() = 'admin');
