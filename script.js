// Puja R Portfolio - Interactive Controller & Modal Engine

const projectsData = {
    1: {
        badge: "🥇 1st Place NIT Hackathon Winner",
        title: "AGRIHIVE — AI Powered Smart Agriculture",
        tags: ["Python", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "SQLAlchemy", "SQLite", "SHAP"],
        description: "An AI-powered smart agriculture platform designed for crop monitoring, plant disease prediction, and personalized farming recommendations. AGRIHIVE empowers farmers with data-driven decision-making to optimize yield and reduce crop losses.",
        features: [
            "Implemented Random Forest and Federated Learning for privacy-focused predictive analysis.",
            "Integrated Particle Swarm Optimization (PSO) and SHAP (SHapley Additive exPlanations) for AI model transparency.",
            "Built high-performance REST APIs with FastAPI and SQLite database for real-time crop health telemetry.",
            "Awarded First Place in the competitive NIT Hackathon out of dozens of top engineering teams."
        ],
        github: "https://github.com/PujaRaj356"
    },
    2: {
        badge: "❤️ Real-Time Web Application",
        title: "Blood Donation Web App",
        tags: ["React.js", "JavaScript", "HTML/CSS", "MySQL", "REST API"],
        description: "A real-time donor tracking platform created to eliminate critical delays during medical emergencies by matching blood seekers with compatible nearby donors instantly.",
        features: [
            "Real-time donor search algorithms with blood-group matching and regional proximity filtering.",
            "Instant emergency request broadcasting alerts sent to nearby active registered donors.",
            "Interactive dashboard for managing donor availability, blood bank inventories, and request logs.",
            "Robust relational database architecture using MySQL and RESTful endpoints."
        ],
        github: "https://github.com/PujaRaj356"
    },
    3: {
        badge: "🔒 ML & Network Security",
        title: "Federated Learning Network Intrusion Detection (NIDS)",
        tags: ["Python", "Machine Learning", "Scikit-learn", "Federated Learning", "Network Security", "NIDS"],
        description: "A privacy-preserving Machine Learning Intrusion Detection System built to classify network traffic flows as normal or malicious without exposing raw sensitive telemetry data.",
        features: [
            "Collaborative model training across distributed network nodes using Federated Learning frameworks.",
            "High-accuracy classification of network flow features to detect DDoS attacks, port scans, and malicious traffic.",
            "Privacy-first architecture ensuring zero raw log transfer across central servers.",
            "Thorough model evaluation against standard intrusion detection benchmark datasets."
        ],
        github: "https://github.com/PujaRaj356"
    }
};

// Global function to open project modal
window.openProjectModal = function(id) {
    const project = projectsData[id];
    if (!project) return;

    const modalContent = document.getElementById('modalContent');
    const modalBackdrop = document.getElementById('modalBackdrop');

    if (modalContent && modalBackdrop) {
        modalContent.innerHTML = `
            <span class="modal-header-badge">${project.badge}</span>
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-tech-stack">
                ${project.tags.map(t => `<span class="modal-tech-chip">${t}</span>`).join('')}
            </div>
            <p class="modal-description">${project.description}</p>
            <ul class="modal-feature-list">
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="modal-actions">
                <a href="${project.github}" target="_blank" class="btn-modal-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    View Code on GitHub
                </a>
            </div>
        `;
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Global function to open contact modal
window.openContactModal = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const modalContent = document.getElementById('modalContent');
    const modalBackdrop = document.getElementById('modalBackdrop');

    if (modalContent && modalBackdrop) {
        modalContent.innerHTML = `
            <span class="modal-header-badge" style="background-color: var(--accent-terracotta); color: white;">📬 Get In Touch</span>
            <h2 class="modal-title">Contact Puja R</h2>
            <p class="modal-description">Feel free to reach out for software engineering roles, AI projects, or collaboration opportunities!</p>
            
            <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; font-size: 1.05rem;">
                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">✉️</span>
                    <div>
                        <strong>Email:</strong> 
                        <a href="mailto:pujarangaraj356@gmail.com" style="color: var(--accent-terracotta); font-weight: 700;">pujarangaraj356@gmail.com</a>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">📞</span>
                    <div>
                        <strong>Phone:</strong> 
                        <a href="tel:9894106562" style="color: var(--text-dark); font-weight: 700;">+91 9894106562</a>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">📍</span>
                    <div>
                        <strong>Location:</strong> Coimbatore, Tamil Nadu, India
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">🌐</span>
                    <div>
                        <strong>LinkedIn:</strong> 
                        <a href="https://linkedin.com/in/puja-raj-663600339/" target="_blank" style="color: var(--accent-terracotta); font-weight: 700;">puja-raj-663600339</a>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">💻</span>
                    <div>
                        <strong>GitHub:</strong> 
                        <a href="https://github.com/PujaRaj356" target="_blank" style="color: var(--accent-terracotta); font-weight: 700;">github.com/PujaRaj356</a>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 0.8rem;">
                    <span style="font-size: 1.4rem;">🧩</span>
                    <div>
                        <strong>LeetCode:</strong> 
                        <a href="https://leetcode.com/u/PujaRaj0305/" target="_blank" style="color: var(--accent-terracotta); font-weight: 700;">leetcode.com/u/PujaRaj0305</a>
                    </div>
                </div>
            </div>

            <div class="modal-actions" style="margin-top: 1.8rem;">
                <a href="mailto:pujarangaraj356@gmail.com" class="btn-modal-link">
                    ✉️ Send Direct Email
                </a>
                <button onclick="navigator.clipboard.writeText('pujarangaraj356@gmail.com'); alert('Email address copied to clipboard!');" class="btn-modal-link" style="background-color: var(--bg-dark-green); cursor: pointer; border: none;">
                    📋 Copy Email
                </button>
            </div>
        `;
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Global function to close modal
window.closeProjectModal = function() {
    const modalBackdrop = document.getElementById('modalBackdrop');
    if (modalBackdrop) {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Intercept any href="#contact" links to open contact modal directly
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openContactModal(e);
        });
    });

    // ESC key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    /* ==========================================================================
       1. RELIABLE CUSTOM GLOW CURSOR & FOLLOWER ENGINE
       ========================================================================== */
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');

    if (cursor && follower) {
        let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
        let followerX = mouseX, followerY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.18;
            followerY += (mouseY - followerY) * 0.18;
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        const interactiveElements = document.querySelectorAll('a, button, .project-card, .exp-card, .hobby-item, .pill-tag');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '55px';
                follower.style.height = '55px';
                follower.style.backgroundColor = 'rgba(244, 163, 40, 0.18)';
                follower.style.borderColor = 'var(--primary-orange)';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '40px';
                follower.style.height = '40px';
                follower.style.backgroundColor = 'transparent';
                follower.style.borderColor = 'var(--primary-orange)';
            });
        });
    }

    /* ==========================================================================
       2. SCROLL REVEAL OBSERVER
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       3. PARALLAX SCROLL SHIFT
       ========================================================================== */
    const strokeWaves = document.querySelectorAll('.stroke-title');
    const watermarkTexts = document.querySelectorAll('.watermark-parallax div');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        strokeWaves.forEach((wave, index) => {
            const speed = (index + 1) * 0.15;
            wave.style.transform = `translateX(${scrolled * speed * 0.2}px)`;
        });

        watermarkTexts.forEach((text, index) => {
            const speed = (index + 1) * 0.1;
            text.style.transform = `translateX(${-scrolled * speed * 0.15}px)`;
        });
    });

    /* ==========================================================================
       4. 3D TILT EFFECT FOR CARDS
       ========================================================================== */
    const tiltCards = document.querySelectorAll('.hover-tilt, .project-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    /* ==========================================================================
       5. BACK TO TOP
       ========================================================================== */
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('Puja R Portfolio Dynamic Engine Initialized!');
});
