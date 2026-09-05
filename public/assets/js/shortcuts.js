document.addEventListener("keydown", function (event) {

    if (
        event.ctrlKey &&
        event.key === "Enter"
    ) {

        const buttons = [
            document.querySelector("#formatButton"),
            document.querySelector("#formatBtn"),
            document.querySelector("#validateButton"),
            document.querySelector("#validateBtn"),
            document.querySelector("#convertButton"),
            document.querySelector("#convertBtn"),
            document.querySelector("#minifyButton"),
            document.querySelector("#minifyBtn"),
            document.querySelector("#testButton"),
            document.querySelector("#testBtn"),
            document.querySelector("#encodeButton"),
            document.querySelector("#decodeButton"),
            document.querySelector("#escapeButton"),
            document.querySelector("#unescapeButton"),
            document.querySelector("#timestampToDate"),
            document.querySelector("#dateToTimestamp")
        ];

        const activeButton =
            buttons.find(function(button) {
                return button && button.offsetParent !== null;
            });

        if (activeButton) {
            event.preventDefault();
            activeButton.click();
        }
    }

});
