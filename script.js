document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Ensure the card is accessible via keyboard
        card.setAttribute('tabindex', '0');
        
        // Add ARIA label for screen readers describing the hover action
        card.setAttribute('aria-label', 'View project details. Hover or focus to see description.');

        // Optional: Add a subtle focus ring for keyboard users
        card.addEventListener('focus', () => {
            card.style.boxShadow = '0 0 0 4px rgba(128, 0, 0, 0.4)';
        });

        card.addEventListener('blur', () => {
            card.style.boxShadow = '';
        });

    });

    // --- DOM Selection ---
    const contactForm = document.getElementById('contact-form');
    const successContainer = document.getElementById('success-message');
    const resetBtn = document.getElementById('reset-btn');
    
    // Success text placeholders
    const successNameSpan = document.getElementById('success-name');
    const successEmailSpan = document.getElementById('success-email');

    // Form Inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Error Spans
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // --- Helper Function: Clear Errors ---
    const clearErrors = () => {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        contactForm.style.opacity = '1';
        contactForm.style.pointerEvents = 'auto';
    };

    // --- Helper Function: Show Error ---
    const showError = (element, message) => {
        element.textContent = message;
        // Optional: Highlight input red
        element.previousElementSibling.style.borderColor = '#d32f2f';
    };

    // --- Event Listener: Form Submit ---
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload
        clearErrors();

        let isValid = true;
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // 1. Validate Name
        if (name.length < 2) {
            showError(nameError, 'Name must be at least 2 characters.');
            isValid = false;
        }

        // 2. Validate Email (Simple Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(emailError, 'Please enter a valid email address.');
            isValid = false;
        }

        // 3. Validate Message
        if (message.length < 5) {
            showError(messageError, 'Message must be at least 5 characters.');
            isValid = false;
        }

        // If Valid: Show Success
        if (isValid) {
            // Simulate sending data (Async delay for realism)
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // DOM Manipulation: Hide Form, Show Success
                contactForm.classList.add('hidden');
                successContainer.classList.remove('hidden');

                // DOM Manipulation: Inject User Data
                successNameSpan.textContent = name;
                successEmailSpan.textContent = email;

                // Reset button state
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 1000); // 1 second fake delay
        }
    });

    // --- Event Listener: Reset Form ---
    resetBtn.addEventListener('click', () => {
        // DOM Manipulation: Hide Success, Show Form
        successContainer.classList.add('hidden');
        contactForm.classList.remove('hidden');

        // Reset Inputs
        contactForm.reset();
        clearErrors();
    });
});