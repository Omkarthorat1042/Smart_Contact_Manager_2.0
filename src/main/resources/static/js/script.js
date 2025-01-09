console.log("script loaded");

// Get the initial theme from localStorage or default to "light"
let currentTheme = getTheme();

// Apply the theme on page load
document.addEventListener("DOMContentLoaded", () => {
    changePageTheme(currentTheme, null); // Apply the theme on load
    initializeThemeChangeListener(); // Set up the theme change button
});

// Function to set up the theme change button listener
function initializeThemeChangeListener() {
    const changeThemeButton = document.querySelector("#theme_change_button");

    if (changeThemeButton) {
        changeThemeButton.addEventListener("click", () => {
            console.log("Change theme button clicked");

            const oldTheme = currentTheme; // Save the current theme
            currentTheme = currentTheme === "dark" ? "light" : "dark"; // Toggle the theme

            changePageTheme(currentTheme, oldTheme); // Apply the new theme
        });
    }
}

// Set theme to localStorage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

// Get theme from localStorage
function getTheme() {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "light"; // Default to "light" if no theme is saved
}

// Change current page theme
function changePageTheme(theme, oldTheme) {
    setTheme(theme); // Update the theme in localStorage

    const htmlElement = document.querySelector("html");
    if (oldTheme) {
        htmlElement.classList.remove(oldTheme); // Remove the old theme
    }
    htmlElement.classList.add(theme); // Add the new theme

    // Update the button text
    const changeThemeButton = document.querySelector("#theme_change_button");
    if (changeThemeButton) {
        changeThemeButton.querySelector("span").textContent =
            theme === "light" ? "dark" : "light";
    }
}
