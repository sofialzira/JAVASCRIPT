//    1. Get data from API

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
            console.log(productCard)
        const element = document.getElementById("div");
        element.append("beforeend", productCard);
      });
});
