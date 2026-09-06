// Elements
const input = document.getElementById('jsonInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const validateBtn = document.getElementById('validateBtn');
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

// Get parsed JSON
function getJSON() {
    const value = input.value.trim();
    if (!value) throw new Error('Please enter JSON data.');
    return JSON.parse(value);
}

// Format JSON (beautify)
function formatJSON() {
    clearMessage();
    try {
        const data = getJSON();
        const formatted = JSON.stringify(data, null, 2);
        outputCode.textContent = formatted;
        showMessage('JSON formatted successfully!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Minify JSON
function minifyJSON() {
    clearMessage();
    try {
        const data = getJSON();
        const minified = JSON.stringify(data);
        outputCode.textContent = minified;
        showMessage('JSON minified!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Validate JSON
function validateJSON() {
    clearMessage();
    try {
        const data = getJSON();
        showMessage('Valid JSON! Object with ' + Object.keys(data).length + ' keys.', 'success');
    } catch (error) {
        showMessage('Invalid JSON: ' + error.message, 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment"><!-- Formatted JSON will appear here --></span>';
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

// Download JSON
function downloadJSON() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.json')) {
        showMessage('Please upload a .json file', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        input.value = e.target.result;
        formatJSON();
    };
    reader.onerror = () => showMessage('Failed to read file', 'error');
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', formatJSON);
minifyBtn.addEventListener('click', minifyJSON);
validateBtn.addEventListener('click', validateJSON);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Drag and drop
input.addEventListener('dragover', (e) => { e.preventDefault(); input.classList.add('dragging'); });
input.addEventListener('dragleave', () => input.classList.remove('dragging'));
input.addEventListener('drop', (e) => { e.preventDefault(); input.classList.remove('dragging'); loadFile(e.dataTransfer.files[0]); });

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') formatJSON(); });
