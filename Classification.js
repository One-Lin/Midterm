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

