// Elements
const input = document.getElementById('jsonInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const minifyBtn = document.getElementById('minifyBtn');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sampleBtn = document.getElementById('sampleBtn');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');

// Sample data
const samples = [
    '{"name": "John", "email": "john@example.com", "age": 30}',
    '{"users": [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]}',
    '{"nested": {"deep": {"value": "found"}}, "array": [1, 2, 3]}'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Get parsed JSON
function getJSON() {
    const value = input.value.trim();
    if (!value) throw new Error('Please enter JSON data.');
    return JSON.parse(value);
}

// Minify JSON
function minifyJSON() {
    try {
        const data = getJSON();
        outputCode.textContent = JSON.stringify(data);
        showMessage('JSON minified!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Format JSON
function formatJSON() {
    try {
        const data = getJSON();
        outputCode.textContent = JSON.stringify(data, null, 2);
        showMessage('JSON formatted!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    minifyJSON();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Minified JSON will appear here -->';
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
    const blob = new Blob([outputCode.textContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.json';
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
        minifyJSON();
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
minifyBtn.addEventListener('click', minifyJSON);
formatBtn.addEventListener('click', formatJSON);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') minifyJSON(); });
