import { pack, code, quizLesson, q, h } from "../lib.mjs";

export default {
  position: 3,
  title: "Fonction RH, indicateurs et Excel de conseil",
  description:
    "Situer la fonction RH, calculer les indicateurs d'effectifs (ETP, turnover, pyramide) sur un extrait fictif de 12 personnes, puis manier RECHERCHEX, SOMME.SI.ENS, TCD et contrôles — cas Groupe Nova Services.",
  lessons: [
    pack({
      title: "La fonction RH : processus, acteurs, stratégie",
      description:
        "Cartographier ce que fait une DRH, ce qu'un consultant W&O touche, et ce qu'il ne décide pas.",
      minutes: 7,
      objectifs:
        "Vous savez nommer les blocs d'une fonction RH, relier chacun à un livrable de mission W&O, et dire où s'arrête le junior (paie, social, SIRH, décision d'embauche).",
      theorie:
        "Une fonction RH n'est pas « les gens ». C'est un portefeuille de processus : administration du personnel, paie (souvent hors mission W&O), recrutement, formation, développement, mobilité, rémunération, performance, relations sociales, SIRH et données, stratégie RH. Chez Groupe Nova Services (1 200 salariés fictifs), ce portefeuille est fragmenté : cinq RRH, un DRH groupe, des process d'embauche différents, un SIRH partiel. Le consultant W&O ne devient pas le RRH. Il lit comment le travail RH est organisé, ce qu'il produit comme donnée, et ce qui bloque une décision d'effectifs ou d'organisation.\n\nDeux lectures, toujours. Processus : qui recrute, qui autorise, qui forme, qui parle aux instances. Données : ce que le SIRH sait vraiment (contrats, heures, sites, métiers) et ce qu'il ignore (compétences, motifs de départ fiables). Sans la seconde, le SWP du module suivant est un dessin.\n\nLa stratégie RH, pour ce parcours, est l'alignement entre la stratégie d'entreprise (croître en Facility, industrialiser les plateaux) et les leviers humains (attirer, développer, retenir, organiser). Ce n'est ni un catalogue d'outils, ni un plan social. Le junior propose des options. Le client décide. Le juriste et le RRH social portent le cadre des instances.",
      methode:
        "En cadrage d'une mission W&O, une page « fonction RH » :\n1. Organigramme RH réel (DRH, RRH, paie, formation, recrutement) — pas le slide officiel seul.\n2. Pour six processus (recruter, intégrer, former, évaluer, rémunérer, dialoguer) : qui fait, avec quel outil, quelle donnée sort.\n3. Ce que le SIRH contient (effectifs, ETP, dates, métiers) et ce qu'il ne contient pas.\n4. Instances : existence, pas calendrier inventé — vérifier le texte / avis social.\n5. Trois irritants RH déjà entendus, sourcés, datés.\n6. Ce que cette mission ne fera pas : paramétrer la paie, choisir l'éditeur SIRH, rédiger un accord.\nVous sortez une carte, pas un audit social.",
      noteText:
        "Les processus et volumes RH de Nova sont pédagogiques. Un junior n'est pas gestionnaire de paie, ni DS, ni DPO. Sur le social et le RGPD, il signale et il vérifie, il n'invente pas une obligation.",
      exemple:
        "Nova : le DRH dit « on a une stratégie RH, on digitalise ». En entretien, un RRH recrute sur tableur, un autre sur un ATS local, la paie est chez un prestataire, le SIRH ne sort pas d'ETP fiables par métier. Sans lecture process+donnée, le junior promet un SWP groupe pour vendredi. Avec lecture : le premier livrable est un socle d'indicateurs sur un périmètre cadré, et une carte de la fonction — pas un slogan digital.",
      extra: [
        code(`CARTE FONCTION RH — Nova Services (fictif, 1 200 p.)
Bloc                 Ce que W&O utilise              Ce que le junior ne fait pas
Admin / paie         dates, contrats, heures         paramétrer un bulletin
Recrutement          délais, canaux, vacances        signer une embauche
Formation            volumes, métiers critiques      acheter un catalogue
Mobilité             passerelles réelles             promettre une reconversion
Rémunération         masses agrégées                 publier une grille « marché »
Performance          si elle existe et est utilisée  noter les managers
Social               existence d'instances           calendrier CSE inventé
SIRH / data          extract, définitions            « on a tout dans le cloud »
Stratégie RH         alignement offre / capacités    décider à la place du COMEX`),
      ],
      erreurs:
        "Confondre DRH et mission de conseil. Auditer la paie. Promettre un SIRH. Inventer un accord GEPP. Traiter « la RH » comme un seul interlocuteur alors qu'il y a cinq RRH. Lancer un questionnaire à 1 200 personnes au jour 2.",
      particuliers:
        "Paie externalisée : vos extraits passent par un prestataire — délai et contrat de données, pas un export magique. Groupe multi-BU : une « stratégie RH » siège peut n'avoir aucun relais local. Très petite RH (3 personnes pour 1 200) : le diagnostic porte d'abord sur la charge, pas sur un modèle Ulrich complet.",
      exercice:
        "Nova, cinq RRH + DRH, SIRH partiel. (1) Trois questions de cadrage à poser au DRH sur la fonction. (2) Un livrable W&O que vous refusez cette semaine. (3) Une donnée sans laquelle vous ne calculez pas de turnover groupe.",
      correction:
        "1. Qui autorise une embauche locale ? Quel extract SIRH existe déjà (champs, fraîcheur) ? Comment les cinq RRH se répartissent recrutement, social, paie-liaison ?\n2. Vous refusez le choix d'un éditeur SIRH, un accord, un message CSE, un audit de bulletins.\n3. Sans définition (CDI seulement ? y compris CDD et alternants ?) et sans départs + effectif moyen sur la même population, vous ne calculez pas un turnover groupe. Vous le dites.",
    }),
    pack({
      title: "Indicateurs d'effectifs : ETP, turnover, pyramide",
      description:
        "Définir et calculer headcount, ETP, turnover, absentéisme, ancienneté, pyramide et masse — sur un CSV pédagogique de 12 personnes.",
      minutes: 10,
      objectifs:
        "Vous distinguez tête et ETP, vous calculez un turnover comme départs / effectif moyen, vous lisez une pyramide, et vous refusez un benchmark inventé. Vous reproduisez les calculs sur l'extrait Ouest.",
      theorie:
        "Headcount (HC) = nombre de personnes à une date. ETP pédagogique de ce parcours : une personne à 35 h = 1 ; à 28 h = 0,8. Ne jamais additionner des têtes et des ETP. Un temps partiel compte 1 en HC et 0,8 en ETP.\n\nTurnover (taux de sorties pédagogique) = départs de la période / effectif moyen. Effectif moyen = (HC début + HC fin) / 2, sur la même population. Les retraites sont des départs : si vous les isolez, dites-le (turnover hors retraites). Il n'existe pas un « bon » taux légal unique. Inventer 15 % « de marché services » est une faute.\n\nAbsentéisme : ici, jours d'absence / jours ouvrés théoriques, sur le périmètre. Ancienneté : date d'entrée, pas le feeling. Pyramide : tranches d'âge, puis métiers et sites — une pyramide groupe masque une vague de départs sur les responsables d'exploitation. Masse salariale pédagogique : somme des bruts du périmètre, pas le coût employeur (module finance).\n\nTous les chiffres de l'extrait ci-dessous sont fictifs et pédagogiques. Ils entraînent le calcul. Ils ne décrivent pas Nova réel ni un secteur.",
      methode:
        "Avant tout indicateur : population, date, source, définition.\n1. Filtrer le périmètre (site, métier, contrat).\n2. HC à deux dates. ETP = Σ (heures_hebdo / 35) plafonné pédagogiquement à 1 pour 35 h (28/35 = 0,8).\n3. Départs de la période, même filtre.\n4. Turnover = départs / ((HC_début + HC_fin) / 2).\n5. Pyramide : compter par tranche, puis croiser métier.\n6. Étiqueter : constaté vs hypothèse. Interdit : un taux « cabinet » non sourcé.\nContrôle : si HC_fin ≠ HC_début − départs + arrivées, la base est fausse avant tout graphique.",
      noteText:
        "1 personne 35 h = 1 ETP ; 28 h = 0,8. Turnover = départs / effectif moyen. Pas de taux d'absentéisme légal unique. Données = pédagogiques, pas un benchmark.",
      exemple:
        "Le DRH Nova dit « turnover 30 %, c'est hors marché ». Sans extract, un junior opine. Avec l'extrait Ouest (ci-dessous) : 2 départs, HC début 10, HC fin 9, moyenne 9,5, turnover 21 % sur ce petit périmètre pédagogique. Deux temps partiels 28 h pèsent 0,8 ETP chacun. Le 30 % n'est pas dans la base : c'est une phrase. Vous la recalez ou vous la classez « non sourcée ».",
      extra: [
        h("Extract pédagogique — 12 lignes (Agence Ouest + 1 Est, année N)"),
        code(`# Nova Services — extract FICTIF 12 personnes — ne pas citer comme réel
# etp = heures_hebdo / 35
# statut_n : present_fin | arrivee | depart
id,prenom,metier,site,contrat,heures_hebdo,etp,age,anc_ans,brut_annuel,statut_n
1,Alice,Resp exploitation,Ouest,CDI,35,1.00,58,22,42000,present_fin
2,Bruno,Agent,Ouest,CDI,35,1.00,34,4,24000,present_fin
3,Chloe,Agent,Ouest,CDI,28,0.80,41,8,19200,present_fin
4,Djibril,Agent,Ouest,CDD,35,1.00,26,0.4,22000,arrivee
5,Emma,Agent,Ouest,CDI,35,1.00,29,2,24000,depart
6,Farid,Agent,Ouest,CDI,35,1.00,45,12,26000,present_fin
7,Gaelle,Superviseur,Ouest,CDI,35,1.00,61,28,36000,present_fin
8,Hugo,Agent,Ouest,CDI,35,1.00,23,1,22000,present_fin
9,Ines,Agent,Est,CDI,35,1.00,38,6,25000,present_fin
10,Julien,Agent,Ouest,CDI,28,0.80,52,15,20800,present_fin
11,Karim,Agent,Ouest,CDI,35,1.00,31,3,24000,depart
12,Lea,Agent,Ouest,CDI,35,1.00,27,2,23000,present_fin

PÉRIMÈTRE PÉDAGOGIQUE « OUEST hors Inès (id 9) »
Population suivie année N = ids 1-8 et 10-12 (11 lignes dans l'extract Ouest)
  dont 1 arrivée (Djibril) et 2 départs (Emma, Karim)

Identité : HC_fin = HC_début - départs + arrivées
  HC_fin Ouest = 9 présents fin (Alice,Bruno,Chloe,Djibril,Farid,Gaelle,Hugo,Julien,Lea)
  HC_début = HC_fin - 1 arrivée + 2 départs = 9 - 1 + 2 = 10
  Contrôle : 10 - 2 + 1 = 9  OK

ETP fin Ouest (9 présents)
  7 × 1,00 + 2 × 0,80 (Chloé, Julien) = 7 + 1,6 = 8,6 ETP
  HC fin = 9  ≠  ETP fin = 8,6   (ne pas les additionner)

Effectif moyen Ouest = (10 + 9) / 2 = 9,5
Départs = 2 (Emma, Karim) — retraites dans cet extract : 0
Turnover Ouest N = 2 / 9,5 = 21,05 %   (arrondi pédagogique 21 %)
  Ce n'est PAS un benchmark « services » ni un taux légal.

Pyramide Ouest présents fin (n = 9)
  <30 : Hugo 23, Léa 27, Djibril 26     → 3
  30-44 : Bruno 34, Chloé 41             → 2
  45-54 : Farid 45, Julien 52           → 2
  ≥55 : Alice 58, Gaëlle 61             → 2
  Lecture : 2 / 9 encadrement proche de la retraite (Alice, Gaëlle) — signal métier, pas une loi.

Masse brute présents fin Ouest
  42000+24000+19200+22000+26000+36000+22000+20800+23000 = 235000 €
  Masse / HC = 235000 / 9 ≈ 26111 €   (pédagogique, pas un salaire de marché)

Inès (Est) est hors périmètre Ouest : un TCD « tous sites » sans filtre fausse le turnover Ouest.`),
      ],
      erreurs:
        "Diviser les départs par le HC de fin seulement. Compter un 28 h comme 1 ETP. Mélanger Ouest et Est. Présenter 21 % comme un benchmark. Oublier les arrivées dans l'identité HC. Confondre masse brute et coût employeur. Inventer un taux d'absentéisme légal.",
      particuliers:
        "CDD et alternants : soit vous les incluez partout, soit nulle part — documentez. Intérim : hors HC salarié, à tracer en annexe. Multi-sites : un turnover groupe peut être « beau » et un site à 21 %. Temps partiel thérapeutique : heures réelles, pas le contrat d'origine, si la donnée existe ; sinon hypothèse étiquetée.",
      exercice:
        "Sans recalculer au hasard, à partir du cadre Ouest : (1) ETP de Chloé et d'un 35 h. (2) Identité HC. (3) Turnover. (4) Pourquoi Inès ne doit pas entrer dans ce turnover. (5) Une phrase que vous refusez d'écrire au COMEX.",
      correction:
        "1. Chloé 28 h → 28/35 = 0,8 ETP ; un 35 h → 1 ETP.\n2. 10 − 2 + 1 = 9.\n3. 2 / 9,5 = 21,05 % (21 % pédagogique).\n4. Inès est Est : autre site, autre dénominateur.\n5. Vous refusez « le turnover Ouest est 15 points au-dessus du marché » : vous n'avez pas de marché sourcé, seulement 21 % sur un petit extract fictif. Vous dites : « Sur l'Ouest pédagogique, 2 départs pour 9,5 d'effectif moyen, soit 21 %. Échantillon de 9 à 10 têtes : ordre de grandeur à recaler sur l'extract groupe. »",
    }),
    pack({
      title: "Excel de conseil : formules, TCD, contrôles",
      description:
        "Nettoyer un extract, écrire RECHERCHEX, INDEX/EQUIV, SOMME.SI.ENS, un TCD, et des contrôles d'identité — exercice et correction.",
      minutes: 10,
      objectifs:
        "Vous posez une feuille propre (tableau, pas de fusion), vous calculez ETP et indicateurs par formules, vous croisez par TCD, et vous posez des contrôles qui cassent si la base ment. Ce n'est pas une certification Excel.",
      theorie:
        "En mission, Excel n'est pas un dessin. C'est un modèle que le senior doit pouvoir recaler. Règles : une ligne = une personne ou un mouvement ; un tableau structuré ; pas de fusion ; unités dans l'en-tête ; une feuille « hypothèses » ; une feuille « contrôles ».\n\nFormules utiles (noms français courants — selon version : RECHERCHEX / XLOOKUP, SOMME.SI.ENS, INDEX/EQUIV). RECHERCHEX ramène un attribut (site, métier) depuis un référentiel. SOMME.SI.ENS additionne brut ou ETP sous plusieurs filtres. INDEX/EQUIV reste un filet si RECHERCHEX n'est pas disponible. Le TCD (tableau croisé dynamique) compte, somme, moyenne par métier × site — il ne remplace pas l'identité HC.\n\nPower Query sert à nettoyer (trim, types, filtres) avant les formules. Ici, vous voyez le résultat attendu en clair : le LMS n'ouvre pas Excel. Vous reproduisez dans votre tableur. Ce parcours n'est pas une certification Microsoft.\n\nLe contrôle vaut plus que le graphique. Identité HC. Somme ETP = Σ heures/35. Pas de doublon d'id. Dates cohérentes. Si un contrôle est rouge, vous n'envoyez pas le slide.",
      methode:
        "Ordre de production :\n1. Dupliquer l'extract brut (jamais travailler le fichier source).\n2. Tableau : id unique, types (nombres, dates).\n3. Colonne etp = heures_hebdo/35.\n4. Flags : est_ouest, est_present_fin, est_depart, est_arrivee.\n5. SOMME.SI.ENS pour HC, ETP, masse, départs.\n6. Turnover = départs / ((HC_d+HC_f)/2).\n7. TCD métier × statut pour la pyramide (âge en tranches calculées).\n8. Feuille Contrôles : 5 tests vrais/faux.\n9. Graphiques après les contrôles, pas avant.\nVous livrez le fichier + une page « définitions et limites ».",
      noteText:
        "Le LMS affiche des formules et un CSV. Il n'exécute pas Excel ni Power BI. L'attestation LOU Academy n'est pas une certification Excel / Power BI.",
      exemple:
        "Un junior Nova livre un camembert « 21 % » sans feuille de contrôle. Le senior change un filtre, le 21 % ne bouge pas : chiffre tapé en dur. Le même livrable, tenu : les 21 % viennent de =B12/B13, B12 = SOMME.SI.ENS des départs Ouest, B13 = moyenne HC, et un contrôle affiche VRAI sur l'identité 10−2+1=9.",
      extra: [
        h("Exercice guidé — à coller dans un tableur"),
        code(`FEUILLE Hypotheses
  Heures_ETP_1     35
  Perimetre        Ouest
  Annee            N   (pédagogique)

FEUILLE Extract  (coller le CSV de la leçon précédente, 12 lignes)
  + colonne etp        =[@heures_hebdo]/Hypotheses!Heures_ETP_1
  + colonne est_ouest  =[@site]="Ouest"
  + colonne f_present  =[@statut_n]="present_fin"
  + colonne f_depart   =[@statut_n]="depart"
  + colonne f_arrivee  =[@statut_n]="arrivee"
  + colonne tranche    =SI([@age]<30;"<30";SI([@age]<45;"30-44";SI([@age]<55;"45-54";"≥55")))

FEUILLE Indicateurs (Ouest)
  HC_fin      =NB.SI.ENS(Extract[site];"Ouest";Extract[statut_n];"present_fin")
  ETP_fin     =SOMME.SI.ENS(Extract[etp];Extract[site];"Ouest";Extract[statut_n];"present_fin")
  Departs     =NB.SI.ENS(Extract[site];"Ouest";Extract[statut_n];"depart")
  Arrivees    =NB.SI.ENS(Extract[site];"Ouest";Extract[statut_n];"arrivee")
  HC_debut    =HC_fin-Arrivees+Departs
  Eff_moyen   =(HC_debut+HC_fin)/2
  Turnover    =Departs/Eff_moyen
  Masse_fin   =SOMME.SI.ENS(Extract[brut_annuel];Extract[site];"Ouest";Extract[statut_n];"present_fin")

RECHERCHEX — ramener le libellé métier depuis un référentiel
  =RECHERCHEX([@metier];Ref[metier];Ref[famille];"non trouvé")

INDEX / EQUIV (filet)
  =INDEX(Ref[famille];EQUIV([@metier];Ref[metier];0))

TCD 1 : lignes = metier ; valeurs = NB (id) + SOMME (etp) ; filtre site = Ouest, statut = present_fin
TCD 2 : lignes = tranche ; valeurs = NB ; filtre Ouest present_fin
  Attendu TCD 2 : <30 → 3 ; 30-44 → 2 ; 45-54 → 2 ; ≥55 → 2

FEUILLE Controles
  C1 Identité HC     =HC_debut-Departs+Arrivees=HC_fin          → VRAI (10-2+1=9)
  C2 ETP vs formule  =ETP_fin=8,6                               → VRAI
  C3 Doublons id     =NBVAL(Extract[id])=NB(UNIQUE(Extract[id])) → VRAI
  C4 Inès hors Ouest =NB.SI.ENS(Extract[prenom];"Ines";Extract[site];"Ouest")=0
  C5 Turnover lié    =Turnover=2/9,5                            → VRAI
Si C1 faux : vous n'éditez pas le slide. Vous corrigez la base.

Power Query (idée, pas un clic-by-clic certifiant)
  Importer CSV → types → filtre site → colonne etp = heures/35 → charger
  Le modèle reste auditable : pas de valeur collée sur un graphique.`),
      ],
      erreurs:
        "Taper 21 % dans la slide. Fusionner des cellules du tableau. Oublier le filtre site. Utiliser RECHERCHEV sans exact. Faire un TCD sur des cellules vides mal typées. Envoyer le fichier nominatif (prénoms) au COMEX. Prétendre être « certifié Excel » via cette leçon.",
      particuliers:
        "Fichier 1 200 lignes : mêmes formules, TCD, contrôles — plus Power Query. Si RECHERCHEX n'existe pas (version ancienne) : INDEX/EQUIV. Si le SIRH sort des heures mensuelles : reconvertir en hebdo avant /35, et le documenter. Données personnelles : agrégats pour le client élargi ; nominatif seulement dans l'espace mission, besoin d'en connaître.",
      exercice:
        "Vous construisez le fichier. (1) Écrivez la formule ETP. (2) Donnez HC_début, HC_fin, ETP_fin, turnover. (3) Deux contrôles qui doivent être VRAI. (4) Que livrez-vous au COMEX à la place de la liste des 12 prénoms ?",
      correction:
        "1. etp = heures_hebdo/35. Chloé et Julien = 0,8.\n2. HC_début 10, HC_fin 9, ETP_fin 8,6, turnover 2/9,5 ≈ 21 %.\n3. Identité 10−2+1=9 ; ETP_fin=8,6 ; (doublons id = 0).\n4. Au COMEX : tableau agrégé (HC, ETP, turnover, pyramide, masse) + définitions + limites d'échantillon. Pas de nominatif. Pas de « vs marché » inventé. L'extrait 12 lignes est un entraînement ; le groupe 1 200 viendra avec le même mode opératoire, pas avec d'autres formules.",
    }),
    quizLesson({
      title: "Quiz — RH, indicateurs et Excel",
      description:
        "Vérifier ETP, turnover, pyramide, discipline Excel et limites du junior.",
      passing_score: 70,
      minutes: 8,
      questions: [
        q({
          question:
            "Quelle conversion ETP pédagogique est correcte dans ce parcours ?",
          options: [
            "A. 35 h = 1 ETP ; 28 h = 1 ETP aussi, car c'est une tête",
            "B. 35 h = 1 ETP ; 28 h = 0,8 ETP (28/35)",
            "C. 35 h = 35 ETP",
            "D. Le Code du travail impose 0,5 ETP pour tout temps partiel",
          ],
          correct: 1,
          explanation:
            "Convention pédagogique : 35 h = 1 ; 28 h = 0,8. Une tête n'est pas un ETP. Il n'y a pas de taux 0,5 légal unique pour tout temps partiel.",
        }),
        q({
          question:
            "Sur l'Ouest pédagogique : HC début 10, 2 départs, 1 arrivée. Turnover ?",
          options: [
            "A. 2 / 10 = 20 %, en prenant seulement le début",
            "B. 2 / 9 = 22 %, en prenant seulement la fin",
            "C. HC fin = 9 ; effectif moyen = 9,5 ; turnover = 2 / 9,5 ≈ 21 %",
            "D. 30 %, « taux de marché services »",
          ],
          correct: 2,
          explanation:
            "Identité 10−2+1=9. Moyenne (10+9)/2=9,5. 2/9,5≈21 %. Pas de benchmark inventé. Ni seulement le début, ni seulement la fin.",
        }),
        q({
          question:
            "Chloé est à 28 h, Alice à 35 h, toutes deux présentes fin. Combien pèsent-elles en HC et en ETP ?",
          options: [
            "A. 2 HC et 2 ETP",
            "B. 1,8 HC et 2 ETP",
            "C. 2 HC et 1,8 ETP",
            "D. 0,8 HC et 1,8 ETP",
          ],
          correct: 2,
          explanation:
            "Deux personnes = 2 HC. ETP = 1 + 0,8 = 1,8. On ne mélange pas les unités.",
        }),
        q({
          question:
            "Le DRH exige un camembert « vs marché » à partir de l'extrait 12 personnes. Que faites-vous ?",
          options: [
            "A. Inventer 15 % de marché pour faire sérieux",
            "B. Livrer les 21 % Ouest, définitions, limites d'échantillon, sans marché inventé",
            "C. Envoyer les 12 prénoms au COMEX pour transparence",
            "D. Refuser tout indicateur jusqu'à Power BI certifié",
          ],
          correct: 1,
          explanation:
            "On source, on définit, on limite. On n'invente pas un marché. On n'envoie pas le nominatif. Ce parcours n'est pas une certif Power BI.",
        }),
        q({
          question:
            "À quoi sert surtout la feuille Contrôles d'un fichier de conseil ?",
          options: [
            "A. À décorer l'annexe",
            "B. À casser le livrable si l'identité HC ou la somme ETP est fausse, avant tout graphique",
            "C. À remplacer le SIRH",
            "D. À justifier un délai CSE",
          ],
          correct: 1,
          explanation:
            "Les contrôles précèdent les slides. Ils ne remplacent ni le SIRH ni le juriste.",
        }),
        q({
          question:
            "Quelle formule ramène une famille de métier depuis un référentiel si RECHERCHEX n'est pas disponible ?",
          options: [
            "A. INDEX/EQUIV (ou INDEX/MATCH)",
            "B. Un taux de turnover tapé en dur",
            "C. Un organigramme cible",
            "D. Une obligation GEPP inventée",
          ],
          correct: 0,
          explanation:
            "INDEX/EQUIV est le filet classique. Ni un taux en dur, ni une cible, ni du juridique inventé.",
        }),
      ],
    }),
  ],
};
