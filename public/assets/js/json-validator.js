// Elements
const input = document.getElementById('jsonInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const validateBtn = document.getElementById('validateBtn');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyBtn = document.getElementById('copyBtn');
const sampleBtn = document.getElementById('sampleBtn');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');

// Sample data
const samples = [
    '{"name": "John", "email": "john@example.com", "age": 30}',
    '{"valid": true, "count": 42}',
    '{"nested": {"deep": {"value": "found"}}}'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Validate JSON
function validateJSON() {
    const value = input.value.trim();
    if (!value) {
        outputCode.textContent = 'Please enter JSON to validate.';
        showMessage('Please enter JSON.', 'error');
        return;
    }
    try {
        const data = JSON.parse(value);
        outputCode.textContent = `Valid JSON!\n\nType: ${Array.isArray(data) ? 'Array' : 'Object'}\nKeys: ${Array.isArray(data) ? data.length : Object.keys(data).length}`;
        showMessage('Valid JSON!', 'success');
    } catch (error) {
        outputCode.textContent = `Invalid JSON!\n\nError: ${error.message}`;
        showMessage('Invalid JSON: ' + error.message, 'error');
    }
}

// Format JSON
function formatJSON() {
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter JSON.', 'error');
        return;
    }
    try {
        const data = JSON.parse(value);
        outputCode.textContent = JSON.stringify(data, null, 2);
        showMessage('JSON formatted!', 'success');
    } catch (error) {
        showMessage('Invalid JSON: ' + error.message, 'error');
    }
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    validateJSON();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Validation result will appear here -->';
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

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        input.value = e.target.result;
        showMessage(`Loaded: ${file.name}`, 'success');
        validateJSON();
    };
    reader.onerror = () => showMessage('Failed to read file', 'error');
    reader.readAsText(file);
}

// Drag & Drop
if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) loadFile(file);
    });
}

// Event listeners
validateBtn.addEventListener('click', validateJSON);
formatBtn.addEventListener('click', formatJSON);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') validateJSON(); });
