---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: SmartRoute
exportFilename: SmartRoute-WebDev-Adventure-2026-Chung-Ket
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
---

<div class="translate-y--4">

# SmartRoute

<div class="text-xl opacity-80 mt-2">
Trợ lý di chuyển thông minh -- Dự đoán giao thông & Gợi ý lộ trình tối ưu
</div>

<div class="mt-6 flex justify-center gap-3 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200">
    WebDev Adventure 2026 -- Chung kết
  </div>
  <div class="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
    Team Underrated
  </div>
</div>

<div class="mt-6 grid grid-cols-2 gap-4 max-w-lg mx-auto text-sm opacity-80">
  <div class="rounded-lg bg-white/5 p-3 text-center">
    <div class="font-bold text-blue-300">Nguyễn Ngọc Phúc</div>
    <div class="opacity-75">Backend · AI · DevOps</div>
  </div>
  <div class="rounded-lg bg-white/5 p-3 text-center">
    <div class="font-bold text-emerald-300">Nguyễn Nguyên Anh</div>
    <div class="opacity-75">Frontend · Architecture</div>
  </div>
</div>

</div>

---
class: py-10
---

# Vấn đề

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="rounded-xl border border-red-400/20 bg-red-400/8 p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="i-carbon:warning-alt text-3xl text-red-300" />
    <div class="text-2xl font-bold">TP.HCM: 10 triệu dân, 8 triệu xe</div>
  </div>
  <div class="space-y-3 text-sm opacity-90">
    <div>Ùn tắc thường xuyên giờ cao điểm sáng (7h--9h) và chiều (17h--20h).</div>
    <div>Thiệt hại kinh tế hàng tỷ USD mỗi năm.</div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="i-carbon:idea text-3xl text-amber-300" />
    <div class="text-2xl font-bold">Khoảng trống</div>
  </div>
  <div class="text-sm opacity-90 leading-7">
    Google Maps / Waze chỉ phản ánh <span class="text-white font-bold">hiện trạng</span>.
    Người dùng thiếu công cụ <span class="text-white font-bold">nhìn trước 15--60 phút</span> để chủ động chọn thời điểm xuất phát và lộ trình.
  </div>
</div>

</div>

---
class: py-10
---

# Giải pháp: SmartRoute

<div class="mt-6 grid grid-cols-3 gap-5">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5 text-center">
  <div class="i-carbon:map-boundary text-4xl text-blue-300 mb-3" />
  <div class="font-bold text-lg">Bản đồ giao thông</div>
  <div class="text-sm opacity-75 mt-2">84.000 segments, LOS A--F, viewport loading, TomTom real-time</div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5 text-center">
  <div class="i-carbon:machine-learning-model text-4xl text-emerald-300 mb-3" />
  <div class="font-bold text-lg">AI XGBoost 97,78%</div>
  <div class="text-sm opacity-75 mt-2">23 features, dự báo +15/+30/+60 phút, hybrid với TomTom</div>
</div>

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-5 text-center">
  <div class="i-carbon:route text-4xl text-fuchsia-300 mb-3" />
  <div class="font-bold text-lg">Routing thông minh</div>
  <div class="text-sm opacity-75 mt-2">GraphHopper, phân tích ùn tắc dọc tuyến, gợi ý giờ xuất phát, lộ trình thay thế</div>
</div>

</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="rounded-xl border border-purple-400/20 bg-purple-400/8 p-5 text-center">
  <div class="i-carbon:chat-launch text-4xl text-purple-300 mb-3" />
  <div class="font-bold text-lg">Trợ lý AI Chatbot</div>
  <div class="text-sm opacity-75 mt-2">8 intents tiếng Việt, LLM (Qwen), điều khiển bản đồ qua chat</div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/8 p-5 text-center">
  <div class="i-carbon:data-enrichment text-4xl text-amber-300 mb-3" />
  <div class="font-bold text-lg">Dữ liệu thực</div>
  <div class="text-sm opacity-75 mt-2">33.441 observations từ Sở GTVT TP.HCM, SQLite 4 bảng</div>
</div>

</div>

---
class: py-10
---

# Công nghệ & Kiến trúc

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-cyan-300 text-lg mb-4">Công nghệ chính</div>
  <div class="grid grid-cols-2 gap-2 text-sm">
    <div class="rounded bg-blue-900/30 p-2"><span class="text-blue-300 font-bold">Frontend</span><br/>Next.js 15 · React 19 · TS</div>
    <div class="rounded bg-emerald-900/30 p-2"><span class="text-emerald-300 font-bold">Map</span><br/>MapLibre GL 5</div>
    <div class="rounded bg-purple-900/30 p-2"><span class="text-purple-300 font-bold">Backend</span><br/>FastAPI · Python 3.11+</div>
    <div class="rounded bg-amber-900/30 p-2"><span class="text-amber-300 font-bold">ML</span><br/>XGBoost · scikit-learn</div>
    <div class="rounded bg-cyan-900/30 p-2"><span class="text-cyan-300 font-bold">Database</span><br/>SQLite (4 bảng)</div>
    <div class="rounded bg-fuchsia-900/30 p-2"><span class="text-fuchsia-300 font-bold">Chat</span><br/>OpenRouter (Qwen)</div>
    <div class="rounded bg-orange-900/30 p-2"><span class="text-orange-300 font-bold">Routing</span><br/>GraphHopper API</div>
    <div class="rounded bg-red-900/30 p-2"><span class="text-red-300 font-bold">Real-time</span><br/>TomTom Traffic API</div>
  </div>
</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-emerald-300 text-lg mb-4">Kiến trúc Multi-tier</div>
  <img src="/architecture.png" alt="Architecture" class="w-full rounded-lg" />
</div>

</div>

---
class: py-10
---

# Demo

<div class="mt-2 flex justify-center">
<div style="width:90%;max-height:60vh;overflow:hidden;border-radius:1rem;border:1px solid rgba(255,255,255,0.15);box-shadow:0 25px 50px -12px rgba(0,0,0,0.5)">
<SlidevVideo autoplay controls printPoster="/demo-poster.png" style="width:100%;height:100%;object-fit:contain">
  <source :src="'/demo.mkv'" type="video/x-matroska" />
</SlidevVideo>
</div>
</div>

---
class: py-10
---

# Điểm nổi bật -- Vòng 3

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-300 text-lg mb-3">Đã triển khai hoàn chỉnh</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">XGBoost AI thật</span> -- 97,78% accuracy, 23 features, FastAPI backend riêng</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">TomTom real-time</span> -- Điều chỉnh dự báo bằng dữ liệu giao thông thời gian thực</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">Lộ trình thay thế</span> -- 1--3 alternatives, ranking, trade-off so sánh</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">AI Chatbot</span> -- 8 intents tiếng Việt, LLM enhancement, điều khiển bản đồ</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">SQLite database</span> -- 84k segments, 577k nodes, 4 bảng</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:checkmark-outline text-green-400" /><span><span class="text-white font-bold">Multi-tier architecture</span> -- BFF + FastAPI + External services</span></div>
  </div>
</div>

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-5">
  <div class="font-bold text-cyan-300 text-lg mb-3">Cải tiến từ Vòng 2</div>
  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Thay heuristic simulation bằng <span class="text-white font-bold">XGBoost thật</span></span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Thêm <span class="text-white font-bold">FastAPI backend riêng</span> thay vì chỉ Next.js API routes</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Thêm <span class="text-white font-bold">lộ trình thay thế</span> với ranking engine</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Thêm <span class="text-white font-bold">AI chatbot</span> tiếng Việt + action system</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Thêm <span class="text-white font-bold">TomTom real-time</span> hybrid prediction</span></div>
    <div class="flex items-center gap-2"><div class="i-carbon:arrow-up text-cyan-400" /><span>Nâng cấp từ CSV sang <span class="text-white font-bold">SQLite database</span> (4 bảng)</span></div>
  </div>
</div>

</div>

---
class: py-10
---

# Hướng phát triển AI

<div class="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/8 p-4 text-sm mb-4">
  <span class="text-amber-300 font-bold">Lưu ý:</span> Phiên bản hiện tại là PoC minh chứng ý tưởng. Khi phát triển thực tế, AI sẽ được nâng cấp đáng kể.
</div>

<div class="grid grid-cols-2 gap-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="font-bold text-blue-300 mb-3">Nâng cấp model</div>
  <div class="space-y-2 text-sm">
    <div><span class="text-yellow-300 font-bold">Transformer / LSTM</span> -- Dự báo chuỗi thời gian đa bước, thay thế XGBoost cho long-term forecasting</div>
    <div><span class="text-yellow-300 font-bold">GNN (Graph Neural Network)</span> -- Mô hình hóa road network thành đồ thị, capture phụ thuộc không gian giữa các đoạn đường liền kề</div>
    <div><span class="text-yellow-300 font-bold">Traffic Fusion Engine</span> -- AI kết hợp camera + GPS + report + thời tiết, tự đánh trọng số từng nguồn</div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="font-bold text-emerald-300 mb-3">Edge AI & Camera</div>
  <div class="space-y-2 text-sm">
    <div><span class="text-yellow-300 font-bold">Edge AI camera</span> -- Triển khai tại cổng trường / khu công nghiệp: đếm phương tiện, đo tốc độ TB, phát hiện ùn ứ bất thường. Xử lý at-edge, chỉ gửi thống kê</div>
    <div><span class="text-yellow-300 font-bold">AI Trust Score</span> -- Chấm điểm report cộng đồng dựa trên GPS, lịch sử, xác nhận camera → ``Waze có trách nhiệm''</div>
    <div><span class="text-yellow-300 font-bold">Personal Mobility AI</span> -- Học tuyến quen, nhắc xuất phát, calendar-aware → trợ lý cá nhân thực thụ</div>
  </div>
</div>

</div>

<div class="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
  <div class="font-bold text-cyan-300 mb-2">Chiến lược: AI địa phương (hyperlocal) thay vì đối đầu bản đồ toàn cầu</div>
  <div class="text-sm opacity-85">Google Maps tối ưu navigation toàn cầu. SmartRoute tối ưu cho hành vi di chuyển, dữ liệu địa phương và bài toán giao thông đặc thù Việt Nam -- xe máy, hẻm nhỏ, tan ca, mưa ngập, cổng trường.</div>
</div>

---
class: py-10
---

# Khả năng ứng dụng & Kết quả

<div class="mt-6 grid grid-cols-2 gap-5">

<div class="space-y-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5">
  <div class="text-blue-300 font-bold text-lg mb-2">B2C -- Trợ lý hằng ngày</div>
  <div class="text-sm opacity-85">Google Maps mở khi đi nơi lạ. SmartRoute mở <span class="text-white font-bold">mỗi ngày</span> vì người dùng cần biết khi nào nên đi.</div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5">
  <div class="text-emerald-300 font-bold text-lg mb-2">B2B -- Logistics API</div>
  <div class="text-sm opacity-85">Dashboard điều phối đội xe, ETA correction, risk scoring, cảnh báo khu vực sắp kẹt.</div>
</div>

<div class="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/8 p-5">
  <div class="text-fuchsia-300 font-bold text-lg mb-2">Smart Meet + Partnership</div>
  <div class="text-sm opacity-85">Booking marketplace, ads ngữ cảnh, partnership Foody/GrabFood.</div>
</div>

</div>

<div class="rounded-xl border border-white/10 bg-white/5 p-5">
  <div class="font-bold text-amber-300 text-lg mb-4">Một số metric</div>
  <div class="space-y-3 text-sm">
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>XGBoost accuracy</span>
      <span class="text-emerald-300 font-bold">97,78%</span>
    </div>
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>Road segments</span>
      <span class="text-emerald-300 font-bold">84.000</span>
    </div>
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>Nodes</span>
      <span class="text-emerald-300 font-bold">577.000</span>
    </div>
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>Training data</span>
      <span class="text-emerald-300 font-bold">33.441 observations</span>
    </div>
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>API response</span>
      <span class="text-emerald-300 font-bold">< 200ms</span>
    </div>
    <div class="flex justify-between border-b border-white/10 pb-2">
      <span>Chat intents</span>
      <span class="text-emerald-300 font-bold">8 intents tiếng Việt</span>
    </div>
    <div class="flex justify-between">
      <span>Deploy</span>
      <span class="text-emerald-300 font-bold">Vercel + Render</span>
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Kết luận

<div class="mt-6 max-w-2xl mx-auto text-left space-y-4">

<div class="text-lg opacity-90">
SmartRoute không thay thế Google Maps. SmartRoute bổ sung một lớp <span class="text-cyan-300 font-bold">dự báo giao thông địa phương</span>, giúp người dùng và doanh nghiệp quyết định <span class="text-emerald-300 font-bold">đi lúc nào, đi tuyến nào</span>.
</div>

<div class="text-lg opacity-90">
Phiên bản hiện tại là <span class="text-amber-300 font-bold">PoC minh chứng</span> kiến trúc và trải nghiệm. Hướng phát triển là nâng cấp AI (Transformer, GNN, Edge AI) để tạo <span class="text-fuchsia-300 font-bold">lợi thế cạnh tranh địa phương</span> mà nền tảng toàn cầu khó tối ưu.
</div>

</div>

<div class="mt-10 text-2xl font-bold">
  Questions & Answers
</div>

<div class="mt-4 flex justify-center gap-3 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
    github.com/phucnn-dhl/SmartRoute
  </div>
  <div class="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
    smartroute-poc.vercel.app
  </div>
</div>

---
layout: center
class: text-center
---

# Chúng em cảm ơn mọi người <br> đã theo dõi bài thuyết trình ạ!

<div class="mt-8 flex justify-center gap-3 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200">
    WebDev Adventure 2026
  </div>
  <div class="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
    Team Underrated
  </div>
</div>

<div class="mt-4 text-sm opacity-60">
  SmartRoute -- Trợ lý di chuyển thông minh cho TP. Hồ Chí Minh
</div>
