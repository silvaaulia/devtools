<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Base64 Encoder</title><link rel="stylesheet" href="/public/assets/css/style.css"></head>
<body>
<header class="header">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<nav class="nav">
<a href="/">All</a>
<a href="/base64-encoder" class="active">Base64</a>
<a href="/url-encoder">URL</a>
</nav>
</header>
<main class="main">
<h1>Base64 Encoder</h1>
<div class="editor">
<div class="panel"><div class="panel-header">Input <button id="cl" class="btn-icon">×</button></div><textarea id="input" placeholder="Enter text..."></textarea></div>
<div class="panel"><div class="panel-header">Output <button id="cp" class="btn-icon">⎘</button></div><pre id="out"></pre></div></div>
<div class="actions"><button id="enc" class="btn-primary">Encode</button><button id="dec" class="btn-secondary">Decode</button></div>
<div id="msg"></div></main><footer>© 2024</footer><script>
const i=document.getElementById('input'),o=document.getElementById('out'),m=document.getElementById('msg');
function show(t,s='success'){m.textContent=t;m.className=s;setTimeout(()=>m.textContent='',3e3)}
document.getElementById('enc').onclick=()=>{try{o.textContent=btoa(unescape(encodeURIComponent(i.value))||'');show('Encoded')}catch{show('Error','error')};
document.getElementById('dec').onclick=()=>{try{o.textContent=decodeURIComponent(escape(atob(i.value))||'');show('Decoded')}catch{show('Invalid Base64','error')};
document.getElementById('cl').onclick=()=>{i.value='';o.textContent=''};
document.getElementById('cp').onclick=async()=>{if(o.textContent)await navigator.clipboard.writeText(o.textContent),show('Copied')};
</script></body></html>
