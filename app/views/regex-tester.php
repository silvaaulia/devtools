<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Regex Tester - DevTools</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/public/assets/css/style.css">
    <style>
        .regex-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .regex-pattern-section {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 16px;
        }
        .regex-pattern-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }
        .regex-pattern-header label {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
        }
        #matchCount {
            font-size: 13px;
            font-weight: 600;
            color: var(--accent);
        }
        .regex-pattern-input {
            width: 100%;
            min-height: 60px;
            padding: 12px;
            background: var(--bg-input);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            color: var(--text-primary);
            font-family: 'Fira Code', monospace;
            font-size: 14px;
            resize: vertical;
            outline: none;
        }
        .regex-pattern-input:focus {
            border-color: var(--accent);
        }
        .regex-flags {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 12px;
        }
        .regex-flags label {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--text-secondary);
            cursor: pointer;
        }
        .regex-flags input[type="checkbox"] {
            accent-color: var(--accent);
        }
        .regex-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .regex-panel {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            overflow: hidden;
        }
        .regex-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
        }
        .regex-panel-header span {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
        }
        .regex-panel-actions {
            display: flex;
            gap: 4px;
        }
        .regex-panel-content {
            padding: 0;
        }
        .regex-panel textarea,
        .regex-panel pre {
            width: 100%;
            min-height: 150px;
            padding: 16px;
            background: var(--bg-input);
            border: none;
            color: var(--text-primary);
            font-family: 'Fira Code', monospace;
            font-size: 13px;
            line-height: 1.6;
            resize: vertical;
            outline: none;
        }
        .regex-panel pre {
            min-height: 150px;
            white-space: pre-wrap;
            overflow: auto;
        }
        .regex-presets {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius);
            padding: 16px;
        }
        .regex-presets-header {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 12px;
        }
        .regex-presets-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .regex-preset-btn {
            padding: 6px 12px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            color: var(--text-secondary);
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .regex-preset-btn:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
        .match-success {
            color: #22c55e;
        }
        .match-error {
            color: #ef4444;
        }
        @media (max-width: 768px) {
            .regex-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <header class="header">
        <div class="header-inner">
            <a href="/" class="logo">
                <span class="logo-icon">&lt;/&gt;</span>DevTools
            </a>
            <div class="header-nav">
                <a href="/" class="nav-link">All Tools</a>
                <a href="/regex-tester" class="nav-link active">Regex Tester</a>
                <a href="/timestamp-converter" class="nav-link">Timestamp</a>
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
                    <h1 class="tool-page-title">Regex Tester</h1>
                    <p class="tool-page-desc">Test and debug regular expressions with real-time matching</p>
                </div>
            </div>
        </div>

        <div class="regex-container">
            <!-- Pattern Section -->
            <div class="regex-pattern-section">
                <div class="regex-pattern-header">
                    <label>Regular Expression Pattern</label>
                    <span id="matchCount">0 matches</span>
                </div>
                <textarea id="pattern" class="regex-pattern-input" placeholder="Enter your regex pattern, e.g.: ^\w+@\w+\.\w+$"></textarea>
                <div class="regex-flags">
                    <label><input type="checkbox" id="flagG" checked> Global (g)</label>
                    <label><input type="checkbox" id="flagI"> Case Insensitive (i)</label>
                    <label><input type="checkbox" id="flagM"> Multiline (m)</label>
                    <label><input type="checkbox" id="flagS"> Dot All (s)</label>
                    <label><input type="checkbox" id="flagU"> Unicode (u)</label>
                </div>
            </div>

            <!-- Presets Section -->
            <div class="regex-presets">
                <div class="regex-presets-header">Quick Patterns</div>
                <div class="regex-presets-list">
                    <button class="regex-preset-btn" data-pattern="^\w+@\w+\.\w+$">Email</button>
                    <button class="regex-preset-btn" data-pattern="https?:\/\/[^\s]+">URL</button>
                    <button class="regex-preset-btn" data-pattern="^\d{4}-\d{2}-\d{2}$">Date (YYYY-MM-DD)</button>
                    <button class="regex-preset-btn" data-pattern="^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$">IP Address</button>
                    <button class="regex-preset-btn" data-pattern="^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$">Hex Color</button>
                    <button class="regex-preset-btn" data-pattern="^\+?[1-9]\d{1,14}$">Phone</button>
                    <button class="regex-preset-btn" data-pattern="<[^>]+>">HTML Tags</button>
                    <button class="regex-preset-btn" data-pattern="^\d+$">Numbers Only</button>
                    <button class="regex-preset-btn" data-pattern="[A-Z]{2}\d{3,}">Plate Number</button>
                </div>
            </div>

            <!-- Test String & Output Grid -->
            <div class="regex-grid">
                <div class="regex-panel">
                    <div class="regex-panel-header">
                        <span>Test String</span>
                        <div class="regex-panel-actions">
                            <button class="btn-icon" id="uploadBtn" title="Upload file">📂</button>
                            <button class="btn-icon" id="clearBtn" title="Clear">✕</button>
                        </div>
                    </div>
                    <div class="regex-panel-content">
                        <textarea id="testString" placeholder="Enter text to test against the regex pattern..."></textarea>
                    </div>
                </div>
                <div class="regex-panel">
                    <div class="regex-panel-header">
                        <span>Matches</span>
                        <div class="regex-panel-actions">
                            <button class="btn-icon" id="copyBtn" title="Copy">⎘</button>
                        </div>
                    </div>
                    <div class="regex-panel-content">
                        <pre id="output"></pre>
                    </div>
                </div>
            </div>

            <!-- Replace Section -->
            <div class="regex-pattern-section">
                <div class="regex-pattern-header">
                    <label>Replace (Optional)</label>
                </div>
                <textarea id="replaceWith" class="regex-pattern-input" placeholder="Enter replacement string (use $1, $2 for captured groups)" style="min-height: 40px;"></textarea>
                <div class="actions" style="margin-top: 12px;">
                    <button class="btn btn-primary" id="replaceBtn">Replace All</button>
                    <button class="btn btn-secondary" id="clearAllBtn">Clear All</button>
                </div>
            </div>

            <div id="message"></div>
        </div>
    </main>

    <footer class="footer">
        <p class="footer-text">© 2024 DevTools. All tools run locally in your browser.</p>
    </footer>

    <script src="/public/assets/js/theme.js"></script>
    <script>
        var pattern = document.getElementById('pattern');
        var testString = document.getElementById('testString');
        var replaceWith = document.getElementById('replaceWith');
        var output = document.getElementById('output');
        var matchCount = document.getElementById('matchCount');
        var message = document.getElementById('message');

        function show(text, type) {
            message.textContent = text;
            message.className = type || 'success';
            if (text) {
                setTimeout(function() { message.textContent = ''; }, 3000);
            }
        }

        function run() {
            var patternValue = pattern.value;

            if (!patternValue) {
                output.textContent = '';
                matchCount.textContent = '0 matches';
                matchCount.className = '';
                return;
            }

            try {
                var flags = '';
                if (document.getElementById('flagG').checked) flags += 'g';
                if (document.getElementById('flagI').checked) flags += 'i';
                if (document.getElementById('flagM').checked) flags += 'm';
                if (document.getElementById('flagS').checked) flags += 's';
                if (document.getElementById('flagU').checked) flags += 'u';

                var regex = new RegExp(patternValue, flags);
                var results = [];
                var match;
                var count = 0;
                var testValue = testString.value || '';

                if (testValue) {
                    if (flags.indexOf('g') !== -1) {
                        while ((match = regex.exec(testValue)) !== null) {
                            count++;
                            var groups = match.slice(1);
                            var resultLine = 'Match ' + count + ': "' + match[0] + '" at index ' + match.index;
                            if (groups.length > 0) {
                                resultLine += '\n  Groups: ' + groups.map(function(g) { return '"' + g + '"'; }).join(', ');
                            }
                            results.push(resultLine);
                        }
                    } else {
                        match = regex.exec(testValue);
                        if (match) {
                            count = 1;
                            var resultLine = 'Match 1: "' + match[0] + '" at index ' + match.index;
                            var groups = match.slice(1);
                            if (groups.length > 0) {
                                resultLine += '\n  Groups: ' + groups.map(function(g) { return '"' + g + '"'; }).join(', ');
                            }
                            results.push(resultLine);
                        }
                    }
                }

                if (count > 0) {
                    output.textContent = results.join('\n\n');
                    matchCount.textContent = count + ' match' + (count !== 1 ? 'es' : '');
                    matchCount.className = 'match-success';
                    show('Found ' + count + ' match' + (count !== 1 ? 'es' : ''), 'success');
                } else {
                    output.textContent = 'No matches found';
                    matchCount.textContent = 'No matches';
                    matchCount.className = '';
                }
            } catch (e) {
                output.textContent = 'Error: ' + e.message;
                matchCount.textContent = 'Invalid pattern';
                matchCount.className = 'match-error';
            }
        }

        function replaceAll() {
            var patternValue = pattern.value;
            var replaceValue = replaceWith.value;
            var testValue = testString.value;

            if (!patternValue || !testValue) {
                show('Enter pattern and test string first', 'error');
                return;
            }

            try {
                var flags = 'g';
                if (document.getElementById('flagI').checked) flags += 'i';
                if (document.getElementById('flagM').checked) flags += 'm';
                if (document.getElementById('flagS').checked) flags += 's';
                if (document.getElementById('flagU').checked) flags += 'u';

                var regex = new RegExp(patternValue, flags);
                var result = testValue.replace(regex, replaceValue || '');
                testString.value = result;
                show('Replaced successfully!', 'success');
                run();
            } catch (e) {
                show('Error: ' + e.message, 'error');
            }
        }

        function upload() {
            var fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.txt';
            fileInput.onchange = function(e) {
                var file = e.target.files[0];
                if (!file) return;
                var reader = new FileReader();
                reader.onload = function(e) {
                    testString.value = e.target.result;
                    run();
                };
                reader.readAsText(file);
            };
            fileInput.click();
        }

        function clearAll() {
            pattern.value = '';
            testString.value = '';
            replaceWith.value = '';
            output.textContent = '';
            matchCount.textContent = '0 matches';
        }

        // Event Listeners
        pattern.addEventListener('input', run);
        testString.addEventListener('input', run);
        replaceWith.addEventListener('input', run);

        document.getElementById('flagG').addEventListener('change', run);
        document.getElementById('flagI').addEventListener('change', run);
        document.getElementById('flagM').addEventListener('change', run);
        document.getElementById('flagS').addEventListener('change', run);
        document.getElementById('flagU').addEventListener('change', run);

        document.getElementById('clearBtn').addEventListener('click', function() {
            testString.value = '';
            run();
        });

        document.getElementById('clearAllBtn').addEventListener('click', clearAll);
        document.getElementById('copyBtn').addEventListener('click', function() {
            if (output.textContent && output.textContent !== 'No matches found') {
                navigator.clipboard.writeText(output.textContent);
                show('Copied to clipboard!', 'success');
            }
        });

        document.getElementById('uploadBtn').addEventListener('click', upload);
        document.getElementById('replaceBtn').addEventListener('click', replaceAll);

        // Preset buttons
        var presetBtns = document.querySelectorAll('.regex-preset-btn');
        presetBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                pattern.value = this.getAttribute('data-pattern');
                run();
            });
        });
    </script>

</body>
</html>
