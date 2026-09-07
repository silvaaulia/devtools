<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>XML Escape</title><link rel="stylesheet" href="/public/assets/css/style.css"></head><body>
<header class="header"><a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a><nav class="nav"><a href="/">All</a><a href="/xml-escape" class="active">XML</a></nav></header>
<main class="main"><h1>XML Escape</h1>
<div class="editor"><div class="panel"><div class="panel-header">Input <button id="cl" class="btn-icon">×</button></div><textarea id="i" placeholder="<root>Hello & World</root>"></textarea></div>
<div class="panel"><div class="panel-header">Output <button id="cp" class="btn-icon">⎘</button></div><pre id="o"></pre></div></div>
<div class="actions"><button id="esc" class="btn-primary">Escape</button><button id="unesc" class="btn-secondary">Unescape</button></div>
<div id="msg"></div></main><footer>© 2024</footer><script>
const I=document.getElementById('i'),O=document.getElementById('o'),M=document.getElementById('msg');
function S(t,x='success'){M.textContent=t;M.className=x;setTimeout(()=>M.textContent='',3e3)}
const E=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const U=s=>s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
document.getElementById('esc').onclick=()=>{O.textContent=E(I.value);S('Escaped!')};
document.getElementById('unesc').onclick=()=>{O.textContent=U(I.value);S('Unescaped!')};
document.getElementById('cl').onclick=()=>{I.value='';O.textContent=''};
document.getElementById('cp').onclick=async()=>{if(O.textContent)await navigator.clipboard.writeText(O.textContent),S('Copied!')};
</script></body></html>
