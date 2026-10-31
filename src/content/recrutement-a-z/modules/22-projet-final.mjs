import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 22,
  title: "Projet final : un recrutement complet",
  description:
    "Vous menez de bout en bout le recrutement d'un coordinateur supply chain chez Atelier Nord Lumière, PME industrielle de 85 salariés à Lille.",
  lessons: [
    lesson({
      title: "Analyser le besoin et lister les informations manquantes",
      description:
        "Vous prenez connaissance du dossier Atelier Nord Lumière et vous identifiez ce qui manque avant tout process.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous analysez un brief gonflé, une fourchette sous marché et un calendrier irréaliste, puis vous produisez une liste d'informations manquantes priorisée, sans inventer les réponses."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Atelier Nord Lumière est une PME industrielle fictive de 85 salariés, basée à Lille, qui fabrique des luminaires techniques pour le tertiaire et l'industrie. L'entrepôt expédie vers la France et le Benelux. Le responsable logistique, Marc Vasseur, 48 ans d'ancienneté dans l'entreprise, veut un « coordinateur supply chain CDI, opérationnel dans quinze jours ». Il n'y a pas de fiche de poste à jour. Un magasinier interne, Camille Leroy, a fait savoir qu'il était intéressé. Un intérimaire tient une partie du planning depuis six semaines. La DRH (une personne, Nadia Khelifi) valide les contrats et la DPAE ; elle n'a pas encore vu le brief.\n\nVotre rôle : chargé de recrutement junior, en poste depuis quatre mois, vous reportez à Nadia. Vous n'êtes pas signataire des offres. Vous ne mentez ni au manager ni aux candidats. Vous ne publiez rien tant que le cadrage minimal n'est pas écrit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Lire le brief. Marquer : fait / hypothèse / manquant / interdit. Distinguer urgence opérationnelle (intérim) et CDI. Ne pas transformer le brief en annonce. Alerter Nadia sur le salaire et les critères protégés s'ils apparaissent."
        ),
        h("Dossier — brief reçu de Marc Vasseur (e-mail)"),
        code(`De : marc.vasseur@atelier-nord-lumiere.example
À : recrutement@atelier-nord-lumiere.example
Objet : Urgent — coordinateur supply

Nadia m'a dit de passer par toi. J'ai besoin de quelqu'un de costaud pour lundi dans quinze jours max.

On cherche un coordinateur supply chain, bac+5, 8 à 10 ans d'expérience, anglais courant (on exporte un peu), WMS expert, management d'équipe, Lean / six sigma, permis, mobile, jeune pour tenir le rythme des quais. Salaire 32-33 k€, on a déjà un baby-foot, ça motive.

Missions : le planning, les transporteurs qui nous pourrissent, le tableau, et idéalement négocier les tarifs transport. Horaires comme nous, ça commence tôt.

Camille le magasinier veut le poste, super motivé, mais je veux aussi voir du monde dehors pour comparer. Envoie-moi tous les CV, je saurai.

Si tu ne trouves pas, on prendra Camille. Merci de clôturer avant la revue de direction du 28.`),
        h("Données internes déjà connues (fiables)"),
        t(
          "Effectif : 85. Site unique Lille (entrepôt + atelier). Horaires logistique : 5 h 30 – 13 h 30. Outil : ERP maison + Excel ; un WMS « LégerWMS » en déploiement partiel (pas encore expert sur tout le site). Pas de management hiérarchique prévu sur ce poste (appuis magasiniers, pas d'équipe N-1 complète). Les tarifs transporteurs sont négociés par les achats, pas par le coordinateur. Export Benelux : e-mails en français, quelques documents en néerlandais/anglais gérés par le commercial. Dernier CDI logistique pourvu il y a 14 mois : 36 k€ (intitulé proche, pas une statistique de marché nationale — donnée interne uniquement). Fourchette demandée par Marc : 32-33 k€, non validée par Nadia. Intérimaire planning : coût élevé, contrat 1 mois renouvelable. Politique interne : publication 7 jours en interne. Nadia signe les offres. Télétravail logistique : 0 jour (contrainte quais), à ne pas sur-promettre."
        ),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable attendu (à rédiger, puis à comparer à la correction) :\n1) Synthèse en 12 lignes : ce que le poste semble être vraiment, vs ce que Marc a écrit.\n2) Liste d'informations manquantes, classées P1 (bloquant pour publier) / P2 (bloquant pour offrir) / P3 (confort).\n3) Trois risques (légal, process, marché) si vous publiez le brief tel quel.\n4) Une phrase d'alerte à Nadia sur le salaire et une sur les critères illicites.\n\nNe pas inventer le « salaire marché France ». Vous n'avez que la donnée interne 36 k€ et le brief 32-33 k€."
        ),
        h("Correction détaillée — grille critérée"),
        code(`GRILLE DE CORRECTION — LEÇON 1 (20 points)
Critère                                         0-1    2-3     4
A. Écart missions réelles / brief gonflé        ignore  partiel complet (planning, tableau, relances ; PAS achats transport ; PAS management d'équipe)
B. Diplôme et 8-10 ans challengés               non     un mot  argumentés via les missions
C. « Jeune » identifié comme illicite           non     oui     + L. 1132-1 cité sans roman
D. Infos manquantes P1 (fourchette RH, horaires exacts, WMS réel, qui décide, date réelle, confidentialité Camille)  <3 items  3-4  ≥5 justifiés
E. Salaire : écart interne 36 vs 32-33, sans statistique inventée  invente un marché  cite 36k  + alerte Nadia, pas de promesse
F. Intérim de transition vs CDI 15 jours        confondu  mentionné  plan séparé
G. Process alibi interne / « tous les CV »      ignoré   vu      recadré (politique 7 j, présélection)
H. Français professionnel, vouvoiement, pas de mensonge  non  presque  oui

P1 typiques : validation RH de la fourchette ; missions hors achats ; niveau WMS réel ; management oui/non ; horaires 5h30 ; date de prise de fonction vs intérim ; tests prévus (L. 1221-8) ; qui signe ; remplacement de qui ; Camille informé du process équitable.
P2 : références, habilitations, astreintes, binôme.
P3 : titre exact, place de parking, badge.

Risques si publication brute : annonce discriminatoire (« jeune ») ; allégation rémunération / nature (L. 5331-3) ; process interne alibi ; 15 jours irréalistes ; anglais courant non nécessaire.

Phrase Nadia salaire : « Marc vise 32-33 k€ ; le dernier CDI proche interne était à 36 k€ ; je ne publierai pas de chiffre non validé ni gonflé. »
Phrase illicite : « Je n'inscrirai pas « jeune » ni d'âge ; L. 1132-1. »

Barème indicatif : 16/20 = livrable professionnel. En dessous : relire le brief ligne à ligne.`),
        note(
          "QUALIFICATION : L. 1132-1 (jeune) ; L. 5331-3 (annonce future) ; politique interne 7 jours ; bonne pratique de cadrage. Pas de délai légal de recrutement inventé. RÉFÉRENCE : L1132-1, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Publier l'e-mail de Marc. Inventer un salaire marché national. Promettre quinze jours. Écarter Camille d'avance ou le promettre d'avance."
        ),
        h("Situations particulières"),
        t(
          "Revue du 28 : pression type S07, pas une cause d'offre bancale. Baby-foot : pas un élément de rémunération (L. 5331-3 si on s'en sert pour compenser un salaire sous-évalué de façon trompeuse)."
        ),
      ],
    }),
    lesson({
      title: "Questions au manager",
      description:
        "Vous préparez et simulez le brief avec Marc Vasseur, puis vous rédigez la restitution.",
      minutes: 26,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous posez des questions de cadrage, vous recadrez les illicites, vous obtenez des must-have réalistes sans humilier le manager."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Marc n'est pas un adversaire. Il a un entrepôt sous tension. Votre job est de traduire sa peur opérationnelle en critères observables. S'il répète « jeune », vous interrompez comme en entretien candidat, avec calme."
        ),
        h("Méthode opérationnelle"),
        t(
          "45 minutes. Ordre : contexte, journée type, must-have, argent, évaluation, Camille, intérim. Restitution écrite sous 24 h, à faire valider."
        ),
        h("Exemple professionnel — extraits de réponses de Marc (simulation)"),
        code(`Q. Que se passe-t-il si on n'a personne en CDI dans quinze jours ?
R. L'intérimaire tient le planning mais il part dès qu'il a une mission mieux payée. Les quais débordent deux matins par semaine.

Q. Management d'équipe ?
R. En vrai, Camille et deux magasiniers l'aideront. Pas de N-1 à évaluer. J'ai mis management pour faire sérieux.

Q. Négociation tarifs transport ?
R. Les achats font ça. Moi je veux surtout qu'on arrête d'apprendre les retards à 11 h.

Q. WMS expert, bac+5, 10 ans, anglais, six sigma ?
R. LégerWMS, on forme. Le bac+5 c'est pour avoir quelqu'un qui parle aux commerciaux. L'anglais, c'est rare. Six sigma, on n'en fait pas. 10 ans, je veux quelqu'un qui a déjà vu un quai.

Q. Jeune ?
R. Bon, pas jeune. Mais quelqu'un qui se lève. Les horaires c'est 5 h 30.

Q. Salaire 32-33 ?
R. Nadia verra. Je ne veux pas un profil à 42. Si c'est 36 comme l'autre, il faudra qu'elle dise oui.

Q. Camille ?
R. Motivé, connaît les références produits, jamais tenu le planning seul. Je ne lui ai pas promis le poste. Je veux comparer.

Q. Tests ?
R. Un petit cas planning, 20 minutes, pour tout le monde.

Q. Date revue du 28 ?
R. Je veux un point, pas forcément un contrat signé. Ne dis pas ça aux candidats.`),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable :\n1) Liste de 12 questions que VOUS auriez posées (dont au moins une sur le budget, une sur Camille, une sur les tests, une de recadrage « jeune »).\n2) Phrase orale de recadrage de « jeune ».\n3) Restitution d'une page à Marc et Nadia : missions, must-have, nice-to-have, non-critères, fourchette à valider, process, intérim.\n4) Ce que vous refusez encore de faire (publier 32-33 non validés, promettre le 28, envoyer tous les CV bruts)."
        ),
        h("Correction détaillée — grille critérée"),
        code(`GRILLE — LEÇON 2 (20 points)
A. 12 questions utiles, pas d'enquête sur la vie de Marc          /4
B. Recadrage « jeune » : interruption + L. 1132-1, ton respectueux /4
C. Must-have réalistes (planning, 5h30, incident, Excel/WMS base)  /4
D. Hors scope écrit (achats, management, six sigma, anglais courant, bac+5 obligatoire) /3
E. Camille : process équitable, pas de promesse, pas d'alibi       /3
F. Tests annoncés (L. 1221-8) + cas identique pour tous            /2

Restitution type (attendu) :
Missions : planning J/J+1, relances transporteurs, tableau 6h, coordination magasin/production.
Must-have : preuve de planning ou cas concluant ; horaires 5h30 ; communication brief.
Nice : LégerWMS, 3×8 déjà fait, tableau Excel.
Non-critères : âge, bac+5 obligatoire, anglais courant, six sigma, « jeune ».
Fourchette : à valider Nadia ; donnée interne 36 k€ ; 32-33 insuffisant à confirmer.
Process : interne 7 j, préqual, entretien, cas 20 min, shortlist 2-3, offre Nadia.
Intérim : transition si CDI > 15 j.
Refus : tous les CV bruts ; closer pour le 28 ; fourchette non validée dans l'annonce.`),
        note(
          "QUALIFICATION : L. 1132-1 ; L. 1221-8 ; politique interne ; bonne pratique. RÉFÉRENCE : L1132-1, L1221-8."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser « jeune » dans la restitution. Promettre Camille pour la paix. Valider 32-33 pour faire plaisir. Oublier le cas 20 min dans l'info candidat."
        ),
        h("Situations particulières"),
        t(
          "Marc dit « je saurai » : imposer la grille (S08). Revue du 28 : point d'avancement, pas signature."
        ),
      ],
    }),
    lesson({
      title: "Fiche de poste et critères",
      description:
        "Vous rédigez la fiche, le profil et la grille pondérée du coordinateur supply.",
      minutes: 28,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous livrez trois documents alignés, utilisables pour l'annonce, le scoring et le départage, sans critère protégé."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La fiche décrit l'emploi Atelier Nord Lumière. Le profil traduit. La grille pèse le planning plus fort que l'anglais, qui n'est plus un must-have."
        ),
        h("Méthode opérationnelle"),
        t(
          "Reprendre la restitution validée. Faire relire Marc (métier) et Nadia (contrat, salaire encore ouvert). Gel de publication tant que la fourchette n'est pas tranchée : vous pouvez rédiger l'annonce sans chiffre, mais pas un chiffre faux."
        ),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable : fiche de poste (missions, horaires 5 h 30, pas d'achats transport, pas de management hiérarchique), profil must/nice/non-critères, grille de critères avec poids et départage à notes égales (pas le domicile). Indiquer explicitement la voie interne Camille comme voie d'accès possible, pas comme attribution."
        ),
        h("Correction détaillée — documents attendus (extrait)"),
        code(`FICHE (minimum attendu)
Intitulé : Coordinateur / coordinatrice supply chain
Lieu : Lille, entrepôt Atelier Nord Lumière
CDI temps plein, 5 h 30 – 13 h 30
N+1 : Marc Vasseur, responsable logistique
Missions : planning expédition J/J+1 ; relances transporteurs et exceptions quais ; tableau de bord et brief 6 h ; coordination magasin / production.
Hors : négociation tarifaire transporteurs ; management évalué d'une équipe.
Outils : ERP, Excel, LégerWMS en déploiement (formation interne).
Télétravail : 0 jour (contrainte quais) — l'écrire pour ne pas sur-promettre.

PROFIL
Must : preuve de construction / ajustement d'un planning de flux ; relater un incident quais/transporteur ; acceptation des horaires ; oral de brief.
Nice : WMS, Excel tableau, expérience industrie, reconversion avec stage probant, connaissance interne produits (Camille).
Non-critères : âge, jeune, bac+5 obligatoire, anglais courant, six sigma, photo, résidence.

GRILLE (exemple conforme)
Planning 5 | Incident 4 | Outils 3 | Brief 3 | Horaires 3 | Motivation/compréhension 2
Total 80. Seuil entretien 48. Départage : cas planning, PAS le code postal.

GRILLE DE CORRECTION LEÇON 3 (20)
Documents complets (pas 8 lignes) /6
Alignement brief recadré (hors achats, hors management) /4
Horaires et télétravail honnêtes /3
Non-critères L. 1132-1 /3
Pondération planning > anglais (anglais absent des must) /2
Départage licite /2`),
        note(
          "QUALIFICATION : L. 1221-6, L. 1132-1, L. 1221-9. RÉFÉRENCE : L1221-6, L1132-1, L1221-9."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser bac+5 en must. Colonne feeling. Oublier 5 h 30. Mettre Camille en « poste réservé »."
        ),
        h("Situations particulières"),
        t(
          "Nadia n'a pas validé 32-33 : la fiche peut indiquer « fourchette RH en cours », pas un mensonge 36-40 pour attirer."
        ),
      ],
    }),
    lesson({
      title: "Annonce et stratégie de sourcing",
      description:
        "Vous rédigez l'annonce française exacte et un plan de canaux, y compris la mobilité interne.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous publiez une offre conforme et un sourcing utile (interne 7 jours, jobboard, approches WMS, pas de booléen illicite)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Nadia valide une fourchette 34-37 k€ après votre alerte (compromis : au-dessus de 32-33, proche du 36 interne, en dessous d'un profil 42 k€). L'annonce peut donc citer 34-37. Ce n'est pas encore une obligation légale française d'affichage (directive UE en transposition) : ici c'est une décision interne / bonne pratique. Mentir resterait interdit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Annonce FR. Process L. 1221-8 (préqual, entretien, cas 20 min). Interne 7 jours. Sourcing externe en parallèle après validation Nadia, sans process alibi. Requêtes sans prénoms ni native."
        ),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable : 1) annonce complète ; 2) variante courte ; 3) stratégie (interne, jobboard, 15 approches LinkedIn/sem, vivier si existant) ; 4) une requête booléenne conforme ; 5) message interne mobilité. Interdits à lister en bas de votre copie."
        ),
        h("Correction détaillée"),
        code(`ANNONCE — attendu minimal
CDI Coordinateur/coordinatrice supply chain, Lille, Atelier Nord Lumière (85 salariés, luminaires techniques).
5 h 30 – 13 h 30, entrepôt. 34-37 k€ brut annuel selon profil (validé).
Missions planning, relances, tableau, coordination magasin/production.
Pas de photo. Process : préqual 20 min, entretien, cas planning 20 min.
Pas : jeune, 15 postes, anglais only, salaire 42, second site, management d'équipe, achats transport.

REQUÊTE type
(planning OR expédition OR quais OR ordonnancement) AND (WMS OR ERP OR Excel) AND (Lille OR "Hauts-de-France")
Sans NOT prénoms, sans native, sans HEC only.

MOBILITÉ
Mail interne 7 jours, process identique, pas de promesse à Camille.

GRILLE LEÇON 4 (20)
Conformité L. 5331-2/3/4 /6
Fourchette vraie 34-37 /4
Process annoncé /3
Interne 7 j honnête /3
Booléen sans discrimination /2
Français professionnel /2`),
        note(
          "QUALIFICATION : L. 5331-2, L. 5331-3, L. 5331-4, L. 1221-8 ; UE-transparence-salariale (affichage = choix interne ici, pas « déjà obligatoire ») ; politique 7 jours. RÉFÉRENCE : L5331-2, L5331-3, L5331-4, L1221-8, UE-transparence-salariale."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Annonce de Marc. Oublier le cas 20 min. Booléen écoles. Publier avant les 7 jours internes si la politique l'impose — ici elle l'impose : respecter, tout en préparant les canaux."
        ),
        h("Situations particulières"),
        t(
          "Si Marc veut une cover story : refuser (S72). Ici le poste est réel et assumé."
        ),
      ],
    }),
    lesson({
      title: "Analyser six CV et shortlister",
      description:
        "Vous scorez six candidatures fictives, dont un hors sujet, un surqualifié, une reconversion et un profil pénurique.",
      minutes: 35,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous appliquez la grille CV, vous ignorez photos et âges, vous motivez chaque décision, vous proposez une shortlist de préqual."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Les six CV arrivent la même semaine. Marc veut « tous les CV ». Vous envoyez une analyse, pas un ZIP. Camille est interne : même grille, plus la connaissance produit en nice-to-have, pas en passe-droit."
        ),
        h("Les six CV (extraits — dossier fictif)"),
        code(`CV1 — Camille LEROY — interne Atelier Nord Lumière
Magasinier-cariste, 6 ans sur site. Références produits, inventaires, picking, parfois aide au planning Excel quand l'intérimaire est absent (10 à 15 jours cumulés). Pas de WMS nominatif hors LégerWMS « j'ai cliqué un peu ». Motivation écrite : « Je veux prendre le planning, je connais les pannes de quais. » Prétention : 34 k€. Horaires 5 h 30 déjà tenus. Photo sur le CV : à ignorer.

CV2 — Karim HADDAD — hors sujet
Business developer BTP, 7 ans, chasse de chantiers, LinkedIn « closer ». Un stage logistique de 2 mois en 2014. Lettre : « Je m'adapte à tout, j'ai le permis, j'habite Lille. » Prétention 40 k€. Aucun planning d'expédition.

CV3 — Sylvie MOREAU — surqualifiée
Ex-directrice supply d'un groupe industriel (1800 salariés), 18 ans, management de 40 personnes, achats transport, S&OP Europe, anglais quotidien. Prétention : 34-37 k€ « pour revenir sur le terrain et réduire les déplacements, projet personnel non médical ». Lettre claire sur le périmètre coordinateur. Âge visible par les dates longues : NE PAS s'en servir (S38).

CV4 — Julien PETIT — reconversion
Ancien logisticien des forces armées (ravitaillement, planning de convois), titre professionnel logistique obtenu il y a 8 mois, stage 3 mois en entrepôt textile (Excel, quais, pas de WMS). Lettre structurée. Prétention 33-35 k€. Disponible 1 mois.

CV5 — Inès BENALI — profil pénurique
5 ans coordinatrice WMS (Reflex) en 3×8, ETI agro, relances transporteurs, tableaux Power Query. Prétention 41 k€, autre piste en cours. Lettre : « Intéressée par l'industrie, pas en dessous de 40. » Compétences must-have très alignées. Hors fourchette.

CV6 — Thomas DUBOIS — match apparent, incohérences
CV : « Coordinateur planning 2019-2024, WMS expert, management 8 personnes ». LinkedIn (pro, pas Instagram) : intitulé magasinier jusqu'en 2022, puis 14 mois non datés, puis « coordinator » 2023-2024 chez un prestataire. Diplôme « Master logistique » ; pièce ultérieure = attestation 40 h (à creuser en préqual, S66). Prétention 36 k€. Photo, 29 ans écrit : ignorer âge et photo.`),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Pour chaque CV : décision (préqual / refus / attente), motif professionnel d'une phrase, 3 scores grille CV, un risque. Puis shortlist de préqual (qui, dans quel ordre, pourquoi pas les autres). Message à Marc : pas de ZIP, pas de filtre photo. Que faire d'Inès (41 k€) avant de la faire venir (S11) ?"
        ),
        h("Correction détaillée — grille critérée"),
        code(`DÉCISIONS ATTENDUES (tolérance : argument inverse solide, jamais un motif illicite)

CV1 Camille : PRÉQUAL. Preuve partielle de planning, horaires, produit. Écart : planning jamais tenu seul. Nice interne. Pas de promesse.

CV2 Karim : REFUS CV. Hors sujet commercial. Permis/Lille/« s'adapte » ne sont pas des must-have. Motif : absence de pilotage de planning de flux. Pas « nom » ou origine.

CV3 Sylvie : PRÉQUAL. Compétences largement au-dessus ; risque ennui / management d'un N+1 moins senior / motivation à tester — PAS l'âge. Salaire dans la fourchette : ne pas écarter pour « trop chère » si 34-37.

CV4 Julien : PRÉQUAL. Reconversion avec preuves militaires + stage. Cas 20 min décisif. Pas de pénalisation « pas de bac+5 ».

CV5 Inès : CONTACT TRANSPARENT SUR 34-37 avant entretien long. Si elle refuse le cadre, ne pas la faire voyager. Si elle explore, PRÉQUAL. Ne pas lui dire 41. Ne pas la recaler comme « trop gourmande » de façon morale.

CV6 Thomas : PRÉQUAL pour confronter les écarts (dates, diplôme, management). Pas de recale LinkedIn public ni de post Facebook (S65). Pas d'enquête privée.

SHORTLIST PRÉQUAL type : Camille, Julien, Sylvie, Inès (si cadre salarial ok), Thomas. Pas Karim.
Ordre : Inès seulement après transparence salaire ; Camille tôt (équité interne, pas VIP golf).

GRILLE LEÇON 5 (20)
Karim refusé pour le poste, pas pour la personne /3
Sylvie non écartée pour l'âge /4
Inès : transparence 34-37 /3
Thomas : confrontation, pas pilori /3
Camille : ni cadeau ni alibi /3
Shortlist argumentée, pas de photo/âge /4`),
        note(
          "QUALIFICATION : L. 1132-1 (âge, origine, apparence) ; L. 1221-6 ; L. 5331-3 (salaire Inès) ; bonne pratique interne. RÉFÉRENCE : L1132-1, L1221-6, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Envoyer les six CV à Marc « il saura ». Recaler Sylvie « trop âgée ». Promettre Camille. Mentir à Inès sur 41 k€. Recaler Thomas sans l'entendre."
        ),
        h("Situations particulières"),
        t(
          "Marc demande la photo de Sylvie : S42, refuser. Cooptation d'un neveu absente ici ; Camille n'est pas un neveu du DG, c'est un interne légitime."
        ),
      ],
    }),
    lesson({
      title: "Préqualification et guide d'entretien",
      description:
        "Vous rédigez les CR de préqual simulés et le guide d'entretien + cas planning.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous menez des préquals distinctes (interne, reconversion, surqualifiée, pénurique, incohérent) et vous figez un guide identique pour Marc."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Inès, informée de 34-37, accepte un échange « pour comprendre le poste » sans s'engager sous 40. Thomas reconnaît un intitulé « enjolivé » et une attestation 40 h présentée comme master : sujet loyauté. Sylvie explique un souhait de terrain. Camille décrit précisément 12 jours de planning. Julien structure un exemple militaire. Karim n'est pas appelé."
        ),
        h("Synthèse des préquals (simulation à utiliser)"),
        code(`Camille : horaires OK, 34 k€ OK, exemples picking solides, planning : 12 jours, Excel, a appelé 2 transporteurs avec Marc. Veut le poste. Risque : sous-exposition. Décision : entretien + cas.

Julien : horaires OK, 34-35 k€, exemple convoi (volume, aléas, décision). Stage textile : quais. WMS : non. Décision : entretien + cas.

Sylvie : horaires 5h30 acceptés explicitement, 36 k€, motivation : moins de leadership, plus de flux. Risque : périmètre. Décision : entretien + cas (S38, tester, pas l'âge).

Inès : 34-37 trop bas vs 41 et vs son autre piste. Reste ouverte si évolution 12 mois écrite — vous NE PROMETTEZ PAS d'avenant (S18). Décision : vous en parlez à Nadia ; entretien seulement si Nadia assume le cadre ou une exception. Pour la suite du projet pédagogique, Nadia refuse 41, accepte un entretien si Inès confirme 37 max. Inès décline l'entretien. REFUS / clôture honnête.

Thomas : reconnaît l'intitulé gonflé et le « master » = 40 h. Exemples quais réels 2023-2024. Management 8 personnes : faux. Prétention 36. Décision : Nadia/Marc : loyauté. Pour le projet, vous documentez et NE le convoquez PAS à l'entretien manager (écart de loyauté sur des éléments essentiels, S66), SANS humiliation publique.

Karim : déjà refusé, mail motif professionnel.`),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable : 1) CR préqual Camille / Julien / Sylvie (faits, scores, décision) ; 2) mail Inès (fourchette, pas d'avenant fantôme) ; 3) note RH Thomas (faits, pas de Facebook) ; 4) guide d'entretien 45-60 min + cas 20 min (données) + questions STAR identiques ; 5) consigne à Marc : pas de question grossesse, âge, photo."
        ),
        h("Correction détaillée"),
        code(`MAIL INÈS (attendu)
Fourchette 34-37 validée, pas de 41, pas d'avenant promis. Merci, vivier si elle accepte, opposition possible. Pas de « vous n'êtes pas assez passionnée ».

NOTE THOMAS
Faits : écart intitulé / LinkedIn pro ; diplôme présenté vs attestation 40 h ; management 8 personnes reconnu inexact. Décision : ne pas poursuivre, motif loyauté du parcours (L. 1221-6 bonne foi). Pas de publication. Pas de menace de plainte junior.

GUIDE : ouverture légale, STAR planning/incident/tableau, cas 12 commandes / 3 quais / 2 retards, questions du candidat, délai vrai. Interruption « jeune/enfants ».

CAS : donner les mêmes données aux trois. Annoncé (L. 1221-8).

GRILLE LEÇON 6 (20)
Prequals distinctes et factuelles /4
Inès sans mensonge salarial /4
Thomas : faits + discrétion /3
Guide identique + cas annoncé /5
Consigne anti-dérapage Marc /4`),
        note(
          "QUALIFICATION : L. 1221-6, L. 1221-8, L. 1132-1, L. 5331-3 ; CNIL (note Thomas interne). RÉFÉRENCE : L1221-6, L1221-8, L1132-1, L5331-3, CNIL-guide."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Promettre 40 k€ à Inès « on fera passer ». Convoquer Thomas pour « piéger ». Questions différentes à Camille (copain interne) et à Sylvie."
        ),
        h("Situations particulières"),
        t(
          "Marc veut voir Thomas « pour le coincer » : refuser l'entretien-piège (L. 1221-9)."
        ),
      ],
    }),
    lesson({
      title: "Évaluer, comparer, présenter la shortlist et recommander",
      description:
        "Vous notez trois entretiens simulés, vous départagez sans critère illicite, vous recommandez.",
      minutes: 32,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous remplissez les grilles, vous tenez tête à un « je ne la sens pas » sur Sylvie, vous livrez une shortlist et une recommandation argumentée."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Marc a vu Camille, Julien et Sylvie. Il aime Camille (« on le connaît »). Il dit de Sylvie : « trop cadre, trop senior, elle va s'ennuyer, et puis l'équipe est jeune. » « Équipe jeune » + « senior » = alerte âge (L. 1132-1). Julien a réussi le cas. Camille a partiellement réussi. Sylvie a réussi le cas trop vite et a parlé S&OP : risque de périmètre, pas d'âge."
        ),
        h("Réponses simulées (preuves pour vos notes)"),
        code(`CAMILLE — total indicatif 52/80
Planning 3/4 : 12 jours réels, dépend de Marc. Incident 3/4 : deux relances avec Marc. Outils 2/4 : Excel, LégerWMS clics. Brief 3/4 : connaît les pannes. Horaires 4/4. Motivation 4/4.
Cas : ordre des quais correct, a oublié un retard transporteur.

JULIEN — 61/80
Planning 4 : exemple convoi transposé, cas : a traité les 2 retards. Incident 4. Outils 2 : pas de WMS, Excel clair. Brief 3 : structuré, vocabulaire militaire à traduire. Horaires 4. Motivation 3 : reconversion assumée, questions sur LégerWMS.
Cas : bon, 18 min.

SYLVIE — 64/80
Planning 4 : trop riche, recentrée. Incident 4. Outils 3. Brief 4. Horaires 4 (a confirmé 5h30). Motivation 2 : dit « je déléguerai le tableau » — écart périmètre coordinateur.
Cas : excellent, a proposé de renégocier un tarif transporteur (HORS POSTE) : signal de dérive vers son ancien job.

MARC : « On prend Camille, Sylvie je ne la sens pas, trop senior. Julien, pourquoi pas, mais Camille d'abord. »`),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable : 1) trois grilles ; 2) tableau comparatif ; 3) shortlist 1 page ; 4) recommandation (qui, pourquoi, plan de formation, ce que vous refusez comme motif) ; 5) phrase de recadrage à Marc sur « trop senior / équipe jeune » ; 6) si notes proches Julien/Sylvie : départage professionnel (périmètre vs WMS à former)."
        ),
        h("Correction détaillée — grille critérée"),
        code(`RECOMMANDATION TYPE (une voie conforme, pas la seule si argumentée)

Recommander Julien pour le CDI coordinateur : meilleures preuves de planning autonome + cas, fourchette, risque formation WMS acceptable (LégerWMS interne).
Camille : second, plan de montée (planning accompagné 3 mois) OU mobilité plus tard — pas un cadeau, pas un recale humiliant.
Sylvie : écart de périmètre (« je déléguerai le tableau », réflexe achats transport) documenté. NE PAS écrire « trop vieille / équipe jeune ». Si Marc insiste sur l'âge : alerte Nadia L. 1132-1.

Alternative conforme : recommander Sylvie SI elle recentre et si Marc accepte un N-1 expert — alors figer le périmètre par écrit. Sans cela, le risque est réel (pas l'âge).

Inacceptable : Camille « pour la paix » malgré cas incomplet ET sans plan ; écarter Sylvie pour l'âge ; départager au domicile.

GRILLE LEÇON 7 (20)
Notes liées aux preuves /4
Refus du motif âge /5
Recommandation + formation /4
Shortlist honnête vis-à-vis de Camille /3
Phrase de recadrage manager /4`),
        note(
          "QUALIFICATION : L. 1132-1 ; L. 1221-9 ; politique interne mobilité ; bonne pratique de recommandation écrite. RÉFÉRENCE : L1132-1, L1221-9."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Obéir à « je ne la sens pas ». 20/20 Camille. Oublier le hors poste de Sylvie (vrai écart). Tricher les notes pour le 28."
        ),
        h("Situations particulières"),
        t(
          "Deux notes : Julien 61 / Sylvie 64 mais écart périmètre. Le total ne suffit pas : lire les preuves (leçon critères)."
        ),
      ],
    }),
    lesson({
      title: "Négociation, désistement, messages et relais d'intégration",
      description:
        "Vous formulez l'offre, gérez un désistement possible, écrivez les refus et passez le relais J1.",
      minutes: 30,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous préparez une offre Nadia (pas une promesse), un plan B en cas de désistement, des refus honnêtes et une checklist J-7 réelle — y compris la DPAE."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Scénario du projet : Nadia valide une offre à Julien, 36 k€, modèle OFFRE, délai de réponse vendredi. Julien a une autre piste. Mardi, il demande 38 k€ et deux jours de télétravail (politique : 0 jour quais). Jeudi soir, il se désiste : counter-offer de son stage transformé en CDD mieux payé. Plan B : Camille, avec plan de formation, si Marc et Nadia confirment. Marc veut « faire honte » à Julien et garder Sylvie au chaud en lui disant qu'elle est première."
        ),
        h("Méthode opérationnelle"),
        t(
          "Pas d'alignement 38 ni télétravail inventé. Pas de vengeance. Sylvie : vérité (on ne poursuit pas / ou attente honnête si Camille n'est pas décidé). DPAE : Nadia, avant J1, fenêtre 8 jours (SP-F23107). Annonce à retirer une fois pourvu."
        ),
        h("Mise en pratique — consigne et livrable"),
        t(
          "Livrable :\n1) Projet d'offre Julien (éléments, vocabulaire OFFRE, signataire Nadia, délai).\n2) Réponse à la négo 38 k€ + télétravail.\n3) Mail après désistement (sobre) + ce que vous refusez d'écrire.\n4) Refus / suite Camille et Sylvie (deux textes différents, vrais).\n5) Si Camille accepté : checklist finalisation + préboarding 5 h 30 + alerte si LégerWMS/droits non ouverts.\n6) Phrase à Marc qui veut « faire honte »."
        ),
        h("Correction détaillée — grille critérée"),
        code(`1. OFFRE Julien : CDI, Lille, 36 k€, 5h30, 0 jour TT, essai selon Nadia, valable jusqu'à vendredi, signataire Nadia, pas « nous promettons ».

2. NÉGO : 38 hors fourchette → Nadia. TT 2 jours = non, politique quais, ne pas promettre « on verra ». Pas de menace. Pas d'avenant magique.

3. DÉSISTEMENT : accusé de réception, regret professionnel, pas de remboursement inventé, pas de LinkedIn punitif (S26). Plan B immédiat.

4. SYLVIE : si process clos, refus factuel (périmètre / autre profil retenu) + feedback oral possible. PAS « vous êtes première » pendant l'essai de Camille. CAMILLE : offre séparée, plan de formation planning 90 jours, même honnêteté de périmètre.

5. J-7 Camille : heure 5h30, accueil Marc, badge, DPAE Nadia avant J1 (SP-F23107), droits Excel/LégerWMS, tuteur planning (Marc ou binôme). Pas de laptop fictif. Refus Karim déjà envoyé ; Thomas clôturé ; Inès déjà informée.

6. À MARC : « Nous n'envoyons pas de message humiliant. Priorité : pourvoir le planning. »

GRILLE LEÇON 8 (20)
Offre vs promesse /4
Négo sans mensonge /3
Désistement sobre + plan B /4
Messages Camille/Sylvie non mensongers /4
DPAE + préboarding réel /3
Refus de la vengeance /2`),
        note(
          "QUALIFICATION : SP-F39588 (offre) ; SP-F23107 (DPAE) ; L. 5331-3 (avantages, emploi) ; bonne pratique ; politique TT 0 jour. RÉFÉRENCE : SP-F39588, SP-F23107, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "SMS « tu as le job ». Accorder le TT pour closer. Double promesse Sylvie/Camille. DPAE après J1. Mail de honte à Julien."
        ),
        h("Situations particulières"),
        t(
          "Si Camille refuse aussi : reprendre Inès seulement avec une fourchette vraie (toujours pas 41 si non validé) ou prolonger l'intérim — décision Nadia, pas cover story."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Décisions sur le cas Atelier Nord Lumière",
      description:
        "Dix questions de décision sur ce recrutement. Seuil : 75 %.",
      passing_score: 75,
      minutes: 16,
      questions: [
        q({
          question:
            "Le brief de Marc demande un profil « jeune », bac+5, 10 ans, 32-33 k€, opérationnel sous quinze jours. Premier geste ?",
          options: [
            "A. Publier le brief tel quel pour tenir la revue du 28.",
            "B. Recadrer les critères, lister les manquants, alerter Nadia sur le salaire et retirer « jeune » (L. 1132-1).",
            "C. Promettre le poste à Camille pour sécuriser.",
            "D. Indiquer 42 k€ dans l'annonce pour attirer, on recadrera.",
          ],
          correct: 1,
          explanation:
            "Leçon 1. Pas de publication brute, pas de promesse interne, pas de salaire trompeur (L. 5331-3). « Jeune » est illicite.",
        }),
        q({
          question:
            "Nadia valide 34-37 k€. L'affichage dans l'annonce est :",
          options: [
            "A. Interdit en France.",
            "B. Une décision interne / bonne pratique ici ; ce n'est pas (encore) à affirmer comme obligation française consolidée ; le chiffre doit être vrai.",
            "C. Obligatoire depuis la directive, on peut l'affirmer sans réserve.",
            "D. Facultatif donc on peut écrire 34-37 tout en visant 32.",
          ],
          correct: 1,
          explanation:
            "UE-transparence-salariale + L. 5331-3. Fourchette validée et vraie. Pas de discours juridique faux.",
        }),
        q({
          question: "Karim Haddad (commercial, stage logistique 2014). Décision ?",
          options: [
            "A. Préqual « on ne sait jamais », il habite Lille.",
            "B. Refus CV : absence de pilotage de planning de flux, motif professionnel.",
            "C. Refus parce que le nom « ne passera pas aux quais ».",
            "D. Entretien prioritaire, Marc l'a croisé au golf — ici : il n'est pas interne, c'est hors sujet.",
          ],
          correct: 1,
          explanation:
            "Hors sujet. Le nom est un critère protégé. Le golf n'est pas dans ce dossier ; même s'il l'était, la grille primerait (S39).",
        }),
        q({
          question:
            "Sylvie Moreau est surqualifiée. Marc dit « trop senior, l'équipe est jeune ». Vous :",
          options: [
            "A. L'écartez pour l'âge et la pyramide.",
            "B. Documentez un écart de périmètre s'il existe, et refusez le motif d'âge (L. 1132-1).",
            "C. La convoquez en entretien diversité de façade.",
            "D. La placez première pour compenser.",
          ],
          correct: 1,
          explanation:
            "Leçon 7. L'âge est interdit. Le périmètre (« je déléguerai », réflexe achats) est un vrai sujet. Pas de process alibi.",
        }),
        q({
          question:
            "Inès Benali demande 41 k€. Fourchette 34-37. Conduite avant un entretien long ?",
          options: [
            "A. La faire venir en taisant la fourchette, « elle baissera ».",
            "B. Indiquer 34-37 honnêtement ; ne poursuivre que si elle explore ce cadre ou si Nadia ouvre le budget ; pas d'avenant magique.",
            "C. Lui écrire que le poste est à 41 k€.",
            "D. La recaler : une prétention haute est un défaut de caractère.",
          ],
          correct: 1,
          explanation:
            "S11 / leçon 5-6. Transparence. L. 5331-3. Pas de jugement moral sur la prétention.",
        }),
        q({
          question:
            "Thomas a présenté un master et un management de 8 personnes inexacts. Conduite ?",
          options: [
            "A. Poster l'écart sur un groupe RH.",
            "B. Documenter les faits, décider sur la loyauté du parcours, sans humiliation publique ni enquête privée hors sujet.",
            "C. Corriger son CV pour lui et le convoquer.",
            "D. Le convoquer pour un entretien-piège « afin de le coincer ».",
          ],
          correct: 1,
          explanation:
            "S65-S66, leçon 6. Loyauté. Pas de pilori. Pas de complicité documentaire. Pas de méthode-piège (L. 1221-9).",
        }),
        q({
          question:
            "Julien est recommandé. Marc veut close avant le 28 avec un mail « nous te promettons le poste ». Vous :",
          options: [
            "A. Envoyez le mail pour tenir la revue.",
            "B. Passez par une OFFRE Nadia, vocabulaire maîtrisé (SP-F39588), la revue n'est pas une signature.",
            "C. Un SMS depuis votre mobile perso.",
            "D. Promettez aussi Sylvie au cas où.",
          ],
          correct: 1,
          explanation:
            "Leçon 8, S07, S63. Signataire RH. Pas de double promesse. Pas de mot « promettons » par générosité.",
        }),
        q({
          question:
            "Julien se désiste jeudi soir. Marc veut un mail de honte et garder Sylvie en lui disant qu'elle est n°1. Vous :",
          options: [
            "A. Envoyez le mail de honte et le mensonge à Sylvie.",
            "B. Accusé sobre, plan B Camille si validé, vérité à Sylvie (refus ou attente datée), pas de vengeance.",
            "C. Exigez un remboursement des entretiens.",
            "D. Laissez l'annonce en ligne en disant à chacun qu'il est en finale.",
          ],
          correct: 1,
          explanation:
            "S25, S26, S67, leçon 8. Un désistement se traite par un accusé sobre et un plan B, pas par la honte ni une créance inventée. Mentir à Sylvie sur un n°1 ou laisser l'annonce comme réserve fictive est déloyal (L. 5331-3).",
        }),
        q({
          question:
            "Camille est finalement embauché. La DPAE :",
          options: [
            "A. Se fait la semaine suivante, ce n'est qu'un papier.",
            "B. Est une obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents ; vous alertez Nadia (SP-F23107).",
            "C. Est de votre signature junior, avec un identifiant emprunté si besoin.",
            "D. Peut être antidatée si Camille commence lundi.",
          ],
          correct: 1,
          explanation:
            "SP-F23107 / Urssaf : DPAE avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédents. Obligation de l'employeur ; vous alertez Nadia. Pas d'identifiant emprunté, pas d'antidatage, pas de report à la semaine suivante.",
        }),
        q({
          question:
            "Quelle recommandation est conforme si les scores sont Julien 61, Sylvie 64 avec dérive de périmètre, Camille 52 ?",
          options: [
            "A. Camille d'office, paix sociale.",
            "B. Julien au regard des preuves de planning autonome et du cas ; Camille plan B formé ; Sylvie écart de périmètre documenté, pas d'âge.",
            "C. Sylvie d'office malgré « je déléguerai le tableau », pour le prestige.",
            "D. Pile ou face Julien/Sylvie, et le plus proche de l'entrepôt.",
          ],
          correct: 1,
          explanation:
            "Leçon 7. Preuves > paix sociale. Résidence et pile ou face exclus (L. 1132-1, L. 1221-9). Alternative Sylvie seulement si périmètre recentré par écrit.",
        }),
      ],
    }),
  ],
};
