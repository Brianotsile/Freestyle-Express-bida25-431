// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsContainer = document.getElementById("cart-items");
let total = 0;

function displayCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0; // reset each time

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsContainer.innerHTML += `
            <div>
                <h3>${item.name}</h3>
                <p>Price: P${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function checkout() {
    alert("Thank you for your order!");
    localStorage.removeItem("cart");
    location.reload();
}

displayCart();