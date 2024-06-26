document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;

  const product = {
    name: productName,
    price: productPrice
  };

  // Add product to database (db.json) using JSON Server
  fetch('http://localhost:4000/products', { // Corrected port to 4000
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Handle success or error
    alert('Product added successfully!');
    // Clear form fields
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    // Refresh order list
    refreshOrderList();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to add product. Please try again later.');
  });
});

function refreshOrderList() {
  // Fetch products from database (db.json) using JSON Server
  fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('productList');
      productList.innerHTML = ''; // Clear existing list
      products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Ksh ${product.price}`; // Replace $ with Ksh
        productList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to load products. Please try again later.');
    });
}

// Function to handle click event for "Go to Home Page" button
document.getElementById('goToHomePage').addEventListener('click', function() {
  // Redirect to home page
  window.location.href = '../home.html';
});
