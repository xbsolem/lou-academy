import { pack, quizLesson, q, h, t, note, code, lesson } from "../lib.mjs";

export default {
  position: 21,
  title: "Excel de contrôle paie : organiser, chercher, totaliser, rapprocher, sécuriser",
  description:
    "Tenir un fichier de contrôle : tableaux, filtres, tris, RECHERCHEX, SOMME.SI.ENS, SI, SIERREUR, NB.SI.ENS, dates, TCD, rapprochements, import/export, anomalies, reporting et sécurité. Jeu de données fictif Atelier Nord Paie (20 salariés).",
  lessons: [
    pack({
      title: "Organiser un fichier de contrôle : tableaux, filtres, tris",
      description:
        "Transformer une liste de salariés en tableau structuré, filtrable et triable, avant toute formule.",
      minutes: 22,
      objectifs:
        "Vous savez pourquoi un fichier de contrôle paie n'est pas un brouillon. Vous transformez une plage en tableau Excel, vous nommez des colonnes stables, vous filtrez et triez sans casser les lignes, et vous refusez les fusions de cellules sur une base de production.",
      theorie:
        "Excel n'est pas un moteur de paie. C'est l'outil de contrôle le plus répandu dans les services paie, les cabinets et les CSP, y compris lorsque le moteur s'appelle Sage, Silae, Cegid, ADP ou un intégré. Le logiciel calcule. Le tableur compare, totalise, détecte l'improbable, prépare un reporting. Si le tableur est sale, le contrôle est une illusion.\n\nUne liste de paie exploitable a une ligne = un salarié pour une période, une colonne = un champ, une première ligne = des en-têtes uniques, sans fusion, sans ligne vide au milieu, sans couleur comme seule information. La période (ici janvier 2026) est écrite dans le nom du fichier et dans une cellule de paramètre, pas « dans votre tête ». Un fichier « PAIE.xlsx » sans mois est une source d'écrasement.\n\nLe tableau Excel (Insertion > Tableau, ou Ctrl+T) n'est pas un gadget esthétique. Il donne des noms de colonnes (T_PAIE[Brut_verse]), des filtres, un étirement des formules, une plage qui grandit à l'ajout d'une ligne. Les filtres permettent de voir les absents, les cadres, les nets vides. Le tri permet d'aligner deux fichiers sur le matricule avant un rapprochement. Trier une sélection partielle (trois colonnes sur dix) désassemble les salariés : c'est une faute de contrôle, pas un « petit accident ».\n\nOn distingue trois objets. Le fichier source exporté du moteur (lecture, souvent à ne pas modifier). Le fichier de travail (formules, drapeaux). Le fichier de reporting (TCD, totaux) qui s'appuie sur le travail, pas sur une recopie manuelle. Mélanger les trois dans un onglet unique produit des totaux tapés à la main, donc des totaux morts.\n\nLes 20 lignes du jeu Atelier Nord Paie ci-dessous sont pédagogiques. Les brut sont des hypothèses de dossier fictif. Les nets sont des nets à payer de fichier de contrôle, pas des bulletins officiels calculés par le moteur pédagogique du cours, pas une copie d'un logiciel commercial. Ils servent à exercer filtres, recherches et totaux. Un écart « brut vs net » n'y est pas une preuve de cotisations 2026.",
      methode:
        "Pour chaque clôture : (1) exporter du moteur une liste matricule / brut / net / absences ; (2) coller dans un onglet SOURCE en valeurs ; (3) construire l'onglet TRAVAIL en tableau nommé T_PAIE ; (4) ne jamais fusionner ; (5) figer la première ligne ; (6) vérifier le nombre de lignes = effectif attendu avant de filtrer. Filtrez ensuite. Ne triez qu'après avoir sélectionné le tableau entier.",
      noteText:
        "Obligation : confidentialité des rémunérations (données personnelles). Politique interne : où stocker le fichier. Bonne pratique : un mois = un fichier ou un onglet daté, jamais un « brouillon » écrasé. Les nets du jeu sont pédagogiques.",
      extra: [
        code(`JEU T_PAIE — Atelier Nord Paie — janvier 2026 — 20 salariés
Fictif. Brut = hypothèse de dossier. Net_a_payer = donnée pédagogique de contrôle,
PAS un bulletin officiel, PAS un résultat du moteur LOU, PAS un export d'éditeur.

Matricule  Nom        Prenom    Statut      Brut_contrat  Brut_verse  Net_a_payer  Jours_abs  Motif_abs     Date_entree  Date_sortie
ANP-01     BERNARD    Camille   Non-cadre        2100,00     2100,00      1648,00          0  -             04/03/2019   -
ANP-02     DIALLO     Amadou    Non-cadre        1950,00     1950,00      1529,00          2  CP            01/09/2021   -
ANP-03     MOREAU     Lea       Non-cadre        1823,03     1823,03      1435,00          0  -             15/06/2024   -
ANP-04     KOWALSKI   Piotr     Non-cadre        2400,00     2400,00      1860,00          1  Maladie       02/01/2018   -
ANP-05     MARTIN     Hugo      Cadre            2800,00     2800,00      2150,00          0  -             01/04/2020   -
ANP-06     NDIAYE     Aicha     Non-cadre        2200,00     2200,00      1715,00          0  -             12/11/2022   -
ANP-07     GARCIA     Ines      Non-cadre        1900,00     1900,00      1490,00          3  CP            07/02/2023   -
ANP-08     LEFEVRE    Thomas    Cadre            3500,00     3500,00      2650,00          0  -             01/01/2017   -
ANP-09     CHEN       Wei       Non-cadre        2100,00     1287,10      1010,00          0  -             13/01/2026   -
ANP-10     PETIT      Manon     Non-cadre        2000,00     2000,00      1570,00          5  CP            03/05/2021   -
ANP-11     ROSSI      Marco     Non-cadre        2300,00     2300,00      1790,00          0  -             18/08/2019   -
ANP-12     BENALI     Sara      Non-cadre        1850,00     1850,00      1455,00          0  -             01/10/2025   -
ANP-13     DURAND     Paul      Cadre            4005,00     4005,00      2980,00          0  -             01/09/2016   -
ANP-14     OCONNOR    Niamh     Non-cadre        2600,00     2600,00      2010,00          2  Maladie       22/04/2022   -
ANP-15     TRAORE     Ibrahim   Non-cadre        1823,03     1823,03      1435,00          1  Injustifiee   09/07/2024   -
ANP-16     LAMBERT    Chloe     Non-cadre        2450,00     2450,00      1900,00          0  -             11/03/2020   31/01/2026
ANP-17     FERNANDEZ  Diego     Non-cadre        2150,00     2150,00      1680,00          0  -             01/12/2023   -
ANP-18     MULLER     Greta     Cadre            3200,00     3200,00      2440,00          4  CP            06/01/2015   -
ANP-19     BAKKER     Jeroen    Non-cadre        2050,00     2050,00      1605,00          0  -             14/02/2022   -
ANP-20     SILVA      Ana       Non-cadre        1980,00     1980,00      1550,00          0  -             25/08/2025   -

Notes pédagogiques :
- ANP-03 et ANP-15 : Brut_contrat = SMIC mensuel 1 823,03 € (URSSAF, 01/01/2026, base 151,67 h).
- ANP-09 : entrée 13/01/2026. Brut_verse = 2 100 × 19/31 = 1 287,10 € (prorata CALENDAIRE pédagogique, 19 jours du 13 au 31 inclus, mois de 31 jours). Ce n'est pas une règle unique de CCN ni un prorata ouvrable.
- ANP-13 : 4 005 € = PMSS janvier 2026 (paramètre officiel). Coïncidence pédagogique de brut, pas « le plafond est un salaire ».
- ANP-16 : sortie 31/01/2026, mois complet travaillé dans ce jeu.`),
      ],
      exemple:
        "En cabinet, un junior trie uniquement la colonne Net pour « voir les plus bas ». Les noms ne suivent pas. Il corrige le net de Silva sur la ligne de Bernard. Quatre bulletins partent faux. La cause n'est pas Excel : c'est un tri partiel. La méthode : cliquer dans le tableau, Trier, ou filtrer sans déplacer les lignes si l'on veut seulement regarder.",
      erreurs:
        "Fusionner « Cadres » sur quatre lignes. Mettre deux salariés sur une ligne « couple ». Écrire le motif d'absence dans une couleur sans colonne. Travailler sur l'export brut du moteur et l'écraser. Oublier ANP-09 (entrée) parce que le filtre Date_sortie était resté actif.",
      particuliers:
        "Homonymes : le matricule est la clé, jamais le nom seul. Caractères spéciaux (OCONNOR, NDIAYE) : normalisez sans accent dans la clé si les deux fichiers ne sont pas encodés pareil, mais gardez le nom d'état civil à l'affichage. Excel français : virgule décimale. Un export anglo-saxon avec point : convertissez avant de sommer.",
      exercice:
        "Sur T_PAIE : (1) combien de lignes après filtre Jours_abs > 0 ? (2) après tri Statut puis Nom, qui est la première ligne Cadre ? (3) pourquoi ANP-09 doit rester visible dans un contrôle d'entrées du mois ?",
      correction:
        "1. Sept lignes : ANP-02, 04, 07, 10, 14, 15, 18 (2+1+3+5+2+1+4 jours). Comptez les lignes filtrées, pas la somme des jours.\n2. Première cadre par nom : DURAND Paul (ANP-13), puis LEFEVRE, MARTIN, MULLER.\n3. Date_entree 13/01/2026 dans la période : entrée du mois, brut proratisé. Un filtre « Date_sortie non vide » la masquerait à tort. Pourquoi : le contrôle d'effectif du mois = présents + entrées + sorties, pas « les CDI historiques ».",
    }),
    pack({
      title: "RECHERCHEX, SI et SIERREUR : relier deux listes sans casser la clé",
      description:
        "Chercher un net, un brut, un motif par matricule, et traiter l'absence de résultat.",
      minutes: 24,
      objectifs:
        "Vous écrivez une RECHERCHEX sur le matricule, vous encapsulez les cas d'erreur avec SIERREUR, vous posez un SI de drapeau, et vous savez pourquoi RECHERCHEV sur une colonne mal placée n'est plus le réflexe à enseigner en premier.",
      theorie:
        "Le geste quotidien du contrôle, ce n'est pas « faire un tableau croisé ». C'est : j'ai une liste A (moteur) et une liste B (virement, badgeage, RH). Je veux, pour chaque matricule de A, la valeur correspondante dans B. La fonction adaptée en Excel moderne s'appelle RECHERCHEX (XLOOKUP en anglais). Elle cherche une valeur dans une colonne, renvoie le résultat d'une autre colonne, et permet un message si rien n'est trouvé.\n\nSyntaxe française (séparateur point-virgule) : RECHERCHEX(valeur_cherchée ; tableau_recherche ; tableau_renvoyé ; [si_non_trouvé] ; [mode_correspondance] ; [mode_recherche]). Pour la paie, correspondance exacte (0 ou omis selon version : vérifiez l'aide de VOTRE Excel). On cherche le matricule, jamais le nom : les homonymes et les inversions prénom/nom sont des classiques.\n\nSI teste une condition et renvoie une valeur si vrai, une autre si faux : SI(test ; alors ; sinon). En paie : SI(net<0 ; \"ANOMALIE\" ; \"OK\"). On enchaîne rarement plus de deux SI imbriqués dans un fichier de contrôle junior : lisibilité. SIERREUR(formule ; valeur_si_erreur) attrape #N/A, #DIV/0!, #REF! et affiche un substitut. Elle ne « répare » pas une clé fausse : elle évite qu'une erreur cascade dans une somme. Un fichier plein de SIERREUR qui masquent des matricules absents est un fichier qui ment.\n\nRECHERCHEV existe encore (recherche verticale, clé à gauche). On la mentionne parce que des fichiers hérités l'utilisent. On ne la choisit pas pour un fichier neuf : elle casse si l'on insère une colonne, et la clé à gauche est une contrainte inutile. Index/Equiv est un autre héritage. La compétence transférable : une clé unique, une correspondance exacte, un traitement explicite du « non trouvé ».\n\nLes chiffres du jeu T_PAIE restent pédagogiques. Une RECHERCHEX qui « trouve » 1 648 € n'a pas validé les cotisations de Camille Bernard au regard de l'URSSAF : elle a validé que deux listes parlent du même matricule.",
      methode:
        "1. Identifiez la clé (matricule) dans les deux fichiers, même format (texte, zéros non perdus).\n2. Dans TRAVAIL, colonne « Net_moteur » : RECHERCHEX vers SOURCE.\n3. Colonne « Net_virement » : RECHERCHEX vers le fichier banque / SEPA.\n4. Colonne « Ecart » : différence.\n5. Colonne « Drapeau » : SI(ABS(Ecart)>0,01;\"ECART\";SIERREUR(...)).\n6. Filtrez les drapeaux. Chaque ligne restante a un propriétaire.",
      extra: [
        code(`FORMULES ATTENDUES — Excel français — tableau T_PAIE
Hypothèse : le matricule à lier est en G2 (onglet RAPPRO).

1) Net du salarié dans T_PAIE
=RECHERCHEX(G2;T_PAIE[Matricule];T_PAIE[Net_a_payer];"Matricule absent")

2) Même recherche, erreur masquée proprement (sans avaler un vrai écart)
=SIERREUR(RECHERCHEX(G2;T_PAIE[Matricule];T_PAIE[Net_a_payer]);"Matricule absent")

3) Drapeau net négatif ou vide
=SI(T_PAIE[@[Net_a_payer]]="";"NET VIDE";SI(T_PAIE[@[Net_a_payer]]<0;"ANOMALIE NET";"OK"))

4) Drapeau entrée du mois (janvier 2026)
=SI(ET(T_PAIE[@[Date_entree]]>=DATE(2026;1;1);T_PAIE[@[Date_entree]]<=DATE(2026;1;31));"ENTREE MOIS";"")

5) Résultat attendu de (1) si G2 = "ANP-08" : 2650
   Résultat attendu de (1) si G2 = "ANP-99" : Matricule absent
   Résultat attendu de (3) sur le jeu : toutes les lignes "OK" (aucun net négatif dans T_PAIE)

Ne tapez pas les nets à la main « pour aller plus vite » : la recherche est le contrôle.`),
      ],
      exemple:
        "Liste SEPA de 20 virements, liste moteur de 20 bulletins. Le junior fait un copier-coller aligné « à l'œil » après tri sur le nom. OCONNOR passe au-dessus d'NDIAYE dans un fichier, en dessous dans l'autre (apostrophe, accent). Deux nets s'inversent. RECHERCHEX sur ANP-14 / ANP-06 aurait tenu. Le tri sur nom n'est pas une clé.",
      erreurs:
        "Chercher sur le prénom. Omettre SIERREUR et laisser #N/A dans une SOMME (la somme devient #N/A). Mettre SIERREUR(...,0) et additionner des zéros silencieux : les absents disparaissent des masses. Utiliser une correspondance approximative sur des matricules.",
      particuliers:
        "Matricule en nombre : ANP n'est pas un nombre ; si l'export enlève le préfixe, alignez les formats (TEXTE, ou colonne d'aide). Doublon de matricule : RECHERCHEX ne signale pas le doublon ; un NB.SI.ENS sur la clé = 2 est le contrôle d'unicité, avant la recherche.",
      exercice:
        "Dans un onglet RAPPRO, cellule G2 = ANP-09. (1) Écrivez la formule du net. (2) Quel résultat ? (3) Ajoutez un SI qui affiche PRORATA si Brut_verse <> Brut_contrat. (4) Que donne ANP-16 sur un drapeau SORTIE si Date_sortie dans janvier 2026 ?",
      correction:
        "1. =RECHERCHEX(G2;T_PAIE[Matricule];T_PAIE[Net_a_payer];\"Matricule absent\")\n2. 1010 (net pédagogique de Wei Chen).\n3. =SI(RECHERCHEX(G2;T_PAIE[Matricule];T_PAIE[Brut_verse])<>RECHERCHEX(G2;T_PAIE[Matricule];T_PAIE[Brut_contrat]);\"PRORATA ou ecart brut\";\"brut=contrat\") — pour ANP-09 : PRORATA (1287,10 ≠ 2100).\n4. Date_sortie 31/01/2026 : drapeau SORTIE MOIS. Pourquoi : entrée et sortie sont des contrôles de clôture, pas des curiosités RH.",
    }),
    pack({
      title: "SOMME.SI.ENS et NB.SI.ENS : masses, effectifs et conditions multiples",
      description:
        "Totaliser des bruts et compter des salariés sans tout sélectionner à la main.",
      minutes: 22,
      objectifs:
        "Vous écrivez SOMME.SI.ENS et NB.SI.ENS avec une ou plusieurs conditions, vous contrôlez un effectif et une masse, et vous refusez le total « sélection visible » comme seule preuve.",
      theorie:
        "Après la recherche ligne à ligne vient le contrôle de masse. Le responsable paie, le cabinet, le CSP, le commissaire, le CSE demandent : combien de cadres, quelle masse brute non-cadres, combien d'absents, combien d'entrées. Si vous filtrez et lisez la barre de statut Excel (« Somme : … »), vous avez un chiffre fragile : il dépend du filtre encore actif, d'une ligne cachée, d'un format texte. La fonction écrit la règle.\n\nSOMME.SI.ENS(plage_somme ; plage_critère1 ; critère1 ; …) additionne uniquement les lignes qui respectent toutes les conditions. NB.SI.ENS(plage1 ; critère1 ; …) compte les lignes. Le « ENS » (plusieurs critères) est celui à enseigner : même pour un seul critère, la syntaxe reste homogène. SOMME.SI et NB.SI existent (un critère) : on les rencontre, on ne les priorise pas dans un fichier neuf.\n\nCritères utiles en paie : égalité (\"Cadre\"), inégalité (\"<>\"&\"-\"), seuil (\">0\"), date (\">=\"&DATE(2026;1;1)). Un critère sur une plage doit être de même taille que la plage sommée, sinon #VALEUR!. Les totaux se placent HORS du tableau, dans une zone INDICATEURS, pour ne pas être filtrés avec les lignes.\n\nCe que ces fonctions ne font pas : elles ne vérifient pas qu'un taux URSSAF est le bon. Elles ne remplacent pas le moteur. Elles répondent : « dans CE fichier, la somme des Brut_verse des Non-cadre est X ». Si le fichier est incomplet (19 lignes au lieu de 20), X est faux avec élégance. Le premier contrôle est donc le NB.SI.ENS de toutes les lignes, comparé à l'effectif attendu.\n\nLes résultats chiffrés de l'exercice portent sur T_PAIE pédagogique. Ils ne sont pas des masses DSN opposables. ANP-03 à 1 823,03 € est le SMIC mensuel officiel janvier 2026 (paramètre annuel) utilisé comme brut de dossier fictif.",
      methode:
        "Zone INDICATEURS en haut à droite, hors tableau : effectif, masse brut versé, masse net, nb absents, nb cadres, nb entrées, nb sorties. Chaque indicateur = une formule. Vous rapprochez effectif et masse avec le journal du moteur. Écart d'une ligne : vous ne « corrigez » pas l'indicateur, vous trouvez la ligne.",
      extra: [
        code(`FORMULES ATTENDUES — zone INDICATEURS — T_PAIE janvier 2026

Effectif
=NB.SI.ENS(T_PAIE[Matricule];"<>")
Résultat attendu : 20

Masse brut versé
=SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Matricule];"<>")
Résultat attendu : 46 368,16
(contrôle : somme des 20 Brut_verse, dont ANP-09 = 1 287,10)

Masse brut non-cadres
=SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Statut];"Non-cadre")
Résultat attendu : 32 863,16

Masse brut cadres
=SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Statut];"Cadre")
Résultat attendu : 13 505,00
(ANP-05 2800 + ANP-08 3500 + ANP-13 4005 + ANP-18 3200)

Nombre de salariés avec au moins 1 jour d'absence
=NB.SI.ENS(T_PAIE[Jours_abs];">0")
Résultat attendu : 7

Nombre de lignes motif CP
=NB.SI.ENS(T_PAIE[Motif_abs];"CP")
Résultat attendu : 4 (ANP-02, 07, 10, 18)

Jours d'absence CP (somme, pas un décompte de personnes)
=SOMME.SI.ENS(T_PAIE[Jours_abs];T_PAIE[Motif_abs];"CP")
Résultat attendu : 2+3+5+4 = 14

Entrées en janvier 2026
=NB.SI.ENS(T_PAIE[Date_entree];">="&DATE(2026;1;1);T_PAIE[Date_entree];"<="&DATE(2026;1;31))
Résultat attendu : 1 (ANP-09)

Sorties en janvier 2026
=NB.SI.ENS(T_PAIE[Date_sortie];">="&DATE(2026;1;1);T_PAIE[Date_sortie];"<="&DATE(2026;1;31))
Résultat attendu : 1 (ANP-16)

Cadres absents au moins 1 jour
=NB.SI.ENS(T_PAIE[Statut];"Cadre";T_PAIE[Jours_abs];">0")
Résultat attendu : 1 (ANP-18 MULLER)

Si votre total brut versé ≠ 46 368,16 : une ligne manque, un format texte, ou ANP-09 non proratisé.`),
      ],
      exemple:
        "CSP, 180 bulletins. Le junior annonce « masse brute 412 000 € » lue sur un filtre Cadre+Non-cadre incomplet (un établissement masqué). L'écriture comptable part sur 412 k€. Le moteur a 427 k€. Le lettrage casse. NB.SI.ENS effectif 180 vs 174 aurait arrêté la clôture. Le total de barre de statut n'est pas un livrable.",
      erreurs:
        "Sommer la colonne Net pour « vérifier l'URSSAF ». Critère \"cadre\" alors que la donnée est \"Cadre\" (casse, selon paramétrage Excel). Plages de tailles différentes. Mettre les indicateurs dans la ligne totale du tableau et les filtrer par erreur.",
      particuliers:
        "Plusieurs établissements : un critère SIRET de plus, pas un fichier par atelier « parce que c'est plus simple » si la DSN est unique. Temps partiels : NB.SI.ENS compte des têtes, pas des ETP ; un reporting ETP exige une colonne quotité, absente de T_PAIE de base — vous ne l'inventez pas.",
      exercice:
        "Calculez, avec formules, (1) masse net pédagogique des non-cadres ; (2) nombre de maladies ; (3) brut versé des salariés à SMIC 1 823,03. Donnez les formules et les résultats attendus sur T_PAIE.",
      correction:
        "1. =SOMME.SI.ENS(T_PAIE[Net_a_payer];T_PAIE[Statut];\"Non-cadre\") — 16 non-cadres. Nets : 1648+1529+1435+1860+1715+1490+1010+1570+1790+1455+2010+1435+1900+1680+1605+1550 = 25 682,00.\n2. =NB.SI.ENS(T_PAIE[Motif_abs];\"Maladie\") — 2 (ANP-04, ANP-14).\n3. =SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Brut_contrat];1823,03) — ANP-03 + ANP-15 = 3 646,06.\nPourquoi : la formule est le livrable ; le résultat se vérifie en listant les matricules, pas en « sentant » le total.",
    }),
    pack({
      title: "Dates Excel en paie : entrées, sorties, proratas et pièges de format",
      description:
        "Traiter une date comme une date, calculer un prorata pédagogique, détecter les formats texte.",
      minutes: 20,
      objectifs:
        "Vous distinguez une date Excel d'un texte qui « ressemble » à une date, vous calculez un prorata calendaire étiqueté comme pédagogique, et vous datez les drapeaux d'entrée et de sortie du mois.",
      theorie:
        "La paie est un métier de périodes. Une entrée le 13 janvier 2026, une sortie le 31, un arrêt du 6 au 20, un plafond mensuel, un SMIC horaire au 1er janvier 2026 : tout cela est une date ou un intervalle. Excel stocke une date comme un nombre (série). Un texte \"13/01/2026\" aligné à gauche, importé d'un CSV, n'est pas une date : les comparaisons >= DATE(2026;1;1) échouent, les soustractions donnent #VALEUR!, les TCD groupent n'importe comment.\n\nFonctions utiles : DATE(année;mois;jour) pour construire sans ambiguïté ; ANNEE, MOIS, JOUR pour extraire ; FIN.MOIS(date;0) pour le dernier jour du mois ; NB.JOURS.OUVRES si vous travaillez en ouvrés — avec une liste de jours fériés, sinon le résultat est un faux calendaire déguisé. DATEDIF existe mais est capricieuse et peu lisible : un junior peut s'en passer. Une soustraction de deux dates vraies donne un nombre de jours.\n\nLe prorata d'entrée n'est pas unique. Calendaire (jours de présence / jours du mois), ouvrable, ou selon CCN / usage / paramètre d'entreprise. Dans T_PAIE, ANP-09 utilise un prorata calendaire pédagogique : 2 100 × 19/31 = 1 287,10 €, du 13 au 31 janvier 2026 inclus, mois de 31 jours. Ce n'est pas « la » règle française. Ce n'est pas une clause de CCN Bois inventée. En production, vous lisez le paramétrage et la convention, vous ne changez pas la formule « parce que 30 jours c'est plus joli ».\n\nJanvier 2026 : SMIC horaire 12,02 €, SMIC mensuel 1 823,03 €, PMSS 4 005 € (sources rates-2026.json). Une date d'application de taux se contrôle dans le moteur, pas dans Excel. Excel date les événements du dossier. Il ne remplace pas le barème.",
      methode:
        "À l'import : colonne Date_entree au format date, tester =NO.SEMAINE ou =ANNEE : si #VALEUR!, c'est du texte. Convertir (DATEVALUE, ou fractionner, ou « Convertir »). Une colonne d'aide Jours_mois = JOUR(FIN.MOIS(DATE(2026;1;1);0)) affiche 31. Une colonne Prorata_cal = Brut_contrat * (Jours_presence) / 31, comparée à Brut_verse. Écart > 0,01 € : drapeau, pas une correction silencieuse.",
      extra: [
        code(`DATES — janvier 2026 — formules attendues

Dernier jour du mois de la période
=FIN.MOIS(DATE(2026;1;1);0)
Résultat : 31/01/2026

Nombre de jours calendaires du mois
=JOUR(FIN.MOIS(DATE(2026;1;1);0))
Résultat : 31

Jours de présence calendaires ANP-09 (entrée 13/01, pas de sortie)
=DATE(2026;1;31)-DATE(2026;1;13)+1
Résultat : 19

Prorata calendaire pédagogique ANP-09
=ARRONDI(2100*(DATE(2026;1;31)-DATE(2026;1;13)+1)/31;2)
Résultat : 1287,10
Étiquette OBLIGATOIRE : hypothèse calendaire, pas une CCN.

Drapeau « date au format texte » (exemple si A2 importée)
=SI(ESTNUM(A2);"date OK";"TEXTE — convertir")

NB.JOURS.OUVRES sans fériés (illustration, PAS un calendaire paie opposable)
=NB.JOURS.OUVRES(DATE(2026;1;13);DATE(2026;1;31))
Ne pas présenter ce résultat comme le prorata légal d'ANP-09.`),
      ],
      exemple:
        "Export SIRH : dates US 01/13/2026. Excel français lit 13 comme mois impossible, laisse du texte. Le NB.SI.ENS des entrées janvier renvoie 0. Wei Chen n'existe plus dans le contrôle d'entrées. Le bulletin, lui, existe. La DSN aussi. Le junior qui « n'a rien vu » a un problème de format, pas un problème de RH.",
      erreurs:
        "Écrire 13.01.2026 en texte et soustraire. Utiliser 30 jours pour tous les mois « parce que la paie mensualise » sans lire la règle de prorata du dossier. Oublier le +1 dans une différence de dates (12 au 13 = 2 jours de présence, pas 1). Appliquer le SMIC de juin 2026 (12,31 €) à janvier.",
      particuliers:
        "Entrée et sortie le même mois : deux proratas, règles souvent spécifiques — escalade, pas une invention Excel. Forfait jours : le prorata calendaire de T_PAIE peut être inadapté ; le junior ne « convertit » pas un forfait en 151,67 h dans Excel pour le plaisir. 29 février : hors 2026 (année non bissextile) ; ne pas copier une formule 2024.",
      exercice:
        "ANP-16 sort le 31/01/2026, mois travaillé complet dans le jeu. (1) Combien de jours calendaires de présence ? (2) Si la sortie avait été le 15/01, écrivez le prorata calendaire pédagogique du brut 2 450 € (arrondi au centime). (3) Dites si vous l'appliqueriez en production sans lire le dossier.",
      correction:
        "1. Du 1er au 31 janvier = 31 jours. Brut_verse = contrat dans T_PAIE.\n2. Du 1er au 15 inclus = 15 jours. =ARRONDI(2450*15/31;2) = 1 185,48 €. Formule : =ARRONDI(2450*(DATE(2026;1;15)-DATE(2026;1;1)+1)/31;2).\n3. Non. Hypothèse pédagogique. En production : paramètre de rubrique, CCN, usage, jours ouvrés ou calendaires. Un junior n'impose pas 15/31 parce que l'exercice du cours l'utilisait.",
    }),
    pack({
      title: "Contrôles, rapprochements et anomalies : faire parler deux fichiers",
      description:
        "Construire un onglet de rapprochement moteur / virement / absences, avec drapeaux actionnables.",
      minutes: 24,
      objectifs:
        "Vous rapprochez deux listes par matricule, vous calculez un écart au centime, vous classez les anomalies (manquant, double, écart, net vide), et vous savez lesquelles un junior corrige, documente ou escalade.",
      theorie:
        "Rapprocher, c'est prouver que deux systèmes racontent la même histoire. Moteur vs SEPA : chaque net à payer a un virement, un seul, du bon montant. Moteur vs badgeage : les heures du bulletin existent dans le temps. Moteur vs RH : chaque contrat du mois a un bulletin, chaque bulletin a un contrat. Excel est l'atelier de cette preuve lorsque l'outil ne la donne pas clé en main — c'est fréquent.\n\nUn rapprochement junior tient en colonnes, pas en couleurs. Clé. Valeur A. Valeur B. Écart. Drapeau. Commentaire. Qui. Date. Sans les trois dernières, l'anomalie reviendra en février. L'écart se teste au centime (0,01), pas « à peu près 2 euros, on s'en fiche » : 2 euros sur 20 salariés, c'est un virement faux ; sur 2 000, c'est une masse. La tolérance éventuelle est une politique interne écrite, pas une fatigue de clôture.\n\nAnomalies types : matricule dans A pas dans B (oubli de virement, stagiaire hors SEPA, net à zéro) ; dans B pas dans A (virement d'acompte non soldé, doublon) ; écart de montant ; doublon de clé ; net négatif ; brut < SMIC horaire × heures hors cas légaux ; entrée sans prorata ; sortie sans solde flagé. Excel détecte le symptôme. La cause est dans le dossier (variable, paramètre, pièce).\n\nCe que vous ne faites pas dans Excel : modifier un taux URSSAF, « arrondir » un net pour coller au virement, supprimer une ligne pour que le TCD soit joli. Vous corrigez dans le moteur après pièce et revue, puis vous rafraîchissez l'export. Le fichier de rapprochement est une trace, souvent demandée en contrôle interne. Il se date. Il ne se réécrit pas la veille d'un URSSAF.",
      methode:
        "Onglet RAPPRO : liste des matricules = union (moteur + virement). RECHERCHEX des deux côtés. Écart. SI drapeaux. Filtre ≠ OK. Traitez dans l'ordre : nets négatifs, oubliés de virement, écarts > 0,01, puis absences vs motif vide. Journal d'anomalies : une ligne par fait.",
      extra: [
        code(`RAPPRO PÉDAGOGIQUE — extraits (fictif) — 20 janvier 2026

Fichier VIREMENT (SEPA préparé, non envoyé)
Matricule  Montant_vire
ANP-01        1648,00
ANP-02        1529,00
ANP-03        1435,00
ANP-04        1860,00
ANP-05        2150,00
ANP-06        1715,00
ANP-07        1490,00
ANP-08        2650,00
ANP-09        1010,00
ANP-10        1570,00
ANP-11        1790,00
ANP-12        1455,00
ANP-13        2980,00
ANP-14        2010,00
ANP-15        1435,00
ANP-16        1900,00
ANP-17        1680,00
ANP-18        2440,00
ANP-19        1605,00
ANP-20        1550,00
ANP-07        1490,00
  ↑ doublon volontaire pour l'exercice (ANP-07 deux fois)

FORMULES sur liste des matricules uniques (colonne A)

Net moteur
=RECHERCHEX(A2;T_PAIE[Matricule];T_PAIE[Net_a_payer];"ABSENT MOTEUR")

Montant virement (attention : doublon ANP-07 — RECHERCHEX ne le dit pas)
=RECHERCHEX(A2;T_VIREMENT[Matricule];T_VIREMENT[Montant_vire];"ABSENT SEPA")

Écart
=SIERREUR(B2-C2;"")

Drapeau
=SI(A2="";"";SI(NB.SI.ENS(T_VIREMENT[Matricule];A2)>1;"DOUBLON SEPA";SI(B2="ABSENT MOTEUR";"MANQUE MOTEUR";SI(C2="ABSENT SEPA";"MANQUE SEPA";SI(ABS(B2-C2)>0,01;"ECART";"OK")))))

Contrôle d'unicité moteur
=NB.SI.ENS(T_PAIE[Matricule];A2)
Attendu : 1 pour chaque clé T_PAIE

Contrôle d'unicité SEPA
=NB.SI.ENS(T_VIREMENT[Matricule];A2)
Attendu : 2 pour ANP-07, 1 sinon

JOURNAL D'ANOMALIE (modèle)
Date        Matricule  Type           Fait                         Décision          Qui
20/01/2026  ANP-07     DOUBLON SEPA   1 490 € en double            Purger ligne 2    Junior + revue
20/01/2026  ANP-15     QUALITE        Motif Injustifiee 1 j        Confirmer RH      Escalade Marc`),
      ],
      exemple:
        "Le 24, Lina voit ANP-07 en double dans le SEPA. Si elle envoie, Garcia est payée deux fois. La banque ne « sait » pas que c'est la paie. Le rapprochement NB.SI.ENS > 1 avant export SEPA est un geste de clôture, pas un luxe de CSP.",
      erreurs:
        "Corriger le montant dans Excel et envoyer ce Excel à la banque en oubliant le moteur (DSN et bulletin divergent). Laisser #N/A. Traiter les écarts de 0,01 € une heure et les doublons « plus tard ». Coller le mot de passe SEPA dans le même fichier.",
      particuliers:
        "Acompte déjà versé : le SEPA du solde ≠ net du bulletin. Colonne Acompte, pas un écart « mystère ». Saisie sur salaire : net faible, pas forcément anomalie. Net à zéro : parfois réel (absence mois complet selon règles) — ne pas virementer 0, ne pas oublier le bulletin et la DSN.",
      exercice:
        "Sur le VIREMENT ci-dessus : (1) formule et résultat du nombre de lignes SEPA ; (2) formule du drapeau pour ANP-07 ; (3) que faites-vous avant le 28 janvier ; (4) si ANP-21 apparaît seul dans le SEPA à 800 € ?",
      correction:
        "1. =NB.SI.ENS(T_VIREMENT[Matricule];\"<>\") → 21 lignes (20 salariés + doublon).\n2. NB.SI.ENS = 2 → DOUBLON SEPA. La RECHERCHEX seule afficherait 1490 et un écart 0 : faux vert.\n3. Supprimer le doublon dans le fichier d'export, retracer, ne pas envoyer, faire viser. Contrôler que le moteur n'a qu'un bulletin.\n4. MANQUE MOTEUR : virement sans bulletin. Bloquer, identifier (acompte ? ancien matricule ? fraude / erreur). Escalade. Pourquoi : un rapprochement à une seule fonction ment.",
    }),
    pack({
      title: "Tableaux croisés dynamiques et reporting de clôture",
      description:
        "Produire des masses par statut, motif d'absence et drapeaux, sans taper les totaux.",
      minutes: 18,
      objectifs:
        "Vous construisez un TCD sur T_PAIE, vous savez ce qu'il mesure et ce qu'il ne mesure pas, et vous figez un reporting de clôture reproductible le mois suivant.",
      theorie:
        "Le tableau croisé dynamique (TCD) agrège sans formule visible : lignes (Statut, Motif_abs), valeurs (somme de Brut_verse, nombre de Matricule, somme de Jours_abs). Il sert à voir une distribution, à préparer un commentaire de masse pour le responsable, à alimenter un CSE ou une direction avec des totaux, pas des noms — attention RGPD : un TCD nominatif n'est pas un reporting de CSE.\n\nLe TCD n'est fiable que si la source est un tableau (T_PAIE) sans lignes parasites, si vous actualisez après chaque nouvel export, et si vous ne copiez pas les valeurs « en dur » dans un PowerPoint en oubliant la date. Un TCD non actualisé est un reporting de la quinzaine précédente. La bonne pratique : onglet SOURCE (export), TRAVAIL (drapeaux), TCD (lecture), une cellule « Export du … ».\n\nCe qu'un TCD ne fait pas : il ne calcule pas une cotisation. Il ne remplace pas la DSN. Il ne justifie pas un écart de 1 287,10 € (entrée) si personne ne lit le détail. Il peut cacher un salarié unique dans un total « Non-cadre ». Pour le contrôle opérationnel, les formules SOMME.SI.ENS restent plus auditables (on voit le critère). Pour la présentation, le TCD est plus rapide. Les deux coexistent. Un junior qui ne sait que le TCD ne peut pas retracer une ligne. Un junior qui refuse le TCD perd du temps en clôture.\n\nReporting minimal d'une clôture 20 personnes : effectif, masse brut, masse net pédagogique, nb absents, nb CP, nb maladie, entrées, sorties, liste des drapeaux. Pas de statistique nationale inventée (« 12 % d'absents, c'est trop vs le marché »). Comparer janvier à décembre du MÊME dossier, avec les mêmes définitions.",
      methode:
        "Insertion > Tableau croisé. Source = T_PAIE. Lignes = Statut. Valeurs = Nb de Matricule, Somme Brut_verse, Somme Net_a_payer. Second TCD : Motif_abs (filtrant « - »). Actualiser. Vérifier que 20 = total du TCD. Si 19, une ligne hors tableau.",
      extra: [
        code(`REPORTING CLÔTURE — modèle (valeurs attendues T_PAIE janv. 2026)

TCD 1 — par Statut
Statut      Effectif   Somme Brut_verse   Somme Net (pédagogique)
Cadre              4          13 505,00                10 220,00
Non-cadre         16          32 863,16                25 682,00
Total             20          46 368,16                35 902,00

TCD 2 — motifs d'absence (personnes, pas ETP)
Motif_abs     Nb personnes   Somme Jours_abs
CP                       4                14
Maladie                  2                 3
Injustifiee              1                 1
(vide / -)              13                 0

Contrôle de cohérence
Effectif TCD = 20 = NB.SI.ENS matricules
Somme brut TCD = 46 368,16 = SOMME.SI.ENS brut versé
Si l'un des deux casse : ne pas envoyer le reporting, réparer la source.

Interdit dans un mail CSE / managers : coller T_PAIE nominatif + nets.
Autorisé selon politique interne : masses, effectifs, motifs agrégés.`),
      ],
      exemple:
        "Le directeur demande « la liste des salaires ». Le junior envoie T_PAIE. Les nets circulent. Incident de données. Le bon livrable était : masses par collège (si l'instance le prévoit), ou un canal RH habilité. Excel rend le mauvais geste trop facile. La compétence est de refuser le nominatif hors habilitation.",
      erreurs:
        "TCD sur une plage A1:Z999 pleine de vides (effectifs faux). Oublier d'actualiser. Grouper des dates mal reconnues (mois 2025 dans un fichier 2026). Commenter « trop d'arrêts » sans CCN ni médecin, sur un TCD de 2 maladies.",
      particuliers:
        "Multi-établissements : un champ SIRET dans le TCD. CSP : modèle de reporting imposé, ne pas créer un TCD pirate divergent. Cabinet : un TCD par dossier, jamais un TCD mélangeant deux SIRET clients.",
      exercice:
        "Le TCD 1 affiche 19 et 45 081,06 € de brut. (1) Quelle ligne manque probablement ? (2) Quelle formule le prouve ? (3) Que dites-vous au responsable ?",
      correction:
        "1. 46 368,16 − 45 081,06 = 1 287,10 → ANP-09 (entrée proratisée), souvent hors tableau si ajoutée après création du TCD, ou filtrée.\n2. =NB.SI.ENS(T_PAIE[Matricule];\"<>\") vs total TCD ; liste des matricules non trouvés par RECHERCHEX du TCD vers T_PAIE.\n3. « Reporting non actualisé / source incomplète, je ne transmets pas, je réintègre ANP-09, je réactualise, je recontrôle 20 et 46 368,16. » Pourquoi : un reporting élégant et faux est plus dangereux qu'un retard d'une heure.",
    }),
    pack({
      title: "Import, export et sécurité des fichiers de paie",
      description:
        "Entrer et sortir des données sans casser les formats, sans fuir des nets, sans clé USB personnelle.",
      minutes: 20,
      objectifs:
        "Vous importez un CSV sans détruire les matricules ni les dates, vous exportez un SEPA ou un journal sous revue, et vous appliquez des règles concrètes de sécurité (accès, conservation, incident).",
      theorie:
        "La paie circule par fichiers : export moteur, import variables, export comptable, export SEPA, parfois DSN générée ailleurs. Chaque frontière est un risque de format (virgule, point, encodage UTF-8 vs Windows-1252, zéros de matricule, dates US) et un risque de confidentialité (un mail, une clé, un Drive personnel, une imprimante).\n\nImport : préférez l'assistant d'import ou Power Query à un double-clic de CSV qui « arrange » les colonnes. Contrôlez 5 lignes (première, une accentuée, une date, un montant à virgule, un matricule avec zéro). Si ANP-09 devient 9 ou si 1 823,03 devient 182303, vous arrêtez. Vous ne lancez pas 20 formules sur une base déjà morte.\n\nExport : ce que vous envoyez à la banque, à la compta, au client, est un livrable. Il a une date, un auteur, un contrôle d'unicité, un total. Il n'est pas « la feuille Excel du lundi ». Le mot de passe d'un classeur n'est pas une politique de sécurité : il se transmet mal, il rassure à tort, il ne gère pas les habilitations. La sécurité réelle : dossier réseau habilité, pas de messagerie personnelle, pas de WhatsApp, pas de copie locale non chiffrée emportée dans le métro, destruction des exports obsolètes selon la politique de conservation.\n\nRGPD : rémunérations = données personnelles. Un bulletin envoyé au mauvais destinataire est un incident (déjà vu au module métier). Un fichier T_PAIE sur une clé USB « pour finir ce soir » est le même risque, plus large. Un junior n'invente pas la durée d'archivage légale des bulletins : il suit la politique interne et le responsable. Il ne « nettoie » pas un historique pour gagner de la place la veille d'un contrôle.\n\nExcel n'est pas un coffre-fort. Il n'est pas un moteur. Il n'est pas un canal DSN. Il est un atelier. On le ferme, on le range, on le nomme, on ne le laisse pas ouvert dans un open space au moment de la pause.",
      methode:
        "Nommage : ANP_controle_paie_2026-01.xlsx. Onglet identifiant : période, source, date d'export moteur, auteur. Import CSV : données > à partir d'un fichier. Après import : NB.SI.ENS, min/max brut, 3 RECHERCHEX de fumée (ANP-01, ANP-09, ANP-16). Export SEPA : après rapprochement, revue Marc, pas avant. Fichier clos : retirer de Téléchargements, déposer dans le répertoire habilité, supprimer le mail d'envoi à soi-même.",
      noteText:
        "Obligation légale : protection des données, exactitude déclarative. Le mot de passe Excel est une mesure faible, pas une conformité. Politique interne : habilitations, GED. Un junior n'envoie pas T_PAIE à un manager « curieux ».",
      extra: [
        code(`CHECKLIST IMPORT / EXPORT / SÉCURITÉ — junior

IMPORT
[ ] Période écrite (janvier 2026)
[ ] Encodage : accents (NDIAYE, BERNARD) lisibles
[ ] Matricules : ANP-01 intact (pas 1, pas 01 janv.)
[ ] Décimales : 1823,03 et 1287,10 reconnus comme nombres
[ ] Dates : 13/01/2026 = date, pas texte
[ ] Effectif = attendu (20 sur T_PAIE pédagogique)

EXPORT SEPA / COMPTA
[ ] Rapprochement vert (unicité + écarts)
[ ] Totaux = indicateurs
[ ] Revue N+1
[ ] Nom de fichier daté
[ ] Canal habilité (banque, GED), pas une boîte perso

SÉCURITÉ
[ ] Pas de copie USB perso / Drive perso / WhatsApp
[ ] Écran verrouillé, pas d'impression abandonnée
[ ] Destinataires nominatifs, pas une liste d'équipe large
[ ] Incident (mauvais destinataire) : procédure, pas un emoji
[ ] Mot de passe classeur : si imposé, ce n'est PAS la seule mesure
[ ] Téléchargements du poste : vider les exports de paie`),
      ],
      exemple:
        "Lina s'envoie T_PAIE sur Gmail « pour le week-end ». La pièce reste dans Envoyés, synchronisée sur le téléphone, visible en visio. Ce n'est pas de la rigueur, c'est une fuite en attente. Le bon canal : VPN + répertoire habilité, ou poste portable d'entreprise chiffré selon la politique, pas une boîte personnelle.",
      erreurs:
        "Ouvrir le CSV d'un double-clic la veille du virement. Mettre le RIB dans le même onglet que les commentaires « saisie sur salaire ». Partager un lien OneDrive « tout le monde avec le lien ». Renommer un export « final_final2.xlsx » sans date.",
      particuliers:
        "Télétravail : pièces jointes, imprimante familiale, écran vis-à-vis. Prestataire : un export client ne contient pas les autres dossiers du cabinet. Fin de contrat du junior : restituer, ne pas garder « des exemples » sur le PC perso pour le prochain entretien.",
      exercice:
        "Vous recevez ANP_variables.csv. Après double-clic : ANP-09 devient 9-janv., 1 823,03 devient 1 82303. (1) Que faites-vous dans les 10 minutes ? (2) Quels 3 contrôles de fumée après un import réussi ? (3) Le chef d'atelier demande le fichier « avec tous les nets » par WhatsApp. Réponse.",
      correction:
        "1. Ne pas utiliser ce fichier. Réimporter via l'assistant, typer matricule = texte, dates = date DMY, décimal = virgule. Si l'export moteur est déjà corrompu, redemander l'export.\n2. Effectif 20 ; ANP-09 brut 1287,10 et date 13/01/2026 ; ANP-03 brut 1823,03 ; somme brut 46 368,16.\n3. Refus poli : données personnelles, canal non habilité ; proposer le process (ticket RH, masses anonymisées, ou responsable). Pourquoi : un « non » justifié est une compétence de paie, pas un manque de service.",
    }),
    lesson({
      title: "Mise en pratique guidée : 20 salariés, formules et verdict de contrôle",
      description:
        "Enchaîner sur T_PAIE les formules du module et rendre un verdict de clôture pédagogique.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous reconstituez un mini dossier de contrôle Excel de bout en bout : indicateurs, recherches, drapeaux, TCD, anomalie SEPA, et vous rédigez un verdict. Vous n'affirmez pas que les nets pédagogiques sont des nets URSSAF."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un gestionnaire junior est jugé, les premiers mois, sur sa capacité à poser un fichier qui répond à cinq questions en cinq minutes : combien de personnes, quelle masse, qui est entré, qui est sorti, où sont les anomalies. Les fonctions du module existent pour cela, pas pour orner un CV « Excel avancé ». RECHERCHEX relie. SI et SIERREUR qualifient. SOMME.SI.ENS et NB.SI.ENS totalisent. Les dates bornent. Le TCD présente. Le rapprochement prouve. La sécurité empêche que le fichier devienne l'incident.\n\nLe jeu reste Atelier Nord Paie, 20 lignes, janvier 2026. Les 8 salariés manquants pour arriver aux 28 du cycle mensuel (module suivant) ne sont pas dans T_PAIE : un effectif 20 n'est donc PAS l'effectif société. C'est un extrait pédagogique. En production, un extrait non dit est une erreur : vous écrivez « extrait 20/28 » ou vous prenez la liste complète.\n\nVous allez produire des résultats déterministes, listés dans la correction. Si votre Excel affiche autre chose, le problème est le format, le nom de tableau, ou une ligne oubliée — pas « une autre méthode tout aussi vraie ». Les arrondis sont au centime. Le prorata d'ANP-09 est calendaire pédagogique 19/31. Le SMIC 1 823,03 € et le PMSS 4 005 € sont des paramètres officiels janvier 2026, utilisés ici comme bruts de dossier fictif pour deux salariés."
        ),
        h("Méthode opérationnelle"),
        t(
          "Reproduisez T_PAIE, la zone INDICATEURS, l'onglet RAPPRO avec le doublon ANP-07, un TCD Statut. Puis répondez à l'exercice. Ne changez pas une donnée du jeu pour « arranger » un total."
        ),
        code(`CONSIGNE — livrable de contrôle (à rédiger, pas à envoyer à une banque)

A. Effectif déclaré de l'extrait : ____ (formule)
B. Masse brut versé : ____ (formule)
C. Masse brut cadres / non-cadres : ____ / ____
D. Matricule entrée : ____ brut versé ____
E. Matricule sortie : ____
F. Nb personnes absentes : ____ dont CP ____
G. Drapeau SEPA bloquant : ____
H. Verdict : [ ] OK pour revue N+1   [ ] BLOQUE
I. Phrase de limite : ces nets sont ...........................................

Formules minimales à coller dans votre fichier :
Effectif     =NB.SI.ENS(T_PAIE[Matricule];"<>")
Masse brut   =SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Matricule];"<>")
Cadres brut  =SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Statut];"Cadre")
Entrées      =RECHERCHEX(1;T_PAIE[Date_entree]*((T_PAIE[Date_entree]>=DATE(2026;1;1))*(T_PAIE[Date_entree]<=DATE(2026;1;31)));T_PAIE[Matricule];"aucune")
  (alternative plus lisible : filtre manuel + NB.SI.ENS dates, voir leçon dates)
Doublon      =NB.SI.ENS(T_VIREMENT[Matricule];"ANP-07")`),
        note(
          "L'extrait 20/28 n'autorise pas à clôturer Atelier Nord Paie. Le module cycle mensuel traitera 28 personnes. Ici : compétence Excel, pas clôture sociale."
        ),
        h("Exemple professionnel"),
        t(
          "Un recruteur tend un export de 20 lignes et 15 minutes. Il ne demande pas un TCD coloré. Il demande : « Où est l'anomalie ? » Celui qui trouve le doublon SEPA et l'entrée proratisée emporte le test. Celui qui parle de macros VBA sans voir ANP-07 le perd."
        ),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t(
          "Modifier 1 287,10 en 2 100 « pour que ça colle au contrat ». Oublier de dire que 20 n'est pas 28. Rendre un TCD sans formule. Affirmer que 35 902 € de nets pédagogiques sont la masse de charges URSSAF."
        ),
        h("Situations particulières"),
        t(
          "Test d'entretien sans Excel 365 : RECHERCHEX peut manquer. Dites RECHERCHEV / INDEX-EQUIV si l'environnement l'impose, tout en préférant RECHERCHEX dès qu'elle existe. Pas de débat religieux : la clé unique compte plus que le nom de la fonction."
        ),
        h("Mise en pratique"),
        t(
          "Remplissez A à I. Calculez aussi le brut versé hors ANP-09 : à quoi sert cette comparaison ? Contrôlez ANP-03 et ANP-15 vs SMIC 1 823,03 € : que dites-vous ?"
        ),
        h("Correction détaillée"),
        t(
          "A. 20 =NB.SI.ENS(T_PAIE[Matricule];\"<>\") — extrait, pas la société.\nB. 46 368,16 =SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Matricule];\"<>\").\nC. Cadres 13 505,00 / non-cadres 32 863,16.\nD. ANP-09 CHEN Wei, 1 287,10 €.\nE. ANP-16 LAMBERT Chloe, 31/01/2026.\nF. 7 absents, 4 CP.\nG. DOUBLON SEPA ANP-07 — bloquant.\nH. BLOQUE jusqu'à purge du doublon et revue N+1. Les autres drapeaux (entrée, sortie, injustifiée) sont à commenter, pas à ignorer.\nI. Nets pédagogiques de contrôle, pas des bulletins officiels ni un export d'éditeur.\nBrut hors ANP-09 : 46 368,16 − 1 287,10 = 45 081,06. Compare le « stock » hors entrée ; utile pour un écart N-1, pas pour nier l'entrée.\nSMIC : ANP-03 et ANP-15 sont au SMIC mensuel 1 823,03 € (URSSAF 01/01/2026). Aucun brut horaire n'est calculé dans T_PAIE (pas d'heures). Vous ne concluez pas à une infraction ; vous notez « au SMIC dossier ». Un brut sous 1 823,03 en temps plein 35 h serait un drapeau d'escalade.\nPourquoi le verdict BLOQUE : un doublon de virement est une erreur de paiement, pas un détail Excel."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Excel de contrôle paie",
      description: "Vérifier formules, clés, masses, dates, rapprochements et sécurité.",
      passing_score: 70,
      questions: [
        q({
          question: "Quelle est la clé de rapprochement prioritaire entre deux fichiers paie ?",
          options: [
            "A. Le nom de famille, plus lisible",
            "B. Le matricule (identifiant unique), à format aligné",
            "C. La couleur de la ligne",
            "D. Le prénom + le brut",
          ],
          correct: 1,
          explanation:
            "Homonymes, tris et encodages rendent le nom dangereux. Le matricule est la clé. La couleur n'est pas une donnée.",
        }),
        q({
          question: "Sur T_PAIE, NB.SI.ENS des Jours_abs > 0 doit renvoyer :",
          options: [
            "A. 14 (somme des jours CP)",
            "B. 7 (nombre de personnes avec au moins un jour d'absence)",
            "C. 20",
            "D. 4",
          ],
          correct: 1,
          explanation:
            "NB.SI.ENS compte des lignes, pas des jours. 7 personnes absentes. 14 est la somme des jours CP. 4 est le nombre de lignes CP.",
        }),
        q({
          question: "Formule adaptée pour la masse brute des cadres :",
          options: [
            "A. =SOMME.SI.ENS(T_PAIE[Brut_verse];T_PAIE[Statut];\"Cadre\")",
            "B. =RECHERCHEX(\"Cadre\";T_PAIE[Statut];T_PAIE[Brut_verse])",
            "C. =NB.SI.ENS(T_PAIE[Statut];\"Cadre\")",
            "D. La barre de statut après un filtre, sans formule",
          ],
          correct: 0,
          explanation:
            "SOMME.SI.ENS totalise. RECHERCHEX renvoie une seule ligne. NB.SI.ENS compte 4 cadres, pas la masse. La barre de statut n'est pas un livrable.",
        }),
        q({
          question: "Le prorata 2 100 × 19/31 = 1 287,10 € pour ANP-09 est :",
          options: [
            "A. La seule règle légale française d'entrée en cours de mois",
            "B. Une hypothèse pédagogique calendaire, à étiqueter, pas une CCN inventée",
            "C. Un taux URSSAF 2026",
            "D. Un net officiel du moteur LOU",
          ],
          correct: 1,
          explanation:
            "Le cours impose d'étiqueter le prorata calendaire. La règle réelle se lit dans le dossier. Ce n'est ni l'URSSAF ni le moteur officiel du bulletin.",
        }),
        q({
          question: "RECHERCHEX sur le SEPA trouve 1 490 € pour ANP-07 et un écart de 0. Pourtant le fichier a deux lignes ANP-07. Que manque-t-il ?",
          options: [
            "A. Rien, écart 0 = clôture",
            "B. Un contrôle d'unicité NB.SI.ENS sur la clé, qui révèle le doublon",
            "C. Une certification Microsoft Excel",
            "D. Remplacer tous les nets par la moyenne",
          ],
          correct: 1,
          explanation:
            "RECHERCHEX ne signale pas le doublon. NB.SI.ENS > 1 est le contrôle d'unicité, bloquant avant virement.",
        }),
        q({
          question: "SIERREUR(RECHERCHEX(...);0) utilisé sur tous les nets puis sommé :",
          options: [
            "A. Est la meilleure pratique, car la somme ne casse jamais",
            "B. Peut masquer des matricules absents en les comptant à zéro dans une masse",
            "C. Remplace la DSN",
            "D. Est obligatoire en janvier 2026",
          ],
          correct: 1,
          explanation:
            "Masquer #N/A par 0 fait mentir les masses. SIERREUR sert un message clair, pas un zéro silencieux.",
        }),
        q({
          question: "ANP-03 à 1 823,03 € brut dans T_PAIE :",
          options: [
            "A. Est un brut pédagogique égal au SMIC mensuel URSSAF janvier 2026 (paramètre officiel utilisé comme salaire de dossier)",
            "B. Est le net national obligatoire de tous les SMIC",
            "C. Prouve que le PMSS a disparu",
            "D. Autorise un junior à baisser le SMIC dans Excel",
          ],
          correct: 0,
          explanation:
            "1 823,03 € est le SMIC mensuel 35 h au 01/01/2026 (URSSAF). Ici il est utilisé comme brut de dossier fictif. Ce n'est pas un net, ni un droit de modifier le barème dans Excel.",
        }),
        q({
          question: "Un manager demande T_PAIE nominatif avec tous les nets par WhatsApp. Le junior :",
          options: [
            "A. Envoie, c'est interne",
            "B. Refuse le canal et le destinataire non habilité ; oriente vers le process interne",
            "C. Envoie après avoir mis un mot de passe « paie2026 » dans le même chat",
            "D. Publie un TCD nominatif en pièce jointe, c'est plus professionnel",
          ],
          correct: 1,
          explanation:
            "Rémunérations = données personnelles. WhatsApp perso / canal non habilité : non. Un mot de passe collé dans le chat n'est pas une habilitation.",
        }),
        q({
          question: "Un TCD affiche 19 salariés et 45 081,06 € de brut versé. Le plus probable :",
          options: [
            "A. L'URSSAF a changé le PMSS en cours de quiz",
            "B. ANP-09 (1 287,10 €) est hors source ou le TCD n'est pas actualisé",
            "C. Il faut multiplier par 20/19",
            "D. Les cadres ne doivent pas apparaître dans un TCD",
          ],
          correct: 1,
          explanation:
            "46 368,16 − 45 081,06 = 1 287,10, brut pédagogique de l'entrée ANP-09. Actualiser / réintégrer, ne pas « corriger » par un ratio.",
        }),
        q({
          question: "Excel, dans ce parcours, est présenté comme :",
          options: [
            "A. Un moteur de paie certifié remplaçant Silae",
            "B. Un atelier de contrôle, de rapprochement et de reporting, pas un calculateur d'URSSAF ni un canal DSN",
            "C. Un coffre-fort RGPD suffisant dès qu'il y a un mot de passe",
            "D. Interdit en CSP",
          ],
          correct: 1,
          explanation:
            "Le module le répète : Excel contrôle, il ne remplace pas le moteur, la DSN, ni une politique de sécurité. Il n'est pas interdit en CSP ; il y est même courant.",
        }),
      ],
    }),
  ],
};
