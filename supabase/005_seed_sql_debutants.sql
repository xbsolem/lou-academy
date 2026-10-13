-- LOU Academy — seed: SQL pour débutants (2 heures)
-- Slug UNIQUE: sql-pour-debutants-2h
--
-- How to run
--   1. Open the Supabase SQL Editor as postgres (Dashboard → SQL).
--   2. Paste this entire file.
--   3. Execute. Safe to run twice: insert-if-absent on slug, children
--      inserted only if that course still has 0 modules.
--
-- Prerequisite: supabase/004_progress_metadata.sql (schema first).
-- Do NOT run supabase/001_schema.sql, 002, or 003 together with this file.
-- Do NOT DELETE the course (ON DELETE CASCADE would wipe children).
-- No service-role key required. No .env.local involved.
--
-- Insert order: courses → modules → lessons → content_blocks + quizzes
--               → quiz_questions (options / correct_answer as JSON arrays).
-- The course starts as draft, then is published at the end of THIS script
-- once children are in place (or already were, on a re-run).

BEGIN;

-- 1) Course row (draft). No-op if slug already exists — never a second tree.
INSERT INTO courses (
  title,
  slug,
  description,
  category,
  level,
  estimated_duration_minutes,
  status,
  creator_id,
  icon,
  gradient
)
SELECT
  'SQL pour débutants – Apprendre SQL en 2 heures',
  'sql-pour-debutants-2h',
  'Apprenez à interroger une base de données, même si vous n''avez jamais écrit une ligne de SQL.

En 120 minutes, vous passez de zéro à vos premières requêtes vraiment utiles. Une base de données, c''est comme une armoire de dossiers : chaque tiroir est une table, chaque fiche est une ligne, chaque champ de la fiche est une colonne. Vous pouvez aussi la voir comme plusieurs tableaux Excel liés entre eux.

Vous apprenez à lire des données avec SELECT, à choisir une table avec FROM, à filtrer avec WHERE, à combiner des conditions avec AND et OR, à trier avec ORDER BY, à limiter avec LIMIT, puis à calculer avec COUNT, SUM et AVG.

Aucune connaissance préalable n''est demandée. Vous pratiquez sur une petite boutique : clients, produits et commandes. Chaque notion est courte, illustrée, puis testée dans un exercice interactif. À la fin, un quiz de 30 questions (score requis : 70 %) et un test pratique de 5 tâches valident vos acquis.

Public : débutants, équipes métier, personnes qui veulent enfin lire une base sans demander à un développeur. Durée : 2 heures. Niveau : débutant. Catégorie : Data.',
  'Data',
  'debutant',
  120,
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  'fa-database',
  'linear-gradient(135deg, #4f46e5, #7c3aed)'
WHERE NOT EXISTS (
  SELECT 1 FROM courses WHERE slug = 'sql-pour-debutants-2h'
)
AND EXISTS (
  SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')
);

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator. Créez un utilisateur staff avant ce seed.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'sql-pour-debutants-2h') THEN
    RAISE EXCEPTION 'Cours sql-pour-debutants-2h absent (creator_id NULL ?).';
  END IF;
END
$guard$;

-- 2–5) Modules, lessons, content_blocks, quizzes, quiz_questions.
-- Skip the whole tree if this course already has modules (idempotent).
DO $seed$
DECLARE
  payload        jsonb := $coursejson$
{
  "slug": "sql-pour-debutants-2h",
  "title": "SQL pour débutants – Apprendre SQL en 2 heures",
  "description": "Apprenez à interroger une base de données, même si vous n'avez jamais écrit une ligne de SQL.\n\nEn 120 minutes, vous passez de zéro à vos premières requêtes vraiment utiles. Une base de données, c'est comme une armoire de dossiers : chaque tiroir est une table, chaque fiche est une ligne, chaque champ de la fiche est une colonne. Vous pouvez aussi la voir comme plusieurs tableaux Excel liés entre eux.\n\nVous apprenez à lire des données avec SELECT, à choisir une table avec FROM, à filtrer avec WHERE, à combiner des conditions avec AND et OR, à trier avec ORDER BY, à limiter avec LIMIT, puis à calculer avec COUNT, SUM et AVG.\n\nAucune connaissance préalable n'est demandée. Vous pratiquez sur une petite boutique : clients, produits et commandes. Chaque notion est courte, illustrée, puis testée dans un exercice interactif. À la fin, un quiz de 30 questions (score requis : 70 %) et un test pratique de 5 tâches valident vos acquis.\n\nPublic : débutants, équipes métier, personnes qui veulent enfin lire une base sans demander à un développeur. Durée : 2 heures. Niveau : débutant. Catégorie : Data.",
  "level": "debutant",
  "category": "Data",
  "icon": "fa-database",
  "gradient": "linear-gradient(135deg, #4f46e5, #7c3aed)",
  "estimated_duration_minutes": 120,
  "pedagogicalDb": {
    "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
    "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
  },
  "modules": [
    {
      "position": 0,
      "title": "Découvrir SQL",
      "description": "Comprendre ce qu'est une base de données, une table et le langage SQL, puis lire tous les clients.",
      "lessons": [
        {
          "position": 0,
          "title": "Qu'est-ce qu'une base de données ?",
          "description": "Voir une base comme une armoire de dossiers, pas comme un logiciel magique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez expliquer ce qu'est une base de données, avec vos propres mots."
            },
            {
              "block_type": "heading",
              "content": "L'analogie de l'armoire"
            },
            {
              "block_type": "text",
              "content": "Imaginez une armoire de bureau. Chaque tiroir contient un type de dossiers : un tiroir « clients », un tiroir « produits », un tiroir « commandes ». Une base de données, c'est cette armoire. Elle range l'information pour qu'on puisse la retrouver plus tard, sans tout mélanger.\n\nVous pouvez aussi penser à Excel. Un classeur contient plusieurs feuilles. Chaque feuille est un tableau : des colonnes en haut, des lignes en dessous. Une base de données, c'est plusieurs tableaux reliés, avec des règles plus strictes qu'un tableur."
            },
            {
              "block_type": "callout",
              "content": "Vous n'avez pas besoin de « créer » la base pour ce cours. Elle existe déjà. Votre métier, c'est de lui poser des questions claires."
            },
            {
              "block_type": "heading",
              "content": "Pourquoi une entreprise en a besoin"
            },
            {
              "block_type": "text",
              "content": "Sans base, les infos vivent dans des mails, des fichiers et des têtes. Avec une base, tout le monde consulte la même version : qui sont les clients, ce qu'ils ont acheté, ce qu'il reste en stock.\n\nSQL est le langage pour poser ces questions. Dans 2 heures, vous saurez en écrire les plus utiles."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "Une base de données range l'information dans des tables, comme des tiroirs d'armoire ou des feuilles Excel. SQL sert à interroger cette armoire."
            }
          ]
        },
        {
          "position": 1,
          "title": "Tables, colonnes et lignes",
          "description": "Nommer les trois briques d'une table : colonnes, lignes, valeurs.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez une table, une colonne et une ligne. Vous savez lire un petit tableau clients."
            },
            {
              "block_type": "heading",
              "content": "La table, c'est le tableau"
            },
            {
              "block_type": "text",
              "content": "Une table a un nom. Ici : CLIENTS. Les colonnes sont les titres : id, prenom, nom, age, ville. Chaque colonne pose la même question à toutes les fiches : quel âge ? quelle ville ?\n\nUne ligne est une fiche complète. La ligne de Léa, c'est tout ce qu'on sait sur Léa. Une cellule est une valeur : 22, ou Paris."
            },
            {
              "block_type": "heading",
              "content": "Notre table CLIENTS"
            },
            {
              "block_type": "code",
              "content": "CLIENTS\nid | prenom | nom      | age | ville\n1  | Léa    | Martin   | 22  | Paris\n2  | Hugo   | Bernard  | 28  | Lyon\n3  | Chloé  | Dubois   | 19  | Paris\n4  | Nathan | Thomas   | 35  | Marseille\n5  | Emma   | Robert   | 24  | Paris\n6  | Lucas  | Richard  | 31  | Lille\n7  | Manon  | Petit    | 17  | Lyon\n8  | Louis  | Durand   | 40  | Paris"
            },
            {
              "block_type": "callout",
              "content": "Comptez : 8 lignes = 8 clients. 5 colonnes = 5 informations par client. L'id identifie la fiche : deux personnes peuvent s'appeler Emma, pas deux id identiques."
            },
            {
              "block_type": "heading",
              "content": "Deux autres tiroirs"
            },
            {
              "block_type": "text",
              "content": "PRODUITS décrit le catalogue : nom, categorie, prix, stock. COMMANDES relie un client à un produit, avec une quantité. Pour l'instant, vous lisez surtout CLIENTS et PRODUITS. Les commandes sont là pour que l'armoire ressemble à une vraie boutique."
            },
            {
              "block_type": "code",
              "content": "PRODUITS\nid | nom               | categorie     | prix | stock\n1  | Casque audio      | Electronique  | 80   | 12\n2  | T-shirt coton     | Vetements     | 20   | 45\n3  | Mug LOU           | Accessoires   | 12   | 30\n4  | Clavier mecanique | Electronique  | 89   | 8\n5  | Sac a dos         | Accessoires   | 55   | 15\n6  | Lampe de bureau   | Maison        | 34   | 20\n7  | Souris sans fil   | Electronique  | 30   | 25\n8  | Veste laine       | Vetements     | 99   | 6"
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "Table = tableau. Colonne = type d'info. Ligne = une fiche. Dans ce cours, vous travaillez toujours sur les mêmes 8 clients et 8 produits."
            }
          ]
        },
        {
          "position": 2,
          "title": "À quoi sert SQL ?",
          "description": "SQL est la phrase qu'on adresse à la base pour lire des données.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous comprenez que SQL n'est pas un logiciel. C'est un langage de questions, avec des mots-clés en anglais."
            },
            {
              "block_type": "heading",
              "content": "Parler à l'armoire"
            },
            {
              "block_type": "text",
              "content": "Ouvrir tous les tiroirs à la main serait long. SQL permet de dire : « montre-moi les clients de Paris » ou « compte les produits ». La base exécute, puis renvoie un tableau résultat.\n\nLes mots-clés de ce cours tiennent sur une main : SELECT, FROM, WHERE, AND, OR, ORDER BY, LIMIT, COUNT, SUM, AVG. Vous les verrez un par un."
            },
            {
              "block_type": "heading",
              "content": "Exemple de phrase"
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, ville\nFROM clients;"
            },
            {
              "block_type": "text",
              "content": "En français : « Montre les prénoms et les villes, à partir de la table clients. » Le point-virgule termine la phrase. On l'écrit souvent, même si certains outils le pardonent."
            },
            {
              "block_type": "callout",
              "content": "SQL n'est pas sensible à la casse pour les mots-clés : SELECT et select marchent. Les données, elles, sont sensibles : 'Paris' n'est pas 'paris'. On écrit les mots-clés en MAJUSCULES pour les faire ressortir."
            },
            {
              "block_type": "heading",
              "content": "Ce que vous ne ferez pas encore"
            },
            {
              "block_type": "text",
              "content": "Ce cours est 100 % lecture : SELECT. Vous ne créez pas de table, vous ne modifiez pas de prix, vous n'effacez personne. Lire sans casser, c'est déjà un super-pouvoir au bureau."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "SQL = des phrases pour interroger la base. SELECT choisit les colonnes. FROM choisit la table. Le reste du cours ajoute des filtres, un tri, puis des calculs."
            }
          ]
        },
        {
          "position": 3,
          "title": "Exercice : voir tous les clients",
          "description": "Écrire votre première requête : SELECT * FROM clients.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "L'éditeur ci-dessus parle à la même boutique. L'étoile * signifie « toutes les colonnes ». Votre objectif : afficher les 8 clients, tels quels."
            },
            {
              "block_type": "callout",
              "content": "La validation compare le tableau résultat, pas le texte de votre requête. Si le résultat est le bon, c'est réussi."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez tous les clients : toutes les colonnes, toutes les lignes. Utilisez l'étoile pour ne pas lister les colonnes à la main.",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "7",
                    "Manon",
                    "Petit",
                    "17",
                    "Lyon"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "La table s'appelle clients (au pluriel, en minuscules).",
                  "La forme la plus courte est : SELECT * FROM clients;"
                ],
                "solution": "SELECT * FROM clients;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        }
      ]
    },
    {
      "position": 1,
      "title": "Premières requêtes",
      "description": "SELECT, FROM, l'étoile, puis le choix de colonnes précises.",
      "lessons": [
        {
          "position": 0,
          "title": "SELECT et FROM : lire une table",
          "description": "Deux mots suffisent pour lire : SELECT (quoi) et FROM (où).",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez à quoi servent SELECT et FROM, dans cet ordre."
            },
            {
              "block_type": "heading",
              "content": "L'ordre de la phrase"
            },
            {
              "block_type": "text",
              "content": "En français on dirait : « Dans le tiroir clients, montre-moi les prénoms. » En SQL, on inverse un peu : on commence par ce qu'on veut voir, puis d'où ça vient.\n\nSELECT = les colonnes demandées. FROM = la table. Toujours dans cet ordre."
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, ville\nFROM clients;"
            },
            {
              "block_type": "text",
              "content": "Résultat : deux colonnes seulement, une ligne par client. Léa / Paris, Hugo / Lyon, et ainsi de suite. Les autres colonnes (id, nom, age) restent dans l'armoire : on ne les a pas demandées."
            },
            {
              "block_type": "callout",
              "content": "On ne « sort » pas les dossiers de l'armoire. On en demande une photocopie. La table originale ne bouge pas."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "SELECT colonnes FROM table; — c'est le squelette de presque toutes vos requêtes."
            }
          ]
        },
        {
          "position": 1,
          "title": "SELECT * : tout récupérer",
          "description": "L'étoile demande toutes les colonnes, dans l'ordre de la table.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez quand utiliser * et pourquoi, plus tard, on préférera nommer les colonnes."
            },
            {
              "block_type": "heading",
              "content": "L'étoile, raccourci débutant"
            },
            {
              "block_type": "text",
              "content": "SELECT * FROM clients; copie tout le tableau. C'est parfait pour explorer : « je veux voir à quoi ressemble cette table ». Sur 8 lignes, c'est instantané. Sur 8 millions de lignes, c'est lourd. Pour apprendre, * est votre ami."
            },
            {
              "block_type": "code",
              "content": "SELECT * FROM clients;"
            },
            {
              "block_type": "text",
              "content": "Les colonnes arrivent dans l'ordre de la table : id, prenom, nom, age, ville. Vous n'avez rien réordonné."
            },
            {
              "block_type": "callout",
              "content": "Plus tard, en entreprise, on nomme les colonnes. Ici, * est autorisé et même recommandé pour vérifier qu'une table existe."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "* = toutes les colonnes. FROM clients = dans la table clients. Huit lignes s'affichent, une par client."
            }
          ]
        },
        {
          "position": 2,
          "title": "Choisir des colonnes",
          "description": "Ne demander que ce dont on a besoin : prenom, ville, prix…",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous listez une ou plusieurs colonnes, séparées par des virgules, dans l'ordre que vous voulez."
            },
            {
              "block_type": "heading",
              "content": "Nommer au lieu d'étoile"
            },
            {
              "block_type": "text",
              "content": "Si vous préparez un listing d'adresses, l'âge ne sert à rien. Demandez seulement prenom et ville. L'ordre après SELECT est l'ordre d'affichage : ville, prenom inverse les deux colonnes."
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, ville\nFROM clients;"
            },
            {
              "block_type": "text",
              "content": "Une seule colonne ? Pas de virgule : SELECT prenom FROM clients; Les noms de colonnes s'écrivent sans guillemets. Les textes dans les données, eux, auront des quotes simples — on y vient au module Filtrer."
            },
            {
              "block_type": "callout",
              "content": "Faute fréquente : SELECT prenom ville (sans virgule). SQL comprend mal. Mettez une virgule entre chaque colonne."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "SELECT col1, col2 FROM table; — virgule entre les colonnes, pas de virgule avant FROM."
            }
          ]
        },
        {
          "position": 3,
          "title": "Exercice : lister les prénoms",
          "description": "Une seule colonne : prenom.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On ne veut plus tout le dossier. Seulement les prénoms, dans l'ordre de la table."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez uniquement la colonne prenom de la table clients, toutes les lignes.",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "prenom"
                ],
                "expectedResult": [
                  [
                    "Léa"
                  ],
                  [
                    "Hugo"
                  ],
                  [
                    "Chloé"
                  ],
                  [
                    "Nathan"
                  ],
                  [
                    "Emma"
                  ],
                  [
                    "Lucas"
                  ],
                  [
                    "Manon"
                  ],
                  [
                    "Louis"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Ne mettez pas d'étoile : nommez la colonne prenom.",
                  "SELECT prenom FROM clients;"
                ],
                "solution": "SELECT prenom FROM clients;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 4,
          "title": "Exercice : prénom et ville",
          "description": "Deux colonnes, dans cet ordre : prenom, ville.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Même table, deux colonnes. L'ordre demandé est prenom puis ville — comme dans l'exemple du cours."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez le prénom et la ville de chaque client, dans cet ordre : prenom, ville.",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "prenom",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "Léa",
                    "Paris"
                  ],
                  [
                    "Hugo",
                    "Lyon"
                  ],
                  [
                    "Chloé",
                    "Paris"
                  ],
                  [
                    "Nathan",
                    "Marseille"
                  ],
                  [
                    "Emma",
                    "Paris"
                  ],
                  [
                    "Lucas",
                    "Lille"
                  ],
                  [
                    "Manon",
                    "Lyon"
                  ],
                  [
                    "Louis",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Séparez les deux colonnes par une virgule.",
                  "Exemple du cours : SELECT prenom, ville FROM clients;"
                ],
                "solution": "SELECT prenom, ville FROM clients;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        }
      ]
    },
    {
      "position": 2,
      "title": "Filtrer",
      "description": "WHERE, opérateurs, AND / OR, et la différence entre texte et nombres.",
      "lessons": [
        {
          "position": 0,
          "title": "WHERE : garder certaines lignes",
          "description": "SELECT choisit les colonnes. WHERE choisit les lignes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez placer WHERE après FROM pour ne garder que les fiches qui intéressent."
            },
            {
              "block_type": "heading",
              "content": "Le filtre de l'armoire"
            },
            {
              "block_type": "text",
              "content": "SELECT * FROM clients; sort les 8 fiches. Souvent, on n'en veut qu'une partie : les Parisiens, les majeurs, les plus de 25 ans. WHERE pose la condition. Seules les lignes « vraies » restent."
            },
            {
              "block_type": "code",
              "content": "SELECT *\nFROM clients\nWHERE age >= 18;"
            },
            {
              "block_type": "text",
              "content": "Manon a 17 ans : elle disparaît du résultat. Les 7 autres restent. La table dans l'armoire, elle, ne change pas. C'est encore une photocopie filtrée."
            },
            {
              "block_type": "callout",
              "content": "Ordre fixe : SELECT, puis FROM, puis WHERE. Inverser FROM et WHERE provoque une erreur."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "WHERE = « seulement si… ». Il réduit le nombre de lignes, pas le nombre de colonnes."
            }
          ]
        },
        {
          "position": 1,
          "title": "Les opérateurs de comparaison",
          "description": "=, <>, >, <, >=, <= : comparer une colonne à une valeur.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous reconnaissez les six comparaisons de base et vous savez que = teste l'égalité, pas « mettre dans »."
            },
            {
              "block_type": "heading",
              "content": "Le vocabulaire"
            },
            {
              "block_type": "text",
              "content": "= égal. <> différent (parfois écrit !=). > strictement plus grand. < strictement plus petit. >= plus grand ou égal. <= plus petit ou égal.\n\nage >= 18 inclut les gens de 18 ans. age > 18 les exclut. Sur nos données, Manon (17) est hors des deux. Emma (24) est dans les deux."
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, age\nFROM clients\nWHERE age > 25;"
            },
            {
              "block_type": "text",
              "content": "Hugo 28, Nathan 35, Lucas 31, Louis 40. Léa a 22 : trop jeune pour ce filtre. Le 25 n'a pas de quotes : c'est un nombre."
            },
            {
              "block_type": "callout",
              "content": "WHERE age = 24 trouve Emma. WHERE age = '24' peut marcher selon l'outil, mais apprenez la règle : nombres sans quotes, textes avec quotes."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "La colonne à gauche, l'opérateur au milieu, la valeur à droite : age >= 18."
            }
          ]
        },
        {
          "position": 2,
          "title": "AND, OR, texte et nombres",
          "description": "Combiner des conditions. Mettre les villes entre quotes simples.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous combinez deux filtres avec AND (les deux) ou OR (au moins un), et vous entourez le texte de quotes simples."
            },
            {
              "block_type": "heading",
              "content": "Texte = quotes simples"
            },
            {
              "block_type": "text",
              "content": "Paris est du texte. On écrit 'Paris', avec des apostrophes droites. Sans quotes, SQL croit que Paris est un nom de colonne. Erreur.\n\nLes nombres : 18, 25, 50. Pas de quotes."
            },
            {
              "block_type": "code",
              "content": "SELECT *\nFROM clients\nWHERE ville = 'Paris';"
            },
            {
              "block_type": "heading",
              "content": "AND : les deux conditions"
            },
            {
              "block_type": "text",
              "content": "AND est un « et ». Les deux doivent être vraies. Paris ET plus de 25 ans : il ne reste que Louis (40, Paris). Emma est à Paris mais a 24 ans. Hugo a 28 ans mais habite Lyon."
            },
            {
              "block_type": "code",
              "content": "SELECT *\nFROM clients\nWHERE ville = 'Paris'\n  AND age > 25;"
            },
            {
              "block_type": "heading",
              "content": "OR : au moins une"
            },
            {
              "block_type": "text",
              "content": "OR est un « ou ». Paris OU plus de 25 ans : on garde les Parisiens et les plus de 25, même s'ils n'habitent pas Paris. C'est plus large. AND resserre. OR élargit."
            },
            {
              "block_type": "callout",
              "content": "'Paris' n'est pas 'paris'. La casse compte dans les données. Recopiez exactement le mot de la table."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "Texte entre quotes simples. AND = les deux. OR = l'un ou l'autre. Exemple type : WHERE ville = 'Paris' AND age > 25."
            }
          ]
        },
        {
          "position": 3,
          "title": "Exercice : les majeurs",
          "description": "Filtrer : age >= 18.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Manon a 17 ans. Un WHERE bien choisi la laisse dans l'armoire et n'affiche que les majeurs."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez tous les clients majeurs : age supérieur ou égal à 18. Toutes les colonnes.",
                "starterQuery": "SELECT * FROM clients WHERE ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Manon a 17 ans : elle ne doit pas apparaître.",
                  "WHERE age >= 18"
                ],
                "solution": "SELECT * FROM clients WHERE age >= 18;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 4,
          "title": "Exercice : les clients de Paris",
          "description": "Filtrer un texte : ville = 'Paris'.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Quotes simples autour de Paris. Sans quotes, SQL cherche une colonne qui n'existe pas."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez tous les clients qui habitent Paris. Toutes les colonnes. Pensez aux quotes autour du texte.",
                "starterQuery": "SELECT * FROM clients WHERE ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "La colonne s'appelle ville.",
                  "WHERE ville = 'Paris'"
                ],
                "solution": "SELECT * FROM clients WHERE ville = 'Paris';",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 5,
          "title": "Exercice : plus de 25 ans",
          "description": "Filtrer : age > 25.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Strictement supérieur à 25 : Emma (24) sort, Hugo (28) reste."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Affichez tous les clients dont l'âge est strictement supérieur à 25. Toutes les colonnes.",
                "starterQuery": "SELECT * FROM clients WHERE ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Strictement supérieur : utilisez > et pas >=.",
                  "WHERE age > 25"
                ],
                "solution": "SELECT * FROM clients WHERE age > 25;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 6,
          "title": "Exercice : Paris et plus de 25 ans",
          "description": "Combiner ville et âge avec AND.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Les deux conditions en même temps. Louis est le seul Parisien de plus de 25 ans."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Affichez les clients qui habitent Paris ET ont plus de 25 ans. Les deux conditions doivent être vraies. Toutes les colonnes.",
                "starterQuery": "SELECT * FROM clients WHERE ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Reliez les deux tests avec AND.",
                  "WHERE ville = 'Paris' AND age > 25"
                ],
                "solution": "SELECT * FROM clients WHERE ville = 'Paris' AND age > 25;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        }
      ]
    },
    {
      "position": 3,
      "title": "Trier et limiter",
      "description": "ORDER BY ASC/DESC, LIMIT, et les deux ensemble pour un podium.",
      "lessons": [
        {
          "position": 0,
          "title": "ORDER BY : classer les résultats",
          "description": "ASC du plus petit au plus grand, DESC du plus grand au plus petit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez trier un résultat par une colonne, en croissant ou en décroissant."
            },
            {
              "block_type": "heading",
              "content": "Remettre les fiches en ordre"
            },
            {
              "block_type": "text",
              "content": "Sans ORDER BY, l'ordre des lignes n'est pas une promesse. Souvent c'est l'ordre d'insertion, mais on ne s'y fie pas. Si vous voulez « du plus jeune au plus âgé », dites-le."
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, age\nFROM clients\nORDER BY age ASC;"
            },
            {
              "block_type": "text",
              "content": "ASC = ascending = croissant. Manon 17, puis Chloé 19, Léa 22… jusqu'à Louis 40. DESC inverse : Louis d'abord, Manon en dernier."
            },
            {
              "block_type": "code",
              "content": "SELECT prenom, age\nFROM clients\nORDER BY age DESC;"
            },
            {
              "block_type": "callout",
              "content": "Si vous oubliez ASC ou DESC, SQL utilise ASC par défaut. Écrivez-le quand même : votre intention est lisible."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "ORDER BY colonne ASC ou DESC se place après WHERE, s'il y en a un. Il change l'ordre, pas le contenu."
            }
          ]
        },
        {
          "position": 1,
          "title": "LIMIT : n'afficher que le début",
          "description": "Couper le résultat après N lignes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez demander « les 5 premières lignes du résultat », pas plus."
            },
            {
              "block_type": "heading",
              "content": "Un plafond, pas un filtre"
            },
            {
              "block_type": "text",
              "content": "WHERE enlève des lignes selon une condition. LIMIT coupe après un nombre. LIMIT 5 sur 8 clients en montre 5, sans se demander pourquoi les 3 autres sont partis : ils étaient trop loin dans la liste."
            },
            {
              "block_type": "code",
              "content": "SELECT *\nFROM clients\nLIMIT 5;"
            },
            {
              "block_type": "text",
              "content": "Seul, LIMIT 5 prend les 5 premières lignes dans l'ordre actuel. Combiné à un tri, il devient un « top N ». C'est la leçon suivante."
            },
            {
              "block_type": "callout",
              "content": "LIMIT 5 veut dire « au plus 5 ». S'il n'y a que 3 lignes, vous en voyez 3. Pas d'erreur."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "LIMIT s'écrit tout à la fin de la requête. C'est un ciseau, pas un WHERE."
            }
          ]
        },
        {
          "position": 2,
          "title": "Combiner ORDER BY et LIMIT",
          "description": "Trier d'abord, couper ensuite : le podium.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous écrivez « les 5 plus âgés » ou « les 3 plus chers » en une phrase SQL."
            },
            {
              "block_type": "heading",
              "content": "L'ordre des clauses"
            },
            {
              "block_type": "text",
              "content": "SQL lit : SELECT, FROM, WHERE, ORDER BY, LIMIT. On trie toute la liste, puis on garde le début. Inverser cette logique dans votre tête (« je coupe puis je trie ») donnerait un mauvais podium."
            },
            {
              "block_type": "code",
              "content": "SELECT *\nFROM clients\nORDER BY age DESC\nLIMIT 5;"
            },
            {
              "block_type": "text",
              "content": "Les cinq plus âgés : Louis 40, Nathan 35, Lucas 31, Hugo 28, Emma 24. Même idée sur les produits : ORDER BY prix DESC LIMIT 5 pour les cinq plus chers."
            },
            {
              "block_type": "code",
              "content": "SELECT nom, prix\nFROM produits\nORDER BY prix DESC\nLIMIT 5;"
            },
            {
              "block_type": "callout",
              "content": "« Top 3 par âge » = les 3 plus âgés = ORDER BY age DESC LIMIT 3. DESC, pas ASC : sinon ce seraient les 3 plus jeunes."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "Podium = ORDER BY … DESC LIMIT N. Croissant + LIMIT = les plus petits / les moins chers."
            }
          ]
        },
        {
          "position": 3,
          "title": "Exercice : du plus jeune au plus âgé",
          "description": "ORDER BY age ASC.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Toutes les colonnes, les 8 clients, du plus petit âge au plus grand. L'ordre fait partie de la réponse."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez tous les clients du plus jeune au plus âgé (âge croissant). Toutes les colonnes.",
                "starterQuery": "SELECT * FROM clients ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "7",
                    "Manon",
                    "Petit",
                    "17",
                    "Lyon"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": true,
                "hints": [
                  "Croissant = ASC.",
                  "ORDER BY age ASC"
                ],
                "solution": "SELECT * FROM clients ORDER BY age ASC;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 4,
          "title": "Exercice : du plus âgé au plus jeune",
          "description": "ORDER BY age DESC.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Même table, sens inverse. Louis en premier, Manon en dernier."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Affichez tous les clients du plus âgé au plus jeune (âge décroissant). Toutes les colonnes.",
                "starterQuery": "SELECT * FROM clients ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "7",
                    "Manon",
                    "Petit",
                    "17",
                    "Lyon"
                  ]
                ],
                "orderRequired": true,
                "hints": [
                  "Décroissant = DESC.",
                  "ORDER BY age DESC"
                ],
                "solution": "SELECT * FROM clients ORDER BY age DESC;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 5,
          "title": "Exercice : les 3 plus âgés",
          "description": "ORDER BY age DESC LIMIT 3.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Trier d'abord, couper ensuite. Louis, Nathan, Lucas."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Affichez les 3 clients les plus âgés. Toutes les colonnes. Triez d'abord, limitez ensuite.",
                "starterQuery": "SELECT * FROM clients ",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ]
                ],
                "orderRequired": true,
                "hints": [
                  "Les plus âgés : ORDER BY age DESC.",
                  "Ajoutez LIMIT 3 tout à la fin."
                ],
                "solution": "SELECT * FROM clients ORDER BY age DESC LIMIT 3;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 6,
          "title": "Exercice : les 5 produits les plus chers",
          "description": "ORDER BY prix DESC LIMIT 5.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 3,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Même recette sur le catalogue : trier les prix vers le bas, garder cinq lignes."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "application",
                "instructions": "Affichez les 5 produits les plus chers, du prix le plus élevé au plus bas. Toutes les colonnes de produits.",
                "starterQuery": "SELECT * FROM produits ",
                "expectedColumns": [
                  "id",
                  "nom",
                  "categorie",
                  "prix",
                  "stock"
                ],
                "expectedResult": [
                  [
                    "8",
                    "Veste laine",
                    "Vetements",
                    "99",
                    "6"
                  ],
                  [
                    "4",
                    "Clavier mecanique",
                    "Electronique",
                    "89",
                    "8"
                  ],
                  [
                    "1",
                    "Casque audio",
                    "Electronique",
                    "80",
                    "12"
                  ],
                  [
                    "5",
                    "Sac a dos",
                    "Accessoires",
                    "55",
                    "15"
                  ],
                  [
                    "6",
                    "Lampe de bureau",
                    "Maison",
                    "34",
                    "20"
                  ]
                ],
                "orderRequired": true,
                "hints": [
                  "La table s'appelle produits, la colonne prix.",
                  "ORDER BY prix DESC LIMIT 5"
                ],
                "solution": "SELECT * FROM produits ORDER BY prix DESC LIMIT 5;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        }
      ]
    },
    {
      "position": 4,
      "title": "Calculer",
      "description": "COUNT, SUM et AVG : compter, additionner, moyenner.",
      "lessons": [
        {
          "position": 0,
          "title": "COUNT : compter les lignes",
          "description": "COUNT(*) répond « combien ? » par un petit tableau d'une case.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous savez compter les lignes d'une table, éventuellement après un WHERE."
            },
            {
              "block_type": "heading",
              "content": "Une question, une case"
            },
            {
              "block_type": "text",
              "content": "Parfois on ne veut pas la liste, on veut le nombre. Combien de clients ? COUNT(*) compte les lignes. Le résultat n'est plus 8 fiches : c'est une ligne, une colonne, la valeur 8."
            },
            {
              "block_type": "code",
              "content": "SELECT COUNT(*)\nFROM clients;"
            },
            {
              "block_type": "text",
              "content": "On peut filtrer avant de compter : SELECT COUNT(*) FROM clients WHERE ville = 'Paris'; donne 4. L'étoile ici ne signifie pas « toutes les colonnes à afficher ». Dans COUNT(*), elle signifie « chaque ligne »."
            },
            {
              "block_type": "callout",
              "content": "COUNT(*) ne liste pas les gens. Si vous voyez encore Léa, Hugo, Chloé… vous avez oublié COUNT et fait un SELECT *."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "SELECT COUNT(*) FROM table; — une valeur, pas un listing. Exemple : SELECT COUNT(*) FROM clients;"
            }
          ]
        },
        {
          "position": 1,
          "title": "SUM : additionner",
          "description": "SUM(colonne) additionne des nombres, jamais des prénoms.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous additionnez une colonne numérique, par exemple tous les prix du catalogue."
            },
            {
              "block_type": "heading",
              "content": "La calculette de l'armoire"
            },
            {
              "block_type": "text",
              "content": "SUM(prix) parcourt la colonne prix et additionne. Sur nos 8 produits : 80+20+12+89+55+34+30+99 = 419. Encore une seule case en résultat."
            },
            {
              "block_type": "code",
              "content": "SELECT SUM(prix)\nFROM produits;"
            },
            {
              "block_type": "text",
              "content": "On peut filtrer : SUM(prix) des produits à plus de 50 € additionne seulement Casque, Clavier, Sac et Veste. SUM(prenom) n'a pas de sens : on n'additionne pas des mots."
            },
            {
              "block_type": "callout",
              "content": "COUNT compte des lignes. SUM additionne des valeurs. Ce n'est pas la même question : « combien de produits » vs « quelle est la somme des prix »."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "SELECT SUM(prix) FROM produits; — une colonne numérique entre parenthèses."
            }
          ]
        },
        {
          "position": 2,
          "title": "AVG : la moyenne",
          "description": "AVG(colonne) = somme divisée par le nombre de lignes concernées.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectif"
            },
            {
              "block_type": "text",
              "content": "Vous calculez une moyenne (prix moyen, âge moyen) sans la faire à la main."
            },
            {
              "block_type": "heading",
              "content": "La moyenne, pas le milieu de liste"
            },
            {
              "block_type": "text",
              "content": "AVG(prix) = SUM(prix) / COUNT(*). Ici 419 / 8 = 52,375. Ce n'est pas « le produit du milieu ». C'est l'équilibre de tous les prix."
            },
            {
              "block_type": "code",
              "content": "SELECT AVG(prix)\nFROM produits;"
            },
            {
              "block_type": "text",
              "content": "Même idée sur les clients : SELECT AVG(age) FROM clients; Vous n'en aurez pas besoin dans les exercices, mais la mécanique est identique."
            },
            {
              "block_type": "callout",
              "content": "AVG ignore-t-il les lignes filtrées ? Oui, si vous mettez un WHERE. AVG(prix) FROM produits WHERE prix > 50 ne moyenne que les produits chers."
            },
            {
              "block_type": "heading",
              "content": "À retenir"
            },
            {
              "block_type": "text",
              "content": "COUNT = combien. SUM = total. AVG = moyenne. Les trois s'écrivent SELECT FONCTION(colonne) FROM table;"
            }
          ]
        },
        {
          "position": 3,
          "title": "Exercice : compter les clients",
          "description": "SELECT COUNT(*) FROM clients.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Une seule case en résultat : le nombre de fiches, pas la liste des prénoms."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "facile",
                "instructions": "Combien y a-t-il de clients ? Renvoyez uniquement le nombre, avec COUNT(*).",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "COUNT(*)"
                ],
                "expectedResult": [
                  [
                    "8"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Pas de liste de noms : une fonction d'agrégat.",
                  "SELECT COUNT(*) FROM clients;"
                ],
                "solution": "SELECT COUNT(*) FROM clients;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 4,
          "title": "Exercice : prix moyen",
          "description": "SELECT AVG(prix) FROM produits.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "La moyenne des 8 prix du catalogue. Ce n'est pas le produit du milieu de liste."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Calculez le prix moyen des produits (colonne prix de la table produits).",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "AVG(prix)"
                ],
                "expectedResult": [
                  [
                    "52.375"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "La fonction s'appelle AVG.",
                  "SELECT AVG(prix) FROM produits;"
                ],
                "solution": "SELECT AVG(prix) FROM produits;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 5,
          "title": "Exercice : somme des prix",
          "description": "SELECT SUM(prix) FROM produits.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Additionnez toute la colonne prix. Une valeur, pas huit lignes."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Calculez la somme de tous les prix du catalogue (table produits).",
                "starterQuery": "SELECT ",
                "expectedColumns": [
                  "SUM(prix)"
                ],
                "expectedResult": [
                  [
                    "419"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "La fonction s'appelle SUM.",
                  "SELECT SUM(prix) FROM produits;"
                ],
                "solution": "SELECT SUM(prix) FROM produits;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        },
        {
          "position": 6,
          "title": "Exercice : produits à plus de 50 €",
          "description": "WHERE prix > 50.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Retour au filtre : lister les produits chers, pas les additionner."
            },
            {
              "block_type": "sql_exercise",
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Affichez tous les produits dont le prix est strictement supérieur à 50. Toutes les colonnes.",
                "starterQuery": "SELECT * FROM produits WHERE ",
                "expectedColumns": [
                  "id",
                  "nom",
                  "categorie",
                  "prix",
                  "stock"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Casque audio",
                    "Electronique",
                    "80",
                    "12"
                  ],
                  [
                    "4",
                    "Clavier mecanique",
                    "Electronique",
                    "89",
                    "8"
                  ],
                  [
                    "5",
                    "Sac a dos",
                    "Accessoires",
                    "55",
                    "15"
                  ],
                  [
                    "8",
                    "Veste laine",
                    "Vetements",
                    "99",
                    "6"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "C'est un WHERE, pas un AVG.",
                  "WHERE prix > 50"
                ],
                "solution": "SELECT * FROM produits WHERE prix > 50;",
                "points": 4,
                "practicalExam": false,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              },
              "metadata": null
            }
          ]
        }
      ]
    },
    {
      "position": 5,
      "title": "Évaluation finale",
      "description": "Quiz de 30 questions (70 % requis) puis un test pratique de 5 tâches (4 points chacune, 14/20 pour réussir).",
      "lessons": [
        {
          "position": 0,
          "title": "Quiz de validation",
          "description": "30 questions, choix unique, score requis 70 %.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "hasQuiz": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Avant de valider"
            },
            {
              "block_type": "text",
              "content": "Ce quiz couvre tout le parcours : base, tables, colonnes, SELECT, FROM, WHERE, AND, OR, ORDER BY, LIMIT, COUNT, SUM, AVG. Une seule bonne réponse par question. Il faut 70 % pour réussir (21 bonnes réponses sur 30).\n\nEnsuite, un test pratique de 5 missions SQL reprend la boutique. Chaque mission vaut 4 points. Il faut 14 points sur 20 pour valider le test."
            },
            {
              "block_type": "callout",
              "content": "Lisez bien les quotes et les opérateurs. age > 18 n'est pas age >= 18. 'Paris' n'est pas Paris sans quotes."
            }
          ],
          "quiz": {
            "title": "Évaluation finale — SQL pour débutants",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "difficulty": "easy",
                "question": "Si une base de données est une armoire, que représente une table ?",
                "question_type": "single_choice",
                "options": [
                  "A. La pièce entière du bureau",
                  "B. Un tiroir qui range un type de fiches",
                  "C. Une seule valeur, comme un âge",
                  "D. Le logiciel Excel lui-même"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Chaque table est un tiroir (clients, produits…). La base est l'armoire. Une valeur est une cellule, pas la table."
              },
              {
                "difficulty": "easy",
                "question": "Dans la table CLIENTS, une ligne correspond à…",
                "question_type": "single_choice",
                "options": [
                  "A. Le titre « ville »",
                  "B. Toutes les colonnes de toutes les tables",
                  "C. Un client complet (une fiche)",
                  "D. Uniquement le prénom"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Une ligne = une fiche = un client. Une colonne = un type d'info (âge, ville…)."
              },
              {
                "difficulty": "easy",
                "question": "À quoi sert une colonne dans une table ?",
                "question_type": "single_choice",
                "options": [
                  "A. À identifier le fichier Excel d'origine",
                  "B. À stocker le même genre d'information pour chaque ligne",
                  "C. À trier automatiquement dès qu'on insère une fiche",
                  "D. À cacher les lignes trop longues"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La colonne age contient l'âge de chaque client. C'est le même champ, répété sur chaque fiche."
              },
              {
                "difficulty": "easy",
                "question": "SQL, dans ce cours, c'est surtout…",
                "question_type": "single_choice",
                "options": [
                  "A. Un langage pour poser des questions à la base",
                  "B. Un logiciel à installer à la place du navigateur",
                  "C. Un type de graphique",
                  "D. Le nom de la table des clients"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "SQL n'est pas un logiciel. C'est le langage des requêtes : SELECT, FROM, WHERE…"
              },
              {
                "difficulty": "easy",
                "question": "Quel mot-clé demande des colonnes à afficher ?",
                "question_type": "single_choice",
                "options": [
                  "A. FROM",
                  "B. WHERE",
                  "C. LIMIT",
                  "D. SELECT"
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "SELECT choisit les colonnes. FROM choisit la table. WHERE filtre les lignes."
              },
              {
                "difficulty": "easy",
                "question": "Dans SELECT prenom FROM clients; le mot clients désigne…",
                "question_type": "single_choice",
                "options": [
                  "A. Une colonne",
                  "B. La table à lire",
                  "C. Un filtre WHERE",
                  "D. Une fonction comme COUNT"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "FROM indique la table. prenom est la colonne. clients est donc la table."
              },
              {
                "difficulty": "easy",
                "question": "Que signifie l'étoile dans SELECT * FROM clients; ?",
                "question_type": "single_choice",
                "options": [
                  "A. Uniquement la première colonne",
                  "B. Uniquement les 5 premières lignes",
                  "C. Toutes les colonnes de la table",
                  "D. Toutes les tables de la base"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "* = toutes les colonnes de la table citée après FROM, pas toutes les tables de l'armoire."
              },
              {
                "difficulty": "easy",
                "question": "À quoi sert WHERE ?",
                "question_type": "single_choice",
                "options": [
                  "A. À choisir la table",
                  "B. À garder seulement les lignes qui respectent une condition",
                  "C. À changer l'ordre des colonnes",
                  "D. À compter les lignes"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "WHERE filtre les lignes. SELECT filtre (choisit) les colonnes. Ce n'est pas le même axe."
              },
              {
                "difficulty": "easy",
                "question": "ORDER BY age DESC range les clients…",
                "question_type": "single_choice",
                "options": [
                  "A. Du plus jeune au plus âgé",
                  "B. Par ordre alphabétique du prénom",
                  "C. Du plus âgé au plus jeune",
                  "D. Par ville, de A à Z"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "DESC = décroissant. Sur l'âge, les plus grands nombres (plus âgés) arrivent en premier."
              },
              {
                "difficulty": "easy",
                "question": "LIMIT 5 à la fin d'une requête…",
                "question_type": "single_choice",
                "options": [
                  "A. Affiche au plus 5 lignes du résultat",
                  "B. Garde les lignes dont l'id vaut 5",
                  "C. Multiplie les prix par 5",
                  "D. Crée 5 tables"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "LIMIT coupe le résultat. Ce n'est pas un WHERE sur l'id."
              },
              {
                "difficulty": "intermediate",
                "question": "Quelle requête renvoie uniquement les prénoms, une ligne par client ?",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM prenom;",
                  "B. FROM clients SELECT prenom;",
                  "C. SELECT prenom WHERE clients;",
                  "D. SELECT prenom FROM clients;"
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "L'ordre est SELECT … FROM …. prenom est une colonne, clients est la table."
              },
              {
                "difficulty": "intermediate",
                "question": "Pour ne garder que les habitants de Paris, laquelle est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM clients WHERE ville = Paris;",
                  "B. SELECT * FROM clients WHERE ville = 'Paris';",
                  "C. SELECT * FROM clients WHERE 'Paris';",
                  "D. SELECT Paris FROM clients;"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le texte Paris doit être entre quotes simples. Sans quotes, SQL croit que Paris est un nom de colonne."
              },
              {
                "difficulty": "intermediate",
                "question": "La condition age >= 18 signifie…",
                "question_type": "single_choice",
                "options": [
                  "A. Âge strictement supérieur à 18 (18 exclu)",
                  "B. Âge égal à 18 uniquement",
                  "C. Âge d'au moins 18 ans (18 inclus)",
                  "D. Les 18 premières lignes"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": ">= = plus grand ou égal. Une personne de 18 ans est majeure selon ce filtre."
              },
              {
                "difficulty": "intermediate",
                "question": "Avec AND, une ligne est gardée si…",
                "question_type": "single_choice",
                "options": [
                  "A. Au moins une des deux conditions est vraie",
                  "B. Les deux conditions sont vraies en même temps",
                  "C. Aucune condition n'est vraie",
                  "D. La table contient AND dans son nom"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "AND resserre : il faut Paris ET plus de 25 ans, pas l'un ou l'autre."
              },
              {
                "difficulty": "intermediate",
                "question": "Avec OR, une ligne est gardée si…",
                "question_type": "single_choice",
                "options": [
                  "A. Au moins une des conditions est vraie",
                  "B. Obligatoirement les deux conditions",
                  "C. Uniquement la condition de gauche",
                  "D. Uniquement la condition de droite"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "OR élargit. Paris OU age > 25 garde les Parisiens et les plus de 25 ans."
              },
              {
                "difficulty": "intermediate",
                "question": "Pourquoi écrit-on 'Paris' avec des quotes, mais 25 sans quotes ?",
                "question_type": "single_choice",
                "options": [
                  "A. Paris est un nombre secret",
                  "B. Les textes s'entourent de quotes simples, les nombres non",
                  "C. C'est obligatoire seulement avec ORDER BY",
                  "D. Les quotes servent à mettre en gras"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "ville = 'Paris' (texte). age > 25 (nombre). Inverser ces règles provoque des erreurs ou des surprises."
              },
              {
                "difficulty": "intermediate",
                "question": "Quelle clause trie du plus petit âge au plus grand ?",
                "question_type": "single_choice",
                "options": [
                  "A. ORDER BY age ASC",
                  "B. ORDER BY age DESC",
                  "C. LIMIT age ASC",
                  "D. WHERE age ASC"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "ASC = croissant. DESC = décroissant. LIMIT et WHERE ne trient pas."
              },
              {
                "difficulty": "intermediate",
                "question": "Vous voulez les 5 clients les plus âgés. Quelle fin de requête convient ?",
                "question_type": "single_choice",
                "options": [
                  "A. ORDER BY age ASC LIMIT 5",
                  "B. WHERE age = 5",
                  "C. ORDER BY age DESC LIMIT 5",
                  "D. LIMIT 5 ORDER BY age DESC"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "On trie d'abord les plus âgés (DESC), puis on coupe à 5. LIMIT s'écrit après ORDER BY."
              },
              {
                "difficulty": "intermediate",
                "question": "COUNT(*) dans SELECT COUNT(*) FROM clients; renvoie…",
                "question_type": "single_choice",
                "options": [
                  "A. La liste des prénoms",
                  "B. Le nombre de lignes de la table clients",
                  "C. La somme des âges",
                  "D. Le prix moyen"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "COUNT(*) compte les fiches. Ici : 8. Ce n'est ni SUM ni AVG."
              },
              {
                "difficulty": "intermediate",
                "question": "SUM(prix) calcule…",
                "question_type": "single_choice",
                "options": [
                  "A. Le nombre de produits",
                  "B. La moyenne des prix",
                  "C. L'addition de toutes les valeurs de la colonne prix",
                  "D. Le produit le plus cher"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "SUM additionne. AVG moyenne. COUNT compte. Le plus cher se trouve avec ORDER BY + LIMIT."
              },
              {
                "difficulty": "intermediate",
                "question": "AVG(prix) sur 8 produits dont la somme des prix vaut 419 donne…",
                "question_type": "single_choice",
                "options": [
                  "A. 419",
                  "B. 8",
                  "C. 52,375",
                  "D. 50, parce qu'on arrondit toujours"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Moyenne = 419 / 8 = 52,375. SUM donnerait 419, COUNT donnerait 8."
              },
              {
                "difficulty": "intermediate",
                "question": "Quelle requête est syntaxiquement dans le bon ordre ?",
                "question_type": "single_choice",
                "options": [
                  "A. FROM clients SELECT prenom WHERE age > 25;",
                  "B. SELECT prenom FROM clients WHERE age > 25;",
                  "C. WHERE age > 25 SELECT prenom FROM clients;",
                  "D. SELECT prenom WHERE age > 25 FROM clients;"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Ordre : SELECT, FROM, WHERE, puis éventuellement ORDER BY et LIMIT."
              },
              {
                "difficulty": "intermediate",
                "question": "Que se passe-t-il souvent avec WHERE ville = Paris; (sans quotes) ?",
                "question_type": "single_choice",
                "options": [
                  "A. SQL comprend automatiquement que c'est du texte",
                  "B. Toutes les villes s'affichent",
                  "C. Une erreur : Paris est lu comme un nom de colonne inexistant",
                  "D. La table est supprimée"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Sans quotes, Paris n'est pas une chaîne. La base cherche une colonne Paris."
              },
              {
                "difficulty": "intermediate",
                "question": "SELECT prenom, ville FROM clients WHERE age > 25; affiche…",
                "question_type": "single_choice",
                "options": [
                  "A. Toutes les colonnes des plus de 25 ans",
                  "B. Prénom et ville des clients de plus de 25 ans",
                  "C. Tous les clients, mais seulement s'ils ont 25 ans pile",
                  "D. Uniquement Louis, quoi qu'il arrive"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Deux colonnes (prenom, ville) et un filtre d'âge. Hugo, Nathan, Lucas et Louis matchent sur nos données, pas seulement Louis (Louis est le cas Paris ET > 25)."
              },
              {
                "difficulty": "intermediate",
                "question": "AND et OR, quelle analogie est juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. AND élargit le résultat, OR le resserre",
                  "B. AND resserre (il faut les deux), OR élargit (il suffit d'une)",
                  "C. AND trie, OR limite",
                  "D. Ils sont strictement interchangeables"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Paris AND age > 25 : 1 ligne (Louis). Paris OR age > 25 : beaucoup plus de lignes."
              },
              {
                "difficulty": "application",
                "question": "On vous demande les clients de Paris qui ont plus de 25 ans. Quelle requête convient ?",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM clients WHERE ville = 'Paris' OR age > 25;",
                  "B. SELECT * FROM clients WHERE ville = 'Paris' AND age > 25;",
                  "C. SELECT * FROM clients WHERE age > 25;",
                  "D. SELECT * FROM clients WHERE ville = 'Paris';"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Il faut les deux conditions : ville et âge. OR ou un seul WHERE laisserait entrer Hugo (Lyon, 28) ou Emma (Paris, 24)."
              },
              {
                "difficulty": "application",
                "question": "Les 3 produits les plus chers se demandent ainsi :",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM produits WHERE prix = 3;",
                  "B. SELECT * FROM produits LIMIT 3 ORDER BY prix;",
                  "C. SELECT * FROM produits ORDER BY prix DESC LIMIT 3;",
                  "D. SELECT COUNT(*) FROM produits WHERE prix > 50;"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Trier les prix vers le bas (DESC) puis garder 3 lignes. LIMIT avant ORDER BY est dans le mauvais ordre."
              },
              {
                "difficulty": "application",
                "question": "La direction veut le nombre de clients, pas leurs noms. Que lancez-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM clients;",
                  "B. SELECT prenom FROM clients;",
                  "C. SELECT SUM(age) FROM clients;",
                  "D. SELECT COUNT(*) FROM clients;"
                ],
                "correct_answer": [
                  3
                ],
                "explanation": "COUNT(*) répond « combien ». SELECT * ou prenom listerait les gens. SUM(age) additionnerait les âges."
              },
              {
                "difficulty": "application",
                "question": "Le résultat n'a qu'une ligne, une colonne, la valeur 419. Quelle requête l'a le plus probablement produite ?",
                "question_type": "single_choice",
                "options": [
                  "A. SELECT * FROM produits;",
                  "B. SELECT SUM(prix) FROM produits;",
                  "C. SELECT AVG(prix) FROM produits;",
                  "D. SELECT COUNT(*) FROM produits;"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "419 est la somme des 8 prix. AVG donnerait 52,375. COUNT donnerait 8. SELECT * listerait 8 lignes."
              },
              {
                "difficulty": "application",
                "question": "Vous devez lister les produits à plus de 50 €. Quel WHERE est le bon ?",
                "question_type": "single_choice",
                "options": [
                  "A. WHERE prix > 50",
                  "B. WHERE prix = 50",
                  "C. WHERE prix < 50",
                  "D. WHERE stock > 50"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "prix > 50 garde Casque, Clavier, Sac et Veste. = 50 ne garde personne ici. stock > 50 parlerait des quantités, pas du tarif."
              }
            ]
          }
        },
        {
          "position": 1,
          "title": "Test pratique",
          "description": "Cinq tâches SQL : 4 points chacune, 14/20 pour réussir.",
          "lesson_type": "sql_exercise",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "practicalExam": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Cinq missions (20 points)"
            },
            {
              "block_type": "text",
              "content": "Même boutique que tout le cours. Chaque tâche vaut 4 points. La validation compare le tableau résultat, pas le texte de la requête. Score requis : 14/20."
            },
            {
              "block_type": "sql_exercise",
              "metadata": {
                "practicalExam": true
              },
              "content": {
                "difficulty": "facile",
                "instructions": "Tâche 1 — Affichez tous les clients, toutes les colonnes, toutes les lignes.",
                "starterQuery": "",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "2",
                    "Hugo",
                    "Bernard",
                    "28",
                    "Lyon"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "4",
                    "Nathan",
                    "Thomas",
                    "35",
                    "Marseille"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "6",
                    "Lucas",
                    "Richard",
                    "31",
                    "Lille"
                  ],
                  [
                    "7",
                    "Manon",
                    "Petit",
                    "17",
                    "Lyon"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "L'étoile demande toutes les colonnes.",
                  "SELECT * FROM clients;"
                ],
                "solution": "SELECT * FROM clients;",
                "points": 4,
                "practicalExam": true,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              }
            },
            {
              "block_type": "sql_exercise",
              "metadata": {
                "practicalExam": true
              },
              "content": {
                "difficulty": "facile",
                "instructions": "Tâche 2 — Affichez uniquement les clients qui habitent Paris. Toutes les colonnes.",
                "starterQuery": "",
                "expectedColumns": [
                  "id",
                  "prenom",
                  "nom",
                  "age",
                  "ville"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Léa",
                    "Martin",
                    "22",
                    "Paris"
                  ],
                  [
                    "3",
                    "Chloé",
                    "Dubois",
                    "19",
                    "Paris"
                  ],
                  [
                    "5",
                    "Emma",
                    "Robert",
                    "24",
                    "Paris"
                  ],
                  [
                    "8",
                    "Louis",
                    "Durand",
                    "40",
                    "Paris"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "WHERE s'écrit après FROM.",
                  "WHERE ville = 'Paris'"
                ],
                "solution": "SELECT * FROM clients WHERE ville = 'Paris';",
                "points": 4,
                "practicalExam": true,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              }
            },
            {
              "block_type": "sql_exercise",
              "metadata": {
                "practicalExam": true
              },
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Tâche 3 — Affichez tous les produits, du plus cher au moins cher. Toutes les colonnes.",
                "starterQuery": "",
                "expectedColumns": [
                  "id",
                  "nom",
                  "categorie",
                  "prix",
                  "stock"
                ],
                "expectedResult": [
                  [
                    "8",
                    "Veste laine",
                    "Vetements",
                    "99",
                    "6"
                  ],
                  [
                    "4",
                    "Clavier mecanique",
                    "Electronique",
                    "89",
                    "8"
                  ],
                  [
                    "1",
                    "Casque audio",
                    "Electronique",
                    "80",
                    "12"
                  ],
                  [
                    "5",
                    "Sac a dos",
                    "Accessoires",
                    "55",
                    "15"
                  ],
                  [
                    "6",
                    "Lampe de bureau",
                    "Maison",
                    "34",
                    "20"
                  ],
                  [
                    "7",
                    "Souris sans fil",
                    "Electronique",
                    "30",
                    "25"
                  ],
                  [
                    "2",
                    "T-shirt coton",
                    "Vetements",
                    "20",
                    "45"
                  ],
                  [
                    "3",
                    "Mug LOU",
                    "Accessoires",
                    "12",
                    "30"
                  ]
                ],
                "orderRequired": true,
                "hints": [
                  "Décroissant sur la colonne prix.",
                  "ORDER BY prix DESC"
                ],
                "solution": "SELECT * FROM produits ORDER BY prix DESC;",
                "points": 4,
                "practicalExam": true,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              }
            },
            {
              "block_type": "sql_exercise",
              "metadata": {
                "practicalExam": true
              },
              "content": {
                "difficulty": "facile",
                "instructions": "Tâche 4 — Combien y a-t-il de clients dans la table ? Utilisez COUNT(*).",
                "starterQuery": "",
                "expectedColumns": [
                  "COUNT(*)"
                ],
                "expectedResult": [
                  [
                    "8"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Résultat attendu : une case avec 8.",
                  "SELECT COUNT(*) FROM clients;"
                ],
                "solution": "SELECT COUNT(*) FROM clients;",
                "points": 4,
                "practicalExam": true,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              }
            },
            {
              "block_type": "sql_exercise",
              "metadata": {
                "practicalExam": true
              },
              "content": {
                "difficulty": "intermediaire",
                "instructions": "Tâche 5 — Affichez les produits dont le prix est strictement supérieur à 50. Toutes les colonnes.",
                "starterQuery": "",
                "expectedColumns": [
                  "id",
                  "nom",
                  "categorie",
                  "prix",
                  "stock"
                ],
                "expectedResult": [
                  [
                    "1",
                    "Casque audio",
                    "Electronique",
                    "80",
                    "12"
                  ],
                  [
                    "4",
                    "Clavier mecanique",
                    "Electronique",
                    "89",
                    "8"
                  ],
                  [
                    "5",
                    "Sac a dos",
                    "Accessoires",
                    "55",
                    "15"
                  ],
                  [
                    "8",
                    "Veste laine",
                    "Vetements",
                    "99",
                    "6"
                  ]
                ],
                "orderRequired": false,
                "hints": [
                  "Opérateur strictement supérieur : >",
                  "SELECT * FROM produits WHERE prix > 50;"
                ],
                "solution": "SELECT * FROM produits WHERE prix > 50;",
                "points": 4,
                "practicalExam": true,
                "schema": "CLIENTS(id, prenom, nom, age, ville)\nPRODUITS(id, nom, categorie, prix, stock)\nCOMMANDES(id, client_id, produit_id, quantite)",
                "setupSql": "DROP TABLE IF EXISTS commandes;\nDROP TABLE IF EXISTS produits;\nDROP TABLE IF EXISTS clients;\n\nCREATE TABLE clients (\n  id INTEGER PRIMARY KEY,\n  prenom TEXT NOT NULL,\n  nom TEXT NOT NULL,\n  age INTEGER NOT NULL,\n  ville TEXT NOT NULL\n);\n\nCREATE TABLE produits (\n  id INTEGER PRIMARY KEY,\n  nom TEXT NOT NULL,\n  categorie TEXT NOT NULL,\n  prix INTEGER NOT NULL,\n  stock INTEGER NOT NULL\n);\n\nCREATE TABLE commandes (\n  id INTEGER PRIMARY KEY,\n  client_id INTEGER NOT NULL,\n  produit_id INTEGER NOT NULL,\n  quantite INTEGER NOT NULL\n);\n\nINSERT INTO clients (id, prenom, nom, age, ville) VALUES\n(1, 'Léa', 'Martin', 22, 'Paris'),\n(2, 'Hugo', 'Bernard', 28, 'Lyon'),\n(3, 'Chloé', 'Dubois', 19, 'Paris'),\n(4, 'Nathan', 'Thomas', 35, 'Marseille'),\n(5, 'Emma', 'Robert', 24, 'Paris'),\n(6, 'Lucas', 'Richard', 31, 'Lille'),\n(7, 'Manon', 'Petit', 17, 'Lyon'),\n(8, 'Louis', 'Durand', 40, 'Paris');\n\nINSERT INTO produits (id, nom, categorie, prix, stock) VALUES\n(1, 'Casque audio', 'Electronique', 80, 12),\n(2, 'T-shirt coton', 'Vetements', 20, 45),\n(3, 'Mug LOU', 'Accessoires', 12, 30),\n(4, 'Clavier mecanique', 'Electronique', 89, 8),\n(5, 'Sac a dos', 'Accessoires', 55, 15),\n(6, 'Lampe de bureau', 'Maison', 34, 20),\n(7, 'Souris sans fil', 'Electronique', 30, 25),\n(8, 'Veste laine', 'Vetements', 99, 6);\n\nINSERT INTO commandes (id, client_id, produit_id, quantite) VALUES\n(1, 1, 1, 1),\n(2, 1, 3, 2),\n(3, 2, 4, 1),\n(4, 3, 2, 3),\n(5, 4, 8, 1),\n(6, 5, 5, 1),\n(7, 6, 7, 2),\n(8, 8, 1, 1);"
              }
            }
          ]
        }
      ]
    }
  ]
}
$coursejson$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id
  FROM courses
  WHERE slug = 'sql-pour-debutants-2h';

  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE 'sql-pour-debutants-2h a déjà des modules — pas de second arbre.';
  ELSE
    FOR v_mod IN
      SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
      FROM jsonb_array_elements(payload->'modules') WITH ORDINALITY AS t
    LOOP
      INSERT INTO modules (course_id, title, description, position)
      VALUES (
        v_course_id,
        v_mod.obj->>'title',
        v_mod.obj->>'description',
        COALESCE((v_mod.obj->>'position')::int, v_mod.pos)
      )
      RETURNING id INTO v_module_id;

      FOR v_les IN
        SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
        FROM jsonb_array_elements(v_mod.obj->'lessons') WITH ORDINALITY AS t
      LOOP
        INSERT INTO lessons (
          module_id,
          title,
          description,
          lesson_type,
          position,
          estimated_duration_minutes,
          is_required
        )
        VALUES (
          v_module_id,
          v_les.obj->>'title',
          v_les.obj->>'description',
          COALESCE(v_les.obj->>'lesson_type', 'lesson'),
          COALESCE((v_les.obj->>'position')::int, v_les.pos),
          NULLIF(v_les.obj->>'estimated_duration_minutes', '')::int,
          COALESCE((v_les.obj->>'is_required')::boolean, true)
        )
        RETURNING id INTO v_lesson_id;

        FOR v_blk IN
          SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
          FROM jsonb_array_elements(COALESCE(v_les.obj->'blocks', '[]'::jsonb)) WITH ORDINALITY AS t
        LOOP
          INSERT INTO content_blocks (lesson_id, block_type, content, position, metadata)
          VALUES (
            v_lesson_id,
            v_blk.obj->>'block_type',
            CASE
              WHEN jsonb_typeof(v_blk.obj->'content') IN ('object', 'array')
                THEN (v_blk.obj->'content')::text
              ELSE COALESCE(v_blk.obj->>'content', '')
            END,
            COALESCE((v_blk.obj->>'position')::int, v_blk.pos),
            CASE
              WHEN jsonb_typeof(v_blk.obj->'metadata') = 'object'
                THEN v_blk.obj->'metadata'
              ELSE NULL
            END
          );
        END LOOP;

        IF v_les.obj->>'lesson_type' = 'quiz' AND v_les.obj->'quiz' IS NOT NULL THEN
          INSERT INTO quizzes (lesson_id, title, passing_score, max_attempts)
          VALUES (
            v_lesson_id,
            v_les.obj->'quiz'->>'title',
            COALESCE((v_les.obj->'quiz'->>'passing_score')::numeric, 70),
            NULLIF(v_les.obj->'quiz'->>'max_attempts', '')::int
          )
          RETURNING id INTO v_quiz_id;

          FOR v_q IN
            SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
            FROM jsonb_array_elements(v_les.obj->'quiz'->'questions') WITH ORDINALITY AS t
          LOOP
            INSERT INTO quiz_questions (
              quiz_id,
              question,
              question_type,
              options,
              correct_answer,
              explanation,
              position
            )
            VALUES (
              v_quiz_id,
              v_q.obj->>'question',
              COALESCE(v_q.obj->>'question_type', 'single_choice'),
              v_q.obj->'options',
              v_q.obj->'correct_answer',
              v_q.obj->>'explanation',
              COALESCE((v_q.obj->>'position')::int, v_q.pos)
            );
          END LOOP;
        END IF;
      END LOOP;
    END LOOP;
  END IF;
END
$seed$;

-- Publish once content exists (this course only). Idempotent.
-- On a first run, children have just been inserted. On a re-run, they
-- already exist. Either way the catalogue can show the course.
-- To keep a local draft, comment out the UPDATE below — do not DELETE.
UPDATE courses
SET
  status = 'published',
  published_at = COALESCE(published_at, now()),
  updated_at = now()
WHERE slug = 'sql-pour-debutants-2h';

COMMIT;
