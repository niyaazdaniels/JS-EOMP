// declaring an empty array to push products into
let products = [];
// created a constructor function to create products
function ProductsConstruction (id,make, url, description, price){
    this.id = id,
    this.make = make,
    this.url = url,
    this.description = description, 
    this.price = price,
    this.quantity = 1 
}
// creating individual objects to be pushed into empty array created earlier
let firstProduct = new ProductsConstruction (1,'HP', "https://i.postimg.cc/C1CcddPS/HP.png", "Latest gaming hardware.", 15499);
let secondProduct = new ProductsConstruction(2,'Apple', "https://i.postimg.cc/HL9My5gZ/iPhone.png", 'A beautiful curved design.', 29999);
let thirdProduct = new ProductsConstruction(3,'Sony', "https://i.postimg.cc/MHNfSm7T/PS5.png", "Powerful hardware and 4K.", 16999);
let fourthProduct = new ProductsConstruction(4,'Samsung', 'https://i.postimg.cc/SKgs4Gqh/S23U.png', "Powerful chip for epic gaming", 36999);
let fifthProduct = new ProductsConstruction(5,'Xbox',"https://i.postimg.cc/XvGSzK2q/Xbox.png", "The most powerful Xbox ever.", 13999)

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
    try {
        products.splice(productPosition, 1);
        settingLocal();
        displayProducts();
    } catch (error) {
        alert.error('Error! Could not remove:', error);
    }
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

    try {
        // Checks if the required fields are filled
        if (!addMake.value || !addImage.value || !addDescription.value || !addPrice.value) {
            alert('Please fill all the required fields.');
            return;
        }
        // Checks if price is a number and displays an alert when the value is not a number
        if (isNaN(addPrice.value)) {
            alert('The price must be a number.');
            return;
        }
    } catch (error) {
        alert.error("Error! Could not add: ", error);
    }
}
// saves updated information function// saves updated information function
function saveProduct() {
    try {
        // creates new object with values entered in input
        let editedProduct = {
            id: products.id + 1,
            make: document.getElementById('make').value,
            image: document.getElementById('image').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value
        };
        // pushes editProduct object in products array
        products.push(editedProduct);
        // stores the updated array in local storage
        localStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
        alert.error("Error! Could not save: ", error);
    }
}
// saves any and all changes when clicking buttton with id saveChanges
document.getElementById('saveChanges').addEventListener('click', function () {
    //calling functions
    addToProducts();
    saveProduct();
    displayProducts();
});


function editExistingProducts(index) {
    // retrieving items to edit
    let product = products;
    document.getElementById('make').value =product.make.value;
    document.getElementById('image').value =product.image.value;
    document.getElementById('description').value = product.description;
    document.getElementById('price').value = product.price;
    // show modal
    let modal = new bootstrap.Modal(document.querySelector('.edit'));
    modal.show();
    document.getElementById('saveChanges');
}
// to save edited product
function saveUpdatedProducts() {
    try {
        let index = document.getElementById('saveChanges');
        let updatedProducts = products[index];
        // new values for products
        editExistingProducts.make = document.getElementById('make').value;
        editExistingProducts.image = document.getElementById('image').value;
        editExistingProducts.description = document.getElementById('description').value;
        editExistingProducts.price = parseFloat(document.getElementById('price').value);
        products[index] = updatedProducts;
        localStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
        alert.error('An error occurred: ', error);
    }
}

//spinner
if(products.length===0){
    productsDisplay.innerHTML = `
    <div class="d-flex align-items-center">
    <strong role="status">Loading. . .</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>`
}  else {
// calling function produce with products array
    displayProducts(products)
};