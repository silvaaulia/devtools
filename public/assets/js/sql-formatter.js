(function () {

    var input = document.getElementById("sqlInput");
    var output = document.getElementById("sqlOutput");
    var formatButton = document.getElementById("formatButton");
    var clearButton = document.getElementById("clearButton");
    var copyButton = document.getElementById("copyButton");
    var errorMessage = document.getElementById("errorMessage");

    if (!input) return;

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    function clearError() {
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
    }

    function formatSQL(sql) {
        sql = sql.trim();

        if (!sql) {
            throw new Error("Please enter SQL query.");
        }

        var result = sql.replace(/\s+/g, " ");

        var keywords = [
            "SELECT", "FROM", "WHERE", "GROUP BY", "ORDER BY",
            "HAVING", "LIMIT", "OFFSET", "UNION", "INNER JOIN",
            "LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "CROSS JOIN",
            "JOIN", "ON", "SET", "VALUES", "INSERT INTO",
            "UPDATE", "DELETE FROM", "AND", "OR", "IN", "NOT IN",
            "BETWEEN", "LIKE", "IS NULL", "IS NOT NULL"
        ];

        keywords.forEach(function(keyword) {
            var regex = new RegExp("\\s+" + keyword + "\\s+", "gi");
            result = result.replace(regex, "\n" + keyword + " ");
        });

        result = result.replace(/\nAND\s+/gi, "\n    AND ");
        result = result.replace(/\nOR\s+/gi, "\n    OR ");

        return result.trim();
    }

    formatButton.addEventListener("click", function() {
        clearError();
        try {
            output.value = formatSQL(input.value);
        } catch (error) {
            showError(error.message);
        }
    });

    clearButton.addEventListener("click", function() {
        input.value = "";
        output.value = "";
        clearError();
    });

    copyButton.addEventListener("click", async function() {
        if (!output.value) return;
        try {
            await navigator.clipboard.writeText(output.value);
            copyButton.textContent = "Copied!";
            setTimeout(function() {
                copyButton.textContent = "Copy";
            }, 1500);
        } catch (error) {
            showError("Unable to copy result.");
        }
    });

    input.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "Enter") {
            event.preventDefault();
            formatButton.click();
        }
    });

})();
