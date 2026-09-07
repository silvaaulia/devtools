// Elements
const input = document.getElementById('urlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function encodeURL() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter URL.', 'error'); return; }
    try {
        outputCode.textContent = encodeURIComponent(value);
        showMessage('URL encoded!', 'success');
    } catch { showMessage('Error encoding', 'error'); }
}

function decodeURL() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter encoded URL.', 'error'); return; }
    try {
        outputCode.textContent = decodeURIComponent(value);
        showMessage('URL decoded!', 'success');
    } catch { showMessage('Invalid URL encoding', 'error'); }
}

function clearAll() { input.value = ''; outputCode.textContent = '<!-- Encoded URL will appear here -->'; }

encodeBtn.addEventListener('click', encodeURL);
decodeBtn.addEventListener('click', decodeURL);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') encodeURL(); });
