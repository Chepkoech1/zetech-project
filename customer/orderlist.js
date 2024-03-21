// Define an empty array to store items in the cart
let cartItems = [];

// Function to fetch products and populate the product list
function fetchProducts() {
    fetch('http://localhost:4000/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            productList.innerHTML = ''; // Clear existing list
            products.forEach(product => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                const image = document.createElement('img');
                image.src = product.image;
                image.alt = product.name;
                itemDiv.appendChild(image);

                const name = document.createElement('h2');
                name.textContent = product.name;
                itemDiv.appendChild(name);

                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = `${product.price}`;
                itemDiv.appendChild(price);

                const addButton = document.createElement('button');
                addButton.textContent = 'Add to Cart';
                addButton.addEventListener('click', () => addToCart(product));
                itemDiv.appendChild(addButton);

                productList.appendChild(itemDiv);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to load products. Please try again later.');
        });
}

// Function to add a product to the cart
function addToCart(product) {
    cartItems.push(product);
    updateCartIcon();
}

// Function to update the cart icon with the number of items
function updateCartIcon() {
    const cartIcon = document.querySelector('.icon-cart span');
    cartIcon.textContent = cartItems.length;
}

// Function to update the display of the shopping cart
function updateCartDisplay() {
    const cartItemList = document.getElementById('cartItemList');
    cartItemList.innerHTML = ''; // Clear existing list
    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('item');

        const name = document.createElement('h2');
        name.textContent = item.name;
        cartItemDiv.appendChild(name);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `ksh${item.price}`;
        cartItemDiv.appendChild(price);

        cartItemList.appendChild(cartItemDiv);
    });
}

// Function to initialize event listeners
function initEventListeners() {
    // Handle clicking on the cart icon to view the shopping cart
    document.querySelector('.icon-cart').addEventListener('click', handleViewCart);
    
    // Handle clicking on the "Close Shopping Cart" button
    document.getElementById('closeCartViewBtn').addEventListener('click', handleCloseCart);

    // Handle form submission for checkout
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}

// Function to handle "View Shopping Cart" button click
function handleViewCart() {
    const shoppingCart = document.querySelector('.cartTab');
    shoppingCart.classList.remove('hidden');
    document.body.classList.add('showCart');
    updateCartDisplay(); // Update cart display when opening the cart
}

// Function to handle "Close Shopping Cart" button click
function handleCloseCart() {
    const shoppingCart = document.querySelector('.cartTab');
    shoppingCart.classList.add('hidden');
    document.body.classList.remove('showCart');
}

// Function to handle "Place Order" button click
function handleCheckout(event) {
    event.preventDefault(); // Prevent form submission
    // Collect user input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    // Validate input
    if (name === '' || email === '' || address === '') {
        alert('Please fill out all fields.');
        return;
    }
    // Process the order (in this case, just display a success message)
    alert('Order placed successfully!');
    // Clear the cart and hide the checkout form
    cartItems = [];
    updateCartIcon();
    updateCartDisplay();
    handleCloseCart();
}
// Function to initialize event listeners
function initEventListeners() {
    // Handle clicking on the cart icon to view the shopping cart
    document.querySelector('.icon-cart').addEventListener('click', handleViewCart);
    
    // Handle clicking on the "Close Shopping Cart" button
    document.getElementById('closeCartViewBtn').addEventListener('click', handleCloseCart);

    // Handle clicking on the "CHECK OUT" button
    document.querySelector('.checkOut').addEventListener('click', () => {
        const checkoutContainer = document.querySelector('.checkout-container');
        checkoutContainer.style.display = 'block'; // Show the checkout container
    });

    // Handle form submission for checkout
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}


// Call initialization functions
fetchProducts(); // Fetch and display products initially
initEventListeners(); // Initialize event listeners
