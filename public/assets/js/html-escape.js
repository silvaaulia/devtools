// Elements
const input = document.getElementById('htmlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const escapeBtn = document.getElementById('escapeBtn');
const unescapeBtn = document.getElementById('unescapeBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sampleBtn = document.getElementById('sampleBtn');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');

// Sample data
const samples = [
    '<div class="container">\n  <h1>Hello World</h1>\n  <p>This is a test &amp; it works!</p>\n</div>',
    '<script>alert("XSS Test");</script>',
    '<a href="https://example.com?foo=bar&baz=qux">Link</a>',
    '<p>HTML entities: &lt; &gt; &amp; &quot; &apos;</p>',
    '<div onload="alert(1)">XSS Prevention</div>'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Escape HTML
function escapeHTML(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Unescape HTML
function unescapeHTML(value) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
}

function doEscape() {
    if (!input.value) {
        showMessage('Please enter text.', 'error');
        return;
    }
    outputCode.textContent = escapeHTML(input.value);
    showMessage('HTML escaped successfully!', 'success');
}

function doUnescape() {
    if (!input.value) {
        showMessage('Please enter text.', 'error');
        return;
    }
    outputCode.textContent = unescapeHTML(input.value);
    showMessage('HTML unescaped successfully!', 'success');
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    doEscape();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Escaped HTML will appear here -->';
}

// Copy to clipboard
async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to copy', 'error');
        return;
    }
    try {
        await navigator.clipboard.writeText(outputCode.textContent);
        showMessage('Copied to clipboard!', 'success');
    } catch {
        showMessage('Failed to copy', 'error');
    }
}

// Download
function downloadResult() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'escaped.html';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        input.value = e.target.result;
        showMessage(`Loaded: ${file.name}`, 'success');
    };
    reader.readAsText(file);
}

// Drag & Drop
if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) loadFile(file);
    });
}

// Event listeners
escapeBtn.addEventListener('click', doEscape);
unescapeBtn.addEventListener('click', doUnescape);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) loadFile(e.target.files[0]);
});

// Keyboard shortcuts
input.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') doEscape();
});
