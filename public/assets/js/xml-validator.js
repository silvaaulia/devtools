const input = document.getElementById("xmlInput");
const validateButton = document.getElementById("validateButton");
const clearButton = document.getElementById("clearButton");
const resultMessage = document.getElementById("resultMessage");


validateButton.addEventListener("click", function() {

    const value = input.value.trim();

    resultMessage.className = "";

    if (!value) {

        resultMessage.textContent = "Please enter XML data.";
        resultMessage.className = "error-message";

        return;
    }

    const parser = new DOMParser();

    const xml = parser.parseFromString(
        value,
        "application/xml"
    );

    const parserError = xml.querySelector("parsererror");

    if (parserError) {

        resultMessage.textContent =
            "Invalid XML detected.";

        resultMessage.className =
            "error-message";

    } else {

        resultMessage.textContent =
            "Your XML is valid and well-formed.";

        resultMessage.className =
            "success-message";

    }

});


clearButton.addEventListener("click", function() {

    input.value = "";

    resultMessage.textContent = "";

    resultMessage.className = "";

});
