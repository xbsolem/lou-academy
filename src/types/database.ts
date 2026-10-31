export type UserRole = "admin" | "creator" | "learner";
export type CourseStatus = "draft" | "published" | "archived";
export type EnrollmentStatus = "enrolled" | "in_progress" | "completed" | "dropped";
export type LessonType = "lesson" | "quiz" | "sql_exercise";
export type BlockType = "text" | "heading" | "callout" | "code" | "image" | "video" | "file" | "quiz" | "sql_exercise";
export type QuestionType = "single_choice" | "multiple_choice" | "true_false";

export interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  department: string | null;
  role: UserRole;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  last_activity_at: string | null;
  target_role?: string | null;
  current_project?: string | null;
  career_goal?: string | null;
  learning_mode?: "engaged" | "calm" | null;
  revision_reminders?: boolean;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  level: string | null;
  estimated_duration_minutes: number | null;
  thumbnail_url: string | null;
  status: CourseStatus;
  creator_id: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  icon: string | null;
  gradient: string | null;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  description: string | null;
  lesson_type: LessonType;
  position: number;
  estimated_duration_minutes: number | null;
  is_required: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContentBlock {
  id: string;
  lesson_id: string;
  block_type: BlockType;
  content: string;
  position: number;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: EnrollmentStatus;
  progress_percent: number;
  enrolled_at: string;
  started_at: string | null;
  completed_at: string | null;
  last_activity_at: string | null;
  last_lesson_id?: string | null;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  status: "not_started" | "in_progress" | "completed";
  progress_percent: number;
  time_spent_seconds: number;
  started_at: string | null;
  completed_at: string | null;
  updated_at: string;
  metadata?: Record<string, unknown> | null;
}

export interface Quiz {
  id: string;
  lesson_id: string;
  title: string;
  passing_score: number;
  max_attempts: number | null;
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question: string;
  question_type: QuestionType;
  options: Record<string, unknown>;
  correct_answer: Record<string, unknown>;
  explanation: string | null;
  position: number;
}

export interface QuizAttempt {
  id: string;
  quiz_id: string;
  user_id: string;
  score: number;
  passed: boolean;
  answers: Record<string, unknown>;
  started_at: string;
  completed_at: string | null;
}

export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  certificate_number: string;
  issued_at: string;
  metadata: Record<string, unknown> | null;
}

export interface ActivityEvent {
  id: string;
  user_id: string;
  course_id: string | null;
  lesson_id: string | null;
  event_type: string;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export interface AiGeneration {
  id: string;
  user_id: string;
  course_id: string | null;
  generation_type: string;
  prompt: string;
  status: "pending" | "completed" | "failed";
  model: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

export type MasteryLevel = 1 | 2 | 3 | 4 | 5;
export type EvidenceType = "quiz_pass" | "sql_success" | "challenge_complete";
export type ChallengeType = "quiz" | "sql" | "practical" | "case";
export type ChallengeStatus = "available" | "in_progress" | "completed";
export type MissionKind = "core" | "advanced";

export interface CourseMission {
  id: string;
  course_id: string;
  module_id: string | null;
  title: string;
  problem: string;
  skills_summary: string;
  situations: string;
  outcome: string;
  kind: MissionKind;
  position: number;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface SkillDefinition {
  id: string;
  course_id: string;
  slug: string;
  title: string;
  description: string;
  workplace_application: string;
  position: number;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface SkillEvidence {
  id: string;
  skill_id: string;
  lesson_id: string;
  evidence_type: EvidenceType;
  weight: number;
}

export interface UserSkill {
  id: string;
  user_id: string;
  skill_id: string;
  mastery: MasteryLevel;
  source: string | null;
  updated_at: string;
}

export interface UserSkillEvent {
  id: string;
  user_id: string;
  skill_id: string;
  lesson_id: string | null;
  evidence_type: EvidenceType;
  score: number | null;
  created_at: string;
}

export interface Badge {
  id: string;
  course_id: string | null;
  slug: string;
  title: string;
  description: string;
  icon: string;
  criteria: Record<string, unknown>;
  created_at: string;
}

export interface UserBadge {
  id: string;
  user_id: string;
  badge_id: string;
  earned_at: string;
  shared: boolean;
}

export interface Challenge {
  id: string;
  course_id: string;
  lesson_id: string | null;
  skill_id: string | null;
  title: string;
  description: string;
  challenge_type: ChallengeType;
  workplace_context: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface UserChallengeProgress {
  id: string;
  user_id: string;
  challenge_id: string;
  status: ChallengeStatus;
  score: number | null;
  completed_at: string | null;
  updated_at: string;
}

export interface CourseSource {
  id: string;
  course_id: string;
  name: string;
  file_type: string;
  storage_path: string;
  extracted_text: string | null;
  status: "uploading" | "processing" | "ready" | "failed";
  metadata: Record<string, unknown> | null;
  created_at: string;
}
