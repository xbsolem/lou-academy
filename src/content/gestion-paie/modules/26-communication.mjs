import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 26,
  title: "Communiquer en paie : salariés, managers, comptabilité",
  description:
    "Expliquer un bulletin, traiter une question ou une réclamation, annoncer une correction, parler au manager et à la comptabilité, tenir urgence, confidentialité et conflit.",
  lessons: [
    pack({
      title: "Expliquer un bulletin à un salarié",
      description:
        "Traduire brut, cotisations, net, PAS et montant net social sans jargon ni approximation.",
      minutes: 24,
      objectifs:
        "Vous savez structurer une explication de bulletin, nommer les grandes zones, distinguer ce que vous affirmez (paramètre sourcé) de ce que vous n’inventez pas (taux PAS « pourquoi le mien »), et rester factuel.",
      theorie:
        "Un salarié n’a pas à connaître le BOSS. Il a droit à un bulletin lisible (mentions R. 3243-1, remise L. 3243-1) et à une explication de ce qui le concerne. Expliquer n’est pas justifier l’injustifiable, ni transformer la permanence paie en conseil fiscal personnalisé. Vous montrez le bulletin, vous suivez un ordre : identité et période ; brut (salaire, primes, HS, avantages) ; cotisations salariales (maladie 0 % en régime général domicile France en 2026, vieillesse, retraite complémentaire, CSG/CRDS) ; net à payer avant PAS ; PAS ; net versé ; montant net social ; mentions employeur utiles (cumuls, CP). Vous donnez la période (janvier 2026 métropole régime général si c’est le cas) et vous ne récitez pas un taux d’une autre année.\n\nLe montant net social n’est pas le net versé. C’est le revenu net après prélèvements sociaux obligatoires, affiché selon le cadre BOSS (modèle provisoire prolongé jusqu’au 31/12/2026). Vous ne l’inventez pas « en enlevant encore la mutuelle patronale » par avance d’une réforme 2027. Le PAS s’applique sur le net imposable, avec un taux transmis par flux : vous expliquez le mécanisme, vous n’expliquez pas le taux choisi par l’administration fiscale pour cette personne, et vous ne le comparez jamais à celui d’un collègue.\n\nLes cotisations patronales se voient souvent sur le bulletin : elles n’augmentent pas le net. Un salarié qui dit « pourquoi l’entreprise paie autant et moi si peu » a besoin d’une distinction salaire brut / coût employeur / net, pas d’un débat politique. AT/MP, mutuelle, versement mobilité : si vous citez un montant, vous le qualifiez d’hypothèse de dossier ou de paramètre d’entreprise, jamais de taux national.\n\nLa posture : vouvoiement, calme, bulletin sous les yeux, pas de formule « c’est le logiciel ». Si vous ne savez pas, vous le dites et vous revenez. Une explication fausse pour clore l’appel crée une réclamation écrite plus tard.",
      methode:
        "1. Ouvrir le bulletin de la période, pas un souvenir.\n2. Confirmer l’identité (sans réciter le NIR à voix haute en open space).\n3. Demander la ligne qui pose question.\n4. Expliquer du brut vers le net, une zone à la fois.\n5. Sourcer : « maladie salariale 0 % sur barème URSSAF privé 01/01/2026 » ; « PMSS 4 005 €, arrêté du 22 décembre 2025 ».\n6. Séparer : règle nationale / CCN à lire / paramètre entreprise / hypothèse.\n7. Proposer un écrit court si l’échange est dense.\n8. Tracer : date, question, réponse, suite.",
      noteText:
        "Limite : vous n’interprétez pas un taux PAS, vous ne conseillez pas une modulation fiscale, vous ne divulguez pas le bulletin d’un tiers, vous n’inventez pas une clause CCN pour « rassurer ». Espace calme, pas de haut-parleur.",
      exemple:
        "PME 40 salariés. Un salarié appelle : « On m’a enlevé 200 €. » Le brut est identique. La différence vient d’un PAS passé de 0 % (nouveau taux à l’embauche) à un taux personnalisé reçu en DSN, et d’une mutuelle (hypothèse de contrat 20 € salarial) devenue due au 1er du mois suivant l’adhésion. Sans bulletin, on aurait « corrigé » le brut. Avec bulletin, on explique deux lignes distinctes.",
      extra: [
        code(`DIALOGUE 1 — Expliquer un bulletin (salarié)
Contexte : janvier 2026, CDI 35 h, brut 2 400,00 €, métropole, régime général.
Hypothèses de dossier (pas des taux nationaux) : mutuelle salariale 20,00 € ; AT/MP non discuté ici.
Canal : appel, casque, bulletin ouvert.

Salarié : Bonjour, je ne comprends pas mon net. On m'avait parlé de 2 400.

Gestionnaire : Bonjour. Les 2 400 € sont le brut du contrat, avant cotisations et impôt. Je vous
suis le bulletin de janvier 2026, ligne à ligne. D'abord le brut : 2 400,00 €, sans prime ni
heure supplémentaire ce mois-ci. Ensuite les cotisations salariales du régime général. La
maladie salariale est à 0 % si vous êtes affilié et domicilié fiscalement en France
(barème URSSAF privé au 01/01/2026). La vieillesse salariale comporte une part plafonnée
6,90 % et une part déplafonnée 0,40 %. La retraite complémentaire Agirc-Arrco s'applique
selon les tranches ; le plafond mensuel de sécurité sociale est 4 005 € (arrêté du
22 décembre 2025). CSG et CRDS portent sur une assiette abattue (98,25 % dans la limite
de 4 PASS). Ces lignes diminuent le net ; elles ne sont pas une « erreur de 2 400 ».

Salarié : Et le montant net social, c'est ce que je reçois ?

Gestionnaire : Non. Le net à payer avant impôt, puis le prélèvement à la source, donnent
le net versé sur votre compte. Le montant net social est une mention distincte, prévue
par le BOSS : revenu après prélèvements sociaux obligatoires, utile notamment pour
certaines prestations. Ce n'est ni le brut ni le virement. Le modèle d'affichage suit
le cadre en vigueur jusqu'au 31 décembre 2026 ; on n'anticipe pas une réforme 2027.

Salarié : Mon collègue a un meilleur taux d'impôt. Vous pouvez aligner ?

Gestionnaire : Non. Le taux est transmis par l'administration fiscale via la DSN. Je
peux vous indiquer le taux appliqué sur votre bulletin et le canal pour le vérifier
de votre côté (espace impots.gouv.fr). Je ne consulte pas le taux d'un collègue et je
ne le modifie pas à la demande. Si une ligne autre que le PAS vous paraît fausse,
nous la contrôlons sur pièces.

Salarié : Merci. Vous m'envoyez un mail récap ?

Gestionnaire : Oui, un résumé des zones du bulletin, sans copier un tiers, sur votre
adresse professionnelle prévue. Si après relecture une rubrique reste inexacte, vous
me répondez avec la ligne et le mois. Je ne corrige pas un brut pour « coller » à un
net espéré.`),
      ],
      erreurs:
        "Expliquer de mémoire. Dire « c’est l’État » pour toute ligne. Comparer deux salariés. Confondre net social et net versé. Promettre que « en février ça remontera ». Citer un taux AT comme taux national.",
      particuliers:
        "Primo-entrant : plus de pédagogie, moins de jargon. Cadre au forfait : ne pas expliquer des HS qui n’existent pas. Temps partiel : montrer la base, pas un brut de 151,67 h. Homonyme : confirmer matricule avant de parler.",
      exercice:
        "Rédigez en quinze lignes l’explication orale du PAS et du montant net social pour un salarié qui les confond, période janvier 2026. N’inventez aucun taux PAS.",
      correction:
        "Le PAS est l’impôt prélevé sur le net imposable, au taux transmis pour vous. Il n’est pas une cotisation sociale. Le montant net social n’est pas l’argent versé : c’est une mention BOSS après prélèvements sociaux obligatoires, distincte du virement. En janvier 2026, on applique le cadre d’affichage en vigueur (prolongé jusqu’au 31/12/2026) ; on n’ajoute pas d’office la mutuelle patronale dans le MNS au titre d’un projet 2027. Pour le taux, le salarié vérifie son espace fiscal ; la paie n’invente pas un taux et n’aligne pas sur un collègue.",
    }),
    pack({
      title: "Répondre aux questions courantes",
      description:
        "Traiter tickets resto, CP, mutuelle, primes et écarts N-1 sans se tromper de sujet.",
      minutes: 20,
      objectifs:
        "Vous classez la question (droit, paramètre, pièce manquante, hors paie), vous répondez dans le périmètre, vous relancez la bonne personne.",
      theorie:
        "Les questions répétées ne sont pas anodines : elles révèlent soit un bulletin mal compris, soit un process (variables, mutuelle, titres-restaurant) mal expliqué, soit une vraie erreur. Le junior apprend à classer. Question de lecture (où est le net, où sont les CP) : pédagogie. Question de droit (ai-je droit à X) : on ne répond pas par un usage du précédent employeur ; on lit contrat, CCN, accord, loi. Question de paramètre annuel (SMIC, PMSS) : on source URSSAF / arrêté. Question d’entreprise (jours de RTT, tickets) : règle interne ou accord, pas un geste commercial du gestionnaire. Question fiscale personnelle : mécanisme PAS, pas un conseil de déclaration.\n\nLes titres-restaurant, avantages, primes exceptionnelles ont des règles d’attribution et d’assiette. « Je n’ai pas été là mais gardez-moi les tickets » n’est pas une instruction de paie. Les CP affichés sont des compteurs : on explique acquis / pris / solde, on ne « pose » pas un jour par téléphone. Une prime « promise par le manager » sans validation dans le circuit des variables n’existe pas encore.\n\nLe délai de réponse interne (politique d’entreprise, pas un délai légal inventé) se tient : accusé, puis réponse sourcée. Une question reçue le jour de clôture ne justifie pas de modifier un bulletin sans pièce. On planifie la régularisation le cas échéant.",
      methode:
        "Grille : (1) Quel mois ? (2) Quelle ligne ? (3) Quelle pièce ? (4) Quelle règle (loi / CCN / contrat / entreprise) ? (5) Est-ce dans mon autonomie ? (6) Réponse écrite courte + suite. Si hors paie (carrière, entretien, conflit managérial) : transfert RH, pas un avis.",
      noteText:
        "Vous n’êtes pas un standardiste du climat social. Vous répondez sur le bulletin et le dossier. Le reste s’oriente.",
      exemple:
        "ETI. Dix questions « où est ma prime de janvier ? » Le gel était le 18, la liste validée n’incluait pas ces noms. Réponse unique, factuelle, copiée responsable : prime non présente sur la liste gelée ; si validation hors délai, consigne de régularisation février, pas d’ajout clandestin le 24.",
      extra: [
        code(`DIALOGUE 2 — Question fréquente (salarié)
Salarié : Pourquoi je n'ai pas de titres-restaurant en janvier ? J'étais en congés.

Gestionnaire : Les titres-restaurant, dans votre dossier, suivent la règle d'attribution
de l'entreprise (jours travaillés / présence selon l'accord ou la politique interne).
Un jour de congé payé n'est en général pas un jour ouvrant droit, sauf règle écrite
plus favorable que je dois pouvoir citer. Je vérifie votre calendrier de janvier :
huit jours de CP. Je ne « laisse » pas les titres par sympathie. Si un accord interne
dit autre chose, montrez-le-moi ou je le demande à RH ; sinon, le bulletin est conforme
à la règle du dossier. Ce n'est pas une retenue disciplinaire.

Salarié : Le précédent employeur me les donnait quand même.

Gestionnaire : La règle de l'ancien employeur ne s'applique pas ici. Je m'appuie sur
votre contrat, l'accord ou la politique de cet employeur, et les textes. Je peux vous
transmettre le contact RH pour le fond social ; je ne crée pas un droit.`),
        code(`DIALOGUE 3 — Question CP (salarié)
Salarié : Posez-moi deux jours la semaine prochaine, mon manager est d'accord par SMS.

Gestionnaire : Un SMS n'est pas une pose dans l'outil. Les congés s'imputent après
validation selon le circuit (outil, manager, RH). Je ne saisis pas deux jours sur la
foi d'un SMS transmis à la paie. Merci de les poser dans l'outil ; dès validation
avant le gel, ils passeront. Après le gel, ce sera le mois suivant, sauf exception
validée par le responsable paie. Le légal est 2,5 jours ouvrables par mois de travail
effectif, dans la limite de 30 jours ouvrables, sauf CCN plus favorable à lire : cela
fixe l'acquisition, pas le droit de contourner l'outil.`),
      ],
      erreurs:
        "Répondre « oui » pour se débarrasser. Appliquer la règle du dossier voisin. Confondre heures supplémentaires et complémentaires. Donner un net « estimé » pour un prêt sans attestation visée.",
      particuliers:
        "Représentant du personnel : mêmes règles de bulletin, canal parfois spécifique. Salarié en arrêt : ne pas exiger sa présence physique pour une question ; rester sur pièces. Langue : français professionnel ; faire relire un écrit sensible.",
      exercice:
        "Classez et indiquez la réponse de fond : (1) « Mon SMIC horaire est-il légal ? » bulletin 11,90 €/h en janvier 2026 ; (2) « Pouvez-vous me dire le salaire de Durand ? » ; (3) « Je veux un acompte demain. »",
      correction:
        "1. Contrôle immédiat : SMIC 12,02 €/h du 01/01/2026 au 31/05/2026 (URSSAF). 11,90 est sous SMIC hors cas légaux : bloquer, alerter, ne pas répondre « c’est à peu près ça ». 2. Refus confidentialité. 3. Procédure d’acompte interne ou refus ; pas d’improvisation. Trois natures : légal sourcé, secret, politique d’entreprise.",
    }),
    pack({
      title: "Traiter une réclamation",
      description:
        "Accuser, instruire, conclure : une réclamation n’est ni un combat ni une faveur.",
      minutes: 20,
      objectifs:
        "Vous savez ouvrir un dossier de réclamation, distinguer erreur avérée, malentendu et demande hors droit, et clôturer par un écrit.",
      theorie:
        "Une réclamation est une contestation d’un élément de paie déjà produit ou d’un droit non versé. Elle se traite comme un contrôle : faits, période, pièces, règle, impact, décision. Accuser réception calme la situation plus sûrement qu’une défense immédiate. Instruire, ce n’est pas « donner raison ». Si le bulletin est exact, on explique. Si le bulletin est faux, on corrige selon la méthode de régularisation (rappel, trop-perçu), on informe, on ne cache pas. Si la demande est un avantage non prévu, on refuse poliment et on oriente vers qui peut décider d’une mesure (direction, RH), sans la promettre.\n\nLe registre des réclamations (date, salarié, objet, pièces, analyse, décision, qui a visé, date de réponse) protège l’entreprise et le gestionnaire. Sans registre, la même erreur revient, et l’on ne sait plus ce qui a été dit. Les délais internes de réponse sont une politique ; les obligations de payer le salaire dû ne se « négocient » pas pour gagner du temps. Un junior n’offre pas 100 € « pour clore » hors base.\n\nLe ton reste professionnel même si le salarié est brusque. L’insulte, la menace, le harcèlement se signalent au responsable ; on ne répond pas sur le même registre. On ne discute pas un dossier dans un open space.",
      methode:
        "1. Accusé : objet, mois, « nous instruisons ». 2. Geler toute communication informelle parallèle. 3. Recueillir pièces. 4. Recalculer / relire. 5. Qualifier : erreur / malentendu / hors droit. 6. Proposition : explication, ou correction visée, ou refus motivé. 7. Visa responsable si enjeu, répétition, ou doute. 8. Réponse écrite. 9. Régularisation dans le prochain bulletin ou selon consigne. 10. Clôturer le registre.",
      noteText:
        "Limite : un junior n’admet pas une dette de l’employeur « pour faire simple » sans recalcul, n’accepte pas une retenue punitive, ne promet pas un calendrier de rappel qu’il ne maîtrise pas.",
      exemple:
        "Services, 70 salariés. Réclamation : « mes HS de décembre n’y sont pas. » Décembre clôturé, variables du manager jamais arrivées. Qualifier : pas une erreur de calcul, une variable absente. Réponse : sans validation à la date de gel, pas de paiement en décembre ; relance manager + responsable pour janvier si les heures sont réelles et validées. On ne « remet 10 h » pour la paix.",
      extra: [
        code(`DIALOGUE 4 — Réclamation (salarié)
Salarié : C'est scandaleux, vous m'avez volé 180 €, je préviens l'inspection.

Gestionnaire : J'entends que vous contestez 180 € sur le bulletin de janvier 2026.
Je prends la réclamation. Je m'appuie sur le bulletin et les pièces, pas sur un
chiffre rond. Pouvez-vous me dire quelle ligne vous identifiez (brut, absence, PAS,
mutuelle, autre) ? Je vous confirme par écrit que le dossier est ouvert. Je ne
discute pas un « vol » : s'il y a une erreur, nous la corrigeons selon la règle ;
s'il n'y en a pas, je vous explique la ligne. Je ne vous empêche pas de saisir qui
de droit ; je traite le dossier ici avec exactitude.

Salarié : C'est le PAS, c'était 0 avant.

Gestionnaire : Un passage de 0 à un taux personnalisé change le net sans changer le
brut. Je vérifie la date d'application du taux reçu en DSN et le net imposable. Je
vous écris le constat aujourd'hui ou demain selon charge de clôture, avec les montants
du bulletin, sans modifier le taux de moi-même.`),
      ],
      erreurs:
        "Répondre sur un ton sarcastique. Corriger trop vite sans recalcul. Ignorer une réclamation jusqu’après paiement. Copier tout le CSE. Reconnaître une CCN de mémoire.",
      particuliers:
        "Réclamation collective : même méthode, une analyse, pas vingt exceptions improvisées. Ancien salarié : même exactitude, canal d’identité. Avocat : circuit responsable / juriste, pas un débat solo.",
      exercice:
        "Réclamation écrite : trop-perçu de 90 € le mois M-2, le salarié veut qu’on « oublie ». Que répondez-vous sur le principe, et que n’improvisez-vous pas comme retenue ?",
      correction:
        "Un trop-perçu n’est pas un cadeau. Information du salarié, qualification, modalité de récupération selon cadre légal et consigne responsable (échelonnement éventuel, respect du net et des règles de retenue). On n’« oublie » pas 90 € sans décision d’abandon de créance habilitée. On n’improvise pas une retenue intégrale qui mettrait un net à zéro sans vérifier le cadre. Le junior prépare le dossier, il ne négocie pas un oubli.",
    }),
    pack({
      title: "Annoncer une correction et traiter une erreur de salaire",
      description:
        "Dire l’erreur, chiffrer, corriger, sans panique ni dissimulation.",
      minutes: 22,
      objectifs:
        "Vous savez rédiger l’annonce d’une correction, distinguer trop-perçu et trop-peu, et ne pas « arrondir » un net pour masquer.",
      theorie:
        "Une erreur de salaire est un écart entre ce qui était dû et ce qui a été calculé ou versé : oubli de prime validée, mauvaise absence, mauvais taux, mauvais plafond, inversion de matricule, PAS non appliqué, double paiement. Elle se qualifie par période, par montant brut et net, par cotisations, par DSN déjà déposée ou non. Un trop-peu se rattrape par rappel (soumis selon nature, charges, éventuellement régularisation DSN). Un trop-perçu se récupère selon un cadre : information, modalités, pas une punition, pas un silence jusqu’au virement inverse surprise.\n\nAnnoncer, c’est : le fait, le mois, la cause factuelle sans se défausser uniquement sur « le logiciel », l’impact, la date de correction, ce que le salarié doit vérifier, le contact. On ne promet pas que « ça n’arrivera plus jamais » si la cause n’est pas corrigée (paramètre, process). On ne divulgue pas qu’un homonyme a reçu le virement. On informe le responsable avant le salarié si l’enjeu est large (fichier SEPA déjà parti, plusieurs dossiers).\n\nLe junior ne décide pas d’abandonner 400 €, ni de retenir 50 % du net d’un coup sans consigne. Il prépare le calcul, les écritures, le texte, et fait viser. Si la DSN du mois est déposée, la correction suit le canal de régularisation, pas un bulletin « fantôme » hors DSN.",
      methode:
        "1. Quantifier brut, cotisations, net, PAS, MNS. 2. DSN déjà partie ? paiement déjà parti ? 3. Visa responsable. 4. Message au salarié (canal habituel, pas un SMS personnel). 5. Correction sur la période prévue. 6. Comptabilité informée si journal déjà émis. 7. Cause racine dans le journal d’incidents. 8. Contrôle du mois suivant sur ce matricule.",
      noteText:
        "Dissimuler une erreur pour « ne pas retarder la clôture » est une faute professionnelle. Dire « je ne sais pas encore le net exact, je recalcule » est professionnel.",
      exemple:
        "CSP. 12 HS saisies sur le mauvais matricule. L’un a un trop-perçu, l’autre un trop-peu. On ne « laisse comme ça, ça se compense dans l’équipe ». Deux dossiers, deux messages, deux régularisations, une alerte manager sur la validation. Le SEPA n’est pas encore parti : on corrige avant paiement. S’il était parti : rappel + récupération, pas un virement inverse sauvage sur le trop-perçu sans information.",
      extra: [
        code(`DIALOGUE 5 — Annoncer une correction (salarié)
Gestionnaire : Je vous contacte au sujet du bulletin de janvier 2026. Une erreur de
saisie a fait inscrire 12 heures supplémentaires qui ne vous concernaient pas. Votre
brut a été majoré à tort. Le paiement n'est pas encore exécuté : nous corrigeons
aujourd'hui le bulletin. Vous recevrez la version corrigée par le canal habituel.
Les 12 heures seront versées à la personne concernée après validation. Je joins
l'écart : brut, cotisations, net. Ce n'est pas une sanction. Merci de relire le
nouveau bulletin ; si une autre ligne vous paraît inexacte, répondez sur ce fil.

Salarié : Je m'étais déjà organisé avec ce net.

Gestionnaire : Je comprends la gêne. Nous corrigeons avant virement, donc le compte
ne recevra pas un trop-perçu. Si le virement était déjà parti, nous vous aurions
informé des modalités de régularisation, sans prélever en silence. Je reste
disponible pour relire le bulletin corrigé avec vous.`),
        code(`DIALOGUE 6 — Erreur de salaire déjà versée (salarié)
Gestionnaire : Le virement de janvier a été exécuté. Nous avons identifié un oubli :
la prime exceptionnelle validée de 150,00 € brut n'a pas été intégrée. Il s'agit
d'un trop-peu. Nous la verserons en rappel sur février 2026, soumise à cotisations
selon sa nature, avec régularisation DSN selon le process. Vous verrez une ligne
de rappel sur le bulletin de février. Je vous écris les montants dès le calcul de
contrôle visé. Nous ne « rajoutons pas en net » hors charges.

Salarié : Mettez-moi 150 € en net, c'est plus simple.

Gestionnaire : Non. Un rappel de prime suit le régime social de la prime. Un net
forfaitaire cacherait cotisations et PAS. Je calcule le rappel correctement.`),
      ],
      erreurs:
        "Mail d’excuse flou sans chiffres. Corriger le PAS « pour compenser ». Prélever un trop-perçu sans information. Prévenir l’équipe entière. Modifier le journal comptable sans prévenir la compta.",
      particuliers:
        "Erreur sur une saisie sur salaire : impact reste à vivre, escalade immédiate. Erreur de destinataire SEPA : banque + responsable, pas un mail léger. Erreur répétée : cause paramétrage, pas « encore une saisie ».",
      exercice:
        "Trop-perçu 80 € net déjà versé, cause : jour d’absence non saisi. Rédigez le mail d’annonce (fond) et listez trois choses que le mail ne doit pas contenir.",
      correction:
        "Mail : mois, fait (absence non saisie), impact (80 € net trop versés, brut et cotisations à détailler après calcul), prochaine étape (régularisation février selon modalité visée), invitation à répondre, contact. Ne pas : accuser le salarié de fraude ; citer un collègue ; promettre « on oublie » ; menacer d’un prélèvement immédiat de tout le net ; inventer un article de délai. Le chiffrage brut/net exact se joint après calcul, pas un 80 € magique si le brut d’absence n’est pas encore repris.",
    }),
    pack({
      title: "Parler au manager : variables, délais, refus de saisie",
      description:
        "Obtenir des faits exploitables sans obéir à une instruction non conforme.",
      minutes: 20,
      objectifs:
        "Vous savez relancer, refuser une saisie hors pièce, et proposer une alternative (report, exception visée) sans agresser.",
      theorie:
        "Le manager est responsable de la qualité des variables de son équipe (HS, primes, absences, validations de CP). Il n’est pas responsable du paramétrage URSSAF, ni du taux PAS, ni de la DSN. Un junior qui cède à « mets comme je te dis » devient l’auteur de l’erreur. Un junior qui humilie le manager par mail collectif devient un obstacle opérationnel. L’équilibre : dates de gel rappelées tôt, listes nominatives des manques, conséquence dite (pas de paiement de la variable ce mois), copie du responsable paie si pression ou récidive.\n\nLes instructions illicites ou hors process (avancer un salaire, enlever une retenue légale, inventer des HS, transmettre un bulletin d’un tiers, ne pas déclarer un arrêt) se refusent avec reformulation de la règle et escalade. On propose le canal licite : acompte selon procédure, régularisation le mois suivant, validation dans l’outil. Une relance sans date, sans noms et sans conséquence n’est pas une relance : c’est un bruit que le manager ignore jusqu’au 24.\n\nLe manager n’a pas à connaître le net. Il peut connaître le temps de travail, les absences, les éléments qu’il valide. Toute demande de « fichier des salaires de l’équipe » passe par RH / habilitation. Le ton reste vouvoyé, même si le manager tutoie : la familiarité n’autorise pas une saisie hors pièce.",
      methode:
        "Relance : objet clair, date de gel, liste des dossiers manquants, conséquence, offre d’aide sur l’outil, copie responsable si J-1. Refus : remercier, citer la règle ou le process, alternative, qui peut trancher une exception. Jamais de débat d’égo.",
      noteText:
        "Un junior ne « passe l’ami » ni ne fait la leçon en réunion d’équipe. Il tient le calendrier. Les exceptions sont le responsable paie.",
      exemple:
        "Industrie. Le 23, le chef d’atelier : « mets les HS, je signe demain. » Gel le 18. Réponse : sans validation dans l’outil, pas de saisie ; exception seulement si Marc (responsable) l’autorise par écrit ; sinon février. Le 24, pas de signature : HS en février. La production n’a pas été « bloquée » : le contentieux d’heures non validées a été évité.",
      extra: [
        code(`DIALOGUE 7 — Manager (variables hors gel)
Manager : Il me faut les 8 heures de Nadia sur janvier, le client a payé, tu saisis
maintenant. On est le 24.

Gestionnaire : Je comprends l'enjeu client. Le gel des variables était le 18 janvier
à 12 h. Sans validation dans l'outil, je ne saisis pas 8 heures le 24 : cela casserait
le contrôle et la DSN. Deux voies : une exception écrite du responsable paie avant
clôture interne, ou régularisation sur février dès que les 8 heures sont validées.
Je prépare la ligne pour février. Je ne peux pas antidater ni inventer la validation.

Manager : Tu compliques tout, chez l'ancien gestionnaire ça passait.

Gestionnaire : Je tiens le process de ce dossier. Je copie le responsable paie pour
trancher l'exception. En attendant, je n'enregistre pas les heures.`),
      ],
      erreurs:
        "Relance vague (« n’oubliez pas la paie »). Refus humiliant. Saisie pour avoir la paix. Envoyer le net de l’équipe en pièce jointe. Discuter un arrêt maladie avec le manager au-delà du fait d’absence.",
      particuliers:
        "Dirigeant qui est aussi manager : même process, même gel, même refus d’illicite. Cabinet : le client-manager n’est pas votre N+1 métier ; votre responsable de mission tranche. CSP : SLA écrit, pas un arrangement bilatéral.",
      exercice:
        "Rédigez le mail de relance du 18 janvier 12 h (gel) pour un atelier sans HS, 6 noms manquants, copie responsable. Ton factuel.",
      correction:
        "Objet : Variables paie janvier 2026 — gel ce jour 12 h — HS atelier. Corps : rappeler la date, lister les 6 matricules sans HS, conséquence (pas de paiement des HS en janvier, report février sauf exception responsable), créneau d’aide outil, remerciement, copie responsable. Pas d’accusation (« encore une fois vous oubliez »), pas de menace, pas de net.",
    }),
    pack({
      title: "Parler à la comptabilité : journal, écarts, PAS, dettes sociales",
      description:
        "Fournir des fichiers justifiés et résoudre un écart de lettrage sans confondre un compte et un bulletin.",
      minutes: 20,
      objectifs:
        "Vous savez ce que la comptabilité attend (journal, PAS, 421, 43x), comment décrire un écart, et ce que la paie ne « force » pas dans un compte.",
      theorie:
        "La paie produit des charges (classe 64 pédagogique : 641 salaires, 645 cotisations patronales, etc.) et des dettes (421 personnel, 43x organismes, 4421 PAS selon plan de l’entreprise). Les numéros exacts relèvent du paramétrage interne (PCG, source legal-sources PCG-641). La comptabilité lettrage les versements URSSAF, retraite, mutuelle, PAS, salaires, avec les journaux et les avis. Un écart de 0,01 € × 200 bulletins peut casser un lettrage. Ce n’est pas « rien ».\n\nLe langage commun : période, total brut, total net, total PAS, total cotisations salariales, total patronales, organismes, régularisations. Un écart se décrit : nature (arrondi, salarié absent du journal, trop-perçu, DSN ≠ journal, compte mal paramétré), montant, hypothèse, pièce. On ne dit pas « c’est votre lettrage ». On ne dit pas « changez le 431 pour que ça passe » sans cause. Un compte d’attente n’est pas une solution définitive : il date, il s’explique, il se solde.\n\nLe PAS n’est pas une cotisation sociale : il transite, il se reverse à la DGFiP. Un mélange PAS / URSSAF dans un même compte sans paramétrage clair produit des écarts durables. Les régularisations rétroactives doivent arriver à la compta avec le mois d’origine et le mois de constat, sinon les provisions et les charges dérivent.",
      methode:
        "Avant d’envoyer le journal : totaux de contrôle, comparaison N-1, nets aberrants, sorties, PAS. En cas d’écart : extraire le matricule ou le compte, pas tout le fichier. Réunion courte : trois chiffres, une cause, une action. Ne jamais modifier un bulletin « pour coller au grand livre » sans règle sociale.",
      noteText:
        "Limite : un junior ne recode pas le plan comptable seul, ne « inverse pas une écriture » pour masquer un trop-perçu, n’invente pas un compte d’attente comme solution définitive.",
      exemple:
        "ETI. Le 431 ne letre pas : 126 €. Cause : mutuelle (hypothèse de dossier) précomptée sur 28 salariés, facture organisme sur 27 (un départ mal radié). Paie et compta : radiation, régularisation, pas un écart « mis en 658 ». Le salarié parti avait encore une ligne : dossier administration du personnel + paie.",
      extra: [
        code(`DIALOGUE 8 — Comptabilité (écart de lettrage)
Comptable : Ton 431 URSSAF ne letre pas avec l'avis, 84,20 € d'écart. Tu forces ?

Gestionnaire : Je ne force pas un compte. Période janvier 2026. Je sors le journal
de paie, le récap organismes et la DSN. 84,20 €, ce n'est pas un arrondi de centime
sur 28 salariés. Hypothèses à tester : un matricule sorti encore affilié, une
régularisation non reprise, un taux AT d'hypothèse de dossier différent de la
notification, un FNAL <50 / ≥50 mal paramétré. Je vous envoie ce soir le détail
par organisme, pas un « 84,20 à passer en 658 ». Si c'est une erreur de paie, on
corrige le bulletin ou la DSN selon le cas ; si c'est un paramètre comptable, vous
me dites le compte attendu. On ne mélange pas PAS et URSSAF.

Comptable : Le directeur veut clôturer demain.

Gestionnaire : Je priorise cet écart aujourd'hui. Clôturer un écart non expliqué
reporte le problème à février. Je copie le responsable paie pour l'arbitrage délai.`),
      ],
      erreurs:
        "Envoyer le journal sans totaux. Dire « c’est le logiciel ». Corriger un brut pour égaler un compte 641. Oublier d’annoncer une régularisation rétro. Laisser un compte d’attente s’empiler.",
      particuliers:
        "Multi-établissements : un journal par SIRET ou selon paramétrage, pas un mélange. Cabinet : chaque client un plan, on ne recycle pas les comptes du dossier A. CSP : fichier standard, écarts en ticket avec ID.",
      exercice:
        "Écart 442 PAS : 200 €. Listez 4 causes possibles et ce que vous ne faites pas.",
      correction:
        "Causes possibles : taux PAS non appliqué sur un matricule, net imposable faux, salarié hors journal, virement DGFiP sur mauvaise période, régularisation non transmise. Ne pas : absorber 200 € dans l’URSSAF ; modifier un taux PAS à la main « pour coller » ; ignorer. Instruire paie + DSN + compta.",
    }),
    pack({
      title: "Urgence, confidentialité, documents et conflit",
      description:
        "Tenir les cas tendus : délai court, secret, pièces, tension relationnelle.",
      minutes: 22,
      objectifs:
        "Vous savez prioriser une urgence réelle, refuser une fausse urgence, protéger les données, cadrer un échange de pièces, et désamorcer un conflit sans céder sur la règle.",
      theorie:
        "L’urgence en paie, c’est ce qui empêche un paiement exact à la date, une DSN dans les temps, ou qui crée un risque immédiat (net négatif, saisie, mauvais destinataire, titre de séjour à échéance, arrêt non traité avant IJ). Ce n’est pas le manager qui découvre les HS la veille. Prioriser : sécurité des personnes et légalité, puis paiement, puis déclaration, puis confort. Une fausse urgence se recadre avec la date de gel.\n\nLa confidentialité n’est pas une option de fin de mois. Rémunérations, PAS, santé, saisie, IBAN : canal habilité, pièce minimale, pas d’open space, pas de transfert vers une messagerie personnelle, pas de document « pour le CSE » hors mandat et hors données nécessaires. Les échanges de documents (RIB, attestations, arrêts, duplicatas) suivent une GED ou un coffre. Un Drive ouvert, un WhatsApp, un SMS de RIB : hors cadre.\n\nLe conflit (salarié qui crie, manager qui menace, client cabinet qui exige une pratique non conforme) se traite en trois couches : sécurité de l’échange (calme, témoin ou responsable si besoin), contenu (faits, règle), suite (écrit, escalade). On ne filme pas, on ne répond pas à 23 h sur un ton personnel, on ne révèle pas des éléments d’un autre dossier pour « gagner ». Un junior n’est pas médiateur RH d’un conflit de personne ; il oriente.",
      methode:
        "Urgence : qualifier en 5 minutes (paiement / DSN / incident données / autre). Si autre : date normale. Confidentialité : « qui, quoi, pourquoi, canal ». Document : identité, finalité, visa, archive. Conflit : écouter, reformuler le fait, dire la règle, proposer le prochain acte daté, rompre l’échange si insulte, alerter.",
      noteText:
        "Limite : vous n’êtes pas tenu d’accepter une agression. Vous n’êtes pas tenu de violer le RGPD « parce que c’est urgent ». Vous n’êtes pas le juriste du licenciement en cours.",
      exemple:
        "Cabinet. Client : « envoie-moi tous les nets de la boîte sur WhatsApp, j’ai un RDV banque dans une heure. » Urgence réelle pour lui, canal illicite. Réponse : export sécurisé selon contrat de mission, destinataire habilité, délai possible ou pas ; pas WhatsApp. Si le RDV saute faute de canal : ce n’est pas une faute du gestionnaire, c’est le respect du secret.",
      extra: [
        code(`DIALOGUE 9 — Urgence et confidentialité (manager)
Manager : Envoie-moi le bulletin de Karim sur mon Gmail perso, je suis en train,
son entretien c'est dans 20 minutes.

Gestionnaire : Je ne transmets pas un bulletin sur une messagerie personnelle.
Le net, le PAS et la mutuelle ne sont pas des supports d'entretien. Pour l'entretien,
l'outil manager donne le temps de travail et les absences selon votre habilitation.
Si RH a prévu une fiche, c'est RH qui la transmet par le canal interne. 20 minutes
ne créent pas une exception RGPD.`),
        code(`DIALOGUE 10 — Conflit (salarié)
Salarié : Vous êtes incompétent, tout le service le dit, je veux votre responsable
et je veux mon argent maintenant.

Gestionnaire : Je vous parle calmement. Vous contestez un montant sur le bulletin
de janvier. Je prends le dossier. Je ne discute pas une attaque personnelle. Je
peux vous transférer le responsable paie. Un virement hors calendrier n'existe que
s'il y a une procédure d'acompte validée ; je ne le crée pas sous insulte. Si vous
pouvez me citer la ligne, je l'instruis. Sinon, je clôture cet échange oral et je
vous réponds par écrit aujourd'hui sur les faits.

[Si l'insulte continue : fin de l'appel, trace, alerte responsable, pas de mail
vengeur.]`),
        code(`DIALOGUE 11 — Échange de documents (salarié)
Salarié : Je mets mon RIB et mon arrêt sur WhatsApp, c'est plus rapide.

Gestionnaire : Merci de ne pas les envoyer sur WhatsApp. L'arrêt et le RIB sont
des pièces de dossier : canal SIRH / mail professionnel / coffre selon notre
procédure. Un RIB reçu sur un téléphone personnel est un risque pour vos données
et pour le paiement. Voici le lien interne / l'adresse dédiée. Dès réception sur
ce canal, je mets à jour le dossier. La rapidité d'un canal non prévu n'est pas
une validité.`),
      ],
      erreurs:
        "Céder au Gmail perso. Répondre à une insulte. Laisser un conflit s’éterniser sans écrit. Envoyer trop de pièces « pour être complet ». Traiter toutes les demandes en urgence et rater la vraie (SEPA, DSN).",
      particuliers:
        "Harcèlement, discrimination, alerte : circuit RH / déontologique, pas un commentaire paie. Saisie, enquête pénale : habilités seulement. Télétravail : même secret, visio, imprimante familiale interdite pour les bulletins.",
      exercice:
        "Quatre demandes à 17 h, clôture demain 10 h : (A) HS du manager hors gel ; (B) RIB WhatsApp ; (C) net négatif détecté sur une saisie ; (D) salarié qui insulte et exige un virement. Ordonnez et dites l’acte de chacun.",
      correction:
        "C d’abord : net négatif / saisie = risque de paiement illicite, escalade responsable, barème, ne pas laisser partir le SEPA. D ensuite : fin d’échange agressif, trace, responsable, pas de virement sous insulte. B : refuser WhatsApp, indiquer le canal, ne pas utiliser le RIB. A : refuser saisie hors gel, reporter ou exception visée. L’urgence vraie est le paiement dangereux, pas la voix la plus forte.",
    }),
    quizLesson({
      title: "Quiz — Communication en paie",
      description: "Bulletin, réclamations, managers, compta, secret, conflit.",
      passing_score: 70,
      questions: [
        q({
          question: "Le montant net social est :",
          options: [
            "A. Le virement reçu sur le compte",
            "B. Une mention distincte (BOSS), revenu après prélèvements sociaux obligatoires, qui n’est pas le net versé",
            "C. Le brut moins le PAS uniquement",
            "D. Un taux national AT/MP",
          ],
          correct: 1,
          explanation:
            "MNS ≠ net versé ≠ brut. Cadre BOSS, modèle provisoire jusqu’au 31/12/2026. On n’anticipe pas 2027.",
        }),
        q({
          question: "Un salarié veut aligner son taux PAS sur celui d’un collègue. Vous :",
          options: [
            "A. Alignez pour l’égalité de traitement",
            "B. Refusez, n’ouvrez pas le taux d’un tiers, expliquez le canal fiscal personnel",
            "C. Mettez 0 % par faveur",
            "D. Publiez les deux taux pour comparer",
          ],
          correct: 1,
          explanation:
            "Confidentialité fiscale et absence de pouvoir de la paie sur le taux personnalisé.",
        }),
        q({
          question: "Gel le 18, manager le 24 : « saisis les HS, je signe demain. »",
          options: [
            "A. Vous saisissez pour servir le client interne",
            "B. Vous refusez sans validation ; exception seulement si le responsable paie l’écrit ; sinon report",
            "C. Vous antidater le gel",
            "D. Vous les mettez en net sans charges",
          ],
          correct: 1,
          explanation:
            "Le gel protège clôture et DSN. L’exception n’appartient pas au junior ni au manager seul.",
        }),
        q({
          question: "Un écart 431 de 84,20 € : la bonne posture est :",
          options: [
            "A. Forcer le lettrage en 658",
            "B. Instruire la cause (DSN, journal, affiliation, paramètre) avec la compta, sans forcer le compte",
            "C. Modifier un brut au hasard",
            "D. Ignorer sous 100 €",
          ],
          correct: 1,
          explanation:
            "Un écart s’explique. Le seuil « sous 100 » n’existe pas en qualité de paie.",
        }),
        q({
          question: "Canal pour un RIB :",
          options: [
            "A. WhatsApp personnel, c’est plus rapide",
            "B. Canal prévu (SIRH, coffre, mail professionnel), identité du titulaire",
            "C. SMS au manager",
            "D. Commentaire d’un ticket ouvert à tout le CSE",
          ],
          correct: 1,
          explanation:
            "Pièce de paiement = donnée sensible. La rapidité d’un canal n’est pas sa licéité.",
        }),
        q({
          question: "Annonce d’un trop-perçu déjà versé :",
          options: [
            "A. Prélèvement silencieux le mois suivant",
            "B. Information factuelle, chiffrage, modalités visées, pas de humiliation",
            "C. Abandon automatique sous 100 €",
            "D. Mail collectif à l’équipe",
          ],
          correct: 1,
          explanation:
            "Information et cadre de récupération. Ni silence, ni cadeau improvisé, ni publicité.",
        }),
        q({
          question: "Un manager demande le bulletin d’un salarié pour un entretien, sur Gmail personnel :",
          options: [
            "A. Exception de 20 minutes",
            "B. Refus : pas de messagerie perso, pas le bulletin complet hors habilitation",
            "C. Envoi du seul taux PAS",
            "D. Impression en salle de pause",
          ],
          correct: 1,
          explanation:
            "RGPD et secret des rémunérations. L’entretien n’ouvre pas le bulletin.",
        }),
        q({
          question: "Face à une insulte, le junior :",
          options: [
            "A. Rend l’insulte",
            "B. Recadre sur les faits, propose le responsable, cesse l’échange si ça continue, trace",
            "C. Vire un acompte pour calmer",
            "D. Publie le dossier sur Teams",
          ],
          correct: 1,
          explanation:
            "Professionnalisme et sécurité. L’argent n’achète pas la fin d’une agression.",
        }),
        q({
          question: "En janvier 2026, pour expliquer un plafond de tranche 1 retraite complémentaire, vous citez :",
          options: [
            "A. Un PMSS 3 925 € « comme l’an dernier »",
            "B. 4 005 €, arrêté du 22 décembre 2025, URSSAF",
            "C. Un plafond inventé de 4 500 €",
            "D. « Le logiciel connaît »",
          ],
          correct: 1,
          explanation:
            "Paramètre annuel sourcé. Recopier N-1 est l’erreur classique de janvier.",
        }),
        q({
          question: "Une réclamation « vous m’avez volé » se traite d’abord par :",
          options: [
            "A. Une contre-attaque",
            "B. Un accusé, l’instruction sur bulletin et pièces, puis explication ou correction visée",
            "C. Un avoir de 50 €",
            "D. La suppression du PAS",
          ],
          correct: 1,
          explanation:
            "Méthode de réclamation. Ni combat, ni faveur, ni bricolage fiscal.",
        }),
      ],
    }),
  ],
};
