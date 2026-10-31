import { pack, quizLesson, q, code, note } from "../lib.mjs";

export default {
  position: 3,
  title: "Comprendre le bulletin de paie",
  description:
    "Lire un bulletin de A à Z : mentions, brut, cotisations, net imposable, PAS, net à payer, montant net social, cumuls, et contrôler avec des bulletins fictifs janvier 2026.",
  lessons: [
    pack({
      title: "Mentions obligatoires : R. 3243-1 et BOSS",
      description: "Savoir ce qui doit figurer sur le bulletin et ce qu'un junior contrôle avant diffusion.",
      minutes: 20,
      objectifs:
        "À la fin de cette leçon, vous savez que le bulletin est un document réglementé (L. 3243-1, R. 3243-1, BOSS), vous distinguez mention obligatoire et présentation, et vous refusez de « simplifier » un bulletin en ôtant une mention.",
      theorie:
        "L'employeur remet un bulletin lors du paiement du salaire. Le salarié ne peut pas renoncer à cette remise (L. 3243-1). Les mentions figurent notamment à l'article R. 3243-1 du Code du travail. Le BOSS (règles générales relatives au bulletin ; montant net social) précise la présentation attendue par l'administration. Un modèle provisoire de bulletin est prolongé jusqu'au 31/12/2026 : on ne bascule pas d'office sur un projet 2027.\n\nLe bulletin n'est pas un ticket de caisse. Il identifie les parties, la période, l'emploi, la classification, le temps de travail, la rémunération brute détaillée, les cotisations et contributions, le net imposable, le PAS, le net à payer, le montant net social, des cumuls. Il doit permettre au salarié de comprendre ce qui lui est versé et à l'administration de contrôler. Un logiciel « joli » qui omet le MNS ou le net imposable n'est pas conforme pour autant.\n\nConséquence paie : avant diffusion, un contrôle de forme (mentions) s'ajoute au contrôle de fond (calculs). Un bulletin exact en centimes mais sans identification de l'employeur, sans période, ou sans MNS, reste un document non conforme. La remise se fait par un canal qui préserve la confidentialité (espace sécurisé, pas une imprimante d'open space abandonnée, pas un e-mail collectif).\n\nLe junior ne rédige pas un modèle de bulletin alternatif. Il vérifie que le paramétrage d'édition contient les mentions, que le bulletin de test d'un nouvel embauché les affiche, et qu'aucune « version manager » allégée n'est envoyée à la place du bulletin salarié.",
      methode:
        "Contrôle de forme, chaque nouveau paramétrage et par sondage en clôture :\n1. Identité employeur (nom, adresse, SIRET, code APE/NAF, URSSAF, convention).\n2. Identité salarié (nom, emploi, position/coefficient, date d'entrée).\n3. Période, dates de paiement.\n4. Décompte du temps (heures, HS, absences).\n5. Brut détaillé, cotisations S/P, assiettes et taux visibles selon modèle.\n6. Net imposable, PAS (taux, assiette, montant), net à payer, MNS.\n7. Cumuls.\n8. Mentions légales d'information (conservation, etc. selon modèle BOSS / R. 3243-1).\nToute mention manquante = ticket paramétrage, pas une « exception du mois ».",
      extra: [
        code(`CONTRÔLE DE FORME — R. 3243-1 / BOSS (aide-mémoire, texte consolidé à relire)
[ ] Employeur : nom, adresse, SIRET, APE, URSSAF
[ ] CCN / IDCC
[ ] Salarié : identité, emploi, classification, entrée
[ ] Période + date de paiement
[ ] Temps de travail, HS / HC, absences
[ ] Salaire de base et éléments du brut
[ ] Cotisations / contributions (S et P), assiettes, taux
[ ] Net imposable
[ ] PAS : taux, montant
[ ] Net à payer
[ ] Montant net social (modèle jusqu'au 31/12/2026)
[ ] Cumuls annuels
[ ] Canal de remise conforme (L. 3243-1) — pas de renonciation`),
      ],
      exemple:
        "PME 28 personnes. Le dirigeant veut un « bulletin simplifié d'une page pour les ouvriers, sans les lignes patronales, ils ne comprennent rien ». Lina refuse : R. 3243-1 n'autorise pas une version allégée selon la catégorie. On peut accompagner (légende, permanence questions), on n'ampute pas les mentions. Le modèle provisoire BOSS jusqu'au 31/12/2026 s'applique à tous les salariés concernés, pas aux seuls cadres.",
      erreurs:
        "Omettre le MNS. Confondre net à payer et MNS. Envoyer le bulletin au manager « pour qu'il l'explique ». Croire que L. 3243-1 permet une renonciation écrite. Recopier un modèle 2024 sans MNS. Anticiper le modèle 2027 (part patronale mutuelle dans le MNS) comme déjà obligatoire.",
      particuliers:
        "Bulletin électronique : cadre d'accès et de conservation, opposition possible selon les textes. Intérim, multi-établissements : l'émetteur est l'employeur. Acomptes : un bulletin ou un document de paiement selon process, le salaire du mois reste dû avec bulletin. Nature morte du PDF stocké sur un Drive personnel : incident RGPD.",
      exercice:
        "Citez l'article de remise du bulletin, l'article des mentions, et dites si un salarié peut signer « je n'ai plus besoin de bulletin, virez seulement ».",
      correction:
        "Remise : L. 3243-1 (pas de renonciation). Mentions : R. 3243-1, précisées par le BOSS. La signature « virez seulement » est sans effet : l'obligation de remise demeure. Le junior n'archive pas une telle décharge comme une autorisation.",
    }),
    pack({
      title: "Identification employeur, salarié et classification",
      description: "Contrôler l'en-tête du bulletin : SIRET, CCN, emploi, coefficient, dates — avant même le brut.",
      minutes: 18,
      objectifs:
        "Vous savez que l'en-tête est déjà de la paie : un mauvais SIRET, une mauvaise classification ou une mauvaise date d'entrée fausse les organismes, les minima et les droits.",
      theorie:
        "Le haut du bulletin n'est pas décoratif. L'employeur (dénomination, adresse, SIRET, code APE, organisme de rattachement URSSAF) détermine qui déclare, quel taux AT d'établissement, parfois quelle CCN. Un salarié transféré d'un établissement à l'autre sans changement de SIRET dans le logiciel conserve le mauvais taux AT et la mauvaise DSN. La CCN / l'IDCC affichés doivent être ceux du dossier, pas un libellé générique « convention syntec » copié d'un autre client.\n\nLe salarié est identifié (nom, prénom, identifiant interne, n° de sécurité sociale dans les conditions de confidentialité du traitement, emploi, qualification, position ou coefficient, date d'entrée, ancienneté si mentionnée). La classification CCN conditionne le minimum conventionnel, parfois le statut cadre (APEC, prévoyance), parfois des primes. Un coefficient inventé « comme les autres techniciens » est une faute déjà vue au module droit du travail ; sur le bulletin, elle devient une mention fausse, opposable visuellement au salarié et à un contrôle.\n\nConséquence paie : avant de regarder le net, on contrôle que le bulletin parle de la bonne personne, du bon contrat, de la bonne période (janvier 2026 n'est pas décembre 2025 : PMSS 4 005 €). Une homonymie interne (deux Jean Dupont) se traite par identifiant unique, jamais par le seul nom dans l'objet du mail.\n\nLe junior ne « rhabille » pas un libellé d'emploi pour faire plaisir au manager (éviter « manœuvre » vs « technicien ») : le libellé suit le contrat. Un écart contrat / bulletin est un ticket RH.",
      methode:
        "Contrôle d'en-tête, chaque entrée et par sondage :\n1. SIRET et établissement = dossier RH.\n2. IDCC = dossier.\n3. Nom, NIR masqué selon habitudes d'édition, matricule unique.\n4. Emploi + classification = contrat (pas le mail du manager).\n5. Date d'entrée = DPAE / contrat (L. 1221-10 déjà faite).\n6. Période d'emploi = mois civil traité.\n7. Statut cadre oui/non = classification, impact APEC.\nHomonymie : double contrôle du matricule avant envoi.",
      exemple:
        "CSP 1 200 bulletins. Un bulletin part à « Dupont Jean » au lieu de « Dupont Jeanne », même service. Incident de données, même si le net est juste. Le contrôle d'en-tête aurait vu le prénom et le matricule. La clôture rapide n'excuse pas l'incident. Process : liste d'envoi contrôlée sur matricule, pas sur nom.",
      extra: [
        code(`EN-TÊTE PÉDAGOGIQUE — Atelier Nord Paie (fictif)
Employeur     Atelier Nord Paie  |  SIRET 123 456 789 00012  |  APE 1623Z
URSSAF        [rattachement du dossier]     CCN / IDCC : à lire (jamais inventée)
Établissement unique — taux AT : HYPOTHÈSE 1,50 % (pas un taux national)

Salarié       Karim N.  |  matricule 014  |  non-cadre
Emploi        Opérateur  |  classification : celle du CONTRAT (RH)
Entrée        13/01/2026  |  période 01/2026  |  paiement 28/01/2026
Temps         35 h / sem. mensualisé  |  151,67 h de référence temps plein`),
      ],
      erreurs:
        "Envoyer sur le nom sans matricule. Laisser « classification à définir » trois mois. Afficher une CCN d'un autre dossier cabinet. Oublier de changer le SIRET après mutation. Mettre cadre à l'en-tête sans APEC dans le corps, ou l'inverse.",
      particuliers:
        "Nom d'usage / nom de famille : état civil du dossier, pas le badge. Salariés protégés : pas de mention spécifique « DS » sur le bulletin grand public si ce n'est pas une mention due. Mineurs, étrangers : pièces RH avant, pas un libellé d'alerte sur le PDF diffusé.",
      exercice:
        "Le bulletin de Lina affiche « cadre », le contrat « ETAM non-cadre », brut 3 500 €, effectif 80. Quels impacts chiffrés le moteur de référence montre-t-il si l'on passe à cadre, et que faites-vous ?",
      correction:
        "On ne « passe pas à cadre » pour coller au libellé. On alerte RH : le contrat prime. Si le statut était vraiment cadre, le moteur (brut 3 500, effectif 80) donne APEC_s 0,84 €, FNAL 17,50 € (effectif, pas le cadre), net 2 769,75 € vs 2 770,59 € en non-cadre. L'en-tête et le corps doivent dire la même chose. Tant que le contrat est ETAM, bulletin non-cadre, sans APEC.",
    }),
    pack({
      title: "Salaire de base et salaire brut",
      description: "Distinguer le salaire de base contractuel du brut du mois, point de départ de toutes les cotisations.",
      minutes: 20,
      objectifs:
        "Vous reconstituez un brut : base, HS, primes, AEN, retenues d'absence, et vous refusez d'appeler « brut » le net ou le salaire de base seul lorsqu'il y a des variables.",
      theorie:
        "Le salaire de base est l'élément contractuel récurrent (mensuel 2 500 €, ou horaire × heures). Le salaire brut du mois est la somme des éléments assujettis avant cotisations salariales : base, HS/HC majorées, primes, indemnités soumises, avantages en nature, éventuellement rappel, moins les retenues pour absence non rémunérée. Un bulletin peut afficher 2 500 € de base et 2 582,40 € de brut après 4 HS. Cotisations, PAS et DSN partent du brut (et des assiettes dérivées), pas du seul salaire de base.\n\nConséquence : contrôler un bulletin commence par le brut. Si le brut est faux, tout est faux. Si le brut est juste et le net faux, le problème est dans les cotisations, le PAS ou une retenue. Les bulletins de référence de ce module utilisent un brut déjà constitué (SMIC 1 823,03 €, 2 100, 2 500, 3 100, 3 500, 5 000) sans mutuelle, RGDU inactive, métropole, régime général, janvier 2026.\n\nLe SMIC mensuel 1 823,03 € (151,67 h, 01/01/2026–31/05/2026, URSSAF) est un brut de base temps plein. Service-Public publie aussi un net indicatif 1 443,11 € : chiffre de communication, pas la formule du bulletin pédagogique (net moteur 1 443,09 €, écart 0,02 € possible selon arrondis / périmètre). On ne « force » pas 1 443,11 € sur le bulletin.\n\nÉléments hors brut : remboursement de frais réels (selon qualification), certains éléments exonérés sous conditions. On ne sort pas une prime du brut parce que le manager l'a appelée « note de frais ».",
      methode:
        "Reconstitution du brut :\n1. Salaire de base (contrat, prorata d'entrée/sortie si besoin).\n2. + HS / HC majorées validées.\n3. + primes, commissions, indemnités soumises.\n4. + AEN (barème URSSAF, pas un forfait inventé).\n5. − retenues d'absence selon méthode du dossier (pas une unique méthode légale universelle).\n6. Contrôler SMIC horaire ≥ 12,02 € hors cas légaux.\n7. Ce total = brut du moteur et des assiettes.\nLe net se calcule après, jamais l'inverse (« je veux 2 000 € net, trouve le brut ») sans outil et hors autonomie improvisée.",
      extra: [
        code(`BRUT DU MOIS — schémas pédagogiques janvier 2026
(1) Temps plein mensualisé, pas de variable
    Salaire de base = brut = 2 500,00 €

(2) Même base + 4 HS à 25 % (taux horaire 16,48 € — 2 500/151,67 arrondi)
    HS = 4 × 16,48 × 1,25 = 82,40 €
    Brut = 2 500,00 + 82,40 = 2 582,40 €
    (ce 2 582,40 n'est pas dans reference-bulletins.json : on ne lui invente
     pas un net moteur ; on l'utilise pour comprendre le brut)

(3) SMIC temps plein
    Brut de base officiel = 1 823,03 €   (pas 12,02 × 151,67 = 1 823,07 €)`),
      ],
      exemple:
        "Réclamation : « Mon brut a baissé, vous m'avez changé le salaire. » Bulletin N : 2 500 + 8 HS. Bulletin N+1 : 2 500 sans HS. Le salaire de base est identique. Le junior explique la reconstitution, il ne « remet pas les HS d'office » pour calmer. Le manager valide ou non les heures du mois.",
      erreurs:
        "Appeler brut le net. Oublier l'AEN dans le brut. Soumettre une indemnité kilométrique réelle sans qualification. Forcer le net Service-Public 1 443,11 €. Calculer les cotisations sur le salaire de base alors que des HS existent.",
      particuliers:
        "Commissions à cheval sur deux mois : rattachement à la période d'emploi. 13e mois : brut du mois de versement, impact plafond. Avantage véhicule : brut + AEN chaque mois. Forfait jours : le « horaire » 151,67 n'est pas affiché comme temps réel ; le brut reste le salaire du forfait.",
      exercice:
        "Salaire de base 2 100,00 €, aucune variable. Quel est le brut ? Citez employeeTotal, net imposable, net à payer et MNS du moteur de référence (non-cadre, effectif 20, PAS 0, AT hyp. 1,50 %, sans mutuelle, RGDU off).",
      correction:
        "Brut = 2 100,00 €.\nRéférence reference-bulletins.json / moteur : employeeTotal 437,65 € ; net imposable 1 722,19 € ; net à payer 1 662,35 € ; MNS 1 662,35 €. Le salaire de base et le brut coïncident ici parce qu'il n'y a aucune variable.",
    }),
    pack({
      title: "Cotisations et contributions sur le bulletin",
      description: "Lire le bloc social : assiettes, taux, parts S/P, et commenter cinq bulletins SMIC / 2 100 €.",
      minutes: 28,
      objectifs:
        "Vous suivez une ligne de cotisation (base × taux = S et/ou P) et vous reliez les totaux salariés aux nets, sur des bulletins fictifs sourcés.",
      theorie:
        "Le bloc social du bulletin traduit le module Sécurité sociale en lignes. Chaque ligne a un libellé, une assiette, un taux, une part salariale, une part patronale. Le total salarial se retranche du brut pour le net avant impôt. Le total patronal est le coût employeur social (hors brut lui-même). Les bulletins de ce module : janvier 2026, métropole, régime général, RGDU non appliquée (maladie P 13 %, AF 5,25 %), pas de mutuelle, AT/MP 1,50 % sauf variante étiquetée, effectif 20 sauf mention.\n\nLecture type, brut 2 500 € : assiette CSG 2 456,25 € ; vieillesse plafonnée S 172,50 € ; Arrco T1 S 78,75 € ; total salarial 521,01 € ; total patronal 1 027,15 € dont AT hypothèse 37,50 €. Ces chiffres sont ceux du moteur pédagogique (reference-bulletins.json). Un junior les utilise comme référence de contrôle, pas comme taux à recopier hors période.\n\nVariantes autorisées ici : changer uniquement des hypothèses labellisées (taux PAS, taux AT/MP de dossier, statut cadre). On n'invente pas un brut 2 700 € « pour voir » sans moteur. On n'invente pas un taux URSSAF.\n\nService-Public affiche 1 443,11 € de net indicatif au SMIC : communication. Le bulletin pédagogique SMIC donne 1 443,09 €. L'écart de 0,02 € s'explique par des arrondis / un périmètre différent. On enseigne le bulletin, pas le communiqué.",
      methode:
        "Pour chaque bulletin :\n1. Lire les hypothèses (période, AT, PAS, cadre, effectif, mutuelle, RGDU).\n2. Contrôler le brut.\n3. Contrôler 2-3 lignes clés (VIE_PLAF, ARRCO_T1, CSG base 98,25 %, AT hyp.).\n4. Sommer S, comparer au total salarial.\n5. En déduire net avant impôt = brut − total S.\n6. Noter ce qui ne doit pas bouger si seule l'hypothèse AT change (le net).",
      extra: [
        code(`HYPOTHÈSES COMMUNES B01–B05 sauf mention
Période janvier 2026 | RGDU off | mutuelle off | métropole | régime général
AT/MP 1,50 % HYPOTHÈSE | non-cadre | effectif 20 | PAS 0 %

B01  SMIC temps plein — brut 1 823,03 €
--------------------------------------------------------------------------------
Brut                         1 823,03
Assiette CSG 98,25 %         1 791,13
VIE_PLAF S  1 823,03×6,90 %    125,79
ARRCO_T1 S  1 823,03×3,15 %     57,43
ATMP P HYP  1 823,03×1,50 %     27,35
Total S                        379,94
Total P                        749,02
Net imposable                1 495,04
Net avant impôt / net / MNS  1 443,09
Note : Service-Public 1 443,11 € = communication, pas ce bulletin (écart 0,02 €).

B02  SMIC + PAS 5 % HYPOTHÈSE (taux PAS de dossier, pas un barème national)
--------------------------------------------------------------------------------
Même bloc social que B01 (total S 379,94 ; MNS 1 443,09)
Net imposable 1 495,04  ×  5 %  =  PAS 74,75
Net à payer = 1 443,09 − 74,75 = 1 368,34
Le PAS n'entre pas dans le MNS.

B03  SMIC + PAS 10 % HYPOTHÈSE
--------------------------------------------------------------------------------
PAS = 1 495,04 × 10 % = 149,50
Net à payer = 1 443,09 − 149,50 = 1 293,59
MNS inchangé 1 443,09  |  cotisations inchangées

B04  SMIC + AT/MP 2,00 % HYPOTHÈSE (seul le patronal AT change)
--------------------------------------------------------------------------------
ATMP P = 1 823,03 × 2,00 % = 36,46   (au lieu de 27,35)
Total P = 758,13   (au lieu de 749,02)
Total S, nets, MNS : identiques à B01 (1 443,09)
Preuve : l'AT n'est pas une retenue salariale.

B05  Brut 2 100,00 € — PAS 0
--------------------------------------------------------------------------------
Total S         437,65
Net imposable 1 722,19
Net / MNS     1 662,35
ATMP P hyp.   2 100 × 1,50 % = 31,50`),
      ],
      exemple:
        "Un salarié au SMIC compare son net 1 443,09 € au chiffre 1 443,11 € lu sur Service-Public. Lina explique : le 1 443,11 € est un net indicatif de communication ; le bulletin pédagogique (et tout bulletin réel selon son propre paramétrage AT, mutuelle, PAS, CCN) peut différer. On ne « corrige » pas 0,02 € pour coller au communiqué.",
      erreurs:
        "Forcer 1 443,11 €. Croire que changer l'AT change le net. Intégrer le PAS dans le total des cotisations. Appliquer les lignes du SMIC à un brut 2 100 € sans recalcul. Oublier d'étiqueter PAS et AT comme hypothèses.",
      particuliers:
        "Alsace-Moselle (maladie S). Non-résident (maladie S 5,50 %). Mutuelle 20/40 : hors ces cinq bulletins. RGDU : hors bulletins de base. Un bulletin réel avec titres-restaurant n'est pas comparable ligne à ligne à B01.",
      exercice:
        "À partir de B01 et B04 : de combien le coût employeur social augmente-t-il si l'hypothèse AT passe de 1,50 % à 2,00 % au SMIC ? Le net salarial bouge-t-il ?",
      correction:
        "AT : 27,35 € → 36,46 €, soit +9,11 €. Total P : 749,02 → 758,13, soit +9,11 €. Net salarial : inchangé à 1 443,09 €. L'hypothèse AT est patronale.",
    }),
    pack({
      title: "Net imposable et prélèvement à la source",
      description: "Construire le net imposable, appliquer un taux PAS hypothèse, et commenter cinq bulletins 2 100 / 2 500 €.",
      minutes: 26,
      objectifs:
        "Vous savez que le PAS s'applique au net imposable et non au brut, vous distinguez CSG déductible et non déductible, et vous mesurez l'effet d'un taux PAS de dossier.",
      theorie:
        "Le net imposable n'est pas le net à payer. On part du brut, on retranche les cotisations salariales déductibles (vieillesse, retraite complémentaire, CSG déductible, etc.), on ne retranche pas la CSG non déductible ni la CRDS ni le PAS. D'où, brut 2 500 € : total S 521,01 €, net à payer 1 978,99 €, mais net imposable 2 050,22 €. L'écart 2 050,22 − 1 978,99 = 71,23 € correspond notamment à CSG nd 58,95 € + CRDS 12,28 €.\n\nLe PAS (DGFiP) : taux transmis via DSN / PASRAU, confidentiel. Assiette = net imposable de la période, pas le brut. Taux 8 % sur 3 100 € de brut : NI 2 542,28 € × 8 % = 203,38 €, net à payer 2 250,57 €, MNS 2 453,95 € (référence). Un taux PAS est une HYPOTHÈSE de dossier fictif dans ces exercices, jamais « le taux moyen France ».\n\nConfidentialité : on n'explique pas le taux d'un salarié à un manager. On n'utilise pas le taux comme sujet de conversation. Un taux neutre, personnalisé, métropolitain, DOM : on applique celui transmis, on ne le « corrige » pas pour arrondir le net.\n\nConséquence : deux salariés même brut peuvent avoir des nets à payer différents (PAS) et le même MNS (si mêmes cotisations). C'est normal. Le MNS ignore le PAS. Un junior qui « harmonise » les nets d'une équipe en touchant au taux commet une faute, pas un geste d'équité.",
      methode:
        "1. Calculer le net imposable (brut − déductibles S).\n2. Lire le taux PAS du dossier (ligne DSN), ne pas le deviner.\n3. PAS = NI × taux, arrondi au centime.\n4. Net à payer = net avant impôt − PAS.\n5. MNS : ne pas retrancher le PAS.\n6. Contrôler qu'un changement de seul taux PAS ne touche ni total S, ni MNS, ni AT.",
      extra: [
        code(`B06  Brut 2 100,00 € + PAS 8 % HYPOTHÈSE
--------------------------------------------------------------------------------
Bloc social = B05 (total S 437,65 ; NI 1 722,19 ; MNS 1 662,35)
PAS = 1 722,19 × 8 % = 137,78
Net à payer = 1 662,35 − 137,78 = 1 524,57

B07  Brut 2 100,00 € + AT/MP 0,80 % HYPOTHÈSE (PAS 0)
--------------------------------------------------------------------------------
ATMP P = 2 100,00 × 0,80 % = 16,80   (B05 : 31,50)
Total P = 848,11   (B05 : 862,81)
Nets identiques à B05 : 1 662,35  |  preuve encore : AT patronal

B08  Brut 2 500,00 € — bulletin commenté de référence (PAS 0)
--------------------------------------------------------------------------------
Période 01/2026  non-cadre  effectif 20  RGDU off  mutuelle off
AT/MP 1,50 % HYPOTHÈSE

Brut                              2 500,00
Assiette CSG 98,25 %              2 456,25
VIE_PLAF S  2 500 × 6,90 %          172,50
VIE_DEPL S  2 500 × 0,40 %           10,00
ARRCO_T1 S  2 500 × 3,15 %           78,75
CEG_T1 S    2 500 × 0,86 %           21,50
CSG déd.    2 456,25 × 6,80 %       167,03
CSG nd      2 456,25 × 2,40 %        58,95
CRDS        2 456,25 × 0,50 %        12,28
ATMP P HYP  2 500 × 1,50 %           37,50
MALADIE P   2 500 × 13,00 %         325,00
AF P        2 500 × 5,25 %          131,25
Total S                             521,01
Total P                           1 027,15
Net imposable                     2 050,22   (= brut − déductibles, hors CSG nd/CRDS)
Net avant impôt / net / MNS       1 978,99

B09  Brut 2 500,00 € + PAS 8 % HYPOTHÈSE
--------------------------------------------------------------------------------
PAS = 2 050,22 × 8 % = 164,02
Net à payer = 1 978,99 − 164,02 = 1 814,97
MNS inchangé 1 978,99

B10  Brut 2 500,00 € + PAS 10 % HYPOTHÈSE
--------------------------------------------------------------------------------
PAS = 2 050,22 × 10 % = 205,02
Net à payer = 1 978,99 − 205,02 = 1 773,97
MNS inchangé 1 978,99`),
      ],
      exemple:
        "Deux opérateurs, même brut 2 500 €. L'un a un PAS 0 % (B08, net 1 978,99 €), l'autre un PAS 10 % (B10, net 1 773,97 €). Le manager demande « pourquoi tu le payes moins, c'est les mêmes heures ». Réponse : le taux PAS est personnel et confidentiel ; le MNS des deux est 1 978,99 €. On n'aligne pas les nets.",
      erreurs:
        "PAS × brut. Retrancher le PAS du MNS. Divulguer le taux. Recalculer un « taux juste » à la place de la DGFiP. Oublier que CSG nd et CRDS restent dans le NI.",
      particuliers:
        "Taux neutre, non personnalisé, trimestre de régularisation fiscale : suivre le taux transmis. PASRAU pour certains revenus. Acompte d'impôt n'est pas le PAS du bulletin. Crédit d'impôt : hors paie.",
      exercice:
        "Brut 3 100 €, PAS 8 % (bulletin de référence). Vérifiez PAS, net à payer et MNS. Sur quelle assiette le 8 % s'applique-t-il ?",
      correction:
        "Assiette = net imposable 2 542,28 €, pas 3 100.\nPAS = 2 542,28 × 8 % = 203,38 €.\nNet avant impôt = 2 453,95 € = MNS.\nNet à payer = 2 453,95 − 203,38 = 2 250,57 €.\nRéférence brut_3100_pas_8pct.",
    }),
    pack({
      title: "Net à payer et montant net social",
      description: "Séparer net avant impôt, net viré et MNS (BOSS, modèle jusqu'au 31/12/2026), avec cinq bulletins 2 500 / 3 100 €.",
      minutes: 24,
      objectifs:
        "Vous écrivez les trois formules (net avant impôt, net à payer, MNS) et vous prévoyez l'effet d'un PAS, d'un AT et d'un statut cadre.",
      theorie:
        "Net avant impôt = brut − cotisations et contributions salariales (y compris CSG/CRDS, hors PAS). C'est ce qui resterait si le taux PAS était nul. Net à payer = net avant impôt − PAS : c'est le virement. Montant net social = revenu net après prélèvements sociaux obligatoires, mentionné sur le bulletin (BOSS). Jusqu'au 31/12/2026, le modèle provisoire s'applique ; on n'intègre pas d'office la part patronale de complémentaire santé dans le MNS (évolution 2027 : projet à revérifier).\n\nDans les bulletins de référence sans mutuelle et sans PAS, net avant impôt = net à payer = MNS (1 978,99 € à 2 500 € ; 1 443,09 € au SMIC ; 3 962,82 € à 5 000 €). Dès qu'un PAS existe, net à payer < MNS (exemple 3 100 € à 8 % : virement 2 250,57 €, MNS 2 453,95 €). Le salarié qui compare son virement au MNS a besoin de cette phrase, pas d'un « c'est le logiciel ».\n\nStatut cadre : APEC salariale. Brut 2 500 € cadre vs non-cadre : APEC_s 0,60 €, total S 521,61 € vs 521,01 €, net 1 978,39 € vs 1 978,99 €. Brut 3 500 € cadre effectif 80 : APEC_s 0,84 €, FNAL 17,50 € (l'effectif, pas le cadre), net 2 769,75 €.\n\nLe MNS sert notamment aux prestations et aux déclarations sociales du salarié. Un junior n'invente pas une formule « MNS = net à payer toujours ». Il applique le BOSS 2026 et la formule pédagogique du moteur : brut − prélèvements sociaux salariaux obligatoires (hors mutuelle salariale dans le moteur).",
      methode:
        "En bas de bulletin :\n1. Total S → net avant impôt.\n2. PAS → net à payer (virement SEPA = ce montant, hors autres retenues : saisie, acompte).\n3. MNS → mention BOSS, comparer au net avant impôt en l'absence de mutuelle facultative.\n4. Si écart virement / MNS : PAS ou mutuelle S ou saisie sur salaire.\n5. Expliquer au salarié avec les trois libellés, sans jargon.",
      extra: [
        code(`FORMULES PÉDAGOGIQUES 2026 (moteur, sans mutuelle)
Net avant impôt = brut − total S
Net à payer     = net avant impôt − PAS
MNS             = brut − prélèvements sociaux S obligatoires
                 (PAS hors MNS ; mutuelle P hors MNS jusqu'au 31/12/2026)

B11  Brut 2 500,00 € + AT/MP 2,50 % HYPOTHÈSE (PAS 0)
--------------------------------------------------------------------------------
ATMP P = 62,50  (B08 : 37,50)   Total P = 1 052,15  (B08 : 1 027,15)
Net / MNS inchangés : 1 978,99

B12  Brut 2 500,00 € CADRE (variante statut) — effectif 20, PAS 0
--------------------------------------------------------------------------------
APEC S = 2 500 × 0,024 % = 0,60
Total S 521,61  (B08 : 521,01)   Net / MNS 1 978,39
FNAL reste 0,10 % plafonné (effectif 20), pas 0,50 %

B13  Brut 3 100,00 € — PAS 0
--------------------------------------------------------------------------------
Total S        646,05
NI           2 542,28
Net / MNS    2 453,95     (= net avant impôt ; sera le MNS de B14/B15)

B14  Brut 3 100,00 € + PAS 8 % HYPOTHÈSE  ★ référence
--------------------------------------------------------------------------------
PAS = 2 542,28 × 8 % = 203,38
Net à payer = 2 453,95 − 203,38 = 2 250,57
MNS = 2 453,95   ← différent du virement

B15  Brut 3 100,00 € + PAS 12 % HYPOTHÈSE
--------------------------------------------------------------------------------
PAS = 2 542,28 × 12 % = 305,07
Net à payer = 2 453,95 − 305,07 = 2 148,88
MNS inchangé 2 453,95`),
      ],
      exemple:
        "Salarié B14 : « Vous m'avez retenu 2 453,95 € de MNS mais je n'ai reçu que 2 250,57 €. » Lina montre les trois lignes : MNS 2 453,95 € (après social obligatoire), PAS 203,38 € (impôt, taux 8 % hypothèse d'exercice / taux transmis en réel), virement 2 250,57 €. Pas d'anomalie de cotisation.",
      erreurs:
        "Égaliser de force MNS et virement. Mettre le PAS dans le total S. Ajouter la mutuelle patronale au MNS avant 2027. Oublier l'APEC sur un cadre. Attribuer le FNAL 17,50 € au statut cadre plutôt qu'à l'effectif 80.",
      particuliers:
        "Saisie sur salaire, acompte, opposition : diminuant le virement, hors MNS selon nature. Titres-restaurant : pas du virement SEPA salaire. Net négatif : ne pas clôturer, voir responsable (reste à vivre, barème de saisie).",
      exercice:
        "Pourquoi, sur B14, MNS = 2 453,95 € et net à payer = 2 250,57 € ? Quel montant vire-t-on ? Quel montant cite-t-on comme MNS au salarié et aux organismes qui l'utilisent ?",
      correction:
        "L'écart 203,38 € est le PAS (8 % × NI 2 542,28 €). On vire 2 250,57 €. On mentionne un MNS de 2 453,95 €. Les deux sont justes et simultanés. On ne « corrige » pas le MNS pour coller au virement.",
    }),
    pack({
      title: "Cumul annuel et lecture dans le temps",
      description: "Lire les cumuls du bulletin, anticiper plafonds et PAS, commenter cinq bulletins 3 100 / 3 500 / 5 000 €.",
      minutes: 22,
      objectifs:
        "Vous utilisez les cumuls (brut, imposable, PAS, T1, CP) comme outil de contrôle, pas comme une ligne décorative de bas de page.",
      theorie:
        "Le bulletin du mois est une photo. Les cumuls sont le film depuis janvier (ou depuis l'entrée). Ils servent à : vérifier qu'on n'a pas oublié un mois ; suivre l'approche du PMSS / PASS (T2, CET, régularisation) ; rapprocher le PAS déjà prélevé d'un avis DGFiP que le salarié commentera ; suivre les CP. Un cumul brut de 15 000 € en juin pour un 2 500 € mensuel sans entrée ni absence est cohérent (6 × 2 500). Un cumul de 12 500 € signale un trou ou un prorata.\n\nConséquence paie : les plafonds 2026 (PMSS 4 005 €, PASS 48 060 €) se jouent aussi en cumul. Un brut mensuel 5 000 € ouvre T2 chaque mois (T1 4 005, T2 995, CET_s 7,00 €, net 3 962,82 €). Un brut 3 100 € reste en T1 tout l'année si aucun élément exceptionnel. Une prime de 20 000 € en novembre peut ouvrir T2 et saturer des plafonds : on lit les cumuls avant de clôturer la prime.\n\nLe PAS cumulé n'est pas l'impôt annuel définitif. C'est du prélevé. Le junior n'annonce pas un « reste à payer d'impôt » à partir du bulletin.\n\nVariante AT 3 % sur 3 100 € avec PAS 8 % : le virement reste 2 250,57 €, le MNS 2 453,95 € ; seul le patronal AT passe à 93,00 €. Variante cadre 3 500 € effectif 80 : APEC 0,84 €, FNAL 17,50 €, net 2 769,75 €. Variante non-cadre même brut même effectif : pas d'APEC, net 2 770,59 €. L'effectif 80 fixe le FNAL 0,50 % dans les deux cas.",
      methode:
        "En clôture, sondage de cumuls :\n1. Brut cumulé ≈ somme des bruts depuis janvier / entrée.\n2. Cohérence entrée/sortie (pas 12 mois si embauche en mars).\n3. T1 cumulée vs PASS.\n4. PAS cumulé vs NI cumulé × taux (si taux constant — en réel le taux peut changer).\n5. CP : acquisition vs prise.\n6. Anomalie = ouvrir les bulletins précédents, pas « corriger le cumul à la main » sans source.",
      extra: [
        code(`B16  Brut 3 100,00 € + PAS 8 % + AT/MP 3,00 % HYPOTHÈSE
--------------------------------------------------------------------------------
PAS, NI, nets = B14  (PAS 203,38 ; net 2 250,57 ; MNS 2 453,95)
ATMP P = 3 100 × 3,00 % = 93,00   (B14 : 46,50)
Total P = 1 320,17   (B14 : 1 273,67)
Cumul janvier : brut 3 100 | NI 2 542,28 | PAS 203,38 | AT hyp. distincte

B17  CADRE brut 3 500,00 € — effectif 80 — PAS 0  ★ référence
--------------------------------------------------------------------------------
FNAL P = 3 500 × 0,50 % = 17,50     (seuil 50, totalité)
APEC S = 3 500 × 0,024 % = 0,84
Total S 730,25   Net / MNS 2 769,75
Pas de T2 (3 500 < 4 005)

B18  CADRE brut 3 500,00 € — effectif 80 — PAS 8 % HYPOTHÈSE
--------------------------------------------------------------------------------
NI = 2 869,47
PAS = 2 869,47 × 8 % = 229,56
Net à payer = 2 769,75 − 229,56 = 2 540,19
MNS = 2 769,75

B19  NON-CADRE brut 3 500,00 € — effectif 80 — PAS 0
--------------------------------------------------------------------------------
Pas d'APEC
FNAL P = 17,50 (même effectif que B17)
Total S 729,41   Net / MNS 2 770,59
Écart de net vs B17 = APEC 0,84 (aux arrondis près : 2 770,59 − 2 769,75 = 0,84)

B20  Brut 5 000,00 € — T2 ouverte — PAS 0  ★ référence
--------------------------------------------------------------------------------
T1 4 005,00   T2 995,00   CET S 7,00
ARRCO_T1 S 126,16   (4 005 × 3,15 %)
Total S 1 037,18
NI 4 105,28   Net / MNS 3 962,82
Cumul janvier déjà en T2 : la régularisation annuelle ne « fermera » pas la T2
si le brut reste à 5 000 € tous les mois (5 000 × 12 = 60 000 > PASS 48 060).`),
      ],
      exemple:
        "Juin 2026. Salarié B20 : cumul brut 30 000 €, cohérent. Salarié embauché le 1er avril à 5 000 € : cumul attendu 15 000 €. Un cumul 30 000 € sur ce matricule = reprise d'un ancien dossier ou oubli de réinitialisation. Contrôle d'en-tête + historique avant toute DSN.",
      erreurs:
        "Ignorer les cumuls. Réinitialiser un cumul en cours d'année sans entrée. Annoncer l'impôt annuel. Croire qu'un mois à 3 500 € ouvrira la T2. Attribuer l'écart B17/B19 à un FNAL différent.",
      particuliers:
        "Changement de SIRET en cours d'année : cumuls employeur vs cumuls salarié (plafonds). Multi-employeurs : plafond unique, coordination. Bulletin de solde : cumuls jusqu'au dernier jour.",
      exercice:
        "Un cadre 3 500 €, effectif 80, recevoirait-il le même net qu'un non-cadre à brut identique ? Chiffres B17 et B19. Quel cumul T1 après 12 mois à 3 500 €, comparé au PASS ?",
      correction:
        "Non : B17 net 2 769,75 € (APEC 0,84 €) vs B19 net 2 770,59 €. FNAL identique 17,50 € (effectif). 12 × 3 500 = 42 000 € < PASS 48 060 € : pas de saturation annuelle du PASS ; T2 mensuelle jamais ouverte (3 500 < 4 005). La T1 annuelle 42 000 € reste sous 48 060 €.",
    }),
    pack({
      title: "Contrôler un bulletin de A à Z",
      description: "Enchaîner en-tête, brut, lignes, nets, cumuls, et commenter les derniers bulletins 5 000 € / variantes.",
      minutes: 26,
      objectifs:
        "Vous appliquez une checklist de contrôle reproductible, vous savez quoi bloquer, et vous avez lu au total plus de vingt bulletins fictifs commentés.",
      theorie:
        "Contrôler n'est pas relire en diagonale le net. C'est un ordre : (1) le bon salarié, le bon mois, le bon contrat ; (2) le brut reconstitué ; (3) trois lignes sociales témoins (plafond, CSG 98,25 %, AT étiqueté) ; (4) totaux S et P ; (5) NI, PAS, net, MNS ; (6) cumuls ; (7) mentions R. 3243-1 / MNS. Le logiciel calcule ; il ne sait pas que le contrat est un temps partiel ou que l'AT 1,50 % n'est qu'une hypothèse de formation.\n\nLes vingt-deux bulletins B01–B22 de ce module sont fictifs, déterministes, janvier 2026, taux pleins, mutuelle off, RGDU off. Ils n'épuisent pas un bulletin réel (titres-restaurant, prévoyance, HS, CP, saisie). Ils entraînent l'œil. Dès qu'un paramètre sort de rates-2026.json, il est HYPOTHÈSE (AT, PAS, 20/40 mutuelle).\n\nSeuils d'alerte junior : net à zéro ou négatif ; brut < SMIC horaire 12,02 € hors cas légal ; T2 ouverte sous 4 005 € ; CET sous PMSS ; APEC sur non-cadre ; FNAL 0,50 % sous 50 salariés ; maladie S ≠ 0 sans motif (non-résident, Alsace-Moselle) ; PAS appliqué sur le brut ; MNS = virement alors qu'un PAS figure ; taux AT présenté comme national.\n\nLimite : un écart de 0,01 € sur un arrondi de ligne se documente ; on n'invente pas une « compensation » sur une autre rubrique. Un écart de 80 € se traite le jour même avec le responsable, pas « au mois suivant pour ne pas retarder ».",
      methode:
        "Checklist clôture (sondage + 100 % des entrées/sorties/arrêts) :\n1. En-tête (SIRET, classification, période).\n2. Brut vs contrat vs variables validées.\n3. SMIC 12,02 € / 1 823,03 €.\n4. PMSS 4 005 € si brut proche.\n5. Lignes témoins VIE_PLAF, ARRCO, CSG, AT hyp.\n6. NI / PAS / net / MNS.\n7. Cumuls.\n8. Mentions et canal d'envoi.\n9. Journal d'incidents.\n10. Visa avant SEPA et DSN.",
      extra: [
        code(`B21  Brut 5 000,00 € + PAS 8 % HYPOTHÈSE
--------------------------------------------------------------------------------
Bloc social = B20 (T1 4 005 ; T2 995 ; CET S 7,00 ; total S 1 037,18)
NI 4 105,28   PAS = 4 105,28 × 8 % = 328,42
Net à payer = 3 962,82 − 328,42 = 3 634,40
MNS = 3 962,82

B22  Brut 5 000,00 € + AT/MP 3,00 % HYPOTHÈSE (PAS 0)
--------------------------------------------------------------------------------
ATMP P = 150,00  (B20 : 75,00)   Total P = 2 138,91  (B20 : 2 063,91)
Net / MNS inchangés 3 962,82

RAPPEL DES 22 BULLETINS FICTIFS (moteur janvier 2026)
B01 SMIC                net 1 443,09  (SP 1 443,11 = communication)
B02 SMIC PAS 5 %        net 1 368,34  MNS 1 443,09
B03 SMIC PAS 10 %       net 1 293,59  MNS 1 443,09
B04 SMIC AT 2,00 %      net 1 443,09  total P 758,13
B05 2 100               net 1 662,35  S 437,65
B06 2 100 PAS 8 %       net 1 524,57
B07 2 100 AT 0,80 %     net 1 662,35
B08 2 500               S 521,01  NI 2 050,22  net 1 978,99  CSG 2 456,25
                        VIE_PLAF_s 172,50  ARRCO_T1_s 78,75
B09 2 500 PAS 8 %       net 1 814,97
B10 2 500 PAS 10 %      net 1 773,97
B11 2 500 AT 2,50 %     net 1 978,99  AT 62,50
B12 2 500 cadre         net 1 978,39  APEC_s 0,60
B13 3 100 PAS 0         MNS 2 453,95
B14 3 100 PAS 8 %       PAS 203,38  net 2 250,57  MNS 2 453,95
B15 3 100 PAS 12 %      net 2 148,88
B16 3 100 PAS 8 % AT 3% net 2 250,57  AT 93,00
B17 cadre 3 500 eff.80  APEC_s 0,84  FNAL 17,50  net 2 769,75
B18 cadre 3 500 PAS 8 % net 2 540,19
B19 non-cadre 3 500 e80 net 2 770,59
B20 5 000 T2            T1 4 005 T2 995 CET_s 7,00 net 3 962,82
B21 5 000 PAS 8 %       net 3 634,40
B22 5 000 AT 3,00 %     net 3 962,82  AT 150,00

Variantes = ATMP, PAS, cadre uniquement. Aucun taux URSSAF inventé.`),
        note("Tout bulletin réel portera en plus, le cas échéant, mutuelle, prévoyance, HS, CP, titres-restaurant, saisie, RGDU. Les 22 cas entraînent le contrôle ; ils ne remplacent pas le dossier d'entreprise. AT 1,50 % et taux PAS restent des HYPOTHÈSES hors notification Carsat / taux DGFiP transmis."),
      ],
      exemple:
        "Clôture du 24 janvier. Lina sonde B-type 2 500 € : elle retrouve 521,01 / 2 050,22 / 1 978,99. Un bulletin du lot affiche 1 773,97 € de net : elle cherche un PAS 10 % (B10) avant de crier à l'erreur de cotisation. Le MNS est toujours 1 978,99 €. Diagnostic en deux minutes grâce aux références, pas un paramétrage démonté à 23 h.",
      erreurs:
        "Ne contrôler que le net. Recalculer toutes les lignes dans Excel sans s'ancrer aux totaux. Laisser partir un APEC sur ETAM. Corriger 0,02 € pour coller à Service-Public. Présenter B08 comme « le » bulletin France 2026 (l'AT est une hypothèse, la RGDU est off).",
      particuliers:
        "Premier bulletin d'entrée, solde de tout compte, bulletin à net négatif, bulletin à PAS 0 après un taux personnalisé : toujours 100 % de relecture humaine. Volume CSP : sondage statistique plus 100 % des événements. Cabinet : un dossier = une CCN, ne pas contrôler le client B avec les totaux du client A.",
      exercice:
        "On vous tend un bulletin brut 5 000 €, net 3 962,82 €, une ligne CET à 0 €, une ligne AT à 75,00 €. Listez deux anomalies possibles et deux éléments cohérents avec B20.",
      correction:
        "Cohérents : net 3 962,82 € et AT 75,00 € (5 000 × 1,50 % hyp.). Anomalies : CET à 0 € alors que brut > PMSS (CET_s attendu 7,00 €) ; si T2 absente alors que T1 devrait être 4 005 et T2 995. On bloque, on vérifie le PMSS paramétré (4 005, pas un plafond N-1). On ne « remet pas 7 € à la main » sans corriger le paramètre de tranche.",
    }),
    quizLesson({
      title: "Quiz — Comprendre le bulletin",
      description: "Vérifier mentions, brut, nets, MNS, PAS et références moteur janvier 2026.",
      passing_score: 70,
      questions: [
        q({
          question: "Les mentions du bulletin relèvent notamment de :",
          options: [
            "A. L. 3121-27 uniquement",
            "B. R. 3243-1 et du BOSS (règles générales / MNS)",
            "C. Un usage d'entreprise facultatif",
            "D. La seule CCN Syntec",
          ],
          correct: 1,
          explanation:
            "R. 3243-1 liste les mentions ; le BOSS précise présentation et MNS. L. 3243-1 impose la remise. L. 3121-27 est la durée légale. Une CCN n'autorise pas à supprimer des mentions légales.",
        }),
        q({
          question: "Sur le bulletin pédagogique brut 2 500 € (B08), le total salarial, le net imposable et le net à payer sont :",
          options: [
            "A. 521,01 € ; 2 050,22 € ; 1 978,99 €",
            "B. 437,65 € ; 1 722,19 € ; 1 662,35 €",
            "C. 1 027,15 € ; 2 500,00 € ; 2 500,00 €",
            "D. 172,50 € ; 1 978,99 € ; 1 978,99 €",
          ],
          correct: 0,
          explanation:
            "Référence moteur / reference-bulletins.json : employeeTotal 521,01 ; NI 2 050,22 ; net 1 978,99. 437,65 / 1 662,35 correspondent au brut 2 100 €. 1 027,15 € est le total patronal. 172,50 € est la seule vieillesse plafonnée S.",
        }),
        q({
          question: "L'assiette CSG du bulletin 2 500 € et la vieillesse plafonnée salariale sont :",
          options: [
            "A. 2 500,00 € et 213,75 €",
            "B. 2 456,25 € et 172,50 €",
            "C. 4 005,00 € et 276,35 €",
            "D. 1 978,99 € et 78,75 €",
          ],
          correct: 1,
          explanation:
            "CSG base = 2 500 × 98,25 % = 2 456,25 €. VIE_PLAF_s = 2 500 × 6,90 % = 172,50 €. 213,75 € est la part patronale plafonnée. 78,75 € est l'Arrco T1 S.",
        }),
        q({
          question: "Le net pédagogique du SMIC 1 823,03 € (1 443,09 €) par rapport au 1 443,11 € Service-Public :",
          options: [
            "A. Le bulletin est faux de 0,02 €, il faut forcer 1 443,11 €",
            "B. 1 443,11 € est un net indicatif de communication ; le bulletin pédagogique donne 1 443,09 €",
            "C. Service-Public a remplacé le PMSS",
            "D. L'écart vient du PAS 8 %",
          ],
          correct: 1,
          explanation:
            "Note de reference-bulletins.json : 1 443,11 € n'est pas une formule de bulletin. Écart 0,02 € possible selon arrondis / périmètre. Le PAS 8 % n'est pas sur B01 (PAS 0).",
        }),
        q({
          question: "Brut 3 100 €, PAS 8 % : PAS, net à payer et MNS de référence :",
          options: [
            "A. PAS 248,00 € (8 % du brut), net 2 250,57 €, MNS 2 250,57 €",
            "B. PAS 203,38 €, net 2 250,57 €, MNS 2 453,95 €",
            "C. PAS 203,38 €, net 2 453,95 €, MNS 2 250,57 €",
            "D. PAS 0 €, net 2 453,95 €, MNS 2 453,95 €",
          ],
          correct: 1,
          explanation:
            "Le PAS se calcule sur le NI 2 542,28 € × 8 % = 203,38 €, pas sur le brut. Le virement est 2 250,57 €. Le MNS reste 2 453,95 € (PAS hors MNS). L'option D est B13 (PAS 0).",
        }),
        q({
          question: "Jusqu'au 31/12/2026, le montant net social :",
          options: [
            "A. Est facultatif",
            "B. Est mentionné selon le cadre BOSS ; le modèle provisoire est prolongé ; on n'anticipe pas la règle 2027 sur la mutuelle patronale",
            "C. Est toujours égal au brut",
            "D. Inclut déjà obligatoirement la part patronale mutuelle",
          ],
          correct: 1,
          explanation:
            "BOSS MNS : mention due, modèle provisoire jusqu'au 31/12/2026. L'intégration de la part patronale de complémentaire santé est un projet 2027 à revérifier, pas le droit actuel du parcours.",
        }),
        q({
          question: "Cadre, brut 3 500 €, effectif 80, PAS 0 : APEC salariale, FNAL et net de référence :",
          options: [
            "A. APEC 0,84 €, FNAL 17,50 €, net 2 769,75 €",
            "B. APEC 0 €, FNAL 3,50 €, net 2 770,59 €",
            "C. APEC 0,84 €, FNAL 3,50 €, net 2 769,75 €",
            "D. APEC 17,50 €, FNAL 0,84 €, net 2 500,00 €",
          ],
          correct: 0,
          explanation:
            "Moteur cadre_3500_effectif_80 : APEC_s 0,84 €, FNAL 17,50 € (0,50 % × 3 500, seuil 50), net 2 769,75 €. Le FNAL 3,50 € serait un effectif < 50. 2 770,59 € est le non-cadre effectif 80 (B19).",
        }),
        q({
          question: "Brut 5 000 € : T1, T2, CET salarial et net de référence :",
          options: [
            "A. T1 5 000, T2 0, CET 0, net 3 962,82 €",
            "B. T1 4 005, T2 995, CET_s 7,00 €, net 3 962,82 €",
            "C. T1 4 005, T2 995, CET_s 0 €, net 4 105,28 €",
            "D. T1 4 005, T2 995, CET_s 7,00 €, net 2 769,75 €",
          ],
          correct: 1,
          explanation:
            "PMSS 4 005 € : T2 995 €, CET due au-delà de T1 (7,00 €). Net 3 962,82 €. 4 105,28 € est le net imposable, pas le net à payer. 2 769,75 € est le cadre 3 500 €.",
        }),
        q({
          question: "Si seule l'hypothèse AT/MP passe de 1,50 % à 3,00 % (B20 vs B22), que devient le net salarial ?",
          options: [
            "A. Il est divisé par deux",
            "B. Il baisse de 75,00 €",
            "C. Il reste 3 962,82 € ; le coût patronal AT passe de 75,00 € à 150,00 €",
            "D. Il devient égal au MNS moins l'AT",
          ],
          correct: 2,
          explanation:
            "L'AT/MP du moteur de base est patronal. Changer l'hypothèse ne change pas le net ni le MNS. Seul le total employeur augmente de 75,00 €.",
        }),
        q({
          question: "Le PAS se calcule :",
          options: [
            "A. Sur le brut × taux",
            "B. Sur le net imposable × taux transmis (DGFiP / DSN), jamais en divulguant le taux à un tiers non habilité",
            "C. Sur le MNS × 8 % pour tout le monde",
            "D. Uniquement si le brut dépasse le PMSS",
          ],
          correct: 1,
          explanation:
            "Assiette = net imposable, taux = taux transmis, confidentialité. 8 % n'est qu'une HYPOTHÈSE d'exercice (B14). Le PAS n'attend pas le PMSS.",
        }),
      ],
    }),
  ],
};
