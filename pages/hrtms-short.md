---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: HRTMS — Requirements Engineering (15-min)
exportFilename: HRTMS-Requirements-Engineering-Short
lineNumbers: false
drawings:
  persist: false
mdc: true
routerMode: hash
info: |
  Horse Racing Tournament Management System — concise 15-minute walkthrough
---

<div class="translate-x--4">

<h1 class="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
  Horse Racing Tournament<br/>Management System
</h1>

<div class="text-xl opacity-90 mt-4">
  Software Requirements Engineering — <span class="text-cyan-300 font-semibold">SWR302</span>
</div>

<div class="mt-4 flex justify-start gap-2 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200">Vision &amp; Scope + SRS</div>
  <div class="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-amber-200">15-min overview</div>
</div>

<div class="mt-6 grid grid-cols-5 gap-2 max-w-3xl text-xs">
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-blue-300">Nguyễn Ngọc Phúc</div><div class="opacity-60">Leader</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-cyan-300">Khánh Ngọc</div><div class="opacity-60">SE193095</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-emerald-300">Nguyễn Phạm An</div><div class="opacity-60">SE204957</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-amber-300">Thân Nhật Huy</div><div class="opacity-60">SE203317</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-fuchsia-300">Lê Văn Duy</div><div class="opacity-60">SE180057</div></div>
</div>

</div>

<!--
Good morning. We are Team HRTMS. In the next 15 minutes we give you the full picture: not just what we specified, but how we engineered the requirements end to end — from the business problem to a traceable, standards-compliant SRS.
-->

---
class: py-7
glowSeed: 7
---

# The Problem — and What HRTMS Is

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-5">
  <div class="flex items-center gap-2 mb-3 text-red-200"><div class="i-carbon:warning-alt text-xl" /><b>Today: fragmented &amp; manual</b></div>
  <div class="flex flex-col gap-2 text-sm opacity-90">
    <div>One tournament = <b>8+ stakeholder groups</b> on spreadsheets, paper, phone &amp; email.</div>
    <div class="grid grid-cols-3 gap-2 text-center mt-1">
      <div class="bg-black/30 rounded p-2"><div class="text-2xl font-extrabold text-red-300">4–6h</div><div class="text-[10px] opacity-70">admin/day</div></div>
      <div class="bg-black/30 rounded p-2"><div class="text-2xl font-extrabold text-red-300">8–12%</div><div class="text-[10px] opacity-70">errors</div></div>
      <div class="bg-black/30 rounded p-2"><div class="text-2xl font-extrabold text-red-300">~15%</div><div class="text-[10px] opacity-70">conflicts</div></div>
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="flex items-center gap-2 mb-3 text-emerald-200"><div class="i-carbon:checkmark-filled text-xl" /><b>HRTMS: one platform</b></div>
  <div class="text-sm opacity-90 space-y-1">
    <div>A <b>centralized, real-time</b> web + mobile platform for the whole tournament lifecycle.</div>
    <div>Connects to national registries &amp; payment so staff never re-key data.</div>
    <div>For mid-sized clubs: <b>20–200 races/season</b>.</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — The Background <b>quantifies the pain</b>; those baselines are what make every later objective measurable. A goal without a baseline is just a wish.</div>

<!--
Horse racing is popular but operationally messy — eight-plus stakeholder groups on spreadsheets. We measured the pain: 4 to 6 hours of admin a day, an 8 to 12 percent error rate, conflicts in 15 percent of events. HRTMS replaces that with one centralized, real-time platform. And critically, we measured the problem first — those numbers become the baseline we prove success against.
-->

---
class: py-7
glowSeed: 13
---

# Our Requirements-Engineering Process

<div class="grid grid-cols-5 gap-2 mt-6 text-xs">
<div class="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-center"><div class="font-bold text-blue-200">1 · ELICIT</div><div class="opacity-80 mt-1">business needs</div></div>
<div class="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-center"><div class="font-bold text-cyan-200">2 · ANALYZE</div><div class="opacity-80 mt-1">model the problem</div></div>
<div class="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center"><div class="font-bold text-emerald-200">3 · SPECIFY</div><div class="opacity-80 mt-1">write requirements</div></div>
<div class="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center"><div class="font-bold text-amber-200">4 · VALIDATE</div><div class="opacity-80 mt-1">review + inspect</div></div>
<div class="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 p-3 text-center"><div class="font-bold text-fuchsia-200">5 · MANAGE</div><div class="opacity-80 mt-1">version + trace</div></div>
</div>

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4">
    <div class="font-bold text-cyan-200 mb-1">Assignment 1 · Vision &amp; Scope</div>
    <div class="opacity-85 text-xs">Elicitation + early analysis → <b>baselined v1.0 before any SRS work</b> (Jun 03).</div>
  </div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4">
    <div class="font-bold text-emerald-200 mb-1">Assignment 2 · SRS</div>
    <div class="opacity-85 text-xs">Detailed analysis + specification, built on the stable Vision (Jun 11).</div>
  </div>
</div>

<div class="renote mt-3"><b>RE</b> — We followed the ISO/IEC/IEEE <b>29148</b> lifecycle. We did <b>not</b> jump straight to an SRS — a precise spec of the wrong thing is worthless. Business goals were frozen first.</div>

<!--
The first thing we agreed on was a process: elicit, analyze, specify, validate, manage. We deliberately started upstream — with the Vision — and froze the business goals before specifying details. You cannot write a precise specification on top of a moving goal.
-->

---
class: py-7
glowSeed: 17
---

# Grounded in Recognized Standards

<div class="grid grid-cols-2 gap-3 mt-6 text-sm">

<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:flow text-xl text-emerald-300 shrink-0" /><div><b>ISO/IEC/IEEE 29148</b><div class="text-xs opacity-75">overall RE lifecycle process</div></div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:document-blank text-xl text-blue-300 shrink-0" /><div><b>IEEE Std 830-1998</b><div class="text-xs opacity-75">SRS section structure</div></div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:cube-view text-xl text-amber-300 shrink-0" /><div><b>ISO/IEC 25010</b><div class="text-xs opacity-75">quality model → complete NFRs</div></div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:locked text-xl text-red-300 shrink-0" /><div><b>OWASP Top 10 + WCAG 2.1</b><div class="text-xs opacity-75">security &amp; accessibility baseline</div></div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:trophy text-xl text-fuchsia-300 shrink-0" /><div><b>IFHA Agreement 2024</b><div class="text-xs opacity-75">real racing rules → BR-XX</div></div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-4 flex gap-3"><div class="i-carbon:user-friendliness text-xl text-cyan-300 shrink-0" /><div><b>Wiegers Vision template</b><div class="text-xs opacity-75">lightweight upstream artifact</div></div></div>

</div>

<div class="renote mt-3"><b>RE</b> — Each standard fills a known gap. <b>ISO 25010</b> guarantees NFR completeness; <b>IFHA</b> makes our business rules defensible, not invented.</div>

<!--
Every choice traces to a standard. ISO 25010 is the checklist that stops us forgetting a quality attribute. IFHA is the real international racing rulebook — so our business rules aren't imagined, they're grounded in actual regulation.
-->

---
class: py-7
glowSeed: 23
---

# Assignment 1 — Vision &amp; Scope

<div class="grid grid-cols-[1fr_1.2fr] gap-4 mt-4">

<div class="rounded-xl border-l-4 border-cyan-400 bg-cyan-400/8 p-4 text-xs leading-relaxed opacity-95">
<b class="text-cyan-200">Vision statement</b><br/>
For <b>tournament organizers</b> who must manage every aspect of a racing event, the <b>HRTMS</b> is a <b>web + mobile platform</b> that centralizes planning, scheduling, entries, results &amp; communication. <span class="opacity-70">Unlike</span> fragmented spreadsheets, it is <b>centralized &amp; real-time</b>.
</div>

<div class="text-xs">
<table>
<tr><th>Objective</th><th>Goal</th></tr>
<tr><td><b>BO-1</b> Admin time</td><td class="text-emerald-300 font-bold">−50% (6 mo)</td></tr>
<tr><td><b>BO-2</b> Errors &amp; conflicts</td><td class="text-emerald-300 font-bold">&lt;2% (3 mo)</td></tr>
<tr><td><b>BO-3</b> Satisfaction</td><td class="text-emerald-300 font-bold">+30%</td></tr>
<tr><td><b>SM-3</b> Discrepancies</td><td class="text-red-300 font-bold">ZERO</td></tr>
</table>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — SMART objectives each carry a <b>past → goal → stretch</b> scale. <b>SM-3 'zero discrepancies'</b> is so strict it migrates from a metric into a hard requirement (the Provisional→Approved sign-off).</div>

<!--
The Vision is the classic elevator pitch — who, what, why-better — in one sentence. Under it sit SMART objectives: halve admin time, cut errors below 2 percent, boost satisfaction 30 percent. And SM-3 is special — 'zero discrepancies' is so strict it stops being a metric and becomes a hard requirement you'll see realized in the results workflow.
-->

---
class: py-7
glowSeed: 29
---

# Scope — 9 Features across 3 Releases

<div class="text-[11px] mt-3">
<table>
<tr><th>Feature</th><th>R1 (MVP)</th><th>R2 (Growth)</th><th>R3 (Mature)</th></tr>
<tr><td class="font-bold text-cyan-300">FE-1 Tournament</td><td>Create &amp; schedule</td><td>Conflict detection</td><td>Templates</td></tr>
<tr><td class="font-bold text-cyan-300">FE-2/3 Horse &amp; Jockey</td><td>Basic + verify</td><td>Compliance</td><td>Analytics</td></tr>
<tr><td class="font-bold text-cyan-300">FE-4/5 Entry &amp; Results</td><td>Manual entry</td><td>Ballot + semi-auto</td><td>Photo-finish</td></tr>
<tr><td class="font-bold text-cyan-300">FE-6/8 Comms &amp; Reports</td><td>Basic</td><td>Dashboards</td><td>Predictive</td></tr>
<tr><td class="opacity-50">FE-7 Betting · FE-9 Vet</td><td class="text-red-300">❌</td><td>Basic</td><td>Full</td></tr>
</table>
</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-300">In R1:</b> operational core — scheduling, registration w/ verification, entries, results, notifications.</div>
  <div class="rounded-lg border border-red-400/20 bg-red-400/8 p-3"><b class="text-red-300">Explicitly out:</b> betting (FE-7), auto photo-finish, live streaming, dressage — written down to block scope creep.</div>
</div>

<div class="renote mt-2"><b>RE</b> — Stable feature IDs (FE-x) are the spine of traceability. The <b>exclusions list</b> did as much for success as the feature list — saying 'no' is a scope decision.</div>

<!--
Nine features, phased: R1 is centralized but manual, R2 adds automation, R3 adds intelligence. We deferred betting and veterinary until the operational core is proven. Just as important is what's explicitly out — those exclusions, written down, are what protect us from scope creep.
-->

---
class: py-7
glowSeed: 31
---

# Stakeholders &amp; Top Risks

<div class="grid grid-cols-2 gap-4 mt-5 text-xs">

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-4">
  <div class="font-bold text-fuchsia-200 mb-2">7 stakeholder groups profiled</div>
  <div class="opacity-90 space-y-0.5">
    <div>Organizers ⭐ · Owners · Trainers · Jockeys · Vets · Course Mgrs · Regulators</div>
    <div class="opacity-75 mt-1">Each captured on: <b>value sought · attitude · constraint</b> → generates the user classes &amp; RBAC roles.</div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4">
  <div class="font-bold text-amber-200 mb-2">Risks scored P × I — each pre-linked to a mitigation</div>
  <div class="space-y-1">
    <div><b>RI-2</b> Resistance to change (3.0) → <span class="text-emerald-300">USE-1 &lt;5-min tasks</span></div>
    <div><b>RI-4</b> Data breach (impact 10) → <span class="text-emerald-300">SEC RBAC + bcrypt</span></div>
    <div><b>RI-5</b> Poor venue connectivity → <span class="text-emerald-300">ROB-1 offline cache</span></div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Risks elicited <b>early</b> so they can be <b>designed out</b>. The right column is forward traceability: <b>risk → requirement</b>. Highest expected risk (RI-2) is human, not technical.</div>

<!--
Seven stakeholder groups, profiled on what they want, how they feel, and what constrains them — that table literally generates the user roles later. For risks: we didn't just list them, we pre-committed a mitigation for each. The highest expected risk is resistance to change — a human risk, not a technical one.
-->

---
class: py-7
glowSeed: 37
---

# Assignment 2 — The SRS

<div class="grid grid-cols-[1.1fr_1fr] gap-5 mt-5">

<div class="flex flex-col gap-2 text-sm">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-300">Built on the baselined Vision v1.0</b> · IEEE 830 structure · Approved Jun 11.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">§1 Introduction</b> <span class="opacity-60 text-xs">— purpose, ID conventions, scope, references</span></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">§2 Overall Description</b> <span class="opacity-60 text-xs">— 5 context diagrams, 9 user classes, environment, constraints</span></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">§3 System Features</b> <span class="opacity-60 text-xs">— 8 fully specified use cases</span></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">§4 Data</b> <span class="opacity-60 text-xs">— ER model + build-ready data dictionary + 4 wireframes</span></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">§5 Interfaces</b> &amp; <b class="opacity-90">§6 Quality</b> <span class="opacity-60 text-xs">— ISO 25010</span></div>
</div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4 text-xs">
  <div class="font-bold text-cyan-200 mb-2">Four modeling views, one truth</div>
  <div class="space-y-1 opacity-90">
    <div><b class="text-blue-300">Context</b> — system boundary</div>
    <div><b class="text-emerald-300">Use cases</b> — behavior</div>
    <div><b class="text-amber-300">ER</b> — data</div>
    <div><b class="text-fuchsia-300">State machine</b> — dynamics</div>
  </div>
  <div class="opacity-75 mt-2 border-t border-white/10 pt-2">Each view catches what the others miss; where they all agree, we trust the result.</div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — A standard IEEE-830 template guarantees <b>navigability</b>: anyone who's seen one such SRS can find their way around ours.</div>

<!--
The SRS specifies Release 1.0 in engineering detail, following the IEEE 830 structure. Six sections from introduction to quality attributes. The key analytical move: we used four modeling views — context, use cases, ER, and a state machine — because a single view always hides something.
-->

---
class: header-compact
glowSeed: 41
---

# System Boundary &amp; the Integrity Workflow

<div class="grid grid-cols-[1.2fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image5.png" alt="Results, Approval & Publication context diagram" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Organizer</b> enters finishing order + times.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-200">Compliance Officer</b> reviews anomalies / DQ, gives <b>official sign-off (BR-22)</b>.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">One approval fans out → <b>payouts, standings, notifications, public publication</b>.</div>
  <div class="renote"><b>RE</b> — <b>Separation of duties</b>: the person who <i>enters</i> cannot be the one who <i>certifies</i>. That split is what delivers <b>SM-3 — zero discrepancies.</b></div>
</div>

</div>

<!--
This is one of our five context diagrams — the results, approval and publication flow. It embodies the discipline that delivers our strictest metric: separation of duties. The Organizer enters results, but only the Compliance Officer certifies them. One human sign-off then triggers payouts, standings, and public publishing automatically.
-->

---
class: py-7
glowSeed: 43
---

# Behavior — 8 Use Cases (where integrity lives)

<div class="text-[11px] mt-3">
<table>
<tr><th>UC</th><th>What it does</th><th>Key rule</th></tr>
<tr><td><b>UC-1</b> Create Tournament</td><td>Define + validate event</td><td>BR-01 venue-conflict check at save</td></tr>
<tr><td><b>UC-2</b> Register Horse</td><td>Verify vs national registry</td><td>DE-1 fallback if API down</td></tr>
<tr><td><b>UC-3</b> Register Jockey</td><td>License check → status</td><td>suspended = hidden, not deleted</td></tr>
<tr><td><b>UC-4</b> Schedule Race</td><td>Time slots + prize split</td><td>BR-05 ≥30-min gap</td></tr>
<tr><td><b>UC-5</b> Enter Horse</td><td>Highest volume (≤2000/yr)</td><td>BR-07 ballot · BR-17 no double-booking</td></tr>
<tr><td><b>UC-6</b> Record Results</td><td>Provisional → approval</td><td>every starter must have a result</td></tr>
<tr><td><b>UC-7</b> Betting (R2)</td><td>Pools, odds, payouts</td><td>BR-31 auto refund</td></tr>
<tr><td><b>UC-8</b> Health Check</td><td>Vet fitness → Fit/Unfit</td><td>SAF-1: Unfit ⇒ auto-scratch</td></tr>
</table>
</div>

<div class="renote mt-2"><b>RE</b> — Use cases bridge <b>user goals ↔ system behavior</b>. <b>UC-8 enforces SAF-1 as a system action</b> — marking a horse Unfit auto-scratches it. Welfare as an automatic consequence, reliable under race-day pressure.</div>

<!--
Eight use cases. Two carry the integrity of the sport: UC-5 prevents double-booking a jockey and handles oversubscription by an automated ballot — never a human's whim. And UC-8 turns animal welfare into a guarantee: mark a horse unfit and the system scratches it and notifies the owner automatically.
-->

---
class: header-compact
glowSeed: 47
---

# Data — 7 Entities, Build-Ready

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image6.png" alt="ER Diagram" class="max-h-[410px] w-auto rounded-lg" />
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Entry</b> = the junction linking Horse · Jockey · Race · Result — the heart of the schema.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3">Every column carries <b>type · unique · required · editable · size · default</b> — six attributes, zero interpretation for the developer.</div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-200">entry_status</b> ENUM = the exact states of our state machine. <b>Cardinality 1:0..1</b> Entry→Result encodes a business rule (withdrawn horse = entry, no result).</div>
  <div class="renote"><b>RE</b> — Data dictionary &amp; dynamic model are <b>two views of the same truth</b>. Cross-view agreement is our strongest correctness evidence.</div>
</div>

</div>

<!--
The data backbone: Entry is the junction connecting a horse, a jockey, a race, and a result. Every column is specified with six attributes so a developer builds the tables with no guessing. And the entry_status enum is the exact state list from our state machine — the data model and the behavior model describe the same system from two angles.
-->

---
class: py-7
glowSeed: 53
---

# Quality — ISO 25010 (every NFR measurable)

<div class="grid grid-cols-3 gap-3 mt-6 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-4"><div class="font-bold text-emerald-200 mb-1">Usability</div><div class="text-xs opacity-85"><b>USE-1:</b> registration &lt;5 min (fights RI-2) · <b>USE-2:</b> 44px touch targets (WCAG)</div></div>
<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-4"><div class="font-bold text-blue-200 mb-1">Performance</div><div class="text-xs opacity-85"><b>PER-1:</b> 200 concurrent users, &lt;3s paint · <b>PER-2:</b> queries &lt;2s</div></div>
<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-4"><div class="font-bold text-red-200 mb-1">Security</div><div class="text-xs opacity-85"><b>SEC-1:</b> RBAC separation of duties · <b>bcrypt</b> · 30-min timeout</div></div>
<div class="rounded-xl border border-rose-400/20 bg-rose-400/8 p-4"><div class="font-bold text-rose-200 mb-1">Safety</div><div class="text-xs opacity-85"><b>SAF-1:</b> no Unfit horse may start — enforced by the system</div></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4"><div class="font-bold text-amber-200 mb-1">Availability</div><div class="text-xs opacity-85"><b>AVL-1:</b> &gt;99.5% uptime during active seasons</div></div>
<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4"><div class="font-bold text-cyan-200 mb-1">Robustness</div><div class="text-xs opacity-85"><b>ROB-1:</b> offline cache on network drop (fights RI-5)</div></div>

</div>

<div class="renote mt-3"><b>RE</b> — Using ISO 25010 guarantees <b>complete, non-overlapping</b> NFRs. No 'fast' or 'secure' — only '&lt;3 seconds' and 'bcrypt + RBAC'. Every attribute traces to a risk or objective.</div>

<!--
Section six is built on ISO 25010 so our non-functional requirements are complete — six distinct lenses, so we don't forget robustness while obsessing over performance. And every one is measurable. SAF-1 protects a living animal. The security section is our highest-impact risk, RI-4, designed away.
-->

---
class: py-7
glowSeed: 59
---

# Traceability Matrix — the Capstone

<div class="text-[11px] mt-3">
<table>
<tr><th>Objective</th><th>Metric</th><th>Feature</th><th>Use Case</th><th>Rule(s)</th><th>Risk mitigated</th></tr>
<tr><td><b>BO-1</b> −50% admin</td><td>SM-1</td><td>FE-1/2/3</td><td>UC-1/2/3</td><td>BR-35</td><td>—</td></tr>
<tr><td><b>BO-2</b> errors &lt;2%</td><td>SM-3</td><td>FE-1/4/5</td><td>UC-1/4/5/6</td><td>BR-01/05/07/22</td><td class="text-amber-300">RI-1</td></tr>
<tr><td><b>BO-3</b> +30% satisf.</td><td>SM-4</td><td>FE-6</td><td>UC-1/4/6</td><td>BR-35</td><td class="text-amber-300">RI-2</td></tr>
<tr><td>Welfare</td><td>—</td><td>FE-9</td><td>UC-8</td><td>BR-12/20, SAF-1</td><td>—</td></tr>
<tr><td>Security / Connectivity</td><td>—</td><td>—</td><td>UC-11/12</td><td>—</td><td class="text-amber-300">RI-4 / RI-5</td></tr>
</table>
</div>

<div class="grid grid-cols-3 gap-3 mt-3 text-xs">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-300">Peer review + inspection</b><div class="opacity-75">→ v0.1 draft to v1.0 baseline</div></div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-300">Cross-view consistency</b><div class="opacity-75">ER ↔ UC ↔ state machine</div></div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-300">Standards checklist</b><div class="opacity-75">ISO 25010 · OWASP · WCAG</div></div>
</div>

<div class="renote mt-3"><b>RE</b> — Read a row left→right: a business objective becomes a metric, delivered by a feature, realized in a use case, governed by rules, mitigating a risk. <b>No empty cells</b> — that is what 'complete &amp; traceable' looks like.</div>

<!--
This matrix is the capstone. Read any row left to right and you follow one business goal all the way down to a verifiable requirement and the risk it mitigates. No empty cells. Combined with peer review, cross-view checking, and standards checklists, that's how we validated that the requirements are complete and correct.
-->

---
class: py-7
glowSeed: 61
---

# What the Process Taught Us

<div class="grid grid-cols-2 gap-3 mt-7 text-sm">

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 flex gap-3"><span class="i-carbon:binoculars text-amber-300 text-2xl shrink-0" /><span><b>Elicit before you specify.</b> The Vision saved us from a precise solution to the wrong problem.</span></div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 flex gap-3"><span class="i-carbon:metric text-amber-300 text-2xl shrink-0" /><span><b>Quantify everything.</b> A goal without a number is a wish.</span></div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 flex gap-3"><span class="i-carbon:layers text-amber-300 text-2xl shrink-0" /><span><b>Multiple views catch more defects.</b> Data, behavior &amp; dynamics agreed — where they almost didn't, we found bugs.</span></div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 flex gap-3"><span class="i-carbon:security text-amber-300 text-2xl shrink-0" /><span><b>Risks designed in early are free.</b> RI-4 &amp; RI-5 became SEC &amp; ROB requirements at near-zero cost.</span></div>

</div>

<div class="mt-5 text-center text-base opacity-90">And: <b class="text-emerald-300">traceability is cheap insurance</b> — stable IDs cost minutes, saved hours.</div>

<!--
Four lessons we'll carry forward. Elicit before you specify. Quantify, because a goal without a number is a wish. Use multiple views — they catch more defects. And the biggest one: risks designed in early are free; risks found late are expensive. Thank you — we'll take your questions.
-->

---
layout: center
class: text-center
glowSeed: 67
---

<h1 class="text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Thank You</h1>

<div class="text-2xl font-bold opacity-90 mt-4">Questions &amp; Discussion</div>

<div class="mt-6 flex justify-center gap-2 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200">Team HRTMS</div>
  <div class="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-indigo-200">SWR302 · Class SE1918</div>
</div>

<div class="mt-8 text-sm opacity-50">Vision &amp; Scope v1.0 + SRS v1.0 — ISO/IEC/IEEE 29148 · IEEE 830 · ISO 25010</div>

<!--
Thank you. We're ready for your questions.
-->

<style>
/* ---------- Tables (this deck only) ---------- */
table { width: 100%; border-collapse: collapse; }
table { font-size: 0.8rem; }
th {
  background: rgba(255,255,255,0.07);
  padding: 6px 10px;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.18);
  font-weight: 600;
  color: rgba(255,255,255,0.92);
}
td {
  padding: 5px 10px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  vertical-align: top;
}
tbody tr:nth-child(even) { background: rgba(255,255,255,0.025); }
tbody tr:hover { background: rgba(255,255,255,0.05); }

/* ---------- RE Process Note callout ---------- */
.renote {
  font-size: 0.72rem;
  line-height: 1.45;
  background: rgba(59,130,246,0.10);
  border-left: 3px solid rgba(96,165,250,0.8);
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.45rem 0.7rem;
  color: rgba(226,232,240,0.92);
}
.renote b { color: #93c5fd; }

/* ---------- Compact slide headers (image slides) ---------- */
.header-compact h1 { font-size: 1.6rem !important; margin-bottom: 0.4rem !important; }

.slidev-layout { padding-top: 2.2rem; padding-bottom: 2.2rem; }
</style>