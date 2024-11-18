// Fetch product details from the FakeStore API and display on the page
const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            `;
      productsContainer.appendChild(productCard);
    });
  })
  .catch((err) => console.error("Error fetching products:", err));
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle the menu visibility on hamburger click
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
