-- Colonnes optionnelles pour Mon espace. Sans elles, le profil est stocké via activity_events.
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS target_role TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS current_project TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS career_goal TEXT;
