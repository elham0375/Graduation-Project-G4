
document.querySelectorAll(".order-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        alert("تمت الإضافة إلى السلة بنجاح 🛒");
    });
});

document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const foodItems = document.querySelectorAll(".food-item");
    foodItems.forEach(function (item) {
        const itemName = item.querySelector(".card-title").textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});