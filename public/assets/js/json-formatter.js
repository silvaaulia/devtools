const input = document.getElementById('jsonInput');
const output = document.getElementById('outputCode');
const msg = document.getElementById('message');
const fmtBtn = document.getElementById('formatBtn');
const minBtn = document.getElementById('minifyBtn');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

function show(text, type) {
    msg.textContent = text;
    msg.className = type;
    if (text) setTimeout(() => msg.textContent = '', 3000);
}

function format() {
    try {
        const data = JSON.parse(input.value);
        output.textContent = JSON.stringify(data, null, 2);
        show('Formatted!', 'success');
    } catch (e) { show(e.message, 'error'); }
}

function minify() {
    try {
        const data = JSON.parse(input.value);
        output.textContent = JSON.stringify(data);
        show('Minified!', 'success');
    } catch (e) { show(e.message, 'error'); }
}

fmtBtn.addEventListener('click', format);
minBtn.addEventListener('click', minify);
clearBtn.addEventListener('click', () => { input.value = ''; output.textContent = ''; });
copyBtn.addEventListener('click', async () => {
    if (!output.textContent) return;
    await navigator.clipboard.writeText(output.textContent);
    show('Copied!', 'success');
});
input.addEventListener('keydown', e => { if (e.key === 'Enter' && e.ctrlKey) format(); });
