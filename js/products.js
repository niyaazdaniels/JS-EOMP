let newProducts = [];
let main = document.querySelector('main')
let cartItems = JSON.parse(localStorage.getItem('products'))

function productsDisplay(){
    let products = cartItems.map(function(product,index){
        return `
        <div class="col-xxl container-card d-flex">
        <div class="card me-1 card-product ">
        <img src="${product.url}" class="card-img-top  w-25 img-fluid d-flex align-content-lg-center  alt="${product.make}">
        <div class="card-body d-block">
          <h5 class="card-title">${product.make}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">R${product.price}</p>
          <button class="btn btn-success " id = "button-add">Add To Cart</button>
        </div>
        </div>
        </div>
        `
    }) 
    main.innerHTML = products.join('')
}
productsDisplay();

document.getElementById('searchInput').addEventListener('input', searchContainer);
document.querySelector('select').addEventListener('change', searchContainer);
if(product.length===0){
    main.innerHTML = `<div class="spinner-border text-danger" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
}else{
    productsDisplay(product)
}
function searchContainer(){
    let searchIt = document.getElementById('searchInput').value.toLowerCase();
    let options = document.querySelector('select').value;
    let sorted = product.filter(item => {
        return item.name.toLowerCase().includes(searchIt);
    });
    if (options === 'Low to High') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (options === 'High to Low') {
        sorted.sort((a, b) => b.price - a.price);
    }
    productsDisplay(sorted);
}