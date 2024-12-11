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