```javascript
// Main JavaScript file for the True Dream Website

// DOM Elements
const navMenu = document.getElementById('navMenu');
const ctaButton = document.getElementById('ctaButton');

// Event Listeners
navMenu.addEventListener('click', handleNavMenuToggle);
ctaButton.addEventListener('click', handleCTAClick);

// Function to handle navigation menu toggle
function handleNavMenuToggle() {
    navMenu.classList.toggle('active');
}

// Function to handle call to action button click
function handleCTAClick() {
    window.location.href = '/services';
}
```