import { lesson, h, t, note, code, quizLesson, q, pack } from "../lib.mjs";

export default {
  position: 34,
  title: "Ressources professionnelles du gestionnaire de paie",
  description:
    "Modèles utilisables : bulletin commenté, tableau de cotisations janvier 2026, fiches de contrôle, collecte, absences, CP, HS, IJSS (méthode), STC, checklists, calendrier, journal, rapprochement, réclamation, glossaire et recherches juridiques.",
  lessons: [
    pack({
      title: "Bulletin commenté (modèle pédagogique janvier 2026)",
      description: "Un bulletin 2 500 € annoté ligne à ligne, à réutiliser comme gabarit de contrôle.",
      minutes: 28,
      objectifs:
        "À la fin de cette leçon, vous disposez d'un modèle de bulletin commenté, vous savez y reporter les totaux moteur d'un brut 2 500 €, et vous distinguez mention obligatoire, paramètre annuel et hypothèse.",
      theorie:
        "Le bulletin est le document de justification du paiement (L. 3243-1, R. 3243-1, BOSS-BULLETIN). Un modèle commenté n'est pas une maquette d'éditeur. C'est un gabarit de lecture : chaque zone a une source. En janvier 2026, métropole, régime général, hors RGDU, le bulletin pédagogique 2 500 € non-cadre, effectif 20, sans mutuelle, sans PAS, AT/MP 1,50 % hypo, donne : cotisations salariales 521,01 €, patronales 1 027,15 €, net imposable 2 050,22 €, net à payer et MNS 1 978,99 €, base CSG 2 456,25 €.\n\nLe modèle provisoire de présentation du bulletin, y compris le montant net social, est prolongé jusqu'au 31/12/2026 (BOSS-MNS). Vous n'anticipez pas l'évolution 2027 (part patronale de complémentaire santé) comme déjà applicable. Vous n'inventez aucune mention au-delà de R. 3243-1 / BOSS.\n\nCe modèle sert aux Cas 8, 31, 71 et à l'examen. Pour 1 823,03 €, 2 100 €, 3 100 €, 3 500 € et 5 000 €, vous changez les montants, pas la structure. AT/MP, mutuelle, PAS restent étiquetés HYPOTHÈSE lorsqu'ils ne sont pas des taux nationaux.",
      methode:
        "1) En-tête employeur / salarié / période. 2) Temps de travail et brut. 3) Cotisations salariales puis patronales, assiette et taux. 4) Nets (imposable, MNS, à payer). 5) Commentaire de source sous chaque bloc. 6) Ne jamais y coller un net indicatif 1 443,11 € comme formule.",
      noteText:
        "Gabarit pédagogique, pas un clone Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ou Nibelis. Les libellés d'un logiciel réel diffèrent ; les assiettes 2026 ne doivent pas différer des sources.",
      exemple:
        "Cabinet, 12 dossiers. Le collaborateur imprime ce gabarit, surligne les écarts vs le moteur, et n'envoie le bulletin client qu'après trois coches : brut, T1, NAP.",
      extra: [
        h("Modèle — bulletin commenté (brut 2 500 €)"),
        code(`BULLETIN DE PAIE — MODÈLE PÉDAGOGIQUE COMMENTÉ
Période d'emploi : janvier 2026 (rémunérations versées au titre de janvier 2026)
Employeur : [raison sociale, SIRET]     Salarié : Hugo Bertin
Emploi / classification : [RH — ne pas inventer]     CCN : [IDCC à lire, aucun minimum inventé]
Contrat : CDI 35 h    Heures mensualisées : 151,67    Date d'entrée : [dossier]
Statut : non-cadre    Effectif paramétré : 20 (< 50 → FNAL 0,10 % plafonné)

ÉLÉMENTS DE BRUT
Salaire de base                         2 500,00 €     (contrat)
Heures supplémentaires                  0,00 €         (L. 3121-36 si présentes)
Primes / absences / CP                  0,00 €         (qualifier avant de saisir)
BRUT                                    2 500,00 €

COTISATIONS  (s = salarial, p = patronal)           assiette      s         p
Maladie salarial 0 % (domicile fiscal FR)            2 500,00    0,00      —
Maladie patronale 13 % plein                         2 500,00     —     325,00   URSSAF-TAUX-PRIVE-2026
CSA 0,30 %                                           2 500,00     —       7,50
Vieillesse plaf. 6,90 % / 8,55 %                     2 500,00  172,50   213,75   MSA / URSSAF
Vieillesse déplaf. 0,40 % / 2,11 %                   2 500,00   10,00    52,75
AF 5,25 % plein                                      2 500,00     —     131,25
AT/MP 1,50 % HYPOTHÈSE dossier (pas un taux France)  2 500,00     —      37,50
FNAL 0,10 % plafonné (< 50)                          2 500,00     —       2,50
Chômage 4,00 % (limite 4 PASS)                       2 500,00     —     100,00
AGS 0,25 %                                           2 500,00     —       6,25
Dialogue social 0,016 %                              2 500,00     —       0,40
Arrco T1 3,15 % / 4,72 %                             2 500,00   78,75   118,00   AGIRC-ARRCO-2026
CEG T1 0,86 % / 1,29 %                               2 500,00   21,50    32,25
Arrco T2 / CEG T2 / CET / APEC                       —           0,00     0,00   (brut ≤ PMSS 4 005)
CSG déductible 6,80 % sur 98,25 %                    2 456,25  167,03      —
CSG non déductible 2,40 %                            2 456,25   58,95      —
CRDS 0,50 %                                          2 456,25   12,28      —
TOTAL                                                —         521,01  1 027,15

NETS
Net imposable (brut − déductibles hors CSG-ND, CRDS, mutuelle)   2 050,22 €
Net avant impôt = brut − total salarial                          1 978,99 €
PAS (taux CRM — ici 0)                                           0,00 €
Net à payer                                                      1 978,99 €
Montant net social (BOSS-MNS, pédagogique 2026)                  1 978,99 €

COMMENTAIRES OBLIGATOIRES DU GESTIONNAIRE
- RGDU non appliquée (taux pleins maladie 13 % / AF 5,25 %).
- AT/MP 1,50 % = HYPOTHÈSE. Carsat réelle = notification.
- MNS : ne pas ajouter la mutuelle patronale jusqu'au 31/12/2026 (BOSS).
- Mentions : relire R. 3243-1, ne pas « simplifier » (Cas 2).`),
      ],
      erreurs:
        "Utiliser ce gabarit comme capture d'écran d'un logiciel payant. Recopier 1 978,99 € sur un brut 2 700 €. Oublier d'étiqueter l'AT/MP.",
      particuliers:
        "Cadre : ajouter APEC. ≥ 50 : FNAL 0,50 % sur brut. > 4 005 € : T2 + CET. Entrée : changer le brut, pas seulement le commentaire.",
      exercice:
        "Sur ce modèle, remplacez 2 500 € par 2 100 € : indiquez les trois totaux à changer en priorité (salarial, NAP, AT/MP hypo).",
      correction:
        "Salarial 437,65 € ; NAP / MNS 1 662,35 € ; AT/MP 31,50 € (2 100 × 1,50 %). NI 1 722,19 €. Ne laissez pas 521,01 €.",
    }),
    pack({
      title: "Tableau des cotisations janvier 2026 (rates-2026.json uniquement)",
      description: "Barème sourcé à afficher au mur de la clôture, sans aucun taux inventé.",
      minutes: 24,
      objectifs:
        "Vous savez déployer le tableau 2026, vous savez ce qui n'y figure pas (AT/MP national, minima CCN, IJ, barème PAS), et vous savez le dater.",
      theorie:
        "Un gestionnaire junior ne « connaît les taux par cœur » que s'il sait aussi les jeter le 1er janvier suivant. Le tableau ci-dessous est la photographie de rates-2026.json, vérifiée le 14/10/2026, période d'emploi janvier 2026, métropole, régime général. Il ne remplace pas URSSAF, Agirc-Arrco, MSA, BOSS : il les condense pour la production pédagogique.\n\nY figurent : PMSS 4 005 €, PASS 48 060 €, plafond journalier 220 €, horaire 30 €, SMIC 12,02 €/h et 1 823,03 €/mois (01/01–31/05/2026 ; 12,31 €/h au 01/06/2026), maladie salariale 0 % (5,50 % hors domicile fiscal France), maladie patronale pleine 13 %, CSA 0,30 %, vieillesse 6,90 %+0,40 % / 8,55 %+2,11 %, AF pleine 5,25 %, chômage 4,00 % (4 PASS), AGS 0,25 %, FNAL 0,10 % ou 0,50 %, dialogue social 0,016 %, Agirc-Arrco T1/T2/CEG/CET, APEC, CSG/CRDS 6,80+2,40+0,50 sur 98,25 % jusqu'à 4 PASS.\n\nN'y figurent pas : un taux AT/MP France, un versement mobilité, une mutuelle, un taux PAS, une grille CCN, un montant d'IJSS, un coefficient RGDU appliqué d'office. La RGDU 2026 (coeff max 0,3981 <50 ou 0,4021 ≥50) n'est activée que si le cas le demande ; sinon taux pleins, et on le dit.",
      methode:
        "Imprimez le tableau. Datez-le « janvier 2026 ». Barrez-le en juin pour le SMIC. Ne rajoutez jamais une ligne « on a toujours mis 1 % d'AT ».",
      extra: [
        h("Tableau — paramètres 2026 sourcés"),
        code(`TABLEAU COTISATIONS / PLAFONDS — JANVIER 2026
Source unique de ce tableau : src/content/gestion-paie/rates-2026.json
Période : rémunérations versées au titre de janvier 2026, métropole, régime général
Vérifié le : 14/10/2026

PLAFONDS (arrêté 22/12/2025 — URSSAF)
PASS annuel          48 060 €
PMSS                 4 005 €
Plafond journalier   220 €
Plafond horaire      30 €
4 PASS (CSG 98,25 %) 16 020 € (4 × 4 005, logique mensuelle pédagogique)

SMIC (URSSAF / Service-Public)
01/01/2026–31/05/2026   12,02 € / h    1 823,03 € / mois (151,67 h)
01/06/2026              12,31 € / h    1 867,02 € / mois
Heures mensualisées légales 151,67
Net indicatif 1 443,11 € : COMMUNICATION, pas une formule de bulletin
(moteur pédagogique SMIC : NAP 1 443,09 €)

SALARIAL                                      PATRONAL
Maladie           0 % (5,50 % non-domicilié)  13,00 % taux plein
CSA               —                           0,30 %
Vieillesse plaf.  6,90 %                      8,55 %     assiette min(brut, PMSS)
Vieillesse dépl.  0,40 %                      2,11 %     assiette brut
AF                —                           5,25 % taux plein
Chômage           0 %                         4,00 %     limite 4 PASS
AGS               —                           0,25 %     (0,03 % ETT : hors cas)
FNAL < 50         —                           0,10 %     assiette plafonnée
FNAL ≥ 50         —                           0,50 %     assiette brut
Dialogue social   —                           0,016 %
Arrco T1          3,15 %                      4,72 %     T1 ≤ PMSS
Arrco T2          8,64 %                      12,95 %    T2 jusqu'à 8 PSS
CEG T1            0,86 %                      1,29 %
CEG T2            1,08 %                      1,62 %
CET (si > PMSS)   0,14 %                      0,21 %     base T1+T2
APEC (cadres)     0,024 %                     0,036 %    limite 4 PASS
CSG déductible    6,80 %                      —          assiette 98,25 % ≤ 4 PASS
CSG non déd.      2,40 %                      —
CRDS              0,50 %                      —

HYPOTHÈSES PÉDAGOGIQUES (pas des taux nationaux)
AT/MP             1,50 % patronal — HYPOTHÈSE dossier / Carsat réelle ailleurs
Mutuelle          20,00 € s / 40,00 € p — HYPOTHÈSE contrat collectif
PAS               taux CRM ou hypo de dossier — jamais un barème recopié ici
RGDU 2026         non appliquée par défaut (fusion RGD + taux réduits AM/AF)

RÈGLE D'OR : si le chiffre n'est pas dans ce tableau ni dans legal-sources.json,
il est soit à lire (CCN, BOSS AEN, Ameli IJ), soit une HYPOTHÈSE étiquetée,
soit une invention — et l'invention est interdite.`),
      ],
      erreurs:
        "Ajouter 11,31 % maladie. Garder PMSS 3 925 €. Coller un AT/MP 1 % « moyenne France ». Appliquer le SMIC 12,31 € en janvier.",
      particuliers:
        "Alsace-Moselle, agricole, ETT, artistes : hors tableau. Autre régime = autre source, pas une ligne bricolée.",
      exercice:
        "Sans regarder, citez PMSS, SMIC horaire janvier, vieillesse salariale plafonnée, maladie patronale pleine, Arrco T1 salarial. Vérifiez.",
      correction:
        "4 005 € ; 12,02 € ; 6,90 % ; 13 % ; 3,15 %. Toute autre valeur = relire rates-2026.json avant de produire.",
    }),
    pack({
      title: "Fiches de contrôle brut et net",
      description: "Deux fiches opérationnelles pour le premier niveau de clôture.",
      minutes: 22,
      objectifs:
        "Vous tenez une fiche brut (contrat, variables, SMIC, prorata) et une fiche net (trois nets, PAS, mutuelle, anomalies).",
      theorie:
        "Le contrôle brut répond à : « ce brut est-il dû ? ». Le contrôle net répond à : « ce virement et ces nets affichés sont-ils cohérents avec ce brut et les taux 2026 ? ». Les confondre produit le classique « le net a l'air bon » alors que 8 HS non validées sont dans le brut.\n\nOrdre : brut d'abord. Un NAP 1 978,99 € est rassurant seulement si le brut est bien 2 500 € sans événement oublié. Les ancres moteur (1 823,03 / 2 100 / 2 500 / 3 100 / 3 500 / 5 000) servent de détecteurs, pas de substitut au contrat.\n\nLa fiche net isole NI, MNS, NAP. Paul 3 100 € PAS 8 % : 2 542,28 / 2 453,95 / 2 250,57. Hugo 2 500 € sans PAS : les trois derniers se recollent en 1 978,99 € (NI distinct 2 050,22 €).",
      methode:
        "Une fiche par salarié à risque (entrée, sortie, arrêt, > PMSS, net < 1 200 € ou négatif, écart N-1). Les autres : contrôle par tableau portefeuille (Cas 40, 75, 135).",
      extra: [
        h("Fiche A — contrôle du brut"),
        code(`FICHE CONTRÔLE BRUT — période : ________  matricule : ________  nom : ________
Contrat : brut mensuel ______ €    horaires ______    statut cadre O/N    forfait jours O/N
SMIC horaire 12,02 € respecté ?  O / N / SO     si N : BLOQUER (Cas 3, 74)
Entrée / sortie du mois : dates ______  prorata calendaire ______ / 31 = ______ €
Absences : nature ______  jours ______  retenue ______ €  (qualifier avant de calculer)
HS : nombre ______  semaine civile  25 % ______  50 % ______  validées O/N
Complémentaires (partiel) : ______  PAS la rubrique HS (L. 3123-9)
CP : jours ______  dixième ______  maintien ______  retenu ______ (L. 3141-24)
Primes : libellé ______  montant ______  soumise O/N  texte d'exonération lu O/N
AEN : ______ €  HYPOTHÈSE / BOSS lu   (jamais « taux national » hors source)
BRUT FINAL DU MOIS : ______ €
Ancre de comparaison (si brut = 1823,03 / 2100 / 2500 / 3100 / 3500 / 5000) : O / N
Écart vs N-1 expliqué : O / N
Visa junior ______  date ______  revue N+1 si événement : ______`),
        h("Fiche B — contrôle des nets"),
        code(`FICHE CONTRÔLE NETS — même matricule / période
Brut contrôlé (fiche A) : ______ €
T1 = min(brut, 4005) = ______    T2 = ______    CET dû si brut > 4005 : O/N
Total salarial moteur / logiciel : ______ €
Net imposable : ______ €     (assiette PAS)
MNS : ______ €               (brut − social obligatoire ; mutuelle p hors MNS 2026)
PAS taux (CRM / hypo étiquetée) : ______ %    montant : ______ €
Net à payer : ______ €
Contrôles bloquants :
[ ] NAP ≤ 0  → pas de SEPA cosmétique à 0 € (Cas 73)
[ ] MNS ≠ NAP expliqué (PAS et/ou mutuelle s)
[ ] Maladie s = 0 si domicile FR (pas 5,50 % copié)
[ ] AT/MP étiqueté HYPOTHÈSE
[ ] APEC seulement si cadre
[ ] FNAL 0,10 % plaf. si < 50 ; 0,50 % brut si ≥ 50
Ancre : si brut 2500 sans PAS/mutuelle, NAP attendu 1 978,99 €
Visa ______`),
      ],
      erreurs:
        "Contrôler le net sans le brut. Cocher les fiches sans ouvrir le bulletin. Utiliser 1 443,11 € comme ancre SMIC.",
      particuliers:
        "Portefeuille 180 bulletins : fiches A/B sur les exceptions, tableau sur le volume (Cas 75).",
      exercice:
        "Remplissez mentalement la fiche B de Paul 3 100 € PAS 8 %.",
      correction:
        "Brut 3 100 ; T1 3 100 T2 0 CET non ; salarial 646,05 ; NI 2 542,28 ; MNS 2 453,95 ; PAS 8 % 203,38 ; NAP 2 250,57. MNS ≠ NAP expliqué.",
    }),
    pack({
      title: "Collecte des variables et suivi des absences",
      description: "Deux tableaux de travail pour ne plus saisir d'après un Slack du 24.",
      minutes: 22,
      objectifs:
        "Vous collectez les variables avant le gel et vous tenez un suivi d'absences qualifié (CP, maladie, injustifiée, autres).",
      theorie:
        "La qualité du bulletin se joue avant le moteur : ce qui n'est pas collecté sera inventé ou oublié. Un service paie a une date de gel (simulation Atelier Nord, module 00 : 18 du mois 12 h dans l'exemple). Après le gel, exception validée par le responsable, pas par la pression du chef d'atelier.\n\nLes absences se qualifient : CP (compteur, L. 3141-3 / L. 3141-24), maladie (pièce, méthode IJ, maintien CCN lu), injustifiée (retenue, RH), formation, jour férié, etc. Une mauvaise qualification produit une mauvaise rubrique, une mauvaise DSN, un mauvais net.\n\nRGPD : les motifs médicaux restent minimisés. Le suivi paie a besoin de dates et de nature « arrêt maladie », pas du diagnostic. Habilitations.",
      methode:
        "Relance J-10, gel, file des exceptions, intégration SIRH, contrôle vs badgeage/CP. Journal d'incidents pour tout écart.",
      extra: [
        h("Modèle — collecte des variables"),
        code(`COLLECTE VARIABLES — mois : janvier 2026    gel : ______  clôture interne : ______
Établissement / SIRET : ______    CCN (IDCC, à lire) : ______    Effectif paramétré : ______

Matricule | Nom | HS validées | Complément. | Prime (libellé, €, soumise O/N) | AEN | Commentaire | Visa manager | Heure dépôt
          |     |             |             |                                |     |             |              |

Relances effectuées (date, destinataire) :
Exceptions après gel (qui a validé, motif) :
HS non validées → report mois suivant, PAS de saisie « comme d'habitude » (Cas 93).`),
        h("Modèle — suivi des absences"),
        code(`SUIVI ABSENCES — janvier 2026
Matricule | Nom | Nature (CP / MAL / AT / INJ / AUTRE) | Début | Fin | Jours | Pièce reçue O/N | Maintien CCN lu O/N | Subrogation O/N | IJ montant connu O/N | Retenue brute € | DSN événement O/N | Flag clôture
          |     |                                      |       |     |       |                 |                     |                |                      |                 |                   |

Règles :
- CP : compteur source SIRH, best of dixième/maintien, pas 12 % inventé.
- MAL : pas d'IJ inventée (rates-2026.json silencieux). Méthode + pièces (Cas 51-55).
- INJ : retenue, pas un CP offert par le manager (Cas 27).
- Diagnostic médical : NE PAS SAISIR (RGPD).
- Incohérence HS un jour d'absence : alerte, pas de paiement HS (Cas 59, 126).`),
      ],
      erreurs:
        "Collecter le 24. Qualifier « absent » sans nature. Saisir le diagnostic. Inventer les HS manquantes.",
      particuliers:
        "Télétravail, déplacement : ce n'est pas une absence. Forfait jours : suivi en jours, pas en 151,67 h.",
      exercice:
        "Rédigez la relance manager du 12 janvier (gel le 18) en cinq lignes, vouvoiement, sans accusation.",
      correction:
        "Objet : variables paie janvier — gel 18/01 12h. Rappel de la date, liste des matricules sans HS/primes, conséquence (non-paiement janvier, report février), créneau 30 min, copie responsable. Pas de « comme d'habitude vous oubliez ».",
    }),
    pack({
      title: "Modèles de calcul des congés payés et des heures supplémentaires",
      description: "Deux feuilles de calcul datées, liées au moteur pédagogique.",
      minutes: 24,
      objectifs:
        "Vous appliquez L. 3141-24 (best of) et L. 3121-36 (25/50 % supplétifs) avec des gabarits, sans CCN inventée.",
      theorie:
        "Les CP et les HS sont les deux variables qui cassent le plus de bulletins « mois plein ». Le droit à CP légal est 2,5 jours ouvrables par mois de travail effectif, plafond 30 (L. 3141-3). L'indemnité ne peut être inférieure au dixième de la rémunération brute de référence ni au maintien (L. 3141-24). Les HS, à défaut d'accord, : 25 % sur les 8 premières de la semaine, 50 % au-delà (L. 3121-36). Le taux horaire pédagogique = mensuel / 151,67, sauf base écrite différente.\n\nLe moteur fournit : cpTenth, cpBestOf, overtimeLegalSupplemental, overtimeRate. Exemples : 4 h SMIC = 60,10 € ; 10 h SMIC = 156,26 € ; 8 h à 13,85 € = 138,50 € ; 6 h à 16,48 € = 123,60 € ; 12 h à 20,44 € = 327,04 €. Dixième de 30 000 € = 3 000 €.\n\nUne CCN plus favorable se lit. Un forfait jours ne se convertit pas en 25 % (Cas 127). Les complémentaires d'un partiel ne sont pas des HS (L. 3123-9).",
      methode:
        "Toujours : semaine civile pour les HS, comparaison écrite des deux méthodes CP, validation manager pour les heures, compteur RH pour les jours.",
      extra: [
        h("Modèle — calcul CP"),
        code(`CALCUL CP — L. 3141-3 / L. 3141-24 — période de paie : janvier 2026
Salarié : ______    Compteur source : ______    Unité : ouvrable / ouvré (règle écrite : ______)

Acquis légaux (2,5 j / mois effectif, plafond 30) : ______   CCN plus favorable lue : O/N (si N : ne pas inventer)
Jours pris / ICCP (sortie) : ______

A. DIXIÈME
Rémunération brute de la période de référence (éléments selon texte, pas « au feeling ») : ______ €
Dixième = / 10 = ______ €     (engine.cpTenth)
Prorata si prise partielle selon règle interne documentée : ______ €

B. MAINTIEN
Salaire qui aurait été perçu pour les mêmes jours : ______ €

C. BEST OF (engine.cpBestOf)
max(A, B) = ______ €     méthode retenue : dixième / maintien
Double versement A+B : INTERDIT
Salaire de présence retenu pour éviter le double mois : ______ €

Visa ______  pièce compteur jointe O/N`),
        h("Modèle — calcul HS"),
        code(`CALCUL HS — L. 3121-27 / L. 3121-28 / L. 3121-36 — janvier 2026
Salarié : ______    mensuel : ______ €    / 151,67 = taux horaire ______ €
(SMIC : 12,02 €)    Forfait jours : STOP, pas ce formulaire (Cas 127)
Temps partiel sous 35 h : STOP, formulaire COMPLÉMENTAIRES (L. 3123-9)

Semaine (dates) | h supp. | dont ≤ 8 (25 %) | dont > 8 (50 %) | montant 25 % | montant 50 % | total | visa
                |         |                 |                 |              |              |       |

Total mois HS brut : ______ €
À ajouter au brut de base AVANT cotisations (ne jamais ajouter au net)
Contingent / durées max : CCN et Code lus, pas « 220 h » de mémoire (Cas 60)
CCN plus favorable lue : O/N   si O, taux appliqué : ______ (citer la clause, pas un souvenir)`),
      ],
      erreurs:
        "50 % sur le mois. 12 % de CP. HS + CP le même jour. Ajouter les HS au net 1 978,99 €.",
      particuliers:
        "Heures d'équivalence, astreintes, nuit : CCN / Code, autre formulaire, revue.",
      exercice:
        "12 HS à 20,44 € (mensuel 3 100 €) : remplissez 25 % et 50 %.",
      correction:
        "8 × 20,44 × 1,25 = 204,40 € ; 4 × 20,44 × 1,50 = 122,64 € ; total 327,04 €.",
    }),
    pack({
      title: "Modèle IJSS (méthode) et modèle de solde de tout compte",
      description: "Deux dossiers : arrêt maladie sans IJ inventée, STC sans indemnité inventée.",
      minutes: 26,
      objectifs:
        "Vous ouvrez un dossier maladie méthodique et un STC méthodique, vous savez ce qui se calcule et ce qui s'escalade.",
      theorie:
        "L'IJSS n'a pas de montant dans rates-2026.json. Le cours enseigne la méthode : pièces, dates, retenue de salaire, maintien CCN lu, subrogation paramètre d'entreprise, DSN, interdiction d'un 50 % magique. Le plafond journalier 220 € est un plafond de Sécurité sociale, pas une IJ.\n\nLe STC assemble le salaire de période (prorata si besoin), l'ICCP (best of), les éléments écrits (primes, AEN jusqu'à restitution), éventuellement préavis, éventuellement indemnités de rupture SI barème lu et motif RH. Documents : bulletin, certificat, attestation France Travail selon process, reçu pour solde encadré. DSN de fin. Portabilité : lire le contrat, pas 12 mois de mémoire (Cas 99).\n\nRC : L. 1237-11, homologation, junior ne barème pas seul. CDD : précarité avec exceptions, lecture, pas 10 % automatique.",
      methode:
        "Deux checklists séparées. Ne jamais mélanger IJ et ICCP. Ne jamais antedater une DPAE ni un motif DSN.",
      extra: [
        h("Modèle — dossier IJSS (méthode, sans montant fictif)"),
        code(`DOSSIER ARRÊT — méthode IJSS — PAS DE MONTANT INVENTÉ
Salarié : ______    brut mensuel : ______ €    période : janvier 2026
Arrêt : début ______ fin ______  pièce reçue le ______  type MAL / AT / MP
Retenue pédagogique calendaire : brut × jours / 31 = ______ €
Brut de présence : ______ €
HS pendant l'arrêt : 0 (si badgeage : anomalie)
Maintien CCN / accord : texte lu O/N   si N : NE PAS saisir 90 % ou 100 %
Ancienneté requise par le texte : ______   % : ______   carence texte : ______
Subrogation employeur : O/N (paramètre)   → pas de double IJ salarié + maintien intégral
IJSS :
  salaires de référence collectés : O/N
  texte Ameli / BOSS / CSS relu : O/N
  montant : ______ €  OU  « NON CHIFFRÉ — attente / revue »
  INTERDIT : 50 % du brut, SMIC journalier, 220 €/j comme IJ
DSN événement : date ______  mensuelle cohérente (pas présent 31/31) : O/N
Flag clôture : brut honnête / net définitif trompeur interdit (Cas 137)
Visa junior ______  revue ______`),
        h("Modèle — solde de tout compte"),
        code(`STC — janvier 2026
Identité / SIRET / matricule : ______
Date de fin : ______    Motif RH (écrit) : démission / fin CDD / RC / licenciement / essai / autre
Préavis : travaillé / payé / non dû   texte L. 1234-1 + CCN lu : O/N   (pas « 3 mois » mémoire)

A. Salaire de période     prorata ______ / 31 × mensuel = ______ €
B. ICCP                   dixième ______  maintien ______  retenu ______ €
C. Primes / 13e / autres  textes : ______ €
D. AEN jusqu'à restitution  hypo ou BOSS : ______ €
E. Indemnité de rupture   barème lu + revue : ______ €  OU « NON CALCULÉE — pack RH »
F. Reprise trop-perçu     net indû (pas le brut nominal) : − ______ €  mail envoyé O/N
BRUT STC (A+B+C+D+E−F selon natures) : ______ €
Cotisations : moteur si brut connu / même formules 2026
PAS : NOUVEAU NI, pas le PAS du mois plein précédent
NAP / MNS / NI : ______ / ______ / ______

DOCUMENTS
[ ] Bulletin STC          [ ] Certificat de travail (dates exactes)
[ ] Attestation France Travail (process)    [ ] Reçu pour solde (encadré)
[ ] DSN fin (motif = motif RH, date = date réelle)
[ ] Portabilité : contrat collectif LU, pas « 12 mois » de couloir
[ ] Archivage habilitations RGPD
Interdit junior : transaction, clause nouvelle, XML DSN, barème RC souvenir.`),
      ],
      erreurs:
        "IJ 50 %. STC = un virement. Motif DSN démission pour une RC. Portabilité promise.",
      particuliers:
        "Décès, saisie, pension alimentaire : circuits spécifiques, responsable, pas un formulaire bricolé.",
      exercice:
        "Sortie 15/01 à 2 500 €, ICCP best of 1 200 vs 1 080 : lignes A et B du STC.",
      correction:
        "A = 1 209,68 €. B = 1 200 €. Brut partiel 2 409,68 € avant autres éléments. PAS du 3 100 € plein interdit.",
    }),
    pack({
      title: "Checklists entrée, sortie, DSN, clôture et calendrier de paie",
      description: "Les quatre checklists de cycle et un calendrier type janvier.",
      minutes: 24,
      objectifs:
        "Vous suivez un cycle mensuel avec des listes cochées, datées, visées, sans SLA qui saute les contrôles.",
      theorie:
        "Le calendrier interne peut être plus serré que l'échéance légale : on respecte le plus contraignant. Paiement, DSN (net-entreprises, à relire chaque année), URSSAF, PAS. Un junior connaît LE calendrier de SON dossier, affiché.\n\nEntrée : DPAE (L. 1221-10) avant embauche, dossier, organismes, premier prorata. Sortie : STC (leçon précédente). DSN : données sources, revue, dépôt délégué, CRM. Clôture : fiches A/B, ancres, files d'anomalies, SEPA, journal, archivage.\n\nJanvier : PMSS 4 005, SMIC 12,02, souvent 13e mois N-1, réguls. On ne reconduit pas décembre.",
      methode:
        "Trois listes en début de mois : événements connus, variables à relancer, contrôles post-calcul. Journal d'incidents.",
      extra: [
        h("Checklists et calendrier"),
        code(`CHECKLIST ENTRÉE
[ ] Contrat / avenant  [ ] Classification RH (pas d'APEC improvisée)
[ ] DPAE faite AVANT embauche (L. 1221-10) — pas d'antidatage
[ ] NIR, identité, RIB  [ ] Temps de travail  [ ] Mutuelle (contrat / dispense pièces)
[ ] Date d'entrée exacte  [ ] Prorata ______ / 31
[ ] Premier bulletin mentions R. 3243-1  [ ] DSN entrée selon process

CHECKLIST SORTIE  (complète le modèle STC)
[ ] Motif RH écrit  [ ] Date de fin  [ ] Préavis lu  [ ] Compteur CP
[ ] Trop-perçu ouvert ?  [ ] Documents  [ ] DSN fin  [ ] Revue à deux

CHECKLIST DSN  (logique, pas une maille XML)
[ ] Données = bulletins  [ ] Dates entrée/sortie/arrêt
[ ] CRM lus  [ ] Identités  [ ] PAS taux du mois
[ ] Dépôt : délégation  [ ] Interdit : Notepad / NIR de confort
Source norme : net-entreprises (DSN-NET-ENTREPRISES)

CHECKLIST CLÔTURE
[ ] PMSS 4005 SMIC 12,02  [ ] Effectif / FNAL  [ ] Gel respecté
[ ] Fiches A/B exceptions  [ ] Ancres 6 bruts  [ ] Nets ≤ 0
[ ] T2/CET  [ ] APEC cadres  [ ] AT/MP étiqueté
[ ] SEPA ≠ 0 cosmétique  [ ] Journal 641/421/43x/PAS
[ ] Incidents datés  [ ] Revue N+1 sorties et DSN

CALENDRIER TYPE — janvier 2026 (adapter au dossier réel)
J+2     Ouvrir le mois, barème 2026, liste entrées/sorties/arrêts
5       Relance variables
12      Relance 2, pièces maladie
18 12h  GEL (exemple interne — le vôtre peut différer)
20-22   Saisie, calcul d'essai, contrôles
24      Clôture interne, SEPA préparé non envoyé, DSN préparée
25      Revue, dépôt DSN par le responsable
28      Paiement, permanence mails
Post    CRM, lettrage, trop-perçus ouverts`),
      ],
      erreurs:
        "Calendrier dans la tête. DSN sans checklist. Clôturer sans gel. DPAE après l'entrée « on rattrapera ».",
      particuliers:
        "Paiement le 25 vs le 28 : le calendrier interne gagne s'il est plus tôt. Nuit de clôture : pause avant les 20 derniers bulletins.",
      exercice:
        "Placez dans le calendrier : DPAE d'une entrée au 20, arrêt reçu le 8, CRM du 6 février.",
      correction:
        "DPAE : avant le 20, idéalement dès connaissance (checklist entrée, pas le 24). Arrêt le 8 : dossier immédiat (J 8), pas le 24. CRM 6 février : post-clôture, lecture obligatoire, pas « on verra en mars ».",
    }),
    pack({
      title: "Journal de paie, rapprochement, variations et réponse à réclamation",
      description: "De l'écriture 641 au mail salarié, en passant par le lettrage.",
      minutes: 26,
      objectifs:
        "Vous produisez un journal pédagogique, un rapprochement, une analyse de variations, et un modèle de réponse à réclamation.",
      theorie:
        "Le journal relie le bulletin à la comptabilité (PCG classe 64, 421, 43x). 641 = bruts, 645 = charges patronales, 421 = nets à payer, 43x = dettes sociales, compte d'impôt pédagogique pour le PAS (souvent 4421 en dossier réel — paramètre interne). Les numéros exacts d'entreprise ne sont pas un barème national.\n\nRapprochement : avis de versement / DSN / 43x. Une ligne d'écart (37,50 € d'AT/MP) se nomme. Variations : N-1, mix d'effectifs, HS, primes, PMSS. Réclamation : structure des Cas 91-95, vouvoiement, sources, trois nets, escalade contentieux.\n\nExemple 2 500 € : 641 2 500 ; 421 1 978,99 ; salarial 521,01 ; 645 1 027,15. Prime +200 € : Δ NAP 158,32 € pas 200 €.",
      methode:
        "Exporter le journal, contrôler l'égalité 421 + salarial + PAS (+ mutuelle s) = 641, rapprocher 645 vs DSN, expliquer les 5 plus grosses variations, traiter la file mails avec le modèle.",
      extra: [
        h("Modèles comptables et mail"),
        code(`JOURNAL DE PAIE PÉDAGOGIQUE — janvier 2026 — Atelier (extrait)
Compte    Libellé                         Débit        Crédit
641       Rémunérations brutes            [somme bruts]
645       Charges sociales patronales     [somme pat]
421       Personnel — nets à payer                     [somme NAP]
43x       Org. sociaux — part salariale                [somme sal]
43x       Org. sociaux — part patronale                [somme pat]
4421*     PAS (compte interne type)                    [somme PAS]
421/467   Mutuelle salariale si distincte              [20 € × n]
(* 4421 = exemple de paramétrage, pas une norme PCG unique)

Égalité de contrôle (mutuelle 0) : NAP + salarial + PAS = bruts
Cas 135 : 5 672,65 + 1 547,00 + 203,38 = 7 423,03

RAPPROCHEMENT URSSAF / RETRAITE / MUTUELLE
Nature          DSN / bordereau     Comptabilité 43x     Écart     Cause
Maladie p 13 %  ...                 ...                  ...
AF 5,25 %       ...
AT/MP hypo      ...                 ...                  37,50 ?   taux Carsat vs 1,50 %
Arrco           ...
FNAL            ...                 ...                  seuil 50 ?
PAS             DSN fiscale         4421*                ...

VARIATIONS vs N-1 (top 5)
Matricule | Δ brut | Cause (HS, entrée, prime, CP, arrêt) | Δ NAP | OK ?

MODÈLE RÉPONSE RÉCLAMATION (vouvoiement)
Objet : Bulletin janvier 2026 — [Nom] — éléments de réponse
Madame, Monsieur,
Nous avons bien reçu votre message du ______. Période contrôlée : janvier 2026.
1) Brut : ______ € (contrat / prorata / HS validées / prime qualifiée).
2) Ligne concernée : ______  assiette ______  taux ______  source (URSSAF / Agirc-Arrco / BOSS / CRM PAS).
3) Net imposable ______ € ; montant net social ______ € ; net à payer ______ €.
4) Si écart fondé : régularisation proposée ______, calendrier ______.
5) Si écart non fondé : explication ci-dessus ; votre responsable paie reste votre contact de recours interne.
Nous ne communiquons pas le taux PAS d'un tiers ni un bulletin d'un collègue.
Cordialement, [service paie]
Pièce : votre bulletin. Copie : responsable si procédure. Pas d'open space.`),
      ],
      erreurs:
        "641 = NAP. Lisser 0,01 € sur la CSG. Mail de 3 lignes « c'est le logiciel ». Copie à tout le CSE d'un net individuel.",
      particuliers:
        "Trésorerie : date de valeur SEPA vs 421. Un virement le 28 lettré le 2 février n'est pas une erreur de paie par principe.",
      exercice:
        "Écrivez l'égalité de Paul seul (3 100 € PAS 8 %).",
      correction:
        "NAP 2 250,57 + salarial 646,05 + PAS 203,38 = 3 100,00. MNS 2 453,95 = 2 250,57 + 203,38.",
    }),
    pack({
      title: "Glossaire opérationnel et guide de recherches juridiques",
      description: "Les mots justes et la méthode pour trouver le texte, sans folklore.",
      minutes: 24,
      objectifs:
        "Vous employez les termes de paie sans les confondre, et vous savez où chercher (Légifrance, BOSS, URSSAF, net-entreprises, Agirc-Arrco) en datant la règle.",
      theorie:
        "Le jargon vide (« on socialise », « on déduit le 22 % ») cache des erreurs. Le glossaire ci-dessous est opérationnel : chaque entrée dit à quoi ça sert en bulletin ou en DSN. Il ne remplace pas le Code.\n\nLa recherche juridique du junior : (1) qualifier obligation / paramètre annuel / CCN / hypo / politique interne ; (2) ouvrir la source listée dans legal-sources.json ; (3) vérifier la date d'entrée en vigueur (janvier 2026 n'est pas juin 2026) ; (4) ne pas s'arrêter à un titre de blog ; (5) si le texte est muet ou contradictoire, documenter et escalader. On ne crée pas de jurisprudence de couloir.\n\nSources du pack : URSSAF (PMSS, SMIC, taux privé, RGDU), arrêté 22/12/2025, MSA barème (vieillesse, CSG), Agirc-Arrco, BOSS bulletin et MNS, Légifrance (Code du travail, CSS L. 242-1), net-entreprises DSN, DGFiP PAS, CNIL, ANC/PCG. Vérifié 14/10/2026 dans legal-sources.json.",
      methode:
        "Avant toute règle nouvelle : chercher, dater, classer, citer. Interdiction du « c'est comme chez mon ancien employeur ».",
      extra: [
        h("Glossaire (extrait opérationnel)"),
        code(`GLOSSAIRE PAIE — usage junior (janvier 2026)
Assiette : base × taux. Pas le net.
AT/MP : taux Carsat, ICI 1,50 % hypo pédagogique.
APEC : cotisation cadres, 0,024 % / 0,036 %, limite 4 PASS.
Best of CP : max(dixième, maintien) — L. 3141-24.
Brut : avant cotisations salariales.
CET : 0,14/0,21 % si rémunération > PMSS.
CRM : compte-rendu métier DSN, à lire.
CSG/CRDS : 9,7 % au total (6,8+2,4+0,5) sur 98,25 % ≤ 4 PASS.
DSN : canal déclaratif, pas un export anodin.
Effectif FNAL : <50 → 0,10 % plaf. ; ≥50 → 0,50 % brut.
Forfait jours : pas des HS 25 % au réflexe.
IJSS : indemnités journalières — MÉTHODE, pas un % du cours.
MNS : net social (BOSS), ≠ toujours NAP.
NAP : virement (après PAS, mutuelle s).
NI : net imposable, assiette PAS.
PAS : impôt, taux CRM, confidentialité.
PMSS : 4 005 € en 2026.
Prorata calendaire pédagogique : × j / jours du mois.
RGDU : allègement 2026, seulement si le cas le demande.
SMIC : 12,02 €/h janv.–mai 2026.
STC : solde de tout compte, un dossier.
Subrogation : IJ versées à l'employeur.
T1 / T2 : tranches Arrco, T2 n'est pas « être cadre ».
Trop-perçu : indû, pas un acompte.
Variables : HS, primes, absences, AEN — avant le gel.`),
        h("Guide de recherches juridiques"),
        code(`GUIDE RECHERCHE — avant d'appliquer une règle à un dossier réel
1. Question en une phrase (« Quel PMSS pour janvier 2026 ? »).
2. Nature : obligation légale / paramètre annuel / doctrine BOSS /
   CCN / paramètre entreprise / hypothèse pédagogique / bonne pratique.
3. Source primaire :
   - Taux/plafonds : URSSAF, rates-2026.json déjà recoupé au 14/10/2026
   - Mentions bulletin, MNS : BOSS + R. 3243-1
   - Temps, CP, HS, DPAE, rupture : Légifrance Code du travail
   - Assiette : CSS L. 242-1 + BOSS
   - DSN : net-entreprises
   - PAS : DGFiP / Service-Public
   - Données : CNIL
   - Retraite complémentaire : Agirc-Arrco
4. Date d'entrée en vigueur. Janvier ≠ juin (SMIC 12,31 €).
5. Recouper deux sources institutionnelles si le montant est nouveau.
6. CCN : ouvrir l'IDCC, ne pas citer un minimum de mémoire.
7. Si silence / contradiction : note d'incident + responsable. PAS d'invention.
8. Tracer la source sur le calcul (période, URL ou identifiant legal-sources).
INTERDIT : blog, forum, « GPT a dit », taux de 2024, capture d'écran éditeur comme preuve de droit.`),
      ],
      erreurs:
        "Confondre MNS et NAP. Chercher un taux sur un forum. Appliquer une CCN non ouverte. Inventer un délai DSN.",
      particuliers:
        "Veille : s'abonner aux sources institutionnelles, pas à dix newsletters marketing paie. Module 28 du parcours (veille) complète ce guide.",
      exercice:
        "Classez : (a) 4 005 € (b) 1,50 % AT/MP (c) 25 % HS supplétif (d) gel le 18 (e) mutuelle 20 €.",
      correction:
        "(a) paramètre annuel. (b) hypothèse pédagogique. (c) obligation légale supplétive L. 3121-36. (d) politique interne. (e) hypothèse de contrat collectif.",
    }),
    quizLesson({
      title: "Quiz — Ressources professionnelles",
      description: "Modèles, tableau 2026, contrôles, IJ méthode, journal, sources.",
      passing_score: 70,
      questions: [
        q({
          question: "Sur le bulletin commenté 2 500 €, le net à payer pédagogique est :",
          options: [
            "A. 1 978,99 €",
            "B. 2 050,22 € (c'est le net imposable)",
            "C. 1 443,11 €",
            "D. 2 500 €",
          ],
          correct: 0,
          explanation: "Référence brut_2500. 2 050,22 € est le NI.",
        }),
        q({
          question: "Le tableau de cotisations de cette leçon peut contenir :",
          options: [
            "A. Uniquement les paramètres de rates-2026.json, plus des hypo clairement étiquetées",
            "B. Un AT/MP national 1 % « moyenne France »",
            "C. Les minima Syntec de mémoire",
            "D. Un barème PAS recopié au hasard",
          ],
          correct: 0,
          explanation: "CONTENT_SPEC : jamais inventer un taux. AT/MP 1,50 % reste une hypo.",
        }),
        q({
          question: "Le contrôle net se fait :",
          options: [
            "A. Après le contrôle du brut et des événements du mois",
            "B. En premier, « si le net est joli c'est bon »",
            "C. Uniquement sur le MNS",
            "D. En calant 1 443,11 €",
          ],
          correct: 0,
          explanation: "Fiches A puis B. Le net joli cache des HS non validées.",
        }),
        q({
          question: "Le modèle IJSS de ce module :",
          options: [
            "A. Impose une méthode et interdit un montant inventé (pas de 50 % magique)",
            "B. Fixe l'IJ à 220 € par jour",
            "C. Fixe l'IJ à 50 % du brut",
            "D. Dit de ne jamais déclarer l'arrêt en DSN",
          ],
          correct: 0,
          explanation: "220 € est le plafond journalier SS, pas une IJ. Cas 51-55.",
        }),
        q({
          question: "Égalité pédagogique du journal (mutuelle 0) :",
          options: [
            "A. NAP + cotisations salariales + PAS = brut",
            "B. 641 = NAP",
            "C. PAS en 645",
            "D. 421 = brut",
          ],
          correct: 0,
          explanation: "Cas 135 et 104. 641 = brut.",
        }),
        q({
          question: "Une CCN plus favorable sur les HS :",
          options: [
            "A. Se lit dans le texte IDCC ; sans lecture, on reste au légal supplétif ou on escalade",
            "B. S'invente à 100 % « comme partout »",
            "C. Est forcément moins que 25 %",
            "D. Transforme le forfait jours en 151,67 h",
          ],
          correct: 0,
          explanation: "Guide de recherches + Cas 18 et 127.",
        }),
        q({
          question: "Le gel des variables dans le calendrier type :",
          options: [
            "A. Est une politique interne ; après, exception validée par le responsable",
            "B. Est une obligation du Code du travail au 18 du mois",
            "C. Autorise à inventer les HS manquantes",
            "D. Remplace la DSN",
          ],
          correct: 0,
          explanation: "Le 18/12h est un exemple interne, pas une loi.",
        }),
        q({
          question: "Dans une réponse à réclamation, vous ne joignez pas :",
          options: [
            "A. Le bulletin d'un collègue « pour comparer »",
            "B. Les trois nets du salarié demandeur",
            "C. La source URSSAF de la ligne",
            "D. La proposition de régularisation si l'écart est fondé",
          ],
          correct: 0,
          explanation: "RGPD et confidentialité. Cas 29, 92.",
        }),
        q({
          question: "Le SMIC horaire à reporter sur la fiche brut en janvier 2026 est :",
          options: [
            "A. 12,02 € (jusqu'au 31/05/2026)",
            "B. 12,31 €",
            "C. 11,90 € si TPE",
            "D. Inutile à temps partiel",
          ],
          correct: 0,
          explanation: "12,31 € au 01/06/2026. Le SMIC se contrôle aussi à temps partiel.",
        }),
        q({
          question: "Si legal-sources.json et rates-2026.json sont silencieux sur un chiffre :",
          options: [
            "A. On le cherche dans une source institutionnelle datée, ou on l'étiquette hypo, ou on escalade — on ne l'invente pas",
            "B. On prend le taux du précédent employeur",
            "C. On demande à un forum",
            "D. On met 0 et on clôture",
          ],
          correct: 0,
          explanation: "Guide de recherches. Mettre 0 peut être tout aussi faux qu'inventer.",
        }),
      ],
    }),
  ],
};
