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

const samples = ['{"name": "John", "age": 30}', '{"items": [{"id": 1}, {"id": 2}]}'];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function convertToXML() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter JSON.', 'error'); return; }
    try {
        const data = JSON.parse(value);
        outputCode.textContent = jsonToXml(data);
        showMessage('Converted to XML!', 'success');
    } catch (error) { showMessage('Invalid JSON: ' + error.message, 'error'); }
}

function jsonToXml(obj, rootName = 'root') {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += objectToXml(obj, rootName);
    return xml;
}

function objectToXml(obj, name) {
    if (obj === null || obj === undefined) return `<${name}/>`;
    if (typeof obj === 'boolean' || typeof obj === 'number') return `<${name}>${obj}</${name}>`;
    if (typeof obj === 'string') return `<${name}>${escapeXml(obj)}</${name}>`;
    if (Array.isArray(obj)) {
        return obj.map(item => objectToXml(item, 'item')).join('\n');
    }
    if (typeof obj === 'object') {
        let result = `<${name}>\n`;
        Object.entries(obj).forEach(([key, value]) => {
            result += objectToXml(value, sanitizeXmlTag(key)) + '\n';
        });
        result += `</${name}>`;
        return result;
    }
    return `<${name}/>`;
}

function sanitizeXmlTag(tag) {
    return tag.replace(/[^a-zA-Z0-9_]/g, '_');
}

function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

let sampleIndex = 0;
function loadSample() { input.value = samples[sampleIndex]; sampleIndex = (sampleIndex + 1) % samples.length; convertToXML(); }
function clearAll() { input.value = ''; outputCode.textContent = '<!-- XML output will appear here -->'; }

async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    try { await navigator.clipboard.writeText(outputCode.textContent); showMessage('Copied!', 'success'); } catch { showMessage('Failed', 'error'); }
}

function downloadResult() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    const blob = new Blob([outputCode.textContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'output.xml'; a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; showMessage(`Loaded: ${file.name}`, 'success'); convertToXML(); };
    reader.onerror = () => showMessage('Failed', 'error');
    reader.readAsText(file);
}

if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
}

convertBtn.addEventListener('click', convertToXML);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertToXML(); });
