<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timestamp Converter - DevTools</title>
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
                <a href="/regex-tester" class="nav-link">Regex</a>
                <a href="/timestamp-converter" class="nav-link active">Timestamp</a>
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
                    <h1 class="tool-page-title">Timestamp Converter</h1>
                    <p class="tool-page-desc">Convert between Unix timestamps and human-readable dates</p>
                </div>
            </div>
        </div>

        <div class="editor">
            <div class="panel">
                <div class="panel-header">
                    <span>Input</span>
                    <div class="panel-actions">
                        <button class="btn-icon" id="nowBtn" title="Current time">🕐</button>
                        <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                    </div>
                </div>
                <textarea id="input" placeholder="1699999999 or 2024-01-01" style="min-height: 80px;"></textarea>
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
            if (!input.value.trim()) {
                output.textContent = '';
                return;
            }

            const num = parseInt(input.value);
            let results = [];

            if (!isNaN(num)) {
                const timestamp = num > 9999999999 ? num : num * 1000;
                const date = new Date(timestamp);
                results.push('Unix: ' + num);
                results.push('ISO: ' + date.toISOString());
                results.push('UTC: ' + date.toUTCString());
                results.push('Local: ' + date.toLocaleString());
                results.push('Relative: ' + timeAgo(date));
            } else {
                const date = new Date(input.value);
                if (isNaN(date)) {
                    output.textContent = 'Invalid date format';
                    show('Invalid date', 'error');
                    return;
                }
                results.push('Unix: ' + Math.floor(date.getTime() / 1000));
                results.push('ISO: ' + date.toISOString());
                results.push('UTC: ' + date.toUTCString());
                results.push('Local: ' + date.toLocaleString());
                results.push('Relative: ' + timeAgo(date));
            }

            output.textContent = results.join('\n\n');
            show('Converted successfully!');
        }

        function timeAgo(date) {
            const seconds = Math.floor((new Date() - date) / 1000);
            if (seconds < 0) return 'in the future';
            if (seconds < 60) return seconds + ' seconds ago';
            if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
            if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
            return Math.floor(seconds / 86400) + ' days ago';
        }

        input.addEventListener('input', convert);

        document.getElementById('nowBtn').addEventListener('click', function() {
            input.value = Date.now().toString();
            convert();
        });

        document.getElementById('clearBtn').addEventListener('click', function() {
            input.value = '';
            output.textContent = '';
        });

        document.getElementById('copyBtn').addEventListener('click', async function() {
            if (output.textContent) {
                await navigator.clipboard.writeText(output.textContent);
                show('Copied to clipboard!');
            }
        });
    </script>

</body>
</html>
