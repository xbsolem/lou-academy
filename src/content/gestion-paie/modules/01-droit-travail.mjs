import { pack, quizLesson, q, code, note } from "../lib.mjs";

export default {
  position: 1,
  title: "Fondamentaux du droit du travail",
  description:
    "Identifier la règle applicable (loi, CCN, contrat), en tirer la conséquence paie, et savoir ce qu'un junior n'invente jamais.",
  lessons: [
    pack({
      title: "Les sources du droit du travail",
      description:
        "Distinguer loi, règlement, convention, accord, contrat, usage, et relier chaque source à une ligne de bulletin.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous savez nommer les sources du droit du travail, qualifier une information (obligation légale, paramètre annuel, clause conventionnelle, hypothèse de dossier) et expliquer pourquoi la paie ne peut pas « choisir » une source par facilité.",
      theorie:
        "Le droit du travail organise la relation de travail subordonnée. Il ne se réduit pas au Code du travail. Plusieurs couches de normes coexistent : Constitution et droit européen (principes, durées maximales, non-discrimination), lois et ordonnances, décrets et arrêtés, conventions et accords collectifs (branche, entreprise, établissement), règlement intérieur, contrat de travail, usages et engagements unilatéraux, et enfin les instructions administratives (BOSS) qui ne sont pas la loi mais que l'administration applique.\n\nPour la paie, chaque euro doit reposer sur une source identifiable. Le SMIC horaire 12,02 € au 1er janvier 2026 est un paramètre annuel (URSSAF / Service-Public), pas une clause de contrat. La durée légale de 35 heures par semaine est une obligation légale (L. 3121-27). Un 13e mois n'existe que s'il est prévu par CCN, accord, contrat ou usage : vous ne le créez pas « parce que c'est fréquent dans le secteur ». Un taux AT/MP n'est pas dans le Code du travail : c'est un paramètre d'établissement notifié par la Carsat.\n\nLa conséquence opérationnelle est immédiate. Si vous appliquez une majoration d'heures supplémentaires « à 25 % » sans vérifier s'il existe un accord plus favorable, vous pouvez sous-payer. Si vous ignorez une prime conventionnelle, le brut est faux, donc les cotisations, le net, la DSN et le journal comptable sont faux. Inversement, inventer une clause « parce que la CCN du précédent dossier le prévoyait » est une faute : les CCN ne se recopient pas d'un SIRET à l'autre.\n\nUn junior n'est pas juriste. Il n'interprète pas un conflit de normes complexe, il ne cite pas un arrêt qu'il n'a pas lu, il n'invente pas un numéro d'article. Il identifie la nature de la règle, ouvre le texte (Légifrance, CCN applicable, contrat), documente, et escalade en cas de contradiction. La rigueur de source est la première compétence de paie, avant le calcul.",
      methode:
        "Devant tout élément de rémunération ou d'absence, posez six questions dans l'ordre :\n1. Quel est le fait (heures, absence, prime, rupture) ?\n2. Quelle période (janvier 2026, entrée/sortie) ?\n3. Quelle est la source candidate (Code du travail, CCN, accord, contrat, usage, paramètre d'entreprise) ?\n4. Le texte est-il lu, daté, applicable à cet établissement et à cette classification ?\n5. Y a-t-il une norme plus favorable au salarié, ou une norme d'ordre public qui s'impose ?\n6. Quelle est la conséquence paie (brut, cotisations, net, DSN, documents) ?\nSi l'étape 4 échoue, vous n'appliquez pas : vous documentez et vous interrogez le responsable paie.",
      noteText:
        "Ne jamais inventer une clause de CCN, un usage, un numéro d'arrêt, un délai « de jurisprudence ». Les articles cités dans ce module (L. 3121-27, L. 3121-28, L. 3121-36, L. 3141-3, L. 1221-10, R. 3243-1) sont ceux vérifiés dans legal-sources.json. Tout autre article se relit sur Légifrance avant application à un dossier réel.",
      exemple:
        "Dans une PME de services (28 salariés, un établissement), un manager écrit : « Mets les samedis en HS à 50 %, c'est comme ça dans le BTP. » L'entreprise n'est pas dans le BTP. Le junior ouvre le contrat (35 h, pas de clause samedi), la CCN réellement applicable, et L. 3121-28 / L. 3121-36. Les heures au-delà de la durée légale sont des heures supplémentaires ; le taux de majoration légal supplétif n'est pas « 50 % dès la première heure le samedi ». Sans accord plus favorable lu, on n'importe pas le réflexe d'un autre secteur. Le manager n'est pas une source de droit.",
      extra: [
        code(`QUALIFICATION D'UNE RÈGLE — fiche junior
Fait : ................................................................
Période : ...................... SIRET / CCN : ........................
Source candidate :  [ ] loi/décret  [ ] CCN  [ ] accord  [ ] contrat
                    [ ] usage  [ ] paramètre entreprise  [ ] BOSS
                    [ ] paramètre annuel (taux, plafond, SMIC)
Texte lu ?  [ ] oui, date de consultation : ........  [ ] non → STOP
Conséquence paie (brut / cotisations / net / DSN) : ...................
Escalade nécessaire :  [ ] non  [ ] oui, à qui : .....................`),
      ],
      erreurs:
        "Traiter le manager comme une source. Recopier la CCN du dossier précédent. Confondre BOSS et Code du travail (le BOSS guide l'administration ; il ne crée pas à lui seul un droit). Appliquer un SMIC ou un PMSS de l'année précédente en janvier. Citer « un arrêt de 2019 » sans référence. Croire que « tout le monde fait comme ça » constitue un usage (l'usage s'établit par des critères précis ; un junior ne le déclare pas seul).",
      particuliers:
        "Multi-établissements : la CCN, l'accord, le taux AT peuvent différer. Portage, groupement d'employeurs, mise à disposition : l'employeur au sens du contrat n'est pas toujours celui qui donne les consignes opérationnelles. Droit public / fonction publique : ce n'est pas le même corpus ; un junior en paie privée ne transpose pas. Salariés détachés, expatriés : sources spécifiques, hors autonomie.",
      exercice:
        "Qualifiez chaque phrase : obligation légale, paramètre annuel, disposition conventionnelle (à lire), paramètre d'entreprise, hypothèse pédagogique, ou non-source.\nA. « Durée légale 35 h par semaine. »\nB. « PMSS janvier 2026 = 4 005 €. »\nC. « Chez nous le 13e mois se verse en décembre. »\nD. « AT/MP 1,50 %. »\nE. « Le chef d'atelier dit que le samedi est toujours à 50 %. »",
      correction:
        "A. Obligation légale : L. 3121-27 (durée légale 35 heures). Une durée conventionnelle inférieure ne se confond pas avec la durée légale pour le déclenchement des HS légales.\nB. Paramètre annuel : arrêté du 22 décembre 2025, URSSAF, cotisations dues au titre des périodes d'activité à compter du 01/01/2026.\nC. Disposition d'entreprise (accord, contrat, usage ou politique) : à prouver par un texte, pas par l'habitude orale du junior.\nD. Hypothèse pédagogique dans ce parcours, ou paramètre d'établissement notifié par la Carsat en dossier réel — jamais un taux national.\nE. Non-source. Le chef d'atelier déclare des faits (heures) ; il ne fixe pas le taux de majoration.",
    }),
    pack({
      title: "Lire le Code du travail",
      description: "Repérer un article L, R ou D, comprendre ce qu'il dit à la paie, et ne pas extraire une phrase hors contexte.",
      minutes: 20,
      objectifs:
        "Vous distinguez la partie législative de la partie réglementaire, vous savez ouvrir un article sur Légifrance, et vous reliez cinq articles-clés du parcours à un geste de paie.",
      theorie:
        "Le Code du travail est organisé en parties. La partie législative (articles L) est votée par le Parlement. La partie réglementaire comprend notamment les articles R (décrets en Conseil d'État) et D (décrets simples). Un article L pose souvent le principe ; un article R précise les modalités. Pour le bulletin, R. 3243-1 (mentions) complète L. 3243-1 (remise du bulletin). Vous ne pouvez pas vous contenter du principe si le décret impose une mention.\n\nLire un article, ce n'est pas extraire quatre mots. Il faut : le numéro exact, le texte consolidé (pas une fiche blog), la date d'entrée en vigueur, les renvois (« dans les conditions prévues par… »), et ce que le texte ne dit pas. L. 3121-27 fixe la durée légale à 35 heures par semaine : il ne dit pas que tout salarié est mensualisé 151,67 h, ni que toute heure du samedi est majorée, ni que la CCN ne peut pas prévoir une durée inférieure.\n\nCinq articles de ce module doivent devenir des réflexes, toujours relus avant application : L. 3121-27 (durée légale), L. 3121-28 (définition des heures supplémentaires), L. 3121-36 (majorations supplétives 25 % / 50 %), L. 3141-3 (droit à congés : 2,5 jours ouvrables par mois de travail effectif, sans dépasser 30 jours ouvrables au légal), L. 1221-10 (DPAE). Chacun a une conséquence paie : déclenchement des HS, taux de majoration à défaut d'accord, acquisition des CP, existence même du dossier social d'embauche.\n\nLe Code n'est pas exhaustif pour la paie. Les cotisations vivent surtout dans le Code de la sécurité sociale, les taux dans les barèmes URSSAF de la période, le bulletin aussi dans le BOSS. Un junior qui ne « fait de la paie qu'avec le Code du travail » oublie l'assiette, le PAS et la DSN. Un junior qui ignore le Code du travail fabrique des bruts sans fait juridique.",
      methode:
        "Méthode de lecture d'un article :\n1. Identifier L / R / D et le thème (durée, congés, bulletin, embauche).\n2. Ouvrir Légifrance, version en vigueur à la date de la paie (janvier 2026 pour les exercices).\n3. Lire l'article entier, puis les articles suivants du même chapitre si le texte renvoie.\n4. Noter ce qui est d'ordre public, ce qui est supplétif (« à défaut de convention ou d'accord »), ce qui est un minimum.\n5. Traduire en contrôle paie : quelle rubrique, quel déclenchement, quel document.\n6. Si le texte est muet sur le calcul (prorata, arrondi), ne pas inventer une « unique méthode légale » : chercher décret, BOSS, CCN, ou escalader.",
      exemple:
        "Lina prépare des HS de janvier 2026. Elle lit L. 3121-28 : sont des heures supplémentaires les heures accomplies au-delà de la durée légale (ou de la durée considérée comme équivalente). Elle lit L. 3121-36 : à défaut de convention ou d'accord, 25 % pour les huit premières heures supplémentaires, 50 % au-delà, dans le cadre de la semaine. Elle ouvre ensuite la CCN du dossier : si un accord fixe d'autres taux plus favorables, elle les applique ; si elle ne trouve rien, elle documente « taux légaux supplétifs » et ne recopie pas 50 % « pour faire simple ».",
      extra: [
        code(`ARTICLES-CLÉS PAIE (legal-sources.json — à relire sur Légifrance)
L. 3121-27   Durée légale 35 h / semaine
L. 3121-28   Heures au-delà = heures supplémentaires
L. 3121-36   Majorations supplétives 25 % (8 premières) / 50 % au-delà
L. 3141-3    CP légaux : 2,5 j ouvrables / mois de travail effectif (max 30)
L. 1221-10   DPAE avant embauche
L. 3243-1    Remise du bulletin (le salarié ne peut y renoncer)
R. 3243-1    Mentions du bulletin
L. 3123-9    Heures complémentaires (temps partiel) — pas des HS`),
      ],
      erreurs:
        "Mémoriser un taux de majoration et ne plus ouvrir le texte. Confondre durée légale et durée conventionnelle. Appliquer L. 3121-36 alors qu'un accord d'entreprise plus favorable existe et n'a pas été lu. Citer L. 3141-3 en jours ouvrés sans vérifier (le légal est en jours ouvrables). Traiter un article de blog RH comme le Code.",
      particuliers:
        "Forfait jours, équivalences, astreintes, temps d'habillage : régimes particuliers. Un junior ne requalifie pas un forfait. Travail de nuit, jeunes, IRP : règles spécifiques, à faire relire. Ordonnances récentes : toujours la version consolidée, pas le communiqué de presse.",
      exercice:
        "Pour chacun, dites l'article et la conséquence paie en une phrase.\n1. Un salarié temps plein 35 h a accompli 39 h sur une semaine, sans accord de majoration lu.\n2. Un CDI est prévu pour le 13 janvier, le dossier RH n'a pas de DPAE.\n3. Un salarié demande « mes 2,5 jours de CP du mois, en jours ouvrés ».",
      correction:
        "1. L. 3121-28 : 4 heures supplémentaires. L. 3121-36 : à défaut d'accord, majoration 25 % (ces 4 heures sont dans les 8 premières). Conséquence : brut majoré, cotisations sur le brut majoré, DSN des heures.\n2. L. 1221-10 : DPAE obligatoire. Conséquence : on n'ouvre pas un bulletin « pour voir » sans embauche déclarée ; alerte RH / responsable. Fiche pratique Service-Public F23107 à connaître comme processus, pas comme substitut de l'article.\n3. L. 3141-3 : 2,5 jours ouvrables par mois de travail effectif, plafond légal 30 jours ouvrables. On n'accorde pas 2,5 jours ouvrés « parce que le salarié le demande ». La CCN peut être plus favorable : la lire, ne pas l'inventer.",
    }),
    pack({
      title: "Conventions collectives, accords et usages",
      description: "Savoir où chercher une CCN et ce qu'un junior n'écrit jamais à la place du texte.",
      minutes: 20,
      objectifs:
        "Vous savez ce qu'est une CCN, un accord d'entreprise et un usage, vous identifiez l'impact sur le bulletin, et vous refusez d'inventer une clause.",
      theorie:
        "La convention collective de branche (CCN) complète le Code du travail pour un champ professionnel : classifications, minima, primes, maintien de salaire, préavis, indemnités, parfois durée du travail. L'accord d'entreprise peut aménager de nombreux thèmes dans le cadre légal. Le contrat peut être plus favorable au salarié. L'usage est une pratique générale, constante et fixe, que l'employeur a pu créer ; il ne se déclare pas à la légère.\n\nLa paie applique la CCN réellement applicable à l'établissement et à l'emploi, identifiée par le RH (IDCC, champ d'application). Vous ne « choisissez » pas la CCN la plus simple, ni celle de votre précédent employeur. Vous ne citez pas un coefficient, un minimum, un % de maintien maladie, un 13e mois, un jour de congé supplémentaire, si vous n'avez pas le texte sous les yeux. Ce parcours n'invente aucune clause de CCN : dès qu'un exercice touche un minimum ou un maintien, la consigne est « lire la CCN applicable » ou l'hypothèse est étiquetée.\n\nConséquences paie typiques d'une CCN (à vérifier dans le texte, jamais à mémoriser hors source) : salaire minimum conventionnel supérieur au SMIC ; prime d'ancienneté ; majoration HS différente du supplétif légal ; jours de CP au-delà de 30 ouvrables ; maintien maladie ; indemnité de préavis ou de licenciement plus favorable ; classification qui conditionne le statut cadre (donc APEC, parfois forfait).\n\nUn accord d'entreprise peut, par exemple, fixer les taux de majoration des HS dans le cadre de L. 3121-36 (« à défaut de convention ou accord »). S'il existe, il prime sur le taux supplétif. S'il n'est pas dans le dossier, vous n'en présumez pas l'existence. Le règlement intérieur n'est pas une CCN : discipline, hygiène, données ; il ne crée pas à lui seul une prime.",
      methode:
        "À l'ouverture d'un dossier :\n1. Demander l'IDCC et le texte consolidé (base CCN, avenants).\n2. Vérifier le champ d'application géographique et professionnel.\n3. Relier la classification du contrat (coefficient, statut, position) à la grille — sans inventer le coefficient : c'est le RH.\n4. Lister les rubriques paie potentiellement conventionnelles : minima, ancienneté, 13e mois, HS, CP, maintien, prévoyance.\n5. Paramétrage : déjà en place ? contrôlé par le responsable ? Vous ne paramétrez pas une CCN entière seul.\n6. En cas de silence du texte sur un calcul (prorata d'absence, arrondi) : escalader, ne pas « faire comme la CCN Syntec » par analogie.",
      exemple:
        "Cabinet d'expertise comptable, dossier client « commerce de gros », 14 salariés. Un collaborateur junior applique une prime de vacances « 10 % du brut » vue sur un autre dossier. Aucun article de la CCN du client, aucun accord, aucun contrat ne la prévoit. Les 14 bulletins de juin sont faux. La correction coûte un trop-perçu, une DSN rectificative et la confiance du client. La bonne pratique : fiche « rubriques conventionnelles du dossier » visée par le responsable, une ligne = une source.",
      erreurs:
        "Googler « CCN métallurgie prime ancienneté » et recopier un tableau de site commercial. Confondre IDCC. Appliquer un avenant non étendu comme s'il l'était, sans vérification. Croire que le SMIC « remplace » le minimum conventionnel (on compare, on retient le plus favorable au salarié dans le cadre des règles de minima). Inventer un coefficient cadre pour « coller à la fiche de poste ».",
      particuliers:
        "Entreprises multi-CCN (plusieurs activités). Changement de CCN (fusion, avenant de substitution) : le responsable paie et le juriste pilotent ; le junior ne bascule pas les dossiers. Accords de performance collective, intéressement, PEE : textes propres, pas un « 13e mois déguisé » sans lecture. Absence de CCN : le Code du travail et le contrat suffisent ; on n'en invente pas une « par analogie de métier ».",
      exercice:
        "Un contrat indique « classification : à définir, salaire 2 100 € brut, 35 h ». Le manager dit « mets-le technicien coeff. 250, comme les autres ». Que faites-vous, et quelles lignes de paie sont bloquées tant que la classification n'est pas écrite ?",
      correction:
        "Vous ne saisissez pas un coefficient sous dictée managériale. La classification conditionne minima CCN, parfois statut, prévoyance, APEC. Vous alertez RH / responsable : avenant ou contrat complet avant clôture. Bloquées ou sous revue : salaire vs minimum conventionnel, statut cadre/non-cadre, cotisations associées, libellé de poste sur le bulletin (R. 3243-1). Un brut de 2 100 € peut être saisi comme hypothèse de dossier si le contrat le porte, mais pas une classification fictive.",
    }),
    pack({
      title: "Contrats : CDI, CDD, intérim, temps plein et temps partiel",
      description: "Relier la nature du contrat aux rubriques, au temps de travail et aux risques de requalification.",
      minutes: 22,
      objectifs:
        "Vous distinguez les contrats du quotidien de paie, vous savez quelles données extraire, et vous identifiez ce qui change le bulletin sans requalifier vous-même un CDD.",
      theorie:
        "Le CDI à temps plein est le contrat de référence. Le CDD et le contrat de mission (intérim) sont des contrats précaires encadrés : motif, terme, renouvellement, indemnité de fin de contrat dans les cas prévus. Le temps partiel a un écrit, une durée contractuelle, des limites d'heures complémentaires (L. 3123-9). L'intérim : l'employeur de paie est l'ETT, pas l'entreprise utilisatrice ; le junior en ETT et le junior en entreprise utilisatrice n'ont pas le même dossier.\n\nConséquences paie immédiates. CDI temps plein mensualisé : salaire mensuel indépendant du nombre de jours du mois civil, sous réserve des absences et événements. CDD : dates de début et de fin, éventuellement indemnité de précarité et CP, DSN de fin, pas de « on laisse courir ». Temps partiel : le brut se calcule sur la durée contractuelle, pas sur 151,67 h ; les heures au-delà sont complémentaires, pas supplémentaires, tant qu'on n'atteint pas 35 h dans les conditions légales. Intérim : taux, IFM, ICP selon règles du travail temporaire — un junior hors ETT ne les invente pas.\n\nLe contrat fournit à la paie : identité, emploi, classification, durée du travail, lieu, rémunération (salaire de base, éléments), période d'essai, CCN visée, forfait éventuel. Si une de ces données manque, le bulletin est un risque. La paie ne « corrige » pas un CDI 35 h qui devrait être un forfait jours : elle alerte.\n\nTemps plein / temps partiel n'est pas un sentiment. C'est une durée écrite, comparée à la durée légale ou conventionnelle. Un « 80 % » sans heures ni jours est inexploitable. Un avenant de passage à temps partiel non signé ne se saisit pas « pour rendre service ».",
      methode:
        "À chaque nouvel enregistrement, extraire du contrat (pas du mail du manager) :\n- Nature (CDI, CDD motif et terme, intérim, autres)\n- Date d'entrée, date de fin prévue\n- Durée du travail (hebdo, mensuelle, répartition)\n- Rémunération : salaire de base, éléments, période\n- Classification / statut\n- Période d'essai (durée, renouvellement éventuel déjà écrit)\n- CCN et IDCC\n- Forfait (heures, jours) le cas échéant\nContrôler la cohérence avec la DPAE (L. 1221-10) et le paramétrage. Toute discordance = ticket RH, pas une « interprétation paie ».",
      extra: [
        code(`EXTRACTION CONTRAT → PAIE
Nature        : CDI / CDD (motif, terme) / intérim / autre
Entrée / fin  : ........ / ........
Durée         : ..... h / sem.   répartition : ..................
Mensualisation: [ ] oui  [ ] horaire  [ ] forfait jours/heures
Salaire base  : ........ €   (horaire / mensuel)
Classification: ................  Statut : non-cadre / cadre
Essai         : du ........ au ........  renouvelé ? ..............
IDCC          : ........  texte CCN dans le dossier ?  [ ] oui [ ] non
DPAE          : date ........  (L. 1221-10)
Points à escalader : .............................................`),
      ],
      exemple:
        "ETI industrielle, 180 salariés. Un CDD « surcroît » arrive en paie sans motif ni terme dans le fichier RH, seulement « 2 100 €, 35 h ». Le junior refuse de clôturer ce bulletin comme un CDI. Il demande le contrat. Sans terme, le risque de requalification n'est pas un débat de pause café : c'est un risque contentieux que le juriste et le RH traitent. La paie, elle, a besoin de dates pour prorata, IFM éventuelle, DSN.",
      erreurs:
        "Traiter un temps partiel comme un temps plein « au prorata mental » sans durée écrite. Verser une IFM de CDD hors cas légaux, ou l'oublier quand elle est due — les deux exigent le texte et le motif. Saisir des HS sur un temps partiel au lieu d'heures complémentaires. Confondre l'entreprise utilisatrice et l'employeur en intérim.",
      particuliers:
        "Contrat d'apprentissage, professionnalisation, saisonnier, intermittent : régimes propres (SMIC %, aides, DSN). Un junior ne calcule pas un % d'apprenti sans barème et grille d'âge/année lus. Télétravail, multi-emplois (plusieurs employeurs, plafonds) : modules ultérieurs. Promesse d'embauche vs contrat : le RH qualifie ; la paie part du contrat et de la DPAE.",
      exercice:
        "Salarié B, CDD du 13 au 31 janvier 2026, 35 h, 2 100 € brut mensuel équivalent temps plein. (1) Quel article impose la DPAE ? (2) Le brut de janvier se calcule-t-il comme 2 100 € pleins ? (3) Les 4 heures au-delà de 35 h en dernière semaine sont-elles des HS ou des heures complémentaires ?",
      correction:
        "1. L. 1221-10 : DPAE. Sans elle, alerte RH, pas de « premier bulletin bricolé ».\n2. Non : entrée le 13, sortie le 31, mois de 31 jours. Prorata d'entrée/sortie (méthode calendaire pédagogique du moteur : jours calendaires ; d'autres méthodes existent — module salaire brut). 2 100 € n'est pas le brut automatique de janvier.\n3. C'est un temps plein 35 h : au-delà, heures supplémentaires (L. 3121-28), pas complémentaires. Les heures complémentaires concernent le temps partiel (L. 3123-9).",
    }),
    pack({
      title: "Durée du travail, repos, congés et absences",
      description: "Relier L. 3121-27 et L. 3141-3 aux compteurs de paie, sans confondre CP, RTT, maladie et absence injustifiée.",
      minutes: 24,
      objectifs:
        "Vous savez ce qu'est la durée légale, ce qu'est un droit à congés légal, et comment une absence se traduit (ou non) par une retenue, un maintien ou un compteur.",
      theorie:
        "La durée légale du travail effectif des salariés à temps complet est de 35 heures par semaine (L. 3121-27). Cette durée sert de référence au déclenchement des heures supplémentaires légales. Une durée conventionnelle peut être inférieure : elle ne se confond pas avec la durée légale pour ce déclenchement. Un horaire collectif, un forfait, une modulation, des RTT relèvent d'autres textes (accord, CCN) : vous les appliquez s'ils sont dans le dossier, vous ne les inventez pas.\n\nLe droit à congés payés légal : 2,5 jours ouvrables par mois de travail effectif, sans que la durée totale du congé exigible n'excède 30 jours ouvrables (L. 3141-3). La CCN peut être plus favorable (jours supplémentaires, ouvrés). L'indemnité de congé se calcule, lors de la prise ou du solde, selon L. 3141-24 : comparaison maintien de salaire et dixième — ce n'est pas l'objet détaillé de cette leçon, mais vous savez déjà qu'on ne « laisse le salaire courir » sans méthode. Les compteurs CP sont des données paie : acquisition, prise, solde, dixième.\n\nRepos : repos quotidien et hebdomadaire, jours fériés (le 1er mai a un régime propre ; les autres fériés dépendent de la loi, de la CCN, de l'accord — on ne paie pas « tous les fériés chômés payés » par réflexe national hors 1er mai sans texte). Absences : chaque motif a un régime. CP : maintien selon méthode d'indemnité. RTT : compteur d'accord. Maladie : IJSS + maintien CCN/légal à lire, jamais un % inventé. Absence injustifiée : retenue pour temps non travaillé, dans le respect des règles, sans amende déguisée. Congé sans solde, parental, proche aidant : textes propres.\n\nConséquence paie : le « temps » n'est pas une ligne unique. C'est un fait (jours, heures), une qualification (travail effectif ou non), une source (loi, CCN, accord), puis une rubrique (salaire maintenu, retenue, indemnité, IJ). Deux absences de trois jours ne se saisissent pas pareil si l'une est du CP et l'autre une maladie.",
      methode:
        "Pour chaque absence du mois :\n1. Qualifier le motif avec la pièce (pose CP, avis d'arrêt, autorisation, nothing).\n2. Distinguer travail effectif / assimilé / non travaillé selon le texte applicable — sans assimilation inventive.\n3. Impact compteur (CP, RTT, ancienneté si la CCN le dit — la lire).\n4. Impact brut (maintien, retenue, indemnité).\n5. Impact social (IJ, subrogation, DSN événementielle selon process).\n6. Si le motif est douteux : ne pas saisir une retenue « punitive » ; escalader.",
      noteText:
        "Il n'existe pas une unique méthode légale de prorata pour toutes les absences. Jours calendaires, ouvrés, ouvrables, heures : le choix dépend du type d'absence, du contrat, de la CCN, de la jurisprudence appliquée par l'employeur sous revue. Le moteur pédagogique utilise le prorata calendaire pour les exemples chiffrés d'entrée/sortie (3100 × 10/31 = 1 000,00 €). Ne générez pas cette méthode à toutes les retenues d'absence.",
      exemple:
        "PME 42 personnes. En janvier 2026, Karim : 3 jours de CP posés + 2 jours d'arrêt maladie avec justificatif. Lina ouvre deux rubriques distinctes. Les CP suivent le compteur et L. 3141-3 / L. 3141-24. L'arrêt suit IJ / maintien (CCN à lire, pas un 100 % inventé) et le signalement. Fusionner « 5 jours d'absence » dans une seule retenue calendaire serait une erreur de qualification, même si le net « a l'air cohérent ».",
      erreurs:
        "Retenir 2,5 jours ouvrés au lieu d'ouvrables pour le légal. Déclencher des HS sur une semaine où l'absence n'a pas été qualifiée. Payer un férié chômé sans texte, ou ne pas payer le 1er mai travaillé sans vérifier. Appliquer le prorata calendaire à une absence de 3 jours « parce que le moteur le fait pour l'entrée ». Oublier que le travail effectif conditionne l'acquisition des CP (L. 3141-3) sans assimiler à tort.",
      particuliers:
        "Forfait jours : la durée 35 h n'est pas l'outil de décompte quotidien ; les CP restent dus. Temps partiel : CP selon règles de décompte propres, pas un demi-droit au feeling. Entrée/sortie dans le mois : acquisition proratisée selon règles, solde. Maladie pendant CP : régime spécifique, à traiter sous revue. Jours fériés d'une autre zone (Alsace-Moselle) : ne pas appliquer le régime général par analogie.",
      exercice:
        "Janvier 2026, 31 jours calendaires. Salariée temps plein, 2 500 € brut mensualisé, 35 h. Elle pose 2 jours de CP (pièce ok) et a 1 jour d'absence sans justificatif. (1) Quel article fixe l'acquisition légale des CP ? (2) Traitez-vous les 3 jours avec la même rubrique ? (3) Quelle est la durée légale de référence pour ses futures HS ?",
      correction:
        "1. L. 3141-3 : 2,5 jours ouvrables par mois de travail effectif, max 30 jours ouvrables au légal.\n2. Non. CP : décompte du compteur, indemnité de CP, pas une « retenue punitive ». Absence injustifiée : retenue pour temps non travaillé, méthode à confirmer (pas une amende), pièce et relance RH. Jamais une seule ligne « absence 3 j ».\n3. L. 3121-27 : 35 heures par semaine. Les HS se jugent à la semaine (L. 3121-28), pas « au mois de 151,67 h » par approximation, sauf organisation du décompte prévue par le dossier (modulation, etc.) lue et paramétrée.",
    }),
    pack({
      title: "Heures supplémentaires et heures complémentaires",
      description: "Appliquer L. 3121-28, L. 3121-36 et L. 3123-9 sans inverser les deux régimes.",
      minutes: 24,
      objectifs:
        "Vous définissez une HS et une heure complémentaire, vous appliquez les majorations légales supplétives, et vous savez que la CCN ou l'accord peuvent être plus favorables — sans les inventer.",
      theorie:
        "Les heures accomplies au-delà de la durée légale (ou de la durée considérée comme équivalente) sont des heures supplémentaires (L. 3121-28). La durée légale est de 35 heures par semaine (L. 3121-27). À défaut de convention ou d'accord, les HS sont majorées de 25 % pour les huit premières et de 50 % au-delà, dans le cadre de la semaine (L. 3121-36). Vous vérifiez CCN et accord avant d'appliquer ce taux légal supplétif. Vous n'inventez ni 10 %, ni 50 % dès la première heure, ni « samedi = 100 % ».\n\nLes heures complémentaires concernent le temps partiel (L. 3123-9). Elles s'accomplissent dans les limites du contrat et de la loi. Leurs majorations relèvent de L. 3123-21 et suivants (schéma légal souvent enseigné : 10 % puis 25 % selon le volume par rapport à la durée contractuelle). Relisez le texte consolidé et la CCN. Ne les traitez jamais comme des heures supplémentaires : mauvais libellé, mauvaise majoration, mauvaise DSN, parfois un dépassement du temps partiel qui pose un risque de requalification — que le junior signale, et ne requalifie pas seul.\n\nConséquences paie. Une HS majorée augmente le brut. Le brut majoré entre dans l'assiette des cotisations (principe L. 242-1 du CSS, détails au module Sécurité sociale). Le taux horaire de base servant à la majoration se déduit du salaire de base selon la méthode du dossier (mensuel / 151,67 h pour un 35 h mensualisé, ou taux horaire contractuel). Les heures doivent être validées (manager, badgeage, accord) : un junior n'invente pas 8 HS « comme d'habitude ». Contingent, repos compensateur, exonérations éventuelles : paramètres et textes de la période, sous revue, jamais une exonération mémorisée hors source.\n\nLe décompte est en principe hebdomadaire pour les HS légales, pas « 169 h dans le mois donc 17 HS ». Un mois de 31 jours n'autorise pas à transformer le calendrier en HS. Modulation, RTT, forfait : autres décomptes, textes exigés.",
      methode:
        "Ordre opérationnel :\n1. Temps plein ou partiel ? (contrat)\n2. Quelle durée de référence (légale 35 h, équivalence, horaire collectif) ?\n3. Quelles heures réellement accomplies et validées sur la semaine ?\n4. Si temps plein : HS (L. 3121-28). Si temps partiel : complémentaires (L. 3123-9), et alerte si l'on s'approche de 35 h.\n5. Taux de majoration : accord / CCN lus, sinon supplétif L. 3121-36 (HS) ou L. 3123-21 s. (complémentaires).\n6. Taux horaire de base : formule du dossier, pas un SMIC inventé si le salarié est au-dessus.\n7. Saisie, contrôle du brut, DSN des heures.\nPériode des exercices : janvier 2026, SMIC 12,02 €/h.",
      extra: [
        code(`JANVIER 2026 — exemple pédagogique (taux légaux supplétifs, pas une CCN)
Temps plein 35 h, salaire de base 2 500,00 €, mensualisé.
Taux horaire de base = 2 500,00 / 151,67 = 16,4832… → 16,48 € (arrondi au centime à confirmer selon règle d'arrondi du dossier).

Semaine S3 : 39 h travaillées validées → 4 HS.
À défaut d'accord : 4 HS dans les 8 premières → majoration 25 % (L. 3121-36).
Heure majorée = 16,48 × 1,25 = 20,60 €
4 HS = 82,40 € à ajouter au brut du mois (hors autres événements).

Temps partiel 24 h / semaine, taux horaire 14,00 € (contrat).
2 heures au-delà de 24 h, dans les limites du contrat = heures complémentaires (L. 3123-9).
Majoration : lire L. 3123-21 et CCN — ne pas saisir 25 % « comme des HS ».

SMIC horaire métropole 01/01/2026–31/05/2026 : 12,02 € (URSSAF).
Contrôle : aucun taux horaire de base inférieur au SMIC hors cas légaux (apprentis, etc.).`),
      ],
      exemple:
        "CSP, portefeuille non-cadres. Un manager valide « 12 HS » sur un salarié à 28 h contractuelles. Le junior ne saisit pas 12 HS à 25 %. Il requalifie en heures complémentaires, vérifie le plafond du contrat et de la loi, alerte si le volume fait basculer vers un temps plein de fait. Le senior décide de l'alerte RH. Le brut, les cotisations et la DSN suivent la bonne nature d'heures.",
      erreurs:
        "HS sur temps partiel. Majoration 50 % dès la première HS sans accord. Utiliser 151,67 h comme déclencheur hebdomadaire. Oublier que L. 3121-36 est supplétif. Calculer la majoration sur le SMIC alors que le taux contractuel est supérieur. Saisir des heures non validées pour « coller au budget d'atelier ».",
      particuliers:
        "Cadres au forfait jours : pas de HS au sens du décompte 35 h, sauf stipulations particulières lues. Cadres au forfait heures : décompte propre. Astreintes, temps d'intervention. Heures d'équivalence (certains transports, etc.) : durée légale « considérée comme équivalente » visée par L. 3121-28 — ne pas inventer l'équivalence. Contingent annuel et contrepartie obligatoire en repos : CCN / décret, sous revue.",
      exercice:
        "Janvier 2026. Salarié SMIC horaire 12,02 €, 35 h, 151,67 h mensualisé (salaire de base officiel 1 823,03 €/mois, URSSAF — ne pas recalculer 12,02 × 151,67 qui donne 1 823,07 € par effet d'arrondi). Semaine validée : 45 h. Pas d'accord de majoration. Calculez le montant brut des HS de la semaine (8 premières à 25 %, au-delà à 50 %).",
      correction:
        "Durée légale 35 h (L. 3121-27) → 10 HS (L. 3121-28).\nL. 3121-36 supplétif : 8 HS à 25 %, 2 HS à 50 %.\nHeure à 25 % : 12,02 × 1,25 = 15,025 → 15,03 € (arrondi commercial au centime).\nHeure à 50 % : 12,02 × 1,50 = 18,03 €.\n8 × 15,03 = 120,24 € ; 2 × 18,03 = 36,06 € ; total HS = 156,30 €.\nCes 156,30 € s'ajoutent au salaire de base du mois (sous réserve des autres événements). Ils sont du brut soumis. Le junior documente « taux légaux supplétifs, CCN non plus favorable lue ».",
    }),
    pack({
      title: "La période d'essai",
      description: "Qualifier l'essai, ses dates, le renouvellement, et l'impact paie d'une rupture pendant l'essai.",
      minutes: 18,
      objectifs:
        "Vous savez extraire la période d'essai du contrat, vous ne la prolongez pas seul, et vous préparez un bulletin de rupture d'essai sans improviser l'indemnité.",
      theorie:
        "La période d'essai permet à l'employeur d'évaluer les compétences du salarié et au salarié d'apprécier le poste. Elle n'est pas automatique : elle doit être prévue au contrat (ou par la CCN dans les conditions légales). Sa durée maximale dépend de la catégorie (ouvrier, ETAM, cadre) et des textes — le Code fixe des plafonds, la CCN peut prévoir des durées, le CDD a ses propres règles. Un junior ne « pose 4 mois » parce que « c'est cadre » : il lit le contrat et la CCN, et il fait valider.\n\nRenouvellement : seulement si le contrat et l'accord/CCN le prévoient, et avec accord du salarié dans les formes. Un mail du manager « on prolonge l'essai » n'est pas un renouvellement. Dates : l'essai a un terme. Absences : certaines suspendent le décompte ; on ne bricole pas une date de fin sans règle lue.\n\nConséquences paie. Pendant l'essai, le salarié est un salarié : bulletin, cotisations, CP qui s'acquièrent, SMIC, DPAE déjà faite (L. 1221-10). La rupture de l'essai n'est pas un licenciement : délai de prévenance (légal, à lire), pas d'indemnité de licenciement. Salaire jusqu'au dernier jour travaillé (ou selon prévenance), solde des CP, documents de fin, DSN de fin. Un junior ne calcule pas une indemnité de licenciement « pour faire propre ». Il ne retient pas un préavis de licenciement (L. 1234-1 vise d'autres ruptures).\n\nErreur classique : laisser le salarié dans le logiciel en « essai infini » et oublier le terme, donc oublier le passage en CDI confirmé ou la rupture. Autre erreur : prorata d'entrée correct, mais oubli du prévenance payé. La paie suit les dates RH écrites, pas l'ambiance de l'atelier.",
      methode:
        "Dès l'entrée :\n1. Dates d'essai dans le contrat (début, fin initiale, renouvellement possible ?).\n2. Alerte calendrier 10 jours avant le terme (RH : confirmer, renouveler dans les formes, ou rompre).\n3. Paramétrage : fin d'essai ≠ fin de contrat CDI.\n4. Si rupture : pièce RH, dernier jour, prévenance, CP, DSN, certificat, reçu pour solde — sous revue pour le premier dossier.\n5. Aucune saisie de « motif disciplinaire » sur le bulletin.",
      exemple:
        "Startup 12 personnes. Un développeur cadre, essai 3 mois au contrat, terme le 12 janvier 2026. Le 8 janvier, le fondateur dit « on continue, pas besoin d'écrit ». Le 13, le salarié est toujours là. Lina ne « renouvelle » rien dans le logiciel. Elle alerte : soit le CDI se poursuit hors essai (terme atteint), soit un renouvellement aurait dû être signé avant. Elle ne recule pas la date d'essai dans le SIRH pour « arranger » le fondateur.",
      erreurs:
        "Déduire l'essai de la CCN sans qu'il soit au contrat. Renouveler par oral. Appliquer un préavis de licenciement. Oublier les CP du solde d'essai. Couper les droits mutuelle/prévoyance sans règle du contrat collectif. Antidater une rupture.",
      particuliers:
        "CDD : essai plus court, formules légales selon durée du CDD — lire le texte, ne pas copier l'essai CDI. Intérim : période d'essai du contrat de mission, employeur = ETT. Rupture abusive alléguée : juriste, pas la paie. Délai de prévenance non respecté : peut se traduire en salaire (jours dus) ; le responsable calcule, le junior prépare les jours.",
      exercice:
        "CDI non-cadre, entrée 5 janvier 2026, essai contractuel 2 mois, pas de renouvellement écrit. Le manager veut rompre le 10 mars 2026 « pendant l'essai » et demande d'arrêter le salaire le jour même. Que contrôlez-vous ?",
      correction:
        "1. Terme de l'essai : 2 mois à compter du 5 janvier → autour du 4 mars (vérifier le décompte exact, suspensions d'absence). Le 10 mars, l'essai est très probablement expiré : ce n'est plus une rupture d'essai.\n2. Escalade RH / juriste : qualification de la rupture (licenciement ?). Le junior ne saisit pas une fin d'essai hors délai.\n3. Même pendant un essai encore en cours, un délai de prévenance existe : on ne coupe pas le salaire « le jour même » sans lire ce délai. 4. DPAE déjà faite à l'entrée (L. 1221-10) ; DSN de fin selon la vraie qualification. 5. CP, documents de fin. Rien d'inventé.",
    }),
    pack({
      title: "Modification, suspension et rupture du contrat",
      description: "Qualifier l'événement (avenant, arrêt, démission, licenciement, rupture conventionnelle) avant toute rubrique.",
      minutes: 22,
      objectifs:
        "Vous distinguez modification, suspension et rupture, vous savez quelles pièces conditionnent la paie, et vous n'improviserez ni un préavis ni une indemnité de rupture.",
      theorie:
        "Modifier le contrat (durée du travail, rémunération, lieu dans certains cas, qualification) exige en principe un avenant, avec les règles du consentement. Un manager qui dit « passe-le à 28 h » ne crée pas un temps partiel. Sans avenant, la paie conserve le contrat en vigueur et alerte. Conséquence : un temps partiel saisi sans écrit fausse le brut, les heures complémentaires, les cotisations, parfois les aides et le chômage futur du salarié.\n\nSuspendre le contrat : maladie, maternité, accident du travail, conscription, etc. Le contrat demeure ; l'exécution et souvent la rémunération changent. La paie bascule vers maintien / IJ / subrogation / DSN événementielle. On ne « licencie pas dans le logiciel » un salarié en arrêt. On ne maintient pas 100 % parce que « c'est plus simple » si le texte prévoit autre chose.\n\nRompre : démission, licenciement, rupture conventionnelle (L. 1237-11 et suivants : homologation, indemnité spécifique), fin de CDD, rupture d'essai, prise d'acte, etc. Chaque mode a un régime d'indemnité, de préavis (repère L. 1234-1 pour le licenciement : durées légales selon ancienneté, sauf usage ou CCN plus favorables), de documents, de DSN, de chômage. Un junior ne calcule pas une indemnité de licenciement ou de rupture conventionnelle sans consigne, barème et revue. Il prépare : dernier jour, salaire dû, CP, primes, acomptes, avantages, retenues licites.\n\nConséquence paie transversale : le solde de tout compte n'est pas « le dernier bulletin plus une ligne ». C'est un événement juridique d'abord, un calcul ensuite. Antidater, inventer un motif, ou verser une transaction non qualifiée, sort de l'autonomie.",
      methode:
        "Réflexe :\n1. Quel événement ? (modification / suspension / rupture)\n2. Quelle pièce (avenant signé, avis d'arrêt, lettre, homologation) ?\n3. Quelles dates (effet, préavis, dernier jour travaillé) ?\n4. Quel impact brut du mois (prorata, maintien, indemnités — ces dernières sous revue) ?\n5. DSN : mensuelle et signalements selon process net-entreprises, pas un « export au feeling ».\n6. Documents de fin et confidentialité.\nSi la pièce manque : pas de saisie définitive.",
      exemple:
        "PME 55 salariés. Rupture conventionnelle : le responsable demande à Lina de « mettre 3 000 € d'indemnité ». Aucun formulaire, aucune homologation. Lina prépare le bulletin de salaire habituel du mois et un dossier « indemnité en attente de pièces L. 1237-11 s. ». Elle ne verse pas 3 000 € en « prime exceptionnelle » pour contourner. Le régime social et fiscal de l'indemnité dépend de sa qualification : une prime n'est pas une indemnité de rupture.",
      erreurs:
        "Saisir un avenant oral. Transformer une rupture conventionnelle en prime. Appliquer L. 1234-1 à une démission sans lire le préavis de démission (contrat, CCN). Oublier le prorata du dernier mois. Couper la mutuelle le jour de l'annonce, pas le jour de la fin du contrat. Calculer une indemnité avec un simulateur grand public non sourcé.",
      particuliers:
        "Licenciement économique, inaptitude, force majeure, décès : régimes propres, junior sous revue. Transaction : juriste. Clause de non-concurrence et contrepartie financière : texte du contrat, mensualités éventuelles après sortie. Prise d'acte / résiliation judiciaire : ne pas qualifier. Transfert d'entreprise (L. 1224-1) : le contrat continue, la paie change d'employeur déclarant avec le RH.",
      exercice:
        "Salarié CDI, 2 500 €, démission avec préavis d'un mois travaillé, dernier jour le 31 janvier 2026. Le manager demande d'arrêter le salaire le 15 « il est déjà ailleurs ». Listez ce que vous payez en janvier et ce que vous escaladez.",
      correction:
        "Tant que le préavis est dû et travaillé (ou dispensé avec maintien selon décision employeur écrite), le salaire court jusqu'au 31. Vous ne coupez pas au 15 sur ordre oral. Janvier : salaire de base 2 500 € (mois complet), variables validées, CP si pris, pas d'indemnité de licenciement. Escalade : dispense de préavis ? nouveau contrat ailleurs ( loyauté, mais la paie suit les dates RH). Documents de fin au 31. DSN de fin. Pas de retenue punitive pour « déjà ailleurs ».",
    }),
    pack({
      title: "Obligations de l'employeur et du salarié",
      description: "Lister les obligations qui créent un geste paie, de la DPAE au bulletin, sans transformer le junior en DRH.",
      minutes: 18,
      objectifs:
        "Vous reliez les obligations légales de l'employeur à des contrôles de paie, et vous savez ce que le salarié doit fournir sans devenir le recouvrement disciplinaire.",
      theorie:
        "L'employeur fournit le travail, paie le salaire, respecte la durée du travail, la santé, la sécurité, la non-discrimination, déclare les embauches, remet un bulletin (L. 3243-1 : le salarié ne peut renoncer à cette remise), déclare les cotisations, applique le PAS, conserve les données dans un cadre licite (RGPD). Le salarié exécute le contrat, respecte les horaires et consignes licites, justifie certaines absences, informe des éléments nécessaires au bulletin (coordonnées bancaires, taux PAS via le canal prévu, ayants droit mutuelle selon process).\n\nLa DPAE (L. 1221-10) est une obligation d'embauche, coordonnée RH / paie, pas un acte isolé du junior. Sans DPAE, l'emploi est irrégulier ; la paie n'ouvre pas un dossier « on régularisera ». Le bulletin (R. 3243-1, BOSS) est une obligation de mentions et de remise. Le paiement à date, le respect du SMIC (12,02 €/h au 01/01/2026 métropole), l'affiliation aux organismes, la DSN (net-entreprises) sont des obligations de l'employeur : le gestionnaire les opérationnalise.\n\nLe salarié n'a pas à « accepter » un net erroné. Il n'a pas à recevoir son bulletin par WhatsApp personnel. Il doit, en revanche, fournir les pièces d'arrêt, signaler un changement d'IBAN par le canal sécurisé, ne pas badgeer pour un collègue. La paie n'est pas le service disciplinaire : une fraude au temps se documente et s'escalade, elle ne se « corrige » pas par une retenue inventée.\n\nLimite junior : vous ne conseillez pas un salarié sur son imposition personnelle au-delà de l'explication du PAS figurant sur le bulletin. Vous ne négociez pas une rupture. Vous ne promettez pas un maintien maladie. Vous garantissez l'exactitude de ce que vous saisissez et contrôlez, et la remontée de ce qui manque.",
      methode:
        "Checklist d'ouverture de dossier employeur (une fois) et salarié (à chaque entrée) :\nEmployeur : SIRET, IDCC, effectif, organismes (URSSAF, retraite, mutuelle, prévoyance), taux AT notifié, calendrier de paie, habilitations.\nSalarié : contrat, DPAE, identité, RIB, visites médicales selon process RH, affiliation mutuelle, variables de temps.\nChaque mois : pièces d'absence, validation des heures, remise du bulletin, paiement, DSN.\nÉcart = obligation non tenue ou pièce manquante, pas un « bug logiciel » par défaut.",
      extra: [
        code(`OBLIGATIONS → GESTES PAIE
L. 1221-10 DPAE          → pas de bulletin d'entrée sans déclaration
L. 3243-1  remise        → canal sécurisé, pas de renonciation
R. 3243-1  mentions      → contrôle de forme du bulletin (module 03)
SMIC 12,02 € (01/2026)   → contrôle taux horaire
Salaire à échéance       → fichier SEPA après validation
DSN net-entreprises      → canal déclaratif, pas un export bricolé
PAS DGFiP                → taux transmis, assiette = net imposable
RGPD / CNIL              → habilitations, conservation, destinataire`),
      ],
      exemple:
        "Cabinet. Un client dirigeant dit : « On ne fait plus de DPAE, c'est trop long, on paiera cash le premier mois. » Le collaborateur junior refuse. L. 1221-10 n'est pas une option client. Il alerte le responsable de dossier. La mission n'autorise pas à organiser du travail dissimulé. Le bulletin « cash » n'efface pas l'obligation.",
      erreurs:
        "Ouvrir un dossier sans DPAE. Envoyer le bulletin à une adresse perso non sécurisée « pour aller plus vite ». Expliquer le taux PAS du conjoint. Retenir un salaire entier pour une absence d'une demi-journée non encore qualifiée. Croire que le salarié peut signer « je n'ai pas besoin de bulletin ».",
      particuliers:
        "Employeurs multiples, particuliers employeurs, association, travail dissimulé détecté a posteriori : régularisation sous responsable, parfois organismes. Mineurs, étrangers (titre) : RH avant paie. Grève : rémunération selon règles, pas une retenue « dissuasive » hors temps non travaillé.",
      exercice:
        "Un salarié refuse le bulletin électronique et demande une version papier. Un autre écrit « pas besoin de bulletin, virez juste ». Que répondez-vous, article à l'appui ?",
      correction:
        "L. 3243-1 : l'employeur remet un bulletin lors du paiement ; le salarié ne peut renoncer à cette remise. Le second salarié n'a pas le droit de « signer une renonciation ». Le premier : la remise électronique a un cadre (conditions d'accès, conservation) ; s'il s'y oppose dans les conditions prévues, un bulletin papier reste dû. Vous ne discutez pas l'obligation ; vous suivez le canal prévu par l'entreprise, conforme à la remise.",
    }),
    pack({
      title: "La hiérarchie des normes en paie",
      description: "Trancher une contradiction apparente sans inventer, et documenter le choix retenu.",
      minutes: 20,
      objectifs:
        "Vous appliquez un ordre de lecture (ordre public, faveur, CCN, accord, contrat), vous savez quand le principe de faveur s'arrête, et vous n'arbitrez pas seul un conflit complexe.",
      theorie:
        "Toutes les sources ne pèsent pas le même poids. Certaines règles sont d'ordre public : on ne y déroge pas, même par accord, dans un sens défavorable au salarié (SMIC, certaines durées maximales, santé, DPAE, mentions du bulletin, règles de sécurité sociale d'assiette). D'autres sont supplétives : elles s'appliquent à défaut d'accord (exemple : majorations L. 3121-36). D'autres encore sont des minima : la CCN ou le contrat peuvent être plus favorables (CP au-delà de L. 3141-3).\n\nLe principe de faveur (retenir la disposition plus favorable au salarié) reste un réflexe, mais il a été aménagé : dans de nombreux domaines, l'accord d'entreprise peut prévaloir sur la CCN selon les règles de la négociation collective. Un junior ne joue pas à « quelle norme gagne » sur un thème de négociation. Il constate : il existe un accord d'entreprise daté sur les HS ; il l'applique s'il est dans le dossier ; sinon le supplétif légal ; si deux textes semblent se contredire, il escalade avec les copies.\n\nOrdre opérationnel de lecture pour la paie : (1) ordre public légal et sécurité sociale ; (2) décret / arrêté de la période (SMIC, PMSS) ; (3) accord d'entreprise applicable au thème, s'il existe ; (4) CCN ; (5) contrat plus favorable ; (6) usage s'il est établi ; (7) politique interne qui n'est pas une norme mais un process (calendrier de gel). Le BOSS n'entre pas dans la hiérarchie comme une loi : c'est la doctrine administrative, décisive pour le contrôle URSSAF, à suivre ou à faire arbitrer.\n\nConséquence paie : vous documentez la norme retenue sur les rubriques sensibles (HS, CP, maintien, minima). Un paramétrage logiciel est une traduction, pas une source. Si le logiciel applique 25 % et que l'accord dit mieux, c'est le logiciel qu'on corrige (responsable), pas le salarié qu'on éconduit.",
      methode:
        "En cas de contradiction apparente :\n1. Écrire les deux textes (extrait, date, article).\n2. Qualifier : ordre public / supplétif / minima / accord d'entreprise / contrat.\n3. Vérifier le thème (la prévalence accord vs CCN n'est pas universelle).\n4. Ne pas trancher un thème de négociation collective seul.\n5. Ticket au responsable avec les extraits, pas un résumé oral.\n6. En attendant : ne pas clôturer la rubrique concernée sur une invention.",
      extra: [
        code(`HIÉRARCHIE OPÉRATIONNELLE — aide-mémoire junior
[Ordre public]     SMIC, DPAE (L. 1221-10), remise bulletin, assiettes CSS,
                   durées max, santé, non-discrimination
[Paramètre annuel] SMIC 12,02 € ; PMSS 4 005 € ; PASS 48 060 € (01/2026)
[Accord entreprise] s'il existe ET s'applique au thème — le lire
[CCN / branche]    minima, primes, maintien, classifications — le lire
[Supplétif légal]  ex. L. 3121-36 si pas d'accord de majoration
[Contrat]          plus favorable au salarié ; jamais moins que l'ordre public
[Usage]            seulement s'il est établi ; junior ne le « crée » pas
[Process interne]  gel des variables, circuit de validation — pas une CCN
[Logiciel]         traduction. S'il contredit le texte, on corrige le paramètre.

JAMAIS : « c'est comme ça chez l'ancien employeur »  |  arrêt non lu
         clause CCN inventée                         |  taux AT national`),
      ],
      exemple:
        "Industrie, CCN applicable lue : majoration HS 30 % dès la première heure. Accord d'entreprise silencieux. L. 3121-36 dirait 25 % / 50 %. Le responsable confirme : on applique 30 % si c'est bien le texte de branche applicable et plus favorable, sauf règle de prévalence contraire sur ce thème — qu'un junior ne tranche pas. Lina saisit 30 % après visa, et note la source dans le dossier de paramétrage. Elle n'applique pas 25 % « parce que c'est le Code ».",
      erreurs:
        "Croire que le Code l'emporte toujours. Croire que la CCN l'emporte toujours. Laisser le logiciel gagner. Trancher un conflit accord/CCN par un forum. Appliquer le SMIC en ignorant un minimum conventionnel plus élevé. Invoquer un usage de 2 mois d'ancienneté.",
      particuliers:
        "Statut cadre / forfait : le contrat ne peut pas écarter le SMIC sur un horaire comparable sans vérifier le cadre légal du forfait. Accords de branche étendus vs non étendus. Outre-mer, Alsace-Moselle : corpus additionnel. Droit européen : durées, congés, temps partiel — en cas de doute, juriste.",
      exercice:
        "Trois affirmations circulent dans l'open space. Corrigez-les avec la hiérarchie.\nA. « L'accord d'entreprise est illégal s'il est moins-disant que la CCN, toujours. »\nB. « L. 3121-36 s'applique même si la CCN prévoit 30 % dès la première HS. »\nC. « Le contrat peut fixer 11,50 € de l'heure, le salarié a signé. »",
      correction:
        "A. Faux en tant que formule universelle : selon les thèmes, l'accord d'entreprise peut prévaloir. Un junior n'applique pas ce slogan ; il lit et escalade.\nB. Faux si la CCN (ou l'accord) prévoit une majoration plus favorable : L. 3121-36 est supplétif (« à défaut de convention ou accord »). 30 % dès la première heure, si tel est le texte lu, s'applique à la place de 25 %.\nC. Faux : ordre public du SMIC. Au 01/01/2026, 12,02 €/h métropole (URSSAF). La signature du salarié ne lève pas le SMIC. Bulletin bloqué, alerte responsable.",
    }),
    quizLesson({
      title: "Quiz — Fondamentaux du droit du travail",
      description: "Vérifier sources, articles-clés, contrats, HS et limites d'autonomie.",
      passing_score: 70,
      questions: [
        q({
          question: "Quelle est la durée légale du travail effectif à temps complet, article L. 3121-27 ?",
          options: [
            "A. 39 heures par semaine",
            "B. 35 heures par semaine",
            "C. 151,67 heures par semaine",
            "D. La durée prévue par n'importe quelle CCN, qui remplace la durée légale",
          ],
          correct: 1,
          explanation:
            "L. 3121-27 fixe la durée légale à 35 heures par semaine. 151,67 h est une mensualisation usuelle, pas la durée légale hebdomadaire. Une durée conventionnelle inférieure ne se confond pas avec la durée légale pour le déclenchement des HS.",
        }),
        q({
          question: "Selon L. 3121-28, une heure supplémentaire est :",
          options: [
            "A. Toute heure accomplie le samedi",
            "B. Toute heure au-delà de 151,67 h dans le mois civil",
            "C. Une heure accomplie au-delà de la durée légale ou de la durée considérée comme équivalente",
            "D. Une heure complémentaire d'un temps partiel",
          ],
          correct: 2,
          explanation:
            "L. 3121-28 rattache les HS à la durée légale (ou équivalente), en pratique au décompte hebdomadaire sauf organisation particulière lue. Le samedi n'est pas une HS par nature. Les heures complémentaires relèvent du temps partiel (L. 3123-9).",
        }),
        q({
          question: "À défaut de convention ou d'accord, L. 3121-36 prévoit pour les HS :",
          options: [
            "A. 10 % dès la première heure",
            "B. 25 % pour les huit premières, 50 % au-delà, dans le cadre de la semaine",
            "C. 50 % dès la première heure",
            "D. Un taux unique 25 % annuel, quel que soit le volume",
          ],
          correct: 1,
          explanation:
            "Article L. 3121-36 : schéma supplétif 25 % / 50 %. Toujours vérifier CCN et accord plus favorables avant d'appliquer ce défaut. Ce n'est pas un taux de CCN inventé.",
        }),
        q({
          question: "Le droit à congés payés légal de L. 3141-3 est :",
          options: [
            "A. 2,5 jours ouvrables par mois de travail effectif, sans dépasser 30 jours ouvrables",
            "B. 2,5 jours ouvrés par mois, plafond 25 jours ouvrés uniquement",
            "C. 5 semaines imposées en août",
            "D. Un usage, pas une obligation légale",
          ],
          correct: 0,
          explanation:
            "L. 3141-3 : 2,5 jours ouvrables par mois de travail effectif, plafond légal 30 jours ouvrables. La CCN peut être plus favorable. Le décompte en ouvrés n'est pas le libellé légal.",
        }),
        q({
          question: "L'article L. 1221-10 concerne :",
          options: [
            "A. Les mentions du bulletin de paie",
            "B. La déclaration préalable à l'embauche (DPAE)",
            "C. Le taux de majoration des heures complémentaires",
            "D. Le préavis de licenciement",
          ],
          correct: 1,
          explanation:
            "L. 1221-10 impose la DPAE. Les mentions du bulletin relèvent notamment de R. 3243-1. Le préavis de licenciement a d'autres articles (repère L. 1234-1). Un junior coordonne la DPAE avec les RH, il ne l'omet pas.",
        }),
        q({
          question: "Sur un contrat à temps partiel, les heures au-delà de la durée contractuelle, dans les limites légales, sont :",
          options: [
            "A. Des heures supplémentaires au sens de L. 3121-28",
            "B. Des heures complémentaires (L. 3123-9), distinctes des HS",
            "C. Du bénévolat",
            "D. Toujours majorées de 50 %",
          ],
          correct: 1,
          explanation:
            "L. 3123-9 : heures complémentaires du temps partiel. Ne pas les traiter comme des HS. Les majorations se lisent en L. 3123-21 et suivants et dans la CCN, pas un 50 % automatique.",
        }),
        q({
          question: "Un taux AT/MP de 1,50 % dans un exercice de ce parcours est :",
          options: [
            "A. Le taux national unique 2026",
            "B. Une hypothèse pédagogique de dossier, le taux réel étant notifié par la Carsat",
            "C. Un taux de CCN métallurgie",
            "D. Le taux chômage URSSAF",
          ],
          correct: 1,
          explanation:
            "Il n'existe pas de taux AT/MP national unique applicable à tous les établissements. 1,50 % est étiqueté HYPOTHÈSE. En dossier réel, on saisit la notification Carsat.",
        }),
        q({
          question: "Un manager dicte un coefficient CCN et une prime d'ancienneté « comme dans mon ancienne boîte ». Le junior :",
          options: [
            "A. Saisit immédiatement pour tenir le gel",
            "B. Invente un % d'ancienneté standard 3 %",
            "C. Refuse d'inventer une clause ; il exige le contrat / la CCN applicable et escalade",
            "D. Applique la CCN Syntec par défaut",
          ],
          correct: 2,
          explanation:
            "Les CCN ne s'inventent pas et ne se recopient pas d'un employeur à l'autre. Classification et primes conventionnelles exigent le texte applicable. La vitesse de clôture ne lève pas cette règle.",
        }),
        q({
          question: "Pendant une période d'essai prévue au contrat, le salarié :",
          options: [
            "A. N'a pas droit au bulletin tant que l'essai n'est pas confirmé",
            "B. Est un salarié : bulletin, cotisations, SMIC, acquisition de CP ; la DPAE (L. 1221-10) a déjà dû être faite",
            "C. Est payé hors cotisations « pour tester »",
            "D. Peut renoncer au bulletin (L. 3243-1 l'autorise)",
          ],
          correct: 1,
          explanation:
            "L'essai n'exclut pas le statut de salarié. L. 3243-1 interdit la renonciation au bulletin. Les cotisations sont dues. La DPAE est une obligation d'embauche, pas de confirmation d'essai.",
        }),
        q({
          question: "L. 3121-36 est un article :",
          options: [
            "A. D'ordre public absolu : aucun accord ne peut prévoir d'autre majoration",
            "B. Supplétif : il s'applique à défaut de convention ou d'accord",
            "C. Uniquement applicable aux cadres",
            "D. Un taux URSSAF de cotisations",
          ],
          correct: 1,
          explanation:
            "Le texte même de L. 3121-36 pose le « à défaut de convention ou accord ». Un accord ou une CCN plus favorable se lit et s'applique. Ce n'est ni un taux de cotisation, ni une règle réservée aux cadres.",
        }),
      ],
    }),
  ],
};
