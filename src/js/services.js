```javascript
// Fetching services data from the server
async function fetchServicesData() {
    try {
        const response = await fetch('/services');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Displaying services data on the page
function displayServicesData(servicesData) {
    const servicesContainer = document.getElementById('servicesContainer');

    servicesData.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        const serviceName = document.createElement('h2');
        serviceName.textContent = service.name;
        serviceElement.appendChild(serviceName);

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceElement.appendChild(serviceDescription);

        servicesContainer.appendChild(serviceElement);
    });
}

// Fetch and display services data on page load
window.addEventListener('DOMContentLoaded', async () => {
    const servicesData = await fetchServicesData();
    displayServicesData(servicesData);
});
```