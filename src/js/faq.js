```javascript
document.addEventListener('DOMContentLoaded', loadFaqItems);

function loadFaqItems() {
    fetch('/faq')
        .then(response => response.json())
        .then(data => displayFaqItems(data))
        .catch(error => console.error('Error:', error));
}

function displayFaqItems(faqItems) {
    const faqContainer = document.getElementById('faqContainer');
    faqItems.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const question = document.createElement('h3');
        question.textContent = item.question;
        faqItem.appendChild(question);

        const answer = document.createElement('p');
        answer.textContent = item.answer;
        faqItem.appendChild(answer);

        faqContainer.appendChild(faqItem);
    });
}
```