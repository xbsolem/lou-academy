const LMS_DATA = {
    courses: [
        {
            id: 1,
            title: "Onboarding - Bienvenue chez LOU Corp",
            description: "Formation obligatoire pour tous les nouveaux collaborateurs. Decouvrez notre entreprise, nos valeurs et nos processus internes.",
            category: "Onboarding",
            duration: "2h30",
            modules: 5,
            enrolled: 45,
            badge: "required",
            icon: "fa-building",
            gradient: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            status: "published",
            createdAt: "2026-01-15",
            moduleList: [
                { title: "Presentation de LOU Corp", type: "video", duration: "15 min" },
                { title: "Nos valeurs et notre culture", type: "document", duration: "20 min" },
                { title: "Organigramme et equipes", type: "interactive", duration: "30 min" },
                { title: "Outils et acces informatiques", type: "video", duration: "45 min" },
                { title: "Quiz de validation", type: "quiz", duration: "20 min" }
            ]
        },
        {
            id: 2,
            title: "Cybersecurite - Les fondamentaux",
            description: "Apprenez les bonnes pratiques de securite informatique. Phishing, mots de passe, protection des donnees sensibles.",
            category: "Securite",
            duration: "1h45",
            modules: 4,
            enrolled: 120,
            badge: "required",
            icon: "fa-shield-halved",
            gradient: "linear-gradient(135deg, #ef4444, #f97316)",
            status: "published",
            createdAt: "2026-02-01",
            moduleList: [
                { title: "Les menaces actuelles", type: "video", duration: "20 min" },
                { title: "Reconnaitre le phishing", type: "interactive", duration: "25 min" },
                { title: "Gestion des mots de passe", type: "document", duration: "15 min" },
                { title: "Quiz securite", type: "quiz", duration: "15 min" }
            ]
        },
        {
            id: 3,
            title: "Management - Leadership bienveillant",
            description: "Developpez vos competences en management. Communication, feedback constructif, gestion de conflits.",
            category: "Management",
            duration: "4h00",
            modules: 6,
            enrolled: 32,
            badge: "popular",
            icon: "fa-people-group",
            gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
            status: "published",
            createdAt: "2026-03-10",
            moduleList: [
                { title: "Les styles de leadership", type: "video", duration: "30 min" },
                { title: "Communication non-violente", type: "video", duration: "40 min" },
                { title: "Donner du feedback", type: "interactive", duration: "35 min" },
                { title: "Gestion des conflits", type: "document", duration: "30 min" },
                { title: "Etude de cas pratique", type: "interactive", duration: "45 min" },
                { title: "Evaluation finale", type: "quiz", duration: "20 min" }
            ]
        },
        {
            id: 4,
            title: "Excel - Niveau avance",
            description: "Maitrisez les fonctions avancees d Excel : TCD, macros, formules complexes, Power Query.",
            category: "Bureautique",
            duration: "3h00",
            modules: 5,
            enrolled: 67,
            badge: "popular",
            icon: "fa-table-cells-large",
            gradient: "linear-gradient(135deg, #10b981, #34d399)",
            status: "published",
            createdAt: "2026-04-05",
            moduleList: [
                { title: "Tableaux croises dynamiques", type: "video", duration: "40 min" },
                { title: "Formules avancees (INDEX, EQUIV)", type: "video", duration: "35 min" },
                { title: "Introduction aux macros VBA", type: "interactive", duration: "40 min" },
                { title: "Power Query et Power Pivot", type: "video", duration: "35 min" },
                { title: "Exercice de synthese", type: "quiz", duration: "30 min" }
            ]
        },
        {
            id: 5,
            title: "RGPD - Protection des donnees",
            description: "Comprenez les enjeux du RGPD et les obligations legales de l entreprise en matiere de protection des donnees.",
            category: "Conformite",
            duration: "1h30",
            modules: 3,
            enrolled: 95,
            badge: "required",
            icon: "fa-lock",
            gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
            status: "published",
            createdAt: "2026-01-20",
            moduleList: [
                { title: "Les principes du RGPD", type: "video", duration: "25 min" },
                { title: "Vos obligations au quotidien", type: "document", duration: "30 min" },
                { title: "Quiz de conformite", type: "quiz", duration: "15 min" }
            ]
        },
        {
            id: 6,
            title: "Gestion de projet Agile",
            description: "Decouvrez les methodes agiles : Scrum, Kanban, sprint planning, retrospectives et ceremonies.",
            category: "Gestion de projet",
            duration: "3h30",
            modules: 5,
            enrolled: 41,
            badge: "new",
            icon: "fa-diagram-project",
            gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
            status: "published",
            createdAt: "2026-08-20",
            moduleList: [
                { title: "Introduction a l agilite", type: "video", duration: "25 min" },
                { title: "Le framework Scrum", type: "video", duration: "40 min" },
                { title: "Kanban et flux continu", type: "document", duration: "30 min" },
                { title: "Atelier pratique", type: "interactive", duration: "50 min" },
                { title: "Certification Agile", type: "quiz", duration: "25 min" }
            ]
        },
        {
            id: 7,
            title: "Prise de parole en public",
            description: "Techniques pour ameliorer vos presentations orales, gerer le trac et captiver votre audience.",
            category: "Soft Skills",
            duration: "2h00",
            modules: 4,
            enrolled: 28,
            badge: "new",
            icon: "fa-microphone",
            gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
            status: "published",
            createdAt: "2026-09-01",
            moduleList: [
                { title: "Structurer son message", type: "video", duration: "25 min" },
                { title: "Gerer le stress", type: "interactive", duration: "20 min" },
                { title: "Techniques de storytelling", type: "video", duration: "30 min" },
                { title: "Mise en situation", type: "quiz", duration: "25 min" }
            ]
        },
        {
            id: 8,
            title: "RSE - Responsabilite societale",
            description: "Comprendre les enjeux RSE et comment integrer le developpement durable dans votre quotidien professionnel.",
            category: "RSE",
            duration: "1h15",
            modules: 3,
            enrolled: 55,
            badge: null,
            icon: "fa-leaf",
            gradient: "linear-gradient(135deg, #059669, #34d399)",
            status: "draft",
            createdAt: "2026-09-10",
            moduleList: [
                { title: "Les piliers de la RSE", type: "video", duration: "25 min" },
                { title: "Actions concretes au bureau", type: "document", duration: "25 min" },
                { title: "Quiz RSE", type: "quiz", duration: "15 min" }
            ]
        }
    ],

    learners: [
        { id: 1, name: "Marie Dupont", email: "m.dupont@lou-corp.fr", department: "Marketing", enrolledCourses: [1,2,3,5], completedCourses: [1,5], progress: 68, lastActive: "2026-09-16", status: "active" },
        { id: 2, name: "Pierre Martin", email: "p.martin@lou-corp.fr", department: "IT", enrolledCourses: [1,2,4,6], completedCourses: [1,2,4], progress: 85, lastActive: "2026-09-17", status: "active" },
        { id: 3, name: "Sophie Bernard", email: "s.bernard@lou-corp.fr", department: "RH", enrolledCourses: [1,2,3,5,7], completedCourses: [1,2], progress: 42, lastActive: "2026-09-15", status: "active" },
        { id: 4, name: "Lucas Petit", email: "l.petit@lou-corp.fr", department: "Commercial", enrolledCourses: [1,2,7], completedCourses: [1], progress: 55, lastActive: "2026-09-14", status: "active" },
        { id: 5, name: "Emma Moreau", email: "e.moreau@lou-corp.fr", department: "Finance", enrolledCourses: [1,2,4,5], completedCourses: [1,2,4,5], progress: 100, lastActive: "2026-09-12", status: "active" },
        { id: 6, name: "Thomas Leroy", email: "t.leroy@lou-corp.fr", department: "IT", enrolledCourses: [1,2,6], completedCourses: [1], progress: 38, lastActive: "2026-09-10", status: "active" },
        { id: 7, name: "Camille Roux", email: "c.roux@lou-corp.fr", department: "Direction", enrolledCourses: [1,2,3,5], completedCourses: [1,2,3,5], progress: 100, lastActive: "2026-09-08", status: "active" },
        { id: 8, name: "Antoine Garcia", email: "a.garcia@lou-corp.fr", department: "Production", enrolledCourses: [1,2], completedCourses: [], progress: 12, lastActive: "2026-08-25", status: "inactive" },
        { id: 9, name: "Julie Dubois", email: "j.dubois@lou-corp.fr", department: "Marketing", enrolledCourses: [1,2,5,7], completedCourses: [1,2], progress: 60, lastActive: "2026-09-16", status: "active" },
        { id: 10, name: "Hugo Lambert", email: "h.lambert@lou-corp.fr", department: "Commercial", enrolledCourses: [1,2,3], completedCourses: [1], progress: 35, lastActive: "2026-09-13", status: "active" }
    ],

    notifications: [
        { id: 1, text: "Marie Dupont a termine le module 'Quiz securite'", time: "Il y a 2 heures", unread: true },
        { id: 2, text: "Nouvelle formation 'Gestion de projet Agile' publiee", time: "Il y a 5 heures", unread: true },
        { id: 3, text: "3 apprenants en retard sur 'Cybersecurite'", time: "Hier", unread: true },
        { id: 4, text: "Pierre Martin a obtenu son certificat Excel", time: "Il y a 2 jours", unread: false },
        { id: 5, text: "Rappel : formation RGPD a renouveler", time: "Il y a 3 jours", unread: false }
    ],

    certificates: [
        { id: 1, learner: "Pierre Martin", course: "Excel - Niveau avance", date: "2026-09-15", code: "LOU-2026-0042" },
        { id: 2, learner: "Emma Moreau", course: "Cybersecurite - Les fondamentaux", date: "2026-09-10", code: "LOU-2026-0039" },
        { id: 3, learner: "Camille Roux", course: "Management - Leadership bienveillant", date: "2026-09-05", code: "LOU-2026-0035" },
        { id: 4, learner: "Emma Moreau", course: "RGPD - Protection des donnees", date: "2026-08-28", code: "LOU-2026-0031" },
        { id: 5, learner: "Pierre Martin", course: "Cybersecurite - Les fondamentaux", date: "2026-08-20", code: "LOU-2026-0027" }
    ],

    monthlyData: [
        { month: "Avr", completions: 12 },
        { month: "Mai", completions: 18 },
        { month: "Juin", completions: 25 },
        { month: "Juil", completions: 22 },
        { month: "Aout", completions: 15 },
        { month: "Sept", completions: 30 }
    ]
};
