// Elements
const regexInput = document.getElementById('regexInput');
const textInput = document.getElementById('textInput');
const replaceInput = document.getElementById('replaceInput');
const outputCode = document.getElementById('outputCode');
const replaceOutput = document.getElementById('replaceOutput');
const messageArea = document.getElementById('messageArea');
const replacePanel = document.getElementById('replacePanel');
const dropZone = document.getElementById('dropZone');

// Buttons
const testBtn = document.getElementById('testBtn');
const replaceBtn = document.getElementById('replaceBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const clearBtn = document.getElementById('clearBtn');
const clearTextBtn = document.getElementById('clearTextBtn');
const copyBtn = document.getElementById('copyBtn');
const copyReplaceBtn = document.getElementById('copyReplaceBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sampleBtn = document.getElementById('sampleBtn');
const fileInput = document.getElementById('fileInput');

// Flags
const flagG = document.getElementById('flagG');
const flagI = document.getElementById('flagI');
const flagM = document.getElementById('flagM');
const flagS = document.getElementById('flagS');

// Sample data for regex tester
const sampleData = [
    {
        name: 'Email Addresses',
        pattern: '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b',
        text: `john.doe@example.com
admin@company.org
support@helpdesk.net
user123@gmail.com
invalid-email-address
test@sub.domain.co.uk
missing@domain
@nodomain.com
contact@site.io`
    },
    {
        name: 'Phone Numbers',
        pattern: '\\+?\\d?[\\s.-]?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}',
        text: `+1-555-123-4567
(555) 987-6543
555.123.4567
555-123-4567
+44 20 7946 0958
123-456-7890
invalid-phone-number
+1 (555) 123-4567`
    },
    {
        name: 'URLs',
        pattern: 'https?://[^\\s]+',
        text: `https://www.example.com
http://sub.domain.org/path?query=value
ftp://files.server.net
https://github.com/user/repo
www.google.com
not a url
https://api.service.io/v2/users/123
mailto:test@email.com`
    },
    {
        name: 'IPv4 Addresses',
        pattern: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b',
        text: `192.168.1.1
10.0.0.255
172.16.0.1
255.255.255.0
999.999.999.999
192.168.1
invalid-ip-address
8.8.8.8`
    },
    {
        name: 'Dates (YYYY-MM-DD)',
        pattern: '\\d{4}-\\d{2}-\\d{2}',
        text: `2024-01-15
2023-12-25
1999-06-30
invalid date
2024-13-45
2024/01/15
01/15/2024`
    }
];
let currentSampleIndex = 0;

// Build flags string from checkboxes
function getFlags() {
    let flags = '';
    if (flagG.checked) flags += 'g';
    if (flagI.checked) flags += 'i';
    if (flagM.checked) flags += 'm';
    if (flagS.checked) flags += 's';
    return flags;
}

// Show message
function showMessage(text, type = 'success') {
    messageArea.className = `alert alert-${type}`;
    messageArea.innerHTML = text;
    setTimeout(() => { messageArea.innerHTML = ''; }, 3000);
}

// Escape HTML
function escapeHTML(value) {
    if (value === null || value === undefined) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Test Regex
function testRegex() {
    messageArea.innerHTML = '';
    const pattern = regexInput.value;
    const flags = getFlags();
    const text = textInput.value;

    if (!pattern) {
        outputCode.textContent = 'Enter a regex pattern to test.';
        showMessage('Please enter a regular expression.', 'error');
        return;
    }

    try {
        const regex = new RegExp(pattern, flags);
        const matches = [];

        if (flags.includes('g')) {
            let match;
            while ((match = regex.exec(text)) !== null) {
                matches.push({
                    value: match[0],
                    index: match.index,
                    groups: match.slice(1)
                });
                if (match[0] === '') regex.lastIndex++;
            }
        } else {
            const match = regex.exec(text);
            if (match) {
                matches.push({
                    value: match[0],
                    index: match.index,
                    groups: match.slice(1)
                });
            }
        }

        if (matches.length === 0) {
            outputCode.textContent = 'No match found.';
            showMessage('No matches found.', 'error');
            return;
        }

        let output = `Found ${matches.length} match(es):\n\n`;
        matches.forEach((match, index) => {
            output += `─── Match ${index + 1} ───\n`;
            output += `Full match: "${escapeHTML(match.value)}"\n`;
            output += `Position:  ${match.index} - ${match.index + match.value.length}\n`;
            if (match.groups.length > 0 && match.groups.some(g => g !== undefined)) {
                output += `Groups:\n`;
                match.groups.forEach((g, i) => {
                    output += `  $${i + 1}: "${escapeHTML(g || '')}"\n`;
                });
            }
            output += '\n';
        });

        outputCode.textContent = output;
        showMessage(`Found ${matches.length} match(es)!`, 'success');

        // Update replace output if replace panel is visible
        if (replacePanel.style.display !== 'none') {
            doReplace();
        }
    } catch (error) {
        outputCode.textContent = `Error: ${error.message}`;
        showMessage('Invalid regex: ' + error.message, 'error');
    }
}

// Do replace
function doReplace() {
    const pattern = regexInput.value;
    const flags = getFlags();
    const text = textInput.value;
    const replacement = replaceInput.value;

    if (!pattern || !text) {
        replaceOutput.textContent = 'Enter pattern and text to replace.';
        return;
    }

    try {
        const regex = new RegExp(pattern, flags);
        const result = text.replace(regex, replacement);
        replaceOutput.textContent = result;
    } catch (error) {
        replaceOutput.textContent = `Error: ${error.message}`;
    }
}

// Toggle replace panel
function toggleReplace() {
    if (replacePanel.style.display === 'none') {
        replacePanel.style.display = 'block';
        replaceBtn.classList.add('btn-primary');
        replaceBtn.classList.remove('btn-secondary');
        replaceBtn.innerHTML = '&#9650; Hide Replace';
        doReplace();
    } else {
        replacePanel.style.display = 'none';
        replaceBtn.classList.remove('btn-primary');
        replaceBtn.classList.add('btn-secondary');
        replaceBtn.innerHTML = '&#128257; Replace';
    }
}

// Load sample data
function loadSample() {
    const sample = sampleData[currentSampleIndex];
    regexInput.value = sample.pattern;
    textInput.value = sample.text;
    currentSampleIndex = (currentSampleIndex + 1) % sampleData.length;
    showMessage(`Sample ${currentSampleIndex + 1}/${sampleData.length}: ${sample.name}`, 'success');
    testRegex();
}

// Clear all
function clearAll() {
    regexInput.value = '';
    textInput.value = '';
    replaceInput.value = '';
    outputCode.textContent = 'Matches will appear here';
    replaceOutput.textContent = 'Result will appear here';
    messageArea.innerHTML = '';
}

// Clear text input
function clearText() {
    textInput.value = '';
    outputCode.textContent = 'Matches will appear here';
    replaceOutput.textContent = 'Result will appear here';
}

// Copy to clipboard
async function copyToClipboard(text) {
    if (!text || text.includes('will appear') || text.includes('Enter')) {
        showMessage('Nothing to copy', 'error');
        return;
    }
    try {
        await navigator.clipboard.writeText(text);
        showMessage('Copied to clipboard!', 'success');
    } catch {
        showMessage('Failed to copy', 'error');
    }
}

// Download results
function downloadResults() {
    const output = outputCode.textContent;
    if (!output || output.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }

    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `regex-results-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showMessage('Downloaded!', 'success');
}

// Load file
function loadFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        textInput.value = e.target.result;
        showMessage(`Loaded: ${file.name}`, 'success');
        testRegex();
    };
    reader.onerror = () => {
        showMessage('Failed to read file', 'error');
    };
    reader.readAsText(file);
}

// Drag & Drop
if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) loadFile(file);
    });
}

// Event listeners
testBtn.addEventListener('click', testRegex);
replaceBtn.addEventListener('click', toggleReplace);
clearAllBtn.addEventListener('click', clearAll);
clearBtn.addEventListener('click', () => { regexInput.value = ''; testRegex(); });
clearTextBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', () => copyToClipboard(outputCode.textContent));
copyReplaceBtn.addEventListener('click', () => copyToClipboard(replaceOutput.textContent));
downloadBtn.addEventListener('click', downloadResults);
sampleBtn.addEventListener('click', loadSample);
fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) loadFile(e.target.files[0]);
});

// Real-time testing
regexInput.addEventListener('input', testRegex);
textInput.addEventListener('input', testRegex);
replaceInput.addEventListener('input', doReplace);
[flagG, flagI, flagM, flagS].forEach(flag => {
    flag.addEventListener('change', testRegex);
});

// Keyboard shortcuts
textInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        testRegex();
    }
});

regexInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        testRegex();
    }
});
