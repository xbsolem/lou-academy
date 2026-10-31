-- Parcours professionnel (missions, compétences, défis, réalisations).
-- À exécuter dans l'éditeur SQL Supabase APRÈS 001–011.
-- Idempotent : relancer le script ne duplique pas les données.
-- N'altère pas le texte pédagogique des leçons.

-- ---------------------------------------------------------------------------
-- Colonnes additives
-- ---------------------------------------------------------------------------
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS revision_reminders BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE enrollments
  ADD COLUMN IF NOT EXISTS last_lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL;

-- ---------------------------------------------------------------------------
-- Tables de configuration (par cours)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS course_missions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  problem TEXT NOT NULL DEFAULT '',
  skills_summary TEXT NOT NULL DEFAULT '',
  situations TEXT NOT NULL DEFAULT '',
  outcome TEXT NOT NULL DEFAULT '',
  kind TEXT NOT NULL DEFAULT 'core' CHECK (kind IN ('core', 'advanced')),
  position INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS course_missions_course_module_uidx
  ON course_missions (course_id, COALESCE(module_id, '00000000-0000-0000-0000-000000000000'));
CREATE INDEX IF NOT EXISTS course_missions_course_idx ON course_missions(course_id);

CREATE TABLE IF NOT EXISTS skill_definitions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  workplace_application TEXT NOT NULL DEFAULT '',
  position INTEGER NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (course_id, slug)
);

CREATE INDEX IF NOT EXISTS skill_definitions_course_idx ON skill_definitions(course_id);

CREATE TABLE IF NOT EXISTS skill_evidence (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id UUID NOT NULL REFERENCES skill_definitions(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  evidence_type TEXT NOT NULL CHECK (evidence_type IN ('quiz_pass', 'sql_success', 'challenge_complete')),
  weight INTEGER NOT NULL DEFAULT 1,
  UNIQUE (skill_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS skill_evidence_lesson_idx ON skill_evidence(lesson_id);

CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT 'fa-award',
  criteria JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS badges_course_slug_uidx
  ON badges (COALESCE(course_id, '00000000-0000-0000-0000-000000000000'), slug);

CREATE TABLE IF NOT EXISTS challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skill_definitions(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  challenge_type TEXT NOT NULL CHECK (challenge_type IN ('quiz', 'sql', 'practical', 'case')),
  workplace_context TEXT NOT NULL DEFAULT '',
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS challenges_lesson_uidx
  ON challenges (lesson_id) WHERE lesson_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS challenges_course_idx ON challenges(course_id);

-- ---------------------------------------------------------------------------
-- Tables apprenant (lignes personnelles)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id UUID NOT NULL REFERENCES skill_definitions(id) ON DELETE CASCADE,
  mastery INTEGER NOT NULL DEFAULT 1 CHECK (mastery BETWEEN 1 AND 5),
  source TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, skill_id)
);

CREATE INDEX IF NOT EXISTS user_skills_user_idx ON user_skills(user_id);

CREATE TABLE IF NOT EXISTS user_skill_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id UUID NOT NULL REFERENCES skill_definitions(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,
  evidence_type TEXT NOT NULL CHECK (evidence_type IN ('quiz_pass', 'sql_success', 'challenge_complete')),
  score NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, skill_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS user_skill_events_user_idx ON user_skill_events(user_id);

CREATE TABLE IF NOT EXISTS user_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  shared BOOLEAN NOT NULL DEFAULT false,
  UNIQUE (user_id, badge_id)
);

CREATE INDEX IF NOT EXISTS user_badges_user_idx ON user_badges(user_id);

CREATE TABLE IF NOT EXISTS user_challenge_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  challenge_id UUID NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'in_progress', 'completed')),
  score NUMERIC,
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, challenge_id)
);

CREATE INDEX IF NOT EXISTS user_challenge_progress_user_idx ON user_challenge_progress(user_id);

-- Schéma collaboratif (stub) — pas de classement public
CREATE TABLE IF NOT EXISTS challenge_teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id UUID NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  name TEXT NOT NULL DEFAULT '',
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS challenge_team_members (
  team_id UUID NOT NULL REFERENCES challenge_teams(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (team_id, user_id)
);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
ALTER TABLE course_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_definitions ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skill_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenge_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_team_members ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION can_read_course_config(p_course_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM courses c
    WHERE c.id = p_course_id
      AND (
        get_user_role() IN ('admin', 'creator')
        OR c.creator_id = auth.uid()
        OR (
          c.status = 'published'
          AND EXISTS (
            SELECT 1 FROM enrollments e
            WHERE e.course_id = c.id AND e.user_id = auth.uid()
          )
        )
      )
  );
$$;

CREATE OR REPLACE FUNCTION can_manage_course_config(p_course_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM courses c
    WHERE c.id = p_course_id
      AND (get_user_role() = 'admin' OR c.creator_id = auth.uid())
  );
$$;

DROP POLICY IF EXISTS course_missions_select ON course_missions;
CREATE POLICY course_missions_select ON course_missions
  FOR SELECT USING (can_read_course_config(course_id));
DROP POLICY IF EXISTS course_missions_manage ON course_missions;
CREATE POLICY course_missions_manage ON course_missions
  FOR ALL USING (can_manage_course_config(course_id))
  WITH CHECK (can_manage_course_config(course_id));

DROP POLICY IF EXISTS skill_definitions_select ON skill_definitions;
CREATE POLICY skill_definitions_select ON skill_definitions
  FOR SELECT USING (can_read_course_config(course_id));
DROP POLICY IF EXISTS skill_definitions_manage ON skill_definitions;
CREATE POLICY skill_definitions_manage ON skill_definitions
  FOR ALL USING (can_manage_course_config(course_id))
  WITH CHECK (can_manage_course_config(course_id));

DROP POLICY IF EXISTS skill_evidence_select ON skill_evidence;
CREATE POLICY skill_evidence_select ON skill_evidence
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM skill_definitions sd
      WHERE sd.id = skill_evidence.skill_id AND can_read_course_config(sd.course_id)
    )
  );
DROP POLICY IF EXISTS skill_evidence_manage ON skill_evidence;
CREATE POLICY skill_evidence_manage ON skill_evidence
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM skill_definitions sd
      WHERE sd.id = skill_evidence.skill_id AND can_manage_course_config(sd.course_id)
    )
  );

DROP POLICY IF EXISTS badges_select ON badges;
CREATE POLICY badges_select ON badges
  FOR SELECT USING (course_id IS NULL OR can_read_course_config(course_id));
DROP POLICY IF EXISTS badges_manage ON badges;
CREATE POLICY badges_manage ON badges
  FOR ALL USING (
    (course_id IS NULL AND get_user_role() = 'admin')
    OR (course_id IS NOT NULL AND can_manage_course_config(course_id))
  )
  WITH CHECK (
    (course_id IS NULL AND get_user_role() = 'admin')
    OR (course_id IS NOT NULL AND can_manage_course_config(course_id))
  );

DROP POLICY IF EXISTS challenges_select ON challenges;
CREATE POLICY challenges_select ON challenges
  FOR SELECT USING (can_read_course_config(course_id));
DROP POLICY IF EXISTS challenges_manage ON challenges;
CREATE POLICY challenges_manage ON challenges
  FOR ALL USING (can_manage_course_config(course_id))
  WITH CHECK (can_manage_course_config(course_id));

DROP POLICY IF EXISTS user_skills_select ON user_skills;
CREATE POLICY user_skills_select ON user_skills
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
DROP POLICY IF EXISTS user_skills_write ON user_skills;
CREATE POLICY user_skills_write ON user_skills
  FOR INSERT WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS user_skills_update ON user_skills;
CREATE POLICY user_skills_update ON user_skills
  FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
-- Pas de DELETE apprenant : une compétence acquise n'est pas retirée.

DROP POLICY IF EXISTS user_skill_events_select ON user_skill_events;
CREATE POLICY user_skill_events_select ON user_skill_events
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
DROP POLICY IF EXISTS user_skill_events_write ON user_skill_events;
CREATE POLICY user_skill_events_write ON user_skill_events
  FOR INSERT WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS user_skill_events_update ON user_skill_events;
CREATE POLICY user_skill_events_update ON user_skill_events
  FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS user_badges_select ON user_badges;
CREATE POLICY user_badges_select ON user_badges
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin' OR shared = true);
DROP POLICY IF EXISTS user_badges_write ON user_badges;
CREATE POLICY user_badges_write ON user_badges
  FOR INSERT WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS user_badges_update ON user_badges;
CREATE POLICY user_badges_update ON user_badges
  FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS user_challenge_progress_select ON user_challenge_progress;
CREATE POLICY user_challenge_progress_select ON user_challenge_progress
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
DROP POLICY IF EXISTS user_challenge_progress_write ON user_challenge_progress;
CREATE POLICY user_challenge_progress_write ON user_challenge_progress
  FOR INSERT WITH CHECK (user_id = auth.uid());
DROP POLICY IF EXISTS user_challenge_progress_update ON user_challenge_progress;
CREATE POLICY user_challenge_progress_update ON user_challenge_progress
  FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS challenge_teams_select ON challenge_teams;
CREATE POLICY challenge_teams_select ON challenge_teams
  FOR SELECT USING (
    created_by = auth.uid()
    OR get_user_role() = 'admin'
    OR EXISTS (SELECT 1 FROM challenge_team_members m WHERE m.team_id = challenge_teams.id AND m.user_id = auth.uid())
  );
DROP POLICY IF EXISTS challenge_teams_write ON challenge_teams;
CREATE POLICY challenge_teams_write ON challenge_teams
  FOR INSERT WITH CHECK (created_by = auth.uid());

DROP POLICY IF EXISTS challenge_team_members_select ON challenge_team_members;
CREATE POLICY challenge_team_members_select ON challenge_team_members
  FOR SELECT USING (user_id = auth.uid() OR get_user_role() = 'admin');
DROP POLICY IF EXISTS challenge_team_members_write ON challenge_team_members;
CREATE POLICY challenge_team_members_write ON challenge_team_members
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- Seeds : missions de cours (textes issus des descriptions existantes)
-- ---------------------------------------------------------------------------
INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT c.id, NULL, 'Lire et interroger une base métier',
  'Une équipe métier a besoin d''extraire des clients, commandes et produits sans attendre un développeur. La boutique pédagogique (clients, produits, commandes) sert de terrain.',
  'SELECT, FROM, WHERE, ORDER BY, LIMIT, COUNT, SUM, AVG.',
  'Lister des clients, filtrer une ville ou un âge, classer des produits, calculer un volume.',
  'Vous rédigez des requêtes de lecture utiles et vous validez vos acquis par un quiz (70 %) et un test pratique de 5 tâches.',
  'core', 0
FROM courses c
WHERE c.slug = 'sql-pour-debutants-2h'
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = c.id AND cm.module_id IS NULL
  );

INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT c.id, NULL, 'Recruter de bout en bout, dans le cadre légal',
  'Un manager attend un recrutement : besoin flou, délai, budget, risque de discrimination et de données mal traitées.',
  'Cadrage, sourcing, entretien structuré, décision, offre, intégration, non-discrimination et RGPD.',
  'PME, ETI, startup, cabinet, intérim — du brief à la DPAE.',
  'Vous menez un recrutement fictif documenté, sans garantir un poste ni un titre RNCP.',
  'core', 0
FROM courses c
WHERE c.slug = 'devenir-recruteur-a-z'
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = c.id AND cm.module_id IS NULL
  );

INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT c.id, NULL, 'Produire une paie justifiée, mois après mois',
  'Un portefeuille de salariés doit être payé à date, avec des variables, des absences et une DSN. Une erreur se voit sur le bulletin et dans les déclarations.',
  'Bulletin, cotisations, faits sociaux, DSN, clôture, explication au salarié, administration du personnel.',
  'Cabinet, CSP, TPE — cas Atelier Lumière Paie et paramètres 2026 sourcés.',
  'Vous savez produire, contrôler et justifier une paie junior sous revue. Aucune rémunération ni certification logicielle n''est promise.',
  'core', 0
FROM courses c
WHERE c.slug = 'devenir-gestionnaire-de-paie'
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = c.id AND cm.module_id IS NULL
  );

INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT c.id, NULL, 'Piloter l''offre jeunes actifs — Banque Horizon',
  'Banque Horizon veut une offre pour les 25-35 ans. Il faut diagnostiquer, cadrer, chiffrer, recommander et déployer sans contourner la conformité.',
  'Diagnostic, cadrage, business case, comité, risques, déploiement, mesure.',
  'Comité de direction, marketing, risques, réseau — fil rouge Banque Horizon.',
  'Vous livrez une recommandation défendable (scénarios, ROI, conditions d''abandon) et une feuille de route. Ce n''est pas un titre RNCP.',
  'core', 0
FROM courses c
WHERE c.slug = 'chef-projet-marketing-developpement'
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = c.id AND cm.module_id IS NULL
  );

INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT c.id, NULL, 'Diagnostiquer Nova Services et proposer une organisation',
  'Groupe Nova Services (1 200 salariés) : croissance, turnover, départs à la retraite, métiers en tension, RH fragmentée. Le client attend un diagnostic et des livrables juniors, pas une décision sociale à sa place.',
  'Diagnostic d''organisation, analytics RH, SWP / GEPP, organisation cible, conduite du changement, livrable de conseil.',
  'Cabinet, sponsor RH, managers opérationnels — cas fil rouge Nova.',
  'Vous produisez un dossier de mission junior (constats, hypothèses, pistes). Aucune embauche ni rémunération n''est garantie.',
  'core', 0
FROM courses c
WHERE c.slug = 'consultant-junior-workforce-organization'
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = c.id AND cm.module_id IS NULL
  );

-- Chaque module existant devient une étape de mission (titre et description déjà en base)
INSERT INTO course_missions (course_id, module_id, title, problem, skills_summary, situations, outcome, kind, position)
SELECT
  m.course_id,
  m.id,
  m.title,
  COALESCE(NULLIF(btrim(m.description), ''), 'Avancer sur l''étape « ' || m.title || ' » dans le contexte professionnel du parcours.'),
  'Compétences travaillées dans ce module.',
  'Situations de travail liées à « ' || m.title || ' ».',
  'À l''issue de cette étape, vous appliquez « ' || m.title || ' » sur un cas du parcours.',
  'core',
  m.position
FROM modules m
JOIN courses c ON c.id = m.course_id
WHERE c.slug IN (
  'sql-pour-debutants-2h',
  'devenir-recruteur-a-z',
  'devenir-gestionnaire-de-paie',
  'chef-projet-marketing-developpement',
  'consultant-junior-workforce-organization'
)
  AND NOT EXISTS (
    SELECT 1 FROM course_missions cm WHERE cm.course_id = m.course_id AND cm.module_id = m.id
  );

-- Modules 100 % facultatifs = approfondissement (jamais un verrou du tronc commun)
UPDATE course_missions cm
SET kind = 'advanced'
FROM modules m
WHERE cm.module_id = m.id
  AND EXISTS (SELECT 1 FROM lessons l WHERE l.module_id = m.id)
  AND NOT EXISTS (SELECT 1 FROM lessons l WHERE l.module_id = m.id AND l.is_required = true);

-- ---------------------------------------------------------------------------
-- Compétences (3–6 par cours réel)
-- metadata.match : mots-clés pour relier quiz / exercices existants
-- ---------------------------------------------------------------------------
INSERT INTO skill_definitions (course_id, slug, title, description, workplace_application, position, metadata)
SELECT c.id, v.slug, v.title, v.description, v.workplace, v.position, v.metadata::jsonb
FROM courses c
JOIN (VALUES
  ('sql-pour-debutants-2h', 'lire-une-table', 'Lire une table',
    'Écrire un SELECT / FROM et choisir les colonnes utiles.',
    'Extraire une liste métier (clients, produits) sans exporter toute la base.',
    1, '{"match":["SELECT","FROM","prénom","Découvrir","Premières"]}'),
  ('sql-pour-debutants-2h', 'filtrer-des-lignes', 'Filtrer des lignes',
    'Restreindre un résultat avec WHERE, AND, OR et les comparaisons.',
    'Répondre à une demande du type « les clients de Paris de plus de 25 ans ».',
    2, '{"match":["WHERE","Filtrer","majeurs","Paris"]}'),
  ('sql-pour-debutants-2h', 'trier-limiter', 'Trier et limiter',
    'Classer avec ORDER BY et borner avec LIMIT.',
    'Sortir les 5 produits les plus chers ou les 3 clients les plus âgés.',
    3, '{"match":["ORDER","LIMIT","Trier","âgés","chers"]}'),
  ('sql-pour-debutants-2h', 'calculer-un-indicateur', 'Calculer un indicateur',
    'Compter, additionner et moyenner avec COUNT, SUM, AVG.',
    'Donner un volume, un panier moyen ou un total à un manager.',
    4, '{"match":["COUNT","SUM","AVG","Calculer","compter","moyenne","somme"]}'),
  ('sql-pour-debutants-2h', 'valider-une-requete', 'Valider une requête métier',
    'Réussir le quiz de validation et le test pratique.',
    'Livrer une extraction contrôlée, pas une requête « qui a l''air de marcher ».',
    5, '{"match":["Quiz","Test pratique","Évaluation"]}'),

  ('devenir-recruteur-a-z', 'cadrer-un-besoin', 'Cadrer un besoin',
    'Transformer une demande manager en besoin recruté, fiche et annonce.',
    'Tenir un brief : missions, critères, budget, délai, cadre légal de l''offre.',
    1, '{"match":["besoin","fiche","annonce"]}'),
  ('devenir-recruteur-a-z', 'sourcer-et-approcher', 'Sourcer et approcher',
    'Rechercher, approcher et suivre des candidats dans le respect du RGPD.',
    'Construire un vivier et un message d''approche honnête.',
    2, '{"match":["Sourcing","approche","booléen"]}'),
  ('devenir-recruteur-a-z', 'conduire-un-entretien', 'Conduire un entretien structuré',
    'Préqualifier et interviewer avec des questions autorisées et des preuves.',
    'Tenir un entretien reproductible, sans question interdite.',
    3, '{"match":["entretien","préqualification","CV"]}'),
  ('devenir-recruteur-a-z', 'decider-sans-biais', 'Décider sans biais',
    'Shortlist, notes, arbitrage : preuves d''abord.',
    'Présenter une shortlist et justifier un choix au manager.',
    4, '{"match":["Shortlist","décision","situations"]}'),
  ('devenir-recruteur-a-z', 'offre-et-integration', 'Offre et intégration',
    'Formuler une offre, gérer les refus, préparer l''arrivée (DPAE).',
    'Clôturer un process sans promesse orale non écrite.',
    5, '{"match":["offre","intégration","DPAE","projet"]}'),
  ('devenir-recruteur-a-z', 'cadre-juridique', 'Cadre juridique du recrutement',
    'Non-discrimination, questions autorisées, RGPD, promesse d''embauche.',
    'Arrêter un process dès qu''une demande manager sort du droit.',
    6, '{"match":["discrimination","RGPD","juridique"]}'),

  ('devenir-gestionnaire-de-paie', 'lire-un-bulletin', 'Lire et calculer un bulletin',
    'Relier brut, assiettes, cotisations, nets et paramètres 2026 sourcés.',
    'Produire un bulletin justifié, pas un résultat « proche ».',
    1, '{"match":["bulletin","brut","net","cotisations","plafond"]}'),
  ('devenir-gestionnaire-de-paie', 'qualifier-un-fait', 'Qualifier un fait social',
    'Entrée, sortie, absence, HS, arrêt : qualifier avant de calculer.',
    'Saisir une variable après avoir nommé le fait et sa source.',
    2, '{"match":["entrée","sortie","absence","congés","maladie","heures"]}'),
  ('devenir-gestionnaire-de-paie', 'preparer-une-dsn', 'Préparer une DSN',
    'Comprendre la DSN comme canal, pas comme bouton magique.',
    'Préparer un dépôt sous revue, lire un CRM, ne pas déposer hors délégation.',
    3, '{"match":["DSN"]}'),
  ('devenir-gestionnaire-de-paie', 'controler-une-cloture', 'Contrôler une clôture',
    'Contrôles de premier niveau avant paiement et déclarations.',
    'Tenir un calendrier et un journal d''anomalies.',
    4, '{"match":["clôture","contrôle","cycle"]}'),
  ('devenir-gestionnaire-de-paie', 'expliquer-sans-divulguer', 'Expliquer sans divulguer',
    'Répondre à un salarié sur SON bulletin, sans exposer le PAS d''un tiers.',
    'Formuler une explication factuelle, alerter en cas d''incident.',
    5, '{"match":["communication","divulguer"]}'),
  ('devenir-gestionnaire-de-paie', 'administrer-le-personnel', 'Administrer le personnel',
    'Contrats, DPAE, pièces : le minimum nécessaire à la tâche.',
    'Ouvrir uniquement les dossiers de votre portefeuille.',
    6, '{"match":["administration","personnel","DPAE"]}'),

  ('chef-projet-marketing-developpement', 'diagnostiquer-une-opportunite', 'Diagnostiquer une opportunité',
    'Problèmes, manques d''information, analyses à lancer — Banque Horizon.',
    'Poser un diagnostic avant de vendre une solution.',
    1, '{"match":["marché","opportunité","métier"]}'),
  ('chef-projet-marketing-developpement', 'cadrer-un-projet', 'Cadrer un projet',
    'Objectifs, périmètre, parties prenantes, livrables.',
    'Écrire un cadrage que le comité peut refuser ou borner.',
    2, '{"match":["cadrage"]}'),
  ('chef-projet-marketing-developpement', 'construire-un-business-case', 'Construire un business case',
    'Scénarios, coûts, CA, bénéfice, ROI, payback, conditions d''abandon.',
    'Comparer A / B / C sans contourner la conformité.',
    3, '{"match":["business case","décision"]}'),
  ('chef-projet-marketing-developpement', 'preparer-un-comite', 'Préparer un comité',
    'Synthèse exécutive : contexte, recommandation, risques, décision attendue.',
    'Parler au comité avec une recommandation unique et justifiée.',
    4, '{"match":["gouvernance","comité","décision"]}'),
  ('chef-projet-marketing-developpement', 'deployer-et-mesurer', 'Déployer et mesurer',
    'Feuille de route, risques, lancement, KPI.',
    'Passer d''une décision à un déploiement mesurable.',
    5, '{"match":["déploiement","performance","risques","projet","examen"]}'),

  ('consultant-junior-workforce-organization', 'diagnostiquer-une-organisation', 'Diagnostiquer une organisation',
    'Méthode de diagnostic junior — Nova Services.',
    'Séparer faits, hypothèses et recommandations.',
    1, '{"match":["diagnostic","métier","stratégie"]}'),
  ('consultant-junior-workforce-organization', 'analyser-des-effectifs', 'Analyser des effectifs',
    'ETP, turnover, pyramide, métiers en tension.',
    'Produire un constat chiffré sans inventer une donnée manquante.',
    2, '{"match":["analytics","effectifs"]}'),
  ('consultant-junior-workforce-organization', 'contribuer-swp-gepp', 'Contribuer au SWP / GEPP',
    'Esquisser un Strategic Workforce Planning et une GEPP.',
    'Proposer des pistes, pas un avis social à la place du client.',
    3, '{"match":["SWP","GEPP","compétences"]}'),
  ('consultant-junior-workforce-organization', 'esquisser-une-cible', 'Esquisser une organisation cible',
    'TOM, rôles, limites du junior.',
    'Dessiner une cible et ce qui reste à valider.',
    4, '{"match":["TOM","organisation","transfo","change"]}'),
  ('consultant-junior-workforce-organization', 'produire-un-livrable', 'Produire un livrable de conseil',
    'Note, slides, hypothèses, économie de mission.',
    'Livrer un dossier relisible par un manager de cabinet.',
    5, '{"match":["livrable","finance","mission","examen"]}')
) AS v(slug_course, slug, title, description, workplace, position, metadata)
  ON c.slug = v.slug_course
ON CONFLICT (course_id, slug) DO NOTHING;

-- Preuves : quiz et exercices SQL existants, via mots-clés
INSERT INTO skill_evidence (skill_id, lesson_id, evidence_type)
SELECT sd.id, l.id,
  CASE l.lesson_type
    WHEN 'quiz' THEN 'quiz_pass'
    WHEN 'sql_exercise' THEN 'sql_success'
    ELSE 'challenge_complete'
  END
FROM skill_definitions sd
JOIN modules m ON m.course_id = sd.course_id
JOIN lessons l ON l.module_id = m.id
WHERE l.lesson_type IN ('quiz', 'sql_exercise')
  AND EXISTS (
    SELECT 1
    FROM jsonb_array_elements_text(COALESCE(sd.metadata->'match', '[]'::jsonb)) kw
    WHERE l.title ILIKE '%' || kw || '%' OR m.title ILIKE '%' || kw || '%'
  )
ON CONFLICT (skill_id, lesson_id) DO NOTHING;

-- Filet : évaluation / examen / projet / test pratique → toutes les compétences du cours
INSERT INTO skill_evidence (skill_id, lesson_id, evidence_type)
SELECT sd.id, l.id,
  CASE l.lesson_type
    WHEN 'quiz' THEN 'quiz_pass'
    WHEN 'sql_exercise' THEN 'sql_success'
    ELSE 'challenge_complete'
  END
FROM skill_definitions sd
JOIN modules m ON m.course_id = sd.course_id
JOIN lessons l ON l.module_id = m.id
WHERE l.lesson_type IN ('quiz', 'sql_exercise')
  AND (
    l.title ILIKE '%Quiz%'
    OR l.title ILIKE '%Test pratique%'
    OR l.title ILIKE '%Évaluation%'
    OR l.title ILIKE '%Evaluation%'
    OR l.title ILIKE '%Examen%'
    OR m.title ILIKE '%Évaluation%'
    OR m.title ILIKE '%Evaluation%'
    OR m.title ILIKE '%Examen%'
    OR m.title ILIKE '%Projet%'
    OR m.title ILIKE '%Mission%'
  )
ON CONFLICT (skill_id, lesson_id) DO NOTHING;

-- ---------------------------------------------------------------------------
-- Défis : un défi par quiz / exercice SQL / leçon pratique existants
-- ---------------------------------------------------------------------------
INSERT INTO challenges (course_id, lesson_id, skill_id, title, description, challenge_type, workplace_context)
SELECT
  c.id,
  l.id,
  (
    SELECT se.skill_id
    FROM skill_evidence se
    WHERE se.lesson_id = l.id
    ORDER BY se.evidence_type
    LIMIT 1
  ),
  l.title,
  COALESCE(NULLIF(btrim(l.description), ''), 'Validez cette étape à partir du quiz ou de l''exercice déjà prévu dans le parcours.'),
  CASE
    WHEN l.lesson_type = 'quiz' THEN 'quiz'
    WHEN l.lesson_type = 'sql_exercise' THEN 'sql'
    ELSE 'case'
  END,
  'À transposer dans votre contexte professionnel, sur le cas du parcours « ' || c.title || ' ».'
FROM lessons l
JOIN modules m ON m.id = l.module_id
JOIN courses c ON c.id = m.course_id
WHERE l.lesson_type IN ('quiz', 'sql_exercise')
ON CONFLICT (lesson_id) WHERE lesson_id IS NOT NULL DO NOTHING;

-- ---------------------------------------------------------------------------
-- Réalisations (badges) — critères évalués côté application
-- ---------------------------------------------------------------------------
INSERT INTO badges (course_id, slug, title, description, icon, criteria)
SELECT c.id, v.slug, v.title, v.description, v.icon, v.criteria::jsonb
FROM courses c
JOIN (VALUES
  ('sql-pour-debutants-2h', 'premiere-competence', 'Première compétence SQL', 'Une compétence validée par un quiz ou un exercice réussi.', 'fa-database', '{"type":"first_skill"}'),
  ('sql-pour-debutants-2h', 'trois-applications', 'Requêtes utiles', 'Trois compétences au niveau Application ou plus.', 'fa-table', '{"type":"skills_at_least","count":3,"mastery":3}'),
  ('sql-pour-debutants-2h', 'parcours-termine', 'Parcours SQL terminé', 'Formation terminée (leçons requises et évaluations).', 'fa-check-circle', '{"type":"course_complete"}'),

  ('devenir-recruteur-a-z', 'premiere-competence', 'Premier geste de recrutement', 'Une compétence validée par une mise en situation ou un quiz.', 'fa-user-tie', '{"type":"first_skill"}'),
  ('devenir-recruteur-a-z', 'trois-applications', 'Processus tenu', 'Trois compétences au niveau Application ou plus.', 'fa-clipboard-check', '{"type":"skills_at_least","count":3,"mastery":3}'),
  ('devenir-recruteur-a-z', 'parcours-termine', 'Parcours recruteur terminé', 'Formation terminée, attestation possible.', 'fa-check-circle', '{"type":"course_complete"}'),

  ('devenir-gestionnaire-de-paie', 'premiere-competence', 'Premier geste de paie', 'Une compétence validée par un quiz ou un cas.', 'fa-file-invoice-dollar', '{"type":"first_skill"}'),
  ('devenir-gestionnaire-de-paie', 'trois-applications', 'Dossier sous contrôle', 'Trois compétences au niveau Application ou plus.', 'fa-balance-scale', '{"type":"skills_at_least","count":3,"mastery":3}'),
  ('devenir-gestionnaire-de-paie', 'parcours-termine', 'Parcours paie terminé', 'Formation terminée, attestation possible.', 'fa-check-circle', '{"type":"course_complete"}'),

  ('chef-projet-marketing-developpement', 'premiere-competence', 'Premier livrable Horizon', 'Une compétence validée sur le fil rouge Banque Horizon.', 'fa-diagram-project', '{"type":"first_skill"}'),
  ('chef-projet-marketing-developpement', 'trois-applications', 'Dossier comité', 'Trois compétences au niveau Application ou plus.', 'fa-briefcase', '{"type":"skills_at_least","count":3,"mastery":3}'),
  ('chef-projet-marketing-developpement', 'parcours-termine', 'Parcours marketing terminé', 'Formation terminée, attestation possible.', 'fa-check-circle', '{"type":"course_complete"}'),

  ('consultant-junior-workforce-organization', 'premiere-competence', 'Premier constat Nova', 'Une compétence validée sur le cas Groupe Nova Services.', 'fa-sitemap', '{"type":"first_skill"}'),
  ('consultant-junior-workforce-organization', 'trois-applications', 'Dossier de mission', 'Trois compétences au niveau Application ou plus.', 'fa-folder-open', '{"type":"skills_at_least","count":3,"mastery":3}'),
  ('consultant-junior-workforce-organization', 'parcours-termine', 'Parcours consultant terminé', 'Formation terminée, attestation possible.', 'fa-check-circle', '{"type":"course_complete"}')
) AS v(slug_course, slug, title, description, icon, criteria)
  ON c.slug = v.slug_course
WHERE NOT EXISTS (
  SELECT 1 FROM badges b WHERE b.course_id = c.id AND b.slug = v.slug
);
