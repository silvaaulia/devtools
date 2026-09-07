// Elements
const input = document.getElementById('textInput');
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

function encodeBase64() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter text.', 'error'); return; }
    try {
        outputCode.textContent = btoa(unescape(encodeURIComponent(value)));
        showMessage('Encoded to Base64!', 'success');
    } catch { showMessage('Error encoding', 'error'); }
}

function decodeBase64() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter Base64.', 'error'); return; }
    try {
        outputCode.textContent = decodeURIComponent(escape(atob(value)));
        showMessage('Decoded from Base64!', 'success');
    } catch { showMessage('Invalid Base64', 'error'); }
}

function clearAll() { input.value = ''; outputCode.textContent = '<!-- Base64 output will appear here -->'; }

encodeBtn.addEventListener('click', encodeBase64);
decodeBtn.addEventListener('click', decodeBase64);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') encodeBase64(); });
