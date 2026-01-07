document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const logoMain = document.querySelector('.logo-main');
    const logoTagline = document.querySelector('.logo-tagline');
    const logoContainer = document.querySelector('.logo-container');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            logoTagline.style.opacity = '0.7';
            logoMain.style.fontSize = '24px';
            logoTagline.style.fontSize = '10px';
            logoContainer.style.alignItems = 'center';
        } else {
            header.classList.remove('scrolled');
            logoTagline.style.opacity = '1';
            logoMain.style.fontSize = '28px';
            logoTagline.style.fontSize = '12px';
            logoContainer.style.alignItems = 'flex-start';
        }
        if (window.innerWidth <= 768) {
            logoContainer.style.alignItems = 'center';
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mobileNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        scrollToTopBtn.classList.toggle('active', window.scrollY > 300);
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Product animation on scroll
    const products = document.querySelectorAll('.product');
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    products.forEach(product => productObserver.observe(product));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
