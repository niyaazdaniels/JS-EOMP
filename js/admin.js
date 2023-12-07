// declaring an empty array to push products into
let products = [];

// created a constructor function to create products
function ProductsConstruction (id,make, url, description, quantity, price){
    this.id = id,
    this.make = make,
    this.url = url,
    this.description = description, 
    this.quantity = quantity, 
    this.price = price
}
// creating individual objects to be pushed into empty array created earlier
let firstProduct = new ProductsConstruction (1,'HP', "https://i.postimg.cc/C1CcddPS/HP.png", "Latest gaming hardware.",1, 15499);
let secondProduct = new ProductsConstruction(2,'Apple', "https://i.postimg.cc/HL9My5gZ/iPhone.png", 'A beautiful curved design.',1, 29999);
let thirdProduct = new ProductsConstruction(3,'Sony', "https://i.postimg.cc/MHNfSm7T/PS5.png", "Powerful hardware and 4K.",1, 16999);
let fourthProduct = new ProductsConstruction(4,'Samsung', 'https://i.postimg.cc/SKgs4Gqh/S23U.png', "Powerful chip for epic gaming",1, 36999);
let fifthProduct = new ProductsConstruction(5,'Xbox',"https://i.postimg.cc/XvGSzK2q/Xbox.png", "The most powerful Xbox ever.",1, 13999)

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

// creating a function to map through and display items in array products
function displayProducts(){
    let productsMap = products.map(function(product,index){
        return`
        <div class = "product-container" id="admin-table">
            <table class = "table-responsive-lg">
                <tbody>
                <td>${product.id}</td>
                <td> ${product.make}: </td>
                <td> <img src="${product.url}" alt="${product.make}" height="65px" width="80"> </td>
                <td> ${product.description} </td>
                <td> ${product.quantity} </td>
                <td> R${product.price} </td>
                <td><button type="button" class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" ${product.index}>Edit</td>
                <td><button class ="dlt" value = "${index}">Delete</button></td>
                </tbody>
                </table>
                </div>
        `
    });
    
//displays the above in admin.HTML
productsDisplay.innerHTML = productsMap.join('');
}

// calling the function
displayProducts();

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
// for the delete button to affect
function settingLocal(){
    localStorage.setItem("products",JSON.stringify(products))
    products = JSON.parse(localStorage.getItem("products"))
};


// function gets values of input fields
function addToProducts() {
    let addMake = document.getElementById('make');
    let addImage = document.getElementById('image');
    let addDescription = document.getElementById('description');
    let addPrice = document.getElementById('price');

    // Checks if the required fields are filled
    try {
        if(!addMake.value || !addImage.value || !addDescription.value || !addPrice.value) {
      alert('Please fill all the required fields.');
      return;
    } 
    } catch (error) {
    }
    //is price a number and displays an alert when the value is not a number
      if (isNaN(addPrice.value)) {
         alert('The price must be a number.');
         return;
}
}
// saves updated information function// saves updated information function
function saveProduct() {
    // creates new object with values entered in input
    let editedProduct = {
        id: products.id + 1 ,
        make: document.getElementById('make').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value
    };
    // pushes editProduct object in products array
    products.push(editedProduct);
    // stores the updated array in local storage
    localStorage.setItem('products', JSON.stringify(products));
}

// saves any and all changes when clicking buttton with id saveChanges
document.getElementById('saveChanges').addEventListener('click', function () {
    //calling functions
    addToProducts();
    saveProduct();
    displayProducts();
});

