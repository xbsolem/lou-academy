import { pack, lesson, quizLesson, q, h, t, note, code } from "../lib.mjs";

export default {
  position: 29,
  title: "Emploi, entretiens et négociation salariale",
  description:
    "Préparer un entretien de gestionnaire de paie junior : attentes, 100 questions techniques, négociation autour de 36 000 € sans garantie, lecture d’offre.",
  lessons: [
    pack({
      title: "Attentes des recruteurs, compétences, autonomie et portefeuille",
      description:
        "Savoir ce qu’un premier poste achète vraiment : fiabilité, calendrier, limites, preuves.",
      minutes: 22,
      objectifs:
        "Vous traduisez les offres en missions juniors, vous savez ce qu’on teste, vous préparez un portefeuille de preuves, et vous ne promettez ni 36 000 € ni le statut cadre.",
      theorie:
        "Un recruteur de gestionnaire de paie junior n’achète pas un titre. Il achète la capacité à produire des bulletins justifiables, à tenir un calendrier, à ne pas divulguer, à dire « je vérifie » plutôt que d’inventer un taux. Les intitulés varient (gestionnaire de paie, chargé de paie junior, collaborateur paie cabinet, gestionnaire paie et administration du personnel, CSP). Le fond testé est le même : lire un bulletin, citer un paramètre 2026 avec sa source (PMSS 4 005 €, arrêté du 22 décembre 2025), distinguer HS et heures complémentaires, expliquer un net, connaître la DSN comme canal, savoir qui vise une DSN, un paramètre, une rupture.\n\nL’autonomie junior, c’est : saisie selon pièces, contrôles de premier niveau, relances, explications factuelles, journal d’incidents, préparation de fichiers. Ce n’est pas : paramétrer un organisme, qualifier un expat, inventer une CCN, déposer une DSN complexe seul, accorder un cadre, abandonner un trop-perçu. En entretien, afficher cette frontière est une preuve de maturité, pas de timidité.\n\nLe portefeuille de preuves, ce n’est pas « j’ai fait 120 bulletins » sans qualité. C’est : cas datés (entrée, HS légales supplétives, contrôle SMIC 12,02 € en janvier 2026), checklists, exemples d’écrits (relance manager, explication de bulletin), limites explicitement tenues. Les logiciels se présentent au niveau fonctionnel (cycle, variables, DSN, contrôles), jamais comme une certification Sage, Silae, Cegid, ADP, SAP, Workday, PayFit ou Nibelis : ce parcours n’en délivre aucune. Le simulateur pédagogique LOU n’est pas un clone commercial : dites-le si on vous interroge.\n\nPriorités et délais : on juge un junior à ce qu’il clôture dans les temps sans cacher une erreur. En 30 / 60 / 90 jours, la carte des acteurs, les outils, un portefeuille borné, les exceptions visées. Un candidat qui promet d’être « autonome sur toutes les CCN dès J1 » perd en crédibilité. Un candidat qui décrit son calendrier de clôture, son gel, ses contrôles PMSS/SMIC, gagne.\n\nRémunération : 36 000 € brut annuels est un objectif de marché fréquent sur certaines offres confirmées ou tendues, pas un effet automatique de la formation, pas un SMIC, pas un droit au statut cadre. Vous apprendrez à analyser, pas à garantir.",
      methode:
        "Avant l’entretien : extraire de l’offre le volume, les CCN, le logiciel, la part d’administration du personnel, qui valide. Préparer 5 preuves (cas, contrôle, écrit, limite, veille). Préparer 5 questions (calendrier, revue, DSN, formation interne, variables). Ne pas placer le salaire en première phrase.",
      noteText:
        "Cette formation n’est ni RNCP, ni diplôme d’État, ni certification éditeur. En entretien, parlez de savoir-faire sourcés. Ne promettez ni 36 k€ ni le cadre. Ne divulguez aucun bulletin réel d’un ancien employeur : utilisez des cas fictifs ou anonymisés selon consigne.",
      exemple:
        "Offre « 32-38 k€, 2 ans d’expérience, paramétrage, 5 CCN ». Ce n’est pas un premier poste. Offre « collaborateur junior, cabinet, formation interne, revue senior, 26-32 k€ ». C’est un vrai junior. Viser uniquement 36 k€ sans stage expose à des refus ; viser les compétences du 36 k€, puis négocier selon preuves, est professionnel.",
      extra: [
        code(`PREUVES D'ENTRETIEN (portefeuille, pas un CV décoratif)

1. Contrôle janvier 2026 : PMSS 4005 (arrêté 22/12/2025), SMIC 12,02 €/h
2. Cas : entrée prorata / HS supplétives 25-50 % à défaut d'accord / temps partiel
3. Écrit : relance gel, explication MNS ≠ net versé, refus canal non sécurisé
4. Limite : saisie, expat, gratification stage, CCN non lue = escalade
5. Veille : journal source URL + logiciel comparé
6. Process : gel, checklist, journal d'incidents
Logiciels : niveau cycle / données / DSN — pas « je maîtrise Sage »`),
      ],
      erreurs:
        "Mentir sur un logiciel. Promettre la DSN solo. Citer un bulletin réel nominatif. Garantir 36 k€. Dire « expert paie ». Ignorer le PAS et le MNS. Se présenter comme responsable paie.",
      particuliers:
        "Reconversion : valoriser la rigueur d’un métier antérieur. Alternance : demander un calendrier réel. Cabinet vs CSP vs interne : adapter les exemples de volume et de CCN, pas le droit.",
      exercice:
        "Rédigez en douze lignes votre périmètre junior : seul / sous revue / pas encore. Sans salaire.",
      correction:
        "Exemple : « Seul : saisie sur pièces, contrôles brut/net/plafonds janvier 2026, relances, explication de bulletin, checklist. Sous revue : arrêt avec subrogation, solde, anomalie DSN, rappel, première saisie sur salaire. Pas encore : paramétrage organisme, expat, choix d’exonération, rupture contentieuse. » Un recruteur croit ce texte.",
    }),
    lesson({
      title: "Questions d’entretien 1 à 20 — Cotisations, assiettes, plafonds",
      description:
        "Réponses sourcées janvier 2026 : PMSS, SMIC, URSSAF, Agirc-Arrco, CSG, RGDU.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous répondez à vingt questions techniques de cotisations avec période, source et limite. Chaque réponse est un raisonnement, pas un chiffre isolé."),
        h("Ce qu'il faut comprendre"),
        t("Les tests d’entretien de paie commencent souvent par un plafond, un SMIC, un taux maladie. Un chiffre juste sans date est faible. Un chiffre faux avec de l’assurance est éliminatoire. Les taux ci-dessous sont ceux de rates-2026.json / legal-sources.json (vérifiés 14/10/2026). AT/MP, mutuelle, PAS ne sont pas des taux nationaux."),
        h("Méthode opérationnelle"),
        t("À l’oral : (1) reformuler la période, (2) donner le paramètre, (3) citer la source, (4) dire ce que vous iriez revérifier, (5) poser la limite junior si la question dérape vers le paramétrage."),
        note("En entretien, « je vérifie sur URSSAF le jour J » est plus crédible que « je connais tous les taux par cœur jusqu’en 2029 »."),
        code(`Q1. Quel est le PMSS en janvier 2026 ?
R1. 4 005 € par mois. C’est un paramètre annuel issu de l’arrêté du 22 décembre 2025,
repris par URSSAF (plafonds de la Sécurité sociale). Il s’applique aux cotisations
dues au titre des périodes d’activité à compter du 01/01/2026. Le PASS associé est
48 060 €, le plafond journalier 220 €, l’horaire 30 €. Je ne recopie pas un PMSS
N-1. En poste, je compare ce chiffre au paramétrage du logiciel dès l’ouverture
de janvier ; un écart déclenche un ticket, pas une clôture « pour voir ».

Q2. Quelle est la différence entre PMSS et PASS ?
R2. Le PMSS est le plafond mensuel (4 005 € en 2026). Le PASS est le plafond annuel
(48 060 €). Les cotisations plafonnées (vieillesse plafonnée, tranche 1 retraite
complémentaire, FNAL plafonné sous 50 salariés, etc.) s’appuient sur ces plafonds
selon leurs règles. Confondre les deux fait exploser un T2 ou un prorata. En
entretien, je précise la période et je ne convertis pas « au feeling » un annuel
en mensuel hors règle de prorata d’entrée/sortie, qui se relit.

Q3. Quel SMIC au 15 janvier 2026 ?
R3. 12,02 € de l’heure, soit 1 823,03 € mensuels sur 151,67 h, du 01/01/2026 au
31/05/2026 (URSSAF / Service-Public). Un net « indicatif » de communication n’est
pas une formule de bulletin. Je contrôle le taux horaire, surtout à temps partiel :
un mensuel qui « ressemble » à un SMIC plein peut être sous 12,02 €/h. Je ne
garantis pas un net.

Q4. Quel SMIC au 15 juin 2026 ?
R4. 12,31 € de l’heure (revalorisation au 01/06/2026, URSSAF). L’année 2026 a donc
deux SMIC horaires selon la date du fait. Appliquer 12,02 € en juin est une erreur
de veille. En entretien, cette question teste si je date, pas si je récite un seul
chiffre « SMIC 2026 ».

Q5. Taux maladie salarial régime général, salarié domicilié fiscalement en France, 2026 ?
R5. 0 %. Source : barème URSSAF / recoupement MSA 2026 du fichier de taux. Ce n’est
pas « plus de maladie ». La part patronale existe (13 % taux plein). Si le salarié
n’est pas domicilié fiscalement en France, le fichier prévoit 5,50 % salarial : je
ne le présume pas d’après la nationalité, je m’appuie sur le paramètre du dossier.
Je n’invente pas un 0,75 % d’une année ancienne.

Q6. Taux maladie patronal « plein » au 01/01/2026 ?
R6. 13 % (URSSAF privé). En 2026, les taux réduits maladie/AF de droit commun
fusionnent dans la RGDU : je n’applique la RGDU que si le cas le demande ; sinon
je dis les taux pleins et je le dis. 13 % n’est pas le taux AT/MP. Je ne le
modifie pas pour « arranger » un coût.

Q7. Allocations familiales patronales taux plein 2026 ?
R7. 5,25 % (URSSAF privé 01/01/2026). Même logique RGDU : pas d’application
automatique d’un taux réduit historique. CSA 0,30 % est distinct. En entretien,
je sépare AF, maladie, CSA, FNAL : un recruteur détecte le candidat qui mélange
tout en « charges 40 % ».

Q8. Qu’est-ce que la RGDU 2026 et quand l’appliquez-vous ?
R8. Réduction générale dégressive unique : fusion de l’ex-RGD et de taux réduits
AM/AF de droit commun (fiche URSSAF). Coefficients max 0,3981 (<50) ou 0,4021
(≥50), Smic de référence valeur au 01/01/2026, AT/MP dans l’allègement dans la
limite de 0,49 %. En formation et en junior, je ne l’applique que si le dossier
le demande. Je ne la calcule pas au crayon le jour d’un entretien sans énoncer
les hypothèses. Paramétrage : responsable, pas un junior isolé.

Q9. Assiette CSG/CRDS 2026, principe ?
R9. CSG 6,80 % déductible + 2,40 % non déductible, CRDS 0,50 %, sur 98,25 % de
l’assiette dans la limite de 4 PASS, puis 100 % au-delà (fichier de taux). 4 PASS
2026 = 4 × 48 060 €. Je ne confonds pas cette assiette avec le brut, ni avec le
net imposable du PAS. Un abattement 1,75 % mal plafonné est une erreur classique.

Q10. Vieillesse salariale 2026 ?
R10. 6,90 % plafonnée (dans la limite du PMSS) + 0,40 % déplafonnée sur la
totalité. Source URSSAF / MSA barème. Je ne fusionne pas les deux en 7,30 % sur
tout. Au-dessus du PMSS, seule la part déplafonnée continue sur l’excédent, plus
les autres cotisations concernées.

Q11. Vieillesse patronale 2026 ?
R11. 8,55 % plafonnée + 2,11 % déplafonnée (URSSAF privé). Même distinction
plafond. Un recruteur peut demander un mini-calcul sur 2 000 € et sur 5 000 €
pour voir si je plafonne. Sur 5 000 € en janvier 2026, la part plafonnée s’arrête
à 4 005 €.

Q12. Chômage patronal 2026 ?
R12. 4,00 % dans la limite de 4 PASS (192 240 € en 2026). Salarial chômage 0 %
dans le barème du fichier. AGS distincte (0,25 %, 0,03 % ETT selon fiche URSSAF).
Je ne dis pas « pôle emploi 4 % salarial ». Je ne confonds pas avec la CSG.

Q13. FNAL : comment le reliez-vous à l’effectif ?
R13. 0,10 % plafonné si < 50 salariés ; 0,50 % si ≥ 50 (URSSAF). L’effectif n’est
pas un sentiment : règle d’effectif du dossier, souvent sensible au seuil. Un
junior n’invente pas un basculement 49→50 le 24 du mois : il alerte. En entretien,
je montre que je sais que le taux dépend d’un paramètre d’entreprise (effectif),
pas d’un unique taux national.

Q14. Tranche 1 Agirc-Arrco 2026 ?
R14. 7,87 % au total, 4,72 % patronal / 3,15 % salarial, sur la rémunération dans
la limite du PMSS 4 005 € (agirc-arrco.fr, fichier de taux). CEG T1 en plus
(2,15 % soit 1,29 / 0,86). Je ne dis pas « 6 % comme avant ». T1 n’est pas
réservée aux cadres : le régime est unifié, le statut cadre joue surtout pour
l’APEC.

Q15. Tranche 2 ?
R15. Entre le PMSS et 8 PASS, taux 21,59 % (12,95 % p / 8,64 % s), CEG T2 2,70 %
(1,62 / 1,08). Un salaire de 2 400 € en janvier 2026 n’a pas de T2. Un salaire
de 5 000 € a du T2 sur 5 000 − 4 005 = 995 €. Je pose le calcul, je ne récite
pas « tout le monde a de la T2 ».

Q16. CET : quand ?
R16. Contribution d’équilibre technique 0,35 % (0,21 p / 0,14 s) sur T1+T2
seulement si la rémunération dépasse T1 (PMSS). En dessous du PMSS, pas de CET
selon le fichier. L’appliquer à un SMIC est une erreur de paramétrage que le
contrôle junior doit voir.

Q17. APEC ?
R17. Uniquement si statut cadre établi. Taux 2026 du fichier : 0,024 % salarial,
0,036 % patronal. Je n’applique pas l’APEC à un non-cadre « pour faire propre ».
Le statut cadre vient du contrat / CCN, pas d’un souhait d’entretien, pas d’un
objectif 36 k€.

Q18. AT/MP : que répondez-vous en entretien ?
R18. Ce n’est pas un taux national unique. Il est notifié par la Carsat selon
l’établissement. Dans les exercices, tout taux AT est une hypothèse de dossier.
Un junior ne le recopie pas du voisin, ne l’optimise pas en changeant de SIRET
fictif. Si l’on me donne 1,50 % dans un cas, je le labelle hypothèse.

Q19. Dialogue social 2026 ?
R19. 0,016 % patronal (URSSAF privé). C’est un petit taux, souvent oublié dans
un « total charges » approximatif. L’oublier sur 200 salariés se voit en
lettrage. Je le cite comme paramètre annuel, pas comme une ligne négociable
avec le salarié.

Q20. Pourquoi dater chaque taux en entretien ?
R20. Parce qu’un taux hors période est faux. Janvier 2026 n’est pas mai 2025 ni
juin 2026 (SMIC). Une réforme 2027 (MNS / mutuelle patronale) ne s’anticipe pas
en janvier 2026. Le recruteur teste la discipline de source : URSSAF, BOSS,
Légifrance, fichier de l’entreprise, pas un souvenir.`),
        h("Exemple professionnel"),
        t("Test écrit de cabinet : « calculez la vieillesse salariale sur 5 000 € en janvier 2026 ». Le candidat qui fait 7,30 % × 5 000 échoue. Celui qui plafonne 6,90 % à 4 005 € et applique 0,40 % à 5 000 € montre le métier."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("Réciter 2025. Fusionner salarial et patronal. Dire « 45 % de charges » sans détail. Oublier que T1 = PMSS. Garantir un net à partir du brut."),
        h("Situations particulières"),
        t("Non-résident fiscal : 5,50 % maladie salarial si le cas est établi. Multi-contrats : plafond, sous revue. RGDU : seulement si demandé."),
        h("Mise en pratique"),
        t("Entraînez-vous à voix haute sur Q1, Q3, Q14, Q18. Chronomètre : 90 secondes par réponse, avec source."),
        h("Correction détaillée"),
        t("Réponses attendues : 4005 arrêté 22/12/2025 ; SMIC 12,02 ; T1 7,87 % sur 4005 ; AT = notification, pas un national. Toute réponse sans période est incomplète."),
      ],
    }),
    lesson({
      title: "Questions d’entretien 21 à 40 — Absences, CP, temps de travail",
      description:
        "Congés, maladie, HS, temps partiel, forfait : qualifier avant de calculer.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous distinguez les natures d’absence et de temps, vous citez le légal, vous renvoyez à la CCN sans l’inventer."),
        h("Ce qu'il faut comprendre"),
        t("Beaucoup d’entretiens collent sur les HS vs heures complémentaires, sur le forfait jours, sur l’indemnité de CP. La bonne réponse nomme l’article ou le principe, puis dit « je lis la CCN du dossier »."),
        h("Méthode opérationnelle"),
        t("Qualifier la nature → texte (loi / CCN / contrat) → pièce → rubrique. Si la nature est floue, dire que l’on ne saisit pas."),
        code(`Q21. Acquisition légale des congés payés ?
R21. 2,5 jours ouvrables par mois de travail effectif, sans que la durée totale
excède 30 jours ouvrables (L. 3141-3). Une CCN peut être plus favorable : je la
lis, je n’invente pas 2,5 jours ouvrés « comme tout le monde ». En entretien, je
précise ouvrable vs ouvré si on me le demande, et j’avoue que le décompte du
dossier se lit dans le paramètre, pas dans un réflexe unique.

Q22. Indemnité de CP : quelle comparaison ?
R22. L. 3141-24 : l’indemnité ne peut être inférieure au dixième de la
rémunération brute de la période de référence, ni au salaire qui aurait été
perçu (maintien). On compare les deux méthodes, on retient la plus favorable.
Je ne verse pas « 10 % de tout » au crayon sans période de référence. Un junior
applique la méthode du dossier visé, il ne recode pas le moteur le 24.

Q23. Un manager dit « mets 2 CP, il n’était pas là ». Que répondez-vous ?
R23. Ce n’est pas une qualification. Sans pose validée et sans compteur, je ne
saisis pas de CP. J’oriente vers l’outil, la pièce, RH. Imputer des CP pour
couvrir une absence injustifiée fausse le compteur et le droit. En entretien,
cette réponse montre que je ne « rends pas service » contre le dossier.

Q24. Arrêt maladie : limite junior ?
R24. Je collecte dates et pièce, je saisis le code absence, j’alerte pour IJ et
maintien. Le % de maintien se lit dans la CCN / la loi, je ne l’invente pas. La
subrogation est une consigne de dossier. Je n’écris pas de diagnostic dans le
logiciel. Je n’invente pas un délai IJ Ameli de mémoire.

Q25. Subrogation, en une définition opérationnelle ?
R25. L’employeur verse tout ou partie du salaire à la place des IJ, puis se fait
rembourser par l’assurance maladie, selon accord et process. Ce n’est pas
automatique. En junior, j’applique le paramètre visé, je rapproche les virements
IJ, je n’invente pas un montant IJ. Si le paramètre est absent, j’escalade.

Q26. Durée légale du travail ?
R26. 35 heures par semaine (L. 3121-27). Une durée conventionnelle inférieure
existe parfois ; elle ne se confond pas avec le déclenchement des HS légales,
qui se lit au regard de la durée légale ou équivalente (L. 3121-28). Je ne dis
pas « tout le monde est à 37 h donc les HS commencent à 37 h » sans texte.

Q27. Heures supplémentaires légales, majorations à défaut d’accord ?
R27. L. 3121-36 : 25 % pour les 8 premières, 50 % au-delà, dans le cadre
hebdomadaire visé par le texte, à défaut de convention ou accord. Je vérifie
toujours CCN et accord avant d’appliquer ce supplétif. « 25 % partout » est une
faute. Les heures d’un temps partiel ne sont pas ces HS.

Q28. Heures complémentaires ?
R28. Heures d’un temps partiel au-delà de la durée contractuelle, dans les
limites du contrat et de la loi (L. 3123-9 et s.), avec majorations propres. Ce
ne sont pas des HS 25/50 du 35 h. Un dépassement récurrent proche du temps plein
s’alerte (requalification possible), je ne la décide pas.

Q29. Contrôle SMIC d’un temps partiel ?
R29. Taux horaire ≥ 12,02 € en janvier 2026 (jusqu’au 31/05), pas le SMIC mensuel
1 823,03 € collé tel quel à un 50 %. C’est un piège d’entretien fréquent. Je
divise le brut de base par les heures payées selon le contrat.

Q30. Absence d’un forfait jours : 7 heures ?
R30. Non. Le forfait se décompte en jours. Convertir 1 jour = 7 h d’atelier casse
le régime. Les HS 25/50 ne se déversent pas comme pour un 151,67 h. Je lis le
contrat (jours, accord). Je ne crée pas un forfait pour éviter de payer des HS.

Q31. Peut-on « passer forfait » le mois des HS pour ne pas les payer ?
R31. Non. Le forfait exige conditions légales, accord, avenant, date d’effet. Un
mail du 24 n’y suffit pas. En entretien, refuser cette substitution montre la
limite et l’éthique professionnelle.

Q32. Statut cadre et HS ?
R32. Cadre n’égale pas automatiquement forfait jours, ni absence de HS. Un cadre
horaire peut avoir des HS. L’APEC suit le statut cadre, pas le forfait. Je lis
le contrat. Je ne promets pas le cadre en négociation salariale.

Q33. Jour férié chômé payé : réflexe unique ?
R33. Le 1er mai a un régime propre ; les autres fériés dépendent de la loi, de
la CCN, de l’accord, du planning. Je ne paie pas ni ne retiens « comme à
l’ancienne boîte ». En entretien, dire « je vérifie le régime du dossier » est
la bonne réponse, pas un tableau appris faux.

Q34. RTT ?
R34. Dispositif d’aménagement du temps, accord / CCN / entreprise, pas un droit
légal universel de 10 jours. J’applique les compteurs du dossier. Offrir 2 RTT
par téléphone n’est pas de la paie.

Q35. Entrée en cours de mois ?
R35. Prorata selon la règle du dossier (calendaire, ouvrés, heures), contrat,
DPAE (L. 1221-10) vérifiée, mutuelle selon contrat collectif. Je n’invente pas
un mois plein « pour l’accueillir ». Le PMSS et les plafonds se proratisent selon
textes, souvent sous revue si le cas est tordu.

Q36. Solde de tout compte : autonomie ?
R36. Je prépare (préavis selon contrat/CCN/L. 1234-1, CP, éléments dus). Une
indemnité de rupture, une rupture conventionnelle (L. 1237-11 s.), un contentieux :
sous revue, barèmes vérifiés. Je ne signe pas un document de fin si je ne suis
pas habilité. Je ne bricole pas un net de départ pour « que ça se passe bien ».

Q37. IJSS : que savez-vous sans inventer un montant ?
R37. Indemnités journalières de sécurité sociale, calculées par l’assurance
maladie selon ses règles (salaire de référence, délais, plafonds). Je ne récite
pas un montant 2026 hors source. Je relie arrêt, DSN, subrogation, maintien CCN
lu. Ameli pour le circuit, pas pour inventer le chiffre.

Q38. AT / maladie professionnelle vs maladie ?
R38. Nature différente (signalement, IJ, taux AT de l’établissement, visites).
Je ne code pas un AT en CP ou en maladie ordinaire. Le taux AT reste une
notification Carsat. Qualification de l’accident : RH / déclarant, pas un junior
qui « choisit la rubrique la plus simple ».

Q39. Gel des variables et absence tardive ?
R39. Une absence arrivée après gel se traite en régularisation, pas en
clandestinité. Exception : responsable paie. En entretien, le gel montre que je
comprends un cycle, pas seulement des taux.

Q40. Télétravail : une absence ?
R40. Non. C’est un lieu / une organisation, selon accord ou charte. Je ne retiens
pas le salaire. Les titres-restaurant suivent la règle d’entreprise, je ne les
« laisse » pas par sympathie ni ne les coupe sans texte.`),
        h("Exemple professionnel"),
        t("Test : 22 h contractuelles + 10 h. Le candidat qui met 10 HS à 25 % échoue. Heures complémentaires, limites, majorations lues."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("CP pour couvrir un trou. Forfait = 7 h. SMIC mensuel sur un 80 %. Maintien maladie de mémoire CCN."),
        h("Situations particulières"),
        t("Temps partiel thérapeutique, mise à pied, grève, heures de délégation : RH, pas une rubrique générique « absence »."),
        h("Mise en pratique"),
        t("Répondez à Q27, Q28, Q30 en moins de deux minutes chacune, à voix haute."),
        h("Correction détaillée"),
        t("HS supplétives 25/50 si pas d’accord ; complémentaires sur le partiel ; forfait en jours. Trois régimes, trois réponses."),
      ],
    }),
    lesson({
      title: "Questions d’entretien 41 à 60 — DSN, logiciels, CCN, paramétrage",
      description:
        "Canal déclaratif, outils au niveau fonctionnel, convention lue, pas inventée.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous parlez DSN, éditeurs et CCN comme un junior opérationnel : logique, contrôles, limites, zéro fausse certification."),
        h("Ce qu'il faut comprendre"),
        t("On vous testera sur « c’est quoi la DSN » et « vous êtes Silae ? ». La bonne posture : canal, cycle, CRM, revue ; logiciels au niveau fonctionnel ; CCN = texte du dossier."),
        h("Méthode opérationnelle"),
        t("Décrire le flux : variables → calcul → contrôle → paiement → DSN → CRM. Nommer qui dépose. Nommer ce que vous ne paramétrez pas."),
        code(`Q41. Qu’est-ce que la DSN ?
R41. La déclaration sociale nominative, canal déclaratif social de l’employeur
(net-entreprises). Mensuelle, plus signalements événementiels selon les cas. Elle
porte cotisations, PAS, événements, pas « un export Excel ». Un junior apprend
la logique (blocs, contrôles, CRM) sans inventer une norme de rubrique. Source :
net-entreprises, pas un souvenir de stage non relu.

Q42. Qui dépose la DSN ?
R42. Une personne habilitée, souvent le responsable paie, parfois un tiers
déclarant. En junior, je prépare, je contrôle, j’assiste. Je ne dépose pas une
régularisation complexe seul. Dire « je clique et c’est bon » est un signal
négatif en entretien.

Q43. Qu’est-ce qu’un CRM DSN ?
R43. Un compte-rendu métier du dépôt : anomalies, rejets, à instruire. Les
ignorer produit des écarts URSSAF, retraite, PAS. Je les traite avec le
responsable, je ne les classe pas dans un dossier « plus tard ».

Q44. DSN événementielle : exemple ?
R44. Selon les consignes du dossier : arrêts, fins de contrat, etc. Je ne récite
pas une liste de blocs non sourcée. Je dis : je suis le process interne et
net-entreprises, je n’invente pas un signalement pour « aller plus vite ».

Q45. net-entreprises vs URSSAF.fr ?
R45. net-entreprises : déclarer, CRM, docs techniques. URSSAF.fr : taux,
plafonds, fiches employeur, démarches. Je n’ouvre pas l’un pour trouver l’autre.
Légifrance reste le code.

Q46. Comment parlez-vous de Sage, Silae, Cegid, ADP, SAP, Workday, PayFit, Nibelis ?
R46. Au niveau fonctionnel : positionnement (TPE, cabinet, ETI, groupe), données
d’entrée, cycle, contrôles, DSN, limites. Je distingue moteur de paie, SIRH,
suite intégrée. Je ne prétends pas une certification. Ce parcours n’en délivre
pas. Si j’ai pratiqué un outil, je décris des gestes (variables, bulletin,
contrôle), pas « je maîtrise ».

Q47. SIRH vs moteur de paie ?
R47. Le SIRH gère souvent core RH, absences, workflows, dossiers. Le moteur
calcule le bulletin et alimente la DSN. Un SIRH n’est pas un moteur. Un junior
« SIRH » doit quand même comprendre assiettes et contrôles, sinon il clique à
l’aveugle.

Q48. Le simulateur LOU Academy ?
R48. Un moteur pédagogique déterministe, pas un clone commercial. Je le dis
clairement si on me demande « donc vous êtes formé sur Silae ». Les cas 2026
sont sourcés ; AT/MP et mutuelle y sont des hypothèses de dossier.

Q49. Que peut changer une CCN ?
R49. Minima, classifications, majorations HS, maintien maladie, CP extra, 13e
mois, RTT, indemnités plus favorables, etc. La loi reste généralement le
plancher. Rien de cela n’est dans rates-2026.json : je lis le texte, IDCC, version
datée. Je ne transpire pas le dossier A sur le B.

Q50. On vous demande le minimum Syntec 2026. Que dites-vous ?
R50. Je ne l’invente pas. Je dis : je l’ouvrirais dans la CCN / avenant salaires
en vigueur, je le comparerais au SMIC 12,02 €/h en janvier, je ferais viser le
paramètre. Un chiffre de mémoire est une faute. Le recruteur teste l’honnêteté.

Q51. Multi-CCN en cabinet : risque principal ?
R51. La transposition. Cinq dossiers, cinq IDCC. La compétence, c’est la fiche
dossier et l’ouverture du texte, pas la vitesse. Je l’assume en entretien.

Q52. Paramétrage : limite junior ?
R52. Je compare logiciel et sources (PMSS 4005, SMIC, T1, FNAL selon effectif).
Je ne mets pas à jour seul un taux national, une rubrique CCN, un organisme. Écart
= ticket. Recoder le 24 au soir est un anti-pattern.

Q53. Contrôle de paramétrage de janvier 2026, 5 points ?
R53. PMSS 4005 ; SMIC 12,02 ; T1 calée sur 4005 ; maladie patronale 13 % plein
et AF 5,25 % (RGDU seulement si dossier) ; AT/MP = notification pas un national.
Plus : APEC si cadres, FNAL, patch éditeur visé, une rubrique maison testée.

Q54. L’éditeur a déployé le millésime 2026. Est-ce suffisant ?
R54. Non. Options, CCN, rubriques en dur, dossiers cabinet différents. Je teste
des profils (partiel, cadre > PMSS, entrée). Un bandeau « 2026 » n’est pas un
visa.

Q55. DPAE ?
R55. Déclaration préalable à l’embauche, L. 1221-10, avant l’embauche. Je
vérifie la trace dans le dossier. Je ne « mets en paie lundi, DPAE plus tard ».
Ce n’est pas le contrat. Fiche pratique Service-Public (F23107) à relire, je
n’invente pas un délai d’heures de mémoire si je ne l’ai pas sous les yeux :
je dis que je vérifie la fiche.

Q56. PAS et DSN ?
R56. Le taux est transmis via DSN / PASRAU, appliqué sur le net imposable, pas
sur le brut. Confidentialité stricte. Je n’aligne pas deux collègues. Je ne
conseille pas une modulation. DGFiP / impots.gouv pour le salarié.

Q57. Montant net social ?
R57. Mention BOSS : revenu après prélèvements sociaux obligatoires, distinct du
net versé. Modèle provisoire jusqu’au 31/12/2026. Je n’anticipe pas 2027
(mutuelle patronale = projet à revérifier). Piège d’entretien fréquent.

Q58. Mentions du bulletin ?
R58. R. 3243-1 et BOSS bulletin. Remise L. 3243-1, le salarié ne peut y
renoncer. Je ne récite pas 40 mentions par cœur : je cite le texte et le
contrôle du modèle. Coffre vs papier : règle interne + cadre légal, pas Gmail.

Q59. IDCC ?
R59. Identifiant de la convention collective du dossier, à rapprocher du contrat
et du paramètre. Un mauvais IDCC = mauvais minima, mauvais maintien. Je ne le
choisis pas « le plus simple ».

Q60. Cette formation est-elle une certif Silae / un RNCP ?
R60. Non. Attestation LOU Academy de réussite du parcours, distincte d’un
diplôme d’État, d’un titre RNCP, d’une certification éditeur. En entretien, je
parle de compétences, pas d’un titre que je n’ai pas. Mentir ici détruit la
confiance sur tout le reste.`),
        h("Exemple professionnel"),
        t("Recruteur Silae : « vous êtes certifié ? » Réponse : non, je décris le cycle que je connais, j’apprends l’outil interne, je ne confonds pas avec un titre éditeur."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("« Je maîtrise tous les logiciels. » Inventer un minimum CCN. Déposer la DSN dans le discours comme un jeu. Oublier les CRM."),
        h("Situations particulières"),
        t("CSP : process industriel, peu de face-à-face. Cabinet : multi-dossiers. Interne TPE : polyvalence, mêmes limites juridiques."),
        h("Mise en pratique"),
        t("En 3 minutes, expliquez DSN + MNS + limite paramétrage, comme à un recruteur non paie puis à un responsable paie."),
        h("Correction détaillée"),
        t("Non paie : canal mensuel des données sociales, net social ≠ virement, je ne change pas les taux seul. Responsable : CRM, millésime, tests de profils, visa."),
      ],
    }),
    lesson({
      title: "Questions d’entretien 61 à 80 — Comptabilité, erreurs, secret, délais",
      description:
        "Journal de paie, incidents, RGPD, calendrier : ce qui fait tenir un junior en clôture.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous reliez paie et comptabilité sans recoder le PCG, vous traitez une erreur sans la cacher, vous protégez les données, vous priorisez."),
        h("Ce qu'il faut comprendre"),
        t("Les recruteurs internes (ETI, industrie) collent sur le journal et le lettrage. Les cabinets collent sur la confidentialité client. Tous collent sur le calendrier."),
        h("Méthode opérationnelle"),
        t("Décrire 641 / 421 / 43x / PAS comme logique pédagogique, renvoyer au plan de l’entreprise. Pour une erreur : quantifier, informer, viser, régulariser."),
        code(`Q61. Compte 641, en logique pédagogique ?
R61. Charges de personnel (salaires). Le PCG et le paramétrage interne fixent
les sous-comptes exacts (source PCG / ANC, legal-sources). Je ne jure pas d’un
numéro d’un ancien dossier. Je sais que le brut qui part en 641 doit se
rapprocher du journal de paie, pas d’un net.

Q62. Compte 421 ?
R62. Dette envers le personnel (nets à payer, souvent). Un écart 421 / SEPA est
un signal : salarié manquant, trop-perçu, acompte. Je ne « force » pas le
lettrage. Je croise le journal et le fichier bancaire.

Q63. Comptes 43x ?
R63. Dettes sociales (URSSAF, retraite, mutuelle, etc. selon plan). Le lettrage
se fait avec avis de versement et DSN. Un écart de 84 € s’instruit, il ne se
passe pas en 658 par confort. AT/MP, mutuelle : paramètres d’entreprise.

Q64. Le PAS dans les comptes ?
R64. Ce n’est pas une cotisation sociale. Il transite (souvent 4421 selon plan)
vers la DGFiP. Le mélanger à l’URSSAF crée des écarts durables. Confidentialité :
un export comptable trop large reste un risque RGPD.

Q65. Journal de paie vs DSN : peuvent-ils diverger ?
R65. Oui, si régularisation, rejet, salarié hors journal, paramètre organisme.
C’est un contrôle, pas une fatalité. J’explique l’écart, je ne modifie pas un
brut « pour coller ».

Q66. La compta demande de forcer 84,20 €. Que dites-vous ?
R66. Je ne force pas. J’instruis (matricule, organisme, DSN, affiliation). Si
erreur de paie, je corrige selon règle ; si paramètre comptable, la compta
ajuste avec cause. Clôturer un écart non expliqué le reporte.

Q67. Erreur détectée après virement ?
R67. Trop-peu : rappel soumis selon nature, DSN, information. Trop-perçu :
information, modalités visées, pas un prélèvement silencieux, pas un net à zéro
improvisé. Je n’avoue pas une dette non recalculée « pour faire simple ».

Q68. Bulletin envoyé au mauvais destinataire ?
R68. Incident de données : cesser, alerter responsable / DPO selon procédure,
demander suppression, tracer, ne pas rire. Homonymie interne n’annule pas
l’incident. Le montant du net est indifférent.

Q69. Taux PAS d’un collègue demandé par un salarié ?
R69. Refus. Confidentialité fiscale. Canal personnel impots.gouv. L’égalité de
traitement ne s’applique pas à un taux d’impôt personnalisé.

Q70. Manager demande tous les nets de l’équipe sur Gmail perso ?
R70. Refus. Habilitation, finalité, canal. L’urgence d’un rendez-vous n’ouvre
pas le RGPD. RH peut fournir une fiche prévue, pas moi un zip de bulletins.

Q71. Conservation des doubles de bulletins ?
R71. L. 3243-4 : l’employeur conserve un double cinq ans. Les autres durées
(contrats, NIR, CV) : fiche CNIL et textes, je ne les invente pas. « 10 ans
pour tout » n’est pas une méthode. Un salarié ne peut pas tout faire effacer
contre une obligation de conservation.

Q72. Calendrier de paie : que tenez-vous ?
R72. Collecte, gel, calcul, contrôles, validation, paiement, DSN, écritures,
CRM. Le calendrier interne peut être plus serré que l’échéance légale : je tiens
le plus contraignant. Je relis les dates DSN sur net-entreprises, je ne les
récite pas hors source.

Q73. À quoi sert le gel ?
R73. Figurer une date après laquelle on n’intègre plus de variables, sauf
exception du responsable. Sans gel, pas de clôture. Ce n’est pas une sanction
des managers, c’est un process. Les HS du 24 se reportent ou s’exceptent par
écrit.

Q74. Le 12 du mois, quatre faits : arrêt, entrée J+8, trop-perçu ancien, HS
d’un mois clos. Ordre ?
R74. Arrêt (IJ/maintien/DSN selon process), entrée (dossier/DPAE/prorata),
trop-perçu (dossier de régul, pas une retenue improvisée), HS clos (rappel
futur, pas réouverture clandestine). Un junior dit les dates à voix haute.

Q75. Net négatif à la clôture ?
R75. On ne laisse pas partir le SEPA. Causes : saisie, trop-perçu, mutuelle,
absence. Barème de saisie, reste à vivre, visa. Arrondir à zéro pour « que ça
passe » est une faute.

Q76. Cacher une erreur pour ne pas retarder ?
R76. Faute professionnelle. Une correction de 10 minutes devient un trimestre
de réguls. Dire « je ne sais pas, je vérifie » est une compétence. En entretien,
assumer un exemple d’erreur fictive traitée vaut plus qu’une infaillibilité.

Q77. Excel en paie : quel usage junior ?
R77. Contrôle (écarts N-1, plafonds, tris), pas un moteur parallèle de
production, pas un fichier NIR/IBAN/PAS sur un Teams ouvert. RGPD : extraire le
minimum, espace habilité.

Q78. Open space : quelle règle ?
R78. Pas de haut-parleur, pas de bulletin sur imprimante partagée sans ramassage,
écran verrouillé, pas de commentaire santé. La confidentialité se joue aussi à
la machine à café (salaires).

Q79. RIB sur WhatsApp ?
R79. Refus. Canal SIRH / coffre / mail pro. Rapidité ≠ licéité. Un RIB au nom
d’un tiers sans mandat : pas de virement.

Q80. SLA « bulletins le 25 » vs contrôle incomplet ?
R80. Le SLA n’autorise pas à sauter les contrôles. J’alerte tôt si les variables
manquent. Un bulletin à l’heure et faux coûte plus cher qu’un arbitrage
responsable. En CSP, c’est exactement ce que l’on teste.`),
        h("Exemple professionnel"),
        t("Entretien ETI : « le 431 ne letre pas, vous faites quoi ? » Réponse : pas de force, détail organisme, DSN, affiliation, binôme compta."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("Confondre 641 et net. WhatsApp. Cacher. Excel pirate. Promettre le 25 quoi qu’il en coûte."),
        h("Situations particulières"),
        t("Cabinet : secret client y compris à table. Télétravail : imprimante familiale interdite pour les bulletins. Saisie : habilités seulement."),
        h("Mise en pratique"),
        t("Jouez Q68 et Q70 à deux : l’un recruteur presse, l’autre refuse avec alternative."),
        h("Correction détaillée"),
        t("Refus + canal + alerte procédure. L’alternative n’est jamais Gmail perso ni le bulletin complet hors finalité."),
      ],
    }),
    lesson({
      title: "Questions d’entretien 81 à 100 — Autonomie, cas sensibles, posture",
      description:
        "Limites junior, stages, saisies, expat, communication, honnêteté de présentation.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t("Vous formulez clairement seul / sous revue / hors périmètre, y compris sur les cas que l’on tend pour vous faire bluffer."),
        h("Ce qu'il faut comprendre"),
        t("Les dernières questions d’un test technique visent l’éthique : gratification inventée, barème de saisie inventé, URSSAF coupée pour un expat, 36 k€ garanti, bulletin réel d’un ancien employeur."),
        h("Méthode opérationnelle"),
        t("Si le paramètre n’est pas dans le fichier de taux : méthode + source à ouvrir, pas un euro inventé. Si international ou rupture : escalade."),
        code(`Q81. Que faites-vous seul dès les premières semaines ?
R81. Relances, ouverture de dossiers, saisie sur pièces, contrôles de premier
niveau (brut, net, PMSS, SMIC, entrées/sorties), checklist, journal d’incidents,
explications de bulletin factuelles, préparation des fichiers. C’est déjà un
métier. Je ne minimiserai pas cela en entretien au profit d’un discours
d’expert.

Q82. Que n’êtes-vous pas encore ?
R82. Paramétreur, juriste des ruptures, expert détachement, négociateur
d’exonération, DPO. Je prépare, je documente, je fais viser. Cette phrase rassure
un responsable paie : il ne veut pas d’un junior qui « corrige l’URSSAF ».

Q83. Multi-établissements, taux AT plus bas au siège ?
R83. Je refuse de tout basculer sur le SIRET « pas cher ». L’AT suit la
notification de l’établissement réel. Optimiser par SIRET fictif est une fausse
déclaration. Escalade.

Q84. Gratification minimale de stage 2026, montant ?
R84. Je ne l’invente pas : elle n’est pas dans rates-2026.json. Méthode : seuil
de durée et formule sur URSSAF / Service-Public à la date du stage ; le plafond
horaire 30 € (arrêté 22/12/2025) n’est qu’un ingrédient si la formule officielle
s’y réfère ; convention si plus favorable ; visa. Recopier 3,90 €/h d’une année
N-1 est une faute. Un recruteur qui tend un chiffre attend souvent que je refuse
de le garantir.

Q85. Barème de saisie 2026 en euros ?
R85. Absent du fichier de taux. Principes : fraction saisissable par tranches,
somme insaisissable (reste à vivre), régime propre des pensions alimentaires,
employeur tiers saisi, confidentialité. Méthode : Légifrance / Service-Public
le jour du calcul, première saisie en binôme. 30 % de tout le net n’est pas la
règle. Je n’invente pas 152 € ou tout autre souvenir.

Q86. Cadre en expat, « coupe l’URSSAF » ?
R86. Non. Détachement / expatriation : affiliation, formulaires, package hors
autonomie. LIMITE IMPÉRATIVE : escalade, pas de bulletin « sans charges » en
attendant. Un standard français sur un cas international est aussi une faute.

Q87. Trop-perçu 90 €, le salarié veut qu’on oublie ?
R87. Un indu n’est pas un cadeau. Information, modalité visée, éventuellement
abandon de créance par un habilité, pas par moi. Je n’improvise pas une retenue
intégrale du prochain net.

Q88. Expliquez un bulletin en 8 lignes à un salarié.
R88. Période, brut, cotisations salariales (maladie 0 % si domicile France 2026,
vieillesse, retraite, CSG/CRDS), net avant PAS, PAS, net versé, MNS distinct,
CP. Je source les taux. Je ne compare pas à un collègue. Je reviens si je ne
sais pas. « C’est le logiciel » n’est pas une explication.

Q89. HS après gel, manager pressant ?
R89. Pas de saisie sans validation. Exception écrite du responsable, sinon
février. Je reformule la règle, je propose le canal, je copie le responsable si
pression. Je ne passe pas « l’ami ».

Q90. Réclamation « vous m’avez volé 180 € » ?
R90. Accusé, instruction sur le bulletin, qualification (erreur, malentendu,
hors droit), réponse écrite, correction visée si besoin. Pas d’insulte en retour,
pas d’avoir de 50 €, pas de modification de PAS pour compenser.

Q91. Cette formation garantit-elle 36 000 € ?
R91. Non. 36 k€ brut annuels est un objectif de marché possible sur certaines
offres, jamais une garantie, jamais un effet automatique du parcours, jamais
un équivalent SMIC (1 823,03 € × 12 n’est pas 36 k€). Je prépare les compétences
recherchées, je négocie selon preuves. Voir leçon négociation.

Q92. Le statut cadre est-il dû après ce parcours ?
R92. Non. Il dépend de la classification employeur / CCN / contrat. Il a des
effets (APEC, parfois forfait, prévoyance), il n’augmente pas magiquement le
net. Je ne le promets pas, je l’analyse dans l’offre.

Q93. Comment vous présentez-vous honnêtement ?
R93. Compétences sourcées 2026, cas traités, limites, outils au niveau
fonctionnel, reconversion le cas échéant sans roman. Pas « expert toutes CCN ».
Pas de bulletin nominatif d’un ancien employeur. Attestation LOU ≠ RNCP.

Q94. Qu’y a-t-il dans votre portefeuille de preuves ?
R94. Contrôles PMSS/SMIC, un prorata, des HS supplétives, un partiel, un écrit
de relance, un journal de veille, une limite tenue (stage, saisie, expat). Des
cas fictifs de formation, pas des données réelles volées.

Q95. Priorités 30 / 60 / 90 jours ?
R95. 30 : carte acteurs, outils, dettes de dossiers, pas de DSN solo. 60 : un
portefeuille borné sous revue, reporting simple. 90 : autonomie du standard,
escalades maîtrisées, ATS/GED propre. Zéro KPI magique inventé.

Q96. Un test technique « calculez ce bulletin » : posture ?
R96. Je date (janvier 2026), je liste les hypothèses (AT, mutuelle, PAS), je
calcule ce qui est sourcé, je marque « à vérifier » ce qui ne l’est pas
(gratification, barème saisie, CCN). Un test réussi est un raisonnement tracé,
pas un net sorti d’un logiciel opaque.

Q97. Mentir sur un logiciel ?
R97. Inutile et détecté en 48 h de poste. Je dis : cycle compris, outil X à
apprendre, formation interne demandée. Le recruteur junior achète l’apprentissage
encadré, pas une mythologie Sage.

Q98. Questions à poser en fin d’entretien ?
R98. Calendrier de clôture, qui valide, qui dépose la DSN, CCN et volume, part
d’administration du personnel, revue des premiers mois, canal salariés, gel.
Pas seulement « vous avez un baby-foot ». Ces questions montrent le métier.

Q99. Peut-on montrer le bulletin d’un cousin ou d’un ancien collègue ?
R99. Non. Données personnelles, secret. Cas fictifs ou exercices de formation.
Un recruteur sérieux n’exige pas un vrai bulletin tiers. S’il l’exige, c’est un
signal sur sa propre conformité.

Q100. Que répondez-vous à « soyez autonome dès lundi sur 5 CCN, paramétrage,
ruptures » ?
R100. Je peux produire un standard sous revue, apprendre des CCN en les lisant,
alerter. Je ne suis pas paramétreur ni juriste de rupture lundi. Si l’offre
exige un confirmé, je le nomme : mieux vaut un refus clair qu’un échec à J+15.
L’autonomie s’étend ; elle ne s’invente pas le dimanche soir.`),
        h("Exemple professionnel"),
        t("Test oral : « gratification 2026 ? » Le candidat qui assène 4,05 € sans source peut perdre face à celui qui décrit la méthode URSSAF/SP et le plafond horaire 30 € comme ingrédient."),
        h("Erreurs fréquentes du gestionnaire de paie junior"),
        t("Bluffer. Inventer des euros. Promettre cadre et 36 k€. Apporter un vrai bulletin. Dire oui à un poste de confirmé déguisé."),
        h("Situations particulières"),
        t("Entretien avec un opérationnel non paie : vulgariser sans fausseté. Avec un responsable paie : dates et limites. Panel : même vérité, pas deux discours."),
        h("Mise en pratique"),
        t("Enregistrez-vous sur Q84, Q85, Q91, Q100. Faites écouter à un pair : détectez le bluff."),
        h("Correction détaillée"),
        t("Les trois « je n’invente pas l’euro » (stage, saisie, CCN) plus le « 36 k€ n’est pas garanti » forment le socle d’honnêteté du module emploi."),
      ],
    }),
    pack({
      title: "Négociation salariale autour de 36 000 € : analyser, argumenter, ne pas garantir",
      description:
        "Marché, fixe, variable, avantages, classification, cadre : une méthode, zéro promesse.",
      minutes: 24,
      objectifs:
        "Vous savez analyser une fourchette, valoriser des compétences réelles, et refuser de présenter 36 000 € ou le statut cadre comme un dû.",
      theorie:
        "36 000 € brut annuels, c’est 3 000 € brut mensuels sur 12 mois, avant cotisations, avant PAS, avant tout variable. Ce n’est pas un net. Ce n’est pas le SMIC (1 823,03 € × 12 = 21 876,36 € brut sur la base 151,67 h en début 2026, hors revalorisation de juin). Ce n’est pas une garantie de fin de parcours LOU Academy. Sur le marché, certaines offres de chargé de paie ou de gestionnaire confirmé junior+ affichent des fourchettes qui incluent 32-38 k€ selon région, cabinet/industrie/CSP, tension, classification. D’autres premiers postes se situent plus bas. Vous analysez, vous ne revendiquez pas un tarif magique.\n\nFixe vs variable : le fixe est dû selon le contrat. Un variable (prime d’objectif, intéressement, 13e mois) n’existe que s’il est écrit et selon ses conditions. Comparer 34 k€ fixe à 32 k€ + 4 k€ de prime non garantie est un raisonnement, pas une addition naïve. Avantages : mutuelle, tickets, RTT, télétravail, prévoyance, véhicule — à valoriser selon le contrat collectif réel, pas selon une brochure. Un « package 40 k€ » dont 6 k€ d’avantages mal évalués trompe.\n\nClassification et cadre : le coefficient CCN commande souvent le minimum. Le statut cadre n’est pas un bonus automatique à 36 k€ : il dépend de l’emploi réellement classé, avec effets APEC, parfois forfait, parfois prévoyance, parfois délai de préavis. Il peut aussi signifier forfait jours et disponibilité. Vous posez la question ; vous ne dites pas « je veux être cadre » comme substitut à un argument de compétences. Valoriser : contrôles 2026 sourcés, cycle de clôture, DSN comprise sous revue, administration du personnel, communication, Excel de contrôle, limites tenues. Argumenter : preuves du portefeuille, pas un ultimatum.\n\nPrésentation de soi : vouvoiement, faits, pas de roman victimisant, pas de dénigrement d’un ancien employeur, pas de données réelles. Si l’on vous presse sur un chiffre : fourchette alignée sur l’offre et sur votre niveau réel (débutant, reconversion, alternance). « Je vise les missions d’un poste à 36 k€, je discute la fourchette selon vos responsabilités et ma revue » est professionnel. « 36 k€ cadre sinon je pars » ne l’est pas.",
      methode:
        "1. Lire l’offre : fourchette déjà écrite ? 2. Distinguer fixe / variable / avantages. 3. Demander classification CCN et statut. 4. Préparer 3 preuves de compétences. 5. Annoncer une fourchette cohérente avec le niveau, pas un copier-coller 36 k€. 6. Écouter la revue et la formation interne : elles ont une valeur. 7. Ne rien garantir à un tiers (« avec LOU j’aurai 36 k cadre »). 8. Confirmer par écrit ce qui a été dit (fixe, variable, date).",
      noteText:
        "Ni la formation ni l’attestation ne créent un droit à 36 000 € ni au statut cadre. Mentir sur une prétention déjà obtenue ailleurs, ou sur un statut actuel, se vérifie. Un junior peut demander ; il ne peut pas exiger un mensonge de classification.",
      exemple:
        "Offre 28-32 k€, cabinet, 8 dossiers, formation interne, revue senior. Le candidat qui refuse sous 36 k€ cadre se ferme un vrai premier poste. Celui qui dit « 32 k€ en haut de fourchette si portefeuille et revue claire, ouvert à 30 avec points à 6 mois » reste dans le réel. Offre 34-38 k€, CSP, 180 bulletins, 1 an exigé : 36 k€ peut se discuter avec preuves, pas avec un diplôme inventé.",
      extra: [
        code(`GRILLE D'ANALYSE — NE PAS CONFONDRE AVEC UNE GARANTIE

Fixe brut annuel proposé : ........ €
Variable (conditions écrites ?) : ........ €
Avantages (contrat réel, pas un souhait) : ........
Classification / coefficient / cadre : ........ (pièce, pas un slogan)
Revue / formation interne / astreinte de clôture : ........
Mes preuves (3) : ........
Fourchette que JE peux argumenter aujourd'hui : ........ 
  (peut être inférieure à 36 k€ — c'est honnête)
Points de revue à 6 mois (si l'employeur les propose) : ........

Phrase : « 36 k€ est un objectif de marché, pas un dû de la formation. »`),
      ],
      erreurs:
        "Additionner un variable non écrit. Exiger le cadre pour « le net ». Citer 36 k€ comme salaire déjà acquis. Menacer. Se sous-vendre par panique sans même lire la fourchette de l’offre. Se sur-vendre sans un seul cas.",
      particuliers:
        "Île-de-France vs province : les fourchettes varient, je n’invente pas une statistique. Alternance / contrat pro : grille et SMIC/pourcentage, autre discussion. Temps partiel : prorata, le 36 k€ plein n’est pas un droit. Handicap, reconversion : argumenter des compétences, pas un rabais fataliste ni une surenchère.",
      exercice:
        "On vous dit : « On peut faire 36 k€ et cadre si vous êtes autonome DSN et paramétrage dès le mois 1. » Rédigez une réponse honnête de huit lignes.",
      correction:
        "Vous remerciez. Vous pouvez viser cette fourchette si les missions correspondent, mais vous n’êtes pas autonome paramétrage/DSN complexe au mois 1 : vous produisez sous revue, vous montez. Le cadre dépend de la classification réelle, pas d’un marché. Vous préférez un 32-34 k€ avec revue claire qu’un 36 k€ cadre fondé sur une autonomie que vous n’avez pas. Vous refusez de mentir pour signer. C’est la réponse qui tient en poste.",
    }),
    pack({
      title: "Analyser une offre d’emploi paie",
      description:
        "Volume, CCN, logiciel, autonomie, administration du personnel, signaux de poste mal cadré.",
      minutes: 20,
      objectifs:
        "Vous savez extraire d’une offre ce qui est junior, ce qui est confirmé déguisé, et quelles questions poser avant d’accepter.",
      theorie:
        "Une offre se lit comme un dossier : faits, pas slogans. Volume de bulletins (30, 80, 180, 400) change le métier (polyvalence vs industrialisation). Nombre de CCN : une, trois, « toutes ». Logiciel nommé : niveau exigé vs formation interne. Part d’administration du personnel (contrats, DPAE, visites) vs paie pure. Qui valide. Qui parle aux salariés. Astreinte de clôture (soirées du 24). Télétravail vs présence le jour du SEPA. Classification et fourchette déjà écrites (L. 5331-3 impose l’honnêteté de l’offre côté employeur : vous, vous vérifiez que l’entretien ne promet pas autre chose que l’écrit).\n\nSignaux de poste mal cadré : « 5 CCN, paramétrage, management, DSN, contentieux » pour un junior ; fourchette absente et « selon profil » vague ; « autonome dès J1 » sans revue ; logiciel exigé certifié alors que vous êtes débutant ; 36 k€ cadre en échange d’une disponibilité 7/7. Signaux sains : formation interne, binôme, portefeuille borné, calendrier, outil à apprendre, fourchette écrite.\n\nCabinet : multi-dossiers, exigence de ne pas transposer. CSP : SLA, files, peu de RH de proximité. TPE : tout le social, risque d’être « la paie » sans filet — alors le prestataire / expert-comptable doit être nommé. Vous posez la question du filet, pas seulement du titre.\n\nAprès l’entretien, vous comparez notes et offre écrite. Un écart (forfait jours non dit, variable transformé, cadre retiré) se clarifie avant signature, par écrit. Vous n’embellissez pas l’offre pour convaincre un proche : vous la décrivez comme un bulletin, ligne à ligne.",
      methode:
        "Grille unique pour chaque offre (ci-dessous). Score honnête : junior réel / junior tendu / confirmé. Décision : postuler, questionner, reculer. Jamais : mentir sur l’expérience pour entrer dans un confirmé.",
      noteText:
        "Accepter un poste de confirmé en mentant sur l’autonomie se paie en erreurs de paie, pas en « on apprendra ». Reculer est professionnel.",
      exemple:
        "Deux offres le même jour. A : CSP 1 200 bulletins, portefeuille non-cadres, Silae, revue, 30-33 k€. B : TPE 20 personnes, « tout le social », pas de N+1 paie, 36-38 k€ cadre. A est souvent le vrai tremplin junior. B peut être un piège si vous devenez l’unique filet juridique. Vous questionnez B sur le prestataire, la CCN, qui dépose la DSN ; vous n’acceptez pas le cadre 36 k€ comme preuve que « c’est mieux ».",
      extra: [
        code(`FICHE D'ANALYSE D'OFFRE

Intitulé : ........  Fourchette écrite : ........
Volume bulletins / CCN : ........
Logiciel / SIRH : ........  Formation interne : oui/non
Admin personnel : ........
Qui valide / qui dépose DSN : ........
Canal salariés : ........
Clôture (date, soirées) : ........
Classification / cadre : ........ (écrit ?)
Variable / avantages : ........
Filet (N+1, cabinet, éditeur) : ........
Exigences confirmé déguisées : ........
Questions à poser : ........
Niveau réel vs offre : junior / tendu / hors scope
Décision : postuler / clarifier / reculer`),
      ],
      erreurs:
        "Ne lire que le salaire. Ignorer le nombre de CCN. Croire « autonome » flatteur. Ne pas demander qui dépose la DSN. Signer un avenant oral « on verra le cadre dans 3 mois » sans trace.",
      particuliers:
        "Intérim / CDD de mission : même lecture, plus le motif. Portage : qui est l’employeur social. Annonce discriminatoire ou trompeuse : vous n’êtes pas le police du marché, mais vous n’êtes pas obligé de postuler.",
      exercice:
        "Offre : « Gestionnaire paie F/H — 35 à 40 k€ — junior accepté — paramétrage CCN — DSN — 400 bulletins — 4 IDCC — management d’un stagiaire. » Qualifiez et listez 6 questions.",
      correction:
        "Poste tendu / confirmé déguisé : 400 bulletins + 4 IDCC + paramétrage + management, malgré « junior ». Questions : qui paramètre vraiment ? qui dépose ? revue de qui ? stagiaire déjà là ? quelles 4 CCN ? calendrier ? fourchette selon revue à 6 mois ? Vous pouvez postuler en clarifiant, pas en promettant le paramétrage lundi. 40 k€ n’efface pas le décalage de niveau.",
    }),
    quizLesson({
      title: "Quiz — Emploi, entretiens et négociation",
      description: "100 questions de cours, honnêteté salariale, limites, offres.",
      passing_score: 70,
      questions: [
        q({
          question: "Le PMSS au 15 janvier 2026 (période d’activité janvier) est :",
          options: [
            "A. 3 666 €",
            "B. 4 005 €, arrêté du 22 décembre 2025",
            "C. Garantie de 36 000 € brut",
            "D. Supprimé",
          ],
          correct: 1,
          explanation:
            "Paramètre annuel sourcé. Sans lien avec une garantie salariale d’embauche.",
        }),
        q({
          question: "36 000 € brut annuels à l’issue de cette formation :",
          options: [
            "A. Est garanti, cadre inclus",
            "B. Est un objectif de marché possible, jamais une garantie ni un effet automatique",
            "C. Est le SMIC 2026",
            "D. Impose l’APEC",
          ],
          correct: 1,
          explanation:
            "Ni garantie, ni SMIC, ni statut cadre automatique.",
        }),
        q({
          question: "Heures au-delà d’un temps partiel contractuel, dans les limites :",
          options: [
            "A. HS 25/50 par réflexe",
            "B. Heures complémentaires (L. 3123-9 s.)",
            "C. Forfait jours",
            "D. Non payées",
          ],
          correct: 1,
          explanation:
            "Piège classique d’entretien technique.",
        }),
        q({
          question: "Gratification minimale de stage 2026 en euros, dans rates-2026.json :",
          options: [
            "A. 4,05 €/h à réciter",
            "B. Absente : méthode URSSAF / Service-Public, pas d’invention",
            "C. SMIC 12,02 €",
            "D. 600 € forfaitaires",
          ],
          correct: 1,
          explanation:
            "L’honnêteté du « je vérifie » est la bonne réponse d’entretien.",
        }),
        q({
          question: "Présenter cette formation comme une certification Silae :",
          options: [
            "A. Est recommandé",
            "B. Est faux : attestation LOU Academy seulement, simulateur ≠ clone commercial",
            "C. Est un titre RNCP",
            "D. Autorise à paramétrer seul",
          ],
          correct: 1,
          explanation:
            "Mentir sur un titre se détecte et ruine le reste de l’entretien.",
        }),
        q({
          question: "Un recruteur demande le vrai bulletin d’un ancien collègue. Vous :",
          options: [
            "A. L’apportez pour prouver votre expérience",
            "B. Refusez : données personnelles ; vous présentez des cas fictifs / exercices",
            "C. Floutez le nom et envoyez quand même le PAS",
            "D. Le lisez en open space",
          ],
          correct: 1,
          explanation:
            "Confidentialité dès l’entretien. Un recruteur sérieux ne l’exige pas.",
        }),
        q({
          question: "MNS et net versé :",
          options: [
            "A. Identiques",
            "B. Distincts : MNS = mention BOSS après prélèvements sociaux obligatoires",
            "C. Le MNS est le PAS",
            "D. Le MNS est le brut",
          ],
          correct: 1,
          explanation:
            "Question fréquente. Cadre jusqu’au 31/12/2026, pas d’anticipation 2027.",
        }),
        q({
          question: "Offre « junior » avec paramétrage, 4 CCN, 400 bulletins, management :",
          options: [
            "A. Premier poste idéal",
            "B. Signal de confirmé déguisé : clarifier revue et périmètre, ne pas mentir sur l’autonomie",
            "C. Garantit 40 k€ cadre",
            "D. Permet d’inventer les minima CCN",
          ],
          correct: 1,
          explanation:
            "Analyser l’offre. Le salaire n’efface pas le décalage de niveau.",
        }),
        q({
          question: "Barème de saisie 2026 en euros :",
          options: [
            "A. 30 % pour tous",
            "B. À lire sur source officielle ; principes de fraction et d’insaisissable, sans euros inventés",
            "C. Tout le net",
            "D. Inexistant",
          ],
          correct: 1,
          explanation:
            "Même discipline qu’en module cas complexes. L’entretien teste le non-bluff.",
        }),
        q({
          question: "Qui dépose en principe une DSN complexe ? ",
          options: [
            "A. Le junior dès J1, pour prouver son autonomie",
            "B. Un habilité ; le junior prépare et assiste, sous revue",
            "C. Le manager d’atelier",
            "D. Le salarié",
          ],
          correct: 1,
          explanation:
            "Autonomie réelle vs slogan d’offre.",
        }),
        q({
          question: "Valoriser des compétences pour une fourchette proche de 36 k€, c’est :",
          options: [
            "A. Exiger le cadre",
            "B. Présenter des preuves (contrôles 2026, cycle, limites, écrits) et discuter fixe/variable/avantages sans garantir le chiffre",
            "C. Promettre le paramétrage solo",
            "D. Mentir sur Silae",
          ],
          correct: 1,
          explanation:
            "Argumentaire = preuves, pas un ultimatum de statut.",
        }),
        q({
          question: "Maladie patronale taux plein au 01/01/2026 :",
          options: [
            "A. 0 %",
            "B. 13 % (URSSAF privé) ; la RGDU seulement si le cas le demande",
            "C. 5,25 %",
            "D. Un taux AT national",
          ],
          correct: 1,
          explanation:
            "0 % est salarial (domicile France). 5,25 % est AF plein. AT n’est pas national.",
        }),
      ],
    }),
  ],
};
