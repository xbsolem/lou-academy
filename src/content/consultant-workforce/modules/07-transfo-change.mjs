import { pack, quizLesson, q, code } from "../lib.mjs";

export default {
  position: 7,
  title: "Transformation RH, changement et projet",
  description:
    "Esquisser un modèle RH (CSP, centres d'expertise, HRBP), conduire l'adoption avec les parties prenantes (ADKAR comme un cadre parmi d'autres) et tenir un projet de conseil (planning, comité, risques, agile vs classique) — sans valider une restructuration juridique.",
  lessons: [
    pack({
      title: "Transformer le modèle RH",
      description:
        "Distinguer CSP, centres d'expertise et HRBP, et les dimensionner à une entreprise de taille intermédiaire, sans copier un grand groupe.",
      minutes: 8,
      objectifs:
        "Vous savez expliquer le trio CSP / centre d'expertise / HRBP, ce que chacun prend et ne prend pas, et pourquoi un copier-coller sur 1 200 personnes échoue. Vous reliez ce modèle au TOM, pas à un organigramme nominatif, et vous ne validez aucune réaffectation juridique.",
      theorie:
        "Transformer la RH, ce n'est pas « digitaliser ». C'est répartir le travail entre trois logiques, souvent inspirées d'Ulrich — un cadre répandu, pas une obligation ni le seul possible. Le CSP (centre de services partagés) traite le volume standardisé : dossiers, données, première ligne. Le centre d'expertise (CoE) conçoit règles et outils : rémunération, talent, social, recrutement cadre, GEPP. Le HRBP traduit la stratégie de la BU, challenge le manager, relie le terrain aux expertises. Si tout le monde fait tout, personne n'est partenaire, expert, ni industriel.\n\nCe sont des rôles, pas trois armées. Chez Groupe Nova Services — 1 200 salariés fictifs, RH fragmentée par BU — un HRBP peut garder une expertise légère ; un CSP peut être un pool de six personnes, pas un shared services de 80. Copier un groupe de 40 000 produit des cases vides.\n\nOn échoue si l'on crée le CSP avant de standardiser, si l'on nomme des HRBP sans retirer l'admin, ou si le CoE écrit des politiques non appliquées. Le to-be est un TOM, pas un slide « on passe en Ulrich ». Transfert, site, postes : le junior alerte et renvoie à un avis social et au texte. Il n'est pas le juriste de la restructuration.",
      methode:
        "Partez du TOM as-is, pas d'un modèle célèbre.\n1. Listez les activités RH (admin, paie-liaison, recrutement volume, recrutement critique, social, formation, données, conseil manager). Volume vs jugement.\n2. Classez : CSP (volume, standard), CoE (règle, exception complexe), HRBP (proximité, arbitrage business), manager (ce qui ne devrait plus transiter par la RH).\n3. Pour chaque activité, un propriétaire cible, un A, un volume pédagogique, une compétence à construire. Pas de nom de personne sur le premier jet.\n4. Vérifiez la taille : à 1 200 salariés, trop de spécialistes créent de la file d'attente. Fusionnez des CoE si le volume ne justifie pas un poste plein.\n5. Séquence : d'abord processus et données, puis pool admin, puis montée des HRBP, puis CoE. Inverser, c'est coller des titres sur l'existant.\n6. Impacts emplois / sites / statuts : page d'alerte, pas de calendrier inventé. Légifrance et avis social, pas votre visa.",
      noteText:
        "CSP, CoE et HRBP sont des rôles cibles. Les nommer ne crée ni la compétence ni le droit de réaffecter. Un consultant junior ne valide pas une restructuration, un transfert, ni une information-consultation. Vérifier le texte et l'avis social du client.",
      exemple:
        "Nova Services a, à titre pédagogique, une vingtaine de RH « à tout faire » répartis dans quatre BU. Le COMEX veut « des vrais HRBP ». Sans méthode, on renomme les mêmes personnes : elles continuent les dossiers, n'ont plus le temps de challenger, et le CSP n'existe pas. Avec méthode, on isole d'abord les flux admin (données, absences, dossiers d'entrée) dans un pool unique ; on clarifie deux ou trois expertises réellement critiques (social, recrutement tendu) ; on dégage du temps HRBP sur deux BU pilotes. Les titres suivent le travail, pas l'inverse. Si le pool implique un changement de lieu ou de rattachement, ce n'est plus une slide RH : c'est un sujet social que vous signalez, vous ne l'arbitrez pas.",
      extra: [
        code(`MODÈLE RH — rôles (cadre parmi d'autres, pas une norme)
CSP / pool admin     Volume standard : dossiers, data, 1re ligne
CoE                  Règles et cas complexes : social, rémunération, talent…
HRBP                 Proximité BU : besoin, challenge, relais vers CSP/CoE
Manager              Management quotidien : pas un ticket RH pour tout

À ~1 200 salariés (Nova, fictif) : souvent pool + HRBP mixtes + CoE légers.
Pas un copier-coller de grand groupe. Pas de liste nominative = pas un PSE.`),
      ],
      erreurs:
        "Renommer tout le monde HRBP. Créer un CSP sans processus commun. Staffer trois CoE pour un volume de deux dossiers par mois. Oublier le manager dans le modèle (la RH absorbe alors le management). Acheter un SIRH pour « faire le CSP ». Présenter le modèle comme obligatoire. Glisser des noms dans l'organigramme cible et le faire signer comme une décision sociale.",
      particuliers:
        "Filiale d'un groupe : le CSP peut être au corporate ; le HRBP local n'en devient pas un simple relais silencieux. Public / associatif : les titres diffèrent, les trois logiques (volume, expertise, proximité) restent utiles. International : un CoE social France n'est pas le CoE d'un autre pays. Externalisation du CSP : c'est un make or buy, pas « plus moderne » par nature ; le junior n'engage pas le contrat. Tension sociale en cours : on ne lance pas une bascule de modèle par-dessus une négociation. On cadencera après avis habilité.",
      exercice:
        "Le COMEX de Nova Services demande « Ulrich en six semaines, avec CSP, trois CoE et un HRBP par BU ». En six lignes : ce que vous acceptez comme intention, ce que vous recalez (taille, séquence), et ce que vous ne validez pas.",
      correction:
        "Intention acceptable : séparer volume, expertise et proximité, pour que le conseil aux managers existe vraiment. Recalage : six semaines ne créent ni processus ni compétences ; trois CoE plein temps sont probablement trop pour 1 200 personnes ; un HRBP par BU plus un CSP plus trois CoE est un copier-coller. Séquence : processus et data, pool admin, HRBP sur pilote, CoE selon volume réel. Vous ne validez pas la réaffectation des vingt RH, le lieu du pool, ni un calendrier d'instances. Vous livrez un modèle de rôles et une alerte sociale.",
    }),
    pack({
      title: "Conduire le changement et l'adoption",
      description:
        "Cartographier les parties prenantes, utiliser ADKAR comme un cadre parmi d'autres, et mesurer l'adoption plutôt que la présence au lancement.",
      minutes: 8,
      objectifs:
        "Vous savez dresser une carte des parties prenantes, choisir un cadre de changement (ADKAR n'est pas le seul), et distinguer communication, formation et adoption. Vous mesurez des comportements, pas des invitations.",
      theorie:
        "Un TOM ou un modèle RH n'existe que s'il est adopté. L'adoption, c'est faire autrement : le manager utilise le bon canal, le RHBP ne reprend pas l'admin, le dossier n'emprunte plus le chemin de traverse. Une plénière, un logo et 90 % de présence ne prouvent rien. On a informé. On n'a pas changé.\n\nLes parties prenantes ne sont pas « tout le monde ». On cartographie intérêt, pouvoir, perte et gain. Un DRH, un manager, un RH de BU, un CSE, un DSI : cinq conversations, pas un e-mail unique. Le CSE n'est pas un « résistant ADKAR » : c'est une instance. Le junior ne mène pas l'information-consultation, n'invente pas les délais, et ne contourne pas le social avec un cadre de change.\n\nADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) est un cadre parmi d'autres, aux côtés de Kotter, de Lewin, des courbes d'appropriation. Il diagnostique un trou : on ne sait pas pourquoi, on ne veut pas, on ne sait pas, on ne sait pas faire, ou rien n'entretient le geste. Aucun cadre n'est une science unique ni une obligation. L'adoption se mesure : usage du processus cible, fichiers parallèles, qualité — données du client, pas un benchmark inventé.",
      methode:
        "Une carte, un cadre, des mesures. Pas un kit de goodies.\n1. Listez les groupes : COMEX, DRH, RH de BU, managers, salariés concernés, DSI, finance, instances. Pour chacun : pouvoir, intérêt, perte / gain, attitude actuelle.\n2. Formulez l'adoption cible en comportements (« le manager dépose le besoin dans le canal unique », pas « adhère à la vision »).\n3. Choisissez un cadre pour diagnostiquer les trous — ADKAR ou un autre, explicitement « parmi d'autres ». Un trou D (désir) ne se soigne pas par un tutoriel (K).\n4. Plan : messages par groupe, formation à l'outil et au rôle, relais managers, rythme de renforcement (ce que l'on arrête de tolérer : le fichier parallèle).\n5. Mesurez à 30 / 60 / 90 jours pédagogiques : usage, contournements, qualité. Revoyez le plan, pas le slogan.\n6. Social et légal : si le changement touche l'emploi, l'organisation juridique ou les instances, vous signalez. Vous ne « managez » pas le CSE comme un stakeholder marketing.",
      noteText:
        "ADKAR, Kotter, Lewin : cadres d'analyse, pas des certifications de ce parcours, pas des obligations légales. L'attestation LOU Academy n'en fait pas un titre. Le dialogue social a ses textes : Légifrance et avis habilité, pas un atelier d'adoption.",
      exemple:
        "Nova Services lance le canal unique de demande RH. Lancement : 200 managers en visio, applause. Trente jours plus tard, 60 % des demandes arrivent encore par e-mail au RH de BU — chiffre pédagogique, pas un benchmark. Diagnostic ADKAR : Awareness à peu près là ; Desire faible (le RH local répond plus vite que le CSP) ; Knowledge partiel ; Ability faible sur le formulaire ; Reinforcement nul (personne ne refuse l'e-mail). Un plan Kotter mal lu aurait multiplié les « coalitions » et les slides. Ici, on ferme la voie de traverse, on forme au formulaire, on donne au HRBP un temps de conseil, on mesure le % de demandes dans le canal. Le CSE, s'il doit être informé d'une réorganisation plus large, n'est pas « la cible Desire du pack ». C'est un autre circuit.",
      extra: [
        code(`PARTIES PRENANTES × ADOPTION (Nova, fictif)
Groupe          Perte / gain              Trou typique     Levier
Managers        Temps vs clarté           Ability, Desire  Outil simple + relais
RH de BU        Identité « je fais tout » Desire           Nouveau rôle réel
HRBP cibles     Charge si admin reste     Ability          Retirer l'admin d'abord
COMEX           Impatience de slides      Reinforcement    KPI d'usage, pas kickoff
Instances       Droits d'information      ≠ cadre change   Avis social / textes

Cadres : ADKAR | Kotter | Lewin | autres — un parmi d'autres.
Adoption = comportement mesuré. Présence au lancement ≠ adoption.`),
      ],
      erreurs:
        "Confondre lancement et adoption. Envoyer le même message à tous. Former (K) alors que le trou est le désir (D) ou le renforcement (R). Présenter ADKAR comme le seul cadre scientifique. Traiter le CSE comme un résistant à « embarquer ». Inventer un taux d'adoption de marché. Mesurer la satisfaction du kickoff. Continuer à accepter le fichier parallèle « le temps que ça prenne ».",
      particuliers:
        "Changement d'outil seul : souvent un problème d'Ability et de Reinforcement, pas de vision. Changement de rôle (RHBP) : Desire et identité, plus long. Multi-sites : relais locaux, pas un e-mail siège. Fusion / acquisition : le change se cale sur le social, pas l'inverse. Équipes en sous-effectif : demander de l'adoption sans retirer de charge est un vœu. Crise : on réduit le périmètre de changement, on n'ajoute pas un « transformation pack ».",
      exercice:
        "Le canal unique de Nova est lancé. Taux pédagogique d'usage à 30 jours : 40 %. Les RH de BU répondent encore aux e-mails. En cinq points : parties prenantes clés, cadre utilisé (et pourquoi ce n'est pas le seul), trou probable, action de renforcement, ce que vous ne faites pas vis-à-vis des instances.",
      correction:
        "Parties prenantes : managers (usagers), RH de BU (voie de traverse), HRBP, DRH, DSI, instances si le projet dépasse l'outil. Cadre : ADKAR pour localiser le trou, ou Kotter / Lewin si l'on parle coalition et gel des anciennes règles — vous dites que c'est un cadre parmi d'autres. Trou probable : Desire + Reinforcement (le vieux canal est plus confortable) plus Ability sur le formulaire. Renforcement : ne plus traiter l'e-mail hors exception, mesurer l'usage, aider les 40 % déjà dedans. Instances : vous ne les « ADKAR-isez » pas ; si réorganisation, avis social et textes, pas un atelier de désir.",
    }),
    pack({
      title: "Tenir un projet de conseil",
      description:
        "Planifier une mission W&O, tenir un comité, enregistrer les risques, et situer agile vs classique sans en faire un dogme.",
      minutes: 9,
      objectifs:
        "Vous savez poser un planning de mission (jalons, livrables, comité), tenir un registre de risques, et expliquer quand un mode itératif aide — sans remplacer le sponsor, ni le juriste, ni un Scrum théorique que la mission n'a pas.",
      theorie:
        "Une mission Workforce & Organization n'est pas un sprint logiciel ni un projet industriel de dix-huit mois. C'est un projet : périmètre, livrables, rythme d'arbitrage, risques, fin. Sans cela, le diagnostic s'éternise et personne n'a décidé.\n\nLe planning junior tient en phases : cadrage, diagnostic, cibles (org / TOM / processus), plan de changement, restitution. Chaque phase a une date, un livrable, un comité. Le chemin critique n'est pas le PowerPoint : ce sont les données, les entretiens, et un A sur le to-be. Un planning sans accès ni décisions est un vœu.\n\nLe COPIL arbitre périmètre, hypothèses et go / no-go. Le COTECH prépare. Le junior anime, documente, alerte : il ne préside pas à la place du sponsor. Les risques ont un propriétaire, un impact, une mitigation. « Le changement est difficile » n'est pas un risque, c'est une tautologie.\n\nAgile vs classique : une intro, pas une conversion. Le classique (phases, jalon, comité) protège décisions et social. L'itératif aide pour ateliers, SIPOC, RACI. Beaucoup de missions sont hybrides. « On est agile » ne dispense ni de COPIL ni d'avis social. « On est en cycle en V » ne dispense pas d'ajuster un SIPOC après le terrain.",
      methode:
        "Une page de pilotage, tenue chaque semaine.\n1. Phases et jalons : cadrage (note), diagnostic (constats), cibles (TOM / org / processus), adoption, restitution. Dates liées aux accès, pas à un espoir commercial.\n2. Livrables nominatifs : qui produit, qui valide (A du client, pas vous).\n3. Instances : COPIL (décisions), COTECH ou points métier (préparation), bilatérales sponsor. Ordre du jour, décisions, actions — comme tout projet.\n4. Risques : 5 à 8 lignes max. Impact × vraisemblance en langage simple. Mitigation réelle (« slot data le 12 »), pas « communiquer davantage ».\n5. Mode de travail : dites ce qui est figé (périmètre, instances, alertes sociales) et ce qui itère (cartes, RACI, maquettes). Écrivez-le au cadrage pour éviter la guerre de religion agile / classique.\n6. Ce que le planning ne contient pas : délais légaux inventés, date de PSE, « sprints » qui cachent l'absence de décision.",
      noteText:
        "Le consultant junior pilote la mission, pas l'entreprise. Il n'est ni le président du COPIL, ni le valideur juridique d'une réorganisation. Un planning de mission n'est pas un calendrier d'instances. Vérifier Légifrance et l'avis social dès que le livrable touche à l'emploi ou aux statuts.",
      exemple:
        "Mission Nova Services, huit semaines pédagogiques. Semaines 1-2 : cadrage, accès data, carte des parties prenantes. Semaines 3-4 : diagnostic effectifs, SIPOC recrutement, spans. Semaines 5-6 : TOM as-is / to-be, hypothèse CSP / HRBP, pas de noms. Semaine 7 : plan d'adoption et risques. Semaine 8 : COPIL de restitution. Risque n°1 : les quatre fichiers d'effectifs ne recollent pas — mitigation : atelier data dès J+5, pas à J+40. Risque n°2 : le COMEX veut des noms sur l'organigramme — mitigation : le sponsor confirme que le livrable reste une hypothèse de rôles ; alerte sociale écrite. Le mode est hybride : COPIL toutes les deux semaines (classique), revues de processus en ateliers courts (itératif). Ce n'est ni du Scrum, ni un cycle en V de SI.",
      extra: [
        code(`PILOTAGE MISSION W&O — une page (Nova, fictif)
Phases     Jalon              Livrable              Instance qui tranche
Cadrage    S2                 Note, accès, RACI     Sponsor
Diagnostic S4                 Constats, SIPOC       COTECH puis COPIL
Cibles     S6                 TOM / org / process   COPIL (A client)
Adoption   S7                 Plan + mesures        Sponsor + DRH
Restitue   S8                 Dossier + alertes     COPIL

Risques (extrait)
ID  Risque                 Impact           Mitigation              Proprio
R1  Data effectifs × 4     Cibles fausses   Atelier data J+5        Client data
R2  Demande de noms        Glissade sociale Livrable = rôles + alerte  Consultant
R3  Sponsor absent         Pas d'A          Bilatérale hebdo        Sponsor

Hybride : décisions en COPIL | ateliers itératifs | social hors planning junior.`),
      ],
      erreurs:
        "Remplacer le COPIL par un stand-up. Coller des sprints sur une information-consultation. Tenir un planning sans accès aux données. Avoir vingt risques et aucune mitigation. Faire valider le to-be par le junior. Promettre l'agilité pour éviter de figer le périmètre. Inventer un chemin critique légal. Livrer 80 slides et zéro décision demandée.",
      particuliers:
        "Mission de deux semaines : un diagnostic, pas un TOM complet. Mission au forfait : le planning est aussi un contrat ; tout ajout passe par le sponsor. Client très « agile » : vous acceptez les boucles, vous refusez l'absence d'A. Client très « cycle en V » : vous livrez des jalons, vous gardez le droit de corriger un SIPOC. Co-traitance juridique / social : leur planning n'est pas le vôtre ; vous articulez, vous ne le rédigez pas. International : fuseaux et instances locales cassent un Gantt unique.",
      exercice:
        "Le sponsor de Nova veut « du Scrum RH, un organigramme nominatif en sprint 2, et le CSE en même temps ». Proposez le mode de mission, trois jalons, deux risques, et la phrase de refus junior.",
      correction:
        "Mode hybride : ateliers itératifs sur processus et RACI ; COPIL pour figer cadrage, cibles et alertes ; pas de Scrum théâtral. Jalons : note de cadrage et accès ; diagnostic (SIPOC, spans, data) ; cibles de rôles (pas de noms) + plan d'adoption. Risques : data hétérogène ; glissade vers un organigramme nominatif / social. Phrase : nous ne validons pas une restructuration ni un calendrier d'instances ; l'organigramme nominatif n'est pas un livrable junior ; le CSE n'est pas un sprint. Vérifier textes et avis social. Le COPIL tranche le périmètre, pas le stand-up.",
    }),
    quizLesson({
      title: "Quiz — Transformation, changement et projet",
      description:
        "Vérifier CSP / CoE / HRBP, ADKAR parmi d'autres cadres, adoption, pilotage de mission et limite juridique.",
      passing_score: 70,
      minutes: 5,
      questions: [
        q({
          question:
            "À Nova Services (1 200 salariés, fictif), le COMEX veut un CSP, trois CoE dédiés et un HRBP par BU « comme un grand groupe ». La réponse professionnelle est :",
          options: [
            "A. D'appliquer Ulrich à l'identique : c'est le seul modèle RH.",
            "B. De recaler la taille et la séquence (processus et data d'abord, rôles selon le volume) : le trio est une logique, pas un copier-coller.",
            "C. De renommer tous les RH « HRBP » dès la semaine suivante.",
            "D. De valider les réaffectations, le modèle valant plan social.",
          ],
          correct: 1,
          explanation:
            "CSP / CoE / HRBP sont des logiques utiles, pas une obligation ni un organigramme de grand groupe. On ne valide pas les réaffectations. Renommer ne transforme rien.",
        }),
        q({
          question:
            "À propos d'ADKAR, quelle affirmation est exacte dans ce parcours ?",
          options: [
            "A. ADKAR est le cadre unique scientifiquement obligatoire en conseil RH.",
            "B. ADKAR est un cadre parmi d'autres (Kotter, Lewin, etc.), utile pour diagnostiquer un trou d'adoption.",
            "C. ADKAR remplace l'information-consultation des instances.",
            "D. Un score ADKAR de lancement prouve que le TOM est adopté.",
          ],
          correct: 1,
          explanation:
            "ADKAR aide à voir si le trou est la conscience, le désir, le savoir, le savoir-faire ou le renforcement. Ce n'est pas le seul cadre, ni un substitut du social, ni une preuve d'adoption.",
        }),
        q({
          question:
            "Deux cents managers ont assisté au lancement du canal unique ; 40 % des demandes y passent à 30 jours (chiffre pédagogique). Que mesurez-vous comme adoption ?",
          options: [
            "A. La présence à la visio, qui vaut adoption.",
            "B. Le comportement réel : part des demandes dans le canal, contournements, qualité — pas le kickoff.",
            "C. Un taux d'adoption « de marché » à 80 % que vous inventez pour le COPIL.",
            "D. Le nombre de goodies distribués.",
          ],
          correct: 1,
          explanation:
            "L'adoption est un comportement mesuré. La présence au lancement n'en est pas une. On n'invente pas de benchmark.",
        }),
        q({
          question:
            "Quelle description du mode projet convient à une mission W&O junior ?",
          options: [
            "A. Du Scrum intégral : le COPIL est remplacé par un daily, le CSE est un sprint.",
            "B. Un cycle en V figé : aucun SIPOC ne se corrige après le terrain.",
            "C. Souvent hybride : gouvernance et décisions en comité, ateliers itératifs ; ni dogme agile ni dogme classique.",
            "D. Pas de planning : le conseil « agile » avance sans jalon.",
          ],
          correct: 2,
          explanation:
            "Les missions W&O mixent souvent COPIL (décisions, social signalé) et boucles courtes (cartes, RACI). L'agilité ne supprime ni comité ni instances. Le classique n'interdit pas d'apprendre du terrain.",
        }),
        q({
          question:
            "Le sponsor demande un organigramme nominatif « validé par le cabinet » pour la semaine suivante. Vous :",
          options: [
            "A. Livrez les noms et visez : le junior valide la restructuration.",
            "B. Inventez un délai d'un mois « légal CSE » pour gagner du temps.",
            "C. Refusez de viser : livrable = hypothèse de rôles + alerte emplois / statuts, avis social et texte à vérifier (Légifrance). Le client tranche.",
            "D. Placez le CSE en A du RACI, cela vaut consultation.",
          ],
          correct: 2,
          explanation:
            "Le junior ne valide pas l'acte juridique, n'invente pas les délais, et ne confond pas RACI et consultation. Il documente une hypothèse et alerte.",
        }),
      ],
    }),
  ],
};
