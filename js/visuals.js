// Visual layer: which figure heads each module, which figures sit inside sections, and the three-line "in short" per module.
// hero: "svg:<id from diagrams.js>" or "img/<file>.png". figures: {sectionIndex: "svg:id" | "img/file.png"}.
window.VISUALS = {
  overview:        { hero:"svg:hero", figures:{}, short:["A biodegradable nanofibre bridge for severed nerves.","Guides, conducts and stimulates in one off-the-shelf implant.","A learning model picks the next design before the lab builds it."] },
  anatomy:         { hero:"svg:nerve", figures:{0:"svg:neuron"}, short:["A nerve is a cable of axons, each a long arm of one cell.","Schwann cells wrap axons and are the repair crew after injury.","Only the peripheral system can regrow; we work where biology allows it."] },
  injury:          { hero:"svg:wallerian", figures:{2:"img/timeline.png"}, short:["A cut axon dies beyond the cut; the stump must regrow at ~1 mm a day.","Support cells and muscle fade over months, so direction and speed matter.","Our target is a complete cut with a gap that cannot be sutured."] },
  clinical:        { hero:"svg:ladder", figures:{}, short:["Short gaps: suture. Long gaps: harvest a nerve from the leg.","Hollow tubes exist but only work for gaps under ~3 cm.","We aim to match the graft without the second surgery."] },
  design:          { hero:"svg:contact", figures:{0:"img/fibre_window.png"}, short:["Aligned fibres steer growth; random ones do not.","Fibre size, porosity, stiffness and degradation all have a sweet spot.","The mat is the functional surface; the conduit is the next build."] },
  materials:       { hero:"img/lab/fourprobe.png", figures:{1:"img/thermal.png",3:"svg:conjugation"}, short:["PCL: slow-degrading, flexible, already used in implants.","Graphene nanoplatelets: conductive once they touch (percolation between 5 and 10 wt%), 0.32 S/cm at 15 wt%.","Peptide: cheap, stable, covalently bonded so it stays put."] },
  fabrication:     { hero:"img/lab/fesem_22oct.jpg", figures:{0:"svg:electrospin",2:"img/lab/fesem_batches.png"}, short:["High voltage draws a polymer jet into fibres; a spinning drum aligns them.","Concentration, voltage, flow, distance and humidity set fibre quality.","The 22 Oct run (15% PCL in DCM) gave bead-free fibres, median 359 nm, 72 to 84% aligned within ±10°."] },
  characterisation:{ hero:"img/lab/raman.png", figures:{0:"img/lab/xrd.jpg",1:"img/lab/edx.png",2:"img/lab/fesem_batches.png",3:"img/lab/fourprobe.png"}, short:["FESEM shows shape; Raman proves graphene; DSC shows it nucleates PCL.","XRD and EDX could not see graphene at low loading; say so.","Alignment is a number (79% within ±10°); conductivity is quoted with loading and thickness."] },
  cells:           { hero:"img/cell_ladder.png", figures:{}, short:["NG108-15 is a fast neurite-screening line, not a patient cell.","Schwann cells and DRG explants come next, then rat sciatic.","Controls, replicates, blinding and statistics are what judges probe."] },
  conductivity:    { hero:"svg:conductive", figures:{}, short:["Injured tissue makes its own electric fields; a conductor lets them span the gap.","Conductive surfaces alone boost neurite growth in the literature.","The scaffold can be an electrode for 20 Hz stimulation therapy."] },
  toxicity:        { hero:"svg:graphene_fate", figures:{3:"img/iso10993.png"}, short:["Graphene does not degrade; its fate is the main long-term question.","Mitigation: embed it, use the least loading, track it in histology.","ISO 10993 is the test map; part 5 (cytotoxicity) is the first gate."] },
  regulatory:      { hero:"img/roadmap.png", figures:{}, short:["Long-term nerve implant: Class III in the EU, Class C/D in Malaysia.","The peptide may shift the FDA route from 510(k) to De Novo.","Realistic path: 6 to 9 years, MDA Malaysia first."] },
  ml:              { hero:"svg:mlloop", figures:{}, short:["XGBoost predicts fibre and cell outcomes from spinning parameters.","SHAP explains every recommendation to the chemist.","Small data: report cross-validated error, then test one blind batch."] },
  demonstrator:    { hero:"svg:demo", figures:{}, short:["A real scaffold sample closes the circuit; a dial maps cell data to a muscle twitch.","It shows conductivity and the idea, not nerve transmission.","Have a video and manual mode ready for the booth."] },
  business:        { hero:"img/roadmap.png", figures:{}, short:["One platform, two products: the conduit and the design tool licence.","Beachhead: short-gap sensory repairs in Malaysia and ASEAN.","Biggest risks: in vivo efficacy, graphene safety, Class III burden."] },
  pitch:           { hero:"", figures:{}, short:["Answer in one sentence, give one reason, name the next step. Twenty seconds.","Say what you have not done yet before the judge finds it.","One voice per question; never contradict a teammate on stage."] },
  glossary:        { hero:"", figures:{}, short:[] }
};

// Captions for image figures (team lab data unless stated).
window.CAPTIONS = {
  "img/lab/fourprobe.png":"Team four-point-probe data. Conductivity versus graphene loading (wt% of PCL). Below detection up to 2 wt%, a thousand-fold jump between 5 and 10 wt%, 0.32 S/cm at 15 wt%.",
  "img/lab/fesem_22oct.jpg":"Team FESEM, 22 Oct run (15% PCL in DCM): aligned, bead-free fibres; median diameter 359 nm; 72 to 84% within ±10° of the collector axis. Panel e shows the minority of thick porous fibres.",
  "img/lab/fesem_batches.png":"Team FESEM, 8 Oct batches: PCL + 0.2% and 0.6% graphene, and peptide-coated fibres (d, e) showing the textured surface. Panel f: 79% of fibre signal within ±10°.",
  "img/lab/raman.png":"Team Raman spectra: graphene D, G and 2D bands scale with loading while PCL bands stay constant. This is the technique that confirmed graphene incorporation.",
  "img/lab/xrd.jpg":"Team XRD: PCL (110) and (200) reflections are weak because the mats are thin; graphene at 0.2 to 0.6 wt% is below detection.",
  "img/lab/edx.png":"Team EDX: carbon and oxygen from PCL dominate; graphene cannot be separated from polymer carbon, and salt peaks appear on samples not rinsed after PBS.",
  "img/thermal.png":"Schematic of the team DSC trend: graphene nucleates PCL, raising Tm by 4 to 5 °C and crystallinity by 10 to 15 points. Illustrative curve; quote your own numbers.",
  "img/timeline.png":"Why time matters (literature trend): Schwann support fades over months, muscle endplates over a year, while axons advance about 1 mm a day.",
  "img/fibre_window.png":"Literature trend: neurite extension peaks for fibres around 0.5 to 1 µm.",
  "img/roadmap.png":"Development roadmap with technology readiness levels.",
  "img/iso10993.png":"ISO 10993 parts in the order a regulator expects them.",
  "img/cell_ladder.png":"The validation ladder from cell line to first-in-human."
};
