document.addEventListener("DOMContentLoaded", function() {
    const productsData = {
      "products": [
        { "id": 1, "name": "Gas Cylinder", "price": 50, "image": "gas_cylinder.jpg" },
        { "id": 2, "name": "Regulator", "price": 15, "image": "regulator.png" },
        { "id": 3, "name": "Gas Pipe", "price": 10, "image": "gas_pipe.jpg" },
        { "id": 4, "name": "Gas Stove", "price": 80, "image": "gas_stove.jpg" },
        { "id": 5, "name": "Gas Burner", "price": 25, "image": "gas_burner.jpg" },
        { "id": 6, "name": "Gas Hose", "price": 8, "image": "gas_hose.jpg" },
        { "id": 7, "name": "Gas Tank", "price": 120, "image": "gas_tank.jpg" },
        { "id": 8, "name": "Gas Valve", "price": 5, "image": "gas_valve.jpg" },
        { "id": 9, "name": "Gas Grill", "price": 150, "image": "gas_grill.jpg" },
        { "id": 10, "name": "Gas Lighter", "price": 3, "image": "gas_lighter.jpg" },
        { "id": 11, "name": "Gas Detector", "price": 30, "image": "gas_detector.jpg" },
        { "id": 12, "name": "Gas Alarm", "price": 20, "image": "gas_alarm.jpg" },
        { "id": 13, "name": "Gas Filter", "price": 12, "image": "gas_filter.jpg" },
        { "id": 14, "name": "Gas Shut-off Valve", "price": 18, "image": "gas_shutoff_valve.jpg" },
        { "id": 15, "name": "Gas Pressure Regulator", "price": 25, "image": "gas_pressure_regulator.jpg" },
        { "id": 16, "name": "Gas Leak Detector", "price": 40, "image": "gas_leak_detector.jpg" },
        { "id": 17, "name": "Gas Flow Meter", "price": 60, "image": "gas_flow_meter.jpg" },
        { "id": 18, "name": "Gas Analyzer", "price": 200, "image": "gas_analyzer.jpg" },
        { "id": 19, "name": "Gas Safety Valve", "price": 35, "image": "gas_safety_valve.jpg" },
        { "id": 20, "name": "Gas Tankless Water Heater", "price": 300, "image": "gas_tankless_water_heater.jpg" },
        { "id": 21, "name": "Gas Fireplace", "price": 250, "image": "gas_fireplace.jpg" },
        { "id": 22, "name": "Gas Oven", "price": 180, "image": "gas_oven.jpg" },
        { "id": 23, "name": "Gas Heater", "price": 100, "image": "gas_heater.jpg" },
        { "id": 24, "name": "Gas Grill Cover", "price": 20, "image": "gas_grill_cover.jpg" },
        { "id": 25, "name": "Gas Log Set", "price": 120, "image": "gas_log_set.jpg" }
      ]
    };
    
    
      displayProducts(productsData.products);
      const cartItemsContainer = document.querySelector('.listCart');
      const closeBtn = document.querySelector('.close');
      const checkoutBtn = document.querySelector('.checkOut');
    
      closeBtn.addEventListener('click', function() {
        document.querySelector('.checkout-container').style.display = 'none';
      });
    
      checkoutBtn.addEventListener('click', function() {
        alert('Implement checkout functionality here');
        // Implement checkout functionality here
      });
    
      function displayProducts(products) {
        const productsContainer = document.getElementById('products');
    
        products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');
          productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>ID: ${product.id}</p>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
          `;
          productsContainer.appendChild(productDiv);
        });
    
        // Add event listener for add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
        });
      }
    
      function addToCart(event) {
        const productId = event.target.dataset.id;
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);
    
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${productName} - $${productPrice}`;
        cartItemsContainer.appendChild(cartItemElement);
    
        const itemCount = cartItemsContainer.children.length;
        document.querySelector('.icon-cart span').textContent = itemCount;
    
        // Show checkout container if there are items in the cart
        if (itemCount > 0) {
          document.querySelector('.checkout-container').style.display = 'block';
        }
      }
    });
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
    
    