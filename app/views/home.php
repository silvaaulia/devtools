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

<nav class="nav-categories" id="navCategories">
<button class="nav-link active" data-category="all">All Tools</button>
<button class="nav-link" data-category="formatters">Formatters</button>
<button class="nav-link" data-category="minifiers">Minifiers</button>
<button class="nav-link" data-category="converters">Converters</button>
<button class="nav-link" data-category="encoders">Encoders</button>
<button class="nav-link" data-category="validators">Validators</button>
<button class="nav-link" data-category="testers">Testers</button>
</nav>

<div class="header-actions">
<button class="icon-btn" id="themeToggle" title="Toggle theme" aria-label="Toggle theme">
<span id="themeIcon">&#9790;</span>
</button>
</div>
</div>
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
<input type="text" class="search-input" id="searchInput" placeholder="Search tools..." autocomplete="off">
</div>
</div>
</section>

<!-- ALL TOOLS -->
<main class="container">

<!-- FORMATTERS -->
<section class="section" data-category="formatters">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#9998;</span>
Formatters
</h2>
</div>
<div class="tools-grid" id="formattersGrid"></div>
</section>

<!-- MINIFIERS -->
<section class="section" data-category="minifiers">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#128195;</span>
Minifiers
</h2>
</div>
<div class="tools-grid" id="minifiersGrid"></div>
</section>

<!-- CONVERTERS -->
<section class="section" data-category="converters">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#128260;</span>
Converters
</h2>
</div>
<div class="tools-grid" id="convertersGrid"></div>
</section>

<!-- ENCODERS -->
<section class="section" data-category="encoders">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#128274;</span>
Encoders & Decoders
</h2>
</div>
<div class="tools-grid" id="encodersGrid"></div>
</section>

<!-- VALIDATORS -->
<section class="section" data-category="validators">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#10004;</span>
Validators
</h2>
</div>
<div class="tools-grid" id="validatorsGrid"></div>
</section>

<!-- TESTERS -->
<section class="section" data-category="testers">
<div class="section-header">
<h2 class="section-title">
<span class="section-title-icon">&#128270;</span>
Testers & Utilities
</h2>
</div>
<div class="tools-grid" id="testersGrid"></div>
</section>

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
</body>
</html>
