// declaring an empty array to push products into
let products = [];

// created a constructor function to create products
function ProductsConstruction (make, url, description, price, action){
    this.make = make,
    this.url = url,
    this.description = description,
    this.price = price,
    this.action = action;
}
// creating individual objects to be pushed into empty array created earlier
let firstProduct = new ProductsConstruction ('Hewlett-Packard', "https://drive.google.com/file/d/1Wf7rK4sSlT_7GEZx61a8nY1xlpBhbpXI/view?usp=drive_link", "Victus 15 i5 RTX 3050 it comes with 1TB SSD and is designed with the latest gaming hardware, the victus 15 can take the user above and beyond.",  15,499);
let secondProduct = new ProductsConstruction('Apple', "https://drive.google.com/file/d/1fV_hU2ZTMZDuwQ3VD9NZ5tx5dqa7EWs1/view?usp=drive_link", 'The iPhone 15 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle', 30000,);
let thirdProduct = new ProductsConstruction('Sony', "https://drive.google.com/file/d/1kcsMeuV5IDeK8bndOi09W0vACMD5fZF9/view?usp=drive_link", "The PS5 is one of the best consoles thanks to its powerful hardware, exclusives, and 4K Blu-ray drive.", 14000);
let fourthProduct = new ProductsConstruction('Samsung', 'https://drive.google.com/file/d/1QB_6WYw78ERkKwlSApkHAWe0OJ6N1hsX/view?usp=drive_link', "Meet the new Galaxy S23 Ultra, designed with the planet in mind and equipped with a built-in S Pen, Nightography camera and powerful chip for epic gaming", 37.000);
let fifthProduct = new ProductsConstruction('Xbox',"https://drive.google.com/file/d/1r2zsF6P1g8UXqOla4d_Q345rqA-q7SHz/view?usp=drive_link", "Introducing Xbox Series X, the fastest, most powerful Xbox ever.", 14000)

// push created objects into array
products.push(ProductsConstruction,firstProduct);
products.push(ProductsConstruction,secondProduct);
products.push(ProductsConstruction,thirdProduct);
products.push(ProductsConstruction,fourthProduct);
products.push(ProductsConstruction,fifthProduct);

// setting products to local storage and converting to a string
localStorage.setItem("products",JSON.stringify(products))
//  convert string products into readable object
products = JSON.parse(localStorage.getItem("products"))

// selecting HTML element to display information
let productsDisplay = document.querySelector('table');

// creating a function to map through and display items
function displayProducts(){
    let productsMap = products.map(function(item,index){
        return`

        <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
        </tr>
        
                <td> ${item.make}: </td>
                <td> <img src="${item.url}" alt="${item.make}" height="100" width="100"> </td>
                <td> ${item.description} </td>
                <td> R${item.price} </td>
                <td> ${item.quantity} </td>
                <td><button>Edit</button></td>
                <td><button class ="delete">Delete</button></td>
            </tr> 

        `
    });
    //displays the above
    productsDisplay.innerHTML = productsMap.join('');
}
// calling the function
displayProducts();
