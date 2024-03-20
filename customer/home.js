
document.addEventListener('DOMContentLoaded', function () {
    // Assume you have an API endpoint for fetching gas information
    // Update gasApiUrl to a mock API link
const gasApiUrl = 'https://cookin-api-capstone.herokuapp.com/api;'

    // Function to fetch gas information and display on the home page
    function fetchAndDisplayGasInfo() {
        fetch(gasApiUrl)
            .then(response => response.json())
            .then(data => {
                // Assume data is an array of gas objects with properties like name, quantity, brand, price, image, etc.
                // Loop through the data and create HTML elements to display on the homepage
                const gasContainer = document.getElementById('gasContainer');

                data.forEach(gas => {
                    const gasElement = document.createElement('div');
                    gasElement.classList.add('gas-item'); // Add a class for styling
                    gasElement.innerHTML = `
                        <img src="${gas.image}" alt="${gas.name}">
                        <h3>${gas.name}</h3>
                        <p>Quantity: ${gas.quantity} kg</p>
                        <p>Brand: ${gas.brand}</p>
                        <p>Price: $${gas.price}</p>
                    `;
                    gasContainer.appendChild(gasElement);
                });
            })
            .catch(error => {
                console.error('Error fetching gas information:', error);
            });
    }

    // Call the function when the user is authenticated and on the homepage
    fetchA
    ndDisplayGasInfo();
});
document.getElementById('aboutUsLink').addEventListener('click', function() {
    openAbout();
});



       