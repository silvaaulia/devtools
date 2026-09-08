<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YAML to JSON Converter - DevTools</title>
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
                <a href="/yaml-to-json" class="nav-link active">YAML to JSON</a>
                <a href="/json-to-yaml" class="nav-link">JSON to YAML</a>
                <a href="/csv-to-json" class="nav-link">CSV Converters</a>
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
                    <h1 class="tool-page-title">YAML to JSON Converter</h1>
                    <p class="tool-page-desc">Convert YAML to JSON format</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>YAML Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="uploadBtn" title="Upload file">📂</button>
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder="name: John&#10email: john@example.com&#10age: 30"></textarea>
            </div>
            <div class="panel">
                <div class="panel-header">
                    <span>JSON Output</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="copyBtn" title="Copy">⎘</button>
                        <button class="btn-icon" id="downloadBtn" title="Download">📥</button>
                    </div>
                </div>
                <pre id="output"></pre>
            </div>
        </div>

        <div class="actions">
            <button class="btn btn-primary" id="convertBtn">Convert</button>
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

        function convert() {
            try {
                const lines = input.value.trim().split('\n');
                const result = {};
                const stack = [{ obj: result, indent: -1 }];

                for (let line of lines) {
                    if (!line.trim() || line.trim().startsWith('#')) continue;
                    const indent = line.search(/\S/);
                    const content = line.trim();

                    while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
                        stack.pop();
                    }

                    const current = stack[stack.length - 1].obj;

                    if (content.includes(':')) {
                        const colonIndex = content.indexOf(':');
                        let key = content.substring(0, colonIndex).trim();
                        let value = content.substring(colonIndex + 1).trim();

                        if (value === '' || value === '|' || value === '>') {
                            current[key] = {};
                            stack.push({ obj: current[key], indent: indent });
                        } else {
                            value = value.replace(/^['"]|['"]$/g, '');
                            if (!isNaN(value) && value !== '') current[key] = Number(value);
                            else if (value === 'true' || value === 'false') current[key] = value === 'true';
                            else if (value === 'null' || value === '~') current[key] = null;
                            else current[key] = value;
                        }
                    }
                }

                output.textContent = JSON.stringify(result, null, 2);
                show('Converted successfully!');
            } catch (e) {
                show(e.message, 'error');
            }
        }

        function download() {
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

        function upload() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.yaml,.yml,.txt';
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

        document.getElementById('convertBtn').addEventListener('click', convert);
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
