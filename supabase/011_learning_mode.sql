-- Préférence de mode d'apprentissage. Sans cette colonne, le choix est stocké via activity_events.
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS learning_mode TEXT;
