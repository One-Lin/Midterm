let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartDiv = document.querySelector('.icon-cart div')

let listProducts =[];
let carts = [];

iconCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showCart')
})

// 把資料放進分頁裡
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product =>{
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">NT$${product.price}</div>
                <button class="addCart">加入購物車</button>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }

}



listProductHTML.addEventListener('click',(event)=>{
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        // alert(product_id);
        addToCart(product_id);
    }
})

// 加入購物車
const addToCart = (product_id)=>{
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0){
        carts = [{
            product_id : product_id,
            quantity : 1
        }]
    }
    else if (positionThisProductInCart < 0){
        carts.push ({
            product_id :product_id,
            quantity : 1
        })
    }
    else{
        carts[positionThisProductInCart].quantity += 1;
    }
    // console.log(carts)
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart',JSON.stringify(carts));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if(carts.length > 0){
        carts.forEach(cart =>{
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProducts.findIndex((value)=>value.id == cart.product_id)
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
            <div class="image">
                    <img src="${info.image}" alt="">
                </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">
                    NT$${info.price * cart.quantity}
                    </div>
                    <div class="quantity">
                        <span class="minus">&lt</span>
                        <span>${cart.quantity}</span>
                        <span class="plus">&gt</span>
                    </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
}

listCartHTML.addEventListener('click',(event) =>{
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        // console.log(product_id);
        let  type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) =>{
    let positionItemInCart = carts.findIndex((value)=>value.product_id == product_id);
    if(positionItemInCart >= 0){
        switch (type){
            case 'plus':
                carts[positionItemInCart].quantity += 1 ;
                break;
            default:
                let valueChange = carts[positionItemInCart].quantity -1 ;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }
                else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToMemory();
    addCartToHTML();
}

const initApp = () => {
    //get product from json
    fetch('productOne.json')
    .then(response => response.json())
    .then(data =>{
        listProducts = data;
        // console.log(listProducts);
        addDataToHTML();

        // get cart from memory
        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })

}
initApp();