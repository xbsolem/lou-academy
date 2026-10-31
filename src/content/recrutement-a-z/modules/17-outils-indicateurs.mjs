import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 17,
  title: "Outils et indicateurs du recrutement",
  description:
    "Utiliser ATS, CRM et pipeline, calculer les indicateurs (délais, coûts, conversion, sources, qualité, expérience) sans inventer de norme magique, et connaître les limites de l'IA.",
  lessons: [
    lesson({
      title: "ATS, CRM et pipeline : piloter le flux sans se noyer dans l'outil",
      description:
        "Comprendre à quoi servent l'ATS, le CRM recrutement et le pipeline, et quelles disciplines de saisie rendent les indicateurs fiables.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous distinguez ATS (suivi des candidatures et des postes), CRM recrutement (relation vivier / contacts) et tableur de secours.\n\nVous savez représenter un pipeline par étapes, avec un statut unique par candidature et une date d'entrée dans chaque étape.\n\nVous savez pourquoi une saisie incomplète rend tous les indicateurs mensongers."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'ATS (Applicant Tracking System) est le système de suivi des candidatures. Il relie un besoin (poste, requisition) à des personnes, des étapes, des documents, des messages et des décisions. Il n'est pas un réseau social. Il n'est pas non plus, à lui seul, un dossier paie. Son utilité : ne pas perdre une candidature, savoir qui attend une réponse, produire des indicateurs, tracer une décision. Une obligation légale n'est pas « d'avoir un ATS » : beaucoup de TPE fonctionnent avec messagerie et tableur. L'outil est une politique interne et une bonne pratique d'organisation dès que le volume dépasse la mémoire d'une personne.\n\nLe CRM recrutement (parfois un module de l'ATS) sert à suivre des contacts qui ne sont pas forcément candidats d'un poste ouvert : vivier, cooptations, anciens finalistes, écoles. Il impose le même cadre RGPD que le recrutement : information, finalité, durées, opposition. La recommandation CNIL d'un vivier jusqu'à 2 ans à compter du dernier contact, sauf opposition, n'est pas une durée unique imposée par le RGPD lui-même ; l'archivage intermédiaire 5 ans à compter du pourvoi du poste, à des fins probatoires, s'appuie sur L. 1134-5. L'outil ne crée pas le droit ; il doit pouvoir l'appliquer (date de dernier contact, information, suppression).\n\nLe pipeline est la représentation du flux : combien de personnes à chaque étape, pour un poste ou pour un portefeuille. Un pipeline n'est fiable que si chaque candidature a un et un seul statut courant, une date d'entrée dans l'étape, un motif de sortie lorsque c'est un refus. « En cours » fourre-tout n'est pas un statut. Les étapes types — à adapter à l'entreprise — sont : nouveau, tri CV, préqualification, entretien 1, entretiens suivants, shortlist, offre, embauche, refusé, sans réponse, réserve, attente. Trop d'étapes tue la saisie ; trop peu empêche de voir où le flux se casse.\n\nL'ATS ne décide pas. Il enregistre. Les méthodes d'aide au recrutement, y compris lorsqu'elles sont outillées (scoring, parsing, ranking), doivent être pertinentes au regard de la finalité (L. 1221-9) et le candidat doit être informé préalablement des méthodes utilisées à son égard (L. 1221-8). Un scoring opaque qui écarte sur un proxy d'âge, de genre ou d'origine n'est pas « de la data » : c'est un risque de discrimination (L. 1132-1).\n\nLe junior n'est pas administrateur système. Il est responsable de la qualité de ce qu'il saisit : dates réelles, sources, commentaires professionnels, pas de données hors L. 1221-6. Un commentaire « look pas corporate » dans l'ATS est une preuve potentielle, pas une aide-mémoire anodine."
        ),
        note(
          "Pas d'obligation légale d'utiliser un ATS. Obligation : non-discrimination, méthodes pertinentes, information du candidat, RGPD. Politique interne : outil, étapes, droits d'accès. Bonne pratique : un statut, une date, un motif interne de refus."
        ),
        h("Méthode opérationnelle"),
        t(
          "En début de poste : créer la réquisition avec date de validation du besoin (elle servira au time to fill). À chaque mouvement : changer le statut le jour même. Source saisie à l'entrée. Commentaire = fait d'évaluation, pas un jugement de personne. Droits d'accès : le manager voit ce qui lui est destiné, pas toute la CVthèque par curiosité. Export : ne pas sortir un fichier nominatif sur une clé USB personnelle."
        ),
        code(
          "PIPELINE MINIMAL — STATUTS (exemple interne, pas une norme légale)\n\n1. Nouveau (date d'entrée = date de candidature ou de premier contact)\n2. Tri CV\n3. Préqualification\n4. Entretien 1\n5. Entretien suivant / tests (si informés, L. 1221-8)\n6. Shortlist\n7. Offre\n8. Embauché\nS. Sans réponse / ghosting\nR. Refusé (motif interne, étape de sortie)\nA. Attente (date d'update)\nB. Réserve courte (date de caducité)\nV. Vivier (date dernier contact, info / opposition)\n\nRÈGLE DE SAISIE\n- Un seul statut courant\n- Date réelle, pas date de saisie rétroactive « pour faire joli » sauf correction tracée\n- Source : un canal principal\n- Interdit dans les commentaires : critères L. 1132-1, santé, rumeurs"
        ),
        h("Exemple professionnel"),
        t(
          "PME 60 personnes, tableur partagé. Trois recruteurs écrivent « ok », « top », « ko » dans la même colonne. Impossible de savoir qui doit un retour. Passage à un ATS léger : étapes fermées, responsable de chaque fiche, relance à J+2 sur les statuts « entretien 1 fait » sans débrief. L'outil n'a pas recruté ; il a rendu visible le goulot « manager ne débriefe pas »."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser 40 fiches en « nouveau » par peur de refuser. Dupliquer un candidat sous trois fiches. Saisir la source « LinkedIn » pour un coopté. Copier-coller un CV dans un prompt d'IA grand public. Donner au manager un accès admin « plus simple »."
        ),
        h("Situations particulières"),
        t(
          "Cabinet : un pipeline par mission client, confidentialité renforcée. Intérim : le pipeline mixte missions / disponibilités n'est pas le même objet qu'un CDI unique ; ne pas forcer un modèle entreprise. Multi-ATS (client + cabinet) : la vérité statutaire du junior est l'outil de son employeur ; il ne laisse pas le candidat dans le vide entre les deux."
        ),
        h("Mise en pratique"),
        t(
          "Voici des libellés trouvés dans un ATS. Recodez-les en statut + commentaire acceptable, ou dites « à supprimer / à alerter » : 1) « trop vieille mais sympa » ; 2) « entretien 1 ok, attente dispo manager, relance 18/10 » ; 3) « ko, pas le bon outil ERP » ; 4) « peut-être » ; 5) « enceinte ? à voir »."
        ),
        h("Correction détaillée"),
        t(
          "1) Alerter : critère d'âge, ne pas laisser. 2) Statut attente + date, commentaire factuel. 3) Refusé, motif interne professionnel. 4) Inacceptable comme statut : décider attente datée, réserve ou triangulation. 5) Alerter : santé / grossesse, hors L. 1221-6 et L. 1132-1. Pourquoi : l'ATS est une mémoire juridique autant qu'un kanban."
        ),
      ],
    }),

    lesson({
      title: "Time to fill et time to hire : deux délais, zéro norme magique",
      description:
        "Définir, calculer et interpréter les délais de recrutement sans invoquer un benchmark universel inventé.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez définir le time to fill et le time to hire selon la convention de ce cours, et vous savez qu'une entreprise peut les définir autrement : l'essentiel est de l'écrire.\n\nVous savez les calculer sur des données fictives et interpréter un écart, sans dire « c'est trop long par rapport au marché » sans source.\n\nVous savez quels leviers internes agissent sur chaque délai."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un délai de recrutement n'est pas une obligation légale. Aucun article du Code du travail ne fixe un nombre de jours « normal » pour pourvoir un poste. Les durées que vous calculerez ici sont des indicateurs de gestion. Ils servent à voir où le temps passe, à comparer des postes entre eux dans la même organisation, à détecter un goulot. Ils ne servent pas à humilier un junior, ni à invoquer une « moyenne marché » que ce cours n'a pas mesurée et que vous n'inventerez pas.\n\nConvention de ce cours, à écrire dans votre politique interne si vous l'adoptez :\n\nLe time to fill mesure le temps que l'organisation met à pourvoir un besoin, du point de vue du poste. Date de début : validation du besoin (réquisition approuvée, ouverture réelle du process). Date de fin : acceptation de l'offre (le poste est pourvu côté décision). Formule : date d'acceptation de l'offre − date de validation du besoin, en jours calendaires ou ouvrés, mais toujours la même convention. On ne mélange pas.\n\nLe time to hire mesure le temps que le candidat finalement embauché a passé dans le process. Date de début : son entrée (candidature reçue ou premier contact sourcé daté). Date de fin : la même acceptation d'offre. Formule : date d'acceptation − date d'entrée du candidat retenu.\n\nPourquoi deux indicateurs. Un time to fill long avec un time to hire court signifie que l'organisation a tardé à trouver (ou à ouvrir) le bon profil, mais a ensuite décidé vite sur la personne retenue. Un time to hire long avec un time to fill comparable signifie que le candidat retenu a attendu longtemps (risque de désistement, mauvaise expérience). Un time to fill qui s'arrête à J1 (prise de poste) n'est pas le même objet : il inclut le préavis. Ce cours le nomme alors « délai d'arrivée » si vous l'utilisez, pour ne pas le confondre avec le fill.\n\nIl n'existe pas de norme magique universelle (ni « 30 jours », ni « 45 jours », ni un pourcentage de marché). Un poste pénurique, un process à cinq entretiens, un comité mensuel, un préavis long, un gel budgétaire, faussent toute comparaison externe. Comparez d'abord : ce poste vs d'autres postes analogues chez vous ; cette vague vs la précédente ; le temps passé par étape (tri, attente manager, offre).\n\nCes indicateurs ne disent rien, à eux seuls, de la légalité du process. Un process très rapide peut être discriminatoire. Un process long peut être soigneux. On ne « gagne » pas du temps en sautant l'information sur les méthodes (L. 1221-8) ou en posant des questions hors L. 1221-6."
        ),
        note(
          "Écrivez vos dates de début et de fin. Ne changez pas de définition en cours d'année pour embellir un reporting. N'inventez pas de benchmark marché. N'utilisez pas un délai comme preuve qu'un candidat « n'était pas motivé »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dans l'ATS, champs obligatoires : date de validation du besoin, date d'entrée de chaque candidat, date d'offre, date d'acceptation. Calculez par poste, puis médiane sur un portefeuille (la moyenne est tirée par un outlier de 180 jours). Découpez par étape pour agir : relance manager, réduction d'un entretien inutile, offre plus rapide."
        ),
        code(
          "DÉFINITIONS — CONVENTION DU COURS\n\nTime to fill (TTF) = date_acceptation_offre − date_validation_besoin\nTime to hire (TTH) = date_acceptation_offre − date_entrée_candidat_retenu\nDélai d'arrivée (si utilisé) = date_prise_de_poste − date_validation_besoin\n\nEXERCICE DONNÉES FICTIVES — poste « Chargé de recrutement junior », PME services\n\nValidation du besoin : 02/03/2026\nCandidat retenu (Amina) : candidature le 20/03/2026, offre le 10/04/2026, acceptation le 12/04/2026, J1 le 02/06/2026\nAutre finaliste (Bruno) : premier contact sourcé le 05/03/2026 (non retenu)\n\nCalculez TTF et TTH en jours calendaires.\nInterprétez : que mesure-t-on si l'on s'arrête à J1 ?"
        ),
        h("Exemple professionnel"),
        t(
          "ETI industrielle. Le DRH demandait « pourquoi 70 jours, le marché c'est 40 ». Aucune source. Le junior présente le découpage : 25 jours avant première diffusion (fiche non validée), 15 jours d'attente de débrief, 20 jours de préavis dans le délai d'arrivée qu'on avait mélangé au fill. On sépare TTF et délai d'arrivée. On agit sur la validation de fiche et le débrief, pas sur un slogan de marché."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Partir de la date de publication de l'annonce alors que le besoin était validé trois semaines plus tôt (TTF sous-estimé). Partir de la date de création de fiche ATS renseignée le jour de l'embauche (TTF = 0, absurde). Comparer un CDD d'été et un cadre expert. Annoncer un TTF « sous 15 jours » au manager sans tenir compte des étapes qu'il impose."
        ),
        h("Situations particulières"),
        t(
          "Poste gelé 3 semaines : soit on stoppe le chronomètre (politique interne à écrire), soit on le laisse courir pour montrer le coût du gel. Les deux se défendent ; le mélange, non. Volume : médiane par campagne, pas une moyenne tirée par un poste resté ouvert 8 mois. Cabinet : TTF client (besoin client → acceptation) vs TTH cabinet (entrée du candidat chez vous → acceptation) : deux reportings, deux interlocuteurs."
        ),
        h("Mise en pratique"),
        t(
          "Calculez TTF et TTH (jours calendaires) sur les données Amina ci-dessus. Puis calculez le délai d'arrivée. En une phrase, dites ce que chaque chiffre permet de dire au manager, sans benchmark."
        ),
        h("Correction détaillée"),
        t(
          "TTF = 12/04 − 02/03 = 41 jours. TTH = 12/04 − 20/03 = 23 jours. Délai d'arrivée = 02/06 − 02/03 = 92 jours. On peut dire : 41 jours pour décider d'une embauche après ouverture ; Amina a passé 23 jours dans le process ; 92 jours avant qu'elle soit en poste, largement tirés par le préavis. On ne peut pas dire « 41 c'est bon / mauvais vs le marché » : aucune norme magique ici. Bruno n'entre pas dans le TTH (il n'est pas le retenu). Pourquoi deux délais : le manager qui ne voit que 92 jours croit que le recrutement a « duré un trimestre » alors qu'une part est un préavis, hors main du junior."
        ),
      ],
    }),

    lesson({
      title: "Coût, conversion, acceptation d'offres et désistement",
      description:
        "Calculer un cost per hire, des taux de passage et des taux d'acceptation / désistement, puis les lire avec prudence.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez poser une formule de coût par embauche en listant les coûts inclus, sans prétendre à un chiffre marché.\n\nVous savez calculer des taux de conversion d'étape à étape, un taux d'acceptation d'offres et un taux de désistement.\n\nVous savez interpréter un goulot sans accuser automatiquement « la qualité des CV »."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le cost per hire (coût par embauche) est un indicateur économique interne. Formule de base : somme des coûts de recrutement attribués à la période ou aux postes concernés, divisée par le nombre d'embauches réalisées sur le même périmètre. Le débat n'est pas la formule, c'est le numérateur. Incluez-vous : salaires chargés de l'équipe recrutement au prorata, jobboards, agence, cooptation, outils ATS, déplacements, tests payants, temps manager ? Une politique interne doit le dire. Un cost per hire qui n'inclut que les annonces, comparé à un autre qui inclut l'agence et les salaires, ne se compare pas. Ce cours n'avance aucun coût moyen national.\n\nLa conversion mesure le passage d'une étape à la suivante. Taux de conversion A→B = nombre de personnes passées en B / nombre de personnes entrées en A, sur un poste ou une période. On peut calculer : CV reçus → préqualifiés ; préqualifiés → entretien 1 ; entretien 1 → offre ; offre → acceptation. Un taux bas n'est pas « la faute des candidats » par défaut. Il peut signaler une annonce trop large, un tri trop sévère, un manager inatteignable, une offre non compétitive, un process trop long (le TTH rejoint ici le désistement).\n\nLe taux d'acceptation des offres = offres acceptées / offres émises (sur la période, en veillant aux offres encore ouvertes). Un taux bas oriente vers le contenu de l'offre, le délai, le process vécu, l'écart entre poste annoncé et poste réel — pas vers une psychologie générale des candidats.\n\nLe taux de désistement doit préciser l'étape : désistement après acceptation, après offre, après convocation, absence à entretien. Formule type : nombre de désistements à l'étape X / nombre de personnes arrivées à l'étape X. Mélanger ghosting pré-entretien et rupture d'essai fausse le pilote.\n\nAucun de ces taux n'est une obligation légale. Ils ne justifient pas non plus de discriminer pour « améliorer la conversion ». Un scoring qui écarte des adresses ou des âges pour « performer » heurte L. 1132-1. Un indicateur se lit avec le qualitatif (motifs de refus d'offre recueillis librement) et avec les volumes (un taux sur 3 personnes n'est pas un pilote)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Fixez le périmètre (poste, trimestre, type de contrat). Excluez les petits volumes de votre « alerte ». Pour chaque goulot, posez trois hypothèses (offre, process, ciblage) et une action de test, pas un discours. Tracez les motifs de refus d'offre dans une liste fermée courte : rémunération, contenu, délai, contre-offre, localisation, autre — sans insister si le candidat ne dit rien."
        ),
        code(
          "FORMULES (convention de cours)\n\nCost per hire = coûts_recrutement_inclus / nombre_d_embauches\nConversion A→B = effectif_étape_B / effectif_étape_A\nTaux d'acceptation d'offres = offres_acceptées / offres_émises_closes\nTaux de désistement après convocation = absences_ou_annulations_candidat / convocations_envoyées\n\nDONNÉES FICTIVES — campagne « Techniciens maintenance », 1 site, T1\n\nCoûts : jobboard 2 400 € ; cabinet (1 poste) 6 000 € ; ATS prorata 300 € ; cooptation 0 €\nSalaires recrutement : non inclus dans cette politique (à noter)\nEmbauches : 3\n\nFunnel : 120 CV → 24 préqual → 12 entretiens 1 → 5 offres émises → 3 acceptées → 1 désistement après acceptation (avant J1)\nConvocations entretien 1 : 14 (2 no-show)\n\nCalculez : cost per hire (selon numérateur ci-dessus) ; conversions CV→préqual, préqual→E1, E1→offre, offre→acceptation ; taux de no-show ; taux de désistement post-acceptation."
        ),
        h("Exemple professionnel"),
        t(
          "Startup. Le fondateur voit 5 offres pour 2 acceptations et dit « les gens ne sont pas sérieux ». Le junior aligne les motifs : 2 refus pour écart de rémunération déjà visible dès l'annonce, 1 pour délai de process de 6 semaines après entretien. Action : cadrer la fourchette en amont (bonne pratique, pas encore une obligation française consolidée d'indiquer le salaire dans l'annonce au jour des sources du cours — directive UE 2023/970 en transposition) et raccourcir le TTH. Pas de discours moral sur les candidats."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Diviser par le nombre de postes ouverts et non par les embauches réellement faites. Oublier le coût cabinet. Publier un taux d'acceptation de 100 % en omettant les offres encore ouvertes et les orales. Utiliser un taux sur 4 CV pour changer toute la stratégie. Accuser un canal « qui convertit mal » alors que le tri humain est incohérent."
        ),
        h("Situations particulières"),
        t(
          "Intérim : le « cost per hire » n'est pas toujours l'indicateur pertinent (coût de mission, taux d'entrée en mission). Cabinet : marge et délai client vs coût interne. Interne : un pourvoi interne a un coût (temps) mais pas le même numérateur d'agence ; ne le noyez pas dans le même ratio sans le dire."
        ),
        h("Mise en pratique"),
        t(
          "Calculez tous les indicateurs demandés dans le bloc données fictives « Techniciens maintenance ». Puis, en 5 lignes, proposez une hypothèse pour le goulot le plus marqué, sans invoquer de statistique nationale."
        ),
        h("Correction détaillée"),
        t(
          "Cost per hire = (2 400 + 6 000 + 300) / 3 = 8 700 / 3 = 2 900 € par embauche, salaires recrutement non inclus (à rappeler au lecteur du reporting).\nConversion CV→préqual = 24/120 = 20 %. Préqual→E1 = 12/24 = 50 %. E1→offre = 5/12 ≈ 41,7 %. Offre→acceptation = 3/5 = 60 %. No-show = 2/14 ≈ 14,3 %. Désistement post-acceptation = 1/3 ≈ 33 % (petit volume : on signale le fait, on ne déclare pas une « crise »).\nGoulot : 120→24 peut dire annonce trop large ou tri sévère ; 5 offres pour 3 acceptations + 1 désistement après oui oriente vers l'offre et le préboarding, pas vers « les techniciens ». Pourquoi : les pourcentages éclairent, les volumes et les motifs décident de l'action. 2 900 € n'est ni « cher » ni « bon marché » vs un marché non cité ici."
        ),
      ],
    }),

    lesson({
      title: "Sources, qualité d'embauche et expérience candidat",
      description:
        "Lire la performance des canaux, la qualité à 90 jours et l'expérience vécue, sans KPI inventés.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez attribuer une source principale par candidature et calculer volume, conversion et embauches par canal.\n\nVous savez poser un indicateur interne de qualité d'embauche (essai, satisfaction manager à une date, adéquation au poste) sans benchmark externe.\n\nVous savez approximer l'expérience candidat par des faits de process (délai de réponse, clôture, no-show) plutôt que par un slogan."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La source est l'origine principale de la candidature : annonce jobboard X, site carrière, cooptation, cabinet, sourcing direct, école, mobilité interne, agence d'intérim, candidature spontanée. Sans source saisie à l'entrée, tout reporting « quel canal marche » est une conversation. Règle : une source principale, éventuellement une source secondaire, pas cinq tags contradictoires.\n\nOn ne juge pas un canal au seul volume. Un canal qui envoie 200 CV hors critères et 0 embauche n'est pas « performant ». Un canal qui envoie 8 CV et 2 embauches mérite d'être lu en conversion et en qualité, pas d'être coupé parce que le volume est faible. Ce cours ne fournit pas de répartition « normale » entre LinkedIn, France Travail, cooptation, etc. Ces parts varient selon le métier, le bassin, le budget, l'image.\n\nLa qualité d'embauche n'est pas le charisme du junior. C'est la tenue de l'embauche au-delà du jour de signature : validation de l'essai, présence à 90 jours, avis du manager sur l'adéquation aux critères du poste, éventuellement autonomie atteinte — indicateurs internes à définir. Un recrutement « rapide et pas cher » qui se rompt en essai est un échec de qualité, visible si l'on relie ATS et RH. On n'invente pas un score magique 1-100 de « quality of hire marché ».\n\nL'expérience candidat est ce que la personne vit : clarté de l'annonce, délai de premier retour, tenue des rendez-vous, information sur les méthodes (L. 1221-8), questions licites (L. 1221-6), refus ou attente datée, cohérence offre / poste. On peut la rapprocher de faits : temps jusqu'au premier retour, part de candidatures clôturées, no-show, refus d'offre motivés par le process, incidents de communication. Un questionnaire post-process est une politique interne possible, volontaire, sans pression, sans données hors finalité. Pas de note moyenne nationale dans ce cours.\n\nRelier les trois évite les fausses victoires : un canal peu cher, conversion élevée, mais essais rompus et avis candidats dégradés, n'est pas à scaler. Un canal plus coûteux qui produit des embauches stables peut être défendable. L'arbitrage est managérial, chiffré, sans discrimination (on n'écarte pas un canal parce qu'il « amène tel public » au sens d'un critère protégé)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Champ source obligatoire. Tableau mensuel : volume, entretiens, offres, embauches, coût du canal si connu, essais validés à date. Enquête courte post-clôture (3 questions) si politique ok. REX qualité à 90 jours avec le manager, faits de poste."
        ),
        code(
          "DONNÉES FICTIVES — 1 mois, poste unique « Conseiller clientèle », centre de contacts\n\nCanal          CV   E1   Offres   Embauches   Coût canal (€)\nJobboard A      80    8      2         1          800\nCooptation      10    6      3         2            0 (prime non encore versée)\nSourcing direct 15    4      1         0          temps interne non chiffré\nSpontané        25    1      0         0            0\n\nÀ 90 jours (données RH fictives) : sur les 3 embauches, 1 rupture d'essai (issue du jobboard A), 2 toujours en poste (cooptation).\nPremier retour médian : jobboard 9 jours ; cooptation 2 jours ; sourcing 4 jours ; spontané 12 jours (plusieurs non clôturés).\n\nCalculez embauches / CV par canal. Interprétez qualité et expérience sans conclure à une loi de marché."
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim. Un jobboard ramène beaucoup d'inscriptions, peu de missions tenues à 1 mois. La cooptation de salariés déjà connus tient mieux. Le junior propose de garder le jobboard pour le volume d'urgence, mais de mesurer la tenue à 4 semaines, pas seulement les inscriptions. Pas de chiffre « marché de l'intérim » inventé : comparaison interne entre canaux de l'agence."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Attribuer toutes les embauches à « LinkedIn » parce que le CV est au format LinkedIn. Couper un canal le lendemain d'une campagne trop courte. Envoyer un NPS agressif le soir du refus. Mesurer la qualité au « feeling » du manager le jour J1 seulement."
        ),
        h("Situations particulières"),
        t(
          "Marque employeur forte : le spontané gonfle, la conversion CV→entretien baisse, ce n'est pas forcément un échec d'annonce. Secteur confidentiel : peu de canaux publics, la source « réseau dirigeant » doit être saisie comme telle. Handicap / partenaires emploi : un volume faible peut être un canal stratégique d'inclusion, non jugé au seul cost per hire."
        ),
        h("Mise en pratique"),
        t(
          "Sur le tableau fictif, calculez le taux d'embauche sur CV par canal. Puis rédigez 6 lignes de reporting pour le manager : que garder, que vérifier, ce que l'on ne peut pas conclure."
        ),
        h("Correction détaillée"),
        t(
          "Jobboard A : 1/80 = 1,25 %. Cooptation : 2/10 = 20 %. Sourcing : 0/15 = 0 %. Spontané : 0/25 = 0 %. Qualité : la seule embauche jobboard est aussi la rupture d'essai ; les 2 cooptations tiennent à 90 jours — signal interne, volume faible. Expérience : spontané et jobboard ont les premiers retours les plus lents, avec des non-clôturés — action de process, pas de morale. On ne peut pas conclure « la cooptation gagne toujours dans le secteur ». On peut décider : fiabiliser la clôture spontané/jobboard, continuer la cooptation, examiner pourquoi le sourcing n'a pas converti (cible, discours, délai). Pourquoi : trois familles d'indicateurs, une décision locale."
        ),
      ],
    }),

    lesson({
      title: "Reporting : dire vrai aux managers et à la direction",
      description:
        "Construire un point recrutement lisible, actionnable, sans vanity metrics ni benchmarks fantômes.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez sélectionner 6 à 10 indicateurs utiles pour un comité, avec définitions écrites.\n\nVous savez raconter un goulot (fait, hypothèse, demande d'arbitrage) plutôt que d'aligner des pourcentages.\n\nVous savez ce que l'on ne met pas dans un reporting (données sensibles, comparaisons discriminatoires, normes inventées)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le reporting n'est pas une obligation légale de forme. C'est un outil de décision. Un bon reporting répond à : combien de besoins ouverts, depuis quand, où ils bloquent, combien d'embauches, à quel délai interne, à quel coût selon la politique, avec quelle qualité récente, et quelles décisions vous demandez. Un mauvais reporting aligne des vanity metrics (likes, CV bruts, « reach ») qui n'aident personne à arbitrer une fiche, un budget ou un entretien de moins.\n\nLe public change le niveau. Le manager d'un poste veut : statut des personnes, dates, blocage précis, prochaine action. La direction veut : portefeuille, risques (postes critiques, désistements, coût agence), tendances internes. Le junior ne noie pas le second avec 40 prénoms, ni le premier avec un slide « vision data ». Les données personnelles restent minimisées : un comité de direction n'a pas besoin de l'âge, de l'adresse ou de l'état de santé d'un candidat. L. 1132-1 et le RGPD s'appliquent aussi aux tableaux.\n\nChaque indicateur porte sa définition en note de bas de page (TTF, TTH, cost per hire et son numérateur). Sans cela, un mois « meilleur » n'est qu'un changement de formule. On n'ajoute pas « vs marché = X jours » : ce cours n'a pas de telle source, et une direction sérieuse préfère une absence de chiffre à un chiffre inventé.\n\nLe reporting sert aussi à protéger le process : montrer qu'un délai est de l'attente manager, pas du sourcing, n'est pas une dénonciation, c'est un fait daté. Le ton reste professionnel, sans ironie, avec une demande claire (valider la fiche, libérer deux créneaux, accepter une fourchette).\n\nL'IA qui « génère un commentaire de reporting » n'exonère pas de vérifier les comptes. Un total qui ne recoupe pas l'ATS se voit. Mieux vaut un tableau plus pauvre et vrai."
        ),
        h("Méthode opérationnelle"),
        t(
          "Hebdo manager : kanban + 5 lignes. Mensuel direction : 1 page. Toujours : définitions, volume, action demandée. Relecture : aucune colonne âge/sexe/origine, aucun commentaire L. 1132-1, aucun benchmark sans source."
        ),
        code(
          "CANEVAS 1 PAGE — COMITÉ MENSUEL (fictif, à remplir avec des vrais chiffres internes)\n\n1. Portefeuille : postes ouverts / ouverts > 45 j (seuil interne, pas une norme marché) / embauches du mois\n2. Délais : médiane TTF, médiane TTH (définitions)\n3. Funnel global : CV → E1 → offres → acceptations\n4. Offres : taux d'acceptation, désistements post-oui\n5. Coût : cost per hire selon numérateur validé ; part agence\n6. Qualité : essais en cours, ruptures d'essai du mois\n7. Expérience : % de clôtures, médiane premier retour\n8. Risques : 3 postes, 1 ligne chacun (blocage + demande)\n9. Décisions à prendre aujourd'hui : \n\nINTERDIT DANS LE SLIDE\n- « Le marché est à 28 jours »\n- Colonne « femmes / hommes / seniors » pour « piloter la perf »\n- Prénoms + commentaires bruts d'entretien\n- Scores IA non expliqués"
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet. Un junior envoie chaque vendredi un fichier de 12 onglets. Le client ne l'ouvre plus. Passage à un e-mail de 15 lignes : mission, pipeline réel (4 noms en shortlist), dates, blocage (attente d'un client depuis 8 jours), demande (créneau mercredi). Les indicateurs de délai restent au reporting interne cabinet, pas dans le mail client hebdo."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Changer la définition du TTF le mois où il est mauvais. Afficher 152 % de conversion. Copier un dashboard trouvé sur internet avec des cibles chiffrées. Parler d'un candidat interne dans un slide largement diffusé."
        ),
        h("Situations particulières"),
        t(
          "TPE : un tableau unique suffit, pas de comité. Volume campus : ajouter la donnée école / session, pas la vie privée. Recrutement confidentiel : reporting restreint, intitulés floutés."
        ),
        h("Mise en pratique"),
        t(
          "À partir des données « Techniciens maintenance » (leçon coût / conversion) et des 41 / 23 / 92 jours (leçon délais, poste Amina), rédigez le paragraphe « risques et décisions » d'un comité, 8 à 12 lignes, sans benchmark."
        ),
        h("Correction détaillée"),
        t(
          "Le paragraphe doit : rappeler le cost per hire 2 900 € (salaires non inclus), le funnel 5 offres / 3 acceptations / 1 désistement post-oui, demander un arbitrage sur l'offre ou le préboarding, séparer TTF 41 j et délai d'arrivée 92 j pour ne pas faire porter le préavis au sourcing. Il ne doit pas dire « on est au-dessus du marché ». Pourquoi : un comité tranche des actions, pas des slogans."
        ),
      ],
    }),

    lesson({
      title: "IA en recrutement : usages, limites et responsabilité du junior",
      description:
        "Utiliser un outil d'assistance sans déléguer une décision, sans exposer des données, sans contourner le droit.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez ce qu'un outil d'IA peut assister (brouillon, synthèse, aide à structurer) et ce qu'il ne peut pas remplacer (décision, motivation licite, information du candidat).\n\nVous savez relier L. 1221-8, L. 1221-9, L. 1132-1, L. 1221-6 et le RGPD à un usage concret d'outil.\n\nVous savez refuser un usage (CV collé dans un outil grand public, tri automatique opaque, questions générées illicites)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'intelligence artificielle, dans le recrutement quotidien d'un junior, désigne souvent des fonctions d'assistance : rédaction d'annonce, parsing de CV, ranking, chatbots de candidature, synthèse d'entretien, prédiction de « matching ». Aucune de ces fonctions n'est, en soi, interdite par un texte unique « anti-IA ». Aucune n'est non plus un droit à sous-traiter l'embauche à un modèle.\n\nLe droit applicable reste le droit du recrutement. Les méthodes et techniques d'aide au recrutement doivent être pertinentes au regard de la finalité (L. 1221-9). Le candidat est informé préalablement des méthodes utilisées à son égard ; les résultats sont confidentiels (L. 1221-8). Les informations demandées restent limitées à ce qui a un lien direct et nécessaire avec l'emploi (L. 1221-6). L'interdiction de discriminer (L. 1132-1) s'applique aux décisions humaines et aux systèmes qui les préparent : un proxy (code postal, prénom, dates trop lisibles comme âge, temps parental) peut reproduire un critère protégé. Le RGPD s'applique aux traitements : finalité, minimisation, sécurité, droits des personnes, éventuellement analyses d'impact selon le contexte — le junior n'improvise pas une analyse d'impact, il alerte le DPO / RH si un nouvel outil traite des CV.\n\nLimites pratiques. Un modèle génératif grand public n'est pas un sous-traitant validé : y coller un CV nominatif est souvent une fuite. Un score unique sans critère lisible n'aide pas à un refus professionnel et ne se défend pas. Une synthèse d'entretien peut omettre un fait ou en inventer : vous relisez. Un chatbot qui pose « êtes-vous marié, avez-vous des enfants, quel âge » n'est pas « digital », c'est hors cadre. Une IA n'a pas d'obligation de motiver un refus, pas plus que vous ; elle n'autorise pas non plus un motif discriminatoire généré « par erreur ».\n\nLa politique interne prime sur l'enthousiasme : outils autorisés, données autorisées, mention d'information candidats, validation humaine des écarts. Le junior qui « teste un outil trouvé en ligne » sur la CVthèque sort de son mandat.\n\nBonne pratique : l'IA brouillonne, l'humain décide, l'ATS trace, le candidat est informé des méthodes réellement utilisées, pas d'un jargon marketing."
        ),
        note(
          "Obligation : méthodes pertinentes, information préalable, non-discrimination, protection des données. Recommandation d'autorité : guides CNIL recrutement / durées. Politique interne : catalogue d'outils. Bonne pratique : relecture humaine systématique. Pas de norme magique de « taux d'automatisation »."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant usage : l'outil est-il dans le catalogue ? Les candidats sont-ils informés ? Des données nominatives sortent-elles du SI ? Le critère de tri est-il un critère de poste ? Après usage : relecture, décision humaine consignée, pas de commentaire « l'IA a dit non » comme seul motif interne."
        ),
        code(
          "USAGES — FRONTIÈRE JUNIOR\n\nAcceptable si politique OK et relecture\n- Brouillon d'annonce à partir de la fiche (puis contrôle L. 5331-2 / L. 5331-3 / L. 5331-4)\n- Grille d'entretien à partir des critères du poste (puis retrait des questions illicites)\n- Synthèse que vous corrigez après vos notes manuscrites / ATS\n\nInterdit / hors mandat\n- Coller 15 CV nominatifs dans un chat public\n- Laisser un ranking écarter sans relecture humaine\n- Générer un motif de refus « trop senior / pas le bon genre »\n- Enregistrer un entretien dans un outil non validé\n- Faire croire au candidat qu'il parle à un humain si c'est un bot, contrairement à l'information due\n\nEXERCICE CHIFFRÉ (rappel, données leçon conversion)\nFunnel 120 → 24 → 12 → 5 → 3. Un outil propose d'écarter automatiquement les 80 CV « les moins matchés ». Quelle information manque avant tout test ? Quel risque L. 1132-1 / L. 1221-8 ?"
        ),
        h("Exemple professionnel"),
        t(
          "ETI. Un éditeur promet « -70 % de temps de tri ». Le junior teste sur 20 CV déjà lus, en anonymisant. Il découvre que le modèle valorise des verbes d'action et pénalise les parcours à trous, donc des reconversions. Il ne déploie pas. Il alerte RH : pertinence douteuse, risque d'effet discriminatoire indirect, information candidats absente. Le temps de tri n'est pas un argument supérieur au cadre légal."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Prendre une hallucination (diplôme inventé) pour un fait. Laisser le manager croire que « le score 87 » est une mesure scientifique. Oublier d'informer alors qu'une technique nouvelle est utilisée. Utiliser l'IA pour rédiger un mail de refus discriminatoire plus poli."
        ),
        h("Situations particulières"),
        t(
          "Parsing qui lit une photo : risque apparence physique (critère protégé) et données inutiles. Tests de personnalité automatisés : pertinence L. 1221-9 et information L. 1221-8, sinon abstention. International : un outil US n'est pas « conforme » par magie au RGPD."
        ),
        h("Mise en pratique"),
        t(
          "Répondez à l'exercice du ranking automatique des 80 CV. Puis calculez, si les 24 préqualifiés restaient choisis uniquement parmi un sous-ensemble de 40 CV tirés au hasard, ce que l'on ne saurait toujours pas (qualité, discrimination, expérience)."
        ),
        h("Correction détaillée"),
        t(
          "Avant tout test, il manque : critères de matching lisibles et pertinents (poste), information des candidats (L. 1221-8), analyse du risque de biais (proxies d'âge, de genre, d'origine), cadre RGPD de l'outil, relecture humaine. Le risque L. 1132-1 est un écartement systémique. Tirer 40 CV au hasard n'est pas une solution métier : on ne sait toujours pas si l'on perd des profils compétents, et l'expérience candidat n'est pas traitée. Pourquoi : accélérer le tri n'est légitime que si la méthode reste pertinente, informée, non discriminatoire, et que la décision reste humaine et traçable."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Outils et indicateurs",
      description: "Dix questions dont des calculs sur données fictives, sans benchmark marché.",
      passing_score: 70,
      minutes: 14,
      questions: [
        q({
          question:
            "Selon la convention de ce cours, comment se distinguent time to fill (TTF) et time to hire (TTH) ?",
          options: [
            "A. TTF = date d'acceptation de l'offre − date de validation du besoin ; TTH = date d'acceptation de l'offre − date d'entrée du candidat retenu.",
            "B. TTF et TTH sont identiques et valent toujours 30 jours, norme marché.",
            "C. TTH inclut le préavis jusqu'à J1 ; TTF s'arrête au premier CV.",
            "D. TTF est une obligation Urssaf ; TTH est une recommandation CNIL de 2 ans.",
          ],
          correct: 0,
          explanation:
            "Deux dates de début différentes, même date de fin (acceptation). Pas de norme magique 30 jours. Le préavis relève d'un délai d'arrivée si on le mesure. Urssaf / CNIL n'imposent pas ces KPI.",
        }),
        q({
          question:
            "Données fictives : besoin validé le 1er mars, candidat retenu entré le 21 mars, offre acceptée le 10 avril. TTF et TTH en jours calendaires ?",
          options: [
            "A. TTF = 40 jours ; TTH = 20 jours.",
            "B. TTF = 20 jours ; TTH = 40 jours.",
            "C. TTF = 10 jours ; TTH = 10 jours.",
            "D. TTF = 60 jours ; TTH = 30 jours.",
          ],
          correct: 0,
          explanation:
            "Du 1er mars au 10 avril : 40 jours. Du 21 mars au 10 avril : 20 jours. Inverser TTF et TTH est l'erreur classique. 10 ou 60 ne correspondent pas aux dates.",
        }),
        q({
          question:
            "Coûts fictifs : annonces 1 500 €, agence 4 500 €, ATS 300 €, 2 embauches. Salaires recrutement exclus par politique. Cost per hire ?",
          options: [
            "A. 3 150 €, en rappelant que les salaires recrutement sont exclus du numérateur.",
            "B. 1 500 €, seul le jobboard compte.",
            "C. 6 300 €, on ne divise jamais.",
            "D. 45 000 €, « moyenne marché ».",
          ],
          correct: 0,
          explanation:
            "(1 500+4 500+300)/2 = 6 300/2 = 3 150 €. Il faut énoncer le périmètre. Pas de moyenne marché dans ce cours.",
        }),
        q({
          question: "Funnel fictif : 50 CV, 10 entretiens, 4 offres, 3 acceptations. Quelle lecture est correcte ?",
          options: [
            "A. Conversion CV→entretien = 20 % ; taux d'acceptation des offres = 75 % ; les volumes restent modestes pour généraliser.",
            "B. Conversion CV→entretien = 75 % car 3/4.",
            "C. Le taux d'acceptation est une obligation légale de 100 %.",
            "D. 20 % est en dessous du marché, il faut discriminer plus au tri.",
          ],
          correct: 0,
          explanation:
            "10/50 = 20 % ; 3/4 = 75 %. 3/4 n'est pas la conversion CV→entretien. Pas d'obligation légale d'acceptation, pas de marché cité, pas de discrimination comme levier.",
        }),
        q({
          question: "14 convocations, 2 absences sans message. Taux de no-show ?",
          options: [
            "A. 2/14 ≈ 14,3 %.",
            "B. 2/12 ≈ 16,7 %.",
            "C. 14/2 = 7.",
            "D. 0 %, le no-show ne se calcule pas.",
          ],
          correct: 0,
          explanation:
            "Le dénominateur est le nombre de convocations envoyées (14), pas les présents (12). Le no-show se calcule, sans devenir une « norme ».",
        }),
        q({
          question: "Quelle affirmation sur les sources est la plus juste ?",
          options: [
            "A. On saisit une source principale à l'entrée et on lit volume, conversion et qualité (ex. tenue de l'essai), sans répartition « normale » de marché.",
            "B. Le meilleur canal est toujours LinkedIn, c'est établi.",
            "C. Le volume de CV suffit à classer les canaux.",
            "D. Un canal d'inclusion à faible volume doit être coupé s'il n'améliore pas le cost per hire.",
          ],
          correct: 0,
          explanation:
            "Pas de palmarès universel. Le volume seul trompe. Un canal stratégique (inclusion, école) ne se juge pas au seul coût.",
        }),
        q({
          question: "Dans un reporting direction, que bannissez-vous ?",
          options: [
            "A. Un benchmark « le marché est à 28 jours » sans source, et une colonne d'âges pour « piloter la perf ».",
            "B. La définition écrite du TTF.",
            "C. Une demande d'arbitrage sur deux créneaux manager.",
            "D. Le nombre d'embauches du mois.",
          ],
          correct: 0,
          explanation:
            "Pas de norme magique inventée, pas de critère protégé dans le slide. Définitions, faits et demandes d'arbitrage sont le cœur du reporting.",
        }),
        q({
          question: "Un outil d'IA classe les CV. Quel cadre s'applique ?",
          options: [
            "A. Méthode pertinente (L. 1221-9), information préalable du candidat (L. 1221-8), non-discrimination (L. 1132-1), RGPD, décision humaine.",
            "B. Si le score est élevé, L. 1132-1 ne s'applique plus.",
            "C. L'IA remplace l'information du candidat car c'est un secret d'algorithme.",
            "D. Coller les CV dans un chat public est recommandé pour la transparence.",
          ],
          correct: 0,
          explanation:
            "L'outil est une méthode d'aide au recrutement : les articles cités s'appliquent. Le secret d'algorithme ne barre pas L. 1221-8. Un chat public n'est pas une mesure de sécurité RGPD.",
        }),
        q({
          question: "3 embauches, 1 rupture d'essai à 90 jours, 2 encore en poste. Quelle phrase de reporting est acceptable ?",
          options: [
            "A. « Sur 3 embauches du trimestre, 1 essai rompu, 2 tenues à 90 jours ; volume faible, on relie au canal et à l'onboarding, sans norme externe. »",
            "B. « Notre quality of hire est de 67 %, au-dessus du marché européen. »",
            "C. « 33 % d'échec, il faut arrêter d'embaucher des profils en reconversion. »",
            "D. « 100 % de réussite, on ignore les ruptures d'essai. »",
          ],
          correct: 0,
          explanation:
            "On décrit les faits internes, on souligne le petit volume, on n'invente pas de marché, on ne cible pas un public au sens d'un stéréotype, on n'efface pas les ruptures.",
        }),
        q({
          question: "Pourquoi un ATS mal renseigné rend-il les KPI inutilisables ?",
          options: [
            "A. Sans date d'entrée, sans statut unique et sans source, TTF, TTH, conversion et canaux ne mesurent plus le réel.",
            "B. Parce que l'ATS est obligatoire pour la DPAE.",
            "C. Parce que le RGPD interdit les indicateurs.",
            "D. Parce que le time to fill légal est de 8 jours, comme la DPAE.",
          ],
          correct: 0,
          explanation:
            "Les KPI naissent des dates et statuts. L'ATS n'est pas la DPAE. Le RGPD n'interdit pas tout indicateur. Les 8 jours concernent la fenêtre DPAE (au plus tôt), pas un TTF légal.",
        }),
      ],
    }),
  ],
};
