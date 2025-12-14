// Performance and Error Handling
const ErrorHandler = {
    show(message) {
        const modal = document.getElementById('errorModal');
        const messageEl = document.getElementById('error-message');
        if (modal && messageEl) {
            messageEl.textContent = message;
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
        }
    },
    
    hide() {
        const modal = document.getElementById('errorModal');
        if (modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        }
    }
};

// Loading Screen Management
const LoadingScreen = {
    hide() {
        const loading = document.getElementById('loadingScreen');
        if (loading) {
            loading.classList.add('hidden');
            setTimeout(() => loading.remove(), 350);
        }
    }
};

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Backend-focused typing animation
        const typingText = document.getElementById('typingText');
        if (typingText) {
            const titles = ['Backend Engineer', 'Python Expert', 'System Architect', 'DevOps Engineer', 'Microservices Developer'];
            let currentIndex = 0;
            let currentText = '';
            let isDeleting = false;
            let isPaused = false;
            
            function typeWriter() {
                const fullText = titles[currentIndex];
                
                if (isPaused) {
                    isPaused = false;
                    setTimeout(typeWriter, 2000);
                    return;
                }
                
                if (isDeleting) {
                    currentText = fullText.substring(0, currentText.length - 1);
                } else {
                    currentText = fullText.substring(0, currentText.length + 1);
                }
                
                typingText.textContent = currentText;
                
                let typeSpeed = isDeleting ? 75 : 100;
                
                if (!isDeleting && currentText === fullText) {
                    isPaused = true;
                    isDeleting = true;
                } else if (isDeleting && currentText === '') {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % titles.length;
                    typeSpeed = 500;
                }
                
                setTimeout(typeWriter, typeSpeed);
            }
            
            setTimeout(typeWriter, 1000);
        }

        // Enhanced theme management
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');
        const currentTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (themeIcon) {
                themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }
            if (themeToggle) {
                themeToggle.setAttribute('aria-pressed', theme === 'dark');
            }
        }
        
        setTheme(currentTheme);
        
        themeToggle?.addEventListener('click', function() {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuToggle?.addEventListener('click', function() {
            const isActive = navLinks.classList.contains('active');
            navLinks.classList.toggle('active');
            this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            this.setAttribute('aria-expanded', !isActive);
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
                }
                
                // Close mobile menu
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                }
            });
        });

        // CTA button functionality
        const ctaPrimary = document.querySelector('.cta-primary');
        ctaPrimary?.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section;
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav
                navLinksElements.forEach(nav => nav.classList.remove('active'));
                const activeNav = document.querySelector(`[data-section="${sectionId}"]`);
                if (activeNav) {
                    activeNav.classList.add('active');
                }
            }
        });

        // Populate timeline (experience section)
        const timelineContent = document.getElementById('timelineContent');
        if (timelineContent && portfolioData?.experience) {
            portfolioData.experience.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.setAttribute('role', 'listitem');
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

        // Populate bento grid skills
        const skillCategories = [
            { key: 'languages', containerId: 'languagesSkills' },
            { key: 'backend', containerId: 'backendSkills' },
            { key: 'databases', containerId: 'databasesSkills' },
            { key: 'devops', containerId: 'devopsSkills' }
        ];
        
        skillCategories.forEach(category => {
            const container = document.getElementById(category.containerId);
            if (container && portfolioData?.skills?.[category.key]) {
                portfolioData.skills[category.key].forEach((skill, index) => {
                    const tag = document.createElement('div');
                    tag.className = 'skill-tag';
                    tag.style.setProperty('--tag-delay', index);
                    tag.setAttribute('role', 'listitem');
                    tag.innerHTML = `
                        <img src="${skill.icon}" alt="${skill.name}" width="16" height="16" style="filter: brightness(0) invert(1);">
                        <span>${skill.name}</span>
                    `;
                    container.appendChild(tag);
                });
            }
        });

        // Populate projects
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid && portfolioData?.projects) {
            portfolioData.projects.forEach((project, index) => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.setAttribute('role', 'listitem');
                card.innerHTML = `
                    <div class="project-header">
                        <div class="project-name">${project.name}</div>
                        <div class="project-tech">${project.tech}</div>
                    </div>
                    <div class="project-body">
                        <div class="project-desc">${project.description}</div>
                        ${project.metrics ? `<div class="project-metrics">${project.metrics}</div>` : ''}
                    </div>
                `;
                projectsGrid.appendChild(card);
            });
        }

        // Timeline active support
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all timeline items
                    document.querySelectorAll('.timeline-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    // Add active class to current item
                    entry.target.classList.add('active');
                }
            });
        }, { 
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0.5
        });

        // Observe timeline items for active state
        setTimeout(() => {
            document.querySelectorAll('.timeline-item').forEach(item => {
                timelineObserver.observe(item);
            });
        }, 500);

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        // Observe all animatable elements
        setTimeout(() => {
            document.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-item').forEach(el => {
                observer.observe(el);
            });
        }, 100);

        // Scroll spy to highlight active section
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
        }, { 
            root: null,
            rootMargin: '-80px 0px -50% 0px',
            threshold: 0
        });

        // Observe all sections for scroll spy
        contentSections.forEach(section => {
            scrollObserver.observe(section);
        });

        // Resume download with enhanced error handling
        function handleResumeDownload(e) {
            e.preventDefault();
            try {
                const resumeUrl = portfolioData?.personal?.resumeFile || 'Jeevan_Resume_14122025.pdf';
                console.log('Attempting to download resume:', resumeUrl);
                
                // Check if file exists by creating a test link
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = resumeUrl;
                link.target = '_blank';
                
                // Add to DOM, click, and remove
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log('Resume download initiated successfully');
            } catch (error) {
                console.error('Resume download error:', error);
                ErrorHandler.show('Sorry, the resume file is currently unavailable. Please contact me directly at reddyjeevan936@gmail.com');
            }
        }

        // Add click feedback to resume buttons
        function addResumeClickFeedback(button) {
            if (!button) return;
            
            button.addEventListener('click', function(e) {
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Show downloading message
                const originalText = this.textContent;
                this.textContent = 'Downloading...';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        }

        // Apply to all resume buttons
        document.getElementById('resumeBtn')?.addEventListener('click', handleResumeDownload);
        document.getElementById('heroResumeBtn')?.addEventListener('click', handleResumeDownload);
        
        addResumeClickFeedback(document.getElementById('resumeBtn'));
        addResumeClickFeedback(document.getElementById('heroResumeBtn'));

        // Error modal handling
        const errorModal = document.getElementById('errorModal');
        const errorClose = errorModal?.querySelector('.error-close');
        
        errorClose?.addEventListener('click', () => {
            ErrorHandler.hide();
        });
        
        errorModal?.addEventListener('click', (e) => {
            if (e.target === errorModal) {
                ErrorHandler.hide();
            }
        });

        // Enhanced timeline dot interaction
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('timeline-dot')) {
                // Remove active from all timeline items
                document.querySelectorAll('.timeline-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active to clicked item
                e.target.parentElement.classList.add('active');
                
                // Smooth scroll to center
                e.target.parentElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                }
                ErrorHandler.hide();
            }
        });

        console.log('Portfolio loaded successfully');

    } catch (error) {
        console.error('Portfolio initialization error:', error);
        ErrorHandler.show('Something went wrong loading the portfolio. Please refresh the page.');
        LoadingScreen.hide();
    }
});
