const input = document.getElementById("xmlInput");
const output = document.getElementById("xmlOutput");

const formatButton = document.getElementById("formatButton");
const minifyButton = document.getElementById("minifyButton");
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


function parseXML() {

    const value = input.value.trim();

    if (!value) {
        throw new Error("Please enter XML data.");
    }

    const parser = new DOMParser();

    const xml = parser.parseFromString(value, "application/xml");

    const parserError = xml.querySelector("parsererror");

    if (parserError) {
        throw new Error("Invalid XML structure.");
    }

    return xml;
}


function formatXML() {

    clearError();

    try {

        const xml = parseXML();

        const serializer = new XMLSerializer();

        let text = serializer.serializeToString(xml);

        text = text
            .replace(/(>)(<)(\/*)/g, "$1\n$2$3")
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);

        let formatted = "";
        let indent = 0;

        text.forEach(line => {

            if (line.match(/^<\//)) {
                indent--;
            }

            formatted += "  ".repeat(Math.max(indent, 0)) + line + "\n";

            if (
                line.match(/^<[^!?/][^>]*>$/) &&
                !line.match(/<\/[^>]+>$/)
            ) {
                indent++;
            }

        });

        output.value = formatted.trim();

    } catch (error) {

        showError("Invalid XML: " + error.message);

    }
}


function minifyXML() {

    clearError();

    try {

        const xml = parseXML();

        const serializer = new XMLSerializer();

        output.value = serializer
            .serializeToString(xml)
            .replace(/>\s+</g, "><")
            .trim();

    } catch (error) {

        showError("Invalid XML: " + error.message);

    }
}


formatButton.addEventListener("click", formatXML);

minifyButton.addEventListener("click", minifyXML);

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

    try {

        await navigator.clipboard.writeText(output.value);

        copyButton.textContent = "Copied!";

        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 1500);

    } catch {

        showError("Unable to copy result.");

    }

});


input.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "Enter") {
        formatXML();
    }

});
