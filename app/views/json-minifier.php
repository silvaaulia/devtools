<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>JSON Minifier</title><link rel="stylesheet" href="/public/assets/css/style.css"></head><body>
<header class="header"><a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</a>DevTools</a><nav class="nav"><a href="/">All</a><a href="/json-minifier" class="active">JSON</a></nav></header>
<main class="main"><h1>JSON Minifier</h1>
<div class="editor"><div class="panel"><div class="panel-header">Input <button id="cl" class="btn-icon">×</button></div><textarea id="i" placeholder='{"name":"John","age":30}'></textarea></div>
<div class="panel"><div class="panel-header">Output <button id="cp" class="btn-icon">⎘</button></div><pre id="o"></pre></div></div>
<div class="actions"><button id="min" class="btn-primary">Minify</button><button id="fmt" class="btn-secondary">Format</button></div>
<div id="msg"></div></main><footer>© 2024</footer><script>
const I=document.getElementById('i'),O=document.getElementById('o'),M=document.getElementById('msg');
function S(t,x='success'){M.textContent=t;M.className=x;setTimeout(()=>M.textContent='',3e3)}
document.getElementById('min').onclick=()=>{try{O.textContent=JSON.stringify(JSON.parse(I.value));S('Minified!')}catch(e){S(e.message,'error')}};
document.getElementById('fmt').onclick=()=>{try{O.textContent=JSON.stringify(JSON.parse(I.value),null,2);S('Formatted!')}catch(e){S(e.message,'error')}};
document.getElementById('cl').onclick=()=>{I.value='';O.textContent=''};
document.getElementById('cp').onclick=async()=>{if(O.textContent)await navigator.clipboard.writeText(O.textContent),S('Copied!')};
</script></body></html>
