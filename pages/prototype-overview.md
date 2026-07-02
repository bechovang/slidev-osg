---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Prototype & Prototyping
exportFilename: Prototype-Prototyping-Overview
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
routerMode: hash
---

<div class="translate-y--4 text-center">

# TỔNG QUAN VỀ PROTOTYPE & PROTOTYPING

<div class="text-xl opacity-80 mt-3 text-cyan-300 font-medium">
  Khám phá, Xác nhận Yêu cầu & Tối ưu hóa Thiết kế Phần mềm
</div>

<div class="mt-4 flex justify-center gap-3 text-sm">
  <div class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-200 font-mono">
    Kỹ nghệ Phần mềm
  </div>
  <div class="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200 font-mono">
    Kết hợp ẩn dụ "Quán Cà Phê" ☕
  </div>
</div>

<div class="mt-8 text-sm opacity-50">
  Tài liệu học tập & ôn tập chuyên sâu song song lý thuyết & thực tế
</div>

</div>

---
class: py-10
---

# 1. Khái Niệm Cơ Bản

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/8 p-5 flex flex-col justify-between">
  <div>
    <div class="flex items-center gap-3 mb-3">
      <div class="i-carbon:cube text-3xl text-blue-300" />
      <div class="text-xl font-bold text-blue-200">Prototype (Bản mẫu)</div>
    </div>
    <p class="text-xs opacity-90 leading-relaxed mb-3">
      Là bản triển khai <span class="text-blue-300 font-bold">một phần, sơ bộ hoặc có khả năng thực hiện</span> của một hệ thống phần mềm, dùng để khám phá & xác nhận các yêu cầu.
    </p>
  </div>
  <div class="rounded-lg border border-amber-500/20 bg-amber-950/30 p-3 mt-2">
    <div class="text-xs font-bold text-amber-300 flex items-center gap-1 mb-1">
      <div class="i-carbon:cafe" /> Ẩn dụ Quán Cà Phê ☕
    </div>
    <div class="text-[11px] opacity-80 leading-relaxed">
      Chính là cái <b>mô hình thu nhỏ</b> của quán. Nó chưa phải là quán thật, không thể vào bán ngay được, nhưng nhìn vào là biết quán trông thế nào.
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/8 p-5 flex flex-col justify-between">
  <div>
    <div class="flex items-center gap-3 mb-3">
      <div class="i-carbon:flow text-3xl text-emerald-300 animate-pulse" />
      <div class="text-xl font-bold text-emerald-200">Prototyping (Quy trình)</div>
    </div>
    <p class="text-xs opacity-90 leading-relaxed mb-3">
      Là <span class="text-emerald-300 font-bold">quá trình xây dựng bản mẫu</span> nhằm biến đổi các yêu cầu trừu tượng thành dạng hữu hình, giúp giảm thiểu rủi ro ngay từ đầu.
    </p>
  </div>
  <div class="rounded-lg border border-amber-500/20 bg-amber-950/30 p-3 mt-2">
    <div class="text-xs font-bold text-amber-300 flex items-center gap-1 mb-1">
      <div class="i-carbon:tools" /> Ẩn dụ Quán Cà Phê ☕
    </div>
    <div class="text-[11px] opacity-80 leading-relaxed">
      Là việc bạn <b>làm mọi cách để dựng mô hình</b>, vẽ phối cảnh quán trước khi quyết định đổ hàng tỷ đồng vào xây thật.
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 2. Phân Loại Prototype -- Scope & Form

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="rounded-xl border border-cyan-400/25 bg-cyan-400/5 p-4 flex flex-col justify-between">
  <div>
    <div class="flex items-center gap-2 mb-2 text-cyan-300 font-bold text-base border-b border-cyan-400/10 pb-1">
      <div class="i-carbon:mac" />
      <span>Mock-up (Horizontal / Bản mẫu Ngang)</span>
    </div>
    <div class="text-[11px] opacity-85 space-y-1 mb-2">
      <div>💻 Tập trung vào <span class="text-cyan-200 font-semibold">giao diện người dùng (UI/UX)</span> và luồng đi tổng quan.</div>
      <div>⚙️ Không đi sâu vào các lớp xử lý kỹ thuật hoặc dữ liệu bên dưới.</div>
    </div>
  </div>
  <div class="rounded-lg border border-amber-500/10 bg-amber-950/20 p-2.5">
    <div class="text-[10px] font-bold text-amber-300 flex items-center gap-1 mb-0.5">
      🎨 Bản vẽ 3D phối cảnh
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Bản phối cảnh 3D trên máy tính. Bạn thấy rõ quầy bar ở đâu, màu bàn ghế... nhưng không thể pha chế hay uống thử được.
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/25 bg-purple-400/5 p-4 flex flex-col justify-between">
  <div>
    <div class="flex items-center gap-2 mb-2 text-purple-300 font-bold text-base border-b border-purple-400/10 pb-1">
      <div class="i-carbon:network-4" />
      <span>Proof of Concept (Vertical / Bản mẫu Dọc)</span>
    </div>
    <div class="text-[11px] opacity-85 space-y-1 mb-2">
      <div>⚡ Triển khai một <span class="text-purple-200 font-semibold">lát cắt chức năng hoàn chỉnh</span> từ UI đến Database.</div>
      <div>🔬 Chứng minh tính khả thi kỹ thuật và đánh giá hiệu năng kiến trúc.</div>
    </div>
  </div>
  <div class="rounded-lg border border-amber-500/10 bg-amber-950/20 p-2.5">
    <div class="text-[10px] font-bold text-amber-300 flex items-center gap-1 mb-0.5">
      ☕ Quầy pha chế thử nghiệm
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Chưa trang trí, nhưng mua ngay máy xịn, lắp điện nước thô và bắt nhân viên pha thử 10 ly Espresso xem máy và điện có bị quá tải không.
    </div>
  </div>
</div>

</div>

<div class="mt-4 grid grid-cols-2 gap-4">
  <div class="rounded-lg bg-white/5 px-4 py-2 flex items-center gap-3">
    <div class="w-8 h-8 rounded bg-red-400/10 text-red-300 flex items-center justify-center font-bold text-xs shrink-0">Low-Fi</div>
    <div class="text-[10px] opacity-85 leading-normal">
      <b>Low-fidelity (Cấp độ thấp):</b> Vẽ ngoáy phác thảo vài đường lên <b>khăn giấy</b> cho bạn bè xem khi đang ngồi nói chuyện. Rẻ, sai thì xé nháp làm lại.
    </div>
  </div>
  <div class="rounded-lg bg-white/5 px-4 py-2 flex items-center gap-3">
    <div class="w-8 h-8 rounded bg-emerald-400/10 text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">High-Fi</div>
    <div class="text-[10px] opacity-85 leading-normal">
      <b>High-fidelity (Cấp độ cao):</b> <b>Video mô phỏng 3D</b> đi dạo quanh quán, click vào cửa thì cửa mở, chạm vào đèn thì đèn sáng. Nhìn cực kỳ giống thật.
    </div>
  </div>
</div>

---
class: py-10
---

# 3. Phân Loại Prototype -- Future Use

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="rounded-xl border border-red-400/20 bg-red-400/5 p-5 flex flex-col justify-between transition-all hover:bg-red-400/8">
  <div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-red-400/10 text-red-300 flex items-center justify-center">
        <div class="i-carbon:trash-can text-2xl" />
      </div>
      <div>
        <div class="text-lg font-bold text-red-200">Throwaway Prototype</div>
        <div class="text-[10px] opacity-60">Bản mẫu dùng một lần rồi bỏ</div>
      </div>
    </div>
    <p class="text-xs opacity-90 leading-relaxed mb-3">
      Xây dựng nhanh chóng và chi phí thấp để làm rõ yêu cầu. Sau khi thu thập xong phản hồi, bản mẫu sẽ bị <b>loại bỏ hoàn toàn</b>.
    </p>
  </div>
  <div class="rounded-lg border border-amber-500/20 bg-amber-950/20 p-3">
    <div class="text-[11px] font-bold text-amber-300 flex items-center gap-1 mb-1">
      📦 Mô hình bìa các-tông
    </div>
    <div class="text-[10px] opacity-80 leading-relaxed">
      Lấy giấy carton, cắt dán một mô hình nhỏ bằng bàn tay để xem xếp bàn ghế thế nào cho thoáng. Chốt xong thì ném sọt rác, chứ không ai lấy giấy đó để xây quán thật.
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5 flex flex-col justify-between transition-all hover:bg-emerald-400/8">
  <div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-lg bg-emerald-400/10 text-emerald-300 flex items-center justify-center">
        <div class="i-carbon:growth text-2xl" />
      </div>
      <div>
        <div class="text-lg font-bold text-emerald-200">Evolutionary Prototype</div>
        <div class="text-[10px] opacity-60">Bản mẫu tiến hóa / Phát triển dần</div>
      </div>
    </div>
    <p class="text-xs opacity-90 leading-relaxed mb-3">
      Thiết kế dựa trên nền tảng kiến trúc vững chắc. Hệ thống được nâng cấp liên tục qua các chu kỳ lặp (iterations) để thành sản phẩm thật.
    </p>
  </div>
  <div class="rounded-lg border border-amber-500/20 bg-amber-950/20 p-3">
    <div class="text-[11px] font-bold text-amber-300 flex items-center gap-1 mb-1">
      🎪 Quán cà phê cóc (Pop-up Store)
    </div>
    <div class="text-[10px] opacity-80 leading-relaxed">
      Dựng rạp nhỏ, kê vài ghế gỗ bán thử trước. Vừa bán vừa xem khách thích gì để sửa thực đơn, kiếm được tiền thì xây gạch, rồi nâng cấp quán 3 tầng sang xịn mịn.
    </div>
  </div>
</div>

</div>



---
class: py-10
---

# 4. Kỹ Thuật Đánh Giá Bản Mẫu Chuyên Sâu

<div class="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3.5 mb-4 flex items-center gap-3">
  <div class="i-carbon:document-tasks text-3xl text-cyan-300 shrink-0" />
  <div class="text-xs leading-normal">
    Thay vì hỏi chung chung <i>"Anh thấy quán đẹp không?"</i> (dễ nhận lời khen xã giao), hãy dùng <b>Evaluation Scripts (Kịch bản tác vụ)</b> để bắt khách làm thử trong một tình huống giả định cụ thể.
  </div>
</div>

<div class="grid grid-cols-3 gap-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 flex flex-col justify-between h-[210px]">
  <div>
    <div class="font-bold text-xs text-blue-200 mb-1.5 flex items-center gap-1.5">
      <div class="i-carbon:play" /> Đưa Kịch Bản Tác Vụ
    </div>
    <p class="text-[10px] opacity-75 leading-relaxed">
      Dẫn dắt người dùng thực hiện nhiệm vụ cụ thể để quan sát hành vi khách quan.
    </p>
  </div>
  <div class="rounded bg-amber-500/10 border border-amber-500/10 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Ví dụ Quán Cà Phê</div>
    <div class="text-[9px] opacity-85 leading-normal mt-0.5">
      "Bây giờ anh đóng vai người vội đi làm, hãy thử tự mua cà phê mang đi và thanh toán ví điện tử xem mất bao lâu."
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 flex flex-col justify-between h-[210px]">
  <div>
    <div class="font-bold text-xs text-purple-200 mb-1.5 flex items-center gap-1.5">
      <div class="i-carbon:zoom-in-area" /> Săn Thừa / Thiếu Chức Năng
    </div>
    <p class="text-[10px] opacity-75 leading-relaxed">
      Kiểm tra xem hệ thống có dư thừa các bước phụ hay thiếu các luồng cốt lõi.
    </p>
  </div>
  <div class="rounded bg-amber-500/10 border border-amber-500/10 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Ví dụ Quán Cà Phê</div>
    <div class="text-[9px] opacity-85 leading-normal mt-0.5">
      <b>Thiếu:</b> Khách hỏi <i>"Chỗ lấy ống hút ở đâu?"</i>.<br><b>Thừa:</b> Mua ly cà phê mang đi bắt khai báo ngày sinh, địa chỉ nhà!
    </div>
  </div>
</div>

<div class="rounded-xl border border-red-400/20 bg-red-400/5 p-4 flex flex-col justify-between h-[210px]">
  <div>
    <div class="font-bold text-xs text-red-200 mb-1.5 flex items-center gap-1.5">
      <div class="i-carbon:face-activated" /> Quan Sát "Cái Nhíu Mày"
    </div>
    <p class="text-[10px] opacity-75 leading-relaxed">
      Theo dõi phản xạ tự nhiên, di chuyển chuột, điểm khựng lại hoặc <b>cau mày (furrowed brow)</b>.
    </p>
  </div>
  <div class="rounded bg-amber-500/10 border border-amber-500/10 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Ví dụ Quán Cà Phê</div>
    <div class="text-[9px] opacity-85 leading-normal mt-0.5">
      Khách đứng khựng lại trước quầy, mắt đảo liên tục, lông mày nhíu lại → chứng tỏ biển chỉ dẫn rất tối nghĩa, cần sửa ngay! ví dụ thực tế : tìm nút tăng giảm âm thanh trong web xem phim
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 5. Bốn "Nguyên Tắc Vàng" Để Thành Công

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 flex flex-col justify-between h-[185px]">
  <div>
    <div class="flex items-center gap-2 mb-1.5 font-bold text-sm text-blue-300">
      <div class="w-5 h-5 rounded bg-blue-400/10 text-blue-200 flex items-center justify-center text-xs">1</div>
      <span>Không prototype thứ đã hiểu rõ</span>
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Chỉ tập trung tài nguyên vào những phần chưa chắc chắn hoặc có logic phức tạp.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-1">
    <div class="text-[9px] opacity-90 leading-relaxed">
      ☕ Nhà vệ sinh cứ xây bình thường. Chỉ làm mô hình cho <b>Hệ thống robot trả ly tự động</b> — thứ chưa từng làm bao giờ và rất rủi ro.
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 flex flex-col justify-between h-[185px]">
  <div>
    <div class="flex items-center gap-2 mb-1.5 font-bold text-sm text-emerald-300">
      <div class="w-5 h-5 rounded bg-emerald-400/10 text-emerald-200 flex items-center justify-center text-xs">2</div>
      <span>Sử dụng dữ liệu thực tế (Plausible)</span>
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Dữ liệu hiển thị phải hợp lý để tránh làm người xem xao nhãng việc kiểm thử chính.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-1">
    <div class="text-[9px] opacity-90 leading-relaxed">
      ☕ Bảng menu mẫu phải ghi rõ: <i>Cà phê sữa: 35k, Trà đào: 40k</i>. Đừng ghi <i>Món A: X đồng</i> sẽ làm người xem bị tụt cảm xúc.
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 flex flex-col justify-between h-[185px]">
  <div>
    <div class="flex items-center gap-2 mb-1.5 font-bold text-sm text-purple-300">
      <div class="w-5 h-5 rounded bg-purple-400/10 text-purple-200 flex items-center justify-center text-xs">3</div>
      <span>Không bỏ qua đặc tả văn bản</span>
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Bản mẫu không thay thế được SRS. Các logic ngầm định bắt buộc phải viết rõ bằng văn bản.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-1">
    <div class="text-[9px] opacity-90 leading-relaxed">
      ☕ Mô hình 3D chỉ thấy cái ly đẹp chứ không thể hiện được công thức ngầm: <i>bỏ 2 thìa sữa, lắc 3 cái, ủ 5 phút</i>. Bắt buộc phải ghi vào SRS!
    </div>
  </div>
</div>

<div class="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 flex flex-col justify-between h-[185px]">
  <div>
    <div class="flex items-center gap-2 mb-1.5 font-bold text-sm text-amber-300">
      <div class="w-5 h-5 rounded bg-amber-400/10 text-amber-200 flex items-center justify-center text-xs">4</div>
      <span>Xác định số phận prototype</span>
    </div>
    <div class="text-[10px] opacity-80 leading-normal">
      Thống nhất rõ Throwaway hay Evolutionary ngay từ đầu để quản lý kỳ vọng và tài nguyên.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-1">
    <div class="text-[9px] opacity-90 leading-relaxed">
      ☕ Nói thợ: <i>"Mô hình xốp duyệt xong là đập bỏ (Throwaway)"</i> để họ làm rẻ, hoặc <i>"Khung sắt này xây gạch lên luôn (Evolutionary)"</i> để làm kiên cố.
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 6. Các Rủi Ro Và Khó Khăn Khi Thực Hiện

<div class="mt-2 grid grid-cols-2 gap-4">

<div class="rounded-xl border border-red-500/15 bg-red-500/5 p-3 flex flex-col justify-between h-[180px]">
  <div>
    <div class="font-bold text-xs text-red-200 uppercase flex items-center gap-1">
      <div class="i-carbon:warning" /> Áp lực phát hành sớm
    </div>
    <div class="text-[10px] opacity-75 leading-relaxed mt-1">
      Stakeholders lầm tưởng bản mẫu hoạt động tốt là sản phẩm hoàn thiện, ép phát hành khi code bên dưới chưa có gì.
    </div>
  </div>
  <div class="rounded bg-amber-950/20 border border-amber-500/10 p-1.5 mt-1">
    <div class="text-[9px] text-amber-300 italic">
      "Đẹp thế này mai khai trương luôn đi em!" – Quên mất điện nước, móng nhà thật vẫn chưa xây.
    </div>
  </div>
</div>

<div class="rounded-xl border border-amber-500/15 bg-amber-500/5 p-3 flex flex-col justify-between h-[180px]">
  <div>
    <div class="font-bold text-xs text-amber-200 uppercase flex items-center gap-1">
      <div class="i-carbon:zoom-out" /> Bẫy tiểu tiết (Bike-shedding)
    </div>
    <div class="text-[10px] opacity-75 leading-relaxed mt-1">
      Kể cả chuyên gia nghiệp vụ hay người dùng đều dễ sa đà vào các chi tiết trực quan dễ thấy (màu sắc, lỗi chính tả, nhãn chữ) thay vì thẩm định luồng logic cốt lõi.
    </div>
  </div>
  <div class="rounded bg-amber-950/20 border border-amber-500/10 p-1.5 mt-1">
    <div class="text-[9px] text-amber-300 italic">
      Hệ thống cốt lõi cực kỳ phức tạp, nhưng cuộc họp 2 tiếng chỉ để tranh cãi xem nên dùng từ "Số dư" hay "Tiền khả dụng"!
    </div>
  </div>
</div>

<div class="rounded-xl border border-blue-500/15 bg-blue-500/5 p-3 flex flex-col justify-between h-[180px]">
  <div>
    <div class="font-bold text-xs text-blue-200 uppercase flex items-center gap-1">
      <div class="i-carbon:meter-alt" /> Lầm tưởng về hiệu năng
    </div>
    <div class="text-[10px] opacity-75 leading-relaxed mt-1">
      Bản mẫu phản hồi rất nhanh do dùng dữ liệu giả, dễ gây kỳ vọng sai lệch về tốc độ chịu tải của hệ thống thật.
    </div>
  </div>
  <div class="rounded bg-amber-950/20 border border-amber-500/10 p-1.5 mt-1">
    <div class="text-[9px] text-amber-300 italic">
      Pha thử 1 ly cho 1 khách cực nhanh. Ngày khai trương 100 khách ùa vào cùng lúc máy sập nguồn!
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-500/15 bg-purple-500/5 p-3 flex flex-col justify-between h-[180px]">
  <div>
    <div class="font-bold text-xs text-purple-200 uppercase flex items-center gap-1">
      <div class="i-carbon:time-plot" /> Tiếc rẻ, đầu tư quá đà
    </div>
    <div class="text-[10px] opacity-75 leading-relaxed mt-1">
      Tiêu tốn quá nhiều công sức để trau chuốt một bản prototype "bỏ đi" (Throwaway), gây lãng phí tài nguyên.
    </div>
  </div>
  <div class="rounded bg-amber-950/20 border border-amber-500/10 p-1.5 mt-1">
    <div class="text-[9px] text-amber-300 italic">
      Xác định mô hình carton dùng xong bỏ, nhưng tỉ mẩn ngồi sơn phết, mua phụ kiện tí hon dán cả tháng trời.
    </div>
  </div>
</div>

</div>

<div class="mt-3 rounded-lg bg-red-400/5 border border-red-400/10 px-4 py-1.5 text-xs text-red-300 flex items-center gap-2">
  <div class="i-carbon:warning-alt-filled shrink-0" />
  <span><b>Sự phản kháng từ người dùng:</b> Nếu sản phẩm cuối khác xa bản mẫu hoặc thay đổi quá lớn thói quen, khách sẽ từ chối nhận hệ thống.</span>
</div>

---
class: py-10
---

# 7. Kỹ Thuật & Ngữ Cảnh Đặc Biệt

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-blue-300 font-bold text-sm">
      <div class="i-carbon:face-cool" />
      <span>Kỹ thuật "Wizard of Oz"</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Áp dụng cho các hệ thống phần cứng phức tạp. Nhóm phát triển tạo vỏ mô hình bên ngoài, còn xử lý logic bên trong do <b>một người thật</b> ngồi thực hiện thủ công để phản hồi thao tác.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">👟 Case Study Zappos (Giày Online)</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Tạo web đăng bán giày. Khi khách đặt, nhà sáng lập <b>tự chạy ra tiệm giày mua lẻ</b> rồi mang ra bưu điện gửi. Khách lầm tưởng hệ thống kho hàng tự động cực khủng phía sau!
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-emerald-300 font-bold text-sm">
      <div class="i-carbon:enterprise" />
      <span>Trong Outsourcing (Thuê ngoài)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Bản mẫu dùng để chứng minh cách hiểu yêu cầu của nhà cung cấp, tạo điểm tiếp xúc thường xuyên để điều chỉnh hướng đi sớm.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Thuê Thầu Phụ Xây Quán</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Thuê thợ làm trước một <b>Phòng mẫu (Mock-up room) 10m²</b>. Bạn đến sờ thử chất lượng sơn, góc cạnh. Đạt yêu cầu mới cho xây tiếp cả quán.
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-purple-300 font-bold text-sm">
      <div class="i-carbon:chip" />
      <span>Hệ Thống Nhúng (Embedded)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Sử dụng mô phỏng (Simulations) phần mềm để tối ưu hóa hiển thị giao diện, tương tác mạng trước khi lắp ráp thiết bị vật lý thật.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Thiết Bị Rang Xay App</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Rang máy kết nối App tự báo khi hết hạt. Dùng phần mềm mô phỏng trên PC để test kết nối trước khi cắm điện thật, tránh cháy nổ máy xay!
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 8. Bản Mẫu Trong Outsourcing -- Pháp Lý & Lòng Tin

<div class="text-xs opacity-80 mb-3">
Dự án nào cũng cần bản mẫu để <b>tránh làm sai kỹ thuật</b>. Nhưng riêng trong Outsourcing, bản mẫu là bắt buộc để <b>tránh kiện tụng pháp lý và quản trị rủi ro tài chính</b>:
</div>

<div class="grid grid-cols-3 gap-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-blue-300 font-bold text-sm">
      <div class="i-carbon:document-security" />
      <span>1. Vật chứng Pháp lý (Appendix)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Tài liệu yêu cầu chữ (SRS) luôn mơ hồ (ví dụ: "giao diện hiện đại"). Bản mẫu được ký duyệt là phụ lục hợp đồng pháp lý. Mọi thay đổi phát sinh ngoài bản mẫu sẽ tính phí (Change Request).
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Ký duyệt bản vẽ 3D</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Ký duyệt bản phối cảnh 3D trước khi ký gói thầu 2 tỷ. Tránh việc xây xong chủ nhà bắt đập đi vì không đúng gu Nhật Bản/châu Âu.
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-emerald-300 font-bold text-sm">
      <div class="i-carbon:checkpoint" />
      <span>2. Điểm neo Nghiệm thu</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Sử dụng bản mẫu như một cột mốc (Phase Gate) nghiệm thu từng phần để giải ngân. Bảo vệ nhà thầu khỏi việc khách đổi ý liên tục, và bảo vệ khách khỏi sản phẩm lỗi.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Xây thử "Phòng Mẫu"</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Bắt thầu phụ xây thử phòng mẫu rộng 10m². Nghiệm thu gạch ốp, nước sơn tường đạt chuẩn mới cho xây hàng loạt căn hộ còn lại.
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 flex flex-col justify-between h-[280px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-purple-300 font-bold text-sm">
      <div class="i-carbon:network-3" />
      <span>3. Cầu nối Lòng tin (Trust)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      Outsourcing thường gặp rào cản lòng tin ban đầu thấp (low trust), lệch múi giờ/ngôn ngữ. Bản mẫu bàn giao sớm ngay tuần đầu tiên là minh chứng thực tế của năng lực.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Nhìn thấy thợ làm thật</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Chủ đầu tư luôn lo lắng thầu phụ lấy tiền rồi biến mất hoặc làm ẩu. Nhìn thấy phòng mẫu hoàn thiện tinh xảo giúp giải tỏa hoàn toàn nghi ngờ!
    </div>
  </div>
</div>

</div>

---
class: py-10
---

# 9. PoC, Prototype & MVP Trong Outsourcing -- Phân Biệt Để Tránh Rủi Ro

<div class="text-xs opacity-80 mb-4">
Hiểu sai ba khái niệm này trong hợp đồng Outsourcing là nguyên nhân hàng đầu dẫn đến <b>tranh chấp tài chính</b> và <b>bể tiến độ</b>:
</div>

<div class="grid grid-cols-3 gap-4">

<div class="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4 flex flex-col justify-between h-[285px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-blue-300 font-bold text-sm">
      <div class="i-carbon:document-preliminary" />
      <span>1. Proof of Concept (PoC)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      <b>Mục tiêu: Đấu thầu & Chứng minh năng lực (Pre-sales).</b><br>
      Khách hàng yêu cầu Vendor viết một đoạn code thô để chứng minh khả năng giải quyết một bài toán kỹ thuật cực khó (ví dụ: AI nhận diện biển số xe) trước khi đặt bút ký hợp đồng chính thức.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Thử máy pha siêu âm</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Cắm điện chạy thử chiếc máy pha công nghệ mới xem dòng điện của mặt bằng có bị quá tải không trước khi ký hợp đồng thuê nhà dài hạn.
    </div>
  </div>
</div>

<div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 flex flex-col justify-between h-[285px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-emerald-300 font-bold text-sm">
      <div class="i-carbon:pedestrian-child" />
      <span>2. Prototype (Bản mẫu)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      <b>Mục tiêu: Làm rõ yêu cầu & Đóng băng thiết kế (Sign-off).</b><br>
      Vendor dựng giao diện Figma tương tác thô để khách hàng ký duyệt làm phụ lục hợp đồng. Mọi yêu cầu sửa đổi phát sinh sau khi ký duyệt sẽ được tính là yêu cầu thay đổi có phí (Change Request).
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Ký duyệt bản vẽ phối cảnh 3D</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Chốt vị trí quầy bar và bàn ghế trên giấy. Sau này xây xong, chủ quán đòi dời quầy bar sang góc khác thì phải trả thêm tiền sửa chữa.
    </div>
  </div>
</div>

<div class="rounded-xl border border-purple-400/20 bg-purple-400/5 p-4 flex flex-col justify-between h-[285px]">
  <div>
    <div class="flex items-center gap-2 mb-2 text-purple-300 font-bold text-sm">
      <div class="i-carbon:rocket" />
      <span>3. MVP (Sản phẩm tối thiểu)</span>
    </div>
    <div class="text-[10px] opacity-85 leading-normal">
      <b>Mục tiêu: Bàn giao Giai đoạn 1 & Chạy thử thị trường.</b><br>
      Vendor bàn giao sản phẩm code thật chạy được với các tính năng cốt lõi nhất (ví dụ: Đặt hàng, Thanh toán thô) để khách hàng tung ra thị trường lấy phản hồi thực tế từ người dùng cuối.
    </div>
  </div>
  <div class="rounded border border-amber-500/10 bg-amber-950/20 p-2 mt-2">
    <div class="text-[9px] font-bold text-amber-300">☕ Mở xe đẩy cafe vỉa hè</div>
    <div class="text-[9px] opacity-80 leading-normal mt-0.5">
      Bán thử cà phê mang đi (đen/sữa) để đo lường lượng khách thực tế trước khi đổ 2 tỷ đồng xây quán lớn 3 tầng sang trọng.
    </div>
  </div>
</div>

</div>

---

layout: center
class: text-center
---

# KẾT LUẬN

<div class="max-w-xl mx-auto text-center mt-6">

<div class="text-lg text-emerald-300 font-bold mb-4">
  Prototyping không chỉ là vẽ giao diện, đó là chiến lược quản trị rủi ro phần mềm!
</div>

<div class="space-y-3 text-sm opacity-90 leading-relaxed text-slate-300">
  <div>🎯 <b>Cốt lõi:</b> Biến yêu cầu trừu tượng thành dạng hữu hình để nhanh chóng đồng bộ hóa tư duy giữa khách hàng, thiết kế và đội ngũ phát triển.</div>
  <div>☕ <b>Triết lý Quán Cà Phê:</b> Thử sai trên một mô hình nhỏ luôn rẻ hơn rất nhiều so với việc đập đi xây lại một hệ thống thật!</div>
</div>

<div class="mt-8 text-cyan-400 font-mono text-xl animate-pulse">
  Questions & Answers
</div>

</div>
