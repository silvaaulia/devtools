<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width">
<title>Regex Tester</title><link rel="stylesheet" href="/public/assets/css/style.css"></head>
<body>
<header class="header">
<a href="/" class="logo"><span class="logo-icon">&lt;/&gt;</span>DevTools</a>
<nav class="nav">
<a href="/">All</a>
<a href="/regex-tester" class="active">Regex</a>
<a href="/json-formatter">JSON</a>
</nav>
</header>
<main class="main">
<h1>Regex Tester</h1>
<div class="editor" style="grid-template-columns:1fr">
<div class="panel">
<div class="panel-header">Pattern <span id="matchCount" style="margin-left:auto;font-size:11px;color:#6366f1;font-weight:400"></span></div>
<textarea id="pattern" style="min-height:60px" placeholder="^\w+@\w+\.\w+"></textarea>
<div style="padding:8px 12px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:12px;display:flex;gap:8px">
<label><input type="checkbox" id="fg" checked> g</label>
<label><input type="checkbox" id="fi"> i</label>
<label><input type="checkbox" id="fm"> m</label>
</div>
<div class="panel-header">Test String <button id="cl" class="btn-icon">×</button></div>
<textarea id="test" placeholder="test@example.com"></textarea>
</div>
<div class="panel">
<div class="panel-header">Matches <button id="cp" class="btn-icon">⎘</button></div>
<pre id="out"></pre>
</div></div>
<div id="msg"></div>
<footer>© 2024 DevTools</footer>
<script>
const p=document.getElementById('pattern'),t=document.getElementById('test'),o=document.getElementById('out'),c=document.getElementById('matchCount'),m=document.getElementById('msg');
function show(s,x='success'){m.textContent=s;m.className=x;if(s)setTimeout(()=>m.textContent='',3e3)}
function test(){
const g=document.getElementById('fg').checked?'g':''+(document.getElementById('fi').checked?'i':'')+(document.getElementById('fm').checked?'m':'');
try{
const r=new RegExp(p.value,g),matches=[];
let x;if(g.includes('g')){while(x=r.exec(t.value))matches.push(x[0]+' @'+x.index);}else if(x=r.exec(t.value))matches.push(x[0]+' @'+x.index);
o.textContent=matches.length?matches.join('\n'):'No matches';c.textContent=matches.length+' matches';show(matches.length?matches.length+' match'+(matches.length>1?'es':''):'No matches','success');}catch(e){o.textContent='Error: '+e.message;c.textContent='';show(e.message,'error');}}
p.addEventListener('input',test);t.addEventListener('input',test);
document.getElementById('fg').addEventListener('change',test);
document.getElementById('fi').addEventListener('change',test);
document.getElementById('fm').addEventListener('change',test);
document.getElementById('cl').addEventListener('click',()=>{p.value='';t.value='';o.textContent='';c.textContent=''});
document.getElementById('cp').addEventListener('click',async()=>{if(o.textContent)await navigator.clipboard.writeText(o.textContent),show('Copied!')});
</script></body></html>
