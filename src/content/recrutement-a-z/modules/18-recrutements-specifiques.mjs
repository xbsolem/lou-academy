import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 18,
  title: "Recrutements spécifiques et situations complexes",
  description:
    "Adapter le process aux contrats, aux profils, aux organisations et aux contraintes (inclusion, international, urgence, confidentialité) sans sortir du mandat junior.",
  lessons: [
    lesson({
      title: "CDI, CDD et intérim : le contrat change le process",
      description:
        "Adapter sourcing, message, délais et acteurs selon la nature du contrat, sans qualifier seul un motif de CDD.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez quelles spécificités opérationnelles distinguent un recrutement en CDI, en CDD et en intérim.\n\nVous identifiez les risques de chaque cadre (promesse, motif, employeur, délais) et les adaptations de process.\n\nVous savez ce que le junior ne tranche pas (motif de CDD, qualification d'employeur, durée d'essai)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le type de contrat n'est pas un détail de pied de page. Il change le public visé, le discours d'annonce, les critères de disponibilité, les interlocuteurs, et parfois l'identité de l'employeur. Recruter « comme pour un CDI » un besoin de trois semaines, ou vendre un CDD comme un CDI « on verra », produit des désistements, des contentieux et une expérience candidat dégradée. L'article L. 5331-3 interdit les allégations fausses ou susceptibles d'induire en erreur sur l'existence, la nature, la description de l'emploi, la rémunération et avantages, le lieu de travail. Annoncer un CDI alors que le besoin validé est un CDD n'est pas une technique de volume : c'est un risque d'offre trompeuse.\n\nLe CDI est le cadre de référence de beaucoup d'entreprises. Spécificités : process souvent plus long, enjeu d'essai, vivier, marque employeur, cohérence offre / contrat. Risques : surpromettre la stabilité du poste (un CDI n'interdit pas une réorganisation), négliger le préavis du candidat, traiter le closing comme un détail. Adaptations : cadrage de rémunération et de contenu plus soigneux, préboarding, REX qualité à 90 jours. Le junior n'invente pas que « tout le monde est en CDI dans le secteur ».\n\nLe CDD est un contrat à durée déterminée. Spécificités : date de fin ou durée, motif, parfois renouvellement selon les textes — autant d'éléments que RH qualifie. Risques : le junior qui choisit un motif « parce que ça passe » ; le manager qui veut un CDD pour « tester » hors cadre ; le candidat qui croit à une transformation automatique en CDI. Adaptations : le motif et la durée sont écrits dans l'annonce de façon honnête ; le process peut être plus compact si la date de début est proche ; on ne promet pas la titularisation. Le junior transmet à RH ; il ne rédige pas le motif juridique.\n\nL'intérim met en relation une entreprise de travail temporaire, un salarié, une entreprise utilisatrice. Spécificités : l'employeur de l'intérimaire, dans ce régime, est l'agence ; le junior côté agence source la disponibilité et la compétence pour une mission ; le junior côté entreprise cliente exprime un besoin de mission, pas une DPAE d'embauche classique à la place de l'agence. Risques : faire passer une mission pour un CDI client ; laisser un intérimaire commencer sans le process agence ; mélanger les pipelines. Adaptations : discours clair sur la mission (dates, horaires, lieu, compétences), réactivité, respect du process de l'agence. Pas de benchmark de taux de conversion « marché de l'intérim » inventé.\n\nDans les trois cas, L. 1132-1, L. 1221-6, L. 1221-8 et L. 1221-9 s'appliquent. Un CDD ou une mission ne « justifient » pas une question discriminatoire, ni une méthode d'évaluation non pertinente."
        ),
        note(
          "Obligation : honnêteté de l'offre (L. 5331-3), non-discrimination, méthodes pertinentes. Le motif d'un CDD et la DPAE sont des actes employeur / RH, pas un bricolage junior. Politique interne : qui recrute l'intérim (agence vs RH). Bonne pratique : nommer le contrat dès l'annonce."
        ),
        h("Méthode opérationnelle"),
        t(
          "Dès le cadrage : type de contrat, dates, lieu, rémunération, qui est l'employeur. Faire qualifier le CDD par RH avant diffusion. Choisir les canaux selon l'urgence et la durée (sans magie de marché). Adapter le nombre d'entretiens à l'enjeu réel : un CDD court n'exige pas cinq tours ; un CDI cadre n'est pas un « oui » sur CV. Dire le contrat au téléphone dès la préqualification."
        ),
        code(
          "GRILLE D'ADAPTATION — CONTRAT\n\n                 CDI                      CDD                         Intérim (agence)\nAnnonce          nature CDI               durée / terme + nature      mission, dates, lieu, horaires\nMotif juridique  n/a                      RH qualifie, junior non     contrat de mission agence\nDPAE             employeur client         employeur client            process agence (employeur ETT)\nEntretiens       selon enjeu poste        souvent compact             réactif, compétences + dispo\nPromesse         pas de « job à vie »     pas de CDI automatique      pas de CDI client implicite\nRisque junior    overselling              faux motif / fausse durée   confusion employeur"
        ),
        h("Exemple professionnel"),
        t(
          "Industrie. Un chef d'atelier veut « un CDI, ça motive plus », alors que le budget est un remplacement de 4 mois. Le junior refuse de publier un CDI. Il fait qualifier un CDD par RH, publie la durée, source des profils ouverts à un CDD, et note que certains refus d'offre viendront de la durée : c'est un fait de besoin, pas un échec de charisme."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Écrire « CDI (CDD au début) ». Recruter un intérimaire comme un CDI interne sans l'agence. Oublier de dire les 3×8 dès la préqual d'une mission. Utiliser un modèle de refus CDI pour une mission de 48 h (ton disproportionné, mais la clôture reste due)."
        ),
        h("Situations particulières"),
        t(
          "CDD puis espoir de CDI : on peut dire qu'une suite est possible si c'est vrai et non garanti ; on ne l'écrit pas comme une certitude. Multi-missions intérim : statut « disponible » ≠ embauche. Temps partiel : c'est une nature de temps de travail, à dire dès l'offre (L. 5331-3)."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez 4 lignes d'annonce (contrat, dates, lieu, horaires) pour : a) CDI jours ; b) CDD 5 mois remplacement ; c) mission intérim 3 semaines équipe nuit. Puis indiquez l'erreur L. 5331-3 si vous publiez a) pour le besoin b)."
        ),
        h("Correction détaillée"),
        t(
          "a) CDI, lieu, horaires de jour. b) CDD 5 mois, remplacement, dates, lieu. c) mission, 3 semaines, nuit, employeur agence apparent. Publier a) pour b) induit en erreur sur la nature de l'emploi. Pourquoi : le contrat est un élément du besoin, pas un levier marketing."
        ),
      ],
    }),

    lesson({
      title: "Alternance et stage : former n'est pas « recruter moins cher »",
      description:
        "Cadrer un besoin d'alternant ou de stagiaire : pédagogie, tuteur, durée, discours, limites du junior.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez en quoi un recrutement d'alternant ou de stagiaire n'est pas un CDI junior déguisé.\n\nVous identifiez tuteur, rythme scolaire, convention, et risques d'un discours trompeur.\n\nVous savez renvoyer à RH les qualifications de contrat (apprentissage, professionnalisation, convention de stage)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Alternance et stage visent d'abord un parcours de formation. L'entreprise accueille pour faire apprendre, avec un tuteur ou maître d'apprentissage, un rythme (école / entreprise), des objectifs pédagogiques. Recruter comme si l'on cherchait un « petit CDI payé moins » produit des ruptures, des écoles mécontentes, et un décalage d'annonce (L. 5331-3 : nature de l'emploi).\n\nL'alternance (apprentissage ou contrat de professionnalisation — la qualification exacte est RH) : spécificités = calendrier scolaire, durée de formation, tutorat réel, grilles de rémunération qui ne se « négocient pas au feeling » par le junior. Risques : absence de tuteur, tâches sans rapport avec le diplôme, publication trop tardive par rapport aux dates d'école, questions d'âge ou d'origine déguisées en « fit école ». Adaptations : associer le tuteur aux entretiens, dire le rythme, sourcer via écoles et CFA, évaluer le potentiel d'apprentissage et les prérequis, pas dix ans d'expérience. Le junior ne décide pas seul du type de contrat ni du niveau de prise en charge.\n\nLe stage : spécificités = convention, stagiaire non salarié au sens du contrat de travail classique, durée et gratification selon les règles applicables — que RH / l'école portent. Risques : stage qui est un emploi déguisé ; recrutement sans convention ; entretien identique à un cadre dirigeant ; promesse d'embauche orale imprudente. Adaptations : process court, critères de formation, présence d'un tuteur, discours honnête sur les missions et sur l'absence de garantie d'embauche. Une promesse unilatérale n'est pas obligatoire ; si un écrit d'engagement circule, RH (F39588).\n\nDans les deux cas, L. 1132-1 s'applique : on n'écarte pas un candidat d'alternance pour un critère protégé. L. 1221-6 aussi : pas d'enquête familiale « pour voir s'il sera assidu ». Les méthodes (tests, mises en situation) restent pertinentes (L. 1221-9) et informées (L. 1221-8)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Cadrage : diplôme visé, rythme, tuteur nommé, missions d'apprentissage, dates. Canaux : écoles, CFA, jobboards étudiants, interne. Entretien : motivation pour le métier, bases, capacité à apprendre, pas un oral de senior. Décision : tuteur + manager + RH. Préparer l'accueil (poste, binôme, planning école)."
        ),
        code(
          "CHECKLIST ALTERNANCE / STAGE — AVANT PUBLICATION\n\n[ ] Tuteur / maître d'apprentissage identifié et d'accord\n[ ] Missions alignées au référentiel (pas « faire le café + Excel inconnu »)\n[ ] Rythme et dates scolaires connus\n[ ] Type de contrat / convention : qualification RH, pas junior\n[ ] Rémunération / gratification : barème RH, pas bricolage\n[ ] Annonce : nature exacte (alternance / stage), durée, lieu, rythme\n[ ] Process : 1 à 2 entretiens, tuteur présent au moins une fois\n[ ] Pas de promesse d'embauche automatique"
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet. Un manager veut un stagiaire « qui gère déjà des missions clients seul, 5 jours / 5, 6 mois, on verra la convention ». Le junior refuse de publier. Sans tuteur ni convention, ce n'est pas un stage. Il oriente soit vers un vrai stage cadré, soit vers un besoin RH d'un autre contrat, dûment qualifié."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Exiger 3 ans d'expérience pour une licence en alternance. Oublier de prévenir l'école. Faire passer 4 tours. Promettre « CDI à la clé » pour obtenir un oui. Demander l'âge pour « voir si le contrat d'apprentissage passe » au lieu de renvoyer à RH."
        ),
        h("Situations particulières"),
        t(
          "Mineur : circuit RH, autorisations, travaux réglementés — pas d'improvisation. Handicap : aménagements et partenaires, même cadre d'inclusion. Volume école : session collective + entretiens individuels courts, refus groupés corrects pour les non-reçus, individuels pour les reçus."
        ),
        h("Mise en pratique"),
        t(
          "Un manager vous donne cette fiche : « Alternant commercial, autonome sur un portefeuille, objectif comme un sédentaire, tuteur à désigner plus tard. » Listez 5 questions de recadrage et 2 éléments que vous n'écrivez pas dans l'annonce tant qu'ils ne sont pas vrais."
        ),
        h("Correction détaillée"),
        t(
          "Questions : tuteur nommé ? rythme ? missions d'apprentissage vs quota ? outils formés ? dates école ? On n'écrit pas « autonomie totale sur portefeuille » ni « CDI garanti ». Pourquoi : l'alternance est un contrat de formation ; l'annonce doit coller à la nature réelle (L. 5331-3)."
        ),
      ],
    }),

    lesson({
      title: "Cadres, profils pénuriques et expérimentés",
      description:
        "Recruter lorsque le levier n'est plus le volume de CV : rareté, exigence, délais, discrétion, offre.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez adapter sourcing, délais, niveau d'interlocuteur et closing lorsque le profil est cadre, rare ou très expérimenté.\n\nVous identifiez les risques (process trop junior, offre tardive, questions hors sujet, confidentialité).\n\nVous savez jusqu'où vous allez seul et quand vous embarquez un senior recrutement ou le manager."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un cadre n'est pas « un employé avec un meilleur titre ». Spécificités souvent observées en interne : process à plusieurs interlocuteurs, enjeux de rémunération et de statut, sensibilité à l'image du process, préavis plus longs, parfois clause et mobilité. Risques : faire passer un cadre par le même tunnel qu'un volume de débutants (attente, tests non pertinents, junior seul sur l'entretien d'évaluation stratégique) ; poser des questions de vie privée « pour voir le leadership » ; laisser une offre sans décideur. Adaptations : cadrage politique du poste (mandat, équipe, rattachement), sourcing direct, process calendrier compact une fois le candidat engagé, interlocuteurs de niveau adapté, feedback rapide. Pas de TTF « marché des cadres » inventé.\n\nUn profil pénurique est un profil dont le vivier local ou national est étroit au regard du besoin (compétence + bassin + conditions). La pénurie n'est pas un sentiment : elle se constate par un sourcing déjà fait, des refus d'approche, une absence de CV utilisables. Risques : baisser les critères en silence sans réécrire la fiche ; discriminer par facilité (« on veut un jeune, ça coûte moins ») ; multiplier les canaux sans revoir le besoin (télétravail, salaire, tutorat). Adaptations : revoir le besoin avec le manager (must have vs formation possible), sourcer, soigner l'expérience, décider vite, parfois recourir à un cabinet — décision budgétaire, pas un aveu. Toujours L. 1132-1.\n\nUn profil expérimenté peut n'être ni cadre ni pénurique : il a un historique dense. Spécificités : analyse de parcours, risques de surqualification réelle ou fantasmée, motivation à « redescendre » ou à transmettre. Risques : écarter pour l'âge (critère protégé) sous prétexte d'expérience ; tests infantilisants ; offre indigne du cadrage. Adaptations : évaluer l'adéquation au poste actuel, pas un CV de 25 ans ligne à ligne ; demander la motivation pour CE poste ; ne pas diagnostiquer une « trop grande seniorité » qui n'est qu'un âge.\n\nDans les trois cas, l'information sur les méthodes (L. 1221-8) et leur pertinence (L. 1221-9) restent dues. Un assessment n'est pas un droit du manager à n'importe quel outil."
        ),
        h("Méthode opérationnelle"),
        t(
          "Cadrage écrit : critères rares vs formables, fourchette, interlocuteurs, confidentialité. Mapping de sourcing. Approche personnalisée. Entretien 1 parfois à deux (junior + senior ou manager). Offre préparée avant le dernier tour. Points de process plus fréquents."
        ),
        code(
          "ADAPTATIONS — CADRE / PÉNURIQUE / EXPÉRIMENTÉ\n\nSourcing     : direct + réseau + éventuellement cabinet, pas seulement une annonce générique\nMessage      : poste, enjeux, rattachement, conditions déjà cadrées\nProcess      : peu d'étapes inutiles, dates tenues, décideur identifié\nÉvaluation   : faits de mandat, pas « leadership » vague, pas l'âge\nOffre        : alignée dès le cadrage, délai de validité, interlocuteur légitime\nJunior       : prépare, source, coordonne ; n'improvise pas une fourchette ni un titre"
        ),
        h("Exemple professionnel"),
        t(
          "ETI. Recherche d'un responsable maintenance, rareté locale. Le manager veut « moins de 40 ans, plus malléable ». Le junior recadre : l'âge est protégé. On parle d'outils, d'astreintes, de management d'équipe. Le vivier s'élargit à des profils expérimentés. Deux approches ciblées valent mieux que 80 CV hors sujet."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ghosting d'un cadre après trois heures d'entretiens. Test de logique non pertinent. Dire « on n'a pas de budget cabinet » puis exiger un délai de volume. Écarter un expérimenté « trop cher » sans avoir parlé rémunération."
        ),
        h("Situations particulières"),
        t(
          "Cadre dirigeant : souvent confidentiel, board, parfois cabinet ; le junior assiste, il ne pilote pas seul. Pénurie + petit budget : revoir le besoin, pas « mentir sur le CDI ». Expérimenté en reconversion vers moins de management : évaluer le poste cible, pas le prestige passé."
        ),
        h("Mise en pratique"),
        t(
          "Un manager dit : « Profil pénurique, process en 6 entretiens, fourchette fermée trop basse, pas de télétravail. » Proposez un ordre de discussion (besoin, process, offre) et ce que vous tracez."
        ),
        h("Correction détaillée"),
        t(
          "On discute d'abord le besoin (must have formable), puis l'offre (fourchette, conditions), puis un process compact. Tracer l'écart. Pourquoi : six entretiens + offre non tenable est un process qui sélectionne ceux qui n'ont pas d'options, pas « les meilleurs »."
        ),
      ],
    }),

    lesson({
      title: "Débutants et reconversion : évaluer le potentiel sans baisser le droit",
      description:
        "Recruter un premier emploi ou un changement de métier avec des critères d'apprentissage, pas des stéréotypes.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez construire une grille pour un débutant (prérequis, potentiel, conditions d'apprentissage) distincte d'une grille d'expérimenté.\n\nVous savez traiter une reconversion : transférable vs à former, sans mépris ni angélisme.\n\nVous évitez les critères illicites souvent collés à ces publics (âge, origine, parentalité)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un débutant n'a pas à « déjà avoir fait le poste ». Spécificités : peu de preuves métier, importance des stages / projets / attitudes professionnelles observables, besoin d'un tuteur, rémunération et titre honnêtes. Risques : exiger trois ans d'expérience pour un poste junior (annonce incohérente, L. 5331-3 si le titre dit junior) ; multiplier les tours pour « se rassurer » ; écarter pour l'âge ou l'école au lieu du prérequis ; questions sur la situation de famille « pour la stabilité ». Adaptations : prérequis réellement indispensables (habilitation, mobilité, outil de base), mises en situation courtes pertinentes (L. 1221-9), présence du futur tuteur, process court, onboarding plus dense. Pas de statistique nationale sur « la génération Z ».\n\nLa reconversion est un changement de métier, parfois après un autre secteur, une interruption, un handicap, un choix. Spécificités : parcours non linéaire, compétences transférables, motivation à documenter, parfois formation en cours. Risques : lire les « trous » comme un défaut moral ; écarter pour l'âge ; exiger le même CV qu'un natif du métier ; tests non pertinents. Adaptations : identifier ce qui se transfère (relation client, rigueur, outillage) et ce qui se forme (logiciel, normes) ; donner une mise en situation du poste cible ; ne pas demander l'état de santé pour « expliquer le trou » (L. 1221-6, L. 1132-1).\n\nDans les deux cas, le junior reste un évaluateur de l'adéquation au poste, pas un coach de vie. Le feedback, si politique ok, porte sur des faits professionnels. Le refus reste non discriminatoire, sans obligation générale de motiver."
        ),
        h("Méthode opérationnelle"),
        t(
          "Réécrire la fiche : 5 prérequis max, dont ceux vraiment bloquants. Choisir une mise en situation de 20 minutes. Former le manager à ne pas noter « le feeling d'immaturité ». Prévoir le tutorat avant de publier. Sourcer écoles, reconversion, internes."
        ),
        code(
          "GRILLE DÉBUTANT / RECONVERSION (exemple interne)\n\nPrérequis bloquants (oui/non) : [habilitation / mobilité / horaires / outil de base]\nPreuves d'apprentissage : stage, projet, formation, bénévolat professionnel pertinent\nMise en situation du poste : faits observés\nConditions d'intégration : tuteur, 30-60-90 internes (plan, pas un KPI marché)\nInterdit de scorer : âge, origine, photo, « trop de métiers », grossesse, santé\nDécision : prérequis + potentiel observable + capacité à accueillir"
        ),
        h("Exemple professionnel"),
        t(
          "Services. Poste de chargé de support N1. Un candidat en reconversion après 12 ans en logistique. Le manager dit « trop vieux, il ne restera pas ». Le junior ramène l'entretien sur les outils, les horaires, une mise en situation ticket. L'âge sort de la grille. Si l'écart est l'outil, on le nomme ; si l'accueil n'existe pas, on ne recrute pas un débutant pour l'abandonner."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Annonce « junior, 5 ans d'expérience ». Entretien de 90 minutes sans exercice. Promettre une montée rapide non budgétée. Demander pourquoi une reconversion « si tard »."
        ),
        h("Situations particulières"),
        t(
          "Reconversion via un dispositif public : le junior ne promet pas un financement ; il oriente RH. Débutant interne (stage puis embauche) : process transparent vis-à-vis des externes si un poste ouvre vraiment. Volume débutants : session collective + grille unique."
        ),
        h("Mise en pratique"),
        t(
          "Transformez ces critères en version licite et utile, ou biffez : 1) moins de 25 ans ; 2) première expérience welcome ; 3) dynamisme ; 4) disponible soirs ; 5) français langue maternelle."
        ),
        h("Correction détaillée"),
        t(
          "1) Biffer (âge). 2) Garder si le poste est réellement junior. 3) Remplacer par des comportements observés (ponctualité, clarté orale). 4) Garder si le poste l'exige, dit dans l'annonce. 5) Biffer / reformuler : capacité à travailler en français si nécessaire au poste, sans « langue maternelle » (critère lié à L. 1132-1 sur la langue autre que le français). Pourquoi : le potentiel ne se mesure pas par un stéréotype."
        ),
      ],
    }),

    lesson({
      title: "Volume, multisite et distance : industrialiser sans déshumaniser",
      description:
        "Tenir un flux, plusieurs sites ou un recrutement à distance, avec les mêmes obligations de droit et de clôture.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez organiser un recrutement volume (étapes, modèles, tris) sans ghosting de masse.\n\nVous savez coordonner un besoin multisite (qui décide, quel lieu, quelle mobilité).\n\nVous savez conduire un process à distance sans perdre la pertinence des méthodes ni la sécurité des données."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le volume n'autorise pas le hors-droit. Spécificités : beaucoup de candidatures, besoin de standard (grille, créneaux, mails), tentation de l'automatisation. Risques : silence de masse, tri sur photo ou prénom, chatbot illicite, annonce trompeuse pour « faire rentrer du flux », tests non pertinents. Adaptations : critères essentiels dès l'annonce, tri à deux relectures sur un échantillon, e-mails de clôture, distinction de traitement entre non-reçus et personnes interviewées, IA seulement dans le cadre déjà vu (information, pertinence, relecture). Pas de « taux de sélection marché ».\n\nLe multisite : plusieurs lieux, parfois plusieurs managers, un même intitulé. Spécificités : mobilité, astreintes différentes, conventions ou usages de site, qui embauche. Risques : publier un lieu et en affecter un autre (L. 5331-3) ; faire juger un candidat par un site puis l'envoyer ailleurs sans son accord ; DPAE / contrat sur le mauvais établissement — RH. Adaptations : une réquisition par site ou un besoin clairement multi-lieux dit au candidat ; calendrier par décideur ; mobilité traitée comme critère de poste, pas comme origine ou lieu de résidence au sens d'un stéréotype (le lieu de résidence est un critère protégé : on évalue la capacité à travailler sur le site, pas « les gens de banlieue »).\n\nLa distance (visio, télétravail, équipes distribuées) : spécificités : entretiens visio, tests à distance, onboarding distant. Risques : inégalité d'équipement prise pour de l'incompétence ; enregistrement d'entretien non validé ; questions sur le domicile trop intrusives ; promesse de télétravail non contractuelle. Adaptations : mêmes grilles qu'en présentiel, test de visio en amont, pas d'obligation de caméra si la politique et le poste ne l'exigent pas de façon pertinente, matériel d'onboarding anticipé, contrat aligné sur le lieu de travail réel. L. 1221-8 si méthodes spécifiques (tests en ligne)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Volume : vague de tri, calibrage manager sur 8 CV, lots de refus. Multisite : matrice site × décideur × lieu publié. Distance : kit candidat (lien, durée, outils), backup téléphone, pas d'enregistrement sauvage."
        ),
        code(
          "VOLUME — STANDARD MINIMUM\n[ ] Critères essentiels dans l'annonce\n[ ] Grille de tri identique\n[ ] Créneaux d'entretien groupés\n[ ] Clôture des non-retenus (modèle A du module refus)\n[ ] Interviewés : message individuel\n\nMULTISITE — QUESTIONS AU MANAGER\nSite d'affectation réel ? Mobilité inter-sites ? Qui signe l'entretien final ?\nAstreintes / horaires du site ? Même rémunération ?\n\nDISTANCE — CHECK VISIO\nLien test, durée, interlocuteurs, méthode (L. 1221-8), pas d'enregistrement hors politique,\nconsigne : évaluer le poste, pas le décor du logement."
        ),
        h("Exemple professionnel"),
        t(
          "Centre de contacts, 3 villes. Le junior publie « Bordeaux » puis envoie les gens à Limoges. Désistements et accusation de publicité trompeuse. Correction : trois annonces ou une annonce multi-sites explicite, affectation dite en préqual."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Session visio de 12 candidats sans grille. Juger le Wi-Fi. Oublier le site dans la DPAE transmise à RH. Fermer une vague sans e-mail."
        ),
        h("Situations particulières"),
        t(
          "Hybride : dire le nombre de jours sur site s'il est déjà une règle, sans inventer une obligation légale universelle de mention. International distant : voir leçon suivante, alerte RH. Volume + handicap : l'industrialisation ne doit pas éliminer les demandes d'aménagement d'entretien."
        ),
        h("Mise en pratique"),
        t(
          "80 candidatures, 2 sites, entretiens visio. Proposez le planning d'une semaine (tri, calibrage, clôture, visio) et 3 mentions à faire figurer dans l'annonce."
        ),
        h("Correction détaillée"),
        t(
          "J1-2 tri + calibrage 8 CV. J3 lots de refus. J4-5 visio selon site. Annonce : lieux, contrat, visio comme modalité d'entretien si c'est le cas. Pourquoi : le volume se tient par le calendrier et l'honnêteté du lieu, pas par le silence."
        ),
      ],
    }),

    lesson({
      title: "International et mobilité interne : deux expertises, une limite junior",
      description:
        "Alerter sur un titre de séjour / visa, ne pas improviser le droit des étrangers, et traiter un interne comme un candidat protégé par le même droit.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez que le droit des étrangers et des titres autorisant le travail n'est pas un domaine d'improvisation du recruteur junior : vous collectez selon la liste RH, vous alertez, vous n'inventez pas une procédure de visa.\n\nVous savez conduire une mobilité interne : confidentialité vis-à-vis du manager actuel, équité vis-à-vis des externes, refus soigné.\n\nVous savez ce que vous dites, et ne dites pas, à un candidat actuellement à l'étranger."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un recrutement « international » recouvre des faits très différents : candidat à l'étranger qui travaillerait en France ; salarié déjà en France avec un titre ; poste basé hors de France ; équipe distante multi-pays. Ces cas n'ont pas les mêmes règles. Le junior n'est pas conseiller en droit des étrangers. Il ne promet pas « on s'occupe du visa », il ne refuse pas « parce que le nom sonne étranger », il ne demande pas trop tôt des pièces disproportionnées à tous « au cas où ». L'interdiction de discriminer (origine, appartenance vraie ou supposée à une nation, etc., L. 1132-1) s'applique. La capacité à occuper l'emploi peut inclure, lorsque c'est le cas, le droit de travailler en France : c'est alors un sujet de titre, traité par le circuit RH, pas un jugement d'origine.\n\nSpécificités : délais administratifs souvent hors main du junior, documents sensibles, coordination RH / parfois expert. Risques : discrimination à l'entrée ; conseil juridique erroné ; faire commencer avant d'avoir le cadre ; stocker un titre dans un chat. Adaptations : dès que le besoin implique un travail en France, RH indique à quel moment du process la vérification du titre se fait, de façon identique pour les personnes concernées par cette vérification, sans harcèlement des autres. Le junior alerte : « candidat actuellement hors de France / titre à vérifier — RH ». Il n'interprète pas un récépissé. Il n'antidate pas une DPAE. Il n'invente pas un taux ou un délai d'administration.\n\nLa mobilité interne : spécificités = connaissance du contexte, enjeux politiques, peur du manager actuel, parfois priorité interne de politique d'entreprise (politique interne, pas une « loi du junior »). Risques : prévenir le manager actuel contre la volonté du salarié et hors règle RH ; faire passer l'interne « pour la forme » alors que l'externe est déjà choisi (déloyauté, méthodes peu pertinentes) ; refuser un interne par mail standard externe ; utiliser la mobilité pour écarter un externe sur un critère protégé. Adaptations : process publié en interne, confidentialité selon politique, même grille professionnelle, traitement de refus interne coordonné RH / manager actuel, information des externes si pourvoi interne (module refus). L. 1132-1 s'applique aussi aux internes.\n\nOffre et promesse : un écrit d'embauche transfrontalier se fait relire. F39588 : le junior ne qualifie pas seul offre vs promesse."
        ),
        note(
          "Droit des étrangers : alerter RH, ne pas improviser. Non-discrimination : l'origine n'est pas un critère de tri. Mobilité interne : politique d'entreprise + même droit du recrutement. Pas de délai de visa inventé dans ce cours."
        ),
        h("Méthode opérationnelle"),
        t(
          "International : flag ATS « alerte RH titre / lieu de travail », pas de conseil, pas de promesse, pièces via coffre RH. Interne : accusé confidentiel, calendrier, qui est informé à quelle étape, grille identique, feedback interne plus soigné."
        ),
        code(
          "SCRIPT — CANDIDAT À L'ÉTRANGER QUI DEMANDE « VOUS FAITES LE VISA ? »\n\n« Je ne suis pas en mesure de vous conseiller sur un titre ou un visa. Notre service RH traite les conditions d'emploi en France lorsque le poste est basé en France.\nJe transmets votre situation (lieu actuel, date de disponibilité) à RH, qui vous indiquera les pièces éventuelles au bon moment.\nJe ne peux ni garantir une obtention, ni écarter un profil sur l'origine. Le poste exige de travailler à [lieu]. »\n\nSCRIPT — CANDIDAT INTERNE, CONFIDENTIALITÉ\n\n« Votre candidature interne est enregistrée. Selon notre règle, votre manager actuel [est / n'est pas] informé à ce stade.\nLe process suit la même grille que pour ce poste. Je vous donne une date de prochaine étape. »"
        ),
        h("Exemple professionnel"),
        t(
          "Startup. Un founder dit au junior : « Prends-le, on lui fera un titre, j'ai un ami à la préfecture. » Le junior n'embauche pas sur cette base. Il saisit RH, ne promet rien au candidat, ne publie pas de date de J1 fantaisiste. Si RH dit que le cadre n'est pas tenable, on ne fait pas commencer."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Demander la nationalité en première ligne du formulaire « pour info ». Prévenir le N+1 d'un interne par convivialité. Dire aux externes que l'interne est « prioritaire » si ce n'est pas la règle, ou l'inverse. Googler une procédure de visa et la coller dans un mail."
        ),
        h("Situations particulières"),
        t(
          "Détachement / expatriation : expert RH, pas un mail junior. Interne en conflit avec son manager : RH. Poste en France, entretien depuis l'étranger : possible, le lieu de travail reste le sujet RH. UE / hors UE : vous ne résumez pas le droit ; vous orientez."
        ),
        h("Mise en pratique"),
        t(
          "Deux cas : 1) CV d'un profil compétent, adresse à l'étranger, poste en France. 2) Salarié interne qui demande que son manager n'en sache rien. Vos 5 premières actions pour chacun."
        ),
        h("Correction détaillée"),
        t(
          "1) Évaluer le poste, flag RH titre/lieu, pas de promesse de visa, pas d'écartement pour origine, pas de J1 inventé. 2) Lire la politique confidentialité interne, enregistrer, ne pas appeler le manager « pour avis informel », suivre la règle, alerter RH si conflit. Pourquoi : deux expertises (étrangers, relations sociales internes) hors improvisation."
        ),
      ],
    }),

    lesson({
      title: "Inclusion et handicap : appliquer la politique, respecter le droit",
      description:
        "Recruter sans discriminer, aménager un process, et parler de l'obligation d'emploi sans inventer un taux.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez que le handicap est un critère protégé et que des aménagements d'entretien / de poste relèvent d'un circuit RH, pas d'un bricolage compassionnel.\n\nVous savez qu'une obligation d'emploi des travailleurs handicapés existe pour certains employeurs : vous appliquez la politique interne et, si un taux est cité, vous le rattachez à la vérification du seuil légal en vigueur, vous ne l'inventez pas.\n\nVous savez sourcer et évaluer sans transformer le handicap en unique identité du candidat."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'inclusion dans le recrutement, au quotidien du junior, c'est d'abord appliquer le droit commun : ne pas écarter une personne en raison d'un critère protégé (L. 1132-1, qui cite notamment le handicap, l'état de santé, la perte d'autonomie), ne demander que des informations en lien direct et nécessaire avec l'emploi (L. 1221-6), utiliser des méthodes pertinentes (L. 1221-9), informer des méthodes (L. 1221-8). Un « fit culturel » qui signifie « on ne veut pas de différence visible » n'est pas un critère professionnel.\n\nLe handicap peut être mentionné par le candidat, ou faire l'objet d'une demande d'aménagement du process (temps, visio, accessibilité des locaux, support). Cette mention n'autorise pas une enquête médicale par le recruteur. L'aptitude relève, le moment venu, de la santé au travail, pas d'un e-mail « racontez votre handicap ». Le junior : écoute la demande d'aménagement, transmet à RH, adapte l'entretien dans des limites raisonnables déjà validées, évalue le poste. Il ne « diagnostique » pas, il ne promet pas un aménagement de poste qu'il n'a pas le pouvoir d'accorder, il n'écarte pas « au cas où ce serait lourd pour l'équipe ».\n\nCertains employeurs sont soumis à une obligation d'emploi des travailleurs handicapés. C'est un cadre légal qui existe ; son seuil, son assiette, ses modalités évoluent et se vérifient dans les textes en vigueur et auprès de RH. Le junior n'invente pas un pourcentage (notamment, il n'affirme pas un taux comme s'il l'avait lu ici). Il applique la politique de l'entreprise (partenariats Cap emploi / autres, recrutement, recours à des prestataires — autant de sujets RH). S'il doit citer un taux dans un support interne, il écrit : « vérifier le seuil légal en vigueur et l'assujettissement de l'employeur ». Il ne transforme pas l'obligation en triage public des CV (« on prend celui-ci pour le taux » au mépris des compétences), ni en question illicite posée à tous.\n\nSourcing : réseaux spécialisés, jobboards, partenaires, accessibilité de l'annonce (clarté, canal). Évaluation : mêmes exigences de poste, mises en situation aménageables. Refus : motif professionnel interne, pas le handicap. Données : minimisation, pas de dossier médical dans l'ATS."
        ),
        note(
          "Obligation : non-discrimination (L. 1132-1, handicap notamment). Obligation d'emploi : existe pour certains employeurs — vérifier seuil et assujettissement en vigueur, ne pas inventer un taux. Politique interne : partenaires, aménagements, qui décide. Bonne pratique : aménagement de process sur demande, évaluation du poste."
        ),
        h("Méthode opérationnelle"),
        t(
          "Annonce accessible, mention d'un contact pour aménagement d'entretien si politique ok. Grille identique. Circuit RH dès qu'un aménagement de poste est en jeu. Pas de question santé. REX : a-t-on écarté pour un critère protégé ?"
        ),
        code(
          "SCRIPT — DEMANDE D'AMÉNAGEMENT D'ENTRETIEN\n\n« Merci de m'avoir indiqué ce dont vous avez besoin pour passer l'entretien dans de bonnes conditions.\nJe transmets à [RH] ce qui concerne l'organisation (accès, temps, visio, support).\nL'évaluation portera sur les critères du poste de [intitulé].\nJe vous confirme les modalités au plus tard le [date]. »\n\nÀ NE PAS DIRE\n« Vous serez un bon dossier pour notre obligation d'emploi. »\n« C'est quoi exactement votre maladie ? »\n« On verra avec l'équipe si ça les dérange. »"
        ),
        h("Exemple professionnel"),
        t(
          "PME. Un manager refuse un candidat « on n'est pas équipés, et puis on n'est pas assez gros pour l'obligation ». Le junior : 1) l'assujettissement se vérifie, on n'invente pas un seuil ; 2) même hors obligation, L. 1132-1 s'applique ; 3) l'aménagement se discute avec RH sur des faits de poste, pas un refus de principe. Le process reprend sur les compétences."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Citer « 6 % » comme un chiffre du cours. Noter « RQTH » en commentaire visible de tout manager curieux. Poser la question du handicap à tous « pour le reporting ». Baisser les exigences du poste sans le dire (ni au candidat ni au manager), puis rompre l'essai."
        ),
        h("Situations particulières"),
        t(
          "Handicap invisible, non mentionné : on n'enquête pas. Volume : le standard n'élimine pas une demande d'aménagement. Cadre / pénurique : l'inclusion n'est pas réservée aux postes « faciles ». International : pas de confusion entre titre de séjour et handicap."
        ),
        h("Mise en pratique"),
        t(
          "Un candidat écrit : « Je suis RQTH, j'aurai besoin d'un logiciel de lecture et de 15 minutes de plus sur la mise en situation. » Rédigez : mail au candidat, mail à RH, ce que vous dites au manager."
        ),
        h("Correction détaillée"),
        t(
          "Candidat : accusé, circuit aménagement process, date de confirmation, évaluation sur le poste. RH : demande concrète, pas de dossier médical. Manager : modalités d'entretien, pas le détail de santé, rappel d'évaluer les critères du poste. Pourquoi : aménager le process n'est pas « recruter pour un taux »."
        ),
      ],
    }),

    lesson({
      title: "Urgent, confidentiel, petit budget, manager exigeant",
      description:
        "Tenir le cadre lorsque la pression opérationnelle pousse à sauter des étapes ou à promettre l'impossible.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez prioriser un besoin urgent sans DPAE oubliée, sans offre trompeuse, sans discrimination « pour aller vite ».\n\nVous savez mener un recrutement confidentiel (canaux, intitulés, qui sait).\n\nVous savez recadrer un petit budget et un manager exigeant par des faits de process, avec escalade si le cadre légal est en jeu."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L'urgence est un délai métier court. Spécificités : pression, tentation de réduire les vérifications, d'élargir l'annonce, de faire commencer avant les formalités. Risques : DPAE oubliée (obligation employeur, avant prise de poste / essai, au plus tôt 8 jours avant — F23107), contrat bâclé, discrimination « le premier disponible », allégations trompeuses pour attirer. Adaptations : process compact mais complet (critères, un entretien structuré, vérifications utiles), plan B parallèle, dates réelles, pas de travail avant cadre d'embauche. L'urgence n'est pas une norme de TTF magique : c'est un arbitrage interne.\n\nLe confidentiel : remplacement d'un salarié qui n'est pas informé, poste stratégique, marché sensible. Spécificités : pas d'annonce publique ou annonce floutée, NDA parfois, vivier discret, peu d'interlocuteurs. Risques : fuite, rendez-vous sur site trop visibles, LinkedIn du junior qui « chasse le directeur financier », mensonge d'intitulé (L. 5331-3 si offre publique trompeuse). Adaptations : canal fermé, intitulé honnête vis-à-vis du candidat sous accord de confidentialité, calendrier hors site si besoin, ATS à droits restreints. Le junior ne poste pas le besoin sur son profil.\n\nLe petit budget : fourchette basse, pas d'agence, peu de jobboards. Spécificités : besoin de canaux low cost (cooptation, interne, sourcing direct). Risques : mensonge sur le salaire, « CDI » pour compenser, charge de travail non dite. Adaptations : revoir le besoin (junior formable vs expert), dire la fourchette en entretien dès qu'elle est connue (bonne pratique ; indiquer le salaire dans l'annonce n'est pas présenté ici comme obligation française déjà consolidée — directive UE 2023/970 en transposition), assumer des refus d'offre. Pas de chiffre « salaire médian marché » inventé.\n\nLe manager exigeant : beaucoup d'entretiens, critères mouvants, indisponibilité, commentaires limites. Spécificités : le junior sert le besoin, pas l'ego. Risques : exécuter un critère protégé ; laisser le process durer ; promettre au candidat un oui que le manager n'a pas donné. Adaptations : cadrage écrit, grille, créneaux bloqués, reformulation des critères illicites, escalade au responsable recrutement si le manager insiste sur un critère L. 1132-1. La courtoisie n'est pas la soumission au hors-droit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Urgent : double pipeline (n°1 + réserve), checklist DPAE/contrat dès le oui. Confidentiel : liste blanche des informés, canaux, consigne LinkedIn. Petit budget : fiche revuée, canaux, discours vrai. Manager exigeant : e-mail de cadrage, 48 h pour valider, sinon escalade."
        ),
        code(
          "MAIL DE CADRAGE — MANAGER SOUS PRESSION\n\nObjet : Recadrage du besoin [poste] — validation demandée pour [date]\nBonjour [Prénom],\nPour tenir [date métier], j'ai besoin de votre validation écrite sur :\n1) critères essentiels (liste) — hors tout critère illicite\n2) fourchette et contrat honnêtes vis-à-vis de l'annonce\n3) deux créneaux d'entretien cette semaine\n4) décideur unique du dernier tour\nSans cela, je ne peux ni publier ni promettre un délai.\nSi un critère porte sur [âge / origine / santé / …], je ne pourrai pas l'appliquer ; j'en référerai à [responsable].\nMerci."
        ),
        h("Exemple professionnel"),
        t(
          "TPE. Le dirigeant : « Recrute ce week-end, on verra les papiers, je veux quelqu'un du quartier, discret, pas cher. » Le junior : pas de DPAE sautée, pas de critère de résidence comme stéréotype (lieu de résidence protégé ; on parle du lieu de travail et des horaires), pas d'annonce menteuse, confidentialité = canaux, pas un CV collé au café du commerce."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier l'offre confidentielle sur trois jobboards « un peu ». Promettre une prime non budgétée. Faire six entretiens en 10 jours puis disparaître. Accepter un critère d'âge « juste cette fois »."
        ),
        h("Situations particulières"),
        t(
          "Urgent + international : encore plus d'alerte RH, pas moins. Confidentiel + interne : risque de rumeur, RH. Petit budget + pénurique : revoir le poste, éventuellement geler, pas mentir. Manager exigeant + handicap : aménagement ≠ « lenteur »."
        ),
        h("Mise en pratique"),
        t(
          "Classez ces consignes en « j'exécute / je recadre / j'escalade » : 1) entretien unique cette semaine ; 2) pas d'annonce, approche directe ; 3) « pas de femme, l'équipe n'est pas prête » ; 4) commencer lundi sans DPAE ; 5) fourchette à dire dès la préqual."
        ),
        h("Correction détaillée"),
        t(
          "1) J'exécute si la grille existe. 2) J'exécute si confidentiel cadré. 3) J'escalade (sexe, L. 1132-1). 4) Je recadre + RH (DPAE avant prise de poste). 5) J'exécute (bonne pratique de clarté). Pourquoi : la pression n'efface que ce que l'on consent à effacer ; le droit, non."
        ),
      ],
    }),

    quizLesson({
      title: "Quiz — Recrutements spécifiques",
      description: "Dix questions : contrats, publics, international, handicap, pression opérationnelle.",
      passing_score: 70,
      minutes: 12,
      questions: [
        q({
          question: "Publier un CDI alors que le besoin validé est un CDD de 4 mois, c'est surtout :",
          options: [
            "A. Un risque d'allégation trompeuse sur la nature de l'emploi (L. 5331-3), pas une technique de volume acceptable.",
            "B. Une obligation si l'on veut des candidatures.",
            "C. Sans importance, le contrat se voit à J1.",
            "D. Une recommandation CNIL de 2 ans.",
          ],
          correct: 0,
          explanation:
            "L. 5331-3 vise notamment la nature de l'emploi. Attendre J1 pour dire le CDD n'est pas une information loyale. Sans lien avec les durées CNIL.",
        }),
        q({
          question: "Le motif d'un CDD est :",
          options: [
            "A. Qualifié par RH / l'employeur ; le junior ne le choisit pas « parce que ça passe ».",
            "B. Libre, le junior coche « accroissement » par défaut.",
            "C. Inutile dès lors que le candidat est d'accord.",
            "D. Remplacé par la DPAE.",
          ],
          correct: 0,
          explanation:
            "Le motif est un acte juridique. L'accord du candidat ne le crée pas. La DPAE ne replace pas le contrat ni son motif.",
        }),
        q({
          question: "Pour un stage, le recruteur junior doit surtout :",
          options: [
            "A. S'assurer d'un tuteur, d'une convention (circuit RH / école) et d'un discours honnête, sans promesse d'embauche automatique.",
            "B. Publier « CDI junior » pour attirer, puis faire signer une convention.",
            "C. Faire passer cinq entretiens identiques à un cadre dirigeant.",
            "D. Demander l'état de santé « pour l'assiduité ».",
          ],
          correct: 0,
          explanation:
            "Le stage est un accueil pédagogique cadré. Un intitulé trompeur, un process disproportionné ou une question santé sortent du cadre.",
        }),
        q({
          question: "Écarter un profil expérimenté « trop vieux, pas malléable », c'est :",
          options: [
            "A. Un risque de discrimination (âge, L. 1132-1) ; on évalue l'adéquation au poste, pas l'âge.",
            "B. Un critère de pénurie reconnu.",
            "C. Autorisé en CDI, interdit en intérim.",
            "D. Un indicateur de quality of hire.",
          ],
          correct: 0,
          explanation:
            "L'âge est protégé, quel que soit le contrat. La pénurie ne lève pas L. 1132-1. Ce n'est pas un KPI qualité.",
        }),
        q({
          question: "Candidat compétent actuellement à l'étranger, poste en France. Conduite junior ?",
          options: [
            "A. Évaluer le poste, alerter RH sur le titre / le lieu, ne pas improviser le droit des étrangers ni promettre un visa.",
            "B. Expliquer la procédure préfectorale trouvée en ligne et garantir un J1.",
            "C. Écarter immédiatement en raison de l'origine.",
            "D. Faire commencer en visio sans en parler à RH.",
          ],
          correct: 0,
          explanation:
            "Limite du mandat : alerte RH, pas de conseil visa, pas de discrimination, pas de prise de poste hors cadre.",
        }),
        q({
          question: "Concernant l'obligation d'emploi des travailleurs handicapés, quelle phrase est conforme à ce cours ?",
          options: [
            "A. Elle existe pour certains employeurs ; le junior applique la politique interne et, s'il cite un taux, le rattache à la vérification du seuil légal en vigueur, sans l'inventer.",
            "B. Elle impose à tout junior de demander le handicap à tous les candidats.",
            "C. Le taux est de 6 %, chiffre unique à mémoriser, valable pour toutes les entreprises.",
            "D. Elle autorise à écarter un candidat non handicapé, même plus compétent.",
          ],
          correct: 0,
          explanation:
            "Pas de taux inventé dans le cours. Pas de question santé de masse. L'évaluation reste celle du poste ; L. 1132-1 s'applique.",
        }),
        q({
          question: "Une mobilité interne se traite :",
          options: [
            "A. Avec la confidentialité prévue par la politique, une grille professionnelle, un refus coordonné RH, sans prévenir le manager actuel « par amitié » hors règle.",
            "B. En prévenant toujours le N+1 dès la candidature, par loyauté.",
            "C. En recevant l'interne pour la forme si l'externe est déjà choisi.",
            "D. Hors L. 1132-1, car c'est « de la famille ».",
          ],
          correct: 0,
          explanation:
            "Politique de confidentialité, équité de grille, droit commun de la non-discrimination. Le faire-valoir et la confidence hors règle sont des erreurs.",
        }),
        q({
          question: "Recrutement volume : quelle pratique reste due ?",
          options: [
            "A. Une clôture des non-retenus, une grille de tri, pas de tri sur un critère protégé, méthodes pertinentes si tests.",
            "B. Le silence de masse, car il n'y a jamais obligation de répondre.",
            "C. Un chatbot qui pose des questions sur les enfants, pour gagner du temps.",
            "D. Une annonce CDI pour un besoin de 3 semaines.",
          ],
          correct: 0,
          explanation:
            "Le volume n'efface ni L. 1132-1, ni L. 1221-6, ni L. 5331-3, ni la bonne pratique de clôture. L'absence d'obligation générale de motiver n'équivaut pas à une stratégie de silence après un process réel.",
        }),
        q({
          question: "Un manager exige « pas de femme, l'équipe n'est pas prête » et un J1 lundi sans DPAE. Que faites-vous ?",
          options: [
            "A. Escalade sur le critère de sexe (L. 1132-1) et recadrage calendrier : DPAE avant prise de poste / essai, par la personne habilitée.",
            "B. Vous exécutez, l'urgence justifie tout.",
            "C. Vous exécutez le critère de sexe mais pas la DPAE.",
            "D. Vous exécutez la DPAE vous-même avec des identifiants trouvés dans un tiroir, et vous écartez les femmes.",
          ],
          correct: 0,
          explanation:
            "Deux limites : discrimination et obligation employeur de DPAE. L'urgence n'en lève aucune. Le junior n'est pas déclarant par défaut.",
        }),
        q({
          question: "Petit budget + profil pénurique : première adaptation recommandée ?",
          options: [
            "A. Revoir le besoin (formable vs expert) et dire vrai sur le contrat et la fourchette, plutôt que mentir sur un CDI ou un salaire.",
            "B. Publier un salaire inventé « marché + 20 % ».",
            "C. Exiger six entretiens pour compenser le salaire.",
            "D. Écarter les reconversions pour « sécuriser ».",
          ],
          correct: 0,
          explanation:
            "Le levier honnête est le besoin et la vérité de l'offre (L. 5331-3). Pas de benchmark inventé, pas de process punitif, pas de stéréotype sur la reconversion.",
        }),
      ],
    }),
  ],
};
