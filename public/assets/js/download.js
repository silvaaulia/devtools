(function () {

    // Map tool URLs to their output element IDs and file extensions
    var TOOL_CONFIG = {
        "json-formatter":      { output: "jsonOutput",     ext: "json" },
        "json-minifier":       { output: "jsonOutput",     ext: "json" },
        "json-validator":      { output: "errorDetails",   ext: "json" },
        "xml-formatter":       { output: "xmlOutput",      ext: "xml" },
        "xml-validator":       { output: "xmlOutput",      ext: "xml" },
        "html-formatter":      { output: "htmlOutput",    ext: "html" },
        "css-formatter":       { output: "cssOutput",      ext: "css" },
        "css-minifier":        { output: "cssOutput",      ext: "css" },
        "javascript-minifier":  { output: "jsOutput",      ext: "js" },
        "sql-formatter":       { output: "sqlOutput",     ext: "sql" },
        "json-to-xml":         { output: "output",        ext: "xml" },
        "xml-to-json":         { output: "output",        ext: "json" },
        "csv-to-json":         { output: "output",        ext: "json" },
        "csv-to-xml":          { output: "output",        ext: "xml" },
        "yaml-to-json":        { output: "output",        ext: "json" },
        "json-to-yaml":        { output: "output",        ext: "yaml" },
        "base64-encoder":      { output: "output",        ext: "txt" },
        "base64-decoder":      { output: "output",        ext: "txt" },
        "url-encoder":         { output: "output",        ext: "txt" },
        "url-decoder":         { output: "output",        ext: "txt" },
        "html-escape":         { output: "output",        ext: "html" },
        "xml-escape":          { output: "output",        ext: "xml" },
        "regex-tester":        { output: "result",        ext: "txt" },
        "timestamp-converter":  { output: "output",        ext: "txt" }
    };

    function getToolKey() {
        var path = window.location.pathname.replace(/^\/|\/$/g, "");
        return path.split("/").pop() || "";
    }

    function getOutputElement() {
        var key = getToolKey();
        var config = TOOL_CONFIG[key];

        // 1. Try known output ID from config
        if (config && config.output) {
            var el = document.getElementById(config.output);
            if (el && el.value !== undefined) {
                return el;
            }
        }

        // 2. Try #output (common across many tools)
        var output = document.getElementById("output");
        if (output && output.value !== undefined && output.value.trim()) {
            return output;
        }

        // 3. Try any readonly textarea with content
        var readOnly = document.querySelector("textarea[readonly]");
        if (readOnly && readOnly.value.trim()) {
            return readOnly;
        }

        // 4. Generic result / matches div (regex tester)
        var matches = document.getElementById("matches");
        if (matches && matches.textContent.trim()) {
            return { isDiv: true, value: matches.textContent };
        }
        var result = document.getElementById("result");
        if (result && result.textContent.trim()) {
            return { isDiv: true, value: result.textContent };
        }

        // 5. Any textarea with content (last resort)
        var all = document.querySelectorAll("textarea");
        for (var i = 0; i < all.length; i++) {
            if (all[i].value.trim()) {
                return all[i];
            }
        }

        return null;
    }

    function getFileName(config) {
        var key = getToolKey();
        var toolConfig = TOOL_CONFIG[key];

        // Determine prefix based on tool type
        var action = "";
        if (key.indexOf("formatter") !== -1) {
            action = "formatted";
        } else if (key.indexOf("minifier") !== -1) {
            action = "minified";
        } else if (key.indexOf("validator") !== -1) {
            action = "validated";
        } else if (key.indexOf("to-") !== -1) {
            action = "converted";
        } else if (key.indexOf("encoder") !== -1) {
            action = "encoded";
        } else if (key.indexOf("decoder") !== -1) {
            action = "decoded";
        } else if (key.indexOf("escape") !== -1) {
            action = "escaped";
        } else if (key.indexOf("regex") !== -1) {
            action = "regex-matches";
        } else if (key.indexOf("timestamp") !== -1) {
            action = "timestamp-result";
        } else {
            action = "output";
        }

        var ext = (toolConfig && toolConfig.ext) ? toolConfig.ext : "txt";
        return action + "-" + key + "." + ext;
    }

    function downloadContent() {
        var editor = getOutputElement();

        if (!editor) {
            alert("No content to download.");
            return;
        }

        var content = (editor.isDiv) ? editor.value : editor.value;

        if (!content || !content.trim()) {
            alert("No content to download.");
            return;
        }

        var key = getToolKey();
        var config = TOOL_CONFIG[key];
        var fileName = getFileName(config);

        // For regex tester (div-based output)
        if (editor.isDiv) {
            content = "Regex Matches:\n\n" + content;
        }

        var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);

        var link = document.createElement("a");
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    }

    function createDownloadButton() {
        // Don't add if already exists
        if (document.getElementById("downloadBtn") ||
            document.querySelector(".download-btn")) {
            return;
        }

        var actions = document.querySelector(".tool-actions");
        if (!actions) return;

        var btn = document.createElement("button");
        btn.type = "button";
        btn.id = "downloadBtn";
        btn.className = "tool-btn tool-btn-secondary";
        btn.textContent = "Download";

        btn.addEventListener("click", downloadContent);
        actions.appendChild(btn);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createDownloadButton);
    } else {
        createDownloadButton();
    }

})();
