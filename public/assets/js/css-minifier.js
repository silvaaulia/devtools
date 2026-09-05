const input = document.getElementById("cssInput");
const output = document.getElementById("cssOutput");

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


function minifyCSS() {

    clearError();

    const value = input.value.trim();

    if (!value) {
        showError("Please enter CSS code.");
        return;
    }

    output.value = value
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\s+/g, " ")
        .replace(/\s*([{}:;,>+~])\s*/g, "$1")
        .trim();
}


minifyButton.addEventListener("click", minifyCSS);


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
