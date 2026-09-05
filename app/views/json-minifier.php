<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>JSON Minifier - Minify JSON Online</title>

    <meta
        name="description"
        content="Minify JSON and reduce unnecessary spaces directly in your browser."
    >

    <link
        rel="stylesheet"
        href="/public/assets/css/style.css"
    >

<meta name="robots" content="index, follow">

<link rel="icon" href="/favicon.svg" type="image/svg+xml">

<meta property="og:title" content="JSON Minifier - Minify JSON Online">
<meta property="og:description" content="Minify JSON and reduce unnecessary spaces directly in your browser.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">
</head>


<body>


<header class="site-header">
<div class="container navbar">
<a href="/" class="logo">DevTools</a>
<nav class="main-nav">
<a href="/">Home</a>
<a href="/#tools">Tools</a>
<a href="/#converters">Converters</a>
<a href="/json-minifier">Json Minifier</a>
</nav>
<button id="themeToggle" class="theme-button" title="Toggle dark mode" aria-label="Toggle dark mode">&#9790;</button>
</div>
</header>


<main class="tool-page">

<section class="tool-page">

    <div class="container">

        <h1>
            JSON Minifier
        </h1>

        <p class="tool-description">
            Minify JSON by removing unnecessary whitespace and reduce file size.
        </p>


        <div class="tool-wrapper">


            <div class="tool-card-panel">

                <div class="tool-card-panel-header">

                    <strong>
                        Input JSON
                    </strong>

                </div>


                <textarea
                    class="tool-textarea" id="jsonInput"
                    placeholder='{
  "name": "Silva",
  "age": 22
}'
                ></textarea>


            </div>


            <div class="tool-actions">

                <button
                    id="minifyButton"
                    class="tool-btn tool-btn-primary"
                >
                    Minify JSON
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

                    <strong>
                        Result
                    </strong>

                    <button
                        id="copyButton"
                        class="tool-btn tool-btn-small"
                    >
                        Copy
                    </button>

                </div>


                <textarea
                    class="tool-textarea" id="jsonOutput"
                    readonly
                    placeholder="Minified JSON will appear here..."
                ></textarea>

            </div>


        </div>


        <section class="tool-help">

            <h2>
                What is JSON Minifier?
            </h2>

            <p>
                JSON Minifier removes all unnecessary whitespace from your JSON,
                reducing file size for faster transmission and smaller storage.
            </p>


            <h2>
                How to use JSON Minifier?
            </h2>

            <ol>

                <li>
                    Paste your formatted JSON into the input field.
                </li>

                <li>
                    Click Minify JSON.
                </li>

                <li>
                    Copy the minified result.
                </li>

            </ol>

        </section>

    </div>

</section>
</main>
<nav class="tool-navigation"><div class="nav-prev"><a href="/json-validator" class="nav-link">← JSON Validator</a></div><a href="/" class="nav-home">All Tools</a><div class="nav-next"><a href="/xml-formatter" class="nav-link">XML Formatter →</a></div></nav>



<footer class="footer">

    <div class="container">

        <p>
            &copy; 2026 DevTools
        </p>

    </div>

</footer>


<script
    src="/public/assets/js/json-minifier.js"
></script>


<script src="/public/assets/js/theme.js"></script>
<script src="/public/assets/js/shortcuts.js"></script>
<script src="/public/assets/js/download.js"></script>
</body>

</html>