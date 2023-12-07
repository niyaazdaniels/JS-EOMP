let cartProducts = JSON.parse(localStorage.getItem("newProducts"));
let cartItems = document.querySelector('main');
cartItems.innerHTML = cartProducts.map(function(product,index){
    return `
    <table class = "table-responsive-lg " id = "table-checkout"
<tbody>
    <td>${product.make}</td>
    <td${index}></td>
    <td><img src = "${product.url}" height = "85px" width = "100px"</td>
    <td>${product.description}</td>
    <td>R${product.price}</td>
    </tbody>
    `
}).join('')

