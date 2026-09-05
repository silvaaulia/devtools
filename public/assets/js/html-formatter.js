const input = document.getElementById("htmlInput");
const output = document.getElementById("htmlOutput");

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


function formatHTML() {

    clearError();

    const value = input.value.trim();

    if (!value) {
        showError("Please enter HTML code.");
        return;
    }

    try {

        const parser = new DOMParser();

        const doc = parser.parseFromString(
            value,
            "text/html"
        );

        let html = doc.body.innerHTML.trim();

        html = html
            .replace(/>\s*</g, "><")
            .replace(/></g, ">\n<");

        const lines = html.split("\n");

        let indent = 0;
        let result = [];

        lines.forEach(line => {

            line = line.trim();

            if (!line) return;

            if (line.match(/^<\//)) {
                indent--;
            }

            result.push(
                "  ".repeat(Math.max(indent, 0)) + line
            );

            if (
                line.match(/^<[^!/?][^>]*>$/) &&
                !line.match(/^<input/i) &&
                !line.match(/^<img/i) &&
                !line.match(/^<br/i) &&
                !line.match(/^<hr/i) &&
                !line.match(/^<meta/i) &&
                !line.match(/^<link/i) &&
                !line.match(/^<area/i) &&
                !line.match(/^<base/i) &&
                !line.match(/^<embed/i) &&
                !line.match(/^<source/i) &&
                !line.match(/^<track/i) &&
                !line.match(/^<wbr/i)
            ) {
                indent++;
            }

        });

        output.value = result.join("\n");

    } catch (error) {

        showError("Unable to format HTML.");

    }
}


function minifyHTML() {

    clearError();

    const value = input.value.trim();

    if (!value) {
        showError("Please enter HTML code.");
        return;
    }

    output.value = value
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/\s+/g, " ")
        .replace(/>\s+</g, "><")
        .trim();
}


formatButton.addEventListener("click", formatHTML);

minifyButton.addEventListener("click", minifyHTML);

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
        formatHTML();
    }

});
