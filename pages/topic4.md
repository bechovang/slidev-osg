---
title: "Topic 4: File Systems & Storage Management"
mdc: true
class: "text-left"
---

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
transition: slide-up
---

# Bốn "Công Cụ" Cốt Lõi

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click="1" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-document-blank text-3xl"></div>
    <div class="mt-2 font-bold text-xl">FILE</div>
    <div class="opacity-80">Đơn vị lưu trữ logic của dữ liệu người dùng.</div>
  </div>
  <div v-click="2" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-folder text-3xl"></div>
    <div class="mt-2 font-bold text-xl">DIRECTORY</div>
    <div class="opacity-80">Cấu trúc phân cấp sắp xếp và định danh file.</div>
  </div>
  <div v-click="3" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-information text-3xl"></div>
    <div class="mt-2 font-bold text-xl">METADATA</div>
    <div class="opacity-80">Thông tin về file: kích thước, thời gian, quyền, vị trí, ...</div>
  </div>
  <div v-click="4" class="p-6 rounded-xl border border-gray-200/60 shadow-sm bg-white/60 dark:bg-white/5">
    <div class="i-carbon-data-structured text-3xl"></div>
    <div class="mt-2 font-bold text-xl">BLOCK</div>
    <div class="opacity-80">Đơn vị cấp phát trên thiết bị lưu trữ (sector/cluster).</div>
  </div>
</div>

---
transition: fade
layout: default
---

# Ba Cách "Xếp Hộp"

<div class="grid grid-cols-3 gap-6 mt-6">
  <div v-click="1" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-5 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="text-xl font-bold mb-2">Contiguous</div>
    <div class="flex gap-1 mb-3">
      <div class="h-5 w-6 bg-emerald-500 rounded"></div>
      <div class="h-5 w-6 bg-emerald-500 rounded"></div>
      <div class="h-5 w-6 bg-emerald-500 rounded"></div>
      <div class="h-5 w-6 bg-emerald-500 rounded"></div>
    </div>
    <ul class="list-disc pl-5">
      <li>Đơn giản, đọc tuần tự rất nhanh</li>
      <li class="opacity-80">Dễ phân mảnh ngoại, khó mở rộng</li>
    </ul>
  </div>
  <div v-click="2" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-5 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="text-xl font-bold mb-2">Linked</div>
    <div class="flex items-center gap-1 mb-3">
      <div class="h-5 w-6 bg-sky-500 rounded"></div>
      <div class="i-carbon-chevron-right"></div>
      <div class="h-5 w-6 bg-sky-500 rounded"></div>
      <div class="i-carbon-chevron-right"></div>
      <div class="h-5 w-6 bg-sky-500 rounded"></div>
    </div>
    <ul class="list-disc pl-5">
      <li>Không phân mảnh ngoại, mở rộng linh hoạt</li>
      <li class="opacity-80">Truy cập ngẫu nhiên kém</li>
    </ul>
  </div>
  <div v-click="3" v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" class="p-5 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="text-xl font-bold mb-2">Indexed</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="p-1 rounded border border-gray-300 text-xs bg-white/70">
        Index<br>Block
      </div>
      <div class="i-carbon-arrow-right"></div>
      <div class="flex gap-1">
        <div class="h-5 w-6 bg-amber-500 rounded"></div>
        <div class="h-5 w-6 bg-amber-500 rounded"></div>
        <div class="h-5 w-6 bg-amber-500 rounded"></div>
      </div>
    </div>
    <ul class="list-disc pl-5">
      <li>Truy cập ngẫu nhiên tốt</li>
      <li class="opacity-80">Chi phí lưu chỉ mục</li>
    </ul>
  </div>
</div>

---
transition: slide-left
layout: default
---

# Sơ Đồ Ánh Xạ (Deliverable #1)

<div class="grid grid-cols-2 gap-8 mt-4 items-start">
  <div>
    <p class="opacity-90">Sơ đồ minh họa cơ chế Indexed Allocation:</p>
    <v-clicks>
      <ul>
        <li>Mỗi file có một <b>Index Block</b> lưu danh sách con trỏ</li>
        <li>Con trỏ trỏ tới các <b>Data Block</b> chứa dữ liệu</li>
        <li>Truy cập ngẫu nhiên: tra index → nhảy đến block tương ứng</li>
      </ul>
    </v-clicks>
  </div>
  <div class="relative">
    <div class="p-3 rounded-lg border border-gray-300 bg-white/70 inline-block">
      <div class="text-sm font-bold text-center">Index Block</div>
      <div class="mt-2 space-y-1 text-xs">
        <div class="px-2 py-1 rounded bg-gray-100">ptr → Data Block A</div>
        <div class="px-2 py-1 rounded bg-gray-100">ptr → Data Block B</div>
        <div class="px-2 py-1 rounded bg-gray-100">ptr → Data Block C</div>
      </div>
    </div>
    <div class="absolute top-1/2 left-[190px] -translate-y-1/2 space-y-3">
      <div class="px-3 py-2 rounded border border-emerald-500/50 bg-emerald-50/60 text-xs">Data Block A</div>
      <div class="px-3 py-2 rounded border border-emerald-500/50 bg-emerald-50/60 text-xs">Data Block B</div>
      <div class="px-3 py-2 rounded border border-emerald-500/50 bg-emerald-50/60 text-xs">Data Block C</div>
    </div>
    <div v-click class="absolute inset-0 pointer-events-none">
      <Arrow x1="140" y1="52" x2="220" y2="52" color="#22c55e" width="2" />
      <Arrow x1="140" y1="78" x2="220" y2="88" color="#22c55e" width="2" />
      <Arrow x1="140" y1="104" x2="220" y2="124" color="#22c55e" width="2" />
    </div>
  </div>
</div>

---
layout: section
transition: zoom-out
---

# Ba "Chàng Lính Ngự Lâm": Các Kiến Trúc File System

---
layout: two-cols
---

## FAT32 vs ext4

- FAT32
  - Đơn giản, tương thích rộng
  - Không journaling, giới hạn kích thước file/volume
- ext4
  - Journaling, extent, delayed allocation
  - Hiệu năng và độ tin cậy tốt cho Linux

:::right::

### Gợi ý tiêu chí so sánh

- Journaling
- Giới hạn kích thước file/volume
- Phân mảnh và hiệu năng
- Quyền truy cập và bảo mật

---
layout: default
---

## NTFS – "Vũ khí" chủ lực

<div class="grid grid-cols-3 gap-6 mt-4">
  <div v-click class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-user-role text-3xl"></div>
    <div class="mt-2 font-bold">ACLs</div>
    <div class="text-sm opacity-80">Phân quyền chi tiết theo người dùng/nhóm.</div>
  </div>
  <div v-click class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-encryption text-3xl"></div>
    <div class="mt-2 font-bold">EFS</div>
    <div class="text-sm opacity-80">Mã hóa file ở mức hệ thống.</div>
  </div>
  <div v-click class="p-4 rounded-xl border border-gray-200/60 bg-white/60 dark:bg-white/5">
    <div class="i-carbon-time text-3xl"></div>
    <div class="mt-2 font-bold">VSS</div>
    <div class="text-sm opacity-80">Snapshot phiên bản để phục hồi.</div>
  </div>
</div>

---
layout: default
transition: fade
---

# Bảng So Sánh (Deliverable #2)

<div class="overflow-x-auto mt-4">
  <table class="w-full text-left border-separate border-spacing-y-2">
    <thead class="text-sm opacity-70">
      <tr>
        <th class="px-3">Tiêu chí</th>
        <th class="px-3">FAT32</th>
        <th class="px-3">NTFS</th>
        <th class="px-3">ext4</th>
      </tr>
    </thead>
    <tbody>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Journaling</td>
        <td class="px-3 py-2">Không</td>
        <td class="px-3 py-2">Có</td>
        <td class="px-3 py-2">Có</td>
      </tr>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Giới hạn file</td>
        <td class="px-3 py-2">~4GB</td>
        <td class="px-3 py-2">Rất lớn</td>
        <td class="px-3 py-2">Rất lớn</td>
      </tr>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Giới hạn volume</td>
        <td class="px-3 py-2">Nhỏ</td>
        <td class="px-3 py-2">Rất lớn</td>
        <td class="px-3 py-2">Rất lớn</td>
      </tr>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Quyền/Bảo mật</td>
        <td class="px-3 py-2">Cơ bản</td>
        <td class="px-3 py-2">ACLs, EFS, VSS</td>
        <td class="px-3 py-2">POSIX perms, ACLs</td>
      </tr>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Tương thích</td>
        <td class="px-3 py-2">Rộng</td>
        <td class="px-3 py-2">Windows</td>
        <td class="px-3 py-2">Linux</td>
      </tr>
      <tr v-click class="bg-amber/10">
        <td class="px-3 py-2 font-medium">Trường hợp dùng</td>
        <td class="px-3 py-2">USB, thẻ nhớ</td>
        <td class="px-3 py-2">Desktop/Server Windows</td>
        <td class="px-3 py-2">Desktop/Server Linux</td>
      </tr>
    </tbody>
  </table>
  <div class="text-sm opacity-70 mt-2">Gợi ý: click đến hàng nói tới để highlight theo lời trình bày.</div>
  
</div>

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


