import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 0,
  title: "Découvrir le métier de recruteur",
  description:
    "Comprendre à quoi sert le recrutement, ce que fait un recruteur junior au quotidien, et comment se situer dans une entreprise, un cabinet ou une agence d'intérim.",
  lessons: [
    lesson({
      title: "Qu'est-ce que le recrutement ?",
      description: "Définir le recrutement comme un processus métier, pas comme une simple publication d'annonce.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t("À la fin de cette leçon, vous savez définir le recrutement, le distinguer d'une « chasse de CV » et expliquer pourquoi il conditionne la performance d'une équipe. Vous savez aussi nommer les grandes étapes d'un processus, sans encore les exécuter."),
        h("Ce qu'il faut comprendre"),
        t("Le recrutement est l'ensemble des activités qui permettent à une organisation de pourvoir un besoin en compétences, au bon moment, avec une personne en mesure d'exercer les missions, dans un cadre légal et budgétaire.\n\nCe n'est pas « trouver quelqu'un ». C'est traduire un besoin opérationnel en critères, attirer ou rechercher des personnes, les évaluer de façon comparable, décider, embarquer, et laisser une trace. Un recrutement réussi, ce n'est pas seulement un contrat signé : c'est un collaborateur qui tient le poste, dans des conditions claires, sans que l'entreprise ait pris un risque juridique inutile.\n\nLe recrutement appartient à la fonction ressources humaines, mais il n'est jamais uniquement un sujet RH. Le manager connaît le métier, la charge, les outils, les tensions de l'équipe. La direction fixe les priorités et le budget. Le recruteur relie ces mondes : il empêche que l'on recrute « au feeling », et il empêche aussi que l'on publie une annonce trop tôt, trop vague, ou discriminatoire.\n\nOn distingue souvent acquisition de talents (attirer et sélectionner) et gestion des talents (développer, fidéliser, succéder). Un recruteur junior travaille surtout sur le premier volet. Il collabore avec le second : un besoin peut se résoudre par une mobilité interne plutôt que par une embauche externe."),
        note("Bonne pratique professionnelle, pas une obligation légale : documenter chaque étape (brief, critères, évaluations, décision). La loi n'impose pas un dossier type « process recrutement », mais le RGPD et le risque de discrimination rendent la traçabilité utile. Voir module Cadre légal."),
        h("Méthode opérationnelle"),
        t("Lorsque l'on vous confie un recrutement, posez-vous toujours ces six questions, dans cet ordre :\n1. Quel est le besoin réel (création, remplacement, surcharge, projet) ?\n2. Le poste est-il validé (budget, contrat, manager responsable) ?\n3. Existe-t-il une priorité interne ou une obligation d'information à vérifier avec les RH (temps partiel souhaitant un temps plein, priorité de réembauche après licenciement économique) ?\n4. Quels critères sont indispensables, lesquels sont souhaitables, lesquels sont interdits ?\n5. Quel canal a une chance de fonctionner pour CE métier, dans CE bassin, avec CE délai ?\n6. Comment allons-nous évaluer de la même façon tous les candidats encore en lice ?\n\nVous ne décidez pas tout cela seul. Vous préparez les questions, vous animez le brief, vous proposez une méthode, vous alertez si quelque chose cloche."),
        h("Exemple professionnel"),
        t("Dans une PME de 35 personnes en services informatiques, le directeur demande « un commercial, pour hier ». Sans cadrage, un junior publie une annonce « Business Developer confirmé, 5 ans d'expérience, anglais courant ». Trois semaines plus tard : 80 CV hors sujet, un manager mécontent, aucun entretien.\n\nLe même besoin, cadré : il s'agit d'un remplacement d'un commercial grands comptes qui part dans six semaines, portefeuille existant, 50 % de déplacements région Nord, rémunération fixe + variable, permis indispensable parce que les clients ne sont pas tous accessibles en train. L'annonce, les critères et le calendrier changent complètement. Le recrutement n'est pas plus long : il est plus juste."),
        h("Erreurs fréquentes du recruteur junior"),
        t("Confondre « urgence du manager » et « poste prêt à être ouvert ». Publier avant d'avoir un budget et un responsable d'entretien. Croire que le recrutement commence à l'annonce, alors qu'il commence au besoin. Promettre un délai irréaliste pour faire plaisir. Traiter tous les recrutements avec le même process unique, que l'on cherche un apprenti ou un responsable d'atelier."),
        h("Situations particulières"),
        t("En cabinet, le « client » est l'entreprise qui mandat ; le candidat n'est pas un dossier, c'est aussi votre réputation. En agence d'intérim, le besoin est souvent très court, très opérationnel, avec une disponibilité immédiate : le cadrage existe encore, mais il tient en trente minutes, pas en trois réunions. En interne dans une ETI, un besoin peut masquer une mauvaise organisation : recruter un cinquième assistant alors que les outils sont le vrai problème. Votre rôle n'est pas de refuser d'embaucher ; c'est de faire dire le besoin à voix haute."),
        h("Mise en pratique"),
        t("Un responsable d'entrepôt vous écrit : « Il me faut deux personnes polyvalentes, CDI, motivées, pas trop vieilles, disponibles lundi. » Listez : (1) ce que vous devez clarifier avant toute diffusion ; (2) ce que vous ne devez pas reprendre tel quel ; (3) à qui vous parlez en premier (manager, RH, direction)."),
        h("Correction détaillée"),
        t("1. Clarifier : création ou remplacement, missions concrètes (préparation, réception, cariste), horaires, lieu, rémunération, type de contrat réellement validé, permis cariste, port de charges, travail d'équipe, délai réel, qui fait passer les entretiens.\n2. Ne pas reprendre : « pas trop vieilles » — critère d'âge, discrimination interdite (Code du travail, L. 1132-1). Reformuler en compétences et contraintes du poste (horaires, habilitations), jamais en âge.\n3. Premier interlocuteur : le manager pour le contenu du poste ; les RH en parallèle si le CDI n'est pas validé ou si une mention discriminatoire apparaît. Un junior ne « corrige pas le manager en public » : il reformule les critères en compétences et explique le cadre légal avec calme."),
      ],
    }),
    lesson({
      title: "Le rôle du recruteur et les intitulés de poste",
      description: "Situer recruteur, chargé de recrutement, Talent Acquisition, assistant RH et consultant cabinet.",
      minutes: 16,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous distinguez les intitulés courants, vous savez ce que l'on attend d'un junior, et vous savez ce qui dépasse encore votre niveau d'autonomie."),
        h("Ce qu'il faut comprendre"),
        t("Les titres varient selon les entreprises. Ils ne sont pas normalisés par la loi. Un même mot peut cacher des missions très différentes.\n\nRecruteur / chargé de recrutement : en interne, on gère des demandes de managers, de l'annonce à la shortlist, parfois jusqu'à l'offre. En agence ou cabinet, on gère des missions clients, avec un volume et une pression commerciale plus visibles.\n\nAssistant recrutement / assistant RH recrutement : soutien opérationnel (planning, ATS, relances, convocations, premiers tris selon une grille). C'est souvent le premier poste. L'autonomie porte sur l'organisation, pas encore sur la décision d'embauche.\n\nTalent Acquisition Specialist : même famille, souvent dans des organisations qui veulent sourcer davantage (approche directe, marque employeur, viviers) plutôt que d'attendre les candidatures. Le fond métier reste le recrutement.\n\nTalent Acquisition Manager : encadre des recruteurs, pilote la stratégie, les indicateurs, les prestataires. Ce n'est pas un poste junior.\n\nConsultant en recrutement (cabinet) : vous travaillez pour plusieurs entreprises clientes. Vous vendez aussi une méthode et un délai. Vous n'êtes pas le RH du client : vous n'avez pas toujours accès à l'interne (mobilité, climat social).\n\nChargé de recrutement en intérim : forte réactivité, matching compétences / disponibilité / conditions de mission, relation triangulaire entreprise-agence-intérimaire. Le droit du travail temporaire a des règles propres (motif de recours, durée) : un junior s'appuie sur son agence et n'invente pas le cadre."),
        note("Politique interne : certaines entreprises interdisent au recruteur de formuler une offre sans validation RH/rémunération. D'autres le permettent dans une fourchette. Demandez toujours qui a le dernier mot, par écrit dans le brief."),
        h("Méthode opérationnelle"),
        t("Le premier jour, clarifiez par écrit : quels types de postes vous sont confiés ; jusqu'où vous allez (tri, préqual, entretien, offre) ; qui valide le salaire ; qui signe le contrat ; quels outils (ATS, jobboards, LinkedIn Recruiter ou équivalent) ; quels délais de réponse aux candidats. Sans cela, vous serez jugé sur des attentes non dites."),
        h("Exemple professionnel"),
        t("Léa, 24 ans, est « chargée de recrutement junior » dans une ETI industrielle. On lui confie des postes d'opérateurs, de techniciens et d'assistants. Les cadres sont gérés par son responsable. En parallèle, Karim est « consultant junior » en cabinet généraliste : il doit produire une shortlist de trois profils en dix jours pour un client PME qu'il n'a vu qu'une heure. Même métier de fond, contraintes opposées : Léa a le temps de connaître l'atelier ; Karim doit extraire le besoin très vite et documenter ce que le client n'a pas dit."),
        h("Erreurs fréquentes"),
        t("Se présenter comme « RH » au sens large alors que vous ne gérez ni paie, ni discipline, ni licenciement. Accepter de « décider seul » un refus sur un critère flou. En cabinet, promettre un profil introuvable pour gagner le mandat."),
        h("Situations particulières"),
        t("Dans une startup de 12 personnes, le « recruteur » peut être le fondateur, aidé d'un assistant. Votre valeur est alors la méthode (critères, grille, légalité), pas un organigramme RH. Dans un groupe, vous n'êtes qu'un maillon : respecter le process n'est pas de la paperasse, c'est la condition pour que 15 managers ne recrutent pas chacun dans leur coin."),
        h("Mise en pratique"),
        t("On vous propose deux offres : « Assistant RH F/H » dans une clinique (80 salariés) et « Talent Acquisition Specialist » dans un éditeur logiciel. Pour chacune, listez 5 missions probablement juniors et 3 missions qui devraient rester supervisées."),
        h("Correction détaillée"),
        t("Clinique / assistant : convocations, tri selon grille, planning d'entretiens, relances, mise à jour ATS, accueil candidat. Supervisé : offre salariale, contrat, gestion d'un conflit de discrimination, choix final médical si hors de votre champ.\nÉditeur / TA : sourcing booléen, approches, préqual, présentation shortlist. Supervisé : négocier un package hors grille, représenter l'entreprise sur un contentieux, changer seul la politique de cooptation.\nLe titre « Specialist » n'augmente pas vos droits : il augmente souvent le volume de sourcing attendu."),
      ],
    }),
    lesson({
      title: "Interne, externe, cabinet, intérim : quatre organisations",
      description: "Comprendre qui fait quoi selon que l'on recrute en entreprise, via un cabinet ou une agence.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous expliquez les différences de fonctionnement entre un service recrutement interne, un cabinet, une agence d'intérim, et vous savez qui sont vos interlocuteurs (manager, RH, direction, client)."),
        h("Ce qu'il faut comprendre"),
        t("Recrutement interne (au sein de l'entreprise) : vous êtes salarié de l'organisation qui embauche. Vous avez accès au climat, aux mobilités, aux managers, parfois aux grilles de salaire. Votre succès se mesure à la qualité des embauches et au temps pour pourvoir, pas à une facture.\n\nRecrutement externe au sens « faire appel à un prestataire » : l'entreprise mandate un cabinet (recherche, chasse, RPO) ou une agence d'intérim. Le prestataire n'est pas l'employeur final, sauf cas d'intérim où l'agence est l'employeur de l'intérimaire pendant la mission.\n\nCabinet de recrutement : mission de recherche, souvent rémunérée au succès ou au retainer. Vous livrez des candidats évalués. Vous ne décidez pas l'embauche. La confidentialité vis-à-vis du marché est critique (le client ne veut pas toujours que l'on sache qu'il recrute).\n\nAgence d'intérim : l'entreprise utilisatrice a un besoin ponctuel ou de remplacement. L'agence recrute, embauche l'intérimaire, le met à disposition. Le rythme est court. La relation se joue aussi sur la disponibilité et la conformité du contrat de mission.\n\nDans tous les cas, le manager recruteur (celui qui a le besoin) reste le donneur d'ordre métier. Le recruteur n'est pas son assistant personnel : c'est un professionnel qui dit non à un critère illicite et qui structure le choix."),
        h("Méthode opérationnelle"),
        t("Dès l'arrivée, dessinez votre carte d'interlocuteurs :\n- Manager : besoin, entretiens métier, choix.\n- RH / administration du personnel : contrat, DPAE, grilles, dossiers.\n- Direction : arbitrage budgétaire, postes sensibles.\n- Communication / marque employeur : pages carrière, événements.\n- Prestataires : jobboards, cabinet, intérim.\n- Candidats : information claire, délais, données personnelles.\nNotez qui valide quoi. Sans cette carte, vous enverrez des e-mails dans le vide."),
        code(`CARTE D'INTERLOCUTEURS — à remplir à J+3
Poste type confié : .................................
Qui ouvre le poste (budget) : .......................
Qui brief : .........................................
Qui publie l'annonce : ..............................
Qui préqualifie : ...................................
Qui fait l'entretien RH : ...........................
Qui fait l'entretien métier : .......................
Qui fait l'offre : ..................................
Qui prépare le contrat / la DPAE : ..................
Outil ATS : ......................... Accès : oui/non
Délai de réponse candidat visé (politique interne) : .`),
        h("Exemple professionnel"),
        t("Un site industriel de 400 personnes a deux recruteurs internes et un contrat-cadre avec une agence d'intérim pour les pics d'activité. Le junior interne ne « concurrence » pas l'agence : il oriente vers l'intérim les besoins de trois semaines, et conserve le CDI technicien. Mélanger les deux sans le dire au manager crée des doublons et des candidats contactés deux fois."),
        h("Erreurs fréquentes"),
        t("En cabinet : critiquer le process interne du client devant un candidat. En interne : traiter l'agence comme un adversaire. En intérim : envoyer un profil sans vérifier la compréhension des horaires. Partout : copier le manager en oubliant le candidat, ou l'inverse."),
        h("Situations particulières"),
        t("RPO (Recruitment Process Outsourcing) : un prestataire gère une partie du process comme s'il était interne. Votre badge et votre messagerie peuvent être ceux du client ; vos règles de confidentialité restent celles d'un prestataire. Demandez ce qui peut sortir de l'entreprise.\n\nRecrutement confidentiel : le poste n'est pas public (remplacement d'une personne encore en poste). Pas d'annonce nominative, sourcing discret, information minimale aux candidats jusqu'au bon moment. Ce n'est pas un prétexte pour mentir."),
        h("Mise en pratique"),
        t("Classez ces trois phrases : interne, cabinet, ou intérim ?\nA. « Je dois vous proposer trois profils avant vendredi, le client valide lundi. »\nB. « La DPAE partira quand le contrat sera signé, je coordonne avec la paie. »\nC. « La mission est de six semaines, 5 h – 13 h, habilitation obligatoire, démarrage lundi. »"),
        h("Correction détaillée"),
        t("A. Cabinet (ou chasse) : logique de shortlist datée pour un client.\nB. Interne : coordination contrat / formalités d'embauche de l'employeur.\nC. Intérim : mission courte, horaires, habilitation, démarrage immédiat.\nUne phrase seule ne suffit jamais en réel : on confirme toujours avec le contrat et l'interlocuteur. Mais ces signaux vous aident à adapter votre cadence."),
      ],
    }),
    lesson({
      title: "Compétences, posture, éthique et confidentialité",
      description: "Ce que l'on attend d'un junior au-delà des outils : jugement, discrétion, respect des personnes.",
      minutes: 16,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous identifiez les compétences techniques et comportementales du métier, et vous savez ce que signifie concrètement confidentialité et éthique au quotidien."),
        h("Ce qu'il faut comprendre"),
        t("Compétences techniques (on les travaille dans toute la formation) : cadrer un besoin, rédiger, sourcer, lire un CV, entretenir, évaluer, utiliser un ATS, connaître le cadre légal de base, suivre un pipeline.\n\nCompétences comportementales : écoute, clarté, tenue des délais, résistance à la pression du « il me faut quelqu'un », capacité à dire non avec des faits, empathie sans naïveté, organisation.\n\nLa posture professionnelle, ce n'est pas un sourire de commercial. C'est traiter chaque candidat comme une personne dont les données et la réputation vous sont confiées. Un CV laissé sur une imprimante, un commentaire « il a une tête de pas fiable » dans un open space, un message LinkedIn copié-collé au prénom faux : ce sont des fautes métier.\n\nÉthique : vous ne promettez pas un poste pour « garder » quelqu'un au chaud. Vous ne inventez pas une autre offre pour faire pression. Vous ne discriminez pas, même si un manager vous le demande à mots couverts. Vous n'utilisez pas les données d'un candidat pour un autre usage (démarchage commercial, curiosité personnelle).\n\nConfidentialité : salaires, raisons d'un remplacement, état de santé éventuellement révélé, vie personnelle, résultats d'évaluation. L. 1221-8 : les résultats des méthodes d'aide au recrutement sont confidentiels. Au-delà de l'article, c'est la confiance du marché."),
        note("Obligation légale : non-discrimination, pertinence des informations (L. 1221-6), confidentialité des résultats des techniques de recrutement (L. 1221-8), protection des données. Le reste de la « déontologie » est une exigence professionnelle et souvent une politique interne (charte, règlement, clause de confidentialité de votre propre contrat)."),
        h("Méthode opérationnelle"),
        t("Règles simples à tenir dès la première semaine :\n- Ne parlez des candidats que aux personnes qui ont besoin d'en connaître (manager du poste, RH concernés).\n- Pas de CV dans les salles de pause. Pas de partage de dossier via un lien public.\n- Notes d'entretien factuelles, pas de qualificatifs de personne.\n- Si un manager vous demande « on ne veut pas de femme, elles tombent enceintes » : vous refusez le critère, vous proposez des critères de poste (horaires, astreintes, déplacements) et vous alertez votre responsable. Vous ne « traduisez » pas la demande illicite en annonce.\n- Si vous vous trompez de destinataire d'e-mail : dites-le à votre responsable, ne cachez pas."),
        h("Exemple professionnel"),
        t("En cabinet, un consultant junior raconte au déjeuner qu'un directeur financier candidat « se fait jeter par son conseil d'administration ». L'information remonte. Le candidat retire sa confiance, le client s'inquiète de la discrétion du cabinet. Le junior n'a « rien publié » : il a brisé le métier. La confidentialité se joue aussi à la cantine."),
        h("Erreurs fréquentes"),
        t("Se croire « entre RH » donc tout se dit. Stocker des CV sur une clé USB personnelle. Ajouter des candidats à votre réseau perso pour les suivre après un refus. Minimiser une demande discriminatoire « c'était une blague du manager »."),
        h("Situations particulières"),
        t("Vous recrutez le futur manager de votre ami. Vous êtes en conflit d'intérêts. Dites-le et sortez du process, ou faites évaluer uniquement par d'autres. Mieux vaut un dossier réassigné qu'une suspicion de favoritisme."),
        h("Mise en pratique"),
        t("Un manager vous envoie un SMS : « Franchement, le n°2 de ta shortlist, je l'ai googlé, il milite. On oublie. » Que faites-vous dans les 24 heures ?"),
        h("Correction détaillée"),
        t("Vous ne « oubliez » pas sur cette base. Les opinions politiques sont un critère protégé (L. 1132-1). Vous rappelez par un canal professionnel (pas un SMS de réponse improvisé) que la décision doit porter sur les compétences du poste. Vous documentez. Vous en parlez à votre responsable RH/recrutement. Si le manager insiste, ce n'est plus un problème de « feeling » : c'est un risque juridique pour l'entreprise. Un junior n'est pas un juriste, mais il n'est pas non plus un exécutant d'une discrimination."),
      ],
    }),
    lesson({
      title: "Une journée type de recruteur junior",
      description: "Simulation d'une journée réelle : plusieurs postes en parallèle, imprévus, priorités.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous visualisez le rythme réel du métier et vous savez prioriser sans tout abandonner quand un manager « crie »."),
        h("Ce qu'il faut comprendre"),
        t("Un recruteur junior gère rarement un seul poste. Le métier est un portefeuille : plusieurs process à des stades différents, des relances, des imprévus (annulation, contre-offre, absence de manager), et des tâches invisibles (ATS, comptes rendus).\n\nSi vous ne bloquez pas des plages, la journée devient une suite d'interruptions. Les candidats le sentent : réponses tardives, entretiens mal préparés. Les managers aussi : « le recrutement n'avance pas » alors que vous avez passé deux heures à chercher un créneau."),
        h("Méthode opérationnelle"),
        t("Structurez la journée en blocs, même imparfaits :\n- Matin tôt : relances critiques (offres en cours, entretiens du jour).\n- Plage sourcing / tri CV sans réunion.\n- Plage appels de préqualification.\n- Entretiens (jamais enchaînés sans 15 minutes de notes).\n- Fin de journée : mise à jour ATS, messages aux candidats, points d'alerte pour demain.\nChaque poste a un prochain acte daté. S'il n'y en a pas, le poste est en train de mourir."),
        code(`SIMULATION — Mardi, agence interne d'une ETI de services (Lyon)
08:30  L'offre d'Amina (contrôleur de gestion) expire demain. Pas de nouvelle depuis vendredi.
08:40  Le manager « Tech support » veut avancer l'entretien de 14 h à 11 h.
08:50  22 nouvelles candidatures sur l'annonce « Assistant commercial ».
09:15  Un candidat opérateur appelle : il a une autre proposition, réponse ce soir.
09:30  Réunion de brief (création d'un poste chargé QHSE) — 45 min.
11:00  Préqualification prévue avec un profil pénurique (automaticien).
12:30  Pause. Le manager QHSE envoie 8 critères supplémentaires par e-mail.
14:00  Entretien structuré assistant commercial (1er candidat).
15:30  Point avec votre responsable : pipeline de la semaine.
16:30  Comptes rendus + ATS + e-mails de refus du tri de la semaine dernière.
17:30  Le DG demande « un stagiaire marketing pour lundi ».

Portefeuille du jour : 6 postes ouverts, 2 offres en cours, 1 brief nouveau.`),
        h("Exemple — comment prioriser cette journée"),
        t("Priorité 1 : l'offre qui expire (Amina) et le candidat qui a une autre proposition ce soir. Ce sont des décisions irréversibles à très court terme.\nPriorité 2 : honorer l'entretien de 14 h et la préqual du profil pénurique — la qualité se joue là.\nPriorité 3 : le brief QHSE, mais en recentrant les 8 critères supplémentaires (sinon le poste devient introuvable).\nPriorité 4 : le tri des 22 CV, avec une grille, pas au feeling dans les transports.\nÀ reculer ou à cadrer : le déplacement de l'entretien à 11 h s'il casse la préqual pénurique ; le stage « pour lundi » n'est pas un brief, c'est une impulsion. Vous proposez un point de 20 minutes avec missions, tuteur, gratification, dates réelles."),
        h("Erreurs fréquentes"),
        t("Tout traiter dans l'ordre d'arrivée des e-mails. Annuler un candidat pour faire plaisir à un manager sans lui proposer d'alternative. Faire les comptes rendus « ce week-end ». Oublier les refus : le silence n'est pas neutre, il construit une réputation."),
        h("Situations particulières"),
        t("Journée de salon école : vous n'avancez pas vos process. Prévenez les managers la veille, bloquez un successeur pour les urgences, et collectez les contacts dans l'ATS le soir même, pas « la semaine prochaine ».\nJournée 100 % visio : fatigue réelle. Pas plus d'entretiens que vous ne pouvez noter. Un entretien sans notes n'existe pas."),
        h("Mise en pratique"),
        t("Dans la simulation, que dites-vous au manager qui veut passer l'entretien de 14 h à 11 h, alors que 11 h est déjà pris par un automaticien rare ?"),
        h("Correction détaillée"),
        t("Vous ne dites pas « non » sec. Vous dites : « 11 h est déjà tenu avec un profil difficile à replanifier. Je peux proposer 12 h 15, 16 h 30, ou je déplace l'assistant commercial si vous confirmez que l'automaticien est moins prioritaire. » Vous donnez un choix. Vous protégez l'engagement déjà pris. Vous documentez. C'est la posture junior solide : transparente, pas obstinée."),
      ],
    }),
    lesson({
      title: "Gérer plusieurs recrutements, difficultés et indicateurs",
      description: "Porter un pipeline, nommer les difficultés du métier, lire quelques indicateurs sans les fétichiser.",
      minutes: 16,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous savez tenir un tableau de suivi simple, expliquer ce qu'est un indicateur de recrutement, et ce qu'un indicateur ne dit pas."),
        h("Ce qu'il faut comprendre"),
        t("Les difficultés du métier sont structurelles : délais trop courts, briefs flous, marchés pénuriques, managers absents, candidats qui disparaissent, concurrence salariale, outils mal remplis. Un junior qui croit que « s'il était meilleur, tout serait fluide » s'épuise.\n\nUn pipeline (ou vivier opérationnel du poste) décrit où en sont les personnes : nouvellement sourcés, CV reçus, préqualifiés, entretien 1, entretien 2, offre, embauche, refus. Sans pipeline, vous racontez des impressions.\n\nLes indicateurs courants :\n- Time to fill : délai entre l'ouverture du poste et l'acceptation (définissez la date de début avec votre équipe : validation budgétaire ? publication ?).\n- Time to hire : souvent entre candidature d'une personne et son acceptation.\n- Taux de conversion d'une étape à l'autre.\n- Taux d'acceptation des offres.\n- Sources qui produisent des embauches, pas seulement des clics.\n\nIl n'existe pas de « bon » time to fill universel. Un opérateur en intérim et un expert réglementaire n'ont pas le même marché. Un chiffre sans contexte pousse à recruter trop vite ou à se justifier de travers.\n\nLa qualité d'une embauche se voit plus tard (période d'essai, tenue du poste). Le recruteur junior n'a pas toujours cet indicateur : il doit au moins viser des critères tenus et une expérience candidat propre."),
        note("Bonne pratique : un tableau unique par poste. Politique interne : certains groupes imposent un ATS et des champs obligatoires. Obligation légale : pas de « KPI minimum » dans le Code du travail. En revanche, les données du tableau sont des données personnelles : accès limité, pas de colonnes « origine » ou « âge » pour trier."),
        h("Méthode opérationnelle"),
        t("Chaque lundi, pour chaque poste ouvert : prochain acte, date, responsable, risque (budget, pénurie, manager en congés). Chaque vendredi : ce qui a bougé, ce qui est bloqué, ce que vous demandez. Dix minutes par poste, pas un roman."),
        code(`SUIVI HEBDO (extrait)
Poste              Stade        Prochain acte              Date    Risque
Automaticien N3    Préqual      Entretien manager          17/10   1 seul profil
Assistant comm.    Entretien 1  CR + 2e convocation        15/10   Manager lent
QHSE               Brief        Recadrer 8 critères        16/10   Profil introuvable
Contrôleur gest.   Offre        Relance Amina              14/10   Expire demain
Stagiaire mktg     Non cadré    Point 20 min DG            15/10   Pas un besoin`),
        h("Exemple professionnel"),
        t("Une direction demande « pourquoi 45 jours ». Le junior répond « les candidats sont nuls ». Mauvaise réponse. Bonne réponse : « 12 jours de brief instable, 8 jours sans créneau manager, 40 CV dont 4 correspondants, 2 désistements après la fourchette salariale. » Les indicateurs servent à ça : expliquer avec des faits, puis proposer un levier (salaire, critères, canaux, disponibilité des managers)."),
        h("Erreurs fréquentes"),
        t("Remplir l'ATS une fois par mois. Optimiser le délai en sautant l'entretien structuré. Utiliser le taux de refus des CV comme preuve que « le marché est mauvais » alors que l'annonce est illisible."),
        h("Situations particulières"),
        t("Volume : 30 postes identiques (retail). L'indicateur utile devient le taux de présence à l'entretien et le délai d'offre, pas le roman de chaque CV. Cadre rare : l'indicateur utile est le nombre de profils réellement en contact, pas le nombre de vues de l'annonce."),
        h("Mise en pratique"),
        t("Votre tableau montre 80 candidatures, 2 entretiens, 0 offre, 40 jours. Proposez 3 hypothèses à vérifier avant de conclure « il n'y a personne »."),
        h("Correction détaillée"),
        t("Hypothèses à tester : (1) critères trop hauts ou discriminatoires cachés ; (2) rémunération ou lieu non dits, donc auto-sélection inverse ; (3) tri trop sévère ou biaisé ; (4) managers qui n'ouvrent pas leurs créneaux ; (5) annonce trompeuse qui attire hors cible. Vous vérifiez avec le brief, 10 CV du rejet, et le calendrier réel. « Personne sur le marché » est une conclusion, pas un point de départ."),
      ],
    }),
    lesson({
      title: "Évolutions de carrière et limites d'un premier poste",
      description: "Voir vers où le métier mène, et ce qu'un junior ne doit pas porter seul.",
      minutes: 14,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous situez un premier poste dans une trajectoire, et vous savez quand escalader (juridique, offre, conflit, discrimination)."),
        h("Ce qu'il faut comprendre"),
        t("Après un premier poste : chargé de recrutement confirmé, spécialisation (IT, industrie, volume, chasse), TA partner d'un métier, responsable recrutement, consultant cabinet, puis parfois RH généraliste ou mobilité. Rien n'est automatique. Ce qui se construit tôt : exigence de preuves, maîtrise du cadre légal de base, qualité de relation manager/candidat.\n\nLimites d'un junior — à faire valider :\n- Toute demande qui ressemble à un critère discriminatoire.\n- Toute « promesse d'embauche » écrite engageante (voir module offre : offre vs promesse unilatérale).\n- Tout écart majeur à la grille de rémunération.\n- Tout usage d'un test ou d'une IA sans information des candidats.\n- Tout recrutement international (titre de séjour, droit du travail d'un autre pays).\n- Tout conflit ouvert avec un manager sur un refus de candidat.\nEscalader n'est pas se défiler : c'est protéger l'entreprise et les personnes."),
        h("Méthode opérationnelle"),
        t("Tenez une liste « je décide / je propose / je transmets ». Revoyez-la avec votre responsable à J+15. Si la liste n'existe que dans votre tête, vous prendrez trop ou trop peu."),
        h("Exemple professionnel"),
        t("Un junior en startup signe dans un chat : « c'est bon, tu es pris, on t'envoie le contrat la semaine pro ». Le fondateur change d'avis. Le candidat a démissionné. Selon les termes, on n'est peut-être plus dans « un message informel » mais dans un engagement. Le junior a voulu être réactif. Il a créé un risque. La bonne pratique : « Je confirme l'intérêt, l'offre écrite part après validation RH, avec une date de réponse. »"),
        h("Erreurs fréquentes"),
        t("Croire qu'il faut tout résoudre seul pour « faire ses preuves ». Ou, à l'inverse, transférer chaque CV au manager sans valeur ajoutée. Les deux extrêmes sont visibles en entretien d'embauche de recruteur : on vous testera là-dessus."),
        h("Situations particulières"),
        t("Vous êtes le seul « RH » de 20 personnes. Les limites restent. Vous documentez davantage, vous vous appuyez sur Service-Public / l'Urssaf / un expert-comptable pour les formalités, vous ne devenez pas juriste par improvisation."),
        h("Mise en pratique"),
        t("Classez : je décide / je propose / je transmets.\n1. Convocation à un entretien dont le guide est déjà validé.\n2. Refus d'un candidat après entretien, grille complète, accord manager.\n3. Manager qui veut ajouter « nationalité française » à l'annonce.\n4. Candidat qui demande l'accès à ses données.\n5. Hausse de 8 % hors fourchette pour emporter une offre."),
        h("Correction détaillée"),
        t("1. Je décide (exécution d'un process validé).\n2. Je propose puis j'exécute le refus si le process le prévoit ; je ne « cache » pas le refus.\n3. Je transmets : critère illicite (discrimination). Je ne publie pas.\n4. Je transmets au responsable de traitement / DPO / RH : droit des personnes (RGPD). Je n'ignore pas, je n'invente pas une procédure.\n5. Je propose un argumentaire et je transmets à qui valide les salaires.\nSi votre entreprise dit le contraire pour le point 2, c'est une politique interne : vous la suivez si elle reste légale."),
      ],
    }),
    quizLesson({
      title: "Quiz — Le métier de recruteur",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "Quel énoncé décrit le mieux le recrutement ?",
          options: [
            "A. Publier une annonce et attendre les CV",
            "B. Un processus qui va du besoin à l'intégration, dans un cadre légal et budgétaire",
            "C. La chasse exclusive de profils cadres sur les réseaux",
            "D. La gestion de la paie des nouveaux embauchés",
          ],
          correct: 1,
          explanation:
            "Le recrutement relie un besoin, des critères, une recherche, une évaluation, une décision et une intégration. L'annonce n'est qu'un canal possible. La paie n'est pas le cœur du métier recruteur.",
        }),
        q({
          question: "Un manager vous demande un candidat « pas trop vieux ». Que faites-vous ?",
          options: [
            "A. Vous l'écrivez dans l'annonce sous la forme « 25-35 ans » pour être précis",
            "B. Vous refusez le critère d'âge et reformulez en exigences du poste (horaires, habilitations, déplacements)",
            "C. Vous le notez dans l'ATS en commentaire privé, sans le dire",
            "D. Vous attendez d'avoir des CV pour appliquer le filtre discrètement",
          ],
          correct: 1,
          explanation:
            "L'âge est un critère de discrimination interdit (L. 1132-1). Le cacher dans l'ATS ou le filtre « discret » reste une discrimination. On reformule en contraintes réelles du poste, si elles sont pertinentes (L. 1221-6).",
        }),
        q({
          question: "En agence d'intérim, qui est généralement l'employeur de la personne en mission ?",
          options: [
            "A. L'entreprise utilisatrice uniquement",
            "B. Le recruteur junior à titre personnel",
            "C. L'agence de travail temporaire, pendant la mission",
            "D. France Travail",
          ],
          correct: 2,
          explanation:
            "Dans le travail temporaire, l'agence est l'employeur de l'intérimaire mis à disposition de l'entreprise utilisatrice. C'est une organisation différente du CDI interne.",
        }),
        q({
          question: "Les résultats d'un test d'aide au recrutement, en droit français :",
          options: [
            "A. Peuvent être affichés dans l'open space pour que l'équipe vote",
            "B. Sont confidentiels, et le candidat doit être informé des méthodes avant leur mise en œuvre",
            "C. Appartiennent au manager, qui peut les transférer à qui il veut",
            "D. N'existent que si le CSE les a votés",
          ],
          correct: 1,
          explanation:
            "L. 1221-8 : information préalable du candidat, résultats confidentiels, méthodes pertinentes. Ce n'est pas un « nice to have ».",
        }),
        q({
          question: "Vous avez une offre qui expire demain et 22 CV à trier. Quelle priorité est la plus professionnelle ?",
          options: [
            "A. Trier d'abord les 22 CV, l'offre attendra",
            "B. Traiter l'offre en cours (acte irréversible à court terme), puis honorer les entretiens déjà pris, puis trier avec une grille",
            "C. Tout avancer de 10 % pour être équitable",
            "D. Demander au manager de tout décaler d'une semaine",
          ],
          correct: 1,
          explanation:
            "On protège d'abord ce qui est irréversible à très court terme (offre, candidat avec autre proposition), puis les engagements déjà pris, puis le volume. L'équité n'est pas de tout faire un peu.",
        }),
        q({
          question: "Le time to fill, utilisé sans précaution, pose surtout quel problème ?",
          options: [
            "A. Il est interdit par le Code du travail",
            "B. Il n'existe que pour les cadres",
            "C. Sans définition des dates de début/fin et sans contexte de marché, il pousse à de mauvaises conclusions",
            "D. Il remplace l'évaluation des compétences",
          ],
          correct: 2,
          explanation:
            "Ce n'est pas une obligation légale. C'est un indicateur interne. Mal défini, il fait recruter trop vite ou accuser à tort « le marché ».",
        }),
        q({
          question: "Un Talent Acquisition Manager, par rapport à un recruteur junior, c'est principalement :",
          options: [
            "A. Le même poste, avec un titre plus moderne",
            "B. Un rôle d'encadrement et de pilotage (équipe, stratégie, prestataires), pas un premier emploi type",
            "C. Un juriste spécialisé en contrats",
            "D. Un commercial qui ne voit jamais de candidats",
          ],
          correct: 1,
          explanation:
            "Les titres ne sont pas normalisés, mais « manager » désigne en pratique un rôle de pilotage. Un junior ne s'auto-proclame pas TA Manager.",
        }),
        q({
          question: "Quelle affirmation est exacte ?",
          options: [
            "A. Le recruteur junior décide toujours seul de l'embauche",
            "B. Documenter le process est souvent une bonne pratique (preuves, RGPD, qualité), même si aucun « dossier type » n'est dicté par un article unique",
            "C. La confidentialité ne s'applique qu'aux cadres dirigeants",
            "D. En cabinet, on peut citer les candidats au déjeuner si on ne dit pas l'entreprise",
          ],
          correct: 1,
          explanation:
            "L'embauche est une décision d'employeur, pas un caprice du junior. La documentation est une bonne pratique (et utile face au risque de discrimination / RGPD). La confidentialité ne s'arrête pas à la cantine.",
        }),
      ],
    }),
  ],
};
