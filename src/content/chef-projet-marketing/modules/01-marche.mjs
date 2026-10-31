import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 1,
  title: "Analyser le marché et identifier les opportunités",
  description:
    "Conduire une étude de marché utile à la décision, benchmarker sans copier, écouter les besoins sans se tromper de problème, et formuler une opportunité — cas Banque Horizon et app 18-30 ans.",
  lessons: [
    pack({
      title: "Réaliser une étude de marché utile à la décision",
      description:
        "Passer d'une collection de chiffres à une étude qui éclaire un go/no-go : marché, segments, canaux, contraintes.",
      minutes: 7,
      objectifs:
        "Vous savez définir le périmètre d'une étude de marché, distinguer données internes et externes, et produire une synthèse qui sert une décision de projet — pas un dossier décoratif. Vous savez aussi dire ce qu'une étude de 7 minutes de lecture ne peut pas prétendre.",
      theorie:
        "Une étude de marché, pour un chef de projet, n'est pas un mémoire. C'est un dossier assez juste pour décider : vaut-il la peine de cadrer un projet, sur quel segment, contre quelles alternatives ? Si l'étude ne change aucune décision, elle n'a pas servi.\n\nVous séparez quatre couches. Le marché : qui paie, pour quel usage, avec quelle dynamique (croissance, saturation, régulation). Les segments : ici, les jeunes actifs 25-35 ans ne sont pas « les jeunes » ; un étudiant de 19 ans et un primo-accédant de 33 ans n'ont pas le même besoin. Les canaux : où se décide l'ouverture d'un compte ou d'un contrat (mobile, agence, partenaire, comparateur). Les contraintes : devoir d'information, publicité financière, KYC, capacité IT, budget.\n\nLes sources se combinent. Internes : souscriptions, abandon de parcours, CAC, attrition, réclamations, mix agence/mobile — ce sont souvent les plus actionnables. Externes : études sectorielles, rapports publics, veille concurrentielle, interviews. Tout chiffre sans source, sans date et sans définition (qu'est-ce qu'un « client jeune » ?) est un bruit. Les parts de marché d'acteurs nommés dans ce cours sont fictives et pédagogiques.\n\nVotre livrable tient en quelques pages : fait, interprétation, implication pour le projet, ce que l'on ne sait pas encore. L'inconnu assumé est plus utile qu'une courbe inventée.",
      methode:
        "Avant de collecter, écrivez la question de décision : « Devons-nous investir dans une offre 25-35 ans, un partenariat, ou d'abord un parcours ? » Puis :\n1. Définir le marché (produit, géographie, cible, période).\n2. Lister les données internes déjà disponibles (90 % des projets les ignorent).\n3. Compléter par 3 à 5 sources externes datées, pas vingt PDF non lus.\n4. Segmenter : 25-35 ans n'est pas homogène (emploi, logement, épargne, crédit).\n5. Qualifier les canaux et le coût d'accès (CAC, délai, dépendance à un partenaire).\n6. Énoncer 3 implications et 3 manques. Le manque devient un item de faisabilité, pas une excuse pour ne pas décider.",
      noteText:
        "Une étude n'est pas un avis ACPR ni une étude d'impact réglementaire. Elle éclaire le marché. La conformité et le juridique diront si l'offre envisagée est tenable. Ne mélangez pas les deux dossiers.",
      exemple:
        "Horizon constate « moins de souscriptions jeunes ». Sans étude, on commande une campagne. Avec une étude minimale : le volume 25-35 a baissé de 18 % en 12 mois (donnée interne fictive), le CAC a crû, le délai médian d'ouverture est de 18 minutes sur 7 étapes, 62 % des abandons ont lieu avant la pièce d'identité. Le marché externe (fictif) des néobanques capte l'entrée en relation, pas encore le crédit. L'implication n'est pas « plus de pubs » : c'est un projet de parcours et d'offre, pas un plan média isolé.",
      erreurs:
        "Ouvrir un drive de 40 slides sans question de décision. Copier un communiqué de concurrent comme s'il s'agissait d'un fait. Traiter « les 18-35 ans » comme un seul marché. Oublier les données internes. Présenter des parts de marché sans dire qu'elles sont estimées ou fictives. Confondre étude de marché et validation réglementaire.",
      particuliers:
        "En B2B, le « marché » est souvent une liste de 50 comptes et un cycle long : l'étude ressemble à un pipeline qualifié. En assurance, le besoin se révèle à l'événement de vie : l'étude doit parler de déclencheurs, pas seulement de notoriété. Sur un marché régulé, l'absence d'un concurrent sur un produit peut être une barrière, pas une « opportunité vide ».",
      exercice:
        "On vous donne 10 jours avant un comité Horizon. Question posée : « Faut-il une offre 25-35 ans dédiée ? » Listez : (1) 5 données internes à extraire ; (2) 3 questions qu'une étude externe doit trancher ; (3) ce que vous refusez de promettre au comité au bout de 10 jours.",
      correction:
        "1. Internes : volume et mix 25-35 sur 24 mois, CAC par canal, taux d'abandon du parcours par étape, attrition 12 mois, équipement (livret, crédit, assurance), part agence vs mobile, réclamations liées à l'entrée en relation.\n2. Externes : comment les néobanques (fictives) gagnent l'entrée en relation ; ce que la cible paie réellement (frais, cashback, crédit) ; quels partenariats d'acquisition existent déjà sur la place.\n3. Vous ne promettez ni un chiffre d'affaires garanti, ni une part de marché, ni un avis conformité. Vous livrez une recommandation argumentée (offre dédiée / parcours d'abord / partenariat / no-go temporaire) avec les manques. Dix jours font une étude de décision, pas une thèse.",
    }),
    pack({
      title: "Benchmarker sans copier : comparer pour décider",
      description:
        "Construire une grille comparative utile, lire les écarts, et en tirer des choix de projet — pas un clone.",
      minutes: 7,
      objectifs:
        "Vous savez choisir des critères de benchmark liés à votre décision, remplir une grille comparable, et en extraire 3 écarts actionnables. Vous savez pourquoi copier le leader est un projet, pas une stratégie.",
      theorie:
        "Le benchmark n'est pas une galerie d'écrans. C'est une comparaison structurée : mêmes critères, mêmes définitions, mêmes cibles, pour éclairer un écart que votre projet peut — ou ne peut pas — traiter.\n\nUn bon critère est observable et lié à la décision. Pour une offre 25-35 ans : délai d'ouverture, nombre d'étapes, pièces demandées, frais, avantages ciblés, présence physique, entrée en relation 100 % mobile, qualité du premier usage, CAC apparent, promesse crédit ou épargne. Un mauvais critère : « ils ont l'air plus modernes » — ce n'est pas comparable, ce n'est pas actionnable.\n\nVous comparez des pairs pertinents, pas « tout le marché ». Une néobanque 100 % mobile, une banque de réseau urbaine et une super-app budget n'ont pas le même modèle : c'est précisément pour cela que la grille est utile, à condition de le dire. Les chiffres ci-dessous sont fictifs et pédagogiques.\n\nLire un benchmark, c'est chercher des écarts de valeur, pas des logos à imiter. Si Pulse ouvre un compte en 4 minutes et Horizon en 18, l'écart n'est pas « ils ont une appli ». C'est un parcours, un KYC, une architecture, un appétit au risque. Copier l'écran sans copier le modèle produit un clone lent et non conforme. Votre livrable : 3 écarts, 3 hypothèses sur les causes, 3 implications projet (faire, ne pas faire, investiguer).",
      methode:
        "1. Formuler la décision (« réduire le délai d'entrée en relation 25-35, ou changer d'avantages, ou les deux ? »).\n2. Choisir 8 à 12 critères observables, pas 40 lignes illisibles.\n3. Définir chaque critère (délai = médiane chronométrée du parcours public, pas le slogan « 5 minutes »).\n4. Remplir la grille à plusieurs (digital + réseau + un regard conformité pour les mentions), jamais seul au feeling.\n5. Marquer ce qui est constaté, estimé, inconnu.\n6. Extraire seulement trois écarts qui changent le cadrage. Le reste est annexe.\n7. Relier chaque écart à une famille de projet (parcours, offre, partenariat, outil, CX).",
      noteText:
        "Les enseignes, parts de marché, NPS, CAC et délais du tableau sont inventés pour la pédagogie. En situation réelle, vous datez, vous sourcez, et vous n'inventez pas un NPS concurrent.",
      exemple:
        "Un junior d'Horizon revient d'un « benchmark » avec 60 captures d'écran et la conclusion « il faut un cashback ». La grille ci-dessous montre autre chose : l'écart le plus brutal n'est pas le cashback, c'est le temps d'ouverture et le premier usage le jour même. Le cashback de Pulse (fictif) est un coût d'acquisition, pas forcément un modèle copiable avec le PNB d'une banque de réseau. L'implication projet prioritaire est le parcours, pas la copie d'une mécanique promo.",
      extra: [
        code(`BENCHMARK FICTIF — Offre « quotidien 25-35 ans » (données inventées, pédagogie)
Critère                 | Horizon actuel | NéoBank Pulse | Banque Rivage | App Finly
------------------------|----------------|---------------|---------------|----------------
Positionnement          | Banque générale| 100 % mobile  | Banque urbaine| Super-app budget
Ouverture de compte     | 18 min, 7 étapes| 4 min, 3 étapes| 12 min, 5 étapes| 6 min, 4 étapes
Pièces demandées        | 6              | 3             | 5             | 3
Souscription 100 % mobile| Partielle     | Native        | Native        | Native
Carte                   | Visa classique | Visa + cashback| Mastercard    | Virtuelle + physique
Avantage 25-35          | Aucun ciblé    | 1 % courses   | 0,5 % voyages | Arrondi épargne
Frais de tenue          | 2,50 € / mois  | 0 €           | 1,90 € / mois | 0 € (freemium)
Découvert               | Sur dossier    | Non           | Oui, tarifé   | Non
Crédit conso 25-35      | Agence + dossier| Partenaire    | Oui, digital  | Non
Réseau d'agences        | 420 (fictif)   | 0             | 85            | 0
NPS déclaré 25-35       | 18             | 52            | 31            | 44
Part de marché 25-35    | 6 %            | 11 %          | 4 %           | 8 % (usage, pas banque)
CAC acquisition (est.)  | 180 €          | 95 €          | 140 €         | 70 € (app)
Time-to-first-use       | J+12           | J0            | J+3           | J0
Promesse logement/épargne| Forte, illisible| Faible       | Moyenne       | Arrondi seulement

Lecture guidée : l'écart délai / étapes / first-use est structurant. L'écart cashback est un choix de modèle, pas un copier-coller. L'écart réseau est une force Horizon si le parcours agence + mobile est cohérent, une faiblesse s'il allonge le délai.`),
      ],
      erreurs:
        "Comparer des slogans (« ouverture en 5 minutes ») sans chronométrer. Mélanger banque, néobanque et super-app sans le dire. Copier un avantage (cashback) sans modèle de coût. Oublier le réglementaire : 3 pièces chez Pulse ne sont pas un droit magique, c'est un appétit et un process. Présenter 20 critères sans conclusion.",
      particuliers:
        "Un partenaire de distribution se bencht aussi sur le contrat et le partage de leads, pas seulement sur l'écran. En assurance, le benchmark porte sur devis, devoir de conseil, délai de souscription — pas sur le cashback carte. Si un critère est non observable (coût interne du concurrent), vous le marquez « inconnu », vous ne l'inventez pas.",
      exercice:
        "À partir du tableau fictif : (1) citez les 3 écarts les plus actionnables pour Horizon ; (2) pour chacun, dites s'il oriente un projet de parcours, d'offre, de partenariat ou d'outil commercial ; (3) quel écart vous refusez de « copier » tel quel, et pourquoi.",
      correction:
        "1. Délai et nombre d'étapes (18 min / 7 vs 4 min / 3). Time-to-first-use (J+12 vs J0). Avantage lisible 25-35 (aucun vs cashback ou arrondi) — à traiter après le parcours, pas avant.\n2. Délai/étapes = parcours de souscription (+ IT + conformité KYC). First-use = CX + outil (activation carte, premier virement). Avantage = offre (et finance : coût du cashback vs PNB).\n3. On refuse de copier « 0 € de tenue + 1 % cashback + 3 pièces » comme un pack. C'est un modèle économique et un appétit réglementaire, pas un écran. Horizon peut viser un délai proche et un first-use à J0, tout en jouant sa force réseau et crédit — ce que Pulse n'a pas.",
    }),
    pack({
      title: "Écouter les besoins clients sans se tromper de problème",
      description:
        "Articuler qualitatif et quantitatif, relier les irritants à des faits, et utiliser les personas sans les prendre pour des personnes.",
      minutes: 7,
      objectifs:
        "Vous savez combiner entretiens, parcours observés et données pour formuler un besoin, pas un souhait de COMEX. Vous connaissez les limites d'un persona. Vous savez relier un irritant à un levier de projet.",
      theorie:
        "Le besoin client n'est pas ce que le sponsor raconte en réunion, ni ce qu'un persona de 2019 a « aimé ». C'est un écart entre ce que la personne cherche à faire et ce que l'offre, le parcours ou le réseau lui permettent de faire, à un coût acceptable (temps, argent, charge mentale, risque perçu).\n\nLe quantitatif dit où et combien : taux d'abandon par étape, délai, NPS, CAC, équipement, motifs de réclamation, cohortes 25-35. Le qualitatif dit pourquoi : entretiens, tests de parcours, écoutes conseiller, verbatims. L'un sans l'autre trompe. Un taux d'abandon de 62 % avant la pièce d'identité est un fait. Sans entretien, vous ne savez pas si c'est la friction KYC, la peur, un crash, ou une offre mal comprise. Des verbatims « c'est trop long » sans chiffre ne pèsent pas en comité.\n\nUn irritant est un point de friction répété, observable, rattaché à une étape. « Ils n'aiment pas les banques » n'est pas un irritant. « Ils abandonnent au téléchargement du justificatif de domicile, sur mobile, le dimanche soir » en est un.\n\nLe persona est un outil de synthèse, pas une preuve. Il compacte des comportements. Il devient dangereux quand on lui donne un prénom et une vérité unique (« Léa, 28 ans, déteste les agences »). Les 25-35 ans d'Horizon ne sont pas un personnage : une partie veut l'agence pour un crédit, une partie ne viendra jamais. Visez des comportements, pas une fiction.",
      methode:
        "1. Partir d'un fait interne (abandon, délai, attrition, non-équipement).\n2. Observer le parcours réel (compte chrono, captures, script conseiller), pas la maquette.\n3. Mener 6 à 10 entretiens ciblés (compléteurs ET abandonnistes), plus 3 écoutes réseau.\n4. Croiser : le verbatim explique-t-il le chiffre ? Sinon, hypothèse à tester, pas conclusion.\n5. Formuler l'irritant en une phrase : qui, à quelle étape, quel coût, quelle fréquence.\n6. En déduire un levier (parcours, offre, outil, distribution, CX), pas trois projets à la fois.\n7. Si vous utilisez un persona, écrivez en tête : « synthèse, n = …, limites : … ».",
      noteText:
        "Segmenter par âge pour une offre (25-35) n'autorise pas un discours discriminant à l'embauche ou un stéréotype. Ici, l'âge est un segment de marché déclaré par l'entreprise, pas une vérité sur les personnes.",
      exemple:
        "Le COMEX d'Horizon affiche un persona « Léo, 29 ans, digital native, zéro agence ». Les données internes (fictives) montrent que 38 % des crédits conso 25-35 partent encore d'un RDV agence, et que l'attrition la plus forte est chez ceux qui ont ouvert 100 % mobile sans jamais activer un premier virement. Le besoin n'est pas « encore plus digital ». C'est un first-use raté et un pont agence/mobile pour le crédit. Le persona Léo avait caché la moitié du marché.",
      erreurs:
        "Remplacer l'étude par un atelier interne (« on connaît nos clients »). Confondre un souhait (« une appli plus fun ») et un besoin (terminer l'ouverture le jour même). Multiplier les personas jusqu'à ce que chacun trouve le sien. Ignorer les abandonnistes. Prendre un NPS en baisse comme un brief créatif.",
      particuliers:
        "En B2B, l'utilisateur (le salarié) n'est pas le payeur (le DAF) : deux besoins, un projet. En réseau, le conseiller est aussi un « utilisateur » de l'outil : un irritant conseiller crée un irritant client. Sur une app, un crash n'est pas un besoin marketing : c'est un incident, à traiter avec le digital, pas avec un persona.",
      exercice:
        "Faits Horizon (fictifs) : abandon 62 % avant pièce d'identité ; délai médian 18 min ; verbatims « je ne sais pas quelles pièces » et « je ferai ça en agence » ; 38 % des crédits 25-35 encore nés en agence. (1) Formulez 2 irritants précis. (2) Quelle donnée quali manque encore ? (3) En une phrase, la limite du persona « tout digital, zéro agence ».",
      correction:
        "1. Irritant A : sur mobile, le client 25-35 abandonne avant l'envoi des pièces faute de liste claire et de parcours dimanche soir — coût = temps + incertitude. Irritant B : le pont vers l'agence (« je ferai ça en agence ») n'est pas un rendez-vous pris, c'est une fuite : beaucoup ne reviennent pas, le crédit reste un besoin non servi pour une partie de la cible.\n2. Il manque le pourquoi chez les abandonnistes (friction vs peur vs crash vs offre) et le récit des compléteurs agence (pourquoi ils viennent encore).\n3. Le persona « zéro agence » décrit un comportement fréquent, pas le marché du crédit 25-35 : s'il devient la vérité du projet, vous détruisez un canal qui produit encore 38 % des crédits du segment.",
    }),
    pack({
      title: "Formuler une opportunité : SWOT et cas d'usage",
      description:
        "Transformer étude, benchmark et besoins en SWOT actionnable, puis traiter le cas de baisse d'usage de l'app 18-30 ans.",
      minutes: 8,
      objectifs:
        "Vous savez construire un SWOT qui oriente un projet, pas un poster. Vous savez formuler une opportunité (hypothèse de valeur + cible + levier + preuve à aller chercher). Vous appliquez la méthode au cas de l'application Horizon, usage en baisse chez les 18-30 ans.",
      theorie:
        "Une opportunité de projet n'est pas une idée. C'est un écart de marché ou d'usage que l'entreprise peut traiter, mieux que l'alternative (ne rien faire, une campagne, un partenariat isolé), dans un délai et un budget réalistes.\n\nLe SWOT sert à ranger, pas à décorer. Forces et faiblesses : internes (parcours, réseau, PNB, IT, image, conformité mature). Opportunités et menaces : externes (néobanques, régulation, bascule mobile, partenaires, coût d'acquisition). Un SWOT utile tient en huit puces sourcées, puis en trois croisements : une force pour saisir une opportunité ; une faiblesse à corriger avant ; une menace qui tuerait le projet si on l'ignore. Un SWOT de vingt lignes sans croisement n'aide personne.\n\nLa formulation d'opportunité suit une phrase : pour [cible], le problème [irritant mesuré] empêche [usage/valeur] ; si nous [levier], alors [effet], parce que [preuve actuelle] ; nous irons chercher [preuve manquante] avant le cadrage.\n\nLe cas app 18-30 ans n'est pas le même segment que l'offre 25-35, mais il éclaire le même métier : un usage qui baisse n'est pas automatiquement « il faut une nouvelle appli ». C'est un signal. Il peut venir d'un irritant, d'un concurrent, d'un bug, d'une offre illisible, d'une notification mal réglée, ou d'une cohorte qui n'avait jamais été engagée. Sans diagnostic, le projet sera un redesign cher.",
      methode:
        "1. Lister 4 forces, 4 faiblesses, 4 opportunités, 4 menaces — chacune rattachée à un fait (étude, benchmark, donnée interne).\n2. Croiser : où une force rencontre une opportunité (projet possible) ; où une faiblesse bloque (préalable) ; où une menace impose un no-go ou un cadrage serré.\n3. Écrire 1 à 3 opportunités en une phrase chacune, pas dix « pistes ». \n4. Pour chaque opportunité : infos encore manquantes, critères de benchmark utiles, 3 hypothèses alternatives, preuve qui ferait tomber l'hypothèse.\n5. Recommander une priorité (une seule) pour le prochain comité, avec ce que vous ne ferez pas.",
      noteText:
        "Le SWOT n'est pas une décision. L'arbitrage se fera plus tard, avec un business case. Ici, vous apprenez à ne pas coller un projet sur le premier verbe du sponsor.",
      exemple:
        "SWOT express Horizon (fictif). Forces : réseau 420 agences, expertise crédit, conformité rodée. Faiblesses : 18 minutes d'ouverture, first-use à J+12, aucun avantage lisible 25-35, image « banque des parents ». Opportunités : néobanques encore faibles sur le crédit et le logement ; partenaires écoles et employeurs. Menaces : Pulse sur l'entrée en relation, CAC en hausse, régulation de la publicité, attrition des cohortes ouvertes sur mobile sans usage.\nCroisement utile : force crédit + opportunité logement 25-35, à condition de corriger le parcours (faiblesse) avant de pousser une campagne (sinon vous payez pour un tunnel qui abandonne).",
      extra: [
        code(`CAS — App Horizon, baisse d'usage 18-30 ans (fictif, pédagogique)

Faits fournis ce matin :
- MAU 18-30 : −22 % en 8 mois (données internes fictives)
- Téléchargements stables ; ce n'est pas l'acquisition store
- Session médiane : 1 min 10 (était 3 min 40)
- Taux d'ouverture des notifications : 4 %
- Crash rate : 0,3 % (pas une crise technique visible)
- Note store : 3,9 → 3,6 ; verbatims « je ne vois pas mes virements », « trop de pubs internes »
- 41 % des 18-30 n'ont fait aucun virement depuis l'app au cours des 90 jours
- Concurrent Pulse (fictif) : first-use J0, virement en 30 secondes, NPS 52

Ce n'est pas un brief « refaire l'app ». C'est un signal d'usage.`),
      ],
      erreurs:
        "Remplir un SWOT avec des opinions (« on est modernes »). Transformer chaque case en projet. Traiter une baisse d'usage app comme un problème de logo. Empiler trois hypothèses sans dire laquelle tuerait les autres. Oublier que 18-30 n'est pas 25-35 : une opportunité app ne remplace pas l'offre jeunes actifs, elle peut l'alimenter ou la contredire.",
      particuliers:
        "Si le crash rate explose, ce n'est plus un projet marketing : c'est un incident digital. Si la baisse d'usage est concentrée sur une version iOS, le cadrage change. Si elle est concentrée sur les clients sans virement, c'est de l'activation, pas du store. Un partenariat « super-app » n'efface pas un irritant interne.",
      exercice:
        "Cas Banque Horizon — baisse d'usage de l'application chez les 18-30 ans (voir l'encadré). Budget limité, tentation du sponsor : « on refait l'app et on lance une campagne TikTok ».\n\nLivrez :\n(1) les informations que vous exigez encore dans les 10 jours ;\n(2) un diagnostic en 5 lignes (ce que les faits disent, ce qu'ils ne disent pas) ;\n(3) 6 critères de benchmark pertinents, pas « la plus belle app » ;\n(4) 3 hypothèses distinctes, chacune falsifiable ;\n(5) l'opportunité que vous formulez (une phrase) et ce que vous refusez d'en faire un projet tout de suite.",
      correction:
        "1. Infos 10 jours. Coupe de la baisse par cohorte (nouveaux vs anciens, iOS/Android, clients avec/sans virement, avec/sans carte activée). Funnel in-app (login → solde → virement → bénéficiaire). Sujets exacts des notes store. Contenu et fréquence des notifications. Temps réel d'un virement vs Pulse (chrono, pas slogan). Lien avec le parcours d'ouverture (first-use J+12 déjà vu). Volume d'appels « je ne trouve pas ».\n2. Diagnostic. Ce n'est pas une crise d'acquisition store (téléchargements stables) ni un crash massif. C'est une chute d'usage et de profondeur de session, avec un first-use faible (pas de virement pour 41 %) et une communication in-app qui agace. On ne sait pas encore si le problème est l'architecture du virement, l'offre illisible, les notifications, ou une cohorte jamais activée. Un redesign global n'est pas justifié par ces seuls faits.\n3. Critères benchmark (fictifs à mesurer pareil) : temps d'un premier virement ; nombre de taps jusqu'au solde ; activation carte J0 ; clarté des notifications (opt-in, fréquence) ; présence d'un geste d'épargne simple ; mention des frais en contexte — pas le « wow » visuel.\n4. Trois hypothèses. H1 Activation : les 18-30 ouvrent un compte et n'accomplissent aucun premier geste (virement, carte) ; l'app n'est pas le problème, le onboarding l'est. H2 Irritant virement : le flux virement/bénéficiaire est lent ou opaque (« je ne vois pas mes virements ») ; un lot parcours suffit. H3 Bruit commercial : les pubs internes et notifications à 4 % d'ouverture détruisent l'usage ; un projet de rétention/consentement, pas une refonte. (Une H4 technique resterait ouverte si une coupe iOS le montrait — les faits actuels ne la portent pas.)\n5. Opportunité. Pour les 18-30 déjà clients, l'absence de premier geste et un virement peu lisible font chuter l'usage ; si nous priorisons l'activation J0 et le flux virement, l'usage peut se redresser sans refonte, parce que l'acquisition store tient encore et que le crash rate est bas ; nous irons chercher la coupe cohortes et un chrono comparé avant cadrage. Refus : campagne TikTok et « nouvelle app » tant que H1/H2/H3 ne sont pas tranchées. Lien fil rouge : si l'offre 25-35 arrive sur la même app, un first-use cassé chez 18-30 est un signal d'alerte pour le lancement, pas un projet séparé de logo.",
    }),
    quizLesson({
      title: "Quiz — Marché, benchmark et opportunités",
      description: "Vérifier que vous transformez des signaux de marché en décisions de projet, sans copier ni sur-interpréter.",
      passing_score: 70,
      minutes: 6,
      questions: [
        q({
          question: "À quoi sert principalement une étude de marché pour un chef de projet marketing et développement ?",
          options: [
            "A. À produire un dossier volumineux qui prouve que l'on a travaillé",
            "B. À éclairer une décision (go, no-go, ciblage, alternative) avec des faits sourcés et des manques assumés",
            "C. À remplacer l'avis de la conformité et du juridique",
            "D. À garantir une part de marché chiffrée au comité",
          ],
          correct: 1,
          explanation:
            "L'étude sert une décision. Elle ne remplace pas le réglementaire et elle ne garantit pas une part de marché. Un dossier décoratif n'a pas de valeur de projet.",
        }),
        q({
          question: "Dans le benchmark fictif Horizon vs Pulse vs Rivage vs Finly, quel écart est le plus structurant pour un premier projet ?",
          options: [
            "A. Le logo et la couleur de l'application Pulse",
            "B. Le délai d'ouverture, le nombre d'étapes et le time-to-first-use",
            "C. Le seul fait que Pulse offre 1 % de cashback",
            "D. Le nombre d'agences d'Horizon, à fermer pour copier Pulse",
          ],
          correct: 1,
          explanation:
            "Le tableau montre un écart de parcours et d'activation (18 min / J+12 vs 4 min / J0). Le cashback est un modèle de coût, pas le premier clone. Fermer le réseau serait détruire une force sans traiter l'irritant.",
        }),
        q({
          question: "Pourquoi un persona « Léo, 29 ans, zéro agence » est-il dangereux s'il devient la vérité du projet Horizon ?",
          options: [
            "A. Parce que les personas sont interdits en banque",
            "B. Parce qu'il compacte un comportement possible mais masque d'autres usages (crédit encore né en agence, first-use raté)",
            "C. Parce qu'il faut au moins vingt personas pour être sérieux",
            "D. Parce qu'un persona remplace toujours les données quantitatives",
          ],
          correct: 1,
          explanation:
            "Le persona est une synthèse, pas une preuve. S'il devient unique, il efface le mix réel des canaux et des besoins. Il n'est pas interdit ; il est limité. En multiplier vingt n'améliore rien.",
        }),
        q({
          question:
            "Un irritant client, dans ce module, se formule surtout comment ?",
          options: [
            "A. « Les jeunes n'aiment pas les banques »",
            "B. Un souhait de COMEX (« une appli plus fun »)",
            "C. Qui, à quelle étape, quel coût, quelle fréquence — rattaché à un fait (abandon, délai, réclamation)",
            "D. Un NPS en baisse, suffisant pour lancer une campagne",
          ],
          correct: 2,
          explanation:
            "Un irritant est observable et situé. Les généralisations et les souhaits internes ne sont pas des irritants. Un NPS oriente, il ne briefe pas à lui seul.",
        }),
        q({
          question:
            "L'app Horizon perd 22 % de MAU chez les 18-30 ans, téléchargements stables, crash rate bas. Quelle conduite est la plus professionnelle ?",
          options: [
            "A. Refaire l'application et lancer TikTok, le sponsor l'a demandé",
            "B. Conclure que la marque est morte",
            "C. Diagnostiquer (cohortes, funnel, virement, notifications), poser 3 hypothèses falsifiables, formuler une opportunité d'activation / parcours avant tout redesign",
            "D. Ignorer le sujet : ce n'est pas le segment 25-35 du fil rouge",
          ],
          correct: 2,
          explanation:
            "Les faits pointent un usage et un first-use, pas une crise d'acquisition ni un crash. On formule des hypothèses et une opportunité ciblée. Ce n'est pas parce que le fil rouge est 25-35 que le signal 18-30 est hors métier : il éclaire la même app.",
        }),
        q({
          question: "Quel croisement SWOT est le plus utile pour prioriser le projet d'offre 25-35 ans à Horizon ?",
          options: [
            "A. Une liste de vingt forces, sans lien avec un projet",
            "B. Force crédit / logement + opportunité d'un besoin 25-35, à condition de corriger la faiblesse du parcours avant de pousser l'acquisition",
            "C. Copier toutes les menaces Pulse dans un cahier des charges unique",
            "D. Transformer chaque case du SWOT en un projet distinct dès la semaine 1",
          ],
          correct: 1,
          explanation:
            "Un SWOT utile croise. Ici : jouer le crédit (force) sur un besoin réel, sans payer de l'acquisition dans un tunnel qui abandonne (faiblesse). Copier la menace ou éclater le SWOT en dix projets n'est pas prioriser.",
        }),
      ],
    }),
  ],
};
