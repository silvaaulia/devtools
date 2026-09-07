// Elements
const input = document.getElementById('jsonInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const convertBtn = document.getElementById('convertBtn');
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
    '{"users": [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]}'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Convert JSON to YAML
function convertToYAML() {
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter JSON.', 'error');
        return;
    }
    try {
        const data = JSON.parse(value);
        outputCode.textContent = jsonToYaml(data);
        showMessage('Converted to YAML!', 'success');
    } catch (error) {
        showMessage('Invalid JSON: ' + error.message, 'error');
    }
}

// Simple JSON to YAML converter
function jsonToYaml(obj, indent = 0) {
    const spaces = '  '.repeat(indent);
    let result = [];

    if (Array.isArray(obj)) {
        obj.forEach(item => {
            if (typeof item === 'object' && item !== null) {
                result.push(`${spaces}-`);
                result.push(jsonToYaml(item, indent + 1));
            } else {
                result.push(`${spaces}- ${formatYamlValue(item)}`);
            }
        });
    } else if (typeof obj === 'object' && obj !== null) {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                result.push(`${spaces}${key}:`);
                result.push(jsonToYaml(value, indent + 1));
            } else {
                result.push(`${spaces}${key}: ${formatYamlValue(value)}`);
            }
        });
    }

    return result.join('\n');
}

function formatYamlValue(value) {
    if (value === null) return 'null';
    if (value === true) return 'true';
    if (value === false) return 'false';
    if (typeof value === 'string') {
        if (value.includes('\n') || value.includes(':') || value.includes('#')) {
            return `"${value.replace(/"/g, '\\"')}"`;
        }
        return value;
    }
    return String(value);
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    convertToYAML();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- YAML output will appear here -->';
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
    const blob = new Blob([outputCode.textContent], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.yaml';
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
        convertToYAML();
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
convertBtn.addEventListener('click', convertToYAML);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertToYAML(); });
