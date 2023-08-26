document.addEventListener("DOMContentLoaded", function() {
    // Get the toggle button and body element
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if user has a preference in local storage
    if (localStorage.getItem("theme") === "dark") {
        body.setAttribute("data-theme", "dark");
    }

    // Add click event to the toggle button
    toggleButton.addEventListener("click", function() {
        if (body.getAttribute("data-theme") === "dark") {
            body.removeAttribute("data-theme");
            localStorage.removeItem("theme");
        } else {
            body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });
});