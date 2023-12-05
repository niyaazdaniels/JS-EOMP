let newProducts = [];

let mainDisplay = document.querySelector('main')
let products = JSON.parse(localStorage.getItem('products'));

let produce = function extraProducts(){
mainDisplay.innerHTML = products.map(function(product,index){
return `
<div class="products">
<div class="header"> 
<h5>${product.make}</h5>
    </div>
    <div class="item">
        <img src="${product.url}" width= "100px" height= "90px"></img>
    </div>
    <div class="content">
    <p>${product.description}</p>
    <p>R${product.price}</p>
    </div>
    <div class = "button">
    <p><button class = "adtc" data-add >Add to Cart</button></p>
    </div>
    </div>
    `
}
)}

// Search function

document.getElementById('searchInput').addEventListener('input', search);
document.querySelector('select').addEventListener('change', search);
if(product.length===0){
    mainDisplay.innerHTML = `
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
}
function search(){
    let searchIt = document.getElementById('searchInput').value.toLowerCase();
    let options = document.querySelector('select').value;
    let sorted = product.filter(product => {
        return product.make.toLowerCase().includes(searchIt);
    });
    if (options === 'Low to High') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (options === 'High to Low') {
        sorted.sort((a, b) => b.price - a.price);
    }
}


// adding functionality for add to cart button that when clicked sends code to localstorage
function addToCart(index){
    newProducts.push(products[index])
    localStorage.setItem("newProducts",JSON.stringify(newProducts))
}    
mainDisplay.addEventListener('click', function(event){  
    if (event.target.hasAttribute('data-add')){
        addToCart(event.target.value)
    }    
})    

