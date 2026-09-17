-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_generations ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_sources ENABLE ROW LEVEL SECURITY;

-- Helper function to get current user role
CREATE OR REPLACE FUNCTION get_user_role()
RETURNS TEXT AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Profiles: users can read all profiles, update their own
CREATE POLICY "profiles_select" ON profiles FOR SELECT USING (true);
CREATE POLICY "profiles_update_own" ON profiles FOR UPDATE USING (id = auth.uid());
CREATE POLICY "profiles_admin_all" ON profiles FOR ALL USING (get_user_role() = 'admin');

-- Courses: everyone can read published, creators can manage their own, admins all
CREATE POLICY "courses_select_published" ON courses FOR SELECT USING (status = 'published' OR creator_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "courses_insert" ON courses FOR INSERT WITH CHECK (creator_id = auth.uid() AND get_user_role() IN ('admin', 'creator'));
CREATE POLICY "courses_update" ON courses FOR UPDATE USING (creator_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "courses_delete" ON courses FOR DELETE USING (creator_id = auth.uid() OR get_user_role() = 'admin');

-- Modules/Lessons/Blocks: follow course permissions
CREATE POLICY "modules_select" ON modules FOR SELECT USING (true);
CREATE POLICY "modules_manage" ON modules FOR ALL USING (
  EXISTS (SELECT 1 FROM courses WHERE courses.id = modules.course_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

CREATE POLICY "lessons_select" ON lessons FOR SELECT USING (true);
CREATE POLICY "lessons_manage" ON lessons FOR ALL USING (
  EXISTS (SELECT 1 FROM modules JOIN courses ON courses.id = modules.course_id WHERE modules.id = lessons.module_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

CREATE POLICY "blocks_select" ON content_blocks FOR SELECT USING (true);
CREATE POLICY "blocks_manage" ON content_blocks FOR ALL USING (
  EXISTS (SELECT 1 FROM lessons JOIN modules ON modules.id = lessons.module_id JOIN courses ON courses.id = modules.course_id WHERE lessons.id = content_blocks.lesson_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

-- Enrollments: users see their own, admins see all
CREATE POLICY "enrollments_select" ON enrollments FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "enrollments_insert" ON enrollments FOR INSERT WITH CHECK (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "enrollments_update" ON enrollments FOR UPDATE USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "enrollments_delete" ON enrollments FOR DELETE USING (get_user_role() = 'admin');

-- Lesson Progress: own only
CREATE POLICY "progress_select" ON lesson_progress FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "progress_manage" ON lesson_progress FOR ALL USING (user_id = auth.uid());

-- Quizzes/Questions: readable by all, manageable by course owner
CREATE POLICY "quizzes_select" ON quizzes FOR SELECT USING (true);
CREATE POLICY "quizzes_manage" ON quizzes FOR ALL USING (
  EXISTS (SELECT 1 FROM lessons JOIN modules ON modules.id = lessons.module_id JOIN courses ON courses.id = modules.course_id WHERE lessons.id = quizzes.lesson_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

CREATE POLICY "questions_select" ON quiz_questions FOR SELECT USING (true);
CREATE POLICY "questions_manage" ON quiz_questions FOR ALL USING (
  EXISTS (SELECT 1 FROM quizzes JOIN lessons ON lessons.id = quizzes.lesson_id JOIN modules ON modules.id = lessons.module_id JOIN courses ON courses.id = modules.course_id WHERE quizzes.id = quiz_questions.quiz_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

-- Quiz Attempts: own only
CREATE POLICY "attempts_select" ON quiz_attempts FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "attempts_insert" ON quiz_attempts FOR INSERT WITH CHECK (user_id = auth.uid());

-- Certificates
CREATE POLICY "certs_select" ON certificates FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "certs_insert" ON certificates FOR INSERT WITH CHECK (get_user_role() = 'admin' OR user_id = auth.uid());

-- Activity Events
CREATE POLICY "events_select" ON activity_events FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "events_insert" ON activity_events FOR INSERT WITH CHECK (user_id = auth.uid());

-- AI Generations
CREATE POLICY "ai_select" ON ai_generations FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
CREATE POLICY "ai_insert" ON ai_generations FOR INSERT WITH CHECK (user_id = auth.uid());

-- Course Sources
CREATE POLICY "sources_select" ON course_sources FOR SELECT USING (
  EXISTS (SELECT 1 FROM courses WHERE courses.id = course_sources.course_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);
CREATE POLICY "sources_manage" ON course_sources FOR ALL USING (
  EXISTS (SELECT 1 FROM courses WHERE courses.id = course_sources.course_id AND (courses.creator_id = auth.uid() OR get_user_role() = 'admin'))
);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'learner')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_modules_updated_at BEFORE UPDATE ON modules FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_content_blocks_updated_at BEFORE UPDATE ON content_blocks FOR EACH ROW EXECUTE FUNCTION update_updated_at();
