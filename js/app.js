/* NanoAxon-X Study Hub: vanilla JS, hash routing, localStorage progress. */
(() => {
const $ = (s, el=document) => el.querySelector(s);
const main = $("#main");
const MODS = window.MODULES, QS = window.QUESTIONS, DG = window.DIAGRAMS || {};
const KEY = "nanoaxon-study-v1";

// ---------- storage ----------
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
let S = Object.assign({ done:{}, cardSeen:{}, quiz:[], jury:{}, theme:"" }, load());
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

// ---------- theme ----------
const applyTheme = () => {
  const t = S.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = t;
};
$("#themeBtn").onclick = () => { S.theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; save(); applyTheme(); };
applyTheme();

// ---------- helpers ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const pct = () => Math.round(100 * Object.keys(S.done).filter(k=>S.done[k]).length / MODS.length);
const weakSet = () => Object.entries(S.jury).filter(([,v]) => v.last === "weak").map(([k]) => +k);

// ---------- nav ----------
const renderNav = () => {
  $("#modNav").innerHTML = MODS.map((m,i) =>
    `<a class="navlink ${S.done[m.id]?"done":""}" data-id="${m.id}" href="#/m/${m.id}"><span class="dot"></span><span class="n">${String(i+1).padStart(2,"0")}</span>${esc(m.title)}</a>`).join("");
  $("#pct").textContent = pct() + "%";
  $("#barFill").style.width = pct() + "%";
  const h = location.hash || "#/";
  document.querySelectorAll(".navlink").forEach(a => a.classList.toggle("active", a.getAttribute("href") === h));
};
$("#menuBtn").onclick = () => $("#side").classList.toggle("open");
$("#resetBtn").onclick = () => { if (confirm("Reset all progress, quiz scores and jury ratings on this device?")) { S = { done:{}, cardSeen:{}, quiz:[], jury:{}, theme:S.theme }; save(); route(); } };

// ---------- views ----------
const dashboard = () => {
  const attempts = S.quiz.length, best = attempts ? Math.max(...S.quiz.map(q=>q.score)) : 0;
  const weak = weakSet();
  const byCat = {}; QS.forEach(q => byCat[q.cat] = (byCat[q.cat]||0)+1);
  return `
  <span class="tag">Team NANOREGEN-X · INO 2026 Taipei</span>
  <h1>Know the project cold.</h1>
  <p class="lede">Everything a judge could ask about NanoAxon-X: nerve biology, materials, fabrication, safety, regulation, the ML tool, the demonstrator and the business case. Read the modules, drill the question bank, run mock juries with a timer.</p>
  <div class="stats">
    <div class="stat"><b>${pct()}%</b><span>modules marked done</span></div>
    <div class="stat"><b>${QS.length}</b><span>judge questions</span></div>
    <div class="stat"><b>${best}%</b><span>best quiz score (${attempts} attempt${attempts===1?"":"s"})</span></div>
    <div class="stat"><b>${weak.length}</b><span>questions flagged weak in mock jury</span></div>
  </div>
  <div class="row">
    <a class="btn" href="#/jury">Start mock jury</a>
    <a class="btn sec" href="#/quiz">Take a quiz</a>
    <a class="btn sec" href="#/cards">Flashcards</a>
    ${weak.length ? `<a class="btn sec" href="#/jury?weak=1">Drill ${weak.length} weak questions</a>` : ""}
  </div>
  <div class="callout warn"><h3>Before the competition, fill these gaps in the content</h3>
  <ul>
    <li>Peptide mechanism class and receptor (Materials module, Q bank "What does your peptide do"). Sequence stays confidential.</li>
    <li>Exact IMARC market figure, year and CAGR used in the pitch script (Business module).</li>
    <li>Investment ask and unit price range (Business Q bank).</li>
    <li>Latest conductivity, alignment and cell numbers from the results document, to replace "planned".</li>
  </ul></div>
  <h2>Modules</h2>
  <div class="grid">${MODS.map((m,i)=>`<a class="card" href="#/m/${m.id}"><span class="tag">${esc(m.tag)}</span><h3>${i+1}. ${esc(m.title)}</h3><p>${esc(m.summary)}</p><span class="meta"><span>${m.cards.length} cards · ${QS.filter(q=>catForModule(m.id).includes(q.cat)).length} judge Qs</span><span>${S.done[m.id]?"✓ done":""}</span></span></a>`).join("")}</div>
  <h2>Question bank by category</h2>
  <div class="numbers">${Object.entries(byCat).map(([c,n])=>`<a class="num" href="#/bank?cat=${encodeURIComponent(c)}"><b>${n}</b><span>${esc(c)}</span></a>`).join("")}</div>`;
};

const catMap = { overview:["Concept","Team"], anatomy:["Medical"], injury:["Medical"], clinical:["Medical"], design:["Materials","Fabrication"], materials:["Materials"], fabrication:["Fabrication"], characterisation:["Fabrication"], cells:["Cells"], conductivity:["Conductivity"], toxicity:["Safety"], regulatory:["Regulatory"], ml:["ML"], demonstrator:["Prototype"], business:["Business"], pitch:["Team","Concept"], glossary:[] };
function catForModule(id){ return catMap[id] || []; }

const moduleView = id => {
  const i = MODS.findIndex(m => m.id === id); if (i < 0) return `<h1>Not found</h1>`;
  const m = MODS[i], prev = MODS[i-1], next = MODS[i+1];
  const d = DG[m.id];
  const qs = QS.filter(q => catForModule(m.id).includes(q.cat));
  return `
  <span class="tag">${esc(m.tag)} · module ${i+1} of ${MODS.length}</span>
  <h1>${esc(m.title)}</h1>
  <p class="lede">${esc(m.summary)}</p>
  ${m.keyNumbers.length ? `<div class="numbers">${m.keyNumbers.map(([n,l])=>`<div class="num"><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>` : ""}
  ${d ? `<figure class="fig">${d.svg}<figcaption>${esc(d.caption)}</figcaption></figure>` : ""}
  ${m.sections.map(s => `<h2>${esc(s.heading)}</h2>${s.html}`).join("")}
  ${m.traps.length ? `<div class="callout bad"><h3>Traps (what loses marks)</h3><ul>${m.traps.map(t=>`<li>${esc(t)}</li>`).join("")}</ul></div>` : ""}
  ${qs.length ? `<h2>Judge questions for this module</h2><div class="bank">${qs.map(q=>qDetails(q)).join("")}</div>` : ""}
  ${m.cards.length ? `<h2>Flashcards</h2><p class="lede">Click a card to flip. <a href="#/cards?m=${m.id}">Open in flashcard mode</a>.</p>${m.cards.map(([q,a])=>flashHTML(q,a)).join("")}` : ""}
  <div class="mark">
    <button class="btn ${S.done[m.id]?"sec":""}" id="doneBtn">${S.done[m.id] ? "✓ Marked done (click to undo)" : "Mark module as done"}</button>
    <a class="btn sec" href="#/quiz?m=${m.id}">Quiz me on this</a>
  </div>
  <div class="row" style="justify-content:space-between;margin-top:30px">
    ${prev ? `<a href="#/m/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
    ${next ? `<a href="#/m/${next.id}">${esc(next.title)} →</a>` : "<span></span>"}
  </div>`;
};
const qDetails = q => `<details${weakSet().includes(QS.indexOf(q))?' class="weak"':''}><summary><span class="chip l${q.level}">L${q.level}</span><span class="chip">${esc(q.owner)}</span> ${esc(q.q)}</summary><div class="a">${esc(q.a)}</div></details>`;
const flashHTML = (q,a) => `<div class="flash" onclick="this.classList.toggle('flipped')"><div class="inner"><div class="face"><small>question</small>${esc(q)}</div><div class="face back"><small>answer</small>${esc(a)}</div></div></div>`;

const bankView = params => {
  const cat = params.get("cat") || "";
  const owner = params.get("owner") || "";
  const cats = [...new Set(QS.map(q=>q.cat))], owners = [...new Set(QS.map(q=>q.owner))];
  const list = QS.filter(q => (!cat || q.cat===cat) && (!owner || q.owner===owner));
  return `<h1>Judge question bank</h1><p class="lede">${QS.length} questions with model answers in ARC form (Answer, Reason, Caveat). Filter by category or by who should answer first. Entries in red were flagged weak during mock jury.</p>
  <div class="row">
    <select id="fCat"><option value="">All categories</option>${cats.map(c=>`<option ${c===cat?"selected":""}>${esc(c)}</option>`).join("")}</select>
    <select id="fOwner"><option value="">Anyone</option>${owners.map(o=>`<option ${o===owner?"selected":""}>${esc(o)}</option>`).join("")}</select>
    <span class="chip">${list.length} shown</span>
    <button class="btn small sec" id="printBtn">Print / save PDF</button>
  </div>
  <div class="bank">${list.map(qDetails).join("")}</div>`;
};

// ---------- flashcards ----------
let cardState = null;
const cardsView = params => {
  const mid = params.get("m") || "";
  const pool = (mid ? MODS.filter(m=>m.id===mid) : MODS).flatMap(m => m.cards.map(([q,a]) => ({q,a,mod:m.title})));
  if (!cardState || cardState.mid !== mid) cardState = { mid, order: shuffle(pool.map((_,i)=>i)), i: 0 };
  const c = pool[cardState.order[cardState.i]];
  return `<h1>Flashcards</h1>
  <div class="row"><select id="cardMod"><option value="">All modules (${MODS.reduce((n,m)=>n+m.cards.length,0)} cards)</option>${MODS.map(m=>`<option value="${m.id}" ${m.id===mid?"selected":""}>${esc(m.title)} (${m.cards.length})</option>`).join("")}</select>
  <span class="chip">${cardState.i+1} / ${pool.length}</span></div>
  <p class="lede">${esc(c.mod)}</p>
  <div class="flash" id="flash"><div class="inner"><div class="face"><small>question</small>${esc(c.q)}</div><div class="face back"><small>answer</small>${esc(c.a)}</div></div></div>
  <div class="row"><button class="btn sec" id="cPrev">← Prev</button><button class="btn" id="cFlip">Flip (space)</button><button class="btn sec" id="cNext">Next →</button><button class="btn sec" id="cShuffle">Shuffle</button></div>`;
};

// ---------- quiz ----------
let quizState = null;
const buildQuiz = (mid, n) => {
  // MCQ: stem from question bank or flashcards; distractors = answers of other items in same category.
  let items = QS.map((q,i)=>({stem:q.q, right:q.a, cat:q.cat, i}));
  if (mid) { const cats = catForModule(mid); items = items.filter(x=>cats.includes(x.cat)); const m = MODS.find(x=>x.id===mid); m.cards.forEach(([q,a])=>items.push({stem:q,right:a,cat:"card"})); }
  items = shuffle(items).slice(0, n);
  return items.map(it => {
    const others = shuffle(QS.filter(q=>q.a!==it.right && (q.cat===it.cat || Math.random()<0.3)).map(q=>q.a)).slice(0,3);
    while (others.length<3) others.push(shuffle(QS.map(q=>q.a).filter(a=>a!==it.right&&!others.includes(a)))[0]);
    return { stem: it.stem, opts: shuffle([it.right, ...others]), right: it.right, picked:null };
  });
};
const quizView = params => {
  const mid = params.get("m") || "";
  if (!quizState) return `<h1>Quiz</h1><p class="lede">Multiple choice built from the question bank. Pick the model answer that fits the question. Distractors are real answers to other questions, so read carefully.</p>
    <div class="row"><select id="qMod"><option value="">All topics</option>${MODS.filter(m=>catForModule(m.id).length).map(m=>`<option value="${m.id}" ${m.id===mid?"selected":""}>${esc(m.title)}</option>`).join("")}</select>
    <select id="qN"><option>5</option><option selected>10</option><option>15</option><option>20</option></select><button class="btn" id="qStart">Start</button></div>
    ${S.quiz.length ? `<h2>History</h2><table><tr><th>When</th><th>Topic</th><th>Score</th></tr>${S.quiz.slice(-10).reverse().map(r=>`<tr><td>${esc(r.when)}</td><td>${esc(r.topic)}</td><td>${r.score}%</td></tr>`).join("")}</table>` : ""}`;
  const q = quizState.items[quizState.i];
  if (!q) {
    const score = Math.round(100*quizState.items.filter(x=>x.picked===x.right).length/quizState.items.length);
    if (!quizState.saved) { S.quiz.push({ when:new Date().toLocaleString(), topic: quizState.topic, score }); save(); quizState.saved = true; }
    return `<h1>Score: ${score}%</h1><p class="lede">${quizState.items.filter(x=>x.picked===x.right).length} of ${quizState.items.length} correct.</p>
    <h2>Review</h2>${quizState.items.map(x=>`<div class="answer"><strong>${esc(x.stem)}</strong><p style="color:${x.picked===x.right?"var(--green)":"var(--red)"}">Your pick: ${esc(x.picked||"(none)")}</p>${x.picked!==x.right?`<p><strong>Model answer:</strong> ${esc(x.right)}</p>`:""}</div>`).join("")}
    <div class="row"><button class="btn" id="qAgain">New quiz</button></div>`;
  }
  return `<span class="tag">Question ${quizState.i+1} of ${quizState.items.length}</span><h1 style="font-size:1.4rem">${esc(q.stem)}</h1>
  ${q.opts.map((o,k)=>`<button class="opt" data-k="${k}" ${q.picked!==null?"disabled":""} ${q.picked!==null&&o===q.right?'style="background:var(--green-soft);border-color:var(--green)"':""} ${q.picked!==null&&q.picked===o&&o!==q.right?'style="background:var(--red-soft);border-color:var(--red)"':""}>${esc(o)}</button>`).join("")}
  <div class="row">${q.picked!==null?`<button class="btn" id="qNext">Next →</button>`:""}<button class="btn sec" id="qQuit">Quit</button></div>`;
};

// ---------- mock jury ----------
let jury = null, timerId = null;
const juryView = params => {
  if (!jury) {
    const weak = params.get("weak") === "1";
    const cats = [...new Set(QS.map(q=>q.cat))];
    return `<h1>Mock jury</h1><p class="lede">A random judge question appears with a countdown. Answer out loud in ARC form, reveal the model answer, rate yourself. Weak ratings are remembered so you can drill them.</p>
    <div class="row">
      <select id="jCat"><option value="">All categories</option>${cats.map(c=>`<option>${esc(c)}</option>`).join("")}</select>
      <select id="jOwner"><option value="">Any owner</option>${[...new Set(QS.map(q=>q.owner))].map(o=>`<option>${esc(o)}</option>`).join("")}</select>
      <select id="jLevel"><option value="">Any difficulty</option><option value="1">L1 basic</option><option value="2">L2</option><option value="3">L3 hard</option></select>
      <label>Seconds <input type="number" id="jSec" value="30" min="10" max="120" style="width:80px"></label>
      <label><input type="checkbox" id="jWeak" ${weak?"checked":""}> weak only (${weakSet().length})</label>
      <button class="btn" id="jStart">Start</button>
    </div>
    <h2>Your weakest categories</h2>${juryStats()}`;
  }
  const q = QS[jury.idx];
  return `<span class="tag">Mock jury</span>
  <div class="row"><span class="chip l${q.level}">Level ${q.level}</span><span class="chip">${esc(q.cat)}</span><span class="chip">answers first: ${esc(q.owner)}</span><span class="chip">${jury.count} asked</span></div>
  <div class="jury-q">${esc(q.q)}</div>
  <div class="timer" id="timer">${jury.left}s</div>
  ${jury.revealed ? `<div class="answer"><strong>Model answer</strong><p>${esc(q.a)}</p></div>
    <p class="lede">How did you do?</p><div class="rate"><button class="btn sec" data-r="weak">Weak</button><button class="btn sec" data-r="ok">OK</button><button class="btn" data-r="strong">Strong</button></div>`
  : `<div class="row"><button class="btn" id="jReveal">Reveal answer</button><button class="btn sec" id="jSkip">Skip</button></div>`}
  <div class="row" style="margin-top:30px"><button class="btn sec small" id="jEnd">End session</button></div>`;
};
const juryStats = () => {
  const agg = {}; Object.entries(S.jury).forEach(([k,v]) => { const c = QS[+k]?.cat; if(!c) return; agg[c] = agg[c]||{weak:0,ok:0,strong:0}; agg[c][v.last]++; });
  const rows = Object.entries(agg); if (!rows.length) return `<p class="lede">No ratings yet.</p>`;
  return `<table><tr><th>Category</th><th>Weak</th><th>OK</th><th>Strong</th></tr>${rows.sort((a,b)=>b[1].weak-a[1].weak).map(([c,v])=>`<tr><td>${esc(c)}</td><td>${v.weak}</td><td>${v.ok}</td><td>${v.strong}</td></tr>`).join("")}</table>`;
};
const juryNext = () => {
  let pool = QS.map((q,i)=>i).filter(i => (!jury.cat||QS[i].cat===jury.cat) && (!jury.owner||QS[i].owner===jury.owner) && (!jury.level||QS[i].level==jury.level) && (!jury.weak||weakSet().includes(i)) && i!==jury.idx);
  if (!pool.length) pool = QS.map((q,i)=>i);
  jury.idx = pool[Math.floor(Math.random()*pool.length)]; jury.left = jury.sec; jury.revealed = false; jury.count++;
  clearInterval(timerId);
  timerId = setInterval(() => { if (!jury || jury.revealed) return; jury.left--; const t=$("#timer"); if (t){ t.textContent=jury.left+"s"; t.classList.toggle("low", jury.left<=10);} if (jury.left<=0){ jury.revealed=true; clearInterval(timerId); route(); } }, 1000);
  route();
};

// ---------- search ----------
const index = [];
MODS.forEach(m => { m.sections.forEach(s => index.push({ kind:"module", title:m.title+" › "+s.heading, text:s.html.replace(/<[^>]+>/g," "), href:"#/m/"+m.id })); m.cards.forEach(([q,a]) => index.push({ kind:"card", title:q, text:a, href:"#/cards?m="+m.id })); });
QS.forEach((q,i) => index.push({ kind:"judge Q", title:q.q, text:q.a, href:"#/bank?cat="+encodeURIComponent(q.cat) }));
const qIn = $("#q"), res = $("#results");
qIn.oninput = () => {
  const v = qIn.value.trim().toLowerCase(); if (v.length < 2) { res.hidden = true; return; }
  const hits = index.filter(x => (x.title+" "+x.text).toLowerCase().includes(v)).slice(0, 12);
  res.innerHTML = hits.length ? hits.map(h => `<a href="${h.href}"><span class="kind">${h.kind}</span>${esc(h.title)}</a>`).join("") : `<div style="padding:8px;color:var(--muted)">No matches</div>`;
  res.hidden = false;
};
qIn.onblur = () => setTimeout(() => res.hidden = true, 200);
qIn.onfocus = () => { if (qIn.value.trim().length >= 2) res.hidden = false; };
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== qIn) { e.preventDefault(); qIn.focus(); }
  if (e.key === "Escape") { res.hidden = true; qIn.blur(); }
  if (e.key === " " && location.hash.startsWith("#/cards") && document.activeElement.tagName !== "SELECT") { e.preventDefault(); $("#flash")?.classList.toggle("flipped"); }
});

// ---------- router ----------
function route() {
  const h = location.hash || "#/";
  const [path, qs] = h.slice(1).split("?");
  const params = new URLSearchParams(qs || "");
  let html;
  if (path.startsWith("/m/")) html = moduleView(path.slice(3));
  else if (path === "/bank") html = bankView(params);
  else if (path === "/cards") html = cardsView(params);
  else if (path === "/quiz") html = quizView(params);
  else if (path === "/jury") html = juryView(params);
  else html = dashboard();
  main.innerHTML = html;
  bind(params);
  renderNav();
  $("#side").classList.remove("open");
  if (!route.keepScroll) window.scrollTo(0,0);
  route.keepScroll = false;
}
function bind(params) {
  const done = $("#doneBtn"); if (done) done.onclick = () => { const id = location.hash.split("/")[2]; S.done[id] = !S.done[id]; save(); route.keepScroll = true; route(); };
  const fc = $("#fCat"), fo = $("#fOwner"); if (fc) fc.onchange = fo.onchange = () => location.hash = `#/bank?cat=${encodeURIComponent(fc.value)}&owner=${encodeURIComponent(fo.value)}`;
  const pb = $("#printBtn"); if (pb) pb.onclick = () => { document.querySelectorAll(".bank details").forEach(d=>d.open=true); print(); };
  const cm = $("#cardMod"); if (cm) cm.onchange = () => { cardState = null; location.hash = "#/cards" + (cm.value ? "?m="+cm.value : ""); };
  const step = d => { const pool = (cardState.mid ? MODS.filter(m=>m.id===cardState.mid) : MODS).flatMap(m=>m.cards); cardState.i = (cardState.i + d + pool.length) % pool.length; route.keepScroll = true; route(); };
  if ($("#cNext")) { $("#cNext").onclick = () => step(1); $("#cPrev").onclick = () => step(-1); $("#cFlip").onclick = () => $("#flash").classList.toggle("flipped"); $("#cShuffle").onclick = () => { cardState = null; route(); }; }
  const qStart = $("#qStart"); if (qStart) qStart.onclick = () => { const mid = $("#qMod").value, n = +$("#qN").value; quizState = { items: buildQuiz(mid, n), i:0, topic: mid ? MODS.find(m=>m.id===mid).title : "All topics" }; route(); };
  document.querySelectorAll(".opt").forEach(b => b.onclick = () => { const q = quizState.items[quizState.i]; if (q.picked!==null) return; q.picked = q.opts[+b.dataset.k]; route.keepScroll = true; route(); });
  const qn = $("#qNext"); if (qn) qn.onclick = () => { quizState.i++; route(); };
  const qq = $("#qQuit"); if (qq) qq.onclick = () => { quizState = null; route(); };
  const qa = $("#qAgain"); if (qa) qa.onclick = () => { quizState = null; route(); };
  const js = $("#jStart"); if (js) js.onclick = () => { jury = { cat:$("#jCat").value, owner:$("#jOwner").value, level:$("#jLevel").value, sec:+$("#jSec").value||30, weak:$("#jWeak").checked, idx:-1, count:0 }; juryNext(); };
  const jr = $("#jReveal"); if (jr) jr.onclick = () => { jury.revealed = true; clearInterval(timerId); route.keepScroll = true; route(); };
  const jsk = $("#jSkip"); if (jsk) jsk.onclick = juryNext;
  const je = $("#jEnd"); if (je) je.onclick = () => { jury = null; clearInterval(timerId); route(); };
  document.querySelectorAll(".rate button").forEach(b => b.onclick = () => { S.jury[jury.idx] = { last: b.dataset.r, when: Date.now() }; save(); juryNext(); });
}
window.addEventListener("hashchange", () => { if (!location.hash.startsWith("#/jury") && jury) { jury = null; clearInterval(timerId); } if (!location.hash.startsWith("#/quiz")) quizState = null; route(); });
route();
})();
