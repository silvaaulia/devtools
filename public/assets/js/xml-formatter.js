// Elements
const input = document.getElementById('xmlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
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
    '<root><item>Value1</item><item>Value2</item></root>',
    '<?xml version="1.0"?><catalog><book id="1"><title>Example</title></book></catalog>'
];

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Format XML
function formatXML() {
    const value = input.value.trim();
    if (!value) {
        showMessage('Please enter XML.', 'error');
        return;
    }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/xml');
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) {
            showMessage('Invalid XML', 'error');
            return;
        }
        outputCode.textContent = formatXmlString(new XMLSerializer().serializeToString(doc));
        showMessage('XML formatted!', 'success');
    } catch (error) {
        showMessage('Error formatting XML', 'error');
    }
}

function formatXmlString(xml) {
    let formatted = '';
    let indent = 0;
    const lines = xml.replace(/>\s*</g, '><').split('><');

    lines.forEach((line, i) => {
        line = line.trim();
        if (!line) return;

        if (line.startsWith('/')) indent--;

        formatted += '  '.repeat(Math.max(indent, 0)) + '<' + line + (i < lines.length - 1 ? '\n' : '');

        if (!line.startsWith('/') && !line.startsWith('?') && !line.endsWith('/') && !line.match(/<\/\w/)) {
            indent++;
        }
    });

    return formatted.trim();
}

// Load sample
let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    formatXML();
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Formatted XML will appear here -->';
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
    const blob = new Blob([outputCode.textContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.xml';
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
        formatXML();
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
formatBtn.addEventListener('click', formatXML);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') formatXML(); });
