import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 7,
  title: "Du brut aux nets : imposable, social, à payer",
  description:
    "Reconstruire un bulletin : cotisations salariales, CSG, net imposable, net avant impôt, PAS, net à payer, montant net social, et expliquer les écarts.",
  lessons: [
    pack({
      title: "La chaîne des nets : un brut, plusieurs résultats",
      description: "Nommer chaque net, son usage, et l'ordre de calcul sans les fusionner.",
      minutes: 20,
      objectifs:
        "Vous listez dans l'ordre : brut, retenues salariales, net imposable, net avant impôt, PAS, net à payer, montant net social. Vous savez à quoi chacun sert et ce qu'il n'est pas.",
      theorie:
        "Le salarié parle de « son net ». Le gestionnaire en distingue au moins cinq, plus le brut. Les confondre, c'est envoyer un faux chiffre à la banque, à la DGFIP ou à la CAF.\n\nBrut : rémunération soumise avant retenues salariales du bulletin de base (salaire de base, HS, primes soumises, avantages selon régime). Ici, les cas 2 500 € et 3 100 €.\n\nRetenues salariales : cotisations de Sécurité sociale et retraite complémentaire à la charge du salarié + CSG + CRDS (+ mutuelle salariale si le contrat le prévoit). Elles diminuent le net versé. Total 521,01 € sur 2 500 € ; 646,05 € sur 3 100 € (moteur, sans mutuelle).\n\nNet imposable : assiette du prélèvement à la source. Ce n'est pas le net versé. Formule pédagogique du moteur : brut − retenues salariales déductibles (on ne retranche pas la CSG non déductible ni la CRDS ni, le cas échéant, la mutuelle salariale selon le schéma engine). À 2 500 € : 2 050,22 €. À 3 100 € : 2 542,28 €.\n\nNet avant impôt : brut − toutes les retenues salariales du bulletin (y compris CSG ND, CRDS, mutuelle salariale). À 2 500 € : 1 978,99 €. À 3 100 € : 2 453,95 €. C'est le net « social » avant PAS.\n\nPAS (prélèvement à la source) : net imposable × taux transmis (DGFIP via DSN). Le taux est un paramètre personnel, confidentiel, jamais un taux national. Dans le cas 3 100 €, hypothèse pédagogique 8 %.\n\nNet à payer : net avant impôt − PAS. C'est le virement. À 2 500 € sans PAS : 1 978,99 €. À 3 100 € avec PAS 8 % : 2 250,57 €.\n\nMontant net social (MNS) : revenu net après prélèvements sociaux obligatoires, mentionné sur le bulletin (BOSS). Formule pédagogique 2026 du cours : brut − prélèvements sociaux salariaux obligatoires y compris CSG/CRDS. La part patronale de complémentaire santé n'est pas intégrée au MNS jusqu'au 31/12/2026 (BOSS ; projet 2027 à revérifier). Sans mutuelle et sans PAS, MNS = net à payer = 1 978,99 € à 2 500 €. Avec PAS, MNS = net avant impôt (2 453,95 €) et non le net à payer (2 250,57 €) : l'impôt n'est pas un prélèvement social.\n\nMentions : R. 3243-1 et BOSS bulletin. Le MNS s'affiche. Un junior ne le « calcule pas au feeling » pour la CAF du salarié ; il affiche le montant du bulletin et renvoie le salarié vers les organismes pour les droits.\n\nOrdre intangible : assiettes → cotisations → totaux salariaux → net imposable → net avant impôt → PAS → net à payer → MNS. Inverser PAS et CSG, c'est taxer le mauvais socle.",
      methode:
        "Sur tout bulletin à expliquer : encadrer les cinq montants. Écrire la formule de chacun. Identifier les écarts (CSG ND+CRDS, PAS, mutuelle). Préparer une phrase en vouvoiement, sans jargon, pour le salarié, et une phrase technique pour le dossier.",
      extra: [
        code(`CHAÎNE — moteur pédagogique janvier 2026 (sans mutuelle)
Brut
 − cotisations salariales déductibles (vieillesse, Arrco, CEG, CET, APEC, CSG 6,80 %, maladie S si…)
 = Net imposable          → × taux PAS = PAS
Brut − TOUTES retenues S (y compris CSG ND, CRDS, mutuelle S)
 = Net avant impôt
Net avant impôt − PAS
 = Net à payer
MNS 2026 pédagogique = brut − prélèvements sociaux S obligatoires (CSG/CRDS inclus)
  Mutuelle patronale : NON dans le MNS jusqu'au 31/12/2026 (BOSS)`),
      ],
      exemple:
        "PME, salarié à 3 100 €, taux PAS 8 %. Il écrit : « vous m'avez versé 2 250 € mais la CAF demande le net social, je mets 2 250 ? » Réponse : le MNS du bulletin est 2 453,95 € (avant PAS). Le virement 2 250,57 € est le net à payer. Deux chiffres, deux usages.",
      erreurs:
        "Dire « le net » sans préciser. Appliquer le PAS sur le brut. Croire que MNS = net imposable. Oublier que CSG ND reste dans le net imposable. Publier le taux PAS d'un collègue.",
      particuliers:
        "Saisie sur salaire, acompte, titre-restaurant : ils bougent le net à payer sans être des cotisations. Indemnités non soumises : hors brut de base. Un bulletin réel peut donc écarter MNS et net à payer pour d'autres raisons que le PAS ; vous lisez les lignes, vous n'imposez pas l'égalité.",
      exercice:
        "Sans montants : classez PAS, CSG ND, vieillesse 6,90 %, mutuelle patronale 2026, selon qu'ils diminuent le net imposable, le net à payer, le MNS pédagogique 2026.",
      correction:
        "Vieillesse 6,90 % : diminue les trois (déductible, sociale, versée). CSG ND : diminue net à payer et MNS, pas le net imposable. PAS : diminue le net à payer seulement. Mutuelle patronale jusqu'au 31/12/2026 : n'entre pas d'office dans le MNS (BOSS) ; elle n'est pas une retenue salariale ; elle peut alimenter l'assiette CSG selon le BOSS — vous ne l'inventez pas dans le bulletin nu du cours.",
    }),
    pack({
      title: "Retenues salariales hors CSG : ce qui sort du brut « social »",
      description: "Lister les cotisations S du régime général et de l'Arrco avant d'attaquer la CSG.",
      minutes: 18,
      objectifs:
        "Vous additionnez maladie S, vieillesse, Arrco, CEG, CET, APEC le cas échéant, et vous savez que chômage et AF n'ont pas de part S de droit commun.",
      theorie:
        "Avant la CSG, le bulletin privé métropole janvier 2026, non-cadre, résident fiscal France, porte en salarial : maladie 0,00 % ; vieillesse plafonnée 6,90 % ; vieillesse déplafonnée 0,40 % ; Arrco T1 3,15 % ; CEG T1 0,86 % ; Arrco T2 8,64 % et CEG T2 1,08 % si T2 ; CET 0,14 % si brut > PMSS ; éventuellement mutuelle S (hypothèse de contrat, pas un taux national).\n\nN'apparaissent pas en salarial de droit commun : AF, CSA, AT/MP, chômage, AGS, FNAL, dialogue social, maladie patronale. Les coller en « moins » du net est une erreur de lecture de colonne.\n\nÀ 2 500 €, hors CSG/CRDS : 172,50 + 10,00 + 78,75 + 21,50 = 282,75 €. C'est le bloc « Sécurité sociale + complémentaire » déductible (avec la CSG 6,80 % ensuite). Contrôle : 282,75 + 167,03 = 449,78, et 2 500 − 449,78 = 2 050,22 (net imposable). La CSG ND et la CRDS (71,23) manquent encore pour arriver au total S 521,01.\n\nÀ 3 100 €, hors CSG/CRDS : 213,90 + 12,40 + 97,65 + 26,66 = 350,61 €. Plus CSG déd. 207,11 = 557,72, et 3 100 − 557,72 = 2 542,28 (net imposable de référence).\n\nCadre : + APEC 0,024 % (0,84 € à 3 500 €). Temps partiel, entrée, T2 : les bases changent, pas la liste des lignes.\n\nContrôle junior : extraire du journal toutes les lignes employee > 0. Si une AF ou un chômage salarial apparaît sur un CDI France 2026, paramétrage à revoir.\n\nNature des taux : paramètres annuels sourcés. La mutuelle S 20 € du rates-2026.json est une HYPOTHÈSE de dossier, absente des bulletins 2 500 / 3 100 de référence.",
      methode:
        "1) Lister les lignes S attendues. 2) Recalculer hors CSG. 3) Ajouter CSG déd. pour le net imposable. 4) Ajouter CSG ND + CRDS pour le total S. 5) Écart à 521,01 ou 646,05 : reprendre une ligne, pas le net.",
      extra: [
        code(`BLOC S HORS CSG/CRDS — brut 2 500 €
Vieillesse plaf.     172,50
Vieillesse dépl.      10,00
Arrco T1              78,75
CEG T1                21,50
Sous-total            282,75
+ CSG déd.           167,03  = 449,78  → net imposable 2 500 − 449,78 = 2 050,22
+ CSG ND              58,95
+ CRDS                12,28
Total S              521,01  → net avant impôt 2 500 − 521,01 = 1 978,99`),
      ],
      exemple:
        "Cabinet. Un collaborateur additionne toutes les colonnes P et S pour « expliquer le net » et trouve 1 548 € de « charges » sur 2 500 €. Le salarié panique. Il fallait 521,01 € de salarial. L'addition patronale 1 027,15 € est le coût employeur, pas une retenue.",
      erreurs:
        "Retrancher 13 % du brut. Retrancher le chômage 4 %. Oublier la CEG. Ajouter l'APEC à un non-cadre. Utiliser 22 % forfaitaire.",
      particuliers:
        "Non-domicilié fiscal : maladie S 5,50 % possible, le bloc hors CSG change. Prévoyance salariale (contrat) : ligne supplémentaire, CCN/contrat, pas inventée ici. Elle diminue le net à payer ; son traitement net imposable / MNS se lit au BOSS, sous revue.",
      exercice:
        "Calculez le sous-total salarial hors CSG/CRDS pour 3 100 € (vieillesse + Arrco T1 + CEG T1), janvier 2026, non-cadre, < PMSS.",
      correction:
        "213,90 + 12,40 + 97,65 + 26,66 = 350,61 €. Figures moteur brut_3100. Si vous avez 3100 × (6,90+0,40+3,15+0,86)% = 350,61 exactement (3100 × 0,1131 = 350,61). Contrôle utile : 11,31 % n'est pas « le » taux de charges, c'est la somme de ces quatre taux sur un salaire entièrement en T1.",
    }),
    pack({
      title: "Du bloc CSG au net imposable",
      description: "Retrancher ce qui est déductible, laisser CSG ND et CRDS dans l'imposable.",
      minutes: 20,
      objectifs:
        "Vous calculez le net imposable comme le moteur : brut − (total S − CSG ND − CRDS − mutuelle S). Vous expliquez l'écart avec le net avant impôt.",
      theorie:
        "Le net imposable sert au PAS et à la déclaration. Définition opérationnelle du moteur pédagogique (engine.mjs) : on retranche du brut toutes les retenues salariales sauf CSG non déductible, CRDS, et mutuelle salariale. Autrement dit : on retranche vieillesse, Arrco, CEG, CET, APEC, maladie S, CSG déductible 6,80 %.\n\nOn ne retranche pas : CSG 2,40 %, CRDS 0,50 %, PAS (le PAS se calcule après), cotisations patronales.\n\nÀ 2 500 € : déductible = 521,01 − 58,95 − 12,28 = 449,78 ; net imposable = 2 500 − 449,78 = 2 050,22 €. Écart net imposable − net avant impôt = 71,23 € = 58,95 + 12,28.\n\nÀ 3 100 € : total S 646,05 ; CSG ND 73,10 ; CRDS 15,23 ; déductible = 646,05 − 73,10 − 15,23 = 557,72 ; net imposable = 3 100 − 557,72 = 2 542,28 €. Écart 2 542,28 − 2 453,95 = 88,33 € = 73,10 + 15,23.\n\nPhrase salarié : « Une partie de la CSG et la CRDS est déjà prélevée sur votre virement, mais l'administration fiscale les laisse dans la base du prélèvement à la source. Ce n'est pas un double prélèvement d'impôt, c'est la définition du net imposable. »\n\nLe PAS se calcule sur ce net imposable, pas sur le brut, pas sur le MNS. Taux 8 % × 2 542,28 = 203,3824 → 203,38 € (bulletin 3 100).\n\nContrôle : net imposable > net avant impôt dès que CSG ND + CRDS > 0, ce qui est le cas général d'un salaire. Si net imposable < net avant impôt, vous avez retranché deux fois la CSG ND ou oublié de l'exclure.\n\nSource : logique fiscale CSG déductible vs non déductible (barème MSA / CGI, retenue à la source DGFIP). Mentions bulletin : BOSS / R. 3243-1.",
      methode:
        "1) Total S. 2) Isoler CSG ND et CRDS. 3) Net imposable = brut − (total S − CSG ND − CRDS) [sans mutuelle S dans nos cas]. 4) Vérifier égalité avec 2 050,22 ou 2 542,28. 5) PAS = net imposable × taux.",
      extra: [
        code(`NET IMPOSABLE — deux contrôles
2 500 − 449,78 = 2 050,22
1 978,99 + 58,95 + 12,28 = 2 050,22

3 100 − 557,72 = 2 542,28
2 453,95 + 73,10 + 15,23 = 2 542,28

PAS 8 % sur 2 542,28 = 203,38  (jamais 8 % × 3 100 = 248)`),
      ],
      exemple:
        "Un expert-comptable stagiaire applique 8 % sur 3 100 € (248 €) au lieu de 203,38 €. Écart 44,62 € de trop-prélevé. Réclamation, régularisation PAS, CRM DSN. Le geste « PAS sur le brut » est une faute de débutant coûteuse.",
      erreurs:
        "Retrancher 9,70 % d'un coup du brut pour l'imposable. Oublier que la CSG déd. 6,80 % EST déductible. Prendre le MNS comme base PAS. Arrondir le taux PAS à 10 % « pour simplifier ».",
      particuliers:
        "Taux PAS neutre, individualisé, personnalisé : le taux vient du flux DGFIP, pas d'un choix du gestionnaire. Barème mensualisé : hors consigne. Heures supplémentaires exonérées d'impôt dans certaines limites : elles peuvent créer un écart brut / net imposable supplémentaire — dossier supervisé, ne pas l'inventer sur 2 500 € de base (les HS du module 08 sont un autre sujet).",
      exercice:
        "À partir de total S 646,05, CSG ND 73,10, CRDS 15,23, brut 3 100, calculez net imposable, PAS à 8 %, net avant impôt, net à payer.",
      correction:
        "Net imposable 2 542,28 ; PAS 203,38 ; net avant impôt 3 100 − 646,05 = 2 453,95 ; net à payer 2 453,95 − 203,38 = 2 250,57. Exactement brut_3100_pas_8pct.",
    }),
    pack({
      title: "PAS, net avant impôt et net à payer",
      description: "Le virement n'est pas l'imposable. Le taux PAS est confidentiel et personnel.",
      minutes: 18,
      objectifs:
        "Vous calculez le PAS sur le net imposable, vous obtenez le net à payer, et vous appliquez les règles de confidentialité.",
      theorie:
        "Le prélèvement à la source de l'impôt sur le revenu est collecté par l'employeur, déclaré en DSN, reversé à la DGFIP. Base : net imposable. Taux : transmis par l'administration (taux personnalisé, individualisé, ou non personnalisé selon la situation). Confidentialité : un collègue, un manager, un client en open space n'ont pas à connaître le taux. Le gestionnaire le voit pour produire le bulletin ; il ne le commente pas.\n\nFormule : PAS = arrondi au centime de (net imposable × taux). Net à payer = net avant impôt − PAS.\n\nCas 2 500 €, taux 0 (hypothèse du bulletin de référence brut_2500) : PAS = 0 ; net à payer = 1 978,99 €.\n\nCas 3 100 €, taux 8 % — HYPOTHÈSE pédagogique, pas un taux national : PAS = 2 542,28 × 0,08 = 203,3824 → 203,38 € ; net avant impôt 2 453,95 € ; net à payer 2 250,57 €.\n\nLe taux 8 % n'est ni « le taux moyen des Français » ni un paramètre URSSAF. Il est étiqueté comme le sont AT/MP et mutuelle : hypothèse de dossier fictif pour apprendre le calcul.\n\nNet avant impôt = ce que le salarié toucherait si le PAS était nul, après cotisations et CSG/CRDS. C'est aussi, dans nos bulletins sans mutuelle, le MNS pédagogique 2026.\n\nContrôle d'égalité : net à payer + PAS + total S = brut. 2 250,57 + 203,38 + 646,05 = 3 100,00. Si la somme casse, une ligne a été oubliée ou le PAS a été pris sur le brut.\n\nNature : obligation légale de collecter le PAS ; le taux est un paramètre personnel DGFIP ; 8 % ici = hypothèse pédagogique.",
      methode:
        "1) Obtenir le net imposable contrôlé. 2) Appliquer le taux du dossier (jamais un taux « du voisin »). 3) Arrondir le PAS au centime. 4) Retrancher du net avant impôt. 5) Contrôler brut = S + PAS + net à payer (sans acomptes). 6) Ne pas écrire le taux dans un mail collectif.",
      extra: [
        code(`CONTRÔLE D'ÉQUILIBRE — brut 3 100, PAS 8 %
Retenues S          646,05
PAS                 203,38
Net à payer       2 250,57
Somme             3 100,00

Ne pas afficher le taux PAS dans un tableau partagé non habilité.
Le 8 % est une HYPOTHÈSE de cas, pas un barème URSSAF.`),
      ],
      exemple:
        "CSP. Un manager : « dis-moi le taux d'impôt de Léa, je veux voir si elle peut faire des heures ». Refus. Le taux PAS n'est pas un outil de management. Vous orientez vers la charge de travail et le brut, pas vers l'impôt personnel.",
      erreurs:
        "PAS sur brut. PAS sur MNS. Copier le taux du conjoint. Mettre un taux « neutre » de tête sans flux DGFIP. Oublier le PAS dans l'équilibre (le SEPA ne matchera pas le journal si l'on inverse les colonnes).",
      particuliers:
        "Taux à 0 : possible (jeune, faible revenu, option). Taux élevé : possible. Changement de taux en cours de mois : suivre le flux, pas un mail du salarié « mettez 0 je suis en difficulté » sans instruction DGFIP. Régularisation d'un trop-prélevé PAS : process DGFIP / bulletin suivant, pas une prime inventée.",
      exercice:
        "Net imposable 2 050,22 €, taux PAS hypothèse 10 %. Calculez le PAS et le net à payer si net avant impôt = 1 978,99 €.",
      correction:
        "PAS = 2 050,22 × 0,10 = 205,022 → 205,02 €. Net à payer = 1 978,99 − 205,02 = 1 773,97 €. Le MNS resterait 1 978,99 € (l'impôt n'entre pas dans le MNS). Ce 10 % n'est pas le cas de référence 2 500 € (qui est à PAS 0).",
    }),
    pack({
      title: "Montant net social 2026 : formule, BOSS, limite 2027",
      description: "MNS = brut − prélèvements sociaux salariaux obligatoires (CSG/CRDS inclus). Mutuelle patronale hors MNS jusqu'au 31/12/2026.",
      minutes: 22,
      objectifs:
        "Vous calculez le MNS pédagogique 2026, vous le distinguez du net à payer et du net imposable, et vous refusez d'anticiper le projet 2027 comme s'il était déjà la règle.",
      theorie:
        "Le montant net social est une mention du bulletin. Doctrine : BOSS — « Montant net social » (legal-sources.json BOSS-MNS). Il représente le revenu net après prélèvements sociaux obligatoires, utilisé notamment pour certains droits sociaux (logique « ressources »). Ce n'est pas un net bancaire.\n\nFormule pédagogique 2026 retenue par le moteur du cours : MNS = brut − cotisations et contributions salariales obligatoires, CSG et CRDS comprises. On ne retranche pas le PAS. On ne retranche pas, dans cette formule, des éléments hors champ. Jusqu'au 31/12/2026, la part patronale de complémentaire santé n'est pas intégrée d'office au MNS : le BOSS maintient un modèle provisoire de bulletin prolongé jusqu'à cette date. Une évolution au 01/01/2027 (intégration de la part patronale de complémentaire santé) est présentée comme un projet à revérifier, pas comme une règle déjà applicable. Source : rates-2026.json, note BOSS-MNS.\n\nConséquences chiffrées sans mutuelle : MNS = net avant impôt. À 2 500 € : 1 978,99 €. À 3 100 € : 2 453,95 € (alors que le net à payer est 2 250,57 € à cause du PAS 203,38 €).\n\nSi l'on activait la mutuelle hypothèse 20 € S / 40 € P : le net à payer baisserait de 20 € ; le MNS pédagogique 2026, selon le moteur, resterait calculé hors ligne MUT (engine : filtre code !== \"MUT\"). La part patronale 40 € n'est pas ajoutée au MNS jusqu'au 31/12/2026. Vous n'ajoutez pas 40 € « pour anticiper 2027 ».\n\nContrôle : MNS ≥ net à payer lorsque le PAS > 0 et qu'il n'y a pas d'autres retenues non sociales. MNS ≠ net imposable (CSG ND et CRDS).\n\nUn junior n'invente pas une « CSG à 9,2 % dans le MNS » ni un abattement CAF. Il affiche le montant, il cite le BOSS s'il doit expliquer la mention, il n'accorde pas une prestation.\n\nNature : doctrine administrative BOSS + obligation d'affichage sur le bulletin. Paramètre 2027 = projet. Mutuelle 20/40 = hypothèse de dossier, absente des deux cas de référence de ce module.",
      methode:
        "1) Recalculer brut − lignes S obligatoires (hors MUT dans le moteur 2026). 2) Comparer au champ montant net social du bulletin. 3) Si PAS : expliquer que le virement est inférieur. 4) Si un responsable demande d'ajouter la mutuelle P en 2026 : citer le BOSS, ne pas anticiper 2027. 5) Relire le BOSS à chaque millésime.",
      noteText:
        "Jusqu'au 31/12/2026 : ne pas intégrer d'office la part patronale de complémentaire santé dans le MNS. 2027 : projet, à revérifier sur le BOSS avant toute production. AT/MP et PAS restent hors MNS (patronal / impôt).",
      extra: [
        code(`MNS 2026 — pédagogie LOU (engine.mjs)
MNS = brut − Σ employee des lignes sauf MUT
2 500 − 521,01 = 1 978,99  = net à payer (PAS 0)
3 100 − 646,05 = 2 453,95  ≠ net à payer 2 250,57 (PAS 203,38)

Mutuelle P 40 € : PAS DANS le MNS jusqu'au 31/12/2026 (BOSS)
Ne pas « corriger » le MNS pour faire plaisir à un simulateur web grand public.`),
      ],
      exemple:
        "RH envoie un article « dès 2027 la mutuelle patronale rentrera dans le net social ». Le junior ne reparamètre pas janvier 2026. Il annote la veille : projet, BOSS à relire avant janvier 2027. La clôture en cours reste sur le cadre 2026.",
      erreurs:
        "Égaliser MNS et net à payer malgré le PAS. Ajouter 40 € de mutuelle P en 2026. Retrancher le PAS du MNS. Utiliser le net indicatif Service-Public 1 443,11 € comme MNS universel.",
      particuliers:
        "Indemnités de rupture, IJ, avantages : le BOSS détaille des inclusions / exclusions. Un STC n'est pas le bulletin 2 500 €. Vous ouvrez le BOSS, vous n'extrapolez pas. Simulateur CAF du salarié : vous ne le remplissez pas à sa place avec un chiffre « arrangé ».",
      exercice:
        "Pour 3 100 € PAS 8 %, donnez MNS, net à payer, net imposable, et une phrase d'explication salarié (trois phrases max).",
      correction:
        "MNS 2 453,95 € ; net à payer 2 250,57 € ; net imposable 2 542,28 €. Phrase : « Le montant net social (2 453,95 €) est votre revenu après cotisations et CSG/CRDS, avant impôt. L'impôt prélevé à la source (203,38 €) donne le virement 2 250,57 €. Le net imposable 2 542,28 € est la base de cet impôt, légèrement supérieure au net social à cause de la CSG non déductible et de la CRDS. »",
    }),
    pack({
      title: "Reconstruction : bulletin 2 500 €, PAS 0",
      description: "Refaire le bulletin de référence jusqu'aux nets, chiffres moteur exacts.",
      minutes: 24,
      objectifs:
        "Vous reconstituez brut_2500 de reference-bulletins.json : 521,01 / 2 050,22 / 1 978,99, et vous savez montrer l'égalité des trois nets lorsque le PAS est nul.",
      theorie:
        "Cas : janvier 2026, métropole, régime général, non-cadre, effectif 20, brut 2 500,00 €, RGDU non appliquée, AT/MP 1,50 % hypothèse, mutuelle non, PAS 0. C'est le même dossier que le module cotisations ; ici l'enjeu est la chaîne des nets, pas le détail de chaque taux déjà vu.\n\nTotal S = 521,01 € (dont CSG ND 58,95 et CRDS 12,28). Net imposable = 2 050,22 €. Net avant impôt = 1 978,99 €. PAS = 0. Net à payer = 1 978,99 €. MNS = 1 978,99 €.\n\nPourquoi les trois derniers coïncident : pas de PAS, pas de mutuelle S, pas d'acompte, pas de saisie. Cette égalité n'est pas une loi : elle est un cas particulier. Dès le bulletin 3 100 € elle se brise.\n\nContrôle d'écriture : 2 500 = 521,01 + 0 + 1 978,99. Net imposable = 1 978,99 + 71,23. Patronal 1 027,15 € n'entre dans aucun net.\n\nCoût employeur pédagogique : 2 500 + 1 027,15 = 3 527,15 € (hors mutuelle P, hors VM). Utile en conseil interne, inutile pour le virement.\n\nVous devez pouvoir refaire ce bulletin en vingt minutes, sans logiciel, avec le barème. C'est le niveau demandé en entretien junior, pas une certification Sage ou Silae.\n\nLe MNS 2026 pédagogique égale ici le net à payer parce que le PAS est nul et qu'aucune mutuelle salariale n'est saisie. Jusqu'au 31/12/2026, une part patronale de complémentaire santé n'entrerait pas d'office dans ce MNS (BOSS) : ne l'ajoutez pas « pour faire vrai ». L'AT/MP 37,50 € reste une HYPOTHÈSE ; il pèse le patronal 1 027,15 €, jamais le net. La RGDU n'est pas appliquée : un allègement changerait le coût employeur, pas ces 1 978,99 € salariaux.",
      methode:
        "Reprendre le tableau des cotisations du module 05, puis enchainer les cinq nets. Chronométrer. L'écart de 0,01 € se corrige sur CSG/CRDS.",
      extra: [
        code(`BRUT 2 500,00 — CHAÎNE DES NETS (reference-bulletins.json brut_2500)
csgBase                 2 456,25
VIE_PLAF_s                172,50
ARRCO_T1_s                 78,75
employeeTotal             521,01
employerTotal           1 027,15
netImposable            2 050,22
netAvantImpot           1 978,99
pas                         0,00
netAPayer               1 978,99
montantNetSocial        1 978,99

ÉGALITÉ DE CONTRÔLE : MNS = net à payer = net avant impôt  car PAS = 0
2 050,22 − 1 978,99 = 71,23 = CSG ND + CRDS`),
      ],
      exemple:
        "Entretien : « calculez un net à 2 500 € brut ». Un candidat qui répond « environ 1 950 » n'est pas faux d'un ordre de grandeur, mais le recruteur paie attend 1 978,99 et la méthode. Vous donnez la méthode et le centime.",
      erreurs:
        "Répondre 1 443 € (confusion SMIC). Oublier 521,01. Dire que 1 027,15 se retranche du brut. Appliquer 8 % de PAS « comme l'autre exercice ».",
      particuliers:
        "Le net indicatif Service-Public du SMIC (1 443,11 €) n'est pas ce bulletin. Écart possible de 0,02 € sur le SMIC pédagogique (1 443,09) : note dans reference-bulletins.json. Ne jamais servir un chiffre de communication comme formule.",
      exercice:
        "À partir de employeeTotal 521,01 seulement, reconstituez net avant impôt, et avec CSG ND 58,95 + CRDS 12,28 reconstituez le net imposable.",
      correction:
        "Net avant impôt = 2 500 − 521,01 = 1 978,99. Net imposable = 1 978,99 + 58,95 + 12,28 = 2 050,22. Ou 2 500 − (521,01 − 71,23) = 2 050,22.",
    }),
    pack({
      title: "Reconstruction : bulletin 3 100 €, PAS 8 %",
      description: "Chiffres exacts du moteur : imposable 2 542,28, PAS 203,38, net 2 250,57, MNS 2 453,95.",
      minutes: 26,
      objectifs:
        "Vous reconstruisez brut_3100_pas_8pct ligne à ligne jusqu'aux nets, et vous expliquez pourquoi MNS ≠ net à payer.",
      theorie:
        "Cas : brut 3 100,00 €, mêmes hypothèses que 2 500 € (janvier 2026, non-cadre, effectif 20, RGDU off, AT/MP 1,50 % hypothèse, mutuelle non), plus un taux PAS de 8 % — HYPOTHÈSE pédagogique de dossier, confidentielle dans la vraie vie.\n\nAssiettes : T1 = 3 100 (< 4 005) ; T2 = 0 ; CSG = 3 100 × 0,9825 = 3 045,75.\n\nTotal S moteur 646,05 €. Détail S : vieillesse 213,90 + 12,40 ; Arrco T1 97,65 ; CEG T1 26,66 ; CSG déd. 207,11 ; CSG ND 73,10 ; CRDS 15,23. Somme 646,05.\n\nPatronal 1 273,67 € dont maladie 403,00 ; AF 162,75 ; AT/MP 46,50 (hypothèse) ; chômage 124,00 ; FNAL 3,10 ; CSA 9,30 ; dialogue 0,50 ; vieillesse P 265,05 + 65,41 ; Arrco T1 P 146,32 ; CEG T1 P 39,99.\n\nNets : imposable 2 542,28 ; avant impôt 2 453,95 ; PAS 203,38 ; à payer 2 250,57 ; MNS 2 453,95.\n\nÉcarts à savonner : 2 542,28 − 2 453,95 = 88,33 (CSG ND + CRDS). 2 453,95 − 2 250,57 = 203,38 (PAS). 3 100 − 2 250,57 = 849,43 = 646,05 + 203,38.\n\nLe salarié « perd » 849,43 € par rapport au brut : 646,05 de social salarial, 203,38 d'impôt. Le 1 273,67 patronal est un autre compte.\n\nCe bulletin est l'exercice d'entretien complet : assiettes, cotisations, imposable, PAS, MNS. Vous le refaites jusqu'à l'égalité 3 100,00. La part patronale 1 273,67 € (dont AT/MP 46,50 €, HYPOTHÈSE) n'entre dans aucun de ces nets. La mutuelle patronale, si elle existait, n'entrerait pas dans le MNS jusqu'au 31/12/2026 (BOSS).",
      methode:
        "Tableau unique : lignes, totaux, chaîne des nets, équilibre. Faire vérifier par un binôme : un calcule S, l'autre les nets.",
      extra: [
        code(`BULLETIN 3 100,00 € — janvier 2026 — PAS 8 % HYPOTHÈSE
Non-cadre | effectif 20 | RGDU OFF | AT/MP 1,50 % HYPOTHÈSE | mutuelle NON
T1=3 100  T2=0  CSG=3 045,75

Maladie P 403,00 | CSA 9,30 | VIE S 213,90+12,40 P 265,05+65,41
AF 162,75 | AT/MP 46,50 hyp. | FNAL 3,10 | CHOM 124,00 | AGS 7,75 | DS 0,50
Arrco T1 S 97,65 P 146,32 | CEG T1 S 26,66 P 39,99
CSG déd. 207,11 | CSG ND 73,10 | CRDS 15,23

employeeTotal     646,05
employerTotal   1 273,67
netImposable    2 542,28
pasRate           0,08   HYPOTHÈSE
pas               203,38
netAvantImpot   2 453,95
netAPayer       2 250,57
montantNetSocial 2 453,95   ← PAS non déduit

ÉQUILIBRE  646,05 + 203,38 + 2 250,57 = 3 100,00`),
      ],
      exemple:
        "Le salarié appelle : « mon MNS et mon virement ne sont pas les mêmes, votre bulletin est faux ». Vous ouvrez les trois lignes, vous montrez 203,38 € de PAS, vous ne corrigez pas un bulletin juste. Vous proposez un écrit court, pas un débat sur « l'utilité de l'impôt ».",
      erreurs:
        "PAS = 8 % × 3 100 = 248. MNS = 2 250,57. Oublier CEG 26,66. FNAL 0,50 %. Ouvrir une T2.",
      particuliers:
        "Si le taux PAS réel du salarié était 0, le virement serait 2 453,95 €, identique au MNS. Si mutuelle S 20 € : virement 2 230,57 € dans la logique moteur, MNS encore 2 453,95 € (MUT filtrée). Ces variantes ne sont pas le cas de référence ; elles préparent le contrôle d'écarts.",
      exercice:
        "Recalculez uniquement : assiette CSG, CRDS, net imposable (si déductible = 557,72), PAS 8 %, net à payer (total S 646,05).",
      correction:
        "CSG 3 045,75 ; CRDS 15,23 ; net imposable 3 100 − 557,72 = 2 542,28 ; PAS 203,38 ; net à payer 3 100 − 646,05 − 203,38 = 2 250,57. Conforme à reference-bulletins.json et au moteur.",
    }),
    pack({
      title: "Écarts, contrôles et explication au salarié",
      description: "Diagnostiquer un net qui « a bougé » et répondre sans divulguer ni bluffer.",
      minutes: 20,
      objectifs:
        "Vous construisez une check-list d'écarts (brut, assiettes, PAS, MNS, mutuelle, HS, entrée) et vous rédigez une réponse professionnelle.",
      theorie:
        "Un net qui change d'un mois à l'autre a toujours une cause documentable. Les causes fréquentes, dans l'ordre de recherche : 1) variation du brut (HS, prime, absence, CP, entrée/sortie). 2) Changement de taux PAS. 3) Franchissement de plafond (CET, T2). 4) Mutuelle, prêt, saisie, acompte. 5) Paramètre annuel (janvier : PMSS, SMIC, taux). 6) Erreur de saisie ou de rubrique. 7) Régularisation de plafond.\n\nMéthode d'écart : bulletin N vs N-1, colonne brut, colonne total S, colonne PAS, colonne net à payer, colonne MNS. Un seul écart à la fois. Janvier 2026 vs décembre 2025 : le PMSS a changé, les taux éventuellement aussi ; « c'est comme en décembre » est faux.\n\nÉcart 2 500 vs 3 100 (hors PAS) : +600 € de brut ne donnent pas +600 € de net. Delta S = 646,05 − 521,01 = 125,04. Delta net avant impôt = 2 453,95 − 1 978,99 = 474,96. Contrôle : 600 − 125,04 = 474,96. Le taux moyen salarial n'est pas constant (CSG sur 98,25 %, mais surtout plus tard T2).\n\nRéponse salarié : faits, chiffres du bulletin, formule en français, offre de détailler une ligne. Pas de « le logiciel a raison ». Pas de comparaison avec un collègue. Pas de conseil en optimisation fiscale personnelle.\n\nLimite junior : si l'écart vient d'un paramétrage (taux AT, rubrique HS, PAS non mis à jour), vous bloquez, vous n'expliquez pas une erreur comme une règle.\n\nContrôles clôture liés aux nets : nets ≤ 0 ; MNS ≠ formule ; PAS > net avant impôt ; net imposable < net avant impôt ; écart d'un centime de masse après arrondis (journal vs SEPA).",
      methode:
        "Grille N / N-1. Puis phrase d'explication. Puis, si besoin, mail factuel de dix lignes, recopié au responsable si le dossier est sensible (saisie, PAS, santé).",
      extra: [
        code(`MAIL TYPE — écart de net (à adapter, jamais de taux PAS d'un tiers)
Objet : Votre bulletin de janvier 2026 — écart de net

Bonjour,
Votre brut est passé de 2 500,00 € à 3 100,00 €.
Les cotisations salariales (y compris CSG/CRDS) passent de 521,01 € à 646,05 €.
Le montant net social est 2 453,95 €.
Un prélèvement à la source s'applique sur le net imposable (2 542,28 €), d'où un net à payer de 2 250,57 €.
Je reste disponible pour reprendre une ligne du bulletin lors d'un créneau confidentiel.
Cordialement,`),
      ],
      exemple:
        "Industrie, janvier. 80 salariés voient un net différent à brut identique : nouveau PMSS, peut-être CET pour ceux > 4 005, nouveau barème. Un mail collectif explique le millésime, jamais les situations individuelles. Les cas T2 se traitent en rendez-vous.",
      erreurs:
        "Répondre avant d'ouvrir le bulletin. Dire « c'est l'État ». Comparer deux salariés. Recalculer le PAS à l'oral avec un taux inventé. Promettre une régularisation pour « calmer » sans cause.",
      particuliers:
        "Net négatif : ne pas vireer en négatif sans process (saisie + mutuelle). Trop-perçu : dossier de récupération, information du salarié, pas une retenue surprise hors cadre. Réclamation écrite : accusé réception, délai interne, responsable en copie si juridique.",
      exercice:
        "Un salarié à 2 500 € (bulletin de référence) écrit : « mon collègue à 3 100 € touche 2 250 €, moi 1 979 €, l'écart n'est pas proportionnel, vous me volez. » Rédigez les trois arguments chiffrés, sans divulguer le PAS du collègue comme s'il était public — en restant sur les bulletins pédagogiques déjà connus du cours.",
      correction:
        "1) L'écart de brut est 600 €, pas une proportion de nets. 2) Sur 2 500 €, PAS = 0 dans le cas de référence, net 1 978,99 € ; sur 3 100 € le cas du cours a un PAS de 203,38 € : comparer 1 978,99 à 2 250,57 sans retirer le PAS est trompeur — le MNS du 3 100 € est 2 453,95 €. 3) Même hors PAS, 600 € de brut ne donnent pas 600 € de net (charges salariales +125,04 €). Vous n'affirmez pas le taux PAS d'un vrai collègue ; vous enseignez avec les deux cas du cours, ou vous recevez chaque salarié séparément.",
    }),
    quizLesson({
      title: "Quiz — Du brut aux nets",
      description: "Imposable, PAS, MNS, bulletins 2 500 € et 3 100 €.",
      passing_score: 70,
      questions: [
        q({
          question: "Sur le bulletin pédagogique 2 500 € (PAS 0, sans mutuelle), net à payer et MNS valent :",
          options: [
            "A. 2 050,22 €",
            "B. 1 978,99 €",
            "C. 1 027,15 €",
            "D. 2 500,00 €",
          ],
          correct: 1,
          explanation:
            "employeeTotal 521,01 ; 2 500 − 521,01 = 1 978,99. 2 050,22 est le net imposable. 1 027,15 est le patronal.",
        }),
        q({
          question: "Le net imposable du bulletin 3 100 € PAS 8 % est :",
          options: [
            "A. 3 100,00 €",
            "B. 2 250,57 €",
            "C. 2 542,28 €",
            "D. 2 453,95 €",
          ],
          correct: 2,
          explanation:
            "reference-bulletins.json brut_3100_pas_8pct.netImposable = 2542.28. Base du PAS, pas le virement.",
        }),
        q({
          question: "Le PAS de ce même bulletin 3 100 € à 8 % vaut :",
          options: [
            "A. 248,00 € (8 % du brut)",
            "B. 203,38 € (8 % du net imposable 2 542,28)",
            "C. 196,32 € (8 % du MNS)",
            "D. 0 € car la CSG remplace l'impôt",
          ],
          correct: 1,
          explanation:
            "PAS = 2 542,28 × 0,08 = 203,38 €. Jamais sur le brut. Le 8 % est une hypothèse de dossier.",
        }),
        q({
          question: "Le MNS pédagogique 2026 du bulletin 3 100 € PAS 8 % est :",
          options: [
            "A. 2 250,57 € (net à payer)",
            "B. 2 453,95 € (brut − cotisations/CSG/CRDS salariales, PAS non déduit)",
            "C. 2 542,28 €",
            "D. 3 100 € − 40 € de mutuelle patronale",
          ],
          correct: 1,
          explanation:
            "MNS = 2 453,95 = net avant impôt. Le PAS n'est pas un prélèvement social. Pas de mutuelle dans ce cas ; la part patronale n'entre pas dans le MNS jusqu'au 31/12/2026 (BOSS).",
        }),
        q({
          question: "Jusqu'au 31/12/2026, la part patronale de complémentaire santé dans le MNS :",
          options: [
            "A. Doit être ajoutée d'office (règle 2027 déjà applicable)",
            "B. N'est pas intégrée d'office ; le BOSS maintient le cadre transitoire ; 2027 est un projet à revérifier",
            "C. Vaut toujours 40 € nationalement",
            "D. Remplace la CSG",
          ],
          correct: 1,
          explanation:
            "BOSS-MNS : modèle provisoire prolongé jusqu'au 31/12/2026. 40 € est une hypothèse de dossier, pas un barème national.",
        }),
        q({
          question: "CSG non déductible et CRDS :",
          options: [
            "A. Diminuent le net à payer mais restent dans le net imposable",
            "B. Sont patronales",
            "C. Sont le PAS",
            "D. Ne s'appliquent qu'au-delà du PMSS",
          ],
          correct: 0,
          explanation:
            "À 2 500 € : 58,95 + 12,28 = 71,23 d'écart imposable vs avant impôt. Assiette 98,25 % jusqu'à 4 PASS, pas le PMSS.",
        }),
        q({
          question: "Contrôle d'équilibre du bulletin 3 100 € :",
          options: [
            "A. 646,05 + 203,38 + 2 250,57 = 3 100,00",
            "B. 1 273,67 + 2 250,57 = 3 100,00",
            "C. 2 542,28 + 646,05 = 3 100,00",
            "D. 2 453,95 + 646,05 = 3 100,00",
          ],
          correct: 0,
          explanation:
            "Brut = salarial + PAS + net à payer (cas sans acompte). D : 2 453,95 + 646,05 = 3 100 (c'est l'équilibre avant PAS, pas après). La question porte sur l'équilibre avec PAS.",
        }),
        q({
          question: "Le taux PAS 8 % du cas 3 100 € est :",
          options: [
            "A. Un taux URSSAF 2026",
            "B. Une HYPOTHÈSE pédagogique de dossier ; le vrai taux est personnel et DGFIP",
            "C. Le taux AGS",
            "D. Obligatoire pour tous les non-cadres",
          ],
          correct: 1,
          explanation:
            "Comme l'AT/MP, le taux PAS du cas est étiqueté. Confidentialité. Jamais un paramètre national unique.",
        }),
        q({
          question: "Quel ordre de calcul est correct ?",
          options: [
            "A. PAS sur le brut, puis cotisations sur le reste",
            "B. Cotisations et CSG, puis net imposable, puis PAS, puis net à payer ; MNS hors PAS",
            "C. MNS d'abord, puis on reconstitue le brut",
            "D. Net à payer imposé par le salarié, cotisations par différence",
          ],
          correct: 1,
          explanation:
            "La chaîne est descendante depuis le brut. On ne part pas d'un net souhaité. Le MNS se déduit des prélèvements sociaux, pas de l'impôt.",
        }),
      ],
    }),
  ],
};
