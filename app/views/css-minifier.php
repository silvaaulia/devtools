<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Minifier - DevTools</title>
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
                <a href="/css-formatter" class="nav-link">CSS Formatter</a>
                <a href="/css-minifier" class="nav-link active">CSS Minifier</a>
                <a href="/javascript-minifier" class="nav-link">JS Minifier</a>
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
                    <h1 class="tool-page-title">CSS Minifier</h1>
                    <p class="tool-page-desc">Minify CSS for faster page loads and smaller file sizes</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>CSS Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="uploadBtn" title="Upload file">📂</button>
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder=".class { color: red; margin: 10px; }"></textarea>
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
                const css = input.value.trim();
                if (!css) {
                    show('Please enter CSS code', 'error');
                    return;
                }
                let minified = css
                    .replace(/\s+/g, ' ')
                    .replace(/\s*([{}:;,])\s*/g, '$1')
                    .replace(/;}/g, '}')
                    .trim();
                output.textContent = minified;
                show('Minified successfully!');
            } catch (e) {
                show(e.message, 'error');
            }
        }

        function format() {
            try {
                const css = input.value.trim();
                if (!css) {
                    show('Please enter CSS code', 'error');
                    return;
                }
                let formatted = css
                    .replace(/\s*([{}:;,])\s*/g, '$1')
                    .replace(/;/g, ';\n')
                    .replace(/\{/g, ' {\n')
                    .replace(/\}/g, '\n}\n')
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line)
                    .join('\n');
                output.textContent = formatted;
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
            const blob = new Blob([output.textContent], { type: 'text/css' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.css';
            a.click();
            URL.revokeObjectURL(url);
            show('Downloaded!');
        }

        function upload() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.css,.txt';
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
