document.addEventListener("DOMContentLoaded", function () {
    const iconCart = document.querySelector('.icon-cart');
    const body = document.body;
    const closeBtn = document.querySelector('.close');
    const checkOutBtn = document.querySelector('.checkOut');
    const cartList = document.querySelector('.listCart');
    const cartCount = document.querySelector('.icon-cart span');

    iconCart.addEventListener('click', function () {
        body.classList.toggle('showCart');
    });

    closeBtn.addEventListener('click', function () {
        body.classList.remove('showCart');
    });

    checkOutBtn.addEventListener('click', function () {
        // Debugging: Check if this function is triggered
        console.log("Checkout button clicked");

        // Gather cart information
        const cartItems = document.querySelectorAll('.listCart .item');
        const orderSummary = [];
        let totalCost = 0;

        cartItems.forEach(function (item) {
            const itemName = item.querySelector('.name').textContent;
            const itemPrice = parseFloat(item.querySelector('.totalPrice').textContent.slice(1));
            // Debugging: Check if this selector is correct and returns valid data
            console.log("Item name:", itemName);
            console.log("Item price:", itemPrice);

            // Update total cost
            const itemTotal = itemPrice; // assuming no quantity information is present in the cart item
            totalCost += itemTotal;

            // Debugging: Check if itemTotal is calculated correctly
            console.log("Item total:", itemTotal);

            orderSummary.push({ name: itemName, price: itemPrice, total: itemTotal });
        });

        // Debugging: Check if orderSummary is correct
        console.log("Order summary:", orderSummary);
        console.log("Total cost:", totalCost);

        // Display confirmation
        let confirmationMessage = "Order Summary:\n";
        orderSummary.forEach(function (item) {
            confirmationMessage += `${item.name} - $${item.total.toFixed(2)}\n`;
        });
        confirmationMessage += `\nTotal: $${totalCost.toFixed(2)}\n\nProceed with checkout?`;

        // Debugging: Check if the confirmation message is correct
        console.log("Confirmation message:", confirmationMessage);

        if (confirm(confirmationMessage)) {
            // Process payment (if required)
            // Update inventory (if required)
            // Clear cart
            cartList.innerHTML = '';
            cartCount.textContent = '0';
            alert('Thank you for your order!');

            // You can redirect to a confirmation page or perform other actions here
        }
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.addcart');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            addToCart(button);
        });
    });

    function addToCart(clickedButton) {
        // Debugging: Check if this function is triggered when "Add to Cart" button is clicked
        console.log("Add to Cart button clicked");

        // Get product details from the clicked button's parent element
        const productContainer = clickedButton.closest('.item');
        const productName = productContainer.querySelector('h2').textContent;
        const productImageSrc = productContainer.querySelector('img').src;
        const productPrice = parseFloat(productContainer.querySelector('.price').textContent.slice(1));

        // Debugging: Check if product details are retrieved correctly
        console.log("Product name:", productName);
        console.log("Product price:", productPrice);

        // Create a new cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');
        const productImage = document.createElement('img');
        productImage.src = productImageSrc;
        productImage.alt = 'Product Image';
        imageContainer.appendChild(productImage);

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = productName;

        const totalPrice = document.createElement('div');
        totalPrice.classList.add('totalPrice');
        totalPrice.textContent = `$${productPrice}`;

        // Append elements to the cart item
        cartItem.appendChild(imageContainer);
        cartItem.appendChild(name);
        cartItem.appendChild(totalPrice);

        // Append the cart item to the cart list
        cartList.appendChild(cartItem);

        // Update cart count
        let currentCount = parseInt(cartCount.textContent);
        currentCount++;
        cartCount.textContent = currentCount;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const checkOutBtn = document.querySelector('.checkOut');
    const paymentFormContainer = document.querySelector('.payment-form');

    checkOutBtn.addEventListener('click', function () {
        displayPaymentForm();
        displayMap(); // Display map when checkout is clicked
    });

    function displayPaymentForm() {
        paymentFormContainer.style.display = 'block';
    }

    function displayMap() {
        // Use a mapping service (e.g., Google Maps API) to display the map
        // For example:
        const mapElement = document.getElementById('map');
        // Initialize the map using the mapping service API
        // Replace 'YOUR_API_KEY' with your actual API key
        const map = new google.maps.Map(mapElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        // Add marker for delivery location
        const marker = new google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map: map,
            title: 'Delivery Address'
        });
    }
});

