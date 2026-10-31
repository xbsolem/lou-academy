-- LOU Academy — 009b PARTIE 2/2 — consultant-junior-workforce-organization
-- Modules restants (positions 5–9).
-- Exécuter APRÈS 009a.

BEGIN;


DO $seed$
DECLARE
  payload        jsonb := $coursejsonb$
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
      "position": 5,
      "title": "GEPP et cartographie des compétences",
      "description": "Situer la GEPP dans le cadre français sans inventer un seuil, cartographier métiers et compétences, identifier métiers critiques et passerelles — cas Groupe Nova Services.",
      "lessons": [
        {
          "title": "GEPP : cadre français, dialogue, limites du junior",
          "description": "Distinguer GEPP, GPEC et SWP ; savoir ce que le Code du travail encadre ; refuser d'inventer un délai ou un seuil.",
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
              "content": "Vous situez la GEPP comme cadre de dialogue social et de gestion des parcours, distinct du SWP de direction. Vous savez ce qu'un consultant junior prépare, et ce qu'il n'écrit jamais comme une obligation chiffrée de mémoire."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La GEPP (gestion des emplois et des parcours professionnels) est, en France, l'évolution de la GPEC. Elle vise à anticiper les évolutions des métiers et des compétences, et à en discuter, le cas échéant, dans le cadre du dialogue social. Ce n'est pas un tableur SWP. Le SWP (module précédent) est un outil de management : demande, offre, écart. La GEPP est un sujet d'emplois, de parcours, de formation, de mobilité — et, selon le contexte, de négociation.\n\nLe Code du travail prévoit des règles de négociation sur la gestion des emplois et des parcours professionnels. Le seuil d'effectif, la périodicité et le contenu exact dépendent du texte en vigueur et de la situation de l'entreprise (accords, UES, effectif calculé selon les règles du code). Un consultant junior ne récite pas « à 1 200 salariés, obligation X, délai Y ». Il écrit : thème identifié, texte à vérifier sur Légifrance, avis social de l'entreprise. Inventer un délai d'information du CSE ou un seuil « parce que Nova a 1 200 personnes » est une faute professionnelle.\n\nChez Groupe Nova Services (1 200 salariés fictifs), la tentation du COMEX est d'appeler « GEPP » un plan de recrutement. Votre rôle : séparer ce qui est diagnostic d'emplois (cartographie, écarts, passerelles) de ce qui est obligation et calendrier d'instances. Le second n'est pas votre visa."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Dès qu'un sponsor dit « il nous faut une GEPP » :\n1. Reformulez : diagnostic d'emplois / plan d'action RH / négociation ? Ce n'est pas le même lot.\n2. Posez le hors périmètre juridique : vous ne rédigez pas l'accord, vous ne calculez pas le calendrier d'instances.\n3. Listez ce que vous pouvez produire : emplois sensibles, compétences, écarts, leviers (formation, mobilité, recrutement), hypothèses étiquetées.\n4. Demandez qui, côté client, porte le social (RRH, DS, avocat).\n5. Notez : « seuils, périodicité, information-consultation : vérifier Code du travail / Légifrance et avis de l'entreprise. »\n6. Reliez au SWP : les gaps d'ETP nourrissent la GEPP ; ils ne la remplacent pas.\nLivrable junior : note de cadrage GEPP (faits, hors juridique) + annexes métiers. Pas un projet d'accord."
            },
            {
              "block_type": "callout",
              "content": "Junior ≠ juriste. Aucun délai CSE, aucun seuil d'effectif, aucune « obligation à 1 200 » n'est énoncé ici comme vérité. Vérifiez le texte en vigueur. Les métiers Nova sont fictifs et pédagogiques."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Le DRH Nova : « Vous êtes consultants, rédigez-nous l'accord GEPP pour le CSE de jeudi. » Sans cadre, un junior pond 20 pages d'obligations. Avec cadre : vous refusez la rédaction d'accord et le calendrier. Vous livrez une cartographie des emplois sensibles (exploitation, support client), les écarts issus du SWP pédagogique, et une liste de leviers à discuter. Le RRH social et le conseil de l'entreprise tiennent le texte. Jeudi n'autorise pas à inventer le droit."
            },
            {
              "block_type": "heading",
              "content": "Repères — à coller dans le carnet (pas un mémento juridique)"
            },
            {
              "block_type": "code",
              "content": "GEPP ≠ GPEC « vintage » ≠ SWP ≠ PLAN SOCIAL\nGPEC          Ancien sigle (gestion prévisionnelle des emplois et des compétences)\nGEPP          Emplois + parcours professionnels — dialogue, anticipation, leviers\nSWP           Outil de direction (demande / offre / gap) — module précédent\nPlan social   Décision d'emploi / PSE : hors visa junior, avis spécialisé\n\nCE QUE VOUS PRODUISEZ\n  Cartographie emplois, compétences, écarts, passerelles, plan d'action RH\n  Hypothèses étiquetées, sources, limites\n\nCE QUE VOUS NE PRODUISEZ PAS\n  Accord, calendrier d'instances, seuil d'effectif « de mémoire »\n  Qualification juridique d'une réorganisation\n\nRÉFLEXE\n  « Selon effectif, accords et texte en vigueur — vérifier Légifrance / avis social. »"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Appeler GEPP un histogramme d'effectifs. Rédiger un accord. Inventer « à 300 / 1 200 salariés, délai de X jours ». Confondre GEPP et licenciement. Promettre au CSE un chiffre SWP non validé. Traiter 1 200 comme un seuil magique pédagogique érigé en droit."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Entreprise déjà couverte par un accord : vous le lisez avant de proposer un « standard cabinet ». UES ou multi-sociétés : l'effectif et le niveau de négociation se vérifient, vous ne les supposez pas. Groupe international : la GEPP est un cadre français ; les sites hors France ont d'autres droits. PME sous seuils éventuels : le diagnostic d'emplois reste utile ; l'obligation, elle, se vérifie dans le texte."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Nova, 1 200 salariés fictifs. Le COMEX veut « une GEPP pour vendredi, avec les délais CSE ». (1) Ce que vous refusez. (2) Le cadrage que vous posez. (3) Le premier livrable utile."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Vous refusez délais CSE, rédaction d'accord, qualification juridique, tout seuil récité de mémoire.\n2. Cadrage : diagnostic d'emplois sur deux métiers tendus (exploitation, support client), écarts SWP déjà étiquetés pédagogiques, leviers formation/mobilité/recrutement, hors rédaction sociale.\n3. Premier livrable : cartographie + écarts + questions pour le dialogue — daté, sourcé, avec la mention de vérifier le texte. Le vendredi ne produit pas un accord."
            }
          ],
          "position": 0
        },
        {
          "title": "Cartographier métiers, compétences et écarts",
          "description": "Construire un référentiel utile (familles, fiches, niveaux), une matrice, et des écarts actionnables — pas un catalogue encyclopédique.",
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
              "content": "Vous savez limiter un référentiel à ce qui sert une décision, distinguer technique et comportemental, poser des niveaux de maîtrise, et calculer un écart sans fake précision."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un référentiel métiers est une langue commune : familles professionnelles, emplois-repères, fiches (finalité, activités, compétences). Il n'est pas l'organigramme nominatif. Chez Nova (fictif), « agent Facility », « responsable d'exploitation », « conseiller relation client » sont des emplois-repères. Si chaque région a un intitulé différent pour le même travail, la cartographie commence par l'alignement des noms — sinon le SWP compte des pommes et des poires.\n\nUne compétence est un savoir agir en situation. Technique (habilitation, outil, geste) et comportementale (prioriser, recadrer un client, coacher) se séparent, parce que les leviers ne sont pas les mêmes (formation courte vs accompagnement managérial). Les niveaux de maîtrise se limitent : 4 niveaux suffisent (non acquis, pratique, autonome, expert). Un barème à 10 points sur 1 200 personnes est du théâtre.\n\nL'écart = besoin cible − stock (volume × niveau). Un écart « 40 % des agents ne sont pas autonomes sur l'outil de planning » est actionnable. Un écart « la culture n'est pas agile » ne l'est pas. Les données de maîtrise, dans ce parcours, sont pédagogiques : en mission, elles viennent d'entretiens, de managers, parfois d'auto-positionnement calibré — jamais d'un benchmark de compétences inventé."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Vague 1, six semaines max sur un périmètre :\n1. 8 à 15 emplois-repères, pas 200 fiches.\n2. Pour chaque fiche : 5 à 8 activités, 6 à 10 compétences clés, 4 niveaux.\n3. Matrice personnes × compétences : une source (manager) + un échantillon de calibration.\n4. Écart par compétence critique : % sous le niveau cible, volume d'ETP concernés.\n5. Lien SWP : les gaps de volume et les gaps de niveau ne se compensent pas tout seuls.\n6. Livrable : 1 carte familles, 1 matrice, 1 page d'écarts, 1 page de limites (biais manager, auto-positionnement).\nVous n'attendez pas la perfection du SIRH compétences : il n'existe souvent pas."
            },
            {
              "block_type": "callout",
              "content": "Les % de maîtrise Nova ci-dessous sont inventés pour l'exercice. Ce ne sont pas une enquête réelle ni un standard de branche."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova veut « la cartographie des 1 200 ». Un junior ouvre 1 200 lignes et 80 compétences : six mois, zéro décision. Le même junior, tenu : 12 emplois-repères, focus responsables d'exploitation et support client, 8 compétences critiques, matrice sur un échantillon de 40 personnes calibré avec 3 managers. Écart pédagogique : 18 / 40 non autonomes sur le planning digital — levier formation + tutorat, pas un slogan digital."
            },
            {
              "block_type": "code",
              "content": "RÉFÉRENTIEL COURT — Nova (fictif, pédagogique)\nFamille              Emploi-repère                 Compétence critique (ex.)\nFacility             Agent de site                 Gestes métier, sécurité\nFacility             Resp. exploitation            Planning, management de proximité\nRelation client      Conseiller                    Outil tickets, recadrage client\nRelation client      Superviseur                   Coaching, flux, qualité\nRH                   RRH / HRBP                    Conseil manager, données\nSiège                Support (finance, SI…)        Selon filière\n\nNIVEAUX (4, pas 10)\n0 non acquis | 1 pratique accompagnée | 2 autonome | 3 expert / transmet\n\nMATRICE — extrait pédagogique 6 personnes × 3 compétences (support client)\npersonne   tickets   recadrage   outil_planning\nA          2         1           0\nB          3         2           1\nC          1         1           1\nD          2         2           2\nE          0         1           0\nF          2         3           1\nCible N+1 (hypothèse pédagogique) : 2 sur les 3 compétences\nSous cible : tickets 2/6 ; recadrage 3/6 ; planning 5/6\nLecture : l'outil de planning est l'écart massif — pas « le savoir-être ».\n\nFICHE MÉTIER MINIMALE\nFinalité / 5 activités / 6-10 compétences / passerelles in / out / données SIRH associées"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "200 fiches avant toute décision. 10 niveaux. Mélanger intitulés locaux. Prendre l'auto-positionnement pour une mesure. Inventer un % de branche. Oublier que volume SWP et niveau GEPP sont deux écarts. Livrer la matrice nominative au COMEX."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Habilitations réglementées (sécurité, électricité) : le niveau 0 a un autre statut que « pas autonome sur l'outil » — vous le flaggez, le métier tranche. Prestataires : hors matrice salariés, à tracer. Acquisition récente : deux référentiels, phase d'alignement avant l'écart unique."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "(1) Trois raisons de refuser 80 compétences × 1 200 personnes en vague 1. (2) Sur la matrice pédagogique, quelle compétence prioriser et pourquoi. (3) Que sortez-vous au COMEX à la place des noms A–F ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Pas de décision, pas de calibration, coût de collecte, SIRH incapable, délai vs COMEX J+15.\n2. Outil planning : 5/6 sous la cible 2 — écart le plus large, levier formation/tutorat identifiable. Recadrage ensuite. Tickets moins critique ici.\n3. % sous cible par compétence, volume d'ETP, levier, limites d'échantillon (n=6 pédagogique). Pas de nominatif COMEX."
            }
          ],
          "position": 1
        },
        {
          "title": "Métiers critiques, passerelles, formation, reconversion",
          "description": "Qualifier un métier sensible, dessiner des passerelles réalistes, et relier formation et mobilité à un plan d'action — sans promettre une reconversion.",
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
              "content": "Vous qualifiez un métier critique avec des critères, vous proposez des passerelles testables, et vous construisez un plan d'action RH qui n'invente ni le droit ni un taux de réussite de reconversion."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un métier est critique (ou sensible) quand sa défaillance casse l'activité ou la conformité, et qu'il est difficile à remplacer à temps. Critères utiles : impact (sécurité, contrat client, chiffre), rareté interne, délai de pourvoi, pyramide, tension de recrutement, compétence longue à construire. Chez Nova, les responsables d'exploitation (pyramide, vacants) et les techniciens / conseillers support (turnover pédagogique, volume) sortent souvent de ce filtre — c'est une hypothèse de travail, pas une vérité de branche.\n\nUne passerelle est un trajet réel : emploi A → emploi B, avec un écart de compétences comblable dans un délai dit, un volume, un tutorat. « On fera de la mobilité » n'est pas une passerelle. Agent Facility → responsable d'exploitation peut exister si l'on a un vivier, un parcours, et des managers qui libèrent du temps. Conseiller → superviseur, de même. Agent Facility → data analyst siège : souvent une reconversion longue, pas une vanne SWP de l'année.\n\nFormation et reconversion sont des leviers, pas des miracles. Le plan d'action relie : écart (volume et niveau), levier, propriétaire, délai, indicateur, risque. Le dialogue social peut porter ces leviers : vous préparez la matière, vous ne tenez pas l'instance. Toute reconversion qui touche au contrat se vérifie juridiquement : ce n'est pas un slide."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1. Scorez 8 à 12 emplois-repères sur 5 critères (impact, rareté, délai de pourvoi, pyramide, tension) — 1 à 3, transparent.\n2. Gardez 3 à 5 métiers critiques pour la vague.\n3. Pour chacun : 1 à 2 passerelles in, avec écart de compétences et délai pédagogique étiqueté.\n4. Leviers : recruter, former au niveau cible, tutorer, bouger, automatiser la tâche (pas la personne), sous-traiter en le disant.\n5. Plan d'une page par métier critique : volumes SWP + volumes formation + propriétaires.\n6. Risques : passerelle fantôme, formation sans temps, reconversion vendue sans avis social.\nLe junior propose. Le client arbitre. Le juriste relit dès que le contrat bouge."
            },
            {
              "block_type": "callout",
              "content": "Scores, volumes de passerelles et délais de formation ci-dessous sont pédagogiques. Ils n'ont pas valeur de branche ni de succès statistique de reconversion."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova vote le scénario SWP B (recrutement lourd sur le support). Sans passerelles, 47 embauches pédagogiques en 3 ans restent un pari marché. Avec une passerelle réelle « agent Facility senior → adjoint exploitation » (12 personnes pédagogiques, parcours 18 mois, tuteur), vous réduisez une partie du risque pyramide sur l'exploitation — à condition que le volume 12 existe dans le vivier, pas dans le slogan. Vous ne déclarez pas 12 reconversions « faites »."
            },
            {
              "block_type": "code",
              "content": "SCORE MÉTIERS — Nova (fictif, 1-3, pédagogique, pas un benchmark)\nEmploi                 impact rareté delai_pourvoi pyramide tension  somme\nResp. exploitation        3      3         3          3        2      14\nTechnicien / support      3      2         3          1        3      12\nAgent Facility            2      1         2          2        2       9\nSuperviseur RC            3      2         2          2        2      11\nRRH                       2      2         2          1        2       9\n\nPASSERELLES TESTABLES (hypothèses pédagogiques)\nDe                      Vers                     Délai étiqueté     Volume max anecdotique\nAgent Facility senior   Adjoint exploitation     12-18 mois         8 à 12 / 3 ans\nConseiller autonome     Superviseur RC           9-12 mois          selon vacance\nAdjoint exploitation    Resp. exploitation       12 mois            selon pyramide\nHors vanne année N      Agent → data siège       reconversion longue, pas un flux SWP\n\nPLAN D'ACTION — 1 métier / 1 page\nÉcart volume (SWP) | écart niveau (matrice) | leviers | qui | quand | KPI | risque | hors juridique"
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Qualifier critique tout le catalogue. Promettre des passerelles sans vivier. Compter une reconversion comme un recrutement de l'année. Oublier le temps des tuteurs. Envoyer un score 14 au CSE comme une décision. Inventer un taux de réussite « 80 % des reconversions »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Métier réglementé : la passerelle inclut l'habilitation, sinon elle est fausse. Activité saisonnière : le critique de juillet n'est pas celui de janvier. Marque employeur faible : le levier recrutement pèse plus, la passerelle interne aussi — dites les deux. Si un accord de mobilité existe déjà : le lire avant d'inventer un dispositif."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "À partir du score pédagogique : (1) deux métiers que vous gardez en vague 1 et pourquoi ; (2) une passerelle que vous refusez de compter dans le SWP N+1 ; (3) trois lignes du plan d'action « resp. exploitation »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "1. Resp. exploitation (somme 14 : pyramide + rareté + impact) et support (12 : tension + délai de pourvoi). Agent Facility 9 : volume, mais moins rare — vague 2 ou levier de vivier.\n2. Agent → data siège : reconversion longue, pas un flux de l'année N+1.\n3. Écart : vacants + retraites (SWP). Levier 1 : passerelle adjoint, volume max pédagogique 8-12 / 3 ans, tuteurs nommés. Levier 2 : recrutement ciblé, pas 47 génériques. Levier 3 : binômes avant retraite. KPI : vacants, % pourvois internes, retraites avec passation. Hors : calendrier CSE inventé. Le client décide ; vous documentez."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — GEPP, cartographie, métiers critiques",
          "description": "Vérifier la distinction GEPP/SWP, le réflexe Légifrance, et la discipline des écarts et passerelles.",
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
            "title": "Quiz — GEPP, cartographie, métiers critiques",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Quelle distinction est la plus juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. GEPP et SWP sont le même tableur, vendu sous deux noms",
                  "B. Le SWP est un outil de direction (demande, offre, écart) ; la GEPP est un cadre d'emplois, de parcours et, selon le contexte, de dialogue social",
                  "C. La GEPP remplace le Code du travail",
                  "D. Le SWP autorise le junior à rédiger l'accord"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Outil de management vs cadre d'emplois et de dialogue. Ni fusion, ni substitution au droit, ni visa junior sur un accord."
              },
              {
                "question": "Nova a 1 200 salariés. Le DRH veut les « délais CSE de la GEPP » pour jeudi. Que faites-vous ?",
                "question_type": "single_choice",
                "options": [
                  "A. Réciter un délai de mémoire, 1 200 étant « au-dessus du seuil »",
                  "B. Refuser d'inventer seuil et calendrier ; renvoyer au texte (Légifrance) et à l'avis social ; livrer le diagnostic d'emplois",
                  "C. Rédiger l'accord pour gagner du temps",
                  "D. Annoncer qu'aucune règle n'existe jamais en France"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le junior ne récite pas un seuil ni un délai. Il vérifie, il oriente vers l'avis social, il livre le diagnostic. Nier tout cadre est aussi faux qu'inventer le calendrier."
              },
              {
                "question": "Pourquoi limiter un référentiel à 8–15 emplois-repères en vague 1 ?",
                "question_type": "single_choice",
                "options": [
                  "A. Parce que le droit l'interdit au-delà",
                  "B. Pour servir une décision dans le temps d'une mission, calibrer, et éviter 200 fiches mortes",
                  "C. Parce que Power BI ne gère pas plus de 15 lignes",
                  "D. Pour cacher les métiers sensibles au CSE"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "C'est de la méthode, pas une interdiction légale ni une limite d'outil, ni une stratégie de dissimulation."
              },
              {
                "question": "Une passerelle « agent Facility → data analyst siège » dans le SWP de l'année :",
                "question_type": "single_choice",
                "options": [
                  "A. Se compte comme 12 recrutements évités, slogan suffisant",
                  "B. Est en général une reconversion longue : on ne la compte pas comme vanne de l'année sans vivier, délai et avis si le contrat bouge",
                  "C. Est obligatoire en GEPP à 1 200 salariés",
                  "D. Remplace la formation des responsables d'exploitation"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Une reconversion longue n'est pas un flux N+1. Rien n'est « obligatoire à 1 200 » ici. Ça ne remplace pas le métier critique exploitation."
              },
              {
                "question": "Que livrez-vous au COMEX à partir d'une matrice de compétences ?",
                "question_type": "single_choice",
                "options": [
                  "A. La liste nominative des notes",
                  "B. Les % sous cible par compétence critique, volumes, leviers, limites d'échantillon — pas de nominatif",
                  "C. Un benchmark de branche inventé",
                  "D. Le projet d'accord GEPP"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Agrégats actionnables, limites, pas de nominatif COMEX, pas de faux benchmark, pas d'accord."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 6,
      "title": "Organisation cible, TOM et processus",
      "description": "Esquisser une organisation cible (span of control, strates, RACI, central / local), un Target Operating Model as-is / to-be, et simplifier un processus RH avec SIPOC — sans valider une restructuration juridique.",
      "lessons": [
        {
          "title": "Concevoir une organisation cible",
          "description": "Relier span of control, nombre de strates, RACI et arbitrage central / décentralisé, sans confondre organigramme et acte juridique.",
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
              "content": "À la fin de cette leçon, vous savez lire un organigramme avec quatre leviers (éventail de contrôle, strates, RACI, central vs local), formuler une hypothèse d'organisation cible, et refuser de « valider » une restructuration au sens du droit du travail. Vous distinguez un constat d'organisation d'une décision sociale."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Concevoir une organisation, ce n'est pas redessiner des cases. C'est décider comment le travail se coordonne : qui encadre qui, à quelle profondeur, qui tranche, et ce qui est commun ou local. Quatre leviers se tiennent.\n\nLe span of control (éventail de contrôle) est le nombre de reports directs d'un manager. Trop étroit, on multiplie managers, strates et coût. Trop large, le manager administre au lieu d'accompagner. Il n'existe pas de nombre magique : un plateau, un bureau d'études et une équipe terrain n'ont pas le même span. Chez Groupe Nova Services — groupe fictif, 1 200 salariés — on voit souvent, à titre pédagogique, un siège à 3 ou 4 reports et des opérations à 15 ou 18, sans que cela ait été choisi.\n\nLes strates mesurent la profondeur COMEX–terrain. Chaque couche ajoute délai, filtrage et coût. Les alléger est une hypothèse d'organisation, pas un plan social. Le junior ne valide pas une restructuration juridique (PSE, transfert, consultation) : il constate et renvoie à un avis social et au texte, à vérifier sur Légifrance.\n\nLa matrice RACI (Réalisateur, Approbateur, Consulté, Informé) clarifie. Une décision, un seul A. Plusieurs R possibles. Confondre C et A, c'est diluer. Centraliser ou décentraliser n'est pas un goût : on centralise l'homogène (politique, SI, conformité, reporting) et on laisse local la proximité."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Procédez par écrit, à partir de faits, pas d'un organigramme « joli ».\n1. Comptez les strates du COMEX au premier niveau opérationnel, par BU si les profondeurs diffèrent.\n2. Calculez le span réel de chaque manager (reports directs, pas « l'équipe au sens large »). Signalez les extrêmes, sans en faire une moyenne publiable comme benchmark.\n3. Listez cinq à huit décisions qui bloquent aujourd'hui (embauche, promotion, budget formation, règle d'absence, arbitrage de charge). Pour chacune, nommez un seul A, des R, des C, des I.\n4. Classez les sujets : doit être commun / peut être local / à trancher. Le « un peu des deux » est un non-choix.\n5. Formulez une hypothèse cible en une page : ce qui change, ce qui ne change pas, ce qui est hors périmètre.\n6. Dès que le to-be touche aux emplois, aux sites ou aux statuts, vous stoppez le « on décide » : vous alertez le manager de mission et vous renvoyez vers un avis social. Vous n'inventez ni délai ni seuil d'effectif."
            },
            {
              "block_type": "callout",
              "content": "Un organigramme cible, un RACI ou un dimensionnement n'est pas un acte juridique. Le junior n'approuve pas un PSE, un accord, une information-consultation du CSE, ni un transfert. Il documente une hypothèse et demande l'avis habilité. Vérifier le texte sur Légifrance et l'avis social du client."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Chez Nova Services (cas fictif), la BU Customer Care a sept strates entre le directeur général et l'agent. Trois managers de proximité encadrent chacun deux personnes ; le responsable de plateau en encadre dix-huit. Les embauches sont « validées » par le manager, le RH de BU, le contrôleur, le directeur de BU et parfois le siège — cinq A de fait, donc aucun. Le consultant ne propose pas « de supprimer deux strates la semaine prochaine ». Il montre le délai de décision, le coût d'encadrement pédagogique, le RACI actuel, et une cible : un A unique sur l'embauche non cadre, un span cible à discuter par métier, une strate de coordination à fusionner si les rôles sont redondants. La faisabilité sociale, le calendrier légal et les instances ne sont pas son visa."
            },
            {
              "block_type": "code",
              "content": "RACI — une décision, un seul A\nDécision                         R (fait)     A (un seul)   C              I\nEmbauche non cadre lot 1         Manager      RHBP unique   CoE, finance   Équipe\nRègle d'absence (hors CCN)       CoE RH       DRH           CSE*           Managers\nParamètre SIRH commun            CSP / SI     DRH           DSI            BU\nAnimation d'équipe locale        Manager      Manager       RHBP           CSP\n\n* C = consulté au sens RACI, ce n'est PAS la consultation légale des instances.\n  Le RACI ne remplace pas le CSE. Données pédagogiques, pas un modèle opposable."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Coller un span « 7 ± 2 » comme vérité universelle. Compter les strates sur le slide et pas sur le reporting réel. Mettre plusieurs A « pour embarquer tout le monde ». Dessiner le to-be avant d'avoir le as-is. Confondre centralisation et prise de pouvoir du siège. Présenter un organigramme cible comme une décision déjà « validée RH ». Inventer un délai de consultation ou un seuil d'effectif. Traiter le CSE comme une case RACI parmi d'autres."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Dans une TPE, le RACI tient en cinq lignes : le dirigeant est souvent le seul A. Dans un groupe multi-BU, deux organisations coexistent : celle du reporting et celle du pouvoir réel (dotted lines). En international, un span étroit au siège et large au terrain n'est pas forcément une erreur : c'est parfois la distance et la langue. Dans le public, les strates et les grades ne se « fusionnent » pas comme dans un slide privé. En industrialisation d'un réseau, décentraliser l'animation et centraliser le SI est souvent plus tenable que l'inverse. Quel que soit le contexte, dès qu'il y a suppression de poste, transfert ou modification substantielle, le junior ne tranche pas."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Nova Services, 1 200 salariés (fictif). Vous relevez : 7 strates en Customer Care, 4 au siège ; spans de 2 et de 18 ; cinq personnes « valident » chaque embauche non cadre. En cinq lignes : (1) le constat d'organisation, (2) une hypothèse cible, (3) le RACI cible de l'embauche non cadre (un seul A), (4) ce que vous centralisez vs laissez local, (5) ce que vous ne validez pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Constat : profondeur hétérogène, spans extrêmes non choisis, décision d'embauche diluée. Ce sont des faits d'organisation, pas un jugement moral. (2) Hypothèse : réduire la redondance de coordination en Customer Care, rapprocher les spans par métier (pas une moyenne unique), un A unique sur l'embauche non cadre. (3) RACI cible : R = manager demandeur ; A = RHBP (ou DRH selon gouvernance) ; C = finance si écart au budget, CoE recrutement si cadre ou métier critique ; I = équipe et CSP. Un seul A. (4) Central : politique, SIRH, reporting, règles. Local : animation, planning d'équipe, arbitrage de charge quotidien. (5) Vous ne validez pas la suppression de strates au plan juridique, ni le calendrier social, ni l'information-consultation. Vous livrez l'hypothèse et le signal d'avis social / Légifrance."
            }
          ],
          "position": 0
        },
        {
          "title": "Cibler un Target Operating Model",
          "description": "Décrire un TOM sur plusieurs dimensions (processus, organisation, gouvernance, tech, data, compétences, KPI) et passer de l'as-is au to-be par écarts, pas par slogan.",
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
              "content": "Vous définissez un Target Operating Model. Vous le distinguez d'un organigramme. Vous savez renseigner as-is et to-be sur sept dimensions, et transformer les écarts en questions de mission — sans en faire un plan social ni un benchmark inventé."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Le Target Operating Model (TOM) décrit comment l'entreprise — ou la fonction RH — doit fonctionner pour tenir sa stratégie. Ce n'est pas un organigramme. L'organigramme est une coupe : qui reporte à qui. Le TOM relie plusieurs coupes. Une cible « on crée un CSP » sans processus, données, compétences ni KPI n'est pas un TOM. C'est un slogan de réorganisation.\n\nSept dimensions tiennent un junior : processus ; organisation (rôles, span, strates, central / local) ; gouvernance ; technologie (SIRH, workflow — sans prétendre ouvrir un outil que vous n'avez pas) ; données (définitions ETP, qualité) ; compétences ; KPI de fonctionnement. On peut en ajouter (lieux, prestataires) : on n'en retire pas pour aller plus vite.\n\nAs-is puis to-be. Inverser, c'est dessiner un château. L'as-is se prouve. Le to-be se décide (sponsor). Les écarts deviennent le backlog. Chez Nova Services, 1 200 salariés fictifs, la RH est fragmentée par BU : mini-RH, peu de règles communes, SIRH mal nourri. Le TOM n'est pas « tout mettre au siège ». C'est dire, dimension par dimension, ce qui change et ce qui reste. Un TOM qui implique des suppressions n'autorise rien : le junior signale, il ne vise pas."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Tenez une grille à sept lignes, deux colonnes (as-is / to-be), une colonne écart, une colonne « qui tranche ».\n1. Processus : 5 à 8 processus RH critiques (recrutement, entrée, données de paie, absences, formation, sortie). As-is = hétérogène / local / en silo. To-be = standard, exception nommée.\n2. Organisation : rôles, rattachements, span, strates — hypothèse, pas organigramme définitif.\n3. Gouvernance : comités, RACI des décisions RH, lien avec le CSE (signalé, pas instruit par vous).\n4. Tech : ce qui existe, ce qui est mal utilisé, ce que l'on n'achète pas encore.\n5. Data : définitions, maille, responsable de la qualité. Pas de « taux marché » inventé.\n6. Compétences : écart entre le rôle cible et le réel (RHBP vs administrateur).\n7. KPI : 4 à 6 indicateurs de fonctionnement (délai, qualité, charge), distincts des KPI business.\nContrôle : si une dimension est vide, le TOM n'est pas prêt. Si le to-be social n'a pas d'alerte juridique, il n'est pas honnête."
            },
            {
              "block_type": "callout",
              "content": "Les chiffres de Nova Services dans ce parcours sont pédagogiques. Ils n'ont pas valeur de benchmark de marché. Un TOM n'est pas une garantie de performance, ni une certification, ni un titre."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services veut « une RH moderne ». Sans TOM, le slide dit : CSP, SIRH, HRBP. Avec TOM, l'as-is montre : processus d'embauche différent par BU, quatre fichiers d'effectifs, pas de définition unique d'ETP, managers qui signent tout, RH de BU qui font à la fois l'admin, le recrutement et le social. Le to-be pédagogique : processus communs pour l'admin, exceptions BU documentées ; un référentiel d'effectifs ; gouvernance mensuelle DRH / BU ; SIRH nourri avant tout nouvel outil ; compétences de RHBP à construire, pas à décréter ; KPI de délai d'embauche et de qualité de dossier, pas un « NPS RH » sorti de nulle part. L'écart « quatre admin locaux → un CSP » est une hypothèse de charge et de rôle. Ce n'est pas une liste de personnes à déplacer. Le déplacement, s'il a lieu, sort du TOM junior et entre dans le social."
            },
            {
              "block_type": "code",
              "content": "TOM RH — grille as-is / to-be (Nova Services, fictif)\nDimension     As-is (preuves)              To-be (décidé)            Écart / question\nProcessus     Embauche × 4 BU              Cible unique + exceptions Qui standardise ?\nOrganisation  RH dans chaque BU            CSP / CoE / HRBP (esquisse) Rôles, pas noms\nGouvernance   Décisions diluées            Un A par décision clé     RACI\nTech          SIRH mal nourri              Qualité d'abord           Pas d'achat précipité\nData          4 fichiers effectifs         Un référentiel ETP        Définition unique\nCompétences   RH « à tout faire »          Distinguer admin / conseil Plan d'accompagnement\nKPI           Peu, non partagés            Délai, qualité, charge    Cible pédagogique\n\nTo-be ≠ organigramme nominatif. To-be ≠ visa juridique."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Réduire le TOM à un organigramme. Écrire le to-be en workshop créatif sans as-is. Copier le modèle d'un autre client. Inventer un benchmark (« les entreprises de 1 200 ont toutes un CSP »). Acheter un SIRH pour « créer » le TOM. Mettre la culture en slide et rien sur les données. Oublier les KPI, donc ne jamais savoir si le to-be existe. Faire signer le TOM comme s'il autorisait les suppressions de postes."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "À 1 200 personnes, un CSP ultra-spécialisé peut être trop lourd : un pool admin plus des HRBP mixtes est souvent plus réaliste — c'est une hypothèse, pas une norme. En croissance rapide, le to-be doit tenir la charge, pas seulement l'élégance. En multi-sites, la tech et la data communes importent plus que le lieu des personnes. Si une BU est en tension sociale, le TOM se cadencera après l'avis habilité, pas avant. En mode prestataire, le TOM du client n'est pas le vôtre : vous livrez une cible et des écarts, le client décide."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Pour la RH de Nova Services, remplissez mentalement les sept dimensions : une phrase as-is, une phrase to-be, l'écart principal. Quelle dimension, si elle reste vide, rend le TOM inutilisable ? Que ne contient pas votre livrable ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "As-is type : processus hétérogènes, RH de BU généralistes, gouvernance diluée, SIRH incomplet, quatre fichiers, compétences admin/conseil mélangées, peu de KPI partagés. To-be type : processus communs, rôles distingués, un A par décision, donnée d'effectif unique, compétences à construire, 4 à 6 KPI de fonctionnement. L'écart principal est souvent la donnée et le processus, pas le dessin des cases. Si la data ou les processus restent vides, le TOM est un organigramme déguisé, donc inutilisable. Votre livrable ne contient pas la liste nominative des personnes à réaffecter, ni un calendrier légal de restructuration, ni un benchmark réel inventé."
            }
          ],
          "position": 1
        },
        {
          "title": "Cartographier et simplifier un processus RH",
          "description": "Utiliser SIPOC puis une carte simple pour réduire les allers-retours d'un processus RH, avant d'ajouter un outil ou une équipe.",
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
              "content": "Vous savez construire un SIPOC, enchaîner une cartographie à gros grain, distinguer goulots, doublons et contrôles utiles, et proposer une simplification. Vous ne confondez pas carte de processus et procédure juridique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un processus RH transforme une demande en résultat : embauche, entrée, absence, formation, sortie. Quand la chaîne est opaque, chacun ajoute une étape « pour être sûr ». Le délai explose, la qualité non. Cartographier rend la chaîne visible. Simplifier retire ce qui n'ajoute pas de contrôle réel.\n\nSIPOC est un cadrage, pas un diagramme. Fournisseurs, Entrées, Processus (5 à 8 étapes), Sorties, Clients. Sans SIPOC, on se perd dans les micro-tâches. Ensuite on détaille : acteur, délai pédagogique, document, système. On cherche goulots, doublons, files d'attente, contrôles fantômes (une « validation » que personne ne lit).\n\nLa simplification a un ordre : éliminer, regrouper, standardiser, puis seulement automatiser. Un workflow sur un processus tordu automatise le détour. Chez Nova Services (fictif), le recrutement non cadre a onze handoffs : le SIPOC tient en une page ; trois validations disent la même chose. Ce n'est pas une obligation légale de tout viser cinq fois. Inversement, données de paie et pièces d'entrée ne se « simplifient » pas par confort. Une carte n'est ni une procédure opposable, ni un avis URSSAF, ni une consultation d'instances."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une séance, un processus, des preuves, une page SIPOC puis une carte.\n1. Choisissez un processus douloureux (recrutement, entrée, absence, donnée de paie). Nommez le résultat attendu.\n2. SIPOC : 3 à 5 fournisseurs, 3 à 5 entrées, 5 à 8 étapes, 3 sorties, 2 à 4 clients internes. Faites-le relire par quelqu'un qui exécute, pas seulement par le DRH.\n3. Carte : pour chaque étape, acteur, délai constaté (pédagogique), système, document. Marquez R / A si le RACI existe.\n4. Diagnostic : goulot, doublon, file d'attente, contrôle sans lecteur, exception devenue règle.\n5. Simplification : éliminer (étape sans A), regrouper (deux validations identiques), standardiser (même formulaire), automatiser en dernier. Chaque retrait a un risque : dites-le.\n6. Cible : même SIPOC, moins d'étapes, un A par décision, exceptions nommées. Mesure : délai et taux de dossier complet — chiffres du client, pas un benchmark inventé.\nInterdit : effacer une étape « sociale » ou paie parce qu'elle ralentit le slide."
            },
            {
              "block_type": "callout",
              "content": "SIPOC et cartes sont des outils de diagnostic. Ils ne remplacent pas le règlement intérieur, la convention collective, les obligations d'entrée ou le dialogue social. Si une étape existe pour une obligation, vous la nommez ; vous ne l'effacez pas pour « gagner cinq jours »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Processus pédagogique « recrutement non cadre » chez Nova Services. SIPOC : fournisseurs = manager, RH de BU, candidat, contrôle de gestion ; entrées = besoin, fiche, CV, validation budget ; processus = exprimer le besoin → « valider » (cinq fois) → sourcer → préqualifier → entretien → offre → dossier d'entrée ; sorties = contrat signé, ligne d'effectif, dossier incomplet trop souvent ; clients = manager, paie, nouvel arrivant. La carte montre onze handoffs et un goulot : le directeur de BU signe tout, y compris les CDD de remplacement. Simplification : un A unique sous un seuil pédagogique de budget ; dossier d'entrée commencé pendant le préavis, pas après J0 ; une saisie SIRH, pas deux fichiers. On ne « simplifie » pas le contrôle des pièces d'embauche. On ne présente pas les onze handoffs comme un délai légal."
            },
            {
              "block_type": "code",
              "content": "SIPOC — Recrutement non cadre (Nova Services, fictif, pédagogique)\nS Fournisseurs     Manager BU | RH local | Candidat | Contrôle de gestion\nI Entrées          Expression de besoin | Fiche | CV | OK budget\nP Processus (cible, 6 étapes — pas 11 handoffs)\n                   1. Besoin cadré (manager, A = RHBP)\n                   2. Sourcer / préqualifier\n                   3. Entretien\n                   4. Offre (A unique)\n                   5. Dossier d'entrée (CSP)\n                   6. J0 managérial\nO Sorties          Contrat | Ligne effectif | Dossier complet\nC Clients          Manager | Paie / admin | Arrivant\n\nPuis éliminer / regrouper / standardiser / automatiser — dans cet ordre.\nUne étape légale ou paie ne s'élimine pas sur un workshop."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Cartographier 120 micro-tâches avant d'avoir le SIPOC. Prendre le process « officiel » et ignorer le process réel. Automatiser en premier. Supprimer un contrôle paie ou un jalon social « parce que c'est long ». Inventer un délai de marché (« un recrutement doit durer 21 jours »). Faire la carte seul dans son coin. Confondre client du processus (le manager) et client de l'entreprise. Transformer SIPOC en livrable de 40 pages."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Absences et paie : la simplification s'arrête où commence l'obligation de déclaration et de calcul. Recrutement cadre vs non cadre : deux processus, pas une moyenne. International : un SIPOC France n'est pas un SIPOC d'une filiale. Volume vs exception : le CSP aime le volume standard ; les métiers critiques restent en CoE ou HRBP. Si le processus alimente une instance (orientations, emplois), vous cartographiez le flux d'information, vous n'inventez pas le calendrier de consultation."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le DRH de Nova Services veut « un outil de recrutement pour aller plus vite ». Le processus actuel a, à titre pédagogique, 11 handoffs et 5 validations. Produisez le SIPOC en 8 lignes, nommez deux étapes à regrouper, une étape à ne pas supprimer, et la phrase que vous dites sur l'outil."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "SIPOC : S = manager, RH, candidat, finance ; I = besoin, budget, CV ; P = cadrer, sourcer, entretenir, offrir, entrer, démarrer ; O = contrat, effectif, dossier ; C = manager, paie, arrivant. À regrouper : les cinq validations d'embauche non cadre en un A unique sous seuil. À ne pas supprimer : le contrôle des pièces et des données d'entrée / paie. Phrase sur l'outil : on standardise et on enlève les handoffs d'abord ; l'outil vient après, sinon il automatise les 11 allers-retours. Vous n'annoncez pas un délai légal ni un benchmark. Vous ne validez aucune suppression de poste liée à la « productivité processus »."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Organisation, TOM et processus",
          "description": "Vérifier span et RACI, TOM as-is / to-be, SIPOC, et la limite juridique du junior.",
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
            "title": "Quiz — Organisation, TOM et processus",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Chez Nova Services, un manager de plateau encadre 18 personnes, un manager siège en encadre 3. Que pouvez-vous en conclure professionnellement ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le siège est forcément trop cher : la norme universelle est 7 reports.",
                  "B. 18 est illégal : un manager ne peut pas dépasser 12 reports.",
                  "C. Les spans sont hétérogènes ; la pertinence se juge par métier et par charge de management, pas par un nombre magique.",
                  "D. Il faut immédiatement fusionner les strates, le junior peut viser la restructuration."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Il n'existe pas de span légal unique ni de nombre magique. 3 et 18 sont des faits à interpréter par métier. Fusionner des strates n'est pas un visa juridique du junior."
              },
              {
                "question": "Dans un RACI d'embauche non cadre, quelle règle est correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Plusieurs A « pour embarquer la BU, la RH, la finance et le siège ».",
                  "B. Un seul A par décision ; plusieurs R possibles ; C n'est pas une décision.",
                  "C. Le CSE est le A, car toute embauche se consulte.",
                  "D. Le consultant junior est le A, car il a dessiné l'organisation cible."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un A unique. Plusieurs R se coordonnent. C informe ou donne un avis, ce n'est pas trancher. Le CSE n'est pas une case RACI comme une autre. Le junior n'est pas le décideur du client."
              },
              {
                "question": "Un Target Operating Model RH se distingue d'un organigramme parce que :",
                "question_type": "single_choice",
                "options": [
                  "A. Le TOM est l'organigramme to-be, simplement plus coloré.",
                  "B. Le TOM relie processus, organisation, gouvernance, tech, data, compétences et KPI, en as-is puis to-be.",
                  "C. Le TOM remplace le business case et le plan social.",
                  "D. Le TOM n'a de valeur que s'il copie le modèle d'un grand groupe."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'organigramme est une coupe. Le TOM est un système à plusieurs dimensions, ancré dans l'as-is. Il ne vaut pas plan social ni copie conforme."
              },
              {
                "question": "Le DRH veut un outil pour raccourcir un recrutement à 11 handoffs. Quelle séquence est professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Acheter l'outil d'abord, le process suivra.",
                  "B. SIPOC et carte, puis éliminer / regrouper / standardiser, puis seulement automatiser.",
                  "C. Supprimer les contrôles d'entrée et de paie, ce sont des goulots.",
                  "D. Publier un délai de 21 jours comme benchmark de marché."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "On clarifie et on simplifie avant d'automatiser. Les contrôles paie / pièces ne s'effacent pas. Aucun délai de marché n'est inventé ici."
              },
              {
                "question": "Votre organigramme cible enlève une strate de managers. Que faites-vous en tant que junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Vous validez la restructuration : le TOM suffit.",
                  "B. Vous inventez un délai de consultation CSE pour rassurer le COMEX.",
                  "C. Vous livrez l'hypothèse d'organisation, vous signalez l'impact emplois / statuts, et vous renvoyez à un avis social et au texte (Légifrance). Vous ne visez pas.",
                  "D. Vous présentez le RACI du CSE comme l'information-consultation légale."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le junior documente une hypothèse. Il ne valide pas l'acte juridique, n'invente pas les délais, et ne confond pas RACI et consultation des instances."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 7,
      "title": "Transformation RH, changement et projet",
      "description": "Esquisser un modèle RH (CSP, centres d'expertise, HRBP), conduire l'adoption avec les parties prenantes (ADKAR comme un cadre parmi d'autres) et tenir un projet de conseil (planning, comité, risques, agile vs classique) — sans valider une restructuration juridique.",
      "lessons": [
        {
          "title": "Transformer le modèle RH",
          "description": "Distinguer CSP, centres d'expertise et HRBP, et les dimensionner à une entreprise de taille intermédiaire, sans copier un grand groupe.",
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
              "content": "Vous savez expliquer le trio CSP / centre d'expertise / HRBP, ce que chacun prend et ne prend pas, et pourquoi un copier-coller sur 1 200 personnes échoue. Vous reliez ce modèle au TOM, pas à un organigramme nominatif, et vous ne validez aucune réaffectation juridique."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Transformer la RH, ce n'est pas « digitaliser ». C'est répartir le travail entre trois logiques, souvent inspirées d'Ulrich — un cadre répandu, pas une obligation ni le seul possible. Le CSP (centre de services partagés) traite le volume standardisé : dossiers, données, première ligne. Le centre d'expertise (CoE) conçoit règles et outils : rémunération, talent, social, recrutement cadre, GEPP. Le HRBP traduit la stratégie de la BU, challenge le manager, relie le terrain aux expertises. Si tout le monde fait tout, personne n'est partenaire, expert, ni industriel.\n\nCe sont des rôles, pas trois armées. Chez Groupe Nova Services — 1 200 salariés fictifs, RH fragmentée par BU — un HRBP peut garder une expertise légère ; un CSP peut être un pool de six personnes, pas un shared services de 80. Copier un groupe de 40 000 produit des cases vides.\n\nOn échoue si l'on crée le CSP avant de standardiser, si l'on nomme des HRBP sans retirer l'admin, ou si le CoE écrit des politiques non appliquées. Le to-be est un TOM, pas un slide « on passe en Ulrich ». Transfert, site, postes : le junior alerte et renvoie à un avis social et au texte. Il n'est pas le juriste de la restructuration."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Partez du TOM as-is, pas d'un modèle célèbre.\n1. Listez les activités RH (admin, paie-liaison, recrutement volume, recrutement critique, social, formation, données, conseil manager). Volume vs jugement.\n2. Classez : CSP (volume, standard), CoE (règle, exception complexe), HRBP (proximité, arbitrage business), manager (ce qui ne devrait plus transiter par la RH).\n3. Pour chaque activité, un propriétaire cible, un A, un volume pédagogique, une compétence à construire. Pas de nom de personne sur le premier jet.\n4. Vérifiez la taille : à 1 200 salariés, trop de spécialistes créent de la file d'attente. Fusionnez des CoE si le volume ne justifie pas un poste plein.\n5. Séquence : d'abord processus et données, puis pool admin, puis montée des HRBP, puis CoE. Inverser, c'est coller des titres sur l'existant.\n6. Impacts emplois / sites / statuts : page d'alerte, pas de calendrier inventé. Légifrance et avis social, pas votre visa."
            },
            {
              "block_type": "callout",
              "content": "CSP, CoE et HRBP sont des rôles cibles. Les nommer ne crée ni la compétence ni le droit de réaffecter. Un consultant junior ne valide pas une restructuration, un transfert, ni une information-consultation. Vérifier le texte et l'avis social du client."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services a, à titre pédagogique, une vingtaine de RH « à tout faire » répartis dans quatre BU. Le COMEX veut « des vrais HRBP ». Sans méthode, on renomme les mêmes personnes : elles continuent les dossiers, n'ont plus le temps de challenger, et le CSP n'existe pas. Avec méthode, on isole d'abord les flux admin (données, absences, dossiers d'entrée) dans un pool unique ; on clarifie deux ou trois expertises réellement critiques (social, recrutement tendu) ; on dégage du temps HRBP sur deux BU pilotes. Les titres suivent le travail, pas l'inverse. Si le pool implique un changement de lieu ou de rattachement, ce n'est plus une slide RH : c'est un sujet social que vous signalez, vous ne l'arbitrez pas."
            },
            {
              "block_type": "code",
              "content": "MODÈLE RH — rôles (cadre parmi d'autres, pas une norme)\nCSP / pool admin     Volume standard : dossiers, data, 1re ligne\nCoE                  Règles et cas complexes : social, rémunération, talent…\nHRBP                 Proximité BU : besoin, challenge, relais vers CSP/CoE\nManager              Management quotidien : pas un ticket RH pour tout\n\nÀ ~1 200 salariés (Nova, fictif) : souvent pool + HRBP mixtes + CoE légers.\nPas un copier-coller de grand groupe. Pas de liste nominative = pas un PSE."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Renommer tout le monde HRBP. Créer un CSP sans processus commun. Staffer trois CoE pour un volume de deux dossiers par mois. Oublier le manager dans le modèle (la RH absorbe alors le management). Acheter un SIRH pour « faire le CSP ». Présenter le modèle comme obligatoire. Glisser des noms dans l'organigramme cible et le faire signer comme une décision sociale."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Filiale d'un groupe : le CSP peut être au corporate ; le HRBP local n'en devient pas un simple relais silencieux. Public / associatif : les titres diffèrent, les trois logiques (volume, expertise, proximité) restent utiles. International : un CoE social France n'est pas le CoE d'un autre pays. Externalisation du CSP : c'est un make or buy, pas « plus moderne » par nature ; le junior n'engage pas le contrat. Tension sociale en cours : on ne lance pas une bascule de modèle par-dessus une négociation. On cadencera après avis habilité."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le COMEX de Nova Services demande « Ulrich en six semaines, avec CSP, trois CoE et un HRBP par BU ». En six lignes : ce que vous acceptez comme intention, ce que vous recalez (taille, séquence), et ce que vous ne validez pas."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Intention acceptable : séparer volume, expertise et proximité, pour que le conseil aux managers existe vraiment. Recalage : six semaines ne créent ni processus ni compétences ; trois CoE plein temps sont probablement trop pour 1 200 personnes ; un HRBP par BU plus un CSP plus trois CoE est un copier-coller. Séquence : processus et data, pool admin, HRBP sur pilote, CoE selon volume réel. Vous ne validez pas la réaffectation des vingt RH, le lieu du pool, ni un calendrier d'instances. Vous livrez un modèle de rôles et une alerte sociale."
            }
          ],
          "position": 0
        },
        {
          "title": "Conduire le changement et l'adoption",
          "description": "Cartographier les parties prenantes, utiliser ADKAR comme un cadre parmi d'autres, et mesurer l'adoption plutôt que la présence au lancement.",
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
              "content": "Vous savez dresser une carte des parties prenantes, choisir un cadre de changement (ADKAR n'est pas le seul), et distinguer communication, formation et adoption. Vous mesurez des comportements, pas des invitations."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un TOM ou un modèle RH n'existe que s'il est adopté. L'adoption, c'est faire autrement : le manager utilise le bon canal, le RHBP ne reprend pas l'admin, le dossier n'emprunte plus le chemin de traverse. Une plénière, un logo et 90 % de présence ne prouvent rien. On a informé. On n'a pas changé.\n\nLes parties prenantes ne sont pas « tout le monde ». On cartographie intérêt, pouvoir, perte et gain. Un DRH, un manager, un RH de BU, un CSE, un DSI : cinq conversations, pas un e-mail unique. Le CSE n'est pas un « résistant ADKAR » : c'est une instance. Le junior ne mène pas l'information-consultation, n'invente pas les délais, et ne contourne pas le social avec un cadre de change.\n\nADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) est un cadre parmi d'autres, aux côtés de Kotter, de Lewin, des courbes d'appropriation. Il diagnostique un trou : on ne sait pas pourquoi, on ne veut pas, on ne sait pas, on ne sait pas faire, ou rien n'entretient le geste. Aucun cadre n'est une science unique ni une obligation. L'adoption se mesure : usage du processus cible, fichiers parallèles, qualité — données du client, pas un benchmark inventé."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une carte, un cadre, des mesures. Pas un kit de goodies.\n1. Listez les groupes : COMEX, DRH, RH de BU, managers, salariés concernés, DSI, finance, instances. Pour chacun : pouvoir, intérêt, perte / gain, attitude actuelle.\n2. Formulez l'adoption cible en comportements (« le manager dépose le besoin dans le canal unique », pas « adhère à la vision »).\n3. Choisissez un cadre pour diagnostiquer les trous — ADKAR ou un autre, explicitement « parmi d'autres ». Un trou D (désir) ne se soigne pas par un tutoriel (K).\n4. Plan : messages par groupe, formation à l'outil et au rôle, relais managers, rythme de renforcement (ce que l'on arrête de tolérer : le fichier parallèle).\n5. Mesurez à 30 / 60 / 90 jours pédagogiques : usage, contournements, qualité. Revoyez le plan, pas le slogan.\n6. Social et légal : si le changement touche l'emploi, l'organisation juridique ou les instances, vous signalez. Vous ne « managez » pas le CSE comme un stakeholder marketing."
            },
            {
              "block_type": "callout",
              "content": "ADKAR, Kotter, Lewin : cadres d'analyse, pas des certifications de ce parcours, pas des obligations légales. L'attestation LOU Academy n'en fait pas un titre. Le dialogue social a ses textes : Légifrance et avis habilité, pas un atelier d'adoption."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova Services lance le canal unique de demande RH. Lancement : 200 managers en visio, applause. Trente jours plus tard, 60 % des demandes arrivent encore par e-mail au RH de BU — chiffre pédagogique, pas un benchmark. Diagnostic ADKAR : Awareness à peu près là ; Desire faible (le RH local répond plus vite que le CSP) ; Knowledge partiel ; Ability faible sur le formulaire ; Reinforcement nul (personne ne refuse l'e-mail). Un plan Kotter mal lu aurait multiplié les « coalitions » et les slides. Ici, on ferme la voie de traverse, on forme au formulaire, on donne au HRBP un temps de conseil, on mesure le % de demandes dans le canal. Le CSE, s'il doit être informé d'une réorganisation plus large, n'est pas « la cible Desire du pack ». C'est un autre circuit."
            },
            {
              "block_type": "code",
              "content": "PARTIES PRENANTES × ADOPTION (Nova, fictif)\nGroupe          Perte / gain              Trou typique     Levier\nManagers        Temps vs clarté           Ability, Desire  Outil simple + relais\nRH de BU        Identité « je fais tout » Desire           Nouveau rôle réel\nHRBP cibles     Charge si admin reste     Ability          Retirer l'admin d'abord\nCOMEX           Impatience de slides      Reinforcement    KPI d'usage, pas kickoff\nInstances       Droits d'information      ≠ cadre change   Avis social / textes\n\nCadres : ADKAR | Kotter | Lewin | autres — un parmi d'autres.\nAdoption = comportement mesuré. Présence au lancement ≠ adoption."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Confondre lancement et adoption. Envoyer le même message à tous. Former (K) alors que le trou est le désir (D) ou le renforcement (R). Présenter ADKAR comme le seul cadre scientifique. Traiter le CSE comme un résistant à « embarquer ». Inventer un taux d'adoption de marché. Mesurer la satisfaction du kickoff. Continuer à accepter le fichier parallèle « le temps que ça prenne »."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Changement d'outil seul : souvent un problème d'Ability et de Reinforcement, pas de vision. Changement de rôle (RHBP) : Desire et identité, plus long. Multi-sites : relais locaux, pas un e-mail siège. Fusion / acquisition : le change se cale sur le social, pas l'inverse. Équipes en sous-effectif : demander de l'adoption sans retirer de charge est un vœu. Crise : on réduit le périmètre de changement, on n'ajoute pas un « transformation pack »."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le canal unique de Nova est lancé. Taux pédagogique d'usage à 30 jours : 40 %. Les RH de BU répondent encore aux e-mails. En cinq points : parties prenantes clés, cadre utilisé (et pourquoi ce n'est pas le seul), trou probable, action de renforcement, ce que vous ne faites pas vis-à-vis des instances."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Parties prenantes : managers (usagers), RH de BU (voie de traverse), HRBP, DRH, DSI, instances si le projet dépasse l'outil. Cadre : ADKAR pour localiser le trou, ou Kotter / Lewin si l'on parle coalition et gel des anciennes règles — vous dites que c'est un cadre parmi d'autres. Trou probable : Desire + Reinforcement (le vieux canal est plus confortable) plus Ability sur le formulaire. Renforcement : ne plus traiter l'e-mail hors exception, mesurer l'usage, aider les 40 % déjà dedans. Instances : vous ne les « ADKAR-isez » pas ; si réorganisation, avis social et textes, pas un atelier de désir."
            }
          ],
          "position": 1
        },
        {
          "title": "Tenir un projet de conseil",
          "description": "Planifier une mission W&O, tenir un comité, enregistrer les risques, et situer agile vs classique sans en faire un dogme.",
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
              "content": "Vous savez poser un planning de mission (jalons, livrables, comité), tenir un registre de risques, et expliquer quand un mode itératif aide — sans remplacer le sponsor, ni le juriste, ni un Scrum théorique que la mission n'a pas."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Une mission Workforce & Organization n'est pas un sprint logiciel ni un projet industriel de dix-huit mois. C'est un projet : périmètre, livrables, rythme d'arbitrage, risques, fin. Sans cela, le diagnostic s'éternise et personne n'a décidé.\n\nLe planning junior tient en phases : cadrage, diagnostic, cibles (org / TOM / processus), plan de changement, restitution. Chaque phase a une date, un livrable, un comité. Le chemin critique n'est pas le PowerPoint : ce sont les données, les entretiens, et un A sur le to-be. Un planning sans accès ni décisions est un vœu.\n\nLe COPIL arbitre périmètre, hypothèses et go / no-go. Le COTECH prépare. Le junior anime, documente, alerte : il ne préside pas à la place du sponsor. Les risques ont un propriétaire, un impact, une mitigation. « Le changement est difficile » n'est pas un risque, c'est une tautologie.\n\nAgile vs classique : une intro, pas une conversion. Le classique (phases, jalon, comité) protège décisions et social. L'itératif aide pour ateliers, SIPOC, RACI. Beaucoup de missions sont hybrides. « On est agile » ne dispense ni de COPIL ni d'avis social. « On est en cycle en V » ne dispense pas d'ajuster un SIPOC après le terrain."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Une page de pilotage, tenue chaque semaine.\n1. Phases et jalons : cadrage (note), diagnostic (constats), cibles (TOM / org / processus), adoption, restitution. Dates liées aux accès, pas à un espoir commercial.\n2. Livrables nominatifs : qui produit, qui valide (A du client, pas vous).\n3. Instances : COPIL (décisions), COTECH ou points métier (préparation), bilatérales sponsor. Ordre du jour, décisions, actions — comme tout projet.\n4. Risques : 5 à 8 lignes max. Impact × vraisemblance en langage simple. Mitigation réelle (« slot data le 12 »), pas « communiquer davantage ».\n5. Mode de travail : dites ce qui est figé (périmètre, instances, alertes sociales) et ce qui itère (cartes, RACI, maquettes). Écrivez-le au cadrage pour éviter la guerre de religion agile / classique.\n6. Ce que le planning ne contient pas : délais légaux inventés, date de PSE, « sprints » qui cachent l'absence de décision."
            },
            {
              "block_type": "callout",
              "content": "Le consultant junior pilote la mission, pas l'entreprise. Il n'est ni le président du COPIL, ni le valideur juridique d'une réorganisation. Un planning de mission n'est pas un calendrier d'instances. Vérifier Légifrance et l'avis social dès que le livrable touche à l'emploi ou aux statuts."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Mission Nova Services, huit semaines pédagogiques. Semaines 1-2 : cadrage, accès data, carte des parties prenantes. Semaines 3-4 : diagnostic effectifs, SIPOC recrutement, spans. Semaines 5-6 : TOM as-is / to-be, hypothèse CSP / HRBP, pas de noms. Semaine 7 : plan d'adoption et risques. Semaine 8 : COPIL de restitution. Risque n°1 : les quatre fichiers d'effectifs ne recollent pas — mitigation : atelier data dès J+5, pas à J+40. Risque n°2 : le COMEX veut des noms sur l'organigramme — mitigation : le sponsor confirme que le livrable reste une hypothèse de rôles ; alerte sociale écrite. Le mode est hybride : COPIL toutes les deux semaines (classique), revues de processus en ateliers courts (itératif). Ce n'est ni du Scrum, ni un cycle en V de SI."
            },
            {
              "block_type": "code",
              "content": "PILOTAGE MISSION W&O — une page (Nova, fictif)\nPhases     Jalon              Livrable              Instance qui tranche\nCadrage    S2                 Note, accès, RACI     Sponsor\nDiagnostic S4                 Constats, SIPOC       COTECH puis COPIL\nCibles     S6                 TOM / org / process   COPIL (A client)\nAdoption   S7                 Plan + mesures        Sponsor + DRH\nRestitue   S8                 Dossier + alertes     COPIL\n\nRisques (extrait)\nID  Risque                 Impact           Mitigation              Proprio\nR1  Data effectifs × 4     Cibles fausses   Atelier data J+5        Client data\nR2  Demande de noms        Glissade sociale Livrable = rôles + alerte  Consultant\nR3  Sponsor absent         Pas d'A          Bilatérale hebdo        Sponsor\n\nHybride : décisions en COPIL | ateliers itératifs | social hors planning junior."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Remplacer le COPIL par un stand-up. Coller des sprints sur une information-consultation. Tenir un planning sans accès aux données. Avoir vingt risques et aucune mitigation. Faire valider le to-be par le junior. Promettre l'agilité pour éviter de figer le périmètre. Inventer un chemin critique légal. Livrer 80 slides et zéro décision demandée."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Mission de deux semaines : un diagnostic, pas un TOM complet. Mission au forfait : le planning est aussi un contrat ; tout ajout passe par le sponsor. Client très « agile » : vous acceptez les boucles, vous refusez l'absence d'A. Client très « cycle en V » : vous livrez des jalons, vous gardez le droit de corriger un SIPOC. Co-traitance juridique / social : leur planning n'est pas le vôtre ; vous articulez, vous ne le rédigez pas. International : fuseaux et instances locales cassent un Gantt unique."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le sponsor de Nova veut « du Scrum RH, un organigramme nominatif en sprint 2, et le CSE en même temps ». Proposez le mode de mission, trois jalons, deux risques, et la phrase de refus junior."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "Mode hybride : ateliers itératifs sur processus et RACI ; COPIL pour figer cadrage, cibles et alertes ; pas de Scrum théâtral. Jalons : note de cadrage et accès ; diagnostic (SIPOC, spans, data) ; cibles de rôles (pas de noms) + plan d'adoption. Risques : data hétérogène ; glissade vers un organigramme nominatif / social. Phrase : nous ne validons pas une restructuration ni un calendrier d'instances ; l'organigramme nominatif n'est pas un livrable junior ; le CSE n'est pas un sprint. Vérifier textes et avis social. Le COPIL tranche le périmètre, pas le stand-up."
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Transformation, changement et projet",
          "description": "Vérifier CSP / CoE / HRBP, ADKAR parmi d'autres cadres, adoption, pilotage de mission et limite juridique.",
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
            "title": "Quiz — Transformation, changement et projet",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "À Nova Services (1 200 salariés, fictif), le COMEX veut un CSP, trois CoE dédiés et un HRBP par BU « comme un grand groupe ». La réponse professionnelle est :",
                "question_type": "single_choice",
                "options": [
                  "A. D'appliquer Ulrich à l'identique : c'est le seul modèle RH.",
                  "B. De recaler la taille et la séquence (processus et data d'abord, rôles selon le volume) : le trio est une logique, pas un copier-coller.",
                  "C. De renommer tous les RH « HRBP » dès la semaine suivante.",
                  "D. De valider les réaffectations, le modèle valant plan social."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "CSP / CoE / HRBP sont des logiques utiles, pas une obligation ni un organigramme de grand groupe. On ne valide pas les réaffectations. Renommer ne transforme rien."
              },
              {
                "question": "À propos d'ADKAR, quelle affirmation est exacte dans ce parcours ?",
                "question_type": "single_choice",
                "options": [
                  "A. ADKAR est le cadre unique scientifiquement obligatoire en conseil RH.",
                  "B. ADKAR est un cadre parmi d'autres (Kotter, Lewin, etc.), utile pour diagnostiquer un trou d'adoption.",
                  "C. ADKAR remplace l'information-consultation des instances.",
                  "D. Un score ADKAR de lancement prouve que le TOM est adopté."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "ADKAR aide à voir si le trou est la conscience, le désir, le savoir, le savoir-faire ou le renforcement. Ce n'est pas le seul cadre, ni un substitut du social, ni une preuve d'adoption."
              },
              {
                "question": "Deux cents managers ont assisté au lancement du canal unique ; 40 % des demandes y passent à 30 jours (chiffre pédagogique). Que mesurez-vous comme adoption ?",
                "question_type": "single_choice",
                "options": [
                  "A. La présence à la visio, qui vaut adoption.",
                  "B. Le comportement réel : part des demandes dans le canal, contournements, qualité — pas le kickoff.",
                  "C. Un taux d'adoption « de marché » à 80 % que vous inventez pour le COPIL.",
                  "D. Le nombre de goodies distribués."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'adoption est un comportement mesuré. La présence au lancement n'en est pas une. On n'invente pas de benchmark."
              },
              {
                "question": "Quelle description du mode projet convient à une mission W&O junior ?",
                "question_type": "single_choice",
                "options": [
                  "A. Du Scrum intégral : le COPIL est remplacé par un daily, le CSE est un sprint.",
                  "B. Un cycle en V figé : aucun SIPOC ne se corrige après le terrain.",
                  "C. Souvent hybride : gouvernance et décisions en comité, ateliers itératifs ; ni dogme agile ni dogme classique.",
                  "D. Pas de planning : le conseil « agile » avance sans jalon."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Les missions W&O mixent souvent COPIL (décisions, social signalé) et boucles courtes (cartes, RACI). L'agilité ne supprime ni comité ni instances. Le classique n'interdit pas d'apprendre du terrain."
              },
              {
                "question": "Le sponsor demande un organigramme nominatif « validé par le cabinet » pour la semaine suivante. Vous :",
                "question_type": "single_choice",
                "options": [
                  "A. Livrez les noms et visez : le junior valide la restructuration.",
                  "B. Inventez un délai d'un mois « légal CSE » pour gagner du temps.",
                  "C. Refusez de viser : livrable = hypothèse de rôles + alerte emplois / statuts, avis social et texte à vérifier (Légifrance). Le client tranche.",
                  "D. Placez le CSE en A du RACI, cela vaut consultation."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Le junior ne valide pas l'acte juridique, n'invente pas les délais, et ne confond pas RACI et consultation. Il documente une hypothèse et alerte."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 8,
      "title": "Finance RH, dimensionnement et livrables de conseil",
      "description": "Chiffrer une masse salariale et un coût employeur sans inventer un taux légal, construire un ROI RH pédagogique, dimensionner une charge, et produire des slides et une synthèse exécutive sans faux benchmark. Power BI : modèle et mesures, pas une certification DAX.",
      "lessons": [
        {
          "title": "Masse salariale, coût employeur, ROI et business case RH",
          "description": "Distinguer brut, masse salariale et coût employeur, puis chiffrer un mini business case RH avec des hypothèses étiquetées.",
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
              "content": "Vous séparez masse salariale et coût employeur. Vous calculez un ROI RH sur un exemple numérique petit et cohérent, étiqueté pédagogique. Vous savez ce qu'un business case RH éclaire, et ce qu'il n'autorise pas (CSE, GEPP, juridique). Vous n'inventez aucun taux de charges « France »."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "La masse salariale, au sens pédagogique de ce parcours, est la somme des rémunérations brutes du périmètre retenu : salaires de base, variables déjà versés, primes intégrées au brut. Ce n'est pas le coût complet pour l'employeur. Le coût employeur ajoute ce que l'entreprise paie en plus du brut : cotisations et contributions à sa charge, et, selon le cadrage finance, d'autres postes (prévoyance employeur, épargne, etc.). Un junior ne possède pas « le » taux France. Les assiettes, régimes, allègements, conventions et effectifs font varier le réel. Écrire « les charges patronales = 45 % » comme vérité légale est une faute.\n\nLe ROI d'un projet RH mesure un écart par rapport au sans projet : (bénéfice incrémental − coût du projet) / coût du projet, sur un horizon écrit. Le bénéfice n'existe que s'il est sourcé (départs évités, heures évitées, ETP non embauchés). Le « coût d'un départ » n'est pas un benchmark marché : c'est une hypothèse d'entreprise (recrutement, formation, perte de productivité) que finance et RH recalent. Un business case RH éclaire un go / no-go / go sous conditions. Il ne contourne pas le CSE, une obligation GEPP, ni un avis social. Un projet rentable sur tableur peut rester non lançable."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Avant tout chiffre : périmètre (quels contrats, quels sites, quelle période), source (SIRH, paie, finance), et étiquette hypothèse vs fait.\n\n1) Effectif en têtes (HC) et en ETP. Rappel : 35 h = 1 ETP pédagogique ; 28 h = 0,8 ETP. 2) Masse salariale = Σ bruts du périmètre. 3) Coût employeur = masse × coefficient validé par finance, ou ligne à ligne si paie le fournit — jamais un taux inventé « de place ». 4) Sans projet : que se passe-t-il si l'on ne dépense rien. 5) Coût du projet (une fois + annuel). 6) Bénéfice incrémental, une seule fois (anti-double compte). 7) Net, ROI, sensibilité (au moins deux valeurs du coût de remplacement ou du volume évité). 8) Recommandation conditionnelle, et liste de validations hors chiffre (social, SIRH, métiers).\n\nContrôle : si le coefficient 1,42 du cas ci-dessous sort de votre slide comme « taux légal », le livrable est faux."
            },
            {
              "block_type": "callout",
              "content": "Tous les montants de ce module (28 000 €, 1,42, 0,35, 24 000 €) sont un cas pédagogique unique, fictif, pour Groupe Nova Services. Ils n'illustrent ni un taux URSSAF, ni un coût de remplacement « secteur services », ni un salaire de marché. L'attestation LOU Academy n'est pas une certification Excel / Power BI ni un titre RNCP."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova, équipe pédagogique de 10 conseillers relation client. Huit à 35 h, deux à 28 h : 9,6 ETP. Brut annuel pédagogique 28 000 € par ETP. Masse 268 800 €. Finance n'a pas encore sorti le coût réel : le manager veut « 45 % de charges ». Vous refusez le 45 % magique. Vous posez une hypothèse 1,42, écrite comme telle, et vous demandez le recalage paie. Sur cette base, coût employeur 381 696 €, soit 39 760 € par ETP. Un programme rétention à 24 000 € est proposé. Sans hypothèse de départs évités, il n'y a pas de ROI : il y a une dépense."
            },
            {
              "block_type": "heading",
              "content": "Cas d'école — 10 conseillers Nova (fictif, petits nombres)"
            },
            {
              "block_type": "text",
              "content": "Un seul exemple numérique, réutilisé dans les exercices. Vérifiez chaque ligne. Horizon : 12 mois. Hors fiscalité, hors actualisation."
            },
            {
              "block_type": "code",
              "content": "CAS PÉDAGOGIQUE — 10 CONSEILLERS NOVA (FICTIF)\nPérimètre          8 personnes à 35 h (1 ETP) + 2 à 28 h (0,8 ETP)\nETP                8 + 1,6 = 9,6 ETP\nBrut / ETP         28 000 € / an          ← hypothèse pédagogique, pas un marché\nMasse salariale    9,6 × 28 000 = 268 800 €\nCoefficient coût   1,42                   ← HYPOTHÈSE, pas un taux légal\nCoût employeur     268 800 × 1,42 = 381 696 €\nCoût / ETP         381 696 / 9,6 = 39 760 €\n\nProgramme rétention (coaching managers + parcours 90 jours) : 24 000 € une fois\nTurnover actuel pédagogique sur les 10 : 3 départs / 10 = 30 %\nHypothèse « avec projet » : 1 départ / 10 = 10 %   → 2 départs évités\nCoût de remplacement     0,35 × 39 760 = 13 916 €  ← HYPOTHÈSE, pas un benchmark\nBénéfice incrémental     2 × 13 916 = 27 832 €\nNet                      27 832 − 24 000 = 3 832 €\nROI                      3 832 / 24 000 ≈ 16,0 %\n\nSENSIBILITÉ (obligatoire avant un CODIR)\n1 départ évité : bénéfice 13 916 − 24 000 = −10 084 €  → ROI négatif\n3 départs évités : 41 748 − 24 000 = 17 748 €          → ROI ≈ 74 %\nLe signe du ROI dépend de l'hypothèse, pas d'une « vérité secteur ».\n\nCE QUE LE BC NE FAIT PAS\nIl n'autorise pas à ignorer le CSE, une GEPP, un avis social.\nIl ne prouve pas que 36 000 € brut annuel junior « sera » votre salaire."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Confondre brut, net, masse et coût employeur. Poser 42 % ou 45 % « parce que tout le monde le dit ». Présenter 16 % de ROI comme une preuve de marché. Oublier le sans projet. Compter les départs évités et, en plus, « toute la masse des 10 » comme bénéfice. Promettre un ROI sans sensibilité. Faire signer le BC à la place du juridique. Citer ce 0,35 comme coût de remplacement France."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Si paie fournit le coût employeur ligne à ligne : vous l'utilisez, vous jetez le 1,42. Si le projet touche un effectif, un site ou des conditions de travail : le chiffre n'éteint pas l'information-consultation ; le junior escalade. En groupe multi-pays : le coefficient français n'est pas transposable. Un « quick win » à 24 k€ sans sponsor finance n'est pas un BC, c'est une envie."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Sur le cas des 10 conseillers : (1) recalculez ETP, masse, coût employeur, coût / ETP. (2) Si le coefficient réel paie est 1,38 et non 1,42, que deviennent coût / ETP et ROI à 2 départs évités (coût de remplacement toujours 0,35 × coût / ETP) ? (3) Le manager veut publier « ROI 16 %, benchmark services ». Que répondez-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) 9,6 ETP ; 268 800 € ; 381 696 € ; 39 760 €. (2) Coût employeur 268 800 × 1,38 = 370 944 € ; / ETP = 38 640 € ; remplacement 0,35 × 38 640 = 13 524 € ; bénéfice 27 048 € ; net 3 048 € ; ROI 3 048 / 24 000 = 12,7 %. Le ROI a bougé sans que le programme change : c'est exactement pourquoi l'hypothèse doit rester visible. (3) Vous refusez le mot benchmark. 16 % est le résultat d'un cas fictif à 1,42 et 0,35. Vous pouvez dire : « Sur nos hypothèses écrites, le net est positif à 2 départs évités, négatif à 1. Décision : piloter 12 mois et recalculer, pas afficher un taux secteur. »"
            }
          ],
          "position": 0
        },
        {
          "title": "Dimensionner la charge et la capacité",
          "description": "Passer d'un volume d'activité à un besoin d'ETP, lire un écart, et ne pas transformer un calcul en plan social.",
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
              "content": "Vous calculez une charge (volume × temps unitaire), une capacité (ETP × heures disponibles × taux productif étiqueté), et un écart. Vous savez que l'écart n'est pas un licenciement, ni une embauche automatique. Vous refusez les heures « magiques » non sourcées."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Dimensionner, c'est relier le travail à faire et les personnes disponibles, dans la même unité de temps. La charge est la quantité de travail : somme, pour chaque type d'acte, du volume prévu multiplié par le temps unitaire. La capacité est ce que l'équipe peut absorber : ETP × heures de présence convertibles en travail, éventuellement multipliées par un taux productif (part du temps réellement sur l'acte). Ce taux n'est pas un taux légal d'absentéisme. L'absentéisme se mesure dans l'entreprise ; on ne lui invente pas une norme nationale unique.\n\nL'écart = besoin d'ETP − ETP actuels (ou charge − capacité, puis reconverti). Un écart positif dit « il manque des heures », pas « il faut licencier » ni « il faut 12 CDI lundi ». Les leviers sont plusieurs : volume, temps unitaire, mix de compétences, sous-traitance, heures, recrutement, report de charge, outil. Un junior qui saute du tableur à l'organigramme cible sans métier, sans social et sans SWP produit une reco fragile.\n\nLes heures : dans ce parcours, 1 personne à 35 h = 1 ETP ; 28 h = 0,8. Un mois pédagogique peut être posé à 151,67 h (35 × 52 / 12) ou, pour un cas d'école, à 100 h productives / ETP / mois si cette convention est écrite. La convention, pas le mythe."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "1) Nommer l'acte (dossier, appel, intervention terrain, dossier paie). 2) Volume : source, période, brut vs net d'annulation. 3) Temps unitaire : chronométrage interne, échantillon, ou hypothèse étiquetée — jamais « le marché fait 8 minutes ». 4) Charge = volume × temps, convertie en heures. 5) Capacité : ETP du périmètre × heures productives retenues. 6) Écart en heures puis en ETP. 7) Trois leviers, pas un seul (productivité, volume, ressources). 8) Sensibilité : ±20 % sur le temps unitaire.\n\nLivrable junior : un tableau à cinq colonnes (acte, volume, temps, heures, ETP) + trois phrases de limite. Contrôle : si vous ne savez pas d'où vient le temps unitaire, vous n'avez pas dimensionné, vous avez rêvé."
            },
            {
              "block_type": "callout",
              "content": "Les 3 200 dossiers, 30 minutes et 100 h productives / ETP / mois sont un cas d'école Nova, pas une norme de centre de contacts. Ne les citez pas en mission réelle comme « les standards du cours LOU »."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "Nova, file « réclamations simples » (sous-ensemble pédagogique, pas les 320 conseillers). Volume 3 200 dossiers / mois. Temps unitaire interne 30 min (échantillon de 80 dossiers, pas un benchmark). Charge 1 600 h. Convention : 100 h productives / ETP / mois. Besoin 16 ETP. Équipe actuelle 14 ETP. Écart +2 ETP. Le directeur veut « deux CDI et on n'en parle plus ». Vous posez : le temps unitaire est-il stable si l'outil change ? Une partie des 3 200 est-elle évitable (qualité amont) ? 2 ETP en CDD de projet, en heures, ou en recrutement : trois options pour le SWP, pas un organigramme improvisé."
            },
            {
              "block_type": "heading",
              "content": "Cas d'école — file réclamations (fictif)"
            },
            {
              "block_type": "code",
              "content": "DIMENSIONNEMENT — FILE RÉCLAMATIONS NOVA (FICTIF)\nActe                 Réclamation simple (périmètre écrit)\nVolume               3 200 / mois          (extrait SIRH pédagogique)\nTemps unitaire       30 min                (échantillon interne, n = 80)\nCharge               3 200 × 30 = 96 000 min = 1 600 h / mois\nHeures productives   100 h / ETP / mois    ← CONVENTION PÉDAGOGIQUE\nBesoin               1 600 / 100 = 16 ETP\nActuel               14 ETP\nÉcart                +2 ETP  (manque de capacité)\n\nSENSIBILITÉ TEMPS UNITAIRE\n24 min (−20 %)  charge 1 280 h  besoin 12,8 ETP  → surplus 1,2\n36 min (+20 %)  charge 1 920 h  besoin 19,2 ETP  → manque 5,2\nL'écart 2 ETP n'est solide que si le 30 min l'est.\n\nLEVIERS (MECE, sans décider seul un plan social)\nVolume     : réduire les réclamations évitables (qualité, process)\nTemps      : outillage, scripts, formation — mesurer après, pas avant\nRessources : recrutement, mobilité interne, heures, prestataire, report\nSocial     : si le levier touche l'emploi, le junior n'invente pas la procédure\n             CSE / GEPP ; il alerte le manager de mission et le social client."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Prendre le HC pour de l'ETP. Oublier les temps partiels (28 h = 0,8). Inventer 7 % d'absentéisme « légal ». Publier un besoin d'ETP au CODIR sans sensibilité. Transformer +2 ETP en organigramme avec noms. Utiliser un temps unitaire « Gartner » non fourni. Confondre heures payées et heures productives sans le dire."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Activité 24/7 : le calendrier (couverture, week-ends) change la capacité, pas seulement l'ETP calendaire ; un junior demande le modèle d'équipe, il n'invente pas un coefficient nuit. Terrain : le temps de trajet fait partie de la charge si le métier le subit. Après fusion : deux temps unitaires distincts jusqu'à preuve d'un process unique. Pic saisonnier : on dimensionne le pic et le creux, pas la moyenne qui ment."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Même file. Volume passe à 3 600 / mois, temps toujours 30 min, 14 ETP, 100 h productives. (1) Nouveau besoin et écart. (2) Combien de dossiers en moins (qualité amont) pour revenir à l'équilibre à 14 ETP ? (3) Le client dit « le secteur tient 22 minutes ». Que faites-vous ?"
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Charge 3 600 × 0,5 h = 1 800 h ; besoin 18 ETP ; écart +4 ETP. (2) Capacité 14 × 100 = 1 400 h ; 1 400 / 0,5 = 2 800 dossiers : il faut éviter 800 dossiers / mois, ou baisser le temps unitaire, ou ajouter des ETP — les trois leviers restent ouverts. (3) Vous n'adoptez pas 22 min. Sans étude sourcée, périmètre, date, c'est un faux benchmark. Vous proposez un échantillon Nova (chronométrage) et une sensibilité 22 / 30 / 36, pas un slogan secteur."
            }
          ],
          "position": 1
        },
        {
          "title": "Livrables de conseil : pyramide, synthèse, slides — et la limite des benchmarks",
          "description": "Écrire pour un CODIR : conclusion d'abord, titres conclusifs, synthèse d'une page, dashboard. Enseigner la méthode du benchmark et ses limites. Power BI : modèle et mesures, pas une certif DAX.",
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
              "content": "Vous structurez une communication de conseil (pyramide, exec summary, titres de slides qui concluent). Vous savez construire un mini modèle de données et nommer une mesure, sans prétendre certifier Power BI ou DAX. Vous refusez d'inventer un benchmark réel."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Un livrable de conseil n'est pas un compte rendu d'analyse. C'est un outil de décision. La pyramide (principe de Minto) pose d'abord la réponse, puis les arguments groupés de façon MECE, puis les faits. Le décideur qui a trois minutes doit pouvoir trancher. La synthèse exécutive tient en une page : contexte, recommandation, justification, risques, décision attendue. Les slides ont des titres conclusifs : pas « Turnover », mais ce que le turnover change à la décision. Les annexes portent les tableaux ; le corps porte le message.\n\nLe benchmark est une comparaison sourcée, datée, au bon périmètre. Ce n'est pas un chiffre entendu dans un open space, ni « le secteur est à 12 % ». Une étude payante a un échantillon, une date, des définitions (turnover, ETP, France / monde). Sans cela, vous enseignez l'écart interne (Nova vs Nova N-1, site vs site) et vous marquez « donnée manquante ». Inventer un taux de place pour rassurer un CODIR est une faute éthique, pas un manque de slide.\n\nPower BI, dans ce parcours, est un concept : un modèle (tables de faits, dimensions, relations), des mesures (formules évaluées selon le filtre : DIVIDE des départs par l'effectif moyen). Ce cours n'ouvre pas Power BI. Il ne délivre aucune certification DAX. Coller une mesure trouvée sur un forum n'est pas une compétence certifiée."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Rédaction. 1) Question de décision en une phrase. 2) Réponse en une phrase (reco). 3) Trois arguments maximum, chacun sourcé. 4) Risques et conditions. 5) Décision demandée (go, no-go, go sous conditions, demande de donnée).\n\nSlides. Titre = phrase complète. Une idée par slide. Chiffre : unité, période, source, « fictif / interne / étude nommée ». Interdit : axe tronqué pour dramatiser, mix de définitions, benchmark sans fiche.\n\nBenchmark, méthode et limites. a) Définition identique (turnover = départs / effectif moyen, même période). b) Périmètre (pays, métier, taille). c) Date. d) Source primaire. e) Si a–d manquent : ne pas inventer, documenter le trou, proposer un protocole de collecte interne.\n\nPower BI (concept). Fait : une ligne par mois × métier (HC, ETP, départs). Dimensions : métier, mois, site. Mesure Turnover := DIVIDE( SUM(departs), AVERAGE(effectif_moyen) ). Pas une colonne calculée recopiée 12 fois. Export CSV pédagogique ; pas de fichier .pbix dans ce cours."
            },
            {
              "block_type": "callout",
              "content": "Groupe Nova Services et tous les taux de ce module sont fictifs. Un titre de slide qui affirme « le secteur services est à 12 % de turnover » sans étude fournie par le client est un faux. L'attestation LOU n'est pas une certification Power BI / DAX / Excel, ni un titre RNCP."
            },
            {
              "block_type": "heading",
              "content": "Exemple professionnel"
            },
            {
              "block_type": "text",
              "content": "CODIR Nova, 20 minutes. Mauvaise ouverture : « On a beaucoup travaillé, voici 40 slides de pyramide des âges. » Bonne ouverture : « Nous recommandons un plan rétention conseillers sous conditions, pas une réorg RH globale lundi : 90 des 213 départs pédagogiques du groupe sont dans ce métier, soit 42 %. » Le DRH demande « et vs le marché ? ». Réponse junior : « Nous n'avons pas d'étude sourcée au bon périmètre. Inventer 12 % serait un faux benchmark. Voici Nova vs Nova, et un protocole si vous financez une étude. »"
            },
            {
              "block_type": "heading",
              "content": "Titres conclusifs vs titres descriptifs"
            },
            {
              "block_type": "code",
              "content": "FAIBLE                         CONCLUSIF (message)\nTurnover                       90 départs conseillers = 42 % des départs groupe\nPyramide des âges              62 techniciens 55+ : risque de charge, pas un plan social\nMasse salariale                Cas 10 conseillers : 268 800 € de brut, 381 696 € de coût\n                               (coeff. 1,42 = hypothèse, pas un taux légal)\nOrganisation RH                3 SIRH + 45 HC RH : d'abord un diagnostic process, pas\n                               une fusion d'équipes improvisée\nNext steps                     Décision demandée : pilote rétention 24 k€ / 12 mois,\n                               recalage paie du 1,42, pas de benchmark inventé"
            },
            {
              "block_type": "heading",
              "content": "Synthèse exécutive — squelette"
            },
            {
              "block_type": "code",
              "content": "SYNTHÈSE EXÉCUTIVE — 1 PAGE — CODIR\nNova Services (fictif) — [date] — Consultant junior : [nom] — Manager de mission : [nom]\n\nCONTEXTE (3 lignes, faits internes)\nRECOMMANDATION (1 phrase, conditionnelle)\nJUSTIFICATION (3 arguments sourcés, MECE)\nLIMITES (données manquantes, hypothèses, ce qui n'est pas un benchmark)\nRISQUES (dont social : le junior n'écrit pas l'avis CSE / GEPP)\nDÉCISION ATTENDUE (numérotée : valider, reporter, financer une donnée, saisir le social)\nANNEXES : tableur, définitions KPI, CSV, pas 20 slides lues en séance"
            },
            {
              "block_type": "heading",
              "content": "Power BI — modèle et mesures (concept, pas une certif)"
            },
            {
              "block_type": "text",
              "content": "Vous décrivez un modèle. Vous n'affirmez pas « je suis certifié DAX ». Une mesure n'est pas un chiffre tapé dans une cellule : elle se recalcule selon le filtre (année, métier). Une colonne calculée fige une valeur dans la table ; on ne s'en sert pas pour un ratio qui doit réagir au filtre. Ce parcours fournit un CSV pédagogique. Il n'installe pas Power BI Desktop et ne prépare aucun examen éditeur."
            },
            {
              "block_type": "code",
              "content": "MODÈLE CONCEPTUEL (pas un .pbix)\nfait_effectifs     mois, id_metier, hc, etp, departs, entrees, effectif_moyen\ndim_metier         id_metier, libelle, famille\ndim_mois           mois, annee, trimestre\nRelation           fait_effectifs[id_metier] → dim_metier[id_metier]\n\nMESURES (intention, pas une certification DAX)\nETP := SUM( fait_effectifs[etp] )\nDeparts := SUM( fait_effectifs[departs] )\nTurnover := DIVIDE( [Departs], AVERAGE(fait_effectifs[effectif_moyen]) )\n  Rappel pédagogique : turnover = départs / effectif moyen, même période.\n\nCSV PÉDAGOGIQUE (extrait, fictif)\nmois,metier,hc,etp,departs\n2026-01,Conseillers relation client,320,288,7\n2026-01,Techniciens terrain,280,274,3\n\nINTERDIT\n« Mesure officielle Gartner du turnover services 2026 = 12 % » — non sourcé = faux.\n« Cette formation certifie Power BI / DAX. » — faux."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes du consultant junior"
            },
            {
              "block_type": "text",
              "content": "Titres de slides = noms de dossiers (« Analyse », « Data », « Next steps »). 40 slides pour 20 minutes. Benchmark inventé pour « faire sérieux ». Confondre Power BI et Excel sans le dire. Coller un DAX de forum et le signer. Présenter l'attestation LOU comme une certif éditeur. Cacher une hypothèse 1,42 dans un graphique 3D. Usurper l'avis CSE."
            },
            {
              "block_type": "heading",
              "content": "Situations particulières"
            },
            {
              "block_type": "text",
              "content": "Comité 10 minutes : une page + 3 slides, le reste en annexe. Comité social : le consultant junior prépare des faits d'effectifs ; il n'écrit pas la stratégie de consultation. Client qui exige un benchmark demain matin : vous livrez un protocole et des écarts internes, pas un chiffre fabriqué. Pas d'accès Power BI chez le client : Excel + CSV, mêmes définitions de mesures."
            },
            {
              "block_type": "heading",
              "content": "Mise en pratique"
            },
            {
              "block_type": "text",
              "content": "Le sponsor Nova veut un slide unique : « Turnover groupe vs marché, et on vise le 1er quartile. » Vous n'avez aucune étude. Rédigez : (1) le titre conclusif que vous refusez ; (2) le titre que vous présentez ; (3) les trois lignes du corps ; (4) la phrase sur Power BI si l'on vous demande « tu nous fais ça en DAX certifié »."
            },
            {
              "block_type": "heading",
              "content": "Correction détaillée"
            },
            {
              "block_type": "text",
              "content": "(1) Refusé : « Le marché est à 12 %, Nova à 18 %, objectif 1er quartile. » (2) Acceptable : « 213 départs / 1 200 HC = 17,8 % en interne ; aucun benchmark marché sourcé à ce jour. » (3) Corps : définition (départs / effectif moyen) ; 90 départs conseillers = 42 % du total pédagogique ; décision = protocole d'étude ou écarts internes, pas un quartile inventé. (4) « Je peux décrire le modèle (fait effectifs, mesure DIVIDE) et un CSV. Ce parcours ne certifie ni DAX ni Power BI ; un junior ne s'invente pas une badge éditeur. »"
            }
          ],
          "position": 2
        },
        {
          "title": "Quiz — Finance, dimensionnement et livrables",
          "description": "Cinq questions. Seuil 70 %. Masse vs coût employeur, ROI à hypothèses, charge/capacité, titres conclusifs, éthique du benchmark et limite Power BI.",
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
            "title": "Quiz — Finance, dimensionnement et livrables",
            "passing_score": 70,
            "max_attempts": null,
            "questions": [
              {
                "question": "Sur le cas pédagogique des 10 conseillers Nova (8 à 35 h, 2 à 28 h, brut 28 000 € / ETP, coefficient 1,42 hypothèse), quels résultats sont exacts ?",
                "question_type": "single_choice",
                "options": [
                  "A. 10 ETP, masse 280 000 €, coût employeur = masse, car le brut « inclut déjà les charges ».",
                  "B. 9,6 ETP ; masse 268 800 € ; coût employeur 381 696 € ; 39 760 € / ETP. Le 1,42 n'est pas un taux légal.",
                  "C. 9,6 ETP mais masse 224 000 €, parce que les temps partiels ne comptent pas dans la masse.",
                  "D. Coefficient 1,42 = taux URSSAF 2026 officiel enseigné dans ce cours."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "35 h = 1 ETP, 28 h = 0,8. 8 + 1,6 = 9,6. 9,6 × 28 000 = 268 800. × 1,42 = 381 696. Le 1,42 est une hypothèse pédagogique, pas un taux légal."
              },
              {
                "question": "Un ROI RH de 16 % sur le programme rétention à 24 000 € (2 départs évités, coût de remplacement 0,35 × coût ETP) signifie surtout que :",
                "question_type": "single_choice",
                "options": [
                  "A. Le secteur services a un ROI RH de 16 % : vous pouvez le citer en benchmark.",
                  "B. À ces hypothèses écrites, le net est positif ; à 1 départ évité il devient négatif. Le ROI ne remplace ni sensibilité, ni avis social.",
                  "C. Le projet est obligatoire, le CSE n'a plus à être informé.",
                  "D. Votre salaire junior de 36 000 € brut annuel est désormais garanti."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le 16 % est local au cas. Sensibilité obligatoire. Un BC n'éteint pas le social. 36 k€ est un objectif de marché, jamais une garantie. L'attestation n'est pas un RNCP."
              },
              {
                "question": "File réclamations : 3 200 dossiers, 30 min, 100 h productives / ETP / mois, 14 ETP actuels. Quel dimensionnement est juste ?",
                "question_type": "single_choice",
                "options": [
                  "A. Charge 1 600 h, besoin 16 ETP, écart +2 ETP — et cet écart n'est pas, à lui seul, un plan de recrutement ou un plan social.",
                  "B. Besoin 32 ETP, car on compte les heures en minutes.",
                  "C. Écart nul : 14 personnes = 14 ETP = 14 × 151,67 h, le 100 h est illégal.",
                  "D. Il manque 2 ETP : on licencie ailleurs pour financer, dès lundi, sans social."
                ],
                "correct_answer": [
                  0
                ],
                "explanation": "3 200 × 0,5 h = 1 600 ; 1 600 / 100 = 16 ; 16 − 14 = 2. La convention 100 h est pédagogique. L'écart ouvre des leviers ; le junior n'invente pas la procédure sociale."
              },
              {
                "question": "Quel titre de slide est professionnellement acceptable pour un CODIR Nova ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Turnover ».",
                  "B. « Le marché est à 12 % (benchmark) » — sans étude fournie.",
                  "C. « 90 départs conseillers = 42 % des départs groupe (données internes fictives du cas) ; aucun benchmark marché sourcé ».",
                  "D. « Pyramide des âges et next steps Power BI certifié DAX »."
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Un titre conclusif porte le message et la limite. Inventer 12 % est un faux benchmark. Power BI / DAX ne sont pas certifiés par ce parcours. « Turnover » ne décide rien."
              },
              {
                "question": "À propos de Power BI dans ce parcours, quelle affirmation est exacte ?",
                "question_type": "single_choice",
                "options": [
                  "A. La réussite au quiz équivaut à une certification Power BI / DAX de l'éditeur.",
                  "B. On décrit un modèle (faits, dimensions, relations) et des mesures (ex. DIVIDE départs / effectif moyen) ; on n'ouvre pas l'outil ; on ne s'invente pas une certif.",
                  "C. Une mesure DAX copiée sur un forum peut être présentée comme « standard officiel Gartner ».",
                  "D. Power BI remplace le SIRH et le CSE pour les données de licenciement."
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Concept : modèle + mesures. Pas d'outil ouvert, pas de badge éditeur, pas de benchmark inventé, pas d'usurpation social / SIRH."
              }
            ]
          },
          "position": 3
        }
      ]
    },
    {
      "position": 9,
      "title": "Mission finale Nova Services et évaluation",
      "description": "Traiter une mission complète sur Groupe Nova Services (1 200 salariés fictifs), comparer une correction et une grille, puis passer l'examen (seuil 80 %). Bibliothèques facultatives : 50 cas et 100 questions d'entretien.",
      "lessons": [
        {
          "title": "Mission finale — Groupe Nova Services (1 200 salariés)",
          "description": "Quinze travaux sur un jeu RH fictif cohérent : indicateurs, diagnostic, SWP, organisation cible, changement, finance, dashboard, CODIR.",
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
              "content": "Vous enchaînez les réflexes du parcours sur un seul cas : analyser les effectifs, calculer les indicateurs, diagnostiquer, cartographier, projeter, proposer une organisation cible, un plan de transformation et de changement, un ordre de grandeur financier, une feuille de route, un tableau de bord et une recommandation de comité. Vous étiquetez tout chiffre pédagogique. Vous n'inventez ni benchmark réel ni délai d'instance."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Groupe Nova Services est une ETI fictive de services (Facility + relation client) de 1 200 salariés. Difficultés déclarées : croissance des contrats, turnover élevé sur les plateaux, départs à la retraite sur l'encadrement de site, métiers en tension, RH fragmentée (cinq RRH, SIRH partiel), processus d'embauche non unifiés, besoin de digitaliser le planning et le SIRH. Votre mandat pédagogique : éclairer un COMEX à J+15 sur les options d'effectifs et d'organisation RH — pas signer une GEPP, pas choisir l'éditeur, pas valider un plan social.\n\nLes 1 200 se décomposent en huit familles ci-dessous. Les totaux HC additionnent 1 200. Les ETP et turnover sont pédagogiques. 35 h = 1 ETP ; 28 h apparaît surtout en relation client (ETP < HC). Turnover = départs N / effectif moyen N, hors détail retraites sauf mention. Aucune ligne n'est un benchmark de branche."
            },
            {
              "block_type": "heading",
              "content": "Méthode opérationnelle"
            },
            {
              "block_type": "text",
              "content": "Traitez les 15 travaux dans l'ordre. Ne comblez pas un trou par un taux « de marché ». Toute hypothèse est écrite. Pour le SWP, un métier tendu suffit en vague 1 (support / relation client ou responsables d'exploitation), horizon 3 ans, trois scénarios dont le fil de l'eau. Pour la cible org / TOM : critères avant dessin. Pour le social : alerte + vérifier Légifrance / avis, pas de calendrier inventé. Livrables attendus (vous les produisez dans votre tableur et vos slides, le LMS n'exécute pas Excel ni PowerPoint) : fichier d'analyse, modèle SWP, diagnostic, cartographie, organigramme cible, plan de changement, business case, présentation CODIR."
            },
            {
              "block_type": "callout",
              "content": "Tout le dossier (Nova, 1 200, turnover, masses, ROI) est fictif et pédagogique. 36 000 € n'est pas une garantie d'embauche. L'attestation LOU Academy n'est ni RNCP, ni diplôme d'État, ni certification Excel / Power BI."
            },
            {
              "block_type": "heading",
              "content": "Jeu de données — photo N (pédagogique, cohérente)"
            },
            {
              "block_type": "code",
              "content": "GROUPE NOVA SERVICES — FICTIF — 1 200 SALARIÉS\nPhoto au 31/12/N. Unité HC = têtes. ETP : 35 h = 1 ; partiels 28 h surtout en RC.\n\nfamille                    HC    ETP    pct_55plus  departs_N  hc_moy_N  turnover\nAgents Facility            480   456       18 %        96         470      20,4 %\nResp. exploitation          55    55       35 %         4          56       7,1 %\nConseillers rel. client    320   288        8 %        84         310      27,1 %\nSuperviseurs RC             40    40       22 %         5          41      12,2 %\nFonction RH                 28    27,2     15 %         5          29      17,2 %\nSiège & supports           180   174       20 %        16         178       9,0 %\nCommercial                  72    72       12 %        10          70      14,3 %\nQHSE / autres               25    25       28 %         1          25       4,0 %\nTOTAL                    1 200 1 137,2     —          221       1 179      18,7 %\n\nContrôles (à retrouver)\n  Σ HC = 480+55+320+40+28+180+72+25 = 1 200\n  Σ ETP = 456+55+288+40+27,2+174+72+25 = 1 137,2\n  Turnover groupe = 221 / 1 179 = 18,74 % ≈ 18,7 %\n  Écart HC−ETP = 62,8  → essentiellement Facility (24) et RC (32) = temps partiels pédagogiques\n\nPyramide pédagogique (HC)\n  <30 : 310   |  30-44 : 430   |  45-54 : 280   |  ≥55 : 180   |  Σ 1 200\n  Dont ≥55 chez resp. exploitation : 19 personnes (≈ 35 % de 55)\n\nSites (HC) : Ouest 420 | Nord 310 | Est 250 | Île-de-France plateaux 220\n  Turnover le plus élevé déclaré (pédagogique) : plateaux IDF et Ouest Facility\n\nMasse brute annuelle pédagogique (agrégat)\n  42,0 M€  (pas un coût employeur ; pas un salaire de marché)\n  Coefficient employeur : HYPOTHÈSE à recaler finance — NE PAS inventer 45 % légal\n  Vacants déclarés : 3 resp. exploitation + 18 conseillers + 12 agents Facility\n\nRH as-is (rappel)\n  DRH groupe, 5 RRH, process recrutement non unifiés, SIRH partiel\n  Pas de référentiel unique, pas de SWP formel, instances à cartographier (pas de calendrier ici)\n\nCe qui MANQUE (à ne pas inventer)\n  Motifs de départ fiables, compétences individuelles, coût employeur réel,\n  délai de pourvoi réel, avis social, élasticité de l'activité."
            },
            {
              "block_type": "heading",
              "content": "Les 15 travaux"
            },
            {
              "block_type": "text",
              "content": "1. Effectifs : commenter HC vs ETP, sites, vacants.\n2. Indicateurs : turnover groupe et deux familles extrêmes ; pyramide ; une limite d'échantillon / de définition.\n3. Diagnostic organisationnel : 5 constats sourcés (process, RACI, irritants, RH fragmentée).\n4. Risques : 5 risques (activité, données, social, livraison, modèle) avec propriétaire.\n5. Cartographie : 8 familles = emplois-repères ; 3 métiers critiques et critères.\n6. Compétences : une matrice courte sur un métier critique ; écart de niveau ≠ écart de volume.\n7. Projections : SWP 3 ans sur UN métier tendu (conseillers OU resp. exploitation), trois scénarios, identités qui s'additionnent.\n8. Écarts : gap N+3 fil de l'eau vs cible ; leviers (recruter, bouger, former, automatiser la tâche).\n9. Organisation cible : critères (span, couches, central/local RH) ; schéma to-be ; pas de nominatif.\n10. Plan de transformation : 4 chantiers (données, process recrutement, modèle RH, planning digital) séquencés.\n11. Impacts financiers : masse 42 M€ pédagogique ; un mini BC (coût projet vs départs évités hypothèse étiquetée) ; pas de taux légal inventé.\n12. Feuille de route 18 mois, jalons, RACI junior vs manager vs client.\n13. Tableau de bord : 8 KPI déjà définis dans le parcours (HC, ETP, turnover, gap, vacants, % pourvois internes, retraites avec binôme, contrôle identité).\n14. Présentation CODIR : pyramide (situation, implication, prochaine question), titres conclusifs, une slide « ce que ce n'est pas ».\n15. Défense : 3 objections (délai, « on a déjà une GEPP », « donnez-nous le benchmark ») et vos réponses."
            },
            {
              "block_type": "heading",
              "content": "Contraintes de qualité"
            },
            {
              "block_type": "code",
              "content": "OUI                              NON\nIdentités HC / ETP / turnover    Benchmark « services = 12 % »\nHypothèses étiquetées            45 % de charges « légal »\nUn métier tendu d'abord          SWP 1 200 en bloc pour vendredi\nCible après critères             Organigramme nominatif semaine 1\nAlerte sociale                   Délai CSE inventé\nAgrégats CODIR                   Fichier salarial nominatif\nAttestation = réussite LMS       Titre RNCP / certif Excel"
            }
          ],
          "position": 0
        },
        {
          "title": "Correction commentée et grille d'évaluation",
          "description": "Comparer une copie soutenable, une grille, et les fautes qui font échouer une soutenance junior.",
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
              "content": "Vous savez ce qu'une copie junior acceptable contient, comment une grille sépare méthode et poudre aux yeux, et quelles fautes sont éliminatoires (faux benchmark, droit inventé, nominatif, garantie 36 k€)."
            },
            {
              "block_type": "heading",
              "content": "Correction — copie soutenable (pas « la » vérité)"
            },
            {
              "block_type": "text",
              "content": "Indicateurs. HC 1 200, ETP 1 137,2 : l'écart est du temps partiel pédagogique (Facility, RC), pas une « erreur SIRH » a priori. Turnover groupe 221/1 179 ≈ 18,7 %. Extrêmes : RC 27,1 %, QHSE 4 %. Pyramide : 180 personnes ≥55 dont une concentration sur l'exploitation (19 / 55). Limite : motifs de départ absents ; l'Ouest et les plateaux IDF sont des focales, pas un marché.\n\nDiagnostic. RH fragmentée (5 RRH, process non unifiés, SIRH partiel). Vacants d'exploitation. Turnover RC. Croissance commerciale non staffée. Gouvernance d'embauche floue. Ce sont des constats, pas encore une cible.\n\nSWP. Vague 1 : conseillers RC (stock 320 HC / 288 ETP, TO 27 %) OU resp. exploitation (pyramide). Trois scénarios, formules du module 04, chiffres étiquetés. Le fil de l'eau laisse le gap s'ouvrir. La cible mixte recrutement, rétention, mobilité, éventuellement réduction de besoin par outil — l'outil diminue le besoin, pas le stock.\n\nCible org. Siège : règles, SIRH, contrôle. Local : proximité, planning. RH : pool admin + HRBP légers + CoE réduits — pas un Ulrich de 40 000 personnes. Span des resp. exploitation à recaler (vacants). Pas de nominatif.\n\nChangement. Parties prenantes : DG, DRH, DAF, directeurs de métier, RRH, managers de proximité. ADKAR est un cadre parmi d'autres. Adoption = indicateurs (process unique utilisé, extract fiable), pas un logo.\n\nFinance. Masse 42 M€ pédagogique. Coefficient employeur : demande finance, hypothèse écrite si besoin. BC : coût d'un chantier rétention/SIRH vs départs évités — sensibilité, pas un ROI magique.\n\nCODIR. Une recommandation conditionnelle (scénario, conditions, hors juridique). Objections : pas de benchmark inventé ; GEPP ≠ SWP ; le junior ne garantit ni 36 k€ ni l'embauche du client."
            },
            {
              "block_type": "heading",
              "content": "Grille (100 points, seuil pédagogique de soutenance 80)"
            },
            {
              "block_type": "code",
              "content": "Critère                              Points  80 % = exigence\nDéfinitions HC / ETP / turnover          10     formules + identité 1 200\nLecture pyramide et vacants              8      exploitation + RC\nDiagnostic sourcé (5 constats)           10     pas de slogans\nRisques et limites de donnée             8      « on ne sait pas » assumé\nSWP 3 scénarios qui s'additionnent       14     un métier, horizon, gap\nCartographie + 3 métiers critiques       8\nOrganisation cible + critères            10     pas de nominatif\nChangement + feuille de route            8      ADKAR = un cadre, pas le dogme\nFinance / BC hypothèses étiquetées       8      pas de 45 % légal\nLivrable CODIR (pyramide, titres)        8\nÉthique (benchmark, social, 36 k€)       8      faute = 0 sur la ligne\n\nÉLIMINATOIRE (ligne éthique à 0, soutenance non recevable)\n— Inventer un benchmark réel ou un délai CSE\n— Envoyer un nominatif salarial\n— Présenter l'attestation comme RNCP ou garantir 36 000 €"
            },
            {
              "block_type": "callout",
              "content": "Cette grille évalue la copie pédagogique Nova. Elle n'est pas une certification professionnelle officielle."
            },
            {
              "block_type": "heading",
              "content": "Erreurs fréquentes de soutenance"
            },
            {
              "block_type": "text",
              "content": "SWP 1 200 en une ligne. Cible dès la slide 2. « Le marché est à 12 % ». « À 1 200 personnes le CSE a X jours ». Camembert sans contrôle. Organigramme avec les noms des RRH. Promettre Power BI comme déjà déployé. Oublier que 288 ETP ≠ 320 conseillers."
            }
          ],
          "position": 1
        },
        {
          "title": "Examen final — Consultant junior W&O",
          "description": "Évaluation de fin de parcours. Seuil 80 %. L'attestation mesure ces compétences dans la plateforme, pas un titre RNCP.",
          "lesson_type": "quiz",
          "estimated_duration_minutes": 12,
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
            "title": "Examen final — Consultant junior W&O",
            "passing_score": 80,
            "max_attempts": null,
            "questions": [
              {
                "question": "HC 1 200 et ETP 1 137,2 chez Nova. Que lisez-vous d'abord ?",
                "question_type": "single_choice",
                "options": [
                  "A. Le SIRH est faux : HC et ETP doivent être égaux",
                  "B. L'écart reflète surtout des temps partiels pédagogiques (Facility, RC) : on ne mélange pas les unités",
                  "C. Il manque 62,8 personnes à licencier",
                  "D. C'est un benchmark de branche"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "35 h = 1 ETP ; 28 h = 0,8. HC ≠ ETP n'est pas un plan social. Pas un benchmark."
              },
              {
                "question": "Turnover groupe Nova pédagogique : 221 départs, effectif moyen 1 179. Taux ?",
                "question_type": "single_choice",
                "options": [
                  "A. 221 / 1 200 = 18,4 %",
                  "B. 221 / 1 179 ≈ 18,7 %",
                  "C. 15 %, taux légal",
                  "D. 12 %, « marché des services »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Départs / effectif moyen. Ni le HC de fin seul, ni un taux légal, ni un marché inventé."
              },
              {
                "question": "Quelle phrase décrit le SWP, distinct de la GEPP ?",
                "question_type": "single_choice",
                "options": [
                  "A. Un export SIRH",
                  "B. Une méthode de direction : demande, offre interne, écart, leviers — la GEPP est un cadre d'emplois / parcours / dialogue selon le contexte",
                  "C. Un accord que le junior rédige",
                  "D. Un organigramme cible"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "SWP = outil de management. GEPP = cadre d'emplois et de dialogue. Le junior ne rédige pas l'accord."
              },
              {
                "question": "Dans un modèle SWP, l'automatisation doit :",
                "question_type": "single_choice",
                "options": [
                  "A. Se soustraire du stock de personnes",
                  "B. Réduire le besoin (ETP évités), jamais inventer un stock négatif",
                  "C. Remplacer la GEPP",
                  "D. Autoriser à inventer un délai CSE"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "L'outil diminue la demande, pas une ligne de stock négatif."
              },
              {
                "question": "MECE, sur un diagnostic turnover, sert surtout à :",
                "question_type": "single_choice",
                "options": [
                  "A. Produire plus de slides",
                  "B. Découper sans chevauchement ni trou, à partir d'une question et non d'une solution",
                  "C. Valider un plan social",
                  "D. Fixer le tarif de la mission"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Mutually exclusive, collectively exhaustive. Pas du juridique, pas du pricing."
              },
              {
                "question": "Un expert QHSE en dotted line vers 8 régions sans règle d'arbitrage, c'est surtout :",
                "question_type": "single_choice",
                "options": [
                  "A. Une organisation agile sans chef",
                  "B. Une matrice informelle : temps, autorité et conflits non tranchés",
                  "C. Un CSP RH",
                  "D. Une GEPP conforme"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Sans règle, le pointillé n'est pas une gouvernance."
              },
              {
                "question": "Le DRH demande les délais d'information du CSE « vu les 1 200 ». Le junior :",
                "question_type": "single_choice",
                "options": [
                  "A. Récite un délai de mémoire",
                  "B. Refuse d'inventer ; renvoie à Légifrance et à l'avis social ; livre le diagnostic d'emplois",
                  "C. Garantit qu'il n'y a jamais d'instances en France",
                  "D. Envoie le fichier salarial nominatif au CSE lui-même"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Junior ≠ juriste. Ni invention, ni déni, ni nominatif."
              },
              {
                "question": "Copier un modèle CSP / CoE / HRBP de 40 000 personnes sur Nova (1 200) :",
                "question_type": "single_choice",
                "options": [
                  "A. Est la preuve de maturité",
                  "B. Risque des cases vides : à 1 200, on dimensionne des rôles, pas des armées",
                  "C. Est obligatoire en GEPP",
                  "D. Remplace le TOM"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le trio est une logique, pas un copier-coller. Le TOM reste le cadre."
              },
              {
                "question": "ADKAR, dans ce parcours :",
                "question_type": "single_choice",
                "options": [
                  "A. Est le seul cadre de changement autorisé par le Code du travail",
                  "B. Est un cadre parmi d'autres (conscience, désir, connaissance, capacité, ancrage) pour l'adoption, pas un dogme",
                  "C. Remplace le sponsor",
                  "D. Mesure le ROI légal"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Un cadre utile, pas une obligation légale ni un substitut au sponsor."
              },
              {
                "question": "Un business case RH utilise un coefficient 1,42 sur la masse. Que doit dire la slide ?",
                "question_type": "single_choice",
                "options": [
                  "A. « Taux légal France des charges patronales »",
                  "B. « Hypothèse à recaler avec la finance / paie — pas un taux légal unique »",
                  "C. « Benchmark cabinet 45 % »",
                  "D. « ROI donc le CSE est optionnel »"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Pas de taux unique inventé. Le ROI ne contourne pas le social."
              },
              {
                "question": "Le COMEX veut un « turnover vs marché ». Quelle réponse est professionnelle ?",
                "question_type": "single_choice",
                "options": [
                  "A. Inventer 12 % pour clore le débat",
                  "B. Donner le 18,7 % interne, définitions, limites, et refuser un marché non sourcé",
                  "C. Dire que les benchmarks n'existent jamais nulle part",
                  "D. Publier les 1 200 noms"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Méthode et limites. On n'invente pas un réel. On n'interdit pas les sources vraies : on n'en fabrique pas."
              },
              {
                "question": "Semaine 1, le DRH veut l'organigramme cible. Tenue correcte ?",
                "question_type": "single_choice",
                "options": [
                  "A. Livrer une cible le mercredi",
                  "B. Refuser la cible trop tôt ; livrer le cadrage et un existant annoté",
                  "C. Inventer un span of control de marché",
                  "D. Annuler la mission"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "La cible vient après les faits et les critères."
              },
              {
                "question": "Une offre « consultant junior W&O, 36 000 € » pendant le parcours signifie :",
                "question_type": "single_choice",
                "options": [
                  "A. Une garantie de salaire à la sortie du LMS",
                  "B. Un ordre de grandeur de marché pour certaines offres, pas une garantie d'embauche ni de rémunération",
                  "C. Que l'attestation est un titre RNCP",
                  "D. Que cinq heures valent une mission autonome"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Objectif de marché, jamais une garantie. Pas de RNCP. Cinq heures ≠ mission réelle."
              },
              {
                "question": "Fichier brut des salaires sur la boîte perso du RRH « pour le COMEX » :",
                "question_type": "single_choice",
                "options": [
                  "A. Autorisé car le destinataire est client",
                  "B. Refus du canal et du nominatif ; espace mission ; agrégat ; alerte manager",
                  "C. Lien public le week-end",
                  "D. OK si le senior est en congé"
                ],
                "correct_answer": [
                  1
                ],
                "explanation": "Le COMEX n'autorise ni le mail perso ni le brut nominatif. L'absence du senior n'élargit pas les droits."
              },
              {
                "question": "L'attestation de réussite de ce parcours :",
                "question_type": "single_choice",
                "options": [
                  "A. Est un diplôme d'État",
                  "B. Est une certification RNCP",
                  "C. Atteste la réussite aux évaluations de la plateforme LOU Academy, pas un titre officiel ni une certif Excel / Power BI",
                  "D. Remplace un avis d'avocat en droit social"
                ],
                "correct_answer": [
                  2
                ],
                "explanation": "Attestation plateforme. Ni RNCP, ni État, ni Microsoft, ni visa juridique."
              }
            ]
          },
          "position": 2
        },
        {
          "title": "Bibliothèque facultative — 50 cas de conseil",
          "description": "Cinquante cas condensés (énoncé, travail, méthode, correction). Hors quota des 5 heures.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 0,
          "is_required": false,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Hors parcours obligatoire, vous vous entraînez sur cinquante situations W&O. Chaque fiche est courte. Les données sont fictives. Aucune n'est un benchmark réel ni un avis juridique."
            },
            {
              "block_type": "callout",
              "content": "Ressource facultative (0 minute). Elle ne compte pas dans les 300 minutes. L'examen s'appuie sur les mêmes réflexes."
            },
            {
              "block_type": "heading",
              "content": "Cas 1 — Entreprise en croissance"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nNova gagne deux contrats Facility. Commercial promet 80 agents en 8 semaines. RH a 12 vacants déjà.\n\nTRAVAIL DEMANDÉ\n\nQuestion de diagnostic MECE et hors-périmètre.\n\nMÉTHODE\n\nSymptôme ≠ solution. Branches : volume, délai de pourvoi, process, données.\n\nCORRECTION ARGUMENTÉE\n\nQuestion : dans quelle mesure peut-on staffer 80 sans casser la qualité ? Hors : signer les embauches, délai CSE inventé. Premier livrable : capacité recrutement + vivier + intérim nommé en annexe."
            },
            {
              "block_type": "heading",
              "content": "Cas 2 — Réduction du turnover"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DG veut « −10 points de turnover d'ici juin », sans motif de départ.\n\nTRAVAIL DEMANDÉ\n\nCe que vous mesurez d'abord ; ce que vous refusez.\n\nMÉTHODE\n\nDéfinition, périmètre, motifs, extrêmes (RC 27 %).\n\nCORRECTION ARGUMENTÉE\n\nVous mesurez 18,7 % groupe et 27 % RC, motifs « inconnus ». Vous refusez l'objectif −10 points comme engagement junior. Leviers après faits, pas un slogan."
            },
            {
              "block_type": "heading",
              "content": "Cas 3 — Réorganisation d'une direction RH"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nCinq RRH, un DRH, process différents. Le DRH veut « un Ulrich » lundi.\n\nTRAVAIL DEMANDÉ\n\nCible vs TOM ; ce que vous dessinez cette semaine.\n\nMÉTHODE\n\nActivités volume vs jugement ; taille 1 200.\n\nCORRECTION ARGUMENTÉE\n\nVous cartographiez as-is. Cible : pool admin, HRBP légers, CoE réduits. Pas de nominatif lundi. Transferts de personnes = alerte sociale, pas visa junior."
            },
            {
              "block_type": "heading",
              "content": "Cas 4 — Centralisation des services"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DAF veut toute la RH au siège « pour contrôler la masse ». Les sites crient à la lenteur.\n\nTRAVAIL DEMANDÉ\n\nQuoi centraliser / quoi laisser local.\n\nMÉTHODE\n\nCouple règles+outil vs proximité.\n\nCORRECTION ARGUMENTÉE\n\nCentral : SIRH, grilles, extract, contrôle embauche. Local : planning, relais social de proximité, urgence contrat. Tout centraliser casse le démarrage lundi."
            },
            {
              "block_type": "heading",
              "content": "Cas 5 — Transformation digitale"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn directeur a vu un SIRH en conférence. « On digitalise la GEPP. »\n\nTRAVAIL DEMANDÉ\n\nOrdre des chantiers.\n\nMÉTHODE\n\nDonnées et process avant l'outil.\n\nCORRECTION ARGUMENTÉE\n\nD'abord définitions ETP, process recrutement unique, extract fiable. Ensuite outil. Digitaliser une GEPP inexistante produit un paramétrage vide. Junior ≠ intégrateur."
            },
            {
              "block_type": "heading",
              "content": "Cas 6 — Départs massifs à la retraite"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n19 resp. exploitation ≥55. Le DG : « on recrutera. »\n\nTRAVAIL DEMANDÉ\n\nSWP 3 ans, levier prioritaire.\n\nMÉTHODE\n\nPyramide = flux retraites, pas un sentiment.\n\nCORRECTION ARGUMENTÉE\n\nRetraites dans le modèle, binômes, passerelle adjoint, recrutement ciblé. « On recrutera » sans délai de pourvoi est le fil de l'eau. Pas un plan social par défaut."
            },
            {
              "block_type": "heading",
              "content": "Cas 7 — Pénurie de compétences"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOutil planning : 5/6 de l'échantillon pédagogique sous la cible.\n\nTRAVAIL DEMANDÉ\n\nÉcart de niveau vs écart de volume.\n\nMÉTHODE\n\nMatrice courte, levier formation/tutorat.\n\nCORRECTION ARGUMENTÉE\n\nCe n'est pas 47 embauches. C'est un plan de montée en compétence + temps tuteur. Volume SWP et niveau GEPP se cumulent s'ils sont tous les deux vrais — ici l'échantillon n=6, limites à dire."
            },
            {
              "block_type": "heading",
              "content": "Cas 8 — Dimensionnement d'une équipe"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nPlateau : 12 000 tickets/mois pédagogiques, 8 tickets/heure hypothèse, 140 h productives/mois.\n\nTRAVAIL DEMANDÉ\n\nETP besoin (ordre de grandeur).\n\nMÉTHODE\n\nCharge / productivité / capacité, hypothèses étiquetées.\n\nCORRECTION ARGUMENTÉE\n\n12 000 / 8 = 1 500 h. 1 500 / 140 ≈ 10,7 ETP productifs, hors management, congés, formation. Ajouter supervision et absentéisme en hypothèses. Limite du modèle à écrire."
            },
            {
              "block_type": "heading",
              "content": "Cas 9 — Mise en place d'une GEPP"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n« Rédigez l'accord pour jeudi, on a 1 200 personnes. »\n\nTRAVAIL DEMANDÉ\n\nLot junior vs lot juriste.\n\nMÉTHODE\n\nDiagnostic emplois ≠ calendrier d'instances.\n\nCORRECTION ARGUMENTÉE\n\nVous livrez cartographie et leviers. Vous refusez accord, seuil et délai de mémoire. Vérifier Légifrance / avis social."
            },
            {
              "block_type": "heading",
              "content": "Cas 10 — Déploiement d'un SIRH"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DSI veut un go/no-go outillage. La donnée ETP n'est pas fiable.\n\nTRAVAIL DEMANDÉ\n\nCritère de go.\n\nMÉTHODE\n\nTOM : process, data, puis tech.\n\nCORRECTION ARGUMENTÉE\n\nNo-go fonctionnel tant que les définitions et le process d'embauche ne sont pas uniques. L'outil n'invente pas l'ETP. Junior ne choisit pas l'éditeur seul."
            },
            {
              "block_type": "heading",
              "content": "Cas 11 — Analyse d'une pyramide des âges"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n180 ≥55 / 1 200. Le COMEX : « on est vieux. »\n\nTRAVAIL DEMANDÉ\n\nLecture utile.\n\nMÉTHODE\n\nCroiser métier et site, pas le groupe seul.\n\nCORRECTION ARGUMENTÉE\n\nLe signal est les 19 / 55 exploitation, pas le 15 % groupe. Une pyramide jeune en RC n'annule pas le risque sites."
            },
            {
              "block_type": "heading",
              "content": "Cas 12 — Construction d'un Workforce Plan"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous demande le SWP 1 200 à 5 ans pour vendredi, turnover de marché.\n\nTRAVAIL DEMANDÉ\n\nCadrage de remplacement.\n\nMÉTHODE\n\nUn métier, 3 ans, hypothèses étiquetées.\n\nCORRECTION ARGUMENTÉE\n\nRefus 1 200 en bloc, 5 ans non étayé, marché inventé. Vague 1 : conseillers ou exploitation, 3 scénarios, formules visibles."
            },
            {
              "block_type": "heading",
              "content": "Cas 13 — Conception d'une organisation cible"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DG dessine 12 boxes sur un napkin.\n\nTRAVAIL DEMANDÉ\n\nCritères avant dessin.\n\nMÉTHODE\n\nSpan, couches, central/local, RACI.\n\nCORRECTION ARGUMENTÉE\n\nVous posez 4 critères, un as-is annoté, 2 options. Le napkin n'est pas un TOM. Impacts humains : alerte, pas visa."
            },
            {
              "block_type": "heading",
              "content": "Cas 14 — Gestion des résistances"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nDeux RRH refusent le process unique : « ça ne marchera pas ici. »\n\nTRAVAIL DEMANDÉ\n\nDiagnostic de résistance vs irréalisme.\n\nMÉTHODE\n\nParties prenantes, irritants, ADKAR parmi d'autres.\n\nCORRECTION ARGUMENTÉE\n\nÉcouter l'irritant (charge, outil). Distinguer peur et contrainte réelle. Sponsor + managers. Pas un mail « il faut s'aligner »."
            },
            {
              "block_type": "heading",
              "content": "Cas 15 — Présentation d'un business case"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nProjet rétention 80 k€. Le DAF veut un ROI « comme l'industrie ».\n\nTRAVAIL DEMANDÉ\n\nStructure du BC.\n\nMÉTHODE\n\nSans projet / avec / sensibilité ; hypothèses.\n\nCORRECTION ARGUMENTÉE\n\nCoût 80 k€ vs départs évités × coût de remplacement Hypothesis. Sensibilité. Le ROI n'autorise pas à sauter le social. Pas de 45 % légal."
            },
            {
              "block_type": "heading",
              "content": "Cas 16 — Identité HC cassée"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nSlide : HC fin 1 210, début 1 200, 221 départs, 40 arrivées.\n\nTRAVAIL DEMANDÉ\n\nContrôle.\n\nMÉTHODE\n\nHC_fin = début − départs + arrivées.\n\nCORRECTION ARGUMENTÉE\n\n1 200 − 221 + 40 = 1 019 ≠ 1 210. Base fausse. Pas de slide. Retour extract."
            },
            {
              "block_type": "heading",
              "content": "Cas 17 — ETP 28 h"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn manager compte 10 personnes à 28 h comme 10 ETP de besoin.\n\nTRAVAIL DEMANDÉ\n\nConversion.\n\nMÉTHODE\n\n28/35 = 0,8.\n\nCORRECTION ARGUMENTÉE\n\n10 HC = 8 ETP. Dimensionner 10 ETP surestime. Dire les deux unités."
            },
            {
              "block_type": "heading",
              "content": "Cas 18 — Turnover hors retraites"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nExploitation : 4 départs dont 3 retraites.\n\nTRAVAIL DEMANDÉ\n\nDeux taux.\n\nMÉTHODE\n\nIsoler si la décision le demande.\n\nCORRECTION ARGUMENTÉE\n\nTurnover total 4/56 ≈ 7 %. Hors retraites 1/56 ≈ 1,8 %. Les 3 retraites vont dans le SWP retraites, pas dans « climat »."
            },
            {
              "block_type": "heading",
              "content": "Cas 19 — RACI d'embauche"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nPersonne ne sait qui autorise un CDI agent.\n\nTRAVAIL DEMANDÉ\n\nMatrice minimale.\n\nMÉTHODE\n\nR/A/C/I sur une décision.\n\nCORRECTION ARGUMENTÉE\n\nA : à trancher (DAF vs DRH vs directeur région). R : RRH. C : manager. I : paie. Tant que A est vide, le SWP recrutement est un vœu."
            },
            {
              "block_type": "heading",
              "content": "Cas 20 — SIPOC recrutement"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nDélai de pourvoi « trop long », personne n'a le process.\n\nTRAVAIL DEMANDÉ\n\nSIPOC en une page.\n\nMÉTHODE\n\nFournisseurs, entrées, process, sorties, clients.\n\nCORRECTION ARGUMENTÉE\n\nS : manager, RRH, prestataire. P : besoin → offre → sélection → contrat. Mesurer le délai par étape. Standardiser avant d'automatiser."
            },
            {
              "block_type": "heading",
              "content": "Cas 21 — Span of control"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn resp. exploitation a 22 directs + intérim invisible.\n\nTRAVAIL DEMANDÉ\n\nLecture.\n\nMÉTHODE\n\nSpan, vacants, hors schéma.\n\nCORRECTION ARGUMENTÉE\n\n22 directs est un signal, pas un « standard 8 » inventé. Intérim à tracer. Cible après charge réelle."
            },
            {
              "block_type": "heading",
              "content": "Cas 22 — TOM as-is vs to-be"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous demande « le TOM » : un organigramme coloré.\n\nTRAVAIL DEMANDÉ\n\n7 couches.\n\nMÉTHODE\n\nProcess, org, gouv, tech, data, compétences, KPI.\n\nCORRECTION ARGUMENTÉE\n\nUn organigramme n'est qu'une couche. Sans data ETP et process unique, le to-be est un dessin."
            },
            {
              "block_type": "heading",
              "content": "Cas 23 — CSP trop gros"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nCopie d'un CSP de 40 personnes pour Nova.\n\nTRAVAIL DEMANDÉ\n\nDimensionnement.\n\nMÉTHODE\n\nVolume vs taille 1 200.\n\nCORRECTION ARGUMENTÉE\n\nUn pool de quelques personnes peut suffire. 40 crée de la file vide. Fusionner des CoE."
            },
            {
              "block_type": "heading",
              "content": "Cas 24 — HRBP encore admin"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn nomme 4 HRBP mais ils font encore la paie-liaison.\n\nTRAVAIL DEMANDÉ\n\nSéquence.\n\nMÉTHODE\n\nRetirer le volume avant le titre.\n\nCORRECTION ARGUMENTÉE\n\nSans pool admin, le HRBP n'existe pas. Séquence : process, pool, puis rôle partenaire."
            },
            {
              "block_type": "heading",
              "content": "Cas 25 — Comité sans décision"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nComité de 2 h, 40 slides, pas de question posée.\n\nTRAVAIL DEMANDÉ\n\nReformulation.\n\nMÉTHODE\n\nPyramide : situation, implication, question.\n\nCORRECTION ARGUMENTÉE\n\nSlide 1 : « Faut-il voter le scénario B sur les conseillers, sous conditions données et social ? » Le reste est annexe."
            },
            {
              "block_type": "heading",
              "content": "Cas 26 — Benchmark inventé"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe senior dit « mets 15 %, tout le monde sait ». \n\nTRAVAIL DEMANDÉ\n\nConduite.\n\nMÉTHODE\n\nSources vs invention.\n\nCORRECTION ARGUMENTÉE\n\nVous n'écrivez pas 15 % comme réel. Interne 18,7 %, définitions, « pas de source marché dans ce dossier »."
            },
            {
              "block_type": "heading",
              "content": "Cas 27 — Power BI trop tôt"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DSI promet un dashboard groupe en 10 jours. L'extract est sale.\n\nTRAVAIL DEMANDÉ\n\nPréalable.\n\nMÉTHODE\n\nModèle, relations, mesures — après types et identités.\n\nCORRECTION ARGUMENTÉE\n\nSans identité HC, le dashboard industrialise l'erreur. Excel contrôlé d'abord. Pas une certif DAX."
            },
            {
              "block_type": "heading",
              "content": "Cas 28 — IA générative et emplois"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn directeur : « ChatGPT va supprimer 40 conseillers. »\n\nTRAVAIL DEMANDÉ\n\nAnalyse de tâches.\n\nMÉTHODE\n\nTâches, pas postes ; gouvernance ; humain.\n\nCORRECTION ARGUMENTÉE\n\nVous analysez quelles tâches (FAQ, scripts). Vous n'écrivez pas −40 postes. RGPD, supervision, avis social si impact emplois. Junior n'annonce pas la suppression."
            },
            {
              "block_type": "heading",
              "content": "Cas 29 — RGPD extract"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn stagiaire met l'extract nominatif sur un Drive perso.\n\nTRAVAIL DEMANDÉ\n\nActes.\n\nMÉTHODE\n\nCanal mission, minimisation, alerte.\n\nCORRECTION ARGUMENTÉE\n\nRetirer, alerter manager / DPO client selon consigne, agrégats ensuite. Pas de moraline LinkedIn."
            },
            {
              "block_type": "heading",
              "content": "Cas 30 — Entretien sponsor"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DG parle 40 minutes, vous n'avez pas la question de décision.\n\nTRAVAIL DEMANDÉ\n\nGuide.\n\nMÉTHODE\n\nQuestion, succès à J+15, tabous, données, instances sans calendrier inventé.\n\nCORRECTION ARGUMENTÉE\n\nVous reformulez en 5 lignes et faites viser. Sans visa, pas dix entretiens."
            },
            {
              "block_type": "heading",
              "content": "Cas 31 — Atelier conflictuel"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nFacility et RC se rejettent le turnover.\n\nTRAVAIL DEMANDÉ\n\nAnimation.\n\nMÉTHODE\n\nFaits d'abord, branches MECE, parking des accusations.\n\nCORRECTION ARGUMENTÉE\n\nVous affichez les deux taux (20 % vs 27 %), vous interdisez le procès d'intention, vous sortez des hypothèses testables."
            },
            {
              "block_type": "heading",
              "content": "Cas 32 — Compte rendu"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nAprès atelier, chacun a « compris autre chose ».\n\nTRAVAIL DEMANDÉ\n\nCR de 1 page.\n\nMÉTHODE\n\nDécisions, ouverts, propriétaires, date.\n\nCORRECTION ARGUMENTÉE\n\nCR le jour même, 12 lignes, « à corriger sous 24 h sinon réputé exact ». Pas un roman."
            },
            {
              "block_type": "heading",
              "content": "Cas 33 — Hors périmètre cartographie 1 200"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DRH ajoute « au passage » la cartographie exhaustive.\n\nTRAVAIL DEMANDÉ\n\nÉconomie de mission.\n\nMÉTHODE\n\nNoter, remonter, ne pas dire oui.\n\nCORRECTION ARGUMENTÉE\n\nAutre lot. Manager : avenant ou refus. Le forfait ne rend pas le hors-périmètre gratuit."
            },
            {
              "block_type": "heading",
              "content": "Cas 34 — Fil de l'eau SWP"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe comité ne veut voir que la cible « positive ».\n\nTRAVAIL DEMANDÉ\n\nScénario A.\n\nMÉTHODE\n\nMême horizon, mêmes unités.\n\nCORRECTION ARGUMENTÉE\n\nSans fil de l'eau, on ne voit pas le coût de ne rien changer (gap qui s'ouvre). A est un vrai scénario."
            },
            {
              "block_type": "heading",
              "content": "Cas 35 — Mobilité fantôme"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe SWP C compte 24 mobilités / 3 ans. Aucun parcours n'existe.\n\nTRAVAIL DEMANDÉ\n\nRecalage.\n\nMÉTHODE\n\nPasserelle = vivier + délai + tuteur.\n\nCORRECTION ARGUMENTÉE\n\nVous retirez 24 ou vous les étiquetez « conditionnels ». Sinon C est un dessin."
            },
            {
              "block_type": "heading",
              "content": "Cas 36 — Masse 42 M€"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe DG divise 42 M€ par 1 200 = 35 k€ et parle de salaire médian.\n\nTRAVAIL DEMANDÉ\n\nCorrection.\n\nMÉTHODE\n\nMasse / HC ≠ médiane ; ≠ coût employeur.\n\nCORRECTION ARGUMENTÉE\n\n42 M / 1 200 = 35 k€ de brut moyen pédagogique, pas une médiane, pas un net, pas un coût employeur. Refuser la comparaison marché inventée."
            },
            {
              "block_type": "heading",
              "content": "Cas 37 — Sensibilité BC"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nROI 40 % si l'on évite 12 départs ; 0 si 3.\n\nTRAVAIL DEMANDÉ\n\nSlide.\n\nMÉTHODE\n\nFourchette, pas un point.\n\nCORRECTION ARGUMENTÉE\n\nVous montrez 3 / 8 / 12 départs évités. Recommandation conditionnelle. Pas un seul ROI hero."
            },
            {
              "block_type": "heading",
              "content": "Cas 38 — Feuille de route 18 mois"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nLe sponsor veut tout en 6 semaines (SIRH, GEPP, org, SWP).\n\nTRAVAIL DEMANDÉ\n\nSéquence.\n\nMÉTHODE\n\nDonnées → process → modèle → outil ; social en parallèle côté client.\n\nCORRECTION ARGUMENTÉE\n\n6 semaines : cadrage + extract + 1 métier SWP + as-is RH. Pas le SIRH complet. Dire le non-contenu."
            },
            {
              "block_type": "heading",
              "content": "Cas 39 — Dashboard 8 KPI"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous demande 40 indicateurs « pour briller ».\n\nTRAVAIL DEMANDÉ\n\nChoix.\n\nMÉTHODE\n\nKPI = levier déjà dans le plan.\n\nCORRECTION ARGUMENTÉE\n\nHC, ETP, TO, gap, vacants, pourvois internes, retraites binômées, contrôle identité. Le 41e attend un usage."
            },
            {
              "block_type": "heading",
              "content": "Cas 40 — Titres conclusifs"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nSlide : « Turnover ». Un graphe.\n\nTRAVAIL DEMANDÉ\n\nRéécriture.\n\nMÉTHODE\n\nTitre = message.\n\nCORRECTION ARGUMENTÉE\n\n« Le turnover RC (27 %) pèse 84 des 221 départs : prioriser ce métier avant le 18,7 % groupe. »"
            },
            {
              "block_type": "heading",
              "content": "Cas 41 — Anglais en comité"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn actionnaire pose « what's the attrition? ». Vous avez dit turnover.\n\nTRAVAIL DEMANDÉ\n\nDéfinition.\n\nMÉTHODE\n\nMême formule, mot dit.\n\nCORRECTION ARGUMENTÉE\n\n« Attrition / turnover here = exits / average HC = 18.7 %, pedagogical. Not a market benchmark. »"
            },
            {
              "block_type": "heading",
              "content": "Cas 42 — Test Excel cabinet"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous donne 12 lignes, 20 minutes, pas RECHERCHEX.\n\nTRAVAIL DEMANDÉ\n\nFilet.\n\nMÉTHODE\n\nINDEX/EQUIV, SOMME.SI.ENS, identité.\n\nCORRECTION ARGUMENTÉE\n\nMême calcul Ouest : 9 ; 8,6 ETP ; 2/9,5. Contrôle avant graphique. Ce parcours n'est pas une certif, l'exercice l'est."
            },
            {
              "block_type": "heading",
              "content": "Cas 43 — Étude de cas recrutement cabinet"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n« Turnover élevé, que faites-vous en 20 minutes ? »\n\nTRAVAIL DEMANDÉ\n\nStructure orale.\n\nMÉTHODE\n\nQuestion, MECE, données, 3 options, reco conditionnelle.\n\nCORRECTION ARGUMENTÉE\n\nClarifier population. Demander extract. Branches sorties / entrées / donnée. Pas de 15 % marché. Reco : fiabiliser + focale RC + SWP métier."
            },
            {
              "block_type": "heading",
              "content": "Cas 44 — Fit interview"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n« Racontez un désaccord avec un manager. »\n\nTRAVAIL DEMANDÉ\n\nSTAR factuel.\n\nMÉTHODE\n\nSituation, acte, limite de rôle.\n\nCORRECTION ARGUMENTÉE\n\nVous décrivez un refus de chiffre non sourcé, l'escalade, le livrable recalé. Pas de héros, pas de trahison client."
            },
            {
              "block_type": "heading",
              "content": "Cas 45 — Négociation salariale"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous sort 36 k€ « comme dans la formation ». \n\nTRAVAIL DEMANDÉ\n\nRéponse.\n\nMÉTHODE\n\nObjectif de marché ≠ garantie.\n\nCORRECTION ARGUMENTÉE\n\nVous discutez un fourchette sourcée par vos recherches d'offres, pas « le LMS a promis ». Aucune embauche n'est due."
            },
            {
              "block_type": "heading",
              "content": "Cas 46 — Premiers mois en cabinet"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nOn vous laisse seul chez le client le jeudi de la semaine 2.\n\nTRAVAIL DEMANDÉ\n\nRègles.\n\nMÉTHODE\n\nChaîne de relecture, timesheet, alerte.\n\nCORRECTION ARGUMENTÉE\n\nVous ne devenez pas manager. Envoi client = relecture. Absence senior = plus d'alerte, pas plus de droits."
            },
            {
              "block_type": "heading",
              "content": "Cas 47 — Modification des conditions de travail"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nCible org : changement d'horaires sur un plateau.\n\nTRAVAIL DEMANDÉ\n\nLimite junior.\n\nMÉTHODE\n\nImpact humain vs contrat vs instances.\n\nCORRECTION ARGUMENTÉE\n\nVous documentez l'impact. Vous ne qualifiez pas la modification. Avis social / texte. Pas de slide « c'est légal »."
            },
            {
              "block_type": "heading",
              "content": "Cas 48 — Restructuration murmurée"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nUn directeur parle de « dégraisser le siège » dans un atelier.\n\nTRAVAIL DEMANDÉ\n\nConduite.\n\nMÉTHODE\n\nMandat écrit, mots, escalade.\n\nCORRECTION ARGUMENTÉE\n\nVous ne notez pas « plan social » dans un objet d'e-mail. Vous demandez le mandat. Manager + social client. Hors improvisation junior."
            },
            {
              "block_type": "heading",
              "content": "Cas 49 — Saisonnalité Facility"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\nPic juillet, creux février. On dimensionne sur le pic en CDI.\n\nTRAVAIL DEMANDÉ\n\nModèle.\n\nMÉTHODE\n\nETP annuel vs pic ; mix contrat nommé.\n\nCORRECTION ARGUMENTÉE\n\nDeux colonnes : besoin pic et besoin annuel. Intérim / CDD en levier explicite, pas caché dans le stock CDI."
            },
            {
              "block_type": "heading",
              "content": "Cas 50 — Soutenance CODIR hostile"
            },
            {
              "block_type": "text",
              "content": "ÉNONCÉ\n\n« Vos chiffres sont faux, on a 1 150 personnes. »\n\nTRAVAIL DEMANDÉ\n\nDéfense.\n\nMÉTHODE\n\nSource, date, définition, écart.\n\nCORRECTION ARGUMENTÉE\n\n« Notre extract pédagogique 31/12 : 1 200, source client fichier X. Si 1 150, montrons l'écart (périmètre, date, prestataires). On ne se bat pas sur un orgueil, on recale. »"
            }
          ],
          "position": 3
        },
        {
          "title": "Bibliothèque facultative — 100 questions d'entretien cabinet",
          "description": "Cent questions (fit, MECE, ETP, SWP, GEPP, Excel, cas, 36 k€) avec réponses modèles courtes. Hors quota 5 h.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 0,
          "is_required": false,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous vous entraînez aux entretiens juniors W&O / People / Human Capital / change / GEPP / operating model. Les réponses sont des modèles, pas des scripts à réciter. 36 000 € = objectif de marché, pas une garantie. Cinq heures ≠ mission autonome."
            },
            {
              "block_type": "callout",
              "content": "Facultatif, 0 minute. Certaines questions recoupent l'examen. Ce n'est pas un QCM officiel de cabinet nommé."
            },
            {
              "block_type": "heading",
              "content": "Comment utiliser"
            },
            {
              "block_type": "text",
              "content": "Couvrez la question, structurez à voix haute (10 à 90 secondes), comparez. Qualifiez : fait, méthode, limite, escalade. Interdit : benchmark inventé, délai CSE inventé, RNCP, certif Excel."
            },
            {
              "block_type": "code",
              "content": "FIT / POSTURE (1-20)\n01 Pourquoi le conseil W&O ? — Intérêt pour organisations+données+décision ; lot cadré, pas « sauver les RH ».\n02 Analyste vs consultant vs senior vs manager ? — Collecte / lot / fil mission / cadrage-risque commercial.\n03 Une fois où vous avez dit non. — Chiffre non sourcé, escalade, livrable recalé.\n04 Confidentialité ? — Canal mission, agrégats, pas de nominatif train/LinkedIn.\n05 Client difficile ? — Reformuler la question de décision, ne pas inventer pour plaire.\n06 Pourquoi Nova / un cas fictif dans votre bouche ? — Dire que c'est pédagogique, transposer la méthode.\n07 Échec ? — Identité HC fausse, slide stoppée, base recaléée.\n08 Travail en équipe cabinet ? — RACI interne, relecture avant client.\n09 Déplacement / charge ? — Rythme réel, timesheet honnête, alerte tôt.\n10 Pourquoi vous et pas un profil RH pur ? — Méthode diagnostic + chiffres + limite de rôle.\n11 Conflit d'intérêts / ami chez le client ? — Déclarer, sortir du lot.\n12 Qualité d'un livrable ? — Source, date, définition, un message, relecture.\n13 Régie vs forfait ? — Vous ne priciez pas ; vous tenez le temps et le hors-périmètre.\n14 36 k€ ? — Ordre de grandeur d'offres, pas une promesse LMS ni une garantie.\n15 Attestation LOU ? — Réussite plateforme, pas RNCP, pas diplôme d'État.\n16 Excel certifié ? — Non. Formules et contrôles, pas un badge Microsoft.\n17 Première semaine ? — Cadrage, données, 4-6 entretiens, pas la cible.\n18 Sponsor absent ? — Ne pas prendre le RRH pour sponsor.\n19 Hors périmètre ? — Noter, remonter, ne pas dire oui.\n20 Erreur envoyée au client ? — Dire vrai, corriger, manager, pas de rustine silencieuse.\n\nMECE / STRUCTURATION (21-35)\n21 MECE ? — Sans chevauchement, sans trou.\n22 Arbre turnover. — Sorties (retraites/évitables/fins de contrat) / entrées / donnée.\n23 Symptôme vs question. — « SIRH » est un moyen ; « pourquoi les ETP ne sont pas fiables » est une question.\n24 20 min cas oral. — Clarifier, structurer, hypothèses, reco conditionnelle, limites.\n25 Calcul mental 221/1179. — ≈18,7 % (220/1180≈18,6 %).\n26 28 h en ETP. — 0,8.\n27 10 personnes 28 h. — 8 ETP.\n28 Identité. — Fin = début − départs + arrivées.\n29 Prioriser 3 sujets Nova. — Donnée ETP, RC turnover, pyramide exploitation.\n30 Hypothesis driven ? — Hypothèses testables, pas opinions.\n31 Issue vs solution tree. — Pourquoi vs comment.\n32 40 slides. — Pyramide, 1 question de décision.\n33 Donnée manquante. — Le dire, fourchette, ne pas inventer le marché.\n34 Deux causes possibles. — Test (fichier vs entretien), pas un vote.\n35 Synthèse 30 secondes. — Situation, implication, demande au comité.\n\nINDICATEURS / EXCEL (36-55)\n36 HC vs ETP. — Têtes vs 35 h=1.\n37 Turnover. — Départs / effectif moyen.\n38 Pourquoi pas /HC fin seul. — Biais si l'on a beaucoup embauché ou réduit.\n39 Absentéisme. — Jours absence / jours théoriques ; pas un taux légal unique.\n40 Pyramide utile. — Croiser métier.\n41 Masse vs coût employeur. — Brut vs + charges employeur ; pas de 45 % légal.\n42 SOMME.SI.ENS. — Somme sous plusieurs critères (site ET statut).\n43 RECHERCHEX. — Ramener un attribut ; filet INDEX/EQUIV.\n44 TCD. — Croiser ; ne remplace pas l'identité.\n45 Contrôle C1. — Identité HC VRAI avant graphique.\n46 Power Query. — Nettoyer types/filtres ; pas une certif.\n47 Doublons id. — NBVAL vs UNIQUE.\n48 Filtre site. — Inès Est hors turnover Ouest.\n49 Petite base 12 lignes. — Limites d'échantillon à dire au COMEX.\n50 Nominatif COMEX. — Non ; agrégats.\n51 8,6 ETP Ouest. — 7×1 + 2×0,8.\n52 2/9,5. — ≈21 %.\n53 Graphique d'abord. — Non, contrôles d'abord.\n54 Heures mensuelles. — Reconvertir en hebdo avant /35, documenter.\n55 Intérim. — Hors HC salarié, annexe.\n\nSWP / GEPP (56-75)\n56 SWP en 3 questions. — Demande, offre, écart.\n57 Horizon. — 3 ans pédagogique lisible ; 5 ans si stratégie tient.\n58 Automatisation. — Moins de besoin, pas stock négatif.\n59 Fil de l'eau. — Vrai scénario.\n60 GEPP vs SWP. — Dialogue/parcours vs outil de direction.\n61 Seuil 1 200. — Vérifier le texte, ne pas réciter.\n62 Accord jeudi. — Refus rédaction ; livrer diagnostic.\n63 Métier critique. — Impact, rareté, délai, pyramide, tension.\n64 Passerelle. — Vivier, délai, tuteur ; sinon fantôme.\n65 Reconversion longue. — Pas une vanne N+1.\n66 4 niveaux de maîtrise. — Assez ; 10 niveaux = théâtre.\n67 Matrice nominative CODIR. — Non.\n68 200 fiches vague 1. — Non ; 8-15 emplois-repères.\n69 Retraites dans TO. — Les isoler si la décision le demande ; les mettre au SWP retraites.\n70 Gap. — besoin_net − stock_fin.\n71 Scénarios comparables. — Même métier, horizon, unités.\n72 KPI SWP. — Gap, pourvois, TO métier, auto réelle, binômes.\n73 Recaler si TO baisse. — Moins recruter, ne pas garder 47 par inertie.\n74 1 200 en bloc. — Refus ; métier par métier.\n75 Marché turnover. — Interdit sans source ; interne d'abord.\n\nORG / CHANGE / PROJET (76-90)\n76 Structure hybride Nova. — Siège fonctionnel, ops divisionnelles, RH fragmentée.\n77 Matrice sans règle. — Chaos nommé.\n78 Span 22. — Signal, pas un standard inventé.\n79 TOM. — 7 couches, pas un org chart.\n80 Ulrich 40k sur 1 200. — Cases vides.\n81 HRBP + admin. — Séquence pool d'abord.\n82 ADKAR. — Un cadre parmi d'autres.\n83 Résistance vs contrainte. — Écouter l'irritant réel.\n84 RACI projet. — A unique par décision.\n85 Agile vs classique. — Selon prévisibilité ; pas un slogan Facility.\n86 Comité. — Décision demandée, risques, prochain jalon.\n87 Feuille de route 6 semaines. — Cadrage+données+1 métier, pas tout.\n88 Impacts horaires. — Documenter ; pas « c'est légal ».\n89 Dégraisser. — Mandat, mots, escalade, pas d'objet « plan social ».\n90 Adoption. — Process utilisé + extract fiable, pas un logo.\n\nCAS / CODIR / OFFRE (91-100)\n91 20 min Nova. — Fiabiliser ETP, focale RC, pyramide exploitation, SWP 1 métier, hors juridique.\n92 Objection 1 150 vs 1 200. — Source, date, périmètre, recaler.\n93 Vs marché. — 18,7 % interne, pas de 12 % inventé.\n94 Défense B vs C. — Conditions (outil, passerelles) ; le comité vote.\n95 Question piège salaire. — Fourchette recherchée, LMS n'a rien promis.\n96 Étude Excel 20 min. — Identité, ETP, TO, 1 TCD, phrase de limite.\n97 Pression « cible mercredi ». — Cadrage d'abord.\n98 Anglais attrition. — Exits/average HC, definition stated.\n99 Premiers 90 jours cabinet. — Lots, relecture, timesheet, une expertise (indicateurs).\n100 Pourquoi vous après 5 h ? — Méthode, réflexes, limites assumées ; pas une mission autonome déjà faite."
            }
          ],
          "position": 4
        },
        {
          "title": "Complément facultatif — digital, IA, droit social appliqué",
          "description": "Automatisation, SIRH, IA, RGPD ; CSE, GEPP, mobilité, réorganisation — réflexes junior, pas un cours de droit.",
          "lesson_type": "lesson",
          "estimated_duration_minutes": 0,
          "is_required": false,
          "blocks": [
            {
              "block_type": "heading",
              "content": "Objectifs pédagogiques"
            },
            {
              "block_type": "text",
              "content": "Vous situez les impacts digitaux sur les tâches, et les thèmes de droit social utiles en transformation, sans usurper l'avocat ni le DPO."
            },
            {
              "block_type": "heading",
              "content": "Ce qu'il faut comprendre"
            },
            {
              "block_type": "text",
              "content": "Digital / IA. L'automatisation et l'IA générative touchent des tâches (rédiger une FAQ, classer un ticket), rarement un métier entier du jour au lendemain. Analysez les tâches, les compétences, les risques (biais, fuite de données, hallucination), la supervision humaine. Un SIRH n'est pas une GEPP. Un copilote n'autorise pas un extract nominatif dans un outil grand public. RGPD : minimisation, canal, alerte. Le junior ne « valide » pas un traitement.\n\nDroit social appliqué. Information et consultation, CSE, GEPP, mobilité, réorganisation, modification des conditions de travail, restructuration : ce sont des thèmes. Les règles précises (seuils, délais, contenus) se lisent dans le Code du travail et la jurisprudence, et se recalent avec l'avis social de l'entreprise. Un consultant junior prépare des faits d'emploi et des options. Il n'invente pas un calendrier, ne rédige pas la note d'information, ne qualifie pas un PSE. Dès que le contrat, l'emploi ou les instances sont en jeu : escalade, texte, conseil spécialisé."
            },
            {
              "block_type": "callout",
              "content": "Facultatif. Vérifiez Légifrance. Ce complément n'est pas un avis juridique. L'examen obligatoire teste déjà le réflexe « ne pas inventer »."
            },
            {
              "block_type": "code",
              "content": "RÉFLEXE UNIQUE\nImpact tâches / données / emplois  →  documenter\nObligation, délai, seuil, qualification  →  vérifier le texte + avis social\nJunior  →  faits, options, alertes\nPas junior  →  accord, CSE, licenciement, RGPD de traitement, choix d'éditeur"
            }
          ],
          "position": 5
        }
      ]
    }
  ]
}
$coursejsonb$;
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
  IF EXISTS (
    SELECT 1 FROM modules WHERE course_id = v_course_id AND position >= 5
  ) THEN
    RAISE NOTICE '009b : déjà chargé — skip.';
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

UPDATE courses
SET status = 'published',
    published_at = COALESCE(published_at, now()),
    updated_at = now()
WHERE slug = 'consultant-junior-workforce-organization';

COMMIT;
