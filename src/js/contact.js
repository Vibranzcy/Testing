```javascript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', handleContactFormSubmit);
});

function handleContactFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your message has been sent successfully. We will get back to you soon.');
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
```