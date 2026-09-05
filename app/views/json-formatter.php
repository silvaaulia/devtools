<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JSON Formatter - Beautify JSON Online</title>
    <meta name="description" content="Format and beautify JSON online with a fast, free browser-based JSON formatter.">

    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="JSON Formatter - Beautify JSON Online">
<meta property="og:description" content="Format and beautify JSON online with a fast, free browser-based JSON formatter.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">

<link rel="stylesheet" href="/public/assets/css/style.css">
<meta name="robots" content="index, follow">
</head>

<body>

<header class="site-header">
<div class="container navbar">
<a href="/" class="logo">DevTools</a>
<nav class="main-nav">
<a href="/">Home</a>
<a href="/#tools">Tools</a>
<a href="/#converters">Converters</a>
<a href="/json-formatter">Json Formatter</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>

<main class="tool-page">
<section class="tool-page">

    <div class="container">

        <h1>JSON Formatter</h1>

        <p class="tool-description">
            Format and beautify JSON directly in your browser.
            Fast, free and secure.
        </p>

        <div class="tool-wrapper">

            <div class="tool-card-panel">

                <div class="tool-card-panel-header">
                    <strong>Input JSON</strong>

                    <label class="upload-button">
                        Upload JSON
                        <input
                            type="file"
                            id="fileInput"
                            accept=".json,application/json"
                            hidden
                        >
                    </label>
                </div>

                <textarea
                    class="tool-textarea" id="jsonInput"
                    placeholder='{
  "name": "Silva",
  "age": 22,
  "skills": [
    "UI/UX",
    "HTML",
    "CSS"
  ]
}'
                ></textarea>

                <div class="tool-info">
                    You can also drag & drop a JSON file here.
                </div>

            </div>

            <div class="tool-actions">

                <button
                    id="formatButton"
                    class="tool-btn tool-btn-primary"
                >
                    Format JSON
                </button>

                <button
                    id="minifyButton"
                    class="tool-btn tool-btn-secondary"
                >
                    Minify
                </button>

                <button
                    id="clearButton"
                    class="tool-btn tool-btn-secondary"
                >
                    Clear
                </button>

            </div>

            <div
                id="errorMessage"
                class="tool-error"
            ></div>

            <div class="tool-card-panel">

                <div class="tool-card-panel-header">

                    <strong>Result</strong>

                    <div class="result-actions">

                        <button
                            id="copyButton"
                            class="tool-btn tool-btn-small"
                        >
                            Copy
                        </button>

                        <button
                            id="downloadButton"
                            class="tool-btn tool-btn-small"
                        >
                            Download
                        </button>

                    </div>

                </div>

                <textarea
                    class="tool-textarea" id="jsonOutput"
                    readonly
                    placeholder="Formatted JSON will appear here..."
                ></textarea>

            </div>

        </div>

        <section class="tool-help">

            <h2>What is JSON Formatter?</h2>

            <p>
                JSON Formatter is an online developer tool that makes
                JSON data easier to read by adding proper indentation
                and formatting.
            </p>

            <h2>Features</h2>

            <ul>
                <li>Format and beautify JSON</li>
                <li>Minify JSON</li>
                <li>Upload JSON files</li>
                <li>Drag and drop JSON files</li>
                <li>Copy formatted JSON</li>
                <li>Download JSON files</li>
                <li>Runs directly in your browser</li>
            </ul>

        </section>

    </div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/json-validator" class="nav-link">JSON Validator →</a></div></nav>


<footer class="footer">
    <div class="container">
        <p>&copy; 2026 DevTools. All rights reserved.</p>
    </div>
</footer>

<script src="/public/assets/js/json-formatter.js"></script>

<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>
</html>