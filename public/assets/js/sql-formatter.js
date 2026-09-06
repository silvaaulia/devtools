// Elements
const input = document.getElementById('sqlInput');
const outputCode = document.getElementById('outputCode');
const messageArea = document.getElementById('messageArea');
const formatBtn = document.getElementById('formatBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fileInput = document.getElementById('fileInput');

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

// Format SQL
function formatSQL() {
    clearMessage();
    const sql = input.value.trim();
    if (!sql) {
        showMessage('Please enter SQL query.', 'error');
        return;
    }
    try {
        let result = sql.replace(/\s+/g, ' ');
        const keywords = ['SELECT', 'FROM', 'WHERE', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'CROSS JOIN', 'JOIN', 'ON', 'SET', 'VALUES', 'INSERT INTO', 'UPDATE', 'DELETE FROM', 'AND', 'OR', 'IN', 'NOT IN', 'BETWEEN', 'LIKE', 'IS NULL', 'IS NOT NULL'];
        keywords.forEach(keyword => {
            const regex = new RegExp('\\s+' + keyword + '\\s+', 'gi');
            result = result.replace(regex, '\n' + keyword + ' ');
        });
        result = result.replace(/\nAND\s+/gi, '\n    AND ');
        result = result.replace(/\nOR\s+/gi, '\n    OR ');
        outputCode.textContent = result.trim();
        showMessage('SQL formatted successfully!', 'success');
    } catch (error) {
        showMessage('Unable to format SQL.', 'error');
    }
}

// Clear all
function clearAll() {
    input.value = '';
    outputCode.textContent = '<span class="token comment">-- Formatted SQL will appear here --</span>';
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

// Download SQL
function downloadSQL() {
    if (!outputCode.textContent || outputCode.textContent.includes('will appear')) {
        showMessage('Nothing to download', 'error');
        return;
    }
    const blob = new Blob([outputCode.textContent], { type: 'application/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.sql';
    a.click();
    URL.revokeObjectURL(url);
    showMessage('Download started!', 'success');
}

// Load file
function loadFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { input.value = e.target.result; formatSQL(); };
    reader.readAsText(file);
}

// Event listeners
formatBtn.addEventListener('click', formatSQL);
clearBtn.addEventListener('click', clearAll);
copyBtn.addEventListener('click', copyToClipboard);
downloadBtn.addEventListener('click', downloadSQL);
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

// Drag and drop
input.addEventListener('dragover', (e) => { e.preventDefault(); input.classList.add('dragging'); });
input.addEventListener('dragleave', () => input.classList.remove('dragging'));
input.addEventListener('drop', (e) => { e.preventDefault(); input.classList.remove('dragging'); loadFile(e.dataTransfer.files[0]); });

// Keyboard shortcuts
input.addEventListener('keydown', (e) => { if (e.ctrlKey && e.key === 'Enter') formatSQL(); });
