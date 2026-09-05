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

    const value = input.value.trim();

    if (!value) {
        showError("Please enter Base64 data.");
        return;
    }

    try {

        const binary = atob(value);

        const bytes = Uint8Array.from(
            binary,
            char => char.charCodeAt(0)
        );

        output.value =
            new TextDecoder().decode(bytes);

    } catch (error) {

        showError("Invalid Base64 data.");

    }

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
