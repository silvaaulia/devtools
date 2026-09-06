// Elements
const input = document.getElementById('urlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');

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

// Encode URL
function encodeURL() {
    clearMessage();
    if (!input.value) {
        showMessage('Please enter text.', 'error');
        return;
    }
    try {
        outputCode.textContent = encodeURIComponent(input.value);
        showMessage('URL encoded successfully!', 'success');
    } catch (error) {
        showMessage('Unable to encode URL.', 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<!-- Encoded URL will appear here -->';
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

// Download
function downloadResult() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encoded-url.txt';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Event listeners
formatBtn.addEventListener('click', encodeURL);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadResult);

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') encodeURL(); });
