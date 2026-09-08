<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Encoder - DevTools</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

    <header class="header">
        <div class="header-inner">
            <a href="/" class="logo">
                <span class="logo-icon">&lt;/&gt;</span>DevTools
            </a>
            <div class="header-nav">
                <a href="/" class="nav-link">All Tools</a>
                <a href="/url-encoder" class="nav-link active">URL Encoder</a>
                <a href="/url-decoder" class="nav-link">URL Decoder</a>
                <a href="/base64-encoder" class="nav-link">Base64</a>
            </div>
            <div class="header-actions">
                <button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
            </div>
        </div>
    </header>

    <main class="main">
        <div class="tool-header">
            <div class="tool-header-left">
                <a href="/" class="back-btn">←</a>
                <div>
                    <h1 class="tool-page-title">URL Encoder / Decoder</h1>
                    <p class="tool-page-desc">Encode and decode URL strings</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder="https://example.com?q=hello world"></textarea>
            </div>
            <div class="panel">
                <div class="panel-header">
                    <span>Output</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="copyBtn" title="Copy">⎘</button>
                    </div>
                </div>
                <pre id="output"></pre>
            </div>
        </div>

        <div class="actions">
            <button class="btn btn-primary" id="encodeBtn">Encode</button>
            <button class="btn btn-secondary" id="decodeBtn">Decode</button>
            <button class="btn btn-secondary" id="clearAllBtn">Clear All</button>
        </div>

        <div id="message"></div>
    </main>

    <footer class="footer">
        <p class="footer-text">© 2024 DevTools. All tools run locally in your browser.</p>
    </footer>

    <script src="/public/assets/js/theme.js"></script>
    <script>
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        const message = document.getElementById('message');

        function show(text, type = 'success') {
            message.textContent = text;
            message.className = type;
            if (text) setTimeout(() => message.textContent = '', 3000);
        }

        document.getElementById('encodeBtn').addEventListener('click', function() {
            output.textContent = encodeURIComponent(input.value || '');
            show('Encoded successfully!');
        });

        document.getElementById('decodeBtn').addEventListener('click', function() {
            try {
                output.textContent = decodeURIComponent(input.value || '');
                show('Decoded successfully!');
            } catch (e) {
                show('Invalid URL encoded string', 'error');
            }
        });

        document.getElementById('clearBtn').addEventListener('click', function() { input.value = ''; });
        document.getElementById('clearAllBtn').addEventListener('click', function() { input.value = ''; output.textContent = ''; });
        document.getElementById('copyBtn').addEventListener('click', async function() {
            if (output.textContent) {
                await navigator.clipboard.writeText(output.textContent);
                show('Copied to clipboard!');
            }
        });
    </script>

</body>
</html>
