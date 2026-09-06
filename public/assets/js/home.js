// Tool definitions
const tools = [
    // Formatters
    { name: 'JSON Formatter', url: '/json-formatter', category: 'formatters', desc: 'Format and beautify JSON data' },
    { name: 'XML Formatter', url: '/xml-formatter', category: 'formatters', desc: 'Format and beautify XML documents' },
    { name: 'HTML Formatter', url: '/html-formatter', category: 'formatters', desc: 'Format and beautify HTML code' },
    { name: 'CSS Formatter', url: '/css-formatter', category: 'formatters', desc: 'Format and beautify CSS stylesheets' },
    { name: 'SQL Formatter', url: '/sql-formatter', category: 'formatters', desc: 'Format and beautify SQL queries' },

    // Minifiers
    { name: 'JSON Minifier', url: '/json-minifier', category: 'minifiers', desc: 'Minify JSON by removing whitespace' },
    { name: 'CSS Minifier', url: '/css-minifier', category: 'minifiers', desc: 'Minify CSS for faster page loads' },
    { name: 'JavaScript Minifier', url: '/javascript-minifier', category: 'minifiers', desc: 'Minify JavaScript code' },

    // Converters
    { name: 'JSON to XML', url: '/json-to-xml', category: 'converters', desc: 'Convert JSON to XML format' },
    { name: 'XML to JSON', url: '/xml-to-json', category: 'converters', desc: 'Convert XML to JSON format' },
    { name: 'CSV to JSON', url: '/csv-to-json', category: 'converters', desc: 'Convert CSV to JSON array' },
    { name: 'CSV to XML', url: '/csv-to-xml', category: 'converters', desc: 'Convert CSV to XML format' },
    { name: 'YAML to JSON', url: '/yaml-to-json', category: 'converters', desc: 'Convert YAML to JSON' },
    { name: 'JSON to YAML', url: '/json-to-yaml', category: 'converters', desc: 'Convert JSON to YAML' },

    // Encoders
    { name: 'Base64 Encoder', url: '/base64-encoder', category: 'encoders', desc: 'Encode text to Base64' },
    { name: 'Base64 Decoder', url: '/base64-decoder', category: 'encoders', desc: 'Decode Base64 to text' },
    { name: 'URL Encoder', url: '/url-encoder', category: 'encoders', desc: 'Encode URLs for safe transmission' },
    { name: 'URL Decoder', url: '/url-decoder', category: 'encoders', desc: 'Decode URL-encoded strings' },
    { name: 'HTML Escape', url: '/html-escape', category: 'encoders', desc: 'Escape HTML special characters' },
    { name: 'XML Escape', url: '/xml-escape', category: 'encoders', desc: 'Escape XML special characters' },

    // Validators
    { name: 'JSON Validator', url: '/json-validator', category: 'validators', desc: 'Validate JSON syntax' },
    { name: 'XML Validator', url: '/xml-validator', category: 'validators', desc: 'Validate XML documents' },

    // Testers
    { name: 'Regex Tester', url: '/regex-tester', category: 'testers', desc: 'Test regular expressions' },
    { name: 'Timestamp Converter', url: '/timestamp-converter', category: 'testers', desc: 'Convert between timestamps and dates' },
];

// Category icons
const categoryIcons = {
    formatters: '&#9998;',
    minifiers: '&#128195;',
    converters: '&#128260;',
    encoders: '&#128274;',
    validators: '&#10004;',
    testers: '&#128270;',
};

// Render tools to grids
function renderTools() {
    const grids = {
        formatters: document.getElementById('formattersGrid'),
        minifiers: document.getElementById('minifiersGrid'),
        converters: document.getElementById('convertersGrid'),
        encoders: document.getElementById('encodersGrid'),
        validators: document.getElementById('validatorsGrid'),
        testers: document.getElementById('testersGrid'),
    };

    // Clear all grids
    Object.values(grids).forEach(g => g.innerHTML = '');

    // Group tools by category
    const grouped = {};
    tools.forEach(tool => {
        if (!grouped[tool.category]) grouped[tool.category] = [];
        grouped[tool.category].push(tool);
    });

    // Render to each grid
    Object.entries(grouped).forEach(([category, categoryTools]) => {
        const grid = grids[category];
        if (!grid) return;

        categoryTools.forEach(tool => {
            const card = document.createElement('a');
            card.href = tool.url;
            card.className = 'tool-card';
            card.dataset.name = tool.name.toLowerCase();
            card.dataset.category = tool.category;
            card.innerHTML = `
                <div class="tool-card-icon">${categoryIcons[tool.category] || '&#128195;'}</div>
                <div class="tool-card-content">
                    <h3 class="tool-card-title">${tool.name}</h3>
                    <p class="tool-card-desc">${tool.desc}</p>
                </div>
            `;
            grid.appendChild(card);
        });
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

    // Hide empty sections
    document.querySelectorAll('.section[data-category]').forEach(section => {
        const visibleCards = section.querySelectorAll('.tool-card[style=""]');
        const hasVisible = Array.from(section.querySelectorAll('.tool-card')).some(c => c.style.display !== 'none');
        section.style.display = hasVisible ? '' : 'none';
    });
}

// Category filter
function filterByCategory(category) {
    const cards = document.querySelectorAll('.tool-card');
    const navLinks = document.querySelectorAll('.nav-link');

    // Update active state
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.category === category);
    });

    // Filter cards
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const show = category === 'all' || cardCategory === category;
        card.style.display = show ? '' : 'none';
    });

    // Show/hide sections
    document.querySelectorAll('.section[data-category]').forEach(section => {
        const sectionCategory = section.dataset.category;
        const show = category === 'all' || sectionCategory === category;
        section.style.display = show ? '' : 'none';
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

    // Category navigation
    const navCategories = document.getElementById('navCategories');
    navCategories.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link && link.dataset.category) {
            filterByCategory(link.dataset.category);
        }
    });
});
