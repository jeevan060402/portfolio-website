document.addEventListener('DOMContentLoaded', function() {
    // Theme management
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Navigation functionality
    const navLinksElements = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinksElements.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to corresponding section
            const sectionId = this.dataset.section;
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Trigger animations for the section
                triggerSectionAnimations(sectionId);
            }
            
            // Close mobile menu
            navLinks.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        });
    });

    // Populate timeline (experience section)
    const timelineContent = document.getElementById('timelineContent');
    if (timelineContent) {
        portfolioData.experience.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content-box">
                    <div class="timeline-title">${exp.title}</div>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.period}</div>
                    <div class="timeline-desc">${exp.description}</div>
                </div>
            `;
            timelineContent.appendChild(item);
        });
    }

    // Populate skills
    const skillsTimeline = document.getElementById('skillsTimeline');
    if (skillsTimeline) {
        portfolioData.skills.forEach((skill, index) => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">${skill.level}%</div>
            `;
            skillsTimeline.appendChild(card);
        });
    }

    // Populate projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        portfolioData.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-header">
                    <div class="project-name">${project.name}</div>
                    <div class="project-tech">${project.tech}</div>
                </div>
                <div class="project-body">
                    <div class="project-desc">${project.description}</div>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    // Function to trigger animations for specific sections
    function triggerSectionAnimations(sectionId) {
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            // Animate timeline items
            if (sectionId === 'experience') {
                section.querySelectorAll('.timeline-item').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
            }

            // Animate skill cards
            if (sectionId === 'skills') {
                section.querySelectorAll('.skill-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100);
                });
            }

            // Animate project cards
            if (sectionId === 'projects') {
                section.querySelectorAll('.project-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150);
                });
            }
        }, 100);
    }

    // Initial animation for all sections
    setTimeout(() => {
        triggerSectionAnimations('about');
        triggerSectionAnimations('experience');
        triggerSectionAnimations('skills');
        triggerSectionAnimations('projects');
    }, 500);

    // Scroll spy to highlight active section
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinksElements.forEach(nav => nav.classList.remove('active'));
                const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeNav) {
                    activeNav.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections for scroll spy
    contentSections.forEach(section => {
        scrollObserver.observe(section);
    });

    // Resume download
    document.getElementById('resumeBtn').addEventListener('click', function(e) {
        e.preventDefault();
        window.open(portfolioData.personal.resumeFile, '_blank');
    });

    // Smooth scrolling for timeline dots
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('timeline-dot')) {
            e.target.parentElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(`[data-section="${hash}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    });

    // Update URL when section changes
    navLinksElements.forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            history.pushState(null, null, `#${sectionId}`);
        });
    });

    // Handle initial page load with hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        const targetLink = document.querySelector(`[data-section="${initialHash}"]`);
        if (targetLink) {
            setTimeout(() => targetLink.click(), 100);
        }
    }
});
