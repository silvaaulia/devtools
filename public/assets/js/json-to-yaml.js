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


convertButton.addEventListener("click", function() {

    clearError();

    try {

        const value = input.value.trim();

        if (!value) {
            throw new Error("Please enter JSON data.");
        }

        const data = JSON.parse(value);

        output.value = jsyaml.dump(data, {
            indent: 2,
            noRefs: true
        });

    } catch (error) {

        showError(
            "Invalid JSON: " + error.message
        );

    }

});


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
