// Elements
const input = document.getElementById('yamlInput');
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

const samples = ['name: John\nemail: john@example.com\nage: 30'];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function convertToJSON() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter YAML.', 'error'); return; }
    try {
        const data = yamlToJson(value);
        outputCode.textContent = JSON.stringify(data, null, 2);
        showMessage('Converted to JSON!', 'success');
    } catch (error) { showMessage('Error: ' + error.message, 'error'); }
}

function yamlToJson(yaml) {
    const lines = yaml.split('\n');
    let result = {};
    let currentIndent = 0;
    let currentKey = null;
    let stack = [{ obj: result, indent: -1 }];

    lines.forEach(line => {
        if (!line.trim() || line.trim().startsWith('#')) return;
        const indent = line.search(/\S/);
        const trimmed = line.trim();
        if (trimmed.includes(':')) {
            const [key, ...valueParts] = trimmed.split(':');
            const keyName = key.trim();
            const value = valueParts.join(':').trim();

            while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
            const parent = stack[stack.length - 1].obj;

            if (value) {
                parent[keyName] = parseYamlValue(value);
            } else {
                parent[keyName] = {};
                stack.push({ obj: parent[keyName], indent });
            }
        }
    });
    return result;
}

function parseYamlValue(value) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'null' || value === '~') return null;
    if (/^-?\d+$/.test(value)) return parseInt(value, 10);
    if (/^-?\d+\.\d+$/.test(value)) return parseFloat(value);
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        return value.slice(1, -1);
    }
    return value;
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
