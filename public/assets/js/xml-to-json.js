// Elements
const input = document.getElementById('xmlInput');
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

// XML to Object
function xmlToObject(element) {
    const obj = {};
    if (element.children.length === 0) {
        return element.textContent.trim();
    }
    Array.from(element.children).forEach(child => {
        const value = xmlToObject(child);
        if (obj[child.tagName]) {
            if (!Array.isArray(obj[child.tagName])) {
                obj[child.tagName] = [obj[child.tagName]];
            }
            obj[child.tagName].push(value);
        } else {
            obj[child.tagName] = value;
        }
    });
    return obj;
}

// Convert XML to JSON
function convertXMLToJSON() {
    clearMessage();
    try {
        const value = input.value.trim();
        if (!value) {
            showMessage('Please enter XML data.', 'error');
            return;
        }
        const parser = new DOMParser();
        const xml = parser.parseFromString(value, 'application/xml');
        if (xml.querySelector('parsererror')) {
            throw new Error('Invalid XML structure.');
        }
        const root = xml.documentElement;
        const result = {};
        result[root.tagName] = xmlToObject(root);
        outputCode.textContent = JSON.stringify(result, null, 2);
        showMessage('Converted to JSON!', 'success');
    } catch (error) {
        showMessage('Conversion failed: ' + error.message, 'error');
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
    reader.onload = (e) => { input.value = e.target.result; convertXMLToJSON(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', convertXMLToJSON);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadJSON);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertXMLToJSON(); });
