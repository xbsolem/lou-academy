import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 19,
  title: "Comptabiliser la paie : charges, dettes, PAS et rapprochements",
  description:
    "Relier le bulletin au journal : débit-crédit, PCG pédagogique 64/42/43, net à payer, cotisations, PAS, provisions et lettrage.",
  lessons: [
    pack({
      title: "Débit, crédit : la paie vue comme des mouvements, pas comme un net",
      description:
        "Reposer la partie double pour qu'un bulletin devienne un journal équilibré.",
      minutes: 18,
      objectifs:
        "Vous savez ce qu'est un débit et un crédit, pourquoi un journal de paie doit s'équilibrer, et ce que « charge » et « dette » veulent dire ici.",
      theorie:
        "La comptabilité générale enregistre chaque opération deux fois : au moins un débit, au moins un crédit, totaux égaux. La paie n'échappe pas à cette règle. Le bulletin que vous produisez crée des charges (ce que l'opération coûte à l'employeur) et des dettes (ce qui reste à payer : au salarié, aux organismes, à l'État collecteur du PAS).\n\nUn débit sur un compte de charge (classe 6) constate une charge. Un crédit sur un compte de tiers (classe 4) constate une dette. Payer la dette, plus tard, débitera le compte de tiers et créditera la banque (512). Confondre le jour du journal de paie et le jour du virement est une erreur de date, pas seulement de compte.\n\nLe net à payer n'est pas « le » montant comptable. C'est une des dettes. Le coût employeur du mois, lui, agrège le brut et les charges patronales (et d'autres éléments selon le dossier : mutuelle patronale, etc.). Un dirigeant qui demande « ça nous coûte le net » sous-estime le 645.\n\nLe gestionnaire de paie junior n'est pas comptable unique. Il produit un fichier justifié, il comprend les mouvements, il rapproche. Il ne recode pas le plan de comptes de l'entreprise. Les numéros utilisés ici sont pédagogiques (legal-sources : PCG-641). Le plan réel peut différer (641 vs 6411, 431 vs 437, 4421 vs un compte d'attente fiscal maison). Vous demanderez le mapping interne dès J+3.\n\nUn écart de 0,01 € qui casse l'équilibre du journal n'est pas « rien » : le logiciel comptable rejettera l'import. D'où l'obsession d'arrondi déjà vue sur le bulletin : le journal hérite des centimes de la paie.",
      methode:
        "Devant tout journal : 1) totaux débit = totaux crédit ; 2) charges 64 = brut + patronal (schéma simple) ; 3) 421 = nets à payer ; 4) 43x = salarial + patronal social ; 5) 4421 = PAS ; 6) dates de pièce = période d'emploi, date de paiement à part.",
      noteText:
        "Comptes 641, 645, 421, 43x, 4421 : logique pédagogique PCG. Le plan d'entreprise prime. Un junior n'invente pas un 64 « fourre-tout » pour faire balancer.",
      exemple:
        "Startup. Le fondateur veut « une ligne : salaires 25 000 ». Lina sort un journal à cinq familles. Le fondateur voit enfin 645. La trésorerie du 28 n'est que le 421. Sans cette pédagogie, la société sous-calibrerait l'URSSAF.",
      extra: [
        code(`PARTIE DOUBLE — IDÉE

Débit (emplois)              Crédit (ressources)
Charges 64  (coût)           Dettes 42 / 43 / 44 (à payer)
Banque 512  (quand on paie)  (on solde alors la dette)

Le bulletin alimente le 64 et les dettes.
Le SEPA et les avis organismes soldent les dettes.`),
      ],
      erreurs:
        "Comptabiliser le net en charge unique. Créditer 512 dès le calcul, avant le virement. Débiter 421 pour constater le salaire. Ignorer 0,01 € d'écart d'import.",
      particuliers:
        "Comptabilité de trésorerie ultra-simplifiée de TPE : ce n'est pas une raison pour livrer un journal faux ; l'expert-comptable retravaillera, il lui faut des totaux vrais. IFRS / groupes : mapping, pas le junior. Analytique (services, projets) : axes en plus, mêmes totaux.",
      exercice:
        "Sans chiffres : pour un salaire brut, dites ce qui est charge du mois et ce qui est dette, et à quel moment la banque bouge.",
      correction:
        "Charge du mois : brut (641) + cotisations patronales (645) [+ autres charges selon dossier]. Dettes : net au salarié (421), organismes (43x), État PAS (4421). La banque bouge au virement salarié, au paiement des organismes, au reversement PAS — souvent des dates différentes. Pourquoi : constater n'est pas payer.",
    }),
    pack({
      title: "PCG pédagogique : 64 charges de personnel, 42 personnel, 43 organismes",
      description:
        "Mémoriser la logique des classes, pas le dernier sous-compte d'un dossier réel.",
      minutes: 20,
      objectifs:
        "Vous situez 641, 645, 421, 43x, 4421, et vous savez que le paramétrage interne peut éclater ces comptes.",
      theorie:
        "Le plan comptable général range les charges de personnel en classe 64. Pédagogiquement : 641 rémunérations du personnel (salaire brut, et souvent les éléments de même nature : ICP, indemnité compensatrice de préavis, primes soumises). 645 charges de Sécurité sociale et de prévoyance (part patronale). D'autres comptes 64 existent dans les plans réels (impôt sur les salaires, autres charges sociales, intéressement, etc.) : vous ne les inventez pas, vous les lisez dans le mapping.\n\nClasse 42 : personnel. 421 rémunérations dues = net à payer, celui du SEPA. Des sous-comptes peuvent isoler acomptes, oppositions, saisies. Classe 43 : organismes sociaux. On enseigne 43x comme famille : URSSAF, retraite complémentaire, mutuelle, prévoyance, Pôle emploi/France Travail selon le lettrage interne. Beaucoup d'entreprises utilisent 431 URSSAF, 437 autres organismes, 438 charges sociales à payer. Le principe : ce qui a été retenu au salarié + ce qui est dû par l'employeur aux organismes transite ici, puis se solde à l'avis et au prélèvement.\n\n4421 (pédagogique) : État, PAS à reverser. Ce n'est pas un 64. D'autres collectes fiscales existent (taxe sur les salaires dans certains régimes, etc.) : hors cas, vous ne les improvisez pas.\n\nLegal-sources PCG-641 : logique pédagogique, ANC. Le numéro exact d'un dossier est un paramètre d'entreprise. Un cabinet voit dix mappings différents : le réflexe est la famille, pas le réflexe 431 unique.\n\nLes indemnités de rupture à régime social particulier peuvent passer par des comptes de charges distincts ou des sous-comptes 641, selon le plan et le régime. Le junior suit le mapping validé, il n'invente pas un 67 « exceptionnel » pour masquer un STC.",
      methode:
        "Demandez le mapping paie → compta le premier mois. Classez chaque rubrique : 641 / 645 / 421 / 43x / 4421 / autre validé. Toute rubrique orpheline : ticket, pas un 641 par défaut aveugle.",
      extra: [
        code(`FAMILLES PÉDAGOGIQUES (le plan réel peut différer)

641   Rémunérations du personnel          brut, primes soumises, ICP, préavis
645   Charges sociales patronales         URSSAF, retraite, AT/MP, mutuelle patronale…
421   Personnel — rémunérations dues      net à payer (après PAS)
43x   Organismes sociaux                  salarial + patronal à reverser
4421  État — PAS                          collecteur, pas une charge
512   Banque                              au moment des paiements

Sous-comptes fréquents (exemples de plan, pas une norme)
431   URSSAF
437   Autres organismes sociaux
438   Organismes sociaux — charges à payer
4210  Nets / 421x acomptes`),
      ],
      exemple:
        "ETI, SAP. Le journal sort en 20 comptes. Lina ne panique pas. Elle agrège : 64, 42, 43, 44. Elle rapproche les totaux au livre de paie. Le détail 6411 / 6413 est un sujet de comptabilité, pas un obstacle à son contrôle de fond.",
      erreurs:
        "Mettre le PAS en 645. Mettre le brut en 421. Mettre les cotisations salariales en 645 seulement (elles sont une retenue, donc une dette 43x, pas une charge patronale). Inventer 6418 « divers paie » pour les écarts.",
      particuliers:
        "Intérim : comptes spécifiques côté utilisateur vs agence. Portage. Avantages en nature : brut 641 et parfois contreparties. Titres-restaurant : souvent 647 / 421 / 437 selon le dispositif — lire le plan, ne pas analogiser.",
      exercice:
        "Classez : (1) 2 500 € brut ; (2) 1 027,15 € patronal ; (3) 521,01 € salarial ; (4) 1 978,99 € net ; (5) PAS 0. Comptes pédagogiques débit/crédit.",
      correction:
        "Débit 641 2 500 ; débit 645 1 027,15 ; crédit 421 1 978,99 ; crédit 43x 1 548,16 (= 521,01 + 1 027,15) ; 4421 inerte. Équilibre 3 527,15. Pourquoi : le salarial n'est pas une charge, c'est une fraction du brut déjà en 641, retenue pour les organismes.",
    }),
    pack({
      title: "Du bulletin au coût : brut, charges patronales, net, cotisations salariales",
      description:
        "Relire un bulletin 2 500 € avec les lunettes du journal, avant d'écrire les lignes.",
      minutes: 20,
      objectifs:
        "Vous savez extraire du bulletin les cinq agrégats comptables et contrôler l'égalité fondamentale.",
      theorie:
        "Le bulletin de référence brut_2500 (reference-bulletins.json, janvier 2026, hors RGDU, non-cadre, < 50, mutuelle non activée, AT/MP 1,50 % hypothèse, PAS 0) donne : brut 2 500,00 € ; total salarial 521,01 € ; total patronal 1 027,15 € ; net imposable 2 050,22 € ; net à payer 1 978,99 € ; MNS 1 978,99 €. Ces chiffres sont ceux de computeBulletin({ brut: 2500 }).\n\nÉgalités. Brut − salarial = net avant impôt = ici net à payer (PAS 0) : 2 500,00 − 521,01 = 1 978,99. Coût employeur pédagogique du salaire (hors autres 64) : brut + patronal = 2 500,00 + 1 027,15 = 3 527,15. Dettes du journal : 421 + 43x + 4421 = 1 978,99 + (521,01 + 1 027,15) + 0 = 3 527,15. Charge = dettes à la date du journal, avant paiement banque.\n\nLe net imposable 2 050,22 € n'a pas de compte de charge dédié. Il sert au PAS. Ici PAS = 0, donc pas de 4421. Le MNS non plus : mention de bulletin, pas un compte 64.\n\nAT/MP 1,50 % est dans le 1 027,15 € : HYPOTHÈSE de dossier, pas un taux national. Un dossier réel aurait un 645 différent, donc un journal différent, à brut égal.\n\nLorsque le PAS existe (cas 3 100 €, 203,38 €), le 421 diminue d'autant, le 4421 apparaît, le 641 et le 645 ne changent pas du seul fait de l'impôt. L'impôt n'est pas une charge de personnel.",
      methode:
        "Avant d'écrire : extraire brut, salarial, patronal, PAS, net. Vérifier brut − salarial − PAS = net. Vérifier brut + patronal = net + salarial + patronal + PAS. Puis traduire en comptes.",
      extra: [
        code(`AGRÉGATS — BRUT 2 500 €  (janvier 2026, référence)
Brut                         2 500,00   → 641
Salarial                       521,01   → 43x (retenue)
Patronal                     1 027,15   → 645 et 43x
PAS                              0,00   → 4421 si ≠ 0
Net à payer                  1 978,99   → 421

Contrôle A  2 500,00 − 521,01 − 0 = 1 978,99
Contrôle B  2 500,00 + 1 027,15 = 1 978,99 + 521,01 + 1 027,15 + 0
            3 527,15 = 3 527,15

AT/MP inclus dans 1 027,15 : HYPOTHÈSE 1,50 %. RGDU non appliquée.`),
      ],
      exemple:
        "Le comptable demande pourquoi 645 ≠ 43x. Lina : 43x porte salarial + patronal (1 548,16 €), 645 ne porte que le patronal (1 027,15 €). Le salarial est déjà dans le 641. Deux comptes, deux rôles.",
      erreurs:
        "Prendre le MNS comme 421. Prendre le net imposable comme 421. Oublier le salarial dans 43x. Ajouter le PAS au 645.",
      particuliers:
        "Mutuelle 20/40 € : salarial dans 421 (baisse du net) et 43x ; patronal dans 645 et 43x ; MNS 2026 sans part patronale d'office (BOSS). Acompte : 421 déjà débité en cours de mois, le journal de fin de mois n'a que le solde.",
      exercice:
        "Cas 3 100 €, PAS 8 % : brut 3 100, salarial 646,05, patronal 1 273,67, PAS 203,38, net 2 250,57. Vérifiez l'égalité B et dites les cinq comptes.",
      correction:
        "Charges : 3 100 + 1 273,67 = 4 373,67. Dettes : 2 250,57 + 646,05 + 1 273,67 + 203,38 = 4 373,67. Débit 641 3 100 ; débit 645 1 273,67 ; crédit 421 2 250,57 ; crédit 43x 1 919,72 ; crédit 4421 203,38. Le PAS n'augmente pas le 645.",
    }),
    pack({
      title: "Écriture type : un salarié, brut 2 500 €, journal complet",
      description:
        "Rédiger le journal pédagogique du cas de référence, puis le variante avec PAS.",
      minutes: 26,
      objectifs:
        "Vous savez poser l'écriture d'un bulletin 2 500 € avec 641, 645, 421, 43x, et expliquer chaque montant.",
      theorie:
        "L'écriture de paie du mois constate les charges et les dettes, généralement à la date de clôture de période (31 janvier 2026 pour janvier), distincte du 28 janvier de virement. Nous écrivons un journal à un salarié, cas brut_2500, pour voir la logique. En production, l'import est un lot : les totaux suivent la même algèbre.\n\nDébit 641 : 2 500,00 € — rémunération brute. Débit 645 : 1 027,15 € — charges patronales du moteur (maladie 13 %, CSA, vieillesse, AF 5,25 %, AT/MP hypothèse 1,50 %, FNAL 0,10 % plafonné, chômage, AGS, dialogue social, Arrco T1, CEG T1). Crédit 421 : 1 978,99 € — net à payer. Crédit 43x : 1 548,16 € — 521,01 + 1 027,15. PAS absent. Totaux 3 527,15 / 3 527,15.\n\nLibellé : « Paie janvier 2026 — salarié pédagogique 2 500 € ». Pièce : journal de paie. On n'écrit pas les 16 lignes de cotisations en comptabilité générale si le plan n'éclate pas le 645 ; la balance auxiliaire des organismes, elle, peut éclater 43x. Le salarial 521,01 € n'apparaît pas en débit de charge : il est déjà dans le 641, puis retenu au crédit 43x. C'est le piège n°1 du junior qui « voit deux fois les cotisations ».\n\nSi un PAS existait, on réduirait 421 et l'on créditerait 4421, sans toucher 641 ni 645. L'impôt n'augmente pas le coût employeur. Les comptes sont typiques ; le plan d'entreprise peut dire 641100, 645100, 421000, 431000, 437000, 442110. Vous copiez le mapping, vous ne le devinez pas.",
      methode:
        "1) Extraire les agrégats de référence. 2) Poser débits 64. 3) Poser crédits 42/43/44. 4) Contrôler l'égalité. 5) Faire relire le mapping. 6) Ne pas payer encore : autre écriture.",
      extra: [
        code(`JOURNAL PÉDAGOGIQUE — 31/01/2026
Un salarié, brut 2 500,00 €
Référence : reference-bulletins.json brut_2500
employerTotal 1 027,15   employeeTotal 521,01
PAS 0   net 1 978,99
AT/MP 1,50 % = HYPOTHÈSE   RGDU non appliquée
Comptes TYPIQUES — le plan réel peut différer

Compte  Libellé                              Débit        Crédit
641     Rémunérations du personnel         2 500,00
645     Charges sociales patronales        1 027,15
421     Personnel — rémunérations dues                  1 978,99
43x     Organismes sociaux                              1 548,16
        Totaux                             3 527,15     3 527,15

43x = salarial 521,01 + patronal 1 027,15 = 1 548,16

VARIANTE PAS (autre salarié, brut 3 100, taux 8 % hypothèse)
641                                        3 100,00
645                                        1 273,67
421                                                     2 250,57
43x  (646,05 + 1 273,67)                                1 919,72
4421 PAS                                                203,38
        Totaux                             4 373,67     4 373,67

PAIEMENT ULTÉRIEUR (ex. 28/01 ou date réelle)
421     Personnel                            1 978,99
512     Banque                                            1 978,99`),
      ],
      exemple:
        "Cabinet, 8 salariés. L'import Silae (ou autre) vers le logiciel comptable inverse 645 et 43x sur un dossier mal mappé. Le journal balance, les lettrages URSSAF non. Lina contrôle les agrégats du livre de paie, pas seulement l'équilibre. Un journal équilibré et faux est pire qu'un rejet d'import.",
      erreurs:
        "Crédit 641. Débit 421 à la constatation. 43x = seulement 1 027,15. Oublier que 1 548,16 contient le salarial. Fusionner PAS et 43x.",
      particuliers:
        "STC : mêmes familles, parfois comptes d'indemnités. Acompte déjà payé : 421 déjà mouvementé. Opposition / saisie : sous-compte 421, tiers huissier. Avantage en nature : brut sans sortie banque du 421 correspondante.",
      exercice:
        "Rédigez le journal pédagogique (comptes, montants) pour brut 2 500 €. Puis indiquez ce qui changerait si l'on activait un PAS de 100,00 € sur ce net imposable (chiffre d'exercice, pas le cas 8 %).",
      correction:
        "Journal sans PAS : D 641 2 500,00 ; D 645 1 027,15 ; C 421 1 978,99 ; C 43x 1 548,16. Si PAS 100,00 € (hypothèse d'exercice) : 421 passe à 1 878,99 ; C 4421 100,00 ; 641 et 645 inchangés ; 43x inchangé. Pourquoi : l'impôt collecte une part du net, il ne crée pas de charge sociale. En dossier réel, le PAS se calcule sur 2 050,22 € × taux flux, pas un forfait 100 €.",
    }),
    pack({
      title: "Provisions, charges à payer et coupures de périodes",
      description:
        "Distinguer le journal de paie du mois et les provisions (CP, 13e, RTT, charges sociales afférentes).",
      minutes: 18,
      objectifs:
        "Vous savez pourquoi la comptabilité provisionne, ce que la paie alimente comme compteurs, et ce qu'un junior ne décide pas comme taux de charges sociales de provision.",
      theorie:
        "La paie du mois constate ce qui est versé ou dû au titre des bulletins. La comptabilité, elle, doit rattacher à l'exercice les droits acquis non encore payés : congés payés, 13e mois, primes, RTT selon l'accord. Ce rattachement se fait par des provisions (souvent classe 1 pour certains passifs, ou 428 personnel — charges à payer, 438 organismes — charges à payer, selon le plan). Le PCG et le mapping interne commandent. Un junior de paie n'écrit pas la provision tout seul ; il livre les compteurs (jours, bases) justes.\n\nUne provision de CP n'est pas l'ICP d'un STC. C'est une estimation à la clôture annuelle (et parfois infra-annuelle) : nombre de jours × valeur du jour × (1 + taux de charges patronales estimé). Le taux de charges de provision n'est pas un taux URSSAF officiel unique : c'est un paramètre d'entreprise, parfois un taux moyen. On l'étiquette. On ne le présente pas comme le 13 % maladie.\n\nLa coupure de période : un 13e versé en décembre au titre de l'année, un bonus versé en mars N+1 au titre de N. La paie suit la date de versement pour le bulletin et la DSN du mois de versement (sauf règles particulières). La comptabilité peut avoir provisionné en N. Le junior signale « versement au titre de N », il ne double pas la charge en 641 sans consigne.\n\nLes charges sociales sur provision : 438. Quand on paie réellement, on reprend la provision et l'on passe par le journal de paie habituel. Le risque : oublier la reprise et charger deux fois.",
      methode:
        "En clôture annuelle : extraire compteurs CP / RTT / 13e, bases, lister les hypothèses de taux de charges, livrer à la comptabilité, ne pas inventer un 45 % « de marché ». En cours d'année : savoir que 428/438 existent, ne pas s'en servir pour cacher un oubli de bulletin.",
      extra: [
        code(`PAIE DU MOIS vs PROVISION (pédagogique)

Paie janvier           641 / 645 / 421 / 43x / 4421   faits versés
Provision CP 31/12     641 (ou 64x) / 428
                       645 (ou 64x) / 438             droits acquis non payés
Reprise à la prise     inverse des provisions
Puis bulletin          journal de paie habituel

Taux de charges sur provision = paramètre d'entreprise, pas un taux national.
Jours = compteur paie (unité ouvrable / ouvré à préciser).`),
      ],
      exemple:
        "PME. Le DAF demande « 25 % de charges sur les CP ». Lina ne dit pas que c'est le taux URSSAF. Elle fournit les jours, le brut moyen, et indique que 25 % est une hypothèse à valider (AT/MP, mutuelle, effectif FNAL changent le réel). Elle ne certifie pas 25 %.",
      erreurs:
        "Oublier les charges sociales sur la provision de CP. Utiliser le SMIC comme valeur du jour pour un cadre à 5 000 €. Provisionner le PAS. Prendre le MNS comme base de provision.",
      particuliers:
        "Passif social complexe (médailles, IFC) : actuariat, hors junior. Solde de tout compte en janvier N+1 d'un départ du 31/12 : la provision N doit couvrir, le STC N+1 reprend. Changement de CCN : les compteurs restent à valoriser, pas à inventer.",
      exercice:
        "Compteur pédagogique : 10 jours ouvrables, valeur maintien 26e sur 2 500 €, soit 961,54 € de brut CP. L'entreprise applique une HYPOTHÈSE 40 % de charges patronales de provision. Calculez brut provisionné et charges provisionnées. Est-ce le journal de paie de janvier ?",
      correction:
        "Brut CP : 2 500 / 26 × 10 = 961,54 € → charge 64 / 428. Charges : 961,54 × 40 % = 384,62 € → 64 / 438. Le 40 % est une hypothèse d'entreprise, pas le 1 027,15 / 2 500 du bulletin (qui est 41,086 %). Ce n'est pas le journal de paie de janvier (sauf si les 10 jours sont pris et payés en janvier). Pourquoi : provisionner n'est pas payer.",
    }),
    pack({
      title: "Rapprochements : banque, organismes, 4421, écarts de clôture",
      description:
        "Lettrer 421, 43x et 4421 avec les paiements, et traiter un écart sans l'enfouir dans 641.",
      minutes: 20,
      objectifs:
        "Vous savez quoi rapprocher avec qui, quels écarts sont des arrondis, et lesquels bloquent.",
      theorie:
        "Après le journal de constatation, les comptes de dettes doivent se vider par les paiements. 421 vs fichier SEPA vs extraits bancaires. 43x vs avis de prélèvement URSSAF, appels retraite, mutuelle, issus en pratique de la DSN. 4421 vs reversement PAS. Un compte 43x qui grossit six mois est un lettrage oublié ou une DSN trop légère.\n\nLes écarts classiques. 0,01 à 0,10 € : arrondis de lignes vs totaux, à documenter, parfois un compte d'écart autorisé du plan, jamais un 641 fourre-tout mensuel. Quelques euros : salarié oublié, PAS oublié, régul non comptabilisée. Centaines d'euros : doublon de DSN, mauvais établissement, brut plein au lieu d'un prorata.\n\nLe binôme paie-comptabilité (déjà vu au module métier) se joue ici. La paie apporte le livre, la DSN, les CRM. La comptabilité apporte les avis et la banque. Personne ne « force » le 431 à l'avis en passant l'écart en charge sans analyse.\n\nLes acomptes, saisies, oppositions : sous-comptes 421, rapprochement individuel. Un net 0 ou négatif : pas de SEPA, mais le journal 64/43 existe quand même. Un STC du 15 janvier oublié dans le SEPA et présent dans le 421 : écart immédiat, souvent de l'ordre du net du solde, jamais un arrondi.\n\nRGPD : un export de rapprochement nominatif ne circule pas sur un lecteur commercial (même leçon que le PAS). Les taux, les nets, les saisies restent dans le cercle habilité paie-comptabilité.",
      methode:
        "J+1 paiement : 421 lettré. J+n organismes : 43x vs avis. PAS : 4421 vs paiement État. Écart : liste nominative, cause, régul ou rejeu, écriture d'écart seulement si politique comptable et montant infime. Ticket N+1 au-delà.",
      extra: [
        code(`RAPPROCHEMENT DE CLÔTURE — JANVIER 2026

421   Somme nets bulletins     ......
      SEPA                     ......     écart 0
      Banque                   ......     écart 0

43x   Salarial + patronal      ......
      DSN cotisations          ......
      Avis / prélèvements      ......     expliquer tout écart

4421  Somme PAS                ......
      DSN PAS                  ......
      Paiement État            ......

Cas pédagogique 1 salarié 2 500 €
421    1 978,99
43x    1 548,16
4421       0,00
641    2 500,00
645    1 027,15`),
      ],
      exemple:
        "Avis URSSAF 1 400 €, 43x 1 548,16 € sur le dossier à un salarié. L'écart 148,16 € : la mutuelle/retraite dans 43x n'est pas sur l'avis URSSAF. Lina n'aligne pas tout sur 1 400. Elle éclate 43x : URSSAF vs autres. Le lettrage se fait par organisme, pas par envie de zéro unique.",
      erreurs:
        "Forcer 431 = avis en passant l'écart en 641. Lettrer 421 sur le brut. Oublier le STC dans le SEPA. Envoyer le fichier de rapprochement nominatif à tous les managers.",
      particuliers:
        "Prélèvement URSSAF à une date différente du SEPA salariés. Compensation d'un trop-versé organisme : pièce, pas un silence. Contrôle URSSAF : le rapprochement historique devient pièce, d'où l'intérêt des journaux d'écarts.",
      exercice:
        "Un salarié 2 500 €, un salarié 3 100 € avec PAS 203,38 €. Totaux pédagogiques 421, 4421, 641. Que doit montrer la banque le jour du SEPA salariés uniquement ?",
      correction:
        "421 = 1 978,99 + 2 250,57 = 4 229,56 € = SEPA. 4421 = 203,38 € (pas le jour du SEPA salariés, reversement État selon calendrier officiel). 641 = 2 500 + 3 100 = 5 600 € (constatation, pas la banque). Pourquoi : la banque du 28 ne paie que les nets. Le PAS et les 43x partent sur d'autres flux.",
    }),
    pack({
      title: "Contrôles, limites junior et dialogue avec la comptabilité",
      description:
        "Tenir le rôle paie dans le binôme : livrables, langage, ce que vous refusez de recoder.",
      minutes: 16,
      objectifs:
        "Vous savez préparer un livrable de clôture comptable, expliquer un écart, et refuser une écriture qui casserait la piste bulletin-DSN-journal.",
      theorie:
        "Le gestionnaire de paie parle au comptable avec des agrégats, des dates et des pièces, pas avec « le logiciel a fait un truc ». Livrable type : journal (ou fichier d'import), grand livre de paie, totaux 641/645/421/43x/4421, état PAS, état organismes, liste des STC, liste des acomptes, exceptions. Sans ce paquet, le lettrage est une enquête.\n\nLe comptable peut demander à éclater 43x, à ventiler l'analytique, à isoler les indemnités de rupture. C'est légitime si le mapping existe. Ce n'est pas légitime de demander de « baisser le 641 de 812,90 € » pour coller à un budget, alors que Thomas a un bulletin à 1 287,10 € : on corrige le bulletin, pas le journal contre la paie.\n\nLimites junior : créer un compte, changer un mapping, passer une OD de 4 000 € « pour clôturer », qualifier le régime d'une indemnité de licenciement dans un 67, décider d'un taux de provision. Autonomie : contrôler l'égalité, documenter 0,01 €, signaler un 43x qui ne lettrera pas, expliquer le 645 du cas 2 500 € (1 027,15 €).\n\nLe langage commun évite les faux désaccords. « Charges » = 64. « Dettes sociales » = 43x. « Net » = 421. « Collecteur fiscal » = 4421. « Coût » = 641+645. Un mail de trois lignes avec ces mots avance plus qu'un PDF de 80 bulletins sans totaux.",
      methode:
        "Chaque clôture : paquet + trois totaux de contrôle + liste d'exceptions + nom du déposant DSN + dates de paiement. Réunion courte paie-compta en post-clôture sur les écarts du mois, pas le 20 du mois suivant.",
      extra: [
        code(`LIVRABLE PAIE → COMPTA (checklist)

[ ] Journal équilibré (import)
[ ] Totaux 641 / 645 / 421 / 43x / 4421 = livre de paie
[ ] Cas 2 500 € vérifiable : 2500 / 1027,15 / 1978,99 / 1548,16
[ ] STC du mois isolés
[ ] Acomptes et saisies
[ ] État PAS (nominatif = habilités seulement)
[ ] Date SEPA, date DSN, dates organismes
[ ] Exceptions (prorata entrée, brut 0, net 0)
[ ] Mapping : « comptes typiques, plan réel peut différer »

MAIL TYPE
« Journal janvier équilibré 3 527,15 € sur le dossier test 1 salarié
2 500 €. 421 = 1 978,99 à SEPA. 43x = 1 548,16 à éclater URSSAF / autres
selon avis. Pas de 4421. AT/MP dans 645 = hypothèse 1,50 %. »`),
      ],
      exemple:
        "Le comptable écrit : « passe 1 027,15 en 641, c'est plus simple. » Lina refuse : 1 027,15 est du 645, pas du brut. Simplifier les comptes en mélangeant brut et patronal tue l'analyse du coût et le lettrage. Elle propose un rapport à deux lignes, pas un mélange de comptes.",
      erreurs:
        "Livrer 80 PDF sans totaux. Accepter une OD contraire aux bulletins. Envoyer les taux PAS au cabinet d'audit sans circuit. Dire « 43x c'est l'URSSAF » alors qu'il y a la retraite.",
      particuliers:
        "Audit : pièces, pas des souvenirs. Changement d'expert-comptable en cours d'année : mapping à re-expliquer. Groupe étranger : reporting vs PCG français, deux langages, mêmes totaux de paie.",
      exercice:
        "On vous demande une OD : débit 421 812,90, crédit 641 812,90, « pour Thomas trop payé, sans refaire le bulletin ». Que répondez-vous ?",
      correction:
        "Refus. Un trop-perçu se traite en paie (bulletin de régul, cotisations, DSN, puis journal qui suit le bulletin). Une OD 421/641 sans social casse l'assiette, le 43x, le net imposable, le PAS éventuel, la DSN. Thomas : l'écart 812,90 € est le trop-brut 2 100 vs 1 287,10 ; la correction est un fait de paie, pas un bricolage de tiers. Pourquoi : la piste bulletin-DSN-journal est la pièce d'un contrôle.",
    }),
    quizLesson({
      title: "Quiz — Comptabilité de la paie",
      description: "Débit-crédit, comptes pédagogiques, journal 2 500 €, PAS, provisions, rapprochements.",
      passing_score: 70,
      questions: [
        q({
          question: "Dans le journal pédagogique du brut 2 500 €, le débit 641 vaut :",
          options: [
            "A. 1 978,99 € (le net)",
            "B. 2 500,00 € (le brut)",
            "C. 1 027,15 € (le patronal)",
            "D. 3 527,15 € (le coût)",
          ],
          correct: 1,
          explanation:
            "641 = rémunérations brutes. Le coût 3 527,15 € = 641 + 645. Le net est un crédit 421.",
        }),
        q({
          question: "employerTotal 1 027,15 € et employeeTotal 521,01 €. Le crédit 43x pédagogique est :",
          options: [
            "A. 1 027,15 €",
            "B. 521,01 €",
            "C. 1 548,16 €",
            "D. 1 978,99 €",
          ],
          correct: 2,
          explanation:
            "43x porte salarial + patronal = 521,01 + 1 027,15 = 1 548,16. 645 ne porte que 1 027,15.",
        }),
        q({
          question: "Le PAS se comptabilise typiquement :",
          options: [
            "A. En débit 645",
            "B. En crédit 4421 (ou compte État du plan), en baissant le 421 ; ce n'est pas une charge 64",
            "C. En débit 641",
            "D. Nulle part, le MNS suffit",
          ],
          correct: 1,
          explanation:
            "Collecteur fiscal. Cas 3 100 € : 4421 203,38 €. Les numéros exacts peuvent différer.",
        }),
        q({
          question: "Égalité fondamentale du journal (PAS 0) :",
          options: [
            "A. Brut = net",
            "B. Brut + patronal = net + salarial + patronal",
            "C. MNS = 645",
            "D. 421 = 641 + 645",
          ],
          correct: 1,
          explanation:
            "2 500 + 1 027,15 = 1 978,99 + 521,01 + 1 027,15. Le 421 n'est pas le coût.",
        }),
        q({
          question: "Les comptes 641, 645, 421, 43x, 4421 dans ce module sont :",
          options: [
            "A. Obligatoires mot pour mot pour toute entreprise française",
            "B. Une logique pédagogique PCG ; le plan réel peut différer",
            "C. Des blocs DSN",
            "D. Des taux URSSAF 2026",
          ],
          correct: 1,
          explanation:
            "Legal-sources PCG-641. Mapping interne à demander.",
        }),
        q({
          question: "Une provision de CP :",
          options: [
            "A. Est le journal de paie du mois",
            "B. Rattache des droits acquis non payés ; le taux de charges associé est un paramètre d'entreprise, pas un taux national unique",
            "C. Se crédite en 512",
            "D. Inclut toujours le PAS",
          ],
          correct: 1,
          explanation:
            "428/438 pédagogiques, compteurs paie, taux étiqueté. Pas un virement, pas du PAS.",
        }),
        q({
          question: "Un écart 43x vs avis URSSAF :",
          options: [
            "A. Se force en passant la différence en 641",
            "B. S'analyse (autres organismes dans 43x, régul, oubli) ; on lettrera par organisme",
            "C. Se partage à 50/50",
            "D. Est forcément un arrondi si < 200 €",
          ],
          correct: 1,
          explanation:
            "1 548,16 € n'est pas un avis URSSAF unique. Pas de rustine 641. 200 € n'est pas un arrondi.",
        }),
        q({
          question: "Le jour du SEPA salariés, la banque constate typiquement :",
          options: [
            "A. Le 641",
            "B. Le 421 (nets), pas le 645 ni le 4421",
            "C. Le PMSS",
            "D. Le MNS + le PAS",
          ],
          correct: 1,
          explanation:
            "On paie les nets. Organismes et État : autres dates, autres flux.",
        }),
        q({
          question: "Corriger un trop-perçu Thomas (2 100 vs 1 287,10) par une OD 421/641 sans bulletin :",
          options: [
            "A. Est recommandé pour aller plus vite",
            "B. Casse cotisations, DSN et piste d'audit ; la régul passe par la paie puis le journal",
            "C. Suffit si l'écart est 812,90 €",
            "D. Est obligatoire avant toute DSN",
          ],
          correct: 1,
          explanation:
            "La paie d'abord, le journal ensuite. 812,90 € n'autorise pas le bricolage.",
        }),
        q({
          question: "Dans le cas 2 500 €, 1 027,15 € de patronal inclut :",
          options: [
            "A. Uniquement un taux national AT/MP unique",
            "B. Les charges patronales du moteur, dont un AT/MP 1,50 % étiqueté HYPOTHÈSE",
            "C. Le PAS",
            "D. Le net imposable",
          ],
          correct: 1,
          explanation:
            "Référence brut_2500, hors RGDU, AT/MP pédagogique. PAS 0 dans ce cas.",
        }),
      ],
    }),
  ],
};
