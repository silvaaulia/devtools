<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON to YAML Converter - DevTools</title>
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
                <a href="/yaml-to-json" class="nav-link">YAML to JSON</a>
                <a href="/json-to-yaml" class="nav-link active">JSON to YAML</a>
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
                    <h1 class="tool-page-title">JSON to YAML Converter</h1>
                    <p class="tool-page-desc">Convert JSON to YAML format</p>
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
                <textarea id="input" placeholder='{"name": "John", "email": "john@example.com"}'></textarea>
            </div>
            <div class="panel">
                <div class="panel-header">
                    <span>YAML Output</span>
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

        function jsonToYaml(obj, indent = 0) {
            let yaml = '';
            const spaces = '  '.repeat(indent);

            if (Array.isArray(obj)) {
                obj.forEach(item => {
                    if (typeof item === 'object' && item !== null) {
                        yaml += spaces + '-\n' + jsonToYaml(item, indent + 1);
                    } else {
                        yaml += spaces + '- ' + formatValue(item) + '\n';
                    }
                });
            } else if (typeof obj === 'object' && obj !== null) {
                for (let key in obj) {
                    const value = obj[key];
                    if (typeof value === 'object' && value !== null) {
                        yaml += spaces + key + ':\n' + jsonToYaml(value, indent + 1);
                    } else {
                        yaml += spaces + key + ': ' + formatValue(value) + '\n';
                    }
                }
            }

            return yaml;
        }

        function formatValue(value) {
            if (value === null) return 'null';
            if (typeof value === 'boolean') return value ? 'true' : 'false';
            if (typeof value === 'number') return value.toString();
            if (typeof value === 'string') {
                if (value.includes(':') || value.includes('#') || value.includes('\n') || value.includes('"')) {
                    return '"' + value.replace(/"/g, '\\"') + '"';
                }
                return value;
            }
            return value;
        }

        function convert() {
            try {
                const json = JSON.parse(input.value);
                output.textContent = jsonToYaml(json).trim();
                show('Converted successfully!');
            } catch (e) {
                show('Invalid JSON: ' + e.message, 'error');
            }
        }

        function download() {
            if (!output.textContent) {
                show('No output to download', 'error');
                return;
            }
            const blob = new Blob([output.textContent], { type: 'text/yaml' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'output.yaml';
            a.click();
            URL.revokeObjectURL(url);
            show('Downloaded!');
        }

        function upload() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.json,.txt';
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
