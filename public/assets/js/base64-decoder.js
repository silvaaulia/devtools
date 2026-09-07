// Elements
const input = document.getElementById('base64Input');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const decodeBtn = document.getElementById('decodeBtn');
const encodeBtn = document.getElementById('encodeBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function decodeBase64() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter Base64.', 'error'); return; }
    try {
        outputCode.textContent = decodeURIComponent(escape(atob(value)));
        showMessage('Decoded from Base64!', 'success');
    } catch { showMessage('Invalid Base64', 'error'); }
}

function encodeBase64() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter text.', 'error'); return; }
    try {
        outputCode.textContent = btoa(unescape(encodeURIComponent(value)));
        showMessage('Encoded to Base64!', 'success');
    } catch { showMessage('Error encoding', 'error'); }
}

function clearAll() { input.value = ''; outputCode.textContent = '<!-- Decoded text will appear here -->'; }

decodeBtn.addEventListener('click', decodeBase64);
encodeBtn.addEventListener('click', encodeBase64);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') decodeBase64(); });
