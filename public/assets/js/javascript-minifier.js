// Elements
const input = document.getElementById('jsInput');
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

// Minify JavaScript
function minifyJavaScript() {
    clearMessage();
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter JavaScript code.', 'error');
        return;
    }
    try {
        let code = value;
        code = code.replace(/\/\*[\s\S]*?\*\//g, '');
        code = code.replace(/(^|[^:])(\/\/.*)$/gm, '$1');
        code = code.replace(/\s+/g, ' ').replace(/\s*([{}()[\];,:])\s*/g, '$1').trim();
        outputCode.textContent = code;
        showMessage('JavaScript minified successfully!', 'success');
    } catch (error) {
        showMessage('Unable to minify JavaScript.', 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment">/* Minified JavaScript will appear here */</span>';
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

// Download JavaScript
function downloadJavaScript() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.js';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; minifyJavaScript(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', minifyJavaScript);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJavaScript);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Drag and drop
input.addEventListener('dragover', (e) => { e.preventDefault(); input.classList.add('dragging'); });
input.addEventListener('dragleave', () => input.classList.remove('dragging'));
input.addEventListener('drop', (e) => { e.preventDefault(); input.classList.remove('dragging'); loadFile(e.dataTransfer.files[0]); });

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') minifyJavaScript(); });
