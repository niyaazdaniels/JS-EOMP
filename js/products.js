let newProducts = [];

let mainDisplay = document.querySelector('main')
let products = JSON.parse(localStorage.getItem('products'));

mainDisplay.innerHTML = products.map(function(product,index){
    return `
            <div class = "container-js-products">
                <h4>${product.make}</h4>
                <img src=" ${product.url}" alt = "${product.make}" height="100px" width="120px">
                <h6>${product.description}</h6>
                <button value = ${index} data-cart><i class="fa-solid fa-plus"></i></button>
                <p>R${product.price}</p>
            </div>
    `
}).join('');

//creating a function for the add button
function addToCart(){
    newProducts.push(product[index])
    localStorage.setItem("newProducts",JSON.stringify(newProducts))
}
mainDisplay.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-cart')){
        addToCart(event.target.value)
    }
})