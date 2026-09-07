// Elements
const input = document.getElementById('input');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const convertBtn = document.getElementById('convertBtn');
const nowBtn = document.getElementById('nowBtn');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const copyBtn = document.getElementById('copyBtn');

function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

function convert() {
    const value = input.value.trim();
    if (!value) { showMessage('Please enter timestamp or date.', 'error'); return; }

    let results = [];

    // Try as Unix timestamp
    if (/^\d+$/.test(value)) {
        const ts = parseInt(value, 10);
        const date = ts > 9999999999 ? new Date(ts) : new Date(ts * 1000);
        if (!isNaN(date.getTime())) {
            results.push(`Unix Timestamp (seconds): ${ts}`);
            results.push(`Unix Timestamp (ms): ${ts * 1000}`);
            results.push(`ISO 8601: ${date.toISOString()}`);
            results.push(`UTC: ${date.toUTCString()}`);
            results.push(`Local: ${date.toLocaleString()}`);
            results.push(`Human Readable: ${date.toString()}`);
        }
    }

    // Try as date string
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
        results.push(`Unix (seconds): ${Math.floor(date.getTime() / 1000)}`);
        results.push(`Unix (ms): ${date.getTime()}`);
        results.push(`ISO 8601: ${date.toISOString()}`);
        results.push(`UTC: ${date.toUTCString()}`);
        results.push(`Local: ${date.toLocaleString()}`);
        results.push(`Human Readable: ${date.toString()}`);
        results.push(`Relative: ${formatRelative(date)}`);
    }

    if (results.length === 0) {
        showMessage('Could not parse input', 'error');
        outputCode.textContent = 'Enter a Unix timestamp or date string';
        return;
    }

    outputCode.textContent = results.join('\n\n');
    showMessage('Converted!', 'success');
}

function formatRelative(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (diff < 0) return 'in the future';
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
}

function setNow() {
    input.value = Math.floor(Date.now() / 1000).toString();
    convert();
}

function clearAll() { input.value = ''; outputCode.textContent = '<!-- Conversion results will appear here -->'; }

async function copyToClipboard() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) { showMessage('Nothing', 'error'); return; }
    try { await navigator.clipboard.writeText(outputCode.textContent); showMessage('Copied!', 'success'); } catch { showMessage('Failed', 'error'); }
}

convertBtn.addEventListener('click', convert);
nowBtn.addEventListener('click', setNow);
clearBtn.addEventListener('click', clearAll);
clearAllBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') convert(); });
