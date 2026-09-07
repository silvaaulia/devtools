const input = document.getElementById('sqlInput');
const output = document.getElementById('outputCode');
const msg = document.getElementById('message');
const fmt = () => {
    const sql = input.value.trim();
    if (!sql) return;
    const keywords = ['SELECT','FROM','WHERE','AND','OR','ORDER BY','GROUP BY','JOIN','LEFT JOIN','INNER JOIN','ON','LIMIT','INSERT','VALUES','UPDATE','SET','DELETE'].sort((a,b) => b.length - a.length);
    let formatted = sql;
    keywords.forEach(k => {
        const re = new RegExp('\\b' + k + '\\b','gi');
        formatted = formatted.replace(re, '\n' + k);
    });
    formatted = formatted.split('\n').map(l => l.trim()).filter(Boolean).map((l,i) => i === 0 ? l : '  ' + l).join('\n');
    output.textContent = formatted;
    msg.textContent = 'Formatted!'; msg.className = 'success';
    setTimeout(() => msg.textContent = '', 3000);
};
document.getElementById('fmtBtn').addEventListener('click', fmt);
document.getElementById('clearBtn').addEventListener('click', () => { input.value = ''; output.textContent = ''; });
document.getElementById('copyBtn').addEventListener('click', async () => { if (output.textContent) { await navigator.clipboard.writeText(output.textContent); msg.textContent = 'Copied!'; msg.className = 'success'; } });
input.addEventListener('keydown', e => { if (e.ctrlKey && e.key === 'Enter') fmt(); });
