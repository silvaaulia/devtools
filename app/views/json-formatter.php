<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Formatter - DevTools</title>
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
                <a href="/json-formatter" class="nav-link active">JSON</a>
                <a href="/json-validator" class="nav-link">JSON Validator</a>
                <a href="/xml-formatter" class="nav-link">XML</a>
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
                    <h1 class="tool-page-title">JSON Formatter</h1>
                    <p class="tool-page-desc">Format, minify, validate and manipulate JSON data</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>JSON Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="uploadBtn" title="Upload file">📂</button>
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder='{"name": "John", "age": 30, "city": "NYC"}'></textarea>
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
            <button class="btn btn-primary" id="fmtBtn">Format</button>
            <button class="btn btn-secondary" id="minBtn">Minify</button>
            <button class="btn btn-secondary" id="sortBtn">Sort Keys</button>
            <button class="btn btn-secondary" id="validateBtn">Validate</button>
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

        function getJSON() {
            try {
                return JSON.parse(input.value);
            } catch (e) {
                show('Invalid JSON: ' + e.message, 'error');
                return null;
            }
        }

        function format() {
            const json = getJSON();
            if (json === null) return;
            output.textContent = JSON.stringify(json, null, 2);
            show('Formatted successfully!');
        }

        function minify() {
            const json = getJSON();
            if (json === null) return;
            output.textContent = JSON.stringify(json);
            show('Minified successfully!');
        }

        function sortKeys() {
            const json = getJSON();
            if (json === null) return;

            function sortObject(obj) {
                if (Array.isArray(obj)) {
                    return obj.map(sortObject);
                } else if (typeof obj === 'object' && obj !== null) {
                    return Object.keys(obj).sort().reduce((result, key) => {
                        result[key] = sortObject(obj[key]);
                        return result;
                    }, {});
                }
                return obj;
            }

            const sorted = sortObject(json);
            output.textContent = JSON.stringify(sorted, null, 2);
            show('Keys sorted alphabetically!');
        }

        function validate() {
            const json = getJSON();
            if (json === null) {
                output.textContent = '';
                return;
            }
            output.textContent = JSON.stringify(json, null, 2);
            show('✓ Valid JSON!', 'success');
        }

        function downloadOutput() {
            if (!output.textContent) {
                show('No output to download', 'error');
                return;
            }
            const blob = new Blob([output.textContent], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.json';
            a.click();
            URL.revokeObjectURL(url);
            show('Downloaded!');
        }

        function uploadFile() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.json,.txt';
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                    input.value = e.target.result;
                    format();
                };
                reader.readAsText(file);
            };
            fileInput.click();
        }

        document.getElementById('fmtBtn').addEventListener('click', format);
        document.getElementById('minBtn').addEventListener('click', minify);
        document.getElementById('sortBtn').addEventListener('click', sortKeys);
        document.getElementById('validateBtn').addEventListener('click', validate);
        document.getElementById('downloadBtn').addEventListener('click', downloadOutput);
        document.getElementById('uploadBtn').addEventListener('click', uploadFile);
        document.getElementById('clearBtn').addEventListener('click', () => {
            input.value = '';
        });
        document.getElementById('clearAllBtn').addEventListener('click', () => {
            input.value = '';
            output.textContent = '';
        });
        document.getElementById('copyBtn').addEventListener('click', async () => {
            if (output.textContent) {
                await navigator.clipboard.writeText(output.textContent);
                show('Copied to clipboard!');
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') format();
        });
    </script>

</body>
</html>
