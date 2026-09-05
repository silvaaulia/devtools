const input = document.getElementById("jsonInput");
const output = document.getElementById("jsonOutput");

const formatButton = document.getElementById("formatButton");
const minifyButton = document.getElementById("minifyButton");
const clearButton = document.getElementById("clearButton");

const copyButton = document.getElementById("copyButton");
const downloadButton = document.getElementById("downloadButton");

const fileInput = document.getElementById("fileInput");
const errorMessage = document.getElementById("errorMessage");


function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}


function clearError() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
}


function getJSON() {

    const value = input.value.trim();

    if (!value) {
        throw new Error("Please enter JSON data.");
    }

    return JSON.parse(value);
}


function formatJSON() {

    clearError();

    try {

        const data = getJSON();

        output.value = JSON.stringify(data, null, 2);

    } catch (error) {

        showError("Invalid JSON: " + error.message);

    }
}


function minifyJSON() {

    clearError();

    try {

        const data = getJSON();

        output.value = JSON.stringify(data);

    } catch (error) {

        showError("Invalid JSON: " + error.message);

    }
}


function clearAll() {

    input.value = "";
    output.value = "";

    fileInput.value = "";

    clearError();
}


async function copyResult() {

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
}


function downloadJSON() {

    if (!output.value) {

        showError("Nothing to download.");

        return;
    }

    const blob = new Blob(
        [output.value],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "formatted.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
}


function loadFile(file) {

    if (!file) {
        return;
    }

    if (!file.name.toLowerCase().endsWith(".json")) {

        showError("Please upload a .json file.");

        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {

        input.value = event.target.result;

        clearError();

        formatJSON();

    };

    reader.onerror = function() {

        showError("Unable to read the file.");

    };

    reader.readAsText(file);
}


formatButton.addEventListener("click", formatJSON);

minifyButton.addEventListener("click", minifyJSON);

clearButton.addEventListener("click", clearAll);

copyButton.addEventListener("click", copyResult);

downloadButton.addEventListener("click", downloadJSON);


fileInput.addEventListener("change", function() {

    loadFile(this.files[0]);

});


input.addEventListener("dragover", function(event) {

    event.preventDefault();

    input.classList.add("dragging");

});


input.addEventListener("dragleave", function() {

    input.classList.remove("dragging");

});


input.addEventListener("drop", function(event) {

    event.preventDefault();

    input.classList.remove("dragging");

    const file = event.dataTransfer.files[0];

    loadFile(file);

});


input.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key === "Enter") {

        formatJSON();

    }

});
