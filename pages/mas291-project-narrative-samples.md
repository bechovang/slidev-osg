# ==========================================
# SAMPLE SLIDES WITH NARRATIVE FLOW
# Demonstrating improved storytelling approach
# ==========================================
# ==========================================
# SAMPLE SLIDE 1: IMPROVED PHẦN 2 - DATA RESEARCH
# ==========================================
---
layout: default
glowSeed: 80
---

# TẠI SAO CẦN DỮ LIỆU NGHIÊN CỨU?

<v-click>

<div class="border-l-4 border-yellow-500 bg-yellow-900/20 p-4 rounded-lg">
  <div class="font-bold text-yellow-300 text-lg mb-2">VẤN ĐỀ THỰC TẾ</div>
  <div class="text-sm">
    Nhà trường muốn xây dựng <span class="text-green-300 font-bold">chương trình ăn trưa</span> phù hợp cho từng khối lớp.
    <br>Thực đơn: Khối 9 ăn nhiều hơn Khối 6 → Cần khẩu phần khác nhau.
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-blue-500 bg-blue-900/20 p-4 rounded-lg">
  <div class="font-bold text-blue-300 text-lg mb-2">CÂU HỎI NGHIÊN CỨU</div>
  <ul class="text-sm space-y-1 mt-2">
    <li><span class="text-cyan-300">①</span> Chiều cao & cân nặng phân bố như thế nào?</li>
    <li><span class="text-cyan-300">②</span> Khối 9 cao/nặng hơn Khối 6, 7, 8 không?</li>
    <li><span class="text-cyan-300">③</span> Chiều cao & cân nặng có mối quan hệ không?</li>
  </ul>
  <div class="mt-2 text-xs opacity-70 italic">
    → Những câu hỏi này cần con số để trả lời!
  </div>
</div>

</v-click>

<v-click>

<div class="border-l-4 border-green-500 bg-green-900/20 p-4 rounded-lg">
  <div class="font-bold text-green-300 text-lg mb-2">THU THẬP DỮ LIỆU</div>
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
glowSeed: 81
---

# BẢNG DỮ LIỆU EXCEL
### 200 Học Sinh THCS Thị Trấn Đu, Phú Lương Thái Nguyên

<v-click>

<div class="text-sm opacity-70 mb-4">
  Đây là dữ liệu gốc từ file Excel - mỗi hàng là một học sinh
</div>

</v-click>

<img src="/images_mas291/excel screenshot data.png" class="mx-auto rounded-xl shadow-2xl" width="1100"/>

# ==========================================
# SAMPLE SLIDE 2: IMPROVED PHẦN 3 - DESCRIPTIVE STATS
# ==========================================
---
layout: default
glowSeed: 94
---

# THỐNG KÊ MÔ Tả: BỨC TRANH TỔNG QUAN
### "Nhìn vào dữ liệu — ta thấy cái gì?"

<v-click>

<div class="text-center opacity-80 mb-4">
  <span class="text-lg">200 học sinh → 200 con số khác nhau</span>
  <br><span class="text-sm">Vấn đề: Làm sao tóm tắt 200 con số này thành một vài con số có ý nghĩa?</span>
</div>

</v-click>

<v-click>

<div class="grid grid-cols-3 gap-3">

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:ruler text-blue-300 text-2xl"/>
    <span class="font-bold text-blue-300">Mean (Trung bình)</span>
  </div>
  <div class="text-sm">
    <div class="mb-2">Đại diện nhất: "Trung bình học sinh cao bao nhiêu?"</div>
    <div class="p-2 bg-blue-900/20 rounded text-xs">
      <div class="font-mono text-green-300">152.49 cm</div>
    </div>
    <div class="mt-2 text-xs opacity-70">
      → Dùng để so sánh với chuẩn, giữa các khối
    </div>
  </div>
</div>

<div class="border-2 border-solid border-amber-800/30 bg-amber-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-scatter text-amber-300 text-2xl"/>
    <span class="font-bold text-amber-300">SD (Độ lệch chuẩn)</span>
  </div>
  <div class="text-sm">
    <div class="mb-2">Độ phân tán: "Học sinh cao thấp chênh nhau nhiều không?"</div>
    <div class="p-2 bg-amber-900/20 rounded text-xs">
      <div class="font-mono text-green-300">SD = 6.92 cm</div>
    </div>
    <div class="mt-2 text-xs opacity-70">
      → SD nhỏ = đồng nhất | SD lớn = chênh lệch nhiều
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-line text-green-300 text-2xl"/>
    <span class="font-bold text-green-300">Min/Max/Range</span>
  </div>
  <div class="text-sm">
    <div class="mb-2">Phạm vi: "Học sinh thấp nhất là bao nhiêu? Cao nhất là bao nhiêu?"</div>
    <div class="p-2 bg-green-900/20 rounded text-xs">
      <div class="font-mono">125 cm → 170 cm</div>
      <div class="font-mono text-red-300">Range = 45 cm</div>
    </div>
    <div class="mt-2 text-xs opacity-70">
      → Cần thiết kế bàn ghế, cửa, thực đơn phù hợp
    </div>
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

# ==========================================
# SAMPLE SLIDE 3: IMPROVED PHẦN 5 - ESTIMATION
# ==========================================
---
layout: default
glowSeed: 132
---

# ƯỚC LƯỢNG: TỪ MẪU NHỎ, SUY RA TỔNG THỂ
### The Core Question: "50 học sinh → 2000+ học sinh?"

<v-click>

<div class="border-l-4 border-purple-500 bg-purple-900/20 p-4 rounded-lg mb-4">
  <div class="font-bold text-purple-300 text-lg mb-2">VẤN ĐỀ</div>
  <div class="text-sm">
    Thống kê mô tả cho ta biết:
    <br>• <span class="font-mono">Mean = 153.82 cm</span> (trung bình Khối 8)
    <br>• Nhưng đây chỉ là <span class="text-yellow-300 font-bold">50 học sinh</span> trong <span class="text-red-300 font-bold">2000+</span> học sinh cả trường!
    <br><br>
    <span class="text-green-300 font-bold">CÂU HỎI:</span> Làm sao từ 50 con số, ta có thể nói về <strong>TOÀN BỘ</strong> học sinh khối 8?
  </div>
</div>

</v-click>

<v-click>

<div class="grid grid-cols-2 gap-4">

<div class="border-2 border-solid border-blue-800/30 bg-blue-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:target-miss text-blue-300 text-xl"/>
    <span class="font-bold text-blue-300">Ước lượng ĐIỂM (Point)</span>
  </div>
  <div class="text-sm">
    <div>Dùng <span class="font-bold">1 giá trị</span> để ước lượng</div>
    <div class="font-mono text-yellow-300 my-2">μ-hat ≈ x-bar = 153.82 cm</div>
    <div class="text-xs opacity-70 mt-2">
      → Hạn chế: Không biết chính xác bao nhiêu
    </div>
    <div class="mt-2 p-2 bg-red-900/20 rounded text-xs">
      <span class="i-carbon:warning text-red-400"></span>
      "Ví dụ: Bạn đo 50 bạn, được 153.82cm. Nhưng giá trị THẬ SỰ của cả khối là bao nhiêu?"
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800/30 bg-green-800/10 rounded-lg p-4">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:chart-line text-green-300 text-xl"/>
    <span class="font-bold text-green-300">Ước lượng KHOẢNG (Interval)</span>
  </div>
  <div class="text-sm">
    <div>Dùng <span class="font-bold">khoảng</span> để ước lượng với <span class="font-bold">độ tin cậy</span></div>
    <div class="font-mono text-green-300 my-2">95% CI: [152.58; 155.06]</div>
    <div class="text-xs opacity-70 mt-2">
      → Tin 95% giá trị thật nằm trong khoảng này
    </div>
    <div class="mt-2 p-2 bg-green-900/30 rounded text-xs">
      <span class="i-carbon:checkmark-filled text-green-400"></span>
      "Giống như nói: Tôi 95% sure rằng chiều cao TB toàn khối 8 nằm giữa 152.58 và 155.06 cm"
    </div>
  </div>
</div>

</div>

</v-click>

<v-click>

<div class="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg">
  <div class="flex items-start gap-2">
    <div class="i-carbon:arrow-right text-blue-300 text-xl mt-0.5"/>
    <div class="text-sm">
      <span class="font-bold text-blue-300">Kết nối đến Kiểm định:</span>
      Sau khi ước lượng, ta sẽ dùng <span class="text-yellow-300">Kiểm định</span> để trả lời: "Sự khác biệt giữa các khối có <span class="text-green-300">Ý NGHĨA THỐNGNG KÊ</span> không hay chỉ ngẫu nhiên?"
    </div>
  </div>
</div>

</v-click>

# ==========================================
# END OF SAMPLE SLIDES
# ==========================================
