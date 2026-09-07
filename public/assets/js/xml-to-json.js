// Elements
const input = document.getElementById('xmlInput');
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

const samples = ['<root><name>John</name><age>30</age></root>'];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function convertToJSON() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter XML.', 'error'); return; }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/xml');
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) { showMessage('Invalid XML', 'error'); return; }
        const json = xmlToJson(doc.documentElement);
        outputCode.textContent = JSON.stringify(json, null, 2);
        showMessage('Converted to JSON!', 'success');
    } catch (error) { showMessage('Error: ' + error.message, 'error'); }
}

function xmlToJson(node) {
    if (node.nodeType === 3) return node.textContent.trim();
    if (node.nodeType !== 1) return null;
    const obj = {};
    if (node.attributes && node.attributes.length > 0) {
        obj['@attributes'] = {};
        Array.from(node.attributes).forEach(attr => {
            obj['@attributes'][attr.name] = attr.value;
        });
    }
    if (node.childNodes.length === 1 && node.firstChild.nodeType === 3) {
        return node.textContent;
    }
    Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 1) {
            const childName = child.nodeName;
            const childValue = xmlToJson(child);
            if (obj[childName]) {
                if (!Array.isArray(obj[childName])) obj[childName] = [obj[childName]];
                obj[childName].push(childValue);
            } else {
                obj[childName] = childValue;
            }
        }
    });
    return obj;
}

let sampleIndex = 0;
function loadSample() { input.value = samples[sampleIndex]; sampleIndex = (sampleIndex + 1) % samples.length; convertToJSON(); }
function clearAll() { input.value = ''; outputCode.textContent = '<!-- JSON output will appear here -->'; }

async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    try { await navigator.clipboard.writeText(outputCode.textContent); showMessage('Copied!', 'success'); } catch { showMessage('Failed', 'error'); }
}

function downloadResult() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    const blob = new Blob([outputCode.textContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'output.json'; a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; showMessage(`Loaded: ${file.name}`, 'success'); convertToJSON(); };
    reader.onerror = () => showMessage('Failed', 'error');
    reader.readAsText(file);
}

if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
}

convertBtn.addEventListener('click', convertToJSON);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertToJSON(); });
