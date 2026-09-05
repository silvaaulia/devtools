const input = document.getElementById("jsonInput");

const errorDetails = document.getElementById("errorDetails");

const validateButton =
    document.getElementById("validateButton");

const clearButton =
    document.getElementById("clearButton");

const errorMessage =
    document.getElementById("errorMessage");

const successMessage =
    document.getElementById("successMessage");


function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";

    successMessage.style.display = "none";
}


function showSuccess() {

    successMessage.style.display = "block";

    errorMessage.style.display = "none";

    errorMessage.textContent = "";
}


function clearMessages() {

    errorMessage.textContent = "";

    errorMessage.style.display = "none";

    successMessage.style.display = "none";

    errorDetails.value = "";
}


function validateJSON() {

    const value = input.value.trim();

    if (!value) {

        showError("Please enter JSON data.");

        return;

    }

    try {

        JSON.parse(value);

        showSuccess();

        errorDetails.value = "Your JSON is valid and well-formed.";

    } catch (error) {

        showError("Invalid JSON detected.");

        errorDetails.value = error.message;

    }

}


validateButton.addEventListener(
    "click",
    validateJSON
);


clearButton.addEventListener(
    "click",
    function () {

        input.value = "";

        errorDetails.value = "";

        clearMessages();

    }
);


// Allow Ctrl+Enter to validate
input.addEventListener(
    "keydown",
    function (e) {

        if (e.ctrlKey && e.key === "Enter") {

            validateJSON();

        }

    }
);
