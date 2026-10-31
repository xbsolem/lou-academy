import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 25,
  title: "Administration du personnel au service de la paie",
  description:
    "Tenir les dossiers, contrats, avenants, absences, documents, organismes et visites médicales, et appliquer RGPD/CNIL sans produire un bulletin sur un dossier incomplet.",
  lessons: [
    pack({
      title: "Le dossier individuel du salarié",
      description:
        "Constituer, classer et contrôler le dossier dont dépend la fiabilité du bulletin.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous savez lister les pièces d’un dossier individuel, distinguer ce qui appartient à la paie, aux RH et à la médecine du travail, et refuser de calculer un bulletin sur un dossier incomplet. Vous savez aussi qui a le droit d’ouvrir ce dossier.",
      theorie:
        "Le dossier individuel n’est pas un classeur de convenance. C’est le support de preuve de la relation de travail : identité, contrat, avenants, temps de travail, rémunération, affiliation aux organismes, absences, documents remis, changements de situation. Si une information manque ou est fausse, le logiciel de paie calcule juste… sur une base fausse. Un junior qui « lance le calcul » sans dossier n’est pas rapide : il est exposé.\n\nOn distingue trois univers qui ne se mélangent pas. Le dossier RH / administration du personnel contient les pièces de la relation de travail et les données nécessaires à la gestion. Le dossier paie contient les paramètres de calcul (rubriques, taux PAS, affiliations, compteurs) et les historiques de bulletins. Le dossier médical appartient au service de prévention et de santé au travail : un gestionnaire de paie n’y accède pas, n’y dépose pas un diagnostic, n’écrit pas « cancer » ou « dépression » dans un commentaire de logiciel. L’aptitude, l’inaptitude, la visite de reprise se traduisent en faits administratifs (date, consigne RH, impact éventuel sur le poste), pas en récit médical.\n\nLe dossier est un traitement de données personnelles. Finalité : gérer le contrat, payer, déclarer, respecter les obligations de l’employeur. Minimisation : on ne collecte pas « au cas où » (photo d’identité décorative, numéro de sécurité sociale recopié dans dix fichiers, situation syndicale, origine, état de santé détaillé). Habilitations : seules les personnes dont la mission l’exige ouvrent le dossier. Un manager d’atelier n’a pas à lire le taux PAS ni la saisie sur salaire. Un collègue « curieux » n’est pas un habilité.\n\nLa GED (coffre-fort, SIRH, dossier partagé sécurisé) ne supprime pas le besoin de contrôle. Un PDF mal nommé, un avenant scanné illisible, un RIB déposé dans une boîte mail collective : ce n’est pas un dossier. Le dossier papier, s’il existe encore, se range, se ferme, ne voyage pas dans un sac. Le double du bulletin est une obligation de conservation de l’employeur (article L. 3243-4 du Code du travail : cinq ans). Les autres durées se lisent dans le référentiel CNIL et dans les textes applicables : vous ne les inventez pas « parce que c’est comme ça dans mon précédent poste ».\n\nUn dossier vivant se met à jour. Mariage, naissance, changement d’adresse, de RIB, de temps de travail, de classification : chaque fait a une date d’effet et une pièce. Sans date d’effet, la paie ne sait pas à partir de quel mois appliquer. Sans pièce, vous n’avez qu’une rumeur.",
      methode:
        "À l’ouverture d’un dossier (embauche ou reprise), cochez dans cet ordre :\n1. Identité et pièces d’état civil / titre de séjour si concerné (RH, pas interprétation junior d’un visa).\n2. Contrat signé, avenants, classification, CCN, temps de travail, rémunération.\n3. DPAE effectuée (L. 1221-10) — vous vérifiez la trace, vous ne « considérez pas que c’est bon ».\n4. Organismes : URSSAF déjà employeur, retraite complémentaire, mutuelle, prévoyance, médecine du travail.\n5. Coordonnées, RIB, taux PAS (via DSN, pas un mail libre).\n6. Compteurs (CP, RTT selon régime d’entreprise — à lire, pas à inventer).\n7. Habilitations d’accès au dossier dans l’outil.\nDocumentez ce qui manque. Un dossier « en attente de pièce » n’est pas un dossier clos. Vous n’inventez pas une date d’ancienneté, un coefficient ou un forfait « pour débloquer la paie ».",
      noteText:
        "Limite d’autonomie : un junior n’ouvre pas un dossier médical, n’interprète pas un titre de séjour complexe, n’accorde pas un droit (télétravail, classification, mutuelle ayant droit) sans pièce et sans règle. Si le dossier est incomplet au gel des variables, vous alertez le responsable paie / RH : vous ne « faites comme le collègue ».",
      exemple:
        "PME de services, 35 salariés, un établissement. Nadia, gestionnaire junior, reçoit un mail : « on embauche Samir lundi, tu peux déjà le mettre en paie, le contrat arrive après. » Elle refuse de créer un bulletin définitif sans contrat, sans DPAE, sans RIB contrôlé. Elle prépare la fiche à blanc (identité, date d’entrée prévue) et liste les pièces manquantes au responsable. Lundi, le contrat arrive : 80 % temps partiel, pas 35 h. Si elle avait « mis comme tout le monde », le premier bulletin aurait été un trop-perçu.",
      extra: [
        code(`CHECKLIST DOSSIER INDIVIDUEL — à dater et à signer (interne)

IDENTITÉ
[ ] Nom, prénom, date de naissance, NIR (finalité paie / DSN uniquement)
[ ] Adresse, téléphone, mél professionnels de contact
[ ] Pièce d'identité / titre de séjour : VU PAR RH, date de validité notée
[ ] Situation à ne PAS collecter : origine, religion, syndicat, santé détaillée

CONTRAT
[ ] Contrat signé (type, début, essai, durée si CDD)
[ ] Classification, coefficient, statut cadre / non-cadre (pièce, pas rumeur)
[ ] Temps de travail, forfait éventuel, lieu, CCN
[ ] Rémunération (fixe, variable selon contrat — sans inventer un 13e mois)
[ ] Avenants classés par date d'effet

ADMINISTRATIF SOCIAL
[ ] DPAE : n° / date / qui a déposé
[ ] Affiliation mutuelle / prévoyance (contrat collectif du dossier)
[ ] Visite médicale : date, type (information-prévention / reprise), consigne RH
[ ] RIB contrôlé (titulaire, IBAN) — canal sécurisé

PAIE
[ ] Matricule, établissement, rubriques, taux PAS (flux DSN)
[ ] Compteurs CP / absences
[ ] Historique bulletins (coffre ou GED habilitée)

MANQUES (date, pièce, qui relance) :
................................................`),
      ],
      erreurs:
        "Créer le salarié dans le moteur « pour avancer » sans contrat. Ranger le bulletin dans une messagerie personnelle. Laisser un manager consulter le dossier « parce qu’il est N+1 opérationnel ». Recopier le NIR dans un tableur partagé. Noter un diagnostic médical dans le commentaire de paie. Confondre dossier clos et dossier « on a le CV ».",
      particuliers:
        "Multi-établissements : le dossier suit l’employeur et l’établissement d’affectation ; un transfert se documente (date, SIRET, éventuellement CCN ou taux AT). Intérim, portage, mise à disposition : l’employeur social n’est pas toujours le site d’accueil. Reprise d’un fonds ou d’un dossier cabinet : vous ne fusionnez pas les historiques au feeling. Salarié protégé, saisie sur salaire, enquête : accès encore plus restreint.",
      exercice:
        "On vous remet une pochette : CV, promesse d’embauche non signée, RIB au nom du conjoint, copie d’un arrêt maladie de l’emploi précédent, photo. L’entrée est prévue dans quatre jours. Listez (1) ce que vous classez, (2) ce que vous refusez de conserver, (3) ce que vous exigez avant premier bulletin, (4) ce que vous escaladez.",
      correction:
        "1. Classable plus tard, pas suffisant seul : rien de tout cela ne constitue un dossier de paie. La promesse non signée n’est pas le contrat. 2. Refus de conserver : photo (sauf nécessité avérée et politique validée — en pratique, hors badge, inutile), arrêt de l’emploi précédent (donnée de santé d’un autre employeur, hors finalité). 3. Avant premier bulletin : contrat signé, DPAE, identité, RIB au nom du salarié ou mandat clair, paramètres de temps et de rémunération, affiliations. 4. Escalader : RIB au nom du conjoint (risque de paiement erroné et de donnée), entrée dans quatre jours sans contrat, éventuel titre de séjour si mentionné oralement. Un junior ne « s’arrange pas » avec un virement sur un compte tiers.",
    }),
    pack({
      title: "Contrats, avenants et ce que la paie doit vérifier",
      description:
        "Lire un contrat comme une source de calcul, pas comme un document RH décoratif.",
      minutes: 22,
      objectifs:
        "Vous savez extraire d’un contrat les données qui font le bulletin, vous savez qu’un avenant précède le changement de paramètre, et vous savez ce qu’un junior ne rédige pas seul.",
      theorie:
        "Le contrat de travail fixe des éléments que le moteur de paie ne devine pas : date d’entrée, type (CDI, CDD, intercalaire), durée du travail, forfait éventuel, classification, rémunération, lieu, convention collective applicable, période d’essai. La paie n’« interprète » pas un oral du manager. Elle applique l’écrit, ou elle alerte si l’écrit est absent, illisible, contradictoire avec la CCN ou avec ce qui est déjà paramétré.\n\nUn avenant est un accord écrit qui modifie le contrat. Temps partiel, augmentation, changement de coefficient, passage au forfait jours, mobilité géographique : sans avenant (ou sans acte équivalent prévu par le droit et la pratique de l’entreprise, validé RH), vous ne changez pas le paramètre « parce que c’est déjà le cas sur le terrain ». Le terrain sans écrit produit des contentieux et des régularisations. La date d’effet de l’avenant commande le mois de paie concerné. Un avenant signé le 28 pour une prise d’effet au 1er n’autorise pas à réécrire tout le passé sans consigne de rappel.\n\nCDD : motif, terme, renouvellement éventuel. Un junior ne qualifie pas le motif. Il vérifie que les dates et le terme sont ceux du contrat, que la paie s’arrête au bon jour, que le solde n’est pas lancé « au feeling ». Temps partiel : durée, répartition, heures complémentaires selon contrat et loi (L. 3123-9 et suivants) — ce ne sont pas des heures supplémentaires. Forfait jours : statut, convention, jours, suivi — un junior n’invente pas un forfait pour « simplifier les HS ».\n\nLa classification (coefficient, niveau, statut cadre) n’est pas un agrément du gestionnaire. Elle se lit dans le contrat et la CCN. Un « on le met cadre, ça fait plus sérieux » n’est pas une instruction de paie. Le statut cadre a des effets (APEC, parfois forfait, parfois prévoyance) : on les applique si le statut est établi, on ne les promet pas.\n\nLe junior ne rédige pas seul un CDD, une rupture, une clause de non-concurrence, un forfait. Il peut préparer une checklist, préremplir des champs de SIRH sous modèle validé, relire la cohérence dates / salaire / temps. La signature, le conseil juridique, le choix du type de contrat restent RH / responsable.",
      methode:
        "Pour tout nouveau contrat ou avenant, avant saisie :\n1. Identifier l’employeur (SIRET, établissement).\n2. Relever dates (début, essai, terme CDD, effet avenant).\n3. Relever temps de travail et modalité (horaire, forfait, annualisation — à lire, pas à inventer).\n4. Relever rémunération (mensuelle, horaire, primes contractuelles nommées).\n5. Relever CCN et classification.\n6. Comparer avec le paramétrage existant (si avenant : l’écart doit être exactement celui de l’écrit).\n7. Lister les impacts paie (prorata, mutuelle, retraite, DSN).\n8. Faire viser par RH / responsable paie si contradiction, blanc, ou demande orale contraire à l’écrit.",
      noteText:
        "Obligation légale : le contrat et ses modifications s’inscrivent dans le Code du travail ; certaines mentions sont exigées selon le type de contrat. Un junior n’invente ni un motif de CDD, ni une durée d’essai, ni un statut cadre. Paramètre d’entreprise : modèles internes, circuit de signature. Disposition conventionnelle : minima, classifications — à lire dans la CCN applicable, jamais dans un souvenir.",
      exemple:
        "ETI industrielle, 180 personnes. Un chef de service écrit : « Passe Léa à 80 % à partir de maintenant, elle a les enfants. » Pas d’avenant. Le junior qui réduit le brut immédiatement crée un temps partiel de fait, un risque d’heures complémentaires mal qualifiées, et une inégalité de traitement. La bonne suite : RH rédige l’avenant (durée, répartition, rémunération proportionnelle), date d’effet, signature, puis paie. En attendant, le contrat 100 % reste la règle, sauf absence par ailleurs justifiée.",
      extra: [
        code(`FICHE D'EXTRACTION CONTRAT → PAIE (à joindre au dossier)

Salarié : ..................... SIRET / étab. : .............
Type : CDI / CDD (terme : .....) / autre
Date d'entrée : ........ Essai jusqu'au : ........ (source : contrat)
CCN : ..................... (à lire, ne pas citer de clause de mémoire)
Classification / statut : ..................... Cadre : oui / non
Temps de travail : .... h / forfait jours : .... / temps partiel : .. %
Rémunération brute mensuelle ou horaire : ..................
Éléments contractuels nommés (13e, prime de poste, etc.) : ........
Date d'effet avenant n° : ........ Objet : .....................
Impacts paie : prorata / mutuelle / DSN / compteurs / autre
Points à faire viser : ........................................
Visa RH / responsable paie : ........ date : ........`),
      ],
      erreurs:
        "Modifier un salaire sur un mail manager sans avenant. Transformer des HS récurrentes en forfait jours. Oublier le terme du CDD et payer un mois de trop. Recopier la classification du collègue « du même métier ». Antidater un avenant pour rattraper trois mois. Rédiger un CDD « pour dépanner ».",
      particuliers:
        "Période d’essai : renouvellement selon contrat et CCN, pas selon l’humeur. Changement d’employeur interne (mutation société du groupe) : souvent un nouveau contrat, une DPAE, une sortie/entrée, pas un simple changement de centre de coût. Contrat d’alternance : type, durée, temps de formation — le junior vérifie les dates, il ne choisit pas l’exonération.",
      exercice:
        "Contrat : CDI, 151,67 h, 2 400 € brut, coefficient indiqué, CCN à lire. Mail du 10 janvier 2026 : « On lui verse 2 600 € depuis novembre, c’est validé oralement. » Avenant : aucun. Que saisissez-vous en janvier ? Que documentez-vous ? Que refusez-vous ?",
      correction:
        "En janvier, sauf instruction écrite RH contraire et avenant, la rémunération contractuelle reste 2 400 €. L’écart de 200 € depuis novembre n’est pas un paramètre : c’est un rappel potentiellement dû si l’employeur a créé un engagement, ou une régularisation à qualifier. Vous ne « mettez 2 600 pour coller au réel » tout seul. Vous documentez le mail, vous demandez avenant + date d’effet + sort des mois écoulés (rappel soumis, charges, DSN). Vous refusez d’antidater en silence. Un junior prépare le dossier de rappel sous revue ; il ne l’invente pas.",
    }),
    pack({
      title: "Absences, congés et documents de suivi du temps",
      description:
        "Collecter, qualifier et transmettre les absences sans les recalculer au feeling.",
      minutes: 20,
      objectifs:
        "Vous savez distinguer le rôle de l’administration du personnel (pièce, qualification, compteur) et celui de la paie (rubrique, maintien, IJ), et vous savez bloquer une absence non qualifiée avant clôture.",
      theorie:
        "Une absence n’existe en paie que si elle est un fait daté, qualifié, justifié selon le régime applicable. « Il n’était pas là » n’est pas une rubrique. Congés payés, RTT le cas échéant, maladie, accident du travail, congé maternité, congé parental, absence injustifiée, mise à pied, formation, télétravail (qui n’est pas une absence) : chaque nature a des effets différents sur le brut, les compteurs, la DSN, parfois les IJ et le maintien.\n\nL’administration du personnel reçoit la demande ou l’information, vérifie la pièce (cerfa d’arrêt, pose de CP dans l’outil, validation manager), met à jour le dossier et le SIRH, alerte la paie. La paie ne « crée » pas un CP pour arranger un planning. Elle n’invente pas un maintien maladie. Les congés payés légaux : 2,5 jours ouvrables par mois de travail effectif, plafond 30 jours ouvrables (L. 3141-3), sauf régime plus favorable conventionnel que vous lisez, vous ne l’inventez pas. L’indemnité de CP compare maintien et dixième (L. 3141-24) : ce calcul se fait selon la méthode du dossier, pas « 10 % de tout » au crayon.\n\nLes compteurs (acquis, pris, solde, période de référence) sont des données de dossier. Un écart de compteur se traite comme une anomalie : on ne « remet à zéro » ni on « offre trois jours » sans décision RH. Les absences maladie exigent la pièce et le respect des délais internes de transmission ; le fond (subrogation, IJ) est traité dans les modules maladie. Ici, le geste administratif : date de début, date de fin ou « en cours », nature, pièce, signalement à la paie, pas de diagnostic dans le libellé.\n\nLe temps partiel, le forfait jours, l’annualisation changent la façon de décompter. Un jour d’absence d’un forfait jours n’est pas « 7 heures ». Un junior qui applique la même rubrique à tout le monde fausse les bulletins. En cas de doute de qualification, on n’impute pas : on interroge.",
      methode:
        "Circuit type :\n1. Réception (outil, mail, courrier d’arrêt).\n2. Date de début / fin, nature proposée, pièce jointe.\n3. Contrôle : le salarié est-il le bon ? chevauchement ? compteur suffisant pour un CP ?\n4. Validation selon délégation (manager, RH).\n5. Saisie SIRH / paie avec le code absence exact du dossier.\n6. Impact DSN (événementiel selon consignes du responsable).\n7. Classement de la pièce dans le dossier, hors données médicales superflues.\nGel des variables : une absence arrivée après gel se traite en régularisation, pas en clandestinité.",
      noteText:
        "Limite junior : vous ne refusez pas un CP « parce que ça arrange la clôture », vous ne qualifiez pas une mise à pied, vous n’inventez pas un nombre de jours CCN, vous ne calculez pas seul un maintien maladie. Vous collectez, vous saisissez selon code validé, vous alertez.",
      exemple:
        "Cabinet, dossier client 22 salariés. Un manager envoie le 19 du mois : « mets 2 jours CP à Karim, il est parti. » Karim n’a pas posé dans l’outil. Le compteur affiche 0,5 jour. Le junior qui saisit 2 CP crée un solde négatif ou un droit fictif. Il répond : pièce et pose dans l’outil, ou absence à qualifier (sans solde / injustifiée) par le client et le responsable de dossier. Il ne « rend service ».",
      extra: [
        code(`REGISTRE D'ABSENCE DU MOIS (extrait pédagogique)

Matricule | Nature (code dossier) | Début | Fin | Pièce | Validé par | Paie
S-014     | CP                    | 12/01 | 13/01 | outil | manager  | OK
S-021     | MAL (arrêt)           | 06/01 | en cours | cerfa 08/01 | RH | voir IJ
S-007     | ? « pas là »          | 18/01 | 18/01 | aucune | — | BLOQUER
S-030     | FJ (forfait jours)    | 20/01 | 20/01 | outil | manager | pas 7h

Règle : une ligne « ? » ne passe pas le gel.`),
      ],
      erreurs:
        "Saisir « absence » générique. Convertir un forfait jours en heures d’atelier. Prendre un arrêt par photo WhatsApp non classée et le perdre. Imputer des CP à la place d’un jour férié chômé sans vérifier le régime. Oublier qu’une absence chevauche une entrée ou une sortie.",
      particuliers:
        "Arrêt et visite de reprise : l’administration suit la date, la paie suit l’impact, la médecine du travail suit le médical. Congés d’un salarié protégé, grève, mise à pied conservatoire : RH et parfois juriste, pas improvisation junior. Heures de délégation : ce n’est pas une absence injustifiée.",
      exercice:
        "Janvier 2026. Trois faits le 18, gel le 18 à 12 h : (A) arrêt maladie reçu à 11 h, début 15 janvier ; (B) demande de CP pour le 20-21, compteur OK, manager pas encore validé ; (C) « oubli » de 4 jours d’absence en décembre déjà clôturé. Que faites-vous pour A, B, C ?",
      correction:
        "A. Avant gel : saisir maladie 15→en cours, pièce classée, alerter paie IJ/maintien, ne pas écrire le diagnostic. B. Pas de validation : vous ne saisissez pas le CP ; relance manager ; si validation après gel, exception responsable ou report. C. Décembre clôturé : pas de réouverture clandestine ; dossier de régularisation février, qualification de l’absence, information du salarié, visa responsable. Un junior ne « corrige décembre dans un coin ».",
    }),
    pack({
      title: "Documents à remettre, à collecter et à archiver",
      description:
        "Savoir quel document existe, qui le signe, par quel canal, et ce qu’un junior n’invente pas.",
      minutes: 20,
      objectifs:
        "Vous distinguez documents d’embauche, documents périodiques, duplicatas, attestations et documents de fin, et vous savez refuser un canal non sécurisé.",
      theorie:
        "L’employeur remet un bulletin lors du paiement (L. 3243-1). Le salarié ne peut y renoncer. Le canal (papier, coffre-fort numérique) suit la règle interne et le cadre légal du bulletin dématérialisé : ce n’est pas « un PDF dans la messagerie personnelle parce que c’est plus simple ». Un duplicata se délivre selon procédure, en vérifiant l’identité du demandeur. Envoyer trois ans de bulletins à une adresse personnelle non vérifiée est un incident de données, pas un service.\n\nLes documents d’embauche (contrat, notice mutuelle, éventuel règlement intérieur, informations santé au travail) relèvent surtout des RH. La paie vérifie qu’ils existent quand ils conditionnent un paramètre (adhésion mutuelle, ayants droit). Les documents de fin (certificat de travail, reçu pour solde de tout compte, attestation France Travail selon le cas) se préparent avec le solde : un junior ne les signe pas « pour aller plus vite » s’il n’est pas habilité, et n’y inscrit pas une qualification inventée.\n\nLes attestations d’emploi ou de salaire (logement, prêt, CAF, France Travail, organisme social) sont des actes de l’employeur. Elles doivent être exactes, datées, signées par une personne habilitée. Un chiffre de net « arrondi pour faire plaisir » est une fausse attestation. Un junior prépare le projet à partir du bulletin et de l’historique, fait viser, archive la copie. Il ne délivre pas une attestation « officieuse ».\n\nL’archivage a une finalité : pouvoir justifier un bulletin, une DSN, un contrat, une absence, un paiement. L. 3243-4 : conservation du double du bulletin pendant cinq ans. Les durées des autres pièces (contrats, DSN, registres) se lisent dans les textes et le référentiel CNIL (source legal-sources RGPD-CNIL-RH) : vous les vérifiez, vous ne les recopiez pas d’un forum. Au-delà de la durée, on ne « garde tout au cas où » : c’est contraire à la minimisation.",
      methode:
        "Pour toute demande de document :\n1. Identifier le demandeur (salarié, ancien salarié, organisme avec base légale, avocat — circuit RH).\n2. Identifier le document et sa finalité.\n3. Vérifier l’habilitation à le produire et le canal (coffre, lettre, espace sécurisé — pas WhatsApp).\n4. Extraire les données du dossier, pas de mémoire.\n5. Faire viser si attestation chiffrée ou document de fin.\n6. Archiver la copie et la trace de remise.\n7. Ne jamais joindre un bulletin d’un tiers « pour comparer ».",
      noteText:
        "Confidentialité : un document de paie ne voyage pas sur une imprimante partagée sans ramassage, ni en pièce jointe vers une liste de diffusion. Incident de mauvais destinataire : procédure RGPD interne, pas un « désolé » informel.",
      exemple:
        "CSP, 900 bulletins. Un ancien salarié écrit à l’adresse générique paie@ : « envoyez-moi toutes mes fiches 2019-2023 sur gmail. » Le junior ne zippe pas. Il vérifie l’identité selon procédure (demande écrite, éléments d’identité, canal prévu pour les anciens), s’appuie sur la GED, limite aux bulletins de l’intéressé, trace. S’il n’y a pas de procédure, il escalade. Le coffre-fort de l’époque, s’il existe encore, est le premier réflexe.",
      extra: [
        code(`DEMANDES DE DOCUMENTS — RÉPONSES TYPES (fond, à adapter au process)

1. Duplicata bulletin du mois M
   Canal : coffre / remise prévue. Identité vérifiée. Pas de Gmail improvisé.

2. Attestation de salaire pour un bailleur
   Projet à partir des bulletins. Visa habilité. Copie au dossier.
   Interdit : majorer le net, omettre une saisie sur salaire si le modèle l'exige
   avec exactitude, dater faux.

3. Certificat de travail
   RH / habilité. Dates, emploi, rien de médical, rien de disciplinaire improvisé.

4. « Envoyez le bulletin de Léa à son manager »
   Non, hors habilitation et hors finalité. Le manager n'a pas le net de Léa.`),
      ],
      erreurs:
        "Attestation au crayon. Bulletin envoyé à un homonyme. Certificat antidaté. Conserver les pièces d’identité dans un Drive ouvert. Délivrer un solde de tout compte non relu. Scanner un RIB et le laisser sur le bureau.",
      particuliers:
        "Décès, tutelle, créancier saisissant : destinataires particuliers, circuit responsable. Contrôle URSSAF : on sort les pièces demandées, on ne « complète » pas un dossier a posteriori par des pièces fictives. Cabinet : le client n’est pas propriétaire du dossier médical ; il l’est de ses pièces employeur selon contrat de mission.",
      exercice:
        "Un salarié demande par SMS : attestation de salaire à 3 200 € net « pour le dossier logement », alors que le net du dernier bulletin est 2 480 €. Rédigez votre réponse professionnelle (fond) et dites ce que vous archivez.",
      correction:
        "Réponse : vous pouvez établir une attestation conforme aux bulletins (montant exact, période, nature du contrat). Vous ne pouvez pas attester 3 200 €. Proposez le canal habituel (pas SMS), un modèle visé, un rendez-vous si besoin d’expliquer brut/net. Archivez : la demande, votre refus de majorer, l’attestation exacte si elle est émise, le visa. Un chiffre faux pour un bailleur est une fausse déclaration, pas un geste social.",
    }),
    pack({
      title: "Organismes, visites médicales et changements de situation",
      description:
        "Tenir les affiliations et les événements de vie qui déplacent le bulletin.",
      minutes: 22,
      objectifs:
        "Vous savez quels organismes interviennent, ce que la visite médicale produit comme fait administratif, et comment traiter un changement de situation avec une date d’effet.",
      theorie:
        "L’employeur n’est pas seul face au salarié. URSSAF (cotisations du régime général), caisses de retraite complémentaire Agirc-Arrco, organismes de prévoyance et de complémentaire santé, service de prévention et de santé au travail, DGFiP via le PAS, assurance maladie pour les IJ : chaque organisme a un canal, souvent la DSN, parfois un adhésion ou un contrat collectif. L’administration du personnel s’assure que le salarié est affilié, que les options (ayants droit mutuelle, dispense éventuelle selon règles du contrat) sont documentées, que les dates d’adhésion et de radiation sont celles du contrat et de la couverture, pas celles d’un oubli de clôture.\n\nLa visite médicale n’est pas un paramètre de cotisation. C’est une obligation de santé au travail. Le gestionnaire note la date, le type (visite d’information et de prévention, reprise après certains arrêts, autre suivi selon le suivi individuel), et la consigne administrative transmise par RH (apte, aménagement, inaptitude en cours de procédure). Il ne discute pas le fond médical. Un salarié sans visite à jour : alerte RH, pas une retenue inventée sur le bulletin. Une inaptitude : circuit RH et, souvent, juriste ; la paie applique les consignes de maintien, de reclassement, de rupture le moment venu, elle ne les décide pas.\n\nLes changements de situation sont des faits datés. Adresse : impact courrier, parfois établissement. RIB : impact paiement, contrôle titulaire. Nom : pièce d’état civil, DSN. Situation familiale et ayants droit mutuelle : pièce, date d’effet du contrat collectif, pas un « on ajoute le conjoint pour ce mois ». RQTH : pièce, confidentialité renforcée, éventuels aménagements RH — la paie n’étiquette pas le salarié dans un libellé de bulletin. Temps de travail, coefficient, lieu : avenant. Titre de séjour : date de validité, alerte avant échéance, pas d’interprétation junior du droit des étrangers.\n\nChaque changement peut produire un signalement DSN, un recalcul, une affiliation. Le junior enregistre, date, classe, alerte. Il ne « laisse courir jusqu’à la prochaine DSN annuelle ».",
      methode:
        "Fiche événement :\n1. Fait (quoi).\n2. Date de l’événement et date de connaissance par l’entreprise.\n3. Pièce.\n4. Organisme / outil impacté (paie, mutuelle, DSN, médecine du travail).\n5. Qui décide (RH, responsable paie, habilité mutuelle).\n6. Date d’effet paie.\n7. Trace dans le dossier.\nPour une visite : relance avant l’échéance selon le planning santé au travail, jamais un commentaire médical. Pour un RIB : double contrôle (IBAN, titulaire) avant le fichier SEPA.",
      noteText:
        "Limite : un junior n’inscrit pas un salarié à une mutuelle hors des règles du contrat collectif, n’interprète pas un avis d’inaptitude, ne conseille pas un titre de séjour, ne choisit pas l’organisme de retraite. AT/MP, taux, caisse : notification Carsat, pas un taux « du voisin ».",
      exemple:
        "Industrie, 60 salariés. Changement d’adresse d’un salarié le 3 janvier, mail informal. Le 28, le bulletin coffre part, mais un duplicata papier part à l’ancienne adresse. Incident de données. La bonne pratique : formulaire de changement, pièce, mise à jour SIRH et paie avant édition, confirmation au salarié. L’adresse n’est pas un champ cosmétique.",
      extra: [
        code(`CHANGEMENTS DE SITUATION — IMPACTS PAIE (repères)

Événement              Pièce              Date d'effet        Vigilance junior
Adresse                justificatif       dès connaissance    canal bulletin
RIB                    RIB titulaire      avant SEPA          pas de compte tiers
Nom                    état civil         pièce               DSN
Ayant droit mutuelle   contrat collectif  règle du contrat    pas « ce mois par faveur »
Temps de travail       avenant            date d'effet écrite pas l'oral manager
Titre de séjour        titre              validité            escalade RH, pas d'avis visa
Visite reprise         consigne RH        retour             pas de diagnostic en paie
RQTH                   justificatif       confidentialité     pas de libellé bulletin`),
      ],
      erreurs:
        "Oublier la radiation mutuelle à la sortie. Laisser un RIB « on verra au virement rejeté ». Noter « dépressif, visite à faire » dans le logiciel. Appliquer un taux AT d’un autre SIRET. Affilier d’office un ayant droit. Ignorer l’expiration d’un titre de séjour jusqu’au contrôle.",
      particuliers:
        "Multi-établissements : changement de SIRET = parfois taux AT, parfois CCN, toujours DSN. Salarié étranger : pièces et alertes de dates, conseil hors autonomie. Décès : circuit RH, organismes, solde, confidentialité familiale. Maladie professionnelle et AT : signalements, pas un traitement « comme une CP ».",
      exercice:
        "Le 12 janvier 2026, trois mails : (1) « ajoutez mon conjoint à la mutuelle à compter d’aujourd’hui » sans pièce ; (2) avis de visite de reprise « aménagement temporaire, pas de port de charge » ; (3) nouveau RIB au nom d’une association. Que faites-vous, seul, et que n’inventez-vous pas ?",
      correction:
        "1. Seul : transmettre le formulaire et les règles du contrat collectif ; pas d’affiliation improvisée ; date d’effet = règle du contrat, pas « aujourd’hui » par mail. 2. Transmettre à RH / manager pour l’aménagement du poste ; en paie, aucun code « maladie » inventé ; pas de détail médical dans le commentaire. 3. Ne pas remplacer le RIB salarié par un compte association sans mandat et validation ; risque de paiement indu et de fraude. Escalade responsable. Vous n’inventez ni la date mutuelle, ni une retenue, ni un virement « solidaire ».",
    }),
    pack({
      title: "RGPD, CNIL, habilitations et durées de conservation",
      description:
        "Traiter les données RH et de paie comme un traitement réglementé, pas comme un fichier de travail.",
      minutes: 24,
      objectifs:
        "Vous appliquez finalité, minimisation, habilitation, sécurité et conservation ; vous savez où chercher une durée (CNIL, Code du travail) sans l’inventer ; vous savez réagir à un incident.",
      theorie:
        "Les données de paie et d’administration du personnel sont des données personnelles, parfois des données sensibles (santé, saisie, coordonnées bancaires, NIR, impôt). Le RGPD impose une finalité déterminée, une base légale (souvent l’obligation légale de payer et de déclarer, le contrat de travail, l’intérêt légitime encadré), une minimisation, une exactitude, une durée limitée, une sécurité, des droits des personnes (accès, rectification, etc. selon le cas), et des habilitations. La CNIL publie des fiches et des durées de référence pour les données RH (source legal-sources : RGPD-CNIL-RH). Un junior ne « connaît pas le RGPD par cœur » : il applique les gestes, et il lit la procédure interne et la fiche CNIL avant d’inventer une durée.\n\nHabilitations : le principe est le besoin d’en connaître. Paie voit ce qui est nécessaire au bulletin et à la DSN. RH voit le contrat et le dossier administratif. Le manager voit le temps de travail et les absences de son équipe selon paramétrage, pas le taux PAS, pas la saisie, pas le net d’un collègue. L’informatique habilite ; la paie signale les trop-pleins (un stagiaire RH qui a tous les bulletins). Les extraits Excel « pour travailler à la maison » sont un transfert hors cadre s’ils sortent du SI.\n\nConservation : L. 3243-4 impose à l’employeur de conserver un double du bulletin pendant cinq ans. Ce délai est une obligation légale, pas une « habitude CNIL ». Pour le reste (CV d’un candidat non embauché, pièces d’identité, DSN, contrats), vous consultez le référentiel CNIL en vigueur et les textes propres à chaque pièce. Vous ne retenez pas « 10 ans pour tout » ni « on efface à la sortie ». Un dossier de sortie se clôt, certaines pièces se conservent le temps du délai applicable, puis destruction ou archivage conforme. Inventer un délai est une erreur ; ignorer qu’il en existe un aussi.\n\nSécurité : canaux (coffre, HTTPS, pas Gmail personnel), écrans, impression, télétravail, prestataires (clauses, pas un envoi à un « copain informaticien »). NIR : finalités strictes. Taux PAS : confidentialité fiscale. Santé : cloisonnement. En cas de violation (mauvais destinataire, perte de clé USB, ransomware), la procédure interne (DPO / responsable, CNIL si le seuil de notification est atteint) s’applique : un junior n’évalue pas seul s’il faut notifier, il alerte immédiatement.",
      methode:
        "Gestes quotidiens :\n1. Ouvrir uniquement les dossiers de votre portefeuille.\n2. Extraire le minimum pour la tâche (pas « tout l’onglet »).\n3. Utiliser l’outil prévu, pas une messagerie parallèle.\n4. Verrouiller la session, ramasser les impressions.\n5. Pour une durée : lire L. 3243-4 pour les bulletins ; ouvrir la fiche CNIL / procédure interne pour le reste ; noter la source.\n6. Demande d’accès d’un salarié à ses données : circuit DPO / RH, pas un zip improvisé.\n7. Incident : cesser la diffusion, alerter, tracer, ne pas effacer les preuves.",
      noteText:
        "Obligation légale : RGPD, L. 3243-1 et L. 3243-4, secret des rémunérations en pratique professionnelle. Un junior n’est pas DPO. Il est tenu de ne pas divulguer, de ne pas conserver hors délai par facilité, et d’escalader un incident. Ne pas inventer un délai CNIL de mémoire en entretien ni en poste.",
      exemple:
        "Cabinet. Un collaborateur copie 40 bulletins clients sur une clé pour « finir le week-end ». La clé reste dans un train. Ce n’est pas un accident de trajet : c’est une violation de données de plusieurs employeurs. Le responsable et le DPO du cabinet (et souvent les clients) doivent être informés. Le junior qui « voulait bien faire » a créé un risque de contrôle, de résiliation, de notification. Le travail de clôture se fait dans le SI, ou selon accès VPN prévu, pas sur une clé personnelle.",
      extra: [
        code(`MÉTHODE — TROUVER UNE DURÉE DE CONSERVATION (sans l'inventer)

1. Quelle donnée ? (bulletin, contrat, DPAE, pièce d'identité, CV, DSN, RIB)
2. Quelle obligation spécifique ? Ex. bulletin : L. 3243-4 → 5 ans (double employeur).
3. Quelle fiche CNIL / procédure interne pour cette catégorie ?
   Source : https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees
4. Quelle date de départ (fin de contrat, paiement, clôture exercice) ?
5. Qui détruit / archive, comment, trace ?
6. En cas de litige en cours : ne pas détruire ; demander au responsable.

Interdit : « on garde 10 ans, c'est plus sûr » sans texte.`),
      ],
      erreurs:
        "Envoyer un bulletin en clair à une liste. Laisser un stagiaire avec le mot de passe commun. Publier un net dans un ticket d’incident trop largement copié. Effacer un fichier après une erreur de destinataire pour « que ça n’existe plus ». Recopier le NIR dans un chat. Promettre à un salarié « on supprime tout demain » alors qu’une obligation de conservation court.",
      particuliers:
        "Sous-traitance paie : le cabinet est souvent sous-traitant RGPD, le client responsable de traitement — les flux suivent le contrat. Contrôle social : communication des pièces au service de contrôle selon cadre, pas un dump de GED. Homonymie : double validation d’identité. Télétravail et open space : casque, écran, pas de visio haut-parleur sur un net.",
      exercice:
        "Vous découvrez qu’un tableau Excel « suivi paie janvier 2026 » contenant NIR, IBAN et taux PAS est stocké sur un Teams ouvert à tout le service commercial. Décrivez les actions de l’heure, de la journée, et ce que vous ne faites pas. Citez au moins une durée que vous connaissez par un article, et une durée que vous iriez vérifier.",
      correction:
        "Dans l’heure : signaler au responsable paie et au relais DPO, restreindre les droits du fichier, cesser les transferts, ne pas faire suivre le fichier « pour info ». Dans la journée : tracer qui a eu accès si l’outil le permet, évaluer avec le DPO (notification ? information des personnes ?), recréer un suivi dans un espace habilité, analyser la cause (export trop large). Ne pas : blâmer publiquement, effacer les journaux, mentir. Durée connue par article : double des bulletins, cinq ans (L. 3243-4). Durée à vérifier : conservation du NIR, des RIB, du tableau lui-même — fiche CNIL et procédure, pas un chiffre inventé.",
    }),
    quizLesson({
      title: "Quiz — Administration du personnel",
      description: "Dossiers, contrats, absences, documents, organismes, RGPD.",
      passing_score: 70,
      questions: [
        q({
          question: "Que fait un gestionnaire de paie junior si le contrat n’est pas encore signé et que l’entrée est lundi ?",
          options: [
            "A. Il crée un bulletin définitif « comme les autres » pour ne pas rater la clôture",
            "B. Il refuse de produire un bulletin définitif sans contrat et DPAE ; il prépare le dossier et alerte",
            "C. Il invente un CDD d’un mois pour débloquer le logiciel",
            "D. Il paie un acompte de 2 000 € de sa propre initiative",
          ],
          correct: 1,
          explanation:
            "Sans contrat et sans DPAE, le premier bulletin n’a pas de base. Préparer n’est pas clôturer. Inventer un CDD ou un acompte sort de l’autonomie.",
        }),
        q({
          question: "Un commentaire de logiciel « reprise après dépression, visiter le 15 » est :",
          options: [
            "A. Une bonne traçabilité médicale",
            "B. Une donnée de santé hors dossier paie ; on trace la date de visite et la consigne RH, pas le diagnostic",
            "C. Obligatoire pour la DSN",
            "D. Utile pour que le manager comprenne le net",
          ],
          correct: 1,
          explanation:
            "Le dossier médical est cloisonné. La paie enregistre des faits administratifs, pas des diagnostics. Le manager n’a pas à lire cela dans un export.",
        }),
        q({
          question: "Un avenant de temps partiel non signé, mail du manager « c’est déjà le cas » :",
          options: [
            "A. Vous réduisez le brut immédiatement",
            "B. Vous attendez l’écrit à date d’effet ; vous n’appliquez pas un oral comme paramètre",
            "C. Vous transformez l’écart en heures supplémentaires négatives",
            "D. Vous supprimez la mutuelle pour compenser",
          ],
          correct: 1,
          explanation:
            "Le contrat écrit commande le paramètre. Un temps partiel de fait sans avenant est un risque, pas une simplification.",
        }),
        q({
          question: "L’article L. 3243-4 du Code du travail impose notamment :",
          options: [
            "A. De détruire tous les bulletins à la sortie du salarié",
            "B. À l’employeur de conserver un double du bulletin pendant cinq ans",
            "C. D’envoyer les bulletins sur Gmail",
            "D. Un délai CNIL de dix ans pour toutes les données RH",
          ],
          correct: 1,
          explanation:
            "Cinq ans pour le double du bulletin : obligation légale. Les autres durées se lisent CNIL / textes, on ne les invente pas. La destruction à la sortie serait contraire à cette obligation.",
        }),
        q({
          question: "Un RIB au nom du conjoint, sans mandat :",
          options: [
            "A. Est pratique pour la famille ; on l’utilise",
            "B. Ne doit pas servir au virement salarial ; on exige un RIB du salarié ou un cadre validé",
            "C. Permet d’éviter les saisies sur salaire",
            "D. Est exigé par l’URSSAF",
          ],
          correct: 1,
          explanation:
            "Le salaire se verse au salarié, sauf cadre juridique clair. Un compte tiers expose à l’erreur, à la fraude et à l’insaisissabilité détournée.",
        }),
        q({
          question: "La DPAE (L. 1221-10) :",
          options: [
            "A. Peut attendre le premier bulletin « s’il n’y a pas le temps »",
            "B. Est une obligation d’embauche à vérifier dans le dossier ; un junior n’embauche pas sans trace",
            "C. Remplace le contrat de travail",
            "D. Est réservée aux cadres",
          ],
          correct: 1,
          explanation:
            "La DPAE précède l’embauche. Ce n’est ni un contrat, ni un luxe, ni un paramètre de statut.",
        }),
        q({
          question: "Un manager demande le bulletin de Léa « pour préparer son entretien » :",
          options: [
            "A. Vous l’envoyez : le N+1 a tous les droits",
            "B. Vous refusez le net et le PAS hors habilitation / finalité ; le temps de travail se gère dans l’outil manager",
            "C. Vous envoyez uniquement le taux PAS",
            "D. Vous affichez le bulletin en open space",
          ],
          correct: 1,
          explanation:
            "Habilitation et finalité. Un entretien n’ouvre pas le droit au bulletin complet. Le PAS est particulièrement confidentiel.",
        }),
        q({
          question: "Pour une durée de conservation autre que le double du bulletin, la méthode correcte est :",
          options: [
            "A. Recopier le délai du précédent employeur",
            "B. Consulter le référentiel CNIL et les textes applicables, noter la source, appliquer la procédure interne",
            "C. Garder 10 ans par sécurité",
            "D. Effacer dès que le salarié le demande, même en cours de délai légal",
          ],
          correct: 1,
          explanation:
            "La CNIL et les textes primaires. Ni le souvenir, ni le « plus sûr », ni la suppression contraire à une obligation de conservation.",
        }),
        q({
          question: "Une absence « il n’était pas là » sans pièce ni qualification :",
          options: [
            "A. Se saisit en CP pour vider le compteur",
            "B. Bloque le gel : pas de rubrique tant que la nature n’est pas établie",
            "C. Se saisit en maladie pour déclencher des IJ",
            "D. Se ignore jusqu’à la DSN annuelle",
          ],
          correct: 1,
          explanation:
            "Pas de qualification, pas de rubrique. CP ou maladie inventés sont des fautes. La DSN annuelle ne rattrape pas un mois faux.",
        }),
        q({
          question: "Un avis d’inaptitude arrive à la paie. Le junior :",
          options: [
            "A. Licencie dans le logiciel le jour même",
            "B. Transmet à RH, n’interprète pas le médical, applique les consignes de paie visées, n’invente pas une rupture",
            "C. Réduit le salaire de 50 %",
            "D. Informe l’équipe par e-mail collectif du diagnostic",
          ],
          correct: 1,
          explanation:
            "L’inaptitude est un circuit RH / santé au travail / éventuellement juriste. La paie exécute des consignes, elle ne décide pas d’une rupture et ne divulgue rien.",
        }),
      ],
    }),
  ],
};
