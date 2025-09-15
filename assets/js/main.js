// Main JavaScript for Bali Surf Lesson

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bali Surf Lesson JavaScript loaded!');
    
    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            console.log('Mobile menu toggled');
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on menu items
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }

    // Set active menu based on current page
    function setActiveMenu() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
                link.classList.add('active');
            } else if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Initialize active menu
    setActiveMenu();
    
    console.log('Header initialized successfully!');
});


