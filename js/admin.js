// declaring an empty array to push products into
let products = [];

// created a constructor function to create products
function ProductsConstruction (make, url, description, price){
    this.make = make,
    this.url = url,
    this.description = description,
    this.price = price
}
// creating individual objects to be pushed into empty array created earlier
let firstProduct = new ProductsConstruction ('HP', "https://i.postimg.cc/C1CcddPS/HP.png", "Latest gaming hardware.", 15499);
let secondProduct = new ProductsConstruction('Apple', "https://i.postimg.cc/HL9My5gZ/iPhone.png", 'A beautiful curved design.', 29999);
let thirdProduct = new ProductsConstruction('Sony', "https://i.postimg.cc/MHNfSm7T/PS5.png", "Powerful hardware, exclusives, and 4K.", 16999);
let fourthProduct = new ProductsConstruction('Samsung', 'https://i.postimg.cc/SKgs4Gqh/S23U.png', "Nightography camera and powerful chip for epic gaming", 36999);
let fifthProduct = new ProductsConstruction('Xbox',"https://i.postimg.cc/XvGSzK2q/Xbox.png", "The fastest, most powerful Xbox ever.", 13999)

// push created objects into array
products.push(firstProduct);
products.push(secondProduct);
products.push(thirdProduct);
products.push(fourthProduct);
products.push(fifthProduct);

// setting products to local storage and converting to a string
localStorage.setItem("products",JSON.stringify(products))
//  convert string products into readable object
products = JSON.parse(localStorage.getItem("products"))

// selecting HTML element to display information
let productsDisplay = document.querySelector('table');

// creating a function to map through and display items
function displayProducts(){
    let productsMap = products.map(function(product,index){
        return`
        <div class = "product-container">
        <table>
        <th>ID</th>
        <th>Make</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        
                <tbody>
                <td>${index+1}</td>
                <td> ${product.make}: </td>
                <td> <img src="${product.url}" alt="${product.make}" height="65px" width="78"> </td>
                <td> ${product.description} </td>
                <td> R${product.price} </td>
                <td><button class = "edit">Edit</button></td>
                <td><button class ="dlt" value = "${index}">Delete</button></td></tbody></table>
                </div>
        `
    });
    // remove function
    //adding functionality for button delete
    function removeProduct(productPosition){
        products.splice(productPosition, 1);
        settingLocal();
        displayProducts();
    }
    // declaring the variable for the delete btn
    let btnDelete = document.querySelector(".dlt");
    // element targeting
    productsDisplay.addEventListener('click', function(event){
        if(event.target.classList.contains('dlt')){
            removeProduct(event.target.value);
        }
    })
    //displays the above in admin.HTML
    productsDisplay.innerHTML = productsMap.join('');
}
// calling the function
displayProducts();

function settingLocal(){
    localStorage.setItem("products",JSON.stringify(products))
   products = JSON.parse(localStorage.getItem("products"))
}