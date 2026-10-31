-- LOU Academy — 009a PARTIE 1/2 — consultant-junior-workforce-organization
-- Modules 1 à 5 (positions 0–4).
-- SQL Editor (postgres). Ne touche pas sql-pour-debutants-2h ni devenir-recruteur-a-z.
-- Puis exécutez 009b.

BEGIN;

INSERT INTO courses (
  title, slug, description, category, level, estimated_duration_minutes,
  status, creator_id, icon, gradient
)
SELECT
  'Devenir consultant junior Workforce & Organization',
  'consultant-junior-workforce-organization',
  'Stratégie RH, organisation, transformation, analyse des effectifs et conseil aux entreprises.

Parcours de 5 heures (300 minutes) pour débuter en cabinet : diagnostiquer une organisation, analyser des effectifs (ETP, turnover, pyramide), contribuer à un Strategic Workforce Planning et à une GEPP, esquisser une organisation cible et un plan de changement, produire des livrables de conseil. Cas fil rouge : Groupe Nova Services, 1 200 salariés, croissance, turnover, départs à la retraite, métiers en tension, RH fragmentée.

Objectif de marché, pas une garantie : certaines offres juniors visent environ 36 000 € brut annuels ou davantage. Aucune embauche ni rémunération n''est acquise. Cinq heures ne remplacent pas l''expérience d''une mission réelle.

L''attestation LOU Academy certifie la réussite dans cette plateforme : ce n''est pas un diplôme d''État ni une certification RNCP, ni une certification Excel / Power BI.

Public : reconversion, juniors RH, analystes. Durée : 5 heures. Niveau : débutant. Catégorie : Conseil et organisation.',
  'Conseil et organisation',
  'debutant',
  300,
  'draft',
  (SELECT id FROM profiles WHERE role IN ('admin', 'creator') ORDER BY created_at LIMIT 1),
  'fa-sitemap',
  'linear-gradient(135deg, #4f46e5, #0891b2)'
WHERE NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'consultant-junior-workforce-organization')
AND EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator'));

DO $guard$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role IN ('admin', 'creator')) THEN
    RAISE EXCEPTION 'Aucun profil admin/creator.';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM courses WHERE slug = 'consultant-junior-workforce-organization') THEN
    RAISE EXCEPTION 'Cours consultant-junior-workforce-organization absent.';
  END IF;
END
$guard$;


DO $seed$
DECLARE
  payload        jsonb := $coursejsona$
{
  "slug": "consultant-junior-workforce-organization",
  "title": "Devenir consultant junior Workforce & Organization",
  "description": "Stratégie RH, organisation, transformation, analyse des effectifs et conseil aux entreprises.\n\nParcours de 5 heures (300 minutes) pour débuter en cabinet : diagnostiquer une organisation, analyser des effectifs (ETP, turnover, pyramide), contribuer à un Strategic Workforce Planning et à une GEPP, esquisser une organisation cible et un plan de changement, produire des livrables de conseil. Cas fil rouge : Groupe Nova Services, 1 200 salariés, croissance, turnover, départs à la retraite, métiers en tension, RH fragmentée.\n\nObjectif de marché, pas une garantie : certaines offres juniors visent environ 36 000 € brut annuels ou davantage. Aucune embauche ni rémunération n'est acquise. Cinq heures ne remplacent pas l'expérience d'une mission réelle.\n\nL'attestation LOU Academy certifie la réussite dans cette plateforme : ce n'est pas un diplôme d'État ni une certification RNCP, ni une certification Excel / Power BI.\n\nPublic : reconversion, juniors RH, analystes. Durée : 5 heures. Niveau : débutant. Catégorie : Conseil et organisation.",
  "level": "debutant",
  "category": "Conseil et organisation",
  "icon": "fa-sitemap",
  "gradient": "linear-gradient(135deg, #4f46e5, #0891b2)",
  "estimated_duration_minutes": 300,
  "modules": [
    {
      "position": 0,
      "title": "Comprendre le métier de consultant junior Workforce & Organization",
      "description": "Situer le cabinet, les grades, l'équipe et le client ; tenir livrables, qualité, confidentialité et économie de mission ; simuler une journée et une première semaine — cas fil rouge Groupe Nova Services.",
      "lessons": [
        {
          "title": "Le cabinet, les grades et la posture junior",
          "description": "Distinguer analyste, consultant, senior et manager, cartographier l'équipe et le client, et comprendre délais, facturation et limites du junior.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous savez dire ce qu'un cabinet Workforce & Organization vend vraiment, distinguer analyste, consultant junior, senior et manager, nommer vos interlocuteurs côté cabinet et côté client, et énoncer ce que vous ne décidez jamais seul — y compris en matière de tarif, de GEPP ou d'avis social."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un cabinet Workforce & Organization vend du temps, une méthode et un jugement : diagnostiquer une organisation, chiffrer des options d'effectifs ou de structure, aider un comité à décider. Ce n'est ni le RH du client, ni un cabinet d'avocats, ni l'éditeur du SIRH. Le client décide. Vous proposez ; vous n'engagez pas l'entreprise sur une réorganisation, une GEPP ou un avis aux instances.\n\nLes grades : l'analyste collecte et produit sous contrôle. Le consultant junior tient un lot (entretiens, morceau de diagnostic, première version, alerte qualité). Le senior tient le fil, challenge et gère le quotidien client. Le manager cadre le périmètre, porte le risque commercial, anime le sponsor. Un junior qui tranche comme un manager sort de son rôle ; un junior qui laisse passer un faux chiffre aussi.\n\nAutour de vous : équipe cabinet (manager, senior, juniors, parfois un expert) et équipe client (sponsor DRH, DG ou DAF, copil, relais métier). Les délais sont le produit : un comité dans quinze jours n'attend pas que vous « compreniez tout ». Le cabinet vend des jours en régie ou un forfait. Votre temps a un coût ; retravail et dérive de périmètre se lisent sur la marge. Vous ne négociez pas le tarif ; vous tenez le temps et le livrable. Posture : factuel, discret, curieux, respectueux de la relecture."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès qu'une mission vous est confiée, écrivez une fiche d'une page avant la première réunion client :\n1. Quel résultat le sponsor attend à quelle date (pas « améliorer la RH ») ?\n2. Qui est le manager cabinet, le senior, votre lot, le sponsor client, le copil ?\n3. Régie ou forfait — et qui, chez vous, parle d'argent ?\n4. Qu'est-ce qui est déjà cadré (périmètre, sites, données, instances) et qu'est-ce qui ne l'est pas ?\n5. Quelle est votre limite : vous collectez, structurez, proposez ; vous ne signez pas, vous n'inventez pas un délai légal, vous n'annoncez pas un salaire.\n\nEnsuite, vous demandez le RACI interne du cabinet (qui relit avant envoi client) et vous le respectez. Un e-mail envoyé « pour aller vite » sans relecture n'est pas de l'autonomie, c'est un risque."
            },
            {
              "block_type": "callout",
              "content": "Certaines offres juniors visent environ 36 000 € brut annuels, parfois davantage : c'est un objectif de marché, jamais une garantie d'embauche ni de rémunération. Cinq heures de parcours ne remplacent pas l'expérience d'une mission réelle, ni un titre professionnel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le DRH du Groupe Nova Services (1 200 salariés, fictif) appelle : « Il nous faut un plan Workforce pour vendredi, le COMEX veut des chiffres, vous êtes consultants. » Sans rôle clair, un junior sort un tableau de turnover, un autre promet une GEPP « conforme », un troisième envoie des slides au COMEX sans relecture. Trois fautes : livrable sans question de décision, rôle de juriste usurpé, chaîne de qualité cassée.\n\nLe même brief, tenu : vous reformulez le résultat (« options d'effectifs et d'organisation pour le COMEX de J+15, sur le périmètre des 1 200, données pédagogiques du client »), vous situez grades et lots, vous demandez le manager pour le cadrage commercial, et vous refusez de qualifier une obligation légale sans vérification du texte."
            },
            {
              "block_type": "code",
              "content": "GRADES — repère pédagogique (les titres varient selon les cabinets)\nGrade              Ce que l'on attend                         Ce que l'on ne vous demande pas\nAnalyste           Collecte, tableaux, slides sous contrôle   Tenir le client seul, vendre la suite\nConsultant junior  Lot cadré, entretiens, 1re version         Trancher le périmètre, le tarif, l'avis social\nSenior             Fil de mission, qualité, quotidien client  Porter seul le risque commercial du cabinet\nManager            Cadrage, sponsor, marge, suite de mission  Déléguer la relecture « parce que le junior gère »\n\nÉquipe type d'une mission W&O de 8 semaines (exemple, pas une norme)\nManager  1 j / semaine   Senior  3 j / semaine   Junior  4 à 5 j / semaine\nLe mix varie. Ce qui ne varie pas : le junior n'invente pas le pricing."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Se présenter comme « le RH du client ». Confondre urgence du sponsor et mandat écrit. Envoyer un livrable au client sans relecture senior. Promettre 36 000 € ou une embauche. Inventer un délai CSE ou un seuil GEPP « pour rassurer ». Croire que cinq heures de formation autorisent à piloter une mission autonome."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En interne (équipe organisation / people analytics d'un groupe), vous n'émettez pas de facture, mais la chaîne de relecture et la confidentialité restent. En staff augmentation, vous êtes logé chez le client : vous restez salarié du cabinet, pas du DRH. En petite mission solo junior « pour apprendre » : le manager reste joignable ; l'absence de senior dans la pièce n'élargit pas vos droits."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Nova Services vous accueille lundi. Le DRH dit : « Vous êtes consultant, donc vous validez le plan d'effectifs, le message CSE et le tarif de la mission, on n'a pas le temps de passer par votre manager. » En cinq lignes : (1) ce que vous acceptez de faire cette semaine ; (2) ce que vous refusez de valider ; (3) à qui vous parlez dans les 24 heures."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Vous acceptez de clarifier le besoin, de poser la question de décision du COMEX, de lancer la collecte et les premiers entretiens, de produire une note de cadrage relue.\n2. Vous ne validez ni le plan d'effectifs (décision client), ni le message aux instances (avis social / communication employeur), ni le tarif (manager cabinet). L'urgence n'est pas un mandat.\n3. Dans les 24 heures : votre manager (périmètre et argent), votre senior (qualité et planning), le DRH pour reformuler le livrable attendu. Vous tracez le refus de « valider sans filière »."
            }
          ],
          "position": 0
        },
        {
          "title": "Livrables, qualité, confidentialité et économie de mission",
          "description": "Savoir ce que l'on livre, à quelle qualité, sous quelles règles de discrétion, et comment le temps consommé pèse sur la mission.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez nommer les livrables d'une mission W&O, appliquer une exigence de qualité minimale (source, date, définition, relecture), tenir la confidentialité y compris sur les données personnelles, et relier votre emploi du temps à l'économie de la mission — sans prétendre fixer le prix."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une mission se juge aux livrables, pas aux heures en salle. En W&O, les objets reviennent : note de cadrage, demande de données, guide d'entretien, diagnostic (faits, hypothèses, implications), annexes, slides de comité, plan d'options, relevé de décisions. Un livrable a un destinataire, une date, une question. Un dump Excel n'en est pas un.\n\nLa qualité n'est pas du « joli ». Chaque chiffre a une source, une date, une définition (ETP, tête, CDI seulement ?). Constaté, estimé et inconnu sont marqués. Les données RH de ce parcours sont pédagogiques : elles n'inventent pas un benchmark réel. Avant envoi client : relecture senior. Une slide, un message. L'annexe porte le détail ; le comité porte la décision.\n\nLa confidentialité est le métier. Effectifs, salaires, départs, organigrammes, noms : rien n'en sort (train, cantine, LinkedIn, mail perso). Le junior n'est pas juriste RGPD, mais il ne bricole pas : pas de nominatif hors espace mission, pas de fichier « pour le week-end chez soi ». Un NDA client s'applique à vous.\n\nL'économie tient en trois lignes. Des jours sont vendus (régie ou forfait). Retravail et analyse « en plus » non cadrée mangent la marge ou le calendrier. Vous ne discutez pas le taux. Vous tenez un timesheet honnête et vous alertez tôt."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant de produire, écrivez : destinataire, décision visée, date, format (note / slides / annexe), qui relit.\nPuis :\n1. Qualité — source, date, définition sur chaque indicateur ; version et auteur sur le fichier.\n2. Chaîne — brouillon junior → senior → (si besoin) manager → client. Jamais l'inverse.\n3. Confidentialité — travail dans l'espace mission ; pas de capture d'écran dans un chat perso ; pas de nom dans un objet d'e-mail trop large.\n4. Économie — en fin de journée : jours consommés / jours prévus sur votre lot ; ce qui reste à livrer ; alerte si l'écart dépasse une journée.\n5. Demande hors périmètre — vous notez, vous ne dites pas oui. Le manager décide s'il faut un avenant ou un refus poli."
            },
            {
              "block_type": "callout",
              "content": "Les chiffres RH utilisés dans ce parcours (turnover, pyramide, ETP) sont fictifs et pédagogiques. En mission réelle, vous datez, vous sourcez, et vous n'inventez pas un « taux de marché » pour faire sérieux."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Nova Services, un junior envoie au DRH, le dimanche soir, un Excel nominatif de salaires « pour avancer », avec en objet « plan social — confidentiel ». Le fichier part vers une mauvaise adresse. Deux fautes graves : donnée personnelle hors canal, intitulé qui préjuge une décision que personne n'a prise. Le même travail, tenu : agrégats non nominatifs dans l'espace mission, objet « annexe effectifs — version interne cabinet », envoi après relecture, aucun mot « plan social » tant que ce n'est pas le mandat."
            },
            {
              "block_type": "code",
              "content": "ÉCONOMIE DE MISSION — lecture junior (schéma pédagogique, pas un tarif réel)\nMission Nova (fictif) : 8 semaines, forfait, mix manager / senior / junior.\nVotre lot : diagnostic effectifs + première structure d'options, 20 jours.\n\nConsommé semaine 1 : 5 jours. Livrable : note de cadrage + demande de données.\nReste : 15 jours pour entretiens, diagnostic, slides COMEX.\n\nAlerte : le DRH demande « au passage » une cartographie des compétences de 1 200 personnes.\nCe n'est pas « être serviable ». C'est un autre lot. Vous notez, vous remontez, vous n'emballez pas."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Livrer un fichier sans définition d'ETP. Envoyer au client la version « draft interne ». Travailler un fichier nominatif sur une machine perso. Dire oui à chaque « petite analyse en plus ». Remplir le timesheet au feeling le vendredi. Qualifier une réorganisation de « plan social » dans un objet d'e-mail."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En régie, le client voit parfois vos jours : la transparence n'autorise pas à facturer du flou, elle l'interdit davantage. En forfait, le dérapage est d'abord le problème du cabinet : alerter tôt est une loyauté, pas une faiblesse. Si un CSE ou un avocat client entre dans la boucle, vous ne devenez pas juriste : vous suivez la consigne manager et vous vérifiez les textes avant toute phrase d'obligation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le senior est en congé deux jours. Le RRH d'une région Nova vous demande « le fichier brut des salaires de son site, par mail perso, pour préparer le COMEX ». Que faites-vous, dans l'ordre, en quatre actes ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Vous n'envoyez pas. Mail perso + fichier brut salarial = hors canal et hors agrégat.\n2. Vous proposez l'espace mission et un extrait agrégé (effectifs, masses, pas de nominatif) si le mandat le couvre.\n3. Vous en informez le manager (senior absent) : destinataire, demande, refus du canal.\n4. Vous tracez. Le COMEX n'est pas un motif pour casser confidentialité et chaîne. L'absence du senior n'élargit pas vos droits, elle augmente le devoir d'alerte."
            }
          ],
          "position": 1
        },
        {
          "title": "Journée type et première semaine de mission",
          "description": "Prioriser une journée de junior et simuler les cinq premiers jours chez Groupe Nova Services.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous visualisez le rythme réel d'un junior en mission, vous savez prioriser sans tout abandonner quand le client « crie », et vous savez ce qu'une première semaine doit produire — et ce qu'elle ne doit pas promettre."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un consultant junior ne fait pas « de la stratégie » de 9 h à 18 h. Il fait un portefeuille de micro-actes : nettoyer une base, relancer une donnée, mener deux entretiens, rédiger trois slides, se faire recaler par le senior, tenir le timesheet. Si vous n'imposez pas des plages, la journée devient une suite d'interruptions client, et le livrable du jeudi n'existe pas.\n\nLa journée se structure. Tôt : données et production, quand personne n'interrompt. Milieu de journée : entretiens et ateliers — jamais enchaînés sans notes. Fin de journée : synthèse, relecture, log de temps, prochain acte daté. Un lot sans prochain acte daté est un lot qui meurt.\n\nLa première semaine n'est pas une semaine de diagnostic achevé. Elle sert à cadrer : comprendre la question de décision, obtenir les accès, poser la demande de données, rencontrer le sponsor et trois relais, écrire une note de cadrage (périmètre, hors-périmètre, hypothèses, planning, risques, RACI). Livrer un « plan Workforce définitif » le vendredi de la semaine 1 est une faute, pas un exploit. Cinq heures de formation ne font pas non plus une semaine de mission : ici, vous apprenez la séquence, pas l'improvisation autonome.\n\nLe fil rouge de tout le parcours : Groupe Nova Services, 1 200 salariés, fictif. Croissance, turnover, départs à la retraite, métiers en tension, RH fragmentée. Vous n'êtes pas le DRH. Vous aidez à décider."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Chaque matin, trois lignes dans le carnet de mission : livrable de la journée ; acte irréversible (entretien, envoi client, délai de donnée) ; alerte à remonter.\nChaque soir : timesheet ; fichiers nommés (date, version, contenu) ; mail de 5 lignes au senior si un risque a bougé.\nSemaine 1, dans l'ordre : kick-off interne cabinet → kick-off client → accès et demande de données → 4 à 6 entretiens de cadrage → note de cadrage relue → plan de la semaine 2. Vous ne partez pas en « analyse complète des 1 200 » avant que le cadrage soit accepté."
            },
            {
              "block_type": "callout",
              "content": "La simulation ci-dessous est pédagogique. Les volumes, délais et tensions de Nova sont inventés pour s'entraîner, pas pour décrire un groupe réel ni un standard de staffing."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Mardi 11 h, le DG de Nova débarque dans la salle : « Montrez-moi le turnover par site, là, maintenant. » Un junior improvise un chiffre lu la veille, faux de 4 points, cité ensuite en COMEX. Le même junior, tenu, dit : « Je vous sors la définition et la source en trente minutes, après un passage senior ; je ne vous donne pas un ordre de grandeur non sourcé. » Le DG grogne. Le cabinet garde sa crédibilité."
            },
            {
              "block_type": "code",
              "content": "SIMULATION — Semaine 1, mission Nova Services (fictif, 1 200 salariés)\nLundi\n  09:00  Kick-off interne (manager, senior, vous) : question de décision, lot, tabous.\n  11:00  Kick-off client (DRH sponsor, DAF, deux RRH). Vous prenez note, vous ne « vendez » pas.\n  14:00  Accès SIRH / fichiers. Demande de données écrite (effectifs, ETP, départs, âges, métiers, sites).\n  17:00  Carte d'interlocuteurs. Timesheet.\n\nMardi\n  09:00  Nettoyage d'un premier extrait (définitions : tête vs ETP, CDI vs tous contrats).\n  11:00  Entretien RRH région Ouest — turnover et vacance de responsables d'exploitation.\n  14:30  Entretien directeur Facility.  16:30  Point senior : hypothèses, pas encore de slides COMEX.\n\nMercredi\n  09:00  Deux entretiens plateaux Relation client. Le DRH veut « déjà un organigramme cible ».\n  14:00  Vous refusez l'organigramme cible ; vous proposez la note de cadrage pour vendredi.\n  16:00  Relance données pyramide des âges — fichier incomplet.\n\nJeudi\n  09:00  Production note de cadrage (périmètre, hors-périmètre, données manquantes, planning).\n  15:00  Relecture senior.  17:30  Le DG demande le turnover « tout de suite » : vous sourcez, vous ne devinez pas.\n\nVendredi\n  10:00  Restitution cadrage, 45 min. Décision visée : options d'organisation et d'effectifs pour un COMEX à J+15.\n  14:00  Plan semaine 2 (entretiens diagnostic, pas encore de GEPP ni de chiffrage social).\n  16:30  Timesheet, risques, lot « cartographie 1 200 compétences » resté hors périmètre.\n\nPortefeuille : 1 mission, 1 lot, 0 promesse légale, 0 chiffre non défini."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Tout traiter dans l'ordre des e-mails du DRH. Inventer un turnover pour ne pas dire « je vérifie ». Produire l'organisation cible le mercredi de la semaine 1. Sauter le kick-off interne. Oublier le timesheet. Transformer la première semaine en audit clandestin des salaires nominatifs."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Kick-off décalé de trois jours : vous avancez sur le cadrage interne et le canevas de demande de données, vous n'inventez pas les faits. Sponsor absent : vous ne prenez pas le RRH pour sponsor. Mission 100 % à distance : les entretiens existent encore, plus courts, plus préparés ; la confidentialité du fond d'écran et du casque aussi."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Dans la simulation, le mercredi le DRH veut « déjà un organigramme cible ». Que répondez-vous, et que livrez-vous vendredi à la place ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Vous ne livrez pas d'organigramme cible en semaine 1 : vous n'avez ni diagnostic partagé, ni critères (span, métiers critiques, gouvernance RH), ni arbitrage sponsor. Vous dites : « L'organisation cible est un livrable de la phase d'options, après les faits. Vendredi, vous avez une note de cadrage : question de décision, périmètre, données, planning jusqu'au COMEX, hors-périmètre (GEPP juridique, cartographie exhaustive, message instances). » Vous proposez un schéma de l'organisation actuelle tel que compris — factuel, lacunaire, sourcé — pas une cible. C'est de la tenue de mission, pas de la lenteur."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Métier, cabinet et première semaine",
          "description": "Vérifier que vous situez les grades, la posture, la qualité, la confidentialité et l'économie de mission.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 4,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage autonome de missions de conseil complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Métier, cabinet et première semaine",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle phrase décrit le mieux le consultant junior, par rapport au manager, dans un cabinet W&O ?",
                "question_type": "single_choice",
                "options": [
                  "A. Il cadre le périmètre, négocie le tarif et porte le risque commercial du cabinet",
                  "B. Il tient un lot cadré (entretiens, première version, alerte qualité) sous relecture, sans signer à la place du client",
                  "C. Il valide les avis sociaux, la GEPP et les messages CSE parce qu'il est « RH »",
                  "D. Il remplace le senior dès que celui-ci est en congé, y compris pour envoyer un fichier salarial nominatif"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le manager porte cadrage, tarif et risque. Le junior tient un lot sous relecture. Il n'est ni juriste, ni décideur client. L'absence du senior n'élargit pas ses droits."
              },
              {
                "question": "Une offre d'emploi « consultant junior W&O, 36 000 € » apparaît pendant le parcours. Que retenez-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le parcours garantit ce salaire à la sortie",
                  "B. C'est un ordre de grandeur de marché pour certaines offres, pas une garantie d'embauche ni de rémunération",
                  "C. Cinq heures suffisent à justifier ce niveau en entretien comme une expérience de mission autonome",
                  "D. L'attestation de la plateforme vaut titre professionnel et négocie le salaire à votre place"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "36 000 € est un objectif de marché, jamais une garantie. Cinq heures ne remplacent pas une mission réelle. L'attestation de réussite sur la plateforme n'est pas un titre professionnel."
              },
              {
                "question": "Le DRH de Nova demande le fichier brut des salaires de son site sur sa boîte personnelle, « pour le COMEX ». Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous envoyez : le destinataire est le client, donc c'est autorisé",
                  "B. Vous envoyez en copiant votre manager, pour vous couvrir",
                  "C. Vous refusez le canal et le nominatif, proposez l'espace mission et un agrégat si le mandat le couvre, et vous alertez le manager",
                  "D. Vous déposez le fichier sur un lien public le temps du week-end"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Un COMEX n'autorise ni le mail perso ni le fichier salarial brut. Canal prévu, agrégat, alerte manager. Un lien public aggrave la faute."
              },
              {
                "question": "En économie de mission, que doit faire le junior si le client demande « au passage » une cartographie des compétences des 1 200 personnes ?",
                "question_type": "single_choice",
                "options": [
                  "A. Dire oui : c'est de la qualité de service, les jours forfaitaires sont déjà vendus",
                  "B. Noter la demande, ne pas s'engager, remonter au manager (avenant ou refus) : c'est un autre lot",
                  "C. Commencer le week-end pour « gagner du temps » sans le dire",
                  "D. Augmenter seul le tarif de la mission dans le prochain e-mail"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Une cartographie de 1 200 personnes n'est pas un à-côté. Le junior ne dit ni oui ni le prix. Il remonte. Le forfait ne rend pas le hors-périmètre gratuit."
              },
              {
                "question": "Semaine 1 chez Nova : le DRH veut « déjà l'organigramme cible » le mercredi. Quelle tenue est la bonne ?",
                "question_type": "single_choice",
                "options": [
                  "A. Livrer une cible le mercredi pour montrer de l'impact",
                  "B. Inventer un turnover par site pour alimenter la cible",
                  "C. Refuser la cible trop tôt et livrer vendredi une note de cadrage (question de décision, périmètre, données, planning)",
                  "D. Annuler la mission jusqu'à ce que le DRH suive un autre cabinet"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "La semaine 1 produit le cadrage, pas la cible. Inventer un chiffre détruit la crédibilité. Annuler n'est pas une méthode. La cible vient après les faits."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 1,
      "title": "Lire la stratégie et l'organisation du client",
      "description": "Relier stratégie, chaîne de valeur, PESTEL et SWOT à la question Workforce ; reconnaître les structures ; lire gouvernance, centralisation et organigramme — cas Groupe Nova Services.",
      "lessons": [
        {
          "title": "Stratégie, chaîne de valeur, PESTEL et SWOT",
          "description": "Passer d'un slogan de direction à une lecture utile pour une mission Workforce : où le groupe gagne, sous quelles contraintes, avec quelles forces et faiblesses.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez relier une stratégie d'entreprise à une question d'effectifs et d'organisation, décrire une chaîne de valeur sans jargon inutile, distinguer PESTEL (externe) et SWOT (synthèse), et produire une lecture de décision — pas un collage d'acronymes."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une stratégie, pour un consultant W&O, n'est pas un livre de vision. C'est : où le groupe veut gagner, avec quelle offre, grâce à quelles capacités humaines et organisationnelles. Si Nova veut croître en facility et industrialiser la relation client, la question devient : quels métiers, quels sites, quelle RH pour tenir 1 200 personnes — pas « un SWOT parce que c'est le slide 2 ».\n\nLa chaîne de valeur montre où se crée ou se perd la valeur. Primaire : commercial, planning des contrats, exécution sites / plateaux, qualité, relation client. Soutien : RH, finance, SI, achats, QHSE. La RH n'est pas hors sujet : un turnover sur les responsables d'exploitation casse la primaire, pas seulement le climat.\n\nPESTEL lit l'externe : politique, économique, social, technologique, écologique, légal. Pour Nova (fictif) : métiers en tension, pyramide, digitalisation, énergie, cadre du travail. Sur le légal, vous notez le thème et vous renvoyez au texte : pas de délai d'instance inventé.\n\nSWOT synthétise : forces et faiblesses (internes), opportunités et menaces (externes), après des faits. Un SWOT de slogans ne décide rien. Un SWOT utile relie chaque ligne à une implication Workforce."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant tout atelier « stratégie », écrivez la question de décision : « Nova doit-elle renforcer le facility, industrialiser les plateaux, ou d'abord unifier la RH ? »\n1. Relire la stratégie telle que dite par le sponsor (et telle que vécue par les sites — souvent divergente).\n2. Tracer la chaîne de valeur en une page : primaire / soutien, goulots, métiers critiques.\n3. PESTEL en 6 cases, 1 à 2 faits sourcés par case, pas 40 puces. Légal = thème + « vérifier le texte », pas un délai inventé.\n4. SWOT en 8 à 12 lignes maximum, chaque ligne datée et sourcée (interne Nova vs externe).\n5. En extraire 3 implications Workforce (effectifs, compétences, organisation, RH) et 3 inconnues.\nLe livrable tient en cinq slides. Le reste est annexe."
            },
            {
              "block_type": "callout",
              "content": "Les tensions de marché, pyramides et croissances citées pour Nova sont pédagogiques et fictives. Elles servent à s'entraîner. Elles ne sont pas un benchmark sectoriel réel."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova présente « une stratégie de croissance rentable ». Sans lecture, un junior produit 12 slides PESTEL. Avec lecture : la primaire Facility dépend de responsables d'exploitation dont une vague part à la retraite (fait interne fictif) ; la primaire Relation client souffre d'un turnover élevé sur deux plateaux ; le soutien RH est fragmenté (process et SIRH non unifiés). PESTEL social et légal signale tension de métiers et cadre du travail à vérifier, pas à inventer. Le SWOT ne dit pas « opportunité digitale » : il dit « opportunités de contrats si l'on tient les métiers critiques ; faiblesse = RH non outillée pour les anticiper ». L'implication mission : diagnostic effectifs + organisation RH, pas une plaquette stratégique."
            },
            {
              "block_type": "code",
              "content": "LECTURE PÉDAGOGIQUE — Groupe Nova Services (1 200 p., fictif)\nChaîne (simplifiée)\nPrimaire : commercial contrats → planning sites/plateaux → exécution → qualité → relation client\nSoutien  : RH, finance, SI, achats, QHSE\n\nPESTEL (thèmes, pas des « lois inventées »)\nP  commande publique / privatisations locales selon contrats\nE  pression prix des donneurs d'ordre, coût du travail\nS  métiers en tension, pyramide, attractivité des horaires\nT  outils de planning, SIRH partiel, automatisation partielle des plateaux\nE  énergie et engagements clients sur les sites Facility\nL  droit du travail, instances, GEPP selon obligations — vérifier Légifrance / avis social\n\nSWOT utile = 3 implications Workforce, pas 40 adjectifs."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Coller un PESTEL générique « inflation, digital, RSE » sans lien avec Nova. Faire un SWOT avant d'avoir un fait. Traiter la RH comme hors chaîne de valeur. Inventer un seuil légal « à 1 200 salariés, obligation X ». Confondre la stratégie du COMEX et la stratégie réellement exécutée sur les sites."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le sponsor n'a pas de stratégie écrite, vous documentez les arbitrages de fait (où l'on embauche, où l'on investit) : c'est déjà une stratégie révélée. En groupe multi-métiers, une seule matrice SWOT dilue tout : une par métier (Facility / Relation client / siège) puis une synthèse. Sur le légal, junior ≠ juriste : thème, pas délai inventé."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du fil rouge Nova (croissance, turnover, retraites, métiers en tension, RH fragmentée) : (1) une implication Workforce par activité primaire ; (2) deux cases PESTEL qui changent vraiment la mission ; (3) une ligne de faiblesse SWOT que vous refusez d'écrire sans donnée."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Commercial : capacité à staffer les nouveaux contrats. Exécution Facility : relève des responsables d'exploitation. Plateaux : tenue du turnover. Qualité / relation client : compétences de supervision, pas seulement des ETP.\n2. S (pyramide, tension des métiers, horaires) et L (cadre du travail / instances / GEPP à vérifier) — plus T si le SIRH empêche de voir les ETP. P et E colorent le contexte, ils ne remplacent pas le diagnostic interne.\n3. Vous refusez « équipes peu engagées » ou « culture défaillante » sans enquête. Vous pouvez écrire « RH fragmentée (process et SIRH non unifiés) » dès que le sponsor et deux RRH le décrivent de la même façon, en le datant."
            }
          ],
          "position": 0
        },
        {
          "title": "Structures : fonctionnelle, divisionnelle, matricielle, processus, agile",
          "description": "Reconnaître cinq logiques d'organisation, leurs forces, leurs dysfonctionnements typiques, et ce qu'elles impliquent pour une mission W&O.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez nommer cinq structures, les reconnaître sur un organigramme réel (souvent hybride), et dire quel problème chacune résout — et lequel elle crée — avant de proposer une cible."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une structure n'est pas un dessin pour le rapport annuel. C'est le choix de ce qui est groupé, donc de ce qui sera facile — ou difficile — à coordonner. Cinq logiques reviennent.\n\nFonctionnelle : on groupe par expertise (RH, finance, opérations, commercial). Force : profondeur. Faiblesse : silos. Divisionnelle : on groupe par offre, client ou géographie. Force : proximité du P&L. Faiblesse : duplication RH / SI, siège aveugle.\n\nMatricielle : double rattachement (métier × géographie). Force : experts rares partagés. Faiblesse : deux chefs, arbitrages flous. Processus : on groupe autour d'un flux bout-en-bout (recruter-à-intégrer, incident-à-clôture). Force : délai client. Faiblesse : filières d'expertise diluées.\n\n« Agile » n'est pas l'absence de chef. C'est souvent des équipes stables autour d'un produit ou d'un flux. Plaquer des squads sur 1 200 personnes de sites Facility sans changer commande, planning et RH, c'est un vocabulaire, pas une structure.\n\nNova est hybride, comme beaucoup d'ETI de services : siège plutôt fonctionnel, opérations plutôt divisionnelles (métier × région), RH locale hors process unique. Le junior décrit l'hybride ; il ne force pas un modèle du manuel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Face à un organigramme :\n1. Qu'est-ce qui est groupé : fonction, division (métier / géo / client), matrice, processus ?\n2. Où se prend la décision d'embaucher, de réorganiser une équipe, de lancer un outil RH ?\n3. Combien de chefs pour un responsable de site ? Un, deux, « ça dépend » ?\n4. Quelles duplications (5 façons de recruter, 3 SIRH) ?\n5. Quel problème la direction cherche à résoudre (proximité client, maîtrise des coûts, expertise, vitesse) — et donc quelle structure a une chance, pas « la plus moderne ».\nVous dessinez l'existant en une page, avec les rattachements pleins et pointillés. La cible viendra plus tard, avec des critères. Ici, vous apprenez à lire."
            },
            {
              "block_type": "callout",
              "content": "Aucun des cinq modèles n'est « le bon ». Le bon est celui qui sert la stratégie et que l'on peut réellement animer (gouvernance, compétences de management, SI). Copier une matrice de grand groupe sur Nova est un risque, pas une preuve de maturité."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova veut « passer en agile » parce qu'un directeur a vu une conférence. Les sites Facility tournent par contrats et plannings 21 jours. Les plateaux ont déjà des équipes de supervision. Un junior qui redessine 1 200 personnes en squads produit un organigramme illisible et un CSE inquiet. La lecture juste : les plateaux peuvent gagner à un pilotage par flux (processus + rituels) ; le Facility a d'abord besoin d'une ligne hiérarchique claire et d'une relève de responsables ; la RH a besoin d'un process unique, pas d'un nouveau nom. L'hybride se décrit, il ne se nie pas."
            },
            {
              "block_type": "code",
              "content": "STRUCTURES — repère (à coller dans le carnet de mission)\nType          On groupe selon        Ça aide à              Ça casse souvent\nFonctionnelle fonction / expertise   normes, profondeur     le transversal\nDivisionnelle métier / géo / client  P&L, proximité         la duplication\nMatricielle   deux axes              experts rares          le « qui décide »\nProcessus     flux bout-en-bout      délai, client          les filières\nAgile / squad produit ou flux stable apprentissage          si la commande ne change pas\n\nNova (fictif, lecture de départ)\nSiège = plutôt fonctionnel (DAF, DRH, DSI, QHSE)\nOps = plutôt divisionnelles (Facility / Relation client × régions)\nRH = hybride mal tenu (DRH groupe + RRH, process non unifiés)\nÀ confirmer par entretiens, pas à graver le lundi."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Coller « matrice » parce que deux flèches se croisent. Appeler agile l'absence de chef. Redessiner la cible avant d'avoir nommé l'existant. Oublier que le SIRH et les plannings incarnent la structure mieux que le PowerPoint. Proposer une structure unique pour Facility et plateaux alors que le travail n'est pas le même."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Une matrice n'existe que s'il y a une règle d'arbitrage (qui tranche quand métier et région s'opposent). Sans règle, c'est du chaos nommé. Un réseau de sites n'est pas « divisionnel » si le siège décide chaque embauche : c'est du fonctionnel déguisé. En croissance rapide, la structure d'hier (petit siège, héros locaux) casse : c'est souvent le vrai sujet Nova."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Classez ces trois situations Nova : (1) chaque région recrute et forme à sa guise, le siège découvre les ETP en fin de trimestre ; (2) un expert QHSE « dotted line » vers 8 régions, sans règle d'arbitrage ; (3) un plateau organise l'équipe autour du flux incident → clôture, avec un superviseur de flux. Pour chacune : structure dominante ; un risque ; ce que vous allez vérifier en entretien."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Divisionnelle géographique faiblement gouvernée (presque fédérale). Risque : duplication, masse salariale opaque, inéquité. Vérifier : qui autorise une embauche, quel SIRH, quel process RH.\n2. Matrice informelle. Risque : l'expert n'a pas de temps, les régions ne l'écoutent pas, ou l'inverse — deux chefs. Vérifier : % de temps, qui note, qui tranche un conflit.\n3. Logique processus (flux). Risque : la filière métier (formation, compétences) disparaît si l'on ne la loge nulle part. Vérifier : qui porte la compétence, qui gère les absences, qui parle au client.\nAucune de ces trois lectures n'autorise encore une cible : elles autorisent des questions."
            }
          ],
          "position": 1
        },
        {
          "title": "Gouvernance, centralisation et organigramme Nova",
          "description": "Lire qui décide, ce qui est centralisé ou non, reconnaître les dysfonctionnements classiques, et décoder l'organigramme du Groupe Nova Services.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 6,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez distinguer organigramme et gouvernance, qualifier le degré de centralisation RH, repérer les dysfonctionnements visibles sur un schéma, et poser les bonnes questions de cadrage à partir de l'organigramme Nova."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "L'organigramme montre des boîtes et des traits. La gouvernance dit qui décide quoi, dans quelle instance, avec quelle donnée. On peut avoir un bel schéma et une gouvernance vide : embauches dans le couloir, réorganisation par e-mail du DG. En W&O, vous cartographiez les deux.\n\nLa centralisation n'est pas un bien. Centraliser recrutement, grilles, SIRH, peut donner de la visibilité à 1 200 personnes. Décentraliser peut donner de la vitesse sur un contrat qui démarre lundi. Le sujet est le couple : quoi est central (règles, outils, contrôles), quoi est local (planning, proximité, relais social). Nova souffre d'un entre-deux : DRH groupe sans process unique, RRH locaux sans mandat clair — RH fragmentée.\n\nDysfonctionnements lisibles tôt : boîtes vacantes ; double trait sans règle ; un manager à 18 collaborateurs en direct ; prestataires invisibles qui tiennent le planning ; instances découvertes à J-10 d'une cible. Le junior signale ; il n'invente pas la procédure d'information.\n\nLire un organigramme : traits pleins (autorité), pointillés (coordination), intitulés vs effectifs, siège vs sites, ce qui n'y figure pas (intérim, sous-traitance). Les 1 200 de Nova ne sont pas 1 200 boîtes au siège."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "En semaine de cadrage :\n1. Obtenir l'organigramme officiel, puis le « vrai » (intérim, vacants, rattachements de fait).\n2. Pour 6 décisions (embaucher, licencier, réorganiser une équipe, changer un outil RH, lancer une formation critique, parler aux instances) : qui propose, qui tranche, qui est informé.\n3. Noter le degré de centralisation par processus RH, pas un score unique.\n4. Marquer les dysfonctionnements observables (pas les rumeurs de cantine).\n5. Relier chaque trou à la question de décision du COMEX : visibilité des ETP, relève des responsables, unification RH.\nVous sortez une page : schéma + cinq questions. Pas une cible."
            },
            {
              "block_type": "callout",
              "content": "Organigramme et effectifs ci-dessous sont fictifs et pédagogiques. Un vrai schéma se date, se source, et se confronte aux ETP du SIRH — ici partiel, donc lacunaire à dire."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le DRH de Nova envoie un organigramme « à jour ». En entretien, un RRH indique trois responsables d'exploitation vacants, un plateau rattaché « en pratique » à un directeur commercial, et des agents d'accueil sous-traités hors schéma. Sans cette lecture, le junior dimensionne une organisation cible sur un dessin mort. Avec lecture : le COMEX décide à partir d'un existant faux. Premier livrable : un organigramme de travail, lacunaire, annoté, pas une cible."
            },
            {
              "block_type": "code",
              "content": "ORGANIGRAMME DE TRAVAIL — Groupe Nova Services (fictif, pédagogique, ~1 200 p.)\nConseil d'administration\n        |\n       DG\n   _____|________________________________\n  |         |         |         |        |\n DAF       DRH       DSI     Dir.      Dir.\n (finance) (groupe)  (SI)    Facility  Relation client\n                      |         |        |\n                     SIRH    8 régions  4 plateaux\n                     partiel    |        |\n                              sites    supervision\n                              ~550 p.   ~400 p.\n\nSiège & supports (finance, RH siège, QHSE, commercial, DSI) ~250 p.\n\nRH telle que vécue (à confirmer)\n— DRH groupe : règles, reporting, quelques recrutements cadres\n— 5 RRH : paie relais, recrutement local, social de proximité\n— Process recrutement / entretien / GEPP : non unifiés\n— Instances : à cartographier avec le client — ne pas inventer le calendrier\n\nDysfonctionnements visibles sur le schéma (hypothèses de travail)\n1. Trois boîtes « resp. exploitation » vacantes (Facility)\n2. Pas de ligne unique sur qui autorise une embauche locale\n3. Prestataires d'accueil / d'intérim hors dessin\n4. Dotted line QHSE vers les régions, sans règle d'arbitrage\n5. Pyramide : départs à la retraite sur la supervision — hors schéma\n\nCe schéma n'est pas un benchmark. C'est un objet de cadrage."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Prendre l'organigramme officiel pour l'organisation réelle. Proposer de « tout centraliser » ou « tout décentraliser » en une phrase. Oublier l'intérim et la sous-traitance dans un effectif de services. Diagnostiquer le CSE à la place du juriste. Dessiner une cible le jour du kick-off."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le DG est aussi « directeur Facility par intérim », la gouvernance est personnelle, pas institutionnelle : le risque, c'est le jour où il n'est plus là. Si une région est une ancienne société acquise, elle a souvent son SIRH et son climat : le traiter comme les autres sans le dire fausse le diagnostic. En cas de projet touchant l'emploi, vous ne calculez pas un délai d'instance : vous signalez, le client vérifie avec son conseil."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du schéma Nova : (1) trois questions de gouvernance à poser au DRH dès le cadrage ; (2) un signe de RH fragmentée ; (3) ce que vous refusez de conclure sur les instances."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Qui autorise une embauche locale (RRH, directeur de région, DRH, DAF) ? Qui tranche un conflit QHSE × région ? Qui porte les vacants d'exploitation, et depuis quand ?\n2. Cinq RRH + process non unifiés + SIRH partiel + recrutement local parallèle au groupe = RH fragmentée, à documenter par faits (trois process d'embauche différents, reporting ETP tardif).\n3. Vous refusez de conclure « le CSE doit être informé avant telle date » : vous n'êtes pas juriste, vous n'inventez pas le calendrier. Vous notez que tout scénario d'organisation cible devra être relu sous l'angle social par le client, textes à l'appui."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Stratégie, structures et organigramme",
          "description": "Vérifier que vous reliez stratégie et Workforce, que vous distinguez PESTEL et SWOT, et que vous lisez une structure et une gouvernance.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage autonome de missions de conseil complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Stratégie, structures et organigramme",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Dans une mission W&O chez Nova, à quoi sert d'abord une lecture de stratégie ?",
                "question_type": "single_choice",
                "options": [
                  "A. À produire douze slides de vision pour ouvrir le rapport",
                  "B. À relier « où le groupe veut gagner » aux capacités humaines et organisationnelles nécessaires",
                  "C. À remplacer le COMEX dans le choix des offres et des clients",
                  "D. À justifier un benchmark salarial inventé"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La stratégie, pour le W&O, est une question de capacités : métiers, sites, RH. Ce n'est ni un décor, ni un mandat pour décider à la place du COMEX, ni un prétexte à faux benchmark."
              },
              {
                "question": "Quelle distinction est la plus juste entre PESTEL et SWOT ?",
                "question_type": "single_choice",
                "options": [
                  "A. PESTEL = forces internes ; SWOT = uniquement le légal",
                  "B. PESTEL lit l'environnement externe en six familles ; SWOT synthétise interne (S/W) et externe (O/T) après des faits",
                  "C. SWOT se fait avant tout fait, PESTEL après la cible d'organisation",
                  "D. Les deux autorisent à inventer un délai d'instance à 1 200 salariés"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "PESTEL est externe. SWOT synthétise interne et externe, après des faits. Ni l'un ni l'autre n'autorise un délai légal inventé."
              },
              {
                "question": "Nova a un siège fonctionnel, des opérations par métier et par région, une RH locale non unifiée. Quelle lecture est la plus honnête ?",
                "question_type": "single_choice",
                "options": [
                  "A. C'est une organisation agile, donc sans chef",
                  "B. C'est une matrice pure, donc deux chefs partout",
                  "C. C'est un hybride (fonctionnel au siège, divisionnel en ops, RH fragmentée) à décrire avant toute cible",
                  "D. Il faut coller des squads sur les 1 200 personnes dès la semaine 1"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Beaucoup d'ETI de services sont hybrides. Le junior décrit l'existant. Agile n'est pas l'absence de chef. Squads sur 1 200 sites n'est pas un cadrage."
              },
              {
                "question": "Un expert QHSE est en dotted line vers huit régions, sans règle d'arbitrage. Quel est le risque principal ?",
                "question_type": "single_choice",
                "options": [
                  "A. Aucun : le pointillé suffit toujours",
                  "B. Matrice informelle : temps, autorité et conflits non tranchés",
                  "C. C'est une structure par processus, donc le délai client s'améliore tout seul",
                  "D. Cela centralise automatiquement la GEPP"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Sans règle d'arbitrage, le dotted line est une matrice informelle, pas une gouvernance. Ce n'est ni un flux processus, ni une GEPP."
              },
              {
                "question": "L'organigramme officiel de Nova ignore trois vacants, un rattachement de fait et de l'intérim. Que livrez-vous en cadrage ?",
                "question_type": "single_choice",
                "options": [
                  "A. Une organisation cible dès le mercredi",
                  "B. Le schéma officiel, sans annotation, pour ne pas froisser le DRH",
                  "C. Un organigramme de travail lacunaire, annoté (vacants, hors schéma, questions de gouvernance), pas une cible",
                  "D. Un calendrier d'information du CSE inventé à partir du seuil de 1 200 salariés"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "On annote l'existant, on ne le prend pas pour argent comptant, on ne dessine pas la cible au cadrage, on n'invente pas la procédure d'instances."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 2,
      "title": "Méthode de diagnostic organisationnel",
      "description": "Cadrer un diagnostic MECE, collecter sans biaiser (entretiens, ateliers, documents), puis synthétiser process, RACI et irritants — cas Groupe Nova Services.",
      "lessons": [
        {
          "title": "MECE, arbre de problème et cadrage du diagnostic",
          "description": "Transformer un symptôme (« on a du turnover ») en question, en arbre MECE et en note de cadrage d'une page.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous distinguez un symptôme, une question de diagnostic et une solution. Vous savez poser un découpage MECE, dessiner un arbre de problème à deux niveaux, et rédiger une note de cadrage d'une page (périmètre, hors périmètre, hypothèses, livrable, délai) sans vous prendre pour le décideur."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "MECE (Mutually Exclusive, Collectively Exhaustive) désigne un découpage dont les branches ne se chevauchent pas et qui, ensemble, couvrent la question posée. Ce n'est pas un slogan de cabinet : c'est un outil contre le double compte et le trou. Si vos axes sur le turnover sont « management, salaires, management et climat », vous chevauchez. Si vous oubliez retraites, fins de CDD, mobilité interne et erreur de mesure, vous n'êtes pas exhaustif sur les sorties.\n\nL'arbre de problème (issue tree) part d'une question, jamais d'un moyen. Question utile : « Pourquoi l'agence Ouest de Nova Services peine-t-elle à tenir les effectifs des métiers en tension ? » Question pauvre : « Comment déployer un SIRH ? » La seconde suppose la solution. L'arbre décompose la première en branches exclusives — volume des sorties, difficultés d'entrée, allocation interne, qualité de la donnée — puis en hypothèses testables.\n\nLe cadrage d'un diagnostic junior tient en une page : question, périmètre, hors périmètre, hypothèses, sources, personnes à voir, livrable, délai. Sans cadrage vous collectez tout. Trop étroit, vous ratez la pyramide des âges. À Nova Services (1 200 salariés, fictif), « on a un problème de turnover » n'est pas une question MECE. Votre métier est de transformer le symptôme en arbre, puis de dire ce que vous n'investiguez pas dans le temps imparti."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès le premier échange avec le sponsor, écrivez dans cet ordre, avant tout recueil massif.\n\n1. Recueillez le symptôme en une phrase, avec un fait si possible (volume, délai, plainte), pas un jugement (« les managers sont nuls »).\n2. Reformulez une question qui commence par pourquoi / dans quelle mesure / où, et qui ne contient pas le moyen.\n3. Posez 3 à 5 branches MECE de premier niveau. Testez : une preuve peut-elle tomber dans deux branches ? Une cause évidente est-elle orpheline ?\n4. Sous chaque branche, 2 à 4 hypothèses testables, chacune liée à une source (fichier, entretien, atelier, document).\n5. Tranchez le hors périmètre par écrit : ce que cette vague ne fera pas (juridique, SIRH, plan social, autre site).\n6. Faites viser la page par le sponsor. Vous ne démarrez pas dix entretiens sur un arbre non partagé.\n\nContrôle : si la question tient dans un verbe d'action (« mettre en place », « digitaliser »), ce n'est pas un cadrage de diagnostic, c'est un avant-projet de solution."
            },
            {
              "block_type": "callout",
              "content": "Le consultant junior n'est ni juriste ni DRH. Un cadrage qui touche GEPP, CSE, restructuration ou licenciements s'arrête aux principes et renvoie à Légifrance et à l'avis social de l'entreprise. Vous n'inventez pas un délai légal. Les chiffres de Nova Services dans ce parcours sont pédagogiques et fictifs."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Comité RH de Nova Services. La DRH : « Il nous faut un plan de rétention et un SIRH d'ici six mois, le turnover explose. » Sans cadrage, un junior commande un benchmark, un autre ouvre un questionnaire à 1 200 personnes, un troisième promet un module SIRH. Trois semaines plus tard : 40 slides, zéro message.\n\nLe même brief, tenu. Symptôme : les sorties sur trois métiers en tension de l'agence Ouest préoccupent le COMEX ; le chiffre groupe n'est pas encore fiabilisé. Question : dans quelle mesure les sorties 2025 de ces métiers s'expliquent-elles par des départs évitables, par la pyramide (retraites), par l'entrée trop lente, ou par une donnée mal définie ? Hors périmètre de la vague : choix d'un SIRH, négociation GEPP, plan de réorganisation. Hypothèses à tester : définition du turnover instable ; pyramide âgée sur deux métiers ; délais d'embauche ; irritants de process entre agence et RH siège. Livrable : note de 8 pages + 12 slides, trois semaines, pas un plan de transformation."
            },
            {
              "block_type": "code",
              "content": "CADRAGE DIAGNOSTIC — 1 page (Nova Services, fictif)\nSponsor / date : .....................\nSymptôme (fait, pas de jugement) :\n  ................................................\nQuestion de diagnostic (sans le moyen) :\n  ................................................\nBranches MECE (3 à 5) :\n  1. .............................................\n  2. .............................................\n  3. .............................................\nHypothèses testables (branche → source) :\n  ................................................\nPérimètre : population / sites / process / horizon\nHors périmètre de CETTE vague :\n  ................................................\nLivrable + délai :\n  ................................................\nCe que le junior ne tranche pas : avis social, GEPP, licenciements, choix d'éditeur."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Partir de la solution du plus haut hiérarchique (« il nous faut un SIRH ») et appeler cela un diagnostic. Empiler des axes qui se recoupent pour « faire complet ». Oublier l'erreur de mesure comme branche. Cadrer « tout le groupe, tous les process, toutes les années » en trois semaines. Promettre un plan d'action avant d'avoir une question. Inventer un « turnover de marché » pour justifier le cadrage. Traiter un sujet CSE / restructuration comme un exercice Excel."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "En PME, le sponsor est souvent le dirigeant : la question se mélange à la solution ; votre valeur est l'arbre d'une page, pas un dispositif de 40 entretiens. En ETI multi-sites, le hors périmètre (quels établissements) est le vrai combat. En filiale d'un groupe, le siège a parfois déjà un arbre : vous le testez, vous ne le recopiez pas. Si un cabinet a déjà produit un diagnostic il y a 18 mois, vous partez des écarts, pas d'une page blanche."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "La directrice d'une BU fictive de Nova Services (220 personnes) vous dit : « On veut une réorganisation et un coaching des managers, le climat est mauvais et les gens partent. » En huit à dix lignes : (1) le symptôme possible, (2) une question de diagnostic sans moyen, (3) trois branches MECE, (4) deux éléments de hors périmètre à faire viser."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Symptôme possible : des sorties constatées et/ou un climat dégradé remonté — à vérifier par des faits (volume, métiers, motifs), pas à inventer. Ce n'est pas encore « le management est mauvais ». Question sans moyen : pourquoi les sorties et les irritants se concentrent-ils sur cette BU, et dans quelle mesure tiennent-ils à l'organisation du travail, aux trajectoires, à l'encadrement ou à la mesure ? Pas « comment réorganiser » ni « quel coaching ». Branches MECE possibles : (a) volume et nature des sorties (évitables / structurelles / data) ; (b) organisation du travail et process ; (c) management et conditions d'exercice — à condition de ne pas recouper (a) et (c) sur les mêmes preuves. Autre découpage acceptable : entrée / sortie / allocation interne / qualité de donnée. Hors périmètre à faire viser : coaching individuel nommé, organigramme cible déjà dessiné, plan social, choix d'outil. Vous n'affirmez pas que la réorganisation est la bonne réponse : vous empêchez qu'on la confonde avec le diagnostic."
            }
          ],
          "position": 0
        },
        {
          "title": "Collecter : entretiens, ateliers, documents",
          "description": "Recueillir des preuves triangulées sans biaiser l'échantillon ni transformer un verbatim en constat.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous constituez un plan de collecte (entretiens, ateliers, documents, données) aligné sur l'arbre. Vous savez rédiger un guide d'entretien, choisir un échantillon, animer un atelier d'irritants, et trianguler. Vous refusez de conclure sur trois mécontents ou sur un seul fichier."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un diagnostic Workforce & Organization croise quatre sources : entretiens, ateliers courts, documents (dans le mandat) et données RH. Une seule source crée un angle mort. Les entretiens donnent des mécanismes, pas un taux. Les données donnent un volume, pas un pourquoi. Les documents disent la règle écrite, pas la règle vécue. L'atelier fait émerger des irritants partagés, à condition de ne pas en faire un tribunal.\n\nL'échantillon est déjà une hypothèse. Si vous ne voyez que les personnes que le sponsor vous « offre », vous confirmez son récit. Vague courte chez Nova : DRH, deux managers de proximité, deux opérationnels, une RH de terrain, un contrôleur ou data — et un représentant du personnel seulement si le mandat et l'entreprise le prévoient. Vous ne contournez pas le dialogue social.\n\nLe guide d'entretien suit les hypothèses. On part d'un fait (« racontez un départ récent »), jamais d'une question inductive. Un verbatim n'est pas un constat : il faut deux types de sources, ou une donnée plus un récit convergent. Vous promettez une restitution non nominative, pas un anonymat irréaliste. Le junior n'est pas enquêteur disciplinaire."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant le premier rendez-vous, produisez une page « plan de collecte ».\n\n1. Pour chaque hypothèse de l'arbre : quelle source, qui, quel document, quel champ de fichier.\n2. Liste d'entretiens (nom, rôle, 45 minutes, hypothèses visées). 8 à 12 entretiens tiennent une vague junior de trois semaines ; 40 entretiens ne tiennent pas.\n3. Un atelier irritants de 90 minutes, 6 à 10 personnes du même niveau hiérarchique (ne mélangez pas N+2 et opérationnels si la parole se taira).\n4. Une demande documentaire bornée : organigramme, procédures des 3 process du périmètre, derniers reportings effectifs, pas « tout le disque RH ».\n5. Règles d'écriture : notes datées, distinction fait / hypothèse / citation. Pas de nom dans les slides.\n6. Triangulation en fin de chaque jour : qu'est-ce qui est confirmé par deux sources ? Qu'est-ce qui reste une piste ?\n\nContrôle : vous n'envoyez pas un questionnaire à 1 200 salariés « pour avoir de la data » sans cadrage, sans finalité, sans regard protection des données. Le junior signale le sujet, il ne rédige pas une analyse d'impact à la place du DPO."
            },
            {
              "block_type": "callout",
              "content": "Protection des données et dialogue social : principes et prudence, pas d'invention de délai ou d'obligation. Un fichier nominatif d'entretiens sur une clé personnelle n'est pas un livrable. En cas de doute (enquête, CSE, données de santé), vous escaladez vers le manager de mission et les fonctions habilitées de l'entreprise. Vérifier Légifrance / avis social. Vous n'êtes pas juriste."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services, agence Ouest. Le sponsor vous donne trois noms : ses deux adjoints et la responsable RH siège, « ils connaissent le sujet ». Le junior accepte, recueille un récit unique : « les jeunes partent pour le salaire ». L'arbre n'est plus testé, il est illustré.\n\nLe même plan, tenu : vous ajoutez un manager d'équipe terrain, deux conseillers, le gestionnaire RH qui saisit les sorties, le contrôleur qui produit le reporting. En entretien, le gestionnaire montre que « turnover » mélange retraites, fins de CDD et démissions. L'atelier irritants fait sortir le délai d'embauche et le double saisie siège / agence, pas seulement la rémunération. Le document « procédure recrutement » date de 2019 et ne décrit pas le réel. La donnée et les récits se recoupent : vous avez un constat, pas une collection de doléances."
            },
            {
              "block_type": "code",
              "content": "PLAN DE COLLECTE — vague 3 semaines (Nova, fictif)\nHypothèse              Entretien          Atelier     Document / data\nDéfinition turnover    Gest. RH + CG      —           Fichier sorties, règles de calcul\nPyramide / retraites   Manager métier     —           Âges, métiers, départs 24 mois\nDélai d'embauche       Recrutement + mgr  Irritants   Dates besoin → arrivée (si dispo)\nProcess double saisie  RH terrain         Irritants   Procédure vs réel\nClimat / management    2 opérationnels    Irritants   Pas un score inventé\n\nGUIDE 45 MIN (structure)\n0. Cadre : mandat, restitution non nominative, hors enquête disciplinaire\n1. Rôle et parcours dans l'équipe\n2. Fait récent lié à l'hypothèse (un départ, une embauche, un incident de process)\n3. Qui fait quoi aujourd'hui (sans demander « le RACI officiel »)\n4. Ce qui bloquerait si on ne changeait rien 6 mois\n5. Ce que vous ne savez pas / ce qu'il faudrait mesurer\nInterdit : question inductive, diagnostic déjà écrit, promesse d'anonymat irréaliste."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "N'interviewer que le comité de direction. Transformer l'atelier en vote sur la solution. Copier des verbatim nominatifs dans une slide COMEX. Conclure sur un unique fichier Excel non défini. Envoyer un Google Form à tout le groupe sans finalité. Promettre que « rien ne remontera ». Interroger sur la santé, le syndicat ou la vie privée. Prendre le silence d'un opérationnel en présence de son N+2 pour un accord."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Site distant : 4 visios bien préparées valent mieux que 12 appels improvisés ; une journée terrain reste utile pour voir le process réel. Population de nuit ou terrain : ateliers courts en début ou fin de poste, pas un créneau siège. Cabinet : le client choisit souvent l'échantillon — vous documentez le biais. S'il existe des instances représentatives, vous ne les « oubliez » pas par commodité : vous demandez au sponsor le cadre, vous n'inventez pas la règle."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "On vous demande de « faire 5 entretiens rapides avec les N+1 de l'agence Ouest, ça suffira ». En six lignes : (1) le biais, (2) deux profils à ajouter, (3) une question d'ouverture non inductive, (4) ce que vous écrivez au sponsor si un verbatim accable nommément un manager."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Biais : échantillon de seuls encadrants, du même niveau, choisis pour confirmer le récit hiérarchique ; les opérationnels, la RH de saisie et la data absents. Profils à ajouter : au moins un opérationnel du métier en tension, plus la personne qui produit le chiffre de turnover (gestionnaire ou contrôleur). Question d'ouverture : « Pouvez-vous me raconter le dernier départ dans votre équipe, de la première alerte jusqu'au dernier jour ? » — pas « Vous confirmez que c'est un problème de salaire ? ». Verbatim accusateur : vous ne le mettez pas nominativement dans une slide ; vous le reformulez en piste (« plusieurs récits font état d'un goulet d'arbitrage sur les embauches ») et vous le triangulez. Vous le signalez à votre manager de mission si cela sort du diagnostic (harcèlement, alerte). Pourquoi : collecter n'est pas instruire."
            }
          ],
          "position": 1
        },
        {
          "title": "Diagnostic orga : process, RACI, irritants, synthèse",
          "description": "Décrire le réel (process, rôles), qualifier les irritants, puis écrire une synthèse actionnable — pas une liste de 40 constats.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 9,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous cartographiez un process as-is en étapes et acteurs, vous posez un RACI de diagnostic (pas un organigramme cible), vous distinguez irritant, cause et symptôme, et vous rédigez une synthèse de 5 messages maximum, chacun avec preuve et « so what »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le diagnostic d'organisation junior n'est pas un Target Operating Model. Il répond : qui fait quoi aujourd'hui, où le travail se perd, où les rôles se chevauchent ou se vident. Trois objets suffisent.\n\nLe process as-is est la suite d'étapes et d'acteurs telle qu'elle est vécue, pas telle qu'elle est écrite. Chez Nova, « remplacer un départ » traverse manager, agence, RH siège, recrutement, parfois finance. Vous nommez l'activité (valider le remplacement, geler le brief, saisir l'entrée). Ce n'est pas encore un SIPOC — ce niveau vient plus loin dans le parcours.\n\nLe RACI de diagnostic photographie le réel : Responsible (fait), Accountable (un seul, rend des comptes), Consulted, Informed. Deux A ou zéro A sur une décision, c'est un constat. Une case N-1 peut être A de fait. Vous ne redessinez pas encore la cible.\n\nL'irritant (double saisie, délai, rework) n'est pas une cause racine par magie : vous le collez à une étape et à une case RACI. La synthèse n'est pas l'inventaire : cinq messages max, chacun constat + preuve + conséquence + piste. « Fusionner les équipes » trop tôt saute l'étape. « Il y a des irritants » n'aide pas le sponsor."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Pour le process prioritaire du cadrage (un seul, pas dix) :\n1. Faites raconter un cas réel de bout en bout (un départ, une embauche) à deux acteurs différents. Notez les divergences : elles sont le diagnostic.\n2. Écrivez 5 à 8 étapes, une ligne chacune : entrée, activité, sortie, acteur. Pas un roman.\n3. Posez le RACI sur 4 à 6 décisions clés (valider le remplacement, choisir le profil, saisir le dossier, communiquer au site). Une seule lettre A par décision.\n4. Recueillez les irritants (atelier + entretiens), max 10, chacun collé à une étape. Classez : délai, qualité, charge, clarté de rôle. Pas un fourre-tout « digital ».\n5. Pyramide de synthèse : 1 message central, 3 à 5 constats, preuves en annexe. Chaque constat répond à une branche de l'arbre. Si un constat ne répond à aucune branche, ou bien l'arbre était faux, ou bien le constat est hors cadrage — dites-le.\n6. Relisez avec la question : que devrait décider le sponsor après ces 12 slides ? Si la réponse est « rien, on a décrit », la synthèse est inachevée.\n\nContrôle : vous n'écrivez pas « conforme au Code du travail » sur un process. Vous notez un point d'attention et vous renvoyez aux habilités."
            },
            {
              "block_type": "callout",
              "content": "RACI, process et irritants sont des outils de management, pas des normes légales. Un RACI ne remplace pas une délégation de pouvoir ni un avis social. Données Nova : pédagogiques, fictives. Pas de benchmark « d'irritants moyens du marché »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services, process « remplacement d'un conseiller client, agence Ouest ». Cas réel raconté par le manager : 11 semaines entre le départ et l'arrivée, trois allers-retours de fiche de poste avec le siège, une saisie dans un tableur d'agence puis une resaisie RH. Le RACI de diagnostic : le manager se croit Accountable du profil ; la RH siège se croit Accountable du même objet ; le recrutement est Responsible sans pouvoir figer le brief. Irritants : double saisie, validation fantôme, absence de délai cible écrit. Message central de synthèse : le goulet n'est pas « un manque de candidats en général », c'est un process de remplacement sans Accountable unique et sans définition stable du besoin — à relier, plus tard, aux chiffres d'entrée et de turnover (module analytique), pas à un plan SIRH improvisé. Piste : clarifier A et R sur la validation du remplacement, mesurer le délai sur 10 cas. Ce n'est pas encore une réorganisation."
            },
            {
              "block_type": "code",
              "content": "PROCESS AS-IS — remplacement conseiller (Nova Ouest, fictif)\nEtape              Acteur vécu        Sortie              Irritant typique\n1. Alerte départ   Manager            Mail / oral         Pas de déclencheur unique\n2. \"Fiche\"         Manager + RH siège Document instable   3 versions, pas de gel\n3. Feu vert        ? (A flou)         Oui / attente       Deux A de fait\n4. Sourcing        Recrutement        Shortlist           Brief qui bouge\n5. Choix           Manager            Oral                Pas de critère écrit\n6. Saisie entrée   Agence puis siège  2 fichiers          Double saisie\n7. Arrivée         Agence             J1                  Parcours J1 variable\n\nRACI DIAGNOSTIC (réel, pas cible)     R   A   C   I\nValider le remplacement                   ?       (trou ou double A)\nGeler le brief métier                 x           x\nChoisir le candidat                   x   ?       x\nSaisir le dossier                         x   x\nInformer l'équipe                     x           x\n\nSYNTHESE — 5 LIGNES MAX\n1. Message central (une phrase) :\n2. Constat + preuve 1 :\n3. Constat + preuve 2 :\n4. Conséquence opérationnelle :\n5. Piste (pas une décision) :\nHors synthèse : liste brute des 10 irritants → annexe."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Photographier le process officiel et l'appeler as-is. Mettre deux A sur une ligne « pour ne fâcher personne ». Empiler 40 irritants sans les coller à une étape. Transformer la synthèse en organigramme cible. Inventer un « span of control idéal » ou un benchmark de délai. Écrire que le process est « illégal » sans habilitation. Livrer un diagnostic qui est déjà la solution du sponsor."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Process très informel (petite équipe) : dessinez quand même les 5 étapes d'un cas réel, le RACI révélera que tout passe par une personne. Process outillé (SIRH) : l'outil n'est pas le process ; notez les contournements (tableur parallèle). Multi-sites : un as-is par site pilote, pas une moyenne imaginaire. Si le sujet glisse vers un projet de réorganisation ou d'instance, vous recadrez : diagnostic de fonctionnement, pas conception sociale — avis à faire instruire ailleurs."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sur le process « validation d'un remplacement » ci-dessus, le manager et la RH siège se disent tous les deux Accountable. En sept lignes : (1) le constat RACI, (2) l'irritant probable, (3) une preuve à aller chercher, (4) un message de synthèse d'une phrase, (5) une piste qui n'est pas « déployer un SIRH »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Constat : deux Accountable de fait sur la même décision — le RACI réel est cassé (ou plutôt : il n'existe pas). Irritant probable : délais et rework de fiche, chacun attendant l'autre ou défaisant la décision de l'autre. Preuve : 8 à 10 cas de remplacement avec dates (alerte → feu vert → brief gelé → arrivée) et, en entretien, qui a dit « oui » en dernier. Message : « Le délai de remplacement sur le métier X n'est pas d'abord un problème d'outil : la décision de remplacer n'a pas d'Accountable unique. » Piste : désigner un A, écrire un délai cible interne, mesurer 10 cas — pas un déploiement SIRH. Pourquoi : l'outil analogique d'un process sans A produit les mêmes allers-retours. Si votre copie a prescrit une réorganisation ou un coaching, elle a sauté la synthèse."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Méthode de diagnostic",
          "description": "Vérifier cadrage MECE, collecte non biaisée, RACI de diagnostic et synthèse actionnable.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 5,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage autonome de missions de conseil complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Méthode de diagnostic",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Un sponsor déclare : « Il nous faut un SIRH pour faire baisser le turnover. » En cadrage de diagnostic, cette phrase est d'abord :",
                "question_type": "single_choice",
                "options": [
                  "A. Une question MECE, parce qu'elle nomme un indicateur et un moyen.",
                  "B. Un hors périmètre, car le SIRH est un outil.",
                  "C. Une solution proposée (un moyen), pas encore une question de diagnostic.",
                  "D. Un arbre de problème complet, à condition d'ajouter le climat."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le SIRH est un moyen. La question serait du type : pourquoi les sorties / où se situe l'écart. Ajouter « le climat » ne crée pas un arbre. Le hors périmètre se décide à l'écrit, il ne se déduit pas du mot outil."
              },
              {
                "question": "Parmi ces découpages sur « pourquoi les sorties augmentent », lequel est le plus MECE pour une vague courte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Management, salaires, management et climat social.",
                  "B. Volume et nature des sorties (y compris qualité de la donnée), difficultés d'entrée, allocation interne.",
                  "C. SIRH, coaching, réorganisation.",
                  "D. Ce que le COMEX pense, ce que les syndicats pensent, ce que LinkedIn dit du marché."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "B sépare des mécanismes testables sans trop se recouvrir. A chevauche. C est une liste de solutions. D est une liste d'opinions, pas un arbre. On n'invoque pas un benchmark marché inventé."
              },
              {
                "question": "Le sponsor vous « offre » trois adjoints pour tous les entretiens. Quel est le risque principal ?",
                "question_type": "single_choice",
                "options": [
                  "A. Aucun : le commanditaire connaît les bons interlocuteurs.",
                  "B. Un échantillon biaisé qui illustre le récit du siège au lieu de tester l'arbre.",
                  "C. Un manquement automatique au Code du travail, car 3 entretiens sont insuffisants.",
                  "D. Un atelier devient obligatoire à la place des entretiens."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le biais d'échantillon est le risque. Aucun article n'impose un nombre magique d'entretiens. L'atelier ne remplace pas les entretiens ; il complète. Le junior documente le biais et propose d'autres profils."
              },
              {
                "question": "Sur une décision « valider le remplacement », le manager et la RH siège se disent tous deux Accountable. En RACI de diagnostic, vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Laissez deux A « pour ne fâcher personne », c'est du réel.",
                  "B. Constatez un RACI cassé (deux A ou A flou) et cherchez les preuves de délai / rework.",
                  "C. Fusionnez immédiatement les équipes pour n'avoir qu'un A.",
                  "D. Écrivez que le process est illégal tant qu'il n'y a pas un unique A."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le diagnostic photographie le double A comme un constat, puis le relie à des preuves. Il ne redessine pas l'organisation (C) et n'invente pas une illégalité (D). Deux A « assumés pour la paix » ne sont pas un RACI lisible."
              },
              {
                "question": "Quelle synthèse est recevable en fin de vague junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. La liste brute des 40 irritants, pour être exhaustif.",
                  "B. « Il faut déployer le SIRH au T2 », puisque le sponsor le demandait.",
                  "C. Un message central + quelques constats prouvés, une conséquence opérationnelle et une piste — pas une décision déguisée.",
                  "D. Un Target Operating Model complet, sinon ce n'est pas du conseil."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "La synthèse est une pyramide courte, sourcée, qui permet au sponsor de décider plus tard. L'inventaire n'est pas un message. Recopier la solution du sponsor n'est pas un diagnostic. Le TOM n'est pas le livrable de cette méthode courte."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 3,
      "title": "Fonction RH, indicateurs et Excel de conseil",
      "description": "Situer la fonction RH, calculer les indicateurs d'effectifs (ETP, turnover, pyramide) sur un extrait fictif de 12 personnes, puis manier RECHERCHEX, SOMME.SI.ENS, TCD et contrôles — cas Groupe Nova Services.",
      "lessons": [
        {
          "title": "La fonction RH : processus, acteurs, stratégie",
          "description": "Cartographier ce que fait une DRH, ce qu'un consultant W&O touche, et ce qu'il ne décide pas.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 7,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous savez nommer les blocs d'une fonction RH, relier chacun à un livrable de mission W&O, et dire où s'arrête le junior (paie, social, SIRH, décision d'embauche)."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une fonction RH n'est pas « les gens ». C'est un portefeuille de processus : administration du personnel, paie (souvent hors mission W&O), recrutement, formation, développement, mobilité, rémunération, performance, relations sociales, SIRH et données, stratégie RH. Chez Groupe Nova Services (1 200 salariés fictifs), ce portefeuille est fragmenté : cinq RRH, un DRH groupe, des process d'embauche différents, un SIRH partiel. Le consultant W&O ne devient pas le RRH. Il lit comment le travail RH est organisé, ce qu'il produit comme donnée, et ce qui bloque une décision d'effectifs ou d'organisation.\n\nDeux lectures, toujours. Processus : qui recrute, qui autorise, qui forme, qui parle aux instances. Données : ce que le SIRH sait vraiment (contrats, heures, sites, métiers) et ce qu'il ignore (compétences, motifs de départ fiables). Sans la seconde, le SWP du module suivant est un dessin.\n\nLa stratégie RH, pour ce parcours, est l'alignement entre la stratégie d'entreprise (croître en Facility, industrialiser les plateaux) et les leviers humains (attirer, développer, retenir, organiser). Ce n'est ni un catalogue d'outils, ni un plan social. Le junior propose des options. Le client décide. Le juriste et le RRH social portent le cadre des instances."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "En cadrage d'une mission W&O, une page « fonction RH » :\n1. Organigramme RH réel (DRH, RRH, paie, formation, recrutement) — pas le slide officiel seul.\n2. Pour six processus (recruter, intégrer, former, évaluer, rémunérer, dialoguer) : qui fait, avec quel outil, quelle donnée sort.\n3. Ce que le SIRH contient (effectifs, ETP, dates, métiers) et ce qu'il ne contient pas.\n4. Instances : existence, pas calendrier inventé — vérifier le texte / avis social.\n5. Trois irritants RH déjà entendus, sourcés, datés.\n6. Ce que cette mission ne fera pas : paramétrer la paie, choisir l'éditeur SIRH, rédiger un accord.\nVous sortez une carte, pas un audit social."
            },
            {
              "block_type": "callout",
              "content": "Les processus et volumes RH de Nova sont pédagogiques. Un junior n'est pas gestionnaire de paie, ni DS, ni DPO. Sur le social et le RGPD, il signale et il vérifie, il n'invente pas une obligation."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova : le DRH dit « on a une stratégie RH, on digitalise ». En entretien, un RRH recrute sur tableur, un autre sur un ATS local, la paie est chez un prestataire, le SIRH ne sort pas d'ETP fiables par métier. Sans lecture process+donnée, le junior promet un SWP groupe pour vendredi. Avec lecture : le premier livrable est un socle d'indicateurs sur un périmètre cadré, et une carte de la fonction — pas un slogan digital."
            },
            {
              "block_type": "code",
              "content": "CARTE FONCTION RH — Nova Services (fictif, 1 200 p.)\nBloc                 Ce que W&O utilise              Ce que le junior ne fait pas\nAdmin / paie         dates, contrats, heures         paramétrer un bulletin\nRecrutement          délais, canaux, vacances        signer une embauche\nFormation            volumes, métiers critiques      acheter un catalogue\nMobilité             passerelles réelles             promettre une reconversion\nRémunération         masses agrégées                 publier une grille « marché »\nPerformance          si elle existe et est utilisée  noter les managers\nSocial               existence d'instances           calendrier CSE inventé\nSIRH / data          extract, définitions            « on a tout dans le cloud »\nStratégie RH         alignement offre / capacités    décider à la place du COMEX"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Confondre DRH et mission de conseil. Auditer la paie. Promettre un SIRH. Inventer un accord GEPP. Traiter « la RH » comme un seul interlocuteur alors qu'il y a cinq RRH. Lancer un questionnaire à 1 200 personnes au jour 2."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Paie externalisée : vos extraits passent par un prestataire — délai et contrat de données, pas un export magique. Groupe multi-BU : une « stratégie RH » siège peut n'avoir aucun relais local. Très petite RH (3 personnes pour 1 200) : le diagnostic porte d'abord sur la charge, pas sur un modèle Ulrich complet."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Nova, cinq RRH + DRH, SIRH partiel. (1) Trois questions de cadrage à poser au DRH sur la fonction. (2) Un livrable W&O que vous refusez cette semaine. (3) Une donnée sans laquelle vous ne calculez pas de turnover groupe."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Qui autorise une embauche locale ? Quel extract SIRH existe déjà (champs, fraîcheur) ? Comment les cinq RRH se répartissent recrutement, social, paie-liaison ?\n2. Vous refusez le choix d'un éditeur SIRH, un accord, un message CSE, un audit de bulletins.\n3. Sans définition (CDI seulement ? y compris CDD et alternants ?) et sans départs + effectif moyen sur la même population, vous ne calculez pas un turnover groupe. Vous le dites."
            }
          ],
          "position": 0
        },
        {
          "title": "Indicateurs d'effectifs : ETP, turnover, pyramide",
          "description": "Définir et calculer headcount, ETP, turnover, absentéisme, ancienneté, pyramide et masse — sur un CSV pédagogique de 12 personnes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 10,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous distinguez tête et ETP, vous calculez un turnover comme départs / effectif moyen, vous lisez une pyramide, et vous refusez un benchmark inventé. Vous reproduisez les calculs sur l'extrait Ouest."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Headcount (HC) = nombre de personnes à une date. ETP pédagogique de ce parcours : une personne à 35 h = 1 ; à 28 h = 0,8. Ne jamais additionner des têtes et des ETP. Un temps partiel compte 1 en HC et 0,8 en ETP.\n\nTurnover (taux de sorties pédagogique) = départs de la période / effectif moyen. Effectif moyen = (HC début + HC fin) / 2, sur la même population. Les retraites sont des départs : si vous les isolez, dites-le (turnover hors retraites). Il n'existe pas un « bon » taux légal unique. Inventer 15 % « de marché services » est une faute.\n\nAbsentéisme : ici, jours d'absence / jours ouvrés théoriques, sur le périmètre. Ancienneté : date d'entrée, pas le feeling. Pyramide : tranches d'âge, puis métiers et sites — une pyramide groupe masque une vague de départs sur les responsables d'exploitation. Masse salariale pédagogique : somme des bruts du périmètre, pas le coût employeur (module finance).\n\nTous les chiffres de l'extrait ci-dessous sont fictifs et pédagogiques. Ils entraînent le calcul. Ils ne décrivent pas Nova réel ni un secteur."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant tout indicateur : population, date, source, définition.\n1. Filtrer le périmètre (site, métier, contrat).\n2. HC à deux dates. ETP = Σ (heures_hebdo / 35) plafonné pédagogiquement à 1 pour 35 h (28/35 = 0,8).\n3. Départs de la période, même filtre.\n4. Turnover = départs / ((HC_début + HC_fin) / 2).\n5. Pyramide : compter par tranche, puis croiser métier.\n6. Étiqueter : constaté vs hypothèse. Interdit : un taux « cabinet » non sourcé.\nContrôle : si HC_fin ≠ HC_début − départs + arrivées, la base est fausse avant tout graphique."
            },
            {
              "block_type": "callout",
              "content": "1 personne 35 h = 1 ETP ; 28 h = 0,8. Turnover = départs / effectif moyen. Pas de taux d'absentéisme légal unique. Données = pédagogiques, pas un benchmark."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le DRH Nova dit « turnover 30 %, c'est hors marché ». Sans extract, un junior opine. Avec l'extrait Ouest (ci-dessous) : 2 départs, HC début 10, HC fin 9, moyenne 9,5, turnover 21 % sur ce petit périmètre pédagogique. Deux temps partiels 28 h pèsent 0,8 ETP chacun. Le 30 % n'est pas dans la base : c'est une phrase. Vous la recalez ou vous la classez « non sourcée »."
            },
            {
              "block_type": "heading",
              "content": "Extract pédagogique — 12 lignes (Agence Ouest + 1 Est, année N)"
            },
            {
              "block_type": "code",
              "content": "# Nova Services — extract FICTIF 12 personnes — ne pas citer comme réel\n# etp = heures_hebdo / 35\n# statut_n : present_fin | arrivee | depart\nid,prenom,metier,site,contrat,heures_hebdo,etp,age,anc_ans,brut_annuel,statut_n\n1,Alice,Resp exploitation,Ouest,CDI,35,1.00,58,22,42000,present_fin\n2,Bruno,Agent,Ouest,CDI,35,1.00,34,4,24000,present_fin\n3,Chloe,Agent,Ouest,CDI,28,0.80,41,8,19200,present_fin\n4,Djibril,Agent,Ouest,CDD,35,1.00,26,0.4,22000,arrivee\n5,Emma,Agent,Ouest,CDI,35,1.00,29,2,24000,depart\n6,Farid,Agent,Ouest,CDI,35,1.00,45,12,26000,present_fin\n7,Gaelle,Superviseur,Ouest,CDI,35,1.00,61,28,36000,present_fin\n8,Hugo,Agent,Ouest,CDI,35,1.00,23,1,22000,present_fin\n9,Ines,Agent,Est,CDI,35,1.00,38,6,25000,present_fin\n10,Julien,Agent,Ouest,CDI,28,0.80,52,15,20800,present_fin\n11,Karim,Agent,Ouest,CDI,35,1.00,31,3,24000,depart\n12,Lea,Agent,Ouest,CDI,35,1.00,27,2,23000,present_fin\n\nPÉRIMÈTRE PÉDAGOGIQUE « OUEST hors Inès (id 9) »\nPopulation suivie année N = ids 1-8 et 10-12 (11 lignes dans l'extract Ouest)\n  dont 1 arrivée (Djibril) et 2 départs (Emma, Karim)\n\nIdentité : HC_fin = HC_début - départs + arrivées\n  HC_fin Ouest = 9 présents fin (Alice,Bruno,Chloe,Djibril,Farid,Gaelle,Hugo,Julien,Lea)\n  HC_début = HC_fin - 1 arrivée + 2 départs = 9 - 1 + 2 = 10\n  Contrôle : 10 - 2 + 1 = 9  OK\n\nETP fin Ouest (9 présents)\n  7 × 1,00 + 2 × 0,80 (Chloé, Julien) = 7 + 1,6 = 8,6 ETP\n  HC fin = 9  ≠  ETP fin = 8,6   (ne pas les additionner)\n\nEffectif moyen Ouest = (10 + 9) / 2 = 9,5\nDéparts = 2 (Emma, Karim) — retraites dans cet extract : 0\nTurnover Ouest N = 2 / 9,5 = 21,05 %   (arrondi pédagogique 21 %)\n  Ce n'est PAS un benchmark « services » ni un taux légal.\n\nPyramide Ouest présents fin (n = 9)\n  <30 : Hugo 23, Léa 27, Djibril 26     → 3\n  30-44 : Bruno 34, Chloé 41             → 2\n  45-54 : Farid 45, Julien 52           → 2\n  ≥55 : Alice 58, Gaëlle 61             → 2\n  Lecture : 2 / 9 encadrement proche de la retraite (Alice, Gaëlle) — signal métier, pas une loi.\n\nMasse brute présents fin Ouest\n  42000+24000+19200+22000+26000+36000+22000+20800+23000 = 235000 €\n  Masse / HC = 235000 / 9 ≈ 26111 €   (pédagogique, pas un salaire de marché)\n\nInès (Est) est hors périmètre Ouest : un TCD « tous sites » sans filtre fausse le turnover Ouest."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Diviser les départs par le HC de fin seulement. Compter un 28 h comme 1 ETP. Mélanger Ouest et Est. Présenter 21 % comme un benchmark. Oublier les arrivées dans l'identité HC. Confondre masse brute et coût employeur. Inventer un taux d'absentéisme légal."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "CDD et alternants : soit vous les incluez partout, soit nulle part — documentez. Intérim : hors HC salarié, à tracer en annexe. Multi-sites : un turnover groupe peut être « beau » et un site à 21 %. Temps partiel thérapeutique : heures réelles, pas le contrat d'origine, si la donnée existe ; sinon hypothèse étiquetée."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sans recalculer au hasard, à partir du cadre Ouest : (1) ETP de Chloé et d'un 35 h. (2) Identité HC. (3) Turnover. (4) Pourquoi Inès ne doit pas entrer dans ce turnover. (5) Une phrase que vous refusez d'écrire au COMEX."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Chloé 28 h → 28/35 = 0,8 ETP ; un 35 h → 1 ETP.\n2. 10 − 2 + 1 = 9.\n3. 2 / 9,5 = 21,05 % (21 % pédagogique).\n4. Inès est Est : autre site, autre dénominateur.\n5. Vous refusez « le turnover Ouest est 15 points au-dessus du marché » : vous n'avez pas de marché sourcé, seulement 21 % sur un petit extract fictif. Vous dites : « Sur l'Ouest pédagogique, 2 départs pour 9,5 d'effectif moyen, soit 21 %. Échantillon de 9 à 10 têtes : ordre de grandeur à recaler sur l'extract groupe. »"
            }
          ],
          "position": 1
        },
        {
          "title": "Excel de conseil : formules, TCD, contrôles",
          "description": "Nettoyer un extract, écrire RECHERCHEX, INDEX/EQUIV, SOMME.SI.ENS, un TCD, et des contrôles d'identité — exercice et correction.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 10,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous posez une feuille propre (tableau, pas de fusion), vous calculez ETP et indicateurs par formules, vous croisez par TCD, et vous posez des contrôles qui cassent si la base ment. Ce n'est pas une certification Excel."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "En mission, Excel n'est pas un dessin. C'est un modèle que le senior doit pouvoir recaler. Règles : une ligne = une personne ou un mouvement ; un tableau structuré ; pas de fusion ; unités dans l'en-tête ; une feuille « hypothèses » ; une feuille « contrôles ».\n\nFormules utiles (noms français courants — selon version : RECHERCHEX / XLOOKUP, SOMME.SI.ENS, INDEX/EQUIV). RECHERCHEX ramène un attribut (site, métier) depuis un référentiel. SOMME.SI.ENS additionne brut ou ETP sous plusieurs filtres. INDEX/EQUIV reste un filet si RECHERCHEX n'est pas disponible. Le TCD (tableau croisé dynamique) compte, somme, moyenne par métier × site — il ne remplace pas l'identité HC.\n\nPower Query sert à nettoyer (trim, types, filtres) avant les formules. Ici, vous voyez le résultat attendu en clair : le LMS n'ouvre pas Excel. Vous reproduisez dans votre tableur. Ce parcours n'est pas une certification Microsoft.\n\nLe contrôle vaut plus que le graphique. Identité HC. Somme ETP = Σ heures/35. Pas de doublon d'id. Dates cohérentes. Si un contrôle est rouge, vous n'envoyez pas le slide."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Ordre de production :\n1. Dupliquer l'extract brut (jamais travailler le fichier source).\n2. Tableau : id unique, types (nombres, dates).\n3. Colonne etp = heures_hebdo/35.\n4. Flags : est_ouest, est_present_fin, est_depart, est_arrivee.\n5. SOMME.SI.ENS pour HC, ETP, masse, départs.\n6. Turnover = départs / ((HC_d+HC_f)/2).\n7. TCD métier × statut pour la pyramide (âge en tranches calculées).\n8. Feuille Contrôles : 5 tests vrais/faux.\n9. Graphiques après les contrôles, pas avant.\nVous livrez le fichier + une page « définitions et limites »."
            },
            {
              "block_type": "callout",
              "content": "Le LMS affiche des formules et un CSV. Il n'exécute pas Excel ni Power BI. L'attestation LOU Academy n'est pas une certification Excel / Power BI."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Un junior Nova livre un camembert « 21 % » sans feuille de contrôle. Le senior change un filtre, le 21 % ne bouge pas : chiffre tapé en dur. Le même livrable, tenu : les 21 % viennent de =B12/B13, B12 = SOMME.SI.ENS des départs Ouest, B13 = moyenne HC, et un contrôle affiche VRAI sur l'identité 10−2+1=9."
            },
            {
              "block_type": "heading",
              "content": "Exercice guidé — à coller dans un tableur"
            },
            {
              "block_type": "code",
              "content": "FEUILLE Hypotheses\n  Heures_ETP_1     35\n  Perimetre        Ouest\n  Annee            N   (pédagogique)\n\nFEUILLE Extract  (coller le CSV de la leçon précédente, 12 lignes)\n  + colonne etp        =[@heures_hebdo]/Hypotheses!Heures_ETP_1\n  + colonne est_ouest  =[@site]=\"Ouest\"\n  + colonne f_present  =[@statut_n]=\"present_fin\"\n  + colonne f_depart   =[@statut_n]=\"depart\"\n  + colonne f_arrivee  =[@statut_n]=\"arrivee\"\n  + colonne tranche    =SI([@age]<30;\"<30\";SI([@age]<45;\"30-44\";SI([@age]<55;\"45-54\";\"≥55\")))\n\nFEUILLE Indicateurs (Ouest)\n  HC_fin      =NB.SI.ENS(Extract[site];\"Ouest\";Extract[statut_n];\"present_fin\")\n  ETP_fin     =SOMME.SI.ENS(Extract[etp];Extract[site];\"Ouest\";Extract[statut_n];\"present_fin\")\n  Departs     =NB.SI.ENS(Extract[site];\"Ouest\";Extract[statut_n];\"depart\")\n  Arrivees    =NB.SI.ENS(Extract[site];\"Ouest\";Extract[statut_n];\"arrivee\")\n  HC_debut    =HC_fin-Arrivees+Departs\n  Eff_moyen   =(HC_debut+HC_fin)/2\n  Turnover    =Departs/Eff_moyen\n  Masse_fin   =SOMME.SI.ENS(Extract[brut_annuel];Extract[site];\"Ouest\";Extract[statut_n];\"present_fin\")\n\nRECHERCHEX — ramener le libellé métier depuis un référentiel\n  =RECHERCHEX([@metier];Ref[metier];Ref[famille];\"non trouvé\")\n\nINDEX / EQUIV (filet)\n  =INDEX(Ref[famille];EQUIV([@metier];Ref[metier];0))\n\nTCD 1 : lignes = metier ; valeurs = NB (id) + SOMME (etp) ; filtre site = Ouest, statut = present_fin\nTCD 2 : lignes = tranche ; valeurs = NB ; filtre Ouest present_fin\n  Attendu TCD 2 : <30 → 3 ; 30-44 → 2 ; 45-54 → 2 ; ≥55 → 2\n\nFEUILLE Controles\n  C1 Identité HC     =HC_debut-Departs+Arrivees=HC_fin          → VRAI (10-2+1=9)\n  C2 ETP vs formule  =ETP_fin=8,6                               → VRAI\n  C3 Doublons id     =NBVAL(Extract[id])=NB(UNIQUE(Extract[id])) → VRAI\n  C4 Inès hors Ouest =NB.SI.ENS(Extract[prenom];\"Ines\";Extract[site];\"Ouest\")=0\n  C5 Turnover lié    =Turnover=2/9,5                            → VRAI\nSi C1 faux : vous n'éditez pas le slide. Vous corrigez la base.\n\nPower Query (idée, pas un clic-by-clic certifiant)\n  Importer CSV → types → filtre site → colonne etp = heures/35 → charger\n  Le modèle reste auditable : pas de valeur collée sur un graphique."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Taper 21 % dans la slide. Fusionner des cellules du tableau. Oublier le filtre site. Utiliser RECHERCHEV sans exact. Faire un TCD sur des cellules vides mal typées. Envoyer le fichier nominatif (prénoms) au COMEX. Prétendre être « certifié Excel » via cette leçon."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Fichier 1 200 lignes : mêmes formules, TCD, contrôles — plus Power Query. Si RECHERCHEX n'existe pas (version ancienne) : INDEX/EQUIV. Si le SIRH sort des heures mensuelles : reconvertir en hebdo avant /35, et le documenter. Données personnelles : agrégats pour le client élargi ; nominatif seulement dans l'espace mission, besoin d'en connaître."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Vous construisez le fichier. (1) Écrivez la formule ETP. (2) Donnez HC_début, HC_fin, ETP_fin, turnover. (3) Deux contrôles qui doivent être VRAI. (4) Que livrez-vous au COMEX à la place de la liste des 12 prénoms ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. etp = heures_hebdo/35. Chloé et Julien = 0,8.\n2. HC_début 10, HC_fin 9, ETP_fin 8,6, turnover 2/9,5 ≈ 21 %.\n3. Identité 10−2+1=9 ; ETP_fin=8,6 ; (doublons id = 0).\n4. Au COMEX : tableau agrégé (HC, ETP, turnover, pyramide, masse) + définitions + limites d'échantillon. Pas de nominatif. Pas de « vs marché » inventé. L'extrait 12 lignes est un entraînement ; le groupe 1 200 viendra avec le même mode opératoire, pas avec d'autres formules."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — RH, indicateurs et Excel",
          "description": "Vérifier ETP, turnover, pyramide, discipline Excel et limites du junior.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage autonome de missions de conseil complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — RH, indicateurs et Excel",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle conversion ETP pédagogique est correcte dans ce parcours ?",
                "question_type": "single_choice",
                "options": [
                  "A. 35 h = 1 ETP ; 28 h = 1 ETP aussi, car c'est une tête",
                  "B. 35 h = 1 ETP ; 28 h = 0,8 ETP (28/35)",
                  "C. 35 h = 35 ETP",
                  "D. Le Code du travail impose 0,5 ETP pour tout temps partiel"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Convention pédagogique : 35 h = 1 ; 28 h = 0,8. Une tête n'est pas un ETP. Il n'y a pas de taux 0,5 légal unique pour tout temps partiel."
              },
              {
                "question": "Sur l'Ouest pédagogique : HC début 10, 2 départs, 1 arrivée. Turnover ?",
                "question_type": "single_choice",
                "options": [
                  "A. 2 / 10 = 20 %, en prenant seulement le début",
                  "B. 2 / 9 = 22 %, en prenant seulement la fin",
                  "C. HC fin = 9 ; effectif moyen = 9,5 ; turnover = 2 / 9,5 ≈ 21 %",
                  "D. 30 %, « taux de marché services »"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Identité 10−2+1=9. Moyenne (10+9)/2=9,5. 2/9,5≈21 %. Pas de benchmark inventé. Ni seulement le début, ni seulement la fin."
              },
              {
                "question": "Chloé est à 28 h, Alice à 35 h, toutes deux présentes fin. Combien pèsent-elles en HC et en ETP ?",
                "question_type": "single_choice",
                "options": [
                  "A. 2 HC et 2 ETP",
                  "B. 1,8 HC et 2 ETP",
                  "C. 2 HC et 1,8 ETP",
                  "D. 0,8 HC et 1,8 ETP"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Deux personnes = 2 HC. ETP = 1 + 0,8 = 1,8. On ne mélange pas les unités."
              },
              {
                "question": "Le DRH exige un camembert « vs marché » à partir de l'extrait 12 personnes. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Inventer 15 % de marché pour faire sérieux",
                  "B. Livrer les 21 % Ouest, définitions, limites d'échantillon, sans marché inventé",
                  "C. Envoyer les 12 prénoms au COMEX pour transparence",
                  "D. Refuser tout indicateur jusqu'à Power BI certifié"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On source, on définit, on limite. On n'invente pas un marché. On n'envoie pas le nominatif. Ce parcours n'est pas une certif Power BI."
              },
              {
                "question": "À quoi sert surtout la feuille Contrôles d'un fichier de conseil ?",
                "question_type": "single_choice",
                "options": [
                  "A. À décorer l'annexe",
                  "B. À casser le livrable si l'identité HC ou la somme ETP est fausse, avant tout graphique",
                  "C. À remplacer le SIRH",
                  "D. À justifier un délai CSE"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Les contrôles précèdent les slides. Ils ne remplacent ni le SIRH ni le juriste."
              },
              {
                "question": "Quelle formule ramène une famille de métier depuis un référentiel si RECHERCHEX n'est pas disponible ?",
                "question_type": "single_choice",
                "options": [
                  "A. INDEX/EQUIV (ou INDEX/MATCH)",
                  "B. Un taux de turnover tapé en dur",
                  "C. Un organigramme cible",
                  "D. Une obligation GEPP inventée"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "INDEX/EQUIV est le filet classique. Ni un taux en dur, ni une cible, ni du juridique inventé."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 4,
      "title": "Strategic Workforce Planning",
      "description": "Module central : définir un SWP, poser un horizon, construire un modèle (stock, retraites, turnover, recrutements, mobilité, automatisation, gap) et comparer trois scénarios. Cas : Groupe Nova Services, 1 200 salariés (fictif), métier tendu de 80 techniciens support client. Chiffres pédagogiques.",
      "lessons": [
        {
          "title": "SWP : définition, horizon, ce que ce n'est pas",
          "description": "Distinguer le Strategic Workforce Planning d'un tableau d'effectifs, d'un plan de recrutement et de la GEPP, et choisir un horizon lisible pour un comité.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 10,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "À la fin de cette leçon, vous définissez le SWP en trois questions (demande, offre interne, écart), vous choisissez un horizon, et vous savez ce qu'un consultant junior livre — un modèle étiqueté — et ce qu'il ne décide pas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le Strategic Workforce Planning (SWP) est la méthode de direction qui aligne les personnes disponibles — volume, compétences, lieu, coût — sur la stratégie, à un horizon écrit. Ce n'est pas un export SIRH. Ce n'est pas un plan de recrutement déguisé. Ce n'est pas la GEPP : le SWP est un outil de management ; la GEPP est un cadre français de dialogue social. Les confondre, c'est apporter un gap d'ETP à une négociation, ou un accord à un CODIR.\n\nTrois questions, dans cet ordre. (1) De quoi l'activité aura-t-elle besoin — la demande. (2) Que restera-t-il de l'existant après retraites, turnover, mobilités — l'offre interne. (3) Quel écart, comblé par quels leviers : recruter, former, bouger, automatiser, sous-traiter, ou arrêter une activité. L'automatisation réduit la demande. Elle n'invente pas du stock.\n\nL'horizon n'est pas unique. Douze à dix-huit mois servent le budget et le recrutement. Trois ans est l'horizon pédagogique de ce module, lisible en comité. Cinq ans n'a de sens que si la stratégie tient ; au-delà, vous étiquetez des hypothèses, vous ne prévoyez pas. Chez Nova Services (1 200 salariés, fictif), le métier tendu — 80 techniciens support client — se lit à 3 ans. Tous les chiffres du module sont pédagogiques : ils illustrent des formules, ce ne sont ni un benchmark ni un diagnostic réel."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant d'ouvrir un tableur, écrivez une page de cadrage : (1) métier ou famille, pas « les RH » ; (2) horizon, ici 3 ans ; (3) unité — personnes en ETP pédagogique, 1 personne à 35 h = 1 ETP ; (4) décision que le modèle doit éclairer ; (5) hypothèses étiquetées, jamais présentées comme des taux de marché.\n\nAlimentez le modèle avec ce que l'analytique RH a déjà produit : pyramide (retraites), turnover du métier (départs / effectif moyen), ETP réels, vacances. Si une donnée manque, vous posez une hypothèse pédagogique visible, vous n'inventez pas un « standard cabinet ».\n\nContrôle d'entrée : si le document ne sépare pas demande et offre, ce n'est pas encore un SWP. Si l'horizon change d'une slide à l'autre, ce n'est pas comparable."
            },
            {
              "block_type": "callout",
              "content": "Chiffres Nova Services de ce module : pédagogiques, fictifs, pour apprendre à faire additionner un modèle. Ce ne sont pas un benchmark de turnover, ni un taux légal, ni la réalité d'un groupe nommé. Le consultant junior construit le modèle et documente. Il ne vote pas l'effectif cible. La GEPP se traite au module suivant."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "CODIR de Nova Services (fictif). La DRH projette « 80 techniciens, on recrute 10, ça ira ». Le directeur des opérations parle d'une croissance d'activité et d'une vague de retraites. Le DSI évoque un outil qui « supprimera du volume ». Trois phrases, zéro modèle : pas d'horizon commun, pas de gap, pas de scénario. Le consultant junior pose 3 ans, le métier des 80, le besoin actuel déjà supérieur au stock, et refuse de livrer un slide unique « il faut recruter ». Il promet un modèle à trois scénarios, pas une promesse d'embauche."
            },
            {
              "block_type": "heading",
              "content": "Carte d'horizon — à figer avant le modèle"
            },
            {
              "block_type": "code",
              "content": "SWP ≠ PLAN DE RECRUTEMENT ≠ GEPP ≠ EXPORT SIRH\nSWP                 Méthode de direction : demande, offre, écart, leviers\nPlan de recrutement Un levier parmi d'autres, une fois le gap posé\nGEPP                Cadre FR de négociation / parcours (module suivant)\nExport SIRH         Photo du stock. Utile. Insuffisant.\n\nHORIZONS (repères de travail, pas une norme légale)\n12-18 mois     Budget, vacances, recrutement de l'année\n3 ans          Horizon pédagogique Nova (ce module) : lisible en comité\n5 ans          Uniquement si la stratégie est stable ; hypothèses étiquetées\nAu-delà        Scénario, pas prévision\n\nUNITÉ PÉDAGOGIQUE (fil rouge)\n1 personne à 35 h = 1 ETP. Une personne à 28 h = 0,8 ETP.\nIci, pour le métier tendu, 1 personne = 1 ETP (hypothèse simplificatrice, étiquetée).\n\nNOVA SERVICES (fictif, 1 200 salariés) — CIBLE DU MODÈLE\nMétier tendu : techniciens support client\nStock actuel N = 80 (pédagogique)\nLe SWP se fait métier par métier, pas « 1 200 en bloc »."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Appeler SWP un histogramme d'âges. Confondre SWP et GEPP. Recruter avant d'avoir un gap. Utiliser un horizon de 5 ans sur une slide et 12 mois sur la suivante. Présenter un turnover « de marché » inventé. Traiter l'automatisation comme des embauches négatives dans le stock. Promettre au CODIR que « le modèle décide »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "PME de 80 personnes : un SWP tient dans un onglet, métier par métier sensible, pas une usine à scénarios. Groupe multi-pays : un horizon unique masque des droits du travail différents — vous segmentez, vous ne mélangez pas. Activité saisonnière : l'ETP annuel et le pic ne sont pas le même chiffre ; dites-le. Centre de services : le volume d'activité (tickets, dossiers) est le vrai moteur de la demande, pas l'effectif de l'an dernier."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Nova Services (fictif). On vous demande « un SWP groupe, 1 200 personnes, à 5 ans, pour vendredi, avec le turnover du marché ». En dix lignes : (1) ce que vous refusez ; (2) le cadrage que vous posez à la place ; (3) le premier métier que vous traitez, et pourquoi."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Vous refusez le 1 200 en bloc, le 5 ans non étayé, et tout « turnover de marché » inventé. (2) Cadrage : un métier, horizon 3 ans, unité ETP, décision attendue (combler un métier tendu), hypothèses étiquetées pédagogiques. (3) Techniciens support client, 80 personnes : métier déjà tendu, vague de retraites, volume d'activité en hausse — c'est là que le SWP change une décision. Le groupe entier viendra ensuite, famille par famille. Le junior n'invente pas un taux, il documente ce qu'il a (pyramide, départs) et ce qu'il pose en hypothèse."
            }
          ],
          "position": 0
        },
        {
          "title": "Modèle SWP : stock, flux, gap, trois scénarios",
          "description": "Faire additionner un modèle : stock, retraites, turnover, recrutements, mobilité, automatisation, besoin, gap. Comparer fil de l'eau, cible et accéléré sur 80 personnes.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 12,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous écrivez les formules, vous faites coller chaque flux, vous lisez un gap, et vous comparez trois scénarios sur le métier tendu de 80 techniciens support client — chiffres pédagogiques qui s'additionnent."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un modèle SWP n'est pas une intuition. C'est une identité comptable d'effectifs, plus une demande, plus un écart. Formules, à garder visibles dans le tableur.\n\nstock_fin = stock_début − retraites − turnover − mobilité_sortante + recrutements + mobilité_entrante\nbesoin_net = besoin_brut − automatisation\ngap = besoin_net − stock_fin\n\nLe turnover, ici, est un flux annuel hors retraites : 8 départs par an, hypothèse pédagogique d'environ 10 % de 80, pas un taux légal, pas un benchmark. Les retraites se lisent dans la pyramide : 4, puis 5, puis 6, cumul 15 sur 3 ans. L'automatisation diminue le besoin, jamais le stock : on n'efface pas une personne d'un effectif parce qu'un outil est prévu.\n\nChez Nova Services (fictif), le métier est déjà en tension : stock N = 80, besoin N = 88, gap actuel = 8. Le besoin brut croît de +4 par an (pédagogique) : 88, 92, 96, 100. Trois scénarios, même horizon, mêmes unités. A, fil de l'eau : on remplace retraites et turnover, stock inchangé à 80, pas d'automatisation, le gap s'ouvre à 20. B, cible : mix recrutement, mobilité, automatisation modérée, gap à 0 en N+3. C, accéléré : plus de mobilité et d'automatisation, moins de recrutements externes (métier difficile à pourvoir), gap à 0 avec un besoin net plus bas. Tous les totaux du tableau ci-dessous s'additionnent. Si un chiffre ne se recoupe pas, le modèle est faux, pas « arrondi cabinet »."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Construisez dans cet ordre, une feuille par métier.\n\n1. Photo N : stock, besoin, gap. 2. Flux connus (retraites). 3. Flux hypothèse (turnover, mobilité), chacun étiqueté. 4. Demande : moteur d'activité + automatisation. 5. Leviers : recrutements et mobilité entrante, scénario par scénario. 6. Vérifications : stock_fin, cumul 3 ans, gap N+3. 7. Une ligne « ce que le modèle ne dit pas » (qualité, coût, délai de pourvoi).\n\nRègle des scénarios : mêmes années, mêmes unités, même métier. Interdit : un scénario chiffré et un autre « qualitatif ». Le fil de l'eau est un vrai scénario, souvent le plus éclairant.\n\nVous livrez le tableur avec les formules, pas une recopie de totaux. Un associé doit pouvoir changer le turnover de 8 à 6 et voir le gap bouger."
            },
            {
              "block_type": "callout",
              "content": "Tous les effectifs, flux et gaps de cette leçon sont pédagogiques. Ils font apprendre l'arithmétique du SWP. Ils ne décrivent pas le marché du support client, ni un taux de turnover « de référence », ni une productivité réelle d'un outil. 1 personne à 35 h = 1 ETP pédagogique."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services (fictif), métier tendu, 80 techniciens. Le manager dit : « On perd les seniors, on n'arrive pas à recruter, l'outil va nous sauver. » Sans modèle, chacun a raison tout seul. Avec le scénario A, le stock reste à 80 et le gap passe à 20 : remplacer les départs ne suffit pas si le besoin monte. Avec B, on assume 47 recrutements en 3 ans plus 12 mobilités et 6 ETP d'automatisation : le gap se ferme, mais le recrutement reste lourd. Avec C, on mise sur 24 mobilités et 12 ETP d'automatisation : 29 recrutements seulement, à condition que l'outil et les passerelles tiennent. Le comité vote un scénario, pas un slogan."
            },
            {
              "block_type": "heading",
              "content": "Modèle Excel — métier tendu 80 personnes (chiffres pédagogiques qui s'additionnent)"
            },
            {
              "block_type": "code",
              "content": "NOVA SERVICES (fictif, 1 200 salariés) — SWP 3 ANS\nMétier tendu : techniciens support client\nUnité : personnes (1 pers. 35 h = 1 ETP pédagogique)\nTOUS LES CHIFFRES SONT PÉDAGOGIQUES — pas un benchmark, pas un diagnostic réel.\n\nFORMULES (à garder dans le tableur, pas seulement les totaux)\n  stock_fin   = stock_debut - retraites - turnover - mob_out + recrut + mob_in\n  besoin_net  = besoin_brut - automatisation\n  gap         = besoin_net - stock_fin\n  turnover    = ici un FLUX fixé : 8 / an (hyp. ~10 % de 80, pédagogique)\n                En mission réelle : départs hors retraite / effectif moyen, à calculer.\n  automatisation = réduction de BESOIN (ETP évités), JAMAIS une ligne de stock négatif.\n\nHYPOTHÈSES COMMUNES AUX 3 SCÉNARIOS\n  Stock N                 80\n  Besoin brut N           88     gap actuel = 88 - 80 = 8\n  Croissance besoin brut  +4 / an  →  88 | 92 | 96 | 100\n  Retraites (pyramide)    N+1: 4 | N+2: 5 | N+3: 6     cumul 15\n  Turnover hors retraite  8 / an                        cumul 24\n--------------------------------------------------------------------------------\nSCÉNARIO B — CIBLE (recommandé) — TABLEAU ANNUEL COMPLET\nannee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap\nN           80      0     0      0        0       0        80      88    0    88    8\nN+1         80      4     8      2       16       4        86      92    2    90    4\nN+2         86      5     8      2       15       4        90      96    4    92    2\nN+3         90      6     8      2       16       4        94     100    6    94    0\n\nVérif B N+1 : 80 - 4 - 8 - 2 + 16 + 4 = 86 ; 92 - 2 = 90 ; 90 - 86 = 4\nVérif B N+2 : 86 - 5 - 8 - 2 + 15 + 4 = 90 ; 96 - 4 = 92 ; 92 - 90 = 2\nVérif B N+3 : 90 - 6 - 8 - 2 + 16 + 4 = 94 ; 100 - 6 = 94 ; 94 - 94 = 0\nCumul 3 ans B : retraites 15 + turn 24 + mob_out 6 = 45 sorties\n                recrut 47 + mob_in 12 = 59 entrées ; 80 + (59-45) = 94  OK\n--------------------------------------------------------------------------------\nSCÉNARIO A — FIL DE L'EAU (on remplace retraites + turnover, rien d'autre)\nPas de mobilité, pas d'automatisation, stock maintenu à 80.\nannee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap\nN           80      0     0      0        0       0        80      88    0    88    8\nN+1         80      4     8      0       12       0        80      92    0    92   12\nN+2         80      5     8      0       13       0        80      96    0    96   16\nN+3         80      6     8      0       14       0        80     100    0   100   20\n\nVérif A N+1 : 80 - 4 - 8 + 12 = 80 ; gap 92 - 80 = 12\nVérif A N+3 : 80 - 6 - 8 + 14 = 80 ; gap 100 - 80 = 20\nCumul recrut A = 12+13+14 = 39\n--------------------------------------------------------------------------------\nSCÉNARIO C — ACCÉLÉRÉ (plus de mobilité et d'outil, moins de recrutements externes)\nMétier tendu = difficile à pourvoir : on ne parie pas tout sur le marché.\nannee  stock_deb  retr  turn  mob_out  recrut  mob_in  stock_fin  brut  auto  net  gap\nN           80      0     0      0        0       0        80      88    0    88    8\nN+1         80      4     8      2       10       8        84      92    4    88    4\nN+2         84      5     8      2        9       8        86      96    8    88    2\nN+3         86      6     8      2       10       8        88     100   12    88    0\n\nVérif C N+1 : 80 - 4 - 8 - 2 + 10 + 8 = 84 ; 92 - 4 = 88 ; 88 - 84 = 4\nVérif C N+2 : 84 - 5 - 8 - 2 +  9 + 8 = 86 ; 96 - 8 = 88 ; 88 - 86 = 2\nVérif C N+3 : 86 - 6 - 8 - 2 + 10 + 8 = 88 ; 100 - 12 = 88 ; 88 - 88 = 0\nCumul 3 ans C : sorties 15+24+6 = 45 ; recrut 29 + mob_in 24 = 53\n                80 + (53-45) = 88  OK\n--------------------------------------------------------------------------------\nPHOTO N+3 — COMPARAISON (mêmes unités, même métier, même horizon)\nindicateur                 A fil de l'eau     B cible      C accéléré\nstock_fin                         80              94             88\nbesoin_net                       100              94             88\ngap                               20               0              0\nrecrutements cumul 3 ans          39              47             29\nmobilité entrante cumul            0              12             24\nautomatisation N+3 (ETP)           0               6             12\n\nCSV B (séparateur virgule) — à coller dans un tableur\nannee,stock_debut,retraites,turnover,mob_out,recrut,mob_in,stock_fin,besoin_brut,auto,besoin_net,gap\nN,80,0,0,0,0,0,80,88,0,88,8\nN+1,80,4,8,2,16,4,86,92,2,90,4\nN+2,86,5,8,2,15,4,90,96,4,92,2\nN+3,90,6,8,2,16,4,94,100,6,94,0\n\nLecture : A « remplace et subit la croissance ». B ferme le gap au prix d'un fort recrutement.\nC ferme le gap si l'outil et les passerelles tiennent. Aucun scénario n'est « vrai ».\nLe comité choisit. Le junior ne vend pas C parce qu'il aime l'automatisation."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Arrondir un stock « à peu près 80 » puis un gap « autour de 10 ». Mettre l'automatisation en déduction du stock. Oublier que le turnover continue si l'on ne recrute que les retraites. Comparer un scénario à 3 ans et un autre à 5 ans. Présenter B comme une prévision plutôt que comme un choix. Recopier les totaux sans les formules. Inventer un taux de turnover « cabinet » pour 80 personnes."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si une partie du métier est à 28 h : convertissez en ETP (0,8) avant d'additionner des têtes. Si des prestataires tiennent le gap actuel de 8 : dites-le en annexe, ne les comptez pas dans le stock salarié sans le nommer. International : un flux « mobilité » transfrontalier a un droit applicable, le junior n'invente pas le dispositif. Si la pyramide ne donne pas 4-5-6 retraites, vous remplacez par les vrais flux du client, vous ne gardez pas nos 15 par habitude."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Tableur fermé. (1) Écrivez les trois formules. (2) Calculez le gap N+3 du scénario A. (3) Dans B, si le turnover passe de 8 à 6 chaque année (hypothèse pédagogique de rétention), sans changer recrutements ni mobilité ni automatisation, quel est le stock_fin N+3 et le gap N+3 ? (4) Pourquoi C recrute moins que B alors que les deux ferment le gap ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) stock_fin = stock_début − retraites − turnover − mob_out + recrut + mob_in ; besoin_net = besoin_brut − auto ; gap = besoin_net − stock_fin. (2) A : stock 80, besoin_net 100, gap = 20. (3) B de base : 24 départs turnover en 3 ans. À 6 / an : 18 départs, soit 6 sorties de moins. Stock_fin N+3 = 94 + 6 = 100. Besoin_net B reste 94. Gap = 94 − 100 = −6 (surplus pédagogique de 6, à réinterpréter : on recrute trop si la rétention réussit — on recalera les 47 embauches, on ne « laisse courir »). (4) C ferme le gap en baissant le besoin (12 ETP d'automatisation) et en alimentant le stock par 24 mobilités : 29 recrutements suffisent pour un stock 88 et un besoin 88. B a moins d'outil (6) et moins de mobilité (12), donc plus de marché externe (47) pour un stock 94. Chiffres pédagogiques, pas une vérité d'outil."
            }
          ],
          "position": 1
        },
        {
          "title": "Plan d'action et KPI de suivi du SWP",
          "description": "Traduire un scénario choisi en leviers, propriétaires, rythme de revue et indicateurs — sans transformer le modèle en promesse.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 10,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous transformez le scénario B (ou C) en plan d'action : recrutement, mobilité, retraites, automatisation, rétention. Vous posez des KPI de suivi, une cadence, et la limite du junior : le tableau de bord n'est pas la décision."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un SWP sans plan d'action est un exercice de comité. Un plan sans KPI est une liste de vœux. Une fois le scénario choisi — ici B, cible, chiffres pédagogiques — chaque levier devient une ligne : quoi, combien, qui, quand, comment on saura que ça dérive.\n\nCinq leviers, pas davantage au premier jet. Recruter : 16, puis 15, puis 16 sur le métier tendu, 47 en 3 ans — le volume est lourd, le délai de pourvoi est le risque. Bouger : 4 mobilités entrantes par an, 12 en 3 ans, donc des passerelles réelles, pas un slogan interne. Automatiser : 2, puis 4, puis 6 ETP de besoin évité, livrés par un projet, pas par une slide DSI. Transmettre : 4, 5 et 6 retraites, 15 passations. Retenir : le modèle B suppose 8 départs turnover par an ; si l'on vise 6, on recalcule le recrutement, on ne garde pas 47 par inertie.\n\nLes KPI suivent les leviers, en unités déjà utilisées : gap ETP du métier, stock vs besoin, recrutements réalisés vs plan, % de pourvois internes, turnover du métier (départs / effectif moyen), ETP d'automatisation réellement retirés de la demande, % de retraites avec binôme. Cadence : revue trimestrielle du gap, revue annuelle de l'horizon. Le consultant junior tient le tableau, signale l'écart, propose un recalage. Il ne « recouvre » pas un gap de 4 en silence. Il ne promet pas que le turnover baissera."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Après le vote du scénario, une page d'exécution.\n\n1. Recopiez les flux de l'année 1, pas les 3 ans d'un coup. 2. Nommez un propriétaire métier et un propriétaire RH par levier. 3. Reliez chaque levier à un KPI et à un seuil d'alerte (exemple pédagogique : gap du métier > 6 en cours d'année → revue hors cycle). 4. Datez la première revue à 90 jours. 5. Écrivez ce qui ferait changer de scénario (outil en retard, recrutement à 50 % du plan, turnover à 12 au lieu de 8).\n\nLe livrable junior : un onglet « suivi » avec N, le plan, le réel, l'écart, le commentaire. Pas un nouveau modèle à chaque mois. On ne change les hypothèses que de façon tracée."
            },
            {
              "block_type": "callout",
              "content": "Les seuils d'alerte et les volumes (47 recrutements, gap 0 en N+3, 8 turnover) sont pédagogiques. En mission, les seuils se calent avec le client. Un KPI n'est pas un benchmark de marché. Le junior n'invente pas un « bon » turnover."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services (fictif) vote B en CODIR. Trois mois plus tard : 6 recrutements au lieu de 16 prévus sur l'année, automatisation toujours à 0, turnover déjà à 5 sur le trimestre (rythme > 8 / an). Le junior qui « attend N+1 pour mettre à jour » laisse le gap se rouvrir. Le junior qui tient le suivi alerte : le plan B de l'année 1 est hors trajectoire ; options : basculer une partie vers C (passerelles, si elles existent), recaler le besoin, ou assumer un gap temporaire — décision métier/RH, pas décision du tableur."
            },
            {
              "block_type": "heading",
              "content": "Plan d'action année 1 — scénario B (pédagogique) et tableau de bord"
            },
            {
              "block_type": "code",
              "content": "PLAN D'ACTION — NOVA SERVICES (fictif) — SCÉNARIO B — ANNÉE 1\nLevier              Volume pédagogique     Propriétaire     Livrable\nRecrutement         16 (sur 47 / 3 ans)    RH + manager     jalons sourcing / pourvoi\nMobilité entrante    4 (sur 12 / 3 ans)    RH + métier      4 passerelles nommées, formées\nMobilité sortante    2                     métier           pas un « dégraissage » improvisé\nAutomatisation       2 ETP de besoin       DSI + métier     2 ETP réellement retirés de la demande\nPassation retraite   4 binômes             métier           4 départs avec transfert écrit\nRétention            hypothèse 8 turn/an   manager + RH     si réel ≠ 8, on RECALCULE B\n\nKPI DE SUIVI (unités du modèle, pas un benchmark)\nKPI                         Plan B N+1 (pédago.)   Alerte pédagogique\nGap ETP du métier           4                      gap > 6 en cours d'année\nStock fin vs besoin net     86 vs 90               stock < 84\nRecrutements réalisés       16                     < 10 à M9\nPourvois internes           4                      0 au S1\nTurnover métier (flux)      8 / an                 rythme annualisé > 10\nAuto (ETP besoin évités)    2                      0 à M12\nRetraites avec binôme       4 / 4                  1 départ sans passation\n\nCADENCE\nTrimestriel : gap, recrut, turn, auto.  Annuel : horizon, scénario, pyramide.\nLe junior met à jour, commente l'écart, propose un recalage. Il ne vote pas.\n\nCE QUE LE SUIVI NE FAIT PAS\nRemplacer la GEPP, le CSE, un plan de formation juridique, un budget.\nDécider d'un licenciement, d'un gel, d'une réorg : hors junior."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Livrer le modèle et disparaître. Suivre 25 KPI dont 20 hors métier. Garder 47 recrutements alors que le turnover est tombé à 6. Compter un outil « en cours » comme 2 ETP déjà évités. Laisser un départ retraite sans binôme parce que « le SWP est fait ». Transformer un gap en plan social sans juriste. Promettre au CODIR que les KPI « garantissent » le gap 0."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si le CODIR vote C : les KPI d'automatisation et de mobilité deviennent le chemin critique, le recrutement 10/9/10 n'est plus le sujet principal. Si le SIRH ne sort pas les départs du métier : vous tenez un fichier de suivi étiqueté manuel, vous n'inventez pas le flux. En cabinet, le client peut demander un « green » mensuel : un gap qui se dégrade reste rouge, même si le slide est joli. Multi-sites : un KPI groupe à 4 peut cacher un site à 10 et un site à 0 — descendez d'un cran."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Scénario B voté. À M6 : recrutements 5 (plan 8 à mi-année, rythme 16 / an), mobilité 0, automatisation 0, turnover déjà 6 sur 6 mois, 2 retraites bien passées sur 2. (1) Quel signal sur le gap de l'année ? (2) Trois options de recalage, sans inventer de benchmark. (3) Ce que vous ne dites pas au CODIR."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Recrutement sous le rythme (5 vs ~8), mobilité et auto à 0, turnover déjà annualisable à 12 si le semestre se répète (6×2), au-dessus de l'hypothèse 8 : le gap N+1 visé à 4 se dégrade vers A. Vous ne calculez pas un faux précis sans rejouer le tableur, mais la direction du signal est claire. (2) Options : accélérer le pourvoi (sans promettre un délai magique) ; activer 2 passerelles du S2 (bascule partielle vers C) ; revoir le besoin (volume d'activité, heures, prestataires nommés) et faire voter un gap temporaire. (3) Vous ne dites pas « on est verts, ça va rattraper ». Vous ne dites pas « il faut un plan social ». Vous ne présentez pas 12 de turnover comme un taux de marché. Vous apportez le réel vs le plan, et une décision demandée."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Strategic Workforce Planning",
          "description": "Définition, formules, arithmétique du métier tendu à 80, scénarios et suivi. Six questions, seuil 70.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 8,
          "is_required": true,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Consignes"
            },
            {
              "block_type": "text",
              "content": "Questions de raisonnement. Lisez l'explication après chaque réponse. Ce parcours de 5 heures ne remplace pas l'expérience de pilotage autonome de missions de conseil complexes. L'attestation LOU Academy n'est pas un titre RNCP ni un diplôme d'État."
            }
          ],
          "quiz": {
            "title": "Quiz — Strategic Workforce Planning",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Chez Nova Services (fictif), que distingue correctement le SWP de la GEPP ?",
                "question_type": "single_choice",
                "options": [
                  "A. Rien : SWP et GEPP sont deux noms du même accord d'entreprise",
                  "B. Le SWP est une méthode de management (demande, offre, écart, leviers) ; la GEPP est un cadre français de dialogue social — on ne les substitue pas",
                  "C. La GEPP est un tableur, le SWP est une négociation avec le CSE",
                  "D. Le SWP n'existe que si l'entreprise dépasse 1 200 salariés"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le SWP éclaire une décision de direction. La GEPP relève du Code du travail et du dialogue social (module suivant). Nova à 1 200 est un cas pédagogique, pas un seuil de SWP. Le CSE ne « fait » pas le SWP."
              },
              {
                "question": "Photo N du métier tendu (chiffres pédagogiques) : stock 80, besoin 88. Quel est le gap actuel, et que mesure-t-il ?",
                "question_type": "single_choice",
                "options": [
                  "A. Gap = 80, c'est l'effectif",
                  "B. Gap = 8, soit besoin − stock (88 − 80) : il manque 8 personnes par rapport au besoin, dès aujourd'hui",
                  "C. Gap = 88, c'est le besoin",
                  "D. Gap = 10 % de 80, le turnover"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "gap = besoin_net − stock. 88 − 80 = 8. Ce n'est pas le turnover (ici un flux de 8 départs/an, coïncidence pédagogique à ne pas confondre) ni l'effectif."
              },
              {
                "question": "Dans le modèle, où place-t-on l'automatisation ?",
                "question_type": "single_choice",
                "options": [
                  "A. En déduction du stock, comme un licenciement comptable",
                  "B. En réduction du besoin (ETP évités) : besoin_net = besoin_brut − automatisation",
                  "C. Dans le turnover, car les gens partent grâce à l'outil",
                  "D. Nulle part : l'outil se raconte en qualitative, jamais en ETP"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'automatisation diminue la demande, pas le stock. Scénario B : 2, 4, puis 6 ETP de besoin évité (pédagogique). On n'efface pas des personnes d'un effectif parce qu'un outil est prévu."
              },
              {
                "question": "Scénario A, fil de l'eau, N+3 (chiffres pédagogiques). Stock maintenu à 80, besoin_net 100. Quel gap, et que nous apprend-il ?",
                "question_type": "single_choice",
                "options": [
                  "A. Gap 0, car on a remplacé tous les départs",
                  "B. Gap 20 (100 − 80) : remplacer retraites et turnover ne suffit pas si le besoin monte",
                  "C. Gap 8, le même qu'aujourd'hui, le fil de l'eau fige tout",
                  "D. Gap 39, égal au cumul des recrutements A"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "A recrute 39 en 3 ans (12+13+14) pour tenir 80. Le besoin brut va à 100 sans automatisation. gap = 100 − 80 = 20. Remplacer les départs n'absorbe pas la croissance."
              },
              {
                "question": "Scénario B N+3 : stock_fin 94, besoin_net 94, recrutements cumulés 47, mobilité entrante 12. Quelle lecture est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Gap 0, mais le modèle suppose un fort recrutement externe plus 12 passerelles et 6 ETP d'automatisation — c'est un choix, pas une prévision",
                  "B. Gap 0 donc plus aucun levier à suivre",
                  "C. 47 + 12 = 59 embauches externes",
                  "D. Le gap 0 est garanti dès que le CODIR vote B"
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "59 entrées = 47 recrutements + 12 mobilités, pas 59 externes. Le gap 0 de B est la cible du scénario s'il est exécuté. Le vote n'exécute rien. Les KPI (recrut, mobilité, auto, turn) restent nécessaires."
              },
              {
                "question": "À M6 du scénario B, le réel s'écarte (recrutements trop bas, turnover plus fort). Que fait le consultant junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Il attend N+3 : le modèle « se lissera »",
                  "B. Il met le KPI au vert pour ne pas inquiéter le CODIR",
                  "C. Il actualise réel vs plan, signale la dérive du gap, et porte des options de recalage à l'instance — sans inventer un plan social ni un benchmark",
                  "D. Il décide seul de geler les 16 recrutements"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le junior tient le suivi et demande une décision. Il ne maquille pas, il n'attend pas trois ans, il ne vote pas un gel. Un écart de flux se traite dans l'année 1, pas dans le discours de N+3."
              }
            ]
          },
          "position": 3
        }
      ]
    }
  ]
}
$coursejsona$;
  v_course_id    uuid;
  v_module_id    uuid;
  v_lesson_id    uuid;
  v_quiz_id      uuid;
  v_mod          record;
  v_les          record;
  v_blk          record;
  v_q            record;
BEGIN
  SELECT id INTO v_course_id FROM courses WHERE slug = 'consultant-junior-workforce-organization';
  IF v_course_id IS NULL THEN
    RAISE EXCEPTION 'Cours consultant-junior-workforce-organization absent. Exécutez 009a d''abord.';
  END IF;
  IF EXISTS (SELECT 1 FROM modules WHERE course_id = v_course_id) THEN
    RAISE NOTICE '009a : modules déjà présents — skip.';
  ELSE
      
    FOR v_mod IN
      SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
      FROM jsonb_array_elements(payload->'modules') WITH ORDINALITY AS t
    LOOP
      INSERT INTO modules (course_id, title, description, position)
      VALUES (
        v_course_id,
        v_mod.obj->>'title',
        v_mod.obj->>'description',
        COALESCE((v_mod.obj->>'position')::int, v_mod.pos)
      )
      RETURNING id INTO v_module_id;

      FOR v_les IN
        SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
        FROM jsonb_array_elements(v_mod.obj->'lessons') WITH ORDINALITY AS t
      LOOP
        INSERT INTO lessons (
          module_id, title, description, lesson_type, position,
          estimated_duration_minutes, is_required
        )
        VALUES (
          v_module_id,
          v_les.obj->>'title',
          v_les.obj->>'description',
          COALESCE(v_les.obj->>'lesson_type', 'lesson'),
          COALESCE((v_les.obj->>'position')::int, v_les.pos),
          NULLIF(v_les.obj->>'estimated_duration_minutes', '')::int,
          COALESCE((v_les.obj->>'is_required')::boolean, true)
        )
        RETURNING id INTO v_lesson_id;

        FOR v_blk IN
          SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
          FROM jsonb_array_elements(COALESCE(v_les.obj->'blocks', '[]'::jsonb)) WITH ORDINALITY AS t
        LOOP
          INSERT INTO content_blocks (lesson_id, block_type, content, position, metadata)
          VALUES (
            v_lesson_id,
            v_blk.obj->>'block_type',
            CASE
              WHEN jsonb_typeof(v_blk.obj->'content') IN ('object', 'array')
                THEN (v_blk.obj->'content')::text
              ELSE COALESCE(v_blk.obj->>'content', '')
            END,
            COALESCE((v_blk.obj->>'position')::int, v_blk.pos),
            CASE
              WHEN jsonb_typeof(v_blk.obj->'metadata') = 'object'
                THEN v_blk.obj->'metadata'
              ELSE NULL
            END
          );
        END LOOP;

        IF v_les.obj->>'lesson_type' = 'quiz' AND v_les.obj->'quiz' IS NOT NULL THEN
          INSERT INTO quizzes (lesson_id, title, passing_score, max_attempts)
          VALUES (
            v_lesson_id,
            v_les.obj->'quiz'->>'title',
            COALESCE((v_les.obj->'quiz'->>'passing_score')::numeric, 70),
            NULLIF(v_les.obj->'quiz'->>'max_attempts', '')::int
          )
          RETURNING id INTO v_quiz_id;

          FOR v_q IN
            SELECT t.value AS obj, (t.ordinality - 1)::int AS pos
            FROM jsonb_array_elements(v_les.obj->'quiz'->'questions') WITH ORDINALITY AS t
          LOOP
            INSERT INTO quiz_questions (
              quiz_id, question, question_type, options, correct_answer, explanation, position
            )
            VALUES (
              v_quiz_id,
              v_q.obj->>'question',
              COALESCE(v_q.obj->>'question_type', 'single_choice'),
              v_q.obj->'options',
              v_q.obj->'correct_answer',
              v_q.obj->>'explanation',
              COALESCE((v_q.obj->>'position')::int, v_q.pos)
            );
          END LOOP;
        END IF;
      END LOOP;
    END LOOP
  END IF;
END
$seed$;

-- Reste en draft jusqu'à 009b.

COMMIT;
