(function () {

    const savedTheme =
        localStorage.getItem("devtools-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Reuse existing button in navbar (already in HTML)
    const button =
        document.getElementById("themeToggle");

    if (!button) return;

    // Set initial icon based on current theme
    button.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";

    button.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const dark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "devtools-theme",
            dark ? "dark" : "light"
        );

        button.textContent =
            dark ? "☀️" : "🌙";

    });

})();
