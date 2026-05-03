let items = [
  {id:1, name:"Lady's Jacket", price:400, image:"https://i1-c.pinimg.com/1200x/79/f4/67/79f467ca2fa462a5cfd65e8a6f689652.jpg"},
  {id:2, name:"Men's Shirts", price:700, image:"https://i.pinimg.com/736x/a1/6d/41/a16d41029d66f78a0e241db7efa03bbe.jpg"},
  {id:3, name:"Polo T-shirt", price:450, image:"https://i.pinimg.com/736x/9e/58/86/9e5886dcfeb7192de5adb15345f29c51.jpg"},
  {id:4, name:"Classic Combo Deal", price:400, image:"https://i1-c.pinimg.com/1200x/3c/05/11/3c05114f46887f3be1c7b62b43788f02.jpg"},

  {id:5, name:"Playstation 5", price:5200, image:"https://i.pinimg.com/736x/ad/a1/c0/ada1c06238d965d5af4aa70373b29c74.jpg"},
  {id:6, name:"Xbox X", price:1250, image:"https://i1-c.pinimg.com/736x/cd/ef/37/cdef37d49df388a45bb1137297b087e0.jpg"},
  {id:7, name:"Nintendo Switch", price:800, image:"https://i.pinimg.com/736x/1b/a4/97/1ba4973971898f18c18a994f52f1d6cd.jpg"},
  {id:8, name:"Playstation 4", price:2000, image:"https://i1-c.pinimg.com/736x/7c/13/76/7c1376abff084025a582cf853c44621a.jpg"},

  {id:9, name:"Women's Coats", price:200, image:"https://i1-c.pinimg.com/1200x/6c/b5/fd/6cb5fd293266701b2fd1828411837cfe.jpg"},
  {id:10, name:"Men's Coats", price:250, image:"https://i1-c.pinimg.com/736x/d7/66/98/d766982a84a3c818f6598e8eca6fea98.jpg"},
  {id:11, name:"Winter Outfits", price:300, image:"https://i1-c.pinimg.com/736x/57/8a/aa/578aaa2e1ba6c8d473c0d9d98e440990.jpg"},
  {id:12, name:"Winter Combo's", price:250, image:"https://i1-c.pinimg.com/736x/78/f9/30/78f930e8646ed019c461723ec8553199.jpg"},

  {id:13, name:"Smartphones", price:1700, image:"https://i.pinimg.com/736x/48/fd/b3/48fdb3578dc4a8d5c5b9544432eb0bc6.jpg"},
  {id:14, name:"Smart Watches", price:1250, image:"https://i.pinimg.com/736x/68/40/2c/68402ccf1d66ea3134acf6fca0ab8f22.jpg"},
  {id:15, name:"Laptops", price:1450, image:"https://i1-c.pinimg.com/1200x/82/e2/bd/82e2bd6dca1e2dcc65fecaa3dbebed22.jpg"},
  {id:16, name:"Bluetooth Speakers", price:450, image:"https://i1-c.pinimg.com/1200x/15/91/f2/1591f2734496bcf1eb48fbc48deb5993.jpg"},

  {id:17, name:"Accessories Combo", price:1900, image:"https://i.pinimg.com/736x/94/73/60/9473606e9728152ffb775190ce91b427.jpg"},
  {id:18, name:"Rolex Watch", price:1550, image:"https://i.pinimg.com/736x/6b/b8/66/6bb8668caacc29c102532b6fcb19bf74.jpg"},
  {id:19, name:"Chains", price:450, image:"https://i1-c.pinimg.com/1200x/79/57/ad/7957ad0f7a33b97358c381d6f8b5a769.jpg"},
  {id:20, name:"Necklace", price:400, image:"https://i1-c.pinimg.com/1200x/5a/f0/f4/5af0f42cb2dea150d4e2134fb7288973.jpg"},

  {id:21, name:"Home and Kitchen", price:1000, image:"https://i.pinimg.com/736x/6e/21/b7/6e21b70be1f84ee022247ac903514179.jpg"},
  {id:22, name:"Kitchen Finds", price:1550, image:"https://i.pinimg.com/736x/46/f3/00/46f30041bf43bf82b8f54c69776b117e.jpg"},
  {id:23, name:"Fresh Vegetable", price:100, image:"https://i1-c.pinimg.com/736x/ad/f6/b1/adf6b143e5951f35940c44cb580ce8b2.jpg"},
  {id:24, name:"Grocery Combo's", price:120, image:"https://i1-c.pinimg.com/1200x/71/69/7f/71697f46779c548c8b2c00bfe1c9d1b6.jpg"}
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= ADD TO CART ================= */
function addToCart(id){
  let product = items.find(p => p.id === id);

  let existing = cart.find(p => p.id === id);

  if(existing){
    existing.quantity += 1;
  } else {
    cart.push({...product, quantity:1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}

/* ================= UPDATE CART ================= */
function updateCart(){

  let cartItemsContainer = document.getElementById("cartItems");
  let totalElement = document.getElementById("total");
  let quantityElement = document.querySelector(".quantity");

  if(!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    totalQty += item.quantity;

    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x ${item.quantity}</span>
        <div>
          P${item.price * item.quantity}
        </div>
      </div>
    `;
  });

  if(totalElement) totalElement.innerText = total;
  if(quantityElement) quantityElement.innerText = totalQty;
}

/* ================= INIT ================= */
updateCart();

/* ================= DISPLAY PRODUCTS ================= */

let productGrid = document.getElementById("productGrid");

if(productGrid){
  items.forEach(item => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${item.image}">
        <h4>${item.name}</h4>
        <p>P${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `;
  });
}