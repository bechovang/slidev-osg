---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Smart QR Payment Station
exportFilename: Smart QR Payment Station
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 42
routerMode: hash
---

<div class="translate-x--10">

<h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
  Smart QR Payment Station
</h1>

<div class="text-xl opacity-90 mt-2">
  Trạm thanh toán QR VietQR (PayOS) — chi phí thấp cho quán nhỏ
</div>

<div class="mt-6 flex flex-col gap-2">
  <div class="text-sm opacity-70">ESP32 đa nhân · OLED SH1106 · MAX98357A I2S · Wi-Fi LAN</div>
</div>

<div class="mt-8 flex items-center gap-4">
  <div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg px-4 py-2">
    <span class="text-green-400 font-bold">Group 3</span>
  </div>
</div>

</div>

<!--
"Em trình bày một trạm thanh toán QR đặt ngay tại quầy quán nhỏ — khách quét mã, máy tự đọc to số tiền khi giao dịch xong. Đây là một hệ thống nhúng chạy trên ESP32, kết nối VietQR qua PayOS."
-->

---
class: py-8
glowSeed: 58
---

# Vấn Đề & Giải Pháp

<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3">
    <div class="i-carbon:warning-alt text-red-300 text-2xl" />
    <span class="font-bold text-lg">Vấn Đề</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400 text-sm" />
      <span>POS thương mại đắt đỏ (vài triệu/máy), cồng kềnh</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400 text-sm" />
      <span>Khó tùy biến, phụ thuộc nhà cung cấp</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400 text-sm" />
      <span>Thu ngân vẫn phải ngó điện thoại để check bill</span>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-2xl" />
    <span class="font-bold text-lg">Giải Pháp</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark text-green-400 text-sm" />
      <span>Thiết bị nhúng để bàn, dưới vài trăm nghìn đồng</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark text-green-400 text-sm" />
      <span>Tự hiển thị mã QR, khách quét & chuyển khoản</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark text-green-400 text-sm" />
      <span>Loa tự đọc to số tiền khi thanh toán xong</span>
    </div>
  </div>
</div>

</div>

<div v-click class="mt-5 bg-white/5 border border-white/10 rounded-lg p-3">
  <div class="flex items-center justify-between gap-4 text-xs">
    <div class="flex items-center gap-2">
      <span class="i-carbon:money text-amber-300 text-lg" />
      <span class="font-bold opacity-90">Định lượng "giá rẻ" (BOM ước tính)</span>
    </div>
    <div class="flex items-center gap-3 opacity-90">
      <span>ESP32 ~50k</span><span class="opacity-40">·</span>
      <span>OLED ~40k</span><span class="opacity-40">·</span>
      <span>MAX98357A + loa ~50k</span><span class="opacity-40">·</span>
      <span>Dây cắm/breadboard ~20k</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-green-400 font-bold text-sm">≈ 160.000đ</span>
      <span class="opacity-50">vs</span>
      <span class="text-red-300 font-semibold line-through opacity-80">POS vài triệu</span>
    </div>
  </div>
</div>

<!--
"Vấn đề cốt lõi: POS đắt và cồng kềnh, thu ngân vẫn phải nhìn điện thoại. Giải pháp là một thiết bị nhúng giá chỉ khoảng 160 nghìn — rẻ hơn POS hàng chục lần — tự hiển thị QR và đọc to số tiền. Toàn bộ tiền chạy thật qua VietQR của PayOS."
-->

---
class: py-8
glowSeed: 74
---

# Tổng Quan Kiến Trúc — Block Diagram

<div class="flex flex-col items-center justify-center mt-2">
  <ZoomableImage src="/iot/image/blockDiagram.jpg" alt="Block Diagram" class="max-h-[470px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-xs italic opacity-60 mt-2 text-center">Sơ đồ tổng quan: ESP32 tại biên ↔ FastAPI Backend ↔ PayOS (Internet)</div>
</div>

<!--
"Đây là bức tranh tổng thể. ESP32 ở biên chỉ lo hiển thị và âm thanh; việc tạo QR và xác nhận tiền nằm ở backend và PayOS. Luồng dữ liệu đi một chiều rõ ràng qua Wi-Fi LAN và Internet."
-->

---
class: py-8
glowSeed: 90
---

# Các Thành Phần Hệ Thống

<div class="text-sm opacity-85 mb-4">
  Thiết kế <strong class="text-green-300">edge-centric</strong>: xử lý thời gian thực tại biên (ESP32), xác thực giao dịch ở trung tâm (Backend + PayOS).
</div>

<div class="grid grid-cols-2 gap-4 text-xs">

<div class="border-l-4 border-blue-500 pl-4">
  <div class="font-bold text-blue-300 text-sm mb-1">ESP32 — Thiết bị biên (Edge)</div>
  <p class="opacity-80">Điều khiển OLED vẽ QR + loa đọc số tiền, kết nối Wi-Fi LAN, poll server mỗi 1.5s.</p>
</div>

<div class="border-l-4 border-green-500 pl-4">
  <div class="font-bold text-green-300 text-sm mb-1">FastAPI Backend + PayOS</div>
  <p class="opacity-80">"Bộ não": tạo link PayOS, nhận webhook, lưu đơn (SQLite), phục vụ API cho ESP32 + trang <code>/tv</code>.</p>
</div>

<div class="border-l-4 border-purple-500 pl-4">
  <div class="font-bold text-purple-300 text-sm mb-1">Cashier App (Streamlit)</div>
  <p class="opacity-80">Quầy thu ngân: chọn món / nhập tiền → tạo đơn. Giao diện tinh gọn, chạy trên PC.</p>
</div>

<div class="border-l-4 border-amber-500 pl-4">
  <div class="font-bold text-amber-300 text-sm mb-1">Trang TV <code>/tv</code></div>
  <p class="opacity-80">Màn hình chiếu danh sách đơn + số thứ tự (kiểu quán cafe), tự refresh 2s cho khách theo dõi.</p>
</div>

</div>

<!--
"Bốn thành phần chính: ESP32 ở biên, backend là bộ não, Streamlit cho thu ngân, và trang /tv cho khách xem số thứ tự. Thiết kế edge-centric nghĩa là phần nhạy thời gian — hiển thị và âm thanh — nằm ngay tại quầy."
-->

---
class: py-8
glowSeed: 106
---

# Sơ Đồ Đấu Nối Phần Cứng — Wokwi

<div class="flex flex-col items-center justify-center mt-2">
  <ZoomableImage src="/iot/image/schema%20wokwi.jpg" alt="Schematic" class="max-h-[470px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-xs italic opacity-60 mt-2 text-center">Sơ đồ đấu nối thực tế: OLED SH1106 (I2C) + MAX98357A + loa (I2S) trên ESP32</div>
</div>

<!--
"Phần cứng cố tình tối giản — chỉ 2 ngoại vi. Mọi thứ đấu qua 2 bus: I2C cho màn hình và I2S cho âm thanh."
-->

---
class: py-8
glowSeed: 122
---

# Bảng Đấu Nối Chân (GPIO)

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <table class="w-full border-collapse border border-white/10 text-xs">
    <thead>
      <tr class="bg-white/10">
        <th class="border border-white/10 p-1.5">Ngoại vi</th>
        <th class="border border-white/10 p-1.5">Bus</th>
        <th class="border border-white/10 p-1.5">Chân ESP32</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-white/10 p-1.5 font-semibold text-blue-300">OLED SH1106</td>
        <td class="border border-white/10 p-1.5">I2C (0x3C)</td>
        <td class="border border-white/10 p-1.5">SDA (21), SCL (22)</td>
      </tr>
      <tr>
        <td class="border border-white/10 p-1.5 font-semibold text-purple-300">MAX98357A</td>
        <td class="border border-white/10 p-1.5">I2S</td>
        <td class="border border-white/10 p-1.5">DIN (25), BCLK (26), LRC (27)</td>
      </tr>
      <tr>
        <td class="border border-white/10 p-1.5 font-semibold text-amber-300">Loa 3W</td>
        <td class="border border-white/10 p-1.5">—</td>
        <td class="border border-white/10 p-1.5">SPK+ / SPK−</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="text-xs flex flex-col gap-2">
  <div class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-blue-300">I2C — OLED</span>
    <p class="opacity-80 mt-1">Chỉ 2 dây (SDA/SCL), tiết kiệm GPIO để vẽ mã QR 64px.</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-purple-300">I2S — Âm thanh số</span>
    <p class="opacity-80 mt-1">DAC MAX98357A cho phép <strong>ghép âm động</strong> đọc số tiền bất kỳ — DFPlayer không làm được.</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-amber-300">⚠️ Lưu ý phần cứng</span>
    <p class="opacity-80 mt-1">Chân <strong>SD để trống</strong> (nối GND → tắt amp, mất tiếng). <strong>GND chung</strong> bắt buộc. GAIN→GND = 9dB.</p>
  </div>
</div>

</div>

<!--
"OLED đi I2C để gọn dây, loa đi I2S vì cần tổng hợp câu đọc số tiền. Lưu ý chân SD phải để trống — đây là cái bẫy hay gặp: nối nhầm xuống GND là mất tiếng."
-->

---
class: py-8
glowSeed: 138
---

# Firmware Flowchart

<div class="grid grid-cols-5 gap-5 mt-2 items-center">

<div class="col-span-2 flex justify-center">
  <ZoomableImage src="/iot/image/flowchart.jpg" alt="Flowchart" class="max-h-[440px] w-auto border border-white/10 rounded-lg shadow-lg" />
</div>

<div class="col-span-3 flex flex-col gap-2 text-xs">
  <div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-3">
    <span class="font-bold text-green-400">1–3. Khởi tạo & Standby</span>
    <p class="opacity-80 mt-0.5">Mount <strong>LittleFS</strong>, khởi tạo I2S + I2C, tạo mutex/queue. Wi-Fi kết nối ở <strong>nền</strong>. OLED hiện "Sẵn sàng".</p>
  </div>
  <div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-lg p-3">
    <span class="font-bold text-blue-400">4–5. Nhận đơn & Hiện QR</span>
    <p class="opacity-80 mt-0.5">Poll <code class="text-green-300">GET /api/device/current</code> (1.5s). Có đơn PENDING → vẽ QR <strong>zoom x2</strong>, kèm số thứ tự & số tiền.</p>
  </div>
  <div class="border-2 border-solid border-purple-800 bg-purple-800/15 rounded-lg p-3">
    <span class="font-bold text-purple-400">6–8. Xác nhận & Loa báo</span>
    <p class="opacity-80 mt-0.5">Khách quét → Webhook → ESP32 nhận PAID qua <strong>queue</strong> → loa đọc tiền & OLED "THÀNH CÔNG" ≥4s → về standby.</p>
  </div>
  <div class="bg-white/5 border border-white/10 rounded p-2 flex items-center gap-2">
    <div class="i-carbon:warning text-amber-300 text-sm shrink-0" />
    <span><strong>Nhánh lỗi:</strong> mất Wi-Fi → NetworkTask tự reconnect ngầm; audio/UI không giật.</span>
  </div>
</div>

</div>

<!--
"Vòng đời một đơn rất tuyến tính: tạo đơn → hiện QR → khách thanh toán → máy đọc tiền → reset. Wi-Fi kết nối ở nền ngay từ đầu nên bật nguồn là sẵn sàng. Điểm then chốt: đọc loa và poll mạng chạy song song nên không bao giờ giật."
-->

---
class: py-8
glowSeed: 170
---

# Dual-Core — Trước & Sau

<div class="grid grid-cols-2 gap-6 mt-4 text-xs">

<div class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-red-300">
    <div class="i-carbon:warning text-2xl" />
    <span class="font-bold text-base">Trước — vòng loop đơn nhân</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90">
    <div>• <code>audio.loop()</code> phải gọi liên tục (vài ms/lần) để bơm buffer I2S.</div>
    <div>• Nhưng <code>HTTP GET</code> <strong>chặn tới 4 giây</strong> trong cùng vòng loop.</div>
    <div>• ⇒ Khi Wi-Fi chập chờn/server chậm: <strong>âm thanh bị rè/giật</strong>, <code>setup()</code> treo ~20s chờ mạng.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-green-300">
    <div class="i-carbon:checkmark-filled text-2xl" />
    <span class="font-bold text-base">Sau — tách mạng sang Core 0</span>
  </div>
  <div class="flex flex-col gap-2 opacity-90">
    <div>• <strong>Core 0 (NetworkTask):</strong> Wi-Fi + HTTP GET + parse JSON.</div>
    <div>• <strong>Core 1 (loop):</strong> audio + render OLED — real-time.</div>
    <div>• ⇒ Network blocking chỉ kẹt Core 0; <strong>câu đọc số tiền không bao giờ bị gián đoạn</strong>.</div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-xs italic opacity-80">
  Đồng bộ 2 nhân qua <strong class="text-green-300">Mutex</strong> (đơn hàng) · <strong class="text-blue-300">Queue</strong> (sự kiện PAID) · <strong class="text-purple-300">volatile bool</strong> (Wi-Fi) — chi tiết ở slide kế.
</div>

<!--
"Đây là điểm kỹ thuật chính. Ban đầu chạy một vòng loop đơn nhân, âm thanh bị rè mỗi khi mạng chậm. Nhóm tách hẳn mạng sang Core 0, audio và giao diện ở Core 1."
-->

---
class: py-8
glowSeed: 186
---

# Kiến Trúc Dual-Core

<div class="flex flex-col items-center justify-center mt-2">
  <ZoomableImage src="/iot/image/dual_core_architecture.jpg" alt="Dual Core Task Allocation" class="max-h-[460px] w-auto border border-white/10 rounded-lg shadow-lg" />
  <div class="text-xs italic opacity-60 mt-2 text-center">NetworkTask (Core 0) cách ly khỏi Audio/UI (Core 1) qua vùng dữ liệu chia sẻ sync_state</div>
</div>

<!--
"Mỗi peripheral chỉ do một task sở hữu: Wi-Fi/HTTP ở Core 0, I2S/I2C/LittleFS ở Core 1. Chỉ dữ liệu chia sẻ mới cần đồng bộ."
-->

---
class: py-8
glowSeed: 202
---

# Đồng Bộ Dữ Liệu Giữa 2 Nhân (FreeRTOS)

<div class="mt-3 text-sm opacity-85">
  Nguyên tắc: mỗi ngoại vi chỉ do <strong>một task</strong> sở hữu; chỉ <strong>dữ liệu chia sẻ</strong> mới cần đồng bộ.
</div>

<div class="grid grid-cols-3 gap-4 mt-4 text-xs">

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-green-300">
    <div class="i-carbon:lock text-xl" />
    <span class="font-bold">Mutex</span>
  </div>
  <div class="font-mono text-[10px] opacity-80 mb-2">g_current_mutex → {qr_code, amount, queue_no}</div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• Bảo vệ đơn hàng hiện tại giữa NetworkTask (ghi) & UI (đọc).</div>
    <div>• <strong>Vì sao mutex:</strong> chuỗi <code>String</code> QR copy <strong>không nguyên tử</strong> → 2 nhân đè nhau gây hỏng bộ nhớ.</div>
    <div>• Giữ khóa <strong>cực ngắn</strong>: copy ra biến cục bộ rồi thả ngay, render OLED làm ngoài khóa.</div>
  </div>
</div>

<div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-blue-300">
    <div class="i-carbon:list text-xl" />
    <span class="font-bold">FreeRTOS Queue</span>
  </div>
  <div class="font-mono text-[10px] opacity-80 mb-2">g_paid_queue (len = 8)</div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• Truyền sự kiện "đã thanh toán" từ Core 0 sang Core 1.</div>
    <div>• <strong>Vì sao queue:</strong> sự kiện "1 lần", tự thread-safe & tự xếp hàng — nếu loa đang đọc, event nằm chờ, không mất.</div>
    <div>• <code>xQueueSend</code> / <code>xQueueReceive</code>, timeout nhỏ.</div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-purple-300">
    <div class="i-carbon:radio-button-checked text-xl" />
    <span class="font-bold">volatile bool</span>
  </div>
  <div class="font-mono text-[10px] opacity-80 mb-2">g_wifi_connected</div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• Trạng thái mạng: NetworkTask ghi, UI đọc.</div>
    <div>• <strong>Vì sao volatile:</strong> kiểu nguyên thủy <code>bool</code> đọc/ghi <strong>atomic</strong> trên ESP32 → không cần khóa.</div>
    <div>• UI dùng để hiện "Đang kết nối..." vs "Sẵn sàng".</div>
  </div>
</div>

</div>

<div class="mt-4 text-[11px] italic opacity-70 text-center">
  Ba cơ chế khác nhau cho ba kiểu dữ liệu — chọn đúng công cụ thay vì dùng volatile cho mọi thứ.
</div>

<!--
"Ba cơ chế đồng bộ phục vụ ba kiểu dữ liệu khác nhau. Điểm quan trọng: chuỗi String mã QR không copy nguyên tử được nên bắt buộc dùng mutex — không thể dùng volatile. Queue cho sự kiện 1 lần vì nó tự xếp hàng an toàn. Trạng thái Wi-Fi chỉ là bool, atomic, nên volatile là đủ."
-->

---
class: py-8
glowSeed: 210
---

# Xử Lý Mạng — JSON Thủ Công & Chiến Lược Polling

<div class="grid grid-cols-2 gap-6 mt-4 text-xs">

<div class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-blue-300">
    <div class="i-carbon:code text-xl" />
    <span class="font-bold text-sm">Parse JSON thủ công</span>
  </div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• <strong>Không dùng ArduinoJson</strong> → tiết kiệm stack/flash cho NetworkTask.</div>
    <div>• Dữ liệu backend cố định key: <code>has_order</code>, <code>qr_code</code>, <code>amount</code>, <code>queue_no</code>, <code>paid</code>.</div>
    <div>• Helper tối giản tự viết: <code class="text-green-300">json_str / json_num / json_bool</code>.</div>
    <div>• NetworkTask stack chỉ 10KB → JSON rời nhẹ hơn thư viện nặng.</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-green-300">
    <div class="i-carbon:renew text-xl" />
    <span class="font-bold text-sm">Chiến lược polling</span>
  </div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• 2 endpoint: <code class="text-green-300">/api/device/current</code> + <code class="text-green-300">/paid-event</code>.</div>
    <div>• Poll <strong>paid-event trước</strong> (ưu tiên phản hồi thanh toán).</div>
    <div>• Chu kỳ <strong>1.5s</strong> — đủ realtime cho quầy, không ngập API.</div>
    <div>• HTTP timeout <strong>3s</strong> (giảm từ 4s), không block vì đã tách Core 0.</div>
  </div>
</div>

</div>

<div class="mt-4 bg-white/5 border border-white/10 rounded-lg p-3 text-xs flex items-center gap-3">
  <div class="i-carbon:help text-amber-300 text-lg shrink-0" />
  <div><strong>Vì sao poll, không push/MQTT?</strong> ESP32 trong LAN không có IP công khai → server khó gọi ngược vào. Poll 1.5s đủ nhanh cho quầy bán hàng, code đơn giản, ít điểm lỗi.</div>
</div>

<!--
"NetworkTask tự parse JSON bằng tay thay vì kéo thư viện nặng, vì stack chỉ có 10KB. Hai endpoint được poll xen kẽ, ưu tiên paid-event để phản hồi thanh toán nhanh nhất. ESP32 trong LAN nên poll đơn giản hơn là mở socket cho server push vào."
-->

---
class: py-8
glowSeed: 215
---

# Quản Lý Bộ Nhớ Flash & LittleFS

<div class="grid grid-cols-2 gap-6 mt-4 text-xs">

<div class="flex flex-col gap-3">
  <div>
    <div class="font-bold text-blue-300 text-sm mb-2">Phân vùng Flash 4MB <span class="opacity-60 font-normal">(partitions.csv)</span></div>
    <div class="flex h-9 w-full rounded-lg overflow-hidden border border-white/10 text-[11px] font-semibold">
      <div class="bg-blue-600/70 flex items-center justify-center" style="width:45%">App ~1.75MB</div>
      <div class="bg-green-600/70 flex items-center justify-center" style="width:55%">LittleFS ~2.19MB</div>
    </div>
    <div class="text-[10px] opacity-60 mt-1">App: code firmware · LittleFS: chứa file MP3 đọc số tiền</div>
  </div>
  <div class="border-2 border-solid border-amber-800 bg-amber-800/15 rounded-lg p-3">
    <div class="font-bold text-amber-300 text-sm mb-1">Nạp 2 bước (khác nhau)</div>
    <div class="opacity-90">
      1. <code class="text-green-300">pio run -t uploadfs</code> → đóng gói <code>data/</code> (MP3) vào LittleFS.<br/>
      2. <code class="text-green-300">pio run -t upload</code> → nạp code firmware.
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-green-300">
    <div class="i-carbon:save text-xl" />
    <span class="font-bold text-sm">Vì sao LittleFS (không SPIFFS)?</span>
  </div>
  <div class="flex flex-col gap-1.5 opacity-90">
    <div>• <strong>Power-loss safe</strong>: an toàn khi rớt nguồn giữa lần ghi.</div>
    <div>• <strong>Wear leveling</strong>: phân bổ đều → flash sống lâu hơn.</div>
    <div>• Hỗ trợ directory, <code>LittleFS.exists()</code> kiểm tra file trước khi dùng.</div>
    <div>• Chứa ~14 file MP3 nhỏ (mot..nghin_dong), mount ngay lúc <code>setup()</code>.</div>
  </div>
</div>

</div>

<!--
"Flash 4MB chia hai: phần code và phần LittleFS chứa file MP3. Nhóm chọn LittleFS thay vì SPIFFS vì nó an toàn khi rớt nguồn và có wear leveling. Hai thao tác nạp tách biệt: uploadfs cho âm thanh, upload cho code."
-->

---
class: py-8
glowSeed: 218
---

# Điểm Kỹ Thuật 1 — Tối Ưu QR Cho OLED 64px

<div class="grid grid-cols-5 gap-5 mt-4 items-start">

<div class="col-span-3 flex flex-col gap-2 text-xs">
  <div v-click class="flex items-start gap-2 bg-white/5 border border-white/10 rounded p-2.5">
    <span class="i-carbon:number-1 text-blue-400 text-lg shrink-0" />
    <span><strong>Vấn đề:</strong> chuỗi VietQR thật dài hàng trăm ký tự → QR quá dày, OLED 64px không quét được.</span>
  </div>
  <div v-click class="flex items-start gap-2 bg-white/5 border border-white/10 rounded p-2.5">
    <span class="i-carbon:number-2 text-blue-400 text-lg shrink-0" />
    <span>ESP32 chỉ mã hóa <strong>link rút gọn</strong> <code class="text-green-300">https://host/q/{queue_no}</code> — vài ký tự.</span>
  </div>
  <div v-click class="flex items-start gap-2 bg-white/5 border border-white/10 rounded p-2.5">
    <span class="i-carbon:number-3 text-blue-400 text-lg shrink-0" />
    <span><strong>Viết hoa</strong> toàn chuỗi → kích hoạt <strong>Alphanumeric Mode</strong> (ít bit/ký tự hơn Numeric).</span>
  </div>
  <div v-click class="flex items-start gap-2 bg-white/5 border border-white/10 rounded p-2.5">
    <span class="i-carbon:number-4 text-blue-400 text-lg shrink-0" />
    <span>Backend <code class="text-green-300">/q/{no}</code> → <strong>HTTP 302 redirect</strong> về checkout_url thật của PayOS. (Hỗ trợ cả <code>/q/</code> & <code>/Q/</code> vì ESP32 tự viết hoa.)</span>
  </div>
</div>

<div class="col-span-2 flex flex-col gap-3">
  <div v-click class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-4 text-center">
    <div class="text-xs opacity-70">Kết quả nén</div>
    <div class="text-2xl font-extrabold text-green-400 my-1">Version 3</div>
    <div class="text-sm opacity-90">29 × 29 ô module</div>
  </div>
  <div v-click class="border-2 border-solid border-blue-800 bg-blue-800/15 rounded-lg p-4 text-center">
    <div class="text-xs opacity-70">Hiển thị trên OLED</div>
    <div class="text-2xl font-extrabold text-blue-400 my-1">scale ×2</div>
    <div class="text-sm opacity-90">58 × 58 px trên màn 64px → nét, quét nhạy</div>
  </div>
  <div class="text-[10px] opacity-60 text-center italic">Thư viện: <code>ricmoo/QRCode</code> (sinh QR nhúng)</div>
</div>

</div>

<!--
"Mã VietQR thật rất dài, nhét thẳng vào OLED 64px thì QR đặc như bìa, quét không nổi. Giải pháp 4 bước: rút gọn link, viết hoa để bật alphanumeric mode, render scale x2. Kết quả chỉ còn 29 ô — quét cực nhạy. Backend làm nhiệm vụ redirect về PayOS thật."
-->

---
class: py-8
glowSeed: 234
---

# Điểm Kỹ Thuật 2 — Engine Đọc Số Tiền Tiếng Việt

<div class="grid grid-cols-5 gap-5 mt-4 items-start">

<div class="col-span-3 flex flex-col gap-2 text-xs">
  <div v-click class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-purple-300">Ý tưởng:</span> Không thu sẵn từng số tiền → thu từng <strong>"từ"</strong> thành file MP3 ngắn, rồi <strong>ghép động</strong> (audio stitching).
  </div>
  <div v-click class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-purple-300">Bộ từ điển (LittleFS):</span>
    <span class="font-mono text-[10px]"><code>da_nhan_duoc</code> · <code>mot..chin</code> · <code>muoi</code> / <code>muoi_10</code> · <code>tram</code> · <code>nghin_dong</code></span>
  </div>
  <div v-click class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-purple-300">Thuật toán <code>audio_announce_amount()</code>:</span>
    <div class="mt-1 opacity-90">
      1. Tách tiền → <code>trieu / nghin / le</code><br/>
      2. <code>read_below_1000()</code> đọc từng nhóm (tram/chuc/donvi)<br/>
      3. Xử lý biến âm: "mười <strong>mốt</strong>" vs "hai <strong>mươi</strong>", "<strong>lăm/lẻ</strong>"<br/>
      4. Xếp token; phát lần lượt — xong 1 file (<code>audio_eof_mp3</code>) mới phát kế
    </div>
  </div>
</div>

<div class="col-span-2 flex flex-col gap-3 text-xs">
  <div v-click class="border-2 border-solid border-purple-800 bg-purple-800/15 rounded-lg p-3">
    <div class="font-bold text-purple-300 text-center mb-2">Ví dụ: 11.000đ</div>
    <div class="bg-black/40 rounded p-2.5 font-mono text-[10px] leading-relaxed">
      11000 =<br/>
      &nbsp;&nbsp;da_nhan_duoc<br/>
      + muoi_10<br/>
      + mot<br/>
      + nghin_dong
    </div>
    <div class="text-center text-[11px] italic opacity-80 mt-2">→ "đã nhận được mười một nghìn đồng"</div>
  </div>
  <div class="bg-white/5 border border-white/10 rounded p-2.5">
    <span class="font-bold text-purple-300">Xuất âm:</span> giải mã MP3 từ LittleFS → <strong>I2S DAC</strong> MAX98357A. Thư viện <code>ESP32-audioI2S</code>.
  </div>
</div>

</div>

<!--
"Thay vì thu sẵn hàng nghìn số tiền, nhóm chỉ thu từng từ rồi ghép. Hàm tách tiền theo nhóm triệu/nghìn/lẻ, xử lý đúng biến âm tiếng Việt như mười một hay hai mươi. Mỗi file MP3 phát xong qua callback audio_eof_mp3 mới phát file kế, nên câu nghe liền mạch."
-->

---
class: py-8
glowSeed: 250
---

# Luồng Thanh Toán Real-time (PayOS Webhook)

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="flex flex-col gap-2 text-xs">
  <div v-click class="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
    <span class="i-carbon:number-1 text-green-400 text-lg" />
    <span>Thu ngân tạo đơn → Backend gọi <code class="text-green-300">POST /v2/payment-requests</code> → PayOS trả VietQR.</span>
  </div>
  <div v-click class="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
    <span class="i-carbon:number-2 text-green-400 text-lg" />
    <span>Lưu đơn SQLite (status=<strong>PENDING</strong>), ESP32 poll <code class="text-green-300">/api/device/current</code> (1.5s).</span>
  </div>
  <div v-click class="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
    <span class="i-carbon:number-3 text-green-400 text-lg" />
    <span>OLED vẽ QR → khách quét & chuyển khoản qua app bank.</span>
  </div>
  <div v-click class="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
    <span class="i-carbon:number-4 text-green-400 text-lg" />
    <span>PayOS đẩy <strong>Webhook</strong> → Backend <strong>verify chữ ký</strong> HMAC → mark PAID.</span>
  </div>
  <div v-click class="flex items-center gap-2 bg-white/5 border border-white/10 rounded p-2">
    <span class="i-carbon:number-5 text-green-400 text-lg" />
    <span>ESP32 poll <code class="text-green-300">/api/device/paid-event</code> → loa đọc tiền + OLED "THÀNH CÔNG".</span>
  </div>
</div>

<div class="flex flex-col gap-3 text-xs">
  <div v-click class="border-l-4 border-green-500 pl-3">
    <span class="font-bold text-green-300">Cơ chế "1 lần" chống đọc lặp</span>
    <p class="opacity-80">Cột <code>paid_event_pending</code> trong SQLite: trả về cho ESP32 đúng 1 lần rồi reset cờ → loa không đọc lặp lại.</p>
  </div>
  <div v-click class="border-l-4 border-blue-500 pl-3">
    <span class="font-bold text-blue-300">Bảo mật webhook</span>
    <p class="opacity-80">Mọi webhook đều verify chữ ký bằng checksum key → kẻ giả mạo không thể đánh dấu PAID.</p>
  </div>
  <div v-click class="border-l-4 border-purple-500 pl-3">
    <span class="font-bold text-purple-300">Tại sao ESP32 poll, server webhook?</span>
    <p class="opacity-80">ESP32 trong LAN không có IP công khai → poll đơn giản. Backend có URL công khai → nhận webhook realtime.</p>
  </div>
</div>

</div>

<!--
"Luồng tiền đi qua PayOS thật. Điểm mấu chốt bảo mật: webhook luôn verify chữ ký HMAC. Cơ chế paid_event_pending đảm bảo loa chỉ đọc đúng một lần cho mỗi giao dịch."
-->

---
class: py-8
glowSeed: 255
---

# Mô Hình Dữ Liệu & Trạng Thái Đơn Hàng

<div class="grid grid-cols-2 gap-6 mt-4 text-xs">

<div class="border-2 border-solid border-green-800 bg-green-800/15 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2 text-green-300">
    <div class="i-carbon:data-base text-xl" />
    <span class="font-bold text-sm">Lưu trữ SQLite (orders.db)</span>
  </div>
  <div class="opacity-90">Bền vững qua restart. Bảng <code>orders</code>:</div>
  <div class="font-mono text-[10px] bg-black/30 rounded p-2 mt-1.5 leading-relaxed">
    order_code (PK) · queue_no · amount<br/>
    description · items (JSON)<br/>
    qr_code · checkout_url · payment_link_id<br/>
    status · created_at · paid_at<br/>
    <span class="text-amber-300">paid_event_pending</span>
  </div>
  <div class="opacity-90 mt-2">• <code>queue_no</code>: đếm đơn <strong>trong ngày</strong>, reset mỗi ngày.</div>
</div>

<div class="flex flex-col gap-3">
  <div class="font-bold text-blue-300 text-sm">State machine</div>
  <div class="bg-white/5 border border-white/10 rounded-lg p-3">
    <div class="flex items-center gap-2 text-[11px]">
      <span class="bg-amber-700/40 border border-amber-600 rounded px-2 py-1 font-bold text-amber-200">PENDING</span>
      <div class="i-carbon:arrow-right text-green-400" />
      <span class="bg-green-700/40 border border-green-600 rounded px-2 py-1 font-bold text-green-200">PAID</span>
    </div>
    <div class="text-[10px] opacity-70 mt-1.5">webhook verify → <code>status=PAID</code>, cờ <code>paid_event_pending=1</code></div>
  </div>
  <div class="bg-white/5 border border-white/10 rounded-lg p-3">
    <div class="flex items-center gap-2 text-[11px]">
      <span class="bg-amber-700/40 border border-amber-600 rounded px-2 py-1 font-bold text-amber-200">PENDING</span>
      <div class="i-carbon:arrow-right text-red-400" />
      <span class="bg-red-700/40 border border-red-600 rounded px-2 py-1 font-bold text-red-200">CANCELLED</span>
    </div>
    <div class="text-[10px] opacity-70 mt-1.5">thu ngân hủy → PayOS hủy link + <code>status=CANCELLED</code></div>
  </div>
  <div class="text-[10px] opacity-80 italic">Cờ <code class="text-amber-300">paid_event_pending</code>: backend trả cho ESP32 đúng <strong>1 lần</strong> rồi reset → loa không đọc lặp.</div>
</div>

</div>

<!--
"Mọi đơn lưu trong SQLite, bền qua restart. Trạng thái đi theo máy trạng thái: PENDING khi mới tạo, PAID khi PayOS xác nhận, CANCELLED nếu hủy. Cờ paid_event_pending là chìa khóa để loa chỉ đọc đúng một lần."
-->

---
class: py-8
glowSeed: 260
---

# Bảo Mật Hệ Thống

<div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-4 text-xs">

<div class="border-l-4 border-green-500 pl-4">
  <div class="flex items-center gap-2 font-bold text-green-300 text-sm mb-1">
    <div class="i-carbon:locked text-lg" /> Verify chữ ký Webhook (HMAC)
  </div>
  <p class="opacity-85">Mọi webhook PayOS đều verify chữ ký bằng <code>checksum key</code>. Sai → trả <code>400</code> → kẻ giả mạo không thể đánh dấu PAID. Dùng thuật toán <code>HMAC_SHA256</code> chuẩn từ PayOS SDK.</p>
</div>

<div class="border-l-4 border-blue-500 pl-4">
  <div class="flex items-center gap-2 font-bold text-blue-300 text-sm mb-1">
    <div class="i-carbon:user-authentication text-lg" /> API_TOKEN bảo vệ endpoint ghi
  </div>
  <p class="opacity-85">Tạo/hủy đơn yêu cầu header <code>x-api-token</code> khi đặt <code>API_TOKEN</code>. LAN demo có thể tắt; deploy công khai → bắt buộc bật.</p>
</div>

<div class="border-l-4 border-amber-500 pl-4">
  <div class="flex items-center gap-2 font-bold text-amber-300 text-sm mb-1">
    <div class="i-carbon:password text-lg" /> Quản lý key (.env)
  </div>
  <p class="opacity-85"><code>PAYOS_CLIENT_ID / API_KEY / CHECKSUM_KEY</code> nằm trong <code>.env</code>, <strong>gitignored</strong>, không bao giờ commit hay chia sẻ.</p>
</div>

<div class="border-l-4 border-purple-500 pl-4">
  <div class="flex items-center gap-2 font-bold text-purple-300 text-sm mb-1">
    <div class="i-carbon:cloud-services text-lg" /> Triển khai công khai
  </div>
  <p class="opacity-85">LAN: không cần auth. Công khai (VPS / Cloudflare Tunnel) → đặt <code>API_TOKEN</code> + đặt backend sau <strong>HTTPS</strong> (reverse proxy).</p>
</div>

</div>

<!--
"Bốn lớp bảo mật: verify chữ ký webhook để chống giả PAID, token bảo vệ API ghi, key giấu trong env, và khi deploy công khai thì bật token lẫn HTTPS. Trong LAN demo thì gọn nhẹ, khi ra Internet thì chặt chẽ."
-->

---
class: py-8
glowSeed: 266
---

# Quyết Định Thiết Kế & Lý Do

<div class="mt-2 text-xs">

<table class="w-full border-collapse border border-white/10">
  <thead>
    <tr class="bg-white/10 text-left">
      <th class="border border-white/10 p-2">Khía cạnh</th>
      <th class="border border-white/10 p-2">Các lựa chọn</th>
      <th class="border border-white/10 p-2 bg-green-950/40 text-green-300">Quyết định & lý do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-white/10 p-2 font-bold">Vi điều khiển</td>
      <td class="border border-white/10 p-2 opacity-80">Raspberry Pi / Arduino Uno</td>
      <td class="border border-white/10 p-2 bg-green-950/20 text-green-400 font-semibold">ESP32: Rẻ, ít tốn điện, tích hợp Wi-Fi, hỗ trợ FreeRTOS đa nhân.</td>
    </tr>
    <tr>
      <td class="border border-white/10 p-2 font-bold">ESP ↔ Server</td>
      <td class="border border-white/10 p-2 opacity-80">Server Push / MQTT</td>
      <td class="border border-white/10 p-2 bg-green-950/20 text-green-400 font-semibold">HTTP Polling LAN: ESP32 không có IP công khai, đơn giản, tin cậy.</td>
    </tr>
    <tr>
      <td class="border border-white/10 p-2 font-bold">Báo thanh toán</td>
      <td class="border border-white/10 p-2 opacity-80">Poll PayOS liên tục / Xác nhận tay</td>
      <td class="border border-white/10 p-2 bg-green-950/20 text-green-400 font-semibold">Webhook PayOS: Phản hồi nhanh nhất, tối ưu số cuộc gọi API.</td>
    </tr>
    <tr>
      <td class="border border-white/10 p-2 font-bold">Âm thanh</td>
      <td class="border border-white/10 p-2 opacity-80">DFPlayer Mini / Buzzer đơn âm</td>
      <td class="border border-white/10 p-2 bg-green-950/20 text-green-400 font-semibold">I2S DAC + Loa 3W: Ghép âm thanh động đọc số tiền bất kỳ, chất lượng cao.</td>
    </tr>
    <tr>
      <td class="border border-white/10 p-2 font-bold">Hiển thị</td>
      <td class="border border-white/10 p-2 opacity-80">Màn cảm ứng / Chỉ web</td>
      <td class="border border-white/10 p-2 bg-green-950/20 text-green-400 font-semibold">OLED SH1106 + trang <code>/tv</code>: Rẻ, vừa đủ cho khách quét & theo dõi hàng đợi.</td>
    </tr>
  </tbody>
</table>

</div>

<!--
"Mỗi quyết định thiết kế đều có lý do rõ ràng dựa trên chi phí, ràng buộc mạng LAN và nhu cầu đọc số tiền động — không chọn công nghệ cho có."
-->

---
class: py-8
glowSeed: 282
---

# Hệ Thống Vận Hành & Thông Số

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-blue-300">
    <div class="i-carbon:play-filled-alt text-2xl" />
    <span class="font-bold text-lg">Kịch Bản Vận Hành</span>
  </div>
  <div class="flex flex-col gap-2 text-xs">
    <div class="bg-black/30 rounded p-2">
      <span class="font-bold text-amber-300">Bước 1:</span> Thu ngân nhập số tiền (Streamlit) → Server tạo link thanh toán VietQR.
    </div>
    <div class="bg-black/30 rounded p-2">
      <span class="font-bold text-amber-300">Bước 2:</span> ESP32 nhận đơn mới → OLED hiện QR. Khách quét & chuyển khoản qua app bank.
    </div>
    <div class="bg-black/30 rounded p-2">
      <span class="font-bold text-amber-300">Bước 3:</span> PayOS đẩy Webhook → ESP32 lập tức phát loa <em>"đã nhận được [số tiền] đồng"</em> + OLED báo thành công.
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="flex items-center gap-3 mb-3 text-green-300">
    <div class="i-carbon:chip text-2xl" />
    <span class="font-bold text-lg">Thông Số Kỹ Thuật</span>
  </div>
  <div class="grid grid-cols-2 gap-3 text-center">
    <div class="bg-black/30 rounded-lg p-3">
      <div class="text-3xl font-extrabold text-green-400">18.3%</div>
      <div class="text-[11px] opacity-70 mt-1">RAM (59.8 / 327 KB)</div>
    </div>
    <div class="bg-black/30 rounded-lg p-3">
      <div class="text-3xl font-extrabold text-blue-400">63.9%</div>
      <div class="text-[11px] opacity-70 mt-1">Flash (1.17 / 1.83 MB)</div>
    </div>
  </div>
  <div class="mt-3 flex flex-col gap-1 text-[11px] opacity-80">
    <div>• Phân vùng Flash 4MB: app ~1.75MB + LittleFS ~2.19MB chứa file MP3.</div>
    <div>• Dual-core ổn định: loa không giật khi mạng lag, <code>setup()</code> không treo chờ Wi-Fi.</div>
    <div>• Parse JSON thủ công (không ArduinoJson) để tiết kiệm stack NetworkTask.</div>
  </div>
</div>

</div>

<!--
"Hệ thống chạy thật, không phải ý tưởng. RAM mới 18%, Flash 64% — còn rất nhiều dư địa để mở rộng. Dual-core giữ audio mượt kể cả khi mạng chập chờn."
-->

---
layout: center
class: text-center
glowSeed: 298
---

# Cảm Ơn Thầy Cô & Các Bạn!

<div class="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-4">
  Hỏi & Đáp (Q&A)
</div>

<div class="mt-8 flex justify-center gap-4 text-xs">

<div class="border border-white/10 bg-white/5 rounded-lg px-4 py-3 max-w-[200px]">
  <div class="font-bold text-green-400 mb-1">ESP32 vs Raspberry Pi?</div>
  <p class="opacity-70 text-[11px]">ESP32 cực rẻ, tiêu thụ cực ít điện, có Wi-Fi sẵn, đủ đáp ứng trạm thanh toán.</p>
</div>

<div class="border border-white/10 bg-white/5 rounded-lg px-4 py-3 max-w-[200px]">
  <div class="font-bold text-blue-400 mb-1">Tại sao dùng LAN Polling?</div>
  <p class="opacity-70 text-[11px]">Đơn giản, ổn định, tránh việc ESP32 phải NAT ra Internet để nhận Push.</p>
</div>

<div class="border border-white/10 bg-white/5 rounded-lg px-4 py-3 max-w-[200px]">
  <div class="font-bold text-purple-400 mb-1">Mất Wi-Fi thì sao?</div>
  <p class="opacity-70 text-[11px]">Core 0 tự reconnect ngầm. OLED & Loa trên Core 1 không bị đơ giật.</p>
</div>

</div>

<!--
Cảm ơn thầy cô và các bạn. Nhóm sẵn sàng nhận câu hỏi phản biện.
-->
