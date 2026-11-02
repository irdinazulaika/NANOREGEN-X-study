// NANOREGEN-X / NanoAxon-X study content.
// Edit freely. Each module: id, title, tag, summary, sections[] (heading, html), keyNumbers[], traps[], cards[] (q,a).
// Numbers marked "team data" come from the team's own lab results; "lit" = typical literature values; verify before quoting to judges.

window.MODULES = [
{
  id: "overview",
  title: "Project at a glance",
  tag: "Start here",
  summary: "What NanoAxon-X is, in one breath, and the facts every member must say identically.",
  sections: [
    { heading: "One-sentence version", html: `
      <p><strong>NanoAxon-X</strong> is a biodegradable, aligned, electrically conductive nanofibre scaffold (PCL + graphene nanoplatelets) carrying a covalently bound patented bioactive peptide, designed to bridge peripheral nerve gaps, with an interpretable machine-learning tool that predicts scaffold performance from fabrication parameters before anything is built.</p>
      <p>Full title: <em>Peptide-Nanographene Functionalized PCL Scaffold for Precision Peripheral Nerve Regeneration</em>. Team: NANOREGEN-X (Team Malaysia, INO 2026, Taipei). Tagline: "The spark that brings you back".</p>` },
    { heading: "The three pillars (say them in this order)", html: `
      <ol>
        <li><strong>Structure</strong>: aligned electrospun PCL nanofibres give contact guidance so axons grow straight across the gap.</li>
        <li><strong>Signal</strong>: graphene nanoplatelets make the mat conductive (team four-point probe: below detection up to 2 wt%, 2.5 × 10⁻⁵ S/cm at 5 wt%, 0.02 S/cm at 10 wt%, 0.32 S/cm at 15 wt%, 0.45 S/cm at 20 wt%; loadings are wt% of PCL), supporting the bioelectric environment regenerating axons need.</li>
        <li><strong>Stimulus</strong>: a patented bioactive peptide (Synthesis and Bioactive Materials Laboratory, UPM) covalently attached to the fibre surface replaces short-lived growth factors.</li>
      </ol>
      <p>Plus the <strong>precision layer</strong>: XGBoost + SHAP model trained on the team's own fabrication and characterisation results plus curated literature, used to pick the next formulation to make.</p>` },
    { heading: "Status facts (do not improvise these)", html: `
      <ul>
        <li>Declared <strong>TRL 4</strong> (component validation in lab) and <strong>MRL 1</strong>.</li>
        <li>Cell model currently in use: <strong>NG108-15</strong> (mouse neuroblastoma × rat glioma hybrid). Not Schwann cells, not SH-SY5Y, even though earlier documents mention SH-SY5Y. If asked, say the model was changed and why (see Cell biology module).</li>
        <li>No animal work yet. No human data. Everything biological is in vitro.</li>
        <li>Prototype at the exhibition is a <strong>tabletop demonstrator</strong> (communication model), not an implant.</li>
        <li>Supervisor: Assoc. Prof. Dr. Haslina Ahmad (UPM). Nominating body: NNC, MOSTI.</li>
      </ul>` },
    { heading: "Roles (who answers what)", html: `
      <table><thead><tr><th>Member</th><th>Owns</th><th>Fields questions on</th></tr></thead><tbody>
      <tr><td>Irdina (UNIMAS, Team Leader)</td><td>ML tool, demonstrator software/integration, submission</td><td>Model, data, "precision", demonstrator logic, overall strategy</td></tr>
      <tr><td>Lee Ching Shien (UTM)</td><td>Scaffold fabrication, characterisation, demonstrator electronics</td><td>Electrospinning, FESEM/XRD/Raman/TGA, conductivity, mechanics</td></tr>
      <tr><td>Alice Sim Hui Li (UTM)</td><td>Peptide conjugation, surface chemistry</td><td>Coupling chemistry, peptide density, FTIR/XPS, stability</td></tr>
      <tr><td>Alia Syazana (UM)</td><td>Cell biology, business sections</td><td>Cell assays, cytotoxicity, market, BMC, pricing</td></tr>
      </tbody></table>
      <p>Rule: whoever owns the topic answers first; others add one sentence maximum. Never contradict a teammate in front of judges; correct privately after.</p>` }
  ],
  keyNumbers: [
    ["15 wt%", "chosen graphene loading (team 4-point probe)"],
    ["0.32 S/cm", "conductivity at 15 wt% (team data)"],
    ["5 to 10 wt%", "percolation window: 2.5e-5 → 0.02 S/cm (team)"],
    ["TRL 4 / MRL 1", "declared readiness"],
    ["NG108-15", "current cell line"]
  ],
  traps: [
    "Calling the scaffold a 'nerve' or saying it 'transmits the nerve signal'. The scaffold conducts electricity; the regenerated axons transmit the signal. Say: it provides a conductive, guided environment for axons to regrow.",
    "Mixing SH-SY5Y and NG108-15 in the same answer. Pick NG108-15 and explain the change if asked.",
    "Quoting a conductivity value without the loading it was measured at."
  ],
  cards: [
    ["Product name vs team name?", "Product: NanoAxon-X. Team: NANOREGEN-X. Title: Peptide-Nanographene Functionalized PCL Scaffold for Precision Peripheral Nerve Regeneration."],
    ["Three pillars?", "Structure (aligned PCL fibres), Signal (graphene conductivity), Stimulus (covalent bioactive peptide). Precision layer: XGBoost/SHAP design tool."],
    ["TRL and MRL declared?", "TRL 4, MRL 1."],
    ["Current cell line?", "NG108-15, mouse neuroblastoma × rat glioma hybrid."]
  ]
},

{
  id: "anatomy",
  title: "Peripheral nerve anatomy",
  tag: "Medical basics",
  summary: "What a nerve is made of, why the PNS can regenerate and the CNS mostly cannot, and the vocabulary judges will use.",
  sections: [
    { heading: "The neuron and its axon", html: `
      <p>A peripheral nerve is a cable of <strong>axons</strong>. Each axon is a long extension of a neuron whose cell body sits far away: motor neuron bodies in the spinal cord ventral horn, sensory neuron bodies in the <strong>dorsal root ganglion (DRG)</strong>, autonomic bodies in ganglia. A human sciatic axon can be about 1 m long. The axon is a living part of one cell, so cutting it separates the distal segment from its nucleus and protein supply. That is why the distal part dies (Wallerian degeneration) and why regeneration must come from the proximal stump.</p>` },
    { heading: "Schwann cells and myelin", html: `
      <p><strong>Schwann cells</strong> are the glia of the PNS. Myelinating Schwann cells wrap one axon segment each in layers of membrane (myelin), leaving gaps (<strong>nodes of Ranvier</strong>) so the action potential jumps node to node (<strong>saltatory conduction</strong>, up to about 50 to 120 m/s in large motor fibres). Non-myelinating (Remak) Schwann cells bundle many thin axons. Schwann cells also make the <strong>basal lamina</strong> (laminin, collagen IV) that axons grow along, and they secrete neurotrophic factors (NGF, BDNF, GDNF, NT-3).</p>
      <p>Why this matters for the project: the laminin-rich basal lamina and aligned Schwann cell columns are the natural "scaffold". Our aligned fibres and peptide try to imitate that environment.</p>` },
    { heading: "Connective tissue layers (inside to outside)", html: `
      <ul>
        <li><strong>Endoneurium</strong>: loose collagen around each axon/Schwann unit; contains capillaries and the endoneurial fluid.</li>
        <li><strong>Perineurium</strong>: tight, multilayered sheath around each <strong>fascicle</strong>; forms the blood-nerve barrier and gives tensile strength.</li>
        <li><strong>Epineurium</strong>: outer collagen coat around all fascicles; carries the vasa nervorum (blood supply). Surgeons suture the epineurium.</li>
      </ul>
      <p>A nerve can have 1 fascicle (small digital nerve) to dozens (sciatic). Fascicles branch and merge along the nerve (fascicular plexus), so after an injury the map of motor and sensory fascicles does not line up perfectly: one reason for mismatched regeneration.</p>` },
    { heading: "PNS vs CNS regeneration", html: `
      <p>The PNS regenerates because Schwann cells reprogramme into a <strong>repair phenotype</strong> (transcription factor c-Jun), clear myelin debris with macrophages, and form <strong>Bands of Büngner</strong>, aligned columns that guide sprouting axons. The CNS has oligodendrocytes (which do not reprogramme), inhibitory myelin proteins (Nogo, MAG, OMgp), a glial scar (chondroitin sulfate proteoglycans) and a weaker intrinsic growth programme. So "peripheral" is not a limitation of our scope; it is where regeneration is biologically achievable.</p>` },
    { heading: "Fibre types and what recovery means", html: `
      <table><thead><tr><th>Fibre</th><th>Diameter</th><th>Myelin</th><th>Speed</th><th>Function</th></tr></thead><tbody>
      <tr><td>Aα</td><td>12 to 20 µm</td><td>Yes</td><td>70 to 120 m/s</td><td>Motor to skeletal muscle, proprioception</td></tr>
      <tr><td>Aβ</td><td>5 to 12 µm</td><td>Yes</td><td>30 to 70 m/s</td><td>Touch, pressure</td></tr>
      <tr><td>Aδ</td><td>1 to 5 µm</td><td>Thin</td><td>5 to 30 m/s</td><td>Sharp pain, cold</td></tr>
      <tr><td>C</td><td>0.2 to 1.5 µm</td><td>No</td><td>0.5 to 2 m/s</td><td>Slow pain, warmth, autonomic</td></tr>
      </tbody></table>
      <p>Clinical recovery is judged by motor power (MRC grade 0 to 5), sensation (two-point discrimination, Semmes-Weinstein monofilaments), electrophysiology (nerve conduction studies, EMG, compound muscle action potential CMAP) and patient-reported function. In rat models the equivalents are the sciatic functional index (SFI), CMAP, gastrocnemius muscle weight and histomorphometry (myelinated axon count, g-ratio).</p>` }
  ],
  keyNumbers: [
    ["1 to 3 mm/day", "axon regeneration rate (lit)"],
    ["0.4 to 0.7", "healthy g-ratio (axon diameter / fibre diameter)"],
    ["70 to 120 m/s", "Aα conduction velocity"]
  ],
  traps: [
    "Confusing Schwann cells (PNS) with oligodendrocytes (CNS).",
    "Saying nerves 'grow back' like skin. Only the axon regrows, from the proximal stump, along surviving Schwann tubes.",
    "Saying our device treats spinal cord injury. It does not; it targets peripheral nerve gaps."
  ],
  cards: [
    ["Three connective layers of a nerve?", "Endoneurium (around axons), perineurium (around fascicles, blood-nerve barrier), epineurium (outer, vascular, sutured)."],
    ["Bands of Büngner?", "Aligned columns of repair Schwann cells inside the old basal lamina tubes that guide regenerating axons."],
    ["Why can PNS regenerate but CNS poorly?", "Repair Schwann cells + macrophage debris clearance + permissive basal lamina vs CNS inhibitory myelin, glial scar, non-reprogramming oligodendrocytes."],
    ["Saltatory conduction?", "Action potential jumping between nodes of Ranvier on myelinated axons, much faster than continuous conduction."],
    ["Where is the sensory neuron cell body?", "Dorsal root ganglion (DRG). Motor: spinal cord ventral horn."]
  ]
},

{
  id: "injury",
  title: "Nerve injury and regeneration biology",
  tag: "Medical basics",
  summary: "Seddon and Sunderland grades, Wallerian degeneration, the critical gap, and why time is the enemy.",
  sections: [
    { heading: "Classification", html: `
      <table><thead><tr><th>Seddon</th><th>Sunderland</th><th>What is damaged</th><th>Recovery</th></tr></thead><tbody>
      <tr><td>Neurapraxia</td><td>I</td><td>Local myelin, conduction block, axon intact</td><td>Weeks, full</td></tr>
      <tr><td>Axonotmesis</td><td>II</td><td>Axon cut, endoneurium intact</td><td>Good, 1 to 3 mm/day along intact tubes</td></tr>
      <tr><td>Axonotmesis</td><td>III</td><td>Axon + endoneurium, perineurium intact</td><td>Partial, misdirection</td></tr>
      <tr><td>Axonotmesis</td><td>IV</td><td>Axon + endo + perineurium, epineurium intact (neuroma in continuity)</td><td>Poor without surgery</td></tr>
      <tr><td>Neurotmesis</td><td>V</td><td>Complete transection</td><td>None without surgery</td></tr>
      </tbody></table>
      <p>Our product targets <strong>Sunderland V with segmental loss</strong>: the ends cannot be joined without tension, so a bridge is needed. Also Sunderland IV after neuroma resection creates a gap.</p>` },
    { heading: "Wallerian degeneration (what happens distal to the cut)", html: `
      <ol>
        <li>Hours: distal axon fragments (calcium influx, calpain, SARM1 pathway).</li>
        <li>Days 1 to 7: Schwann cells dedifferentiate (c-Jun), stop making myelin, break down myelin, proliferate; macrophages recruited to clear debris.</li>
        <li>Week 1 onward: Schwann cells align into Bands of Büngner inside the basal lamina tubes and upregulate NGF, BDNF, GDNF, laminin, p75.</li>
        <li>Proximal stump: growth cone forms, sends many sprouts; the ones that reach a tube continue, the rest prune.</li>
        <li>Reinnervation: axon reaches target, Schwann cells remyelinate (thinner myelin, shorter internodes), muscle endplates reform.</li>
      </ol>` },
    { heading: "Why timing and distance decide the outcome", html: `
      <ul>
        <li>Regeneration is slow (about 1 mm/day in humans). A 30 cm gap from shoulder to hand takes about a year.</li>
        <li>Repair Schwann cells lose their supportive phenotype after roughly 2 to 3 months of chronic denervation; the distal tubes shrink and fibrose.</li>
        <li>Denervated muscle atrophies; motor endplates degrade; after 12 to 18 months reinnervation gives poor function even if axons arrive.</li>
        <li>So the device must let axons cross the gap fast and in the right direction, and the surgeon must be able to implant it in one sitting.</li>
      </ul>` },
    { heading: "Critical gap size", html: `
      <p>In rat sciatic nerve, a 10 mm gap is the standard "critical" defect used to test conduits; 15 mm is a stringent model. In humans, hollow conduits are recommended for gaps up to about 3 cm (many surgeons use them only under 1 to 2 cm, and for small sensory nerves); longer gaps go to autograft. The commercial opening for an active scaffold is precisely the 1 to 5 cm range where hollow tubes underperform and autograft is the only good option.</p>` },
    { heading: "Epidemiology talking points", html: `
      <ul>
        <li>Peripheral nerve injury is present in roughly 2 to 3% of trauma patients (classic Noble et al. 1998 figure) and up to about 5% when plexus and root injuries are included.</li>
        <li>Causes: road traffic accidents, machinery and workplace injuries, lacerations, fractures, iatrogenic injury during surgery, and tumour resection.</li>
        <li>Patients are mostly working-age adults, so the societal cost is lost work and long rehabilitation, which is why we frame impact around returning people to work (SDG 3 and 9).</li>
        <li>Upper limb (median, ulnar, radial, digital nerves) dominates; lower limb sciatic/peroneal injuries are fewer but severe.</li>
      </ul>` }
  ],
  keyNumbers: [
    ["Sunderland V", "our target injury (complete transection with gap)"],
    ["10 mm", "standard rat sciatic critical gap"],
    ["~3 cm", "upper limit for hollow conduits in humans"],
    ["2 to 3%", "of trauma patients have PNI (Noble 1998)"],
    ["12 to 18 months", "after which denervated muscle recovers poorly"]
  ],
  traps: [
    "Claiming the device will work for any gap length. Position it for 1 to 5 cm, with longer gaps as a future goal needing in vivo proof.",
    "Forgetting that misdirection (motor axons into sensory tubes) is a major cause of poor outcome; alignment helps but does not solve it."
  ],
  cards: [
    ["Seddon three grades?", "Neurapraxia (conduction block), axonotmesis (axon cut, sheath intact), neurotmesis (complete transection)."],
    ["Key transcription factor for repair Schwann cell?", "c-Jun."],
    ["Human axon regeneration speed?", "About 1 mm/day (1 to 3 mm/day range)."],
    ["Why chronic denervation is bad?", "Repair Schwann cells lose support phenotype after 2 to 3 months, distal tubes fibrose, muscle atrophies and endplates degrade by 12 to 18 months."],
    ["Standard rodent model for conduits?", "Rat sciatic 10 mm gap; read out by SFI, CMAP, histomorphometry, gastrocnemius weight."]
  ]
},

{
  id: "clinical",
  title: "Current clinical options and competitors",
  tag: "Medical basics",
  summary: "What surgeons do today, what products exist, and exactly where NanoAxon-X fits.",
  sections: [
    { heading: "Surgical ladder", html: `
      <ol>
        <li><strong>Direct end-to-end coaptation</strong>: epineurial or fascicular suture when ends meet without tension (gap under about 5 mm). Tension kills regeneration by collapsing blood supply.</li>
        <li><strong>Autograft</strong>: gold standard for gaps over 3 cm. Usually the sural nerve from the calf (also medial antebrachial cutaneous). Gives Schwann cells, basal lamina, correct architecture. Downsides: second surgery site, permanent numbness at donor site, 10 to 40% donor-site morbidity reports, limited length (sural gives 30 to 40 cm), diameter mismatch, and only about 40 to 50% of patients reach good functional recovery.</li>
            <li><strong>Processed nerve allograft</strong>: decellularised human cadaver nerve (AxoGen Avance). Keeps basal lamina, no donor site, no immunosuppression. Expensive, sourcing and regulation as a human tissue product, limited availability outside the US.</li>
        <li><strong>Hollow nerve conduits</strong>: tubes that keep the gap enclosed so the fibrin cable can form. Approved for short gaps (under about 3 cm) and better for small sensory nerves. No guidance inside, no cells, no cues.</li>
        <li><strong>Nerve transfer</strong>: rerouting a less important nearby nerve; a different strategy, not a bridge.</li>
      </ol>` },
    { heading: "Commercial conduits to name", html: `
      <table><thead><tr><th>Product</th><th>Company</th><th>Material</th><th>Degrades</th><th>Note</th></tr></thead><tbody>
      <tr><td>NeuraGen / NeuraWrap</td><td>Integra</td><td>Type I collagen</td><td>Yes, months</td><td>FDA 510(k), widely used</td></tr>
      <tr><td>Neurotube</td><td>Synovis / Baxter</td><td>Polyglycolic acid (PGA)</td><td>Yes, fast (3 months)</td><td>Woven mesh tube</td></tr>
      <tr><td>Neurolac</td><td>Polyganics</td><td>Poly(DL-lactide-co-ε-caprolactone)</td><td>Yes, 16 to 24 months</td><td>Transparent, stiffer; proves caprolactone polymers are already implanted in nerves</td></tr>
      <tr><td>NeuroMatrix / Neuroflex</td><td>Stryker (ex Collagen Matrix)</td><td>Collagen</td><td>Yes</td><td>Flexible version</td></tr>
      <tr><td>Avance</td><td>AxoGen</td><td>Decellularised human nerve</td><td>Remodelled</td><td>Allograft, not a conduit</td></tr>
      <tr><td>Nerbridge</td><td>Toyobo</td><td>PGA tube filled with collagen sponge</td><td>Yes</td><td>Japan; closest "filled conduit" concept</td></tr>
      </tbody></table>
      <p>Indicative prices (lit, verify before quoting): hollow conduits roughly USD 1,000 to 3,000 per unit; Avance allograft several thousand USD per cm-length segment. Autograft cost is mostly surgical time and the second site.</p>` },
    { heading: "Where NanoAxon-X sits", html: `
      <ul>
        <li>Versus hollow conduit: we add internal aligned guidance, conductivity and a bound bioactive cue. Same implant workflow for the surgeon.</li>
        <li>Versus autograft: no donor site, off the shelf, any length can be manufactured. Not yet proven equivalent; that is the in vivo milestone.</li>
        <li>Versus allograft: synthetic, no human tissue supply chain, lower cost of goods, simpler regulation than a human tissue product in most markets.</li>
        <li>Versus growth-factor-loaded conduits (research stage): covalent peptide is stable, cheaper, and avoids burst release and dosing problems.</li>
      </ul>` },
    { heading: "Honest limitations to volunteer before judges find them", html: `
      <ul>
        <li>No in vivo data yet. All comparisons to autograft are design arguments, not outcomes.</li>
        <li>Electrospun mats are thin; a tubular, suturable, kink-resistant conduit still has to be engineered (rolling the mat, outer sheath, wall porosity).</li>
        <li>Graphene is non-degradable; its fate after PCL resorbs must be studied (see Toxicity module).</li>
      </ul>` }
  ],
  keyNumbers: [
    ["< 5 mm", "direct suture possible"],
    ["< 3 cm", "hollow conduit range"],
    ["> 3 cm", "autograft territory"],
    ["40 to 50%", "autograft patients with good recovery (lit)"]
  ],
  traps: [
    "Saying autograft is 'bad'. It is the gold standard; our pitch is to match it without the donor site.",
    "Not knowing a single competitor product by name. Know NeuraGen, Neurotube, Neurolac, Avance."
  ],
  cards: [
    ["Gold standard for long gaps?", "Autologous nerve graft, typically sural nerve."],
    ["Main downsides of autograft?", "Second surgical site, donor numbness/morbidity, limited supply, size mismatch, only ~40 to 50% good recovery."],
    ["Name three commercial conduits and materials.", "NeuraGen (collagen), Neurotube (PGA), Neurolac (PLCL)."],
    ["Which existing product proves caprolactone polymers are implantable in nerve?", "Neurolac (poly(DL-lactide-co-caprolactone)), CE marked and FDA cleared."],
    ["What is Avance?", "AxoGen's decellularised human nerve allograft, keeps basal lamina, no donor site, costly and tissue-sourced."]
  ]
},

{
  id: "design",
  title: "Scaffold design principles",
  tag: "Science",
  summary: "The checklist a nerve scaffold must satisfy, and which items NanoAxon-X already addresses.",
  sections: [
    { heading: "Design requirements", html: `
      <table><thead><tr><th>Requirement</th><th>Why</th><th>NanoAxon-X status</th></tr></thead><tbody>
      <tr><td>Topographical guidance</td><td>Axons and Schwann cells follow aligned fibres (contact guidance); random fibres give random growth</td><td>Aligned electrospun PCL, confirmed by FESEM</td></tr>
      <tr><td>Fibre diameter in the right window</td><td>Submicron to ~1 µm fibres give best neurite extension and Schwann migration; very thin (<300 nm) reduce alignment cues, very thick behave like flat surfaces</td><td>Measured per batch; model input</td></tr>
      <tr><td>Porosity and permeability</td><td>Nutrient and oxygen exchange, waste removal, but pores small enough to exclude fibroblast scar invasion (several µm)</td><td>Mat is porous; conduit wall design pending</td></tr>
      <tr><td>Mechanical match</td><td>Nerve tissue modulus is low (sub-MPa to a few MPa); too stiff causes compression and mismatch, too soft collapses</td><td>Tensile testing planned; PCL is compliant</td></tr>
      <tr><td>Degradation timed to regeneration</td><td>Support for months, then disappear; no second surgery; acidic by-products minimal</td><td>PCL degrades slowly (years in bulk, faster as nanofibres); acceptable for long gaps</td></tr>
      <tr><td>Electrical conductivity</td><td>Supports endogenous bioelectric cues and enables electrical stimulation therapies</td><td>Graphene network above percolation</td></tr>
      <tr><td>Bioactive cue</td><td>Cells need adhesion and neurotrophic signals; bare PCL is bio-inert and hydrophobic</td><td>Covalent peptide</td></tr>
      <tr><td>Surgical handling</td><td>Suturable, kink resistant, sterilisable, shelf stable</td><td>To be engineered at conduit stage</td></tr>
      </tbody></table>` },
    { heading: "Contact guidance mechanism (one paragraph answer)", html: `
      <p>Cells sense fibre topography through integrin focal adhesions. On aligned fibres, adhesions and actin stress fibres orient along the fibre axis; the nucleus elongates and mechanotransduction pathways (YAP/TAZ, RhoA/ROCK) bias growth cone extension along the fibres. Schwann cells also elongate and migrate faster on aligned substrates, which matters because Schwann cells lead and axons follow. Result: straighter, longer neurites and fewer misdirected sprouts.</p>` },
    { heading: "Hierarchy: mat → conduit", html: `
      <p>The electrospun mat is the functional surface. The intended device is a conduit: either a rolled mat forming a lumen with aligned fibres on the inner wall, or a hollow outer sheath with aligned fibre "filler" strands inside (intraluminal guidance). Multichannel designs mimic fascicles. Judges will ask which one; answer: rolled aligned mat with an outer electrospun random layer for strength is the baseline, multichannel is a later iteration guided by the model.</p>` }
  ],
  keyNumbers: [
    ["0.5 to 1 µm", "effective fibre diameter window (lit)"],
    ["sub-MPa to few MPa", "nerve tissue modulus (lit)"],
    ["> 70%", "typical scaffold porosity target"]
  ],
  traps: [
    "Confusing fibre alignment (orientation) with fibre diameter; judges test both.",
    "Claiming the mat is the final product. It is the functional layer of a future conduit."
  ],
  cards: [
    ["Why aligned fibres?", "Contact guidance: integrin adhesions and cytoskeleton orient along fibres, Schwann cells migrate faster, neurites grow straighter and longer."],
    ["Ideal fibre diameter?", "Roughly 0.5 to 1 µm for neurite extension and Schwann cell migration (lit)."],
    ["Degradation timing goal?", "Support for the months regeneration takes, then resorb; PCL fulfils this for long gaps."],
    ["Why porosity matters?", "Nutrient/waste exchange and vascular ingrowth while excluding fibroblast scar invasion."]
  ]
},

{
  id: "materials",
  title: "Materials: PCL, graphene, peptide",
  tag: "Science",
  summary: "Properties, chemistry and the arguments for each component.",
  sections: [
    { heading: "Polycaprolactone (PCL)", html: `
      <ul>
        <li>Aliphatic polyester, repeat unit –[O–(CH₂)₅–CO]–. Semicrystalline. Tm about 60 °C, Tg about −60 °C (rubbery at body temperature, hence flexible).</li>
        <li>Degrades by hydrolysis of ester bonds to 6-hydroxycaproic acid, which enters the citric acid cycle. Bulk PCL takes 2 to 4 years; thin electrospun fibres degrade faster because of surface area. Slower and less acidic than PLGA/PGA, so less inflammatory burst.</li>
        <li>Regulatory history: used in FDA-cleared and CE-marked implants and sutures; caprolactone copolymer already in a nerve conduit (Neurolac). Gives a "known material" argument.</li>
        <li>Weaknesses: hydrophobic (water contact angle around 110 to 130° as fibres), no cell-binding motifs, so cells attach poorly without surface modification. This is exactly why we add the peptide.</li>
        <li>Electrospinning solvents: dichloromethane (DCM) alone or DCM/DMF; chloroform/methanol; HFIP. Team's adjusted method: 15% w/v PCL in DCM.</li>
      </ul>` },
    { heading: "Graphene nanoplatelets (GNP)", html: `
      <ul>
        <li>Stacks of a few to tens of graphene layers, lateral size of micrometres, thickness a few nm. Pristine sp² carbon, not graphene oxide (GO). Team note: the reference sample labelled "GO" was pristine GNP; always say GNP.</li>
        <li>Why conductive: delocalised π electrons. In an insulating polymer, conductivity appears when platelets touch to form a continuous network: the <strong>percolation threshold</strong>. Below it, conductivity rises slowly; above it, it jumps by orders of magnitude then plateaus.</li>
        <li>Team data (loading as wt% of PCL): 0.2 to 2 wt% below detection; 5 wt% about 2.5 × 10⁻⁵ S/cm; 10 wt% about 0.02 S/cm; 15 wt% 0.32 S/cm (mean of 5 to 6 readings; one first reading of 3 S/cm was excluded and re-measured at 0.42); 20 wt% about 0.45 S/cm, a small gain for worse fibre quality. Low loadings were undetectable by XRD and EDX but visible by Raman.</li>
        <li>Extra benefits: nucleating agent for PCL (Tm up 4 to 5 °C, crystallinity up 10 to 15 points by DSC), stiffer fibres, radical scavenging reported in literature.</li>
        <li>Costs: GNP is cheap compared with CVD graphene or carbon nanotubes; dispersion in DCM needs sonication and may need a surfactant or GO-type functionalisation to avoid agglomerates.</li>
        <li>GO vs rGO vs GNP in one line: GO is oxidised, hydrophilic, insulating, easy to disperse; rGO partially restores conductivity; GNP is conductive and hydrophobic from the start.</li>
      </ul>` },
    { heading: "The bioactive peptide", html: `
      <ul>
        <li>Patented, synthesised and characterised at the Synthesis and Bioactive Materials Laboratory, Dept of Chemistry, UPM (Assoc. Prof. Dr. Haslina Ahmad). The team does not disclose the sequence in public sessions; say "a short synthetic bioactive peptide covered by a UPM patent application" and describe its function class.</li>
        <li>Know its mechanism class before the competition: adhesion motif (integrin-binding, like RGD), laminin mimetic (IKVAV, YIGSR, neurite-promoting), neurotrophin mimetic (binds TrkB/p75 like BDNF/NGF mimics), or Schwann-cell recruiting. Judges will ask "what does it do to the cell?" and "what receptor?".</li>
        <li>Why a peptide instead of a growth factor: NGF/BDNF half-lives in tissue are minutes to hours, they are expensive (USD thousands per mg), need cold chain, and burst-release from scaffolds. Short peptides are stable to sterilisation and storage, cheap by solid-phase synthesis, low immunogenicity, and can be presented at controlled surface density.</li>
        <li>Why covalent instead of adsorbed: adsorbed peptide desorbs within hours to days; covalent amide bonds keep the cue in place for the lifetime of the fibre surface and allow density control.</li>
      </ul>` },
    { heading: "Conjugation chemistry (Alice answers)", html: `
      <ol>
        <li>PCL has no reactive groups, so first create them: <strong>aminolysis</strong> with hexamethylenediamine (gives –NH₂), <strong>alkaline hydrolysis</strong> (gives –COOH/–OH), <strong>oxygen plasma</strong> (gives –OH/–COOH), or coat with <strong>polydopamine</strong> (mussel-inspired catechol/quinone layer that binds amines and thiols).</li>
        <li>Then couple: <strong>EDC/NHS</strong> activates carboxyls to NHS esters that react with peptide N-terminus or lysine amines to form amide bonds (pH 5 to 6 for activation, 7 to 8 for coupling, MES/PBS buffers). Alternatives: Michael addition of a cysteine thiol onto polydopamine or maleimide; click chemistry (azide-alkyne) for orientation control.</li>
        <li>Confirm: FTIR amide I (about 1650 cm⁻¹) and amide II (about 1540 cm⁻¹) bands that bare PCL lacks; XPS N 1s signal (PCL has no nitrogen); drop in water contact angle; fluorescent-tag or BCA/ninhydrin assays for surface density (typical effective range pmol to nmol per cm²).</li>
        <li>Stability: incubate in culture medium at 37 °C for days, re-measure density; covalent should hold, adsorbed control should wash off.</li>
      </ol>` }
  ],
  keyNumbers: [
    ["~60 °C / −60 °C", "PCL Tm / Tg"],
    ["2 to 4 years", "bulk PCL degradation (lit)"],
    ["1650 / 1540 cm⁻¹", "FTIR amide I / II confirming peptide"],
    ["Tm +4 to 5 °C", "graphene nucleation effect (team DSC)"],
    ["0.32 S/cm", "σ at 15 wt% GNP (team)"]
  ],
  traps: [
    "Saying 'graphene oxide' when the material is pristine graphene nanoplatelets.",
    "Claiming PCL degrades in months. It is slow; that is a feature for long gaps and a limitation if judges want faster resorption.",
    "Being unable to say what functional group on PCL the peptide bonds to."
  ],
  cards: [
    ["PCL degradation product?", "6-hydroxycaproic acid via ester hydrolysis; metabolised in the citric acid cycle."],
    ["Percolation threshold?", "Filler fraction at which a continuous conductive network forms and conductivity jumps by orders of magnitude; team data 5 to 10 wt%."],
    ["Why peptide over growth factor?", "Stability, cost, no cold chain, controlled covalent density, low immunogenicity; growth factors have minute-to-hour half-lives and burst release."],
    ["How is peptide attached to PCL?", "Surface activation (aminolysis/hydrolysis/plasma/polydopamine) then EDC/NHS amide coupling; confirmed by FTIR amide bands, XPS N 1s, contact angle."],
    ["GO vs GNP?", "GO: oxidised, hydrophilic, insulating. GNP: pristine stacked graphene, conductive, hydrophobic."]
  ]
},

{
  id: "fabrication",
  title: "Electrospinning and fabrication",
  tag: "Science",
  summary: "How the mat is made, which knobs control fibre diameter and alignment, and what went wrong in the team's own batches.",
  sections: [
    { heading: "Electrospinning in 60 seconds", html: `
      <p>A polymer solution is pumped through a needle held at high voltage (10 to 25 kV). Charge repulsion overcomes surface tension, a Taylor cone forms, a jet whips and thins while solvent evaporates, and solid fibres land on a grounded collector. A <strong>rotating drum or mandrel</strong> at high surface speed (hundreds to thousands of rpm, several m/s) stretches fibres into alignment; a static plate gives random mats. Parallel-plate collectors also align fibres by electrostatics.</p>` },
    { heading: "Parameters and their effect", html: `
      <table><thead><tr><th>Parameter</th><th>Increase it →</th></tr></thead><tbody>
      <tr><td>Polymer concentration / viscosity</td><td>Thicker fibres; too low gives beads (electrospraying), too high blocks needle</td></tr>
      <tr><td>Voltage</td><td>Usually thinner fibres (more stretching) up to a point, then instability and beads</td></tr>
      <tr><td>Flow rate</td><td>Thicker fibres, more residual solvent, fused fibres</td></tr>
      <tr><td>Needle to collector distance</td><td>More drying, thinner fibres; too short gives wet, fused mats</td></tr>
      <tr><td>Collector speed</td><td>Better alignment up to a limit, then fibre breakage</td></tr>
      <tr><td>Solvent volatility (DCM high)</td><td>Fast drying, dry fibres, but needle clogging and ribbons</td></tr>
      <tr><td>Humidity</td><td>Surface pores on fibres (breath-figure), weaker fibres</td></tr>
      <tr><td>Graphene loading</td><td>Higher viscosity and conductivity of the solution, thicker/rougher fibres, agglomerates and beads at high loading</td></tr>
      </tbody></table>` },
    { heading: "Team batch lessons (Lee answers)", html: `
      <ul>
        <li>Samples 3, 4, 5, 8: aligned, bead-free fibres. Sample 1: micro-ribbons (jet collapsed before drying; too fast solvent loss on skin, too high flow). Sample 6: beaded and fused (low viscosity or high humidity, insufficient drying).</li>
        <li>Adjusted method (22 Oct run): 15% w/v PCL in DCM gave bead-free aligned fibres, median diameter 359 nm, 72 to 84% within ±10° of the collector axis. Earlier 8 Oct batches: median 245 nm (0.2% graphene) and 152 nm (0.6% graphene), with a minority of thick porous fibres.</li>
        <li>EDX showed PBS salt contamination (Na, Cl, P, K) on samples that had been in buffer and not rinsed with deionised water; always rinse and dry before SEM/EDX.</li>
        <li>Mats were too thin for XRD (aluminium holder peaks dominated). Either stack layers or spin longer for XRD samples.</li>
        <li>Every batch gets a fabrication log line (concentration, voltage, distance, flow, rpm, humidity, temperature, GNP wt%) because those are the ML inputs.</li>
      </ul>` },
    { heading: "Sterilisation and storage", html: `
      <ul>
        <li>Lab stage: UV 30 min plus 70% ethanol soak, then PBS rinse. Fine for cell work, not for a product.</li>
        <li>Product stage: ethylene oxide (EtO) is standard for PCL (low temperature, but residuals must be aerated out, ISO 10993-7). Gamma irradiation causes chain scission in PCL and may damage the peptide. Autoclave is impossible (Tm 60 °C). Peptide stability under the chosen method must be shown.</li>
        <li>Shelf life: dry, sealed, room temperature; PCL is stable; peptide stability is the item to test (accelerated ageing).</li>
      </ul>` }
  ],
  keyNumbers: [
    ["15% w/v in DCM", "team's adjusted PCL solution"],
    ["10 to 25 kV", "typical spinning voltage"],
    ["EtO", "likely product sterilisation route"]
  ],
  traps: [
    "Not knowing why alignment happens (mechanical stretching by the rotating collector and electrostatic field shaping).",
    "Saying the scaffold can be autoclaved."
  ],
  cards: [
    ["How do you get aligned fibres?", "High-speed rotating drum/mandrel stretches landing fibres; parallel electrodes also align electrostatically."],
    ["Cause of beads?", "Low viscosity/concentration, surface tension dominating, excessive voltage, high humidity."],
    ["Cause of ribbons?", "Skin forms on jet and collapses before core dries: very volatile solvent, high flow, short distance."],
    ["Sterilisation options for PCL?", "EtO (standard, needs aeration), gamma (chain scission risk), UV/ethanol (lab only), no autoclave."]
  ]
},

{
  id: "characterisation",
  title: "Characterisation toolkit",
  tag: "Science",
  summary: "Each technique: what it proves, what it cannot, and the team's actual numbers.",
  sections: [
    { heading: "Technique map", html: `
      <table><thead><tr><th>Technique</th><th>Proves</th><th>Cannot</th><th>Team result</th></tr></thead><tbody>
      <tr><td>FESEM</td><td>Fibre diameter, alignment, beads, pores, agglomerates</td><td>Chemistry, bulk composition</td><td>Median 359 nm (22 Oct), 245 and 152 nm (8 Oct); 79% within ±10°; peptide-coated fibres show a rough textured surface at 100 k×</td></tr>
      <tr><td>EDX</td><td>Elemental map (C, O, N, contaminants)</td><td>Distinguish graphene from PCL carbon</td><td>Salt contamination detected; graphene not resolvable</td></tr>
      <tr><td>XRD</td><td>PCL crystalline peaks ~21.4° (110) and 23.7° (200); graphite (002) ~26.5°</td><td>Detect GNP below ~1 wt%; thin mats</td><td>Weak PCL signal, GNP undetectable at 0.2 to 0.6 wt%</td></tr>
      <tr><td>Raman</td><td>Graphene present: D ~1350, G ~1580, 2D ~2700 cm⁻¹; I_D/I_G shows defects; signal scales with loading</td><td>Quantify wt% exactly</td><td>Confirmed GNP incorporation scaling with loading</td></tr>
      <tr><td>TGA/DSC</td><td>Thermal stability, Tm, crystallinity (ΔHm / ΔHm° of 139.5 J/g for 100% PCL), filler residue</td><td>Morphology</td><td>Tm +4 to 5 °C, crystallinity +10 to 15 points, stability unchanged</td></tr>
      <tr><td>4-point probe</td><td>Sheet resistance → conductivity σ = 1/(R_s × t)</td><td>Through-thickness conductivity in wet state</td><td>Below detection to 2 wt%; 2.5e-5 (5), 0.02 (10), 0.32 (15), 0.45 (20) S/cm</td></tr>
      <tr><td>FTIR</td><td>Peptide amide bands; PCL C=O 1725 cm⁻¹</td><td>Surface-only (use ATR)</td><td>Planned</td></tr>
      <tr><td>Contact angle</td><td>Wettability change after functionalisation</td><td>Peptide identity</td><td>Planned</td></tr>
      <tr><td>Tensile test</td><td>Modulus, strength, elongation; aligned mats anisotropic</td><td>In vivo mechanics</td><td>Planned</td></tr>
      <tr><td>XPS</td><td>Surface N from peptide, surface C/O ratio</td><td>Depth</td><td>Recommended</td></tr>
      </tbody></table>` },
    { heading: "Numbers to know for Raman", html: `
      <p>D band (~1350 cm⁻¹) arises from defects and edges; G band (~1580 cm⁻¹) from in-plane sp² stretching; 2D band (~2700 cm⁻¹) from second-order process and its shape reflects layer number. Low I_D/I_G means more pristine graphene. In PCL composite spectra, PCL bands (C=O ~1725, CH₂ ~1440, ~2900 cm⁻¹) sit alongside. Raman was the only technique that detected graphene at low loading because it is sensitive to sp² carbon even in small amounts.</p>` },
    { heading: "Alignment quantification", html: `
      <p>Structure-tensor analysis of the FESEM images gives the orientation distribution. Team result for the 0.2% graphene mat: 79% of fibre signal within ±10° and 93% within ±20° of the collector axis; 22 Oct run: 72 to 84% within ±10°. "Aligned" always comes with that number.</p>` },
    { heading: "Conductivity calculation", html: `
      <p>Four-point probe gives sheet resistance R_s (Ω/sq) from V/I with geometric correction factor (4.532 for a thin large sheet). Conductivity σ = 1/(R_s × t) where t is mat thickness. Thickness uncertainty dominates error; measure thickness by micrometer or SEM cross-section and report ± SD. Judges may ask if 0.32 S/cm is enough: nerve tissue conductivity is about 0.1 to 1 S/m (that is 0.001 to 0.01 S/cm), so the scaffold is far more conductive than tissue; the target is not matching tissue but providing a continuous conductive path.</p>` }
  ],
  keyNumbers: [
    ["1350 / 1580 / 2700 cm⁻¹", "Raman D / G / 2D"],
    ["21.4° and 23.7°", "PCL XRD peaks (2θ)"],
    ["139.5 J/g", "ΔHm° for 100% crystalline PCL"],
    ["σ = 1/(R_s·t)", "conductivity from sheet resistance"]
  ],
  traps: [
    "Claiming XRD or EDX 'confirmed graphene'. They did not at low loading; Raman did.",
    "Reporting conductivity without thickness and loading.",
    "Saying 'aligned' without a quantitative orientation metric."
  ],
  cards: [
    ["Which technique confirmed graphene incorporation?", "Raman (D, G, 2D bands scaling with loading). XRD and EDX could not at 0.2 to 0.6 wt%."],
    ["Graphene effect on PCL thermal properties?", "Nucleating agent: Tm up 4 to 5 °C, crystallinity up 10 to 15 points, thermal stability unchanged (team TGA/DSC)."],
    ["How is crystallinity calculated from DSC?", "Xc = ΔHm / (ΔHm° × PCL weight fraction) with ΔHm° = 139.5 J/g."],
    ["Why did EDX show Na, Cl, P?", "PBS salt residue; rinse with DI water before SEM."]
  ]
},

{
  id: "cells",
  title: "Cell biology and in vitro validation",
  tag: "Science",
  summary: "NG108-15, why not Schwann or SH-SY5Y yet, assays, controls and statistics judges expect.",
  sections: [
    { heading: "NG108-15 in one paragraph", html: `
      <p>NG108-15 is a hybrid of mouse neuroblastoma (N18TG2) and rat glioma (C6-BU-1) cells. It is immortal, grows in DMEM with HAT supplement, and differentiates into neuron-like cells with long neurites when serum is reduced and dibutyryl-cAMP (or forskolin/retinoic acid) is added. It expresses cholinergic markers and forms functional synapses with muscle cells in co-culture, which is why it is a classic model for neurite outgrowth and neuromuscular junction studies. Advantages: cheap, fast, reproducible, strong neurite extension that is easy to quantify. Limitations: a tumour-derived hybrid, not a primary neuron, not human, and it does not represent Schwann cell biology.</p>` },
    { heading: "Why the model changed (and what comes next)", html: `
      <ul>
        <li>Earlier proposal text named SH-SY5Y (human neuroblastoma, retinoic acid differentiation). The team moved to NG108-15 because of availability in the partner lab and because it gives stronger, faster neurite outgrowth for a screening assay. Say that plainly.</li>
        <li>Schwann cells (RSC96 rat line or primary rat Schwann cells, markers S100β, p75, GFAP) are the next model: they are the cells that first colonise a conduit. Alia's role covers this. Then DRG explants (mixed neurons and glia, closest to the real injury), then rat sciatic in vivo.</li>
        <li>Ladder to say: cell line screening → Schwann cell migration/alignment → DRG explant neurite length → rat sciatic 10 mm gap → large animal if funded → first-in-human.</li>
      </ul>` },
    { heading: "Assays and readouts", html: `
      <table><thead><tr><th>Question</th><th>Assay</th><th>Readout</th></tr></thead><tbody>
      <tr><td>Is the material toxic?</td><td>ISO 10993-5 extract test (MTT/alamarBlue on L929 fibroblasts or target cells), direct contact</td><td>Viability ≥ 70% of control = non-cytotoxic</td></tr>
      <tr><td>Do cells attach?</td><td>Seeding efficiency at 4 to 24 h, DAPI counts, live/dead (calcein-AM/ethidium)</td><td>Attached cells per mm²</td></tr>
      <tr><td>Do they survive and grow?</td><td>MTT/CCK-8/alamarBlue at days 1, 3, 7</td><td>Metabolic activity vs TCP control</td></tr>
      <tr><td>Do neurites grow and align?</td><td>Immunofluorescence β-III tubulin (neurons), DAPI; ImageJ NeuronJ/Simple Neurite Tracer</td><td>Mean/max neurite length, % cells with neurites, angle vs fibre axis</td></tr>
      <tr><td>Schwann phenotype?</td><td>S100β, p75, elongation (aspect ratio), migration (scratch or Boyden)</td><td>Alignment, migration speed</td></tr>
      <tr><td>Gene level?</td><td>qPCR for GAP-43, β-III tubulin, NGF, BDNF, MBP, S100</td><td>Fold change</td></tr>
      </tbody></table>` },
    { heading: "Controls and statistics (judges always ask)", html: `
      <ul>
        <li>Groups: tissue culture plastic; random PCL; aligned PCL; aligned PCL+GNP; aligned PCL+peptide; aligned PCL+GNP+peptide (full device). Add an adsorbed-peptide control to prove covalent matters.</li>
        <li>Replicates: at least n = 3 independent scaffolds per group, at least 3 images per scaffold, ≥ 50 cells per image for neurite metrics.</li>
        <li>Statistics: one-way ANOVA with Tukey post hoc (or Kruskal-Wallis if non-normal); report mean ± SD and p values; show effect size, not just significance.</li>
        <li>Blinding: whoever quantifies images should not know the group.</li>
        <li>Graphene optical artefact: black fibres absorb fluorescence; image settings must be matched and stated.</li>
      </ul>` }
  ],
  keyNumbers: [
    ["≥ 70%", "viability threshold for non-cytotoxic (ISO 10993-5)"],
    ["n ≥ 3", "independent scaffolds per group"],
    ["β-III tubulin", "neuronal marker for neurite tracing"],
    ["S100β / p75", "Schwann cell markers"]
  ],
  traps: [
    "Saying NG108-15 'are nerve cells from a patient'. They are an immortal rodent hybrid line.",
    "Presenting a single experiment without replicates or statistics.",
    "Claiming 'biocompatible' from one MTT assay. Say 'non-cytotoxic in vitro per ISO 10993-5 approach'."
  ],
  cards: [
    ["What is NG108-15?", "Mouse neuroblastoma × rat glioma hybrid; differentiates with low serum + dibutyryl-cAMP; classic neurite outgrowth and NMJ model."],
    ["Why not Schwann cells first?", "Screening speed with a neurite-extending line; Schwann cells (RSC96/primary, S100β/p75) are the next model because they colonise conduits first."],
    ["ISO 10993-5 pass criterion?", "Cell viability not below 70% of negative control."],
    ["Essential control to prove covalent conjugation matters?", "Adsorbed (non-covalent) peptide scaffold washed before seeding."],
    ["Neurite quantification markers/tools?", "β-III tubulin immunostaining, DAPI; NeuronJ or Simple Neurite Tracer in ImageJ; report length, % neurite-bearing cells, alignment angle."]
  ]
},

{
  id: "conductivity",
  title: "Why conductivity helps nerves",
  tag: "Science",
  summary: "The bioelectric rationale, the evidence base, and how to phrase it without overclaiming.",
  sections: [
    { heading: "Three mechanisms (say all three)", html: `
      <ol>
        <li><strong>Endogenous electric fields</strong>: injured tissue sets up ionic currents and fields (tens to hundreds of mV/mm) that steer growth cones (galvanotaxis). A conductive substrate helps those fields and currents distribute along the gap rather than being blocked by an insulating tube.</li>
        <li><strong>Cell-level effects on conductive surfaces even without stimulation</strong>: conductive substrates (polypyrrole, PEDOT, graphene, CNT composites) increase neurite length, Schwann cell proliferation and neurotrophic factor secretion in many studies, attributed to altered protein adsorption, local charge, and calcium signalling.</li>
        <li><strong>Enables electrical stimulation therapy</strong>: brief low-frequency stimulation (clinical protocol: 1 hour at 20 Hz at the time of repair, Gordon and colleagues) accelerates axon crossing of the repair site, raises BDNF/trkB and improves reinnervation. A conductive scaffold is the natural electrode to deliver that.</li>
      </ol>` },
    { heading: "Evidence to cite by name", html: `
      <ul>
        <li>Gordon T. et al.: 1 h 20 Hz electrical stimulation after carpal tunnel release and nerve repair accelerates regeneration in humans and rats (Exp Neurol 2010; J Neurosci 2000).</li>
        <li>Graphene / GO / rGO in nerve conduits: multiple rat sciatic studies show improved SFI, CMAP and myelinated axon counts with conductive conduits (e.g. Qian Y. et al., Nature Communications 2018 on graphene-PCL conduits; Wang J. et al. on rGO-PCL).</li>
        <li>Polypyrrole and PEDOT electrospun fibres with electrical stimulation increase neurite extension in PC12 and DRG cultures (Lee J.Y. et al. Biomaterials 2009).</li>
      </ul>
      <p>Verify exact citations before the competition; keep three in your head.</p>` },
    { heading: "How to phrase the claim safely", html: `
      <p>Correct: "The scaffold is electrically conductive, so it supports the bioelectric environment regenerating axons use, and it can serve as an electrode for stimulation." Incorrect: "The scaffold transmits nerve signals across the gap." The regenerated axons transmit signals; before they regrow there is no signal to transmit. The demonstrator shows the former, not the latter; say so.</p>` },
    { heading: "How much conductivity is enough?", html: `
      <p>Literature conductive nerve scaffolds range from 10⁻⁴ to 10 S/cm; most published benefits appear at 10⁻³ to 10⁻¹ S/cm. Native nerve is about 10⁻³ to 10⁻² S/cm. Our 0.32 S/cm at 15 wt% is in the upper band, so the question becomes whether 10 wt% (just above threshold, better fibre quality, less graphene exposure) is the better trade-off. The ML model is designed to answer exactly that.</p>` }
  ],
  keyNumbers: [
    ["1 h at 20 Hz", "clinical electrical stimulation protocol (Gordon)"],
    ["10⁻³ to 10⁻¹ S/cm", "range where benefits reported (lit)"],
    ["10⁻³ to 10⁻² S/cm", "native nerve tissue (lit)"]
  ],
  traps: [
    "Overclaiming that conductivity alone regenerates nerve.",
    "Not being able to name one electrical stimulation study.",
    "Ignoring the trade-off: more graphene = more conductivity but worse fibres and more exposure."
  ],
  cards: [
    ["Three reasons conductivity helps?", "Supports endogenous bioelectric fields; conductive surfaces alone boost neurite growth and Schwann activity; enables electrical stimulation therapy."],
    ["Gordon protocol?", "1 hour of 20 Hz electrical stimulation at time of repair accelerates regeneration."],
    ["Does the scaffold transmit nerve signals?", "No. Regenerated axons do. The scaffold is a conductive, guiding environment and potential electrode."],
    ["Is 0.32 S/cm enough?", "Yes; above the 10⁻³ to 10⁻¹ S/cm band where benefits are reported and above native nerve; may be reducible to 10 wt%."]
  ]
},

{
  id: "toxicity",
  title: "Toxicity, biocompatibility, safety",
  tag: "Risk",
  summary: "The hardest judge questions live here: graphene fate, degradation, immune response, ISO 10993.",
  sections: [
    { heading: "Graphene: the real concerns", html: `
      <ul>
        <li><strong>Non-degradable</strong>: PCL resorbs, GNP does not (except slow peroxidase-mediated oxidation reported for GO). After years, platelets remain in tissue or are carried by macrophages to lymph nodes. Nobody has long-term human data.</li>
        <li><strong>Dose, size, shape, surface chemistry</strong> decide toxicity. Small lateral size (< 1 µm) and oxidised surfaces are cleared more easily; large rigid platelets can frustrate phagocytosis and cause granuloma/fibrosis (asbestos-type concern). Hydrophobic pristine GNP agglomerates.</li>
        <li><strong>Mechanisms</strong>: oxidative stress (ROS), membrane damage by sharp edges, mitochondrial dysfunction, inflammatory cytokines (IL-6, TNF-α) from macrophages.</li>
        <li><strong>Mitigation in our design</strong>: GNP is embedded in PCL, so cells see mainly polymer; loading is kept at the lowest value above percolation; platelets are micrometre-scale not nanoscale in lateral size, reducing cell internalisation; release only occurs as PCL slowly degrades, which spreads exposure over years. All of these are arguments, not proof: the proof is ISO 10993 implantation testing with histology at 4, 12, 26 and 52 weeks.</li>
        <li>Judge-ready sentence: "We treat graphene fate as the main long-term safety question; our plan is minimum loading above percolation, in vitro ISO 10993-5 now, and subcutaneous and sciatic implantation with lymph node histology in the in vivo phase."</li>
      </ul>` },
    { heading: "PCL degradation safety", html: `
      <ul>
        <li>Degradation products: caproic acid derivatives, metabolised; mild local acidity far below PLGA.</li>
        <li>Slow degradation means long presence of a foreign body: fibrous capsule (foreign body response) is expected and mild for PCL.</li>
        <li>Fibre fragments at late stage are taken up by macrophages; crystalline residues can persist; this is documented for PCL implants and acceptable.</li>
      </ul>` },
    { heading: "Peptide safety", html: `
      <ul>
        <li>Short synthetic peptides are weakly immunogenic; covalent attachment removes systemic dosing; cleaved peptide fragments are amino acids.</li>
        <li>Risks to test: unwanted activity (angiogenic or proliferative peptides could in theory promote tumour growth or neuroma), endotoxin contamination from synthesis, residual coupling reagents (EDC, NHS, HMDA are cytotoxic and must be washed out and quantified).</li>
      </ul>` },
    { heading: "The ISO 10993 map (what a regulator will ask for)", html: `
      <table><thead><tr><th>Part</th><th>Test</th><th>Relevant because</th></tr></thead><tbody>
      <tr><td>10993-1</td><td>Risk-based evaluation framework</td><td>Implant, permanent contact (> 30 days), tissue/nerve</td></tr>
      <tr><td>10993-5</td><td>Cytotoxicity</td><td>First gate; we can do now</td></tr>
      <tr><td>10993-10 / -23</td><td>Sensitisation / irritation</td><td>Peptide and residual reagents</td></tr>
      <tr><td>10993-11</td><td>Systemic toxicity</td><td>Graphene release</td></tr>
      <tr><td>10993-6</td><td>Local effects after implantation</td><td>Histology, capsule, graphene fate</td></tr>
      <tr><td>10993-3</td><td>Genotoxicity, carcinogenicity</td><td>Graphene, peptide</td></tr>
      <tr><td>10993-7</td><td>EtO residuals</td><td>If EtO sterilised</td></tr>
      <tr><td>10993-12 / -18</td><td>Sample prep / chemical characterisation (extractables, leachables)</td><td>Solvent (DCM) residues, reagents</td></tr>
      <tr><td>11137 / 11135</td><td>Sterilisation validation (gamma / EtO)</td><td>Sterility assurance level 10⁻⁶</td></tr>
      </tbody></table>` },
    { heading: "Immune and clinical risks beyond materials", html: `
      <ul>
        <li>Infection (any implant); neuroma formation if axons escape the conduit; conduit collapse or kinking causing compression; suture pull-out; mechanical mismatch at the coaptation; fibrous scar invasion through large pores.</li>
        <li>Electrical: if stimulation is used, electrode corrosion and charge injection limits; our scaffold is passive unless connected.</li>
      </ul>` }
  ],
  keyNumbers: [
    ["> 30 days", "permanent contact class in ISO 10993-1"],
    ["4, 12, 26, 52 weeks", "typical implantation histology timepoints"],
    ["10⁻⁶", "sterility assurance level"]
  ],
  traps: [
    "Saying graphene is 'biocompatible' as a flat statement. Say: biocompatibility depends on dose, size, chemistry, and we have a plan to test fate.",
    "Forgetting residual DCM, EDC/NHS, HMDA as leachables.",
    "Not knowing the number of the cytotoxicity standard (ISO 10993-5)."
  ],
  cards: [
    ["Main long-term safety unknown?", "Fate of non-degradable graphene nanoplatelets after PCL resorbs; need implantation histology with lymph node analysis."],
    ["Graphene toxicity determinants?", "Dose, lateral size, thickness, surface oxidation, agglomeration; mechanisms ROS, membrane damage, frustrated phagocytosis, inflammation."],
    ["Design mitigations for graphene risk?", "Embedded in PCL, minimum loading above percolation, micrometre lateral size, slow release over years."],
    ["Which ISO 10993 parts first?", "-5 cytotoxicity, -10/-23 sensitisation and irritation, -12/-18 chemical characterisation; then -6 implantation."],
    ["Leachables to worry about?", "Residual DCM, EDC/NHS, hexamethylenediamine, EtO residuals, endotoxin."]
  ]
},

{
  id: "regulatory",
  title: "Regulatory pathway and standards",
  tag: "Risk",
  summary: "Device class, which agency, combination-product issue, cost and timeline numbers.",
  sections: [
    { heading: "Classification", html: `
      <ul>
        <li><strong>USA (FDA)</strong>: nerve cuffs/conduits are 21 CFR 882.5275, Class II, 510(k) route with a predicate (NeuraGen, Neurotube, Neurolac were cleared this way). But a device with a biologically active peptide or claiming to actively promote regeneration beyond a physical barrier may be judged as having a new mechanism, which pushes it to De Novo or PMA (Class III), or to combination-product review (CDRH with CBER/CDER consult). Say: "likely 510(k) if the peptide is argued as a surface coating with no pharmacological claim; otherwise De Novo."</li>
        <li><strong>EU (MDR 2017/745)</strong>: implantable, long-term, in contact with the nervous system → Rule 8 Class III; a device incorporating a substance with ancillary pharmacological action → Rule 14, Class III with medicines consultation. Expect Class III, Notified Body review, clinical investigation.</li>
        <li><strong>Malaysia (MDA, Act 737)</strong>: implantable long-term device → Class C (medium-high) or Class D (high) with Conformity Assessment Body; follows ASEAN Medical Device Directive and GHTF rules. First registration target for a Malaysian company; faster and cheaper than EU/US and a credible route for ASEAN markets.</li>
        <li><strong>Taiwan (TFDA)</strong>: Class II/III under Medical Devices Act; worth mentioning since the competition host.</li>
      </ul>` },
    { heading: "Development path and typical numbers", html: `
      <table><thead><tr><th>Stage</th><th>What</th><th>Time (lit)</th><th>Cost order (lit)</th></tr></thead><tbody>
      <tr><td>Preclinical in vitro</td><td>ISO 10993-5, characterisation, design freeze</td><td>6 to 12 months</td><td>RM 100k to 300k</td></tr>
      <tr><td>Animal efficacy</td><td>Rat sciatic 10 mm, 12 weeks, 3 arms, n ≈ 8 to 10 per arm; then larger model (rabbit/sheep/pig) for longer gap</td><td>12 to 24 months</td><td>RM 300k to 1M</td></tr>
      <tr><td>GLP safety</td><td>ISO 10993 full biological evaluation, sterilisation validation, shelf life</td><td>12 months</td><td>RM 1 to 2M</td></tr>
      <tr><td>Manufacturing</td><td>ISO 13485 QMS, GMP clean room, design history file</td><td>parallel</td><td>RM 1 to 3M</td></tr>
      <tr><td>Clinical</td><td>First-in-human pilot (n ≈ 20 to 30, digital nerves), then pivotal</td><td>2 to 4 years</td><td>RM 5 to 20M</td></tr>
      <tr><td>Registration</td><td>MDA Malaysia first, then CE/FDA</td><td>1 to 2 years</td><td>Variable</td></tr>
      </tbody></table>
      <p>Total to market: realistically 6 to 9 years and tens of millions of ringgit. Say it; judges distrust 3-year timelines for Class III implants.</p>` },
    { heading: "Standards vocabulary", html: `
      <ul>
        <li>ISO 13485 (quality management for medical devices), ISO 14971 (risk management), ISO 10993 series (biological evaluation), ISO 11135 (EtO) / 11137 (radiation), ISO 11607 (packaging), IEC 62304 only if software is part of the device (the ML tool is a design tool, not device software, unless it is used clinically for patient-specific prescription, which would make it Software as a Medical Device).</li>
        <li>Patents: peptide patent (UPM), possible new filing on the GNP-PCL-peptide combination and the ML-designed formulation. Freedom-to-operate search on graphene nerve conduits (several Chinese and US filings exist).</li>
      </ul>` },
    { heading: "What is and is not a medical device at the booth", html: `
      <p>The tabletop demonstrator is an educational model and is not a medical device. The ML tool at this stage is a research design tool. The scaffold is a device candidate at TRL 4. Judges may test whether the team knows the difference.</p>` }
  ],
  keyNumbers: [
    ["21 CFR 882.5275", "FDA nerve cuff regulation (Class II)"],
    ["Rule 8 / Rule 14", "EU MDR rules making it Class III"],
    ["Act 737", "Malaysia Medical Device Act (MDA)"],
    ["6 to 9 years", "realistic path to market"]
  ],
  traps: [
    "Promising market entry in 2 to 3 years.",
    "Claiming 510(k) is certain. The peptide may change the pathway.",
    "Calling the demonstrator a prototype of the medical device."
  ],
  cards: [
    ["FDA classification of nerve conduits?", "21 CFR 882.5275 nerve cuff, Class II, 510(k); peptide may push to De Novo/PMA or combination product."],
    ["EU class?", "Class III (Rule 8 long-term implant touching nervous system; Rule 14 ancillary substance)."],
    ["Malaysian regulator and law?", "Medical Device Authority (MDA) under Act 737; Class C/D for implants."],
    ["Key QMS and risk standards?", "ISO 13485 and ISO 14971."],
    ["Is the ML tool a medical device?", "Not now (design tool). It becomes SaMD only if used clinically for patient-specific decisions."]
  ]
},

{
  id: "ml",
  title: "The ML predictive design tool",
  tag: "Science",
  summary: "What the model is, what it predicts, how it is validated, and the honest limits of small data.",
  sections: [
    { heading: "Problem framing", html: `
      <p>Inputs (features): PCL concentration, solvent, GNP wt%, voltage, distance, flow rate, collector speed, humidity, peptide density. Intermediate outputs: fibre diameter, alignment index, conductivity, contact angle, crystallinity. Final targets: cell viability, neurite length, neurite alignment. The tool is a regression model (XGBoost, gradient-boosted decision trees) with SHAP values for interpretability, trained on the team's fabrication and characterisation log plus curated literature rows.</p>` },
    { heading: "Why XGBoost + SHAP", html: `
      <ul>
        <li>Works on small, tabular, mixed-scale data with non-linear interactions (percolation is a threshold, not a line).</li>
        <li>Handles missing values natively (literature rows rarely report everything).</li>
        <li>SHAP gives per-prediction feature attribution, so the team can say "the model recommends 12 wt% because conductivity saturates and fibre quality falls", which a neural network cannot explain as easily.</li>
        <li>Alternatives considered: random forest (similar, less tunable), Gaussian process (good uncertainty on tiny data, worth adding), neural network (needs more data).</li>
      </ul>` },
    { heading: "Validation protocol (what judges want to hear)", html: `
      <ol>
        <li>k-fold cross-validation (k = 5) or leave-one-out given small n; report RMSE, MAE and R² with confidence intervals, not a single number.</li>
        <li>Group-aware splits: hold out entire batches or entire literature papers so the model is not tested on near-duplicates (data leakage).</li>
        <li>Blind prospective test: model recommends one untested formulation; the lab makes it; measured vs predicted is the headline figure.</li>
        <li>Baseline comparison: beat a simple linear model and a "predict the mean" model, otherwise the ML is decoration.</li>
        <li>Domain checks: predictions must obey physics (conductivity rises monotonically with loading until plateau).</li>
      </ol>` },
    { heading: "Honest limits (say them before being asked)", html: `
      <ul>
        <li>Small data (tens of rows now). Literature rows come from different labs, instruments and cell lines, so there is batch noise; the model learns trends, not precise values.</li>
        <li>It predicts in vitro proxies, not clinical outcome. "Precision" means precise selection of fabrication parameters, not personalised medicine yet.</li>
        <li>It extrapolates poorly outside the training range; recommendations are constrained to the explored parameter box.</li>
        <li>Retraining is continuous: every new batch improves it. That is the point of coupling it to a lab.</li>
      </ul>` },
    { heading: "Business framing of the tool", html: `
      <p>Two values: (1) cost reduction, fewer failed batches and fewer animal studies; (2) a second product, a licensable design service for other scaffold makers (electrospun wound dressings, bone scaffolds) because the fabrication-to-property part of the model is generic.</p>` }
  ],
  keyNumbers: [
    ["XGBoost + SHAP", "model + explainability"],
    ["k = 5 / LOO", "cross-validation given small n"],
    ["1 blind batch", "prospective validation headline"]
  ],
  traps: [
    "Reporting R² without cross-validation.",
    "Letting 'precision' be heard as 'personalised'. Define it.",
    "Claiming the model predicts patient outcome."
  ],
  cards: [
    ["Model type and why?", "XGBoost regression: small tabular data, non-linear thresholds, missing values; SHAP for explanation."],
    ["Inputs and targets?", "Inputs: spinning parameters, GNP wt%, peptide density. Targets: fibre diameter, alignment, conductivity, viability, neurite length/alignment."],
    ["How validated?", "Group-aware k-fold CV with RMSE/R² and CIs, baseline comparison, blind prospective batch."],
    ["What does 'precision' mean here?", "Model-guided selection of fabrication parameters for a target property set; not personalised medicine yet."],
    ["Biggest ML limitation?", "Small heterogeneous dataset; predicts in vitro proxies, not clinical outcome; poor extrapolation."]
  ]
},

{
  id: "demonstrator",
  title: "The tabletop demonstrator",
  tag: "Prototype",
  summary: "What the booth model shows, how it works, and how to answer 'so what does this prove?'.",
  sections: [
    { heading: "What it is", html: `
      <p>A four-chamber tabletop model of nerve-to-muscle recovery. Chambers represent the nerve gap filled with the scaffold; a signal (LED pulse along the conductive path or a measured regeneration score) travels across and drives a motor and lead-screw actuator that contracts an "artificial muscle". Earlier design: transparent nerve chamber with a scaffold holder, clear pathway tube, silicone muscle, 6 to 12 V DC motor on a lead screw, acrylic base. Built with the team's own 3D printing and laser cutting; quoted build cost about RM 2,700.</p>` },
    { heading: "What it proves and what it does not", html: `
      <ul>
        <li>Proves: the scaffold is conductive (a real scaffold sample can close the circuit); the concept of guided signal recovery; the link between measured neurite outgrowth (image analysis score) and function (contraction amplitude).</li>
        <li>Does not prove: in vivo regeneration, biocompatibility, or that axons transmit through the scaffold. Say this unprompted; judges reward honesty on demonstrators.</li>
      </ul>` },
    { heading: "Electronics basics to know", html: `
      <ul>
        <li>Microcontroller (Arduino-class) reads a scaffold resistance via a voltage divider or a user-entered neurite score, maps it to motor steps.</li>
        <li>Taiwan mains is 110 V, 60 Hz, Type A/B plugs; use a universal 12 V adapter; batteries may be restricted on flights, so plan mains power.</li>
        <li>Fail-safes: fuse, current limit on the motor driver, mechanical end stops, a manual mode if sensors fail.</li>
      </ul>` },
    { heading: "The 30-second booth script", html: `
      <p>"This is a model, not the implant. The real scaffold is this black mat. When we clip it into the gap, the circuit closes and the pulse crosses, which shows the mat conducts. The dial sets a neurite-outgrowth score from our cell images; higher scores give a stronger contraction, which is how we visualise the link between scaffold quality and recovered function."</p>` }
  ],
  keyNumbers: [
    ["RM 2,700", "quoted build cost"],
    ["110 V / 60 Hz", "Taiwan mains"],
    ["6 to 12 V DC", "motor supply"]
  ],
  traps: [
    "Letting a judge believe the LED pulse is a nerve signal through the scaffold.",
    "No answer for 'what happens if the demo fails'. Have a video backup and a manual mode."
  ],
  cards: [
    ["What does the demonstrator prove?", "Scaffold conductivity (real sample closes circuit) and the concept linking neurite outgrowth score to functional output; not in vivo efficacy."],
    ["Power in Taipei?", "110 V 60 Hz Type A/B; use universal 12 V adapter; battery transport restricted."],
    ["Backup plan if demo fails?", "Pre-recorded video, manual mode, spare parts, printed SEM images."]
  ]
},

{
  id: "business",
  title: "Business case",
  tag: "Business",
  summary: "Market, model, pricing logic, roadmap, ask, risks. Match the INO business rubric items.",
  sections: [
    { heading: "INO business rubric items (hit every one)", html: `
      <ol>
        <li>Novelty and value proposition</li>
        <li>Competitive advantage</li>
        <li>Roadmap to market with TRL/MRL</li>
        <li>Indicative pricing and revenue model</li>
        <li>Investment plan and use of funds</li>
        <li>Risks and mitigation</li>
        <li>Social and environmental impact (SDG 3, SDG 9)</li>
      </ol>` },
    { heading: "Market", html: `
      <ul>
        <li>Global nerve repair and regeneration market: use the IMARC figure in the pitch script (verify the year and the CAGR before quoting; most reports place the market in the USD 8 to 12 billion range by the late 2020s with high single-digit to low double-digit CAGR; conduits are a sub-segment). Asia Pacific is among the fastest growing regions.</li>
        <li>Beachhead: digital and small sensory nerve repairs (short gaps, lower risk, 510(k)-style predicate exists) in Malaysia and ASEAN; then upper-limb mixed nerves; then long gaps replacing autograft.</li>
        <li>Customers: hand and plastic surgeons, neurosurgeons, orthopaedic trauma; payers: hospitals, insurers, government hospitals (MOH Malaysia procurement).</li>
      </ul>` },
    { heading: "Business model: one platform, two products", html: `
      <ul>
        <li><strong>NanoAxon-X conduit</strong>: sold per unit to hospitals via distributors; indicative price positioned between hollow conduits and allograft (team to confirm; a reasonable public statement is "priced at or below current collagen conduits with a stronger value claim").</li>
        <li><strong>Design tool licence</strong>: the ML fabrication-property model offered to scaffold manufacturers and research labs as a subscription or per-project service; also cuts the team's own development cost by replacing failed batches and animal arms.</li>
        <li>Costs: electrospinning scale-up, clean room, peptide synthesis (per-gram cost falls with scale), sterilisation, regulatory, clinical. Known real figures: RM 2,700 demonstrator, RM 529.20 hosting.</li>
      </ul>` },
    { heading: "Roadmap (say with TRL)", html: `
      <ul>
        <li>Now: TRL 4, in vitro validated components, ML v1.</li>
        <li>Year 1 to 2: conduit form factor, ISO 10993-5/-10, rat sciatic study → TRL 5 to 6.</li>
        <li>Year 3 to 4: GLP safety, ISO 13485 pilot line, large animal → TRL 6 to 7.</li>
        <li>Year 5 to 7: first-in-human, MDA registration → TRL 8 to 9; CE/FDA after.</li>
        <li>Funding stages: grants (MOSTI, TechnoFund, Cradle), university spin-off, seed, Series A at animal-efficacy proof.</li>
      </ul>` },
    { heading: "Competitive advantage in three lines", html: `
      <ol>
        <li>Active not passive: guidance + conductivity + bound bioactive cue in one off-the-shelf device.</li>
        <li>Precision not trial-and-error: a learning design tool that improves with every batch.</li>
        <li>Owned stack: peptide IP, scaffold data and the model are all within the team and the supervising lab.</li>
      </ol>` },
    { heading: "Risk table", html: `
      <table><thead><tr><th>Risk</th><th>Mitigation</th></tr></thead><tbody>
      <tr><td>In vivo efficacy below autograft</td><td>Position first for short gaps vs hollow conduits; iterate with model</td></tr>
      <tr><td>Graphene long-term safety</td><td>Minimum loading, implantation histology, alternative conductive fillers (PEDOT, carbon dots) as backup</td></tr>
      <tr><td>Regulatory reclassification to Class III</td><td>Early pre-submission meetings; coating framing for peptide; MDA first</td></tr>
      <tr><td>Scale-up of aligned electrospinning</td><td>Multi-needle/needleless industrial spinners exist; contract manufacturer</td></tr>
      <tr><td>IP freedom to operate</td><td>FTO search, file on combination and ML-derived formulations</td></tr>
      <tr><td>Team continuity (students)</td><td>Spin-off with supervisor lab; MOSTI/NNC support</td></tr>
      </tbody></table>` },
    { heading: "Impact", html: `
      <p>Social: restores movement, sensation, work capacity for mostly working-age trauma patients; removes donor-site surgery. Environmental: biodegradable polymer, no human or animal tissue supply chain, low-energy manufacturing; graphene footprint is small per device. SDG 3 and SDG 9; aligned with Malaysia's National Nanotechnology and medical device agendas.</p>` }
  ],
  keyNumbers: [
    ["USD ~8 to 12 bn", "nerve repair market order of magnitude (verify vs IMARC)"],
    ["TRL 4 → 9", "roadmap over ~7 years"],
    ["RM 2,700 / RM 529.20", "real quoted costs (demo, hosting)"]
  ],
  traps: [
    "Quoting a market figure without source and year.",
    "No unit price idea at all. Have a range and a logic.",
    "Ignoring reimbursement: who pays and why they would switch."
  ],
  cards: [
    ["Beachhead segment?", "Short-gap digital/sensory nerve repairs in Malaysia/ASEAN, predicate conduits exist, then upper-limb, then long gaps."],
    ["Two revenue streams?", "Conduit unit sales; ML design tool licence/service."],
    ["Three competitive advantages?", "Active device; precision via learning model; owned IP stack."],
    ["Biggest business risks?", "Efficacy vs autograft, graphene safety, Class III reclassification, scale-up, FTO."],
    ["SDGs claimed?", "SDG 3 Good Health, SDG 9 Industry and Innovation."]
  ]
},

{
  id: "pitch",
  title: "Pitch craft and Q&A tactics",
  tag: "Start here",
  summary: "How to answer, how to say 'we do not know yet', and how to handle a hostile judge.",
  sections: [
    { heading: "Answer structure (ARC)", html: `
      <ul>
        <li><strong>Answer</strong> in one sentence first.</li>
        <li><strong>Reason</strong> with one mechanism or one number.</li>
        <li><strong>Caveat or next step</strong>: what you have not done yet and when you will.</li>
      </ul>
      <p>Twenty seconds. Then stop. Judges prefer a short true answer to a long impressive one.</p>` },
    { heading: "The honesty phrases", html: `
      <ul>
        <li>"We have not measured that yet; it is scheduled for [stage]. Our expectation based on [literature] is [x]."</li>
        <li>"That is a design argument, not data. The data point that would settle it is [experiment]."</li>
        <li>"Good question; [teammate] owns that, [name] would you take it?"</li>
      </ul>` },
    { heading: "Hostile question playbook", html: `
      <ul>
        <li>"Graphene is toxic." → Agree partially: depends on dose/size/chemistry; explain embedding and minimum loading; name the test plan.</li>
        <li>"This has been done before." → Name the closest prior work (graphene-PCL conduits exist), state what is new: covalent patented peptide + conductive aligned fibres + a learning design tool, all in one.</li>
        <li>"Your market number is inflated." → Give the source and year, then the beachhead segment number, which is smaller and more credible.</li>
        <li>"Students cannot take an implant to market." → Agree; the path is a spin-off with the supervising lab and national agency support, and the ML tool is a nearer-term product.</li>
        <li>"Why not just use autograft?" → Donor site, supply, 40 to 50% good outcomes; our aim is non-inferiority without the second surgery.</li>
      </ul>` },
    { heading: "Language discipline", html: `
      <ul>
        <li>Words to avoid: cure, revolutionary, breakthrough, proven, biocompatible (as absolute), transmits nerve signals.</li>
        <li>Words to use: supports, guides, conductive, bioactive, validated in vitro, planned, non-inferiority.</li>
        <li>Same product name every time: NanoAxon-X.</li>
      </ul>` }
  ],
  keyNumbers: [["20 s", "max answer length"], ["ARC", "Answer, Reason, Caveat"]],
  traps: ["Answering a question nobody asked.", "Two teammates answering at once.", "Defending a weak point instead of conceding and redirecting to the plan."],
  cards: [
    ["Answer structure?", "ARC: Answer in one sentence, Reason with a mechanism/number, Caveat or next step. 20 seconds."],
    ["Response to 'graphene is toxic'?", "Depends on dose, size, chemistry; embedded in PCL at minimum loading; ISO 10993 and implantation histology planned."],
    ["Response to 'done before'?", "Name prior graphene-PCL conduits; novelty is covalent patented peptide + conductive aligned fibres + learning design tool together."]
  ]
},

{
  id: "glossary",
  title: "Glossary",
  tag: "Reference",
  summary: "Terms judges use. Flashcard-ready.",
  sections: [
    { heading: "A to Z", html: `
      <dl class="gloss">
      <dt>Axonotmesis</dt><dd>Axon cut with connective sheaths intact; spontaneous regeneration possible.</dd>
      <dt>Bands of Büngner</dt><dd>Aligned repair Schwann cell columns guiding regrowing axons.</dd>
      <dt>CMAP</dt><dd>Compound muscle action potential; electrophysiological measure of reinnervation.</dd>
      <dt>Contact guidance</dt><dd>Cell orientation and migration directed by substrate topography.</dd>
      <dt>Covalent conjugation</dt><dd>Chemical bond (e.g. amide via EDC/NHS) attaching peptide to the fibre surface.</dd>
      <dt>Critical gap</dt><dd>Gap length beyond which spontaneous regeneration fails without a bridge (rat sciatic ~10 mm).</dd>
      <dt>DRG</dt><dd>Dorsal root ganglion; sensory neuron cell bodies; also an explant model.</dd>
      <dt>EDC/NHS</dt><dd>Carbodiimide crosslinker plus N-hydroxysuccinimide; activates carboxyls to react with amines.</dd>
      <dt>Electrospinning</dt><dd>High-voltage jet drawing of polymer solution into nano/microfibres.</dd>
      <dt>FESEM</dt><dd>Field-emission scanning electron microscopy; high-resolution surface imaging.</dd>
      <dt>Foreign body response</dt><dd>Macrophage/giant cell reaction and fibrous capsule around implants.</dd>
      <dt>g-ratio</dt><dd>Axon diameter divided by total fibre diameter; 0.6 to 0.7 is optimal myelination.</dd>
      <dt>GNP</dt><dd>Graphene nanoplatelets; few-to-many-layer pristine graphene stacks.</dd>
      <dt>ISO 10993</dt><dd>Biological evaluation of medical devices standard series.</dd>
      <dt>ISO 13485</dt><dd>Quality management system for medical devices.</dd>
      <dt>MRL</dt><dd>Manufacturing readiness level, 1 to 10.</dd>
      <dt>Neurapraxia</dt><dd>Conduction block without axon loss; recovers in weeks.</dd>
      <dt>Neuroma</dt><dd>Disorganised painful ball of axons and scar at a failed repair.</dd>
      <dt>Neurotmesis</dt><dd>Complete nerve transection.</dd>
      <dt>NG108-15</dt><dd>Mouse neuroblastoma × rat glioma hybrid neuronal cell line.</dd>
      <dt>PCL</dt><dd>Polycaprolactone, slow-degrading biodegradable polyester, Tm ~60 °C.</dd>
      <dt>Percolation threshold</dt><dd>Filler fraction where a continuous conductive network forms.</dd>
      <dt>SFI</dt><dd>Sciatic functional index; walking-track measure of rat hindlimb function.</dd>
      <dt>SHAP</dt><dd>Shapley additive explanations; per-feature contribution to a prediction.</dd>
      <dt>Schwann cell</dt><dd>PNS glial cell; myelinates and supports regeneration.</dd>
      <dt>TRL</dt><dd>Technology readiness level, 1 to 9; TRL 4 = component validation in lab.</dd>
      <dt>Wallerian degeneration</dt><dd>Breakdown of the distal axon segment after injury.</dd>
      <dt>XGBoost</dt><dd>Gradient-boosted decision tree library used for the predictive tool.</dd>
      </dl>` }
  ],
  keyNumbers: [],
  traps: [],
  cards: [
    ["Define TRL 4.", "Component and/or breadboard validation in a laboratory environment."],
    ["Define g-ratio.", "Axon diameter / total myelinated fibre diameter; ~0.6 to 0.7 optimal."],
    ["Define SFI.", "Sciatic functional index from rat walking track footprints; −100 = total loss, 0 = normal."],
    ["Define percolation threshold.", "Filler fraction at which a continuous conductive network forms and conductivity jumps."]
  ]
}
];
