// Elements
const input = document.getElementById('csvInput');
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

const samples = ['name,email,age\nJohn,john@email.com,30\nJane,jane@email.com,25'];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function convertToJSON() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter CSV.', 'error'); return; }
    try {
        const lines = value.split('\n').filter(l => l.trim());
        if (lines.length < 2) { showMessage('CSV needs header and at least one data row', 'error'); return; }
        const headers = parseCSVLine(lines[0]);
        const data = lines.slice(1).map(line => {
            const values = parseCSVLine(line);
            const obj = {};
            headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim() || '';
            return obj;
        });
        outputCode.textContent = JSON.stringify(data, null, 2);
        showMessage('Converted to JSON!', 'success');
    } catch (error) { showMessage('Error: ' + error.message, 'error'); }
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') { inQuotes = !inQuotes; }
        else if (char === ',' && !inQuotes) { result.push(current); current = ''; }
        else { current += char; }
    }
    result.push(current);
    return result;
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
