
const themeBtn = document.getElementById("themeBtn");
const yearElement = document.getElementById("year");

// Display the current year
yearElement.textContent = new Date().getFullYear();

// Switch between dark mode and light mode
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    themeBtn.textContent = isLightMode
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";

    themeBtn.setAttribute(
        "aria-label",
        isLightMode ? "Switch to dark theme" : "Switch to light theme"
    );
});
