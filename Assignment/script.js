// Fetch API data and render the product list
document.addEventListener("DOMContentLoaded", async () => {
  const productList = document.getElementById("product-list");
  const apiUrl = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(apiUrl);
    const products = await response.json();

    // Render products
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <p class="product-rating">Rating: ⭐${product.rating.rate}</p>
        `;

      productList.appendChild(productCard);
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    productList.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
});
