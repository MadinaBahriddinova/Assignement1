document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to section
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // Handle form submission (e.g., send data to server or display a message)
        console.log(name, email, message);
        contactForm.reset(); // Reset form after submission
    });
});

function scrollToSection(section) {
    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
    });
}

