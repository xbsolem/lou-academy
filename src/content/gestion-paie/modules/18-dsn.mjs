import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 18,
  title: "La DSN : déclarer, contrôler, corriger",
  description:
    "Maîtriser la DSN au niveau opérationnel : objet, destinataires, mensuelle et événementielle, structure conceptuelle, contrôles, échéances, dépôt, CRM, anomalies, régularisations et organismes.",
  lessons: [
    pack({
      title: "Qu'est-ce que la DSN et à quoi elle sert",
      description:
        "Définir la déclaration sociale nominative comme canal unique, pas comme un export technique anodin.",
      minutes: 20,
      objectifs:
        "Vous savez définir la DSN, citer ses objectifs, et expliquer pourquoi une DSN fausse n'est pas « un fichier à retravailler plus tard ».",
      theorie:
        "La déclaration sociale nominative (DSN) est le canal déclaratif social de référence pour les employeurs du régime concerné. Elle transmet, de façon dématérialisée, les informations issues de la paie vers les organismes destinataires. Legal-sources : DSN-NET-ENTREPRISES. Elle n'est pas un « export Excel un peu officiel ». Elle n'est pas la DPAE. Elle n'est pas le virement SEPA. Elle n'est pas le journal comptable. Elle relie ces univers : ce qui a été calculé et payé doit être déclaré, pour que les droits des salariés (maladie, chômage, retraite) et les créances des organismes (URSSAF, retraite complémentaire, etc.) soient exacts.\n\nLes objectifs institutionnels, tels que présentés par net-entreprises, s'articulent ainsi : simplifier les déclarations sociales en les remplaçant par un flux issu de la paie ; fiabiliser les données nominatives ; alimenter les organismes en temps utile ; porter aussi des informations fiscales de collecteur (PAS). Un junior retient la logique : une seule source (le dossier de paie), plusieurs destinataires, des contrôles automatiques, des retours (CRM).\n\nLa DSN engage l'employeur. Un dépôt « vert » n'est pas une garantie juridique si le contenu est faux (mauvaise date de fin, mauvais brut, oubli d'un contrat). Le logiciel peut produire un fichier syntaxiquement valide et socialement absurde. Le contrôle humain reste : cohérence bulletin / DSN / paiement / écritures.\n\nLe simulateur pédagogique LOU n'émet pas de DSN réelle. Cette formation n'enseigne pas à rédiger du XML. Elle enseigne à raconter un dépôt, à tenir une checklist, à lire un retour, à corriger une anomalie. Le cahier technique officiel (normes de blocs et de rubriques, versions, dates d'application) se consulte sur les sources net-entreprises / DSN-info : vous ne mémorisez pas une version périmée, vous ne copiez pas un numéro de bloc « dont on se souvient ».",
      methode:
        "Dès la prise de poste : identifiez qui dépose, sur quel tableau de bord (net-entreprises / MSA selon régime), quel logiciel génère le fichier, qui lit les CRM, quel est le calendrier interne vs l'échéance officielle. Notez la version de norme paramétrée. Vous ne déposez pas sans délégation écrite.",
      noteText:
        "Obligation : déclarer par le canal DSN selon le régime de l'employeur. Source opérationnelle : net-entreprises (legal-sources). Un junior prépare et contrôle. Le dépôt engage. Aucun numéro de bloc n'est enseigné ici comme vérité : le cahier technique officiel prime.",
      exemple:
        "TPE 12 salariés, expert-comptable déposant. Lina, chez le client, « n'y touche pas ». Elle reste responsable de la qualité des variables et des dates qu'elle envoie au cabinet. Une entrée au 13 janvier saisie au 1er janvier chez le client produit une DSN belle et fausse chez l'expert. La délégation ne lave pas les faits.",
      extra: [
        code(`DSN N'EST PAS
- la DPAE (embauche préalable, L. 1221-10)
- le SEPA (paiement du net)
- le journal 641/421/43x
- un XML à rédiger à la main
- une certification d'éditeur (Sage, Silae, etc.)

DSN EST
- le canal déclaratif social (et fiscal collecteur) issu de la paie
- mensuel + signalements d'événements
- contrôlé, recalé par CRM
- à aligner sur bulletins, dates, motifs, montants`),
      ],
      erreurs:
        "Croire qu'un voyant vert clôt le sujet. Déposer pour « tenir l'heure » avec des variables manquantes. Inventer un bloc. Traiter la DSN le lendemain du paiement sans relecture. Confondre DSN et DUE/DPAE.",
      particuliers:
        "MSA : canal et tableau de bord spécifiques, même idée déclarative. Particularismes (expatriés, intermittents, multimise à disposition) : normes et consignes, pas un bricolage. Absence de logiciel « DSN native » : ce n'est pas une excuse pour ne pas déclarer ; le prestataire ou le dispositif simplifié se choisit au niveau employeur.",
      exercice:
        "Citez, pour votre futur poste, quatre flux que la DSN ne remplace pas, et trois questions à poser le premier jour sur le dépôt.",
      correction:
        "Ne remplace pas : DPAE, virement salarial, écritures comptables, contrat de travail. Questions : qui dépose ? quel tableau (net-entreprises / autre) ? qui lit les CRM ? calendrier interne vs échéance officielle du dossier ? Pourquoi : sans cette carte, un junior « lance » un fichier orphelin.",
    }),
    pack({
      title: "Destinataires : qui lit la DSN et pourquoi ça compte en paie",
      description:
        "Cartographier URSSAF, retraite, prévoyance, assurance chômage, DGFiP, et les droits salariés.",
      minutes: 18,
      objectifs:
        "Vous savez nommer les familles de destinataires et relier une erreur de DSN à un effet concret (IJ, retraite, PAS, contrôle).",
      theorie:
        "La DSN n'a pas un seul lecteur. Elle alimente, selon les données portées, l'URSSAF (cotisations, affiliations, certaines exonérations), les institutions de retraite complémentaire, les organismes de prévoyance et de mutuelle partenaires du dispositif, l'assurance chômage / France Travail (notamment via les fins de contrat et les attestations dématérialisées), la DGFiP pour le collecteur PAS, et d'autres acteurs selon les évolutions du cahier. La liste exacte et les habilitations se lisent sur net-entreprises : vous ne l'inventez pas exhaustivement de mémoire.\n\nCette architecture explique la gravité d'une erreur. Un brut sous-déclaré : cotisations, droits retraite, assiettes. Une date de fin fausse : attestation chômage, portabilité, contrôles. Un NIR erroné : mauvais rattachement, taux PAS d'un tiers, IJ qui n'arrivent pas. Un oubli de contrat : salarié invisible pour un organisme, régularisation douloureuse.\n\nLes organismes ne « voient pas votre Excel interne ». Ils voient la DSN. Corriger un bulletin sans corriger la DSN crée deux vérités. Corriger la DSN sans reprendre le bulletin crée un lettrage impossible en comptabilité (43x, 4421).\n\nLe junior n'appelle pas chaque organisme « pour raconter le dossier ». Il utilise les CRM, les espaces déclarants, et le responsable pour les contestations. Un contrôle URSSAF s'appuiera sur la DSN : la rigueur de clôture est une rigueur probatoire.",
      methode:
        "Pour chaque anomalie, demandez : quel destinataire est touché ? quel droit salarié ? quelle dette employeur ? quelle pièce (bulletin, contrat) doit primer ? Puis corrigez dans cet ordre : fait social → bulletin → DSN → comptabilité.",
      extra: [
        code(`DESTINATAIRES — LOGIQUE (liste fonctionnelle, pas un organigramme inventé)

Famille                 Exemples d'usage des données
Collecteur social       Assiettes, cotisations, affiliations, effectifs
Retraite complémentaire Droits, taux, tranches
Prévoyance / santé      Affiliations, portabilité, cotisations de contrat
Assurance chômage       Fins de contrat, salaires, motifs
Fiscal collecteur       PAS prélevé, identité
Droits du salarié       IJ, retraite, chômage, prestations liées au MNS

Règle : une DSN n'est pas un message à l'URSSAF seulement.`),
      ],
      exemple:
        "Arrêt maladie. L'IJ ne vient pas. Le salarié accuse la paie. La DSN d'événement n'a pas été déposée, ou le NIR est faux. Lina ouvre le signalement, pas un débat sur le maintien CCN. L'organisme paie ce qu'il a reçu comme fait.",
      erreurs:
        "Penser « c'est que de l'URSSAF ». Corriger un CRM retraite en bidouillant une ligne URSSAF. Donner au salarié le détail d'un flux organisme d'un collègue.",
      particuliers:
        "Multi-établissements : le destinataire AT/MP suit l'établissement. Portage, groupement : l'employeur déclarant n'est pas le lieu de travail. Cabinet : le client reste employeur, le cabinet est souvent mandataire déclarant.",
      exercice:
        "Classez l'impact principal : (A) date de fin trop tardive ; (B) taux PAS non transmis ; (C) oubli d'affiliation mutuelle ; (D) assiette vieillesse sous-évaluée.",
      correction:
        "A. France Travail / droits chômage / portabilité. B. DGFiP / collecteur, et taux du mois suivant. C. Organisme complémentaire, couverture, DSN contrat santé. D. Retraite et URSSAF vieillesse. Pourquoi : un même fichier, plusieurs vies administratives.",
    }),
    pack({
      title: "DSN mensuelle et DSN événementielle : deux rythmes, une même vérité",
      description:
        "Distinguer la déclaration de période et les signalements, sans inventer la liste exhaustive des événements.",
      minutes: 20,
      objectifs:
        "Vous savez quand un fait attend la DSN du mois et quand il exige un signalement, et vous savez chercher la règle dans le cahier officiel plutôt que dans un souvenir.",
      theorie:
        "Deux familles. La DSN mensuelle (ou de période) photographie l'emploi et les versements du mois : contrats en cours, rémunérations, assiettes, cotisations, PAS, arrêts déjà connus, fins déjà intégrées. Les signalements d'événements (souvent appelés DSN événementielle) transmettent certains faits dès qu'ils surviennent, parce que des droits ou des organismes ne peuvent pas attendre la clôture : arrêts de travail, reprises, fins de contrat dans les cas prévus, et d'autres événements listés par le cahier technique en vigueur.\n\nLa liste exacte des événements, les délais de transmission, les données minimales : cahier technique et fiches net-entreprises. Un junior qui récite « arrêt = 48 h » ou « fin de contrat = 5 jours » sans ouvrir la source de l'année risque d'enseigner un délai mort. Cette formation vous ordonne d'ouvrir net-entreprises / DSN-info pour le délai du motif concerné, et d'appliquer le process interne s'il est plus serré.\n\nLa DSN mensuelle ne dispense pas du signalement lorsque celui-ci est dû. Inversement, un signalement n'autorise pas à « oublier » le salarié dans la mensuelle. Les dates doivent être les mêmes : début d'arrêt, dernier jour travaillé, date de fin de contrat.\n\nEn organisation, le rythme événementiel casse le calendrier du junior : un arrêt arrive le 27, la clôture est le 24 déjà passée, le signalement part quand même. On ne stocke pas les arrêts « pour le mois suivant » si le cahier exige un signalement immédiat.",
      methode:
        "Fait social → pièce → le cahier exige-t-il un signalement ? si oui, préparer et faire déposer selon délégation → intégrer le fait dans la paie du mois (ou régul) → DSN mensuelle cohérente. Journal : date du fait, date du signalement, CRM.",
      extra: [
        code(`DEUX RYTHMES — NARRATIF PÉDAGOGIQUE (pas un XML)

27 janvier   Arrêt maladie reçu (début 26 janvier).
            → Ouvrir le cahier / process : signalement arrêt dû ?
            → Préparer le signalement. Dépôt habilité.
            → Maintenir / IJ / subrogation : paie, CCN lue, pas inventée.
            → Mensuelle de janvier : le même arrêt, les mêmes dates.

15 janvier  Fin de contrat.
            → Signalement de fin si le cahier le prévoit pour ce motif.
            → STC, documents, attestation.
            → Mensuelle : contrat clos, versements du solde.

Erreur : attendre le 5 février « on mettra tout dans la mensuelle »
         si un signalement était dû en janvier.`),
      ],
      exemple:
        "CSP. Un gestionnaire stocke les fins de CDD du 31 pour la mensuelle du 5. Selon le motif et le cahier, un signalement de fin peut être attendu plus tôt, et l'attestation France Travail avec. Le salarié au chômage subit le délai. Marc impose : toute fin du jour est un ticket événement le jour, pas un post-it de clôture.",
      erreurs:
        "Inventer un délai de 48 h universel. Croire que la mensuelle absorbe tout. Signaler un arrêt sans pièce. Signaler deux fois le même événement « pour être sûr » sans consigne de correctif.",
      particuliers:
        "Temps partiel thérapeutique, temps partiel, multi-contrats : l'événement se rattache au bon contrat. Reprise anticipée : un nouvel événement, pas un silence. Décès : circuit spécifique, responsable.",
      exercice:
        "Le 12 janvier, vous recevez un arrêt débuté le 8. La mensuelle de décembre est déjà déposée. Que faites-vous le 12, et qu'est-ce que vous ne faites pas ?",
      correction:
        "Le 12 : pièce, dates, signalement d'arrêt selon cahier/process (décembre est clos, l'arrêt est un fait de janvier sauf si les dates disent autre chose — ici début 8 janvier). Intégrer l'absence dans la paie de janvier. Ne pas « rouvrir décembre » pour un arrêt de janvier. Ne pas inventer un délai. Ne pas attendre le 5 février si un signalement est dû. Pourquoi : le rythme événementiel suit le fait, pas la clôture précédente.",
    }),
    pack({
      title: "Structure conceptuelle : individus, contrats, versements, assiettes",
      description:
        "Comprendre l'architecture de la DSN sans mémoriser des numéros de blocs douteux.",
      minutes: 22,
      objectifs:
        "Vous savez nommer les familles d'informations, relier chaque famille à un écran de paie, et vous savez où trouver les numéros officiels.",
      theorie:
        "Le cahier technique DSN organise l'information en ensembles (blocs) et champs (rubriques), dans une version de norme datée. Ces numéros changent ou s'enrichissent. Un module de formation qui affirmerait « le bloc 41 veut dire telle chose » comme vérité éternelle mentirait dès la version suivante. Vous apprendrez donc la carte conceptuelle, et vous ouvrirez le cahier officiel de la norme paramétrée dans votre logiciel lorsque vous devrez lire un CRM citant un identifiant.\n\nCarte conceptuelle, stable pédagogiquement. L'émetteur (entreprise, établissement, contacts). L'individu (identité, NIR, naissance, adresse). Le contrat de travail (dates, nature, dispositif, collège, lieu, classification selon les données prévues). L'arrêt ou l'événement (dates, motif, sous-motif selon nomenclatures officielles). Le versement (date de paiement, net, PAS, période). L'assiette et les cotisations (bases, montants, codes de cotisation, organismes). Les éléments de rémunération qui expliquent le brut. Les affiliations complémentaires. Cette carte recouvre ce que vous avez appris à saisir : dossier d'entrée, bulletin, STC, PAS.\n\nLa qualité d'un bloc contrat dépend du contrat réel, pas d'une valeur par défaut « CDI 35 h » copiée. La qualité d'un versement dépend du SEPA réel. La qualité d'une assiette dépend du moteur de paie et du paramétrage des codes cotisation. Un junior qui « corrige la DSN » en éditant un champ isolé sans reprendre le bulletin casse la piste d'audit.\n\nLes nomenclatures (nature de contrat, motif de rupture, type d'arrêt) sont des tables officielles. Vous ne créez pas un motif « autre, on verra ». Vous choisissez la valeur documentée, ou vous demandez.",
      methode:
        "Lors d'un CRM : lire le libellé en français, ouvrir le cahier de la version citée, identifier la famille (individu / contrat / versement / assiette), corriger la source paie, régénérer. Ne jamais mémoriser un numéro comme compétence.",
      extra: [
        code(`CARTE CONCEPTUELLE DSN (pédagogique)
Ouvrez le cahier technique officiel pour les identifiants de votre norme.

[Émetteur / établissement]
    └── [Individu : identité, NIR]
            └── [Contrat : dates, nature, lieu, collège]
                    ├── [Événements : arrêt, fin, reprise…]
                    ├── [Versement : paiement, net, PAS]
                    └── [Assiettes / cotisations / éléments de rémunération]

Source de vérité : dossier paie + pièces
Pas de XML artisanal. Pas de numéro de bloc récité de mémoire.`),
      ],
      exemple:
        "Un CRM cite un identifiant de rubrique et « date de fin de contrat ». Lina n'ouvre pas un éditeur XML. Elle ouvre le salarié, compare certificat, bulletin, écran contrat, corrige la date au 15 janvier, régénère la DSN, fait revoir le dépôt. Le numéro n'était qu'un pointeur.",
      erreurs:
        "Apprendre par cœur des numéros de forums. Corriger un champ DSN sans corriger le bulletin. Utiliser un motif de rupture « fourre-tout ». Mélanger deux contrats d'un même individu.",
      particuliers:
        "Multi-contrats : plusieurs contrats sous un individu, versements distincts ou agrégés selon règles. Changement de SIRET : fin / début ou modification selon le cahier, jamais un silence. Norme qui change au 1er janvier : le paramétreur, pas le junior isolé, gère la bascule ; le junior vérifie les CRM de janvier.",
      exercice:
        "Pour chacune des erreurs, dites la famille conceptuelle : (1) NIR inversé ; (2) brut sans les HS ; (3) paiement SEPA le 28, DSN de versement au 31 ; (4) CDD déclaré en CDI.",
      correction:
        "1. Individu. 2. Éléments de rémunération / assiette. 3. Versement (date de paiement). 4. Contrat (nature). Pourquoi : le CRM vous parlera peut-être en identifiants ; vous répondrez en corrigeant la bonne famille source.",
    }),
    pack({
      title: "Contrôles avant dépôt : rendre la DSN égale à la paie",
      description:
        "Construire une checklist de conformité bulletin / DSN / paiement, au-delà du voyant technique.",
      minutes: 20,
      objectifs:
        "Vous savez enchaîner des contrôles de fond (effectifs, totaux, dates, motifs, PAS) avant de considérer un fichier comme déposable.",
      theorie:
        "Les contrôles d'un logiciel DSN sont de plusieurs niveaux : forme (fichier lisible, champs obligatoires), cohérence interne (dates dans le bon ordre), parfois cohérence métier limitée. Ils ne remplacent pas le contrôle de paie. Un fichier peut être « accepté » avec un brut faux de 2 100 € au lieu de 1 287,10 €.\n\nContrôles de fond, toujours les mêmes. Effectif déclaré vs liste des bulletins. Somme des bruts DSN vs livre de paie. Somme des nets vs SEPA. Somme des PAS vs 4421. Entrées du mois : date DSN = DPAE = contrat. Sorties : date et motif = STC = documents. Arrêts : mêmes débuts. Contrats à zéro : légitimes (absence, entrée le 31) ou oubliés. Doublons d'individus. NIR absents trop nombreux. Codes cotisation : un paramétrage mort produit des assiettes à zéro « propres ».\n\nJanvier est le mois des plafonds : PMSS 4 005 € (2026). Une DSN qui reprend un plafond N-1 dans un paramétrage non mis à jour passera peut-être les contrôles de forme. Le junior de janvier ouvre le barème, pas seulement le tableau de bord DSN.\n\nLe PAS de clôture fait partie du même paquet : somme des PAS bulletins = PAS porté par la DSN = 4421. Un STC oublié dans le fichier, un taux manuel, un net à payer différent du SEPA : ce sont des contrôles de fond, pas des options. Le contrôle se documente (état, totaux, exceptions). Sans trace, la clôture suivante recommencera au hasard. Un écart de un centime se note ; un écart de salarié se bloque.",
      methode:
        "Calcul paie → contrôles bulletins → génération DSN → état de rapprochement (modèle ci-dessous) → exceptions traitées → revue N+1 → dépôt. Jamais l'inverse (dépôt puis « on verra les CRM » comme unique contrôle).",
      extra: [
        code(`RAPPROCHEMENT PÉDAGOGIQUE — JANVIER 2026

Indicateur                    Paie        DSN        Écart
Nombre de contrats actifs     ......      ......     0
Entrées                       ......      ......     0
Sorties                       ......      ......     0
Somme des bruts               ......      ......     0,00
Somme nets à payer            ......      SEPA       0,00
Somme PAS                     ......      ......     0,00
Somme cotisations URSSAF      ......      ......     0,00

Exceptions à commenter
- Salarié brut 0 (motif)
- NIR provisoire
- STC du 15/01 inclus ?
- Taux PAS manuels : 0 attendu

VERDICT : écart ≠ 0,00 (hors 0,01 documenté) = pas de dépôt.`),
      ],
      exemple:
        "28 bulletins, DSN 27 contrats. Le 28e est l'entrée du 13 janvier, dossier créé après génération du fichier. Lina régénère. Elle ne dépose pas 27 en se disant que février rattrapera : l'URSSAF et la retraite auraient un trou de 1 287,10 € de brut et un salarié sans contrat un demi-mois.",
      erreurs:
        "Déposer parce qu'il est 17 h. Ignorer un écart de 12 € « ce n'est pas l'URSSAF ». Ne pas régénérer après une correction de bulletin. Faire confiance au seul contrôle « NIR valide ».",
      particuliers:
        "Population à part (mandataires, stagiaires, apprentis) : inclusion selon le régime, pas selon l'habitude. Multi-établissements : un fichier par établissement ou un lot selon paramétrage ; ne pas fusionner. DSN de test / bac à sable : jamais envoyée en production par confusion d'environnement.",
      exercice:
        "Écart : paie brut 72 400,00 €, DSN 74 210,00 €. Deux pistes que vous ouvrez en premier, et ce que vous ne faites pas.",
      correction:
        "Pistes : un salarié sorti encore en DSN à brut plein (ex. entrée/sortie mal close), ou un prorata non répercuté (2 100 au lieu de 1 287,10), ou un doublon. Vous ouvrez la liste des écarts individuels, pas le total seul. Vous ne forcez pas la DSN à 72 400 par une ligne de correction globale inventée. Vous ne déposez pas. Pourquoi : 1 810 € d'écart, ce n'est pas un arrondi.",
    }),
    pack({
      title: "Échéances et calendrier : lire net-entreprises, ne pas réciter un jour faux",
      description:
        "Organiser le travail autour de l'échéance réelle du dossier, sans mémoriser une date universelle incertaine.",
      minutes: 16,
      objectifs:
        "Vous savez où lire l'échéance, comment un calendrier interne plus serré s'impose, et ce qu'il advient d'un dépôt tardif.",
      theorie:
        "Les échéances DSN dépendent de la nature de la déclaration (mensuelle, événement), parfois de caractéristiques de l'employeur, et elles sont publiées et actualisées par les canaux officiels, au premier rang net-entreprises (legal-sources DSN-NET-ENTREPRISES). Une formation qui graverait « la DSN, c'est le 5 » ou « c'est le 15 » comme vérité unique pour 2026 prendrait le risque d'enseigner un jour faux pour votre dossier. Vous n'apprendrez donc pas un quantième magique. Vous apprendrez le geste : ouvrir le calendrier officiel du compte déclarant, le reporter dans le calendrier de paie interne, et respecter le plus contraignant des deux.\n\nLe calendrier interne (gel des variables le 18, clôture le 24, paiement le 28, DSN préparée le 24, revue le 25) existe pour tenir l'échéance officielle avec de la marge : CRM, rejet, second dépôt. Un junior qui consomme toute la marge le 24 au soir transforme un rejet du 25 en dépôt tardif.\n\nUn dépôt tardif expose l'employeur (majorations, relances, droits salariés décalés). Le junior n'estime pas « ce n'est que deux jours ». Il alerte dès que le calendrier glisse (arrêt de logiciel, variables bloquantes, absence du déposant).\n\nLes signalements d'événements ont leurs propres horloges, souvent plus courtes que la mensuelle. Elles se lisent dans le même corpus officiel, motif par motif.",
      methode:
        "Chaque décembre (et à chaque changement de compte) : imprimer ou figer le calendrier officiel N+1 du dossier. Le coller au calendrier paie. Prévoir un déposant suppléant. Le jour J-2 : fichier généré, rapprochement fait. Le jour J : dépôt habilité, accusé, CRM.",
      extra: [
        code(`GESTES CALENDRIER (pas de quantième inventé)

1. Ouvrir net-entreprises (ou canal MSA) — calendrier du compte.
2. Noter l'échéance de la DSN de période de VOTRE dossier.
3. Noter les règles d'événements (cahier / fiches officielles).
4. Poser un calendrier interne EN AMONT (gel, calcul, revue, dépôt).
5. Suppléance du déposant.
6. Marge pour CRM.

Interdit pédagogique : « je retiens le 5, c'est universel ».`),
      ],
      exemple:
        "Lina a appris ailleurs « DSN le 5 ». Chez Atelier Nord Paie, l'échéance du compte, lue sur le tableau, impose un dépôt plus tôt, et le paiement est le 28. Si elle attend le 5, elle est déjà hors process interne, peut-être hors échéance. Marc lui fait ouvrir l'écran officiel le premier jour. La mémoire cède à la source.",
      erreurs:
        "Réciter un jour. Déposer le jour de l'échéance à 23 h 50. Ignorer le fuseau / l'heure de coupure de la plateforme. Confondre échéance de paiement URSSAF et échéance DSN.",
      particuliers:
        "Changement d'éditeur en cours de mois : double vigilance de calendrier. Premier dépôt d'une entreprise nouvelle : identifiants, habilitations, délai de création de compte — anticiper, hors junior isolé. Jours fériés : lire la règle officielle de report, ne pas inventer « le lundi suivant ».",
      exercice:
        "On est le 2 janvier 2026. Rédigez les trois premières lignes de votre calendrier DSN du mois, sans écrire de quantième d'échéance officielle inventé.",
      correction:
        "1) Ouvrir net-entreprises / canal du dossier, copier l'échéance réelle de la DSN de période janvier. 2) Poser gel, clôture, revue, dépôt interne avant cette échéance, avec marge CRM. 3) Lister les événements déjà connus (entrée 13, sortie 31, arrêts) pour les signalements. Pourquoi : le geste source remplace la légende du « 5 ».",
    }),
    pack({
      title: "Dépôt, accusés et CRM : lire un retour sans paniquer",
      description:
        "Enchaîner dépôt habilité, accusé, compte-rendu métier, et premier niveau de diagnostic.",
      minutes: 20,
      objectifs:
        "Vous savez ce qu'est un CRM, comment le classer (bloquant / informatif), et quelle est la limite d'un junior devant un rejet.",
      theorie:
        "Le dépôt produit des retours. L'accusé de réception dit que la plateforme a reçu un fichier. Il ne dit pas que les organismes ont tout accepté métier. Les comptes rendus métier (CRM) signalent anomalies, rejets, mises en demeure de corriger, informations. Le vocabulaire exact (certificats, bilans, CRM par destinataire) se lit sur net-entreprises : les libellés évoluent, le principe non.\n\nUn CRM n'est pas une insulte. C'est un contrôle a posteriori. Certaines anomalies sont bloquantes pour un destinataire (à corriger, parfois par une DSN de substitution / annule et remplace / régularisation — selon les mécanismes officiels de la norme, à lire, pas à inventer). D'autres sont des alertes (NIR, cohérence de dates). Un junior qui ignore les CRM « parce que le salaire est parti » laisse pourrir un droit IJ ou un taux PAS.\n\nLe diagnostic de premier niveau : lire le salarié, la famille (individu, contrat, versement, assiette), comparer au bulletin, voir si c'est un paramétrage récurrent (alors : responsable / paramétreur) ou une saisie du mois (alors : corriger le dossier). Ne pas « répondre au CRM » par un e-mail à l'URSSAF sans dossier.\n\nLes environnements de test et de production se distinguent. Un accusé de test n'est pas un dépôt. Un certificat de plateforme n'est pas une certification Sage ou Silae.",
      methode:
        "Dépôt (habilité) → sauvegarde accusé → le lendemain (ou selon fraîcheur des CRM) tour de retours → trier bloquant / non bloquant → tickets nominatifs → corrections → nouveau flux si le mécanisme officiel l'exige → clôturer le ticket avec la preuve. Tableau de bord partagé, pas une boîte mail personnelle.",
      extra: [
        code(`JOURNAL CRM — MODÈLE

Date dépôt     : ........   Accusé n° : ........
Date CRM       : ........   Destinataire : URSSAF / retraite / autre
Salarié / contrat : ........
Famille        : individu / contrat / versement / assiette / événement
Libellé CRM    : (copier, ne pas traduire de mémoire)
Cause paie     : ........
Action         : correction dossier / paramétrage / N+1
Flux suivant   : régul / substitution (selon cahier officiel)
Clôture        : date, preuve

Interdit : fermer un CRM « vu » sans action ni motif.`),
      ],
      exemple:
        "CRM : date de fin de contrat antérieure à la date de début. C'est une saisie inversée sur un CDD. Lina corrige 13/01 début et 31/03 fin, régénère, ne crée pas un nouveau salarié pour « contourner ». Le CRM suivant est propre. Dix minutes, pas une journée de panique.",
      erreurs:
        "Ne jamais ouvrir les CRM. Tout escalader sans lire. Tout corriger dans le XML. Confondre accusé et acceptation métier. Laisser les CRM dans la boîte du stagiaire parti.",
      particuliers:
        "CRM de masse (cent salariés, même anomalie de paramétrage) : un ticket paramétreur, pas cent corrections individuelles bricolées. CRM PAS vs CRM URSSAF : destinataires différents, corrections différentes. Rejeu de fichier : risque de doublon, suivre le mécanisme officiel.",
      exercice:
        "Trois CRM : (1) NIR clé invalide ; (2) alerte d'écart d'arrondi 0,01 € ; (3) motif de rupture non admissible pour le code contrat. Premier geste pour chacun ?",
      correction:
        "1. Identité : pièce, NIR, homonymie, pas un numéro inventé ; bloquant probable. 2. Documenter l'arrondi, voir si le moteur le rejoue ; ne pas passer une nuit dessus, mais ne pas l'empiler chaque mois. 3. Nature de contrat vs motif : pièce RH, nomenclature officielle, pas « autre ». Pourquoi : gravité et famille différentes.",
    }),
    pack({
      title: "Corrections, substitutions et régularisations déclaratives",
      description:
        "Reprendre une DSN fausse sans inventer un mécanisme de « fichier rustine ».",
      minutes: 20,
      objectifs:
        "Vous savez distinguer une correction du mois en cours, une régularisation sur période antérieure, et vous savez que le mode opératoire se lit dans le cahier, pas dans un forum.",
      theorie:
        "L'erreur déclarative a une date. Si le mois n'est pas déposé, on corrige le bulletin et on génère. Si le mois est déposé et que le cahier prévoit un mécanisme de remplacement pour cette étape (souvent dans une fenêtre courte), on suit ce mécanisme à la lettre. Si la période est close, on régularise sur une période ultérieure : le bulletin de régularisation porte les écarts, la DSN suivante porte les assiettes de régul, la comptabilité aussi. Un junior n'invente pas une « DSN fantôme de janvier » en mars.\n\nLes mots substitution, annule-et-remplace, régularisation, déclaration néant, rejeu : ils existent dans la documentation officielle avec des conditions. Vous les emploierez après lecture, pas après un souvenir de stage. Le principe pédagogique : on ne laisse pas deux fichiers contradictoires « pour voir lequel passe ».\n\nLa régularisation sociale (oubli de brut, mauvais profil) n'est pas la régularisation de PAS, ni la régularisation de plafond annuel. Chaque objet a son vecteur. Un oubli d'entrée au 13 janvier, découvert en mars : bulletins de janvier et février à reprendre ou réguls, DSN de régul, DPAE déjà due (incident à part, L. 1221-10), documents si besoin.\n\nLe trop-déclaré se corrige aussi. Déclarer trop de brut n'est pas « prudent ». Ça se paie en cotisations et en droits erronés.",
      methode:
        "Qualifier : période, déposée ou non, destinataire, montant, droits salariés déjà nés. Lire le mode officiel. Préparer bulletins d'écart. Faire valider. Déposer. Contrôler CRM. Informer le salarié si son net ou ses droits bougent. Journal d'incidents.",
      extra: [
        code(`NARRATIF — RÉGUL D'UNE ENTRÉE OUBLIÉE
Fait : Thomas, entrée 13/01/2026, 2 100 €, absent de la DSN de janvier.
Découverte : 3 mars.

1. DPAE : était-elle faite ? si non, incident employeur à part (L. 1221-10).
2. Bulletin janvier : 1 287,10 € (19/31) à établir / rattraper.
3. Février : mois plein 2 100 € si toujours présent.
4. Paiements : trop-perçu ou rappel, pas un silence.
5. DSN : régularisation sur la période autorisée par le cahier
   (on n'invente pas le bouton). Montants = bulletins.
6. Comptabilité : 641 / 421 / 43x des mois concernés.
7. Salarié : explication factuelle du rattrapage.
8. Post-mortem : checklist entrées du mois.`),
      ],
      exemple:
        "Un cabinet « corrige » en déposant un second fichier janvier en mars sans mécanisme. Doublon d'assiettes, double appel de cotisations, CRM de chaos. La méthode officielle, plus lente d'une heure, évite trois mois de lettrage. Lina refuse le second fichier bricolé, alerte le responsable de dossier.",
      erreurs:
        "Deux dépôts pour un mois sans cadre. Régulariser en silence. Corriger l'URSSAF et oublier la retraite. Changer un motif de rupture a posteriori pour « aider » le chômage.",
      particuliers:
        "Contrôle URSSAF en cours : toute régul se coordonne, pas d'initiative héroïque. Décès, liquidation judiciaire : circuits, responsable. Changement de SIRET en cours d'année : réguls de rattachement, paramétreur.",
      exercice:
        "Janvier déposé avec 2 100 € au lieu de 1 287,10 € pour Thomas, toujours en poste. Quel est l'écart de brut ? Que régularisez-vous, et que ne faites-vous pas sur février ?",
      correction:
        "Écart brut janvier : 2 100 − 1 287,10 = 812,90 € trop déclarés (et probablement trop payés). On reprend le bulletin de janvier (trop-perçu, cotisations, PAS), on déclare la régul selon le cahier, on informe le salarié. On ne « sous-déclare » pas février à 2 100 − 812,90 pour compenser en silence : on fausse les droits du mois de février et les plafonds. Pourquoi : chaque période a son assiette vraie.",
    }),
    pack({
      title: "Organismes, simulations narratives et checklists de crise",
      description:
        "Entraîner le geste sur des récits réalistes : clôture, rejet, arrêt tardif, fin de contrat, PAS.",
      minutes: 26,
      objectifs:
        "Vous savez dérouler quatre situations types avec une checklist, sans produire de faux XML, et vous savez quand stopper pour escalader.",
      theorie:
        "La compétence DSN d'un junior n'est pas de citer une norme. C'est de traverser une clôture sans rompre la chaîne de vérité : pièces, bulletins, fichier, dépôt, CRM, organismes, salarié, comptabilité. Les organismes (URSSAF, caisses de retraite, prévoyance, France Travail, DGFiP) réagissent chacun sur leur sous-ensemble. Un dossier « bon pour l'URSSAF » peut être mauvais pour une fin de contrat.\n\nCette leçon rassemble des simulations. Elles sont narratives. Les montants de paie reprennent des cas déjà sourcés (entrée 1 287,10 €, STC 15 janvier, PAS 203,38 €). Aucun fichier XML n'est à écrire. Chaque simulation se termine par une checklist cochable et un point d'escalade. Vous vous entraînez à l'ordre : figer les faits, ouvrir le bulletin, ouvrir le cahier ou net-entreprises pour le délai, rapprocher, faire déposer par l'habilité, lire le CRM le lendemain.\n\nLa limite d'autonomie : dépôt hors délégation, paramétrage de codes cotisation, contestation de contrôle, invention d'un motif, second fichier improvisé, mot de passe d'un collègue. Dire « je ne dépose pas » est une compétence. Un fichier à 27 contrats sur 28, un motif de rupture « pour aider », un XML manuel : trois refus, pas trois exploits.\n\nLe ton avec les organismes est factuel, daté, piecé. Pas de récit émotionnel. Pas de « on a toujours fait comme ça ». Le salarié, lui, a droit à une phrase claire si son droit (IJ, attestation, PAS) est retardé par une DSN : le fait, la correction, pas le détail d'un CRM d'un tiers.",
      methode:
        "Pour chaque crise : figer les faits, ouvrir la source (cahier, net-entreprises, bulletin), appliquer la checklist, écrire le ticket N+1 si le seuil est atteint, ne pas disperser les versions de fichiers.",
      extra: [
        code(`SIMULATION 1 — CLÔTURE JANVIER (28 salariés)
Faits : entrée Thomas 13/01 (1 287,10 €), sortie 15/01, PAS d'un cadre 203,38 €
sur un autre dossier 3 100 €, un arrêt reçu le 24 à 16 h.
Checklist :
[ ] Bulletins = liste DSN
[ ] Thomas à 1 287,10 pas 2 100
[ ] Sortie : date 15/01, motif, signalement de fin si dû
[ ] PAS total = 4421
[ ] Arrêt du 24 : signalement selon cahier, pas « trop tard on oublie »
[ ] Revue Marc, dépôt, accusé
Escalade : si l'arrêt n'a pas de pièce, pas de dates inventées.

SIMULATION 2 — CRM NIR LE 26
Faits : rejet individu, embauche du 13, DPAE OK, NIR saisi à une touche près.
Checklist :
[ ] Pièce identité / carte Vitale, pas un NIR « qui ressemble »
[ ] Corriger l'individu, pas créer un doublon
[ ] Régénérer, mécanisme officiel de correction
[ ] Vérifier le taux PAS du flux après identité vraie
Escalade : homonymie non tranchée.

SIMULATION 3 — FIN DE CONTRAT ET ATTESTATION
Faits : STC 15/01, attestation générée au 31/01 par défaut logiciel.
Checklist :
[ ] Une date : 15/01 partout
[ ] Motif identique documents / DSN
[ ] Signalement de fin
[ ] Pas de XML manuel
Escalade : motif RH contesté.

SIMULATION 4 — ÉCART URSSAF / COMPTA
Faits : 43x 14 802,00 €, avis issu DSN 14 210,00 €.
Checklist :
[ ] Recalculer somme cotisations des bulletins
[ ] DSN vs journal
[ ] Régul oubliée ? salarié oublié ?
[ ] Ne pas payer « le milieu » 14 506 €
Escalade : écart persistante après rapprochement ligne à ligne.

MAIL INTERNE TYPE
Objet : DSN janvier — blocage dépôt — 1 écart brut 812,90 €
« Thomas encore à 2 100 € dans le fichier vs 1 287,10 € bulletin.
Je ne dépose pas. Correction + régénération + revue 30 min. »`),
      ],
      exemple:
        "Le 25 à 18 h, le déposant est absent, l'échéance officielle du dossier, lue le matin, est proche. Lina n'utilise pas le mot de passe collé sous le clavier. Elle contacte le suppléant nommé, ou alerte la direction. Un dépôt par un compte nominatif d'un tiers est un incident de sécurité et d'imputabilité.",
      erreurs:
        "Produire un faux XML « pour débloquer ». Payer la moyenne d'un écart. Inventer un motif France Travail. Laisser un arrêt du 24 pour février. Déposer malgré 27 contrats sur 28.",
      particuliers:
        "Plateforme indisponible : preuve, report officiel s'il existe, communication interne, pas un silence. Cyberincident : pas de dépôt depuis un PC inconnu. Fusion de sociétés : projet, pas une DSN de junior.",
      exercice:
        "À partir de la simulation 1, rédigez l'ordre de votre après-midi du 24 janvier (six étapes) si l'arrêt de 16 h n'a pas encore de pièce employeur, seulement un mail du salarié.",
      correction:
        "1) Geler ce qui est déjà calculé. 2) Intégrer Thomas 1 287,10 et la sortie du 15, rapprochement. 3) PAS / 4421. 4) Arrêt : demander la pièce, préparer le signalement sans inventer les dates, alerter Marc si le cahier impose un dépôt rapide. 5) Ne pas clôturer l'absence comme « 0 jour » par confort. 6) Dépôt seulement après revue, y compris décision sur l'arrêt (signalement avec dates du mail vs attente pièce — Marc tranche). Pourquoi : l'événement tardif ne justifie ni l'invention, ni l'oubli, ni un dépôt sans rapprochement.",
    }),
    quizLesson({
      title: "Quiz — DSN",
      description: "Douze questions : objet, destinataires, rythmes, structure, contrôles, échéances, CRM, réguls.",
      passing_score: 70,
      minutes: 16,
      questions: [
        q({
          question: "La DSN est principalement :",
          options: [
            "A. Un export Excel interne",
            "B. Le canal déclaratif social (et fiscal collecteur) issu de la paie, décrit notamment sur net-entreprises",
            "C. La DPAE sous un autre nom",
            "D. Un XML que le junior rédige à chaque clôture",
          ],
          correct: 1,
          explanation:
            "Legal-sources DSN-NET-ENTREPRISES. Distincte de la DPAE. Pas un XML artisanal. Pas un tableur.",
        }),
        q({
          question: "Un voyant de fichier « accepté » signifie :",
          options: [
            "A. Que tous les bruts sont juridiquement exacts",
            "B. Qu'un contrôle de forme / de plateforme a été passé, pas que la paie est vraie",
            "C. Que l'URSSAF certifie le paramétrage CCN",
            "D. Que le PAS est forcément juste",
          ],
          correct: 1,
          explanation:
            "Un fichier valide peut porter 2 100 € au lieu de 1 287,10 €. Le contrôle de fond reste humain.",
        }),
        q({
          question: "Les numéros de blocs / rubriques DSN, dans ce parcours :",
          options: [
            "A. Doivent être appris par cœur comme compétence junior",
            "B. Se consultent dans le cahier technique officiel de la norme ; on enseigne les familles (individu, contrat, versement, assiette)",
            "C. Sont libres, le junior peut en créer",
            "D. Remplacent les comptes PCG 641",
          ],
          correct: 1,
          explanation:
            "Pas de numéros inventés ou figés. Carte conceptuelle + cahier officiel.",
        }),
        q({
          question: "DSN mensuelle et signalement d'événement :",
          options: [
            "A. La mensuelle suffit toujours, les événements sont optionnels",
            "B. Ce sont deux rythmes ; un événement dû ne se « stocke » pas jusqu'à la mensuelle par confort",
            "C. L'événement remplace la mensuelle du salarié",
            "D. Seuls les CDI ont des événements",
          ],
          correct: 1,
          explanation:
            "Deux familles, une vérité de dates. Les délais exacts se lisent sur net-entreprises / cahier, pas dans une légende.",
        }),
        q({
          question: "L'échéance de la DSN de période :",
          options: [
            "A. Est universellement le 5 de chaque mois, à mémoriser",
            "B. Est universellement le 15",
            "C. Se lit sur net-entreprises (ou canal du dossier) ; le calendrier interne peut être plus serré",
            "D. N'existe plus depuis le PAS",
          ],
          correct: 2,
          explanation:
            "On n'enseigne pas un quantième unique qui serait faux pour votre compte. Source officielle + process interne.",
        }),
        q({
          question: "Un CRM DSN est :",
          options: [
            "A. Un logiciel de relation client commercial",
            "B. Un compte rendu métier (retour d'anomalie / information) à traiter, distinct du seul accusé de réception",
            "C. Une certification Silae",
            "D. Un e-mail facultatif",
          ],
          correct: 1,
          explanation:
            "Accusé ≠ acceptation métier. Les CRM se journalisent et se corrigent à la source paie.",
        }),
        q({
          question: "Paie 28 bulletins, DSN 27 contrats, entrée du 13 oubliée. Vous :",
          options: [
            "A. Déposez 27, février rattrapera",
            "B. Régénérez après inclusion de l'entrée (brut 1 287,10 € si cas 19/31), puis rapprochement, puis dépôt",
            "C. Ajoutez une ligne XML manuelle de 2 100 €",
            "D. Doublez un autre salarié pour faire 28",
          ],
          correct: 1,
          explanation:
            "Pas de trou déclaratif. Pas de XML artisanal. Le prorata 1 287,10 €, pas le brut plein.",
        }),
        q({
          question: "Trop-déclaré 2 100 € au lieu de 1 287,10 € en janvier, découvert en mars. Vous :",
          options: [
            "A. Sous-déclarez février du même écart pour compenser",
            "B. Reprenez la période vraie (bulletin + régul DSN selon le cahier officiel), sans compensation silencieuse sur février",
            "C. Ignorez, 812,90 € ce n'est rien",
            "D. Inventez une seconde DSN de janvier sans mécanisme",
          ],
          correct: 1,
          explanation:
            "Chaque période a son assiette. 812,90 € d'écart. Mécanisme officiel, pas un second fichier fantôme.",
        }),
        q({
          question: "La date de paiement dans la famille « versement » doit :",
          options: [
            "A. Être le dernier jour du mois, toujours",
            "B. Coller au SEPA / paiement réel",
            "C. Être la date de dépôt DSN",
            "D. Être la date de DPAE",
          ],
          correct: 1,
          explanation:
            "Le versement déclare le paiement. Ni la DPAE, ni le dépôt, ni un 31 fictif.",
        }),
        q({
          question: "Un motif de rupture dans la DSN :",
          options: [
            "A. Peut être « autre » pour aider le salarié au chômage",
            "B. Doit coller à la qualification RH et à l'attestation, via la nomenclature officielle",
            "C. Est libre en texte",
            "D. Est inutile si le certificat de travail est remis",
          ],
          correct: 1,
          explanation:
            "Fausse déclaration vs droits. Les documents et la DSN disent la même rupture.",
        }),
        q({
          question: "Qui dépose la DSN ?",
          options: [
            "A. N'importe quel junior dès que le fichier est vert",
            "B. La personne habilitée (responsable, mandataire) ; le junior prépare, rapproche, assiste",
            "C. L'URSSAF, automatiquement après le SEPA",
            "D. Le salarié, sur impots.gouv.fr",
          ],
          correct: 1,
          explanation:
            "Le dépôt engage l'employeur. Délégation écrite. Ce n'est ni l'URSSAF ni le salarié.",
        }),
        q({
          question: "Somme des PAS bulletins ≠ PAS porté par la DSN. Vous :",
          options: [
            "A. Forcez le plus petit montant",
            "B. Cherchez l'écart (STC, oubli), alignez bulletins, DSN et compte 4421, puis déposez",
            "C. Comptabilisez l'écart en 645",
            "D. Attendez l'avis d'impôt des salariés",
          ],
          correct: 1,
          explanation:
            "Égalité de clôture collecteur. Le 645 n'est pas le PAS. L'avis d'impôt ne corrige pas une DSN de janvier oubliée.",
        }),
      ],
    }),
  ],
};
