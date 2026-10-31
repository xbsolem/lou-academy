import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 28,
  title: "Veille sociale : sources, dates d’effet, contrôle du paramétrage",
  description:
    "Surveiller URSSAF, BOSS, Légifrance, net-entreprises, Agirc-Arrco et Ameli, retrouver une règle à une date donnée, et contrôler l’impact logiciel.",
  lessons: [
    pack({
      title: "Pourquoi et comment veiller",
      description:
        "La veille n’est pas une lecture de fil d’actualité : c’est une méthode datée, sourcée, tracée.",
      minutes: 20,
      objectifs:
        "Vous savez à quoi sert la veille en paie, quels objets surveiller, et comment tenir un journal sans noyer la clôture.",
      theorie:
        "La paie applique des règles qui changent : paramètres annuels (PMSS, SMIC, taux), doctrines (BOSS), lois et décrets, instructions DSN, barèmes de retraite complémentaire, consignes d’assurance maladie, avenants de CCN, paramétrage logiciel. Un bulletin de janvier 2026 calculé avec un PMSS 2025 est un bulletin faux, même s’il est joli. La veille n’est donc pas un hobby de juriste : c’est un contrôle de production.\n\nOn distingue quatre objets. (1) Paramètre annuel : taux, plafond, SMIC — source institutionnelle, date d’effet, période d’emploi concernée. (2) Obligation légale : Code du travail, CSS — Légifrance, texte consolidé à la date du fait. (3) Doctrine administrative : BOSS, instructions URSSAF — opposables dans leur champ, à dater. (4) Disposition conventionnelle ou d’entreprise — texte du dossier, pas un fil LinkedIn.\n\nUn junior ne « suit tout le droit social français ». Il suit : le calendrier de SON dossier (janvier = plafonds, SMIC, souvent nouveaux taux), les CRM DSN, les mails éditeur, les avenants CCN signalés par RH, et il sait OÙ chercher le reste. Il ne recopie pas un infographie. Il ouvre l’URL, note la date de mise à jour, la date d’effet, la période d’emploi, et il compare au paramétrage du logiciel.\n\nLa veille se fait surtout hors pic de clôture (début de mois, après DSN), avec un créneau fixe. En clôture, on n’invente pas une réforme lue le matin sur un réseau. On applique ce qui est validé dans le dossier. Si une réforme tombe en cours de mois, on alerte le responsable : on ne « tente le nouveau taux » à 23 h.",
      methode:
        "1. Calendrier : 30 minutes à J+2, 30 minutes après DSN. 2. Journal : date de consultation, source, URL, date d’effet, objet, impact dossier (oui/non/à voir), qui a validé le paramètre. 3. Comparer logiciel vs source. 4. Si écart : ticket responsable, pas une correction solo des taux nationaux. 5. Classer : national / CCN / entreprise / hypothèse.",
      noteText:
        "Limite : un junior ne met pas à jour seul un taux URSSAF, un plafond, un coefficient RGDU, un barème CCN. Il détecte, documente, fait viser. La veille n’autorise pas à « tester en production ».",
      exemple:
        "Le 2 janvier 2026, Lina ouvre URSSAF plafonds : PMSS 4 005 €, arrêté du 22 décembre 2025. Le logiciel affiche encore 3 866 € (exemple d’écart pédagogique). Elle ne « lance pas pour voir ». Elle ouvre un ticket, joint l’URL, attend le visa. Les 28 bulletins de janvier dépendent de ce chiffre.",
      extra: [
        code(`JOURNAL DE VEILLE — modèle

Date consult. | Source | URL | Date d'effet | Objet | Logiciel = source ? | Ticket
02/01/2026 | URSSAF plafonds | urssaf.fr/... | 01/01/2026 | PMSS 4005 | NON 3866 | T-14
02/01/2026 | URSSAF SMIC | ... | 01/01/2026 | 12,02 €/h | OUI | —
05/01/2026 | BOSS MNS | boss.gouv.fr | cadre 2026 | MNS affichage | à voir | T-15
`),
      ],
      erreurs:
        "Veille uniquement sur les réseaux. Changer un taux sans visa. Confondre date de publication et date d’effet. Appliquer une réforme 2027 « pour être en avance ». Oublier que le SMIC change aussi en juin 2026 (12,31 €/h au 01/06/2026).",
      particuliers:
        "Cabinet : une veille par dossier (CCN différentes). CSP : veille centralisée + consigne, le junior n’invente pas sa propre version. Congés de janvier : préparer la veille en décembre.",
      exercice:
        "Vous lisez le 10 janvier 2026 un post : « le PMSS passe à 4 200 € ». Que faites-vous avant toute saisie ?",
      correction:
        "Vous n’appliquez pas 4 200 €. Vous ouvrez URSSAF plafonds et l’arrêté. Pour janvier 2026, le PMSS sourcé du parcours est 4 005 € (arrêté du 22 décembre 2025). Un post n’est pas une source. Vous notez le journal : post écarté, source officielle confirmée, logiciel comparé. Si le logiciel dit 4 200, ticket d’alerte : ce n’est pas conforme à la source du 10 janvier.",
    }),
    pack({
      title: "URSSAF, BOSS et Légifrance",
      description:
        "Trois sources primaires : taux et démarches, doctrine, textes consolidés.",
      minutes: 22,
      objectifs:
        "Vous savez quel site ouvrir selon la question, et vous savez lire une date d’effet sans confondre les onglets.",
      theorie:
        "URSSAF.fr porte les taux du secteur privé, les plafonds, le SMIC, les exonérations (dont RGDU 2026), les fiches pratiques employeur. C’est la source des paramètres annuels de ce parcours (rates-2026.json). On y lit aussi des démarches (DPAE, déclarations). On n’y cherche pas le texte consolidé d’un article du Code du travail : ce n’est pas Légifrance. Une fiche URSSAF peut se mettre à jour ; on note la date affichée.\n\nLe BOSS (Bulletin officiel de la sécurité sociale, boss.gouv.fr) est la doctrine administrative de sécurité sociale : bulletin de paie, montant net social, avantages en nature, frais professionnels, etc. Une position BOSS se date. Le MNS : cadre d’affichage, modèle provisoire prolongé jusqu’au 31/12/2026 ; une évolution 2027 (part patronale de complémentaire santé) est un projet à revérifier, pas une règle déjà applicable. On n’anticipe pas. Le BOSS ne remplace pas le Code, mais il guide l’application : un junior le cite avec l’URL et la rubrique, pas « le BOSS dit » de mémoire.\n\nLégifrance est le texte de loi, décret, arrêté, code consolidé. Pour un article (L. 3243-1, L. 3141-3, L. 3121-36, L. 242-1 CSS), on ouvre la version en vigueur à la date du fait générateur. Un PDF d’un code 2018 n’est pas une source. Un arrêté (exemple : arrêté du 22 décembre 2025 sur les plafonds) se lit pour la date d’application aux périodes d’activité. Légifrance n’explique pas toujours le bulletin : il dit le droit. L’explication opérationnelle se recoupe URSSAF / BOSS.\n\nOrdre de recherche : qualifier la question (taux ? doctrine d’assiette ? article ?) puis ouvrir le bon site. Recouper si l’enjeu est fort. Ne jamais s’arrêter à un résultat de moteur grand public sans ouvrir la page institutionnelle.",
      methode:
        "Question de taux / plafond / SMIC / RGDU → URSSAF, noter MAJ et effet. Question d’affichage bulletin, MNS, avantage → BOSS. Question « que dit l’article ? » → Légifrance, version à la date. Recopie dans le journal : citation courte, URL, date. Écart entre sources : responsable, pas un choix junior « celle qui arrange le net ».",
      noteText:
        "Obligation : s’appuyer sur le texte en vigueur. Un junior n’arbitre pas un conflit BOSS / CCN / contrat. Il documente les trois et escalade.",
      exemple:
        "Question interne : « le salarié peut-il renoncer au bulletin ? » Légifrance L. 3243-1 : non, l’employeur remet un bulletin, le salarié ne peut y renoncer. Ce n’est pas une « pratique coffre ». La dématérialisation a ses règles ; elle ne supprime pas la remise.",
      extra: [
        code(`AIGUILLAGE SOURCE

« Quel PMSS en janvier 2026 ? »     → URSSAF plafonds + arrêté
« Comment afficher le MNS ? »       → BOSS montant net social
« Mentions du bulletin ? »          → R. 3243-1 Légifrance + BOSS bulletin
« HS à défaut d'accord ? »          → L. 3121-36 Légifrance, puis CCN dossier
« Maladie patronale taux plein ? »  → URSSAF taux privé 13 % au 01/01/2026
« Assiette cotisations ? »          → L. 242-1 CSS + BOSS / URSSAF

Interdit : forum, infographie non sourcée, souvenir N-1.`),
      ],
      erreurs:
        "Citations de mémoire. Utiliser un article non consolidé. Prendre une fiche URSSAF 2024. Appliquer le BOSS 2027 par anticipation. Confondre un communiqué de presse et un arrêté.",
      particuliers:
        "MSA si régime agricole : autre barème, hors routine régime général de ce parcours. Fonction publique : hors champ. Outre-mer : paramètres spécifiques, ne pas coller la métropole sans lecture.",
      exercice:
        "Pour chacune, citez le premier site : (1) CET Agirc-Arrco si salaire > T1 ; (2) durée légale du travail ; (3) modèle de bulletin et MNS.",
      correction:
        "1. Agirc-Arrco (leçon suivante) recoupé taux 2026 du parcours ; pas Légifrance en premier. 2. Légifrance L. 3121-27. 3. BOSS bulletin + MNS, et R. 3243-1. L’aiguillage évite de perdre 40 minutes.",
    }),
    pack({
      title: "net-entreprises, Agirc-Arrco et Ameli",
      description:
        "Déclarer, cotiser la retraite complémentaire, traiter le risque maladie : trois canaux à surveiller.",
      minutes: 20,
      objectifs:
        "Vous savez ce que chaque site apporte au gestionnaire, sans inventer une norme de bloc DSN ni un taux AT.",
      theorie:
        "net-entreprises.fr est le portail déclaratif : DSN, services, actualités techniques, calendrier, documentation. La DSN est le canal, pas un export Excel. Un junior apprend la logique (mensuelle, signalements événementiels, contrôles, CRM) sans mémoriser un numéro de rubrique non fourni dans le dossier. La veille DSN, c’est : lire les actualités du portail et les consignes de l’éditeur, traiter les CRM, ne pas ignorer un rejet « on verra ». Les échéances se relisent chaque année sur le portail : on ne les récite pas hors source.\n\nAgirc-Arrco (agirc-arrco.fr) publie le calcul des cotisations de retraite complémentaire : T1 / T2, CEG, CET. En 2026, T1 7,87 % (4,72 / 3,15), T2 21,59 % (12,95 / 8,64), CEG T1 2,15 %, CEG T2 2,70 %, CET 0,35 % si rémunération > T1, T1 calée sur le PMSS 4 005 € (rates-2026.json). La veille consiste à vérifier, à chaque 1er janvier et à chaque communication de l’institution, que le logiciel a les bons taux et les bons assiettes. On ne « laisse T2 comme l’an dernier ».\n\nAmeli (ameli.fr, espace employeur selon les services) concerne les IJ, les arrêts, les démarches maladie / AT. La paie n’y cherche pas un taux de cotisation maladie patronale (c’est URSSAF). Elle y relie : règles de subrogation opérationnelles, pièces, délais de traitement côté caisse — toujours en relisant la fiche du jour, sans inventer un délai de versement IJ. Un junior n’appelle pas la caisse « pour un avis juridique » sans dossier et sans responsable.\n\nLes trois sites se recoupent : une DSN mal paramétrée crée un CRM, un écart Agirc-Arrco, un blocage IJ. La veille est cohérente : on ne corrige pas un taux retraite en ignorant la DSN.",
      methode:
        "Après chaque clôture : CRM net-entreprises, lettrage organismes. En janvier et à chaque mail institution : taux Agirc-Arrco vs logiciel. Pour un arrêt : circuit interne + fiche Ameli / consigne responsable, pas un maintien inventé. Journal : coller l’URL de l’actualité DSN si elle impacte le dossier.",
      noteText:
        "Limite : vous ne déposez pas une DSN de régularisation complexe seul, vous ne négociez pas un taux AT avec Ameli (c’est Carsat / notification), vous ne modifiez pas T1/T2 sans visa.",
      exemple:
        "CRM DSN : anomalie retraite complémentaire. Le junior relance « ce n’est rien ». Deux mois plus tard, appel de l’entreprise pour points manquants. La veille opérationnelle, c’était traiter le CRM avec le responsable, pas le classer.",
      extra: [
        code(`VEILLE MENSUELLE MINIMALE

[ ] net-entreprises : CRM ouverts, actualité DSN lue (date)
[ ] Agirc-Arrco : si 1er trimestre ou mail taux → comparer T1 T2 CEG CET APEC
[ ] Ameli / arrêts du mois : pièces, subrogation selon dossier, pas un % CCN inventé
[ ] Éditeur logiciel : patch / paramètre 2026
[ ] Journal mis à jour`),
      ],
      erreurs:
        "Ignorer les CRM. Recopier les taux Agirc-Arrco d’un client sur un autre. Téléphoner à Ameli sans NIR maître et sans mandat. Inventer un bloc DSN. Confondre Ameli et URSSAF pour un taux maladie patronal.",
      particuliers:
        "Prévoyance / mutuelle : sites des organismes du contrat, pas Ameli. France Travail / attestations de fin : autre canal, RH. PAS : DGFiP / impots.gouv, pas net-entreprises seul, même si le flux passe en DSN.",
      exercice:
        "Le 6 février 2026, trois notifications : CRM DSN « retraite », mail Agirc-Arrco de taux, mail Ameli d’un arrêt. Ordonnez le travail junior.",
      correction:
        "CRM DSN d’abord (déclaration déjà déposée, anomalie à instruire avec le responsable). Taux Agirc-Arrco : comparer au paramètre déjà visé en janvier 2026 ; s’il est déjà 7,87 / 21,59 etc., classer ; s’il diverge, ticket. Arrêt Ameli : pièce, dates, circuit IJ/maintien du dossier, pas un calcul de taux de cotisation. On ne mélange pas les trois dans un seul « je verrai lundi ».",
    }),
    pack({
      title: "Taux, plafonds, réformes : dater pour appliquer",
      description:
        "Un chiffre sans période est inutilisable ; une réforme se lit à date d’effet, pas à date de rumeur.",
      minutes: 22,
      objectifs:
        "Vous savez rattacher un paramètre à une période d’emploi, gérer janvier et juin 2026, et ne pas anticiper 2027.",
      theorie:
        "Les cotisations s’apprécient pour une période. Le parcours retient janvier 2026, métropole, régime général, sauf mention contraire. PMSS 4 005 €, PASS 48 060 €, jour 220 €, heure 30 € : arrêté du 22 décembre 2025, cotisations dues au titre des périodes d’activité à compter du 01/01/2026. SMIC 12,02 €/h et 1 823,03 €/mois (151,67 h) du 01/01/2026 au 31/05/2026 ; 12,31 €/h au 01/06/2026. Un bulletin de mai n’utilise pas le SMIC de juin. Un bulletin de juin n’utilise pas 12,02 « par habitude ».\n\nLes taux URSSAF privés au 01/01/2026 (maladie patronale plein 13 %, AF plein 5,25 %, vieillesse, chômage 4 % dans la limite de 4 PASS, etc.) sont dans rates-2026.json. La RGDU 2026 fusionne d’anciens taux réduits : on ne l’applique que si le cas le demande ; sinon on dit les taux pleins et on le dit. Anticiper une réforme non encore applicable (MNS 2027, autre projet) est une erreur de veille : on la note comme projet, on ne la code pas.\n\nUne réforme se lit en trois dates : adoption / publication ; entrée en vigueur ; première période d’emploi ou de versement concernée. Ces trois dates divergent souvent. Le journal de veille les sépare. Un communiqué « voté » n’est pas un taux paramétré.\n\nLes paramètres d’entreprise (AT/MP, versement mobilité, mutuelle, PAS) ne se veillent pas sur URSSAF national : notification, contrat, flux DSN. Les coller à un taux national est une faute.",
      methode:
        "Pour tout chiffre : période d’emploi, source, URL, effet. Contrôle 1er janvier et 1er juin (SMIC 2026). Liste « ne pas anticiper ». Comparaison logiciel. Visa avant production. Exercice systématique : « quelle règle à telle date ? »",
      noteText:
        "Ne mémorisez pas un taux hors période. En entretien comme en poste, citez la date. Un « 13 % maladie » sans « patronal, taux plein, privé, 01/01/2026 » est incomplet.",
      exemple:
        "Stagiaire en formation qui récite « SMIC 11,65 ». En janvier 2026 c’est faux. La bonne réponse : 12,02 €/h du 01/01 au 31/05/2026, source URSSAF, et je revérifie au 01/06 (12,31). La veille, c’est cette phrase, pas un chiffre nu.",
      extra: [
        code(`PARAMÈTRES 2026 — EXTRAIT SOURCÉ (rates-2026.json / legal-sources)

Période d'emploi janvier 2026, métropole, régime général
PMSS 4 005 € | PASS 48 060 € | jour 220 € | heure 30 €
  → arrêté 22/12/2025, URSSAF plafonds
SMIC 12,02 €/h ; 1 823,03 € / 151,67 h  (jusqu'au 31/05/2026)
SMIC 12,31 €/h au 01/06/2026
Maladie s. 0 % (5,50 % si non domicilié fiscalement en France)
Maladie p. plein 13 % | AF plein 5,25 % | RGDU seulement si le cas le demande
Vieillesse s. 6,90 % plaf. + 0,40 % | p. 8,55 % plaf. + 2,11 %
CSG/CRDS assiette 98,25 % jusqu'à 4 PASS
Chômage p. 4,00 % (4 PASS) | AGS 0,25 % | FNAL 0,10 % ou 0,50 %
Agirc-Arrco T1 7,87 % | T2 21,59 % | CEG 2,15 / 2,70 | CET 0,35 % si > T1
MNS : cadre BOSS jusqu'au 31/12/2026 ; 2027 = projet à revérifier
AT/MP, mutuelle, PAS : PAS des taux nationaux`),
      ],
      erreurs:
        "Un seul SMIC pour toute l’année 2026. RGDU appliquée à tous les dossiers « pour être moderne ». Plafond 2025 en janvier. Réforme lue sur un réseau le matin de la clôture, saisie le soir.",
      particuliers:
        "Entrée le 31 mai / sortie le 1er juin : deux SMIC possibles selon les jours, lecture fine, responsable. Rappel au titre de 2025 : ne pas coller les taux 2026 sans consigne.",
      exercice:
        "Quel SMIC horaire pour une heure de travail du 15 janvier 2026 ? du 15 juin 2026 ? Sources.",
      correction:
        "15 janvier 2026 : 12,02 €/h (URSSAF / Service-Public, période 01/01–31/05/2026). 15 juin 2026 : 12,31 €/h (revalorisation au 01/06/2026, URSSAF). On ne dit pas « le SMIC 2026 » comme s’il était unique toute l’année.",
    }),
    pack({
      title: "CCN, logiciel et contrôle de paramétrage",
      description:
        "Une réforme nationale n’est appliquée que lorsqu’elle est dans le moteur, visée, et non contredite par un oubli de dossier.",
      minutes: 22,
      objectifs:
        "Vous savez relier veille nationale, avenant CCN, patch éditeur et contrôle de paramétrage, sans recoder seul.",
      theorie:
        "Le logiciel (Sage Paie, Silae, Cegid, ADP, SAP, Workday, PayFit, Nibelis, moteur pédagogique LOU — niveau fonctionnel, pas une certification éditeur) ne « sait » pas tout seul. L’éditeur publie des millésimes, des patchs, des notes 2026. L’entreprise active, teste, vise. Un junior qui croit que « Silae a mis à jour donc mes 8 dossiers cabinet sont bons » ignore les options, les CCN, les organismes, les rubriques maison. Le simulateur LOU n’est pas un clone commercial : il illustre un moteur déterministe pédagogique.\n\nLa CCN se veille à part : avenants de salaires, IDCC, Dares / Légifrance / site de branche. Un minimum conventionnel 2026 n’est pas dans rates-2026.json : on ne l’invente pas, on le lit, on le fait paramétrer. Un logiciel peut avoir un module CCN incomplet ou daté.\n\nContrôle de paramétrage, geste junior : comparer 5 à 10 rubriques critiques au barème sourcé (PMSS, SMIC, T1, maladie 13 % patronal plein, FNAL selon effectif, APEC si cadre). Bulletin test d’un profil type (non-cadre 2 000 €, cadre au-dessus du PMSS, temps partiel, entrée). Écart = ticket, pas un « coup de gomme » en production. Les taux AT, mutuelle, PAS : comparer à la pièce du dossier, pas au national.\n\nProcédure interne : qui a le droit de modifier un taux national, une rubrique, un organisme ? Souvent le responsable ou le paramétreur. Le junior propose un écart constaté, il n’a pas la clé. Après patch, on reteste, on ne clôture pas « pour voir ».",
      methode:
        "Checklist janvier : patch éditeur installé ? visa ? PMSS 4005 ? SMIC 12,02 ? T1 4005 ? RGDU activée seulement si politique du dossier ? FNAL selon effectif ? CCN : avenant salaires lu ? Tests : 3 profils. Journal d’écarts. Production seulement après feu vert.",
      noteText:
        "Limite : pas de paramétrage national solo, pas de « petite rubrique CCN » créée le 24. Le moteur pédagogique LOU ne remplace pas le logiciel de production. Aucune certification Sage / Silae / Cegid n’est délivrée par ce parcours.",
      exemple:
        "CSP. Patch 2026 déployé. Un dossier a encore un PMSS saisi en dur dans une rubrique maison. Les bulletins nationaux sont bons, 12 salariés de cette rubrique sont faux. Le contrôle junior par profil type et par rubrique maison (pas seulement le barème général) détecte l’écart. C’est ça, la veille logicielle.",
      extra: [
        code(`CONTRÔLE PARAMÉTRAGE — JANVIER 2026

National (visa responsable)
[ ] PMSS 4005 / PASS 48060 / heure 30 / jour 220
[ ] SMIC 12,02 (alerte calendrier 01/06 → 12,31)
[ ] Maladie p. 13 % plein ; AF 5,25 % plein ; RGDU = selon dossier
[ ] Vieillesse, CSG/CRDS, chômage 4 %, AGS, FNAL, dialogue 0,016 %
[ ] Agirc-Arrco T1/T2/CEG/CET/APEC

Dossier
[ ] AT/MP = notification (hypothèse si fictif)
[ ] Mutuelle / prévoyance = contrat
[ ] PAS = flux, pas un taux maison
[ ] CCN / IDCC / avenant salaires = texte, pas souvenir
[ ] Rubriques spécifiques : encore justes ?

Tests : temps plein, partiel, cadre > PMSS, entrée, sortie
LOU Academy : moteur pédagogique ≠ logiciel commercial`),
      ],
      erreurs:
        "Faire confiance au seul bandeau « millésime 2026 ». Recoder un taux le jour de clôture. Copier le paramètre du dossier A. Ignorer les rubriques maison. Présenter ce parcours comme une certif éditeur.",
      particuliers:
        "Changement d’effectif 49 → 50 : FNAL, parfois autres seuils, alerte responsable, pas un basculement junior. Multi-établissements : un paramètre AT par SIRET. Éditeur en retard : plan B documenté par le responsable, pas un Excel pirate de production.",
      exercice:
        "Le logiciel affiche PMSS 4 005 et SMIC 12,02, mais une rubrique « base absences » calée sur 1 801,80 € (ancien SMIC pédagogique). Risque et acte ?",
      correction:
        "Les bulletins « standards » peuvent paraître justes et les absences / maintien / IJ mal assis. Ticket paramétrage, ne pas clôturer les dossiers qui utilisent cette base, ne pas corriger en dur 28 fois. Veille = aussi les bases dérivées, pas seulement le champ PMSS.",
    }),
    pack({
      title: "Retrouver une règle à une date donnée",
      description:
        "Compétence centrale : à une date de fait, identifier la source, la version, le paramètre, l’hypothèse.",
      minutes: 24,
      objectifs:
        "Vous déroulez une méthode unique pour toute question datée, et vous l’appliquez au PMSS du 15 janvier 2026.",
      theorie:
        "Retrouver une règle à une date, ce n’est pas googler le mot. C’est : (1) qualifier le fait (période d’emploi, versement, absence, rupture) ; (2) qualifier la nature de la règle (obligation légale, paramètre annuel, doctrine, CCN, entreprise, hypothèse pédagogique) ; (3) ouvrir la source primaire ; (4) prendre la version en vigueur à la date du fait, pas la plus récente si elle n’était pas encore née, pas une version future ; (5) lire la date d’effet (périodes d’activité, date de versement, etc.) ; (6) comparer au logiciel ; (7) tracer. Cette compétence se teste en entretien (« quel PMSS au 15 janvier 2026 ? ») et en poste (contrôle URSSAF, réclamation, rappel).\n\nExemple directeur du module : quel PMSS s’applique au 15 janvier 2026, métropole, cotisations d’une période d’activité de janvier 2026 ? Réponse : 4 005 €. Source : arrêté du 22 décembre 2025, repris par URSSAF plafonds de la sécurité sociale, applicable aux cotisations dues au titre des périodes d’activité à compter du 01/01/2026. PASS 48 060 €, plafond journalier 220 €, horaire 30 €. Un chiffre 3 925 ou 3 666 éventuellement encore cité est hors période. Le 15 janvier n’est pas « entre deux arrêtés » : l’arrêté du 22 décembre 2025 est déjà en vigueur pour cette période.\n\nMême méthode pour un SMIC du 15 juin 2026 (12,31 €/h), pour un taux maladie patronal plein au 01/01/2026 (13 %), pour un article L. 3141-3 lu consolidé à la date. Si la source n’est pas dans rates-2026.json (gratification stage, barème saisie, minimum CCN), la méthode reste : ouvrir URSSAF / Service-Public / Légifrance, ne pas inventer l’euro.\n\nEn entretien, la phrase complète (montant + date d’effet + source + ce que vous iriez revérifier) vaut plus que le seul 4 005. En poste, le journal de veille est cette phrase écrite.",
      methode:
        "Fiche « règle à date » : fait, date du fait, nature, source, URL, version, effet, montant ou contenu, hypothèses, impact logiciel, visa. Toujours dire ce qui n’est pas couvert (AT, mutuelle, CCN).",
      noteText:
        "Un junior qui répond « 4005 je crois » sans source n’a pas de veille. Un junior qui répond « 4005, arrêté du 22 décembre 2025, URSSAF, périodes d’activité au 01/01/2026, je revérifie la page le jour J » est opérationnel.",
      exemple:
        "Contrôle interne : « vous avez utilisé quel plafond en janvier ? » Lina sort le journal du 2 janvier, l’URL URSSAF, l’arrêté, la capture du paramètre logiciel 4 005 visé par Marc. Ce n’est pas de la paperasse : c’est la preuve que 28 bulletins reposent sur une règle identifiable.",
      extra: [
        code(`EXERCICE RÉSOLU — RÈGLE À DATE

Question : Quel PMSS s'applique le 15 janvier 2026 pour les cotisations
d'une période d'activité de janvier 2026 (métropole, régime général) ?

1. Fait : période d'emploi janvier 2026, cotisations SS.
2. Nature : paramètre annuel (plafond).
3. Source : URSSAF plafonds + arrêté du 22 décembre 2025.
4. Version / effet : cotisations dues au titre des périodes d'activité
   à compter du 01/01/2026. Le 15 janvier est dans cette période.
5. Résultat : PMSS = 4 005 €
   (PASS 48 060 € ; jour 220 € ; heure 30 €).
6. Logiciel : doit afficher 4005. Sinon ticket, pas de clôture.
7. Hors sujet : AT/MP, mutuelle, PAS, minima CCN.

Réponse orale d'entretien (modèle) :
« 4 005 euros, arrêté du 22 décembre 2025, source URSSAF plafonds,
applicable aux périodes d'activité à compter du 1er janvier 2026.
Je le revérifierais sur la page URSSAF le jour du calcul. »`),
      ],
      erreurs:
        "Donner 4 005 sans source. Donner un plafond N-1. Confondre PASS annuel et PMSS. Appliquer le plafond du jour 220 € à un mois complet. Dire « ça n’existe plus avec la DSN ».",
      particuliers:
        "Multi-employeurs / entrée-sortie : prorata de plafond, règles propres, souvent sous revue. Nature de cotisation hors SS (prévoyance) : autre assiette, autre texte. Date de versement ≠ période d’activité : relire, ne pas trancher seul si doute.",
      exercice:
        "Rédigez la fiche « règle à date » pour : (A) PMSS au 15 janvier 2026 ; (B) SMIC horaire au 15 juin 2026 ; (C) affichage MNS au 15 janvier 2026 (anticiper 2027 ?).",
      correction:
        "A. Paramètre annuel, URSSAF + arrêté 22/12/2025, effet 01/01/2026, 4 005 €. B. Paramètre annuel, URSSAF SMIC, 12,31 €/h au 01/06/2026. C. Doctrine BOSS, modèle provisoire jusqu’au 31/12/2026 : au 15 janvier 2026 on n’intègre pas d’office une réforme 2027 (projet à revérifier). Trois natures, trois sources, zéro rumeur.",
    }),
    quizLesson({
      title: "Quiz — Veille sociale",
      description: "Sources, dates d’effet, PMSS, paramétrage, limites junior.",
      passing_score: 70,
      questions: [
        q({
          question: "Quel PMSS s’applique au 15 janvier 2026 pour une période d’activité de janvier 2026 ?",
          options: [
            "A. 3 925 €",
            "B. 4 005 € (arrêté du 22 décembre 2025, URSSAF)",
            "C. 4 200 € (post LinkedIn)",
            "D. Plus de PMSS depuis la DSN",
          ],
          correct: 1,
          explanation:
            "Exercice directeur du module : 4 005 €, arrêté du 22/12/2025, périodes d’activité à compter du 01/01/2026.",
        }),
        q({
          question: "Premier réflexe pour un taux de cotisation privé au 01/01/2026 :",
          options: [
            "A. Un forum paie",
            "B. URSSAF — taux du secteur privé, date de mise à jour lue",
            "C. Ameli",
            "D. Le souvenir du précédent employeur",
          ],
          correct: 1,
          explanation:
            "Paramètre annuel : URSSAF. Ameli n’est pas le barème des taux employeur.",
        }),
        q({
          question: "Le BOSS sert surtout à :",
          options: [
            "A. Remplacer Légifrance",
            "B. Consulter la doctrine administrative (bulletin, MNS, assiettes) datée",
            "C. Déposer la DSN",
            "D. Publier les minima CCN",
          ],
          correct: 1,
          explanation:
            "Doctrine. Le Code reste sur Légifrance. La DSN est net-entreprises. La CCN est ailleurs.",
        }),
        q({
          question: "SMIC horaire au 15 juin 2026 :",
          options: [
            "A. 12,02 € comme en janvier",
            "B. 12,31 € (revalorisation au 01/06/2026, URSSAF)",
            "C. 15,00 €",
            "D. Il n’y a plus de SMIC horaire",
          ],
          correct: 1,
          explanation:
            "Deux SMIC dans l’année 2026. La veille date le fait.",
        }),
        q({
          question: "Anticiper dans le MNS de janvier 2026 la réforme 2027 sur la mutuelle patronale :",
          options: [
            "A. Est recommandé pour être en avance",
            "B. Est une erreur : au 15/01/2026 le cadre BOSS applicable est celui en vigueur jusqu’au 31/12/2026 ; 2027 se revérifie",
            "C. Est imposé par l’arrêté PMSS",
            "D. Remplace le PAS",
          ],
          correct: 1,
          explanation:
            "Ne pas anticiper un projet. Le journal de veille le note comme projet, pas comme paramètre.",
        }),
        q({
          question: "Un junior constate PMSS logiciel ≠ 4 005 € le 2 janvier 2026. Il :",
          options: [
            "A. Corrige le taux national seul et clôture",
            "B. Documente (URL, arrêté), ouvre un ticket, n’attend pas de « lancer pour voir »",
            "C. Ignore, l’éditeur a forcément raison",
            "D. Met 4 200 € par sécurité",
          ],
          correct: 1,
          explanation:
            "Détecter et faire viser. Pas de paramétrage national solo, pas de moyenne.",
        }),
        q({
          question: "net-entreprises sert d’abord à :",
          options: [
            "A. Lire le Code du travail consolidé",
            "B. La DSN, les services déclaratifs, CRM et actualités techniques",
            "C. Calculer le CET Agirc-Arrco",
            "D. Notifier le taux AT/MP",
          ],
          correct: 1,
          explanation:
            "Portail déclaratif. AT = Carsat. CET = Agirc-Arrco. Code = Légifrance.",
        }),
        q({
          question: "T1 Agirc-Arrco en janvier 2026 est calée sur :",
          options: [
            "A. Un forfait 3 000 €",
            "B. Le PMSS 4 005 €",
            "C. Le SMIC",
            "D. Le PAS",
          ],
          correct: 1,
          explanation:
            "Tranche 1 ≤ PMSS. D’où l’importance du bon plafond en veille janvier.",
        }),
        q({
          question: "Une infographie « nouveautés paie 2026 » sans URL institutionnelle :",
          options: [
            "A. Suffit pour paramétrer",
            "B. N’est pas une source : on ouvre URSSAF / BOSS / Légifrance",
            "C. Remplace l’arrêté du 22 décembre 2025",
            "D. Vaut visa du responsable",
          ],
          correct: 1,
          explanation:
            "La veille commence où le droit est publié, pas où il est illustré.",
        }),
        q({
          question: "Ce parcours délivre-t-il une certification Silae ou Sage ?",
          options: [
            "A. Oui, niveau expert",
            "B. Non : attestation LOU Academy, distincte d’une certification éditeur ; le simulateur n’est pas un clone commercial",
            "C. Oui, RNCP inclus",
            "D. Oui, diplôme d’État",
          ],
          correct: 1,
          explanation:
            "Rappel métier / veille logicielle : pas de titre réglementé ni de certif éditeur.",
        }),
      ],
    }),
  ],
};
