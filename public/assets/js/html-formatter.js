// Elements
const input = document.getElementById('htmlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fileInput = document.getElementById('fileInput');

// Show message
function showMessage(text, type = 'success') {
    messageArea.innerHTML = `
        <div class="alert alert-${type}">
            <span class="alert-icon">${type === 'success' ? '&#10004;' : '&#9888;'}</span>
            <span>${text}</span>
        </div>
    `;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Clear message
function clearMessage() { messageArea.innerHTML = ''; }

// Format HTML
function formatHTML() {
    clearMessage();
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter HTML code.', 'error');
        return;
    }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/html');
        let html = doc.body.innerHTML.trim();
        html = html.replace(/>\s*</g, '><').replace(/></g, '>\n<');
        const lines = html.split('\n');
        let indent = 0;
        let result = [];
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            if (line.match(/^<\//)) indent--;
            result.push('  '.repeat(Math.max(indent, 0)) + line);
            if (line.match(/^<[^!/?][^>]*>$/) && !line.match(/^<(input|img|br|hr|meta|link|area|base|embed|source|track|wbr)/i)) indent++;
        });
        outputCode.textContent = result.join('\n');
        showMessage('HTML formatted successfully!', 'success');
    } catch (error) {
        showMessage('Unable to format HTML.', 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment"><!-- Formatted HTML will appear here --></span>';
    clearMessage();
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
    reader.onload = (e) => { input.value = e.target.result; formatHTML(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', formatHTML);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadHTML);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Drag and drop
input.addEventListener('dragover', (e) => { e.preventDefault(); input.classList.add('dragging'); });
input.addEventListener('dragleave', () => input.classList.remove('dragging'));
input.addEventListener('drop', (e) => { e.preventDefault(); input.classList.remove('dragging'); loadFile(e.dataTransfer.files[0]); });

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') formatHTML(); });
