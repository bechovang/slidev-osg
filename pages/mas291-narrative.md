---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: MAS291 - Statistical Analysis Project (Narrative Flow)
exportFilename: MAS291 - Health Data Analysis - Narrative
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 42
routerMode: hash
---

<div class="translate-x--14">

<h1>
  Statistical Analysis of<br/>Secondary School Health Data
</h1>

<span class="text-xl opacity-80">Phân Tích Thống Kê Kết Quả Khám Sức Khỏe Học Sinh THCS</span>

<div class="mt-8">
  <span class="text-sm opacity-60">MAS291 - Xác Suất Thống Kê | FPT University</span>
</div>

</div>

<div class="mt-4 flex items-center gap-4">
  <div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg px-4 py-2">
    <span class="text-blue-300 font-bold">Nhóm 3</span>
  </div>
  <div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg px-4 py-2">
    <span class="text-purple-300 font-bold">Narrative Flow Version</span>
  </div>
</div>

<div class="mt-12 max-w-xl mx-auto flex flex-wrap justify-center gap-4 text-sm opacity-60 text-center">
  <div>Nguyễn Ngọc Phúc</div>
  <div>•</div>
  <div>Bùi Đồng Vỹ</div>
  <div>•</div>
  <div>Nguyễn Phú</div>
  <div>•</div>
  <div>Đinh Trường</div>
  <div>•</div>
  <div>Nguyễn Thành An</div>
  <div>•</div>
  <div>Nhật Huy</div>
  <div>•</div>
  <div>Phạm An</div>
</div>

---
layout: center
class: text-center
glowSeed: 55
---

# MỤC LỤC

<div class="mt-8 grid grid-cols-2 gap-3 text-left max-w-3xl mx-auto">

<div v-click class="border-2 border-solid border-blue-800/40 bg-blue-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-1 text-blue-300" />
    <span class="font-bold">Giới Thiệu</span>
  </div>
  <div class="text-sm opacity-70">Tại sao cần nghiên cứu này?</div>
</div>

<div v-click class="border-2 border-solid border-green-800/40 bg-green-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-2 text-green-300" />
    <span class="font-bold">Dữ Liệu Nghiên Cứu</span>
  </div>
  <div class="text-sm opacity-70">200 học sinh THCS thị trấn Đu</div>
</div>

<div v-click class="border-2 border-solid border-purple-800/40 bg-purple-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-3 text-purple-300" />
    <span class="font-bold">Thống Kê Mô Tả</span>
  </div>
  <div class="text-sm opacity-70">200 con số → Tóm tắt ý nghĩa</div>
</div>

<div v-click class="border-2 border-solid border-amber-800/40 bg-amber-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-4 text-amber-300" />
    <span class="font-bold">Phân Phối Mẫu 🌉</span>
  </div>
  <div class="text-sm opacity-70">Điểm giao thở: Mẫu → Tổng thể</div>
</div>

<div v-click class="border-2 border-solid border-red-800/40 bg-red-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-5 text-red-300" />
    <span class="font-bold">Ước Lượng</span>
  </div>
  <div class="text-sm opacity-70">Từ mẫu nhỏ → Suy ra tổng thể</div>
</div>

<div v-click class="border-2 border-solid border-cyan-800/40 bg-cyan-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-6 text-cyan-300" />
    <span class="font-bold">Kiểm Định Giả Thuyết</span>
  </div>
  <div class="text-sm opacity-70">Khác biệt thật hay ngẫu nhiên?</div>
</div>

<div v-click class="border-2 border-solid border-pink-800/40 bg-pink-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-7 text-pink-300" />
    <span class="font-bold">Hồi Quy Tuyến Tính</span>
  </div>
  <div class="text-sm opacity-70">Chiều cao → Cân nặng?</div>
</div>

<div v-click class="border-2 border-solid border-lime-800/40 bg-lime-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-8 text-lime-300" />
    <span class="font-bold">Kết Luận</span>
  </div>
  <div class="text-sm opacity-70">Hành trình & Ứng dụng thực tế</div>
</div>

</div>

---
class: py-8
glowSeed: 68
---

# PHẦN 1: GIỚI THIỆU

<v-click>

<div class="text-center opacity-80 mb-6">
  <span class="text-2xl">🎯 Câu hỏi dẫn dắt toàn bộ presentation:</span>
</div>

<div class="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg text-center">
  <span class="text-xl font-bold">"Học sinh THCS ăn bao nhiêu? Cao bao nhiêu?"</span>
  <br><span class="text-sm opacity-80 mt-2">→ Và làm sao biết điều đó?</span>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-yellow-500 bg-yellow-900/20 p-4 rounded-lg mt-6">
  <div class="font-bold text-yellow-300 text-lg mb-3">🏫 VẤN ĐỀ THỰC TẾ</div>
  <div class="text-sm">
    Nhà trường THCS thị trấn Đu muốn xây dựng <span class="text-green-300 font-bold">chương trình ăn trưa</span> phù hợp cho từng khối lớp.
    <br><br>
    <div class="flex items-start gap-2">
      <div class="i-carbon:warning text-amber-300 mt-0.5"></div>
      <span>Thực đơn Khối 9 phải nhiều hơn Khối 6 → Nhưng khác biệt bao nhiêu?</span>
    </div>
    <br>
    <div class="flex items-start gap-2">
      <div class="i-carbon:warning text-amber-300 mt-0.5"></div>
      <span>Bàn ghế kích cỡ nào phù hợp với học sinh?</span>
    </div>
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-blue-500 bg-blue-900/20 p-4 rounded-lg mt-4">
  <div class="font-bold text-blue-300 text-lg mb-3">📊 GIẢI PHÁP: NGHIÊN CỨU THỐNG KÊ</div>
  <div class="text-sm space-y-2">
    <div><span class="text-cyan-300 font-bold">①</span> Khảo sát <span class="font-mono">200</span> học sinh (Chiều cao, Cân nặng)</div>
    <div><span class="text-cyan-300 font-bold">②</span> Phân tích thống kê mô tả (Mean, SD, Range)</div>
    <div><span class="text-cyan-300 font-bold">③</span> Ước lượng cho tổng thể (Confidence Interval)</div>
    <div><span class="text-cyan-300 font-bold">④</span> Kiểm định sự khác biệt (Hypothesis Test)</div>
    <div><span class="text-cyan-300 font-bold">⑤</span> Mối quan hệ chiều cao - cân nặng (Regression)</div>
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-green-500 bg-green-900/20 p-4 rounded-lg mt-4">
  <div class="font-bold text-green-300 text-lg mb-2">🎯 ĐÍCH: Trả lời 3 câu hỏi</div>
  <div class="text-sm">
    <div class="mb-1"><span class="text-green-300 font-bold">Q1:</span> Chiều cao & cân nặng phân bố như thế nào?</div>
    <div class="mb-1"><span class="text-green-300 font-bold">Q2:</span> Khối 9 cao/nặng hơn Khối 6, 7, 8 không?</div>
    <div><span class="text-green-300 font-bold">Q3:</span> Chiều cao & cân nặng có liên quan không?</div>
  </div>
</div>

</v-click>

---
class: py-8
glowSeed: 81
---

# PHẦN 2: DỮ LIỆU NGHIÊN CỨU

<v-click>

<div class="border-l-4 border-yellow-500 bg-yellow-900/20 p-4 rounded-lg mb-4">
  <div class="font-bold text-yellow-300 text-lg mb-2">🏫 VẤN ĐỀ THỰC TẾ</div>
  <div class="text-sm">
    Nhà trường muốn xây dựng <span class="text-green-300 font-bold">chương trình ăn trưa</span> phù hợp cho từng khối lớp.
    <br>Thực đơn: Khối 9 ăn nhiều hơn Khối 6 → Cần khẩu phần khác nhau.
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-blue-500 bg-blue-900/20 p-4 rounded-lg">
  <div class="font-bold text-blue-300 text-lg mb-2">❓ CÂU HỎI NGHIÊN CỨU</div>
  <ul class="text-sm space-y-1 mt-2">
    <li><span class="text-cyan-300 font-bold">①</span> Chiều cao & cân nặng phân bố như thế nào?</li>
    <li><span class="text-cyan-300 font-bold">②</span> Khối 9 cao/nặng hơn Khối 6, 7, 8 không?</li>
    <li><span class="text-cyan-300 font-bold">③</span> Chiều cao & cân nặng có mối quan hệ không?</li>
  </ul>
  <div class="mt-2 text-xs opacity-70 italic">
    → Những câu hỏi này cần con số để trả lời!
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-green-500 bg-green-900/20 p-4 rounded-lg">
  <div class="font-bold text-green-300 text-lg mb-2">📋 THU THẬP DỮ LIỆU</div>
  <ul class="text-sm space-y-1">
    <li>Khảo sát ngẫu nhiên 200 học sinh tại trường THCS thị trấn Đu</li>
    <li>Đo Chiều cao (cm) & Cân nặng (kg)</li>
    <li>Ghi nhận: Lớp, Tuổi, Giới tính</li>
  </ul>
  <div class="mt-2 p-2 bg-green-900/40 rounded text-xs">
    <span class="i-carbon:checkmark-filled text-green-400"></span>
    <span class="font-mono">n = 200 đủ lớn để đại diện cho toàn trường (2000+ học sinh)</span>
  </div>
</div>

</v-click>

---
layout: default
glowSeed: 82
---

# THÔNG TIN MẪU NGHIÊN CỨU

<div class="grid grid-cols-3 gap-4 mt-6">

<v-click>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4 text-center">
  <div class="i-carbon:chart-bar text-blue-300 text-3xl mb-2"></div>
  <div class="font-bold text-blue-300 text-xl">Quy mô</div>
  <div class="text-5xl font-bold text-white mt-2">200</div>
  <div class="text-sm opacity-70">học sinh</div>
</div>

</v-click>

<v-click>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4 text-center">
  <div class="i-carbon:ruler text-green-300 text-3xl mb-2"></div>
  <div class="font-bold text-green-300 text-xl">Đo lường</div>
  <div class="text-base mt-2 opacity-90">Chiều cao (cm)</div>
  <div class="text-base opacity-90">Cân nặng (kg)</div>
  <div class="text-sm opacity-70 mt-1">Khối 6,7,8,9</div>
</div>

</v-click>

<v-click>

<div class="border-2 border-solid border-purple-800/30 bg-purple-800/10 rounded-lg p-4 text-center">
  <div class="i-carbon:data-base text-purple-300 text-3xl mb-2"></div>
  <div class="font-bold text-purple-300 text-xl">Nguồn</div>
  <div class="text-sm mt-2 opacity-90">THCS thị trấn Đu</div>
  <div class="text-sm opacity-90">Phú Lương, Thái Nguyên</div>
</div>

</v-click>

</div>

<v-click>

<div class="mt-6 border-l-4 border-amber-500 bg-amber-900/20 p-4 rounded-lg">
  <div class="font-bold text-amber-300 text-base mb-2">📊 CÁC BIẾN THU THẬP</div>
  <div class="grid grid-cols-7 gap-2 text-sm text-center">
    <div><span class="text-base text-cyan-300 font-bold">Tên</span><br>HS</div>
    <div><span class="text-base text-pink-300 font-bold">Giới tính</span><br>Nam/Nữ</div>
    <div><span class="text-base text-green-300 font-bold">Lớp</span><br>6,7,8,9</div>
    <div><span class="text-base text-green-300 font-bold">Năm sinh</span><br>2012-2015</div>
    <div><span class="text-base text-green-300 font-bold">Tuổi</span><br>11,12,13,14</div>
    <div><span class="text-base text-blue-300 font-bold">Chiều cao</span><br>cm</div>
    <div><span class="text-base text-purple-300 font-bold">Cân nặng</span><br>kg</div>
  </div>
</div>

</v-click>

---
layout: default
glowSeed: 83
---

# BẢNG DỮ LIỆU EXCEL
### 200 Học Sinh THCS Thị Trấn Đu, Phú Lương Thái Nguyên

<v-click>

<div class="text-sm opacity-70 mb-4">
  Đây là dữ liệu gốc từ file Excel - mỗi hàng là một học sinh
</div>

</v-click>

<img src="/images_mas291/excel screenshot data.png" class="mx-auto rounded-xl shadow-2xl" width="1000"/>

---
class: py-8
glowSeed: 94
---

# PHẦN 3: THỐNG KÊ MÔ Tả

<v-click>

<div class="border-l-4 border-blue-500 bg-blue-900/20 p-4 rounded-lg mb-4">
  <div class="font-bold text-blue-300 text-lg mb-2">🤔 VẤN ĐỆ</div>
  <div class="text-sm">
    <span class="text-lg">200 học sinh → 200 con số khác nhau</span>
    <br><span class="text-sm opacity-80">Làm sao tóm tắt 200 con số này thành một vài con số có ý nghĩa?</span>
  </div>
</div>

</v-click>

<v-click>

<div class="grid grid-cols-3 gap-3 mt-4">

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:ruler text-blue-300 text-xl"/>
    <span class="font-bold text-blue-300 text-sm">Mean (Trung bình)</span>
  </div>
  <div class="text-sm">
    <div class="mb-1">Đại diện nhất</div>
    <div class="text-xs opacity-70">"Học sinh TB cao bao nhiêu?"</div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:chart-scatter text-amber-300 text-xl"/>
    <span class="font-bold text-amber-300 text-sm">SD (Độ lệch)</span>
  </div>
  <div class="text-sm">
    <div class="mb-1">Độ phân tán</div>
    <div class="text-xs opacity-70">"Chênh nhau nhiều không?"</div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:chart-line text-green-300 text-xl"/>
    <span class="font-bold text-green-300 text-sm">Min/Max</span>
  </div>
  <div class="text-sm">
    <div class="mb-1">Phạm vi</div>
    <div class="text-xs opacity-70">"Thấp nhất → Cao nhất"</div>
  </div>
</div>

</div>

</v-click>

<v-click>

<div class="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
  <div class="flex items-start gap-2">
    <div class="i-carbon:idea text-yellow-300 text-xl mt-0.5"/>
    <div class="text-sm">
      <span class="font-bold text-yellow-300">Tóm lại:</span>
      Mean cho biết "giá trị điển hình", SD cho biết "độ phân tán" — Cả hai đều cần thiết để hiểu dữ liệu!
    </div>
  </div>
</div>

</v-click>

---
layout: default
glowSeed: 95
---

# KẾT QUẢ THỐNG KÊ MÔ Tả
### Chiều cao và cân nặng của 200 học sinh

<div class="grid grid-cols-2 gap-4 mt-4">

<v-click>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <div class="font-bold text-lg text-blue-300">CHIỀU CAO</div>
    <div class="i-carbon:ruler-alt text-blue-300 text-2xl" />
  </div>

  <div class="grid grid-cols-4 gap-2 text-sm">
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Mean</div>
      <div class="font-mono font-bold text-green-300">152.49</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">SD</div>
      <div class="font-mono font-bold text-amber-300">6.92</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Min</div>
      <div class="font-mono">125</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Max</div>
      <div class="font-mono">170</div>
    </div>
  </div>
</div>

</v-click>

<v-click>

<div class="border-2 border-solid border-pink-800/30 bg-pink-800/10 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <div class="font-bold text-lg text-pink-300">CÂN NẶNG</div>
    <div class="i-carbon:scale text-pink-300 text-2xl" />
  </div>

  <div class="grid grid-cols-4 gap-2 text-sm">
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Mean</div>
      <div class="font-mono font-bold text-green-300">48.18</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">SD</div>
      <div class="font-mono font-bold text-amber-300">7.27</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Min</div>
      <div class="font-mono">29</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">Max</div>
      <div class="font-mono">90</div>
    </div>
  </div>
</div>

</v-click>

</div>

---
layout: default
glowSeed: 96
---

# Ý NGHĨA KẾT QUẢ
### Những con số này nói gì về học sinh?

<v-click>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="border-l-4 border-blue-500 bg-blue-900/20 p-4 rounded-lg">
  <div class="font-bold text-blue-300 mb-2">🎯 Chiều cao điển hình</div>
  <div class="text-sm">
    Trung bình <span class="font-mono text-green-300">152.5 cm</span> ≈ 1m52
    <br><span class="text-xs opacity-70">→ Cao hơn bàn học tiểu học (~1m2)</span>
  </div>
</div>

<div class="border-l-4 border-pink-500 bg-pink-900/20 p-4 rounded-lg">
  <div class="font-bold text-pink-300 mb-2">⚖️ Cân nặng điển hình</div>
  <div class="text-sm">
    Trung bình <span class="font-mono text-green-300">48.2 kg</span>
    <br><span class="text-xs opacity-70">→ Cân nặng hợp lý cho độ tuổi 11-14</span>
  </div>
</div>

</div>

</v-click>

<v-click>

<div class="grid grid-cols-2 gap-4 mt-3">

<div class="border-l-4 border-amber-500 bg-amber-900/20 p-3 rounded-lg">
  <div class="font-bold text-amber-300 text-sm mb-1">📏 Độ phân tán</div>
  <div class="text-xs">
    SD = <span class="font-mono">6.9 cm</span> (cao) / <span class="font-mono">7.3 kg</span> (nặng)
    <br>→ Chênh lệch giữa học sinh khá lớn
  </div>
</div>

<div class="border-l-4 border-green-500 bg-green-900/20 p-3 rounded-lg">
  <div class="font-bold text-green-300 text-sm mb-1">📊 Phạm vi</div>
  <div class="text-xs">
    Cao: <span class="font-mono">125-170 cm</span> | Nặng: <span class="font-mono">29-90 kg</span>
    <br>→ Cần nhiều size bàn ghế, thực đơn linh hoạt
  </div>
</div>

</div>

</v-click>
