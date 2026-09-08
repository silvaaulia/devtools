// Tool definitions with beautiful icons
const tools = [
    // Formatters
    { name: 'JSON Formatter', url: '/json-formatter', category: 'formatters', desc: 'Format and beautify JSON data', icon: '🎨', color: '#8b5cf6' },
    { name: 'HTML Formatter', url: '/html-formatter', category: 'formatters', desc: 'Format and beautify HTML code', icon: '🏷️', color: '#f97316' },
    { name: 'XML Formatter', url: '/xml-formatter', category: 'formatters', desc: 'Format and beautify XML documents', icon: '📄', color: '#10b981' },
    { name: 'CSS Formatter', url: '/css-formatter', category: 'formatters', desc: 'Format and beautify CSS stylesheets', icon: '💅', color: '#ec4899' },
    { name: 'SQL Formatter', url: '/sql-formatter', category: 'formatters', desc: 'Format and beautify SQL queries', icon: '🗄️', color: '#6366f1' },

    // Minifiers
    { name: 'JSON Minifier', url: '/json-minifier', category: 'minifiers', desc: 'Minify JSON for smaller size', icon: '🗜️', color: '#8b5cf6' },
    { name: 'CSS Minifier', url: '/css-minifier', category: 'minifiers', desc: 'Minify CSS for faster loads', icon: '⚡', color: '#f97316' },
    { name: 'JavaScript Minifier', url: '/javascript-minifier', category: 'minifiers', desc: 'Minify JavaScript code', icon: '🚀', color: '#fbbf24' },

    // Converters
    { name: 'JSON to XML', url: '/json-to-xml', category: 'converters', desc: 'Convert JSON to XML format', icon: '🔄', color: '#10b981' },
    { name: 'XML to JSON', url: '/xml-to-json', category: 'converters', desc: 'Convert XML to JSON format', icon: '🔄', color: '#10b981' },
    { name: 'CSV to JSON', url: '/csv-to-json', category: 'converters', desc: 'Convert CSV to JSON array', icon: '📊', color: '#ec4899' },
    { name: 'CSV to XML', url: '/csv-to-xml', category: 'converters', desc: 'Convert CSV to XML format', icon: '📊', color: '#ec4899' },
    { name: 'YAML to JSON', url: '/yaml-to-json', category: 'converters', desc: 'Convert YAML to JSON', icon: '📋', color: '#6366f1' },
    { name: 'JSON to YAML', url: '/json-to-yaml', category: 'converters', desc: 'Convert JSON to YAML', icon: '📋', color: '#6366f1' },

    // Encoders
    { name: 'Base64 Encoder', url: '/base64-encoder', category: 'encoders', desc: 'Encode text to Base64', icon: '🔐', color: '#8b5cf6' },
    { name: 'Base64 Decoder', url: '/base64-decoder', category: 'encoders', desc: 'Decode Base64 to text', icon: '🔓', color: '#10b981' },
    { name: 'URL Encoder', url: '/url-encoder', category: 'encoders', desc: 'Encode URLs for safe transmission', icon: '🔗', color: '#f97316' },
    { name: 'URL Decoder', url: '/url-decoder', category: 'encoders', desc: 'Decode URL-encoded strings', icon: '🔗', color: '#f97316' },
    { name: 'HTML Escape', url: '/html-escape', category: 'encoders', desc: 'Escape HTML special characters', icon: '🛡️', color: '#ec4899' },
    { name: 'XML Escape', url: '/xml-escape', category: 'encoders', desc: 'Escape XML special characters', icon: '🛡️', color: '#ec4899' },

    // Validators
    { name: 'JSON Validator', url: '/json-validator', category: 'validators', desc: 'Validate JSON syntax', icon: '✅', color: '#10b981' },
    { name: 'XML Validator', url: '/xml-validator', category: 'validators', desc: 'Validate XML documents', icon: '✅', color: '#10b981' },

    // Testers
    { name: 'Regex Tester', url: '/regex-tester', category: 'testers', desc: 'Test regular expressions', icon: '🔍', color: '#8b5cf6' },
    { name: 'Timestamp Converter', url: '/timestamp-converter', category: 'testers', desc: 'Convert timestamps and dates', icon: '⏰', color: '#f97316' },
];

// Render all tools to single grid
function renderTools() {
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = '';

    tools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'tool-card';
        card.dataset.name = tool.name.toLowerCase();
        card.dataset.category = tool.category;
        card.innerHTML = `
            <div class="tool-icon" style="background: ${tool.color}20; color: ${tool.color};">${tool.icon}</div>
            <div class="tool-content">
                <h3 class="tool-name">${tool.name}<span class="tool-arrow">→</span></h3>
                <p class="tool-desc">${tool.desc}</p>
            </div>
            <span class="tool-category">${tool.category}</span>
        `;
        grid.appendChild(card);
    });
}

// Search functionality
function filterTools(query) {
    const cards = document.querySelectorAll('.tool-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const name = card.dataset.name;
        const matches = name.includes(query.toLowerCase());
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
    });

    // Show/hide no results message
    let noResults = document.querySelector('.no-results');
    if (visibleCount === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = '<div class="no-results-icon">🔍</div><p class="no-results-text">No tools found</p>';
            document.querySelector('.tools-grid').appendChild(noResults);
        }
        noResults.style.display = '';
    } else if (noResults) {
        noResults.style.display = 'none';
    }
}

// Category filter
function filterByCategory(category) {
    const cards = document.querySelectorAll('.tool-card');
    let visibleCount = 0;

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.category) {
            link.classList.toggle('active', link.dataset.category === category);
        }
    });

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const show = category === 'all' || cardCategory === category;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
    });

    // Show/hide no results message
    let noResults = document.querySelector('.no-results');
    if (visibleCount === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = '<div class="no-results-icon">🔍</div><p class="no-results-text">No tools found</p>';
            document.querySelector('.tools-grid').appendChild(noResults);
        }
        noResults.style.display = '';
    } else if (noResults) {
        noResults.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTools();

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterTools(e.target.value);
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link && link.dataset.category) {
            filterByCategory(link.dataset.category);
            document.getElementById('hamburger')?.classList.remove('active');
            document.getElementById('mobileNav')?.classList.remove('active');
        }
    });
});
