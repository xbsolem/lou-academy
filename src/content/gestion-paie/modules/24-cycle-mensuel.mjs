import { pack, quizLesson, q, h, t, note, code, lesson } from "../lib.mjs";

export default {
  position: 24,
  title: "Le cycle mensuel de paie : du calendrier à la clôture, simulation janvier 2026",
  description:
    "Parcourir le cycle : calendrier, collecte, vérification, saisie, calcul, contrôle, validation, bulletins, paiement, DSN, comptabilité, archive, régularisations et communication. Simulation jour par jour, Atelier Nord Paie, 28 personnes, janvier 2026.",
  lessons: [
    pack({
      title: "Calendrier de paie : dates internes et échéances non négociables",
      description:
        "Construire un calendrier de cycle, plus serré que l'échéance légale si l'organisation l'exige.",
      minutes: 20,
      objectifs:
        "Vous savez lister les phases d'un cycle mensuel, poser un calendrier interne, et distinguer une date d'organisation d'une échéance légale que vous ne récitez pas hors source.",
      theorie:
        "Le cycle de paie n'est pas une humeur. C'est une séquence : ouvrir la période, collecter, vérifier, saisir, calculer, contrôler, corriger, valider, éditer les bulletins, payer, déclarer (DSN), comptabiliser, archiver, puis traiter régularisations et communication. Chaque phase a un livrable. Inverser l'ordre (payer puis contrôler, déclarer puis saisir une entrée) est la cause classique des régularisations en chaîne.\n\nDeux horloges coexistent. L'horloge interne : gel des variables, premier calcul, visa, virement, envoi des PDF. L'horloge externe : paiement du salaire à la date prévue (contrat, usage, accord — souvent fin de mois ou date fixe), DSN selon les échéances net-entreprises applicables au dossier (vous les relisez chaque année sur source, vous ne les récitez pas de mémoire dans ce cours comme si elles étaient éternelles), paiement des organismes, PAS. L'horloge interne doit précéder l'externe. Un gel le 28 pour un virement le 28 n'est pas un cycle, c'est une improvisation.\n\nJanvier est le mois le plus dense du calendrier annuel : PMSS 4 005 €, SMIC 12,02 € et 1 823,03 € au 01/01/2026, souvent 13e mois, N-4 de régularisations, nouveaux taux, parfois RGDU à décider (dans ce cours : seulement si le cas le demande ; sinon taux pleins maladie 13 % et AF 5,25 %). Le calendrier de janvier se prépare en décembre : journal de paramétrage, sentinelles, communication aux managers (« gel le 18 janvier 12 h »).\n\nUn junior n'invente pas un calendrier légal. Il affiche le calendrier de SON dossier, visé, et il alerte si une date interne rend l'externe impossible (visa le 27, virement le 27, banque à 16 h).",
      methode:
        "En N-1 du mois (décembre pour janvier) : écrire les dates, les responsables, les canaux de variables, l'heure de gel, l'heure de banque. Diffuser aux managers. En J+1 du mois : ouvrir, paramètres, liste des in/out déjà connus. Ne pas attendre le 12 pour découvrir une entrée du 13.",
      extra: [
        code(`CALENDRIER TYPE — Atelier Nord Paie — janvier 2026 (organisation interne, fictif)
Pas une échéance légale universelle. La DSN : relire net-entreprises pour LE dossier.

02/01  Ouverture. Paramètres 2026 (PMSS 4005, SMIC 12,02 / 1823,03). Journal paramétrage.
       Liste : entrée 13/01 ANP-09, sortie 31/01 ANP-16, arrêts ANP-24 et suivants.
05/01  Relance managers : HS, primes, absences. Gel annoncé : 18/01 12h.
08/01  Pièces arrêts. DSN événementielle selon consigne Marc, pas un dépôt junior isolé.
13/01  Entrée ANP-09 : dossier complet le jour J, pas le 24.
18/01  12h  GEL. Exception = Marc seulement.
20/01  Saisie close. Calcul d'essai. Contrôles après (module 23).
22/01  Anomalies. Corrections. Sentinelles SMIC / PMSS / nets.
24/01  Clôture interne. Visa Marc. SEPA préparé non envoyé. DSN préparée. Journal comptable.
25/01  Revue finale. Dépôt DSN par Marc. Exceptions reportées (HS atelier → février).
28/01  Paiement (date interne ANP). Permanence réclamations.
31/01  Sortie ANP-16 : STC à deux. Pas un solde improvisé le soir.
05/02  Post-clôture : CRM, lettrage, réguls à planifier, mails managers du mois suivant.`),
      ],
      exemple:
        "Un manager lit « gel le 18 » le 19. Trop tard. Lina ne « décale le calendrier pour l'atelier ». Elle applique le report février, copie Marc. Si l'on décale pour un atelier, on décale pour 28 personnes, la banque et la DSN. Le calendrier tient, ou il n'existe pas.",
      erreurs:
        "Calendrier dans la tête. Dates DSN récitées de 2022. Tout compresser le 24. Oublier que janvier change les paramètres. Préparer le STC d'ANP-16 le 31 à 17 h.",
      particuliers:
        "Paiement au 25 vs 28 : c'est l'usage du dossier, pas un droit du junior de « faire plaisir » en avançant. 13e mois sur un calendrier séparé : deuxième mini-cycle, mêmes contrôles. CSP : SLA client plus tôt que l'échéance légale — on respecte le plus contraignant.",
      exercice:
        "Votre unique date écrite est « payer le 28 ». Gel, calcul, visa, DSN n'existent pas. Proposez cinq dates internes pour janvier 2026 ANP, et justifiez l'ordre.",
      correction:
        "Exemple cohérent : gel 18 à 12 h (faits) → calcul 20 (résultats) → anomalies 22 → visa+préparation SEPA/DSN 24 → dépôt DSN habilité 25 (selon échéance dossier, à relire) → paiement 28. L'ordre respecte faits → calcul → contrôle → visa → déclaration/paiement. Inverser visa et calcul, ou paiement et contrôle, est refusé. Les dates DSN exactes se relisent sur source, elles ne se bluffent pas.",
    }),
    pack({
      title: "Collecter et vérifier : le mois se gagne avant la saisie",
      description:
        "Obtenir des faits exploitables, les rapprocher, refuser le trou noir du 17 au soir.",
      minutes: 20,
      objectifs:
        "Vous organisez la collecte (qui, quoi, quand, format), vous vérifiez l'exhaustivité et la cohérence, et vous documentez ce qui manque sans inventer la donnée.",
      theorie:
        "Collecter n'est pas « attendre les mails ». C'est un processus : liste des émetteurs (managers, RH, badgeage, salariés pour certains arrêts), format (fichier, portail, pièce PDF), date de gel, relance à J-3 et J-1, copie du responsable à l'heure H. Un canal WhatsApp non habilité n'est pas une collecte. Un tableur sans matricule non plus. Un fichier reçu le 17 sans visa n'est pas « presque bon » : il est incomplet.\n\nVérifier, c'est confronter. Planning vs CP saisis. Badgeage vs HS. RH vs entrées. Boîte mail vs arrêts. Effectif 28 vs 28 lignes. La vérification précède la saisie : saisir d'abord, contrôler après, c'est corriger deux fois. Un fichier d'HS sans visa manager est une pièce incomplète, pas une variable. Une pièce illisible (scan coupé, dates absentes) se refuse poliment, elle ne se devine pas.\n\nCe qui manque à l'heure du gel devient, selon la procédure : report n+1, ou exception Marc, ou absence de la variable (donc pas de paiement de cette HS). Le junior n'est pas un traducteur d'intentions (« ils font toujours 8 heures le samedi »). Il est gardien du gel. Garder le gel, ce n'est pas de la rigidité gratuite : c'est permettre le calcul, le contrôle et le visa dans le calendrier annoncé aux 28 personnes.\n\nConfidentialité dès la collecte : un fichier d'absences maladie ne se pose pas sur une imprimante d'atelier. Un motif médical détaillé n'a pas à figurer dans le tableur de HS. Minimum de données. La collecte est déjà un traitement de données personnelles.",
      methode:
        "Tableau de collecte : émetteur, contenu, reçu O/N, complet O/N, visa O/N. Relance type, factuelle, datée, copiée. À 12 h le jour J, photo du tableau : c'est la preuve du gel, pas un souvenir.",
      extra: [
        code(`COLLECTE JANVIER 2026 — ANP 28 personnes

Émetteur            Contenu                    Reçu  Complet  Visa  Action si NON au gel
RH                  Entrées/sorties, avenants  O     O        —     Bloquer in/out
RH / salariés       Arrêts, pièces             O/N   ANP-25   —     Consigne écrite arrêt sans pièce
Planning            CP                         O     O        O     Ne pas inventer
Chef atelier ANP-28 HS production              N     N        N     Report février (pas d'invention)
Managers bureaux    Primes / HS                O     O        O     —
Compta / huissier   Saisies, acomptes          O     ANP-26   O     Net négatif = revue Marc
Badgeage            Heures (si existant)       N.A.  —        —     ANP n'en a pas : ne pas inventer

Relance type 18/01 11h :
Objet : Paie janvier — gel 18/01 12h — HS atelier manquantes
Corps : Sans fichier visé à 12h, les HS atelier ne seront pas en paie de janvier (report février).
Copie Marc. Pas d'accusation. Pas de « comme d'habitude ».`),
      ],
      exemple:
        "Le 18 à 11 h 50, ANP-28 envoie « mets 10 HS à tout le monde, je signerai lundi ». Ce n'est pas un fichier visé. Lina refuse la saisie, applique le gel, propose lundi = février ou exception Marc si préjudice. Marc refuse l'exception. Collecte = pièce, pas un SMS.",
      erreurs:
        "Relancer une fois le 5 et plus jamais. Accepter un tableur sans matricule. Saisir une moyenne d'HS. Laisser la collecte dans la boîte mail personnelle. Oublier les arrêts longs (ANP-24) « parce que déjà en décembre ».",
      particuliers:
        "Cabinet : la collecte est chez le client ; votre gel est le vôtre, le sien peut être plus tard — contrat de mission. Télétravail managers : un portail vaut mieux que 28 mails. Grève / fermeture : faits RH, pas une déduction junior.",
      exercice:
        "À 12 h 05 le 18, vous avez 26/28 dossiers variables OK, HS atelier manquantes, pièce ANP-25 reçue. (1) Que saisissez-vous ? (2) Que reportez-vous ? (3) Que bloquez-vous encore ?",
      correction:
        "1. Variables visées des 26, arrêts avec pièces (ANP-25), CP planning, saisie ANP-26 en attente de revue (donnée reçue, traitement pas encore validé).\n2. HS atelier : report, pas de saisie.\n3. Vous ne bloquez pas tout le mois pour les HS ; vous bloquez le paiement d'ANP-26 tant que le net négatif n'est pas décidé ; vous vérifiez ANP-09/16 indépendamment.\nPourquoi : le gel est sélectif par nature de fait, pas une punition collective, et pas une invention partielle.",
    }),
    pack({
      title: "Saisir, calculer, contrôler, valider : la journée de production",
      description:
        "Enchaîner les quatre verbes dans l'ordre, avec brouillon puis réel.",
      minutes: 22,
      objectifs:
        "Vous décrivez une journée de production type (20-24 janvier), vous séparez brouillon et réel, et vous savez quand vous arrêtez de saisir pour contrôler.",
      theorie:
        "Saisir, c'est transcrire un fait déjà vérifié dans le moteur : pas interpréter, pas arrondir une prime, pas « répartir » 10 HS sur l'atelier. Chaque saisie a une pièce. On saisit d'abord les mouvements (ANP-09, ANP-16), les arrêts, les absences, les variables visées. On ne saisit pas un taux. On ne « pré-saisit » pas une HS attendue pour gagner une heure : une donnée non visée n'existe pas encore.\n\nCalculer, c'est demander au moteur d'appliquer le paramétrage. Premier calcul = brouillon. Il sert aux contrôles, pas à la banque. On nomme l'export BROUILLON_20. Un second calcul après corrections = encore un brouillon jusqu'au visa. Le réel est un statut, pas un espoir. Confondre brouillon et réel, c'est envoyer un SEPA sur un fichier qui bougera encore.\n\nContrôler : checklist module 23, sentinelles, variations, unicité SEPA, Excel. On arrête de saisir pendant le contrôle : une HS ajoutée au milieu d'un TCD fausse le verdict. Lot de corrections, puis recalcul, puis re-contrôle. Pas cinquante micro-saisies. Le contrôle d'un junior qui n'ouvre pas ANP-26 parce que « 27 sont jolis » n'est pas un contrôle.\n\nValider : visa junior (préparé) puis N+1. Sans visa, pas de SEPA. Le simulateur pédagogique LOU, s'il est utilisé sur un cas sentinelle, n'est pas le réel ANP : c'est un attendu d'apprentissage. Un écart LOU / moteur commercial (s'il y en a un en poste) s'analyse, il ne se triche pas en changeant un taux.",
      methode:
        "Planning de la fenêtre 20-24 : 20 saisie + calcul brouillon + contrôles de masse ; 21 in/out et arrêts ; 22 anomalies ; 23 sentinelles et SEPA de contrôle ; 24 visa, gel définitif du calcul. Pause avant les 20 derniers contrôles. Journal d'anomalies ouvert en permanence.",
      extra: [
        code(`FENÊTRE DE PRODUCTION — 20 au 24 janvier 2026 — Lina (junior) / Marc (visa)

20/01  Saisie faits visés. Calcul BROUILLON. Effectif 28 ? Masses ? Nets min/max ?
       ANP-09 prorata selon RÈGLE DOSSIER (19/31 = exercice Excel, pas auto-vérité).
21/01  ANP-16 STC préparé (éléments), ANP-24/25 arrêts, ANP-15 injustifié avec RH.
22/01  ANP-26 net -40 € → journal + Marc. Doublons. Sentinelles SMIC / PMSS.
23/01  Recalcul après décisions. SEPA de contrôle, NB.SI.ENS unicité.
24/01  Checklist complète. Visa Lina. Revue Marc. Exceptions écrites (HS atelier → fév.).
       SEPA habilité. DSN préparée. PAS D'ENVOI banque sans Marc.

Interdit le 24 à 19 h : nouvelle rubrique, nouveau taux, invention d'HS.`),
      ],
      exemple:
        "Le 22, Lina a 27 OK et ANP-26 KO. Elle ne retarde pas les 27 contrôles « on verra le 26 à la fin ». Elle clôt le lot des 27 en brouillon documenté, et tient ANP-26 dans le journal. Marc tranche le 24. Production = lots, pas une boule unique qui n'explose que le dernier jour.",
      erreurs:
        "Saisir pendant que le TCD tourne. Calculer 12 fois sans noter pourquoi. Valider dans l'outil sans checklist. Utiliser le premier brouillon comme SEPA. Comparer un net brouillon au salarié par mail le 20.",
      particuliers:
        "Outil qui « valide » tout seul à une heure : connaître l'heure, ne pas la découvrir. Multi-dossiers : un dossier par fenêtre, pas 8 calculs entrelacés. Incident technique éditeur : escalation support + Marc, pas un Excel de paie de guerre maison.",
      exercice:
        "À 16 h le 23, Marc n'a pas tranché ANP-26, les HS ne sont toujours pas là, ANP-09 est juste, PMSS OK. Que contient le mail de Lina à Marc pour le rendez-vous de 9 h le 24 ?",
      correction:
        "Objet : Clôture 24/01 — 2 points de décision, 26 bulletins prêts.\nCorps : (1) ANP-26 net −40 €, pièces saisie, demande de consigne (étalement / exclusion virement / autre) — bloquant. (2) HS atelier absentes au gel 18/01, proposition report février, pas d'invention. (3) Sentinelles PMSS/SMIC OK, entrée ANP-09 OK, STC ANP-16 prêt à viser. (4) Checklist jointe, masses brouillon. Pas de SEPA avant visa. Pourquoi : un mail de clôture est une liste de décisions, pas un roman ni un « tout va bien ».",
    }),
    pack({
      title: "Bulletins, paiement, DSN, comptabilité, archive : les livrables",
      description:
        "Enchaîner les sorties du cycle sans les confondre, ni les précipiter.",
      minutes: 20,
      objectifs:
        "Vous ordonnez éditions, virement, DSN, journal comptable et archivage. Vous savez qui fait quoi, et ce qu'un junior ne dépose pas seul.",
      theorie:
        "Cinq livrables distincts sortent de la clôture. Les confondre, c'est envoyer un PDF et croire que l'URSSAF est informée, ou payer et oublier le journal.\n\nBulletins : document du salarié, mentions (BOSS / C. trav. R. 3243-1), MNS affiché dans le cadre 2026. Canal habituel (coffre, mail habilité, retrait). Contrôle des homonymes (deux Jean Dupont n'existent pas chez ANP, mais ANP-07 Garcia et un homonyme interne d'un autre dossier cabinet, oui). Un bulletin n'est pas la DSN.\n\nPaiement : fichier SEPA = nets à payer validés, unicité, IBAN du dossier RH pas d'un mail. Envoi par habilité, date interne ANP le 28 janvier. Un acompte déjà versé a été déduit. Pas de second fichier « oubliés » le 29 sans process.\n\nDSN : canal déclaratif. Préparation junior, relecture CRM, dépôt par Marc dans la simulation. Dates : relire net-entreprises pour le dossier, ne pas bluffer une heure dans un quiz. Une DSN n'est pas un export Excel. Un rejet se traite, il ne s'ignore pas.\n\nComptabilité : journal de paie, totaux = masses visées, charges, 421, 43x, PAS. La compta n'a pas à « corriger un net ». Un écart de 0,01 € × 28 se discute, il ne se balaie pas.\n\nArchive : bulletins, DSN (accusés), SEPA de contrôle, checklist, journaux. GED habilitée. Pas Téléchargements, pas USB perso. Durées : politique interne + cadre légal, le junior ne purges pas.",
      methode:
        "Ordre recommandé ANP : visa → bulletins générés mais non diffusés → SEPA contrôlé → diffusion bulletins selon process (souvent le jour de paie ou la veille) → DSN déposée par habilité → journal à la compta → classement. Si la DSN part avant le visa, vous avez déclaré un mois non accepté.",
      extra: [
        code(`LIVRABLES DE CLÔTURE — ANP janvier 2026

1. Checklist visée          GED/Paie/2026-01/  auteur Lina+Marc
2. Journal d'anomalies      idem
3. Export masses            effectif 28, brut, net, cotisations
4. Bulletins                coffre / canal habituel, homonymes contrôlés
5. SEPA                     unicité OK, habilité, 28/01
6. Accusé DSN               dépôt Marc, CRM lus
7. Journal comptable        totaux = masses, destinataire compta
8. STC ANP-16               pièces fin de contrat, process à deux
Ne pas fusionner 4, 5 et 6 en « j'ai fait la paie ».`),
      ],
      exemple:
        "Le 28, les PDF partent, le SEPA aussi. La DSN n'est pas déposée (Marc absent sans délégation). Les salariés sont payés, l'État social n'est pas déclaré. Lina n'improvise pas un dépôt. Elle alerte la direction / le binôme selon la procédure d'absence. Un livrable manquant n'est pas rattrapé par un autre.",
      erreurs:
        "Diffuser les bulletins le 20 (brouillon). Envoyer le SEPA à partir d'Excel non rapproché. Laisser la DSN « pour lundi » sans calendrier. Classer les PDF dans un Drive « tout le monde ». Oublier le journal comptable jusqu'au lettrage URSSAF de mars.",
      particuliers:
        "Coffre-fort salarié externe : habilitations, pas un e-mail BCC. Paiement hors SEPA (chèque, étranger) : process à part, encore plus tracé. DSN événementielle (arrêt, fin de contrat) : ne pas attendre la DSN mensuelle si le process dit le contraire — suivre Marc / la procédure, pas un souvenir de formation.",
      exercice:
        "Ordonnez et dites qui : génération PDF, dépôt DSN, envoi SEPA, visa, journal compta. Puis : que se passe-t-il si l'on inverse SEPA et visa ?",
      correction:
        "Visa (Marc, après préparation Lina) → PDF générés (Lina, diffusion selon process) → SEPA (habilité, souvent après ou le jour visé) → DSN (Marc) → journal (Lina prépare, compta intègre). Inverser SEPA et visa = payer un mois non accepté, parfois un net négatif ou un doublon. Pourquoi : le visa est la décision, le SEPA est l'exécution.",
    }),
    pack({
      title: "Régularisations et communication interne : après le 28, le métier continue",
      description:
        "Planifier les réguls, répondre sans divulguer, préparer février dès janvier.",
      minutes: 18,
      objectifs:
        "Vous distinguez une régularisation d'une rustine. Vous savez quoi dire à un salarié, à un manager, à la compta. Vous ouvrez février avant d'avoir oublié janvier.",
      theorie:
        "Le cycle ne meurt pas le jour du virement. Post-clôture : CRM DSN, réclamations, lettrage, trop-perçus, oubli de variable reporté (HS atelier en février), STC encore ouvert, contrôle de cohérence comptable. Une régularisation est un fait du mois suivant (ou une DSN de substitut selon cas expert) : pièce, calcul, information, trace. Ce n'est pas « enlever 50 € en silence parce que janvier était trop généreux ».\n\nCommunication interne. Salarié : faits, bulletin sous les yeux, pas de comparaison à un collègue, pas de conseil fiscal sur le PAS. Manager : dates du prochain gel, refus d'invention, pas de nets nominatifs. Compta : masses, exceptions, pas un cours de CSG. Direction : alertes (net négatif évité, HS reportées, absence de Marc un 25) en langage de risque, pas de jargon d'écran.\n\nFévrier se prépare en janvier : HS reportées déjà listées, ANP-16 ne doit plus être en effectif, ANP-09 en mois complet, arrêts en cours, saisie ANP-26 étalement le cas échéant, paramètres 2026 déjà chargés (on ne recommence pas le PMSS). Le journal d'anomalies de janvier est l'entrée de février.\n\nTon : vouvoiement, factuel, daté. Un mail de régul est une pièce. L'humour, les emojis, le « boulette » n'ont pas leur place sur un trop-perçu.",
      methode:
        "File post-clôture : 3 colonnes (CRM / réclamations / réguls planifiées). Chaque item : mois d'imputation, qui informe, qui vise. Relance managers J+2 du mois suivant avec les reports déjà connus (HS janvier → variables février).",
      extra: [
        code(`MAILS TYPES — ton professionnel (fictif ANP)

1) Salarié ANP-21 (tickets resto, 28/01)
Objet : Paie janvier 2026 — titres-restaurant
Vous avez signalé une absence de titres. Nous vérifions les jours travaillés de janvier
selon la règle d'attribution du dossier (présence), pas une faveur. Retour le ....
Nous ne recréons pas un droit hors règle.

2) Manager ANP-28 (après gel, HS)
Objet : HS janvier — report février
Les HS atelier n'ont pas été reçues visées au gel du 18/01 12h. Elles ne sont pas
dans la paie de janvier. Envoyez un fichier visé pour février avant le gel du ....
Pas de saisie rétroactive de janvier.

3) Compta (24/01)
Objet : Journal paie janvier 2026 — masses visées
Effectif 28. Masse brut .... €. Net à payer .... €. Exception : ANP-26 (consigne Marc).
HS atelier absentes (report). Fichier joint. Lettrage URSSAF à rapprocher après DSN.

Interdit : joindre T_PAIE nominatif à tout le management.`),
      ],
      exemple:
        "ANP-21 écrit le 28 : « je n'ai pas mes tickets, je veux 12 titres ». Lina ouvre les jours travaillés, applique la règle, répond 8 titres si 8 jours éligibles, pas 12 par sympathie. Elle ne promet pas un rattrapage « pour la prochaine fois » hors règle. La communication a évité une variable fantôme en février.",
      erreurs:
        "Répondre avant d'ouvrir le bulletin. Dire « c'est le logiciel ». Informer un manager du net d'ANP-26. Oublier les HS reportées en février. Régulariser un trop-perçu sans information.",
      particuliers:
        "Réclamation collective (plusieurs mails nets janvier) : souvent PAS ou paramètre 2026 — réponse type visée Marc, pas 28 versions. Contentieux : plus de mail junior, canal RH/juriste. Presse / CSE qui demande des masses : habilitation, agrégats, pas le fichier 28 lignes.",
      exercice:
        "Rédigez en 8 lignes le mail à ANP-26 après décision Marc : pas de virement négatif, étalement de la saisie selon barème, bulletin à 0 € de net ce mois (hypothèse pédagogique de décision — pas une règle nationale). Puis dites ce que le mail ne contient pas.",
      correction:
        "Objet : Paie janvier 2026 — net à payer. Corps : après contrôle, le net de janvier est à 0 en raison d'une saisie sur salaire et des cotisations/mutuelle du dossier. Un virement négatif n'est pas effectué. L'étalement suit le barème / la consigne visée (joindre ou renvoyer vers le service habilité). Permanence pour explication factuelle du bulletin. Ne contient pas : le barème détaillé d'un collègue, une insulte à l'huissier, une baisse de CSG, un « on a arrangé », le nom d'un autre salarié. Pourquoi : information + trace, pas un débat de café.",
    }),
    lesson({
      title: "Simulation : 28 personnes, janvier 2026, jour par jour",
      description:
        "Vivre le cycle complet d'Atelier Nord Paie, de l'ouverture à la post-clôture.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous parcourez un mois réel fictif à 28 salariés, vous identifiez à chaque date le geste, la pièce, le risque et l'autonomie junior. Vous reliez logiciels, Excel, paramétrage et checklist des modules 20 à 23."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Atelier Nord Paie : menuiserie industrielle fictive, un établissement, 28 salariés au 31 janvier 2026, CCN Bois (aucune clause inventée : minima et maintien se lisent dans le texte, ils ne sortent pas de ce scénario). Moteur : générique pédagogique, pas un clone Sage/Silae/Cegid/ADP/SAP/Workday/PayFit/Nibelis. Excel de contrôle : extrait 20 lignes vu au module 21 + 8 salariés ici pour l'effectif 28. Clôturer l'extrait, c'est oublier arrêts, saisie et chef d'atelier. Clôture interne 24, paiement 28, DSN préparée le 24, déposée par Marc.\n\nParamètres janvier 2026 : PMSS 4 005 €, SMIC 12,02 € / 1 823,03 €, maladie patronale plein 13 %, AF plein 5,25 %, FNAL 0,10 % plafonné (28 < 50), RGDU non appliquée sauf mention. AT/MP et mutuelle 20/40 € : hypothèses de dossier, pas des taux nationaux. Nets cités : pédagogiques lorsqu'ils viennent du jeu Excel ; le net −40 € d'ANP-26 est une hypothèse de scénario. Un junior qui « aligne » ces nets sur un souvenir de décembre détruit le mois de bascule des barèmes.\n\nVous êtes Lina. Marc vise. Le chef d'atelier est ANP-28. L'entrée est ANP-09 le 13. La sortie est ANP-16 le 31. L'arrêt nouveau est ANP-25 dès le 6, pièce le 8. L'arrêt long est ANP-24. La saisie sur salaire est ANP-26. Les SMIC sentinelles : ANP-03, ANP-15, ANP-27. Le PMSS sentinelle : ANP-13. Le cycle ci-dessous n'est pas un tutoriel d'écran commercial. C'est une chronologie de faits, de pièces et de visas."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lisez le journal comme une checklist. Pour chaque jour : fait, pièce, risque, qui décide. Puis l'exercice final. Ne sautez pas au 24."
        ),
        code(`EFFECTIF 28 — Atelier Nord Paie — janvier 2026 (fictif)

ANP-01 BERNARD Camille     NC   2100,00
ANP-02 DIALLO Amadou       NC   1950,00   2 j CP
ANP-03 MOREAU Lea          NC   1823,03   SMIC 35 h (paramètre URSSAF 01/01/2026)
ANP-04 KOWALSKI Piotr      NC   2400,00   1 j maladie
ANP-05 MARTIN Hugo         Cad  2800,00
ANP-06 NDIAYE Aicha        NC   2200,00
ANP-07 GARCIA Ines         NC   1900,00   3 j CP
ANP-08 LEFEVRE Thomas      Cad  3500,00
ANP-09 CHEN Wei            NC   2100,00   ENTRÉE 13/01 — prorata RÈGLE DOSSIER
ANP-10 PETIT Manon         NC   2000,00   5 j CP
ANP-11 ROSSI Marco         NC   2300,00
ANP-12 BENALI Sara         NC   1850,00
ANP-13 DURAND Paul         Cad  4005,00   = PMSS janvier 2026 — sentinelle T2
ANP-14 OCONNOR Niamh       NC   2600,00   2 j maladie
ANP-15 TRAORE Ibrahim      NC   1823,03   SMIC + 1 j injustifié (consigne RH)
ANP-16 LAMBERT Chloe       NC   2450,00   SORTIE 31/01 — STC à deux
ANP-17 FERNANDEZ Diego     NC   2150,00
ANP-18 MULLER Greta        Cad  3200,00   4 j CP
ANP-19 BAKKER Jeroen       NC   2050,00
ANP-20 SILVA Ana           NC   1980,00
ANP-21 FAURE Lucie         NC   2100,00   réclamation titres-resto le 28
ANP-22 HENRY Baptiste      NC   1950,00   HS atelier (si visées — ici NON au gel)
ANP-23 IBRAHIM Yasmina     Cad  3600,00
ANP-24 JOLY Nathan         NC   1880,00   arrêt en cours depuis décembre
ANP-25 KLEIN Eva           NC   2050,00   arrêt début 6/01, pièce 8/01
ANP-26 LOPEZ Ramon         NC   2200,00   saisie + mutuelle → net -40 € (scénario)
ANP-27 MARCHAND Julie      NC   1823,03   SMIC 35 h sentinelle
ANP-28 NOEL Victor         NC   2300,00   chef d'atelier — HS équipe non envoyées

JOURNAL JOUR PAR JOUR

Jeu 02/01  Ouverture. Lina vérifie PMSS moteur 4005, SMIC 12,02 / 1823,03, maladie 13 %,
           AF 5,25 %, FNAL 0,10 %. Journal de paramétrage : lignes janvier visées Marc.
           Liste in/out : ANP-09 (13), ANP-16 (31). Arrêts : ANP-24. Relire CRM DSN décembre.
           Risque : reconduire décembre. Décision : aucun taux au feeling.

Lun 05/01  Relance managers, gel 18/01 12h. RH : DPAE ANP-09 ? Sans DPAE, alerte, pas d'entrée « on verra ».
           Excel : préparer T_PAIE 28 lignes (pas l'extrait 20 du module 21 seul).

Jeu 08/01  Pièce ANP-25 (arrêt 6/01). Ouvrir maintien : LIRE CCN/loi, ticket Marc, pas 90 % souvenir.
           Signalement DSN selon consigne. ANP-24 : vérifier IJ/subrogation encore justes.

Lun 13/01  ANP-09 arrive, 35 h, 2100 €. Dossier, mutuelle 20/40 (hypothèse contrat), profil NC.
           Premier bulletin prorata selon RÈGLE DOSSIER (sous revue si doute).
           Classification : RH, pas Lina. Contrôler que le moteur n'a pas un mois complet.

Jeu 16/01  Point intermédiaire effectif : 27 présents + 1 entrée saisie = 28 lignes de travail.
           Relance J-2 HS atelier, copie Marc.

Dim 18/01  12h GEL. HS ANP-28 absentes. Photo du tableau de collecte. Pas d'invention.
           Exception ? Non, pas à ce stade.

Mar 20/01  Saisie des faits visés. Calcul BROUILLON. Contrôles :
           Effectif 28. Sentinelles ANP-03/15/27 ≥ 1823,03. ANP-13 T2 = 0.
           ANP-09 ≠ 2100 plein mois. ANP-26 net -40 € → journal, pas de rustine.
           Excel : RECHERCHEX, NB.SI.ENS unicité, masses. Extrait 20 ≠ clôture 28.

Jeu 22/01  Revue ANP-26 avec Marc : pas de virement négatif. Consigne étalement (décision interne
           de scénario, pas une norme nationale). Recalcul ANP-26.
           ANP-15 injustifié : consigne RH écrite. ANP-16 : dossier STC ouvert (ne pas attendre le 31).

Ven 24/01  Checklist module 23. HS atelier = exception écrite « report février ».
           Visa Lina (préparé). Revue Marc. SEPA unicité OK, non envoyé. DSN préparée.
           Journal comptable. PDF générés, non diffusés. Journal d'incidents à jour.

Sam 25/01  Marc dépose la DSN. Lina assiste. CRM. Une HS « tardive » refusée : février.
           Diffusion bulletins selon process (souvent liée au paiement — suivre ANP, pas un forum).

Mar 28/01  Paiement. Permanence. ANP-21 tickets : vérifier jours, pas recréer un droit.
           Pas d'écran ouvert en open space. Homonymes : N.A. ici, réflexe quand même.

Ven 31/01  ANP-16 : STC à deux, CP, préavis travaillé, docs fin, DSN de fin selon process.
           ANP-16 ne doit plus être un CDI « oublié » en février.

Post       02-05/02 : CRM, lettrage URSSAF/compta, HS atelier en collecte février,
           ANP-09 mois complet, ANP-26 suivi étalement, ticket trop-perçu novembre s'il reste.
           Préparer gel février. Ne pas « se reposer sur le vert de janvier ».`),
        note(
          "Mutuelle 20/40, AT/MP, maintien CCN, net −40 €, étalement de saisie : hypothèses de scénario ou renvois au texte. PMSS, SMIC, maladie 13 %, AF 5,25 %, FNAL 0,10 % <50 : paramètres officiels janvier 2026. Simulateur LOU ≠ logiciel commercial. Pas de certification éditeur."
        ),
        h("Exemple professionnel"),
        t(
          "Le 23, ANP-28 insiste : « mets les HS, je signe demain ». Lina oppose le gel du 18, propose février, copie Marc. Le 24, pas de signature. Les HS ne sont pas dans le SEPA. ANP-22 n'est pas lésé « par Lina » : il l'est par l'absence de pièce à l'heure H. La communication du 5 et du 16 a été faite. Le cycle a tenu."
        ),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t(
          "Vivre le mois le 24. Traiter ANP-16 le 31 au soir. Clôturer sur l'extrait Excel de 20. Inventer les HS. Laisser −40 € partir. Répondre à ANP-21 sans ouvrir les jours. Reconduire les taux de décembre. Déposer la DSN seul « Marc étant en réunion »."
        ),
        h("Situations particulières"),
        t(
          "Marc absent le 24 : délégation écrite, binôme, ou report de paiement selon pouvoir — Lina n'est pas responsable paie par accident. Panne moteur le 23 : pas de paie Excel maison pour 28 personnes ; plan de continuité interne. Contrôle URSSAF en février : on sort checklist, journaux, sources de taux, pas une reconstitution orale."
        ),
        h("Mise en pratique"),
        t(
          "À partir du journal 28 personnes : (1) quatre actes que Lina mène seule ; (2) quatre actes Marc ; (3) trois bloquants qui auraient empêché le visa du 24 s'ils étaient restés ouverts ; (4) mail de relance HS du 16 janvier ; (5) que faire le 20 si ANP-27 affiche 1 810 € de brut ; (6) pourquoi l'extrait Excel 20 lignes ne clôture pas."
        ),
        h("Correction détaillée"),
        t(
          "1. Seule : relances, ouverture dossiers, saisie sur pièces, Excel de contrôle, journal, préparation SEPA/DSN/checklist, permanence factuelle.\n2. Marc : paramétrage, dépôt DSN, exception de gel, net négatif ANP-26, interprétation maintien CCN, visa paiement, STC complexe, incident données.\n3. Bloquants : ANP-26 négatif non décidé ; PMSS/SMIC faux ; doublon SEPA ; ANP-09 en mois complet ; in/out ANP-16 non ouvert ; taux modifié au feeling.\n4. Mail 16/01 : objet gel 18/01 12h HS atelier ; rappel date ; conséquence report ; copie Marc ; sans accusation.\n5. 1 810 < 1 823,03 SMIC mensuel 35 h 01/01/2026 : bloquer, vérifier quotité/absence, ticket, pas de clôture sentinelle.\n6. 20/28 = exercice Excel, pas l'effectif : ANP-21 à 28 (dont arrêts, saisie, chef d'atelier, 3e SMIC) manqueraient. Clôturer 20, c'est oublier 8 bulletins.\nPourquoi : le cycle est une chronologie de faits contrôlés, pas un sprint de PDF."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Cycle mensuel de paie",
      description: "Vérifier l'ordre du cycle, le gel, les livrables et la simulation 28 personnes.",
      passing_score: 70,
      questions: [
        q({
          question: "Quel ordre est correct ?",
          options: [
            "A. Payer, puis saisir les absences, puis contrôler",
            "B. Collecter et vérifier, saisir, calculer, contrôler, valider, puis paiement et DSN",
            "C. DSN d'abord, le moteur suivra",
            "D. Clôturer l'extrait Excel de 20, les 8 autres « s'aligneront »",
          ],
          correct: 1,
          explanation:
            "Faits → calcul → contrôle → visa → livrables. Payer avant de saisir, déclarer avant de calculer, ou clôturer 20/28, sont des fautes de cycle.",
        }),
        q({
          question: "Au gel du 18 janvier 12 h, les HS atelier manquent. Lina :",
          options: [
            "A. Saisit 8 h « comme d'habitude »",
            "B. N'invente pas ; report février sauf exception écrite de Marc",
            "C. Décale le gel pour tout le monde sans visa",
            "D. Baisse le SMIC pour compenser",
          ],
          correct: 1,
          explanation:
            "Le gel sans pièce = pas de variable. Pas d'habitude, pas de compensation par le SMIC, pas de décalage unilatéral.",
        }),
        q({
          question: "Qui dépose la DSN dans la simulation ANP ?",
          options: [
            "A. Lina seule dès que le calcul est vert",
            "B. ANP-28, chef d'atelier",
            "C. Marc, après revue ; Lina prépare et assiste",
            "D. L'URSSAF, automatiquement le 28",
          ],
          correct: 2,
          explanation:
            "Même règle qu'au module métier : le junior prépare, le responsable dépose, sauf délégation écrite.",
        }),
        q({
          question: "ANP-09 entrée le 13 janvier, brut contrat 2 100 €. Un brut versé de 2 100 € le 20 janvier :",
          options: [
            "A. Est forcément juste, le contrat dit 2 100",
            "B. Est un KO probable de prorata : bloquer et appliquer la règle du dossier",
            "C. Doit être aligné de force sur 19/31 du module Excel, seule règle légale",
            "D. Se régularise en silence en décembre 2027",
          ],
          correct: 1,
          explanation:
            "Entrée en cours de mois : mois complet = KO. Le 19/31 est une hypothèse Excel, pas la règle unique. Pas de silence jusqu'en 2027.",
        }),
        q({
          question: "ANP-26, net −40 € le 22 janvier. Bloquant ?",
          options: [
            "A. Non, la banque arrondira",
            "B. Oui : revue Marc, pas de virement négatif improvisé, journal, puis recalcul",
            "C. Non si le salarié est d'accord par SMS",
            "D. Oui, donc Lina coupe la CSG",
          ],
          correct: 1,
          explanation:
            "Net négatif = bloquant de clôture. SMS ≠ procédure. CSG intouchable pour arranger un net.",
        }),
        q({
          question: "L'extrait Excel de 20 salariés du module 21 :",
          options: [
            "A. Suffit à clôturer ANP",
            "B. Est un jeu pédagogique ; la simulation cycle exige 28 lignes, dont ANP-21 à 28",
            "C. Remplace la DSN",
            "D. Est un export Silae certifié",
          ],
          correct: 1,
          explanation:
            "Le module 21 le dit : 20/28 = extrait. Clôturer 20 oublie arrêts, saisie, chef d'atelier, 3e SMIC. Pas une certif éditeur.",
        }),
        q({
          question: "Quel livrable n'est pas remplacé par l'envoi des PDF de bulletins ?",
          options: [
            "A. Rien, les PDF suffisent à l'URSSAF",
            "B. La DSN, le SEPA, le journal comptable et l'archive de clôture",
            "C. Uniquement le café de l'atelier",
            "D. Le gel des variables",
          ],
          correct: 1,
          explanation:
            "Cinq livrables distincts. Les PDF ne déclarent pas, ne virent pas, n'écrivent pas le 641. Le gel est en amont.",
        }),
        q({
          question: "ANP-27 à 1 810 € brut, temps plein 35 h du dossier, 20 janvier 2026 :",
          options: [
            "A. Arrondi acceptable",
            "B. KO sentinelle SMIC (1 823,03 € URSSAF 01/01/2026) : bloquer et analyser",
            "C. Normal, le SMIC a baissé",
            "D. Lina baisse le PMSS pour compenser",
          ],
          correct: 1,
          explanation:
            "SMIC mensuel 1 823,03 €. 1 810 € n'est pas un arrondi de clôture. Le SMIC n'a pas baissé. On ne touche pas au PMSS.",
        }),
        q({
          question: "Une régularisation d'HS atelier oubliées en janvier se fait :",
          options: [
            "A. En réécrivant janvier déjà payé, en silence",
            "B. En février, pièce visée, trace, information adaptée, sous revue",
            "C. En diminuant les cotisations de février",
            "D. Jamais : le gel a tout détruit",
          ],
          correct: 1,
          explanation:
            "Report = régul du mois suivant, pas réécriture silencieuse, pas bricolage de cotisations. Le gel a empêché l'invention, pas le droit à une HS visée plus tard.",
        }),
        q({
          question: "Cette simulation et ce parcours logiciel :",
          options: [
            "A. Certifient Sage, Silae et Cegid",
            "B. Constituent un titre RNCP",
            "C. Enseignent un cycle et des contrôles sur un moteur pédagogique, distinct des logiciels commerciaux, sans certification éditeur",
            "D. Autorisent le junior à déposer la DSN et à modifier l'URSSAF",
          ],
          correct: 2,
          explanation:
            "Attestation LOU ≠ RNCP ≠ diplôme d'État ≠ certif éditeur. Le junior prépare ; il ne devient pas l'URSSAF. Le simulateur n'est pas un clone commercial.",
        }),
      ],
    }),
  ],
};
