let newProducts = [];

let mainDisplay = document.querySelector('main')
let products = JSON.parse(localStorage.getItem('products'));


let produce = function extraProducts(prod){
mainDisplay.innerHTML = prod.map(function(product,index){
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
    <p><button class = "adtc" data-add  value = "${index}">Add to Cart</button></p>
    </div>
    </div>
    `
})}
    produce(products);
    
    
    // Search function
    document.getElementById('searchInput').addEventListener('input', searchFunction);
    document.querySelector('select').addEventListener('change', searchFunction);
    function searchFunction() {   
        let searchIt = document.getElementById('searchInput').value.toLowerCase();
        let options = document.querySelector('select').value;
        let sortedProducts = products.filter(product => {
            return product.make.toLowerCase().includes(searchIt);
        });
        // sort option, if user selects Low to High perform first If and vice versa
        if (options === 'Low to High') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (options === 'High to Low') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    produce(sortedProducts);
    };


    //add function
    function addition(index){
        newProducts.push(products[index])
        localStorage.setItem("newProducts",JSON.stringify(newProducts))
    }
    mainDisplay.addEventListener('click', function(event){  
        if (event.target.hasAttribute('data-add')){
            addition(event.target.value)
        }
    })
    
    if(products.length===0){
        mainDisplay.innerHTML = "" `
        <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>`
    };