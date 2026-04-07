// Premium Barbershop Interactions

const translations = {
    qr: {
        nav_about: "Biz haqımızda",
        nav_services: "Xızmetler",
        nav_masters: "Ustalar",
        nav_contacts: "Kontaktlar",
        btn_booking: "Onlayn jazılıw",
        hero_title: "BlackKalpak BARBERSHOP",
        hero_desc: "Nókistegi premium dárejedegi erler sartaroshxanasi. Tek professionallar, tek sıpat.",
        hero_btn_services: "Xızmetler",
        hero_btn_barbados: "Barbados",
        hero_btn_login: "Kirisiw",
        about_title: "Atmosfera hám Sıpat",
        about_desc: "BlackKalpak — bul shúshaki sartaroshxona emes, bul erler klubı. Bul jerde siz joqarı dárejedegi xızmet, professional ustalar hám haqıyqıy erler atmosferasınan bahramand bolasız.",
        about_list_1: "Premium kosmetika mahsullari",
        about_list_2: "Professional hám tájiriybeli ustalar",
        about_list_3: "Sıpatlı xızmet hám qolaylı sharayat",
        services_title: "Bizdiń Xızmetler",
        service_1_name: "Erler shash jasawı",
        service_1_desc: "Konkret hám zamanagóy kórinis ushın",
        service_2_name: "Saqal hám murıt kútimi",
        service_2_desc: "Ideal forma hám kútim",
        service_3_name: "Kompleks (Shash + Saqal)",
        service_3_desc: "Tolıq paket hám arnawlı usınıs",
        service_4_name: "Balalar shash jasawı",
        service_4_desc: "Kishkene miymanlarımız ushın",
        masters_title: "Bizdiń Ustalar",
        footer_addr: "Nókis qalası, Shota Rustaveli kóshesi, 57",
        footer_hours: "Is waqtı: 10:00 - 22:00",
        footer_links_title: "Tezkor siltemeler",
        footer_social_title: "Bizdi baqlap barıń"
    },
    ru: {
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_masters: "Мастера",
        nav_contacts: "Контакты",
        btn_booking: "Онлайн запись",
        hero_title: "BlackKalpak BARBERSHOP",
        hero_desc: "Премиальный барбершоп в Ташкенте. Только профессионалы, только качество.",
        hero_btn_services: "Услуги",
        hero_btn_barbados: "Барбадос",
        hero_btn_login: "Войти",
        about_title: "Атмосфера и Качество",
        about_desc: "BlackKalpak — это не просто барбершоп, это мужской клуб. Здесь вы насладитесь высококлассным сервисом и истинно мужской атмосферой.",
        about_list_1: "Премиальная косметика",
        about_list_2: "Профессиональные мастера",
        about_list_3: "Качественный сервис и комфорт",
        services_title: "Наши Услуги",
        service_1_name: "Мужская стрижка",
        service_1_desc: "Для конкретного и современного образа",
        service_2_name: "Уход за бородой и усами",
        service_2_desc: "Идеальная форма и уход",
        service_3_name: "Комплекс (Стрижка + Борода)",
        service_3_desc: "Полный пакет и спецпредложение",
        service_4_name: "Детская стрижка",
        service_4_desc: "Для наших маленьких гостей",
        masters_title: "Наши Мастера",
        footer_addr: "г. Ташкент, ул. Шота Руставели, 57",
        footer_hours: "Время работы: 10:00 - 22:00",
        footer_links_title: "Быстрые ссылки",
        footer_social_title: "Мы в соцсетях"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const langQr = document.getElementById('lang-qr');
    const langRu = document.getElementById('lang-ru');

    // Hide Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 5000); // 5 seconds for ultimate premium feel
        }
    });

    // User Session Management
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userDisplay = document.getElementById('user-display');
    const authActions = document.getElementById('auth-actions');
    const userNameEl = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        userDisplay.style.display = 'flex';
        authActions.style.display = 'none';
        userNameEl.innerText = currentUser.name;
        
        if (currentUser.role === 'admin') {
            const adminNavLink = document.getElementById('admin-nav-link');
            if (adminNavLink) adminNavLink.style.display = 'block';
        }
    }

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.reload();
    });

    // Language Toggle
    function setLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
        document.getElementById('lang-qr').classList.toggle('active', lang === 'qr');
        document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
        localStorage.setItem('preferredLang', lang);
    }

    if (langQr) langQr.addEventListener('click', () => setLanguage('qr'));
    if (langRu) langRu.addEventListener('click', () => setLanguage('ru'));
    setLanguage(localStorage.getItem('preferredLang') || 'qr');

    // Default Data Initialization
    if (!localStorage.getItem('services')) {
        localStorage.setItem('services', JSON.stringify([
            { id: 1, name: "Erler shash jasawı", desc: "Konkret hám zamanagóy kórinis ushın", price: "150 000 sum" },
            { id: 2, name: "Saqal hám murıt kútimi", desc: "Ideal forma hám kútim", price: "100 000 sum" },
            { id: 3, name: "Kompleks (Shash + Saqal)", desc: "Tolıq paket hám arnawlı usınıs", price: "220 000 sum" },
            { id: 4, name: "Balalar shash jasawı", desc: "Kishkene miymanlarımız ushın", price: "80 000 sum" }
        ]));
    }

    if (!localStorage.getItem('masters')) {
        localStorage.setItem('masters', JSON.stringify([
            { id: 1, name: "Jasurbek", role: "Top Master", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop" },
            { id: 2, name: "Sardor", role: "Brand Master", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop" },
            { id: 3, name: "Doniyor", role: "Barber", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" }
        ]));
    }

    if (!localStorage.getItem('gallery')) {
        localStorage.setItem('gallery', JSON.stringify([
            { id: 1, image: "https://images.unsplash.com/photo-1593702295094-272a9f44503f?q=80&w=1000&auto=format&fit=crop" },
            { id: 2, image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1000&auto=format&fit=crop" },
            { id: 3, image: "https://images.unsplash.com/photo-1622286332618-f27bd7f1c719?q=80&w=1000&auto=format&fit=crop" },
            { id: 4, image: "https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=1000&auto=format&fit=crop" },
            { id: 5, image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop" },
            { id: 6, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop" }
        ]));
    }

    // Render Data on Index Page
    const dynServices = document.getElementById('dynamic-services');
    const dynMasters = document.getElementById('dynamic-masters');
    const dynGallery = document.getElementById('dynamic-gallery');
    const bookValSvc = document.getElementById('book-service');
    const bookValMst = document.getElementById('book-master');

    const services = JSON.parse(localStorage.getItem('services') || '[]');
    const masters = JSON.parse(localStorage.getItem('masters') || '[]');
    const galleryItems = JSON.parse(localStorage.getItem('gallery') || '[]');

    if (dynServices) {
        dynServices.innerHTML = services.map(s => `
            <div class="service-card">
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <span class="price">${s.price}</span>
            </div>
        `).join('');
    }

    if (dynMasters) {
        dynMasters.innerHTML = masters.map((m, i) => `
            <div class="master-card fade-up delay-${i}">
                <div class="master-img">
                    <img src="${m.image}" alt="Master ${m.name}">
                </div>
                <h3>${m.name}</h3>
                <p>${m.role}</p>
            </div>
        `).join('');
    }

    if (dynGallery) {
        dynGallery.innerHTML = galleryItems.map(item => `
            <div class="gallery-item fade-up">
                <img src="${item.image}" alt="Work Photo">
            </div>
        `).join('');
    }

    if (bookValSvc) {
        bookValSvc.innerHTML = services.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
    }

    if (bookValMst) {
        bookValMst.innerHTML = masters.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    }

    // Modal Elements Safe Selectors
    const bookingModal = document.getElementById('booking-modal');
    const reviewModal = document.getElementById('review-modal');
    
    // Global Event Delegation for Clicks (Most robust method)
    document.body.addEventListener('click', (e) => {
        // 1. Booking Trigger
        const bookBtn = e.target.closest('.trigger-booking');
        if (bookBtn) {
            e.preventDefault();
            if (!currentUser) {
                alert('Iltimos, dáslep dizimnen ótiń!');
                window.location.href = 'auth.html';
                return;
            }
            if (bookingModal) {
                bookingModal.style.display = 'flex';
                // Auto-fill phone if available
                const phoneInput = document.getElementById('book-phone');
                if (phoneInput && currentUser.phone) {
                    phoneInput.value = currentUser.phone;
                }
            }
        }

        // 2. Close logic for ALL modals (X buttons)
        if (e.target.classList.contains('close-modal')) {
            const modal = e.target.closest('.modal');
            if (modal) modal.style.display = 'none';
        }

        // 3. Mark all notifications as read when opening panel
        if (e.target.id === 'noti-btn' || e.target.closest('#noti-btn')) {
            e.stopPropagation();
            if (notiPanel) {
                notiPanel.classList.toggle('active');
                const nt = JSON.parse(localStorage.getItem('notifications') || '[]');
                nt.forEach(n => { if (n.email === currentUser?.email) n.read = true; });
                localStorage.setItem('notifications', JSON.stringify(nt));
                updateNotifications();
            }
        }
    });

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) bookingModal.style.display = 'none';
        if (e.target === reviewModal) reviewModal.style.display = 'none';
    });

    // Review Logic
    const addReviewBtn = document.getElementById('add-review-btn');
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.getElementById('reviews-container');

    function updateReviewsUI() {
        if (!reviewsContainer) return;
        const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        if (reviews.length === 0) {
            reviewsContainer.innerHTML = '<p style="text-align:center; width:100%; color:#666;">Hozircha fikrlar yo\'q.</p>';
            return;
        }
        reviewsContainer.innerHTML = reviews.map(r => `
            <div class="review-card fade-up visible">
                <div class="rev-header">
                    <span class="rev-name">${r.userName}</span>
                    <span class="rev-rating">${'⭐'.repeat(r.rating)}</span>
                </div>
                <p style="font-size: 14px; color: #aaa; line-height: 1.4;">${r.text}</p>
                <small style="color:#555; display:block; margin-top:10px;">${r.time}</small>
            </div>
        `).join('');
    }

    if (addReviewBtn) {
        addReviewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                alert('Iltimos, dáslep dizimnen ótiń!');
                window.location.href = 'auth.html';
                return;
            }
            if (reviewModal) reviewModal.style.display = 'flex';
        });
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const rating = document.getElementById('rev-rating').value;
            const text = document.getElementById('rev-text').value;

            const review = {
                userName: currentUser.name,
                rating,
                text,
                time: new Date().toLocaleDateString()
            };

            const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
            reviews.unshift(review);
            localStorage.setItem('reviews', JSON.stringify(reviews));

            alert('Pikirińiz ushın raxmet!');
            if (reviewModal) reviewModal.style.display = 'none';
            reviewForm.reset();
            updateReviewsUI();
        });
    }

    updateReviewsUI();

    // Booking Submission Logic
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const service = document.getElementById('book-service').value;
            const master = document.getElementById('book-master').value;
            const time = document.getElementById('book-time').value;
            const phone = document.getElementById('book-phone').value;

            const booking = {
                id: Date.now(),
                userEmail: currentUser.email,
                userName: currentUser.name,
                userPhone: phone,
                service,
                master,
                time,
                status: 'pending'
            };

            const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
            bookings.push(booking);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            addNotification(currentUser.email, `Sizdiń "${service}" ushın buyırtpańız qabıllandı. Tastıyıqlanıwın kútiń.`);
            
            alert('Buyırtpa qabıllandı! Adminga xabar jiberildi.');
            if (bookingModal) bookingModal.style.display = 'none';
            updateNotifications();
        });
    }

    const notiPanel = document.getElementById('noti-panel');
    const notiList = document.getElementById('noti-list');
    const notiBadge = document.getElementById('noti-badge');

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#noti-panel') && !e.target.closest('#noti-btn')) {
            if (notiPanel) notiPanel.classList.remove('active');
        }
    });

    function addNotification(email, msg) {
        const nt = JSON.parse(localStorage.getItem('notifications') || '[]');
        nt.unshift({ email, msg, time: new Date().toLocaleTimeString(), read: false });
        localStorage.setItem('notifications', JSON.stringify(nt));
    }

    function updateNotifications() {
        if (!currentUser || !notiBadge || !notiList) return;
        const nt = JSON.parse(localStorage.getItem('notifications') || '[]');
        const userNt = nt.filter(n => n.email === currentUser.email);
        
        const unreadCount = userNt.filter(n => !n.read).length;
        notiBadge.innerText = unreadCount;
        notiBadge.style.display = unreadCount > 0 ? 'block' : 'none';

        if (userNt.length > 0) {
            notiList.innerHTML = userNt.map(n => `
                <div class="noti-item ${n.read ? '' : 'new'}">
                    <p>${n.msg}</p>
                    <small>${n.time}</small>
                </div>
            `).join('');
        } else {
            notiList.innerHTML = '<p style="color: #666; font-size: 14px; padding: 10px;">Yangi xabarlar yo\'q</p>';
        }
    }

    updateNotifications();

    // Safe Scroll Reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.section-title, .service-card, .master-card, .gallery-item, .glass-card, .about-images, .review-card, .map-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });
});
