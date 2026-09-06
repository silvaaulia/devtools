// Elements
const input = document.getElementById('jsonInput');
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

// Escape XML
function escapeXML(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Object to XML
function objectToXML(object, rootName = 'root') {
    let xml = '<' + rootName + '>';
    for (const key in object) {
        const value = object[key];
        if (Array.isArray(value)) {
            value.forEach(item => {
                if (typeof item === 'object') {
                    xml += objectToXML(item, key);
                } else {
                    xml += '<' + key + '>' + escapeXML(item) + '</' + key + '>';
                }
            });
        } else if (value !== null && typeof value === 'object') {
            xml += objectToXML(value, key);
        } else {
            xml += '<' + key + '>' + escapeXML(value ?? '') + '</' + key + '>';
        }
    }
    xml += '</' + rootName + '>';
    return xml;
}

// Format XML
function formatXML(xml) {
    return xml
        .replace(/(>)(<)(\/*)/g, '$1\n$2$3')
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .join('\n');
}

// Convert JSON to XML
function convertJSONToXML() {
    clearMessage();
    try {
        const value = input.value.trim();
        if (!value) {
            showMessage('Please enter JSON data.', 'error');
            return;
        }
        const data = JSON.parse(value);
        outputCode.textContent = formatXML(objectToXML(data));
        showMessage('Converted to XML!', 'success');
    } catch (error) {
        showMessage('Invalid JSON: ' + error.message, 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment"><!-- XML output will appear here --></span>';
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

// Download XML
function downloadXML() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.xml';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; convertJSONToXML(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', convertJSONToXML);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadXML);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convertJSONToXML(); });
