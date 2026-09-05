<?php

// Auto-detect base path (works for both root and subdirectory deployment)
$scriptPath = dirname($_SERVER['SCRIPT_NAME']);
$basePath = rtrim(str_replace('\\', '/', $scriptPath), '/');
$basePath = ($basePath === '') ? '/' : $basePath;

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove base path from request URI to get clean route path
if ($basePath !== '/' && strpos($requestUri, $basePath) === 0) {
    $requestUri = substr($requestUri, strlen($basePath));
}

$path = trim($requestUri, '/');

$routes = [

    '' => 'home.php',

    'json-formatter' => 'json-formatter.php',
    'json-validator' => 'json-validator.php',
    'json-minifier' => 'json-minifier.php',

    'xml-formatter' => 'xml-formatter.php',
    'xml-validator' => 'xml-validator.php',

    'html-formatter' => 'html-formatter.php',

    'css-formatter' => 'css-formatter.php',
    'css-minifier' => 'css-minifier.php',

    'javascript-minifier' => 'javascript-minifier.php',

    'json-to-xml' => 'json-to-xml.php',
    'xml-to-json' => 'xml-to-json.php',

    'csv-to-json' => 'csv-to-json.php',
    'csv-to-xml' => 'csv-to-xml.php',

    'yaml-to-json' => 'yaml-to-json.php',
    'json-to-yaml' => 'json-to-yaml.php',

    'base64-encoder' => 'base64-encoder.php',
    'base64-decoder' => 'base64-decoder.php',

    'url-encoder' => 'url-encoder.php',
    'url-decoder' => 'url-decoder.php',

    'html-escape' => 'html-escape.php',
    'xml-escape' => 'xml-escape.php',

    'regex-tester' => 'regex-tester.php',
    'timestamp-converter' => 'timestamp-converter.php',

    'sql-formatter' => 'sql-formatter.php',

    'about' => 'pages/about.php',
    'privacy-policy' => 'pages/privacy.php',
    'terms' => 'pages/terms.php',
    'contact' => 'pages/contact.php',
];

if (isset($routes[$path])) {

    require __DIR__ . '/app/views/' . $routes[$path];
    exit;

}

http_response_code(404);

require __DIR__ . '/app/views/404.php';
