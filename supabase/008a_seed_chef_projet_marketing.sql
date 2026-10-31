-- LOU Academy — 008a PARTIE 1/2 — chef-projet-marketing-developpement
-- Modules 1 à 5 (positions 0–4).
-- SQL Editor (postgres). Ne touche pas sql-pour-debutants-2h ni devenir-recruteur-a-z.
-- Puis exécutez 008b.

BEGIN;

INSERT INTO courses (
  title, slug, description, category, level, estimated_duration_minutes,
  status, creator_id, icon, gradient
)
SELECT
  'Chef de projet marketing et développement',
  'chef-projet-marketing-developpement',
  'De l''analyse d''opportunité au déploiement opérationnel d''un projet marketing et commercial.

Parcours de 5 heures (300 minutes) pour débutants et profils intermédiaires : identifier une opportunité, cadrer un projet, construire un business case, préparer un comité, piloter, déployer et mesurer. Cas fil rouge : Banque Horizon, offre jeunes actifs 25-35 ans. Exemples complémentaires : assurance, services, distribution, B2B et B2C.

Ce parcours enseigne des méthodes applicables. Il ne remplace pas l''expérience nécessaire au pilotage autonome de projets complexes. L''attestation LOU Academy certifie la réussite dans cette plateforme : ce n''est pas un diplôme d''État ni une certification professionnelle enregistrée au RNCP.

Public : reconversion, juniors marketing/commercial, chefs de projet en prise de poste. Durée : 5 heures. Niveau : débutant à intermédiaire. Catégorie : Marketing et développement.',
  'Marketing et développement',
  'debutant',
  300,
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  'fa-diagram-project',
  'linear-gradient(135deg, #4f46e5, #db2777)'
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'chef-projet-marketing-developpement')
AND EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator'));

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'chef-projet-marketing-developpement') THEN
    RAISE EXCEPTION 'Cours chef-projet-marketing-developpement absent.';
  END IF;
END
$guard$;


DO $seed$
DECLARE
  payload        jsonb := $coursejsona$
{
  "slug": "chef-projet-marketing-developpement",
  "title": "Chef de projet marketing et développement",
  "description": "De l'analyse d'opportunité au déploiement opérationnel d'un projet marketing et commercial.\n\nParcours de 5 heures (300 minutes) pour débutants et profils intermédiaires : identifier une opportunité, cadrer un projet, construire un business case, préparer un comité, piloter, déployer et mesurer. Cas fil rouge : Banque Horizon, offre jeunes actifs 25-35 ans. Exemples complémentaires : assurance, services, distribution, B2B et B2C.\n\nCe parcours enseigne des méthodes applicables. Il ne remplace pas l'expérience nécessaire au pilotage autonome de projets complexes. L'attestation LOU Academy certifie la réussite dans cette plateforme : ce n'est pas un diplôme d'État ni une certification professionnelle enregistrée au RNCP.\n\nPublic : reconversion, juniors marketing/commercial, chefs de projet en prise de poste. Durée : 5 heures. Niveau : débutant à intermédiaire. Catégorie : Marketing et développement.",
  "level": "debutant",
  "category": "Marketing et développement",
  "icon": "fa-diagram-project",
  "gradient": "linear-gradient(135deg, #4f46e5, #db2777)",
  "estimated_duration_minutes": 300,
  "modules": [
    {
      "position": 0,
      "title": "Comprendre le métier et le cycle de vie d'un projet",
      "description": "Situer le chef de projet marketing et développement parmi les autres métiers, reconnaître les projets que l'on pilote vraiment, et parcourir le cycle de vie de l'opportunité à la mesure — cas Banque Horizon.",
      "lessons": [
        {
          "title": "Le rôle du chef de projet marketing et développement",
          "description": "Distinguer chef de projet, chef de produit, digital, marketing ops et marketing stratégique, et poser les limites de décision.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez définir le métier par le résultat commercial daté que vous pilotez, le distinguer du chef de produit, du digital, du marketing ops et du marketing stratégique, et nommer ce que vous ne validez jamais à la place de la conformité, du juridique ou des risques."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le chef de projet marketing et développement pilote un résultat commercial daté : une offre lancée, un parcours souscrit, un partenariat activé, un outil adopté. Il n'est ni le propriétaire du produit dans la durée, ni le décideur unique, ni le garant réglementaire.\n\nLe chef de produit porte la vision et le backlog dans la durée. Le chef de projet digital orchestre surtout un livrable technique (site, application, tunnel). Le marketing ops industrialise outils, données et campagnes. Le marketing stratégique pose le positionnement et l'allocation des moyens. Vous reliez ces métiers : intention en plan, arbitrages visibles, livrable dans un triangle délai–budget–périmètre.\n\nLes limites de décision s'écrivent. Vous proposez cadrage, planning, risques et go/no-go. Vous ne validez pas une communication au sens de l'ACPR, vous ne signez pas un avis conformité, vous n'engagez pas l'entreprise à la place du juridique. Conformité, juridique, risques et finance tranchent dans leur champ. Votre métier est de les faire parler assez tôt pour que le projet ne se brise pas à J-15.\n\nÀ Banque Horizon (banque de détail fictive), l'offre 25-35 ans n'est pas une campagne : c'est offre, parcours, distribution et preuves. Réécrire le positionnement sans mandat, bloquer « au nom de la conformité » sans avis, ou livrer un écran sans offre vendable, ce n'est plus du pilotage."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès qu'un sujet vous est confié, écrivez quatre lignes avant toute réunion :\n1. Quel résultat commercial daté (pas « améliorer l'image ») ?\n2. Qui est le sponsor, qui décide le go/no-go, qui valide le réglementaire ?\n3. Qu'est-ce qui est déjà décidé (cible, budget, calendrier) et qu'est-ce qui ne l'est pas ?\n4. Quel est votre mandat : cadrer, piloter, livrer — pas inventer l'offre, pas signer l'avis conformité.\n\nEnsuite, vous cartographiez les voisins : produit, digital, marketing ops, stratégique, commercial, IT, finance, risques, conformité, juridique, réseaux. Vous ne les animez pas tous de la même façon. Vous les faites parler au bon moment, avec une question précise, pas un « on vous tient au courant »."
            },
            {
              "block_type": "callout",
              "content": "Rappel de posture : le chef de projet n'est pas le valideur réglementaire. ACPR, conformité, juridique et risques tranchent dans leur champ. Votre valeur est d'anticiper leurs questions, pas de les remplacer."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "La directrice marketing d'Horizon envoie : « Il nous faut une offre 25-35 ans pour Q2, les néobanques nous prennent nos clients, lance une campagne Instagram et un nouveau livret. » Sans rôle clair, un junior commande des visuels, un autre ouvre un ticket IT, un troisième promet un livret au réseau. Trois mois plus tard : une campagne sans offre éligible, un livret bloqué en conformité, un réseau mécontent.\n\nLe même brief, tenu : vous reformulez le résultat (« souscriptions nettes 25-35 sur une offre cadrée, dans six mois, budget limité »), vous séparez ce qui relève du produit, du parcours, de la communication et de l'avis conformité, et vous demandez un sponsor et un comité d'arbitrage avant d'engager l'IT."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Accepter le titre « chef de projet » comme un droit de tout décider. Confondre urgence du sponsor et mandat écrit. « Valider » une pub ou une offre parce que personne d'autre n'était en salle. Se prendre pour le chef de produit et réécrire le positionnement. Se retrancher derrière « ce n'est pas moi, c'est la conformité » sans avoir jamais posé la question à temps."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Dans une PME, vous pouvez porter à la fois le cadrage et une partie du digital : le cumul d'activités n'élargit pas vos droits réglementaires. Dans un groupe bancaire, le RACI est dense : votre métier est de le rendre lisible, pas de le contourner. En agence ou cabinet, le client reste le décideur ; vous livrez une méthode et des options, pas une signature à sa place."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "La CMO d'Horizon écrit : « Tu es chef de projet, donc tu valides le message, le tarif et le parcours, on n'a pas le temps de passer en conformité. » En cinq lignes : (1) ce que vous acceptez de piloter ; (2) ce que vous refusez de valider ; (3) à qui vous parlez dans les 48 heures."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Vous pilotez le cadrage, le calendrier, l'alignement des métiers et la préparation du comité : message, tarif et parcours sont des objets du projet, pas des décisions que vous prenez seul.\n2. Vous ne validez ni le message au sens de l'ACPR, ni le tarif (finance / produit), ni l'éligibilité de l'offre (conformité, juridique, risques). L'absence de créneau n'est pas un mandat.\n3. Dans les 48 heures : le sponsor (CMO) pour reformuler le mandat ; conformité et juridique pour un avis de principe sur le type d'offre ; produit et finance pour le tarif ; digital/IT pour la faisabilité du parcours. Vous tracez la demande et le refus de « valider sans filière »."
            }
          ],
          "position": 0
        },
        {
          "title": "Les projets que vous pilotez vraiment",
          "description": "Reconnaître un projet marketing et développement : offre, assurance, partenariat, parcours, outil commercial, distribution, expérience client.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez nommer les familles de projets que pilote un chef de projet marketing et développement, et vous savez dire, pour chacune, quel résultat commercial se mesure — au-delà d'une « campagne » ou d'un « site ». Vous distinguez un projet d'une tâche récurrente."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "On vous appellera chef de projet pour des objets très différents. Ce n'est pas « tout ce qui n'est pas le quotidien ». Un projet a un début, une fin, un résultat, des parties prenantes, un budget. Une campagne e-mail hebdomadaire n'en est pas un. Un lancement d'offre, si.\n\nEn banque et services financiers, les projets typiques se regroupent. Une offre bancaire (compte, livret, crédit) : vous pilotez le lancement, pas la vie du produit. Une offre d'assurance (protection, habitation, affinitaire) : mêmes réflexes, avec un régime d'information client souvent plus exigeant. Un partenariat (néobanque, enseigne, école, fintech) : le projet est un contrat + un parcours + une distribution, pas un logo. Un parcours de souscription : le résultat est un taux de complétion et un délai, pas un « nouveau tunnel ». Un outil commercial (argumentaire, configurateur, tablette agence) : le résultat est l'adoption par le réseau, pas la mise en ligne. Un projet de distribution (ouverture d'un canal, refonte du parcours agence / mobile) change qui vend et comment. Un projet d'expérience client (CX) traite un irritant mesurable — abandon, délai, incompréhension — pas « l'amour de la marque ».\n\nCes familles se croisent. L'offre jeunes actifs d'Horizon est à la fois offre, parcours, distribution et CX. Si vous ne nommez qu'une famille, vous oublierez une partie prenante et un livrable."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Face à une demande, classez-la en une minute :\n- Est-ce un projet (début, fin, résultat) ou du run (campagne récurrente, reporting) ?\n- Quelle famille dominante : offre, assurance, partenariat, parcours, outil commercial, distribution, CX ?\n- Quel résultat se mesure 90 jours après le lancement ?\n- Qui devra changer son métier (réseau, IT, conformité, partenaire) ?\n- Qu'est-ce qui n'est PAS dans le projet (la refonte de toute la banque, le rebranding, le plan média annuel) ?\nVous proposez ensuite un nom de projet en une phrase : verbe + objet + cible + horizon. « Lancer l'offre 25-35 ans sur mobile et en agence, souscription en moins de 8 minutes, d'ici six mois » est un projet. « Booster les jeunes » n'en est pas un."
            },
            {
              "block_type": "callout",
              "content": "Les exemples d'enseignes concurrentes, de parts de marché et de délais cités dans ce parcours sont fictifs et pédagogiques, sauf mention contraire. Ils servent à s'entraîner, pas à décrire un acteur réel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Trois demandes arrivent le même lundi à Horizon. A : « On refait la plaquette du livret A. » B : « Un comparateur veut afficher notre compte 25-35 et envoyer des leads. » C : « Les conseillers n'arrivent pas à expliquer le découvert sur tablette. » A est du run (outil commercial mineur, pas un projet). B est un partenariat + un parcours de souscription : contrat, éligibilité, leads, conformité. C est un outil commercial + CX : argumentaire, maquette, formation réseau. Traiter les trois comme « trois campagnes » produit trois échecs différents."
            },
            {
              "block_type": "code",
              "content": "FAMILLES DE PROJETS — repère (Banque Horizon, fictif)\nFamille              Résultat 90 jours              Parties prenantes typiques\nOffre bancaire       Souscriptions nettes, mix      Produit, finance, conformité, digital, réseaux\nAssurance            Contrats, taux d'équipement    Produit assurance, juridique, réseaux\nPartenariat          Leads / ventes via partenaire  Juridique, digital, partenaire, risques\nParcours souscription Taux de complétion, délai     Digital, IT, CX, conformité, risques\nOutil commercial     Adoption réseau, qualité RDV   Commercial, formation, digital\nDistribution         Mix canal, productivité        Réseaux, digital, immobilier/IT\nCX                   Irritant mesuré en baisse      CX, digital, opérations, relation client\n\nUne demande peut cumuler deux ou trois familles. Nommez-les, ne les diluez pas."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Appeler projet toute tâche un peu nouvelle. Oublier le réseau dans un « projet digital ». Traiter un partenariat comme une pub. Mesurer le succès d'un outil commercial au nombre de slides, pas à l'usage. Promettre une offre d'assurance « comme un compte » sans filière dédiée."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En B2B (offre entreprises, convention de partenariat), le cycle de vente allonge le projet : le cadrage doit inclure qui signe chez le client. En distribution physique, un outil non formé est un projet mort. En CX, un irritant « ressenti en COMEX » n'est pas encore un projet : il faut un fait (taux d'abandon, délai, réclamation)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez ces quatre demandes Horizon : (1) partenariat avec une école de commerce pour un compte étudiant puis offre 25-35 ; (2) envoi mensuel de la newsletter ; (3) réduction de 18 à 8 minutes du parcours d'ouverture de compte ; (4) nouveau script d'entretien pour les conseillers sur le découvert. Pour chacune : projet ou run ; famille ; résultat mesurable."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Projet — partenariat + offre + parcours. Résultat : comptes ouverts via l'école, puis bascule vers l'offre 25-35, avec contrat et avis conformité. 2. Run — communication récurrente, pas un projet. 3. Projet — parcours de souscription (+ CX). Résultat : délai médian, taux de complétion, abandon par étape. 4. Projet léger — outil commercial. Résultat : usage du script, qualité des RDV, pas « le PDF est prêt ». Un junior qui traite 2 et 4 comme le même objet (un document) manque le critère d'adoption."
            }
          ],
          "position": 1
        },
        {
          "title": "Le cycle de vie d'un projet : de l'opportunité à la mesure",
          "description": "Parcourir opportunité, faisabilité, business case, arbitrage, cadrage, réalisation, déploiement et mesure — modes linéaire, itératif et hybride.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez énoncer les huit étapes du cycle de vie, expliquer ce que chacune produit, et choisir un mode de conduite (linéaire, itératif, hybride) sans en faire une religion. Vous situez où se trouve aujourd'hui le projet Horizon."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un projet marketing et développement n'est pas une suite de réunions. C'est un enchaînement d'états, chacun avec un livrable qui autorise — ou non — l'étape suivante.\n\nL'opportunité nomme un signal et une hypothèse de valeur (« les souscriptions 25-35 baissent, un parcours plus simple pourrait les reprendre »). La faisabilité teste si l'on peut : technique, réglementaire, commerciale, RH. Le business case chiffre coûts, recettes, risques et alternatives. L'arbitrage est un go, un no-go ou un go conditionnel en comité : ce n'est pas un « on avance et on verra ». Le cadrage fige périmètre, jalons, rôles, budget et critères de succès. La réalisation exécute (lots ou sprints), avec revues et gestion des écarts. Le déploiement bascule vers les utilisateurs réels : formation, communication, hypercare. La mesure compare le réel aux critères : adoption, conversion, CAC, qualité — et décide de corriger, d'industrialiser ou d'arrêter.\n\nTrois modes existent. Linéaire : les étapes s'enchaînent, le cadrage gèle tôt ; utile quand le réglementaire impose un dossier figé. Itératif : on apprend par lots (MVP parcours, puis offre, puis partenariat) ; utile quand l'usage est incertain. Hybride : cadrage et conformité plutôt linéaires, parcours digital en itérations. En banque, l'hybride est souvent le réel. Le mode n'absout pas l'arbitrage : un MVP n'est pas un droit de dépenser sans go."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour tout nouveau sujet, posez trois questions avant de « lancer des ateliers » :\n1. À quelle étape sommes-nous vraiment (opportunité, ou déjà un cadrage improvisé) ?\n2. Quel livrable manque pour prétendre passer à l'étape suivante ?\n3. Quel mode : linéaire si le dossier réglementaire domine ; itératif si l'usage est le risque principal ; hybride si les deux.\n\nVous affichez ensuite le cycle en une page, avec un statut (fait / en cours / bloqué) et un propriétaire par étape. Vous n'inventez pas d'étape « créa » au milieu : la communication est un lot de la réalisation ou du déploiement, pas un cycle parallèle secret."
            },
            {
              "block_type": "callout",
              "content": "Le business case et l'arbitrage font l'objet de modules dédiés. Ici, vous apprenez seulement à ne pas les sauter. Un planning de réalisation sans go est un risque, pas de l'agilité."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Horizon veut « l'offre 25-35 en six mois ». Un junior part directement en réalisation : maquettes, brief agence, tickets IT. La faisabilité réglementaire arrive à J-20 : pièces d'identité, devoir de conseil, publicité. Le comité découvre le coût réel. On recule de quatre mois.\n\nLe même projet, tenu : opportunité documentée (baisse des souscriptions, CAC élevé, parcours à 18 minutes) ; faisabilité (IT, conformité, réseau) ; business case ; arbitrage go conditionnel (budget plafonné, MVP parcours d'abord) ; cadrage ; réalisation itérative du tunnel ; déploiement réseaux + mobile ; mesure à 30, 60, 90 jours. Le délai de six mois devient un cadrage honnête, pas un slogan."
            },
            {
              "block_type": "code",
              "content": "CYCLE DE VIE — repère pédagogique (Banque Horizon, fictif)\n\n1. Opportunité      signal + hypothèse de valeur\n2. Faisabilité      peut-on ? (IT, réglementaire, commercial, RH)\n3. Business case    coûts, recettes, risques, alternatives\n4. Arbitrage        go / no-go / go conditionnel\n5. Cadrage          périmètre, jalons, RACI, budget, succès\n6. Réalisation      lots ou sprints, revues, écarts\n7. Déploiement      formation, bascule, communication, hypercare\n8. Mesure           adoption, conversion, CAC, qualité, suite\n\nLinéaire  : étapes dans l'ordre, cadrage gelé tôt.\nItératif  : lots qui apprennent (MVP puis enrichissement).\nHybride   : dossier et conformité plutôt linéaires ; parcours digital itératif.\nEn banque, l'hybride est souvent le réel. Un MVP n'autorise pas à sauter l'arbitrage."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Partir en réalisation parce que « le COMEX a dit six mois ». Confondre un atelier de cadrage avec un go. Appeler « agile » l'absence de business case. Mesurer uniquement le respect du planning, pas l'effet commercial. Oublier le déploiement : un parcours en production non formé au réseau est un projet inachevé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Un partenariat impose souvent un linéaire juridique (contrat) et un itératif d'intégration technique. Une refonte CX purement digitale peut être itérative, mais l'information client et la publicité restent soumises à un avis. Un projet arrêté après un no-go n'est pas un échec personnel : c'est le cycle qui a fonctionné."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Projet fictif Banque Horizon — offre jeunes actifs 25-35 ans, lancement visé 6 mois, budget limité, concurrence néobanques, souscriptions en baisse, parcours complexe, CAC élevé. Équipes : marketing, commercial, digital, IT, finance, risques, conformité, juridique, réseaux.\n\nLivrez :\n(1) les huit étapes du cycle, avec pour chacune UN livrable concret ;\n(2) les parties prenantes à embarquer à l'opportunité, au cadrage et au déploiement (pas les mêmes) ;\n(3) le mode de conduite que vous proposez (linéaire, itératif ou hybride) et pourquoi ;\n(4) ce que vous refusez de faire dès la semaine 1."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Livrables types. Opportunité : note d'une page (signal, hypothèse, cible 25-35). Faisabilité : avis IT + conformité de principe + capacité réseau. Business case : coûts, recettes, risques, alternatives (ne rien faire, partenariat, seul parcours). Arbitrage : décision go/no-go/conditionnel datée. Cadrage : périmètre, hors-périmètre, jalons, RACI, budget, critères (délai souscription, conversion, CAC). Réalisation : lots (MVP parcours mobile, offre, outil conseiller). Déploiement : kit réseau, bascule, hypercare. Mesure : tableau 30/60/90 jours.\n2. Opportunité : marketing, digital, un sponsor, un éclairage finance. Cadrage : toutes les filières (y compris risques, conformité, juridique, IT, réseaux) pour figer ce qui engage. Déploiement : réseaux et relation client en premier, digital/IT en soutien, communication validée — pas un e-mail surprise aux conseillers.\n3. Mode hybride : le dossier d'offre et l'avis conformité restent plutôt linéaires ; le parcours de souscription s'itère (MVP délai, puis pièces, puis avantages). Un linéaire pur arriverait trop tard sur l'usage ; un itératif pur ferait construire avant le go.\n4. Semaine 1 : vous ne briefez pas une agence créa, vous ne promettez pas un tarif, vous ne « validez » pas un message, vous n'ouvrez pas tout le backlog IT. Vous documentez l'opportunité et vous calendriez faisabilité et comité."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Métier et cycle de vie d'un projet",
          "description": "Vérifier que vous situez le métier, les familles de projets et le cycle de vie.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Métier et cycle de vie d'un projet",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle phrase décrit le mieux le chef de projet marketing et développement, par rapport au chef de produit ?",
                "question_type": "single_choice",
                "options": [
                  "A. Il possède le backlog du produit dans la durée et décide du positionnement",
                  "B. Il pilote un résultat commercial daté (lancement, parcours, partenariat, outil) dans un triangle délai–budget–périmètre",
                  "C. Il signe les avis conformité et les communications au nom de l'ACPR",
                  "D. Il remplace le marketing stratégique lorsque le COMEX est pressé"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le chef de produit porte le produit dans la durée. Le chef de projet pilote un résultat daté. Il ne signe pas l'avis réglementaire et ne se substitue pas à la stratégie."
              },
              {
                "question": "La CMO vous demande de « valider le message et le tarif, on n'a pas le temps de passer en conformité ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous validez, le titre de chef de projet vous y autorise",
                  "B. Vous validez le message mais pas le tarif",
                  "C. Vous refusez de valider à la place de la conformité, du juridique et de la finance, et vous organisez leurs avis",
                  "D. Vous bloquez tout le projet jusqu'à l'année suivante"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le chef de projet n'est pas le valideur réglementaire ni le décideur tarifaire. L'urgence n'est pas un mandat. Vous organisez les avis, vous ne les inventez pas. Bloquer un an n'est pas une méthode."
              },
              {
                "question": "Parmi ces demandes, laquelle est un projet de parcours de souscription plutôt qu'une tâche de run ?",
                "question_type": "single_choice",
                "options": [
                  "A. L'envoi mensuel de la newsletter Horizon",
                  "B. La mise à jour d'un tarif déjà décidé, sans changement de parcours",
                  "C. Réduire l'ouverture de compte de 18 à 8 minutes, avec un taux de complétion cible",
                  "D. Répondre à une réclamation client isolée"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Un projet a un début, une fin et un résultat mesurable. Le parcours d'ouverture est un projet. Newsletter, MAJ tarif mineure et réclamation isolée relèvent du run ou de l'opérationnel."
              },
              {
                "question": "Dans le cycle de vie enseigné ici, que doit produire l'arbitrage avant le cadrage de réalisation ?",
                "question_type": "single_choice",
                "options": [
                  "A. Un moodboard et un brief agence",
                  "B. Un go, un no-go ou un go conditionnel, sur la base d'un business case",
                  "C. La formation complète du réseau",
                  "D. Le paramétrage IT de toute l'offre, pour « gagner du temps »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'arbitrage décide. Le cadrage fige ensuite le périmètre. Créa, formation et paramétrage IT complet avant le go sont des fuites en réalisation."
              },
              {
                "question": "Banque Horizon doit lancer une offre 25-35 ans en six mois, avec un parcours digital incertain et un dossier réglementaire. Quel mode de conduite est le plus cohérent ?",
                "question_type": "single_choice",
                "options": [
                  "A. Uniquement linéaire : tout geler, y compris les écrans, avant le premier test d'usage",
                  "B. Uniquement itératif : commencer les sprints sans business case, « c'est agile »",
                  "C. Hybride : avis et dossier d'offre plutôt linéaires ; parcours de souscription en itérations après un go",
                  "D. Pas de cycle : livrer une campagne Instagram et ajuster ensuite"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "En banque, l'hybride est souvent le réel : le réglementaire ne s'itère pas comme un écran, mais l'usage du parcours s'apprend. L'agilité n'autorise pas à sauter l'arbitrage. Une campagne n'est pas un cycle de projet."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 1,
      "title": "Analyser le marché et identifier les opportunités",
      "description": "Conduire une étude de marché utile à la décision, benchmarker sans copier, écouter les besoins sans se tromper de problème, et formuler une opportunité — cas Banque Horizon et app 18-30 ans.",
      "lessons": [
        {
          "title": "Réaliser une étude de marché utile à la décision",
          "description": "Passer d'une collection de chiffres à une étude qui éclaire un go/no-go : marché, segments, canaux, contraintes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez définir le périmètre d'une étude de marché, distinguer données internes et externes, et produire une synthèse qui sert une décision de projet — pas un dossier décoratif. Vous savez aussi dire ce qu'une étude de 7 minutes de lecture ne peut pas prétendre."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une étude de marché, pour un chef de projet, n'est pas un mémoire. C'est un dossier assez juste pour décider : vaut-il la peine de cadrer un projet, sur quel segment, contre quelles alternatives ? Si l'étude ne change aucune décision, elle n'a pas servi.\n\nVous séparez quatre couches. Le marché : qui paie, pour quel usage, avec quelle dynamique (croissance, saturation, régulation). Les segments : ici, les jeunes actifs 25-35 ans ne sont pas « les jeunes » ; un étudiant de 19 ans et un primo-accédant de 33 ans n'ont pas le même besoin. Les canaux : où se décide l'ouverture d'un compte ou d'un contrat (mobile, agence, partenaire, comparateur). Les contraintes : devoir d'information, publicité financière, KYC, capacité IT, budget.\n\nLes sources se combinent. Internes : souscriptions, abandon de parcours, CAC, attrition, réclamations, mix agence/mobile — ce sont souvent les plus actionnables. Externes : études sectorielles, rapports publics, veille concurrentielle, interviews. Tout chiffre sans source, sans date et sans définition (qu'est-ce qu'un « client jeune » ?) est un bruit. Les parts de marché d'acteurs nommés dans ce cours sont fictives et pédagogiques.\n\nVotre livrable tient en quelques pages : fait, interprétation, implication pour le projet, ce que l'on ne sait pas encore. L'inconnu assumé est plus utile qu'une courbe inventée."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant de collecter, écrivez la question de décision : « Devons-nous investir dans une offre 25-35 ans, un partenariat, ou d'abord un parcours ? » Puis :\n1. Définir le marché (produit, géographie, cible, période).\n2. Lister les données internes déjà disponibles (90 % des projets les ignorent).\n3. Compléter par 3 à 5 sources externes datées, pas vingt PDF non lus.\n4. Segmenter : 25-35 ans n'est pas homogène (emploi, logement, épargne, crédit).\n5. Qualifier les canaux et le coût d'accès (CAC, délai, dépendance à un partenaire).\n6. Énoncer 3 implications et 3 manques. Le manque devient un item de faisabilité, pas une excuse pour ne pas décider."
            },
            {
              "block_type": "callout",
              "content": "Une étude n'est pas un avis ACPR ni une étude d'impact réglementaire. Elle éclaire le marché. La conformité et le juridique diront si l'offre envisagée est tenable. Ne mélangez pas les deux dossiers."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Horizon constate « moins de souscriptions jeunes ». Sans étude, on commande une campagne. Avec une étude minimale : le volume 25-35 a baissé de 18 % en 12 mois (donnée interne fictive), le CAC a crû, le délai médian d'ouverture est de 18 minutes sur 7 étapes, 62 % des abandons ont lieu avant la pièce d'identité. Le marché externe (fictif) des néobanques capte l'entrée en relation, pas encore le crédit. L'implication n'est pas « plus de pubs » : c'est un projet de parcours et d'offre, pas un plan média isolé."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Ouvrir un drive de 40 slides sans question de décision. Copier un communiqué de concurrent comme s'il s'agissait d'un fait. Traiter « les 18-35 ans » comme un seul marché. Oublier les données internes. Présenter des parts de marché sans dire qu'elles sont estimées ou fictives. Confondre étude de marché et validation réglementaire."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En B2B, le « marché » est souvent une liste de 50 comptes et un cycle long : l'étude ressemble à un pipeline qualifié. En assurance, le besoin se révèle à l'événement de vie : l'étude doit parler de déclencheurs, pas seulement de notoriété. Sur un marché régulé, l'absence d'un concurrent sur un produit peut être une barrière, pas une « opportunité vide »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous donne 10 jours avant un comité Horizon. Question posée : « Faut-il une offre 25-35 ans dédiée ? » Listez : (1) 5 données internes à extraire ; (2) 3 questions qu'une étude externe doit trancher ; (3) ce que vous refusez de promettre au comité au bout de 10 jours."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Internes : volume et mix 25-35 sur 24 mois, CAC par canal, taux d'abandon du parcours par étape, attrition 12 mois, équipement (livret, crédit, assurance), part agence vs mobile, réclamations liées à l'entrée en relation.\n2. Externes : comment les néobanques (fictives) gagnent l'entrée en relation ; ce que la cible paie réellement (frais, cashback, crédit) ; quels partenariats d'acquisition existent déjà sur la place.\n3. Vous ne promettez ni un chiffre d'affaires garanti, ni une part de marché, ni un avis conformité. Vous livrez une recommandation argumentée (offre dédiée / parcours d'abord / partenariat / no-go temporaire) avec les manques. Dix jours font une étude de décision, pas une thèse."
            }
          ],
          "position": 0
        },
        {
          "title": "Benchmarker sans copier : comparer pour décider",
          "description": "Construire une grille comparative utile, lire les écarts, et en tirer des choix de projet — pas un clone.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez choisir des critères de benchmark liés à votre décision, remplir une grille comparable, et en extraire 3 écarts actionnables. Vous savez pourquoi copier le leader est un projet, pas une stratégie."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le benchmark n'est pas une galerie d'écrans. C'est une comparaison structurée : mêmes critères, mêmes définitions, mêmes cibles, pour éclairer un écart que votre projet peut — ou ne peut pas — traiter.\n\nUn bon critère est observable et lié à la décision. Pour une offre 25-35 ans : délai d'ouverture, nombre d'étapes, pièces demandées, frais, avantages ciblés, présence physique, entrée en relation 100 % mobile, qualité du premier usage, CAC apparent, promesse crédit ou épargne. Un mauvais critère : « ils ont l'air plus modernes » — ce n'est pas comparable, ce n'est pas actionnable.\n\nVous comparez des pairs pertinents, pas « tout le marché ». Une néobanque 100 % mobile, une banque de réseau urbaine et une super-app budget n'ont pas le même modèle : c'est précisément pour cela que la grille est utile, à condition de le dire. Les chiffres ci-dessous sont fictifs et pédagogiques.\n\nLire un benchmark, c'est chercher des écarts de valeur, pas des logos à imiter. Si Pulse ouvre un compte en 4 minutes et Horizon en 18, l'écart n'est pas « ils ont une appli ». C'est un parcours, un KYC, une architecture, un appétit au risque. Copier l'écran sans copier le modèle produit un clone lent et non conforme. Votre livrable : 3 écarts, 3 hypothèses sur les causes, 3 implications projet (faire, ne pas faire, investiguer)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Formuler la décision (« réduire le délai d'entrée en relation 25-35, ou changer d'avantages, ou les deux ? »).\n2. Choisir 8 à 12 critères observables, pas 40 lignes illisibles.\n3. Définir chaque critère (délai = médiane chronométrée du parcours public, pas le slogan « 5 minutes »).\n4. Remplir la grille à plusieurs (digital + réseau + un regard conformité pour les mentions), jamais seul au feeling.\n5. Marquer ce qui est constaté, estimé, inconnu.\n6. Extraire seulement trois écarts qui changent le cadrage. Le reste est annexe.\n7. Relier chaque écart à une famille de projet (parcours, offre, partenariat, outil, CX)."
            },
            {
              "block_type": "callout",
              "content": "Les enseignes, parts de marché, NPS, CAC et délais du tableau sont inventés pour la pédagogie. En situation réelle, vous datez, vous sourcez, et vous n'inventez pas un NPS concurrent."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un junior d'Horizon revient d'un « benchmark » avec 60 captures d'écran et la conclusion « il faut un cashback ». La grille ci-dessous montre autre chose : l'écart le plus brutal n'est pas le cashback, c'est le temps d'ouverture et le premier usage le jour même. Le cashback de Pulse (fictif) est un coût d'acquisition, pas forcément un modèle copiable avec le PNB d'une banque de réseau. L'implication projet prioritaire est le parcours, pas la copie d'une mécanique promo."
            },
            {
              "block_type": "code",
              "content": "BENCHMARK FICTIF — Offre « quotidien 25-35 ans » (données inventées, pédagogie)\nCritère                 | Horizon actuel | NéoBank Pulse | Banque Rivage | App Finly\n------------------------|----------------|---------------|---------------|----------------\nPositionnement          | Banque générale| 100 % mobile  | Banque urbaine| Super-app budget\nOuverture de compte     | 18 min, 7 étapes| 4 min, 3 étapes| 12 min, 5 étapes| 6 min, 4 étapes\nPièces demandées        | 6              | 3             | 5             | 3\nSouscription 100 % mobile| Partielle     | Native        | Native        | Native\nCarte                   | Visa classique | Visa + cashback| Mastercard    | Virtuelle + physique\nAvantage 25-35          | Aucun ciblé    | 1 % courses   | 0,5 % voyages | Arrondi épargne\nFrais de tenue          | 2,50 € / mois  | 0 €           | 1,90 € / mois | 0 € (freemium)\nDécouvert               | Sur dossier    | Non           | Oui, tarifé   | Non\nCrédit conso 25-35      | Agence + dossier| Partenaire    | Oui, digital  | Non\nRéseau d'agences        | 420 (fictif)   | 0             | 85            | 0\nNPS déclaré 25-35       | 18             | 52            | 31            | 44\nPart de marché 25-35    | 6 %            | 11 %          | 4 %           | 8 % (usage, pas banque)\nCAC acquisition (est.)  | 180 €          | 95 €          | 140 €         | 70 € (app)\nTime-to-first-use       | J+12           | J0            | J+3           | J0\nPromesse logement/épargne| Forte, illisible| Faible       | Moyenne       | Arrondi seulement\n\nLecture guidée : l'écart délai / étapes / first-use est structurant. L'écart cashback est un choix de modèle, pas un copier-coller. L'écart réseau est une force Horizon si le parcours agence + mobile est cohérent, une faiblesse s'il allonge le délai."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Comparer des slogans (« ouverture en 5 minutes ») sans chronométrer. Mélanger banque, néobanque et super-app sans le dire. Copier un avantage (cashback) sans modèle de coût. Oublier le réglementaire : 3 pièces chez Pulse ne sont pas un droit magique, c'est un appétit et un process. Présenter 20 critères sans conclusion."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Un partenaire de distribution se bencht aussi sur le contrat et le partage de leads, pas seulement sur l'écran. En assurance, le benchmark porte sur devis, devoir de conseil, délai de souscription — pas sur le cashback carte. Si un critère est non observable (coût interne du concurrent), vous le marquez « inconnu », vous ne l'inventez pas."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du tableau fictif : (1) citez les 3 écarts les plus actionnables pour Horizon ; (2) pour chacun, dites s'il oriente un projet de parcours, d'offre, de partenariat ou d'outil commercial ; (3) quel écart vous refusez de « copier » tel quel, et pourquoi."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Délai et nombre d'étapes (18 min / 7 vs 4 min / 3). Time-to-first-use (J+12 vs J0). Avantage lisible 25-35 (aucun vs cashback ou arrondi) — à traiter après le parcours, pas avant.\n2. Délai/étapes = parcours de souscription (+ IT + conformité KYC). First-use = CX + outil (activation carte, premier virement). Avantage = offre (et finance : coût du cashback vs PNB).\n3. On refuse de copier « 0 € de tenue + 1 % cashback + 3 pièces » comme un pack. C'est un modèle économique et un appétit réglementaire, pas un écran. Horizon peut viser un délai proche et un first-use à J0, tout en jouant sa force réseau et crédit — ce que Pulse n'a pas."
            }
          ],
          "position": 1
        },
        {
          "title": "Écouter les besoins clients sans se tromper de problème",
          "description": "Articuler qualitatif et quantitatif, relier les irritants à des faits, et utiliser les personas sans les prendre pour des personnes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez combiner entretiens, parcours observés et données pour formuler un besoin, pas un souhait de COMEX. Vous connaissez les limites d'un persona. Vous savez relier un irritant à un levier de projet."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le besoin client n'est pas ce que le sponsor raconte en réunion, ni ce qu'un persona de 2019 a « aimé ». C'est un écart entre ce que la personne cherche à faire et ce que l'offre, le parcours ou le réseau lui permettent de faire, à un coût acceptable (temps, argent, charge mentale, risque perçu).\n\nLe quantitatif dit où et combien : taux d'abandon par étape, délai, NPS, CAC, équipement, motifs de réclamation, cohortes 25-35. Le qualitatif dit pourquoi : entretiens, tests de parcours, écoutes conseiller, verbatims. L'un sans l'autre trompe. Un taux d'abandon de 62 % avant la pièce d'identité est un fait. Sans entretien, vous ne savez pas si c'est la friction KYC, la peur, un crash, ou une offre mal comprise. Des verbatims « c'est trop long » sans chiffre ne pèsent pas en comité.\n\nUn irritant est un point de friction répété, observable, rattaché à une étape. « Ils n'aiment pas les banques » n'est pas un irritant. « Ils abandonnent au téléchargement du justificatif de domicile, sur mobile, le dimanche soir » en est un.\n\nLe persona est un outil de synthèse, pas une preuve. Il compacte des comportements. Il devient dangereux quand on lui donne un prénom et une vérité unique (« Léa, 28 ans, déteste les agences »). Les 25-35 ans d'Horizon ne sont pas un personnage : une partie veut l'agence pour un crédit, une partie ne viendra jamais. Visez des comportements, pas une fiction."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Partir d'un fait interne (abandon, délai, attrition, non-équipement).\n2. Observer le parcours réel (compte chrono, captures, script conseiller), pas la maquette.\n3. Mener 6 à 10 entretiens ciblés (compléteurs ET abandonnistes), plus 3 écoutes réseau.\n4. Croiser : le verbatim explique-t-il le chiffre ? Sinon, hypothèse à tester, pas conclusion.\n5. Formuler l'irritant en une phrase : qui, à quelle étape, quel coût, quelle fréquence.\n6. En déduire un levier (parcours, offre, outil, distribution, CX), pas trois projets à la fois.\n7. Si vous utilisez un persona, écrivez en tête : « synthèse, n = …, limites : … »."
            },
            {
              "block_type": "callout",
              "content": "Segmenter par âge pour une offre (25-35) n'autorise pas un discours discriminant à l'embauche ou un stéréotype. Ici, l'âge est un segment de marché déclaré par l'entreprise, pas une vérité sur les personnes."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le COMEX d'Horizon affiche un persona « Léo, 29 ans, digital native, zéro agence ». Les données internes (fictives) montrent que 38 % des crédits conso 25-35 partent encore d'un RDV agence, et que l'attrition la plus forte est chez ceux qui ont ouvert 100 % mobile sans jamais activer un premier virement. Le besoin n'est pas « encore plus digital ». C'est un first-use raté et un pont agence/mobile pour le crédit. Le persona Léo avait caché la moitié du marché."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Remplacer l'étude par un atelier interne (« on connaît nos clients »). Confondre un souhait (« une appli plus fun ») et un besoin (terminer l'ouverture le jour même). Multiplier les personas jusqu'à ce que chacun trouve le sien. Ignorer les abandonnistes. Prendre un NPS en baisse comme un brief créatif."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En B2B, l'utilisateur (le salarié) n'est pas le payeur (le DAF) : deux besoins, un projet. En réseau, le conseiller est aussi un « utilisateur » de l'outil : un irritant conseiller crée un irritant client. Sur une app, un crash n'est pas un besoin marketing : c'est un incident, à traiter avec le digital, pas avec un persona."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Faits Horizon (fictifs) : abandon 62 % avant pièce d'identité ; délai médian 18 min ; verbatims « je ne sais pas quelles pièces » et « je ferai ça en agence » ; 38 % des crédits 25-35 encore nés en agence. (1) Formulez 2 irritants précis. (2) Quelle donnée quali manque encore ? (3) En une phrase, la limite du persona « tout digital, zéro agence »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Irritant A : sur mobile, le client 25-35 abandonne avant l'envoi des pièces faute de liste claire et de parcours dimanche soir — coût = temps + incertitude. Irritant B : le pont vers l'agence (« je ferai ça en agence ») n'est pas un rendez-vous pris, c'est une fuite : beaucoup ne reviennent pas, le crédit reste un besoin non servi pour une partie de la cible.\n2. Il manque le pourquoi chez les abandonnistes (friction vs peur vs crash vs offre) et le récit des compléteurs agence (pourquoi ils viennent encore).\n3. Le persona « zéro agence » décrit un comportement fréquent, pas le marché du crédit 25-35 : s'il devient la vérité du projet, vous détruisez un canal qui produit encore 38 % des crédits du segment."
            }
          ],
          "position": 2
        },
        {
          "title": "Formuler une opportunité : SWOT et cas d'usage",
          "description": "Transformer étude, benchmark et besoins en SWOT actionnable, puis traiter le cas de baisse d'usage de l'app 18-30 ans.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire un SWOT qui oriente un projet, pas un poster. Vous savez formuler une opportunité (hypothèse de valeur + cible + levier + preuve à aller chercher). Vous appliquez la méthode au cas de l'application Horizon, usage en baisse chez les 18-30 ans."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une opportunité de projet n'est pas une idée. C'est un écart de marché ou d'usage que l'entreprise peut traiter, mieux que l'alternative (ne rien faire, une campagne, un partenariat isolé), dans un délai et un budget réalistes.\n\nLe SWOT sert à ranger, pas à décorer. Forces et faiblesses : internes (parcours, réseau, PNB, IT, image, conformité mature). Opportunités et menaces : externes (néobanques, régulation, bascule mobile, partenaires, coût d'acquisition). Un SWOT utile tient en huit puces sourcées, puis en trois croisements : une force pour saisir une opportunité ; une faiblesse à corriger avant ; une menace qui tuerait le projet si on l'ignore. Un SWOT de vingt lignes sans croisement n'aide personne.\n\nLa formulation d'opportunité suit une phrase : pour [cible], le problème [irritant mesuré] empêche [usage/valeur] ; si nous [levier], alors [effet], parce que [preuve actuelle] ; nous irons chercher [preuve manquante] avant le cadrage.\n\nLe cas app 18-30 ans n'est pas le même segment que l'offre 25-35, mais il éclaire le même métier : un usage qui baisse n'est pas automatiquement « il faut une nouvelle appli ». C'est un signal. Il peut venir d'un irritant, d'un concurrent, d'un bug, d'une offre illisible, d'une notification mal réglée, ou d'une cohorte qui n'avait jamais été engagée. Sans diagnostic, le projet sera un redesign cher."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Lister 4 forces, 4 faiblesses, 4 opportunités, 4 menaces — chacune rattachée à un fait (étude, benchmark, donnée interne).\n2. Croiser : où une force rencontre une opportunité (projet possible) ; où une faiblesse bloque (préalable) ; où une menace impose un no-go ou un cadrage serré.\n3. Écrire 1 à 3 opportunités en une phrase chacune, pas dix « pistes ». \n4. Pour chaque opportunité : infos encore manquantes, critères de benchmark utiles, 3 hypothèses alternatives, preuve qui ferait tomber l'hypothèse.\n5. Recommander une priorité (une seule) pour le prochain comité, avec ce que vous ne ferez pas."
            },
            {
              "block_type": "callout",
              "content": "Le SWOT n'est pas une décision. L'arbitrage se fera plus tard, avec un business case. Ici, vous apprenez à ne pas coller un projet sur le premier verbe du sponsor."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "SWOT express Horizon (fictif). Forces : réseau 420 agences, expertise crédit, conformité rodée. Faiblesses : 18 minutes d'ouverture, first-use à J+12, aucun avantage lisible 25-35, image « banque des parents ». Opportunités : néobanques encore faibles sur le crédit et le logement ; partenaires écoles et employeurs. Menaces : Pulse sur l'entrée en relation, CAC en hausse, régulation de la publicité, attrition des cohortes ouvertes sur mobile sans usage.\nCroisement utile : force crédit + opportunité logement 25-35, à condition de corriger le parcours (faiblesse) avant de pousser une campagne (sinon vous payez pour un tunnel qui abandonne)."
            },
            {
              "block_type": "code",
              "content": "CAS — App Horizon, baisse d'usage 18-30 ans (fictif, pédagogique)\n\nFaits fournis ce matin :\n- MAU 18-30 : −22 % en 8 mois (données internes fictives)\n- Téléchargements stables ; ce n'est pas l'acquisition store\n- Session médiane : 1 min 10 (était 3 min 40)\n- Taux d'ouverture des notifications : 4 %\n- Crash rate : 0,3 % (pas une crise technique visible)\n- Note store : 3,9 → 3,6 ; verbatims « je ne vois pas mes virements », « trop de pubs internes »\n- 41 % des 18-30 n'ont fait aucun virement depuis l'app au cours des 90 jours\n- Concurrent Pulse (fictif) : first-use J0, virement en 30 secondes, NPS 52\n\nCe n'est pas un brief « refaire l'app ». C'est un signal d'usage."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Remplir un SWOT avec des opinions (« on est modernes »). Transformer chaque case en projet. Traiter une baisse d'usage app comme un problème de logo. Empiler trois hypothèses sans dire laquelle tuerait les autres. Oublier que 18-30 n'est pas 25-35 : une opportunité app ne remplace pas l'offre jeunes actifs, elle peut l'alimenter ou la contredire."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le crash rate explose, ce n'est plus un projet marketing : c'est un incident digital. Si la baisse d'usage est concentrée sur une version iOS, le cadrage change. Si elle est concentrée sur les clients sans virement, c'est de l'activation, pas du store. Un partenariat « super-app » n'efface pas un irritant interne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Cas Banque Horizon — baisse d'usage de l'application chez les 18-30 ans (voir l'encadré). Budget limité, tentation du sponsor : « on refait l'app et on lance une campagne TikTok ».\n\nLivrez :\n(1) les informations que vous exigez encore dans les 10 jours ;\n(2) un diagnostic en 5 lignes (ce que les faits disent, ce qu'ils ne disent pas) ;\n(3) 6 critères de benchmark pertinents, pas « la plus belle app » ;\n(4) 3 hypothèses distinctes, chacune falsifiable ;\n(5) l'opportunité que vous formulez (une phrase) et ce que vous refusez d'en faire un projet tout de suite."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Infos 10 jours. Coupe de la baisse par cohorte (nouveaux vs anciens, iOS/Android, clients avec/sans virement, avec/sans carte activée). Funnel in-app (login → solde → virement → bénéficiaire). Sujets exacts des notes store. Contenu et fréquence des notifications. Temps réel d'un virement vs Pulse (chrono, pas slogan). Lien avec le parcours d'ouverture (first-use J+12 déjà vu). Volume d'appels « je ne trouve pas ».\n2. Diagnostic. Ce n'est pas une crise d'acquisition store (téléchargements stables) ni un crash massif. C'est une chute d'usage et de profondeur de session, avec un first-use faible (pas de virement pour 41 %) et une communication in-app qui agace. On ne sait pas encore si le problème est l'architecture du virement, l'offre illisible, les notifications, ou une cohorte jamais activée. Un redesign global n'est pas justifié par ces seuls faits.\n3. Critères benchmark (fictifs à mesurer pareil) : temps d'un premier virement ; nombre de taps jusqu'au solde ; activation carte J0 ; clarté des notifications (opt-in, fréquence) ; présence d'un geste d'épargne simple ; mention des frais en contexte — pas le « wow » visuel.\n4. Trois hypothèses. H1 Activation : les 18-30 ouvrent un compte et n'accomplissent aucun premier geste (virement, carte) ; l'app n'est pas le problème, le onboarding l'est. H2 Irritant virement : le flux virement/bénéficiaire est lent ou opaque (« je ne vois pas mes virements ») ; un lot parcours suffit. H3 Bruit commercial : les pubs internes et notifications à 4 % d'ouverture détruisent l'usage ; un projet de rétention/consentement, pas une refonte. (Une H4 technique resterait ouverte si une coupe iOS le montrait — les faits actuels ne la portent pas.)\n5. Opportunité. Pour les 18-30 déjà clients, l'absence de premier geste et un virement peu lisible font chuter l'usage ; si nous priorisons l'activation J0 et le flux virement, l'usage peut se redresser sans refonte, parce que l'acquisition store tient encore et que le crash rate est bas ; nous irons chercher la coupe cohortes et un chrono comparé avant cadrage. Refus : campagne TikTok et « nouvelle app » tant que H1/H2/H3 ne sont pas tranchées. Lien fil rouge : si l'offre 25-35 arrive sur la même app, un first-use cassé chez 18-30 est un signal d'alerte pour le lancement, pas un projet séparé de logo."
            }
          ],
          "position": 3
        },
        {
          "title": "Quiz — Marché, benchmark et opportunités",
          "description": "Vérifier que vous transformez des signaux de marché en décisions de projet, sans copier ni sur-interpréter.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Marché, benchmark et opportunités",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "À quoi sert principalement une étude de marché pour un chef de projet marketing et développement ?",
                "question_type": "single_choice",
                "options": [
                  "A. À produire un dossier volumineux qui prouve que l'on a travaillé",
                  "B. À éclairer une décision (go, no-go, ciblage, alternative) avec des faits sourcés et des manques assumés",
                  "C. À remplacer l'avis de la conformité et du juridique",
                  "D. À garantir une part de marché chiffrée au comité"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'étude sert une décision. Elle ne remplace pas le réglementaire et elle ne garantit pas une part de marché. Un dossier décoratif n'a pas de valeur de projet."
              },
              {
                "question": "Dans le benchmark fictif Horizon vs Pulse vs Rivage vs Finly, quel écart est le plus structurant pour un premier projet ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le logo et la couleur de l'application Pulse",
                  "B. Le délai d'ouverture, le nombre d'étapes et le time-to-first-use",
                  "C. Le seul fait que Pulse offre 1 % de cashback",
                  "D. Le nombre d'agences d'Horizon, à fermer pour copier Pulse"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le tableau montre un écart de parcours et d'activation (18 min / J+12 vs 4 min / J0). Le cashback est un modèle de coût, pas le premier clone. Fermer le réseau serait détruire une force sans traiter l'irritant."
              },
              {
                "question": "Pourquoi un persona « Léo, 29 ans, zéro agence » est-il dangereux s'il devient la vérité du projet Horizon ?",
                "question_type": "single_choice",
                "options": [
                  "A. Parce que les personas sont interdits en banque",
                  "B. Parce qu'il compacte un comportement possible mais masque d'autres usages (crédit encore né en agence, first-use raté)",
                  "C. Parce qu'il faut au moins vingt personas pour être sérieux",
                  "D. Parce qu'un persona remplace toujours les données quantitatives"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le persona est une synthèse, pas une preuve. S'il devient unique, il efface le mix réel des canaux et des besoins. Il n'est pas interdit ; il est limité. En multiplier vingt n'améliore rien."
              },
              {
                "question": "Un irritant client, dans ce module, se formule surtout comment ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Les jeunes n'aiment pas les banques »",
                  "B. Un souhait de COMEX (« une appli plus fun »)",
                  "C. Qui, à quelle étape, quel coût, quelle fréquence — rattaché à un fait (abandon, délai, réclamation)",
                  "D. Un NPS en baisse, suffisant pour lancer une campagne"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Un irritant est observable et situé. Les généralisations et les souhaits internes ne sont pas des irritants. Un NPS oriente, il ne briefe pas à lui seul."
              },
              {
                "question": "L'app Horizon perd 22 % de MAU chez les 18-30 ans, téléchargements stables, crash rate bas. Quelle conduite est la plus professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Refaire l'application et lancer TikTok, le sponsor l'a demandé",
                  "B. Conclure que la marque est morte",
                  "C. Diagnostiquer (cohortes, funnel, virement, notifications), poser 3 hypothèses falsifiables, formuler une opportunité d'activation / parcours avant tout redesign",
                  "D. Ignorer le sujet : ce n'est pas le segment 25-35 du fil rouge"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Les faits pointent un usage et un first-use, pas une crise d'acquisition ni un crash. On formule des hypothèses et une opportunité ciblée. Ce n'est pas parce que le fil rouge est 25-35 que le signal 18-30 est hors métier : il éclaire la même app."
              },
              {
                "question": "Quel croisement SWOT est le plus utile pour prioriser le projet d'offre 25-35 ans à Horizon ?",
                "question_type": "single_choice",
                "options": [
                  "A. Une liste de vingt forces, sans lien avec un projet",
                  "B. Force crédit / logement + opportunité d'un besoin 25-35, à condition de corriger la faiblesse du parcours avant de pousser l'acquisition",
                  "C. Copier toutes les menaces Pulse dans un cahier des charges unique",
                  "D. Transformer chaque case du SWOT en un projet distinct dès la semaine 1"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un SWOT utile croise. Ici : jouer le crédit (force) sur un besoin réel, sans payer de l'acquisition dans un tunnel qui abandonne (faiblesse). Copier la menace ou éclater le SWOT en dix projets n'est pas prioriser."
              }
            ]
          },
          "position": 4
        }
      ]
    },
    {
      "position": 2,
      "title": "Cadrer un projet",
      "description": "Transformer une intention marketing en projet tenable : besoin distinct de la solution, objectifs mesurables, note de cadrage complète et carte des parties prenantes, sans se substituer à la conformité.",
      "lessons": [
        {
          "title": "Formaliser le besoin",
          "description": "Séparer besoin, solution, objectif et hors périmètre avant d'engager des métiers.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous distinguez le besoin, la solution et l'objectif. Vous savez formuler un hors périmètre utile, et vous refusez de démarrer un projet dont le seul cadrage est une idée de moyen (« une appli », « une campagne », « une offre comme les néobanques »)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Cadrer, c'est séparer trois objets que l'on mélange en réunion. Le besoin est l'écart entre la situation actuelle et une situation acceptable pour l'entreprise : trop peu de souscriptions sur un segment, un parcours trop long, un coût d'acquisition trop élevé. Il se formule sans le moyen. La solution est le moyen envisagé : nouvelle offre, application, campagne, partenariat, refonte d'un tunnel. L'objectif est le résultat que l'on s'engage à viser, mesurable et daté. Si vous partez de la solution, vous cadrez un projet de livraison. Si vous partez d'un slogan, vous n'avez ni besoin ni objectif.\n\nLe hors périmètre est l'autre face du cadrage. Il nomme ce que le projet ne fera pas pendant cette vague. Sans cette liste, chaque métier ajoute silencieusement sa demande. Le chef de projet n'interdit pas l'ambition ; il rend les ajouts visibles pour que le sponsor arbitrage.\n\nÀ Banque Horizon (banque de détail fictive), le besoin n'est pas « une appli néobanque ». C'est de stopper l'érosion des souscriptions 25-35 ans, dans un délai de six mois, avec un budget limité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès la première demande, posez quatre questions dans cet ordre, par écrit.\n\nPremièrement : quel écart constaté rend le sujet prioritaire maintenant (volume, parcours, coût, concurrence) ? Deuxièmement : si l'on ne fait rien pendant six mois, que se passe-t-il concrètement ? Troisièmement : quelle solution est déjà dans la tête du demandeur, et pourquoi celle-là plutôt qu'une autre ? Quatrièmement : qu'est-ce qui est explicitement hors de cette vague ?\n\nInterlocuteurs : le demandeur métier, le sponsor pressenti, un représentant commercial ou réseau, le digital si le parcours est en jeu. Documents : chiffres de souscription du segment, parcours actuel, enveloppe indicatrice si elle existe. Contrôle : vous ne lancez ni atelier de conception ni brief agence tant que besoin, solution envisagée et hors périmètre ne tiennent pas en une page validée."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique, pas obligation légale : une phrase de besoin sans moyen. Le chef de projet n'est pas le valideur ACPR, ni le juriste, ni le risk manager. Si le besoin touche un produit d'épargne, un crédit ou une communication financière, vous signalez conformité et juridique : vous ne « validez pas le réglementaire » dans la note."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon, comité marketing. La directrice de marché déclare : « Il nous faut une offre 100 % mobile, comme les néobanques, pour juin. » Sans cadrage, le digital commence un backlog d'application, l'IT parle d'architecture, le réseau demande une plaquette. Le chef de projet reformule. Besoin : les souscriptions 25-35 ans baissent, le parcours agence plus web est long, le coût d'acquisition du segment est trop élevé. Solution envisagée (pas encore décidée) : une offre jeunes actifs avec souscription à distance. Objectif : à chiffrer au module suivant, pas un slogan. Hors périmètre de la vague : nouveau core banking, offre seniors, changement de marque, ouverture de comptes professionnels. Les métiers contestent le hors périmètre : c'est précisément le moment où le sponsor doit arbitrer, pas le moment d'empiler."
            },
            {
              "block_type": "code",
              "content": "BESOIN ≠ SOLUTION ≠ OBJECTIF — fiche express\nDemandeur : ..................... Date : ........\nÉcart constaté (faits, pas d'opinion) :\n  ................................................\nSi on ne fait rien (6 mois) :\n  ................................................\nSolution déjà dans la tête du demandeur :\n  ................................................\nObjectif (brouillon, à SMART-iser ensuite) :\n  ................................................\nHors périmètre de CETTE vague :\n  ................................................\nPoints à signaler à conformité / juridique / risques :\n  ................................................\nCe que le CP ne valide pas : règles ACPR, clauses, publicité financière."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Prendre la solution du plus haut hiérarchique pour un besoin. Écrire « digitaliser » ou « innover » comme s'il s'agissait d'un écart mesurable. Oublier le hors périmètre par peur de déplaire. Laisser l'IT ou l'agence démarrer « pour avancer » avant l'écrit. Confondre urgence du comité et urgence du client. Promettre un lancement à six mois sans avoir nommé ce qui ne sera pas fait."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En startup, le fondateur parle souvent en solution : « on clone tel acteur ». Votre valeur est de faire dire le besoin client avant le backlog. En ETI ou grand réseau, un besoin marketing cache parfois un conflit commercial / digital : le cadrage doit le rendre visible, pas le lisser. En B2B, le besoin de l'entreprise n'est pas le besoin de l'utilisateur final : les deux se formulent. En lancement réglementé (banque, assurance), le hors périmètre inclut souvent « tout ce qui exigerait un nouveau processus d'agrément non budgété » : vous le signalez, vous ne le tranchez pas."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un directeur commercial d'une enseigne de services (fictive) vous dit : « On veut un programme de parrainage digital pour booster les ventes du trimestre. » En huit à dix lignes, écrivez : (1) le besoin possible, (2) la solution déjà posée, (3) un objectif encore trop vague à refuser, (4) deux éléments de hors périmètre à faire valider."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Besoin possible : les ventes du trimestre ne suivent pas la cible, le coût d'acquisition des nouveaux clients est trop élevé, ou le réseau n'a pas de levier simple pour faire venir un second client. Vous le vérifierez par des faits, vous ne l'inventez pas. Solution déjà posée : un programme de parrainage digital — c'est un moyen, pas le besoin. Objectif trop vague à refuser : « booster les ventes » ; il manque un volume, un segment, une date, un indicateur de coût. Hors périmètre à faire valider : par exemple refonte de la grille tarifaire, nouveau produit, campagne TV, ou intégration d'un outil de CRM national si ce n'est pas financé. Vous n'affirmez pas que le parrainage est la bonne solution : vous empêchez qu'on la confonde avec le besoin."
            }
          ],
          "position": 0
        },
        {
          "title": "Objectifs SMART et indicateurs",
          "description": "Rédiger des objectifs utilisables et distinguer réalisation et résultat.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous rédigez un objectif SMART. Vous distinguez un indicateur de réalisation (on a livré) d'un indicateur de résultat (ça a produit l'effet visé). Vous refusez un projet dont le seul succès serait « avoir lancé »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un objectif SMART est spécifique, mesurable, atteignable, réaliste au regard des moyens, et temporellement borné. Ce n'est pas un slogan de comité. « Être la banque préférée des jeunes » n'est pas SMART : on ne sait ni quoi compter, ni à quelle date, ni avec quelle ressource. « Recruter 8 000 nouveaux clients 25-35 ans dans les 12 mois suivant le lancement, avec un CAC inférieur de 20 % au CAC 2026 du segment » est spécifique, mesurable et daté. Les chiffres de ce parcours sont pédagogiques et fictifs : ils illustrent une forme, pas un marché réel.\n\nDeux familles d'indicateurs doivent coexister, sans se remplacer. Les indicateurs de réalisation décrivent ce que l'équipe livre : offre publiée, parcours mobile en production, 120 conseillers formés, campagne envoyée. Les indicateurs de résultat décrivent l'effet sur le business : souscriptions, transformation, CAC, attrition, production commerciale. Un projet peut être « vert » en réalisation et « rouge » en résultat : l'offre est sortie, les jeunes n'ont pas souscrit. Inversement, un résultat peut sembler bon pour une raison étrangère au projet (une campagne nationale d'image, un mouvement de taux). Le chef de projet pose les deux, et dit comment on évitera d'attribuer au projet ce qu'il n'a pas causé."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque objectif, remplissez cinq champs avant de le présenter au sponsor.\n\n1. Population et offre concernées. 2. Grandeur mesurée (volume, taux, coût, délai). 3. Valeur de départ et valeur visée. 4. Date de lecture (lancement, M+6, M+12). 5. Source de la donnée (outil, responsable du chiffre).\n\nPuis vous ajoutez, pour le même objectif, au moins un indicateur de réalisation et un indicateur de résultat. Si vous n'avez que des réalisations, vous pilotez un planning, pas un développement. Si vous n'avez que des résultats, vous ne saurez pas si l'échec vient d'une non-livraison ou d'une offre mal conçue.\n\nContrôle : un objectif qui dépend d'une validation ACPR, juridique ou risques n'est pas « tenu par le CP ». Vous le datez sous réserve de ces validations, vous ne les promettez pas."
            },
            {
              "block_type": "callout",
              "content": "Les cibles chiffrées de Banque Horizon dans ce parcours sont des hypothèses pédagogiques. Vous n'inventez pas un objectif « ambitieux » en comité réel sans finance et sans métier. Atteignable et réaliste se discutent avec ceux qui portent le chiffre, pas seuls dans la note."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon. Objectif de réalisation : « Parcours de souscription à distance de l'offre jeunes actifs disponible en production au plus tard six mois après le go, pour les clients et prospects 25-35 ans, hors crédit immobilier. » Objectif de résultat : « 8 000 ouvertures nettes 25-35 ans sur 12 mois post-lancement, CAC segment inférieur de 20 % au CAC 2026 » (chiffres fictifs). Indicateur de réalisation associé : taux de disponibilité du parcours, nombre d'agences formées. Indicateur de résultat associé : ouvertures, taux de transformation, CAC. Ce que ce n'est pas : « une appli moderne », « plus de digital », « un NPS en hausse » sans protocole de mesure."
            },
            {
              "block_type": "code",
              "content": "OBJECTIF SMART — canevas\nS  Population / offre : ................................\nM  Grandeur + unité + source : .........................\nA  Pourquoi c'est tenable (moyens, délai) : ............\nR  Lien avec le besoin (pas avec la solution) : ........\nT  Date de lecture : ...................................\n\nRéalisation (on a livré) : .............................\nRésultat (effet business) : ............................\nHors attribution (ce que l'on ne mettra pas au crédit du projet) : ...\nRéserve réglementaire / juridique / risques : .........."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Poser uniquement des livrables (« site, campagnes, kit réseau ») et appeler cela un objectif. Empiler cinq objectifs inconciliables (volume, premium, low cost, six mois, budget serré). Prendre le slogan de marque pour une cible. Mesurer le résultat trop tôt (semaine 1) ou trop tard (après que plus personne ne pilote). Attribuer au projet toute la production du segment. Promettre une date de lancement comme si conformité avait déjà dit oui."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En distribution physique, un objectif de réalisation « 100 % du réseau formé » est souvent plus dur qu'un écran digital : prévoyez le temps réseau. En e-commerce pur, le résultat se lit plus vite, mais l'attribution pub / produit / prix se discute. En B2B à cycle long, un résultat à 12 mois peut être trop tôt : dites-le, proposez des résultats intermédiaires (rendez-vous, pipeline qualifié) sans les faire passer pour du chiffre d'affaires. En offre réglementée, un objectif de communication grand public est conditionné : le CP calendrier, il ne « passe pas en force »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Requalifiez ces trois formulations pour Banque Horizon (fictive). Pour chacune : SMART ou non, réalisation ou résultat, et une version corrigée en une phrase. 1) « Améliorer l'expérience jeune. » 2) « Former les conseillers avant le lancement. » 3) « Gagner des parts de marché. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1) Non SMART, ni réalisation ni résultat utilisable. Version : « Réduire le temps médian de souscription 25-35 ans de X minutes (parcours actuel) à Y minutes, mesuré sur l'outil digital, à M+3 du lancement » — résultat d'usage, chiffres à faire valider. 2) Réalisation, presque SMART s'il manque le volume et la date : « 120 conseillers des régions pilotes formés et habilités sur l'offre, avant la date de lancement validée. » Ce n'est pas un résultat business. 3) Non SMART, résultat trop large. Version : « 8 000 ouvertures nettes 25-35 ans sur 12 mois post-lancement » (cible pédagogique fictive), pas « des parts de marché » sans source ni périmètre. Dans les trois cas, le CP ne valide pas seul le chiffre : il le propose avec marketing et finance."
            }
          ],
          "position": 1
        },
        {
          "title": "Rédiger la note de cadrage",
          "description": "Produire le document unique qui aligne métiers, délai, budget et hors périmètre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez à quoi sert une note de cadrage, quelles sections elle contient, et vous savez en rédiger une version complète. Vous distinguez ce que le document décide (périmètre, objectifs proposés) de ce qu'il signale (conformité, juridique, risques)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La note de cadrage est le document court qui transforme une intention en projet discutable par un comité. Elle n'est pas un business case : elle ne prouve pas encore la rentabilité. Elle n'est pas un cahier des charges : elle ne spécifie pas les écrans. Elle n'est pas une plaquette. Elle pose ce que l'on veut résoudre, jusqu'où l'on va, ce que l'on ne fera pas, qui est autour de la table, ce que l'on livrera, sous quelles contraintes, avec quelles hypothèses, quels risques visibles, quel calendrier et quelle gouvernance.\n\nSans note, chacun repart avec un projet différent. Le commercial a entendu une offre tarifaire. Le digital a entendu une application. L'IT a entendu un chantier de six mois « léger ». Le réseau a entendu une animation. La finance n'a rien chiffré. La conformité n'a pas été invitée. Le chef de projet se retrouve à arbitrer des malentendus.\n\nUne note utile tient en quelques pages. Trop longue, personne ne la lit. Trop courte, elle n'arbitrera rien. Les douze sections du modèle ci-dessous sont un standard pédagogique de ce parcours, pas une norme légale. Le sponsor valide le cadrage. Le CP rédige, aligne, met à jour. Il ne signe pas à la place de la conformité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédigez dans cet ordre, même si vous collectez les infos dans le désordre : objet, contexte, besoin, objectifs, périmètre, hors périmètre, parties prenantes, livrables, contraintes, hypothèses, risques, planning et gouvernance. Faites relire marketing, commercial ou réseau, digital, finance, puis signalez conformité, juridique et risques. Une relecture n'est pas une validation réglementaire.\n\nVersionnez (date, auteur, statut : brouillon, à valider, validé). Une note « validée » oralement en couloir n'en est pas une. Après le go, tout changement de périmètre passe par une mise à jour, pas par un Slack.\n\nContrôle avant envoi au comité : un lecteur extérieur comprend-il ce qui est hors périmètre ? Les objectifs ont-ils un indicateur de résultat ? Les validations ACPR / juridiques sont-elles nommées comme réserves, pas comme acquises ?"
            },
            {
              "block_type": "callout",
              "content": "Banque Horizon est une entreprise fictive. La note ci-dessous est un modèle pédagogique. Elle ne constitue pas un dossier d'agrément, ni une position ACPR, ni un avis juridique. Un chef de projet réel s'appuie sur les équipes habilitées de son établissement."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Sans note, Banque Horizon lance trois chantiers parallèles : un nom d'offre, une maquette d'application, une promo d'entrée. Trois mois plus tard, conformité bloque le message d'entrée, l'IT découvre un lien avec le core banking hors budget, le réseau n'a pas de script, le sponsor demande « où en est le projet ». Avec une note, ces points apparaissent aux sections hors périmètre, contraintes, risques et gouvernance, avant les dépenses de conception. Le temps de rédaction n'est pas perdu : il évite de payer trois solutions pour un besoin non partagé."
            },
            {
              "block_type": "heading",
              "content": "Modèle — note de cadrage complète"
            },
            {
              "block_type": "text",
              "content": "Document pédagogique pour Banque Horizon (fictive). Les volumes, dates et enveloppes sont des hypothèses d'apprentissage, pas des données de marché. Lisez les douze sections, puis reproduisez une version courte dans l'exercice (offre d'assurance, autre entreprise)."
            },
            {
              "block_type": "code",
              "content": "NOTE DE CADRAGE — Banque Horizon (entreprise fictive)\nProjet : offre jeunes actifs 25-35 ans\nVersion : 1.0 — statut : à valider en comité\nAuteur : chef de projet marketing et développement\nDestinataires : sponsor, marketing, commercial, digital, IT, finance,\nrisques, conformité, juridique, réseaux / partenaires\n\n------------------------------------------------\n1. OBJET DU PROJET\n------------------------------------------------\nCadrer et préparer le lancement d'une offre de banque au quotidien\ndestinée aux jeunes actifs de 25 à 35 ans, afin de stopper l'érosion\ndes souscriptions sur ce segment et de ramener le coût d'acquisition\ndans une enveloppe acceptable, dans un délai visé de six mois après\nle go, avec un budget limité. Ce document ne décide pas encore de\nl'investissement : il pose le cadre du travail et des validations.\n\n------------------------------------------------\n2. CONTEXTE\n------------------------------------------------\nBanque Horizon est une banque de détail fictive, confrontée à la\nconcurrence d'acteurs nés digitaux. Les souscriptions 25-35 ans\nbaissent. Le parcours actuel mélange agence, web et pièces\njustificatives ; il est perçu comme long. Le coût d'acquisition du\nsegment est élevé. Le réseau demande un discours simple. Le digital\ndemande un parcours mobile. L'IT signale un système d'information\nchargé. Conformité et juridique n'ont pas encore été saisis sur un\npérimètre d'offre. Le comité veut une réponse sous six mois.\n\n------------------------------------------------\n3. BESOIN\n------------------------------------------------\nLe besoin n'est pas « une application néobanque » ni « une campagne\njeune ». Le besoin est de reconquérir un segment qui souscrit moins,\navec un parcours plus court et un coût d'acquisition plus maîtrisé,\nsans désorganiser le réseau ni ouvrir un chantier d'information\nsystème hors enveloppe. Si l'on ne fait rien : poursuite de la baisse\ndes ouvertures 25-35 ans, CAC élevé maintenu, discours commercial\ninadapté face aux acteurs digitaux (scénario à chiffrer au business\ncase, pas dans cette note).\n\n------------------------------------------------\n4. OBJECTIFS\n------------------------------------------------\nRéalisation (livraison) : parcours de souscription à distance de\nl'offre disponible en production au plus tard six mois après le go,\nkit réseau et formation des régions pilotes livrés avant cette date,\nmessage d'offre relu par conformité et juridique avant toute\ndiffusion publique.\n\nRésultat (effet, chiffres pédagogiques fictifs) : 8 000 ouvertures\nnettes 25-35 ans sur 12 mois post-lancement ; CAC du segment inférieur\nde 20 % au CAC 2026 du même segment. Ces cibles seront éprouvées dans\nle business case ; elles ne sont pas une promesse réglementaire.\n\n------------------------------------------------\n5. PÉRIMÈTRE INCLUS\n------------------------------------------------\n- Conception de l'offre banque au quotidien 25-35 ans (positionnement,\n  tarification proposée, entrée en relation).\n- Parcours de souscription à distance (web / mobile) pour cette offre.\n- Ciblage, message et plan d'activation (digital + réseau pilote).\n- Formation et outils des conseillers des régions pilotes.\n- Indicateurs de suivi (ouvertures, transformation, CAC, incidents).\n- Coordination des saisines : finance, IT, digital, risques,\n  conformité, juridique — sans se substituer à leurs validations.\n\n------------------------------------------------\n6. HORS PÉRIMÈTRE\n------------------------------------------------\n- Refonte du core banking / nouveau système d'information global.\n- Offre seniors, patrimoine, professionnels, crédit immobilier.\n- Changement de marque de l'établissement.\n- Ouverture d'agences ou recrutement massif de conseillers.\n- Partenariats néobanque / white label non budgétés.\n- Toute communication publique avant avis conformité et juridique.\n- Décision d'agrément, de politique ACPR ou de doctrine produits :\n  hors rôle du chef de projet.\n\nTout ajout sortant de cette liste est un changement de cadrage, à\nrevalider par le sponsor, pas un « petit extra » métier.\n\n------------------------------------------------\n7. PARTIES PRENANTES\n------------------------------------------------\nSponsor : go / no-go, enveloppe, arbitrage de périmètre.\nMarketing : proposition, ciblage, message, plan d'activation.\nCommercial et réseaux : discours, scripts, charge agence, relais.\nDigital : parcours, contenus, tracking.\nIT : faisabilité, sécurité, délai d'intégration, run.\nFinance : chiffrage, budget, lecture rentabilité.\nRisques : risques opérationnels et, le cas échéant, de crédit / fraude.\nConformité : cadre d'offre et de communication (dont attentes ACPR\nsur l'information client et la publicité) — validation métier\nhabilité, pas le CP.\nJuridique : clauses, CGU, contrats partenaires.\nPartenaires : prestataire parcours, agence, éventuel partenaire\ndistribution — sous contrat relu.\n\n------------------------------------------------\n8. LIVRABLES\n------------------------------------------------\nNote de cadrage validée ; business case ; dossier de comité ;\nparcours cible et backlog priorisé ; kit réseau ; plan d'activation ;\ntableau de bord de lancement ; journal des décisions et des réserves\nconformité / juridique / risques. Les spécifications détaillées et\nle plan de recette viennent après le go, pas à la place de cette note.\n\n------------------------------------------------\n9. CONTRAINTES\n------------------------------------------------\nDélai visé : six mois après le go (lancement, pas « idée validée »).\nBudget : enveloppe limitée — tout hors périmètre IT lourd est exclu.\nRéglementaire : aucune diffusion d'offre avant relectures habilitées.\nTechnique : pas de refonte SI. Organisationnelle : réseau à former\nsans saturer le calendrier commercial. Données : tracking et ciblage\nsous le cadre interne (DPO / conformité), pas « on ciblera plus tard ».\n\n------------------------------------------------\n10. HYPOTHÈSES\n------------------------------------------------\nH1. Le segment 25-35 ans reste prioritaire pour le comité.\nH2. Une souscription à distance est faisable sans nouveau core\n    (à confirmer IT).\nH3. Les régions pilotes peuvent former les conseillers avant lancement.\nH4. Les cibles de volume et de CAC ci-dessus sont des hypothèses\n    pédagogiques, à recaler avec finance.\nH5. Conformité et juridique peuvent instruire le dossier dans le\n    calendrier — non promis par le CP.\nSi une hypothèse tombe, la note est révisée, le planning aussi.\n\n------------------------------------------------\n11. RISQUES MAJEURS\n------------------------------------------------\nR1. Glissement de périmètre (appli totale, nouveau SI, offre élargie).\nR2. Calendrier IT incompatible avec six mois.\nR3. Message d'offre retoqué tardivement par conformité / juridique.\nR4. Réseau non prêt (scripts, objections, charge).\nR5. Cannibalisation d'offres existantes non anticipée.\nR6. CAC réel supérieur à la cible (acquisition trop chère).\nLe CP signale et organise le traitement. Il n'accepte pas seul un\nrisque réglementaire.\n\n------------------------------------------------\n12. PLANNING, GOUVERNANCE ET CRITÈRES DE SUCCÈS\n------------------------------------------------\nJalons visés après go : cadrage validé (J0) ; business case et comité\n(J0+3 semaines) ; conception offre + parcours (mois 1-3) ; recette et\nformation pilote (mois 4-5) ; lancement sous réserve des avis (mois 6) ;\nlecture résultat à M+6 et M+12.\n\nGouvernance : sponsor décideur ; CP coordonne ; comité de projet\n(marketing, commercial, digital, IT, finance) ; saisines risques,\nconformité, juridique avec délai de retour daté. Le CP ne tranche\npas un désaccord ACPR / juridique.\n\nCritères de succès du CADRAGE (pas encore du projet livré) : note\nvalidée, hors périmètre signé, objectifs de réalisation et de résultat\nécrits, réserves réglementaires nommées, prochain livrable = business\ncase.\n\nProchaine étape : chiffrage des coûts, des bénéfices et de la\nrentabilité (module business case), puis dossier de comité."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Rédiger une note-catalogue de tout ce que les métiers ont dit, sans hors périmètre. Copier un ancien cadrage en changeant le nom de l'offre. Faire signer la note par le seul marketing. Écrire « conformité OK » alors que personne d'habilité n'a lu. Transformer la note en spécification de 40 pages que personne ne valide. Ne pas versionner : six semaines plus tard, trois notes circulent."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En TPE, la note tient en deux pages et le sponsor est le dirigeant : elle existe quand même, parce que l'oral change. En groupe, un modèle interne peut imposer d'autres libellés : vous les suivez, vous gardez les douze contenus. En partenariat, la note doit dire qui est maître d'ouvrage. En urgence (« il nous faut une offre pour le salon de juin »), on raccourcit, on n'omet pas hors périmètre, contraintes et réserves. Une urgence n'autorise pas à diffuser avant avis juridique et conformité."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous êtes chef de projet chez Assurélia (assureur fictif). La direction veut lancer dans quatre mois une nouvelle offre « pack mobilité urbaine » (auto + habitation) pour les 25-40 ans, en concurrence d'acteurs digitaux, avec un budget limité. Rédigez une note de cadrage simplifiée : objet, contexte, besoin, un objectif de réalisation, un objectif de résultat, périmètre, hors périmètre (au moins trois items), parties prenantes, une contrainte réglementaire, une hypothèse, un risque, un jalon. N'écrivez pas que vous validez les règles ACPR / assurance."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Objet : cadrer le lancement d'un pack auto + habitation 25-40 ans sous quatre mois, budget limité. Contexte : Assurélia (fictif) perd des souscriptions urbaines au profit d'acteurs digitaux ; parcours actuel trop long. Besoin : reconquérir ce segment avec une souscription plus simple et un coût d'acquisition maîtrisé — pas « une appli clone ». Réalisation : parcours de souscription du pack disponible avant la date de lancement, documents d'information client relus par conformité et juridique. Résultat (hypothèse pédagogique) : un volume d'affaires nouvelles et un CAC cibles, à faire valider par finance — pas un slogan d'image. Périmètre : offre pack, parcours, activation digitale + réseau pilote, formation, indicateurs. Hors périmètre : nouveau système métier, offre santé, marque blanche, TV nationale, décision prudentielle. Parties prenantes : sponsor, marketing, commercial / réseaux, digital, IT, finance, risques, conformité, juridique, partenaires (courtiers, prestataire). Contrainte réglementaire : aucune publicité ni documentation d'offre avant avis des habilités ; le CP coordonne la saisine, il ne « valide pas l'ACPR ». Hypothèse : le SI actuel permet le pack sans chantier lourd (à confirmer IT). Risque : message retoqué tard, ou glissement vers une refonte SI. Jalon : comité de go avec business case avant conception lourde. Si votre copie a confondu besoin et solution, ou fait du CP le valideur réglementaire, elle n'est pas recevable."
            }
          ],
          "position": 2
        },
        {
          "title": "Cartographier les parties prenantes",
          "description": "Savoir qui décide, qui contribue, qui valide, et ce que le chef de projet ne tranche pas.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous identifiez les parties prenantes d'un projet d'offre (sponsor, marketing, commercial, digital, IT, finance, risques, conformité, juridique, partenaires, réseaux). Vous savez ce que chacune décide ou apporte, et vous n'occupez pas la place du valideur réglementaire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une partie prenante est une personne ou une entité dont l'accord, le travail ou le refus peut faire réussir ou échouer le projet. Les lister n'est pas de la politesse : c'est prévenir le blocage de la semaine 10. Le sponsor arbitrage périmètre, budget et go. Le marketing porte proposition et ciblage. Le commercial et les réseaux portent la vente réelle : un parcours excellent ignoré des conseillers ne produit rien. Le digital porte l'expérience et la mesure. L'IT porte la faisabilité, la sécurité et le run. La finance porte la vérité des coûts et des cibles. Les risques instruisent fraude, opérationnel, parfois crédit. La conformité et le juridique instruisent le cadre d'offre et de communication — y compris ce que l'on attend d'un établissement vis-à-vis de l'ACPR. Les partenaires (agence, prestataire, distributeur) exécutent sous contrat. Le chef de projet coordonne, écrit, relance, escalade. Il ne « valide pas les règles ACPR » tout seul, même s'il a lu une doctrine. Confondre coordination et validation réglementaire est une faute de rôle, pas un gain de temps."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque nom, posez quatre colonnes : ce qu'il veut ; ce qu'il décide ; ce qu'il doit livrer ; quand il doit être saisi. Puis classez : décideur, contributeur, valideur habilité, informé, partenaire externe.\n\nSaisine tôt : conformité, juridique, risques, IT. Saisine trop tard = veto à J-15. Le réseau se saisit avant le kit, pas le jour du lancement. Un partenaire n'entre pas tant que juridique n'a pas le contrat.\n\nLivrable : une carte d'une page jointe à la note. Contrôle : aucun valideur réglementaire n'est remplacé par la mention « le CP a vérifié »."
            },
            {
              "block_type": "callout",
              "content": "En établissement financier, l'ACPR est une autorité de supervision. Le chef de projet n'est ni l'autorité, ni la fonction conformité. Il organise le calendrier des avis. Il n'écrit pas « conforme ACPR » sous sa seule signature."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon. Le marketing veut un message d'entrée « 80 € offerts, 100 % mobile, sans engagement ». Le CP n'arbitre pas si c'est tenable. Il saisit conformité et juridique avec le projet de message, finance avec le coût de l'offre, le réseau avec l'objection client, l'IT avec le parcours d'entrée. Si conformité refuse le superlatif ou le cadeau mal présenté, ce n'est pas un caprice : c'est une validation hors rôle du CP. Le sponsor tranche alors : changer le message, changer l'offre, ou reporter. Le CP documente la décision. Il ne « passe le message quand même » pour tenir juin."
            },
            {
              "block_type": "code",
              "content": "CARTE — projet offre 25-35 ans (Banque Horizon, fictif)\nRôle            Décide          Livre                    Saisir\nSponsor         go, budget      arbitrages               dès le besoin\nMarketing       proposition     ciblage, message         J0\nCommercial      priorisation    scripts, volume visé     J0\nRéseaux         charge locale   formation, relais        avant kit\nDigital         parcours        tracking, contenus       J0\nIT              faisabilité     délai, sécu, run         J0 (pas J-15)\nFinance         lecture €       BC, budget               avant comité\nRisques         avis risque     points de contrôle       avant conception\nConformité      cadre offre /   avis (dont comm.)        avant toute pub\n                comm. (ACPR)\nJuridique       clauses, CGU    contrats, mentions       avant pub / partenaire\nPartenaires     —               exécution sous contrat   après juridique\nCP              rien de         note, planning,          en continu\n                réglementaire   escalade"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Inviter tout le monde à toutes les réunions. Oublier le réseau parce que le projet est « digital ». Faire de l'IT un exécutant saisi trop tard. Demander au sponsor de valider un wording publicitaire à la place de la conformité. Promettre à un partenaire un lancement avant contrat. Parler au nom de l'ACPR. Tenir un RACI secret : les métiers découvrent leur rôle le jour du comité."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En startup, plusieurs casquettes tiennent sur deux personnes : écrivez quand même qui décide le go et qui relit le légal (souvent un conseil externe). En réseau coopératif ou franchisé, les « réseaux » ne reçoivent pas un ordre : ils relaient sous règles d'animation. En B2B, le commercial grands comptes est souvent plus décisif que le marketing. En partenariat de marque, deux sponsors existent : sans maître d'ouvrage unique, le cadrage double."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour le pack mobilité urbaine d'Assurélia (fictif), listez en deux colonnes : (1) trois parties prenantes que vous saisissez avant toute maquette publique ; (2) une phrase que le chef de projet n'a pas le droit d'écrire seul. Justifiez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "À saisir tôt : conformité (offre d'assurance, documents d'information, publicité), juridique (clauses, partenaires, mentions), IT ou risques selon le cas (parcours, fraude, données) — et finance si une promo d'entrée engage l'économie. Phrase interdite seul : « Cette offre / cette publicité est conforme ACPR » ou « j'ai validé le réglementaire ». Le CP peut écrire : « Saisine conformité et juridique envoyée le [date] ; diffusion publique bloquée tant que l'avis n'est pas reçu. » La nuance n'est pas cosmétique : elle évite un engagement que vous n'avez pas qualité à donner."
            }
          ],
          "position": 3
        },
        {
          "title": "Quiz — Cadrer un projet",
          "description": "Vérifier que vous séparez besoin, solution, objectifs, cadrage et validations habilitées.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Cadrer un projet",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un directeur déclare : « Il nous faut une appli 100 % mobile pour les 25-35 ans d'ici juin. » En cadrage, cette phrase est d'abord :",
                "question_type": "single_choice",
                "options": [
                  "A. Un besoin, parce qu'elle nomme une cible et une date.",
                  "B. Une solution proposée (un moyen), pas encore le besoin ni un objectif SMART.",
                  "C. Un objectif SMART de résultat, car juin est une échéance.",
                  "D. Un hors périmètre, car le mobile exclut l'agence."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'application est un moyen. Le besoin serait l'écart à traiter (souscriptions, parcours, CAC). Juin sans grandeur mesurée n'est pas un objectif SMART de résultat. Le hors périmètre se décide, il ne se déduit pas du mot « mobile »."
              },
              {
                "question": "Parmi ces indicateurs, lequel est un indicateur de réalisation plutôt que de résultat ?",
                "question_type": "single_choice",
                "options": [
                  "A. 8 000 ouvertures nettes 25-35 ans sur 12 mois.",
                  "B. CAC du segment inférieur de 20 % au CAC de référence.",
                  "C. 120 conseillers des régions pilotes formés avant la date de lancement.",
                  "D. Taux de transformation du parcours de souscription."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Former les conseillers est un livrable d'équipe (réalisation). Les ouvertures, le CAC et le taux de transformation mesurent un effet business (résultat). Un projet peut livrer la formation et rater le résultat."
              },
              {
                "question": "Pourquoi une note de cadrage doit-elle contenir un hors périmètre explicite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Parce que l'ACPR impose ce chapitre dans tout projet marketing.",
                  "B. Pour allonger le document et montrer de la rigueur formelle.",
                  "C. Pour rendre visibles les ajouts possibles et protéger délai et budget, afin que le sponsor arbitrage.",
                  "D. Pour interdire au digital de travailler tant que l'IT n'a pas fini."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le hors périmètre n'est pas une exigence ACPR universelle ni un remplissage. Il empêche chaque métier d'ajouter silencieusement sa demande. Le digital et l'IT travaillent dans le périmètre validé, pas dans un gel réciproque."
              },
              {
                "question": "Sur un projet d'offre bancaire, qui valide que le message publicitaire respecte le cadre applicable (dont les attentes vis-à-vis de l'ACPR) ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le chef de projet, s'il a lu la doctrine et fait signer le sponsor.",
                  "B. Le réseau, parce qu'il parle aux clients.",
                  "C. Les fonctions habilitées (conformité, et juridique le cas échéant) ; le chef de projet coordonne la saisine et n'est pas le valideur réglementaire.",
                  "D. L'agence de communication, si le contrat le prévoit."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le CP organise calendrier et relances. Il ne se substitue pas à la conformité ni au juridique. Le sponsor arbitrage le projet, pas la règle. L'agence exécute, elle n'endosse pas la supervision."
              },
              {
                "question": "Quelle formulation est un objectif SMART de résultat (chiffres pédagogiques fictifs) ?",
                "question_type": "single_choice",
                "options": [
                  "A. Être la banque préférée des jeunes actifs.",
                  "B. Digitaliser le parcours et innover sur le segment.",
                  "C. Recruter 8 000 clients 25-35 ans dans les 12 mois suivant le lancement, avec un CAC inférieur de 20 % au CAC 2026 du segment.",
                  "D. Lancer une offre moderne d'ici six mois."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "C nomme la population, la grandeur, la cible, la date et un indicateur économique. A et B sont des slogans. D est au mieux une réalisation de planning, sans résultat business."
              }
            ]
          },
          "position": 4
        }
      ]
    },
    {
      "position": 3,
      "title": "Construire le business case",
      "description": "Chiffrer un projet d'offre : distinguer business case, business plan et budget, recenser coûts et bénéfices sans double compte, calculer rentabilité, comparer des scénarios et formuler une recommandation.",
      "lessons": [
        {
          "title": "Comprendre le business case",
          "description": "Savoir à quoi sert un BC, ce qu'il n'est pas, et quand il éclaire un go / no-go.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous définissez un business case. Vous le distinguez d'un business plan et d'un budget. Vous savez ce qu'il doit permettre à un comité de décider, et ce qu'il ne remplace pas (cadrage, conformité, planification détaillée)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le business case est le dossier qui éclaire une décision d'investissement sur un projet précis : engager ou non de l'argent, du temps et du risque, pour un résultat attendu, sur un horizon donné. Il répond à une question de comité : « ce projet vaut-il d'être lancé, tel que cadré, plutôt que de ne rien faire ou de faire autre chose ? » Il s'appuie sur le cadrage (besoin, périmètre, hypothèses). Il ne le remplace pas.\n\nLe business plan décrit l'entreprise ou une activité dans son ensemble : modèle, marché, organisation, financement, souvent sur plusieurs années, pour des investisseurs ou un dirigeant. Ce n'est pas le bon outil pour juger une offre jeunes actifs à six mois. Le budget est l'enveloppe autorisée et le suivi des dépenses. Un projet peut être au budget et mal investi ; il peut être rentable et hors enveloppe de l'année. Le BC relie coûts, bénéfices, temps et risque. Le budget encadre ce que l'on a le droit de dépenser une fois le go donné.\n\nUn BC utile est incrémental : il compare « avec projet » et « sans projet ». Il est transparent sur les hypothèses. Il ne se confond pas avec une plaquette marketing. Il ne « valide » pas non plus le réglementaire : un projet rentable peut être non lançable tant que conformité et juridique n'ont pas statué."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant de chiffrer, écrivez en une page : la décision demandée (go, no-go, go sous conditions) ; l'horizon (ici, trois ans de lecture pédagogique) ; le scénario de référence « sans projet » ; les hypothèses que finance devra recaler ; les validations hors chiffre (IT, conformité, juridique, risques).\n\nPuis structurez le dossier : coûts, bénéfices, rentabilité, scénarios, risques économiques, recommandation. Interlocuteur pivot : finance. Le CP assemble, il n'invente pas les taux ni les volumes.\n\nContrôle : si le document ne dit pas ce qui se passe sans projet, ce n'est pas encore un business case."
            },
            {
              "block_type": "callout",
              "content": "Banque Horizon et les montants de ce module (120 000 €, 30 000 €, 90 000 €, 3 ans) sont un cas pédagogique fictif. Ils illustrent des formules. Ils ne sont pas un benchmark de marché ni le coût du capital d'un établissement réel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Comité de Banque Horizon. Le marketing présente cinq slides d'ambition jeune. La finance demande : « Combien ça coûte, que gagne-t-on de plus qu'aujourd'hui, en combien de temps on récupère, et si les volumes sont deux fois plus faibles ? » Sans BC, le CP répond par le cadrage : besoin, délai six mois, hors périmètre SI. C'est insuffisant pour un go d'investissement. Avec un BC, il pose l'investissement, les charges, le chiffre d'affaires incrémental, le net, le ROI, le délai de récupération, et des scénarios. Le comité peut alors arbitrer. Il pourra encore dire non pour une raison non financière (calendrier IT, avis conformité)."
            },
            {
              "block_type": "code",
              "content": "BC ≠ BUSINESS PLAN ≠ BUDGET\nBusiness case     : décision sur UN projet (lancer / non / sous conditions)\nBusiness plan     : récit économique d'une activité ou de l'entreprise\nBudget            : enveloppe autorisée et suivi de dépenses\nSans projet       : référence obligatoire (ce que l'on perd ou subit sinon)\nLe CP assemble    : finance chiffre, métiers fournissent volumes,\n                    conformité / juridique / risques ne sont pas « dans la VAN »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Appeler « business case » un budget prévisionnel de campagnes. Copier un business plan de création d'entreprise. Oublier le scénario sans projet. Faire du BC une plaquette d'image. Promettre la rentabilité avant d'avoir un périmètre. Traiter l'avis conformité comme une ligne de coût optionnelle que l'on pourra « voir plus tard »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En TPE, le BC tient dans un tableur d'une page : il existe quand même, parce que le dirigeant mélange trésorerie et espoir. En grand groupe, un modèle finance est imposé (taux, horizon, catégories de coûts) : vous le suivez, vous ne créez pas une VAN parallèle. En partenariat, deux BC peuvent coexister : dites qui investit quoi. En offre réglementée, un BC positif n'autorise pas le lancement : il alimente le comité, il ne court-circuite pas les habilités."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez ces trois documents pour le projet jeunes actifs de Banque Horizon : (1) enveloppe marketing 2027 déjà votée ; (2) dossier « lancer l'offre 25-35, coûts / gains / scénarios / reco » ; (3) plan à 5 ans de la banque pour lever de la dette. Dites lequel le comité projet doit exiger cette semaine, et pourquoi les deux autres ne suffisent pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) est un budget : il dit ce que l'on a le droit de dépenser, pas si ce projet-là est le bon usage de l'argent. (2) est le business case : c'est le document de la décision de lancement. (3) est un business plan (ou un plan stratégique / financier d'entreprise) : trop large, trop long, il noie l'offre 25-35 ans. Le comité projet exige (2) cette semaine, branché sur le cadrage déjà écrit. (1) servira après le go pour consommer. (3) n'arbitrera pas le backlog digital du trimestre."
            }
          ],
          "position": 0
        },
        {
          "title": "Identifier et chiffrer les coûts",
          "description": "Recenser investissement, charges d'exploitation et oubliés, sans mélanger les natures.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous séparez l'investissement initial des charges récurrentes. Vous savez quoi inclure (projet, acquisition, run, formation, prestataires) et quoi exclure (coûts déjà irrécupérables). Vous préparez le cas 120 000 € + 30 000 € par an."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Deux natures de coûts doivent rester distinctes. L'investissement initial (parfois appelé CAPEX ou coût de lancement) est dépensé pour rendre le projet possible : conception d'offre, parcours digital, campagnes de lancement, formation, frais de projet, prestataires de mise en œuvre. Dans le cas pédagogique, il vaut 120 000 €, une fois, en année 0. Les charges d'exploitation (OPEX) reviennent chaque année tant que l'offre vit : media, licences, maintenance du parcours, animation commerciale, support. Dans le cas, 30 000 € par an, pendant l'horizon de trois ans, soit 90 000 € de charges. Le coût total sur l'horizon est 120 000 + 90 000 = 210 000 €. Ce n'est pas « 120 000 € le projet ».\n\nOn ajoute souvent, trop tard : le temps interne (si finance le valorise), les coûts de conformité externalisés, les imprévus, le run IT. On n'ajoute pas les coûts irrécupérables déjà engagés (une étude payée l'an dernier) : ils ne changent pas la décision d'aujourd'hui. On n'ajoute pas non plus « toute la masse salariale du marketing » : seulement l'incrémental, ce que le projet fait dépenser en plus. TVA, immobilisation, règles comptables : le CP s'aligne sur finance, il n'invente pas un plan comptable."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Listez les coûts en trois colonnes : lancement (une fois) ; annuel (chaque année) ; éventuel (si tel événement).\n\n1. Conception et production (offre, parcours, contenus). 2. Acquisition et lancement (media, agence). 3. IT et licences. 4. Réseau (formation, outils, temps). 5. Prestataires. 6. Contrôle, recette, support. 7. Réserve d'imprévus, si la politique interne le prévoit.\n\nFaites valider la liste par finance et par les métiers qui dépenseront. Contrôle : chaque ligne a une source (devis, analogue interne, hypothèse étiquetée). Une ligne « divers 20 % » sans commentaire n'est pas un chiffrage."
            },
            {
              "block_type": "callout",
              "content": "Les 120 000 € et 30 000 € par an sont le cas unique de rentabilité de ce parcours. Ne les présentez pas comme le coût réel d'une offre bancaire. En situation réelle, finance recale chaque ligne."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon. Première version du CP : « le projet coûte 120 k€ » — en réalité le devis d'agence et le parcours. L'IT ajoute une licence annuelle, le media un budget de maintien, le réseau des journées de formation. On retrouve 30 k€ par an. Sur trois ans, ignorer l'annuel sous-estime le coût de 90 k€ et gonfle artificiellement la rentabilité. Le CP corrige avant le comité : investissement 120 k€, OPEX 30 k€ × 3, total 210 k€."
            },
            {
              "block_type": "code",
              "content": "COÛTS — cas pédagogique Banque Horizon (fictif)\nInvestissement initial (année 0)     120 000 €\n  conception offre + parcours, lancement, formation, projet\nCharges d'exploitation               30 000 € / an\n  media de maintien, licences, animation, run léger\nHorizon de lecture                   3 ans\nCharges sur l'horizon                30 000 × 3 = 90 000 €\nCOÛT TOTAL                           120 000 + 90 000 = 210 000 €\n\nÀ ne pas mettre dans le BC de décision :\n- étude déjà payée l'an dernier (coût irrécupérable)\n- salaire entier du service marketing (non incrémental)\n\nÀ faire valider par finance : détail, TVA, immos, temps interne."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "N'annoncer que l'investissement. Oublier le run. Compter deux fois la même agence (lancement et OPEX). Valoriser tout le temps de l'entreprise. Oublier la formation réseau. Mettre une réserve « au feeling ». Présenter un devis prestataire comme le coût total. Promettre que « l'IT sera absorbé par le RUN existant » sans accord IT."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En startup, presque tout est OPEX : dites-le, gardez quand même lancement vs récurrent. En groupe, CAPEX / OPEX a un sens comptable : ne recatégorisez pas pour embellir le ROI. En campagne pure, l'investissement peut être presque nul et l'annuel énorme : le BC reste pertinent. Si l'IT refuse de chiffrer, vous n'inventez pas 0 € : vous portez une hypothèse étiquetée ou vous reportez le comité."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous donne : parcours 70 k€, campagne de lancement 40 k€, formation 10 k€, media annuel 18 k€, licence 8 k€, support 4 k€ par an. Horizon 3 ans. Calculez investissement, OPEX annuel, coût total. Une étude de 15 k€ a déjà été payée en N-1 : l'incluez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Investissement = 70 + 40 + 10 = 120 k€. OPEX annuel = 18 + 8 + 4 = 30 k€. Coût total sur 3 ans = 120 + 90 = 210 k€. L'étude de 15 k€ est irrécupérable : hors BC de décision (elle peut figurer en mention « déjà dépensé », pas dans le total qui justifie le go). Si vous l'ajoutez, vous passez à 225 k€ et vous faussez ROI et comparaison avec « ne pas lancer »."
            }
          ],
          "position": 1
        },
        {
          "title": "Identifier les bénéfices sans double compte",
          "description": "Chiffrer l'incrémental, éviter de compter deux fois le même euro, traiter la cannibalisation.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez chiffre d'affaires incrémental, économie, et bénéfice non monétaire. Vous détectez un double compte. Vous savez traiter une cannibalisation et une attribution trop généreuse."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un bénéfice de business case est un écart par rapport au sans projet, sur l'horizon, dans le périmètre cadré. Trois familles. Le chiffre d'affaires incrémental (ou la marge incrémentale) : clients ou volumes que l'on n'aurait pas eus sinon. Dans le cas pédagogique, 90 000 € par an pendant trois ans, soit 270 000 € de CA. L'économie : coûts évités (un parcours plus court qui réduit un coût unitaire, un canal moins cher). Le bénéfice non monétaire : image, NPS, apprentissage — utile au comité, dangereux s'il est converti en euros sans méthode.\n\nLe double compte est l'erreur qui rend un BC « beau ». Exemples : compter le CA des nouveaux clients et, en plus, « l'économie de CAC » calculée sur ces mêmes euros déjà pris en CA ; compter la marge et le CA comme s'ils s'additionnaient ; compter une baisse de coût d'acquisition et le budget media évité alors que c'est la même ligne ; attribuer au projet toute la production 25-35 ans y compris celle qui serait venue par le réseau de toute façon. La cannibalisation n'est pas un détail : un jeune qui quitte une offre existante pour la nouvelle n'est pas un gain net égal au CA de la nouvelle offre. On déduit ce que l'on perd ailleurs, ou on travaille en marge incrémentale nette."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque ligne de bénéfice : nom, unité, source, hypothèse, « que se passe-t-il sans projet ? », « est-ce déjà dans une autre ligne ? ».\n\nOrdre : 1) volumes incrémentaux ; 2) prix / tarif ; 3) marge si finance la demande (le cas pédagogique raisonne en CA et charges, sans prétendre que le CA est du résultat) ; 4) économies distinctes, non déjà dans les charges ; 5) cannibalisation ; 6) hors euros, en annexe.\n\nContrôle anti-double compte : la somme des bénéfices peut-elle se raconter en une phrase sans répéter le même client ? Si non, retirez une ligne. Le CP ne « gonfle » pas pour passer le comité."
            },
            {
              "block_type": "callout",
              "content": "Dans le cas 90 000 € / an, le bénéfice monétaire retenu est le CA incrémental. Ne l'additionnez pas à une « valeur de marque » improvisée. 90 000 € n'est pas un bénéfice net : les charges et l'investissement sont de l'autre côté du compte."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon. Première version : CA 90 k€ / an + « économie de 20 % de CAC » + « 50 k€ d'image » + « toute la production jeune du réseau ». Finance recale. L'économie de CAC est déjà dans la comparaison avec le CAC actuel si le 90 k€ est du volume nouveau à un coût d'acquisition plus bas : la mettre en plus double compte. L'image n'a pas de protocole : annexe, pas de ligne. La production réseau qui serait venue sans l'offre sort du 90 k€. Il reste 90 k€ incrémentaux par an — hypothèse pédagogique, pas une prévision de marché."
            },
            {
              "block_type": "code",
              "content": "BÉNÉFICES — contrôle anti-double compte\nLigne                         Incremental ?  Déjà ailleurs ?  Garder ?\nCA offre 25-35  90 k€/an      oui            non              OUI (cas)\nÉconomie de CAC 20 %          ?              souvent dans     NON si le\n                                             le même volume   90 k€ l'inclut\nImage / NPS                   non €          —                ANNEXE\nProduction jeune « comme      non : mix      oui, baseline    NON\naujourd'hui »\nClients cannibalisés          perte ailleurs à déduire        AJUSTER\n\nCAS PÉDAGOGIQUE retenu :\nCA incrémental  90 000 € / an × 3 = 270 000 €\nSans addition d'une ligne image ni d'une économie déjà contenue."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Additionner CA et marge. Convertir le NPS en euros au feeling. Oublier la cannibalisation. Attribuer au projet un mouvement de taux ou une campagne nationale. Compter les années 4 et 5 alors que l'horizon annoncé est 3 ans. Présenter 90 k€ comme du résultat net. Promettre des volumes que le commercial n'a pas relus."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En B2B, le « CA » peut être un pipeline : ne le mettez pas au même rang qu'un CA signé. En e-commerce, l'attribution pub / offre est un champ de bataille : datez la règle avec le digital. En réseau physique, une partie du volume est de la reportabilité d'offres anciennes : finance aide à l'estimer, le CP ne la nie pas. Un bénéfice réglementaire (« on évite une sanction ») n'est pas un CA : on ne l'invente pas en euros."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un collègue propose d'ajouter au cas Banque Horizon : 90 k€ de CA, plus 18 k€ d'« économie media » (le CAC baisse), plus 30 k€ de « valeur de marque », plus 40 k€ de CA déjà réalisé aujourd'hui sur les 25-35 ans. Horizon 3 ans. Que gardez-vous pour le chiffrage pédagogique du module, et pourquoi ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous gardez 90 k€ / an de CA incrémental, soit 270 k€ sur 3 ans. L'économie media de 18 k€ est un double compte probable si le 90 k€ est déjà le fruit d'un CAC plus bas, ou un mélange OPEX / bénéfice : elle ne s'ajoute pas sans démonstration finance. La valeur de marque 30 k€ sort du chiffrage (annexe qualitative). Les 40 k€ déjà réalisés sont le sans projet : les mettre dans le « avec projet » gonfle le BC. Si une part des 90 k€ n'est que du report d'offres existantes, on la retire (cannibalisation). Le cas du parcours reste : 90 / an, pas 90+18+30+40."
            }
          ],
          "position": 2
        },
        {
          "title": "Mesurer la rentabilité",
          "description": "Calculer coûts totaux, CA, net, ROI, payback et introduire la VAN sans en faire une vérité unique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous calculez sans erreur le cas 120 000 / 30 000 / 90 000 / 3 ans. Vous obtenez 210 000 € de coûts, 270 000 € de CA, 60 000 € de net, un ROI d'environ 28,6 % sur les coûts totaux, un payback de 2 ans sur l'investissement initial. Vous écrivez une VAN avec un taux étiqueté hypothèse, sans la présenter comme l'unique vérité."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La rentabilité relie ce que l'on dépense et ce que l'on gagne sur l'horizon, en écart par rapport au sans projet. Coût total = investissement + charges d'exploitation de l'horizon. Ici : 120 000 + 30 000 × 3 = 210 000 €. CA total = 90 000 × 3 = 270 000 €. Net = 270 000 − 210 000 = 60 000 €. Ce net n'est pas une trésorerie réelle d'établissement : c'est le solde pédagogique du cas.\n\nLe ROI retenu dans ce parcours est le net divisé par les coûts totaux : 60 000 / 210 000 ≈ 28,6 %. D'autres définitions existent (net / investissement seul = 50 %) : elles ne sont pas celles du cas. Le délai de récupération (payback) de l'investissement initial est l'investissement divisé par le flux annuel net d'exploitation : 120 000 / (90 000 − 30 000) = 120 000 / 60 000 = 2 ans. On récupère les 120 000 € en deux ans de flux +60 000 €, pas les 210 000 €.\n\nLa VAN actualise les flux. Formule : VAN = somme des CF_t / (1+i)^t. Les flux du cas : année 0 = −120 000 € ; années 1 à 3 = +60 000 € chacun. Le taux i n'est pas « le » taux de la banque : c'est une hypothèse pédagogique. Un seul chiffre de VAN ne tranche pas à lui seul."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Calculez dans cet ordre, à la main, avant tout tableur brillant.\n\n1. Coût total. 2. CA total. 3. Net. 4. ROI = net / coût total. 5. Flux annuel d'exploitation = CA annuel − OPEX annuel. 6. Payback de l'investissement = investissement / flux annuel (si le flux est stable). 7. Série de flux. 8. VAN à un taux étiqueté HYPOTHÈSE, puis au moins une autre valeur de taux pour montrer la sensibilité.\n\nPrésentation au comité : les formules d'abord, le taux ensuite, jamais l'inverse. Si finance a un taux interne, vous l'utilisez en le nommant politique interne, pas vérité scientifique."
            },
            {
              "block_type": "callout",
              "content": "HYPOTHÈSE PÉDAGOGIQUE DE TAUX : 8 % dans le calcul ci-dessous. Ce n'est pas le coût du capital de Banque Horizon, ni une consigne de place, ni une obligation. À 0 %, 5 %, 12 % ou 15 %, la VAN change. Ne présentez jamais « la VAN = 34 626 € » comme si le projet valait objectivement cette somme."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "En comité, un directeur retient 50 % de ROI (60 000 / 120 000) et « un an de payback » (120 000 / 90 000). Le CP recadre. Le ROI du parcours est sur les coûts totaux : 28,6 %. Le payback de l'investissement, flux nets d'OPEX, est 2 ans. Un autre membre exige « la VAN ». Le CP montre la formule, pose 8 % comme hypothèse, obtient environ 34 626 €, puis montre qu'à 15 % l'ordre de grandeur tombe vers 17 000 €. Personne n'a « la » VAN. Le comité discute des hypothèses de volume et de taux, pas d'un totem."
            },
            {
              "block_type": "heading",
              "content": "Cas d'école — calculs exacts"
            },
            {
              "block_type": "text",
              "content": "Vérifiez chaque ligne. Horizon de trois ans. Montants hors inflation, hors impôts, pédagogiques. Banque Horizon est fictive."
            },
            {
              "block_type": "code",
              "content": "CAS BANQUE HORIZON (fictif) — rentabilité\nDonnées\n  Investissement initial (année 0)     I  = 120 000 €\n  Charges d'exploitation               E  =  30 000 € / an\n  Chiffre d'affaires incrémental       R  =  90 000 € / an\n  Horizon                              n  =  3 ans\n\n1) Coûts totaux\n  I + n × E = 120 000 + 3 × 30 000 = 120 000 + 90 000 = 210 000 €\n\n2) CA total\n  n × R = 3 × 90 000 = 270 000 €\n\n3) Net pédagogique\n  CA − coûts = 270 000 − 210 000 = 60 000 €\n\n4) ROI sur coûts totaux (définition de CE parcours)\n  net / coûts totaux = 60 000 / 210 000 = 6/21 = 2/7 ≈ 28,571 % → 28,6 %\n  À ne pas confondre avec 60 000 / 120 000 = 50 % (autre définition, hors cas)\n\n5) Flux annuel d'exploitation\n  R − E = 90 000 − 30 000 = 60 000 € / an\n\n6) Payback de l'investissement INITIAL\n  I / (R − E) = 120 000 / 60 000 = 2 ans\n  (ce n'est pas 210 000 / 60 000 = 3,5 ans, ni 120 000 / 90 000 = 1,33 an)\n\n7) Série de flux de trésorerie pédagogique\n  Année 0 :  −120 000 €\n  Année 1 :  + 60 000 €\n  Année 2 :  + 60 000 €\n  Année 3 :  + 60 000 €\n  Somme non actualisée des flux = −120 000 + 180 000 = +60 000 €\n  (égal au net : cohérence)\n\n8) VAN — HYPOTHÈSE de taux i = 8 % (pédagogique, pas une vérité)\n  VAN = Σ CF_t / (1+i)^t\n      = −120 000\n        + 60 000 / 1,08\n        + 60 000 / 1,08²\n        + 60 000 / 1,08³\n  1,08¹ = 1,08          → 60 000 / 1,08       = 55 555,56 €\n  1,08² = 1,1664        → 60 000 / 1,1664     = 51 440,33 €\n  1,08³ = 1,259712      → 60 000 / 1,259712   = 47 629,93 €\n  Somme actualisée des rentrées                 = 154 625,82 €\n  VAN (i = 8 %, HYPOTHÈSE)                      = 34 625,82 €\n                                                ≈ 34 626 €\n\n  Sensibilité (même flux, autre i — toujours une hypothèse) :\n  i =  0 %  → VAN = 60 000 €   (égal au net)\n  i =  5 %  → VAN ≈ 43 395 €\n  i =  8 %  → VAN ≈ 34 626 €\n  i = 12 %  → VAN ≈ 24 110 €\n  i = 15 %  → VAN ≈ 16 994 €\n  i = 20 %  → VAN ≈  6 389 €\n\nUne VAN positive à 8 % ne « prouve » pas le go. Une VAN plus faible\nà 15 % ne « tue » pas le projet à elle seule. Le taux et les volumes\nsont des hypothèses. Le comité les discute. Le CP les rend visibles."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Diviser 60 000 par 120 000 et appeler cela « le » ROI du cas. Oublier les 90 000 € de charges dans le dénominateur. Calculer un payback 120 000 / 90 000 en oubliant l'OPEX. Actualiser aussi l'investissement en année 1 par confusion. Présenter une VAN unique sans dire le taux. Inventer un WACC « de place » à 8 %. Dire au comité que la VAN est plus vraie que le payback : ce sont des lectures différentes, pas une hiérarchie magique."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si les flux ne sont pas stables (montée en charge), le payback se calcule en cumul, pas par division. Si l'investissement est étalé sur l'année 1, la série de flux change : on ne force pas le cas d'école. Impôts, fonds de roulement, valeur terminale : hors de ce parcours de 5 heures, à traiter avec finance. Un projet à payback 2 ans et VAN fragile à taux élevé reste un projet risqué si les volumes sont incertains : d'où les scénarios."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sans relire la correction trop tôt, calculez pour le cas 120 / 30 / 90 / 3 ans : coûts totaux, CA, net, ROI sur coûts totaux (une décimale), payback de l'investissement, flux des années 0 à 3. Puis dites pourquoi une VAN à 8 % ≈ 34 626 € n'est pas « la valeur du projet »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Coûts totaux 210 000 €. CA 270 000 €. Net 60 000 €. ROI 60 000 / 210 000 ≈ 28,6 %. Payback 120 000 / 60 000 = 2 ans. Flux : −120 k€ ; +60 k€ ; +60 k€ ; +60 k€. La VAN à 8 % ≈ 34 626 € est la valeur actualisée de CETTE série de flux à CE taux. Le 8 % est une hypothèse pédagogique. À 0 % la VAN vaut 60 000 € ; à 15 % environ 16 994 €. Donc 34 626 € n'est pas une vérité unique, ni un prix de marché, ni un argument pour contourner conformité ou IT."
            }
          ],
          "position": 3
        },
        {
          "title": "Construire les scénarios",
          "description": "Comparer prudent, central, ambitieux et sans projet, plutôt qu'un seul chiffre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous construisez quatre lectures : sans projet, prudent, central, ambitieux. Vous savez quoi faire varier (volumes, coûts, délai) et comment un comité s'en sert. Vous refusez un BC à scénario unique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un business case à une seule colonne est un plaidoyer, pas une aide à la décision. Le comité a besoin de voir ce qui se passe si les volumes déçoivent, s'ils dépassent l'espoir, et si l'on ne fait rien. Quatre scénarios suffisent à ce niveau.\n\nSans projet : on conserve la trajectoire actuelle (baisse des souscriptions, CAC élevé). Ce n'est pas un coût zéro : c'est souvent une érosion. Prudent : volumes inférieurs, ou délai plus long, ou CAC moins bon ; on teste si le projet reste acceptable. Central : le cas de référence — ici 120 / 30 / 90 / 3 ans, net 60 000 €, ROI ≈ 28,6 %, payback 2 ans. Ambitieux : volumes ou tarifs plus favorables, sans science-fiction. On ne « moyenne » pas les trois pour inventer un cinquième chiffre plus confortable. On dit dans quels mondes le go reste défendable. Un projet dont seul l'ambitieux est positif est un pari. Un projet dont le prudent reste cohérent avec le besoin cadré est plus robuste. Les scénarios ne remplacent pas l'avis conformité : un ambitieux non lançable réglementairement n'est pas un scénario, c'est une fiction."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Fixez d'abord le central, aligné sur le cadrage et sur finance. Puis variez UNE à DEUX hypothèses à la fois (volume, CAC, date de lancement), pas tout en même temps — sinon on ne sait plus ce qui pèse.\n\nSans projet : quantifiez l'érosion ou écrivez clairement « non chiffré, tendance qualitative », plutôt que 0 € silencieux. Prudent : par exemple CA annuel 60 000 € au lieu de 90 000 €, mêmes coûts. Ambitieux : par exemple 120 000 € de CA annuel, mêmes coûts. Recalculez net, ROI, payback. Présentez un tableau, pas un roman.\n\nContrôle : l'ambitieux ne doit pas reposer sur un hors périmètre (nouveau SI, budget doublé). Si on change le périmètre, ce n'est plus le même projet."
            },
            {
              "block_type": "callout",
              "content": "Les variantes 60 / 90 / 120 k€ de CA annuel ci-dessous sont pédagogiques. En réel, marketing et finance proposent les bornes, le CP ne les invente pas pour « faire joli »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon. Central : net 60 k€, ROI ≈ 28,6 %, payback 2 ans. Prudent : CA 60 k€ / an, OPEX 30 k€, investissement 120 k€ → CA 180 k€, coûts 210 k€, net −30 k€, ROI négatif, payback de l'investissement impossible sur 3 ans (flux d'exploitation 30 k€ / an, 120 / 30 = 4 ans, au-delà de l'horizon). Ambitieux : CA 120 k€ / an → CA 360 k€, coûts 210 k€, net 150 k€, ROI ≈ 71,4 %, payback 120 / 90 = 1,3 an. Sans projet : poursuite de la baisse, CAC élevé, pas d'investissement 120 k€ mais pas de CA incrémental. Le comité voit que le go n'est défendable que si l'on croit au moins au central ; le prudent est un signal d'alerte, pas une surprise à M+8."
            },
            {
              "block_type": "code",
              "content": "SCÉNARIOS — même investissement 120 k€, même OPEX 30 k€/an, 3 ans\n                  Sans projet   Prudent      Central       Ambitieux\nCA annuel         érosion       60 000       90 000        120 000\nCA 3 ans          n.d.          180 000      270 000       360 000\nCoûts 3 ans       0 projet      210 000      210 000       210 000\nNet 3 ans         érosion       −30 000      +60 000       +150 000\nROI coûts totaux  —             négatif      ≈ 28,6 %      ≈ 71,4 %\nFlux expl. / an   —             30 000       60 000        90 000\nPayback de I      —             4 ans        2 ans         1,33 an\n\nLecture : le central est le cas d'école. Le prudent casse la\nrentabilité sur 3 ans. L'ambitieux n'autorise pas à promettre 71 %.\nLe sans projet n'est pas « 0 € = mieux » : c'est l'érosion actuelle.\nMontants fictifs, formules exactes."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "N'offrir que le central. Faire de l'ambitieux le nouveau central après un « on vise haut ». Varier dix paramètres à la fois. Oublier le sans projet. Mettre dans l'ambitieux un budget ou un SI hors cadrage. Dire que la moyenne des trois scénarios est la prévision. Masquer le prudent parce qu'il fâche le sponsor."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le sans projet est une perte de licence ou un risque majeur, le go n'est plus seulement un ROI : dites-le, sans inventer une amende. En test et learn, le prudent peut être un pilote régional : recadrez alors le périmètre. En B2B à cycle long, trois ans peuvent être courts : l'horizon se discute, il ne s'invente pas le jour du comité pour sauver le payback."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Calculez le net sur 3 ans et le payback de l'investissement si le CA annuel tombe à 60 000 € (prudent), coûts inchangés (120 k€ + 30 k€ / an). Le comité doit-il encore parler uniquement du ROI 28,6 % ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "CA 180 000, coûts 210 000, net −30 000 €. Flux d'exploitation 30 000 € / an. Payback de I = 120 000 / 30 000 = 4 ans, au-delà de l'horizon. Non : le 28,6 % n'est que le central. Présenter uniquement ce ROI au comité serait trompeur. Le CP montre le tableau. Le sponsor décide s'il croit au volume 90 k€, s'il réduit les coûts, ou s'il no-go. On ne « sauve » pas le prudent en ajoutant une ligne image."
            }
          ],
          "position": 4
        },
        {
          "title": "Formuler la recommandation",
          "description": "Conclure par un go, un no-go ou un go sous conditions, argumenté et honnête.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous rédigez une recommandation de chef de projet : décision proposée, conditions, risques économiques, points hors chiffre. Vous savez ce que vous recommandez et ce que vous ne décidez pas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La recommandation est la dernière page du BC, pas un slogan de motivation. Trois issues honnêtes. Go : le central est défendable, le prudent n'est pas une catastrophe inacceptable pour le sponsor, les réserves IT / conformité / juridique sont tenables dans le calendrier. No-go : le besoin peut rester vrai, mais ce projet-là, à ces coûts et ces volumes, ne tient pas — ou un préalable bloque (SI, avis habilité). Go sous conditions : on lance si l'on réduit le périmètre, si l'on recale le volume, si l'on obtient tel avis, si l'on pilote tel indicateur d'arrêt.\n\nLe CP recommande. Le sponsor décide. Finance peut émettre un avis. Conformité peut bloquer une communication même si le ROI est de 28,6 %. Une recommandation qui cache le scénario prudent, ou qui promet l'ambitieux, n'est pas professionnelle. Une recommandation qui dit « go » sans rappeler le hors périmètre ramène le projet au malentendu du cadrage. La clarté vaut mieux qu'un faux consensus."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédigez cinq blocs, une demi-page.\n\n1. Décision proposée (go / no-go / go sous conditions). 2. Pourquoi, en trois chiffres du central plus une lecture prudent. 3. Conditions (périmètre, avis, jalon d'arrêt, responsable du volume). 4. Ce qui reste hors chiffre (IT, conformité, juridique, réseau). 5. Prochaine étape si le sponsor suit.\n\nTon : vouvoiement, faits, hypothèses étiquetées. Pas de « on n'a pas le choix ». Il y a toujours le sans projet, même s'il est douloureux."
            },
            {
              "block_type": "callout",
              "content": "Recommander un go sur le cas pédagogique n'est pas une consigne pour un vrai établissement. En réel, un ROI de 28,6 % à taux 8 % hypothétique, avec un prudent négatif, peut être accepté ou refusé selon la stratégie. Votre métier est de rendre l'arbitrage possible."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Recommandation type, Banque Horizon (fictif) : « Go sous conditions. Central : net 60 k€ sur 3 ans, ROI ≈ 28,6 % sur coûts totaux, payback 2 ans de l'investissement. Prudent (CA 60 k€ / an) : net −30 k€ — le volume 90 k€ doit être porté par marketing et réseau, avec revue à M+6. Conditions : hors périmètre SI maintenu ; avis conformité et juridique avant toute publicité ; IT confirme le délai six mois. VAN à 8 % (hypothèse pédagogique) positive, non présentée comme une vérité unique. Décision : sponsor. » Ce texte est discutable. C'est le but."
            },
            {
              "block_type": "code",
              "content": "RECOMMANDATION — canevas\nDécision proposée : go / no-go / go sous conditions\nCentral (cas)     : coûts 210 k€ · CA 270 k€ · net 60 k€ · ROI ≈ 28,6 % · payback 2 ans\nPrudent           : (chiffre) — conséquence\nConditions        : 1) ...  2) ...  3) jalon d'arrêt ...\nHors chiffre      : IT · conformité · juridique · réseau\nVAN               : si citée, taux = HYPOTHÈSE, + une sensibilité\nJe ne décide pas  : le go final, la règle ACPR, le budget d'entreprise\nProchaine étape   : ..."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Écrire « go » parce que le sponsor est impatient. Cacher le prudent. Promettre l'ambitieux. Oublier les conditions réglementaires. Transformer la reco en plaidoyer personnel. Décider à la place du sponsor. Écrire que la VAN « valide » le projet. Laisser finance découvrir les chiffres en séance."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si les avis habilités ne sont pas rentrés, la reco honnête est « pas de go public » même avec un ROI central correct. Si l'IT dit six mois impossibles, la reco devient no-go ou recadrage, pas « on verra en projet ». En TPE, la reco et la décision peuvent être la même personne : l'écrit reste, pour que l'on se souvienne des conditions."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez en six à huit lignes une recommandation go sous conditions pour Banque Horizon, en citant 210 k€, 28,6 %, 2 ans, le prudent négatif, une condition conformité et le fait que le 8 % de VAN est une hypothèse. Ne validez pas l'ACPR."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Proposition : go sous conditions. Sur le central pédagogique, coûts totaux 210 k€, CA 270 k€, net 60 k€, ROI ≈ 28,6 %, payback de l'investissement 2 ans. Le prudent (CA 60 k€ / an) donne un net de −30 k€ : le volume 90 k€ n'est pas acquis, revue à M+6. Conditions : maintenir le hors périmètre SI ; ne diffuser aucune offre avant avis conformité et juridique ; confirmation IT du délai. Une VAN à 8 % (hypothèse pédagogique, pas le coût du capital de la banque) est positive ; elle n'est pas une vérité unique. Le sponsor tranche. Le CP n'écrit pas que l'offre est « conforme ACPR »."
            }
          ],
          "position": 5
        },
        {
          "title": "Quiz — Business case",
          "description": "Vérifier définitions, anti-double compte, ROI 28,6 %, payback 2 ans, scénarios et VAN hypothèse.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Business case",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle distinction est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le business case est le budget de l'année ; le business plan est la VAN du projet.",
                  "B. Le business case éclaire la décision d'investir dans un projet ; le business plan décrit une activité ou l'entreprise ; le budget encadre les dépenses autorisées.",
                  "C. En banque, le business plan remplace toujours le business case d'une offre.",
                  "D. Le budget contient déjà la rentabilité incrémentale, donc le BC est facultatif."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le BC juge un projet par rapport au sans projet. Le business plan est plus large. Le budget autorise des dépenses, il ne prouve pas que ce projet est le bon usage de l'argent."
              },
              {
                "question": "Dans le cas pédagogique (investissement 120 000 €, OPEX 30 000 € / an, CA 90 000 € / an, horizon 3 ans), les coûts totaux, le CA et le net valent :",
                "question_type": "single_choice",
                "options": [
                  "A. 120 000 €, 90 000 €, 30 000 €.",
                  "B. 210 000 €, 270 000 €, 60 000 €.",
                  "C. 210 000 €, 270 000 €, 150 000 €.",
                  "D. 150 000 €, 270 000 €, 120 000 €."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "120 000 + 3 × 30 000 = 210 000. 3 × 90 000 = 270 000. Net = 270 000 − 210 000 = 60 000. L'option C oublie de retrancher les coûts. L'option A s'arrête à une année."
              },
              {
                "question": "Toujours sur ce cas, le ROI retenu (net / coûts totaux) est d'environ :",
                "question_type": "single_choice",
                "options": [
                  "A. 50 %, car 60 000 / 120 000.",
                  "B. 75 %, car 90 000 / 120 000.",
                  "C. 28,6 %, car 60 000 / 210 000.",
                  "D. 33,3 %, car 90 000 / 270 000."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Ce parcours définit le ROI comme 60 000 / 210 000 = 2/7 ≈ 28,6 %. Le 50 % (net / investissement seul) est une autre définition, hors cas. 90 000 n'est pas le net."
              },
              {
                "question": "Le délai de récupération de l'investissement initial (payback) de ce cas est :",
                "question_type": "single_choice",
                "options": [
                  "A. 1 an, car 120 000 / 120 000.",
                  "B. 2 ans, car 120 000 / (90 000 − 30 000) = 120 000 / 60 000.",
                  "C. 3 ans, égal à l'horizon.",
                  "D. 3,5 ans, car 210 000 / 60 000."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le payback porte sur l'investissement initial, financé par le flux d'exploitation 60 000 € / an, soit 2 ans. 3,5 ans utiliserait les coûts totaux ; 3 ans confond horizon et récupération."
              },
              {
                "question": "Compter 90 000 € / an de CA incrémental et, en plus, une « économie de CAC » calculée sur les mêmes clients, sans démonstration, c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne pratique de VAN.",
                  "B. Un double compte, à retirer tant que finance n'a pas montré que l'économie est distincte.",
                  "C. Obligatoire pour obtenir un ROI de 28,6 %.",
                  "D. La façon de chiffrer le scénario sans projet."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le 28,6 % s'obtient sans cette ligne. Additionner CA et économie sur les mêmes euros gonfle le BC. Le sans projet est la trajectoire actuelle, pas une économie de CAC empilée."
              },
              {
                "question": "Vous calculez une VAN d'environ 34 626 € avec un taux de 8 %. Quelle lecture est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. 34 626 € est la valeur objective du projet, le comité n'a plus à discuter.",
                  "B. Le 8 % est une hypothèse pédagogique (ou, en réel, un taux interne nommé) ; à un autre taux la VAN change ; ce n'est pas une vérité unique.",
                  "C. Si la VAN à 8 % est positive, l'offre est conforme aux attentes ACPR.",
                  "D. Il faut afficher uniquement cette VAN et masquer le payback de 2 ans."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La formule de VAN suppose un taux. Ici 8 % est étiqueté hypothèse : à 0 % on retrouve 60 000 €, à 15 % environ 17 000 €. La VAN ne valide ni le réglementaire ni l'unique lecture de rentabilité."
              }
            ]
          },
          "position": 6
        }
      ]
    },
    {
      "position": 4,
      "title": "Dossiers de décision",
      "description": "Choisir la bonne instance, construire un dossier d'aide à la décision, présenter en comité et arbitrer sans diluer la décision demandée. Cas fil rouge : Banque Horizon (fictive), offre jeunes actifs 25-35 ans.",
      "lessons": [
        {
          "title": "Les instances de décision",
          "description": "Distinguer comité projet, COPIL, comité d'investissement, CODIR et sponsor, et n'y porter que la décision qui leur appartient.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez nommer cinq lieux de décision, ce que chacun peut trancher, et ce que le chef de projet y prépare — sans se prendre pour le valideur réglementaire ni pour le sponsor."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une instance de décision n'est pas une réunion. C'est un organe avec un mandat, un rythme, et un type de décision qu'il a le pouvoir de prendre. Confondre les instances fait perdre des semaines et ramène un « on en a parlé » sans arbitrage.\n\nCinq lieux, à Banque Horizon (banque fictive) comme ailleurs.\n\nLe comité projet réunit l'équipe opérationnelle. Il tranche l'exécution dans le cadre validé : tickets, ressources, livrables. Il ne réouvre pas le business case. Cadence : hebdomadaire. Le chef de projet l'anime et formalise les décisions.\n\nLe COPIL (comité de pilotage) réunit responsables métier et sponsor. Il arbitre dans l'enveloppe validée : périmètre, risques majeurs, priorités, escalade. Cadence : mensuelle. Pas une liste de tâches.\n\nLe comité d'investissement alloue l'argent. Il lit le business case, le ROI, le payback. Ce n'est pas le lieu du slogan.\n\nLe CODIR aligne la stratégie et arbitre entre projets. On y va rarement, avec le sponsor, pour une décision hors mandat du COPIL : enveloppe nouvelle, arrêt, conflit de portefeuille.\n\nLe sponsor n'est pas une instance collective : c'est le décideur nommé, canal d'escalade. Le chef de projet prépare et recommande. Il ne se substitue pas au sponsor et ne valide jamais un avis conformité, juridique ou ACPR."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant chaque réunion, écrivez trois lignes : (1) quelle instance ; (2) quelle décision, formulée en GO / GO sous conditions / NO GO / report ; (3) ce que cette instance n'a pas à retravailler. Si la décision sort du mandat, changez d'instance, n'ajoutez pas un point à l'ordre du jour.\n\nCarte minimale à tenir à jour : nom du sponsor, rythme COPIL, seuil d'investissement (politique interne), qui porte la saisine conformité. Sans cette carte, vous improviserez le destinataire.\n\nLe chef de projet envoie le dossier 48 heures avant un COPIL ou un comité d'investissement. Un comité projet peut vivre avec un support du jour, à condition que les décisions y soient écrites le soir même."
            },
            {
              "block_type": "callout",
              "content": "Politique interne : le seuil qui déclenche le comité d'investissement (montant, durée, risque) est propre à l'entreprise. Ce n'est pas une règle unique. Demandez-le par écrit. Le chef de projet n'est pas le valideur réglementaire : il saisit conformité, risques et juridique, il n'émet pas l'avis ACPR."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). Le digital veut dépenser 8 k€ d'A/B tests dans l'enveloppe déjà validée de 120 k€. Le chef de projet junior met le point au CODIR « pour information stratégique ». Le DG coupe : ce n'est pas un sujet de direction. Le bon lieu est le comité projet, avec une information au sponsor si le test touche le parcours de souscription. Inversement, une demande de 40 k€ hors enveloppe n'est pas un « petit COPIL » : c'est un comité d'investissement, préparé avec le sponsor."
            },
            {
              "block_type": "heading",
              "content": "Carte des instances — à remplir à l'ouverture du projet"
            },
            {
              "block_type": "code",
              "content": "INSTANCE              MANDAT TYPIQUE                         RYTHME        QUI ANIME\nComité projet        Exécution dans le cadre validé          Hebdo         Chef de projet\nCOPIL                Arbitrage périmètre / risques / prio    Mensuel       CP + sponsor\nComité invest.       Allocation d'argent, BC, ROI, payback   Selon seuil   Finance + sponsor\nCODIR                Alignement stratégique, portefeuille    Selon agenda  Sponsor (CP en appui)\nSponsor              Décision nommée, escalade, crédit       Continu       Le sponsor décide\n                       Le CP prépare, ne tranche pas à sa place\n\nCE QUE LE CP N'Y VALIDE PAS\nAvis conformité, juridique, risques, ACPR : saisine, jamais signature."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Tout monter au CODIR « pour se couvrir ». Tout garder en comité projet pour aller plus vite. Confondre sponsor et chef de projet. Présenter un wording de campagne en comité d'investissement. Demander un avis « informel » à trois membres du COPIL dans le couloir, puis considérer que c'est décidé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "PME de 40 personnes : COPIL et CODIR sont souvent la même table. Le principe reste : séparer la décision d'argent, la décision de périmètre et le suivi d'exécution, même si les visages sont les mêmes. Startup : le fondateur est sponsor et comité d'investissement ; documentez quand même la décision, une phrase datée suffit. Distribution / réseau : un COPIL national n'arbitre pas le planning d'une agence ; un comité réseau le fait, dans le cadre. Assurance (fictive) : même cartographie, avec un poids plus fort de la conformité sur le chemin critique — le CP saisit, il ne valide pas."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), offre jeunes actifs 25-35 ans. Classez chaque sujet dans la bonne instance (comité projet, COPIL, comité d'investissement, CODIR, sponsor) et justifiez en une phrase : (1) choisir la couleur du bouton « Ouvrir un compte » ; (2) déplacer 15 k€ de média vers l'IT dans l'enveloppe 120 k€ déjà validée ; (3) demander 40 k€ de plus pour un partenaire data ; (4) arrêter le projet au profit d'une autre offre du portefeuille ; (5) un désaccord marketing / réseau sur la cible 25-35 ans que le COPIL n'a pas tranché."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Comité projet : exécution graphique dans le cadre. 2. COPIL : réallocation dans l'enveloppe validée, impact mix marketing/IT, le comité d'investissement n'a pas à revoter 15 k€ déjà autorisés. 3. Comité d'investissement : argent nouveau, hors enveloppe, avec mise à jour du BC (coûts, CA, ROI). 4. CODIR : arbitrage de portefeuille, le projet ne s'arrête pas tout seul en COPIL. 5. Sponsor : escalade d'un désaccord que le COPIL n'a pas clos ; le CP prépare la note, le sponsor tranche ou emmène au CODIR. Dans aucun cas le CP « valide la conformité »."
            }
          ],
          "position": 0
        },
        {
          "title": "Le dossier d'aide à la décision",
          "description": "Structurer une note en dix points, séparer la page exécutive des annexes, et recommander un scénario comparable.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire un dossier d'aide à la décision en dix points, rédiger une page exécutive lisible en huit minutes, et renvoyer les preuves dans des annexes. Vous distinguez recommandation du chef de projet et décision de l'instance."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un dossier d'aide à la décision n'est pas un roman de projet. C'est l'outil pour faire prendre une décision datée, par une instance nommée, sur des scénarios comparables. S'il ne dit pas ce que l'on vote, c'est un compte rendu d'avancement déguisé.\n\nDix points, dans cet ordre : (1) objet de la décision, une phrase ; (2) contexte utile, pas l'historique ; (3) problème ou opportunité ; (4) scénarios, deux ou trois, y compris le statu quo s'il est un vrai choix ; (5) critères d'arbitrage avant le comparatif ; (6) comparatif coût, délai, impact, risque ; (7) recommandation et conditions ; (8) décision demandée : GO, GO sous conditions, NO GO, report ; (9) impacts si GO — budget, RH, SI, saisine conformité, pas validation du chef de projet ; (10) annexes.\n\nLa page exécutive porte les points 1 à 8, une page, chiffres essentiels. Les annexes portent le business case détaillé, les notes de saisine, les sensibilités. Un décideur lit l'exec. Un contrôleur ouvre les annexes. Mélanger les deux, c'est noyer quelqu'un qui a huit minutes — ou cacher un chiffre fragile.\n\nChiffres du fil rouge, sans arrondi hasardeux : investissement 120 k€, récurrents 30 k€/an × 3 ans = 90 k€, coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur les coûts totaux (60 / 210), payback de 2 ans de l'investissement. Une VAN, si citée, porte un taux pédagogique étiqueté hypothèse, pas une vérité unique."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédigez d'abord la décision demandée, ensuite les scénarios, ensuite les chiffres. Jamais l'inverse : un dossier qui commence par le contexte ne se termine souvent par aucune question.\n\nRègle des scénarios : même horizon, mêmes unités, même maille de risque. Interdit : un scénario chiffré sur 3 ans et un autre « qualitatif ». Le statu quo a un coût (CAC qui reste élevé, souscriptions qui baissent) : écrivez-le, même approximatif, plutôt que de le laisser invisible.\n\nCritères avant comparatif : délai 6 mois, enveloppe, impact souscription / CAC, risque opérationnel, charge réseau, charge IT, dépendance à un avis conformité (saisine, pas validation CP).\n\nBoucle de relecture avec le sponsor, 48 heures avant l'instance. Si le sponsor ne porte pas la recommandation, vous n'allez pas « convaincre la salle contre lui »."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : une page exécutive, annexes numérotées, chaque chiffre de l'exec a une source en annexe. Le chef de projet recommande. L'instance décide. La conformité, le juridique et les risques émettent leurs avis ; le CP ne les signe pas."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). Trois scénarios pour l'offre 25-35 ans : A refonte lourde hors délai 6 mois ; B parcours simplifié + campagne ciblée, chiffres du fil rouge ; C campagnes seules sans toucher le parcours. La page exécutive recommande B, GO sous conditions (jalon de saisine conformité, gel du wording jusqu'à l'avis). Les 12 pages de tunnels, de media mix et de note de risques partent en annexes 1 à 4. Le comité d'investissement vote B, pas le tunnel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel — note exécutive d'une page"
            },
            {
              "block_type": "code",
              "content": "BANQUE HORIZON (fictive) — NOTE D'AIDE À LA DÉCISION — 1 PAGE\nInstance : comité d'investissement    Date : 14/10/2026    Auteur : chef de projet\nObjet : choisir le scénario de lancement de l'offre jeunes actifs 25-35 ans.\nDécision demandée : GO sous conditions du scénario B, enveloppe 120 k€, lancement visé M6.\n\nCONTEXTE (utile, pas l'historique)\nSouscriptions en baisse, parcours complexe, CAC élevé, concurrence néobanques.\nCible 25-35 ans. Budget limité. Lancement visé 6 mois.\n\nSCÉNARIOS (horizon 3 ans, mêmes unités)\nA. Refonte complète du parcours        Délai 9 mois (hors cible). Invest. 120 k€.\nB. Parcours simplifié + campagne       Délai 6 mois. Invest. 120 k€. RECOMMANDÉ.\nC. Campagnes seules, parcours inchangé Délai 3 mois. Invest. 40 k€. Ne traite pas\n   la complexité du parcours ni le CAC structurel.\n\nCHIFFRES SCÉNARIO B (fil rouge, ne pas arrondir à la va-vite)\nInvestissement 120 k€\nCoûts récurrents 30 k€ / an × 3 ans = 90 k€\nCoûts totaux 210 k€\nCA 270 k€\nBénéfice 60 k€\nROI sur coûts totaux = 60 / 210 = 28,6 %\nPayback de l'investissement = 2 ans\nVAN : non présentée ici. Si jointe en annexe, le taux est une HYPOTHÈSE\npédagogique, pas une vérité unique — l'étiqueter.\n\nCRITÈRES (annoncés avant le comparatif)\nDélai 6 mois | enveloppe | impact souscription/CAC | charge IT et réseau |\nsaisine conformité (avis hors CP).\n\nRECOMMANDATION\nScénario B. Conditions : (1) saisine conformité/risques/juridique avant\nconstruction du tunnel de souscription ; (2) pas de wording public avant avis ;\n(3) COPIL M2 sur le gel de périmètre.\nLe chef de projet ne valide pas l'avis réglementaire.\n\nANNEXES (hors page)\nA1. Business case détaillé   A2. Comparatif A/B/C\nA3. Note de saisine          A4. Charge IT / réseau"
            },
            {
              "block_type": "heading",
              "content": "Grille d'évaluation d'une note exécutive"
            },
            {
              "block_type": "code",
              "content": "GRILLE D'ÉVALUATION — NOTE EXÉCUTIVE (1 PAGE)\nCritère              Attendu                                  Échec typique\nDécision demandée    Phrase d'ouverture : GO / GO cond. /\n                     NO GO / report                           « On présente le projet »\nScénarios            2 ou 3, comparables, même horizon        Un seul scénario déguisé\nCritères             Annoncés avant le tableau                Critères inventés après coup\nChiffres             Formules visibles, unités stables        Mélanger CA et bénéfice\nROI / payback        ROI 28,6 % sur coûts totaux ;\n                     payback 2 ans de l'investissement        « ROI environ 30 % »\nVAN                  Taux étiqueté HYPOTHÈSE si citée         VAN présentée comme vérité\nRecommandation       Un scénario + conditions                 « Les deux sont intéressants »\nRisques              Nommés, propriétaire                     « On verra en cours »\nRôle du CP           Saisine conformité, pas validation       « Le CP a validé l'ACPR »\nLongueur             1 page ; preuves en annexes              12 pages de contexte\nProchaines étapes    Datées, nommées                          « On avance »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Ouvrir par trois pages de contexte. Recommander « les deux scénarios, selon l'appétit du comité ». Mettre le ROI dans l'exec et le détail des coûts nulle part. Citer une VAN sans dire que le taux est une hypothèse. Faire valider la conformité par le chef de projet dans la note. Envoyer le dossier le matin du comité."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "B2B services : le comité d'investissement peut être le DG et le DAF, 20 minutes. La page unique devient encore plus critique. Distribution : un scénario « pilote 12 magasins » est un vrai scénario, pas une annexe. Assurance (fictive) : l'annexe de saisine conformité est souvent le chemin critique ; elle n'est pas l'exec. Startup : une note de 15 lignes dans un doc partagé, datée, avec GO/NO GO, vaut mieux qu'un slide deck décoratif."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez la page exécutive (une page, structure à 10 points, décision demandée en ouverture) qui recommande un scénario pour Banque Horizon (fictive), offre 25-35 ans. Contraintes : lancement visé 6 mois ; enveloppe d'investissement 120 k€ ; vous disposez des trois scénarios A (refonte 9 mois), B (parcours simplifié, chiffres du fil rouge : coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 %, payback 2 ans), C (campagnes seules, 40 k€, 3 mois, parcours inchangé). La grille ci-dessus sert de barème. N'inventez pas de part de marché. N'écrivez pas que le chef de projet valide la conformité."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ouverture : « Décision demandée : GO sous conditions du scénario B. » Contexte en 4 lignes (baisse des souscriptions, parcours, CAC, 6 mois, budget). Trois scénarios, même horizon 3 ans. Critères avant le tableau : délai, enveloppe, impact CAC/souscription, charge IT/réseau, saisine conformité. Comparatif : A hors délai ; C ne traite pas la cause (parcours) ; B tient le délai et l'enveloppe, ROI 28,6 % = 60/210, payback 2 ans. Recommandation B, conditions de saisine, pas de wording public avant avis. Impacts si GO : 120 k€, workstreams, jalon conformité saisi. Annexes listées, pas collées. VAN absente, ou présente en annexe avec taux pédagogique étiqueté hypothèse. Échec si vous recommandez A malgré le délai 9 mois, si vous « validez l'ACPR », si la décision demandée est absente, si les chiffres du fil rouge sont arrondis en « environ 30 % »."
            }
          ],
          "position": 1
        },
        {
          "title": "Présenter en comité",
          "description": "Ouvrir par la décision attendue, traiter les objections, et répondre aux questions finance sans improvisation.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez ouvrir un comité par la décision demandée, tenir huit à douze minutes de propos, traiter les objections fréquentes, et répondre aux questions finance avec les chiffres du dossier — pas avec une conviction."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Présenter en comité, ce n'est pas raconter le projet. C'est obtenir une décision. La première phrase dit ce que l'instance vote. La dernière répète la décision demandée et les conditions.\n\nTrois blocs, pas davantage.\n\nLa décision attendue : GO, GO sous conditions, NO GO, report. « On voulait votre avis » n'est pas une décision. « Nous demandons le GO du scénario B, enveloppe 120 k€, lancement M6, sous réserve de la saisine conformité » en est une.\n\nLes questions finance reviennent dans cet ordre : investissement, coûts totaux, CA, bénéfice, ROI, payback, sensibilité si le CA fait −20 %, qui porte un dépassement. Fil rouge : 120 k€ d'investissement, 30 k€/an, 90 k€ de récurrents sur 3 ans, 210 k€ de coûts totaux, 270 k€ de CA, 60 k€ de bénéfice, ROI 28,6 % sur les coûts totaux, payback 2 ans. Une VAN ne s'invente pas à l'oral : annexe avec taux pédagogique étiqueté hypothèse, ou vous dites que vous ne la présentez pas.\n\nLes objections sont des risques mal formulés. « Trop cher » = comparé à quel scénario, à quel coût du statu quo. « L'IT ne pourra pas » = charge, chemin critique, ce que l'on coupe. « La conformité va bloquer » = le CP a saisi, il ne valide pas, le jalon est au planning. « Le réseau n'est pas prêt » = formation, jalon, pilote. Répondre par un fait du dossier, pas par de l'enthousiasme."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Séquence d'une présentation de 10 minutes : (1) décision demandée, 30 secondes ; (2) problème en deux phrases ; (3) scénarios et recommandation, 3 minutes ; (4) chiffres du scénario recommandé, 2 minutes ; (5) risques et conditions, 2 minutes ; (6) reprise de la décision demandée. Le reste est questions.\n\nAvant la séance, écrivez les cinq questions finance et les quatre objections ci-dessus, avec la réponse en une phrase et le numéro d'annexe. Si vous ne savez pas, dites-le et proposez une date, ne comblez pas le silence par un ordre de grandeur inventé.\n\nRègles de tenue : le sponsor ouvre si le CODIR ou le comité d'investissement l'exige ; le CP présente le fond. Vous ne parlez pas pour la conformité. Vous rappelez la saisine. Vous ne promettez pas un avis."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : un allié dans la salle (sponsor ou DAF) a lu la page exécutive. Un comité découvert le jour J produit des questions de découverte, pas une décision. Le chef de projet n'est pas l'avocat de « son » idée : il est le gardien de la comparabilité des scénarios."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive), comité d'investissement, 12 minutes. La cheffe de projet ouvre : « Nous demandons le GO sous conditions du scénario B, 120 k€, lancement à 6 mois. » Le DAF : « Quel ROI ? » Réponse : « 28,6 % sur les coûts totaux, 60 k€ / 210 k€, payback 2 ans de l'investissement. Détail en annexe 1. » Une responsable réseau : « Mes conseillers n'auront pas le temps. » Réponse : « C'est l'objection réseau. Condition du GO : jalon formation avant campagne, périmètre de 15 agences pilotes, pas le réseau entier au jour 1. » Un membre : « Et l'ACPR ? » Réponse : « Hors de notre validation. Saisine conformité dans le planning, pas de wording public avant avis. »"
            },
            {
              "block_type": "heading",
              "content": "Fiche de séance — objections et questions finance"
            },
            {
              "block_type": "code",
              "content": "FICHE DE SÉANCE — COMITÉ D'INVESTISSEMENT — BANQUE HORIZON (fictive)\nDécision demandée (à dire deux fois) :\nGO sous conditions du scénario B | 120 k€ | lancement M6\nConditions : saisine conformité/juridique/risques ; pas de wording public avant avis ;\nCOPIL gel de périmètre à M2.\n\nQUESTIONS FINANCE — RÉPONSES STABLES\nInvestissement ?     120 k€\nRécurrents ?         30 k€ / an × 3 ans = 90 k€\nCoûts totaux ?       210 k€\nCA ?                 270 k€ sur 3 ans\nBénéfice ?           60 k€\nROI ?                60 / 210 = 28,6 % sur les coûts totaux\nPayback ?            2 ans de l'investissement\nVAN ?                Pas à l'oral. Si annexe : taux = HYPOTHÈSE pédagogique.\nSensibilité −20 % CA ? Recalculer en annexe, ne pas inventer à chaud.\nQui porte un dépassement ? Politique interne + sponsor, pas le CP seul.\n\nOBJECTIONS — RÉPONSES EN UNE PHRASE\n« Trop cher »         Cher vs quel scénario, vs le coût du statu quo (CAC, baisse).\n« L'IT ne pourra pas » Charge et chemin critique dans le planning ; on coupe du\n                       périmètre, on ne « tend » pas la date en silence.\n« La conformité bloque » Le CP saisit, il ne valide pas. Jalon d'avis au planning.\n« Le réseau n'est pas prêt » Jalon formation + pilote, pas un lancement fantôme."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Commencer par l'historique du projet. Lire les slides. Promettre un avis conformité. Inventer une VAN à l'oral. Répondre à « trop cher » par « c'est stratégique ». Couper le DAF. Laisser le comité transformer la séance en atelier de wording."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "COPIL mensuel : 20 minutes, décision de périmètre, pas un mini comité d'investissement. Comité projet : pas de « pitch » ; une liste de décisions d'exécution. CODIR : le sponsor parle, le CP a trois slides maximum. B2B : un comité client interne (sales + marketing) n'est pas un comité d'investissement ; ne lui faites pas voter l'enveloppe. PME : la « présentation » tient souvent debout, 6 minutes, autour d'une page imprimée."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). En comité d'investissement, trois interventions tombent : (1) le DAF : « Votre ROI est de 50 %, non ? 60 k€ sur 120 k€. » (2) le responsable conformité : « Vous ne lancez rien sans notre avis. » (3) le directeur réseau : « Si on GO aujourd'hui, je veux le réseau entier formé en 4 semaines. » Rédigez les trois réponses orales (4 à 6 lignes chacune), puis la phrase de clôture qui rappelle la décision attendue."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. « Le ROI que nous présentons est de 28,6 % sur les coûts totaux : bénéfice 60 k€ / coûts 210 k€ (investissement 120 k€ + récurrents 90 k€). 60 / 120 = 50 % mesurerait le bénéfice sur l'investissement seul ; ce n'est pas le ROI du dossier. Payback de l'investissement : 2 ans. Annexe 1. » 2. « Nous sommes d'accord : le chef de projet ne valide pas votre avis. Le GO demandé est sous condition de saisine. Pas de wording public avant l'avis. Le jalon est au planning. » 3. « La formation du réseau entier en 4 semaines n'est pas dans le scénario B. Condition proposée : pilote de 15 agences, jalon formation avant campagne, extension ensuite. Si l'instance exige le réseau entier à J+28, ce n'est plus le scénario B : il faut revoir délai ou enveloppe. » Clôture : « Nous demandons le GO sous conditions du scénario B, 120 k€, lancement M6, saisine conformité, pilote réseau. »"
            }
          ],
          "position": 2
        },
        {
          "title": "Arbitrer sans diluer",
          "description": "Rendre visibles les arbitrages de budget, de délai, d'indisponibilité, de risques et de priorités divergentes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez formuler un arbitrage (ce que l'on garde, ce que l'on coupe, ce que l'on décale, ce que l'on assume) et le porter à la bonne instance, au lieu de « tenir la date » en silence."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un projet marketing et développement vit sous contrainte. Cinq tensions : budget, délai, indisponibilité des métiers, risques, priorités divergentes. Le chef de projet ne les fait pas disparaître. Il les rend décidables.\n\nBudget : l'enveloppe 120 k€ de Banque Horizon (fictive) n'est pas un souhait. Si une ligne dérape : couper du périmètre, demander un complément (comité d'investissement), ou arrêter. « On absorbera » n'est pas un arbitrage.\n\nDélai : le lancement visé à 6 mois est un engagement. Si le chemin critique glisse, on coupe du contenu, on décale le jalon, ou l'on accepte un pilote. Tenir la date en vidant l'offre n'est tenable que si l'instance l'a choisi.\n\nIndisponibilité : l'IT, le réseau, la conformité ne sont pas infinis. Trois semaines d'indispo sur le parcours déplacent le chemin critique. On ne « lisse » pas en soirées. On reformule : date, périmètre, ou ressource.\n\nRisques : chaque risque majeur a un propriétaire métier, une action, un seuil d'escalade. Le CP n'est pas propriétaire de l'avis conformité.\n\nPriorités divergentes : marketing veut la campagne en M4, le réseau la formation en M5, l'IT un gel de périmètre. Ce n'est pas un problème de communication. C'est un arbitrage de COPIL, trois demandes sur la même page, impact sur le jalon de lancement."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Fiche d'arbitrage en cinq lignes, avant toute réunion : (1) fait — ce qui a changé ; (2) impact — délai, coût, périmètre, risque ; (3) options — au moins deux, plus le statu quo ; (4) recommandation du CP ; (5) instance qui tranche. Sans le point 5, la fiche est un message d'alerte, pas un arbitrage.\n\nInterdit de « tenir les quatre coins » : date, budget, périmètre, qualité perçue. Un coin bouge, un autre compense, l'instance choisit lequel.\n\nEscalade : comité projet si l'enveloppe et la date tiennent ; COPIL si le périmètre ou le mix de priorités bouge ; comité d'investissement si l'argent bouge ; sponsor puis CODIR si le projet lui-même est en cause."
            },
            {
              "block_type": "callout",
              "content": "Le chef de projet n'arbitre pas à la place du sponsor. Il rend l'arbitrage possible. Il n'accepte pas non plus un « on verra » sur un risque de conformité : il saisit, il date le jalon, il n'émet pas l'avis."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). L'IT annonce 3 semaines d'indisponibilité sur le parcours. Le junior veut « compresser la recette ». Le bon arbitrage, porté en COPIL : option 1, décaler le lancement de 3 semaines ; option 2, couper le parcours « ouverture instantanée » et garder un parcours simplifié tenable ; option 3, acheter de la charge IT hors enveloppe (comité d'investissement). Recommandation : option 2, pour tenir les 6 mois. Le COPIL tranche. Ce n'est pas une décision de couloir avec l'IT."
            },
            {
              "block_type": "code",
              "content": "FICHE D'ARBITRAGE — BANQUE HORIZON (fictive)\nFait       IT indisponible 3 semaines sur le parcours de souscription\nImpact     Chemin critique +3 sem. ; lancement M6 menacé ; budget 120 k€ intact\nOptions    1. Décaler le jalon de lancement\n           2. Couper le parcours « ouverture instantanée » (recommandé)\n           3. Charge IT supplémentaire → comité d'investissement\nInstance   COPIL (périmètre / délai). Pas le comité projet seul.\nHors scope Le CP ne « valide » pas un allègement de contrôles conformité\n           pour gagner les 3 semaines."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du chef de projet débutant"
            },
            {
              "block_type": "text",
              "content": "Cacher un glissement pour « ne pas inquiéter ». Trancher un conflit marketing / réseau tout seul. Couper de la conformité pour tenir la date. Demander du budget sans dire ce que l'on abandonne. Traiter une indispo comme un problème de motivation."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Startup : l'arbitrage tient dans un message au fondateur, daté. PME : le DAF et le DG sont souvent la même instance pour budget et délai. ETI / réseau : un arbitrage « on lance sans former le réseau » devient un risque commercial, à faire voter, pas à subir. B2B : une indispo d'un prescripteur interne (sales ops) se traite comme une indispo IT : impact, options, instance."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Banque Horizon (fictive). Quatre chocs la même semaine : (a) le média a déjà consommé 20 k€ de trop sur l'enveloppe 120 k€ ; (b) le délai de lancement glisse de 2 semaines ; (c) le responsable conformité est absent 3 semaines ; (d) le marketing veut avancer la campagne, le réseau veut la reculer. Pour chaque choc, donnez l'instance, deux options, et ce que vous refusez de faire seul."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(a) COPIL d'abord (réallocation dans l'enveloppe) ; si l'enveloppe est dépassée sans compensation, comité d'investissement. Options : couper une ligne média, ou demander un complément. Seul, vous ne « laissez courir ». (b) COPIL : décaler le jalon, ou couper du périmètre pour tenir M6. Seul, vous ne promettez pas la date. (c) Comité projet pour l'organisation de la saisine ; le jalon d'avis reste au COPIL. Options : décaler le wording public, désigner un suppléant côté conformité. Seul, vous n'émettez pas l'avis. (d) COPIL : priorités divergentes. Options : campagne après jalon formation, ou pilote limité. Seul, vous n'imposez pas la date au réseau ni au marketing."
            }
          ],
          "position": 3
        },
        {
          "title": "Quiz — Dossiers de décision",
          "description": "Instances, page exécutive, présentation en comité et arbitrages. Cinq questions de raisonnement, seuil 70.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage de projets complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Dossiers de décision",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Banque Horizon (fictive). Vous devez réallouer 15 k€ de média vers l'IT, dans l'enveloppe de 120 k€ déjà validée. Quelle instance est la plus adaptée ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le CODIR, pour un alignement stratégique",
                  "B. Le comité d'investissement, car il s'agit d'argent",
                  "C. Le COPIL, qui arbitre dans l'enveloppe déjà validée",
                  "D. Le comité projet, qui vote toujours les budgets"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Une réallocation dans une enveloppe déjà votée est un arbitrage de COPIL. Le comité d'investissement traite l'argent nouveau. Le CODIR n'a pas à voir 15 k€ de mix. Le comité projet exécute, il ne vote pas l'enveloppe."
              },
              {
                "question": "Que doit porter la page exécutive d'un dossier d'aide à la décision, par rapport aux annexes ?",
                "question_type": "single_choice",
                "options": [
                  "A. L'historique complet du projet, pour que le comité « ait tout »",
                  "B. La décision demandée, les scénarios comparables, les chiffres essentiels et la recommandation ; les preuves détaillées vont en annexes",
                  "C. Uniquement les annexes techniques, l'exec étant réservé aux juristes",
                  "D. La validation ACPR signée par le chef de projet"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'exec tient en une page et rend le vote possible. Les annexes portent le détail. Le chef de projet ne valide pas l'ACPR. L'historique complet noie la décision."
              },
              {
                "question": "En comité d'investissement, quelle ouverture est professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Nous allons vous raconter le projet depuis le cadrage. »",
                  "B. « Nous demandons le GO sous conditions du scénario B, enveloppe 120 k€, lancement à 6 mois. »",
                  "C. « Dites-nous ce que vous préférez, on s'adaptera. »",
                  "D. « La conformité a déjà validé, nous pouvons lancer. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On ouvre par la décision attendue. On ne délègue pas le choix à la salle, on ne promet pas un avis conformité, on ne commence pas par l'historique."
              },
              {
                "question": "Sur le scénario recommandé du fil rouge, quel énoncé chiffré est exact ?",
                "question_type": "single_choice",
                "options": [
                  "A. ROI de 50 %, car 60 k€ / 120 k€, et c'est le ROI du dossier",
                  "B. Coûts totaux 210 k€, CA 270 k€, bénéfice 60 k€, ROI 28,6 % sur les coûts totaux, payback de 2 ans de l'investissement",
                  "C. VAN officielle à 8 %, c'est la vérité unique du marché",
                  "D. Coûts totaux 120 k€, le récurrent ne compte pas"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Investissement 120 k€ + récurrents 90 k€ = 210 k€ de coûts. ROI = 60 / 210 = 28,6 %. Le 50 % (60/120) n'est pas le ROI du dossier. Une VAN, si citée, porte un taux pédagogique étiqueté hypothèse."
              },
              {
                "question": "L'IT annonce 3 semaines d'indisponibilité sur le parcours. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous tenez la date de lancement en silence et vous « compresserez la recette »",
                  "B. Vous émettez vous-même l'avis de conformité pour gagner du temps",
                  "C. Vous formulez un arbitrage (décaler, couper du périmètre, ou demander de la charge) et vous le portez à l'instance compétente",
                  "D. Vous demandez au comité projet de voter 40 k€ de plus"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Une indispo sur le chemin critique exige un arbitrage visible, pas un silence. Le CP ne valide pas la conformité. Un complément d'argent, s'il est nécessaire, va au comité d'investissement, pas au comité projet."
              }
            ]
          },
          "position": 4
        }
      ]
    }
  ]
}
$coursejsona$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'chef-projet-marketing-developpement';
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours chef-projet-marketing-developpement absent. Exécutez 008a d''abord.';
  END IF;
  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE '008a : modules déjà présents — skip.';
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
          module_id, title, description, lesson_type, position,
          estimated_duration_minutes, is_required
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
              quiz_id, question, question_type, options, correct_answer, explanation, position
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
    END LOOP
  END IF;
END
$seed$;

-- Reste en draft jusqu'à 008b.

COMMIT;
