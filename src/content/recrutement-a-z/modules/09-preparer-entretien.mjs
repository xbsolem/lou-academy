import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 9,
  title: "Préparer un entretien de recrutement",
  description:
    "Fixer les objectifs, analyser le CV, choisir le format, construire un guide et une grille, organiser la logistique et aligner les rôles avec le manager.",
  lessons: [
    lesson({
      title: "Fixer les objectifs et choisir le format d'entretien",
      description:
        "Définir ce que l'entretien doit permettre de décider, puis choisir un format structuré, semi-structuré, comportemental ou situationnel.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À l'issue de cette leçon, vous serez capable de formuler par écrit les décisions que l'entretien doit éclairer, de distinguer un entretien structuré d'un entretien semi-structuré, et de choisir des questions comportementales ou situationnelles en fonction des compétences du poste.\n\nVous saurez aussi séparer ce qui relève de l'obligation légale (questions en lien direct avec l'emploi, non-discrimination) de ce qui relève de la bonne pratique (guide commun, mêmes critères, même durée cible)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un entretien de recrutement n'est pas une conversation de découverte libre. C'est un recueil d'éléments professionnels, dans un temps limité, pour apprécier la capacité d'une personne à occuper un emploi déterminé. Le Code du travail, article L. 1221-6, pose une obligation légale : les informations demandées, sous quelque forme que ce soit, ne peuvent avoir comme finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Elles doivent présenter un lien direct et nécessaire avec l'emploi proposé. Préparer l'entretien, c'est donc d'abord décider quelles informations professionnelles sont nécessaires, puis écarter tout ce qui n'a pas ce lien.\n\nLe format de l'entretien n'est pas imposé par la loi. Un entretien totalement libre n'est pas illégal en soi. Il est en revanche peu comparable, plus exposé aux impressions et plus difficile à justifier si un candidat conteste le traitement subi. L'entretien structuré repose sur un guide commun : mêmes blocs, mêmes questions cibles, même ordre de passage des thèmes, même grille. L'entretien semi-structuré conserve un cadre (thèmes, questions d'ancrage, durées) mais autorise des relances adaptées au parcours. L'entretien non structuré laisse le recruteur improvisé ; il est déconseillé en bonne pratique, surtout pour un junior.\n\nL'entretien comportemental interroge des situations réellement vécues. L'hypothèse de travail n'est pas une vérité scientifique universelle : on considère qu'un comportement passé, décrit avec suffisamment de faits, est un meilleur indice qu'une intention générale (« je suis quelqu'un de organisé »). La méthode STAR (Situation, Tâche, Action, Résultat) sert à obtenir ces faits. L'entretien situationnel propose un cas hypothétique proche du poste (« un client refuse un produit obligatoire, que faites-vous ? »). Il éclaire le raisonnement, la priorisation et la connaissance du cadre. Les deux formats se complètent : le comportemental vérifie ce que la personne a déjà fait ; le situationnel vérifie comment elle traiterait le quotidien du poste.\n\nPréparer l'entretien, c'est aussi préparer l'égalité de traitement. Le Code du travail, article L. 1132-1, interdit d'écarter une personne d'un recrutement en raison de critères protégés (origine, sexe, âge, situation de famille, état de santé, handicap, opinions, apparence physique, lieu de résidence, notamment). Un guide rédigé à l'avance réduit le risque de questions hors sujet. Il ne supprime pas la responsabilité du recruteur : une question illicite reste illicite même si elle n'était pas prévue. La structuration est une bonne pratique de maîtrise du risque, pas une dispense de vigilance.\n\nEnfin, l'entretien n'a pas à tout décider. Il éclaire des hypothèses nées du CV, de la préqualification et, le cas échéant, d'épreuves professionnelles. Il ne remplace pas une vérification de références cadrée, ni un test dont le candidat a été informé au préalable (article L. 1221-8). Vous devez savoir, avant d'entrer en salle, ce que cet entretien peut conclure — et ce qu'il ne peut pas conclure."
        ),
        h("Méthode opérationnelle"),
        t(
          "Avant de rédiger la moindre question, écrivez trois à cinq objectifs de décision, dérivés de la fiche de poste validée avec le manager. Chaque objectif doit être observable : « vérifier la capacité à prioriser un flux de demandes clients » est opératoire ; « voir si le feeling passe » ne l'est pas.\n\nChoisissez ensuite le format. Pour un premier entretien junior, le semi-structuré est le plus robuste : un guide commun, des questions d'ancrage identiques, des relances STAR, et un bloc situationnel court sur deux ou trois incidents critiques du poste. L'entretien 100 % structuré convient lorsque plusieurs recruteurs voient des volumes élevés et doivent comparer strictement. L'entretien 100 % libre est à écarter tant que vous n'avez pas une maîtrise confirmée des critères et du cadre légal.\n\nDocumentez le format dans le dossier de recrutement : durée cible, participants, thèmes, grille. Faites valider ce cadre par le manager avant le premier candidat. Si l'entreprise impose un trame unique (politique interne), vous l'appliquez ; vous ne la remplacez pas par vos habitudes personnelles.\n\nContrôle final : relisez chaque question prévue et posez-vous la question L. 1221-6 : « Quel lien direct et nécessaire avec l'emploi ? ». Si vous ne savez pas répondre, la question sort du guide."
        ),
        h("Exemple professionnel"),
        t(
          "Dans une ETI de services informatiques, le manager recrute un chef de projet junior. Il dit au recruteur : « Je veux surtout sentir s'il a le feu sacré. » Le recruteur reformule en objectifs de décision : (1) capacité à cadrer un besoin avec un client interne, (2) tenue des délais sur un livrable simple, (3) communication d'un écart, (4) apprentissage d'un outil inconnu. Le format retenu est un entretien semi-structuré de 55 minutes : 10 minutes de cadre et de parcours, 25 minutes comportementales STAR sur les quatre objectifs, 10 minutes situationnelles (client interne qui change le périmètre à J-3), 10 minutes de questions du candidat.\n\nLe manager conserve un droit de relance sur le livrable, mais s'interdit les questions sur la vie personnelle. Le guide est le même pour les trois candidats reçus la même semaine."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Confondre « entretien structuré » et « questionnaire administratif lu à voix haute ». Le structuré n'interdit pas l'écoute ; il interdit l'improvisation des critères.\n\nFixer comme objectif « confirmer le feeling du CV ». Le CV donne des hypothèses ; l'entretien doit les tester, pas les célébrer.\n\nMélanger comportemental et situationnel sans le dire : « Que feriez-vous si… » alors que vous pensiez recueillir un fait passé. Le candidat répond alors par une intention, et vous notez une compétence que vous n'avez pas observée.\n\nPréparer un format différent pour le candidat « qui a l'air senior » et pour le candidat interne. L'adaptation des relances est légitime ; le changement de critères en cours de route ne l'est pas."
        ),
        h("Situations particulières"),
        t(
          "Entretien de mobilité interne : les objectifs restent professionnels, mais vous disposez d'éléments déjà connus. Vous ne recyclez pas des rumeurs de couloir. Vous préparez des questions sur le poste cible, pas un procès du poste actuel.\n\nEntretien à plusieurs voix (recruteur + manager + futur collègue) : le format doit préciser qui pose quel bloc. Sans cette répartition, les questions se dupliquent et le temps manque pour le candidat.\n\nPoste en contact avec du public vulnérable ou avec de l'argent : le situationnel sur l'éthique et la procédure interne est prioritaire. Il reste dans le champ L. 1221-6 s'il est lié aux exigences du poste, pas s'il glisse vers la vie privée ou la santé."
        ),
        h("Mise en pratique"),
        t(
          "Poste fictif : assistant commercial sédentaire dans une PME industrielle (prise de commandes, relance de devis, interface atelier). Rédigez : (1) quatre objectifs de décision ; (2) le format retenu et sa durée ; (3) une question comportementale et une question situationnelle pour l'objectif « gérer une commande urgente contradictoire entre le client et l'atelier » ; (4) une question que vous écartez, avec le motif."
        ),
        h("Correction détaillée"),
        t(
          "Objectifs acceptables : exactitude de la prise de commande ; gestion des priorités entre appels et relances ; communication d'un délai irréaliste ; maîtrise des outils de suivi (ERP ou tableur). Un objectif du type « voir s'il est dynamique » est trop flou : reformulez en comportement observable.\n\nFormat : semi-structuré 45 à 50 minutes, guide commun. Question comportementale : « Racontez une situation où un client voulait une livraison plus rapide que ce que la production pouvait tenir. Quelle était la situation, quelle était votre responsabilité, qu'avez-vous fait, quel a été le résultat ? » Question situationnelle : « Un client appelle à 16 h 30 pour une pièce le lendemain. L'atelier dit que c'est impossible. Que faites-vous dans l'heure ? »\n\nQuestion à écarter : « Avez-vous des enfants ? Cela va être prenant. » Motif : critère protégé (situation de famille) et absence de lien nécessaire avec l'emploi (L. 1132-1 et L. 1221-6). Une question sur la capacité à tenir des plages de permanence définies dans la fiche de poste est en revanche professionnelle, si elle est posée à tous les candidats dans les mêmes termes."
        ),
      ],
    }),
    lesson({
      title: "Analyser le CV et préparer les axes d'investigation",
      description:
        "Transformer le CV en hypothèses professionnelles à tester, sans verdict préalable et sans enquête hors sujet.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous apprendrez à lire un CV comme une source d'hypothèses, à repérer les zones à clarifier (chronologie, responsabilités, résultats, changements fréquents) et à préparer des relances professionnelles. Vous distinguerez l'analyse utile de l'interprétation abusive et de la recherche d'informations sans lien avec l'emploi."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le CV n'est pas une preuve. C'est un document de communication, rédigé par le candidat, qui sélectionne des faits, des titres et des silences. Votre travail avant l'entretien n'est pas de « coincer » la personne, ni de confirmer une première impression. Il consiste à formuler des hypothèses professionnelles que l'entretien devra confirmer, infirmer ou préciser. Une hypothèse se rédige ainsi : « Le CV indique une responsabilité d'encadrement de cinq personnes pendant un an ; je dois vérifier le périmètre réel (recrutement, évaluation, planning, simple coordination). » Une impression se rédige ainsi : « Il a l'air trop junior. » Seule la première est actionnable.\n\nL'analyse porte sur le lien avec le poste : missions proches, outils, environnements, niveau d'autonomie, résultats chiffrés, progression. Les trous de parcours, les changements fréquents ou les titres ambitieux ne sont pas des fautes. Ce sont des zones de clarification. Vous préparez une question factuelle, pas un procès d'intention. Un trou peut correspondre à une formation, une recherche d'emploi, un aidant familial, un problème de santé : vous n'avez pas à obtenir le détail de la vie privée. Vous pouvez demander comment la personne a occupé cette période au regard de son projet professionnel, et vous arrêtez dès que l'information n'a plus de lien nécessaire avec l'emploi (L. 1221-6).\n\nLa tentation de « googler » le candidat, de parcourir ses réseaux ou de croiser des photos n'est pas un droit d'investigation illimité. Les données collectées restent des données personnelles. La CNIL, dans son guide du recrutement (fiche pratique, 30 janvier 2023), rappelle que seules les données pertinentes, adéquates et limitées à la finalité de recrutement doivent être traitées. Consulter un profil professionnel public pour vérifier une expérience affichée peut, selon la politique interne, être admis. Collecter des éléments sur les opinions, la vie familiale, les photos de loisirs ou l'état de santé ne l'est pas. Ce n'est pas une bonne pratique « pour mieux connaître la personne » : c'est un risque de biais et, selon les cas, un traitement excessif.\n\nLe CV peut aussi contenir des indices de discrimination à ne pas utiliser : photographie, âge, situation familiale, adresse, mentions de santé. L'article L. 1132-1 interdit d'écarter un candidat pour ces motifs. Si la photo ou l'âge sont présents, vous ne les transformez pas en critère. Vous les ignorez dans votre préparation. Si un manager commente « trop vieux » ou « elle a l'air d'avoir des enfants », vous recadrez avant l'entretien : le critère n'entre pas dans le guide.\n\nEnfin, l'analyse du CV doit produire un livrable court, pas une dissertation. Trois à six axes d'investigation, chacun lié à un critère du poste, suffisent. Au-delà, vous arrivez en entretien avec un réquisitoire. En deçà, vous improvisez."
        ),
        h("Méthode opérationnelle"),
        t(
          "Travaillez à partir de la fiche de poste et de la grille, pas à partir du CV seul. Pour chaque critère essentiel, notez : élément présent dans le CV, élément manquant, question de relance. Utilisez un code simple : à confirmer / à préciser / non documenté.\n\nReconstituez la chronologie mois par mois sur les cinq à dix dernières années, selon le niveau du poste. Repérez chevauchements, durées très courtes, titres qui changent sans changement d'employeur. Préparez une question de clarification unique par zone, formulée de façon neutre.\n\nNe construisez pas un « dossier à charge ». Pour chaque point de vigilance, prévoyez aussi ce qui, si c'est expliqué professionnellement, lève l'hypothèse. Exemple : trois CDD courts dans le même métier peuvent signaler de l'intérim subi, pas de l'instabilité.\n\nContrôle : aucune question préparée ne porte sur la santé, la grossesse, le logement, la religion, les origines, les enfants, le conjoint, le crédit personnel ou les opinions. Si un élément du CV y fait allusion, vous ne l'exploitez pas."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet de recrutement, mission pour un industriel de l'agroalimentaire : poste d'acheteur matières premières. CV d'une candidate de 34 ans, cinq ans en achat packaging dans une ETI, puis huit mois de « projet personnel », puis un an en achat public dans une collectivité.\n\nAxes préparés : (1) transférabilité packaging vers matières premières alimentaires (cahier des charges, qualité, saisonnalité) ; (2) pratique réelle de la négociation (volumes, indicateurs, rôle vs manager) ; (3) passage privé / public : ce qui se transfère, ce qui ne se transfère pas ; (4) période de huit mois : formulation ouverte sur le projet professionnel, sans investigation privée. Le consultant n'appelle pas d'anciens collègues « en off » avant l'entretien : ce n'est ni prévu par le mandat, ni couvert par une information du candidat."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Transformer un trou de CV en suspicion morale. Vous n'êtes pas chargé d'enquêter sur la vie de la personne.\n\nSurvaloriser un logo prestigieux et sous-préparer les questions de contentu. Un intitulé impressionnant n'est pas une compétence démontrée.\n\nAnnoter le CV de commentaires physiques ou d'âge. Ces notes deviennent des données et peuvent révéler un critère illicite.\n\nPréparer uniquement des questions de confirmation pour le candidat que vous « sentez bien », et uniquement des questions de doute pour l'autre. C'est un biais de confirmation, traité plus loin dans le parcours : il commence dès la préparation."
        ),
        h("Situations particulières"),
        t(
          "CV très court (premier emploi, reconversion) : les axes portent sur les compétences transférables, les mises en situation et les réalisations de formation ou de stage. L'absence d'expérience identique n'est pas un défaut si le poste est junior.\n\nCV surchargé de jargon : préparez des demandes de traduction concrète (« Qu'avez-vous livré, à qui, avec quel résultat ? »).\n\nCandidat interne : le CV interne peut être incomplet. Demandez un historique de missions à jour. Ne remplacez pas l'analyse par ce que « tout le monde sait » dans l'open space."
        ),
        h("Mise en pratique"),
        t(
          "CV fictif résumé : « 2019-2021 : vendeur magasin prêt-à-porter. 2021-2022 : (aucune ligne). 2022-2026 : conseiller clientèle centre d'appels, puis « team leader » sans précision d'équipe. Postule à un poste de chargé de clientèle banque de détail. »\n\nRédigez quatre axes d'investigation, les questions associées, et indiquez une question que vous ne poserez pas malgré la période 2021-2022."
        ),
        h("Correction détaillée"),
        t(
          "Axes pertinents : (1) nature réelle du conseil en centre d'appels (script, indicateurs, réclamations, vente additionnelle) ; (2) contenu du titre « team leader » (planning, coaching, objectifs, simple relais) ; (3) transférabilité vers un portefeuille en agence (relation durable vs flux d'appels) ; (4) motivation pour la banque de détail (cadre réglementaire, éthique commerciale), pas « pourquoi la banque paie mieux ».\n\nPériode 2021-2022 : question possible : « Pouvez-vous préciser comment s'inscrit cette période dans votre parcours professionnel ? » Vous n'exigez pas un diagnostic médical, une situation familiale ou un récit intime. Si la personne indique un élément privé, vous remerciez et vous revenez au poste. Question à ne pas poser : « Vous étiez en arrêt ? Vous aviez un enfant ? »"
        ),
      ],
    }),
    lesson({
      title: "Construire le guide d'entretien et manier le STAR",
      description:
        "Rédiger un guide utilisable en séance : ouverture, questions d'ancrage, relances STAR, situationnel, clôture.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous serez capable de bâtir un guide d'entretien semi-structuré, d'écrire des questions ouvertes professionnelles, et d'utiliser la méthode STAR pour obtenir des faits plutôt que des déclarations de personnalité. Vous saurez relancer sans induire la « bonne » réponse."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le guide d'entretien est l'outil qui rend l'évaluation comparable. Il n'a pas besoin d'être lu mot à mot comme un script d'enquête. Il doit empêcher deux dérives : l'oubli des critères essentiels, et l'invention de questions hors sujet sous le coup de la curiosité. Un guide professionnel contient au minimum : le cadre de l'échange (durée, participants, déroulé annoncé), un bloc parcours, des questions d'ancrage par compétence, des relances, un ou deux cas situationnels, un temps pour les questions du candidat, une clôture claire sur la suite du processus.\n\nLa méthode STAR structure la relance comportementale. Situation : dans quel contexte, avec qui, sous quelle contrainte. Tâche : quelle était la responsabilité de la personne, distincte de celle de l'équipe. Action : ce qu'elle a réellement fait, dans quel ordre, avec quels moyens. Résultat : ce qui s'est passé, y compris si le résultat est imparfait, et ce qu'elle en a retiré. Sans ces quatre étages, vous collectez des slogans (« je suis très relationnel ») ou des récits collectifs (« on a bien géré »). Le STAR n'est pas une obligation légale. C'est une technique professionnelle. Elle reste soumise à L. 1221-6 : la situation explorée doit être pertinente pour le poste.\n\nLes questions ouvertes (« Comment avez-vous organisé… ») produisent de la matière. Les questions fermées (« Avez-vous déjà utilisé Excel ? ») vérifient un point factuel et doivent rester minoritaires. Les questions inductives (« Vous êtes d'accord que le client a toujours raison, n'est-ce pas ? ») détruisent l'évaluation : le candidat comprend la réponse attendue. Les questions multiples (« Parlez-moi de votre plus grand succès, de votre plus grand échec et de votre manager idéal ») noient la réponse. Une question, puis une relance.\n\nLe guide doit aussi protéger le cadre légal. Vous y inscrivez explicitement les thèmes interdits, pour vous et pour le manager qui co-anime : santé, handicap (sauf aménagement demandé par le candidat pour le poste ou pour l'entretien), grossesse, situation de famille, origine, religion, opinions, syndicat, âge comme critère, apparence, lieu de résidence comme critère, précarité, nom. L'article L. 1132-1 liste les discriminations prohibées à l'embauche. Le guide n'a pas à reciter toute la liste à voix haute au candidat ; il a à empêcher que ces sujets surgissent « pour détendre l'atmosphère ».\n\nUn bon guide indique le temps par bloc. Sans temps, le parcours mange 40 minutes et les compétences du poste ne sont jamais testées. Le temps n'est pas une rigidité administrative : c'est la condition de l'équité entre candidats."
        ),
        h("Méthode opérationnelle"),
        t(
          "Partez des compétences essentielles de la fiche de poste, pas d'une banque de questions génériques. Pour chaque compétence, rédigez : une question d'ancrage comportementale, deux relances STAR, éventuellement une mise en situation courte.\n\nRédigez l'ouverture mot à mot la première année : accueil, durée, déroulé, information sur la prise de notes, possibilité de préciser ou de ne pas répondre à une question si elle paraît hors sujet. Cette dernière phrase n'est pas imposée par un article unique, mais elle est cohérente avec L. 1221-6 et avec une relation respectueuse.\n\nFaites relire le guide par le manager. Demandez-lui de biffer ce qui n'aide pas à décider et d'ajouter les incidents critiques du quotidien (client mécontent, pic d'activité, conflit de priorité, cadre réglementaire). Ces incidents alimentent le situationnel.\n\nImprimez ou ouvrez le guide en séance, avec de l'espace pour noter des faits. Le guide n'est pas un secret : le candidat peut voir que vous suivez une trame. Cela rassure plus que cela ne « dévoile » un piège."
        ),
        h("Exemple professionnel"),
        t(
          "PME du bâtiment, recrutement d'un conducteur de travaux débutant. Compétence clé : faire remonter un écart de chantier sans attendre la réunion hebdomadaire. Question d'ancrage : « Racontez une situation où un planning ou une qualité n'allait pas pouvoir être tenus. » Relances : « Qui a été informé, à quel moment ? Qu'avez-vous dit exactement ? Quelle était votre marge de décision ? Qu'est-il advenu ensuite ? » Situationnel : « Vendredi 16 h, le client final veut avancer un livrable ; le sous-traitant dit qu'il manque un matériau. Vous êtes seul sur site. Quelles sont vos trois premières actions ? »"
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Écrire des questions de personnalité (« Êtes-vous stressé ? ») au lieu de questions de situation professionnelle.\n\nInterrompre le STAR dès la Situation pour donner son avis. Vous n'évaluez plus, vous conversez.\n\nCopier un guide trouvé en ligne, sans lien avec le poste. Des questions de leadership pour un poste sans encadrement font perdre du temps et créent de fausses attentes.\n\nOublier les questions du candidat dans le timing. Ce bloc n'est pas un luxe : il révèle la compréhension du poste et la qualité de la préparation du candidat."
        ),
        h("Situations particulières"),
        t(
          "Candidat peu à l'aise avec le récit oral : le STAR peut être aidé par une consigne explicite (« Je vais vous demander le contexte, puis votre rôle, puis vos actions, puis le résultat »). Ce n'est pas un passe-droit : c'est rendre la méthode accessible. Vous le faites pour tous si le public du poste le justifie, ou à la demande si le stress bloque, sans changer les critères.\n\nEntretien en langue étrangère : le guide précise si vous évaluez la langue ou le métier. Si les deux, séparez les temps. Une maladresse linguistique n'est pas une incompétence métier, sauf si la langue est une exigence du poste, appliquée à tous.\n\nPanel : un seul guide, des questions réparties, un animateur du temps. Sinon chacun pose « parlez-moi de vous »."
        ),
        h("Mise en pratique"),
        t(
          "Compétence : « dire non à une vente inadaptée » pour un chargé de clientèle. Rédigez la question d'ancrage STAR, trois relances, et une question inductive à ne pas utiliser. Justifiez."
        ),
        h("Correction détaillée"),
        t(
          "Ancrage : « Décrivez une situation où un client voulait un produit ou un service que vous jugiez inadapté à sa situation. » Relances : « Quels éléments vous ont alerté ? Qu'avez-vous dit au client, concrètement ? Quelle règle interne ou quel cadre avez-vous utilisé ? Quel a été le résultat pour le client et pour vous ? »\n\nQuestion inductive à bannir : « Vous êtes d'accord qu'il ne faut jamais vendre n'importe quoi, surtout en banque ? » Elle force l'assentiment moral et n'éclaire aucune pratique. Le situationnel utile serait : « Un client veut un crédit alors que son reste à vivre est déjà tendu. Votre objectif mensuel n'est pas atteint. Que faites-vous ? »"
        ),
      ],
    }),
    lesson({
      title: "Concevoir les grilles d'évaluation avant l'entretien",
      description:
        "Transformer les critères du poste en échelle de notation partagée avec le manager, avant de rencontrer le premier candidat.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez construire une grille simple, pondérée, ancrée dans la fiche de poste, et la faire valider par le manager avant les entretiens. Vous distinguerez faits observés, interprétation et note, et vous préparerez l'usage de la grille en séance sans en faire un barème magique."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La grille d'évaluation n'est pas un gadget de reporting. C'est l'instrument qui relie la fiche de poste, le guide d'entretien et la décision. Sans grille, deux intervieweurs sortent de la salle avec des souvenirs différents et tranchent sur des critères improvisés (« plus extraverti », « moins de feeling »). Avec une grille mal faite, on note la sympathie sous des intitulés sérieux. La grille doit donc être rédigée avant le premier candidat, à partir des compétences essentielles et souhaitables déjà validées, pas après coup pour justifier un choix déjà fait.\n\nUne grille professionnelle comporte des critères observables, une échelle explicite, éventuellement une pondération, et un espace de faits. L'échelle n'a pas de fondement légal unique. Une échelle à quatre niveaux (insuffisant / en retrait / conforme / dépasse) évite le refuge du « moyen ». Une échelle à cinq niveaux est utilisable si chaque cran est défini par un comportement, pas par un adjectif. « 3 = dynamique » ne veut rien dire. « 3 = illustre une priorisation réelle entre deux demandes clients, avec un résultat » veut dire quelque chose.\n\nLa pondération exprime que toutes les compétences n'ont pas le même poids pour le poste. Elle est une décision managériale, donc une politique interne, pas une obligation légale. Elle doit être figée avant les entretiens. La modifier après avoir vu un candidat que l'on préfère est une distorsion. Les critères éliminatoires, s'il y en a, doivent être rares, liés à une exigence réelle du poste (habilitation, mobilité géographique acceptée telle que définie, langue indispensable au quotidien) et appliqués à tous. Un « KO feeling » n'est pas un critère.\n\nLa grille n'exonère pas du cadre légal. Un critère « look », « accent », « âge du CV », « situation familiale », « santé » est illicite (L. 1132-1). Un critère « capacité à s'exprimer en français » n'est recevable que s'il a un lien direct et nécessaire avec l'emploi, et il ne doit pas servir de prétexte pour écarter une personne en raison de son origine ou de sa capacité à s'exprimer dans une autre langue, critère protégé. En cas de doute, le critère s'écrit en exigence professionnelle du poste (« rédiger des comptes rendus clients clairs ») plutôt qu'en jugement de la personne.\n\nEnfin, la note n'est pas la décision. Deux candidats peuvent être « conformes » avec des profils différents. La grille organise la comparaison ; elle ne remplace ni l'arbitrage du manager, ni le respect du principe de non-discrimination, ni la suite du processus (tests informés, références cadrées, offre)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Reprenez la fiche de poste. Listez 5 à 8 critères maximum pour un entretien junior : au-delà, personne ne note avec attention. Séparez essentiels et souhaitables. Attribuez une pondération simple (par exemple 3 / 2 / 1) en séance de cadrage avec le manager, par écrit.\n\nPour chaque critère, rédigez les descripteurs de l'échelle. Un descripteur = un comportement ou un type de preuve attendu pendant l'entretien. Prévoyez une colonne « faits relevés » plus large que la colonne note.\n\nDécidez qui note : recruteur, manager, les deux. Si les deux, chacun remplit sa grille avant le débrief, pour éviter l'alignement immédiat sur le plus senior. Le débrief compare ensuite les écarts.\n\nContrôle qualité : faites un essai à blanc sur un CV fictif. Si le manager ne sait pas quoi noter, le critère est trop flou. Corrigez avant le premier vrai candidat."
        ),
        h("Exemple professionnel"),
        t(
          "Startup de 40 personnes, recrutement d'un customer success junior. Critères et pondération validés : compréhension du besoin client (3), pédagogie à l'oral (3), priorisation (2), aisance avec un outil de suivi (2), apprentissage (1). Échelle à 4 niveaux, descripteur du niveau « conforme » pour la priorisation : « Donne un exemple où deux demandes urgentes ont été arbitrées avec un critère explicite (impact, contrat, délai) et une communication au client. » Le fondateur voulait ajouter « culture start-up ». Reformulé en « capacité à travailler avec des consignes incomplètes, illustrée par un exemple », pour éviter un jugement de style de vie."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Créer la grille après le premier entretien « maintenant que l'on sait ce que l'on cherche ». Vous savez surtout ce que le premier candidat a montré.\n\nMettre 12 critères pour paraître rigoureux. Les notes deviennent mécaniques et les critères illicites se glissent dans la liste.\n\nNoter pendant que le candidat parle de son parcours personnel, puis oublier de noter les compétences. Inversez : faits d'abord, note en fin de bloc.\n\nUtiliser des demi-points pour exprimer un doute. Le doute s'écrit dans les faits (« exemple incomplet, pas de résultat ») ; la note reste alignée sur le descripteur."
        ),
        h("Situations particulières"),
        t(
          "Plusieurs intervieweurs successifs : même grille, ou grilles complémentaires (recruteur : parcours et motivation professionnelle ; manager : expertise). Pas deux grilles contradictoires sur le même critère.\n\nCandidats internes et externes dans la même campagne : mêmes critères essentiels. Un bonus informel « on le connaît » n'est pas une pondération.\n\nPoste soumis à une habilitation ou à une exigence réglementaire : le critère se note comme « information à vérifier dans le process RH », pas comme une impression d'entretien. Vous ne simulez pas un contrôle d'honorabilité hors cadre prévu."
        ),
        h("Mise en pratique"),
        t(
          "Poste : chargé de clientèle banque de détail. Proposez 6 critères, une pondération, et le descripteur du niveau « insuffisant » et du niveau « conforme » pour « éthique commerciale ». Indiquez un critère que vous refusez d'ajouter si le manager dit « il faut quelqu'un de jeune et dynamique »."
        ),
        h("Correction détaillée"),
        t(
          "Critères possibles : relation client et écoute (3), éthique commerciale et respect du cadre (3), explication d'une offre simple (2), priorisation et organisation (2), travail d'équipe agence (1), apprentissage des produits (1). Insuffisant éthique : « N'identifie pas le conflit entre objectif commercial et intérêt du client, ou justifie une vente inadaptée par la pression du chiffre. » Conforme : « Donne un exemple ou un raisonnement situationnel où l'intérêt du client et la règle interne priment, avec une action concrète (refus, alternative, escalade). »\n\nCritère refusé : « jeune et dynamique ». L'âge est un critère protégé (L. 1132-1). « Dynamique » est un jugement flou. Reformulation possible, si le poste l'exige vraiment : « tenir un rythme d'accueil en agence aux heures d'ouverture, illustré par des exemples d'organisation » — exigence professionnelle, posée à tous, sans référence à l'âge."
        ),
      ],
    }),
    lesson({
      title: "Logistique, accessibilité et rôles avec le manager",
      description:
        "Organiser les conditions matérielles de l'entretien, anticiper l'accessibilité, et répartir clairement les rôles avec le manager.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous serez capable d'organiser un entretien présentiel ou à distance dans des conditions équitables, de proposer un aménagement raisonnable sans enquêter sur la santé, et de contractualiser avec le manager qui anime quoi, qui note quoi, et comment se passe le débrief."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La qualité d'un entretien dépend aussi de conditions matérielles que le candidat ne maîtrise pas. Une salle de passage, un manager en retard de vingt minutes, une visio sans lien de secours ou un badge qui n'ouvre pas le bâtiment produisent du stress artificiel. Ce stress n'évalue pas la compétence. Il évalue la logistique de l'entreprise. Préparer l'entretien, c'est donc préparer le cadre : convocation claire, lieu, horaire, durée, interlocuteurs, documents à apporter, modalité (présentiel, visio, téléphone), et conduite à tenir en cas d'imprévu.\n\nL'accessibilité n'est pas un sujet « en plus ». Le handicap est un critère de discrimination prohibé à l'embauche (L. 1132-1). Refuser un aménagement raisonnable de l'entretien alors qu'il permettrait d'évaluer les aptitudes professionnelles expose l'employeur à un risque de discrimination. Vous n'avez pas à connaître le diagnostic. Vous avez à offrir, dans la convocation, une formulation ouverte : le candidat peut signaler un besoin d'aménagement pour passer l'entretien dans de bonnes conditions. Exemples de bonne pratique : accessibilité des locaux, visio plutôt que présentiel, temps de consigne écrit, possibilité de venir avec un interprète si cela a un lien avec le déroulement et non avec une enquête médicale. L'aménagement concerne les modalités de l'évaluation, pas le niveau d'exigence du poste. Si le poste exige une habilitation ou une aptitude particulière, ce point relève d'un process RH et, le cas échéant, de la médecine du travail après embauche, pas d'une question d'entretien sur la pathologie.\n\nLes rôles avec le manager se préparent avant la salle, pas dans l'ascenseur. Le recruteur junior est responsable du cadre : accueil, timing, équité, questions illicites, prise de notes structurée, clôture sur la suite. Le manager est responsable de l'expertise métier et de la projection dans l'équipe. Si le manager pose une question sur les enfants, la santé ou l'origine, le recruteur recadre, même s'il est plus junior en grade. Ce n'est pas de l'impolitesse. C'est l'application du droit et la protection de l'entreprise. Cette répartition doit avoir été dite en amont : « Je pilote le déroulé et j'interromps une question hors cadre légal. Vous approfondissez le technique. Nous notons chacun de notre côté, puis nous débriefons 15 minutes sans le candidat. »\n\nLa logistique inclut aussi la confidentialité. Une salle vitrée ouverte sur l'open space, un écran partagé qui montre d'autres CV, un collègue qui entre « juste chercher un dossier » : ce sont des incidents de données et de respect. Les résultats des méthodes d'aide au recrutement sont confidentiels (L. 1221-8). Les notes d'entretien sont des données personnelles. Elles ne se laissent pas sur la table de la salle de réunion.\n\nEnfin, l'équité logistique fait partie de l'équité d'évaluation. Si un candidat a 60 minutes au calme et le suivant 25 minutes entre deux crises, vous ne comparez plus des personnes, vous comparez des contextes. Reporter vaut mieux que bricoler."
        ),
        h("Méthode opérationnelle"),
        t(
          "Checklist avant J-2 : salle ou lien visio testé, plan d'accès, nom de l'accueil, numéro de secours, guide et grilles imprimés ou ouverts hors messagerie, CV du bon candidat, durée bloquée dans l'agenda du manager + 15 minutes de débrief, consigne d'absence de téléphone personnel en séance.\n\nDans la convocation : date, heure, durée, lieu ou lien, participants et fonctions, documents éventuels, contact en cas d'empêchement, phrase d'aménagement. Vous ne demandez pas « êtes-vous handicapé ? ».\n\nRéunion de 15 minutes avec le manager avant le premier entretien de la campagne : objectifs, guide, grille, qui parle, questions interdites, conduite si retard, conduite si le candidat pose une question de rémunération trop tôt (renvoi au cadre validé, pas d'annonce improvisée).\n\nAprès chaque entretien : débrief immédiat, notes factuelles, grille datée, documents rangés selon la politique interne et les règles de conservation. Pas de discussion dans le couloir."
        ),
        h("Exemple professionnel"),
        t(
          "Agence d'intérim, vacation d'entretiens pour un magasin logistique. Le commercial agence veut « enchaîner toutes les 20 minutes ». Le chargé de recrutement junior impose 35 minutes + 10 minutes de pause, une salle fermée, et un affichage à l'accueil pour que les candidats ne s'assoient pas au milieu des permanents. Un candidat signale une difficulté de déplacement. L'entretien est proposé en visio le lendemain, mêmes questions, même grille. Le client magasin n'assiste pas en silence sans avoir été briefé : il reçoit les questions interdites par écrit."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser le manager « juste passer cinq minutes » sans rôle. Il pose alors des questions de personnalité et casse le timing.\n\nOublier de tester la visio. Le premier candidat subit vos problèmes techniques ; le second, une fois le problème réglé, passe un autre entretien.\n\nDemander un certificat médical pour aménager l'entretien. Vous n'êtes pas médecin du travail.\n\nFaire l'accueil debout dans le hall en parlant du poste à voix haute. Confidentialité et première impression professionnelle sont déjà perdues."
        ),
        h("Situations particulières"),
        t(
          "Manager empêché au dernier moment : vous menez l'entretien prévu sur le cadre et les compétences transverses, et vous replanifiez le bloc métier. Vous ne « sauvez » pas la campagne en improvisant une expertise que vous n'avez pas.\n\nCandidat en situation de handicap qui n'a rien signalé et qui rencontre une difficulté en séance : vous proposez une pause ou un aménagement immédiat (lecture des questions, temps), sans exiger d'explication médicale.\n\nEntretien déjeuner : déconseillé pour un junior. Le cadre social dilue les critères et multiplie les questions de vie privée. Si la culture d'entreprise l'impose, le guide et les interdits restent les mêmes ; l'alcool n'est pas un outil d'évaluation."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez : (1) les cinq lignes de brief que vous envoyez au directeur d'agence avant un entretien commun pour un chargé de clientèle ; (2) la phrase d'aménagement à insérer dans la convocation ; (3) ce que vous faites si, cinq minutes avant, le manager dit « je vais lui demander si elle compte avoir des enfants, c'est un poste prenant »."
        ),
        h("Correction détaillée"),
        t(
          "Brief manager : durée 60 minutes ; vous ouvrez et clôturez ; lui prend le bloc produits et cas d'agence ; chacun note sur la grille jointe ; questions sur la vie privée, la santé, la famille, l'origine interdites ; débrief 15 minutes ensuite, sans verdict dans la salle. Phrase d'aménagement : « Si vous avez besoin d'un aménagement pour passer cet entretien dans de bonnes conditions, indiquez-le à [nom, e-mail, téléphone] afin que nous l'organisions. »\n\nRecadrage du manager : vous rappelez L. 1132-1 (situation de famille, grossesse) et L. 1221-6 (lien nécessaire avec l'emploi). Vous proposez de tester la capacité à tenir les horaires d'agence par une question professionnelle identique pour tous. Si le manager maintient son intention, vous signalez à votre responsable RH avant l'entretien. Vous n'êtes pas tenu de laisser dire une question illicite pour « ne pas le vexer »."
        ),
      ],
    }),
    lesson({
      title: "Guide d'entretien complet — chargé de clientèle, banque de détail",
      description:
        "S'approprier un guide opérationnel fictif, de l'ouverture à la grille, pour un poste de chargé de clientèle en agence.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous saurez utiliser un guide d'entretien complet : timing, questions d'ancrage, relances STAR, cas situationnels, questions du candidat, clôture et grille. Vous pourrez l'adapter à un autre poste sans copier des questions hors sujet."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un guide « complet » n'est pas un document littéraire. C'est un instrument de séance, assez précis pour qu'un recruteur junior et un manager puissent mener le même entretien à trois jours d'intervalle, assez souple pour relancer. Le cas retenu ici est fictif : chargé de clientèle en banque de détail, CDI, agence. Le métier combine accueil, conseil, vente de produits d'épargne et de crédit dans un cadre réglementaire, développement d'un portefeuille et travail d'équipe. Les compétences critiques ne sont pas « aimer les gens » : ce sont l'écoute, l'explication d'une offre, l'éthique commerciale, la priorisation, et la capacité à travailler sous objectifs sans s'affranchir des règles.\n\nCe guide est un exemple pédagogique. Il n'est pas un modèle unique imposé par le droit. Ce qui est obligatoire, c'est que les questions restent en lien direct et nécessaire avec l'emploi (L. 1221-6) et que le candidat ne soit pas écarté pour un motif discriminatoire (L. 1132-1). La structuration, le STAR et la pondération sont des bonnes pratiques. Si votre établissement a une trame conformité interne, elle prime sur cet exemple.\n\nLe poste de chargé de clientèle expose particulièrement au risque de questions illicites : disponibilité liée à la famille, « look commercial », âge, origine de la clientèle du quartier, santé « pour tenir le stress ». Aucune de ces questions n'entre dans le guide. La tenue professionnelle, si elle est une exigence, se traduit par une information sur le code vestimentaire du réseau, identique pour tous, pas par un commentaire sur l'apparence. La langue de travail est le français si les écrits et l'accueil l'exigent ; cela ne justifie pas une enquête sur l'origine ou sur une autre langue parlée en famille.\n\nVous n'utilisez ce guide qu'après validation du manager d'agence. Un directeur qui veut « juste sentir le feeling » doit malgré tout s'y prêter : c'est votre rôle de le ramener à des preuves. Le guide ci-dessous inclut volontairement des relances écrites : en séance, vous ne les lisez pas comme un robot. Vous les avez en filet.\n\nLes notes prises pendant cet entretien sont confidentielles. Elles ne sont pas un jugement de la personne ; elles sont des faits au service d'une comparaison. Le candidat est informé du déroulé. S'il existe un test de mise en situation ou un outil d'aide à la décision, l'information préalable est une obligation légale (L. 1221-8), distincte de ce guide d'entretien classique."
        ),
        h("Méthode opérationnelle"),
        t(
          "La veille : relire la fiche de poste, le CV, la grille, le guide. Annoter trois axes d'investigation propres au candidat, sans changer les questions d'ancrage.\n\nEn séance : annoncer le déroulé, respecter les temps à cinq minutes près, noter des faits, ne pas argumenter. Si le candidat fuit le STAR, reformuler une fois la consigne, puis passer à un situationnel. Si le manager déborde, reprendre le timing à voix haute.\n\nAprès séance : terminer la grille avant de discuter, rédiger cinq à huit lignes de synthèse factuelle, ranger le document. Ne pas envoyer le guide annoté par e-mail à une liste de diffusion large."
        ),
        h("Exemple professionnel"),
        t(
          "Le document ci-dessous est le livrable que vous pourriez poser sur la table, pour une campagne fictive à l'agence Lyon Part-Dieu de la Banque des Vallées (ETI régionale fictive). Il est conçu pour un entretien de 60 minutes, recruteur junior + directeur d'agence."
        ),
        code(`GUIDE D'ENTRETIEN — Chargé de clientèle, banque de détail
Document interne pédagogique — cas fictif — confidentiel
Employeur fictif : Banque des Vallées, ETI régionale
Poste : chargé / chargée de clientèle, agence de Lyon Part-Dieu
Contrat : CDI temps plein, horaires d'agence
Participants : recruteur (cadre, timing, droit) + directeur d'agence (métier)
Durée : 60 minutes + 15 minutes de débrief sans le candidat
Grille : à remplir séparément par chaque intervieweur avant le débrief

------------------------------------------------------------------------
0. AVANT L'ENTRÉE DU CANDIDAT (5 min)
- Vérifier identité du bon dossier, CV, convocation, aménagement éventuel.
- Téléphones en silencieux. Porte fermée. Écran sans autres candidatures.
- Rappel manager : pas de questions sur santé, famille, grossesse, origine,
  religion, âge, apparence, logement, crédits personnels, opinions.
- Lien L. 1221-6 et L. 1132-1 : uniquement l'aptitude professionnelle.

------------------------------------------------------------------------
1. ACCUEIL ET CADRE (5 min) — recruteur
Script d'ouverture :
« Bonjour [prénom nom]. Merci d'être venu(e). Je suis [nom, fonction].
[Nom du directeur] est directeur de l'agence. Nous avons 60 minutes.
Déroulé : votre parcours, des situations concrètes liées au poste,
deux cas pratiques, vos questions, puis la suite du processus.
Je prendrai des notes pour restituer des faits, pas des impressions.
Les questions portent sur vos aptitudes professionnelles. Si une question
vous paraît sans lien avec le poste, dites-le-nous.
Avez-vous une contrainte d'horaire à 60 minutes ? »

Annoncer la suite du process (étapes restantes, délai de réponse cible).
Ne pas promettre une embauche. Ne pas improviser une rémunération.

------------------------------------------------------------------------
2. PARCOURS PROFESSIONNEL (8 min) — recruteur
Question d'ancrage :
« Pouvez-vous présenter votre parcours des cinq à dix dernières années
en vous arrêtant sur les missions en lien avec la relation client ? »

Relances :
- « Quelle était votre responsabilité exacte, distincte de celle de l'équipe ? »
- « Quel volume ou quel type de portefeuille / de flux gériez-vous ? »
- « Pourquoi ce poste-ci, dans ce réseau, maintenant ? »

À clarifier selon le CV (axes individuels, 3 maximum) :
- [hypothèse 1]
- [hypothèse 2]
- [hypothèse 3]

Interdits : « Vous habitez loin », « Vous avez un accent », « Votre âge ».

------------------------------------------------------------------------
3. COMPÉTENCE — ÉCOUTE ET RELATION CLIENT (8 min) — recruteur
Ancrage STAR :
« Racontez une situation où un client ou un usager était mécontent
ou ne se sentait pas compris. »

Relances STAR :
S : « Quel était le contexte ? Qui était là ? Quelle contrainte de temps ? »
T : « Quelle était votre responsabilité dans cette situation ? »
A : « Qu'avez-vous dit et fait, concrètement, dans l'ordre ? »
R : « Quel a été le résultat pour la personne ? Pour vous ? Qu'avez-vous
    modifié ensuite dans votre façon de faire ? »

Preuves attendues (aide mémoire, ne pas lire au candidat) :
- reformulation du besoin ; - calme sous tension ; - suite donnée.

------------------------------------------------------------------------
4. COMPÉTENCE — ÉTHIQUE COMMERCIALE ET CADRE (8 min) — directeur
Ancrage STAR :
« Décrivez une situation où l'on vous demandait, ou où un objectif
vous poussait, à proposer quelque chose qui ne convenait pas. »

Relances :
- « Quels signaux vous ont alerté ? »
- « Qu'avez-vous dit à la personne ? À votre responsable ? »
- « Quelle règle, procédure ou limite avez-vous utilisée ? »
- « Quel a été le résultat ? »

Si aucun exemple passé (profil très junior) : ne pas forcer un récit faux.
Passer au situationnel du bloc 6, même critère.

------------------------------------------------------------------------
5. COMPÉTENCE — EXPLICATION D'UNE OFFRE ET PÉDAGOGIE (6 min) — directeur
Ancrage :
« Expliquez-moi, comme à un client qui n'y connaît rien, un produit
ou un service que vous avez déjà présenté (même hors banque). »

Relances :
- « Quels mots avez-vous évités ? »
- « Comment avez-vous vérifié que la personne avait compris ? »
- « Que faisiez-vous si elle n'était pas d'accord ? »

Le directeur peut proposer un mini-produit fictif local
(livret d'épargne simple) si le candidat n'a pas d'exemple.

------------------------------------------------------------------------
6. SITUATIONNELS (10 min) — directeur puis recruteur
Cas A — crédit et fragilité (éthique + cadre)
« Un client que vous connaissez peu veut un crédit à la consommation
pour un projet personnel. Ses charges semblent déjà élevées. Votre
objectif mensuel n'est pas atteint. Quelles sont vos actions, dans l'ordre ?
À qui parlez-vous ? Que ne faites-vous pas ? »

Relances : pièces utiles, refus, alternative, escalade, traces écrites.
Ne pas demander la situation financière réelle du candidat.

Cas B — priorisation d'agence
« Samedi 10 h 30. File de cinq personnes, un client en rendez-vous
dans dix minutes, le téléphone sonne, un collègue vous demande une
urgence. Comment arbitrez-vous les 15 minutes suivantes ? »

Cas C (si temps) — erreur d'un collègue
« Vous entendez un collègue donner une information inexacte à un client.
Que faites-vous pendant l'échange ? Après l'échange ? »

------------------------------------------------------------------------
7. ORGANISATION, OUTILS, TRAVAIL D'ÉQUIPE (5 min) — recruteur
« Racontez une journée ou une semaine chargée et la façon dont vous
avez priorisé. » Puis : « Quel outil de suivi utilisiez-vous, concrètement ? »
« Un désaccord avec un collègue ou un manager : faits, votre action, issue. »

------------------------------------------------------------------------
8. QUESTIONS DU CANDIDAT (7 min) — les deux
Laisser le candidat mener. Noter la pertinence professionnelle
(process, équipe, attentes des 90 premiers jours, formation produits).
Réponses honnêtes. Si vous ne savez pas : « Je vérifie et je vous écris. »
Ne pas vendre un poste irréel (L. 5331-3 : allégations trompeuses,
esprit applicable aussi à l'oral).

------------------------------------------------------------------------
9. CLÔTURE (3 min) — recruteur
- Remercier.
- Rappeler les étapes et une date de prochaine communication.
- Demander si le candidat souhaite ajouter un élément professionnel.
- Accompagner à la sortie. Pas de verdict. Pas de « vous êtes très bon,
  on vous garde ».
- Récupérer badges, ne rien laisser de notes visibles.

------------------------------------------------------------------------
GRILLE D'ÉVALUATION (à remplir AVANT le débrief)

Échelle : 1 insuffisant | 2 en retrait | 3 conforme au besoin | 4 dépasse
Noter uniquement à partir de faits de l'entretien.
Pondération figée avant campagne.

Critère                              Pond.  Recruteur  Manager  Faits
Écoute / relation client               3       /4         /4
Éthique commerciale et cadre           3       /4         /4
Pédagogie / explication d'une offre    2       /4         /4
Priorisation / organisation            2       /4         /4
Travail d'équipe agence                1       /4         /4
Apprentissage / motivation pour le poste 1     /4         /4

Éliminatoire réel (rare, exigence de poste, appliqué à tous) :
[ ] Non retenu pour motif professionnel documenté :
................................................................
Interdit : âge, look, accent, famille, santé, « pas le profil du quartier ».

Synthèse factuelle (8 lignes max) :
................................................................
Points à vérifier plus loin (références, test informé, RH) :
................................................................
Recommandation :  [ ] suite  [ ] réserve  [ ] arrêt — motif professionnel

------------------------------------------------------------------------
DÉBRIEF (15 min, sans candidat)
1. Chacun lit sa note et ses faits (2 min chacun), sans se couper.
2. Écarts > 1 cran : revenir aux faits, pas au feeling.
3. Décision d'étape (pas d'offre en séance).
4. Messages au candidat : le recruteur rédige, pas un texto du manager.`),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lire le guide ligne à ligne et ignorer une réponse riche. Le guide est un filet, pas un téléprompter.\n\nSauter les situationnels parce que « le feeling est bon ». C'est précisément là que l'éthique commerciale se voit.\n\nLaisser le directeur transformer le cas crédit en enquête sur les crédits personnels du candidat.\n\nRemplir la grille le lendemain de mémoire. Les faits s'évaporent ; restent les impressions."
        ),
        h("Situations particulières"),
        t(
          "Candidat interne déjà en agence : mêmes situationnels, questions de parcours plus courtes, vigilance accrue sur le favoritisme et sur les rumeurs d'équipe.\n\nCandidat sans aucun exemple commercial : le situationnel et l'explication d'un produit simple portent davantage. Vous n'inventez pas un « KO manque d'expérience » si le poste est ouvert aux débutants.\n\nEntretien à distance : même guide ; ajouter 2 minutes de test audio/vidéo ; cas B adapté (file d'attente d'appels plutôt que file d'agence si le candidat n'a jamais vu une agence). L'imprévu technique se traite dans le module suivant."
        ),
        h("Mise en pratique"),
        t(
          "Le directeur d'agence veut ajouter, en fin de guide, deux questions : « Vous êtes marié ? » et « Vous supportez la pression ? ». Rédigez votre réponse écrite (e-mail interne) et proposez, pour la seconde, une question STAR conforme."
        ),
        h("Correction détaillée"),
        t(
          "La situation de famille est un critère protégé (L. 1132-1). Elle n'a pas de lien nécessaire avec l'emploi (L. 1221-6). Vous refusez de l'inscrire. « Supporter la pression » est flou et oriente vers la santé ou la personnalité. Question STAR de substitution : « Racontez une demi-journée où plusieurs demandes urgentes sont arrivées en même temps. Quelle était la situation, quelle était votre responsabilité, qu'avez-vous fait, quel a été le résultat ? » Le situationnel du samedi matin du guide teste déjà cette aptitude, de façon professionnelle et identique pour tous."
        ),
        note(
          "Ce guide est un cas fictif de formation. Sur un poste réel, faites valider la trame par le manager et, si elle existe, par la conformité ou les RH. Ne transcrivez pas de données de santé. Date de vérification des textes cités : 13/10/2026 (legal-sources.json)."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Préparer un entretien",
      description: "Vérifiez que vous savez préparer un entretien structuré, légal et utilisable avec un manager.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question:
            "D'après le Code du travail, article L. 1221-6, les informations demandées à un candidat doivent :",
          options: [
            "A. Avoir uniquement pour finalité d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles, avec un lien direct et nécessaire.",
            "B. Permettre de connaître la personne dans sa globalité, y compris sa situation familiale, pour mieux l'intégrer.",
            "C. Être identiques à celles d'un entretien annuel d'évaluation d'un salarié déjà en poste.",
            "D. Être laissées à la libre appréciation du manager, dès lors que le candidat peut refuser de répondre.",
          ],
          correct: 0,
          explanation:
            "L. 1221-6 limite les informations au lien direct et nécessaire avec l'emploi. Ce n'est pas une invitation à explorer la vie privée, même si le candidat « peut refuser ». Un refus de répondre à une question illicite ne doit pas pénaliser le candidat.",
        }),
        q({
          question:
            "Quelle affirmation décrit correctement un entretien semi-structuré ?",
          options: [
            "A. Le recruteur improvise selon le feeling, puis note ce dont il se souvient.",
            "B. Toutes les questions sont lues mot à mot, sans aucune relance, pour coller à un script unique.",
            "C. Un cadre commun (thèmes, questions d'ancrage, grille, temps) est fixé, avec des relances adaptées au parcours.",
            "D. Seul le manager parle, le recruteur observe en silence pour ne pas biaiser.",
          ],
          correct: 2,
          explanation:
            "Le semi-structuré combine équité (même cadre) et écoute (relances). L'entretien libre n'est pas comparable. Le 100 % scripté peut être utilisé en volume, mais ce n'est pas la définition du semi-structuré. Le recruteur reste responsable du cadre légal.",
        }),
        q({
          question: "Dans la méthode STAR, le R correspond à :",
          options: [
            "A. Le relationnel du candidat, noté au feeling.",
            "B. Le résultat de l'action menée, y compris s'il est imparfait, et ce qui a été appris.",
            "C. La recommandation finale du recruteur (retenu / non retenu).",
            "D. Le réseau professionnel cité par le candidat.",
          ],
          correct: 1,
          explanation:
            "STAR = Situation, Tâche, Action, Résultat. Sans résultat, vous n'avez qu'un récit d'intention. Le résultat n'a pas besoin d'être héroïque pour être informatif.",
        }),
        q({
          question:
            "Un manager veut noter « look commercial » dans la grille d'un chargé de clientèle. Que faites-vous ?",
          options: [
            "A. Vous acceptez : l'apparence fait partie de la relation client en banque.",
            "B. Vous le remplacez par l'âge, plus objectif.",
            "C. Vous refusez le critère apparence (L. 1132-1) et, si besoin, vous informez du code vestimentaire du réseau, identique pour tous.",
            "D. Vous le laissez dans la grille mais vous ne le remplissez pas, pour ne pas heurter le manager.",
          ],
          correct: 2,
          explanation:
            "L'apparence physique est un critère de discrimination prohibé. Un code vestimentaire professionnel, connu et appliqué à tous, n'est pas un jugement de l'apparence de la personne. Laisser un critère illicite « inactif » dans une grille est une mauvaise pratique : il peut encore influencer.",
        }),
        q({
          question:
            "Quand la grille d'évaluation doit-elle être figée (critères et pondération) ?",
          options: [
            "A. Après le premier candidat, une fois que l'on a vu le marché.",
            "B. Avant le premier entretien de la campagne, à partir de la fiche de poste validée.",
            "C. Uniquement au moment de la shortlist, pour aller plus vite en entretien.",
            "D. Jamais : chaque intervieweur doit rester libre de ses critères.",
          ],
          correct: 1,
          explanation:
            "Figer la grille ensuite, c'est l'ajuster au candidat préféré. La pondération est une politique interne, pas une obligation légale, mais elle doit précéder les entretiens pour rester honnête.",
        }),
        q({
          question:
            "Un candidat demande un aménagement pour l'entretien (visio plutôt que présentiel). Quelle conduite est conforme ?",
          options: [
            "A. Vous exigez un certificat médical détaillé avant d'accepter.",
            "B. Vous refusez : tous doivent passer dans les mêmes conditions matérielles, sinon l'égalité est rompue.",
            "C. Vous organisez l'aménagement des modalités, sans enquêter sur la santé, tout en conservant les mêmes critères d'évaluation du poste.",
            "D. Vous acceptez mais vous baissez le niveau d'exigence du poste pour « être fair-play ».",
          ],
          correct: 2,
          explanation:
            "Aménager les modalités n'est pas baisser les exigences du métier. Exiger un diagnostic est excessif et hors rôle. Le handicap est un critère protégé (L. 1132-1). L'égalité porte sur les critères professionnels, pas sur l'identique matériel à tout prix.",
        }),
        q({
          question:
            "Quelle est la répartition de rôles la plus robuste entre recruteur junior et manager ?",
          options: [
            "A. Le manager mène tout ; le recruteur prend le café et envoie le CR.",
            "B. Le recruteur pilote le cadre, le timing et le respect du droit ; le manager approfondit le métier ; chacun note avant le débrief.",
            "C. Les deux improvisent ensemble pour rester spontanés.",
            "D. Le recruteur pose toutes les questions techniques pour « protéger » le manager.",
          ],
          correct: 1,
          explanation:
            "Le junior n'est pas un assistant logistique. Il est responsable du process et du cadre légal, y compris s'il doit recadrer une question illicite. Le manager n'est pas un spectateur : il évalue l'expertise.",
        }),
        q({
          question:
            "Une question situationnelle se distingue d'une question comportementale en ce qu'elle :",
          options: [
            "A. Explore un cas hypothétique proche du poste, pour voir le raisonnement et les priorités.",
            "B. Porte nécessairement sur la vie personnelle du candidat.",
            "C. Est illégale, car elle n'est pas un fait passé.",
            "D. Remplace la grille d'évaluation.",
          ],
          correct: 0,
          explanation:
            "Le situationnel n'est pas illégal s'il a un lien avec l'emploi. Il ne remplace pas les faits passés (comportemental) ni la grille. Il est particulièrement utile pour un junior qui a peu d'exemples identiques.",
        }),
      ],
    }),
  ],
};
