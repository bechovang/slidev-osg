---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: HRTMS — Software Requirements Engineering
exportFilename: HRTMS-Requirements-Engineering
lineNumbers: false
drawings:
  persist: false
mdc: true
routerMode: hash
info: |
  Horse Racing Tournament Management System — Vision & Scope + SRS
---

<div class="translate-x--6">

<h1 class="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
  Horse Racing Tournament<br/>Management System
</h1>

<div class="text-xl opacity-90 mt-4">
  Software Requirements Engineering — <span class="text-cyan-300 font-semibold">SWR302</span>
</div>

<div class="text-base opacity-70 mt-1">
  Vision &amp; Scope + Software Requirements Specification (SRS)
</div>

<div class="mt-5 flex justify-start gap-2 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200">Class SE1918 · SU26SWP03</div>
  <div class="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-indigo-200">Team HRTMS · June 2026</div>
</div>

<div class="mt-6 grid grid-cols-5 gap-2 max-w-3xl text-xs">
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-blue-300">Nguyễn Ngọc Phúc</div><div class="opacity-60">SE203055 · Leader</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-cyan-300">Dương Thị Khánh Ngọc</div><div class="opacity-60">SE193095</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-emerald-300">Nguyễn Phạm An</div><div class="opacity-60">SE204957</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-amber-300">Thân Nhật Huy</div><div class="opacity-60">SE203317</div></div>
  <div class="rounded-lg bg-white/5 p-2 text-center"><div class="font-bold text-fuchsia-300">Nguyễn Lê Văn Duy</div><div class="opacity-60">SE180057</div></div>
</div>

</div>

<!--
Good morning, respected instructors and classmates. We are Team HRTMS. Over the next 45 minutes we will walk you through not just what we built, but how we engineered the requirements — the full process, from the first business problem to a fully specified, traceable, standards-compliant SRS. Our subject is the Horse Racing Tournament Management System.
-->

---
class: py-8
glowSeed: 11
---

# Agenda

<div class="grid grid-cols-1 gap-3 mt-7 text-base max-w-3xl">

<div class="flex items-center gap-4 rounded-xl border border-blue-400/20 bg-blue-400/8 p-4">
  <div class="i-carbon:flow text-2xl text-blue-300 shrink-0" />
  <div><span class="font-bold text-blue-200">Section 1 — The Requirements-Engineering Process</span><div class="text-sm opacity-75">methodology, lifecycle, standards, team workflow, timeline</div></div>
</div>

<div class="flex items-center gap-4 rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4">
  <div class="i-carbon:binoculars text-2xl text-cyan-300 shrink-0" />
  <div><span class="font-bold text-cyan-200">Section 2 — Vision &amp; Scope Document</span><div class="text-sm opacity-75">Assignment 1, walked section-by-section</div></div>
</div>

<div class="flex items-center gap-4 rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-4">
  <div class="i-carbon:document text-2xl text-emerald-300 shrink-0" />
  <div><span class="font-bold text-emerald-200">Section 3 — SRS Document</span><div class="text-sm opacity-75">Assignment 2, walked section-by-section</div></div>
</div>

<div class="flex items-center gap-4 rounded-xl border border-amber-400/20 bg-amber-400/8 p-4">
  <div class="i-carbon:checkmark-outline text-2xl text-amber-300 shrink-0" />
  <div><span class="font-bold text-amber-200">Section 4 — Validation, Traceability &amp; Reflection</span><div class="text-sm opacity-75">how we proved quality</div></div>
</div>

<div class="flex items-center gap-4 rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-4">
  <div class="i-carbon:chat text-2xl text-fuchsia-300 shrink-0" />
  <div><span class="font-bold text-fuchsia-200">Section 5 — Q&amp;A</span></div>
</div>

</div>

<!--
We'll start with the process — how we approached the work and which standards guided us. Then we open Assignment 1 and walk it section by section. Then the same for the SRS. Finally we show our validation and traceability, and reflect on what we learned. Please save questions for the end.
-->

---
layout: center
class: text-center
glowSeed: 17
---

<div class="text-sm opacity-60 tracking-widest">SECTION 1</div>
<h1 class="text-4xl font-extrabold mt-2 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">The Requirements-Engineering Process</h1>
<div class="mt-3 text-base opacity-70 max-w-2xl mx-auto">Did the team follow a disciplined RE process — not just produce a document?</div>

---
class: py-7
glowSeed: 23
---

# Our RE Lifecycle — 5 Phases

<div class="grid grid-cols-5 gap-2 mt-6 text-xs">

<div class="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-center">
  <div class="font-bold text-blue-200 text-sm">1 · ELICIT</div>
  <div class="opacity-80 mt-1">business needs from stakeholders</div>
  <div class="mt-2 text-[10px] text-blue-300/80 border-t border-white/10 pt-1">Vision §1 Background</div>
</div>
<div class="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3 text-center">
  <div class="font-bold text-cyan-200 text-sm">2 · ANALYZE</div>
  <div class="opacity-80 mt-1">model the problem</div>
  <div class="mt-2 text-[10px] text-cyan-300/80 border-t border-white/10 pt-1">Vision §2,3 Scope</div>
</div>
<div class="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
  <div class="font-bold text-emerald-200 text-sm">3 · SPECIFY</div>
  <div class="opacity-80 mt-1">write the requirements</div>
  <div class="mt-2 text-[10px] text-emerald-300/80 border-t border-white/10 pt-1">SRS §1–6 REQ-FUNC/NFR</div>
</div>
<div class="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center">
  <div class="font-bold text-amber-200 text-sm">4 · VALIDATE</div>
  <div class="opacity-80 mt-1">review + inspect</div>
  <div class="mt-2 text-[10px] text-amber-300/80 border-t border-white/10 pt-1">Revision History draft→baseline</div>
</div>
<div class="rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 p-3 text-center">
  <div class="font-bold text-fuchsia-200 text-sm">5 · MANAGE</div>
  <div class="opacity-80 mt-1">version + trace</div>
  <div class="mt-2 text-[10px] text-fuchsia-300/80 border-t border-white/10 pt-1">IDs + BR-XX traceability</div>
</div>

</div>

<div class="flex items-center justify-center gap-1 mt-3 text-amber-300 text-lg">
  <span>→</span><span>→</span><span>→</span><span>→</span>
</div>

<div class="renote mt-3"><b>RE</b> — The canonical ISO/IEC/IEEE 29148 lifecycle. Assignment 1 = Elicitation + early Analysis; Assignment 2 = detailed Analysis + Specification; both carry Validation &amp; Management artifacts.</div>

<!--
Before any feature, we agreed on a process: elicit, analyze, specify, validate, manage. We did NOT jump straight to an SRS. We started upstream with the business problem — a precise specification is worthless if it specifies the wrong thing. That is why Assignment 1, the Vision and Scope, came first.
-->

---
class: py-7
glowSeed: 31
---

# Standards &amp; Frameworks We Applied

<div class="text-sm mt-4">

| Standard / Framework | Where applied | Why |
|----------------------|---------------|-----|
| **Karl Wiegers — Vision &amp; Scope** | Assignment 1 structure | Lightweight artifact for *business* requirements before a full SRS |
| **IEEE Std 830-1998** | SRS section structure | Classic SRS anatomy (Intro → Overall Description → Specific Reqs) |
| **ISO/IEC/IEEE 29148:2018** | Overall process | Modern successor to IEEE 830 — lifecycle RE processes |
| **ISO/IEC 25010:2011** | SRS §6 Quality Attributes | Complete, non-overlapping quality model — no missing '-ility' |
| **OWASP Top 10:2021** | SRS §6.3 Security | Concrete, prioritized web-security baseline |
| **WCAG 2.1** | SRS §5.1 / §6.1 Usability | Accessibility obligations |
| **IFHA International Agreement 2024** | Business rules (BR-XX) | Domain correctness — real racing regulations |

</div>

<div class="renote mt-3"><b>RE</b> — Each standard fills a known gap. ISO 25010 guarantees NFR *completeness*; IEEE 830 guarantees a reader can *navigate* the SRS predictably.</div>

<!--
We grounded every decision in a recognized standard. The most important for completeness is ISO 25010 — a checklist of quality attributes that stops us forgetting robustness or availability. For domain correctness we used the IFHA International Agreement — the real international horse-racing rulebook — so our business rules aren't invented, they're grounded in actual racing regulation.
-->

---
class: py-7
glowSeed: 39
---

# Team Workflow &amp; Division of Labor

<div class="text-xs mt-4">

| # | Member | ID | Owned in Vision &amp; Scope | Owned in SRS |
|---|--------|----|----------------------------|--------------|
| 1 | Nguyễn Ngọc Phúc | SE203055 | Team leader — coordination, merging, quality review | Team leader — coordination, merging, quality review |
| 2 | Dương Thị Khánh Ngọc | SE193095 | §1.1–1.5 Background → Vision | §1 Introduction |
| 3 | Nguyễn Phạm An | SE204957 | §1.6–1.7 Risks, Assumptions | §2 Overall Description + §3 Use Cases |
| 4 | Thân Nhật Huy | SE203317 | §2 Scope &amp; Limitations | §4 Data + §5 Interfaces |
| 5 | Nguyễn Lê Văn Duy | SE180057 | §3 Business Context | §6 Quality Attributes + Appendix A |

</div>

<div class="grid grid-cols-2 gap-3 mt-3 text-xs">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">
    <div class="font-bold text-blue-300 mb-1">Working method</div>
    <div class="opacity-85">Parallel authoring → peer cross-review → leader merge → team inspection → <b>baseline</b>.</div>
  </div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">
    <div class="font-bold text-emerald-300 mb-1">Single naming convention</div>
    <div class="opacity-85"><code>BO- SM- RI- FE- UC- REQ-FUNC- REQ-NFR- BR-</code> enforced across all sections.</div>
  </div>
</div>

<div class="renote mt-2"><b>RE</b> — A small-scale replica of real RE governance: parallel work for speed, a mandatory review-and-inspection gate before baselining — exactly what the Revision History records.</div>

<!--
Five members, five clear ownership areas, in both documents. The pattern mirrors real RE teams: parallel authoring for speed, but a hard review-and-inspection gate before baselining. Our team leader didn't write content — he merged and verified, the proper role of a requirements lead.
-->

---
class: py-7
glowSeed: 47
---

# Project Timeline &amp; Document Evolution

<div class="flex flex-col gap-3 mt-6 max-w-3xl mx-auto">

<div class="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:calendar text-2xl text-slate-300 shrink-0" />
  <div class="text-sm"><b>Jun 01, 2026</b> — Vision &amp; Scope initial draft <span class="opacity-60">· v0.1 draft</span></div>
</div>
<div class="flex items-center gap-4 rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3">
  <div class="i-carbon:review text-2xl text-cyan-300 shrink-0" />
  <div class="text-sm"><b>Jun 03, 2026</b> — Reviewed + inspected → baseline <span class="text-cyan-300 font-bold">· v1.0 approved</span></div>
</div>
<div class="flex items-center gap-4 rounded-lg border border-blue-400/20 bg-blue-400/8 p-3">
  <div class="i-carbon:document-export text-2xl text-blue-300 shrink-0" />
  <div class="text-sm"><b>Jun 04, 2026</b> — Assignment 1 submitted <span class="opacity-60">· Vision &amp; Scope, dated</span></div>
</div>
<div class="flex items-center gap-4 rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="i-carbon:checkmark-filled text-2xl text-emerald-300 shrink-0" />
  <div class="text-sm"><b>Jun 11, 2026</b> — Assignment 2 submitted <span class="text-emerald-300 font-bold">· SRS v1.0 approved</span></div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — The dates prove the correct dependency: business requirements (Vision) were elicited, analyzed and frozen <i>before</i> specifying the SRS. Building on a stable baseline is textbook 29148.</div>

<!--
Look at the dates. The Vision and Scope was drafted, reviewed, inspected, then baselined on June 3rd — before we started detailed SRS work. That ordering is the whole point. You cannot write a precise specification on top of a moving business goal. We froze the goal first.
-->

---
class: py-7
glowSeed: 53
---

# Toolchain &amp; Modeling Techniques

<div class="text-xs mt-4">

| RE Activity | Technique we used | Output |
|-------------|-------------------|--------|
| Stakeholder elicitation | Stakeholder profiling + domain study (IFHA) | §3.1 Stakeholder table (7 roles) |
| Problem framing | Elevator-pitch vision template (Wiegers) | §1.5 Vision Statement |
| Goal setting | SMART objectives + scales/metrics | §1.3 BO-1..4, §1.4 SM-1..4 |
| Risk management | Probability × Impact scoring | §1.6 RI-1..5 |
| Scope control | Feature list + 3-release roadmap + exclusions | §2.1–2.3 |
| System boundary | **Context diagrams** (one per activity) | SRS §2.1 (5 diagrams) |
| Behavioral analysis | **Use-case driven** (COS template) | SRS §3 (UC-1..8) |
| Data analysis | **ER modeling** + data dictionary | SRS §4.1–4.2 |
| Dynamic analysis | **State-machine** of the entry lifecycle | SRS Appendix A |
| UI envisioning | Low-fidelity **wireframes** | SRS §4.3 (4 wireframes) |
| Traceability | Unique IDs + cross-references (BR/REQ) | Throughout |

</div>

<div class="renote mt-3"><b>RE</b> — Four modeling views: context (boundary), use cases (behavior), ER (data), state machine (dynamics). Each view catches what the others miss — that is the multi-model analysis approach in 29148.</div>

<!--
We didn't rely on one modeling technique. Context diagrams define the boundary, use cases the behavior, the ER diagram the data, the state machine the dynamics. Each view catches what the others miss. Together they make the requirements complete and consistent — exactly what instructors and auditors look for.
-->

---
layout: center
class: text-center
glowSeed: 61
---

<div class="text-sm opacity-60 tracking-widest">SECTION 2</div>
<h1 class="text-4xl font-extrabold mt-2 bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">Vision &amp; Scope Document</h1>
<div class="mt-3 text-base opacity-70 max-w-2xl mx-auto">Assignment 1 — walked in the exact order it is written.<br/>For every section: the content, its purpose in the RE process, and how we produced it.</div>

---
class: py-8
glowSeed: 67
---

# Document Identity &amp; Status

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-5">
  <div class="font-bold text-cyan-200 text-lg mb-3">Vision &amp; Scope — HRTMS</div>
  <div class="flex flex-col gap-2 text-sm opacity-90">
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Version</span><span class="text-emerald-300 font-bold">1.0 — Approved</span></div>
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Course</span><span>SWR302 / SU26SWP03</span></div>
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Class</span><span>SE1918</span></div>
    <div class="flex justify-between"><span class="opacity-70">Date</span><span>June 04, 2026</span></div>
  </div>
</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-blue-200 text-lg mb-3">Revision History</div>
  <div class="text-xs">
    <table>
      <tr><th>Name</th><th>Date</th><th>Reason</th><th>Ver</th></tr>
      <tr><td>HRTMS Team</td><td>06/01/2026</td><td>Initial draft</td><td class="font-bold">0.1 draft</td></tr>
      <tr><td>HRTMS Team</td><td>06/03/2026</td><td>Baseline after review + inspection</td><td class="font-bold text-emerald-300">1.0 approved</td></tr>
    </table>
  </div>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — A Vision &amp; Scope doc is the lightweight upstream artifact (Karl Wiegers) capturing the <b>business problem, the solution vision, and the boundaries</b> — before a full SRS. Its job: get everyone agreeing on <i>what problem</i> before arguing about <i>how</i>. The v0.1 → v1.0 jump on explicit review is documentary evidence of our validation phase.</div>

<!--
This is our Vision and Scope document. Its purpose is to get everyone — sponsors, users, the build team — agreeing on the problem and the boundaries before specifying details. It is deliberately lighter than an SRS. Don't skip the revision history — it is evidence. We wrote a draft, the team reviewed and inspected it, then we baselined 1.0. From that point any change is controlled. This is how professional teams prevent requirements drift.
-->

---
class: py-7
glowSeed: 71
---

# §1. Business Requirements — Overview

<div class="grid grid-cols-2 gap-3 mt-6 text-sm">

<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.1</b> Background</div>
<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.2</b> Business Opportunity</div>
<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.3</b> Business Objectives</div>
<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.4</b> Success Metrics</div>
<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.5</b> Vision Statement</div>
<div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.6</b> Business Risks</div>
<div class="rounded-lg border col-span-2 border-cyan-400/20 bg-cyan-400/8 p-4"><b class="text-cyan-200">1.7</b> Assumptions &amp; Dependencies</div>

</div>

<div class="renote mt-4"><b>RE</b> — Section 1 is the heart of <b>elicitation</b>: What is the problem? Why solve it? What does success look like? Every downstream SRS requirement must trace back to something here — otherwise it is gold-plating.</div>

<!--
Section 1 is where elicitation lives. Seven sub-sections, taken in turn. The rule we followed: if a feature in the SRS can't trace back to a need here, it shouldn't be in the SRS.
-->

---
class: py-7
glowSeed: 73
---

# §1.1 Background — The Problem Statement

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5">
  <div class="flex items-center gap-2 mb-2 text-amber-200"><div class="i-carbon:warning-alt text-xl" /><b>Current practice</b></div>
  <div class="text-sm opacity-90 space-y-1">
    <div>• Horse racing: hugely popular (HK, UK, Australia, SE Asia) but operationally complex.</div>
    <div>• One tournament involves <b>8+ stakeholder groups</b>.</div>
    <div>• Manual records + spreadsheets + phone/email = <b>fragmented</b>.</div>
  </div>
</div>

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-5">
  <div class="flex items-center gap-2 mb-3 text-red-200"><div class="i-carbon:metric text-xl" /><b>Measured pain (quantified)</b></div>
  <div class="grid grid-cols-3 gap-2 text-center">
    <div class="bg-black/30 rounded-lg p-3"><div class="text-3xl font-extrabold text-red-300">4–6h</div><div class="text-[11px] opacity-70 mt-1">admin / day in season</div></div>
    <div class="bg-black/30 rounded-lg p-3"><div class="text-3xl font-extrabold text-red-300">8–12%</div><div class="text-[11px] opacity-70 mt-1">entry/result errors</div></div>
    <div class="bg-black/30 rounded-lg p-3"><div class="text-3xl font-extrabold text-red-300">~15%</div><div class="text-[11px] opacity-70 mt-1">events hit conflicts</div></div>
  </div>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — The Background performs <b>problem framing</b> and critically <b>quantifies</b> the pain. These baselines are what make the later objectives (BO-1, BO-2) <i>measurable</i>. Without a baseline you cannot define improvement.</div>

<!--
We didn't just say 'it's messy.' We measured it: 4 to 6 hours a day of admin, an 8 to 12 percent error rate, conflicts in 15 percent of events. These numbers become the baseline against which we'll prove success later. A goal without a baseline isn't a goal — it's a wish.
-->

---
class: py-7
glowSeed: 79
---

# §1.2 Business Opportunity

<div class="flex flex-col gap-3 mt-5 text-sm max-w-3xl">

<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:application-web text-xl text-blue-300 shrink-0" />
  <span>Build a <b>single web + mobile platform</b> for the whole tournament lifecycle — one shared workspace replacing fragmented tools.</span>
</div>
<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:user-multiple text-xl text-cyan-300 shrink-0" />
  <span><b>Target segment:</b> clubs running <b>20–200 races/season</b>, <b>50–500 horses</b>, <b>30–150 jockeys</b>.</span>
</div>
<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:trend-up text-xl text-emerald-300 shrink-0" />
  <span><b>Drivers:</b> digital transformation in sport + tightening regulation on transparency.</span>
</div>
<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:connect text-xl text-fuchsia-300 shrink-0" />
  <span><b>Future value:</b> integration with national databases + live broadcasting.</span>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — Naming a concrete target segment (club-size ranges) is an elicitation discipline — it forces design for a real customer profile, not an imaginary 'everyone'. The future-integration note plants seeds for later dependencies (DE-1, DE-2).</div>

<!--
The opportunity section answers 'why now and for whom.' We named a specific segment — mid-sized clubs with 20 to 200 races — because designing for a real customer profile keeps requirements grounded. We flagged future integrations early, so they become planned dependencies rather than surprises.
-->

---
class: py-7
glowSeed: 83
---

# §1.3 Business Objectives (BO-1 … BO-4)

<div class="text-xs mt-4">
<table>
<tr><th>ID</th><th>Objective (time-boxed)</th><th>Past</th><th>Goal</th><th>Stretch</th></tr>
<tr><td class="font-bold text-cyan-300">BO-1</td><td>Cut admin time <b>50%</b> within 6 months</td><td>4–6 hrs</td><td class="text-emerald-300 font-bold">2–3 hrs</td><td>&lt;2 hrs</td></tr>
<tr><td class="font-bold text-cyan-300">BO-2</td><td>Conflicts &amp; entry errors <b>below 2%</b> within 3 months</td><td>8–12%</td><td class="text-emerald-300 font-bold">&lt;5%</td><td>&lt;2%</td></tr>
<tr><td class="font-bold text-cyan-300">BO-3</td><td>Raise stakeholder satisfaction <b>30%</b> within 12 months</td><td>6.2/10</td><td class="text-emerald-300 font-bold">8.0/10</td><td>9.0/10</td></tr>
<tr><td class="font-bold text-cyan-300">BO-4</td><td><b>80% adoption</b> among approached orgs in year 1</td><td>—</td><td class="text-emerald-300 font-bold">80%</td><td>95%</td></tr>
</table>
</div>

<div class="renote mt-4"><b>RE</b> — Each objective is <b>SMART</b> and carries a measurement scale (past→goal→stretch). The <b>stretch</b> separates 'we met the contract' from 'we delighted the customer' — aspiration without compromising the committed goal.</div>

<!--
Four objectives, all SMART, all time-boxed, each with a measurement scale. BO-1 and BO-2 directly attack the baselines from the Background. Notice each has a stretch goal — that's how we separate 'we met the commitment' from 'we genuinely delighted the user.' The committed goal is the contract; the stretch is the ambition.
-->

---
class: py-7
glowSeed: 89
---

# §1.4 Success Metrics (SM-1 … SM-4)

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">SM-1 · Adoption</div>
  <div class="opacity-90">90% of entries via HRTMS within 3 months → manual entries down <b>≥70%</b>.</div>
</div>
<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">SM-2 · Speed</div>
  <div class="opacity-90">Result publishing time <b>45 min → under 5 min</b> within 6 months.</div>
</div>
<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">SM-3 · Accuracy</div>
  <div class="opacity-90"><b>Zero</b> discrepancies between published and official records (first season).</div>
</div>
<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">SM-4 · Communication</div>
  <div class="opacity-90">Stakeholder response time <b>+60%</b> within 6 months.</div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Objectives state intent; Success Metrics state <i>how intent is measured</i>. SM-3 ('zero discrepancies') is an <b>acceptance criterion in disguise</b> — so strict it migrates into the quality attributes and the Provisional→Approved workflow in the SRS.</div>

<!--
Metrics are how we prove the objectives happened. SM-2 instruments BO-1's efficiency goal. But SM-3 is special — 'zero discrepancies' is so strict it stops being a metric and becomes a hard requirement. You'll see it again in the SRS as the Provisional-to-Approved sign-off workflow. Good metrics migrate into requirements.
-->

---
class: py-8
layout: center
glowSeed: 97
---

# §1.5 Vision Statement

<div class="max-w-3xl mx-auto mt-4 text-left">

<div class="rounded-xl border-l-4 border-cyan-400 bg-cyan-400/8 p-5 text-base leading-relaxed opacity-95">
For <span class="text-cyan-200 font-semibold">horse racing tournament organizers</span> who <span class="text-cyan-200 font-semibold">need to efficiently manage all aspects of racing events</span>, the <span class="text-emerald-200 font-semibold">HRTMS</span> is a <span class="text-blue-200 font-semibold">web-based and mobile-enabled platform</span> that provides comprehensive tournament planning, race scheduling, horse &amp; jockey management, real-time result tracking, and stakeholder communication. <span class="opacity-70">Unlike</span> the current fragmented approach of spreadsheets and manual processes, HRTMS offers a <span class="text-amber-200 font-semibold">centralized, real-time system</span> that reduces administrative overhead, minimizes errors, and enhances transparency.
</div>

<div class="mt-4 grid grid-cols-5 gap-2 text-center text-[11px]">
  <div class="rounded bg-white/5 p-2"><b class="text-cyan-300">For</b><br/><span class="opacity-80">target user</span></div>
  <div class="rounded bg-white/5 p-2"><b class="text-cyan-300">Who</b><br/><span class="opacity-80">need</span></div>
  <div class="rounded bg-white/5 p-2"><b class="text-emerald-300">Product</b><br/><span class="opacity-80">category</span></div>
  <div class="rounded bg-white/5 p-2"><b class="text-blue-300">That</b><br/><span class="opacity-80">key benefit</span></div>
  <div class="rounded bg-white/5 p-2"><b class="text-amber-300">Unlike</b><br/><span class="opacity-80">differentiator</span></div>
</div>

</div>

<!--
If you remember one slide, remember this one. It follows the classic Geoffrey Moore / Wiegers elevator-pitch template: for whom, what need, what product, what category, what benefit, unlike what, why better. Filling every slot forced us to agree — in one sentence — on who we serve and why we're different. The two magic words are 'centralized' and 'real-time.'
-->

---
class: py-7
glowSeed: 101
---

# §1.6 Business Risks (RI-1 … RI-5)

<div class="text-xs mt-4">
<table>
<tr><th>ID</th><th>Risk</th><th>P</th><th>I</th><th>Score</th><th>Mitigation (planted here, realized in SRS)</th></tr>
<tr><td class="font-bold text-amber-300">RI-1</td><td>New compliance rules force rework</td><td>0.4</td><td>8</td><td>3.2</td><td>Modular config; rules externalized (BR-XX)</td></tr>
<tr><td class="font-bold text-amber-300">RI-2</td><td>Clubs resist change (training fear)</td><td>0.5</td><td>6</td><td class="bg-amber-900/30 font-bold">3.0</td><td>USE-1 &lt;5-min tasks; ≤10-min training videos</td></tr>
<tr><td class="font-bold text-amber-300">RI-3</td><td>National DB integration harder than expected</td><td>0.4</td><td>7</td><td>2.8</td><td>Manual-entry fallback in UC-2</td></tr>
<tr><td class="font-bold text-amber-300">RI-4</td><td>Data breach → legal/reputation</td><td>0.2</td><td>10</td><td>2.0</td><td>SEC-1/2/3 + TLS 1.2 (SRS §6.3)</td></tr>
<tr><td class="font-bold text-amber-300">RI-5</td><td>Poor connectivity at venues</td><td>0.3</td><td>5</td><td>1.5</td><td>ROB-1 offline cache (SRS §6.6)</td></tr>
</table>
</div>

<div class="text-xs opacity-70 mt-2">Risk = Probability × Impact. Highest expected risk is <b class="text-amber-300">RI-2</b> — a human risk, not a technical one.</div>

<div class="renote mt-2"><b>RE</b> — Risks are elicited <i>early</i> so they can be <i>designed out</i>. Each risk is linked to a future requirement that mitigates it — <b>forward traceability</b> from risk → requirement.</div>

<!--
We scored every risk as probability times impact. The highest expected risk is RI-2, resistance to change — not technical at all, human. The key discipline: we didn't just list risks, we pre-committed a mitigation for each. RI-5 is mitigated later by offline caching; RI-4 by the whole security section. Risks identified early become requirements designed in.
-->

---
class: py-7
glowSeed: 103
---

# §1.7 Assumptions &amp; Dependencies

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="font-bold text-blue-200 mb-3">Assumptions <span class="opacity-60 font-normal">(believed true, not guaranteed)</span></div>
  <div class="flex flex-col gap-2 opacity-90">
    <div><b class="text-blue-300">AS-1:</b> ≥10 Mbps internet at deployed venues.</div>
    <div><b class="text-blue-300">AS-2:</b> Each org names ≥1 trained administrator.</div>
    <div><b class="text-blue-300">AS-3:</b> All jockeys &amp; horses carry unique national IDs.</div>
  </div>
</div>

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-5">
  <div class="font-bold text-fuchsia-200 mb-3">Dependencies <span class="opacity-60 font-normal">(rely on external parties)</span></div>
  <div class="flex flex-col gap-2 opacity-90">
    <div><b class="text-fuchsia-300">DE-1:</b> Access to the <b>national horse registration database</b>.</div>
    <div><b class="text-fuchsia-300">DE-2:</b> Integration with <b>approved payment gateways</b>.</div>
  </div>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — Assumptions &amp; Dependencies draw the <b>boundary of control</b>. If an assumption proves false, it is a risk that just materialized (AS ↔ RI). DE-1, DE-2 become the <b>external interfaces</b> in the SRS — nothing is hand-waved.</div>

<!--
Assumptions and dependencies draw the line around what we control. DE-1 — the national horse registry — is the big one; our whole trust model depends on it. If that assumption breaks, it's risk RI-3 come true. Both dependencies reappear as concrete software interfaces in the SRS.
-->

---
class: py-7
glowSeed: 107
---

# §2. Scope and Limitations — Overview

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5 text-center">
  <div class="i-carbon:add-alt text-3xl text-emerald-300 mb-2" />
  <div class="font-bold text-emerald-200">2.1 · Inside</div>
  <div class="opacity-80 text-xs mt-1">What we <b>will</b> build (9 major features)</div>
</div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-5 text-center">
  <div class="i-carbon:calendar-tools text-3xl text-cyan-300 mb-2" />
  <div class="font-bold text-cyan-200">2.2 · When</div>
  <div class="opacity-80 text-xs mt-1">A 3-release roadmap</div>
</div>

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-5 text-center">
  <div class="i-carbon:close-outline text-3xl text-red-300 mb-2" />
  <div class="font-bold text-red-200">2.3 · Outside</div>
  <div class="opacity-80 text-xs mt-1">What we explicitly <b>won't</b> build</div>
</div>

</div>

<div class="renote mt-5"><b>RE</b> — 'Scope' is the most abused word in RE. Section 2 makes it operationally precise by separating <b>in-scope features, phasing, and explicit exclusions</b>. Saying 'no' is a scope decision — writing it down prevents scope creep.</div>

<!--
Section 2 is where we draw the fence: what's inside, when each piece comes, and — just as importantly — what's explicitly outside. The 'no' list is what protects us from scope creep during the build.
-->

---
class: py-7
glowSeed: 109
---

# §2.1 Major Features (FE-1 … FE-9)

<div class="text-xs mt-4">
<table>
<tr><th>ID</th><th>Feature</th><th>R1</th></tr>
<tr><td class="font-bold text-cyan-300">FE-1</td><td>Tournament &amp; Race Management</td><td class="text-emerald-300 font-bold">✅</td></tr>
<tr><td class="font-bold text-cyan-300">FE-2</td><td>Horse Registration &amp; Management</td><td class="text-emerald-300 font-bold">✅</td></tr>
<tr><td class="font-bold text-cyan-300">FE-3</td><td>Jockey Management</td><td class="text-emerald-300 font-bold">✅</td></tr>
<tr><td class="font-bold text-cyan-300">FE-4</td><td>Race Entry &amp; Declaration</td><td class="text-emerald-300 font-bold">✅</td></tr>
<tr><td class="font-bold text-cyan-300">FE-5</td><td>Result Recording &amp; Publication</td><td class="text-emerald-300 font-bold">✅</td></tr>
<tr><td class="font-bold text-cyan-300">FE-6</td><td>Stakeholder Communication Portal</td><td class="text-emerald-300 font-bold">✅ <span class="opacity-60 font-normal">(basic)</span></td></tr>
<tr><td class="font-bold text-cyan-300">FE-7</td><td>Betting &amp; Prize Management</td><td class="text-red-300 font-bold">❌ R2</td></tr>
<tr><td class="font-bold text-cyan-300">FE-8</td><td>Reporting &amp; Analytics</td><td class="text-emerald-300 font-bold">✅ <span class="opacity-60 font-normal">(basic)</span></td></tr>
<tr><td class="font-bold text-cyan-300">FE-9</td><td>Veterinary &amp; Health Tracking</td><td class="text-red-300 font-bold">❌ R2</td></tr>
</table>
</div>

<div class="renote mt-3"><b>RE</b> — A flat feature list with <b>stable IDs (FE-x)</b> is the backbone of traceability. IDs never change even if descriptions evolve — that permanence is what lets a test trace to a requirement trace to a feature trace to an objective.</div>

<!--
Nine features, each with a permanent ID. Those IDs are the spine of the whole project — every use case, every requirement, every test references them. They never change, even if the wording does. That permanence is what makes traceability possible.
-->

---
class: py-7
glowSeed: 113
---

# §2.2 Release Roadmap (R1 → R2 → R3)

<div class="text-[11px] mt-3">
<table>
<tr><th>Feature</th><th>R1 (MVP)</th><th>R2 (Growth)</th><th>R3 (Mature)</th></tr>
<tr><td class="font-bold text-cyan-300">FE-1 Tournament</td><td>Create &amp; schedule</td><td>Conflict detection</td><td>Lifecycle templates</td></tr>
<tr><td class="font-bold text-cyan-300">FE-2 Horse</td><td>Basic profiles</td><td>Medical &amp; stats</td><td>National DB integration</td></tr>
<tr><td class="font-bold text-cyan-300">FE-3 Jockey</td><td>Basic + license</td><td>Weight compliance</td><td>Performance analytics</td></tr>
<tr><td class="font-bold text-cyan-300">FE-4 Entry</td><td>Basic entry</td><td>Ballot &amp; withdrawal</td><td>Auto eligibility</td></tr>
<tr><td class="font-bold text-cyan-300">FE-5 Results</td><td>Manual entry</td><td>Semi-auto timing</td><td>Photo-finish integration</td></tr>
<tr><td class="font-bold text-cyan-300">FE-6 Comms</td><td>Email alerts</td><td>In-app + push</td><td>Public site + app</td></tr>
<tr><td class="opacity-50">FE-7 Betting</td><td class="text-red-300">❌</td><td>Basic pool mgmt</td><td>Full odds + multi-bet</td></tr>
<tr><td class="font-bold text-cyan-300">FE-8 Reporting</td><td>Basic export</td><td>Dashboards</td><td>Predictive analytics</td></tr>
<tr><td class="opacity-50">FE-9 Veterinary</td><td class="text-red-300">❌</td><td>Basic health</td><td>Full vet management</td></tr>
</table>
</div>

<div class="renote mt-3"><b>RE</b> — <b>Incremental, timeboxed delivery</b>: walk before you run. R1 = centralized but manual; R2 = automation; R3 = intelligence + external integration. Betting &amp; veterinary are deferred — their risk isn't justified until the operational core is proven.</div>

<!--
Read left to right: R1 is centralized but manual, R2 adds automation, R3 adds intelligence. We deliberately deferred betting and veterinary tracking — their risk isn't worth it until the operational core works. You build the spine before the limbs.
-->

---
class: py-7
glowSeed: 127
---

# §2.3 Limitations &amp; Exclusions (LI-1 … LI-5)

<div class="flex items-center justify-center mb-2 text-red-200 text-sm"><div class="i-carbon:close-outline mr-2" />What HRTMS deliberately does <b>NOT</b> do</div>

<div class="grid grid-cols-1 gap-2 max-w-3xl mx-auto text-sm">

<div class="flex items-center gap-3 rounded-lg border border-red-400/20 bg-red-400/8 p-3"><span class="font-bold text-red-300 w-12">LI-1</span><span>Flat &amp; jump racing only — <b>no</b> dressage / show jumping.</span></div>
<div class="flex items-center gap-3 rounded-lg border border-red-400/20 bg-red-400/8 p-3"><span class="font-bold text-red-300 w-12">LI-2</span><span><b>No</b> live video streaming — integrates external broadcasters.</span></div>
<div class="flex items-center gap-3 rounded-lg border border-red-400/20 bg-red-400/8 p-3"><span class="font-bold text-red-300 w-12">LI-3</span><span><b>No</b> automated photo-finish judging — human-confirmed results only.</span></div>
<div class="flex items-center gap-3 rounded-lg border border-red-400/20 bg-red-400/8 p-3"><span class="font-bold text-red-300 w-12">LI-4</span><span>Betting (FE-7) excluded from R1 → deferred to R2.</span></div>
<div class="flex items-center gap-3 rounded-lg border border-red-400/20 bg-red-400/8 p-3"><span class="font-bold text-red-300 w-12">LI-5</span><span>English only in R1 → multi-language in R3.</span></div>

</div>

<div class="renote mt-3"><b>RE</b> — Explicit exclusions are a <b>defensive</b> requirements-management technique. LI-2, LI-3 say 'we will integrate, not build' — preventing the team being pulled into a video platform or an AI judge, which are entirely different products.</div>

<!--
Every 'no' here is deliberate. We're not building a streaming service or an AI photo-finish judge — those are different products with different risk profiles. By writing the exclusions down we protect the team from scope creep. A stakeholder can't quietly add 'just one more thing' if the boundary is documented and baselined.
-->

---
class: py-7
glowSeed: 131
---

# §3. Business Context — Overview

<div class="grid grid-cols-3 gap-4 mt-8 text-sm">

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-5">
  <div class="i-carbon:user-profile text-3xl text-fuchsia-300 mb-2" />
  <div class="font-bold text-fuchsia-200">3.1 · Who</div>
  <div class="opacity-80 text-xs mt-1">Stakeholder Profiles — who cares &amp; what they want</div>
</div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5">
  <div class="i-carbon:scale text-3xl text-amber-300 mb-2" />
  <div class="font-bold text-amber-200">3.2 · Trade-offs</div>
  <div class="opacity-80 text-xs mt-1">Project Priorities — when we trade off, what wins</div>
</div>
<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="i-carbon:cloud-services text-3xl text-emerald-300 mb-2" />
  <div class="font-bold text-emerald-200">3.3 · Where</div>
  <div class="opacity-80 text-xs mt-1">Deployment — how it physically runs</div>
</div>

</div>

<div class="renote mt-5"><b>RE</b> — <b>Contextual elicitation</b>: the project doesn't exist in a vacuum. Stakeholders (3.1) feed user-class analysis; priorities (3.2) feed every trade-off decision; deployment (3.3) drives the non-functional requirements.</div>

<!--
Section 3 puts the project in its real environment — the people, the trade-off rules, and the physical deployment. Each feeds directly into a later part of the SRS.
-->

---
class: py-6
glowSeed: 137
---

# §3.1 Stakeholder Profiles

<div class="text-[11px] mt-3">
<table>
<tr><th>Stakeholder</th><th>Value Sought</th><th>Attitude</th><th>Key Constraint</th></tr>
<tr><td>Organizers</td><td>Streamlined ops, oversight</td><td>Highly supportive</td><td>Comply with national rules</td></tr>
<tr><td>Horse Owners</td><td>Transparency, prize info</td><td>Supportive (need training)</td><td>Limited tech, need mobile</td></tr>
<tr><td>Jockeys</td><td>Clear scheduling</td><td>Generally positive</td><td>Mobile, on-the-go</td></tr>
<tr><td>Trainers</td><td>Efficient horse mgmt</td><td>Receptive</td><td>Many horses/owners</td></tr>
<tr><td>Regulators</td><td>Compliance, accuracy</td><td>Supportive (mandated)</td><td>Strict audit trail</td></tr>
<tr><td>Course Managers</td><td>Resource planning</td><td>Supportive if easy</td><td>Budget limits</td></tr>
<tr><td>Veterinarians</td><td>Streamlined health checks</td><td>Supportive</td><td>On-site access</td></tr>
</table>
</div>

<div class="renote mt-2"><b>RE</b> — Stakeholder profiling is the <b>first output of elicitation</b>. It generates the user classes (SRS §2.2) and RBAC roles (SRS §6.3). Capturing <b>attitude</b> matters: a supportive vs resistant stakeholder needs very different engagement (feeds risk RI-2).</div>

<!--
Seven stakeholder groups, each profiled on three axes: what they want, how they feel, and what constrains them. This table isn't background color — it literally generates the user roles and access-control rules later. Regulators are mandated supporters, owners may need hand-holding. Different stakeholders, different strategies.
-->

---
class: py-7
glowSeed: 139
---

# §3.2 Project Priorities (Driver / Constraint / Freedom)

<div class="text-[11px] mt-4">
<table>
<tr><th>Dimension</th><th>Constraint (fixed)</th><th>Driver (priority)</th><th>Degree of Freedom (flexible)</th></tr>
<tr><td class="font-bold">Features</td><td>All R1 features must work</td><td>FE-1/2/3/5 top priority</td><td class="text-emerald-300">FE-6 &amp; FE-8 can scale down</td></tr>
<tr><td class="font-bold">Quality</td><td>100% result accuracy</td><td>95% acceptance tests pass</td><td class="text-emerald-300">UI polish → R2</td></tr>
<tr><td class="font-bold">Schedule</td><td>Ship before next season</td><td>Core race mgmt drives timeline</td><td class="text-emerald-300">≤2-week overrun OK</td></tr>
<tr><td class="font-bold">Cost</td><td>≤10% budget overrun</td><td>Dev cost ≤ approved budget</td><td class="text-emerald-300">Cloud scales with usage</td></tr>
</table>
</div>

<div class="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
  <div class="rounded-lg border border-red-400/20 bg-red-400/8 p-2"><b class="text-red-300">Constraint</b><br/>immovable</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-2"><b class="text-amber-300">Driver</b><br/>the priority</div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-2"><b class="text-emerald-300">Freedom</b><br/>expendable</div>
</div>

<div class="renote mt-3"><b>RE</b> — The <b>driver/constraint/freedom</b> model (Wiegers) pre-decides every trade-off. Under pressure the team consults this table and <b>sacrifices a degree of freedom, never a constraint or driver</b>. Result accuracy is immovable; UI polish is expendable.</div>

<!--
This is our pre-made trade-off rulebook. Three columns: what's fixed, what's the priority, and what we're allowed to flex. When the build gets hard and someone says 'we have to cut something,' the answer is here. We cut a degree of freedom like UI polish; we never cut a constraint like result accuracy.
-->

---
class: py-7
glowSeed: 149
---

# §3.3 Deployment Considerations

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="flex items-center gap-2 mb-2 text-blue-200"><div class="i-carbon:cloud text-xl" /><b>Infrastructure</b></div>
  <div class="opacity-90 space-y-1">
    <div>• <b>Cloud web app</b> — browsers + mobile.</div>
    <div>• <b>On-site terminals</b> at racecourses for real-time race-day entry.</div>
    <div>• <b>Offline capture + auto-sync</b> (mitigates <b class="text-amber-300">RI-5</b>).</div>
  </div>
</div>
<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="flex items-center gap-2 mb-2 text-emerald-200"><div class="i-carbon:user-certification text-xl" /><b>Adoption</b></div>
  <div class="opacity-90 space-y-1">
    <div>• <b>Training videos</b> ≤10 min per role (mitigates <b class="text-amber-300">RI-2</b>).</div>
    <div>• <b>Pilot</b> with 3–5 clubs, then broader rollout.</div>
    <div>• Phased deployment risk reduction.</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Deployment is where several NFRs originate. Offline-first design is the <b>engineering realization</b> of RI-5; the pilot rollout is <b>phased deployment risk reduction</b> that attacks adoption risk RI-2.</div>

<!--
Deployment is where risks become engineering. Poor connectivity, RI-5, becomes offline-first design. Adoption risk, RI-2, becomes a pilot with 3 to 5 clubs before scaling. Nothing here is decoration — every line traces back to a risk or objective.
-->

---
class: py-8
layout: center
glowSeed: 151
---

# Vision &amp; Scope — Recap

<div class="grid grid-cols-2 gap-3 max-w-3xl mt-6 text-sm">

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Elicited</b> the problem, quantified it, framed the opportunity.</span></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Set measurable goals</b> (SMART objectives + metrics).</span></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Drew the boundary</b> — features, phasing, exclusions.</span></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Profiled stakeholders</b> &amp; pre-decided trade-offs.</span></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Identified risks early</b> &amp; linked each to a mitigation.</span></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4 flex items-center gap-3"><div class="i-carbon:checkmark-filled text-emerald-300 text-xl" /><span><b>Baselined</b> business requirements (v1.0) — a stable foundation.</span></div>

</div>

<div class="mt-5 text-emerald-300 font-bold text-lg">→ A stable foundation, ready to specify against.</div>

<!--
That completes Assignment 1. In process terms: solid elicitation, measurable goals, a clear boundary, baselined. We now have a stable foundation — the precondition for writing a precise SRS. That is exactly what Assignment 2 does.
-->

---
layout: center
class: text-center
glowSeed: 157
---

<div class="text-sm opacity-60 tracking-widest">SECTION 3</div>
<h1 class="text-4xl font-extrabold mt-2 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">SRS Document</h1>
<div class="mt-3 text-base opacity-70 max-w-2xl mx-auto">Assignment 2 — built on the baselined Vision, walked in the exact IEEE-830 order it is written.</div>

---
class: py-8
glowSeed: 163
---

# SRS — Document Identity &amp; Approach

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 text-lg mb-3">Software Requirements Specification — HRTMS</div>
  <div class="flex flex-col gap-2 text-sm opacity-90">
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Version</span><span class="text-emerald-300 font-bold">1.0 — Approved</span></div>
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Approved</span><span>June 11, 2026</span></div>
    <div class="flex justify-between border-b border-white/10 pb-1"><span class="opacity-70">Built on</span><span>Vision &amp; Scope v1.0</span></div>
    <div class="flex justify-between"><span class="opacity-70">Audience</span><span>PMs · Devs · QA · Regulators</span></div>
  </div>
</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-blue-200 text-lg mb-3">Structure follows standards</div>
  <div class="flex flex-col gap-2 text-sm opacity-90">
    <div class="flex items-center gap-2"><div class="i-carbon:document-blank text-blue-300" /> <b>IEEE Std 830-1998</b> — Intro → Overall Description → Specific Requirements</div>
    <div class="flex items-center gap-2"><div class="i-carbon:flow text-emerald-300" /> Superseded guidance from <b>ISO/IEC/IEEE 29148:2018</b></div>
    <div class="flex items-center gap-2"><div class="i-carbon:cube-view text-amber-300" /> Quality model from <b>ISO/IEC 25010:2011</b></div>
  </div>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — Using a <b>standard SRS template</b> guarantees completeness and navigability: a reviewer who has read one IEEE-830 SRS can find their way around any other. Keeping the <b>audience explicit</b> matters because requirements are written <i>for</i> someone.</div>

<!--
The SRS specifies Release 1.0 in engineering detail. We followed IEEE 830 because it's predictable — anyone who's seen one such document can navigate ours. We stated the audience up front: managers, developers, testers, regulators, because each reads it differently.
-->

---
class: py-7
glowSeed: 167
---

# §1. Introduction — Overview

<div class="grid grid-cols-2 gap-3 mt-8 text-sm">

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4"><b class="text-emerald-200">1.1</b> Purpose</div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4"><b class="text-emerald-200">1.2</b> Document Conventions</div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4"><b class="text-emerald-200">1.3</b> Project Scope &amp; Product Features</div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-4"><b class="text-emerald-200">1.4</b> References</div>

</div>

<div class="renote mt-6"><b>RE</b> — Section 1 of an IEEE-830 SRS is <b>meta-information about the document</b>: what it's for, how to read it, what it covers, what it builds on. Skipping it is a classic student mistake — it is what makes a spec <i>self-describing</i>.</div>

<!--
Section 1 is meta-information about the document itself. Four sub-sections. Skipping it is a classic student mistake — it's what makes a specification self-describing.
-->

---
class: py-7
glowSeed: 173
---

# §1.1 Purpose &nbsp;·&nbsp; §1.2 Document Conventions

<div class="grid grid-cols-2 gap-5 mt-6">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-3">§1.1 Purpose</div>
  <div class="text-sm opacity-90 space-y-2">
    <div>Specifies the <b>functional &amp; non-functional requirements for Release 1.0</b>.</div>
    <div><b>Intended audience:</b> project managers, developers, QA engineers, domain regulators.</div>
    <div>Serves to <b>verify compliance</b> and <b>guide technical implementation</b>.</div>
  </div>
</div>

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="font-bold text-blue-200 mb-3">§1.2 The labeling scheme</div>
  <div class="text-sm opacity-90 space-y-2">
    <div><code class="text-cyan-300">REQ-FUNC-XXX</code> — Functional Requirements</div>
    <div><code class="text-cyan-300">REQ-NFR-XXX</code> — Non-Functional Requirements</div>
    <div><code class="text-cyan-300">BR-XX</code> — Business Rules (catalogued in Part C)</div>
    <div class="opacity-75 text-xs">Priority: <b class="text-red-300">High</b> (critical core) · <b class="text-amber-300">Medium</b> (R1/R2) · <b class="opacity-70">Low</b> (optional)</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — A consistent, unique ID scheme is the <b>infrastructure of traceability</b>. It lets a tester cite <code>REQ-FUNC-014</code>, a developer grep for it, a change request reference it — without ambiguity.</div>

<!--
The purpose declares scope and audience in two lines. The convention section: every requirement has a unique, typed ID. This isn't pedantry — it's the address system of the whole project. A bug report cites a REQ-FUNC, a test verifies it, a change request modifies it. Without stable IDs, traceability collapses.
-->

---
class: py-7
glowSeed: 179
---

# §1.3 R1 Scope &amp; Product Features &nbsp;·&nbsp; §1.4 References

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">§1.3 What Release 1.0 includes</div>
  <div class="text-xs opacity-90 space-y-1">
    <div>✅ Tournament &amp; race scheduling</div>
    <div>✅ Horse &amp; jockey registrations (with verification)</div>
    <div>✅ Race entries &amp; declarations</div>
    <div>✅ Result recording, validation, official publication</div>
    <div>✅ Real-time stakeholder notifications</div>
    <div>✅ Veterinary pre-race health compliance</div>
  </div>
  <div class="mt-2 text-xs rounded bg-red-900/20 border border-red-400/20 p-2"><b class="text-red-300">Out of R1:</b> betting (FE-7) &amp; automated photo-finish — deferred for legislative/technical complexity.</div>
</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-blue-200 mb-2">§1.4 References</div>
  <div class="text-xs opacity-90 space-y-1">
    <div>1. HRTMS Vision &amp; Scope (Assignment 1)</div>
    <div>2. IFHA International Agreement 2024</div>
    <div>3. IEEE Std 830-1998</div>
    <div>4. ISO/IEC/IEEE 29148:2018</div>
    <div>5. ISO/IEC 25010:2011</div>
    <div>6. OWASP Top 10:2021</div>
    <div>7. W3C WCAG 2.1</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Reference #1 (our Vision) establishes the <b>traceability chain</b> SRS → business requirements. Restating boundaries at the start of the SRS prevents a reader assuming a deferred feature is in scope — boundaries stated twice are boundaries respected.</div>

<!--
We re-state the R1 scope in SRS terms and repeat the exclusions. If a reader skims and assumes betting is included, this section corrects them immediately. The references: IFHA is domain, IEEE and ISO are methodological, and reference one — our own Vision — is the upstream link in our traceability chain.
-->

---
class: py-7
glowSeed: 181
---

# §2. Overall Description — Overview

<div class="grid grid-cols-5 gap-2 mt-8 text-xs">

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">2.1</b><div class="opacity-80 mt-1">Product Perspective<br/>(5 context diagrams)</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">2.2</b><div class="opacity-80 mt-1">User Classes</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">2.3</b><div class="opacity-80 mt-1">Operating Environment</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">2.4</b><div class="opacity-80 mt-1">Design Constraints</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">2.5</b><div class="opacity-80 mt-1">Assumptions &amp; Dependencies</div></div>

</div>

<div class="renote mt-6"><b>RE</b> — Section 2 is the <b>'black-box' view</b> — what the system is, who uses it, where it runs — <i>before</i> Section 3 says what it does in detail. This top-down ordering (whole system first, features second) is core to IEEE 830.</div>

<!--
Section 2 paints the whole system before drilling into specifics. Product perspective, user classes, environment, constraints, assumptions. Five sub-sections that describe the box before we open it.
-->

---
class: py-7
glowSeed: 191
---

# §2.1 Product Perspective — approach: 5 diagrams

<div class="flex flex-col gap-3 mt-5 text-sm max-w-3xl">

<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:application text-xl text-blue-300 shrink-0" />
  <span>HRTMS is an <b>online platform</b> replacing paper, manual scheduling, scattered spreadsheets — <b>one shared workspace</b>.</span>
</div>
<div class="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
  <div class="i-carbon:connect text-xl text-fuchsia-300 shrink-0" />
  <span>Connects to <b>outside partners</b> (national horse registry, jockey licensing authority, banking &amp; notification providers) — staff never re-key data.</span>
</div>
<div class="flex items-center gap-3 rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3">
  <div class="i-carbon:layers text-xl text-cyan-300 shrink-0" />
  <span><b>Design choice:</b> instead of one giant diagram, we use <b>5 focused context diagrams</b>, one per real business activity.</span>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — A <b>context diagram</b> defines the <b>system boundary</b>: what's inside (the system) vs outside (actors &amp; external systems), and what flows between them. We split into five because a monolithic diagram for a system this size is unreadable.</div>

<!--
Product perspective is where we define the boundary. Rather than one overwhelming diagram, we drew five, each around a real business activity. Each is readable and maps to a cluster of use cases. Let's walk them.
-->

---
class: header-compact
glowSeed: 193
---

# §2.1 Diagram 1 — User Administration &amp; Compliance

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image1.png" alt="Context Diagram 1" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="flex flex-col gap-2 text-xs">
  <div class="rounded-lg border border-blue-400/20 bg-blue-400/8 p-3"><b class="text-blue-200">System Administrator (UC-11):</b> sets up users, roles, permissions; ensures safe backups.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-200">Compliance Officer (UC-12):</b> reviews action history, requests reports, issues rulings/policy.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">Staff sign in via <b>central login (SSO)</b> + <b>phone confirmation code (2FA)</b> before sensitive screens.</div>
  <div class="renote"><b>RE</b> — The <b>trust infrastructure</b>, foundational. SSO + 2FA on sensitive screens is the design response to security risk <b>RI-4</b>.</div>
</div>

</div>

<!--
Diagram one is the trust layer. Before anyone records a result or registers a horse, we establish who they are and what they may do. Two-factor auth on sensitive screens means a stolen password alone can't approve a result — that's RI-4 designed away.
-->

---
class: header-compact
glowSeed: 197
---

# §2.1 Diagram 2 — Tournament &amp; Race Scheduling

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image2.png" alt="Context Diagram 2" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="flex flex-col gap-2 text-xs">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Organizer</b> defines each race (distance, age limits, prize money).</div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-200">Racecourse Manager</b> confirms free tracks &amp; time slots.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">System <b>warns about timing overlaps (BR-05)</b> &amp; checks venue details → publishes the <b>official race calendar</b>; public can view; everyone notified.</div>
  <div class="renote"><b>RE</b> — Where <b>BO-2</b> (conflicts &lt;2%) is engineered. Context diagram = info flow; use cases = behavior; <b>BR-05</b> = the constraint that catches overlaps. Three views of one anti-conflict mechanism.</div>
</div>

</div>

<!--
Diagram two is where the season takes shape — and where BO-2 gets engineered. The system catches timing overlaps automatically via BR-05, so a clash a human would miss is blocked at the data layer.
-->

---
class: header-compact
glowSeed: 199
---

# §2.1 Diagram 3 — Registration &amp; Health Validation

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image3.png" alt="Context Diagram 3" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="flex flex-col gap-2 text-xs">
  <div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-200">Owners</b> register horses; <b class="text-fuchsia-200">jockeys</b> provide licence + weight.</div>
  <div class="rounded-lg border border-blue-400/20 bg-blue-400/8 p-3">System <b>verifies against national horse registry &amp; licensing authority</b>.</div>
  <div class="rounded-lg border border-red-400/20 bg-red-400/8 p-3"><b class="text-red-200">Veterinarian</b> records fitness. System enforces <b>vaccination &amp; health rules (BR-12, SAF-1)</b> — no unfit horse slips through.</div>
  <div class="renote"><b>RE</b> — The <b>safety gate</b>: three independent checks (identity, license, vet fitness) must all pass. Encoding <b>SAF-1 as a system rule</b> makes animal welfare reliable and auditable.</div>
</div>

</div>

<!--
Diagram three is the safety gate. Identity, license, and vet fitness must all pass. By making 'no unfit horse may start' a hard system rule — SAF-1 — we turn animal welfare from a hope into a guarantee, and it's auditable.
-->

---
class: header-compact
glowSeed: 211
---

# §2.1 Diagram 4 — Race Entry &amp; Declarations

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image4.png" alt="Context Diagram 4" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="flex flex-col gap-2 text-xs">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Trainer</b> enters a horse &amp; proposes a jockey (<b>BR-14, BR-19</b>); jockey accepts/declines.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3">When over-subscribed, an <b>independent draw (BR-07)</b> decides entrants &amp; starting lanes — transparently.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">Trainer may <b>withdraw with a medical certificate (BR-20)</b>. Organizer locks the line-up → all receive the <b>confirmed race card</b>.</div>
  <div class="renote"><b>RE</b> — The most <b>contentious</b> activity — who gets to run. Sport integrity depends on selection being <b>non-arbitrary</b>; <b>BR-07</b> mandates an independent, auditable draw.</div>
</div>

</div>

<!--
Diagram four is the most politically sensitive — oversubscription. The answer can't be a human's whim; it has to be a transparent independent draw, BR-07. Drawing this boundary first guarantees the use case implements a fair mechanism.
-->

---
class: header-compact
glowSeed: 223
---

# §2.1 Diagram 5 — Results, Approval &amp; Publication

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image5.png" alt="Context Diagram 5" class="max-h-[400px] w-auto rounded-lg" />
</div>

<div class="flex flex-col gap-2 text-xs">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">Times captured at track; <b class="text-emerald-200">Organizer</b> enters finishing order + post-race weights.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-200">Compliance Officer</b> reviews anomalies, handles objections/DQ (<b>BR-24</b>), gives <b>official sign-off (BR-22)</b>.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3">Once approved → <b>prize payouts (BR-32)</b>, <b>standings &amp; honour roll (BR-27)</b>, notifications, <b>public publication</b>.</div>
  <div class="renote"><b>RE</b> — <b>Separation of duties</b>: Organizer <i>enters</i>, only Compliance Officer <i>approves</i>. That split delivers <b>SM-3</b> (zero discrepancies) — one approval fans out to four automated effects.</div>
</div>

</div>

<!--
Diagram five delivers metric SM-3 — zero discrepancies — through separation of duties. The Organizer enters results; only the Compliance Officer certifies them. And one sign-off triggers payouts, standings, notifications, and public publishing automatically. One human decision, four downstream effects.
-->

---
class: py-7
glowSeed: 227
---

# §2.2 User Classes &amp; Characteristics

<div class="text-xs mt-3">
<table>
<tr><th>#</th><th>User Class</th><th>Usage</th><th>Notes</th></tr>
<tr><td>1</td><td><b>Tournament Organizer</b> ⭐ <span class="text-amber-300">(favored)</span></td><td>High</td><td>UX optimized here</td></tr>
<tr><td>2</td><td>Horse Owner</td><td>Low–moderate</td><td>Limited tech, mobile</td></tr>
<tr><td>3</td><td>Trainer</td><td>High daily</td><td>Many horses/owners</td></tr>
<tr><td>4</td><td>Jockey</td><td>Moderate, mobile</td><td>On-the-go</td></tr>
<tr><td>5</td><td>Veterinarian</td><td>Intensive (race days)</td><td>On-site tablet</td></tr>
<tr><td>6</td><td>Racecourse Manager</td><td>Moderate</td><td>Venue logistics</td></tr>
<tr><td>7</td><td>Regulatory Official</td><td>Periodic</td><td>Audits/approvals</td></tr>
<tr><td>8</td><td>System Administrator</td><td>Ongoing</td><td>Access/backups</td></tr>
<tr><td>9</td><td>Public / Spectator (R1)</td><td>High, anonymous</td><td>Read-only</td></tr>
<tr><td>10</td><td>Bettor</td><td>—</td><td class="text-amber-300 font-bold">R2 only</td></tr>
</table>
</div>

<div class="renote mt-2"><b>RE</b> — User classes are the <b>direct descendant</b> of stakeholder profiles (Vision §3.1) — now operationally precise. Marking the Organizer <b>'favored'</b> is a <b>prioritization decision</b> telling UX where to spend polish budget first.</div>

<!--
Nine roles plus the bettor reserved for R2. These flow directly from the stakeholder table in Assignment 1 — but now with usage frequency. Marking the Organizer 'favored' is a real prioritization decision: when UX budget is tight, the heaviest user gets it first.
-->

---
class: py-7
glowSeed: 229
---

# §2.3–2.5 Environment, Constraints, Assumptions

<div class="grid grid-cols-3 gap-3 mt-5 text-xs">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-4">
  <div class="font-bold text-blue-200 mb-2">§2.3 Operating Environment</div>
  <div class="opacity-90 space-y-1">
    <div><b>Client:</b> Chrome 90+, Safari 14+, Firefox 88+, Edge 90+ — Win/macOS/Android/iOS.</div>
    <div><b>Server:</b> Ubuntu 20.04+, PostgreSQL 13+, Docker.</div>
    <div><b>Network:</b> ≥5 Mbps at racecourses.</div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4">
  <div class="font-bold text-amber-200 mb-2">§2.4 Constraints</div>
  <div class="opacity-90 space-y-1">
    <div><b>CO-1:</b> Modern MVC/REST (Django, Spring Boot, Rails).</div>
    <div><b>CO-2:</b> Responsive 320px → 2560px.</div>
    <div><b>CO-3:</b> <b>Multi-tenant</b> schema — strict per-club isolation.</div>
    <div><b>CO-4:</b> OWASP Top 10 + inline docs.</div>
  </div>
</div>

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-4">
  <div class="font-bold text-fuchsia-200 mb-2">§2.5 Assumptions &amp; Dependencies</div>
  <div class="opacity-90 space-y-1">
    <div><b>AS-1:</b> Authorities provide an agreed verification-query method.</div>
    <div><b>AS-2:</b> Jockeys &amp; horses have pre-assigned national IDs.</div>
    <div><b>DE-1:</b> A <b>notification service</b> is available.</div>
    <div><b>DE-2:</b> <b>Payment gateway</b> services available for future betting.</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Pinning specific browser/server versions makes requirements <b>testable</b> (QA knows exactly what to cover). <b>CO-3 multi-tenancy</b> is the most consequential constraint — it dictates the data architecture and enables the SaaS model.</div>

<!--
We pinned concrete versions, not 'modern browsers' — that makes requirements testable. The big constraint is CO-3, multi-tenancy: it dictates the whole data architecture and enables the SaaS model. The assumptions now name concrete services instead of vague 'external providers.'
-->

---
class: py-7
glowSeed: 233
---

# §3. System Features — Use-Case Driven

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">Behavioral specification</div>
  <div class="opacity-90 space-y-1">
    <div>• <b>8 use cases (UC-1 … UC-8)</b>, each fully specified.</div>
    <div>• Template per <code>COS Use Cases.docx</code>.</div>
    <div>• Each UC references features (FE-x) &amp; business rules (BR-xx) → <b>traceability</b>.</div>
  </div>
</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-blue-200 mb-2">Template fields (per UC)</div>
  <div class="text-xs opacity-85">ID · actors · description · trigger · preconditions · postconditions · <b class="text-emerald-300">normal flow</b> · <b class="text-cyan-300">alternative flows</b> · <b class="text-amber-300">exceptions</b> · priority · frequency · <b>business rules</b> · assumptions</div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Use cases bridge <b>user goals</b> and <b>system behavior</b>. The three flow types exist because real systems spend as much code on unhappy paths as the happy one. Listing <b>business rules per UC</b> keeps the rule catalog linked to behavior — a rule change lights up every UC it touches.</div>

<!--
Section 3 specifies behavior through use cases. The template has three flow types — normal, alternative, exception — because real systems spend as much code on the unhappy paths as the happy one. Every use case cites its business rules.
-->

---
class: py-6
glowSeed: 239
---

# UC-1 · Create Tournament

<div class="grid grid-cols-[1fr_1.3fr] gap-4 mt-2 text-xs">

<div class="flex flex-col gap-2">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-300">Actor:</b> Tournament Organizer · <b class="opacity-70">Sec:</b> Notification Service</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Pre:</b> logged in, admin write perms</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Post:</b> new tournament created, status = <b>"Planned"</b></div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-300">Alt:</b> conflict found → suggest alt dates · Save as Draft</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-300">Exc 1.0.E1:</b> invalid dates → blocked</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b>Priority:</b> High · <b>Freq:</b> 10–15×/yr/club</div>
  <div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">Rules:</b> BR-01, BR-03, BR-32, BR-35</div>
</div>

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="font-bold text-emerald-200 mb-2">Normal Flow</div>
  <div class="opacity-90 space-y-1">
    <div>1. Organizer requests new tournament.</div>
    <div>2. System shows the Creation Form.</div>
    <div>3. Enter Name, Start/End Date, Location, Description.</div>
    <div>4. Select race categories (Handicap, Maiden, Group 1…).</div>
    <div>5. Define default prize-distribution structure.</div>
    <div>6. <b class="text-emerald-300">System validates</b> (date constraints + <b>BR-01</b> venue-conflict check).</div>
    <div>7. Save as "Planned", generate unique Tournament ID.</div>
    <div>8. Broadcast email/SMS to Owners &amp; Trainers.</div>
  </div>
</div>

</div>

<div class="renote mt-1"><b>RE</b> — Step 6 = <b>validation before persistence</b>. The system refuses to save a clashing tournament (BR-01) — <i>shifting quality left</i>, preventing bad data at entry. "Save as Draft" respects how users really work.</div>

<!--
UC-1, step by step. The key step is six — validation before saving. A clashing tournament is refused at the source, not caught later. And the 'Save as Draft' alternative shows we respected real work habits: organizers don't always finish in one sitting.
-->

---
class: py-6
glowSeed: 241
---

# UC-2 · Register Horse

<div class="grid grid-cols-[1fr_1.3fr] gap-4 mt-2 text-xs">

<div class="flex flex-col gap-2">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-300">Actor:</b> Horse Owner / Trainer · <b class="opacity-70">Sec:</b> National Horse Registry DB, Veterinarian</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Pre:</b> Owner/Trainer authenticated</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Post:</b> profile = <b>"Pending Verification"</b> until Registry validates</div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-300">Alt 2a:</b> Registry API offline → <b>manual entry, flagged for admin approval</b></div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-300">Exc 2.0.E1:</b> registry # invalid/expired → refused</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b>Priority:</b> High · <b>Freq:</b> 100–300×/season</div>
  <div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">Rules:</b> BR-11, BR-13, BR-14, BR-35</div>
</div>

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="font-bold text-emerald-200 mb-2">Normal Flow</div>
  <div class="opacity-90 space-y-1">
    <div>1. Enter National Registration Number.</div>
    <div>2. <b class="text-emerald-300">System queries National Horse Registry</b> → pulls pedigree, age, breed.</div>
    <div>3. Auto-populate name, sire, dam, DOB.</div>
    <div>4. Enter ownership split %, assign primary Trainer.</div>
    <div>5. Upload vaccination record + health certificates.</div>
    <div>6. Save as "Pending Verification" → send validation request to Vet.</div>
  </div>
</div>

</div>

<div class="renote mt-1"><b>RE</b> — Alt 2a is <b>graceful degradation</b> for dependency <b>DE-1</b>. If the registry is down, work continues — but the record is <b>flagged</b> for human reconciliation. Robust systems handle external-dependency failure without blocking users <i>or</i> silently accepting unverified data.</div>

<!--
UC-2 registers a horse by verifying it against the national registry. The clever part is alternative 2a: if the registry is offline, we don't block the user — we accept the entry but flag it for manual review. Work continues, but nothing unverified slips through silently.
-->

---
class: py-6
glowSeed: 251
---

# UC-3 · Register Jockey &nbsp;·&nbsp; UC-4 · Schedule Race

<div class="grid grid-cols-2 gap-3 mt-2 text-xs">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-4">
  <div class="font-bold text-emerald-200 mb-2">UC-3 · Register Jockey</div>
  <div class="opacity-90 space-y-1">
    <div><b class="text-cyan-300">Actor:</b> Jockey · <b class="opacity-70">Sec:</b> Licensing Authority</div>
    <div><b class="text-emerald-300">Post:</b> profile created, status "Active"</div>
    <div>1. Input name, contact, National License #.</div>
    <div>2. <b>System checks Licensing API</b> → active license.</div>
    <div>3. Enter current weight + min riding weight.</div>
    <div>4. Create profile, status "Active".</div>
    <div class="text-cyan-300">Alt 3a: license <b>suspended</b> → registered but hidden.</div>
    <div class="text-amber-300">Exc: invalid license → blocked.</div>
    <div class="text-fuchsia-300">Rules: BR-15, BR-18, BR-35 · Freq 50–100×/yr</div>
  </div>
</div>

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-4">
  <div class="font-bold text-blue-200 mb-2">UC-4 · Schedule Race</div>
  <div class="opacity-90 space-y-1">
    <div><b class="text-cyan-300">Actor:</b> Organizer · <b class="opacity-70">Sec:</b> Racecourse Manager</div>
    <div><b class="text-emerald-300">Post:</b> race added, status "Open for Entries"</div>
    <div>1. Enter race #, distance, class, max runners.</div>
    <div>2. Set start date/time + entry deadline.</div>
    <div>3. Set prize-pool split.</div>
    <div>4. <b class="text-emerald-300">System checks overlaps (≥30-min, BR-05).</b></div>
    <div>5. Save as "Open for Entries" → alert trainers/owners.</div>
    <div class="text-amber-300">Exc: time conflict → show conflicting races, block.</div>
    <div class="text-fuchsia-300">Rules: BR-02, 04, 05, 07, 19 · Freq 100–500×/yr</div>
  </div>
</div>

</div>

<div class="renote mt-2"><b>RE</b> — UC-3 nuance: a suspended jockey is <b>still registered, just hidden</b> — preserves history &amp; audit trail, more correct than a hard delete. <b>BR-05</b> (the 30-min gap) operationalizes <b>BO-2</b> at the race level: surfacing the <i>specific</i> conflicting race turns a vague goal into an enforceable rule.</div>

<!--
UC-3 mirrors UC-2's verify-then-status pattern. But notice suspended-license handling: we don't delete the jockey, we hide them — history stays for audit. UC-4 schedules races with a hard 30-minute gap, BR-05. The system won't save a clash, and tells you exactly which race conflicts.
-->

---
class: py-6
glowSeed: 257
---

# UC-5 · Enter Horse in Race <span class="text-xs opacity-60">(highest volume · most rule-dense)</span>

<div class="grid grid-cols-[1fr_1.3fr] gap-4 mt-2 text-xs">

<div class="flex flex-col gap-2">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-300">Actor:</b> Trainer · <b class="opacity-70">Sec:</b> Jockey, Veterinarian</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Pre:</b> horse verified, active, <b>vet clearance &lt; 7 days</b></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Post:</b> entry = <b>"Pending Jockey Confirmation"</b></div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-300">Alt 5a:</b> over-subscribed → <b>"Ballot List"</b> for automated selection (BR-07)</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-300">Exc 5.0.E1:</b> vet check expired (&gt;7d) → blocked, prompt clearance (BR-12)</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b>Priority:</b> High · <b>Freq:</b> 500–2000×/yr</div>
  <div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">Rules:</b> BR-07, 08, 12, 14, 16, 17, 19 <span class="opacity-60">(7!)</span></div>
</div>

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="font-bold text-emerald-200 mb-2">Normal Flow</div>
  <div class="opacity-90 space-y-1">
    <div>1. Trainer selects a horse from verified stables.</div>
    <div>2. Auto eligibility checks (age, race history vs criteria).</div>
    <div>3. Trainer selects a licensed Jockey.</div>
    <div>4. <b class="text-emerald-300">System validates Jockey not double-booked (BR-17).</b></div>
    <div>5. Trainer submits entry.</div>
    <div>6. Flag "Pending Jockey Confirmation" → notify Jockey.</div>
  </div>
</div>

</div>

<div class="renote mt-1"><b>RE</b> — The highest-volume UC (up to 2000/yr) &amp; most rule-dense (7 rules). Two carry the load: <b>BR-17</b> prevents double-booking a jockey; the <b>7-day vet clearance (BR-12)</b> keeps health data fresh. The ballot (BR-07) makes oversubscription fair &amp; automated — business integrity lives here.</div>

<!--
UC-5 is our busiest and most rule-heavy use case — up to 2000 entries a year. Seven business rules, but two carry the load: BR-17 stops a jockey being double-booked, and the 7-day vet rule keeps health checks fresh. Oversubscription is handled by an automated ballot, not a human choice. Integrity lives here.
-->

---
class: py-6
glowSeed: 263
---

# UC-6 · Record Race Results

<div class="grid grid-cols-[1fr_1.3fr] gap-4 mt-2 text-xs">

<div class="flex flex-col gap-2">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-300">Actor:</b> Organizer · <b class="opacity-70">Sec:</b> Regulatory Official, Racecourse Manager</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Pre:</b> race "Running" or completed</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-emerald-300">Post:</b> results stored as <b>"Provisional"</b> pending sign-off</div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3"><b class="text-cyan-300">Alt 6a:</b> Stewards Inquiry → set flag, halt auto updates</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-300">Exc 6.0.E1:</b> illogical times (negative/zero) → alert + refuse</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b>Priority:</b> High · <b>Freq:</b> 100–500×/yr</div>
  <div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">Rules:</b> BR-21, 23, 24, 25, 26, 35</div>
</div>

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="font-bold text-emerald-200 mb-2">Normal Flow</div>
  <div class="opacity-90 space-y-1">
    <div>1. Enter finishing order (1st, 2nd, 3rd…) + times.</div>
    <div>2. Record DNF, DQ, or late scratchings.</div>
    <div>3. <b class="text-emerald-300">System validates every starter has an assigned result.</b></div>
    <div>4. Store as "Provisional" → notify Regulatory Official for approval.</div>
  </div>
</div>

</div>

<div class="renote mt-1"><b>RE</b> — Step 3 prevents the classic "missing horse in the official record" error. The <b>Provisional</b> status enforces the separation-of-duties approval from Diagram 5 — results are never authoritative on entry, only on approval. That is what makes <b>SM-3</b> achievable.</div>

<!--
UC-6 records results, but never as final — always Provisional, awaiting regulatory sign-off. Step three forces every starter to have a result, so no horse is silently dropped. The authority comes from the approval, not the entry. That's how we hit zero discrepancies.
-->

---
class: py-6
glowSeed: 269
---

# UC-7 · Manage Betting Pools <span class="text-xs text-amber-300">(Release 2)</span> &nbsp;·&nbsp; UC-8 · Conduct Health Check

<div class="grid grid-cols-2 gap-3 mt-2 text-xs">

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4">
  <div class="font-bold text-amber-200 mb-2">UC-7 · Manage Betting Pools — R2</div>
  <div class="opacity-90 space-y-1">
    <div><b class="text-cyan-300">Actor:</b> Organizer · <b class="opacity-70">Sec:</b> Payment Gateway, Regulatory Official</div>
    <div><b class="text-emerald-300">Post:</b> logs closed, wagers audited, payouts queued</div>
    <div>1. Open betting interface.</div>
    <div>2. Display active pool size, odds, distributions.</div>
    <div>3. Wagers registered &amp; audited for compliance.</div>
    <div>4. On official result → calculate dividends.</div>
    <div>5. Dividends sent to payment queue.</div>
    <div class="text-cyan-300">Alt 7a: race abandoned → <b>auto refunds (BR-31)</b>.</div>
    <div class="text-amber-300">Exc: suspicious patterns → flag for review (BR-29).</div>
    <div class="text-fuchsia-300">Rules: BR-28–31, 33 · <b>Priority Medium (R2)</b></div>
  </div>
</div>

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-4">
  <div class="font-bold text-red-200 mb-2">UC-8 · Conduct Health Check</div>
  <div class="opacity-90 space-y-1">
    <div><b class="text-cyan-300">Actor:</b> Veterinarian · <b class="opacity-70">Sec:</b> Owner, Trainer, Organizer</div>
    <div><b class="text-emerald-300">Pre:</b> horse registered for a race within next 7 days</div>
    <div><b class="text-emerald-300">Post:</b> status = <b>"Fit" or "Unfit"</b></div>
    <div>1. Vet selects horse from race check list.</div>
    <div>2. Inspects physical indicators (heart, gait, temp).</div>
    <div>3. Logs results, selects "Fit"/"Unfit".</div>
    <div>4. Update fitness clearance + record Vet's signature.</div>
    <div class="text-cyan-300">Alt 8a: inconclusive → "Deferred", re-inspect race morning.</div>
    <div class="text-amber-300">Exc 8.0.E1: "Unfit" → <b>system auto-scratches</b>, notifies Owner/Trainer.</div>
    <div class="text-fuchsia-300">Rules: BR-12, 20, 35 · Freq 500–2000×/yr</div>
  </div>
</div>

</div>

<div class="renote mt-1"><b>RE</b> — UC-7 is <b>documented but deferred</b> — a deliberate elicitation choice preserving traceability to future scope. UC-8 is where <b>SAF-1 is enforced by the system</b>: marking a horse "Unfit" auto-scratches it — welfare as an automatic consequence, reliable under race-day pressure.</div>

<!--
UC-7 is betting, Release 2 — not built now, but specified so the R2 team inherits a complete, thought-through picture. We even designed its failure modes. UC-8 is the health check, where SAF-1 lives as a system action: mark a horse unfit and the system scratches it and notifies the owner automatically. You rely on the system, not a human memory.
-->

---
class: py-7
glowSeed: 271
---

# §4. Data Requirements — Overview

<div class="grid grid-cols-5 gap-2 mt-8 text-xs">

<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">4.1</b><div class="opacity-80 mt-1">Logical Data Model (ER)</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">4.2</b><div class="opacity-80 mt-1">Data Dictionary (6 schemas)</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">4.3</b><div class="opacity-80 mt-1">UI Wireframes (4)</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">4.4</b><div class="opacity-80 mt-1">Reports</div></div>
<div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3 text-center"><b class="text-emerald-200">4.5</b><div class="opacity-80 mt-1">Integrity, Retention, Disposal</div></div>

</div>

<div class="renote mt-6"><b>RE</b> — Behavior (§3) and data (§4) are specified <b>separately but consistently</b>. The data model must support every use case's reads/writes; cross-checking them is part of validation. Wireframes &amp; reports live under Data Requirements because they describe <b>information presentation</b>.</div>

<!--
Section 4 specifies the information the system manages: the logical data model, a build-ready data dictionary, four wireframes, reports, and retention. Behavior and data are specified separately but consistently — and cross-checked.
-->

---
class: header-compact
glowSeed: 277
---

# §4.1 Logical Data Model (ER Diagram)

<div class="grid grid-cols-[1.2fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image6.png" alt="ER Diagram" class="max-h-[420px] w-auto rounded-lg" />
</div>

<div class="text-[11px]">
<table>
<tr><th>Relationship</th><th>Type</th><th>Meaning</th></tr>
<tr><td>Tournament —Has— Race</td><td class="text-cyan-300 font-bold">1:M</td><td>A tournament has many races</td></tr>
<tr><td>Race —Consists of— Entry</td><td class="text-cyan-300 font-bold">1:M</td><td>A race has many entries</td></tr>
<tr><td>Horse —Participates— Entry</td><td class="text-cyan-300 font-bold">1:M</td><td>A horse enters many races</td></tr>
<tr><td>Entry —Outcome— Result</td><td class="text-amber-300 font-bold">1:0..1</td><td>At most one result</td></tr>
<tr><td>Horse —Has— Health Record</td><td class="text-cyan-300 font-bold">1:M</td><td>Many health records</td></tr>
<tr><td>Entry —Rides— Jockey</td><td class="text-cyan-300 font-bold">M:1</td><td>Many entries, one jockey</td></tr>
</table>
</div>

</div>

<div class="renote mt-2"><b>RE</b> — The <b>data view</b> complementing the behavioral view. <b>Entry</b> is the junction entity linking Horse, Jockey, Race, Result — the heart of the schema. The <b>1:0..1</b> on Entry→Result is meaningful: a withdrawn/balloted-out horse has an entry but no result. <i>Cardinality encodes a business rule.</i></div>

<!--
Here's the data backbone. Entry is the heart — the junction linking a horse, a jockey, a race, and a result. And notice the 1-to-zero-or-one on Entry to Result: a withdrawn horse has an entry but no result. That cardinality isn't a detail — it encodes a business rule.
-->

---
class: py-7
glowSeed: 281
---

# §4.2 Data Dictionary — TOURNAMENT &amp; RACE

<div class="grid grid-cols-2 gap-4 mt-5 text-xs">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-4">
  <div class="font-bold text-emerald-200 mb-2">TOURNAMENT</div>
  <div class="opacity-90 space-y-1 font-mono text-[11px]">
    <div><span class="text-amber-300">tournament_id</span> (PK, auto)</div>
    <div><span class="text-amber-300">tournament_name</span> VARCHAR(100), <b>unique</b></div>
    <div><span class="text-amber-300">start_date</span> · <span class="text-amber-300">end_date</span> · <span class="text-amber-300">venue_name</span></div>
    <div><span class="text-amber-300">status</span> ENUM(<i>Planned / Open / In Progress / Completed / Archived</i>)</div>
    <div><span class="text-amber-300">prize_pool</span> DECIMAL(12,2) default 0.00</div>
  </div>
</div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4">
  <div class="font-bold text-cyan-200 mb-2">RACE</div>
  <div class="opacity-90 space-y-1 font-mono text-[11px]">
    <div><span class="text-amber-300">race_id</span> (PK) · <span class="text-amber-300">tournament_id</span> (FK)</div>
    <div><span class="text-amber-300">race_number</span></div>
    <div><span class="text-amber-300">race_category</span> ENUM (default <i>Maiden</i>)</div>
    <div><span class="text-amber-300">distance</span> (default 1200) · <span class="text-amber-300">start_time</span></div>
    <div><span class="text-amber-300">max_runners</span> (default 14)</div>
    <div><span class="text-amber-300">status</span> ENUM(<i>Open for Entries / Declared / Running / Completed / Cancelled</i>)</div>
  </div>
</div>

</div>

<div class="renote mt-4"><b>RE</b> — Every field carries <b>type, uniqueness, required-flag, editability, size, default</b> — six attributes per column. That is what makes the schema <b>build-ready</b>: a developer creates the tables with zero interpretation. The <b>status ENUMs</b> map directly onto the use-case flows &amp; state machine.</div>

<!--
The data dictionary isn't just column names — every field has six attributes: type, unique, required, editable, size, default. A developer builds the database straight from this with no guessing. And the status enums map exactly onto the use case flows and the state machine. Consistency across views is how we know the model is right.
-->

---
class: py-7
glowSeed: 283
---

# §4.2 Data Dictionary — HORSE, JOCKEY, ENTRY, RESULT

<div class="grid grid-cols-2 gap-3 mt-4 text-[11px]">

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-3">
  <div class="font-bold text-fuchsia-200 mb-1">HORSE</div>
  <div class="font-mono opacity-90"><span class="text-amber-300">horse_id</span> PK · <span class="text-amber-300">national_reg_no</span> <b>unique, immutable</b> · <span class="text-amber-300">horse_name</span> · <span class="text-amber-300">breed</span> (default Thoroughbred) · <span class="text-amber-300">birth_date</span> · <span class="text-amber-300">gender</span> ENUM · <span class="text-amber-300">owner_name</span></div>
</div>

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-3">
  <div class="font-bold text-blue-200 mb-1">JOCKEY</div>
  <div class="font-mono opacity-90"><span class="text-amber-300">jockey_id</span> PK · <span class="text-amber-300">license_number</span> <b>unique</b> · <span class="text-amber-300">jockey_name</span> · <span class="text-amber-300">min_weight</span> DECIMAL(4,1) · <span class="text-amber-300">status</span> ENUM(<i>Active / Suspended / Pending Verification</i>)</div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-3">
  <div class="font-bold text-amber-200 mb-1">ENTRY</div>
  <div class="font-mono opacity-90"><span class="text-amber-300">entry_id</span> PK · <span class="text-amber-300">race_id</span> FK · <span class="text-amber-300">horse_id</span> FK · <span class="text-amber-300">jockey_id</span> FK <b>nullable</b> · <span class="text-amber-300">barrier_position</span> <b>nullable</b> · <span class="text-amber-300">entry_status</span> ENUM(<i>Pending / Declared / Withdrawn / Balloted Out</i>)</div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-3">
  <div class="font-bold text-emerald-200 mb-1">RESULT</div>
  <div class="font-mono opacity-90"><span class="text-amber-300">result_id</span> PK · <span class="text-amber-300">entry_id</span> FK · <span class="text-amber-300">finishing_position</span> · <span class="text-amber-300">finishing_time</span> DECIMAL(6,2) · <span class="text-amber-300">margin</span> DECIMAL(4,1) · <span class="text-amber-300">stewards_status</span> ENUM(<i>Normal / Inquiry Pending / Disqualified / Placed Reordered</i>)</div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — <b>Nullable fields tell a story</b>: <code>jockey_id</code> &amp; <code>barrier_position</code> are null <i>before</i> a jockey confirms or a gate is drawn. <code>entry_status</code> literally enumerates the Appendix-A state-machine states. The data dictionary and the dynamic model are <b>two views of the same truth</b>.</div>

<!--
Nullable fields aren't sloppy — they're meaningful. A jockey ID is null until the jockey confirms; a barrier position is null until the draw assigns it. And the entry_status enum is the exact state list from our state machine. The data model and the behavior model describe the same system from two angles.
-->

---
class: header-compact
glowSeed: 293
---

# §4.3 UI Wireframes — Create Tournament &amp; Register Horse

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex flex-col items-center">
  <ZoomableImage src="/hrtms/image7.png" alt="Wireframe 1" class="max-h-[400px] w-auto rounded-lg" />
  <div class="text-xs opacity-70 mt-1">Wireframe 1 — Create Tournament (Desktop)</div>
</div>

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex flex-col items-center">
  <ZoomableImage src="/hrtms/image8.png" alt="Wireframe 2" class="max-h-[400px] w-auto rounded-lg" />
  <div class="text-xs opacity-70 mt-1">Wireframe 2 — Register Horse (Vet &amp; Owner Portal)</div>
</div>

</div>

<div class="renote mt-2"><b>RE</b> — Wireframes are <b>low-fidelity on purpose</b>. In requirements we validate <b>structure and flow</b>, not colors or fonts — those come later. Keeping them rough avoids premature commitment and keeps stakeholders focused on 'does this flow match how you work?'</div>

<!--
We sketched four wireframes for the highest-traffic screens, deliberately low-fidelity. In requirements, we're validating structure and flow, not pixel-perfect visuals. Keeping them rough keeps the conversation on 'is this the right flow,' not 'is that the right blue.'
-->

---
class: header-compact
glowSeed: 307
---

# §4.3 UI Wireframes — Enter Horse &amp; Record Results

<div class="grid grid-cols-2 gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex flex-col items-center">
  <ZoomableImage src="/hrtms/image9.png" alt="Wireframe 3" class="max-h-[400px] w-auto rounded-lg" />
  <div class="text-xs opacity-70 mt-1">Wireframe 3 — Enter Horse in Race (Trainer)</div>
</div>

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex flex-col items-center">
  <ZoomableImage src="/hrtms/image10.png" alt="Wireframe 4" class="max-h-[400px] w-auto rounded-lg" />
  <div class="text-xs opacity-70 mt-1">Wireframe 4 — Record Race Results (Steward)</div>
</div>

</div>

<div class="text-xs opacity-75 mt-2 text-center">Wireframe 3 is the Trainer dashboard for entering horses; Wireframe 4 is the steward terminal for recording results — designed for speed on a busy race day. Each maps directly to a use case.</div>

<!--
Wireframe three is the Trainer dashboard for entering horses; wireframe four is the steward terminal for recording results — designed for speed on a busy race day. Together these four screens cover the bulk of operator activity, each mapping to a use case.
-->

---
class: py-7
glowSeed: 311
---

# §4.4 Reports &nbsp;·&nbsp; §4.5 Integrity, Retention &amp; Disposal

<div class="grid grid-cols-2 gap-4 mt-6 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">§4.4 Report — HRTMS-RPT-01</div>
  <div class="opacity-90 space-y-1">
    <div><b>Name:</b> Tournament Summary &amp; Performance Report.</div>
    <div><b>Purpose:</b> complete audit — registrations, financial splits, avg race times, regulatory scratches.</div>
    <div><b>Export:</b> PDF, CSV.</div>
    <div><b>Access:</b> restricted to <b>Organizers &amp; Regulatory Officials</b> only.</div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5">
  <div class="font-bold text-amber-200 mb-2">§4.5 Retention &amp; Disposal</div>
  <div class="opacity-90 space-y-1">
    <div><b>DI-1:</b> Official results retained <b>≥10 years</b>.</div>
    <div><b>DI-2:</b> Active horse records <b>permanent</b>; retired archived 5 yrs then purged.</div>
    <div><b>DI-3:</b> Audit logs read-only, <b>≥3 years</b>.</div>
  </div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Reports are <b>requirements too</b> — they specify information <i>output</i>. Restricting access is a <b>security requirement at the data level</b>. Retention figures are driven by <b>regulatory stakeholders</b>, not preference — and specifying <i>disposal</i> is a data-protection discipline.</div>

<!--
Reports are real requirements — what information comes out, for whom, in what format. Retention isn't a preference — it's regulation. The 10-year and 3-year figures come from racing authorities. And we specify disposal, not just retention — holding data longer than needed is itself a risk.
-->

---
class: py-7
glowSeed: 313
---

# §5. External Interface Requirements

<div class="grid grid-cols-2 gap-2 mt-6 text-sm">

<div class="rounded-lg border border-blue-400/20 bg-blue-400/8 p-3"><b class="text-blue-300">UI-1</b><div class="text-xs opacity-90 mt-1">Responsive breakpoints: mobile 320–480px · tablet 768–1024px · desktop 1280px+</div></div>
<div class="rounded-lg border border-blue-400/20 bg-blue-400/8 p-3"><b class="text-blue-300">UI-2</b><div class="text-xs opacity-90 mt-1">Status colors: 🟢 active/approved · 🔴 scratch/suspended · 🟡 pending</div></div>
<div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">SI-1</b><div class="text-xs opacity-90 mt-1">National Horse Registry via authenticated <b>RESTful JSON API</b></div></div>
<div class="rounded-lg border border-fuchsia-400/20 bg-fuchsia-400/8 p-3"><b class="text-fuchsia-300">SI-2</b><div class="text-xs opacity-90 mt-1"><b>Twilio</b> SMS + <b>SendGrid</b> email for push alerts</div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">Hardware</b><div class="text-xs opacity-90 mt-1">None in R1; R3 adds photo-finish triggers + RFID transponders</div></div>
<div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="opacity-90">Comms</b><div class="text-xs opacity-90 mt-1"><b>SSL/TLS 1.2+</b> for all HTTP; <b>WebSockets</b> for live race-card updates</div></div>

</div>

<div class="renote mt-3"><b>RE</b> — Naming concrete technologies (Twilio, SendGrid, TLS 1.2, WebSockets) turns vague dependencies into <b>testable interface contracts</b>. UI-2's color coding is a small but powerful usability decision — one glance conveys state, reducing cognitive load for high-frequency operators.</div>

<!--
Interfaces are the contracts at the boundary we drew earlier. We name real technologies because vague dependencies aren't testable. And the status color coding looks trivial but it's huge for an operator who scans hundreds of entries a day: one glance tells them the state.
-->

---
class: py-7
glowSeed: 317
---

# §6. Quality Attributes — built on ISO/IEC 25010

<div class="grid grid-cols-3 gap-3 mt-8 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5 text-center"><div class="i-carbon:user-friendliness text-3xl text-emerald-300 mb-2" /><b class="text-emerald-200">6.1 Usability</b></div>
<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5 text-center"><div class="i-carbon:speed text-3xl text-blue-300 mb-2" /><b class="text-blue-200">6.2 Performance</b></div>
<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-5 text-center"><div class="i-carbon:locked text-3xl text-red-300 mb-2" /><b class="text-red-200">6.3 Security</b></div>
<div class="rounded-xl border border-rose-400/20 bg-rose-400/8 p-5 text-center"><div class="i-carbon:warning-health text-3xl text-rose-300 mb-2" /><b class="text-rose-200">6.4 Safety</b></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 text-center"><div class="i-carbon:timer text-3xl text-amber-300 mb-2" /><b class="text-amber-200">6.5 Availability</b></div>
<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-5 text-center"><div class="i-carbon:earth filled text-3xl text-cyan-300 mb-2" /><b class="text-cyan-200">6.6 Robustness</b></div>

</div>

<div class="renote mt-5"><b>RE</b> — Using <b>ISO 25010</b> as the backbone guarantees our NFRs are <b>complete and non-overlapping</b>. Six distinct lenses — so we don't forget robustness while obsessing over performance. Every quality requirement is <b>measurable</b>: 'fast' becomes '&lt;3-second paint.'</div>

<!--
Section 6 is built on ISO 25010 — the international quality model. Using it as our backbone guarantees completeness: six distinct lenses. And every quality requirement is measurable — no 'fast' or 'secure,' only 'under 3 seconds' and 'bcrypt plus RBAC.'
-->

---
class: py-7
glowSeed: 331
---

# §6.1–6.2 Usability &amp; Performance

<div class="grid grid-cols-2 gap-5 mt-6 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-3">Usability</div>
  <div class="space-y-2 opacity-90">
    <div><b class="text-emerald-300">USE-1:</b> 95% of trainers/owners complete horse registration <b>&lt;5 min</b>, unguided. <span class="text-xs opacity-70">(mitigates RI-2)</span></div>
    <div><b class="text-emerald-300">USE-2:</b> Touch targets <b>≥44×44px</b> (accessibility/WCAG).</div>
  </div>
</div>

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="font-bold text-blue-200 mb-3">Performance</div>
  <div class="space-y-2 opacity-90">
    <div><b class="text-blue-300">PER-1:</b> Support <b>200 concurrent users</b> on peak race days, <b>&lt;3s</b> page paint.</div>
    <div><b class="text-blue-300">PER-2:</b> Result-validation queries <b>&lt;2s</b>.</div>
  </div>
</div>

</div>

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="bg-black/30 rounded-xl p-5 text-center"><div class="text-4xl font-extrabold text-emerald-400">&lt; 5 min</div><div class="text-xs opacity-70 mt-1">unguided registration (USE-1)</div></div>
  <div class="bg-black/30 rounded-xl p-5 text-center"><div class="text-4xl font-extrabold text-blue-400">200 / &lt;3s</div><div class="text-xs opacity-70 mt-1">concurrent users / page paint (PER-1)</div></div>
</div>

<div class="renote mt-3"><b>RE</b> — <b>USE-1</b> is the direct counter to adoption risk <b>RI-2</b> — a 5-min unguided registration is what makes resistant users willing to try. The 44×44px target comes from WCAG. Performance NFRs carry concrete numbers so QA writes load tests with exact thresholds.</div>

<!--
Usability directly fights adoption risk — a sub-5-minute registration is what makes a reluctant owner willing to try. The 44-pixel touch target is from WCAG. And the performance numbers are exact, so QA can write load tests against them.
-->

---
class: py-7
glowSeed: 337
---

# §6.3–6.6 Security · Safety · Availability · Robustness

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-4">
  <div class="font-bold text-red-200 mb-2">§6.3 Security <span class="text-xs opacity-60 font-normal">(design response to RI-4)</span></div>
  <div class="space-y-1 opacity-90">
    <div><b class="text-red-300">SEC-1:</b> <b>RBAC</b> — Vets edit health only, Stewards edit results only (separation of duties).</div>
    <div><b class="text-red-300">SEC-2:</b> Passwords hashed with <b>bcrypt</b>.</div>
    <div><b class="text-red-300">SEC-3:</b> Automatic <b>30-min session timeout</b>.</div>
  </div>
</div>

<div class="rounded-xl border border-rose-400/20 bg-rose-400/8 p-4">
  <div class="font-bold text-rose-200 mb-2">§6.4 Safety</div>
  <div class="opacity-90"><b class="text-rose-300">SAF-1:</b> No horse may start if marked <b>"Unfit"</b> by the Veterinarian.</div>
  <div class="opacity-75 text-xs mt-2">A safety requirement protecting a living animal — enforced as a hard system rule (UC-8).</div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4">
  <div class="font-bold text-amber-200 mb-2">§6.5 Availability</div>
  <div class="opacity-90"><b class="text-amber-300">AVL-1:</b> <b>&gt;99.5% uptime</b> during active tournament seasons.</div>
  <div class="opacity-75 text-xs mt-2">SLA scoped to seasons — tuned to the business calendar, not an arbitrary round number.</div>
</div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4">
  <div class="font-bold text-cyan-200 mb-2">§6.6 Robustness</div>
  <div class="opacity-90"><b class="text-cyan-300">ROB-1:</b> On network drop during results entry → <b>form cached locally</b>, no data loss.</div>
  <div class="opacity-75 text-xs mt-2">(mitigates RI-5) — the engineering answer to connectivity risk: offline-first, auto-recover.</div>
</div>

</div>

<div class="renote mt-3"><b>RE</b> — Traceability runs <b>risk → diagram → use case → NFR</b>. SEC-1's RBAC is the same separation of duties from Diagram 5 &amp; UC-6, now a security control. Every quality attribute here traces to a risk or objective.</div>

<!--
This whole section traces back. RI-4, our highest-impact risk, is designed away by RBAC, bcrypt and timeout. SAF-1 protects a living animal. AVL-1's 99.5% is scoped to racing seasons. And ROB-1 — caching on a network drop — is RI-5 designed away. Every quality attribute traces to a risk or objective.
-->

---
class: header-compact
glowSeed: 347
---

# §7. Appendix A — Race Entry State Machine

<div class="grid grid-cols-[1.1fr_1fr] gap-4 mt-2">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/hrtms/image11.png" alt="State Machine" class="max-h-[420px] w-auto rounded-lg" />
</div>

<div class="text-[11px] flex flex-col gap-2">
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-200">8-state lifecycle of a race entry</b></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3 opacity-90">
    <b>Pending</b> → (trainer finalizes) <b>Declared</b> → (draw assigns gate) <b>Confirmed</b> → (start signal) <b>Started</b> → (finishes) <b>Finished</b>.
  </div>
  <div class="rounded-lg border border-cyan-400/20 bg-cyan-400/8 p-3 opacity-90"><b class="text-cyan-200">Terminal exits:</b> <b>Withdrawn</b> (cancel/med cert) · <b>Balloted Out</b> (oversubscription, BR-07) · <b>Disqualified</b> (rules violation / inquiry, BR-24).</div>
  <div class="renote"><b>RE</b> — The <b>dynamic view</b> that reconciles all others. Its states are <i>exactly</i> the <code>entry_status</code> ENUM; its transitions are <i>exactly</i> UC-5's alt/exception flows. Three independent views agree → strongest evidence the requirements are correct.</div>
</div>

</div>

<!--
We close the SRS with a state machine — the dynamic view. Its states are exactly the entry_status enum from our data dictionary, and its transitions are exactly the alternative and exception flows from UC-5. Three independent models — data, behavior, dynamics — all agree. When separate views converge on the same truth, that's our strongest evidence the requirements are right.
-->

---
layout: center
class: text-center
glowSeed: 349
---

<div class="text-sm opacity-60 tracking-widest">SECTION 4</div>
<h1 class="text-4xl font-extrabold mt-2 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">Validation, Traceability &amp; Reflection</h1>
<div class="mt-3 text-base opacity-70 max-w-2xl mx-auto">How we proved quality — and what the process taught us.</div>

---
class: py-6
glowSeed: 353
---

# How We Validated the Requirements

<div class="text-xs mt-3">
<table>
<tr><th>Technique</th><th>What it caught</th></tr>
<tr><td><b>Peer cross-review</b> <span class="opacity-60">(each section read by a non-owner)</span></td><td>Ambiguity, missing flows, internal contradictions</td></tr>
<tr><td><b>Team inspection</b> <span class="opacity-60">(the v0.1 → v1.0 gate)</span></td><td>Completeness vs Vision, ID consistency</td></tr>
<tr><td><b>Cross-view consistency check</b></td><td>ER status enums ↔ UC flows ↔ state-machine states</td></tr>
<tr><td><b>Traceability audit</b></td><td>Every REQ/UC traces to a feature → objective → metric</td></tr>
<tr><td><b>Standards checklist</b> <span class="opacity-60">(ISO 25010, IEEE 830, OWASP, WCAG)</span></td><td>Completeness of NFRs; structural compliance</td></tr>
<tr><td><b>Domain grounding</b> <span class="opacity-60">(IFHA rules)</span></td><td>Realism of business rules BR-XX</td></tr>
</table>
</div>

<div class="renote mt-3"><b>RE</b> — Validation is the phase most student teams skip — and the one instructors weight heavily. We used <b>several</b> techniques because no single one catches everything: review finds ambiguity, inspection finds gaps, cross-view checking finds inconsistency, traceability finds orphans.</div>

<!--
How did we know the requirements were good? Not by reading them once. We used six validation techniques. Peer review caught ambiguity; inspection caught gaps; cross-view checking caught inconsistencies; and the traceability audit found orphans — requirements that traced to nothing.
-->

---
class: py-6
glowSeed: 359
---

# The Traceability Matrix

<div class="text-[11px] mt-3">
<table>
<tr><th>Objective</th><th>Metric</th><th>Feature</th><th>Use Case</th><th>Rule(s)</th><th>Risk Mitigated</th></tr>
<tr><td><b>BO-1</b> (−50% admin)</td><td>SM-1</td><td>FE-1/2/3</td><td>UC-1/2/3</td><td>BR-35</td><td>—</td></tr>
<tr><td><b>BO-2</b> (errors &lt;2%)</td><td>SM-3</td><td>FE-1/4/5</td><td>UC-1/4/5/6</td><td>BR-01/05/07/22</td><td class="text-amber-300">RI-1</td></tr>
<tr><td><b>BO-3</b> (+30% satisf.)</td><td>SM-4</td><td>FE-6</td><td>UC-1/4/6</td><td>BR-35</td><td class="text-amber-300">RI-2 (USE-1)</td></tr>
<tr><td>Welfare</td><td>—</td><td>FE-9</td><td>UC-8</td><td>BR-12/20, SAF-1</td><td>—</td></tr>
<tr><td>Security</td><td>—</td><td>—</td><td>UC-11/12</td><td>—</td><td class="text-amber-300">RI-4 (SEC-1/2/3)</td></tr>
<tr><td>Connectivity</td><td>—</td><td>—</td><td>—</td><td>—</td><td class="text-amber-300">RI-5 (ROB-1)</td></tr>
</table>
</div>

<div class="renote mt-3"><b>RE</b> — The <b>capstone artifact</b>. It proves <b>vertical traceability</b> — every objective decomposes through metrics &amp; features into concrete UCs &amp; rules — and <b>risk coverage</b> — every high-impact risk has a mitigating requirement. An empty cell would reveal an orphan requirement or unaddressed objective.</div>

<!--
This matrix is the capstone. Read a row left to right: a business objective becomes a metric, delivered by a feature, realized in a use case, governed by rules, mitigating a risk. No empty cells — every objective has a path to a verifiable requirement, and every risk has a control. This is what 'complete and traceable' looks like.
-->

---
class: py-7
glowSeed: 367
---

# Reflection — What We Learned About RE

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-1 text-amber-300 text-xl shrink-0" /><span><b>Elicit before you specify.</b> Starting with the Vision prevented a precise solution to the wrong problem.</span></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-2 text-amber-300 text-xl shrink-0" /><span><b>Quantify everything.</b> Baselines made objectives measurable; vague goals stayed vague until we forced numbers.</span></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-3 text-amber-300 text-xl shrink-0" /><span><b>Multiple views catch more defects.</b> Context, use-case, ER &amp; state-machine views agreed — where they almost didn't, we found bugs.</span></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-4 text-amber-300 text-xl shrink-0" /><span><b>Say "no" explicitly.</b> The exclusions list did as much for success as the feature list.</span></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-5 text-amber-300 text-xl shrink-0" /><span><b>Traceability is cheap insurance.</b> Stable IDs cost minutes, saved hours in review &amp; change-impact analysis.</span></div>
<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:number-6 text-amber-300 text-xl shrink-0" /><span><b>Risks designed in early are free; found late, expensive.</b> RI-4 &amp; RI-5 became SEC &amp; ROB requirements at near-zero cost.</span></div>

</div>

<!--
To close, the lessons. Elicit before you specify. Quantify — a goal without a number is a wish. Multiple views catch more defects. Saying no is a feature. Traceability is cheap insurance. And the biggest one — risks designed in early are free; risks found late are expensive. Thank you. We'll take your questions.
-->

---
layout: center
class: text-center
glowSeed: 373
---

<h1 class="text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Thank You</h1>

<div class="text-2xl font-bold opacity-90 mt-4">Questions &amp; Discussion</div>

<div class="mt-6 flex justify-center gap-2 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-cyan-200">Team HRTMS</div>
  <div class="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-indigo-200">SWR302 / SU26SWP03</div>
</div>

<div class="mt-8 text-sm opacity-50 max-w-xl mx-auto">
  Horse Racing Tournament Management System — Vision &amp; Scope (v1.0) + SRS (v1.0)
</div>

<!--
Thank you. We are ready for your questions.
-->

<style>
/* ---------- Tables (this deck only) ---------- */
h1 + table, .slidev-table, table { width: 100%; border-collapse: collapse; }
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

/* ---------- Compact slide headers (diagram + image slides) ---------- */
.header-compact h1 { font-size: 1.6rem !important; margin-bottom: 0.4rem !important; }
.header-compact .slidev-page-number { display: none; }

/* tighten default content spacing on dense slides */
.slidev-layout { padding-top: 2.2rem; padding-bottom: 2.2rem; }
</style>
