// Elements
const regexInput = document.getElementById('regexInput');
const textInput = document.getElementById('textInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const matchCount = document.getElementById('matchCount');

// Flags
const flagG = document.getElementById('flagG');
const flagI = document.getElementById('flagI');
const flagM = document.getElementById('flagM');
const flagS = document.getElementById('flagS');

function getFlags() {
    let flags = '';
    if (flagG.checked) flags += 'g';
    if (flagI.checked) flags += 'i';
    if (flagM.checked) flags += 'm';
    if (flagS.checked) flags += 's';
    return flags;
}

function showMessage(text, type = 'success') {
    messageArea.textContent = text;
    messageArea.className = 'regex-message ' + type;
    setTimeout(() => { messageArea.textContent = ''; }, 3000);
}

function testRegex() {
    const pattern = regexInput.value;
    const flags = getFlags();
    const text = textInput.value;

    if (!pattern) {
        outputCode.textContent = 'Enter a pattern';
        matchCount.textContent = '';
        return;
    }

    try {
        const regex = new RegExp(pattern, flags);
        const matches = [];

        if (flags.includes('g')) {
            let match;
            while ((match = regex.exec(text)) !== null) {
                matches.push({ value: match[0], index: match.index, groups: match.slice(1) });
                if (match[0] === '') regex.lastIndex++;
            }
        } else {
            const match = regex.exec(text);
            if (match) matches.push({ value: match[0], index: match.index, groups: match.slice(1) });
        }

        if (matches.length === 0) {
            outputCode.textContent = 'No matches';
            matchCount.textContent = '';
            return;
        }

        matchCount.textContent = `(${matches.length})`;
        let output = '';
        matches.forEach((m, i) => {
            output += `"${m.value}" at ${m.index}`;
            if (m.groups.some(g => g !== undefined)) {
                output += m.groups.map((g, j) => `\n  $${j + 1}: "${g || ''}"`).join('');
            }
            output += '\n';
        });
        outputCode.textContent = output.trim();
        showMessage(`Found ${matches.length} match${matches.length > 1 ? 'es' : ''}`, 'success');
    } catch (error) {
        outputCode.textContent = `Error: ${error.message}`;
        matchCount.textContent = '';
    }
}

// Copy
document.getElementById('copyBtn')?.addEventListener('click', async () => {
    const text = outputCode.textContent;
    if (!text || text === 'Matches will appear here') return;
    try {
        await navigator.clipboard.writeText(text);
        showMessage('Copied!', 'success');
    } catch { showMessage('Failed', 'error'); }
});

// Events
regexInput.addEventListener('input', testRegex);
textInput.addEventListener('input', testRegex);
[flagG, flagI, flagM, flagS].forEach(f => f.addEventListener('change', testRegex));
