import { pack, quizLesson, q, h, t, note, code } from "../lib.mjs";

export default {
  position: 22,
  title: "Paramétrage de paie : lire, contrôler, tester — sans usurper l'expert",
  description:
    "Comprendre établissement, organismes, taux, CCN, rubriques, profils, contrats et variables. Frontière dure junior / expert : un junior ne « corrige » jamais un taux URSSAF parce qu'il lui semble faux.",
  lessons: [
    pack({
      title: "Ce qu'est le paramétrage, et la frontière junior / expert",
      description:
        "Définir le paramétrage comme un jeu de règles durables, et tracer ce qu'un junior ne touche pas.",
      minutes: 22,
      objectifs:
        "Vous définissez le paramétrage. Vous le distinguez de la saisie du mois. Vous récitez la frontière d'autonomie : lire, comparer à une source, escalader — jamais modifier un taux national « au feeling ».",
      theorie:
        "Le paramétrage est l'ensemble des règles durables que le moteur applique à chaque calcul : identité de l'employeur (SIRET, convention, effectif, caisses), organismes et comptes, taux et plafonds, rubriques (gains, cotisations, retenues), profils (non-cadre, cadre, forfait, stagiaire), liaisons vers la DSN et la comptabilité. Ce n'est pas « les options du logiciel ». C'est le droit et le contrat, traduits en objet technique. Un paramètre faux est une erreur industrielle : il se répète sur 28 bulletins, 12 mois, une DSN, des écritures.\n\nLa saisie du mois est autre chose : une absence, une prime, des heures, une date d'entrée déjà décidée. Le junior saisit des faits, sous pièces. Le paramétrage dit comment ces faits deviennent un brut, une cotisation, un net. Confondre les deux produit le geste le plus dangereux du métier : modifier une règle parce qu'un bulletin « a l'air bizarre ».\n\nFrontière DURE, non négociable dans ce parcours.\n\nJUNIOR — autorisé : lire un paramètre ; le comparer à une source écrite de la période (URSSAF, BOSS, notification Carsat, contrat d'organisme, avenant, documentation interne visée) ; signaler un écart ; saisir une variable du mois selon profil existant ; dupliquer un bulletin d'essai pour contrôler ; documenter une question. INTERDIT : créer ou modifier un taux URSSAF, Agirc-Arrco, PMSS, SMIC ; inventer une rubrique de cotisation ; rattacher un organisme « comme le dossier voisin » ; changer une CCN dans le dossier établissement ; désactiver un plafond « pour que le net remonte » ; appliquer la RGDU ou l'enlever sans consigne.\n\nEXPERT / responsable paie / paramétreur — autorisé sous revue : créer un établissement, un organisme, une rubrique, un profil, un mapping DSN ; charger les paramètres annuels à partir des sources ; tester sur un jeu ; documenter ; former le junior à LIRE. Même l'expert ne « sent » pas un taux : il cite la source et la date d'application.\n\nJanvier 2026, métropole, régime général : PMSS 4 005 €, SMIC 12,02 € / 1 823,03 €, maladie patronale taux plein 13 %, AF taux plein 5,25 %, vieillesse selon rates-2026.json. Ces chiffres ne se « corrigent » pas dans le moteur parce qu'un salarié les trouve élevés. La RGDU 2026 fusionne des allègements : un bulletin peut changer de présentation par rapport à 2025 SANS que le taux plein maladie soit « faux ».",
      methode:
        "Dès J+1, demandez : qui a le droit de modifier quoi (matrice d'habilitation) ? Où est la documentation des paramètres ? Quelle est la dernière date de revue annuelle (janvier) ? En cas d'écart constaté : capture ou export du paramètre, source officielle, ticket au responsable, PAS de correction dans l'écran. Un junior qui « arrange » un taux pour débloquer la clôture commet une faute, même s'il avait intuitivement raison sur un autre sujet.",
      noteText:
        "Règle d'or : un taux URSSAF, un PMSS, un SMIC, un taux Agirc-Arrco ne se modifient jamais parce que « ça a l'air faux ». Sans source de la période, on n'y touche pas. On escalade. AT/MP, mutuelle, versement mobilité, taux PAS : paramètres d'entreprise ou individuels, jamais présentés comme un taux national unique.",
      exemple:
        "Le 3 janvier 2026, Lina voit 13 % de maladie patronale. En 2025, certains dossiers affichaient un taux réduit. Elle se dit que le moteur s'est trompé. Si elle passe à 7 % « comme l'an dernier », elle fausse 28 bulletins et la DSN. La source URSSAF privé 01/01/2026 : taux plein 13 %. Les taux réduits maladie/AF de droit commun fusionnent dans la RGDU 2026. Lina compare, documente, demande à Marc si la RGDU est activée sur le dossier. Elle ne tape pas 7.",
      extra: [
        code(`MATRICE D'AUTONOMIE — PARAMÉTRAGE (Atelier Nord Paie, pédagogique)

Objet                         Junior seul    Junior + revue    Expert / resp. paie
Lire un taux, un plafond      OUI            —                 OUI
Comparer à rates-2026 / URSSAF OUI           —                 OUI
Saisir une variable du mois   OUI si pièce   si doute          OUI
Créer une rubrique            NON            NON               OUI + test + doc
Modifier un taux URSSAF       NON            NON               OUI si SOURCE période
Modifier un taux AT/MP        NON            NON               OUI si notification Carsat
Changer la CCN établissement  NON            NON               OUI + juridique / RH
Activer / couper RGDU         NON            NON               OUI + source + test
Organisme mutuelle / prev     NON            signaler          OUI + contrat
Profil (cadre / non-cadre)    NON            signaler écart    OUI
Mapping DSN / journal compta  NON            NON               OUI + recette
Corriger « pour que ça passe » NON           NON               NON (personne)`),
      ],
      erreurs:
        "Se croire expert après avoir vu un écran d'admin. Copier le paramétrage du dossier A sur le dossier B. Modifier le PMSS à 3 925 € « comme le tutoriel de 2025 ». Laisser un stagiaire avec un profil administrateur « plus simple ».",
      particuliers:
        "Cabinet : chaque SIRET a son paramétrage ; le junior multi-dossiers est le plus exposé au copier-coller. CSP : souvent aucun droit admin — c'est une protection, pas une humiliation. TPE : le dirigeant vous demande de « mettre moins de charges » : vous refusez, vous expliquez la source, vous n'inventez pas une optimisation.",
      exercice:
        "Classez : junior seul / revue / interdit / expert.\nA. Saisir 8 HS validées.\nB. Passer la maladie patronale de 13 % à 7 % « comme décembre ».\nC. Signaler que le PMSS affiché est 3 864 €.\nD. Créer une rubrique de prime exceptionnelle soumise.",
      correction:
        "A. Junior seul, pièce de validation.\nB. Interdit, y compris à l'expert sans source. Le taux plein maladie 13 % est le paramètre URSSAF privé 01/01/2026. Décembre n'est pas une source.\nC. Junior : signaler avec source (PMSS 4 005 €, arrêté 22/12/2025). L'expert corrige après vérification.\nD. Expert + test + doc. Une prime peut n'être qu'une variable sur une rubrique déjà existante : le junior demande d'abord si la rubrique existe, il ne la crée pas.",
    }),
    pack({
      title: "Établissement, effectif et dossier employeur",
      description:
        "Paramétrer — ou plutôt contrôler — l'identité sociale de l'employeur avant tout bulletin.",
      minutes: 20,
      objectifs:
        "Vous savez quels identifiants d'établissement conditionnent la paie et la DSN, vous contrôlez un dossier employeur, et vous n'inventez pas un SIRET, une convention ou un effectif.",
      theorie:
        "Avant les salariés, il y a l'employeur. Le moteur a besoin d'un établissement : raison sociale, SIREN/SIRET, code APE, adresse, convention collective applicable, effectif (seuils 11, 50, etc. selon obligations), régime, éventuellement plusieurs établissements. Ces données irriguent la DSN, le taux AT/MP (notification par établissement en principe), le FNAL (0,10 % plafonné si < 50, 0,50 % si ≥ 50, URSSAF privé 2026), parfois le versement mobilité (taux d'entreprise / territoire, JAMAIS un taux national inventé ici).\n\nL'effectif n'est pas « le nombre de lignes du mois ». C'est un concept social, avec des règles de décompte qui ne se recodent pas de tête dans un juniorat. Un passage de 49 à 50 salariés a des conséquences de paramétrage (FNAL, et d'autres obligations hors paie). Un junior qui voit 50 dans Excel et 49 dans le moteur n'arbitrage pas : il alerte, avec les deux chiffres et la date.\n\nLa convention collective du dossier établissement n'est pas un décor. Elle oriente minima, maintien, majorations, parfois prévoyance. On ne la choisit pas « parce que Syntec c'est plus simple ». On la lit dans le dossier juridique / RH. Ce cours n'invente aucune clause de CCN Bois ou autre : les minima se lisent dans le texte applicable.\n\nMulti-établissements : un salarié peut changer de SIRET, de caisse AT, parfois de convention. Fusionner « pour faire un seul dossier » est une décision d'expert et souvent un risque DSN. Le junior identifie l'établissement de rattachement du contrat, il ne fusionne pas.",
      methode:
        "Checklist dossier employeur, une fois par an au moins (janvier) et à chaque changement : SIRET = KBIS / avis INSEE ; CCN = accord / code IDCC du dossier, pas un souvenir ; organismes = contrats ; effectif = consigne responsable ; AT/MP = notification Carsat, pas un taux « du voisin ». Junior : contrôle et écarts. Expert : saisie des changements.",
      extra: [
        code(`FICHE ÉTABLISSEMENT — contrôle junior (à dater)

Période de contrôle : 02/01/2026
SIRET : .....................  Source : ...............  Écart : O/N
IDCC / CCN : ................  Source : ...............  Écart : O/N
Effectif retenu paramétrage : ....  Seuil FNAL : <50 / ≥50
FNAL attendu si régime général privé 2026 :
  <50 → 0,10 % plafonné   ≥50 → 0,50 %
  (source : URSSAF taux privé 01/01/2026 — pas un souvenir)
AT/MP : .... %  Source : notification Carsat du ....  HYPOTHÈSE si dossier fictif
Versement mobilité : .... %  HYPOTHÈSE / taux local — pas un taux national
Organismes retraite / prev / mutuelle : contrats à jour : O/N
Qui a modifié le dossier depuis le 01/12 : ...............
Junior : je n'ai modifié AUCUN de ces champs. Signature : .........`),
      ],
      exemple:
        "Atelier Nord Paie, un SIRET, 28 salariés, < 50 donc FNAL 0,10 % plafonné si le paramètre suit l'URSSAF 2026. Un stagiaire compte 28 lignes et veut « passer à 0,50 % pour être large ». Large n'est pas une source. 28 < 50. Le junior laisse 0,10 % et documente l'effectif. Il ne « sécurise » pas en surpayant des cotisations inventées.",
      erreurs:
        "Recopier le SIRET du siège sur un établissement distinct. Changer l'IDCC pour débloquer une rubrique. Utiliser l'effectif du badgeage (présents du jour) comme effectif social. Oublier qu'une TPE à 8 peut avoir un second SIRET.",
      particuliers:
        "Franchise, groupement d'employeurs, portage : l'employeur déclarant n'est pas toujours « celui qui donne le travail ». UES : l'effectif peut se discuter — hors autonomie junior. Création d'établissement en cours d'année : projet, DPAE, paramétrage expert, pas une ligne ajoutée le 24.",
      exercice:
        "Dossier : 48 salariés au 31/12/2025, 3 CDI au 6 janvier 2026, 1 sortie au 31 janvier. Le moteur est encore en FNAL 0,10 %. Que fait le junior en janvier ? Que ne fait-il pas ?",
      correction:
        "Il documente : 48, +3, −1 en fin de mois, et demande au responsable comment l'effectif « seuil » est décompté (moyenne, date d'appréciation — il ne l'invente pas). Il ne passe pas tout seul à 0,50 % le 6 janvier « au cas où ». Il ne laisse pas le sujet fermé. Le FNAL 0,10 / 0,50 est un paramètre annuel officiel selon seuil ; le décompte d'effectif est une règle à confirmer, pas un feeling de clôture.",
    }),
    pack({
      title: "Organismes et paramètres sociaux : rattacher sans inventer",
      description:
        "Contrôler URSSAF, retraite, prévoyance, mutuelle, et ce qui est hypothèse d'entreprise.",
      minutes: 20,
      objectifs:
        "Vous listez les organismes d'un dossier, vous distinguez un paramètre national d'un contrat d'entreprise, et vous n'affiliez pas un salarié à la « mauvaise caisse » par analogie.",
      theorie:
        "Les organismes sont les destinataires des cotisations et des déclarations : URSSAF (ou MSA selon régime), Agirc-Arrco, institutions de prévoyance, mutuelle, parfois caisse de congés, OPCO, etc. Dans le moteur, chaque organisme a un identifiant, des libellés, des taux ou des barèmes, un mapping DSN. Un mauvais rattachement produit des bulletins « qui ont l'air bons » et des CRM DSN, des appels de cotisations divergents, des droits retraite mal alimentés.\n\nOn distingue :\n- Paramètre annuel national : PMSS, SMIC, taux régime général listés dans rates-2026.json (maladie, vieillesse, AF, chômage, AGS, FNAL selon seuil, CSG/CRDS, Agirc-Arrco T1/T2, CEG, CET, APEC). Source : URSSAF, Agirc-Arrco, MSA barème, arrêté. Le junior compare. L'expert charge. Personne n'invente.\n- Paramètre notifié : AT/MP (Carsat), parfois autres taux d'établissement. Hypothèse pédagogique du cours : 1,50 % — JAMAIS un taux national.\n- Paramètre de contrat collectif : mutuelle, prévoyance (exemple pédagogique 20 € salarial / 40 € patronal). Le MNS, jusqu'au 31/12/2026 selon BOSS, n'intègre pas d'office la part patronale de complémentaire santé.\n- Paramètre individuel : taux PAS (DGFiP via CRM), affiliation, option. Le junior n'emprunte pas le taux PAS du voisin.\n\nUn organisme « mutuelle » créé sans contrat, ou une prévoyance cadre appliquée à un non-cadre, est un paramétrage faux. Le junior qui « rattache vite » pour éditer un premier bulletin d'entrée crée une dette technique. Mieux vaut un bulletin d'essai bloqué qu'une affiliation fantôme.",
      methode:
        "Pour chaque nouvel organisme ou changement : pièce (contrat, notification, compte rendu URSSAF), identifiant, date d'effet, population couverte (tous, cadres, anciens), part salariale / patronale, caractère obligatoire, mapping. Junior : dossier de pièces + écart. Expert : création dans l'outil après pièces. Test sur un bulletin d'essai d'un salarié type, pas sur la clôture réelle.",
      exemple:
        "Entrée ANP-09 le 13 janvier. La mutuelle du dossier pédagogique est 20/40 €. Lina vérifie que le profil « non-cadre entrée » inclut la mutuelle à la date d'embauche selon le contrat collectif (adhésion, délai, dispense possible). Elle ne crée pas un organisme. Elle signale si la dispense n'a pas de pièce. Marc paramètre les dispenses, pas Lina.",
      erreurs:
        "Copier l'identifiant organisme d'un autre client cabinet. Appliquer la prévoyance cadre à tout le monde « plus protecteur ». Mettre 0 en mutuelle pour augmenter un net sur demande manager. Confondre AGS (0,25 % patronal 2026, 0,03 % ETT) avec un contrat de mutuelle.",
      particuliers:
        "MSA vs régime général : ce cours est régime général métropole sauf mention. Ne pas « convertir » un dossier agricole. Portabilité prévoyance/mutuelle : règles spécifiques, pas un paramètre bricolé le 24. Changement d'organisme au 1er janvier : double paramétrage transitoire, recette expert.",
      exercice:
        "Le bulletin d'essai d'ANP-05 (cadre, 2 800 €) n'a pas de ligne APEC. (1) Que dit le paramètre national 2026 ? (2) Que fait le junior ? (3) Que ne fait-il pas ?",
      correction:
        "1. APEC : 0,024 % salarial et 0,036 % patronal dans rates-2026.json, population cadres (paramètre Agirc-Arrco / APEC, pas une invention). Un cadre sans APEC est un écart de profil ou de rubrique.\n2. Junior : comparer au profil cadre d'un autre bulletin du dossier, documenter, ticket Marc, ne pas clôturer ce bulletin comme « OK ». \n3. Il ne crée pas la rubrique APEC tout seul, il ne la met pas « en dur » en variable, il ne conclut pas que « l'APEC a disparu en 2026 ».",
    }),
    pack({
      title: "Taux et plafonds : la source d'abord, jamais l'intuition",
      description:
        "Ancrer le réflexe 2026 : comparer au barème, ne jamais « corriger l'URSSAF » dans le moteur.",
      minutes: 24,
      objectifs:
        "Vous citez les paramètres nationaux de janvier 2026 utiles au contrôle, vous savez où les lire, et vous appliquez la règle dure : pas de modification de taux sans source de la période.",
      theorie:
        "Le geste qui sépare un professionnel d'un danger public, c'est celui-ci : face à un taux qui « paraît trop élevé » ou « trop bas », ouvrir la source de la période, pas l'écran de modification.\n\nJanvier 2026, métropole, régime général, rémunérations au titre de janvier 2026 (rates-2026.json, vérifié 14/10/2026) :\n- PMSS 4 005 €, PASS 48 060 €, jour 220 €, heure 30 € (arrêté 22/12/2025, URSSAF).\n- SMIC 12,02 € / h et 1 823,03 € / mois (151,67 h) du 01/01/2026 au 31/05/2026.\n- Maladie salarial 0 % (5,50 % si non domicilié fiscalement en France).\n- Maladie patronale taux plein 13 % ; AF taux plein 5,25 %. En 2026, les taux réduits maladie/AF de droit commun fusionnent dans la RGDU. Le moteur pédagogique n'applique la RGDU que si le cas le demande. Sinon, taux pleins, et on le dit.\n- Vieillesse salarial 6,90 % plafonnée + 0,40 % totalité ; patronal 8,55 % plafonnée + 2,11 % totalité.\n- CSG 6,80 % déductible + 2,40 % non déductible + CRDS 0,50 %, assiette 98,25 % jusqu'à 4 PASS.\n- Chômage patronal 4,00 % (4 PASS) ; AGS 0,25 % ; FNAL 0,10 % plafonné < 50 / 0,50 % ≥ 50 ; dialogue social 0,016 %.\n- Agirc-Arrco T1 7,87 % (4,72 / 3,15) ; T2 21,59 % (12,95 / 8,64) ; CEG T1 2,15 % ; CEG T2 2,70 % ; CET 0,35 % si salaire > T1.\n\nAucun de ces taux ne se change « parce que le net a baissé par rapport à décembre ». Décembre 2025 n'est pas une source de janvier 2026. Un tutoriel, un forum, un collègue d'un autre dossier, un souvenir de formation antérieure, ne sont pas des sources. La source a un émetteur, une date, un périmètre (régime, territoire).\n\nAT/MP, mutuelle, prévoyance, versement mobilité, taux PAS : toujours étiquetés hypothèse ou individuel. Un junior qui aligne l'AT sur 1,50 % « comme dans le cours » en production commet la même faute que celui qui invente 2 % : le cours est pédagogique, la Carsat notifie.",
      methode:
        "Rituel de janvier : impression ou export des paramètres moteur vs tableau de contrôle sourcé. Chaque écart = ticket, pas une retouche. Si un salarié conteste un taux : expliquer la source, ne pas ouvrir l'admin. Si le moteur est réellement en N-1 (PMSS 2025), l'expert charge 2026 après source, teste un bulletin au-dessus et en-dessous du plafond, puis libère la production.",
      extra: [
        code(`CONTRÔLE DES TAUX — janvier 2026 — junior = comparer, pas modifier

Paramètre                 Attendu (source)                         Moteur  Écart  Action junior
PMSS                      4 005 € (URSSAF, arrêté 22/12/2025)      ......  O/N    signaler
SMIC horaire              12,02 € (01/01-31/05/2026)               ......  O/N    signaler
Maladie patronale plein   13 % (URSSAF privé 01/01/2026)           ......  O/N    NE PAS « remettre le réduit »
AF plein                  5,25 %                                   ......  O/N    idem
Vieillesse sal. plaf.     6,90 %                                   ......  O/N    signaler
CSG déd. / non déd / CRDS 6,80 / 2,40 / 0,50  assiette 98,25 %     ......  O/N    signaler
Chômage patronal          4,00 % (4 PASS)                          ......  O/N    signaler
AGS                       0,25 % (sauf ETT 0,03 % — hors cas)      ......  O/N    signaler
FNAL                      0,10 % plaf. si <50 / 0,50 % si ≥50      ......  O/N    signaler effectif
Arrco T1 / T2             7,87 % / 21,59 %                         ......  O/N    signaler
RGDU                      seulement si le dossier le demande       ......  O/N    ne pas activer seul
AT/MP                     notification Carsat (pas le 1,50 % cours)......  O/N    pièce
Mutuelle                  contrat collectif                        ......  O/N    pièce

Phrase interdite dans le moteur : « je corrige, ça avait l'air faux ».`),
      ],
      exemple:
        "Un cadre à 4 005 € voit la T2 à zéro. Il écrit : « vous avez oublié ma retraite ». Lina vérifie : T1 = PMSS, T2 commence au-delà. 4 005 € est exactement le plafond janvier 2026. Ce n'est pas un oubli. Elle explique, elle ne « force » pas une T2. Si le brut était 4 006 €, une T2 d'un euro d'assiette devrait apparaître : là, un zéro serait un vrai écart de paramétrage, à signaler, pas à saisir en variable.",
      erreurs:
        "Recharger un fichier de taux 2025. Appliquer le SMIC de juin (12,31 €) en janvier. Activer la RGDU « pour faire baisser le coût » sans consigne. Modifier le taux PAS dans le paramétrage établissement.",
      particuliers:
        "Alsace-Moselle, régimes spéciaux, non-résidents (maladie 5,50 %) : hors barème standard, source spécifique, expert. Acomptes de barème en cours d'année : date d'effet, pas d'anticipation. Double établissement dont un à ≥ 50 : FNAL pas forcément unique — ne pas lisser.",
      exercice:
        "Le moteur affiche PMSS 3 925 € et maladie patronale 7 %. Nous sommes le 4 janvier 2026, dossier métropole régime général. Rédigez le ticket à Marc (faits, sources, action demandée, action interdite).",
      correction:
        "Faits : PMSS moteur 3 925 € vs 4 005 € attendu (URSSAF, arrêté 22/12/2025) ; maladie 7 % vs taux plein 13 % (URSSAF privé 01/01/2026). Possible oubli de bascule 2026 et/ou ancien taux réduit hors RGDU.\nAction demandée : Marc vérifie les sources, charge les paramètres 2026, décide de la RGDU selon le dossier, teste deux bulletins (sous plafond, au PMSS), documente.\nAction interdite : Lina ne saisit pas 4 005 ni 13 % elle-même si elle n'a pas le droit admin ; si elle l'a par erreur, elle n'utilise pas ce droit. Elle ne reprend pas 7 % « le temps de voir ».\nPourquoi : deux erreurs de janvier classiques, industrielles.",
    }),
    pack({
      title: "CCN, rubriques et profils : traduire une règle, pas la créer",
      description:
        "Comprendre comment une convention et un profil deviennent des rubriques, sans écrire une clause fictive.",
      minutes: 20,
      objectifs:
        "Vous distinguez une rubrique, un profil et une variable. Vous savez qu'une CCN se lit, ne s'invente pas, et qu'un junior n'ajoute pas une rubrique « pour que ça calcule ».",
      theorie:
        "Une rubrique est une ligne élémentaire du moteur : un gain (salaire de base, HS, prime), une cotisation, une retenue, un net. Elle a une assiette, un taux ou un montant, un lien DSN, souvent un lien comptable, des conditions (déclenchée par un profil, une population, une variable). Un profil (ou « régime de salarié », le nom change selon les outils — nous n'en citons aucun bouton) est un paquet : non-cadre 35 h, cadre, forfait jours, apprenti, stagiaire. Le profil enclenche des rubriques. La variable du mois alimente une rubrique déjà existante (nombre d'HS, montant de prime).\n\nLa CCN n'est pas une rubrique. C'est un texte. Le paramétreur traduit certaines clauses (minima, majorations, maintien) en rubriques et en constantes. Si la traduction est fausse, le bulletin est faux avec la bénédiction apparente de la convention. Ce cours n'invente aucune clause : lorsqu'Atelier Nord Paie est dit « CCN Bois », les minima et le maintien maladie se lisent dans le texte applicable, ils ne sortent pas d'un modèle. Un junior qui « se souvient d'un 110 % » d'une autre CCN commet une faute de paramétrage mental.\n\nCréer une rubrique a des effets collatéraux : double assiette, oubli de CSG, oubli de DSN, filet de cotisation non plafonné, net à payer qui saute une retenue. C'est un acte d'expert, testé sur un salarié type, documenté (objectif, assiette, taux, DSN, compta, date d'effet, auteur). Un junior qui a besoin d'une prime exceptionnelle demande : « la rubrique PRIME_EXC existe-t-elle, est-elle soumise, le mapping DSN est-il bon ? » Si oui, il saisit le montant. Si non, ticket. Il ne clone pas une rubrique « cadeau » à 2 heures du matin.",
      methode:
        "Avant de saisir un nouveau type de gain : chercher la rubrique existante ; lire sa fiche (assiette, soumise/non soumise, DSN) ; si absente, décrire le besoin en français (pas en code) au responsable. Contrôle junior d'un profil : comparer deux salariés du même profil, écarts explicables par les variables du mois uniquement.",
      extra: [
        code(`FICHE RUBRIQUE — modèle de documentation (expert rédige, junior lit)

Code interne        : PRIME_EXC
Libellé bulletin    : Prime exceptionnelle
Date d'effet        : 01/01/2026
Population          : tous CDI, sur variable mensuelle
Assiette / nature   : gain soumis (hypothèse de dossier — QUALIFIER avant)
Cotisations         : même sort que le salaire de base SAUF décision contraire écrite
DSN                 : à mapper (expert) — junior ne « devine » pas un code
Compta              : 641... (expert + comptable)
Qui a demandé       : direction, mail du ....
Qui a testé         : ....  bulletin d'essai n° ....
Qui a validé        : Marc  date ....
Ce que le junior saisit : le MONTANT du mois, pas la fiche.`),
      ],
      exemple:
        "Le chef d'atelier veut une « prime de poussière » de 80 €. Lina cherche : pas de rubrique. Elle ne recycle pas « tickets restaurant » ni « HS 25 % ». Elle écrit le besoin, Marc qualifie (soumise, usage, égalité de traitement), crée ou refuse. Le mois suivant, Lina saisit 80 sur la rubrique créée, pour les seuls salariés listés, pièce à l'appui.",
      erreurs:
        "Cloner une rubrique de cotisation pour faire un gain. Mettre une indemnité kilométrique sur une rubrique soumise « on verra ». Changer le profil d'un forfait jours en 35 h pour « réussir » un prorata. Inventer un taux de majoration CCN.",
      particuliers:
        "Avenant de classification : le profil peut changer à date d'effet, pas au feeling du manager. Deux CCN dans un même SIRET (rares cas, annexes) : expert. Rubrique temporaire de régularisation : encore plus documentée, date de fin, pour ne pas courir 12 mois.",
      exercice:
        "Trois demandes. Pour chacune : saisie junior / ticket expert / refus.\n1. Prime exceptionnelle 200 €, rubrique PRIME_EXC déjà documentée, liste visée.\n2. « Mets-le cadre pour qu'il ait l'APEC, ça fait plus sérieux. »\n3. Nouvelle indemnité d'outillage, jamais vue dans le dossier.",
      correction:
        "1. Saisie junior du montant, population = liste visée, contrôle bulletin d'essai.\n2. Refus + escalade RH : le statut cadre est une classification, pas un décor de cotisations. L'APEC suit le statut, on n'inverse pas.\n3. Ticket expert : qualification (remboursement de frais ? gain soumis ?), puis rubrique. Pourquoi : le junior ne crée pas le droit en créant la ligne.",
    }),
    pack({
      title: "Contrats, variables, tests : ce qui entre dans le calcul",
      description:
        "Relier le contrat et les variables du mois au paramétrage, puis tester avant de produire.",
      minutes: 22,
      objectifs:
        "Vous séparez les données de contrat, les variables mensuelles et les règles. Vous décrivez un test de non-régression simple. Vous n'utilisez pas la clôture réelle comme banc d'essai.",
      theorie:
        "Le calcul combine trois couches. (1) Le contrat : date d'entrée, quotité, classification, rémunération de base, forfait, SIRET, profil. C'est de la donnée RH durable, parfois modifiée par avenant. (2) Les variables du mois : CP, maladie, HS, primes, acomptes. (3) Le paramétrage : rubriques, taux, organismes. Un bug a une adresse. « Le net est bizarre » n'en a pas. Un junior apprend à localiser : est-ce le contrat (mauvaise quotité), la variable (8 HS non validées), ou la règle (mauvais taux) ? Les deux premiers sont son terrain, sous pièces. Le troisième est un signalement.\n\nTester, ce n'est pas « lancer le réel et voir ». C'est prendre un ou plusieurs dossiers types (non-cadre au SMIC, cadre au PMSS, entrée, sortie, arrêt, temps partiel), calculer en brouillon, comparer à un attendu. L'attendu d'un test réglementaire cite la période, la formule, la source. L'attendu d'un test de non-régression peut être « le bulletin de décembre, plus les seuls faits de janvier, plus les paramètres 2026 ». Si tout a bougé, on ne sait plus ce qu'on teste.\n\nEn janvier 2026, le test minimal d'un dossier 28 personnes : un bulletin sous plafond, un au PMSS (ANP-13 à 4 005 €), une entrée proratisée (ANP-09), une sortie (ANP-16), un arrêt, un SMIC (1 823,03 €). On ne valide pas « le vert logiciel ». On valide des chiffres. Le simulateur pédagogique LOU peut servir d'attendu sur un cas sourcé. Il n'est pas le moteur commercial. Un écart simulateur / moteur de production n'autorise pas à hacker les taux : il autorise une analyse.",
      methode:
        "Avant la première clôture sur un paramétrage modifié (même par Marc) : liste des cas tests, calcul brouillon, comparaison, PV de recette d'une page. Après un changement de taux annuel : rejouer les mêmes cas. Junior : exécute les cas, renseigne le PV. Expert : décide la mise en production. Gel des variables inchangé : on ne teste pas avec des HS encore ouvertes.",
      extra: [
        code(`PV DE TEST — Atelier Nord Paie — 20/01/2026 (pédagogique)

Cas                         Attendu (nature)                         Résultat  OK
Non-cadre SMIC ANP-03       Brut 1 823,03 € (SMIC 35 h 01/01/2026)   ......    O/N
Cadre au PMSS ANP-13        Brut 4 005 € ; T2 Agirc-Arrco = 0        ......    O/N
Entrée ANP-09               Prorata selon RÈGLE DU DOSSIER (pas 19/31
                            imposé ; le 19/31 du module Excel est
                            une hypothèse calendaire d'exercice)      ......    O/N
Sortie ANP-16               Mois complet si travaillé jusqu'au 31    ......    O/N
Arrêt (salarié A)           Maintien = LIRE CCN / loi, pas un % cours ......    O/N
AT/MP                       = notification, pas 1,50 % « du cours »  ......    O/N
FNAL                        0,10 % plafonné (28 < 50)                ......    O/N
Net négatif salarié C       Ne pas clôturer ; voir saisie / mutuelle ......    O/N

Paramètres 2026 chargés par : Marc    Date : 02/01/2026
Tests exécutés par : Lina             Revue : Marc
Mise en production clôture : OUI / NON (Marc)`),
      ],
      exemple:
        "Marc charge le PMSS 4 005 € le 2 janvier. Lina lance ANP-13 : une T2 de 12 € apparaît alors que le brut est 4 005 €. Attendu : T2 nulle. Lina ne « enlève 12 € en variable ». Elle signale : possible ancien plafond 3 864 ou 3 925 encore en assiette, ou une rubrique au-dessus du brut. Marc corrige le paramètre, relance le cas, puis seulement les 28.",
      erreurs:
        "Tester sur le réel le 24 à 19 h. Comparer un net 2026 à un net 2025 sans ôter l'effet PMSS/RGDU. Oublier l'entrée dans les cas tests (ANP-09). Déclarer « tests OK » sans écrire les attendus.",
      particuliers:
        "Paramétrage modifié en cours de mois après un premier calcul : tout le portefeuille est à recalculer, pas « les trois qui avaient l'air faux ». Environnement de test vs production : un junior n'expérimente pas en production, même sur un stagiaire « qui ne râlera pas ».",
      exercice:
        "Le PV ci-dessus a ANP-03 à 1 810 € de brut. (1) Pourquoi c'est un échec de test ? (2) Quelles couches (contrat / variable / paramètre) explorer, dans quel ordre ? (3) Qui corrige un SMIC moteur resté à 11,88 € ?",
      correction:
        "1. SMIC mensuel 1 823,03 € au 01/01/2026 (URSSAF). 1 810 € sous SMIC pour un temps plein 35 h du dossier = échec, clôture interdite sur ce cas.\n2. Contrat : quotité, heures. Variable : absence non saisie qui diminue. Paramètre : SMIC / rubrique de base non revalorisés. Ordre : faits du mois d'abord (souvent la cause), puis contrat, puis paramètre.\n3. L'expert, d'après source URSSAF, après test. Le junior n'écrit pas 1 823,03 dans une rubrique « rattrapage » pour camoufler un SMIC paramétré faux : il ferait une rustine mensuelle. Pourquoi : le test a précisément empêché la rustine.",
    }),
    pack({
      title: "Documenter le paramétrage : la mémoire qui survit à la clôture",
      description:
        "Tenir un journal des paramètres : qui, quoi, source, date d'effet, test, pour ne pas dépendre d'une personne.",
      minutes: 18,
      objectifs:
        "Vous savez ce qu'une documentation de paramétrage contient, vous y contribuez en junior (questions et constats), et vous refusez le paramétrage oral « c'est dans la tête de Marc ».",
      theorie:
        "Un paramétrage non documenté est un risque d'entreprise. Maladie, congé, départ du responsable, contrôle URSSAF, migration d'outil : il faudra expliquer pourquoi tel taux, telle rubrique, telle population. La mémoire orale se perd. Le junior qui arrive en mars et « refait comme février » sans savoir que février contenait une rustine de janvier reproduira la rustine jusqu'en décembre.\n\nDocumenter n'est pas écrire un roman. C'est : date d'effet, objet, ancienne valeur, nouvelle valeur, source (URL, notification, contrat, mail de décision interne), auteur, relecteur, cas de test, ticket. Les décisions internes (prime, usage) se distinguent des paramètres légaux. Les hypothèses pédagogiques de ce cours (AT 1,50 %, mutuelle 20/40) n'ont pas vocation à vivre dans un dossier réel sans pièce.\n\nLe junior n'est pas rédacteur unique de la bible de paramétrage. Il y dépose : les écarts constatés, les questions, les PV de test qu'il a exécutés, les mails de décision qu'on lui a transférés. Il ne rédige pas une CCN. Il ne « met à jour Wikipédia interne » avec un taux entendu à la machine à café.\n\nHabilitations : la doc dit qui peut modifier. Les comptes admin nominatifs, pas « paie / paie ». Un stagiaire en admin est un incident en attente. La traçabilité technique de l'outil (logs) ne remplace pas la phrase en français : « PMSS passé à 4 005 € le 02/01/2026, source URSSAF, test ANP-13 OK, Marc ».",
      methode:
        "Un onglet ou une GED « PARAM_2026 » : une ligne par changement. Revue en janvier et à chaque bascule. En clôture, interdiction de modifier un taux « vite fait » sans ligne de journal. Le lendemain de clôture, relire le journal : rien n'a été changé en cachette pendant le gel.",
      extra: [
        code(`JOURNAL DE PARAMÉTRAGE — extrait pédagogique ANP 2026

Date effet  Objet           Avant     Après      Source                         Auteur  Test        Revue
01/01/2026  PMSS            (N-1)     4 005 €    URSSAF plafonds, arrêté        Marc    ANP-13      Marc
                                                 22/12/2025
01/01/2026  SMIC horaire    (N-1)     12,02 €    URSSAF Smic 2026               Marc    ANP-03      Marc
01/01/2026  Maladie pat.    (N-1)     13 %       URSSAF privé 01/01/2026        Marc    2 cas       Marc
                                                 (taux plein ; RGDU = décision
                                                 dossier, ici NON appliquée
                                                 sauf cas explicite)
01/01/2026  FNAL            0,10 %    0,10 %     <50, URSSAF 2026               Marc    —           Marc
02/01/2026  AT/MP           (N-1)     (notif.)   Notification Carsat 2026       Marc    1 cas       Marc
                                                 PAS le 1,50 % du cours
13/01/2026  Profil ANP-09   —         NC 35 h    Contrat de travail             Lina    bulletin    Marc
                                                 (saisie contrat, pas un taux)
Interdit dans ce journal : « corrigé car le net était moche ».`),
      ],
      exemple:
        "Marc est en arrêt le 24. Lina trouve un PMSS encore à N-1. Sans journal, elle ne sait pas si c'est un oubli ou un choix. Avec journal, elle voit que la ligne 01/01 n'existe pas : oubli. Elle n'a toujours pas le droit de charger le PMSS si l'habilitation le réserve. Elle alerte le binôme / la direction selon délégation. La doc a transformé un mystère en fait.",
      erreurs:
        "Documenter après, « quand on aura le temps ». Écrire des URLs mortes sans PDF de sauvegarde de la page source (politique interne). Mettre des mots de passe dans le journal. Effacer les lignes N-1 : l'historique EST la valeur de la doc.",
      particuliers:
        "Cabinet : un journal par SIRET client, pas un journal cabinet unique. Migration d'outil : la doc est le cahier de reprise. Audit : on montre des sources, pas des souvenirs. RGPD : le journal de paramétrage contient peu de données nominatives salariés ; s'il en contient (cas tests), habilitations.",
      exercice:
        "Rédigez la ligne de journal pour : « on a enlevé la RGDU du dossier ANP le 15 janvier 2026 parce qu'un net avait baissé ». Puis corrigez cette ligne pour la rendre acceptable, ou dites-la interdite.",
      correction:
        "La motivation « parce qu'un net avait baissé » est interdite : ce n'est pas une source. Ligne acceptable seulement si : date d'effet, objet RGDU, avant ON / après OFF, source = décision écrite du responsable + rappel que le cours n'applique la RGDU que sur cas explicite + tests relancés (SMIC, plafond) + auteur expert + revue. Un junior ne coupe pas la RGDU. Si la vraie raison est une erreur d'activation, on l'écrit : « activation non décidée, rollback, tests OK ». Pourquoi : le journal interdit de maquiller une intuition en paramètre.",
    }),
    quizLesson({
      title: "Quiz — Paramétrage de paie",
      description: "Vérifier la frontière junior/expert, les sources 2026 et le refus du feeling.",
      passing_score: 70,
      questions: [
        q({
          question: "Un junior voit 13 % de maladie patronale et trouve cela « trop élevé » vs 2025. Il doit :",
          options: [
            "A. Remettre 7 % pour clôturer, on verra en février",
            "B. Comparer à la source URSSAF privé 01/01/2026 (taux plein 13 %, RGDU par ailleurs) et signaler, sans modifier au feeling",
            "C. Demander au salarié quel taux il préfère",
            "D. Copier le taux du dossier client voisin",
          ],
          correct: 1,
          explanation:
            "Règle dure du module : pas de modification de taux URSSAF sans source. 13 % est le taux plein 2026. Les réduits de droit commun fusionnent dans la RGDU.",
        }),
        q({
          question: "Qui peut créer une rubrique de cotisation dans ce parcours ?",
          options: [
            "A. Le junior, si Excel le dit",
            "B. Le manager d'atelier",
            "C. L'expert / responsable paie, après source, test et documentation",
            "D. Le salarié cadre, pour son APEC",
          ],
          correct: 2,
          explanation:
            "Créer une rubrique est un acte d'expert. Le junior saisit des variables sur des rubriques existantes, ou ticket.",
        }),
        q({
          question: "Le PMSS à retenir pour janvier 2026 (période d'activité) est :",
          options: [
            "A. 3 925 €, si le moteur l'affiche encore",
            "B. 4 005 € (URSSAF, arrêté du 22 décembre 2025)",
            "C. 1 823,03 €",
            "D. Le junior le choisit entre 3 864 et 4 005 selon le net",
          ],
          correct: 1,
          explanation:
            "4 005 €. Un moteur resté sur N-1 est un écart à faire corriger par l'expert, pas une alternative acceptable. 1 823,03 € est le SMIC mensuel.",
        }),
        q({
          question: "Le 1,50 % AT/MP du cours est :",
          options: [
            "A. Le taux national 2026 à charger dans tous les dossiers",
            "B. Une hypothèse pédagogique ; en production on utilise la notification Carsat",
            "C. Un taux PAS",
            "D. Le taux AGS",
          ],
          correct: 1,
          explanation:
            "AT/MP = paramètre d'établissement notifié. AGS 2026 = 0,25 % (taux national employeur, hors ETT 0,03 %). Le PAS est individuel.",
        }),
        q({
          question: "FNAL pour Atelier Nord Paie, 28 salariés, régime général privé 2026 :",
          options: [
            "A. 0,50 %, « pour être large »",
            "B. 0,10 % plafonné, seuil < 50 (URSSAF), sous réserve du décompte d'effectif du dossier",
            "C. 0 %, la DSN s'en charge",
            "D. Le même taux que l'AT/MP",
          ],
          correct: 1,
          explanation:
            "URSSAF 2026 : 0,10 % plafonné si < 50, 0,50 % si ≥ 50. 28 < 50. « Être large » n'est pas une source. Le décompte d'effectif reste à confirmer en cas de doute de seuil.",
        }),
        q({
          question: "Quelle phrase est interdite dans un journal de paramétrage ?",
          options: [
            "A. PMSS 4 005 €, source URSSAF, test ANP-13, Marc",
            "B. Corrigé le taux parce que le net était moche",
            "C. SMIC 12,02 €, URSSAF, 01/01/2026",
            "D. AT/MP selon notification Carsat du …",
          ],
          correct: 1,
          explanation:
            "L'intuition d'un net n'est pas une source. Les trois autres lignes citent un émetteur et une date.",
        }),
        q({
          question: "La RGDU 2026, dans ce cours :",
          options: [
            "A. S'applique d'office à tous les cas, le junior l'active",
            "B. Ne s'applique que si le cas le demande ; sinon taux pleins maladie 13 % et AF 5,25 %, et on le dit",
            "C. Remplace le PMSS",
            "D. Est un bouton Silae enseigné ici",
          ],
          correct: 1,
          explanation:
            "CONTENT_SPEC : RGDU seulement si le cas le demande. Pas un bouton d'éditeur. Pas un substitut du plafond.",
        }),
        q({
          question: "Un test de paramétrage se fait :",
          options: [
            "A. Sur la clôture réelle du 24 à 19 h, « plus vrai »",
            "B. Sur des cas types (SMIC, PMSS, entrée, sortie, arrêt) en brouillon, avec attendus écrits, avant production",
            "C. Uniquement dans le simulateur LOU, qui est le moteur légal",
            "D. Jamais, le logiciel a raison",
          ],
          correct: 1,
          explanation:
            "On ne se sert pas du réel comme cobaye. Le simulateur LOU est pédagogique, pas le moteur légal. Le logiciel applique le paramètre, vrai ou faux.",
        }),
        q({
          question: "Changer le profil d'un salarié en « cadre » pour lui faire cotiser l'APEC :",
          options: [
            "A. Est un bon geste junior de qualité sociale",
            "B. Est interdit : le statut cadre est une classification, pas un levier de cotisations",
            "C. Est obligatoire dès 2 800 € brut",
            "D. Remplace la DSN",
          ],
          correct: 1,
          explanation:
            "On ne bricole pas un statut pour une ligne de cotisation. 2 800 € n'est pas un seuil légal de cadre. L'APEC suit le statut réel.",
        }),
        q({
          question: "Cette formation vous rend-elle paramétreur certifié d'un éditeur ?",
          options: [
            "A. Oui, Sage et Silae",
            "B. Oui, au titre RNCP",
            "C. Non : elle enseigne à lire, comparer, tester sous revue, et à ne pas usurper l'expert",
            "D. Oui, dès que vous avez vu un écran d'admin",
          ],
          correct: 2,
          explanation:
            "Pas de certification éditeur, pas de RNCP. La compétence junior est la frontière d'autonomie, pas l'admin du moteur.",
        }),
      ],
    }),
  ],
};
