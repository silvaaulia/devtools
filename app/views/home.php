<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DevTools - Free Online Developer Tools</title>
<meta name="description" content="Free online developer tools for formatting, validating, converting, encoding, and testing code. Fast, secure, browser-based.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<!-- HEADER -->
<header class="header">
<div class="container header-inner">
<a href="/" class="logo">
<span class="logo-icon">&lt;/&gt;</span>
DevTools
</a>

<div class="header-nav">
<button class="nav-link active" data-category="all">All Tools</button>
<button class="nav-link" data-category="formatters">Formatters</button>
<button class="nav-link" data-category="converters">Converters</button>
<button class="nav-link" data-category="encoders">Encoders</button>
<button class="nav-link" data-category="validators">Validators</button>
<button class="nav-link" data-category="testers">Testers</button>
</div>

<div class="header-actions">
<a href="https://github.com/silvaaulia/devtools" target="_blank" class="icon-btn" title="GitHub">&#128187;</a>
<button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
<button class="hamburger" id="hamburger" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div>

<!-- Mobile Menu -->
<nav class="mobile-nav" id="mobileNav">
<button class="nav-link active" data-category="all">All Tools</button>
<button class="nav-link" data-category="formatters">Formatters</button>
<button class="nav-link" data-category="converters">Converters</button>
<button class="nav-link" data-category="encoders">Encoders</button>
<button class="nav-link" data-category="validators">Validators</button>
<button class="nav-link" data-category="testers">Testers</button>
</nav>
</header>

<!-- HERO -->
<section class="hero">
<div class="container">
<h1 class="hero-title">
Free <span>Developer Tools</span>
</h1>
<p class="hero-subtitle">
Format, validate, convert, encode, and test your code instantly. No signup required.
</p>

<div class="search-box">
<span class="search-icon">&#128269;</span>
<input type="text" class="search-input" id="searchInput" placeholder="Search 30+ dev tools..." autocomplete="off">
</div>
</div>
</section>

<!-- TOOLS GRID -->
<main class="container">
<div class="tools-grid" id="toolsGrid"></div>
</main>

<!-- FOOTER -->
<footer class="footer">
<div class="container">
<p class="footer-text">
&copy; 2024 DevTools. All tools run locally in your browser.
</p>
</div>
</footer>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/home.js"></script>
<script>
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobileNav').classList.toggle('active');
});
</script>
</body>
</html>
