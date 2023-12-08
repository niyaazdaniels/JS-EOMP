let cartProducts = JSON.parse(localStorage.getItem("newProducts"));
    let cartItems = document.querySelector('#check-out');

    let spinner = function spinnerItems(){
cartItems.innerHTML += cartProducts.map(function(product,index){
    return `
    <tr>
        <td>${product.id}</td>
         <td><img src="${product.url}" alt="${product.make}" style="max-width: 50px;"></td>
            <td>${product.make}</td>
            <td >${product.description}</td>
         <td id = "product-price">R${(product.quantity*product.price).toFixed(2)}</td>
        <td id = "product-quantity">${product.quantity}</td>
        </tr>`
}).join('');
} 
// function to add up totals of products and display in the tag
function totalOfItems(cartProducts) {
    return cartProducts.reduce((total, item) => {
        return total + item.price;
    }, 0).toFixed(2);
}
// Calculate total price
let total = totalOfItems(cartProducts);

//p tag where display will be
let priceTotals = document.querySelector('#total-price');
    priceTotals.textContent = `Total Price: R${total}`;

    // function to clear cart
    function clearCart() {
        // fetchting array cartProduct
        cartProducts = [];
        // setting the localStorage
        localStorage.setItem("newProducts", JSON.stringify(cartProducts));
        //clearing items
        cartItems.innerHTML = "";
        priceTotals.textContent = `Total Price: R0.00`;
    }
    // declaring button
let btnClear = document.getElementById("clear-cart").addEventListener('click',clearCart);

// spinner, if products length is equal to zero and true display spinner else function
if(cartProducts.length===0){
    cartItems.innerHTML = `
    <div class="d-flex align-items-center bg-transparent">
    <strong role="status">Loading products <br></strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>`
}  else {
// calling function produce with products array
    spinner(cartProducts)
};

function purchaseProducts(){
    alert("Thank you for purchasing!")
}
let btnPurchase = document.getElementById('Purchase').addEventListener('click', purchaseProducts);