const input = document.getElementById("jsonInput");

const output = document.getElementById("jsonOutput");

const minifyButton =
    document.getElementById("minifyButton");

const clearButton =
    document.getElementById("clearButton");

const copyButton =
    document.getElementById("copyButton");

const errorMessage =
    document.getElementById("errorMessage");


function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";
}


function clearError() {

    errorMessage.textContent = "";

    errorMessage.style.display = "none";
}


function minifyJSON() {

    clearError();

    const value = input.value.trim();

    if (!value) {

        showError("Please enter JSON data.");

        return;

    }

    try {

        const data = JSON.parse(value);

        output.value = JSON.stringify(data);

    } catch (error) {

        showError(
            "Invalid JSON: " + error.message
        );

    }

}


minifyButton.addEventListener(
    "click",
    minifyJSON
);


clearButton.addEventListener(
    "click",
    function () {

        input.value = "";

        output.value = "";

        clearError();

    }
);


copyButton.addEventListener(
    "click",
    async function () {

        if (!output.value) {

            return;

        }

        try {

            await navigator.clipboard.writeText(
                output.value
            );

            copyButton.textContent = "Copied!";

            setTimeout(
                function () {

                    copyButton.textContent = "Copy";

                },
                1500
            );

        } catch (error) {

            showError("Unable to copy result.");

        }

    }
);


// Allow Ctrl+Enter to minify
input.addEventListener(
    "keydown",
    function (e) {

        if (e.ctrlKey && e.key === "Enter") {

            minifyJSON();

        }

    }
);
