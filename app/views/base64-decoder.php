<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Base64 Decoder</title><link rel="stylesheet" href="/public/assets/css/style.css"></head><body>
<header class="header"><a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a><nav class="nav"><a href="/">All</a><a href="/base64-decoder" class="active">Base64</a></nav></header>
<main class="main"><h1>Base64 Decoder</h1>
<div class="editor"><div class="panel"><div class="panel-header">Input <button id="cl" class="btn-icon">×</button></div><textarea id="i" placeholder="SGVsbG8gV29ybGQ="></textarea></div>
<div class="panel"><div class="panel-header">Output <button id="cp" class="btn-icon">⎘</button></div><pre id="o"></pre></div></div>
<div class="actions"><button id="dec" class="btn-primary">Decode</button></div>
<div id="msg"></div></main><footer>© 2024</footer><script>
const I=document.getElementById('i'),O=document.getElementById('o'),M=document.getElementById('msg');
function S(t,x='success'){M.textContent=t;M.className=x;setTimeout(()=>M.textContent='',3e3)}
document.getElementById('dec').onclick=()=>{try{O.textContent=decodeURIComponent(escape(atob(I.value));S('Decoded!')}catch{S('Invalid Base64','error')}};
document.getElementById('cl').onclick=()=>{I.value='';O.textContent=''};
document.getElementById('cp').onclick=async()=>{if(O.textContent)await navigator.clipboard.writeText(O.textContent),S('Copied!')};
</script></body></html>
