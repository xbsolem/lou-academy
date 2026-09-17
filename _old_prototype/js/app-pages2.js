// Mes Formations
LMSApp.prototype.renderMesFormations = function() {
    var myIds = [1, 2, 3, 6];
    var progress = { 1: 100, 2: 75, 3: 30, 6: 10 };
    var myCourses = this.courses.filter(c => myIds.includes(c.id));

    return '<h1 class="page-title">Mes formations</h1>' +
        '<p class="page-subtitle">Suivez votre progression dans les formations inscrites</p>' +
        '<div class="courses-grid">' +
            myCourses.map(c => {
                var p = progress[c.id] || 0;
                var color = p === 100 ? 'green' : (p > 50 ? 'blue' : 'orange');
                var statusText = p === 100 ? 'Terminee' : 'En cours';
                return '<div class="course-card" onclick="app.showCourseDetail(' + c.id + ')">' +
                    '<div class="course-thumb" style="background:' + c.gradient + '">' +
                        '<i class="fas ' + c.icon + '"></i>' +
                    '</div>' +
                    '<div class="course-body">' +
                        '<h3>' + c.title + '</h3>' +
                        '<div class="progress-bar"><div class="progress-fill ' + color + '" style="width:' + p + '%"></div></div>' +
                        '<div class="progress-text"><span>' + statusText + '</span><span>' + p + '%</span></div>' +
                    '</div>' +
                    '<div class="course-footer">' +
                        '<span class="course-category">' + c.category + '</span>' +
                        '<button class="btn-sm" onclick="event.stopPropagation(); app.showToast(\'Reprise de la formation...\', \'info\')">' + (p === 100 ? 'Revoir' : 'Continuer') + '</button>' +
                    '</div>' +
                '</div>';
            }).join('') +
        '</div>';
};

// Creer formation
LMSApp.prototype.renderCreerFormation = function() {
    return '<h1 class="page-title">Creer une formation</h1>' +
        '<p class="page-subtitle">Concevez un nouveau parcours de formation</p>' +
        '<form onsubmit="app.saveFormation(event)">' +
            '<div class="form-card">' +
                '<h3><i class="fas fa-info-circle" style="margin-right:8px;color:var(--primary)"></i>Informations generales</h3>' +
                '<div class="form-row">' +
                    '<div class="form-group">' +
                        '<label>Titre de la formation *</label>' +
                        '<input type="text" id="form-title" placeholder="Ex: Introduction au marketing digital" required>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label>Categorie *</label>' +
                        '<select id="form-category" required>' +
                            '<option value="">Choisir une categorie</option>' +
                            '<option value="Onboarding">Onboarding</option>' +
                            '<option value="Securite">Securite</option>' +
                            '<option value="Management">Management</option>' +
                            '<option value="Bureautique">Bureautique</option>' +
                            '<option value="Conformite">Conformite</option>' +
                            '<option value="Soft Skills">Soft Skills</option>' +
                            '<option value="Gestion de projet">Gestion de projet</option>' +
                            '<option value="RSE">RSE</option>' +
                            '<option value="Commercial">Commercial</option>' +
                            '<option value="RH">Ressources Humaines</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="form-group">' +
                    '<label>Description *</label>' +
                    '<textarea id="form-desc" placeholder="Decrivez le contenu et les objectifs de cette formation..." required></textarea>' +
                '</div>' +
                '<div class="form-row">' +
                    '<div class="form-group">' +
                        '<label>Duree estimee</label>' +
                        '<input type="text" id="form-duration" placeholder="Ex: 2h30">' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label>Niveau</label>' +
                        '<select id="form-level">' +
                            '<option value="debutant">Debutant</option>' +
                            '<option value="intermediaire">Intermediaire</option>' +
                            '<option value="avance">Avance</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="form-card">' +
                '<h3><i class="fas fa-layer-group" style="margin-right:8px;color:var(--primary)"></i>Modules</h3>' +
                '<div class="module-list" id="module-builder">' +
                    '<div class="module-item">' +
                        '<i class="fas fa-grip-vertical drag-handle"></i>' +
                        '<div class="module-info">' +
                            '<input type="text" placeholder="Titre du module" style="border:none;background:transparent;font-size:0.9rem;font-weight:600;font-family:inherit;width:100%">' +
                        '</div>' +
                        '<select style="padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit">' +
                            '<option value="video">Video</option>' +
                            '<option value="document">Document</option>' +
                            '<option value="interactive">Interactif</option>' +
                            '<option value="quiz">Quiz</option>' +
                        '</select>' +
                        '<div class="module-actions">' +
                            '<button type="button" onclick="this.closest(\'.module-item\').remove()"><i class="fas fa-trash"></i></button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<button type="button" class="add-module-btn" onclick="app.addModule()">' +
                    '<i class="fas fa-plus"></i> Ajouter un module' +
                '</button>' +
            '</div>' +
            '<div class="form-card">' +
                '<h3><i class="fas fa-cog" style="margin-right:8px;color:var(--primary)"></i>Options</h3>' +
                '<div class="form-row">' +
                    '<div class="form-group">' +
                        '<label><input type="checkbox" style="margin-right:8px">Formation obligatoire</label>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label><input type="checkbox" style="margin-right:8px" checked>Delivrer un certificat</label>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div style="display:flex;gap:12px;margin-top:8px">' +
                '<button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Publier</button>' +
                '<button type="button" class="btn btn-secondary" onclick="app.saveDraft()"><i class="fas fa-file"></i> Brouillon</button>' +
                '<button type="button" class="btn btn-outline" onclick="app.previewFormation()"><i class="fas fa-eye"></i> Apercu</button>' +
            '</div>' +
        '</form>';
};

LMSApp.prototype.addModule = function() {
    var builder = document.getElementById('module-builder');
    var item = document.createElement('div');
    item.className = 'module-item';
    item.innerHTML = '<i class="fas fa-grip-vertical drag-handle"></i>' +
        '<div class="module-info">' +
            '<input type="text" placeholder="Titre du module" style="border:none;background:transparent;font-size:0.9rem;font-weight:600;font-family:inherit;width:100%">' +
        '</div>' +
        '<select style="padding:6px 10px;border:1px solid var(--border);border-radius:6px;font-size:0.8rem;font-family:inherit">' +
            '<option value="video">Video</option>' +
            '<option value="document">Document</option>' +
            '<option value="interactive">Interactif</option>' +
            '<option value="quiz">Quiz</option>' +
        '</select>' +
        '<div class="module-actions">' +
            '<button type="button" onclick="this.closest(\'.module-item\').remove()"><i class="fas fa-trash"></i></button>' +
        '</div>';
    builder.appendChild(item);
};

LMSApp.prototype.saveFormation = function(e) {
    e.preventDefault();
    var title = document.getElementById('form-title').value;
    var category = document.getElementById('form-category').value;
    if (!title || !category) {
        this.showToast('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    var newCourse = {
        id: this.courses.length + 1,
        title: title,
        description: document.getElementById('form-desc').value,
        category: category,
        duration: document.getElementById('form-duration').value || '1h00',
        modules: document.querySelectorAll('#module-builder .module-item').length,
        enrolled: 0,
        badge: 'new',
        icon: 'fa-book',
        gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
        status: 'published',
        createdAt: new Date().toISOString().split('T')[0],
        moduleList: []
    };
    this.courses.push(newCourse);
    this.showToast('Formation "' + title + '" publiee avec succes !', 'success');
    setTimeout(() => {
        document.querySelector('[data-page=catalogue]').click();
    }, 1500);
};

LMSApp.prototype.saveDraft = function() {
    var title = document.getElementById('form-title').value || 'Sans titre';
    this.showToast('Brouillon "' + title + '" sauvegarde', 'info');
};

LMSApp.prototype.previewFormation = function() {
    var title = document.getElementById('form-title').value || 'Apercu de la formation';
    this.openModal(title, '<div class="empty-state"><i class="fas fa-eye"></i><h3>Apercu</h3><p>L apercu sera genere une fois la formation creee.</p></div>');
};
