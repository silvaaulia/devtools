const input = document.getElementById("input");
const output = document.getElementById("output");

const convertButton =
    document.getElementById("convertButton");

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


function xmlToObject(element) {

    const obj = {};

    if (element.children.length === 0) {

        return element.textContent.trim();

    }

    Array.from(element.children).forEach(child => {

        const value = xmlToObject(child);

        if (obj[child.tagName]) {

            if (!Array.isArray(obj[child.tagName])) {

                obj[child.tagName] = [
                    obj[child.tagName]
                ];

            }

            obj[child.tagName].push(value);

        } else {

            obj[child.tagName] = value;

        }

    });

    return obj;

}


convertButton.addEventListener("click", function() {

    clearError();

    try {

        const value = input.value.trim();

        if (!value) {
            throw new Error("Please enter XML data.");
        }

        const parser = new DOMParser();

        const xml = parser.parseFromString(
            value,
            "application/xml"
        );

        if (xml.querySelector("parsererror")) {

            throw new Error(
                "Invalid XML structure."
            );

        }

        const root = xml.documentElement;

        const result = {};

        result[root.tagName] =
            xmlToObject(root);

        output.value =
            JSON.stringify(
                result,
                null,
                2
            );

    } catch (error) {

        showError(
            "Conversion failed: " +
            error.message
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

    await navigator.clipboard.writeText(
        output.value
    );

    copyButton.textContent = "Copied!";

    setTimeout(() => {

        copyButton.textContent = "Copy";

    }, 1500);

});
