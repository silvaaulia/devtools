const timestampInput =
    document.getElementById("timestampInput");

const dateInput =
    document.getElementById("dateInput");

const timestampToDate =
    document.getElementById("timestampToDate");

const dateToTimestamp =
    document.getElementById("dateToTimestamp");

const nowButton =
    document.getElementById("nowButton");

const clearButton =
    document.getElementById("clearButton");

const copyButton =
    document.getElementById("copyButton");

const output =
    document.getElementById("output");

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


function formatDate(date) {

    return date.toLocaleString();

}


timestampToDate.addEventListener("click", function () {

    clearError();

    const value =
        timestampInput.value.trim();

    if (!value) {

        showError("Please enter a timestamp.");

        return;

    }

    const timestamp = Number(value);

    if (!Number.isFinite(timestamp)) {

        showError("Invalid timestamp.");

        return;

    }

    const milliseconds =
        timestamp.toString().length >= 13
            ? timestamp
            : timestamp * 1000;

    const date =
        new Date(milliseconds);

    if (Number.isNaN(date.getTime())) {

        showError("Invalid timestamp.");

        return;

    }

    output.value =
        "Local: " + formatDate(date) +
        "\n\n" +
        "UTC: " + date.toUTCString() +
        "\n\n" +
        "ISO: " + date.toISOString();

});


dateToTimestamp.addEventListener("click", function () {

    clearError();

    if (!dateInput.value) {

        showError("Please select a date and time.");

        return;

    }

    const date =
        new Date(dateInput.value);

    const seconds =
        Math.floor(date.getTime() / 1000);

    const milliseconds =
        date.getTime();

    output.value =
        "Unix Timestamp: " + seconds +
        "\n\n" +
        "Milliseconds: " + milliseconds;

});


nowButton.addEventListener("click", function () {

    clearError();

    const now = new Date();

    const timestamp =
        Math.floor(now.getTime() / 1000);

    timestampInput.value =
        timestamp;

    const local =
        new Date(
            now.getTime() -
            now.getTimezoneOffset() * 60000
        );

    dateInput.value =
        local.toISOString().slice(0, 16);

    output.value =
        "Current Date: " +
        now.toLocaleString() +
        "\n\n" +
        "Unix Timestamp: " +
        timestamp +
        "\n\n" +
        "Milliseconds: " +
        now.getTime();

});


clearButton.addEventListener("click", function () {

    timestampInput.value = "";
    dateInput.value = "";
    output.value = "";

    clearError();

});


copyButton.addEventListener("click", async function () {

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
