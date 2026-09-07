// Elements
const input = document.getElementById('cssInput');
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

const samples = [
    '.class { color: red; margin: 10px; padding: 5px; }',
    'body { font-size: 16px; line-height: 1.5; } .container { max-width: 1200px; }'
];

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function minifyCSS() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter CSS.', 'error'); return; }
    try {
        outputCode.textContent = value
            .replace(/\s+/g, ' ')
            .replace(/\s*{\s*/g, '{')
            .replace(/\s*}\s*/g, '}')
            .replace(/\s*:\s*/g, ':')
            .replace(/\s*;\s*/g, ';')
            .replace(/;}/g, '}')
            .trim();
        showMessage('CSS minified!', 'success');
    } catch { showMessage('Error minifying CSS', 'error'); }
}

function formatCSS() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter CSS.', 'error'); return; }
    try {
        outputCode.textContent = value
            .replace(/\s*\{\s*/g, ' {\n  ')
            .replace(/\s*\}\s*/g, '\n}\n\n')
            .replace(/\s*;\s*/g, ';\n  ')
            .replace(/;\n  }/g, '\n}')
            .trim();
        showMessage('CSS formatted!', 'success');
    } catch { showMessage('Error formatting CSS', 'error'); }
}

let sampleIndex = 0;
function loadSample() {
    input.value = samples[sampleIndex];
    sampleIndex = (sampleIndex + 1) % samples.length;
    minifyCSS();
}

function clearAll() { input.value = ''; outputCode.textContent = '<!-- Minified CSS will appear here -->'; }

async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing to copy', 'error'); return; }
    try { await navigator.clipboard.writeText(outputCode.textContent); showMessage('Copied!', 'success'); } catch { showMessage('Failed', 'error'); }
}

function downloadResult() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    const blob = new Blob([outputCode.textContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'minified.css'; a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; showMessage(`Loaded: ${file.name}`, 'success'); minifyCSS(); };
    reader.onerror = () => showMessage('Failed', 'error');
    reader.readAsText(file);
}

if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
    dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('drag-over'); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });
}

minifyBtn.addEventListener('click', minifyCSS);
formatBtn.addEventListener('click', formatCSS);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') minifyCSS(); });
