// Apprenants
LMSApp.prototype.renderApprenants = function() {
    return '<h1 class="page-title">Gestion des apprenants</h1>' +
        '<p class="page-subtitle">' + this.learners.length + ' apprenants enregistres</p>' +
        '<div class="section-header">' +
            '<div class="filters">' +
                '<button class="filter-btn active" data-filter="all">Tous</button>' +
                '<button class="filter-btn" data-filter="active">Actifs</button>' +
                '<button class="filter-btn" data-filter="inactive">Inactifs</button>' +
            '</div>' +
            '<button class="btn btn-primary" onclick="app.addLearner()"><i class="fas fa-user-plus"></i> Ajouter</button>' +
        '</div>' +
        '<div class="table-container">' +
            '<table>' +
                '<thead><tr>' +
                    '<th>Apprenant</th><th>Service</th><th>Formations</th><th>Progression</th><th>Derniere activite</th><th>Statut</th><th>Actions</th>' +
                '</tr></thead>' +
                '<tbody>' +
                    this.learners.map(l => {
                        var statusClass = l.status === 'active' ? 'status-active' : 'status-inactive';
                        var statusText = l.status === 'active' ? 'Actif' : 'Inactif';
                        var pColor = l.progress >= 80 ? 'green' : (l.progress >= 40 ? 'blue' : 'orange');
                        return '<tr>' +
                            '<td><div style="display:flex;align-items:center;gap:10px">' +
                                '<div class="user-avatar" style="width:36px;height:36px;font-size:0.75rem">' + l.name.split(' ').map(n => n[0]).join('') + '</div>' +
                                '<div><div style="font-weight:600">' + l.name + '</div><div style="font-size:0.8rem;color:var(--text-light)">' + l.email + '</div></div>' +
                            '</div></td>' +
                            '<td>' + l.department + '</td>' +
                            '<td>' + l.completedCourses.length + '/' + l.enrolledCourses.length + '</td>' +
                            '<td><div style="display:flex;align-items:center;gap:8px"><div class="progress-bar" style="width:80px"><div class="progress-fill ' + pColor + '" style="width:' + l.progress + '%"></div></div><span style="font-size:0.8rem">' + l.progress + '%</span></div></td>' +
                            '<td style="font-size:0.85rem;color:var(--text-light)">' + l.lastActive + '</td>' +
                            '<td><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
                            '<td><button class="btn btn-secondary" style="padding:6px 12px;font-size:0.8rem" onclick="app.showLearnerDetail(' + l.id + ')"><i class="fas fa-eye"></i></button></td>' +
                        '</tr>';
                    }).join('') +
                '</tbody>' +
            '</table>' +
        '</div>';
};

LMSApp.prototype.addLearner = function() {
    this.openModal('Ajouter un apprenant',
        '<form onsubmit="app.saveLearner(event)">' +
            '<div class="form-row">' +
                '<div class="form-group"><label>Prenom *</label><input type="text" id="learner-first" required></div>' +
                '<div class="form-group"><label>Nom *</label><input type="text" id="learner-last" required></div>' +
            '</div>' +
            '<div class="form-group"><label>Email *</label><input type="email" id="learner-email" required></div>' +
            '<div class="form-group"><label>Service</label>' +
                '<select id="learner-dept"><option>Marketing</option><option>IT</option><option>RH</option><option>Commercial</option><option>Finance</option><option>Production</option><option>Direction</option></select>' +
            '</div>' +
            '<div style="display:flex;gap:12px;margin-top:20px">' +
                '<button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Enregistrer</button>' +
                '<button type="button" class="btn btn-secondary" onclick="app.closeModal()">Annuler</button>' +
            '</div>' +
        '</form>'
    );
};

LMSApp.prototype.saveLearner = function(e) {
    e.preventDefault();
    var first = document.getElementById('learner-first').value;
    var last = document.getElementById('learner-last').value;
    var name = first + ' ' + last;
    this.learners.push({
        id: this.learners.length + 1,
        name: name,
        email: document.getElementById('learner-email').value,
        department: document.getElementById('learner-dept').value,
        enrolledCourses: [],
        completedCourses: [],
        progress: 0,
        lastActive: new Date().toISOString().split('T')[0],
        status: 'active'
    });
    this.closeModal();
    this.showToast(name + ' a ete ajoute avec succes !', 'success');
    this.renderPage('apprenants');
};

LMSApp.prototype.showLearnerDetail = function(id) {
    var l = this.learners.find(x => x.id === id);
    if (!l) return;
    var enrolledCourses = this.courses.filter(c => l.enrolledCourses.includes(c.id));
    this.openModal('Profil - ' + l.name,
        '<div style="display:flex;gap:20px;margin-bottom:20px;flex-wrap:wrap">' +
            '<div><strong>Email:</strong> ' + l.email + '</div>' +
            '<div><strong>Service:</strong> ' + l.department + '</div>' +
            '<div><strong>Statut:</strong> <span class="status-badge ' + (l.status === 'active' ? 'status-active' : 'status-inactive') + '">' + (l.status === 'active' ? 'Actif' : 'Inactif') + '</span></div>' +
        '</div>' +
        '<h3 style="margin-bottom:12px">Formations inscrites (' + enrolledCourses.length + ')</h3>' +
        '<div class="module-list">' +
            enrolledCourses.map(c => {
                var done = l.completedCourses.includes(c.id);
                return '<div class="module-item">' +
                    '<i class="fas ' + (done ? 'fa-check-circle' : 'fa-clock') + '" style="color:' + (done ? 'var(--success)' : 'var(--warning)') + '"></i>' +
                    '<div class="module-info"><h4>' + c.title + '</h4><p>' + (done ? 'Terminee' : 'En cours') + '</p></div>' +
                '</div>';
            }).join('') +
        '</div>'
    );
};

// Rapports
LMSApp.prototype.renderRapports = function() {
    var totalCompletions = this.learners.reduce((s, l) => s + l.completedCourses.length, 0);
    var avgP = Math.round(this.learners.reduce((s, l) => s + l.progress, 0) / this.learners.length);
    var topCourse = this.courses.reduce((a, b) => a.enrolled > b.enrolled ? a : b);

    return '<h1 class="page-title">Rapports et statistiques</h1>' +
        '<p class="page-subtitle">Analysez les performances de votre plateforme</p>' +
        '<div class="stats-grid">' +
            '<div class="stat-card"><div class="stat-icon green"><i class="fas fa-check-double"></i></div><div class="stat-info"><h3>' + totalCompletions + '</h3><p>Formations terminees</p></div></div>' +
            '<div class="stat-card"><div class="stat-icon blue"><i class="fas fa-percentage"></i></div><div class="stat-info"><h3>' + avgP + '%</h3><p>Taux de completion moyen</p></div></div>' +
            '<div class="stat-card"><div class="stat-icon orange"><i class="fas fa-trophy"></i></div><div class="stat-info"><h3>' + topCourse.enrolled + '</h3><p>Inscrits (top formation)</p></div></div>' +
            '<div class="stat-card"><div class="stat-icon cyan"><i class="fas fa-certificate"></i></div><div class="stat-info"><h3>' + this.certificates.length + '</h3><p>Certificats delivres</p></div></div>' +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">' +
            '<div class="chart-card">' +
                '<h3>Completions mensuelles</h3>' +
                '<div class="bar-chart">' +
                    LMS_DATA.monthlyData.map(d =>
                        '<div class="bar"><div class="bar-value">' + d.completions + '</div><div class="bar-fill" style="height:' + (d.completions * 6) + 'px;background:var(--success)"></div><div class="bar-label">' + d.month + '</div></div>'
                    ).join('') +
                '</div>' +
            '</div>' +
            '<div class="chart-card">' +
                '<h3>Top formations par inscriptions</h3>' +
                '<div style="display:flex;flex-direction:column;gap:12px;margin-top:12px">' +
                    this.courses.filter(c => c.status === 'published').sort((a, b) => b.enrolled - a.enrolled).slice(0, 5).map(c =>
                        '<div style="display:flex;align-items:center;gap:12px">' +
                            '<span style="width:200px;font-size:0.85rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + c.title + '</span>' +
                            '<div class="progress-bar" style="flex:1"><div class="progress-fill blue" style="width:' + Math.round(c.enrolled / 1.2) + '%"></div></div>' +
                            '<span style="font-size:0.8rem;font-weight:600;width:30px">' + c.enrolled + '</span>' +
                        '</div>'
                    ).join('') +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div style="margin-top:24px;display:flex;gap:12px">' +
            '<button class="btn btn-primary" onclick="app.showToast(\'Export CSV en cours...\', \'info\')"><i class="fas fa-download"></i> Exporter CSV</button>' +
            '<button class="btn btn-secondary" onclick="app.showToast(\'Export PDF en cours...\', \'info\')"><i class="fas fa-file-pdf"></i> Exporter PDF</button>' +
        '</div>';
};
