<script>
const cartIcon = document.querySelector(".cart-icon");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");

cartIcon.addEventListener("click", () => {
    cartDrawer.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
});
</script>