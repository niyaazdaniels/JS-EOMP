// empty array
let newProducts = !localStorage.getItem('newProducts')?[]: JSON.parse(localStorage.getItem('newProducts'));
// declaring variable 
let mainDisplay = document.querySelector('main')
// fetching array while declaring variable
let products = JSON.parse(localStorage.getItem('products'));
// creating a function to display products from admin page
let produce = function extraProducts(prod){
mainDisplay.innerHTML = prod.map(function(product,index){
return `<div class="card mt-5 me-2">
<div class="card-image"> <img src=${product.url} name='pic'></div>
<div class="category"> ${product.make} </div>
<div class="heading"> ${product.description}
<div class="author"> ${product.quantity} </div>
    <div class="author"> R${product.price}</div>
    <p><button class = "adtc" data-add  value = "${index}">Add to Cart</button></p>
</div>
</div>
</div>
</div>`
    // removing ','
}).join('')}
    produce(products);
    // Search function and Sort
    document.getElementById('searchInput').addEventListener('input', searchFunction);
    document.querySelector('select').addEventListener('change', searchFunction);
    function searchFunction() {
        try {
            let searchMe = document.getElementById('searchInput').value.toLowerCase();
            let options = document.querySelector('select').value;
            let sortedProducts = products.filter(product => {
                return product.make.toLowerCase().includes(searchMe);
            });
            // sort option, if user selects Low to High perform first If and vice versa
            if (options === 'Low to High') {
                sortedProducts.sort((a, b) => a.price - b.price);
            } else if (options === 'High to Low') {
                sortedProducts.sort((a, b) => b.price - a.price);
            }
            // calling function produce with products array
            produce(sortedProducts);
        } catch (error) {
            console.error('Error: Could not search', error);
        }
    };
    //add function
    function addition(index){
        newProducts.push(products[index])
        localStorage.setItem("newProducts",JSON.stringify(newProducts))
    }
    // element targeting
    mainDisplay.addEventListener('click', function(event){  
        if (event.target.hasAttribute('data-add')){
            updateCheckout(event.target.value)
        }
    })
    // spinner, if products length is equal to zero and true display spinner else function
    if(products.length===0){
        mainDisplay.innerHTML = `
        <div class="d-flex align-items-center">
        <strong role="status">Loading. . .</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>`
    }  else {
    // calling function produce with products array
        produce(products)
    };
// function to update checkout when the user clicks add to cart on the same items more than once
function updateCheckout(index) {
    try {
        let x = products[index];
        let productIndex = newProducts.findIndex(product => product.id === x.id);
        console.log(productIndex);
        if (productIndex != -1) {
            newProducts[productIndex].quantity += 1;
        } else {
            // x.quantity = 1;
            newProducts.push(x);
        }
        localStorage.setItem("newProducts", JSON.stringify(newProducts));
    } catch (error) {
        alert.error('Error:', error);
    }
}
// spinner, if products length is equal to zero and true display spinner else function