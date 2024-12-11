// 購物車清單出現與否
function showCart() {
    document.body.classList.toggle('showCart');
}

// 聯絡我們出現與否
function showContact() {
    document.body.classList.toggle('showContact');
}

//顯示全部商品
function showAll() {
    document.querySelectorAll('.item').forEach(div => {
        div.classList.remove('hideProduct');
    });
    //   alert(123);
}

// 顯示特定分類商品
function show(targetClass) {
    document.querySelectorAll('.item').forEach(div => {
        div.classList.add('hideProduct');
    });
    const targetDiv = document.querySelectorAll(`.${targetClass}`);
    if (targetDiv) {
        targetDiv.forEach(div => {
            div.classList.toggle('hideProduct');
            div.classList.add('showProduct');
        });;
    }
    // alert(456);   
}

let cart = [];
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.addtocart');

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.item');
            const productId = product.dataset.id;
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);

            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });
});

function addToCart(item) {
    // 檢查商品是否已在購物車中
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item);
    }

    console.log(cart);
    updateCartUI();
}