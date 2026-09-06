// Elements
const timestampInput = document.getElementById('timestampInput');
const dateInput = document.getElementById('dateInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

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

// Format date
function formatDate(date) {
    return date.toLocaleString();
}

// Timestamp to Date
function timestampToDate() {
    clearMessage();
    const value = timestampInput.value.trim();
    if (!value) {
        showMessage('Please enter a timestamp.', 'error');
        return;
    }
    const timestamp = Number(value);
    if (!Number.isFinite(timestamp)) {
        showMessage('Invalid timestamp.', 'error');
        return;
    }
    const milliseconds = timestamp.toString().length >= 13 ? timestamp : timestamp * 1000;
    const date = new Date(milliseconds);
    if (Number.isNaN(date.getTime())) {
        showMessage('Invalid timestamp.', 'error');
        return;
    }
    outputCode.textContent = 'Local: ' + formatDate(date) + '\n\nUTC: ' + date.toUTCString() + '\n\nISO: ' + date.toISOString();
    showMessage('Timestamp converted!', 'success');
}

// Date to Timestamp
function dateToTimestamp() {
    clearMessage();
    if (!dateInput.value) {
        showMessage('Please select a date and time.', 'error');
        return;
    }
    const date = new Date(dateInput.value);
    const seconds = Math.floor(date.getTime() / 1000);
    const milliseconds = date.getTime();
    outputCode.textContent = 'Unix Timestamp: ' + seconds + '\n\nMilliseconds: ' + milliseconds;
    showMessage('Date converted!', 'success');
}

// Current Time
function currentTime() {
    clearMessage();
    const now = new Date();
    const timestamp = Math.floor(now.getTime() / 1000);
    timestampInput.value = timestamp;
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    dateInput.value = local.toISOString().slice(0, 16);
    outputCode.textContent = 'Current Date: ' + now.toLocaleString() + '\n\nUnix Timestamp: ' + timestamp + '\n\nMilliseconds: ' + now.getTime();
    showMessage('Current time set!', 'success');
}

// Clear all
function clearAll() {
    timestampInput.value = '';
    dateInput.value = '';
    outputCode.textContent = '<!-- Converted timestamp will appear here -->';
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

// Event listeners
formatBtn.addEventListener('click', timestampToDate);
minifyBtn.addEventListener('click', dateToTimestamp);
downloadBtn.addEventListener('click', currentTime);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
