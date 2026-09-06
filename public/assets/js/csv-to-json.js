// Elements
const input = document.getElementById('csvInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fileInput = document.getElementById('fileInput');

// Show message
function showMessage(text, type = 'success') {
    messageArea.innerHTML = `
        <div class="alert alert-${type}">
            <span class="alert-icon">${type === 'success' ? '&#10004;' : '&#9888;'}</span>
            <span>${text}</span>
        </div>
    `;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Clear message
function clearMessage() { messageArea.innerHTML = ''; }

// Parse CSV
function parseCSV(text) {
    const rows = [];
    let row = [];
    let value = '';
    let insideQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i + 1];
        if (char === '"' && insideQuotes && next === '"') {
            value += '"';
            i++;
            continue;
        }
        if (char === '"') {
            insideQuotes = !insideQuotes;
            continue;
        }
        if (char === ',' && !insideQuotes) {
            row.push(value.trim());
            value = '';
            continue;
        }
        if ((char === '\n' || char === '\r') && !insideQuotes) {
            if (char === '\r' && next === '\n') i++;
            row.push(value.trim());
            rows.push(row);
            row = [];
            value = '';
            continue;
        }
        value += char;
    }
    row.push(value.trim());
    if (row.length > 1 || row[0] !== '') rows.push(row);
    return rows;
}

// Convert CSV to JSON
function convertCSVToJSON() {
    clearMessage();
    try {
        const text = input.value.trim();
        if (!text) {
            showMessage('Please enter CSV data.', 'error');
            return;
        }
        const rows = parseCSV(text);
        if (rows.length < 2) {
            showMessage('CSV must contain a header and data.', 'error');
            return;
        }
        const headers = rows[0];
        const result = rows.slice(1).map(row => {
            const object = {};
            headers.forEach((header, index) => {
                object[header] = row[index] ?? '';
            });
            return object;
        });
        outputCode.textContent = JSON.stringify(result, null, 2);
        showMessage('Converted to JSON!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment"><!-- JSON output will appear here --></span>';
    clearMessage();
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

// Download JSON
function downloadJSON() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.json';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; convertCSVToJSON(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', convertCSVToJSON);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertCSVToJSON(); });
