-- Additive persistence for quiz autosave and SQL / practical attempts.
-- Run in the Supabase SQL editor (or psql) after 001–003.
-- Schema first: run this file (004) before 005_seed_sql_debutants.sql.

ALTER TABLE lesson_progress
  ADD COLUMN IF NOT EXISTS metadata JSONB;

-- Learners may update their own in-progress quiz attempts so answers can be
-- autosaved and restored after refresh. completed_at stays nullable (see 002).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'quiz_attempts'
      AND policyname = 'attempts_update_own'
  ) THEN
    CREATE POLICY "attempts_update_own" ON quiz_attempts
      FOR UPDATE
      USING (user_id = auth.uid())
      WITH CHECK (user_id = auth.uid());
  END IF;
END $$;
