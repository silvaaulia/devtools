// Elements
const input = document.getElementById('htmlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sampleBtn = document.getElementById('sampleBtn');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');

// Sample data
const samples = [
    '<div><h1>Hello World</h1><p>This is a paragraph with <strong>bold</strong> text.</p><ul><li>Item 1</li><li>Item 2</li></ul></div>',
    '<html><head><title>Page</title></head><body><header><nav><a href="#">Home</a></nav></header><main><h1>Welcome</h1></main></body></html>',
    '<table><tr><th>Name</th><th>Age</th></tr><tr><td>John</td><td>30</td></tr></table>'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Format HTML
function formatHTML() {
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter HTML code.', 'error');
        return;
    }
    try {
        // Simple HTML formatter
        let formatted = value
            .replace(/>\s+</g, '><')
            .replace(/></g, '>\n<');

        // Add indentation
        let lines = formatted.split('\n');
        let indent = 0;
        let result = [];

        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            if (line.match(/^<\/\w/)) indent = Math.max(0, indent - 1);

            result.push('  '.repeat(indent) + line);

            if (line.match(/^<[^\/!][^>]*[^\/]>$/) && !line.match(/^<(input|img|br|hr|meta|link|area|base|embed|source|track|wbr|path|circle|rect|line|polyline|polygon)/i)) {
                indent++;
            }
        });

        outputCode.textContent = result.join('\n');
        showMessage('HTML formatted successfully!', 'success');
    } catch (error) {
        showMessage('Unable to format HTML.', 'error');
    }
}

// Minify HTML
function minifyHTML() {
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter HTML code.', 'error');
        return;
    }
    try {
        let minified = value
            .replace(/>\s+</g, '><')
            .replace(/\s+/g, ' ')
            .replace(/>\s*</g, '><')
            .trim();
        outputCode.textContent = minified;
        showMessage('HTML minified!', 'success');
    } catch (error) {
        showMessage('Unable to minify HTML.', 'error');
    }
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    formatHTML();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Formatted HTML will appear here -->';
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

// Download HTML
function downloadHTML() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.html';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        input.value = e.target.result;
        showMessage(`Loaded: ${file.name}`, 'success');
        formatHTML();
    };
    reader.onerror = () => showMessage('Failed to read file', 'error');
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
formatBtn.addEventListener('click', formatHTML);
minifyBtn.addEventListener('click', minifyHTML);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadHTML);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') formatHTML();
});
