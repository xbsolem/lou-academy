class LMSApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.courses = [...LMS_DATA.courses];
        this.learners = [...LMS_DATA.learners];
        this.notifications = [...LMS_DATA.notifications];
        this.certificates = [...LMS_DATA.certificates];
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderPage('dashboard');
        this.renderNotifications();
    }

    bindEvents() {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                this.renderPage(item.dataset.page);
                document.getElementById('sidebar').classList.remove('open');
            });
        });

        document.getElementById('menu-toggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        document.getElementById('notif-btn').addEventListener('click', () => {
            document.getElementById('notif-panel').classList.toggle('show');
        });

        document.getElementById('global-search').addEventListener('input', (e) => {
            if (e.target.value.length > 2) this.globalSearch(e.target.value);
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.notif-btn') && !e.target.closest('.notif-panel')) {
                document.getElementById('notif-panel').classList.remove('show');
            }
        });
    }

    renderPage(page) {
        this.currentPage = page;
        const content = document.getElementById('page-content');
        switch(page) {
            case 'dashboard': content.innerHTML = this.renderDashboard(); break;
            case 'catalogue': content.innerHTML = this.renderCatalogue(); break;
            case 'mes-formations': content.innerHTML = this.renderMesFormations(); break;
            case 'creer-formation': content.innerHTML = this.renderCreerFormation(); break;
            case 'apprenants': content.innerHTML = this.renderApprenants(); break;
            case 'rapports': content.innerHTML = this.renderRapports(); break;
            case 'certificats': content.innerHTML = this.renderCertificats(); break;
            case 'parametres': content.innerHTML = this.renderParametres(); break;
        }
        this.bindPageEvents();
    }

    bindPageEvents() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const group = btn.closest('.filters');
                group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (this.currentPage === 'catalogue') this.filterCourses(btn.dataset.filter);
            });
        });

        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const group = tab.closest('.tabs');
                group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.innerHTML = '<i class="fas ' + icons[type] + '"></i> ' + message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
    }

    openModal(title, bodyHtml) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = bodyHtml;
        document.getElementById('modal-overlay').classList.add('show');
    }

    closeModal() {
        document.getElementById('modal-overlay').classList.remove('show');
    }

    renderNotifications() {
        const list = document.getElementById('notif-list');
        list.innerHTML = this.notifications.map(n =>
            '<div class="notif-item ' + (n.unread ? 'unread' : '') + '">' +
            '<p>' + n.text + '</p>' +
            '<small>' + n.time + '</small>' +
            '</div>'
        ).join('');
    }

    clearNotifications() {
        this.notifications.forEach(n => n.unread = false);
        document.getElementById('notif-badge').style.display = 'none';
        this.renderNotifications();
        this.showToast('Notifications marquees comme lues', 'info');
    }

    globalSearch(query) {
        const q = query.toLowerCase();
        const results = this.courses.filter(c =>
            c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
        );
        if (results.length > 0) {
            this.showToast(results.length + ' formation(s) trouvee(s)', 'info');
        }
    }

    filterCourses(filter) {
        const grid = document.getElementById('courses-grid');
        if (!grid) return;
        let filtered = this.courses.filter(c => c.status === 'published');
        if (filter && filter !== 'all') {
            filtered = filtered.filter(c => c.category === filter);
        }
        grid.innerHTML = filtered.map(c => this.courseCard(c)).join('');
    }

    logout() {
        this.showToast('Deconnexion...', 'info');
        setTimeout(() => location.reload(), 1500);
    }

    showHelp() {
        this.openModal('Aide - LOU Academy',
            '<div style="line-height:1.8">' +
            '<h3 style="margin-bottom:12px">Bienvenue sur LOU Academy !</h3>' +
            '<p>Ce LMS vous permet de :</p>' +
            '<ul style="margin:12px 0 12px 20px">' +
            '<li><strong>Catalogue</strong> - Parcourir toutes les formations disponibles</li>' +
            '<li><strong>Mes formations</strong> - Suivre votre progression</li>' +
            '<li><strong>Creer une formation</strong> - Concevoir de nouveaux parcours</li>' +
            '<li><strong>Apprenants</strong> - Gerer les utilisateurs inscrits</li>' +
            '<li><strong>Rapports</strong> - Analyser les statistiques</li>' +
            '<li><strong>Certificats</strong> - Voir les certifications obtenues</li>' +
            '</ul>' +
            '<p>Utilisez la barre de recherche pour trouver rapidement une formation ou un apprenant.</p>' +
            '</div>'
        );
    }
}
