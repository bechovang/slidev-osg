---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: MAS291 - Statistical Analysis Project
exportFilename: MAS291 - Health Data Analysis
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
  <span class="text-sm opacity-60">MAS291 - Xác Suất Thống Kê | FPT University - SE1853</span>
</div>

</div>

<div class="mt-4 flex items-center gap-4">
  <div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg px-4 py-2">
    <span class="text-blue-300 font-bold">Nhóm 3</span>
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
  <div class="text-sm opacity-70">Vấn đề, Mục tiêu, Tầm quan trọng</div>
</div>

<div v-click class="border-2 border-solid border-green-800/40 bg-green-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-2 text-green-300" />
    <span class="font-bold">Dữ Liệu Nghiên Cứu</span>
  </div>
  <div class="text-sm opacity-70">Nguồn dữ liệu & Các chỉ số</div>
</div>

<div v-click class="border-2 border-solid border-purple-800/40 bg-purple-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-3 text-purple-300" />
    <span class="font-bold">Thống Kê Mô Tả</span>
  </div>
  <div class="text-sm opacity-70">Mean, Median, SD, Variance</div>
</div>

<div v-click class="border-2 border-solid border-amber-800/40 bg-amber-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-4 text-amber-300" />
    <span class="font-bold">Phân Phối Mẫu</span>
  </div>
  <div class="text-sm opacity-70">Sampling Distribution</div>
</div>

<div v-click class="border-2 border-solid border-red-800/40 bg-red-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-5 text-red-300" />
    <span class="font-bold">Ước Lượng</span>
  </div>
  <div class="text-sm opacity-70">Point & Interval Estimation</div>
</div>

<div v-click class="border-2 border-solid border-cyan-800/40 bg-cyan-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-6 text-cyan-300" />
    <span class="font-bold">Kiểm Định Giả Thuyết</span>
  </div>
  <div class="text-sm opacity-70">Hypothesis Testing</div>
</div>

<div v-click class="border-2 border-solid border-pink-800/40 bg-pink-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-7 text-pink-300" />
    <span class="font-bold">Hồi Quy Tuyến Tính</span>
  </div>
  <div class="text-sm opacity-70">Correlation & Regression</div>
</div>

<div v-click class="border-2 border-solid border-lime-800/40 bg-lime-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-1">
    <div class="i-carbon:number-8 text-lime-300" />
    <span class="font-bold">Kết Luận</span>
  </div>
  <div class="text-sm opacity-70">Tổng kết & Q&A</div>
</div>

</div>

---
class: py-8
glowSeed: 68
---

# PHẦN 1: GIỚI THIỆU

<div class="grid grid-cols-2 gap-5 mt-4">

<div v-click class="border-2 border-solid border-red-800/30 bg-red-800/10 rounded-lg p-5">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:warning-alt text-red-300 text-2xl" />
    <span class="font-bold text-lg">Vấn Đề Nghiên Cứu</span>
  </div>
  <div class="flex flex-col gap-3 text-sm">
    <div class="flex items-start gap-2">
      <div class="i-carbon:close text-red-400 mt-0.5" />
      <span>Sức khỏe thể chất ảnh hưởng lớn đến việc học tập</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:close text-red-400 mt-0.5" />
      <span>Cần hiểu rõ thể trạng học sinh THCS</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:close text-red-400 mt-0.5" />
      <span>Phát hiện sự khác biệt giữa các độ tuổi</span>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-5">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:goal text-green-300 text-2xl" />
    <span class="font-bold text-lg">Mục Tiêu</span>
  </div>
  <div class="flex flex-col gap-3 text-sm">
    <div class="flex items-start gap-2">
      <div class="i-carbon:checkmark-filled text-green-400 mt-0.5" />
      <span>Phân tích Chiều cao & Cân nặng</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:checkmark-filled text-green-400 mt-0.5" />
      <span>Áp dụng các kỹ thuật thống kê</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:checkmark-filled text-green-400 mt-0.5" />
      <span>Đưa ra kết luận có ý nghĩa thống kê</span>
    </div>
  </div>
</div>

</div>

<div v-click class="mt-5 border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:information text-blue-300 text-xl" />
    <span class="font-bold">Tại sao đề tài này quan trọng?</span>
  </div>
  <div class="text-sm opacity-90">
    <span class="text-blue-300 font-bold">Giáo dục:</span> Giúp nhà trường nắm bắt thể trạng học sinh để điều chỉnh chế độ dinh dưỡng, hoạt động thể chất.<br>
    <span class="text-green-300 font-bold">Y tế:</span> Cung cấp dữ liệu cho các nghiên cứu về tăng trưởng và phát triển tuổi dậy thì.
  </div>
</div>

---
class: py-8
glowSeed: 81
---

# PHẦN 2: DỮ LIỆU NGHIÊN CỨU

<div class="grid grid-cols-3 gap-4 mt-4" style="height: 280px">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-blue-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-carbon:chart-bar text-blue-300 text-2xl mr-2" />
    <div class="font-semibold">Quy Mô Mẫu</div>
  </div>
  <div class="px-4 py-4 flex flex-col items-center justify-center flex-1">
    <div class="text-6xl font-bold text-blue-300">200</div>
    <div class="text-sm opacity-70 mt-2">Học sinh</div>
    <div class="text-xs opacity-50 mt-1">n = 200</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-green-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-carbon:school text-green-300 text-2xl mr-2" />
    <div class="font-semibold">Đối Tượng</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Học sinh THCS</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Tuổi: 11-14 tuổi</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Cả nam và nữ</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Khối 6, 7, 8, 9</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-purple-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-carbon:ruler text-purple-300 text-2xl mr-2" />
    <div class="font-semibold">Biến Số</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Chiều cao (cm)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Cân nặng (kg)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Giới tính</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Khối lớp</span>
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-3 text-center">
  <span class="text-amber-300 font-bold">Nguồn dữ liệu:</span> Khảo sát ngẫu nhiên tại trường THCS thị trấn Đu, Phú Lương, Thái Nguyên
</div>

---
class: py-8
glowSeed: 94
---

# PHẦN 3: THỐNG KÊ MÔ Tả 

<div class="text-center mb-4">
  <span class="text-lg opacity-80">Các chỉ số thống kê cơ bản - "Bức tranh tổng quan về dữ liệu"</span>
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <div class="font-bold text-xl text-blue-300">CHIỀU CAO (cm)</div>
    <div class="i-carbon:ruler-alt text-blue-300 text-3xl" />
  </div>

  <div class="grid grid-cols-2 gap-2 mb-3">
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Mean (x-bar)</div>
      <div class="text-2xl font-bold text-green-300">152.49</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Median</div>
      <div class="text-2xl font-bold text-blue-300">153</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Std Dev (s)</div>
      <div class="text-2xl font-bold text-amber-300">6.92</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Variance</div>
      <div class="text-2xl font-bold text-red-300">47.93</div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-2 text-xs">
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Min</div>
      <div class="font-mono">125 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Max</div>
      <div class="font-mono">170 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Range</div>
      <div class="font-mono">45 cm</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <div class="font-bold text-xl text-purple-300">CÂN NẶNG (kg)</div>
    <div class="i-carbon:scale text-purple-300 text-3xl" />
  </div>

  <div class="grid grid-cols-2 gap-2 mb-3">
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Mean (x-bar)</div>
      <div class="text-2xl font-bold text-green-300">48.18</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Median</div>
      <div class="text-2xl font-bold text-blue-300">48</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Std Dev (s)</div>
      <div class="text-2xl font-bold text-amber-300">7.27</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="text-xs opacity-60">Variance</div>
      <div class="text-2xl font-bold text-red-300">52.88</div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-2 text-xs">
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Min</div>
      <div class="font-mono">29 kg</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Max</div>
      <div class="font-mono">90 kg</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60">Range</div>
      <div class="font-mono">61 kg</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-8
glowSeed: 107
---

# THỐNG KÊ MÔ Tả: Ý NGHĨA CÁC CHỈ SỐ

<div class="grid grid-cols-2 gap-5 mt-2">

<v-clicks>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-line text-green-300 text-xl" />
    <span class="font-bold">Mean (Trung Bình)</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="opacity-80">Giá trị trung bình cộng của tất cả quan sát</div>
    <div class="mt-2 p-2 bg-green-900/20 rounded text-xs">
      Chiều cao TB = 152.49 cm → Học sinh trung bình cao khoảng 1m52
    </div>
  </div>
</div>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-ordinal text-blue-300 text-xl" />
    <span class="font-bold">Median (Trung Vị)</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="opacity-80">Giá trị ở giữa khi sắp xếp dữ liệu</div>
    <div class="opacity-80">Không bị ảnh hưởng bởi giá trị ngoại lai</div>
    <div class="mt-2 p-2 bg-blue-900/20 rounded text-xs">
      Median = 153 cm → 50% học sinh cao hơn 153cm
    </div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-bubble text-amber-300 text-xl" />
    <span class="font-bold">Std Dev (Độ Lệch Chuẩn)</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="opacity-80">Đo lường mức độ phân tán của dữ liệu</div>
    <div class="mt-2 p-2 bg-amber-900/20 rounded text-xs">
      SD = 6.92 cm → Chiều cao thường nằm trong khoảng 152.5 ± 6.9 cm
    </div>
  </div>
</div>

<div class="border-2 border-solid border-red-800/30 bg-red-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-evaluation text-red-300 text-xl" />
    <span class="font-bold">Variance (Phương Sai)</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="opacity-80">Bình phương độ lệch chuẩn</div>
    <div class="mt-2 p-2 bg-red-900/20 rounded text-xs">
      s² = 47.93 → Độ phân tán khá lớn giữa các học sinh
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-8
glowSeed: 120
---

# PHẦN 4: PHÂN PHỐI MẪU 

<div class="grid grid-cols-2 gap-5 mt-3">

<v-clicks>

<div class="border-2 border-solid border-purple-800/30 bg-purple-800/10 rounded-lg p-5">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:idea text-purple-300 text-2xl" />
    <span class="font-bold text-lg">Mẫu Là Gì?</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="flex items-start gap-2">
      <div class="i-carbon:arrow-right text-purple-300 mt-0.5" />
      <span><span class="text-purple-300 font-bold">Mẫu (Sample):</span> Một phần nhỏ lấy từ tổng thể để nghiên cứu</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:arrow-right text-purple-300 mt-0.5" />
      <span><span class="text-purple-300 font-bold">Tổng thể (Population):</span> Tất cả đối tượng muốn nghiên cứu</span>
    </div>
    <div class="flex items-start gap-2">
      <div class="i-carbon:arrow-right text-purple-300 mt-0.5" />
      <span><span class="text-purple-300 font-bold">Quy mô mẫu:</span> n = 200 học sinh</span>
    </div>
  </div>

  <div class="mt-3 p-3 bg-purple-900/20 rounded-lg">
    <div class="text-xs text-purple-300 font-bold mb-1">Tại sao cần mẫu?</div>
    <div class="text-xs opacity-80">Không thể đo toàn bộ học sinh → Mẫu đại diện giúp suy luận về tổng thể</div>
  </div>
</div>

<div class="border-2 border-solid border-cyan-800/30 bg-cyan-800/10 rounded-lg p-5">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-multi-type text-cyan-300 text-2xl" />
    <span class="font-bold text-lg">Dữ Liệu Phân Tích</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Sample A (Khối 8)</div>
      <div class="font-mono">n = 50, x-bar = 153.82 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Sample B (Khối 9)</div>
      <div class="font-mono">n = 50, x-bar = 157.84 cm</div>
    </div>
  </div>

  <div class="mt-3 p-3 bg-cyan-900/20 rounded-lg">
    <div class="text-xs text-cyan-300 font-bold mb-1">Mục đích:</div>
    <div class="text-xs opacity-80">Dùng 2 mẫu này để so sánh và ước lượng sự khác biệt giữa các khối lớp</div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2">
    <div class="i-carbon:information text-amber-300 text-xl" />
    <span class="font-bold">Lưu ý quan trọng:</span>
  </div>
  <div class="text-sm mt-2">
    Mẫu càng lớn → Ước lượng càng chính xác. Với n = 50, ta có độ tin cậy tốt để suy luận về tổng thể.
  </div>
</div>

---
class: py-8
glowSeed: 133
---

# PHẦN 5: ƯỚC LƯỢNG (ESTIMATION)

<div class="text-center mb-3">
  <span class="text-lg opacity-80">Từ mẫu, suy ra giá trị thật của tổng thể</span>
</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<v-clicks>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:calculator text-blue-300 text-xl" />
    <span class="font-bold">Ước Lượng Điểm (Point Estimate)</span>
  </div>
  <div class="text-sm space-y-2">
    <div>Dùng <span class="text-blue-300 font-bold">một giá trị</span> để ước lượng tham số tổng thể</div>
    <div class="p-2 bg-blue-900/20 rounded text-xs">
      <div class="font-mono mb-1">mu-hat = x-bar = 153.82 cm</div>
      <div class="opacity-80">→ Chiều cao TB Khối 8 ≈ 153.82 cm</div>
    </div>
    <div class="text-xs opacity-70">
      <div class="i-carbon:warning text-amber-300 inline" /> Hạn chế: Không cho biết độ chính xác
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:chart-line text-green-300 text-xl" />
    <span class="font-bold">Ước Lượng Khoảng (Interval)</span>
  </div>
  <div class="text-sm space-y-2">
    <div>Dùng <span class="text-green-300 font-bold">khoảng giá trị</span> để ước lượng với độ tin cậy nào đó</div>
    <div class="p-2 bg-green-900/20 rounded text-xs">
      <div class="font-mono mb-1">95% CI: [152.58 ; 155.06]</div>
      <div class="opacity-80">→ Tin 95% rằng giá trị thật nằm trong khoảng này</div>
    </div>
    <div class="text-xs opacity-70">
      <div class="i-carbon:checkmark-filled text-green-300 inline" /> Ưu điểm: Cho biết độ chính xác
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-8
glowSeed: 146
---

# ƯỚC LƯỢNG KHOẢNG TIN CẬY 95%

<div class="mt-3 mb-3 flex justify-center">
  <img src="/images_mas291/confidence_interval.png" class="max-h-[33vh] w-auto rounded-lg shadow-2xl" alt="Confidence Interval" />
</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<v-click>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-3">
  <div class="text-blue-300 font-bold mb-2">Công Thức (Variance Unknown)</div>
  <div class="text-sm">
    <div class="font-mono text-xs mb-2">x-bar ± t(a/2, n-1) × s/√n</div>
    <div class="text-xs space-y-1">
      <div><span class="text-blue-300">x-bar</span>: Trung bình mẫu</div>
      <div><span class="text-blue-300">t(a/2)</span>: Giá trị t từ bảng t</div>
      <div><span class="text-blue-300">s</span>: Độ lệch chuẩn mẫu</div>
      <div><span class="text-blue-300">n</span>: Quy mô mẫu</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-3">
  <div class="text-green-300 font-bold mb-2">Áp Dụng Cho Khối 8</div>
  <div class="text-xs space-y-1">
    <div>x-bar = 153.82, s = 4.36, n = 50</div>
    <div>df = 49, t(0.025, 49) = 2.01</div>
    <div>Sai số: 2.01 × (4.36/√50) = 1.24</div>
    <div class="mt-2 p-2 bg-green-900/30 rounded">
      <div class="text-green-300 font-bold">95% CI:</div>
      <div class="font-mono">[152.58 ; 155.06]</div>
    </div>
  </div>
</div>

</v-click>

</div>

---
class: py-8
glowSeed: 159
---

# ƯỚC LƯỢNG: SO SÁNH HAI MẪU

<div class="text-center mb-3">
  <span class="text-lg opacity-80">Sự khác biệt về chiều cao giữa Khối 8 và Khối 9</span>
</div>

<div class="grid grid-cols-2 gap-4 mt-3">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <span class="font-bold text-lg text-blue-300">Sample A (Khối 8)</span>
  </div>
  <div class="space-y-2 text-sm">
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Mean (x-bar-A)</div>
      <div class="text-xl font-bold font-mono">153.82 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Std (s-A)</div>
      <div class="text-xl font-bold font-mono">4.36 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">n</div>
      <div class="text-xl font-bold font-mono">50</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center justify-between mb-3">
    <span class="font-bold text-lg text-green-300">Sample B (Khối 9)</span>
  </div>
  <div class="space-y-2 text-sm">
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Mean (x-bar-B)</div>
      <div class="text-xl font-bold font-mono">157.84 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">Std (s-B)</div>
      <div class="text-xl font-bold font-mono">5.909 cm</div>
    </div>
    <div class="bg-black/30 rounded p-2">
      <div class="opacity-60 text-xs">n</div>
      <div class="text-xl font-bold font-mono">50</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:chart-line text-amber-300 text-xl" />
    <span class="font-bold">95% CI cho hiệu số (mu-A - mu-B):</span>
  </div>
  <div class="font-mono text-lg text-red-300">[-6.08 ; -1.96]</div>
  <div class="text-sm mt-2 opacity-90">
    <span class="i-carbon:checkmark-filled text-green-400 inline" /> <strong>Kết luận:</strong> Khoảng này hoàn toàn âm → Khối 8 thấp hơn Khối 9 với độ tin cậy 95%
  </div>
</div>

---
class: py-6
glowSeed: 172
---

# PHẦN 6: KIỂM ĐỊNH GIẢ THUYẾT 

<div class="text-center mb-3">
  <span class="text-lg opacity-80">Trả lời câu hỏi: "Liệu sự khác biệt này có ý nghĩa thống kê hay chỉ do ngẫu nhiên?"</span>
</div>

<div class="grid grid-cols-3 gap-3 mt-3">

<v-clicks>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-3">
  <div class="text-center mb-2">
    <div class="i-carbon:document text-blue-300 text-3xl" />
  </div>
  <div class="font-bold text-blue-300 text-center mb-2">1. Đặt Giả Thuyết</div>
  <div class="text-xs space-y-1">
    <div><span class="font-mono text-blue-300">H-0</span>: Giả thuyết null (không có sự khác biệt)</div>
    <div><span class="font-mono text-blue-300">H-1</span>: Giả thuyết thay thế (có sự khác biệt)</div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-3">
  <div class="text-center mb-2">
    <div class="i-carbon:calculator text-amber-300 text-3xl" />
  </div>
  <div class="font-bold text-amber-300 text-center mb-2">2. Tính Test Statistic</div>
  <div class="text-xs">
    <div>Dùng công thức tính t, z, F...</div>
    <div class="mt-1 p-1 bg-amber-900/20 rounded text-xs font-mono">
      t = (x-bar - mu-0) / (s/√n)
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-3">
  <div class="text-center mb-2">
    <div class="i-carbon:checkmark-filled text-green-300 text-3xl" />
  </div>
  <div class="font-bold text-green-300 text-center mb-2">3. Kết Luận</div>
  <div class="text-xs">
    <div>So sánh Test stat với Critical value</div>
    <div class="mt-1 text-xs">
      <div class="text-green-300">→ Chấp nhận hoặc Bác bỏ H-0</div>
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 p-3 bg-red-900/20 border border-red-800/50 rounded-lg">
  <div class="flex items-center gap-2">
    <div class="i-carbon:warning text-red-300 text-xl" />
    <span class="font-bold text-red-300">Lưu ý quan trọng:</span>
  </div>
  <div class="text-sm mt-1">
    <strong>Bác bỏ H-0</strong> ≠ Chứng minh H-0 sai. Chỉ có đủ bằng chứng để nói "không thể tin H-0 là đúng".
  </div>
</div>

---
class: py-6
glowSeed: 185
---

# KIỂM ĐỊNH: BÀI TOÁN 1 MẪU

<div class="grid grid-cols-2 gap-4 mt-2">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:question text-blue-300 text-xl" />
    <span class="font-bold">Câu Hỏi</span>
  </div>
  <div class="text-sm">
    <div>Chiều cao Khối 8 có khác chuẩn trung bình quốc gia (155cm) không?</div>
    <div class="mt-2 opacity-70 text-xs italic">(Theo số liệu tham khảo Viện Dinh dưỡng Quốc gia)</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:document text-green-300 text-xl" />
    <span class="font-bold">Giả Thuyết</span>
  </div>
  <div class="text-sm font-mono">
    <div>H-0: mu = 155</div>
    <div class="opacity-70">(Khối 8 = chuẩn quốc gia)</div>
    <div class="mt-1">H-1: mu ≠ 155</div>
    <div class="opacity-70">(Khối 8 ≠ chuẩn quốc gia)</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:calculator text-amber-300 text-xl" />
    <span class="font-bold">Tính Toán</span>
  </div>
  <div class="text-xs space-y-1">
    <div>x-bar = 153.82, s = 4.36, n = 50 (Khối 8)</div>
    <div>t = (153.82 - 155) / (4.36/√50)</div>
    <div class="p-2 bg-amber-900/20 rounded mt-2">
      <div class="text-amber-300 font-bold">t = -1.91</div>
      <div class="opacity-70">(Test Statistic)</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold">Kết Luận</span>
  </div>
  <div class="text-xs space-y-1">
    <div>Critical value (df=49): ±2.01</div>
    <div class="flex items-center gap-2 mt-2">
      <span>-1.91</span>
      <span class="text-green-400">> -2.01</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded mt-2 text-green-300 font-bold">
      → KHÔNG bác bỏ H-0
    </div>
    <div class="opacity-80">Chưa đủ bằng chứng thống kê để khẳng định Khối 8 khác chuẩn 155cm</div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-6
glowSeed: 198
---

# KIỂM ĐỊNH: HÌNH ẢNH TRỰC QUAN

<div class="mt-2 mb-2 flex justify-center">
  <img src="/images_mas291/hypothesis_testing.png" class="max-h-[48vh] w-auto rounded-lg shadow-2xl" alt="Hypothesis Testing" />
</div>

<div v-click class="mt-3 grid grid-cols-2 gap-3">
  <div class="border-2 border-solid border-red-800/30 bg-red-800/10 rounded-lg p-2 text-center">
    <div class="text-red-300 font-bold text-sm">One-Sample t-Test</div>
    <div class="text-xs opacity-80">Kiểm tra 1 mẫu so với giá trị chuẩn</div>
  </div>
  <div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-2 text-center">
    <div class="text-green-300 font-bold text-sm">Two-Sample t-Test</div>
    <div class="text-xs opacity-80">So sánh 2 mẫu với nhau</div>
  </div>
</div>

---
class: py-6
glowSeed: 211
---

# KIỂM ĐỊNH: BÀI TOÁN 2 MẪU

<div class="grid grid-cols-2 gap-4 mt-2">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:compare text-purple-300 text-xl" />
    <span class="font-bold">Câu Hỏi</span>
  </div>
  <div class="text-sm">
    <div>Khối 8 có thấp hơn Khối 9 không?</div>
    <div class="mt-2 opacity-70">(Mức ý nghĩa alpha = 0.05)</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:document text-green-300 text-xl" />
    <span class="font-bold">Giả Thuyết</span>
  </div>
  <div class="text-sm font-mono">
    <div>H-0: mu-1 = mu-2</div>
    <div class="opacity-70">(Hai khối bằng nhau)</div>
    <div class="mt-1">H-1: mu-1 < mu-2</div>
    <div class="opacity-70">(Khối 8 < Khối 9)</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:calculator text-amber-300 text-xl" />
    <span class="font-bold">Tính Toán</span>
  </div>
  <div class="text-xs space-y-1">
    <div>Khối 8: x-bar = 153.82, s = 4.36, n = 50</div>
    <div>Khối 9: x-bar = 157.84, s = 5.91, n = 50</div>
    <div>Phương sai gộp: Sp² = 26.97</div>
    <div>t = (153.82 - 157.84) / √(26.97(1/50 + 1/50))</div>
    <div class="p-2 bg-amber-900/20 rounded mt-2">
      <div class="text-amber-300 font-bold">t = -3.87</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold">Kết Luận</span>
  </div>
  <div class="text-xs space-y-1">
    <div>Critical value (df=98, one-tail): -1.66</div>
    <div class="flex items-center gap-2 mt-2">
      <span>-3.87</span>
      <span class="text-red-400">< < -1.66</span>
    </div>
    <div class="p-2 bg-green-900/30 rounded mt-2 text-green-300 font-bold">
      → Bác bỏ H-0, Chấp nhận H-1
    </div>
    <div class="opacity-80">Khối 8 THẤP HƠN Khối 9</div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-8
glowSeed: 224
---

# PHẦN 7: HỒI QUY TUYẾN TÍNH 

<div class="text-center mb-3">
  <span class="text-lg opacity-80">Mối quan hệ giữa Chiều cao (X) và Cân nặng (Y)</span>
</div>

<div class="mt-2 mb-2 flex justify-center">
  <img src="/images_mas291/scatter_regression.png" class="max-h-[45vh] w-auto rounded-lg shadow-2xl" alt="Scatter Plot Regression" />
</div>

---
class: py-8
glowSeed: 237
---

# HỒI QUY: PHƯƠNG TRÌNH & HỆ SỐ

<div class="grid grid-cols-2 gap-5 mt-3">

<v-clicks>

<div class="border-2 border-solid border-purple-800/30 bg-purple-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:function text-purple-300 text-2xl" />
    <span class="font-bold text-lg">Phương Trình Hồi Quy</span>
  </div>

  <div class="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-lg p-4 border border-purple-500/30">
    <div class="text-center">
      <div class="text-sm opacity-60 mb-2">Y = Cân Nặng, X = Chiều Cao</div>
      <div class="text-3xl font-bold font-mono text-purple-300">
        Y = 0.712X - 60.41
      </div>
    </div>
  </div>

  <div class="mt-3 text-sm">
    <div class="opacity-60 mb-1">Ý nghĩa:</div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-green-300" />
      <span>Hệ số góc = 0.712</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-green-300" />
      <span>Hệ số chặn = -60.41</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-cyan-800/30 bg-cyan-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-evaluation text-cyan-300 text-2xl" />
    <span class="font-bold text-lg">Hệ Số Tương Quan</span>
  </div>

  <div class="text-center mb-3">
    <div class="text-5xl font-bold text-cyan-300">R = 0.678</div>
    <div class="text-sm opacity-60 mt-1">Correlation Coefficient</div>
  </div>

  <div class="space-y-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-filled text-green-400" />
      <span>Dương: Cùng chiều tăng/giảm</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-filled text-green-400" />
      <span>0.678: Tương quan trung bình</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-filled text-green-400" />
      <span>R² = 0.46: 46% biến thiên</span>
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 grid grid-cols-2 gap-3">
  <div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-3">
    <div class="text-green-300 font-bold mb-1">Ý nghĩa thực tế</div>
    <div class="text-sm">Cứ cao thêm <span class="text-green-300 font-bold">1cm</span> → Nặng thêm <span class="text-green-300 font-bold">0.71kg</span></div>
  </div>
  <div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-3">
    <div class="text-blue-300 font-bold mb-1">Kiểm định ý nghĩa</div>
    <div class="text-sm">t = 12.98 > 1.96 → <span class="text-green-300 font-bold">Mô hình có ý nghĩa thống kê</span></div>
  </div>
</div>

---
class: py-8
glowSeed: 250
---

# HỒI QUY: DIỄN GIẢI CHI TIẾT

<div class="grid grid-cols-3 gap-4 mt-3">

<v-clicks>

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="text-blue-300 font-bold mb-2">Hệ Số Góc (beta-1)</div>
  <div class="text-sm">
    <div class="font-mono text-xl mb-2">0.712</div>
    <div class="opacity-80">Độ thay đổi của Y khi X tăng 1 đơn vị</div>
    <div class="mt-2 p-2 bg-blue-900/20 rounded text-xs">
      Cao +1cm → Nặng +0.712kg
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4">
  <div class="text-green-300 font-bold mb-2">Hệ Số Chặn (beta-0)</div>
  <div class="text-sm">
    <div class="font-mono text-xl mb-2">-60.41</div>
    <div class="opacity-80">Giá trị Y khi X = 0</div>
    <div class="mt-2 p-2 bg-green-900/20 rounded text-xs">
      Về lý thuyết (không thực tế)
    </div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-4">
  <div class="text-amber-300 font-bold mb-2">R² (Độ Phù Hợp)</div>
  <div class="text-sm">
    <div class="font-mono text-xl mb-2">0.460</div>
    <div class="opacity-80">46% biến thiên của Y được giải thích bởi X</div>
    <div class="mt-2 p-2 bg-amber-900/20 rounded text-xs">
      54% do các yếu tố khác
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-4 border-2 border-solid border-purple-800/30 bg-purple-800/10 rounded-lg p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon:chart-scatter text-purple-300 text-xl" />
    <span class="font-bold">Dự báo với mô hình:</span>
  </div>
  <div class="text-sm grid grid-cols-3 gap-2">
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">150cm</div>
      <div class="font-mono text-purple-300">46.4 kg</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">155cm</div>
      <div class="font-mono text-purple-300">49.9 kg</div>
    </div>
    <div class="bg-black/30 rounded p-2 text-center">
      <div class="opacity-60 text-xs">160cm</div>
      <div class="font-mono text-purple-300">53.5 kg</div>
    </div>
  </div>
</div>

---
class: py-8
glowSeed: 262
---

# INSIGHT & Ý NGHĨA THỰC TẾ

<div class="mt-6 grid grid-cols-2 gap-4">

<v-clicks>

<div class="border-2 border-solid border-green-800/40 bg-green-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon-trending-up text-green-300 text-2xl" />
    <span class="font-bold text-green-300">Tăng Trưởng Theo Tuổi</span>
  </div>
  <div class="text-sm space-y-2">
    <div class="font-mono text-xs bg-black/30 rounded p-2">
      K6 (146cm) → K7 (152cm) → K8 (153.8cm) → K9 (157.8cm)
    </div>
    <div class="opacity-80">
      Trung bình tăng <span class="text-green-300 font-bold">~4cm/năm</span>
    </div>
    <div class="text-xs opacity-70 italic">
      Nhưng K7→K8 chỉ +2cm — dậy thì không đều
    </div>
  </div>
</div>

<div class="border-2 border-solid border-blue-800/40 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon-earth-filled text-blue-300 text-2xl" />
    <span class="font-bold text-blue-300">So Chuẩn Quốc Gia</span>
  </div>
  <div class="text-sm space-y-2">
    <div>Khối 8 <span class="text-blue-300">khác biệt không có ý nghĩa</span> với chuẩn 155cm</div>
    <div class="p-2 bg-blue-900/20 rounded text-xs">
      <div class="font-bold text-blue-300">→ Kết luận:</div>
      <div>Học sinh nông thôn Thái Nguyên phát triển <span class="text-green-300">tương đương</span> chuẩn quốc gia</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800/40 bg-purple-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon-chart-multiline text-purple-300 text-2xl" />
    <span class="font-bold text-purple-300">Hạn Chế Của Mô Hình</span>
  </div>
  <div class="text-sm space-y-2">
    <div>R² = <span class="text-purple-300 font-bold">0.46</span> — chiều cao chỉ giải thích 46% cân nặng</div>
    <div class="text-xs opacity-80">
      54% còn lại do: <span class="text-amber-300">giới tính, ăn uống, vận động...</span>
    </div>
    <div class="p-2 bg-purple-900/20 rounded text-xs">
      <span class="text-purple-300">Gợi ý:</span> Thêm biến giới tính → R² tăng đáng kể
    </div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/40 bg-amber-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon-warning-alt text-amber-300 text-2xl" />
    <span class="font-bold text-amber-300">Điểm Cần Chú Ý</span>
  </div>
  <div class="text-sm space-y-2">
    <div>Cân nặng tối đa: <span class="text-amber-300 font-bold">90kg</span> (trung bình = 48kg)</div>
    <div class="text-xs opacity-80">
      Học sinh nặng gấp gần <span class="text-red-300">2 lần</span> trung bình
    </div>
    <div class="text-xs opacity-70 italic">
      Giải thích variance cân nặng lớn hơn chiều cao
    </div>
  </div>
</div>

</v-clicks>

</div>

<div v-click class="mt-6 p-4 border-2 border-solid border-cyan-800/30 bg-cyan-800/10 rounded-lg text-center">
  <div class="text-cyan-300 font-bold">Thống kê không chỉ là số — nó kể câu chuyện về sức khỏe học sinh</div>
</div>

---
layout: center
class: text-center
glowSeed: 263
---

# PHẦN 8: TỔNG KẾT

<div class="mt-6 grid grid-cols-2 gap-4 max-w-4xl mx-auto">

<v-clicks>

<div class="border-2 border-solid border-green-800/40 bg-green-800/10 rounded-lg p-5">
  <div class="i-carbon:data-row text-green-300 text-4xl mb-3" />
  <div class="font-bold text-lg mb-2">Thống Kê Mô Tả</div>
  <div class="text-sm opacity-70 space-y-1">
    <div>n = 200 học sinh</div>
    <div>Height: 152.5 ± 6.9 cm</div>
    <div>Weight: 48.2 ± 7.3 kg</div>
  </div>
</div>

<div class="border-2 border-solid border-blue-800/40 bg-blue-800/10 rounded-lg p-5">
  <div class="i-carbon:chart-line text-blue-300 text-4xl mb-3" />
  <div class="font-bold text-lg mb-2">Ước Lượng</div>
  <div class="text-sm opacity-70 space-y-1">
    <div>95% CI Khối 8</div>
    <div>[152.58 ; 155.06]</div>
    <div>Khối 9 > Khối 8</div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800/40 bg-purple-800/10 rounded-lg p-5">
  <div class="i-carbon:chart-scatter text-purple-300 text-4xl mb-3" />
  <div class="font-bold text-lg mb-2">Hồi Quy</div>
  <div class="text-sm opacity-70 space-y-1">
    <div>Y = 0.712X - 60.41</div>
    <div>R = 0.678</div>
    <div>Mô hình ý nghĩa</div>
  </div>
</div>

<div class="border-2 border-solid border-red-800/40 bg-red-800/10 rounded-lg p-5">
  <div class="i-carbon:test-tool text-red-300 text-4xl mb-3" />
  <div class="font-bold text-lg mb-2">Kiểm Định</div>
  <div class="text-sm opacity-70 space-y-1">
    <div>1-sample: Khối 8 vs 155cm</div>
    <div class="text-green-300">→ Không bác bỏ H0</div>
    <div>2-sample: Khối 8 vs Khối 9</div>
    <div class="text-red-300">→ Bác bỏ H0 (K8 < K9)</div>
  </div>
</div>

</v-clicks>

</div>

<div class="mt-8">
  <v-click>
    <div class="inline-block border-2 border-solid border-amber-800/40 bg-amber-800/10 rounded-lg px-8 py-4">
      <span class="font-bold text-xl">Cảm ơn Cô & Các Bạn Đã Lắng Nghe!</span>
    </div>
  </v-click>
</div>

<div v-click class="mt-6 text-sm opacity-70">
  Q&A - Câu Hỏi & Trả Lời
</div>

---
layout: end
glowSeed: 276
---

# THANK YOU!

<div class="mt-8">
  <div class="text-2xl opacity-80">Questions & Discussion</div>
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

<div class="mt-8 text-center opacity-50 text-sm">
  MAS291 - Xác Suất Thống Kê | FPT University
</div>