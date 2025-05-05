document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .team-card, .value-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
                
                // Add staggered delay for team cards
                if (element.classList.contains('team-card')) {
                    const delay = parseInt(element.getAttribute('data-delay')) || 0;
                    element.style.transitionDelay = `${0.1 * delay}s`;
                }
            }
        });
    }
    
    // Run animation check on page load
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effect for team cards
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.social-links').style.bottom = '0';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.social-links').style.bottom = '-50px';
        });
    });
});