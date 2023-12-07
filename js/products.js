// empty array
let newProducts = [];
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
<div class="subheading"> ${product.quantity}
    <div class="author"> R${product.price}</div>
    <p><button class = "adtc" data-add  value = "${index}">Add to Cart</button></p>
</div>
</div>
</div>
</div>`
    // removing ','
}).join('')}
    produce(products);
    
    
    // Search function
    document.getElementById('searchInput').addEventListener('input', searchFunction);
    document.querySelector('select').addEventListener('change', searchFunction);
    function searchFunction() {   
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
    };


    //add function
    function addition(index){
        newProducts.push(products[index])
        localStorage.setItem("newProducts",JSON.stringify(newProducts))
    }
    // element targeting
    mainDisplay.addEventListener('click', function(event){  
        if (event.target.hasAttribute('data-add')){
            addition(event.target.value)
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
        
        let addedProducts = newProducts.findIndex(product=> product.id == products[index].id);
        
        if (newProducts.length==0) {
            newProducts.push(products[index]);
         
        } else if (addedProducts != -1){
        
            newProducts[addedProducts].quantity += 1;
        }else{
         
            newProducts.push(products[index])
        }
        localStorage.setItem("newProducts", JSON.stringify(newProducts));
    }
    mainDisplay.addEventListener('click', function(event){  
        if (event.target.getAttribute('data-add')){
            updateCheckout(event.target.getAttribute('data-add'));
        }});
// function updateCheckout() {
//     // Calculate the total price and quantity
//         let productPrice = 0;
//         let productQuantity = 0;
    
//         newProducts.forEach((product) => {
//             productPrice += product.price * product.quantity;
//             productQuantity += product.quantity;
//         });
//         // Update the price and quantity on the page
//         document.getElementById("product-price").innerHTML = `${newProducts[0].price}`;
//         document.getElementById("product-quantity").innerHTML = `${newProducts[0].quantity}`;
//     }
// });
