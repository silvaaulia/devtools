<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>JSON Validator</title><link rel="stylesheet" href="/public/assets/css/style.css"></head>
<body>
<header class="header"><a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a><nav class="nav"><a href="/">All</a><a href="/json-validator" class="active">JSON</a></nav></header>
<main class="main">
<h1>JSON Validator</h1>
<div class="panel" style="flex:1">
<div class="panel-header">JSON Input <button id="cl" class="btn-icon">×</button></div>
<textarea id="i" placeholder='{"name":"John"}' style="min-height:300px"></textarea>
</div>
<div id="msg" style="margin-top:12px;padding:10px 14px;border-radius:8px;font-size:13px;font-weight:600"></div>
</main>
<footer>© 2024</footer>
<script>
const I=document.getElementById('i'),M=document.getElementById('msg');
I.addEventListener('input',()=>{try{JSON.parse(I.value);M.textContent='✓ Valid JSON';M.style.background='#d1fae5';M.style.color='#059669'}catch(e){M.textContent='✗ '+e.message;M.style.background='#fee2e2';M.style.color='#dc2626'}});
document.getElementById('cl').onclick=()=>{I.value='';M.textContent=''};
</script>
</body></html>
