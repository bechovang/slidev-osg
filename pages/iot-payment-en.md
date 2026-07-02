---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Smart QR Payment Station (IoT)
exportFilename: Smart-QR-Payment-Station-EN
lineNumbers: false
drawings:
  persist: false
mdc: true
glowSeed: 42
routerMode: hash
---

<div class="translate-x--10">

<h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
  Smart QR Payment Station
</h1>

<div class="text-xl opacity-90 mt-2">
  A low-cost IoT VietQR payment terminal for small shops
</div>

<div class="mt-6 text-sm opacity-70">
  ESP32 (dual-core) | OLED SH1106 | MAX98357A I2S audio | Wi-Fi + PayOS
</div>

<div class="mt-8 border-2 border-solid border-green-800 bg-green-800/20 rounded-lg px-4 py-2 inline-block">
  <span class="text-green-400 font-bold">Group 2</span>
</div>

<div class="mt-6 text-sm flex flex-col gap-1 opacity-90">
  <div>1. Nguyen Ngoc Phuc</div>
  <div>2. Than Nhat Huy</div>
  <div>3. Dam Le Tuan Anh</div>
  <div>4. Nguyen Pham An</div>
</div>

</div>

<!--
A QR payment terminal that sits on the counter. The customer scans, pays, and the device reads the amount out loud. It is an embedded IoT system built on ESP32, connected to VietQR through PayOS.
-->

---
class: py-8
glowSeed: 58
---

# Problem and Solution

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">

<div class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-red-300">
    <div class="i-carbon:warning-alt text-2xl" />
    <span class="font-bold text-lg">Problem</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90">
    <div>- Commercial POS terminals are expensive and bulky.</div>
    <div>- Cashier must check the customer phone by hand for each bill.</div>
    <div>- Static paper QR: customers type the wrong amount.</div>
    <div>- Fake payment screenshots are easy to fake.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-green-300">
    <div class="i-carbon:checkmark-filled text-2xl" />
    <span class="font-bold text-lg">Solution</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90">
    <div>- A cheap embedded device, about 160k VND of parts.</div>
    <div>- Dynamic QR with the amount built in, no typing mistakes.</div>
    <div>- Instant confirmation via secure PayOS webhook.</div>
    <div>- Speaker reads the amount, so the cashier is hands-free.</div>
  </div>
</div>

</div>

<div class="mt-6 bg-white/5 border border-white/10 rounded-lg p-3 text-xs flex items-center justify-center gap-3">
  <span class="i-carbon:money text-amber-300 text-lg" />
  <span class="opacity-90">ESP32 ~50k + OLED ~40k + amp/speaker ~50k + wiring ~20k</span>
  <span class="text-green-400 font-bold">? 160,000 VND</span>
  <span class="opacity-50">vs</span>
  <span class="text-red-300 line-through opacity-80">a POS at millions</span>
</div>

<!--
The core problem: commercial POS is costly, the cashier wastes time checking phones, static QR invites wrong amounts, and fake bills are common. Our solution is a cheap embedded device showing a dynamic QR with the exact amount, confirming each transaction through a webhook, and announcing it over a speaker.
-->

---
class: py-8
glowSeed: 90
---

# IoT Architecture: Three Layers

<div class="flex flex-col gap-4 text-sm mt-8">
  <div class="border-l-4 border-blue-500 pl-4">
    <div class="font-bold text-blue-300 text-base">Edge - ESP32</div>
    <p class="opacity-80 mt-1">Draws the dynamic QR and speaks the amount. Dual-core keeps the UI and sound smooth.</p>
  </div>
  <div class="border-l-4 border-purple-500 pl-4">
    <div class="font-bold text-purple-300 text-base">Network</div>
    <p class="opacity-80 mt-1">ESP32 polls the backend over Wi-Fi LAN every 1.5s. No public IP needed.</p>
  </div>
  <div class="border-l-4 border-green-500 pl-4">
    <div class="font-bold text-green-300 text-base">Cloud - Backend + PayOS</div>
    <p class="opacity-80 mt-1">FastAPI + SQLite brain. PayOS issues VietQR and pushes webhooks.</p>
  </div>
</div>

<div class="mt-8 bg-white/5 border border-white/10 rounded-lg p-3 text-sm flex items-center justify-center gap-3 flex-wrap">
  <span class="text-blue-300 font-semibold">Edge (ESP32)</span>
  <div class="i-carbon:arrow-right opacity-60" />
  <span class="text-purple-300 font-semibold">Wi-Fi LAN poll</span>
  <div class="i-carbon:arrow-right opacity-60" />
  <span class="text-green-300 font-semibold">Cloud + PayOS</span>
  <div class="i-carbon:arrow-right opacity-60" />
  <span class="text-amber-300 font-semibold">Webhook confirms</span>
</div>

<!--
This is a clean three-layer IoT system. The ESP32 is a real-time edge node owning display and audio. A thin network layer connects it over Wi-Fi LAN with simple polling. The cloud is the brain that creates payments and confirms them through PayOS.
-->

---
class: py-8
layout: center
---

# Block Diagram

<div class="flex flex-col items-center mt-6">
  <ZoomableImage src="/iot/image/block.jpg" alt="Block Diagram" class="max-h-[420px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-sm italic opacity-60 mt-4 text-center">Overview: ESP32 at the edge to FastAPI backend to PayOS (Internet)</div>
</div>

---
class: py-8
layout: center
---

# Hardware Schematic

<div class="flex flex-col items-center mt-6">
  <ZoomableImage src="/iot/image/schema%20wokwi.jpg" alt="Schematic" class="max-h-[420px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-sm italic opacity-60 mt-4 text-center">Wiring: OLED SH1106 (I2C) + MAX98357A + speaker (I2S) on ESP32</div>
</div>

---
class: py-8
glowSeed: 130
---

# Wiring Detail: Pin by Pin

<div class="grid grid-cols-2 gap-8 mt-8 text-base">

<div class="flex flex-col gap-6">
  <div class="border-2 border-solid border-amber-800 bg-amber-800/15 rounded-xl p-6">
    <div class="font-bold text-amber-300 text-lg mb-2">Power - VCC / GND</div>
    <p class="opacity-85 leading-relaxed">The 3V3/5V and GND pins feed both the OLED and the MAX98357A. A <strong>common ground is mandatory</strong> for clean signals.</p>
  </div>
  <div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-xl p-6">
    <div class="font-bold text-blue-300 text-lg mb-2">OLED - I2C (2 wires)</div>
    <p class="opacity-85 leading-relaxed"><code>SDA to GPIO21</code> and <code>SCL to GPIO22</code>.</p>
  </div>
</div>

<div class="flex flex-col gap-6">
  <div class="border-2 border-solid border-purple-800 bg-purple-800/15 rounded-xl p-6">
    <div class="font-bold text-purple-300 text-lg mb-2">MAX98357A - I2S</div>
    <div class="opacity-85 flex flex-col gap-2 mt-2 leading-relaxed">
      <div><code>DIN to GPIO25</code> (data)</div>
      <div><code>BCLK to GPIO26</code> (bit clock)</div>
      <div><code>LRC to GPIO27</code> (word select)</div>
      <div><code>SPK+ / SPK-</code> to the speaker</div>
    </div>
  </div>
  <div class="border-2 border-solid border-red-800 bg-red-800/20 rounded-xl p-6">
    <div class="font-bold text-red-300 text-lg mb-2">SD pin: leave floating</div>
    <p class="opacity-85 leading-relaxed">Never tie SD (shutdown) to GND, it disables the amplifier and you lose all sound.</p>
  </div>
</div>

</div>

<!--
Pin by pin: the OLED and amp share the ESP32 power rails with a mandatory common ground. The OLED is I2C on GPIO21/22. The amp is I2S with DIN on 25, BCLK on 26, LRC on 27, and SPK+/SPK- to the speaker. The big trap is the SD pin, which must stay floating or the amplifier shuts off.
-->

---
class: py-8
glowSeed: 138
---

# Firmware Flow

<div class="flex flex-col gap-4 mt-8">

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-1">
  <div class="flex items-center gap-2 mb-2 text-green-300">
    <span class="i-carbon:power text-xl" />
    <span class="font-bold text-base">1. Standby</span>
  </div>
  <p class="opacity-85 text-base">Init I2C, I2S and Wi-Fi in the background. The OLED shows "Ready".</p>
</div>

<div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-lg p-1">
  <div class="flex items-center gap-2 mb-2 text-blue-300">
    <span class="i-carbon:qr-code text-xl" />
    <span class="font-bold text-base">2. Show QR</span>
  </div>
  <p class="opacity-85 text-base">Poll the backend. On a new pending order, draw the QR with the queue number and amount.</p>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/15 rounded-lg p-1">
  <div class="flex items-center gap-2 mb-2 text-purple-300">
    <span class="i-carbon:volume-up text-xl" />
    <span class="font-bold text-base">3. Confirm</span>
  </div>
  <p class="opacity-85 text-base">On a PAID webhook, the speaker reads the amount and the OLED shows success, then returns to standby.</p>
</div>

<div class="bg-white/5 border border-white/10 rounded p-3 flex items-center gap-3 mt-2">
  <div class="i-carbon:renew text-green-300 text-xl shrink-0" />
  <span class="opacity-90 text-base">Linear loop. Wi-Fi reconnects in the background so the audio never stutters.</span>
</div>

</div>

<!--
The order lifecycle is very linear: create the order, show the QR, the customer pays, the device reads the amount, then it resets. Wi-Fi connects in the background from the start, so the device is ready right after power-up.
-->

---
class: py-8
layout: center
---

# Firmware Flowchart

<div class="flex justify-center mt-6">
  <ZoomableImage src="/iot/image/flow.jpg" alt="Flowchart" class="max-h-[480px] w-auto border border-white/10 rounded-lg shadow-lg" />
</div>

---
class: py-8
glowSeed: 170
---

# Why Dual-Core?

<div class="flex flex-col gap-6 mt-8">

<div class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-red-300">
    <div class="i-carbon:warning text-2xl" />
    <span class="font-bold text-lg">Single core: audio stutters</span>
  </div>
  <div class="flex flex-col gap-2 text-base opacity-90">
    <div>- Audio needs constant attention to feed the I2S buffer.</div>
    <div>- But an HTTP request can block for seconds in the same loop.</div>
    <div>- Result: choppy sound whenever the network is slow.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-green-300">
    <div class="i-carbon:checkmark-filled text-2xl" />
    <span class="font-bold text-lg">Two cores: split the work</span>
  </div>
  <div class="flex flex-col gap-2 text-base opacity-90">
    <div>- Core 0: Wi-Fi and HTTP requests.</div>
    <div>- Core 1: audio and the OLED display.</div>
    <div>- Result: network delays never interrupt the spoken amount.</div>
  </div>
</div>

</div>

<div class="mt-6 text-center text-sm italic opacity-80">
  The two cores share data through a mutex (current order) and a queue (paid event).
</div>

<!--
This is the key engineering point. On a single core the audio stuttered whenever the network was slow. We moved networking entirely to Core 0, and kept audio and display on Core 1, so the spoken amount is never interrupted.
-->

---
class: py-8
layout: center
---

# Dual-Core Architecture

<div class="flex flex-col items-center mt-6">
  <ZoomableImage src="/iot/image/dual_core_architecture.jpg" alt="Dual Core Architecture" class="max-h-[450px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-sm italic opacity-60 mt-4 text-center">NetworkTask (Core 0) isolated from Audio/UI (Core 1) via shared state</div>
</div>

---
class: py-8
glowSeed: 210
---

# Dual-Core: Task Allocation

<div class="grid grid-cols-2 gap-8 mt-8 text-base">

<div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-xl p-5">
  <div class="flex items-center gap-3 mb-3 text-blue-300">
    <div class="i-carbon:network-3 text-2xl" />
    <span class="font-bold text-lg">Core 0 (PRO_CPU) - NetworkTask</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90 leading-relaxed">
    <div>- Keeps Wi-Fi alive and runs HTTP polling every 1.5s.</div>
    <div>- Parses the JSON responses by hand.</div>
    <div>- HTTP blocking stays here, so audio is never frozen.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-xl p-5">
  <div class="flex items-center gap-3 mb-3 text-green-300">
    <div class="i-carbon:screen text-2xl" />
    <span class="font-bold text-lg">Core 1 (APP_CPU) - Audio + UI</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90 leading-relaxed">
    <div>- Runs a loop drawing the QR on the OLED.</div>
    <div>- Streams I2S audio in real time.</div>
    <div>- Reads the MP3 files straight from LittleFS.</div>
  </div>
</div>

<div class="col-span-2 border-2 border-solid border-purple-800 bg-purple-800/15 rounded-xl p-5">
  <div class="flex items-center gap-3 mb-3 text-purple-300">
    <div class="i-carbon:data-share text-2xl" />
    <span class="font-bold text-lg">Shared state (safe sync)</span>
  </div>
  <div class="grid grid-cols-3 gap-6 opacity-90 leading-relaxed">
    <div><strong class="text-purple-200">Mutex</strong> (g_current_mutex): locks the current order data (QR, amount) during hand-off.</div>
    <div><strong class="text-purple-200">FreeRTOS Queue</strong> (len 8): pushes PAID events from Core 0 to Core 1 in order.</div>
    <div><strong class="text-purple-200">volatile bool</strong>: holds the Wi-Fi connection flag, no lock needed.</div>
  </div>
</div>

</div>

<!--
The dual-core split in detail: Core 0 owns Wi-Fi, HTTP polling every 1.5s, and manual JSON parsing, so any network blocking stays on that core. Core 1 runs the real-time loop, drawing the QR and streaming MP3 audio from LittleFS. The two cores talk safely through a mutex for the order data, a FreeRTOS queue for paid events, and a volatile bool for the Wi-Fi state.
-->

---
class: py-8
glowSeed: 250
---

# Real-time Payment Flow

<div class="flex flex-col gap-4 mt-8 text-base max-w-3xl mx-auto">

<div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
  <span class="i-carbon:number-1 text-green-400 text-2xl shrink-0" />
  <span class="leading-relaxed">Cashier enters the amount. The backend asks PayOS for a VietQR.</span>
</div>
<div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
  <span class="i-carbon:number-2 text-green-400 text-2xl shrink-0" />
  <span class="leading-relaxed">The order is saved as PENDING. The ESP32 polls and shows the QR.</span>
</div>
<div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
  <span class="i-carbon:number-3 text-green-400 text-2xl shrink-0" />
  <span class="leading-relaxed">The customer scans and pays through their banking app.</span>
</div>
<div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
  <span class="i-carbon:number-4 text-green-400 text-2xl shrink-0" />
  <span class="leading-relaxed">PayOS pushes a webhook. The backend verifies the signature and marks PAID.</span>
</div>
<div class="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
  <span class="i-carbon:number-5 text-green-400 text-2xl shrink-0" />
  <span class="leading-relaxed">The ESP32 sees PAID and the speaker reads the amount out loud.</span>
</div>

</div>

<div class="mt-2 bg-white/5 border border-white/10 rounded-xl p-2 text-sm flex items-center gap-4 max-w-3xl mx-auto">
  <div class="i-carbon:help text-amber-300 text-2xl shrink-0" />
  <span class="opacity-90 leading-relaxed">The device polls because it has no public IP. The backend has a public URL, so it can receive webhooks in real time.</span>
</div>

<!--
The money flows through real PayOS. The key security point is that every webhook is signature-verified, so a fake bill cannot mark an order as paid. The device polls while the backend receives webhooks, because the device has no public IP.
-->

---
class: py-8
glowSeed: 282
---

# Results

<div class="grid grid-cols-2 gap-8 mt-10">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-xl p-6 flex flex-col justify-center">
  <div class="flex items-center gap-3 mb-6 text-blue-300">
    <div class="i-carbon:play-filled-alt text-3xl" />
    <span class="font-bold text-xl">It works end to end</span>
  </div>
  <div class="flex flex-col gap-4 text-base">
    <div class="bg-black/30 rounded-lg p-4 leading-relaxed">Cashier enters amount, backend creates a VietQR link.</div>
    <div class="bg-black/30 rounded-lg p-4 leading-relaxed">ESP32 shows the QR, the customer scans and pays.</div>
    <div class="bg-black/30 rounded-lg p-4 leading-relaxed">PayOS webhook arrives, the speaker reads the amount instantly.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-xl p-6 flex flex-col justify-center">
  <div class="flex items-center gap-3 mb-6 text-green-300">
    <div class="i-carbon:chip text-3xl" />
    <span class="font-bold text-xl">Specs</span>
  </div>
  <div class="grid grid-cols-2 gap-4 text-center">
    <div class="bg-black/30 rounded-xl p-5">
      <div class="text-5xl font-extrabold text-green-400">18%</div>
      <div class="text-sm opacity-70 mt-2">RAM used</div>
    </div>
    <div class="bg-black/30 rounded-xl p-5">
      <div class="text-5xl font-extrabold text-blue-400">64%</div>
      <div class="text-sm opacity-70 mt-2">Flash used</div>
    </div>
  </div>
  <div class="mt-6 flex flex-col gap-2 text-base opacity-85 leading-relaxed">
    <div>- Plenty of headroom left for future features.</div>
    <div>- Dual-core keeps audio smooth even when the network lags.</div>
    <div>- Total parts cost around 160,000 VND.</div>
  </div>
</div>

</div>

<!--
The system runs for real, not just as an idea. RAM is around 18 percent and flash about 64 percent, so there is plenty of room to grow. The dual-core design keeps audio smooth even when the network is unstable, all on roughly 160k VND of parts.
-->

---
layout: center
class: text-center
glowSeed: 298
---

# Thank You!

<div class="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-4">
  Thanks for listening.
</div>

<!--
Thank you. We are ready for questions.
-->
