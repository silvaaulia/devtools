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

convertButton.addEventListener("click", function () {

    clearError();

    if (!input.value) {
        showError("Please enter text.");
        return;
    }

    output.value = encodeURIComponent(input.value);

});

clearButton.addEventListener("click", function () {

    input.value = "";
    output.value = "";

    clearError();

});

copyButton.addEventListener("click", async function () {

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
