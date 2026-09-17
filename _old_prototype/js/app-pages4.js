// Certificats
LMSApp.prototype.renderCertificats = function() {
    return '<h1 class="page-title">Certificats</h1>' +
        '<p class="page-subtitle">' + this.certificates.length + ' certificats delivres</p>' +
        '<div class="courses-grid">' +
            this.certificates.map(cert =>
                '<div class="cert-card">' +
                    '<div class="cert-icon"><i class="fas fa-award"></i></div>' +
                    '<h3>' + cert.course + '</h3>' +
                    '<p><strong>' + cert.learner + '</strong></p>' +
                    '<p class="cert-date"><i class="fas fa-calendar"></i> Delivre le ' + cert.date + '</p>' +
                    '<p style="font-size:0.75rem;color:var(--text-lighter);margin-top:8px">Code: ' + cert.code + '</p>' +
                    '<button class="btn btn-outline" style="margin-top:16px" onclick="app.downloadCert(\'' + cert.code + '\')"><i class="fas fa-download"></i> Telecharger</button>' +
                '</div>'
            ).join('') +
        '</div>';
};

LMSApp.prototype.downloadCert = function(code) {
    this.showToast('Telechargement du certificat ' + code + '...', 'info');
};

// Parametres
LMSApp.prototype.renderParametres = function() {
    return '<h1 class="page-title">Parametres</h1>' +
        '<p class="page-subtitle">Configurez votre plateforme LMS</p>' +
        '<div class="form-card">' +
            '<h3><i class="fas fa-building" style="margin-right:8px;color:var(--primary)"></i>Informations de la plateforme</h3>' +
            '<div class="form-row">' +
                '<div class="form-group"><label>Nom de la plateforme</label><input type="text" value="LOU Academy"></div>' +
                '<div class="form-group"><label>URL</label><input type="text" value="https://academy.lou-corp.fr" disabled></div>' +
            '</div>' +
            '<div class="form-row">' +
                '<div class="form-group"><label>Email administrateur</label><input type="email" value="admin@lou-corp.fr"></div>' +
                '<div class="form-group"><label>Langue par defaut</label>' +
                    '<select><option selected>Francais</option><option>English</option><option>Espanol</option></select>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="form-card">' +
            '<h3><i class="fas fa-bell" style="margin-right:8px;color:var(--warning)"></i>Notifications</h3>' +
            '<div class="form-group"><label><input type="checkbox" style="margin-right:8px" checked> Notifier les apprenants lors de l inscription</label></div>' +
            '<div class="form-group"><label><input type="checkbox" style="margin-right:8px" checked> Rappels automatiques pour formations en retard</label></div>' +
            '<div class="form-group"><label><input type="checkbox" style="margin-right:8px" checked> Email de felicitation a la completion</label></div>' +
            '<div class="form-group"><label><input type="checkbox" style="margin-right:8px"> Rapport hebdomadaire par email</label></div>' +
        '</div>' +
        '<div class="form-card">' +
            '<h3><i class="fas fa-palette" style="margin-right:8px;color:var(--secondary)"></i>Apparence</h3>' +
            '<div class="form-row">' +
                '<div class="form-group"><label>Couleur principale</label><input type="color" value="#4f46e5" style="height:40px"></div>' +
                '<div class="form-group"><label>Logo</label><input type="file" accept="image/*"></div>' +
            '</div>' +
        '</div>' +
        '<div class="form-card">' +
            '<h3><i class="fas fa-certificate" style="margin-right:8px;color:var(--success)"></i>Certificats</h3>' +
            '<div class="form-group"><label><input type="checkbox" style="margin-right:8px" checked> Generer automatiquement les certificats</label></div>' +
            '<div class="form-group"><label>Score minimum pour validation (%)</label><input type="number" value="70" min="0" max="100"></div>' +
            '<div class="form-group"><label>Modele de certificat</label>' +
                '<select><option>Classique</option><option>Moderne</option><option>Minimaliste</option></select>' +
            '</div>' +
        '</div>' +
        '<div style="display:flex;gap:12px;margin-top:8px">' +
            '<button class="btn btn-primary" onclick="app.showToast(\'Parametres sauvegardes !\', \'success\')"><i class="fas fa-save"></i> Sauvegarder</button>' +
            '<button class="btn btn-secondary" onclick="app.showToast(\'Modifications annulees\', \'info\')"><i class="fas fa-undo"></i> Annuler</button>' +
        '</div>';
};
