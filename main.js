// Smooth Scrolling for Navigation Links
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

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon
        const icon = mobileMenuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Newsletter Form Handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            // Show success message
            const button = newsletterForm.querySelector('button');
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.background = '#4CAF50';
            
            // Reset after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = '#FFD700';
                newsletterForm.reset();
            }, 2000);
        }
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(139, 21, 56, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '20px 0';
    }
    
    lastScroll = currentScroll;
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// Track product card clicks
document.querySelectorAll('.product-card, .style-card').forEach(card => {
    card.addEventListener('click', () => {
        // Add a subtle animation feedback
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Add hover effect sound feedback (visual feedback)
document.querySelectorAll('.cta-btn, .hero-cta-btn, .cta-large-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add floating animation to hero icons
const floatAnimation = () => {
    const featureItems = document.querySelectorAll('.feature-item i');
    featureItems.forEach((item, index) => {
        setInterval(() => {
            item.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
            }, 500);
        }, 2000 + (index * 300));
    });
};

// Call float animation after page load
window.addEventListener('load', floatAnimation);

// Add click tracking for affiliate links
document.querySelectorAll('a[href*="inr.deals"]').forEach(link => {
    link.addEventListener('click', () => {
        // Log click event (in production, this would send to analytics)
        console.log('Affiliate link clicked:', link.href);
        
        // Add visual feedback
        link.style.opacity = '0.7';
        setTimeout(() => {
            link.style.opacity = '1';
        }, 200);
    });
});

// Add gradient animation to badges
const animateBadges = () => {
    const badges = document.querySelectorAll('.product-badge.premium');
    badges.forEach(badge => {
        setInterval(() => {
            badge.style.backgroundPosition = '200% center';
            setTimeout(() => {
                badge.style.backgroundPosition = '0% center';
            }, 1000);
        }, 3000);
    });
};

window.addEventListener('load', animateBadges);

// Performance optimization: Remove animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('low-performance');
}

// Add testimonial rotation effect
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialCards.length > 0) {
    setInterval(() => {
        testimonialCards.forEach((card, index) => {
            if (index === currentTestimonial) {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 25px 60px rgba(139, 21, 56, 0.25)';
            } else {
                card.style.transform = '';
                card.style.boxShadow = '';
            }
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    }, 4000);
}

// Console message for developers
console.log('%c🎩 Burgundy Wedding Suits 🎩', 'font-size: 20px; font-weight: bold; color: #8B1538;');
console.log('%cPromoting premium BlackBerrys blazers', 'font-size: 14px; color: #FFD700;');
console.log('%cAffiliate Link: https://inr.deals/PXU1Y6', 'font-size: 12px; color: #666;');
