let cartProducts = JSON.parse(localStorage.getItem("newProducts"));
let cartItems = document.querySelector('#check-out');
cartItems.innerHTML += cartProducts.map(function(product,index){
    return `
    <tr>

        <td>${product.id}</td>
        <td><img src="${product.url}" alt="${product.make}" style="max-width: 50px;"></td>
        <td>${product.make}</td>
        <td>${product.description}</td>
        <td>R${product.price.toFixed(2)}</td>
        <td>1</td>
        
        </tr>`
}).join('');
// function to add up totals of products and display in the tag
function totalOfItems(cartProducts) {
    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        total += cartProducts[i].price;
    }
    // returns result to 2 decimal places
    return total.toFixed(2);
}

let total = totalOfItems(cartProducts);

//p tag where display will be
let totalPriceElement = document.querySelector('#total-price');

totalPriceElement.textContent = `Total Price: R${total}`;