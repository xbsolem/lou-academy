import { pack, quizLesson, q, code, note } from "../lib.mjs";

export default {
  position: 2,
  title: "Droit de la Sécurité sociale",
  description:
    "Comprendre l'architecture sociale, les organismes, les assiettes, les plafonds 2026 et ce qu'un junior n'invente jamais comme taux.",
  lessons: [
    pack({
      title: "Organisation de la protection sociale",
      description: "Cartographier régime de base, complémentaire, prévoyance et chômage, et relier chaque bloc au bulletin.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous savez situer un salarié du régime général dans l'architecture de la protection sociale, nommer les financeurs, et relier chaque bloc à des lignes de bulletin ou à un organisme.",
      theorie:
        "La protection sociale française n'est pas un organisme unique. Pour un salarié du régime général en métropole (périmètre de ce parcours, janvier 2026), on distingue plusieurs étages. Le régime de base de Sécurité sociale couvre notamment la maladie (assurance maladie), les accidents du travail et maladies professionnelles, les prestations familiales, et l'assurance vieillesse de base. L'assurance chômage est un régime spécifique, financé notamment par une contribution patronale recouvrée avec les cotisations sociales. La retraite complémentaire Agirc-Arrco est obligatoire pour les salariés du privé. La complémentaire santé (mutuelle) collective est une obligation d'employeur dans le cadre légal ; la prévoyance (incapacité, invalidité, décès) est souvent conventionnelle, surtout pour les cadres.\n\nCes étages n'ont pas le même recouvreur, ni la même assiette, ni le même destinataire. L'URSSAF recouvre une part majeure des cotisations et contributions du régime général et du chômage (et d'autres). Les caisses de retraite complémentaire gèrent Agirc-Arrco (souvent via le même canal DSN). Les organismes de mutuelle et de prévoyance sont des assureurs / institutions de prévoyance / mutuelles, avec un contrat collectif d'entreprise. L'assurance maladie verse les IJ ; la Carsat notifie le taux AT/MP. La DGFiP n'est pas un organisme de Sécurité sociale : le PAS est de l'impôt, prélevé sur le net imposable, distinct des cotisations.\n\nConséquence paie : chaque ligne du bulletin social a une nature (cotisation, contribution, prélèvement, part salariale, part patronale), une assiette (totalité, plafond, tranche, forfait), un taux de la période, un organisme. Un junior qui fusionne « les charges » en un pourcentage unique de 40 % ne peut ni expliquer un net, ni contrôler une DSN, ni rapprocher un avis de versement. Le Code de la sécurité sociale (assiette, L. 242-1) et les barèmes URSSAF de la période sont aussi indispensables que le Code du travail.\n\nHors parcours, d'autres régimes existent (MSA agricole, régimes spéciaux, indépendants, fonction publique). Un salarié « MSA » n'est pas paramétré comme un régime général. Le junior identifie le régime à l'ouverture du dossier ; il ne « convertit » pas.",
      methode:
        "À l'ouverture d'un dossier employeur, dressez la carte :\n1. Régime (général, MSA, autre) et lieu (métropole / autre).\n2. Recouvreur principal (URSSAF de rattachement).\n3. Retraite complémentaire (groupe Agirc-Arrco, codes DSN déjà paramétrés ?).\n4. AT/MP : notification Carsat de l'établissement, jamais un taux « du voisin ».\n5. Mutuelle / prévoyance : contrats, parts, population (cadres / non-cadres).\n6. Effectif (seuil FNAL 50, autres seuils) : donnée RH, pas une estimation.\n7. Qui déclare (DSN), qui paie, qui lit les CRM et avis.\nSans cette carte, tout bulletin est un tirage au sort organisé.",
      extra: [
        code(`CARTE PROTECTION SOCIALE — dossier employeur
Régime              : général / MSA / autre : ....................
URSSAF              : ....................  SIRET : ..............
Carsat / taux AT    : notification ........  taux : .... % (établissement)
Agirc-Arrco         : groupe / codes : ...........................
Mutuelle            : organisme ........  part S / P : hypothèse dossier
Prévoyance          : [ ] cadres  [ ] non-cadres  contrat : ......
Effectif retenu     : .......  (FNAL 0,10 % plaf. si < 50 ; 0,50 % si ≥ 50)
Chômage / AGS       : recouvrement URSSAF — taux période 2026 (barème)
PAS                 : DGFiP — n'est PAS une cotisation sociale`),
      ],
      exemple:
        "ETI 280 personnes, deux établissements. Lina découvre que le taux AT de l'atelier n'est pas celui du siège. Paramétrer un taux unique « pour simplifier » fausse le coût employeur, la DSN par établissement, et le dialogue avec la Carsat. La protection sociale se décline par établissement quand le paramètre est d'établissement. Le régime de base, lui, reste le régime général pour les deux sites.",
      erreurs:
        "Parler de « la Sécu » comme d'une ligne unique. Confondre mutuelle et maladie de base. Traiter le PAS comme une cotisation URSSAF. Oublier que le chômage est recouvré par l'URSSAF mais finance un autre régime. Copier le paramétrage MSA d'un dossier agricole sur un dossier régime général « parce que les taux de vieillesse se recoupent » : le recoupement MSA 2026 sert ici de source de barème (vieillesse, CSG), pas d'assimilation de régime.",
      particuliers:
        "Non-résidents fiscaux : maladie salariale 5,50 % (barème), hors le 0 % du domicilié fiscal France. Multi-employeurs : plafonds à coordonner. Portage, GSE, mise à disposition : qui est l'employeur affilié ? Expatriation / détachement : textes spécifiques, hors autonomie junior.",
      exercice:
        "Classez : régime de base, chômage, retraite complémentaire, complémentaire santé, impôt.\nA. CSG/CRDS\nB. Agirc-Arrco T1\nC. Mutuelle 20/40 € d'un dossier fictif\nD. Contribution chômage 4,00 %\nE. PAS",
      correction:
        "A. Contributions sociales (prélèvements sociaux) recouvrées avec le social, assiette spécifique 98,25 % jusqu'à 4 PASS — ni retraite complémentaire, ni impôt sur le revenu.\nB. Retraite complémentaire obligatoire Agirc-Arrco.\nC. Complémentaire santé : contrat collectif, HYPOTHÈSE 20/40 € dans le parcours, pas un taux URSSAF.\nD. Assurance chômage, taux plein patronal 4,00 % dans la limite de 4 PASS (URSSAF privé 01/01/2026).\nE. Impôt DGFiP, assiette = net imposable, pas une cotisation de Sécurité sociale.",
    }),
    pack({
      title: "L'URSSAF : rôle, recouvrement, contrôle",
      description: "Comprendre ce que l'URSSAF recouvre, comment on lui parle (DSN), et ce qu'un junior ne lui demande pas « à l'oral pour avis ».",
      minutes: 20,
      objectifs:
        "Vous savez ce que l'URSSAF recouvre pour un employeur du privé, vous reliez DSN et paiement, et vous connaissez les limites d'un échange junior / inspecteur.",
      theorie:
        "L'URSSAF recouvre les cotisations et contributions du régime général et un ensemble d'autres ressources (dont, pour le privé, le chômage et l'AGS selon le barème de la période). Elle n'est pas « la retraite complémentaire », ni « la mutuelle », ni « les impôts ». Elle publie les taux et plafonds du secteur privé : c'est la source à utiliser pour les paramètres 2026 de ce parcours (taux au 01/01/2026, plafonds issus de l'arrêté du 22 décembre 2025).\n\nLe canal déclaratif est la DSN (net-entreprises) : mensuelle, signalements, blocs, contrôles, CRM. Un junior apprend la logique ; il n'invente pas une norme de bloc. L'avis de versement et le lettrage comptable (comptes 43x) se rapprochent des totaux employeur du journal de paie. Un écart de centime sur 200 bulletins n'est pas « rien » s'il casse le rapprochement.\n\nLe contrôle URSSAF examine l'assiette (L. 242-1 et textes d'application, BOSS), les bases, les exonérations, les avantages, les dates. La doctrine BOSS oriente l'administration. Un paramétrage d'exonération mal activé, un avantage en nature oublié, un plafond non régularisé, un taux AT erroné : ce sont des motifs classiques. Le junior documente les hypothèses et n'active pas une exonération « parce que le logiciel le propose ».\n\nLimite d'autonomie : on ne téléphone pas à l'URSSAF « pour avoir un avis » sans dossier, sans responsable, et sans question écrite. Un oral non tracé n'est pas une rescrit. En cas de contrôle, le responsable paie et, souvent, l'expert-comptable ou l'avocat, pilotent. Le junior prépare les pièces (bulletins, contrats, DSN, notifications AT).",
      methode:
        "Chaque mois après clôture :\n1. Contrôler les totaux salariaux / patronaux du journal vs DSN.\n2. Lire les CRM / anomalies, ne pas les archiver sans traitement.\n3. Rapprocher le paiement (SEPA URSSAF) avec la comptabilité.\n4. Classer les notifications (AT, mises en demeure) vers le responsable.\n5. Ne jamais « arrondir » un écart de base pour faire coller.\nEn janvier : vérifier que le PMSS 4 005 € et les taux 2026 sont bien ceux de la période d'activité, pas ceux de décembre.",
      noteText:
        "Taux et plafonds de ce module : uniquement rates-2026.json (URSSAF privé 01/01/2026, arrêté PMSS 22/12/2025, Agirc-Arrco, barème MSA de recoupement vieillesse/CSG, BOSS MNS). Un taux trouvé sur un blog, dans un ancien bulletin de 2024, ou « dans Sage par défaut » n'est pas une source.",
      exemple:
        "Cabinet. Un client reçoit un CRM DSN « anomalie de taux ». Le junior « corrige le taux maladie à 7 % comme avant 2026 ». Or, en 2026, le taux plein maladie patronal du privé est 13 % (URSSAF) ; les anciens taux réduits de droit commun maladie/AF fusionnent dans la RGDU. Recoller un 7 % de mémoire est une faute. On lit le CRM, le barème 2026, et on alerte le responsable avant toute retouche de paramètre.",
      erreurs:
        "Utiliser un taux N-1 en janvier. Confondre paiement URSSAF et paiement mutuelle. Répondre à une mise en demeure sans responsable. Inventer un coefficient RGDU. Traiter l'URSSAF comme interlocuteur des IJ maladie (c'est l'assurance maladie / CPAM).",
      particuliers:
        "Délais de paiement selon taille et nature (acompte, mensualisation) : calendrier du dossier, relu chaque année, pas récité hors source. Établissements multiples, franchise de cotisations, TESE / CEA : régimes simplifiés, hors paramétrage improvisé. Recours, observation, rescrit : responsable.",
      exercice:
        "Janvier 2026. Le journal affiche une maladie patronale à 7 % sur tous les non-cadres. Que faites-vous, et quel taux plein figure au barème URSSAF privé du 01/01/2026 ?",
      correction:
        "Vous bloquez la clôture sur cette rubrique et alertez le responsable paramétrage. Taux plein maladie patronal 2026 : 13 % (URSSAF privé 01/01/2026). Les taux réduits de droit commun maladie/AF ne s'appliquent plus comme avant : ils fusionnent dans la RGDU 2026. Un 7 % « historique » n'est pas le barème 2026. Vous ne remplacez pas par un autre taux inventé ; vous rétablissez le paramètre sourcé.",
    }),
    pack({
      title: "Maladie, vieillesse de base et chômage",
      description: "Appliquer les taux 2026 de l'assurance maladie, de la vieillesse plafonnée/déplafonnée et du chômage, sans les confondre.",
      minutes: 24,
      objectifs:
        "Vous savez quel risque social recouvre chaque taux, quelle assiette (totalité ou plafond), et vous calculez les lignes salariales de vieillesse sur un brut inférieur au PMSS.",
      theorie:
        "Assurance maladie (risque maladie, maternité, invalidité, décès au niveau de base) : part salariale 0 % pour un salarié domicilié fiscalement en France (5,50 % hors de ce cas, barème). Part patronale taux plein 13 % sur la totalité du brut (URSSAF privé 01/01/2026). La contribution solidarité autonomie (CSA) 0,30 % est patronale, sur la totalité. Les allocations familiales taux plein 5,25 % sont patronales, sur la totalité. Ces taux pleins sont ceux du bulletin pédagogique de base de ce parcours : la RGDU 2026, lorsqu'elle s'applique, fusionne d'anciens dispositifs d'allègement / taux réduits ; elle n'autorise pas à réinventer un 7 % maladie « de droit commun ».\n\nVieillesse de base (CNAV) : deux étages. Plafonnée : 6,90 % salarial + 8,55 % patronal, assiette limitée au PMSS (4 005 € par mois en 2026). Déplafonnée : 0,40 % salarial + 2,11 % patronal, sur la totalité. Un brut de 2 500 € : toute la vieillesse plafonnée passe (2 500 < 4 005). Un brut de 5 000 € : la plafonnée s'arrête à 4 005 €, la déplafonnée court sur 5 000 €.\n\nChômage : part salariale 0 % (barème 2026). Part patronale 4,00 % dans la limite de 4 PASS (4 × 48 060 = 192 240 € en 2026). AGS (garantie des salaires) 0,25 % patronal, même limite de 4 PASS (0,03 % ETT : hors cas standard de ce parcours). Contribution au dialogue social 0,016 % patronale, sur la totalité.\n\nConséquence paie : le net du salarié de métropole régime général n'est plus amputé d'une cotisation maladie ni d'une cotisation chômage salariale. Il l'est par la vieillesse, la retraite complémentaire, la CSG/CRDS, et éventuellement mutuelle/prévoyance. Expliquer un net sans séparer ces blocs conduit à des erreurs de réclamation.",
      methode:
        "Pour un bulletin de base (RGDU non activée, janvier 2026, métropole, régime général) :\n1. Brut de la période.\n2. Maladie P 13 %, CSA 0,30 %, AF 5,25 %, dialogue 0,016 % → totalité, patronal.\n3. Vieillesse plafonnée 6,90 / 8,55 → min(brut, 4 005).\n4. Vieillesse déplafonnée 0,40 / 2,11 → totalité.\n5. Chômage 4,00 % et AGS 0,25 % → min(brut, 4 PASS).\n6. FNAL selon effectif (leçon plafonds).\n7. Contrôler maladie S = 0 si domicile fiscal France.\nSource : rates-2026.json / URSSAF privé 01/01/2026 et barème MSA de recoupement vieillesse.",
      extra: [
        code(`JANVIER 2026 — brut 2 500,00 €, non-cadre, domicile fiscal France
PMSS = 4 005,00 €  → assiette plafonnée = 2 500,00 €

MALADIE S     2 500,00 × 0,00 %   = 0,00 €
VIEILLESSE plaf. S  2 500,00 × 6,90 % = 172,50 €
VIEILLESSE dépl. S  2 500,00 × 0,40 % = 10,00 €
CHÔMAGE S     2 500,00 × 0,00 %   = 0,00 €

MALADIE P     2 500,00 × 13,00 %  = 325,00 €   (taux plein URSSAF)
CSA P         2 500,00 × 0,30 %   = 7,50 €
AF P          2 500,00 × 5,25 %   = 131,25 €   (taux plein)
VIEILLESSE plaf. P  2 500,00 × 8,55 % = 213,75 €
VIEILLESSE dépl. P  2 500,00 × 2,11 % = 52,75 €
CHÔMAGE P     2 500,00 × 4,00 %   = 100,00 €
AGS P         2 500,00 × 0,25 %   = 6,25 €
DIALOGUE P    2 500,00 × 0,016 %  = 0,40 €

RGDU : non appliquée sur ce bulletin de base.
AT/MP, FNAL, Arrco, CSG : leçons suivantes.`),
      ],
      exemple:
        "Réclamation salarié : « Pourquoi je paie encore de la vieillesse à 6,90 % alors que la maladie est à 0 ? » Réponse factuelle : la maladie salariale est à 0 % pour un domicilié fiscal France (barème) ; l'assurance vieillesse de base reste due, part plafonnée 6,90 % + part déplafonnée 0,40 %. Ce n'est pas un bug. On ne « bascule » pas la maladie salariale pour faire plaisir.",
      erreurs:
        "Appliquer 6,90 % sur un brut > PMSS sans plafonner. Oublier la déplafonnée 0,40 %. Remettre une maladie salariale 0,75 % « de mémoire ». Appliquer le chômage salarial. Utiliser 13 % et 5,25 % tout en activant en plus d'anciens taux réduits. Confondre CSA et CSG.",
      particuliers:
        "Alsace-Moselle : cotisation maladie salariale spécifique, hors barème « 0 % » métropole standard — ne pas l'oublier si le dossier y est, ne pas l'inventer sur un dossier Paris. Non-domicilié fiscal France : 5,50 % maladie S. ETT : AGS 0,03 % (barème), pas 0,25 %. Apprentis, stagiaires : assiettes particulières, sous revue.",
      exercice:
        "Brut 5 000,00 €, janvier 2026, domicile fiscal France. Calculez les parts salariales maladie, vieillesse plafonnée, vieillesse déplafonnée, chômage. Rappelez le PMSS.",
      correction:
        "PMSS janvier 2026 = 4 005,00 €.\nMaladie S = 0,00 €.\nVieillesse plafonnée S = 4 005,00 × 6,90 % = 276,35 € (pas 5 000 × 6,90 %).\nVieillesse déplafonnée S = 5 000,00 × 0,40 % = 20,00 €.\nChômage S = 0,00 €.\nErreur à éviter : 5 000 × 6,90 % = 345,00 €, qui ignore le plafond.",
    }),
    pack({
      title: "Retraite complémentaire Agirc-Arrco",
      description: "Maîtriser T1, T2, CEG, CET et APEC avec les taux 2026, sans inventer une tranche.",
      minutes: 24,
      objectifs:
        "Vous découpez un brut en T1 et T2, vous appliquez les taux Agirc-Arrco 2026, et vous savez quand le CET et l'APEC apparaissent.",
      theorie:
        "La retraite complémentaire des salariés du privé est unifiée Agirc-Arrco. Les taux 2026 (source Agirc-Arrco) : tranche 1 (T1), jusqu'au PMSS 4 005 € : 7,87 % dont 4,72 % patronal et 3,15 % salarial. Tranche 2 (T2), de 1 à 8 PMSS au-delà de T1 (soit 4 005 € à 32 040 €) : 21,59 % dont 12,95 % patronal et 8,64 % salarial. La CEG (contribution d'équilibre général) : T1 2,15 % (1,29 / 0,86) ; T2 2,70 % (1,62 / 1,08). La CET (contribution d'équilibre technique) 0,35 % (0,21 / 0,14) s'applique sur T1+T2 seulement si la rémunération dépasse la T1 (brut > PMSS).\n\nAPEC : cotisation des cadres, 0,024 % salarial et 0,036 % patronal, assiette dans la limite de 4 PASS. Un non-cadre n'a pas d'APEC. Le statut cadre est une donnée de classification (RH, CCN), pas un choix du gestionnaire « pour le net ».\n\nConséquence paie : au SMIC ou à 2 500 €, seule la T1 existe (pas de CET). À 5 000 € : T1 = 4 005, T2 = 995, CET due. Le moteur pédagogique de référence donne, pour 5 000 € : CET salariale 7,00 € ; pour 2 500 € : ARRCO_T1 salariale 78,75 € (2 500 × 3,15 %). Un junior qui applique 3,15 % sur 5 000 € sans découper les tranches sous-évalue fortement la complémentaire.\n\nLes taux contractuels d'entreprise peuvent, dans le cadre Agirc-Arrco, être supérieurs aux minima. Ce parcours utilise les taux ci-dessus. Un dossier réel se lit dans le paramétrage visé, pas dans un souvenir de taux « 8 % ».",
      methode:
        "1. Brut B de la période.\n2. T1 = min(B, 4 005). T2 = min(max(B − 4 005, 0), 28 035) dans la limite 8 PMSS au-delà — pour B = 5 000, T2 = 995.\n3. ARRCO et CEG sur chaque tranche, parts S et P.\n4. Si B > 4 005 : CET sur T1+T2.\n5. Si cadre : APEC sur min(B, 4 PASS).\n6. Contrôler l'absence de T2 et de CET sous PMSS.\nPériode : janvier 2026. Source : AGIRC-ARRCO-2026 dans rates-2026.json.",
      extra: [
        code(`TAUX AGIRC-ARRCO 2026 (minima / taux de référence du parcours)
T1  ≤ 4 005 €     7,87 %   (P 4,72 / S 3,15)    CEG T1 2,15 % (1,29 / 0,86)
T2  4 005–32 040  21,59 %  (P 12,95 / S 8,64)   CEG T2 2,70 % (1,62 / 1,08)
CET si brut > T1  0,35 %   (P 0,21 / S 0,14)    sur T1+T2
APEC cadres       P 0,036 % / S 0,024 %        limite 4 PASS

Exemple brut 2 500,00 € (référence moteur)
ARRCO T1 S = 2 500,00 × 3,15 % = 78,75 €
CET : non (2 500 < 4 005)
APEC : non si non-cadre

Exemple brut 5 000,00 € (référence moteur)
T1 = 4 005,00    T2 = 995,00
CET S = (4 005 + 995) × 0,14 % = 7,00 €`),
      ],
      exemple:
        "Salarié promu cadre au 1er janvier, coefficient enfin écrit au contrat. Lina active APEC (0,024 % S sur 3 500 € = 0,84 € — référence moteur, brut 3 500, cadre, effectif 80). Elle n'active pas l'APEC sur les non-cadres du même bulletin de lot. Le net cadre n'est pas « le net non-cadre moins un forfait » : c'est une ligne APEC, et d'éventuelles prévoyances cadres (contrat, leçon suivante).",
      erreurs:
        "Appliquer T2 sous le PMSS. Oublier le CET au-dessus du PMSS, ou le mettre sous le PMSS. Mettre de l'APEC à tout le monde. Utiliser d'anciens taux Arrco/Agirc séparés d'avant fusion. Calculer T2 comme tout le brut. Confondre CEG et CET.",
      particuliers:
        "T2 plafonnée à 8 PMSS : au-delà, d'autres règles (tranches spécifiques, hors cas junior courant). Multi-employeurs : T1 à coordonner. Cadre au forfait : le statut APEC suit le statut cadre, pas le forfait. Taux d'appel historiquement 127 % : déjà intégré dans les taux publiés 7,87 / 21,59 ; on n'applique pas 127 % une seconde fois.",
      exercice:
        "Brut 5 000,00 €, non-cadre. Donnez T1, T2, ARRCO T1 S, ARRCO T2 S, CET S. Taux 2026.",
      correction:
        "T1 = 4 005,00 € ; T2 = 995,00 €.\nARRCO T1 S = 4 005,00 × 3,15 % = 126,16 € (arrondi au centime).\nARRCO T2 S = 995,00 × 8,64 % = 85,97 €.\nCET S = 5 000,00 × 0,14 % = 7,00 € (référence moteur : CET_s 7,00).\nPas d'APEC. Contrôle : ne pas faire 5 000 × 3,15 %.",
    }),
    pack({
      title: "Complémentaire santé et prévoyance",
      description: "Distinguer mutuelle obligatoire, prévoyance cadre/non-cadre, et ce qui entre dans le brut, le net et le MNS.",
      minutes: 20,
      objectifs:
        "Vous qualifiez un contrat collectif, vous étiquetez les montants comme hypothèses de dossier, et vous savez ce que le MNS 2026 fait (et ne fait pas) de la part patronale de mutuelle.",
      theorie:
        "La complémentaire santé collective est une obligation d'employeur depuis le cadre légal ANI, avec des dispenses encadrées. Le contrat fixe une cotisation, souvent répartie employeur / salarié (minimum de part employeur prévu par les textes — le % exact du contrat se lit dans le contrat, on ne l'invente pas). Dans ce parcours, 20,00 € salarial et 40,00 € patronal sont une HYPOTHÈSE de dossier fictif, jamais un barème national.\n\nLa prévoyance (maintien de salaire « haut de bilan », invalidité, décès) est très souvent conventionnelle, avec un régime cadres historique et des régimes non-cadres. Taux, assiettes (T1, T2, forfait), organismes : contrat et CCN. Un junior ne sort pas 1,50 % de prévoyance « parce que c'est fréquent ». Il lit le contrat paramétré ou il demande.\n\nConséquences paie. Part salariale mutuelle / prévoyance : retenue sur le net. Part patronale : coût employeur ; régime social de la part patronale de complémentaire santé : suivre le BOSS (intégration dans l'assiette dans les conditions en vigueur — ne pas inventer une exonération). Montant net social : jusqu'au 31/12/2026, le modèle provisoire BOSS ne fait pas intégrer d'office la part patronale de complémentaire santé au MNS (évolution possible 2027 : projet à revérifier, ne pas l'anticiper comme règle déjà applicable).\n\nDispenses d'adhésion (CDD court, ayants droit ailleurs, etc.) : pièces, dates, DSN. Sans pièce, on n'accorde pas une dispense « le salarié l'a dit au café ».",
      methode:
        "1. Identifier le contrat (population, organisme, tarif famille / isolé).\n2. Étiqueter tout montant non issu de rates-2026.json comme HYPOTHÈSE ou paramètre d'entreprise.\n3. Parts S et P, rubriques distinctes.\n4. Dispenses : liste et pièces.\n5. MNS : appliquer le cadre BOSS 2026, ne pas ajouter la mutuelle patronale par anticipation 2027.\n6. Entrée/sortie : affiliation / radiation selon contrat, pas « au feeling du 15 ».",
      noteText:
        "HYPOTHÈSE pédagogique mutuelle : 20,00 € salarial / 40,00 € patronal. HYPOTHÈSE AT/MP : 1,50 %. Ces chiffres ne sont pas des taux URSSAF. La prévoyance n'a pas de taux national dans rates-2026.json : hors contrat lu, on ne calcule pas.",
      exemple:
        "PME 28 personnes. Un salarié refuse la mutuelle « j'ai celle de ma femme ». Sans justificatif de dispense dans les cas prévus, Lina maintient la cotisation hypothèse 20/40 du dossier. Elle ne désaffilie pas sur parole. Le responsable RH valide la dispense si le cas légal est caractérisé.",
      erreurs:
        "Présenter 20/40 € comme un barème URSSAF. Intégrer d'office la part patronale mutuelle dans le MNS avant 2027. Oublier la mutuelle au prorata d'entrée sans lire le contrat (certains contrats sont au mois entier — le lire). Appliquer la prévoyance cadres à un non-cadre. Confondre mutuelle et maladie 13 %.",
      particuliers:
        "Ayants droit, ayants droit à charge, surcomplémentaire facultative (part S souvent). Portabilité après sortie (ANI) : régime propre, sous revue. Contrats responsables / non responsables : impacts fiscaux et sociaux, ne pas qualifier seul. Versement santé (cas de dispense + chèque santé) : texte spécifique, pas une mutuelle déguisée.",
      exercice:
        "Bulletin pédagogique brut 2 500 €, sans mutuelle dans le moteur de référence (net 1 978,99 €, MNS 1 978,99 €). On ajoute l'hypothèse 20/40 €. Que se passe-t-il pour le net à payer et, jusqu'au 31/12/2026, pour le MNS selon le cadre BOSS rappelé dans rates-2026.json ?",
      correction:
        "Net à payer : on retranche 20,00 € de part salariale → 1 978,99 − 20,00 = 1 958,99 € (hors tout autre effet d'assiette que le dossier pourrait avoir — ici l'hypothèse est un forfait). MNS jusqu'au 31/12/2026 : on ne rajoute pas les 40,00 € patronaux au MNS ; la mutuelle salariale est un prélèvement qui, dans le moteur, est traitée à part de la formule MNS pédagogique (brut − prélèvements sociaux obligatoires). Ne pas anticiper la règle 2027. Les 40 € restent un coût employeur étiqueté HYPOTHÈSE.",
    }),
    pack({
      title: "AT/MP : un taux d'établissement, jamais un taux national",
      description: "Comprendre le risque accidents du travail / maladies professionnelles et saisir uniquement le taux notifié.",
      minutes: 18,
      objectifs:
        "Vous savez que le taux AT/MP est notifié par la Carsat pour l'établissement, vous refusez tout « taux national », et vous mesurez l'impact patronal d'une hypothèse.",
      theorie:
        "Les accidents du travail et maladies professionnelles sont un risque de Sécurité sociale distinct de la maladie « AM ». La cotisation est patronale. Le taux n'est pas dans le barème URSSAF unique du secteur privé comme la maladie à 13 %. Il dépend de la sinistralité, de la taille, de la section de risque, de l'établissement. Il est notifié (Carsat / caisse AT). Un voisin de zone industrielle n'a pas « le même taux ». 1,50 % n'est pas le taux France 2026.\n\nDans ce parcours, 1,50 % est une HYPOTHÈSE pédagogique de dossier, étiquetée comme telle (rates-2026.json). Elle permet de faire figurer une ligne AT/MP sur les bulletins du moteur (exemple : brut 2 500 € → 37,50 € patronaux). Modifier l'hypothèse change le coût employeur, pas le net salarial (la ligne est non salariale dans le moteur de base).\n\nConséquences paie. Mauvais taux AT = mauvais coût de revient, mauvaise DSN, assiette d'allègement éventuellement faussée (la RGDU intègre l'AT/MP dans l'allègement dans la limite de 0,49 % selon la fiche URSSAF 2026 — le junior note la limite, il n'invente pas le calcul d'allègement). Taux collectifs, réels, mixtes selon effectif : le responsable lit la notification. Le junior saisit le taux du document, par établissement, avec date d'effet (souvent 1er janvier).\n\nUn accident du mois (déclaration, DSN événementielle, IJ AT) n'est pas le taux. Le taux est un paramètre annuel d'établissement. L'événement est un dossier salarié. Ne pas les fusionner.",
      methode:
        "1. Demander la notification AT de l'année pour chaque SIRET / établissement.\n2. Saisir le taux à la date d'effet, jamais « le taux du fichier 2024 ».\n3. Étiqueter tout exercice sans notification comme HYPOTHÈSE.\n4. Contrôler après calcul : AT = brut × taux notifié (ou hypothèse étiquetée).\n5. Ne jamais recopier 1,50 % dans un dossier réel « parce que la formation le faisait ».\n6. Sinistre grave, faute inexcusable, contentieux de taux : hors autonomie.",
      extra: [
        code(`AT/MP — ce que dit le parcours (et ce qu'il ne dit pas)
HYPOTHÈSE pédagogique : 1,50 % patronal sur le brut
brut 1 823,03 → AT = 27,35 €
brut 2 500,00 → AT = 37,50 €
brut 3 100,00 → AT = 46,50 €
brut 3 500,00 → AT = 52,50 €
brut 5 000,00 → AT = 75,00 €

Variante étiquetée 3,00 % (toujours HYPOTHÈSE, pas un barème)
brut 5 000,00 → AT = 150,00 €  |  net salarial inchangé sur le moteur de base

EN DOSSIER RÉEL : taux = notification Carsat. Point.`)
      ],
      exemple:
        "Industrie, 80 salariés, deux ateliers. La notification 2026 arrive en décembre 2025 : 2,12 % sur l'atelier A, 0,93 % sur l'atelier B. Le junior qui moyenne à 1,50 % « comme l'exercice » produit 80 bases fausses. Marc, responsable, exige deux codes établissement. Lina saisit 2,12 et 0,93. Elle n'utilise plus 1,50 % hors support de cours.",
      erreurs:
        "Présenter 1,50 % comme taux national. Appliquer le taux du siège à tous les établissements. Confondre taux AT et cotisation maladie 13 %. Faire payer l'AT au salarié. Modifier le taux pour « améliorer » un coût de revient présenté à un appel d'offres.",
      particuliers:
        "Fonctions support vs production, taux unique ou sections. Nouvel établissement : taux collectif de la section. Extremely small employers : taux collectif. Majorations, ristournes, compte employeur : caisse, pas le junior. RGDU et intégration AT dans la limite 0,49 % : mention URSSAF, calcul d'allègement sous revue.",
      exercice:
        "Deux phrases circulent. Corrigez-les.\nA. « En 2026 le taux AT national est 1,50 %. »\nB. « Si je passe l'hypothèse AT de 1,50 % à 2,50 % sur un brut 2 500 €, le net du salarié baisse. »",
      correction:
        "A. Faux. Il n'y a pas de taux AT/MP national unique. 1,50 % est une HYPOTHÈSE pédagogique. Le taux réel est notifié par la Carsat pour l'établissement.\nB. Faux sur le moteur de base : l'AT est patronal. 2 500 × 2,50 % = 62,50 € employeur (au lieu de 37,50 €). Le net salarial de référence (1 978,99 €) ne change pas. Le coût employeur, lui, augmente de 25,00 €.",
    }),
    pack({
      title: "Cotisations, contributions et assiettes",
      description: "Distinguer cotisation et contribution, lire L. 242-1, et construire l'assiette avant le taux.",
      minutes: 22,
      objectifs:
        "Vous nommez cotisation, contribution et prélèvement, vous partez de l'assiette, et vous n'appliquez jamais un taux sur le mauvais brut.",
      theorie:
        "Une cotisation finance un risque identifié (vieillesse, maladie, chômage, AT, retraite complémentaire). Une contribution peut financer une politique (CSA, dialogue social, FNAL, CSG/CRDS). Le PAS n'est ni l'un ni l'autre : c'est de l'impôt. Sur le bulletin, le salarié voit des retenues ; l'employeur, un coût. Le mot « charges » est trop vague pour contrôler.\n\nL'assiette est la base de calcul. Le principe, pour les cotisations de Sécurité sociale, est posé à l'article L. 242-1 du Code de la sécurité sociale : on part des sommes versées en contrepartie ou à l'occasion du travail, puis on applique les exclusions et régimes particuliers (BOSS, instructions URSSAF). Un junior n'invente pas une exclusion (« les primes exceptionnelles ne cotisent pas »). Il cherche le texte. Avantages en nature, indemnités, frais réels vs forfaits, rupture : chaque élément se qualifie avant d'être assujetti ou non.\n\nAssiettes fréquentes du bulletin de base 2026 : totalité du brut (maladie P, AF P, vieillesse déplafonnée, dialogue, CSA, AT hypothèse) ; plafond mensuel (vieillesse plafonnée, Arrco T1, FNAL si < 50) ; tranche 2 ; 4 PASS (chômage, AGS, APEC, CSG abattue dans la limite) ; assiette CSG = 98,25 % du brut jusqu'à 4 PASS, puis 100 % au-delà (abattement 1,75 %).\n\nConséquence paie : on ne multiplie jamais « le brut par 22 % salarial ». On ligne par ligne. Pour 2 500 €, l'assiette CSG du moteur est 2 456,25 € (2 500 × 98,25 %). Appliquer 9,70 % de CSG/CRDS sur 2 500 € au lieu de 2 456,25 € fausse le net imposable et le PAS.",
      methode:
        "Ordre intangible :\n1. Qualifier l'élément (salaire, prime, AEN, indemnité, frais).\n2. L. 242-1 + BOSS + fiche URSSAF : assujetti ? exclusion ? assiette forfaitaire ?\n3. Quelle assiette technique (totalité, PMSS, T2, 4 PASS, 98,25 %) ?\n4. Quel taux de la période, quelle part S/P ?\n5. Calcul, arrondi au centime, contrôle.\nSi l'étape 2 est incertaine : pas de saisie « non soumis » par sympathie.",
      extra: [
        code(`ASSIETTES DU BULLETIN DE BASE — janvier 2026, brut 2 500,00 €
Totalité 2 500,00     maladie P, CSA, AF P, vieil. dépl., AT (hyp.), dialogue
Plafond  2 500,00     vieil. plaf. (car < 4 005), Arrco T1, CEG T1, FNAL si <50
T2       0,00         (2 500 < PMSS)
4 PASS   2 500,00     chômage, AGS (B < 192 240)
CSG/CRDS 2 456,25     = 2 500 × 98,25 %   (abattement 1,75 % ≤ 4 PASS)

CSG déd.  2 456,25 × 6,80 % = 167,03 €
CSG nd    2 456,25 × 2,40 % = 58,95 €
CRDS      2 456,25 × 0,50 % = 12,28 €

Source abattement : barème (MSA recoupement / rates-2026.json).
L. 242-1 : principe d'assiette — les exclusions se lisent, elles ne s'inventent pas.`),
      ],
      exemple:
        "Un dirigeant demande : « Sors la prime de 200 € de l'assiette, c'est un cadeau. » Lina refuse. Une prime versée à l'occasion du travail entre dans le principe L. 242-1 sauf texte d'exclusion. Un « cadeau » non conforme n'est pas une catégorie URSSAF. Escalade : soit l'élément est soumis, soit un régime d'exonération réel (et sourcé) s'applique — jamais l'oral du dirigeant.",
      erreurs:
        "Taux d'abord, assiette ensuite. CSG sur 100 % du brut sous 4 PASS. Plafonner la maladie patronale. Oublier que la CSG non déductible et la CRDS ne réduisent pas le net imposable. Traiter le PAS comme une cotisation d'assiette sociale.",
      particuliers:
        "Frais professionnels, titres-restaurant, CESU, indus, épargne salariale : régimes BOSS, à traiter au module primes/avantages. Indemnités de rupture : franchise sociale/fiscale sous conditions, jamais un % inventé. Stagiaires gratifiés : franchise d'assiette sous seuil. Indépendants : autre code, autre assiette.",
      exercice:
        "Brut 2 500,00 €. Calculez l'assiette CSG et la CSG déductible. Pourquoi le net imposable n'est-il pas égal au brut moins toutes les retenues salariales ?",
      correction:
        "Assiette CSG = 2 500,00 × 98,25 % = 2 456,25 € (référence moteur).\nCSG déductible = 2 456,25 × 6,80 % = 167,03 €.\nLe net imposable retranche les cotisations déductibles et la CSG déductible, pas la CSG non déductible ni la CRDS (ni le PAS). D'où, sur le bulletin de référence 2 500 € : net imposable 2 050,22 € pour un net à payer 1 978,99 €. L'écart tient notamment à CSG nd + CRDS.",
    }),
    pack({
      title: "Plafonds, PMSS, PASS et tranches",
      description: "Utiliser PMSS 4 005 € et PASS 48 060 €, découper T1/T2, et appliquer le bon FNAL selon l'effectif.",
      minutes: 22,
      objectifs:
        "Vous mémorisez les plafonds 2026 sourcés, vous savez quand plafonner, et vous reliez l'effectif au FNAL 0,10 % ou 0,50 %.",
      theorie:
        "Le plafond mensuel de la Sécurité sociale (PMSS) 2026 est 4 005 € ; le plafond annuel (PASS) est 48 060 € ; le plafond journalier 220 € ; l'horaire 30 € (arrêté du 22 décembre 2025, URSSAF, cotisations dues au titre des périodes d'activité à compter du 01/01/2026). Ces chiffres remplacent ceux de 2025. Recopier 3 925 € en janvier est l'erreur classique.\n\nLe PMSS borne la vieillesse plafonnée, l'Arrco T1, souvent le FNAL des entreprises de moins de 50 salariés (assiette plafonnée, taux 0,10 %). Au-delà, on ouvre la T2 Arrco jusqu'à 8 PMSS (32 040 €). Le chômage et l'AGS se limitent à 4 PASS (192 240 €). La CSG bénéficie de l'abattement 1,75 % dans la limite de 4 PASS, puis 100 % au-delà.\n\nFNAL : 0,10 % sur assiette plafonnée si effectif < 50 ; 0,50 % sur la totalité si effectif ≥ 50 (URSSAF privé 01/01/2026). L'effectif est une donnée d'entreprise (règles d'effectif URSSAF / Code), pas le « nombre de bulletins du mois ». Un brut 3 500 €, cadre, effectif 80 : FNAL = 3 500 × 0,50 % = 17,50 € (référence moteur). Le même brut, effectif 20 : FNAL = 3 500 × 0,10 % = 3,50 € (assiette plafonnée, ici le brut < PMSS).\n\nTranches et régularisation s'articulent : un salarié à 3 000 € tous les mois reste en T1. Un salarié à 5 000 € ouvre T2 chaque mois. Un salarié à 2 000 € onze mois puis une prime de 20 000 € en décembre : le mois de la prime ouvre des assiettes plafonnées à régulariser (leçon suivante).",
      methode:
        "Contrôles de janvier, puis chaque mois :\n1. PMSS paramétré = 4 005, PASS = 48 060.\n2. Pour chaque bulletin : T1 = min(brut, 4 005) ; T2 = max(brut − 4 005, 0) dans la limite.\n3. Effectif retenu pour FNAL : qui le valide ? seuil 50.\n4. Chômage : brut vs 4 PASS (rarement atteint au mois ; vigilance primes / dirigeants).\n5. Entrée/sortie : plafonds journaliers / prorata de plafond — sous revue, ne pas inventer une formule hors texte.\n6. Documenter l'effectif utilisé (20 vs 80 change le FNAL, pas l'Arrco T1).",
      extra: [
        code(`PLAFONDS 2026 (arrêté 22/12/2025 — URSSAF)
PMSS     4 005,00 €
PASS    48 060,00 €
Jour       220,00 €
Heure       30,00 €
4 PASS 192 240,00 €
8 PMSS  32 040,00 €   (limite T2)

FNAL (URSSAF privé 01/01/2026)
< 50 salariés : 0,10 % sur assiette plafonnée
≥ 50 salariés : 0,50 % sur la totalité

Référence moteur — cadre, brut 3 500, effectif 80
FNAL P = 3 500,00 × 0,50 % = 17,50 €
APEC S = 3 500,00 × 0,024 % = 0,84 €
Net à payer (PAS 0, AT hyp. 1,50 %) = 2 769,75 €`),
      ],
      exemple:
        "CSP. Portefeuille mixte : société A, 42 personnes, FNAL 0,10 % ; société B, 80 personnes, FNAL 0,50 %. Un junior copie le dossier A sur B. Tous les FNAL de B sont à 0,10 % plafonné. Écart : sur un brut 3 500 €, 3,50 € au lieu de 17,50 €, soit 14 € de trop peu par bulletin, × 80, × 12 mois. Contrôle URSSAF en vue. Le seuil d'effectif n'est pas un détail de paramétrage.",
      erreurs:
        "Garder le PMSS N-1. Appliquer 0,50 % de FNAL sous 50 salariés, ou 0,10 % au-dessus. Plafonner la maladie 13 %. Ouvrir la T2 à 3 900 €. Utiliser 3 666 € (ancien plafond parfois encore cité dans des supports périmés).",
      particuliers:
        "Plafond proratisé (temps partiel, entrée/sortie) : règles URSSAF à relire, pas une simple règle de trois inventive pour toutes les cotisations. Multi-employeurs : plafond unique à coordonner. Majoration de plafond (cas particuliers) : texte. Outre-mer : vérifier le barème, ne pas supposer l'identité métropole.",
      exercice:
        "Deux salariés, janvier 2026, PAS 0, hypothèse AT 1,50 %.\nA. Non-cadre, brut 2 500 €, effectif 20 : y a-t-il une T2 ? Quel FNAL ?\nB. Cadre, brut 3 500 €, effectif 80 : T2 ? FNAL ? APEC S ?",
      correction:
        "A. 2 500 < 4 005 : pas de T2. FNAL = 2 500 × 0,10 % = 2,50 € (assiette plafonnée, brut < PMSS). APEC non.\nB. 3 500 < 4 005 : pas de T2. FNAL = 3 500 × 0,50 % = 17,50 €. APEC S = 0,84 €. Net de référence 2 769,75 €. L'effectif change le FNAL, le statut cadre ajoute l'APEC.",
    }),
    pack({
      title: "Régularisations, exonérations et RGDU 2026",
      description: "Comprendre pourquoi on régularise un plafond, ce qu'est une exonération sourcée, et ce que la RGDU fusionne — sans inventer le coefficient.",
      minutes: 22,
      objectifs:
        "Vous savez pourquoi une régularisation de plafond existe, vous refusez une exonération non sourcée, et vous pouvez citer la RGDU 2026 sans l'appliquer à tort.",
      theorie:
        "La régularisation des cotisations plafonnées évite de trop cotiser (ou trop peu) lorsque la rémunération n'est pas linéaire : prime annuelle, rappel, temps partiel, absences, multi-périodes. Le principe : les assiettes plafonnées se regardent aussi en cumul annuel (PASS 48 060 €) et pas seulement mois par mois. Un junior ne « bricole » pas une régularisation de décembre au feeling ; il suit le paramétrage du logiciel (souvent mensualisé progressif) et contrôle les cumuls. Sans régularisation, un salarié à 2 000 € × 11 mois + 26 000 € en décembre aurait une T1 trop large en décembre si l'on ignore le cumul déjà cotisé.\n\nLes exonérations (jeunes entreprises, heures supplémentaires, apprentis, zéro cotisation, etc.) sont des textes. Chacune a un champ, une assiette, un taux, une déclaration DSN, parfois un effectif. On n'active pas une case logiciel parce que le nom « allègement » rassure. On identifie le dispositif, la période, la source URSSAF / BOSS / loi de financement.\n\nRGDU 2026 (réduction générale dégressive unique) : l'URSSAF indique la fusion de la réduction générale et des taux réduits maladie / allocations familiales de droit commun. Coefficient maximal publié : 0,3981 pour les employeurs au FNAL 0,10 % (< 50) et 0,4021 pour ceux au FNAL 0,50 % (≥ 50). Smic de référence : valeur au 01/01/2026. AT/MP entre dans l'allègement dans la limite de 0,49 %. Le moteur pédagogique de ce parcours n'applique la RGDU que si le cas le demande explicitement. Sinon, bulletins à taux pleins maladie 13 % et AF 5,25 %, et on le dit.\n\nLe junior ne réinvente pas la formule du coefficient, ni son application aux cotisations éligibles, ni le prorata temps. S'il doit l'appliquer : il copie les coefficients URSSAF 0,3981 / 0,4021, il vérifie le texte URSSAF en vigueur, et il fait relire le paramétrage. Un coefficient « 0,32 comme en 2023 » est une faute.",
      methode:
        "Régularisation : en cours d'année, contrôler les cumuls T1 / PASS ; en cas de prime exceptionnelle, simuler l'effet plafond avant clôture ; ne pas écraser un trop-versé salarial sans règle.\nExonération : nom du dispositif, texte, période, assiette, DSN, qui a validé l'éligibilité (souvent RH + responsable paie).\nRGDU : par défaut, ne pas l'activer dans les exercices de base. Si un cas l'exige : coefficients 0,3981 ou 0,4021 selon FNAL, Smic de référence 1er janvier 2026, limite AT 0,49 %, revue obligatoire.",
      extra: [
        code(`RGDU 2026 — CE QU'ON PEUT DIRE (URSSAF, rates-2026.json)
Fusion : réduction générale + taux réduits AM/AF de droit commun
Coefficient max : 0,3981  si FNAL 0,10 %  (effectif < 50)
                  0,4021  si FNAL 0,50 %  (effectif ≥ 50)
Smic de référence : valeur au 01/01/2026
AT/MP dans l'allègement : dans la limite de 0,49 %

CE QU'UN JUNIOR NE FAIT PAS
- Inventer le détail d'imputation du coefficient sur chaque ligne
- Appliquer un vieux coefficient 0,3193 / 0,3233 « de mémoire »
- Cumuler ancien taux réduit maladie 7 % ET RGDU
- Activer la RGDU sur un bulletin de base du parcours (taux pleins)

Bulletins de référence du moteur : RGDU non appliquée.`),
      ],
      exemple:
        "Janvier 2026, PME 20 salariés. Le logiciel propose « allègement Fillon » avec un paramètre 2024. Lina n'enchaîne pas. Elle lit la fiche URSSAF RGDU 2026, constate la fusion AM/AF, copie les coefficients 0,3981 (effectif < 50) dans le ticket de paramétrage, et demande à Marc de valider l'écran avant toute production. Les bulletins de formation, eux, restent à 13 % / 5,25 % tant que le cas n'active pas la RGDU.",
      erreurs:
        "Régulariser en diminuant le net « à la louche » en décembre. Activer deux dispositifs incompatibles. Appliquer la RGDU et les anciens taux réduits. Inventer 0,3981 sur un effectif 80 (le bon coefficient max URSSAF est alors 0,4021). Traiter la RGDU comme une ligne salariale.",
      particuliers:
        "Outre-mer, LODEOM, ZRR, JEI, apprentis : dispositifs distincts de la RGDU. Exonération des HS : texte propre (salarial / patronal, limite), à relire, pas un 0 % inventé. Régularisation annuelle vs progressive : suivre le paramétrage visé. Contrôle URSSAF sur allègements : pièces d'effectif et de SMIC de référence.",
      exercice:
        "(1) Pourquoi un bulletin pédagogique brut 2 500 € de ce parcours affiche-t-il 13 % de maladie patronale et non un taux réduit ? (2) Citez les deux coefficients max URSSAF 2026 et le critère de choix. (3) Que fait le junior s'il doit appliquer la RGDU ?",
      correction:
        "1. Par construction : RGDU non appliquée sur les bulletins de base ; taux pleins URSSAF 13 % et 5,25 %. Ce n'est pas un oubli d'allègement, c'est une hypothèse pédagogique explicite.\n2. 0,3981 si FNAL 0,10 % (< 50) ; 0,4021 si FNAL 0,50 % (≥ 50). Source URSSAF RGDU 2026.\n3. Il ne réinvente pas la formule. Il copie 0,3981 ou 0,4021, vérifie la fiche URSSAF (Smic de référence 01/01/2026, AT dans la limite 0,49 %), et fait relire le paramétrage. Sans revue, il n'active pas.",
    }),
    quizLesson({
      title: "Quiz — Droit de la Sécurité sociale",
      description: "Vérifier organismes, taux 2026, plafonds, AT/MP et RGDU.",
      passing_score: 70,
      questions: [
        q({
          question: "Le PMSS et le PASS applicables aux cotisations des périodes d'activité à compter du 01/01/2026 sont :",
          options: [
            "A. PMSS 3 925 € et PASS 47 100 €",
            "B. PMSS 4 005 € et PASS 48 060 € (arrêté du 22 décembre 2025)",
            "C. PMSS 3 666 € et PASS 43 992 €",
            "D. Il n'y a plus de plafond depuis la DSN",
          ],
          correct: 1,
          explanation:
            "URSSAF, arrêté du 22 décembre 2025 : 4 005 € par mois, 48 060 € par an. Recopier un plafond N-1 est l'erreur de janvier. La DSN n'a pas supprimé le plafond.",
        }),
        q({
          question: "Le taux AT/MP à retenir sur un dossier réel est :",
          options: [
            "A. Toujours 1,50 %, taux national 2026",
            "B. 13 %, comme la maladie patronale",
            "C. Le taux notifié par la Carsat pour l'établissement ; 1,50 % n'est qu'une hypothèse pédagogique",
            "D. Le taux de la CCN de la métallurgie",
          ],
          correct: 2,
          explanation:
            "Aucun taux AT/MP national unique. 1,50 % est étiqueté HYPOTHÈSE dans rates-2026.json. En production, on saisit la notification Carsat.",
        }),
        q({
          question: "Vieillesse salariale 2026, brut 2 500 € (PMSS 4 005 €) :",
          options: [
            "A. 6,90 % × 2 500 + 0,40 % × 2 500 = 172,50 + 10,00",
            "B. 6,90 % × 4 005 seulement",
            "C. 0 %, comme la maladie salariale",
            "D. 8,55 % salarial",
          ],
          correct: 0,
          explanation:
            "Plafonnée 6,90 % sur min(brut, PMSS) = 2 500, soit 172,50 € (référence moteur VIE_PLAF_s). Déplafonnée 0,40 % sur 2 500 = 10,00 €. 8,55 % est la part patronale plafonnée. La maladie salariale à 0 % ne s'étend pas à la vieillesse.",
        }),
        q({
          question: "Agirc-Arrco T1 salariale 2026 sur un brut 2 500 € :",
          options: [
            "A. 2 500 × 8,64 % = 216,00 € (taux T2)",
            "B. 2 500 × 3,15 % = 78,75 €",
            "C. 2 500 × 7,87 % en entier à la charge du salarié",
            "D. 0 € sous le PMSS",
          ],
          correct: 1,
          explanation:
            "T1 salariale 3,15 %, et 2 500 € est entièrement en T1. Référence moteur ARRCO_T1_s = 78,75 €. 8,64 % est la T2. 7,87 % est le taux global T1 (parts S+P).",
        }),
        q({
          question: "Pour un brut 5 000 €, les tranches T1 / T2 et le CET salarial de référence sont :",
          options: [
            "A. T1 5 000, T2 0, pas de CET",
            "B. T1 4 005, T2 995, CET_s 7,00 €",
            "C. T1 0, T2 5 000, CET_s 17,50 €",
            "D. T1 4 005, T2 995, pas de CET car T2 < 1 000 €",
          ],
          correct: 1,
          explanation:
            "PMSS 4 005 € : T1 4 005, T2 995. CET due dès que la rémunération dépasse T1 : 5 000 × 0,14 % = 7,00 € (moteur). Le seuil de 1 000 € de T2 n'existe pas.",
        }),
        q({
          question: "FNAL 2026, cadre brut 3 500 €, effectif 80 :",
          options: [
            "A. 3 500 × 0,10 % = 3,50 €",
            "B. 3 500 × 0,50 % = 17,50 €",
            "C. 0 € pour les cadres",
            "D. 4 005 × 0,50 % = 20,03 €",
          ],
          correct: 1,
          explanation:
            "Effectif ≥ 50 : FNAL 0,50 % sur la totalité, soit 17,50 € (référence moteur). 0,10 % plafonné concerne les < 50. Le statut cadre n'exonère pas le FNAL.",
        }),
        q({
          question: "L'assiette CSG/CRDS jusqu'à 4 PASS est :",
          options: [
            "A. 100 % du brut",
            "B. 98,25 % du brut (abattement 1,75 %)",
            "C. Le net imposable",
            "D. Le PMSS uniquement",
          ],
          correct: 1,
          explanation:
            "Barème 2026 : CSG 6,80 % déductible + 2,40 % non déductible + CRDS 0,50 % sur 98,25 % du brut dans la limite de 4 PASS. Pour 2 500 €, assiette 2 456,25 €. Au-delà de 4 PASS, 100 %.",
        }),
        q({
          question: "La RGDU 2026, telle que publiée par l'URSSAF :",
          options: [
            "A. Autorise à garder les anciens taux réduits maladie/AF de droit commun en plus de la réduction",
            "B. Fusionne réduction générale et taux réduits AM/AF de droit commun ; coefficients max 0,3981 (<50) et 0,4021 (≥50)",
            "C. Fixe un coefficient unique 0,50 pour toutes les entreprises",
            "D. Est une cotisation salariale nouvelle de 1 %",
          ],
          correct: 1,
          explanation:
            "Fiche URSSAF RGDU : fusion RGD + taux réduits AM/AF. Coefficients max 0,3981 ou 0,4021 selon FNAL. Le junior copie ces chiffres et fait vérifier l'application ; il n'invente pas la formule et n'active pas la RGDU sur les bulletins de base du parcours.",
        }),
        q({
          question: "Maladie patronale taux plein URSSAF privé au 01/01/2026 :",
          options: [
            "A. 7 %",
            "B. 13 %",
            "C. 0 %, comme la part salariale",
            "D. 5,25 %",
          ],
          correct: 1,
          explanation:
            "Taux plein maladie patronal 13 %. 5,25 % est le taux plein AF. 0 % est la maladie salariale (domicile fiscal France). 7 % est un ancien réflexe de taux réduit, incompatible avec le barème plein 2026 hors paramétrage d'exonération sourcé.",
        }),
        q({
          question: "Jusqu'au 31/12/2026, selon le cadre BOSS rappelé pour le MNS :",
          options: [
            "A. On intègre d'office la part patronale de complémentaire santé dans le MNS",
            "B. On n'anticipe pas l'évolution 2027 : la part patronale mutuelle n'est pas intégrée d'office au MNS",
            "C. Le MNS n'existe plus",
            "D. Le MNS est égal au brut",
          ],
          correct: 1,
          explanation:
            "BOSS : modèle provisoire de bulletin prolongé jusqu'au 31/12/2026. L'évolution 2027 (part patronale complémentaire santé) est un projet à revérifier, pas une règle déjà applicable. 20/40 € de mutuelle restent une HYPOTHÈSE de dossier.",
        }),
      ],
    }),
  ],
};
