// Interactive JavaScript for Jake Compendio's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                const endpoint = 'https://script.google.com/macros/s/AKfycbzhLkv21yzdvPmSx1Pet-4jZKhKEnsk5WLmGYBKPd45NJL0iwNqbFejWrNh0CJThCL9fA/exec';
                await fetch(endpoint, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    mode: 'no-cors'
                });

                if (formStatus) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'text-center text-sm font-medium mt-2 text-green-400 block';
                }
                contactForm.reset();
            } catch (err) {
                if (formStatus) {
                    formStatus.textContent = 'Thanks for your message!';
                    formStatus.className = 'text-center text-sm font-medium mt-2 text-green-400 block';
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            }
        });
    }
});
