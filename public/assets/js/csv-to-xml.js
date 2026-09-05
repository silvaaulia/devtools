const input = document.getElementById("input");
const output = document.getElementById("output");

const convertButton = document.getElementById("convertButton");
const clearButton = document.getElementById("clearButton");
const copyButton = document.getElementById("copyButton");
const errorMessage = document.getElementById("errorMessage");


function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}


function clearError() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
}


function escapeXML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

}


function parseCSV(text) {

    const rows = [];
    let row = [];
    let value = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {

        const char = text[i];
        const next = text[i + 1];

        if (char === '"' && insideQuotes && next === '"') {
            value += '"';
            i++;
            continue;
        }

        if (char === '"') {
            insideQuotes = !insideQuotes;
            continue;
        }

        if (char === "," && !insideQuotes) {
            row.push(value.trim());
            value = "";
            continue;
        }

        if ((char === "\n" || char === "\r") && !insideQuotes) {

            if (char === "\r" && next === "\n") {
                i++;
            }

            row.push(value.trim());
            rows.push(row);

            row = [];
            value = "";

            continue;
        }

        value += char;
    }

    row.push(value.trim());

    if (row.length > 1 || row[0] !== "") {
        rows.push(row);
    }

    return rows;
}


function convertCSV() {

    clearError();

    try {

        const text = input.value.trim();

        if (!text) {
            throw new Error("Please enter CSV data.");
        }

        const rows = parseCSV(text);

        if (rows.length < 2) {
            throw new Error("CSV must contain a header and data.");
        }

        const headers = rows[0];

        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += "<root>\n";

        rows.slice(1).forEach(row => {

            xml += "  <item>\n";

            headers.forEach((header, index) => {

                const value = row[index] ?? "";

                xml += `    <${header}>${escapeXML(value)}</${header}>\n`;

            });

            xml += "  </item>\n";

        });

        xml += "</root>";

        output.value = xml;

    } catch (error) {

        showError(error.message);

    }
}


convertButton.addEventListener("click", convertCSV);


clearButton.addEventListener("click", function() {

    input.value = "";
    output.value = "";

    clearError();

});


copyButton.addEventListener("click", async function() {

    if (!output.value) {
        showError("Nothing to copy.");
        return;
    }

    await navigator.clipboard.writeText(output.value);

    copyButton.textContent = "Copied!";

    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 1500);

});
