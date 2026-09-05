const input = document.getElementById("jsInput");
const output = document.getElementById("jsOutput");

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


function minifyJavaScript() {

    clearError();

    const value = input.value.trim();

    if (!value) {
        showError("Please enter JavaScript code.");
        return;
    }

    try {

        let code = value;

        code = code.replace(
            /\/\*[\s\S]*?\*\//g,
            ""
        );

        code = code.replace(
            /(^|[^:])\/\/.*$/gm,
            "$1"
        );

        code = code
            .replace(/\s+/g, " ")
            .replace(/\s*([{}()[\];,:])\s*/g, "$1")
            .trim();

        output.value = code;

    } catch {

        showError("Unable to minify JavaScript.");

    }
}


minifyButton.addEventListener(
    "click",
    minifyJavaScript
);


clearButton.addEventListener(
    "click",
    function() {

        input.value = "";
        output.value = "";

        clearError();

    }
);


copyButton.addEventListener(
    "click",
    async function() {

        if (!output.value) {
            showError("Nothing to copy.");
            return;
        }

        try {

            await navigator.clipboard.writeText(
                output.value
            );

            copyButton.textContent = "Copied!";

            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1500);

        } catch {

            showError("Unable to copy result.");

        }

    }
);
