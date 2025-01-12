// Get elements
const loginButton = document.getElementById("login");
const modalOverlay = document.getElementById("login-modal");
const closeButton = document.querySelector(".modal-close");

// Show modal
loginButton.addEventListener("click", () => {
    modalOverlay.style.display = "flex"; // Flex layout for centering
});

// Hide modal when clicking close
closeButton.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

// Hide modal when clicking outside of it
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});
