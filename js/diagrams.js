// Inline SVG illustrations keyed by id. Colours follow CSS variables so they adapt to the theme.
// Referenced from content.js sections via {{svg:id}} and as module hero images via hero:"svg:id" or hero:"img/file.png".
(() => {
const T="var(--teal)", T2="var(--teal-2)", TS="var(--teal-soft)", A="var(--amber)", AS="var(--amber-soft)", R="var(--red)", RS="var(--red-soft)", I="var(--ink)", M="var(--muted)", P="var(--panel)", L="var(--line)", G="var(--green)", GS="var(--green-soft)";
const F=`font-family="Inter,system-ui" font-size="13"`;
const fibres = (x,y,w,n,gap,op=1) => Array.from({length:n},(_,i)=>`<line x1="${x}" y1="${y+i*gap}" x2="${x+w}" y2="${y+i*gap}" stroke="${T}" stroke-width="2" opacity="${op*(0.55+((i*7)%4)/10)}"/>`).join("");
const dots = (x,y,w,h,n,seed=3) => Array.from({length:n},(_,i)=>`<circle cx="${x+((i*37+seed*11)%w)}" cy="${y+((i*53+seed*7)%h)}" r="2" fill="${I}"/>`).join("");
const pep = (x,y,w,h,n) => Array.from({length:n},(_,i)=>`<g transform="translate(${x+((i*61)%w)} ${y+((i*29)%h)}) rotate(${(i*47)%180})"><rect x="-4" y="-1.2" width="8" height="2.4" rx="1.2" fill="${A}"/></g>`).join("");

window.DIAGRAMS = {

hero: {
  caption: "NanoAxon-X: aligned PCL nanofibres (teal) carrying graphene nanoplatelets (dark) and a covalently bound bioactive peptide (amber), bridging a peripheral nerve gap.",
  svg: `<svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" ${F}>
  <defs><linearGradient id="nerve" x1="0" x2="1"><stop offset="0" stop-color="${AS}"/><stop offset="1" stop-color="${AS}"/></linearGradient></defs>
  <!-- proximal nerve -->
  <path d="M0 120 Q 120 100 200 130 Q 240 150 230 200 Q 220 230 120 220 Q 0 215 0 220 Z" fill="${AS}" stroke="${A}" stroke-width="2.5"/>
  ${Array.from({length:5},(_,i)=>`<path d="M10 ${140+i*16} Q 120 ${130+i*14} 210 ${150+i*12}" stroke="${A}" stroke-width="1.2" fill="none" opacity=".6"/>`).join("")}
  <!-- distal nerve -->
  <path d="M900 120 Q 780 100 700 130 Q 660 150 670 200 Q 680 230 780 220 Q 900 215 900 220 Z" fill="${AS}" stroke="${A}" stroke-width="2.5"/>
  ${Array.from({length:5},(_,i)=>`<path d="M890 ${140+i*16} Q 780 ${130+i*14} 690 ${150+i*12}" stroke="${A}" stroke-width="1.2" fill="none" opacity=".6"/>`).join("")}
  <!-- scaffold -->
  <rect x="215" y="118" width="470" height="110" rx="55" fill="${P}" stroke="${T}" stroke-width="3"/>
  <clipPath id="sc"><rect x="218" y="121" width="464" height="104" rx="52"/></clipPath>
  <g clip-path="url(#sc)">${fibres(210,130,480,12,8)}${dots(230,128,440,92,36)}${pep(240,128,420,90,22)}</g>
  <!-- growing axons -->
  ${[0,1,2].map(i=>`<path d="M215 ${150+i*25} C 300 ${150+i*25}, 330 ${150+i*25}, ${400+i*60} ${150+i*25}" stroke="${R}" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="0 1"/><circle cx="${400+i*60}" cy="${150+i*25}" r="5" fill="${R}"/>`).join("")}
  <!-- pulse -->
  <path d="M250 275 h60 l10 -22 l12 44 l12 -44 l10 22 h60" stroke="${T}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <text x="330" y="305" text-anchor="middle" fill="${M}" font-size="12">conductive path for bioelectric cues and stimulation</text>
  <text x="110" y="95" text-anchor="middle" fill="${A}" font-weight="600">proximal stump</text>
  <text x="790" y="95" text-anchor="middle" fill="${A}" font-weight="600">distal stump</text>
  <text x="450" y="95" text-anchor="middle" fill="${T2}" font-weight="700" font-size="16">NanoAxon-X scaffold</text>
  <text x="560" y="305" fill="${R}" font-size="12">regenerating axons (growth cones)</text>
  </svg>`
},

neuron: {
  caption: "A motor neuron. The cell body stays in the spinal cord; the axon, wrapped in Schwann-cell myelin with gaps (nodes of Ranvier), runs all the way to the muscle. An injury cuts the axon far from its nucleus.",
  svg: `<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" ${F}>
  <!-- dendrites -->
  ${[[-40,-30],[-50,10],[-30,45],[10,-50],[40,-40],[-10,55]].map(([dx,dy])=>`<path d="M110 130 q ${dx*0.6} ${dy*0.6} ${dx} ${dy}" stroke="${A}" stroke-width="3" fill="none" stroke-linecap="round"/>`).join("")}
  <circle cx="110" cy="130" r="34" fill="${AS}" stroke="${A}" stroke-width="2.5"/><circle cx="110" cy="130" r="10" fill="${A}"/>
  <text x="110" y="200" text-anchor="middle" fill="${I}" font-weight="600">cell body</text><text x="110" y="216" text-anchor="middle" fill="${M}" font-size="11">in spinal cord / DRG</text>
  <!-- axon -->
  <line x1="144" y1="130" x2="780" y2="130" stroke="${I}" stroke-width="3"/>
  ${Array.from({length:7},(_,i)=>`<rect x="${175+i*85}" y="112" width="62" height="36" rx="14" fill="${TS}" stroke="${T}" stroke-width="2"/>`).join("")}
  <text x="206" y="98" text-anchor="middle" fill="${T2}" font-size="12">Schwann cell + myelin</text>
  <line x1="252" y1="150" x2="252" y2="170" stroke="${M}"/><text x="252" y="186" text-anchor="middle" fill="${M}" font-size="11">node of Ranvier</text>
  <!-- cut -->
  <line x1="520" y1="95" x2="540" y2="165" stroke="${R}" stroke-width="3"/><line x1="540" y1="95" x2="520" y2="165" stroke="${R}" stroke-width="3"/>
  <text x="530" y="82" text-anchor="middle" fill="${R}" font-weight="600" font-size="12">injury</text>
  <text x="640" y="190" text-anchor="middle" fill="${R}" font-size="11">distal segment degenerates (Wallerian)</text>
  <text x="330" y="190" text-anchor="middle" fill="${T2}" font-size="11">proximal segment regrows ~1 mm/day</text>
  <!-- muscle -->
  <g transform="translate(790 95)">${[0,1,2,3].map(i=>`<rect x="0" y="${i*18}" width="90" height="12" rx="6" fill="${RS}" stroke="${R}" stroke-width="1.5"/>`).join("")}</g>
  <text x="835" y="200" text-anchor="middle" fill="${I}" font-weight="600">muscle</text><text x="835" y="216" text-anchor="middle" fill="${M}" font-size="11">endplates decay if not reinnervated</text>
  </svg>`
},

nerve: {
  caption: "Cross-section of a peripheral nerve. Each axon with its Schwann cell sits in endoneurium; bundles (fascicles) are wrapped by perineurium; the whole nerve by the vascular epineurium that surgeons suture.",
  svg: `<svg viewBox="0 0 900 340" xmlns="http://www.w3.org/2000/svg" ${F}>
  <ellipse cx="250" cy="170" rx="200" ry="140" fill="${AS}" stroke="${A}" stroke-width="3.5"/>
  <ellipse cx="180" cy="135" rx="72" ry="55" fill="${TS}" stroke="${T}" stroke-width="2.5"/>
  <ellipse cx="320" cy="125" rx="62" ry="48" fill="${TS}" stroke="${T}" stroke-width="2.5"/>
  <ellipse cx="250" cy="235" rx="95" ry="55" fill="${TS}" stroke="${T}" stroke-width="2.5"/>
  ${[[150,115],[185,122],[165,150],[200,148],[140,145],[300,110],[335,135],[290,140],[225,225],[260,245],[290,228],[210,250],[270,210],[240,260]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="11" fill="${P}" stroke="${I}" stroke-width="2.2"/><circle cx="${x}" cy="${y}" r="4" fill="${I}"/>`).join("")}
  <circle cx="400" cy="230" r="9" fill="${RS}" stroke="${R}" stroke-width="2"/><circle cx="95" cy="215" r="7" fill="${RS}" stroke="${R}" stroke-width="2"/>
  <g fill="${I}">
    <line x1="450" y1="130" x2="520" y2="100" stroke="${I}" stroke-width="1.2"/><text x="528" y="104" font-weight="600">Epineurium</text><text x="528" y="120" fill="${M}" font-size="12">outer coat, blood supply, sutured by surgeon</text>
    <line x1="382" y1="125" x2="520" y2="160" stroke="${I}" stroke-width="1.2"/><text x="528" y="164" font-weight="600">Perineurium</text><text x="528" y="180" fill="${M}" font-size="12">fascicle sheath, blood–nerve barrier, strength</text>
    <line x1="300" y1="140" x2="520" y2="220" stroke="${I}" stroke-width="1.2"/><text x="528" y="224" font-weight="600">Endoneurium</text><text x="528" y="240" fill="${M}" font-size="12">loose matrix around each axon; the tubes axons regrow in</text>
    <line x1="271" y1="210" x2="520" y2="280" stroke="${I}" stroke-width="1.2"/><text x="528" y="284" font-weight="600">Axon in Schwann cell</text><text x="528" y="300" fill="${M}" font-size="12">dark core = axon, ring = myelin</text>
    <line x1="409" y1="235" x2="520" y2="325" stroke="${I}" stroke-width="1.2"/><text x="528" y="329" font-weight="600">Blood vessel</text>
  </g></svg>`
},

wallerian: {
  caption: "What happens after a cut. Left to right: distal axon breaks down, Schwann cells switch to repair mode and macrophages clear debris, Schwann cells line up into Bands of Büngner, axon sprouts follow them.",
  svg: `<svg viewBox="0 0 900 230" xmlns="http://www.w3.org/2000/svg" ${F}>
  ${[["Day 0","Transection"],["Days 1–7","Breakdown + clean-up"],["Weeks 1–4","Bands of Büngner"],["Months","Sprouts follow"]].map(([t,s],i)=>`<text x="${112+i*225}" y="28" text-anchor="middle" fill="${I}" font-weight="700">${t}</text><text x="${112+i*225}" y="46" text-anchor="middle" fill="${M}" font-size="12">${s}</text>`).join("")}
  <!-- panel 1 -->
  <rect x="20" y="100" width="80" height="26" rx="13" fill="${TS}" stroke="${T}" stroke-width="2"/><line x1="20" y1="113" x2="100" y2="113" stroke="${I}" stroke-width="2.5"/>
  <line x1="112" y1="90" x2="124" y2="136" stroke="${R}" stroke-width="3"/><line x1="124" y1="90" x2="112" y2="136" stroke="${R}" stroke-width="3"/>
  <rect x="136" y="100" width="80" height="26" rx="13" fill="${TS}" stroke="${T}" stroke-width="2"/><line x1="136" y1="113" x2="216" y2="113" stroke="${I}" stroke-width="2.5"/>
  <!-- panel 2 -->
  <rect x="245" y="100" width="80" height="26" rx="13" fill="${TS}" stroke="${T}" stroke-width="2"/><line x1="245" y1="113" x2="325" y2="113" stroke="${I}" stroke-width="2.5"/>
  ${[[360,105],[385,120],[410,108],[432,122]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="6" rx="2" fill="${I}" transform="rotate(${x%50} ${x} ${y})"/>`).join("")}
  ${[[372,140],[420,95]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="${RS}" stroke="${R}" stroke-width="2"/>`).join("")}
  <text x="395" y="170" text-anchor="middle" fill="${R}" font-size="11">macrophages eat myelin</text>
  <!-- panel 3 -->
  <rect x="470" y="100" width="80" height="26" rx="13" fill="${TS}" stroke="${T}" stroke-width="2"/><line x1="470" y1="113" x2="550" y2="113" stroke="${I}" stroke-width="2.5"/>
  ${[0,1,2,3,4].map(i=>`<ellipse cx="${585+i*22}" cy="113" rx="11" ry="7" fill="${T}" opacity=".85"/>`).join("")}
  <text x="630" y="170" text-anchor="middle" fill="${T2}" font-size="11">aligned repair Schwann cells (c-Jun)</text>
  <!-- panel 4 -->
  <rect x="695" y="100" width="80" height="26" rx="13" fill="${TS}" stroke="${T}" stroke-width="2"/><line x1="695" y1="113" x2="775" y2="113" stroke="${I}" stroke-width="2.5"/>
  ${[0,1,2,3,4].map(i=>`<ellipse cx="${795+i*20}" cy="113" rx="10" ry="6" fill="${T}" opacity=".5"/>`).join("")}
  <path d="M775 113 H 860" stroke="${R}" stroke-width="3" stroke-linecap="round"/><circle cx="862" cy="113" r="5" fill="${R}"/>
  <text x="820" y="170" text-anchor="middle" fill="${R}" font-size="11">growth cone, ~1 mm/day</text>
  <text x="450" y="215" text-anchor="middle" fill="${M}" font-size="12">A scaffold must do what the Bands of Büngner do when the gap is too long for them to form: provide an aligned, permissive path.</text>
  </svg>`
},

ladder: {
  caption: "What surgeons choose today, by gap length. NanoAxon-X aims at the 1 to 5 cm zone where hollow tubes underperform and autograft is the only good option.",
  svg: `<svg viewBox="0 0 900 250" xmlns="http://www.w3.org/2000/svg" ${F}>
  <line x1="60" y1="150" x2="860" y2="150" stroke="${L}" stroke-width="8" stroke-linecap="round"/>
  ${[[60,"0"],[200,"5 mm"],[380,"3 cm"],[620,"5 cm"],[860,"10 cm+"]].map(([x,l])=>`<line x1="${x}" y1="142" x2="${x}" y2="158" stroke="${I}" stroke-width="2"/><text x="${x}" y="180" text-anchor="middle" fill="${M}" font-size="12">${l}</text>`).join("")}
  <text x="460" y="215" text-anchor="middle" fill="${I}">Gap length</text>
  <rect x="60" y="60" width="140" height="56" rx="10" fill="${GS}" stroke="${G}" stroke-width="2"/><text x="130" y="84" text-anchor="middle" fill="${I}" font-weight="600">Direct suture</text><text x="130" y="102" text-anchor="middle" fill="${M}" font-size="11">no tension allowed</text>
  <rect x="200" y="60" width="180" height="56" rx="10" fill="${P}" stroke="${M}" stroke-width="2"/><text x="290" y="84" text-anchor="middle" fill="${I}" font-weight="600">Hollow conduit</text><text x="290" y="102" text-anchor="middle" fill="${M}" font-size="11">collagen / PGA / PLCL tubes</text>
  <rect x="380" y="60" width="480" height="56" rx="10" fill="${AS}" stroke="${A}" stroke-width="2"/><text x="620" y="84" text-anchor="middle" fill="${I}" font-weight="600">Autograft (sural nerve) or allograft</text><text x="620" y="102" text-anchor="middle" fill="${M}" font-size="11">second surgery, donor numbness, limited supply, ~40–50% good outcomes</text>
  <rect x="200" y="122" width="420" height="20" rx="10" fill="${TS}" stroke="${T}" stroke-width="2"/><text x="410" y="136" text-anchor="middle" fill="${T2}" font-weight="700" font-size="12">NanoAxon-X target zone</text>
  </svg>`
},

electrospin: {
  caption: "Electrospinning. A charged polymer jet thins and dries in flight; a fast rotating drum stretches the landing fibres into alignment.",
  svg: `<svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" ${F}>
  <!-- syringe -->
  <rect x="60" y="120" width="170" height="40" rx="6" fill="${P}" stroke="${I}" stroke-width="2"/><rect x="30" y="128" width="40" height="24" rx="3" fill="${L}" stroke="${I}" stroke-width="2"/>
  <rect x="75" y="128" width="120" height="24" fill="${TS}"/><text x="135" y="145" text-anchor="middle" fill="${T2}" font-size="11">PCL + GNP in DCM</text>
  <rect x="230" y="134" width="50" height="12" fill="${I}"/>
  <text x="145" y="105" text-anchor="middle" fill="${I}" font-weight="600">syringe pump</text><text x="145" y="180" text-anchor="middle" fill="${M}" font-size="11">flow rate 0.5–2 mL/h</text>
  <!-- HV -->
  <rect x="300" y="40" width="80" height="40" rx="8" fill="${AS}" stroke="${A}" stroke-width="2"/><text x="340" y="65" text-anchor="middle" fill="${I}" font-weight="700">10–25 kV</text>
  <path d="M300 60 H 280 V 134" stroke="${A}" stroke-width="2" fill="none"/>
  <path d="M380 60 H 640 V 110" stroke="${A}" stroke-width="2" fill="none" stroke-dasharray="4 4"/><text x="660" y="70" fill="${M}" font-size="11">ground</text>
  <!-- taylor cone and jet -->
  <path d="M280 134 L 310 140 L 280 146 Z" fill="${T}"/>
  <path d="M310 140 C 360 140, 380 120, 420 150 S 480 170, 520 140 S 580 120, 610 150" stroke="${T}" stroke-width="2.5" fill="none"/>
  <path d="M400 125 C 440 100, 500 190, 560 120" stroke="${T}" stroke-width="1" fill="none" opacity=".4"/>
  <text x="320" y="125" fill="${T2}" font-size="11">Taylor cone</text><text x="460" y="195" text-anchor="middle" fill="${M}" font-size="11">whipping jet: thins, solvent evaporates</text>
  <!-- drum -->
  <g transform="translate(720 140)"><ellipse cx="0" cy="0" rx="34" ry="90" fill="${P}" stroke="${I}" stroke-width="2.5"/>
  ${Array.from({length:9},(_,i)=>`<line x1="-32" y1="${-80+i*20}" x2="32" y2="${-80+i*20}" stroke="${T}" stroke-width="2"/>`).join("")}
  <path d="M-60 -110 a 60 60 0 0 1 60 -20" stroke="${I}" stroke-width="2" fill="none" marker-end="url(#ea)"/></g>
  <defs><marker id="ea" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${I}"/></marker></defs>
  <text x="720" y="260" text-anchor="middle" fill="${I}" font-weight="600">rotating drum, 1000–3000 rpm</text><text x="720" y="278" text-anchor="middle" fill="${M}" font-size="11">stretches fibres into alignment</text>
  <line x1="300" y1="230" x2="680" y2="230" stroke="${M}" stroke-dasharray="3 4"/><text x="490" y="248" text-anchor="middle" fill="${M}" font-size="11">needle–collector distance 10–20 cm</text>
  </svg>`
},

conjugation: {
  caption: "Attaching the peptide. Bare PCL is inert, so the surface is first activated to expose amine or carboxyl groups, then EDC/NHS forms an amide bond with the peptide.",
  svg: `<svg viewBox="0 0 900 230" xmlns="http://www.w3.org/2000/svg" ${F}>
  <defs><marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${M}"/></marker></defs>
  ${[0,1,2].map(i=>`<rect x="${40+i*300}" y="120" width="220" height="40" rx="8" fill="${TS}" stroke="${T}" stroke-width="2"/><text x="${150+i*300}" y="145" text-anchor="middle" fill="${T2}" font-weight="600">PCL fibre</text>`).join("")}
  <text x="150" y="190" text-anchor="middle" fill="${I}" font-weight="600">1. Bare PCL</text><text x="150" y="206" text-anchor="middle" fill="${M}" font-size="11">no reactive groups, hydrophobic</text>
  ${[0,1,2,3].map(i=>`<line x1="${380+i*50}" y1="120" x2="${380+i*50}" y2="98" stroke="${I}" stroke-width="2"/><text x="${380+i*50}" y="90" text-anchor="middle" fill="${I}" font-size="11">${i%2?"–COOH":"–NH₂"}</text>`).join("")}
  <text x="450" y="190" text-anchor="middle" fill="${I}" font-weight="600">2. Activate surface</text><text x="450" y="206" text-anchor="middle" fill="${M}" font-size="11">aminolysis, hydrolysis, plasma or polydopamine</text>
  ${[0,1,2,3].map(i=>`<line x1="${680+i*50}" y1="120" x2="${680+i*50}" y2="100" stroke="${I}" stroke-width="2"/><text x="${680+i*50}" y="95" text-anchor="middle" fill="${M}" font-size="9">amide</text><rect x="${668+i*50}" y="62" width="24" height="7" rx="3.5" fill="${A}"/>`).join("")}
  <text x="750" y="190" text-anchor="middle" fill="${I}" font-weight="600">3. Couple peptide</text><text x="750" y="206" text-anchor="middle" fill="${M}" font-size="11">EDC/NHS → stable amide bond</text>
  <line x1="268" y1="140" x2="330" y2="140" stroke="${M}" stroke-width="2" marker-end="url(#ar2)"/><line x1="568" y1="140" x2="630" y2="140" stroke="${M}" stroke-width="2" marker-end="url(#ar2)"/>
  <text x="450" y="40" text-anchor="middle" fill="${I}" font-size="12">Proof: FTIR amide I/II bands (≈1650 / 1540 cm⁻¹), XPS nitrogen, lower contact angle, density assay with a wash-off control</text>
  </svg>`
},

contact: {
  caption: "Contact guidance. On random fibres neurites wander; on aligned fibres focal adhesions and the cytoskeleton line up with the fibre axis, so neurites grow straighter and longer.",
  svg: `<svg viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" ${F}>
  <rect x="40" y="50" width="380" height="150" rx="10" fill="${P}" stroke="${L}"/>
  ${Array.from({length:18},(_,i)=>`<line x1="${50+(i*41)%360}" y1="${55+(i*67)%140}" x2="${50+(i*41+60)%360}" y2="${55+(i*67+45)%140}" stroke="${T}" stroke-width="1.6" opacity=".5"/>`).join("")}
  <circle cx="230" cy="125" r="13" fill="${AS}" stroke="${A}" stroke-width="2"/>
  <path d="M243 120 q 30 -25 55 5 t 40 -20" stroke="${R}" stroke-width="2.5" fill="none"/><path d="M218 132 q -30 20 -50 -5" stroke="${R}" stroke-width="2.5" fill="none"/><path d="M232 112 q 5 -30 -20 -40" stroke="${R}" stroke-width="2.5" fill="none"/>
  <text x="230" y="225" text-anchor="middle" fill="${I}" font-weight="600">Random fibres: short, wandering neurites</text>
  <rect x="480" y="50" width="380" height="150" rx="10" fill="${P}" stroke="${L}"/>
  ${Array.from({length:14},(_,i)=>`<line x1="490" y1="${58+i*10}" x2="850" y2="${58+i*10}" stroke="${T}" stroke-width="1.6" opacity=".55"/>`).join("")}
  <ellipse cx="600" cy="125" rx="22" ry="10" fill="${AS}" stroke="${A}" stroke-width="2"/>
  <path d="M622 125 H 820" stroke="${R}" stroke-width="2.5"/><path d="M578 125 H 500" stroke="${R}" stroke-width="2.5"/><circle cx="822" cy="125" r="4" fill="${R}"/>
  <text x="670" y="225" text-anchor="middle" fill="${I}" font-weight="600">Aligned fibres: long, directed neurites</text>
  </svg>`
},

demo: {
  caption: "The tabletop demonstrator. A real scaffold sample closes the circuit across the 'gap'; the pulse travels along the conductive path and drives a motor that contracts an artificial muscle.",
  svg: `<svg viewBox="0 0 900 260" xmlns="http://www.w3.org/2000/svg" ${F}>
  <rect x="30" y="200" width="840" height="14" rx="4" fill="${L}"/>
  <!-- chambers -->
  ${[["Signal source","Arduino + dial",60],["Nerve gap","scaffold clip-in",270],["Pathway","conductive tube + LEDs",480],["Muscle","motor + lead screw",690]].map(([t,s,x],i)=>`<rect x="${x}" y="80" width="170" height="110" rx="10" fill="${i==1?TS:P}" stroke="${i==1?T:M}" stroke-width="2"/><text x="${x+85}" y="60" text-anchor="middle" fill="${I}" font-weight="600">${t}</text><text x="${x+85}" y="178" text-anchor="middle" fill="${M}" font-size="11">${s}</text>`).join("")}
  <!-- scaffold in chamber 2 -->
  <rect x="300" y="115" width="110" height="30" rx="4" fill="${P}" stroke="${T}" stroke-width="2"/>${fibres(305,120,100,5,5)}
  <!-- wires -->
  <line x1="230" y1="130" x2="270" y2="130" stroke="${I}" stroke-width="2"/><line x1="440" y1="130" x2="480" y2="130" stroke="${I}" stroke-width="2"/><line x1="650" y1="130" x2="690" y2="130" stroke="${I}" stroke-width="2"/>
  ${[0,1,2,3].map(i=>`<circle cx="${510+i*40}" cy="130" r="7" fill="${T}" opacity="${0.4+i*0.2}"/>`).join("")}
  <!-- dial -->
  <circle cx="145" cy="130" r="28" fill="${P}" stroke="${I}" stroke-width="2"/><line x1="145" y1="130" x2="162" y2="112" stroke="${I}" stroke-width="3"/><text x="145" y="30" text-anchor="middle" fill="${M}" font-size="11">neurite score from cell images</text>
  <!-- muscle -->
  <rect x="720" y="110" width="110" height="40" rx="20" fill="${RS}" stroke="${R}" stroke-width="2"/><path d="M700 130 H 720 M 830 130 H 850" stroke="${I}" stroke-width="3"/><text x="775" y="135" text-anchor="middle" fill="${R}" font-size="11">contracts</text>
  <text x="450" y="240" text-anchor="middle" fill="${M}" font-size="12">Not a medical device. Shows conductivity and the outgrowth-to-function idea, not neural transmission.</text>
  </svg>`
},

mlloop: {
  caption: "The learning loop. Every batch adds rows; the model proposes the next formulation; the lab tests it; the blind-prediction error is the headline metric.",
  svg: `<svg viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" ${F}>
  <defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="${T}"/></marker></defs>
  ${[[40,"Fabrication log","conc, GNP wt%, kV, cm, mL/h, rpm, RH"],[260,"Characterisation","diameter, alignment, σ, Xc, θ"],[480,"XGBoost + SHAP","regression, grouped CV, explanations"],[700,"Recommendation","next formulation and why"]].map(([x,t,d])=>`<rect x="${x}" y="60" width="170" height="80" rx="12" fill="${P}" stroke="${L}" stroke-width="1.5"/><text x="${x+85}" y="92" text-anchor="middle" fill="${I}" font-weight="600">${t}</text><text x="${x+85}" y="114" text-anchor="middle" fill="${M}" font-size="10.5">${d}</text>`).join("")}
  ${[210,430,650].map(x=>`<line x1="${x}" y1="100" x2="${x+48}" y2="100" stroke="${T}" stroke-width="2.5" marker-end="url(#ar3)"/>`).join("")}
  <path d="M785 140 C 785 210, 125 210, 125 142" fill="none" stroke="${A}" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#ar3)"/>
  <text x="455" y="192" text-anchor="middle" fill="${I}" font-weight="600">Lab makes it → cell assays → new rows (blind-prediction check)</text>
  <text x="455" y="225" text-anchor="middle" fill="${M}" font-size="12">Targets: viability, neurite length, neurite alignment. Baselines to beat: linear model, mean predictor.</text>
  </svg>`
},

conductive: {
  caption: "Why a conductive bridge: an insulating tube blocks endogenous currents; a conductive scaffold lets fields and currents span the gap and can serve as a stimulation electrode.",
  svg: `<svg viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg" ${F}>
  <rect x="40" y="70" width="90" height="44" rx="20" fill="${AS}" stroke="${A}" stroke-width="2"/><rect x="130" y="76" width="150" height="32" rx="5" fill="${P}" stroke="${M}" stroke-width="2"/><rect x="280" y="70" width="90" height="44" rx="20" fill="${AS}" stroke="${A}" stroke-width="2"/>
  <text x="205" y="55" text-anchor="middle" fill="${I}" font-weight="600">Hollow insulating tube</text>
  <path d="M70 92 h50" stroke="${R}" stroke-width="2.5"/><text x="135" y="98" fill="${R}" font-size="20">✕</text>
  <text x="205" y="145" text-anchor="middle" fill="${M}" font-size="12">endogenous current stops at the wall</text>
  <rect x="500" y="70" width="90" height="44" rx="20" fill="${AS}" stroke="${A}" stroke-width="2"/><rect x="590" y="76" width="150" height="32" rx="5" fill="${TS}" stroke="${T}" stroke-width="2"/><rect x="740" y="70" width="90" height="44" rx="20" fill="${AS}" stroke="${A}" stroke-width="2"/>
  <text x="665" y="55" text-anchor="middle" fill="${I}" font-weight="600">NanoAxon-X conductive bridge</text>
  <path d="M530 92 H 800" stroke="${T}" stroke-width="2.5" stroke-dasharray="6 4"/>
  <text x="665" y="145" text-anchor="middle" fill="${M}" font-size="12">field and current continue; axons follow aligned fibres;</text><text x="665" y="163" text-anchor="middle" fill="${M}" font-size="12">optional 20 Hz stimulation through the scaffold</text>
  </svg>`
},

graphene_fate: {
  caption: "Exposure logic. While PCL is intact, cells mostly see polymer and peptide; graphene is released slowly over years and persists, so its fate must be tracked in tissue and lymph nodes.",
  svg: `<svg viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg" ${F}>
  <line x1="70" y1="170" x2="860" y2="170" stroke="${I}" stroke-width="1.5"/><line x1="70" y1="170" x2="70" y2="30" stroke="${I}" stroke-width="1.5"/>
  ${[["0",70],["months",260],["1 yr",430],["2–4 yr",650],["beyond",840]].map(([l,x])=>`<text x="${x}" y="190" text-anchor="middle" fill="${M}" font-size="12">${l}</text>`).join("")}
  <text x="465" y="212" text-anchor="middle" fill="${I}" font-size="12">Time after implantation</text>
  <path d="M70 45 C 300 48, 500 80, 650 160 L 860 168" fill="none" stroke="${T}" stroke-width="3.5"/><text x="160" y="40" fill="${T2}" font-weight="600">PCL mass remaining</text>
  <path d="M70 168 C 300 165, 500 130, 650 60 L 860 50" fill="none" stroke="${R}" stroke-width="3.5"/><text x="690" y="45" fill="${R}" font-weight="600">GNP exposed / free</text>
  <rect x="70" y="30" width="200" height="140" fill="${GS}" opacity=".5"/><text x="170" y="120" text-anchor="middle" fill="${M}" font-size="11">regeneration window:</text><text x="170" y="136" text-anchor="middle" fill="${M}" font-size="11">cells see mostly PCL + peptide</text>
  </svg>`
}
};
})();
