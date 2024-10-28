const productsContainer = document.getElementById("products-list");


async function fetchListOfProducts(){
    try{
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      if(result){
        displayProducts(result);
      }
    }catch(error){
        console.log(error)
    }
}

function displayProducts(getData){
    getData.map(productItem =>{

        const singleProductContainer = document.createElement("div");
        const productImage = document.createElement("img");
        const productTitle = document.createElement("h3");
        const productPrice = document.createElement("p");
        const productDescription = document.createElement("p");
        
        productImage.src = productItem.image;
        productTitle.textContent = productItem.title;
        productPrice.textContent = "$" + productItem.price;
        productDescription.textContent = productItem.description
        
        singleProductContainer.classList.add("single-product-container");
        productImage.classList.add("product-image");
        productTitle.classList.add("product-title");
        productPrice.classList.add("product-price");
        productDescription.classList.add("product-desc");
    
        singleProductContainer.appendChild(productImage);
        singleProductContainer.appendChild(productTitle);
        singleProductContainer.appendChild(productPrice);
        singleProductContainer.appendChild(productDescription);
    
        productsContainer.appendChild(singleProductContainer);
    
    })
       
   }

fetchListOfProducts();