import { pack, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 3,
  title: "Maîtriser le cadre légal du recrutement",
  description:
    "Distinguer obligation, recommandation, politique interne et bonne pratique. Appliquer non-discrimination, questions pertinentes, RGPD, règles d'annonces, offre vs promesse, DPAE.",
  lessons: [
    pack({
      title: "Lire une règle : quatre niveaux, un réflexe",
      description: "Ne plus confondre la loi, une fiche CNIL, un process interne et un usage de métier.",
      minutes: 16,
      objectifs:
        "À la fin de cette leçon, vous classez n'importe quelle consigne en quatre niveaux : obligation légale, recommandation d'une autorité, politique interne, bonne pratique professionnelle. Vous savez ce qu'un junior peut appliquer seul et ce qu'il doit faire valider.",
      theorie:
        "Le recrutement français n'est pas un recueil de recettes. Une phrase entendue en open space (« on garde les CV 10 ans », « on ne prend pas les femmes en âge d'avoir des enfants », « le salaire dans l'annonce est obligatoire ») peut être fausse, datée, ou vraie seulement dans un cas.\n\nObligation légale : un texte (loi, règlement, Code du travail, RGPD) impose ou interdit. Exemple : interdiction d'écarter un candidat pour un critère de L. 1132-1. Vous n'y dérogez pas, même si un manager insiste.\n\nRecommandation d'autorité : CNIL, Défenseur des droits, Service-Public. Utile, souvent suivie par les juges et les contrôles, mais ce n'est pas toujours une durée ou un modèle unique « dans la loi ». Exemple : 2 ans de vivier (recommandation CNIL), distincte des 5 ans d'archivage probatoire liés à L. 1134-5.\n\nPolitique interne : charte, ATS obligatoire, qui signe les offres, délai de réponse. Elle s'applique chez cet employeur si elle reste légale.\n\nBonne pratique : répondre à tous les candidats, grille d'entretien, double regard. Personne ne vous condamnera pour l'absence d'une grille ; le métier, oui, si vous recrutez au feeling.\n\nSources utilisées dans ce module, vérifiées le 13/10/2026 : Code du travail numérique (L. 1132-1, L. 1221-6, L. 1221-8, L. 5331-3, L. 5331-4), Service-Public Entreprendre F39133 (02/10/2025), F39588 (12/03/2026), F23107, CNIL Guide recrutement et référentiel durées RH (publié 02/04/2026, MAJ 20/05/2026), Urssaf DPAE. Relisez le texte en vigueur le jour J : un article peut évoluer.",
      methode:
        "Devant une demande : 1) Quel texte ? 2) Obligation ou reco ? 3) Qui décide ici (RH, DPO, juridique) ? 4) Que documenter ? Si vous hésitez sur un critère d'âge, de santé, de photo, d'IA : vous ne publiez pas, vous escaladez. Un junior n'est pas un avocat ; il est un filtre de premier niveau.",
      noteText:
        "Ne jamais inventer un délai légal « parce que tout le monde le dit ». Si la source n'est pas dans legal-sources.json ou sur Légifrance / Service-Public / CNIL, dites « à vérifier ».",
      exemple:
        "PME 40 personnes. Le gérant : « Mets 25-35 ans, c'est un job dynamique. » Niveau : obligation (interdiction d'âge dans l'offre et à l'embauche, sauf exceptions étroites). Action : refuser le critère, proposer des exigences de poste (déplacements, horaires, permis si nécessaire).",
      extra: [
        code(`RÉFLEXE JUNIOR
1. Citer le besoin métier, pas la personne.
2. Si un critère touche origine, sexe, âge, santé, religion, famille, apparence, résidence, etc. → STOP.
3. Écrire les critères en compétences / contraintes du poste.
4. Alerter le responsable recrutement / RH.
5. Ne pas « traduire » la demande illicite en filtre ATS caché.`),
      ],
      erreurs:
        "Appliquer une « habitude du précédent recruteur » comme si c'était la loi. Dire « c'est obligatoire » pour une charte interne. Minimiser : « c'était une blague ».",
      particuliers:
        "En cabinet, le client n'est pas au-dessus de la loi française si le poste est en France. En intérim, s'ajoutent les règles du travail temporaire : vous vous appuyez sur l'agence, vous n'inventez pas le motif de recours.",
      exercice:
        "Classez : (a) « Informer le candidat d'un test avant de le faire passer » ; (b) « Répondre sous 7 jours » ; (c) « Indiquer le salaire dans l'annonce » ; (d) « Ne pas demander le nombre d'enfants ».",
      correction:
        "(a) Obligation (L. 1221-8, information préalable). (b) Politique interne ou bonne pratique, pas un délai légal unique de réponse aux CV. (c) Pas une obligation française consolidée au 13/10/2026 : directive UE 2023/970 en transposition ; Service-Public F39133 (02/10/2025) le dit clairement. Bonne pratique possible, future obligation à revérifier. (d) Obligation de ne pas demander d'information sans lien direct et nécessaire (L. 1221-6) et risque L. 1132-1 (situation de famille / grossesse).",
    }),
    pack({
      title: "Non-discrimination à l'embauche (L. 1132-1)",
      description: "Connaître les critères protégés et les formes directe / indirecte.",
      minutes: 20,
      objectifs:
        "Vous citez le principe : personne ne peut être écartée d'un recrutement pour un critère protégé. Vous distinguez discrimination directe et indirecte. Vous savez recadrer un manager.",
      theorie:
        "L'article L. 1132-1 du Code du travail (Code du travail numérique, consultation 13/10/2026) interdit d'écarter une personne d'une procédure de recrutement, notamment en raison de : origine ; sexe ; mœurs ; orientation sexuelle ; identité de genre ; âge ; situation de famille ou grossesse ; caractéristiques génétiques ; particulière vulnérabilité résultant de la situation économique ; appartenance ou non-appartenance, vraie ou supposée, à une ethnie, une nation ou une prétendue race ; opinions politiques ; activités syndicales ou mutualistes ; exercice d'un mandat électif ; convictions religieuses ; apparence physique ; nom de famille ; lieu de résidence ou domiciliation bancaire ; état de santé, perte d'autonomie ou handicap ; capacité à s'exprimer dans une langue autre que le français ; qualité de lanceur d'alerte, facilitateur ou personne en lien avec un lanceur d'alerte.\n\nDiscrimination directe : on écarte ouvertement (« pas de femme », « pas de prénom maghrébin »). Indirecte : une règle en apparence neutre désavantage un groupe sans justification professionnelle réelle (exigence de « français langue maternelle » pour un poste sans enjeu linguistique réel).\n\nUne exigence peut être légitime si elle a un lien réel avec le poste (habilitation, langue de travail, permis si déplacements). Ce n'est pas une porte dérobée pour réintroduire l'âge ou le sexe.",
      methode:
        "Grille de critères avant sourcing. Chaque critère : lien avec les missions ? Mesurable ? Interdit ? Si un manager formule un stéréotype, vous reformulez en compétence. Vous tracez. Vous n'enregistrez pas « trop vieux » dans l'ATS.",
      noteText:
        "Obligation légale. Sanctions pénales possibles en cas de discrimination (Code pénal, articles 225-1 et suivants — à relire en cas de dossier contentieux, avec RH/juridique). Le junior alerte, il ne « gère pas le pénal » seul.",
      exemple:
        "Startup. « On veut quelqu'un qui match la culture, des gens comme nous, 28 ans, cool. » Vous sortez l'âge. Vous définissez la « culture » en comportements au travail (feedback, travail hybride, astreintes produit), pas en style vestimentaire ou en origine.",
      erreurs:
        "Croire que « ce n'est écrit nulle part dans l'annonce » protège un tri oral. Utiliser la photo du CV comme critère. Googler la vie militante pour écarter.",
      particuliers:
        "Emplois d'artiste / mannequin : exceptions étroites pour le sexe dans l'offre (voir F39133). Condition d'âge imposée par la loi : rare, à faire confirmer par RH. Travailleurs handicapés : l'obligation d'emploi concerne certains employeurs ; le junior applique la politique et n'improvise pas un taux.",
      exercice:
        "Le manager refuse un candidat « parce qu'il habite trop loin, ça ne le fera pas ». Que vérifiez-vous avant d'exécuter ce refus ?",
      correction:
        "Le lieu de résidence est un critère protégé (L. 1132-1). Un refus « il habite à X » est risqué. En revanche, une exigence de présence sur site, d'astreinte, de temps de trajet maximal lié à l'organisation du travail peut être professionnelle si elle est réelle, dite, et appliquée à tous. Vous faites formuler la contrainte de poste (présence 5 j/5 à 6 h), pas le code postal. Si le manager vise un quartier ou une origine : STOP, alerte RH.",
    }),
    pack({
      title: "Questions autorisées et interdites (L. 1221-6)",
      description: "Lien direct et nécessaire avec l'emploi : le test de chaque question.",
      minutes: 18,
      objectifs:
        "Vous appliquez L. 1221-6 : informations uniquement pour apprécier la capacité à occuper l'emploi ou les aptitudes, avec un lien direct et nécessaire. Le candidat répond de bonne foi aux questions licites.",
      theorie:
        "Article L. 1221-6 (Code du travail numérique, article daté 01/05/2008, toujours en vigueur à la consultation du 13/10/2026) : les informations demandées, sous quelque forme que ce soit (entretien, formulaire, test, message), ne peuvent avoir d'autre finalité que d'apprécier la capacité à occuper l'emploi ou les aptitudes professionnelles. Lien direct et nécessaire.\n\nService-Public (F1684, F39155) illustre : pas de questions sur l'état de santé, la situation familiale, l'adhésion syndicale, la vie sexuelle, le logement, les loisirs, lorsqu'elles n'ont pas ce lien. Un permis peut être demandé si le poste l'exige.\n\nUne question peut être maladroite sans être illicite ; une question « pour briser la glace » sur les enfants reste dangereuse. En cas de doute, ne pas poser.",
      methode:
        "Avant l'entretien, relisez le guide : chaque question se rattache à un critère de la grille. Interdit de rattraper « en off ». Si le candidat révèle une information personnelle, vous ne la notez pas et vous ne la transmettez pas au manager comme motif.",
      noteText:
        "Obligation légale (L. 1221-6). Ce n'est pas une « reco RH ». Le formulaire ATS est une « forme » au sens de l'article : les champs « date de naissance », « photo obligatoire », « situation familiale » sont à questionner avec les RH / DPO.",
      exemple:
        "Préqual téléphonique, préparateur de commandes, 5 h – 13 h, port de charges, chariot élévateur. Licite : disponibilité sur ces horaires, habilitation chariot, capacité à tenir le rythme (mise en situation, pas diagnostic médical). Illicite : « Vous êtes enceinte ? », « Vous avez un dos fragile ? », « Votre mari peut vous déposer ? »",
      extra: [
        code(`LICITE SI LE POSTE L'EXIGE          ILLICITE
Permis B, déplacements clients        Âge, date de naissance « pour le feeling »
Anglais professionnel, niveau attendu « Français langue maternelle »
Habilitation, diplôme réglementé      Religion, pratiques alimentaires
Disponibilité horaires / astreintes   Projet d'enfants, mariage
Préavis, date de disponibilité        Adresse exacte pour « juger le quartier »
Prétentions dans la fourchette        Compte bancaire, saisie, logement`),
      ],
      erreurs:
        "Noter « elle a parlé de ses enfants » dans le CR comme un moins. Demander une photo « pour le badge » avant l'embauche. Copier un questionnaire américain non adapté.",
      particuliers:
        "Vérification d'un titre autorisant le travail : c'est une obligation d'employeur au moment de l'embauche, pas un critère de tri des CV sur la nationalité. Le junior alerte RH, il n'écrit pas « Français uniquement » dans l'annonce.",
      exercice:
        "Parmi ces questions, lesquelles sortez-vous du guide d'entretien d'un chargé de clientèle en boutique ? 1) Décrivez une situation de client difficile. 2) Comptez-vous avoir des enfants cette année ? 3) Êtes-vous disponible les samedis ? 4) De quelle origine êtes-vous, les clients sont variés.",
      correction:
        "On sort 2 et 4 (famille/grossesse, origine : L. 1132-1 et L. 1221-6). On garde 1 (compétence). On garde 3 si les samedis font partie du contrat, dite à tous, sans déduire la vie familiale.",
    }),
    pack({
      title: "Méthodes, tests, confidentialité (L. 1221-8 et L. 1221-9)",
      description: "Informer avant, rester pertinent, garder les résultats confidentiels.",
      minutes: 16,
      objectifs:
        "Vous savez qu'un test, une mise en situation, un outil d'aide au recrutement doit être annoncé au candidat avant d'être utilisé, pertinent par rapport au poste, et que les résultats sont confidentiels.",
      theorie:
        "L. 1221-8 : le candidat est expressément informé, préalablement à leur mise en œuvre, des méthodes et techniques d'aide au recrutement utilisées à son égard. Les résultats obtenus sont confidentiels. Les méthodes doivent être pertinentes au regard de la finalité poursuivie. L. 1221-9 complète le principe de pertinence pour l'évaluation.\n\nCela couvre tests de personnalité, mises en situation, épreuves techniques, outils algorithmiques s'ils aident au recrutement. « Expressément » : pas un lien caché dans CGU illisibles. « Préalablement » : avant le test, pas après le score.\n\nPertinence : un test de QI fantaisiste pour un poste d'opérateur, un graphologue, un thème astral : vous refusez. Une courte mise en situation de vente pour un vendeur : défendable si annoncée et identique pour tous.",
      methode:
        "Dans la convocation : « L'entretien de 45 min comporte 15 min de mise en situation X. » Stockage des scores : accès limité (recruteur, manager du poste, RH). Pas de classement mural. Pas de transfert à un autre client ou un autre manager « par curiosité ».",
      noteText: "Obligation légale. La pertinence n'autorise pas n'importe quel gadget RH à la mode.",
      exemple:
        "Cabinet. Un client veut un test de personnalité acheté en ligne, non expliqué, envoyé à 23 h. Vous : information claire, finalité, durée, ce qui sera transmis, droit de ne pas le faire et conséquence réelle. Si le test n'a aucun lien : vous le déconseillez par écrit au consultant senior / client.",
      erreurs:
        "Faire passer un test « pour voir ». Partager le PDF du test dans un WhatsApp d'équipe. Utiliser un score comme seul motif de refus sans grille métier.",
      particuliers:
        "IA de ranking de CV : c'est une méthode d'aide au recrutement. Information préalable, pertinence, vigilance biais, supervision humaine. Ne pas inventer le détail du règlement européen applicable le jour J : le vérifier avec DPO/juridique. L. 1221-8 s'applique déjà.",
      exercice:
        "Un manager veut filmer les entretiens « pour ceux qui n'ont pas pu venir ». Que posez-vous comme conditions ?",
      correction:
        "Information préalable, consentement éclairé, finalité, durée de conservation, accès, pas de diffusion. Si un candidat refuse, ce refus ne doit pas devenir un critère déguisé. En pratique, beaucoup d'entreprises interdisent l'enregistrement : politique interne. Escalade RH/DPO. Ne filmez pas « en douce ».",
    }),
    pack({
      title: "RGPD et durées de conservation des candidatures",
      description: "Base légale, information, droits, 2 ans vs 5 ans : ne pas les confondre.",
      minutes: 20,
      objectifs:
        "Vous savez qu'un CV est une donnée personnelle, que le candidat doit être informé, qu'il a des droits, et vous distinguez vivier (recommandation 2 ans) et archivage probatoire (5 ans, L. 1134-5).",
      theorie:
        "Toute opération sur des données de candidats (collecte, tri, ATS, relance, CVthèque) est un traitement au sens du RGPD. Finalité : recrutement. Minimisation : pas de données inutiles. Sécurité : accès limité.\n\nInformation : qui traite, pourquoi, durée, destinataires, droits. Souvent : mention dans l'annonce, page carrière, e-mail de réception.\n\nDroits : accès, rectification, opposition, effacement dans les limites légales. Un junior n'envoie pas le dossier brut : ticket RH/DPO.\n\nCNIL, référentiel durées RH publié le 02/04/2026, mis à jour le 20/05/2026, et Guide du recrutement (30/01/2023) :\n- Candidat retenu : conservation en base active le temps de la procédure jusqu'à la signature, puis réemploi pour la gestion du personnel.\n- Candidat non retenu : archivage intermédiaire 5 ans à compter de la date à laquelle le poste a été pourvu, à des fins de preuve d'actions en discrimination (L. 1134-5) — la CNIL rattache cela à une obligation.\n- Vivier / CVthèque : jusqu'à 2 ans à compter du dernier contact, pour les profils d'intérêt, sauf opposition — recommandation du guide, pas une durée unique « magique » du RGPD.\nBase active ≠ archive. L'archive n'est pas le vivier marketing.",
      methode:
        "Ne constituez un vivier que si le candidat est informé. N'ajoutez pas « pour d'autres postes » en silence. Purgez selon la politique. Mot de passe ATS, pas de CV sur Drive perso.",
      noteText:
        "2 ans vivier = recommandation CNIL. 5 ans archive = fondement L. 1134-5 selon le référentiel CNIL 2026. Ne dites pas « la loi impose de tout garder 2 ans en ligne sur l'ATS ».",
      exemple:
        "Le gérant d'une TPE a 400 CV dans sa boîte mail depuis 2018. Risque : conservation excessive, sécurité nulle, exercice des droits impossible. Plan : informer à l'avenir, extraire ce qui est encore utile avec information, archiver ou supprimer le reste avec RH/DPO. Le junior ne supprime pas tout seul un historique contentieux.",
      erreurs:
        "Promettre « on efface tout dès le refus » alors que l'archive probatoire peut être nécessaire. Garder les CV « au cas où » 10 ans en base active. Transférer un CV à un copain d'une autre entreprise.",
      particuliers:
        "Cabinet : le client et le cabinet sont souvent chacun responsables ou co-responsables selon le contrat. Le candidat doit savoir qui voit son dossier. Intérim : données de mission, habilitations : durées parfois spécifiques, s'appuyer sur l'agence.",
      exercice:
        "Un candidat non retenu demande : « Effacez tout maintenant. » Que faites-vous ?",
      correction:
        "Vous n'improvisez pas un oui ou un non juridique. Vous transmettez au circuit DPO/RH. L'opposition au vivier est en principe à honorer. L'archive probatoire limitée, à accès restreint, peut être conservée pour le délai de recours. Vous accusez réception, vous ne discutez pas le motif du refus sous couvert d'effacement.",
    }),
    pack({
      title: "Références, diplômes, réseaux sociaux",
      description: "Vérifier sans enquêter sur la vie privée.",
      minutes: 16,
      objectifs:
        "Vous savez quand et comment vérifier un diplôme ou une référence, et les limites d'une recherche sur internet.",
      theorie:
        "Vérifier un diplôme ou une référence vise les aptitudes professionnelles : possible si pertinent, proportionné, et cohérent avec L. 1221-6. Bonne pratique : prévenir le candidat, surtout avant d'appeler l'employeur actuel (risque de mettre la personne en danger professionnel).\n\nRéseaux sociaux : un profil professionnel peut confirmer un parcours. Fouiller photos de vacances, opinions, religion, vie familiale : vous collectez des données hors finalité, souvent liées à des critères protégés. La CNIL, dans son guide recrutement, encadre ces usages : pas de collecte excessive, information, pas de décision infondée.\n\nUn « trou » sur un CV se clarifie en entretien, pas par un dossier parallèle Google.",
      methode:
        "Références : accord du candidat, questions professionnelles (missions, résultats, conditions de collaboration), compte rendu factuel. Diplômes réglementés : copie ou vérification auprès de l'organisme si le métier l'exige (santé, électricité, etc.). Réseaux : uniquement pages professionnelles, pas de faux profil pour « infiltrer ».",
      noteText:
        "Pas de jurisprudence inventée ici. En cas de doute (enquête approfondie, casier, solvabilité) : RH/juridique. Certaines vérifications sont encadrées ou interdites selon le poste.",
      exemple:
        "ETI. Manager : « Googles-le, j'ai vu qu'il militait. » Vous refusez d'en faire un motif (opinions politiques, L. 1132-1). Vous ramenez à la grille.",
      erreurs:
        "Appeler l'employeur actuel dès le premier CV. Ajouter le candidat en ami pour voir ses stories. Noter « profil Instagram trop festif ».",
      particuliers:
        "Contrôle d'un titre de séjour : employeur, au moment de l'embauche, procédure dédiée. Pas un tri de CV sur le nom.",
      exercice:
        "Le candidat finaliste refuse que l'on contacte son employeur actuel. Que faites-vous ?",
      correction:
        "C'est fréquent et légitime (confidentialité de sa recherche). Vous proposez une référence plus ancienne, un ancien manager, ou vous reportez la prise de référence après l'offre sous conditions. Vous n'en faites pas un « il a quelque chose à cacher » automatique. Vous documentez l'accord et le refus.",
    }),
    pack({
      title: "Règles des offres d'emploi",
      description: "Français, date, vérité, pas de mentions discriminatoires. Salaire : pas encore obligatoire en FR au 13/10/2026.",
      minutes: 18,
      objectifs:
        "Vous rédigez une offre conforme : langue française, datée, non trompeuse, non discriminatoire. Vous savez que le salaire dans l'annonce n'est pas, à la date de vérification, une obligation interne française consolidée.",
      theorie:
        "Fiche Service-Public Entreprendre F39133, vérifiée le 02/10/2025.\n- Rédaction en français si le travail s'effectue en France (L. 5331-4). Terme étranger sans équivalent : description française suffisante.\n- Date de publication (L. 5332-1).\n- Pas d'allégations fausses ou trompeuses sur l'existence du poste, la nature, la rémunération, le lieu (L. 5331-3).\n- Pas de mentions discriminatoires ; pas de sexe (sauf exceptions artistes/mannequins) ; pas de limite d'âge sauf cas imposés par la loi ou certains plans séniors (voir F39133).\n- Avant de lancer : vérifier priorités internes possibles (temps partiel L. 3123-3, réembauche économique L. 1233-45) avec les RH : le junior signale, il ne tranche pas seul.\nSalaire dans l'offre : Service-Public indique que ce n'est pas obligatoire mais qu'une directive européenne sur la transparence salariale (2023/970) est en cours de transposition. Au 13/10/2026, ne dites pas « c'est déjà obligatoire en France » sans relire le texte de transposition en vigueur le jour J. C'est une bonne pratique, et une future obligation à suivre.",
      methode:
        "Check-list avant publication : intitulé épicène ou H/F, missions vraies, contrat vrai, lieu vrai, date, pas d'âge/sexe, français, contact. Faire relire si vous doutez.",
      noteText: "Obligation légale sur langue, vérité, non-discrimination, date. Salaire affiché : bonne pratique / droit UE en transposition, pas à présenter comme déjà obligatoire en FR sans vérification du jour J.",
      exemple:
        "Annonce « vendeuse 20-25 ans, dynamique, photo exigée » : illicite (sexe, âge, donnée excessive). Correction : « Vendeur / vendeuse H/F, accueil et conseil, contrat, lieu, horaires samedi, expérience souhaitée en magasin. »",
      erreurs:
        "Copier une vieille annonce. Promettre un télétravail que le manager refuse. Oublier de dater. Écrire « native speaker » sans besoin.",
      particuliers:
        "Offre confidentielle : toujours vraie, mais diffusion restreinte. Pas de faux poste pour « tester le marché » (L. 5331-3, existence de l'emploi).",
      exercice:
        "Corrigez : « Digital Ninja, 2 ans max d'expérience, English only, salaire selon profil, Paris ou remote (on verra). »",
      correction:
        "Intitulé compréhensible en français + description. Pas de plafond d'âge déguisé (« 2 ans max » peut être un proxy d'âge : reformuler le niveau de poste). L'anglais comme compétence professionnelle, avec description française. Lieu et remote doivent être vrais. Salaire : fourchette si politique / bonne pratique, pas une obligation FR consolidée au 13/10/2026, mais « selon profil » vague nuit à l'attractivité et peut devenir trompeur.",
    }),
    pack({
      title: "Offre de contrat, promesse unilatérale, DPAE",
      description: "Ne pas engager l'entreprise par un message trop fort. Formalités d'embauche : rôle employeur.",
      minutes: 18,
      objectifs:
        "Vous distinguez une proposition informelle, une offre de contrat et une promesse unilatérale. Vous savez que la DPAE est une obligation d'employeur, avant la prise de poste, au plus tôt 8 jours avant.",
      theorie:
        "Service-Public Entreprendre F39588, vérifié le 12/03/2026 : la « promesse d'embauche » n'est pas obligatoire. Deux figures jurisprudentielles (not. Cass. soc. 21 septembre 2017, n° 16-20.103 et 16-20.104) :\n- Offre de contrat : proposition rétractable dans certaines conditions tant qu'elle n'est pas acceptée (retrait possible dans le délai laissé ou un délai raisonnable ; dommages-intérêts possibles si préjudice).\n- Promesse unilatérale : le contrat est considéré comme formé, il manque l'acceptation du candidat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse.\nPlus que le titre du PDF, c'est l'intention et le contenu (poste, rémunération, lieu, etc.). Un junior ne rédige pas une « promesse » sans RH/juridique.\nDPAE : F23107 et Urssaf. Obligatoire avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche. Copie ou accusé au salarié. C'est l'employeur (RH/paie), pas le junior isolé, qui la dépose. Le recruteur coordonne les dates pour que ce soit fait à temps.",
      methode:
        "Messages d'offre : « sous réserve de validation RH », éléments essentiels, délai de réponse, canal écrit. Pas de « tu es embauché » sur WhatsApp. Check-list de passage de relais vers RH (identité, date d'entrée, type de contrat).",
      noteText:
        "Ces notions d'offre/promesse ne sont pas définies par un article unique du Code du travail : elles viennent de la jurisprudence, expliquées par Service-Public. DPAE = obligation légale d'employeur.",
      exemple:
        "Le fondateur écrit au candidat : « C'est plié, on t'attend le 1er, 42 k€. » Puis il se rétracte. Selon les termes, l'entreprise peut être engagée. Le junior aurait dû faire passer une offre écrite validée, avec délai.",
      erreurs:
        "Envoyer un modèle trouvé sur internet intitulé « promesse d'embauche » pour « faire sérieux ». Oublier la DPAE jusqu'à J+3. Laisser le candidat démissionner sur un oral flou.",
      particuliers:
        "CDD, intérim, alternance : formalités spécifiques. Le junior ne rédige pas le contrat. Recrutement international : titre de séjour, à RH.",
      exercice:
        "Que dites-vous à l'oral quand le manager dit « dis-lui qu'il a le poste, on verra le salaire plus tard » ?",
      correction:
        "Vous ne confirmez pas l'embauche sans rémunération, date, validation. Vous dites au candidat : intérêt confirmé, offre écrite après validation, éléments essentiels à venir. En interne : pas d'engagement oral incomplet. Risque : candidat qui démissionne, promesse mal qualifiée, conflit.",
    }),
    pack({
      title: "IA, cas pratiques et conduite à tenir",
      description: "Outils automatisés, demandes illicites du manager, réflexe d'escalade.",
      minutes: 16,
      objectifs:
        "Vous posez les questions de conformité avant d'utiliser une IA de tri, et vous traitez cinq demandes illicites fréquentes sans mentir ni exécuter.",
      theorie:
        "Un outil qui classe, note ou écarte des CV est une méthode d'aide au recrutement : L. 1221-8 (information, confidentialité, pertinence) + RGPD (finalité, biais, sécurité, droits). Le règlement européen sur l'IA peut qualifier certains usages de « haut risque » : ne pas inventer ici le détail des articles ; vérifier le régime applicable le jour J avec DPO/juridique. Supervision humaine obligatoire en pratique professionnelle : l'IA ne « refuse » pas seule.\n\nLe junior documente l'outil, ce qu'il fait, ce qu'il ne fait pas, et refuse un scoring sur des proxies discriminatoires (photo, prénom, âge inféré).",
      methode:
        "Avant activation : finalité, données utilisées, information candidats, droit de regard humain, journal des écarts. Demande manager illicite : reformuler, refuser le critère, alerter, tracer. Jamais de filtre fantôme.",
      extra: [
        code(`CAS — CONDUITE
1. « Mets une photo obligatoire. » → Non, donnée excessive / apparence (L. 1132-1, L. 1221-6). Annonce sans photo.
2. « Demande si elle a des enfants. » → Non. Disponibilités horaires du poste, à tous.
3. « Garde tous les CV 6 ans dans l'ATS actif. » → Non comme base active. Archive restreinte possible 5 ans (probatoire) ; vivier 2 ans reco + information.
4. « L'IA a mis ce prénom en bas, on skip. » → Non. Reprise humaine sur critères métier. Alerte biais.
5. « On publie l'annonce en anglais only pour un poste à Lyon. » → Non, L. 5331-4 : français + description. L'anglais peut être une compétence.`),
      ],
      exemple:
        "Un outil note plus bas les CV avec un congé parental. Biais de sexe / situation de famille. Vous stoppez l'usage, vous le signalez, vous retirez manuellement.",
      erreurs:
        "Faire confiance au « score de matching » sans lire le CV. Cacher au candidat qu'un algorithme a pré-trié.",
      particuliers:
        "Volume retail vs cadre rare : l'outil peut aider au planning, pas à discriminer plus vite.",
      exercice:
        "Le manager veut « juste » écarter les candidats de plus de 50 ans dans l'IA, « ce n'est pas dans l'annonce ». Réponse en cinq lignes.",
      correction:
        "Refus. L'âge est un critère protégé (L. 1132-1), y compris via un outil. Ce n'est pas plus légal parce que caché. Je n'active pas le filtre. Je propose des critères de poste (horaires, habilitations, astreintes). J'alerte mon responsable. Je trace l'échange. Je ne mens pas au manager sur « on verra au feeling » pour le faire quand même.",
    }),
    quizLesson({
      title: "Quiz — Cadre légal du recrutement",
      passing_score: 80,
      minutes: 18,
      questions: [
        q({
          question: "Un critère d'âge dans un recrutement, en droit français :",
          options: [
            "A. Est possible s'il n'est pas écrit dans l'annonce",
            "B. Est en principe interdit à l'embauche (L. 1132-1), sauf exceptions étroites prévues par les textes",
            "C. Est recommandé après 45 ans pour « protéger » le candidat",
            "D. Relève seulement d'une charte interne",
          ],
          correct: 1,
          explanation: "L. 1132-1 s'applique au recrutement. Un filtre ATS caché reste une discrimination. Les exceptions (âge légal, certains cas d'offres) sont étroites et à faire confirmer par RH.",
        }),
        q({
          question: "L. 1221-6 permet de demander :",
          options: [
            "A. Toute information « pour mieux connaître la personne »",
            "B. Uniquement des informations en lien direct et nécessaire avec l'emploi ou les aptitudes",
            "C. La situation familiale si le poste a des horaires atypiques",
            "D. Une photo pour humaniser le process",
          ],
          correct: 1,
          explanation: "Le lien direct et nécessaire est le test. Les horaires se posent comme contrainte du poste, pas via la famille. La photo n'est pas justifiée au stade candidature.",
        }),
        q({
          question: "Avant un test de recrutement, vous devez :",
          options: [
            "A. Informer expressément le candidat au préalable (L. 1221-8)",
            "B. Le surprendre pour un résultat plus « vrai »",
            "C. En informer seulement le CSE",
            "D. Rien, si le test dure moins de 10 minutes",
          ],
          correct: 0,
          explanation: "L. 1221-8 : information préalable expresse, résultats confidentiels, méthodes pertinentes. Pas d'exception « test court ».",
        }),
        q({
          question: "La durée de 2 ans pour un vivier de CV, selon la CNIL :",
          options: [
            "A. Est une obligation unique du Code du travail",
            "B. Est une recommandation (guide recrutement), distincte de l'archivage probatoire de 5 ans (L. 1134-5)",
            "C. Interdit toute conservation au-delà de 6 mois",
            "D. S'applique seulement aux cadres",
          ],
          correct: 1,
          explanation: "Référentiel CNIL RH 2026 et guide : 2 ans vivier = reco (information, opposition). 5 ans archive = rattachement L. 1134-5. Ne pas tout mélanger en base active.",
        }),
        q({
          question: "Indiquer le salaire dans une offre d'emploi en France, au 13/10/2026 :",
          options: [
            "A. Est déjà une obligation pénale depuis 2020",
            "B. N'est pas présenté par Service-Public comme déjà obligatoire ; une directive UE 2023/970 est en transposition — à revérifier le jour J",
            "C. Est interdit car confidentiel",
            "D. Est obligatoire seulement en CDD",
          ],
          correct: 1,
          explanation: "F39133 (02/10/2025) : pas (encore) obligatoire, directive en cours de transposition. Bonne pratique possible. Ne pas enseigner une obligation interne française consolidée sans texte transposé vérifié.",
        }),
        q({
          question: "Une promesse unilatérale de contrat, d'après Service-Public F39588 (12/03/2026) :",
          options: [
            "A. Est un e-mail informel sans effet",
            "B. Vaut contrat déjà formé ; le retrait par l'employeur s'analyse en licenciement sans cause réelle et sérieuse",
            "C. Est obligatoire avant tout CDI",
            "D. Se confond toujours avec une offre rétractable",
          ],
          correct: 1,
          explanation: "Jurisprudence expliquée par Service-Public (Cass. soc. 21/09/2017). Ce n'est pas obligatoire d'en émettre une. Un junior ne la rédige pas sans RH.",
        }),
        q({
          question: "La DPAE doit être transmise :",
          options: [
            "A. Dans les 8 jours après la prise de poste",
            "B. Avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédant l'embauche",
            "C. Uniquement pour les CDI",
            "D. Par le candidat lui-même sur Service-Public",
          ],
          correct: 1,
          explanation: "Urssaf / F23107. Obligation d'employeur, tous contrats visés par les textes. Le recruteur coordonne, il ne « s'assoit pas dessus ».",
        }),
        q({
          question: "Écarter un CV parce que l'IA a mal noté un prénom :",
          options: [
            "A. Est acceptable si l'outil est payant",
            "B. Fait porter un risque de discrimination ; une reprise humaine sur critères métier s'impose",
            "C. Est imposé par le RGPD",
            "D. N'est un problème que si le candidat le découvre",
          ],
          correct: 1,
          explanation: "L. 1132-1 + L. 1221-8 + RGPD. L'outil n'efface pas la responsabilité. Le secret ne légalise pas.",
        }),
        q({
          question: "Une offre d'emploi pour un poste à Nantes rédigée uniquement en anglais :",
          options: [
            "A. Est plus moderne, donc licite",
            "B. Méconnaît L. 5331-4 : français, description française si terme étranger",
            "C. Est obligatoire dans l'IT",
            "D. Est une simple reco France Travail",
          ],
          correct: 1,
          explanation: "L. 5331-4. L'anglais peut être une compétence requise, ce n'est pas la langue unique de l'offre.",
        }),
        q({
          question: "Un manager dit « pas de femme, le vestiaire n'est pas adapté ». Vous :",
          options: [
            "A. Exécutez : c'est organisationnel",
            "B. Refusez le critère de sexe, alertez RH, traitez l'accessibilité comme un sujet d'employeur, pas comme un filtre de candidatures",
            "C. Publiez « H uniquement, vestiaire homme »",
            "D. Attendez d'avoir des CV d'hommes pour « que ça se fasse tout seul »",
          ],
          correct: 1,
          explanation: "Sexe = critère protégé. Un vestiaire se traite en conditions de travail / accessibilité, pas en discrimination à l'embauche. Le filtre « tout seul » est une discrimination indirecte assumée.",
        }),
        q({
          question: "Les résultats d'un test de recrutement :",
          options: [
            "A. Peuvent être affichés pour que l'atelier vote",
            "B. Sont confidentiels (L. 1221-8)",
            "C. Appartiennent au candidat qui peut les publier, donc à tout le monde",
            "D. Doivent être détruits dans l'heure",
          ],
          correct: 1,
          explanation: "Confidentialité légale des résultats. La conservation suit ensuite RGPD / politique, pas un affichage collectif.",
        }),
        q({
          question: "Demander un permis B :",
          options: [
            "A. Est toujours discriminatoire",
            "B. Est possible s'il a un lien direct et nécessaire avec l'emploi (déplacements)",
            "C. N'est possible qu'après l'embauche",
            "D. Doit se faire via le casier judiciaire",
          ],
          correct: 1,
          explanation: "L. 1221-6 : pertinence. Un permis exigé pour un poste 100 % sédentaire sans déplacement n'est pas justifié.",
        }),
        q({
          question: "La priorité de réembauche après licenciement économique (L. 1233-45) :",
          options: [
            "A. Est tranchée seul par le junior dans l'ATS",
            "B. Doit être signalée aux RH avant de lancer un externe ; le junior ne « règle » pas le droit individuel",
            "C. N'existe plus",
            "D. Interdit tout recrutement pendant 5 ans",
          ],
          correct: 1,
          explanation: "F39133 : le junior alerte RH. Il ne décide pas un droit du salarié licencié.",
        }),
        q({
          question: "« On ne motive jamais un refus, la loi l'interdit » :",
          options: [
            "A. Vrai : motiver est pénalement interdit",
            "B. Faux : il n'y a pas d'obligation générale de motiver, mais pas d'interdiction de donner un motif professionnel ; la discrimination reste interdite",
            "C. Vrai seulement en CDI",
            "D. Faux : il faut toujours un recommandé de 4 pages",
          ],
          correct: 1,
          explanation: "Pas d'obligation générale de motiver un refus de candidature. Un motif professionnel peut être une bonne pratique. Un motif discriminatoire est illicite.",
        }),
        q({
          question: "Vous n'êtes pas sûr d'un article. Conduite professionnelle :",
          options: [
            "A. Inventer une règle « pour rassurer le manager »",
            "B. Relire Légifrance / Service-Public / CNIL, qualifier obligation vs reco, escalader RH si besoin",
            "C. Copier le premier forum RH",
            "D. Appliquer le droit américain, plus strict",
          ],
          correct: 1,
          explanation: "C'est le réflexe enseigné dans ce module. Inventer une obligation est une faute professionnelle.",
        }),
      ],
    }),
  ],
};
