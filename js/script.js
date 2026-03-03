// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== MOBILE MENU TOGGLE =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger icon with animation
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                icon.style.transform = 'rotate(90deg)';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    }
    
    // ===== CLOSE MENU ON LINK CLICK (MOBILE) =====
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== ACTIVE LINK HIGHLIGHTING ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLink.classList.add('active');
                }
            } else {
                if (navLink) {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll(
        '.card, .content-card, .backend-card, .uiux-card, ' +
        '.mobile-card, .deployment-card, .tool-card, ' +
        '.project-card, .resource-card, .roadmap-step, ' +
        '.language-detailed-card, .tech-card, .framework-detailed-card, ' +
        '.language-card, .database-card, .api-card, .server-card, ' +
        '.principle-card, .color-card, .type-card, .layout-card, ' +
        '.ux-card, .tool-showcase-card, .platform-card, .cross-card, ' +
        '.guide-card, .hosting-card, .cicd-card, .domain-card, ' +
        '.tool-detailed-card, .roadmap-detailed-step, .specialization-card'
    );
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 8px 32px rgba(0, 30, 60, 0.08)';
            navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 30, 60, 0.15)';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== ADD ACTIVE CLASS TO CURRENT PAGE IN NAV =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-menu a');
    
    navItems.forEach(item => {
        const itemHref = item.getAttribute('href').split('/').pop();
        if (itemHref === currentPage) {
            item.classList.add('active');
        }
    });
    
    // ===== ADD HOVER EFFECTS TO CARDS =====
    const cards = document.querySelectorAll('.card, .language-detailed-card, .tech-card, .framework-detailed-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transition = 'transform 0.5s ease';
            }
        });
    });
    
    // ===== ANIMATE NUMBERS IN SALARY RANGES =====
    const salaryElements = document.querySelectorAll('.salary-range');
    
    salaryElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // ===== ADD PARALLAX EFFECT TO PAGE HEADERS =====
    const pageHeaders = document.querySelectorAll('.page-header');
    
    window.addEventListener('scroll', () => {
        pageHeaders.forEach(header => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition < 500) {
                header.style.backgroundPosition = `50% ${scrollPosition * 0.5}px`;
            }
        });
    });
});