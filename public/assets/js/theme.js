(function () {
    var savedTheme = localStorage.getItem('devtools-theme');
    var themeBtn = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');
    if (!themeBtn) return;

    function setTheme(dark) {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.innerHTML = '&#9788;';
            themeBtn.title = 'Switch to light mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.innerHTML = '&#9790;';
            themeBtn.title = 'Switch to dark mode';
        }
    }

    // Apply saved theme on load
    if (savedTheme === 'dark') {
        setTheme(true);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches && !savedTheme) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle on click
    themeBtn.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        setTheme(!isDark);
        localStorage.setItem('devtools-theme', !isDark ? 'dark' : 'light');
    });
})();
