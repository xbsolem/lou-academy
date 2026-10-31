-- LOU Academy — 006a PARTIE 1/2 — devenir-recruteur-a-z
-- Modules 1 à 12 (positions 0–11).
-- SQL Editor (postgres). Ne touche pas sql-pour-debutants-2h.
-- Puis exécutez 006b.

BEGIN;

INSERT INTO courses (
  title, slug, description, category, level, estimated_duration_minutes,
  status, creator_id, icon, gradient
)
SELECT
  'Devenir recruteur — Maîtriser le recrutement de A à Z',
  'devenir-recruteur-a-z',
  'De l''identification du besoin à l''intégration du collaborateur.

Cette formation professionnalisante prépare à un premier poste de chargé de recrutement, recruteur junior, Talent Acquisition Specialist junior, assistant recrutement, consultant débutant en cabinet ou chargé de recrutement en agence d''intérim.

Vous apprenez à cadrer un besoin avec un manager, rédiger une fiche de poste et une annonce, sourcer, analyser des CV, conduire une préqualification et un entretien structuré, évaluer sans biais, présenter une shortlist, formuler une offre, gérer les refus et préparer l''intégration. Le cadre juridique français (non-discrimination, questions autorisées, RGPD, offres d''emploi, promesse d''embauche, DPAE) est traité comme une compétence métier, pas comme une annexe.

Le parcours combine cours détaillés, cas d''entreprise (PME, ETI, startup, industrie, services, cabinet, intérim), exercices corrigés, une bibliothèque de situations professionnelles, des modèles de documents et un projet final de recrutement fictif. L''attestation LOU Academy certifie la réussite du parcours dans cette plateforme : ce n''est pas un diplôme d''État ni une certification professionnelle enregistrée au RNCP.

Public : débutants, reconversion, assistants RH. Durée indicative : 40 heures. Niveau : débutant professionnalisant. Catégorie : Ressources humaines.',
  'Ressources humaines',
  'debutant',
  2400,
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  'fa-user-tie',
  'linear-gradient(135deg, #4f46e5, #06b6d4)'
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'devenir-recruteur-a-z')
AND EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator'));

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'devenir-recruteur-a-z') THEN
    RAISE EXCEPTION 'Cours devenir-recruteur-a-z absent.';
  END IF;
END
$guard$;


DO $seed$
DECLARE
  payload        jsonb := $coursejsona$
{
  "slug": "devenir-recruteur-a-z",
  "title": "Devenir recruteur — Maîtriser le recrutement de A à Z",
  "description": "De l'identification du besoin à l'intégration du collaborateur.\n\nCette formation professionnalisante prépare à un premier poste de chargé de recrutement, recruteur junior, Talent Acquisition Specialist junior, assistant recrutement, consultant débutant en cabinet ou chargé de recrutement en agence d'intérim.\n\nVous apprenez à cadrer un besoin avec un manager, rédiger une fiche de poste et une annonce, sourcer, analyser des CV, conduire une préqualification et un entretien structuré, évaluer sans biais, présenter une shortlist, formuler une offre, gérer les refus et préparer l'intégration. Le cadre juridique français (non-discrimination, questions autorisées, RGPD, offres d'emploi, promesse d'embauche, DPAE) est traité comme une compétence métier, pas comme une annexe.\n\nLe parcours combine cours détaillés, cas d'entreprise (PME, ETI, startup, industrie, services, cabinet, intérim), exercices corrigés, une bibliothèque de situations professionnelles, des modèles de documents et un projet final de recrutement fictif. L'attestation LOU Academy certifie la réussite du parcours dans cette plateforme : ce n'est pas un diplôme d'État ni une certification professionnelle enregistrée au RNCP.\n\nPublic : débutants, reconversion, assistants RH. Durée indicative : 40 heures. Niveau : débutant professionnalisant. Catégorie : Ressources humaines.",
  "level": "debutant",
  "category": "Ressources humaines",
  "icon": "fa-user-tie",
  "gradient": "linear-gradient(135deg, #4f46e5, #06b6d4)",
  "estimated_duration_minutes": 2400,
  "modules": [
    {
      "position": 0,
      "title": "Découvrir le métier de recruteur",
      "description": "Comprendre à quoi sert le recrutement, ce que fait un recruteur junior au quotidien, et comment se situer dans une entreprise, un cabinet ou une agence d'intérim.",
      "lessons": [
        {
          "title": "Qu'est-ce que le recrutement ?",
          "description": "Définir le recrutement comme un processus métier, pas comme une simple publication d'annonce.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez définir le recrutement, le distinguer d'une « chasse de CV » et expliquer pourquoi il conditionne la performance d'une équipe. Vous savez aussi nommer les grandes étapes d'un processus, sans encore les exécuter."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recrutement est l'ensemble des activités qui permettent à une organisation de pourvoir un besoin en compétences, au bon moment, avec une personne en mesure d'exercer les missions, dans un cadre légal et budgétaire.\n\nCe n'est pas « trouver quelqu'un ». C'est traduire un besoin opérationnel en critères, attirer ou rechercher des personnes, les évaluer de façon comparable, décider, embarquer, et laisser une trace. Un recrutement réussi, ce n'est pas seulement un contrat signé : c'est un collaborateur qui tient le poste, dans des conditions claires, sans que l'entreprise ait pris un risque juridique inutile.\n\nLe recrutement appartient à la fonction ressources humaines, mais il n'est jamais uniquement un sujet RH. Le manager connaît le métier, la charge, les outils, les tensions de l'équipe. La direction fixe les priorités et le budget. Le recruteur relie ces mondes : il empêche que l'on recrute « au feeling », et il empêche aussi que l'on publie une annonce trop tôt, trop vague, ou discriminatoire.\n\nOn distingue souvent acquisition de talents (attirer et sélectionner) et gestion des talents (développer, fidéliser, succéder). Un recruteur junior travaille surtout sur le premier volet. Il collabore avec le second : un besoin peut se résoudre par une mobilité interne plutôt que par une embauche externe."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique professionnelle, pas une obligation légale : documenter chaque étape (brief, critères, évaluations, décision). La loi n'impose pas un dossier type « process recrutement », mais le RGPD et le risque de discrimination rendent la traçabilité utile. Voir module Cadre légal."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lorsque l'on vous confie un recrutement, posez-vous toujours ces six questions, dans cet ordre :\n1. Quel est le besoin réel (création, remplacement, surcharge, projet) ?\n2. Le poste est-il validé (budget, contrat, manager responsable) ?\n3. Existe-t-il une priorité interne ou une obligation d'information à vérifier avec les RH (temps partiel souhaitant un temps plein, priorité de réembauche après licenciement économique) ?\n4. Quels critères sont indispensables, lesquels sont souhaitables, lesquels sont interdits ?\n5. Quel canal a une chance de fonctionner pour CE métier, dans CE bassin, avec CE délai ?\n6. Comment allons-nous évaluer de la même façon tous les candidats encore en lice ?\n\nVous ne décidez pas tout cela seul. Vous préparez les questions, vous animez le brief, vous proposez une méthode, vous alertez si quelque chose cloche."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Dans une PME de 35 personnes en services informatiques, le directeur demande « un commercial, pour hier ». Sans cadrage, un junior publie une annonce « Business Developer confirmé, 5 ans d'expérience, anglais courant ». Trois semaines plus tard : 80 CV hors sujet, un manager mécontent, aucun entretien.\n\nLe même besoin, cadré : il s'agit d'un remplacement d'un commercial grands comptes qui part dans six semaines, portefeuille existant, 50 % de déplacements région Nord, rémunération fixe + variable, permis indispensable parce que les clients ne sont pas tous accessibles en train. L'annonce, les critères et le calendrier changent complètement. Le recrutement n'est pas plus long : il est plus juste."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Confondre « urgence du manager » et « poste prêt à être ouvert ». Publier avant d'avoir un budget et un responsable d'entretien. Croire que le recrutement commence à l'annonce, alors qu'il commence au besoin. Promettre un délai irréaliste pour faire plaisir. Traiter tous les recrutements avec le même process unique, que l'on cherche un apprenti ou un responsable d'atelier."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En cabinet, le « client » est l'entreprise qui mandat ; le candidat n'est pas un dossier, c'est aussi votre réputation. En agence d'intérim, le besoin est souvent très court, très opérationnel, avec une disponibilité immédiate : le cadrage existe encore, mais il tient en trente minutes, pas en trois réunions. En interne dans une ETI, un besoin peut masquer une mauvaise organisation : recruter un cinquième assistant alors que les outils sont le vrai problème. Votre rôle n'est pas de refuser d'embaucher ; c'est de faire dire le besoin à voix haute."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un responsable d'entrepôt vous écrit : « Il me faut deux personnes polyvalentes, CDI, motivées, pas trop vieilles, disponibles lundi. » Listez : (1) ce que vous devez clarifier avant toute diffusion ; (2) ce que vous ne devez pas reprendre tel quel ; (3) à qui vous parlez en premier (manager, RH, direction)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Clarifier : création ou remplacement, missions concrètes (préparation, réception, cariste), horaires, lieu, rémunération, type de contrat réellement validé, permis cariste, port de charges, travail d'équipe, délai réel, qui fait passer les entretiens.\n2. Ne pas reprendre : « pas trop vieilles » — critère d'âge, discrimination interdite (Code du travail, L. 1132-1). Reformuler en compétences et contraintes du poste (horaires, habilitations), jamais en âge.\n3. Premier interlocuteur : le manager pour le contenu du poste ; les RH en parallèle si le CDI n'est pas validé ou si une mention discriminatoire apparaît. Un junior ne « corrige pas le manager en public » : il reformule les critères en compétences et explique le cadre légal avec calme."
            }
          ],
          "position": 0
        },
        {
          "title": "Le rôle du recruteur et les intitulés de poste",
          "description": "Situer recruteur, chargé de recrutement, Talent Acquisition, assistant RH et consultant cabinet.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez les intitulés courants, vous savez ce que l'on attend d'un junior, et vous savez ce qui dépasse encore votre niveau d'autonomie."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les titres varient selon les entreprises. Ils ne sont pas normalisés par la loi. Un même mot peut cacher des missions très différentes.\n\nRecruteur / chargé de recrutement : en interne, on gère des demandes de managers, de l'annonce à la shortlist, parfois jusqu'à l'offre. En agence ou cabinet, on gère des missions clients, avec un volume et une pression commerciale plus visibles.\n\nAssistant recrutement / assistant RH recrutement : soutien opérationnel (planning, ATS, relances, convocations, premiers tris selon une grille). C'est souvent le premier poste. L'autonomie porte sur l'organisation, pas encore sur la décision d'embauche.\n\nTalent Acquisition Specialist : même famille, souvent dans des organisations qui veulent sourcer davantage (approche directe, marque employeur, viviers) plutôt que d'attendre les candidatures. Le fond métier reste le recrutement.\n\nTalent Acquisition Manager : encadre des recruteurs, pilote la stratégie, les indicateurs, les prestataires. Ce n'est pas un poste junior.\n\nConsultant en recrutement (cabinet) : vous travaillez pour plusieurs entreprises clientes. Vous vendez aussi une méthode et un délai. Vous n'êtes pas le RH du client : vous n'avez pas toujours accès à l'interne (mobilité, climat social).\n\nChargé de recrutement en intérim : forte réactivité, matching compétences / disponibilité / conditions de mission, relation triangulaire entreprise-agence-intérimaire. Le droit du travail temporaire a des règles propres (motif de recours, durée) : un junior s'appuie sur son agence et n'invente pas le cadre."
            },
            {
              "block_type": "callout",
              "content": "Politique interne : certaines entreprises interdisent au recruteur de formuler une offre sans validation RH/rémunération. D'autres le permettent dans une fourchette. Demandez toujours qui a le dernier mot, par écrit dans le brief."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Le premier jour, clarifiez par écrit : quels types de postes vous sont confiés ; jusqu'où vous allez (tri, préqual, entretien, offre) ; qui valide le salaire ; qui signe le contrat ; quels outils (ATS, jobboards, LinkedIn Recruiter ou équivalent) ; quels délais de réponse aux candidats. Sans cela, vous serez jugé sur des attentes non dites."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Léa, 24 ans, est « chargée de recrutement junior » dans une ETI industrielle. On lui confie des postes d'opérateurs, de techniciens et d'assistants. Les cadres sont gérés par son responsable. En parallèle, Karim est « consultant junior » en cabinet généraliste : il doit produire une shortlist de trois profils en dix jours pour un client PME qu'il n'a vu qu'une heure. Même métier de fond, contraintes opposées : Léa a le temps de connaître l'atelier ; Karim doit extraire le besoin très vite et documenter ce que le client n'a pas dit."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "Se présenter comme « RH » au sens large alors que vous ne gérez ni paie, ni discipline, ni licenciement. Accepter de « décider seul » un refus sur un critère flou. En cabinet, promettre un profil introuvable pour gagner le mandat."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Dans une startup de 12 personnes, le « recruteur » peut être le fondateur, aidé d'un assistant. Votre valeur est alors la méthode (critères, grille, légalité), pas un organigramme RH. Dans un groupe, vous n'êtes qu'un maillon : respecter le process n'est pas de la paperasse, c'est la condition pour que 15 managers ne recrutent pas chacun dans leur coin."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous propose deux offres : « Assistant RH F/H » dans une clinique (80 salariés) et « Talent Acquisition Specialist » dans un éditeur logiciel. Pour chacune, listez 5 missions probablement juniors et 3 missions qui devraient rester supervisées."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Clinique / assistant : convocations, tri selon grille, planning d'entretiens, relances, mise à jour ATS, accueil candidat. Supervisé : offre salariale, contrat, gestion d'un conflit de discrimination, choix final médical si hors de votre champ.\nÉditeur / TA : sourcing booléen, approches, préqual, présentation shortlist. Supervisé : négocier un package hors grille, représenter l'entreprise sur un contentieux, changer seul la politique de cooptation.\nLe titre « Specialist » n'augmente pas vos droits : il augmente souvent le volume de sourcing attendu."
            }
          ],
          "position": 1
        },
        {
          "title": "Interne, externe, cabinet, intérim : quatre organisations",
          "description": "Comprendre qui fait quoi selon que l'on recrute en entreprise, via un cabinet ou une agence.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous expliquez les différences de fonctionnement entre un service recrutement interne, un cabinet, une agence d'intérim, et vous savez qui sont vos interlocuteurs (manager, RH, direction, client)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Recrutement interne (au sein de l'entreprise) : vous êtes salarié de l'organisation qui embauche. Vous avez accès au climat, aux mobilités, aux managers, parfois aux grilles de salaire. Votre succès se mesure à la qualité des embauches et au temps pour pourvoir, pas à une facture.\n\nRecrutement externe au sens « faire appel à un prestataire » : l'entreprise mandate un cabinet (recherche, chasse, RPO) ou une agence d'intérim. Le prestataire n'est pas l'employeur final, sauf cas d'intérim où l'agence est l'employeur de l'intérimaire pendant la mission.\n\nCabinet de recrutement : mission de recherche, souvent rémunérée au succès ou au retainer. Vous livrez des candidats évalués. Vous ne décidez pas l'embauche. La confidentialité vis-à-vis du marché est critique (le client ne veut pas toujours que l'on sache qu'il recrute).\n\nAgence d'intérim : l'entreprise utilisatrice a un besoin ponctuel ou de remplacement. L'agence recrute, embauche l'intérimaire, le met à disposition. Le rythme est court. La relation se joue aussi sur la disponibilité et la conformité du contrat de mission.\n\nDans tous les cas, le manager recruteur (celui qui a le besoin) reste le donneur d'ordre métier. Le recruteur n'est pas son assistant personnel : c'est un professionnel qui dit non à un critère illicite et qui structure le choix."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès l'arrivée, dessinez votre carte d'interlocuteurs :\n- Manager : besoin, entretiens métier, choix.\n- RH / administration du personnel : contrat, DPAE, grilles, dossiers.\n- Direction : arbitrage budgétaire, postes sensibles.\n- Communication / marque employeur : pages carrière, événements.\n- Prestataires : jobboards, cabinet, intérim.\n- Candidats : information claire, délais, données personnelles.\nNotez qui valide quoi. Sans cette carte, vous enverrez des e-mails dans le vide."
            },
            {
              "block_type": "code",
              "content": "CARTE D'INTERLOCUTEURS — à remplir à J+3\nPoste type confié : .................................\nQui ouvre le poste (budget) : .......................\nQui brief : .........................................\nQui publie l'annonce : ..............................\nQui préqualifie : ...................................\nQui fait l'entretien RH : ...........................\nQui fait l'entretien métier : .......................\nQui fait l'offre : ..................................\nQui prépare le contrat / la DPAE : ..................\nOutil ATS : ......................... Accès : oui/non\nDélai de réponse candidat visé (politique interne) : ."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un site industriel de 400 personnes a deux recruteurs internes et un contrat-cadre avec une agence d'intérim pour les pics d'activité. Le junior interne ne « concurrence » pas l'agence : il oriente vers l'intérim les besoins de trois semaines, et conserve le CDI technicien. Mélanger les deux sans le dire au manager crée des doublons et des candidats contactés deux fois."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "En cabinet : critiquer le process interne du client devant un candidat. En interne : traiter l'agence comme un adversaire. En intérim : envoyer un profil sans vérifier la compréhension des horaires. Partout : copier le manager en oubliant le candidat, ou l'inverse."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "RPO (Recruitment Process Outsourcing) : un prestataire gère une partie du process comme s'il était interne. Votre badge et votre messagerie peuvent être ceux du client ; vos règles de confidentialité restent celles d'un prestataire. Demandez ce qui peut sortir de l'entreprise.\n\nRecrutement confidentiel : le poste n'est pas public (remplacement d'une personne encore en poste). Pas d'annonce nominative, sourcing discret, information minimale aux candidats jusqu'au bon moment. Ce n'est pas un prétexte pour mentir."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez ces trois phrases : interne, cabinet, ou intérim ?\nA. « Je dois vous proposer trois profils avant vendredi, le client valide lundi. »\nB. « La DPAE partira quand le contrat sera signé, je coordonne avec la paie. »\nC. « La mission est de six semaines, 5 h – 13 h, habilitation obligatoire, démarrage lundi. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "A. Cabinet (ou chasse) : logique de shortlist datée pour un client.\nB. Interne : coordination contrat / formalités d'embauche de l'employeur.\nC. Intérim : mission courte, horaires, habilitation, démarrage immédiat.\nUne phrase seule ne suffit jamais en réel : on confirme toujours avec le contrat et l'interlocuteur. Mais ces signaux vous aident à adapter votre cadence."
            }
          ],
          "position": 2
        },
        {
          "title": "Compétences, posture, éthique et confidentialité",
          "description": "Ce que l'on attend d'un junior au-delà des outils : jugement, discrétion, respect des personnes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous identifiez les compétences techniques et comportementales du métier, et vous savez ce que signifie concrètement confidentialité et éthique au quotidien."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Compétences techniques (on les travaille dans toute la formation) : cadrer un besoin, rédiger, sourcer, lire un CV, entretenir, évaluer, utiliser un ATS, connaître le cadre légal de base, suivre un pipeline.\n\nCompétences comportementales : écoute, clarté, tenue des délais, résistance à la pression du « il me faut quelqu'un », capacité à dire non avec des faits, empathie sans naïveté, organisation.\n\nLa posture professionnelle, ce n'est pas un sourire de commercial. C'est traiter chaque candidat comme une personne dont les données et la réputation vous sont confiées. Un CV laissé sur une imprimante, un commentaire « il a une tête de pas fiable » dans un open space, un message LinkedIn copié-collé au prénom faux : ce sont des fautes métier.\n\nÉthique : vous ne promettez pas un poste pour « garder » quelqu'un au chaud. Vous ne inventez pas une autre offre pour faire pression. Vous ne discriminez pas, même si un manager vous le demande à mots couverts. Vous n'utilisez pas les données d'un candidat pour un autre usage (démarchage commercial, curiosité personnelle).\n\nConfidentialité : salaires, raisons d'un remplacement, état de santé éventuellement révélé, vie personnelle, résultats d'évaluation. L. 1221-8 : les résultats des méthodes d'aide au recrutement sont confidentiels. Au-delà de l'article, c'est la confiance du marché."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale : non-discrimination, pertinence des informations (L. 1221-6), confidentialité des résultats des techniques de recrutement (L. 1221-8), protection des données. Le reste de la « déontologie » est une exigence professionnelle et souvent une politique interne (charte, règlement, clause de confidentialité de votre propre contrat)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Règles simples à tenir dès la première semaine :\n- Ne parlez des candidats que aux personnes qui ont besoin d'en connaître (manager du poste, RH concernés).\n- Pas de CV dans les salles de pause. Pas de partage de dossier via un lien public.\n- Notes d'entretien factuelles, pas de qualificatifs de personne.\n- Si un manager vous demande « on ne veut pas de femme, elles tombent enceintes » : vous refusez le critère, vous proposez des critères de poste (horaires, astreintes, déplacements) et vous alertez votre responsable. Vous ne « traduisez » pas la demande illicite en annonce.\n- Si vous vous trompez de destinataire d'e-mail : dites-le à votre responsable, ne cachez pas."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "En cabinet, un consultant junior raconte au déjeuner qu'un directeur financier candidat « se fait jeter par son conseil d'administration ». L'information remonte. Le candidat retire sa confiance, le client s'inquiète de la discrétion du cabinet. Le junior n'a « rien publié » : il a brisé le métier. La confidentialité se joue aussi à la cantine."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "Se croire « entre RH » donc tout se dit. Stocker des CV sur une clé USB personnelle. Ajouter des candidats à votre réseau perso pour les suivre après un refus. Minimiser une demande discriminatoire « c'était une blague du manager »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Vous recrutez le futur manager de votre ami. Vous êtes en conflit d'intérêts. Dites-le et sortez du process, ou faites évaluer uniquement par d'autres. Mieux vaut un dossier réassigné qu'une suspicion de favoritisme."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager vous envoie un SMS : « Franchement, le n°2 de ta shortlist, je l'ai googlé, il milite. On oublie. » Que faites-vous dans les 24 heures ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne « oubliez » pas sur cette base. Les opinions politiques sont un critère protégé (L. 1132-1). Vous rappelez par un canal professionnel (pas un SMS de réponse improvisé) que la décision doit porter sur les compétences du poste. Vous documentez. Vous en parlez à votre responsable RH/recrutement. Si le manager insiste, ce n'est plus un problème de « feeling » : c'est un risque juridique pour l'entreprise. Un junior n'est pas un juriste, mais il n'est pas non plus un exécutant d'une discrimination."
            }
          ],
          "position": 3
        },
        {
          "title": "Une journée type de recruteur junior",
          "description": "Simulation d'une journée réelle : plusieurs postes en parallèle, imprévus, priorités.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous visualisez le rythme réel du métier et vous savez prioriser sans tout abandonner quand un manager « crie »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un recruteur junior gère rarement un seul poste. Le métier est un portefeuille : plusieurs process à des stades différents, des relances, des imprévus (annulation, contre-offre, absence de manager), et des tâches invisibles (ATS, comptes rendus).\n\nSi vous ne bloquez pas des plages, la journée devient une suite d'interruptions. Les candidats le sentent : réponses tardives, entretiens mal préparés. Les managers aussi : « le recrutement n'avance pas » alors que vous avez passé deux heures à chercher un créneau."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Structurez la journée en blocs, même imparfaits :\n- Matin tôt : relances critiques (offres en cours, entretiens du jour).\n- Plage sourcing / tri CV sans réunion.\n- Plage appels de préqualification.\n- Entretiens (jamais enchaînés sans 15 minutes de notes).\n- Fin de journée : mise à jour ATS, messages aux candidats, points d'alerte pour demain.\nChaque poste a un prochain acte daté. S'il n'y en a pas, le poste est en train de mourir."
            },
            {
              "block_type": "code",
              "content": "SIMULATION — Mardi, agence interne d'une ETI de services (Lyon)\n08:30  L'offre d'Amina (contrôleur de gestion) expire demain. Pas de nouvelle depuis vendredi.\n08:40  Le manager « Tech support » veut avancer l'entretien de 14 h à 11 h.\n08:50  22 nouvelles candidatures sur l'annonce « Assistant commercial ».\n09:15  Un candidat opérateur appelle : il a une autre proposition, réponse ce soir.\n09:30  Réunion de brief (création d'un poste chargé QHSE) — 45 min.\n11:00  Préqualification prévue avec un profil pénurique (automaticien).\n12:30  Pause. Le manager QHSE envoie 8 critères supplémentaires par e-mail.\n14:00  Entretien structuré assistant commercial (1er candidat).\n15:30  Point avec votre responsable : pipeline de la semaine.\n16:30  Comptes rendus + ATS + e-mails de refus du tri de la semaine dernière.\n17:30  Le DG demande « un stagiaire marketing pour lundi ».\n\nPortefeuille du jour : 6 postes ouverts, 2 offres en cours, 1 brief nouveau."
            },
            {
              "block_type": "heading",
              "content": "Exemple — comment prioriser cette journée"
            },
            {
              "block_type": "text",
              "content": "Priorité 1 : l'offre qui expire (Amina) et le candidat qui a une autre proposition ce soir. Ce sont des décisions irréversibles à très court terme.\nPriorité 2 : honorer l'entretien de 14 h et la préqual du profil pénurique — la qualité se joue là.\nPriorité 3 : le brief QHSE, mais en recentrant les 8 critères supplémentaires (sinon le poste devient introuvable).\nPriorité 4 : le tri des 22 CV, avec une grille, pas au feeling dans les transports.\nÀ reculer ou à cadrer : le déplacement de l'entretien à 11 h s'il casse la préqual pénurique ; le stage « pour lundi » n'est pas un brief, c'est une impulsion. Vous proposez un point de 20 minutes avec missions, tuteur, gratification, dates réelles."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "Tout traiter dans l'ordre d'arrivée des e-mails. Annuler un candidat pour faire plaisir à un manager sans lui proposer d'alternative. Faire les comptes rendus « ce week-end ». Oublier les refus : le silence n'est pas neutre, il construit une réputation."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Journée de salon école : vous n'avancez pas vos process. Prévenez les managers la veille, bloquez un successeur pour les urgences, et collectez les contacts dans l'ATS le soir même, pas « la semaine prochaine ».\nJournée 100 % visio : fatigue réelle. Pas plus d'entretiens que vous ne pouvez noter. Un entretien sans notes n'existe pas."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Dans la simulation, que dites-vous au manager qui veut passer l'entretien de 14 h à 11 h, alors que 11 h est déjà pris par un automaticien rare ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne dites pas « non » sec. Vous dites : « 11 h est déjà tenu avec un profil difficile à replanifier. Je peux proposer 12 h 15, 16 h 30, ou je déplace l'assistant commercial si vous confirmez que l'automaticien est moins prioritaire. » Vous donnez un choix. Vous protégez l'engagement déjà pris. Vous documentez. C'est la posture junior solide : transparente, pas obstinée."
            }
          ],
          "position": 4
        },
        {
          "title": "Gérer plusieurs recrutements, difficultés et indicateurs",
          "description": "Porter un pipeline, nommer les difficultés du métier, lire quelques indicateurs sans les fétichiser.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez tenir un tableau de suivi simple, expliquer ce qu'est un indicateur de recrutement, et ce qu'un indicateur ne dit pas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les difficultés du métier sont structurelles : délais trop courts, briefs flous, marchés pénuriques, managers absents, candidats qui disparaissent, concurrence salariale, outils mal remplis. Un junior qui croit que « s'il était meilleur, tout serait fluide » s'épuise.\n\nUn pipeline (ou vivier opérationnel du poste) décrit où en sont les personnes : nouvellement sourcés, CV reçus, préqualifiés, entretien 1, entretien 2, offre, embauche, refus. Sans pipeline, vous racontez des impressions.\n\nLes indicateurs courants :\n- Time to fill : délai entre l'ouverture du poste et l'acceptation (définissez la date de début avec votre équipe : validation budgétaire ? publication ?).\n- Time to hire : souvent entre candidature d'une personne et son acceptation.\n- Taux de conversion d'une étape à l'autre.\n- Taux d'acceptation des offres.\n- Sources qui produisent des embauches, pas seulement des clics.\n\nIl n'existe pas de « bon » time to fill universel. Un opérateur en intérim et un expert réglementaire n'ont pas le même marché. Un chiffre sans contexte pousse à recruter trop vite ou à se justifier de travers.\n\nLa qualité d'une embauche se voit plus tard (période d'essai, tenue du poste). Le recruteur junior n'a pas toujours cet indicateur : il doit au moins viser des critères tenus et une expérience candidat propre."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : un tableau unique par poste. Politique interne : certains groupes imposent un ATS et des champs obligatoires. Obligation légale : pas de « KPI minimum » dans le Code du travail. En revanche, les données du tableau sont des données personnelles : accès limité, pas de colonnes « origine » ou « âge » pour trier."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Chaque lundi, pour chaque poste ouvert : prochain acte, date, responsable, risque (budget, pénurie, manager en congés). Chaque vendredi : ce qui a bougé, ce qui est bloqué, ce que vous demandez. Dix minutes par poste, pas un roman."
            },
            {
              "block_type": "code",
              "content": "SUIVI HEBDO (extrait)\nPoste              Stade        Prochain acte              Date    Risque\nAutomaticien N3    Préqual      Entretien manager          17/10   1 seul profil\nAssistant comm.    Entretien 1  CR + 2e convocation        15/10   Manager lent\nQHSE               Brief        Recadrer 8 critères        16/10   Profil introuvable\nContrôleur gest.   Offre        Relance Amina              14/10   Expire demain\nStagiaire mktg     Non cadré    Point 20 min DG            15/10   Pas un besoin"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Une direction demande « pourquoi 45 jours ». Le junior répond « les candidats sont nuls ». Mauvaise réponse. Bonne réponse : « 12 jours de brief instable, 8 jours sans créneau manager, 40 CV dont 4 correspondants, 2 désistements après la fourchette salariale. » Les indicateurs servent à ça : expliquer avec des faits, puis proposer un levier (salaire, critères, canaux, disponibilité des managers)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "Remplir l'ATS une fois par mois. Optimiser le délai en sautant l'entretien structuré. Utiliser le taux de refus des CV comme preuve que « le marché est mauvais » alors que l'annonce est illisible."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Volume : 30 postes identiques (retail). L'indicateur utile devient le taux de présence à l'entretien et le délai d'offre, pas le roman de chaque CV. Cadre rare : l'indicateur utile est le nombre de profils réellement en contact, pas le nombre de vues de l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Votre tableau montre 80 candidatures, 2 entretiens, 0 offre, 40 jours. Proposez 3 hypothèses à vérifier avant de conclure « il n'y a personne »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Hypothèses à tester : (1) critères trop hauts ou discriminatoires cachés ; (2) rémunération ou lieu non dits, donc auto-sélection inverse ; (3) tri trop sévère ou biaisé ; (4) managers qui n'ouvrent pas leurs créneaux ; (5) annonce trompeuse qui attire hors cible. Vous vérifiez avec le brief, 10 CV du rejet, et le calendrier réel. « Personne sur le marché » est une conclusion, pas un point de départ."
            }
          ],
          "position": 5
        },
        {
          "title": "Évolutions de carrière et limites d'un premier poste",
          "description": "Voir vers où le métier mène, et ce qu'un junior ne doit pas porter seul.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 14,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous situez un premier poste dans une trajectoire, et vous savez quand escalader (juridique, offre, conflit, discrimination)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Après un premier poste : chargé de recrutement confirmé, spécialisation (IT, industrie, volume, chasse), TA partner d'un métier, responsable recrutement, consultant cabinet, puis parfois RH généraliste ou mobilité. Rien n'est automatique. Ce qui se construit tôt : exigence de preuves, maîtrise du cadre légal de base, qualité de relation manager/candidat.\n\nLimites d'un junior — à faire valider :\n- Toute demande qui ressemble à un critère discriminatoire.\n- Toute « promesse d'embauche » écrite engageante (voir module offre : offre vs promesse unilatérale).\n- Tout écart majeur à la grille de rémunération.\n- Tout usage d'un test ou d'une IA sans information des candidats.\n- Tout recrutement international (titre de séjour, droit du travail d'un autre pays).\n- Tout conflit ouvert avec un manager sur un refus de candidat.\nEscalader n'est pas se défiler : c'est protéger l'entreprise et les personnes."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tenez une liste « je décide / je propose / je transmets ». Revoyez-la avec votre responsable à J+15. Si la liste n'existe que dans votre tête, vous prendrez trop ou trop peu."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un junior en startup signe dans un chat : « c'est bon, tu es pris, on t'envoie le contrat la semaine pro ». Le fondateur change d'avis. Le candidat a démissionné. Selon les termes, on n'est peut-être plus dans « un message informel » mais dans un engagement. Le junior a voulu être réactif. Il a créé un risque. La bonne pratique : « Je confirme l'intérêt, l'offre écrite part après validation RH, avec une date de réponse. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes"
            },
            {
              "block_type": "text",
              "content": "Croire qu'il faut tout résoudre seul pour « faire ses preuves ». Ou, à l'inverse, transférer chaque CV au manager sans valeur ajoutée. Les deux extrêmes sont visibles en entretien d'embauche de recruteur : on vous testera là-dessus."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Vous êtes le seul « RH » de 20 personnes. Les limites restent. Vous documentez davantage, vous vous appuyez sur Service-Public / l'Urssaf / un expert-comptable pour les formalités, vous ne devenez pas juriste par improvisation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez : je décide / je propose / je transmets.\n1. Convocation à un entretien dont le guide est déjà validé.\n2. Refus d'un candidat après entretien, grille complète, accord manager.\n3. Manager qui veut ajouter « nationalité française » à l'annonce.\n4. Candidat qui demande l'accès à ses données.\n5. Hausse de 8 % hors fourchette pour emporter une offre."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Je décide (exécution d'un process validé).\n2. Je propose puis j'exécute le refus si le process le prévoit ; je ne « cache » pas le refus.\n3. Je transmets : critère illicite (discrimination). Je ne publie pas.\n4. Je transmets au responsable de traitement / DPO / RH : droit des personnes (RGPD). Je n'ignore pas, je n'invente pas une procédure.\n5. Je propose un argumentaire et je transmets à qui valide les salaires.\nSi votre entreprise dit le contraire pour le point 2, c'est une politique interne : vous la suivez si elle reste légale."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Le métier de recruteur",
          "description": "Quiz — Le métier de recruteur",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Le métier de recruteur",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quel énoncé décrit le mieux le recrutement ?",
                "question_type": "single_choice",
                "options": [
                  "A. Publier une annonce et attendre les CV",
                  "B. Un processus qui va du besoin à l'intégration, dans un cadre légal et budgétaire",
                  "C. La chasse exclusive de profils cadres sur les réseaux",
                  "D. La gestion de la paie des nouveaux embauchés"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le recrutement relie un besoin, des critères, une recherche, une évaluation, une décision et une intégration. L'annonce n'est qu'un canal possible. La paie n'est pas le cœur du métier recruteur."
              },
              {
                "question": "Un manager vous demande un candidat « pas trop vieux ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous l'écrivez dans l'annonce sous la forme « 25-35 ans » pour être précis",
                  "B. Vous refusez le critère d'âge et reformulez en exigences du poste (horaires, habilitations, déplacements)",
                  "C. Vous le notez dans l'ATS en commentaire privé, sans le dire",
                  "D. Vous attendez d'avoir des CV pour appliquer le filtre discrètement"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'âge est un critère de discrimination interdit (L. 1132-1). Le cacher dans l'ATS ou le filtre « discret » reste une discrimination. On reformule en contraintes réelles du poste, si elles sont pertinentes (L. 1221-6)."
              },
              {
                "question": "En agence d'intérim, qui est généralement l'employeur de la personne en mission ?",
                "question_type": "single_choice",
                "options": [
                  "A. L'entreprise utilisatrice uniquement",
                  "B. Le recruteur junior à titre personnel",
                  "C. L'agence de travail temporaire, pendant la mission",
                  "D. France Travail"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Dans le travail temporaire, l'agence est l'employeur de l'intérimaire mis à disposition de l'entreprise utilisatrice. C'est une organisation différente du CDI interne."
              },
              {
                "question": "Les résultats d'un test d'aide au recrutement, en droit français :",
                "question_type": "single_choice",
                "options": [
                  "A. Peuvent être affichés dans l'open space pour que l'équipe vote",
                  "B. Sont confidentiels, et le candidat doit être informé des méthodes avant leur mise en œuvre",
                  "C. Appartiennent au manager, qui peut les transférer à qui il veut",
                  "D. N'existent que si le CSE les a votés"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-8 : information préalable du candidat, résultats confidentiels, méthodes pertinentes. Ce n'est pas un « nice to have »."
              },
              {
                "question": "Vous avez une offre qui expire demain et 22 CV à trier. Quelle priorité est la plus professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Trier d'abord les 22 CV, l'offre attendra",
                  "B. Traiter l'offre en cours (acte irréversible à court terme), puis honorer les entretiens déjà pris, puis trier avec une grille",
                  "C. Tout avancer de 10 % pour être équitable",
                  "D. Demander au manager de tout décaler d'une semaine"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On protège d'abord ce qui est irréversible à très court terme (offre, candidat avec autre proposition), puis les engagements déjà pris, puis le volume. L'équité n'est pas de tout faire un peu."
              },
              {
                "question": "Le time to fill, utilisé sans précaution, pose surtout quel problème ?",
                "question_type": "single_choice",
                "options": [
                  "A. Il est interdit par le Code du travail",
                  "B. Il n'existe que pour les cadres",
                  "C. Sans définition des dates de début/fin et sans contexte de marché, il pousse à de mauvaises conclusions",
                  "D. Il remplace l'évaluation des compétences"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Ce n'est pas une obligation légale. C'est un indicateur interne. Mal défini, il fait recruter trop vite ou accuser à tort « le marché »."
              },
              {
                "question": "Un Talent Acquisition Manager, par rapport à un recruteur junior, c'est principalement :",
                "question_type": "single_choice",
                "options": [
                  "A. Le même poste, avec un titre plus moderne",
                  "B. Un rôle d'encadrement et de pilotage (équipe, stratégie, prestataires), pas un premier emploi type",
                  "C. Un juriste spécialisé en contrats",
                  "D. Un commercial qui ne voit jamais de candidats"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les titres ne sont pas normalisés, mais « manager » désigne en pratique un rôle de pilotage. Un junior ne s'auto-proclame pas TA Manager."
              },
              {
                "question": "Quelle affirmation est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le recruteur junior décide toujours seul de l'embauche",
                  "B. Documenter le process est souvent une bonne pratique (preuves, RGPD, qualité), même si aucun « dossier type » n'est dicté par un article unique",
                  "C. La confidentialité ne s'applique qu'aux cadres dirigeants",
                  "D. En cabinet, on peut citer les candidats au déjeuner si on ne dit pas l'entreprise"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'embauche est une décision d'employeur, pas un caprice du junior. La documentation est une bonne pratique (et utile face au risque de discrimination / RGPD). La confidentialité ne s'arrête pas à la cantine."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 1,
      "title": "Comprendre le besoin en recrutement",
      "description": "Apprendre à identifier l'origine d'un besoin, le cadrer avec le manager, distinguer ce que le recruteur junior vérifie de ce que RH et direction décident, puis restituer un brief utilisable.",
      "lessons": [
        {
          "title": "Origine d'un besoin de recrutement",
          "description": "Distinguer création de poste, remplacement, accroissement d'activité et mobilité interne, et en déduire les conséquences opérationnelles.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez nommer l'origine d'un besoin de recrutement, expliquer pourquoi cette origine change le cadrage, et identifier les risques propres à chaque cas.\n\nVous savez aussi formuler, en une phrase professionnelle, ce que le manager « demande » et ce que l'organisation « a réellement besoin de résoudre »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un besoin de recrutement n'est pas une commande de « quelqu'un ». C'est une réponse à un problème d'organisation : une charge qui n'est plus tenue, une compétence absente, un départ, une activité nouvelle, ou un mouvement interne. Tant que l'origine n'est pas posée, le recruteur travaille à l'aveugle. Il sourcera le mauvais profil, vendra le mauvais message aux candidats, et comparera les dossiers à une référence qui n'existe peut-être plus.\n\nQuatre origines reviennent dans la pratique française des entreprises, des cabinets et des agences d'intérim.\n\nLa création de poste apparaît lorsqu'une activité, un client, un outil ou un volume nouveau ne rentre plus dans les emplois existants. Il n'y a pas d'occupant précédent. Le risque principal est le poste « fourre-tout » : plusieurs managers profitent de l'ouverture pour ajouter des missions, et le profil devient incohérent.\n\nLe remplacement suit un départ : démission, retraite, licenciement, fin de CDD ou de mission, absence longue. Il existe un historique. Le risque est de cloner la personne plutôt que le besoin, ou à l'inverse de « profiter du départ » pour tout changer sans le dire. Dans les deux cas, le brief est faux.\n\nL'accroissement d'activité concerne le même métier, avec plus de volume. Le risque est de recruter un clone sans avoir examiné l'organisation : heures supplémentaires, sous-traitance, intérim, amélioration de process, répartition entre collègues. Recruter n'est pas toujours la première réponse ; c'est parfois la plus coûteuse.\n\nLa mobilité interne consiste à pourvoir le besoin par une personne déjà présente, ce qui crée souvent un autre besoin en cascade. Le recruteur junior ne décide pas si la mobilité a lieu. Il vérifie si elle a été envisagée, car c'est souvent une politique interne, et dans certains cas une alerte juridique à transmettre aux RH (priorité de réembauche après licenciement économique, salarié à temps partiel souhaitant un temps plein). Ces alertes ne se tranchent pas seul : elles se signalent.\n\nComprendre l'origine permet ensuite de choisir le bon rythme, le bon canal, le bon argumentaire candidat et le bon niveau d'exigence. Un remplacement urgent d'un technicien de ligne n'est pas cadré comme la création d'un poste de responsable digital dans une ETI de services."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès la première demande, posez quatre questions dans cet ordre, avant toute rédaction d'annonce.\n\nPremièrement : quel événement a rendu ce besoin visible ? Faites nommer le fait (départ, pic de charge, nouveau contrat, réorganisation). Deuxièmement : le besoin est-il déjà validé (budget, effectif, intitulé) ou s'agit-il d'une intention du manager ? Troisièmement : une solution interne a-t-elle été regardée (répartition, intérim, mobilité) ? Quatrièmement : que se passe-t-il concrètement si le poste n'est pas pourvu dans 30, 60 ou 90 jours ?\n\nInterlocuteurs : le manager demandeur, le N+2 si le besoin traverse plusieurs équipes, les RH pour le cadre (budget, statut, mobilité, alertes légales), éventuellement le contrôle de gestion ou la direction dans une PME. Documents à demander : organigramme à jour, fiche de poste existante s'il y en a une, planning de charge, motif de départ si remplacement. Contrôle : vous ne lancez pas un sourcing tant que l'origine n'est pas écrite en une phrase validée par le manager."
            },
            {
              "block_type": "callout",
              "content": "Distinguez dès maintenant quatre niveaux. Obligation légale : vous n'écartez personne d'un recrutement pour un critère interdit ; vous alertez les RH sur les priorités légales que vous identifiez. Recommandation d'autorité : hors sujet à ce stade du brief. Politique interne : mobilité prioritaire, gel des embauches, validation d'un comité. Bonne pratique : écrire l'origine du besoin avant de parler compétences."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME industrielle de 85 personnes, Loire-Atlantique. Le responsable d'atelier vous écrit : « Il me faut un technicien de maintenance comme Patrick, il s'en va à la retraite dans huit semaines. »\n\nVous ne répondez pas « j'ouvre l'annonce ». Vous posez l'origine : remplacement pour départ à la retraite. Vous demandez ce que Patrick faisait réellement (dépannage, préventif, pièces, astreintes, relation production), ce qui doit rester, ce qui peut être réparti, et si un opérateur interne a déjà été identifié. Vous découvrez que 30 % du temps de Patrick était de l'administratif stock, que le manager veut « quelqu'un plus à l'aise avec la GMAO », et qu'aucune mobilité n'a été formalisée. L'origine « remplacement » est donc vraie, mais le besoin n'est plus le clone de Patrick. Sans ce cadrage, vous auriez sourcé un profil identique, trop cher, et trop rare."
            },
            {
              "block_type": "code",
              "content": "MANAGER : Il me faut un technicien comme Patrick. Retraite dans 8 semaines.\nRECRUTEUR : D'accord. On est sur un remplacement. Avant de parler profil, je recale le besoin.\n           Qu'est-ce que Patrick fait réellement cette année, semaine type ?\nMANAGER : Dépannage, un peu de préventif, et il gère le stock pièces.\nRECRUTEUR : Sur ces trois blocs, qu'est-ce qui doit rester dans le poste ?\n            Qu'est-ce qui peut aller ailleurs ? Y a-t-il un interne possible ?\nMANAGER : Le stock, on peut le donner à l'appro. En interne, non, personne n'a le niveau électrique.\nRECRUTEUR : Donc le besoin, c'est un remplacement recentré sur la maintenance, avec GMAO,\n            sans le stock. Je vous restitue ça par écrit demain pour validation."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "La première erreur est d'accepter le besoin comme une commande de personne : « un profil comme X ». La deuxième est de traiter toute demande comme un remplacement, y compris quand le manager veut en réalité créer un poste. La troisième est d'ignorer la mobilité interne par peur de « perdre » une mission. La quatrième est de lancer une annonce pour « avancer » alors que le budget n'est pas confirmé. La cinquième est de ne pas écrire l'origine : trois semaines plus tard, personne ne se souvient pourquoi le poste existe."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En cabinet, le client verbalise souvent un profil, pas un besoin. Votre valeur est de reformuler l'origine avant d'accepter le mandat. En intérim, l'origine est souvent un accroissement ou un remplacement court : le brief doit malgré tout distinguer urgence de production et vrai besoin de compétence. En startup, on crée des postes autour de personnes. Le risque est un intitulé prestigieux sans missions stables. En ETI, un besoin peut naître d'une réorganisation non encore annoncée : vous ne communiquez rien à l'extérieur tant que RH et direction n'ont pas cadré le message interne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un directeur commercial d'une société de services (120 personnes) vous dit : « Recrutez-moi deux business developers, on a gagné un compte national, l'équipe actuelle n'y arrivera pas. » Rédigez en dix lignes : (1) l'origine du besoin que vous identifiez, (2) les trois questions de vérification à poser avant tout sourcing, (3) l'alerte que vous transmettez aux RH si un commercial interne a postulé de façon informelle."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "L'origine la plus probable est un accroissement d'activité (nouveau compte), éventuellement mixte avec une création si le type de mission n'existait pas. Ce n'est pas un remplacement, sauf si des départs sont cachés dans la demande.\n\nLes trois questions : le compte national change-t-il vraiment le volume et le type de travail, ou l'équipe actuelle est-elle mal organisée ? Le budget de deux CDI est-il validé, ou s'agit-il d'une intention ? Une répartition, un CDD, de l'intérim commercial ou une mobilité interne ont-ils été examinés ?\n\nL'alerte RH : un interne qui manifeste un intérêt n'est pas « un candidat comme un autre » au regard de la politique interne. Vous ne promettez rien, vous ne l'écartez pas seuls, vous formalisez l'information aux RH pour qu'elles tranchent le process interne avant l'ouverture externe. Vous n'inventez pas un droit à la mobilité : vous évitez de démarrer un sourcing externe en contradiction avec une règle interne déjà posée."
            }
          ],
          "position": 0
        },
        {
          "title": "Validation budgétaire et lecture de l'organisation",
          "description": "Savoir ce que le recruteur junior vérifie, ce qu'il documente, et ce que seules les RH ou la direction décident.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez distinguer vérification, recommandation et décision. Vous savez lire un organigramme, un effectif et un budget de poste au niveau attendu d'un junior. Vous savez stopper ou suspendre un process quand la validation n'est pas là, sans bloquer inutilement le manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recrutement engage de l'argent, du droit et de l'organisation. Un recruteur junior qui « lance » sans validation expose l'entreprise à une promesse intenable vis-à-vis des candidats, à un conflit interne, et parfois à un contentieux si une offre est formulée trop tôt. La confusion la plus fréquente est de croire que cadrer le besoin, c'est déjà autoriser l'embauche.\n\nTrois objets doivent être séparés. L'intention du manager : « j'ai besoin de quelqu'un ». La validation organisationnelle : le poste a un rattachement, des missions qui n'existent pas déjà en double, un intitulé cohérent. La validation budgétaire et statutaire : enveloppe de rémunération, type de contrat, date d'ouverture, éventuellement remplacement d'un budget existant.\n\nCe que le junior vérifie, documente et alerte : le poste est-il nommé dans un budget, un avenant d'effectif, un mail de direction, un outil RH ? Quel est le rattachement hiérarchique réel, pas celui du souhait ? Y a-t-il un gel des embauches, un comité de validation, une règle de remplacement « un pour un » ? Le manager parle-t-il d'un CDI alors que seule une mission ou un CDD est financé ? Y a-t-il un interne identifié, un intérimaire déjà en poste, un prestataire dont le contrat se termine ?\n\nCe que le junior ne décide pas : ouvrir ou geler le poste, arbitrer entre CDI et CDD, fixer le salaire max hors politique, choisir entre embauche et sous-traitance, trancher une mobilité, appliquer ou écarter une priorité légale (réembauche, temps partiel). Ces points vont aux RH et, selon la taille de l'entreprise, à la direction.\n\nDans une TPE, le dirigeant est souvent à la fois manager, RH et finance. Le junior (ou l'assistant) formalise quand même le brief : l'oral du dirigeant change d'une semaine à l'autre. Dans une ETI, un comité peut exister : vous ne contournez pas le circuit pour « aller plus vite ». Dans un cabinet, vous vérifiez que le client a un budget réel ; un mandat sans budget est un risque commercial, pas seulement un sujet RH."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Utilisez une check-list courte, à remplir avant la réunion de cadrage approfondie.\n\n1. Qui a demandé le recrutement, par quel canal, à quelle date ? 2. Qui doit valider (N+1, N+2, RH, direction, finance) ? 3. Le budget est-il écrit, et de quoi est-il composé (salaire brut annuel, variable, avantages, frais de recrutement) ? 4. Le type de contrat envisagé est-il cohérent avec la durée du besoin ? 5. L'organigramme montre-t-il un trou, un double emploi, ou une couche hiérarchique nouvelle ? 6. Existe-t-il une politique interne (mobilité, priorité interne, gel) ? 7. Une alerte légale est-elle visible (départ économique récent, temps partiel, reclassement) ? Si oui, transmission RH, pas de décision solo.\n\nOutils : mail de demande, SIRH ou tableur d'effectifs, organigramme, grille de salaires interne si elle existe, compte-rendu de CODIR le cas échéant. Contrôle : vous datez la validation. Un « oui » oral du manager n'est pas une validation budgétaire."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique, pas obligation légale : n'annoncez jamais un poste à l'externe tant que la validation budgétaire et le circuit interne ne sont pas écrits. Obligation de votre côté : ne pas formuler d'engagement d'embauche. La qualification offre / promesse est traitée dans le module cadre légal ; à ce stade, retenir qu'un junior ne « promet » pas un poste."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI de services informatiques, 420 personnes. Une directrice de business unit vous demande un « Delivery Manager » en CDI, 55-60 k€, démarrage sous trois semaines. L'organigramme de l'équipe montre déjà un chef de projet senior et un manager d'équipe. Le budget annuel présenté en janvier prévoyait un remplacement de développeur, pas une création de management.\n\nVous vérifiez : il n'y a pas de ligne « Delivery Manager ». La DRH confirme qu'un comité mensuel statue sur les créations. Vous ne refusez pas le manager : vous documentez l'écart (intitulé, budget, circuit) et vous posez l'alternative : attendre le comité, transformer en remplacement du développeur si le besoin réel est de la production, ou faire valider une création. Vous ne publiez rien."
            },
            {
              "block_type": "code",
              "content": "CHECK-LIST JUNIOR — avant cadrage\nDemandeur : .................. Date : ........\nValidation requise : manager / N+2 / RH / direction / finance\nBudget écrit : oui / non / partiel     Source : ................\nContrat envisagé : CDI / CDD / intérim / stage / alternance\nRattachement : .................. Effectif actuel équipe : ....\nPoste déjà existant : oui / non / flou\nPolitique interne à respecter : ................................\nAlerte à transmettre RH (sans décider) : oui / non\nDécision de lancer le sourcing : OUI seulement si validation datée\nCe que je ne décide pas : ouverture du poste, salaire hors grille,\ntype de contrat, mobilité, priorités légales."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier « pour avancer » sans budget. Croire que le salaire annoncé par le manager est la politique de l'entreprise. Confondre un intérimaire déjà présent avec une validation de CDI. Prendre l'organigramme PowerPoint comme la réalité des rattachements. Trancher seul un conflit manager / RH. Promettre au manager une date d'arrivée avant d'avoir un process autorisé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Groupe avec filiales : le budget peut être au siège et le manager en région. Vous identifiez le circuit, vous ne le recréer pas. Reprise d'entreprise ou PSE récent : toute ouverture externe est sensible ; alerte RH systématique. Cabinet : un client qui « verra le budget plus tard » n'est pas un brief opérationnel. Intérim : la commande du client (motif, durée, qualification) doit être recevable ; vous n'inventez pas un motif. Startup : l'absence de grille n'autorise pas l'approximation ; vous faites écrire une fourchette par le fondateur."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le responsable logistique d'une PME (60 personnes) vous dit : « On recrute un cariste en CDI, j'ai le droit, le directeur l'a dit à la machine à café. Salaire 2 000 €, je ne sais pas si c'est brut. » Listez ce que vous vérifiez vous-même, ce que vous demandez par écrit, et ce que vous renvoyez au dirigeant / RH. Indiquez si vous ouvrez l'annonce le jour même."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous vérifiez : existence d'un accord du dirigeant au-delà de l'oral informel, type de contrat réellement envisagé, distinction brut / net / avantages, rattachement, horaires et permis éventuel (lien avec le poste, pas une question de convenance). Vous demandez un écrit court : validation du poste, enveloppe, date, contrat. Vous renvoyez au dirigeant le statut CDI vs CDD ou intérim, et le salaire si aucune politique n'existe. Vous n'ouvrez pas l'annonce le jour même. Un propos à la machine à café n'est pas une validation. Recruter un cariste en CDI sans cadre expose à un engagement difficile à retirer une fois les candidats en process."
            }
          ],
          "position": 1
        },
        {
          "title": "Recueil du besoin auprès du manager : la réunion de cadrage",
          "description": "Préparer, conduire et clôturer une réunion de brief avec le manager demandeur.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez préparer une réunion de cadrage de 45 à 60 minutes, en conduire le fil, reformuler sans juger, et obtenir les arbitrages manquants. Vous savez aussi gérer un manager pressé, vague ou contradictoire sans perdre la relation."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La réunion de cadrage n'est pas une conversation de couloir ni une prise de note passive. C'est l'acte professionnel par lequel le besoin devient un objet partagé : missions, résultats attendus, compétences, conditions d'emploi, délais, critères de choix, et limites. Sans cet acte, le recruteur traduit mal, le manager corrige trop tard, les candidats reçoivent un message faux, et la shortlist est rejetée pour des raisons jamais dites.\n\nLe manager est expert du métier, rarement du recrutement. Il parle souvent en personnes (« quelqu'un de dynamique, comme Léa ») et en irritants (« je ne veux plus de profil trop junior »). Votre métier est de traduire cela en missions, en compétences observables et en critères. Vous ne le contredisez pas sur son activité ; vous le questionnez jusqu'à ce que l'implicite soit explicite.\n\nUne réunion utile a un ordre. On ne commence pas par le salaire ni par le site d'annonce. On commence par le problème à résoudre, l'origine du besoin, le succès à 6 et 12 mois, puis les missions, l'équipe, l'environnement, les compétences, les conditions, les délais, les critères de sélection, et seulement ensuite les canaux. Si vous inversez, le manager se crispe sur le « profil rare » avant d'avoir dit ce que la personne devra produire.\n\nLe cadrage est aussi un moment d'éducation légère du manager : ce qui est un critère professionnel, ce qui est un souhait, ce qui est irréaliste, ce qui est interdit. Vous n'êtes pas juriste de l'entreprise, mais vous refusez déjà les demandes qui sortent du cadre (photo, âge, situation familiale). Le détail juridique est le module suivant ; ici, le réflexe est : ce qui n'a pas de lien direct avec l'emploi ne rentre pas dans le brief.\n\nEnfin, une réunion sans clôture est un rendez-vous manqué. Vous reformulez, vous listez les points ouverts, vous datez la restitution écrite, vous dites clairement ce que vous ferez et ce que vous ne ferez pas tant que les points bloquants ne sont pas tranchés."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant : relire la demande, l'organigramme, la fiche existante, le motif de départ. Envoyer un ordre du jour de 8 à 10 points. Prévoir 45 minutes, 60 si création de poste. Inviter RH si le circuit l'exige, pas « pour se protéger ». En cabinet, confirmer que le client décideur est dans la salle, pas seulement l'opérationnel.\n\nPendant : poser le cadre (objectif de la réunion, ce que vous livrerez ensuite). Questionner. Recueillir des faits (volume, outils, interlocuteurs, astreintes) avant des qualités. Reformuler toutes les 10 minutes. Signaler les exigences qui se contredisent. Noter mot pour mot les phrases à risque (« je veux quelqu'un de jeune », « pas de femmes, c'est un atelier ») : vous les recadrerez professionnellement, puis vous alerterez RH si besoin.\n\nAprès : envoyer la restitution sous 24 à 48 heures ouvrées (bonne pratique). Demander une validation écrite. Ne pas sourcer sur un brief non validé, sauf consigne contraire explicite de votre responsable, documentée."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet de recrutement, mandat pour une direction financière d'ETI agroalimentaire. Le DAF opérationnel est présent, le DG a « dit d'accord » mais n'est pas dans la réunion. En 20 minutes, le DAF décrit un profil introuvable : expert IFRS, anglais courant, 8 ans minimum, mobilité 3 sites, salaire sous la médiane interne des managers, démarrage dans 4 semaines, et « quelqu'un qui a déjà fait de l'agro, sinon ça ne marchera pas ».\n\nVous ne promettez pas de « trouver ». Vous faites une réunion en deux temps : d'abord le succès du poste à 12 mois (clôture, contrôle interne, relation commissaires aux comptes, management de 4 personnes), ensuite les critères. Vous obtenez que l'agro est un souhait, pas une condition, que l'anglais est nécessaire pour 20 % du temps, et que le DG doit valider le salaire. Vous clôturez en disant que le sourcing attend cette validation. C'est un service, pas un refus."
            },
            {
              "block_type": "code",
              "content": "ORDRE DU JOUR — réunion de cadrage (45-60 min)\n1. Origine du besoin et urgence réelle\n2. Succès du poste à 6 mois et à 12 mois\n3. Missions, volume, outils, interlocuteurs\n4. Équipe, rattachement, interfaces\n5. Compétences indispensables / souhaitables\n6. Conditions : contrat, lieu, horaires, télétravail, rémunération\n7. Critères de choix et personnes qui rencontrent les candidats\n8. Process, délais, disponibilité du manager\n9. Points ouverts et validations manquantes\n10. Suite : restitution écrite, date de validation, lancement"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Arriver sans ordre du jour. Laisser le manager dicter uniquement un portrait de personne. Ne pas oser reformuler. Remplir les silences par des suggestions de profil trop tôt. Oublier de demander qui décide vraiment. Terminer par « je vous fais une annonce » alors que le salaire, le lieu ou le contrat sont flous. Rire ou passer l'éponge sur une phrase discriminatoire au lieu de recadrer."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager absent ou qui délègue à un collègue : le brief n'est pas opposable ; reprogrammez. Double manager (matriciel) : réunion à trois, sinon les critères s'opposeront en shortlist. Recrutement confidentiel (remplacement d'une personne encore en poste) : cadrage plus strict sur le message interne et externe ; RH dans la boucle. Urgence de production : réunion courte mais écrite ; l'urgence n'autorise pas l'absence de brief. Distancier ou visio : envoyez la grille de questions à l'avance, ne faites pas du « on se dit tout en 15 minutes »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous avez 45 minutes avec la responsable qualité d'une PMI. Elle est tendue, le certificat client arrive dans trois mois, elle veut « un ingénieur qualité expérimenté, autonome, qui ne pose pas trop de questions ». Préparez : les 5 premières questions que vous posez, et la phrase de recadrage si elle dit « je préfère un homme, l'atelier n'est pas simple »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Cinq premières questions, centrées sur le travail et non sur le portrait : Quel événement rend le besoin visible maintenant ? Qu'est-ce qui sera considéré comme un succès à l'issue de la certification ? Quelles missions concrètes la personne fera-t-elle la première semaine, le premier mois ? Avec qui travaillera-t-elle (production, clients, labo) ? Qu'est-ce qui a manqué dans l'équipe actuelle, en faits, pas en qualités ?\n\nPhrase de recadrage, ferme et professionnelle : « Je ne peux pas retenir le sexe comme critère. La loi interdit d'écarter une personne d'un recrutement pour ce motif. On va parler des contraintes réelles de l'atelier — horaires, port de charges, relation production — et des compétences nécessaires. C'est cela qui ira dans le brief. » Vous ne débattez pas. Vous notez, vous recentrez, vous informez RH si la demande persiste. Vous ne « comprenez pour cette fois »."
            }
          ],
          "position": 2
        },
        {
          "title": "Grille complète de questions de brief",
          "description": "Disposer d'un document de brief utilisable en entreprise, en cabinet ou en agence.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 25,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous disposez d'une grille de questions complète, que vous savez adapter sans la vider. Vous savez pourquoi chaque bloc existe, et ce que vous faites d'une réponse vague, absente ou contradictoire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une grille de brief n'est pas un formulaire administratif à faire signer pour se couvrir. C'est un instrument de traduction. Elle force le passage d'un souhait flou à des informations actionnables : ce que la personne fera, dans quelles conditions, avec quel niveau d'exigence, pour quel résultat, à quelle rémunération, dans quel délai. Sans grille, deux recruteurs d'une même équipe produisent deux recrutements différents à partir du même manager.\n\nLa grille couvre plus que les compétences. Les compétences sans missions sont des étiquettes. Les missions sans volume sont des vœux. Le salaire sans politique est une négociation improvisée. Le délai sans disponibilité du manager est un process fantôme. Le critère de choix sans pondération est un avis subjectif qui s'exprimera trop tard, souvent contre le candidat que vous aurez le plus investi.\n\nChaque question a une fonction. « Pourquoi maintenant ? » saisit l'origine. « À quoi verra-t-on que la personne réussit ? » saisit le résultat, plus fiable que les qualités. « Que se passe-t-il si on ne recrute pas ? » saisit l'urgence réelle. « Qu'est-ce qui est non négociable ? » saisit les critères éliminatoires, que vous distinguerez plus tard des critères souhaitables et des critères interdits. « Qui rencontre les candidats et qui dit oui ? » saisit le circuit de décision, souvent différent du circuit de demande.\n\nVous n'avez pas à poser les 80 questions à chaque fois. Un remplacement d'opérateur sur ligne, déjà décrit, justifie une version courte. Une création de poste de manager dans une ETI justifie la version longue. L'erreur est d'avoir une grille décorative que personne n'utilise, ou une grille si longue que le manager décroche. L'outil ci-dessous est le référentiel : vous cochez les blocs pertinents, vous ne sautez jamais les blocs origine, missions, conditions d'emploi, critères et circuit de décision.\n\nLes réponses doivent pouvoir être lues par quelqu'un qui n'était pas dans la salle. Si votre note n'est compréhensible que par vous, ce n'est pas un brief, c'est un pense-bête."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Imprimez ou ouvrez la grille avant la réunion. Remplissez en direct, pas le lendemain de mémoire. Marquez « non tranché » plutôt que d'inventer. Après la réunion, transformez la grille en restitution rédigée (leçon 8). Contrôle qualité : un collègue doit pouvoir sourcer à partir du document, sans vous appeler. En cabinet, faites valider la grille par le client signataire du mandat. En intérim, alignez la grille avec les informations nécessaires à la qualification de la mission, sans la réduire au seul intitulé."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim, commande d'une PMI pour « 2 opérateurs, vite ». La grille courte évite la sous-qualification : origine (accroissement pour une commande export), horaires (2×8, pas 3×8), compétences (lecture de plan simple, pas de CACES), durée (8 semaines, éventuellement prolongation), lieu (site B, 18 km du site A habituel), équipement, manager de proximité, et qui valide l'arrivée le lundi 6 h. Sans ces questions, vous enverrez des profils au mauvais site, au mauvais horaire, et le client « n'en voudra plus de l'agence »."
            },
            {
              "block_type": "code",
              "content": "GRILLE DE BRIEF RECRUTEMENT — document de travail\nDate : .......... Recruteur : .......... Manager : ..........\n\nA. ORIGINE ET ENJEU\n- Événement déclencheur (création / remplacement / accroissement / mobilité) :\n- Ce qui se passe si le poste n'est pas pourvu à 30 / 60 / 90 jours :\n- Solutions déjà regardées (interne, intérim, sous-traitance, réorganisation) :\n- Confidentiel : oui / non. Pourquoi :\n\nB. POSTE ET ORGANISATION\n- Intitulé provisoire :\n- Rattachement hiérarchique / fonctionnel :\n- Équipe (effectif, métiers, personnes clés) :\n- Interfaces (clients, fournisseurs, autres services) :\n- Lieu(x) de travail, déplacements, permis si le poste l'exige :\n- Horaires, astreintes, saisonnalité :\n\nC. MISSIONS ET RÉSULTATS\n- Mission principale (une phrase) :\n- 5 à 8 missions concrètes, avec volume si possible :\n- Outils / logiciels / machines / normes :\n- Succès à 6 mois :\n- Succès à 12 mois :\n\nD. PROFIL\n- Compétences indispensables (observables) :\n- Compétences souhaitables :\n- Expérience : ce qu'elle doit avoir permis de faire, pas seulement un nombre d'années :\n- Diplômes / habilitations / certifications : indispensables ou souhaités :\n- Langues : niveau requis et contexte d'usage réel :\n\nE. CONDITIONS D'EMPLOI\n- Contrat : CDI / CDD (motif, durée) / intérim / alternance / stage\n- Rémunération : fourchette, fixe / variable, avantages, politique interne\n- Télétravail / travail hybride : règle réelle, pas slogan\n- Date de prise de poste souhaitée / date réaliste\n- Période d'essai envisagée (selon contrat et politique) : à confirmer RH\n\nF. SÉLECTION ET PROCESS\n- Critères éliminatoires professionnels :\n- Critères de rang 2 :\n- Personnes qui rencontrent le candidat, dans quel ordre :\n- Qui décide, qui peut dire non :\n- Délai de retour après chaque étape :\n- Disponibilité réelle du manager pour les entretiens :\n\nG. POINTS OUVERTS / ALERTES\n- Validations manquantes :\n- Exigences potentiellement irréalistes :\n- Demandes à recadrer (hors lien avec l'emploi) :\n- Alertes à transmettre aux RH (sans décider) :\n\nValidation manager (date) : ..........\nValidation RH si requise (date) : .........."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Transformer la grille en interrogatoire de 90 minutes. Laisser des cases vides « on verra ». Noter des qualités (« autonome, esprit d'équipe ») sans exemple de situation. Oublier le circuit de décision. Recopier une ancienne fiche sans reposer les questions. Utiliser la grille comme preuve contre le manager au lieu d'un support de travail partagé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui refuse de « remplir des papiers » : vous remplissez en réunion, vous lui renvoyez un texte court à valider, pas un tableau. Recrutement international ou bilingue : la grille doit dire où la langue est utilisée, pas seulement « anglais courant ». Poste en 3×8 ou week-end : les contraintes horaires sont des faits du poste, à poser tôt. Création de poste autour d'une personne déjà identifiée : la grille sert quand même, pour ne pas truquer un process vis-à-vis des autres candidats."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir de cette phrase de manager : « Il me faut une assistante dynamique, bilingue, qui connaisse le BTP, 5 ans d'expérience, plutôt à temps plein, on verra le salaire, c'est pour remplacer Julie qui s'en va. » Listez les 8 questions de la grille que vous poserez en priorité, et identifiez 3 informations trop floues pour sourcer."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Questions prioritaires : origine et date du départ de Julie ; missions réelles de Julie vs missions souhaitées maintenant ; ce que « bilingue » veut dire (écrit, oral, avec qui, quelle part du temps) ; ce que « connaître le BTP » recouvre (vocabulaire, logiciels, chantiers, clients) ; temps de travail réel ; lieu et télétravail ; fourchette de rémunération et validation ; qui décide et quand Julie part.\n\nTrois flous bloquants : « assistante » sans missions ; « dynamique » n'est pas un critère professionnel ; « on verra le salaire » empêche de qualifier les candidats et de tenir un discours honnête. Vous ne sourcer pas sur ces trois vides. Notez aussi que le mot « assistante » au féminin n'est pas un critère de sexe : l'intitulé et l'annonce devront rester ouverts (détail au module fiche de poste et cadre légal)."
            }
          ],
          "position": 3
        },
        {
          "title": "Exigences du poste : indispensable, souhaitable et conditions d'emploi",
          "description": "Classer compétences, expérience, diplômes, rémunération, lieu, télétravail, contrat et délais sans tout mettre au même niveau.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez classer chaque exigence en indispensable, souhaitable ou hors sujet. Vous savez interroger l'expérience et les diplômes par ce qu'ils permettent de faire. Vous savez poser les conditions d'emploi (rémunération, lieu, télétravail, contrat, délais) comme des faits, pas comme des à-côtés."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le brief échoue souvent parce que tout est présenté comme obligatoire. Un manager anxieux empile : diplôme, années d'expérience, outil rare, langue, savoir-être, disponibilité immédiate, salaire contenu. Le marché ne fournit pas cette intersection. Votre travail n'est pas d'obéir à la liste : c'est de la hiérarchiser.\n\nUne compétence indispensable est une capacité sans laquelle le poste ne peut pas être tenu dans un délai raisonnable, compte tenu de l'organisation réelle (tutorat, documentation, binôme). Une compétence souhaitable accélère la prise de poste ou améliore le confort de l'équipe ; son absence n'interdit pas l'embauche. Une préférence personnelle du manager (« quelqu'un qui a fait la même école que nous ») n'est ni l'un ni l'autre, et peut devenir discriminatoire si elle sert à écarter.\n\nL'expérience ne se mesure pas d'abord en années. Cinq ans dans un contexte pauvre valent parfois moins que deux ans dans un contexte exigeant. Vous faites dire au manager : « qu'est-ce que la personne doit déjà avoir fait, de façon autonome, dès l'arrivée ? » Le chiffre d'années, s'il reste, est un indicateur, pas un mur. Un mur d'années mal justifié peut aussi masquer un critère d'âge : vous restez vigilant, sans inventer d'intention.\n\nLe diplôme et les habilitations suivent la même logique. Certaines sont de vraies conditions d'exercice (habilitation électrique, diplôme réglementé, CACES si l'emploi le requiert). D'autres sont des habitudes (« on a toujours pris des bac+5 »). Vous distinguez. Vous ne promettez pas qu'un diplôme « fait bien » sur une annonce s'il n'est pas nécessaire : vous alourdissez le filtre et vous perdez des profils transférables.\n\nLes conditions d'emploi font partie du besoin, pas de la négociation de fin de process. Rémunération : fourchette compatible avec la politique interne, à faire valider, pas à inventer. Lieu : site, mobilité, déplacements. Télétravail : règle réelle de l'équipe, pas la promesse d'attractivité. Contrat : CDI, CDD (motif et durée), intérim, alternance. Délais : date de prise de poste, disponibilité du manager, temps de préavis des candidats visés. Un CDI « pour hier » avec un salaire sous le marché et trois mois de process interne est un brief incohérent : il faut l'écrire comme tel, puis arbitrer."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque item du brief, posez trois questions : est-ce indispensable à la tenue du poste ? peut-on le former en 3 mois avec l'organisation prévue ? est-ce un souhait de confort, d'image ou d'habitude ? Classez ensuite dans un tableau à trois colonnes. Pour l'expérience, remplacez « X ans » par 2 à 4 situations de travail. Pour le diplôme, demandez la conséquence si le candidat ne l'a pas mais a l'habilitation ou l'expérience équivalente. Pour le salaire, le lieu, le télétravail et le contrat, obtenez des fourchettes écrites. Contrôle : si tout est en colonne « indispensable », le classement n'a pas été fait."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : limiter les indispensables à ce que le poste exige vraiment. Obligation : un critère qui n'a pas de lien direct et nécessaire avec l'emploi ne peut pas être demandé au candidat (article L. 1221-6 du Code du travail). Le détail et les exemples d'entretiens sont au module cadre légal. Dès le brief, vous refusez de noter « jeune », « sans enfants », « de préférence une femme »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup produit, 22 personnes, recrutement d'un développeur backend. Le CTO dit : « Bac+5, 7 ans, Java et Go, anglais bilingue, présentiel 5 jours, salaire 38 k€, dispo dans 15 jours, esprit startup. » Après classement : indispensables = concevoir et maintenir des API, déboguer en production, écrire des tests, communiquer avec le produit. Souhaitables = Go, anglais écrit professionnel (la doc est en anglais, les réunions sont en français), expérience scale-up. Non retenus comme murs = bac+5, 7 ans, présentiel 5 jours si l'équipe est déjà hybride, 15 jours de délai si le salaire est sous le marché. Le 38 k€ est un point d'arbitrage, pas une ligne que le recruteur « fera passer »."
            },
            {
              "block_type": "code",
              "content": "TABLEAU D'EXIGENCES — à remplir avec le manager\n\nIndispensable (le poste ne tient pas sans) | Souhaitable | Hors brief / à recadrer\n-------------------------------------------|-------------|------------------------\nExemple : habilitation électrique B2V      | GMAO déjà   | « Quelqu'un de jeune »\nsi le poste l'exige dès J1                 | pratiquée   |\nAPI REST + tests                           | Go en plus  | « Photo sur le CV »\nFourchette salaire validée RH              | de Java     |\nLieu : site Lyon 3j/semaine                | Secteur     |\n                                           | déjà connu  |\n\nRègle : 5 indispensables maximum pour un poste non réglementé.\nTout le reste se discute ou se forme."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Tout copier en indispensable pour ne pas « frustrer » le manager. Confondre outil et compétence (savoir un logiciel vs savoir structurer une information). Oublier les conditions d'emploi jusqu'à l'offre. Annoncer du télétravail non validé. Utiliser le diplôme comme paresse de tri. Laisser un délai de prise de poste magique (« dès que possible ») sans date."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Métier réglementé : le diplôme ou l'habilitation peut être réellement indispensable ; vous le vérifiez, vous ne le supposez pas. Alternance : les « 5 ans d'expérience » sont souvent contradictoires avec le dispositif ; recadrage immédiat. Temps partiel demandé par le manager « pour tester » : ce n'est pas un critère de sélection des personnes, c'est un choix d'organisation à valider RH. Poste hybride mal défini : faites écrire les jours sur site, faute de quoi chaque candidat comprendra autre chose."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Brief brut : « Chargé de recrutement, 5 ans minimum, issu d'un cabinet, master RH, anglais, LinkedIn, permis, disponible immédiatement, 32 k€, 2 jours de télétravail, CDI. » Classez chaque item. Indiquez deux arbitrages à proposer au manager."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Indispensables possibles, selon le contexte réel de l'équipe : conduire un brief, sourcer, mener des entretiens structurés, suivre un process. « 5 ans » et « issu d'un cabinet » sont au mieux souhaitables, souvent des habitudes. Master RH : souhaitable, rarement indispensable. Anglais : seulement si des recrutements ou des outils l'exigent, avec le niveau d'usage. LinkedIn : un outil, pas une compétence. Permis : uniquement si des déplacements réguliers sans alternative sont un fait du poste. Disponibilité immédiate : rarement compatible avec un CDI expérimenté ; c'est un délai à arbitrer. 32 k€ : à confronter à la politique interne et au marché, pas à « faire passer ». Télétravail 2 jours : condition d'emploi à confirmer comme règle d'équipe.\n\nDeux arbitrages : (1) assouplir l'expérience cabinet vs interne et former aux méthodes ; (2) soit le salaire et le délai restent tendus et l'on vise un profil moins expérimenté, soit l'on ouvre la fourchette. Vous ne tranchez pas seul le salaire : vous documentez l'incohérence."
            }
          ],
          "position": 4
        },
        {
          "title": "Exigences irréalistes et arbitrages avec le manager",
          "description": "Repérer un brief intenable, le faire voir sans affrontement, et obtenir un arbitrage écrit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez reconnaître un brief irréaliste, en expliquer les conséquences au manager, proposer deux ou trois scénarios, et consigner l'arbitrage. Vous savez aussi jusqu'où vous négociez, et à quel moment vous remontez à votre responsable ou aux RH."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un brief irréaliste n'est pas un manager « difficile ». C'est un ensemble de contraintes qui ne peuvent pas être vraies en même temps : niveau de compétence, rareté, rémunération, délai, lieu, type de contrat, et exigence de « risque zéro ». Si vous sourcez malgré tout, vous produisez du silence (aucun candidat), de la frustration (candidats hors fourchette), ou de la fuite (le manager refuse tous les dossiers). Dans les trois cas, c'est le recruteur qui « n'a pas trouvé ».\n\nL'arbitrage n'est pas un rapport de force. C'est un choix d'entreprise entre des variables. On peut souvent tenir le niveau de compétence si l'on lâche le délai ou si l'on ouvre le salaire. On peut tenir le salaire si l'on accepte de former, donc un profil moins prêt. On peut tenir le délai si l'on accepte un CDD, de l'intérim ou un interne. Ce que l'on ne peut pas faire, c'est garantir les quatre : rare, peu cher, immédiat, sans acculturation.\n\nVotre posture : faits, options, recommandation, décision du manager / RH. Les faits sont ceux du brief et ceux que vous observez dans le process (volume de candidatures, motifs de refus). Vous n'inventez pas de statistiques de marché. Si vous n'avez pas de données internes, dites-le : « Sur les trois derniers postes comparables ici, le délai a été de… » ou « Je n'ai pas encore de donnée interne ; en l'état, ces contraintes se contredisent. »\n\nCertaines « exigences irréalistes » sont en réalité des critères interdits ou hors lien avec l'emploi. Là, il n'y a pas d'arbitrage : il y a un recadrage. « Pas trop vieux », « une femme pour l'accueil », « quelqu'un du quartier » ne se négocient pas. Vous recentrez sur le poste, vous alertez RH si la demande est répétée.\n\nEnfin, un arbitrage oral s'oublie. Le manager dira « je n'ai jamais dit qu'on pouvait prendre sans le diplôme ». La restitution écrite de la leçon 8 sert aussi à cela : figer ce qui a été lâché, et ce qui reste non négociable."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Écrire le brief tel que demandé, sans le lisser. 2. Lister les tensions (salaire vs niveau, délai vs préavis, lieu vs bassin, indispensables trop nombreux). 3. Préparer 2 ou 3 scénarios, chacun avec un gain et un coût. 4. Réunion courte d'arbitrage, 20 minutes, un seul objectif : choisir un scénario. 5. Confirmer par écrit. 6. Si le manager refuse tout arbitrage et que le process est voué à l'échec, remonter à votre responsable avec le dossier, pas avec un jugement sur la personne.\n\nVous ne menacez pas de « ne pas s'en occuper ». Vous dites : « Je peux lancer le scénario A dès validation ; le scénario actuel produit tel effet. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME du bâtiment, 40 personnes, recrutement d'un métreur. Le gérant veut 8 ans d'expérience tous corps d'état, maîtrise d'un logiciel spécifique, permis et véhicule, salaire d'un profil débutant, arrivée avant le prochain chantier (5 semaines), et « quelqu'un de local, qui ne partira pas ». Après cadrage, le logiciel s'apprend en deux semaines avec le métreur sortant. L'expérience utile est « avoir déjà chiffré des chantiers de ce type », pas 8 ans. Le véhicule est un vrai besoin de déplacements. Le « local » est un souhait de stabilité : vous le traduisez en conditions d'emploi (lieu, déplacements) et en entretien structuré sur le projet professionnel, pas en critère de résidence. L'arbitrage proposé : ouvrir le salaire d'un cran ou accepter 4-6 ans avec tutorat ; garder le permis si les visites de chantier sont hebdomadaires."
            },
            {
              "block_type": "code",
              "content": "SCÉNARIOS D'ARBITRAGE — modèle\n\nScénario A — Niveau tenu\nOn garde les indispensables métier.\nOn ouvre la fourchette de rémunération et on accepte un préavis à 3 mois.\nCoût : budget. Gain : autonome plus tôt.\n\nScénario B — Budget tenu\nOn recrute un profil à former (tutorat 8 semaines nommé).\nOn lâche 2 souhaitables. Délai de croisière plus long.\nCoût : temps manager. Gain : enveloppe salariale.\n\nScénario C — Délai tenu\nCDD / intérim / interne relais pendant le recrutement du CDI.\nCoût : double process. Gain : production tenue.\n\nScénario actuel (non recommandé) : tout garder.\nEffet probable : pas de shortlist, ou shortlist hors cadre, puis rejet.\n\nDécision : ....... Date : ....... Par : ......."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lancer le process pour « montrer qu'on bosse » malgré un brief intenable. Inventer des chiffres de marché pour convaincre. Humilier le manager (« vous ne connaissez pas les salaires »). Arbitrer en secret avec RH puis surprendre le manager. Céder sur un critère interdit pour « débloquer ». Oublier d'écrire l'arbitrage."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Direction qui impose le salaire et manager qui impose le niveau : réunion à trois, vous ne servez pas de tampon silencieux. Cabinet : si le client refuse tout arbitrage, le risque est un mandat ingagnable ; vous le dites à votre responsable avant d'engager trop de sourcing. Urgence sécurité / production : un relais court (intérim, heures supp cadrées) est parfois l'arbitrage responsable, pas un CDI bâclé. Startup : le titre trop senior + salaire junior est un classique ; on recadre le titre ou le salaire, pas le discours « on paie en stock-options » si ce n'est pas un élément écrit et compréhensible."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager veut un responsable administratif « opérationnel tout de suite », bilingue, 40 k€, 4 jours de télétravail, management de 6 personnes, dans une ville où l'entreprise n'a pas encore de politique télétravail écrite. Proposez deux scénarios et la phrase d'ouverture de la réunion d'arbitrage."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Scénario A : poste de responsable, management réel, fourchette revue, télétravail aligné sur une règle d'équipe validée (pas 4 jours improvisés). Scénario B : poste d'adjoint / responsable de proximité, moins de management ou management progressif, 40 k€ tenable, télétravail plus limité le temps de poser la règle. Phrase d'ouverture : « Je peux lancer le recrutement dès que l'on choisit un scénario cohérent. Aujourd'hui le niveau de responsabilité, la rémunération et le télétravail ne sont pas alignés, et le télétravail n'est pas encore une règle d'entreprise. Voici deux options, avec leur coût. Laquelle tenez-vous ? » Vous ne commencez pas par « c'est impossible »."
            }
          ],
          "position": 5
        },
        {
          "title": "Simulation : dialogue recruteur / manager",
          "description": "Observer et pratiquer un cadrage en PME industrielle, puis la variante en startup.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez reconnaître, dans un dialogue, les questions qui font avancer le brief et celles qui le faussent. Vous savez adapter le même canevas à une PME industrielle et à une startup, sans changer les principes."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le cadrage se joue dans la conversation, pas dans le modèle Word. Un recruteur peut avoir la bonne grille et poser les questions comme un audit, ou trop tard, ou trop tôt. L'objectif de cette leçon est d'entendre le rythme : d'abord le travail, ensuite le profil, ensuite les conditions, ensuite les arbitrages. Les deux dialogues ci-dessous sont des supports d'étude. Ils ne prétendent pas décrire « toutes les PME » ni « toutes les startups » ; ils montrent des mécanismes fréquents.\n\nEn PME industrielle, le manager parle souvent machine, sécurité, horaires, ancienneté de l'équipe, urgence de ligne. Il peut vouloir « le même que celui qui part ». Votre apport est de séparer la personne, le poste, et ce que l'organisation peut absorber. Le respect du terrain n'interdit pas la rigueur : on ne recadre pas un chef d'atelier comme on recadre un CTO, mais on recadre.\n\nEn startup, le manager (souvent fondateur ou head of) parle impact, polyvalence, « culture », vitesse. Le risque est un poste indéfini, un titre gonflé, des conditions floues (salaire, remote, rôle réel). Votre apport est de figer des missions pour les 6 premiers mois, une fourchette, un rattachement, et de refuser le brief mythologique (« un crack qui code, vend et recrute »).\n\nDans les deux cas, vous restez poli, vous reformulez, vous ne mentez pas sur ce que vous pourrez livrer, vous isolez ce qui est interdit. Un dialogue réussi se termine par une liste de points validés et de points ouverts, pas par une ambiance chaleureuse et un brief vide."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez le premier dialogue en notant dans la marge : origine, missions, indispensables, conditions, recadrage, arbitrage. Puis faites de même sur la variante. Ensuite, jouez le rôle recruteur à voix haute (15 minutes) avec un collègue ou seul, à partir du brief brut fourni en mise en pratique. Contrôle : vous devez pouvoir remplir 80 % de la grille de la leçon 4 après le dialogue, sans inventer."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Deux contextes. A : PMI de chaudronnerie, 55 personnes, remplacement d'un responsable d'équipe fabrication. B : startup SaaS, 18 personnes, création d'un « Customer Success »."
            },
            {
              "block_type": "code",
              "content": "DIALOGUE A — PMI industrielle (extrait cadré)\n\nMANAGER : Il me faut un chef d'équipe comme Gérard. Il part en retraite en janvier.\n          Les jeunes, maintenant, ils ne restent pas, et ils ne savent pas tenir une équipe.\nRECRUTEUR : On est sur un remplacement retraite. Je vais d'abord caler ce que Gérard\n            fait vraiment, ensuite on verra le profil. Semaine type de Gérard ?\nMANAGER : Il lance les OF, il gère les 8 de l'atelier, il fait un peu d'impro\n          quand une machine lâche, et il parle aux clients quand le commercial n'est pas là.\nRECRUTEUR : Sur ces blocs, qu'est-ce qui reste dans le poste ? Le contact client,\n            c'est indispensable ou c'est historique ?\nMANAGER : Historique. Le commercial peut reprendre. Par contre l'atelier, oui.\nRECRUTEUR : D'accord. « Tenir une équipe », concrètement : planning, sécurité,\n            qualité, recadrage, formation des nouveaux ?\nMANAGER : Surtout sécurité et planning. On a eu un accident l'an dernier.\nRECRUTEUR : Donc indispensables : organisation d'atelier, sécurité, planning de 8 personnes.\n            Le contact client sort du poste. Sur « les jeunes ne restent pas » :\n            on va parler de conditions (horaires, salaire, tutorat), pas d'âge.\n            L'âge n'est pas un critère de recrutement.\nMANAGER : Je veux quelqu'un qui a 15 ans de chaudronnerie.\nRECRUTEUR : Qu'est-ce qui doit déjà avoir été fait en autonomie dès le premier mois ?\n            Si c'est « avoir déjà encadré un atelier et lu un planning de charge »,\n            on peut ouvrir au-delà de 15 ans d'un seul métier. Sinon on va se fermer.\nMANAGER : Ouais… encadrer, oui. Le métier, on peut accompagner un peu.\nRECRUTEUR : Je note : encadrement d'équipe de production = indispensable.\n            Technicité chaudronnerie = souhaitable, tutorat 2 mois par Gérard à poser.\n            Je vous envoie le brief demain. On ne publie pas tant que salaire\n            et 2×8 sont confirmés par la direction."
            },
            {
              "block_type": "code",
              "content": "DIALOGUE B — variante startup (même canevas, autre langage)\n\nFONDATEUR : On recrute un Customer Success ninja, bilingue, qui a déjà fait du SaaS\n            B2B, un peu sales, un peu produit, dispo yesterday, 35 k€, full remote,\n            et qui a la culture.\nRECRUTEUR : Je reformule le besoin, pas le titre. Quel problème ce poste résout\n            dans les 6 mois ?\nFONDATEUR : Les clients onboardent mal, on a trop de tickets, le churn nous inquiète.\nRECRUTEUR : Succès à 6 mois : onboarding tenu, tickets de niveau 1 traités,\n            signaux de désabonnement remontés au produit. C'est ça ?\nFONDATEUR : Oui. Et un peu de closing sur les renewals.\nRECRUTEUR : Le closing, c'est le même poste ou un second chapeau ? Si les deux\n            sont indispensables, on a un profil commercial + CS, donc autre fourchette.\nFONDATEUR : OK, CS d'abord. Renewals plus tard.\nRECRUTEUR : Indispensables : expliquer le produit, suivre un portefeuille,\n            écrire un suivi propre, parler aux utilisateurs. SaaS B2B déjà fait =\n            souhaitable. « Ninja » et « culture » : on les traduit en situations\n            (priorisation, feedback produit), on ne les met pas dans l'annonce.\n            Full remote : règle réelle de l'équipe produit, ou exception ?\n            35 k€ et bilingue : je mets en points ouverts, on arbitre avant sourcing.\n            Je n'ouvre pas tant que missions des 6 mois et fourchette sont écrites."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dans le dialogue A : rire de la phrase sur « les jeunes » au lieu de recadrer. Dans le B : accepter le titre et le « ninja » pour faire plaisir. Dans les deux : parler canaux (Indeed, LinkedIn) trop tôt. Couper le manager. Ou, à l'inverse, ne jamais reprendre la main. Promettre une shortlist en huit jours alors que les validations manquent."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui monopolise : reformulation contrainte toutes les cinq minutes. Manager monosyllabique : appuyez-vous sur une journée type, un incident récent, un planning. Présence d'un RH : ne vous taisez pas, vous restez pilote du brief métier. Cabinet en visio : enregistrez seulement si c'est autorisé par la politique et annoncé ; à défaut, prenez des notes visibles et restituez vite."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Brief brut à jouer (15 minutes, vous êtes le recruteur) : « On veut une personne à l'accueil + un peu de facturation, souriante, pas trop vieille, permis, 1 900 €, temps plein, remplacement d'un congé maternité, peut-être un CDI après. » Rédigez votre fil de 8 répliques (questions + recadrages + clôture)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Fil attendu : (1) Origine = remplacement pour absence, durée à clarifier, pas un CDI déguisé sans validation. (2) Missions accueil vs facturation : pourcentage du temps, outils, volume. (3) Recadrage net de « pas trop vieille » : critère interdit, on parle des contraintes du poste (horaires d'ouverture, station debout, pic d'appels). (4) « Souriante » devient qualité de service observable : accueil public, gestion d'impatients. (5) Permis : seulement si déplacements réels. (6) 1 900 € : brut ? grille interne ? (7) Congé maternité : vous ne collectez aucune information sur la situation familiale de quiconque ; vous cadrez la durée du besoin et le contrat possible avec RH. (8) Clôture : restitution écrite, pas de publication tant que contrat (CDD de remplacement vs CDI) et rémunération sont validés. Vous ne dites pas « CDD maternité, donc une femme » : le remplacement d'une absence n'est pas un critère de sexe du candidat."
            }
          ],
          "position": 6
        },
        {
          "title": "Restitution écrite du brief",
          "description": "Rédiger un brief validable, lisible par le manager, les RH et un collègue recruteur.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez rédiger une restitution de brief d'une à deux pages, faire valider les points ouverts, et transformer ce document en base de travail pour la fiche de poste. Vous savez ce qui doit rester factuel, et ce qui ne doit pas y figurer."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La restitution écrite est le livrable du cadrage. Elle n'est pas le compte-rendu exhaustif de la réunion, ni la fiche de poste, ni l'annonce. Elle dit : voici le besoin tel que nous l'avons compris, voici les indispensables, voici les conditions, voici ce qui n'est pas tranché, voici ce que nous faisons ensuite. Sa qualité se mesure à une chose : une personne absente de la réunion peut-elle agir sans vous rappeler ?\n\nÉcrire sert à trois acteurs. Le manager voit s'il a été compris et s'il assume encore ses exigences une fois lues. Les RH voient le contrat, le salaire, les alertes, le circuit. Le recruteur (vous, ou un collègue) sourcera sans dépendre de la mémoire. En cabinet, le document devient aussi une pièce du mandat : ce que le client a validé.\n\nLe style est professionnel, court, sans adjectifs vagues. On écrit « gérer le planning de 8 opérateurs en 2×8 et animer le quart d'heure sécurité » plutôt que « leadership terrain ». On écrit « fourchette 28-32 k€ brut annuel, à confirmer RH » plutôt que « salaire selon profil ». On écrit « point ouvert : Go vs Java » plutôt que de choisir en silence.\n\nCe qui ne doit pas figurer : les critères interdits, les commentaires sur des personnes en poste (« remplacer un amateur »), les diagnostics médicaux, les propos du manager que vous avez recadrés et qui n'ont plus lieu d'être. Si un propos problématique a été tenu, il va dans une alerte RH, pas dans le brief de sourcing.\n\nLa restitution demande une validation. Sans date de validation, elle reste un brouillon. La relance est un acte professionnel, pas une relance commerciale insistante : « Merci de confirmer ou corriger les points 4 et 7 avant mercredi, sans retour le sourcing reste en attente. »"
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédigez sous 24 à 48 heures ouvrées. Structure fixe : contexte et origine ; missions et succès ; profil classé ; conditions d'emploi ; process et décideurs ; points ouverts ; suite. Envoyez au manager, copie RH selon la politique. Relance à J+3 si silence. Archivage dans le dossier du poste (outil interne). Contrôle : relisez en cherchant ce qu'un candidat pourrait croire si ce texte fuitait. Rien d'humiliant, rien d'illicite, rien de faux."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : une page et demie suffit pour la plupart des postes. Politique interne : circuit de copie (RH, N+2) selon l'entreprise. Obligation : ne pas écrire d'engagement d'embauche dans un brief, et n'y faire figurer aucune exigence sans lien avec l'emploi."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le texte ci-dessous est une restitution pour le poste de technicien de maintenance de la PME industrielle vue en leçon 1. Il est volontairement utilisable tel quel comme modèle, à adapter."
            },
            {
              "block_type": "code",
              "content": "RESTITUTION DE BRIEF — Technicien de maintenance\nRef. poste : MAINT-2026-04    Date : 16/03/2026    Recruteur : [Nom]\nManager : Responsable d'atelier    Copie : RH\n\n1. Origine et enjeu\nRemplacement de Patrick D., départ retraite prévu semaine 18.\nLe stock pièces sort du poste (reprise par l'appro). Besoin recentré\nsur dépannage + préventif + GMAO. Pas de mobilité interne identifiée\nà ce stade (alerte transmise RH pour confirmation).\n\n2. Missions et succès\n- Dépanner les équipements de production (mécanique, base électrique).\n- Réaliser le préventif selon le planning GMAO.\n- Renseigner la GMAO à chaque intervention.\n- Interfacer production et, si besoin, prestataires.\nSuccès à 6 mois : préventif tenu, GMAO à jour, astreintes assurées\nselon le calendrier de l'équipe (à confirmer : 1 week-end / 4).\n\n3. Profil\nIndispensables : lecture de plans simples, dépannage mécanique,\nhabilitation électrique à obtenir ou déjà détenue (à confirmer RH\nselon équipements), travail en 2×8.\nSouhaitables : GMAO déjà pratiquée, expérience agro ou pharma.\nHors brief : aucun critère d'âge, de sexe ou de résidence.\n\n4. Conditions\nCDI, site [Ville], pas de télétravail (poste atelier).\nFourchette : à valider direction (point ouvert).\nPrise de poste souhaitée : S18, réaliste selon préavis.\n\n5. Process\nEntretiens : responsable d'atelier puis RH.\nDécision : responsable d'atelier + validation RH.\nDisponibilité manager : jeudi matin.\n\n6. Points ouverts (bloquants pour le lancement)\n- Fourchette de rémunération écrite\n- Astreinte : oui/non, fréquence, compensation\n- Habilitation : exigée à l'embauche ou formable en 90 jours\n\n7. Suite\nPas de publication tant que le point 6 n'est pas tranché.\nMerci de répondre « validé » ou de corriger avant le 18/03.\n\nCe document n'est pas une offre d'emploi ni une promesse d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer des notes brutes de réunion. Oublier les points ouverts pour « rester positif ». Mettre trop de contexte politique interne. Copier-coller l'ancienne fiche. Demander une validation sans date. Rédiger comme une annonce marketing. Inclure « profil jeune et dynamique » parce que le manager l'a dit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui corrige tout au stylo rouge : une version 2, puis un appel, pas dix versions. Double validation manager / RH : un seul document, deux lignes de signature. Cabinet : ajoutez le périmètre du mandat (ce que vous faites, ce que le client fait). Confidentiel : mention claire, liste de diffusion limitée, pas de publication interne large."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du dialogue startup de la leçon 7 (Customer Success), rédigez les parties 1, 2, 3 et 6 d'une restitution (origine, missions, profil, points ouverts). Maximum 250 mots."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Origine : création liée à un onboarding faible, tickets trop nombreux, risque de départ clients — pas un remplacement. Missions 6 mois : onboarding, portefeuille, tickets de niveau 1, remontées produit ; renewals explicitement hors périmètre dans un premier temps. Profil : indispensables = expliquer le produit, suivre un portefeuille, écrire un suivi, relation utilisateurs ; SaaS B2B et anglais = souhaitables selon arbitrage ; « ninja / culture » absents du document. Points ouverts : fourchette 35 k€, niveau d'anglais réel, règle de remote vs exception, titre exact. La restitution ne promet aucun candidat et ne lance pas le sourcing tant que fourchette et remote ne sont pas écrits. Si vous avez laissé « bilingue, 35 k€, full remote, dispo immédiate » dans les indispensables, le brief reste irréaliste : ce n'est pas une restitution, c'est une copie de la demande initiale."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Comprendre le besoin en recrutement",
          "description": "Vérifier que vous savez cadrer un besoin, classer les exigences et distinguer votre rôle de celui des RH.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Comprendre le besoin en recrutement",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un chef d'atelier vous dit : « Recrutez-moi le même profil que Nadia, elle démissionne. » Quelle est votre première action professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Publier immédiatement l'ancienne annonce pour ne pas perdre de temps.",
                  "B. Recaler l'origine (remplacement) puis faire décrire le travail réel et ce qui doit changer, avant tout sourcing.",
                  "C. Refuser le remplacement et imposer une mobilité interne.",
                  "D. Demander uniquement le salaire de Nadia, le reste suivra en entretien."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un remplacement n'est pas un clone automatique. L'origine oriente le cadrage, mais les missions actuelles et souhaitées doivent être revalidées. Vous ne publiez pas l'ancienne annonce en l'état, vous ne décidez pas d'une mobilité, et le salaire seul ne constitue pas un brief."
              },
              {
                "question": "Parmi ces quatre actes, lequel appartient à la décision RH / direction, et non à la simple vérification du recruteur junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Noter qu'aucun écrit ne confirme le budget annoncé à l'oral.",
                  "B. Demander l'organigramme à jour et le rattachement réel.",
                  "C. Trancher l'ouverture du poste en CDI malgré un gel des embauches.",
                  "D. Signaler qu'un salarié à temps partiel a demandé à être informé des temps plein."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Vérifier, documenter, alerter : rôle du junior. Ouvrir un poste contre une politique interne ou un gel : décision RH / direction. La priorité éventuelle d'un temps partiel se signale, elle ne se tranche pas seul (le cadre légal est précisé au module 3)."
              },
              {
                "question": "Dans une réunion de cadrage, à quel moment traitez-vous en priorité le salaire et le site d'annonce ?",
                "question_type": "single_choice",
                "options": [
                  "A. En ouverture, pour « être concret » tout de suite.",
                  "B. Après le problème à résoudre, les missions et le succès attendu, avec les autres conditions d'emploi.",
                  "C. Jamais : le salaire se discute seulement avec le candidat retenu.",
                  "D. Uniquement si le manager est de mauvaise humeur, pour le rassurer."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le salaire et les canaux viennent après le travail à faire. Les omettre jusqu'à l'offre empêche un brief honnête ; les placer en ouverture fausse la conversation et produit des profils décorrélés des missions."
              },
              {
                "question": "Un manager exige « bac+5, 8 ans, outil rare, langue C1, dispo 15 jours, salaire junior ». Quelle lecture est la plus juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. Brief irréaliste : plusieurs contraintes se contredisent et doivent être arbitrées par scénarios.",
                  "B. Brief exigeant mais normal : il suffit de sourcer plus fort.",
                  "C. Brief juridique : toutes ces exigences sont des critères interdits.",
                  "D. Brief déjà validé : plus il y a d'indispensables, plus le poste est clair."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Ce n'est pas parce qu'une exigence est professionnelle qu'elle peut coexister avec toutes les autres. Diplôme, années, outil, langue ne sont pas des critères interdits en soi ; le problème est l'intersection intenable. Empiler les indispensables n'est pas un signe de clarté."
              },
              {
                "question": "Quelle formulation a sa place dans une restitution écrite de brief ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Remplacer un amateur : on veut quelqu'un de sérieux, plutôt jeune. »",
                  "B. « Gérer le planning de 8 opérateurs en 2×8 et animer le quart d'heure sécurité. »",
                  "C. « Profil dynamique, esprit d'équipe, bon relationnel indispensable. »",
                  "D. « Promesse d'embauche dès qu'un CV correct arrive. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La restitution décrit des missions et des faits. Les jugements sur la personne en poste, l'âge, les qualités vagues et tout engagement d'embauche n'y ont pas leur place."
              },
              {
                "question": "Un manager dit : « Je préfère un homme, l'atelier n'est pas simple. » Que faites-vous dans la réunion ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous notez le critère pour « coller au terrain » et vous filtrerez discrètement.",
                  "B. Vous riez pour détendre, puis vous changez de sujet.",
                  "C. Vous recadrez : le sexe n'est pas un critère ; vous parlez des contraintes réelles du poste, et vous alertez RH si la demande persiste.",
                  "D. Vous arrêtez immédiatement toute collaboration avec ce manager, sans rien dire aux RH."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Il n'y a pas d'arbitrage possible sur un critère de sexe. Recadrage net, recentrage sur le poste, alerte RH si besoin. Filtrer en secret est une discrimination. L'humour n'efface pas la demande. Couper tout lien sans informer RH laisse le risque intact."
              },
              {
                "question": "Quand l'origine du besoin est un accroissement d'activité, quelle question est la plus utile avant d'ouvrir un CDI ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Quel est le signe astrologique du manager ? »",
                  "B. « L'organisation actuelle (heures, intérim, process, répartition) a-t-elle été examinée, et le volume est-il durable ? »",
                  "C. « Peut-on cloner le meilleur élément de l'équipe, à l'identique ? »",
                  "D. « Peut-on publier dès ce soir pour créer de l'activité visible ? »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un accroissement peut se traiter par l'organisation, un relais court ou un recrutement. Recruter un clone ou publier pour « montrer du mouvement » ne vérifie pas si le besoin est durable."
              },
              {
                "question": "Dans la grille de brief, pourquoi demander « qui peut dire non ? » en plus de « qui rencontre les candidats ? »",
                "question_type": "single_choice",
                "options": [
                  "A. Pour identifier le circuit de décision réel, souvent différent du circuit de demande.",
                  "B. Pour éviter d'inviter les RH aux entretiens.",
                  "C. Pour permettre au recruteur junior de décider seul en cas de désaccord.",
                  "D. Parce que la loi impose de n'avoir qu'un seul décideur nommé."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Les personnes qui voient les candidats ne sont pas toujours celles qui tranchent. Sans ce point, les shortlists sont retoquées tard. Ce n'est ni une obligation légale de décideur unique, ni un permis de contourner RH."
              },
              {
                "question": "Un fondateur de startup veut un « ninja full remote, 35 k€, qui code, vend et recrute ». Quelle est la meilleure prochaine étape ?",
                "question_type": "single_choice",
                "options": [
                  "A. Rédiger une annonce sur ce ton pour attirer la « culture ». ",
                  "B. Figer les missions des 6 premiers mois, séparer les chapeaux, et arbitrer fourchette et règle de remote avant sourcing.",
                  "C. Promettre un profil senior en expliquant que le titre fera passer le salaire.",
                  "D. Refuser tout recrutement en startup tant qu'il n'y a pas de DRH."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le canevas est le même qu'en industrie : travail, puis profil, puis conditions. Le vocabulaire « ninja » n'est pas un brief. L'absence de DRH n'interdit pas de cadrer ; elle rend l'écrit encore plus nécessaire."
              },
              {
                "question": "Vous n'avez qu'un accord oral du dirigeant, à la machine à café, pour un CDI cariste. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous ouvrez l'annonce le jour même, l'oral du dirigeant suffit en TPE/PME.",
                  "B. Vous documentez l'absence d'écrit, faites confirmer budget et contrat, et vous ne publiez pas tant que ce n'est pas daté.",
                  "C. Vous transformez d'office le besoin en intérim, sans en parler.",
                  "D. Vous demandez au cariste intérimaire déjà présent de signer une promesse."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "En TPE comme en ETI, un oral informel n'est pas une validation budgétaire. Vous ne changez pas seul le type de contrat et vous ne formulez aucune promesse. Vous faites écrire, puis vous lancez."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 2,
      "title": "Construire le profil et la fiche de poste",
      "description": "Distinguer fiche de poste, profil recherché et annonce, analyser les missions, classer les critères sans discrimination, construire une grille pondérée et valider trois fiches complètes avec le manager.",
      "lessons": [
        {
          "title": "Fiche de poste, profil recherché et annonce : trois objets distincts",
          "description": "Savoir à quoi sert chaque document, ce qu'il contient, et ce qui se passe si on les fusionne trop tôt.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez la fiche de poste, le profil recherché et l'annonce. Vous savez lequel rédiger en premier, lequel reste interne, et lequel s'adresse aux candidats. Vous évitez de recruter à partir d'un texte marketing qui n'a jamais décrit le travail."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Trois documents circulent dans un recrutement. Ils n'ont pas le même destinataire, pas la même durée de vie, pas le même niveau de détail. Les confondre est l'une des causes les plus banales d'échec : on publie une annonce séduisante, on sélectionne sur un portrait, et personne n'a décrit le travail.\n\nLa fiche de poste décrit un emploi dans l'organisation : finalité, rattachement, missions, responsabilités, conditions d'exercice, relations internes et externes. Elle survit au recrutement. Elle sert aussi à l'intégration, à l'entretien professionnel, parfois à la classification. Elle est un document d'organisation, pas un argumentaire commercial. Dans beaucoup de PME, elle n'existe pas ou elle a dix ans : le recrutement est le moment de la créer ou de la remettre à jour, pas de faire semblant.\n\nLe profil recherché est un objet de sélection, temporaire. Il traduit le brief en critères : indispensables, souhaitables, éliminatoires professionnels, niveau de maîtrise attendu. Il n'a pas vocation à être publié tel quel. Il contient des éléments que l'on ne met pas dans l'annonce (pondération, « formable en 3 mois », nom du tuteur, salaire max interne). C'est votre boussole de tri, pas le texte candidat.\n\nL'annonce est un message public : attirer des candidatures pertinentes, informer sans induire en erreur, respecter le français et les interdictions d'offres (détail au module cadre légal). Elle est plus courte, plus lisible, sans jargon interne, sans critères illicites, sans promesses fausses. Elle dérive de la fiche et du profil ; elle ne les remplace pas.\n\nL'ordre professionnel est : brief validé → fiche de poste (ou mise à jour) → profil de sélection → puis seulement l'annonce et les canaux. Inverser, c'est écrire le slogan avant le cahier des charges. Un cabinet qui n'a que l'annonce du client n'a pas de mandat cadré : il doit reconstruire fiche et profil, même si le livrable public reste l'offre.\n\nCes trois objets doivent rester cohérents. Si la fiche dit « astreintes », l'annonce ne peut pas les taire si elles structurent l'emploi. Si le profil dit « habilitation obligatoire à J1 », l'annonce ne doit pas laisser croire que l'on forme tout le monde. La cohérence n'est pas de tout copier partout : c'est de ne pas se contredire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Après validation du brief : (1) reprendre la fiche existante ou créer une structure vide ; (2) y verser missions, rattachement, conditions ; (3) extraire le profil de sélection dans un tableau à part (leçon 4) ; (4) seulement ensuite rédiger l'annonce (module dédié plus loin dans le parcours). Interlocuteurs : manager pour les missions, RH pour classification, contrat, intitulé officiel. Contrôle : trois fichiers ou trois sections clairement nommés, pas un seul pavé « fiche-annonce-profil »."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : trois documents. Politique interne : certaines entreprises n'ont qu'un modèle unique ; vous y distinguez quand même les blocs « organisation », « sélection », « communication ». Obligation : l'offre publique ne doit pas contenir d'allégations fausses ni de critères de sexe ou d'âge hors exceptions (module 3)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet, mandat « Business Analyst » pour une ETI d'assurance. Le client envoie une annonce déjà rédigée, très marketing, sans rattachement, avec « 5 ans min. » et « anglais courant ». Vous reconstruisez : fiche (finalité du poste dans le programme de transformation, lien DSI / métier, livrables), profil (indispensables : recueil de besoin, rédaction de spécifications, animation d'ateliers ; anglais = réunions mensuelles avec un prestataire, niveau B2 écrit suffit ; 5 ans = souhaitable), annonce ensuite, alignée, sans copier la fourchette interne max. Le client voulait publier le jour même : vous gagnez une demi-journée de cadrage et vous évitez 80 candidatures hors sujet."
            },
            {
              "block_type": "code",
              "content": "TROIS OBJETS — repère rapide\n\n                    Destinataire         Durée de vie        Contient\nFiche de poste      interne (org, RH)    tant que l'emploi   missions, rattachement,\n                                         existe              conditions, responsabilités\nProfil recherché    recruteur + manager  le temps du process critères classés, pondération,\n                    (interne)                                « formable / non formable »\nAnnonce             candidats, public    le temps de la      message honnête, missions\n                                         diffusion           clés, conditions essentielles\n\nNe va PAS dans l'annonce : salaire max interne, commentaires sur la personne\nqui part, pondération secrète, critères illicites, promesses non tenues."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier l'annonce avant la fiche. Recopier une fiche de 2014. Mettre la pondération dans l'annonce. Rédiger le profil comme une liste de qualités. Croire que « on n'a pas de fiche dans cette PME » dispense de décrire les missions. Utiliser l'annonce du concurrent comme fiche de poste."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Intérim : la qualification de mission n'est pas une fiche pérenne, mais les missions, horaires et lieu doivent être aussi clairs. Reprise de poste confidentielle : la fiche interne existe, l'annonce est plus prudente, jamais mensongère. Création de poste : la fiche est un hypothèse à réviser à 6 mois ; dites-le au manager. Multi-sites : la fiche précise le site principal, pas « France entière » si la personne sera à Saint-Étienne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous donne ce pavé unique : « On cherche un as de l'admin, polyvalent, esprit startup, 3-5 ans, pour tout faire au bureau, salaire sexy, CDD ou CDI selon profil. » Séparez en trois listes : ce qui irait dans une fiche, dans un profil, dans une annonce, et ce qui ne va nulle part."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Fiche : il n'y a presque rien — « tout faire au bureau » n'est pas une mission. Il faut recréer finalité, missions, rattachement. Profil : « 3-5 ans » est un indicateur faible ; « polyvalent » n'est pas un critère ; CDD ou CDI selon profil n'est pas un critère de personne, c'est une indécision d'organisation. Annonce : « as », « esprit startup », « salaire sexy » sont du flou ou des allégations risquées. Nulle part : le slogan, le « selon profil » sans fourchette interne validée. Conclusion : vous ne publiez pas. Vous revenez au brief."
            }
          ],
          "position": 0
        },
        {
          "title": "Analyser les missions et identifier les compétences",
          "description": "Passer des missions aux compétences techniques, comportementales et transférables, de façon observable.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez déduire des compétences à partir de missions concrètes. Vous distinguez technique, comportemental observable, et transférable. Vous évitez les listes de qualités invisibles (« rigoureux, passionné, leader »)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une compétence n'est pas un trait de caractère. C'est la capacité à produire un résultat dans une situation de travail. On l'identifie en partant des missions, jamais l'inverse. « Besoin d'un leader » ne dit rien. « Animer un brief quotidien de 12 personnes et arbitrer les priorités de la journée » dit presque tout : organisation, communication, décision sous contrainte, connaissance du flux.\n\nLes compétences techniques (parfois dites « hard ») portent sur des savoirs et des savoir-faire professionnels : logiciel, machine, norme, langue utilisée dans un contexte, méthode. Elles se vérifient par des preuves (réalisations, tests pertinents, mises en situation), pas par le seul intitulé du CV.\n\nLes compétences comportementales ne sont utiles que si elles sont observables. « Sens du client » devient « traiter une réclamation en recadrant les faits, proposant une option, écrivant un suivi ». « Autonomie » devient « avancer 3 jours sans consignes sur un dossier déjà cadré, et alerter si le délai glisse ». Sans situation, le comportemental est un prétexte à l'impression, donc au biais.\n\nLes compétences transférables viennent d'un autre métier, d'un autre secteur, parfois d'un engagement associatif ou d'une reconversion, et servent le poste. Un ancien commercial peut exceller au recueil de besoin pour un poste de chef de projet. Un ouvrier devenu formateur interne a déjà de la pédagogie de terrain. Le junior qui refuse tout ce qui n'est pas « le même intitulé » se ferme des viviers et confond habitude et exigence.\n\nLa méthode d'analyse est un va-et-vient. Mission → résultats attendus → situations difficiles du poste → compétences nécessaires → ce qui est formable ici. Une compétence que l'équipe peut transmettre en six semaines n'a pas le même statut qu'une habilitation exigée le premier jour. C'est ainsi que l'on prépare le classement indispensable / souhaitable de la leçon suivante, et la pondération de la grille.\n\nAttention au vocabulaire interne. « Savoir gérer la GED » peut vouloir dire classer des PDF, ou piloter un projet documentaire. Vous faites décrire une journée, un dossier type, un incident. Les mots du métier du manager ne sont pas encore des compétences du profil."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque mission du brief : écrire le livrable, la fréquence, les interlocuteurs, ce qui se passe si c'est mal fait. En déduire 1 à 3 compétences. Les formuler par un verbe + un objet + un contexte. Classer : technique / comportementale observable / transférable. Marquer formable ou non, avec qui, en combien de temps. Faire valider au manager par des exemples, pas par un nuage de mots. Contrôle : aucune compétence orpheline (sans mission) et aucune mission orpheline (sans compétence)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services, ETI de 280 personnes, poste d'assistant commercial export. Mission « gérer les commandes ». Après analyse : saisir les commandes dans l'ERP (technique, formable 3 semaines), vérifier Incoterms et délais avec l'usine (technique métier, partiellement formable), écrire aux agents en anglais (langue en contexte écrit, niveau à préciser), traiter une commande bloquée sans paniquer le client (comportemental observable), prioriser 40 mails le matin (organisation). Un candidat venant de la logistique, sans titre « assistant commercial », peut déjà tenir 3 de ces 5 blocs : compétence transférable à valoriser dans le profil, pas à écarter d'emblée."
            },
            {
              "block_type": "code",
              "content": "FICHE D'ANALYSE MISSION → COMPÉTENCES\n\nMission : .....................................................\nLivrable / fréquence : ........................................\nSi c'est mal fait, conséquence : ..............................\n\nCompétence 1 (technique) : ....................................\nCompétence 2 (comportementale, situation) : ...................\nCompétence 3 (transférable possible depuis) : .................\nFormable ici : oui / non    Tuteur : ..........    Délai : ....\n\nFormulation interdite : « bon relationnel », « dynamique »,\n« esprit d'équipe », « leadership » sans situation.\nFormulation attendue : verbe + objet + contexte."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Recopier des listes de compétences trouvées sur internet. Empiler 25 compétences pour un seul poste. Confondre outil et capacité. Mettre « anglais » sans usage. Traiter toute expérience hors secteur comme un défaut. Valider avec le manager un nuage de mots en 30 secondes."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Reconversion : cartographier les transférables avant de dire « pas le bon parcours ». Poste expert rare : moins de comportemental générique, plus de preuves techniques, sans en faire un mur de diplômes inutiles. Management : décrire les actes (recruter, recadrer, planifier, arbitrer), pas le mot « manager ». Intérim : les compétences du jour J priment ; le transférable se discute si la mission est longue ou pérennisable."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Mission brute : « s'occuper des RH de la PME ». Transformez-la en 5 missions concrètes possibles dans une PME de 40 personnes, puis en compétences observables. Indiquez deux transférables acceptables."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Missions possibles : administration du personnel (DPAE, dossiers, absences) en lien avec l'expert-comptable ; recrutement opérationnel avec les managers ; accueil et intégration ; suivi des visites médicales et des habilitations ; paie préparatoire ou contrôle des variables. Compétences : exactitude documentaire, priorisation, entretien de brief, discrétion (situation : données de santé et salaires), usage d'un logiciel de paie ou tableur. Transférables : un assistant de direction qui tenait déjà les dossiers confidentiels et les plannings ; un assistant d'agence d'intérim habitué aux dossiers salariés. « S'occuper des RH » tout seul n'est ni une mission ni une compétence."
            }
          ],
          "position": 1
        },
        {
          "title": "Critères éliminatoires, souhaitables et critères interdits",
          "description": "Classer les critères de sélection et écarter tout critère discriminatoire, en s'appuyant sur L. 1132-1 et L. 1221-6.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez poser des critères éliminatoires professionnels justifiés, des critères souhaitables, et refuser les critères discriminatoires. Vous reliez ce classement aux articles L. 1132-1 et L. 1221-6 du Code du travail, sans vous substituer à un juriste."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Tout critère de sélection n'a pas le même statut. Un critère éliminatoire professionnel est une condition sans laquelle le poste ne peut pas être tenu, dès l'arrivée ou dans un délai trop court pour l'organisation. Exemples : une habilitation exigée par l'emploi, une langue utilisée quotidiennement avec des clients, un permis lorsque les déplacements sans alternative sont un fait du poste. Il doit rester rare, écrit, expliqué.\n\nUn critère souhaitable améliore la prise de poste. Son absence n'arrête pas le dossier. En faire un éliminatoire « pour se simplifier le tri » est une erreur métier : on appauvrit le vivier et on se rapproche d'un filtre opaque.\n\nUn critère discriminatoire est interdit. L'article L. 1132-1 du Code du travail pose qu'aucune personne ne peut être écartée d'une procédure de recrutement en raison de critères protégés. Parmi ceux-ci, tels que listés par le Code du travail numérique (vérification au 13/10/2026) : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte. Texte : https://code.travail.gouv.fr/code-du-travail/l1132-1\n\nL'article L. 1221-6 ajoute une règle de méthode : les informations demandées au candidat, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Elles doivent présenter un lien direct et nécessaire avec l'emploi proposé. https://code.travail.gouv.fr/code-du-travail/l1221-6\n\nConséquence pratique pour la fiche et le profil : un critère qui n'a pas ce lien ne rentre pas. « Jeune », « sans enfants », « de préférence une femme », « photo obligatoire », « habite à côté » (le lieu de résidence est un critère protégé), « bon français à l'oral » si l'emploi n'exige pas ce niveau, sont à sortir. Un permis se justifie par des déplacements. Une langue se justifie par un usage. Un diplôme se justifie par l'emploi, surtout s'il est réglementé.\n\nVous n'êtes pas le juge de la discrimination. Vous êtes le premier filtre professionnel : vous n'écrivez pas ces critères, vous ne les utilisez pas au tri, vous recadrez le manager, vous alertez les RH. Le module 3 approfondit les conséquences et les questions d'entretien. Ici, l'enjeu est de ne pas graver l'illicite dans la fiche de poste."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Reprenez chaque critère du brief. Colonne 1 : éliminatoire professionnel (justification écrite du lien avec l'emploi). Colonne 2 : souhaitable. Colonne 3 : interdit ou hors lien — à supprimer, pas à « formuler plus subtilement ». Faites relire par RH les éliminatoires. Contrôle : aucun critère de la liste L. 1132-1, aucune information sans lien L. 1221-6. Date de vérification des textes : 13/10/2026 ; relire le texte en vigueur le jour J."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale : L. 1132-1 (non-discrimination à l'embauche) et L. 1221-6 (lien direct et nécessaire). Ce n'est pas une « politique diversité » interne, même si l'entreprise en a une. Bonne pratique : limiter les éliminatoires à 3 ou 4. Politique interne : un diplôme « maison » exigé de tous doit quand même rester en lien avec l'emploi."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME 40 personnes, poste d'assistant administratif (fiche complète en leçon 5). Le gérant veut : « femme de préférence, 25-35 ans, habite la ville, permis, Word/Excel, discrète, pas d'enfants en bas âge parce que les horaires d'accueil sont 8 h-12 h / 14 h-18 h. »\n\nÉliminatoires professionnels possibles : maîtrise réelle du tableur pour un volume de factures ; tenue d'un accueil aux horaires du site (contrainte du poste, pas de la vie personnelle). Souhaitables : expérience PME, logiciel de paie déjà vu. Interdits : sexe, âge, résidence, situation de famille. Le permis : seulement s'il y a des courses ou des déplacements réguliers ; sinon, hors lien. « Discrète » devient : traiter des données de paie et d'arrêt de travail sans les diffuser — comportemental lié à l'emploi, pas un jugement moral."
            },
            {
              "block_type": "code",
              "content": "CLASSEMENT DES CRITÈRES — modèle\n\nÉLIMINATOIRE (lien emploi écrit)     SOUHAITABLE              INTERDIT / HORS LIEN\nHabilitation X si le poste l'exige   Secteur déjà connu       Sexe, âge, photo\nPermis si déplacements hebdo         Logiciel déjà pratiqué   Situation de famille\nLangue si usage réel documenté       Diplôme non réglementé   Résidence, apparence\n                                     si équivalence possible  Santé, grossesse, etc.\n\nFormulation de substitution interdite :\n« jeune dynamique » à la place de « moins de 30 ans » reste un critère d'âge.\nOn décrit le poste (horaires, charge, déplacements), on ne décrit pas la personne."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Reformuler un critère interdit pour « que ça passe ». Mettre 12 éliminatoires. Oublier que le lieu de résidence est protégé. Exiger un « français parfait » par confort. Copier « H/F » en croyant que cela suffit si le reste du texte est genré. Laisser le manager coller une photo sur le besoin « pour voir le sérieux »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Emplois à exception limitée (artiste, mannequin/modèle) : hors le cas dûment justifié, le sexe n'est pas un critère ; le détail offres d'emploi est au module 3. Handicap : on n'écarte pas pour ce motif ; l'aménagement se discute dans le cadre prévu, avec RH, pas en filtre CV. Langue : L. 1132-1 protège notamment la capacité à s'exprimer dans une langue autre que le français — n'en faites pas un grief. Poste en contact enfants / sécurité : vous ne devenez pas enquêteur ; le cadre des vérifications (casier, diplômes) se fait selon les règles et l'information du candidat, module 3."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez : (1) « 5 ans d'expérience minimum » ; (2) « permis B, 4 déplacements chantiers par semaine » ; (3) « de préférence un homme pour l'atelier » ; (4) « Excel, tableaux croisés, dès J1 » ; (5) « habite à moins de 20 minutes » ; (6) « disponible le samedi, le magasin ouvre le samedi ». Justifiez en une phrase chaque classement."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Souhaitable par défaut, parfois indicateur : ce n'est éliminatoire que si l'on a décrit des actes non formables ici. Un mur d'années mal justifié peut masquer un filtre d'âge. (2) Éliminatoire professionnel si les déplacements sont un fait du poste sans alternative. (3) Interdit : sexe, L. 1132-1. (4) Éliminatoire ou souhaitable selon le volume réel et le tutorat possible ; le lien avec l'emploi existe. (5) Interdit / hors lien : lieu de résidence. On peut décrire le lieu de travail et les horaires, pas imposer un rayon. (6) Contrainte du poste (ouverture samedi) : on l'écrit comme condition d'emploi, on ne fouille pas la vie familiale pour « voir si c'est compatible »."
            }
          ],
          "position": 2
        },
        {
          "title": "Construire une grille de sélection pondérée",
          "description": "Transformer le profil en grille notée, partageable avec le manager, utilisable du CV à l'entretien.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez construire une grille pondérée de 5 à 8 critères, lui donner des ancres d'évaluation, et l'utiliser de façon cohérente entre préselection et entretien. Vous savez ce qu'une grille ne fait pas : elle n'élimine pas le jugement, elle le discipline."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Sans grille, chaque décideur pèse ce qu'il aime. Le manager survalorise « quelqu'un comme moi », le junior survalorise un CV fluide, un troisième survalorise l'école. La grille n'empêche pas ces biais à elle seule, mais elle oblige à nommer les critères avant de voir les personnes, et à comparer les dossiers sur les mêmes axes.\n\nPondérer, c'est dire que tout n'a pas le même poids. Un critère éliminatoire professionnel peut être binaire (oui/non) : sans l'habilitation exigée, la note du reste ne « rattrape » pas. Les autres critères reçoivent un poids (par exemple 5, 10, 15, 20) dont le total fait 100. Les souhaitables pèsent moins que les indispensables. Rien d'interdit n'entre dans la grille.\n\nLes ancres d'évaluation évitent le 3/5 mou. Pour chaque critère, on décrit ce que vaut 1, 3 et 5 (ou 0, 2, 4). « Expérience client » : 1 = n'a jamais tenu un portefeuille ; 3 = a suivi des clients avec un script ; 5 = a traité des réclamations et des renouvellements en autonomie. Sans ancre, la note est une humeur.\n\nLa grille est un outil interne de sélection, pas un document à envoyer aux candidats. Les méthodes d'évaluation devront être pertinentes et les candidats informés préalablement (L. 1221-8 et L. 1221-9, module 3). À ce stade, retenez : une grille de CV n'est pas un test psychométrique ; si vous ajoutez un test, ce sera un autre sujet, avec information et pertinence.\n\nLa grille se fige avant l'arrivée des CV. La modifier parce que l'on « aime bien » un candidat est une fraude au process. On peut la réviser entre deux campagnes, pas au milieu d'une shortlist, sauf erreur manifeste de critère (critère illicite découvert, mission qui change), et alors on documente."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Partir du profil classé, pas de l'annonce. 2. Choisir 5 à 8 critères, dont 0 à 3 binaires éliminatoires. 3. Attribuer les poids avec le manager (20 minutes). 4. Écrire les ancres 1/3/5. 5. Tester la grille sur 2 CV fictifs ou anciens pour voir si elle produit un classement absurde. 6. Utiliser la même grille en préselection et en trame d'entretien. 7. Conserver les grilles remplies dans le dossier du poste, selon la politique de conservation (module 3). Contrôle : somme des poids = 100 ; aucun critère L. 1132-1."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup, développeur backend (fiche en leçon 6). Éliminatoire binaire : capacité à livrer du code backend dans le langage du socle (évaluée plus tard par exercice pertinent, annoncé). Pondération du reste : conception d'API 25, qualité / tests 20, débogage production 20, communication avec le produit 15, autonomie d'organisation 10, Go (souhaitable) 10. Le CTO voulait 40 % sur « culture GitHub ». Vous refusez cet item flou : on évalue des contributions et des pratiques, pas une esthétique de profil public, et encore moins une exploration des réseaux hors lien avec l'emploi."
            },
            {
              "block_type": "code",
              "content": "GRILLE PONDÉRÉE — modèle (total 100)\n\nCritère                         Poids   1 (insuffisant)     3 (correct)          5 (solide)\n------------------------------ ------- ------------------- -------------------- -------------------\nTenue des missions cœur           25    n'a pas produit     a produit avec      a produit en\n                                        le livrable type    aide                autonomie\nOutil / méthode indispensable     20    jamais utilisé      utilisé avec        utilisé en\n                                                            tutorat             situation proche\nSituation comportementale clé     15    pas d'exemple       exemple partiel     exemple complet,\n                                                                                résultat clair\nCondition d'emploi assumée        10    incompatible        négociable borné    aligné\n(horaires, site — pas la vie\nprivée)\nSouhaitable métier                10    absent              proche              présent\nTransférable / potentiel          10    hors sujet          1 pont clair        2 ponts + preuve\nCommunication professionnelle     10    confus              clair à l'écrit     clair écrit + oral\n                                        (sur dossier)       ou à l'oral         selon le poste\n\nÉliminatoire binaire (hors 100) : ................ oui / non   justification emploi : ........\n\nCandidat : ..........  Note : .... / 100    Décision : poursuite / réserve / arrêt\nÉvaluateur : ..........  Date : ..........\nLa grille ne contient aucun critère interdit."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Mettre 15 critères à 6,6 %. Noter le « feeling » comme critère. Pondérer après avoir vu le CV préféré. Utiliser une grille différente par candidat. Confondre grille interne et test non annoncé. Donner zéro à un candidat parce que le CV n'a pas de photo ou un prénom inhabituel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Volume massif (alternance, opérateurs) : grille courte, 5 critères, même discipline. Poste unique expert : plus de poids sur les preuves techniques, mises en situation pertinentes. Cabinet : la grille se partage avec le client, sinon la shortlist sera jugée sur des critères secrets. Intérim : grille du jour J (horaires, geste, sécurité), pas un modèle cadre."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Construisez une grille à 6 critères (poids + ancre du niveau 5 seulement) pour un assistant administratif d'accueil + facturation dans une PME. Interdiction d'y mettre l'âge, le sexe, la résidence, la photo."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Exemple cohérent : accueil public (20) — niveau 5 : gère un flux et un visiteur mécontent sans perdre le suivi ; facturation / tableur (25) — niveau 5 : tableaux, contrôles, relances déjà tenus ; priorisation (15) ; discrétion des données (15) — situation professionnelle, pas moralisme ; expression écrite professionnelle (15) ; expérience d'un logiciel proche (10). Éliminatoire binaire possible : présence aux horaires d'ouverture du site, posée comme condition d'emploi. Si vous avez pondéré « présentation physique » ou « proximité géographique », la grille est non conforme."
            }
          ],
          "position": 3
        },
        {
          "title": "Fiche complète : assistant administratif en PME de 40 personnes",
          "description": "Étudier et réutiliser une fiche de poste complète, avec profil et extraits de critères, pour une PME de services / négoce.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez lire une fiche complète de PME, en extraire le profil de sélection, et l'adapter sans la vider. Vous voyez comment missions, conditions et critères tiennent en un seul document interne, distinct de l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Dans une PME de 40 personnes, l'assistant administratif n'est pas « la personne qui fait tout ce que les autres ne font pas ». Si la fiche dit cela, le recrutement échouera : trop de managers, trop de priorités, aucun succès mesurable. La fiche doit nommer un rattachement (souvent le gérant, un responsable administratif ou le responsable d'agence), un périmètre (accueil, standard, facturation, dossiers du personnel en appui, fournitures), et ce qui n'est pas dans le poste (comptabilité de clôture, commercial terrain, informatique système).\n\nLe volume fait la compétence. « Facturation » pour 20 factures mois n'est pas « facturation » pour 400. « Accueil » d'un showroom n'est pas un standard 80 appels. La fiche de PME honnête donne des ordres de grandeur, même approximatifs, validés par le manager. Elle dit aussi les horaires d'ouverture, la pause méridienne possible ou non, le travail du samedi s'il existe.\n\nLe profil qui en découle est plus étroit que la fiche. La fiche décrit l'emploi. Le profil dit ce que l'on exige à l'entrée et ce que l'on forme. Dans une PME sans tuteur, « formable » est souvent un vœu : il faut un nom et un temps. Sinon, le critère remonte en indispensable.\n\nCette leçon est un modèle. Elle n'est pas une statistique du marché, ni un salaire « officiel ». La fourchette indiquée est un exemple pédagogique interne à l'entreprise fictive, à remplacer par la politique réelle. L'annonce n'est pas rédigée ici ; seuls les éléments qui devront y rester honnêtes sont signalés."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez la fiche. Surlignez missions, hors périmètre, conditions, indispensables. Construisez mentalement 5 critères de grille. Comparez avec le bloc « profil interne » fourni. L'écart, s'il existe, est ce que vous auriez dû arbitrer avec le manager."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Entreprise fictive : Armor Négoce, PME de négoce de fournitures professionnelles, 40 salariés, un site, Loire-Atlantique. Remplacement d'un départ. Horaires d'accueil 8 h 30-12 h 30 et 14 h-18 h. Facturation export limitée. Pas de télétravail sur l'accueil. Le gérant voulait « une fille à l'accueil » : recadré, absent de la fiche."
            },
            {
              "block_type": "code",
              "content": "FICHE DE POSTE — Assistant administratif polyvalent\nEntreprise : Armor Négoce (PME, 40 personnes, un site)\nRattachement : Responsable administratif et financier\nStatut / classification : selon grille interne (à renseigner RH)\nLieu : site de [Ville] — poste présentiel (accueil public)\nHoraires : 8 h 30-12 h 30 / 14 h-18 h, lundi-vendredi\nContrat type visé : CDI (validation direction)\nAstreintes : non    Télétravail : non (contrainte d'accueil)\nDéplacements : exceptionnels (poste, mairie) — permis non exigé\n\nFinalité\nAssurer l'accueil physique et téléphonique, tenir la facturation\ncourante et le classement, et appuyer le RAF sur l'administratif\ndu quotidien, afin que les commerciaux et l'atelier restent sur\nleur métier.\n\nMissions permanentes\n1. Accueillir les visiteurs et filtrer le standard (environ 30-50\n   appels / jour en période normale).\n2. Saisir et émettre les factures, relancer les impayés simples\n   selon la procédure (volume indicatif : 80-120 factures / mois).\n3. Classer et retrouver les dossiers (commandes, livraisons, RH\n   administratifs de base) dans la GED et les classeurs.\n4. Préparer les éléments variables pour l'expert-comptable\n   (absences, notes de frais) — sans établir la paie.\n5. Gérer fournitures, courrier, prises de rendez-vous direction.\n6. Mettre à jour les tableaux de suivi (impayés, stocks d'office).\n\nHors périmètre\nPaie complète, clôture comptable, prospection commerciale,\nadministration serveur / informatique, management.\n\nRelations\nInterne : RAF, gérant, 6 commerciaux, atelier.\nExterne : clients au comptoir, transporteurs, expert-comptable,\nfournisseurs de bureau.\n\nMoyens\nERP / facturation en place, suite bureautique, standard IP.\nPas de budget à engager sans validation RAF.\n\nProfil interne de sélection (ne se publie pas tel quel)\nÉliminatoires professionnels :\n- Tenir l'accueil aux horaires du site\n- Produire des documents écrits professionnels en français\n- Utiliser un tableur pour des suivis simples (ou équivalent\n  démontrable) dès les premières semaines\nSouhaitables : expérience accueil ou facturation PME ; ERP proche\nFormable (tuteur : RAF, 6 semaines) : ERP maison, procédure impayés\nInterdit dans la sélection : sexe, âge, situation de famille,\nrésidence, photo, apparence.\n\nConditions d'emploi à rester honnêtes dans l'annonce\nPrésentiel, horaires d'ouverture, CDI visé, site unique.\nRémunération : fourchette interne à valider — ne pas écrire\n« selon profil » sans cadre.\n\nCette fiche n'est pas une offre d'emploi ni une promesse d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser « polyvalent » sans hors périmètre. Oublier les volumes. Exiger le permis par habitude. Recopier « H/F souriante, 25-40 ans ». Transformer la fiche en annonce lyrique. Promettre de la paie alors que l'expert-comptable la fait."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si l'accueil passe à un samedi sur deux : c'est une condition d'emploi à ajouter, pas un filtre « gens sans enfants ». Si le gérant veut aussi de l'anglais au téléphone (10 appels export / semaine) : la langue redevient un critère, avec le niveau d'usage. Si deux managers pilotent la personne : la fiche doit dire qui priorise, sinon le poste est intenable."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le RAF veut ajouter « gestion complète de la paie » et « community management des réseaux de l'entreprise ». Décidez, en cinq lignes, ce que vous faites de chaque ajout (dans la fiche, hors périmètre, ou second poste) et l'effet sur le profil."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Paie complète : ce n'est plus le même emploi (responsabilité, logiciel, délais, confidentialité accrue). Soit on recadre le poste (intitulé, salaire, indispensables), soit on laisse à l'expert-comptable / un profil dédié. Community management : autre métier, autre rythme, autre compétence ; hors périmètre, ou mission très bornée (publier un événement mensuel) si le volume est réel et formable. Les deux ajouts ensemble reproduisent le poste fourre-tout. Vous n'alourdissez pas les éliminatoires en silence : vous rouvrez un arbitrage de brief."
            }
          ],
          "position": 4
        },
        {
          "title": "Fiches complètes : développeur backend startup et technicien de maintenance",
          "description": "Comparer deux fiches abouties, hors PME de bureau : produit logiciel et industrie.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 26,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous disposez de deux fiches complètes supplémentaires, que vous savez comparer : ce qui change (missions, preuves, conditions) et ce qui ne change pas (classement des critères, hors illicite, validation)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le canevas de fiche ne change pas avec le secteur. Ce qui change, c'est la nature des preuves et des conditions. Un développeur backend s'évalue sur des livrables logiciels, des pratiques de qualité, une collaboration produit. Un technicien de maintenance s'évalue sur des gestes, des habilitations, la sécurité, des horaires d'atelier. Dans les deux cas, on décrit d'abord le travail, on classe ensuite les critères, on refuse les portraits.\n\nEn startup, la fiche combat trois dérives : le titre gonflé, le « tout le monde fait tout », le remote non décidé. En industrie, elle combat le clone du partant, l'âge comme faux critère de maturité, et l'oubli des astreintes. Les deux fiches ci-dessous sont des modèles pédagogiques d'entreprises fictives. Les fourchettes de rémunération sont des exemples internes à remplacer, pas des données de marché.\n\nVous remarquerez que chaque fiche contient un hors périmètre. C'est volontaire. Sans lui, le développeur se retrouve d'astreinte produit, commercial et recruteur. Sans lui, le technicien reprend le stock, les achats et la conduite de ligne. Le hors périmètre protège le brief autant que les missions.\n\nLe profil interne, en bas de chaque fiche, est le pont vers la grille pondérée. Il ne se copie pas dans l'annonce. L'annonce dira les missions clés, le lieu, les horaires, le contrat, les indispensables honnêtes. Le reste reste un outil de sélection."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez les deux fiches. Pour chacune, écrivez en marge : 3 indispensables, 2 souhaitables, 1 condition d'emploi à ne pas oublier dans l'annonce, 1 critère que le manager aurait pu vouloir et que la fiche refuse. C'est l'exercice de lecture d'un recruteur qui n'a pas mené le brief."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Fiche 1 : startup SaaS fictive « Nordic Flow », 18 personnes, Paris / hybride. Création de poste backend. Fiche 2 : PMI fictive « Ateliers Loire Métal », 55 personnes, replacement retraite d'un technicien de maintenance. Variante industrie du brief module 1."
            },
            {
              "block_type": "code",
              "content": "FICHE DE POSTE — Développeur ou développeuse backend\nEntreprise : Nordic Flow (startup SaaS, 18 personnes)\nRattachement : CTO    Équipe : 4 personnes produit / tech\nLieu : Paris 11e — hybride 3 jours sur site / semaine (règle équipe)\nContrat visé : CDI    Télétravail : 2 jours, pas full remote\nAstreintes : 1 semaine / 8, incidents production (à confirmer à l'offre)\nClassification / salaire : fourchette interne à valider RH / fondateur\n\nFinalité\nConcevoir, exposer et maintenir les API et services métier qui\nservent l'application, avec un niveau de qualité permettant des\nmises en production fréquentes sans régression majeure.\n\nMissions (6 premiers mois — création de poste)\n1. Concevoir et implémenter des API (socle actuel : Java ; Go\n   souhaitable) documentées et testées.\n2. Corriger les incidents de production avec le CTO, documenter.\n3. Écrire et maintenir les tests automatisés du périmètre confié.\n4. Participer aux rituels produit (planification, revue) : estimer,\n   alerter sur un délai, proposer une option technique.\n5. Relire le code des pairs et faire relire le sien.\n6. Améliorer un bout de dette technique priorisé, pas « refondre\n   le SI » seul.\n\nHors périmètre (6 mois)\nClosing commercial, recrutement, infogérance complète, mobile natif,\nmanagement d'équipe.\n\nRelations : CTO, 1 product manager, 1 développeur front, CS.\nMoyens : dépôt de code, CI, environnement de staging.\n\nProfil interne de sélection\nÉliminatoires : avoir déjà livré et maintenu du backend en\nconditions réelles (langage du socle ou transférable proche) ;\ntravailler 3 jours sur site.\nSouhaitables : Go, SaaS B2B, expérience d'astreinte déjà vécue.\nFormable : stack interne, métier du produit.\nInterdit : âge, photo, « culture ninja », écoles uniquement,\norigine, sexe. L'anglais écrit de documentation est souhaitable\nsi les libs le sont ; les réunions sont en français.\n\nCette fiche n'est pas une offre ni une promesse d'embauche."
            },
            {
              "block_type": "code",
              "content": "FICHE DE POSTE — Technicien ou technicienne de maintenance\nEntreprise : Ateliers Loire Métal (PMI, 55 personnes)\nRattachement : Responsable d'atelier\nLieu : site de [Ville] — présentiel atelier\nHoraires : 2×8    Astreinte : 1 week-end / 4 (point ouvert validé)\nContrat visé : CDI    Télétravail : non\nHabilitation : électrique à détenir ou à obtenir sous 90 jours\n               (parcours nommé, budget formation : oui / à confirmer)\nPermis B : exigé (déplacements ponctuels entre deux sites, 18 km)\n\nFinalité\nAssurer le dépannage et le préventif des équipements de production\nafin de limiter les arrêts non planifiés et de tenir le planning\nGMAO.\n\nMissions\n1. Dépanner (mécanique, base électrique) les équipements du site.\n2. Réaliser le préventif selon le planning GMAO et renseigner\n   chaque intervention.\n3. Alerter le responsable d'atelier sur une pièce critique ou un\n   risque sécurité.\n4. Accueillir et suivre un prestataire ponctuel sur une machine.\n5. Proposer un amélioration simple (accessibilité, gabarit, 5S\n   maintenance) — pas un projet methods à temps plein.\n\nHors périmètre\nGestion du stock pièces (repris par l'appro), achats, conduite de\nligne, relation client commerciale.\n\nRelations : responsable d'atelier, 8 opérateurs, appro, prestataires.\nMoyens : atelier, outillage, GMAO, EPI.\n\nProfil interne de sélection\nÉliminatoires : dépannage mécanique en autonomie sur un parc\ncomparable (pas « 15 ans » comme mur) ; travail en 2×8 ; permis B\n(déplacements sites) ; engagement sur le parcours habilitation si\nnon détenue.\nSouhaitables : GMAO déjà pratiquée, secteur métallurgie / agro.\nFormable : GMAO maison, parc spécifique (tuteur : sortant, 8 sem.).\nInterdit : âge (« comme Gérard », « pas un jeune »), sexe, résidence\ncomme filtre, apparence.\n\nCette fiche n'est pas une offre ni une promesse d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier la fiche startup pour l'industrie en changeant l'intitulé. Oublier 2×8 et astreintes dans la fiche maintenance. Mettre « bac+5 » éliminatoire chez le développeur sans lien. Exiger GitHub public. Exiger un homme à l'atelier. Promettre du full remote alors que la fiche dit 3 jours sur site."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le CTO veut un test technique : il devra être pertinent, annoncé, confidentiel dans ses résultats (module 3). Si l'usine est Seveso ou à habilitations multiples : RH et HSE valident les indispensables, vous ne les inventez pas. Si le second site tombe : le permis peut redevenir non indispensable ; on met à jour la fiche, on ne laisse pas un critère mort."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager industrie veut ajouter « 15 ans de chaudronnerie » en éliminatoire. Un CTO veut ajouter « école d'ingénieurs uniquement ». Rédigez les deux réponses, 4 lignes chacune, en proposant un critère de remplacement observable."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Industrie : « 15 ans » n'est pas un acte de travail. Remplacement : avoir déjà dépanné en autonomie un parc comparable et tenir le 2×8 ; la chaudronnerie fine passe en souhaitable si un tutorat de 8 semaines existe. Startup : l'école n'est pas le poste. Remplacement : avoir livré du backend en conditions réelles, tests, relecture ; le diplôme d'ingénieur, s'il reste, est souhaitable. Dans les deux cas, un mur d'années ou d'école mal justifié peut fonctionner comme un filtre d'âge ou d'origine scolaire sans lien nécessaire avec l'emploi : on ne l'écrit pas."
            }
          ],
          "position": 5
        },
        {
          "title": "Validation avec le manager et actualisation de la fiche",
          "description": "Faire valider, figer la version, et savoir quand reprendre la fiche pendant ou après le process.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez faire valider une fiche et un profil, gérer les corrections, et actualiser sans truquer un process en cours. Vous savez quand un changement de fiche impose de revoir l'annonce et les candidats déjà engagés."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une fiche non validée n'est pas une fiche : c'est un brouillon du recruteur. La validation n'est pas une politesse. C'est l'acte par lequel le manager assume les missions, les hors périmètre, les conditions et les critères. Sans cet acte, il rejettera la shortlist au motif que « ce n'est pas ce que je voulais », alors que c'était exactement ce que le silence avait laissé passer.\n\nValider, c'est dater. Un mail « ok pour moi » sur la version 3, avec le fichier en pièce, suffit dans la plupart des PME. Dans une ETI, un circuit (RH, N+2) peut s'ajouter. En cabinet, la validation du client est une pièce du mandat. Vous ne considérez pas un « c'est bien » en fin de réunion comme une validation du texte, parce que le texte n'existait pas encore.\n\nL'actualisation est normale. Un poste vit : une machine part, le remote change, une mission passe à un collègue. On met à jour la fiche d'organisation. En revanche, changer les critères de sélection au milieu des entretiens, pour coller à un candidat ou pour exclure un autre, n'est pas une actualisation : c'est un process biaisé, et potentiellement discriminatoire si le nouveau critère est illicite ou appliqué à géométrie variable.\n\nQuand un changement est réel (le besoin a changé), vous documentez : quoi, pourquoi, à quelle date, qui valide. Vous examinez l'effet sur l'annonce (doit-on la corriger pour ne pas induire en erreur ?) et sur les candidats en cours (information honnête, nouvelle adéquation). Vous ne laissez pas une annonce active qui décrit un autre emploi.\n\nAprès embauche, la fiche sert à l'intégration. Le recruteur junior n'en est plus le propriétaire, mais il a intérêt à transmettre la version validée à la personne qui accueille. Un écart entre le vendu au candidat et le vécu à J+15 est un échec de cadrage, pas seulement un échec de management."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Envoyez fiche + profil + (plus tard) projet d'annonce. Demandez une validation par section si le manager est bavard. Délai : 48 à 72 heures, relance datée. Versionnez (v1, v2). Après validation, freeze des critères pour la campagne. Toute demande de changement en cours de process : réunion courte, écrit, décision de poursuivre, d'informer les candidats, ou de stopper. Contrôle : la date de validation est sur le dossier du poste."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique : freeze des critères pendant une campagne. Obligation : ne pas introduire un critère interdit « en cours de route » ; ne pas laisser une offre active fausse (L. 5331-3, module 3). Politique interne : circuit de validation propre à l'entreprise."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI, poste de chef de projet. Version 1 validée. En milieu de shortlist, le N+2 exige « anglais C1 et 8 ans » qui n'étaient pas dans la fiche. Deux candidats déjà reçus n'ont pas ce niveau. Vous ne discriminez pas a posteriori. Vous faites une réunion : soit le besoin a vraiment changé (projet international nouveau) et l'on reprend process, annonce, information des candidats ; soit c'est une préférence tardive, et l'on tient la fiche validée. Vous documentez le choix. Vous ne « glissez » pas le C1 seulement sur le candidat que le N+2 n'a pas aimé."
            },
            {
              "block_type": "code",
              "content": "VALIDATION FICHE DE POSTE — circuit junior\n\nDocument : Fiche + profil    Version : ....    Date d'envoi : ....\nManager : ..........    RH : ..........    Autre : ..........\n\nSections validées : finalité / missions / hors périmètre /\nconditions / indispensables / souhaitables\n\nDemandes de correction : ......................................\nArbitrage fait : oui / non    Par : ..........    Date : ....\n\nFREEZE campagne : oui, à compter du ..........\nChangement en cours de process : interrompt le freeze\n→ écrit + effet candidats + effet annonce\n\nTransmission post-embauche à l'accueil : oui / non    Date : ...."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lancer l'annonce « en attendant la validation ». Empiler les versions sans freeze. Modifier la grille pour un CV. Oublier d'aligner l'annonce après un vrai changement. Ne jamais renvoyer la fiche à l'intégration. Prendre la colère d'un manager pour une actualisation de besoin."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui ne lit pas : réunion de 15 minutes sur le document partagé, validation en séance. Multi-décideurs : une validation conjointe, pas deux fiches. Poste confidentiel : validation restreinte, même rigueur. Intérim : toute modification de qualification, horaires ou lieu en cours de mission se recadre avec le client et le salarié concerné ; ce n'est plus seulement une fiche."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "L'annonce est en ligne depuis 10 jours. Le manager écrit : « En fait on veut quelqu'un de plus jeune, et du full remote. » Que faites-vous, dans l'ordre, en 8 lignes ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Recadrer « plus jeune » : critère d'âge interdit, n'entre ni dans la fiche ni dans le tri. 2. Traiter le full remote comme un possible vrai changement de conditions : est-ce une règle d'équipe validée, ou un caprice de sourcing ? 3. Si le remote change vraiment : nouvelle validation, mise à jour fiche, correction de l'annonce (ne pas laisser un présentiel obligatoire si le poste devient remote — allégation trompeuse). 4. Informer les candidats déjà en process des conditions réelles. 5. Ne pas appliquer le remote à géométrie variable. 6. Ne pas relancer une campagne sur l'âge. 7. Écrire tout cela. 8. Si le manager insiste sur l'âge : alerte RH, pas de « filtre discret »."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Construire le profil et la fiche de poste",
          "description": "Vérifier que vous distinguez les documents, classez les critères et construisez une sélection pondérée licite.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 15,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Construire le profil et la fiche de poste",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quel ordre professionnel est le plus solide une fois le brief validé ?",
                "question_type": "single_choice",
                "options": [
                  "A. Annonce, puis profil, puis fiche si quelqu'un a le temps.",
                  "B. Fiche de poste (ou mise à jour), profil de sélection, puis annonce.",
                  "C. Profil LinkedIn du manager, puis annonce, la fiche est facultative.",
                  "D. Grille de salaire, puis annonce, la fiche vient à l'intégration."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On décrit l'emploi, on en tire les critères internes, on communique ensuite. Publier d'abord produit un texte décorrélé du travail. La fiche n'est pas un luxe d'après embauche."
              },
              {
                "question": "Une compétence comportementale utile dans un profil est surtout…",
                "question_type": "single_choice",
                "options": [
                  "A. Un trait de caractère (« passionné, leader né »).",
                  "B. Une capacité observable dans une situation de travail, formulée par un verbe, un objet et un contexte.",
                  "C. Une note de feeling après le premier regard sur le CV.",
                  "D. Un synonyme de « culture d'entreprise »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Sans situation observable, le comportemental devient un biais. Le feeling et la « culture » ne sont pas des compétences."
              },
              {
                "question": "Le lieu de résidence comme filtre (« habite à moins de 20 minutes ») est…",
                "question_type": "single_choice",
                "options": [
                  "A. Un éliminatoire professionnel classique, pratique en PME.",
                  "B. Un souhaitable, à mettre dans l'annonce.",
                  "C. Un critère protégé : on décrit le lieu de travail et les horaires, on ne filtre pas sur la résidence.",
                  "D. Autorisé si on le formule « candidat local »."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "L. 1132-1 mentionne le lieu de résidence parmi les critères protégés. Reformuler « local » ne rend pas le filtre licite. On pose les faits du poste (site, horaires, déplacements)."
              },
              {
                "question": "À quoi sert principalement une pondération figée avant l'arrivée des CV ?",
                "question_type": "single_choice",
                "options": [
                  "A. À garantir mathématiquement l'absence de tout biais.",
                  "B. À discipliner la comparaison sur des critères nommés à l'avance, plutôt que de recaler les poids sur le candidat préféré.",
                  "C. À remplacer les entretiens.",
                  "D. À justifier de ne pas informer les candidats des méthodes utilisées."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La grille discipline, elle n'abolit pas le jugement et ne remplace pas l'entretien. L'information préalable sur les méthodes (L. 1221-8) n'est pas éludée par un tableau interne."
              },
              {
                "question": "Dans la fiche Armor Négoce, pourquoi un « hors périmètre » est-il indispensable ?",
                "question_type": "single_choice",
                "options": [
                  "A. Pour décorer le document RH.",
                  "B. Pour empêcher le poste fourre-tout (paie complète, commercial, informatique) et garder un profil tenable.",
                  "C. Parce que la loi impose une liste d'exclusions dans toute fiche.",
                  "D. Pour pouvoir payer moins."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le hors périmètre est un outil de cadrage, pas une obligation légale de forme, ni un levier salarial. Sans lui, la PME recrute un emploi impossible."
              },
              {
                "question": "Un CTO veut « école d'ingénieurs uniquement » pour un poste backend. Le remplacement le plus professionnel est…",
                "question_type": "single_choice",
                "options": [
                  "A. Garder l'école en éliminatoire, c'est un proxy de niveau.",
                  "B. Exiger un GitHub public très actif.",
                  "C. Exiger d'avoir déjà livré et maintenu du backend en conditions réelles, le diplôme passant en souhaitable s'il reste.",
                  "D. Exiger 10 ans d'expérience pour compenser."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "On sélectionne des actes de travail. L'école seule, le GitHub public imposé ou un mur d'années mal justifié ne sont pas de meilleurs proxies."
              },
              {
                "question": "En cours de shortlist, un N+2 ajoute un critère d'anglais C1 absent de la fiche validée, et l'applique seulement au candidat qu'il n'a pas aimé. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous appliquez le C1 à cette personne seulement, pour respecter la hiérarchie.",
                  "B. Vous documentez : soit le besoin a vraiment changé pour tous (reprise de process et information), soit le critère tardif n'est pas retenu ; pas de géométrie variable.",
                  "C. Vous fermez les yeux : l'anglais n'est jamais un problème juridique.",
                  "D. Vous baissez la note de « feeling » du candidat concerné, sans écrire l'anglais."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un critère doit être le même pour tous. L'anglais peut être un vrai critère d'emploi s'il a un lien ; ce qui est inacceptable est l'application ciblée et tardive, ou le feeling caché."
              },
              {
                "question": "Quelle affirmation sur L. 1221-6 est exacte au stade de la construction du profil ?",
                "question_type": "single_choice",
                "options": [
                  "A. On peut demander toute information « utile à l'ambiance d'équipe ».",
                  "B. Les informations demandées au candidat doivent avoir pour seule finalité d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire.",
                  "C. L. 1221-6 ne concerne que les questionnaires écrits, pas le brief.",
                  "D. L. 1221-6 autorise la photo si elle est « professionnelle »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le texte vise les informations sous quelque forme que ce soit. L'ambiance, la photo de convenance et le brief oral n'échappent pas au lien avec l'emploi. https://code.travail.gouv.fr/code-du-travail/l1221-6"
              },
              {
                "question": "Permis B : dans quel cas peut-il être un éliminatoire professionnel ?",
                "question_type": "single_choice",
                "options": [
                  "A. Par principe, pour tout poste en PMI.",
                  "B. Lorsque des déplacements réguliers sans alternative sont un fait du poste, comme deux sites distants à desservir.",
                  "C. Pour vérifier que la personne « a une vie structurée ».",
                  "D. Pour filtrer les candidats qui habitent trop loin, sans parler des déplacements."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le permis se justifie par l'emploi (déplacements). Il n'est pas un test de moralité ni un substitut au filtre de résidence."
              },
              {
                "question": "L'annonce est en ligne. Le manager veut « quelqu'un de plus jeune » et du full remote. Quelle combinaison est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Filtrer l'âge en silence et passer l'annonce en remote sans valider.",
                  "B. Recadrer l'âge (interdit), traiter le remote comme un possible vrai changement de conditions à valider, puis aligner fiche, annonce et candidats en cours.",
                  "C. Tout refuser, y compris le remote, parce qu'une fiche ne se touche jamais.",
                  "D. Fermer le poste : tout changement en cours est illégal."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'âge ne s'arbitre pas. Le remote peut être une actualisation légitime s'il est vrai et validé ; alors fiche et annonce doivent cesser de se contredire, et les candidats sont informés. Une fiche peut vivre ; un process ne se truque pas."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 3,
      "title": "Maîtriser le cadre légal du recrutement",
      "description": "Distinguer obligation, recommandation, politique interne et bonne pratique. Appliquer non-discrimination, questions pertinentes, RGPD, règles d'annonces, offre vs promesse, DPAE.",
      "lessons": [
        {
          "title": "Lire une règle : quatre niveaux, un réflexe",
          "description": "Ne plus confondre la loi, une fiche CNIL, un process interne et un usage de métier.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous classez n'importe quelle consigne en quatre niveaux : obligation légale, recommandation d'une autorité, politique interne, bonne pratique professionnelle. Vous savez ce qu'un junior peut appliquer seul et ce qu'il doit faire valider."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le recrutement français n'est pas un recueil de recettes. Une phrase entendue en open space (« on garde les CV 10 ans », « on ne prend pas les femmes en âge d'avoir des enfants », « le salaire dans l'annonce est obligatoire ») peut être fausse, datée, ou vraie seulement dans un cas.\n\nObligation légale : un texte (loi, règlement, Code du travail, RGPD) impose ou interdit. Exemple : interdiction d'écarter un candidat pour un critère de L. 1132-1. Vous n'y dérogez pas, même si un manager insiste.\n\nRecommandation d'autorité : CNIL, Défenseur des droits, Service-Public. Utile, souvent suivie par les juges et les contrôles, mais ce n'est pas toujours une durée ou un modèle unique « dans la loi ». Exemple : 2 ans de vivier (recommandation CNIL), distincte des 5 ans d'archivage probatoire liés à L. 1134-5.\n\nPolitique interne : charte, ATS obligatoire, qui signe les offres, délai de réponse. Elle s'applique chez cet employeur si elle reste légale.\n\nBonne pratique : répondre à tous les candidats, grille d'entretien, double regard. Personne ne vous condamnera pour l'absence d'une grille ; le métier, oui, si vous recrutez au feeling.\n\nSources utilisées dans ce module, vérifiées le 13/10/2026 : Code du travail numérique (L. 1132-1, L. 1221-6, L. 1221-8, L. 5331-3, L. 5331-4), Service-Public Entreprendre F39133 (02/10/2025), F39588 (12/03/2026), F23107, CNIL Guide recrutement et référentiel durées RH (publié 02/04/2026, MAJ 20/05/2026), Urssaf DPAE. Relisez le texte en vigueur le jour J : un article peut évoluer."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Devant une demande : 1) Quel texte ? 2) Obligation ou reco ? 3) Qui décide ici (RH, DPO, juridique) ? 4) Que documenter ? Si vous hésitez sur un critère d'âge, de santé, de photo, d'IA : vous ne publiez pas, vous escaladez. Un junior n'est pas un avocat ; il est un filtre de premier niveau."
            },
            {
              "block_type": "callout",
              "content": "Ne jamais inventer un délai légal « parce que tout le monde le dit ». Si la source n'est pas dans legal-sources.json ou sur Légifrance / Service-Public / CNIL, dites « à vérifier »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME 40 personnes. Le gérant : « Mets 25-35 ans, c'est un job dynamique. » Niveau : obligation (interdiction d'âge dans l'offre et à l'embauche, sauf exceptions étroites). Action : refuser le critère, proposer des exigences de poste (déplacements, horaires, permis si nécessaire)."
            },
            {
              "block_type": "code",
              "content": "RÉFLEXE JUNIOR\n1. Citer le besoin métier, pas la personne.\n2. Si un critère touche origine, sexe, âge, santé, religion, famille, apparence, résidence, etc. → STOP.\n3. Écrire les critères en compétences / contraintes du poste.\n4. Alerter le responsable recrutement / RH.\n5. Ne pas « traduire » la demande illicite en filtre ATS caché."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Appliquer une « habitude du précédent recruteur » comme si c'était la loi. Dire « c'est obligatoire » pour une charte interne. Minimiser : « c'était une blague »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En cabinet, le client n'est pas au-dessus de la loi française si le poste est en France. En intérim, s'ajoutent les règles du travail temporaire : vous vous appuyez sur l'agence, vous n'inventez pas le motif de recours."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez : (a) « Informer le candidat d'un test avant de le faire passer » ; (b) « Répondre sous 7 jours » ; (c) « Indiquer le salaire dans l'annonce » ; (d) « Ne pas demander le nombre d'enfants »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(a) Obligation (L. 1221-8, information préalable). (b) Politique interne ou bonne pratique, pas un délai légal unique de réponse aux CV. (c) Pas une obligation française consolidée au 13/10/2026 : directive UE 2023/970 en transposition ; Service-Public F39133 (02/10/2025) le dit clairement. Bonne pratique possible, future obligation à revérifier. (d) Obligation de ne pas demander d'information sans lien direct et nécessaire (L. 1221-6) et risque L. 1132-1 (situation de famille / grossesse)."
            }
          ],
          "position": 0
        },
        {
          "title": "Non-discrimination à l'embauche (L. 1132-1)",
          "description": "Connaître les critères protégés et les formes directe / indirecte.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous citez le principe : personne ne peut être écartée d'un recrutement pour un critère protégé. Vous distinguez discrimination directe et indirecte. Vous savez recadrer un manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'article L. 1132-1 du Code du travail (Code du travail numérique, consultation 13/10/2026) interdit d'écarter une personne d'une procédure de recrutement, notamment en raison de : origine ; sexe ; mœurs ; orientation sexuelle ; identité de genre ; âge ; situation de famille ou grossesse ; caractéristiques génétiques ; particulière vulnérabilité résultant de la situation économique ; appartenance ou non-appartenance, vraie ou supposée, à une ethnie, une nation ou une prétendue race ; opinions politiques ; activités syndicales ou mutualistes ; exercice d'un mandat électif ; convictions religieuses ; apparence physique ; nom de famille ; lieu de résidence ou domiciliation bancaire ; état de santé, perte d'autonomie ou handicap ; capacité à s'exprimer dans une langue autre que le français ; qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte.\n\nDiscrimination directe : on écarte ouvertement (« pas de femme », « pas de prénom maghrébin »). Indirecte : une règle en apparence neutre désavantage un groupe sans justification professionnelle réelle (exigence de « français langue maternelle » pour un poste sans enjeu linguistique réel).\n\nUne exigence peut être légitime si elle a un lien réel avec le poste (habilitation, langue de travail, permis si déplacements). Ce n'est pas une porte dérobée pour réintroduire l'âge ou le sexe."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille de critères avant sourcing. Chaque critère : lien avec les missions ? Mesurable ? Interdit ? Si un manager formule un stéréotype, vous reformulez en compétence. Vous tracez. Vous n'enregistrez pas « trop vieux » dans l'ATS."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale. Sanctions pénales possibles en cas de discrimination (Code pénal, articles 225-1 et suivants — à relire en cas de dossier contentieux, avec RH/juridique). Le junior alerte, il ne « gère pas le pénal » seul."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup. « On veut quelqu'un qui match la culture, des gens comme nous, 28 ans, cool. » Vous sortez l'âge. Vous définissez la « culture » en comportements au travail (feedback, travail hybride, astreintes produit), pas en style vestimentaire ou en origine."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Croire que « ce n'est écrit nulle part dans l'annonce » protège un tri oral. Utiliser la photo du CV comme critère. Googler la vie militante pour écarter."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Emplois d'artiste / mannequin : exceptions étroites pour le sexe dans l'offre (voir F39133). Condition d'âge imposée par la loi : rare, à faire confirmer par RH. Travailleurs handicapés : l'obligation d'emploi concerne certains employeurs ; le junior applique la politique et n'improvise pas un taux."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager refuse un candidat « parce qu'il habite trop loin, ça ne le fera pas ». Que vérifiez-vous avant d'exécuter ce refus ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le lieu de résidence est un critère protégé (L. 1132-1). Un refus « il habite à X » est risqué. En revanche, une exigence de présence sur site, d'astreinte, de temps de trajet maximal lié à l'organisation du travail peut être professionnelle si elle est réelle, dite, et appliquée à tous. Vous faites formuler la contrainte de poste (présence 5 j/5 à 6 h), pas le code postal. Si le manager vise un quartier ou une origine : STOP, alerte RH."
            }
          ],
          "position": 1
        },
        {
          "title": "Questions autorisées et interdites (L. 1221-6)",
          "description": "Lien direct et nécessaire avec l'emploi : le test de chaque question.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous appliquez L. 1221-6 : informations uniquement pour apprécier la capacité à occuper l'emploi ou les aptitudes, avec un lien direct et nécessaire. Le candidat répond de bonne foi aux questions licites."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Article L. 1221-6 (Code du travail numérique, article daté 01/05/2008, toujours en vigueur à la consultation du 13/10/2026) : les informations demandées, sous quelque forme que ce soit (entretien, formulaire, test, message), ne peuvent avoir d'autre finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Lien direct et nécessaire.\n\nService-Public (F1684, F39155) illustre : pas de questions sur l'état de santé, la situation familiale, l'adhésion syndicale, la vie sexuelle, le logement, les loisirs, lorsqu'elles n'ont pas ce lien. Un permis peut être demandé si le poste l'exige.\n\nUne question peut être maladroite sans être illicite ; une question « pour briser la glace » sur les enfants reste dangereuse. En cas de doute, ne pas poser."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant l'entretien, relisez le guide : chaque question se rattache à un critère de la grille. Interdit de rattraper « en off ». Si le candidat révèle une information personnelle, vous ne la notez pas et vous ne la transmettez pas au manager comme motif."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale (L. 1221-6). Ce n'est pas une « reco RH ». Le formulaire ATS est une « forme » au sens de l'article : les champs « date de naissance », « photo obligatoire », « situation familiale » sont à questionner avec les RH / DPO."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Préqual téléphonique, préparateur de commandes, 5 h – 13 h, port de charges, chariot élévateur. Licite : disponibilité sur ces horaires, habilitation chariot, capacité à tenir le rythme (mise en situation, pas diagnostic médical). Illicite : « Vous êtes enceinte ? », « Vous avez un dos fragile ? », « Votre mari peut vous déposer ? »"
            },
            {
              "block_type": "code",
              "content": "LICITE SI LE POSTE L'EXIGE          ILLICITE\nPermis B, déplacements clients        Âge, date de naissance « pour le feeling »\nAnglais professionnel, niveau attendu « Français langue maternelle »\nHabilitation, diplôme réglementé      Religion, pratiques alimentaires\nDisponibilité horaires / astreintes   Projet d'enfants, mariage\nPréavis, date de disponibilité        Adresse exacte pour « juger le quartier »\nPrétentions dans la fourchette        Compte bancaire, saisie, logement"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Noter « elle a parlé de ses enfants » dans le CR comme un moins. Demander une photo « pour le badge » avant l'embauche. Copier un questionnaire américain non adapté."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Vérification d'un titre autorisant le travail : c'est une obligation d'employeur au moment de l'embauche, pas un critère de tri des CV sur la nationalité. Le junior alerte RH, il n'écrit pas « Français uniquement » dans l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Parmi ces questions, lesquelles sortez-vous du guide d'entretien d'un chargé de clientèle en boutique ? 1) Décrivez une situation de client difficile. 2) Comptez-vous avoir des enfants cette année ? 3) Êtes-vous disponible les samedis ? 4) De quelle origine êtes-vous, les clients sont variés."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "On sort 2 et 4 (famille/grossesse, origine : L. 1132-1 et L. 1221-6). On garde 1 (compétence). On garde 3 si les samedis font partie du contrat, dite à tous, sans déduire la vie familiale."
            }
          ],
          "position": 2
        },
        {
          "title": "Méthodes, tests, confidentialité (L. 1221-8 et L. 1221-9)",
          "description": "Informer avant, rester pertinent, garder les résultats confidentiels.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez qu'un test, une mise en situation, un outil d'aide au recrutement doit être annoncé au candidat avant d'être utilisé, pertinent par rapport au poste, et que les résultats sont confidentiels."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L. 1221-8 : le candidat est expressément informé, préalablement à leur mise en œuvre, des méthodes et techniques d'aide au recrutement utilisées à son égard. Les résultats obtenus sont confidentiels. Les méthodes doivent être pertinentes au regard de la finalité poursuivie. L. 1221-9 complète le principe de pertinence pour l'évaluation.\n\nCela couvre tests de personnalité, mises en situation, épreuves techniques, outils algorithmiques s'ils aident au recrutement. « Expressément » : pas un lien caché dans CGU illisibles. « Préalablement » : avant le test, pas après le score.\n\nPertinence : un test de QI fantaisiste pour un poste d'opérateur, un graphologue, un thème astral : vous refusez. Une courte mise en situation de vente pour un vendeur : défendable si annoncée et identique pour tous."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dans la convocation : « L'entretien de 45 min comporte 15 min de mise en situation X. » Stockage des scores : accès limité (recruteur, manager du poste, RH). Pas de classement mural. Pas de transfert à un autre client ou un autre manager « par curiosité »."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale. La pertinence n'autorise pas n'importe quel gadget RH à la mode."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet. Un client veut un test de personnalité acheté en ligne, non expliqué, envoyé à 23 h. Vous : information claire, finalité, durée, ce qui sera transmis, droit de ne pas le faire et conséquence réelle. Si le test n'a aucun lien : vous le déconseillez par écrit au consultant senior / client."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Faire passer un test « pour voir ». Partager le PDF du test dans un WhatsApp d'équipe. Utiliser un score comme seul motif de refus sans grille métier."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "IA de ranking de CV : c'est une méthode d'aide au recrutement. Information préalable, pertinence, vigilance biais, supervision humaine. Ne pas inventer le détail du règlement européen applicable le jour J : le vérifier avec DPO/juridique. L. 1221-8 s'applique déjà."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager veut filmer les entretiens « pour ceux qui n'ont pas pu venir ». Que posez-vous comme conditions ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Information préalable, consentement éclairé, finalité, durée de conservation, accès, pas de diffusion. Si un candidat refuse, ce refus ne doit pas devenir un critère déguisé. En pratique, beaucoup d'entreprises interdisent l'enregistrement : politique interne. Escalade RH/DPO. Ne filmez pas « en douce »."
            }
          ],
          "position": 3
        },
        {
          "title": "RGPD et durées de conservation des candidatures",
          "description": "Base légale, information, droits, 2 ans vs 5 ans : ne pas les confondre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez qu'un CV est une donnée personnelle, que le candidat doit être informé, qu'il a des droits, et vous distinguez vivier (recommandation 2 ans) et archivage probatoire (5 ans, L. 1134-5)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Toute opération sur des données de candidats (collecte, tri, ATS, relance, CVthèque) est un traitement au sens du RGPD. Finalité : recrutement. Minimisation : pas de données inutiles. Sécurité : accès limité.\n\nInformation : qui traite, pourquoi, durée, destinataires, droits. Souvent : mention dans l'annonce, page carrière, e-mail de réception.\n\nDroits : accès, rectification, opposition, effacement dans les limites légales. Un junior n'envoie pas le dossier brut : ticket RH/DPO.\n\nCNIL, référentiel durées RH publié le 02/04/2026, mis à jour le 20/05/2026, et Guide du recrutement (30/01/2023) :\n- Candidat retenu : conservation en base active le temps de la procédure jusqu'à la signature, puis réemploi pour la gestion du personnel.\n- Candidat non retenu : archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins de preuve d'actions en discrimination (L. 1134-5) — la CNIL rattache cela à une obligation.\n- Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, pour les profils d'intérêt, sauf opposition — recommandation du guide, pas une durée unique « magique » du RGPD.\nBase active ≠ archive. L'archive n'est pas le vivier marketing."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ne constituez un vivier que si le candidat est informé. N'ajoutez pas « pour d'autres postes » en silence. Purgez selon la politique. Mot de passe ATS, pas de CV sur Drive perso."
            },
            {
              "block_type": "callout",
              "content": "2 ans vivier = recommandation CNIL. 5 ans archive = fondement L. 1134-5 selon le référentiel CNIL 2026. Ne dites pas « la loi impose de tout garder 2 ans en ligne sur l'ATS »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le gérant d'une TPE a 400 CV dans sa boîte mail depuis 2018. Risque : conservation excessive, sécurité nulle, exercice des droits impossible. Plan : informer à l'avenir, extraire ce qui est encore utile avec information, archiver ou supprimer le reste avec RH/DPO. Le junior ne supprime pas tout seul un historique contentieux."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Promettre « on efface tout dès le refus » alors que l'archive probatoire peut être nécessaire. Garder les CV « au cas où » 10 ans en base active. Transférer un CV à un copain d'une autre entreprise."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Cabinet : le client et le cabinet sont souvent chacun responsables ou co-responsables selon le contrat. Le candidat doit savoir qui voit son dossier. Intérim : données de mission, habilitations : durées parfois spécifiques, s'appuyer sur l'agence."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un candidat non retenu demande : « Effacez tout maintenant. » Que faites-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous n'improvisez pas un oui ou un non juridique. Vous transmettez au circuit DPO/RH. L'opposition au vivier est en principe à honorer. L'archive probatoire limitée, à accès restreint, peut être conservée pour le délai de recours. Vous accusez réception, vous ne discutez pas le motif du refus sous couvert d'effacement."
            }
          ],
          "position": 4
        },
        {
          "title": "Références, diplômes, réseaux sociaux",
          "description": "Vérifier sans enquêter sur la vie privée.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez quand et comment vérifier un diplôme ou une référence, et les limites d'une recherche sur internet."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Vérifier un diplôme ou une référence vise les aptitudes professionnelles : possible si pertinent, proportionné, et cohérent avec L. 1221-6. Bonne pratique : prévenir le candidat, surtout avant d'appeler l'employeur actuel (risque de mettre la personne en danger professionnel).\n\nRéseaux sociaux : un profil professionnel peut confirmer un parcours. Fouiller photos de vacances, opinions, religion, vie familiale : vous collectez des données hors finalité, souvent liées à des critères protégés. La CNIL, dans son guide recrutement, encadre ces usages : pas de collecte excessive, information, pas de décision infondée.\n\nUn « trou » sur un CV se clarifie en entretien, pas par un dossier parallèle Google."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Références : accord du candidat, questions professionnelles (missions, résultats, conditions de collaboration), compte rendu factuel. Diplômes réglementés : copie ou vérification auprès de l'organisme si le métier l'exige (santé, électricité, etc.). Réseaux : uniquement pages professionnelles, pas de faux profil pour « infiltrer »."
            },
            {
              "block_type": "callout",
              "content": "Pas de jurisprudence inventée ici. En cas de doute (enquête approfondie, casier, solvabilité) : RH/juridique. Certaines vérifications sont encadrées ou interdites selon le poste."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI. Manager : « Googles-le, j'ai vu qu'il militait. » Vous refusez d'en faire un motif (opinions politiques, L. 1132-1). Vous ramenez à la grille."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Appeler l'employeur actuel dès le premier CV. Ajouter le candidat en ami pour voir ses stories. Noter « profil Instagram trop festif »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Contrôle d'un titre de séjour : employeur, au moment de l'embauche, procédure dédiée. Pas un tri de CV sur le nom."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le candidat finaliste refuse que l'on contacte son employeur actuel. Que faites-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "C'est fréquent et légitime (confidentialité de sa recherche). Vous proposez une référence plus ancienne, un ancien manager, ou vous reportez la prise de référence après l'offre sous conditions. Vous n'en faites pas un « il a quelque chose à cacher » automatique. Vous documentez l'accord et le refus."
            }
          ],
          "position": 5
        },
        {
          "title": "Règles des offres d'emploi",
          "description": "Français, date, vérité, pas de mentions discriminatoires. Salaire : pas encore obligatoire en FR au 13/10/2026.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous rédigez une offre conforme : langue française, datée, non trompeuse, non discriminatoire. Vous savez que le salaire dans l'annonce n'est pas, à la date de vérification, une obligation interne française consolidée."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Fiche Service-Public Entreprendre F39133, vérifiée le 02/10/2025.\n- Rédaction en français si le travail s'effectue en France (L. 5331-4). Terme étranger sans équivalent : description française suffisante.\n- Date de publication (L. 5332-1).\n- Pas d'allégations fausses ou trompeuses sur l'existence du poste, la nature, la rémunération, le lieu (L. 5331-3).\n- Pas de mentions discriminatoires ; pas de sexe (sauf exceptions artistes/mannequins) ; pas de limite d'âge sauf cas imposés par la loi ou certains plans séniors (voir F39133).\n- Avant de lancer : vérifier priorités internes possibles (temps partiel L. 3123-3, réembauche économique L. 1233-45) avec les RH : le junior signale, il ne tranche pas seul.\nSalaire dans l'offre : Service-Public indique que ce n'est pas obligatoire mais qu'une directive européenne sur la transparence salariale (2023/970) est en cours de transposition. Au 13/10/2026, ne dites pas « c'est déjà obligatoire en France » sans relire le texte de transposition en vigueur le jour J. C'est une bonne pratique, et une future obligation à suivre."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Check-list avant publication : intitulé épicène ou H/F, missions vraies, contrat vrai, lieu vrai, date, pas d'âge/sexe, français, contact. Faire relire si vous doutez."
            },
            {
              "block_type": "callout",
              "content": "Obligation légale sur langue, vérité, non-discrimination, date. Salaire affiché : bonne pratique / droit UE en transposition, pas à présenter comme déjà obligatoire en FR sans vérification du jour J."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Annonce « vendeuse 20-25 ans, dynamique, photo exigée » : illicite (sexe, âge, donnée excessive). Correction : « Vendeur / vendeuse H/F, accueil et conseil, contrat, lieu, horaires samedi, expérience souhaitée en magasin. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier une vieille annonce. Promettre un télétravail que le manager refuse. Oublier de dater. Écrire « native speaker » sans besoin."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Offre confidentielle : toujours vraie, mais diffusion restreinte. Pas de faux poste pour « tester le marché » (L. 5331-3, existence de l'emploi)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Corrigez : « Digital Ninja, 2 ans max d'expérience, English only, salaire selon profil, Paris ou remote (on verra). »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Intitulé compréhensible en français + description. Pas de plafond d'âge déguisé (« 2 ans max » peut être un proxy d'âge : reformuler le niveau de poste). L'anglais comme compétence professionnelle, avec description française. Lieu et remote doivent être vrais. Salaire : fourchette si politique / bonne pratique, pas une obligation FR consolidée au 13/10/2026, mais « selon profil » vague nuit à l'attractivité et peut devenir trompeur."
            }
          ],
          "position": 6
        },
        {
          "title": "Offre de contrat, promesse unilatérale, DPAE",
          "description": "Ne pas engager l'entreprise par un message trop fort. Formalités d'embauche : rôle employeur.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez une proposition informelle, une offre de contrat et une promesse unilatérale. Vous savez que la DPAE est une obligation d'employeur, avant la prise de poste, au plus tôt 8 jours avant."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Service-Public Entreprendre F39588, vérifié le 12/03/2026 : la « promesse d'embauche » n'est pas obligatoire. Deux figures jurisprudentielles (not. Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104) :\n- Offre de contrat : proposition rétractable dans certaines conditions tant qu'elle n'est pas acceptée (retrait possible dans le délai laissé ou un délai raisonnable ; dommages-intérêts possibles si préjudice).\n- Promesse unilatérale : le contrat est considéré comme formé, il manque l'acceptation du candidat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse.\nPlus que le titre du PDF, c'est l'intention et le contenu (poste, rémunération, lieu, etc.). Un junior ne rédige pas une « promesse » sans RH/juridique.\nDPAE : F23107 et Urssaf. Obligatoire avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche. Copie ou accusé au salarié. C'est l'employeur (RH/paie), pas le junior isolé, qui la dépose. Le recruteur coordonne les dates pour que ce soit fait à temps."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Messages d'offre : « sous réserve de validation RH », éléments essentiels, délai de réponse, canal écrit. Pas de « tu es embauché » sur WhatsApp. Check-list de passage de relais vers RH (identité, date d'entrée, type de contrat)."
            },
            {
              "block_type": "callout",
              "content": "Ces notions d'offre/promesse ne sont pas définies par un article unique du Code du travail : elles viennent de la jurisprudence, expliquées par Service-Public. DPAE = obligation légale d'employeur."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le fondateur écrit au candidat : « C'est plié, on t'attend le 1er, 42 k€. » Puis il se rétracte. Selon les termes, l'entreprise peut être engagée. Le junior aurait dû faire passer une offre écrite validée, avec délai."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer un modèle trouvé sur internet intitulé « promesse d'embauche » pour « faire sérieux ». Oublier la DPAE jusqu'à J+3. Laisser le candidat démissionner sur un oral flou."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CDD, intérim, alternance : formalités spécifiques. Le junior ne rédige pas le contrat. Recrutement international : titre de séjour, à RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Que dites-vous à l'oral quand le manager dit « dis-lui qu'il a le poste, on verra le salaire plus tard » ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne confirmez pas l'embauche sans rémunération, date, validation. Vous dites au candidat : intérêt confirmé, offre écrite après validation, éléments essentiels à venir. En interne : pas d'engagement oral incomplet. Risque : candidat qui démissionne, promesse mal qualifiée, conflit."
            }
          ],
          "position": 7
        },
        {
          "title": "IA, cas pratiques et conduite à tenir",
          "description": "Outils automatisés, demandes illicites du manager, réflexe d'escalade.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 16,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous posez les questions de conformité avant d'utiliser une IA de tri, et vous traitez cinq demandes illicites fréquentes sans mentir ni exécuter."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un outil qui classe, note ou écarte des CV est une méthode d'aide au recrutement : L. 1221-8 (information, confidentialité, pertinence) + RGPD (finalité, biais, sécurité, droits). Le règlement européen sur l'IA peut qualifier certains usages de « haut risque » : ne pas inventer ici le détail des articles ; vérifier le régime applicable le jour J avec DPO/juridique. Supervision humaine obligatoire en pratique professionnelle : l'IA ne « refuse » pas seule.\n\nLe junior documente l'outil, ce qu'il fait, ce qu'il ne fait pas, et refuse un scoring sur des proxies discriminatoires (photo, prénom, âge inféré)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant activation : finalité, données utilisées, information candidats, droit de regard humain, journal des écarts. Demande manager illicite : reformuler, refuser le critère, alerter, tracer. Jamais de filtre fantôme."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un outil note plus bas les CV avec un congé parental. Biais de sexe / situation de famille. Vous stoppez l'usage, vous le signalez, vous retirez manuellement."
            },
            {
              "block_type": "code",
              "content": "CAS — CONDUITE\n1. « Mets une photo obligatoire. » → Non, donnée excessive / apparence (L. 1132-1, L. 1221-6). Annonce sans photo.\n2. « Demande si elle a des enfants. » → Non. Disponibilités horaires du poste, à tous.\n3. « Garde tous les CV 6 ans dans l'ATS actif. » → Non comme base active. Archive restreinte possible 5 ans (probatoire) ; vivier 2 ans reco + information.\n4. « L'IA a mis ce prénom en bas, on skip. » → Non. Reprise humaine sur critères métier. Alerte biais.\n5. « On publie l'annonce en anglais only pour un poste à Lyon. » → Non, L. 5331-4 : français + description. L'anglais peut être une compétence."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Faire confiance au « score de matching » sans lire le CV. Cacher au candidat qu'un algorithme a pré-trié."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Volume retail vs cadre rare : l'outil peut aider au planning, pas à discriminer plus vite."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut « juste » écarter les candidats de plus de 50 ans dans l'IA, « ce n'est pas dans l'annonce ». Réponse en cinq lignes."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Refus. L'âge est un critère protégé (L. 1132-1), y compris via un outil. Ce n'est pas plus légal parce que caché. Je n'active pas le filtre. Je propose des critères de poste (horaires, habilitations, astreintes). J'alerte mon responsable. Je trace l'échange. Je ne mens pas au manager sur « on verra au feeling » pour le faire quand même."
            }
          ],
          "position": 8
        },
        {
          "title": "Quiz — Cadre légal du recrutement",
          "description": "Quiz — Cadre légal du recrutement",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Cadre légal du recrutement",
            "passing_score": 80,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un critère d'âge dans un recrutement, en droit français :",
                "question_type": "single_choice",
                "options": [
                  "A. Est possible s'il n'est pas écrit dans l'annonce",
                  "B. Est en principe interdit à l'embauche (L. 1132-1), sauf exceptions étroites prévues par les textes",
                  "C. Est recommandé après 45 ans pour « protéger » le candidat",
                  "D. Relève seulement d'une charte interne"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 s'applique au recrutement. Un filtre ATS caché reste une discrimination. Les exceptions (âge légal, certains cas d'offres) sont étroites et à faire confirmer par RH."
              },
              {
                "question": "L. 1221-6 permet de demander :",
                "question_type": "single_choice",
                "options": [
                  "A. Toute information « pour mieux connaître la personne »",
                  "B. Uniquement des informations en lien direct et nécessaire avec l'emploi ou les aptitudes",
                  "C. La situation familiale si le poste a des horaires atypiques",
                  "D. Une photo pour humaniser le process"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le lien direct et nécessaire est le test. Les horaires se posent comme contrainte du poste, pas via la famille. La photo n'est pas justifiée au stade candidature."
              },
              {
                "question": "Avant un test de recrutement, vous devez :",
                "question_type": "single_choice",
                "options": [
                  "A. Informer expressément le candidat au préalable (L. 1221-8)",
                  "B. Le surprendre pour un résultat plus « vrai »",
                  "C. En informer seulement le CSE",
                  "D. Rien, si le test dure moins de 10 minutes"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-8 : information préalable expresse, résultats confidentiels, méthodes pertinentes. Pas d'exception « test court »."
              },
              {
                "question": "La durée de 2 ans pour un vivier de CV, selon la CNIL :",
                "question_type": "single_choice",
                "options": [
                  "A. Est une obligation unique du Code du travail",
                  "B. Est une recommandation (guide recrutement), distincte de l'archivage probatoire de 5 ans (L. 1134-5)",
                  "C. Interdit toute conservation au-delà de 6 mois",
                  "D. S'applique seulement aux cadres"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Référentiel CNIL RH 2026 et guide : 2 ans vivier = reco (information, opposition). 5 ans archive = rattachement L. 1134-5. Ne pas tout mélanger en base active."
              },
              {
                "question": "Indiquer le salaire dans une offre d'emploi en France, au 13/10/2026 :",
                "question_type": "single_choice",
                "options": [
                  "A. Est déjà une obligation pénale depuis 2020",
                  "B. N'est pas présenté par Service-Public comme déjà obligatoire ; une directive UE 2023/970 est en transposition — à revérifier le jour J",
                  "C. Est interdit car confidentiel",
                  "D. Est obligatoire seulement en CDD"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "F39133 (02/10/2025) : pas (encore) obligatoire, directive en cours de transposition. Bonne pratique possible. Ne pas enseigner une obligation interne française consolidée sans texte transposé vérifié."
              },
              {
                "question": "Une promesse unilatérale de contrat, d'après Service-Public F39588 (12/03/2026) :",
                "question_type": "single_choice",
                "options": [
                  "A. Est un e-mail informel sans effet",
                  "B. Vaut contrat déjà formé ; le retrait par l'employeur s'analyse en licenciement sans cause réelle et sérieuse",
                  "C. Est obligatoire avant tout CDI",
                  "D. Se confond toujours avec une offre rétractable"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Jurisprudence expliquée par Service-Public (Cass. soc. 21/09/2017). Ce n'est pas obligatoire d'en émettre une. Un junior ne la rédige pas sans RH."
              },
              {
                "question": "La DPAE doit être transmise :",
                "question_type": "single_choice",
                "options": [
                  "A. Dans les 8 jours après la prise de poste",
                  "B. Avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédant l'embauche",
                  "C. Uniquement pour les CDI",
                  "D. Par le candidat lui-même sur Service-Public"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Urssaf / F23107. Obligation d'employeur, tous contrats visés par les textes. Le recruteur coordonne, il ne « s'assoit pas dessus »."
              },
              {
                "question": "Écarter un CV parce que l'IA a mal noté un prénom :",
                "question_type": "single_choice",
                "options": [
                  "A. Est acceptable si l'outil est payant",
                  "B. Fait porter un risque de discrimination ; une reprise humaine sur critères métier s'impose",
                  "C. Est imposé par le RGPD",
                  "D. N'est un problème que si le candidat le découvre"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 + L. 1221-8 + RGPD. L'outil n'efface pas la responsabilité. Le secret ne légalise pas."
              },
              {
                "question": "Une offre d'emploi pour un poste à Nantes rédigée uniquement en anglais :",
                "question_type": "single_choice",
                "options": [
                  "A. Est plus moderne, donc licite",
                  "B. Méconnaît L. 5331-4 : français, description française si terme étranger",
                  "C. Est obligatoire dans l'IT",
                  "D. Est une simple reco France Travail"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 5331-4. L'anglais peut être une compétence requise, ce n'est pas la langue unique de l'offre."
              },
              {
                "question": "Un manager dit « pas de femme, le vestiaire n'est pas adapté ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Exécutez : c'est organisationnel",
                  "B. Refusez le critère de sexe, alertez RH, traitez l'accessibilité comme un sujet d'employeur, pas comme un filtre de candidatures",
                  "C. Publiez « H uniquement, vestiaire homme »",
                  "D. Attendez d'avoir des CV d'hommes pour « que ça se fasse tout seul »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Sexe = critère protégé. Un vestiaire se traite en conditions de travail / accessibilité, pas en discrimination à l'embauche. Le filtre « tout seul » est une discrimination indirecte assumée."
              },
              {
                "question": "Les résultats d'un test de recrutement :",
                "question_type": "single_choice",
                "options": [
                  "A. Peuvent être affichés pour que l'atelier vote",
                  "B. Sont confidentiels (L. 1221-8)",
                  "C. Appartiennent au candidat qui peut les publier, donc à tout le monde",
                  "D. Doivent être détruits dans l'heure"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Confidentialité légale des résultats. La conservation suit ensuite RGPD / politique, pas un affichage collectif."
              },
              {
                "question": "Demander un permis B :",
                "question_type": "single_choice",
                "options": [
                  "A. Est toujours discriminatoire",
                  "B. Est possible s'il a un lien direct et nécessaire avec l'emploi (déplacements)",
                  "C. N'est possible qu'après l'embauche",
                  "D. Doit se faire via le casier judiciaire"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-6 : pertinence. Un permis exigé pour un poste 100 % sédentaire sans déplacement n'est pas justifié."
              },
              {
                "question": "La priorité de réembauche après licenciement économique (L. 1233-45) :",
                "question_type": "single_choice",
                "options": [
                  "A. Est tranchée seul par le junior dans l'ATS",
                  "B. Doit être signalée aux RH avant de lancer un externe ; le junior ne « règle » pas le droit individuel",
                  "C. N'existe plus",
                  "D. Interdit tout recrutement pendant 5 ans"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "F39133 : le junior alerte RH. Il ne décide pas un droit du salarié licencié."
              },
              {
                "question": "« On ne motive jamais un refus, la loi l'interdit » :",
                "question_type": "single_choice",
                "options": [
                  "A. Vrai : motiver est pénalement interdit",
                  "B. Faux : il n'y a pas d'obligation générale de motiver, mais pas d'interdiction de donner un motif professionnel ; la discrimination reste interdite",
                  "C. Vrai seulement en CDI",
                  "D. Faux : il faut toujours un recommandé de 4 pages"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Pas d'obligation générale de motiver un refus de candidature. Un motif professionnel peut être une bonne pratique. Un motif discriminatoire est illicite."
              },
              {
                "question": "Vous n'êtes pas sûr d'un article. Conduite professionnelle :",
                "question_type": "single_choice",
                "options": [
                  "A. Inventer une règle « pour rassurer le manager »",
                  "B. Relire Légifrance / Service-Public / CNIL, qualifier obligation vs reco, escalader RH si besoin",
                  "C. Copier le premier forum RH",
                  "D. Appliquer le droit américain, plus strict"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est le réflexe enseigné dans ce module. Inventer une obligation est une faute professionnelle."
              }
            ]
          },
          "position": 9
        }
      ]
    },
    {
      "position": 4,
      "title": "Construire une stratégie de recrutement",
      "description": "Choisir les canaux, le calendrier et le budget d'un recrutement en lisant le marché, en respectant les obligations à signaler aux RH, et en distinguant politique interne et bonne pratique.",
      "lessons": [
        {
          "title": "Lire le marché de l'emploi avant d'ouvrir un poste",
          "description": "Relier l'intitulé, le bassin, le contrat et la tension du métier au choix des canaux et à un délai réaliste.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez décrire le marché d'un poste en trois couches (intitulé, bassin, contrat), distinguer un métier en tension d'un métier abondant, et en déduire des conséquences opérationnelles : canaux, délai, implication du manager, vigilance salariale. Vous savez aussi ce que vous ne devez pas inventer : un chiffre de tension, un délai « moyen du marché », une statistique de conversion."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une stratégie de recrutement n'est pas une liste de jobboards. C'est une lecture du marché, puis un choix de moyens adaptés au besoin déjà cadré (fiche de poste, critères, délai, budget). Sans cette lecture, le recruteur junior ouvre les mêmes canaux pour un commercial sédentaire en CDI, un technicien de maintenance de nuit et un profil produit rare. Il promet un calendrier qu'il ne tiendra pas et il expose l'entreprise à un process trop long, trop cher, ou trop pauvre en candidatures utiles.\n\nLe marché de l'emploi, pour un poste donné, se lit en trois couches. Première couche : l'intitulé et ses synonymes. Un « chargé de clientèle BtoB » n'est pas un « business developer ». Un « technicien de maintenance industrielle » n'est pas un « agent de maintenance immobilière ». Si vous cherchez le mauvais nom, vous lisez le mauvais marché. Deuxième couche : le bassin d'emploi et le lieu de travail. Recruter un préparateur de commandes dans une zone logistique dense n'est pas recruter le même métier dans une commune isolée, avec les mêmes horaires et le même transport. Troisième couche : le contrat, le rythme et le niveau. Un CDD de trois mois, un CDI de jour et un CDI en 3×8 n'attirent pas les mêmes personnes. Ces trois couches déterminent si une annonce suffira, ou s'il faudra sourcer, coopter, passer par l'intérim ou un cabinet.\n\nUn métier est dit « en tension » lorsque les employeurs peinent à pourvoir les postes, parce que les compétences sont rares, géographiquement concentrées, fortement sollicitées, ou peu attractives aux conditions proposées. Cette notion n'est pas une obligation légale. C'est un constat de marché. France Travail, les branches professionnelles, les observatoires de métiers et, en interne, l'historique des recrutements de l'entreprise, fournissent des diagnostics. Vous ne devez pas inventer un taux de tension, un nombre de candidats « moyens » ou un délai « du marché ». Vous reliez le constat disponible au choix des canaux, au réalisme du délai annoncé au manager, et à la discussion salariale avec les RH.\n\nLa lecture du marché a une conséquence directe sur le rôle du recruteur junior. Si le poste est abondant (nombreuses candidatures spontanées ou réponses d'annonces sur des postes similaires récents), une diffusion d'offre bien rédigée, plus un vivier interne, peuvent suffire. Si le poste est tendu, l'annonce seule est souvent insuffisante : il faut un plan multicanal, un sourcing actif, parfois un cabinet ou de l'intérim, et un manager disponible pour accélérer les décisions. Dans tous les cas, le choix des canaux est une politique interne ou une bonne pratique, pas une obligation légale — sauf lorsqu'une obligation particulière doit être signalée aux RH, notamment une priorité de réembauche après licenciement économique."
            },
            {
              "block_type": "callout",
              "content": "Ne présentez jamais un chiffre de marché, un délai « moyen » ou un taux de conversion si vous ne l'avez pas sous la main dans une source interne ou institutionnelle. Inventer une statistique pour convaincre un manager n'est pas professionnel. En cas de doute, dites ce que vous observez (volume d'offres comparables, historique interne) et ce que vous ne savez pas encore."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant d'ouvrir le moindre canal, vous constituez une mini-note de marché, même courte, que vous pouvez montrer au manager et aux RH. Ordre de travail :\n\n1. Relire la fiche de poste et l'intitulé retenu. Lister deux ou trois synonymes réellement utilisés dans les offres (pas des anglicismes décoratifs).\n2. Identifier le lieu de travail, le télétravail éventuel, les horaires, le type de contrat et la date de prise de poste souhaitée.\n3. Consulter l'historique interne : postes proches pourvus dans les 12 à 24 derniers mois, canaux qui ont produit des embauches, délais constatés, difficultés notées. C'est souvent la source la plus fiable pour un junior.\n4. Regarder les offres comparables actuellement en ligne (intitulé, bassin, contrat) pour comprendre le langage du marché et le niveau d'exigence habituel — sans copier une annonce concurrente, et sans en déduire un salaire « obligatoire ».\n5. Qualifier le poste : abondant, intermédiaire, tendu. Cette qualification est un jugement professionnel étayé, pas un label officiel.\n6. En déduire une première hypothèse de canaux et un délai réaliste, à valider avec le manager et les RH.\n7. Signaler immédiatement aux RH tout élément juridique à vérifier avant diffusion : licenciement économique récent et priorité de réembauche possible, obligation d'emploi de travailleurs handicapés, accord interne sur la mobilité, règle de publication interne préalable."
            },
            {
              "block_type": "code",
              "content": "NOTE DE MARCHÉ — trame junior (à classer dans le dossier de poste)\n\nPoste : [intitulé]\nContrat / lieu / horaires : [ ]\nSynonymes d'intitulé : [ ]\nHistorique interne (postes proches) : [délai, canaux, difficultés]\nLecture externe (offres comparables, sans statistique inventée) : [ ]\nQualification : abondant / intermédiaire / tendu\nHypothèse de canaux : [ ]\nDélai réaliste proposé au manager : [ ]\nPoints à signaler aux RH (priorité de réembauche, accord interne, etc.) : [ ]\nDate de la note / auteur : [ ]"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Alizé Services, PME de 45 personnes en services aux entreprises, le directeur commercial demande un « business developer » en CDI, prise de poste « dès que possible », pour un portefeuille de TPE de la région lyonnaise. Le recruteur junior, Léa Moreau (prénom d'emprunt), relit la fiche : il s'agit d'un commercial sédentaire et terrain, BtoB, 2 à 5 ans d'expérience, véhicule de service, pas d'anglais quotidien. Elle cherche l'historique interne : le dernier commercial a été embauché il y a 14 mois via une annonce France Travail + Indeed, en sept semaines, après 38 candidatures dont 6 préqualifiées. Elle observe des offres comparables sous « commercial BtoB », « chargé d'affaires TPE » et « attaché commercial ». Elle classe le poste en « intermédiaire » : l'annonce devrait produire un flux, mais le délai de sept semaines n'est pas « dès que possible ». Elle propose au manager un plan annonce + cooptation + vivier, un délai cible de six à huit semaines, et une discussion RH sur la fourchette salariale affichée ou non dans l'offre (bonne pratique, pas une obligation française consolidée au 13/10/2026)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ouvrir LinkedIn et un jobboard le jour même, sans note de marché, parce que le manager « a urgence ». Reprendre le même mix de canaux que le recrutement précédent, alors que le métier, le lieu ou le contrat ont changé. Qualifier un poste de « tendu » pour justifier un cabinet cher, sans autre élément que l'impatience du manager. Annoncer un délai de quinze jours sur un métier rare. Inventer un « 40 candidats en moyenne » pour rassurer. Oublier de demander aux RH s'il existe une priorité de réembauche ou une publication interne obligatoire. Confondre le marché national d'un métier et le bassin local du poste."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En startup, le marché se lit aussi à l'aune de la marque employeur et du package (intéressement, remote, titre). Un intitulé « Product Manager » peut attirer un flux visuellement abondant et un vivier réellement pauvre si le niveau demandé est senior pour un salaire junior. En ETI industrielle, le marché se lit souvent par diplômes reconnus, habilitations (électrique, CACES) et 3×8 : le volume d'offres en ligne sous-estime la difficulté réelle. En cabinet ou intérim, vous lisez le marché du client et le vôtre : disponibilité des intérimaires, délais de mission, concurrence d'autres agences. Dans une zone rurale, le transport et le logement pèsent davantage que l'intitulé. Dans tous ces cas, la méthode reste la même : trois couches, historique interne, pas de statistique inventée, signalement RH des obligations."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous êtes chargé de recrutement junior dans une ETI de maintenance industrielle. Le responsable d'atelier ouvre un poste de technicien de maintenance mécanique, CDI, 3×8, site à 18 km d'une ville moyenne, habilitation électrique souhaitée. Le manager dit : « Mettez l'annonce partout, on a besoin de quelqu'un dans quinze jours. » Rédigez une note de marché d'une page (trame ci-dessus) et formulez, en cinq lignes, ce que vous répondez au manager et ce que vous signalez aux RH. Vous n'avez pas de chiffre de tension sous la main."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "La note doit d'abord recadrer l'intitulé (technicien de maintenance mécanique / électromécanicien selon les usages locaux), le contrat (CDI 3×8) et le lieu (site excentré : le bassin n'est pas « la France »). Sans statistique, vous pouvez écrire : historique interne à compléter avec les RH (dernier recrutement similaire, canaux, délai) ; offres comparables observées sous les synonymes, souvent avec habilitations ; qualification probable « tendu ou intermédiaire-tendu » en raison des 3×8, de l'habilitation et du lieu — jugement à confirmer, pas un label. L'hypothèse de canaux ne peut pas être « partout » : annonce ciblée, intérim possible en passerelle, écoles/CFP, cooptation atelier, éventuellement cabinet spécialisé si le délai et le budget le justifient. La réponse au manager : quinze jours n'est pas un délai réaliste pour un CDI 3×8 habilitation sur un site excentré ; vous proposez un délai cible après lecture de l'historique, et une solution intérim de transition si la production l'exige. Le signalement RH : vérifier priorité de réembauche si licenciement économique antérieur sur des postes proches ; vérifier les règles internes de publication ; cadrer le budget intérim vs cabinet vs annonce. Vous n'inventez aucun taux de conversion."
            },
            {
              "block_type": "code",
              "content": "RÉPONSE TYPE AU MANAGER (extrait)\n\n« Je diffuse dès que la fiche et les RH sont alignés, mais quinze jours pour un CDI 3×8 avec habilitation sur ce site n'est pas un délai que je peux garantir. Je vous propose : 1) note de marché et mix de canaux demain ; 2) intérim de transition si l'atelier ne peut pas attendre ; 3) point de suivi hebdomadaire. Je vérifie aussi avec les RH s'il existe une priorité de réembauche ou une publication interne obligatoire avant les canaux externes. »"
            }
          ],
          "position": 0
        },
        {
          "title": "Recrutement interne et recrutement externe : arbitrer",
          "description": "Savoir quand chercher d'abord en interne, ce qui est obligation, accord ou politique, et comment articuler les deux sans perdre de temps.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous distinguez recrutement interne (mobilité, promotion, réaffectation) et recrutement externe. Vous savez que le choix des canaux externes n'est pas une obligation légale, alors qu'une priorité de réembauche, un accord ou une règle interne de publication peuvent créer une obligation à traiter avant d'ouvrir le marché. Vous savez arbitrer avec le manager et les RH, pas seul."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Recruter en interne, c'est pourvoir le poste avec une personne déjà liée à l'entreprise : salarié en mobilité, en promotion, en réaffectation, parfois en retour d'absence. Recruter en externe, c'est chercher une personne qui n'occupe pas déjà ce contrat dans l'organisation : candidature, sourcing, intérim, cabinet, école. Les deux ne s'opposent pas mécaniquement. Un process sérieux peut publier en interne et préparer les canaux externes en parallèle, à condition de respecter l'ordre fixé par le droit applicable, les accords et la politique de l'entreprise.\n\nLe recruteur junior confond souvent trois natures de règles. Première nature : l'obligation légale. Après certains licenciements économiques, une priorité de réembauche peut s'appliquer au bénéfice de salariés licenciés. Ce n'est pas au junior d'en fixer seul le périmètre, la durée ou la liste des bénéficiaires. C'est une obligation à signaler immédiatement aux RH, avant d'ouvrir un jobboard ou un cabinet. Deuxième nature : l'accord collectif, le règlement ou la politique RH interne. Beaucoup d'entreprises imposent une publication interne pendant quelques jours, un passage par la mobilité, ou une validation du comité de direction au-delà d'un niveau de poste. Ce n'est pas « la loi » au sens du Code du travail : c'est une règle de l'employeur, que vous appliquez. Troisième nature : la bonne pratique. Même sans règle écrite, commencer par le vivier interne et la cooptation évite de payer un cabinet pour un profil qui existe déjà à deux bureaux de là.\n\nL'arbitrage interne / externe n'est pas qu'une question d'éthique managériale. Il a des effets concrets : délai, coût, climat social, montée en compétence, risque de frustration si un candidat interne n'est pas reçu, risque de « copier-coller » si l'on promeut sans évaluer. Un candidat interne doit être évalué avec la même rigueur qu'un candidat externe, sur la capacité à occuper l'emploi (article L. 1221-6 du Code du travail : les informations demandées doivent avoir un lien direct et nécessaire avec l'emploi). Il n'a pas un droit automatique au poste, sauf dispositif particulier que les RH vous indiqueront.\n\nEnfin, l'interne ne « coûte rien » que sur le papier. Un salarié promu laisse un poste derrière lui. Un plan de recrutement sérieux prévoit cette vacance en cascade, ou assume de la traiter plus tard. Le junior qui « gagne deux semaines » en nommant un interne sans plan de remplacement crée un second recrutement dans l'urgence. L'arbitrage se fait donc à trois : manager du poste, manager du candidat interne, RH."
            },
            {
              "block_type": "callout",
              "content": "Obligation vs choix de canaux. La priorité de réembauche (lorsqu'elle s'applique) est une obligation à faire traiter par les RH. Publier sur Indeed, LinkedIn, un jobboard spécialisé, une école ou un cabinet est un choix de politique interne ou une bonne pratique. Ne dites jamais à un manager : « On n'a pas le droit de recruter en externe avant d'avoir postulé en interne » si vous n'avez pas vérifié l'accord ou la politique. Demandez aux RH."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Demander aux RH, dès le cadrage du besoin : existence d'une priorité de réembauche à vérifier ; accord ou politique de mobilité / publication interne ; vivier de salariés volontaires à la mobilité ; éventuelle obligation d'emploi ou engagement interne à relayer auprès de certains publics (ce n'est pas au junior d'improviser un critère illicite).\n2. Lister les viviers internes : mobilité déclarée, anciens candidats internes, personnes en CDD ou intérim déjà connues sur le site, apprentis en fin de cycle.\n3. Convenir avec le manager d'un ordre : publication interne seule pendant X jours (si politique), ou interne + préparation externe en parallèle.\n4. Informer les candidats internes du process, des critères et du calendrier — même information de méthode que pour l'externe (article L. 1221-8 : le candidat est informé préalablement des méthodes d'aide au recrutement).\n5. Évaluer l'interne avec la grille du poste, pas avec « on le connaît ». Documenter le refus interne avec le même soin que le refus externe.\n6. Si l'interne est retenu, ouvrir immédiatement le plan de remplacement du poste laissé vacant.\n7. Si l'externe est ouvert, ne pas abandonner l'interne en cours de route sans réponse."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nimvia, startup produit de 28 personnes, ouvre un poste de Customer Success. La CEO veut « quelqu'un du marché, qui a déjà fait du SaaS ». Le support interne compte une salariée en CDI depuis 18 mois, Clara Dufour (nom d'emprunt), qui a demandé une mobilité. La politique interne, écrite, prévoit 7 jours de publication sur l'intranet avant tout jobboard. Le recruteur junior publie en interne, reçoit Clara, l'évalue sur la grille (gestion de portefeuille, priorisation, écrit professionnel). Il informe la CEO que la politique interne s'applique, que Clara doit être reçue, et que les canaux externes peuvent être préparés (annonce rédigée, pas encore diffusée). Clara n'est pas retenue : le niveau d'anglais client est insuffisant, critère professionnel annoncé. Le refus est expliqué, tracé, et l'annonce part le 8e jour. Le choix des jobboards reste une politique / bonne pratique. Aucune priorité de réembauche n'a été signalée par les RH."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ouvrir LinkedIn le jour J parce que le manager « ne veut personne de l'équipe ». Promettre le poste à un interne pour « dépanner » sans évaluation. Oublier de demander la priorité de réembauche. Traiter le candidat interne sans grille, puis le recaler sans trace, ce qui alimente un conflit social. Diffuser en externe pendant la période de publication interne obligatoire prévue par la politique. Croire que l'interne est gratuit et négliger le poste laissé vacant. Inversement, bloquer tout canal externe « par principe » alors qu'aucune règle ne l'impose et que le métier est tendu."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Licenciement économique récent : stoppez-vous et saisissez les RH avant tout canal externe. Intérim longue durée sur le poste : la personne déjà en mission est un vivier interne de fait ; l'évaluer n'interdit pas de comparer. Groupe multi-sites : l'interne peut être un salarié d'un autre établissement ; vérifiez mobilité géographique et statut. Représentation du personnel : certains postes ou certaines étapes sont informés selon les usages de l'entreprise ; encore une fois, les RH pilotent. Cabinet de recrutement : le contrat avec le cabinet ne vous dispense pas des règles internes de l'entreprise cliente."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager d'une PME de services vous écrit : « Pas la peine de publier en interne, personne n'est au niveau, allez directement sur les jobboards. » La politique RH, que vous avez sous les yeux, impose 5 jours ouvrés de publication intranet. Les RH vous ont aussi demandé de signaler tout licenciement économique des 24 derniers mois. Que faites-vous, dans l'ordre, et que répondez-vous au manager ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne suivez pas l'instruction du manager sur les canaux, parce que la publication interne est ici une politique interne applicable, pas une option. Vous confirmez aux RH l'ouverture du poste et posez la question de la priorité de réembauche. Vous publiez en interne 5 jours ouvrés, vous préparez l'annonce externe sans la diffuser. Vous répondez au manager que la politique s'applique, que cela n'interdit pas de préparer l'externe, et que si aucun interne n'est au niveau, le process externe partira au terme des 5 jours. Vous ne dites pas que « la loi interdit l'externe » : ce n'est pas exact. Vous ne qualifiez pas les internes « hors niveau » avant de les avoir évalués."
            }
          ],
          "position": 1
        },
        {
          "title": "Cartographier les canaux : jobboards, écoles, cabinets, intérim, approche directe, cooptation",
          "description": "Connaître le rôle, le coût, le délai et les limites de chaque canal, et les choisir selon le poste, pas selon l'habitude.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez décrire six familles de canaux (jobboards et France Travail, écoles et organismes de formation, cabinets, intérim, approche directe, cooptation), ce qu'elles produisent, ce qu'elles coûtent en temps et en argent, et dans quel cas les activer. Vous savez que cette cartographie est un outil de politique interne et de bonne pratique, pas un menu imposé par la loi."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un canal de recrutement est un moyen d'entrer en contact avec des personnes susceptibles d'occuper l'emploi. Il n'existe pas de canal « magique ». Il existe des canaux adaptés à un intitulé, un bassin, un contrat, un délai et un budget. Le recruteur junior qui « met partout » dilue son message, sature le manager de profils inadaptés et ne sait plus d'où vient la candidature utile. Le recruteur junior qui n'utilise qu'un seul canal (souvent LinkedIn ou un jobboard généraliste) se prive d'un vivier entier.\n\nLes jobboards et France Travail sont des canaux de diffusion d'offre : le candidat vient à vous. Ils conviennent bien lorsque le métier est lisible, le contrat attractif et le volume de réponses attendu suffisant. Ils conviennent mal seuls lorsque le métier est rare, mal nommé, ou que les personnes en poste ne consultent pas les annonces. France Travail reste un relais utile, y compris pour des publics éloignés de l'emploi ou des bassins locaux : ce n'est ni un canal « bas de gamme » ni une obligation pour chaque poste, sauf politique interne ou partenaire particulier.\n\nLes écoles, CFA, universités et organismes de formation alimentent les profils juniors, alternants, stagiaires et parfois la formation continue. Le délai n'est pas celui d'une annonce : il suit les calendriers de promotion. Un cabinet de recrutement (approche directe, chasse, rétrocession) vend un service de recherche et d'évaluation. Il se justifie sur un profil rare, confidentiel, senior, ou lorsque l'interne n'a pas la bande passante. Ce n'est pas un aveu d'échec : c'est un achat de moyen. L'intérim (agence de travail temporaire) pourvoit un besoin de flexibilité, un remplacement, un pic, ou une passerelle vers un CDI. Confondre cabinet et intérim est une erreur de débutant : l'un cherche souvent un contrat durable pour le client ; l'autre met à disposition un salarié de l'agence, dans un cadre légal propre que les RH et l'agence maîtrisent.\n\nL'approche directe (sourcing actif, messages, appels) va chercher des personnes qui n'ont pas postulé. Elle est décisive sur les métiers en tension et les profils en poste. Elle exige du temps, une écriture soignée et le respect du RGPD et des conditions d'utilisation des plateformes. La cooptation mobilise les salariés : un collaborateur oriente une personne de son réseau. C'est souvent un canal rapide et de qualité si la prime, les critères et l'éthique sont clairs (pas de pression, pas de discrimination, même grille d'évaluation). La cooptation est une politique interne, pas une obligation légale.\n\nAucun de ces canaux n'exonère des règles de non-discrimination (article L. 1132-1) ni des règles de l'offre lorsqu'il y a annonce (français, mentions interdites, allégations — voir le module offres). Le canal change le mode d'entrée ; il ne change pas le droit applicable au recrutement."
            },
            {
              "block_type": "callout",
              "content": "Le choix d'un canal n'est pas une obligation légale, sauf règle interne, accord, marché public ou priorité à faire traiter par les RH. Un jobboard n'est pas « plus légal » qu'une approche directe. En revanche, chaque canal a des contraintes propres : contrat de l'agence d'intérim, contrat du cabinet, conditions d'utilisation d'un réseau, information RGPD des personnes sourcées."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque poste, vous remplissez une carte de canaux avant de dépenser du temps ou de l'argent. Interlocuteurs : manager (où a-t-il déjà recruté ? qui connaît-il ?), RH (contrats cadre cabinet/intérim, politique de cooptation, budget), éventuellement communication interne (écoles partenaires). Documents : fiche de poste, note de marché, grille tarifaire interne des prestataires. Contrôle : chaque canal activé a un responsable, une date de lancement, un critère d'arrêt (trop de volume, trop peu, trop cher)."
            },
            {
              "block_type": "code",
              "content": "CARTE DES CANAUX — à cocher selon le poste\n\nCanal              | Utile si…                              | Coût principal         | Risque junior\n-------------------|----------------------------------------|------------------------|---------------------------\nJobboards / FT     | Métier lisible, flux attendu           | Crédit d'annonce, temps| Annonce trop large\nÉcoles / CFA       | Junior, alternance, calendrier promo   | Temps de relation      | Trop tard dans l'année\nCabinet            | Rare, confidentiel, senior, urgence    | Honoraires             | Brief flou, doublon interne\nIntérim            | Flexibilité, remplacement, passerelle  | Coefficient agence     | Confondre avec un CDI\nApproche directe   | Profils en poste, tension, confidentialité | Temps recruteur | Message générique, CGU\nCooptation         | Équipe engagée, métier connu en interne| Prime éventuelle       | Copinage, biais, pression\nVivier / CVthèque  | Candidats déjà connus, réemploi        | Temps + RGPD           | Relancer hors durée / opposition"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Forges & Maintenance du Centre, ETI industrielle, doit remplacer un électromécanicien de nuit parti en retraite. Le responsable d'atelier a déjà « mis une annonce Indeed il y a deux ans, ça n'avait rien donné ». Le recruteur junior cartographie : jobboard généraliste = canal secondaire (visibilité, pas le cœur) ; France Travail et jobboard industrie = oui ; CFA et école de maintenance = oui, mais pour un junior ou une alternance, pas pour remplacer un expert de nuit en trois semaines ; intérim = oui en passerelle pour tenir le planning ; cabinet spécialisé industrie = à arbitrer selon budget ; approche directe sur les profils en poste dans un rayon de 40 km = oui ; cooptation atelier = oui, avec consigne claire (même grille, pas de promesse). Le mix retenu n'est pas « partout » : cinq canaux, chacun avec une fonction."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Activer un cabinet « pour se couvrir » sur un poste junior abondant. Utiliser l'intérim comme unique stratégie d'embauche CDI sans en parler aux RH. Envoyer la même annonce sur dix jobboards et ne plus savoir d'où viennent les CV. Oublier la cooptation parce qu'il n'y a pas de prime, alors que l'équipe peut relayer. Faire de l'approche directe en copiant un message type sans le poste. Promettre à un école 4 embauches que le manager n'a pas validées. Négliger France Travail par snobisme. Signer un contrat cabinet sans vérifier qu'un interne n'est pas déjà en cours d'évaluation."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Poste confidentiel (remplacement d'une personne encore en poste) : l'annonce publique peut être dangereuse ; l'approche directe ou le cabinet sont souvent plus adaptés, avec un brief de confidentialité. Volume (10 préparateurs) : jobboards + intérim + écoles, process de sessions collectives, pas de chasse individuelle. Alternance : calendrier scolaire, référent pédagogique, règle interne d'accueil. Marché public ou entreprise sous accord particulier : les RH vous indiquent d'éventuels relais obligatoires. International : offre en français si le travail s'effectue en France (article L. 5331-4), même si un canal anglophone est utilisé en complément."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour chacun des trois besoins suivants, choisissez 3 canaux maximum et justifiez en une phrase : (1) CDI assistant commercial, PME centre-ville, métier lisible, délai 8 semaines ; (2) CDD 4 mois préparateur de commandes, entrepôt, pic d'activité ; (3) CDI product designer senior, startup, profil rare, confidentialité du produit."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Jobboards + France Travail + cooptation / vivier : métier lisible, flux probable, pas besoin d'un cabinet. (2) Intérim en tête + jobboards + cooptation entrepôt : le CDD court et le pic appellent une mise à disposition rapide ; un cabinet CDI n'a pas de sens. (3) Approche directe + cabinet éventuel + réseau / cooptation produit : l'annonce seule exposerait le produit et attirerait un flux hors cible. Dans les trois cas, vous n'invoquez aucune obligation légale de canal ; vous proposez un mix. Vous signalez aux RH, pour les trois, la question de priorité de réembauche si elle n'a pas été tranchée."
            }
          ],
          "position": 2
        },
        {
          "title": "Construire et animer un vivier de candidats",
          "description": "Tenir une CVthèque utile, informer les personnes, respecter la recommandation CNIL de durée et le droit d'opposition.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez ce qu'est un vivier, à quoi il sert dans une stratégie, comment l'alimenter et l'animer, et comment le distinguer d'une base « fourre-tout ». Vous savez présenter la durée de 2 ans comme une recommandation CNIL, pas comme une durée unique imposée par le RGPD, et vous savez informer, tracer le dernier contact, et honorer une opposition."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un vivier (ou CVthèque active) est un ensemble de personnes déjà identifiées, dont les données sont conservées pour de futurs recrutements, avec une finalité claire, une information des personnes, et une durée qui n'est pas infinie. Ce n'est pas le dossier des candidats du poste en cours : ce dossier-là vit le temps de la procédure, puis, pour les non-retenus, un archivage intermédiaire à des fins de preuve. La CNIL, dans son référentiel durées de conservation RH (publié le 2 avril 2026, mis à jour le 20 mai 2026) et dans son guide du recrutement, distingue ces traitements. Candidat non retenu : archivage intermédiaire de 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires, en lien avec l'article L. 1134-5 du Code du travail — il s'agit d'une conservation de preuve, pas d'une autorisation de relancer la personne comme si elle était en vivier. Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même.\n\nCette distinction change le quotidien du junior. Vous n'avez pas le droit, au nom du « on ne sait jamais », de laisser tous les CV en base active indéfiniment, ni de relancer dans 4 ans une personne non informée. Vous n'avez pas non plus l'obligation de tout supprimer au 24e mois si un autre traitement légitime (preuve) s'applique : encore une fois, ce sont deux bases, deux durées, deux finalités. En pratique, l'outil ATS doit permettre de séparer : process en cours ; archive probatoire ; vivier actif.\n\nAnimer un vivier, ce n'est pas envoyer une newsletter mensuelle générique. C'est : qualifier la personne (métier, bassin, contrat visé, dernier échange) ; informer de la conservation et de ses droits ; relancer lorsque un poste réel correspond ; tracer le dernier contact, qui fait courir la durée recommandée de 2 ans ; retirer sans délai en cas d'opposition. Un vivier mort (CV non relus, personnes jamais informées, doublons) coûte plus qu'il ne rapporte : il crée un risque RGPD et il donne au manager l'illusion d'un stock.\n\nLe vivier s'inscrit dans la stratégie : c'est le premier canal à interroger avant d'acheter une annonce ou un cabinet. Il ne remplace pas une lecture de marché. Un vivier de commerciaux sédentaires ne pourvoit pas un poste d'ingénieur maintenance. Alimenter le vivier est un travail continu, pas une tâche de fin de process : chaque entretien non retenu, chaque sourcing courtois, chaque candidature spontanée pertinente peut, si la personne est informée et d'accord, rejoindre le vivier."
            },
            {
              "block_type": "callout",
              "content": "Recommandation d'autorité, pas durée unique obligatoire. La CNIL recommande jusqu'à 2 ans à compter du dernier contact pour un vivier, avec information et possibilité d'opposition (guide recrutement, 30/01/2023, et référentiel 2026). Le RGPD n'écrit pas « 2 ans » comme une règle unique. L'archivage 5 ans des non-retenus est une logique probatoire (L. 1134-5), distincte du vivier. En cas de doute sur un cas réel, relisez le référentiel CNIL et demandez aux RH / DPO."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Vérifier avec les RH / DPO le paramétrage de l'ATS : finalités, durées, mentions d'information, registre.\n2. Pour chaque personne entrée en vivier : mention d'information (pourquoi, combien de temps, droits), support de recueil, date du dernier contact.\n3. Qualifier : métier, niveau, bassin, contrats acceptés, points de vigilance professionnels (disponibilité), jamais de commentaire discriminatoire.\n4. Interroger le vivier en premier à chaque ouverture de poste, avec la même grille que les autres canaux.\n5. Relancer de façon ciblée (un poste réel), pas par campagne fourre-tout.\n6. En cas d'opposition ou de demande de suppression du vivier : retirer de la base active ; conserver seulement ce que la politique probatoire impose, si elle s'applique, dans l'espace d'archive prévu.\n7. Purge périodique : personnes sans contact depuis la durée prévue, doublons, données inutiles."
            },
            {
              "block_type": "code",
              "content": "FICHE VIVIER — champs minimaux (exemple de politique interne)\n\nIdentité professionnelle : prénom, nom, coordonnées\nPostes / métiers cibles :\nBassin / mobilité :\nContrats envisagés :\nDate d'entrée en vivier :\nDate du dernier contact (fait courir la durée recommandée) :\nMention d'information envoyée le :\nOpposition : non / oui (date, traitement)\nCommentaire professionnel (faits, pas de critères protégés) :\nSource d'entrée : candidature / sourcing / spontanée / interne"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Alizé Services a 200 CV dans un dossier partagé « CVthèque 2019-2026 », sans mention d'information, avec des commentaires du type « trop âgée » et « accent ». Le nouveau recruteur junior refuse d'utiliser ce dossier comme vivier. Avec les RH, il isole les process des 5 dernières années pour l'archive probatoire, supprime les commentaires illicites, et reconstruit un vivier propre : 22 personnes informées par e-mail, qualifiées, dernier contact daté. Sur le poste commercial, 3 personnes du vivier sont relancées ; l'une d'elles entre en préqualification. Le dossier ancien n'est plus une source d'approche."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Relancer un CV de 2018 « au cas où ». Écrire « on garde votre CV 10 ans ». Mélanger archive de preuve et vivier actif. Noter un critère protégé dans la fiche. Oublier d'informer une personne sourcée sur LinkedIn avant de la ranger en CVthèque. Promettre au manager « on a 400 profils en base » alors que 380 ne sont plus contactables licitement. Traiter une opposition comme une simple « désinscription newsletter » sans retirer la fiche active."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidature spontanée : même régime d'information et de durée ; ce n'est pas un chèque en blanc. Intérimaire connu : les données relevant de l'agence et celles de votre vivier interne ne se confondent pas ; respectez les deux cadres. Candidat interne : la mobilité se gère souvent dans un traitement RH distinct ; ne mélangez pas avec la CVthèque externe sans consigne. Opposition pendant un process en cours : vous cessez les relances vivier ; le process du poste ouvert a sa propre base légale et sa propre durée, à faire dire par les RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager vous demande d'appeler « tous les CV refusés depuis 4 ans pour le poste de commercial ». Que répondez-vous ? Distinguez ce que vous pouvez faire, ce que vous signalez aux RH, et ce que vous refusez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez d'appeler « tous les CV depuis 4 ans » comme un vivier. Au-delà de la durée recommandée de 2 ans à compter du dernier contact, et surtout sans information ni traçabilité, l'approche n'est pas conforme à la recommandation CNIL et au principe de durée limitée. Les dossiers de non-retenus peuvent exister en archive probatoire 5 ans : ce n'est pas une liste d'appels marketing. Vous proposez : extraire du vivier actif (informé, dernier contact < durée prévue, pas d'opposition) les profils commerciaux pertinents ; pour le reste, demander aux RH / DPO. Vous ne citez pas un « droit d'appeler 5 ans » qui n'existe pas."
            }
          ],
          "position": 3
        },
        {
          "title": "Budget, calendrier et indicateurs de suivi",
          "description": "Chiffrer les moyens, poser un calendrier réaliste et suivre un plan sans inventer d'indicateurs trompeurs.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez construire un budget de recrutement (temps interne, annonces, prestataires, cooptation, outils), un calendrier par étapes, et un tableau de suivi simple. Vous savez ce qu'un junior peut suivre (volume, délais, source des embauches) et ce qu'il ne doit pas inventer (taux « du marché », coût par embauche fantaisiste)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un plan de recrutement sans budget et sans calendrier n'est pas un plan : c'est une intention. Le budget n'est pas seulement la facture du cabinet. Il comprend le temps du recruteur, le temps du manager (entretiens), les crédits d'annonces, les éventuelles primes de cooptation, les honoraires, le coefficient d'intérim, les déplacements, les tests payants, et parfois l'onboarding. Un junior qui « offre » un cabinet au manager sans ordre de mission RH crée un engagement financier qu'il n'a pas le pouvoir de signer.\n\nLe calendrier se construit à l'envers de la date de prise de poste souhaitée, en ajoutant des étapes réelles : cadrage, publication interne éventuelle, diffusion, sourcing, préqualification, entretiens, décision, préavis du candidat, DPAE et intégration (la DPAE est une obligation de l'employeur avant la prise de fonction, au plus tôt dans les 8 jours précédant l'embauche — fiche Service-Public F23107 ; le junior coordonne, il ne « fait pas » la DPAE seul). Sur un métier tendu, le préavis du candidat en poste pèse souvent plus que le temps d'annonce. Promettre une arrivée au 1er du mois alors que le préavis est de trois mois n'est pas un calendrier, c'est une fiction.\n\nLe suivi sert à décider, pas à décorer un slide. Les indicateurs utiles au junior sont simples : nombre de candidatures reçues par canal, nombre de préqualifiés, nombre d'entretiens manager, délais entre étapes, source du candidat retenu, motifs de refus documentés (professionnels). Un taux de conversion n'a de sens que si le dénominateur est clair et le volume suffisant pour ne pas raconter n'importe quoi. Vous n'inventez pas de benchmark. Vous comparez à l'historique interne lorsqu'il existe.\n\nBudget, calendrier et suivi sont des outils de gouvernance. Ils rendent visibles les arbitrages : si le manager veut un profil rare pour dans trois semaines sans intérim et sans cabinet, le tableau montre l'incohérence. Le junior n'impose pas ; il formalise. Le choix de dépenser reste RH / direction. Le choix des canaux reste une politique interne. Le calendrier légal (DPAE, information des méthodes, non-discrimination) n'est pas compressible parce que le budget est trop juste."
            },
            {
              "block_type": "callout",
              "content": "La DPAE est une obligation de l'employeur, pas du recruteur junior isolé (Service-Public F23107, Urssaf). Vous la placez dans le calendrier d'embauche et vous coordonnez avec les RH. Vous ne la « sautez » pas pour gagner deux jours. Vous n'inventez pas non plus un coût moyen d'embauche national."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Lister les postes ouverts et la date de prise de poste souhaitée (souhait, pas promesse).\n2. Pour chaque poste : étapes, responsables, durées estimées à partir de l'historique interne si disponible.\n3. Associer à chaque canal un coût (temps ou argent) et un critère d'arrêt.\n4. Faire valider budget et calendrier par les RH avant engagement prestataire.\n5. Tenir un suivi hebdomadaire d'une page : pipeline, blocages, décisions à prendre.\n6. En fin de recrutement : source de l'embauche, délai réel, écart au calendrier, enseignement pour le prochain poste — sans statistique décorative."
            },
            {
              "block_type": "code",
              "content": "CALENDRIER TYPE — CDI (adapter, ne pas copier comme norme)\n\nS-0  Cadrage manager + RH, note de marché, priorités à signaler\nS0   Publication interne si politique / préparation annonce\nS1   Diffusion + sourcing + interrogation vivier\nS2   Préqualifications\nS3-4 Entretiens manager / éventuel 2e tour\nS5   Décision, offre, négociation\nS6+  Préavis candidat (variable) + DPAE + intégration\n\nSuivi hebdo : candidatures / préqualifiés / entretiens / blocage / décision attendue"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Pixeline, startup produit, veut un développeur backend « pour le sprint du 15 ». Le calendrier réel, posé par le recruteur : 10 jours de sourcing, 1 semaine d'entretiens, préavis probable d'un à trois mois. Le budget : crédits LinkedIn Recruiter déjà payés, pas de cabinet cette année, temps fondateur = 4 entretiens max. Le suivi montre, au bout de 12 jours, 7 conversations, 2 entretiens, 0 offre. La décision n'est pas « on communique plus fort » : c'est un arbitrage (élargir le niveau, ouvrir un cabinet, glisser le sprint, mission freelance). Le tableau a servi à décider, pas à cacher le délai."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Annoncer une date d'arrivée sans intégrer le préavis. Engager un cabinet par e-mail sans bon de commande RH. Suivre 25 indicateurs et n'en lire aucun. Afficher un « taux de transformation 12 % » calculé sur 8 CV. Oublier le temps manager dans le calendrier. Compresser la préqualification pour « aller plus vite », puis noyer le manager sous des profils non filtrés. Omettre la DPAE dans le rétroplanning d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Multi-postes identiques : un calendrier de sessions (journées de recrutement) est plus efficace qu'un suivi individu par individu. Intérim : le calendrier de mission (démarrage, renouvellement, éventuel CDI) n'est pas celui d'un CDI classique. Cabinet : le calendrier contractuel (présentations garanties, exclusivité) s'ajoute au vôtre ; lisez le contrat. Startup en levée de fonds : le budget recrutement peut être gelé d'une semaine à l'autre ; le plan doit prévoir un stop/go."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut un chargé de clientèle en CDI, arrivée au 1er du mois dans 18 jours, budget annonces seulement, pas d'intérim. Construisez un calendrier en 8 lignes qui montre le conflit, et proposez deux options chiffrées en temps (pas en euros inventés)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le calendrier doit faire apparaître : cadrage (déjà trop tard si on veut 18 jours), diffusion, délai de réponses, préqualification, entretiens, décision, préavis (souvent supérieur à 18 jours si la personne est en poste), DPAE. Le conflit est visible : 18 jours ne couvrent pas un CDI + préavis. Option A : tenir le CDI, glisser la date d'arrivée, budget annonces + sourcing temps interne. Option B : intérim ou CDD relais pour la date, CDI en parallèle — à valider RH (l'intérim a un coût, vous ne l'inventez pas, vous le faites chiffrer). Vous ne promettez pas l'impossible pour « faire plaisir »."
            }
          ],
          "position": 4
        },
        {
          "title": "Construire un plan de recrutement multicanal",
          "description": "Assembler marché, interne/externe, canaux, vivier, budget et calendrier en un plan unique, suivi et arrêtable.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez rédiger un plan de recrutement d'une à deux pages : objectif, contraintes, mix de canaux, ordre de lancement, budget, calendrier, indicateurs, points de vigilance juridiques à signaler. Vous savez qu'un plan multicanal n'est pas « plus de canaux », c'est une combinaison justifiée, avec des critères d'arrêt."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un plan multicanal répond à une question simple : par quels moyens, dans quel ordre, avec quels moyens financiers et humains, allons-nous pourvoir ce poste dans un délai réaliste, sans discrimination, et sans engager l'entreprise à l'aveugle ? Il n'est pas un copier-coller du plan précédent. Il n'est pas non plus une collection de canaux activés le même matin. Chaque canal a une fonction : produire du volume, produire de la rareté, tenir un planning, respecter une politique interne, ou relayer une école partenaire.\n\nLa construction du plan suit une logique, pas une inspiration. On part du besoin cadré et de la note de marché. On tranche interne / externe avec les RH (politique, priorité de réembauche à signaler). On choisit un mix court (souvent trois à cinq canaux) plutôt qu'une liste de quinze. On séquence : ce qui est obligatoire ou politique d'abord (publication interne, traitement RH d'une priorité), puis le canal le plus probable au meilleur coût, puis les canaux de renfort si le pipeline est insuffisant à une date dite. On affecte un responsable et un critère d'arrêt à chaque canal. On pose le calendrier et le budget. On définit le suivi.\n\nLe plan est un document de travail, pas un contrat avec le candidat. Il ne crée pas une promesse d'embauche. Il ne fixe pas le salaire comme une obligation d'annonce (indiquer le salaire dans l'offre n'est pas une obligation consolidée en droit français au 13/10/2026 ; la directive (UE) 2023/970 est en transposition — bonne pratique / future obligation, à relire le jour J). Il doit en revanche être compatible avec le droit : non-discrimination dans le choix des viviers et des écoles, offres conformes, données des sourcés traitées selon le RGPD et les recommandations CNIL.\n\nUn bon plan se révise. Si, à la date de revue, le canal A n'a produit aucun préqualifié, on arrête A ou on change le message ; on n'ajoute pas D, E et F par panique. Le junior qui empile les canaux sans revue crée du bruit. Le junior qui attend la fin du mois pour dire que « ça n'a pas marché » a perdu le calendrier."
            },
            {
              "block_type": "callout",
              "content": "Le plan de recrutement est un outil interne. Il ne se confond ni avec l'offre d'emploi, ni avec une promesse d'embauche (Service-Public F39588 : l'offre de contrat et la promesse unilatérale sont des notions jurisprudentielles distinctes ; une promesse d'embauche n'est pas obligatoire). Ne faites pas signer un « plan » au candidat."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ordre imposé au junior : (1) fiche de poste + critères ; (2) note de marché ; (3) questions RH (priorité de réembauche, publication interne, budget, prestataires cadrés) ; (4) mix et séquence ; (5) rédaction du plan une page ; (6) validation manager + RH ; (7) lancement ; (8) revue à date fixe. Outils : ATS pour tracer la source, tableur si l'ATS est pauvre. Contrôle : aucune diffusion externe avant le feu vert RH sur les points d'obligation."
            },
            {
              "block_type": "code",
              "content": "PLAN DE RECRUTEMENT — structure unique\n\n1. Poste, contrat, lieu, date souhaitée, date réaliste\n2. Qualification de marché (abondant / intermédiaire / tendu) + sources (interne, pas de stats inventées)\n3. Interne / externe : politique, priorité de réembauche (signalée aux RH : oui/non, réponse)\n4. Mix de canaux (3 à 5) : fonction, date de lancement, responsable, critère d'arrêt\n5. Vivier : interrogé le [date], N profils pertinents, N relances\n6. Budget : temps interne, annonces, prestataires (à valider)\n7. Calendrier des étapes et revue\n8. Indicateurs de suivi\n9. Vigilances : non-discrimination, RGPD vivier, offre conforme, DPAE en fin de course"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Alizé Services, le plan du commercial BtoB tient en une page : marché intermédiaire (historique interne 7 semaines) ; publication intranet 5 jours (politique) ; pas de priorité de réembauche selon RH ; mix = vivier (3 relances) + cooptation (mail interne J+0 après publication) + France Travail / Indeed (J+5) + approche directe légère si moins de 4 préqualifiés au 15e jour ; pas de cabinet ; revue le 15e jour ; budget = crédits d'annonces déjà souscrits + temps recruteur. Le manager signe le délai de 6 à 8 semaines. Le plan est suivi dans l'ATS (champ « source »)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Rédiger le plan après avoir déjà diffusé. Mettre dix canaux pour « couvrir ». Oublier le critère d'arrêt. Ne pas tracer la source, donc ne jamais apprendre. Faire valider le plan par le seul manager, sans RH, alors qu'un cabinet est prévu. Copier un plan industrie sur un poste startup. Ajouter un canal discriminatoire (« uniquement cette école de fils de… ») : illicite, L. 1132-1."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Urgence réelle de production : le plan peut placer l'intérim en canal 1, le CDI en canal 2, sans confondre les deux contrats. Confidentialité : plan sans annonce publique. Volume : plan de campagne (calendrier de sessions, un message, plusieurs postes). Multi-sites : un plan par bassin, pas un plan national aveugle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le squelette d'un plan (structure ci-dessus) pour un CDI chargé de recrutement junior, ETI, bassin provincial, délai 10 semaines, budget sans cabinet. Indiquez explicitement la ligne « priorité de réembauche »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le squelette doit contenir les 9 blocs. Marché : probablement intermédiaire (métier RH junior lisible, bassin à qualifier par l'historique). Interne : mobilité assistant RH possible ; publication interne selon politique ; ligne explicite « priorité de réembauche : demandée aux RH le [date], réponse [ ] — obligation à traiter avant canaux externes si elle s'applique ». Mix raisonnable : vivier + interne + jobboards RH / France Travail + cooptation + écoles RH si calendrier compatible ; approche directe limitée ; pas de cabinet. Calendrier 10 semaines : réaliste si préavis inclus. Budget : temps + annonces. Indicateurs : sources, préqualifiés, délais. Vigilances L. 1132-1, L. 1221-6, CNIL vivier, offre en français."
            }
          ],
          "position": 5
        },
        {
          "title": "Trois plans de recrutement complets",
          "description": "Appliquer la méthode à une PME de services (commercial), une ETI industrielle (maintenance) et une startup produit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez lire et transposer trois plans complets, différents par le marché, le mix et le calendrier, mais identiques par la structure et par la distinction obligation / politique / bonne pratique. Vous saurez produire le même niveau de détail sur un quatrième poste."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les trois cas ci-dessous sont fictifs. Ils illustrent que la structure du plan reste stable alors que le mix change. La PME de services a un métier lisible et un budget serré : l'annonce et la cooptation portent l'essentiel. L'ETI industrielle a un métier en tension locale, des habilitations et des 3×8 : l'intérim, l'école et l'approche directe pèsent davantage. La startup produit a un profil rare et une marque encore faible : l'approche directe et le cadrage du package pèsent plus que le jobboard généraliste.\n\nDans les trois plans, une ligne est identique : la priorité de réembauche n'est pas tranchée par le junior. Elle est signalée aux RH. Si les RH confirment qu'elle s'applique, le canal externe attend le traitement RH. Si les RH confirment qu'elle ne s'applique pas, les canaux choisis (jobboards, écoles, cabinets, intérim, approche directe, cooptation) restent des choix de politique interne et de bonne pratique. Aucun de ces trois plans n'invente un taux de tension, un coût moyen d'embauche ou un délai « de marché » national.\n\nVous observerez aussi que le plan n'est pas l'annonce. L'annonce, lorsqu'elle existe, est un canal parmi d'autres, soumis aux règles du module suivant (français, date, non-discrimination, allégations). Le plan n'est pas davantage une offre de contrat faite au candidat. Enfin, le suivi est sobre : mieux vaut six indicateurs lus chaque semaine que vingt indicateurs jamais regardés.\n\nCes modèles sont des supports de travail. Vous les adaptez : un commercial en 3×8 n'est pas le commercial d'Alizé ; un site industriel en région parisienne n'est pas Forges & Maintenance du Centre ; une startup avec une marque forte n'a pas le même mix que Pixeline. La compétence visée n'est pas d'apprendre les trois scénarios par cœur, c'est de remplir la structure sans trou."
            },
            {
              "block_type": "callout",
              "content": "Noms d'entreprises, de villes précises de sites et de personnes : fictifs. Ne pas recopier ces plans dans un dossier réel sans les recadrer avec les RH. Ne pas extraire de ces cas une statistique."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez chaque plan avec la même grille : le marché est-il justifié sans chiffre inventé ? L'interne et la priorité de réembauche sont-ils traités ? Chaque canal a-t-il une fonction et un critère d'arrêt ? Le calendrier intègre-t-il préavis et DPAE ? Le budget est-il validable par les RH ? Les vigilances juridiques sont-elles nommées (L. 1132-1, RGPD/CNIL, offre) ?"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les trois plans ci-dessous tiennent lieu d'exemple. Ils sont rédigés au niveau attendu d'un recruteur junior dans un dossier de poste."
            },
            {
              "block_type": "code",
              "content": "PLAN 1 — PME services / commercial\nEntreprise fictive : Alizé Services, 45 personnes, Lyon et proche couronne\nPoste : commercial BtoB TPE-PME, CDI, terrain + sédentaire, véhicule de service\nDate souhaitée manager : « dès que possible »\nDate réaliste proposée : 6 à 8 semaines + préavis du candidat retenu\nMarché : intermédiaire. Historique interne : dernier commercial pourvu en 7 semaines, annonce + FT, 6 préqualifiés. Synonymes : chargé d'affaires TPE, attaché commercial BtoB. Pas de statistique externe inventée.\nInterne / externe : publication intranet 5 jours (politique RH). Mobilité : 1 assistante commerciale intéressée, à évaluer. Priorité de réembauche : signalée aux RH le 3 mars 2026, réponse RH « ne s'applique pas sur ce poste ».\nMix (séquence) :\n  1. Vivier (3 profils commerciaux informés, dernier contact < 12 mois) — relance J0 interne / J5 externe\n  2. Cooptation salariés — mail interne J0, prime selon politique, même grille\n  3. France Travail + 1 jobboard généraliste déjà souscrit — J5\n  4. Approche directe légère (réseau local) — si < 4 préqualifiés à J15\n  5. Pas de cabinet, pas d'intérim sauf si le directeur commercial bascule en urgence (décision RH)\nCritères d'arrêt : stop jobboard si volume hors cible > 50 CV non pertinents et 0 préqualifié à J12 (revoir l'annonce avant d'ajouter un canal).\nBudget : temps recruteur + crédits d'annonces déjà payés + prime de cooptation si embauche par ce canal (montant : politique RH, non inventé ici).\nCalendrier : S0 interne ; S1 diffusion ; S2 préqualif ; S3-4 entretiens ; S5 décision ; puis préavis + DPAE (coordination RH).\nSuivi : source, nb CV, nb préqualifiés, nb entretiens, blocage, décision à J15 et J30.\nVigilances : L. 1132-1 (cible commerciale, pas de critère d'âge ou de sexe) ; offre en français, pas d'allégation sur « évolution garantie » ; salaire dans l'annonce = bonne pratique à trancher avec RH (pas d'obligation FR consolidée au 13/10/2026) ; vivier informé, pas de relance des archives 2019."
            },
            {
              "block_type": "code",
              "content": "PLAN 2 — ETI industrie / maintenance\nEntreprise fictive : Forges & Maintenance du Centre, 620 personnes, site à 18 km d'une ville moyenne\nPoste : technicien de maintenance mécanique, CDI, 3×8, habilitation électrique souhaitée\nDate souhaitée : 15 jours (planning d'atelier)\nDate réaliste CDI : 8 à 12 semaines + préavis. Passerelle : intérim dès que possible si RH valide.\nMarché : tendu localement (3×8 + habilitation + site excentré). Historique : 2 échecs d'annonces seules sur 18 mois, 1 embauche via intérim puis CDI. Pas de taux national cité.\nInterne / externe : mobilité 2 sites du groupe à interroger. Publication interne groupe 7 jours (accord / politique — à confirmer RH). Priorité de réembauche : signalée aux RH (licenciement économique d'un atelier voisin il y a 11 mois). LES CANAUX EXTERNES ATTENDENT LA RÉPONSE RH. Obligation à traiter, pas un choix de jobboard.\nMix (si feu vert RH) :\n  1. Intérim (agence déjà en contrat cadre) — tenir le planning, évaluer pour passerelle CDI\n  2. Cooptation atelier (consigne : pas de pression, habilitations vérifiées en process, pas au café)\n  3. Jobboards industrie + France Travail — annonce honnête sur les 3×8 (L. 5331-3 : pas d'allégation trompeuse sur les horaires)\n  4. CFA / lycée pro maintenance — canal junior / alternance, pas le remplacement express de l'expert\n  5. Approche directe rayon 40 km — profils en poste\n  6. Cabinet spécialisé industrie — seulement si à J21 pipeline CDI < 2 préqualifiés et budget validé\nCritères d'arrêt : intérim continue tant que le CDI n'est pas pourvu, revue hebdo du coefficient et de la qualité ; cabinet non lancé tant que 1 et 5 n'ont pas été faits.\nBudget : intérim (RH/achats) + annonces + temps recruteur + cabinet éventuel sur devis.\nCalendrier : J0 RH priorité + interne ; intérim en parallèle dès feu vert ; CDI selon mix ; DPAE avant prise de poste du CDI (et règles propres à l'intérim gérées avec l'agence et les RH).\nSuivi : heures d'intérim vs avancement CDI ; sources ; habilitations documentées ; sécurité des informations demandées (L. 1221-6, lien avec l'emploi).\nVigilances : ne pas écarter un candidat pour un critère protégé ; ne pas exiger un diplôme si l'habilitation et l'expérience suffisent sauf vrai besoin du poste ; RGPD des sourcés ; offre en français, horaires vrais."
            },
            {
              "block_type": "code",
              "content": "PLAN 3 — Startup produit\nEntreprise fictive : Pixeline, 28 personnes, produit SaaS BtoB, full remote France\nPoste : product designer (expérience 5 ans+), CDI\nDate souhaitée : « pour le sprint du 15 » (18 jours)\nDate réaliste : 6 à 10 semaines de process + préavis (souvent 1 à 3 mois). Le sprint du 15 ne peut pas dépendre de cette embauche.\nMarché : tendu sur le niveau demandé. Marque employeur encore faible. Flux d'annonces généralistes souvent hors cible. Pas de chiffre de salaire « marché » inventé : fourchette à poser avec les fondateurs (transparence = bonne pratique / directive UE 2023/970 en transposition, pas obligation FR consolidée au 13/10/2026).\nInterne / externe : 1 personne support a demandé une passerelle « produit » : à évaluer par respect de la politique interne (7 jours intranet) et par équité, pas par faveur. Priorité de réembauche : demandée aux RH (startup sans licenciement économique : réponse probable négative, mais le junior ne tranche pas).\nMix :\n  1. Interne + vivier designers déjà en contact (informés)\n  2. Approche directe (réseaux professionnels) — canal principal\n  3. Cooptation équipe produit / tech\n  4. Jobboard design spécialisé — secondaire, pas Indeed générique en premier\n  5. Cabinet produit — option J+21 si 0 entretien avancé, budget à valider (souvent lourd pour 28 personnes)\nConfidentialité : l'annonce ne divulgue pas la roadmap ; brief chasse sous NDA si cabinet.\nCritères d'arrêt : stop jobboard généraliste si 40 CVs hors niveau ; revue fondateur 30 min / semaine max.\nBudget : temps recruteur (2 jours/semaine) + crédits réseau déjà payés + cabinet seulement sur décision écrite.\nCalendrier : ne pas promettre le sprint du 15 ; poser un freelance/mission si le produit ne peut pas attendre (décision produit, pas recrutement seul) ; DPAE avant J0 du CDI.\nSuivi : conversations sourcing, taux de réponse (interne, sans benchmark inventé), entretiens, motif de refus professionnel.\nVigilances : L. 1132-1 (pas de « profil jeune startup » comme critère d'âge) ; L. 1221-8 information sur les tests éventuels (cas pratique design) ; portfolio demandé = lien avec l'emploi ; vivier 2 ans reco CNIL."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Copier le plan startup sur l'ETI. Lancer les canaux externes du plan 2 avant la réponse RH sur la priorité de réembauche. Promettre le sprint du 15. Omettre l'intérim dans le plan industrie par idéologie « on ne veut que du CDI ». Publier une annonce trompeuse sur les 3×8 pour « avoir plus de CV ». Oublier le candidat interne de la startup."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si les RH confirment une priorité de réembauche sur le plan 2, le plan se réécrit : traitement RH d'abord, canaux ensuite. Si le budget Pixeline interdit tout cabinet, le critère d'arrêt du canal 5 devient « jamais lancé » et l'on élargit le cadrage (niveau, freelance). Si Alizé reçoit 80 CV hors cible, on ne « rajoute LinkedIn Recruiter » par réflexe : on corrige l'annonce et l'intitulé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du plan 1, le directeur commercial décide d'exiger un cabinet dès J0, « pour aller plus vite », alors que le marché est intermédiaire et que le budget n'est pas validé. Rédigez 8 à 10 lignes : ce que vous maintenez du plan, ce que vous refusez de lancer seul, et la question précise que vous posez aux RH."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous maintenez la structure : interne 5 jours, vivier, cooptation, FT/jobboard, revue à J15. Vous refusez d'engager un cabinet dès J0 sans validation RH/budget : ce n'est pas un canal obligatoire, c'est un achat. Vous expliquez que, sur un marché intermédiaire avec historique de 7 semaines, le cabinet n'est pas le premier levier de vitesse ; la vitesse se joue aussi sur la disponibilité du manager à recevoir. Question RH : « Le directeur commercial demande un cabinet dès J0 sur le poste commercial BtoB. Disposons-nous d'un contrat cadre, d'un budget, et d'une règle d'activation ? Si oui, quel critère d'arrêt par rapport au mix déjà lancé ? » Vous ne dites pas que « la loi interdit les cabinets » (faux) ni que « on n'a pas le droit d'aller plus vite » (faux). Vous distinguez choix de canal (politique) et engagement financier (pouvoir RH)."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Construire une stratégie de recrutement",
          "description": "Dix questions : marché, canaux, vivier, budget, obligations à signaler.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Construire une stratégie de recrutement",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un manager vous demande d'ouvrir immédiatement les jobboards. Les RH vous indiquent qu'un licenciement économique a eu lieu l'an dernier sur un poste proche. Quelle est la bonne conduite ?",
                "question_type": "single_choice",
                "options": [
                  "A. Signaler et laisser les RH traiter une éventuelle priorité de réembauche avant de lancer les canaux externes ; le choix des jobboards n'est pas une obligation légale.",
                  "B. Ouvrir les jobboards tout de suite : la priorité de réembauche ne concerne que les syndicats, pas le recruteur.",
                  "C. Refuser tout recrutement externe pendant cinq ans, durée unique prévue pour tous les viviers.",
                  "D. Publier uniquement sur LinkedIn, canal « plus légal » qu'un jobboard."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La priorité de réembauche, lorsqu'elle s'applique, est une obligation à faire traiter par les RH, pas un choix de canal. Le junior ne fixe pas seul le périmètre. En revanche, Indeed, LinkedIn ou un cabinet ne sont pas imposés par la loi : ce sont des choix de politique interne ou de bonne pratique. Les 5 ans cités dans le distracteur C concernent une logique d'archivage probatoire des non-retenus (L. 1134-5 / référentiel CNIL), pas un gel des recrutements externes, et pas la durée du vivier actif (recommandation 2 ans)."
              },
              {
                "question": "Que signifie qualifier un métier de « en tension » dans un plan de recrutement junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Un constat de marché (difficulté à pourvoir) qui oriente canaux et délai, sans statistique inventée et sans en faire une obligation légale.",
                  "B. Une obligation légale de passer par un cabinet de chasse.",
                  "C. L'interdiction de publier une offre sur France Travail.",
                  "D. La preuve que le salaire devra obligatoirement figurer dans l'annonce, en droit français consolidé au 13/10/2026."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "« En tension » est un jugement professionnel étayé (historique interne, habilitations, lieu, contrat), pas un label légal. Il justifie souvent sourcing, intérim ou cabinet, mais n'oblige aucun canal. Indiquer le salaire dans l'offre n'est pas une obligation française consolidée au 13/10/2026 (directive UE 2023/970 en transposition). France Travail n'est pas interdit sur un métier tendu."
              },
              {
                "question": "La publication interne préalable d'un poste, dans la plupart des entreprises, est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une politique interne, un accord ou une bonne pratique — à vérifier avec les RH — et non, par principe, « la » loi unique du recrutement.",
                  "B. Une obligation du Code du travail identique pour toutes les TPE.",
                  "C. Interdite, car elle discrimine les candidats externes.",
                  "D. Remplacée automatiquement par la cooptation."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Beaucoup d'entreprises imposent quelques jours d'intranet : c'est leur règle, vous l'appliquez. Ce n'est pas un article unique du Code du travail applicable à toute TPE. Ce n'est pas non plus une discrimination illicite par nature : évaluer les internes avec la même grille, sans critère protégé (L. 1132-1), reste exigé. La cooptation est un autre canal, politique interne elle aussi."
              },
              {
                "question": "Quelle distinction est exacte entre cabinet de recrutement et agence d'intérim ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le cabinet est généralement missionné pour trouver un candidat pour un poste du client ; l'intérim met à disposition un salarié de l'agence, dans un cadre propre, souvent pour un besoin de flexibilité ou une passerelle.",
                  "B. L'intérim est réservé aux cadres, le cabinet aux ouvriers.",
                  "C. Les deux sont des obligations légales dès que le poste est ouvert depuis 15 jours.",
                  "D. Le cabinet permet d'ignorer le RGPD ; l'intérim l'ignore aussi."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Confondre les deux est une erreur de débutant. Ni l'un ni l'autre n'est obligatoire au 15e jour. Aucun prestataire n'exonère du RGPD ni de la non-discrimination. Le choix d'y recourir est budgétaire et stratégique, validé par les RH."
              },
              {
                "question": "La durée « 2 ans » pour un vivier / CVthèque, selon les sources du cours (CNIL), est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une recommandation d'autorité (jusqu'à 2 ans à compter du dernier contact, information, opposition possible), pas une durée unique écrite par le RGPD pour tous les traitements.",
                  "B. Une obligation pénale automatique, identique à l'archivage probatoire de 5 ans.",
                  "C. Un minimum légal : on doit tout garder au moins 2 ans, même en cas d'opposition.",
                  "D. Une durée qui autorise à relancer les CV de 2016 s'ils sont « bons »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Guide CNIL recrutement et référentiel 2026 : vivier jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation, pas durée unique RGPD. Les 5 ans concernent l'archive intermédiaire des non-retenus à des fins de preuve (L. 1134-5), autre finalité. Une opposition sur le vivier se respecte. Relancer 2016 n'est pas conforme à cette recommandation."
              },
              {
                "question": "Dans un calendrier de CDI, que devez-vous intégrer en plus du temps d'annonce et d'entretiens ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le préavis probable du candidat retenu et, côté employeur, la coordination de la DPAE avant la prise de poste (obligation de l'employeur, pas du junior isolé).",
                  "B. Uniquement le week-end de séminaire d'intégration, obligatoire par le Code du travail.",
                  "C. Un délai légal unique de 15 jours entre l'annonce et l'embauche.",
                  "D. Rien : la date donnée par le manager est toujours la date d'arrivée."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le préavis fait souvent basculer le calendrier. La DPAE est obligatoire avant la prise de fonction ou le début de période d'essai, au plus tôt dans les 8 jours précédant l'embauche (Service-Public F23107) : le junior coordonne avec les RH. Il n'existe pas de délai légal unique de 15 jours « annonce → embauche ». Le séminaire n'est pas une obligation universelle du Code."
              },
              {
                "question": "Un plan multicanal efficace, pour un recruteur junior, c'est surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. 3 à 5 canaux justifiés, séquencés, avec critère d'arrêt et revue à date, après traitement des obligations RH.",
                  "B. Tous les jobboards le même matin, pour « couvrir ».",
                  "C. Un cabinet uniquement, parce que c'est plus conforme au RGPD.",
                  "D. Un canal unique imposé par l'article L. 1132-1."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Multicanal ne veut pas dire dispersion. L. 1132-1 interdit la discrimination ; il n'impose pas un canal. Un cabinet n'est pas « plus RGPD ». Empiler les jobboards sans revue empêche d'apprendre d'où vient le candidat utile."
              },
              {
                "question": "La cooptation dans une stratégie de recrutement est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une politique interne / bonne pratique, utile si la grille d'évaluation reste la même et si l'on évite pression et critères protégés.",
                  "B. Une obligation légale dès 50 salariés.",
                  "C. Un canal qui permet de s'affranchir de L. 1221-6 (on peut tout demander, c'est « un copain »).",
                  "D. Interdite, car elle est toujours discriminatoire."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La cooptation n'est ni obligatoire ni interdite par principe. Elle devient illicite si elle sert de couverture à une discrimination (L. 1132-1) ou si l'on pose des questions sans lien avec l'emploi (L. 1221-6). La prime, lorsqu'elle existe, est une règle interne."
              },
              {
                "question": "Sur le plan industrie (technicien 3×8, habilitation, site excentré), pourquoi l'annonce seule est-elle souvent insuffisante ?",
                "question_type": "single_choice",
                "options": [
                  "A. Parce que le marché local, les horaires et les exigences techniques réduisent le flux spontané ; intérim, cooptation, sourcing et écoles ont une fonction propre.",
                  "B. Parce que la loi interdit les annonces pour les 3×8.",
                  "C. Parce que France Travail refuse les offres industrielles.",
                  "D. Parce que le salaire devrait obligatoirement être caché, ce qui fait fuir les candidats."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "C'est un constat de marché et d'historique, pas une interdiction d'annoncer. L'annonce doit au contraire être honnête sur les 3×8 (L. 5331-3, allégations trompeuses). France Travail n'interdit pas l'industrie. Le salaire n'a pas à être « caché par la loi » ; l'afficher n'est simplement pas encore une obligation française consolidée au 13/10/2026."
              },
              {
                "question": "Qui valide l'engagement d'un cabinet ou d'un contrat d'intérim dans les plans du module ?",
                "question_type": "single_choice",
                "options": [
                  "A. Les RH / la personne ayant le pouvoir d'engager le budget — pas le recruteur junior seul, même sous pression du manager.",
                  "B. Le premier candidat préqualifié.",
                  "C. France Travail, qui homologué tous les prestataires.",
                  "D. Le CSE, dans toutes les entreprises, pour chaque CDD."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le junior propose un mix ; il n'engage pas un honoraire ou un contrat cadre. Le manager peut demander, les RH (ou achats / direction) valident. France Travail n'homologue pas « tous les prestataires ». Les instances du personnel ont des attributions propres, variables : ce n'est pas au junior d'inventer une consultation pour chaque CDD."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 5,
      "title": "Rédiger et diffuser une offre d'emploi",
      "description": "Rédiger une annonce claire, datée, en français, non discriminatoire et non trompeuse, puis la diffuser et la retirer sans confusion avec une promesse d'embauche.",
      "lessons": [
        {
          "title": "Structure d'une annonce professionnelle",
          "description": "Connaître les blocs d'une offre utile au candidat et au process, et distinguer l'annonce de la fiche de poste.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez assembler une annonce en blocs stables (intitulé, employeur, missions, profil, conditions, modalités de candidature), distinguer ce qui relève de la fiche de poste interne et ce qui se publie, et relire un texte avec l'œil du candidat et l'œil du juriste."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une offre d'emploi est un texte public qui décrit un emploi à pourvoir, pour attirer des candidatures utiles. Elle n'est pas la fiche de poste : la fiche est un outil interne de cadrage (missions, responsabilités, critères, rattachement). L'annonce en est une version lisible, honnête et licite. Tout ce qui est dans l'annonce doit pouvoir être tenu. Tout ce qui est dans la fiche n'a pas à figurer dans l'annonce (outils internes, critères de ranking, commentaires manager). Inversement, l'annonce contient des éléments que la fiche oublie parfois : comment postuler, date, lieu précis, type de contrat, rythme, accessibilité, mentions d'information.\n\nUne structure stable n'est pas un gadget pédagogique. Elle réduit trois risques. Premier risque : le candidat ne comprend pas le métier et postule à côté, ou ne postule pas alors qu'il correspond. Deuxième risque : l'annonce promet ce que le poste n'est pas (allégation fausse ou trompeuse, article L. 5331-3 du Code du travail : existence, nature, description de l'emploi, rémunération et avantages, lieu de travail). Troisième risque : une mention illicite s'y glisse (sexe, situation de famille, âge, origine, etc.).\n\nLes blocs utiles, dans un ordre lisible, sont : un intitulé clair ; l'identité de l'employeur ou a minima le secteur et la taille si la confidentialité l'impose, sans mensonge ; les missions principales (six à dix verbes, pas un roman) ; le rattachement ; le profil au regard de l'emploi (compétences, expériences, diplômes réellement nécessaires) ; les conditions (contrat, durée si CDD, temps de travail, horaires, lieu, télétravail, rémunération si vous choisissez de l'indiquer) ; l'accessibilité et les modalités pratiques ; la date ; la façon de postuler et, le cas échéant, une information sur les méthodes (tests, délais). Cette structure est une bonne pratique professionnelle. Les obligations légales précises (français, mentions interdites, allégations) sont traitées dans les leçons suivantes : elles s'appliquent quel que soit l'ordre des blocs.\n\nL'annonce n'est pas une promesse unilatérale d'embauche. Publier un poste n'oblige pas à embaucher. Retirer une offre avant acceptation d'une offre de contrat n'est pas le même acte que retirer une promesse unilatérale (fiche Service-Public F39588, jurisprudence expliquée par Service-Public). Vous rédigez donc sans formules du type « vous êtes embauché » ou « poste garanti à l'issue de l'entretien »."
            },
            {
              "block_type": "callout",
              "content": "L'annonce est un document de recrutement, pas un contrat. Elle doit être exacte (L. 5331-3) sans devenir une promesse d'embauche. En cas de doute sur une formulation d'engagement, faites relire les RH avant publication."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Partir de la fiche de poste validée, pas d'un vieux texte d'annonce.\n2. Remplir les blocs dans un brouillon daté, en français.\n3. Faire relire le manager sur les missions et les conditions réelles (horaires, déplacements, astreintes).\n4. Faire relire les RH sur le licit (discriminations, allégations, salaire, logo, confidentialité).\n5. Contrôler : un candidat externe comprend-il le métier en trente secondes ? Un critère est-il sans lien avec l'emploi (L. 1221-6) ?\n6. Enregistrer la version publiée (traçabilité).\n7. Prévoir la date de revue et de retrait."
            },
            {
              "block_type": "code",
              "content": "BLOCS D'ANNONCE — checklist de rédaction\n\n[ ] Date de l'offre / version\n[ ] Intitulé (clair, ouvert, sans critère illicite)\n[ ] Employeur ou cadre d'emploi honnête\n[ ] Missions (verbes, livrables, rattachement)\n[ ] Profil (lien direct avec l'emploi)\n[ ] Contrat, durée, temps de travail, horaires, lieu\n[ ] Rémunération / avantages (si vous les indiquez : exacts)\n[ ] Accessibilité / modalités pratiques\n[ ] Comment postuler, délai, méthodes éventuelles\n[ ] Relu manager (réalité) + RH (droit)"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Alizé Services, le manager envoie un paragraphe : « On cherche un super commercial, jeune, motivé, pour exploser les objectifs, évolution super rapide, anglais un plus. » Le recruteur junior ne publie pas ce paragraphe. Il le convertit en blocs : intitulé « Commercial BtoB TPE-PME (H/F) » ou variante épicène ; missions de prospection et suivi ; profil 2 à 5 ans de vente BtoB (le « jeune » disparaît) ; CDI, 35 h, secteur Lyon, véhicule ; pas de promesse d'évolution. L'anglais est retiré : aucun client international. La structure a servi de filtre avant le droit détaillé."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier la fiche de poste brute (jargon interne, 4 pages). Rédiger un slogan au lieu de missions. Oublier le contrat ou le lieu. Copier l'annonce d'un concurrent. Laisser le manager publier sur son LinkedIn personnel un texte non relu. Mélanger trois postes dans une seule annonce. Omettre la date, puis ne plus savoir quelle version circule."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Annonce confidentielle (remplacement non annoncé) : on décrit le poste sans exposer la personne en place, éventuellement via un cabinet ; on ne ment pas sur l'employeur au point de tromper (L. 5331-3). Annonce de volume (plusieurs préparateurs) : un texte unique, nombre de postes, process de session. Annonce cabinet : le cabinet doit rester exact sur le client et le poste ; votre brief est la source. Intérim : l'offre de mission n'est pas rédigée comme un CDI déguisé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Reconstituez les blocs manquants de cette ébauche : « Ici on recrute dans la tech, ambiance start-up, venez rejoindre l'aventure, stack moderne, remote possible. » Listez au moins huit informations absentes sans lesquelles vous refusez de publier."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Informations absentes, a minima : date ; intitulé de métier réel ; missions ; type de contrat ; employeur identifiable ou cadre non trompeur ; lieu (le « remote possible » est ambigu : France ? 2 jours ?) ; temps de travail ; profil en lien avec l'emploi ; rémunération ou mention volontairement absente (choix, pas flou) ; modalités de candidature ; horaires. « Ambiance start-up » et « aventure » ne décrivent pas l'emploi. « Stack moderne » sans missions est une allégation creuse, risquée si elle masque un poste de support. Vous refusez de publier tant que manager et RH n'ont pas rempli les blocs."
            }
          ],
          "position": 0
        },
        {
          "title": "Intitulé du poste : clarté, inclusion, ce que dit le droit",
          "description": "Choisir un intitulé compréhensible, ouvert à toutes et tous, sans présenter H/F/X comme « la » loi unique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez formuler un intitulé qui nomme le métier, reste licit vis-à-vis du sexe et de la situation de famille, et vous savez expliquer qu'un complément du type H/F, H/F/X ou une formulation épicène est une bonne pratique d'ouverture, pas une formule magique unique imposée par un article isolé."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'intitulé est le premier filtre. S'il est jargonné, anglophone sans équivalent expliqué, ou trop marketing (« ninja », « rockstar »), les personnes qui font le métier ne se reconnaissent pas, et les moteurs de recherche d'offres ne relient pas le poste aux bons synonymes. S'il contient un critère de sexe, d'âge ou de situation de famille, il expose l'entreprise. L'article L. 1132-1 du Code du travail interdit d'écarter une personne d'un recrutement en raison de critères protégés, parmi lesquels le sexe, l'âge, la situation de famille, l'origine, le handicap, l'apparence, le nom, etc. Par ailleurs, le droit des offres interdit de mentionner le sexe ou la situation de famille dans une offre, sous réserves d'exceptions limitées (artiste, mannequin/modèle) — voir L. 5331-2 / L. 1142-1 / R. 1142-1, fiche Service-Public Entreprendre F39133, vérifiée le 02/10/2025.\n\nDans ce cadre, deux questions se posent. Première : l'intitulé décrit-il un métier, ou un stéréotype (« hôtesse », « jeune diplômé », « homme de terrain ») ? « Hôtesse d'accueil » oriente le sexe ; « chargé d'accueil » ou « agent d'accueil » décrit le métier. Deuxième : faut-il ajouter H/F, F/H, H/F/X, « tous genres » ? Beaucoup d'entreprises le font pour signaler que le poste est ouvert. C'est une bonne pratique professionnelle, cohérente avec l'interdiction de réserver l'emploi à un sexe. Ce n'est pas « la » loi unique, ni l'unique formulation valable. Un intitulé épicène (« responsable paie », « technicien de maintenance » au sens du métier, « personne chargée de ») peut suffire s'il n'enferme personne. Un H/F plaqué sur un texte par ailleurs sexiste (« H/F, elle gérera aussi le café ») ne sauve rien.\n\nL'anglais dans l'intitulé obéit à une autre règle : l'offre est rédigée en français si le travail s'effectue en France, ou si l'auteur/employeur est français pour un travail à l'étranger (article L. 5331-4). Un terme étranger sans équivalent doit s'accompagner d'une description française suffisamment détaillée. Un intitulé « Account Executive » seul, sans description française du métier, ne respecte pas cette logique. Vous pouvez conserver un usage professionnel connu, à condition que le français porte le sens.\n\nEnfin, l'intitulé doit coller au marché (module stratégie) : trop fantaisiste, il rate les alertes candidats ; trop générique (« collaborateur ») il attire un flux hors sujet. L'intitulé n'est pas un outil de négociation salariale, ni une promesse de statut (« futur manager »)."
            },
            {
              "block_type": "callout",
              "content": "Bonne pratique, pas formule unique. H/F, H/F/X, « ouvert à toutes et tous » ou un intitulé épicène servent à marquer l'ouverture. L'obligation, elle, est de ne pas réserver l'offre à un sexe ou à une situation de famille (exceptions limitées) et de ne pas discriminer à l'embauche (L. 1132-1). Relisez F39133 le jour J."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Partir du nom du métier utilisé en interne et le traduire en langage de marché (synonymes de la note de marché).\n2. Retirer tout marqueur de sexe, d'âge, de beauté, de situation de famille.\n3. Choisir, selon la politique interne, un intitulé épicène et/ou un complément d'ouverture (H/F ou H/F/X) — politique / bonne pratique.\n4. Si un anglicisme demeure, ajouter la dénomination française et détailler les missions.\n5. Tester : une personne du métier comprend-elle en cinq secondes ? Un lecteur externe croit-il que le poste est réservé à un groupe ?\n6. Faire valider RH les intitulés sensibles (accueil, assistance, métiers très genrés dans les usages)."
            },
            {
              "block_type": "code",
              "content": "INTITULÉS — reformuler\n\nÀ éviter                         | Piste\n---------------------------------|------------------------------------------\nHôtesse d'accueil jeune et jolie | Agent d'accueil / chargé d'accueil (H/F)\nCommercial H, permis obligatoire  | Commercial BtoB — permis requis si lien réel avec l'emploi\nNinja Developer                   | Développeur ou développeuse backend (H/F/X) + missions FR\nAssistante RH (la)                | Assistant RH / assistant de gestion RH (H/F)\nJeune diplômé finance             | Analyste financier junior — diplôme en lien avec l'emploi"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Forges & Maintenance du Centre publiait « Mécanicien (homme, force physique, 25-40 ans) ». Le junior reformule : « Technicien de maintenance mécanique (H/F) ». Les exigences physiques, si elles sont réelles, se décrivent dans les conditions (port de charges, postures) comme des faits du poste, pas comme un sexe ou un âge. L'habilitation électrique reste dans le profil, lien direct avec l'emploi. Le H/F est ajouté selon la politique interne ; l'intitulé épicène « technicien de maintenance mécanique » portait déjà le métier."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Croire que coller « H/F » suffit, même si le texte dit « elle devra ». Utiliser « M/Mme » dans l'intitulé. Garder « jeune » pour dire junior. Traduire un poste français uniquement en anglais pour « faire moderne ». Inventer un titre ronflant qui ne correspond pas au statut (L. 5331-3). Oublier que « langue maternelle française » n'est pas un intitulé, c'est un critère illicite ou excessif : le besoin est souvent « rédaction professionnelle en français », lien avec l'emploi."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Exceptions artistes / mannequins : ne les étendez pas à un poste administratif. Métiers réglementés : l'intitulé peut renvoyer au titre protégé (infirmier, avocat) ; vérifiez avec les RH que le diplôme demandé est bien une condition d'exercice. Offre internationale : français + description détaillée si L. 5331-4 s'applique. Marque employeur : un slogan peut accompagner, pas remplacer, l'intitulé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Corrigez : « Digital Girl / Community Manager, 22-28 ans, native, pour animer nos réseaux avec le sourire. » Proposez un intitulé + une phrase d'ouverture, et listez les critères à retirer."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Intitulé possible : « Community manager / animateur des réseaux sociaux (H/F) » ou formulation épicène « gestion des communautés et des réseaux sociaux ». À retirer : Girl (sexe), 22-28 ans (âge), native (origine / langue comme critère fermé). « Avec le sourire » et l'apparence orientent vers un critère d'apparence physique, protégé par L. 1132-1. Le besoin réel se rédige en missions : publier, modérer, relayer, mesurer. Le H/F (ou H/F/X) est une bonne pratique d'ouverture, pas un sésame si le reste du texte reste genré."
            }
          ],
          "position": 1
        },
        {
          "title": "Missions, profil, conditions de travail et accessibilité",
          "description": "Décrire le travail réel, les exigences nécessaires, et les conditions — y compris l'accessibilité — sans mensonge ni critère inutile.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez rédiger des missions en verbes, un profil limité à ce qui a un lien direct et nécessaire avec l'emploi (L. 1221-6), des conditions de travail exactes, et une information d'accessibilité utile, sans transformer le handicap en critère de tri illicite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les missions disent ce que la personne fera. Le profil dit ce dont on a besoin pour le faire. Les conditions disent dans quel cadre (contrat, horaires, lieu, pénibilité, outils). Mélanger les trois produit des annonces creuses : « vous serez force de proposition, agile, passionné » n'est ni une mission ni un critère évaluable. Six à dix missions concrètes valent mieux qu'une charte de valeurs. Chaque exigence du profil doit pouvoir se justifier par l'emploi : un diplôme, une habilitation, un permis, une langue, une expérience de durée, un outil. L'article L. 1221-6 du Code du travail limite les informations demandées au candidat à celles qui ont un lien direct et nécessaire avec l'emploi et les aptitudes professionnelles. L'annonce n'est pas un questionnaire, mais elle oriente déjà ce que les gens croient devoir prouver. Un « anglais courant » alors qu'aucun interlocuteur n'est anglophone est une exigence excessive. Un « permis B » est légitime si le poste est itinérant ; il ne l'est pas pour un poste 100 % sédentaire desservi par les transports.\n\nLes conditions de travail sont le terrain d'élection des allégations trompeuses (L. 5331-3) : « horaires de jour » alors que le poste est en 3×8 ; « télétravail » alors qu'il s'agit d'un jour par mois ; « CDI » alors que le besoin est un CDD de quatre mois ; lieu « Paris » alors que le site est à 40 km. Vous décrivez le réel, même s'il réduit le volume de candidatures. Un volume de candidatures obtenu par omission se paie en désistements et en contentieux.\n\nL'accessibilité fait partie des conditions. Elle recouvre le lieu (locaux, transports, télétravail), l'organisation (temps partiel possible ou non, aménagements), et l'information aux personnes en situation de handicap. Mentionner que le poste est ouvert aux personnes en situation de handicap, indiquer un contact pour échanger sur les aménagements, décrire les contraintes physiques réelles (station debout, port de charges, écran) est une bonne pratique, cohérente avec l'interdiction de discriminer en raison du handicap (L. 1132-1) et avec l'obligation d'emploi qui pèse sur l'employeur — obligation de l'employeur, pas un slogan à inventer. Vous n'écrivez pas « sauf handicap » ni « bonne santé obligatoire ». Vous n'utilisez pas le handicap comme un filtre de présélection. La médecine du travail, plus tard, appréciera l'aptitude ; ce n'est pas le rôle de l'annonce.\n\nLe profil « junior » ou « 5 ans d'expérience » doit rester un ordre de grandeur lié à la complexité du poste, pas un âge déguisé. Un diplôme peut être exigé s'il est nécessaire à l'emploi ou réglementé ; s'il n'est qu'un habitude, vous ouvrez aux équivalences et à la reconversion, ce qui est une politique / bonne pratique, pas une obligation unique pour tous les métiers."
            },
            {
              "block_type": "callout",
              "content": "Lien direct et nécessaire avec l'emploi (L. 1221-6). Chaque ligne du profil est un futur critère d'évaluation. Si vous ne savez pas justifier le permis, la langue, le diplôme ou l'âge apparent, retirez-les. Les conditions inexactes tombent sous L. 5331-3."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Extraire de la fiche 6 à 10 missions, verbe + objet + éventuellement fréquence.\n2. Pour chaque exigence de profil : écrire la justification « lien avec l'emploi » ; sinon, supprimer.\n3. Faire confirmer par le manager les horaires, le lieu, les déplacements, les astreintes, le télétravail réel, la pénibilité.\n4. Ajouter une phrase d'accessibilité et un canal pour en parler (politique interne / bonne pratique).\n5. Relire à voix haute : un candidat comprend-il sa semaine type ?\n6. Contrôle RH : aucune mention de santé, de beauté, de situation de famille."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "CDD préparateur de commandes, entrepôt. Missions : réceptionner, préparer les commandes, emballer, signaler les écarts, respecter les règles de sécurité. Profil : expérience entrepôt ou formation logistique utile, lecture de bons, CACES si l'emploi le requiert réellement (sinon formation prévue — à dire vrai). Conditions : CDD 4 mois, horaires 5 h-13 h, station debout, port de charges, site desservi par une ligne de bus (fréquence à indiquer sans mensonge). Accessibilité : contraintes physiques décrites ; contact RH pour échanger sur un aménagement ; pas de « bonne condition physique obligatoire » comme slogan d'exclusion. Le CDI n'est pas promis dans l'annonce."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Liste de qualités (dynamique, stress-resistant, souriant). Exiger 10 ans d'expérience pour un poste junior. Cacher les 3×8. Écrire « évolution CDI garantie » sur un CDD. Oublier le lieu. Copier un profil de cadre sur un poste d'assistant. Mentionner « non fumeur » ou « sans enfant » : illicite. Décrire l'accessibilité par « locaux neufs » alors qu'il y a trois marches sans alternative."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Astreintes et déplacements : les chiffrer (fréquence), pas « de temps en temps ». Télétravail : nombre de jours, zone géographique, jours imposés sur site. Temps partiel : le dire si le poste l'est, ne pas le promettre s'il ne l'est pas. Travailleur handicapé déjà en poste (aménagement existant) : ne pas exposer sa situation dans une annonce de remplacement."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut : « Permis B obligatoire, anglais bilingue, disponibilité soirs et week-ends, excellente présentation, 25-35 ans » pour un assistant RH sédentaire, 35 h de jour, paie et administration du personnel, aucun visiteur international. Que gardez-vous, que reformulez-vous, que refusez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez l'âge (L. 1132-1) et « excellente présentation » comme critère d'apparence. Le permis n'a pas de lien avec un poste sédentaire : vous le retirez, sauf déplacement réel documenté. L'anglais bilingue : sans interlocuteur international, vous le retirez ou le rétrogradez en « non requis ». Soirs et week-ends : si c'est faux, L. 5331-3 ; si une astreinte paie existe deux soirs par mois, vous la décrivez exactement. Vous gardez : missions paie et administration, outils, discrétion, expérience ou formation RH en lien avec l'emploi, 35 h de jour, lieu."
            }
          ],
          "position": 2
        },
        {
          "title": "Obligations légales de l'offre : français, date, non-discrimination, allégations",
          "description": "Appliquer les règles du Code du travail et de la fiche Service-Public sur l'offre, sans inventer d'article.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez citer et appliquer quatre exigences : rédaction en français (L. 5331-4), datation et traçabilité de l'offre, absence de mentions discriminatoires (L. 1132-1, L. 5331-2 et textes liés), absence d'allégations fausses ou trompeuses (L. 5331-3). Vous savez relire F39133 avant une publication réelle."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le droit des offres d'emploi n'est pas un « plus » de communication. C'est un cadre pénalement et civilement sensible, que le recruteur junior applique avant de cliquer sur « publier ». Quatre piliers structurent votre relecture, à la date de vérification de ce cours (13/10/2026).\n\nPremier pilier : la langue. L'article L. 5331-4 du Code du travail impose une offre rédigée en français si le travail s'effectue en France (ou si l'auteur/employeur est français pour un travail à l'étranger). Un terme étranger sans équivalent français s'accompagne d'une description française suffisamment détaillée. Une annonce uniquement en anglais pour un poste basé à Lyon, même « tech », ne respecte pas cette règle. Vous pouvez joindre une version anglaise pour un public international : le français reste porteur.\n\nDeuxième pilier : la date et la traçabilité. Une offre qui circule sans date, sans version, sans responsable, ne peut être ni mise à jour, ni retirée proprement, ni produite en cas de contestation. La fiche Service-Public Entreprendre F39133 (« Préparer et diffuser une offre d'emploi ») est la référence opérationnelle à relire le jour J. Dater l'offre, conserver la version publiée, indiquer une date de validité ou de revue est une exigence professionnelle de traçabilité, alignée sur cette fiche et sur le besoin de preuve. Vous ne laissez pas une annonce « éternelle » en ligne alors que le poste est pourvu : outre le désordre, vous vous approchez d'une allégation sur l'existence de l'emploi (L. 5331-3).\n\nTroisième pilier : les mentions discriminatoires. L. 1132-1 interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, qualité de lanceur d'alerte, etc.). Dans l'offre, mentionner le sexe ou la situation de famille est en outre spécifiquement encadré / interdit, exceptions limitées (artiste, mannequin/modèle) — L. 5331-2, L. 1142-1, R. 1142-1, F39133. Un intitulé d'ouverture H/F est une bonne pratique, pas une clause qui autorise un texte sexiste par ailleurs.\n\nQuatrième pilier : les allégations fausses ou susceptibles d'induire en erreur, article L. 5331-3, sur l'existence de l'emploi, sa nature, sa description, la rémunération et les avantages, le lieu de travail. « CDI » alors que le besoin est un stage, « 40 k€ » alors que le max est 32, « Paris 8e » alors que c'est un site logistique en grande couronne, « poste à pourvoir » alors qu'il n'existe plus : ce sont des fautes de rédaction, pas des habiletés marketing."
            },
            {
              "block_type": "callout",
              "content": "Sources (vérifiées au 13/10/2026) : L. 1132-1, L. 5331-2 et textes liés, L. 5331-3, L. 5331-4, fiche Service-Public F39133 (02/10/2025). Relisez Légifrance / Service-Public avant d'appliquer à un cas réel. Le junior ne « tasse » pas une mention douteuse pour faire plaisir au manager : il fait relire les RH."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Grille de relecture avant publication, dans cet ordre : (1) français porteur, anglicismes expliqués ; (2) date et version enregistrées, date de revue ; (3) recherche de critères protégés (âge, sexe, apparence, origine, santé, résidence, langue maternelle, etc.) ; (4) chaque fait vérifiable : contrat, lieu, horaires, rémunération si indiquée, existence du poste ; (5) validation RH si un seul doute. Document : PDF ou copie ATS de l'annonce publiée."
            },
            {
              "block_type": "code",
              "content": "CONTRÔLE PRE-PUBLICATION\n\nLangue     : texte FR complet ? terme étranger décrit ?\nDate       : date d'offre + date de revue / retrait ?\nCritères   : aucun âge, sexe, famille, apparence, origine, santé… ?\nFaits      : contrat, lieu, horaires, salaire/avantages, existence = vrais ?\nPromesses  : aucune embauche « garantie », aucune évolution automatique ?\nMéthodes   : si test / assessment, information possible (L. 1221-8) ?"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Pixeline s'apprête à publier : « Full remote Europe, $60k, rockstar, native English, young team. » Le junior bloque. Travail exercé depuis la France pour une société française : français obligatoire, description du métier en français. Le salaire en dollars, s'il est faux ou hors package réel, tombe sous L. 5331-3. « Native English » n'est pas un besoin : c'est un critère d'origine / de langue à reformuler, si besoin réel, en « anglais professionnel écrit et oral, réunions clients US » (lien avec l'emploi). « Young team » oriente l'âge. Date absente. L'annonce est réécrite en français, datée, avec lieu de travail (télétravail France, 4 jours de présence par trimestre à Paris — si c'est vrai)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Publier d'abord, corriger ensuite. Laisser une annonce en ligne trois mois après l'embauche. Traduire uniquement un titre et croire que c'est du français. Écrire « 30-45 ans » pour « niveau d'expérience ». Mentionner un « quartier calme, bon pied, bon œil ». Promettre un 13e mois non décidé. Omettre le lieu pour « avoir plus de CV »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Offre pour un emploi à l'étranger : L. 5331-4 si employeur/auteur français — français + détail. Exceptions artistes/mannequins : strictement limitées. Annonce de cabinet pour client confidentiel : ne pas inventer un employeur fictif au point de tromper sur l'existence ou la nature ; cadrer avec les RH et le cabinet. Recrutement d'une personne déjà identifiée (offre « pour la forme ») : l'emploi doit exister et la description rester exacte ; un processus fermé n'autorise pas un texte mensonger."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Cochez les illicites ou trompeurs, et dites l'article ou le principe : (1) « Recherche femme de ménage, 35-50 ans, nationale. » (2) « CDI, 32 k€ » alors que le contrat prévu est un CDD 6 mois à 28 k€. (3) « Product Owner » + 12 lignes de missions en français, date du 13/10/2026. (4) « Poste pourvu mais on laisse l'annonce pour la marque. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Sexe, âge, nationalité / origine : L. 1132-1 et encadrement des mentions de sexe dans l'offre (L. 5331-2 / L. 1142-1). Intitulé à épicène ou ouvrir (agent de propreté H/F), retrait de l'âge et de la nationale. (2) Nature du contrat, rémunération : L. 5331-3. (3) Acceptable en structure : anglicisme du métier compensé par des missions françaises ; date présente ; à vérifier : pas d'autre mention illicite. (4) Existence de l'emploi : L. 5331-3 — retirer l'annonce. L'employeur n'utilise pas une fausse offre comme publicité."
            }
          ],
          "position": 3
        },
        {
          "title": "Le salaire dans l'offre : droit français, directive européenne, bonne pratique",
          "description": "Savoir quoi dire au manager au 13/10/2026 : pas d'obligation française consolidée d'afficher le salaire, directive (UE) 2023/970 en transposition.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez énoncer l'état du droit au 13/10/2026 sans le durcir ni le minimiser : indiquer le salaire dans l'offre n'est pas (encore) une obligation consolidée en droit français, une directive européenne impose une information sur la rémunération ou une fourchette, la transposition est en cours. Vous savez traiter l'affichage comme une bonne pratique / une future obligation, et, si vous affichez, comme un fait soumis à L. 5331-3."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La question « doit-on mettre le salaire dans l'annonce ? » est devenue un piège pour les recruteurs juniors. Deux erreurs symétriques circulent. Première erreur : affirmer que c'est déjà obligatoire en France, et accuser le manager d'illégalité s'il refuse d'afficher. Deuxième erreur : affirmer que le salaire doit rester secret, ou afficher un montant fictif « pour attirer ». Ni l'une ni l'autre n'est conforme aux sources de ce cours.\n\nLa fiche Service-Public Entreprendre F39133 (vérifiée le 02/10/2025), citée dans legal-sources.json, indique qu'indiquer le salaire dans l'offre n'est pas (encore) obligatoire en droit français au jour de la fiche, mais qu'une directive européenne impose une information sur la rémunération ou une fourchette dans l'offre ; la transposition est en cours. Il s'agit de la directive (UE) 2023/970 sur la transparence des rémunérations. Distinguez donc trois niveaux, à la date du 13/10/2026 : (1) pas encore une obligation interne française consolidée à cette date — vous ne devez pas l'enseigner comme si l'article était déjà en vigueur sans vérifier le texte de transposition le jour J ; (2) une bonne pratique professionnelle (attirer les bons profils, réduire les malentendus, préparer l'égalité de traitement) ; (3) une future obligation, dès que le droit français aura transposé. Avant toute publication réelle, vous revérifiez Légifrance et Service-Public.\n\nSi l'entreprise choisit d'indiquer une rémunération ou une fourchette, L. 5331-3 s'applique : le montant, les avantages, le variable, le 13e mois, l'intéressement ne doivent pas être faux ni trompeurs. Une fourchette 28-45 k€ alors que le max réel est 32 k€ est une allégation. Un « selon profil » sans aucune ancre, s'il est utilisé pour laisser croire à un niveau senior, peut induire en erreur. La politique interne peut imposer l'affichage avant la loi : vous l'appliquez alors comme règle de l'employeur, pas comme article du Code.\n\nLe salaire n'est pas le seul élément de transparence utile : le variable, les avantages, les tickets, le véhicule, le télétravail ont une valeur. S'ils sont cités, ils sont exacts. S'ils ne sont pas cités, vous ne les inventez pas à l'entretien pour « closer ». Le junior ne décide pas seul d'afficher ou non : il pose la question aux RH avec l'état du droit, la politique interne, et le risque L. 5331-3."
            },
            {
              "block_type": "callout",
              "content": "Ne pas affirmer que l'affichage du salaire est déjà obligatoire en droit français au 13/10/2026. Ne pas affirmer non plus que la directive européenne « ne concerne pas la France ». Transposition en cours : relire le texte en vigueur le jour de la publication. Source : F39133 + directive (UE) 2023/970, legal-sources.json."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Demander aux RH la politique interne d'affichage et la fourchette réelle du poste.\n2. Vérifier le droit en vigueur le jour J (Service-Public / Légifrance), pas le souvenir d'un post LinkedIn.\n3. Si affichage : fourchette ou montant, primes et avantages, périodicité, et ce qui est hors fourchette (variable).\n4. Contrôle L. 5331-3 avec le manager : le max est-il tenable pour ce niveau ?\n5. Si non-affichage (tant que le droit français le permet encore) : préparer le discours de préqualification pour aborder les prétentions sans mensonge sur le budget.\n6. Tracer la décision (affiche / n'affiche pas) dans le dossier de poste."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le CEO de Pixeline refuse d'afficher « parce que ce n'est pas obligatoire ». Le junior répond : ce n'est effectivement pas une obligation française consolidée au 13/10/2026 ; la directive 2023/970 est en transposition ; la politique interne peut malgré tout décider d'afficher ; si l'on affiche 55-65 k€, ce max devra être tenable (L. 5331-3). Les RH arbitrent : fourchette 48-58 k€ selon niveau, + BSPCE le cas échéant, formulés sans promesse de valorisation. Le CEO n'est pas « hors-la-loi » pour avoir demandé le secret à cette date ; il le serait s'il faisait publier 70 k€ fictifs."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dire au manager « c'est illégal de ne pas mettre le salaire » au 13/10/2026. Afficher 40-60 k€ pour un poste budgété 36. Cacher un variable qui est en réalité le tiers de la rémunération. Copier la fourchette d'une offre concurrente. Promettre un salaire en entretien différent de l'annonce. Ignorer une politique interne qui impose déjà l'affichage."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Grille de branche ou minima conventionnels : vous ne publiez pas en dessous du minimum applicable ; les RH confirment. Intérim : la rémunération de l'intérimaire obéit à l'égalité de traitement avec le poste de l'entreprise utilisatrice — à faire dire par l'agence et les RH, pas à approximer dans une annonce CDI. Confidentialité : ne pas afficher n'autorise pas à mentir plus tard. Transposition publiée entre-temps : vous stoppez le modèle d'annonce et vous alignez."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un manager vous écrit le 13/10/2026 : « Mets 45 k€ dans l'annonce, on verra, de toute façon on paiera 38. » Que répondez-vous, en distinguant obligation, bonne pratique et L. 5331-3 ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez les 45 k€ fictifs : même si l'affichage n'est pas encore une obligation française consolidée, toute rémunération indiquée doit être exacte (L. 5331-3). Vous proposez : soit n'afficher aucun montant (si la politique interne et le droit du jour J le permettent), soit afficher une fourchette vraie (ex. 36-38 ou 36-40 si 40 est tenable). Vous mentionnez la directive en transposition et la bonne pratique d'afficher juste. Vous ne menacez pas d'illégalité pour le seul refus d'afficher, à cette date. Vous faites valider les RH."
            }
          ],
          "position": 4
        },
        {
          "title": "Diffuser, relancer et clôturer une offre",
          "description": "Choisir les supports, suivre l'annonce, la mettre à jour et la retirer, sans la confondre avec une offre de contrat faite au candidat.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez planifier la diffusion (canaux du plan), contrôler les versions, répondre aux questions publiques sans discriminer, retirer l'annonce dès que l'emploi n'est plus à pourvoir, et distinguer cette publication d'une offre de contrat ou d'une promesse unilatérale (F39588)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Rédiger n'est pas diffuser. La diffusion exécute le plan de recrutement : chaque canal reçoit le même texte source, daté, ou une variante contrôlée (durée de caractère d'un jobboard, format France Travail). Multiplier les versions orales du manager sur LinkedIn, différentes de l'ATS, recrée des allégations et des critères illicites. Un seul texte maître, des extraits alignés.\n\nLa durée de publication n'est pas fixée par un article unique du Code pour tous les postes. Elle dépend du canal, du budget, du flux, et de l'existence réelle de l'emploi. Une bonne pratique est de revoir l'annonce à date fixe (par exemple à la revue du plan, J15) : trop de volume hors cible → on corrige le texte, on ne « rajoute un jobboard » par panique ; aucun flux → on revoit intitulé, conditions, canaux, pas seulement la mise en page. Relancer une annonce, c'est republier un texte toujours vrai, redaté, pas ressusciter un poste pourvu.\n\nClôturer est une obligation de vérité : si l'emploi n'existe plus, laisser l'offre en ligne induit en erreur sur l'existence de l'emploi (L. 5331-3). Vous retirez des jobboards, de France Travail, du site carrière, et vous alignez le manager. Clôturer l'annonce n'est pas embaucher, ni refuser les candidats encore en process : ces personnes ont droit à une information de process, distincte du texte public.\n\nL'offre d'emploi publique ne doit pas être confondue avec l'offre de contrat faite à un candidate, ni avec une promesse unilatérale de contrat. Selon la fiche Service-Public F39588 (vérifiée le 12/03/2026), ces dernières notions ne sont pas définies par la loi mais encadrées par la jurisprudence (notamment Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104). L'offre de contrat peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable ; la promesse unilatérale vaut contrat, le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Votre annonce ne doit pas emprunter le langage de la promesse."
            },
            {
              "block_type": "callout",
              "content": "Publier « CDI à pourvoir » n'engage pas à embaucher la première personne qui postule. En revanche, un e-mail « nous vous promettons le poste, signature lundi, salaire X, prise de poste Y » n'est plus une annonce : faites relire les RH (F39588). Retirez l'annonce publique dès que le poste n'est plus à pourvoir."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Texte maître validé RH + manager, PDF/ATS.\n2. Diffusion selon le plan (interne d'abord si politique, puis canaux prévus).\n3. Contrôle J+1 : l'intitulé, le lieu, le contrat sont-ils intacts sur chaque support ?\n4. Réponses aux commentaires publics : factuelles, sans critère protégé, sans négociation salariale bricolée dans un fil.\n5. Revue à la date du plan : corriger, prolonger, ou arrêter un canal.\n6. Retrait coordonné dès décision d'arrêt ou d'embauche qui clôt le besoin.\n7. Archiver la version publiée (preuve)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Alizé Services embauche au 35e jour. L'annonce Indeed est encore active, le manager continue de recevoir des messages. Le junior retire Indeed, France Travail et la page carrière le jour de la décision d'offre au candidat retenu (ou dès que le besoin est clos). Les 12 candidats en cours reçoivent un message de clôture du poste, distinct. Aucun n'avait reçu de promesse. L'annonce datée du 3 mars est archivée dans le dossier."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser le manager publier un texte différent. Oublier France Travail alors qu'on y avait déposé. Répondre sous l'annonce « on veut quelqu'un de jeune ». Republier sans relire après un changement d'horaires. Croire que retirer l'annonce équivaut à un licenciement du candidat pressenti. Envoyer à un candidat le texte de l'annonce en écrivant « voici votre contrat »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Multi-postes : clôturer partiellement (il reste 2 préparateurs sur 6) et mettre à jour le nombre — exactitude L. 5331-3. Cabinet : qui retire, vous ou le cabinet ? À écrire dans le brief. Candidature interne encore en cours : le retrait public n'empêche pas de terminer l'évaluation interne. Urgence : une diffusion « partout » hors plan recrée des versions ; revenir au texte maître."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le poste est pourvu. Le directeur dit : « Laisse l'annonce, ça fait de la marque employeur. » Rédigez votre réponse (6-8 lignes) en citant le bon fondement."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous refusez de laisser une offre pour un emploi qui n'existe plus : L. 5331-3 (existence de l'emploi). La marque employeur se travaille par un site carrière vrai, pas par une fausse offre. Vous retirez les supports, vous archivez, vous proposez éventuellement une page « nos métiers » qui n'est pas une offre. Vous ne citez pas F39588 ici : ce n'est pas une promesse unilatérale, c'est une allégation sur l'existence du poste."
            }
          ],
          "position": 5
        },
        {
          "title": "Corriger une annonce médiocre et deux modèles",
          "description": "Réécrire une offre fautive, puis disposer de deux modèles : CDI assistant RH et CDD préparateur de commandes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 28,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez annoter une annonce médiocre (illicites, tromperies, flou), produire une version publiable, et vous disposez de deux modèles complets, datés, en français, ouverts, sans salaire fictif et sans promesse d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La correction d'annonce est un geste professionnel quotidien. On ne « adoucit » pas un texte illicite : on retire le critère, on rétablit le fait, on structure. Le texte médiocre ci-dessous accumule des fautes fréquentes : intitulé genré et anglophone non expliqué, âge, apparence, nationalité, allégations de salaire et d'évolution, lieu flou, absence de date, CDD déguisé en CDI, accessibilité absente, méthode de candidature inexistante. Chacune se rattache à un pilier déjà vu (L. 1132-1, L. 5331-2 et liés, L. 5331-3, L. 5331-4, L. 1221-6, traçabilité / F39133).\n\nLes deux modèles qui suivent ne sont pas des copier-coller universels. Le CDI assistant RH illustre un métier tertiaire, sédentaire, exigences de discrétion et d'outils, ouverture H/F comme bonne pratique, fourchette salariale affichée comme bonne pratique (et donc exacte), pas comme obligation française consolidée au 13/10/2026. Le CDD préparateur illustre un contrat court, des conditions physiques et horaires dites sans fard, l'absence de promesse de CDI, un CACES seulement s'il est requis, une accessibilité honnête. Dans les deux cas, le français porte le texte ; la date est visible ; aucun critère protégé n'est utilisé comme filtre.\n\nVous adapterez le lieu, la fourchette, les outils, le bus, le rattachement. Vous ne réintroduirez pas « jeune », « native », « évolution garantie », ni un salaire décoratif. Vous ferez relire les RH avant une publication réelle : ces modèles sont pédagogiques, ils ne dispensent pas de vérifier le droit du jour J, notamment la transposition de la directive (UE) 2023/970."
            },
            {
              "block_type": "callout",
              "content": "Entreprises, adresses et personnes : fictives. Fourchettes : exemples pédagogiques, pas des moyennes de marché. Vérifier convention collective, minima et politique interne avant usage réel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour l'exercice : (1) lister les fautes avec le fondement ; (2) réécrire par blocs ; (3) comparer à un modèle. En situation réelle : la même grille, plus validation manager/RH, plus enregistrement de version."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le cas et les deux modèles ci-dessous tiennent lieu d'exemple complet d'entreprise de services et d'entrepôt."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Corriger l'orthographe et laisser l'âge. Ajouter H/F et garder « elle sera notre vitrine ». Mettre une fourchette pour « être dans l'air du temps » sans tenir le max. Copier le modèle RH pour un préparateur (on perd les 3×8). Oublier de dater la version corrigée."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le manager refuse de retirer l'âge : pas de publication. Si le CDD peut déboucher sur un CDI : on peut écrire « CDD de 4 mois, éventuellement suivi d'un CDI selon besoins et évaluation » seulement si c'est vrai — ce n'est pas une garantie. Si la directive est transposée le jour J : aligner les modèles sur l'obligation nouvelle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Annotez l'annonce médiocre (fautes + fondements), puis rédigez votre version publiable. Ensuite, relisez les deux modèles et listez trois éléments que vous modifieriez pour votre entreprise fictive (sans introduire de faute)."
            },
            {
              "block_type": "code",
              "content": "ANNONCE MÉDIOCRE — à corriger (ne pas publier)\n\nDigital People — Recrute NOW\nSales Ninja / Business Developer H (la future star de notre team)\nOn cherche un jeune (22-30 ans), de préférence un gars, native French, bon look, pour exploser les objectifs. CDI (ou CDD on verra). Salaire 50 k€ + Tesla. Évolution manager garantie en 6 mois. Full remote monde entier. Ambiance young & fun. Anglais bilingue obligatoire (on n'a que des clients de la Loire). Poste à pourvoir hier. Envoyez photo et situation de famille à tropfort@alize-fictif.fr"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Fautes principales : anglais non porté par une description française suffisante (L. 5331-4) ; sexe (« H », « gars ») et situation de famille demandée (L. 5331-2 / L. 1142-1 / L. 1132-1) ; âge et apparence (L. 1132-1) ; « native French » (origine / langue) ; photo (apparence, et souvent hors lien L. 1221-6) ; CDI alors que « CDD on verra » (L. 5331-3, nature du contrat) ; 50 k€ + Tesla et évolution garantie si faux (L. 5331-3, rémunération, description) ; remote monde entier si le travail est en Loire (lieu) ; anglais bilingue sans clients internationaux (L. 1221-6, exigence sans lien) ; pas de date. Version publiable ci-dessous : métier en français, ouverture H/F comme bonne pratique, missions, CDI seulement si c'est le contrat réel, fourchette vraie ou silence, lieu vrai, pas de photo, pas de famille, date."
            },
            {
              "block_type": "code",
              "content": "VERSION CORRIGÉE — exemple (entreprise fictive, 13/10/2026)\n\nAlizé Services — Offre du 13/10/2026 — à pourvoir\nCommercial BtoB TPE-PME (H/F)\n\nAlizé Services, entreprise de services aux TPE-PME (45 personnes, agence Lyon), recrute un commercial BtoB en CDI, temps plein, rattachement au directeur commercial.\n\nMissions : prospecter un portefeuille de TPE-PME du bassin lyonnais ; conduire des rendez-vous sur site et à distance ; proposer l'offre de services ; suivre les comptes ; reporter l'activité.\n\nProfil en lien avec l'emploi : expérience de vente BtoB ou de développement de portefeuille ; aisance orale ; permis B (déplacements clients fréquents). L'anglais n'est pas requis.\n\nConditions : CDI, 35 h, jours de la semaine ; mix terrain / agence Lyon 3e ; véhicule de service. Rémunération : fourchette brute annuelle 32-36 k€ selon expérience, + variable selon accord interne (le maximum affiché est tenable pour ce niveau). Télétravail : 1 jour par semaine après intégration, pas un full remote.\n\nAccessibilité : poste ouvert à toutes et tous. Pour échanger sur un aménagement, contact RH indiqué ci-dessous. Locaux au 2e étage avec ascenseur.\n\nCandidature : CV et message de motivation à rh@alize-fictif.fr, sans photo. Pas d'information sur la situation de famille, l'âge ou l'état de santé. Les méthodes d'évaluation (entretien recruteur, entretien manager) vous seront rappelées avant mise en œuvre.\n\nCette annonce décrit un emploi à pourvoir. Elle ne constitue pas une promesse d'embauche."
            },
            {
              "block_type": "code",
              "content": "MODÈLE 1 — CDI assistant RH (fictif)\nOffre du 13/10/2026 — Forges & Maintenance du Centre (ETI industrielle fictive), site de Ville-sur-Cher (nom d'emprunt)\n\nAssistant des ressources humaines (H/F)\nCDI, temps plein, 35 h, horaires de jour\nRattachement : responsable RH du site\n\nMissions :\n- Collecter et contrôler les éléments de paie (entrées, absences, variables) pour transmission au prestataire\n- Administrer les dossiers du personnel (entrées, sorties, DPAE en lien avec le responsable RH — la DPAE reste une obligation de l'employeur)\n- Organiser les entretiens de recrutement du site (convocations, salles, grilles)\n- Accueillir les nouvelles personnes le premier jour selon le parcours d'intégration\n- Tenir les tableaux de suivi (effectifs, absences) demandés par la responsable RH\n\nProfil en lien avec l'emploi :\n- Formation RH, paie ou expérience équivalente en administration du personnel\n- Maîtrise d'un tableur ; un logiciel de paie ou SIRH est un plus (formation interne prévue)\n- Rigueur, discrétion, français professionnel écrit\n- Pas d'anglais requis ; pas de permis requis (poste sédentaire desservi par les transports)\n\nConditions :\n- Lieu : site de Ville-sur-Cher, locaux d'accueil au rez-de-chaussée, places PMR\n- Rémunération : 24-27 k€ brut annuel selon expérience (fourchette exacte, affichage = bonne pratique / politique interne ; pas présenté comme obligation légale française consolidée au 13/10/2026)\n- Tickets restaurant selon usage de l'entreprise ; 25 jours de congés + jours de fractionnement selon règles internes\n- Télétravail : 0 jour (poste d'accueil et dossiers papier encore présents) — dit clairement\n\nAccessibilité : poste ouvert aux personnes en situation de handicap. Un échange sur les aménagements est possible avec la responsable RH. Travail sur écran, accueil physique.\n\nCandidature : rh@forges-centre-fictif.fr — CV sans photo. Information préalable : entretien RH puis entretien avec la responsable du site. Pas de test de personnalité.\n\nDate de revue de l'offre : 10/11/2026. Retrait dès que le poste n'est plus à pourvoir."
            },
            {
              "block_type": "code",
              "content": "MODÈLE 2 — CDD préparateur de commandes (fictif)\nOffre du 13/10/2026 — Entrepôt Logi-Flèche (société fictive), plateforme de Saint-Orain\n\nPréparateur / préparatrice de commandes (H/F)\nCDD de 4 mois, motif : accroissement temporaire d'activité (motif à confirmer par les RH — ne pas inventer un motif)\nTemps plein, horaires 5 h 00 - 13 h 00, lundi au vendredi\nNombre de postes : 3\n\nMissions :\n- Préparer les commandes à partir des bons et du système radio-fréquence\n- Emballer, étiqueter, signaler les ruptures et les écarts\n- Participer à la réception selon planning\n- Appliquer les règles de sécurité de la plateforme\n\nProfil en lien avec l'emploi :\n- Expérience en préparation de commandes, manutention ou formation logistique — ou premier emploi si la formation interne est réelle (à ne pas promettre à faux)\n- Lecture de consignes, travail en équipe, respect des règles de sécurité\n- CACES 1A : requis seulement si la personne conduit un gerbeur dès J1 ; sinon, écrire « formation CACES organisée pendant le CDD » si c'est vrai\n- Permis B non requis (navette depuis la gare à 6 h 10 — indiquer l'existence réelle de la navette, pas une ligne fantôme)\n\nConditions :\n- CDD 4 mois, dates du 2 novembre 2026 au 29 février 2027\n- Rémunération : 11,80 € brut / heure (exemple pédagogique — aligner sur le minimum conventionnel réel le jour J) ; primes de froid ou de productivité seulement si elles existent\n- Station debout, marche, port de charges, entrepôt non chauffé en hiver : à dire\n- Pas de promesse de CDI dans cette annonce\n- Lieu : plateforme de Saint-Orain, 8 km de la gare ; vestiaires sur site\n\nAccessibilité : contraintes physiques décrites ci-dessus. Poste ouvert aux personnes en situation de handicap ; aménagement à étudier avec la médecine du travail et les RH, pas en commentaire d'annonce. Locaux : quai, sanitaires RDC.\n\nCandidature : sessions de recrutement les 20 et 21 octobre 2026, inscription à emploi@logifleche-fictif.fr. CV sans photo. Pas de renseignement sur la santé ou la situation de famille.\n\nCette offre sera retirée à pourvoi des 3 postes ou au plus tard le 25/10/2026."
            },
            {
              "block_type": "text",
              "content": "Ce que vous auriez dû lister dans votre mise en pratique : fautes de l'annonce médiocre rattachées aux textes ; version corrigée structurée ; pour les modèles, trois adaptations licites possibles (lieu, fourchette vraie, outils SIRH, navette, dates de session) sans réintroduire d'âge, de photo, de fausse Tesla ni d'évolution garantie."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Rédiger et diffuser une offre d'emploi",
          "description": "Dix questions : langue, discrimination, allégations, salaire, diffusion.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Rédiger et diffuser une offre d'emploi",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Au 13/10/2026, indiquer le salaire ou une fourchette dans une offre d'emploi en France est :",
                "question_type": "single_choice",
                "options": [
                  "A. Pas (encore) une obligation consolidée en droit français selon la fiche Service-Public F39133, alors que la directive (UE) 2023/970 est en transposition ; l'affichage est une bonne pratique / future obligation, et s'il a lieu il doit être exact (L. 5331-3).",
                  "B. Déjà obligatoire pour toutes les entreprises, sous peine de nullité de chaque embauche.",
                  "C. Interdit par le Code du travail, le salaire étant un secret pénal.",
                  "D. Obligatoire seulement sur LinkedIn, jamais sur France Travail."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Legal-sources.json / F39133 (02/10/2025) : pas encore obligatoire en droit français au jour de la fiche, directive 2023/970 en transposition. Vous revérifiez le jour J. Si un montant est publié, L. 5331-3 interdit qu'il soit faux. Ce n'est ni un secret pénal, ni une règle « LinkedIn seulement »."
              },
              {
                "question": "Une offre pour un emploi exercé en France doit être :",
                "question_type": "single_choice",
                "options": [
                  "A. Rédigée en français ; un terme étranger sans équivalent s'accompagne d'une description française suffisamment détaillée (L. 5331-4).",
                  "B. Rédigée uniquement en anglais si le métier est « tech ».",
                  "C. Rédigée dans la langue maternelle du manager.",
                  "D. Sans intitulé, pour éviter toute discrimination."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 5331-4. Une version anglaise peut s'ajouter, elle ne remplace pas le français porteur. L'absence d'intitulé n'est pas une exigence légale et nuit à la clarté."
              },
              {
                "question": "Mentionner « femme, 25-40 ans, de préférence mariée » dans une offre est :",
                "question_type": "single_choice",
                "options": [
                  "A. Illicite : critères protégés (L. 1132-1) et encadrement des mentions de sexe / situation de famille dans les offres (L. 5331-2, L. 1142-1, F39133), hors exceptions limitées (artiste, mannequin/modèle).",
                  "B. Autorisé si l'on ajoute H/F à la fin.",
                  "C. Autorisé en CDD, interdit en CDI.",
                  "D. Une simple maladresse, jamais visée par un texte."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "H/F ne lave pas un texte sexiste. Le contrat (CDD/CDI) ne change pas l'interdiction. F39133 et L. 1132-1 / L. 5331-2 sont les fondements à retenir, exceptions étroites."
              },
              {
                "question": "Ajouter « (H/F) » ou « (H/F/X) » à un intitulé, ou choisir un intitulé épicène, c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne pratique d'ouverture, cohérente avec l'interdiction de réserver l'emploi à un sexe — pas « la » formule légale unique obligatoire.",
                  "B. La seule mention qui rend une offre valable, même si le texte reste sexiste.",
                  "C. Interdit, car cela évoque le sexe.",
                  "D. Réservé aux offres de la fonction publique."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le cours distingue obligation (ne pas réserver l'offre à un sexe, exceptions limitées) et bonne pratique (H/F, H/F/X, épicène). Aucune de ces graphies n'est un sésame si le reste discrimine. Ce n'est pas interdit du seul fait d'évoquer une ouverture."
              },
              {
                "question": "Publier « CDI 40 k€, horaires de jour, Paris » alors que le poste est un CDD de nuit en entrepôt à 35 km est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une allégation fausse ou trompeuse sur la nature, la rémunération, le lieu et la description (L. 5331-3).",
                  "B. Une habileté de sourcing, recommandée par la CNIL.",
                  "C. Permis si l'on corrige à l'entretien.",
                  "D. Sans objet : seule la DPAE compte."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 5331-3 vise l'existence, la nature, la description, la rémunération et avantages, le lieu. Corriger plus tard ne rend pas l'offre licite. La CNIL ne recommande pas le mensonge. La DPAE (F23107) est une autre obligation, en fin de course, à la charge de l'employeur."
              },
              {
                "question": "Pourquoi dater une offre et en conserver la version publiée ?",
                "question_type": "single_choice",
                "options": [
                  "A. Pour la traçabilité, la mise à jour, le retrait, et la preuve — en lien avec une diffusion professionnelle (fiche F39133 à relire) ; une annonce sans date et jamais retirée fait peser un risque sur l'existence de l'emploi (L. 5331-3).",
                  "B. Parce qu'une offre non datée est nulle de plein droit au bout de 48 h, article unique inventé.",
                  "C. Uniquement pour le référencement Google.",
                  "D. Ce n'est jamais utile si l'on recrute en interne."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Pas d'article « 48 h » dans les sources du cours. La date est une exigence opérationnelle de traçabilité, alignée sur la fiche offres, et elle permet de ne pas laisser vivre une fausse offre. L'interne n'exonère pas d'un texte public exact s'il y a diffusion externe."
              },
              {
                "question": "Une exigence « permis B + anglais bilingue » dans une annonce d'assistant RH 100 % sédentaire, sans client étranger, pose surtout un problème au regard de :",
                "question_type": "single_choice",
                "options": [
                  "A. L'article L. 1221-6 (informations / exigences en lien direct et nécessaire avec l'emploi) — ces critères sont à retirer ou à justifier par des faits du poste.",
                  "B. L'interdiction d'écrire en français (L. 5331-4).",
                  "C. La DPAE, qui interdit le permis.",
                  "D. La directive (UE) 2023/970, qui interdit les langues."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6. L. 5331-4 impose le français, il n'interdit pas de rédiger en français. La DPAE ne traite pas du permis du candidat. La directive 2023/970 concerne la transparence des rémunérations, pas l'interdiction des langues. Un anglais ou un permis peuvent être légitimes si le poste les exige vraiment."
              },
              {
                "question": "Laisser en ligne une annonce alors que le poste est pourvu, « pour la marque employeur », c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. À refuser : l'emploi n'existe plus, risque L. 5331-3 ; retirer l'offre et travailler la marque autrement.",
                  "B. Recommandé par Service-Public F39588.",
                  "C. Obligatoire pendant 5 ans (durée CNIL du vivier).",
                  "D. Sans risque si l'on a mis H/F."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "F39588 traite de l'offre de contrat vs promesse unilatérale, pas d'une publicité par fausse offre. Les 5 ans sont l'archive probatoire des non-retenus, pas une durée de publication. H/F ne couvre pas un poste inexistant."
              },
              {
                "question": "Publier une offre d'emploi, c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Décrire un emploi à pourvoir ; ce n'est pas, en soi, une promesse unilatérale d'embauche (F39588 : une promesse n'est pas obligatoire ; le langage d'engagement ferme relève d'un autre acte, à faire relire par les RH).",
                  "B. Embaucher automatiquement le premier candidat.",
                  "C. Un contrat de travail dès la mise en ligne.",
                  "D. Interdit tant que le salaire n'est pas affiché, au 13/10/2026."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "F39588 (12/03/2026) et jurisprudence citée par Service-Public. L'annonce n'est pas un contrat. Au 13/10/2026 l'affichage du salaire n'est pas une condition de validité consolidée de l'offre en droit français."
              },
              {
                "question": "Dans l'annonce médiocre du module, demander une photo et la situation de famille est à écarter surtout parce que :",
                "question_type": "single_choice",
                "options": [
                  "A. Ces demandes touchent l'apparence physique et la situation de famille (critères protégés, L. 1132-1) et n'ont en général pas de lien direct et nécessaire avec l'emploi (L. 1221-6) ; la situation de famille est en outre visée par le droit des offres.",
                  "B. La CNIL impose la photo d'identité sur tout CV.",
                  "C. La directive 2023/970 impose la photo pour vérifier l'âge.",
                  "D. France Travail refuse les candidatures sans photo."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Photo = apparence, souvent sans lien avec l'emploi (exceptions très particulières, type mannequin, hors notre cas). Situation de famille : critère protégé et mention d'offre encadrée. Aucune des sources du cours n'impose la photo ; la directive 2023/970 n'est pas un prétexte à contrôler l'âge."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 6,
      "title": "Sourcing et recherche de candidats",
      "description": "Aller chercher des profils, construire des requêtes booléennes, respecter RGPD et conditions d'utilisation, et écrire des messages d'approche utiles.",
      "lessons": [
        {
          "title": "Sourcing actif et sourcing passif",
          "description": "Distinguer les candidatures qui viennent à vous et les personnes que vous allez chercher, et savoir quand activer l'un, l'autre, ou les deux.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez définir sourcing passif et sourcing actif, les relier au plan de recrutement, et expliquer ce que le sourcing n'est pas : ni un contournement du droit, ni une obligation légale de canal, ni une licence pour contacter n'importe qui n'importe comment."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le sourcing, au sens professionnel, est l'ensemble des actions par lesquelles vous identifiez des personnes susceptibles d'occuper un emploi, au-delà de la seule attente des réponses à l'annonce. On parle de sourcing passif lorsque vous organisez l'arrivée des candidatures : offre en ligne, page carrière, CVthèque où les personnes se sont inscrites, candidatures spontanées, internat, cooptation qui vient à vous. On parle de sourcing actif lorsque vous partez à la recherche de personnes qui n'ont pas postulé : interrogation de bases, réseaux professionnels, vivier que vous relancez, approche directe, relation écoles. Les deux sont complémentaires. Un poste abondant peut vivre principalement en passif. Un poste tendu vit rarement sans actif.\n\nCette distinction n'est pas juridique. Aucun article du Code du travail n'impose de « chasser » ou d'attendre. Le choix est une politique interne et une bonne pratique, calée sur la note de marché. En revanche, dès que vous traitez des données personnelles (nom, e-mail, parcours, identifiant de réseau), le RGPD s'applique, que la personne ait postulé ou non. La CNIL, dans son guide du recrutement (30/01/2023) et son référentiel 2026, encadre notamment l'information des personnes, les durées, l'opposition. Sourcer n'est pas « plus libre » que de recevoir un CV : c'est souvent plus exigeant, parce que la personne ne s'est pas présentée d'elle-même.\n\nLe sourcing actif a un coût de temps. Une heure de messages génériques produit du bruit et un taux de réponse médiocre — que vous mesurerez en interne, sans inventer un « taux de marché ». Une heure de requêtes précises + messages personnalisés produit moins de noms et plus de conversations. Le junior qui « balance 80 InMail le lundi » n'est pas plus performant que celui qui en envoie 12 ciblés. Le manager doit comprendre que l'actif n'est pas magique : il dépend du brief (fiche, critères, fourchette, délai) et de la qualité du message.\n\nLe sourcing n'autorise pas à écarter des personnes sur un critère protégé (L. 1132-1), ni à collecter des informations sans lien avec l'emploi (L. 1221-6), ni à mentir sur le poste (même logique que L. 5331-3 si vous décrivez l'emploi). Il n'autorise pas non plus à contourner les conditions d'utilisation d'une plateforme. L'actif se fait dans le cadre : outils de l'entreprise, comptes professionnels, finalité recrutement, information de la personne au plus tard au premier contact utile."
            },
            {
              "block_type": "callout",
              "content": "Sourcing actif = vous allez vers la personne. Sourcing passif = la personne vient vers vous. Ni l'un ni l'autre n'est une obligation légale de canal. Les deux sont des traitements de données. L'actif n'excuse pas un message mensonger, un critère discriminatoire, ou un contournement de CGU."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Relire la fiche, la note de marché et le plan : le poste a-t-il besoin d'actif, et à partir de quand (critère d'arrêt du passif) ?\n2. Lister les sources autorisées par l'entreprise (ATS, CVthèque prestataire, réseau professionnel d'entreprise, vivier informé).\n3. Fixer un volume de temps (ex. 2 créneaux de 90 minutes) plutôt qu'un volume de messages.\n4. Préparer les synonymes et la requête avant d'ouvrir le réseau.\n5. Tracer dans l'ATS : source = sourcing, date, message envoyé, réponse, opposition éventuelle.\n6. Informer les RH si vous sortez des outils cadrés (fichier Excel personnel, groupe WhatsApp : à éviter)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Pixeline, l'annonce de product designer a produit 40 candidatures, 2 au niveau. Au 15e jour, le critère d'arrêt du plan déclenche l'actif. Le recruteur junior ne « contacte tous les designers de France ». Il cible 5 ans d'expérience produit SaaS, France, et un portefeuille visible. 15 approches en 3 jours, 4 réponses, 2 préqualifications. Le passif continue (l'annonce reste vraie). L'actif n'a pas remplacé le droit : chaque personne est informée de la finalité dès le message."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Attendre trois mois un métier tendu « pour voir ». Contacter 200 personnes avec le même texte. Sourcer sur un critère d'âge ou de photo. Utiliser le compte LinkedIn personnel, puis partir en congés avec les conversations. Promettre un CDI dans un message d'approche intérim. Confondre CVthèque (personnes inscrites) et scraping de données non informées."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Confidentialité : l'actif permet de ne pas publier ; le message ne divulgue pas la roadmap. Volume : l'actif individuel est inadapté à 10 préparateurs ; sessions + intérim. Interne : le sourcing interne (mobilité) est un actif particulier, soumis à la politique RH. Cabinet : vous sourcer « en double » du cabinet crée des conflits de présentation ; cadrez l'exclusivité."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour le poste de technicien de maintenance 3×8 (plan industrie), le manager dit : « Inutile de sourcer, l'annonce suffit, on n'a jamais fait ça. » En 8 lignes, articulez passif / actif, le moment de bascule, et ce que vous ne ferez pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous rappelez l'historique : annonces seules déjà insuffisantes, marché local tendu. Le passif (FT, jobboard industrie, cooptation qui vient) reste ouvert. L'actif (approche rayon 40 km, vivier, CFA) est prévu par le plan, pas un caprice. Basculement : dès J0 en parallèle, ou au plus tard si < N préqualifiés à J15. Vous ne ferez pas : spam, critère d'âge, contournement de CGU, fichier personnel non RGPD. Vous ne présentez pas l'actif comme une obligation légale, mais comme le moyen adapté."
            }
          ],
          "position": 0
        },
        {
          "title": "Requêtes booléennes : AND, OR, NOT, guillemets, parenthèses",
          "description": "Construire une requête lisible qui élargit, restreint ou exclut, avant de l'utiliser dans un outil de l'entreprise.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez expliquer le rôle de AND, OR, NOT, des guillemets et des parenthèses, écrire une requête simple sans erreur de logique, et vérifier ce qu'elle inclut et exclut. Vous savez que la syntaxe exacte peut varier selon l'outil : vous testez dans l'outil autorisé, vous ne copiez pas une recette de contournement."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une requête booléenne est une phrase logique qui combine des mots pour trouver des profils. Elle ne juge personne. Elle ne remplace pas la lecture du CV. Elle évite de rater un synonyme et d'englober un métier voisin. Cinq briques suffisent au junior.\n\nAND (ET) : les deux termes doivent être présents. « maintenance AND mécanique » exige les deux. Trop de AND appauvrit le résultat (sur-contrainte). OR (OU) : au moins un des termes. « électromécanicien OR « technicien de maintenance » » élargit aux synonymes. Pas assez de OR et vous ratez les intitulés du marché. NOT (SAUF) : exclut un terme. « commercial NOT immobilier » écarte un voisin. Un NOT mal placé supprime des profils utiles (un commercial BtoB qui a fait un stage immobilier). Les guillemets imposent une expression exacte : « chargé de clientèle » n'est pas chargé + clientèle séparés. Les parenthèses groupent : (« product designer » OR « UX designer ») AND SaaS. Sans parenthèses, l'outil peut lier les mots dans un ordre que vous n'avez pas voulu.\n\nCes opérateurs sont une bonne pratique de recherche, pas une obligation légale. Ils n'autorisent pas à cibler « femme AND jeune AND Paris 16e » : ce serait un usage discriminatoire de la technique (L. 1132-1), et souvent sans lien avec l'emploi (L. 1221-6). La requête s'écrit avec des mots de métier, d'outils, de compétences, de lieu professionnel, pas avec des critères protégés.\n\nLa syntaxe n'est pas universelle. Un ATS, un jobboard, un moteur, un réseau professionnel peuvent exiger ET/OU, le signe moins, ou des filtres à cocher à la place de NOT. Avant de « croire » une requête, vous lisez l'aide de l'outil fourni par l'entreprise. Vous n'utilisez pas un script, une extension ou une astuce destinée à contourner une limite de compte ou des conditions d'utilisation. Si l'outil officiel ne permet pas une recherche, vous changez de canal ou vous demandez un outil conforme, vous ne forcez pas l'accès."
            },
            {
              "block_type": "callout",
              "content": "La booléenne est un outil de précision métier. Elle n'est pas un outil de tri par âge, sexe, origine, apparence ou « photo ». Toute requête construite sur un critère protégé est à jeter, même si elle « marche » techniquement."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Lister 5 à 10 mots du métier (intitulé, synonymes, outils, habilitation).\n2. Séparer : indispensables (AND), alternatives (OR), voisins à écarter (NOT) avec prudence.\n3. Mettre les expressions en guillemets.\n4. Grouper les OR entre parenthèses.\n5. Tester sur un petit jeu : la requête ramène-t-elle des faux amis ? Rate-t-elle un profil type connu ?\n6. Enregistrer la requête dans le dossier de poste (reproductibilité).\n7. Adapter la syntaxe à l'outil, sans recette de contournement."
            },
            {
              "block_type": "code",
              "content": "BRIQUES — mémo\n\nAND     Les deux (ou plus) sont exigés\nOR      Au moins un\nNOT     Exclusion (à manier avec prudence)\n\"...\"   Expression exacte\n( )     Priorité / regroupement\n\nSchéma type :\n(\"intitulé A\" OR \"intitulé B\" OR synonyme)\nAND (compétence OR outil)\nAND bassin_ou_remote\nNOT (\"métier voisin\" OR stage_seulement)"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Poste Alizé : commercial BtoB TPE. Requête de départ : (\"chargé d'affaires\" OR \"attaché commercial\" OR \"commercial BtoB\" OR « business developer ») AND (TPE OR PME OR « portefeuille ») NOT immobilier NOT assurance. Test : un profil « chasse immobilière BtoB » sort encore → ajouter NOT « immobilier ». Un bon profil « itinénaire TPE » sans les mots TPE disparaît → élargir OR « terrain » avec prudence, ou accepter de le rater et de le prendre en cooptation."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Tout mettre en AND (« commercial AND BtoB AND TPE AND Lyon AND Salesforce AND anglais AND CDI ») et conclure que « personne n'existe ». Oublier les guillemets sur chargé de clientèle. Écrire OR sans parenthèses. NOT « junior » et perdre les bons profils 2 ans. Cibler « femme » ou une tranche d'âge. Copier une requête trouvée sur un forum de contournement de CGU."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Outil sans booléen : utiliser les filtres métiers/lieu, et les synonymes en plusieurs recherches. Langue des profils : ajouter les équivalents (maintenance / maintenance technician) si le bassin est bilingue, sans exiger une « native ». Habilitations : « habilitation électrique » OR B2V OR BR, selon le vrai besoin. Données incomplètes : beaucoup de profils n'écrivent pas « BtoB » ; trop de précision devient aveugle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Écrivez une requête pour : technicien de maintenance mécanique, pas de l'immobilier, pas « agent de sécurité », synonymes électromécanicien / maintenance industrielle, expression « habilitation électrique » souhaitée mais non bloquante. Justifiez chaque opérateur."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Proposition : (\"technicien de maintenance\" OR électromécanicien OR \"maintenance industrielle\" OR \"maintenance mécanique\") AND (mécanique OR électromécanique) NOT (immobilier OR \"agent de sécurité\" OR gardiennage). « Habilitation électrique » OR B2V en OR (pas en AND) si elle est souhaitée, pas exigée : un AND la rendrait bloquante. Guillemets sur les expressions. Parenthèses autour des synonymes. Le NOT immobilier évite un voisin ; s'il élimine un industriel qui a travaillé un an chez un bailleur, vous l'assouplirez après test. Syntaxe à adapter à l'outil interne."
            }
          ],
          "position": 1
        },
        {
          "title": "Synonymes métiers et exercices progressifs de requêtes",
          "description": "Élargir sans se noyer : construire trois niveaux de requête et corriger les erreurs de logique.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez extraire les synonymes d'un métier (annonce, marché, équipe), écrire une requête large, une requête médiane et une requête étroite, et corriger une requête qui exclut trop ou inclut trop."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les métiers ne portent pas un seul nom. Un assistant RH est aussi « assistant de gestion du personnel », « gestionnaire administration du personnel », parfois « chargé de missions RH » junior. Un préparateur est « agent logistique », « agent de quai », « order picker ». Un product designer est « UX/UI », « designer produit », parfois « UX designer » sans le mot produit. Si votre requête n'a qu'un intitulé, vous ne sourcer pas le marché, vous sourcer votre jargon interne.\n\nLes synonymes se collectent : fiche de poste, offres comparables (lecture, pas copie), langage de l'équipe, diplômes et titres de formation, outils. On ne les invente pas pour faire joli : « people partner » pour un assistant paie de site industriel n'est pas un synonyme, c'est un autre métier. Distinguez synonymes (même emploi, autre étiquette) et métiers voisins (emploi différent). Le OR est pour les premiers. Le NOT, prudent, pour les seconds.\n\nTravailler en trois largeurs évite l'illusion du « il n'y a personne ». Niveau 1, large : intitulés + un seul ancrage (bassin ou grande compétence). Niveau 2, médian : synonymes + compétence clé + exclusion d'un voisin. Niveau 3, étroit : tout cela + outil ou habilitation. Vous commencez souvent au médian. Si zéro résultat, vous élargissez en enlevant un AND, pas en ajoutant un critère d'âge. Si trop de bruit, vous ajoutez une parenthèse d'exclusion ou un ancrage vrai, pas « photo professionnelle ».\n\nCes exercices sont des drills. La correction n'est pas la seule requête possible : c'est une requête cohérente, justifiée, sans critère protégé, sans syntaxe de contournement. En situation réelle, vous la testez dans l'outil autorisé et vous notez ce qu'elle ramène."
            },
            {
              "block_type": "callout",
              "content": "Trois largeurs, un même droit : pas de critère protégé dans la requête. Si le manager dit « cherche des profils de moins de 30 ans », vous refusez de le traduire en booléen. Vous traduisez un niveau d'expérience lié à l'emploi, si le brief le justifie."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque exercice : (1) lister synonymes vs voisins ; (2) écrire large / médian / étroit ; (3) dire ce que chaque niveau devrait trouver et rater ; (4) comparer à la correction ; (5) noter une variante acceptable."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "À Nimvia, le fondateur dit « Customer Success ». Synonymes utiles : customer success, CSM, « succès client », « chargé de compte » BtoB SaaS. Voisins : support N1 pur, téléconseiller BtoC, commercial hunter. Requête médiane : (\"customer success\" OR CSM OR \"succès client\" OR \"customer success manager\") AND (SaaS OR BtoB OR logiciel) NOT (\"téléconseiller\" OR « call center »). Le junior évite NOT support, trop large (beaucoup de CSM sont passés par le support)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Prendre tous les intitulés LinkedIn pour des synonymes. Étroit d'abord, puis conclure à la pénurie. Large sans jamais relire les 200 résultats. Mélanger français et anglais n'importe comment (utile) avec une exigence « native » (illicite / excessif). Corriger une requête en y ajoutant le prénom d'école élitiste comme filtre social déguisé."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Reconversion : les synonymes d'intitulé ne suffisent pas ; il faut des compétences transférables (OR « pédagogie » OR « animation de formation » pour un futur recruteur issu du formateur). Intérim : les profils s'intitulent parfois par la mission (« cariste chez X ») : ancrer CACES, entrepôt, préparation. Métiers réglementés : le titre protégé peut être en AND si l'exercice l'impose (RH + diplôme d'État infirmier, pas pour un assistant RH)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Faites les trois exercices, sans outil de contournement, sur papier."
            },
            {
              "block_type": "code",
              "content": "EXERCICE 1 — élargir\nPoste : assistant RH (administration du personnel + paie de site)\nÉcrivez 6 synonymes ou équivalents, 2 voisins à ne pas fondre, puis une requête médiane.\n\nEXERCICE 2 — parenthèses\nOn veut : (préparateur OU « agent logistique ») ET (entrepôt OU quai) SAUF cariste-seul si le poste ne conduit pas\nÉcrivez la requête. Dites ce qui se passe si vous oubliez les parenthèses autour des OR.\n\nEXERCICE 3 — trop étroit\nRequête donnée :\n\"product designer\" AND Figma AND SaaS AND \"5 ans\" AND English AND Paris AND Series AND B AND \"native\"\nListez 4 raisons pour lesquelles elle est mauvaise (logique et/ou droit). Proposez une version médiane licite."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Les corrections ci-dessous sont des versions justifiées, pas les uniques bonnes réponses. Adaptez la syntaxe à l'outil interne."
            },
            {
              "block_type": "code",
              "content": "CORRECTION 1\nSynonymes / équivalents : assistant RH, assistant de gestion du personnel, gestionnaire administration du personnel, assistant paie (si le poste paie vraiment), chargé de missions RH junior, assistant ressources humaines.\nVoisins : responsable RH, psychologue du travail, chargé de recrutement 100 % chasse.\nMédiane : (\"assistant RH\" OR \"assistant ressources humaines\" OR \"gestionnaire administration du personnel\" OR \"assistant de gestion du personnel\") AND (paie OR « administration du personnel » OR SIRH)\n\nCORRECTION 2\n(\"préparateur de commandes\" OR préparateur OR \"agent logistique\") AND (entrepôt OR quai OR plateforme) NOT (cariste AND NOT préparateur)\nVersion plus simple si le poste ne conduit pas : (... ) AND (entrepôt OR quai) NOT \"cariste\"\nSans parenthèses, un OR peut se lier au AND suivant et ramener n'importe quel « quai » sans le métier, ou exclure trop. Les parenthèses figent le groupe d'intitulés.\n\nCORRECTION 3\nMauvais : trop de AND (personne n'écrit « 5 ans » + Series B) ; \"native\" (critère d'origine / langue illicite ou sans lien) ; Paris en AND alors que le poste Pixeline est remote France ; English en AND si les specs sont en français. « Series B » n'est pas une compétence, c'est un stade de startup, souvent absent des profils.\nMédiane licite : (\"product designer\" OR \"designer produit\" OR \"UX designer\") AND (Figma OR « design system ») AND (SaaS OR BtoB OR logiciel)\nAnglais : seulement si réunions clients US réelles, alors \"English\" OR anglais en OR, pas « native ». Lieu : France OR remote, selon le vrai cadre."
            }
          ],
          "position": 2
        },
        {
          "title": "Réseaux professionnels, jobboards et recherche sur le web public",
          "description": "Utiliser les canaux autorisés, comprendre le principe d'une recherche sur pages publiques, sans tutoriel de contournement des CGU.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez choisir entre CVthèque de jobboard, réseau professionnel de l'entreprise et simple lecture de pages publiques. Vous comprenez le principe dit parfois « X-Ray » (interroger l'index public d'un moteur) et vous savez pourquoi ce cours ne fournit aucun tutoriel pour contourner des conditions d'utilisation, des paywalls ou des limites de compte."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Trois familles d'outils reviennent dans le sourcing junior. Première : les jobboards et leurs CVthèques. Des personnes y ont déposé un CV, souvent pour être trouvées. Vous respectez le contrat de l'entreprise avec le board, les mentions d'information du board, et vous n'exportez pas la base sur une clé USB personnelle. Deuxième : les réseaux professionnels (le plus souvent, le compte Recruiter ou l'équivalent payé par l'employeur). Vous cherchez, vous envoyez un message dans l'outil, vous tracez. Le compte est un outil de travail, pas un vivier privé que vous emportez. Troisième : le web public. Des pages personnelles, des portfolios, des articles, des pages d'entreprise listent des personnes et des compétences. Les moteurs de recherche indexent une partie de ces pages.\n\nLe principe parfois appelé X-Ray consiste à interroger un moteur sur des pages déjà publiques, avec des mots-clés de métier, pour identifier des personnes qui parlent de leur travail. Ce n'est ni magique ni illicite par nature : lire une page publique n'est pas un piratage. Cela devient un problème lorsque l'on cherche à contourner les conditions d'utilisation d'une plateforme (accès aux profils hors connexion, extraction massive, automatisation pour éviter une limite, usurpation d'identité de compte, outils dont l'objet est de « bypass » un paywall). Ce cours n'enseigne pas ces procédures, n'en donne pas les opérateurs de contournement, et ne les présente pas comme une habileté de recruteur.\n\nBonne pratique : utiliser les fonctionnalités prévues par l'outil que l'entreprise a licencié ; limiter la collecte au nécessaire (L. 1221-6, minimisation RGPD) ; informer la personne au premier contact ; ne pas extraire en masse ; ne pas créer de faux comptes. Politique interne : certains employeurs interdisent toute recherche hors ATS. Vous appliquez la plus stricte des règles qui s'imposent (loi, CGU acceptées par l'entreprise, politique RH). Obligation : traiter licitement les données, ne pas discriminer, ne pas tromper sur l'emploi.\n\nUn portfolio public (designer, développeur) est souvent plus riche qu'un CV. Le contacter via le moyen indiqué par la personne (formulaire, e-mail professionnel affiché) est préférable à un message hors canal. Si aucun moyen n'est affiché, le réseau professionnel licencié reste le canal par défaut, pas une adresse personnelle trouvée par recoupement agressif (données excessives)."
            },
            {
              "block_type": "callout",
              "content": "Pas de tutoriel de contournement. Pas d'opérateurs dont l'objet est d'accéder à des espaces non autorisés, de mass-scraper ou de contourner une CGU. Si l'outil interne est limité, vous le dites aux RH (budget, licence), vous n'inventez pas une astuce. Le principe X-Ray = recherche sur du public déjà indexé, dans le respect des CGU et du RGPD."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Demander la liste des outils licenciés (jobboard, réseau, ATS).\n2. Préférer la CVthèque où la personne s'est inscrite, puis le réseau professionnel d'entreprise, puis les pages publiques volontairement exposées (portfolio).\n3. Collecter le minimum : nom professionnel, moyen de contact licite, éléments de parcours liés à l'emploi.\n4. Premier message = information (qui vous êtes, pourquoi, d'où vient le contact si utile).\n5. Tracer la source dans l'ATS.\n6. En cas de doute CGU / DPO : ne pas extraire, poser la question."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Pour le product designer Pixeline, le junior utilise d'abord le compte Recruiter de l'entreprise, puis des portfolios publics dont le footer affiche un e-mail professionnel. Il n'utilise pas d'extension d'extraction, ni de fausse identité, ni de requête conçue pour afficher des profils hors des règles du réseau. Deux designers répondent via le canal prévu. Un troisième a un formulaire « contact » sur son site : c'est ce canal qui est utilisé."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Créer un faux profil pour voir plus loin. Copier 300 profils dans un Excel perso. Acheter une base d'e-mails. Utiliser un « hack X-Ray » trouvé sur un forum. Contacter une personne sur son e-mail personnel recoupé avec un réseau scolaire, sans nécessité. Croire que « c'est public donc je fais ce que je veux » (le public n'efface ni CGU, ni RGPD, ni L. 1132-1)."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CVthèque payante : la personne a souvent consenti à être visible pour le recrutement ; lisez malgré tout les mentions et la date du CV. Page entreprise « notre équipe » : données souvent à des fins de présentation, pas de chasse ; contactez via le canal professionnel, avec sobriété. Mineurs / apprentis très jeunes : vigilance renforcée, canaux écoles, pas d'approche agressive. International : le droit applicable et les CGU du pays / de l'outil, avec les RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Un collègue vous envoie « la requête X-Ray qui bypasse LinkedIn » et un fichier de 2 000 e-mails. Que faites-vous, dans l'ordre ? Distinguez principe de recherche publique, CGU, RGPD, hiérarchie."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous n'utilisez ni la requête de bypass, ni le fichier. Vous informez les RH / DPO : base d'e-mails et outil de contournement ne sont pas un canal autorisé. Vous continuez sur les outils licenciés et les pages publiques sans extraction massive. Le principe « chercher ce qui est public » ne justifie pas le contournement. Vous ne relayer pas le fichier. Vous documentez le refus. Ce n'est pas du purisme : c'est le cadre du cours et de l'employeur."
            }
          ],
          "position": 3
        },
        {
          "title": "Viviers, RGPD et sourcing : informer, durée, opposition",
          "description": "Traiter les personnes sourcées comme des personnes concernées : information, finalité, 2 ans recommandés, droit d'opposition.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez ce que vous devez à une personne sourcée au regard du guide CNIL recrutement et du référentiel 2026 : informer, limiter la durée du vivier (recommandation 2 ans à compter du dernier contact), honorer l'opposition, distinguer vivier et archive probatoire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Sourcer, c'est collecter. Un nom, un intitulé, un e-mail, une note « à recontacter pour le poste X » sont des données personnelles. Le traitement a une finalité : recrutement pour un poste ou un vivier. La personne n'a pas toujours postulé : l'information n'est donc pas « implicite ». Le guide CNIL du recrutement (30/01/2023) et la fiche TPE/PME demandent de se poser les questions d'information, de durée, de droits. Le référentiel CNIL durées de conservation RH (2 avril 2026, mis à jour 20 mai 2026) rappelle : candidat retenu, base active le temps de la procédure puis réemploi RH ; candidat non retenu, archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins probatoires (L. 1134-5) — obligation de conservation de preuve, pas une base d'appels ; vivier / CVthèque, jusqu'à 2 ans à compter du dernier contact, sauf opposition — recommandation CNIL, pas une durée unique imposée par le RGPD lui-même.\n\nPour le sourcing, trois gestes sont non négociables dans une pratique conforme à ces recommandations. Informer : qui vous êtes, pourquoi vous contactez, où vous avez vu le profil si c'est utile et non anxiogène, comment s'opposer, durée envisagée si vous gardez la fiche. Tracer le dernier contact : c'est lui qui fait courir la durée recommandée de 2 ans. Honorer l'opposition : plus de relance vivier, retrait de la base active ; l'archive de preuve d'un process déjà ouvert est un autre traitement, que les RH / DPO calent.\n\nVous ne conservez pas « au cas où » un profil sourcé en 2019. Vous ne notez pas « accent » ou « trop âgée ». Vous ne transférez pas la liste à un manager sur un WhatsApp personnel. La minimisation s'applique : pas de copie du CV complet de 12 pages dans six outils. Un ATS paramétré vaut mieux qu'un tableur sauvage.\n\nL'information n'a pas à être un roman juridique dans le premier InMail, mais le premier contact doit être transparent et un lien ou une phrase doit indiquer comment exercer les droits. La politique de confidentialité carrière de l'entreprise, si elle existe, est le bon renvoi — encore faut-il qu'elle couvre le sourcing, pas seulement les candidatures via le formulaire."
            },
            {
              "block_type": "callout",
              "content": "2 ans = recommandation d'autorité pour le vivier, à compter du dernier contact, avec information et opposition possible. 5 ans = archive probatoire des non-retenus, autre finalité. Ne confondez pas les deux, ne présentez pas 2 ans comme « la » durée RGPD unique."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. N'entrer un profil sourcé dans l'ATS qu'avec la finalité, la source, la date.\n2. Au premier message : identité, poste, phrase d'information / lien politique + possibilité de dire non.\n3. Si la personne refuse : statut opposition, plus de relance.\n4. Si elle dit « pas maintenant » : vivier, date de relance, dernier contact.\n5. Purge selon la politique (reco 2 ans).\n6. Escalade DPO / RH si une liste arrive de l'extérieur."
            },
            {
              "block_type": "code",
              "content": "PHRASE D'INFORMATION — à adapter (pas un contrat)\n\n« Je vous contacte au sujet d'un poste de [intitulé] chez [employeur]. Vos coordonnées professionnelles seront utilisées uniquement pour ce recrutement et, si vous l'acceptez, pour d'éventuels postes comparables. Vous pouvez refuser ce contact et demander l'effacement de cette fiche. Notre politique : [lien]. »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un technicien sourcé répond : « Ne me recontactez plus. » Le junior passe la fiche en opposition, arrête les relances, n'en parle pas sur le groupe WhatsApp de l'atelier. Si aucun process formel n'avait démarré, il n'y a pas de dossier « non retenu » à archiver 5 ans comme un candidat écarté d'un poste pourvu : ce n'était qu'une approche. En cas de doute, RH/DPO."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Entrer 400 profils « au cas où » sans message. Relancer 3 ans plus tard. Noter un critère protégé. Copier la CVthèque du jobboard dans un Drive personnel. Dire « on a le droit de tout garder 5 ans donc je t'appelle ». Oublier d'informer parce que « c'est LinkedIn, tout le monde sait »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Personne déjà candidate l'an dernier : vérifier le traitement (vivier informé vs archive). Cooptation : le salarié n'est pas une base RGPD pirate ; informez la personne cooptée. Cabinet : le cabinet et vous êtes souvent deux responsables / sous-traitants à clarifier par contrat, pas par à-peu-près. Opposition pendant un process ouvert : stop relances commerciales ; le process en cours a ses règles, à faire dire par les RH."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous avez sourcé 25 personnes le 13/10/2024, 3 ont répondu, 22 n'ont jamais été informées. Nous sommes le 13/10/2026. Que faites-vous des 22, des 3, et que dites-vous au manager qui veut « tout relancer » ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Les 22 non informées : vous ne les relancez pas comme un vivier sain. Avec RH/DPO : information tardive ou suppression, selon la politique ; 2 ans sans contact et sans information, ce n'est pas un vivier recommandé. Les 3 en contact : regarder la date du dernier contact ; si < 2 ans et pas d'opposition, relance possible sur un poste réel, en réinformant. Le manager : non, on ne « tout relance » pas ; on extrait le vivier conforme. Vous ne justifiez pas la relance par les 5 ans probatoires."
            }
          ],
          "position": 4
        },
        {
          "title": "Messages d'approche : structure, personnalisation, limites",
          "description": "Écrire un premier message court, vrai, personnalisé, sans promesse d'embauche et sans question interdite.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez assembler un message d'approche en cinq blocs (qui, pourquoi vous, le poste en vrai, l'appel à action, l'information RGPD), personnaliser sans flatterie, et éviter les questions et promesses hors cadre."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le message d'approche est le produit visible du sourcing. S'il est générique, la personne le range avec le spam. S'il est mensonger, vous partez sur une allégation (même logique de loyauté que L. 5331-3 : nature, lieu, rémunération). S'il pose d'emblée l'âge, les enfants, la photo, vous sortez de L. 1221-6 et de L. 1132-1. Un bon message tient en une quinzaine de lignes : qui vous êtes, pourquoi ce profil (un fait professionnel : une mission, un outil, un secteur), ce qu'est le poste sans brochure, ce que vous proposez comme prochaine étape, comment dire non.\n\nLa personnalisation n'est pas « j'adore votre parcours ». C'est un élément vérifiable, lié à l'emploi : une mission de maintenance 3×8, un portefeuille TPE, un portfolio produit. Copier la première ligne du profil et la recoller n'est pas une personnalisation, c'est un aveu d'automatisation. Le vouvoiement est la norme de ce cours et du métier, y compris avec un junior.\n\nVous n'écrivez pas « vous êtes le candidat idéal, le poste est à vous ». Vous n'êtes pas en promesse d'embauche (F39588). Vous n'inventez pas le salaire. Si la fourchette est affichable et vraie, vous pouvez la donner ; au 13/10/2026 ce n'est pas une obligation française consolidée, c'est une bonne pratique de transparence, et si vous la donnez elle est exacte. Vous ne demandez pas de CV « + photo + situation ». Vous proposez un échange de 15 minutes.\n\nLe canal compte : InMail, e-mail professionnel affiché, pas le SMS personnel de 22 h, pas le compte personnel du conjoint. Une seule intention : obtenir un accord de conversation, pas un entretien panel le lendemain. La suite (préqualification) a son module."
            },
            {
              "block_type": "callout",
              "content": "Le premier message n'est pas un entretien. Pas de questions sur la santé, la famille, l'origine, le logement, le compte bancaire. Pas de promesse de contrat. Pas de flou sur l'intérim vs CDI. Information : possibilité de refuser le contact."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Une phrase de personnalisation factuelle.\n2. Intitulé, contrat, lieu, horaires — les 4 vrais.\n3. Une mission concrète, pas cinq valeurs.\n4. Appel à action unique (créneau ou « oui/non/plus tard »).\n5. Phrase d'information / opposition.\n6. Relire : un critère protégé ? une allégation ? un anglais non expliqué pour un poste français ?\n7. Enregistrer le modèle adapté (pas le spam de masse)."
            },
            {
              "block_type": "code",
              "content": "STRUCTURE TYPE\n\nObjet : [Métier] — [employeur fictif ou réel] — échange de 15 min ?\n\nBonjour [prénom],\n[1 phrase : qui je suis]\n[1 phrase : un fait de votre parcours lié au poste]\nNous recrutons [intitulé], [contrat], [lieu / horaires]. Missions : [2 verbes].\nSi un échange vous intéresse, je vous propose [modalité]. Si ce n'est pas le moment, dites-le-moi, je n'insisterai pas.\n[Phrase information données]\nCordialement,\n[Nom, fonction, téléphone]"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Mauvaise ouverture : « Hey, ton profil déchire, on recrute des rockstars, package ouf, dispo pour un call yesterday ? » Ouverture utile vers un commercial Alizé : mention d'un portefeuille TPE, CDI, Lyon, terrain, fourchette si vraie, 15 minutes, possibilité de dire non. Le ton reste professionnel. Le mot « ninja » a disparu."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Message identique à 80 personnes. Tutoiement non sollicité. « Jeune équipe ». Salaire fantaisiste. « CDI » pour une mission d'intérim. Demander d'emblée les prétentions et le préavis comme un interrogatoire. Oublier qui on est. Pièce jointe trop lourde. Lien de tracking douteux."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Personne en poste, confidentialité : proposez un canal, ne contactez pas le standard de son employeur actuel. Pas de réponse : voir leçon relances, pas un second message le soir même. Refus poli : remerciez, opposition si demandée, porte ouverte sans harcèlement. Profil international : français si L. 5331-4 oriente déjà vos écrits d'offre ; un message en anglais peut s'ajouter si le poste l'exige vraiment."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez en structure type ce message : « Salut Inès, on cherche une fille pour faire du RH, photo svp, 23-26 ans, 50k tesla, dispo dimanche 8h. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous vouvoyez. Vous retirez fille, photo, âge, Tesla fictive, créneau abusif. Vous nommez le poste (assistant RH), le contrat, le lieu, deux missions, un échange en semaine, l'information RGPD. Inès Morel est un nom d'emprunt : en réel, vous n'inventez pas un prénom trouvé sur une photo. Le salaire, s'il apparaît, est la fourchette vraie."
            }
          ],
          "position": 5
        },
        {
          "title": "Relances, campagne et suivi des approches",
          "description": "Relancer sans harceler, suivre une campagne simple, lire un taux de réponse interne sans statistique inventée.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez poser une règle de relance (nombre, délai, stop), piloter une petite campagne (cible, message, dates, ATS), et calculer un taux de réponse sur votre volume réel, sans le comparer à un « benchmark » fantaisiste."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une approche n'est pas un unique tir. Les personnes en poste lisent plus tard, doutent, ou n'ont pas vu le message. Une relance courte, à quelques jours, qui ajoute une information utile (date d'un échange, précision d'horaire, fourchette vraie) est une bonne pratique. Une relance quotidienne, un SMS le dimanche, un message au responsable hiérarchique actuel, sont du harcèlement, pas du sourcing. Deux relances maximum, puis stop, est une règle interne raisonnable — politique / bonne pratique, pas un article du Code. L'opposition, elle, arrête tout, immédiatement.\n\nUne campagne de sourcing est un lot : même poste, même semaine, même message-cadre, liste ciblée, suivi. Elle a un début et une fin. Elle n'est pas « j'envoie dès que je m'ennuie ». Le suivi tient dans l'ATS : envoyé, relancé, répondu oui / non / plus tard, opposition, préqualifié, abandon. Sans ces statuts, vous ne savez pas si le message est mauvais, si la cible est fausse, ou si le manager ne donne pas de créneaux.\n\nLe taux de réponse se calcule : réponses / messages délivrés, sur cette campagne. Vous le comparez à vos campagnes précédentes, pas à un chiffre « 40 % sur LinkedIn » trouvé dans un post. Ce cours n'avance aucune statistique de marché. Un taux faible oriente une hypothèse : cible trop large, message creux, contrat peu lisible, horaires cachés, marque inconnue, mauvaise heure d'envoi. Vous testez une variable à la fois (objet, première phrase, mention du 3×8). Vous n'ajoutez pas un critère d'âge pour « améliorer le taux ».\n\nLa campagne se coordonne avec l'annonce (passif) : même vérité sur le poste. Relancer un sourcé en lui disant « CDI jour » alors que l'annonce dit 3×8 est une allégation. Clôturer la campagne lorsque le poste est pourvu : plus de premiers messages, relances d'usage pour les conversations déjà ouvertes, information des personnes en cours."
            },
            {
              "block_type": "callout",
              "content": "Pas de statistique inventée. Votre taux n'existe que sur votre dénominateur. Deux relances puis stop = bonne pratique proposée ici, à caler sur la politique interne. Opposition = zéro relance."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Figer la liste (qualité > quantité) et le message-cadre.\n2. Envoi sur un créneau professionnel.\n3. Relance 1 à J+4 / J+5, une phrase nouvelle.\n4. Relance 2 optionnelle à J+10, puis clôture de la fiche « sans réponse ».\n5. Point de campagne : volume, réponses, causes, décision (élargir la requête, revoir le brief, arrêter).\n6. Dès opposition ou poste pourvu : stop nouveaux envois."
            },
            {
              "block_type": "code",
              "content": "SUIVI DE CAMPAGNE — colonnes minimales\n\nid ATS | intitulé cible | date envoi | relance 1 | relance 2\nréponse (oui/non/plus tard/opposition/silence)\nsuite (préqualif / vivier / stop)\ncommentaire professionnel (faits)"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Campagne Forges : 18 techniciens sourcés, message honnête sur le 3×8, relance unique à J+5 mentionnant l'intérim passerelle si RH l'a validé. 5 réponses, 2 « non merci », 1 opposition, 10 silences. Taux de réponse = 5/18. Le junior ne dit pas « le marché est à 25 % ». Il dit : le 3×8 dit vrai a réduit le volume et augmenté la qualité des 5. Il ne relance pas les 10 une troisième fois."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Relancer ceux qui ont dit non. Inventer un taux pour le COMEX. Envoyer la relance plus longue que le premier message. Changer le contrat entre deux messages. Mesurer les « vues » et les prendre pour des accords. Continuer la campagne une semaine après l'embauche."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Réponse « rappelez en janvier » : vivier, date, information, pas une relance hebdomadaire. Réponse du manager actuel de la personne : vous n'engagez pas une négociation parallèle, vous protégez la confidentialité. Canal saturé (limites de l'outil) : vous n'installez pas un robot de contournement ; vous étalez ou vous changez de canal autorisé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "12 messages, 2 réponses oui, 1 non, 1 opposition, 8 silences. Relances déjà faites (2). Le manager veut « harceler les 8, et recontacter le non ». Calculez le taux et rédigez votre décision."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Taux de réponse = 4/12 si l'on compte toute réponse, ou 2/12 d'accords d'échange : dites lequel vous utilisez. Les 8 silences après 2 relances : stop. Le « non » : stop, éventuellement vivier seulement s'il a dit « plus tard », ce qui n'est pas le cas. L'opposition : stop et retrait actif. Vous proposez d'améliorer la cible ou le brief, pas d'intensifier la pression. Aucun benchmark inventé."
            }
          ],
          "position": 6
        },
        {
          "title": "Quatre messages d'approche modèles",
          "description": "Disposer de quatre textes complets : junior, profil pénurique, reconversion, intérim — à adapter, jamais à spammer.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous disposez de quatre messages d'approche rédigés, vos tutoyés, factuels, informatifs au sens RGPD, sans promesse d'embauche, et vous savez lequel ouvrir selon le public. Vous savez les adapter sans y réintroduire d'illicite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le junior n'a pas le même rapport au recrutement qu'un profil pénurique en poste, qu'une personne en reconversion, ou qu'une personne disponible en intérim. Le premier a besoin de clarté sur le métier et de respect (pas de condescendance, pas de « petit job »). Le deuxième a besoin que l'on respecte son temps, que l'on dise le vrai du poste (horaires, lieu, package) et que l'on ne le flatte pas. La reconversion a besoin que l'on parle de compétences transférables, pas de « défi personnel », et que l'on ne cache pas ce qui manque (habilitation, outil) — L. 1221-6 : on évalue l'aptitude professionnelle, on n'humilie pas un parcours. L'intérim a besoin que le contrat soit nommé : mission, durée, entreprise utilisatrice, pas un CDI fantôme (L. 5331-3 par analogie de loyauté : nature de l'emploi).\n\nLes quatre textes ci-dessous sont fictifs, vouvoyés, datables, avec une phrase d'information. Ils ne sont pas des promesses (F39588). Ils n'affichent un salaire que lorsqu'il est présenté comme une fourchette exacte et comme un choix de transparence, pas comme une obligation française consolidée au 13/10/2026. Vous changerez les noms d'emprunt, les lieux, les fourchettes. Vous n'enverrez pas les quatre d'un coup à la même personne. Vous tracerez l'envoi dans l'ATS.\n\nCes modèles n'enseignent aucun contournement d'outil : ils s'envoient dans le canal autorisé. Ils ne demandent ni photo, ni âge, ni famille. Ils tiennent en un écran."
            },
            {
              "block_type": "callout",
              "content": "Noms : emprunts évidents. Entreprises : fictives. Adaptez. N'ajoutez pas de photo, d'âge, de « native », de Tesla. Deux relances max ensuite, stop si opposition."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Choisir le modèle selon le public, coller un fait vrai du profil, vérifier contrat/lieu/horaires, envoyer, tracer, relancer selon la leçon précédente."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les quatre messages tiennent lieu d'exemples de PME, ETI, startup et agence d'intérim."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Envoyer le modèle pénurique à un junior (sur-promesse). Envoyer le modèle intérim en oubliant le mot intérim. tutoyer la reconversion. Copier le modèle sans aucun fait du profil. Ajouter « jeune diplômé » dans l'objet."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Profil à la fois junior et reconversion : un seul message, compétences transférables + niveau. Profil pénurique en 3×8 : le modèle 2 + horaires vrais dès la première ligne. Mission d'intérim susceptible de CDI : le dire seulement si l'entreprise utilisatrice l'a autorisé, jamais comme une garantie."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour Samira Benali (nom d'emprunt), 18 mois d'administration du personnel en PME, vous ouvrez un CDI assistant RH ETI. Choisissez le modèle, ajoutez une phrase de personnalisation fictive mais professionnelle, et indiquez la relance prévue."
            },
            {
              "block_type": "code",
              "content": "MODÈLE 1 — Junior\nObjet : Assistant RH — Forges & Maintenance du Centre — 15 min d'échange ?\n\nBonjour Samira,\nJe suis [prénom nom], chargé de recrutement chez Forges & Maintenance du Centre (ETI industrielle, site de Ville-sur-Cher — noms d'emprunt).\nVotre expérience d'administration du personnel en PME (éléments de paie, dossiers d'entrée) correspond aux missions d'un CDI d'assistant RH de site : paie transmise au prestataire, dossiers, organisation des entretiens, accueil des embauches.\nContrat : CDI, 35 h de jour, poste sédentaire, pas d'anglais requis. Fourchette brute annuelle 24-27 k€ selon expérience (montant tenable — transparence, pas une obligation légale d'affichage au 13/10/2026).\nJe vous propose un échange de 15 minutes cette semaine ou la suivante. Si le poste ne vous convient pas, répondez simplement non, je n'insisterai pas.\nCe message est envoyé pour ce recrutement ; vous pouvez demander à ne plus être contacté(e).\nCordialement,\n[signature]"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 2 — Profil pénurique (technicien en poste)\nObjet : Technicien de maintenance mécanique — CDI 3×8 — échange confidentiel\n\nBonjour Éric,\nJe suis [prénom nom], recruteur au site de Forges & Maintenance du Centre (fictif). Je vous contacte à propos de votre parcours de maintenance mécanique en industrie.\nNous ouvrons un CDI de technicien de maintenance mécanique, en 3×8, habilitation électrique souhaitée, site à 18 km de [ville]. Je vous le dis d'emblée : ce n'est pas un poste de jour. Si une passerelle intérim est validée par les RH pour tenir le planning, je vous l'indiquerai clairement, ce n'est pas un CDI déguisé.\nJe ne vous demande pas de CV par retour. Un échange de 15 minutes, hors de vos heures d'atelier, suffit pour voir si un déplacement de dossier a du sens. Confidentialité : je ne contacte pas votre employeur.\nSi vous n'êtes pas intéressé, dites-le ; si vous l'êtes plus tard, dites-le aussi. Opposition et information : [lien politique RH].\nCordialement,\n[signature]"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 3 — Reconversion\nObjet : Recrutement — compétences de formateur vers un poste de chargé de recrutement junior\n\nBonjour Inès,\nJe suis [prénom nom], recruteur chez Alizé Services (PME fictive). J'ai lu votre expérience d'animation de formation et d'évaluation de stagiaires : ce sont des compétences transférables vers un poste de chargé de recrutement junior (cadrage d'entretiens, écoute, restitution), pas une « seconde chance » à mériter.\nLe poste : CDI, bassin lyonnais, recrutement de profils services, process à apprendre (sourcing, grilles, cadre légal). Ce que le poste n'est pas : un statut de responsable RH le premier mois. Ce qui sera évalué : aptitudes professionnelles en lien avec l'emploi (L. 1221-6), pas votre biographie personnelle.\nSi vous souhaitez un échange de 20 minutes pour confronter votre projet et nos critères, je suis disponible [créneaux]. Vous pouvez refuser ce contact.\nCordialement,\n[signature]"
            },
            {
              "block_type": "code",
              "content": "MODÈLE 4 — Intérim\nObjet : Mission d'intérim — préparateur de commandes — 4 mois — Logi-Flèche (fictif)\n\nBonjour Karim,\nJe suis [prénom nom], chargé de recrutement à l'agence [nom fictif d'agence]. Je vous contacte pour une mission d'intérim — je précise le mot : ce n'est pas une offre de CDI.\nPoste : préparateur de commandes, CDD d'usage / mission de 4 mois environ, horaires 5 h-13 h, plateforme de Saint-Orain, station debout et port de charges. Dates visées : 2 novembre 2026 au 29 février 2027. Rémunération de mission : alignée sur le poste de l'entreprise utilisatrice (détail à l'entretien, sans montant fantaisiste ici).\nSi vous êtes disponible et intéressé, je vous propose un appel de préqualification de 10 minutes. Pas de photo, pas de questions de santé ni de situation de famille. Si cette mission ne vous convient pas, répondez non ; vous pouvez aussi demander à ne plus être contacté pour ce type de besoin.\nCordialement,\n[signature]"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Pour Samira Benali, le modèle 1 est le bon (junior / premier niveau RH), pas le 4 (intérim) ni le 2 (pénurique atelier). Personnalisation : citer l'administration du personnel et la paie de PME, pas « votre énergie ». Relance : une fois à J+5, puis stop. Si elle dit non : vivier seulement avec accord, sinon opposition. Vous ne basculez pas sur le modèle reconversion sans élément de reconversion. Vous ne promettez pas le poste dans la relance."
            }
          ],
          "position": 7
        },
        {
          "title": "Quiz — Sourcing et recherche de candidats",
          "description": "Dix questions : actif/passif, booléen, CGU, RGPD, messages.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Sourcing et recherche de candidats",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Le sourcing actif, c'est principalement :",
                "question_type": "single_choice",
                "options": [
                  "A. Aller identifier et contacter des personnes qui n'ont pas postulé, dans un cadre RGPD, CGU et non-discrimination — ce n'est pas une obligation légale de canal.",
                  "B. Attendre les réponses à l'annonce, uniquement.",
                  "C. Extraire en masse des e-mails en contournant les CGU.",
                  "D. Un droit de poser n'importe quelle question, L. 1221-6 ne s'appliquant pas."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Actif = vous allez vers la personne. Passif = elle vient à vous. L. 1221-6 s'applique aux informations demandées, sous quelque forme. Le contournement de CGU n'est pas enseigné ni autorisé ici. Aucun article n'impose de chasser."
              },
              {
                "question": "Dans une requête, OR sert surtout à :",
                "question_type": "single_choice",
                "options": [
                  "A. Relier des synonymes ou alternatives (au moins un terme), souvent groupés entre parenthèses.",
                  "B. Exiger que tous les termes soient présents.",
                  "C. Cibler un sexe.",
                  "D. Contourner le paywall d'un réseau."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "AND exige, OR élargit, NOT exclut. Les parenthèses évitent les liaisons ambiguës. OR n'est pas un outil de discrimination ni de bypass."
              },
              {
                "question": "Que font les guillemets dans « chargé de clientèle » ?",
                "question_type": "single_choice",
                "options": [
                  "A. Ils imposent l'expression exacte, plutôt que les mots séparés.",
                  "B. Ils excluent le terme (équivalent de NOT).",
                  "C. Ils marquent un critère d'âge.",
                  "D. Ils rendent la requête conforme au RGPD à eux seuls."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Les guillemets sont une brique de précision linguistique. Ils n'ont aucun effet juridique magique. NOT est l'exclusion. L'âge n'a rien à faire dans la requête."
              },
              {
                "question": "Une requête « commercial AND femme AND 25-30 » est :",
                "question_type": "single_choice",
                "options": [
                  "A. À jeter : usage discriminatoire de la technique (L. 1132-1), sans lien nécessaire avec l'emploi (L. 1221-6).",
                  "B. Une bonne pratique de ciblage recommandée par la CNIL.",
                  "C. Obligatoire pour les métiers dits « en tension ».",
                  "D. Acceptable si l'on ajoute H/F dans l'annonce."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La booléenne n'autorise pas un tri par sexe ou âge. La CNIL n'encourage pas ce ciblage. H/F dans l'annonce ne blanchit pas une requête discriminatoire. La tension du métier n'ouvre aucune exception."
              },
              {
                "question": "Le principe dit « X-Ray », dans ce cours, désigne :",
                "question_type": "single_choice",
                "options": [
                  "A. Le principe d'une recherche sur des pages déjà publiques indexées par un moteur — sans tutoriel pour contourner CGU, limites de compte ou paywall.",
                  "B. Un script fourni dans le module pour by-passer LinkedIn.",
                  "C. L'obligation légale de scraper toutes les bases.",
                  "D. Un test psychologique."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le cours pose le principe et s'arrête là. Pas de procédure de contournement. Pas d'obligation de scraper. Ce n'est pas un outil d'évaluation au sens L. 1221-8."
              },
              {
                "question": "La durée « 2 ans » pour un vivier de personnes sourcées, selon la CNIL, est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une recommandation (jusqu'à 2 ans à compter du dernier contact, information, opposition), distincte de l'archive 5 ans des non-retenus (L. 1134-5 / référentiel 2026).",
                  "B. Un minimum : il est interdit de supprimer avant 2 ans, même en cas d'opposition.",
                  "C. La durée pendant laquelle on peut contourner les CGU.",
                  "D. Identique, pour tous les traitements, à une obligation RGPD unique chiffrée dans le règlement."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Même doctrine qu'au module stratégie. Opposition = arrêt du vivier actif. Le RGPD n'écrit pas « 2 ans » comme unique chiffre. Les 5 ans sont la preuve, pas la chasse."
              },
              {
                "question": "Au premier message d'approche, vous devez notamment :",
                "question_type": "single_choice",
                "options": [
                  "A. Dire qui vous êtes, décrire le poste sans mensonge, proposer une étape, permettre de refuser le contact — sans question interdite ni promesse d'embauche.",
                  "B. Exiger photo, âge et situation de famille.",
                  "C. Écrire « vous êtes embauché, signature lundi ».",
                  "D. Cacher qu'il s'agit d'intérim pour « avoir un call »."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Structure du cours + L. 1132-1 / L. 1221-6 + F39588 (pas de promesse involontaire) + loyauté sur la nature du contrat (intérim nommé). Photo/âge/famille : non."
              },
              {
                "question": "Un taux de réponse de campagne se lit ainsi :",
                "question_type": "single_choice",
                "options": [
                  "A. Réponses constatées / messages délivrés sur CETTE campagne, comparées à votre historique interne — sans statistique de marché inventée.",
                  "B. Toujours 40 %, chiffre national du cours.",
                  "C. Nombre de vues LinkedIn divisé par l'âge moyen.",
                  "D. Uniquement le nombre d'InMail achetés."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le cours interdit d'inventer des stats. Le dénominateur doit être clair. Les vues et l'âge ne sont pas un taux de réponse, et l'âge n'est pas un indicateur licite de pilotage."
              },
              {
                "question": "Après deux relances sans réponse, la bonne pratique enseignée est :",
                "question_type": "single_choice",
                "options": [
                  "A. Stopper, classer « sans réponse », ne pas harceler — l'opposition, si elle arrive, arrête tout immédiatement.",
                  "B. Appeler le manager actuel de la personne au standard.",
                  "C. Envoyer un message par jour pendant un mois.",
                  "D. Acheter une base d'e-mails pour multiplier les canaux."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Deux relances puis stop = politique / bonne pratique du cours. Harcèlement, contact de l'employeur actuel et bases achetées sont hors cadre (confidentialité, RGPD, déontologie)."
              },
              {
                "question": "Dans le message d'approche intérim, le mot « intérim » doit :",
                "question_type": "single_choice",
                "options": [
                  "A. Figurer clairement : la nature de l'emploi ne se maquille pas en CDI (loyauté / même esprit que L. 5331-3 sur la nature de l'emploi).",
                  "B. Être caché jusqu'à la signature.",
                  "C. Être remplacé par « CDI évolutif garanti ».",
                  "D. Être réservé à l'oral, jamais à l'écrit (RGPD)."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le modèle 4 nomme la mission. Un CDI « garanti » serait une allégation. Le RGPD n'interdit pas d'écrire « intérim » ; il encadre les données. L'oral ne répare pas un écrit trompeur."
              }
            ]
          },
          "position": 8
        }
      ]
    },
    {
      "position": 7,
      "title": "Analyser les CV et présélectionner",
      "description": "Lire un CV avec une grille, distinguer faits professionnels et biais, justifier une shortlist, et tracer la décision — à partir de quatre CV entièrement fictifs.",
      "lessons": [
        {
          "title": "Lecture structurée d'un CV",
          "description": "Parcourir un CV dans un ordre stable, extraire des faits liés à l'emploi, et séparer ce qui sera évalué plus tard.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez lire un CV en cinq passages (identité professionnelle, parcours daté, missions, compétences/outils, formation), extraire des preuves au regard de la fiche de poste, et noter les questions de préqualification plutôt que de « sentir » le profil."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un CV n'est pas un roman, ni une preuve judiciaire. C'est un document déclaratif, rédigé par la personne, pour donner à voir un parcours. Le recruteur junior qui le lit « en diagonal en 20 secondes » retient surtout la mise en page, la photo, le nom, l'âge apparent, le logo des employeurs. C'est précisément ce que le cadre légal et la qualité de décision demandent de ne pas faire. L'article L. 1132-1 interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, apparence, nom de famille, lieu de résidence, handicap, etc.). L'article L. 1221-6 limite les informations pertinentes à celles qui ont un lien direct et nécessaire avec l'emploi. La lecture structurée est la méthode qui aligne ces deux textes avec le métier : on cherche des faits d'emploi, pas une impression.\n\nCinq passages, toujours dans le même ordre, réduisent le biais de primauté (la première ligne dicte tout) et le biais de mise en page. Premier passage : identité professionnelle — prénom, nom, moyen de contact, titre éventuellement. Vous ne notez pas « nom étranger », « photo fatiguée », « quartier ». Deuxième : le parcours daté, en reculant dans le temps, pour voir la continuité, les contrats, les employeurs, les durées. Troisième : les missions réellement décrites, pas les intitulés ronflants. Quatrième : outils, habilitations, langues, uniquement si le poste s'en sert. Cinquième : diplômes et formation, comme des éléments parmi d'autres, pas comme un rang social. À l'issue, vous avez une fiche d'extraction : preuves pour le poste, manques, questions, pas encore une décision morale.\n\nLa lecture structurée n'est pas une obligation légale de forme. C'est une bonne pratique, et souvent une politique interne (grille ATS). Elle prépare la traçabilité : si un candidat non retenu demande pourquoi, ou si un dossier doit être conservé à des fins de preuve (logique L. 1134-5 / référentiel CNIL 2026), vous avez des motifs professionnels, pas « le CV ne me disait rien ». Elle prépare aussi L. 1221-8 : les méthodes d'aide au recrutement doivent être présentées au candidat ; une grille de lecture est une méthode, elle doit être pertinente (L. 1221-9).\n\nVous ne « googlez » pas la personne pour sa vie privée, ses réseaux extra-professionnels, ses photos de vacances. Vous ne corrigez pas l'orthographe comme un critère de nationalité. Une faute n'est un signal que si le poste exige un français écrit professionnel intense — et encore, une ou deux coquilles ne font pas un motif d'écartement. Vous ne confondez pas un CV court avec un manque de compétence : beaucoup de bons profils industriels tiennent en une page."
            },
            {
              "block_type": "callout",
              "content": "Le CV est une déclaration. Les trous, les titres, les diplômes s'éclairent en préqualification, ils ne se transforment pas en roman (maladie, grossesse, prison) dans votre tête. Pas d'évaluation de la photo, du nom, de l'adresse au-delà du lien réel avec le lieu de travail (présence sur site, pas un jugement de quartier)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Ouvrir la fiche de poste et les critères (knock-out vs ranking) avant le CV.\n2. Lire les cinq passages, crayon / champs ATS, sans regarder la photo.\n3. Extraire 3 à 6 faits pour, 1 à 3 manques, 2 questions.\n4. Ne pas décider au premier CV : lire le lot avec la même grille.\n5. Si un élément de critère protégé saute aux yeux (âge, photo, adresse) : l'ignorer comme critère, le recouvrir si besoin dans l'ATS (commentaire factuel interdit s'il est discriminatoire).\n6. Contrôle : un collègue comprend-il votre extraction sans voir le CV ?"
            },
            {
              "block_type": "code",
              "content": "EXTRACTION — 5 passages\n\n1. Identité pro (contact, titre) — ignorer photo / apparence\n2. Dates et contrats (du plus récent au plus ancien)\n3. Missions = preuves du poste visé\n4. Outils / habilitations / langues (lien avec l'emploi)\n5. Formation (nécessaire, utile, ou décorative ?)\n→ Preuves | Manques | Questions de préqual | Critère protégé vu et écarté"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "CV d'un assistant RH : le junior regarde d'abord la photo, conclut « trop junior visuellement », écarte. Lecture structurée : 22 mois de paie et dossiers, DUT + licence pro, Excel, pas d'anglais (non requis). L'extraction dit « à préqualifier ». La photo n'a rien ajouté. L'apparence est un critère protégé. La méthode a évité un écartement illicite et une erreur métier."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lire en 15 secondes. Commencer par le diplôme d'une école. Noter « CV moche ». Googler Facebook. Comparer deux CV sur la photo. Traiter un CV intérim comme « instable » avant d'avoir lu les missions. Écrire dans l'ATS « origine : maghrébine ». Décider avant d'avoir lu tout le lot."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CV vidéo : même grille, pas de notation du sourire (apparence). CV en anglais pour un poste français : le fond se lit ; l'anglais n'est un plus que s'il est requis. Dossier LinkedIn sans CV : vous extraire les mêmes cinq passages, vous demandez un CV si la politique l'impose, sans en faire un piège. CV de 5 pages cadre : vous extraire, vous ne sanctionnez pas la longueur pour un poste d'assistant, vous ne la glorifiez pas non plus."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sans encore ouvrir les quatre CV de la leçon 7, rédigez votre ordre de lecture pour le poste d'assistant RH de Forges & Maintenance du Centre (paie, dossiers, entretiens, accueil, 35 h jour, site). Listez 4 éléments que vous refusez d'utiliser comme critères."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ordre : critères du poste d'abord, puis dates/contrats, missions paie et administration, outils (tableur, SIRH), formation RH ou équivalent. Refusés : photo, nom, âge inféré, quartier, sexe, situation de famille, santé, accent perçu, logo « prestigieux » comme substitut de missions. Le permis et l'anglais sont hors lien (poste sédentaire, pas de client international). Un CV intérim n'est pas un knock-out."
            }
          ],
          "position": 0
        },
        {
          "title": "Cohérence, trous de parcours, reconversion et diplômes",
          "description": "Repérer ce qui cloche dans les dates et les titres, traiter un trou sans roman, lire une reconversion et un diplôme à leur juste poids.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez vérifier la cohérence d'un parcours (dates, temps plein simultanés, titres vs taille d'équipe), poser des questions sur un trou sans présumer un critère protégé, valoriser une reconversion par les compétences transférables, et ne pas fétichiser un diplôme s'il n'est pas une condition d'exercice."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La cohérence est un contrôle professionnel, pas un procès d'intention. Des dates qui se chevauchent sur deux temps pleins, un titre « DRH adjoint » dans un atelier de douze personnes, une habilitation datée après le départ de l'employeur qui l'aurait délivrée : ce sont des faits à éclaircir. Ils peuvent s'expliquer (double activité déclarée, titre interne fantaisiste, erreur de mois). Ils peuvent aussi signaler un CV enjolivé. Vous ne tranchez pas au seul papier : vous notez la question. Vous ne publiez pas « menteur » dans l'ATS.\n\nUn trou (période sans employeur) est fréquent : fin de CDD, recherche d'emploi, formation, aidant, santé, voyage, création d'activité. Plusieurs de ces causes touchent des critères protégés (santé, situation de famille, handicap). Vous n'avez pas à les deviner, et vous n'avez pas à les exiger (L. 1221-6). En préqualification, une question ouverte (« que s'est-il passé professionnellement entre 2019 et 2021 ? ») suffit. Si la personne ne veut pas détailler une raison personnelle, vous revenez aux aptitudes pour l'emploi. Un trou n'est pas, à lui seul, un motif d'écartement. Une série de contradictions non assumées peut l'être, parce qu'elle empêche d'apprécier le parcours.\n\nLa reconversion se lit à l'envers des intitulés : quelles missions, quels livrables, quelles évaluations, quel public, quels outils, se rapprochent du poste. Un formateur qui a évalué des stagiaires, rédigé des appréciations et enseigné des bases de droit social n'est pas « hors RH » : il est hors intitulé. Le rejeter parce que le mot « assistant RH » n'apparaît pas, c'est confondre étiquette et aptitude (L. 1221-6, L. 1221-9 : méthode pertinente). Inversement, une reconversion n'efface pas un manque réel (par exemple une paie hebdomadaire exigée dès J1 sans jamais avoir vu une fiche).\n\nLe diplôme pèse lorsqu'il est une condition réglementaire d'exercice, ou lorsqu'il a un lien direct avec l'emploi. Il ne pèse pas comme un marqueur social, ni comme un filtre d'origine (« diplôme étranger = non »). Un titre obtenu hors de France s'apprécie par le contenu et, le cas échéant, une équivalence ; il ne s'écarte pas au nom de L. 1132-1 (origine, appartenance nationale). Exiger cinq années d'études pour un poste d'assistant dont la fiche demande un tableur et de la rigueur est souvent un critère excessif, donc une mauvaise méthode."
            },
            {
              "block_type": "callout",
              "content": "Trou ≠ roman. Vous ne notez pas « grossesse ? » ou « arrêt maladie ? ». Vous notez « période 2019-2021 à éclaircir en préqual, sans exigence de motif personnel ». Un diplôme étranger n'est pas un knock-out. Un titre gonflé est une question, pas une condamnation écrite."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Aligner les dates sur une ligne de temps (un tableur).\n2. Marquer chevauchements, trous > quelques mois, titres vs contexte.\n3. Traduire chaque mission en preuve pour le poste, y compris hors intitulé.\n4. Classer le diplôme : réglementaire / utile / décoratif.\n5. Préparer 2 questions factuelles, zéro question de vie privée.\n6. Décision seulement après la grille complète, pas au trou isolé."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Inès Morel (nom d'emprunt), six ans formatrice : pas de ligne « RH ». Extraction : entretiens de positionnement, évaluations écrites, bases de droit du travail enseignées, organisation de sessions. Pour un assistant RH qui organise des entretiens et accueille, c'est transférable. La paie reste un manque, à tester en préqual (appétence, formation interne prévue ou non). Le junior qui écrit « reconversion = risque » sans preuve a substitué un préjugé à L. 1221-6."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Écarter tout trou de plus de trois mois. Inventer une maladie. Refuser un BTS obtenu à l'étranger. Croire un titre « Head of People » dans une TPE de 4 personnes sans lire les missions. Exiger le même diplôme que le manager. Traiter l'intérim comme un trou."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Période d'essai non renouvelée : ce n'est pas un secret d'État, c'est une question professionnelle. Création d'entreprise : lire ce qui a été fait (commercial, admin, cessation). Conjoint impatrié / mobilité géographique : ne pas transformer en situation de famille évaluée. Métiers réglementés (infirmier, expert-comptable) : le diplôme conditionne l'exercice, ce n'est plus du fétichisme."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Parcours : janv. 2022 – juin 2024 « DRH adjoint », entreprise 15 personnes ; en parallèle févr. 2023 – déc. 2023 « commercial temps plein » autre société ; trou juil. 2024 – oct. 2026. Quelles questions posez-vous ? Que ne posez-vous pas ? Le trou suffit-il à écarter ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Questions : deux temps plein simultanés, contenu réel du titre DRH adjoint (paie ? IRP ? recrutement ?), volume d'équipe, comment s'articulent les deux employeurs, parcours depuis juillet 2024 en termes professionnels. Vous ne demandez pas si le trou est une dépression, un congé parental, un casier. Le trou seul n'écarte pas. Le chevauchement + le titre peu plausible justifient soit une préqual de clarification, soit un non si le poste exige une admin RH démontrée dès le papier et que rien dans les missions ne l'étaye — motif professionnel écrit, pas « CV bizarre »."
            }
          ],
          "position": 1
        },
        {
          "title": "Biais de lecture et critères protégés",
          "description": "Nommer les biais fréquents sur un CV, les relier à L. 1132-1, et installer des contre-mesures concrètes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez identifier les biais de photo, de nom, d'âge inféré, de lieu de résidence, de sexe, d'école, d'intérim, de reconversion, et les contrer par la grille, la lecture à l'aveugle des éléments non pertinents, et l'interdiction des commentaires ATS illicites."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un biais n'est pas une opinion politique. C'est un raccourci de jugement qui fait écarter ou retenir une personne pour autre chose que l'aptitude à l'emploi. Sur un CV, les raccourcis les plus fréquents dans la pratique professionnelle — sans inventer ici de pourcentage — concernent le nom, l'adresse, l'âge lu dans les dates, le sexe lu dans le prénom, la photo, le handicap visible, l'école, le type de contrat (intérim, CDD). L'article L. 1132-1 dresse la liste des critères protégés : origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, caractéristiques génétiques, vulnérabilité économique, appartenance vraie ou supposée à une ethnie, une nation ou une prétendue race, opinions politiques, activités syndicales ou mutualistes, mandat électif, convictions religieuses, apparence physique, nom de famille, lieu de résidence, domiciliation bancaire, état de santé, perte d'autonomie, handicap, capacité à s'exprimer dans une langue autre que le français, lanceur d'alerte, etc. Écarter Samira Benali ou Karim El Amrani (noms d'emprunt) à cause du nom, c'est précisément ce que le texte vise.\n\nLe lieu de résidence est un critère protégé. Cela n'interdit pas de vérifier qu'une présence sur site est possible (poste sédentaire à Ville-sur-Cher). Cela interdit de juger un quartier, un code postal, une « image de banlieue ». L'apparence (photo) n'est pas un critère de présélection d'assistant RH. L'âge inféré par l'année du bac n'est pas un critère. Un accent perçu lors d'un échange n'est pas un motif, hors exigence réelle de français professionnel liée à l'emploi.\n\nLes contre-mesures sont opérationnelles. Masquer la photo dans l'ATS si possible. Lire les missions avant l'en-tête. Appliquer la même grille au lot. Rédiger le motif d'écartement avec un fait du poste (« pas d'expérience d'administration du personnel ni d'équivalent transférable ») plutôt qu'une impression. Faire relire une shortlist par un pair. Interdire dans l'ATS les commentaires sur le corps, l'origine, la famille. Ce sont des bonnes pratiques et, pour le commentaire discriminatoire, un risque juridique immédiat. La méthode d'évaluation doit rester pertinente (L. 1221-9).\n\nLe biais « positif » existe aussi : copier le parcours du manager, sur-noter une école, retenir un CV « qui nous ressemble ». Il est tout aussi contraire à L. 1132-1 lorsqu'il repose sur un critère protégé, et tout aussi contraire à L. 1221-6 lorsqu'il n'a pas de lien avec l'emploi. La shortlist n'est pas un club."
            },
            {
              "block_type": "callout",
              "content": "Obligation : ne pas écarter (ni retenir) pour un critère protégé (L. 1132-1). Bonne pratique : grille unique, photo ignorée, motif écrit professionnel. Politique interne : certains ATS masquent le nom en première lecture — à utiliser si elle existe, pas à inventer comme obligation universelle."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Grille avant le nom.\n2. Photo : ne pas ouvrir / ne pas commenter.\n3. Après lecture : relire le motif ; un critère protégé s'y est-il glissé ?\n4. Comparer les extraits du lot avec les mêmes colonnes.\n5. Alertes : « on cherche une fille », « un nom plus simple pour les clients », « trop vieux pour l'équipe » — refus d'exécuter, escalade RH."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un manager d'Alizé dit : « Écarte El Amrani, les clients n'accrocheront pas au nom. » Le junior refuse : le nom de famille est un critère protégé (L. 1132-1). Il propose de lire les missions. S'il n'y a pas d'aptitude, le motif sera professionnel et écrit. S'il y a aptitude, le nom n'entre pas dans la shortlist comme moins. L'instruction du manager n'est pas une politique interne valable : une politique ne peut pas ordonner l'illicite."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Commentaire ATS « look non professionnel ». « Femme = mieux en RH ». « Intérim = instable ». « Reconversion = pas sérieux ». « Diplôme marocain = non ». « Habite trop loin » sans avoir parlé mobilité, alors que l'on vise le quartier. Googler une personne pour sa pratique religieuse."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Poste avec condition d'aptitude (sécurité, habilitation) : l'aptitude se joue plus tard, médecine du travail, pas sur la photo du CV. Emploi où l'apparence est l'objet même (mannequin) : exception étroite, déjà vue côté offres, pas transposable à l'assistant RH. Anonymisation imposée par un marché public : suivez le protocole RH. Logiciel de tri automatique : L. 1221-8 information, L. 1221-9 pertinence ; un score opaque n'est pas une grille."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Parmi ces motifs d'écartement, lesquels sont illicites ou non professionnels ? (1) « Pas de mission de paie ni d'équivalent. » (2) « Nom trop compliqué. » (3) « CV avec photo peu souriante. » (4) « Code postal 93. » (5) « Dates incohérentes non expliquées et titre non étayé. » (6) « Trop de missions d'intérim, forcément instable. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Professionnel, si la paie est un critère du poste et qu'aucun équivalent n'est lu. (2) Illicite, nom de famille, L. 1132-1. (3) Illicite / apparence. (4) Illicite en tant que jugement du lieu de résidence ; une question de trajet / présence site peut se poser en préqual, sans stigmatiser le département. (5) Professionnel, cohérence. (6) Biais : l'intérim décrit des contrats, pas une personnalité ; lire les missions (admin, paie, accueil) avant de conclure."
            }
          ],
          "position": 2
        },
        {
          "title": "Shortlist : choisir, limiter, justifier",
          "description": "Passer d'un lot de CV à une liste courte de personnes à préqualifier, avec des motifs opposables.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez construire une shortlist (oui / peut-être / non), la dimensionner pour le temps du manager, et écrire un motif de oui et un motif de non qui tiennent si le dossier est relu dans deux ans."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Présélectionner, ce n'est pas empiler « les moins pires ». C'est décider qui entre en préqualification, qui est mis en vivier si la personne est informée, qui est écarté du poste avec un motif professionnel. Une shortlist de quinze personnes pour un assistant RH n'est pas une shortlist : c'est un transfert de charge vers le téléphone. Une shortlist de une personne « clone du manager » n'est pas davantage une shortlist : c'est un biais. Le bon format dépend du volume et du plan, souvent trois à six personnes à préqualifier pour un poste unique, à ajuster sans statistique magique.\n\nChaque décision a besoin d'un motif. Le motif de « oui » cite des preuves du CV liées aux critères (missions de paie, durée, outils). Le motif de « non » cite un manque par rapport au poste, pas un critère protégé. Le « peut-être » n'est pas une lâcheté : c'est un profil transférable à éclaircir (reconversion, titre ambigu) que l'on préqualifie avec des questions ciblées, ou que l'on garde en vivier si le volume de « oui » est déjà suffisant et que l'information RGPD est faite. Vous ne laissez pas un « peut-être » sans statut : le silence n'est pas un statut.\n\nLa shortlist n'est pas une embauche. Elle n'est pas une promesse (F39588). Elle n'autorise pas à dire « vous êtes retenu pour le poste ». Elle autorise à dire « nous souhaitons un échange de préqualification ». Les personnes non shortlistées ont droit, selon la politique interne, à une réponse ; le droit des données (information, durées CNIL déjà vues) s'applique. L'archivage du motif pour les non-retenus, une fois le poste pourvu, s'inscrit dans la logique probatoire des 5 ans (L. 1134-5 / référentiel CNIL 2026), distincte du vivier 2 ans.\n\nLe manager peut discuter un « oui » ou un « non ». Il ne peut pas imposer un écartement illicite. Votre rôle de junior est de porter la grille, pas de « faire plaisir » en sortant le CV au nom."
            },
            {
              "block_type": "callout",
              "content": "Motif écrit = fait + critère du poste. « Personnalité » et « feeling du CV » ne passent pas une relecture. La shortlist est une méthode d'aide au recrutement : pertinence (L. 1221-9) et, le moment venu, information du candidat sur la suite (L. 1221-8)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Scorer ou classer avec la grille (pas une note sur 20 décorative : des seuils knock-out puis un ranking).\n2. Trancher oui / peut-être / non.\n3. Dimensionner : capacité réelle de préqual de la semaine.\n4. Rédiger les motifs dans l'ATS le jour même.\n5. Faire valider la shortlist par le manager sur les preuves, pas sur les photos.\n6. Déclencher les réponses / vivier / archive selon politique."
            },
            {
              "block_type": "code",
              "content": "MOTIFS — formulations\n\nOui : « Missions d'administration du personnel et éléments de paie pendant 22 mois, formation RH, tableur. À préqualifier sur SIRH et disponibilité site. »\nNon : « Aucune mission d'administration du personnel, de paie, d'accueil RH ou d'équivalent transférable (formation, évaluation, organisation de sessions). Poste d'assistant RH de site non étayé. »\nInterdit : « Nom », « photo », « trop vieux », « femme préférable », « 93 », « intérim = instable »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Lot de 40 CV pour l'assistant RH Forges. Après knock-out (aucune admin, aucune formation/expérience transférable), 11 restent. Capacité de préqual : 6 cette semaine. Shortlist : 4 oui, 2 peut-être (reconversion à clarifier), 5 non justifiés + vivier pour 2 profils commerciaux RH d'un autre site (information). Le manager veut ajouter un CV « fils d'un client » sans preuve : le junior demande les preuves ou refuse d'en faire un critère."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Shortlist identique à « tous ceux qui ont postulé ». Motif vide. Motif illicite. Oublier les internes. Téléphoner avant d'avoir clos le lot. Promettre le poste au premier CV plaisant. Ne jamais écrire le non, donc ne jamais pouvoir expliquer."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne : même grille, motif tout aussi écrit, information du process. Candidat coopté : même grille. Volume : sessions collectives, shortlist par vagues, mêmes motifs. Un seul CV excellent et 30 hors sujet : shortlist de 1 + relance du sourcing, pas 10 « remplissage » pour faire nombre."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez un motif de non et un motif de oui (4 lignes chacun) pour le poste assistant RH, sans critère protégé, à partir de ces extraits : (A) 3 ans préparateur, aucune admin. (B) 18 mois gestionnaire personnel + paie de 40 dossiers."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Non pour A : le métier de préparateur n'étaye pas l'administration du personnel, la paie, l'organisation d'entretiens ; pas d'équivalent transférable décrit ; écartement du poste (un vivier logistique est un autre traitement, s'il est informé). Oui pour B : durée et missions alignées, à préqualifier sur outils et site. Vous n'écrivez pas que A est « instable » ni que B est « une femme donc faite pour le RH »."
            }
          ],
          "position": 3
        },
        {
          "title": "Traçabilité des décisions de présélection",
          "description": "Laisser une trace utile, licite, proportionnée : ce que l'on écrit, où, combien de temps, pour qui.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez quoi écrire dans l'ATS, quoi ne jamais écrire, comment relier la trace à l'information du candidat et aux durées CNIL, et pourquoi la justification n'est pas un luxe administratif."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une décision de présélection qui n'existe que dans la tête du junior n'est pas défendable. Si le poste est pourvu et qu'une personne non retenue conteste une discrimination, l'employeur a besoin de montrer des critères, une grille, un motif. L'article L. 1134-5 du Code du travail, fondement cité par la CNIL pour une conservation probatoire de 5 ans à compter de la date à laquelle le poste a été pourvu (candidats non retenus), n'est pas une invitation à tout garder en base active. C'est une logique de preuve. Le référentiel CNIL 2026 distingue cette archive intermédiaire du vivier recommandé à 2 ans. Votre commentaire ATS de 2026 peut être relu en 2031 : écrivez comme tel.\n\nLa trace utile contient : la date, l'auteur, le poste, le statut (oui/peut-être/non/vivier/opposition), le motif professionnel, la source (annonce, sourcing, interne), les questions à poser. Elle ne contient pas : apparence, origine, santé, famille, religion, « look », « accent », notes moqueuses. Un commentaire illicite est pire que l'absence de commentaire : il documente la discrimination.\n\nLa traçabilité sert aussi le candidat et L. 1221-8 : on peut lui dire quelles méthodes ont été utilisées (lecture sur grille, pas de test de graphologie bidon). Les méthodes doivent être pertinentes (L. 1221-9). Une note « feeling » n'est pas une méthode pertinente. Un score d'algorithme non expliqué non plus, s'il ne peut pas être justifié.\n\nProportion : vous ne scannez pas la carte vitale, vous ne gardez pas 12 versions du CV annotées à la main dans un tiroir. L'ATS, des droits d'accès limités (recruteurs du poste, RH), pas un fichier partagé « CVthèque équipe commerciale ». La minimisation RGPD et le guide CNIL recrutement (30/01/2023) vont dans le même sens. En cas d'opposition au vivier, vous retirez de l'actif ; l'archive de preuve du poste, si elle s'applique, reste un sujet RH/DPO."
            },
            {
              "block_type": "callout",
              "content": "Écrivez pour un juge et pour un DPO, pas pour un mème interne. 5 ans = archive de preuve des non-retenus (obligation de conservation à cette fin, pas un vivier). 2 ans = reco vivier. Commentaire discriminatoire = risque immédiat, L. 1132-1."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Saisir le statut le jour de la décision.\n2. Motif en une à trois phrases factuelles.\n3. Relire : un critère protégé s'y trouve-t-il ?\n4. Pièces : CV, grille, annonce datée — pas les photos de l'anniversaire du manager.\n5. Droits d'accès : vérifier qui voit le dossier.\n6. Purge / bascule archive selon politique, pas selon l'humeur."
            },
            {
              "block_type": "code",
              "content": "COMMENTAIRE ATS — modèle\n\n2026-10-13 | [vos initiales] | Assistant RH site Ville-sur-Cher\nStatut : non shortlist / préqual / vivier\nMotif : [faits du CV] au regard de [critères du poste]\nQuestions en suspens : [ ]\nCritères protégés aperçus et non utilisés : [ex. photo ignorée]\nSource : offre 13/10/2026"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Mauvais commentaire : « Karim, nom chelou, photo, 93, intérim = galère ». Bon commentaire : « Karim El Amrani (nom d'emprunt pédagogique) : missions d'intérim admin (pointages, accueil de missions, éléments variables). Shortlist oui pour préqual. Photo non évaluée. Lieu de résidence non utilisé comme filtre ; mobilité site à vérifier à l'appel. » Le second tient cinq ans. Le premier condamne le dossier."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ne rien écrire. Écrire sur un Slack public. Copier le CV dans un Drive perso. Motif « KO ». Commentaire sur le corps. Oublier de dater. Laisser le stagiaire marketing lire tous les CV. Promettre au candidat « on a tout effacé » alors que l'archive probatoire existe — seul RH/DPO parle des durées."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne : le dossier peut relier au traitement RH salariés ; ne mélangez pas les commentaires de mobilité avec une blague d'équipe. Cabinet : qui trace, vous ou le cabinet ? Double saisie à éviter, contrat à lire. Demande d'accès RGPD : vous ne répondez pas au feeling, vous transmettez au DPO. Contentieux : plus aucun commentaire « pour rire »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réécrivez ce commentaire ATS : « Inès reconversion chelou, trop vieille pour un junior, on la garde au cas où 10 ans. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Version licite : « Inès Morel — 6 ans formatrice (évaluations, sessions, bases de droit social enseignées). Reconversion : compétences transférables vers organisation d'entretiens / accueil ; paie non démontrée. Statut : préqual (peut-être). Photo/âge non utilisés (âge = critère protégé, L. 1132-1). Vivier : seulement si informée, durée selon reco CNIL 2 ans / dernier contact, pas 10 ans. » Vous ne « gardez 10 ans au cas où »."
            }
          ],
          "position": 4
        },
        {
          "title": "Grille d'analyse : mode d'emploi",
          "description": "Utiliser une grille unique, knock-out puis ranking, avant d'ouvrir les quatre CV fictifs.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez remplir la grille d'analyse du cours (bloc code) sur n'importe quel CV d'assistant RH, distinguer éliminatoire et comparatif, et préparer la correction des quatre cas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une grille n'est pas un gadget d'école. C'est l'outil qui rend la lecture structurée reproductible. Sans grille, quatre recruteurs produisent quatre shortlists et des motifs incomparables. Avec une grille trop longue, personne ne la remplit. La grille ci-dessous est calée sur le poste support du module : assistant RH, CDI, site industriel fictif Forges & Maintenance du Centre, missions paie / dossiers / organisation d'entretiens / accueil, 35 h jour, tableur, formation RH ou expérience équivalente, pas d'anglais, pas de permis.\n\nElle sépare knock-out et ranking. Knock-out : absence totale d'élément d'administration du personnel, de paie, d'accueil RH ou d'équivalent transférable clairement décrit ; impossibilité manifeste vis-à-vis d'une exigence réelle du poste (exemple : refus annoncé d'être sur site alors que le poste est sédentaire sans télétravail — à confirmer à l'oral, rarement au seul CV). L'âge, le nom, la photo, le sexe, le département ne sont jamais des knock-out. Ranking : durée pertinente, proximité des missions, outils, clarté du parcours, questions restantes. Un score n'est qu'une aide ; il ne replacera pas le motif rédigé.\n\nRemplir la grille avant la leçon suivante. Vous travaillerez sur quatre CV entièrement fictifs, noms d'emprunt évidents : Samira Benali, Éric Vasseur, Inès Morel, Karim El Amrani. Aucun n'est une personne réelle. Vous n'irez pas les chercher sur le web. La correction détaillée n'est pas « la » vérité d'embauche : c'est une application justifiée de la grille, que vous pouvez discuter si vous apportez d'autres preuves issues du texte, pas un sentiment.\n\nLa grille est une méthode d'aide au recrutement. Elle doit rester pertinente (L. 1221-9). Si vous ajoutez une ligne « sourire de la photo » ou « prestigieux du nom d'employeur », elle cesse de l'être et elle heurte L. 1132-1 / L. 1221-6. Les RH peuvent imposer une grille entreprise : vous la suivez si elle est licite, vous signalez si elle ne l'est pas."
            },
            {
              "block_type": "callout",
              "content": "Knock-out = exigence réelle du poste, pas un préjugé. Ranking = comparaison entre personnes déjà admissibles. Toujours un motif en phrase, même si une note existe."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Imprimer ou copier la grille. Une grille par CV. Ne pas comparer les photos. Remplir knock-out d'abord. Si KO, motif de non, ne pas « sauver » par le feeling. Si non KO, ranking et statut. Préparer deux questions. Passer au CV suivant sans relire le précédent (réduire l'ancrage). À la fin seulement, comparer les quatre statuts."
            },
            {
              "block_type": "code",
              "content": "GRILLE D'ANALYSE CV — Assistant RH site (poste fictif du cours)\nDate : ..........  Recruteur : ..........  Candidat (nom d'emprunt) : ..........\n\nA. KNOCK-OUT (oui/non, preuve dans le CV)\nA1. Aucune admin personnel / paie / accueil RH / équivalent transférable décrit ?\nA2. Incompatibilité manifeste avec une exigence réelle (à n'utiliser que si le CV l'écrit) ?\nA3. Un critère protégé a-t-il été utilisé ? (si oui : STOP, illicite)\n\nB. RANKING (0 = non montré, 1 = partiel, 2 = étayé)\nB1. Administration du personnel (dossiers, entrées/sorties)\nB2. Éléments de paie / variables / absences\nB3. Organisation d'entretiens ou accueil / sessions\nB4. Tableur ou SIRH\nB5. Durée pertinente cumulée\nB6. Cohérence dates / titres (0 = contradictions graves, 1 = questions, 2 = cohérent)\nB7. Formation RH ou contenu équivalent (pas le prestige de l'école)\n\nC. ÉLÉMENTS IGNORÉS (cocher si vus et écartés)\n[ ] photo  [ ] nom comme critère  [ ] âge inféré  [ ] sexe  [ ] code postal / quartier\n[ ] apparence  [ ] « instabilité » présumée de l'intérim  [ ] diplôme étranger comme KO\n\nD. QUESTIONS DE PRÉQUAL (max 3, L. 1221-6)\n1.\n2.\n3.\n\nE. STATUT\n[ ] Oui préqual   [ ] Peut-être préqual   [ ] Non   [ ] Vivier si informé\nMotif (3 phrases, faits + critères) :\nTrace ATS : date, auteur, source"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un junior ajoute une ligne « école de commerce ». Hors poste d'assistant de site. La responsable RH la retire : pas de lien nécessaire. La grille redevient pertinente. C'est le bon réflexe, pas une « ouverture sans exigence » : les exigences restantes (paie, dossiers) restent là."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Remplir la grille après avoir décidé. Mettre 0 à B6 parce que le nom « sonne loin ». Transformer B7 en classement des écoles. Oublier la section C. Scorer 14/14 et écrire un motif inverse. Utiliser A2 pour « habite loin » sans fait."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Autre poste (commercial, maintenance) : la même structure, d'autres lignes B (portefeuille, habilitation). Ne pas coller la grille RH sur un préparateur. Candidat interne : ajouter une ligne « mobilité et poste laissé vacant » (organisation), pas une ligne « on le connaît »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Copiez la grille. Dans la leçon suivante, remplissez-en quatre. Aujourd'hui, rédigez en cinq lignes ce qui serait un knock-out illicite sur ce poste, pour vous en interdire l'usage."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Knock-out illicites à s'interdire : nom, photo, âge, sexe, résidence comme stigmate, diplômes étrangers par principe, intérim par principe, reconversion par principe, handicap, santé. Knock-out licites possibles : zéro élément d'admin/paie/accueil/équivalent ; contradiction de parcours qui rend le document inutilisable après questions — et encore, souvent c'est un non justifié plutôt qu'un KO immédiat. A3 doit rester à « non »."
            }
          ],
          "position": 5
        },
        {
          "title": "Quatre CV fictifs : analyse et corrections",
          "description": "Analyser les CV de Samira Benali, Éric Vasseur, Inès Morel et Karim El Amrani, puis comparer à la correction détaillée.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous avez exercé la grille sur quatre parcours fictifs contrastés (adéquation, titres gonflés, reconversion, intérim) et vous savez justifier une shortlist sans critère protégé."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les quatre documents ci-dessous sont entièrement fictifs. Les noms d'emprunt sont volontairement évidents : Samira Benali, Éric Vasseur, Inès Morel, Karim El Amrani. Toute ressemblance avec une personne réelle serait une coïncidence ; vous ne les recherchez pas en ligne. Ils postulent au même poste pédagogique : assistant RH, CDI, Forges & Maintenance du Centre, site de Ville-sur-Cher, missions déjà connues.\n\nLe lot est conçu pour faire apparaître des erreurs classiques. Le premier CV est proche du besoin : le risque est de le sur-noter pour la mise en page, ou de l'écarter pour un trou court. Le deuxième pousse la cohérence des titres et des dates : le risque est soit de croire le titre, soit d'écrire un roman sur le trou. Le troisième est une reconversion : le risque est le knock-out « pas RH ». Le quatrième est un parcours d'intérim avec un diplôme obtenu hors de France et une photo : le risque est le nom, le quartier, l'« instabilité », l'apparence, le diplôme étranger.\n\nVous remplissez quatre grilles avant de lire la correction. La correction n'invente pas de faits absents du CV. Elle n'utilise aucun critère protégé. Elle propose une shortlist : deux oui fermes, un oui avec réserve de formation, un non — vous pouvez défendre une variante si elle s'appuie sur le texte et la grille, pas sur un feeling. Les coordonnées, employeurs et villes sont d'emprunt.\n\nCes CV ne sont pas des modèles à remettre à des candidats. Ce sont des supports d'entraînement. En situation réelle, vous n'annoterez pas un CV de commentaires illicites, même en marge « pour vous ». La leçon ressource n'est pas une fiche de huit lignes : les quatre parcours, la grille déjà vue et la correction détaillée tiennent lieu de bibliothèque de cas pour ce module."
            },
            {
              "block_type": "callout",
              "content": "Noms d'emprunt uniquement. Pas de recherche web. Photo, nom, âge, résidence : section C de la grille, jamais un KO. Correction après votre tentative, pas avant."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Chronométrez 12 à 15 minutes par CV, grille complète, sans relire la correction. Ensuite seulement, comparez. Notez vos écarts : biais, oubli de mission, sévérité sur un trou."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les quatre CV tiennent lieu d'exemple. Ils varient PME, industrie, organisme de formation, intérim."
            },
            {
              "block_type": "code",
              "content": "CV 1 — Samira Benali (nom d'emprunt) — entièrement fictif\nSamira Benali\n06 00 00 00 01 — samira.benali.fictif@email.example\nLyon (métropole) — mobilité à préciser\nTitre : Assistant RH — administration du personnel et paie\n\nExpérience\n09/2024 – 07/2026  Assistant RH, Atelier Nord Services (PME fictive, 42 pers., services)\n- Collecte des éléments variables de paie (absences, heures, acomptes) pour 42 dossiers\n- Administration des dossiers d'entrée et de sortie, relation prestataire paie\n- Organisation de 8 recrutements (planning d'entretiens, convocations, grilles)\n- Accueil J1 des embauches (badges, livret d'accueil)\nOutils : Excel, petit SIRH (Lucca — mention fictive pédagogique)\n\n01/2024 – 06/2024  Recherche d'emploi après fin de CDD (période à éclaircir en préqual si besoin)\n\n04/2023 – 12/2023  CDD Assistante administrative, Cabinet Martin-Lefort (fictif)\n- Standard, planning, dossiers papier — peu de paie\n\nFormation\n2023  Licence professionnelle RH (IAE d'emprunt)\n2022  DUT GEA\n\nPas de photo. Permis B. Anglais scolaire. Disponibilité : préavis 1 mois (CDI en cours jusqu'à 07/2026 ; CV « à date pédagogique » 13/10/2026 : vérifier si toujours en poste)."
            },
            {
              "block_type": "code",
              "content": "CV 2 — Éric Vasseur (nom d'emprunt) — entièrement fictif\nÉric Vasseur\neric.vasseur.fictif@email.example — 06 00 00 00 02\n« Directeur adjoint des ressources humaines »\n\nExpérience\n01/2022 – 06/2024  Directeur adjoint des RH, Atelier Vasseur Frères (fictif)\nEntreprise présentée comme un « groupe » — plus bas, une ligne indique 12 salariés atelier mécanique\n- « Pilotage stratégique RH »\n- « Management d'une équipe RH de 8 personnes »\n- « Refonte complète du SIRH et des IRP »\n(aucune mission concrète de paie, de dossier ou d'entretien décrite)\n\n02/2023 – 12/2023  Commercial sédentaire temps plein, Automobiles Dupin (fictif)\n(chevauchement avec le poste ci-dessus)\n\n2016 – 2021  Chef d'équipe production, Atelier Vasseur Frères\n- Planning d'atelier, 6 techniciens, formation sécurité, quelques entretiens d'intégration technique\n\n07/2024 – 10/2026  [aucune ligne]\n\nFormation\nBac professionnel maintenance (2003 — n'utiliser que comme date, pas comme âge-critère)\n« Master RH » suivi en e-learning, organisme non précisé, dates absentes\n\nPhoto d'identité jointe. Commentaire manuscrit du candidat : « Je vise un poste à ma hauteur, pas un job d'assistant. »"
            },
            {
              "block_type": "code",
              "content": "CV 3 — Inès Morel (nom d'emprunt) — entièrement fictif\nInès Morel\nines.morel.fictif@email.example — 06 00 00 00 03\nVille-sur-Cher (même bassin que le site)\nTitre : Formatrice d'adultes — projet : administration RH / recrutement\n\nExpérience\n09/2018 – 08/2024  Formatrice, CFA Horizon Métiers (organisme fictif)\n- Positionnement des stagiaires (entretiens individuels, 80 à 100 / an)\n- Évaluation écrite et orale, bulletins, jurys\n- Enseignement des bases du droit du travail (contrats, temps de travail) en CAP/BEP\n- Organisation de sessions (salles, convocations, émargements)\n- Pas de paie d'entreprise, pas de SIRH employeur\n\n2016 – 2018  Assistante pédagogique, même organisme\n- Dossiers stagiaires, convocations, relation familles (ne pas transformer en critère « situation de famille » du candidat)\n\nFormation\n2016  Licence de sciences de l'éducation\n2018  Titre de formateur(trice) pour adultes (organisme fictif)\n\nCV sans photo. Français professionnel. Tableur : listes d'émargement, notes. Projet motivé en 8 lignes (jointe) : souhaite passer côté employeur, consciente de devoir apprendre la paie."
            },
            {
              "block_type": "code",
              "content": "CV 4 — Karim El Amrani (nom d'emprunt) — entièrement fictif\nKarim El Amrani\nkarim.elamrani.fictif@email.example — 06 00 00 00 04\nAdresse : [commune d'emprunt en Île-de-France] — ne pas juger le département\nPhoto couleur jointe (apparence = critère protégé, à ignorer)\n\nExpérience (intérim, agence fictive Tempo-Flèche)\n03/2026 – 09/2026  Assistant administratif, Forges & Maintenance du Centre (le même site fictif, mission)\n- Pointages, relances d'absences, accueil des intérimaires, badges\n- Saisie de variables pour la responsable RH\n11/2025 – 02/2026  Préparateur de commandes, Logi-Flèche (fictif) — mission courte\n06/2025 – 10/2025  Assistant administration du personnel, PME Propreté Lustre (fictif, 70 pers.)\n- Dossiers d'entrée d'agents, contrats de travail, planning\n01/2024 – 05/2025  Plusieurs missions admin / standard (détail fourni sur 1 page : durées 6 à 16 semaines)\n\nFormation\n2023  BTS assistant de gestion — diplôme obtenu au Maroc, équivalence mentionnée (à ne pas écarter au titre de l'origine)\n2019  Bac\n\nLangues : français professionnel, arabe. L'arabe n'est ni un plus imposé ni un moins (L. 1132-1, langue autre que le français). Permis B."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Écarter Karim pour le nom ou la photo. Écarter Inès « pas RH ». Croire Éric sur le « DRH adjoint ». Pénaliser Samira pour cinq mois de recherche. Shortlister Éric parce qu'il « vise haut » et que le manager est flatté. Écrire dans l'ATS le mot « instable » sur l'intérim sans avoir lu les missions admin."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si votre shortlist diffère (par exemple Inès en oui ferme parce que la paie se forme en interne) : c'est acceptable si le motif est le critère B et la politique de formation interne, pas un feeling. Si vous avez mis Éric en oui : relisez les chevauchements et l'absence de mission concrète ; un « peut-être » de clarification est le maximum défendable, un oui ferme ne l'est pas sur ce papier."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Remplissez les quatre grilles, proposez une shortlist ordonnée, rédigez les quatre motifs ATS. Puis seulement, lisez la correction."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Correction pédagogique du lot. Ce n'est pas une embauche réelle. Les scores de ranking sont indicatifs (0-2)."
            },
            {
              "block_type": "code",
              "content": "CORRECTION — Samira Benali\nA : pas de KO. A3 non.\nB : B1=2 B2=2 B3=2 B4=2 B5=2 (22 mois + CDD admin) B6=2 (trou 01-06/2024 = recherche d'emploi, à confirmer sans roman) B7=2\nC : ignorer permis/anglais (non requis) ; mobilité Lyon → Ville-sur-Cher = question, pas un jugement de résidence.\nD : toujours en poste ? préavis ? SIRH Lucca vs outil du site ? trajet / présence site.\nE : OUI préqual. Motif : missions paie, dossiers, recrutements, accueil, formation RH, outils. Trou court expliqué par la recherche d'emploi, non éliminatoire.\n\nCORRECTION — Éric Vasseur\nA : pas un KO d'absence totale (il a fait planning et intégration technique) mais B6 très dégradé.\nB : B1=0 B2=0 B3=1 (intégration technique, pas RH) B4=0 B5=0 sur le cœur de poste B6=0 (chevauchement temps plein 2023, titre DRH adjoint vs 12 salariés et « équipe RH de 8 » invraisemblable, trou 2024-2026 non documenté, master sans dates) B7=0/1\nC : photo ignorée ; bac 2003 non utilisé comme âge.\nD : si l'on appelait : clarification des dates et du titre — mais le papier ne soutient pas un assistant RH de site. La phrase « pas un job d'assistant » signale un écart d'attente.\nE : NON. Motif : titres non étayés, contradictions de dates, aucune mission d'administration du personnel / paie ; le cœur de parcours est la production. Pas un roman sur le trou. Pas un commentaire sur la photo. Trace : non shortlist, faits ci-dessus.\n\nCORRECTION — Inès Morel\nA : pas de KO (équivalents transférables nombreux).\nB : B1=1 (dossiers stagiaires, pas salariés) B2=0 B3=2 B4=1 B5=2 (6 ans) B6=2 B7=1 (droit du travail enseigné, pas un diplôme RH)\nC : rien à pénaliser ; même bassin géographique = fait utile au poste, pas un bonus ethnique.\nD : appétence et réalisme sur la paie ; différence dossiers stagiaires / dossiers salariés ; délai d'apprentissage.\nE : OUI préqual (ou peut-être ferme si la paie est knock-out interne dès J1 sans formation — dans le brief du cours, formation interne possible : OUI). Motif : entretiens, évaluations, organisation de sessions, bases de droit social ; paie à construire ; reconversion lisible.\n\nCORRECTION — Karim El Amrani\nA : pas de KO.\nB : B1=2 (dossiers, contrats, mission récente sur le MÊME site fictif) B2=1/2 (saisie de variables) B3=1 (accueil intérimaires) B4=1 B5=1/2 (cumul missions) B6=2 B7=1 (BTS gestion, équivalence : ne pas KO « diplôme marocain »)\nC : OBLIGATOIRE d'ignorer photo, nom, département, arabe comme moins. Intérim ≠ instabilité.\nD : enchaînement de missions (choix, marché, pas une personnalité) ; souhait CDI ; connaissance du site (conflit / atout à traiter factuellement) ; outils.\nE : OUI préqual. Motif : admin personnel et variables de paie en missions, y compris sur le site ; parcours d'intérim lu comme des contrats, pas comme un défaut. Nom/photo/résidence non utilisés.\n\nSHORTLIST PÉDAGOGIQUE\n1. Samira Benali — oui\n2. Karim El Amrani — oui\n3. Inès Morel — oui (paie à sécuriser en préqual)\n4. Éric Vasseur — non\nCapacité : les trois oui tiennent dans une semaine de préqual. Vivier : aucun pour Éric sur ce poste ; pas de « 10 ans au cas où ».\n\nCE QUE VOUS AURIEZ DÛ ÉVITER\n- Pénaliser Karim ou Samira pour le nom\n- Pénaliser Karim pour la photo ou l'intérim\n- Pénaliser Inès pour l'absence du mot RH\n- Croire ou moquer Éric ; écrire « menteur » ; inventer une maladie dans le trou\n- Shortlister Éric pour flatter le manager"
            },
            {
              "block_type": "text",
              "content": "Si vos statuts coïncident et que vos motifs sont factuels, l'exercice est réussi même si vos notes B diffèrent d'un point. Si un critère protégé apparaît dans votre motif, recommencez ce CV uniquement."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Analyser les CV et présélectionner",
          "description": "Dix questions : lecture, biais, shortlist, traçabilité, cas fictifs.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Analyser les CV et présélectionner",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Dans une lecture structurée, vous commencez par :",
                "question_type": "single_choice",
                "options": [
                  "A. Les critères du poste, puis les faits de parcours (dates, missions, outils, formation), sans évaluer la photo.",
                  "B. La photo, pour « sentir » la personne.",
                  "C. Le nom de famille, pour juger l'origine.",
                  "D. Google Images."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La fiche de poste oriente l'extraction. Photo, nom, origine : critères protégés (L. 1132-1, apparence, nom). Googler la vie privée n'est pas une méthode pertinente (L. 1221-6 / L. 1221-9)."
              },
              {
                "question": "Un trou de six mois sur un CV doit vous conduire à :",
                "question_type": "single_choice",
                "options": [
                  "A. Noter une question professionnelle ouverte en préqual, sans roman sur la santé ou la famille, le trou n'étant pas à lui seul un motif d'écartement.",
                  "B. Écarter d'office.",
                  "C. Écrire « grossesse ? » dans l'ATS.",
                  "D. Exiger un certificat médical."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6 : pas d'information sans lien. Santé et situation de famille sont protégées (L. 1132-1). Le trou s'éclaire, il ne se psychanalyse pas. Un certificat médical n'a rien à faire en présélection d'assistant RH."
              },
              {
                "question": "Écarter Karim El Amrani (nom d'emprunt) à cause de son nom est :",
                "question_type": "single_choice",
                "options": [
                  "A. Illicite : le nom de famille est un critère protégé (L. 1132-1).",
                  "B. Une bonne pratique clients.",
                  "C. Autorisé si le manager l'ordonne.",
                  "D. Autorisé en intérim seulement."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1132-1 vise notamment le nom de famille et l'origine. L'ordre d'un manager ne légalise pas. Le type de contrat (intérim) ne crée pas d'exception."
              },
              {
                "question": "Inès Morel n'a pas l'intitulé « assistant RH ». La bonne lecture est :",
                "question_type": "single_choice",
                "options": [
                  "A. Examiner les compétences transférables (entretiens, évaluations, sessions, bases de droit social) au regard de L. 1221-6, et traiter la paie comme un manque à clarifier, pas comme un KO « pas RH ».",
                  "B. Knock-out automatique.",
                  "C. La recruter sans grille, par sympathie pour la reconversion.",
                  "D. Exiger d'abord un nouveau diplôme RH de cinq ans, par principe."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'intitulé n'est pas l'aptitude. La reconversion n'est ni un KO ni un passe-droit. Un diplôme n'est obligatoire que s'il a un lien réel ou réglementaire ; ce n'est pas le cas universel de l'assistant de site."
              },
              {
                "question": "Sur le CV d'Éric Vasseur, l'élément le plus problématique pour une présélection d'assistant RH est :",
                "question_type": "single_choice",
                "options": [
                  "A. Les contradictions de dates (chevauchement de deux temps plein), un titre de DRH adjoint non étayé, et l'absence de missions d'admin / paie.",
                  "B. La photo.",
                  "C. L'année du bac, qui révèle l'âge.",
                  "D. Le fait d'avoir travaillé en production."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La cohérence et le lien avec l'emploi portent la décision de non. Photo et âge sont protégés. La production n'est pas un déshonneur ; elle n'étaye simplement pas ce poste, sauf missions transférables — ici trop faibles au regard du titre affiché."
              },
              {
                "question": "Un commentaire ATS « look non professionnel, 93, instable (intérim) » est :",
                "question_type": "single_choice",
                "options": [
                  "A. À bannir : apparence, lieu de résidence, et préjugé sur l'intérim ; il documente un risque L. 1132-1 et n'est pas une méthode pertinente.",
                  "B. Utile pour la preuve des 5 ans.",
                  "C. Recommandé par le guide CNIL.",
                  "D. Obligatoire si le CV a une photo."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "La preuve des 5 ans (L. 1134-5 / CNIL) exige des motifs professionnels, pas un commentaire discriminatoire. La CNIL ne recommande pas ce type de note. La photo n'impose aucun commentaire d'apparence."
              },
              {
                "question": "La durée de 5 ans évoquée pour les candidats non retenus correspond :",
                "question_type": "single_choice",
                "options": [
                  "A. À un archivage intermédiaire à des fins de preuve à compter de la date à laquelle le poste a été pourvu (L. 1134-5 / référentiel CNIL 2026), distinct du vivier recommandé à 2 ans.",
                  "B. À la durée pendant laquelle on relance tous les CV au téléphone.",
                  "C. À une obligation de tout laisser en base active LinkedIn.",
                  "D. À un délai d'entretien obligatoire."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Même distinction que dans les modules stratégie et sourcing. 5 ans = preuve, pas chasse. 2 ans = reco vivier. Pas un délai légal pour recevoir en entretien."
              },
              {
                "question": "Le lieu de résidence d'un candidat, au stade du CV :",
                "question_type": "single_choice",
                "options": [
                  "A. Ne peut pas servir à écarter pour un quartier ou un département (critère protégé) ; une question de présence sur site / trajet peut se poser plus tard si le poste l'exige vraiment.",
                  "B. Permet d'écarter tous les codes postaux que le manager n'aime pas.",
                  "C. Doit être copié dans le commentaire ATS avec un jugement.",
                  "D. Est le premier knock-out de la grille du cours."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1132-1 : lieu de résidence. Le lien avec l'emploi, c'est la présence réelle sur le site, à vérifier en préqual, pas un stigmate géographique. La grille du cours range le code postal en « éléments ignorés »."
              },
              {
                "question": "Une shortlist de présélection est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une liste courte de personnes à préqualifier, avec motifs professionnels, qui n'est ni une promesse d'embauche ni un classement au feeling.",
                  "B. Un contrat de travail.",
                  "C. Une promesse unilatérale au sens de F39588.",
                  "D. La liste de tous les CV reçus, pour ne fâcher personne."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "F39588 distingue offre de contrat et promesse : la shortlist n'est ni l'une ni l'autre. Empiler tous les CV n'est pas présélectionner. Le motif écrit protège la qualité et la preuve."
              },
              {
                "question": "Un diplôme obtenu hors de France, sur le CV fictif de Karim El Amrani :",
                "question_type": "single_choice",
                "options": [
                  "A. S'apprécie par le contenu et l'éventuelle équivalence, en lien avec l'emploi ; il ne justifie pas un écartement pour origine ou nationalité (L. 1132-1).",
                  "B. Est un knock-out automatique.",
                  "C. Impose de demander la nationalité dès le CV.",
                  "D. Doit être ignoré, même s'il est un BTS de gestion utile au poste."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Ni xénophobie, ni angélisme : on lit le contenu (assistant de gestion) comme un BTS français comparable, plus l'expérience. Demander la nationalité n'a en général pas de lien avec un poste d'assistant RH (L. 1221-6) et oriente un critère protégé."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 8,
      "title": "Conduire une préqualification téléphonique",
      "description": "Préparer et conduire un appel de préqualification, poser les questions licites (motivation, préavis, prétentions), interdire les autres, tracer la décision.",
      "lessons": [
        {
          "title": "Objectifs d'une préqualification téléphonique",
          "description": "Savoir à quoi sert l'appel, ce qu'il n'est pas, et quand il est justifié dans le process.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez définir la préqualification, la distinguer de l'entretien manager et de la simple prise de rendez-vous, et formuler trois objectifs mesurables : vérifier l'adéquation minimale, informer, décider de la suite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La préqualification téléphonique (ou par visioconférence courte) est un échange structuré, généralement de quinze à vingt-cinq minutes, entre le recruteur et une personne shortlistée. Elle n'est pas un entretien d'évaluation approfondie des compétences techniques : c'est le manager, un expert, ou un second tour qui s'en chargera. Elle n'est pas non plus un appel « pour faire connaissance » sans grille. Elle a trois objectifs professionnels. Premier : vérifier les points d'adéquation minimale que le CV ne tranche pas (disponibilité, préavis, prétentions au regard d'une fourchette vraie, compréhension du contrat et des horaires, mobilité vers le site, appétence pour les missions réellement décrites). Deuxième : informer la personne sur le poste, le process, les méthodes (article L. 1221-8 : information préalable sur les méthodes d'aide au recrutement) et lui permettre de se retirer. Troisième : décider d'une suite tracée : entretien manager, complément de dossier, vivier informé, ou arrêt avec motif.\n\nCette étape n'est pas une obligation légale universelle. Beaucoup d'entreprises s'en passent sur un volume faible, ou la remplacent par un questionnaire. Lorsqu'elle existe, c'est une méthode d'aide au recrutement : elle doit être pertinente (L. 1221-9) et les informations demandées doivent avoir un lien direct et nécessaire avec l'emploi (L. 1221-6). Elle ne sert pas à « sentir l'accent », à tester la situation de famille, ni à négocier un contrat que la personne ne connaît pas encore.\n\nMal conduite, la préqualification crée trois dégâts. Elle écarte illicitement. Elle promet trop (langage de promesse d'embauche, F39588). Elle noie le manager sous des profils non filtrés, ou au contraire elle filtre sur un critère qui n'est pas le sien (le junior qui recale un bon profil parce que « pas assez extraverti au téléphone » alors que le poste est une admin paie sédentaire). Bien conduite, elle respecte le temps de tout le monde, y compris la personne en poste qui a clos une porte de bureau pour vous parler.\n\nLe canal compte. Un appel non annoncé de vingt minutes à 18 h 40 le vendredi n'est pas professionnel. Un créneau posé, un ordre du jour, une durée dite dès le début, un compte rendu le jour même : c'est le standard attendu d'un junior. La visio n'est pas obligatoire ; si vous la imposez, le motif doit être lié à l'emploi (présentation d'un outil, pas un contrôle du logement — le lieu de résidence et l'apparence restent protégés, L. 1132-1)."
            },
            {
              "block_type": "callout",
              "content": "Préqualification = filtre licite + information + décision de suite. Ce n'est ni un interrogatoire de vie privée, ni une embauche, ni un entretien technique complet. L. 1221-6, L. 1221-8, L. 1221-9, L. 1132-1 s'appliquent dès cet appel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Confirmer que la personne est shortlistée (grille CV).\n2. Poser un créneau, envoyer un message : durée, thèmes, pas de préparation excessive.\n3. Annoncer en ouverture : qui vous êtes, durée, suite possible, enregistrement s'il y en a (et seulement si politique + information — par défaut, n'enregistrez pas).\n4. Couvrir adéquation, information, questions de la personne.\n5. Clore avec une suite et un délai de retour.\n6. Rédiger le CR le jour même."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Samira Benali (nom d'emprunt) est shortlistée pour l'assistant RH Forges. Objectifs de l'appel : confirmer les 22 mois de paie, le préavis, la mobilité Lyon / Ville-sur-Cher, la fourchette 24-27 k€, expliquer les 35 h sur site sans télétravail, informer du process (entretien responsable RH puis site). Non-objectifs : juger la voix, demander si elle a des enfants, tester Excel en live pendant 40 minutes."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Appeler sans rendez-vous et durer 50 minutes. Transformer l'appel en entretien d'embauche décisif. Oublier d'informer sur la suite. Recaler pour « feeling ». Promettre « c'est cuit, le manager va adorer ». Ne pas appeler du tout et envoyer 8 personnes au manager."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Intérim : préqual plus courte, nature de mission dite d'emblée. Volume : préqual en session, même grille. Candidat interne : mêmes objectifs, confidentialité vis-à-vis de l'équipe. Personne sourcée qui n'a pas encore de CV : l'appel peut recouvrir une partie de l'extraction CV, sans s'allonger indéfiniment. Handicap révélé : aménagement de l'échange, pas un recul du poste ; aptitude = médecine du travail plus tard."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager dit : « Passe un coup de fil pour voir si elle a une voix commerciale, on recrute un assistant RH. » Reformulez les objectifs de l'appel en 6 lignes, et ce que vous refusez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Objectifs : vérifier admin/paie, préavis, prétentions, présence site, informer du process. Refus : la « voix commerciale » n'a pas de lien nécessaire avec l'assistant RH sédentaire (L. 1221-6) et oriente l'apparence / le sexe des stéréotypes. Vous proposez au manager des critères du poste. Vous ne promettez pas de tester la voix."
            }
          ],
          "position": 0
        },
        {
          "title": "Préparer l'appel : grille, documents, interlocuteurs",
          "description": "Entrer en ligne avec un dossier, des questions licites, et une fourchette vraie, pas avec un CV ouvert à l'instant.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez constituer le dossier d'appel (fiche, CV extrait, questions, fourchette, process), prévenir la personne, et coordonner le manager sur ce que l'appel tranche ou non."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un appel improvisé produit des questions interdites et des oublis. La préparation tient en une page. Vous relisez la fiche de poste et l'annonce publiée : ce que vous direz du contrat, des horaires, du lieu, de la rémunération doit être exact (même exigence de loyauté que L. 5331-3). Vous relisez l'extraction CV : preuves, manques, trois questions maximum liées à l'emploi. Vous savez ce que les RH autorisent à dire sur la fourchette (affichage = bonne pratique / politique, pas obligation française consolidée au 13/10/2026 ; si vous citez un montant, il est tenable). Vous savez le process : qui reçoit ensuite, délais, tests éventuels — à annoncer (L. 1221-8).\n\nLes interlocuteurs : vous (conduite), le manager (ce qu'il veut que l'appel tranche : souvent préavis, salaire, 3×8, pas « la personnalité »), les RH (budget, politique d'affichage, points d'obligation). Vous ne préparez pas une liste de questions sur les enfants « au cas où le manager demanderait ». Vous préparez une phrase de refus si le manager vous a glissé un critère illicite.\n\nLe matériel : casque, ligne correcte, ATS ouvert, grille d'appel (version téléphone de la grille CV, plus préavis / prétentions / compréhension du poste / questions de la personne). Un lieu calme. Vous ne menez pas l'appel depuis un open space qui fait rire au mot « salaire ». Vous ne l'enregistrez pas par défaut : un enregistrement est un traitement de données supplémentaire, à n'envisager que si la politique et l'information sont claires ; la bonne pratique junior est un compte rendu écrit, pas un fichier audio personnel.\n\nPrévenir la personne est une politesse et une qualité de donnée. Un SMS ou e-mail : qui, durée, thèmes. Ce n'est pas une obligation légale chiffrée, c'est une bonne pratique. Cela permet aussi à la personne de se placer (confidentialité vis-à-vis de l'employeur actuel). Appeler le standard actuel pour « joindre Éric Vasseur pour un recrutement » est une faute professionnelle."
            },
            {
              "block_type": "callout",
              "content": "Dossier d'appel = fiche + extraction + 3 questions L. 1221-6 + fourchette vraie + process. Pas d'enregistrement sauvage. Pas d'appel au standard de l'employeur actuel. Pas de question « enfants » préparée pour faire plaisir au manager."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Bloc 24 h avant : message de confirmation du créneau.\n2. 15 min avant : relire extraction, ouvrir la grille d'appel, vérifier la fourchette avec les RH si doute.\n3. Sur la feuille : ouverture (L. 1221-8), questions, présentation du poste, prétentions/préavis, questions inverses, clôture.\n4. Après : CR dans l'heure, statut, mail de suite."
            },
            {
              "block_type": "code",
              "content": "DOSSIER D'APPEL — checklist\n\n[ ] Fiche de poste + annonce datée\n[ ] Extraction CV (preuves / manques)\n[ ] 3 questions max, lien avec l'emploi\n[ ] Fourchette / avantages : version RH\n[ ] Horaires, lieu, télétravail : version vraie\n[ ] Process et délais\n[ ] Grille d'appel vierge\n[ ] Interdiction explicite : famille, santé, origine, religion, logement, photo\n[ ] Créneau confirmé, confidentialité"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Préqual Karim El Amrani (nom d'emprunt) : dossier = missions d'intérim admin, variables de paie, accueil ; questions = souhait CDI, connaissance du site (mission précédente), outils ; fourchette 24-27 ; dire le 0 jour de télétravail. Le manager voulait « demander s'il est motorisé pour les 3×8 » : le poste est de jour, 35 h, sédentaire, bus. La question permis / voiture n'a pas de lien. Elle sort du dossier."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ouvrir le CV pendant la sonnerie. Ignorer l'annonce (dire « remote » alors qu'elle dit sur site). Oublier le nom de la personne. Préparer 20 questions. Noter « vérifier l'âge ». Appeler sans créneau une personne en 3×8 pendant son poste de nuit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Personne qui ne peut parler que le soir : créneau 18 h 30, pas 12 h 15. Interprète / aménagement : organisez, ne reculez pas. Double préqual (cabinet + vous) : cadrez pour ne pas poser deux fois les mêmes illicites. Candidat à l'étranger : fuseau, français du poste (L. 5331-4 concerne l'offre, mais la clarté du contrat reste due)."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Préparez le dossier d'appel d'Inès Morel (reconversion formatrice) : 3 questions licites, 3 questions que vous refusez, 4 faits à lui dire sur le poste."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Questions licites : exemples de dossiers stagiaires vs ce qu'elle comprend des dossiers salariés ; comment elle envisage d'apprendre la paie ; préavis / disponibilité. Refusées : âge, enfants, « vous vivez seule », religion, santé, « pourquoi une reconversion si tard ». Faits à dire : CDI 35 h jour, sur site, pas de télétravail, fourchette vraie, process, paie à apprendre, pas une promesse de poste."
            }
          ],
          "position": 1
        },
        {
          "title": "Structure d'un appel professionnel",
          "description": "Enchaîner ouverture, écoute du parcours, présentation du poste, vérifications, questions inverses et clôture, sans se perdre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez conduire 20 minutes en six séquences, garder la main sans couper, et éviter que l'appel parte en conversation de couloir ou en interrogatoire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une structure stable protège le droit et la qualité. Sans structure, les questions interdites arrivent « naturellement » (« vous avez des enfants, ça va être dur les 5 h »). Avec une structure, chaque minute a une fonction. Séquence 1, ouverture (2 min) : qui vous êtes, durée, objet, methods (entretien de préqualification, pas de test aujourd'hui, suite possible), confidentialité, accord pour continuer. C'est le bon moment pour L. 1221-8, en langage clair, pas en article de code. Séquence 2, parcours (5-6 min) : « racontez-moi, au regard de ce poste, vos missions de paie / d'entretiens / d'accueil ». Vous écoutez, vous recoupez le CV, vous ne faites pas raconter la vie depuis le bac (âge). Séquence 3, poste (4 min) : vous dites le vrai — contrat, horaires, lieu, rattachement, missions, ce que le poste n'est pas. Séquence 4, vérifications (4 min) : préavis, prétentions, mobilité site, points knock-out réels (3×8, habilitation, CDD vs CDI). Séquence 5, questions inverses (3 min) : la personne pose les siennes ; vous répondez sans allégation. Séquence 6, clôture (2 min) : suite, délai, remerciement, pas de promesse.\n\nCette structure est une bonne pratique. Elle n'est pas imposée par un article. Elle rend L. 1221-6 applicable : chaque question se rattache à une séquence professionnelle. Elle rend F39588 plus sûr : la clôture ne dit pas « vous avez le poste ». Elle permet de gérer le temps : si la séquence 2 déborde, vous le dites et vous recentrez.\n\nLe vouvoiement reste la règle, y compris si la personne tutoie. Le sourire s'entend, la familiarité (« on va être copines ») n'a pas sa place. Les silences de quelques secondes après une question utile sont un outil, pas un malaise à combler par une question sur le week-end."
            },
            {
              "block_type": "callout",
              "content": "Ouvrir = informer la méthode (L. 1221-8). Clore = suite et délai, pas une promesse (F39588). Au milieu = faits du poste et du parcours, pas la vie privée."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Imprimez les six séquences avec un horodatage. Cochez. Si la personne dévie vers le personnel : « je recentre sur les missions du poste ». Si vous déviez : même discipline. À 18 minutes, amorcez la clôture."
            },
            {
              "block_type": "code",
              "content": "DÉROULÉ 20 MIN\n\n00-02  Ouverture, durée, méthode, accord\n02-08  Parcours lié au poste (preuves CV)\n08-12  Présentation vraie du poste\n12-16  Préavis, prétentions, mobilité, knock-out réels\n16-18  Questions de la personne\n18-20  Suite, délai, remerciement\n\nFilet : « Pour respecter votre temps, je passe à… »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Appel Éric Vasseur (s'il avait été shortlisté, ce que la correction CV déconseille) : la structure aurait forcé à coller dates et titre dès la séquence 2, puis à dire que le poste est un assistant, pas un DRH adjoint. Sans structure, l'appel serait devenu un débat d'ego. Avec structure, on clôt en 20 min avec un motif clair."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Commencer par « alors, vous gagnez combien ? ». Parler 15 minutes du projet d'entreprise. Oublier de présenter les 3×8. Laisser 40 minutes. Clore par « on se tient au courant » sans délai. Tutoyer. Rire d'un trou de CV."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Personne très bavarde : filet de temps, reprise de la séquence. Personne monosyllabique : questions ouvertes sur les missions (« donnez un exemple de variable de paie que vous collectiez »), pas des questions personnelles pour « détendre ». Interruption (atelier, enfant qui passe — vous n'en faites pas un critère). Visio qui tombe : reprendre par téléphone, ne pas juger le logement aperçu."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réordonnez ces répliques et dites celles que vous supprimez : (a) « Vous avez des enfants ? » (b) « Je suis X, 20 min, préqualification, puis éventuellement un entretien avec la responsable RH. » (c) « Quel est votre préavis ? » (d) « Le poste est à vous s'il me dit oui. » (e) « Vos missions de collecte de variables ? » (f) « Le poste est un CDI 35 h sur site, pas de télétravail. »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ordre : b (ouverture / L. 1221-8), e (parcours), f (poste), c (vérification). Suppression : a (illicite), d (promesse). Les questions inverses et la clôture avec délai manquent : à ajouter. Temps : 20 min tenables."
            }
          ],
          "position": 2
        },
        {
          "title": "Motivation, préavis, prétentions : questions licites",
          "description": "Poser les trois questions classiques du junior avec un lien à l'emploi, sans pression et sans mensonge sur le budget.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez formuler une question de motivation professionnelle, une question de préavis / disponibilité, une question de prétentions, et les relier à L. 1221-6. Vous savez aussi quoi faire d'une réponse vague, d'un préavis long, d'une prétention hors fourchette."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Trois thèmes reviennent dans presque toutes les préqualifications, parce qu'ils ont un lien direct avec l'emploi : la motivation pour CE poste (pas pour « un job, n'importe lequel »), la date de disponibilité (préavis, autre process, contrainte professionnelle), les prétentions salariales au regard du budget. Lien avec l'emploi : L. 1221-6. Ce ne sont pas des questions sur la vie privée. « Pourquoi ce poste, dans ce site, avec ces horaires ? » est licite. « Pourquoi vous, une femme, en industrie ? » ne l'est pas. « Quel est votre préavis contractuel ? » est licite. « Vous ne pouvez pas partir plus tôt, vous êtes enceinte ? » ne l'est pas. « Quelles sont vos prétentions pour ce type de poste ? » est licite. « Combien gagne votre conjoint ? » ne l'est pas.\n\nLa motivation s'évalue sur des faits : compréhension des missions, questions posées, écart entre le projet de la personne et le poste réel (Éric Vasseur visait un DRH, pas un assistant : c'est un écart professionnel). Elle ne s'évalue pas sur l'enthousiasme théâtral, ni sur la loyauté supposée à l'employeur actuel (« si vous cherchez, c'est que vous n'êtes pas fiable »).\n\nLe préavis sert le calendrier du plan de recrutement, pas à juger une personne. Un préavis de trois mois n'est pas un KO si le manager peut attendre ou si l'intérim relais existe. Il devient un point de décision, tracé. Inciter à partir sans préavis, ou à « poser un arrêt maladie », est hors déontologie et peut être illicite.\n\nLes prétentions éclairent un possible accord, elles ne sont pas un piège. Au 13/10/2026, afficher le salaire dans l'offre n'est pas une obligation française consolidée ; en préqual, la transparence (donner la fourchette vraie) reste une bonne pratique, et toute fourchette dite doit être exacte (esprit L. 5331-3). Si la personne est vague, vous l'aidez : « nous avons une fourchette de 24-27 k€ pour ce niveau, est-ce un cadre possible ? » pas « donnez un chiffre ou j'arrête ». Si elle est au-dessus, vous ne mentez pas sur le max, vous notez l'écart, vous ne promettez pas un exception. La directive (UE) 2023/970 en transposition va dans le sens d'une information sur la rémunération : vous anticipez par loyauté, vous ne déclarez pas la loi déjà transposée sans vérifier le jour J."
            },
            {
              "block_type": "callout",
              "content": "Motivation, préavis, prétentions = lien avec l'emploi, donc posables. Famille, santé, conjoint, logement = non. Fourchette dite = fourchette vraie. Préavis long = donnée de calendrier, pas un défaut moral."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ordre recommandé : motivation et compréhension du poste d'abord (la personne sait pour quoi elle parle), puis préavis, puis prétentions, éventuellement après avoir dit la fourchette. Notez les trois réponses en faits. Décision après, pas pendant la réponse salaire."
            },
            {
              "block_type": "code",
              "content": "FORMULATIONS\n\nMotivation\n« Qu'est-ce qui, dans les missions d'assistant RH de site (paie, dossiers, accueil), correspond à ce que vous voulez faire dans les 18 prochains mois ? »\n\nPréavis\n« Quel est votre préavis actuel, et à quelle date pourriez-vous prendre un poste, en respectant vos obligations contractuelles ? »\n\nPrétentions\n« Pour ce CDI, la fourchette brute annuelle tenable est de 24 à 27 k€ selon expérience. Est-ce un cadre compatible avec vos prétentions ? »\n(Si la politique interne n'affiche rien : « Quelles sont vos prétentions pour un CDI d'assistant RH de site, 35 h, sur site ? » puis vous donnez le vrai cadre dès que vous le pouvez.)"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Samira vise 26 k€, fourchette 24-27, préavis 1 mois, motivation paie et dossiers. Adéquation. Inès ne sait pas encore chiffrer : vous donnez 24-27, elle dit « oui pour apprendre la paie si le cadre est celui-là ». Karim, en intérim, compare un taux horaire : vous convertissez avec lui sans inventer un brut annuel fictif, vous rappelez que le poste visé ici est un CDI 24-27, distinct d'une mission. "
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Commencer par le salaire. Dire 30 k€ pour « faire venir » alors que le max est 27. Juger un préavis. Demander le salaire actuel comme un droit (vous pouvez le demander s'il a un lien, beaucoup d'entreprises s'en passent ; ne le transformez pas en humiliation ; la transparence future de la directive va plutôt vers ce que l'employeur offre). Dire « de toute façon on ne paie jamais au max »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Variable / 13e mois : les inclure dans le cadre vrai. Package startup (BSPCE) : ne pas le valoriser comme un salaire garanti. Intérim : rémunération de mission vs CDI, deux conversations. Personne au-dessus de la fourchette : stop mensonge, motif éventuel « écart de prétentions non tenable », pas « trop gourmand » dans l'ATS."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "La personne répond : « Mes prétentions dépendent, je ne sais pas, on verra. » En 6 répliques max, menez l'échange jusqu'à un cadre clair, sans pression, avec une fourchette vraie 24-27."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Voir aussi la simulation 1 de la leçon 7. Attendu : reformuler le poste, donner 24-27, demander si ce cadre est possible oui/non/à discuter, noter. Pas « il faut un chiffre sinon j'arrête ». Pas « on s'alignera, ne vous inquiétez pas » (allégation). Pas de question sur le loyer ou les enfants pour « comprendre ses besoins d'argent »."
            }
          ],
          "position": 3
        },
        {
          "title": "Questions interdites et cadre L. 1221-6 / L. 1132-1",
          "description": "Reconnaître une question illicite, la recadrer, et réagir si c'est le candidat qui pose une question personnelle.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez citer le principe de L. 1221-6 (lien direct et nécessaire avec l'emploi) et de L. 1132-1 (critères protégés), lister les questions à ne jamais poser en préqual, et gérer une question personnelle que l'on vous pose."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'article L. 1221-6 du Code du travail dispose que les informations demandées au candidat, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, et qu'elles doivent présenter un lien direct et nécessaire avec l'emploi. Le candidat répond de bonne foi. L'appel téléphonique est « une forme » : le texte s'applique. L'article L. 1132-1 interdit d'écarter une personne en raison de critères protégés (origine, sexe, mœurs, orientation sexuelle, identité de genre, âge, situation de famille ou grossesse, etc., apparence, nom, lieu de résidence, santé, handicap, langue autre que le français, et les autres critères de la liste légale). Une question n'est pas qu'une curiosité : elle oriente souvent la décision. « Vous prévoyez des enfants ? » n'est pas anodine ; c'est une porte vers un écartement illicite.\n\nSont notamment à bannir en préqualification d'un assistant RH (et dans la très grande majorité des postes de ce cours) : l'âge, la date de naissance « pour le dossier », la situation de famille, le projet d'enfants, le nom du conjoint, la santé, le handicap comme enquête, la religion, les opinions, le syndicat, l'orientation sexuelle, le logement, la banque, le quartier comme stigmate, l'origine, la nationalité hors cas très particuliers que les RH cadrent (emplois fermés), la photo, le poids, le sourire. Une question de trajet (« le site est à Ville-sur-Cher, 35 h sur site, ce trajet est-il tenable pour vous ? ») a un lien avec l'emploi. « Vous habitez en cité ? » n'en a pas.\n\nSi le manager vous dicte une question interdite, vous ne la posez pas. Vous proposez la formulation licite (trajet, non quartier ; disponibilité aux horaires, non enfants). Si la personne révèle spontanément un élément protégé (« je suis enceinte », « je suis en ALD »), vous ne notez pas l'élément comme critère, vous remerciez et vous revenez aux missions. L'aptitude médicale n'est pas votre sujet.\n\nSi la personne vous pose une question personnelle (« vous avez des enfants ? vous êtes marié ? vous vivez où ? »), vous n'êtes pas tenu de livrer votre vie, et vous ne transformez pas l'appel en échange symétrique de données protégées. Vous recadrez poliment : le cadre de l'échange est professionnel ; vous pouvez, si vous le souhaitez, donner une information neutre de fonction (« je suis chargé de recrutement sur ce site ») ; vous revenez au poste. C'est l'objet de la simulation 2. Ni familiarité, ni humiliation de la personne."
            },
            {
              "block_type": "callout",
              "content": "L. 1221-6 = lien direct et nécessaire. L. 1132-1 = on n'écarte pas pour un critère protégé. Une révélation spontanée n'autorise pas à s'en servir. Une question personnelle du candidat se recadre, elle ne s'échange pas."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant l'appel : rayer toute question douteuse. Pendant : si une question interdite vous vient, la remplacer ou la taire. Après : relire le CR, supprimer tout critère protégé. Escalade RH si le manager insiste pour l'illicite."
            },
            {
              "block_type": "code",
              "content": "BANNI — exemples (préqual assistant RH)\n\nÂge, date de naissance, « jeune équipe »\nEnfants, mariage, pacs, grossesse, conjoint\nSanté, arrêt maladie, handicap « vous tenez debout ? »\nReligion, fêtes, nourriture\nOrigine, nom, « vous venez d'où ? », nationalité (hors cas RH cadrés)\nQuartier, propriétaire/locataire, banque\nPhoto, look, poids\nOpinions, syndicat\n« Langue maternelle »"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le manager glisse : « Demande-lui si elle va encore poser des congés enfants comme la précédente. » Le junior n'en fait pas une question. Il vérifie la présence aux horaires de jour, 35 h, et le préavis. Il signale aux RH la consigne. L'appel d'Inès Morel ne contient aucune question de famille."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "« Pour briser la glace » + question enfants. Noter « enceinte » dans l'ATS. Répondre à une question personnelle par sa propre situation familiale. Demander la nationalité « pour la DPAE » trop tôt : la DPAE est une obligation employeur en fin de course (F23107), avec les pièces alors requises, pas un interrogatoire de préqual. Tester le français par moquerie d'accent."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Emplois réglementés / habilitations : les RH vous disent les pièces ; vous ne transformez pas en enquête d'origine. Travail de nuit / 3×8 : décrire les horaires, demander si la personne les accepte, pas si elle a un bébé. Visio et handicap visible : aménagement, pas KO. Candidat qui plaisante sur un critère protégé : vous ne suivez pas la plaisanterie comme critère."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez : licite / illicite / à reformuler. (1) Préavis. (2) Projet d'enfants. (3) Trajet vers le site. (4) « Vous êtes musulman, le ramadan ? » (5) Outil de paie utilisé. (6) « Vous vivez chez vos parents ? »"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Licite. (2) Illicite, situation de famille / grossesse. (3) Licite si présence sur site réelle. (4) Illicite, religion. (5) Licite, aptitude. (6) Illicite, vie privée / résidence / âge déguisé. Reformulation de (3) déjà correcte ; (6) ne se reformule pas : on ne demande pas le foyer."
            }
          ],
          "position": 4
        },
        {
          "title": "Compte rendu et décision de suite",
          "description": "Écrire un CR utile le jour même, décider oui/non/vivier, informer la personne, sans promesse d'embauche.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez rédiger un compte rendu de préqualification (faits, critères, suite), le saisir dans l'ATS, informer le candidat dans un délai annoncé, et distinguer cette décision d'une offre de contrat."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un appel sans compte rendu n'a pas eu lieu pour l'organisation. Le manager n'a pas les faits, le dossier n'a pas de trace, la preuve (L. 1134-5 / référentiel CNIL) n'a pas de motif, le candidat n'a pas de suite. Le CR se rédige le jour même, à partir de la grille d'appel, en faits : missions confirmées, préavis, prétentions, compréhension du poste, questions restantes, décision. Il ne contient pas de critère protégé, pas de jugement de voix, pas de « look », pas de roman.\n\nLa décision a trois issues principales. Oui : entretien manager, avec les points à approfondir. Non : motif professionnel, information de la personne selon la politique (un e-mail sobre, sans détail humiliant), pas de vivier sauf si la personne le souhaite et est informée. Vivier / plus tard : information, dernier contact daté, reco 2 ans. Un « on verra » sans statut n'est pas une décision.\n\nInformer la personne du délai (« je vous reviens vendredi ») et le tenir est une bonne pratique de relation candidat. Mentir sur le délai, ou laisser le silence trois semaines, n'est pas illicite au même titre qu'une question interdite, mais c'est une faute professionnelle. En revanche, écrire « le poste vous est promis, salaire X, début Y, le manager n'a plus qu'à signer » sort de la préqual et entre dans le champ F39588 : faites relire les RH, ce n'est plus un CR, c'est un acte d'engagement potentiel.\n\nLe CR est une donnée personnelle. Accès limité, pas un transfert sur un groupe WhatsApp de l'atelier. Durées : process en cours = base active ; non retenu après pourvoi = archive 5 ans preuve ; vivier = reco 2 ans. Opposition : respectée."
            },
            {
              "block_type": "callout",
              "content": "CR = faits + critère + suite, jour même. Pas de critère protégé. Pas de promesse (F39588). Délai de retour annoncé et tenu = bonne pratique. Archive 5 ans ≠ vivier 2 ans."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Immédiatement après l'appel : 10 minutes de rédaction.\n2. Statut dans l'ATS.\n3. Message au manager si oui (3 puces, pas le roman).\n4. Message au candidat à la date dite.\n5. Relire : L. 1132-1, L. 1221-6."
            },
            {
              "block_type": "code",
              "content": "CR PRÉQUAL — modèle\n\nPoste / date / auteur / candidat (identité pro)\nDurée réelle de l'appel\nMissions confirmées (preuves)\nPoints d'écart (faits)\nPréavis / date possible\nPrétentions / fourchette dite\nCompréhension du poste (3×8, site, contrat)\nQuestions du candidat et réponses données\nDécision : entretien manager / non / vivier\nMotif (3 phrases)\nInformation candidat : date prévue\nCritères protégés : aucun utilisé"
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "CR Samira : missions paie confirmées, préavis 1 mois, 26 k€ dans 24-27, trajet à tester (1 jour de visite proposé, pas un KO résidence), oui manager. Message manager : 6 lignes. Message Samira : « suite proposée, entretien mardi 10 h, ce n'est pas une embauche ». CR Éric (s'il avait été appelé) : titres non étayés, écart d'attente, non, e-mail de clôture sobre."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "CR trois jours plus tard, faux souvenirs. Copier-coller le même CR. WhatsApp au manager : « la fille était mignonne ». Promettre le poste. Oublier d'écrire les prétentions. Dire non par SMS sans motif interne. Laisser le candidat relancer trois fois."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui n'a pas de créneau : vous ne laissez pas la personne en l'air ; vous donnez un nouveau délai. Plusieurs préqual le même jour : CR immédiatement, sinon mélange des dossiers. Candidat interne : CR dans l'espace RH prévu, feedback plus soigné, pas de commentaire d'équipe. Opposition en fin d'appel : statut opposition, pas de vivier."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez le CR d'un appel (fictif) où Inès Morel confirme les sessions et le droit social enseigné, découvre l'absence de télétravail, accepte 24-27, préavis 2 mois, et demande si la paie sera formée. Décision : oui manager, sous réserve que la responsable confirme la formation paie."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Le CR doit citer les preuves (sessions, évaluations, droit social), l'écart (paie à former — décision conditionnée, pas une promesse), le préavis comme donnée de calendrier, la fourchette compatible, le 0 télétravail compris, la question formation. Statut : oui entretien si RH/manager confirment la formation ; sinon ré-appel ou non justifié « paie exigée dès J1 sans formation, écart sur aptitude immédiate ». Aucune note d'âge, de famille, de « reconversion chelou ». Message à Inès : délai, pas « c'est gagné »."
            }
          ],
          "position": 5
        },
        {
          "title": "Script complet et trois simulations dialoguées",
          "description": "Disposer d'un script d'appel et travailler trois situations : salaire vague, question personnelle au recruteur, négociation trop tôt.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez suivre un script de préqualification et produire, face à trois déviations fréquentes, des répliques licites, claires, sans promesse et sans question interdite."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le script ci-dessous est un support, pas un texte à lire comme un télémarketing. Il couvre les six séquences, le poste d'assistant RH Forges (fictif), et les trois questions classiques. Vous l'adaptez au commercial, au technicien, à l'intérim, en changeant les faits, pas le cadre juridique.\n\nLes trois simulations entraînent des réflexes. Simulation 1 : la personne reste vague sur le salaire. Risque junior : presser, inventer un max, demander le loyer ou le conjoint. Bon réflexe : donner la fourchette vraie, demander si le cadre est possible, noter. Simulation 2 : la personne pose une question personnelle au recruteur. Risque : tout raconter, ou humilier. Bon réflexe : recadrer poliment sur le cadre professionnel, revenir au poste. Simulation 3 : la personne veut négocier le package avant même d'avoir entendu les missions. Risque : brader, promettre, se fâcher. Bon réflexe : présenter le poste d'abord, puis le cadre de rémunération, puis noter un écart s'il existe — pas de contrat improvisé (F39588).\n\nLes dialogues sont fictifs, vouvoyés, noms d'emprunt. Ils ne sont pas des enregistrements à copier tels quels dans un ATS. Après chaque dialogue, la correction dit pourquoi les répliques tiennent (L. 1221-6, L. 1132-1, L. 1221-8, loyauté de la fourchette, absence de promesse)."
            },
            {
              "block_type": "callout",
              "content": "Script = béquille. Simulations = réflexes. Jamais de question enfants/santé/origine. Jamais « le poste est à vous ». Fourchette = vraie. Noms d'emprunt."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez le script à voix haute une fois. Jouez chaque simulation (vous = recruteur). Comparez à la version corrigée. Notez vos écarts (question interdite, promesse, fourchette floue)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le script et les trois dialogues tiennent lieu d'exemple PME/ETI. Transposition intérim : remplacer CDI et fourchette annuelle par mission, dates, taux aligné, mot « intérim » dès l'ouverture."
            },
            {
              "block_type": "code",
              "content": "SCRIPT COMPLET — préqual 20 min\nPoste : Assistant RH, CDI, Forges & Maintenance du Centre (fictif)\nCandidat : [Samira / Inès / Karim — noms d'emprunt]\n\n1. OUVERTURE\n« Bonjour [prénom], je suis [nom], chargé(e) de recrutement. Merci pour ce créneau. L'échange dure 20 minutes : c'est une préqualification, pas un entretien d'embauche. Je vais revenir sur votre parcours au regard du poste, vous présenter le poste tel qu'il est, aborder la disponibilité et le cadre de rémunération, puis répondre à vos questions. La suite éventuelle est un entretien avec la responsable RH du site. Êtes-vous d'accord pour continuer ? Nous n'enregistrons pas cet appel ; je prendrai des notes professionnelles dans notre dossier de recrutement. Vous pouvez vous opposer à ce contact. »\n\n2. PARCOURS\n« Au regard d'un poste d'assistant RH (éléments de paie, dossiers, organisation d'entretiens, accueil), quelles missions de ces deux dernières années sont les plus proches ? Pouvez-vous donner un exemple concret ? »\n\n3. POSTE (faits)\n« Le poste est un CDI, 35 h, horaires de jour, sur le site de Ville-sur-Cher, pas de télétravail. Rattachement : responsable RH. Missions : variables de paie, dossiers, convocations, accueil J1. Ce n'est pas un poste de responsable RH, ni un CDI promis à l'issue de cet appel. »\n\n4. VÉRIFICATIONS\n« Quel est votre préavis, et à quelle date pourriez-vous prendre un poste en le respectant ?\nPour ce niveau, la fourchette brute annuelle tenable est de 24 à 27 k€ selon expérience. Est-ce un cadre compatible avec vos prétentions ?\nLe site est à Ville-sur-Cher, présence quotidienne. Ce trajet est-il tenable pour vous ? »  [pas : « vous habitez où, c'est quel quartier ? »]\n\n5. QUESTIONS INVERSES\n« Quelles questions voulez-vous poser sur le poste ou le process ? »\n\n6. CLÔTURE\n« Je vous remercie. Je fais un retour à la responsable et je vous écris au plus tard [jour]. Cet échange ne constitue pas une promesse d'embauche. Bonne fin de journée. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lire le script sans écouter. Dans la sim. 1, exiger un chiffre « sinon non ». Dans la sim. 2, raconter sa garde alternée. Dans la sim. 3, dire « on s'alignera, venez ». Oublier L. 1221-8 en ouverture."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si la personne refuse l'ouverture : vous n'insistez pas, opposition possible. Si elle enregistre de son côté : vous n'avez pas à accepter un usage hors cadre ; restez factuel, signalez aux RH. Si elle négocie un titre (« mettez responsable ») : le titre vrai, pas un mensonge d'annonce."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Couvrez vos répliques et jouez d'abord les trois mises en situation (consignes ci-dessous), puis lisez les dialogues corrigés."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 1 — consigne\nCandidat (Inès Morel, nom d'emprunt) vague sur le salaire.\nINÈS : « Mes prétentions… ça dépend, je ne sais pas, on verra plus tard, je ne voudrais pas me fermer de porte. »\nVous : 6 répliques max. Interdits : conjoint, loyer, enfants, « donnez un chiffre ou j'arrête », max fictif."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 1 — dialogue corrigé\n\nRECRUTEUR : « C'est entendu, on ne vous demande pas un chiffre au hasard. Je vous donne d'abord le cadre vrai du poste : CDI assistant RH de site, 35 h, fourchette brute annuelle 24 à 27 k€ selon expérience, maximum tenable à ce niveau. »\nINÈS : « Ah, d'accord… je ne connais pas encore trop les salaires RH. »\nRECRUTEUR : « Ce cadre vous convient-il pour continuer, oui, non, ou avec une réserve précise ? »\nINÈS : « Oui, s'il y a une formation paie. Je n'ai pas de chiffre à moi. »\nRECRUTEUR : « Je note : cadre 24-27 acceptable, réserve sur la formation paie, que je vérifie avec la responsable. Je ne vous invente pas un 32 k€ pour « garder le contact ». »\nINÈS : « Merci. »\nRECRUTEUR : « Nous poursuivons sur le préavis, puis je répondrai à vos autres questions. »\n\nPourquoi c'est juste : fourchette vraie (loyauté / L. 5331-3 par analogie), lien avec l'emploi (L. 1221-6), pas de vie privée, pas de promesse, la réserve paie est un fait de process."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 2 — consigne\nCandidat (Karim El Amrani, nom d'emprunt) pose une question personnelle.\nKARIM : « Et vous, vous avez des enfants ? Parce que le responsable RH, je voudrais savoir si c'est une équipe de parents, pour voir l'ambiance. »\nVous : recadrer sans humilier, sans livrer votre famille, sans transformer l'ambiance en critère familial."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 2 — dialogue corrigé\n\nRECRUTEUR : « Je ne parle pas de ma situation familiale dans un recrutement, et je ne vous demanderai pas la vôtre : ce n'est pas un critère, la loi encadre les informations demandées (lien avec l'emploi) et interdit d'écarter quelqu'un pour la situation de famille. »\nKARIM : « C'était juste pour l'ambiance, pardon. »\nRECRUTEUR : « L'ambiance, je peux la décrire professionnellement : équipe RH de site, 35 h jour, travail avec la paie prestataire et les managers d'atelier. Si vous voulez savoir comment se passent les horaires et les congés, je peux dire les règles internes de pose de congés, pas la vie privée des collègues. »\nKARIM : « Les congés, oui, ça m'intéresse. »\nRECRUTEUR : « Congés selon les règles de l'entreprise, que la responsable détaillera ; pas de clause illicite. On revient à vos missions d'accueil des intérimaires : un exemple récent ? »\n\nPourquoi c'est juste : L. 1132-1 (situation de famille), L. 1221-6, recadrage poli, offre un substitut professionnel (congés, horaires), pas de chantage, pas de révélation de votre vie, pas de note ATS « curieux sur les enfants »."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 3 — consigne\nCandidat (Samira Benali, nom d'emprunt) veut négocier avant le poste.\nSAMIRA : « Avant qu'on parle du job, il me faut 30 k€, un jour de télétravail et le titre de responsable adjoint, sinon je raccroche. »\nVous : ne pas brader, ne pas vous fâcher, présenter le vrai poste, clore si l'écart est réel."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 3 — dialogue corrigé\n\nRECRUTEUR : « Je ne peux pas négocier un contrat sur un poste que je ne vous ai pas décrit : ce ne serait ni sérieux ni exact. Laissez-moi 3 minutes de faits, puis on regarde le cadre. »\nSAMIRA : « D'accord, mais 30 k€ c'est ma ligne. »\nRECRUTEUR : « Le poste est un CDI d'assistant RH, pas de responsable adjoint ; 35 h sur site, pas de télétravail ; missions paie, dossiers, entretiens, accueil ; fourchette tenable 24-27 k€. Ce n'est pas une ouverture à 30 k€ ni à un autre titre. »\nSAMIRA : « Donc vous ne pouvez rien faire. »\nRECRUTEUR : « Je ne peux pas vous promettre 30 k€, le télétravail ou un titre qui n'existe pas. Si 24-27, le titre d'assistant et le sur-site ne vous conviennent pas, nous arrêtons ici, sans mauvaise surprise plus tard. Si une partie du poste vous intéresse malgré tout, on peut finir l'échange et je tracerai l'écart. »\nSAMIRA : « Je préfère arrêter. »\nRECRUTEUR : « Merci de l'avoir dit maintenant. Je clôture le dossier pour ce poste, sans promesse et sans relance. Vous pouvez demander à ne plus être contactée. Bonne continuation. »\n\nPourquoi c'est juste : pas d'allégation sur le titre, le lieu, la rémunération (L. 5331-3), pas de promesse (F39588), respect de L. 1221-6 (on parle du poste), décision tracée, opposition possible, pas d'insulte (« trop gourmande ») dans le CR : motif = écart de cadre (titre, télétravail, prétentions 30 vs 24-27)."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vos versions sont réussies si : (1) une fourchette vraie et un oui/non/réserve, sans vie privée ; (2) un refus de parler enfants, un substitut professionnel, un retour aux missions ; (3) le poste décrit avant tout deal, un non possible, zéro promesse, motif d'écart factuel. Si vous avez cédé sur 30 k€ « pour la shortlist », vous avez créé une allégation et un conflit avec les RH. Si vous avez répondu « oui j'ai deux enfants », vous avez ouvert un échange hors L. 1221-6. Rejouez uniquement la simulation manquée."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Préqualification téléphonique",
          "description": "Dix questions : objectifs, structure, prétentions, questions interdites, CR.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Préqualification téléphonique",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "La préqualification téléphonique a surtout pour but de :",
                "question_type": "single_choice",
                "options": [
                  "A. Vérifier l'adéquation minimale, informer (y compris sur les méthodes, L. 1221-8) et décider d'une suite tracée — ce n'est pas une embauche.",
                  "B. Remplacer la médecine du travail.",
                  "C. Obtenir une promesse unilatérale signée au téléphone.",
                  "D. Contrôler l'apparence et l'accent."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Les trois objectifs du cours. L'apparence et l'accent comme filtres heurtent L. 1132-1. F39588 : une promesse n'est pas l'objet de l'appel. La médecine du travail est un autre moment, employeur / santé au travail."
              },
              {
                "question": "Dès l'ouverture de l'appel, vous informez notamment :",
                "question_type": "single_choice",
                "options": [
                  "A. Qui vous êtes, la durée, que c'est une préqualification, la suite possible — information sur la méthode (L. 1221-8).",
                  "B. Votre situation de famille, pour « mettre en confiance ».",
                  "C. Que l'appel est enregistré sur votre téléphone personnel, sans le dire.",
                  "D. Que le poste est déjà promis."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-8 : information préalable des méthodes. L'enregistrement sauvage est un traitement de données non cadré. La situation de famille du recruteur n'a pas sa place. La promesse n'est pas l'ouverture (F39588)."
              },
              {
                "question": "« Vous prévoyez des enfants dans l'année ? » en préqual d'assistant RH est :",
                "question_type": "single_choice",
                "options": [
                  "A. Illicite : situation de famille / grossesse, sans lien nécessaire avec l'emploi (L. 1132-1, L. 1221-6).",
                  "B. Licite, car les congés impactent l'équipe.",
                  "C. Licite en CDI, illicite en CDD.",
                  "D. Recommandée par Service-Public F23107 (DPAE)."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le type de contrat ne lève pas L. 1132-1. Les congés se décrivent par les règles internes, pas par une enquête de fécondité. La DPAE (F23107) est une formalité d'embauche de l'employeur, pas une question de préqual sur les enfants."
              },
              {
                "question": "Demander le préavis contractuel est :",
                "question_type": "single_choice",
                "options": [
                  "A. Licite : lien direct avec la date de prise de poste ; un préavis long est une donnée de calendrier, pas un défaut moral.",
                  "B. Illicite, comme toutes les questions de dates.",
                  "C. Un motif automatique de knock-out.",
                  "D. L'occasion d'inciter à un arrêt maladie pour partir plus tôt."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6 : capacité à occuper l'emploi dans le temps. Inciter à un arrêt maladie est hors cadre. Les dates de naissance, elles, visent l'âge (protégé) : ne pas confondre préavis et âge."
              },
              {
                "question": "Au 13/10/2026, donner une fourchette salariale en préqualification est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une bonne pratique de loyauté (et un montant qui, s'il est dit, doit être vrai) ; l'affichage dans l'offre n'est pas encore une obligation française consolidée, directive 2023/970 en transposition.",
                  "B. Interdit, le salaire ne se parle jamais au téléphone.",
                  "C. Déjà obligatoire dans l'offre, donc inutile à l'appel.",
                  "D. L'occasion d'annoncer 40 k€ pour faire venir, puis de payer 24."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Cohérence avec le module offres et F39133. L. 5331-3 si le montant est faux. Ce n'est pas interdit de parler rémunération en préqual : c'est même le lieu classique, avec lien à l'emploi."
              },
              {
                "question": "Un candidat vous demande si vous avez des enfants. La bonne conduite est :",
                "question_type": "single_choice",
                "options": [
                  "A. Recadrer poliment sur le cadre professionnel, ne pas livrer votre vie privée, ne pas retourner la question, revenir au poste (simulation 2).",
                  "B. Répondre en détail et demander la même chose.",
                  "C. Raccrocher sans un mot.",
                  "D. Noter « candidat trop personnel, origine ? » dans l'ATS."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le cours entraîne ce recadrage. L'échange de données familiales n'est pas une méthode pertinente. Le commentaire ATS orienté origine est illicite. Raccrocher net n'est pas professionnel ; un recadrage suffit en général."
              },
              {
                "question": "Un candidat exige 30 k€, du télétravail et un titre de responsable avant d'entendre le poste. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Décrivez d'abord le poste vrai (assistant, sur site, 24-27), refusez l'allégation, et acceptez d'arrêter si l'écart demeure — sans promesse.",
                  "B. Dites oui à tout pour « le garder en shortlist ».",
                  "C. L'insultez dans le CR (« gourmand »).",
                  "D. Inventez un titre le temps de l'entretien manager."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Simulation 3. L. 5331-3 (nature, rémunération, lieu), F39588 (pas de promesse bricolée). Le CR reste factuel : écart de cadre. La shortlist n'est pas un théâtre."
              },
              {
                "question": "Le compte rendu de préqualification doit :",
                "question_type": "single_choice",
                "options": [
                  "A. Être rédigé le jour même, en faits liés aux critères, avec une suite, sans critère protégé, distinct d'une offre de contrat.",
                  "B. Être envoyé sur le WhatsApp de l'atelier avec la photo du CV.",
                  "C. Être oral et jamais écrit, « pour le RGPD ».",
                  "D. Promettre l'embauche pour rassurer."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le RGPD n'interdit pas un CR professionnel dans l'ATS ; il encadre finalité, accès, durées. WhatsApp + photo : apparence, sécurité, destinataires excessifs. La promesse n'a pas sa place (F39588)."
              },
              {
                "question": "Les méthodes d'aide au recrutement, dont la préqualification, doivent être :",
                "question_type": "single_choice",
                "options": [
                  "A. Pertinentes au regard de la finalité (L. 1221-9) et portées à la connaissance du candidat préalablement (L. 1221-8).",
                  "B. Secrètes, pour « tester le naturel ».",
                  "C. Fondées sur l'apparence physique, critère neutre.",
                  "D. Identiques à un test médical."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Les deux articles sont dans legal-sources.json. L'apparence est un critère protégé, pas un outil. Le secret n'est pas un principe de L. 1221-8 (c'est l'inverse : informer). Le médical n'est pas la préqual."
              },
              {
                "question": "Noter dans l'ATS, après préqual, « accent, 93, trop vieux pour l'équipe » est :",
                "question_type": "single_choice",
                "options": [
                  "A. Illicite et dangereux : langue / résidence / âge (L. 1132-1) ; le motif doit rester professionnel (missions, préavis, fourchette, compréhension du poste).",
                  "B. Conforme à l'archive 5 ans, qui exige le plus de détails intimes possible.",
                  "C. Une recommandation CNIL.",
                  "D. Obligatoire si le candidat a posé une question personnelle."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L'archive probatoire (L. 1134-5 / CNIL) a besoin de motifs professionnels, pas d'un commentaire discriminatoire. La CNIL ne recommande pas ces notes. Une question personnelle du candidat se recadre, elle n'autorise pas un portrait illicite."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 9,
      "title": "Préparer un entretien de recrutement",
      "description": "Fixer les objectifs, analyser le CV, choisir le format, construire un guide et une grille, organiser la logistique et aligner les rôles avec le manager.",
      "lessons": [
        {
          "title": "Fixer les objectifs et choisir le format d'entretien",
          "description": "Définir ce que l'entretien doit permettre de décider, puis choisir un format structuré, semi-structuré, comportemental ou situationnel.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À l'issue de cette leçon, vous serez capable de formuler par écrit les décisions que l'entretien doit éclairer, de distinguer un entretien structuré d'un entretien semi-structuré, et de choisir des questions comportementales ou situationnelles en fonction des compétences du poste.\n\nVous saurez aussi séparer ce qui relève de l'obligation légale (questions en lien direct avec l'emploi, non-discrimination) de ce qui relève de la bonne pratique (guide commun, mêmes critères, même durée cible)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un entretien de recrutement n'est pas une conversation de découverte libre. C'est un recueil d'éléments professionnels, dans un temps limité, pour apprécier la capacité d'une personne à occuper un emploi déterminé. Le Code du travail, article L. 1221-6, pose une obligation légale : les informations demandées, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Elles doivent présenter un lien direct et nécessaire avec l'emploi proposé. Préparer l'entretien, c'est donc d'abord décider quelles informations professionnelles sont nécessaires, puis écarter tout ce qui n'a pas ce lien.\n\nLe format de l'entretien n'est pas imposé par la loi. Un entretien totalement libre n'est pas illégal en soi. Il est en revanche peu comparable, plus exposé aux impressions et plus difficile à justifier si un candidat conteste le traitement subi. L'entretien structuré repose sur un guide commun : mêmes blocs, mêmes questions cibles, même ordre de passage des thèmes, même grille. L'entretien semi-structuré conserve un cadre (thèmes, questions d'ancrage, durées) mais autorise des relances adaptées au parcours. L'entretien non structuré laisse le recruteur improvisé ; il est déconseillé en bonne pratique, surtout pour un junior.\n\nL'entretien comportemental interroge des situations réellement vécues. L'hypothèse de travail n'est pas une vérité scientifique universelle : on considère qu'un comportement passé, décrit avec suffisamment de faits, est un meilleur indice qu'une intention générale (« je suis quelqu'un de organisé »). La méthode STAR (Situation, Tâche, Action, Résultat) sert à obtenir ces faits. L'entretien situationnel propose un cas hypothétique proche du poste (« un client refuse un produit obligatoire, que faites-vous ? »). Il éclaire le raisonnement, la priorisation et la connaissance du cadre. Les deux formats se complètent : le comportemental vérifie ce que la personne a déjà fait ; le situationnel vérifie comment elle traiterait le quotidien du poste.\n\nPréparer l'entretien, c'est aussi préparer l'égalité de traitement. Le Code du travail, article L. 1132-1, interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, situation de famille, état de santé, handicap, opinions, apparence physique, lieu de résidence, notamment). Un guide rédigé à l'avance réduit le risque de questions hors sujet. Il ne supprime pas la responsabilité du recruteur : une question illicite reste illicite même si elle n'était pas prévue. La structuration est une bonne pratique de maîtrise du risque, pas une dispense de vigilance.\n\nEnfin, l'entretien n'a pas à tout décider. Il éclaire des hypothèses nées du CV, de la préqualification et, le cas échéant, d'épreuves professionnelles. Il ne remplace pas une vérification de références cadrée, ni un test dont le candidat a été informé au préalable (article L. 1221-8). Vous devez savoir, avant d'entrer en salle, ce que cet entretien peut conclure — et ce qu'il ne peut pas conclure."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant de rédiger la moindre question, écrivez trois à cinq objectifs de décision, dérivés de la fiche de poste validée avec le manager. Chaque objectif doit être observable : « vérifier la capacité à prioriser un flux de demandes clients » est opératoire ; « voir si le feeling passe » ne l'est pas.\n\nChoisissez ensuite le format. Pour un premier entretien junior, le semi-structuré est le plus robuste : un guide commun, des questions d'ancrage identiques, des relances STAR, et un bloc situationnel court sur deux ou trois incidents critiques du poste. L'entretien 100 % structuré convient lorsque plusieurs recruteurs voient des volumes élevés et doivent comparer strictement. L'entretien 100 % libre est à écarter tant que vous n'avez pas une maîtrise confirmée des critères et du cadre légal.\n\nDocumentez le format dans le dossier de recrutement : durée cible, participants, thèmes, grille. Faites valider ce cadre par le manager avant le premier candidat. Si l'entreprise impose un trame unique (politique interne), vous l'appliquez ; vous ne la remplacez pas par vos habitudes personnelles.\n\nContrôle final : relisez chaque question prévue et posez-vous la question L. 1221-6 : « Quel lien direct et nécessaire avec l'emploi ? ». Si vous ne savez pas répondre, la question sort du guide."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Dans une ETI de services informatiques, le manager recrute un chef de projet junior. Il dit au recruteur : « Je veux surtout sentir s'il a le feu sacré. » Le recruteur reformule en objectifs de décision : (1) capacité à cadrer un besoin avec un client interne, (2) tenue des délais sur un livrable simple, (3) communication d'un écart, (4) apprentissage d'un outil inconnu. Le format retenu est un entretien semi-structuré de 55 minutes : 10 minutes de cadre et de parcours, 25 minutes comportementales STAR sur les quatre objectifs, 10 minutes situationnelles (client interne qui change le périmètre à J-3), 10 minutes de questions du candidat.\n\nLe manager conserve un droit de relance sur le livrable, mais s'interdit les questions sur la vie personnelle. Le guide est le même pour les trois candidats reçus la même semaine."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Confondre « entretien structuré » et « questionnaire administratif lu à voix haute ». Le structuré n'interdit pas l'écoute ; il interdit l'improvisation des critères.\n\nFixer comme objectif « confirmer le feeling du CV ». Le CV donne des hypothèses ; l'entretien doit les tester, pas les célébrer.\n\nMélanger comportemental et situationnel sans le dire : « Que feriez-vous si… » alors que vous pensiez recueillir un fait passé. Le candidat répond alors par une intention, et vous notez une compétence que vous n'avez pas observée.\n\nPréparer un format différent pour le candidat « qui a l'air senior » et pour le candidat interne. L'adaptation des relances est légitime ; le changement de critères en cours de route ne l'est pas."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Entretien de mobilité interne : les objectifs restent professionnels, mais vous disposez d'éléments déjà connus. Vous ne recyclez pas des rumeurs de couloir. Vous préparez des questions sur le poste cible, pas un procès du poste actuel.\n\nEntretien à plusieurs voix (recruteur + manager + futur collègue) : le format doit préciser qui pose quel bloc. Sans cette répartition, les questions se dupliquent et le temps manque pour le candidat.\n\nPoste en contact avec du public vulnérable ou avec de l'argent : le situationnel sur l'éthique et la procédure interne est prioritaire. Il reste dans le champ L. 1221-6 s'il est lié aux exigences du poste, pas s'il glisse vers la vie privée ou la santé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Poste fictif : assistant commercial sédentaire dans une PME industrielle (prise de commandes, relance de devis, interface atelier). Rédigez : (1) quatre objectifs de décision ; (2) le format retenu et sa durée ; (3) une question comportementale et une question situationnelle pour l'objectif « gérer une commande urgente contradictoire entre le client et l'atelier » ; (4) une question que vous écartez, avec le motif."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Objectifs acceptables : exactitude de la prise de commande ; gestion des priorités entre appels et relances ; communication d'un délai irréaliste ; maîtrise des outils de suivi (ERP ou tableur). Un objectif du type « voir s'il est dynamique » est trop flou : reformulez en comportement observable.\n\nFormat : semi-structuré 45 à 50 minutes, guide commun. Question comportementale : « Racontez une situation où un client voulait une livraison plus rapide que ce que la production pouvait tenir. Quelle était la situation, quelle était votre responsabilité, qu'avez-vous fait, quel a été le résultat ? » Question situationnelle : « Un client appelle à 16 h 30 pour une pièce le lendemain. L'atelier dit que c'est impossible. Que faites-vous dans l'heure ? »\n\nQuestion à écarter : « Avez-vous des enfants ? Cela va être prenant. » Motif : critère protégé (situation de famille) et absence de lien nécessaire avec l'emploi (L. 1132-1 et L. 1221-6). Une question sur la capacité à tenir des plages de permanence définies dans la fiche de poste est en revanche professionnelle, si elle est posée à tous les candidats dans les mêmes termes."
            }
          ],
          "position": 0
        },
        {
          "title": "Analyser le CV et préparer les axes d'investigation",
          "description": "Transformer le CV en hypothèses professionnelles à tester, sans verdict préalable et sans enquête hors sujet.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous apprendrez à lire un CV comme une source d'hypothèses, à repérer les zones à clarifier (chronologie, responsabilités, résultats, changements fréquents) et à préparer des relances professionnelles. Vous distinguerez l'analyse utile de l'interprétation abusive et de la recherche d'informations sans lien avec l'emploi."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le CV n'est pas une preuve. C'est un document de communication, rédigé par le candidat, qui sélectionne des faits, des titres et des silences. Votre travail avant l'entretien n'est pas de « coincer » la personne, ni de confirmer une première impression. Il consiste à formuler des hypothèses professionnelles que l'entretien devra confirmer, infirmer ou préciser. Une hypothèse se rédige ainsi : « Le CV indique une responsabilité d'encadrement de cinq personnes pendant un an ; je dois vérifier le périmètre réel (recrutement, évaluation, planning, simple coordination). » Une impression se rédige ainsi : « Il a l'air trop junior. » Seule la première est actionnable.\n\nL'analyse porte sur le lien avec le poste : missions proches, outils, environnements, niveau d'autonomie, résultats chiffrés, progression. Les trous de parcours, les changements fréquents ou les titres ambitieux ne sont pas des fautes. Ce sont des zones de clarification. Vous préparez une question factuelle, pas un procès d'intention. Un trou peut correspondre à une formation, une recherche d'emploi, un aidant familial, un problème de santé : vous n'avez pas à obtenir le détail de la vie privée. Vous pouvez demander comment la personne a occupé cette période au regard de son projet professionnel, et vous arrêtez dès que l'information n'a plus de lien nécessaire avec l'emploi (L. 1221-6).\n\nLa tentation de « googler » le candidat, de parcourir ses réseaux ou de croiser des photos n'est pas un droit d'investigation illimité. Les données collectées restent des données personnelles. La CNIL, dans son guide du recrutement (fiche pratique, 30 janvier 2023), rappelle que seules les données pertinentes, adéquates et limitées à la finalité de recrutement doivent être traitées. Consulter un profil professionnel public pour vérifier une expérience affichée peut, selon la politique interne, être admis. Collecter des éléments sur les opinions, la vie familiale, les photos de loisirs ou l'état de santé ne l'est pas. Ce n'est pas une bonne pratique « pour mieux connaître la personne » : c'est un risque de biais et, selon les cas, un traitement excessif.\n\nLe CV peut aussi contenir des indices de discrimination à ne pas utiliser : photographie, âge, situation familiale, adresse, mentions de santé. L'article L. 1132-1 interdit d'écarter un candidat pour ces motifs. Si la photo ou l'âge sont présents, vous ne les transformez pas en critère. Vous les ignorez dans votre préparation. Si un manager commente « trop vieux » ou « elle a l'air d'avoir des enfants », vous recadrez avant l'entretien : le critère n'entre pas dans le guide.\n\nEnfin, l'analyse du CV doit produire un livrable court, pas une dissertation. Trois à six axes d'investigation, chacun lié à un critère du poste, suffisent. Au-delà, vous arrivez en entretien avec un réquisitoire. En deçà, vous improvisez."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Travaillez à partir de la fiche de poste et de la grille, pas à partir du CV seul. Pour chaque critère essentiel, notez : élément présent dans le CV, élément manquant, question de relance. Utilisez un code simple : à confirmer / à préciser / non documenté.\n\nReconstituez la chronologie mois par mois sur les cinq à dix dernières années, selon le niveau du poste. Repérez chevauchements, durées très courtes, titres qui changent sans changement d'employeur. Préparez une question de clarification unique par zone, formulée de façon neutre.\n\nNe construisez pas un « dossier à charge ». Pour chaque point de vigilance, prévoyez aussi ce qui, si c'est expliqué professionnellement, lève l'hypothèse. Exemple : trois CDD courts dans le même métier peuvent signaler de l'intérim subi, pas de l'instabilité.\n\nContrôle : aucune question préparée ne porte sur la santé, la grossesse, le logement, la religion, les origines, les enfants, le conjoint, le crédit personnel ou les opinions. Si un élément du CV y fait allusion, vous ne l'exploitez pas."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet de recrutement, mission pour un industriel de l'agroalimentaire : poste d'acheteur matières premières. CV d'une candidate de 34 ans, cinq ans en achat packaging dans une ETI, puis huit mois de « projet personnel », puis un an en achat public dans une collectivité.\n\nAxes préparés : (1) transférabilité packaging vers matières premières alimentaires (cahier des charges, qualité, saisonnalité) ; (2) pratique réelle de la négociation (volumes, indicateurs, rôle vs manager) ; (3) passage privé / public : ce qui se transfère, ce qui ne se transfère pas ; (4) période de huit mois : formulation ouverte sur le projet professionnel, sans investigation privée. Le consultant n'appelle pas d'anciens collègues « en off » avant l'entretien : ce n'est ni prévu par le mandat, ni couvert par une information du candidat."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Transformer un trou de CV en suspicion morale. Vous n'êtes pas chargé d'enquêter sur la vie de la personne.\n\nSurvaloriser un logo prestigieux et sous-préparer les questions de contentu. Un intitulé impressionnant n'est pas une compétence démontrée.\n\nAnnoter le CV de commentaires physiques ou d'âge. Ces notes deviennent des données et peuvent révéler un critère illicite.\n\nPréparer uniquement des questions de confirmation pour le candidat que vous « sentez bien », et uniquement des questions de doute pour l'autre. C'est un biais de confirmation, traité plus loin dans le parcours : il commence dès la préparation."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CV très court (premier emploi, reconversion) : les axes portent sur les compétences transférables, les mises en situation et les réalisations de formation ou de stage. L'absence d'expérience identique n'est pas un défaut si le poste est junior.\n\nCV surchargé de jargon : préparez des demandes de traduction concrète (« Qu'avez-vous livré, à qui, avec quel résultat ? »).\n\nCandidat interne : le CV interne peut être incomplet. Demandez un historique de missions à jour. Ne remplacez pas l'analyse par ce que « tout le monde sait » dans l'open space."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "CV fictif résumé : « 2019-2021 : vendeur magasin prêt-à-porter. 2021-2022 : (aucune ligne). 2022-2026 : conseiller clientèle centre d'appels, puis « team leader » sans précision d'équipe. Postule à un poste de chargé de clientèle banque de détail. »\n\nRédigez quatre axes d'investigation, les questions associées, et indiquez une question que vous ne poserez pas malgré la période 2021-2022."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Axes pertinents : (1) nature réelle du conseil en centre d'appels (script, indicateurs, réclamations, vente additionnelle) ; (2) contenu du titre « team leader » (planning, coaching, objectifs, simple relais) ; (3) transférabilité vers un portefeuille en agence (relation durable vs flux d'appels) ; (4) motivation pour la banque de détail (cadre réglementaire, éthique commerciale), pas « pourquoi la banque paie mieux ».\n\nPériode 2021-2022 : question possible : « Pouvez-vous préciser comment s'inscrit cette période dans votre parcours professionnel ? » Vous n'exigez pas un diagnostic médical, une situation familiale ou un récit intime. Si la personne indique un élément privé, vous remerciez et vous revenez au poste. Question à ne pas poser : « Vous étiez en arrêt ? Vous aviez un enfant ? »"
            }
          ],
          "position": 1
        },
        {
          "title": "Construire le guide d'entretien et manier le STAR",
          "description": "Rédiger un guide utilisable en séance : ouverture, questions d'ancrage, relances STAR, situationnel, clôture.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous serez capable de bâtir un guide d'entretien semi-structuré, d'écrire des questions ouvertes professionnelles, et d'utiliser la méthode STAR pour obtenir des faits plutôt que des déclarations de personnalité. Vous saurez relancer sans induire la « bonne » réponse."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le guide d'entretien est l'outil qui rend l'évaluation comparable. Il n'a pas besoin d'être lu mot à mot comme un script d'enquête. Il doit empêcher deux dérives : l'oubli des critères essentiels, et l'invention de questions hors sujet sous le coup de la curiosité. Un guide professionnel contient au minimum : le cadre de l'échange (durée, participants, déroulé annoncé), un bloc parcours, des questions d'ancrage par compétence, des relances, un ou deux cas situationnels, un temps pour les questions du candidat, une clôture claire sur la suite du processus.\n\nLa méthode STAR structure la relance comportementale. Situation : dans quel contexte, avec qui, sous quelle contrainte. Tâche : quelle était la responsabilité de la personne, distincte de celle de l'équipe. Action : ce qu'elle a réellement fait, dans quel ordre, avec quels moyens. Résultat : ce qui s'est passé, y compris si le résultat est imparfait, et ce qu'elle en a retiré. Sans ces quatre étages, vous collectez des slogans (« je suis très relationnel ») ou des récits collectifs (« on a bien géré »). Le STAR n'est pas une obligation légale. C'est une technique professionnelle. Elle reste soumise à L. 1221-6 : la situation explorée doit être pertinente pour le poste.\n\nLes questions ouvertes (« Comment avez-vous organisé… ») produisent de la matière. Les questions fermées (« Avez-vous déjà utilisé Excel ? ») vérifient un point factuel et doivent rester minoritaires. Les questions inductives (« Vous êtes d'accord que le client a toujours raison, n'est-ce pas ? ») détruisent l'évaluation : le candidat comprend la réponse attendue. Les questions multiples (« Parlez-moi de votre plus grand succès, de votre plus grand échec et de votre manager idéal ») noient la réponse. Une question, puis une relance.\n\nLe guide doit aussi protéger le cadre légal. Vous y inscrivez explicitement les thèmes interdits, pour vous et pour le manager qui co-anime : santé, handicap (sauf aménagement demandé par le candidat pour le poste ou pour l'entretien), grossesse, situation de famille, origine, religion, opinions, syndicat, âge comme critère, apparence, lieu de résidence comme critère, précarité, nom. L'article L. 1132-1 liste les discriminations prohibées à l'embauche. Le guide n'a pas à reciter toute la liste à voix haute au candidat ; il a à empêcher que ces sujets surgissent « pour détendre l'atmosphère ».\n\nUn bon guide indique le temps par bloc. Sans temps, le parcours mange 40 minutes et les compétences du poste ne sont jamais testées. Le temps n'est pas une rigidité administrative : c'est la condition de l'équité entre candidats."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Partez des compétences essentielles de la fiche de poste, pas d'une banque de questions génériques. Pour chaque compétence, rédigez : une question d'ancrage comportementale, deux relances STAR, éventuellement une mise en situation courte.\n\nRédigez l'ouverture mot à mot la première année : accueil, durée, déroulé, information sur la prise de notes, possibilité de préciser ou de ne pas répondre à une question si elle paraît hors sujet. Cette dernière phrase n'est pas imposée par un article unique, mais elle est cohérente avec L. 1221-6 et avec une relation respectueuse.\n\nFaites relire le guide par le manager. Demandez-lui de biffer ce qui n'aide pas à décider et d'ajouter les incidents critiques du quotidien (client mécontent, pic d'activité, conflit de priorité, cadre réglementaire). Ces incidents alimentent le situationnel.\n\nImprimez ou ouvrez le guide en séance, avec de l'espace pour noter des faits. Le guide n'est pas un secret : le candidat peut voir que vous suivez une trame. Cela rassure plus que cela ne « dévoile » un piège."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME du bâtiment, recrutement d'un conducteur de travaux débutant. Compétence clé : faire remonter un écart de chantier sans attendre la réunion hebdomadaire. Question d'ancrage : « Racontez une situation où un planning ou une qualité n'allait pas pouvoir être tenus. » Relances : « Qui a été informé, à quel moment ? Qu'avez-vous dit exactement ? Quelle était votre marge de décision ? Qu'est-il advenu ensuite ? » Situationnel : « Vendredi 16 h, le client final veut avancer un livrable ; le sous-traitant dit qu'il manque un matériau. Vous êtes seul sur site. Quelles sont vos trois premières actions ? »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Écrire des questions de personnalité (« Êtes-vous stressé ? ») au lieu de questions de situation professionnelle.\n\nInterrompre le STAR dès la Situation pour donner son avis. Vous n'évaluez plus, vous conversez.\n\nCopier un guide trouvé en ligne, sans lien avec le poste. Des questions de leadership pour un poste sans encadrement font perdre du temps et créent de fausses attentes.\n\nOublier les questions du candidat dans le timing. Ce bloc n'est pas un luxe : il révèle la compréhension du poste et la qualité de la préparation du candidat."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat peu à l'aise avec le récit oral : le STAR peut être aidé par une consigne explicite (« Je vais vous demander le contexte, puis votre rôle, puis vos actions, puis le résultat »). Ce n'est pas un passe-droit : c'est rendre la méthode accessible. Vous le faites pour tous si le public du poste le justifie, ou à la demande si le stress bloque, sans changer les critères.\n\nEntretien en langue étrangère : le guide précise si vous évaluez la langue ou le métier. Si les deux, séparez les temps. Une maladresse linguistique n'est pas une incompétence métier, sauf si la langue est une exigence du poste, appliquée à tous.\n\nPanel : un seul guide, des questions réparties, un animateur du temps. Sinon chacun pose « parlez-moi de vous »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Compétence : « dire non à une vente inadaptée » pour un chargé de clientèle. Rédigez la question d'ancrage STAR, trois relances, et une question inductive à ne pas utiliser. Justifiez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Ancrage : « Décrivez une situation où un client voulait un produit ou un service que vous jugiez inadapté à sa situation. » Relances : « Quels éléments vous ont alerté ? Qu'avez-vous dit au client, concrètement ? Quelle règle interne ou quel cadre avez-vous utilisé ? Quel a été le résultat pour le client et pour vous ? »\n\nQuestion inductive à bannir : « Vous êtes d'accord qu'il ne faut jamais vendre n'importe quoi, surtout en banque ? » Elle force l'assentiment moral et n'éclaire aucune pratique. Le situationnel utile serait : « Un client veut un crédit alors que son reste à vivre est déjà tendu. Votre objectif mensuel n'est pas atteint. Que faites-vous ? »"
            }
          ],
          "position": 2
        },
        {
          "title": "Concevoir les grilles d'évaluation avant l'entretien",
          "description": "Transformer les critères du poste en échelle de notation partagée avec le manager, avant de rencontrer le premier candidat.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez construire une grille simple, pondérée, ancrée dans la fiche de poste, et la faire valider par le manager avant les entretiens. Vous distinguerez faits observés, interprétation et note, et vous préparerez l'usage de la grille en séance sans en faire un barème magique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La grille d'évaluation n'est pas un gadget de reporting. C'est l'instrument qui relie la fiche de poste, le guide d'entretien et la décision. Sans grille, deux intervieweurs sortent de la salle avec des souvenirs différents et tranchent sur des critères improvisés (« plus extraverti », « moins de feeling »). Avec une grille mal faite, on note la sympathie sous des intitulés sérieux. La grille doit donc être rédigée avant le premier candidat, à partir des compétences essentielles et souhaitables déjà validées, pas après coup pour justifier un choix déjà fait.\n\nUne grille professionnelle comporte des critères observables, une échelle explicite, éventuellement une pondération, et un espace de faits. L'échelle n'a pas de fondement légal unique. Une échelle à quatre niveaux (insuffisant / en retrait / conforme / dépasse) évite le refuge du « moyen ». Une échelle à cinq niveaux est utilisable si chaque cran est défini par un comportement, pas par un adjectif. « 3 = dynamique » ne veut rien dire. « 3 = illustre une priorisation réelle entre deux demandes clients, avec un résultat » veut dire quelque chose.\n\nLa pondération exprime que toutes les compétences n'ont pas le même poids pour le poste. Elle est une décision managériale, donc une politique interne, pas une obligation légale. Elle doit être figée avant les entretiens. La modifier après avoir vu un candidat que l'on préfère est une distorsion. Les critères éliminatoires, s'il y en a, doivent être rares, liés à une exigence réelle du poste (habilitation, mobilité géographique acceptée telle que définie, langue indispensable au quotidien) et appliqués à tous. Un « KO feeling » n'est pas un critère.\n\nLa grille n'exonère pas du cadre légal. Un critère « look », « accent », « âge du CV », « situation familiale », « santé » est illicite (L. 1132-1). Un critère « capacité à s'exprimer en français » n'est recevable que s'il a un lien direct et nécessaire avec l'emploi, et il ne doit pas servir de prétexte pour écarter une personne en raison de son origine ou de sa capacité à s'exprimer dans une autre langue, critère protégé. En cas de doute, le critère s'écrit en exigence professionnelle du poste (« rédiger des comptes rendus clients clairs ») plutôt qu'en jugement de la personne.\n\nEnfin, la note n'est pas la décision. Deux candidats peuvent être « conformes » avec des profils différents. La grille organise la comparaison ; elle ne remplace ni l'arbitrage du manager, ni le respect du principe de non-discrimination, ni la suite du processus (tests informés, références cadrées, offre)."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Reprenez la fiche de poste. Listez 5 à 8 critères maximum pour un entretien junior : au-delà, personne ne note avec attention. Séparez essentiels et souhaitables. Attribuez une pondération simple (par exemple 3 / 2 / 1) en séance de cadrage avec le manager, par écrit.\n\nPour chaque critère, rédigez les descripteurs de l'échelle. Un descripteur = un comportement ou un type de preuve attendu pendant l'entretien. Prévoyez une colonne « faits relevés » plus large que la colonne note.\n\nDécidez qui note : recruteur, manager, les deux. Si les deux, chacun remplit sa grille avant le débrief, pour éviter l'alignement immédiat sur le plus senior. Le débrief compare ensuite les écarts.\n\nContrôle qualité : faites un essai à blanc sur un CV fictif. Si le manager ne sait pas quoi noter, le critère est trop flou. Corrigez avant le premier vrai candidat."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup de 40 personnes, recrutement d'un customer success junior. Critères et pondération validés : compréhension du besoin client (3), pédagogie à l'oral (3), priorisation (2), aisance avec un outil de suivi (2), apprentissage (1). Échelle à 4 niveaux, descripteur du niveau « conforme » pour la priorisation : « Donne un exemple où deux demandes urgentes ont été arbitrées avec un critère explicite (impact, contrat, délai) et une communication au client. » Le fondateur voulait ajouter « culture start-up ». Reformulé en « capacité à travailler avec des consignes incomplètes, illustrée par un exemple », pour éviter un jugement de style de vie."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Créer la grille après le premier entretien « maintenant que l'on sait ce que l'on cherche ». Vous savez surtout ce que le premier candidat a montré.\n\nMettre 12 critères pour paraître rigoureux. Les notes deviennent mécaniques et les critères illicites se glissent dans la liste.\n\nNoter pendant que le candidat parle de son parcours personnel, puis oublier de noter les compétences. Inversez : faits d'abord, note en fin de bloc.\n\nUtiliser des demi-points pour exprimer un doute. Le doute s'écrit dans les faits (« exemple incomplet, pas de résultat ») ; la note reste alignée sur le descripteur."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Plusieurs intervieweurs successifs : même grille, ou grilles complémentaires (recruteur : parcours et motivation professionnelle ; manager : expertise). Pas deux grilles contradictoires sur le même critère.\n\nCandidats internes et externes dans la même campagne : mêmes critères essentiels. Un bonus informel « on le connaît » n'est pas une pondération.\n\nPoste soumis à une habilitation ou à une exigence réglementaire : le critère se note comme « information à vérifier dans le process RH », pas comme une impression d'entretien. Vous ne simulez pas un contrôle d'honorabilité hors cadre prévu."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Poste : chargé de clientèle banque de détail. Proposez 6 critères, une pondération, et le descripteur du niveau « insuffisant » et du niveau « conforme » pour « éthique commerciale ». Indiquez un critère que vous refusez d'ajouter si le manager dit « il faut quelqu'un de jeune et dynamique »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Critères possibles : relation client et écoute (3), éthique commerciale et respect du cadre (3), explication d'une offre simple (2), priorisation et organisation (2), travail d'équipe agence (1), apprentissage des produits (1). Insuffisant éthique : « N'identifie pas le conflit entre objectif commercial et intérêt du client, ou justifie une vente inadaptée par la pression du chiffre. » Conforme : « Donne un exemple ou un raisonnement situationnel où l'intérêt du client et la règle interne priment, avec une action concrète (refus, alternative, escalade). »\n\nCritère refusé : « jeune et dynamique ». L'âge est un critère protégé (L. 1132-1). « Dynamique » est un jugement flou. Reformulation possible, si le poste l'exige vraiment : « tenir un rythme d'accueil en agence aux heures d'ouverture, illustré par des exemples d'organisation » — exigence professionnelle, posée à tous, sans référence à l'âge."
            }
          ],
          "position": 3
        },
        {
          "title": "Logistique, accessibilité et rôles avec le manager",
          "description": "Organiser les conditions matérielles de l'entretien, anticiper l'accessibilité, et répartir clairement les rôles avec le manager.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous serez capable d'organiser un entretien présentiel ou à distance dans des conditions équitables, de proposer un aménagement raisonnable sans enquêter sur la santé, et de contractualiser avec le manager qui anime quoi, qui note quoi, et comment se passe le débrief."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La qualité d'un entretien dépend aussi de conditions matérielles que le candidat ne maîtrise pas. Une salle de passage, un manager en retard de vingt minutes, une visio sans lien de secours ou un badge qui n'ouvre pas le bâtiment produisent du stress artificiel. Ce stress n'évalue pas la compétence. Il évalue la logistique de l'entreprise. Préparer l'entretien, c'est donc préparer le cadre : convocation claire, lieu, horaire, durée, interlocuteurs, documents à apporter, modalité (présentiel, visio, téléphone), et conduite à tenir en cas d'imprévu.\n\nL'accessibilité n'est pas un sujet « en plus ». Le handicap est un critère de discrimination prohibé à l'embauche (L. 1132-1). Refuser un aménagement raisonnable de l'entretien alors qu'il permettrait d'évaluer les aptitudes professionnelles expose l'employeur à un risque de discrimination. Vous n'avez pas à connaître le diagnostic. Vous avez à offrir, dans la convocation, une formulation ouverte : le candidat peut signaler un besoin d'aménagement pour passer l'entretien dans de bonnes conditions. Exemples de bonne pratique : accessibilité des locaux, visio plutôt que présentiel, temps de consigne écrit, possibilité de venir avec un interprète si cela a un lien avec le déroulement et non avec une enquête médicale. L'aménagement concerne les modalités de l'évaluation, pas le niveau d'exigence du poste. Si le poste exige une habilitation ou une aptitude particulière, ce point relève d'un process RH et, le cas échéant, de la médecine du travail après embauche, pas d'une question d'entretien sur la pathologie.\n\nLes rôles avec le manager se préparent avant la salle, pas dans l'ascenseur. Le recruteur junior est responsable du cadre : accueil, timing, équité, questions illicites, prise de notes structurée, clôture sur la suite. Le manager est responsable de l'expertise métier et de la projection dans l'équipe. Si le manager pose une question sur les enfants, la santé ou l'origine, le recruteur recadre, même s'il est plus junior en grade. Ce n'est pas de l'impolitesse. C'est l'application du droit et la protection de l'entreprise. Cette répartition doit avoir été dite en amont : « Je pilote le déroulé et j'interromps une question hors cadre légal. Vous approfondissez le technique. Nous notons chacun de notre côté, puis nous débriefons 15 minutes sans le candidat. »\n\nLa logistique inclut aussi la confidentialité. Une salle vitrée ouverte sur l'open space, un écran partagé qui montre d'autres CV, un collègue qui entre « juste chercher un dossier » : ce sont des incidents de données et de respect. Les résultats des méthodes d'aide au recrutement sont confidentiels (L. 1221-8). Les notes d'entretien sont des données personnelles. Elles ne se laissent pas sur la table de la salle de réunion.\n\nEnfin, l'équité logistique fait partie de l'équité d'évaluation. Si un candidat a 60 minutes au calme et le suivant 25 minutes entre deux crises, vous ne comparez plus des personnes, vous comparez des contextes. Reporter vaut mieux que bricoler."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Checklist avant J-2 : salle ou lien visio testé, plan d'accès, nom de l'accueil, numéro de secours, guide et grilles imprimés ou ouverts hors messagerie, CV du bon candidat, durée bloquée dans l'agenda du manager + 15 minutes de débrief, consigne d'absence de téléphone personnel en séance.\n\nDans la convocation : date, heure, durée, lieu ou lien, participants et fonctions, documents éventuels, contact en cas d'empêchement, phrase d'aménagement. Vous ne demandez pas « êtes-vous handicapé ? ».\n\nRéunion de 15 minutes avec le manager avant le premier entretien de la campagne : objectifs, guide, grille, qui parle, questions interdites, conduite si retard, conduite si le candidat pose une question de rémunération trop tôt (renvoi au cadre validé, pas d'annonce improvisée).\n\nAprès chaque entretien : débrief immédiat, notes factuelles, grille datée, documents rangés selon la politique interne et les règles de conservation. Pas de discussion dans le couloir."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Agence d'intérim, vacation d'entretiens pour un magasin logistique. Le commercial agence veut « enchaîner toutes les 20 minutes ». Le chargé de recrutement junior impose 35 minutes + 10 minutes de pause, une salle fermée, et un affichage à l'accueil pour que les candidats ne s'assoient pas au milieu des permanents. Un candidat signale une difficulté de déplacement. L'entretien est proposé en visio le lendemain, mêmes questions, même grille. Le client magasin n'assiste pas en silence sans avoir été briefé : il reçoit les questions interdites par écrit."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser le manager « juste passer cinq minutes » sans rôle. Il pose alors des questions de personnalité et casse le timing.\n\nOublier de tester la visio. Le premier candidat subit vos problèmes techniques ; le second, une fois le problème réglé, passe un autre entretien.\n\nDemander un certificat médical pour aménager l'entretien. Vous n'êtes pas médecin du travail.\n\nFaire l'accueil debout dans le hall en parlant du poste à voix haute. Confidentialité et première impression professionnelle sont déjà perdues."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager empêché au dernier moment : vous menez l'entretien prévu sur le cadre et les compétences transverses, et vous replanifiez le bloc métier. Vous ne « sauvez » pas la campagne en improvisant une expertise que vous n'avez pas.\n\nCandidat en situation de handicap qui n'a rien signalé et qui rencontre une difficulté en séance : vous proposez une pause ou un aménagement immédiat (lecture des questions, temps), sans exiger d'explication médicale.\n\nEntretien déjeuner : déconseillé pour un junior. Le cadre social dilue les critères et multiplie les questions de vie privée. Si la culture d'entreprise l'impose, le guide et les interdits restent les mêmes ; l'alcool n'est pas un outil d'évaluation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez : (1) les cinq lignes de brief que vous envoyez au directeur d'agence avant un entretien commun pour un chargé de clientèle ; (2) la phrase d'aménagement à insérer dans la convocation ; (3) ce que vous faites si, cinq minutes avant, le manager dit « je vais lui demander si elle compte avoir des enfants, c'est un poste prenant »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Brief manager : durée 60 minutes ; vous ouvrez et clôturez ; lui prend le bloc produits et cas d'agence ; chacun note sur la grille jointe ; questions sur la vie privée, la santé, la famille, l'origine interdites ; débrief 15 minutes ensuite, sans verdict dans la salle. Phrase d'aménagement : « Si vous avez besoin d'un aménagement pour passer cet entretien dans de bonnes conditions, indiquez-le à [nom, e-mail, téléphone] afin que nous l'organisions. »\n\nRecadrage du manager : vous rappelez L. 1132-1 (situation de famille, grossesse) et L. 1221-6 (lien nécessaire avec l'emploi). Vous proposez de tester la capacité à tenir les horaires d'agence par une question professionnelle identique pour tous. Si le manager maintient son intention, vous signalez à votre responsable RH avant l'entretien. Vous n'êtes pas tenu de laisser dire une question illicite pour « ne pas le vexer »."
            }
          ],
          "position": 4
        },
        {
          "title": "Guide d'entretien complet — chargé de clientèle, banque de détail",
          "description": "S'approprier un guide opérationnel fictif, de l'ouverture à la grille, pour un poste de chargé de clientèle en agence.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez utiliser un guide d'entretien complet : timing, questions d'ancrage, relances STAR, cas situationnels, questions du candidat, clôture et grille. Vous pourrez l'adapter à un autre poste sans copier des questions hors sujet."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un guide « complet » n'est pas un document littéraire. C'est un instrument de séance, assez précis pour qu'un recruteur junior et un manager puissent mener le même entretien à trois jours d'intervalle, assez souple pour relancer. Le cas retenu ici est fictif : chargé de clientèle en banque de détail, CDI, agence. Le métier combine accueil, conseil, vente de produits d'épargne et de crédit dans un cadre réglementaire, développement d'un portefeuille et travail d'équipe. Les compétences critiques ne sont pas « aimer les gens » : ce sont l'écoute, l'explication d'une offre, l'éthique commerciale, la priorisation, et la capacité à travailler sous objectifs sans s'affranchir des règles.\n\nCe guide est un exemple pédagogique. Il n'est pas un modèle unique imposé par le droit. Ce qui est obligatoire, c'est que les questions restent en lien direct et nécessaire avec l'emploi (L. 1221-6) et que le candidat ne soit pas écarté pour un motif discriminatoire (L. 1132-1). La structuration, le STAR et la pondération sont des bonnes pratiques. Si votre établissement a une trame conformité interne, elle prime sur cet exemple.\n\nLe poste de chargé de clientèle expose particulièrement au risque de questions illicites : disponibilité liée à la famille, « look commercial », âge, origine de la clientèle du quartier, santé « pour tenir le stress ». Aucune de ces questions n'entre dans le guide. La tenue professionnelle, si elle est une exigence, se traduit par une information sur le code vestimentaire du réseau, identique pour tous, pas par un commentaire sur l'apparence. La langue de travail est le français si les écrits et l'accueil l'exigent ; cela ne justifie pas une enquête sur l'origine ou sur une autre langue parlée en famille.\n\nVous n'utilisez ce guide qu'après validation du manager d'agence. Un directeur qui veut « juste sentir le feeling » doit malgré tout s'y prêter : c'est votre rôle de le ramener à des preuves. Le guide ci-dessous inclut volontairement des relances écrites : en séance, vous ne les lisez pas comme un robot. Vous les avez en filet.\n\nLes notes prises pendant cet entretien sont confidentielles. Elles ne sont pas un jugement de la personne ; elles sont des faits au service d'une comparaison. Le candidat est informé du déroulé. S'il existe un test de mise en situation ou un outil d'aide à la décision, l'information préalable est une obligation légale (L. 1221-8), distincte de ce guide d'entretien classique."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "La veille : relire la fiche de poste, le CV, la grille, le guide. Annoter trois axes d'investigation propres au candidat, sans changer les questions d'ancrage.\n\nEn séance : annoncer le déroulé, respecter les temps à cinq minutes près, noter des faits, ne pas argumenter. Si le candidat fuit le STAR, reformuler une fois la consigne, puis passer à un situationnel. Si le manager déborde, reprendre le timing à voix haute.\n\nAprès séance : terminer la grille avant de discuter, rédiger cinq à huit lignes de synthèse factuelle, ranger le document. Ne pas envoyer le guide annoté par e-mail à une liste de diffusion large."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le document ci-dessous est le livrable que vous pourriez poser sur la table, pour une campagne fictive à l'agence Lyon Part-Dieu de la Banque des Vallées (ETI régionale fictive). Il est conçu pour un entretien de 60 minutes, recruteur junior + directeur d'agence."
            },
            {
              "block_type": "code",
              "content": "GUIDE D'ENTRETIEN — Chargé de clientèle, banque de détail\nDocument interne pédagogique — cas fictif — confidentiel\nEmployeur fictif : Banque des Vallées, ETI régionale\nPoste : chargé / chargée de clientèle, agence de Lyon Part-Dieu\nContrat : CDI temps plein, horaires d'agence\nParticipants : recruteur (cadre, timing, droit) + directeur d'agence (métier)\nDurée : 60 minutes + 15 minutes de débrief sans le candidat\nGrille : à remplir séparément par chaque intervieweur avant le débrief\n\n------------------------------------------------------------------------\n0. AVANT L'ENTRÉE DU CANDIDAT (5 min)\n- Vérifier identité du bon dossier, CV, convocation, aménagement éventuel.\n- Téléphones en silencieux. Porte fermée. Écran sans autres candidatures.\n- Rappel manager : pas de questions sur santé, famille, grossesse, origine,\n  religion, âge, apparence, logement, crédits personnels, opinions.\n- Lien L. 1221-6 et L. 1132-1 : uniquement l'aptitude professionnelle.\n\n------------------------------------------------------------------------\n1. ACCUEIL ET CADRE (5 min) — recruteur\nScript d'ouverture :\n« Bonjour [prénom nom]. Merci d'être venu(e). Je suis [nom, fonction].\n[Nom du directeur] est directeur de l'agence. Nous avons 60 minutes.\nDéroulé : votre parcours, des situations concrètes liées au poste,\ndeux cas pratiques, vos questions, puis la suite du processus.\nJe prendrai des notes pour restituer des faits, pas des impressions.\nLes questions portent sur vos aptitudes professionnelles. Si une question\nvous paraît sans lien avec le poste, dites-le-nous.\nAvez-vous une contrainte d'horaire à 60 minutes ? »\n\nAnnoncer la suite du process (étapes restantes, délai de réponse cible).\nNe pas promettre une embauche. Ne pas improviser une rémunération.\n\n------------------------------------------------------------------------\n2. PARCOURS PROFESSIONNEL (8 min) — recruteur\nQuestion d'ancrage :\n« Pouvez-vous présenter votre parcours des cinq à dix dernières années\nen vous arrêtant sur les missions en lien avec la relation client ? »\n\nRelances :\n- « Quelle était votre responsabilité exacte, distincte de celle de l'équipe ? »\n- « Quel volume ou quel type de portefeuille / de flux gériez-vous ? »\n- « Pourquoi ce poste-ci, dans ce réseau, maintenant ? »\n\nÀ clarifier selon le CV (axes individuels, 3 maximum) :\n- [hypothèse 1]\n- [hypothèse 2]\n- [hypothèse 3]\n\nInterdits : « Vous habitez loin », « Vous avez un accent », « Votre âge ».\n\n------------------------------------------------------------------------\n3. COMPÉTENCE — ÉCOUTE ET RELATION CLIENT (8 min) — recruteur\nAncrage STAR :\n« Racontez une situation où un client ou un usager était mécontent\nou ne se sentait pas compris. »\n\nRelances STAR :\nS : « Quel était le contexte ? Qui était là ? Quelle contrainte de temps ? »\nT : « Quelle était votre responsabilité dans cette situation ? »\nA : « Qu'avez-vous dit et fait, concrètement, dans l'ordre ? »\nR : « Quel a été le résultat pour la personne ? Pour vous ? Qu'avez-vous\n    modifié ensuite dans votre façon de faire ? »\n\nPreuves attendues (aide mémoire, ne pas lire au candidat) :\n- reformulation du besoin ; - calme sous tension ; - suite donnée.\n\n------------------------------------------------------------------------\n4. COMPÉTENCE — ÉTHIQUE COMMERCIALE ET CADRE (8 min) — directeur\nAncrage STAR :\n« Décrivez une situation où l'on vous demandait, ou où un objectif\nvous poussait, à proposer quelque chose qui ne convenait pas. »\n\nRelances :\n- « Quels signaux vous ont alerté ? »\n- « Qu'avez-vous dit à la personne ? À votre responsable ? »\n- « Quelle règle, procédure ou limite avez-vous utilisée ? »\n- « Quel a été le résultat ? »\n\nSi aucun exemple passé (profil très junior) : ne pas forcer un récit faux.\nPasser au situationnel du bloc 6, même critère.\n\n------------------------------------------------------------------------\n5. COMPÉTENCE — EXPLICATION D'UNE OFFRE ET PÉDAGOGIE (6 min) — directeur\nAncrage :\n« Expliquez-moi, comme à un client qui n'y connaît rien, un produit\nou un service que vous avez déjà présenté (même hors banque). »\n\nRelances :\n- « Quels mots avez-vous évités ? »\n- « Comment avez-vous vérifié que la personne avait compris ? »\n- « Que faisiez-vous si elle n'était pas d'accord ? »\n\nLe directeur peut proposer un mini-produit fictif local\n(livret d'épargne simple) si le candidat n'a pas d'exemple.\n\n------------------------------------------------------------------------\n6. SITUATIONNELS (10 min) — directeur puis recruteur\nCas A — crédit et fragilité (éthique + cadre)\n« Un client que vous connaissez peu veut un crédit à la consommation\npour un projet personnel. Ses charges semblent déjà élevées. Votre\nobjectif mensuel n'est pas atteint. Quelles sont vos actions, dans l'ordre ?\nÀ qui parlez-vous ? Que ne faites-vous pas ? »\n\nRelances : pièces utiles, refus, alternative, escalade, traces écrites.\nNe pas demander la situation financière réelle du candidat.\n\nCas B — priorisation d'agence\n« Samedi 10 h 30. File de cinq personnes, un client en rendez-vous\ndans dix minutes, le téléphone sonne, un collègue vous demande une\nurgence. Comment arbitrez-vous les 15 minutes suivantes ? »\n\nCas C (si temps) — erreur d'un collègue\n« Vous entendez un collègue donner une information inexacte à un client.\nQue faites-vous pendant l'échange ? Après l'échange ? »\n\n------------------------------------------------------------------------\n7. ORGANISATION, OUTILS, TRAVAIL D'ÉQUIPE (5 min) — recruteur\n« Racontez une journée ou une semaine chargée et la façon dont vous\navez priorisé. » Puis : « Quel outil de suivi utilisiez-vous, concrètement ? »\n« Un désaccord avec un collègue ou un manager : faits, votre action, issue. »\n\n------------------------------------------------------------------------\n8. QUESTIONS DU CANDIDAT (7 min) — les deux\nLaisser le candidat mener. Noter la pertinence professionnelle\n(process, équipe, attentes des 90 premiers jours, formation produits).\nRéponses honnêtes. Si vous ne savez pas : « Je vérifie et je vous écris. »\nNe pas vendre un poste irréel (L. 5331-3 : allégations trompeuses,\nesprit applicable aussi à l'oral).\n\n------------------------------------------------------------------------\n9. CLÔTURE (3 min) — recruteur\n- Remercier.\n- Rappeler les étapes et une date de prochaine communication.\n- Demander si le candidat souhaite ajouter un élément professionnel.\n- Accompagner à la sortie. Pas de verdict. Pas de « vous êtes très bon,\n  on vous garde ».\n- Récupérer badges, ne rien laisser de notes visibles.\n\n------------------------------------------------------------------------\nGRILLE D'ÉVALUATION (à remplir AVANT le débrief)\n\nÉchelle : 1 insuffisant | 2 en retrait | 3 conforme au besoin | 4 dépasse\nNoter uniquement à partir de faits de l'entretien.\nPondération figée avant campagne.\n\nCritère                              Pond.  Recruteur  Manager  Faits\nÉcoute / relation client               3       /4         /4\nÉthique commerciale et cadre           3       /4         /4\nPédagogie / explication d'une offre    2       /4         /4\nPriorisation / organisation            2       /4         /4\nTravail d'équipe agence                1       /4         /4\nApprentissage / motivation pour le poste 1     /4         /4\n\nÉliminatoire réel (rare, exigence de poste, appliqué à tous) :\n[ ] Non retenu pour motif professionnel documenté :\n................................................................\nInterdit : âge, look, accent, famille, santé, « pas le profil du quartier ».\n\nSynthèse factuelle (8 lignes max) :\n................................................................\nPoints à vérifier plus loin (références, test informé, RH) :\n................................................................\nRecommandation :  [ ] suite  [ ] réserve  [ ] arrêt — motif professionnel\n\n------------------------------------------------------------------------\nDÉBRIEF (15 min, sans candidat)\n1. Chacun lit sa note et ses faits (2 min chacun), sans se couper.\n2. Écarts > 1 cran : revenir aux faits, pas au feeling.\n3. Décision d'étape (pas d'offre en séance).\n4. Messages au candidat : le recruteur rédige, pas un texto du manager."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lire le guide ligne à ligne et ignorer une réponse riche. Le guide est un filet, pas un téléprompter.\n\nSauter les situationnels parce que « le feeling est bon ». C'est précisément là que l'éthique commerciale se voit.\n\nLaisser le directeur transformer le cas crédit en enquête sur les crédits personnels du candidat.\n\nRemplir la grille le lendemain de mémoire. Les faits s'évaporent ; restent les impressions."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne déjà en agence : mêmes situationnels, questions de parcours plus courtes, vigilance accrue sur le favoritisme et sur les rumeurs d'équipe.\n\nCandidat sans aucun exemple commercial : le situationnel et l'explication d'un produit simple portent davantage. Vous n'inventez pas un « KO manque d'expérience » si le poste est ouvert aux débutants.\n\nEntretien à distance : même guide ; ajouter 2 minutes de test audio/vidéo ; cas B adapté (file d'attente d'appels plutôt que file d'agence si le candidat n'a jamais vu une agence). L'imprévu technique se traite dans le module suivant."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le directeur d'agence veut ajouter, en fin de guide, deux questions : « Vous êtes marié ? » et « Vous supportez la pression ? ». Rédigez votre réponse écrite (e-mail interne) et proposez, pour la seconde, une question STAR conforme."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "La situation de famille est un critère protégé (L. 1132-1). Elle n'a pas de lien nécessaire avec l'emploi (L. 1221-6). Vous refusez de l'inscrire. « Supporter la pression » est flou et oriente vers la santé ou la personnalité. Question STAR de substitution : « Racontez une demi-journée où plusieurs demandes urgentes sont arrivées en même temps. Quelle était la situation, quelle était votre responsabilité, qu'avez-vous fait, quel a été le résultat ? » Le situationnel du samedi matin du guide teste déjà cette aptitude, de façon professionnelle et identique pour tous."
            },
            {
              "block_type": "callout",
              "content": "Ce guide est un cas fictif de formation. Sur un poste réel, faites valider la trame par le manager et, si elle existe, par la conformité ou les RH. Ne transcrivez pas de données de santé. Date de vérification des textes cités : 13/10/2026 (legal-sources.json)."
            }
          ],
          "position": 5
        },
        {
          "title": "Quiz — Préparer un entretien",
          "description": "Vérifiez que vous savez préparer un entretien structuré, légal et utilisable avec un manager.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Préparer un entretien",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "D'après le Code du travail, article L. 1221-6, les informations demandées à un candidat doivent :",
                "question_type": "single_choice",
                "options": [
                  "A. Avoir uniquement pour finalité d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire.",
                  "B. Permettre de connaître la personne dans sa globalité, y compris sa situation familiale, pour mieux l'intégrer.",
                  "C. Être identiques à celles d'un entretien annuel d'évaluation d'un salarié déjà en poste.",
                  "D. Être laissées à la libre appréciation du manager, dès lors que le candidat peut refuser de répondre."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "L. 1221-6 limite les informations au lien direct et nécessaire avec l'emploi. Ce n'est pas une invitation à explorer la vie privée, même si le candidat « peut refuser ». Un refus de répondre à une question illicite ne doit pas pénaliser le candidat."
              },
              {
                "question": "Quelle affirmation décrit correctement un entretien semi-structuré ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le recruteur improvise selon le feeling, puis note ce dont il se souvient.",
                  "B. Toutes les questions sont lues mot à mot, sans aucune relance, pour coller à un script unique.",
                  "C. Un cadre commun (thèmes, questions d'ancrage, grille, temps) est fixé, avec des relances adaptées au parcours.",
                  "D. Seul le manager parle, le recruteur observe en silence pour ne pas biaiser."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le semi-structuré combine équité (même cadre) et écoute (relances). L'entretien libre n'est pas comparable. Le 100 % scripté peut être utilisé en volume, mais ce n'est pas la définition du semi-structuré. Le recruteur reste responsable du cadre légal."
              },
              {
                "question": "Dans la méthode STAR, le R correspond à :",
                "question_type": "single_choice",
                "options": [
                  "A. Le relationnel du candidat, noté au feeling.",
                  "B. Le résultat de l'action menée, y compris s'il est imparfait, et ce qui a été appris.",
                  "C. La recommandation finale du recruteur (retenu / non retenu).",
                  "D. Le réseau professionnel cité par le candidat."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "STAR = Situation, Tâche, Action, Résultat. Sans résultat, vous n'avez qu'un récit d'intention. Le résultat n'a pas besoin d'être héroïque pour être informatif."
              },
              {
                "question": "Un manager veut noter « look commercial » dans la grille d'un chargé de clientèle. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous acceptez : l'apparence fait partie de la relation client en banque.",
                  "B. Vous le remplacez par l'âge, plus objectif.",
                  "C. Vous refusez le critère apparence (L. 1132-1) et, si besoin, vous informez du code vestimentaire du réseau, identique pour tous.",
                  "D. Vous le laissez dans la grille mais vous ne le remplissez pas, pour ne pas heurter le manager."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "L'apparence physique est un critère de discrimination prohibé. Un code vestimentaire professionnel, connu et appliqué à tous, n'est pas un jugement de l'apparence de la personne. Laisser un critère illicite « inactif » dans une grille est une mauvaise pratique : il peut encore influencer."
              },
              {
                "question": "Quand la grille d'évaluation doit-elle être figée (critères et pondération) ?",
                "question_type": "single_choice",
                "options": [
                  "A. Après le premier candidat, une fois que l'on a vu le marché.",
                  "B. Avant le premier entretien de la campagne, à partir de la fiche de poste validée.",
                  "C. Uniquement au moment de la shortlist, pour aller plus vite en entretien.",
                  "D. Jamais : chaque intervieweur doit rester libre de ses critères."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Figer la grille ensuite, c'est l'ajuster au candidat préféré. La pondération est une politique interne, pas une obligation légale, mais elle doit précéder les entretiens pour rester honnête."
              },
              {
                "question": "Un candidat demande un aménagement pour l'entretien (visio plutôt que présentiel). Quelle conduite est conforme ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous exigez un certificat médical détaillé avant d'accepter.",
                  "B. Vous refusez : tous doivent passer dans les mêmes conditions matérielles, sinon l'égalité est rompue.",
                  "C. Vous organisez l'aménagement des modalités, sans enquêter sur la santé, tout en conservant les mêmes critères d'évaluation du poste.",
                  "D. Vous acceptez mais vous baissez le niveau d'exigence du poste pour « être fair-play »."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Aménager les modalités n'est pas baisser les exigences du métier. Exiger un diagnostic est excessif et hors rôle. Le handicap est un critère protégé (L. 1132-1). L'égalité porte sur les critères professionnels, pas sur l'identique matériel à tout prix."
              },
              {
                "question": "Quelle est la répartition de rôles la plus robuste entre recruteur junior et manager ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le manager mène tout ; le recruteur prend le café et envoie le CR.",
                  "B. Le recruteur pilote le cadre, le timing et le respect du droit ; le manager approfondit le métier ; chacun note avant le débrief.",
                  "C. Les deux improvisent ensemble pour rester spontanés.",
                  "D. Le recruteur pose toutes les questions techniques pour « protéger » le manager."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le junior n'est pas un assistant logistique. Il est responsable du process et du cadre légal, y compris s'il doit recadrer une question illicite. Le manager n'est pas un spectateur : il évalue l'expertise."
              },
              {
                "question": "Une question situationnelle se distingue d'une question comportementale en ce qu'elle :",
                "question_type": "single_choice",
                "options": [
                  "A. Explore un cas hypothétique proche du poste, pour voir le raisonnement et les priorités.",
                  "B. Porte nécessairement sur la vie personnelle du candidat.",
                  "C. Est illégale, car elle n'est pas un fait passé.",
                  "D. Remplace la grille d'évaluation."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "Le situationnel n'est pas illégal s'il a un lien avec l'emploi. Il ne remplace pas les faits passés (comportemental) ni la grille. Il est particulièrement utile pour un junior qui a peu d'exemples identiques."
              }
            ]
          },
          "position": 6
        }
      ]
    },
    {
      "position": 10,
      "title": "Conduire un entretien professionnel",
      "description": "Accueillir, écouter, relancer, gérer le temps et les situations difficiles, prendre des notes exploitables, et s'entraîner sur cinq simulations complètes.",
      "lessons": [
        {
          "title": "Accueillir, poser le cadre et dérouler l'entretien",
          "description": "Ouvrir l'entretien, créer un climat professionnel, annoncer le déroulé et le tenir jusqu'à la clôture.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À l'issue de cette leçon, vous saurez ouvrir un entretien en présentiel ou à distance, poser un cadre clair (durée, participants, notes, suite), installer un climat professionnel sans familiarité, et enchaîner les blocs prévus sans verdict en fin de séance."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les premières minutes ne servent pas à « briser la glace » par des questions de vie privée. Elles servent à réduire l'incertitude : qui vous êtes, combien de temps dure l'échange, ce qui va se passer, ce qui se passera après. Un candidat qui ne sait pas s'il a 20 ou 60 minutes, s'il peut prendre des notes, ou si le silence du manager signifie un jugement, consacre une partie de son attention à se protéger. Cette attention-là n'évalue pas la compétence. Le climat professionnel est donc un climat prévisible, courtois, égal pour tous.\n\nL'accueil n'est pas un moment hors évaluation juridique. Dès que vous posez une question, L. 1221-6 s'applique : lien direct et nécessaire avec l'emploi. « Vous avez fait bon voyage ? » peut rester une politesse courte. « Vous habitez dans le quartier ? Ça va être pratique avec les enfants ? » devient une collecte d'informations illicites ou sans lien nécessaire (lieu de résidence et situation de famille sont des critères protégés, L. 1132-1). La familiarité n'est pas une qualité d'accueil. La clarté l'est.\n\nLe déroulé annoncé est un contrat d'attention. Si vous annoncez un cas pratique et que vous ne le faites jamais, le candidat part avec une information fausse sur le process. Si vous promettez « on vous rappelle lundi » et que personne n'appelle, vous dégradez l'expérience et, selon les propos tenus, vous pouvez créer une attente excessive. Vous n'êtes pas tenu par la loi de motiver un refus, nous y reviendrons. Vous êtes tenu de ne pas induire en erreur sur l'emploi (esprit de L. 5331-3, allégations trompeuses dans les offres : le même exigence d'honnêteté s'applique à l'oral).\n\nTenir le déroulé, c'est aussi protéger l'équité. Le candidat de 9 h n'a pas à vivre un entretien de découverte ; celui de 16 h, fatigué, un interrogatoire. Vous suivez le guide. Vous pouvez relancer. Vous ne changez pas de métier à la troisième réponse qui vous plaît. La clôture est un acte professionnel : remerciement, étapes, date de prochaine communication, invitation à ajouter un élément professionnel. Pas de classement à chaud. Pas de « c'était le meilleur entretien de la semaine ».\n\nLe climat se construit aussi par le corps et l'environnement : regard, silence laissé après une question, absence de soupirs, porte fermée, pas de notification d'écran. Ces éléments ne sont pas du théâtre. Ils signalent que le temps du candidat est traité comme un travail, pas comme une interruption."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant l'heure : salle prête, dossiers du seul candidat visible, eau, horloge face à vous. En visio : lien ouvert, micro testé, fond neutre, notifications coupées, numéro de téléphone de secours sous les yeux.\n\nMinute 0 à 5 : poignée de main ou salut visio, présentation des fonctions, durée, déroulé, notes, aménagement si déjà signalé, question « êtes-vous en mesure de tenir l'horaire prévu ? ». Puis première question de parcours, déjà rédigée.\n\nPendant : à chaque changement de bloc, une phrase de transition (« Nous allons maintenant prendre deux situations concrètes »). Si vous prenez du retard, vous le dites et vous arbitrerez (voir leçon sur le temps).\n\nMinute finale : clôture scriptée, accompagnement, notes rangées, pas de commentaire dans le couloir. Le débrief avec le manager commence après la sortie du candidat, pas avant."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME de 80 personnes, recrutement d'un assistant ADV. La DRH junior accueille au rez-de-chaussée, annonce l'étage, présente le responsable commercial déjà installé. Elle dit : « Nous avons 45 minutes. D'abord votre parcours ADV, puis des situations de commandes, puis vos questions. Je note des faits. La prochaine étape, si nous poursuivons, est un essai sur notre outil interne la semaine prochaine ; vous en serez informé au préalable. » Le responsable commercial n'enchaîne pas sur le week-end du candidat. L'ouverture a duré quatre minutes. Le candidat pose son sac, respire, et peut travailler."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Commencer par « parlez-moi de vous » sans cadre. Le candidat raconte sa vie ; vous perdez le temps métier.\n\nS'excuser dix minutes d'un retard du manager en dénigrant l'entreprise. Un fait suffit : « [Prénom] a un imprévu de dix minutes ; nous commençons le cadre, il nous rejoint pour le bloc métier. »\n\nRire d'un incident (badge, visio) en commentant le stress du candidat. Vous évaluez alors la capacité à rire avec vous, pas le poste.\n\nClôturer par un verdict positif pour être aimable. Vous créez une attente que vous ne maîtrisez pas."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui arrive très en avance : proposez un espace d'attente calme, pas un début anticipé qui raccourcit le candidat suivant.\n\nCandidat interne : l'accueil reste formel. La connivence de couloir (« tu connais déjà la maison ») réduit l'équité vis-à-vis des externes et encourage les sous-entendus.\n\nPanel de trois personnes : une seule ouverture, une seule clôture, les autres se présentent en une phrase. Sinon le cadre dure quinze minutes."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez votre script d'ouverture (120 à 180 mots) pour un entretien visio de 50 minutes, vous + un manager, poste de chargé de clientèle. Incluez notes, déroulé, suite du process, et une phrase sur les questions hors sujet. Puis indiquez deux phrases d'accueil que vous n'utiliserez pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Script acceptable : présentation, durée 50 minutes, blocs (parcours, situations, cas, questions du candidat), notes factuelles, information sur l'étape suivante sans promesse, invitation à signaler une question sans lien avec le poste, vérification de l'horaire et de la qualité audio. Phrases à écarter : « Alors, vous êtes marié, vous avez fait du chemin ? » et « Ne soyez pas stressé, on est cool ici, on va parler de tout. » La première est illicite ou hors lien d'emploi. La seconde annonce un entretien non professionnel et ouvre la vie privée."
            }
          ],
          "position": 0
        },
        {
          "title": "Écouter, reformuler, poser des questions ouvertes et relancer",
          "description": "Obtenir des faits professionnels par l'écoute active, la reformulation neutre et des relances STAR, sans induire la réponse.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez distinguer question ouverte, fermée, inductive et multiple, reformuler sans mettre vos mots dans la bouche du candidat, et relancer jusqu'à l'action et au résultat, tout en restant dans le champ de L. 1221-6."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'entretien n'est pas un débat. Votre parole sert à ouvrir un espace de faits, pas à démontrer que vous connaissez le métier mieux que le candidat. L'écoute professionnelle est une écoute orientée : vous cherchez des preuves liées aux critères, vous laissez du silence, vous notez, vous relancez. Elle n'est pas une écoute thérapeutique. Vous ne recueillez pas la vie intérieure de la personne. Vous recueillez des situations de travail, des décisions, des résultats.\n\nLa reformulation a une fonction de contrôle, pas de séduction. « Si je comprends bien, vous étiez responsable du planning de quatre personnes, pas du recrutement » permet au candidat de corriger. « Donc vous étiez un vrai manager, bravo » n'est pas une reformulation : c'est un jugement qui oriente la suite. Une reformulation neutre reprend les faits, le périmètre, le temps, les acteurs. Elle ne reprend pas les émotions au-delà de ce qui éclaire le comportement professionnel (« le client était en colère ; qu'avez-vous fait alors ? »).\n\nLes questions ouvertes commencent souvent par comment, qu'avez-vous, décrivez, racontez une situation. Elles produisent de la matière. Les questions fermées (oui/non, déjà fait/jamais) sont utiles pour un point précis (« Avez-vous déjà saisi des opérations dans un outil de caisse ? ») puis doivent être suivies d'une ouverture (« Dans quel contexte, avec quel contrôle ? »). Les questions inductives suggèrent la norme (« Vous êtes quelqu'un de ponctuel, n'est-ce pas ? »). Elles sont inutiles et, si elles touchent un critère protégé, dangereuses. Les questions multiples demandent trois réponses à la fois ; le candidat choisit la plus confortable et vous croyez avoir tout couvert.\n\nLa relance STAR est une discipline. Après la situation, beaucoup de candidats parlent de « nous ». Relance : « Quelle était votre part, distincte de celle de l'équipe ? » Après une intention (« j'aurais dû »), relance : « Qu'avez-vous fait à ce moment-là ? » Après une action sans résultat : « Qu'est-il advenu ? Comment le savez-vous ? » Deux ou trois relances suffisent. Au-delà, vous harcelez un point et vous perdez le temps des autres critères.\n\nL'écoute inclut ce que vous ne poursuivez pas. Si le candidat glisse vers la santé, la famille, les origines, vous ne relancez pas. Vous ramenez au poste : « Pour en revenir à l'organisation de l'accueil… » Continuer par politesse, c'est collecter une donnée que vous n'avez pas le droit d'utiliser, et que vous risquez d'utiliser malgré vous."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une question à la fois. Silence de trois à cinq secondes après la réponse apparente : souvent la précision vient ensuite. Notez un fait, pas un adjectif. Relancez avec les mots du candidat (« vous dites “on a cadré le client” : que dit “on” ? »).\n\nInterdiction opérationnelle : ne pas enchaîner votre propre anecdote. « Moi aussi, en agence… » vole le temps et recentre l'entretien sur vous.\n\nSi vous ne comprenez pas un jargon : « Pouvez-vous me le dire comme à un client ? » C'est une relance métier, pas un aveu d'incompétence.\n\nContrôle en cours de séance : ai-je au moins un fait d'action et un résultat pour chaque critère essentiel ? Sinon, une relance ciblée avant de changer de bloc."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie, poste de technicien SAV sédentaire. Le candidat dit : « Je suis très autonome, on me laisse gérer. » Recruteur : « Prenez une intervention récente que vous avez conduite du début à la fin. Quel était le problème, quelle était votre responsabilité, quelles actions, quel résultat pour le client interne ? » Le candidat décrit alors une panne, un appel au fournisseur, une consigne de sécurité, un délai de 48 h. La reformulation : « Vous avez bloqué la machine, appelé le fournisseur, et livré un délai au chef d'atelier. C'est bien cela ? » Le candidat corrige : le blocage a été décidé avec le chef. Le périmètre devient exact. Sans cette reformulation, la grille aurait noté une autonomie surévaluée."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Hocher la tête en souriant dès qu'une réponse « ressemble » à la culture d'entreprise. Vous entraînez le candidat vers vos attentes.\n\nReformuler en plus positif que le récit (« donc c'était un succès ») alors que le candidat parlait d'un échec utile.\n\nPoser « pourquoi » de façon accusatoire sur un trou de CV. Préférez « comment cette période s'inscrit-elle dans votre parcours professionnel ? » et arrêtez-vous au lien avec l'emploi.\n\nPrendre des notes seulement quand la réponse déplaît. Le candidat le voit et se ferme."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui répond par monosyllabes : une question plus étroite, puis élargissement. « Sur telle mission du CV, quelle était la première tâche de votre journée type ? » Ensuite seulement le STAR large.\n\nCandidat très à l'aise à l'oral : le risque est l'inverse, l'absence de faits. Relances plus fréquentes sur l'action et le résultat.\n\nInterprète ou aménagement : parlez au candidat, pas à l'accompagnant. Phrases courtes. Même critères."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Réponse du candidat : « On a sauvé un gros client avec l'équipe, c'était chaud, je suis quelqu'un de combat. » Écrivez : (1) une reformulation neutre ; (2) trois relances STAR ; (3) une relance que vous n'utilisez pas, parce qu'inductive ou hors sujet."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Reformulation : « Vous avez participé à une situation où un client important était en risque, avec votre équipe. Je souhaite préciser votre rôle. » Relances : « Quel était le risque, pour qui, à quelle échéance ? » « Quelle décision avez-vous prise, vous, distincte de l'équipe ? » « Quel a été le résultat mesurable, et comment l'avez-vous su ? » Relance à écarter : « Vous êtes battant, c'est pour ça que ça a marché, non ? » ou « Ce client, c'était un copain ? »"
            }
          ],
          "position": 1
        },
        {
          "title": "Gérer le temps sans sacrifier l'équité",
          "description": "Tenir une durée cible, arbitrer ce que l'on coupe, et éviter qu'un candidat parle 70 minutes tandis que le suivant en a 25.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez construire un minuteur mental par bloc, interrompre avec courtoisie, décider ce qui est non négociable (critères essentiels, questions du candidat, clôture) et reporter plutôt que bricoler un entretien inégal."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le temps n'est pas un détail de planning. C'est un facteur d'équité. Deux candidats comparés sur une grille unique n'ont pas été évalués de la même façon si l'un a disposé du double de minutes sur les compétences essentielles. L'entreprise n'a pas d'obligation légale de fixer une durée identique à la minute près. Elle a une obligation de ne pas discriminer (L. 1132-1) et une exigence professionnelle de comparabilité. Une durée cible, tenue, est une bonne pratique. Une durée qui s'allonge « parce que le feeling est bon » est un biais.\n\nGérer le temps, c'est aussi respecter le candidat et les personnes qui attendent. Un débordement chronique signale que le guide est trop chargé, que vous n'interrompez pas, ou que le manager a pris le contrôle. L'interruption professionnelle n'est pas un affront. C'est une phrase de cadrage : « Je vous arrête pour que nous ayons le temps du cas pratique, qui est important pour le poste. » Les candidats sérieux le comprennent. Ceux qui ne supportent aucun cadre vous donnent une information sur le travail en agence, à condition de ne pas en faire un jugement de personnalité hors critère.\n\nCe que vous ne coupez pas : l'ouverture (courte), au moins un STAR par critère essentiel, au moins un situationnel critique, les questions du candidat (réduites, pas supprimées), la clôture. Ce que vous pouvez compresser : le récit de parcours trop long, les anecdotes hors critère, le second situationnel, les questions de curiosité. Ce que vous ne faites pas : supprimer les questions du candidat pour « finir les vôtres », ou improviser quinze minutes de conversation parce que vous avez de l'avance.\n\nLe retard du candidat n'autorise pas un entretien humiliant de quinze minutes « pour lui apprendre ». Soit le créneau restant permet les blocs essentiels, soit vous replanifiez. Le retard du manager ne se rattrape pas en parlant plus vite sur un ton d'interrogatoire. Vous partez sur le cadre, vous réduisez le bloc qu'il devait animer, ou vous replanifiez le bloc métier.\n\nEnfin, le temps de prise de notes fait partie du temps d'entretien. Si vous écrivez sans écouter, vous perdez des faits. Si vous n'écrivez pas pour « gagner du temps », vous perdrez la comparaison le soir. Notez des mots-clés en séance, complétez cinq minutes à chaud pendant que le candidat sort, avant le débrief."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Écrivez les minutes sur le guide : 0-5 cadre, 5-13 parcours, etc. Une montre visible. À mi-séance, un point silencieux : suis-je dans le bon bloc ?\n\nPhrases d'arbitrage, préparées : « Nous avons cinq minutes sur ce thème, puis nous passons au cas. » « Je synthétise ce que j'ai noté, dites-moi si je me trompe, puis nous avançons. »\n\nSi le manager déborde : « [Prénom], je propose que l'on garde dix minutes pour les questions de [candidat], comme convenu. » C'est votre rôle de cadre, annoncé en amont.\n\nSi visio + incident technique de plus de cinq minutes : proposer de poursuivre au téléphone sur le même guide, ou reporter. Ne pas compter l'incident comme une « mauvaise gestion du stress » sauf si le poste est précisément de gérer une crise technique et que vous l'évaluez à critères constants, ce qui est rare et doit être prévu."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet, entretien de 40 minutes pour un consultant junior. À la minute 25, le candidat est encore sur son stage de M1. Le consultant dit : « Je retiens votre mission de cartographie. Pour le poste, j'ai besoin d'une situation de priorisation, puis d'un cas, puis de vos questions. » L'entretien se termine à 41 minutes. Le candidat suivant n'est pas reculé. La grille du premier n'est pas plus riche en adjectifs ; elle l'est en un STAR utile."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Laisser parler par peur d'être impoli, puis ruminer que « c'était trop long » dans la grille, ce qui n'est pas un critère.\n\nCouper le candidat réservé et jamais le candidat senior. Biais de statut.\n\nEnchaîner deux entretiens sans vide. Vous recyclez des questions et des humeurs.\n\nAnnoncer 60 minutes dans la convocation et faire 25. Le candidat a organisé sa journée sur votre parole."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui doit partir à l'heure pile (garde d'enfant, autre entretien, transport). Vous ne demandez pas le motif intime. Vous tenez l'horaire. Si le motif surgit, vous n'en faites pas un critère (situation de famille, L. 1132-1).\n\nJournée de fournée (six entretiens) : pauses réelles, même script, eau, interdiction de dire au dernier « on a déjà quelqu'un d'excellent ce matin ».\n\nTraduction ou aménagement de temps : le temps supplémentaire porte sur l'expression, pas sur un critère plus clément. Documentez l'aménagement, pas le diagnostic."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Il vous reste 12 minutes. Il vous manque le situationnel éthique (critère pondéré 3), les questions du candidat, et la clôture. Le manager veut « encore un peu de parcours ». Que dites-vous, et dans quel ordre finissez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous dites : « Nous avons 12 minutes. Je propose le cas éthique (5 à 6 minutes), puis vos questions (4 minutes), puis la suite du process. Le parcours, nous l'avons suffisamment pour aujourd'hui. » Le critère pondéré 3 passe avant le confort du récit. Les questions du candidat ne sautent pas. La clôture tient en 90 secondes. Vous ne promettez pas un second entretien pour rattraper le parcours sauf si c'est le process réel, offert selon des règles claires, pas selon le feeling."
            }
          ],
          "position": 2
        },
        {
          "title": "Situations difficiles : stress, silences, monopolisation, réponses préparées, contradictions",
          "description": "Conduire l'entretien lorsque le candidat se fige, parle trop, récite, ou se contredit, sans basculer dans le piège ou la compassion hors cadre.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez reconnaître cinq situations fréquentes et appliquer une conduite : stress invalidant, candidat peu bavard, candidat trop bavard, réponses trop préparées, contradictions entre CV et oral. Vous resterez dans l'évaluation professionnelle, sans question de santé et sans humiliation."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un entretien provoque un stress normal. Votre rôle n'est pas de le faire disparaître, ni de le transformer en épreuve de résistance. Le stress devient un problème d'évaluation lorsqu'il empêche d'obtenir des faits : voix bloquée, réponses vides, rire nerveux qui n'avance pas. Vous pouvez alors nommer le cadre, proposer une question plus étroite, offrir une minute, rappeler que des notes sont normales. Vous ne demandez pas « vous êtes suivi ? », « vous êtes anxieux dans la vie ? ». L'état de santé est un critère protégé (L. 1132-1). Le poste peut exiger de parler à des clients sous tension : testez-le par un situationnel professionnel, pas par un diagnostic.\n\nLe candidat peu bavard n'est pas un candidat sans compétence. Il peut être précis, prudent, ou simplement peu entraîné à l'exercice. Votre levier est la question étroite, l'exemple du CV, le situationnel. Si après deux relances concrètes il n'y a toujours aucun fait, vous notez « preuves insuffisantes sur ce critère », pas « personnalité introvertie ». L'introversion n'est pas un critère d'embauche.\n\nLe candidat trop bavard n'est pas « bon en relation client » par le seul volume de parole. En agence, monopoliser empêche d'écouter. Vous interrompez avec un résumé factuel et une question fermée de cadrage, puis une ouverte ciblée. Si la monopolisation continue, c'est une information pour le critère écoute, documentée par des faits de séance, pas par de l'agacement.\n\nLes réponses préparées (« mon défaut, c'est que je suis trop perfectionniste ») sont normales. Elles ne sont pas une fraude. Votre relance casse le slogan : « Prenez la dernière fois où ce perfectionnisme a eu un effet sur un délai. » Si le candidat ne quitte jamais l'abstraction, vous manquez de preuves. Ce n'est pas à vous de lui inventer un exemple.\n\nLes contradictions (dates, titres, résultats) se traitent comme des clarifications, pas comme un cross-examination. « Sur le CV, l'équipe est de cinq personnes ; à l'instant vous dites deux. Pouvez-vous préciser le périmètre ? » Le candidat peut avoir simplifié, arrondi, ou enjolivé. Vous notez l'écart et la qualité de l'explication. Un mensonge caractérisé sur une habilitation, un diplôme requis ou un emploi est un fait grave, à traiter avec les RH, pas à « coincer » en public pour marquer un point. Vous n'inventez pas de piège. Vous demandez une précision, une fois, calmement."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Stress : phrase courte (« Nous n'attendons pas une performance oratoire. Prenons un exemple précis de votre CV, ligne 3. »). Eau, silence. Si cela persiste, situationnel écrit éventuellement, selon aménagement et politique interne.\n\nPeu bavard : question de journée type, puis STAR sur un incident. Éviter « vous ne parlez pas beaucoup ».\n\nTrop bavard : « Je synthétise en une phrase… Est-ce exact ? Nous passons à… » Horloge visible.\n\nPréparé : « Concrètement, mardi dernier… » Exiger un lieu, un interlocuteur (fonction, pas nom si confidentiel), une action, un chiffre ou un livrable.\n\nContradiction : pointer les deux versions, demander la précision, noter, ne pas sourire d'un air de victoire, passer à la suite. Alerter RH si l'élément est constitutif du poste (diplôme exigé, habilitation)."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Services, poste de gestionnaire paie junior. La candidate récite une définition du bulletin. Le recruteur : « Prenez un bulletin que vous avez contrôlé en stage. Quelle anomalie, qu'avez-vous fait, qui a validé, quel était l'écart ? » Elle décrit alors une prime mal paramétrée, un signalement au tuteur, une correction. La réponse préparée a cédé. Sans cette relance, la grille aurait noté « bonne théorique » sans preuve d'action."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Ironiser (« vous avez appris la leçon par cœur ? »). Vous fermez l'entretien et vous vous affichez comme juge.\n\nCompléter les silences par vos propres exemples, que le candidat n'a plus qu'à approuver.\n\nTransformer une contradiction de date en soupçon moral général (« on ne peut pas lui faire confiance »).\n\nOffrir un café et une conversation personnelle pour « détendre » un candidat stressé, puis noter des éléments familiaux entendus."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat qui pleure : pause, mouchoir, proposition de reporter. Pas d'enquête sur la cause. Reprise sur un thème factuel ou clôture bienveillante si la personne ne peut continuer. Le report n'est pas un KO.\n\nCandidat agressif ou méprisant : cadre une fois (« nous restons sur un échange professionnel »). Si cela continue, clôture anticipée, notes factuelles, information au responsable. La sécurité prime.\n\nCandidat qui filme sans accord : rappel de la confidentialité et de la politique interne. Vous pouvez refuser de poursuivre si l'enregistrement n'est pas autorisé. Vous ne saisissez pas le téléphone."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le CV indique « responsable d'équipe, 8 personnes, 2023-2025 ». À l'oral : « J'aidais le manager, on était deux sur le planning. » Rédigez le dialogue de clarification (4 répliques) et la mention à porter dans la grille."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Recruteur : « Je souhaite aligner deux éléments. Le CV mentionne une responsabilité d'équipe de huit personnes. Vous indiquez une aide au planning à deux. Quel était votre rôle officiel, vos actes (recrutement, entretiens, sanctions, planning, reporting) ? » Candidat : précise. Recruteur : « Donc le recrutement et l'évaluation restaient au manager, et vous réalisiez le planning hebdomadaire. C'est exact ? » Mention grille : « Périmètre encadrement à confirmer : planning oui, évaluation non, titre CV surdimensionné ; explication cohérente / incohérente » selon la réponse. Pas de mention « menteur »."
            }
          ],
          "position": 3
        },
        {
          "title": "Questions du candidat, prise de notes et compte rendu",
          "description": "Répondre sans vendre un poste fictif, noter des faits exploitables, rédiger un compte rendu confidentiel et comparable.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez gérer le temps des questions du candidat, prendre des notes factuelles pendant et après la séance, et rédiger un compte rendu utile au manager, compatible avec le RGPD et avec la confidentialité des résultats (L. 1221-8)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Les questions du candidat ne sont pas un bonus de fin de séance. Elles font partie de l'évaluation professionnelle : compréhension du poste, priorités, réalisme, préparation. Elles font aussi partie de l'information due : un candidat qui découvre après coup des horaires, un lieu ou une rémunération sans rapport avec ce qui a été dit a été mal informé. L'article L. 5331-3 interdit les allégations fausses ou trompeuses dans les offres d'emploi. À l'oral, la même exigence d'honnêteté s'impose. Si vous ne savez pas, vous le dites et vous écrivez après. Vous n'inventez pas une « belle culture » pour conclure en beauté.\n\nLa prise de notes est un traitement de données personnelles. Vous notez le nécessaire à l'évaluation : faits, exemples, écarts, questions du candidat, suite proposée. Vous ne notez pas « look », « accent », « trop vieux », « elle a parlé de son fils ». Ces mentions, même privées, peuvent révéler un critère illicite et se retourner contre l'entreprise. Les résultats des méthodes d'aide au recrutement sont confidentiels (L. 1221-8). Un compte rendu n'est pas un fil de discussion d'équipe, ni une pièce jointe envoyée à tout le service.\n\nUn bon compte rendu est lisible par quelqu'un qui n'était pas dans la salle : contexte (poste, date, durées, participants), faits par critère, notes de grille, points de vigilance professionnels, recommandation d'étape (poursuivre / réserve / arrêter) avec motif lié au poste. Il n'est pas un roman. Il n'est pas un SMS. La recommandation d'étape n'est pas une promesse d'embauche.\n\nLe candidat n'a pas d'obligation légale générale d'obtenir la motivation détaillée d'un refus. Il a des droits sur ses données (accès, notamment, dans le cadre du RGPD). Vos notes doivent pouvoir être assumées si un droit d'accès s'exerce, selon les modalités internes et les exceptions éventuelles. Écrivez dès le départ comme si le texte pouvait être relu. Ce n'est pas une consigne de langue de bois : c'est une consigne de faits professionnels.\n\nLa conservation des notes suit la politique interne et le référentiel CNIL sur les durées RH (vérifié dans legal-sources.json, 13/10/2026) : le candidat non retenu n'a pas vocation à rester en base active indéfiniment ; un archivage intermédiaire à des fins probatoires n'est pas une CVthèque de travail. Vous rangez le CR dans l'outil prévu, pas dans votre messagerie personnelle."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pendant : mots-clés, citations courtes, chiffres, périmètres. Une marge « à clarifier ». Pas de smiley, pas de diagnostic.\n\nJuste après : 5 à 8 lignes à chaud, grille terminée, avant de parler au manager. Puis débrief. Puis CR dans le modèle interne le jour même.\n\nQuestions du candidat : répondre dans le cadre validé (fiche de poste, fourchette si la politique le permet — indiquer le salaire dans l'offre n'est pas, au 13/10/2026, une obligation interne française consolidée, directive européenne en transposition). Ne pas improviser d'avantages. Noter les questions : elles éclairent parfois un malentendu sur le poste.\n\nDiffusion du CR : manager du poste, RH selon process, pas le futur collègue « pour avis look and feel ». Mention confidentielle."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI industrielle, entretien d'un coordinateur qualité. CR du recruteur : « 3 octobre, 55 min, présentiel, avec la responsable qualité. Faits : a décrit un non-conformité client, a bloqué un lot, a rédigé une 8D avec le fournisseur, résultat : réclamation close en 12 jours. Situationnel pic d'audits : a priorisé par risque, pas par ordre d'arrivée. Question du candidat : rythme des audits internes et formation ISO — en lien avec le poste. Note éthique 3/4, priorisation 3/4, pédagogie 2/4 (exemple encore scolaire). Recommandation : second entretien technique. » Pas de phrase sur l'apparence ou l'âge."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Noter uniquement ce qui cloche. Le CR devient un réquisitoire inutilisable pour convaincre un manager, et biaisé.\n\nCopier-coller le CR du candidat précédent en changeant le nom. Erreur grave, mélange de données.\n\nPromettre une réponse « dans la semaine » sans l'écrire dans l'outil de suivi. La promesse orale se perd ; le candidat vit un ghosting.\n\nLaisser les feuilles de notes sur l'imprimante du plateau."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager qui veut un avis oral « juste deux minutes » et refuse le CR. Vous rédigez quand même les faits dans l'outil : la mémoire orale n'est pas un dossier.\n\nCandidat qui demande « alors, c'est oui ? » : rappel du process et de la date de communication. Pas de verdict.\n\nDemande d'accès aux notes : vous ne répondez pas seul. Vous transmettez à la personne ou au process RGPD interne."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir de ces notes brutes : « motivé +++ / un peu bof sur Excel / a parlé de sa mère malade / look ok / STAR client 3/4 / cas crédit : a dit qu'il vendrait quand même si objectif ». Rédigez le CR professionnel (10 lignes) : ce que vous gardez, ce que vous supprimez, ce que vous reformulez, et l'alerte éthique."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "À supprimer : look, mère malade (santé / famille, critères protégés, hors L. 1221-6). À reformuler : « motivé +++ » devient des faits (questions sur la formation produits, mobilité vers ce réseau). « Un peu bof sur Excel » devient : « n'a pas illustré de suivi de portefeuille sur tableur ; à tester si le poste l'exige, avec information préalable si test. » Alerte : la réponse sur le crédit (« vendrait quand même ») est un fait grave pour l'éthique commerciale, à reporter tel quel, avec la question posée. Recommandation d'étape : réserve forte ou arrêt selon la pondération du critère éthique, pas selon le look."
            }
          ],
          "position": 4
        },
        {
          "title": "Simulations 1 à 3 — junior peu d'exemples, profil qui monopolise, recentrage sur le personnel",
          "description": "Trois dialogues complets à analyser : obtenir des preuves malgré le manque d'exemples, recadrer un expert bavard, ramener un candidat qui parle de sa vie privée.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 35,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez identifier, dans un dialogue réel, les relances qui produisent des faits et celles qui aggravent la situation. Vous attacherez une conduite à trois profils fréquents : junior motivé, expérimenté monopolisant, candidat centré sur le personnel."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La conduite d'entretien s'apprend moins par des listes de conseils que par l'observation de tours de parole. Les trois simulations ci-dessous se déroulent sur le même poste fictif : chargé de clientèle, Banque des Vallées, agence de détail. Le guide est celui du module précédent. Seule la conduite du recruteur change la qualité des preuves. Lisez-les comme un entraînement, pas comme du théâtre : chaque réplique du recruteur est un choix que vous pourrez copier ou écarter.\n\nLe junior motivé manque souvent d'exemples « identiques ». Ce n'est pas un KO si le poste est ouvert aux débutants. Le piège est double : se contenter de l'enthousiasme, ou humilier par un STAR impossible (« une négociation de crédit de 200 k€ »). Le bon levier est le transférable : magasin, centre d'appels, association, stage, plus un situationnel bancaire simple.\n\nLe profil expérimenté qui monopolise produit une illusion de richesse. Vous sortez impressionné et votre grille est vide. L'interruption n'est pas un manque de respect dû au senior. C'est la condition pour tester l'écoute, l'éthique et la pédagogie, qui ne se déduisent pas d'un titre.\n\nLe candidat qui ramène tout au personnel n'est pas nécessairement de mauvaise foi. Il a appris que « l'authenticité » se raconte. Votre devoir est de ne pas collecter la vie privée, de ne pas relancer sur la famille ou la santé, et de revenir au travail. Si vous suivez le récit intime « pour créer du lien », vous sortez de L. 1221-6 et vous exposez un critère L. 1132-1."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour chaque simulation : lisez une première fois sans juger. Relisez en marquant R+ (relance utile), R- (relance nocive), L (risque légal). Puis comparez avec le commentaire de la correction de cette leçon. En situation réelle, une seule relance corrective à la fois."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les trois dialogues se passent en présentiel, 15 à 20 minutes d'extrait, recruteur junior seul ou avec directeur. Ils sont fictifs et pédagogiques."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 1 — Junior motivé, peu d'exemples\nPoste : chargé de clientèle, banque de détail (fictif)\nCandidat : Lina M., 24 ans, 18 mois en centre d'appels énergie, stage en magasin\nDurée de l'extrait : minutes 12 à 28\n\nRECRUTEUR. — Lina, je vous ai présentée le déroulé. Je voudrais une situation\noù un client était mécontent. Contexte, votre rôle, vos actions, le résultat.\nLINA. — Je suis vraiment super motivée par la banque, j'ai toujours voulu\naider les gens à gérer leur argent, je suis quelqu'un de très à l'écoute.\nRECRUTEUR. — Je note la motivation. Là, j'ai besoin d'une situation réelle,\nmême hors banque. Par exemple au centre d'appels. Un client mécontent.\nLINA. — Euh… on en avait tout le temps. Je ne sais pas lequel prendre.\nRECRUTEUR. — Prenons la semaine dernière, ou la plus récente dont vous\nvous souvenez. Qui appelait, pour quoi, que deviez-vous faire ?\nLINA. — Une dame, sa facture avait doublé. Elle criait. Moi je dois suivre\nle script, proposer un échéancier, et si ça dépasse je passe au plus senior.\nRECRUTEUR. — Très bien. Dans cet appel : qu'avez-vous dit, concrètement,\naprès « elle criait » ? Pas le script en général, vos phrases à vous.\nLINA. — J'ai répété que je comprenais, j'ai regardé la conso, il y avait un\nrattrapage. Je lui ai proposé de lisser sur trois mois. Elle a accepté.\nRECRUTEUR. — Quel était votre rôle distinct du senior ? Avez-vous transféré ?\nLINA. — Non, j'ai géré. Le senior n'est intervenu que pour valider l'échéancier\nau-dessus d'un seuil. J'ai envoyé le mail de confirmation.\nRECRUTEUR. — Résultat : la cliente a-t-elle rappelé ? Un indicateur ?\nLINA. — Pas de rappel. On a une enquête SMS. Elle a mis 4 sur 5. J'étais\ncontente. Après, en banque, je n'ai jamais vendu de livret, j'ai peur de\nne pas savoir.\nRECRUTEUR. — Nous testerons cela tout à l'heure avec un cas. Ce n'est pas\nun reproche. Je retiens : reformulation, diagnostic simple, offre d'échelonnement,\nvalidation du seuil, trace écrite, résultat 4/5. Passons à une situation\noù vous avez dû dire non, ou indiquer une limite.\n\nCOMMENTAIRE PÉDAGOGIQUE (ne pas lire au candidat)\nR+ : refus du slogan ; ancrage temporel ; distinction rôle / senior ; résultat.\nR- évitées : « Vous n'avez pas d'exemple bancaire, c'est embêtant. »\nPreuve transférable obtenue. Le situationnel éthique reste nécessaire."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 2 — Profil expérimenté qui monopolise\nCandidat : Karim B., 41 ans, 12 ans en assurance, vise la banque de détail\nExtrait : minutes 8 à 26 — directeur d'agence présent, silencieux au début\n\nRECRUTEUR. — Karim, pouvez-vous présenter votre parcours en lien avec\nle conseil client, en cinq minutes, puis nous prendrons des situations.\nKARIM. — Bien sûr, alors je commence en 2006, non, 2008, au Sénégal non\npardon en région parisienne, j'ai fait la fac, ensuite un premier CDD…\n[quatre minutes plus tard, toujours sur 2012]\nRECRUTEUR. — Je vous arrête. Je retiens le fil. Pour ce poste, j'ai besoin\ndes cinq dernières années et d'une situation de conseil sous contrainte.\nKARIM. — Oui mais pour comprendre ma valeur il faut le début, j'ai un\nréseau énorme, j'ai même conseillé des chefs d'entreprise, je parle bien,\nen agence ça va cartonner, d'ailleurs votre vitrine…\nRECRUTEUR. — Le réseau et la vitrine, nous y viendrons si utile. Là,\nune situation : un assuré mécontent, vous, actions, résultat. Deux minutes.\nKARIM. — Tous mes clients sont contents, c'est pour ça que je veux changer,\nje m'ennuie, la banque c'est plus noble. Vous, vous faites ce métier depuis\ncombien de temps, vous êtes un peu jeune non ?\nRECRUTEUR. — Je conduis l'entretien sur le poste. Je ne commente pas\nmon âge. Situation, s'il vous plaît : un client mécontent.\nKARIM. — Bon. Un sinistre auto, refus de garantie, le client a hurlé\nau téléphone vingt minutes. J'ai laissé parler, j'ai relu le contrat, la\ngarantie s'appliquait partiellement, j'ai proposé un geste, le manager\na validé, le client est resté. Voilà, c'est du classique, je peux parler\nvingt minutes de ça.\nRECRUTEUR. — Qu'avez-vous dit, mot pour mot à peu près, sur le refus\npartiel ? Et qu'avez-vous écrit ensuite ?\nKARIM. — Je lui ai dit la vérité, c'est tout. Les écrits c'est le back-office.\nRECRUTEUR. — Donc l'explication contractuelle et la trace n'étaient pas\nde votre fait. Je note. Directeur, je vous propose le cas crédit, cinq minutes,\npuis les questions de Karim. Karim, je vais devoir vous interrompre si\nnous sortons du cas : nous avons un horaire, comme en agence.\n\nDIRECTEUR (après le cas, à part, plus tard) : « Il en jette. »\nRECRUTEUR (débrief) : « Volume de parole élevé. Preuves d'écrits faibles.\nMise en cause de l'âge du recruteur. Écoute à tester : il n'a pas reformulé\nle client dans l'exemple. Pas de verdict sur le “réseau”. »\n\nCOMMENTAIRE\nR+ : interruption datée ; refus de commenter l'âge (L. 1132-1, aussi pour\nle recruteur comme climat) ; exigence d'action et de trace ; protection du temps.\nLe titre de 12 ans n'a pas remplacé la grille."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 3 — Le candidat ramène tout au personnel\nCandidate : Sophie T., 29 ans, vendeuse, reconversion banque\nExtrait : minutes 10 à 24\n\nRECRUTEUR. — Racontez une situation où vous avez dû prioriser plusieurs\ndemandes de clients.\nSOPHIE. — Alors déjà, moi, dans la vie, je suis une maman, donc je sais\nce que c'est d'être débordée, mon fils a des rendez-vous, et là en plus\nmon père est malade, donc l'organisation je connais, hein.\nRECRUTEUR. — Je vous remercie. Nous restons sur le cadre professionnel.\nAu magasin : deux clientes, un téléphone, une caisse. Que faites-vous ?\nSOPHIE. — Oui mais c'est pareil, c'est ma vie qui m'a appris. D'ailleurs\nest-ce que le poste est compatible avec une famille ? Parce que je ne\nvoudrais pas cacher, je veux un employeur humain.\nRECRUTEUR. — Je peux vous confirmer les horaires d'agence tels qu'ils\nsont dans la fiche de poste, identiques pour toutes les personnes du\nréseau. Je ne vous questionne pas sur votre situation de famille, et\nelle n'entre pas dans l'évaluation. Revenons à la priorisation en magasin.\nSOPHIE. — D'accord… Il y avait les soldes. Une cliente essayait, une\nautre s'impatientait à la caisse, le téléphone. J'ai dit à la cabine\n« j'arrive dans cinq minutes », j'ai encaissé, j'ai rappelé. La cliente\ncabine est restée.\nRECRUTEUR. — Quel critère avez-vous utilisé pour l'ordre : attente,\nencaissement, promesse ?\nSOPHIE. — La caisse, parce que la file se voyait. Après j'ai tenu la\npromesse des cinq minutes. C'est comme avec un enfant, en fait…\nRECRUTEUR. — Je retiens le critère « file visible » et la promesse tenue.\nPas d'analogie personnelle nécessaire. Passons à un cas d'agence.\n\nPLUS TARD, QUESTIONS DE SOPHIE\nSOPHIE. — Vous, vous avez des enfants ? Ça aide de parler à quelqu'un\nqui comprend.\nRECRUTEUR. — Je ne parle pas de ma vie personnelle en entretien. Vos\nquestions sur le poste, la formation, l'équipe sont les bienvenues.\n\nCOMMENTAIRE\nL évité : relance sur l'enfant, le père malade, la « compatibilité famille ».\nInformation honnête : horaires du poste, pas un jugement de parentalité.\nLa situation de famille n'est pas un critère (L. 1132-1)."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Dans le cas Lina : conclure « trop junior » sans situationnel. Dans le cas Karim : se laisser impressionner et oublier l'éthique d'écrits. Dans le cas Sophie : « moi aussi j'ai un père malade » pour créer du lien."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Le manager rit des anecdotes personnelles de Sophie et relance. Vous reprenez la parole sur le cadre, même inconfortable. Le candidat Karim s'adresse au directeur pour court-circuiter le junior : le directeur, briefé, renvoie au recruteur sur le timing."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Reprenez la première réponse de Lina (« je suis quelqu'un de très à l'écoute »). Rédigez une relance trop dure, une relance trop molle, et la relance que vous retenez. Justifiez."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Trop dure : « Ça ne veut rien dire, vous n'avez rien vécu. » Humiliation, aucun fait. Trop molle : « C'est super, on sent que vous aimez les gens. » Vous notez de la sympathie. Relance retenue : celle de la simulation — ancrage sur un appel réel, rôle, actions, résultat. Elle respecte la personne et produit une preuve transférable."
            }
          ],
          "position": 5
        },
        {
          "title": "Simulations 4 et 5 — visio avec imprévu, question illicite du manager",
          "description": "Deux dialogues complets : maintenir un entretien à distance malgré un incident, et recadrer un manager qui pose une question illicite.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 32,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez poursuivre ou reporter un entretien à distance en cas d'imprévu technique ou environnemental, sans en faire un critère sauvage, et recadrer publiquement une question illicite posée par un manager, puis documenter le débrief."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'entretien à distance n'est pas un entretien au rabais. C'est le même guide, la même grille, le même droit. L'imprévu (coupure, enfant qui entre, voisinage bruyant, outil qui plante) est plus fréquent. Il n'autorise pas une enquête sur le logement, la famille ou les moyens. Le lieu de résidence est un critère protégé (L. 1132-1). La situation de famille également. Vous traitez l'imprévu comme un incident de canal : tester le plan B (téléphone), proposer une pause, reporter si l'évaluation n'est plus possible. Vous n'en déduisez pas une « incapacité à travailler en remote » sauf si le poste est réellement à distance et que vous aviez prévu d'évaluer les conditions de travail à distance de façon professionnelle, identique pour tous, sans visiter la vie privée.\n\nLa cinquième simulation est non négociable dans ce métier. Un manager peut, par habitude, poser une question illicite : grossesse, projets d'enfants, origine, santé, syndicat, âge. Votre juniorité hiérarchique ne vous retire pas le devoir de recadrer. L'article L. 1132-1 protège le candidat. L. 1221-6 limite les informations. Si vous laissez la question, le candidat se sent tenu de répondre, et la réponse, même « pour rire », peut influencer. Le recadrage se fait immédiatement, de façon courte, factuelle, sans humilier le manager en public plus que nécessaire, mais sans ambiguïté. Après la séance, vous documentez et vous alertez votre responsable si le manager conteste.\n\nRecadrer n'est pas un débat juridique de dix minutes devant le candidat. C'est : « Cette question n'entre pas dans l'entretien d'embauche. Revenons au poste. » Puis vous posez une question professionnelle de substitution si le manager visait, maladroitement, une exigence réelle (horaires, habilitation). Le candidat ne doit pas avoir à « se justifier de ne pas être enceinte ».\n\nCes deux simulations montrent aussi la prise de notes : l'incident visio se note comme incident de canal, pas comme défaut du candidat. La question illicite se note dans le débrief interne, pas dans le CR diffusé comme un avis sur la candidate."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Visio : lien + téléphone de secours dans la convocation. Si coupure > 2 minutes, bascule téléphone, même guide. Si l'environnement empêche d'entendre : pause ou report, proposition d'un créneau, sans demander qui est à la maison.\n\nQuestion illicite : interruption immédiate, phrase préparée, question métier de remplacement, poursuite. Débrief manager le jour même. Pas de rire complice."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les dialogues suivants sont fictifs. Le poste reste chargé de clientèle, Banque des Vallées."
            },
            {
              "block_type": "code",
              "content": "SIMULATION 4 — Entretien à distance avec imprévu\nCandidat : Julien R., 31 ans, conseiller en boutique télécom\nVisio — recruteur seul — minute 18\n\nRECRUTEUR. — Julien, nous prenons le cas de la file d'attente. Samedi…\n[l'image se fige, le son coupe 20 secondes]\nRECRUTEUR. — Julien, vous me réentendez ? Je n'ai plus l'image.\nJULIEN. — Oui, désolé, la connexion… attendez, il y a des travaux, et\nma colocataire vient d'entrer, je change de pièce… [bruit de porte,\nune voix au loin]\nRECRUTEUR. — Pas de problème. Nous pouvons basculer sur le téléphone,\nnuméro que vous avez dans la convocation. Je vous appelle dans une minute.\nMême entretien, je coupe la visio.\nJULIEN. — OK. [bascule téléphone, 90 secondes plus tard]\nRECRUTEUR. — Nous reprenons au cas file d'attente. Je n'ai pas besoin\nde détails sur votre logement. Êtes-vous en mesure de parler dix minutes\nsans coupure, ou préférez-vous reporter ?\nJULIEN. — On peut faire dix minutes, après c'est plus calme si besoin.\nRECRUTEUR. — Très bien. Cas : file de cinq personnes, rendez-vous dans\ndix minutes, téléphone. Vos actions.\nJULIEN. — J'informe la file du temps d'attente, je tiens le rendez-vous,\nje rappelle. En boutique on faisait ça.\nRECRUTEUR. — Relance : que dites-vous, concrètement, à la personne\nqui proteste dans la file ?\n[…]\nCLÔTURE. — Nous avons perdu environ quatre minutes de technique. Ce\nn'est pas un critère. La suite du process inchangée, je vous écris\nd'ici jeudi. Si vous préférez un créneau visio de rattrapage pour le\ndernier cas, dites-le-moi aujourd'hui.\n\nNOTE D'ENTRETIEN (extrait)\nIncident canal : coupure visio, bascule téléphone, 4 min perdues.\nPas de commentaire sur le logement ni la colocataire.\nCas priorisation : informer la file, tenir le RDV, rappel — conforme.\nOffre de rattrapage du dernier cas si le candidat le demande.\n\nCOMMENTAIRE\nR+ : plan B annoncé ; refus d'enquêter sur le logement ; choix laissé\nentre poursuivre et reporter ; incident non transformé en KO « remote ».\nR- évitées : « Vous n'avez pas un endroit calme ? Vous vivez avec qui ? »"
            },
            {
              "block_type": "code",
              "content": "SIMULATION 5 — Le manager pose une question illicite, le junior recadre\nCandidate : Nadia H., 27 ans, 3 ans en boutique bancaire concurrente\nPrésentiel — recruteur junior + directeur d'agence — minute 35\nLe directeur n'a pas respecté le brief.\n\nDIRECTEUR. — Bon, Nadia, on va parler vrai. Le poste est prenant, les\nsamedis, les objectifs. Vous avez quel âge déjà ? Et puis, vous comptez\navoir des enfants bientôt ? Parce que la dernière, elle est partie en\ncongé et on a galéré.\nNADIA. — Euh… j'ai 27 ans, et pour les enfants, je… je ne sais pas,\nje veux ce poste, je…\nRECRUTEUR. — Je vous interromps. Nadia, vous n'avez pas à répondre\nà ces questions. L'âge et les projets familiaux ne font pas partie\nde l'entretien et n'entrent pas dans notre évaluation.\n(au directeur, calme, sans sourire de connivence)\nNous restons sur les exigences du poste, comme convenu : horaires\nd'agence, samedis travaillés selon le planning publié, objectifs\net cadre. Nadia, je reformule de façon professionnelle : la fiche\nde poste prévoit [horaires]. Êtes-vous en mesure de travailler selon\nces horaires, tels qu'ils sont décrits ?\nNADIA. — Oui. Les samedis du planning, j'ai déjà ce rythme.\nRECRUTEUR. — Merci. Directeur, votre cas sur le crédit et le reste\nà vivre, s'il vous plaît. Ensuite les questions de Nadia.\nDIRECTEUR. — Bon, d'accord… Alors le cas crédit…\n\nCLÔTURE (recruteur)\n« Merci Nadia. La suite : nous vous écrivons d'ici vendredi. Les\néléments personnels évoqués par erreur ne sont pas conservés comme\ncritères. »\n\nDÉBRIEF IMMÉDIAT SANS LA CANDIDATE\nRECRUTEUR. — La question sur l'âge et les enfants est illicite\n(L. 1132-1 : âge, situation de famille, grossesse). Elle n'a pas\nde lien nécessaire avec l'emploi (L. 1221-6). Je ne la reporterai\npas dans l'évaluation. Si le besoin était les horaires, la question\nde substitution suffit, posée à tous.\nDIRECTEUR. — Tu m'as recadré devant elle, c'est gênant.\nRECRUTEUR. — Ne pas recadrer était plus gênant pour elle et pour\nl'entreprise. Je documente le brief non respecté à [responsable RH].\nLa candidate a été ramenée au poste. Sa réponse sur les enfants\nn'est pas dans la grille.\n\nNOTE INTERNE RH (pas dans le CR manager large)\nQuestion illicite posée par le directeur à 10 h 42, recadrage immédiat,\ncandidate informée qu'elle n'avait pas à répondre. Grille : critères\nprofessionnels uniquement. Alerte process : nouveau brief obligatoire\navant tout autre entretien commun.\n\nCOMMENTAIRE\nLe recadrage est public, court, légal, puis substitution professionnelle.\nPas de débat de dix minutes. Pas de rire. Pas de « c'était pour rire ».\nLe junior documente. Il ne laisse pas le manager « finir sa question »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "En visio : commenter l'intérieur du logement ou demander de se déplacer « pour voir si vous êtes sérieux ». Après une question illicite : rester silencieux, ou dire « vous n'êtes pas obligée de répondre » tout en laissant le manager insister. Cette fausse liberté n'annule pas le caractère illicite."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Le manager récidive dans la même séance : seconde interruption, clôture anticipée si besoin, appel au responsable avant tout autre candidat du jour.\n\nLe candidat répond spontanément « je suis enceinte » : vous remerciez, vous indiquez que cela n'entre pas dans l'évaluation, vous ne notez pas, vous poursuivez les critères du poste. La grossesse est un critère protégé.\n\nImprévu visio qui révèle un aidant familial : même conduite que Sophie, simulation 3 : horaires du poste, pas d'enquête."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le directeur, après la simulation 5, vous demande d'« arrondir » dans le CR : « Candidate réservée sur son avenir familial, à revoir. » Rédigez (1) la phrase que vous écrivez vraiment dans le CR métier ; (2) la phrase que vous écrivez à votre responsable RH."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "CR métier : uniquement les faits professionnels (cas crédit, pédagogie, horaires acceptés tels que décrits). Aucune mention de l'avenir familial. Phrase RH : « Lors de l'entretien du [date], une question sur l'âge et les projets d'enfants a été posée malgré le brief. Recadrage immédiat. Demande de ne pas conserver cet élément. Merci de reprendre le cadre L. 1132-1 / L. 1221-6 avec le directeur avant le prochain entretien commun. » Vous ne « protègez » pas le manager en falsifiant un critère. Falsifier serait une faute professionnelle."
            },
            {
              "block_type": "callout",
              "content": "Les cinq simulations sont fictives et pédagogiques. En situation réelle, un recadrage de question illicite se signale selon la voie interne. Textes cités vérifiés le 13/10/2026."
            }
          ],
          "position": 6
        },
        {
          "title": "Quiz — Conduire un entretien",
          "description": "Vérifiez la conduite : cadre, écoute, temps, situations difficiles, notes, visio, questions illicites.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 14,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Conduire un entretien",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle ouverture d'entretien est la plus professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Parlez-moi de vous, on a le temps, on verra bien. »",
                  "B. Présentation des fonctions, durée, déroulé, notes factuelles, suite du process, vérification de l'horaire.",
                  "C. « Vous avez des enfants ? Ça permet de décompresser. »",
                  "D. « On sent déjà si ça va matcher, ensuite on fera les questions. »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le cadre réduit l'incertitude et reste dans le champ professionnel. Les options A et D improvisent. C est illicite ou hors lien d'emploi (situation de famille, L. 1132-1 / L. 1221-6)."
              },
              {
                "question": "Une reformulation utile consiste à :",
                "question_type": "single_choice",
                "options": [
                  "A. Répéter la réponse en plus élogieux pour motiver le candidat.",
                  "B. Reprendre les faits, le périmètre et le temps, afin que le candidat puisse corriger.",
                  "C. Traduire la réponse en trait de personnalité (« donc vous êtes un leader »).",
                  "D. Enchaîner sur votre propre anecdote pour créer du lien."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La reformulation est un contrôle d'exactitude, pas une récompense ni un diagnostic de personnalité."
              },
              {
                "question": "Il vous reste 12 minutes, il manque le situationnel essentiel et les questions du candidat. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous finissez le récit de parcours, plus confortable pour le manager.",
                  "B. Vous tenez le situationnel essentiel, puis un temps réduit de questions du candidat, puis la clôture.",
                  "C. Vous supprimez les questions du candidat : ce n'est pas évaluatif.",
                  "D. Vous dépassez de 25 minutes : l'équité c'est de tout couvrir."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les critères essentiels et les questions du candidat (information + indice de compréhension du poste) priment sur le confort du récit. Déborder de 25 minutes casse l'équité avec les autres candidats."
              },
              {
                "question": "Un candidat peu bavard. Quelle conduite est conforme ?",
                "question_type": "single_choice",
                "options": [
                  "A. Noter « introverti, pas le profil relation client » et abréger.",
                  "B. Poser une question de journée type, puis un STAR ancré sur le CV, éventuellement un situationnel.",
                  "C. Parler à sa place pour l'aider, puis noter ces propos comme ses preuves.",
                  "D. Lui demander s'il est suivi pour l'anxiété sociale."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'introversion n'est pas un critère. La santé non plus (L. 1132-1). Parler à sa place fabrique de fausses preuves. Les questions étroites et le situationnel sont les leviers."
              },
              {
                "question": "Face à une contradiction entre le CV et l'oral sur le périmètre d'équipe, vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Souriez et passez à autre chose pour ne pas le mettre mal à l'aise.",
                  "B. Dites qu'il ment et que l'entretien s'arrête.",
                  "C. Pointez les deux versions, demandez une précision de périmètre, notez l'écart et la qualité de l'explication.",
                  "D. Appelez l'ancien employeur pendant la séance, haut-parleur."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "La clarification factuelle est la conduite. L'humiliation et l'appel surprise sont des fautes. Un écart peut être un titre surdimensionné, pas nécessairement un mensonge. Un mensonge sur un élément constitutif se traite avec les RH, pas en spectacle."
              },
              {
                "question": "Les notes d'entretien :",
                "question_type": "single_choice",
                "options": [
                  "A. Peuvent mentionner le look et l'accent, c'est « pour soi ».",
                  "B. Sont des données personnelles, doivent rester factuelles et confidentielles (L. 1221-8 sur les résultats des méthodes).",
                  "C. Doivent être détruites immédiatement après le débrief oral, dans tous les cas.",
                  "D. Peuvent être envoyées à tout le plateau pour « crowdsourcer » l'avis."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Look et accent exposent des critères illicites. La destruction immédiate systématique n'est pas la règle unique (politique interne, conservation probatoire possible — voir CNIL / L. 1134-5). La diffusion large casse la confidentialité."
              },
              {
                "question": "Pendant une visio, un enfant entre dans la pièce. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Demandez qui garde les enfants d'habitude, pour tester la disponibilité.",
                  "B. Proposez pause, téléphone ou report, sans enquêter sur la famille, et vous ne transformez pas l'incident en critère.",
                  "C. Notez « organisation familiale douteuse ».",
                  "D. Exigez que le candidat montre son logement pour vérifier le calme."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Situation de famille et lieu de résidence sont des critères protégés. L'incident est un problème de canal. Le poste peut avoir des horaires à confirmer de façon identique pour tous, via la fiche de poste, pas via une enquête privée."
              },
              {
                "question": "Un manager demande à une candidate si elle compte avoir des enfants. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Laissez faire : il est le décideur métier.",
                  "B. Dites à la candidate qu'elle peut ne pas répondre, tout en laissant le manager insister.",
                  "C. Interrompez, indiquez que la question n'entre pas dans l'entretien, substituez une question professionnelle d'horaires si besoin, documentez.",
                  "D. Riez pour détendre, puis changez de sujet sans rien dire."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "L. 1132-1 (situation de famille, grossesse) et L. 1221-6. Le silence complice ou le « vous n'êtes pas obligée » pendant que la question reste posée ne protègent pas. Le recadrage est le rôle du recruteur, y compris junior."
              },
              {
                "question": "Une réponse trop préparée (« je suis perfectionniste ») se traite en :",
                "question_type": "single_choice",
                "options": [
                  "A. Notant le défaut comme une qualité culturelle.",
                  "B. Demandant la dernière situation concrète où cela a eu un effet sur un délai ou un client, avec actions et résultat.",
                  "C. Posant la même question de personnalité sous une autre forme.",
                  "D. Abandonnant le critère : les slogans suffisent s'ils sont bien dits."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le slogan n'est pas une preuve. La relance STAR sur un effet réel distingue le discours de la pratique."
              },
              {
                "question": "En fin d'entretien, le candidat demande « je suis pris ? ». Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Dites oui pour le garder chaud, même si la décision n'est pas prise.",
                  "B. Rappelez les étapes et une date de communication, sans verdict et sans mensonge.",
                  "C. Dites non pour éviter les relances.",
                  "D. Répondez « ça dépend du feeling du manager, il vous dira »."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Ni fausse promesse, ni refus improvisé. Le feeling n'est pas un critère communicable. La clôture honnête est une bonne pratique, distincte de l'absence d'obligation générale de motiver un refus."
              }
            ]
          },
          "position": 7
        }
      ]
    },
    {
      "position": 11,
      "title": "Évaluer objectivement les candidats",
      "description": "Noter à partir de faits, pondérer, utiliser des tests dans le cadre de L. 1221-8, reconnaître les biais, comparer et restituer au manager, puis trancher un cas à trois profils.",
      "lessons": [
        {
          "title": "S'appuyer sur la grille et la pondération après l'entretien",
          "description": "Transformer les notes de séance en évaluation argumentée, sans changer les règles en cours de campagne.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 20,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez terminer une grille à partir de faits, appliquer une pondération figée, documenter un doute, et distinguer une note d'une décision d'étape. Vous éviterez de « rééquilibrer » un critère pour faire gagner le candidat préféré."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'évaluation commence pendant l'entretien, mais elle se clôt après, dans un temps court, avant que la mémoire ne sélectionne. La grille préparée au module 9 n'a de valeur que si vous la remplissez avec les preuves recueillies, pas avec l'impression globale. Un candidat agréable et flou n'est pas « conforme » sur l'éthique commerciale. Un candidat rugueux qui a su dire non à une vente inadaptée n'est pas « insuffisant en relation client » par seul confort de séance.\n\nLa pondération est une politique interne, pas une obligation légale. Elle exprime que, pour ce poste, l'éthique et l'écoute pèsent plus que l'aisance à raconter un parcours. Une fois figée, elle s'applique à tous. Recalculer les poids après coup parce qu'un profil senior est faible sur un critère essentiel est une distorsion. Vous pouvez recommander une formation, un second entretien, une réserve. Vous ne changez pas le barème.\n\nLa note n'est pas une science. Aucune échelle à quatre crans n'a de validité magique. Elle a une fonction : forcer un choix, rendre les écarts visibles, préparer une comparaison. Si tous vos candidats sont à 3, soit le descripteur est trop large, soit vous évitez le conflit. Un 2 n'est pas une insulte. C'est « en retrait par rapport au besoin du poste, sur les preuves de cet entretien ».\n\nLes preuves insuffisantes se notent comme telles. Ce n'est pas la même chose qu'une preuve contraire. Un junior sans exemple de crédit n'est pas un junior qui vendrait à tout prix. Le premier appelle un situationnel ; le second, si le situationnel est mauvais, peut justifier un arrêt sur le critère éthique. Confondre les deux, c'est écarter des profils ouverts au poste ou, à l'inverse, minimiser un risque.\n\nL'évaluation reste soumise au droit. Vous ne « rattrapez » pas une note avec l'âge, le sexe, l'origine, l'apparence, la santé, la famille (L. 1132-1). Vous ne faites pas dire à la grille ce que L. 1221-6 interdit de demander. Si un critère s'est révélé mal écrit, vous le corrigez pour la campagne suivante, pas en cours de route au détriment d'un candidat déjà vu."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dans les dix minutes : relire les faits par critère, attribuer la note selon le descripteur, multiplier par le poids, totaliser. Écrire deux lignes de synthèse : forces liées au poste, écarts liés au poste, suite proposée.\n\nRègle : si un critère essentiel est à 1 (insuffisant) avec preuves, la recommandation ne peut pas être « offrir le poste » sans argument contraire documenté et validé par les RH (exigence réelle mal calibrée, aménagement, second regard). Un junior ne tranche pas seul un override.\n\nDouble notation recruteur / manager : ne pas fusionner les notes avant le débrief. L'écart est une information. On le discute sur les faits."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "PME logistique, cariste préparateur. Pondération : sécurité (3), cadence (2), travail d'équipe (1). Un candidat très sympathique, anecdotes riches, mais a décrit un contournement de consigne « pour aller plus vite ». Note sécurité = 1, malgré le feeling. Recommandation : arrêt. Le manager proteste : « on manque de monde ». Le recruteur maintient le fait. Recruter en sachant un contournement de sécurité n'est pas un choix de volume, c'est un risque assumé par l'employeur ; le junior n'a pas à l'effacer de la grille."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Mettre 3 partout « on verra plus tard ». Plus tard, il n'y a plus de faits.\n\nAjouter un critère « motivation » non défini pour sauver un total.\n\nDemander au manager sa note avant d'écrire la sienne. Alignement automatique.\n\nUtiliser des décimales (2,75) pour éviter d'assumer un cran."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat interne : mêmes descripteurs. La connaissance du site n'ajoute un point que si c'était un critère écrit (connaissance d'un outil interne), pas par connivence.\n\nÉgalité de notes : la grille peut conclure à une égalité. Ce n'est pas un échec. La suite (essai métier informé, second entretien, références cadrées) tranche, pas un critère illicite de départage.\n\nAménagement d'entretien : vous notez la compétence, pas la fluidité du canal."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Critère éthique, poids 3, échelle 1-4. Faits : « a dit qu'en cas d'objectif non atteint, il proposerait quand même le crédit, le client n'est pas obligé de dire oui ». Quelle note, quelle recommandation d'étape, quelle phrase de synthèse ? Le manager veut 3 « parce qu'il est honnête d'avoir dit ça »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Note : 1, insuffisant. Le descripteur « conforme » exigeait que l'intérêt du client et la règle priment. Ici, la pression d'objectif prime. L'honnêteté de l'aveu est utile (vous avez une preuve, pas un doute) ; elle n'est pas une compétence éthique. Recommandation : arrêt ou, au minimum, non-poursuite sans second regard RH/conformité. Phrase : « Situationnel crédit : priorise l'objectif commercial sur l'adéquation client ; preuve directe, critère essentiel. » Vous ne montez pas à 3 pour récompenser la franchise."
            }
          ],
          "position": 0
        },
        {
          "title": "Tests et méthodes d'aide au recrutement : cadre légal, sans magie",
          "description": "Informer préalablement, vérifier la pertinence, garder la confidentialité, et ne pas attribuer aux tests une validité que vous ne pouvez pas démontrer.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 24,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez quand un test peut s'inscrire dans un process, quelles obligations posent les articles L. 1221-8 et L. 1221-9, et ce qu'un recruteur junior n'a pas le droit d'inventer sur la « scientificité » d'un outil propriétaire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Dès qu'une méthode ou une technique d'aide au recrutement est utilisée à l'égard d'un candidat, deux obligations légales s'appliquent. L'article L. 1221-8 : le candidat est expressément informé, préalablement à leur mise en œuvre, des méthodes et techniques utilisées à son égard ; les résultats obtenus sont confidentiels. L'article L. 1221-9 (et déjà L. 1221-8 sur ce point) : les méthodes et techniques d'aide au recrutement ou d'évaluation doivent être pertinentes au regard de la finalité poursuivie. Un test « pour voir », sans lien avec les aptitudes du poste, n'est pas conforme à cette exigence de pertinence.\n\nL'information préalable n'est pas un bandeau flou « des tests pourront être réalisés ». C'est une information compréhensible, avant l'épreuve : nature de l'exercice, finalité (évaluer telle aptitude liée au poste), caractère confidentiel des résultats. Un cas pratique d'agence, un essai sur un logiciel, une mise en situation écrite, un test de langue si la langue est exigée par le poste : ce sont des méthodes. Elles tombent dans ce cadre. Un entretien classique est déjà une méthode d'évaluation ; dans la pratique, l'information se fait par la convocation et l'ouverture. Plus l'outil est spécifique (questionnaire, épreuve chronométrée, outil éditeur), plus l'information préalable doit être explicite.\n\nCe que ce cours ne fait pas : attribuer une validité scientifique chiffrée à un test propriétaire (personnalité, « potentiel », graphologie, métier de l'éditeur X ou Y). Un recruteur junior n'a pas à affirmer qu'« un tel outil prédit la performance ». Beaucoup d'outils circulent avec un discours commercial. La loi vous demande la pertinence au regard du poste, pas de relayer une brochure. La graphologie, les questionnaires de personnalité interprétés sans compétence, les mises en situation humiliantes ou sans rapport, sont à écarter. En cas de doute, vous n'introduisez pas l'outil ; vous en référez aux RH.\n\nLes épreuves les plus défendables pour un junior sont celles qui ressemblent au travail : expliquer une offre simple, prioriser une file, rédiger un message client, utiliser un tableur si le poste l'exige. Même alors : information préalable, mêmes conditions pour les candidats du même process, aménagement possible, résultats confidentiels, conservation selon la politique interne et le RGPD. Un score n'est pas une décision automatique. Il s'ajoute à la grille, il ne la remplace pas, et il ne sert pas à dissimuler un critère illicite (« le test a dit non » alors que le manager parlait de l'âge).\n\nLes résultats sont confidentiels (L. 1221-8). Ils ne se commentent pas à la machine à café. Le candidat peut, dans le cadre du RGPD, exercer des droits sur ses données ; vous orientez vers le process interne, vous ne promettez pas un « debrief de personnalité » que vous n'êtes pas en mesure de faire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant d'ajouter une épreuve : quel aptitude du poste ? L'épreuve y ressemble-t-elle ? Tous les candidats du même stade la passent-ils ? Qui informe, qui corrige, qui conserve ? Quel aménagement possible ?\n\nTexte d'information, avant l'épreuve, dans la convocation ou un e-mail dédié. Pas d'épreuve « surprise » le jour J, sauf exercice clairement annoncé comme faisant partie de l'entretien et décrit.\n\nCorrection : barème écrit à l'avance, comme la grille. Le manager ne change pas le barème après avoir vu la copie du candidat interne.\n\nInterdiction opérationnelle pour le junior : acheter ou faire passer un test de personnalité « trouvé en ligne », interpréter un profil psychologique, utiliser un outil non validé par l'entreprise."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Startup, recrutement d'un support client. Épreuve de 25 minutes : trois tickets fictifs à prioriser et une réponse écrite au ticket moyen. E-mail la veille : « Vous serez évalué sur la priorisation et la clarté d'une réponse client, en lien avec le poste. Durée 25 minutes. Résultats confidentiels, communiqués aux seuls décideurs du recrutement. » Pas de test de personnalité. Un candidat demande un temps supplémentaire : aménagement accordé, mêmes tickets, même barème, mention de l'aménagement de modalité, pas du motif médical."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Faire passer un test « pour enrichir le dossier » sans savoir ce qu'on en fera.\n\nAnnoncer au candidat son « type de personnalité » à partir d'un questionnaire amateur.\n\nRéserver le cas pratique au candidat dont on doute, et en dispenser celui que l'on aime : inégalité de méthode.\n\nLaisser les copies sur un drive ouvert à tout le service."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Test de langue : pertinent seulement si la langue est une exigence réelle du poste, appliquée à tous les candidats concernés, pas comme filtre d'origine.\n\nAssessment center : hors autonomie d'un junior. Cadre RH, information préalable, rôles d'observateurs formés, pas de jeux humiliants.\n\nCandidat qui refuse un test : vous ne forcez pas. Vous documentez, vous voyez avec les RH si l'épreuve est indispensable et pertinente. Le refus n'autorise pas une remarque discriminatoire."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager veut « un MBTI ou un truc de personnalité, tout le monde fait ça, c'est scientifique ». Rédigez votre réponse (e-mail interne) en distinguant obligation légale et bonne pratique, sans affirmer de validité chiffrée."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous rappelez L. 1221-8 (information préalable, confidentialité) et L. 1221-9 / pertinence. Vous indiquez que vous n'êtes pas en mesure d'affirmer une validité scientifique d'un outil propriétaire ou d'un questionnaire de personnalité grand public, et que ce n'est pas le rôle d'un recruteur junior que d'interpréter un profil psychologique. Vous proposez une épreuve de mise en situation liée au poste (priorisation, explication d'offre, message client), informée, barèmée, confidentielle. Si l'entreprise a déjà un outil RH homologué, son usage suit la procédure interne, pas l'improvisation du manager."
            },
            {
              "block_type": "callout",
              "content": "Ne citez pas de coefficient de validité, d'étude ou de marque comme preuve. Si un outil est imposé par votre employeur, appliquez la procédure interne et le cadre L. 1221-8 / L. 1221-9. Vérification des textes : 13/10/2026."
            }
          ],
          "position": 1
        },
        {
          "title": "Reconnaître les biais : halo, confirmation, similarité",
          "description": "Nommer trois biais fréquents, voir comment ils naissent dès le CV, et installer des contre-mesures simples, sans psychologie de salon.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 22,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez définir le biais de halo, le biais de confirmation et le biais de similarité, les repérer dans une grille ou un débrief, et appliquer des contre-mesures opérationnelles (faits, même questions, notes séparées) sans prétendre « annuler » tout biais."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Évaluer objectivement ne signifie pas devenir une machine. Cela signifie réduire les distorsions les plus connues, parce qu'elles écartent des personnes pour de mauvaises raisons et en recrutent d'autres pour de mauvaises raisons. Trois mécanismes reviennent constamment en recrutement. Ils ne sont pas des diagnostics médicaux. Ce sont des erreurs de jugement professionnelles, documentées par la pratique, que le cadre légal ne nomme pas une par une, mais que le principe de non-discrimination (L. 1132-1) rend particulièrement dangereuses lorsqu'elles s'accrochent à l'âge, au sexe, à l'origine, à l'apparence, au nom, au lieu de résidence.\n\nLe biais de halo : une caractéristique saillante colore tout le reste. Un diplôme prestigieux, une aisance orale, une recommandation interne, un « beau parcours », et soudain l'éthique, la priorisation, les écrits deviennent « sûrement bons ». L'inverse existe : un trouble de parole, un costume jugé, un CV avec un trou, et tout est tiré vers le bas. Le halo n'est pas illégal en soi ; il le devient lorsqu'il s'appuie sur un critère protégé, et il est toujours une mauvaise pratique lorsqu'il remplace les preuves.\n\nLe biais de confirmation : vous vous faites une idée au CV ou à la première minute, puis vous ne cherchez plus que ce qui la confirme. Questions faciles pour le candidat « bon », questions pièges pour l'autre. Notes sélectives. Le guide structuré existe précisément pour limiter cela. Si vous déviez du guide selon le feeling, vous réinstallez le biais.\n\nLe biais de similarité (affinité) : vous valorisez ce qui vous ressemble — école, humour, sport, origine sociale, façon de parler. « On pourrait travailler ensemble » devient un critère. Or L. 1221-6 exige le lien avec l'emploi, pas le confort du recruteur. Un manager qui veut « quelqu'un comme nous » doit être ramené à des comportements de poste. La similarité est aussi un vecteur classique de discrimination indirecte.\n\nAucune check-list n'élimine ces biais à 100 %. Les contre-mesures utiles sont prosaïques : critères écrits avant, mêmes questions d'ancrage, notes de faits, grilles séparées avant débrief, un second regard lorsque le verdict est trop rapide, vigilance sur les adjectifs (« brillant », « pas le look »). La formation que vous suivez ici est une contre-mesure. Elle ne vous place pas au-dessus du biais : elle vous oblige à le chercher dans votre propre dossier."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Auto-contrôle après chaque entretien : quelle a été ma première impression, en cinq mots ? Ai-je des faits contraires à cette impression dans la grille ? Si non, je relance ma mémoire : ai-je seulement confirmé ?\n\nInterdire dans les débriefs les phrases sans preuve : « pas le fit », « trop différent », « un de chez nous ». Exiger un fait par critère.\n\nSi vous vous découvrez un lien de similarité fort (même école, même associatif), le dire au débrief : « risque d'affinité, s'en tenir aux faits ». Ce n'est pas un aveu honteux, c'est une hygiène.\n\nNe jamais « corriger » un biais en inversant : écarter un profil qui vous ressemble par pur contre-biais n'est pas plus professionnel, et peut aussi discriminer."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Cabinet, mission comptable junior. Une candidate issue de la même école que le consultant obtient un halo « excellente ». Le second entretien, mené par un autre consultant avec le même guide, révèle une impossibilité à expliquer un rapprochement bancaire. Le premier consultant avait noté 4/4 en technique sans preuve. Correction : la grille du premier est reprise ; le critère technique passe à 2. Le match école n'est pas un critère. Le client est informé des faits, pas de l'école comme argument de vente."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Croire que « je n'ai pas de biais » parce que vous êtes de bonne foi. La bonne foi n'est pas une méthode.\n\nUtiliser l'anti-halo comme prétexte : « les diplômés de grandes écoles, je les note plus dur ». Ce n'est pas de l'équité.\n\nLaisser le manager dire « elle me rappelle ma fille » sans recadrer.\n\nConfondre vitesse de parole et compétence, surtout en visio."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Candidat recommandé par un dirigeant : halo maximal. Traitez le CV comme les autres, même guide, même test informé. Documentez. Si le dirigeant impose le recrutement, ce n'est plus une évaluation ; c'est une décision d'employeur, qui reste soumise au droit de la non-discrimination.\n\nCandidat en reconversion : risque d'anti-halo (« pas le bon logo »). Les preuves transférables et le situationnel pèsent.\n\nPanel : le plus senior parle en premier au débrief = alignement. Inversez : le plus junior parle en premier sur les faits."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Notes brutes : « Super guy, on a le même humour, école prestigieuse, un peu léger sur le cas crédit mais ça s'apprend, look nickel, je le vois bien à l'agence. » Réécrivez une évaluation professionnelle en nommant les biais présents et ce qui manque."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Biais : similarité (humour, projection), halo (école, look — le look est de plus illicite comme critère, L. 1132-1 apparence), confirmation probable (le cas crédit, critère essentiel, est minimisé). Il manque : faits STAR, note d'éthique, pédagogie, priorisation. Version professionnelle : « Aisance relationnelle en séance. Cas crédit incomplet : à reprendre comme écart sur critère essentiel, non comme détail formable par défaut. École et humour hors critères. Apparence hors grille. Recommandation : ne pas poursuivre sur la seule impression ; exiger les preuves manquantes ou arrêter. »"
            }
          ],
          "position": 2
        },
        {
          "title": "Comparer les candidats sans changer les règles",
          "description": "Construire un tableau de comparaison, traiter les égalités, et résister aux départs de comparaison illicites ou impressionnistes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez comparer deux ou trois personnes sur les mêmes critères, expliquer un écart par des faits, et refuser un départage par l'âge, le sexe, la « proximité culturelle » ou la vitesse de décision du manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La comparaison est le moment où les biais se concentrent : on ne juge plus une personne par rapport au poste, on juge des personnes les unes par rapport aux autres, souvent avec fatigue et urgence. La bonne ancre reste le poste. Un candidat n'est pas « moins bien que l'autre » en général. Il est plus ou moins proche des exigences écrites, sur des preuves de même nature. Si l'un a eu un situationnel et l'autre non, vous ne comparez pas. Si l'un a été vu 70 minutes et l'autre 30, vous le signalez : la comparaison est fragile.\n\nUn tableau (critères en lignes, candidats en colonnes, faits sous les notes) force le regard. Sans tableau, le dernier vu gagne souvent (biais de récence) ou le premier (biais de primauté). Ni l'un ni l'autre n'est un critère d'emploi. La pondération aide à ne pas faire gagner « celui qui a le plus de 4 sur des critères mineurs ».\n\nL'égalité n'est pas un échec du process. Elle signifie que, sur les preuves actuelles, deux personnes sont employables au regard du besoin. Les sorties légitimes : un second entretien ciblé sur l'écart restant, une épreuve métier informée, des références cadrées (avec information du candidat, questions professionnelles). Les sorties illégitimes : « on prend l'homme, l'équipe est déjà trop féminine » ; « la plus jeune, elle coûtera moins » ; « celui qui habite à côté ». Sexe, âge, lieu de résidence : L. 1132-1.\n\nComparer n'autorise pas à fusionner des données hors finalité. Vous ne créez pas un classement public. Vous préparez une shortlist. Les candidats non retenus à ce stade restent des personnes dont les données sont confidentielles. Vous ne dites pas à l'un ce que l'autre a « moins bien réussi » de façon identifiable.\n\nEnfin, la comparaison n'efface pas un KO éthique. Un profil brillant et un profil conforme : si le brillant a un 1 sur un critère essentiel de risque, il ne « gagne » pas par halo. C'est tout l'intérêt d'avoir figé les règles avant."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Remplir le tableau le jour des derniers entretiens, à froid, avec les grilles déjà closes. Une ligne « qualité des preuves » (solide / moyenne / insuffisante) pour ne pas comparer un roman et un silence.\n\nRéunion de comparaison : 30 minutes, faits d'abord, notes ensuite, décision d'étape en dernier. Le junior présente le tableau, le manager discute les écarts métier, le RH tranche les points de droit.\n\nSi le manager introduit un critère nouveau (« il faut quelqu'un de mobile le soir » alors que ce n'était pas dans la fiche), soit la fiche était incomplète et le critère, s'il est professionnel, doit être vérifié auprès de tous les finalistes encore en lice, soit c'est un caprice tardif : vous le refusez comme règle rétroactive."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "ETI, deux finalistes pour un poste d'acheteur. A : très bon sur négociation, faible sur suivi administratif. B : solide partout, moins spectaculaire en oral. Le directeur veut A « parce qu'il a de la gueule ». Le tableau montre le suivi (poids 2) en retrait chez A, avec un exemple d'oubli de contrat. Décision : second entretien ciblé sur le suivi pour A, ou choix de B si le risque admin est non négociable. Pas de choix sur l'oralité seule."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Présenter d'abord « mon favori », puis les autres comme faire-valoir.\n\nMoyenne arithmétique sans pondération, puis étonnement que l'éthique pèse peu.\n\nDire au candidat B que A est « plus senior » comme unique motif, alors que le vrai motif est un feeling. Restez factuel ou, si la politique est de ne pas motiver, ne motivez pas de façon fausse."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Un seul candidat reçu : vous comparez au poste, pas à un idéal fantôme. L'absence de concurrent n'oblige pas à recruter.\n\nCandidat interne vs externe : mêmes lignes du tableau. La connaissance interne est un fait si elle réduit le temps d'apprentissage d'un outil du poste, pas un droit de priorité automatique, sauf accord ou politique interne claire et non discriminatoire.\n\nDiscrimination demandée par le client d'un cabinet : vous refusez. Le cabinet n'a pas à « comparer selon le souhait illicite »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le manager : « Les deux se valent, on prend celui qui est déjà en CDI, l'autre est en chômage, ce sera plus stable, et puis il habite plus près. » Que répondez-vous, en distinguant droit et bonne pratique ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "La précarité / vulnérabilité économique et le lieu de résidence sont des critères protégés (L. 1132-1). Ce ne sont pas des critères de départage. Obligation légale : ne pas écarter pour ces motifs. Bonne pratique : revenir au tableau de compétences. Si une exigence de présence sur site est réelle, elle se vérifie par les horaires et le lieu de travail du poste, pour tous, pas par l'adresse comme proxy. La « stabilité » supposée du CDI n'est pas une preuve d'aptitude."
            }
          ],
          "position": 3
        },
        {
          "title": "Restituer l'évaluation au manager",
          "description": "Présenter des faits, des notes et une recommandation d'étape, sans se substituer au décideur ni valider un critère illicite.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 18,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous saurez structurer une restitution orale et écrite de 10 minutes, défendre un écart de notes, et refuser de transformer la restitution en chambre d'écho des préférences illicites du manager."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le manager est généralement le décideur métier. Le recruteur n'est pas un secrétaire de séance. Il est le gardien du process, des preuves et du droit. La restitution sert à permettre une décision éclairée, pas à « vendre » un candidat comme un produit, ni à saboter un profil qui vous a déplu. Vous présentez : le besoin rappelé (une minute), les preuves par critère, les notes, les risques professionnels, la recommandation d'étape. Vous n'annoncez pas une embauche. Vous n'humiliez pas un candidat absent.\n\nUne restitution argumentée réduit les allers-retours et les revirements. Une restitution d'adjectifs (« super », « bizarre », « pas le feu ») force le manager à décider au feeling, puis à vous en faire porter la responsabilité. Si vous n'êtes pas d'accord avec le manager, vous le dites sur des faits, dans cette réunion, pas plus tard dans un couloir. Le désaccord se traite plus largement au module 13. Dès l'évaluation, la règle est : pas de silence sur un 1 éthique, pas d'amplification d'un défaut mineur.\n\nLe support écrit (tableau + synthèses) reste. L'oral s'envole. Si le manager dit « OK on prend X » alors que la grille de X est fragile, vous faites répéter la décision et ses motifs professionnels, et vous les tracez. Cette trace protège l'entreprise en cas de contestation : elle montre des critères d'emploi, ou au contraire elle révèle qu'il faut encore recadrer.\n\nVous ne restituez pas des données hors finalité. Pas de récit sur la famille, la santé, le logement, les photos. Si le manager les demande, vous rappelez L. 1221-6 et L. 1132-1. La restitution est aussi un acte RGPD : destinataires limités, contenu adéquat, pas de transfert à toute l'équipe « pour avis »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ordre de parole : besoin, candidat 1 faits/notes, candidat 2, comparaison, risques, recommandation, décision d'étape, message aux candidats (qui écrit, quand). Durée : 10 à 20 minutes, pas une heure de souvenirs.\n\nDocuments : grilles, tableau, CR. Pas de captures d'écran de réseaux.\n\nSi le manager n'était pas en entretien : vous ne dissimulez pas les limites de ce que vous avez vu. Vous proposez un entretien manager avant toute offre.\n\nClôture : « Décision du jour = … Motifs professionnels = … Prochaine communication candidat = date. » Écrit dans l'outil le jour même."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Industrie, restitution de 12 minutes pour un technicien méthodes. Le recruteur ouvre sur les 4 critères. Il lit deux faits d'écart sur la sécurité pour le candidat préféré du chef d'atelier. Le chef dit « on formera ». Le recruteur : « On peut former un outil. Un contournement déjà raconté comme normal est un risque actuel. Ma recommandation est un second entretien sécurité, pas une offre cette semaine. » Décision tracée : second entretien, pas d'offre."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Lire le CR mot à mot pendant vingt minutes. Le manager décroche.\n\nCacher un point faible pour « faire plaisir » puis le découvrir après l'offre.\n\nParler en premier de votre favori avec un sourire, des autres avec un ton plat.\n\nAccepter « prends celui que tu veux » : ce n'est pas une décision métier, c'est un désengagement. Vous ramenez le manager aux critères."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Manager distant, restitution visio : envoyer le tableau avant, même ordre, enregistrer uniquement si politique interne et information des participants.\n\nPlusieurs managers divergents : faits au centre, pas vote à main levée sur le feeling. Un décideur nommé.\n\nPression pour « remplir le poste avant la fin du mois » : le délai se gère en process (vivier, temporaire) pas en baissant un critère de sécurité ou d'éthique, ni en discriminant."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Rédigez une restitution orale de 8 à 10 phrases pour un unique candidat « conforme sauf pédagogie en retrait », recommandation : second entretien avec mise en situation informée. Le manager n'a pas le temps."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "« Besoin : chargé de clientèle, éthique et écoute essentielles. Candidat reçu 55 minutes, guide commun. Écoute : exemple d'appel, résultat 4/5, note 3. Éthique : situationnel crédit, a proposé une alternative et un refus, note 3. Pédagogie : explication encore jargonnante, note 2. Total pondéré : conforme avec écart pédagogie. Je ne recommande pas l'offre aujourd'hui. Je recommande 25 minutes de mise en situation “expliquer un livret”, informée au préalable (L. 1221-8). Si vous n'avez pas le temps, nous reportons la décision, nous ne compensons pas par un feeling. Communication au candidat : jeudi, sans verdict d'embauche. »"
            }
          ],
          "position": 4
        },
        {
          "title": "Exercice : trois candidats, une recommandation argumentée",
          "description": "Noter trois profils fictifs sur la même grille, choisir une suite de process, puis comparer avec la correction.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 30,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous mettrez en pratique grille, pondération, biais et restitution sur un cas complet. Vous formulerez une recommandation d'étape (pas une fiction d'offre) et vous la justifierez par des faits."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Dans une campagne réelle, vous n'aurez jamais toute l'information. L'exercice accepte cette limite : vous décidez à partir des preuves ci-dessous, comme après trois entretiens semi-structurés de 55 minutes, sans test complémentaire encore prescrit. Le poste est celui du guide : chargé de clientèle, Banque des Vallées, agence de détail. Pondération figée : écoute/relation (3), éthique et cadre (3), pédagogie (2), priorisation (2), travail d'équipe (1), apprentissage/motivation pour le poste (1). Échelle 1 à 4. Un 1 sur l'éthique bloque l'offre.\n\nVotre travail n'est pas de trouver « le meilleur humain ». Il est de recommander une suite professionnelle : poursuite vers le manager / second entretien ciblé / réserve / arrêt, éventuellement un ordre de shortlist, sans mensonge aux candidats (traité au module 13). Vous devez expliciter les biais qui vous tirent (halo d'expérience, similarité, anti-halo junior).\n\nIl n'y a pas de statistique cachée ni de solution unique magique. Il y a des erreurs graves : ignorer un 1 éthique, départager par l'âge ou la famille, inventer des preuves absentes du dossier, attribuer à un test non passé une validité. La correction détaille une recommandation défendable. La vôtre peut différer sur un point de shortlist si vos notes respectent les descripteurs. Elle ne peut pas différer sur le droit."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Lisez les trois fiches. Notez seul, sans regarder la correction. Calculez un total pondéré (note × poids, somme). Rédigez 12 à 20 lignes : notes, biais possibles, recommandation, message d'étape (idée, pas encore l'e-mail du module 12). Puis lisez la correction."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Les trois dossiers sont fictifs. Aucun n'est un portrait de personne réelle. Les âges sont indiqués ici uniquement pour que vous pratiquiez à les ignorer comme critères ; ils n'entrent pas dans la grille."
            },
            {
              "block_type": "code",
              "content": "POSTE : chargé de clientèle, banque de détail — cas fictif\nGrille : 1 insuffisant | 2 en retrait | 3 conforme | 4 dépasse\nPondération : Écoute 3 · Éthique 3 · Pédagogie 2 · Priorisation 2 · Équipe 1 · Apprentissage 1\n(max 48)\n\nCANDIDAT A — « Lina » — 18 mois centre d'appels énergie, stage magasin\nFaits d'entretien :\n- Écoute : appel facture, reformulation, échéancier, mail, enquête 4/5. Pas d'exemple bancaire.\n- Éthique : pas d'exemple passé de vente à risque. Situationnel crédit : « je ne partirais\n  pas sur un crédit si le reste à vivre est tendu ; j'alerte le directeur ; je propose\n  une épargne ou un report ». N'invente pas un produit.\n- Pédagogie : explique un forfait énergie simplement ; cherche ses mots sur un livret.\n- Priorisation : file magasin, caisse d'abord, promesse 5 min tenue.\n- Équipe : s'appuie sur le senior pour un seuil, sans s'effacer.\n- Apprentissage : questions précises sur la formation produits ; dit son manque bancaire.\nÂge indiqué sur CV : 24 ans. À ignorer.\n\nCANDIDAT B — « Karim » — 12 ans conseil assurance\nFaits d'entretien :\n- Écoute : exemple sinistre, « j'ai laissé parler ». N'a pas reformulé le besoin.\n  A monopolisé 8 minutes de parcours malgré cadrage. A commenté l'âge du recruteur.\n- Éthique : situationnel crédit : « s'il veut le crédit, c'est sa responsabilité,\n  moi je présente, après il signe ». Peu de traces écrites (« c'est le back-office »).\n- Pédagogie : très fluide à l'oral, vocabulaire pro, client peu associé à la reformulation.\n- Priorisation : discours général « je gère 80 dossiers », pas d'arbitrage concret.\n- Équipe : se projette plutôt en indépendant ; peu d'exemple de binôme.\n- Apprentissage : motive le switch banque par « plus noble » et l'ennui, peu le métier agence.\nÂge indiqué : 41 ans. À ignorer. Halo possible : ancienneté.\n\nCANDIDAT C — « Nadia » — 3 ans boutique bancaire concurrente\nFaits d'entretien :\n- Écoute : STAR client mécontent sur une carte, reformulation, geste commercial validé,\n  suivi J+2. Clair.\n- Éthique : STAR « on me poussait un produit de la semaine » : a documenté l'inadéquation,\n  a proposé un produit plus simple, a tenu le reporting. Situationnel crédit : refuse\n  si indicateurs, escalade, trace.\n- Pédagogie : explique un PEL de façon encore un peu jargonnante, corrige après relance.\n- Priorisation : samedi matin, file + RDV, a tenu le RDV et fait prendre un ticket ;\n  un client a râlé, elle l'a informé du délai.\n- Équipe : binôme sur les relais pause, un désaccord avec un collègue recadré en privé.\n- Apprentissage : questions sur les délégations de l'agence et les 90 premiers jours.\nLe directeur a posé une question sur les enfants ; recadrage junior. Nadia n'a pas\nrépondu. N'entre PAS dans la grille. Âge indiqué : 27 ans. À ignorer."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du recruteur junior"
            },
            {
              "block_type": "text",
              "content": "Choisir Karim « parce qu'il en jette ». Écarter Lina « trop jeune ». Pénaliser Nadia « parce qu'il y a eu un incident enfants ». Moyenner tout le monde à 3 pour ne pas se tromper."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si votre manager réel, sur ce cas, exige Karim malgré le situationnel crédit : vous ne falsifiez pas les notes. Vous documentez le désaccord (module 13). Si l'on vous demande un test de personnalité pour « sauver » Karim : L. 1221-8 / pertinence, pas de magie."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Attribuez les 6 notes pour A, B et C. Calculez les totaux pondérés. Rédigez : (1) qui vous proposez en premier entretien manager ou en shortlist, (2) qui en réserve, (3) qui vous n'avancez pas, (4) un biais que vous avez dû contrecarrer, (5) ce que vous dites au manager en cinq phrases. N'inventez pas de faits."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Notes défendables (les vôtres peuvent bouger d'un cran si le descripteur est respecté, pas l'éthique de B) :\n\nLina : Écoute 3, Éthique 3 (situationnel solide, pas de preuve contraire), Pédagogie 2, Priorisation 3, Équipe 3, Apprentissage 4. Total : 9+9+4+6+3+4 = 35/48. Preuves parfois transférables, pas un KO.\n\nKarim : Écoute 2 (monopolisation, reformulation absente, commentaire sur l'âge = fait de séance sur le respect du cadre), Éthique 1 (situationnel crédit : charge le client, pas de trace), Pédagogie 3 (oral fluide, écoute client faible donc pas 4), Priorisation 2, Équipe 2, Apprentissage 2. Total : 6+3+6+4+2+2 = 23/48. Le 1 éthique interdit l'offre. L'ancienneté est un halo, pas un rattrapage.\n\nNadia : Écoute 3 ou 4, Éthique 4, Pédagogie 3, Priorisation 3, Équipe 3, Apprentissage 3. Total autour de 39-42/48. La question illicite n'a aucune incidence. C'est le profil le plus proche du poste sur preuves.\n\nRecommandation défendable : Nadia en tête, entretien manager ou offre selon process (ici : restitution manager, pas promesse). Lina en réserve sérieuse ou second entretien pédagogie produits, information honnête (pas « vous êtes retenue »). Karim : pas de poursuite sur ce poste, motif professionnel éthique/cadre, sans mention de l'âge. Biais à nommer : halo d'expérience sur B, anti-halo junior sur A, contamination possible de C par l'incident manager (à corriger : zéro poids).\n\nCinq phrases manager : « Nadia a des preuves d'écoute, d'éthique et de priorisation d'agence. Lina est employable au regard du besoin junior, pédagogie à renforcer, éthique situationnelle correcte. Karim : situationnel crédit insuffisant, critère essentiel ; je ne recommande pas la poursuite. L'ancienneté ne pèse pas. La question familiale de la séance C est hors évaluation. »\n\nSi vous avez classé Karim premier, relisez le descripteur éthique du module 9 : vous avez cédé au halo. Si vous avez écarté Lina pour l'âge ou « pas assez bancaire » alors que le poste est ouvert aux transférables, vous avez ajouté un critère non écrit. Si vous avez hésité entre Nadia et Lina, c'est licite : l'ordre Nadia puis Lina est le plus cohérent avec les preuves ; une égalité de poursuite (deux seconds entretiens) serait acceptable, pas une offre à Karim."
            }
          ],
          "position": 5
        },
        {
          "title": "Quiz — Évaluer objectivement",
          "description": "Grilles, tests, biais, comparaison, restitution et cas à trois profils.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 14,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Répondez à chaque question. En cas d'échec, relisez le module puis retentez. Les questions juridiques essentielles exigent une justification : lisez toujours l'explication après validation."
            }
          ],
          "quiz": {
            "title": "Quiz — Évaluer objectivement",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Que faire d'une pondération si, après deux entretiens, votre candidat préféré est faible sur un critère lourd ?",
                "question_type": "single_choice",
                "options": [
                  "A. Baisser le poids de ce critère pour cette campagne.",
                  "B. Laisser la pondération figée et documenter l'écart ; la suite (arrêt, réserve, second regard) se discute sur les faits.",
                  "C. Mettre 3 par défaut pour ne pas bloquer.",
                  "D. Inventer un critère de motivation pour rattraper le total."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Changer les poids en cours de route, c'est ajuster le barème au favori. La pondération est une politique interne, figée avant. Un écart réel se traite en décision d'étape, pas en cosmétique."
              },
              {
                "question": "L'article L. 1221-8 impose notamment :",
                "question_type": "single_choice",
                "options": [
                  "A. L'obligation d'utiliser un test de personnalité certifié.",
                  "B. L'information préalable du candidat sur les méthodes utilisées à son égard, la confidentialité des résultats, et la pertinence des méthodes.",
                  "C. La publication des scores de tous les candidats.",
                  "D. L'interdiction de tout cas pratique, seuls les entretiens étant légaux."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1221-8 : information préalable, résultats confidentiels, méthodes pertinentes. L. 1221-9 confirme la pertinence. Aucune obligation de test de personnalité. Un cas pratique est une méthode, donc informé et pertinent."
              },
              {
                "question": "Un recruteur junior peut-il affirmer qu'un test propriétaire de personnalité « prédit scientifiquement » la réussite dans le poste ?",
                "question_type": "single_choice",
                "options": [
                  "A. Oui, si l'éditeur l'écrit dans sa brochure.",
                  "B. Oui, si le manager y croit.",
                  "C. Non : il n'a pas à inventer une validité scientifique ; il s'en tient à la pertinence légale, à la procédure interne et, de préférence, à des épreuves proches du travail.",
                  "D. Oui, dès que le candidat a signé une décharge."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Ce cours interdit d'inventer une validité chiffrée. Une décharge n'autorise pas une méthode non pertinente (L. 1221-9). La brochure commerciale n'est pas une source."
              },
              {
                "question": "Le biais de halo, dans un entretien, c'est :",
                "question_type": "single_choice",
                "options": [
                  "A. Une obligation légale de noter l'apparence.",
                  "B. Le fait qu'une caractéristique saillante (aisance, diplôme, logo) colore indûment les autres critères.",
                  "C. Le fait de poser les mêmes questions à tout le monde.",
                  "D. Un aménagement d'entretien."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le halo distord la grille. L'apparence comme critère est illicite (L. 1132-1), ce n'est pas une obligation. Les mêmes questions sont une contre-mesure."
              },
              {
                "question": "Le biais de similarité conduit surtout à :",
                "question_type": "single_choice",
                "options": [
                  "A. Valoriser ce qui ressemble au recruteur ou à l'équipe, au détriment du lien avec l'emploi.",
                  "B. Recruter nécessairement la diversité.",
                  "C. Respecter L. 1221-6.",
                  "D. Augmenter la durée d'entretien."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "« On se ressemble » n'est pas un critère d'aptitude. Cela peut aussi nourrir des discriminations. L. 1221-6 exige le lien avec l'emploi."
              },
              {
                "question": "Pour départager deux finalistes équivalents sur la grille, il est illicite de choisir :",
                "question_type": "single_choice",
                "options": [
                  "A. Un second entretien ciblé sur l'écart restant, identique dans son principe.",
                  "B. Une épreuve métier informée (L. 1221-8).",
                  "C. Celui qui habite plus près, ou la personne au chômage écartée comme « moins stable ».",
                  "D. Des références professionnelles cadrées."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Lieu de résidence et vulnérabilité économique sont des critères protégés (L. 1132-1). Les options A, B et D restent dans l'aptitude professionnelle, sous conditions (information, pertinence, égalité de méthode)."
              },
              {
                "question": "Lors de la restitution au manager, un 1 sur un critère essentiel d'éthique doit :",
                "question_type": "single_choice",
                "options": [
                  "A. Être atténué oralement pour ne pas bloquer le mois.",
                  "B. Être présenté avec les faits, et empêcher une offre sans regard RH/conformité ; on ne le noie pas dans le halo.",
                  "C. Être effacé si le candidat est interne.",
                  "D. Être compensé par un test de personnalité surprise."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Dissimuler un risque éthique est une faute. Le test surprise heurte L. 1221-8. L'interne n'a pas de passe-droit sur un critère essentiel."
              },
              {
                "question": "Dans l'exercice à trois profils, le situationnel de Karim (« si le client veut le crédit, c'est sa responsabilité ») :",
                "question_type": "single_choice",
                "options": [
                  "A. Est un point positif de franchise qui justifie une note éthique à 3.",
                  "B. Constitue une preuve d'insuffisance sur un critère essentiel, incompatible avec une offre sur ce poste.",
                  "C. Doit être ignoré au profit de ses 12 ans d'expérience.",
                  "D. Se corrige en demandant s'il a des enfants, pour tester la maturité."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La franchise donne une preuve claire, elle ne transforme pas l'insuffisance en conformité. L'expérience est un halo. La famille est illicite."
              },
              {
                "question": "La question sur les enfants posée à Nadia pendant l'entretien :",
                "question_type": "single_choice",
                "options": [
                  "A. Peut servir de départage si elle a hésité.",
                  "B. N'entre pas dans la grille ; le recadrage était dû ; pénaliser Nadia serait discriminatoire.",
                  "C. Montre que Nadia « n'est pas claire », donc un 2 en motivation.",
                  "D. Doit être retravaillée en test de personnalité."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L. 1132-1 (situation de famille, grossesse). La candidate n'a pas à « bien répondre » à une question illicite. Aucun poids dans l'évaluation."
              },
              {
                "question": "Quelle recommandation est la plus défendable à l'issue de l'exercice ?",
                "question_type": "single_choice",
                "options": [
                  "A. Offre immédiate à Karim, Lina et Nadia en attente sans information.",
                  "B. Nadia en tête sur preuves, Lina réserve ou second entretien pédagogie, Karim non poursuivi pour motif éthique professionnel ; pas de critère d'âge.",
                  "C. Écarter Lina parce qu'elle a 24 ans.",
                  "D. Tous à 3/4 pour éviter les ennuis, tirage au sort."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est l'alignement preuves / pondération / droit. L'âge est illicite. Le tirage au sort n'est pas une méthode pertinente. Ghoster les autres sans process est une mauvaise pratique (module 12), et une offre à Karim ignore le 1 éthique."
              }
            ]
          },
          "position": 6
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
  SELECT id INTO v_course_id FROM courses WHERE slug = 'devenir-recruteur-a-z';
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours devenir-recruteur-a-z absent. Exécutez 006a d''abord.';
  END IF;
  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE '006a : modules déjà présents — skip.';
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

-- Reste en draft jusqu'à 006b.

COMMIT;
