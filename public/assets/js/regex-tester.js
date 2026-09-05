const regexInput = document.getElementById("regexInput");
const flagsInput = document.getElementById("flagsInput");
const textInput = document.getElementById("textInput");

const testButton = document.getElementById("testButton");
const clearButton = document.getElementById("clearButton");

const errorMessage =
    document.getElementById("errorMessage");

const result =
    document.getElementById("result");


function showError(message) {

    errorMessage.textContent = message;
    errorMessage.style.display = "block";

}


function clearError() {

    errorMessage.textContent = "";
    errorMessage.style.display = "none";

}


testButton.addEventListener("click", function () {

    clearError();

    const pattern = regexInput.value;

    const flags = flagsInput.value;

    const text = textInput.value;

    if (!pattern) {

        showError("Please enter a regular expression.");

        return;

    }

    try {

        const regex = new RegExp(pattern, flags);

        const matches = [];

        if (flags.includes("g")) {

            let match;

            while ((match = regex.exec(text)) !== null) {

                matches.push({
                    value: match[0],
                    index: match.index
                });

                if (match[0] === "") {
                    regex.lastIndex++;
                }

            }

        } else {

            const match = regex.exec(text);

            if (match) {

                matches.push({
                    value: match[0],
                    index: match.index
                });

            }

        }

        if (matches.length === 0) {

            result.innerHTML =
                "<p>No match found.</p>";

            return;

        }

        let html =
            `<p><strong>${matches.length}</strong> match(es) found.</p>`;

        html += "<ul>";

        matches.forEach((match, index) => {

            html += `
                <li>
                    <strong>Match ${index + 1}:</strong>
                    ${escapeHTML(match.value)}
                    <small>
                        (position ${match.index})
                    </small>
                </li>
            `;

        });

        html += "</ul>";

        result.innerHTML = html;

    } catch (error) {

        showError(
            "Invalid regular expression: " +
            error.message
        );

    }

});


clearButton.addEventListener("click", function () {

    regexInput.value = "";
    flagsInput.value = "g";
    textInput.value = "";

    result.innerHTML =
        "<p>No test performed.</p>";

    clearError();

});


function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
