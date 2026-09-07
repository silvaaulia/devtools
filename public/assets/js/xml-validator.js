// Elements
const input = document.getElementById('xmlInput');
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

const samples = ['<root><item>Value1</item><item>Value2</item></root>'];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function validateXML() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter XML.', 'error'); return; }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/xml');
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) {
            outputCode.textContent = 'Invalid XML!\n\n' + errorNode.textContent;
            showMessage('Invalid XML', 'error');
            return;
        }
        const elements = doc.getElementsByTagName('*').length;
        outputCode.textContent = `Valid XML!\n\nElements: ${elements}\nRoot: ${doc.documentElement.tagName}`;
        showMessage('Valid XML!', 'success');
    } catch (error) {
        outputCode.textContent = 'Error: ' + error.message;
        showMessage('Error validating XML', 'error');
    }
}

function formatXML() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter XML.', 'error'); return; }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/xml');
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) { showMessage('Invalid XML', 'error'); return; }
        const serializer = new XMLSerializer();
        let xml = serializer.serializeToString(doc);
        // Simple formatting
        let formatted = '';
        let indent = 0;
        xml = xml.replace(/>\s*</g, '><');
        const parts = xml.split('><');
        parts.forEach((part, i) => {
            if (!part.trim()) return;
            const isClosing = part.startsWith('/');
            const isSelfClosing = part.endsWith('/');
            if (isClosing) indent--;
            formatted += '  '.repeat(Math.max(indent, 0)) + '<' + part + (i < parts.length - 1 ? '\n' : '');
            if (!isClosing && !isSelfClosing && !part.startsWith('?')) indent++;
        });
        outputCode.textContent = formatted.trim();
        showMessage('XML formatted!', 'success');
    } catch (error) { showMessage('Error formatting', 'error'); }
}

let sampleIndex = 0;
function loadSample() { input.value = samples[sampleIndex]; sampleIndex = (sampleIndex + 1) % samples.length; validateXML(); }
function clearAll() { input.value = ''; outputCode.textContent = '<!-- Validation result will appear here -->'; }

async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    try { await navigator.clipboard.writeText(outputCode.textContent); showMessage('Copied!', 'success'); } catch { showMessage('Failed', 'error'); }
}

function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; showMessage(`Loaded: ${file.name}`, 'success'); validateXML(); };
    reader.onerror = () => showMessage('Failed', 'error');
    reader.readAsText(file);
}

if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
}

validateBtn.addEventListener('click', validateXML);
formatBtn.addEventListener('click', formatXML);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') validateXML(); });
