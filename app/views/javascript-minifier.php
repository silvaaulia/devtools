<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Minifier - DevTools</title>
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
                <a href="/javascript-minifier" class="nav-link active">JS Minifier</a>
                <a href="/css-minifier" class="nav-link">CSS Minifier</a>
                <a href="/json-minifier" class="nav-link">JSON Minifier</a>
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
                    <h1 class="tool-page-title">JavaScript Minifier</h1>
                    <p class="tool-page-desc">Minify JavaScript for faster page loads</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>JavaScript Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="uploadBtn" title="Upload file">📂</button>
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder="function hello() { console.log('Hello'); }"></textarea>
            </div>
            <div class="panel">
                <div class="panel-header">
                    <span>Output</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="copyBtn" title="Copy">⎘</button>
                        <button class="btn-icon" id="downloadBtn" title="Download">📥</button>
                    </div>
                </div>
                <pre id="output"></pre>
            </div>
        </div>

        <div class="actions">
            <button class="btn btn-primary" id="minifyBtn">Minify</button>
            <button class="btn btn-secondary" id="formatBtn">Format</button>
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

        function minify() {
            try {
                const js = input.value.trim();
                if (!js) {
                    show('Please enter JavaScript code', 'error');
                    return;
                }
                let minified = js
                    .replace(/\/\/.*$/gm, '')
                    .replace(/\/\*[\s\S]*?\*\//g, '')
                    .replace(/\s+/g, ' ')
                    .replace(/\s*([{}()[\];,=<>+*/&|!?:-])\s*/g, '$1')
                    .replace(/;\}/g, '}')
                    .trim();
                output.textContent = minified;
                show('Minified successfully!');
            } catch (e) {
                show(e.message, 'error');
            }
        }

        function format() {
            try {
                const js = input.value.trim();
                if (!js) {
                    show('Please enter JavaScript code', 'error');
                    return;
                }
                output.textContent = js;
                show('Formatted successfully!');
            } catch (e) {
                show(e.message, 'error');
            }
        }

        function download() {
            if (!output.textContent) {
                show('No output to download', 'error');
                return;
            }
            const blob = new Blob([output.textContent], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.js';
            a.click();
            URL.revokeObjectURL(url);
            show('Downloaded!');
        }

        function upload() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.js,.txt';
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    input.value = e.target.result;
                };
                reader.readAsText(file);
            };
            fileInput.click();
        }

        document.getElementById('minifyBtn').addEventListener('click', minify);
        document.getElementById('formatBtn').addEventListener('click', format);
        document.getElementById('downloadBtn').addEventListener('click', download);
        document.getElementById('uploadBtn').addEventListener('click', upload);
        document.getElementById('clearBtn').addEventListener('click', () => { input.value = ''; });
        document.getElementById('clearAllBtn').addEventListener('click', () => { input.value = ''; output.textContent = ''; });
        document.getElementById('copyBtn').addEventListener('click', async () => {
            if (output.textContent) {
                await navigator.clipboard.writeText(output.textContent);
                show('Copied to clipboard!');
            }
        });
    </script>

</body>
</html>
