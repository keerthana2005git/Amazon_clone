console.log("JavaScript is connected!");

document.addEventListener('DOMContentLoaded', function () {
    // Sign in click alert
    document.querySelector('.nav-signin').addEventListener('click', function () {
        alert('Redirecting to Sign In Page...');
    });

    // Search bar action
    document.querySelector('.search-icon').addEventListener('click', function () {
        const input = document.querySelector('.search-input').value;
        if (input.trim() === '') {
            alert('Please enter a product name to search');
        } else {
            alert(`Searching for "${input}"...`);
        }
    });

    // Back to Top scroll
    document.querySelector('.foot-panel1').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover animation for cart icon
    const cartIcon = document.querySelector('.nav-cart i');
    cartIcon.addEventListener('mouseenter', () => {
        cartIcon.style.color = '#ff9900';
    });
    cartIcon.addEventListener('mouseleave', () => {
        cartIcon.style.color = 'white';
    });

    // Prime dropdown mock
    const primeSelect = document.querySelector('.panel-ops select');
    primeSelect.addEventListener('change', function () {
        alert(`You selected: ${this.value}`);
    });
    const products = [
  { title: "Clothes", image: "box1_image.jpg" },
  { title: "Health & Personal care", image: "box2_image.jpg" },
  { title: "Furniture", image: "box3_image.jpg" },
  { title: "Styles for Women", image: "box4_image.jpg" },
  { title: "Head Phones", image: "box5_image.jpg" },
  { title: "Home Essentials", image: "box6_image.jpg" },
  { title: "Most Loved Products", image: "box7_image.jpg" },
  { title: "Up to 60% Off", image: "box8_image.jpg" }
];

function renderProducts() {
  const container = document.getElementById("shop-section");
  container.innerHTML = ""; // Clear existing
  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
      <div class="box-content">
        <h2>${product.title}</h2>
        <div class="box-img" style="background-image: url('${product.image}');"></div>
        <p class="see-more" data-title="${product.title}">See more</p>
        <button class="add-to-cart" data-title="${product.title}">Add to Cart</button>
      </div>
    `;
    container.appendChild(box);
  });
}
renderProducts();
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const productTitle = e.target.getAttribute("data-title");
    cart.push(productTitle);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added "${productTitle}" to cart!`);
  }
});
function updateCartCount() {
  document.querySelector('.nav-cart').innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
}
updateCartCount();
document.querySelector('.nav-signin').addEventListener('click', function () {
  document.getElementById("login-modal").style.display = "flex";
});

document.getElementById("login-btn").addEventListener("click", function () {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (user && pass.length >= 4) {
    localStorage.setItem("amazonUser", user);
    document.getElementById("login-modal").style.display = "none";
    alert(`Welcome, ${user}`);
  } else {
    alert("Enter valid username and password (min 4 characters)");
  }
});



});
