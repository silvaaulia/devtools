<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Regex Tester - Test Regular Expressions Online</title>
<meta name="description" content="Test regular expressions online. See matches, groups, and replacements.">
<meta name="robots" content="index, follow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/public/assets/css/style.css">
</head>
<body>

<header class="header">
<div class="container header-inner">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<div class="header-nav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/json-formatter'">JSON</button>
<button class="nav-link" onclick="location.href='/xml-formatter'">XML</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link active" onclick="location.href='/regex-tester'">Regex</button>
</div>
<div class="header-actions">
<a href="https://github.com/silvaaulia/devtools" target="_blank" class="icon-btn" title="GitHub">&#128187;</a>
<button class="icon-btn" id="themeToggle" title="Toggle theme">&#9790;</button>
<button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
</div>
</div>
<nav class="mobile-nav" id="mobileNav">
<button class="nav-link" onclick="location.href='/'">All Tools</button>
<button class="nav-link" onclick="location.href='/json-formatter'">JSON</button>
<button class="nav-link" onclick="location.href='/xml-formatter'">XML</button>
<button class="nav-link" onclick="location.href='/sql-formatter'">SQL</button>
<button class="nav-link active" onclick="location.href='/regex-tester'">Regex</button>
</nav>
</header>

<main class="tool-page">
<div class="container">

<div class="tool-header">
<div class="tool-breadcrumb"><a href="/">&larr; All Tools</a> / Regex</div>
<h1 class="tool-title">Regex Tester</h1>
<p class="tool-desc">Test regular expressions and see matches, groups, and replacements in real time.</p>
</div>

<div class="editor-container">

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot input"></span>Pattern</span>
<div class="editor-actions">
<label class="btn btn-ghost btn-sm" title="Upload file">&#128194;<input type="file" id="fileInput" accept=".txt,.log,.csv,.json,.xml,.html,.md" style="display:none"></label>
<button class="btn btn-ghost btn-sm" id="sampleBtn" title="Sample data">&#127916;</button>
<button class="btn btn-ghost btn-sm" id="clearBtn" title="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="regexInput" placeholder="^\w+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$"></textarea>
<div class="editor-flags">
<label class="flag-option">
<input type="checkbox" id="flagG" checked>
<code>g</code> Global
</label>
<label class="flag-option">
<input type="checkbox" id="flagI">
<code>i</code> Case-insensitive
</label>
<label class="flag-option">
<input type="checkbox" id="flagM">
<code>m</code> Multiline
</label>
<label class="flag-option">
<input type="checkbox" id="flagS">
<code>s</code> Dotall
</label>
</div>
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>Test String</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="loadFileBtn" title="Load file">&#128194;</button>
<button class="btn btn-ghost btn-sm" id="clearTextBtn" title="Clear">&#10005;</button>
</div>
</div>
<textarea class="editor-textarea" id="textInput" placeholder="test@example.com&#10;admin@site.org&#10;hello@world.net&#10;invalid-email&#10;user.name@domain.co.uk"></textarea>
</div>

<div class="editor-panel">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot"></span>Matches</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyBtn" title="Copy">&#128203;</button>
<button class="btn btn-ghost btn-sm" id="downloadBtn" title="Download">&#128229;</button>
</div>
</div>
<pre><code class="language-js" id="outputCode">Matches will appear here</code></pre>
</div>

</div>

<div class="action-bar">
<button class="btn btn-primary" id="testBtn">&#9898; Test Regex</button>
<button class="btn btn-secondary" id="replaceBtn">&#128257; Replace</button>
<button class="btn btn-secondary" id="clearAllBtn">&#128465; Clear All</button>
</div>

<div class="editor-panel" id="replacePanel" style="display:none;">
<div class="editor-header">
<span class="editor-label"><span class="editor-label-dot input"></span>Replace With</span>
</div>
<textarea class="editor-textarea" id="replaceInput" placeholder="$1" style="min-height:100px;"></textarea>
<div class="editor-header" style="border-top:1px solid var(--border-color);">
<span class="editor-label"><span class="editor-label-dot"></span>Replacement Result</span>
<div class="editor-actions">
<button class="btn btn-ghost btn-sm" id="copyReplaceBtn" title="Copy">&#128203;</button>
</div>
</div>
<pre><code class="language-js" id="replaceOutput" style="min-height:100px; padding:16px; white-space:pre-wrap; overflow:auto; background:var(--bg-editor);">Replacement result will appear here</code></pre>
</div>

<div id="messageArea"></div>

</div>
</main>

<footer class="footer"><div class="container"><p class="footer-text">&copy; 2024 DevTools. All tools run locally in your browser.</p></div></footer>

<script src="/public/assets/js/regex-tester.js"></script>
<script src="/public/assets/js/theme.js"></script>
<script>document.getElementById('hamburger')?.addEventListener('click', function(){this.classList.toggle('active');document.getElementById('mobileNav')?.classList.toggle('active');});</script>
</body>
</html>
