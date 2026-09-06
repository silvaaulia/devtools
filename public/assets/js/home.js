// Tool definitions with icons
const tools = [
    // Formatters
    { name: 'JSON Formatter', url: '/json-formatter', category: 'formatters', desc: 'Format and beautify JSON data', icon: '{ }' },
    { name: 'XML Formatter', url: '/xml-formatter', category: 'formatters', desc: 'Format and beautify XML documents', icon: '&lt;/&gt;' },
    { name: 'HTML Formatter', url: '/html-formatter', category: 'formatters', desc: 'Format and beautify HTML code', icon: '&lt;&gt;' },
    { name: 'CSS Formatter', url: '/css-formatter', category: 'formatters', desc: 'Format and beautify CSS stylesheets', icon: '#' },
    { name: 'SQL Formatter', url: '/sql-formatter', category: 'formatters', desc: 'Format and beautify SQL queries', icon: 'DB' },

    // Minifiers
    { name: 'JSON Minifier', url: '/json-minifier', category: 'minifiers', desc: 'Minify JSON by removing whitespace', icon: '{}' },
    { name: 'CSS Minifier', url: '/css-minifier', category: 'minifiers', desc: 'Minify CSS for faster page loads', icon: '#' },
    { name: 'JavaScript Minifier', url: '/javascript-minifier', category: 'minifiers', desc: 'Minify JavaScript code', icon: 'JS' },

    // Converters
    { name: 'JSON to XML', url: '/json-to-xml', category: 'converters', desc: 'Convert JSON to XML format', icon: '~>' },
    { name: 'XML to JSON', url: '/xml-to-json', category: 'converters', desc: 'Convert XML to JSON format', icon: '~>' },
    { name: 'CSV to JSON', url: '/csv-to-json', category: 'converters', desc: 'Convert CSV to JSON array', icon: '~>' },
    { name: 'CSV to XML', url: '/csv-to-xml', category: 'converters', desc: 'Convert CSV to XML format', icon: '~>' },
    { name: 'YAML to JSON', url: '/yaml-to-json', category: 'converters', desc: 'Convert YAML to JSON', icon: '~>' },
    { name: 'JSON to YAML', url: '/json-to-yaml', category: 'converters', desc: 'Convert JSON to YAML', icon: '~>' },

    // Encoders
    { name: 'Base64 Encoder', url: '/base64-encoder', category: 'encoders', desc: 'Encode text to Base64', icon: 'Aa' },
    { name: 'Base64 Decoder', url: '/base64-decoder', category: 'encoders', desc: 'Decode Base64 to text', icon: 'Aa' },
    { name: 'URL Encoder', url: '/url-encoder', category: 'encoders', desc: 'Encode URLs for safe transmission', icon: 'http' },
    { name: 'URL Decoder', url: '/url-decoder', category: 'encoders', desc: 'Decode URL-encoded strings', icon: 'http' },
    { name: 'HTML Escape', url: '/html-escape', category: 'encoders', desc: 'Escape HTML special characters', icon: '&lt;&gt;' },
    { name: 'XML Escape', url: '/xml-escape', category: 'encoders', desc: 'Escape XML special characters', icon: '&lt;/&gt;' },

    // Validators
    { name: 'JSON Validator', url: '/json-validator', category: 'validators', desc: 'Validate JSON syntax', icon: 'OK' },
    { name: 'XML Validator', url: '/xml-validator', category: 'validators', desc: 'Validate XML documents', icon: 'OK' },

    // Testers
    { name: 'Regex Tester', url: '/regex-tester', category: 'testers', desc: 'Test regular expressions', icon: '.*' },
    { name: 'Timestamp Converter', url: '/timestamp-converter', category: 'testers', desc: 'Convert between timestamps and dates', icon: 'UTC' },
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
            <div class="tool-card-icon">${tool.icon}</div>
            <div class="tool-card-content">
                <h3 class="tool-card-title">${tool.name}</h3>
                <p class="tool-card-desc">${tool.desc}</p>
            </div>
            <div class="tool-card-arrow">&#8594;</div>
        `;
        grid.appendChild(card);
    });
}

// Search functionality
function filterTools(query) {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => {
        const name = card.dataset.name;
        const matches = name.includes(query.toLowerCase());
        card.style.display = matches ? '' : 'none';
    });
}

// Category filter
function filterByCategory(category) {
    const cards = document.querySelectorAll('.tool-card');

    // Update active state on all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.category) {
            link.classList.toggle('active', link.dataset.category === category);
        }
    });

    // Filter cards
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const show = category === 'all' || cardCategory === category;
        card.style.display = show ? '' : 'none';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTools();

    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterTools(e.target.value);
    });

    // Category navigation - both desktop and mobile
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link && link.dataset.category) {
            filterByCategory(link.dataset.category);
            // Close mobile menu
            document.getElementById('hamburger')?.classList.remove('active');
            document.getElementById('mobileNav')?.classList.remove('active');
        }
    });
});
