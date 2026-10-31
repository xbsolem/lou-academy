import { lesson, h, t, note, code, quizLesson, q } from "../lib.mjs";

export default {
  position: 21,
  title: "Modèles de documents RH",
  description:
    "Vous disposez de modèles complets pour cadrer, sourcer, évaluer, refuser, offrir et intégrer, avec consignes d'usage et interdits (discrimination, données excessives).",
  lessons: [
    lesson({
      title: "Fiche de recueil du besoin et questionnaire manager",
      description:
        "Deux documents pour sortir du brief oral et obtenir un cadrage écrit.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "À l'issue de cette leçon, vous savez faire remplir une fiche de recueil et conduire un brief manager avec un questionnaire fermé, sans collecter d'informations discriminatoires."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le besoin n'existe pas tant qu'il n'est pas écrit. Un brief oral produit des critères changeants, des annonces inexactes et des évaluations incomparables. La fiche de recueil est le document de travail du recruteur ; le questionnaire structure l'entretien de brief. Ni l'un ni l'autre n'est un fichier de données candidats : ce sont des documents internes sur un emploi.\n\nL. 5331-3 interdit les allégations trompeuses dans l'offre qui naîtra de ce brief. L. 1221-6 et L. 1132-1 interdisent de transformer le brief en liste de critères protégés (âge, sexe, apparence, résidence, etc.)."
        ),
        h("Méthode opérationnelle"),
        t(
          "1) Envoyer la fiche 24 h avant le brief. 2) Conduire le brief avec le questionnaire (45 minutes). 3) Restituer une synthèse écrite au manager sous 24 h. 4) Faire valider must-have, fourchette, calendrier. 5) Archiver dans le dossier poste, pas dans une CVthèque."
        ),
        h("Exemple professionnel"),
        t(
          "PME industrielle, 80 salariés, Lille. Le responsable logistique veut « quelqu'un qui tienne le planning ». Sans fiche, l'annonce devient un catalogue. Avec la fiche, on obtient : missions, 3×8, WMS, fourchette, intérim de transition possible."
        ),
        h("Document 1 — Fiche de recueil du besoin"),
        t(
          "Usage : à remplir par le recruteur pendant / après le brief, puis à faire signer (ou valider par e-mail) par le manager et, selon politique interne, par RH. Ne pas y mettre de photo type du « profil idéal », ni d'âge cible, ni de sexe."
        ),
        code(`FICHE DE RECUEIL DU BESOIN — RECRUTEMENT
Réf. poste : ________    Date : ________    Recruteur : ________
Manager demandeur : ________    Service : ________    Site : ________
N+1 du poste : ________    RH référent : ________

1. CONTEXTE
Création / Remplacement (qui, date de départ, préavis) / CDD / Intérim / Autre : ________
Le titulaire est-il informé ?  Oui / Non / Sans objet
Confidentialité particulière :  Non / Oui (préciser le canal autorisé, sans cover story) :
Raison du besoin (2 à 5 lignes, faits) :

2. CONTRAT ET ORGANISATION
Type de contrat visé : CDI / CDD (motif, durée) / Intérim (durée) / Alternance / Autre
Temps de travail : ________    Horaires / 3×8 / astreintes / déplacements :
Lieu de travail principal : ________    Télétravail selon politique interne :
Date de prise de fonction visée (réaliste) : ________
N+1, taille d'équipe, interfaces (production, transport, qualité, client) :

3. MISSIONS (5 à 8 missions, verbes d'action, livrables)
1.
2.
3.
4.
5.
Critères de succès à 3 / 6 / 12 mois :

4. RÉMUNÉRATION ET AVANTAGES (exactitude : L. 5331-3)
Fourchette fixe validée RH : ________ à ________ € brut annuel
Variable / 13e mois / tickets / mutuelle / véhicule / autre (uniquement s'ils existent) :
Hors fourchette : le recruteur n'invente rien et n'annonce rien.

5. CRITÈRES PROFESSIONNELS
Must-have (3 à 5, observables, liés à l'emploi — L. 1221-6) :
Nice-to-have (3 à 5) :
Non-critères (ce que le manager a dit et que l'on écarte : âge, sexe, photo, résidence, etc.) :

6. PROCESS
Canaux autorisés : interne / jobboard / école / cabinet / cooptation / autre
Nombre d'entretiens, interlocuteurs, tests (à annoncer au candidat — L. 1221-8) :
Qui décide / qui signe l'écrit d'embauche :
Budget cabinet / annonces :

7. VALIDATIONS
Manager : nom, date, « lu et approuvé »
RH : fourchette, contrat, avantages
Points ouverts (infos manquantes) :`),
        h("Document 2 — Questionnaire de brief manager"),
        t(
          "Usage : guide d'entretien de cadrage. Le recruteur pose les questions, ne laisse pas le manager dicter une annonce discriminatoire. Les questions en italique interne sont des relances, pas un interrogatoire du candidat."
        ),
        code(`QUESTIONNAIRE BRIEF MANAGER (45 min)

A. POURQUOI CE POSTE MAINTENANT ?
- Que se passe-t-il si le poste n'est pas pourvu dans 4 / 8 / 12 semaines ?
- S'agit-il d'un pic (intérim / CDD) ou d'un besoin structurel (CDI) ?
- Y a-t-il un candidat interne identifié ? Politique de publication interne ?

B. UNE JOURNÉE TYPE
- Décrivez une journée chargée et une journée normale.
- Quels outils (WMS, ERP, Excel) ? Quelle autonomie de décision ?
- Avec qui la personne se fâche-t-elle le plus souvent (transporteurs, production) ?

C. MUST-HAVE VERSUS SOUHAITS
- Si vous ne pouviez retenir que trois exigences, lesquelles ? Pourquoi ?
- Qu'est-ce qui a fait échouer les deux derniers titulaires (faits, pas de personnes) ?
- Quel diplôme est réellement nécessaire ? Que vaut une reconversion ?

D. ARGENT ET CALENDRIER
- Fourchette validée par qui ? Variable réel vs théorique ?
- Date d'arrivée vs délai de marché : que proposons-nous en transition ?
- Qui valide une exception salariale ?

E. ÉVALUATION
- Quelles mises en situation accepteriez-vous (planning, relance, tableau) ?
- Comment départagerons-nous deux notes égales (critère professionnel) ?
- Quelles questions vous vous interdisez (grossesse, âge, origine, santé, syndicat) ?

INTERDITS DANS CE DOCUMENT ET DANS LE BRIEF
- Âge cible, « jeune », pyramide des âges comme filtre.
- Sexe, apparence, photo, prénom, « tête de l'emploi ».
- Lieu de résidence comme critère d'écartement.
- Nationalité, langue maternelle, accent.
- Situation de famille, santé, handicap comme motif de recale automatique.
- Cover story d'annonce (faux second site, 15 postes, salaire gonflé).`),
        note(
          "QUALIFICATION : bonne pratique (cadrage écrit) ; politique interne (qui valide le budget) ; obligation L. 5331-3 (annonce future exacte), L. 1132-1 et L. 1221-6 (pas de critères protégés dans le brief). RÉFÉRENCE : L1132-1, L1221-6, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Laisser le manager dicter « 25-30 ans, native, bonne tête ». Recueillir le brief sur un coin de table sans restitution. Archiver la fiche dans un Drive personnel. Inventer la fourchette pour « débloquer »."
        ),
        h("Situations particulières"),
        t(
          "Manager absent : pas d'annonce. Remplacement confidentiel : canal discret, pas de cover story (module 20, S72). Brief gonflé : challenger les must-have (S02)."
        ),
        h("Mise en pratique"),
        t(
          "Remplissez la fiche pour un coordinateur supply CDI en PME, avec trois must-have et deux infos encore manquantes. Ne mettez aucun critère d'âge."
        ),
        h("Correction détaillée"),
        t(
          "Une fiche correcte a des missions mesurables (fiabilité du planning, relances transporteurs, tableau quotidien), une fourchette RH, un calendrier honnête, et une ligne « non-critères ». Une fiche incorrecte recopie « bac+5, 10 ans, jeune, mobile, native »."
        ),
      ],
    }),
    lesson({
      title: "Fiche de poste et profil candidat",
      description:
        "Deux documents distincts : l'emploi d'un côté, le portrait professionnel de l'autre.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous séparez la fiche de poste (l'emploi) du profil (ce que l'on cherche), pour éviter de coller un avatar discriminatoire sur une liste de missions."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La fiche de poste décrit l'organisation, les missions, les responsabilités, les conditions. Elle sert aussi après l'embauche. Le profil candidat traduit les missions en aptitudes observables. Mélanger les deux produit des annonces du type « jeune dynamique pour missions de planning ». L. 1221-6 : seules les informations en lien avec l'emploi. Un diplôme n'est un must-have que s'il est nécessaire."
        ),
        h("Méthode opérationnelle"),
        t(
          "Rédiger la fiche de poste avec le manager. En déduire le profil (must / nice / non-critères). Faire valider les deux. L'annonce naît de la fiche, pas du profil marketing."
        ),
        h("Exemple professionnel"),
        t(
          "ETI agroalimentaire : la fiche dit « relayer les retards quais 5 h-13 h ». Le profil dit « a déjà tenu un planning d'expédition », pas « homme, 30 ans, permis, habitant à 10 km »."
        ),
        h("Document 1 — Fiche de poste"),
        code(`FICHE DE POSTE

Intitulé : Coordinateur / Coordinatrice supply chain
Service : Logistique    Site : Lille    Statut : ________
N+1 : Responsable logistique    N-1 : aucun / magasinier(s) en appui
Contrat : CDI    Temps : plein    Horaires : 5 h 30 – 13 h 30 + astreinte planning selon usage du site

RAISON D'ÊTRE
Fiabiliser le flux d'expédition quotidien (planning, quais, transporteurs, exceptions) pour tenir le taux de service convenu avec les clients internes (production, commercial).

MISSIONS
1. Construire et ajuster le planning d'expédition J / J+1 à partir de l'ERP et des contraintes quais.
2. Relancer les transporteurs en cas d'écart, tracer les incidents, alerter le N+1 au-delà du seuil défini.
3. Tenir le tableau de bord quotidien (retards, ruptures, taux de service) et l'expliquer en 10 minutes au brief 6 h.
4. Coordonner magasin / production sur les priorités de picking.
5. Contribuer aux plans d'actions qualité logistique (sinistres, écarts de stock liés à l'expédition).
Hors missions : pas de management hiérarchique d'équipe complète ; pas de négociation tarifaire transporteurs (achats).

MOYENS ET CONDITIONS
Outils : ERP, WMS, Excel. Équipements de protection. Déplacements exceptionnels vers un entrepôt secondaire.
Télétravail : selon politique interne du site (à ne pas sur-promettre).

RATTACHEMENT, INTERFACES, REMPLACEMENT
Interfaces : production, magasin, qualité, commercial, transporteurs.
Remplacement : N+1 / binôme à nommer.

SÉCURITÉ, HABILITATIONS LIÉES AU POSTE (si nécessaires, pas un prétexte santé)
Habilitation chariot : oui / non    Travail en entrepôt : oui

NE PAS INSCRIRE
Âge, sexe, apparence, nationalité, « native », situation de famille, état de santé, photo type.`),
        h("Document 2 — Profil candidat (must / nice)"),
        code(`PROFIL CANDIDAT — lié à la fiche de poste ci-dessus

MUST-HAVE (observables en CV, préqual, entretien, mise en situation)
- A déjà construit ou ajusté un planning d'expédition / transport / production sur un outil (ERP, WMS ou tableur avancé).
- Sait relater un incident transporteur ou quai avec faits, délai, action.
- Disponible pour les horaires du poste (à vérifier en préqual, sans question familiale — L. 1221-6).
- Français professionnel oral/écrit suffisant pour le brief de 6 h (évaluation par mise en situation, pas par l'accent ni l'origine — L. 1132-1).

NICE-TO-HAVE
- WMS nommé (l'entreprise forme si les bases planning existent).
- Expérience 3×8 ou horaires décalés.
- Tableau de bord (Excel, Power Query) déjà produit.
- Reconversion logistique avec stage / alternance probants.

VOIES D'ACCÈS ACCEPTÉES
Interne magasin / ordonnancement ; externe industrie ; reconversion forces armées logistique ; intérim long sur quais.

NON-CRITÈRES (rappel manager)
Âge, photo, sexe, lieu de résidence comme filtre, diplôme bac+5 obligatoire, « native French », réseau local comme prétexte d'origine.

PREUVES ATTENDUES
Exemples STAR, extrait de tableau (anonymisé), mise en situation planning 20 minutes (annoncée — L. 1221-8).`),
        note(
          "QUALIFICATION : bonne pratique documentaire ; L. 1221-6 (lien avec l'emploi) ; L. 1132-1 (non-critères) ; L. 1221-8 (tests annoncés). RÉFÉRENCE : L1221-6, L1132-1, L1221-8."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Copier un profil LinkedIn « 10 ans + anglais courant + management ». Fusionner fiche et avatar. Oublier les horaires réels. Exiger un master sans lien."
        ),
        h("Situations particulières"),
        t(
          "Surqualification (S38) : le profil parle de motivation et de périmètre, pas d'âge. Handicap (S43) : le profil ne dit pas « valide, apte, sans aménagement »."
        ),
        h("Mise en pratique"),
        t(
          "Transformez trois missions de la fiche en trois must-have observables. Écrivez un non-critère que le manager avait glissé."
        ),
        h("Correction détaillée"),
        t(
          "Mission « tableau quotidien » → must-have « a déjà produit un suivi d'indicateurs et l'a expliqué à un N+1 ». Non-critère : « habiter à moins de 20 minutes » (résidence, L. 1132-1)."
        ),
      ],
    }),
    lesson({
      title: "Grille de critères et plan de recrutement",
      description:
        "Pondérer ce qui compte et séquencer le process avant de publier.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous savez pondérer des critères professionnels et publier un plan de recrutement (étapes, acteurs, délais de marché honnêtes, pas de délai légal inventé)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Sans pondération, deux notes égales se départagent sur un critère illicite (S31). Sans plan, le manager improvise des tours supplémentaires. L. 1221-9 : méthodes pertinentes. L. 1221-8 : le candidat est informé des méthodes. Le plan indique les tests, pas un « surprise stress » (S60)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Grille validée avant la première CV. Plan validé avant l'annonce. Toute étape ajoutée en cours = information des candidats encore en lice."
        ),
        h("Exemple professionnel"),
        t(
          "Startup 40 personnes : le plan tient sur une page (préqual 20 min, un entretien manager, une mise en situation, une offre RH). L'ETI ajoute un panel : alors le plan le dit dès le début."
        ),
        h("Document 1 — Grille de critères pondérés"),
        code(`GRILLE DE CRITÈRES — Coordinateur supply — réf. POSTE-____
Validée manager / RH le : ________
Barème : 1 insuffisant / 2 partiel / 3 acquis / 4 solide  |  note = score × poids

Critère                          Poids   Preuve attendue                         Interdit d'y coller
Pilotage planning / flux           5     Exemple + cas 20 min                    Âge, « maturité »
Incident transporteur / quai       4     STAR + traçabilité                      « Caractère »
Outils (ERP/WMS/Excel)             3     Démo ou description précise             Diplôme comme proxy
Communication brief 6 h            3     Oral structuré                          Accent, origine
Horaires du poste                  3     Disponibilité déclarée                  Enfants, conjoint
Motivation / compréhension poste   2     Questions du candidat                   « Faim », look

Total max : 80 (5+4+3+3+3+2 = 20 × 4)
Seuil d'entretien manager : 48/80 après préqual (ajustable, écrit)
Départage à notes égales : cas planning supplémentaire, PAS le domicile (L. 1132-1)

Ne pas ajouter de ligne : présentation physique, photo, prénom, école exclusive, syndicat, santé.`),
        h("Document 2 — Plan de recrutement"),
        code(`PLAN DE RECRUTEMENT — réf. POSTE-____
Ouverture : ________    Pourvoi visé : ________ (hypothèse de marché, pas une promesse)
Recruteur : ________    Manager : ________    RH : ________

Étape                    Qui              Délai indicatif     Livrable                 Info candidat (L. 1221-8)
0. Cadrage               Recruteur+mgr    J0-J2               Fiche + grille + fourchette
1. Publication interne   RH               selon politique     Annonce interne
2. Annonce externe       Recruteur        J2                  Annonce FR exacte
3. Sourcing              Recruteur        J2-J12              Canaux + booléens
4. Analyse CV            Recruteur        continu             Grille CV + motifs
5. Préqual 20-25 min     Recruteur        sous 5 j du CV      Script + CR
6. Entretien manager     Manager+recr.    créneau tenu        Guide STAR
7. Mise en situation     Recruteur        annoncée            Cas planning 20 min
8. Shortlist             Recruteur        1 page              2 ou 3 profils
9. Décision              Manager+RH       réunion 30 min      Grille complète
10. Offre écrite         RH (signature)   modèle offre        PAS le mot promettre
11. Refus / vivier       Recruteur        48 h après décision Messages types
12. Préboarding          Recruteur+mgr    J-7                 Checklist
13. DPAE                 Employeur/RH     avant J1 / essai    SP-F23107 (8 jours max avant)

Transition opérationnelle si délai trop court : intérim / interne — décision RH, pas cover story.

Rôles
Recruteur : process, conformité, relation candidat, recommandation.
Manager : expertise métier, décision, accueil.
RH : contrat, rémunération, DPAE, écrits d'embauche.

Ce plan n'invente aucun délai légal de recrutement. Les seuls délais cités sont opérationnels ou, pour la DPAE, ceux de SP-F23107.`),
        note(
          "QUALIFICATION : bonne pratique ; L. 1221-8 et L. 1221-9 ; DPAE = obligation employeur SP-F23107 ; non-discrimination L. 1132-1. RÉFÉRENCE : L1221-8, L1221-9, L1132-1, SP-F23107."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Pondérer « feeling » à 10. Ajouter un test surprise. Promettre une embauche à J+10. Oublier la publication interne."
        ),
        h("Situations particulières"),
        t(
          "Volume (S76) : grille courte mais identique. Cabinet parallèle (S77) : le plan dit qui possède le dossier."
        ),
        h("Mise en pratique"),
        t(
          "Calculez la note d'un candidat 3-3-2-3-3-2 sur la grille. Passe-t-il le seuil 48 ?"
        ),
        h("Correction détaillée"),
        t(
          "(3×5)+(3×4)+(2×3)+(3×3)+(3×3)+(2×2) = 15+12+6+9+9+4 = 55. Oui, au-dessus de 48. Un 1 sur le planning (poids 5) ferait chuter fortement : c'est le must-have."
        ),
      ],
    }),
    lesson({
      title: "Modèle d'annonce d'emploi",
      description:
        "Une annonce complète en français, exacte, non discriminatoire, plus une variante courte.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous rédigez une offre conforme : français, pas d'allégation, pas de critère illicite, rémunération non mensongère."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "L. 5331-4 : français si le travail s'effectue en France. L. 5331-3 : pas d'allégation fausse (existence, nature, rémunération, lieu). L. 5331-2 : pas de mention de sexe / situation de famille (exceptions très limitées, hors sujet ici). Affichage du salaire : pas (encore) obligation interne française consolidée (directive UE en transposition) ; fourchette vraie = bonne pratique. Mentir sur le salaire = interdit."
        ),
        h("Méthode opérationnelle"),
        t(
          "Partir de la fiche de poste. Relire avec la liste d'interdits. Faire valider RH la rémunération. Publier. Retirer dès que pourvu ou gelé (S67)."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet qui republie en anglais only un poste Lille : à corriger (S80). Jobboard qui ajoute « jeune dynamique » : à refuser."
        ),
        h("Document 1 — Annonce complète"),
        code(`OFFRE D'EMPLOI (version longue — site carrière / Pôle emploi)

Intitulé : Coordinateur / coordinatrice supply chain — CDI — Lille
Employeur : [Raison sociale] — [activité, taille, site]
Lieu de travail : Lille (préciser entrepôt / usine) — télétravail : selon politique interne (1 jour si tel est le cas, sinon ne pas l'écrire)
Contrat : CDI, temps plein
Horaires : 5 h 30 – 13 h 30, rythme lié aux expéditions (à indiquer honnêtement)
Rémunération : fourchette 34 000 – 37 000 € brut annuel selon profil (uniquement si validée ; sinon ne pas inventer). Variable : uniquement s'il existe, sans « jusqu'à 80 k€ » fictif.
Prise de fonction visée : [mois], sous réserve de process (pas « immédiat / 15 postes »).

Missions
- Construire le planning d'expédition J / J+1 et gérer les exceptions quais / transporteurs.
- Tenir le tableau de bord quotidien et le brief opérationnel du matin.
- Coordonner magasin et production sur les priorités.

Profil recherché (lien avec l'emploi)
- Expérience de planning flux (industrie, entrepôt, transport) ou reconversion avec mise en situation concluante.
- Aisance tableur / ERP ou WMS (formation interne possible sur l'outil nommé).
- Communication claire à l'oral pour un brief court.

Nous ne demandons pas de photo. Les candidatures sont étudiées au regard des aptitudes professionnelles (L. 1221-6).

Process (L. 1221-8)
Analyse de CV, préqualification téléphonique (20 min), entretien avec le manager, mise en situation planning (20 min), prise de références si accord.

Candidater : [mail / ATS]  |  Informations données personnelles : [lien politique / mentions CNIL]
Contact recrutement : [nom, mail] — pas de compte perso.

INTERDITS DANS L'ANNONCE
jeune, 25-30 ans, homme/femme (hors exceptions légales), native, bonne présentation, photo obligatoire, 15 postes fictifs, salaire gonflé, faux second site, « Ninja », anglais only pour un travail en France.`),
        h("Document 2 — Variante courte jobboard"),
        code(`CDI — Coordinateur supply chain — Lille
Planning d'expédition, quais, transporteurs, tableau quotidien. Horaires 5h30-13h30.
CDI, 34-37 k€ brut (si validé). Process : préqual, entretien, cas 20 min.
Sans photo. Candidatures : rh@...
Pas de « urgent 15 postes ». Pas de critère d'âge.`),
        note(
          "QUALIFICATION : obligations L. 5331-2, L. 5331-3, L. 5331-4 ; L. 1221-8 ; bonne pratique fourchette ; UE-transparence-salariale (pas encore obligation FR consolidée). RÉFÉRENCE : L5331-2, L5331-3, L5331-4, L1221-8, UE-transparence-salariale."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Copier l'annonce d'un concurrent. Laisser le jobboard ajouter « H/F jeune ». Oublier de retirer l'offre une fois pourvue."
        ),
        h("Situations particulières"),
        t(
          "Confidentiel : pas de fausse ouverture (S72). Gel : information vraie (S61)."
        ),
        h("Mise en pratique"),
        t(
          "Barrez cinq formulations illicites ou trompeuses dans : « Cherche jeune supply ninja native, 15 postes immédiats, jusqu'à 80 k€, photo exigée, anglais only. »"
        ),
        h("Correction détaillée"),
        t(
          "À barrer : jeune (âge), ninja (nature floue / trompeuse), native (origine / langue), 15 postes immédiats (existence), 80 k€ (rémunération), photo, anglais only (L. 5331-4). Remplacer par l'annonce-modèle."
        ),
      ],
    }),
    lesson({
      title: "Stratégie de sourcing et requêtes booléennes",
      description:
        "Un plan de canaux et des requêtes sur compétences, sans filtres illicites.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous planifiez les canaux et écrivez des requêtes booléennes professionnelles, sans prénoms, sans âge, sans native."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le sourcing est une recherche d'aptitudes, pas une chasse à l'origine. Une requête NOT Mohamed est une discrimination (S83). LinkedIn stalking hors sujet est illicite (S53). L. 1221-8 : si vous utilisez un scoring, information."
        ),
        h("Méthode opérationnelle"),
        t(
          "Choisir 3 canaux maximum au départ. Écrire 2 requêtes (large / stricte). Mesurer le rendement. Pas de compte personnel. Pas de harcèlement de relance (S29)."
        ),
        h("Exemple professionnel"),
        t(
          "Industrie Lille : interne magasin + jobboard + approches WMS régionales. Pas besoin de 12 canaux."
        ),
        h("Document 1 — Stratégie de sourcing"),
        code(`STRATÉGIE SOURCING — POSTE-____
Cible : profil must-have (planning, horaires, outils)
Marché : tension estimée (qualitative, pas de statistique inventée) : ________
Budget canaux : ________

Canal              Objectif                  Volume visé     Message type     Risque à éviter
Mobilité interne   7 jours min si politique  tous éligibles  mail interne     process alibi
Jobboard A         candidatures actives      annonce exacte  annonce modèle   critères auto du board
Approche LinkedIn  profils WMS / planning    20 approches/sem  modèle honnête  stalking, templates menteurs
Cooptation         primes selon politique    suivi           même grille      neveu maquillé
Agence / cabinet   si tension                contrat clair   dédup            double présentation
Vivier             CV < reco CNIL 2 ans      recontact loyal opposition, pas « postulé hier »

Pilotage hebdo : nb approches, réponses, préqual, ratio femmes/hommes du flux (alerte biais, pas de quota bricolé illicite), délais.

Arrêt d'un canal : rendement nul ou biais manifeste (ex. 100 % d'un seul sexe sur un métier mixte) → revoir requête et annonce, alerter RH.`),
        h("Document 2 — Requêtes booléennes"),
        code(`REQUÊTES (compétences, pas les personnes)

A. LARGE
("coordinateur" OR coordinatrice OR "chargé d'expédition" OR ordonnancement OR "planning transport")
AND (WMS OR ERP OR "gestion de stock" OR quais)
AND (Lille OR "Hauts-de-France" OR Roubaix OR Tourcoing OR Douai)

B. STRICTE
(WMS OR "warehouse management" OR Reflex OR SAP)
AND (planning OR "taux de service" OR expédition)
AND (Excel OR "tableau de bord")
AND (logistique OR supply)

C. RECONVERSION
(logistique OR ravitaillement OR "supply chain")
AND (reconversion OR formation OR titre OR "poec" OR militaire)
AND (planning OR stock OR transport)

INTERDITS DANS LA REQUÊTE
AND (jeune OR "25-30" OR HEC OR "native French")
NOT (Mohamed OR Fatima OR "plus de 50")
filtre âge / sexe / photo de la plateforme utilisé pour écarter

D. MESSAGE ASSOCIÉ : voir leçon messages — jamais « la direction a retenu votre profil » si c'est faux.`),
        note(
          "QUALIFICATION : bonne pratique sourcing ; obligation L. 1132-1 si la requête discrimine ; L. 1221-6 / L. 1221-9 ; CNIL (vivier, loyauté). RÉFÉRENCE : L1132-1, L1221-6, L1221-9, CNIL-guide."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Requêtes d'écoles. NOT prénoms. 200 InMails copiés. Vivier sans information."
        ),
        h("Situations particulières"),
        t(
          "IA de ranking (S54) : pas dans la stratégie tant que L. 1221-8 n'est pas tenu. Confidentiel : approches nominatives, pas d'annonce menteuse."
        ),
        h("Mise en pratique"),
        t(
          "Corrigez : (jeune OR HEC) NOT Fatima AND native AND Lille."
        ),
        h("Correction détaillée"),
        t(
          "Supprimer jeune, HEC exclusif, NOT Fatima, native. Garder Lille + compétences planning/WMS. L'école peut apparaître en OR faible, jamais en condition exclusive sans lien nécessaire."
        ),
      ],
    }),
    lesson({
      title: "Messages d'approche, de relance et de mobilité interne",
      description:
        "Trois messages complets, honnêtes, sans harcèlement ni fausse shortlist.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous écrivez une approche, une relance unique, et un message interne, sans usurpation d'identité ni mensonge."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le taux de réponse ne blanchit pas un template mensonger (S88). Un refus d'approche arrête le flux (S29). Les données du message : minimisation (pas de « j'ai vu vos photos de mariage »)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Personnaliser 2 lignes métier. Une relance à J+4. Stop si non. Copie dans l'ATS, pas sur un Gmail perso."
        ),
        h("Exemple professionnel"),
        t(
          "Approche d'une coordinatrice WMS à Douai : on cite le WMS et les horaires, pas « aventure humaine extraordinaire »."
        ),
        h("Documents — trois messages"),
        code(`1. APPROCHE À FROID (LinkedIn / e-mail)
Objet : Coordinateur supply — CDI Lille — échange de 15 min ?

Bonjour [Prénom],
Je suis [Nom], chargé(e) de recrutement chez [Entreprise], site de Lille.
Je vous contacte au sujet d'un CDI de coordination supply (planning d'expédition, quais, transporteurs, horaires 5 h 30 – 13 h 30). Votre expérience [WMS / planning / entrepôt] a un lien avec ce besoin — ce n'est pas une shortlist direction déjà faite.

Fourchette indicative si validée : 34-37 k€ brut. Process : préqual, entretien manager, cas planning 20 min.
Si le cadre ne convient pas, un non suffit, je n'insisterai pas.
Bien cordialement,
[Nom] [tél pro] [lien mentions données]

NE PAS ÉCRIRE : « la direction a adoré votre profil » ; « 15 postes urgents » ; « j'ai vu votre Instagram ».


2. RELANCE (une seule, J+3 à J+5)
Objet : Re : Coordinateur supply — Lille
Bonjour [Prénom],
Je me permets une unique relance sur le CDI coordinateur supply à Lille (planning, 5 h 30). Si vous préférez ne pas échanger, je clos le contact.
Cordialement, [Nom]

Pas d'appel trois fois par jour. Pas de compte personnel. Pas de cadeau.


3. MOBILITÉ INTERNE
Objet : Poste ouvert — Coordinateur supply — candidatures internes
Bonjour,
Un CDI de coordinateur supply est ouvert sur le site de Lille. Les salariés intéressés peuvent candidater jusqu'au [date politique interne] auprès de [RH], avec un CV à jour.
Le process est le même que pour l'externe (grille, entretiens). Nous ne promettons pas l'attribution.
Les informations sont traitées pour ce recrutement [mentions].
[RH / Recrutement]

Pas de « c'est déjà promis à X ». Pas de photo exigée.`),
        note(
          "QUALIFICATION : bonne pratique ; L. 5331-3 si l'emploi est déformé ; CNIL loyauté / minimisation ; L. 1221-8 (process dit). RÉFÉRENCE : L5331-3, CNIL-guide, L1221-8."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Template « vous êtes l'élu ». Relance quotidienne. Message interne qui brûle un remplacement confidentiel."
        ),
        h("Situations particulières"),
        t(
          "Confidentiel : pas de mail large. Candidat « pas intéressé » : stop. Vivier 18 mois : dire l'origine du CV (S57)."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez en 8 lignes une approche qui citait à tort « entretien assuré avec le DG »."
        ),
        h("Correction détaillée"),
        t(
          "On retire la garantie d'entretien DG. On garde poste, lien de profil, horaires, fourchette vraie, process réel, possibilité de dire non."
        ),
      ],
    }),
    lesson({
      title: "Grille d'analyse de CV et script de préqualification",
      description:
        "Un scoring CV et un script téléphonique de 20 minutes, sans questions illicites.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous analysez un CV avec une grille et conduisez une préqual structurée, y compris disponibilité et prétention, sans enquête familiale."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le CV est une déclaration, pas une preuve. Les trous se questionnent (S65), ils ne se jugent pas à l'âge. La photo s'ignore (S42). L. 1221-6 : questions liées à l'emploi. Le candidat répond de bonne foi ; vous aussi."
        ),
        h("Méthode opérationnelle"),
        t(
          "Grille CV avant l'appel. Script visible. CR dans l'ATS le jour même. Pas d'enregistrement secret (S59)."
        ),
        h("Exemple professionnel"),
        t(
          "Cabinet : la préqual vend le poste. Interne industrie : elle vérifie horaires, WMS, prétention, et vend aussi, mais sans spin."
        ),
        h("Document 1 — Grille d'analyse de CV"),
        code(`GRILLE ANALYSE CV — POSTE-____    Candidat : ________    Date : ________
Source : spontané / annonce / approche / interne / cabinet / cooptation

Item                         0 absent  1 flou  2 présent  3 probant    Commentaire factuel
Planning / flux
Outils (WMS, ERP, Excel)
Horaires / industrie / quais
Durée et continuité des postes (faits, pas « trop vieux »)
Lien missions / intitulés
Incohérences dates / lieux (à questionner, pas à pilorier)
Prérequis habilitation si must-have

Décision : convier préqual / mettre en attente / refuser / hors sujet
Motif professionnel (une phrase, aucun critère protégé)
Photo : ignorée    Âge / adresse : non utilisés comme filtre
Données excessives présentes sur le CV (santé, enfants, syndicat) : non reprises, non copiées dans le CRM.`),
        h("Document 2 — Script de préqualification (20-25 min)"),
        code(`SCRIPT PRÉQUAL TÉLÉPHONIQUE
Avant : vérifier que la personne peut parler. Rappeler : poste, durée, enregistrement NON, usage des données, suite possible.

1. CADRE (2 min)
« Je suis [Nom], recrutement [Entreprise]. Il s'agit d'un CDI coordinateur supply à Lille, horaires 5 h 30 – 13 h 30, fourchette [si validée]. L'échange dure 20 minutes. Vous êtes d'accord pour continuer ? »

2. PARCOURS LIÉ AU POSTE (6 min)
« Décrivez-moi un planning que vous avez tenu : volume, outil, qui décidait. »
« Un incident quais ou transporteur : fait, action, résultat. »
Reconversion : « Quelle preuve concrète (stage, outil, volume) ? »

3. CONDITIONS DU POSTE (4 min) — L. 1221-6
« Le poste commence à 5 h 30 sur site. Cette organisation vous convient-elle ? »
PAS : enfants, conjoint, garde, grossesse, santé, trajet comme enquête.
Habilitation chariot si must-have : « L'avez-vous, à jour ? » Pas de dossier médical.

4. OUTILS (3 min)
« Quel WMS / ERP / tableur ? Que saviez-vous faire seul(e) ? »

5. MOTIVATION ET QUESTIONS (3 min)
« Pourquoi ce poste plutôt qu'un autre ? » Laisser 2 questions.

6. PRÉTENTION ET PROCESS (3 min)
« Notre fourchette validée est [X-Y]. Souhaitez-vous poursuivre dans ce cadre ? »
Si refus de chiffre : donner la fourchette, ne pas écarter pour docilité (S19).
« Process : entretien manager, cas 20 min annoncé, références si vous êtes d'accord. »
Disponibilité / préavis (fait professionnel). Autre offre : écouter, ne pas demander de brûler un pont (S23).

7. CLÔTURE
« Merci. Retour sous [délai vrai]. Vos données servent à ce recrutement [et vivier si politique, avec opposition]. »
CR le jour même : faits, scores, décision, aucun commentaire d'apparence.

QUESTIONS INTERDITES (ne jamais les poser)
Âge, origines, enfants, projets familiaux, santé, handicap détail, syndicat, religion, opinions, crédit, photo, « vous habitez trop loin ».`),
        note(
          "QUALIFICATION : L. 1221-6, L. 1132-1, L. 1221-8 ; CNIL (finalité, minimisation) ; bonne pratique de CR factuel. RÉFÉRENCE : L1221-6, L1132-1, L1221-8, CNIL-guide."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Lire le CV à voix haute. Poser « vous avez des enfants pour le 5 h 30 ? ». Recaler sur la photo. Promettre l'entretien manager."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui refuse une info professionnelle (S85) : expliquer le lien, puis documenter. Incohérence CV (S65) : confronter calmement."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez trois questions de remplacement à « Vous habitez loin, ça va être dur avec les enfants ? »"
        ),
        h("Correction détaillée"),
        t(
          "« Les horaires sont 5 h 30 sur site, cinq jours. Cette organisation vous convient-elle ? » « Avez-vous déjà tenu des horaires décalés, dans quel contexte ? » « Un retard de transport, comment l'avez-vous géré sur un planning ? » Aucune question sur la famille."
        ),
      ],
    }),
    lesson({
      title: "Guide d'entretien et questions STAR",
      description:
        "Un guide d'entretien complet et une banque STAR alignée sur les critères.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous préparez un entretien structuré, à questions identiques sur les must-have, avec relances STAR, sans dérapage."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "STAR : Situation, Tâche, Action, Résultat. L. 1221-9 : pertinence. L. 1221-8 : méthodes informées. Si le manager dérape, vous interrompez (S41, S48). La mise en situation est annoncée."
        ),
        h("Méthode opérationnelle"),
        t(
          "Envoyer le guide la veille au manager. Répartir les questions. Grille ouverte pendant l'entretien. Debrief immédiat."
        ),
        h("Exemple professionnel"),
        t(
          "Panel de six personnes sans guide : chacun pose sa question illicite. Avec guide : 45 minutes, trois critères, un cas."
        ),
        h("Document 1 — Guide d'entretien"),
        code(`GUIDE D'ENTRETIEN — Coordinateur supply — 45 à 60 min
Candidat : ________    Date : ________    Présents : ________ (rôles)
Rappel ouverture (recruteur, 2 min) :
« Merci d'être venu. Poste CDI, Lille, horaires 5h30, fourchette [X-Y]. Déroulé : parcours, trois situations, cas planning 20 min déjà annoncé, vos questions. Pas d'enregistrement. Questions limitées aux aptitudes (L. 1221-6). »

Déroulé
0-5 min   Accueil, cadre, confidentialité
5-15 min  Parcours lié aux missions (pas biographie familiale)
15-35 min STAR sur planning, incident, tableau
35-50 min Cas planning (si prévu)
50-55 min Questions du candidat — réponses vraies (climat, avantages : S14, S99)
55-60 min Suite de process, délai réel, pas « vous êtes le seul »

Rôle recruteur : temps, légalité, notes. Rôle manager : métier. Interruption si question illicite : « Cette question n'est pas autorisée, revenons aux missions. »

Après : grilles individuelles avant le debrief (S37). Pas de chat « OK ».`),
        h("Document 2 — Banque de questions STAR"),
        code(`BANQUE STAR (mêmes questions à tous sur les must-have)

PLANNING (poids 5)
S : « Décrivez une journée où le planning d'expédition a basculé. »
T : « Quelle était votre responsabilité exacte ? »
A : « Qu'avez-vous fait, dans quel ordre, avec qui, sur quel outil ? »
R : « Quel résultat (heure de départ, taux de service, ce qui a échoué) ? »
Relances : volume, décision autonome vs N+1, ce que vous feriez autrement.

INCIDENT TRANSPORTEUR / QUAI (poids 4)
S : « Un transporteur ne se présente pas, ou un quai saturé. Un cas réel. »
T/A/R : idem.
Relances : traçabilité, ton avec le partenaire, seuil d'alerte.

TABLEAU DE BORD (poids 3)
« Montrez (ou décrivez) un indicateur que vous teniez. Qui le lisait ? Quelle décision ça a changé ? »

HORAIRES (poids 3) — pas de famille
« Avez-vous déjà travaillé en horaires décalés ? Comment organisiez-vous la passation avec l'équipe d'après-midi ? »

COMMUNICATION BRIEF
« En 3 minutes, expliquez-moi comme à un chef d'atelier pourquoi une ligne va partir en retard. »

CAS (annoncé)
Données : 12 commandes, 3 quais, 2 retards transporteurs. « Construisez l'ordre du matin et ce que vous dites à 6 h. »

QUESTIONS À NE JAMAIS POSER
projets d'enfants, âge, origine, syndicat, religion, santé, crédit, « vous habitez où exactement pour filtrer », « vous êtes marié ».`),
        note(
          "QUALIFICATION : L. 1221-6, L. 1221-8, L. 1221-9, L. 1132-1 ; bonne pratique STAR. RÉFÉRENCE : L1221-6, L1221-8, L1221-9, L1132-1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Questions différentes selon le feeling. Laisser le manager enchaîner sur la famille. Cas surprise. Promettre le poste en clôture."
        ),
        h("Situations particulières"),
        t(
          "Candidat qui enregistre (S59) : politique interne, pas de secret manager. Retard (S90) : même règle pour tous."
        ),
        h("Mise en pratique"),
        t(
          "Écrivez les relances STAR pour un candidat qui répond « je gère le stress, je suis un fighter » sans exemple."
        ),
        h("Correction détaillée"),
        t(
          "« Donnez un exemple daté. Quel était le volume ? Qu'avez-vous fait vous, pas l'équipe ? Quel chiffre à la fin ? Si vous n'avez pas d'exemple, nous évaluerons le cas pratique, pas le slogan. »"
        ),
      ],
    }),
    lesson({
      title: "Grille d'évaluation, tableau comparatif et shortlist",
      description:
        "Trois documents pour passer de l'entretien à une recommandation écrite.",
      minutes: 22,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous notez après preuves, comparez à critères constants, et présentez une shortlist sans retirer une personne pour l'âge."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "La shortlist est une aide à la décision, pas un filtre COMEX (S40). Deux notes égales : départage prévu (S31). Candidat interne : même grille (S34)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Notes individuelles → tableau → recommandation 1 page → réunion 30 min. Le recruteur recommande, le manager décide, RH valide le cadre."
        ),
        h("Exemple professionnel"),
        t(
          "PME : shortlist de 2, une page. ETI : 3, avec risques d'intégration. Jamais 12 CV « pour sentir »."
        ),
        h("Document 1 — Grille d'évaluation post-entretien"),
        code(`GRILLE ÉVALUATION — [Nom] — [date] — évaluateurs : ________
Remplir SEUL avant le debrief. 1-4 × poids (voir grille critères).

Critère                Poids  Score  Preuve (citation / fait)           Pas de preuve = pas de 4
Planning                 5
Incident                 4
Outils                   3
Brief oral               3
Horaires (déclaration)   3
Motivation poste         2
Total / 80 : ____    Zones d'écart : ____    Formation nécessaire : ____

Alerte légale (si une remarque illicite a été dite, la tracer à part pour RH, ne pas la coder comme note)
Recommandation de l'évaluateur : poursuivre / refuser / incomplet
Signature :`),
        h("Document 2 — Tableau comparatif"),
        code(`TABLEAU COMPARATIF — POSTE-____    Date : ________
Candidat        Planning /5  Incident /4  Outils /3  Oral /3  Horaires /3  Motiv /2  Total  Risque intégration (pro)  Décision
A interne
B externe
C reconversion
D surqualifié

Règles
- Même pondération.
- Pas de colonne âge, adresse, photo, prétention comme jugement de caractère.
- Prétention : ligne séparée informative vs fourchette, pas un score de docilité.
- Départage : cas supplémentaire, pas le domicile.`),
        h("Document 3 — Présentation shortlist manager"),
        code(`SHORTLIST — Coordinateur supply — [date] — recruteur : ________
Process : n CV, n préqual, n entretiens. Fourchette : [X-Y].

Candidat 1 — [Nom] — total __/80
Preuves fortes : …
Écarts : …
Conditions (préavis, prétention dans / hors fourchette) :
Risque : (professionnel, pas « trop âgée »)

Candidat 2 — …
Candidat 3 — …

Recommandation du recruteur (une personne ou ex aequo + départage proposé) :
Ce que je ne recommande pas : écarter [Nom] pour l'âge / le sexe / le nom / le handicap.
Décision attendue du manager le : ________
Écrit d'embauche : modèle OFFRE validé RH, pas une promesse (SP-F39588).
Refus des autres : messages sous 48 h, honnêtes.`),
        note(
          "QUALIFICATION : L. 1221-9, L. 1132-1 ; politique interne de décision ; SP-F39588 pour la suite. RÉFÉRENCE : L1221-9, L1132-1, SP-F39588."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Moyenne avec des 10 par défaut. Enlever la femme de 54 ans du pack COMEX. Colonne « feeling »."
        ),
        h("Situations particulières"),
        t(
          "Neveu du DG (S73) : ligne conflit d'intérêts, notes réelles. Aucun parfait (S33) : recommander le 70 % + plan de formation."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez la recommandation si A=55, B=55, A meilleur WMS, B meilleur oral, manager qui veut le plus proche."
        ),
        h("Correction détaillée"),
        t(
          "Ex aequo. Départage : cas planning. Interdit : résidence. Recommandation conditionnelle au résultat du cas, pas au code postal."
        ),
      ],
    }),
    lesson({
      title: "Compte rendu, convocation, confirmation et suivi",
      description:
        "Quatre écrits de process : CR factuel et messages de rendez-vous.",
      minutes: 18,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous produisez un CR utilisable et des messages de convocation clairs, avec le process annoncé (L. 1221-8)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le CR n'est pas un roman ni un dossier de santé. Il est communicable en droit d'accès : écrivez comme si le candidat pouvait le lire après filtrage RH. Pas de « trop vieux » (S27, S51)."
        ),
        h("Méthode opérationnelle"),
        t(
          "CR le jour même. Convocation avec date, lieu, interlocuteurs, durée, cas s'il y a lieu, accessibilité. Relance de suivi si le manager dépasse le délai promis (S21)."
        ),
        h("Exemple professionnel"),
        t(
          "Convocation visio : lien, règles, pas de test surprise. Présentiel : adresse, badge, contact de retard."
        ),
        h("Documents"),
        code(`1. COMPTE RENDU D'ENTRETIEN
Poste / date / présents / candidat
Faits sur chaque critère (citations courtes)
Scores de l'évaluateur
Points à vérifier (référence, habilitation) — pas la santé
Incidents de process (question illicite interrompue) : pour RH, pas dans le motif de refus
Décision provisoire
Pièces : grilles. Pas de capture Instagram.


2. CONVOCATION
Objet : Entretien — Coordinateur supply — [date]
Bonjour [Prénom],
Nous vous confirmons un entretien le [date] à [heure] au [adresse / lien visio], durée [45-60 min].
Interlocuteurs : [noms, fonctions].
Déroulé : échanges sur vos expériences de planning, puis mise en situation de 20 minutes (déjà indiquée). Vous pouvez signaler un besoin d'accessibilité à [mail] sans transmettre de dossier médical.
Documents : [pièce d'identité à l'accueil si politique, pas de photo de CV].
Merci de confirmer. En cas d'empêchement, [tél].
[Mentions données]
Cordialement,


3. CONFIRMATION (après accord oral de créneau)
Bonjour [Prénom],
Bien reçu : nous nous voyons le [date heure lieu]. Prévoir [badge / 10 min d'avance]. À mardi.
[Nom]


4. SUIVI CANDIDAT (délai non tenu)
Bonjour [Prénom],
Je vous avais indiqué un retour au [date]. La décision n'est pas rendue. Nouveau point au [date vraie]. Merci de votre patience ; vous pouvez me dire si votre calendrier a changé.
Pas de « vous êtes le favori ». Pas de silence.`),
        note(
          "QUALIFICATION : L. 1221-8 ; CNIL (exactitude, minimisation, accessibilité du droit) ; L. 1132-1 (contenu du CR) ; bonne pratique d'accessibilité sans donnée santé. RÉFÉRENCE : L1221-8, CNIL-guide, L1132-1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "CR de feeling. Convocation sans mention du cas. Ghosting après « cinq jours »."
        ),
        h("Situations particulières"),
        t(
          "Accessibilité (S89) : accorder, ne pas recaler. Mauvais destinataire (S58) : incident."
        ),
        h("Mise en pratique"),
        t(
          "Réécrivez un CR qui dit : « Bon feeling, un peu vieux, femme posée, habite loin. »"
        ),
        h("Correction détaillée"),
        t(
          "Remplacer par des faits planning/incident/outils/scores. Supprimer âge, sexe comme jugement, résidence. Si le manager a dit « vieux », le noter en alerte RH, pas en motif."
        ),
      ],
    }),
    lesson({
      title: "Refus à trois stades et mise en attente transparente",
      description:
        "Quatre messages : refus CV, refus préqual, refus finaliste, attente honnête.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous clôturez sans ghosting, sans motif discriminatoire, sans file d'attente mensongère."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Le refus n'est pas un réquisitoire. Le motif, s'il est donné, est professionnel. Une demande d'accès ≠ coller le CRM illicite (S27). Garder trois yes en poche (S25) est déloyal. Vivier : information et opposition (CNIL, reco 2 ans)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Refus CV : sous 10 jours si possible. Préqual : sous 5 jours. Finaliste : appel + mail, 48 h après décision. Attente : date de fin et vérité du process."
        ),
        h("Exemple professionnel"),
        t(
          "Finaliste après trois tours : un appel de 10 minutes + mail. Un mail froid de trois lignes après 4 semaines de silence est trop peu."
        ),
        h("Documents — refus et attente"),
        code(`1. REFUS APRÈS CV
Objet : Votre candidature — Coordinateur supply
Bonjour [Prénom],
Nous avons bien étudié votre candidature. Nous ne donnons pas suite : le parcours présenté est trop éloigné du pilotage de planning d'expédition requis.
Vos données : [durée / vivier si oui, opposition, droits]. Merci de votre intérêt.
Cordialement,
Pas de « trop junior » comme code d'âge. Pas de silence.


2. REFUS APRÈS PRÉQUAL
Bonjour [Prénom],
Merci pour l'échange du [date]. Nous ne poursuivons pas : l'expérience d'incidents quais / transporteurs n'a pas été illustrée au niveau requis pour ce poste.
[Feedback d'une phrase, factuel]. Données : [mentions].
Cordialement,


3. REFUS APRÈS ENTRETIEN / FINALISTE
Appel : remercier, annoncer, un écart professionnel, la suite (vivier oui/non), laisser une question.
Puis mail :
Bonjour [Prénom],
Comme évoqué, nous avons retenu un autre profil plus démonstratif sur [critère]. Ce n'est pas un jugement de votre valeur globale.
Je reste disponible pour un retour oral de 10 minutes. Données : [mentions].
Nous ne communiquons pas les données d'un autre candidat.


4. MISE EN ATTENTE TRANSPARENTE
Bonjour [Prénom],
Votre candidature reste en shortlist ouverte (plusieurs personnes). Aucune décision n'est prise. Point au [date]. Vous n'êtes pas « le seul ». Si une autre offre se présente, dites-le-nous.
Si au [date] nous n'avons pas tranché, vous recevrez un refus ou une nouvelle date, pas un silence.

INTERDITS
Motif âge, grossesse, origine, handicap, syndicat. « Poste gelé » alors qu'il ne l'est pas. « Vous êtes prioritaire » × 3 personnes. Transfert du commentaire CRM illicite.`),
        note(
          "QUALIFICATION : bonne pratique relation candidat ; L. 1132-1 (motif) ; CNIL (information, vivier, droits) ; L. 5331-3 si l'emploi est présenté comme encore ouvert à tort. RÉFÉRENCE : L1132-1, CNIL-guide, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Ghosting. Copier-coller « profil ne correspondant pas » à un finaliste. File d'attente sur l'essai d'un tiers (S97)."
        ),
        h("Situations particulières"),
        t(
          "Allégation de discrimination (S64) : RH, conservation, pas de clash. Demande trop détaillée (S28) : pas les données d'autrui."
        ),
        h("Mise en pratique"),
        t(
          "Rédigez le refus finaliste dont le CRM dit « pas le feeling, un peu vieux »."
        ),
        h("Correction détaillée"),
        t(
          "On ignore le CRM illicite, on recadre le manager ailleurs, on écrit un écart de preuve sur un critère (ex. incident transporteur non illustré). On propose un oral court. On n'invente pas un gel de poste."
        ),
      ],
    }),
    lesson({
      title: "Proposition d'embauche : modèle offre et vigilance promesse",
      description:
        "Un modèle d'offre, une checklist RH, et ce qu'il ne faut jamais écrire.",
      minutes: 24,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous préparez une proposition écrite de type offre, vous faites valider RH, et vous n'employez pas le vocabulaire de la promesse unilatérale par générosité."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Service-Public F39588 (vérifié 12/03/2026) : offre de contrat vs promesse unilatérale, notions jurisprudentielles. L'offre peut être retirée avant acceptation dans le délai laissé ou un délai raisonnable. La promesse unilatérale vaut contrat ; le retrait s'analyse en licenciement sans cause réelle et sérieuse. Une promesse d'embauche n'est pas obligatoire. Le junior ne qualifie pas seul un écrit déjà parti (S62) : il alerte."
        ),
        h("Méthode opérationnelle"),
        t(
          "Grille complète + décision + fourchette + avantages réels → projet d'offre → validation RH signataire → envoi → délai de réponse cadré → acceptation écrite → contrat. Pas de SMS « tu as le job »."
        ),
        h("Exemple professionnel"),
        t(
          "Le manager envoie « nous vous promettons le poste, 37 k€, le 3 novembre ». C'est le cas S62 : stop junior, RH / juridique."
        ),
        h("Document 1 — Modèle d'offre (à faire valider RH)"),
        code(`PROPOSITION D'EMBAUCHE — DOCUMENT DE TYPE OFFRE
(Papier à en-tête employeur — signataire habilité RH / direction, PAS le junior seul)
(Ce modèle n'est pas un conseil juridique personnalisé ; toute adaptation passe par RH.)

[Ville], le [date]
[Nom du candidat]  [adresse fournie pour ce process]

Objet : Offre de contrat de travail — Coordinateur / coordinatrice supply chain — [site]

Madame, Monsieur,
À la suite du processus de recrutement, [Raison sociale] vous adresse la présente OFFRE de contrat de travail, distincte d'une promesse unilatérale.

Poste : Coordinateur supply chain    Lieu : [adresse du site]
Contrat proposé : CDI à temps plein    Horaires : [ceux du poste, exacts]
Rémunération : [fixe brut annuel exact]  |  Avantages : [uniquement ceux validés : mutuelle, tickets, télétravail réel]
Date de prise de fonction envisagée : [date]  |  Période d'essai : [selon RH / convention, ne pas inventer]
Conditions : [visite d'information / pièces administratives selon RH — pas de collecte santé par le recruteur]

Cette offre est valable jusqu'au [date/heure]. Sans acceptation écrite de votre part parvenue avant cette échéance, elle deviendra caduque.
Vous pouvez l'accepter en retournant le présent document daté, signé, avec la mention manuscrite « bon pour acceptation de l'offre ».
Jusqu'à votre acceptation, [l'employeur se réserve la possibilité de retirer l'offre dans les conditions applicables — formulation RH].

Nous vous remercions de ne pas démissionner de votre emploi actuel sur la seule foi d'un échange oral.

Signataire habilité : [nom, fonction]    Copie : RH, manager, dossier.

NE PAS ÉCRIRE
« Nous vous promettons le poste » ; « engagement ferme et irrévocable » ; « vous êtes embauché(e) dès à présent » si RH n'a pas voulu cet effet.
Avantages non validés (voiture, 4 jours de télétravail). Salaire différent de la décision.`),
        h("Document 2 — Checklist avant envoi + avertissement"),
        code(`CHECKLIST AVANT ENVOI D'UNE OFFRE
[ ] Décision manager tracée + grilles complètes
[ ] Fourchette / salaire / avantages validés RH (S12, S14)
[ ] Intitulé, lieu, horaires = annonce = fiche de poste (L. 5331-3)
[ ] Signataire habilité identifié
[ ] Délai de réponse cadré, second finaliste informé HONNÊTEMENT (pas de double offre secrète)
[ ] Vocabulaire relu : OFFRE, pas PROMESSE, sauf instruction juridique contraire
[ ] Mentions données / conservation
[ ] Pas de SMS, pas de WhatsApp perso, pas d'oral « c'est bon » concurrent de l'écrit
[ ] Projet relu par RH

AVERTISSEMENT — PROMESSE UNILATÉRALE
Si un écrit (e-mail manager compris) contient déjà une promesse avec les éléments essentiels, le junior N'IMPROVISE PAS un retrait (SP-F39588, S62). Escalade RH / juridique. Conservation des pièces.

Le recruteur junior n'est pas signataire sauf délégation écrite.`),
        note(
          "QUALIFICATION : SP-F39588 (jurisprudence expliquée par Service-Public) ; politique interne de signature ; L. 5331-3 (exactitude) ; bonne pratique de délai cadré. RÉFÉRENCE : SP-F39588, L5331-3."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Mot « promesse » pour rassurer. Offre à 39 k€ non validée. Deux offres le même soir. Oral qui contredit l'écrit."
        ),
        h("Situations particulières"),
        t(
          "Counter-offer (S17) : pas d'alignement sauvage. Candidat qui veut le contrat avant de démissionner (S92) : transmettre le projet validé."
        ),
        h("Mise en pratique"),
        t(
          "Corrigez : « On te promet le job à 39 k et la voiture, signe vite, l'essai on verra. »"
        ),
        h("Correction détaillée"),
        t(
          "Remplacer par une offre RH : salaire validé, véhicule seulement s'il existe, essai selon cadre RH, délai, signataire. Retirer « on te promet ». Ne pas banaliser l'essai comme filet (S93)."
        ),
      ],
    }),
    lesson({
      title: "Checklists finalisation, préboarding et onboarding",
      description:
        "Trois checklists pour ne pas « disparaître » entre la signature et J+7.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous coordonnez la finalisation administrative, le préboarding et le relais d'accueil, sans promettre un tuteur fictif."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "DPAE : avant la prise de fonction ou le début de la période d'essai, au plus tôt dans les 8 jours précédant l'embauche (SP-F23107). Obligation employeur, coordination recruteur. L'onboarding n'est pas un argument d'annonce mensonger (S94)."
        ),
        h("Méthode opérationnelle"),
        t(
          "Checklist partagée RH / manager / IT / recruteur. Point J-7. Message d'accueil factuel. Passage de relais écrit."
        ),
        h("Exemple professionnel"),
        t(
          "Industrie 3×8 : si personne n'est là à 5 h 30 le lundi, J1 est un échec. Le recruteur alerte le vendredi, il ne « fait pas l'intégration à la place »."
        ),
        h("Documents — trois checklists"),
        code(`1. FINALISATION (après acceptation de l'offre)
[ ] Acceptation écrite datée
[ ] Contrat (RH) cohérent avec l'offre
[ ] Pièces administratives selon liste RH (identité, RIB, etc.) — PAS de questionnaire médical recruteur
[ ] DPAE : responsable nommé, déclenchée avant J1 / essai, pas plus tôt que 8 jours avant (SP-F23107)
[ ] Visite d'information / santé au travail : circuit RH, pas le junior
[ ] Habilitations poste : planning, pas d'invention
[ ] Refus envoyés aux non-retenus (ou attente honnête — S97)
[ ] Annonce retirée ou marquée pourvue (S67)
[ ] Dossier : grilles, offres, mails — conservation selon politique / CNIL / L. 1134-5


2. PRÉBOARDING J-7 → J-1
[ ] Mail de bienvenue : heure, lieu, contact d'accueil, documents, PAS de laptop fictif
[ ] Manager nommé pour J1
[ ] Poste de travail / badge / droits WMS demandés à l'IT
[ ] Planning de la première semaine (même imparfait, mais vrai)
[ ] Tenue / EPI si entrepôt
[ ] Accessibilité si demandée
[ ] Alerte écrite si un item critique manque


3. ONBOARDING J1 / S1 (relais, pas substitution au manager)
J1 : accueil à l'heure du poste, sécurité, présentation équipe présente, outils de base, premier planning accompagné
S1 : point 20 min recruteur-salarié « le process d'arrivée correspond-il à l'écrit ? » (écarts = alerte, pas un débrief médical)
J7 : le recruteur clôt sa part si le manager a pris le relais ; sinon escalade

MESSAGE TYPE J-7
Bonjour [Prénom],
Rendez-vous lundi [date] à [heure réelle] à [adresse], accueil par [Nom, tél]. Merci d'apporter [liste RH]. Les éléments encore en cours (ex. droits WMS) vous seront indiqués sans promesse d'un outil non commandé.
À lundi, [Nom]`),
        note(
          "QUALIFICATION : SP-F23107 (DPAE, obligation employeur) ; CNIL / L. 1134-5 (conservation) ; L. 1221-6 (pas de santé par le recruteur) ; bonne pratique de relais. RÉFÉRENCE : SP-F23107, CNIL-referentiel-2026, L1134-5, L1221-6."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "Disparition. Promesse de parrain. DPAE « la semaine prochaine ». Collecte médicale « pour le dossier »."
        ),
        h("Situations particulières"),
        t(
          "Arrêt entre offre et J1 (S96) : pas d'enquête santé, RH. Désistement veille (S26) : plan B, pas de vengeance."
        ),
        h("Mise en pratique"),
        t(
          "Le PC n'est pas commandé vendredi 16 h, J1 lundi 5 h 30. Écrivez l'alerte interne et la phrase au candidat."
        ),
        h("Correction détaillée"),
        t(
          "Interne : « J1 lundi 5 h 30, pas de poste de travail confirmé — risque d'échec d'accueil. Action IT / manager avant 10 h. » Candidat : ne pas promettre le PC ; dire l'heure d'accueil et qu'un point outils sera fait, ou décaler J1 si RH le décide. Pas de « tout sera prêt, promis »."
        ),
      ],
    }),
    lesson({
      title: "Tableau de suivi et tableau de bord d'indicateurs",
      description:
        "Deux outils de pilotage : le suivi de dossier et les indicateurs, sans KPI qui poussent à mentir.",
      minutes: 20,
      blocks: [
        h("Objectifs pédagogiques"),
        t(
          "Vous tenez un tableau de process et un mini tableau de bord, en refusant les indicateurs qui encouragent le ghosting ou le mensonge (S100)."
        ),
        h("Ce qu'il faut comprendre"),
        t(
          "Un indicateur oriente le comportement. « Offres envoyées » sans qualité pousse aux doubles offres. « Délai de clôture » pousse à closer (S07, S100). Distinguez indicateurs de flux (descriptifs) et cibles managériales. Pas de statistique inventée dans ce cours : les champs ci-dessous sont des structures, pas des normes de marché."
        ),
        h("Méthode opérationnelle"),
        t(
          "Mise à jour quotidienne du suivi. Revue hebdo 20 min avec le manager. Tableau de bord mensuel RH. Aucune donnée de santé, d'origine, de photo."
        ),
        h("Exemple professionnel"),
        t(
          "PME : un tableur. ETI : un ATS. Le contenu minimal est le même : étape, date, décision, motif professionnel."
        ),
        h("Document 1 — Tableau de suivi de process"),
        code(`SUIVI RECRUTEMENT — POSTE-____
Colonne          Contenu autorisé                         Interdit
Candidat         Nom, coordonnées pro                     N° sécu, santé, enfants
Source           canal                                    « piston DG » comme insulte — le conflit d'intérêts se note à part
Étape            CV / préqual / entretien / offre / refus
Dates            réception, relance, décision             pas de date fictive
Scores           totaux grille                            feeling, photo, âge
Prétention       chiffre vs fourchette                    jugement moral
Motif            phrase professionnelle                   critère protégé
Vivier           oui/non, date dernier contact, opposition
Incident         question illicite, e-mail parti faux dest.  pas de rumeur
Relais J1        checklist                                promesses d'intégration

Filtre de vue manager : pas les commentaires RH sensibles. Export : minimisation.`),
        h("Document 2 — Tableau de bord indicateurs"),
        code(`TABLEAU DE BORD MENSUEL (structure — pas de chiffres inventés)

Indicateur de flux (descriptif)
- Postes ouverts / pourvus / gelés / annulés
- Délai de cadrage (brief → fiche validée)
- Délai première préqual
- Délai décision après shortlist
- Taux de réponse aux approches (par canal)
- Refus envoyés vs dossiers clos sans réponse (alerte ghosting)
- Offres acceptées / refusées / désistements J-1

Indicateurs de qualité (questions, pas de vanité)
- % de dossiers avec grille complète
- % d'annonces relues (interdits)
- Incidents légaux signalés (questions illicites, fuites)
- Écart offre vs fourchette validée (doit être 0 hors exception RH)
- J1 avec accueil réel (badge, manager présent)

Indicateurs à NE PAS utiliser comme prime junior
- « Nombre d'offres envoyées » isolé
- « Signatures dans la semaine du COMEX »
- Taux de conversion qui justifie un mensonge de rareté
- Filtre de performance par origine, âge, sexe des embauchés comme objectif recruteur

Revue : 20 min. Un KPI n'autorise pas S100.`),
        note(
          "QUALIFICATION : bonne pratique de pilotage ; CNIL (minimisation dans les tableaux) ; L. 1132-1 (pas d'indicateur-filtre illicite) ; éthique vs KPI (S100). RÉFÉRENCE : CNIL-guide, L1132-1."
        ),
        h("Erreurs fréquentes du recruteur junior"),
        t(
          "ATS comme tiroir à commentaires d'âge. Objectif de signatures qui justifie le mensonge. Oublier les refus dans le suivi."
        ),
        h("Situations particulières"),
        t(
          "IA (S54) : un indicateur « % femmes dans le top 10 de l'outil » est une alerte de biais, pas un tri. Droit d'accès : le tableau fait partie des données."
        ),
        h("Mise en pratique"),
        t(
          "Votre N+1 veut une prime sur « offres envoyées ». Rédigez cinq lignes pour proposer un indicateur de qualité à la place."
        ),
        h("Correction détaillée"),
        t(
          "Proposer : dossiers avec grille complète, refus envoyés sous 48 h après décision, zéro écart d'avantage non validé, zéro incident non signalé. Expliquer qu'un volume d'offres pousse aux doubles envois et aux écrits imprudents (SP-F39588)."
        ),
      ],
    }),
    quizLesson({
      title: "Quiz — Usage des documents (5 questions)",
      description:
        "Cinq questions sur l'usage des modèles : interdits, offre vs promesse, DPAE, données.",
      passing_score: 70,
      minutes: 8,
      questions: [
        q({
          question:
            "Dans une fiche de recueil ou une annonce, quelle information est à exclure ?",
          options: [
            "A. La fourchette salariale validée par RH.",
            "B. Un âge cible ou une exigence de photo / « native French ».",
            "C. Les horaires réels du poste.",
            "D. La mention du cas pratique de 20 minutes.",
          ],
          correct: 1,
          explanation:
            "L. 1132-1 et L. 1221-6 : pas d'âge, de photo exigée, de langue maternelle comme filtre. Fourchette vraie, horaires et tests annoncés sont au contraire utiles (et L. 1221-8 pour les méthodes).",
        }),
        q({
          question:
            "Vous devez envoyer un écrit d'embauche. Quelle conduite ?",
          options: [
            "A. Écrire « nous vous promettons le poste » pour rassurer, signé par vous.",
            "B. Utiliser un modèle d'OFFRE validé RH, signataire habilité, sans avantages inventés (SP-F39588).",
            "C. Un SMS « tu as le job » en attendant l'écrit.",
            "D. Envoyer deux offres le même soir pour sécuriser le COMEX.",
          ],
          correct: 1,
          explanation:
            "Une promesse n'est pas obligatoire et peut valoir contrat. Le junior n'est pas signataire par défaut. SMS = écrit. Double offre : chaos.",
        }),
        q({
          question: "À propos de la DPAE, quelle affirmation est exacte ?",
          options: [
            "A. Le recruteur junior la fait après la première semaine, ce n'est qu'un papier.",
            "B. Obligation de l'employeur, avant la prise de fonction ou le début de l'essai, au plus tôt dans les 8 jours précédant l'embauche (SP-F23107) ; le junior alerte et coordonne.",
            "C. Elle doit être faite trois mois avant J1.",
            "D. On peut antidater le début de contrat pour rattraper un oubli.",
          ],
          correct: 1,
          explanation:
            "SP-F23107 / Urssaf. Ne pas inventer d'autre délai. Ne pas antidater. Ce n'est pas la signature du junior isolé.",
        }),
        q({
          question:
            "Un CR d'entretien peut-il contenir « trop vieux, pas le feeling, habite loin » ?",
          options: [
            "A. Oui, c'est la vérité du manager.",
            "B. Non : âge et résidence sont des critères protégés ; le feeling sans fait n'est pas une méthode pertinente ; le CR doit rester professionnel (L. 1132-1, L. 1221-9).",
            "C. Oui si on ne le montre jamais au candidat.",
            "D. Oui si on l'écrit en anglais.",
          ],
          correct: 1,
          explanation:
            "Un CR est une donnée. Le cacher ou le traduire n'efface pas L. 1132-1. Droit d'accès possible. Recadrer le manager, écrire des preuves métier.",
        }),
        q({
          question:
            "Une mise en attente « vous êtes très bien positionné » envoyée à trois finalistes sans date est :",
          options: [
            "A. Une bonne stratégie de réserve.",
            "B. Une pratique à remplacer par une information vraie (shortlist ouverte, date de point, droit de se retirer).",
            "C. Obligatoire tant que l'essai du retenu n'est pas fini.",
            "D. Un droit du manager qui efface L. 5331-3.",
          ],
          correct: 1,
          explanation:
            "S25 / S97. Loyauté. Pas de réserve sur l'essai d'un tiers non dite. L. 5331-3 si l'emploi est déformé. Le manager n'autorise pas le mensonge.",
        }),
      ],
    }),
  ],
};
