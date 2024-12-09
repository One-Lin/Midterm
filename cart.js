let cart = [];

        function addToCart(productName, productPrice) {
            cart.push({ name: productName, price: productPrice });
            updateCart();
        }

        function updateCart() {
            const cartItemsElement = document.getElementById('cart-items');
            const totalElement = document.getElementById('total');
            cartItemsElement.innerHTML = '';

            let total = 0;
            cart.forEach((item, index) => {
                cartItemsElement.innerHTML += `<div class="cart-item">${item.name} - NT$${item.price}</div>`;
                total += item.price;
            });

            totalElement.textContent = total;
        }