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

// Parse XML
function parseXML() {
    const value = input.value.trim();
    if (!value) throw new Error('Please enter XML data.');
    const parser = new DOMParser();
    const xml = parser.parseFromString(value, 'application/xml');
    const parserError = xml.querySelector('parsererror');
    if (parserError) throw new Error('Invalid XML: ' + parserError.textContent);
    return xml;
}

// Format XML with indentation
function formatXML() {
    clearMessage();
    try {
        const xml = parseXML();
        const serializer = new XMLSerializer();
        let text = serializer.serializeToString(xml);
        // Simple formatter
        let formatted = '';
        let indent = 0;
        const lines = text.replace(/(>)(<)(\/?)/g, '$1\n$2$3').split('\n');
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            if (line.startsWith('</')) indent = Math.max(0, indent - 1);
            formatted += '  '.repeat(indent) + line + '\n';
            if (line.startsWith('<') && !line.startsWith('</') && !line.startsWith('<?') && !line.endsWith('/>') && !line.includes('</')) indent++;
        });
        outputCode.textContent = formatted.trim();
        showMessage('XML formatted!', 'success');
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment"><!-- Output will appear here --></span>';
    clearMessage();
}

// Copy to clipboard
async function copyResult() {
    const text = outputCode.textContent;
    if (!text || text.includes('will appear')) {
        showMessage('Nothing to copy', 'error');
        return;
    }
    try {
        await navigator.clipboard.writeText(text);
        showMessage('Copied!', 'success');
    } catch {
        showMessage('Copy failed', 'error');
    }
}

// Download XML
function downloadResult() {
    const text = outputCode.textContent;
    if (!text || text.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([text], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'formatted.xml'; a.click();
    URL.revokeObjectURL(url);
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; formatXML(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', formatXML);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyResult);
downloadBtn.addEventListener('click', downloadResult);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Drag and drop
input.addEventListener('dragover', (e) => { e.preventDefault(); input.classList.add('dragging'); });
input.addEventListener('dragleave', () => input.classList.remove('dragging'));
input.addEventListener('drop', (e) => { e.preventDefault(); input.classList.remove('dragging'); loadFile(e.dataTransfer.files[0]); });

// Keyboard shortcut
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') formatXML(); });
