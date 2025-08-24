// ===========================
// AJAY KUMAR YEGIREDDI - PERSONAL WEBSITE
// Interactive Elements & Animations
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .stat-card, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 100) {
                if (isDarkMode) {
                    navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                }
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                if (isDarkMode) {
                    navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Service Card Click Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Parallax Effect for Floating Shapes
    const floatingShapes = document.querySelectorAll('.floating-shape');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        floatingShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Typing Effect for Hero Title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            
            setTimeout(() => {
                typeWriter(line, text, 0, 100);
            }, index * 800);
        });
    }

    // Typewriter Effect Function
    function typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => {
                typeWriter(element, text, i + 1, speed);
            }, speed);
        }
    }

    // Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/\D/g, ''));
                animateCounter(target, 0, finalNumber, 2000);
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (element.textContent.includes('K')) {
                element.textContent = (current / 1000).toFixed(1) + 'K+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Add loading animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href && this.href.includes('#')) {
                // Internal link, don't show loading
                return;
            }
            
            // Show loading state
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Loading...';
            this.style.pointerEvents = 'none';
            
            // Reset after 2 seconds (simulate loading)
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('button, .cta-primary, .cta-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Console welcome message
    console.log('%c🚀 Welcome to Ajay Kumar Yegireddi\'s Website!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
    console.log('%c💡 Check out the source code and get inspired!', 'color: #10b981; font-size: 14px;');
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
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
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style); 