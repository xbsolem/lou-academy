import { pack, quizLesson, q, h, t, note, code, lesson } from "../lib.mjs";

export default {
  position: 23,
  title: "Contrôler et clôturer : variations, anomalies, validation, traçabilité",
  description:
    "Enchaîner les contrôles avant et après calcul : brut, net, cotisations, plafonds, absences, variables, mouvements, anomalies, corrections, validation et piste d'audit. Checklist de clôture utilisable.",
  lessons: [
    pack({
      title: "Contrôler avant et après : une méthode, pas une intuition",
      description:
        "Situer les contrôles dans le cycle, et refuser la clôture « tout est vert ».",
      minutes: 20,
      objectifs:
        "Vous distinguez contrôles de préparation (avant calcul) et contrôles de résultat (après calcul). Vous savez pourquoi un feu vert logiciel ne clôture pas. Vous savez qui valide.",
      theorie:
        "Clôturer, c'est accepter que les bulletins, le virement, la DSN et le journal de ce mois-là deviennent la vérité opposable de l'employeur. Ce n'est pas « lancer le calcul ». Un moteur peut calculer juste une donnée fausse, ou calculer faux une donnée vraie. Le contrôle humain a deux temps.\n\nAvant calcul : les faits sont-ils complets et cohérents ? Contrats, mouvements, variables, absences, pièces, gel respecté, paramètres de période (janvier 2026 : PMSS 4 005 €, SMIC 12,02 € / 1 823,03 €). Si l'entrée du 13 n'est pas dans le dossier, le plus bel algorithme n'inventera pas un prorata juste. Contrôler après, c'est trop tard pour une pièce absente : on régularisera, plus cher.\n\nAprès calcul : les résultats sont-ils plausibles et justifiables ? Masses, variations N vs N-1, nets aberrants, plafonds, cotisations, entrées/sorties, absences vs retenue, unicité du virement. Plausible ne veut pas dire « joli ». Un net qui baisse en janvier 2026 peut être normal (paramètres, PMSS, RGDU selon dossier). Un net qui double sans prime l'est rarement.\n\nLe logiciel propose des listes d'anomalies. Elles sont utiles et incomplètes. Elles ne voient pas ce qu'on ne leur a pas appris à voir (un usage d'entreprise, un salarié sans mutuelle par dispense non classée, un oubli de variable). Excel de contrôle (module précédent) et checklist écrite complètent. Aucun éditeur n'est « la clôture ».\n\nQui valide : un junior prépare, coche, commente. Un responsable (Marc dans la simulation) autorise le paiement et la DSN. Sans délégation écrite, le junior ne clôture pas seul, même à 28 personnes, même si Marc est en retard. La fatigue du 24 n'est pas une délégation.",
      methode:
        "Deux listes affichées, toujours les mêmes, datées. Liste AVANT : pièces, gel, effectif, mouvements, paramètres. Liste APRÈS : masses, variations, plafonds, nets, DSN de pré-contrôle si l'outil en a une, SEPA. Chaque item : OK / KO / N.A. / commentaire. Un KO non commenté = clôture interdite.",
      noteText:
        "Limite junior : vous n'inventez pas une tolérance (« 50 € d'écart c'est rien »). La tolérance, si elle existe, est écrite. Un net négatif, un doublon SEPA, un SMIC sous le légal hors cas : bloquants, pas « à voir lundi ».",
      exemple:
        "Atelier Nord Paie, 22 janvier. Le calcul d'essai est « vert ». Lina n'a pas encore rapproché les 28 lignes. ANP-26 a un net à −40 €. Le vert ignorait le reste à vivre. Sans contrôle après, le 28 part un prélèvement impossible. Le contrôle après n'est pas un luxe de grand groupe.",
      erreurs:
        "Contrôler seulement les réclamations de décembre. Faire confiance au nombre de bulletins édités (« 28 PDF = 28 OK »). Clôturer parce que l'heure de la banque approche. Corriger un résultat sans corriger la cause.",
      particuliers:
        "CSP : checklist industrialisée, temps limité, anomalies en file — on ne saute pas une file pour un manager impatient. Cabinet : 8 dossiers, 8 checklists, pas une seule. Paiement le 25, DSN plus tard : deux validations, deux traces.",
      exercice:
        "Classez avant / après / les deux / aucun (hors sujet).\nA. DPAE de l'entrée du 13.\nB. PMSS moteur vs 4 005 €.\nC. Variation de net ANP-08 vs décembre.\nD. Couleur du logo sur le PDF de bulletin.",
      correction:
        "A. Avant (et un peu après : le prorata). Sans DPAE / dossier, on ne calcule pas « on verra ». B. Avant (paramètre) et après (assiette plafonnée constatée). C. Après. D. Aucun : hors contrôle social. Pourquoi : le temps de clôture se met sur A-B-C, pas sur le graphisme.",
    }),
    pack({
      title: "Contrôles avant calcul : données, gel, mouvements, paramètres",
      description:
        "Empêcher le moteur de calculer un mois incomplet.",
      minutes: 20,
      objectifs:
        "Vous exécutez une revue de préparation : effectif, entrées, sorties, arrêts, variables gelées, paramètres 2026, pièces. Vous savez bloquer un calcul.",
      theorie:
        "Le calcul d'un mois incomplet est pire qu'un calcul tardif : il produit des PDF, une impression de fin, et une DSN à reprendre. La préparation répond à : qui doit être dans ce mois ? Avec quels faits ? Sur quelles règles de période ?\n\nEffectif attendu : liste RH vs liste paie. Chaque matricule manquant ou surnuméraire a une explication (entrée, sortie, suspens, stagiaire, mandataire). Janvier 2026, Atelier Nord Paie : 28 personnes, dont ANP-09 entre le 13, ANP-16 sort le 31. Si la liste moteur en a 27 le 20, vous ne calculez pas « pour avancer ».\n\nMouvements : chaque entrée a un contrat, une DPAE, un profil, une mutuelle / dispense. Chaque sortie a une date, un motif, un solde à préparer (pas le 31 au soir). Chaque arrêt a une pièce, des dates, une consigne de maintien à LIRE (loi / CCN / usage), pas un pourcentage souvenir.\n\nVariables : le gel est une date. Après le gel, plus de saisie hors exception validée. Un manager qui « enverra demain » n'est pas une variable. Vous relancez, vous copiez le responsable, vous n'inventez pas 8 HS.\n\nParamètres : rituel de janvier déjà vu (PMSS, SMIC, taux). AT/MP = notification, pas 1,50 % du cours. FNAL selon seuil. RGDU seulement si le dossier le décide. Si le journal de paramétrage du 2 janvier est vide, le calcul du 20 est prématuré.",
      methode:
        "Le matin du premier calcul d'essai : cocher la liste AVANT. Un seul KO bloquant (entrée sans contrat, gel non tenu sur un atelier entier, PMSS N-1) = pas de calcul réel. On peut calculer un brouillon sur le reste pour anticiper, en le nommant BROUILLON, jamais SEPA.",
      extra: [
        code(`CONTRÔLES AVANT CALCUL — ANP janvier 2026

[ ] Effectif RH = 28 attendus (27 présents pleins mois + 1 entrée + 1 sortie dans le mois)
[ ] ANP-09 dossier + DPAE + profil + mutuelle/dispense
[ ] ANP-16 dossier sortie ouvert (pas le 31 au soir)
[ ] Arrêts : ANP-24 (en cours), ANP-25 (début 6 janv. pièce reçue 8 janv.), autres
[ ] Gel variables : date écrite, relances copiées Marc, pas d'HS inventées
[ ] PMSS 4 005 / SMIC 12,02 et 1 823,03 / maladie 13 % plein / AF 5,25 % plein
[ ] FNAL 0,10 % (28 < 50) — si doute de seuil, ticket, pas d'arbitrage junior
[ ] AT/MP = notification (pas l'hypothèse 1,50 % du cours)
[ ] Journal de paramétrage janvier existant
[ ] Pas de calcul SEPA tant qu'un [ ] bloquant est vide`),
      ],
      exemple:
        "Le 18 à 12 h, gel. Le chef d'atelier n'a pas envoyé les HS. Lina calcule un brouillon SANS ces HS, nommé BROUILLON_18. Elle ne les « met comme d'habitude ». Le 24, toujours rien : les HS passent en février, décision Marc. Le contrôle avant a protégé 28 bulletins d'une invention.",
      erreurs:
        "Lancer le réel pour « voir les anomalies, on corrigera ». Oublier les arrêts longs (ANP-24) parce qu'ils n'ont pas bougé. Traiter la DPAE après le premier bulletin. Recopier les variables de décembre.",
      particuliers:
        "Entrée le dernier jour du mois : elle existe. Maladie sans pièce au gel : consigne interne (provisoire / attente / sans maintien) — écrite, pas improvisée. Multi-dossiers cabinet : un avant-calcul par SIRET.",
      exercice:
        "Au 20 janvier, il manque la pièce d'ANP-25 (arrêt du 6) et le PMSS moteur est encore à 3 925 €. Calculez-vous le réel ? Que faites-vous dans l'heure ?",
      correction:
        "Pas de réel. Dans l'heure : relance pièce ANP-25 (RH / salarié selon process) ; ticket Marc PMSS 4 005 € vs 3 925 €, source URSSAF arrêté 22/12/2025 ; brouillon possible sur les autres, marqué brouillon. Pourquoi : deux KO bloquants, l'un de fait, l'un de paramètre annuel. Calculer quand même, c'est signer les deux.",
    }),
    pack({
      title: "Variations de brut et de net : lire un écart, ne pas le maquiller",
      description:
        "Comparer N à N-1, expliquer ou bloquer, sans « arrondir » un net.",
      minutes: 22,
      objectifs:
        "Vous construisez une variation de brut et de net par salarié et en masse, vous classez les causes, et vous savez lesquelles sont attendues en janvier 2026.",
      theorie:
        "La variation est le contrôle le plus parlant pour un humain. Un salarié à 2 100 € brut tous les mois qui passe à 2 800 € sans avenant, ou un net qui chute de 400 € sans absence, mérite un dossier, pas une clôture. On compare le même matricule, même établissement, brut versé à brut versé, net à payer à net à payer, puis on explique la différence par des faits (HS, CP, entrée, sortie, prime, saisie, mutuelle, PAS, paramètres annuels).\n\nJanvier est un mois de variations légitimes : PMSS 4 005 € (rebascule des plafonds), SMIC revalorisé au 01/01/2026, souvent 13e mois selon usage, régularisations de N-1, parfois bascule de taux. Un junior qui « aligne les nets de décembre » en janvier détruit précisément ce que le législateur et les caisses ont changé. On explique la variation, on ne l'efface pas.\n\nSeuils d'alerte : ils sont de politique interne. Pédagogie ANP : écart de brut > 5 % ou > 100 € hors mouvements connus ; net < 0 ; net à 0 inattendu ; variation de net > 150 € sans fait. Ce ne sont pas des seuils légaux. Un écart de 0,01 € sur un virement peut néanmoins casser un lettrage : on ne méprise pas le centime en masse.\n\nMasse : somme des bruts N vs N-1, corrigée des ETP (entrée, sortie). Si la masse brute monte de 1 287,10 €, ANP-09 (prorata pédagogique Excel 19/31, à confronter à la règle réelle du dossier) est un candidat. Si elle monte de 12 000 €, une prime générale ou un faux doublon est plus probable qu'une entrée.",
      methode:
        "Export N et N-1, RECHERCHEX, colonne Δ brut, Δ net, colonne « fait connu ». Filtre : faits vides ET Δ au-delà du seuil interne. Chaque ligne restante = commentaire dans le journal d'incidents. Masse en tête du reporting de clôture.",
      extra: [
        code(`VARIATIONS — extraits pédagogiques ANP  janvier 2026 vs décembre 2025
Δ = janvier − décembre. Nets de contrôle pédagogiques, pas des bulletins officiels.

Matricule  Δ brut     Δ net      Fait connu                         Verdict
ANP-08        0,00     -42,00    PAS / paramètre 2026 à analyser    Expliquer, pas annuler
ANP-09    +1287,10   +1010,00    Entrée 13/01 (prorata dossier)     Attendu
ANP-13        0,00     +18,00    PMSS 4 005 vs N-1 (assiette T1)    Plausible, contrôler T2=0
ANP-16        0,00      0,00     Sortie 31/01, mois travaillé       OK ce mois ; solde à part
ANP-25     -620,00    -410,00    Arrêt 6/01 — MAINTIEN À LIRE       Contrôler, pas inventer %
ANP-26        0,00     -40,00    Saisie + mutuelle → net négatif    BLOQUANT
ANP-03      +12,xx    + …        SMIC 1 823,03 vs ancien SMIC       Attendu si temps plein 35 h

Masse : toute variation de masse non affectée à une ligne = KO.`),
      ],
      exemple:
        "ANP-26 : Δ net −40 € et net résultant négatif. Lina ne « remet 40 € de prime » pour passer au vert. Elle ouvre la saisie sur salaire, le reste à vivre, Marc, éventuellement l'huissier / le barème. Le bulletin peut rester bas ; il ne part pas négatif sans décision écrite.",
      erreurs:
        "Annuler le PMSS pour lisser un net. Comparer un temps partiel de janvier à un temps plein de décembre sans le voir. Utiliser le net fiscal ou le MNS à la place du net à payer dans la variation de virement. Seuil « 200 € » inventé le 24 sous fatigue.",
      particuliers:
        "Changement de taux PAS en janvier : variation de net sans variation de brut, fréquente, à expliquer au salarié avec le CRM, pas à « corriger » le PAS. 13e mois : variation brute massive, à isoler. Régularisation de trop-perçu : baisse de net, pièce et information.",
      exercice:
        "ANP-08 : brut stable, net −42 €. Pas d'absence. (1) Trois causes possibles, dont une à ne pas inventer. (2) Que dites-vous au salarié ? (3) Que ne faites-vous pas dans le moteur ?",
      correction:
        "1. Possible : taux PAS, paramètre 2026 (cotisations), mutuelle/prévoyance, acompte. Interdit d'inventer : « le logiciel a enlevé 42 € de trop ». 2. Faits : brut identique, net différent, on vérifie PAS et lignes ; réponse factuelle après ouverture du bulletin, pas avant. 3. On ne baisse pas une cotisation URSSAF pour rendre 42 €. On ne copie pas le net de décembre. Pourquoi : la variation est un signal, pas un droit à maquillage.",
    }),
    pack({
      title: "Cotisations et plafonds : contrôler les assiettes, pas « le pourcentage du voisin »",
      description:
        "Vérifier PMSS, T1/T2, SMIC, FNAL, et les écarts de masses sociales.",
      minutes: 22,
      objectifs:
        "Vous contrôlez qu'un brut au PMSS ne crée pas de T2, qu'un SMIC temps plein n'est pas sous 1 823,03 €, que les masses de cotisations bougent pour une raison, et vous n'ajustez pas un taux pour coller à un tableau Excel.",
      theorie:
        "Après les nets, les cotisations. Un écart de net peut venir d'un plafond mal appliqué, d'une T2 qui s'ouvre trop tôt, d'un SMIC non revalorisé, d'une RGDU activée ou oubliée. Le junior ne recalcule pas 28 dossiers à la main. Il teste des sentinelles et des masses.\n\nSentinelles janvier 2026 :\n- Un salarié à 4 005 € brut (ANP-13) : assiette T1 saturée, T2 nulle, CET selon règle Agirc-Arrco (CET si salaire > T1 — à 4 005 € pile, vous ne tranchez pas de mémoire hors source : vous comparez au moteur documenté et au texte Agirc-Arrco, vous signalez l'ambiguïté du « > »). Vous ne forcez pas une T2.\n- Un salarié à 4 100 € : T2 doit exister sur 95 €. Zéro = KO paramètre.\n- Temps plein 35 h : brut de base ≥ 1 823,03 € (SMIC mensuel 01/01/2026). ANP-03, ANP-15, ANP-27 sont des sentinelles. Un 1 810 € = KO.\n- FNAL : 28 personnes, 0,10 % plafonné attendu si < 50. Masse FNAL aberrante (0,50 % sur tout le monde) = ticket, pas une correction de ligne.\n- Maladie patronale : taux plein 13 % si pas de RGDU sur le cas. Une colonne à 7 % en janvier 2026 sur un dossier « taux plein » = paramètre N-1.\n\nMasses : total charges patronales N vs N-1, total salarial. Une chute de maladie patronale de 13 % vers 7 % sur la masse, sans décision RGDU, est un signal industriel. On ne « corrige la masse » dans Excel pour la compta : on corrige le paramètre, on recalcule, on retrace.\n\nLe MNS (montant net social) s'affiche selon le cadre BOSS jusqu'au 31/12/2026 ; la part patronale de complémentaire santé n'est pas à intégrer d'office au MNS jusqu'à cette date (évolution 2027 = projet à revérifier). Un écart MNS vs attendu interne n'autorise pas à bricoler l'assiette CSG.",
      methode:
        "Liste SENTINELLES (5 à 8 matricules). Contrôle visuel des lignes plafond / SMIC / T2. Export des totaux de cotisations vs mois précédent. Tout écart de taux (pas de volume) = paramétrage, donc Marc. Tout écart de volume = faits du mois (entrées, sorties, absences, primes).",
      extra: [
        code(`SENTINELLES COTISATIONS — ANP janvier 2026

ANP-13  Brut 4 005 € = PMSS     T2 attendue : 0 € d'assiette     T2 moteur : ....  OK/KO
ANP-08  Brut 3 500 € < PMSS     T2 attendue : 0                  T2 moteur : ....  OK/KO
ANP-03  Brut 1 823,03 € SMIC     ≥ SMIC 35 h                     moteur : ....     OK/KO
ANP-09  Entrée                   Assiettes proratisées selon règle dossier          OK/KO
ANP-26  Net négatif              PAS une sentinelle de taux ; bloquant paiement     KO
Masse maladie patronale          Si dossier taux plein : ~13 % de l'assiette        OK/KO
                                 Pas de 7 % « souvenir 2025 »
Masse FNAL                       ~0,10 % plafonné si <50                            OK/KO
RGDU                             Off sur ANP sauf cas écrit                         OK/KO

KO de sentinelle = pas de clôture. Junior = signaler. Expert = paramètre.`),
      ],
      exemple:
        "La masse Agirc-Arrco T2 du mois n'est pas nulle alors que personne ne dépasse 4 005 €. Lina liste les bruts max : 4 005 € (ANP-13). Donc T2 globale devrait être nulle (hors erreurs d'assiette : avantages, régul). Elle n'écrase pas la T2 en variable négative. Elle ticket : assiette mal construite ou plafond non chargé.",
      erreurs:
        "Recalculer la CSG de 28 personnes à 9,2 % en oubliant 98,25 % et 6,80+2,40. Ajuster le FNAL à 0,50 % « comme ça la masse colle au budget ». Utiliser le 1,50 % AT du cours comme sentinelle de production.",
      particuliers:
        "Deux contrats, deux plafonds à gérer selon règles de proratisation — expert. Regularisation de plafond en cours d'année : pas un chantier junior isolé. Non-résident (maladie 5,50 %) : sentinelle à part, pièce de résidence.",
      exercice:
        "ANP-13 affiche une T2 de 15,00 € d'assiette alors que le brut soumis est 4 005,00 €. (1) Pourquoi KO ? (2) Variable ou paramètre ? (3) Correction acceptable vs interdite ?",
      correction:
        "1. PMSS janvier 2026 = 4 005 € : T1 saturée, pas d'assiette T2 sur ce seul brut.\n2. D'abord chercher un gain soumis oublié (prime) qui porterait l'assiette au-delà ; si brut total réel 4 005 €, c'est le plafond paramétré (N-1).\n3. Acceptable : Marc charge 4 005 €, test, recalcul, journal. Interdit : −15 € en variable « correction T2 » ; interdit : monter le brut pour « justifier » la T2. Pourquoi : on répare la règle, pas le symptôme.",
    }),
    pack({
      title: "Absences, variables, entrées et sorties : les faits du mois",
      description:
        "Contrôler que chaque mouvement et chaque variable a une pièce et un effet bulletin.",
      minutes: 20,
      objectifs:
        "Vous rapprochez absences, HS, primes, acomptes, entrées et sorties entre la source RH / managers et le bulletin, et vous traitez les in/out en priorité, pas en dernier.",
      theorie:
        "Les anomalies de masse viennent souvent d'un fait oublié ou doublé, pas d'un taux. Une absence saisie deux fois, des HS du chef d'atelier inventées, une entrée sans prorata, une sortie sans solde : le moteur obéit.\n\nAbsences : chaque jour dans le moteur a une source (badge, manager, CP validés, arrêt). Chaque motif a un effet (retenue, maintien, IJ). Un motif vide avec des jours > 0 est un KO. Un maintien maladie sans lecture de la CCN / de la loi est un KO méthodologique, même si le chiffre « semble généreux ». ANP-15 motif injustifié : la retenue suit la règle du dossier, pas une punition Excel.\n\nVariables : HS, primes, acomptes, avantages. Rapprochement par matricule avec le fichier managers. Après gel, le fichier managers n'entre plus, sauf exception Marc. Un acompte non déduit : double paiement partiel. Un acompte déduit deux fois : net effondré.\n\nEntrées : ANP-09 le 13 janvier. Contrôles : présence dans l'effectif, DPAE, prorata selon règle du dossier (le 19/31 du module Excel est une hypothèse calendaire d'exercice, pas la vérité automatique du moteur), mutuelle, premier PAS (taux neutre / CRM selon process — on ne copie pas un collègue), pas de CP déjà pris avant l'entrée.\n\nSorties : ANP-16 le 31 janvier. Mois travaillé complet dans le jeu Excel, mais le solde de tout compte (préavis, CP, documents) est un dossier à part, à deux (Lina + Marc). Une sortie oubliée produit un bulletin de trop en février et une DSN faux « toujours présent ». Priorité : les in/out se traitent en début de cycle, pas le 24 au soir.",
      methode:
        "Trois listes : ABSENCES, VARIABLES, MOUVEMENTS. Pour chacune : source, saisie, effet bulletin (oui/non/partial). In/out en haut du tableau blanc de clôture. Un in/out non fermé = pas de SEPA.",
      extra: [
        code(`FAITS DU MOIS — rapprochement ANP janvier 2026

MOUVEMENTS
ANP-09 entrée 13/01  DPAE OUI  prorata selon dossier ....  mutuelle ....  bulletin 1 OUI
ANP-16 sortie 31/01  motif ....  STC lancé OUI/NON  docs fin  DSN fin process Marc

ABSENCES (extrait)
ANP-02  2 j CP         source planning  effet retenue/CP  OK
ANP-04  1 j maladie    pièce ....  maintien LIRE  pas un % souvenir
ANP-24  arrêt en cours depuis déc.  IJ/subrogation  process Marc
ANP-25  début 6/01     pièce 8/01  signalement DSN selon consigne
ANP-15  1 j injustifié pièce / consigne RH  pas une invention

VARIABLES
HS atelier            reçues OUI/NON  gel 18/01 12h  si NON → février, pas d'invention
Primes                liste visée     rubrique existante
Acomptes              déduction 1 fois
ANP-26 saisie         barème / reste à vivre  net négatif = bloquant`),
      ],
      exemple:
        "ANP-09 a un brut à 2 100 € le 20 janvier, comme un mois complet. Contrôle in/out : entrée le 13, KO. Lina ne « laisse 2 100, on régularisera ». Elle bloque, applique la règle de prorata du dossier (sous revue si doute), recalcule. Une régul de trop-perçu dès le premier bulletin pourrit la relation.",
      erreurs:
        "Traiter les 26 stables d'abord et les 2 mouvements « s'il reste du temps ». Saisir les CP du planning N+1. Oublier qu'un arrêt a un impact DSN événementiel selon process. Déduire un acompte oral non listé.",
      particuliers:
        "Entrée-sortie le même mois : dossier expert. Mutuelle : délai d'attente / dispense, pièces. Forfait jours : l'absence ne se saisit pas comme 7 h par défaut sans règle. Stagiaire / apprenti : gratifications, pas le même profil — ne pas les noyer dans les 28.",
      exercice:
        "Le 24, ANP-16 n'a pas de dossier STC ouvert, les 26 autres sont verts, ANP-09 est proratisé. Pouvez-vous clôturer le virement des 27 et « garder » ANP-16 à part ? Conditions ?",
      correction:
        "On peut concevoir un virement des salariés dont le bulletin est validé, SI la procédure interne le permet et SI ANP-16 n'est pas payée à tort en mois complet sans solde, ET SI Marc valide. On ne « garde à part » en silence. Le solde peut parfois suivre un calendrier distinct (documents). On ne clôture pas la DSN de fin comme si de rien n'était. Pourquoi : isoler une sortie est possible en organisation, pas en oubli. Un junior ne décide pas seul l'isolement.",
    }),
    pack({
      title: "Anomalies, corrections et ce qu'on ne « rattrape » pas en silence",
      description:
        "Qualifier une anomalie, corriger la cause, tracer, informer. Interdiction de la rustine invisible.",
      minutes: 20,
      objectifs:
        "Vous classez une anomalie (saisie, paramètre, interface, fraude / doublon, incompréhension). Vous choisissez correction dans le mois vs régularisation. Vous tracez.",
      theorie:
        "Une anomalie n'est pas un sentiment. C'est un écart à une règle ou à une pièce. On la qualifie avant d'agir. Saisie : mauvaise variable, oubli, doublon SEPA (ANP-07 dans l'exercice Excel, même logique à 28). Paramètre : taux, rubrique, profil. Interface : le SIRH n'a pas versé l'avenant. Décision manquante : HS non validées. Incompréhension : le salarié compare un net à un collègue. Possible fraude ou erreur bancaire : IBAN, doublon de virement — escalade immédiate.\n\nCorrection dans le mois : possible tant que paiement et DSN ne sont pas déposés, ou selon les possibilités de relance DSN, toujours sous revue. Après paiement, on régularise le mois suivant, sauf préjudice et procédure (trop-perçu, trop-versé). Un junior qui « rattrape en silence » entre deux clôtures crée un historique illisible, parfois une infraction (retenue sans information).\n\nLa rustine interdite : variable négative pour cacher un taux ; prime pour masquer un net négatif ; suppression d'une ligne de cotisation ; copie du PAS d'un tiers ; destruction d'un export d'anomalie. La correction licite : pièce, modification de la donnée ou du paramètre par la personne habilitée, recalcul, nouveau contrôle, journal, information du salarié si l'impact le justifie.\n\nTraçabilité : date, matricule, constat, cause, action, qui, pièce. C'est le même journal d'incidents que le module métier. En contrôle URSSAF ou en binôme, ce journal vaut plus qu'un souvenir de clôture.",
      methode:
        "Pour chaque KO de checklist : une ligne de journal avant toute retouche moteur. Puis cause. Puis action habilitée. Puis recalcul ciblé puis masses. Puis re-coche. Interdiction de corriger cinq anomalies d'un coup sans relire les sentinelles.",
      extra: [
        code(`JOURNAL D'ANOMALIES — modèle utilisable

N°  Date        Matr.   Constat                 Cause          Action              Qui    Recalc  Info salarié
1   20/01/2026  ANP-26  Net -40 €               Saisie+mut.    Revue Marc, barème  Lina+  OUI     OUI visé
2   20/01/2026  ANP-07  Doublon (si extrait)    Fichier SEPA   Purge ligne         Lina   OUI     NON
3   22/01/2026  ANP-09  Brut mois complet       Oubli prorata  Règle dossier       Lina+  OUI     NON si avant paiement
4   24/01/2026  HS      Absentes atelier        Pas de pièce   Report février      Marc   N.A.    Managers
5   24/01/2026  ANP-13  T2 à 15 €               Plafond N-1    Charge 4005 (Marc)  Marc   OUI     NON

Interdit en colonne Action : « rustine variable », « on verra », « aligner décembre ».`),
      ],
      exemple:
        "Lina constate ANP-26 à −40 € le 22. Elle écrit la ligne 1 AVANT d'ouvrir l'écran de saisie. Marc décide : pas de virement négatif, étalement selon règles de saisie, information. La DSN et le bulletin reflètent la décision, pas un 0 magique. Le journal permet à un remplaçant le 25 de comprendre.",
      erreurs:
        "Corriger sans ligne de journal. Envoyer un mail « j'ai corrigé ton net » sans dire comment. Recalculer un seul salarié et oublier que le paramètre touché (PMSS) impacte tout le monde. Effacer un doublon SEPA sans vérifier le moteur.",
      particuliers:
        "Anomalie découverte après virement : ne pas relancer un second SEPA « du delta » sans process (risque de double). CRM DSN après dépôt : file dédiée, pas un bricolage de paramètre à chaud sans expert. Suspicion de fraude IBAN : stop paiement selon procédure, pas un Slack informel.",
      exercice:
        "Après dépôt DSN et virement, vous voyez qu'ANP-02 a 2 jours de CP saisis en trop. (1) Correction silencieuse du fichier de janvier déjà payé ? (2) Quelle voie ? (3) Information ?",
      correction:
        "1. Non. Janvier payé et déclaré ne se réécrit pas en silence.\n2. Régularisation février : re-crédit de CP, impact brut/net selon règles, DSN du mois suivant, journal, revue Marc. Pas de retenue surprise si l'erreur est de l'employeur, sans cadre (information, éventuellement trop-perçu selon situation — escalade, pas un réflexe).\n3. Information factuelle du salarié. Pourquoi : la traçabilité et le contradictoire protègent plus qu'une honte de clôture.",
    }),
    lesson({
      title: "Validation, traçabilité et checklist de clôture professionnelle",
      description:
        "Savoir qui signe quoi, et disposer d'une checklist utilisable le jour J.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous décrivez la chaîne de validation (préparation junior, revue N+1, paiement, DSN). Vous savez quelles traces conserver. Vous savez vous servir de la checklist ci-dessous comme d'un outil, pas comme d'une affiche."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Valider, c'est engager l'employeur. La signature peut être un visa sur une checklist, un statut « clôturé » dans l'outil, un mail de Marc, un paraphe sur un journal de paie. Ce cours n'impose pas un formulaire légal unique : il impose qu'il existe une trace, nominative, datée, après les contrôles, avant le SEPA et avant le dépôt DSN.\n\nUn junior qui coche tout « OK » à 19 h 40 sans avoir ouvert les sentinelles ne valide rien : il camoufle. Un responsable qui signe sans lire le journal d'anomalies non plus. La qualité est dans la confrontation : masses, KO ouverts, exceptions autorisées. Une exception (HS tardives acceptées une fois) est écrite : qui, pourquoi, pour ce mois seulement.\n\nTraçabilité : checklist cochée, journal d'anomalies, journal de paramétrage du mois, export de masses, fichier SEPA de contrôle (pas le certificat bancaire personnel), accusé DSN, journal comptable. Conservation : politique interne + obligations d'archivage social / comptable — le junior ne « nettoie » pas le dossier de clôture pour gagner 20 Mo. Confidentialité : ces traces sont des données de paie, mêmes règles que T_PAIE.\n\nLa checklist suivante est professionnelle et utilisable. Elle n'est pas un texte de loi. Elle n'est pas un écran Sage ou Silae. Adaptez les noms (Marc, ANP) à votre dossier. Ne retirez pas les bloquants (net négatif, doublon virement, SMIC, PMSS N-1, in/out ouverts) pour aller plus vite."
        ),
        h("Méthode opérationnelle"),
        t(
          "Imprimez ou dupliquez la checklist en début de mois. Cochez en temps réel, pas le 24 d'un trait. Visa junior, visa N+1. Joignez les 3 indicateurs : effectif, masse brut, masse net. Un visa N+1 sans ces 3 chiffres n'est pas une revue."
        ),
        code(`CHECKLIST DE CLÔTURE PAIE — utilisable
Dossier : ........................................   Période : ........ / 2026
Établissement / SIRET : ...........................  Effectif attendu : ........
Moteur : ..................  (pas une certif éditeur)  Junior : ........  N+1 : ........
Gel des variables : le .... / .... à .... h

A. AVANT CALCUL
[ ] Effectif RH = effectif paie, écarts expliqués
[ ] Entrées du mois : dossier, DPAE, profil, mutuelle/dispense, prorata prévu
[ ] Sorties du mois : dossier STC ouvert, date, motif
[ ] Arrêts : pièces, dates, consigne maintien LUE (loi/CCN/usage), pas un % souvenir
[ ] Variables reçues vs relances ; rien d'inventé après gel
[ ] Paramètres période : PMSS (4 005 € en janv. 2026), SMIC (12,02 € / 1 823,03 € janv.-mai 2026)
[ ] Maladie pat. plein 13 % / AF plein 5,25 % sauf décision RGDU écrite
[ ] FNAL selon seuil (<50 : 0,10 % plaf. ; ≥50 : 0,50 %) — pas d'arbitrage junior
[ ] AT/MP = notification Carsat (pas l'hypothèse pédagogique du cours)
[ ] Journal de paramétrage du mois relu (aucun taux « au feeling »)

B. APRÈS CALCUL
[ ] Nombre de bulletins = effectif du mois (y compris entrée/sortie)
[ ] Masse brut ........ €    Δ vs N-1 ........ €    expliquée
[ ] Masse net à payer ........ €    Δ vs N-1 ........ €    expliquée
[ ] Aucun net négatif ; nets à 0 justifiés
[ ] Sentinelle SMIC temps plein 35 h ≥ 1 823,03 € (janv. 2026)
[ ] Sentinelle PMSS : T2 nulle si brut soumis = 4 005 € sans autre assiette
[ ] In/out : prorata entrée OK selon RÈGLE DOSSIER ; sortie sans oubli
[ ] Absences : chaque jour a un motif et un effet
[ ] Variables : HS/primes/acomptes rapprochés 1 fois
[ ] Doublons matricule moteur = 0 ; doublons SEPA = 0
[ ] Saisies sur salaire / retenues : barème, reste à vivre, visa
[ ] MNS affiché (cadre BOSS 2026) — pas d'intégration d'office mutuelle patronale avant 2027

C. PAIEMENT / DSN / COMPTA / ARCHIVE
[ ] Fichier SEPA = liste des nets validés (RECHERCHEX + unicité)
[ ] Visa N+1 sur masses + anomalies ouvertes + exceptions du mois
[ ] SEPA envoyé par la personne habilitée, date ....
[ ] DSN préparée, CRM lus, dépôt par habilité, date ....  accusé ....
[ ] Journal de paie transmis comptabilité, totaux = masses
[ ] Bulletins : canal habituel, pas de mauvais destinataire (contrôle homonymes)
[ ] Checklist + journal d'anomalies + exports de masses classés GED
[ ] Post-clôture : CRM, réclamations, réguls à planifier, lettrage URSSAF

ANOMALIES OUVERTES CE MOIS (joindre le journal)
N°    Matr.    Fait                         Décision              Report ? O/N

EXCEPTIONS AUTORISÉES (une ligne = une, datée, nominative)
................................................................................................

VISA JUNIOR (préparé, je n'ai modifié aucun taux national sans source)
Date / heure : ..............  Nom : ..............  Signature / statut outil : ..............

VISA N+1 (paiement et DSN autorisés / refusés)
Décision : AUTORISE / REFUSE / AUTORISE SOUS RÉSERVE : ........................................
Date / heure : ..............  Nom : ..............  Signature / statut outil : ..............

Bloquants (refus automatique de visa tant qu'ils existent) :
net négatif · doublon virement · PMSS ou SMIC moteur N-1 · in/out non soldés · taux modifié au feeling`),
        note(
          "Cette checklist est une bonne pratique professionnelle de ce cours, pas un formulaire imposé par le Code du travail. Un item légal (bulletin, DSN, SMIC, données personnelles) reste obligatoire même si vous retirez la ligne correspondante par erreur : ne la retirez pas."
        ),
        h("Exemple professionnel"),
        t(
          "Le 24 à 18 h, Lina a tout coché sauf ANP-26 (net négatif) et le visa Marc. Elle n'envoie pas le SEPA « pour débloquer la banque, Marc signera demain ». Le 25, Marc refuse le négatif, décide un étalement, Lina recalcule ANP-26, met à jour masses et checklist, Marc vise. La banque part. La DSN le suit. Deux heures de décalage, zéro virement impossible."
        ),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t(
          "Cocher d'avance. Faire viser une checklist vide « on a l'habitude ». Classer la checklist dans Téléchargements. Oublier les homonymes à l'envoi des PDF. Croire que le statut « calculé » de l'outil vaut visa N+1."
        ),
        h("Situations particulières"),
        t(
          "N+1 absent : délégation écrite ou report, pas d'auto-visa junior. Audit : on sort la checklist du mois, pas une reconstitution a posteriori. Multi-dossiers : une checklist par SIRET. Télétravail : même traces, même GED, pas une photo WhatsApp de la checklist."
        ),
        h("Mise en pratique"),
        t(
          "Vous êtes le 24 janvier 2026, 17 h. Cochez mentalement : PMSS OK, 28 bulletins, ANP-09 proratisé, ANP-16 STC ouvert, HS atelier absentes (report février visé Marc), ANP-26 net −40 € encore ouvert, SEPA sans doublon. (1) Visa junior possible ? (2) Visa N+1 paiement ? (3) Rédigez la ligne EXCEPTION et la ligne ANOMALIE. (4) Que manque-t-il pour la DSN ?"
        ),
        h("Correction détaillée"),
        t(
          "1. Visa junior : oui en « préparé avec anomalie ouverte ANP-26 », pas un OK global.\n2. Visa N+1 paiement : REFUSE ou AUTORISE SOUS RÉSERVE exclusion / correction ANP-26. Pas d'autorisation globale.\n3. ANOMALIE : ANP-26 net −40 €, saisie+mutuelle, revue Marc, pas de virement négatif. EXCEPTION : HS atelier absentes au gel, report février, Marc, 24/01 — pas une invention.\n4. DSN : après correction ANP-26, pré-contrôle, CRM, dépôt habilité, accusé. Une DSN avant résolution du net négatif fige un bulletin inacceptable.\nPourquoi : la checklist sert à voir l'ouvert, pas à tout vertir."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Contrôle et clôture",
      description: "Vérifier avant/après, variations, sentinelles, anomalies et visa.",
      passing_score: 70,
      questions: [
        q({
          question: "Un calcul « vert » dans le logiciel :",
          options: [
            "A. Remplace la checklist et le visa N+1",
            "B. Signifie que les faits et les paramètres ont été contrôlés par un humain, avant et après",
            "C. N'est pas une clôture : il faut encore les contrôles de faits, de résultats, le visa, le SEPA et la DSN",
            "D. Autorise un net négatif",
          ],
          correct: 2,
          explanation:
            "Le moteur calcule. La clôture est une décision tracée après contrôles. Le vert n'autorise pas un net négatif.",
        }),
        q({
          question: "En janvier 2026, une baisse de net à brut stable peut notamment venir :",
          options: [
            "A. D'un devoir de recopier le net de décembre",
            "B. D'un taux PAS ou de paramètres 2026 — à expliquer, pas à maquiller en recopiant N-1",
            "C. D'une obligation de couper l'APEC",
            "D. Du droit du junior à modifier le PMSS",
          ],
          correct: 1,
          explanation:
            "Janvier fait varier. On explique (PAS, barèmes). On n'aligne pas sur décembre. On ne touche pas au PMSS au feeling.",
        }),
        q({
          question: "Sentinelle ANP-13 à 4 005 € brut soumis, sans autre assiette. T2 affichée à 15 € :",
          options: [
            "A. Normal, tous les cadres ont une T2",
            "B. KO probable de plafond (PMSS janvier 2026 = 4 005 €) : signaler, ne pas rustiner en variable",
            "C. À ignorer sous 50 €",
            "D. À compenser par une prime",
          ],
          correct: 1,
          explanation:
            "T1 = PMSS. T2 au-delà. Une T2 sur un brut égal au PMSS signale un plafond N-1 ou une assiette cachée. Pas de rustine.",
        }),
        q({
          question: "Contrôle avant calcul manquant : PMSS moteur à 3 925 € le 20 janvier 2026. Vous :",
          options: [
            "A. Calculez le réel quand même, la DSN corrigera",
            "B. Bloquez le réel, ticket expert avec source 4 005 € (arrêté 22/12/2025)",
            "C. Tapez 4 005 € si vous avez un accès, sans source ni test, pour aller vite",
            "D. Baissez tous les bruts",
          ],
          correct: 1,
          explanation:
            "Paramètre annuel faux = KO bloquant. L'expert charge après source et test. La DSN ne « corrige » pas un plafond faux. Un accès admin n'autorise pas le feeling.",
        }),
        q({
          question: "Un doublon dans le fichier SEPA avec écart RECHERCHEX à 0 :",
          options: [
            "A. Est OK puisque l'écart est nul",
            "B. Est un bloquant : l'unicité NB.SI.ENS doit le révéler avant envoi",
            "C. Est un problème uniquement au-delà de 1 000 bulletins",
            "D. Se résout en doublant aussi le bulletin",
          ],
          correct: 1,
          explanation:
            "RECHERCHEX ne voit pas le doublon. Un second virement est un trop-versé. Bloquant, dès 28 personnes.",
        }),
        q({
          question: "Après virement et DSN, un trop de 2 jours de CP saisis :",
          options: [
            "A. On réécrit janvier en silence",
            "B. On régularise le mois suivant, tracé, sous revue, avec information adaptée",
            "C. On retient sans information dès le lendemain sur le compte bancaire",
            "D. On supprime le journal d'anomalies",
          ],
          correct: 1,
          explanation:
            "Pas de réécriture silencieuse d'un mois payé. Régul suivante, trace, revue. Pas de retenue sauvage. On conserve le journal.",
        }),
        q({
          question: "Qui autorise le paiement dans la simulation ANP ?",
          options: [
            "A. Lina seule, si la checklist est jolie",
            "B. Le chef d'atelier",
            "C. Marc (N+1), après revue ; Lina prépare",
            "D. L'URSSAF, par CRM",
          ],
          correct: 2,
          explanation:
            "Le junior prépare. Le N+1 autorise, sauf délégation écrite. L'URSSAF ne vise pas le SEPA.",
        }),
        q({
          question: "La checklist de ce module est :",
          options: [
            "A. Un formulaire unique du Code du travail",
            "B. Une certification Sage",
            "C. Une bonne pratique professionnelle utilisable, à adapter, sans retirer les bloquants",
            "D. Facultative dès que l'écran est vert",
          ],
          correct: 2,
          explanation:
            "Bonne pratique du cours, pas un texte légal unique, pas une certif éditeur. Les bloquants restent.",
        }),
        q({
          question: "Un net négatif (ANP-26) :",
          options: [
            "A. Peut partir, la banque arrondira",
            "B. Est un bloquant : revue, barème de saisie, pas de virement négatif improvisé",
            "C. Se corrige en baissant la CSG",
            "D. Est normal pour tous les cadres en janvier",
          ],
          correct: 1,
          explanation:
            "Net négatif = bloquant. On ne touche pas à la CSG pour arranger. Ce n'est pas un effet « cadre de janvier ».",
        }),
        q({
          question: "Corriger un plafond faux se fait :",
          options: [
            "A. Par une variable négative de T2 sur chaque cadre",
            "B. Par l'expert, source, test, journal, recalcul du portefeuille",
            "C. En recopiant les cotisations de décembre",
            "D. Uniquement dans Excel, pour la compta",
          ],
          correct: 1,
          explanation:
            "On répare le paramètre, on teste, on retrace, on recalcule. Excel ne déclare pas. Décembre n'est pas 2026. La rustine T2 est interdite.",
        }),
      ],
    }),
  ],
};
