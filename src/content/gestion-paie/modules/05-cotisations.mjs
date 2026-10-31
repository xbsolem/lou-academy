import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 5,
  title: "Identifier et calculer les cotisations sociales",
  description:
    "Pour chaque grande cotisation du régime général, maîtriser l'objet, la base juridique, l'assiette, le taux 2026, la part salariale et patronale, les plafonds, les exonérations, le calcul et le contrôle.",
  lessons: [
    pack({
      title: "Anatomie d'une cotisation : objet, assiette, taux, parts, plafond",
      description: "Lire n'importe quelle ligne de bulletin comme un gestionnaire, pas comme un logiciel.",
      minutes: 22,
      objectifs:
        "À la fin de cette leçon, vous décomposez toute cotisation en huit questions : objet, texte, assiette, taux de la période, part salariale, part patronale, plafond éventuel, contrôle. Vous savez distinguer obligation légale, paramètre annuel, hypothèse de dossier et exonération.",
      theorie:
        "Une cotisation n'est pas « un pourcentage magique ». C'est un prélèvement obligatoire qui finance un risque (maladie, vieillesse, famille, chômage, accidents du travail, retraite complémentaire) ou une contribution affectée (CSG, CRDS, CSA, FNAL, dialogue social, AGS). Sur le bulletin, elle apparaît souvent en deux colonnes : part salariale (retenue sur le brut) et part patronale (charge de l'employeur, hors net).\n\nHuit éléments à poser avant de calculer. 1) Objet : quel risque ou quelle contribution ? 2) Base juridique : Code de la sécurité sociale, instruction URSSAF, accord Agirc-Arrco, BOSS. 3) Assiette : sur quoi porte le taux (brut soumis, brut plafonné, 98,25 % du brut, tranche T2) ? 4) Taux de la période : janvier 2026, métropole, régime général, tel que sourcé dans rates-2026.json (URSSAF privé 01/01/2026, barème MSA de recoupement, Agirc-Arrco). 5) Part salariale / part patronale. 6) Plafond : PMSS 4 005 €, PASS 48 060 €, 4 PASS, 8 PASS selon la ligne. 7) Exonération ou taux réduit : RGDU 2026, contrats aidés, zonage — jamais improvisés. 8) Contrôle : base × taux, arrondi au centime, cohérence DSN.\n\nL'assiette de droit commun est le salaire soumis à cotisations au sens de L. 242-1 du Code de la sécurité sociale : rémunération brute, avantages en nature, primes, sauf exclusions prévues. Un junior ne « sort pas une prime de l'assiette » parce qu'elle est exceptionnelle. Il cherche le régime dans le BOSS / l'URSSAF.\n\nTrois familles d'assiette reviennent sans cesse. Totalité du brut : maladie patronale, CSA, vieillesse déplafonnée, AF, AT/MP, dialogue social. Plafond mensuel (PMSS) : vieillesse plafonnée, FNAL si effectif < 50, tranche 1 Agirc-Arrco. Assiette CSG : 98,25 % du brut dans la limite de 4 PASS, puis 100 % au-delà. Chômage et AGS : limite 4 PASS.\n\nLe taux n'est jamais « de mémoire d'un stage de 2024 ». Janvier est le mois des copier-coller mortels. Vous ouvrez le barème de la période d'emploi, pas celui du versement si la règle d'exigibilité dit autrement — ici, période d'emploi janvier 2026.\n\nLa part salariale diminue le net. La part patronale n'apparaît pas dans le net à payer ; elle pèse le coût employeur et la DSN. Confondre les deux colonnes, c'est inverser un bulletin.\n\nNature des sources : les taux maladie 13 %, AF 5,25 %, vieillesse, chômage, FNAL, AGS, dialogue social, CSA sont des paramètres annuels URSSAF. Les taux Agirc-Arrco sont des paramètres du régime complémentaire. L'AT/MP est un paramètre d'entreprise notifié par la Carsat : dans ce cours, 1,50 % est une HYPOTHÈSE pédagogique, jamais un taux national. La mutuelle et le versement mobilité sont hors de ce module de base s'ils ne sont pas dans le barème national unique.",
      methode:
        "Devant une ligne inconnue : 1) Nommer l'organisme (URSSAF, Agirc-Arrco, DGFiP pour CSG). 2) Ouvrir rates-2026.json / la fiche URSSAF de la période. 3) Qualifier l'assiette (totalité, PMSS, 4 PASS, T2, CSG). 4) Séparer S et P. 5) Calculer base × taux, arrondir au centime. 6) Vérifier le plafond du mois (et la régularisation si le cumul annuel le exige — module 06). 7) Demander si une exonération du dossier s'applique (RGDU, etc.) : si le cas de base ne la demande pas, taux plein. 8) Tracer la source sur le contrôle.",
      noteText:
        "Période de référence de tous les calculs de ce module : janvier 2026, métropole, régime général. RGDU non appliquée dans les exemples de base. AT/MP = 1,50 %, HYPOTHÈSE de dossier fictif, pas un taux national. Ne jamais inventer un taux absent de rates-2026.json ou legal-sources.json.",
      exemple:
        "Cabinet d'expertise comptable, dossier « Atelier Nord », 28 salariés. Le client demande : « Pourquoi 13 % de maladie, mon voisin paie moins ? » Le collaborateur junior ne répond pas « c'est le taux ». Il distingue : le taux plein URSSAF 2026 est 13 % ; en 2026 les taux réduits maladie/AF de droit commun fusionnent dans la RGDU ; si le voisin a un salaire proche du SMIC, l'allègement RGDU diminue le montant, pas forcément le taux affiché selon le paramétrage. Il n'applique pas la RGDU sur le bulletin pédagogique 2 500 € de ce module.",
      extra: [
        code(`GRILLE DE LECTURE D'UNE LIGNE — à recopier sur chaque contrôle
Objet            : ................................
Organisme        : URSSAF / Agirc-Arrco / autre
Texte / source   : ................................
Assiette         : totalité / PMSS / 4 PASS / T2 / CSG 98,25 %
Taux période     : ........ %     (janvier 2026)
Part S / part P  : ........ / ........
Plafond          : aucun / 4 005 / 4 PASS / autre
Exonération      : non (taux plein) / RGDU / autre (citer)
Hypothèse ?      : non / OUI (AT/MP, mutuelle, VM, PAS)
Contrôle         : base × taux = ........ € (centime)`),
      ],
      erreurs:
        "Recopier un taux 2025. Additionner salarial et patronal pour « expliquer le net ». Appliquer le PMSS à la maladie. Traiter l'AT/MP comme un taux unique français. Activer la RGDU « parce que tout le monde l'a » sans consigne du cas. Oublier que CSG n'est pas une cotisation URSSAF classique mais une contribution sur assiette abattue.",
      particuliers:
        "Non-résident fiscal : maladie salariale 5,50 % (barème MSA / URSSAF), pas 0 %. Alsace-Moselle : régime local, hors des exemples métropole régime général de ce cours. ETT : AGS 0,03 % selon URSSAF, pas 0,25 %. Cadres : APEC en plus (module suivants / leçon Agirc-Arrco). Multi-établissements : le taux AT est celui de l'établissement d'affectation, notifié, jamais deviné.",
      exercice:
        "On vous donne la ligne « vieillesse plafonnée » pour un brut de 2 500 € en janvier 2026. Renseignez les huit éléments (objet, source, assiette, taux S et P, plafond, exonération du cas de base, montant S et P, contrôle).",
      correction:
        "Objet : assurance vieillesse de base (retraite Sécurité sociale). Source : URSSAF privé 01/01/2026 et barème MSA de recoupement. Assiette : brut plafonné au PMSS ; ici 2 500 < 4 005 donc 2 500. Taux salarial 6,90 %, patronal 8,55 %. Plafond : PMSS 4 005 €. Exonération du cas de base : aucune (RGDU non appliquée). Montants : 2 500 × 0,069 = 172,50 € S ; 2 500 × 0,0855 = 213,75 € P. Contrôle : coller le moteur pédagogique / reference-bulletins.json, bulletin brut_2500.",
    }),
    pack({
      title: "Maladie, CSA et AT/MP",
      description: "Taux plein maladie 13 %, salarial 0 %, CSA 0,30 %, AT/MP toujours hypothèse d'entreprise.",
      minutes: 20,
      objectifs:
        "Vous calculez la maladie salariale et patronale, la CSA, et vous refusez de traiter l'AT/MP comme un taux national. Vous savez ce que finance chaque ligne et sur quelle assiette.",
      theorie:
        "L'assurance maladie, maternité, invalidité, décès (souvent libellée « maladie » sur le bulletin) finance les prestations en nature et en espèces du régime général. En janvier 2026, pour un salarié du secteur privé domicilié fiscalement en France, la part salariale est 0,00 %. Ce n'est pas un oubli de paramétrage. La part patronale au taux plein URSSAF est 13,00 % sur la totalité du salaire soumis. Source : URSSAF — taux de cotisations secteur privé, mis à jour le 01/01/2026.\n\nSi le salarié n'est pas domicilié fiscalement en France, une part salariale maladie de 5,50 % peut s'appliquer (barème MSA de recoupement / URSSAF). Vous ne l'activez pas sur un CDI résident français « pour voir ». Vous la rattachez à une situation fiscale documentée.\n\nLa contribution solidarité autonomie (CSA) est une contribution patronale de 0,30 % sur la même assiette que la maladie (totalité). Elle n'a pas de part salariale. Elle n'est pas l'AT/MP. Elle n'est pas la CSG. Objet : financement de la solidarité pour l'autonomie (dépendance). Source : même fiche URSSAF privé 01/01/2026.\n\nL'AT/MP (accidents du travail et maladies professionnelles) est exclusivement patronal. Le taux n'est pas dans le barème national unique : il est notifié par la Carsat selon l'établissement, la sinistralité, le régime (collectif, mixte, individuel). Dans tous les bulletins pédagogiques de ce cours, le taux retenu est 1,50 %. Étiquette obligatoire : HYPOTHÈSE de dossier fictif, pas un taux national. Un junior qui saisit 1,50 % sur un vrai dossier sans notification commet une faute.\n\nAssiette maladie / CSA / AT/MP de droit commun : totalité du brut soumis, sans plafond PMSS. Un salaire de 5 000 € supporte 13 % de maladie patronale sur 5 000, pas sur 4 005.\n\nExonérations : en 2026, les taux réduits maladie (et AF) de droit commun fusionnent dans la réduction générale dégressive unique (RGDU). Dans les exemples de base, on n'applique pas la RGDU : on laisse 13 % et on le dit. Des dispositifs spécifiques (apprentis, contrats particuliers, zonage) existent : un junior ne les active pas sans consigne et texte.\n\nContrôle : maladie P = brut × 0,13 ; CSA = brut × 0,003 ; AT/MP = brut × taux notifié (ici 0,015 hypothèse). Maladie S = 0 si résident fiscal France. Si maladie S ≠ 0 sur un dossier France, vous interrogez le paramétrage avant de clôturer.",
      methode:
        "1) Vérifier le domicile fiscal (fiche salarié / paramètre). 2) Taux maladie P : 13 % plein sauf consigne RGDU ou dispositif spécifique. 3) CSA 0,30 % P, même base. 4) AT/MP : ouvrir la notification Carsat du SIRET / établissement ; en pédagogie, écrire « 1,50 % hypothèse ». 5) Recalculer les trois montants. 6) Contrôler qu'aucune de ces lignes n'est plafonnée au PMSS par erreur de rubrique.",
      noteText:
        "AT/MP 1,50 % = HYPOTHÈSE pédagogique du dossier. Le versement mobilité, s'il existait sur un dossier réel, serait aussi un paramètre d'établissement : il n'est pas dans rates-2026.json, donc il n'est pas inventé ici.",
      exemple:
        "ETI industrielle, deux établissements. L'établissement A a un taux AT notifié de 2,10 %, l'établissement B de 0,90 %. Le junior qui recopie 1,50 % « comme dans la formation » sur les deux SIRET produit deux DSN fausses. La formation enseigne le geste (lire la notification), pas un taux unique.",
      extra: [
        code(`JANVIER 2026 — brut 2 500 € — résident fiscal France — RGDU non appliquée
Maladie S   : 2 500,00 × 0,00 %  = 0,00 €
Maladie P   : 2 500,00 × 13,00 % = 325,00 €   (URSSAF privé, taux plein)
CSA P       : 2 500,00 × 0,30 %  = 7,50 €
AT/MP P     : 2 500,00 × 1,50 %  = 37,50 €    HYPOTHÈSE pédagogique Carsat`),
      ],
      erreurs:
        "Mettre 0,75 % ou 7 % de maladie « comme avant 2018 ». Plafonner la maladie au PMSS. Oublier la CSA. Afficher l'AT/MP sans la mention hypothèse / notification. Confondre CSA 0,30 % et dialogue social 0,016 %.",
      particuliers:
        "Salarié multi-établissements : taux AT de l'établissement d'affectation. Changement de SIRET en cours de mois : alerter le responsable, ne pas moyenner deux taux « à la louche ». Fonction publique et régimes spéciaux : hors de ce module régime général.",
      exercice:
        "Brut 2 500 €, janvier 2026, résident France, effectif 20, RGDU non appliquée, AT/MP hypothèse 1,50 %. Calculez maladie S, maladie P, CSA, AT/MP. Puis dites ce qui change si le salarié n'est pas domicilié fiscalement en France (sans recalculer tout le bulletin).",
      correction:
        "Maladie S 0,00 ; maladie P 325,00 ; CSA 7,50 ; AT/MP 37,50 (hypothèse). Si non-domicilié fiscalement en France : maladie salariale 5,50 % possible sur l'assiette prévue par l'URSSAF — vous n'inventez pas le reste du bulletin ; vous signalez le paramètre et vous ouvrez la fiche URSSAF / MSA. Les 13 %, 0,30 % et l'AT/MP restent des questions distinctes.",
    }),
    pack({
      title: "Assurance vieillesse plafonnée et déplafonnée",
      description: "6,90 % + 0,40 % salarial ; 8,55 % + 2,11 % patronal. Deux assiettes, un même risque.",
      minutes: 20,
      objectifs:
        "Vous calculez les deux lignes vieillesse, vous savez laquelle est plafonnée au PMSS, et vous contrôlez un bulletin au-dessus et en-dessous de 4 005 €.",
      theorie:
        "L'assurance vieillesse du régime général finance la retraite de base. Elle se dédouble en deux cotisations, à ne jamais fusionner dans une seule rubrique « retraite 10 % ».\n\nVieillesse plafonnée : assiette limitée au plafond mensuel de la Sécurité sociale. En janvier 2026, PMSS = 4 005 € (arrêté du 22 décembre 2025, fiche URSSAF plafonds). Taux salarial 6,90 %, taux patronal 8,55 %. Si le brut du mois est 2 500 €, l'assiette est 2 500. Si le brut est 5 000 €, l'assiette est 4 005 €, pas 5 000.\n\nVieillesse déplafonnée : assiette = totalité du brut soumis. Taux salarial 0,40 %, taux patronal 2,11 %. Elle court aussi bien à 1 823 € qu'à 8 000 €.\n\nSources : URSSAF — taux secteur privé 01/01/2026 (patronal 8,55 % + 2,11 %) ; barème MSA 01/01/2026 pour le recoupement salarial 6,90 % + 0,40 %.\n\nObjet : ouvrir des droits à pension du régime de base et financer le régime. Ce n'est pas l'Agirc-Arrco (retraite complémentaire, tranches T1/T2). Un salarié qui lit « retraite » sur son bulletin mélange souvent les deux. Vous séparez : base URSSAF / complémentaire Agirc-Arrco.\n\nPart S / P : les quatre taux ci-dessus. Il n'y a pas de vieillesse « 100 % patronale » en régime général de droit commun.\n\nPlafonds : seule la ligne plafonnée s'arrête au PMSS (ou au plafond proratisé en entrée/sortie, temps partiel, multi-employeurs — module 06). La déplafonnée ignore le PMSS.\n\nExonérations : la vieillesse entre dans le champ de la réduction générale (RGDU 2026). Dans les exemples de base, on calcule les taux pleins. On n'efface pas 6,90 % du bulletin parce que « il y a Fillon ».\n\nContrôle type : pour 2 500 €, plafonnée S = 172,50 €, P = 213,75 € ; déplafonnée S = 10,00 €, P = 52,75 €. Pour 5 000 €, plafonnée sur 4 005 : S = 276,35 €, P = 342,43 € ; déplafonnée sur 5 000 : S = 20,00 €, P = 105,50 €. Ces figures sont celles du moteur pédagogique (arrondi au centime).\n\nCas : salaire exactement égal au PMSS → assiette plafonnée = 4 005. Salaire inférieur → assiette = brut. Régularisation annuelle ou progressive si les mois varient : vous ne « laissez pas filer » un cumul plafonné supérieur au PASS (module 06).",
      methode:
        "1) Comparer le brut (assiette soumise) au PMSS du mois, éventuellement proratisé. 2) Assiette plafonnée = min(brut, plafond applicable). 3) Appliquer 6,90 % / 8,55 %. 4) Sur le brut entier, appliquer 0,40 % / 2,11 %. 5) Contrôler que la plafonnée ne dépasse jamais 4 005 × taux (hors régularisation de cumul). 6) Ne pas confondre avec Arrco T1.",
      exemple:
        "CSP, 1 200 bulletins. Un contrôleur interroge un écart : un non-cadre à 5 000 € a une vieillesse plafonnée identique à un collègue à 4 005 €. C'est normal : les deux sont au plafond. L'écart doit apparaître sur la déplafonnée, l'Arrco T2 et la CET, pas sur la plafonnée.",
      extra: [
        code(`VIEILLESSE — janvier 2026 — moteur pédagogique
Brut 2 500 (< PMSS)
  Plafonnée   base 2 500  S 2 500×6,90 % = 172,50   P 2 500×8,55 % = 213,75
  Déplafonnée base 2 500  S 2 500×0,40 % =  10,00   P 2 500×2,11 % =  52,75

Brut 5 000 (> PMSS)
  Plafonnée   base 4 005  S 4 005×6,90 % = 276,35   P 4 005×8,55 % = 342,43
  Déplafonnée base 5 000  S 5 000×0,40 % =  20,00   P 5 000×2,11 % = 105,50`),
      ],
      erreurs:
        "Appliquer 6,90 % sur 5 000 €. Oublier la déplafonnée 0,40 %. Inverser S et P (8,55 % n'est pas salarial). Additionner 6,90 et 0,40 puis plafonner le total. Confondre PASS annuel et PMSS mensuel en janvier.",
      particuliers:
        "Poly-pensionnés, régimes agricoles, auto-entrepreneur : hors régime salarié général. Cumul emploi-retraite : le bulletin peut encore porter de la vieillesse ; un junior ne « coupe » pas la ligne sans consigne. Plafond proratisé d'entrée : si vous n'êtes pas certain de la formule URSSAF du jour, vous étiquetez et vous ouvrez la fiche plafonds (module 06).",
      exercice:
        "Calculez les quatre montants vieillesse (S plaf., P plaf., S dépl., P dépl.) pour un brut de 4 005 € puis pour 4 006 €, janvier 2026, sans RGDU.",
      correction:
        "À 4 005 : assiette plafonnée = 4 005. S plaf. 4 005 × 0,069 = 276,35 ; P plaf. 4 005 × 0,0855 = 342,43 ; S dépl. 4 005 × 0,004 = 16,02 ; P dépl. 4 005 × 0,0211 = 84,51. À 4 006 : plafonnée inchangée (base 4 005, mêmes 276,35 / 342,43) ; déplafonnée sur 4 006 : S 16,02 ; P 4 006 × 0,0211 = 84,53. L'euro au-dessus du PMSS ne change pas la plafonnée ; il change la déplafonnée, ouvre 1 € de T2 Arrco et déclenche la CET (module 06).",
    }),
    pack({
      title: "Allocations familiales et RGDU 2026",
      description: "Taux plein 5,25 %. Comprendre la fusion 2026 sans l'appliquer aux exemples de base.",
      minutes: 22,
      objectifs:
        "Vous calculez les AF au taux plein 5,25 % patronal. Vous expliquez ce qu'est la RGDU 2026 (fusion RGD + taux réduits maladie/AF) et pourquoi elle est désactivée dans les bulletins de base du cours.",
      theorie:
        "Les allocations familiales sont une cotisation patronale du régime général. Taux plein URSSAF au 01/01/2026 : 5,25 % sur la totalité du salaire soumis. Pas de part salariale. Pas de plafond PMSS. Objet : branche famille (prestations familiales, etc.). Source : URSSAF — taux secteur privé 01/01/2026.\n\nAvant 2026, le droit commun connaissait, sous conditions de rémunération, des taux réduits d'assurance maladie et d'allocations familiales, distincts de la réduction générale dégressive (RGD, « Fillon »). En 2026, l'URSSAF décrit une fusion : ces taux réduits de droit commun et la RGD sont regroupés dans la réduction générale dégressive unique (RGDU). Conséquence pédagogique : vous n'appliquez plus, dans un cas de base, un « petit taux maladie » ou un « petit taux AF » improvisé. Soit vous êtes en taux plein (13 % et 5,25 %), soit le dossier demande explicitement le calcul de la RGDU.\n\nRGDU — ce que dit la source URSSAF (fiche réduction générale, rates-2026.json) : coefficient maximal 0,3981 si effectif < 50 (FNAL 0,10 %) ou 0,4021 si effectif ≥ 50. SMIC de référence : valeur au 01/01/2026. L'AT/MP entre dans l'allègement dans la limite de 0,49 %. La formule complète (T, C, rémunération / SMIC) se relit sur la fiche URSSAF du jour où vous la calculez. Un junior ne reconstitue pas un coefficient de tête.\n\nDans ce module et dans reference-bulletins.json, la RGDU n'est pas appliquée. Le bulletin à 2 500 € porte 13 % de maladie et 5,25 % d'AF. Sur un vrai dossier proche du SMIC, la RGDU changerait le coût employeur : ce n'est pas une raison pour la glisser en silence dans un exercice qui dit « taux pleins ».\n\nExonérations spécifiques hors RGDU (apprentis, JEI, zonage, etc.) : chacune a un texte. Politique interne « on ne déclare pas » n'est pas une exonération.\n\nContrôle AF de base : brut × 0,0525. Pour 2 500 € : 131,25 € patronal. Pour 5 000 € : 262,50 €. Si un logiciel affiche 3,45 % d'AF en 2026 sur un cas « taux plein », c'est un paramétrage d'ancien monde ou une RGDU mal expliquée : vous alertez.\n\nCas : salaire au SMIC 1 823,03 €. Le cas de base pédagogique peut quand même afficher AF 5,25 % si RGDU off. En production, vous demandez : la RGDU est-elle paramétrée ? Quel SMIC de référence ? Quel effectif FNAL ? Vous ne « réduisez pas à la main » le 5,25 %.",
      methode:
        "1) Lire la consigne du cas : RGDU oui ou non. 2) Si non : AF = brut × 5,25 %, maladie P = 13 %. 3) Si oui : ouvrir la fiche URSSAF RGDU, identifier effectif, SMIC de référence 01/01/2026, plafond d'intégration AT 0,49 %, coefficient max, puis faire valider le paramétrage. 4) Ne jamais remplacer 5,25 % par un taux réduit « souvenir ».",
      noteText:
        "Obligation de méthode : la RGDU est un paramètre annuel sourcé (URSSAF). Son application dans LOU Academy est volontairement limitée aux cas qui la demandent. Les bulletins brut_2500, brut_3100 et brut_5000 sont en taux pleins.",
      exemple:
        "PME 18 personnes, paie interne Sage. En janvier 2026, le responsable voit encore « AF 3,45 % » dans une rubrique commentée de 2023. Le junior ne « remet pas 3,45 » : il ouvre le barème 2026, bascule en 5,25 % taux plein, et demande si le module RGDU de l'éditeur est à jour (coefficient 0,3981 / 0,4021). La correction de paramétrage est supervisée.",
      extra: [
        code(`AF — janvier 2026 — taux plein (RGDU OFF)
2 500 × 5,25 % = 131,25 € P
5 000 × 5,25 % = 262,50 € P

RGDU 2026 — À EXPLIQUER, PAS À APPLIQUER ICI
Fusion RGD + taux réduits AM/AF de droit commun
Coeff. max 0,3981 (< 50, FNAL 0,10 %) ou 0,4021 (≥ 50)
SMIC de référence = valeur au 01/01/2026
AT/MP dans l'allègement, limite 0,49 %
Source : URSSAF réduction générale cotisation`),
      ],
      erreurs:
        "Réutiliser un taux réduit maladie/AF d'avant 2026. Appliquer la RGDU sur le bulletin 2 500 € « pour être réaliste » alors que le cas dit non. Inventer un coefficient 0,32. Intégrer tout l'AT/MP dans l'allègement au-delà de 0,49 %.",
      particuliers:
        "Effectif qui franchit 50 : le coefficient max RGDU et le FNAL changent. La date d'appréciation de l'effectif se lit dans les instructions URSSAF, pas dans un souvenir. Un junior n'anticipe pas le franchissement tout seul.",
      exercice:
        "Un manager : « Passe la maladie à 7 % et les AF à 3,45 %, on n'est pas assez riches pour le taux plein. » Rédigez votre réponse professionnelle en cinq lignes, puis calculez l'AF taux plein sur 2 500 €.",
      correction:
        "Réponse : les taux pleins 2026 sont 13 % (maladie P) et 5,25 % (AF). Les anciens taux réduits de droit commun ne s'improvisent plus : ils sont absorbés par la RGDU, calculée selon la fiche URSSAF, pas au doigt mouillé. Modifier un taux national dans le logiciel est une faute. AF sur 2 500 € : 131,25 €. Si l'entreprise veut l'allègement légal, on vérifie l'éligibilité RGDU sous revue, on n'invente pas 7 %.",
    }),
    pack({
      title: "Chômage, AGS, FNAL et dialogue social",
      description: "4 % chômage à 4 PASS, AGS 0,25 %, FNAL 0,10 % ou 0,50 %, dialogue social 0,016 %.",
      minutes: 22,
      objectifs:
        "Vous rattachez chaque contribution à son assiette et à l'effectif. Vous ne confondez plus FNAL plafonné et FNAL déplafonné, ni AGS et chômage.",
      theorie:
        "Assurance chômage : cotisation patronale 4,00 % au 01/01/2026, dans la limite de 4 PASS. PASS 2026 = 48 060 €, donc 4 PASS = 192 240 € par an (équivalent mensuel pédagogique 4 × 4 005 = 16 020 € si l'on raisonne en PMSS × 4). Part salariale de droit commun : 0,00 %. Source : URSSAF privé 01/01/2026. Objet : financement de l'assurance chômage. Ce n'est plus la « 2,40 % salariale » d'un barème ancien : coller un chômage salarial en 2026 sur un CDI de droit commun est une erreur de paramétrage.\n\nAGS (régime de garantie des salaires) : contribution patronale 0,25 % (0,03 % pour les ETT, selon URSSAF). Même logique de limite 4 PASS que le chômage dans le moteur pédagogique. Objet : garantir les salaires en cas de procédure collective. Pas de part salariale.\n\nFNAL (Fonds national d'aide au logement) : uniquement patronal. Le taux dépend de l'effectif. Moins de 50 salariés : 0,10 % sur assiette plafonnée (PMSS). 50 salariés et plus : 0,50 % sur la totalité du salaire. Source : URSSAF privé 01/01/2026. L'effectif n'est pas « le feeling du dirigeant » : c'est le paramètre social du dossier (règles d'appréciation URSSAF). Un junior ne bascule pas 0,10 vers 0,50 sans consigne.\n\nContribution au dialogue social : 0,016 % patronal sur la totalité. Montant souvent minuscule (2 500 × 0,00016 = 0,40 €) mais obligatoire. Ne pas l'arrondir à zéro « parce que ce n'est pas visible ». Ne pas la confondre avec la CSA 0,30 %.\n\nPlafonds : chômage et AGS s'arrêtent à 4 PASS. FNAL < 50 s'arrête au PMSS. FNAL ≥ 50 et dialogue social : totalité.\n\nExonérations : ces contributions peuvent entrer, selon les textes, dans des allègements. En cas de base RGDU off, vous les calculez au taux plein indiqué. L'AGS ETT 0,03 % n'est pas un cadeau aux PME ordinaires.\n\nContrôle 2 500 €, effectif 20 : chômage 100,00 € ; AGS 6,25 € ; FNAL 2,50 € (0,10 % × 2 500, base < PMSS) ; dialogue social 0,40 €. Contrôle 3 500 €, effectif 80, cadre : FNAL 17,50 € (0,50 % × 3 500, totalité) — chiffre du bulletin de référence cadre_3500_effectif_80.",
      methode:
        "1) Lire l'effectif du dossier (paramètre, pas le badgeuse du jour). 2) Chômage : min(brut, 4 PASS mensuel de travail) × 4 %. 3) AGS : même assiette × 0,25 % (sauf ETT). 4) FNAL : si < 50, min(brut, PMSS) × 0,10 % ; si ≥ 50, brut × 0,50 %. 5) Dialogue social : brut × 0,016 %. 6) Vérifier l'absence de part salariale chômage sur un CDI France de droit commun.",
      exemple:
        "ETI de 80 salariés. Un junior reprend un paramétrage TPE (FNAL 0,10 % plafonné). Sur un cadre à 3 500 €, l'écart est 17,50 − 3,50 = 14,00 € par mois, fois 80 personnes, fois 12 : un contrôle URSSAF le verra. Le FNAL se contrôle dès l'ouverture du dossier, pas à la DSN de décembre.",
      extra: [
        code(`JANVIER 2026 — brut 2 500 € — effectif 20 (< 50) — non ETT
Chômage P     base 2 500    4,00 %  = 100,00 €
AGS P         base 2 500    0,25 %  =   6,25 €
FNAL P        base 2 500    0,10 %  =   2,50 €   (plafonné ; ici brut < PMSS)
Dialogue P    base 2 500    0,016%  =   0,40 €

Même brut, effectif 80 : FNAL = 2 500 × 0,50 % = 12,50 € (totalité)
Cadre 3 500 €, effectif 80 : FNAL = 17,50 € (référence engine)`),
      ],
      erreurs:
        "Remettre du chômage salarial. Appliquer 0,50 % de FNAL à une TPE de 12 personnes. Plafonner le FNAL ≥ 50. Oublier l'AGS. Traiter 0,016 % comme 0,16 %. Utiliser 4 PASS = 4 × 47 100 (PASS d'une autre année).",
      particuliers:
        "ETT : AGS 0,03 % (URSSAF), à ne pas étendre aux autres. Salariés au-delà de 4 PASS mensuels : chômage et AGS plafonnés ; maladie et AF continuent sur la totalité. Frontaliers / annexes Unédic : hors improvisation junior.",
      exercice:
        "Deux dossiers, janvier 2026, brut 4 200 € : A) 22 salariés ; B) 50 salariés. Calculez FNAL, chômage, AGS, dialogue social pour A et le seul FNAL pour B.",
      correction:
        "A (< 50) : FNAL sur PMSS 4 005 × 0,10 % = 4,01 € (4 200 dépasse le PMSS). Chômage 4 200 × 4 % = 168,00 € (4 200 < 4 PMSS). AGS 4 200 × 0,25 % = 10,50 €. Dialogue 4 200 × 0,016 % = 0,67 €. B (≥ 50) : FNAL 4 200 × 0,50 % = 21,00 €. Le seuil 50 change l'assiette (totalité) et le taux, pas seulement « un peu plus ». Arrondi FNAL A : 4 005 × 0,001 = 4,005 → 4,01 € comme le moteur.",
    }),
    pack({
      title: "CSG et CRDS : assiette 98,25 %, déductible et non déductible",
      description: "6,80 % + 2,40 % + 0,50 % sur 98,25 % du brut jusqu'à 4 PASS.",
      minutes: 22,
      objectifs:
        "Vous calculez l'assiette CSG/CRDS, vous séparez CSG déductible, CSG non déductible et CRDS, et vous savez pourquoi cela change le net imposable sans changer le taux URSSAF maladie.",
      theorie:
        "La CSG (contribution sociale généralisée) et la CRDS (contribution au remboursement de la dette sociale) sont des contributions salariales, prélevées sur le bulletin, affectées au financement de la protection sociale et de la dette sociale. Elles ne sont pas des cotisations « maladie 13 % ». Elles ont une assiette propre.\n\nTaux janvier 2026 (barème MSA de recoupement régime général, rates-2026.json) : CSG déductible 6,80 % ; CSG non déductible 2,40 % ; CRDS 0,50 %. Total salarial 9,70 % sur l'assiette CSG, pas sur le brut nominal.\n\nAssiette : 98,25 % de la rémunération (abattement de 1,75 % pour frais professionnels) dans la limite de 4 PASS, puis 100 % au-delà de 4 PASS. Pour un brut de 2 500 €, inférieur à 4 × 4 005 € : assiette = 2 500 × 0,9825 = 2 456,25 €. Source : MSA barème 2026 / rates-2026.json (csg_abattement 0,0175, limite 4 PASS).\n\nPourquoi « déductible » ? Seule la CSG à 6,80 % est déductible du revenu imposable. La CSG 2,40 % et la CRDS 0,50 % sont retenues sur le net mais restent dans le net imposable. D'où l'écart, sur le bulletin 2 500 € : net imposable 2 050,22 € versus net avant impôt 1 978,99 €. L'écart 71,23 € = 58,95 + 12,28 (CSG ND + CRDS).\n\nParts : 100 % salarial sur un salaire. Pas de CSG patronale de droit commun sur cette ligne de bulletin.\n\nPlafond : l'abattement 1,75 % ne s'applique que jusqu'à 4 PASS. Au-delà, assiette = 98,25 % × 4 PASS + 100 % de la fraction supérieure. Un junior n'applique pas 98,25 % sur 20 000 € mensuels sans vérifier la limite.\n\nExonérations / taux particuliers : certains revenus de remplacement ont des taux CSG différents ; la CSG « à 0 » n'est pas le réflexe d'un CDI privé. Non-résidents : régime spécifique à lire, pas à inventer.\n\nContrôle 2 500 € : CSG déd. 2 456,25 × 6,80 % = 167,03 € ; CSG ND 2 456,25 × 2,40 % = 58,95 € ; CRDS 2 456,25 × 0,50 % = 12,28 €. Ces trois chiffres sont ceux de reference-bulletins.json / moteur. Pour 3 100 € : assiette 3 045,75 ; CSG déd. 207,11 ; CSG ND 73,10 ; CRDS 15,23.\n\nCas : avantages en nature, participation, intéressement, contribution patronale mutuelle : l'assiette CSG peut diverger de l'assiette URSSAF. En bulletin de base sans mutuelle, assiette CSG = 98,25 % du brut. Dès qu'un avantage entre, vous ouvrez le BOSS, vous n'ajoutez pas « +40 € de mutuelle patronale » au hasard dans la CSG.",
      methode:
        "1) Brut soumis CSG du mois (ici : brut, pas de mutuelle). 2) Si brut ≤ 4 PASS : × 0,9825. 3) Trois lignes : 6,80 / 2,40 / 0,50. 4) Arrondi au centime par ligne (moteur). 5) Pour le net imposable, retrancher du brut les cotisations salariales déductibles y compris CSG 6,80 %, mais pas CSG ND ni CRDS (module 07).",
      noteText:
        "La CSG n'est pas un impôt PAS. Le PAS s'applique ensuite sur le net imposable. Un salarié qui dit « on me prend 9,70 % d'impôt » mélange CSG et PAS. Vous séparez les deux dans l'explication.",
      exemple:
        "Services, salarié à 2 500 €. Réclamation : « le net imposable est plus haut que ce que je touche, c'est une erreur. » Le gestionnaire montre : CSG ND 58,95 + CRDS 12,28 restent dans le net imposable alors qu'elles ont déjà été retenues. Ce n'est pas un trop-perçu. C'est la définition fiscale.",
      extra: [
        code(`CSG/CRDS — brut 2 500 € — janvier 2026 — < 4 PASS
Assiette = 2 500 × 98,25 % = 2 456,25 €
CSG déductible     2 456,25 × 6,80 % = 167,03 €
CSG non déductible 2 456,25 × 2,40 % =  58,95 €
CRDS               2 456,25 × 0,50 % =  12,28 €
Total CSG/CRDS                         238,26 €

Écart net imposable vs net avant impôt = 58,95 + 12,28 = 71,23 €
2 050,22 − 1 978,99 = 71,23 €  (bulletin de référence)`),
      ],
      erreurs:
        "Appliquer 9,70 % sur 2 500 au lieu de 2 456,25. Oublier la CRDS. Traiter les 9,70 % comme déductibles en totalité. Plafonner la CSG au PMSS (le plafond utile est 4 PASS pour l'abattement). Confondre CSG et maladie salariale.",
      particuliers:
        "Taux CSG réduits sur certaines pensions ou IJ : hors bulletin de salaire standard. Intéressement / participation : assiette CSG souvent sans le même abattement — lire le BOSS. Au-delà de 4 PASS : ne plus abattre la fraction supérieure. Mutuelle patronale : impact CSG possible ; jusqu'au 31/12/2026 elle n'entre pas d'office dans le MNS (module 07).",
      exercice:
        "Retrouvez l'assiette CSG et les trois montants pour un brut de 3 100 €, janvier 2026, sans mutuelle, inférieur à 4 PASS.",
      correction:
        "Assiette 3 100 × 0,9825 = 3 045,75 €. CSG déd. 3 045,75 × 0,068 = 207,111 → 207,11 €. CSG ND 3 045,75 × 0,024 = 73,098 → 73,10 €. CRDS 3 045,75 × 0,005 = 15,22875 → 15,23 €. Identiques au moteur brut_3100_pas_8pct.",
    }),
    pack({
      title: "Agirc-Arrco : T1, T2, CEG et CET",
      description: "Taux 2026 T1 7,87 %, T2 21,59 %, CEG, CET uniquement si rémunération > PMSS.",
      minutes: 24,
      objectifs:
        "Vous découpez T1 et T2, vous appliquez CEG, vous n'activez la CET que si le salaire dépasse le PMSS, et vous séparez parts S/P officielles 2026.",
      theorie:
        "L'Agirc-Arrco est le régime de retraite complémentaire des salariés du privé (cadres et non-cadres, unifié). Ce n'est pas la vieillesse URSSAF. Les taux 2026 sont publiés par Agirc-Arrco (fiche « calcul des cotisations », rates-2026.json).\n\nTranche 1 (T1) : fraction de rémunération jusqu'au PMSS (4 005 € en 2026). Taux global 7,87 % réparti 4,72 % patronal / 3,15 % salarial.\n\nTranche 2 (T2) : fraction comprise entre 1 et 8 plafonds (4 005 € à 32 040 € mensuels). Taux global 21,59 % réparti 12,95 % patronal / 8,64 % salarial. Un brut de 2 500 € n'a pas de T2. Un brut de 5 000 € a T1 = 4 005 et T2 = 995.\n\nCEG (contribution d'équilibre général) : T1 2,15 % (1,29 % P / 0,86 % S) ; T2 2,70 % (1,62 % P / 1,08 % S). Elle suit les mêmes assiettes de tranches.\n\nCET (contribution d'équilibre technique) : 0,35 % global (0,21 % P / 0,14 % S) sur T1 + T2, uniquement si la rémunération dépasse le plafond de la Sécurité sociale. À 2 500 € : pas de CET. À 5 000 € : CET salariale = (4 005 + 995) × 0,14 % = 7,00 €. Ce 7,00 € est verrouillé dans reference-bulletins.json (brut_5000_t2.CET_s).\n\nAPEC : cadres seulement, taux salarial 0,024 % et patronal 0,036 %, limite 4 PASS (rates-2026.json). Un non-cadre à 2 500 € n'a pas d'APEC. Le bulletin cadre 3 500 € effectif 80 : APEC S = 0,84 €.\n\nObjet : points de retraite complémentaire (Arrco) et contributions d'équilibre. Base juridique : réglementation Agirc-Arrco, pas un usage d'entreprise.\n\nPlafonds : T1 = PMSS ; T2 jusqu'à 8 PMSS ; CET conditionnelle au dépassement du PSS ; APEC à 4 PASS.\n\nExonérations : hors cas particuliers (certains contrats), ces taux s'appliquent. La RGDU ne « supprime » pas l'Arrco dans les exemples de base.\n\nContrôle 2 500 € : Arrco T1 S 78,75 / P 118,00 ; CEG T1 S 21,50 / P 32,25 ; pas de T2, pas de CET. Contrôle 5 000 € : Arrco T1 S 126,16 / P 189,04 ; CEG T1 S 34,44 / P 51,66 ; Arrco T2 S 85,97 / P 128,85 ; CEG T2 S 10,75 / P 16,12 ; CET S 7,00 / P 10,50.\n\nCas : salaire = 4 005 € pile : T2 = 0, CET = 0 (la condition est rémunération > PSS, pas ≥ selon le moteur pédagogique et la fiche : CET si salaire > T1). Salaire 4 006 € : T2 = 1 € et CET sur T1+T2.",
      methode:
        "1) T1 = min(brut, PMSS). 2) T2 = min(max(brut − PMSS, 0), 7 × PMSS). 3) Arrco et CEG sur chaque tranche. 4) Si brut > PMSS : CET sur T1+T2. 5) Si cadre : APEC sur min(brut, 4 PASS). 6) Contrôler les répartitions 60/40 historiques approximatives : ici les taux officiels 4,72/3,15 etc. priment sur un souvenir « 60/40 ».",
      noteText:
        "Les parts 4,72 / 3,15 et 12,95 / 8,64 sont des paramètres Agirc-Arrco 2026, pas une CCN. Une CCN peut prévoir des cotisations supplémentaires de retraite ou de prévoyance : LIRE LA CCN, ne pas les inventer.",
      exemple:
        "Industrie, non-cadre passé de 3 900 € à 4 200 €. Le net « baisse plus que prévu ». Le junior montre : ouverture de 195 € de T2 à 8,64 % + CEG T2 + CET 0,14 % sur 4 200, en plus de la vieillesse qui reste plafonnée. L'explication est pédagogique et chiffrée, pas « c'est le logiciel ».",
      extra: [
        code(`AGIRC-ARRCO 2026 (source Agirc-Arrco)
T1 ≤ 4 005     7,87 %   dont P 4,72 %  S 3,15 %
T2 4 005–32 040 21,59 %  dont P 12,95 % S 8,64 %
CEG T1         2,15 %   dont P 1,29 %  S 0,86 %
CEG T2         2,70 %   dont P 1,62 %  S 1,08 %
CET si > PSS   0,35 %   dont P 0,21 %  S 0,14 %  sur T1+T2

Brut 2 500 : T1=2 500  T2=0  CET=non
  Arrco T1 S 78,75  P 118,00 | CEG T1 S 21,50  P 32,25

Brut 5 000 : T1=4 005  T2=995  CET=oui  CET S=7,00`),
      ],
      erreurs:
        "Ouvrir la T2 dès 3 666 € (ancien plafond). Appliquer 8,64 % sur tout le brut. Mettre la CET à 2 500 €. Oublier la CEG. Appliquer l'APEC à un non-cadre. Inventer une majoration « cadre +1 % Arrco » sans accord.",
      particuliers:
        "Artistes, journalistes, multiples employeurs : plafonds et proratas spécifiques à lire dans les instructions Agirc-Arrco / URSSAF, pas à inventer. Taux d'appel : les taux ci-dessus sont ceux de la fiche 2026 retenue par le cours ; un avenant d'entreprise de retraite supplémentaire est un autre contrat.",
      exercice:
        "Pour un brut de 5 000 €, janvier 2026, non-cadre : donnez T1, T2, Arrco T2 salarial, CEG T2 salarial, CET salarial. Sans calculette de T2 Arrco si besoin : 995 × 8,64 %.",
      correction:
        "T1 = 4 005 ; T2 = 995. Arrco T2 S = 995 × 0,0864 = 85,968 → 85,97 €. CEG T2 S = 995 × 0,0108 = 10,746 → 10,75 €. CET S = 5 000 × 0,0014 = 7,00 €. Conforme à reference-bulletins.json brut_5000_t2.",
    }),
    pack({
      title: "Exonérations, cas particuliers et contrôles junior",
      description: "Savoir ce qui peut réduire une cotisation, et ce qu'un junior ne décide jamais seul.",
      minutes: 18,
      objectifs:
        "Vous listez les contrôles d'un journal de cotisations et vous savez quand une exonération est un texte, une hypothèse, ou une demande irrégulière.",
      theorie:
        "Le mot « exonération » est galvaudé. En paie, il désigne un texte qui réduit ou neutralise une cotisation : RGDU, dispositifs apprentis, stages, jeunes entreprises, bassins d'emploi, etc. Ce n'est pas la demande du dirigeant « on ne verse pas l'AGS ce mois-ci ». Ce n'est pas un oubli de rubrique.\n\nHiérarchie. Obligation légale : cotiser aux taux de la période sur l'assiette L. 242-1, sauf texte d'exonération. Paramètre annuel : les taux 2026. Disposition conventionnelle : cotisations extra-légales (prévoyance, retraite supplémentaire) — LIRE LA CCN, ne pas inventer un %. Paramètre d'entreprise : AT/MP, versement mobilité, mutuelle, effectif FNAL. Hypothèse pédagogique : AT/MP 1,50 %. Politique interne : choix d'un contrat de mutuelle, pas le droit de « couper l'URSSAF ».\n\nContrôles de premier niveau, chaque clôture : 1) PMSS du mois (4 005 en janvier 2026). 2) Maladie S = 0 si résident France. 3) Maladie P = 13 % si RGDU off. 4) AF = 5,25 % si RGDU off. 5) Vieillesse plafonnée limitée au PMSS. 6) FNAL cohérent avec l'effectif. 7) Pas de CET sous le PMSS. 8) CSG sur 98,25 % si < 4 PASS. 9) AT/MP = taux notifié, étiqueté. 10) Somme salariale = total bulletin (521,01 € sur 2 500 € de référence).\n\nCas fréquents à ne pas traiter seul : apprenti, stagiaire gratifié, contrat aidé, exonération outre-mer, salarié non affilié à l'Arrco, multiple employeurs, régularisation de trop-versé, changement d'effectif à 50. Vous documentez et vous escaladez.\n\nLe logiciel ne « sait » pas si le dossier est à 49 ou 50 salariés. Il applique le paramètre. Le contrôle humain, c'est vérifier le paramètre.\n\nDSN : chaque cotisation a un code de rubrique / bloc. Un junior apprend à lire un écart CRM « taux maladie » ; il ne invente pas un code bloc de mémoire. Source déclarative : net-entreprises.\n\nArrondi : le moteur pédagogique arrondit chaque ligne au centime (fonction euro). Recalculer un total à partir de taux non arrondis ligne à ligne crée des écarts de 0,01 €. En contrôle, vous acceptez l'arrondi par ligne, vous n'inventez pas un 521,00 « plus propre ».",
      methode:
        "Après calcul : extraire le journal des cotisations. Cocher la grille des dix contrôles. Comparer au bulletin N-1 pour le même salarié (hors janvier : changement de PMSS/taux). Janvier : comparer au barème, pas à décembre. Toute exonération : pièce (contrat, éligibilité, paramétrage validé).",
      exemple:
        "Cabinet, dossier 35 salariés. Le client envoie un mail : « Mes apprentis, tu enlèves tout sauf la mutuelle. » Le collaborateur n'efface pas les lignes. Il ouvre le régime apprenti URSSAF du jour, fait valider par le responsable de dossier, et laisse une trace. Un apprenti n'est pas un stagiaire, ni un CDD d'usage.",
      extra: [
        code(`CHECKLIST COTISATIONS — clôture janvier 2026
[ ] Période d'emploi = janvier 2026 (pas barème 2025)
[ ] PMSS 4 005 / PASS 48 060
[ ] RGDU : off sauf cas écrit
[ ] Maladie S 0 % (résident) / P 13 % plein
[ ] CSA 0,30 % P
[ ] Vieillesse 6,90+0,40 / 8,55+2,11, plafond OK
[ ] AF 5,25 % P
[ ] AT/MP = notification ou HYPOTHÈSE étiquetée
[ ] Chômage 4 % P, 4 PASS ; AGS 0,25 % (sauf ETT)
[ ] FNAL 0,10 % plaf. si < 50 sinon 0,50 % totalité
[ ] Dialogue social 0,016 %
[ ] CSG/CRDS 6,80+2,40+0,50 sur 98,25 % si ≤ 4 PASS
[ ] Arrco T1/T2, CEG, CET seulement si > PMSS
[ ] APEC si cadre seulement
[ ] Total S = somme des lignes (pas un souvenir)`),
      ],
      erreurs:
        "Couper une ligne pour « arranger un net ». Activer une exonération zonage sans SIRET éligible. Ignorer un écart de 0,40 € (dialogue social). Recalculer les totaux sans arrondis de ligne. Copier l'AT/MP du dossier voisin.",
      particuliers:
        "Contrôle URSSAF : vous préparez les bases, les effectifs, les notifications AT, les contrats d'exonération. Vous ne « négociez pas un taux » au téléphone sans responsable. Régularisation d'un oubli FNAL : dossier de régularisation, pas une ligne fantôme sur un seul bulletin « pour rattraper » sans méthode.",
      exercice:
        "Sur le bulletin 2 500 € de référence, un stagiaire (vous) trouve maladie P = 175 €. Que suspectez-vous, comment le prouvez-vous, que faites-vous ?",
      correction:
        "175 / 2 500 = 7 %. C'est un ancien taux réduit maladie, plus un taux plein 2026. Preuve : fiche URSSAF 13 % et 2 500 × 13 % = 325,00 €. Action : bloquer la clôture, corriger le paramétrage sous revue, ne pas « compenser » en baissant l'AF. Vérifier si quelqu'un a voulu simuler une RGDU : alors ce n'est pas 7 % figé, c'est un allègement calculé, et le cas de base dit RGDU off.",
    }),
    pack({
      title: "Reconstruction guidée : bulletin 2 500 € janvier 2026",
      description: "Retrouver exactement les totaux du moteur pédagogique et de reference-bulletins.json.",
      minutes: 28,
      objectifs:
        "Vous reconstruisez, ligne à ligne, le bulletin non-cadre 2 500 €, effectif 20, sans mutuelle, sans PAS, RGDU off, AT/MP hypothèse 1,50 %, et vous justifiez 521,01 / 1 027,15 / 1 978,99.",
      theorie:
        "Un gestionnaire qui « comprend les cotisations » sait les refaire sans ouvrir le logiciel. Le bulletin de référence brut_2500 n'est pas une illustration : c'est le résultat déterministe du moteur (engine.mjs) pour janvier 2026, métropole, régime général, non-cadre, 20 salariés, PAS 0, mutuelle absente, RGDU non appliquée, AT/MP 1,50 % hypothèse.\n\nHypothèses, à écrire en tête de tout calcul : période d'emploi janvier 2026 ; brut 2 500,00 € ; T1 = 2 500 (inférieur au PMSS 4 005) ; T2 = 0 ; pas de CET ; pas d'APEC ; FNAL 0,10 % sur 2 500 ; assiette CSG = 2 456,25 € ; chômage et AGS sur 2 500 (< 4 PASS).\n\nOrdre opérationnel recommandé : assiettes d'abord, puis lignes URSSAF, puis chômage/AGS/FNAL/dialogue, puis Arrco/CEG, puis CSG/CRDS, puis totaux, puis nets (détail des nets au module 07). Si vous commencez par le net, vous masquez l'erreur de ligne.\n\nLes totaux à mémoriser comme contrôle, pas comme dogma hors période : salarial 521,01 € ; patronal 1 027,15 € ; net imposable 2 050,22 € ; net à payer et MNS 1 978,99 € (PAS = 0, pas de mutuelle salariale). Source : reference-bulletins.json, objet brut_2500.\n\nPourquoi 521,01 et pas « environ 20 % » ? Parce que le mix assiettes (PMSS, 98,25 %, 0 % maladie S) interdit une règle de trois unique. Le « 22 % de charges salariales » d'une conversation n'est pas une méthode.\n\nContrôle d'audit : somme des salariaux = 0 + 172,50 + 10,00 + 78,75 + 21,50 + 167,03 + 58,95 + 12,28 = 521,01. Somme des patronaux = 325 + 7,50 + 213,75 + 52,75 + 131,25 + 37,50 + 2,50 + 100 + 6,25 + 0,40 + 118 + 32,25 = 1 027,15.\n\nSi votre tableur donne 520,99, cherchez l'arrondi CSG (167,025 → 167,03) ou CRDS (12,28125 → 12,28). Le moteur arrondit chaque ligne, puis somme.",
      methode:
        "Reproduisez le tableau code ci-dessous sur papier ou tableur. Cochez chaque ligne. Calculez les totaux sans regarder le résultat, puis comparez. Écart : reprendre la ligne, pas le total.",
      extra: [
        code(`BULLETIN PÉDAGOGIQUE — janvier 2026 — brut 2 500,00 €
Non-cadre | effectif 20 | RGDU OFF | mutuelle NON | PAS 0 %
AT/MP 1,50 % HYPOTHÈSE pédagogique (pas un taux national)
Sources : URSSAF privé 01/01/2026, Agirc-Arrco 2026, MSA barème, arrêté PMSS 22/12/2025

ASSIETTES
T1 = min(2 500 ; 4 005) = 2 500,00
T2 = 0,00
CSG = 2 500 × 98,25 % = 2 456,25

LIGNE                         BASE      TAUX S / P           S        P
Maladie                       2500      0,00 / 13,00        0,00    325,00
CSA                           2500      0 / 0,30            0,00      7,50
Vieillesse plafonnée          2500      6,90 / 8,55       172,50    213,75
Vieillesse déplafonnée        2500      0,40 / 2,11        10,00     52,75
Allocations familiales        2500      0 / 5,25            0,00    131,25
AT/MP (hypothèse)             2500      0 / 1,50            0,00     37,50
FNAL < 50 plafonné            2500      0 / 0,10            0,00      2,50
Chômage (limite 4 PASS)       2500      0 / 4,00            0,00    100,00
AGS                           2500      0 / 0,25            0,00      6,25
Dialogue social               2500      0 / 0,016           0,00      0,40
Agirc-Arrco T1                2500      3,15 / 4,72        78,75    118,00
CEG T1                        2500      0,86 / 1,29        21,50     32,25
CSG déductible                2456,25   6,80 / 0          167,03      0,00
CSG non déductible            2456,25   2,40 / 0           58,95      0,00
CRDS                          2456,25   0,50 / 0           12,28      0,00
Pas de T2, pas de CET, pas d'APEC

TOTAUX                                              521,01   1027,15
Net imposable  2 050,22
Net avant impôt / net à payer / MNS  1 978,99`),
      ],
      exemple:
        "En entretien d'embauche paie, on vous tend un brut 2 500 € et un crayon. Recalculer maladie 325, vieillesse 172,50, CSG assiette 2 456,25 et total S 521,01 montre que vous savez assietter, pas seulement réciter des intitulés. C'est le niveau junior visé, pas une certification d'éditeur.",
      erreurs:
        "Oublier CEG (21,50). Mettre de la CET. FNAL 0,50 %. CSG sur 2 500. Total patronal sans AT/MP puis s'étonner de 1 027,15. Appliquer la RGDU et perdre l'alignement sur reference-bulletins.json.",
      particuliers:
        "Si l'on ajoute une mutuelle 20/40 € (hypothèse de dossier), le net à payer baisse de 20 € ; le MNS 2026 pédagogique ne reçoit pas la part patronale mutuelle jusqu'au 31/12/2026 (BOSS) — module 07. Ne pas mélanger cet ajout avec le bulletin de référence nu.",
      exercice:
        "Sans recopier le total : calculez uniquement la somme salariale des lignes vieillesse + Arrco T1 + CEG T1 + CSG/CRDS pour 2 500 €, puis déduisez le net à payer.",
      correction:
        "172,50 + 10,00 + 78,75 + 21,50 + 167,03 + 58,95 + 12,28 = 521,01 (maladie S = 0). Net à payer = 2 500 − 521,01 = 1 978,99 €. C'est le chiffre exact de reference-bulletins.json. Si vous avez 1 979,00, vous avez arrondi le total avant les lignes.",
    }),
    quizLesson({
      title: "Quiz — Cotisations sociales janvier 2026",
      description: "Assiettes, taux sourcés, parts S/P, RGDU, AT/MP, bulletin 2 500 €.",
      passing_score: 70,
      questions: [
        q({
          question: "En janvier 2026, pour un salarié du privé domicilié fiscalement en France, la part salariale maladie de droit commun est :",
          options: [
            "A. 0,00 %",
            "B. 0,75 %",
            "C. 5,50 %",
            "D. 13,00 %",
          ],
          correct: 0,
          explanation:
            "0 % salarial (MSA/URSSAF). 5,50 % concerne le non-domicilié fiscalement en France. 13 % est le taux plein patronal. 0,75 % est un souvenir d'ancien barème.",
        }),
        q({
          question: "Le taux plein patronal d'assurance maladie retenu par l'URSSAF au 01/01/2026, dans les exemples de base (RGDU non appliquée), est :",
          options: [
            "A. 7,00 %",
            "B. 13,00 %",
            "C. 5,25 %",
            "D. 1,50 %",
          ],
          correct: 1,
          explanation:
            "13 % taux plein URSSAF privé. 5,25 % = AF. 1,50 % = AT/MP hypothèse pédagogique. 7 % n'est pas le taux plein 2026.",
        }),
        q({
          question: "Vieillesse salariale janvier 2026, régime général :",
          options: [
            "A. 6,90 % sur la totalité + 0,40 % plafonné",
            "B. 8,55 % plafonné + 2,11 % totalité",
            "C. 6,90 % plafonné au PMSS + 0,40 % sur la totalité",
            "D. 10,00 % unique sur le brut",
          ],
          correct: 2,
          explanation:
            "Salarial 6,90 % plafonné + 0,40 % déplafonné. 8,55 + 2,11 sont les taux patronaux. Il n'existe pas une ligne unique 10 %.",
        }),
        q({
          question: "Allocations familiales, cas de base janvier 2026, RGDU non appliquée :",
          options: [
            "A. 5,25 % patronal sur la totalité",
            "B. 3,45 % patronal sous 3,5 SMIC",
            "C. 5,25 % salarial",
            "D. 0,30 % (CSA)",
          ],
          correct: 0,
          explanation:
            "Taux plein 5,25 % P, totalité. Les anciens taux réduits de droit commun fusionnent dans la RGDU 2026, non appliquée ici. CSA = 0,30 %.",
        }),
        q({
          question: "FNAL au 01/01/2026 :",
          options: [
            "A. Toujours 0,50 % plafonné",
            "B. 0,10 % plafonné si < 50 salariés ; 0,50 % sur la totalité si ≥ 50",
            "C. 0,10 % sur la totalité quel que soit l'effectif",
            "D. 4,00 %, comme le chômage",
          ],
          correct: 1,
          explanation:
            "URSSAF privé 2026 : 0,10 % assiette PMSS en-dessous de 50 salariés ; 0,50 % totalité à partir de 50.",
        }),
        q({
          question: "Assiette CSG/CRDS pour un brut de 2 500 € en janvier 2026 (< 4 PASS) :",
          options: [
            "A. 2 500,00 €",
            "B. 2 456,25 € (98,25 %)",
            "C. 4 005,00 €",
            "D. 2 125,00 €",
          ],
          correct: 1,
          explanation:
            "Abattement 1,75 % jusqu'à 4 PASS : 2 500 × 0,9825 = 2 456,25. C'est le chiffre du bulletin de référence.",
        }),
        q({
          question: "Agirc-Arrco T1 en 2026 :",
          options: [
            "A. 7,87 % dont 4,72 % patronal et 3,15 % salarial, jusqu'au PMSS",
            "B. 21,59 % sur tout le brut",
            "C. 7,87 % uniquement salarial",
            "D. 0,35 % (CET) dès le premier euro",
          ],
          correct: 0,
          explanation:
            "Fiche Agirc-Arrco 2026 : T1 7,87 % (4,72/3,15). T2 21,59 % au-dessus du PMSS. CET 0,35 % seulement si rémunération > PSS.",
        }),
        q({
          question: "La CET Agirc-Arrco 0,35 % :",
          options: [
            "A. S'applique à tous les salariés dès le SMIC",
            "B. S'applique sur T1+T2 seulement si la rémunération dépasse le PMSS ; à 2 500 € elle est nulle ; à 5 000 € la part salariale est 7,00 €",
            "C. Remplace la CEG",
            "D. Est un taux AT/MP",
          ],
          correct: 1,
          explanation:
            "CET si > PSS. Bulletin 5 000 € : CET_s = 7,00 € (reference-bulletins.json). Pas de CET à 2 500 €.",
        }),
        q({
          question: "Le taux AT/MP 1,50 % utilisé dans les bulletins du cours est :",
          options: [
            "A. Le taux national unique 2026",
            "B. Une HYPOTHÈSE pédagogique de dossier ; le vrai taux est notifié par la Carsat",
            "C. Le taux AGS",
            "D. Le taux maladie salarial",
          ],
          correct: 1,
          explanation:
            "L'AT/MP est un paramètre d'établissement. 1,50 % est étiqueté hypothèse dans rates-2026.json. Un junior ne le recopie pas sur un dossier réel.",
        }),
        q({
          question: "Sur le bulletin pédagogique brut 2 500 € (janvier 2026, RGDU off, AT/MP 1,50 % hypothèse, sans mutuelle ni PAS), le total des retenues salariales et le net à payer sont :",
          options: [
            "A. 521,01 € de salarial et 1 978,99 € de net à payer",
            "B. 1 027,15 € de salarial et 1 472,85 € de net",
            "C. 379,94 € et 1 443,09 € (ce sont les figures du SMIC pédagogique)",
            "D. 646,05 € et 2 250,57 € (bulletin 3 100 € avec PAS 8 %)",
          ],
          correct: 0,
          explanation:
            "reference-bulletins.json brut_2500 : employeeTotal 521,01 ; netAPayer 1 978,99. 1 027,15 est le total patronal. Ne pas confondre avec SMIC ou 3 100 €.",
        }),
      ],
    }),
  ],
};
