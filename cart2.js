let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addItem(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateLocalStorage();
    displayCart();
}

function deleteItem(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} (NT$${item.price} 數量: ${item.quantity})</span>
            <button onclick="deleteItem(${index})">刪除</button>
        `;
        cartList.appendChild(listItem);
    });
}

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 頁面加載時顯示購物車內容
window.onload = displayCart;
