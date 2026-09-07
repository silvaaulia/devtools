const input = document.getElementById('xmlInput');
const output = document.getElementById('outputCode');
const msg = document.getElementById('message');

function show(text, type = 'success') {
    msg.textContent = text;
    msg.className = type;
    if (text) setTimeout(() => msg.textContent = '', 3000);
}

function format() {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(input.value, 'text/xml');
        const err = doc.querySelector('parsererror');
        if (err) { show('Invalid XML', 'error'); return; }
        const s = new XMLSerializer();
        let xml = s.serializeToString(doc);
        // simple indent
        let formatted = '', indent = 0;
        xml.split(><).filter(Boolean).forEach((tag, i, arr) => {
            if (tag.startsWith('/')) indent = Math.max(0, indent - 1);
            formatted += '  '.repeat(indent) + '<' + tag + '>\n';
            if (!tag.startsWith('/') && !tag.startsWith('?') && !tag.match(/\/$/) && i < arr.length - 1) indent++;
        });
        output.textContent = formatted.trim();
        show('Formatted!', 'success');
    } catch { show('Error', 'error'); }
}

document.getElementById('fmtBtn').addEventListener('click', format);
document.getElementById('clearBtn').addEventListener('click', () => { input.value = ''; output.textContent = ''; });
document.getElementById('copyBtn').addEventListener('click', async () => {
    if (!output.textContent) return;
    await navigator.clipboard.writeText(output.textContent);
    show('Copied!');
});
input.addEventListener('keydown', e => { if (e.ctrlKey && e.key === 'Enter') format(); });
