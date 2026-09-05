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


function escapeXML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

}


function objectToXML(object, rootName = "root") {

    let xml = `<${rootName}>`;

    for (const key in object) {

        const value = object[key];

        if (Array.isArray(value)) {

            value.forEach(item => {

                if (typeof item === "object") {

                    xml += objectToXML(item, key);

                } else {

                    xml += `<${key}>${escapeXML(item)}</${key}>`;

                }

            });

        } else if (value !== null && typeof value === "object") {

            xml += objectToXML(value, key);

        } else {

            xml += `<${key}>${escapeXML(value ?? "")}</${key}>`;

        }

    }

    xml += `</${rootName}>`;

    return xml;

}


function formatXML(xml) {

    return xml
        .replace(/(>)(<)(\/*)/g, "$1\n$2$3")
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean)
        .join("\n");

}


convertButton.addEventListener("click", function() {

    clearError();

    try {

        const value = input.value.trim();

        if (!value) {
            throw new Error("Please enter JSON data.");
        }

        const data = JSON.parse(value);

        output.value = formatXML(
            objectToXML(data)
        );

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

    await navigator.clipboard.writeText(
        output.value
    );

    copyButton.textContent = "Copied!";

    setTimeout(() => {

        copyButton.textContent = "Copy";

    }, 1500);

});
