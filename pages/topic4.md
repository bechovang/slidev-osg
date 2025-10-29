---
title: "Topic 4: File Systems & Storage Management"
mdc: true
class: "text-left"
---
lên
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
  <img src="/images/thuviengongang.png" alt="Thư viện FPT hiện đại" class="rounded-lg shadow-md" style="width: 520px; height: 320px; object-fit: cover;"/>
  <figcaption class="text-center mt-2 opacity-80">Thư viện Trường FPT</figcaption>
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
layout: default
transition: fade
---

# Sau đây là mô tả khái niệm chính xác

<div id="defsWrap" ref="defsWrap" class="grid grid-cols-1 gap-4 mt-4 max-h-[60vh] overflow-y-auto pr-2 pb-20" style="scrollbar-width: none; -ms-overflow-style: none;">
  <div v-click="1" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="flex items-start gap-3">
      <div class="i-carbon-book text-2xl mt-0.5"></div>
      <div>
        <div class="font-bold">1. File (Tệp tin)</div>
        <div class="opacity-80 text-sm mt-1">Một tệp tin là một tập hợp các thông tin liên quan được lưu trữ dưới dạng một đơn vị duy nhất có tên gọi. Từ góc độ người dùng, tệp là đơn vị logic nhỏ nhất để lưu trữ dữ liệu. Hệ điều hành cung cấp các chức năng để tạo, sửa đổi, xóa và truy cập các tệp này.</div>
      </div>
    </div>
  </div>
  <div v-click="2" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="flex items-start gap-3">
      <div class="i-carbon-cube text-2xl mt-0.5"></div>
      <div>
        <div class="font-bold">2. Block (Khối)</div>
        <div class="opacity-80 text-sm mt-1">Block là đơn vị lưu trữ dữ liệu nhỏ nhất trên một thiết bị lưu trữ vật lý như ổ cứng. Dữ liệu được chia thành các khối có kích thước bằng nhau và được lưu trữ một cách độc lập.[1] Mỗi khối có một địa chỉ riêng, cho phép hệ thống truy cập trực tiếp vào từng khối dữ liệu mà không cần thông qua hệ thống tệp tin.[1]</div>
      </div>
    </div>
  </div>
  <div v-click="3" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="flex items-start gap-3">
      <div class="i-carbon-folder text-2xl mt-0.5"></div>
      <div>
        <div class="font-bold">3. Directory (Thư mục)</div>
        <div class="opacity-80 text-sm mt-1">Thư mục, hay còn gọi là folder, là một cấu trúc dùng để tổ chức và quản lý các tệp tin và các thư mục con khác. Về bản chất, thư mục là một loại tệp đặc biệt chứa thông tin về các tệp và thư mục khác mà nó chứa. Cấu trúc cây thư mục giúp người dùng và hệ thống dễ dàng điều hướng và tìm kiếm tệp tin.</div>
      </div>
    </div>
  </div>
  <div id="def-4" v-click="4" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="flex items-start gap-3">
      <div class="i-carbon-information text-2xl mt-0.5"></div>
      <div>
        <div class="font-bold">4. Metadata (Siêu dữ liệu)</div>
        <div class="opacity-80 text-sm mt-1">Metadata, hay siêu dữ liệu, là "dữ liệu về dữ liệu".[2][3] Nó cung cấp thông tin mô tả chi tiết về một tệp tin, giúp cho việc quản lý, tìm kiếm và sử dụng dữ liệu trở nên dễ dàng hơn.[2][4]</div>
      </div>
    </div>
  </div>
</div>

<div v-if="$clicks === 3" class="hidden">{{ scrollToTop() }}</div>
<div v-if="$clicks === 4" class="hidden">{{ scrollToDef4() }}</div>

<script setup>
import { ref } from 'vue'
const defsWrap = ref()
function scrollToTop() {
  const wrap = defsWrap?.value
  if (wrap) {
    wrap.scrollTop = 0
  }
  return ''
}
function scrollToDef4() {
  const wrap = defsWrap?.value
  if (wrap) {
    wrap.scrollTo({ top: wrap.scrollHeight, behavior: 'smooth' })
  }
  return ''
}
</script>
<style>
#defsWrap::-webkit-scrollbar { display: none; }
</style>

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

| Tiêu chí | **FAT32** (Sổ tay) | **NTFS** (Tủ sắt) | **ext4** (Động cơ) |
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
  <li v-click><strong>Dễ tìm kiếm:</strong> Tìm thùng thứ n rất nhanh. (chỉ cần gọi A[n] )</li>
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

## Linked - Minh họa

<figure>
  <img src="/images/contiguous.jpg" alt="Indexed Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 60vh; width: auto; height: auto; object-fit: contain;"/>
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
  <li v-click><strong>Lấy hàng RẤT CHẬM:</strong> Phải đi lần lượt qua từng thùng để đọc "chỉ đường".</li>
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

## Linked - Minh họa

<figure>
  <img src="/images/linked.jpg" alt="Indexed Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 60vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Linked Allocation</figcaption>
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

---
layout: default
transition: fade
---

## Indexed - Minh họa

<figure>
  <img src="/images/indexed.jpg" alt="Indexed Allocation" class="rounded-lg shadow-md mx-auto" style="max-width: min(90vw, 1000px); max-height: 60vh; width: auto; height: auto; object-fit: contain;"/>
  <figcaption class="text-center mt-2 opacity-80">Indexed Allocation: Phiếu mục lục trỏ đến các khối dữ liệu</figcaption>
</figure>




---
layout: two-cols
transition: slide-left
---

## Tăng Tốc & Bảo Vệ

- <b v-click>Caching & Buffering</b>
  - Ẩn độ trễ thiết bị, gom/đọc ghi hiệu quả.
- <b v-click>Disk Scheduling</b>
  - Ưu tiên thứ tự truy cập giảm seek time.
  
:::right::

<div v-click="3" class="p-5 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
  <div class="i-carbon-notebook text-3xl"></div>
  <div class="mt-2 font-bold">Journaling</div>
  <div class="text-sm opacity-80">Ghi log siêu dữ liệu để phục hồi sau sự cố.</div>
</div>

<div class="relative h-48 w-36 mt-8">
  <div class="absolute left-1/2 -translate-x-1/2 h-full w-1.5 bg-gray-300 rounded"></div>
  <div
    v-motion
    :initial="{ y: 0 }"
    :enter="{ y: 0 }"
    :click-2="{ y: 144 }"
    class="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-sky-500 shadow"
  ></div>
  <div class="absolute -left-2 top-0 text-xs opacity-60">Đầu đọc</div>
</div>

---
layout: section
transition: zoom-out
---

# Case Study: "Mổ Xẻ" NTFS

---
layout: default
transition: slide-right
---

## Trái Tim Của NTFS: MFT

<div class="grid grid-cols-2 gap-10 items-start mt-4">
  <div>
    <p class="opacity-90">Master File Table (MFT) lưu metadata của mọi file/thư mục.</p>
    <div v-click class="mt-4 p-4 rounded-lg border border-gray-200/70 bg-amber-50/50 dark:bg-amber-500/10">
      <b>Resident Data</b>: dữ liệu nhỏ được lưu trực tiếp trong record của MFT.
    </div>
  </div>
  <div class="relative">
    <div class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5 w-[360px]">
      <div class="font-bold text-center">MFT</div>
      <div class="mt-2 grid grid-cols-1 gap-2">
        <div class="p-2 rounded border border-gray-300 bg-white/70">MFT Record #1</div>
        <div class="p-2 rounded border border-gray-300 bg-white/70 relative">
          MFT Record #2
          <div
            v-motion
            :initial="{ x: -160, y: -40, opacity: 0 }"
            :click-1="{ x: 16, y: 6, opacity: 1, transition: { duration: 600 } }"
            class="absolute -top-2 -left-2 px-2 py-1 text-[11px] rounded bg-emerald-500 text-white shadow"
          >file.txt</div>
        </div>
        <div class="p-2 rounded border border-gray-300 bg-white/70">MFT Record #3</div>
      </div>
    </div>
  </div>
</div>

---
layout: default
transition: fade
---

## NTFS - Các Tính Năng Nâng Cao

<v-clicks>

<div class="grid grid-cols-3 gap-6 mt-2">
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-user-role text-3xl"></div>
    <div class="mt-2 font-bold">ACLs</div>
    <div class="text-sm opacity-80">Kiểm soát truy cập chi tiết.</div>
  </div>
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-encryption text-3xl"></div>
    <div class="mt-2 font-bold">EFS</div>
    <div class="text-sm opacity-80">Mã hóa trong suốt.</div>
  </div>
  <div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-time text-3xl"></div>
    <div class="mt-2 font-bold">VSS</div>
    <div class="text-sm opacity-80">Snapshot & phục hồi.</div>
  </div>
</div>

</v-clicks>

---
layout: two-cols
transition: slide-up
---

## Kỷ Nguyên SSD & Thách Thức Mới

- <b v-click>"Gót Chân Achilles"</b>
  - Write Amplification, mòn cell, GC/WA ảnh hưởng hiệu năng
- <b v-click>Giảm WA</b>
  - TRIM, over-provisioning, log-structured FS

:::right::

<img v-click src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXJ2NDh2dWl6eWNhdmRhNTRxNTUyM2FodG9rdzZpY2F3M2YzN3Z1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2vnf3j9G6zGyw/giphy.gif" alt="Write Amplification" class="rounded-lg shadow"/>

---
layout: default
transition: zoom-in
---

## Tương Lai & Tổng Kết

<div :class="{ 'opacity-50': $clicks >= 2 }" class="flex items-center gap-6">
  <img v-click src="https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenZFS_logo.svg" alt="ZFS" class="h-14"/>
  <img v-click src="https://upload.wikimedia.org/wikipedia/commons/4/43/ReFS_logo.svg" alt="ReFS" class="h-12"/>
</div>

<div v-click class="mt-4 p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
  <div class="font-bold mb-2">Tổng Kết</div>
  <ul class="list-disc pl-5">
    <li v-click>Khái niệm cốt lõi: file, directory, metadata, block</li>
    <li v-click>Ba cấp phát: contiguous, linked, indexed</li>
    <li v-click>NTFS: MFT, ACLs/EFS/VSS nổi bật</li>
  </ul>
</div>

<div v-click class="mt-6 text-center text-xl opacity-90">Cảm ơn cô và các bạn đã lắng nghe!</div>


