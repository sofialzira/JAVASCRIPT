//    Get data from API
const cart = {
    userId: 1,
    date: new Date().toISOString().split('T')[0],
    products: []
  };

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const productsPromise = getProducts();

const productsArray = productsPromise.then((products) => {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
            <div>
                <span> ${product.title} </span>
            </div>
            <div>
                <img src="${product.image}" alt="${product.title}"> 
            </div>
            `;
    console.log(productCard);
    const element = document.getElementById("div");
    productCard.className = "product-card";
    element.append("beforeend", productCard);
    const button = productCard.appendChild(document.createElement(`button`))
    button.classList.add(`btn-add-to-cart`)
    const addToCartBtn = productCard.querySelector(".btn-add-to-cart");
    addToCartBtn.addEventListener("click", () => {
      addToCart(product.id);
    });
    return productCard;
  });
});


// Define the data you want to update
const addToCart = (productId) => {
    const productsInCart = cart.products.find(
      (product) => product.id === productId
    );
    if (!productsInCart) {
      cart.products.push({ productId, quantity: 1 });
    } else {
      productsInCart.quantity++;
    } 
    updateCart();
    
  };
  async function updateCart(){
     // Convert the data to JSON format
  const jsonData = {
    "userId":"1", 
    "date":"2019-12-10;", 
    "products":[{"productId":1,"quantity":1}, {"productId":2,"quantity":2}]};
  
  // Define the URL of the server endpoint
  const url = 'https://fakestoreapi.com/carts/7'; 
  
  // Configure the fetch options
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData }
  
  // Make the PUT request using the fetch API

  const response = await fetch(url, {
    method: "PUT",
    headers:{
        'Content-Type': 'application/json'
      },
      body:jsonData
    // ...
  });
  
  try {
    const response = await fetch('https://fakestoreapi.com/carts/7', {
      method: 'PUT',
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao conectar a Carts');
    }

    const data = await response.json();
    console.log('Cart atualizado com sucesso', data);
  } catch (error) {
    console.error('Erro ao atualizar o cart:', error);
  }
  }

    