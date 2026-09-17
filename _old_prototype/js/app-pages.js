// Dashboard
LMSApp.prototype.renderDashboard = function() {
    const totalLearners = this.learners.length;
    const activeCourses = this.courses.filter(c => c.status === 'published').length;
    const totalEnrolled = this.learners.reduce((sum, l) => sum + l.enrolledCourses.length, 0);
    const avgProgress = Math.round(this.learners.reduce((sum, l) => sum + l.progress, 0) / totalLearners);

    return '<h1 class="page-title">Tableau de bord</h1>' +
        '<p class="page-subtitle">Bienvenue Julien ! Voici un apercu de votre plateforme.</p>' +
        '<div class="stats-grid">' +
            '<div class="stat-card">' +
                '<div class="stat-icon blue"><i class="fas fa-users"></i></div>' +
                '<div class="stat-info"><h3>' + totalLearners + '</h3><p>Apprenants actifs</p></div>' +
            '</div>' +
            '<div class="stat-card">' +
                '<div class="stat-icon green"><i class="fas fa-book-open"></i></div>' +
                '<div class="stat-info"><h3>' + activeCourses + '</h3><p>Formations publiees</p></div>' +
            '</div>' +
            '<div class="stat-card">' +
                '<div class="stat-icon orange"><i class="fas fa-user-graduate"></i></div>' +
                '<div class="stat-info"><h3>' + totalEnrolled + '</h3><p>Inscriptions totales</p></div>' +
            '</div>' +
            '<div class="stat-card">' +
                '<div class="stat-icon cyan"><i class="fas fa-chart-line"></i></div>' +
                '<div class="stat-info"><h3>' + avgProgress + '%</h3><p>Progression moyenne</p></div>' +
            '</div>' +
        '</div>' +
        '<div class="quick-actions">' +
            '<div class="quick-action" onclick="app.renderPage(\'creer-formation\'); document.querySelectorAll(\'.menu-item\').forEach(i=>i.classList.remove(\'active\')); document.querySelector(\'[data-page=creer-formation]\').classList.add(\'active\')">' +
                '<i class="fas fa-plus-circle"></i><p>Creer une formation</p>' +
            '</div>' +
            '<div class="quick-action" onclick="app.renderPage(\'apprenants\'); document.querySelectorAll(\'.menu-item\').forEach(i=>i.classList.remove(\'active\')); document.querySelector(\'[data-page=apprenants]\').classList.add(\'active\')">' +
                '<i class="fas fa-user-plus"></i><p>Ajouter un apprenant</p>' +
            '</div>' +
            '<div class="quick-action" onclick="app.renderPage(\'rapports\'); document.querySelectorAll(\'.menu-item\').forEach(i=>i.classList.remove(\'active\')); document.querySelector(\'[data-page=rapports]\').classList.add(\'active\')">' +
                '<i class="fas fa-chart-bar"></i><p>Voir les rapports</p>' +
            '</div>' +
            '<div class="quick-action" onclick="app.renderPage(\'certificats\'); document.querySelectorAll(\'.menu-item\').forEach(i=>i.classList.remove(\'active\')); document.querySelector(\'[data-page=certificats]\').classList.add(\'active\')">' +
                '<i class="fas fa-certificate"></i><p>Certificats</p>' +
            '</div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">' +
            '<div class="chart-card">' +
                '<h3><i class="fas fa-chart-bar" style="margin-right:8px;color:var(--primary)"></i>Formations completees par mois</h3>' +
                '<div class="bar-chart">' +
                    LMS_DATA.monthlyData.map(d =>
                        '<div class="bar">' +
                            '<div class="bar-value">' + d.completions + '</div>' +
                            '<div class="bar-fill" style="height:' + (d.completions * 6) + 'px;background:var(--primary)"></div>' +
                            '<div class="bar-label">' + d.month + '</div>' +
                        '</div>'
                    ).join('') +
                '</div>' +
            '</div>' +
            '<div class="chart-card">' +
                '<h3><i class="fas fa-clock" style="margin-right:8px;color:var(--warning)"></i>Activite recente</h3>' +
                '<div class="activity-list">' +
                    '<div class="activity-item">' +
                        '<div class="activity-icon green"><i class="fas fa-check"></i></div>' +
                        '<div class="activity-content"><p><strong>Pierre Martin</strong> a termine Excel Avance</p><small>Il y a 2 heures</small></div>' +
                    '</div>' +
                    '<div class="activity-item">' +
                        '<div class="activity-icon blue"><i class="fas fa-play"></i></div>' +
                        '<div class="activity-content"><p><strong>Marie Dupont</strong> a commence Management</p><small>Il y a 5 heures</small></div>' +
                    '</div>' +
                    '<div class="activity-item">' +
                        '<div class="activity-icon orange"><i class="fas fa-star"></i></div>' +
                        '<div class="activity-content"><p><strong>Sophie Bernard</strong> a obtenu 95% au quiz Securite</p><small>Hier</small></div>' +
                    '</div>' +
                    '<div class="activity-item">' +
                        '<div class="activity-icon green"><i class="fas fa-user-plus"></i></div>' +
                        '<div class="activity-content"><p><strong>3 nouveaux apprenants</strong> inscrits cette semaine</p><small>Il y a 2 jours</small></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
};

// Catalogue
LMSApp.prototype.renderCatalogue = function() {
    const published = this.courses.filter(c => c.status === 'published');
    const categories = ['all', ...new Set(published.map(c => c.category))];

    return '<h1 class="page-title">Catalogue des formations</h1>' +
        '<p class="page-subtitle">' + published.length + ' formations disponibles</p>' +
        '<div class="filters">' +
            categories.map((cat, i) =>
                '<button class="filter-btn' + (i === 0 ? ' active' : '') + '" data-filter="' + cat + '">' +
                (cat === 'all' ? 'Toutes' : cat) + '</button>'
            ).join('') +
        '</div>' +
        '<div class="courses-grid" id="courses-grid">' +
            published.map(c => this.courseCard(c)).join('') +
        '</div>';
};

LMSApp.prototype.courseCard = function(course) {
    var badgeHtml = '';
    if (course.badge === 'new') badgeHtml = '<span class="badge badge-new">Nouveau</span>';
    else if (course.badge === 'popular') badgeHtml = '<span class="badge badge-popular">Populaire</span>';
    else if (course.badge === 'required') badgeHtml = '<span class="badge badge-required">Obligatoire</span>';

    return '<div class="course-card" onclick="app.showCourseDetail(' + course.id + ')">' +
        '<div class="course-thumb" style="background:' + course.gradient + '">' +
            '<i class="fas ' + course.icon + '"></i>' + badgeHtml +
        '</div>' +
        '<div class="course-body">' +
            '<h3>' + course.title + '</h3>' +
            '<p>' + course.description + '</p>' +
            '<div class="course-meta">' +
                '<span><i class="fas fa-clock"></i> ' + course.duration + '</span>' +
                '<span><i class="fas fa-layer-group"></i> ' + course.modules + ' modules</span>' +
                '<span><i class="fas fa-users"></i> ' + course.enrolled + '</span>' +
            '</div>' +
        '</div>' +
        '<div class="course-footer">' +
            '<span class="course-category">' + course.category + '</span>' +
            '<button class="btn-sm" onclick="event.stopPropagation(); app.enrollCourse(' + course.id + ')">S\'inscrire</button>' +
        '</div>' +
    '</div>';
};

LMSApp.prototype.showCourseDetail = function(id) {
    var course = this.courses.find(c => c.id === id);
    if (!course) return;

    var typeIcons = { video: 'fa-play-circle', document: 'fa-file-alt', interactive: 'fa-hand-pointer', quiz: 'fa-question-circle' };
    var typeLabels = { video: 'Video', document: 'Document', interactive: 'Interactif', quiz: 'Quiz' };

    var html = '<div style="margin-bottom:20px">' +
        '<div style="display:flex;gap:16px;margin-bottom:16px;flex-wrap:wrap">' +
            '<span class="course-category">' + course.category + '</span>' +
            '<span style="font-size:0.85rem;color:var(--text-light)"><i class="fas fa-clock"></i> ' + course.duration + '</span>' +
            '<span style="font-size:0.85rem;color:var(--text-light)"><i class="fas fa-users"></i> ' + course.enrolled + ' inscrits</span>' +
        '</div>' +
        '<p style="color:var(--text-light);line-height:1.6;margin-bottom:20px">' + course.description + '</p>' +
        '<h3 style="margin-bottom:12px">Modules du parcours</h3>' +
        '<div class="module-list">' +
            course.moduleList.map((m, i) =>
                '<div class="module-item">' +
                    '<span style="color:var(--text-lighter);font-weight:600;width:24px">' + (i + 1) + '</span>' +
                    '<i class="fas ' + (typeIcons[m.type] || 'fa-file') + '" style="color:var(--primary)"></i>' +
                    '<div class="module-info"><h4>' + m.title + '</h4><p>' + (typeLabels[m.type] || m.type) + ' - ' + m.duration + '</p></div>' +
                '</div>'
            ).join('') +
        '</div>' +
        '<div style="margin-top:20px;display:flex;gap:12px">' +
            '<button class="btn btn-primary" onclick="app.enrollCourse(' + course.id + '); app.closeModal()"><i class="fas fa-play"></i> Commencer</button>' +
            '<button class="btn btn-secondary" onclick="app.closeModal()">Fermer</button>' +
        '</div>' +
    '</div>';

    this.openModal(course.title, html);
};

LMSApp.prototype.enrollCourse = function(id) {
    var course = this.courses.find(c => c.id === id);
    if (course) {
        this.showToast('Inscription a "' + course.title + '" confirmee !', 'success');
    }
};
