<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevTools - Free Online Developer Tools</title>
    <meta name="description" content="Free online developer tools for formatting, validating, converting, encoding, and testing code. Fast, secure, browser-based.">
    <meta name="robots" content="index, follow">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

    <header class="header">
        <div class="header-inner">
            <a href="/" class="logo">
                <span class="logo-icon">&lt;/&gt;</span>DevTools
            </a>
            <div class="header-nav">
                <button class="nav-link active" data-category="all">All Tools</button>
                <button class="nav-link" data-category="formatters">Formatters</button>
                <button class="nav-link" data-category="minifiers">Minifiers</button>
                <button class="nav-link" data-category="converters">Converters</button>
                <button class="nav-link" data-category="encoders">Encoders</button>
                <button class="nav-link" data-category="validators">Validators</button>
                <button class="nav-link" data-category="testers">Testers</button>
            </div>
            <div class="header-actions">
                <button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
                <button class="hamburger" id="hamburger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <nav class="mobile-nav" id="mobileNav">
            <button class="nav-link active" data-category="all">All Tools</button>
            <button class="nav-link" data-category="formatters">Formatters</button>
            <button class="nav-link" data-category="minifiers">Minifiers</button>
            <button class="nav-link" data-category="converters">Converters</button>
            <button class="nav-link" data-category="encoders">Encoders</button>
            <button class="nav-link" data-category="validators">Validators</button>
            <button class="nav-link" data-category="testers">Testers</button>
        </nav>
    </header>

    <section class="hero">
        <div class="container">
            <div class="hero-badge">
                <span>30+ Free Developer Tools</span>
            </div>
            <h1 class="hero-title">Free <span>Developer Tools</span></h1>
            <p class="hero-subtitle">Format, validate, convert, encode, and test your code instantly. No signup required.</p>
            <div class="search-box">
                <span class="search-icon">&#128269;</span>
                <input type="text" class="search-input" id="searchInput" placeholder="Search tools..." autocomplete="off">
            </div>
        </div>
    </section>

    <main class="container tools-section">
        <div class="tools-grid" id="toolsGrid"></div>
    </main>

    <footer class="footer">
        <p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p>
    </footer>

    <script src="/public/assets/js/theme.js"></script>
    <script src="/public/assets/js/home.js"></script>
    <script>
        document.getElementById('hamburger')?.addEventListener('click', function () {
            this.classList.toggle('active');
            document.getElementById('mobileNav')?.classList.toggle('active');
        });
    </script>

</body>
</html>
