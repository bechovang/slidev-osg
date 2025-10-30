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

# NHÓM THỰC HIỆN

<div class="grid grid-cols-3 gap-8 mt-8">
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=11" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">[Họ Tên 1]</div>
    <div class="text-gray-500">MSSV: [xxxxxxxxx]</div>
  </div>
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=22" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">[Họ Tên 2]</div>
    <div class="text-gray-500">MSSV: [xxxxxxxxx]</div>
  </div>
  <div class="flex flex-col items-center">
    <img src="https://i.pravatar.cc/240?img=33" alt="Avatar" class="w-28 h-28 rounded-full object-cover shadow-lg"/>
    <div class="mt-3 text-lg font-bold">[Họ Tên 3]</div>
    <div class="text-gray-500">MSSV: [xxxxxxxxx]</div>
  </div>
</div>

---
layout: two-cols-header
transition: zoom-in
---

## Nếu được chọn, bạn sẽ là sinh viên của trường nào?

::left::

<figure>
  <img src="/images/thuvienlonxon.png" alt="Thư viện lộn xộn" class="rounded-lg shadow-md" style="width: 520px; height: 320px; object-fit: cover;"/>
  <figcaption class="text-center mt-2 opacity-80">Thư viện Trường V</figcaption>
</figure>

::right::

<figure>
  <img src="/images/thuviengongang.png" alt="Thư viện F hiện đại" class="rounded-lg shadow-md" style="width: 520px; height: 320px; object-fit: cover;"/>
  <figcaption class="text-center mt-2 opacity-80">Thư viện Trường F</figcaption>
</figure>
---
layout: default
transition: fade
---

# Giờ hãy cùng tìm hiểu 4 khái niệm cơ bản trong File System

<div class="opacity-80">FILE • DIRECTORY • METADATA • BLOCK</div>

---
layout: default
transition: fade
---

# Hãy tưởng tượng: Sắp Xếp Sách = File System

<div class="opacity-80">Một thư viện đại diện cho cách hệ điều hành tổ chức và lưu trữ dữ liệu.</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click="1" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-book text-3xl"></div>
    <div class="mt-2 font-bold text-xl">FILE</div>
    <div class="opacity-80">Như những "cuốn sách" chứa nội dung.</div>
  </div>
  <div v-click="2" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-folder text-3xl"></div>
    <div class="mt-2 font-bold text-xl">DIRECTORY (Thư mục)</div>
    <div class="opacity-80">Như những "kệ sách" để sắp xếp và định vị.</div>
  </div>
  <div v-click="3" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-tag text-3xl"></div>
    <div class="mt-2 font-bold text-xl">METADATA (Siêu dữ liệu)</div>
    <div class="opacity-80">"Tag" dán trên sách (tác giả, thể loại, vị trí...).</div>
  </div>
  <div v-click="4" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-cube text-3xl"></div>
    <div class="mt-2 font-bold text-xl">BLOCK</div>
    <div class="opacity-80">Ổ đĩa chia sách thành các "hộp" nhỏ để lưu trữ.</div>
  </div>
</div>

---
transition: fade
layout: two-cols
---

# File System Architectures là gì?

Nếu **File System** là một "Người Quản Lý Kho" cho dữ liệu của bạn...

...thì **File System Architectures** chính là **phong cách làm việc** và **bộ quy tắc** mà người quản lý đó tuân theo.

Mỗi phong cách có ưu và nhược điểm riêng, được tối ưu cho những "nhà kho" (hệ điều hành) khác nhau.

::right::

<br>
<div class="text-center">
<p class="font-bold text-xl">3 "File System Architectures" nổi tiếng nhất</p>
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
<p class="opacity-70">Đại diện của sự đơn giản và tương thích</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Điểm mạnh:</p>
  <ul>
    <li><strong>Siêu đơn giản:</strong> Cấu trúc dễ hiểu.</li>
    <li><strong>Tương thích tuyệt đối:</strong> "Nói" được mọi ngôn ngữ: Windows, macOS, Linux, TV, Máy ảnh...</li>
  </ul>

  <br>

  <p class="font-bold text-red-500">❌ Điểm yếu:</p>
  <ul>
    <li>Dễ bừa bộn, hiệu suất kém (phân mảnh).</li>
    <li>Không lưu được file lớn hơn 4GB.</li>
    <li>Bảo mật gần như bằng không.</li>
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
<p class="opacity-70">Nền tảng vững chắc của Windows</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Điểm mạnh:</p>
  <ul>
    <li><strong>Bảo mật vượt trội:</strong> Phân quyền chi tiết cho từng người dùng (ACLs).</li>
    <li><strong>An toàn dữ liệu:</strong> Có "nhật ký" (Journaling) chống mất điện đột ngột.</li>
    <li><strong>Hiện đại & Mạnh mẽ:</strong> Hỗ trợ file và ổ cứng siêu lớn, nén, mã hóa...</li>
  </ul>

  <br>

  <p class="font-bold text-red-500">❌ Điểm yếu:</p>
  <ul>
    <li>"Khó tính" với các hệ điều hành khác (Linux/macOS chỉ đọc, khó ghi).</li>
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
<p class="opacity-70">Chuẩn mực cho thế giới Linux</p>

<div class="mt-8">
  <p class="font-bold text-green-500">✔️ Điểm mạnh:</p>
  <ul>
    <li><strong>Tốc độ tối ưu:</strong> Sắp xếp file lớn thông minh (Extents) giúp truy xuất cực nhanh.</li>
    <li><strong>Đáng tin cậy:</strong> Có "nhật ký" an toàn, ổn định.</li>
    <li><strong>Linh hoạt & Mã nguồn mở:</strong> Được cộng đồng liên tục cải tiến.</li>
  </ul>
  
  <br>

  <p class="font-bold text-red-500">❌ Điểm yếu:</p>
  <ul>
    <li>Windows không "hiểu" được cách tổ chức của nhà xưởng này.</li>
  </ul>

</div>

::right::

<div class="flex flex-col items-center justify-center h-full">
  <div class="i-carbon-catalog text-9xl text-orange-500"></div>
</div>

---
layout: default
---

# Đặt Lên Bàn Cân

| Tiêu chí | **FAT32**| **NTFS**| **ext4**|
| :--- | :---: | :---: | :---: |
| **Tương thích** | ⭐⭐⭐ (Tuyệt vời) | ⭐ (Kém) | ⭐ (Kém) |
| **Bảo mật** | ⭐ (Rất kém) | ⭐⭐⭐ (Tuyệt vời) | ⭐⭐ (Tốt) |
| **Hiệu suất** | ⭐ (Thấp) | ⭐⭐ (Tốt) | ⭐⭐⭐ (Rất nhanh) |
| **Hệ điều hành** | Mọi thiết bị | **Windows** | **Linux** |


---

# Phương Pháp Cấp Phát
### "Xếp Hàng" Lên Kệ Ổ Cứng Như Thế Nào?

Khi có một **lô hàng** (file) mới, **người quản lý kho** (Hệ điều hành) phải quyết định:

<br>

<p class="text-3xl text-center">
  Xếp các thùng hàng lên kệ ra sao?
</p>

<br>

Hãy cùng khám phá 3 chiến lược xếp hàng kinh điển!

<!-- 
Đây là slide giới thiệu vấn đề.
-->




---
layout: default
transition: fade
---

## 1. Contiguous

<p class="text-center opacity-80">Cấp phát liên tục: Tìm một dãy kệ dài và trống, xếp toàn bộ lô hàng vào đó. (toàn bộ dữ liệu của file được đặt liền nhau trên đĩa).</p>

<figure>
  <img src="/images/contiguous.jpg" alt="Contiguous Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Contiguous Allocation</figcaption>
</figure>




---
layout: two-cols-header
---

# 1. Cấp phát Liên tục (Contiguous)

## <span class="i-ph-books-duotone inline-block"></span> "Tìm một dãy kệ dài và trống, xếp toàn bộ lô hàng vào đó."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Ưu điểm:</p>
<ul>
  <li v-click><strong>Lấy hàng SIÊU NHANH:</strong> Chỉ cần đến đầu kệ rồi đi thẳng một mạch là xong. (vì nó xếp liên tiếp)</li>
  <li v-click><strong>Dễ tìm kiếm:</strong> Tìm thùng thứ n rất nhanh.</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Nhược điểm:</p>
<ul>
  <li v-click><strong>Khó tìm chỗ:</strong> Khó có dãy kệ trống đủ dài.</li>
  <li v-click><strong>Lãng phí không gian:</strong> Các khoảng trống nhỏ lẻ bị bỏ phí (phân mảnh ngoài). </li>
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

<p class="text-center opacity-80">Cấp phát nối kết: Xếp mỗi thùng vào một kệ trống, trên thùng ghi địa chỉ thùng tiếp theo. (mỗi khối dữ liệu chứa con trỏ tới khối tiếp theo).</p>

<figure>
  <img src="/images/linked.jpg" alt="Linked Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Linked Allocation</figcaption>
</figure>


---
layout: two-cols-header
---

# 2. Cấp phát Nối kết (Linked)

## <span class="i-ph-link-bold inline-block"></span> "Xếp mỗi thùng vào một kệ trống, trên thùng ghi địa chỉ thùng tiếp theo."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Ưu điểm:</p>
<ul>
  <li v-click><strong>Linh hoạt:</strong> Tận dụng được mọi kệ trống.</li>
  <li v-click><strong>Dễ thêm hàng:</strong> Cứ tìm kệ trống rồi nối vào "chuỗi".</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Nhược điểm:</p>
<ul>
  <li v-click><strong>Lấy hàng RẤT CHẬM:</strong> Phải đi lần lượt qua từng thùng để đọc "chỉ đường" (muốn đến block 100 có thể phải duyệt 99 lần).</li>
  <li v-click><strong>Rủi ro cao:</strong> Mất một "chỉ dẫn" là mất hết phần hàng còn lại.</li>
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

<p class="text-center opacity-80">Cấp phát theo chỉ mục: Xếp rải rác, nhưng tạo một tờ 'Phiếu Mục Lục' riêng ghi lại tất cả địa chỉ (mỗi file có một khối chỉ mục liệt kê địa chỉ các khối dữ liệu).</p>

<figure>
  <img src="/images/indexed.jpg" alt="Indexed Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 50vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Indexed Allocation: Phiếu mục lục trỏ đến các khối dữ liệu</figcaption>
</figure>


---
layout: two-cols-header
---

# 3. Cấp phát theo Chỉ mục (Indexed)

## <span class="i-ph-list-bullets-bold inline-block"></span> "Xếp rải rác, nhưng tạo một tờ 'Phiếu Mục Lục' riêng ghi lại tất cả địa chỉ."

<br>

<div grid="~ cols-2 gap-4">
<div>
<p class="font-bold text-green-500">✔️ Ưu điểm:</p>
<ul>
  <li v-click><strong>Vừa nhanh vừa linh hoạt:</strong> Muốn tìm thùng nào, chỉ cần tra "mục lục".</li>
  <li v-click>Vẫn tận dụng tốt không gian như cách Nối kết.</li>
</ul>
</div>
<div>
<p class="font-bold text-red-500">❌ Nhược điểm:</p>
<ul>
  <li v-click><strong>Hơi tốn kém:</strong> Lãng phí nguyên một "khối mục lục" cho các file rất nhỏ.</li>
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

# Lập Lịch Cho Đĩa

<p class="opacity-80 text-lg">Chiến Lược Di Chuyển Của "Thang Máy" Ổ Cứng</p>

<div class="mt-4 grid grid-cols-2 gap-6 items-center">
  <div>
    <v-clicks>
      <ul class="list-disc pl-5">
        <li>Tưởng tượng ổ cứng là một <b>tòa nhà</b>, các yêu cầu dữ liệu là <b>những người đợi ở các tầng</b>.</li>
        <li>"<b>Đầu đọc/ghi</b>" chính là chiếc <b>thang máy</b>.</li>
        <li>Vấn đề: Thang máy nên di chuyển <b>thế nào</b> để phục vụ mọi người <b>nhanh</b> và <b>tốn ít công</b> nhất?</li>
        <li>Đây chính là bài toán <b>Lập lịch I/O</b> cho đĩa.</li>
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

## Tình huống thực tế

<div class="opacity-80">Tòa nhà 200 tầng (0–199). Thang máy đang ở <b>tầng 53</b>. Khách đợi tại: <b>98, 183, 37, 122, 14, 124, 65, 67</b>.</div>

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

<div class="mt-4 opacity-80">Nhiệm vụ: tìm chiến lược di chuyển <b>tốt nhất</b> cho thang máy. Sẽ so sánh 4 chiến lược…</div>

---
layout: default
transition: slide-left
---

## FCFS — "Ai gọi trước, đón trước!"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Hoạt động: Phục vụ đúng <b>thứ tự đến</b>.</li>
  <li class="opacity-80">Ưu điểm: <b>Công bằng</b>, không ai bị bỏ rơi.</li>
  <li class="opacity-80">Nhược điểm: <b>Không hiệu quả</b>, đường đi ngoằn ngoèo.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Kết quả ví dụ</b>: Tổng quãng đường ≈ <b>640 tầng</b> 😱</div>
<div v-click class="mt-2 text-sm opacity-80">Lộ trình: 53 → 98 → 183 → 37 → 122 → 14 → 124 → 65 → 67</div>
<figure v-click class="mt-4">
  <img src="/images/FCFS.jpg" alt="FCFS Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">FCFS: lộ trình minh họa</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## SSTF — "Ai ở gần nhất, đón trước!"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Hoạt động: Luôn chọn yêu cầu <b>gần nhất</b> so với vị trí hiện tại.</li>
  <li class="opacity-80">Ưu điểm: <b>Giảm đáng kể</b> quãng đường di chuyển.</li>
  <li class="opacity-80">Nhược điểm: Có thể gây <b>starvation</b> ở vùng xa.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Kết quả ví dụ</b>: Tổng quãng đường ≈ <b>236 tầng</b> 👍</div>
<div v-click class="mt-2 text-sm opacity-80">Một lộ trình khả dĩ: 53 → 65 → 67 → 37 → 14 → 98 → 122 → 124 → 183</div>

<figure v-click class="mt-4">
  <img src="/images/SSTF.jpg" alt="SSTF Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">SSTF: lộ trình minh họa</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## SCAN — "Thuật toán Thang Máy"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Hoạt động: Đi <b>một hướng</b>, phục vụ tất cả yêu cầu trên đường; đến cuối thì <b>đảo chiều</b>.</li>
  <li class="opacity-80">Ưu điểm: <b>Công bằng</b> hơn SSTF, giảm bỏ rơi.</li>
  <li class="opacity-80">Nhược điểm: Hơi thiên vị các tầng giữa.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Kết quả ví dụ</b>: Tổng quãng đường ≈ <b>331 tầng</b>.</div>
<div v-click class="mt-2 text-sm opacity-80">Lộ trình: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 37 → 14</div>

<figure v-click class="mt-4">
  <img src="/images/SCAN.jpg" alt="SCAN Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">SCAN: lộ trình minh họa</figcaption>
</figure>

---
layout: default
transition: slide-left
---

## C-SCAN — "Thang máy một chiều"

<v-clicks>
<ul class="list-disc pl-5">
  <li>Hoạt động: Chỉ đi <b>một chiều</b> (ví dụ: đi lên). Đến đỉnh <b>nhảy về 0</b> (không phục vụ) rồi đi lên lại.</li>
  <li class="opacity-80">Ưu điểm: Thời gian chờ <b>đồng đều</b> hơn.</li>
  <li class="opacity-80">Nhược điểm: Có <b>chuyển động lớn</b> không phục vụ.</li>
</ul>
</v-clicks>

<div v-click class="mt-4 text-sm opacity-80"><b>Kết quả ví dụ</b>: Tổng quãng đường ≈ <b>382 tầng</b>.</div>
<div v-click class="mt-2 text-sm opacity-80">Lộ trình: 53 → 65 → 67 → 98 → 122 → 124 → 183 → 199 → 0 → 14 → 37</div>

<figure v-click class="mt-4">
  <img src="/images/C-SCAN.jpg" alt="C-SCAN Route" class="rounded-lg shadow mx-auto" style="max-width:min(70vw,720px); max-height:36vh; width:auto; height:auto; object-fit:contain;"/>
  <figcaption class="text-center mt-2 opacity-70">C-SCAN: lộ trình minh họa</figcaption>
</figure>

---
layout: default
transition: fade
---

## Chiến Lược Nào Tốt Nhất?

<div class="overflow-x-auto mt-3">
  <table class="w-full text-left border-separate border-spacing-y-2">
    <thead class="text-sm opacity-70">
      <tr>
        <th class="px-3">Thuật toán</th>
        <th class="px-3">Tổng quãng đường</th>
        <th class="px-3">Tính công bằng</th>
        <th class="px-3">Ghi chú</th>
      </tr>
    </thead>
    <tbody>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">FCFS</td>
        <td class="px-3 py-2">640 (Tệ nhất 👎)</td>
        <td class="px-3 py-2">⭐⭐⭐</td>
        <td class="px-3 py-2">Đơn giản nhưng không hiệu quả</td>
      </tr>
      <tr v-click class="bg-emerald/10">
        <td class="px-3 py-2 font-medium">SSTF</td>
        <td class="px-3 py-2">236 (Tốt nhất 👍)</td>
        <td class="px-3 py-2">⭐</td>
        <td class="px-3 py-2">Nhanh nhưng có thể bỏ rơi</td>
      </tr>
      <tr v-click class="bg-sky/10">
        <td class="px-3 py-2 font-medium">SCAN</td>
        <td class="px-3 py-2">331</td>
        <td class="px-3 py-2">⭐⭐</td>
        <td class="px-3 py-2">Cân bằng tốt, giống thang máy thật</td>
      </tr>
      <tr v-click class="bg-indigo/10">
        <td class="px-3 py-2 font-medium">C-SCAN</td>
        <td class="px-3 py-2">382</td>
        <td class="px-3 py-2">⭐⭐⭐</td>
        <td class="px-3 py-2">Chờ đồng đều, có nhảy không phục vụ</td>
      </tr>
    </tbody>
  </table>
</div>

<div v-click class="mt-3 p-3 rounded border border-gray-200/70 bg-white/60 dark:bg-white/5">
  <div class="font-bold mb-1">Kết luận</div>
  <div class="opacity-80 text-sm">Trong thực tế, các biến thể như <b>LOOK</b> và <b>C-LOOK</b> thường được dùng vì cân bằng tốt giữa hiệu suất và công bằng.</div>
</div>

<!-- ============================================End Disk Scheduling block -->

<!-- =============================CASE STUDY-->
---
layout: default
---
# Case Study: Đi Sâu Vào NTFS
### "Thư Viện Số Siêu Cấp" Của Windows

<div class="grid grid-cols-2 gap-8 items-center">
<div>
<p v-click>
Tại sao NTFS ra đời? Để thay thế "người tiền nhiệm" <strong>FAT</strong> đã cũ kỹ và yếu ớt.
</p>
<p v-click class="mt-4">
<strong>Mục tiêu:</strong> Xây dựng một nền tảng lưu trữ <strong>Mạnh Mẽ</strong>, <strong>An Toàn</strong>, và <strong>Linh Hoạt</strong> cho môi trường doanh nghiệp.
</p>
<p v-click class="mt-4">
Ngày nay, NTFS là hệ thống file mặc định, không thể thiếu trên mọi máy tính Windows.
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

# Kiến Trúc Cốt Lõi: Master File Table (MFT)
### "Cuốn Sổ Cái Toàn Năng" của Thư Viện

<div v-click class="p-4 rounded bg-gray-500/10 text-center">
Triết lý thiết kế: <strong class="text-green-500">"Mọi thứ trên ổ đĩa đều là một file"</strong> — ngay cả chính MFT!
</div>

<div v-click class="mt-8 text-center">
  <p>MFT về bản chất là một <strong>cơ sở dữ liệu</strong>, chứa một <strong>"hồ sơ" (record)</strong> cho TẤT CẢ các file và thư mục.</p>
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

# Bên Trong MFT: Mỗi File Là Một "Tấm Thẻ Mục Lục"

Mỗi "hồ sơ" (MFT Record) chứa tất cả **Thuộc tính (Attributes)** của file.

<v-clicks>

- **`$FILE_NAME`**: Tên file, tất nhiên rồi!
- **`$STANDARD_INFORMATION`**: Ngày tạo, chủ sở hữu, quyền truy cập...
- ... và nhiều thuộc tính khác.
- Quan trọng nhất là **`$DATA`**, nơi chứa dữ liệu của file... hoặc "địa chỉ" của nó.

</v-clicks>

::right::

<div class="p-4 rounded bg-gray-500/10 shadow-md">
<p class="font-bold text-center">Ví dụ về một MFT Record</p>
<div class="mt-4 font-mono text-sm space-y-2">
  <p><strong>Record Header</strong>: [Thông tin quản lý]</p>
  <p><strong>Attr: $STANDARD_INFO</strong>: { Timestamps, Owner... }</p>
  <p><strong>Attr: $FILE_NAME</strong>: "baocao.docx"</p>
  <p class="p-2 bg-blue-500/20 rounded"><strong>Attr: $DATA</strong>: { ...Nội dung hoặc Con trỏ... }</p>
  <p><strong>Attr: $SECURITY_DESCRIPTOR</strong>: { ACLs... }</p>
</div>
</div>

---
layout: two-cols-header
---

# Tối Ưu Tốc Độ: "Nội Trú" vs "Ngoại Trú"

::left::

### <span class="i-carbon-home inline-block"></span> Dữ Liệu Nội Trú (Resident)
<p class="opacity-70">"Nội dung được ghi thẳng lên thẻ"</p>
<div v-click>
<p>Với file <strong>siêu nhỏ</strong> (vài dòng text), NTFS lưu luôn dữ liệu <strong>bên trong MFT record</strong>.</p>
<p class="mt-4 font-bold text-green-500">➡️ Truy cập cực nhanh, không cần phải "vào kho" tìm kiếm!</p>
    </div>

::right::

### <span class="i-carbon-building inline-block"></span> Dữ Liệu Ngoại Trú (Non-resident)
<p class="opacity-70">"Thẻ chỉ ghi địa chỉ trong kho"</p>
<div v-click>
<p>Với file <strong>lớn</strong>, MFT record chỉ lưu <strong>"địa chỉ"</strong> nơi dữ liệu thực sự được cất giữ trên đĩa.</p>
<p class="mt-4 font-bold">➡️ Đây là cách hoạt động thông thường.</p>
  </div>

---
layout: two-cols-header
---

# Tính Năng #1: Journaling - "Sổ Ghi Chép An Toàn"

<p v-click><strong>Vấn đề:</strong> Điều gì xảy ra nếu mất điện khi đang lưu file?</p>
<p v-click><strong>Giải pháp của NTFS:</strong> Trước khi thực hiện bất kỳ thay đổi nào, nó sẽ ghi "ý định" vào một cuốn sổ nhật ký đặc biệt (`$LogFile`).</p>
<p v-click class="font-bold text-green-500 mt-4">Lợi ích: Lỡ bị mất điện thì Khi có điện lại, hệ thống chỉ cần đọc lại sổ nhật ký để hoàn thành nốt việc đang dang dở hoặc hủy bỏ. Đảm bảo dữ liệu luôn nhất quán!</p>

::right::

<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold text-center">Luồng Hoạt Động An Toàn</p>
  <ol class="mt-4 space-y-4 text-center">
    <li>Ứng dụng yêu cầu Ghi file</li>
    <div class="i-carbon-arrow-down mx-auto text-2xl"></div>
    <li>Ghi vào <span class="font-mono text-blue-500">Nhật Ký ($LogFile)</span></li>
  <div class="relative">
      <div class="i-carbon-arrow-down mx-auto text-2xl"></div>
      <div v-click class="i-carbon-flash-filled absolute text-3xl text-yellow-400 -right-2 top-0 animate-ping"></div>
    </div>
    <li>Ghi vào Đĩa (Vị trí thật)</li>
  </ol>
</div>

---
layout: two-cols-header
---

# Tính Năng #2: Security - "Thẻ Thư Viện Phân Quyền"

**Access Control Lists (ACLs):** Cho phép thiết lập quyền truy cập cực kỳ chi tiết.

<v-clicks>

- Vượt xa mô hình 3 lớp đơn giản (owner, group, other) của Linux.
- Có thể gán quyền (Đọc, Ghi, Xóa,...) cho **từng người dùng** hoặc **từng nhóm** trên **từng file/thư mục**.
- **Quy tắc vàng:** Một lệnh <span class="text-red-500 font-bold">Từ chối (Deny)</span> luôn mạnh hơn mọi lệnh <span class="text-green-500 font-bold">Cho phép (Allow)</span>.

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

# Các "Siêu Năng Lực" Khác

<div class="grid grid-cols-3 gap-8 mt-8 text-center">
<div v-click>
  <div class="i-carbon-camera text-6xl"></div>
  <h3 class="font-bold mt-2">Volume Shadow Copy (VSS)</h3>
  <p class="text-sm opacity-80">Tạo "ảnh chụp" tức thời của ổ đĩa để sao lưu an toàn. Nền tảng của System Restore.</p>
  </div>
<div v-click>
  <div class="i-carbon-locked text-6xl"></div>
  <h3 class="font-bold mt-2">Encryption (EFS)</h3>
  <p class="text-sm opacity-80">Mã hóa file/thư mục. Chỉ người dùng có "chìa khóa" mới có thể đọc được dữ liệu.</p>
  </div>
<div v-click>
  <div class="i-carbon-arrows-vertical text-6xl"></div>
  <h3 class="font-bold mt-2">Compression</h3>
  <p class="text-sm opacity-80">Tự động nén dữ liệu một cách "vô hình" để tiết kiệm dung lượng ổ đĩa.</p>
  </div>
</div>


---
layout: two-cols-header
---

# Tổng Kết: NTFS Dưới Kính Lúp

::left::

### <span class="i-carbon-checkmark-outline inline-block text-green-500"></span> Ưu điểm

<ul>
  <li v-click><strong>Độ tin cậy cao</strong> (nhờ Journaling).</li>
  <li v-click><strong>Bảo mật mạnh mẽ</strong> (nhờ ACLs).</li>
  <li v-click><strong>Hiệu năng linh hoạt</strong> (xử lý tốt file nhỏ và lớn).</li>
  <li v-click><strong>Bộ tính năng doanh nghiệp</strong> phong phú.</li>
</ul>

::right::

### <span class="i-carbon-close-outline inline-block text-red-500"></span> Nhược điểm

<ul>
  <li v-click><strong>Phức tạp:</strong> Cấu trúc MFT tạo ra nhiều overhead (dữ liệu quản lý).</li>
  <li v-click class="font-bold text-red-400"><strong>Tương thích kém:</strong> Đây là điểm yếu lớn nhất. Linux & macOS đọc thì dễ, nhưng ghi dữ liệu một cách ổn định thì rất khó khăn.</li>
</ul>



---
layout: section
---

# 4. Thảo Luận & Nhìn Về Tương Lai

---
layout: default
---

# Những Gì Chúng Ta Đã Thấy: Sự Đánh Đổi
### Không có giải pháp nào là hoàn hảo!

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5pbHBvenhzaDJxOHE2Zm4zY3UzMGJpY3ZoeGVndndibzNhNm9ldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kjhkPCFKyGaj6cOSZR/giphy.gif" alt="Elevator" class="rounded-lg shadow mx-auto" style="max-width:min(90vw,720px); max-height:50vh; object-fit:contain;"/>
</div>

<div class="space-y-4">
<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold">Journaling (Ghi nhật ký)</p>
  <p class="text-sm opacity-80">Đánh đổi <span class="text-green-500">Độ tin cậy</span> lấy một chút <span class="text-red-500">Hiệu năng</span> (vì phải ghi nhiều hơn).</p>
</div>

<div v-click class="p-4 rounded bg-gray-500/10">
  <p class="font-bold">Phương pháp cấp phát</p>
  <p class="text-sm opacity-80">Đánh đổi giữa <span class="text-green-500">Tốc độ truy cập</span> (Liên tục) và <span class="text-blue-500">Sự linh hoạt</span> (Chỉ mục).</p>
</div>
</div>
</div>

<p v-click class="text-center mt-8 text-xl opacity-80">
Việc lựa chọn thiết kế hệ thống file luôn là một sự cân bằng tinh tế giữa các yếu tố.
</p>

---
layout: two-cols-header
---

# Cú Sốc Mang Tên SSD
### Luật chơi đã thay đổi hoàn toàn

::left::
</br>

### <span class="i-carbon-data-base inline-block"></span> HDD (Ổ đĩa cơ)

<div class="p-4 rounded bg-gray-500/10 mt-4">
  <ul class="list-disc pl-5">
    <li><strong>Thế giới cơ học:</strong> Có đầu đọc vật lý di chuyển.</li>
    <li><strong>Thời gian tìm kiếm (seek time)</strong> là kẻ thù số một.</li>
    <li><strong>Thuật toán Thang máy (SCAN)</strong> là "Vua" để tối ưu hóa đường đi.</li>
  </ul>
</div>

::right::

### <span class="i-carbon-chip inline-block"></span> SSD (Ổ đĩa thể rắn)

<div class="p-4 rounded bg-blue-500/10 mt-4">
  <ul class="list-disc pl-5">
    <li><strong>Thế giới điện tử:</strong> Không có bộ phận chuyển động.</li>
    <li>Truy cập mọi vị trí <strong>nhanh như nhau</strong>.</li>
    <li><strong>Thuật toán Thang máy</strong> trở nên... vô dụng!</li>
  </ul>
</div>

---
layout: default
---

# Thách Thức Mới Của Thế Giới SSD

<div class="grid grid-cols-2 gap-8 mt-10">
<div v-click class="p-4 text-center rounded bg-gray-500/10">
  <div class="i-carbon-settings text-6xl text-red-500"></div>
  <h3 class="font-bold mt-2">Write Amplification (Khuếch đại ghi)</h3>
  <p class="text-sm opacity-80 mt-2">
    Bạn muốn ghi <span class="font-bold">1MB</span>, nhưng thực tế ổ đĩa phải làm việc tới <span class="font-bold">3MB</span>! <br>
    (Do cơ chế "đọc-sửa-ghi" phức tạp). <br>
    ➡️ Làm giảm hiệu năng và tuổi thọ.
  </p>
</div>

<div v-click class="p-4 text-center rounded bg-gray-500/10">
  <div class="i-carbon-chart-scatter text-6xl text-blue-500"></div>
  <h3 class="font-bold mt-2">Wear Leveling (Cân bằng độ mòn)</h3>
  <p class="text-sm opacity-80 mt-2">
    Mỗi ô nhớ có tuổi thọ hữu hạn. Bộ điều khiển phải "thông minh" để ghi dữ liệu đều ra khắp ổ đĩa. <br>
    (Giống như dùng đều các trang trong một cuốn sổ). <br>
    ➡️ Tối đa hóa tuổi thọ của ổ đĩa.
  </p>
</div>
</div>

---
layout: default
---

# Tương Lai: Các Hệ Thống File "Thông Minh Hơn"
### Không chỉ nhanh hơn, mà còn tự bảo vệ dữ liệu

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold flex items-center gap-2"><span class="i-carbon-copy-file text-2xl text-blue-500"></span> Copy-on-Write (CoW)</h3>
  <p class="text-sm opacity-80 mt-2">
    Không bao giờ ghi đè lên dữ liệu cũ, luôn tạo một bản sao mới. <br>
    <strong>Lợi ích:</strong> Tạo "snapshot" tức thời, an toàn tuyệt đối khi có sự cố.
  </p>
</div>

<div v-click class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold flex items-center gap-2"><span class="i-carbon-security text-2xl text-green-500"></span> Data Integrity (Toàn vẹn dữ liệu)</h3>
  <p class="text-sm opacity-80 mt-2">
    Sử dụng checksum (giống "vân tay số") để tự động phát hiện và sửa các lỗi dữ liệu "thầm lặng".
  </p>
</div>
</div>

<div v-click class="mt-8 text-center">
  <p class="text-lg">Các đại diện tiêu biểu cho tương lai:</p>
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

# Cảm ơn mọi người đã lắng nghe!
