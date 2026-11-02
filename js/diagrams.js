// Inline SVG diagrams keyed by module id. Colours use CSS variables so they follow the theme.
window.DIAGRAMS = {
anatomy: {
  caption: "Cross-section of a peripheral nerve. Axons (with Schwann/myelin) in endoneurium, grouped into fascicles by perineurium, all wrapped in epineurium with blood vessels.",
  svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="13">
  <defs><style>.l{stroke:var(--ink);stroke-width:1.2;fill:none}.t{fill:var(--ink)}.m{fill:var(--muted)}</style></defs>
  <ellipse cx="200" cy="150" rx="170" ry="120" fill="var(--amber-soft)" stroke="var(--amber)" stroke-width="3"/>
  <g>
    <ellipse cx="140" cy="120" rx="62" ry="48" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.5"/>
    <ellipse cx="260" cy="110" rx="55" ry="42" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.5"/>
    <ellipse cx="200" cy="205" rx="80" ry="48" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2.5"/>
  </g>
  ${(()=>{let s="";const pts=[[120,105],[150,112],[135,138],[160,132],[115,130],[250,95],[275,118],[240,125],[180,195],[210,210],[240,195],[170,220],[220,225],[195,185]];for(const [x,y] of pts){s+=`<circle cx="${x}" cy="${y}" r="9" fill="var(--panel)" stroke="var(--ink)" stroke-width="2"/><circle cx="${x}" cy="${y}" r="3.5" fill="var(--ink)"/>`;}return s;})()}
  <circle cx="330" cy="200" r="8" fill="var(--red-soft)" stroke="var(--red)" stroke-width="2"/>
  <circle cx="80" cy="190" r="6" fill="var(--red-soft)" stroke="var(--red)" stroke-width="2"/>
  <g class="t">
    <line class="l" x1="372" y1="110" x2="430" y2="90"/><text x="436" y="94">Epineurium: outer coat, blood supply, sutured by surgeon</text>
    <line class="l" x1="315" y1="110" x2="430" y2="130"/><text x="436" y="134">Perineurium: fascicle sheath, blood-nerve barrier</text>
    <line class="l" x1="252" y1="118" x2="430" y2="170"/><text x="436" y="174">Endoneurium: loose matrix around each fibre</text>
    <line class="l" x1="209" y1="210" x2="430" y2="210"/><text x="436" y="214">Axon (dark) inside myelin / Schwann cell (ring)</text>
    <line class="l" x1="337" y1="205" x2="430" y2="250"/><text x="436" y="254">Vasa nervorum (blood vessels)</text>
    <text x="436" y="285" class="m">Fascicle count: 1 (digital nerve) to dozens (sciatic)</text>
  </g></svg>`
},
injury: {
  caption: "Timeline after transection. The scaffold must let axons cross and reach targets before Schwann support and muscle endplates decay.",
  svg: `<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}</style></defs>
  <line x1="40" y1="120" x2="690" y2="120" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>
  <g class="t">
    ${[[40,"Hours","Distal axon fragments (Ca²⁺, SARM1)"],[170,"Days 1 to 7","Schwann cells → repair state (c-Jun), macrophages clear myelin"],[300,"Weeks 1 to 4","Bands of Büngner form; sprouts from proximal stump"],[440,"Months 1 to 3","Axons advance ~1 mm/day; Schwann support still strong"],[570,"Months 3 to 12","Support fades, tubes fibrose, muscle atrophies"],[690,"> 12 to 18 mo","Endplates lost; poor function even if axons arrive"]].map(([x,t,d],i)=>`<circle cx="${x}" cy="120" r="9" fill="${i>3?'var(--red)':'var(--teal)'}"/><text x="${x}" y="${i%2?95:160}" text-anchor="middle" font-weight="600">${t}</text><foreignObject x="${x-65}" y="${i%2?40:170}" width="130" height="60"><div xmlns="http://www.w3.org/1999/xhtml" style="font:11px Inter,system-ui;color:var(--muted);text-align:center;line-height:1.25">${d}</div></foreignObject>`).join("")}
  </g>
  <rect x="40" y="205" width="400" height="8" rx="4" fill="var(--green-soft)" stroke="var(--green)"/>
  <text x="240" y="226" text-anchor="middle" class="m">Window where a bridge works (short gap, early repair)</text>
  </svg>`
},
materials: {
  caption: "Percolation. Conductivity of PCL/GNP fibres versus graphene loading (shape from team four-point-probe data: threshold 5 to 10 wt%, 0.32 S/cm at 15 wt%, plateau by 20 wt%).",
  svg: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}.ax{stroke:var(--ink);stroke-width:1.5}</style></defs>
  <line class="ax" x1="70" y1="250" x2="690" y2="250"/><line class="ax" x1="70" y1="250" x2="70" y2="30"/>
  <text x="380" y="285" text-anchor="middle" class="t">Graphene nanoplatelet loading (wt%)</text>
  <text x="18" y="140" text-anchor="middle" transform="rotate(-90 18 140)" class="t">log₁₀ conductivity (S/cm)</text>
  ${[0,5,10,15,20,25].map(v=>`<text x="${70+v*24.8}" y="268" text-anchor="middle" class="m">${v}</text><line x1="${70+v*24.8}" y1="250" x2="${70+v*24.8}" y2="255" stroke="var(--ink)"/>`).join("")}
  ${[["-6",250],["-4",195],["-2",140],["0",85],["2",30]].map(([l,y])=>`<text x="60" y="${y+4}" text-anchor="end" class="m">${l}</text>`).join("")}
  <path d="M70 245 C 140 243, 180 238, 215 228 S 270 170, 300 120 S 350 78, 442 73 S 560 70, 690 69" fill="none" stroke="var(--teal)" stroke-width="3"/>
  <rect x="194" y="30" width="124" height="220" fill="var(--amber-soft)" opacity=".5"/>
  <text x="256" y="48" text-anchor="middle" class="t" font-weight="600">Percolation window</text>
  <text x="256" y="62" text-anchor="middle" class="m">5 to 10 wt% (team)</text>
  <circle cx="442" cy="73" r="6" fill="var(--teal)"/><text x="455" y="66" class="t" font-weight="600">15 wt% → 0.32 S/cm</text>
  <text x="455" y="80" class="m">chosen optimum</text>
  <circle cx="566" cy="70" r="5" fill="var(--muted)"/><text x="578" y="92" class="m">20 wt%: no gain, poorer fibres</text>
  <line x1="70" y1="162" x2="690" y2="162" stroke="var(--red)" stroke-dasharray="6 5"/><text x="680" y="156" text-anchor="end" class="m">native nerve ~10⁻³ to 10⁻² S/cm</text>
  </svg>`
},
design: {
  caption: "From functional mat to implantable conduit. The aligned, conductive, peptide-coated fibres line the lumen; a random outer layer adds suture retention and kink resistance.",
  svg: `<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}</style></defs>
  <g>
    <rect x="30" y="60" width="170" height="110" rx="6" fill="var(--panel)" stroke="var(--line)"/>
    ${Array.from({length:14},(_,i)=>`<line x1="40" y1="${68+i*7.5}" x2="190" y2="${68+i*7.5}" stroke="var(--teal)" stroke-width="1.6" opacity="${.5+((i*7)%5)/10}"/>`).join("")}
    ${Array.from({length:20},(_,i)=>`<circle cx="${45+(i*37)%145}" cy="${70+(i*53)%95}" r="1.8" fill="var(--ink)"/>`).join("")}
    ${Array.from({length:9},(_,i)=>`<rect x="${48+i*16}" y="${64+(i%3)*34}" width="5" height="2" fill="var(--amber)" transform="rotate(${20+i*30} ${50+i*16} ${65+(i%3)*34})"/>`).join("")}
    <text x="115" y="190" text-anchor="middle" class="t" font-weight="600">1. Aligned mat</text>
    <text x="115" y="206" text-anchor="middle" class="m">PCL fibres (teal), GNP (dots),</text>
    <text x="115" y="220" text-anchor="middle" class="m">covalent peptide (amber)</text>
  </g>
  <text x="240" y="120" class="t" font-size="26">→</text>
  <g>
    <ellipse cx="370" cy="115" rx="95" ry="38" fill="none" stroke="var(--muted)" stroke-width="10" opacity=".35"/>
    <ellipse cx="370" cy="115" rx="80" ry="26" fill="none" stroke="var(--teal)" stroke-width="8"/>
    <ellipse cx="370" cy="115" rx="80" ry="26" fill="var(--bg)"/>
    <text x="370" y="119" text-anchor="middle" class="m" font-size="11">lumen</text>
    <text x="370" y="190" text-anchor="middle" class="t" font-weight="600">2. Rolled conduit</text>
    <text x="370" y="206" text-anchor="middle" class="m">inner aligned layer + random outer sheath</text>
  </g>
  <text x="485" y="120" class="t" font-size="26">→</text>
  <g>
    <rect x="520" y="95" width="60" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <rect x="575" y="100" width="90" height="30" rx="6" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"/>
    <rect x="660" y="95" width="50" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <text x="548" y="88" text-anchor="middle" class="m" font-size="10">proximal</text><text x="685" y="88" text-anchor="middle" class="m" font-size="10">distal</text>
    <line x1="580" y1="115" x2="655" y2="115" stroke="var(--ink)" stroke-dasharray="3 3"/>
    <text x="615" y="190" text-anchor="middle" class="t" font-weight="600">3. Implanted bridge</text>
    <text x="615" y="206" text-anchor="middle" class="m">nerve ends inserted 2 to 3 mm,</text>
    <text x="615" y="220" text-anchor="middle" class="m">epineurial sutures through wall</text>
  </g>
  </svg>`
},
ml: {
  caption: "The learning loop. Every batch adds rows; the model proposes the next formulation; the lab tests it; the blind-prediction error is the headline metric.",
  svg: `<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}.b{fill:var(--panel);stroke:var(--line);stroke-width:1.5}</style><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="var(--teal)"/></marker></defs>
  ${[[30,"Fabrication log","conc, GNP wt%, kV, cm, mL/h, rpm, RH"],[210,"Characterisation","diameter, alignment, σ, Xc, θ"],[390,"XGBoost + SHAP","regression, group CV, explanations"],[570,"Recommendation","next formulation + why"]].map(([x,t,d])=>`<rect class="b" x="${x}" y="60" width="130" height="70" rx="10"/><text x="${x+65}" y="85" text-anchor="middle" class="t" font-weight="600">${t}</text><text x="${x+65}" y="104" text-anchor="middle" class="m" font-size="10.5">${d}</text>`).join("")}
  ${[160,340,520].map(x=>`<line x1="${x}" y1="95" x2="${x+50}" y2="95" stroke="var(--teal)" stroke-width="2" marker-end="url(#ar)"/>`).join("")}
  <path d="M635 130 C 635 190, 95 190, 95 130" fill="none" stroke="var(--amber)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#ar)"/>
  <text x="365" y="180" text-anchor="middle" class="t" font-weight="600">Lab makes it → cell assays → new rows (blind-prediction check)</text>
  <text x="365" y="212" text-anchor="middle" class="m">Targets: viability, neurite length, neurite alignment. Baselines: linear model, mean predictor.</text>
  </svg>`
},
toxicity: {
  caption: "Exposure logic for graphene. While PCL is intact, cells see polymer; release is slow and spread over years, but platelets persist and must be tracked in tissue and lymph nodes.",
  svg: `<svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}.ax{stroke:var(--ink);stroke-width:1.5}</style></defs>
  <line class="ax" x1="60" y1="160" x2="690" y2="160"/><line class="ax" x1="60" y1="160" x2="60" y2="30"/>
  <text x="375" y="190" text-anchor="middle" class="t">Time after implantation</text>
  ${[["0",60],["months",230],["1 yr",380],["2 to 4 yr",560],["beyond",680]].map(([l,x])=>`<text x="${x}" y="176" text-anchor="middle" class="m">${l}</text>`).join("")}
  <path d="M60 50 C 250 52, 420 70, 560 150 L 690 158" fill="none" stroke="var(--teal)" stroke-width="3"/>
  <text x="140" y="45" class="t" font-weight="600" fill="var(--teal)">PCL mass remaining</text>
  <path d="M60 158 C 250 156, 420 140, 560 70 L 690 60" fill="none" stroke="var(--red)" stroke-width="3"/>
  <text x="520" y="55" class="t" font-weight="600" fill="var(--red)">GNP exposed / free</text>
  <rect x="60" y="30" width="170" height="130" fill="var(--green-soft)" opacity=".5"/>
  <text x="145" y="110" text-anchor="middle" class="m">regeneration window:</text><text x="145" y="124" text-anchor="middle" class="m">cells see mostly PCL + peptide</text>
  </svg>`
},
conductivity: {
  caption: "Why a conductive bridge: insulating tubes block endogenous currents; a conductive scaffold lets fields and currents span the gap and can act as a stimulation electrode.",
  svg: `<svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" font-family="Inter,system-ui" font-size="12">
  <defs><style>.t{fill:var(--ink)}.m{fill:var(--muted)}</style></defs>
  <g>
    <rect x="30" y="70" width="80" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <rect x="110" y="75" width="120" height="30" rx="5" fill="var(--panel)" stroke="var(--muted)" stroke-width="2"/>
    <rect x="230" y="70" width="80" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <text x="170" y="60" text-anchor="middle" class="t" font-weight="600">Hollow insulating tube</text>
    <path d="M60 90 h40" stroke="var(--red)" stroke-width="2"/><text x="115" y="94" class="m" font-size="18">✕</text>
    <text x="170" y="140" text-anchor="middle" class="m">endogenous current stops at wall</text>
  </g>
  <g>
    <rect x="410" y="70" width="80" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <rect x="490" y="75" width="120" height="30" rx="5" fill="var(--teal-soft)" stroke="var(--teal)" stroke-width="2"/>
    <rect x="610" y="70" width="80" height="40" rx="18" fill="var(--amber-soft)" stroke="var(--amber)"/>
    <text x="550" y="60" text-anchor="middle" class="t" font-weight="600">NanoAxon-X conductive bridge</text>
    <path d="M440 90 H660" stroke="var(--teal)" stroke-width="2" stroke-dasharray="5 4"/>
    <text x="550" y="140" text-anchor="middle" class="m">field + current continue; axons follow aligned fibres;</text>
    <text x="550" y="156" text-anchor="middle" class="m">optional 20 Hz stimulation via the scaffold</text>
  </g>
  </svg>`
}
};
