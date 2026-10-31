import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 17,
  title: "Prélèvement à la source et fiscalité de la paie",
  description:
    "Appliquer le PAS : taux issu de la DSN, assiette = net imposable, confidentialité, calcul, régularisations, anomalies et transmission à la DGFiP.",
  lessons: [
    pack({
      title: "Le PAS : un impôt collecté par la paie, pas un barème inventé",
      description:
        "Situer le prélèvement à la source dans le bulletin : qui fixe le taux, qui calcule, qui reverse.",
      minutes: 20,
      objectifs:
        "Vous savez définir le PAS, identifier les acteurs (DGFiP, DSN, employeur, salarié) et distinguer taux, assiette et montant.",
      theorie:
        "Le prélèvement à la source (PAS) est le mode de recouvrement de l'impôt sur le revenu applicable aux salaires. L'employeur (collecteur) retient un montant sur le net à payer et le reverse à la DGFiP. Il n'invente pas l'impôt du salarié. Il applique un taux qui lui a été transmis, sur une assiette fiscale (le net imposable), selon les règles en vigueur.\n\nLe taux n'est pas un paramètre URSSAF. Ce n'est pas un pourcentage national unique. Ce n'est pas le taux marginal du barème de l'impôt que le gestionnaire irait lire dans un tableau. C'est un taux personnalisé, neutre, ou par défaut, transmis principalement via le flux DSN (et des dispositifs connexes de type PASRAU pour certains collecteurs). Legal-sources : PAS-DGFIP. Un junior qui saisit 8 % « parce que c'est le taux moyen » commet une faute professionnelle, même si le chiffre tombe juste une fois.\n\nTrois grandeurs distinctes. Le taux : donné par l'administration, confidentiel. L'assiette : net imposable du bulletin, pas le brut. Le montant PAS = assiette × taux, arrondi au centime selon les règles du moteur. Le net à payer = net avant impôt − PAS. Le montant net social (MNS) ne se réduit pas du PAS : le PAS n'est pas un prélèvement social. Confondre MNS et net à payer est l'erreur de 2023–2026 la plus visible sur un bulletin commenté à la va-vite.\n\nL'employeur n'est pas conseiller fiscal. Il n'explique pas au salarié comment « optimiser » son taux, comment choisir le taux individuel plutôt que le taux du foyer, comment déclarer un changement de situation. Il oriente vers impots.gouv.fr et le service des impôts. Il peut expliquer mécaniquement : « voici votre net imposable, voici le taux appliqué ce mois, voici le PAS, voici le net ».\n\nLe simulateur pédagogique LOU n'est pas impots.gouv.fr. Lorsque nous posons un taux de 8 %, c'est une HYPOTHÈSE de dossier fictif, comme l'AT/MP 1,50 %. Jamais un taux national 2026.",
      methode:
        "À l'ouverture d'un dossier : vérifier que le flux de taux est actif (DSN). Ne jamais recopier un taux d'un bulletin papier d'un ancien employeur comme vérité pérenne. Chaque mois : contrôler les taux nouveaux, les taux à zéro inattendus, les taux aberrants, les absence de taux. Le montant se calcule après le net imposable, pas avant les cotisations.",
      noteText:
        "Obligation : collecter selon le taux transmis, confidentialité, reverse. Paramètre d'entreprise : aucun. Hypothèse pédagogique : 8 % dans le cas 3 100 €. Le junior n'est pas un conseiller des impôts.",
      exemple:
        "PME 30 personnes. Un salarié demande : « mets-moi 0 %, je régulariserai en septembre. » Lina refuse. L'absence de PAS n'est pas une faveur. Si le flux indique 0 % (taux nul réel, ou situation particulière), elle l'applique et documente. Si le flux indique 8 %, elle applique 8 %. Un oral salarié ne prime pas la DGFiP.",
      extra: [
        code(`CHAÎNE PAS (concept)

DGFiP  →  taux via DSN / dispositifs officiels  →  logiciel de paie
Salaire du mois → cotisations sociales → net imposable
PAS = net imposable × taux
Net à payer = net avant impôt − PAS
MNS = revenu net après prélèvements sociaux obligatoires (PAS exclu)

Hypothèse de dossier ≠ taux national
8 % sur le cas 3 100 € = HYPOTHÈSE pédagogique`),
      ],
      erreurs:
        "Prendre le brut comme assiette. Recopier le taux du conjoint. Promettre un taux. Oublier que le PAS se reverse, ce n'est pas une charge patronale 64. Croire que le MNS est le net viré.",
      particuliers:
        "Taux neutre : grille administrative selon l'assiette, pas un 8 % maison. Stagiaires, apprentis, seuils de mensualité : règles spécifiques à relire, pas à inventer. Non-résidents : souvent un taux distinct ; escalade. Multi-employeurs : chaque collecteur applique le taux reçu, sans « partager » un brut.",
      exercice:
        "Un manager vous envoie le taux PAS d'un membre de son équipe « pour anticiper la masse nette ». Que répondez-vous, et que calculez-vous malgré tout ?",
      correction:
        "Vous ne confirmez pas, ne stockez pas, ne recalculez pas un prévisionnel nominatif à partir d'un taux transmis hors canal. Le taux est confidentiel (PAS-DGFIP, données fiscales). Vous pouvez donner une masse de nets avant impôt, pas une projection de PAS individuel au manager. Vous calculez le PAS uniquement dans le moteur, à partir du flux, au moment du bulletin.",
    }),
    pack({
      title: "L'assiette du PAS est le net imposable, pas le brut",
      description:
        "Construire le net imposable et comprendre pourquoi CSG non déductible et CRDS en font partie.",
      minutes: 22,
      objectifs:
        "Vous savez relier brut, cotisations déductibles, net imposable, PAS et net à payer, et vous savez lire ces lignes sur un bulletin.",
      theorie:
        "Le brut n'est pas l'assiette de l'impôt à la source. L'assiette du PAS est le net imposable, c'est-à-dire essentiellement le brut diminué des cotisations et contributions salariales déductibles du revenu imposable. La CSG non déductible et la CRDS restent dans le net imposable : elles ont déjà été retranchées du net à payer, mais pas de l'assiette fiscale. D'où un net imposable souvent supérieur au net avant impôt.\n\nDans le moteur pédagogique LOU (engine.mjs, janvier 2026) : net imposable = brut − cotisations salariales déductibles (hors CSG non déductible, CRDS, et hors mutuelle salariale dans le filtre du moteur). Net avant impôt = brut − total salarial. PAS = net imposable × taux. Net à payer = net avant impôt − PAS. MNS pédagogique 2026 = brut − prélèvements sociaux salariaux obligatoires (hors mutuelle dans le filtre) : le PAS n'y entre pas.\n\nConséquence opérationnelle : deux salariés au même brut n'ont pas le même PAS si l'un a une mutuelle, une prévoyance, un plafond, un profil cadre (APEC), une régularisation. Deux salariés au même net imposable n'ont pas le même PAS si les taux DSN diffèrent. Vous ne « vérifiez » jamais un PAS en faisant 8 % du brut.\n\nLe montant net social sert aux prestations (prime d'activité, etc.), pas à l'impôt. Un salarié qui compare MNS et net viré découvre le PAS. C'est le moment d'expliquer, pas de modifier une ligne pour que « ça colle ».\n\nLes indemnités de rupture peuvent avoir un régime fiscal particulier (fraction imposable / non imposable). Le net imposable du mois de solde n'est pas « tout le brut du STC ». Sous revue.",
      methode:
        "Sur chaque bulletin à contrôler : 1) brut ; 2) total salarial ; 3) net imposable ; 4) taux ; 5) PAS = (3)×(4) ; 6) net à payer = net avant impôt − PAS ; 7) MNS indépendant du PAS. Écart de 0,01 € : arrondi, documenter. Écart de dizaines d'euros : mauvais taux ou mauvaise assiette.",
      extra: [
        code(`SCHÉMA — BRUT 3 100 €, PAS HYPOTHÈSE 8 %
Période janvier 2026, métropole, régime général
Référence : reference-bulletins.json brut_3100_pas_8pct
Moteur : computeBulletin({ brut: 3100, pasRate: 0.08 })

Brut                                      3 100,00
Cotisations / contributions salariales      646,05
Net avant impôt  3 100,00 − 646,05        2 453,95
Net imposable (après cotis. déductibles)  2 542,28
PAS  2 542,28 × 8 %                         203,38
Net à payer  2 453,95 − 203,38            2 250,57
Montant net social                        2 453,95
  → le PAS n'est pas dans le MNS

Contrôle d'assiette : 8 % × 3 100 = 248,00  FAUX (ce n'est pas le PAS)
Contrôle d'assiette : 8 % × 2 542,28 = 203,3824 → 203,38  JUSTE`),
      ],
      exemple:
        "Un comptable demande une provision « 8 % de la masse brute ». Lina explique : la charge 4421 / le compte de PAS suit les nets imposables × taux individuels, pas 8 % des 641. Une provision de trésorerie peut s'approcher ; une écriture de clôture se calque sur le journal de paie réel.",
      erreurs:
        "PAS = taux × brut. PAS = taux × net à payer (régression). Intégrer le PAS dans le MNS. Oublier que la CSG non déductible gonfle le net imposable par rapport au net.",
      particuliers:
        "Net imposable négatif (très rare, régularisations) : ne pas inventer un PAS crédit d'impôt maison ; voir le moteur et le responsable. Avantages en nature : dans le brut, donc dans le chemin vers le net imposable. Frais professionnels / déduction forfaitaire : cadre fiscal à ne pas bricoler en paie.",
      exercice:
        "Sans recalculer toutes les cotisations, à partir des chiffres de référence 3 100 € : (1) montrez que 8 % du brut est faux ; (2) calculez le PAS ; (3) dites si le MNS change si le taux passe à 0 %.",
      correction:
        "1) 3 100 × 8 % = 248,00 ≠ 203,38. 2) 2 542,28 × 0,08 = 203,38. 3) MNS 2 453,95 inchangé : le PAS n'entre pas dans le MNS. En revanche le net à payer passerait à 2 453,95 € si le taux était 0. Pourquoi : assiette fiscale vs prélèvements sociaux.",
    }),
    pack({
      title: "Confidentialité du taux et réponses au salarié",
      description:
        "Traiter le taux PAS comme une donnée fiscale personnelle, y compris vis-à-vis des managers et des collègues RH.",
      minutes: 16,
      objectifs:
        "Vous savez qui a le droit de voir un taux, comment répondre à une réclamation, et quoi faire en cas de divulgation.",
      theorie:
        "Le taux de PAS révèle une information sur la situation fiscale du foyer (revenus du conjoint, patrimoine, choix de individualisation). Ce n'est pas une donnée de gestion d'équipe. Un manager n'a pas besoin du taux pour valider des heures supplémentaires. Un collègue RH « curieux » n'est pas un habilité. Legal-sources : PAS-DGFIP et RGPD-CNIL-RH.\n\nLe bulletin porte le taux et le montant. La remise du bulletin se fait par le canal prévu (coffre, plis). Un écran de paie laissé ouvert pendant la pause, un export Excel « tous salariés, toutes colonnes » envoyé à la direction pour un séminaire, un « il est à 12 %, c'est qu'ils gagnent bien à deux » à la machine à café : fautes.\n\nLorsque le salarié conteste le taux, la paie vérifie qu'elle a appliqué le taux reçu pour la période. Si le taux reçu est bien celui appliqué, la contestation est fiscale : le salarié met à jour sa situation sur impots.gouv.fr ; le nouveau taux arrivera par le flux, avec un délai administratif que vous ne promettez pas en jours inventés. Si le taux appliqué n'est pas le taux reçu, c'est une erreur de paie : corriger, régulariser, expliquer.\n\nVous n'encouragez pas à « prendre le taux neutre pour cacher au conjoint » : conseil hors mandat, parfois contraire aux règles du foyer. Vous décrivez les options officielles sans recommander.\n\nEn cabinet, le client dirigeant qui veut « la liste des taux » n'a pas un droit magique. Seuls les habilités paie / DAF selon la politique, pour la production et le reversement, y accèdent. Un export de contrôle peut masquer la colonne taux.",
      methode:
        "Habilitations nominatives. Exports : colonnes minimales. Réclamation taux : (1) comparer flux et bulletin ; (2) si identiques, renvoyer vers DGFiP ; (3) si différents, ticket d'erreur. Jamais de comparaison entre salariés. Incident de divulgation : responsable + procédure RGPD.",
      noteText:
        "Le taux PAS est une donnée personnelle fiscale. La confidentialité n'est pas une courtoisie : c'est une exigence professionnelle et un traitement de données. Un junior ne « partage pas pour aider le manager à budgéter ».",
      exemple:
        "ETI. Un N+1 RH demande un tableau pour « détecter les atypiques ». Lina fournit des nets, des bruts, des écarts N-1, pas les taux. Un taux 0 % ou 18 % n'est pas un outil de management. Marc confirme : hors périmètre.",
      extra: [
        code(`RÉPONSE TYPE — TAUX CONTESTÉ (faits, vouvoiement)

« Nous avons appliqué le taux transmis par l'administration pour cette
période : [x,xx %] sur le net imposable de [montant] €, soit un
prélèvement de [PAS] €. Ce taux n'est pas choisi par le service paie.
Si votre situation a changé, la mise à jour se fait sur impots.gouv.fr ;
le nouveau taux nous parviendra par le flux déclaratif. Nous ne pouvons
ni le modifier à la main, ni communiquer sur le taux d'un collègue. »`),
      ],
      erreurs:
        "Modifier le taux à la demande. Afficher tous les taux en réunion. Utiliser le taux comme indice de « train de vie ». Envoyer un bulletin au mauvais homonyme (déjà vu au module métier : incident de données).",
      particuliers:
        "Couple dans la même entreprise : deux dossiers, deux taux, aucune discussion croisée. Saisie sur salaire + PAS : le net peut s'effondrer ; responsable, pas un bricolage de taux. Décès, tutelle : destinataires habilités.",
      exercice:
        "Vous vous apercevez qu'un fichier de clôture avec la colonne « taux PAS » a été déposé sur un lecteur partagé « commercial ». Actions dans l'heure, dans la journée, et ce que vous ne faites pas.",
      correction:
        "Dans l'heure : retirer le fichier, informer le responsable paie et le relais RGPD / DPO, identifier qui a pu y accéder. Dans la journée : incident documenté, nouvel export sans colonne, rappel habilitations. Vous ne faites pas : un mail accusateur à tout le service avec le fichier en pièce jointe « pour qu'ils voient l'erreur » ; un message humoristique. C'est un incident de données fiscales.",
    }),
    pack({
      title: "Cas travaillé : brut 3 100 €, taux 8 %, lecture complète du bulletin",
      description:
        "Enchaîner net imposable, PAS, net et MNS sur le bulletin de référence janvier 2026.",
      minutes: 24,
      objectifs:
        "Vous savez retracer chaque euro du cas 3 100 € et expliquer la différence entre 2 250,57 €, 2 453,95 € et 2 542,28 €.",
      theorie:
        "Le bulletin de référence brut_3100_pas_8pct (reference-bulletins.json) est un cas déterministe de janvier 2026 : métropole, régime général, hors RGDU, non-cadre, effectif pédagogique < 50, mutuelle non activée, AT/MP 1,50 % en hypothèse de dossier, taux PAS 8 % en hypothèse de dossier. Brut 3 100,00 €, sous le PMSS 4 005 € : pas de tranche 2 Agirc-Arrco, pas de CET.\n\nLe moteur calcule d'abord les cotisations sociales comme s'il n'y avait pas d'impôt. Total salarial 646,05 €. Net avant impôt 2 453,95 €. Net imposable 2 542,28 € (supérieur au net avant impôt parce que CSG non déductible et CRDS, 2,40 % et 0,50 % sur l'assiette 98,25 %, ne diminuent pas le revenu imposable). PAS 203,38 €. Net à payer 2 250,57 €. MNS 2 453,95 €, égal ici au net avant impôt, sans mutuelle.\n\nCes cinq chiffres doivent pouvoir se dire à un salarié sans jargon : « Votre brut est 3 100 €. Les retenues sociales salariales sont 646,05 €. Il reste 2 453,95 € avant impôt, c'est aussi le montant net social de ce bulletin. L'impôt à la source, 8 % de votre net imposable 2 542,28 €, fait 203,38 €. Le virement est 2 250,57 €. »\n\nLe 8 % n'est pas un taux URSSAF. Si le flux dit 6,2 %, tout le bas de bulletin change, pas le haut (cotisations). Si l'on active la mutuelle hypothèse 20 €, le net à payer baisse de 20 €, le MNS pédagogique 2026 ne se voit pas augmenter de la part patronale 40 € (BOSS jusqu'au 31/12/2026).",
      methode:
        "Toujours dans cet ordre : social d'abord, fiscal ensuite. Contrôler 2 542,28 × 0,08 = 203,38. Contrôler 2 453,95 − 203,38 = 2 250,57. Contrôler que 2 453,95 (MNS) ≠ 2 250,57 (net viré).",
      extra: [
        code(`BULLETIN PÉDAGOGIQUE — JANVIER 2026
computeBulletin({ brut: 3100, pasRate: 0.08, cadre: false, headcount: 20 })

Brut                            3 100,00
Total salarial                    646,05
Total patronal                  1 273,67   (dont AT/MP hypothèse 1,50 %)
Net imposable                   2 542,28
Taux PAS                  8,00 % HYPOTHÈSE
PAS                               203,38
Net avant impôt / MNS           2 453,95
Net à payer                     2 250,57

Écriture PAS (aperçu, module comptabilité)
  421 Personnel  diminue du PAS
  4421 État     PAS à reverser  203,38
Le PAS n'est pas un compte 64.`),
      ],
      exemple:
        "Le salarié compare à un simulateur grand public qui affiche 2 400 €. Écart : le simulateur a pris un autre taux, une autre mutuelle, ou le SMIC. Lina ne « rapproche » pas le bulletin du simulateur. Elle rapproche le bulletin du moteur et du flux de taux.",
      erreurs:
        "Annoncer 8 % de 3 100 = 248 €. Dire que le MNS est 2 250,57 €. Oublier d'étiqueter 8 % et 1,50 % comme hypothèses. Changer le brut pour viser 2 250,57 € de net promis à l'embauche.",
      particuliers:
        "Même brut, salarié cadre effectif 80 : FNAL, APEC, nets différents, PAS différent même à taux égal (assiette différente). Entrée au 13 janvier : le PAS se calcule sur le net imposable du prorata, pas sur un mois fictif plein.",
      exercice:
        "Taux pédagogique 10 % au lieu de 8 %, mêmes 2 542,28 € de net imposable. Calculez PAS et net à payer. Le MNS ?",
      correction:
        "PAS = 2 542,28 × 0,10 = 254,23 €. Net à payer = 2 453,95 − 254,23 = 2 199,72 €. MNS = 2 453,95 € inchangé. Pourquoi : seul le collecteur fiscal bouge. Les 10 % restent une hypothèse de dossier, pas un barème national.",
    }),
    pack({
      title: "Régularisations, anomalies de taux et cas particuliers",
      description:
        "Traiter un taux qui change, un trop-prélèvement, un taux à zéro, un trop-perçu de PAS.",
      minutes: 20,
      objectifs:
        "Vous savez quoi faire lorsqu'un taux change en cours d'année, lorsqu'il manque, ou lorsqu'un PAS a été mal calculé, sans inventer un délai DGFiP.",
      theorie:
        "Le taux n'est pas éternel. Il est mis à jour par l'administration et poussé aux collecteurs par le flux. Un changement de taux s'applique aux versements postérieurs à la prise en compte dans le logiciel, selon les règles de millésime et de CRM. Vous n'anticipez pas un taux « qui va arriver en mars ». Vous n'appliquez pas rétroactivement un nouveau taux sur janvier déjà payé, sauf instruction claire de régularisation.\n\nAnomalies fréquentes. Taux à zéro alors que le salarié est imposable : vérifier le flux, pas « corriger à 8 % ». Taux très élevé : vérifier un basculement de taux neutre mal paramétré, un taux par défaut, une erreur de NIR (mauvais rattachement). Absence de taux : le logiciel peut basculer sur un taux neutre / défaut selon paramétrage — ce paramétrage se relit, il ne s'invente pas. Taux d'un homonyme : incident, correction, parfois trop-prélèvement à rendre.\n\nSi le PAS a été trop prélevé par erreur de paie (mauvais taux saisi à la main, mauvaise assiette), la régularisation se fait par le bulletin suivant ou un bulletin modificatif, selon process, et par la DSN. L'État n'est pas « un organisme social de plus » : les comptes, les échéances, les CRM sont ceux du PAS. Vous ne compensez pas un trop-PAS en baissant les cotisations URSSAF.\n\nTrop-perçu de salaire après coup : le recalcul du net imposable et du PAS du mois d'origine peut s'imposer. C'est une régularisation coordonnée, pas une ligne unique « correction net ».\n\nVous ne mémorisez pas un jour de reversement PAS inventé. Vous lisez le calendrier officiel (impots.gouv / net-entreprises selon le canal du dossier) chaque année.",
      methode:
        "Anomalie de taux : (1) flux vs bulletin ; (2) identité NIR / SIRET ; (3) paramétrage taux neutre ; (4) ne pas saisir un taux oral ; (5) ticket responsable si l'écart dépasse l'arrondi ; (6) régularisation tracée, DSN, information du salarié factuelle.",
      extra: [
        code(`ANOMALIES PAS — ARBRE JUNIOR

Taux bulletin ≠ taux flux     → erreur paie : corriger, ne pas attendre « le salarié verra »
Taux flux = 0                 → appliquer 0, alerter si le profil semble incohérent, pas de 8 % maison
Taux absent                   → règle de repli du logiciel (neutre / défaut) à lire
Taux 30 % inattendu           → contrôle NIR, homonymie, taux par défaut, escalade
Salarié demande 0 %           → refus ; orientation impots.gouv.fr
Trop-PAS paie                 → régul bulletin + DSN, pas de compensation URSSAF
Changement de taux en mars    → s'applique selon date de prise en compte, pas sur janvier clôturé`),
      ],
      exemple:
        "NIR inversé entre deux embauches du même jour. L'un reçoit un taux 12 %, l'autre le neutre. Lina bloque les deux bulletins, corrige les identités, relance le flux / la DSN selon process, ne « moyenne » pas les deux taux. L'homonymie fiscale est un incident d'identité, pas un écart d'arrondi.",
      erreurs:
        "Saisir un taux « en attendant le flux ». Rétrograder janvier en mars sans consigne. Promettre « votre trop-prélèvement sera sur votre avis d'impôt, on ne touche à rien » alors que l'erreur est interne. Laisser un PAS sur un brut à 0.",
      particuliers:
        "Conjoint décédé, divorce, naissance : le salarié met à jour l'administration ; la paie attend le flux. Expatriation / impatriation : taux et assiette spécifiques, responsable. Régularisation annuelle d'impôt : hors bulletin, hors junior.",
      exercice:
        "Mars 2026 : vous découvrez que janvier a été calculé avec 8 % saisis à la main alors que le flux était 6 %. Net imposable janvier 2 542,28 €. Quel était le PAS versé ? Quel aurait dû être le PAS ? Que faites-vous de l'écart ?",
      correction:
        "Versé : 203,38 €. Dû : 2 542,28 × 0,06 = 152,54 €. Trop-prélèvement : 50,84 €. Ce n'est pas une faveur à oublier. Régularisation sur un bulletin suivant (PAS négatif ou ajustement selon moteur) + DSN, information du salarié, revue Marc. Vous ne touchez pas aux cotisations de janvier pour « rendre » 50,84 €. Vous ne promettez pas un délai d'avis d'impôt.",
    }),
    pack({
      title: "Transmission, reversement, contrôles de clôture du PAS",
      description:
        "Relier bulletin, DSN, écriture 4421 et contrôle d'égalité de la clôture.",
      minutes: 18,
      objectifs:
        "Vous savez ce que la paie transmet, ce que la comptabilité lettrera, et quels contrôles de clôture portent sur le PAS.",
      theorie:
        "Le PAS calculé sur les bulletins doit égaler le PAS déclaré en DSN (conceptuellement : bloc de versement / individu, sans numéro inventé) et le crédit du compte d'attente fiscal (souvent 4421 « État — prélèvement à la source » dans un plan pédagogique PCG ; le plan réel d'entreprise peut différer, legal-sources PCG-641). Le débit vient du 421 (réduction du net à payer). Ce n'est pas une charge 64 : l'entreprise ne « dépense » pas le PAS, elle le collecte.\n\nLa DSN est le canal principal de transmission des taux (en retour) et des montants prélevés (en aller). Un CRM PAS se lit avec la même discipline qu'un CRM URSSAF. Une anomalie de NIR casse le taux du mois suivant. Une DSN déposée sans les PAS du solde de tout compte décale le reversement.\n\nContrôles de clôture, paquet fixe : somme des PAS individuels = ligne de total paie = DSN = 4421. Taux à zéro listés et expliqués. Taux saisis manuellement : exception tracée, en principe interdite. Nets à payer vs SEPA : le PAS a déjà été ôté, on ne l'ôte pas une deuxième fois à la banque.\n\nLe junior n'appelle pas la DGFiP « pour un avis sur un taux ». Il traite les CRM, il escalade les rejets, il documente. Les échéances de paiement du PAS se relisent sur le calendrier officiel du dossier, pas dans une formation figée.",
      methode:
        "Après calcul : état PAS (taux, assiette, montant) par salarié. Totaux. Rapprochement DSN. Fichier comptable. Exceptions. Revue. Dépôt. Post-clôture : CRM, lettrage 4421 avec le paiement État.",
      extra: [
        code(`CONTRÔLE CLÔTURE PAS — JANVIER 2026

Somme PAS bulletins          .............. €
PAS dans la DSN              .............. €   (même montant)
Crédit 4421 (ou compte plan) .............. €
Écart                        0,00 € (ou 0,01 € d'arrondi documenté)

Liste
[ ] Taux manuels : 0 sauf incident tracé
[ ] Taux 0 % : motif (flux réel / seuil / erreur)
[ ] STC du mois : PAS sur le net imposable du solde, pas oublié
[ ] SEPA = nets à payer (PAS déjà déduit)
[ ] Aucune colonne taux dans un export non habilité

Cas 3 100 € seul sur le dossier pédagogique
PAS 203,38 € = DSN = 4421`),
      ],
      exemple:
        "28 salariés, somme PAS 4 812,20 €, DSN 4 610,00 €. Lina ne « force » pas la DSN. Elle cherche le bulletin oublié : le STC du 15 janvier, PAS non basculé dans le fichier déclaratif. Elle réintègre, Marc redépose selon process. Un écart de 202 € n'est pas un arrondi.",
      erreurs:
        "Comptabiliser le PAS en 645. Oublier les stagiaires / CDD du mois. Envoyer un état PAS nominatif à tous les managers. Payer le SEPA sur net avant impôt.",
      particuliers:
        "Établissements multiples : collecteur et SIRET selon paramétrage. Mandataire / expert-comptable déposant : la responsabilité de cohérence reste, la délégation est écrite. Pas de PAS sur certains éléments non imposables : le moteur doit les exclure de l'assiette, pas le junior à la main sans règle.",
      exercice:
        "Portefeuille pédagogique : un salarié 3 100 € à 8 % (PAS 203,38 €) et un salarié 2 500 € à 0 %. Totaux PAS, MNS vs nets à payer, écriture 4421. Que contrôlez-vous sur le 0 % ?",
      correction:
        "PAS total = 203,38 + 0 = 203,38 € = 4421. Le 2 500 € : net à payer = MNS = 1 978,99 € (référence hors PAS). Le 3 100 € : MNS 2 453,95 €, net à payer 2 250,57 €. Contrôle du 0 % : est-ce le flux ? Un oubli de paramétrage ? Un taux neutre mal à zéro ? Vous ne « mettez pas 8 % par cohérence ». Pourquoi : deux salariés, deux taux, une seule somme à reverser.",
    }),
    quizLesson({
      title: "Quiz — PAS et fiscalité de la paie",
      description: "Assiette, confidentialité, cas 3 100 €, MNS, régularisations.",
      passing_score: 70,
      questions: [
        q({
          question: "L'assiette du PAS sur un salaire est :",
          options: [
            "A. Le brut",
            "B. Le net imposable",
            "C. Le montant net social",
            "D. Le PMSS",
          ],
          correct: 1,
          explanation:
            "PAS = net imposable × taux. Le MNS exclut le PAS. Le brut n'est pas l'assiette fiscale.",
        }),
        q({
          question: "Cas pédagogique 3 100 €, taux 8 %. PAS et net à payer :",
          options: [
            "A. PAS 248,00 € (8 % du brut) et net 2 210,00 €",
            "B. PAS 203,38 €, net à payer 2 250,57 €, MNS 2 453,95 €",
            "C. PAS 203,38 € inclus dans le MNS 2 250,57 €",
            "D. PAS 0 € car maladie salariale 0 %",
          ],
          correct: 1,
          explanation:
            "2 542,28 × 8 % = 203,38 ; 2 453,95 − 203,38 = 2 250,57 ; MNS 2 453,95 sans PAS. Référence brut_3100_pas_8pct.",
        }),
        q({
          question: "Le taux PAS appliqué en paie :",
          options: [
            "A. Est un taux national URSSAF 2026",
            "B. Est saisi librement par le salarié chaque mois",
            "C. Provient du flux administratif (DSN / dispositifs officiels) ; 8 % dans nos cas est une HYPOTHÈSE",
            "D. Est égal au taux AT/MP",
          ],
          correct: 2,
          explanation:
            "Le collecteur n'invente pas le taux. Legal-sources PAS-DGFIP. 8 % = hypothèse de dossier.",
        }),
        q({
          question: "Le PAS entre-t-il dans le montant net social (cadre BOSS 2026 du parcours) ?",
          options: [
            "A. Oui, toujours",
            "B. Non : le MNS est après prélèvements sociaux obligatoires, pas après l'impôt à la source",
            "C. Oui, à hauteur de 50 %",
            "D. Uniquement pour les cadres",
          ],
          correct: 1,
          explanation:
            "Dans le cas 3 100 €, MNS 2 453,95 € = net avant impôt, PAS 203,38 € en plus vers l'État.",
        }),
        q({
          question: "Un manager demande les taux PAS de son équipe. Vous :",
          options: [
            "A. Les envoyez : il gère sa masse salariale",
            "B. Refusez la communication nominative des taux ; ce sont des données fiscales personnelles",
            "C. Donnez seulement les taux au-dessus de 10 %",
            "D. Affichez-les au tableau de clôture",
          ],
          correct: 1,
          explanation:
            "Confidentialité. Une masse de nets avant impôt peut exister en pilotage ; pas une liste de taux.",
        }),
        q({
          question: "Janvier calculé à 8 % à la main, flux réel 6 %, NI 2 542,28 €. Trop-PAS :",
          options: [
            "A. 50,84 € à régulariser en paie/DSN, sans toucher aux cotisations URSSAF pour « rendre » l'argent",
            "B. 50,84 € à oublier, l'avis d'impôt suffira toujours",
            "C. 248,00 − 186,00 = 62,00 € (calcul sur brut)",
            "D. Rien, le taux manuel prime le flux",
          ],
          correct: 0,
          explanation:
            "203,38 − 152,54 = 50,84 €. Erreur interne à corriger. Le flux prime. Pas de compensation sociale.",
        }),
        q({
          question: "Le compte pédagogique typique du PAS à reverser est :",
          options: [
            "A. 641 Rémunérations",
            "B. 645 Charges de Sécurité sociale",
            "C. 4421 (ou compte d'État du plan d'entreprise) — collecteur, pas charge",
            "D. 512 Banque, dès le calcul, avant le virement salarié",
          ],
          correct: 2,
          explanation:
            "Le PAS diminue le 421 et crédite un compte d'État. Ce n'est pas une charge de personnel. Le plan réel peut différer (PCG pédagogique).",
        }),
        q({
          question: "Le net imposable est souvent supérieur au net avant impôt parce que :",
          options: [
            "A. Le PMSS s'ajoute au net",
            "B. La CSG non déductible et la CRDS diminuent le net versé mais restent dans le revenu imposable",
            "C. Le PAS est ajouté deux fois",
            "D. La mutuelle patronale entre dans le MNS 2026 d'office",
          ],
          correct: 1,
          explanation:
            "Cas 3 100 € : NI 2 542,28 vs net avant impôt 2 453,95. BOSS MNS : part patronale mutuelle non intégrée d'office jusqu'au 31/12/2026.",
        }),
        q({
          question: "Un salarié demande 0 % de PAS « je régulariserai ». Vous :",
          options: [
            "A. Appliquez 0 % par service client",
            "B. Appliquez le taux du flux ; vous orientez vers impots.gouv.fr ; vous ne bricolez pas",
            "C. Appliquez 8 % par habitude du parcours",
            "D. Supprimez le net imposable",
          ],
          correct: 1,
          explanation:
            "Le collecteur n'accorde pas de faveur fiscale. 8 % n'est une hypothèse que dans nos cas chiffrés.",
        }),
        q({
          question: "Somme des PAS bulletins ≠ PAS DSN en clôture. Vous :",
          options: [
            "A. Forcez la DSN sur le chiffre le plus faible",
            "B. Cherchez l'écart (STC oublié, taux, arrondi), puis alignez bulletin, DSN et 4421",
            "C. Comptabilisez la différence en 641",
            "D. Attendez l'année suivante",
          ],
          correct: 1,
          explanation:
            "Égalité de clôture. Un écart de centaines d'euros est un oubli, pas un arrondi. Pas de rustine 641.",
        }),
      ],
    }),
  ],
};
