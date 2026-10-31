import { pack, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 6,
  title: "Parties prenantes et risques",
  description:
    "Coordonner les contributeurs, tenir une communication de projet lisible, cartographier les risques et arbitrer les dépendances sans se substituer à la conformité ni au juridique.",
  lessons: [
    pack({
      title: "Coordonner les contributeurs",
      description:
        "Faire livrer marketing, réseau, IT, finance, risques, conformité et partenaires, sans confondre animation et autorité hiérarchique.",
      minutes: 6,
      objectifs:
        "À la fin de cette leçon, vous savez dresser une carte des contributeurs par livrable, distinguer responsable, contributeur, consulté et valideur, et embarquer à temps les fonctions qui ont un droit de veto. Vous savez aussi ce que le chef de projet ne valide pas seul.",
      theorie:
        "Un projet marketing et commercial n'avance pas parce que le chef de projet exécute toutes les tâches. Il avance parce que des contributeurs, qui n'ont ni le même métier, ni le même calendrier, ni le même droit de dire non, livrent chacun une part du résultat. Chez Banque Horizon — banque fictive — l'offre jeunes actifs 25-35 ans mobilise le marketing, le digital, le commercial, le réseau d'agences, l'IT, la finance, les risques, la conformité et le juridique. Un oubli suffit à bloquer la mise en marché : un parcours web sans le réseau, une campagne sans avis de conformité, un tarif sans la finance.\n\nCoordonner, c'est rendre visible qui fait quoi, pour quand, avec quelle dépendance, et qui valide. Ce n'est pas donner des ordres : le chef de projet n'est généralement pas le supérieur hiérarchique des contributeurs. Ce n'est pas non plus se substituer à la conformité, au juridique ou aux risques. Ces fonctions conservent leur veto métier, y compris vis-à-vis du régulateur. Votre rôle est de les embarquer assez tôt pour que le veto, s'il arrive, arrive avant la campagne, pas la veille du lancement.\n\nLa coordination se joue sur les livrables, pas sur l'organigramme. On ne convie pas tout le monde à toutes les réunions. On relie un livrable à un responsable unique, à des contributeurs nommés, à un valideur, et à une date liée aux autres livrables.",
      methode:
        "Procédez dans cet ordre, par écrit, dès que le cadrage est stable.\n1. Listez les livrables de mise en marché (parcours, tarif, argumentaire, formation réseau, recette IT, avis conformité, supports juridiques, plan média, run SAV).\n2. Pour chacun, nommez un responsable unique, les contributeurs, le valideur, la date, et la dépendance amont.\n3. Séparez les veto (conformité, juridique, risques, finance sur le budget) des simples avis. Un avis n'est pas une décision.\n4. Fixez un rythme court avec les contributeurs critiques, pas un comité plénier hebdomadaire.\n5. Dès qu'un contributeur glisse, reformulez l'impact sur la date, le périmètre ou le coût, puis demandez un arbitrage. Ne « poussez » pas seul contre un veto métier.\n6. Tenez à jour la carte quand quelqu'un part, quand un partenaire entre, ou quand un livrable est scindé.",
      noteText:
        "Le chef de projet anime, alerte et documente. Il n'approuve pas à la place de la conformité, du juridique ou des risques. Un lancement « validé par le CP » sans avis du titulaire n'est pas une décision professionnelle.",
      exemple:
        "Chez Banque Horizon (cas fictif), le marketing veut lancer une campagne d'acquisition six semaines avant que l'IT livre le parcours de souscription simplifié. Le réseau n'a pas été associé : les conseillers continueraient de vendre l'ancienne offre. La coordination correcte consiste à figer trois livrables liés — parcours lot 1, argumentaire réseau, campagne — avec un responsable chacun, une date commune, et un avis conformité sur les messages avant réservation média. Sans cette carte, chacun avance dans son silo et le lancement devient un assemblage de last minute.",
      erreurs:
        "Confondre coordination et autorité hiérarchique, et « affecter » des tâches à des gens qui ne vous reportent pas, sans accord de leur manager. Inviter tout le monde à chaque point, ce qui vide les réunions. Consulter la conformité après les créas. Oublier le réseau, le SAV ou un partenaire de distribution. Valider soi-même un point réglementaire « pour gagner du temps ». Laisser un livrable sans responsable unique (« c'est l'équipe digitale »).",
      particuliers:
        "En assurance, un réseau de courtiers n'est pas un réseau d'agences salariées : le courtier est un partenaire, pas un exécutant. Vous coordonnez par contrat, formation et outils, pas par note de service. En distribution (corner en grande surface, partenariat enseigne), le calendrier du distributeur — catalogue, tête de gondole, formation des vendeurs — devient un contributeur critique. Un chef de projet junior qui traite le distributeur comme un « canal marketing » découvre trop tard que le listing a une date de gel. En mode prestataire, vous coordonnez aussi le client : un interlocuteur marketing unique n'engage pas la DSI ni la conformité du client.",
      exercice:
        "Pour l'offre jeunes actifs de Banque Horizon, vous devez livrer en parallèle : parcours web de souscription, grille tarifaire, argumentaire conseiller, formation des 80 agences, avis conformité des messages, campagne d'acquisition. Pour chaque livrable, indiquez responsable, contributeurs, valideur, et une dépendance. Qui n'est pas le valideur ?",
      correction:
        "Parcours web : responsable IT/digital, contributeurs marketing et réseau (recette métier), valideur métier + sécurité selon politique interne. Grille tarifaire : responsable finance/pricing, contributeurs marketing, valideur finance (et parfois risques). Argumentaire : responsable marketing, contributeurs commercial et conformité, valideur conformité/juridique sur les mentions, pas le chef de projet. Formation agences : responsable direction du réseau, contributeurs marketing et formation, valideur réseau. Avis messages : responsable conformité, contributeur marketing, le CP organise le jalon mais ne signe pas l'avis. Campagne : responsable marketing, contributeurs agence média et digital, valideur marketing sous réserve de l'avis conformité déjà obtenu. Le chef de projet n'est le valideur d'aucun de ces six livrables, sauf si la gouvernance l'a nommé responsable d'un livrable d'exécution (planning, reporting). Il tient la carte et les dates.",
    }),
    pack({
      title: "Communication de projet",
      description:
        "Tenir une communication interne claire : qui informe qui, à quel rythme, et comment figer une décision dans un compte rendu.",
      minutes: 6,
      objectifs:
        "Vous savez concevoir un plan de communication projet simple (destinataires, rythme, canal, niveau de détail) et rédiger un compte rendu professionnel : décisions, actions nominatives, points ouverts, diffusion limitée.",
      theorie:
        "La communication de projet n'est pas un journal d'équipe ni une collection d'e-mails. C'est un dispositif qui permet à chaque contributeur de savoir où en est le projet, ce qui a été décidé, ce qui lui est demandé, et ce qui reste ouvert. Sans cela, chacun reconstruit sa propre version : le sponsor croit que l'on lance à la date, l'IT croit que le périmètre a bougé, le réseau n'a rien vu venir.\n\nTrois niveaux se mélangent trop souvent. L'information descendante (où l'on en est, prochain jalon) n'est pas la décision (qui a tranché quoi). La décision n'est pas l'action (qui fait quoi, pour quelle date). Un message « on avance bien, merci à tous » ne contient ni l'un ni l'autre. Le chef de projet vise la justesse : assez de faits pour décider, assez court pour être lu, assez nominatif pour engager.\n\nLe compte rendu de réunion est un acte de gouvernance, pas une politesse. Il fige les décisions, les actions, les absents, les points hors périmètre. Un silence de 48 heures après diffusion peut valoir accord, si la gouvernance l'a dit ; sinon, vous demandez une validation explicite sur les décisions sensibles. Les sujets de conformité, de juridique et de risques ne sont actés que si le titulaire était présent ou a donné un avis écrit.\n\nLa communication externe n'est pas le même canal. Un projet interne mal tenu produit souvent une promesse publique trop tôt.",
      methode:
        "Construisez un plan en une page, puis tenez-le.\n1. Destinataires : sponsor, comité, contributeurs, réseau, partenaires — pas une liste unique.\n2. Rythme : flash hebdo factuel (cinq lignes), comité selon gouvernance, CR après chaque réunion de décision.\n3. Canal : l'outil du projet pour le suivi, l'e-mail pour les décisions qui doivent laisser une trace, la réunion pour l'arbitrage. Évitez le chat comme seul lieu de décision.\n4. Niveau de détail : le sponsor veut écarts et décisions ; le contributeur veut ses actions ; le réseau veut la date à laquelle il devra vendre.\n5. Rédigez le CR dans les 24 heures, avec décisions numérotées, actions à responsable unique, parking des hors-sujets.\n6. Diffusez en liste nominative. Un CR « à toute la banque » n'est plus un document de projet.",
      noteText:
        "Un compte rendu n'est pas le procès-verbal d'une instance réglementaire. Il documente le projet. Les avis conformité et juridiques restent des livrables signés par leurs auteurs, annexés ou référencés, jamais « résumés de mémoire » par le chef de projet.",
      exemple:
        "Point d'avancement Banque Horizon, mardi 10 h. Sans méthode, le CR dit : « Échanges riches sur le parcours. L'IT va voir. Le marketing réfléchit au ton. » Une semaine plus tard, personne n'est engagé. Avec méthode, le CR porte : décision D1 — le lot 1 se limite à la souscription web, l'application mobile passe au lot 2 (sponsor, 12/03) ; action A1 — marketing livre les maquettes mentions légales à la conformité pour le 18/03, responsable Léa Martin ; point ouvert — le partenaire fintech n'a pas confirmé l'API. La réunion a duré 40 minutes. Le projet, lui, a avancé.",
      extra: [
        code(`COMPTE RENDU DE RÉUNION PROJET
Confidentiel interne — diffusion limitée aux destinataires nommés

Projet : ........................................  Réf. : ....................
Réunion n° : ....   Date : ../../....   Lieu / visio : .......................
Durée prévue : ....     Durée réelle : ....
Animateur : .....................   Rédacteur du CR : .....................
Prochaine réunion : ../../.... à ....

Participants
Nom                 Entité / rôle              Présent  Excusé  Pouvoir
.................   .......................    [ ]      [ ]     ..........
.................   .......................    [ ]      [ ]     ..........

Ordre du jour (validé en ouverture)
1.
2.
3.

Décisions (formulation ferme : qui, quoi, dès quand)
D1. ......................................................................
    Responsable : ...............   Échéance : ../../....   Statut : décidé
D2. ......................................................................
    Responsable : ...............   Échéance : ../../....   Statut : décidé

Actions (un responsable nommé — jamais « l'équipe »)
N°   Libellé                               Resp.        Échéance    Dépend de
A1   ...................................   ..........   ../../..    ........
A2   ...................................   ..........   ../../..    ........

Points ouverts / risques signalés
- Description | Impact pressenti | Propriétaire | Date de revue

Parking (hors périmètre, à ne pas traiter dans ce projet)
-

Pièces / liens
-

Diffusion nominative : ........................................................
Délai de remarque sur le CR : 48 h. Silence = accord, sauf décision de
conformité, juridique ou risques : alors avis écrit du titulaire obligatoire.

Rappel : le chef de projet rédige et diffuse. Il n'acte pas un avis
réglementaire à la place du titulaire absent.`),
      ],
      erreurs:
        "Rédiger le CR trois semaines plus tard. Attribuer les actions à « l'équipe », « l'IT » ou « le marketing ». Transformer le CR en roman de débat. Omettre les absents, donc laisser croire qu'une décision de conformité a été prise sans la conformité. Mettre le sponsor en copie de chaque micro-échange. Annoncer une date de lancement au réseau avant que le comité l'ait tranchée. Utiliser le chat comme archive unique des arbitrages.",
      particuliers:
        "Comité formel (COMEX, comité offre) : le secrétariat et le format peuvent être imposés par la gouvernance. Vous préparez l'annexe, vous n'imposez pas votre modèle. Projet avec partenaire distributeur : deux CR, deux listes de diffusion, deux niveaux de confidentialité — le partenaire ne reçoit pas vos débats de marge. Crise (fuite presse, incident de parcours) : la communication projet cède le pas au dispositif de crise de l'entreprise ; vous alimentez les faits, vous ne devenez pas porte-parole.",
      exercice:
        "Après un point de 35 minutes sur l'offre jeunes actifs, vous avez entendu : l'IT « pense » livrer le 22, le marketing « aimerait » réserver les espaces média la semaine suivante, la conformité n'était pas là, un directeur d'agence a demandé une option de découvert. Rédigez le squelette du CR : une décision possible, une action, un point ouvert, un item de parking. Que ne décidez-vous pas ?",
      correction:
        "Décision possible uniquement si le sponsor ou le titulaire concerné a tranché : par exemple D1 « ne pas réserver les espaces média avant avis conformité écrit et date IT confirmée » — sinon ce n'est pas une décision, c'est un point ouvert. Action A1 : IT confirme par écrit date de recette métier du parcours lot 1, responsable nommé, échéance sous 48 h. Point ouvert : absence de la conformité, aucun avis sur les messages. Parking : option de découvert, hors périmètre de l'offre jeunes actifs telle que cadrée. Vous ne décidez pas d'un argumentaire, d'un avis réglementaire, ni d'une date de campagne. Vous documentez l'absence et vous programmez le jalon avec le titulaire.",
    }),
    pack({
      title: "Cartographier et traiter les risques",
      description:
        "Tenir une matrice probabilité × impact, nommer un propriétaire, choisir une réponse, et escalader sans valider seul la conformité.",
      minutes: 8,
      objectifs:
        "Vous savez distinguer aléa, problème et risque, remplir une matrice probabilité × impact, choisir une réponse (éviter, réduire, transférer, accepter) et alerter au bon niveau. Vous savez pourquoi le chef de projet ne clôt pas seul un risque de conformité.",
      theorie:
        "Un risque est un événement incertain qui, s'il survient, écarte le projet de ses objectifs de délai, de coût, de périmètre, de qualité ou de conformité. Ce n'est pas un problème déjà réalisé : le problème se gère, le risque se surveille et se traite avant. Ce n'est pas non plus un aléa vague (« le marché est difficile ») : un risque s'écrit avec une cause, un événement, un impact, un propriétaire, et une date de revue.\n\nLa matrice probabilité × impact sert à prioriser, pas à prédire l'avenir. Une échelle simple (1 à 4) suffit à un chef de projet marketing : l'enjeu est de comparer les risques entre eux et de savoir lesquels montent au comité. Un score élevé n'autorise personne à « valider le risque » à la place du titulaire métier. En banque et en assurance, un risque de non-conformité, de devoir de conseil, de publicité trompeuse ou d'entrée en relation mal cadrée n'est pas un risque que le chef de projet accepte dans son coin. Il le cartographie, il alerte, il demande l'avis. L'appétit au risque appartient à l'entreprise, pas au planning.\n\nQuatre réponses classiques : éviter (changer de périmètre), réduire (plan d'actions), transférer (assurance, partenaire, clause), accepter (en connaissance de cause, par le bon décideur). « On verra » n'est pas une réponse. Les scores et exemples de cette leçon sont pédagogiques et fictifs : ils n'engagent aucune institution réelle.",
      methode:
        "Tenez un registre court, revu à chaque point d'avancement.\n1. Formulez : si [cause], alors [événement], ce qui [impact sur date / coût / offre / client / conformité].\n2. Notez la probabilité et l'impact (1 à 4), calculez le score, indiquez le propriétaire — une personne, pas une direction abstraite.\n3. Choisissez une réponse et une action datée. Un risque sans action est un affichage.\n4. Fixez un seuil d'escalade (exemple pédagogique : score ≥ 9 au comité, ≥ 12 au sponsor sous 48 h).\n5. Séparez clairement les risques projet (délai IT, partenaire, budget) des risques de conformité et juridiques : même matrice, décideurs différents.\n6. Quand le risque se réalise, il sort de la matrice et entre dans le suivi des problèmes. Vous ne continuez pas à le « surveiller » comme s'il était encore hypothétique.",
      noteText:
        "Le chef de projet ne valide pas seul la conformité, un avis ACPR interne, un argumentaire réglementé ni un écart au devoir de conseil. Il peut proposer un scénario. Le titulaire signe. Sans avis écrit, vous n'écrivez pas « risque accepté » dans le CR.",
      exemple:
        "Banque Horizon (fictif) identifie le risque suivant : si l'IT livre le parcours de souscription avec trois semaines de retard, alors la campagne d'acquisition partira vers un parcours ancien, ce qui fera monter le CAC et les réclamations. Probabilité 3, impact 4, score 12. Propriétaire : responsable IT du lot, avec le CP pour l'arbitrage de périmètre. Réponse : réduire, en scindant un lot 1 web. Ce n'est pas au CP d'accepter, en parallèle, un risque de mentions publicitaires incomplètes : ce second risque va à la conformité, même si son score est plus bas. Mélanger les deux dans une seule « acceptation projet » est une faute de rôle.",
      extra: [
        code(`MATRICE DES RISQUES — Banque Horizon, offre jeunes actifs 25-35 ans
Cas fictif, scores pédagogiques. Échelle P et I : 1 (faible) à 4 (très élevé).
Score = Probabilité × Impact.
Seuil d'escalade pédagogique : score ≥ 9 → comité ; ≥ 12 → sponsor sous 48 h.
Le chef de projet tient la matrice. Il n'approuve pas seul un risque de
conformité, juridique ou d'appétit au risque.

ID  Risque (formulation courte)                 P  I  Sc  Propriétaire     Réponse
R1  Retard IT du parcours de souscription       3  4  12  IT + CP          Réduire : lot 1 web, lot 2 app
R2  Avis conformité défavorable sur messages    3  4  12  Conformité       Réduire : revue dès le brief créa
R3  Refus partiel du réseau d'agences           2  4   8  Dir. réseau      Transférer : sponsors régionaux
R4  Dépassement du budget d'acquisition         3  3   9  Marketing        Réduire : plafonner le CAC
R5  Partenaire fintech / API en retard          2  3   6  Partenariats     Accepter avec plan B sans partenaire
R6  Mentions / preuve d'information incomplètes 2  4   8  Juridique        Réduire : checklist dès maquettes
R7  Fuite du positionnement avant lancement     2  2   4  Communication    Réduire : embargo interne
R8  Sponsor accélère la date sans moyens        3  3   9  Sponsor + CP     Escalader : arbitrage scope vs date
R9  Charge SAV sous-dimensionnée à J+30         2  3   6  Ops / réseau     Réduire : file d'attente + script
R10 Distributeur (corner enseigne) gèle trop tôt 2  3  6  Partenariats     Éviter : date de gel dans le contrat

Revue : chaque point d'avancement. R2 et R6 : pas de « accepté par le CP ».
R5 : accepter n'est légitime que si le plan B est réel et connu du sponsor.`),
      ],
      erreurs:
        "Tenir une liste d'inquiétudes sans propriétaire ni score. Mettre 20 risques au même niveau, donc n'en traiter aucun. Accepter un risque de conformité « pour tenir la date ». Confondre le risque (incertain) et le problème (déjà là). Oublier les risques de distribution : réseau qui ne s'approprie pas, courtier qui ne référence pas, enseigne qui décale. Croire que la matrice remplace le jugement : un score 6 de non-conformité n'est pas « moins urgent » qu'un score 9 de budget média.",
      particuliers:
        "Assurance : le devoir de conseil et l'information précontractuelle créent des risques spécifiques. Un parcours « en trois clics » peut être un risque de conformité élevé même si le marketing l'adore. Distribution : le refus d'un réseau n'est pas un risque IT, c'est un risque d'adoption ; on le traite par sponsor régional, formation et outil, pas par un mail de lancement. Projet multi-entités d'un groupe : chaque entité peut avoir son appétit au risque ; le CP ne fusionne pas les avis. Risque déjà réalisé (l'IT a officiellement décalé) : sortez-le de la matrice, ouvrez un arbitrage de scénarios.",
      exercice:
        "Trois lignes vous sont proposées. Dites pour chacune si c'est un risque, un problème, ou un hors-sujet, puis proposez propriétaire et réponse.\nA. « La conformité n'a pas encore rendu son avis sur l'argument de « compte opérationnel en 8 minutes ». »\nB. « L'IT a confirmé ce matin un retard de trois semaines. »\nC. « Les néobanques sont agressives. »",
      correction:
        "A. Risque (l'avis n'est pas encore là) : événement = avis défavorable ou demandant une reprise majeure ; impact = reprise créa, délai campagne, voire no-go. Propriétaire : conformité, avec le CP pour le jalon. Réponse : réduire, en obtenant une revue intermédiaire maintenant, pas « on attend la fin ». Le CP n'accepte pas ce risque à la place de la conformité.\nB. Problème, plus un risque : l'événement est réalisé. On ouvre des scénarios (lot 1, report, campagne différée) et on alerte le sponsor. La matrice peut garder un risque résiduel (nouveau dérapage) mais le retard actuel se gère comme un écart.\nC. Hors-sujet en l'état : trop vague. On le reformule ou on l'abandonne. Exemple utile : « Si le concurrent fictif NeoPay lance une offre 25-35 à 0 € de tenue de compte avant nous, alors notre acquisition digitale voit son CAC augmenter de X, ce qui pèse sur le business case. » Alors seulement : propriétaire marketing, réponse à chiffrer.",
    }),
    pack({
      title: "Dépendances et arbitrages",
      description:
        "Traiter les dépendances typiques (IT, conformité, partenaire, budget, sponsor, feature, réseau) par des scénarios, pas par l'optimisme.",
      minutes: 5,
      objectifs:
        "Vous savez nommer une dépendance, mesurer son impact sur la date, le périmètre et le coût, construire deux ou trois scénarios comparables, et rédiger une alerte sponsor qui demande une décision, pas une compassion.",
      theorie:
        "Une dépendance est un livrable ou une décision dont votre projet a besoin et que vous ne maîtrisez pas seul : un lot IT, un avis de conformité, un partenaire, un gel budgétaire, un accord du réseau. Tant que la dépendance n'est pas datée et appropriée, votre planning est un souhait. Le chef de projet ne « motive » pas l'IT pour qu'elle aille plus vite : il rend visible l'écart, les options, et le décideur.\n\nLes arbitrages reviennent presque toujours à trois leviers : la date, le périmètre, les moyens. On ne tient pas les trois quand une dépendance majeure glisse. Accélérer sans retirer de contenu ni ajouter de moyens, c'est transférer le risque sur la qualité, le réseau ou la conformité. Ajouter une fonctionnalité « petite » en fin de course, c'est souvent recréer une dépendance IT et une revue de conformité.\n\nLes situations types se répètent. Retard IT. Demande de conformité qui change le parcours. Partenaire en défaut. Dépassement de budget. Sponsor qui accélère. Feature hors lot demandée tard. Réseau qui refuse de vendre. Chacune se traite par scénarios écrits, pas par une réunion d'humeur. Le CP recommande. Le sponsor, ou le titulaire du veto, décide. En banque comme en assurance, un scénario qui « saute » la conformité n'est pas un scénario : c'est un risque que vous n'avez pas le mandat d'accepter.",
      methode:
        "Dès qu'une dépendance glisse ou qu'une demande nouvelle apparaît :\n1. Figez le fait (qui a dit quoi, quelle date, quel écart) par écrit.\n2. Qualifiez l'impact : délai, périmètre, coût, qualité perçue, conformité, adoption réseau.\n3. Proposez deux ou trois scénarios comparables (tenir la date / tenir le contenu / compromis), chacun avec effets et conditions.\n4. Écartez explicitement le scénario illégitime (lancer sans avis, promettre au réseau un produit non prêt).\n5. Recommandez un scénario, avec la date à laquelle la décision doit tomber, faute de quoi le scénario par défaut s'applique.\n6. Alertez le sponsor sur le canal prévu par la gouvernance, en une page : fait, impact, options, recommandation, décision demandée.",
      exemple:
        "Un assureur fictif, Clairière Assurances, dépend d'un partenaire comparateur pour 40 % des souscriptions auto. Le partenaire annonce un gel de son catalogue pendant six semaines. Trois scénarios : A — reporter le lancement produit ; B — lancer sur le réseau d'agences seulement, sans le comparateur ; C — lancer aussi en ligne en propre, avec un budget d'acquisition de substitution. Le CP ne « pousse » pas le partenaire. Il chiffre B et C, alerte le sponsor, et prévient le réseau pour ne pas promettre le canal comparateur. La dépendance est traitée. L'optimisme (« ils vont se dégeler ») ne l'est pas.",
      erreurs:
        "Cacher un retard IT jusqu'à la semaine du lancement. Présenter un seul scénario (« il faut reporter ») sans alternative. Ajouter la feature du sponsor sans recalculer conformité et IT. Négocier un avis de conformité « en off ». Promettre au réseau une date que le comité n'a pas tranchée. Traiter le refus du réseau comme de la résistance au changement sans écouter l'objection métier (outil, commission, temps de souscription). Demander au sponsor d'accélérer sans dire ce que l'on retire.",
      particuliers:
        "Sponsor qui accélère : vous reformulez « date avancée = tel périmètre retiré ou tels moyens ajoutés ». Feature tardive : parking, sauf si le sponsor retire autre chose et que la conformité a le temps. Budget dépassé : repli sur les leviers d'acquisition les plus mesurables, pas une coupe aveugle de la formation réseau. Refus du réseau : diagnostic (outil, offre, incentive, calendrier commercial) avant l'injonction. Conformité : si l'avis exige une reprise majeure, le scénario « on lance le visuel actuel » n'existe pas. Multi-partenaires de distribution : une défaillance n'est un plan B que si le plan B a été préparé.",
      exercice:
        "Banque Horizon vise le lancement de l'offre jeunes actifs dans 6 semaines : campagne d'acquisition, formation des agences, parcours de souscription simplifié. L'IT confirme un retard de +3 semaines sur le parcours. La conformité demande une modification majeure : retirer l'argument « compte opérationnel en 8 minutes » et allonger le parcours d'entrée en relation (justificatifs, mentions, parcours trop compressé). On vous demande les risques, les impacts, les scénarios, une recommandation, et une alerte sponsor. Traitez le cas par écrit.",
      correction:
        "Faits. Date visée : J+6 semaines. Écart IT : +3 semaines sur le parcours cible. Conformité : reprise majeure du message et du parcours — ce n'est pas une retouche de copy. Ces deux faits sont liés : même si l'IT tenait la date, le parcours actuel n'est pas lançable tel quel.\n\nRisques. R-IT : lancer la campagne vers l'ancien parcours (CAC, réclamations, promesse non tenue). R-conformité : lancer un argumentaire non conforme (risque que le CP n'a pas le mandat d'accepter). R-réseau : former les agences sur un parcours qui va encore changer. R-sponsor : tenir une date publique devenue intenable. R-budget : médias réservés perdus ou mal ciblés.\n\nImpacts. Date : +3 semaines au mieux sur le parcours cible, davantage si la reprise conformité n'est pas spécifiée tout de suite. Périmètre : l'argument « 8 minutes » sort ; le lot 1 ne peut plus être « tout digital ultra-court ». Coût : créas, média, formation à reprendre. Qualité : un lancement à date avec l'ancien parcours casse la promesse jeunes actifs.\n\nScénarios comparables.\nS1 — Tenir la date des 6 semaines, campagne + réseau, ancien parcours, argumentaire non repris. Écarté : ignore l'avis de conformité et la dépendance IT. Ce n'est pas une option professionnelle.\nS2 — Reporter l'ensemble (campagne, réseau, promesse) de 3 semaines, le temps du parcours IT et de la reprise conformité. Cohérent, coût média et fenêtre concurrentielle à chiffrer.\nS3 — Soft launch à 6 semaines sans campagne de masse : agences pilotes, messages conformes, ancien parcours assumé, sans l'argument des 8 minutes ; campagne nationale calée sur la recette du nouveau parcours.\nS4 — Tenir une campagne digitale à 6 semaines sur un lot 1 réduit déjà recetté (si un sous-parcours conforme existe), et décaler le reste. Seulement si l'IT et la conformité confirment par écrit qu'un lot 1 existe. Sinon S4 n'est pas réel.\n\nRecommandation pédagogique. S3 par défaut, ou S2 si le sponsor a déjà annoncé publiquement une promesse que le soft launch contredirait. S4 si et seulement si un lot 1 conforme est démontré. Recommandation à confirmer avec IT (date de recette), conformité (cahier des reprises sous 5 jours) et réseau (capacité à former deux fois).\n\nAlerte sponsor (structure). Objet : décision sous 5 jours — date vs contenu, offre jeunes actifs. Fait : IT +3 semaines ; conformité exige une reprise majeure du parcours et interdit l'argument 8 minutes. Impact : lancement J+6 tel que conçu n'est plus tenable sans casser la promesse ou la conformité. Options : S2 report global ; S3 soft launch puis campagne ; S4 lot 1 si preuve écrite. Recommandation : S3, campagne nationale calée sur recette. Décision demandée : choisir S2 ou S3 avant vendredi, geler les réservations média non conformes, mandater la conformité pour le cahier de reprise. Vous ne demandez pas au sponsor d'« accepter le risque conformité ».",
    }),
    quizLesson({
      title: "Quiz — Parties prenantes et risques",
      description: "Cinq questions de raisonnement sur la coordination, la communication, les risques et les arbitrages.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "Sur l'offre jeunes actifs, qui valide l'argumentaire réglementé (mentions, promesse, preuve) ?",
          options: [
            "A. Le chef de projet, puisqu'il est responsable de la mise en marché",
            "B. Le titulaire conformité / juridique selon le dispositif interne, le chef de projet organisant le jalon",
            "C. Le sponsor, qui « assume le risque » en réunion de projet",
            "D. L'agence de publicité, qui connaît les codes du public 25-35 ans",
          ],
          correct: 1,
          explanation:
            "Le chef de projet coordonne et alerte. Il n'est pas le valideur réglementaire. Le sponsor n'efface pas un avis de conformité par une phrase en comité. L'agence exécute un brief, elle ne signe pas l'avis interne.",
        }),
        q({
          question:
            "Dans un compte rendu de projet, quelle formulation est professionnelle ?",
          options: [
            "A. « L'équipe IT va regarder le sujet rapidement. »",
            "B. « A3 — Karim Benali (IT) confirme par écrit la date de recette métier du lot 1, échéance 18/03, dépendance : maquettes marketing livrées le 14/03. »",
            "C. « Débat riche et constructif sur le parcours, suite au prochain point. »",
            "D. « Décision : on lance, la conformité rattrapera les mentions après la campagne. »",
          ],
          correct: 1,
          explanation:
            "Une action a un responsable nommé, une date et une dépendance. « L'équipe » n'engage personne. Un roman de débat n'est pas un CR. Reporter la conformité après la campagne n'est pas une décision que le CP peut acter.",
        }),
        q({
          question:
            "Un risque de non-conformité a un score 8, un risque de dépassement média un score 9. Que faites-vous ?",
          options: [
            "A. Vous traitez uniquement le 9, la matrice a parlé",
            "B. Vous acceptez le 8 vous-même pour tenir la date, et vous montez le 9 au comité",
            "C. Vous conservez les deux, vous escaladez le média selon le seuil, et vous soumettez le risque de conformité au titulaire, quel que soit le score",
            "D. Vous fusionnez les deux lignes pour simplifier le registre",
          ],
          correct: 2,
          explanation:
            "La matrice priorise, elle ne change pas les rôles. Un risque de conformité n'est pas « moins urgent » parce que son score est inférieur. Le CP ne l'accepte pas seul. Fusionner les lignes brouille le propriétaire.",
        }),
        q({
          question:
            "L'IT annonce +3 semaines et la conformité veut une reprise majeure du parcours, 6 semaines avant la date visée. Quelle option n'est pas un scénario recevable ?",
          options: [
            "A. Reporter campagne et promesse le temps du parcours et de la reprise",
            "B. Soft launch réseau sans campagne de masse, messages conformes, campagne nationale plus tard",
            "C. Lancer à date avec l'argument actuel, « on corrigera si la conformité insiste »",
            "D. Lot 1 réduit, seulement s'il existe une recette et un avis écrits",
          ],
          correct: 2,
          explanation:
            "Un scénario qui ignore un avis de conformité n'est pas une option, c'est un risque hors mandat du chef de projet. Les autres scénarios arbitrent date, périmètre et moyens, ce qui est le cœur du métier.",
        }),
        q({
          question:
            "Un directeur de réseau refuse de former ses agences tant que le temps de souscription dépasse 25 minutes. Quelle lecture est la plus juste ?",
          options: [
            "A. C'est de la résistance au changement : il faut un mail du sponsor",
            "B. C'est une dépendance d'adoption : vous diagnostiquez l'objection (outil, offre, temps, incentive), vous en faites un risque ou un arbitrage, vous ne promettez pas la date au réseau tant que ce n'est pas tranché",
            "C. C'est un veto de conformité : le projet s'arrête",
            "D. C'est hors projet marketing : le réseau se débrouillera à J0",
          ],
          correct: 1,
          explanation:
            "Le refus du réseau est une dépendance classique de mise en marché. On la traite par le diagnostic et l'arbitrage, pas par l'injonction ni par le déni. Ce n'est pas, en soi, un avis de conformité.",
        }),
      ],
    }),
  ],
};
