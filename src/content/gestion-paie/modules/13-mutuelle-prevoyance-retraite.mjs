import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 13,
  title: "Mutuelle, prévoyance, retraite complémentaire et portabilité",
  description:
    "Appliquer la complémentaire santé obligatoire, la prévoyance, l'Agirc-Arrco 2026 et l'APEC, sans inventer les dispenses ni la durée de portabilité, et sans intégrer la part patronale mutuelle au MNS jusqu'au 31/12/2026.",
  lessons: [
    pack({
      title: "Complémentaire santé obligatoire (ANI) : ce que la paie fait",
      description:
        "Comprendre l'obligation d'employeur, le panier de soins, la répartition, et l'hypothèse 20/40 du catalogue.",
      minutes: 20,
      objectifs:
        "Vous savez pourquoi une mutuelle collective apparaît sur le bulletin, qui la finance au minimum, comment la saisir (hypothèse 20 € S / 40 € P), et ce qu'un junior ne décide pas (choix de l'organisme, dispenses).",
      theorie:
        "Depuis l'accord national interprofessionnel et la loi qui l'a transposé, les employeurs du secteur privé ont l'obligation de faire bénéficier leurs salariés d'une couverture complémentaire santé collective, à adhésion obligatoire, respectant un panier de soins minimal, avec une participation employeur au moins égale à 50 % de la cotisation de la couverture « responsable ». Le détail du panier et des contrats responsables se lit dans le Code de la sécurité sociale et le BOSS. Un junior n'invente ni le panier ni le % au-delà de ce plancher.\n\nLa répartition réelle (50/50, 60/40, forfait euros) est un paramètre d'entreprise ou d'accord. Dans le catalogue pédagogique LOU, l'hypothèse de dossier fictif est : 20,00 € salarial / 40,00 € patronal par mois. Ce n'est PAS un barème national URSSAF. C'est le contrat collectif du dossier fictif (rates-2026.json, hypotheses_pedagogiques). 40 € employeur pour 60 € de cotisation totale = 66,7 % employeur, au-dessus du plancher 50 % — cohérent comme hypothèse, jamais comme obligation universelle.\n\nBulletin : part salariale précomptée sur le net ; part patronale en cotisation employeur. Assiette sociale de la part patronale de complémentaire santé : régime spécifique (réintégration, forfait social éventuel selon effectif — à lire BOSS, ne pas inventer un taux de forfait social). La part salariale n'est pas du « salaire brut de base » : c'est une cotisation salariale de complémentaire.\n\nMNS : jusqu'au 31/12/2026, selon le BOSS, la part patronale de complémentaire santé n'est PAS intégrée au montant net social (modèle provisoire prolongé). Ne pas l'anticiper comme si 2027 était déjà en vigueur (projet d'évolution à revérifier). Le MNS n'est pas le net à payer.\n\nObligation légale : mettre en place la couverture, affilier, précompter, déclarer. Paramètre d'entreprise : organismes, garanties, 20/40 pédagogique. Disposition conventionnelle : certaines CCN imposent un organisme ou un degré de couverture supérieur. Hypothèse : 20/40.",
      methode:
        "1. Contrat collectif au dossier (organisme, tarifs familles, ayants droit).\n2. Qui est affilié, qui a une dispense écrite (leçon suivante).\n3. Saisir S et P (20/40 si dossier catalogue).\n4. Contrôler le bulletin : précompte S, patronale P, MNS sans P jusqu'au 31/12/2026.\n5. DSN blocs mutuelle.\n6. Ayant droit / famille : tarif différent, pas 20/40 magique si le contrat dit autre chose.",
      noteText:
        "20,00 € / 40,00 € = HYPOTHÈSE de contrat fictif du catalogue, pas un taux national. La part patronale n'entre pas dans le MNS jusqu'au 31/12/2026 (BOSS).",
      exemple:
        "Atelier Nord Paie, non-cadre 3 100 €. Mutuelle catalogue 20/40. Lina saisit 20 € en salarial, 40 € en patronal. Elle n'ajoute pas 40 € au MNS. Le salarié qui demande « enlevez-moi la mutuelle, j'ai celle de ma conjointe » : ce n'est pas un interrupteur. C'est une dispense éventuelle, écrite, dans les cas prévus (leçon suivante), à vérifier BOSS / Service-Public.",
      extra: [
        code(`MUTUELLE — HYPOTHÈSE catalogue (rates-2026.json)
Part salariale     20,00 €   précompte
Part patronale     40,00 €   charge employeur
Total contrat      60,00 €   dont 66,7 % employeur (hyp. > plancher 50 %)

MNS jusqu'au 31/12/2026 (BOSS) : NE PAS intégrer les 40,00 € patronaux
Évolution 2027 : projet, à revérifier, NE PAS anticiper sur un bulletin janvier 2026

Ce n'est pas un barème URSSAF. Un autre dossier peut être 15/15 ou 30/30.`),
      ],
      erreurs:
        "Omettre la mutuelle. Mettre 40 € dans le MNS en 2026. Laisser un salarié sortir de la mutuelle sans dispense écrite. Appliquer 20/40 à un tarif famille 90 €. Inventer le forfait social.",
      particuliers:
        "CDD, temps partiel, multi-employeurs : affiliation par défaut, dispenses à part. Ayants droit facultatifs. Surcomplémentaire. CSE. Un junior ne choisit pas l'organisme.",
      exercice:
        "Bulletin pédagogique 3 100 €, mutuelle 20/40, janvier 2026. Où apparaissent 20 € et 40 € ? Le 40 € entre-t-il dans le MNS ? Dans le brut de base ?",
      correction:
        "20 € : cotisation salariale, diminue le net. 40 € : cotisation patronale, charge employeur, ligne bulletin côté employeur. MNS : non, 40 € hors MNS jusqu'au 31/12/2026 (BOSS). Brut de base : non, ce n'est pas 3 140 € de salaire de base ; l'AEN n'est pas en cause ici. Le brut soumis peut avoir un régime propre pour la part patronale (réintégration) : LIRE le BOSS, ne pas inventer 40 € dans le brut de base « pour faire simple ».",
    }),
    pack({
      title: "Dispenses d'adhésion : vérifier, ne pas inventer la liste",
      description:
        "Savoir que des dispenses existent, où les lire, et ce que la paie archive.",
      minutes: 18,
      objectifs:
        "Vous refusez une sortie de mutuelle orale, vous orientez vers BOSS / Service-Public pour les catégories de dispense, et vous archivez une demande écrite conforme.",
      theorie:
        "L'adhésion à la complémentaire santé collective obligatoire est le principe. Des cas de dispense existent : le salarié peut, dans des situations prévues, ne pas adhérer, souvent à sa demande écrite, parfois de plein droit. Les catégories (contrats courts, déjà couvert en tant qu'ayant droit, complémentaire santé solidaire, couverture individuelle jusqu'à échéance, temps très partiel, etc.) sont des familles fréquemment citées. Cette formation N'EN DRESSE PAS la liste officielle exhaustive : les conditions, durées, caractères (à la demande / de droit), pièces, évoluent. Source à ouvrir : BOSS (protection sociale complémentaire) et Service-Public, texte en vigueur en 2026.\n\nCe que le junior fait : 1) ne jamais désaffilier sur un mail « enlevez-moi ça » ; 2) remettre le formulaire et la notice ; 3) vérifier que le cas invoqué figure dans le texte du jour ; 4) archiver la demande et la pièce (attestation d'ayant droit, etc.) ; 5) faire viser RH / responsable paie ; 6) paramétrer 0 € S / 0 € P seulement après validation, et revoir à l'échéance de la dispense.\n\nCe que le junior ne fait pas : inventer une catégorie « il a déjà une mutuelle perso, c'est bon » sans lire si cette situation est encore une dispense et jusqu'à quand ; dispenser tout un service pour « arranger le net » ; conserver une dispense périmée.\n\nEffet paie : pas de 20/40. DSN : situation de dispense. MNS : pas de part patronale (il n'y en a plus). Si la dispense tombe, réaffiliation, 20/40 dès le mois prévu.\n\nObligation : respecter le caractère obligatoire hors dispenses légales / réglementaires. Politique interne : formulaire. Pas d'hypothèse de liste dans rates-2026.json.",
      methode:
        "1. Demande écrite.\n2. Ouvrir BOSS + Service-Public « dispense mutuelle obligatoire ».\n3. Catégorie = une de celles du texte, avec pièce.\n4. Date de fin / renouvellement.\n5. Validation.\n6. Paramétrage et DSN.\n7. Alerte échéance.",
      noteText:
        "Catégories de dispense : à vérifier sur BOSS / Service-Public. Toute liste mémorisée dans un ancien cabinet est suspecte. Ne pas inventer de cas.",
      exemple:
        "Salarié : « je suis ayant droit de la mutuelle de ma conjointe, fonction publique. » Lina ne coche pas « oui » de mémoire. Elle ouvre la fiche, vérifie si l'ayant droit d'un régime obligatoire est une dispense à la demande, exige l'attestation annuelle, archive, vise Marc. Le 20/40 s'arrête le mois prévu par le contrat collectif et le texte, pas « dès ce soir ».",
      extra: [
        code(`DISPENSE — dossier (catégories = OUVRIR BOSS / Service-Public)
Demande écrite datée : oui / non
Catégorie invoquée : ........  (libellé recopié du texte, pas d'invention)
Pièce : ........  validité jusqu'au : ........
Texte contrôlé le : ........  URL BOSS / SP : ........
Visa RH/paie : ........
DSN : code dispense ........  (paramétrage, pas un code inventé)
Révision : date ........
Tarif 20/40 : suspendu à compter de ........

INTERDIT : liste de catégories « du cours » présentée comme exhaustive.`),
      ],
      erreurs:
        "Dispense orale. Liste 2017. Oublier de réintégrer à l'échéance. Dispenser un salarié pour améliorer son net à la demande du manager. Confondre surcomplémentaire facultative et régime de base obligatoire.",
      particuliers:
        "Multi-employeurs (déjà couvert par l'autre employeur) : cas fréquent, pièce, texte. CDD d'un mois : souvent cité parmi les familles à vérifier, pas un automatisme sans lecture. Couple dans la même entreprise. Portabilité (autre leçon) n'est pas une dispense d'actif.",
      exercice:
        "Trois demandes. Pour chacune : affilié / dispense possible à instruire / refus. (1) « Enlevez, je n'aime pas l'opticien. » (2) « Ayant droit, attestation jointe, je demande la dispense. » (3) Manager : « sors-le, il est en CSS un mois. »",
      correction:
        "(1) Refus : préférence n'est pas une dispense. Affiliation maintenue, 20/40.\n(2) À instruire : catégorie à confirmer BOSS/SP, pièce, écrit, visa, puis paramétrage.\n(3) Refus d'une dispense manager. Un CSS n'est pas, à lui seul, une catégorie que vous inventez. Lire le contrat collectif (cotisation souvent maintenue) + BOSS. Escalade, pas 0 € improvisé.",
    }),
    pack({
      title: "Prévoyance : incapacité, invalidité, décès — lire le contrat",
      description:
        "Distinguer prévoyance et mutuelle, répartitions, et obligation particulière des cadres à vérifier.",
      minutes: 18,
      objectifs:
        "Vous savez ce que finance la prévoyance, où lire les taux du dossier, et vous ne confondez pas avec l'Agirc-Arrco ni avec le maintien CCN.",
      theorie:
        "La prévoyance collective couvre des risques lourds : incapacité de travail (complément d'IJ), invalidité, décès (capital, rente). Ce n'est pas la mutuelle santé (soins). Ce n'est pas la retraite Agirc-Arrco (points). Ce n'est pas le maintien de salaire CCN (employeur), même si les flux s'articulent : l'organisme de prévoyance peut verser un complément après un délai, selon le contrat.\n\nMise en place : accord, DUE, CCN. Les cadres sont historiquement concernés par une obligation de cotisation employeur au titre de la prévoyance décès (texte issu de la convention de retraite et de prévoyance des cadres — à vérifier pour le dossier, article souvent cité du régime cadres). Un junior n'invente pas le 1,50 % ni ne l'oublie : il ouvre le contrat de prévoyance et la CCN, et il contrôle que le paramétrage cadres n'est pas à zéro sans raison.\n\nRépartition : définie par l'accord (50/50, 60/40, 100 % employeur, taux sur T1 / T2). Les taux du dossier sont des PARAMÈTRES D'ENTREPRISE, pas des taux nationaux URSSAF. Cette formation n'invente pas un 1,50 % comme chiffre du fichier rates-2026.json (il n'y est pas). Méthode : copier le taux du contrat, l'assiette (T1, T1+T2, brut), la répartition S/P, les populations (cadres / non-cadres).\n\nBulletin : lignes prévoyance S et P, distinctes de la mutuelle 20/40. DSN : contrats prévoyance. Portabilité : leçon dédiée.\n\nPériode : janvier 2026. Un salarial à 3 100 €, contrat hyp. non-cadre « prévoyance 0 » dans un mini-cas catalogue est possible ; un cadre sans prévoyance paramétrée est une alerte, pas une économie.",
      methode:
        "1. Contrats : santé vs prévoyance vs retraite.\n2. Populations.\n3. Taux, assiettes, S/P — copie du contrat.\n4. Articulation maintien CCN / IJ / prévoyance (délais).\n5. Décès, incapacité : ne pas « calculer une rente » junior.\n6. DSN et organismes.",
      exemple:
        "ETI 80 salariés, cadres et non-cadres. Deux taux prévoyance dans le contrat. Lina ouvre le PDF organisme, recopie, compare au logiciel. Écart de 0,10 point : elle n'arrondit pas, elle alerte. Elle ne prend pas le 3,15 % Agirc-Arrco pour de la prévoyance.",
      extra: [
        code(`TROIS ÉTAGES — ne pas fusionner
Santé (mutuelle)     soins courants     hyp. catalogue 20 € S / 40 € P
Prévoyance           incapacité/décès   TAUX DU CONTRAT (pas rates-2026.json)
Retraite complémentaire  Agirc-Arrco    T1 7,87 % (4,72 / 3,15) 2026 sourcé
                     CEG, CET, APEC cadres

Cadres : vérifier obligation prévoyance décès employeur (texte cadres)
         + APEC 0,024 % S / 0,036 % P (rates-2026.json)
Non-cadres : pas d'APEC ; prévoyance si accord/CCN

Tout % prévoyance chiffré dans un exercice interne = HYPOTHÈSE de contrat.`),
      ],
      erreurs:
        "Confondre mutuelle et prévoyance. Appliquer l'APEC aux non-cadres. Inventer 1,50 %. Omettre la prévoyance cadres. Cumuler maintien 100 % et IJ et prévoyance sans lire les délais (trop-perçu).",
      particuliers:
        "Catégories objectives (cadres / non-cadres) : BOSS, critère d'exonération. Un mauvais critère casse l'exonération. Hors autonomie : juriste / courtier. Incapacité longue : liaison paie / organisme / IJ.",
      exercice:
        "Le logiciel aligne « prévoyance » sur 3,15 %. Pourquoi est-ce faux ? Que doit afficher un cadre en plus de l'Agirc-Arrco T1 ?",
      correction:
        "3,15 % est le taux salarial Agirc-Arrco T1 2026 (retraite complémentaire), pas la prévoyance. Faux libellé = fausse DSN et faux organisme.\nCadre : Agirc-Arrco T1 (et T2/CET si besoin) + CEG + APEC 0,024 % S / 0,036 % P + prévoyance du CONTRAT (taux à copier, pas à inventer) + mutuelle 20/40 si affiliation.",
    }),
    pack({
      title: "Agirc-Arrco 2026 : T1, T2, CEG, CET",
      description:
        "Calculer les cotisations de retraite complémentaire avec les seuls taux du fichier officiel du cours.",
      minutes: 22,
      objectifs:
        "Vous reconstituez T1 et T2, vous appliquez CEG et CET selon le barème 2026, et vous savez quand le CET n'est pas dû.",
      theorie:
        "La retraite complémentaire des salariés du privé est l'Agirc-Arrco (régime unifié). Les taux 2026, source Agirc-Arrco / rates-2026.json :\n\nTranche 1 (≤ PMSS 4 005 €) : 7,87 % dont 4,72 % employeur et 3,15 % salarié.\nTranche 2 (de 4 005 € à 8 PASS, soit 4 005 à 32 040 € mensuels) : 21,59 % dont 12,95 % employeur et 8,64 % salarié.\nCEG T1 : 2,15 % (1,29 % P / 0,86 % S). CEG T2 : 2,70 % (1,62 % P / 1,08 % S).\nCET : 0,35 % (0,21 % P / 0,14 % S) sur T1+T2, seulement si la rémunération dépasse T1 (salaire > 4 005 €). En dessous du PMSS, CET = 0.\n\nCe sont des paramètres annuels sourcés, pas des hypothèses. Le PMSS 4 005 € (arrêté 22/12/2025) borne la T1.\n\nCalcul sur 3 100 € (≤ 4 005) : T1 = 3 100, T2 = 0, CET = 0. Salarial T1 = 3 100 × 0,0315 = 97,65 €. CEG T1 S = 3 100 × 0,0086 = 26,66 €.\nSur 5 000 € : T1 = 4 005, T2 = 995, CET dû sur 5 000. CET S = 5 000 × 0,0014 = 7,00 € (cohérent avec reference-bulletins.json).\n\nL'assiette est en principe le brut soumis retraite du mois (salaire, primes, AEN…), pas le brut après mutuelle salariale. Les IJSS ont un régime distinct. Une retenue d'absence (module 10) diminue l'assiette : 2 800 € après 300 € de CSS calendaire → T1 S = 88,20 €.\n\nDSN : blocs retraite. Un junior ne « invente » pas 8 % pour faire joli.",
      methode:
        "1. Brut soumis retraite du mois.\n2. T1 = min(brut, 4 005). T2 = max(0, min(brut, 32 040) − 4 005).\n3. Taux 2026.\n4. CET si brut > 4 005.\n5. Contrôle vs moteur.\n6. Cadre : APEC en plus (leçon suivante).",
      exemple:
        "Janvier 2026, 13e mois + base = 6 200 € (leçon 13e). T1 4 005, T2 2 195. ARRCO T1 S 126,16 €. T2 S 189,65 €. CEG T1 S 34,44 €. CEG T2 S 23,71 €. CET S 8,68 €. Sans le 13e, tout cela (sauf T1 sur 3 100) disparaît : d'où l'effet « net du 13e moins généreux que 13 nets ».",
      extra: [
        code(`AGIRC-ARRCO janvier 2026 (rates-2026.json)
PMSS / T1 plafond     4 005,00 €
T2                   4 005 à 32 040 (8 PASS ; PASS 48 060)

CAS A — 3 100,00 €
T1 3100  T2 0  CET non
ARRCO T1 S  3100×0,0315 = 97,65
CEG T1 S    3100×0,0086 = 26,66
CET S       0,00

CAS B — 5 000,00 €
T1 4005  T2 995  CET oui (5000>4005)
ARRCO T1 S  4005×0,0315 = 126,16
ARRCO T2 S   995×0,0864 =  85,97
CEG T1 S    4005×0,0086 =  34,44
CEG T2 S     995×0,0108 =  10,75
CET S       5000×0,0014 =   7,00

Taux P T1 4,72 % ; T2 12,95 % ; CEG P T1 1,29 % ; CET P 0,21 %.`),
      ],
      erreurs:
        "CET sous PMSS. T2 dès le premier euro. Utiliser 8 PASS comme plafond mensuel de T1. Appliquer les taux 2025. Confondre CEG et CET. Prendre 4,72 % en salarial.",
      particuliers:
        "Temps partiel, prorata de plafond : module plafonds, source URSSAF, pas d'invention. Multi-employeurs. Apprentis, cadres au-delà de 8 PASS : T2 plafonnée, au-delà hors T2 Agirc-Arrco. RGDU : n'allège pas l'Agirc-Arrco comme les cotisations URSSAF de la réduction ; ne pas « RGDU-iser » le 3,15 %.",
      exercice:
        "Brut 2 800,00 € après CSS calendaire de 300 € (module 10). Calculez ARRCO T1 S et CEG T1 S. CET ?",
      correction:
        "2 800 × 0,0315 = 88,20 €. 2 800 × 0,0086 = 24,08 €. CET = 0 (2 800 < 4 005). Sur 3 100 € on avait 97,65 et 26,66 : l'absence a baissé la retraite complémentaire du mois, ce n'est pas une « erreur de taux ».",
    }),
    pack({
      title: "Cadres : APEC 0,024 % / 0,036 % et association des régimes",
      description:
        "Ajouter l'APEC aux cadres, sans l'étendre aux non-cadres, et relier mutuelle, prévoyance, retraite.",
      minutes: 18,
      objectifs:
        "Vous calculez l'APEC 2026, vous savez qui est cadre au sens du paramétrage, et vous assemblez un bulletin cadre hypothèse 20/40 sans polluer le MNS.",
      theorie:
        "L'APEC (Association pour l'emploi des cadres) est financée par une cotisation sur les salaires des cadres : 0,024 % salarial et 0,036 % patronal (rates-2026.json, employee.apec / employer.apec). Ce sont des paramètres du fichier, à appliquer aux cadres, pas aux non-cadres. Assiette : en pratique la rémunération dans la limite des assiettes prévues par le régime (souvent jusqu'à la T2 — à confirmer sur le paramétrage / notice ; pour un salarial 3 500 € sous PMSS, 3 500 × 0,00024 = 0,84 € salarial, cohérent avec reference-bulletins.json cadre_3500).\n\nQui est cadre ? Classification CCN, statut, parfois article 2/4 historique. Un forfait jours n'est pas automatiquement cadre. Un « cadre » d'usage interne sans classification = alerte RH. L'APEC suit le statut cadre paramétré, pas le feeling.\n\nAssociation des lignes cadres, janvier 2026, HYPOTHÈSE 3 500 €, effectif 80 (FNAL 0,50 % : autre module), mutuelle 20/40, APEC 0,84 € S / 1,26 € P :\n- Agirc-Arrco T1 S 3 500 × 3,15 % = 110,25 €\n- CEG T1 S 3 500 × 0,86 % = 30,10 €\n- CET 0\n- APEC S 0,84 €\n- Mutuelle S 20,00 €\n- Mutuelle P 40,00 € hors MNS jusqu'au 31/12/2026\n- Prévoyance : contrat, pas inventée\n\nLe net n'est pas « 3 500 − 20 ». Il y a vieillesse, CSG, etc. (module brut-net). Ici on isole retraite + APEC + mutuelle.",
      methode:
        "1. Statut cadre écrit.\n2. APEC oui.\n3. T1/T2/CEG/CET comme tout salarié.\n4. Prévoyance cadres du contrat.\n5. Mutuelle 20/40 si affilié.\n6. MNS : sans part patronale santé en 2026.\n7. Non-cadre : APEC = 0, contrôle.",
      exemple:
        "CSP. Un non-cadre a 0,84 € d'APEC. Lina inverse : soit le statut est faux (RH), soit la rubrique est à tort sur tout le dossier. Elle ne « laisse 0,84 € ». reference-bulletins : cadre 3 500 €, APEC S 0,84 €.",
      extra: [
        code(`CADRE 3 500,00 € — janvier 2026 (éléments de ce module)
ARRCO T1 S     3 500 × 0,0315 = 110,25
CEG T1 S       3 500 × 0,0086 =  30,10
CET S          0,00            (3500 < 4005)
APEC S         3 500 × 0,00024 =  0,84
APEC P         3 500 × 0,00036 =  1,26
Mutuelle S     20,00           HYPOTHÈSE
Mutuelle P     40,00           HYPOTHÈSE, hors MNS au 31/12/2026
Prévoyance     [contrat]       pas rates-2026.json

NON-CADRE 3 500,00 € : mêmes ARRCO/CEG, APEC = 0,00.`),
      ],
      erreurs:
        "APEC à tout le monde. 0,024 % pris pour 0,24 % (×10). Oublier l'APEC cadres. Mettre 40 € dans le MNS. Confondre APEC et CET.",
      particuliers:
        "Cadre au-dessus de T1 : APEC + CET. Dirigeant assimilé salarié cadre. Statut « assimilé cadre » CCN : lire si APEC. VRP. Portabilité APEC : n'existe pas comme la mutuelle ; l'APEC est une cotisation d'emploi.",
      exercice:
        "Cadre 5 000 €. Calculez APEC S et P, CET S, ARRCO T2 S. Mutuelle 20/40 : le 40 € va-t-il dans le MNS de janvier 2026 ?",
      correction:
        "APEC S : 5 000 × 0,00024 = 1,20 €. APEC P : 1,80 €.\nCET S : 5 000 × 0,0014 = 7,00 € (brut > T1).\nARRCO T2 S : (5 000 − 4 005) × 0,0864 = 995 × 0,0864 = 85,97 €.\n40 € mutuelle P : NON, hors MNS jusqu'au 31/12/2026 (BOSS).",
    }),
    pack({
      title: "Portabilité, DSN et MNS : ce qui survit à la sortie",
      description:
        "Enseigner le principe de portabilité sans inventer une durée, et verrouiller le MNS 2026.",
      minutes: 20,
      objectifs:
        "Vous savez que la portabilité santé/prévoyance existe après certaines ruptures, vous dites au junior d'en vérifier durée et conditions, et vous traitez le MNS sans part patronale mutuelle jusqu'au 31/12/2026.",
      theorie:
        "La portabilité des couvertures santé et prévoyance permet, sous conditions, le maintien des garanties collectives après la rupture du contrat, lorsque le salarié est éligible à l'assurance chômage, dans un cadre légal (ANI, CSS). Le principe existe. Les conditions (type de rupture, droit au chômage, information, gratuité ou financement) et la DURÉE se lisent dans le Code de la sécurité sociale, le BOSS et Service-Public au jour J. Cette formation N'INVENTE PAS une durée (« 12 mois », « durée du préavis × 2 », etc.). Un junior écrit : « portabilité : principe oui, durée et ouverture à vérifier sur BOSS / Service-Public / contrat, pièces, date de fin paramétrée après visa. »\n\nCe n'est pas une dispense d'actif. Ce n'est pas une mutuelle perso. L'ancien employeur (ou l'organisme) maintient le droit ; le financement est prévu par les textes (mécanisme mutualisé, pas un précompte improvisé sur le STC). Un junior ne prélève pas 20/40 sur un solde « pour payer la portabilité » hors consigne écrite du contrat/organisme.\n\nInformation : le salarié doit être informé. Mention sur le certificat de travail / documents de sortie selon process. Organisme : signalement. DSN de fin : situation.\n\nMNS, rappel opérationnel janvier 2026 : revenu net après prélèvements sociaux obligatoires, affiché sur le bulletin (BOSS). Jusqu'au 31/12/2026, ne pas intégrer d'office la part patronale de complémentaire santé dans le MNS. Projet 2027 : à revérifier, pas à appliquer en janvier 2026. Les 40 € pédagogiques restent hors MNS.\n\nPériode : sortie le 31 janvier 2026. Dernier bulletin : salaire + mutuelle 20/40 du mois si affilié jusqu'au 31. Portabilité : après, selon éligibilité vérifiée, pas un 13e mois de mutuelle inventé.",
      methode:
        "Sortie :\n1. Rupture : ouvre-t-elle un droit chômage ? (RH, pas le junior seul).\n2. BOSS / SP : portabilité santé et prévoyance, conditions, DURÉE du texte du jour.\n3. Information salarié + organisme.\n4. Pas de 20/40 indu sur les mois postérieurs au contrat, sauf mécanisme écrit.\n5. DSN fin, CRM.\n6. MNS du dernier bulletin : sans 40 € P en 2026.",
      exemple:
        "Licenciement économique, janvier 2026. Marc : « prépare la portabilité. » Lina ne saisit pas 12 mois. Elle ouvre BOSS, liste les conditions, fait viser la date de fin, informe l'organisme, joint la mention au dossier de sortie. Le STC n'inclut pas 12 × 20 € de mutuelle salariale « d'avance ».",
      extra: [
        code(`PORTABILITÉ — principe (durée = À VÉRIFIER)
Rupture ouvrant droit au chômage ?  oui / non / RH
Textes ouverts : BOSS + Service-Public + contrat collectif  date : ......
Durée retenue : [recopiée du texte du jour, PAS inventée]
Début : lendemain de la fin du contrat
Fin paramétrée : ........  visa : ........
Organisme informé : oui  DSN : ........
Précompte 20/40 après sortie : NON sauf mécanisme écrit du contrat
MNS dernier bulletin : sans part patronale santé (jusqu'au 31/12/2026)

INTERDIT PÉDAGOGIQUE : enseigner « c'est toujours 12 mois » sans source.`),
      ],
      erreurs:
        "Inventer 12 mois. Précompter la portabilité sur le STC. Oublier l'organisme. Appliquer la portabilité après une démission sans vérifier l'ouverture chômage. Mettre 40 € dans le MNS « pour 2027 ».",
      particuliers:
        "Rupture conventionnelle, fin de CDD, inaptitude, décès : conditions d'ouverture différentes, RH. Ayants droit. Prévoyance vs santé : deux maintenens éventuellement, deux lectures. Chômage non ouvert : pas de portabilité magique. Transfert d'entreprise (L. 1224-1) : ce n'est pas une portabilité, c'est un changement d'employeur.",
      exercice:
        "Démission au 31 janvier 2026. Le salarié : « je garde la mutuelle 12 mois, c'est la loi. » Que répondez-vous ? Le 40 € patronal de janvier entre-t-il dans le MNS ?",
      correction:
        "Vous ne confirmez pas 12 mois. Vous dites : la portabilité existe sous conditions, notamment d'ouverture des droits chômage — une démission n'ouvre pas toujours ces droits ; durée et éligibilité se lisent sur BOSS / Service-Public et se visent par RH. Pas de 12 mois de mémoire.\n40 € de janvier : NON, hors MNS jusqu'au 31/12/2026 (BOSS), même sur le dernier bulletin.",
    }),
    quizLesson({
      title: "Quiz — Mutuelle, prévoyance, Agirc-Arrco et MNS",
      description:
        "Vérifier 20/40, MNS 2026, taux 2026, APEC, dispenses et portabilité.",
      passing_score: 70,
      questions: [
        q({
          question: "Les 20 € / 40 € de mutuelle du catalogue sont :",
          options: [
            "A. Le barème national URSSAF 2026",
            "B. Une HYPOTHÈSE de contrat collectif de dossier fictif",
            "C. L'APEC",
            "D. Le PMSS",
          ],
          correct: 1,
          explanation:
            "rates-2026.json, hypotheses_pedagogiques. Pas un barème national. Distinct de l'APEC et du PMSS 4 005 €.",
        }),
        q({
          question: "Jusqu'au 31/12/2026, la part patronale de complémentaire santé dans le MNS :",
          options: [
            "A. Doit être intégrée (40 € dans le MNS)",
            "B. N'est pas intégrée, selon le cadre BOSS en vigueur ; l'évolution 2027 est un projet à revérifier",
            "C. Est égale à 13 %",
            "D. Remplace la CSG",
          ],
          correct: 1,
          explanation:
            "BOSS MNS : part patronale santé hors MNS jusqu'au 31/12/2026. Ne pas anticiper 2027. 13 % est la maladie patronale URSSAF, autre objet.",
        }),
        q({
          question: "Agirc-Arrco T1 salarial 2026 sur 3 100 € :",
          options: [
            "A. 97,65 €  (3 100 × 3,15 %)",
            "B. 146,32 €  (c'est le 4,72 % patronal)",
            "C. 0 € sous le PMSS",
            "D. 7,00 €  (c'est un CET sur 5 000 €)",
          ],
          correct: 0,
          explanation:
            "3,15 % salarial T1. 4,72 % est patronal. Le CET n'est pas dû sous T1. 7,00 € = 5 000 × 0,14 %.",
        }),
        q({
          question: "Le CET Agirc-Arrco est dû :",
          options: [
            "A. Dès le premier euro",
            "B. Seulement si la rémunération dépasse la T1 (PMSS 4 005 € en 2026)",
            "C. Uniquement pour les non-cadres",
            "D. Uniquement en décembre",
          ],
          correct: 1,
          explanation:
            "Barème 2026 : CET 0,35 % si salaire > T1. Pas un privilège de statut ni de mois.",
        }),
        q({
          question: "APEC 2026 :",
          options: [
            "A. 0,024 % salarial et 0,036 % patronal, cadres",
            "B. 0,024 % pour tous les salariés",
            "C. 2,4 % salarial",
            "D. Identique au CEG T1",
          ],
          correct: 0,
          explanation:
            "Fichier des taux : 0,00024 / 0,00036, cadres. Pas 2,4 %. CEG T1 salarial = 0,86 %.",
        }),
        q({
          question: "Une dispense de mutuelle obligatoire :",
          options: [
            "A. S'accorde oralement pour améliorer le net",
            "B. Se lit dans BOSS / Service-Public (catégories à vérifier, pas une liste inventée), sur demande écrite et pièces, puis visa",
            "C. Est automatique après 3 jours de CSS",
            "D. Vaut pour toute la CCN Syntec à 20 €",
          ],
          correct: 1,
          explanation:
            "Pas de liste inventée dans le cours. Pas d'oral. Pas de lien CSS. Pas un tarif Syntec.",
        }),
        q({
          question: "La durée de portabilité santé/prévoyance dans ce cours :",
          options: [
            "A. Est 12 mois, toujours",
            "B. N'est pas inventée : le principe existe, durée et conditions se vérifient sur BOSS / Service-Public / contrat",
            "C. Est 24 mois",
            "D. Est égale au préavis légal",
          ],
          correct: 1,
          explanation:
            "Consigne pédagogique : ne pas inventer les durées. Le principe de portabilité existe ; le junior vérifie.",
        }),
        q({
          question: "Sur 5 000 €, T2 salariale Agirc-Arrco 2026 (8,64 %) :",
          options: [
            "A. 5 000 × 8,64 % = 432,00 €",
            "B. 995 × 8,64 % = 85,97 €  (T2 = 5 000 − 4 005)",
            "C. 0 €",
            "D. 4 005 × 8,64 %",
          ],
          correct: 1,
          explanation:
            "T2 = au-delà du PMSS. 995 × 0,0864 = 85,97 €. 8,64 % n'est pas sur tout le brut.",
        }),
        q({
          question: "Prévoyance et Agirc-Arrco :",
          options: [
            "A. C'est le même 3,15 %",
            "B. Sont distincts : retraite complémentaire (taux 2026 sourcés) vs risque incapacité/décès (taux du contrat, non inventés)",
            "C. Remplacent la mutuelle ANI",
            "D. Sont facultatifs pour les cadres",
          ],
          correct: 1,
          explanation:
            "Trois étages : santé, prévoyance, retraite. Le 3,15 % n'est pas la prévoyance. L'ANI santé est obligatoire hors dispenses. Les cadres ont retraite + souvent prévoyance à vérifier + APEC.",
        }),
        q({
          question: "Cadre 3 500 €, APEC salariale janvier 2026 :",
          options: [
            "A. 0,84 €  (3 500 × 0,024 %)",
            "B. 8,40 €",
            "C. 40 €",
            "D. 0 €, l'APEC a disparu",
          ],
          correct: 0,
          explanation:
            "3 500 × 0,00024 = 0,84 €, aligné sur reference-bulletins. 8,40 € serait 0,24 %. 40 € est la mutuelle patronale hypothèse.",
        }),
      ],
    }),
  ],
};
