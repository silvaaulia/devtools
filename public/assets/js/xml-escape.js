const input = document.getElementById("input");
const output = document.getElementById("output");

const escapeButton = document.getElementById("escapeButton");
const unescapeButton = document.getElementById("unescapeButton");
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
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function unescapeXML(value) {
    return value
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&");
}

escapeButton.addEventListener("click", function () {
    clearError();
    if (!input.value) {
        showError("Please enter text.");
        return;
    }
    output.value = escapeXML(input.value);
});

unescapeButton.addEventListener("click", function () {
    clearError();
    if (!input.value) {
        showError("Please enter text.");
        return;
    }
    output.value = unescapeXML(input.value);
});

clearButton.addEventListener("click", function () {
    input.value = "";
    output.value = "";
    clearError();
});

copyButton.addEventListener("click", async function () {
    if (!output.value) return;
    await navigator.clipboard.writeText(output.value);
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 1500);
});
