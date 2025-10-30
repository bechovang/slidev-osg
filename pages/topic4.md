---
title: "Topic 4: File Systems & Storage Management"
mdc: true
class: "text-left"
---
HI
---
layout: cover
title: Topic 4: File Systems & Storage Management
transition: fade
background: https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop
class: text-center bg-black/50
---

<div
  v-motion
  :initial="{ y: -30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
>
  <h1 class="text-5xl font-extrabold tracking-tight">
    Topic 4: File Systems & Storage Management
  </h1>
</div>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 300, duration: 500 } }"
  class="mt-3 text-xl opacity-90"
>
  OSG202 – Operating Systems
  
</div>

---
transition: slide-left
layout: default
---

# TEAM

<div class="grid grid-cols-3 gap-8 mt-8">
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=11" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">Nguyen Ngoc Phuc</div>
    <div class="text-gray-500">MSSV: SE203055</div>
  </div>
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=22" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">Dam Le Tuan Anh</div>
    <div class="text-gray-500">MSSV: SE204111</div>
  </div>
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=33" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">Nguyen Quang Son</div>
    <div class="text-gray-500">MSSV: SE171738</div>
  </div>
</div>

---
layout: two-cols-header
transition: zoom-in
---

## If you could choose, which university would you attend?

::left::

<figure>
  <img src="/images/thuvienlonxon.png" alt="Messy library" class="rounded-lg shadow-md" style="width: 520px; height: 320px; object-fit: cover;"/>
  <figcaption class="text-center mt-2 opacity-80">University V Library</figcaption>
</figure>

::right::

<figure>
  <img src="/images/thuviengongang.png" alt="Modern FPT library" class="rounded-lg shadow-md" style="width: 520px; height: 320px; object-fit: cover;"/>
  <figcaption class="text-center mt-2 opacity-80">FPT University Library</figcaption>
</figure>
---
layout: default
transition: fade
---

# Let’s explore 4 core concepts in a File System

- FILE 
- DIRECTORY 
- METADATA 
- BLOCK

---
layout: default
transition: fade
---

# Imagine: Sorting Books = File System

<div class="opacity-80">A library represents how an OS organizes and stores data.</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click="1" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-book text-3xl"></div>
    <div class="mt-2 font-bold text-xl">FILE</div>
    <div class="opacity-80">As "books" containing content.</div>
  </div>
  <div v-click="2" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-folder text-3xl"></div>
    <div class="mt-2 font-bold text-xl">DIRECTORY (Directory)</div>
    <div class="opacity-80">As "bookcases" to organize and locate.</div>
  </div>
  <div v-click="3" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-tag text-3xl"></div>
    <div class="mt-2 font-bold text-xl">METADATA (Superdata)</div>
    <div class="opacity-80">"Tags" on books (author, genre, location...).</div>
  </div>
  <div v-click="4" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-cube text-3xl"></div>
    <div class="mt-2 font-bold text-xl">BLOCK</div>
    <div class="opacity-80">Divide books into small "boxes" to store on the disk.</div>
  </div>
</div>

---
transition: fade
layout: two-cols
---

# What is File System Architecture?

If **File System** is a "Warehouse Manager" for your data...

...then **File System Architecture** is the **work style** and **rules** that the manager follows.

Each style has its strengths and weaknesses, optimized for different "warehouses" (operating systems).

::right::

<br>
<div class="text-center">
<p class="font-bold text-xl">3 most famous File System Architectures</p>
<div class="flex justify-around items-center mt-8">
  <div class="text-center">
    <div class="i-carbon-notebook text-8xl text-blue-500"></div>
    <p>FAT32</p>
  </div>
  <div class="text-center">
    <div class="i-carbon-security text-8xl text-green-500"></div>
    <p>NTFS</p>
      </div>
  <div class="text-center">
    <div class="i-carbon-catalog text-8xl text-orange-500"></div>
    <p>ext4</p>
  </div>
</div>
</div>

---
layout: two-cols
---

# FAT32
<p class="opacity-70">Representative of simplicity and compatibility</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Strengths:</p>
  <ul>
    <li><strong>Extremely simple:</strong> Easy to understand structure.</li>
    <li><strong>Absolutely compatible:</strong>: Windows, macOS, Linux, TV, Cameras...</li>
  </ul>

  <br>

  <p class="font-bold text-red-500">❌ Weaknesses:</p>
  <ul>
    <li>Easy to clutter, poor performance (fragmentation).</li>
    <li>Cannot store files larger than 4GB.</li>
    <li>Almost no security.</li>
  </ul>

</div>

::right::

<div class="flex flex-col items-center justify-center h-full">
  <div class="i-carbon-notebook text-9xl text-blue-500"></div>
</div>

---
layout: two-cols
---

# NTFS
<p class="opacity-70">Windows' robust platform</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Strengths:</p>
  <ul>
    <li><strong>Exceptional security:</strong> Detailed permission for each user (ACLs).</li>
    <li><strong>Data safety:</strong> Has "journal" (Journaling) to prevent sudden power loss.</li>
    <li><strong>Modern & Robust:</strong> Supports large files, compression, encryption...</li>
  </ul>

  <br>

  <p class="font-bold text-red-500">❌ Weaknesses:</p>
  <ul>
    <li>"Difficult" with other operating systems (Linux/macOS can only read, hard to write).</li>
  </ul>

</div>


::right::

<div class="flex flex-col items-center justify-center h-full">
  <div class="i-carbon-security text-9xl text-green-500"></div>
</div>


---
layout: two-cols
---

# ext4
<p class="opacity-70">Standard for the Linux world</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Strengths:</p>
  <ul>
    <li><strong>Optimized speed:</strong> Smartly arranging large files (Extents) to help access quickly.</li>
    <li><strong>Reliable:</strong> Has "journal" for security, stability.</li>
    <li><strong>Flexible & Open Source:</strong> Continuously improved by the community.</li>
  </ul>
  
  <br>

  <p class="font-bold text-red-500">❌ Weaknesses:</p>
  <ul>
    <li>Windows does not "understand" the organization of this warehouse.</li>
  </ul>

</div>

::right::

<div class="flex flex-col items-center justify-center h-full">
  <div class="i-carbon-catalog text-9xl text-orange-500"></div>
</div>

---
layout: default
---

# Put Them on the Scale

| Criteria | **FAT32** | **NTFS** | **ext4** |
| :--- | :---: | :---: | :---: |
| **Compatibility** | ⭐⭐⭐ (Excellent) | ⭐ (Poor) | ⭐ (Poor) |
| **Security** | ⭐ (Very weak) | ⭐⭐⭐ (Excellent) | ⭐⭐ (Good) |
| **Performance** | ⭐ (Low) | ⭐⭐ (Good) | ⭐⭐⭐ (Very fast) |
| **OS ecosystem** | Most devices | **Windows** | **Linux** |


---

# Allocation Method
### How is "Queueing" on the Hard Disk?

When a **new shipment** (file) comes in, the **warehouse manager** (Operating System) must decide:

<br>

<p class="text-3xl text-center">
  How to stack the boxes?
</p>

<br>

Let's explore 3 classic queueing strategies!

<!-- 
This is an introduction slide.
-->




---
layout: default
transition: fade
---

## 1. Contiguous

<p class="text-center opacity-80">Contiguous allocation: Find a long empty aisle, stack the entire shipment in it. (All data of the file is placed consecutively on the disk).</p>

<figure>
  <img src="/images/contiguous.jpg" alt="Contiguous Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Contiguous Allocation</figcaption>
</figure>




---
layout: two-cols-header
---

# 1. Contiguous Allocation

## <span class="i-ph-books-duotone inline-block"></span> "Find a long empty aisle, stack the entire shipment in it."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Strengths:</p>
<ul>
  <li v-click><strong>Extremely fast:</strong> Just go to the aisle and go straight. (because it's consecutive)</li>
  <li v-click><strong>Easy to search:</strong> Very fast to find the nth box.</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Weaknesses:</p>
<ul>
  <li v-click><strong>Difficult to find space:</strong> Hard to find a long aisle.</li>
  <li v-click><strong>Wasted space:</strong> Small gaps are wasted (external fragmentation).</li>
</ul>
</div>
</div>

::right::
<div></div>



---
layout: default
transition: fade
---

## 2. Linked

<p class="text-center opacity-80">Linked allocation: Stack each box in an empty aisle, write the address of the next box on the box. (Each data block contains a pointer to the next block).</p>

<figure>
  <img src="/images/linked.jpg" alt="Linked Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Linked Allocation</figcaption>
</figure>


---
layout: two-cols-header
---

# 2. Linked Allocation

## <span class="i-ph-link-bold inline-block"></span> "Stack each box in an empty aisle, write the address of the next box on the box."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Strengths:</p>
<ul>
  <li v-click><strong>Flexible:</strong> Utilize all empty aisles.</li>
  <li v-click><strong>Easy to add items:</strong> Just find an empty aisle and link it to the "chain".</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Weaknesses:</p>
<ul>
  <li v-click><strong>Extremely slow:</strong> Extremely slow to retrieve items (wanting to reach block 100 might require traversing 99 times).</li>
  <li v-click><strong>High risk:</strong> Losing one "pointer" means losing all the items remaining.</li>
</ul>
</div>
</div>


::right::
<div></div>


---
layout: default
transition: fade
---

## 3. Indexed

<p class="text-center opacity-80">Indexed allocation: Scatter, but create a separate "Index Sheet" to record all addresses (each file has a separate index block listing the addresses of its data blocks).</p>

<figure>
  <img src="/images/indexed.jpg" alt="Indexed Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Indexed Allocation: Index sheet pointing to data blocks</figcaption>
</figure>


---
layout: two-cols-header
---

# 3. Indexed Allocation

## <span class="i-ph-list-bullets-bold inline-block"></span> "Scatter, but create a separate 'Index Sheet' to record all addresses."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Strengths:</p>
<ul>
  <li v-click><strong>Vuà nhanh vừa linh hoạt:</strong> Want to find which box, just consult the "index".</li>
  <li v-click>Still good at utilizing space like Linked allocation.</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Weaknesses:</p>
<ul>
  <li v-click><strong>A bit expensive:</strong> Wastes an entire "index block" for very small files.</li>
</ul>
</div>
  </div>


::right::
<div></div>



<!-- ==================================================================== -->

---
layout: default
transition: fade
---

# Schedule for the Disk

<p class="opacity-80 text-lg">Strategy for Disk "Elevator" Movement</p>

<div class="mt-4 grid grid-cols-2 gap-6 items-center">
  <div>
    <v-clicks>
      <ul class="list-disc pl-5">
        <li>Imagine a <b>building</b>, data requests are <b>people waiting on floors</b>.</li>
        <li>"<b>Read/Write head</b>" is the <b>elevator</b>.</li>
        <li>Problem: How should the elevator <b>move</b> to serve everyone <b>quickly</b> and <b>efficiently</b>?</li>
        <li>This is the <b>Disk Scheduling Problem</b>.</li>
      </ul>
    </v-clicks>
  </div>
  <div>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnRzbHBrMWZ5NGUxc2VuYTJydjNoeWgwcGlvbHczMjA5OHF6aXJ5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/P8XjmO1TTX3Nu/giphy.gif" alt="Elevator" class="rounded-lg shadow mx-auto" style="max-width:min(90vw,720px); max-height:50vh; object-fit:contain;"/>
  </div>
</div>

---
layout: default
transition: fade
---

## Real-world Scenario

<div class="opacity-80">A 200-story building (0–199). The elevator is at <b>floor 53</b>. People waiting at: <b>98, 183, 37, 122, 14, 124, 65, 67</b>.</div>

<div class="mt-5">
  <div class="relative mx-auto" style="height:56px; max-width:min(92vw,900px);">
    <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-300 rounded"></div>
    <!-- ticks -->
    <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[10px]">0</div>
    <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[10px]">199</div>
    <!-- elevator at 53 -->
    <div class="absolute" style="left: calc(53/199*100%); top: 4px;">
      <div class="px-2 py-0.5 text-xs rounded bg-sky-500 text-white shadow">53</div>
    </div>
    <!-- requests -->
    <div class="absolute" style="left: calc(98/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">98</div></div>
    <div class="absolute" style="left: calc(183/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">183</div></div>
    <div class="absolute" style="left: calc(37/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">37</div></div>
    <!-- 122 label above to avoid overlap with 124 -->
    <div class="absolute flex flex-col items-center" style="left: calc(122/199*100%); bottom: 4px;"><div class="text-[10px] text-center mb-1">122</div><div class="w-2 h-2 bg-emerald-500 rounded-full"></div></div>
    <div class="absolute" style="left: calc(14/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">14</div></div>
    <!-- 124 stays below -->
    <div class="absolute" style="left: calc(124/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">124</div></div>
    <!-- 65 label above to avoid overlap with 67 -->
    <div class="absolute flex flex-col items-center" style="left: calc(65/199*100%); bottom: 4px;"><div class="text-[10px] text-center mb-1">65</div><div class="w-2 h-2 bg-emerald-500 rounded-full"></div></div>
    <div class="absolute" style="left: calc(67/199*100%); bottom: 4px;"><div class="w-2 h-2 bg-emerald-500 rounded-full"></div><div class="text-[10px] text-center mt-1">67</div></div>
  </div>
</div>

<div class="mt-4 opacity-80">Task: Find the <b>best</b> elevator movement strategy. Will compare 4 strategies…</div>

---
layout: default
transition: slide-left
---

## FCFS — "First come, first served!"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Operation: Serve requests in <b>FIFO order</b>.</li>
  <li class="opacity-80">Strengths: <b>Fair</b>, nobody is left behind.</li>
  <li class="opacity-80">Weaknesses: <b>Inefficient</b>, winding path.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Example result</b>: Total distance ≈ <b>640 floors</b> 😱</div>
<div v-click class="mt-2 text-sm opacity-80">Path: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67</div>
<figure v-click class="mt-4">
  <img src="/images/FCFS.jpg" alt="FCFS Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">FCFS: illustrated path</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## SSTF — "Serve the closest one first!"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Operation: Always choose the <b>closest</b> request compared to the current position.</li>
  <li class="opacity-80">Strengths: <b>Significantly reduces</b> the distance traveled.</li>
  <li class="opacity-80">Weaknesses: May cause <b>starvation</b> at distant locations.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Example result</b>: Total distance ≈ <b>236 floors</b> 👍</div>
<div v-click class="mt-2 text-sm opacity-80">A possible path: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183</div>

<figure v-click class="mt-4">
  <img src="/images/SSTF.jpg" alt="SSTF Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">SSTF: illustrated path</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## SCAN — "Elevator Algorithm"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Operation: Move <b>one direction</b>, serve all requests on the way; when reaching the end, <b>reverse direction</b>.</li>
  <li class="opacity-80">Strengths: <b>Fair</b> than SSTF, reduces loss.</li>
  <li class="opacity-80">Weaknesses: A bit biased towards middle floors.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Example result</b>: Total distance ≈ <b>331 floors</b>.</div>
<div v-click class="mt-2 text-sm opacity-80">Path: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14</div>

<figure v-click class="mt-4">
  <img src="/images/SCAN.jpg" alt="SCAN Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">SCAN: illustrated path</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## C-SCAN — "One-way Elevator"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Operation: Move <b>only one direction</b> (e.g., up). Jump back to <b>0</b> (no service) and then up again.</li>
  <li class="opacity-80">Strengths: Even waiting <b>more uniform</b> than others.</li>
  <li class="opacity-80">Weaknesses: Has <b>large movements</b> that do not serve.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Example result</b>: Total distance ≈ <b>382 floors</b>.</div>
<div v-click class="mt-2 text-sm opacity-80">Path: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37</div>

<figure v-click class="mt-4">
  <img src="/images/C-SCAN.jpg" alt="C-SCAN Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">C-SCAN: illustrated path</figcaption>
</figure>

---
layout: default
transition: fade
---

## Which Strategy is the Best?

<div class="overflow-x-auto mt-3">
  <table class="w-full text-left border-separate border-spacing-y-2">
    <thead class="text-sm opacity-70">
      <tr>
        <th class="px-3">Algorithm</th>
        <th class="px-3">Total Distance</th>
        <th class="px-3">Fairness</th>
        <th class="px-3">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">FCFS</td>
        <td class="px-3 py-2">640 (Worst 👎)</td>
        <td class="px-3 py-2">⭐⭐⭐</td>
        <td class="px-3 py-2">Simple but inefficient</td>
      </tr>
      <tr v-click class="bg-emerald/10">
        <td class="px-3 py-2 font-medium">SSTF</td>
        <td class="px-3 py-2">236 (Best 👍)</td>
        <td class="px-3 py-2">⭐</td>
        <td class="px-3 py-2">Fast but may lose</td>
      </tr>
      <tr v-click class="bg-sky/10">
        <td class="px-3 py-2 font-medium">SCAN</td>
        <td class="px-3 py-2">331</td>
        <td class="px-3 py-2">⭐⭐</td>
        <td class="px-3 py-2">Good balance, like a real elevator</td>
      </tr>
      <tr v-click class="bg-indigo/10">
        <td class="px-3 py-2 font-medium">C-SCAN</td>
        <td class="px-3 py-2">382</td>
        <td class="px-3 py-2">⭐⭐⭐</td>
        <td class="px-3 py-2">Even waiting, with jumps that don't serve</td>
      </tr>
    </tbody>
  </table>
</div>

<div v-click class="mt-3 p-3 rounded border border-gray-200/70 bg-white/60 dark:bg-white/5">
  <div class="font-bold mb-1">Conclusion</div>
  <div class="opacity-80 text-sm">In practice, variants like <b>LOOK</b> and <b>C-LOOK</b> are often used because they provide a good balance between performance and fairness.</div>
</div>

<!-- ============================================End Disk Scheduling block -->

<!-- =============================CASE STUDY-->
---
layout: default
---
# Case Study: Deep Dive into NTFS
### Windows’ “Supercharged Digital Library”

<div class="grid grid-cols-2 gap-8 items-center">
<div>
<p v-click>
Why was NTFS developed? To replace the "predecessor" <strong>FAT</strong> which was old and weak.
</p>
<p v-click class="mt-4">
<strong>Objective:</strong> Build a robust, secure, and flexible storage platform for enterprise environments.
</p>
<p v-click class="mt-4">
Today, NTFS is the default file system, indispensable on every Windows computer.
</p>
</div>
<div class="text-center" v-click>
  <div class="i-carbon-logo-windows text-8xl inline-block"></div>
  <div class="i-mdi-library-shelves text-8xl inline-block"></div>
</div>
</div>

---
layout: default
---

# Core Architecture: Master File Table (MFT)
### The Library’s “All‑Powerful Ledger”

<div v-click class="p-4 rounded bg-gray-500/10 text-center">
Design philosophy: <strong class="text-green-500">"Everything on the disk is a file"</strong> — even the MFT itself!
</div>

<div v-click class="mt-8 text-center">
  <p>MFT is essentially a <strong>database</strong>, containing a <strong>"profile" (record)</strong> for ALL files and directories.</p>
  <div class="flex justify-center items-center gap-8 mt-6">
    <div class="i-carbon-folder text-5xl opacity-70"></div>
    <div class="i-carbon-document text-5xl opacity-70"></div>
    <div class="i-carbon-arrow-right text-4xl"></div>
    <div class="p-4 border rounded shadow-lg">
      <div class="i-mdi-database-search text-7xl"></div>
      <p class="font-bold">MFT</p>
    </div>
    <div class="i-carbon-arrow-left text-4xl"></div>
    <div class="i-carbon-image text-5xl opacity-70"></div>
    <div class="i-carbon-video text-5xl opacity-70"></div>
  </div>
</div>

---
layout: two-cols-header
---

# Inside the MFT: Every File Is an “Index Card”

Each “record” (MFT Record) contains all the file’s **Attributes**.

<v-clicks>

- **`$FILE_NAME`**: File name, of course!
- **`$STANDARD_INFORMATION`**: Creation date, owner, access rights...
- ... and many other attributes.
- Most importantly is **`$DATA`**, where the file's data is stored... or its "address".

</v-clicks>

::right::

<div class="p-4 rounded bg-gray-500/10 shadow-md">
<p class="font-bold text-center">Example of an MFT Record</p>
<div class="mt-4 font-mono text-sm space-y-2">
  <p><strong>Record Header</strong>: [Management Information]</p>
  <p><strong>Attr: $STANDARD_INFO</strong>: { Timestamps, Owner... }</p>
  <p><strong>Attr: $FILE_NAME</strong>: "baocao.docx"</p>
  <p class="p-2 bg-blue-500/20 rounded"><strong>Attr: $DATA</strong>: { ...Content or Pointer... }</p>
  <p><strong>Attr: $SECURITY_DESCRIPTOR</strong>: { ACLs... }</p>
</div>
</div>

---
layout: two-cols-header
---

# Speed Optimization: “Resident” vs “Non‑resident”

### <span class="i-carbon-home inline-block"></span> Resident Data
<p class="opacity-70">“Content is written right on the card”</p>
<div v-click>
<p>With a <strong>very small file</strong> (a few lines of text), NTFS stores the data <strong>directly within the MFT record</strong>.</p>
<p class="mt-4 font-bold text-green-500">➡️ Extremely fast access, no need to "go to the library" to search!</p>
    </div>

::right::

### <span class="i-carbon-building inline-block"></span> Non‑resident Data
<p class="opacity-70">“The card only writes where it lives in the warehouse”</p>
<div v-click>
<p>With a <strong>large file</strong>, the MFT record only stores <strong>"address"</strong> where the actual data is stored on the disk.</p>
<p class="mt-4 font-bold">➡️ This is the normal operating mode.</p>
  </div>

---
layout: two-cols-header
---

# Feature #1: Journaling – “The Safety Logbook”

<p v-click><strong>Problem:</strong> What happens if power fails while saving?</p>
<p v-click><strong>NTFS’ solution:</strong> Before any change, it writes the “intent” to a special log (`$LogFile`).</p>
<p v-click class="font-bold text-green-500 mt-4">Benefit: If power is lost, when it returns the system just reads the logbook to finish or roll back the work. Data stays consistent.</p>

::right::

<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold text-center">Safe Operation Flow</p>
  <ol class="mt-4 space-y-4 text-center">
    <li>Application requests Write file</li>
    <div class="i-carbon-arrow-down mx-auto text-2xl"></div>
    <li>Write to <span class="font-mono text-blue-500">Journal ($LogFile)</span></li>
  <div class="relative">
      <div class="i-carbon-arrow-down mx-auto text-2xl"></div>
      <div v-click class="i-carbon-flash-filled absolute text-3xl text-yellow-400 -right-2 top-0 animate-ping"></div>
    </div>
    <li>Write to Disk (Actual location)</li>
  </ol>
</div>

---
layout: two-cols-header
---

# Feature #2: Security – “Permissioned Library Card”

**Access Control Lists (ACLs):** Configure very fine‑grained access.

<v-clicks>

- Far beyond Linux’s simple 3‑class model (owner, group, other).
- Grant permissions (Read, Write, Delete, …) to **individual users** or **groups** on **each file/folder**.
- **Golden rule:** a <span class="text-red-500 font-bold">Deny</span> always overrides any <span class="text-green-500 font-bold">Allow</span>.

</v-clicks>

::right::

<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold text-center flex items-center gap-2"><span class="i-carbon-document"></span> baocao.docx ACLs</p>
  <ul class="mt-4 font-mono text-sm space-y-2">
    <li class="flex justify-between"><span>User: Alice</span> <span class="text-green-500">[Allow: Read, Write]</span></li>
    <li class="flex justify-between"><span>Group: Marketing</span> <span class="text-green-500">[Allow: Read]</span></li>
    <li class="flex justify-between"><span>User: Bob</span> <span class="text-red-500">[Deny: All]</span></li>
    <li class="flex justify-between"><span>Everyone</span> <span class="text-gray-500">[None]</span></li>
  </ul>
</div>

---

# Other “Superpowers”

<div class="grid grid-cols-3 gap-8 mt-8 text-center">
<div v-click>
  <div class="i-carbon-camera text-6xl"></div>
  <h3 class="font-bold mt-2">Volume Shadow Copy (VSS)</h3>
  <p class="text-sm opacity-80">Creates an "instant snapshot" of the disk for safe backup. The foundation of System Restore.</p>
  </div>
<div v-click>
  <div class="i-carbon-locked text-6xl"></div>
  <h3 class="font-bold mt-2">Encryption (EFS)</h3>
  <p class="text-sm opacity-80">Encrypts files/directories. Only users with "key" can read data.</p>
  </div>
<div v-click>
  <div class="i-carbon-arrows-vertical text-6xl"></div>
  <h3 class="font-bold mt-2">Compression</h3>
  <p class="text-sm opacity-80">Automatically compresses data "invisibly" to save disk space.</p>
  </div>
</div>


---
layout: two-cols-header
---

# Summary: NTFS Under the Microscope

### <span class="i-carbon-checkmark-outline inline-block text-green-500"></span> Strengths

<ul>
  <li v-click><strong>High reliability</strong> (thanks to journaling).</li>
  <li v-click><strong>Strong security</strong> (thanks to ACLs).</li>
  <li v-click><strong>Flexible performance</strong> (handles small and large files well).</li>
  <li v-click><strong>Rich enterprise features</strong>.</li>
</ul>

### <span class="i-carbon-close-outline inline-block text-red-500"></span> Weaknesses

<ul>
  <li v-click><strong>Complex:</strong> MFT structure creates a lot of overhead (management data).</li>
  <li v-click class="font-bold text-red-400"><strong>Poor compatibility:</strong> This is the biggest weakness. Linux & macOS can read, but stable data writing is extremely difficult.</li>
</ul>



---
layout: section
---

# 4. Discussion & Looking Ahead

---
layout: default
---

# What We've Seen: The Trade-off
### No solution is perfect!

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5pbHBvenhzaDJxOHE2Zm4zY3UzMGJpY3ZoeGVndndibzNhNm9ldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kjhkPCFKyGaj6cOSZR/giphy.gif" alt="Elevator" class="rounded-lg shadow mx-auto" style="max-width:min(90vw,720px); max-height:50vh; object-fit:contain;"/>
</div>

<div class="space-y-4">
<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold">Journaling (Write journal)</p>
  <p class="text-sm opacity-80">Trade <span class="text-green-500">Reliability</span> for a bit of <span class="text-red-500">Performance</span> (because it must write more).</p>
</div>

<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold">Allocation method</p>
  <p class="text-sm opacity-80">Trade between <span class="text-green-500">Access speed</span> (Contiguous) and <span class="text-blue-500">Flexibility</span> (Indexed).</p>
</div>
</div>
</div>

<p v-click class="text-center mt-8 text-xl opacity-80">
The choice of file system design is always a delicate balance between various factors.
</p>

---
layout: two-cols-header
---

# The SSD Shock
### The rules have changed completely

::left::
</br>

### <span class="i-carbon-data-base inline-block"></span> HDD (Hard Disk)

<div class="p-4 rounded bg-gray-500/10 mt-4">
  <ul class="list-disc pl-5">
    <li><strong>Mechanical world:</strong> Has a physical read head.</li>
    <li><strong>Seek time</strong> is the number one enemy.</li>
    <li><strong>Elevator algorithm (SCAN)</strong> is "King" for optimizing travel.</li>
  </ul>
</div>

::right::

### <span class="i-carbon-chip inline-block"></span> SSD (Solid State Drive)

<div class="p-4 rounded bg-blue-500/10 mt-4">
  <ul class="list-disc pl-5">
    <li><strong>Electronic world:</strong> No moving parts.</li>
    <li>Access to any position <strong>equally fast</strong>.</li>
    <li><strong>Elevator algorithm</strong> has become... useless!</li>
  </ul>
</div>

---
layout: default
---

# New Challenges for the SSD World

<div class="grid grid-cols-2 gap-8 mt-10">
<div v-click class="p-4 text-center rounded bg-gray-500/10">
  <div class="i-carbon-settings text-6xl text-red-500"></div>
  <h3 class="font-bold mt-2">Write Amplification (Write amplification)</h3>
  <p class="text-sm opacity-80 mt-2">
    You want to write <span class="font-bold">1MB</span>, but the actual disk needs to work up to <span class="font-bold">3MB</span>! <br>
    (Due to complex "read-modify-write" mechanism). <br>
    ➡️ Reduces performance and lifespan.
  </p>
</div>

<div v-click class="p-4 text-center rounded bg-gray-500/10">
  <div class="i-carbon-chart-scatter text-6xl text-blue-500"></div>
  <h3 class="font-bold mt-2">Wear Leveling (Wear leveling)</h3>
  <p class="text-sm opacity-80 mt-2">
    Each memory cell has a finite lifespan. The controller must be "smart" to write data evenly across the disk. <br>
    (Similar to using all pages in a book). <br>
    ➡️ Maximizes disk lifespan.
  </p>
</div>
</div>

---
layout: default
---

# Future File Systems: "Smarter" Systems
### Not just faster, but also self-protecting data

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold flex items-center gap-2"><span class="i-carbon-copy-file text-2xl text-blue-500"></span> Copy-on-Write (CoW)</h3>
  <p class="text-sm opacity-80 mt-2">
    Never overwrite old data, always create a new copy. <br>
    <strong>Benefits:</strong> Create an "instant snapshot", absolutely secure in case of a crash.
  </p>
</div>

<div v-click class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold flex items-center gap-2"><span class="i-carbon-security text-2xl text-green-500"></span> Data Integrity (Data integrity)</h3>
  <p class="text-sm opacity-80 mt-2">
    Uses checksum (like "fingerprint") to automatically detect and fix "silent" data errors.
  </p>
</div>
</div>

<div v-click class="mt-8 text-center">
  <p class="text-lg">Representative examples for the future:</p>
  <div class="flex justify-center gap-8 mt-4 text-2xl font-bold">
    <span>ZFS</span>
    <span>Btrfs</span>
    <span>ReFS</span>
  </div>
</div>

---
layout: center
class: "text-center"
---

# Thank you for listening!
