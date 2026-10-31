import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 6,
  title: "Plafonds, tranches et régularisation",
  description:
    "Maîtriser le PMSS 4 005 €, le PASS 48 060 €, les principes de prorata, les tranches Agirc-Arrco T1/T2 et la régularisation progressive versus annuelle.",
  lessons: [
    pack({
      title: "PMSS, PASS et valeurs 2026",
      description: "Ancrer les plafonds officiels et leur rôle dans le bulletin, sans les confondre.",
      minutes: 18,
      objectifs:
        "Vous citez les plafonds 2026 sourcés, vous distinguez PMSS, PASS, plafond journalier et horaire, et vous savez à quelles cotisations chacun sert.",
      theorie:
        "Le plafond de la Sécurité sociale est un paramètre annuel, fixé par arrêté, repris par l'URSSAF. Pour les cotisations dues au titre des périodes d'activité à compter du 01/01/2026 : plafond annuel (PASS) 48 060 € ; plafond mensuel (PMSS) 4 005 € ; plafond journalier 220 € ; plafond horaire 30 €. Source : arrêté du 22 décembre 2025, fiche URSSAF « Plafonds de la Sécurité sociale », mise à jour le 01/01/2026 (legal-sources.json ARRETE-PMSS-2025-12-22).\n\nLe PMSS n'est pas « le salaire maximum ». C'est le plafond d'assiette de certaines cotisations. Un salarié peut gagner 8 000 € : une partie des cotisations s'arrête à 4 005 €, d'autres continuent.\n\nÀ quoi sert le PMSS mensuel en paie ? Vieillesse plafonnée (6,90 % / 8,55 %). FNAL à 0,10 % si effectif < 50. Tranche 1 Agirc-Arrco. Seuil de déclenchement de la CET (si rémunération > PSS). Point de départ de la T2.\n\nÀ quoi sert le PASS annuel ? Vérifier qu'on n'a pas cotisé plus que 48 060 € d'assiette plafonnée sur l'année. Base des 4 PASS (chômage, AGS, abattement CSG, APEC) : 4 × 48 060 = 192 240 €. Base des 8 PASS de la T2 annuelle : 8 × 48 060 = 384 480 €, soit 8 × 4 005 = 32 040 € par mois plein.\n\nPlafond journalier 220 € et horaire 30 € : utilisés lorsque la période d'emploi n'est pas un mois civil complet selon les modalités URSSAF (entrées, sorties, certaines assimilations). Vous connaissez leur existence. Vous n'improvisez pas la formule de conversion sans ouvrir la fiche URSSAF du jour (leçon prorata).\n\nNature : paramètre annuel, pas une CCN, pas une hypothèse d'entreprise. Recopier 3 864 € ou 3 925 € en janvier 2026 est l'erreur classique de clôture. Le logiciel ne change de plafond que si quelqu'un a chargé le millésime.\n\nContrôle janvier : tous les dossiers du portefeuille doivent afficher 4 005, pas un mixte décembre/janvier. Un salarié entré en 2025 n'emporte pas « son » ancien plafond : le plafond suit la période d'emploi.\n\nLe SMIC (12,02 €/h, 1 823,03 €/mois) n'est pas un plafond de cotisations. Il sert au minimum salarial et à la RGDU (SMIC de référence 01/01/2026). Ne pas les confondre.",
      methode:
        "À l'ouverture de janvier : 1) Ouvrir la fiche URSSAF plafonds. 2) Vérifier PMSS / PASS / jour / heure dans le logiciel. 3) Vérifier 8 × PMSS pour la T2. 4) Vérifier 4 × PASS pour chômage/CSG. 5) Tracer la source (arrêté + date de MAJ). 6) Ne jamais saisir un plafond « provisoire presse » non repris URSSAF.",
      noteText:
        "Les valeurs 4 005 / 48 060 / 220 / 30 sont des paramètres officiels 2026. Elles ne se négocient pas. Un écran éditeur qui affiche encore 3 925 € bloque la clôture.",
      exemple:
        "CSP, 2 janvier 2026. La check-list d'ouverture comporte « PMSS » en première ligne. Un dossier migré affiche 3 925. Le junior ouvre un ticket éditeur / paramétreur, il ne « force » pas 4 005 sur un seul salarié à la main en laissant 199 autres au faux plafond.",
      extra: [
        code(`PLAFONDS SÉCURITÉ SOCIALE — périodes d'activité ≥ 01/01/2026
Source : arrêté du 22/12/2025 — URSSAF plafonds
Annuel (PASS)     48 060 €
Mensuel (PMSS)     4 005 €
Journalier           220 €
Horaire               30 €
4 PASS               192 240 €   (chômage, AGS, abattement CSG, APEC)
8 PMSS / 8 PASS      32 040 €/mois  |  384 480 €/an   (plafond T2)`),
      ],
      erreurs:
        "Confondre PMSS et SMIC. Utiliser le PASS comme assiette mensuelle (48 060 € sur un bulletin de janvier). Oublier que 4 005 × 12 = 48 060. Charger le plafond le 5 janvier après avoir calculé les premières paies.",
      particuliers:
        "Mayotte / certains régimes : vérifier la fiche URSSAF, ne pas supposer le même montant. Année de bascule : un avenant de salaire au 1er janvier n'est pas un changement de plafond, c'est un changement de brut.",
      exercice:
        "Citez, pour un brut de 5 000 € en janvier 2026 : le montant T1, le montant T2, la valeur 4 PASS annuelle, et dites si la vieillesse plafonnée porte sur 5 000 ou 4 005.",
      correction:
        "T1 = 4 005 € ; T2 = 995 € ; 4 PASS = 192 240 € ; vieillesse plafonnée sur 4 005 €, pas sur 5 000. La déplafonnée, la maladie, les AF portent sur 5 000.",
    }),
    pack({
      title: "Assiettes plafonnées, déplafonnées et limites 4 PASS / 8 PASS",
      description: "Classer chaque cotisation selon son plafond, pour ne plus plafonner la maladie ni déplafonner la T1.",
      minutes: 20,
      objectifs:
        "Vous produisez de mémoire opérationnelle (avec barème sous les yeux) le tableau des assiettes : totalité, PMSS, 4 PASS, T2, CSG. Vous l'appliquez à 2 500 € et 5 000 €.",
      theorie:
        "Le plafond n'est pas un décor. Il change le montant. Toute cotisation appartient à une famille d'assiette.\n\nTotalité du brut soumis (pas de plafond PMSS) : maladie patronale 13 %, CSA 0,30 %, vieillesse déplafonnée 0,40 % / 2,11 %, AF 5,25 %, AT/MP (taux d'établissement), dialogue social 0,016 %, FNAL 0,50 % si effectif ≥ 50.\n\nPlafond PMSS (4 005 €) : vieillesse plafonnée 6,90 % / 8,55 %, FNAL 0,10 % si < 50, Agirc-Arrco T1 et CEG T1.\n\nTranche 2 (au-delà du PMSS jusqu'à 8 PMSS) : Arrco T2 21,59 % (12,95 / 8,64), CEG T2 2,70 % (1,62 / 1,08).\n\nCET : sur T1+T2 si brut > PMSS.\n\nLimite 4 PASS : chômage 4 %, AGS 0,25 %, APEC, et l'abattement CSG 1,75 % (au-delà, 100 % d'assiette CSG).\n\nAssiette CSG : 98,25 % jusqu'à 4 PASS, puis 100 %.\n\nConséquence pédagogique à 2 500 € : toutes les assiettes « PMSS » valent 2 500, T2 = 0, CET absente. À 5 000 € : les assiettes PMSS valent 4 005, T2 = 995, CET présente, chômage encore sur 5 000 (loin de 16 020 € mensuels de 4 PMSS).\n\nUn salaire de 17 000 € mensuels : chômage et AGS plafonnés à 4 PMSS (16 020 € en raisonnement mensuel pédagogique), maladie et AF sur 17 000, T2 = min(17 000 − 4 005, 32 040 − 4 005) = 12 995, CSG : fraction au-delà de 4 PASS sans abattement 1,75 %. Ce cas n'est pas le bulletin de référence ; il montre que plusieurs plafonds coexistent.\n\nLe junior qui « plafonne tout à 4 005 » sous-évalue la maladie, les AF, la déplafonnée. Celui qui « ne plafonne rien » survévalue la vieillesse et l'Arrco T1.\n\nRégularisation : même avec le bon plafond mensuel, un salaire variable sur l'année peut faire cotiser trop ou trop peu en plafonné. D'où la leçon régularisation.",
      methode:
        "Dessinez trois colonnes : ligne / assiette / plafond. Pour chaque nouveau paramétrage, remplissez-les avant de lancer le calcul. Contrôle : extraire du journal les bases, pas seulement les montants.",
      extra: [
        code(`ASSIETTES — janvier 2026 — mémo opérationnel
TOTALITÉ            maladie P, CSA, vieill. dépl., AF, AT/MP, DS, FNAL ≥50
PMSS 4 005          vieill. plaf., FNAL <50, Arrco T1, CEG T1
T2 (→ 8 PMSS)       Arrco T2, CEG T2
T1+T2 si > PMSS     CET 0,35 %
4 PASS              chômage, AGS, APEC ; abattement CSG 1,75 %
CSG 98,25 %         jusqu'à 4 PASS, puis 100 %

Brut 5 000 | effectif 20
Vieill. plaf. base 4 005 | FNAL 0,10 % base 4 005 = 4,01 €
Chômage base 5 000 | Arrco T2 base 995 | CET base 5 000`),
      ],
      exemple:
        "Cabinet. Un client « cadre 12 k€ ». Le collaborateur qui applique T1 sur 12 000 € crée une T1 impossible (max 4 005) et une T2 trop faible. Contrôle : base T1 du journal = 4 005, sinon le dossier est faux.",
      erreurs:
        "Plafonner la CSG au PMSS. Appliquer 4 PASS au FNAL < 50. Ouvrir la T2 dès que le brut annuel dépasse 48 060 alors que le mois est à 3 000 € (le mois suit le PMSS, sous réserve de régularisation). Confondre 8 PASS et 4 PASS.",
      particuliers:
        "Prévoyance et mutuelle : assiettes souvent T1 ou T2 selon le contrat — LIRE LE CONTRAT, ne pas recopier l'Arrco. Versement mobilité : assiette propre, taux d'établissement, absent du barème national du cours donc non inventé.",
      exercice:
        "Classez : (1) CSA ; (2) vieillesse 6,90 % ; (3) chômage ; (4) Arrco 8,64 % ; (5) CET. Assiette / plafond pour un brut 5 000 €, effectif 20.",
      correction:
        "1 CSA : totalité 5 000. 2 vieillesse 6,90 % : PMSS 4 005. 3 chômage : 5 000 (< 4 PASS). 4 Arrco 8,64 % : T2 = 995. 5 CET : T1+T2 = 5 000 car 5 000 > 4 005. FNAL serait 4 005 × 0,10 %.",
    }),
    pack({
      title: "Prorata du plafond : entrée, sortie, temps partiel, multi-employeurs",
      description: "Poser les principes URSSAF sans inventer une formule non vérifiée.",
      minutes: 22,
      objectifs:
        "Vous savez que le PMSS d'un mois incomplet, d'un temps partiel ou d'un multi-employeurs se réduit. Vous nommez les cas. Vous n'inventez pas le coefficient : vous ouvrez la fiche URSSAF.",
      theorie:
        "Le PMSS de 4 005 € est le plafond d'un salarié à temps plein présent tout le mois civil. Dès que l'une de ces conditions manque, le plafond applicable au mois n'est plus nécessairement 4 005 €. L'URSSAF pose des principes de réduction (prorata) pour : entrée en cours de mois ; sortie en cours de mois ; temps partiel ; pluralité d'employeurs ; certaines absences non assimilées. Source de principe : fiche URSSAF des plafonds de la Sécurité sociale — https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html — et instructions associées sur la détermination du plafond.\n\nPrincipe 1 — Entrée / sortie. Un salarié embauché le 20 janvier ou sorti le 8 janvier n'ouvre pas, en principe, un plafond mensuel entier pour les cotisations plafonnées de ce mois. Le plafond est réduit. LABELLISÉ — formule arithmétique précise (trentièmes, jours calendaires, jours ouvrables, plafond journalier 220 € × nombre de jours, plafond horaire 30 € × heures) : plusieurs modalités existent selon la situation (rémunération mensuelle, journalière, horaire). Si vous n'avez pas le texte URSSAF ouvert sous les yeux le jour du calcul, vous n'inventez pas « 4 005 × 12/31 ». Vous étiquetez « prorata à confirmer » et vous consultez la page officielle / le BOSS. Un logiciel paramétré applique une règle : votre contrôle, c'est de vérifier qu'elle correspond à l'instruction, pas de la réinventer sur un coin de table.\n\nPrincipe 2 — Temps partiel. Un temps partiel a, en principe, un plafond réduit à proportion de sa durée de travail par rapport à la durée légale ou conventionnelle applicable dans l'entreprise, selon les modalités URSSAF. LABELLISÉ : le coefficient exact (heures prévues / 151,67 ; horaire contractuel / horaire de l'entreprise ; prise en compte des heures complémentaires) se lit dans l'instruction URSSAF du jour. Un 80 % n'est pas automatiquement « 4 005 × 0,8 » sans vérification du texte et du paramétrage.\n\nPrincipe 3 — Pluralité d'employeurs. Chaque employeur applique un plafond. Si la somme des rémunérations dépasse le PASS, une régularisation est prévue pour éviter la sur-cotisation plafonnée. Le salarié peut avoir à fournir une attestation. Un junior d'un employeur A ne « coupe » pas le plafond de A parce qu'il a entendu parler d'un employeur B, sans pièce et sans instruction.\n\nPrincipe 4 — Le plafond horaire 30 € et journalier 220 € existent précisément pour ces situations. Leur usage concret (quand passer du mensuel au journalier) est une lecture d'instruction, pas un souvenir de formation.\n\nCe que vous pouvez faire seul : détecter le cas (entrée le 12, 28 h, deux CDI). Ce que vous ne faites pas seul : forcer un plafond 1 547,42 € « parce que 12/31 ». Vous documentez, vous ouvrez URSSAF, vous faites valider le paramètre.\n\nLes cotisations déplafonnées (maladie 13 %, AF 5,25 %, vieillesse 0,40 % / 2,11 %) ne se « proratisent pas via le PMSS » : leur assiette reste le brut du mois, lui-même déjà proratisé si le salaire l'est.",
      methode:
        "1) Identifier présence complète temps plein ? Si oui, PMSS 4 005. 2) Sinon, classer : entrée, sortie, TP, multi-employeurs, absence. 3) Ouvrir la fiche URSSAF plafonds + aide « déterminer le plafond ». 4) Comparer au paramétrage logiciel. 5) Écart : ticket responsable, pas formule maison. 6) Tracer : « plafond mois = … selon … (URL, date de lecture). »",
      noteText:
        "LABELLISÉ incertitude de formule : toute égalité du type « plafond = 4 005 × jours travaillés / jours calendaires » ou « × 30 € × heures » doit être recoupée, pour le cas d'espèce, sur la page URSSAF officielle avant production. Le cours enseigne le principe, pas une formule unique universelle non relue.",
      exemple:
        "PME, entrée le 27 janvier, salaire mensuel temps plein 3 200 €, prorata de salaire calendaire déjà calculé par ailleurs. Le junior calcule le brut proratisé, puis s'arrête : « le plafond de vieillesse plafonnée n'est peut-être pas 4 005 ». Il ouvre URSSAF, il ne laisse pas cotiser 6,90 % sur 3 200 si le plafond réduit est inférieur, ni l'inverse, sans source.",
      extra: [
        code(`PRORATA PLAFOND — CE QUE VOUS POSEZ / CE QUE VOUS NE POSEZ PAS
Principes (URSSAF, fiche plafonds) :
- Temps plein, mois complet → PMSS 4 005 € (2026)
- Entrée ou sortie en cours de mois → plafond réduit
- Temps partiel → plafond réduit
- Plusieurs employeurs → chaque employeur applique, régularisation possible
- Valeurs d'appui : plafond jour 220 €, heure 30 €

FORMULE PRÉCISE DU COEFFICIENT :
[À VÉRIFIER] sur
https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html
Ne pas produire un bulletin réel avec une règle « 12/31 » inventée.`),
      ],
      erreurs:
        "Garder 4 005 sur une entrée le 31. Appliquer un prorata de salaire au plafond sans lire l'URSSAF. Diviser par 30 ou par 31 selon l'humeur. Ignorer le second employeur. Proratiser la maladie 13 % via le PMSS.",
      particuliers:
        "Forfait jours : le temps partiel « 80 % forfait » n'est pas un horaire 151,67 × 0,8 sans lecture du contrat et de l'instruction. Mandat, préavis non effectué, rappel de salaire sur mois antérieur : impact plafond = dossier supervisé.",
      exercice:
        "Salarié temps plein, sortie le 10 janvier 2026, brut mensuel de référence 4 500 €. Listez : (1) ce qui est certain ; (2) ce que vous étiquetez à vérifier URSSAF ; (3) ce que vous calculez déjà sans risque sur les lignes déplafonnées une fois le brut proratisé connu.",
      correction:
        "1) Certain : le plafond du mois n'est pas d'office 4 005 ; T2 et CET dépendent du brut du mois et du plafond applicable ; période = janvier 2026. 2) À vérifier URSSAF : coefficient de réduction du plafond (jours, 220 €, 30 €). 3) Une fois le brut de sortie calculé selon la règle de l'entreprise (calendaire ou ouvrée — autre sujet), maladie 13 %, AF 5,25 %, déplafonnée, CSA, dialogue social portent sur ce brut, sans plafond PMSS. Vous n'inventez ni le brut de sortie ni le plafond réduit.",
    }),
    pack({
      title: "Tranches Agirc-Arrco T1 et T2",
      description: "Découper 4 005 / 995 sur un brut 5 000 € et appliquer les taux 2026.",
      minutes: 20,
      objectifs:
        "Vous calculez T1 et T2, vous appliquez Arrco et CEG, et vous contrôlez qu'il n'y a pas de T2 sous le PMSS.",
      theorie:
        "La retraite complémentaire ne connaît pas « un taux unique sur le brut ». Elle découpe la rémunération en tranches calées sur le plafond de la Sécurité sociale.\n\nT1 : de 0 à 1 plafond (0 à 4 005 € en janvier 2026). Taux 7,87 % dont 4,72 % P et 3,15 % S. CEG T1 2,15 % dont 1,29 % P et 0,86 % S.\n\nT2 : de 1 à 8 plafonds (4 005 à 32 040 €). Taux 21,59 % dont 12,95 % P et 8,64 % S. CEG T2 2,70 % dont 1,62 % P et 1,08 % S.\n\nAu-delà de 8 plafonds : pas de T2 supplémentaire dans ce barème (la T2 s'arrête). Un salaire hors norme se contrôle, il ne s'invente pas une « T3 Arrco » de mémoire.\n\nFormules du moteur pédagogique (mois complet, temps plein, un employeur) : T1 = min(brut, PMSS) ; T2 = min(max(brut − PMSS, 0), 7 × PMSS). Pour 5 000 € : T1 = 4 005, T2 = 995. Pour 2 500 € : T1 = 2 500, T2 = 0.\n\nLes 995 € de T2 à 8,64 % salarial pèsent 85,97 €, plus CEG T2 10,75 €. C'est visible sur le net. L'explication au salarié : « au-dessus du plafond mensuel 4 005 €, la complémentaire change de taux », pas « on vous a changé le taux de mutuelle ».\n\nCadre ou non-cadre : mêmes T1/T2 Arrco depuis l'unification. La différence cadre, c'est l'APEC, parfois la prévoyance (contrat), pas une T2 magique.\n\nProrata : si le plafond du mois est réduit (entrée), la frontière T1/T2 se cale sur ce plafond réduit, pas sur 4 005, sous réserve des instructions Agirc-Arrco / URSSAF. Même réserve de formule que la leçon prorata : à vérifier, pas à inventer.\n\nContrôle 5 000 € (engine) : Arrco T1 S 126,16 P 189,04 ; CEG T1 S 34,44 P 51,66 ; Arrco T2 S 85,97 P 128,85 ; CEG T2 S 10,75 P 16,12.",
      methode:
        "1) Obtenir le plafond applicable du mois (4 005 si mois plein temps plein). 2) T1 / T2. 3) Quatre lignes Arrco/CEG. 4) Contrôler l'absence de T2 si brut ≤ plafond. 5) Enchaîner sur la CET (leçon suivante).",
      extra: [
        code(`BRUT 5 000 € — janvier 2026 — mois plein — temps plein
T1 = 4 005,00
T2 = 5 000 − 4 005 = 995,00

Arrco T1  4 005 × 3,15 % = 126,1575 → 126,16 S | × 4,72 % = 189,036 → 189,04 P
CEG T1    4 005 × 0,86 % =  34,443  →  34,44 S | × 1,29 % =  51,6645 →  51,66 P
Arrco T2    995 × 8,64 % =  85,968  →  85,97 S | ×12,95 % = 128,8525 → 128,85 P
CEG T2      995 × 1,08 % =  10,746  →  10,75 S | × 1,62 % =  16,119  →  16,12 P`),
      ],
      exemple:
        "Services, augmentation 3 950 → 4 100 €. Le manager promet « +150 € brut, tu verras presque tout en net ». Le gestionnaire prévient : 95 € basculent en T2, CET s'allume, le net n'augmente pas de 150 €. Pédagogie interne avant la clôture, pas après la réclamation.",
      erreurs:
        "T2 = 5 000. T1 = 5 000. Appliquer 3,15 % sur la T2. Oublier la CEG T2. Utiliser un PMSS 2025 pour caler la frontière.",
      particuliers:
        "Rappel de salaire : le rattachement à la période d'emploi peut déplacer de la T1 vers de la T2 sur le mois de versement ou via régularisation — dossier supervisé. Plusieurs contrats dans la même entreprise : un seul assujettissement, pas deux T1.",
      exercice:
        "Brut 4 005 € puis 4 006 €. Donnez T1, T2, et dites si la CEG T2 est nulle.",
      correction:
        "À 4 005 : T1 = 4 005, T2 = 0, CEG T2 nulle, CET nulle (pas de dépassement). À 4 006 : T1 = 4 005, T2 = 1, CEG T2 sur 1 €, CET déclenchée sur 4 006. Un euro au-dessus du PSS change le schéma, pas seulement la vieillesse déplafonnée.",
    }),
    pack({
      title: "CET et les plafonds 4 PASS : ne pas tout mélanger",
      description: "CET si > PSS ; chômage, AGS, CSG et APEC raisonnent en 4 PASS.",
      minutes: 18,
      objectifs:
        "Vous déclenchez la CET au bon seuil et vous distinguez le plafond 1 PSS du plafond 4 PASS.",
      theorie:
        "Deux « 4 » se croisent dans les conversations de paie et créent des erreurs : 4 005 € (1 PMSS) et 4 PASS (192 240 € par an).\n\nCET (contribution d'équilibre technique Agirc-Arrco) : 0,35 % dont 0,21 % P et 0,14 % S. Assiette : T1 + T2. Condition : rémunération supérieure au plafond de la Sécurité sociale. En pratique pédagogique : si brut > 4 005 € (mois plein), CET sur T1+T2. À 5 000 €, assiette CET = 5 000, CET S = 7,00 €, CET P = 10,50 €. Chiffre verrouillé : reference-bulletins.json brut_5000_t2.CET_s = 7.0.\n\nÀ 4 005 € pile, le moteur pédagogique n'émet pas de CET (condition > T1, pas ≥). Vous reproduisez cette règle dans les exercices du cours. Sur un dossier réel, si un éditeur déclenche à ≥, vous comparez à la fiche Agirc-Arrco du jour, vous n'inventez pas.\n\n4 PASS : chômage 4 %, AGS 0,25 %, APEC (cadres), et limite de l'abattement CSG 1,75 %. Un brut de 5 000 € est très en dessous : chômage sur 5 000, CSG encore à 98,25 % sur tout le brut (5 000 × 0,9825 = 4 912,50 €).\n\nVous pouvez donc avoir, sur le même bulletin 5 000 € : T2 et CET ouvertes (seuil 1 PSS) ET chômage non plafonné (seuil 4 PASS). C'est cohérent, ce n'est pas un bug.\n\nContrôle : présence CET ⇔ brut > PMSS applicable. Montant CET S ⇔ (T1+T2) × 0,14 %. Si T2 = 995 et T1 = 4 005, base = 5 000, pas 995.\n\nCas : brut 32 040 € (8 PMSS) : T2 maximale, CET sur 32 040. Brut 33 000 € : T2 toujours plafonnée à 7 PMSS (28 035), CET sur T1+T2 = 32 040, pas sur 33 000 — selon la fiche Agirc-Arrco (CET sur T1+T2). La fraction au-delà de 8 PSS n'alimente pas la T2.",
      methode:
        "Après T1/T2 : si brut > PMSS, ajouter CET sur somme des tranches. Puis, séparément, comparer le brut à 4 PMSS pour chômage/AGS/CSG abattement. Deux if distincts dans votre tête, deux if distincts dans le logiciel.",
      extra: [
        code(`SEUILS — ne pas fusionner
1 PSS  =  4 005 €/mois   → frontière T1/T2 et CET
4 PASS = 192 240 €/an    → chômage, AGS, APEC, abattement CSG 1,75 %
8 PSS  = 32 040 €/mois   → fin de T2

Brut 5 000 €
CET oui : 5 000 × 0,14 % = 7,00 S | 5 000 × 0,21 % = 10,50 P
Chômage : encore sur 5 000 (4 % = 200,00 P)
CSG assiette : 5 000 × 98,25 % = 4 912,50`),
      ],
      exemple:
        "Start-up, premier salary à 6 k€. Le fondateur demande « pourquoi une ligne CET, on n'avait pas ça à 3 800 € ». Réponse : franchissement du PMSS 4 005, ligne Agirc-Arrco obligatoire, pas une option d'épargne entreprise.",
      erreurs:
        "CET sur T2 seulement (7,00 € deviendraient 1,39 € : faux). CET à 2 500 €. Plafonner le chômage à 4 005. Appliquer 98,25 % seulement jusqu'au PMSS.",
      particuliers:
        "Cadre 3 500 € : pas de CET, APEC oui (seuil cadre, limite 4 PASS). Non-cadre 5 000 € : CET oui, APEC non. Le statut ne déclenche pas la CET ; le plafond si.",
      exercice:
        "Retrouvez CET S et P, assiette CSG, chômage P pour le bulletin 5 000 € de référence.",
      correction:
        "CET S 7,00 ; CET P 10,50 ; CSG 4 912,50 ; chômage 200,00. Totaux de référence du même bulletin : salarial 1 037,18 ; net imposable 4 105,28 ; net à payer 3 962,82.",
    }),
    pack({
      title: "Régularisation progressive et régularisation annuelle",
      description: "Comprendre pourquoi la somme des plafonds mensuels ne suffit pas si le salaire varie.",
      minutes: 22,
      objectifs:
        "Vous expliquez la régularisation du plafond, vous distinguez progressive et annuelle, et vous savez ce qu'un junior contrôle sans paramétrer seul.",
      theorie:
        "Si chaque mois on applique seulement min(brut du mois, PMSS du mois), un salarié payé 2 000 € en janvier et 6 000 € en février aura cotisé, en vieillesse plafonnée : 2 000 puis 4 005, total d'assiette 6 005 € pour deux mois dont le cumul de plafonds est 8 010 €. Il reste 2 005 € de « plafond non utilisé » en janvier que février aurait pu absorber : sans régularisation, on a trop mis en T2 / trop peu en T1 sur février.\n\nLa régularisation consiste à comparer, sur une période, le cumul des rémunérations au cumul des plafonds, et à corriger l'assiette plafonnée déjà retenue.\n\nRégularisation progressive (mensuelle cumulée) : chaque mois, assiette plafonnée du mois = min(cumul des bruts, cumul des PMSS) − assiettes plafonnées déjà retenues les mois précédents. C'est le mode le plus courant dans les moteurs de paie modernes pour le plafond de Sécurité sociale. Il évite d'attendre décembre pour corriger.\n\nRégularisation annuelle : on laisse courir les mois, on corrige en une fois (souvent en décembre ou sur le dernier bulletin). Plus simple à comprendre, plus brutale sur le net de décembre, plus risquée en sortie en cours d'année si l'on n'anticipe pas.\n\nLes deux visent le même objectif légal : ne pas dépasser le PASS d'assiette plafonnée, et ne pas sous-utiliser le plafond quand les rémunérations se compensent d'un mois à l'autre. L'URSSAF décrit les modalités de régularisation du plafond ; le paramétrage de l'éditeur (progressive par défaut, annuelle, ou option) est un paramètre d'entreprise à connaître, pas à changer seul.\n\nExemple chiffré pédagogique (mois complets, temps plein, PMSS 4 005, sans prorata d'entrée) :\nJanvier brut 2 000 → plafonnée 2 000 ; T2 = 0.\nFévrier brut 6 000. Cumul brut 8 000. Cumul PMSS 8 010. Assiette plafonnée cumulée possible = 8 000. Déjà retenu 2 000. Donc février plafonnée = 6 000 (et T2 février = 0), alors que le réflexe « min(6 000, 4 005) » aurait mis 4 005 en T1 et 1 995 en T2. La régularisation progressive change le bulletin de février.\n\nInversement, deux mois à 5 000 € : janvier T1 4 005 T2 995 ; février idem ; cumul T1 8 010 = 2 × 4 005, pas de correction. La régularisation ne « crée » rien quand le salaire est stable au-dessus du plafond.\n\nSortie en juin : la régularisation doit être faite sur le dernier bulletin, progressive ou annuelle anticipée. Un junior qui n'ouvre pas le cumul de plafond d'un sortant laisse un contentieux et une DSN à reprendre.\n\nNature : obligation de ne pas dépasser le plafond légal ; la méthode (progressive vs annuelle) est encadrée par les instructions et le paramétrage. Bonne pratique : connaître le mode du dossier dès J+1.",
      methode:
        "1) Demander le mode de régularisation du logiciel (progressive / annuelle). 2) Sur tout salaire variable, prime annuelle, rappel, temps partiel annualisé : extraire le cumul plafond. 3) Sur toute sortie : forcer le contrôle de cumul. 4) Ne pas « ajouter une ligne T2 négative » à la main sans responsable. 5) Janvier : cumul = le mois, mais le PMSS vient de changer : ne pas cumuler avec le 3 925 de 2025 dans la même poche sans lecture du millésime.",
      noteText:
        "Les chiffres de l'exemple 2 000 / 6 000 illustrent le mécanisme. Sur un dossier réel, le moteur applique aussi les proratas et les assiettes CSG. Un junior n'écrit pas une régularisation manuelle de 12 lignes la veille de la DSN.",
      exemple:
        "ETI, prime annuelle de 8 000 € en novembre sur un salaire à 3 200 €. Sans régularisation, novembre crée une T2 massive. En progressive, une partie de la prime peut rester en T1 si les mois précédents n'ont pas consommé tout le plafond. Le contrôleur paie ouvre le cumul avant d'expliquer le net de novembre au salarié.",
      extra: [
        code(`RÉGULARISATION PROGRESSIVE — schéma (mois pleins, PMSS 4 005)
Mois     Brut    Cumul brut   Cumul PMSS   Plafonné mois (progressif)
Jan      2 000     2 000         4 005      2 000
Fév      6 000     8 000         8 010      6 000   ← pas 4 005
Sans régul. Fév aurait été T1=4 005 T2=1 995 (écart pédagogique)

Mode annuel : Fév resterait T1=4 005 T2=1 995, correction plus tard.`),
      ],
      erreurs:
        "Croire que « chaque mois est indépendant » dès qu'une prime arrive. Corriger décembre en silence sans bulletin clair. Mélanger millésimes 2025 et 2026 dans le cumul. Appliquer la régularisation à la maladie (déplafonnée).",
      particuliers:
        "Multi-employeurs : régularisation entre employeurs ≠ régularisation intra-année d'un seul SIRET. Arrêt long, maintien, IJ : le brut soumis varie, le cumul aussi. Dossier supervisé. Paramétrage « annuelle » dans un CSP qui promet des nets stables : alerter le responsable, c'est un choix, pas une faute du junior, mais il doit le connaître.",
      exercice:
        "Trois mois : 5 000, 3 000, 4 500. En mode « chaque mois isolé », donnez T1 de chaque mois. En une phrase, dites ce que la progressive va chercher à faire sur le cumul des trois PMSS (12 015 €) et le cumul des bruts (12 500 €).",
      correction:
        "Isolé : T1 = 4 005 ; 3 000 ; 4 005. Cumul T1 isolé = 11 010. Cumul brut = 12 500. Cumul PMSS = 12 015. Il reste du plafond inutilisé au mois à 3 000 (1 005 €) alors que d'autres mois sont en T2. La progressive réalloue : l'assiette plafonnée cumulée tend vers min(12 500, 12 015) = 12 015, donc davantage de T1 et moins de T2 que la somme des mois isolés. Le calcul mois par mois exact se fait dans le logiciel ; vous avez compris l'objectif.",
    }),
    pack({
      title: "Cas travaillé : brut 5 000 €, T1 4 005, T2 995, CET 7,00 €",
      description: "Reconstruire les assiettes et la CET salariale du bulletin de référence.",
      minutes: 24,
      objectifs:
        "Vous reproduisez les figures exactes du moteur pour 5 000 € : T1, T2, CET_s = 7,00, total salarial 1 037,18, net imposable 4 105,28, net à payer 3 962,82.",
      theorie:
        "Le bulletin brut_5000_t2 de reference-bulletins.json est le cas d'école du franchissement de plafond : janvier 2026, non-cadre, effectif 20, RGDU off, AT/MP 1,50 % hypothèse, sans mutuelle, PAS 0. Brut 5 000,00 €.\n\nAssiettes : T1 = 4 005,00 ; T2 = 995,00 ; CSG = 5 000 × 0,9825 = 4 912,50 ; FNAL < 50 sur 4 005 ; chômage sur 5 000 ; CET sur 5 000.\n\nLignes qui changent par rapport à 2 500 € : vieillesse plafonnée calée à 4 005 (276,35 S / 342,43 P) ; apparition T2 et CEG T2 ; apparition CET 7,00 S / 10,50 P ; FNAL 4,01 € et non 5,00 € (plafonné) ; maladie 650,00 sur 5 000 (déplafonnée).\n\nTotal salarial moteur : 1 037,18 €. Net imposable 4 105,28 €. Net à payer 3 962,82 €. MNS pédagogique = 3 962,82 € (PAS 0).\n\nContrôle CET : 5 000 × 0,0014 = 7 exactement. Si vous trouvez 5,61 (0,14 % × 4 005 seulement) ou 1,39 (0,14 % × 995), vous avez trompé l'assiette.\n\nContrôle T2 Arrco : 995 × 0,0864 = 85,968 → 85,97. CEG T2 : 995 × 0,0108 = 10,746 → 10,75.\n\nCe cas n'applique pas de prorata (mois plein) ni de régularisation (un seul mois isolé de janvier). Il n'applique pas la RGDU. L'AT/MP 75,00 € = 5 000 × 1,50 % reste une hypothèse.\n\nPourquoi 1 037,18 et pas 2 × 521,01 ? Parce que les taux T2 sont plus élevés et que la CSG porte sur 4 912,50, pas sur 2 × 2 456,25. La proportionnalité brute est fausse dès qu'un plafond s'enclenche.",
      methode:
        "Reconstruire dans l'ordre : assiettes, URSSAF, chômage/FNAL, Arrco/CEG/CET, CSG, totaux. Comparer à reference-bulletins.json. Tout écart de 0,01 : reprendre l'arrondi de ligne.",
      extra: [
        code(`BULLETIN 5 000 € — janvier 2026 — non-cadre — effectif 20
RGDU OFF | AT/MP 1,50 % HYPOTHÈSE | PAS 0 | mutuelle NON
T1=4 005  T2=995  CSG=4 912,50

Vieill. plaf.  4 005 × 6,90 % = 276,35 S | × 8,55 % = 342,43 P
Vieill. dépl.  5 000 × 0,40 % =  20,00 S | × 2,11 % = 105,50 P
Maladie P      5 000 × 13 %   = 650,00
AF             5 000 × 5,25 % = 262,50
AT/MP hyp.     5 000 × 1,50 % =  75,00
FNAL <50       4 005 × 0,10 % =   4,01
Chômage        5 000 × 4 %    = 200,00
AGS            5 000 × 0,25 % =  12,50
Dialogue       5 000 × 0,016% =   0,80
CSA            5 000 × 0,30 % =  15,00
Arrco T1       4 005 × 3,15 % = 126,16 S | × 4,72 % = 189,04 P
CEG T1         4 005 × 0,86 % =  34,44 S | × 1,29 % =  51,66 P
Arrco T2         995 × 8,64 % =  85,97 S | ×12,95 % = 128,85 P
CEG T2           995 × 1,08 % =  10,75 S | × 1,62 % =  16,12 P
CET            5 000 × 0,14 % =   7,00 S | × 0,21 % =  10,50 P
CSG déd.       4 912,50 × 6,80 % = 334,05
CSG ND         4 912,50 × 2,40 % = 117,90
CRDS           4 912,50 × 0,50 % =  24,56

TOTAUX S 1 037,18 | P 2 063,91
Net imposable 4 105,28 | Net à payer / MNS 3 962,82
CET_s = 7,00  (verrou reference-bulletins.json)`),
      ],
      exemple:
        "En revue de clôture, le responsable demande : « montre-moi que la CET est à 7 € et pas à 7,14 ». Vous montrez 5 000 × 0,14 % = 7,00, assiette T1+T2, source Agirc-Arrco. La revue dure deux minutes au lieu d'un débat.",
      erreurs:
        "FNAL sur 5 000 à 0,10 % (serait 5,00 au lieu de 4,01). Oublier CEG T2. Net à payer = 5 000 − 1 037,18 oublié (3 962,82). Appliquer la RGDU et casser le total patronal 2 063,91.",
      particuliers:
        "Si effectif ≥ 50, FNAL = 5 000 × 0,50 % = 25,00, le reste des assiettes T1/T2/CET inchangé (l'effectif ne déplace pas le PMSS). Si cadre : + APEC sur 5 000. Ces variantes ne sont pas le bulletin de référence.",
      exercice:
        "Calculez uniquement : T1, T2, CET salarial, FNAL (effectif 20), Arrco T2 salarial. Puis le net à payer si le total salarial est 1 037,18.",
      correction:
        "T1 4 005 ; T2 995 ; CET S 7,00 ; FNAL 4,01 ; Arrco T2 S 85,97 ; net à payer 5 000 − 1 037,18 = 3 962,82 €. Aligné sur reference-bulletins.json.",
    }),
    quizLesson({
      title: "Quiz — Plafonds et tranches janvier 2026",
      description: "PMSS, PASS, T1/T2, CET, prorata, régularisation.",
      passing_score: 70,
      questions: [
        q({
          question: "Le PMSS applicable aux périodes d'activité à compter du 01/01/2026 est :",
          options: [
            "A. 3 925 €",
            "B. 4 005 € (arrêté du 22 décembre 2025, URSSAF)",
            "C. 48 060 € par mois",
            "D. 1 823,03 €",
          ],
          correct: 1,
          explanation:
            "PMSS 4 005 €, PASS 48 060 €. 1 823,03 € est le SMIC mensuel 35 h au 01/01/2026, pas un plafond de cotisations.",
        }),
        q({
          question: "Pour un brut de 5 000 €, mois plein, janvier 2026, les tranches Agirc-Arrco sont :",
          options: [
            "A. T1 = 5 000 et T2 = 0",
            "B. T1 = 4 005 et T2 = 995",
            "C. T1 = 4 005 et T2 = 5 000",
            "D. T1 = 995 et T2 = 4 005",
          ],
          correct: 1,
          explanation:
            "T1 = min(5 000, 4 005) = 4 005 ; T2 = 995. Figures de reference-bulletins.json brut_5000_t2.",
        }),
        q({
          question: "La CET salariale du bulletin pédagogique 5 000 € vaut :",
          options: [
            "A. 0 € car le salarié n'est pas cadre",
            "B. 7,00 €, soit (T1+T2) × 0,14 %, parce que 5 000 > PMSS",
            "C. 1,39 € (0,14 % × 995 seulement)",
            "D. 75,00 € (confusion avec l'AT/MP)",
          ],
          correct: 1,
          explanation:
            "CET_s = 7,00 € verrouillé. Condition : rémunération > PSS. Assiette T1+T2 = 5 000. Le statut cadre n'est pas la condition.",
        }),
        q({
          question: "Le FNAL d'une entreprise de 20 salariés, brut 5 000 €, janvier 2026 :",
          options: [
            "A. 25,00 € (0,50 % × 5 000)",
            "B. 5,00 € (0,10 % × 5 000)",
            "C. 4,01 € (0,10 % × PMSS 4 005)",
            "D. 0 €",
          ],
          correct: 2,
          explanation:
            "< 50 salariés : 0,10 % sur assiette plafonnée. 4 005 × 0,001 = 4,005 → 4,01 € (moteur).",
        }),
        q({
          question: "Concernant le prorata du plafond en entrée/sortie ou temps partiel :",
          options: [
            "A. On applique toujours 4 005 €",
            "B. Le principe URSSAF est une réduction du plafond ; la formule arithmétique précise se vérifie sur la fiche URSSAF, on ne l'invente pas",
            "C. On divise toujours par 31",
            "D. Seule la CCN Syntec fixe le prorata de plafond",
          ],
          correct: 1,
          explanation:
            "Principes : entrée, sortie, temps partiel, multi-employeurs réduisent ou partagent le plafond. Formule exacte : page URSSAF, pas une règle maison 12/31.",
        }),
        q({
          question: "La régularisation progressive du plafond sert principalement à :",
          options: [
            "A. Remplacer la DSN",
            "B. Comparer cumul des rémunérations et cumul des plafonds au fil des mois pour corriger T1/T2 et vieillesse plafonnée",
            "C. Plafonner la maladie à 13 %",
            "D. Annuler la CET",
          ],
          correct: 1,
          explanation:
            "Salaire variable : min(brut du mois, PMSS) isolé fausse l'assiette annuelle. Progressive vs annuelle : deux méthodes, même objectif.",
        }),
        q({
          question: "4 PASS en 2026 valent :",
          options: [
            "A. 16 020 € par an",
            "B. 192 240 € par an (4 × 48 060), limite chômage / AGS / abattement CSG",
            "C. 4 005 €",
            "D. 32 040 € par an",
          ],
          correct: 1,
          explanation:
            "PASS 48 060 × 4 = 192 240 €. 32 040 € est 8 PMSS (plafond T2 mensuel). 4 005 € est 1 PMSS.",
        }),
        q({
          question: "Sur le bulletin pédagogique 5 000 €, net imposable et net à payer sont :",
          options: [
            "A. 4 105,28 € et 3 962,82 €",
            "B. 2 050,22 € et 1 978,99 € (bulletin 2 500 €)",
            "C. 5 000 € et 5 000 €",
            "D. 3 962,82 € et 4 105,28 € (inversés)",
          ],
          correct: 0,
          explanation:
            "reference-bulletins.json brut_5000_t2 : netImposable 4105.28, netAPayer 3962.82. L'écart vient de CSG ND + CRDS.",
        }),
        q({
          question: "À 2 500 € de brut, janvier 2026, mois plein :",
          options: [
            "A. T2 = 2 500 et CET = 7,00 €",
            "B. T1 = 2 500, T2 = 0, pas de CET",
            "C. T1 = 4 005",
            "D. Le PMSS ne s'applique pas sous 3 000 €",
          ],
          correct: 1,
          explanation:
            "En dessous du PMSS : toute la rémunération est en T1, CET non déclenchée. C'est le bulletin 2 500 € du module cotisations.",
        }),
      ],
    }),
  ],
};
