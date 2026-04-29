// ============================
// AUTH CENTRAL SYSTEM
// auth.js
// ============================

// CHECK LOGIN STATUS
function isUserLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

// FORCE LOGIN CHECK FOR CHECKOUT
function checkLoginBeforeCheckout(callback) {
    if (!isUserLoggedIn()) {
        alert("Please login first before checking out.");
        window.location.href = "login.html";
        return false;
    }

    if (typeof callback === "function") {
        callback();
    }

    return true;
}

// GLOBAL CHECKOUT WRAPPER
function checkoutSelectedGlobal(getItemsCallback) {
    checkLoginBeforeCheckout(() => {
        const items = getItemsCallback();

        if (!items || items.length === 0) {
            alert("Please select items first.");
            return;
        }

        localStorage.setItem("checkoutCart", JSON.stringify(items));
        window.location.href = "checkout.html";
    });
}



// ============================
// DRAWER CHECKOUT HANDLER
// ============================

function checkoutFromDrawer() {

    if (!isUserLoggedIn()) {
        alert("Please login first before checking out.");
        window.location.href = "login.html";
        return;
    }

    const items = getSelectedCartItems();

    if (!items || items.length === 0) {
        alert("Please select items first before checking out.");
        return;
    }

    localStorage.setItem("checkoutCart", JSON.stringify(items));
    window.location.href = "checkout.html";
}


function getSelectedCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.filter(item => item.checked);
}


