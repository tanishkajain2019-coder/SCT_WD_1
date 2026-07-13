// Document Element Selectors
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contactForm');

// 1. Fixed Navbar Scroll Handler
window.addEventListener('scroll', () => {
    // Adds background color blur class when scrolling past 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Interactive Client Side Form Handling Validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents layout flickering / raw refresh
        
        const nameInput = document.getElementById('name').value;
        
        // Target container to display custom verification state
        contactForm.innerHTML = `
            <div style="text-align: center; padding: 20px 0;">
                <div style="font-size: 3rem; color: #10b981; margin-bottom: 16px;">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <h3 style="color: #0f172a; margin-bottom: 8px;">Thank You, ${nameInput}!</h3>
                <p style="color: #64748b;">Your project inquiry has been logged successfully. Our team will read it soon.</p>
            </div>
        `;
    });
}