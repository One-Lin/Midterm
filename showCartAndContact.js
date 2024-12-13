// 購物車清單出現與否
function showCart() {
    document.body.classList.toggle('showCart');
}

// 聯絡我們出現與否
function showContact() {
    document.body.classList.toggle('showContact');
}

//送出
function submitContact() {
    let name = document.getElementById('Username').value;
    let phone = document.getElementById('Phone').value;
    let email = document.getElementById('Email').value;
    let opinion= document.getElementById('opinion').value;

    if (name && phone && email && opinion ) {
        alert('我們已收到寶貴意見，謝謝您');
        showContact();
    }
    else {
        alert('請確認是否完整填寫，謝謝您');
    }
    // alert(name);
}
