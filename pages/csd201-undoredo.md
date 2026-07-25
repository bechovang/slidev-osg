---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Web-Based Canvas Undo/Redo Engine — CSD201
exportFilename: CSD201-UndoRedo-Engine
lineNumbers: false
drawings:
  persist: false
mdc: true
routerMode: hash
info: |
  Architectural Design and Algorithm Optimization for a Web-Based
  Canvas Undo/Redo Engine — CSD201 Final Project.
---

<div class="translate-x--4">

<h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent leading-tight">
  Architectural Design &amp; Algorithm Optimization<br/>for a Web-Based Canvas Undo/Redo Engine
</h1>

<div class="text-lg opacity-90 mt-3">
  Data Structures &amp; Algorithms — <span class="text-indigo-300 font-semibold">CSD201</span> · FPT University HCM
</div>

<div class="mt-4 flex justify-start gap-2 text-sm">
  <div class="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-indigo-200">Command Pattern</div>
  <div class="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-emerald-200">Stack · O(1)</div>
  <div class="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-amber-200">Client–Server</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-2 max-w-2xl text-xs">
  <div class="rounded-lg bg-white/5 p-3 text-center"><div class="font-bold text-violet-300">Dam Le Tuan Anh</div><div class="opacity-60">SE204111 · Presenter 1</div></div>
  <div class="rounded-lg bg-white/5 p-3 text-center"><div class="font-bold text-indigo-300">Nguyen Pham An</div><div class="opacity-60">SE204957 · Presenter 2</div></div>
  <div class="rounded-lg bg-white/5 p-3 text-center"><div class="font-bold text-fuchsia-300">Than Nhat Huy</div><div class="opacity-60">SE203317 · Presenter 3</div></div>
</div>

<div class="mt-4 text-xs opacity-70 max-w-2xl">
  Goal: build an <b>Undo/Redo engine</b> for a <b>Web-based Canvas</b> application, applying <b>data structures &amp; algorithms</b> to manage the user's action history accurately and efficiently.
</div>

</div>

<!--
Hello everyone. We are pleased to present our project: "Architectural Design and Algorithm Optimization for a Web-Based Canvas Undo/Redo Engine."
Our goal is to build an Undo/Redo system for a Web-based Canvas application, applying our knowledge of data structures and algorithms to solve the problem of managing the user's action history accurately and efficiently.
-->

---
class: py-7
glowSeed: 3
---

# The Problem — Why Undo/Redo?

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="rounded-xl border border-rose-400/20 bg-rose-400/8 p-5">
  <div class="flex items-center gap-2 mb-3 text-rose-200"><div class="i-carbon:warning-alt text-xl" /><b>Mistakes are normal</b></div>
  <div class="text-sm opacity-90 space-y-2">
    <div>In apps like <b>Paint, Photoshop, Figma…</b> users constantly <b>add, move and delete</b> objects.</div>
    <div>On a mistake, just press <b>Undo</b> to return to a previous state, or <b>Redo</b> to reapply the action you just undid.</div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5">
  <div class="flex items-center gap-2 mb-3 text-amber-200"><div class="i-carbon:task-tools text-xl" /><b>The technical challenge</b></div>
  <div class="text-sm opacity-90 space-y-1">
    <div>To support this, the system must <b>store &amp; manage action history</b> accurately.</div>
    <div>• How to store it <b>without wasting memory?</b></div>
    <div>• Undo / redo in <b>O(1)</b> time?</div>
    <div>• Handle <b>edge-case / garbage</b> actions?</div>
  </div>
</div>

</div>

<!--
First, let me introduce the problem we had to solve.
In software like Paint, Photoshop or Figma, Undo and Redo are used constantly.
When you make a mistake, you press Undo to return to a previous state, or Redo to reapply the action you just undid.
To make that possible, the system has to store and manage the user's action history accurately and efficiently.
That is exactly the problem we set out to solve.
-->

---
class: py-7
glowSeed: 5
---

# Two Approaches

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="rounded-xl border border-rose-400/25 bg-rose-400/8 p-5">
  <div class="flex items-center justify-between mb-2">
    <div class="font-bold text-rose-200 text-lg">① Snapshot</div>
    <div class="text-[10px] rounded-full bg-rose-400/20 px-2 py-0.5 text-rose-200">❌ rejected</div>
  </div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Store the <b>entire Canvas state</b> (raster/image) after every action.</div>
    <div class="text-xs opacity-80 mt-2">Simple — but every action copies the whole canvas.</div>
  </div>
  <div class="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
    <div class="bg-black/30 rounded p-2"><div class="font-extrabold text-rose-300">O(N)</div><div class="opacity-70">memory</div></div>
    <div class="bg-black/30 rounded p-2"><div class="font-extrabold text-rose-300">Fills fast</div><div class="opacity-70">large raster</div></div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/25 bg-emerald-400/8 p-5">
  <div class="flex items-center justify-between mb-2">
    <div class="font-bold text-emerald-200 text-lg">② Command</div>
    <div class="text-[10px] rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-200">✅ chosen</div>
  </div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Store only the <b>action</b> the user performed (<b>Add</b>, <b>Move</b>…) with the parameters it needs.</div>
    <div class="text-xs opacity-80 mt-2">Small memory footprint &amp; easy to extend.</div>
  </div>
  <div class="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
    <div class="bg-black/30 rounded p-2"><div class="font-extrabold text-emerald-300">Small</div><div class="opacity-70">memory</div></div>
    <div class="bg-black/30 rounded p-2"><div class="font-extrabold text-emerald-300">Extensible</div><div class="opacity-70">easily</div></div>
  </div>
</div>

</div>

<!--
There are two common approaches.
The first is Snapshot: storing the entire Canvas state after every action. It's simple, but it consumes a lot of memory as the number of actions grows.
The second is Command: storing only the action the user performed, such as Add or Move.
After comparing both, we chose Command because it uses less memory and is easier to extend.
-->

---
class: py-7
glowSeed: 7
---

# System Architecture — Client / Server

<div class="grid grid-cols-[1.15fr_1fr] gap-4 mt-5">

<div>
  <div class="flex items-stretch gap-2">
    <div class="flex-1 rounded-xl border border-cyan-400/25 bg-cyan-400/8 p-3 text-xs">
      <div class="font-bold text-cyan-200 text-sm mb-1">🖥️ Frontend</div>
      <div class="opacity-90 space-y-0.5">
        <div>HTML5 <b>Canvas</b> + JavaScript</div>
        <div>UI &amp; user input</div>
        <div>Sends requests via <b>Fetch API</b> (JSON)</div>
        <div class="opacity-70">Redraws from server data</div>
      </div>
    </div>
    <div class="flex items-center text-indigo-300 text-2xl"><div class="i-carbon:arrows-horizontal" /></div>
    <div class="flex-1 rounded-xl border border-violet-400/25 bg-violet-400/8 p-3 text-xs">
      <div class="font-bold text-violet-200 text-sm mb-1">☕ Backend</div>
      <div class="opacity-90 space-y-0.5">
        <div><b>Java Servlet</b> (Tomcat)</div>
        <div><code>CanvasApiServlet</code> receives the request</div>
        <div>Forwards to <b>UndoRedoManager</b></div>
        <div>Returns <b>JSON</b> of the latest Shapes</div>
      </div>
    </div>
  </div>
  <div class="mt-3 rounded-xl border border-white/10 bg-black/20 p-3 text-xs font-mono opacity-90">
<span class="text-cyan-300">POST</span> /api/canvas  &nbsp;{ "command": "ADD", "shape": {...} }
<span class="opacity-60">↓ processed on the server</span>
<span class="text-emerald-300">←</span> [ {id, type, x, y, color}, … ]   <span class="opacity-60">// redraw Canvas</span>
  </div>
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-lg border border-indigo-400/20 bg-indigo-400/8 p-3"><b class="text-indigo-200">Clean separation</b> — the UI only renders; the history logic lives entirely on the server.</div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Session-scoped state</b> — each user gets their own <code>UndoRedoManager</code> in <code>HttpSession</code>.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b>JSON via Gson</b> — language-agnostic &amp; easy to test.</div>
</div>

</div>

<!--
The system is built on a Client–Server architecture.
The Frontend is responsible for rendering the interface and capturing user input.
When the user performs an action, JavaScript sends a request to the Servlet using the Fetch API.
The Servlet receives the request and forwards it to the UndoRedoManager.
After processing, the new data is returned to the Frontend as JSON so the Canvas can be redrawn.
-->

---
class: py-7
glowSeed: 11
---

# Object-Oriented Design — Command Pattern <span class="text-base opacity-60 font-normal">(Fig. 1)</span>

<div class="grid grid-cols-[1.15fr_1fr] gap-4 mt-3">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/AN%20CSD_FINAL/image/fig1-uml-class-diagram.jpg" alt="UML Class Diagram — IAction, AddAction, MoveAction, UndoRedoManager, Shape" class="max-h-[360px] w-auto rounded-lg" />
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-xl border border-white/10 bg-black/25 p-3">
    <div class="text-[11px] opacity-60 mb-1">com.canvas.core.IAction.java</div>

```java
public interface IAction {
    void execute(List<Shape> c);
    void undo(List<Shape> c);
}
class AddAction  implements IAction { … }  // add / remove by id
class MoveAction implements IAction { … }  // oldX,oldY ↔ newX,newY
```

  </div>
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3"><b class="text-emerald-200">Open / Closed</b> — adding Delete/Resize only requires a new class; existing code is untouched.</div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3"><b class="text-amber-200">Single Responsibility</b> — the Manager handles data; the Frontend handles rendering.</div>
</div>

</div>

<!--
For the design we used the Command Pattern.
We created a common IAction interface, and each action such as Add or Move is implemented as its own class.
This keeps each class responsible for a single function, so the code is clear and maintainable.
When we need a new feature such as Delete or Resize, we just add a new Action without modifying the existing ones.
This reflects the Open/Closed Principle: open for extension, closed for modification.
-->

---
class: py-7
glowSeed: 13
---

# Data Structure — Stack (LIFO)

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="rounded-xl border border-indigo-400/25 bg-indigo-400/8 p-5">
  <div class="font-bold text-indigo-200 mb-2 flex items-center gap-2"><div class="i-carbon:stacked-scrolling-2 text-xl" />Why a Stack?</div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Undo/Redo follows <b>Last-In-First-Out</b>.</div>
    <div>The <b>most recent</b> action is <b>undone first</b>.</div>
    <div>⇒ A <b>Stack</b> is the natural structure for this.</div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/25 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2 flex items-center gap-2"><div class="i-carbon:checkmark-filled text-xl" />Implemented with ArrayDeque</div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Java <b>recommends</b> <code>ArrayDeque</code> over the legacy <code>Stack</code>.</div>
    <div><code>push()</code> / <code>pop()</code> / <code>removeLast()</code> are all <b>O(1)</b>.</div>
  </div>
</div>

</div>

<div class="mt-4 rounded-xl border border-white/10 bg-black/25 p-4 text-xs">
<div class="text-[11px] opacity-60 mb-1">UndoRedoManager.java — two Stacks &amp; the list of Shapes</div>

```java
private final Deque<IAction> undoStack = new ArrayDeque<>();   // done
private final Deque<IAction> redoStack = new ArrayDeque<>();   // undone
private final List<Shape>    canvasObjects = new ArrayList<>(); // shapes on Canvas
```

</div>

<!--
After the design, we chose the right data structure.
Undo and Redo both follow Last-In-First-Out — the last action performed is the first to be undone.
So we use a Stack. In Java, the Stack is implemented with ArrayDeque, which is the Java-recommended approach and offers Push and Pop operations in O(1) time.
-->

---
class: py-7
glowSeed: 17
---

# UndoRedoManager — <code>pushAction</code> <span class="text-base opacity-60 font-normal">(Fig. 2)</span>

<div class="grid grid-cols-[1fr_1.1fr] gap-4 mt-3">

<div class="rounded-xl border border-white/10 bg-black/25 p-3 text-xs">
<div class="text-[11px] opacity-60 mb-1">pushAction — add a new action</div>

```java
public void pushAction(IAction action) {
    action.execute(canvasObjects);   // 1. execute
    undoStack.push(action);          // 2. save into Undo
    redoStack.clear();               // 3. clear junk future

    if (undoStack.size() > maxCapacity)
        undoStack.removeLast();      // 4. prevent overflow — O(1)
}
```

<div class="text-[11px] opacity-60 mt-2 mb-1">undo / redo — move an action back and forth between the two stacks</div>

```java
performUndo():  pop undo → action.undo()     → push redo
performRedo():  pop redo → action.execute()  → push undo
```

</div>

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/AN%20CSD_FINAL/image/fig2-uml-sequence-diagram.jpg" alt="UML Sequence Diagram — pushAction algorithm & O(1) memory limit enforcement" class="max-h-[340px] w-auto rounded-lg" />
</div>

</div>

<!--
UndoRedoManager is the central component of the system.
It manages three pieces of data: the Undo Stack, the Redo Stack and the list of Shapes on the Canvas.
When a new Action arrives, the system executes it, pushes it onto the Undo Stack, and clears the Redo Stack to keep the history correct.
-->

---
class: py-7
glowSeed: 19
---

# Algorithm Optimization — O(1) vs O(N)

<div class="grid grid-cols-2 gap-4 mt-5">

<div class="rounded-xl border border-rose-400/25 bg-rose-400/8 p-5">
  <div class="font-bold text-rose-200 mb-2">❌ Wrong way: <code>Stack.remove(0)</code></div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Removing the oldest element at the <b>head of the array</b> forces a <b>full shift</b> of the remaining elements.</div>
  </div>
  <div class="mt-3 bg-black/30 rounded p-3 text-center">
    <div class="text-3xl font-extrabold text-rose-300">O(N)</div>
    <div class="text-[11px] opacity-70">every time the limit is hit → canvas lag</div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/25 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2">✅ Our choice: <code>ArrayDeque.removeLast()</code></div>
  <div class="text-sm opacity-90 space-y-1">
    <div>Internal <b>head/tail pointers</b> — removing at the <b>tail</b> needs no shift.</div>
  </div>
  <div class="mt-3 bg-black/30 rounded p-3 text-center">
    <div class="text-3xl font-extrabold text-emerald-300">O(1)</div>
    <div class="text-[11px] opacity-70">constant — smooth even when the stack is full</div>
  </div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-3 text-xs">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-200">Access-pattern insight</b> — only <b>one end</b> is ever touched (LIFO) ⇒ no random access ⇒ <code>ArrayDeque</code> is optimal.</div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-200">Real-time friendly</b> — the Canvas redraws on every action; <b>O(1)</b> removes the performance bottleneck.</div>
</div>

<!--
To prevent Stack Overflow we enforce a memory limit.
Removing the oldest action with remove(0) on an array costs O(N), because every element must shift.
We chose ArrayDeque instead: removing at the tail with removeLast is O(1), which is optimal for a real-time graphics engine.
-->

---
class: py-7
glowSeed: 23
---

# Workflow — How It Runs

<div class="mt-6 text-[11px]">
<div class="flex items-center gap-1.5">

  <div class="flex-1 rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-3 text-center">
    <div class="font-bold text-cyan-200">① User</div><div class="opacity-80">acts on the Canvas</div>
  </div>
  <div class="text-indigo-300 text-lg">→</div>

  <div class="flex-1 rounded-lg border border-blue-400/30 bg-blue-400/10 p-3 text-center">
    <div class="font-bold text-blue-200">② JavaScript</div><div class="opacity-80">Fetch → Servlet</div>
  </div>
  <div class="text-indigo-300 text-lg">→</div>

  <div class="flex-1 rounded-lg border border-violet-400/30 bg-violet-400/10 p-3 text-center">
    <div class="font-bold text-violet-200">③ Servlet</div><div class="opacity-80">builds the right Action</div>
  </div>
  <div class="text-indigo-300 text-lg">→</div>

  <div class="flex-1 rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/10 p-3 text-center">
    <div class="font-bold text-fuchsia-200">④ UndoRedoManager</div><div class="opacity-80">execute → push Undo</div>
  </div>
  <div class="text-indigo-300 text-lg">→</div>

  <div class="flex-1 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-center">
    <div class="font-bold text-emerald-200">⑤ Frontend</div><div class="opacity-80">receives JSON, redraws</div>
  </div>

</div>
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-xs">
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-cyan-200">ADD</b> — creates <code>AddAction(shape)</code></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-blue-200">MOVE</b> — creates <code>MoveAction(id, old…, new…)</code></div>
  <div class="rounded-lg border border-white/10 bg-white/5 p-3"><b class="text-violet-200">UNDO / REDO / RESET</b> — call the manager directly</div>
</div>

<!--
This is the runtime flow.
The user interacts with the Canvas. JavaScript sends the request to the Servlet.
The Servlet builds the matching Action and hands it to the UndoRedoManager.
The manager executes the Action, updates the Canvas and pushes it onto the Undo Stack.
Finally the new Canvas state is returned to the Frontend to be rendered.
-->

---
class: py-7
glowSeed: 29
---

# Manual Trace — Validated by Table <span class="text-base opacity-60 font-normal">(Table I · maxCapacity = 2)</span>

<div class="grid grid-cols-[1fr_1fr] gap-4 mt-3">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/AN%20CSD_FINAL/image/table1-algorithm-trace.jpg" alt="Algorithm Trace Validation (maxCapacity = 2)" class="max-h-[320px] w-auto rounded-lg" />
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-lg border border-emerald-400/20 bg-emerald-400/8 p-3">
    <b class="text-emerald-200">Edge case 1 — Timeline Paradox</b><br/>
    Undoing then drawing without clearing Redo corrupts the canvas on the next Redo.
    <b>Fix:</b> <code>redoStack.clear()</code> on every <code>pushAction</code>.
  </div>
  <div class="rounded-lg border border-amber-400/20 bg-amber-400/8 p-3">
    <b class="text-amber-200">Edge case 2 — Ghost Undo</b><br/>
    Clicking without dragging still created a junk action.
    <b>Fix (client):</b> only send MOVE when <code>abs(newPos − oldPos) &gt; 1</code>.
  </div>
  <div class="text-[11px] opacity-75">Step 3: adding L1 at capacity ⇒ the oldest C1 is dropped in <b>O(1)</b>. Step 5: a new Move ⇒ Redo is cleared.</div>
</div>

</div>

<!--
After the algorithm, we ran a manual trace — simulating each step to inspect how the Undo Stack, Redo Stack and Canvas state change.
The results show the system works as designed and handles all Undo/Redo cases correctly.
The two edge cases were only found through this manual tracing.
-->

---
class: py-7
glowSeed: 31
---

# Demo — Running System <span class="text-base opacity-60 font-normal">(Fig. 3)</span>

<div class="grid grid-cols-[1.25fr_1fr] gap-4 mt-3">

<div class="rounded-xl border border-white/10 bg-black/20 p-2 flex items-center justify-center">
  <ZoomableImage src="/AN%20CSD_FINAL/image/fig3-app-screenshot.jpg" alt="The finalized Canvas Web Application running on Apache Tomcat" class="max-h-[370px] w-auto rounded-lg" />
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="rounded-xl border border-white/10 bg-black/25 p-3">
    <div class="font-bold text-cyan-200 mb-1 flex items-center gap-2 text-sm"><div class="i-carbon:play-filled-alt" />Demo scenario</div>
    <ol class="list-decimal list-inside space-y-0.5 opacity-90">
      <li><b>Add</b> shapes (Square / Circle) to the Canvas</li>
      <li><b>Move</b> shapes to build an action history</li>
      <li><b>Undo</b> (Ctrl+Z) — back to a previous state</li>
      <li><b>Redo</b> (Ctrl+Y) — restore undone actions</li>
      <li><b>Reset</b> — return the Canvas to its initial state</li>
    </ol>
  </div>
  <div class="rounded-lg border border-indigo-400/20 bg-indigo-400/8 p-3"><b class="text-indigo-200">Toolbar:</b> Add Square/Circle · Undo · Redo · Clear.</div>
  <div class="text-[11px] text-emerald-300">⇒ Action history managed accurately; every feature works as designed.</div>
</div>

</div>

<!--
Now we'll demonstrate the system.
First we add a few shapes to the Canvas. Then we move them to create a history of actions.
Next we Undo to return the Canvas to previous states, and Redo to restore the undone actions.
Finally we use Reset to return the Canvas to its initial state.
As you can see, the action history is managed accurately and every feature works as designed.
-->

---
class: py-7
glowSeed: 37
---

# Results Achieved

<div class="grid grid-cols-2 gap-3 mt-5 text-sm">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-4 flex gap-3"><span class="i-carbon:checkmark-outline text-emerald-300 text-2xl shrink-0" /><span>A <b>complete Web-based Undo/Redo system</b> (Servlet + Canvas).</span></div>

<div class="rounded-xl border border-indigo-400/20 bg-indigo-400/8 p-4 flex gap-3"><span class="i-carbon:stacked-scrolling-2 text-indigo-300 text-2xl shrink-0" /><span>Uses a <b>Stack (ArrayDeque)</b> to manage action history.</span></div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4 flex gap-3"><span class="i-carbon:timer text-cyan-300 text-2xl shrink-0" /><span><b>Push / Undo / Redo</b> all run in <b>O(1)</b>; memory-limit enforcement is <b>O(1)</b>.</span></div>

<div class="rounded-xl border border-violet-400/20 bg-violet-400/8 p-4 flex gap-3"><span class="i-carbon:cube-add text-violet-300 text-2xl shrink-0" /><span><b>Extensible</b> via new Actions — no change to existing code (OCP).</span></div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 flex gap-3"><span class="i-carbon:warning-alt text-amber-300 text-2xl shrink-0" /><span>Detected &amp; fixed <b>2 edge cases</b> (Timeline Paradox, Ghost Undo).</span></div>

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-4 flex gap-3"><span class="i-carbon:architecture text-fuchsia-300 text-2xl shrink-0" /><span>A <b>clear, maintainable architecture</b> that meets the project's requirements.</span></div>

</div>

<!--
After development and testing, we achieved the following results:
a working Web-based Undo/Redo system;
a Stack to manage action history;
Push, Undo and Redo all in O(1);
extensibility by adding new Actions without affecting existing ones;
and a clear, maintainable architecture that meets the project requirements.
-->

---
class: py-7
glowSeed: 41
---

# Conclusion

<div class="grid grid-cols-2 gap-4 mt-5 text-sm">

<div class="rounded-xl border border-indigo-400/20 bg-indigo-400/8 p-5">
  <div class="font-bold text-indigo-200 mb-2 flex items-center gap-2"><div class="i-carbon:education text-xl" />What we applied</div>
  <ul class="list-disc list-inside space-y-1 opacity-90">
    <li><b>Data structures</b> — Stack (LIFO) for Undo/Redo.</li>
    <li><b>Algorithms</b> — O(1) memory limit with ArrayDeque.</li>
    <li><b>OOP</b> — Command Pattern, OCP / SRP.</li>
  </ul>
  <div class="mt-2 text-xs opacity-80">We didn't just learn the theory — we applied it to a <b>real-world Web problem</b>.</div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-200 mb-2 flex items-center gap-2"><div class="i-carbon:roadmap text-xl" />Future work</div>
  <ul class="list-disc list-inside space-y-1 opacity-90">
    <li>Add <code>DeleteAction</code>, <code>ResizeAction</code>, <code>RotateAction</code>.</li>
    <li><b>Multi-step</b> Undo/Redo (batch / group actions).</li>
    <li>Keep the <b>current architecture</b> intact when extending.</li>
  </ul>
</div>

</div>

<div class="mt-5 text-center text-base opacity-90">
  Principles applied: <b class="text-cyan-300">Decomposition</b> · <b class="text-indigo-300">Pattern Recognition</b> · <b class="text-violet-300">Abstraction</b> · <b class="text-emerald-300">Algorithm Optimization</b>
</div>

<!--
Through this project, we applied our knowledge of data structures, algorithms and object-oriented programming to build a complete Undo/Redo system.
We didn't just understand Stack in theory — we applied it to a real-world Web problem.
In the future, the system can be extended with features like Delete, Resize or Rotate while keeping the same architecture.
-->

---
layout: center
class: text-center
glowSeed: 47
---

<h1 class="text-6xl font-extrabold bg-gradient-to-r from-indigo-300 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Thank You</h1>

<div class="text-2xl font-bold opacity-90 mt-4">Thank you for listening</div>

<div class="mt-2 text-base opacity-70">We're ready for your questions 🙋</div>

<div class="mt-6 flex justify-center gap-2 text-sm">
  <div class="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-indigo-200">Dam Le Tuan Anh · SE204111</div>
  <div class="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 text-violet-200">Nguyen Pham An · SE204957</div>
  <div class="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1.5 text-fuchsia-200">Than Nhat Huy · SE203317</div>
</div>

<div class="mt-8 text-sm opacity-50">CSD201 · FPT University HCM — Web-Based Canvas Undo/Redo Engine</div>

<!--
Thank you all for listening. We're ready to take your questions.
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

/* ---------- code blocks inside cards ---------- */
pre { margin: 0.2rem 0; }
pre code { font-size: 0.72rem; line-height: 1.35; }

.slidev-layout { padding-top: 2.2rem; padding-bottom: 2.2rem; }
</style>
