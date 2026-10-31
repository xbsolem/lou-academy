import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 15,
  title: "Entrée d'un salarié : dossier, DPAE, paramétrage et premier bulletin",
  description:
    "Préparer une embauche jusqu'au premier bulletin prorata : pièces, DPAE, contrat, classification, rémunération, temps de travail, mutuelle, paramétrage, contrôles et coordination RH.",
  lessons: [
    pack({
      title: "Le dossier d'entrée : ce dont la paie a réellement besoin",
      description:
        "Identifier les informations nécessaires à l'affiliation, au bulletin et à la DSN, sans constituer un dossier excessif.",
      minutes: 20,
      objectifs:
        "À la fin de cette leçon, vous savez lister les données indispensables à l'ouverture d'un dossier paie, distinguer ce qui relève de l'obligation, de la politique interne et du RGPD, et relancer une pièce manquante sans bloquer ni harceler.",
      theorie:
        "L'entrée d'un salarié n'est pas un clic dans le logiciel. C'est la transformation d'une décision d'embauche en un dossier social exploitable : identité, contrat, temps de travail, rémunération, organismes, dates. Si une seule de ces briques est fausse, le premier bulletin, la DPAE et la DSN le seront.\n\nLe dossier d'entrée sert trois finalités distinctes. Identifier la personne (état civil, NIR s'il est déjà immatriculé, adresse, coordonnées). Payer et déclarer (RIB, nature du contrat, dates, classification, éléments de rémunération, temps de travail, établissement, convention collective, affiliations). Intégrer (mutuelle, prévoyance, visites de santé au travail selon le circuit de l'entreprise). Ces finalités ne justifient pas une enquête de vie privée. Le RGPD et la doctrine CNIL sur les données RH imposent minimisation, finalité, habilitations et conservation (legal-sources : RGPD-CNIL-RH). Un justificatif d'identité, un RIB, les éléments nécessaires à la DPAE et au contrat sont du circuit RH / paie. Un questionnaire familial « pour la mutuelle » recopié dans un tableur partagé, une copie de carnet de santé, un relevé de comptes : hors sujet, hors habilitation junior.\n\nLe NIR n'est pas une donnée anodine. Il sert aux affiliations et à la DSN. Vous le saisissez dans l'outil prévu, vous ne l'envoyez pas par messagerie personnelle, vous ne le lisez pas à voix haute. En l'absence de NIR (première immatriculation, étranger, délai), vous suivez le process organisme / DPAE : vous n'inventez pas un numéro.\n\nLe junior n'invente pas la liste des pièces. Il applique la checklist de l'employeur, il signale ce qui manque pour payer ou déclarer, et il refuse d'ajouter des pièces « par prudence ». Un CV n'est pas une pièce de paie. Un diplôme ne l'est que s'il conditionne un élément de rémunération ou une habilitation déjà prévue. Un titre autorisant le travail, lorsqu'il est requis, circule dans le circuit habilité : vous ne l'interprétez pas seul comme un juriste du droit des étrangers.\n\nSans date d'embauche réelle, sans nature de contrat, sans établissement (SIRET), sans temps de travail, sans rémunération de base, vous n'ouvrez pas un dossier « on verra ». Vous ouvrez un ticket RH. La paie ne corrige pas un CDI à 35 h qui devrait être un forfait jours : elle alerte avant le premier calcul.",
      methode:
        "Dès l'annonce d'une embauche, dans cet ordre : 1) date et heure prévisibles d'embauche ; 2) établissement employeur (SIRET) ; 3) nature et durée du contrat, essai ; 4) classification et rémunération ; 5) temps de travail (durée, modalité, forfait éventuel) ; 6) identité / NIR / RIB ; 7) CCN et organismes déjà paramétrés pour l'établissement ; 8) mutuelle / prévoyance (affiliation, ayants droit selon process) ; 9) pièces manquantes avec date de relance. Vous ne lancez pas le calcul pour « voir si ça passe ».",
      noteText:
        "Obligation : données pertinentes, DPAE avant mise au travail, bulletin exact. Politique interne : liste des pièces, outil de dépôt, qui saisit. Bonne pratique : un canal sécurisé, une checklist datée. Un junior ne stocke pas de NIR, de RIB ou de bulletin sur une clé USB personnelle (RGPD-CNIL-RH).",
      exemple:
        "PME de 22 salariés, services, moteur de paie générique. RH envoie à Lina, gestionnaire junior, un mail : « Thomas commence lundi, voilà son CV et son portable. » Sans contrat, sans RIB, sans classification, sans SIRET d'établissement (il y en a deux). Lina n'ouvre pas un salarié « Thomas » avec un brut inventé. Elle renvoie une checklist, copie le responsable paie, et indique la date limite pour que le premier bulletin existe. Le lundi arrive : le contrat n'est pas signé. Elle n'antidate pas une DPAE. Elle escalade.",
      extra: [
        code(`CHECKLIST DOSSIER PAIE — ENTRÉE (à adapter à la liste RH, ne pas allonger)

Identité et paiement
[ ] Nom, prénoms, sexe, date et lieu de naissance
[ ] NIR s'il est déjà attribué (sinon process DPAE / immatriculation)
[ ] Adresse, coordonnées professionnelles prévues
[ ] RIB du salarié (canal sécurisé)

Contrat et établissement
[ ] Date et heure prévisibles d'embauche
[ ] SIRET de l'établissement d'affectation
[ ] Nature (CDI, CDD, etc.), durée, motif si CDD, essai
[ ] Classification (emploi, coefficient, statut) — saisie, pas invention
[ ] Rémunération de base et éléments contractuels (13e, primes, avantages)
[ ] Temps de travail : durée, répartition, forfait jours le cas échéant
[ ] CCN applicable au dossier (déjà paramétrée ou à faire paramétrer)

Organismes et protection sociale
[ ] URSSAF / MSA selon régime de l'établissement
[ ] Retraite complémentaire (contrat entreprise déjà connu)
[ ] Mutuelle / prévoyance : affiliation, dispense éventuelle documentée
[ ] Médecine du travail : circuit RH, pas un dossier médical paie

Interdit junior
[ ] Inventer un coefficient « comme les autres »
[ ] Copier le dossier d'un homonyme
[ ] Demander un extrait de casier ou une photo hors liste RH
[ ] Ranger les pièces dans une messagerie personnelle`),
      ],
      erreurs:
        "Ouvrir le dossier avec le seul prénom du mail manager. Recopier le RIB d'un collègue « le temps que ça arrive ». Saisir 151,67 h par défaut alors que le contrat est à 28 h. Demander la situation familiale dans un tableur partagé. Traiter le NIR comme un identifiant interne de badgeuse.",
      particuliers:
        "Multi-établissements : l'affectation SIRET commande le taux AT/MP notifié, parfois la CCN, parfois le versement mobilité. Intérim et portage : l'employeur social n'est pas toujours le donneur d'ordre ; vous identifiez le déclarant. Mineur, extra, CDD d'usage : le contrat porte des mentions spécifiques ; vous ne les inventez pas. Première embauche de l'entreprise : immatriculation employeur via DPAE, hors autonomie junior isolée.",
      exercice:
        "Vous recevez : pièce d'identité, CV, RIB, un message « CDI 2 100 €, 35 h, commence le 13 janvier 2026 ». Listez (1) ce qui suffit pour préparer le dossier ; (2) ce qui manque absolument avant DPAE et premier bulletin ; (3) ce que vous ne demandez pas.",
      correction:
        "1. Suffisant pour commencer : identité, RIB, brut, durée 35 h, date. 2. Manque : SIRET d'affectation, nature exacte et essai, classification, heure d'embauche pour la DPAE, CCN déjà connue ou confirmation, affiliation mutuelle, NIR ou process d'immatriculation, qui a signé le contrat. 3. Vous ne demandez pas : nombre d'enfants « au cas où », photo, relevé de comptes, casier, dossier médical. Pourquoi : sans établissement et sans contrat, la DPAE et le bulletin sont des approximations. Le CV n'entre pas dans le moteur de paie.",
    }),
    pack({
      title: "La DPAE : obligation de l'employeur, geste de coordination",
      description:
        "Situer L. 1221-10 et la fiche Service-Public F23107, et coordonner la déclaration sans vous substituer au déclarant habilité.",
      minutes: 18,
      objectifs:
        "Vous savez ce qu'est la DPAE, quand elle doit partir, quelles informations elle porte, et ce qu'un junior prépare, contrôle ou escalade.",
      theorie:
        "La déclaration préalable à l'embauche (DPAE) est une obligation de l'employeur. L'article L. 1221-10 du Code du travail pose le principe. La fiche pratique Service-Public F23107 (legal-sources : L1221-10) décrit le circuit opérationnel : déclaration auprès de l'organisme de Sécurité sociale compétent (URSSAF ou MSA), avant la prise de fonction ou le début de la période d'essai.\n\nSur le calendrier, vous retenez le libellé institutionnel, pas une rumeur de service. Selon Service-Public F23107 et l'URSSAF, la déclaration est transmise avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les huit jours précédant la date d'embauche. En d'autres termes : elle est préalable à la mise au travail, et elle ne se dépose pas des semaines à l'avance « pour être tranquille ». Le canal (téléprocédure, exceptionnellement autre modalité prévue par l'organisme) et le justificatif de dépôt se conservent. Un junior ne mémorise pas un jour de clôture inventé ; il applique F23107 et le process interne.\n\nLa DPAE n'est pas un acte isolé du gestionnaire de paie junior. Elle coordonne RH, paie et, le cas échéant, le prestataire. Elle permet en une démarche des formalités d'embauche (immatriculation employeur si besoin, affiliation, information du service de santé au travail, etc., selon le contenu officiel de la déclaration). Elle ne remplace pas le contrat. Elle ne remplace pas le bulletin. Elle ne « crée » pas le salarié dans le moteur de paie : le paramétrage reste un acte distinct, nourri par les mêmes dates.\n\nDéclarer après la mise au travail, ou ne pas déclarer, expose l'employeur. Ce n'est pas au junior d'inventer une sanction pénale de mémoire. C'est à lui de refuser de « lancer la paie sans DPAE, on régularisera ». Une embauche du jour pour le jour est possible dans l'urgence opérationnelle, mais la déclaration reste préalable : le process doit permettre un dépôt avant la prise de poste, y compris le matin même par téléprocédure, pas un oubli le 10 du mois.\n\nLes données de la DPAE (identité, date et heure d'embauche, nature et durée du contrat, essai pour les cas prévus par la fiche, SIRET, service de santé au travail) doivent coller au contrat. Un décalage d'une journée entre DPAE et contrat est une anomalie à traiter, pas un détail.",
      methode:
        "1) RH confirme date, heure, contrat, établissement. 2) Vérifier que l'on est dans la fenêtre « avant mise au travail / au plus tôt dans les 8 jours ». 3) Déclarant habilité dépose (souvent RH, responsable paie, expert-comptable). 4) Récupérer l'accusé et l'archiver au dossier. 5) Recopier dans le moteur de paie les mêmes dates, pas une date « plus simple ». 6) Si le J1 avance ou recule : corriger selon process organisme, ne pas laisser deux vérités.",
      noteText:
        "Obligation légale : L. 1221-10. Fiche pratique : Service-Public F23107 (legal-sources). Le junior coordonne et contrôle la cohérence des dates. Il ne se proclame pas déclarant URSSAF s'il n'est pas habilité. Il n'antidate pas.",
      exemple:
        "Industrie, 48 salariés. Entrée prévue le 13 janvier 2026 à 8 h. Le 2 janvier, un manager demande « fais la DPAE tout de suite, on n'y pensera plus ». Le 2 janvier est trop tôt au regard de la fenêtre des huit jours. Lina prépare le dossier, pose un rappel au 6 ou 7 janvier, et dépose (ou fait déposer) dans la fenêtre, avant le 13. Le 12 au soir, le contrat n'est pas signé mais la date tient : la DPAE part avant 8 h le 13, avec l'heure prévue. Le bulletin de janvier utilisera le 13, pas le 1er.",
      extra: [
        code(`FENÊTRE DPAE — À RETENIR SANS INVENTER

Source : L. 1221-10 + Service-Public F23107 / URSSAF (legal-sources L1221-10).

- Avant la prise de fonction ou le début de la période d'essai.
- Au plus tôt dans les 8 jours précédant la date d'embauche.
- Conservez l'accusé. Alignez contrat, DPAE, dossier paie, DSN.

Contrôle junior
DPAE        Contrat       Moteur paie      DSN
13/01 08:00 13/01         Entrée 13/01     Même date d'embauche
SIRET A     SIRET A       Établissement A  Même établissement

Anomalie : DPAE au 13, contrat au 15, paie au 1er. Une seule date vraie.`),
      ],
      erreurs:
        "Déposer le 20 décembre pour une embauche au 13 janvier « pour n'oublier personne ». Saisir l'entrée au 1er du mois « c'est plus simple pour le prorata ». Oublier l'heure. Faire la DPAE sur le mauvais SIRET. Croire que la DSN mensuelle de fin de mois remplace la DPAE.",
      particuliers:
        "Groupes multi-SIRET : la DPAE suit l'établissement d'affectation. CDD très court : la déclaration reste due. Titre emploi-service, TESA, dispositifs simplifiés : le canal change, l'obligation d'informer l'organisme avant mise au travail demeure dans le régime applicable. Un junior ne choisit pas le dispositif.",
      exercice:
        "Aujourd'hui 4 janvier 2026. Trois embauches : (A) 6 janvier 8 h ; (B) 20 janvier ; (C) 3 janvier déjà au travail, aucune DPAE. Pour chacune : que faites-vous ce matin, et qui décide ?",
      correction:
        "A. Dans la fenêtre des 8 jours et avant prise de poste si elle n'a pas commencé : dépôt immédiat par le déclarant habilité, accusé, paramétrage. B. Trop tôt pour déposer le 4 si l'on applique « au plus tôt dans les 8 jours » : préparer le dossier, planifier le dépôt dans la fenêtre, avant le 20. C. Mise au travail sans DPAE : urgence, responsable paie / RH, régularisation selon consignes organismes, pas un silence junior. Vous ne « rattrapez » pas en saisissant une date de DPAE au 2 janvier.",
    }),
    pack({
      title: "Contrat, classification, rémunération et temps de travail",
      description:
        "Lire le contrat comme une source de paie, et refuser de paramétrer ce qui n'est pas écrit.",
      minutes: 22,
      objectifs:
        "Vous savez extraire du contrat les champs qui commandent le bulletin, distinguer classification et intitulé d'offre, et alerter en cas d'écart avec la demande manager.",
      theorie:
        "Le moteur de paie n'interprète pas un avenant oral. Il applique ce qui est paramétré. Le paramétrage doit reproduire le contrat et, le cas échéant, la convention collective et les accords, pas l'enthousiasme du manager.\n\nLa nature du contrat (CDI, CDD, intérim côté agence, apprentissage, professionnalisation) commande des rubriques, des motifs de DSN, parfois une indemnité de fin. Vous recopiez la nature réelle. Un CDD « on verra pour le CDI » reste un CDD jusqu'à avenant.\n\nLa classification (emploi, niveau, échelon, coefficient, statut cadre / non-cadre) n'est pas un décor. Elle peut commander un minimum conventionnel, une retraite complémentaire, l'APEC pour les cadres, un forfait. Un junior ne « met cadre » parce que le salaire dépasse 3 000 €. Le statut cadre est une classification employeur / CCN, pas un seuil de net. Dans le moteur pédagogique LOU, l'option cadre déclenche notamment l'APEC : ce n'est correct que si le dossier l'est.\n\nLa rémunération de base (mensuelle, horaire, forfait) est le point d'entrée du brut. Les accessoires contractuels (13e mois, prime de vacances, avantage en nature, commission) doivent être identifiés dès l'entrée, même s'ils ne se versent pas au premier mois. Oublier un 13e mois contractuel à l'entrée, c'est créer une régularisation de décembre et une réclamation.\n\nLe temps de travail est une source de brut, d'absences et d'heures supplémentaires. Durée légale : 35 heures par semaine (L. 3121-27, legal-sources). Une durée conventionnelle peut être inférieure ; elle ne se confond pas avec la durée légale pour le déclenchement des heures supplémentaires légales (L. 3121-28). Un temps partiel a un horaire contractuel : les heures au-delà sont d'abord des heures complémentaires, pas des heures supplémentaires (L. 3123-9). Un forfait jours n'est pas un 151,67 h déguisé. Si le contrat dit forfait 218 jours, vous ne mensualisez pas 151,67 h « comme tout le monde ».\n\nLa période d'essai, sa durée, son renouvellement éventuel : vous les saisissez parce qu'ils existent au contrat, dans les limites du droit et de la CCN. Vous ne les inventez pas. Vous ne les prolongez pas par mail.",
      methode:
        "Sur le contrat signé (ou le projet validé RH), surlignez : dates, essai, nature, établissement, emploi, classification, rémunération, durée du travail, lieux, CCN mentionnée, avantages. Recopiez dans une fiche d'ouverture. Tout écart manager vs contrat : ticket RH, pas un « entre-deux » dans le bulletin. Contrôle : le brut de base paramétré = le brut contractuel, avant toute variable du mois.",
      noteText:
        "Obligation : appliquer le contrat et le Code du travail. Disposition conventionnelle : minima, essai, forfait — à lire, pas à inventer. Paramètre d'entreprise : rubriques, cycles. Hypothèse pédagogique : aucun minimum CCN chiffré dans cette leçon.",
      exemple:
        "ETI 280 personnes, CCN du dossier déjà paramétrée. Un manager écrit : « embauche ingénieure, 3 400 €, cadre, 35 h. » Le contrat RH sort en forfait jours. Si Lina paramètre 151,67 h et des HS, le premier bulletin sera faux et le forfait contourné. Elle saisit le forfait selon le contrat, alerte si la classification cadre n'est pas portée, et ne calcule pas d'heures supplémentaires légales de semaine sur un forfait jours.",
      extra: [
        code(`EXTRACTION CONTRAT → CHAMPS PAIE

Contrat                          Champ moteur                    Piège junior
CDI — essai 2 mois               Nature + date fin essai         Oublier l'essai
Emploi « opératrice » coeff. X   Classification (donnée RH)      Inventer le coeff.
2 100 € brut / mois              Salaire de base                 Saisir 2 100 net
35 h / semaine, lundi-vendredi   Cycle + horaire hebdo           39 h « comme l'atelier »
Établissement Nantes             SIRET / établissement           Siège Paris par défaut
Aucun 13e mois au contrat        Pas de rubrique 13e             Recopier le voisin
Forfait 218 jours                Modalité forfait jours          151,67 h + HS`),
      ],
      erreurs:
        "Paramétrer le net demandé par le candidat. Confondre coefficient et taux horaire. Appliquer 151,67 h à un 28 h. Activer l'APEC sur un non-cadre. Reporter l'essai à la date de fin de mois « plus propre ».",
      particuliers:
        "Avenant de modification dès le premier mois (horaire, salaire) : vous attendez l'avenant signé. Promesse d'embauche vs contrat : le juriste / RH qualifie ; la paie applique le document de travail en vigueur. Mobilité interne : ce n'est pas une première DPAE si le contrat se poursuit chez le même employeur, mais un changement d'affectation peut changer le SIRET.",
      exercice:
        "Contrat : CDI, embauche 13 janvier 2026, 2 100 € brut mensuel, 35 h, non-cadre, essai 2 mois, pas de 13e mois. Le manager ajoute : « mets-lui le statut cadre, on verra, et 4 h de samedi comme l'équipe. » Que paramétrez-vous ? Que refusez-vous ?",
      correction:
        "Vous paramétrez : CDI, entrée 13/01/2026, 2 100 €, 35 h, non-cadre, essai selon contrat. Vous refusez le statut cadre (classification RH, pas un souhait) et les 4 h de samedi (ni au contrat, ni validées comme HS du mois : variables à venir, pas un cycle inventé). Vous documentez la demande manager et transmettez à RH. Un premier bulletin n'est pas un avenant.",
    }),
    pack({
      title: "Mutuelle, prévoyance et affiliations de protection sociale",
      description:
        "Brancher le salarié sur les contrats collectifs du dossier, sans inventer un taux ni une dispense.",
      minutes: 18,
      objectifs:
        "Vous savez ce que l'entrée déclenche côté complémentaire santé et prévoyance, comment traiter une dispense, et comment étiqueter les montants du dossier pédagogique.",
      theorie:
        "Dès l'embauche, le salarié relevant d'un contrat collectif obligatoire doit en principe être affilié selon les règles de l'acte fondateur (décision unilatérale, accord, référendum) et du contrat d'assurance. La paie n'invente ni le taux, ni la répartition, ni les ayants droit. Elle applique le paramétrage entreprise et les pièces (bulletin d'adhésion, dispense).\n\nDans ce parcours, la mutuelle du dossier fictif est une HYPOTHÈSE pédagogique : 20,00 € salarial et 40,00 € patronal (rates-2026.json). Ce n'est pas un tarif national. L'AT/MP 1,50 % est également une hypothèse de dossier, pas un taux Carsat réel. Jusqu'au 31/12/2026, selon le BOSS relatif au montant net social, la part patronale de complémentaire santé n'est pas à intégrer d'office dans le MNS (legal-sources : BOSS-MNS). Vous ne « modernisez » pas le bulletin en anticipant un projet 2027.\n\nLa prévoyance (incapacité, invalidité, décès, parfois rente) suit un autre contrat, souvent avec des taux salariaux et patronaux distincts, parfois un taux cadre / non-cadre. Sans contrat et sans paramétrage validé, vous ne saisissez pas 1,50 % « comme dans mon ancien cabinet ».\n\nLes dispenses d'affiliation à la complémentaire santé existent dans un cadre réglementaire précis (couverture par ailleurs, CDD court, etc.). Le junior ne décide pas qu'un salarié « n'a pas besoin de mutuelle ». Il exige le justificatif prévu par le process, il le classe, il paramètre la dispense, il sait qu'une dispense mal documentée se paie en redressement et en salarié sans couverture.\n\nRetraite complémentaire Agirc-Arrco : l'affiliation suit le contrat de travail et le contrat de l'entreprise auprès de l'institution. Les taux 2026 sont des paramètres annuels (T1 7,87 % dont 3,15 % salarial / 4,72 % patronal, CEG, CET si rémunération > PMSS — rates-2026.json). À l'entrée, vous vérifiez que le profil (cadre / non-cadre, APEC) est le bon, pas que vous recalculez la table nationale.\n\nLe premier bulletin peut comporter une mutuelle proratisée ou non selon le contrat d'assurance et le paramétrage (mois civil entier, jour d'affiliation). Vous ne proratisez pas la mutuelle « comme le salaire » par analogie. Vous lisez la règle du dossier ou vous demandez.",
      methode:
        "1) Le contrat collectif est-il obligatoire pour cette population ? 2) Date d'affiliation (souvent la date d'embauche, parfois le 1er du mois — à lire). 3) Ayants droit : process RH, pas un champ libre. 4) Dispense : pièce, motif, durée. 5) Paramétrer les rubriques existantes, ne pas créer un montant. 6) Contrôler que le net du premier mois n'est pas écrasé par une mutuelle annuelle saisie en une fois.",
      noteText:
        "Mutuelle 20/40 € et AT/MP 1,50 % : HYPOTHÈSES de dossier fictif (rates-2026.json). Taux Agirc-Arrco 2026 : paramètre annuel sourcé. Dispense : cadre réglementaire + pièce, jamais un arrangement oral.",
      exemple:
        "Cabinet, dossier client 18 salariés. Nouvelle embauche le 13 janvier. Le client dit : « elle a déjà la mutuelle de son mari, enlève la ligne. » Sans justificatif de dispense prévu par le contrat, Lina n'enlève rien. Elle envoie le formulaire de dispense, copie le responsable de dossier, et laisse l'affiliation le temps de la pièce. Un net un peu plus faible est préférable à une non-affiliation indue.",
      extra: [
        code(`ENTRÉE — ORGANISMES (logique, pas des numéros de contrats inventés)

URSSAF / MSA     : régime de l'établissement (déjà paramétré)
AT/MP            : taux notifié Carsat de l'établissement — jamais un taux « France »
Agirc-Arrco      : contrat entreprise, profil cadre / non-cadre, APEC si cadre
Mutuelle         : contrat collectif + affiliation / dispense
Prévoyance       : contrat distinct, souvent statutaire
Médecine travail : circuit RH / DPAE, pas une rubrique de net

Dossier pédagogique LOU (si activé)
Mutuelle salarial   20,00 €   HYPOTHÈSE
Mutuelle patronal   40,00 €   HYPOTHÈSE
AT/MP               1,50 %    HYPOTHÈSE
MNS 2026            sans intégration d'office de la part patronale mutuelle (BOSS)`),
      ],
      erreurs:
        "Proratiser la mutuelle comme 19/31 sans règle. Oublier l'affiliation et « rattraper » en décembre. Activer la prévoyance cadre sur un non-cadre. Copier le taux AT d'un autre établissement. Intégrer 40 € patronaux dans le MNS « pour 2027 ».",
      particuliers:
        "Ayants droit, enfant à naître, conjoint déjà couvert : pièces et dates, pas d'anticipation. Portabilité d'un précédent employeur : cela n'exonère pas automatiquement le nouvel employeur. Multi-employeurs : coordination des contrats, hors improvisation junior. Apprentissage : vérifier le régime du dossier, ne pas recopier un salarié classique.",
      exercice:
        "Entrée 13 janvier 2026, 2 100 €, mutuelle hypothèse 20/40 € si on l'active. Le salarié dit : « je refuse la mutuelle. » Que faites-vous avant le calcul du premier bulletin ?",
      correction:
        "Vous n'inactivez pas sur parole. Vous demandez le motif et le justificatif prévus par le contrat collectif / la procédure. Sans pièce : affiliation selon le paramétrage obligatoire. Avec pièce valide : dispense tracée, date d'effet. Vous n'inventez pas un « mois blanc ». Les 20/40 € restent une hypothèse de dossier s'ils sont activés ; ils ne deviennent pas un droit négocié par mail.",
    }),
    pack({
      title: "Paramétrer le salarié dans le moteur de paie",
      description:
        "Traduire le dossier en fiches, rubriques et dates, puis contrôler avant le premier calcul.",
      minutes: 20,
      objectifs:
        "Vous savez dérouler une ouverture de dossier dans un logiciel générique, distinguer ce qui est déjà paramétré au niveau établissement et ce qui est propre au salarié, et figer une checklist d'entrée.",
      theorie:
        "Un logiciel de paie (Sage Paie, Silae, Cegid, ADP, moteur associé à SAP SuccessFactors, Workday, PayFit, Nibelis, ou le simulateur pédagogique LOU) n'est pas un clone de l'autre. Tous partagent une logique : un dossier employeur (SIRET, effectif, organismes, taux AT, CCN, rubriques), puis un dossier salarié (identité, contrat, éléments). Le simulateur LOU n'est pas un logiciel commercial : il illustre le calcul, il ne certifie aucune maîtrise d'éditeur.\n\nCe qui se paramètre au niveau établissement ne se retape pas à chaque embauche : PMSS, taux URSSAF de la période, contrat de mutuelle, caisses. Ce qui se paramètre au salarié : dates, nature de contrat, classification, rémunération, cycle, profil (cadre, temps partiel, multiple employeurs le cas échéant), RIB, taux PAS lorsqu'il arrivera via DSN, affiliations individuelles.\n\nL'erreur classique d'entrée est la date. Saisir le 1er janvier pour une embauche du 13 produit un brut plein, des cotisations plein, un net injustifié, une DSN fausse. La deuxième erreur est le profil : copier un salarié « modèle » et oublier de retirer une prime, un véhicule, un taux AT d'un autre établissement. La troisième est l'effectif : le FNAL 0,10 % plafonné (< 50) ou 0,50 % (≥ 50) est un paramètre employeur 2026 (URSSAF). Un junior ne change pas l'effectif pour « faire baisser une ligne ».\n\nLe taux PAS n'est pas saisi au feeling à l'entrée. Il arrivera par le flux DSN / PASRAU. En attendant, le logiciel peut appliquer un taux neutre ou l'absence de taux selon paramétrage et situation. Vous n'inventez pas 8 % « comme son conjoint ».\n\nAprès saisie, un calcul d'essai n'est pas une clôture. Il sert à voir : brut attendu, prorata, mutuelle, nets aberrants, IR (PAS) à zéro ou non. Vous comparez à une feuille de contrôles, pas à votre souvenir du SMIC.",
      methode:
        "Ordre conseillé : établissement correct → identité → contrat et dates → rémunération et cycle → profil social (cadre, AT de l'établissement, mutuelle) → RIB → pièces jointes selon GED → calcul d'essai → checklist d'entrée cochée par un binôme sur les champs critiques (date, brut, SIRET, nature). Gel : rien n'est « provisoire » dans un dossier qui paiera.",
      extra: [
        code(`CHECKLIST PARAMÉTRAGE — PREMIER CALCUL

Établissement / SIRET                 [ ]
Date d'entrée = contrat = DPAE        [ ]
Nature de contrat et essai            [ ]
Classification (cadre oui/non réel)   [ ]
Salaire de base contractuel           [ ]
Cycle / horaire / forfait             [ ]
Mutuelle / prévoyance / dispense      [ ]
Pas de rubrique copiée d'un modèle    [ ]
Taux PAS : flux, pas invention        [ ]
RIB et mode de paiement               [ ]
Calcul d'essai : brut = prorata attendu
Anomalie nette (négatif, 0, x10) : blocage`),
      ],
      exemple:
        "CSP, 1 100 bulletins. On demande à Lina de « dupliquer » le dossier de Léa pour Thomas, même atelier. Léa a un véhicule de fonction et une prime d'ancienneté. Dupliquer sans purge crée deux avantages indus dès janvier. Lina duplique éventuellement la structure (établissement, cycle), puis reprend salaire, dates, identité, et contrôle l'absence de véhicule. Le gain de temps n'autorise pas le copier-coller social.",
      erreurs:
        "Laisser le taux PAS d'un dossier modèle. Oublier de changer l'établissement. Saisir le brut annuel dans le champ mensuel. Activer la RGDU sur un cas qui ne la demande pas, ou l'inverse. Croire que le logiciel « sait » la date d'entrée parce que la DPAE a été faite ailleurs.",
      particuliers:
        "Deux contrats chez le même employeur (temps partiels multiples) : deux dossiers ou un dossier multi-contrats selon l'outil ; plafonds et DSN à traiter avec le responsable. Changement d'éditeur en cours d'année : reprise des compteurs (CP, plafonds) sous revue. Logiciel SIRH + moteur : la date d'entrée doit être la même des deux côtés.",
      exercice:
        "Vous dupliquez un modèle « opérateur 35 h non-cadre 2 100 € ». Le nouvel embauché est à 28 h, même taux horaire équivalent. Que recalculez-vous avant de lancer le premier bulletin de janvier 2026 ?",
      correction:
        "Vous ne laissez pas 2 100 €. Un 28 h n'a pas le brut d'un 35 h. Vous partez du contrat (brut ou horaire écrit). Si le contrat donne un horaire et un taux, vous reconstituez le mensuel contractuel, vous changez le cycle, vous vérifiez SMIC horaire 12,02 € (01/01/2026–31/05/2026, URSSAF). Vous retirez toute rubrique du modèle (prime, mutuelle ayants droit). Calcul d'essai : brut prorata selon date d'entrée, pas 2 100 €.",
    }),
    pack({
      title: "Premier bulletin : prorata calendaire et cotisations sur le brut de période",
      description:
        "Calculer un brut d'entrée au 13 janvier 2026 puis appliquer le moteur de cotisations sur ce brut.",
      minutes: 28,
      objectifs:
        "Vous savez calculer un prorata calendaire pédagogique, le labelliser comme tel, et enchaîner les cotisations janvier 2026 sur le brut de période, sans plaquer un brut plein.",
      theorie:
        "Un salarié mensualisé entré en cours de mois n'a pas droit au salaire mensuel contractuel entier pour ce mois, sauf stipulation contraire. Il a droit à la rémunération correspondant à la période d'emploi. Plusieurs méthodes existent en pratique (calendaire, ouvrable, ouvré, horaire). La méthode n'est pas un gadget : elle doit être cohérente, tracée, et conforme au contrat, à la CCN et à l'usage de l'entreprise. Un junior n'invente pas une méthode plus favorable « pour que ça tombe rond ».\n\nDans cette formation, lorsqu'un cas d'entrée ou de sortie est chiffré sans autre précision, nous utilisons un prorata calendaire pédagogique : brut mensuel × nombre de jours calendaires de présence dans le mois / nombre de jours calendaires du mois. Ce n'est pas « la » méthode unique du droit français. C'est une convention de cours, étiquetée, reproductible. D'autres dossiers réels utilisent 30e, 26e, ou l'horaire réel. Vous demanderez la règle du dossier réel.\n\nCas travaillé. Période : janvier 2026, métropole, régime général. Entrée le 13 janvier 2026. Salaire mensuel contractuel : 2 100,00 € brut. Janvier a 31 jours calendaires. Présence calendaire du 13 au 31 inclus : 19 jours. Brut prorata = 2 100 × 19 / 31 = 1 287,096… arrondi au centime : 1 287,10 €. Formule du moteur : prorataCalendar(2100, 19, 31). Libellé : prorata calendaire pédagogique, pas une règle CCN.\n\nLes cotisations ne se calculent pas sur 2 100 € « parce que c'est son salaire ». Elles se calculent sur l'assiette de la période, ici le brut de 1 287,10 €, avec les taux de janvier 2026 (rates-2026.json), hors RGDU (taux plein maladie patronale 13 %, AF 5,25 %), effectif pédagogique < 50 (FNAL 0,10 % plafonné), non-cadre, sans mutuelle dans ce calcul de référence, AT/MP 1,50 % en HYPOTHÈSE de dossier. Le moteur computeBulletin({ brut: 1287.10 }) produit alors les lignes. Vous n'appliquez pas un pourcentage de 19/31 sur chaque cotisation d'un bulletin plein : vous recalculez à partir du brut de période (les plafonds et la CSG suivent ce brut).\n\nRésultat moteur pédagogique (janvier 2026, hypothèses ci-dessus) : brut 1 287,10 € ; cotisations salariales 268,23 € ; cotisations patronales 528,82 € ; net imposable 1 055,54 € ; net à payer 1 018,87 € (pas de PAS dans ce cas) ; montant net social 1 018,87 €. CSG/CRDS sur assiette abattue 1 264,58 € (98,25 % du brut, sous 4 PASS). Ces chiffres sont ceux du simulateur LOU, déterministes, sourcés. Un logiciel commercial peut arrondir une ligne différemment : l'écart de un centime se documente, il ne se « corrige » pas en silence sur le brut.",
      methode:
        "1) Confirmer la date d'entrée (contrat = DPAE = dossier). 2) Confirmer la méthode de prorata du dossier (ici : calendaire pédagogique). 3) Compter les jours : du 13 au 31 inclus = 19 ; mois = 31. 4) Brut = 2100 × 19 / 31 = 1287,10 €. 5) Lancer le calcul sur 1287,10 €, pas sur 2100. 6) Contrôler SMIC : le brut prorata peut être inférieur au SMIC mensuel 1 823,03 € sans être illégal, car la période n'est pas un mois complet ; contrôler le taux horaire contractuel ≥ 12,02 € (01/01/2026–31/05/2026). 7) Éditer le bulletin avec la date d'entrée visible.",
      noteText:
        "Prorata 19/31 : HYPOTHÈSE pédagogique calendaire. Taux : rates-2026.json, période janvier 2026. AT/MP 1,50 % : hypothèse de dossier. RGDU non appliquée. Ne pas présenter 1 287,10 € comme un net.",
      extra: [
        code(`PREMIER BULLETIN — ENTRÉE 13 JANVIER 2026
Période d'emploi : janvier 2026, métropole, régime général
Contrat : 2 100,00 € brut mensuel, 35 h, non-cadre
Méthode : prorata calendaire PÉDAGOGIQUE (19/31)
Source jours : 13 au 31 janvier 2026 inclus = 19 j / 31 j

  2 100,00 × 19 / 31 = 1 287,10 €  → brut de période

Moteur computeBulletin({ brut: 1287.10, cadre: false, headcount: 20 })
RGDU non appliquée. Mutuelle non activée. AT/MP 1,50 % = HYPOTHÈSE.

Brut                         1 287,10
Maladie patronale 13 %         167,32
CSA 0,30 %                       3,86
Vieillesse plaf. 6,90 % / 8,55 %  88,81 s / 110,05 p
Vieillesse déplaf. 0,40 % / 2,11 % 5,15 s / 27,16 p
AF 5,25 %                       67,57
AT/MP 1,50 % HYPOTHÈSE          19,31
FNAL <50 0,10 %                  1,29
Chômage 4,00 %                  51,48
AGS 0,25 %                       3,22
Dialogue social 0,016 %          0,21
Arrco T1 3,15 % / 4,72 %        40,54 s / 60,75 p
CEG T1 0,86 % / 1,29 %          11,07 s / 16,60 p
CSG déd. 6,80 % / base 1 264,58  85,99
CSG non déd. 2,40 %             30,35
CRDS 0,50 %                      6,32

Total salarial                 268,23
Total patronal                 528,82
Net imposable                1 055,54
Net à payer / MNS            1 018,87   (PAS = 0 dans ce cas)

Contrôle d'égalité brut − salarial = 1 287,10 − 268,23 = 1 018,87`),
      ],
      exemple:
        "Même salariée, même entrée, un gestionnaire saisit 2 100 € « on régularisera en février ». Le net part trop haut. La DSN déclare un brut faux. Le trop-perçu de janvier se recouvre mal. Le coût pédagogique de 19/31 vaut mieux qu'une régularisation conflictuelle. Marc, responsable, exige le prorata dès le premier bulletin.",
      erreurs:
        "Faire 2100 × 18/31 en oubliant le 13. Faire 2100 × 19/30. Appliquer 19/31 au net d'un bulletin plein 2 100 € (les cotisations ne sont pas linéaires dès qu'un plafond ou une CSG intervient autrement ; ici le brut est sous PMSS, mais la bonne méthode reste de recalculer). Comparer le net 1 018,87 € au SMIC net indicatif de communication et « corriger ».",
      particuliers:
        "Entrée un 31 : un jour / 31, pas zéro. Entrée un 1er : pas de prorata calendaire. Temps partiel + entrée : prorata du brut contractuel du temps partiel, pas du temps plein. Forfait jours : le prorata suit souvent les jours de forfait ou une règle d'entreprise, pas automatiquement 19/31 ; hors consigne, vous demandez. Reprise d'ancienneté contractuelle : cela n'augmente pas le brut de janvier, cela peut commander des droits ultérieurs.",
      exercice:
        "Même méthode calendaire pédagogique. Entrée le 20 janvier 2026, 2 100 € brut mensuel. Calculez le brut de période. Indiquez si vous lancez computeBulletin sur 2 100 ou sur le prorata. Le SMIC mensuel 1 823,03 € est-il un plancher de ce bulletin ?",
      correction:
        "Du 20 au 31 inclus = 12 jours. 2 100 × 12 / 31 = 812,903… → 812,90 €. Vous lancez le moteur sur 812,90 €, pas sur 2 100. Le SMIC mensuel 1 823,03 € (151,67 h, URSSAF, 01/01/2026–31/05/2026) n'est pas un plancher d'un mois incomplet : vous contrôlez le taux horaire et le brut reconstitué sur la période, pas l'égalité avec 1 823,03 €. Un brut de 812,90 € peut être légal pour 12 jours. Les cotisations suivent le moteur sur 812,90 €.",
    }),
    pack({
      title: "Contrôles du premier bulletin et coordination RH",
      description:
        "Clôturer une entrée : contrôles, interlocuteurs, ce que le junior explique au salarié, ce qu'il n'explique pas.",
      minutes: 18,
      objectifs:
        "Vous savez enchaîner une checklist d'entrée après calcul, rédiger un point de vigilance pour le responsable, et répondre au salarié sur un net d'entrée sans divulguer le paramétrage d'autrui.",
      theorie:
        "Le premier bulletin est le plus contesté après le solde de tout compte. Le salarié compare à une simulation d'offre (« 2 100 brut, environ 1 650 net ») qui ignorait le prorata, la mutuelle et le PAS. Votre métier n'est pas de défendre une promesse commerciale. Il est d'expliquer le bulletin réel : période du 13 au 31, brut 1 287,10 €, cotisations, net.\n\nLes contrôles d'entrée sont un paquet, toujours le même. Dates (contrat, DPAE, logiciel, futur flux DSN). Brut de période vs formule. Classification. Temps de travail. Organismes. Mutuelle. RIB. SMIC horaire. Absence de rubriques parasites. Net non négatif. Effectif / FNAL inchangé. Plafond : un brut de 1 287,10 € est sous le PMSS 4 005 € ; pas de T2, pas de CET. Si le salarié est cadre, APEC doit apparaître ; s'il ne l'est pas, elle ne doit pas.\n\nLa coordination RH n'est pas un luxe. La paie ne « répare » pas un contrat non signé, une classification absente, une DPAE oubliée. Elle remonte, par écrit, avant paiement. En cabinet, le client n'est pas libre d'exiger un brut plein « pour motiver » : vous alertez le responsable de dossier. En interne, le manager n'est pas le déclarant URSSAF.\n\nRépondre au salarié : faits, période, formule de prorata retenue par l'entreprise, renvoi au bulletin. Pas de débat sur le taux PAS d'un collègue. Pas de « le logiciel a arrondi ». Si une erreur réelle existe (date au 1er, brut plein), vous corrigez selon process, vous n'attendez pas février par confort.\n\nLe premier mois, la DSN mensuelle portera un début de contrat. Un signalement d'embauche peut exister selon les événements du cahier DSN : vous suivez le process, vous n'inventez pas un numéro de bloc. Le responsable dépose. Vous préparez la cohérence des dates.",
      methode:
        "Après calcul d'essai : checklist d'entrée, capture ou journal des écarts, revue N+1 sur les embauches du mois (toujours, même une seule). Avant paiement : RIB testé selon procédure, pas un IBAN recopié d'un PDF flou. Après paiement : si réclamation, ouvrir le bulletin, pas la mémoire. Alimenter le journal d'incidents si l'entrée a glissé.",
      extra: [
        code(`CONTRÔLES ENTRÉE — JANVIER 2026 (cas 13/01, 2 100 €)

[ ] DPAE avant mise au travail, fenêtre 8 jours (F23107)
[ ] Date unique 13/01/2026 partout
[ ] Brut 1 287,10 € (19/31 calendaire pédagogique) pas 2 100,00 €
[ ] Non-cadre : pas d'APEC
[ ] PMSS 4 005 € : pas de T2 sur 1 287,10 €
[ ] SMIC horaire contractuel ≥ 12,02 € (période 01/01–31/05/2026)
[ ] Mutuelle : hypothèse dossier ou 0, jamais un tarif inventé
[ ] PAS : taux issu du flux, pas un % du manager
[ ] Net expliqué = période + cotisations, pas la simu d'offre
[ ] RH informé si contrat / classification manquants
[ ] DSN : même date d'embauche (revue responsable)`),
      ],
      exemple:
        "Services, 35 salariés. Thomas écrit le 29 janvier : « on m'avait dit 1 660 €. » Lina ouvre le bulletin, montre 13–31, 1 287,10 € brut, net 1 018,87 € sans PAS ni mutuelle dans le cas pédagogique. Elle ne promet pas un « rattrapage ». Elle propose de recalculer février sur un mois complet 2 100 € (bulletin de référence du parcours : salarial 437,65 €, net 1 662,35 € hors PAS — reference-bulletins.json). L'écart n'est pas une erreur : c'est le premier mois incomplet.",
      erreurs:
        "Répondre « c'est normal » sans chiffres. Corriger le net pour coller à l'offre. Oublier de prévenir RH qu'il n'y a pas de contrat au dossier. Laisser un IBAN douteux. Confondre le net de janvier prorata avec un problème de SMIC.",
      particuliers:
        "Entrée + arrêt maladie dans les premiers jours : maintien, IJ, subrogation selon CCN et consignes — hors autonomie si le texte n'est pas lu. Entrée + saisie sur salaire déjà connue : barème, reste à vivre, responsable. Homonymie : RIB et NIR, pas le prénom du badge.",
      exercice:
        "Checklist : la DPAE mentionne le 13 janvier 8 h, le contrat le 13 janvier, le logiciel le 1er janvier, brut calculé 2 100 €. Rédigez la note interne au responsable paie (huit lignes max) et dites si vous payez.",
      correction:
        "Note : « Anomalie entrée Thomas — date logiciel 01/01 vs contrat/DPAE 13/01. Brut paramétré 2 100,00 € au lieu du prorata calendaire pédagogique 19/31 = 1 287,10 €. Risque : trop-perçu, DSN, réclamation. Je bloque le paiement de cette ligne tant que la date et le brut ne sont pas alignés. Demande : validation de la méthode de prorata du dossier (calendaire 19/31 proposée) et correction avant SEPA. » Vous ne payez pas le brut plein. Pourquoi : une date fausse n'est pas un écart d'arrondi.",
    }),
    quizLesson({
      title: "Quiz — Entrée d'un salarié",
      description: "Dossier, DPAE, contrat, prorata du premier bulletin, contrôles.",
      passing_score: 70,
      questions: [
        q({
          question: "La DPAE, au sens de L. 1221-10 et de la fiche Service-Public F23107, se transmet :",
          options: [
            "A. Après le premier bulletin, avec la DSN mensuelle",
            "B. Avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédant l'embauche",
            "C. Dans les 8 semaines suivant l'embauche",
            "D. Uniquement si le salarié est en CDI",
          ],
          correct: 1,
          explanation:
            "Obligation de l'employeur, préalable à la mise au travail. Fenêtre institutionnelle : au plus tôt dans les 8 jours précédant (F23107 / URSSAF). La DSN mensuelle ne remplace pas la DPAE. Le CDD est aussi concerné.",
        }),
        q({
          question: "Entrée le 13 janvier 2026, 2 100 € brut mensuel, prorata calendaire pédagogique 13–31 = 19/31. Le brut de période est :",
          options: [
            "A. 2 100,00 €",
            "B. 1 823,03 € (SMIC mensuel)",
            "C. 1 287,10 €",
            "D. 1 350,00 € (19 × 70 €)",
          ],
          correct: 2,
          explanation:
            "2 100 × 19 / 31 = 1 287,10 €. Méthode étiquetée pédagogique calendaire. Le SMIC mensuel n'est pas le brut d'un mois incomplet. 19 × 70 n'est pas la formule.",
        }),
        q({
          question: "Les cotisations du premier bulletin d'entrée se calculent :",
          options: [
            "A. Sur le brut mensuel contractuel, puis on applique 19/31 au net",
            "B. Sur le brut de période (ici 1 287,10 €), avec les taux de la période",
            "C. Uniquement sur le PMSS",
            "D. Uniquement si le salarié le demande",
          ],
          correct: 1,
          explanation:
            "L'assiette suit la rémunération de la période. Le moteur computeBulletin({ brut: 1287.10 }) applique les taux janvier 2026. On ne proratise pas un net de bulletin plein.",
        }),
        q({
          question: "Dans le cas pédagogique (1 287,10 €, non-cadre, < 50, sans mutuelle, hors RGDU, AT/MP hypothèse 1,50 %), le total salarial du moteur LOU est :",
          options: [
            "A. 437,65 € (chiffre du brut plein 2 100 €)",
            "B. 268,23 €",
            "C. 528,82 € (c'est le total patronal)",
            "D. 0 € car maladie salariale 0 %",
          ],
          correct: 1,
          explanation:
            "computeBulletin({ brut: 1287.10 }) : salarial 268,23 €, patronal 528,82 €. 437,65 € est le salarial du bulletin plein 2 100 € (référence). Maladie salariale 0 % n'annule pas vieillesse, Arrco, CSG/CRDS.",
        }),
        q({
          question: "Qui dépose en principe la DPAE ?",
          options: [
            "A. Le salarié, sur impots.gouv.fr",
            "B. Le manager d'atelier, par SMS",
            "C. L'employeur via un déclarant habilité (RH, paie, prestataire) ; le junior coordonne s'il n'est pas habilité",
            "D. L'URSSAF, automatiquement à la création du badge",
          ],
          correct: 2,
          explanation:
            "L. 1221-10 pèse sur l'employeur. Le junior prépare et alerte. Il ne s'invente pas déclarant. Ce n'est ni le salarié ni le manager par SMS.",
        }),
        q({
          question: "Le statut cadre à l'entrée se décide :",
          options: [
            "A. Dès que le brut dépasse 3 000 €",
            "B. Par la classification employeur / CCN / contrat, pas par un souhait manager",
            "C. Par le taux PAS",
            "D. Automatiquement pour tout CDI",
          ],
          correct: 1,
          explanation:
            "Cadre = classification. L'APEC et certaines cotisations suivent ce statut. Un seuil de brut ou le PAS ne créent pas le statut.",
        }),
        q({
          question: "Les 20 € / 40 € de mutuelle du parcours sont :",
          options: [
            "A. Un tarif national URSSAF 2026",
            "B. Une HYPOTHÈSE de contrat collectif du dossier fictif",
            "C. Le montant obligatoire pour tout non-cadre",
            "D. À intégrer d'office dans le MNS au 01/01/2026 côté patronal",
          ],
          correct: 1,
          explanation:
            "rates-2026.json : hypothèse pédagogique. Le BOSS MNS, jusqu'au 31/12/2026, ne conduit pas à intégrer d'office la part patronale de complémentaire santé dans le MNS.",
        }),
        q({
          question: "Un brut d'entrée de 1 287,10 € inférieur au SMIC mensuel 1 823,03 € :",
          options: [
            "A. Est nécessairement illégal : il faut verser 1 823,03 €",
            "B. Doit être « arrondi » au SMIC",
            "C. Peut être cohérent avec un mois incomplet ; on contrôle le taux horaire (≥ 12,02 € sur la période) et la formule de prorata",
            "D. Impose d'activer la RGDU",
          ],
          correct: 2,
          explanation:
            "Le SMIC mensuel 1 823,03 € correspond à un mois complet base 151,67 h. Un prorata peut être inférieur. Le contrôle porte sur le taux et la période. La RGDU n'est pas un rustine de prorata.",
        }),
        q({
          question: "Dupliquer un dossier « modèle » pour une embauche :",
          options: [
            "A. Est recommandé sans relecture, pour gagner la clôture",
            "B. Impose de purger les rubriques personnelles (prime, véhicule, PAS, ayants droit) et de réécrire dates, brut, cycle",
            "C. Transfère automatiquement la DPAE",
            "D. Copie légalement le NIR du modèle",
          ],
          correct: 1,
          explanation:
            "Le modèle est un piège : avantages et taux d'un autre salarié. La DPAE et le NIR sont individuels.",
        }),
        q({
          question: "Le premier bulletin montre un net très inférieur à la simulation d'offre. Vous :",
          options: [
            "A. Augmentez le brut pour coller à la promesse",
            "B. Expliquez période, prorata et cotisations avec le bulletin ; vous ne promettez pas un rattrapage de net",
            "C. Indiquez le taux PAS du voisin pour comparaison",
            "D. Dites que le logiciel s'est trompé, sans ouvrir le dossier",
          ],
          correct: 1,
          explanation:
            "Le bulletin réel prime. Ajuster le brut pour un net promis est une faute. Le taux PAS d'un tiers est confidentiel.",
        }),
      ],
    }),
  ],
};
