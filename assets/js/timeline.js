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
    // Typing animation for hero subtitle
    const typingText = document.getElementById('typingText');
    const titles = ['Backend Engineer', 'System Architect', 'Python Expert'];
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function typeWriter() {
        const fullText = titles[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        typingText.textContent = currentText;
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && currentText === fullText) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % titles.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    setTimeout(typeWriter, 1000);

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

    // CTA button functionality
    document.querySelector('.cta-primary').addEventListener('click', function(e) {
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

    // Populate bento grid skills
    const skillCategories = [
        { key: 'languages', containerId: 'languagesSkills' },
        { key: 'backend', containerId: 'backendSkills' },
        { key: 'databases', containerId: 'databasesSkills' },
        { key: 'devops', containerId: 'devopsSkills' }
    ];
    
    skillCategories.forEach(category => {
        const container = document.getElementById(category.containerId);
        if (container && portfolioData.skills[category.key]) {
            portfolioData.skills[category.key].forEach((skill, index) => {
                const tag = document.createElement('div');
                tag.className = 'skill-tag';
                tag.style.animationDelay = `${index * 0.1}s`;
                tag.innerHTML = `
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                `;
                container.appendChild(tag);
            });
        }
    });

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

    // Enhanced Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.1, 0.5, 1]
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.skill-tag, .contact-item, .timeline-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .project-card, .contact-item, .animate-on-scroll'
    );
    
    animatableElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Parallax effect for hero section
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            const yPos = scrolled * 0.5;
            heroContent.style.transform = `translateY(${yPos}px)`;
        }
        
        ticking = false;
    }
    
    function requestParallax() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallax, { passive: true });

    // Enhanced navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10), { passive: true });

    // Magnetic effect for buttons
    function addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    }
    
    // Apply magnetic effect to CTA buttons
    document.querySelectorAll('.cta-primary, .cta-secondary, .contact-primary').forEach(addMagneticEffect);

    // Smooth reveal animation for sections
    function revealSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const elements = section.querySelectorAll('.timeline-item, .skill-category, .project-card, .contact-item');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 150);
        });
    }

    // Enhanced navigation with smooth animations
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class with animation
            navLinksElements.forEach(nav => {
                nav.classList.remove('active');
                nav.style.transform = 'scale(1)';
            });
            
            // Add active class with animation
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Scroll to section with custom easing
            const sectionId = this.dataset.section;
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Trigger section reveal animation
                setTimeout(() => revealSection(sectionId), 300);
            }
            
            // Close mobile menu with animation
            if (navLinks.classList.contains('active')) {
                navLinks.style.transform = 'translateY(-10px)';
                navLinks.style.opacity = '0';
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    navLinks.style.transform = '';
                    navLinks.style.opacity = '';
                }, 200);
            }
            mobileMenuToggle.textContent = '☰';
        });
    });

    // Enhanced mobile menu animation
    mobileMenuToggle?.addEventListener('click', function() {
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            // Close animation
            navLinks.style.transform = 'translateY(-10px)';
            navLinks.style.opacity = '0';
            setTimeout(() => {
                navLinks.classList.remove('active');
                navLinks.style.transform = '';
                navLinks.style.opacity = '';
            }, 200);
            this.textContent = '☰';
        } else {
            // Open animation
            navLinks.classList.add('active');
            navLinks.style.transform = 'translateY(-10px)';
            navLinks.style.opacity = '0';
            setTimeout(() => {
                navLinks.style.transform = 'translateY(0)';
                navLinks.style.opacity = '1';
            }, 10);
            this.textContent = '✕';
        }
        
        this.setAttribute('aria-expanded', !isActive);
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Apply ripple effect to buttons
    document.querySelectorAll('.cta-primary, .cta-secondary, .nav-resume, .contact-primary').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Add CSS for ripple effect
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Initial animation for all sections
    setTimeout(() => {
        triggerSectionAnimations('about');
        triggerSectionAnimations('experience');
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

    document.getElementById('heroResumeBtn').addEventListener('click', function(e) {
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

    // Resume download with error handling
    function handleResumeDownload(e) {
        e.preventDefault();
        try {
            const resumeUrl = portfolioData.personal.resumeFile;
            if (!resumeUrl) {
                throw new Error('Resume file not found');
            }
            window.open(resumeUrl, '_blank');
        } catch (error) {
            ErrorHandler.show('Sorry, the resume file is currently unavailable. Please contact me directly.');
        }
    }

    document.getElementById('resumeBtn')?.addEventListener('click', handleResumeDownload);
    document.getElementById('heroResumeBtn')?.addEventListener('click', handleResumeDownload);

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            if (loadTime > 3000) {
                console.warn('Slow page load detected:', loadTime + 'ms');
            }
        });
    }

    // Hide loading screen
    setTimeout(() => {
        LoadingScreen.hide();
    }, 500);

    } catch (error) {
        console.error('Portfolio initialization error:', error);
        ErrorHandler.show('Something went wrong loading the portfolio. Please refresh the page.');
        LoadingScreen.hide();
    }
});
