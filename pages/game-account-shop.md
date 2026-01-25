---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Game Account Shop - Nền Tảng Mua Bán Tài Khoản Game
exportFilename: Game Account Shop - F-Code Challenge 3
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
  Game Account Shop
</h1>

<span class="text-xl opacity-80">Nền Tảng Mua Bán Tài Khoản Game</span>

<div class="mt-8">
  <span class="text-sm opacity-60">F-Code Challenge 3</span>
</div>

</div>

<div class="mt-4 flex items-center gap-4">
  <div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg px-4 py-2">
    <span class="text-green-400 font-bold">Team: AECoding</span>
  </div>
</div>

---
class: py-10
glowSeed: 72
---

# Tech Stack Overview

<div class="grid grid-cols-3 gap-4" style="height: 320px">

<v-clicks>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-blue-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-devicon:spring text-blue-300 text-2xl mr-2" />
    <div class="font-semibold">Backend</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Spring Boot 3.5.0</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Spring Security</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Spring Mail</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-green-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-devicon:mysql text-green-300 text-2xl mr-2" />
    <div class="font-semibold">Database</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">MySQL 8.0</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">BCrypt Password</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">RBAC Security</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm" style="height: 100%">
  <div class="flex items-center bg-purple-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-carbon:cloud-service-management text-purple-300 text-2xl mr-2" />
    <div class="font-semibold">Integrations</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">PayOS (QR Payment)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">ImgBB (Images)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 text-sm" />
      <span class="text-sm">Gmail SMTP</span>
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-10
glowSeed: 88
---

# Bối Cảnh Thị Trường

<div class="grid grid-cols-2 gap-6 mt-6">

<div v-click class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="i-carbon:trending-up text-green-300 text-3xl" />
    <span class="font-bold text-2xl">Cơ Hội Thị Trường</span>
  </div>
  <div class="flex flex-col gap-3">
    <div>
      <div class="text-lg font-semibold text-green-300">Thị trường lớn</div>
      <div class="text-sm opacity-70">Quy mô thị trường game Việt Nam ngày càng tăng</div>
    </div>
    <div>
      <div class="text-lg font-semibold text-green-300">Nhu cầu cao</div>
      <div class="text-sm opacity-70">Người chơi muốn tham gia ngay, không có thời gian "cày cuốc"</div>
    </div>
    <div>
      <div class="text-lg font-semibold text-green-300">Thu hồi chi phí</div>
      <div class="text-sm opacity-70">Người bán muốn thu hồi tiền khi chuyển game</div>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="i-carbon:warning-alt text-red-300 text-3xl" />
    <span class="font-bold text-2xl">Nhưng... Giao dịch hiện tại là một 'Canh Bạc'</span>
  </div>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Giao dịch qua mạng - Không bảo đảm</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Không có uy tín - Lừa đảo phổ biến</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Không có hệ thống review</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Thanh toán thủ công - Khó truy cứu</span>
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
glowSeed: 104
---

# Người Mua ➔ Facebook/Zalo ➔ Người Bán

<div class="mt-8 text-xl opacity-80">
  80% giao dịch tự phát tiềm ẩn rủi ro lừa đảo
</div>

<div class="mt-6 flex justify-center gap-4">

<div class="border-2 border-solid border-red-800 bg-red-900/30 rounded-lg px-6 py-3">
  <div class="i-carbon:warning-alt text-red-300 text-2xl mb-2" />
  <div class="font-bold">Chuyển tiền xong bị block</div>
</div>

<div class="border-2 border-solid border-red-800 bg-red-900/30 rounded-lg px-6 py-3">
  <div class="i-carbon:warning-alt text-red-300 text-2xl mb-2" />
  <div class="font-bold">Nick sai mật khẩu</div>
</div>

<div class="border-2 border-solid border-red-800 bg-red-900/30 rounded-lg px-6 py-3">
  <div class="i-carbon:warning-alt text-red-300 text-2xl mb-2" />
  <div class="font-bold">Không ai giải quyết</div>
</div>

</div>

---
class: py-10
glowSeed: 120
---

# Giải Pháp: Marketplace 3 Bên

<div class="mt-6 grid grid-cols-3 gap-6" style="height: 280px">

<v-clicks>

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
  <div class="i-carbon:user text-blue-300 text-5xl mb-4" />
  <div class="font-bold text-xl">Người Mua</div>
  <div class="text-sm opacity-70 mt-2">Tìm kiếm tài khoản game phù hợp</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
  <div class="i-carbon:store text-green-300 text-5xl mb-4" />
  <div class="font-bold text-xl">Người Bán</div>
  <div class="text-sm opacity-70 mt-2">Đăng bán tài khoản muốn thu hồi</div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-6 flex flex-col items-center justify-center text-center">
  <div class="i-carbon:shield text-purple-300 text-5xl mb-4" />
  <div class="font-bold text-xl">Nền Tảng</div>
  <div class="text-sm opacity-70 mt-2">Bảo vệ, xác thực, xử lý tranh chấp</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-8 text-center">
  <div class="border-2 border-solid border-yellow-800 bg-yellow-800/20 rounded-lg px-8 py-4 inline-block">
    <span class="font-bold text-xl">Doanh Thu: 10% phí nền tảng trên mỗi giao dịch</span>
  </div>
</div>

---
class: py-10
glowSeed: 136
---

# Kiến Trúc Hệ Thống

<div class="mt-6">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-6 mb-4">
  <div class="text-center font-bold text-xl mb-4">GAME ACCOUNT SHOP PLATFORM</div>
  <div class="flex justify-center gap-8">
    <div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg px-4 py-2">
      <span class="i-carbon:user mr-2" />Buyer
    </div>
    <div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg px-4 py-2">
      <span class="i-carbon:store mr-2" />Seller
    </div>
    <div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg px-4 py-2">
      <span class="i-carbon:user-admin mr-2" />Admin
    </div>
    <div class="border-2 border-solid border-gray-800 bg-gray-800/20 rounded-lg px-4 py-2">
      <span class="i-carbon:user-multiple mr-2" />Guest
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-4">

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2">
    <div class="i-devicon:spring text-green-300" />
    <span>Client-Server Architecture</span>
  </div>
  <div class="text-sm flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-blue-300" />
      <span>Browser → SpringBoot (HTTP)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-green-300" />
      <span>SpringBoot → MySQL (Query)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-purple-300" />
      <span>SpringBoot → PayOS (QR Code)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-amber-300" />
      <span>SpringBoot → Gmail (Email Async)</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2">
    <div class="i-carbon:layers text-purple-300" />
    <span>Technology Layers</span>
  </div>
  <div class="text-sm grid grid-cols-2 gap-2">
    <div class="bg-black/30 rounded p-2">Thymeleaf + Bootstrap 5</div>
    <div class="bg-black/30 rounded p-2">Spring Boot 3.5.0</div>
    <div class="bg-black/30 rounded p-2">MySQL 8.0</div>
    <div class="bg-black/30 rounded p-2">Spring Security</div>
    <div class="bg-black/30 rounded p-2">PayOS API</div>
    <div class="bg-black/30 rounded p-2">ImgBB API</div>
  </div>
</div>

</div>

</div>

---
class: py-10
glowSeed: 152
---

# Database Schema

<div class="mt-4 grid grid-cols-2 gap-4" style="height: 320px">

<div class="border-2 border-solid border-white/5 rounded-lg p-4 overflow-hidden">
  <div class="font-bold mb-3 flex items-center gap-2 text-green-300">
    <div class="i-carbon:database text-xl" />
    <span>Core Entities</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="border-b border-white/10 pb-2">
      <div class="font-mono text-green-300">users</div>
      <div class="text-xs opacity-70">id, username, email, password, role</div>
    </div>
    <div class="border-b border-white/10 pb-2">
      <div class="font-mono text-blue-300">game_accounts</div>
      <div class="text-xs opacity-70">id, seller_id, game_name, rank, price, status, credentials</div>
    </div>
    <div class="border-b border-white/10 pb-2">
      <div class="font-mono text-purple-300">transactions</div>
      <div class="text-xs opacity-70">id, listing_id, buyer_id, seller_id, amount, status</div>
    </div>
    <div class="border-b border-white/10 pb-2">
      <div class="font-mono text-amber-300">payouts</div>
      <div class="text-xs opacity-70">id, seller_id, amount, status, admin_id</div>
    </div>
    <div>
      <div class="font-mono text-cyan-300">reviews</div>
      <div class="text-xs opacity-70">id, transaction_id, buyer_id, seller_id, rating, comment</div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2 text-purple-300">
    <div class="i-carbon:chart-relationship text-xl" />
    <span>Relationships</span>
  </div>
  <div class="flex flex-col gap-3 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-green-300" />
      <span>users 1:N game_accounts (owns)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-blue-300" />
      <span>users 1:N transactions (buys/sells)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-purple-300" />
      <span>game_accounts 1:1 transactions (sold_via)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-amber-300" />
      <span>transactions 1:1 reviews</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:arrow-right text-cyan-300" />
      <span>transactions N:1 payouts</span>
    </div>
  </div>
  <div class="mt-4 pt-4 border-t border-white/10">
    <div class="font-semibold mb-2">Status Enums:</div>
    <div class="grid grid-cols-2 gap-1 text-xs font-mono">
      <div class="bg-black/30 rounded px-2 py-1">PENDING</div>
      <div class="bg-black/30 rounded px-2 py-1">APPROVED</div>
      <div class="bg-black/30 rounded px-2 py-1">REJECTED</div>
      <div class="bg-black/30 rounded px-2 py-1">SOLD</div>
      <div class="bg-black/30 rounded px-2 py-1">COMPLETED</div>
      <div class="bg-black/30 rounded px-2 py-1">FAILED</div>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 168
---

# Buyer Journey - Luồng Người Mua

<div class="mt-6 grid grid-cols-4 gap-3">

<v-clicks>

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-4 text-center">
  <div class="i-carbon:search text-blue-300 text-3xl mb-2" />
  <div class="font-bold text-sm">Tìm Kiếm</div>
  <div class="text-xs opacity-70 mt-2">Filter theo game, rank, giá</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-center">
  <div class="i-carbon:shopping-cart text-green-300 text-3xl mb-2" />
  <div class="font-bold text-sm">Mua Ngay</div>
  <div class="text-xs opacity-70 mt-2">Tạo QR Code PayOS</div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-4 text-center">
  <div class="i-carbon:mobile-payment text-purple-300 text-3xl mb-2" />
  <div class="font-bold text-sm">Thanh Toán</div>
  <div class="text-xs opacity-70 mt-2">Quét QR, chuyển khoản</div>
</div>

<div class="border-2 border-solid border-amber-800 bg-amber-800/20 rounded-lg p-4 text-center">
  <div class="i-carbon:email text-amber-300 text-3xl mb-2" />
  <div class="font-bold text-sm">Nhận Credentials</div>
  <div class="text-xs opacity-70 mt-2">Email tự động gửi username/password</div>
</div>

</v-clicks>

</div>

<div v-click class="mt-6 flex justify-center">
  <div class="border-2 border-solid border-green-800 bg-green-900/30 rounded-lg px-6 py-3 flex items-center gap-3">
    <div class="i-carbon:star text-yellow-300 text-2xl" />
    <span>Đăng nhập game & Đánh giá (Optional - Upcoming)</span>
  </div>
</div>

---
class: py-10
glowSeed: 184
---

# Seller Journey - Luồng Người Bán

<div class="mt-6 grid grid-cols-3 gap-4" style="height: 280px">

<v-clicks>

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg overflow-hidden" style="height: 100%">
  <div class="bg-blue-800/40 px-4 py-2 flex items-center font-bold">
    <div class="i-carbon:add text-blue-300 mr-2" />
    <span>Đăng Bán</span>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Đăng ký tài khoản</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Đăng listing + Ảnh (ImgBB)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Chờ Admin duyệt</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg overflow-hidden" style="height: 100%">
  <div class="bg-purple-800/40 px-4 py-2 flex items-center font-bold">
    <div class="i-carbon:time text-purple-300 mr-2" />
    <span>Trên Thị Trường</span>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Listing được duyệt ✓</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Hiển thị trên Homepage</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Người mua đặt hàng</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Đánh dấu "Đã bán"</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg overflow-hidden" style="height: 100%">
  <div class="bg-green-800/40 px-4 py-2 flex items-center font-bold">
    <div class="i-carbon:money text-green-300 mr-2" />
    <span>Nhận Thanh Toán</span>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Chờ cuối tháng</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Admin xử lý payout</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Nhận 90% giá trị</span>
    </div>
    <div class="mt-2 pt-2 border-t border-white/10">
      <div class="font-mono text-xs bg-black/30 p-2 rounded">
        1,000,000 VNĐ<br/>
        <span class="text-green-300">→ 900,000 VNĐ (90%)</span><br/>
        <span class="text-red-300">→ 100,000 VNĐ (10% phí)</span>
      </div>
    </div>
  </div>
</div>

</v-clicks>

</div>

---
class: py-10
glowSeed: 200
---

# Admin Workflow - Quy Trình Admin

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2">
    <div class="i-carbon:task text-blue-300 text-xl" />
    <span>Duyệt Listing</span>
  </div>
  <div class="flex flex-col gap-3 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Monitor pending listings</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Review content & images</span>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-2">
      <div class="border-2 border-solid border-green-800 bg-green-900/30 rounded p-2 text-center">
        <div class="text-green-300 font-bold">APPROVED</div>
        <div class="text-xs opacity-70">Live on site</div>
      </div>
      <div class="border-2 border-solid border-red-800 bg-red-900/30 rounded p-2 text-center">
        <div class="text-red-300 font-bold">REJECTED</div>
        <div class="text-xs opacity-70">Send email</div>
      </div>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2">
    <div class="i-carbon:money text-purple-300 text-xl" />
    <span>Xác Thực Giao Dịch</span>
  </div>
  <div class="flex flex-col gap-3 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Monitor pending transactions</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Verify PayOS payment</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Send credentials email to buyer</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Process monthly payouts</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 216
---

# Revenue Model - Mô Hình Doanh Thu

<div class="mt-6">

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-6 mb-6">
  <div class="text-center font-bold text-2xl mb-4">Phân Chia Doanh Thu / Giao Dịch</div>
  <div class="flex items-center justify-center gap-8">
    <div class="text-center">
      <div class="text-5xl font-bold text-green-300">90%</div>
      <div class="text-lg mt-2">Seller nhận</div>
    </div>
    <div class="i-carbon:arrow-right text-4xl text-white/50" />
    <div class="text-center">
      <div class="text-5xl font-bold text-purple-300">10%</div>
      <div class="text-lg mt-2">Phí nền tảng</div>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-4">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:calendar text-blue-300 text-3xl mb-2" />
  <div class="font-bold">Monthly Payout</div>
  <div class="text-sm opacity-70 mt-2">Admin tổng kết cuối tháng</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:currency-dollar text-green-300 text-3xl mb-2" />
  <div class="font-bold">Transparent</div>
  <div class="text-sm opacity-70 mt-2">Minh bạch 10% phí</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:shield text-purple-300 text-3xl mb-2" />
  <div class="font-bold">Secure</div>
  <div class="text-sm opacity-70 mt-2">Seller xác nhận nhận tiền</div>
</div>

</div>

</div>



---
class: py-10
glowSeed: 296
---

# Security Features - Tính Năng Bảo Mật

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-green-300">
    <div class="i-carbon:shield text-xl" />
    <span>Authentication</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>BCrypt 10 rounds - Password hashing mạnh</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Session timeout - 30 phút không hoạt động</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>RBAC - Role-based: USER, ADMIN</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-purple-300">
    <div class="i-carbon:locked text-xl" />
    <span>Authorization</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>CSRF protection - Bảo vệ state-changing</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>@PreAuthorize - Method-level security</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Business logic - Seller không mua listing của mình</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 312
---

# Key Achievements - Thành Tựu Nổi Bật

<div class="mt-6 grid grid-cols-2 gap-6">

<div v-click class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-green-300">
    <div class="i-carbon:checkmark-filled text-xl" />
    <span>User-Friendly</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Giao diện tiếng Việt 100%</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>QR payment - Dễ sử dụng</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Email tự động</span>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-blue-300">
    <div class="i-carbon:shield text-xl" />
    <span>Secure</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>BCrypt, RBAC</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Email verification</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Admin xác thực</span>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-purple-300">
    <div class="i-carbon:idea text-xl" />
    <span>Transparent</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>10% phí minh bạch</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Monthly payouts rõ ràng</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Quy trình transparent</span>
    </div>
  </div>
</div>

<div v-click class="border-2 border-solid border-amber-800 bg-amber-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-amber-300">
    <div class="i-carbon:chart-line-smooth text-xl" />
    <span>Scalable</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Modular architecture</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Well-documented</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Sẵn sàng scale</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 328
---

# Future Enhancements - Tính Năng Tương Lai

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-blue-300">
    <div class="i-carbon:calendar text-xl" />
    <span>Phase 2 Features</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Admin Dashboard với charts (Chart.js)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Seller Profile public page</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Buyer purchase history</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Advanced search filters</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Wallet system (deposit/withdraw)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Post-puchase rating</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-purple-300">
    <div class="i-carbon:rocket text-xl" />
    <span>Phase 3 Features</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Multi-currency support</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Escrow service</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Dispute resolution system</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Mobile app (Flutter)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>AI-powered fraud detection</span>
    </div>
  </div>
</div>

</div>

---
layout: center
class: text-center
glowSeed: 344
---

# Kết Luận

<div class="mt-8 text-xl opacity-90">
  <div class="mb-6">Game Account Shop - MVP hoàn chỉnh</div>
</div>

<div class="grid grid-cols-2 gap-4 max-w-3xl mx-auto mt-8">

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-left">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold text-green-300">An toàn</span>
  </div>
  <div class="text-sm opacity-80">Xác thực admin, credentials sau thanh toán</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-left">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold text-green-300">Uy tín</span>
  </div>
  <div class="text-sm opacity-80">Review system, email verification</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-left">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold text-green-300">Minh bạch</span>
  </div>
  <div class="text-sm opacity-80">10% phí platform, quy trình rõ ràng</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-left">
  <div class="flex items-center gap-2 mb-3">
    <div class="i-carbon:checkmark-filled text-green-300 text-xl" />
    <span class="font-bold text-green-300">Bền vững</span>
  </div>
  <div class="text-sm opacity-80">Kiến trúc vững chắc, sẵn sàng scale</div>
</div>

</div>

<div class="mt-12">
  <span class="text-2xl font-bold text-green-400">Ready for Production! 🚀</span>
</div>

---
layout: center
class: text-center
glowSeed: 56

---

# Phần tài liệu

<div class="flex items-center justify-center gap-12 mt-8">
  <div class="text-center">
    <div class="text-6xl font-bold text-green-400">Epics Breakdown</div>
  </div>
</div>

<div class="mt-12">
  <span class="text-xl opacity-80">Dự án F-Code Challenge 3 - Xây dựng bởi AECoing</span>
</div>





<!-- ======================================================================================================== -->
<!-- Đọc thêm
<!-- ======================================================================================================== -->





---
class: py-10
glowSeed: 232
clicks: 4
---

# Epic Breakdown - Phân Breakdown

<div class="mt-6 flex flex-col gap-3">

<div v-click="1" class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg overflow-hidden">
  <div class="bg-green-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-filled text-green-300" />
      <span class="font-bold">Epic 1: Basic Authentication</span>
    </div>
    <span class="text-green-300 font-bold">100% (3/3)</span>
  </div>
  <div class="px-4 py-2 text-sm opacity-80">Đăng ký, Đăng nhập, Admin mặc định</div>
</div>

<div v-click="2" class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg overflow-hidden">
  <div class="bg-green-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-filled text-green-300" />
      <span class="font-bold">Epic 2: Listings & Ratings</span>
    </div>
    <span class="text-green-300 font-bold">100% (7/7)</span>
  </div>
  <div class="px-4 py-2 text-sm opacity-80">Đăng bán, Search/Filter, Admin duyệt, Upload ảnh, Email</div>
</div>

<div v-click="3" class="border-2 border-solid border-amber-800 bg-amber-800/20 rounded-lg overflow-hidden">
  <div class="bg-amber-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:time text-amber-300" />
      <span class="font-bold">Epic 3: Simple Buying + Seller Tools</span>
    </div>
    <span class="text-amber-300 font-bold">80% (4/5)</span>
  </div>
  <div class="px-4 py-2 text-sm opacity-80">QR PayOS, Admin xác nhận, Shop của tôi, Monthly payout</div>
</div>

<div v-click="4" class="border-2 border-solid border-gray-800 bg-gray-800/20 rounded-lg overflow-hidden">
  <div class="bg-gray-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-300" />
      <span class="font-bold">Epic 4: Dashboard & Profiles</span>
    </div>
    <span class="text-gray-300 font-bold">0% (0/3)</span>
  </div>
  <div class="px-4 py-2 text-sm opacity-80">Admin Dashboard, Seller Profile, Purchase history (Planned)</div>
</div>

</div>

---
class: py-10
glowSeed: 248
---

# Epic 1-2: Hoàn Thành 100%

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-green-300">
    <div class="i-carbon:checkmark-filled text-xl" />
    <span>Epic 1: Authentication</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Khởi tạo Spring Boot project</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Đăng ký / Đăng nhập / Logout</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Tài khoản Admin mặc định</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-green-300">
    <div class="i-carbon:checkmark-filled text-xl" />
    <span>Epic 2: Listings</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Đăng bán tài khoản có ảnh (ImgBB)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Tìm kiếm & lọc (Search/Filter)</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Chi tiết tài khoản & Đánh giá</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Admin duyệt/từ chối listing</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400 min-w-5" />
      <span>Email thông báo duyệt/từ chối</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 264
---

# Epic 3: Đang Triển Khai 80%

<div class="mt-6">

<div class="border-2 border-solid border-amber-800 bg-amber-800/20 rounded-lg overflow-hidden">
  <div class="bg-amber-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:time text-amber-300" />
      <span class="font-bold">Epic 3: Buying + Seller Tools</span>
    </div>
    <span class="text-amber-300 font-bold">80% (4/5 stories)</span>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div>
  <div class="font-semibold mb-3 text-green-300">✓ Đã Hoàn Thành</div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Nút "Mua ngay" + QR PayOS</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Admin xác nhận + Gửi credentials</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Shop của tôi - Lọc + Hiển thị lợi nhuận</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Admin thanh toán cho Seller (Monthly)</span>
    </div>
  </div>
</div>

<div>
  <div class="font-semibold mb-3 text-gray-300">⏳ Backlog</div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Đánh giá sau mua (Post-purchase rating)</span>
    </div>
  </div>
</div>

</div>

</div>

---
class: py-10
glowSeed: 280
---

# Epic 4: Đã Lên Kế Hoạch

<div class="mt-6">

<div class="border-2 border-solid border-gray-800 bg-gray-800/20 rounded-lg overflow-hidden">
  <div class="bg-gray-800/40 px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-300" />
      <span class="font-bold">Epic 4: Dashboard & Profiles</span>
    </div>
    <span class="text-gray-300 font-bold">Planned (0/3 stories)</span>
  </div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2">
    <div class="i-carbon:chart-bar text-blue-300" />
    <span>Admin Dashboard</span>
  </div>
  <div class="text-sm flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Thống kê platform</span>
    </div>
    <div class="text-xs opacity-70">Charts, metrics, revenue</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2">
    <div class="i-carbon:user text-green-300" />
    <span>Seller Profile</span>
  </div>
  <div class="text-sm flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Trang shop cá nhân</span>
    </div>
    <div class="text-xs opacity-70">Public seller page</div>
  </div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 flex items-center gap-2">
    <div class="i-carbon:shopping-bag text-purple-300" />
    <span>Mua Của Tôi</span>
  </div>
  <div class="text-sm flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <div class="i-carbon:calendar text-gray-400" />
      <span>Lịch sử mua hàng</span>
    </div>
    <div class="text-xs opacity-70">Purchase history</div>
  </div>
</div>

</div>

</div>



---
layout: center
class: text-center
glowSeed: 360
---

# Cảm ơn tất cả mọi người vì đã lắng nghe!

<div class="mt-8 text-xl opacity-80">
  Thank you !
</div>

<div class="mt-8 text-xl opacity-80">
  Questions & Answers
</div>

<div class="mt-8 opacity-60 text-sm">
  F-Code Challenge 3 - Game Account Shop<br/>
  Spring Boot 3.5.0 + Thymeleaf + MySQL
</div>





<!-- ======================================================= -->
<!-- SLIDE TEMPLATES - Copy & Edit for New Slides -->
<!-- ======================================================= -->

---
layout: center
class: text-center
glowSeed: 400
---

# TEMPLATE: Simple Title Slide

<!-- Use this for section breaks or main titles -->
<div class="mt-8 text-xl opacity-80">
  Add your subtitle here
</div>

---
class: py-10
glowSeed: 401
---

# TEMPLATE: Title + Content

<div class="mt-6">
  <div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-6">
    <div class="font-bold mb-3 text-blue-300">Section Title</div>
    <div class="text-sm opacity-90">
      Add your content here. This is a simple content box with a border and background.
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 402
---

# TEMPLATE: Bullet Points

<div class="mt-6 flex flex-col gap-3">

<div class="flex items-center gap-2">
  <div class="i-carbon:checkmark-outline text-green-400" />
  <span>First bullet point with checkmark icon</span>
</div>

<div class="flex items-center gap-2">
  <div class="i-carbon:checkmark-outline text-green-400" />
  <span>Second bullet point</span>
</div>

<div class="flex items-center gap-2">
  <div class="i-carbon:warning-alt text-amber-400" />
  <span>Warning or important note (amber)</span>
</div>

<div class="flex items-center gap-2">
  <div class="i-carbon:close text-red-400" />
  <span>Error or negative point (red)</span>
</div>

</div>

---
class: py-10
glowSeed: 403
---

# TEMPLATE: Two Columns

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-blue-300">
    <div class="i-carbon:chart-bar text-xl" />
    <span>Left Column</span>
  </div>
  <div class="text-sm">
    Add left column content here
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-3 flex items-center gap-2 text-green-300">
    <div class="i-carbon:data text-xl" />
    <span>Right Column</span>
  </div>
  <div class="text-sm">
    Add right column content here
  </div>
</div>

</div>

---
class: py-10
glowSeed: 404
---

# TEMPLATE: Three Columns

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:cube text-blue-300 text-3xl mb-2" />
  <div class="font-bold">Column 1</div>
  <div class="text-sm opacity-70 mt-2">Add content</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:cube text-green-300 text-3xl mb-2" />
  <div class="font-bold">Column 2</div>
  <div class="text-sm opacity-70 mt-2">Add content</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 text-center">
  <div class="i-carbon:cube text-purple-300 text-3xl mb-2" />
  <div class="font-bold">Column 3</div>
  <div class="text-sm opacity-70 mt-2">Add content</div>
</div>

</div>

---
class: py-10
glowSeed: 405
---

# TEMPLATE: Image Slide (Easy to Insert Images)

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 text-blue-300">Image on Left</div>
  <div class="text-sm opacity-80">
    Place your image in the public/images/ folder and reference it below:
  </div>
  <div class="mt-3 bg-black/30 rounded p-3 text-center">
    <span class="text-xs opacity-60">&lt;img src="/images/your-image.png" class="h-60 rounded" /&gt;</span>
  </div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
  <div class="font-bold mb-3 text-green-300">Description on Right</div>
  <div class="text-sm flex flex-col gap-2">
    <div>• Point one about the image</div>
    <div>• Point two about the image</div>
    <div>• Point three about the image</div>
  </div>
</div>

</div>

<div class="mt-6 text-center">
  <span class="text-sm opacity-60">💡 Tip: Use /images/ folder for all slide images</span>
</div>

---
class: py-10
glowSeed: 406
---

# TEMPLATE: Full Width Image

<div class="mt-6">
  <div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4">
    <div class="font-bold mb-3 text-purple-300">Large Image / Screenshot</div>
    <div class="text-center bg-black/30 rounded p-8">
      <span class="text-xs opacity-60">&lt;img src="/images/screenshot.png" class="max-h-96 rounded-lg" /&gt;</span>
    </div>
    <div class="text-center mt-3 text-sm opacity-70">
      Add your caption or description here
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 407
---

# TEMPLATE: Code Snippet

<div class="mt-6">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-4 mb-4">
  <div class="font-bold mb-2 flex items-center gap-2">
    <div class="i-devicon:java text-red-300" />
    <span>Java / Spring Boot Code</span>
  </div>
</div>

<div class="bg-black/50 border border-white/10 rounded-lg p-4 text-sm">
  <div class="opacity-60 mb-2">// Your code here - change language after ```</div>

```java
@Service
public class GameAccountService {

    @Autowired
    private GameAccountRepository repository;

    public List<GameAccount> findAll() {
        return repository.findAll();
    }

    // Add your methods here
}
```

</div>

<div class="mt-3 text-xs opacity-60">
  💡 Supported languages: java, javascript, python, typescript, sql, bash, etc.
</div>

</div>

---
class: py-10
glowSeed: 408
---

# TEMPLATE: Comparison (Before / After)

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-red-300">
    <div class="i-carbon:close-outline text-xl" />
    <span>Before (Problem)</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Problem point 1</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Problem point 2</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:close text-red-400" />
      <span>Problem point 3</span>
    </div>
  </div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-5">
  <div class="font-bold mb-4 flex items-center gap-2 text-green-300">
    <div class="i-carbon:checkmark-outline text-xl" />
    <span>After (Solution)</span>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Solution point 1</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Solution point 2</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="i-carbon:checkmark-outline text-green-400" />
      <span>Solution point 3</span>
    </div>
  </div>
</div>

</div>

---
class: py-10
glowSeed: 409
---

# TEMPLATE: Stat Cards (Key Metrics)

<div class="mt-6 grid grid-cols-4 gap-4">

<div class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-4 text-center">
  <div class="text-4xl font-bold text-blue-300">99%</div>
  <div class="text-sm mt-2">Metric 1</div>
</div>

<div class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4 text-center">
  <div class="text-4xl font-bold text-green-300">500+</div>
  <div class="text-sm mt-2">Metric 2</div>
</div>

<div class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-4 text-center">
  <div class="text-4xl font-bold text-purple-300">24/7</div>
  <div class="text-sm mt-2">Metric 3</div>
</div>

<div class="border-2 border-solid border-amber-800 bg-amber-800/20 rounded-lg p-4 text-center">
  <div class="text-4xl font-bold text-amber-300">∞</div>
  <div class="text-sm mt-2">Metric 4</div>
</div>

</div>

---
class: py-10
glowSeed: 410
clicks: 3
---

# TEMPLATE: Step by Step (with v-click animations)

<div class="mt-6 flex flex-col gap-3">

<div v-click="1" class="border-2 border-solid border-blue-800 bg-blue-800/20 rounded-lg p-4">
  <div class="flex items-center gap-2">
    <div class="bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-blue-300">1</div>
    <span class="font-bold">First Step</span>
  </div>
  <div class="text-sm mt-2 ml-10 opacity-90">Description of step 1</div>
</div>

<div v-click="2" class="border-2 border-solid border-green-800 bg-green-800/20 rounded-lg p-4">
  <div class="flex items-center gap-2">
    <div class="bg-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-green-300">2</div>
    <span class="font-bold">Second Step</span>
  </div>
  <div class="text-sm mt-2 ml-10 opacity-90">Description of step 2</div>
</div>

<div v-click="3" class="border-2 border-solid border-purple-800 bg-purple-800/20 rounded-lg p-4">
  <div class="flex items-center gap-2">
    <div class="bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-purple-300">3</div>
    <span class="font-bold">Third Step</span>
  </div>
  <div class="text-sm mt-2 ml-10 opacity-90">Description of step 3</div>
</div>

</div>

<div class="mt-4 text-center text-sm opacity-60">
  💡 Press space/click to reveal each step
</div>

---
class: py-10
glowSeed: 411
---

# TEMPLATE: Image Grid (Multiple Images)

<div class="mt-6 grid grid-cols-3 gap-4">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-3 text-center">
  <div class="bg-black/30 rounded h-32 flex items-center justify-center mb-2">
    <span class="text-xs opacity-60">Image 1</span>
  </div>
  <div class="text-sm font-semibold">Caption 1</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-3 text-center">
  <div class="bg-black/30 rounded h-32 flex items-center justify-center mb-2">
    <span class="text-xs opacity-60">Image 2</span>
  </div>
  <div class="text-sm font-semibold">Caption 2</div>
</div>

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-3 text-center">
  <div class="bg-black/30 rounded h-32 flex items-center justify-center mb-2">
    <span class="text-xs opacity-60">Image 3</span>
  </div>
  <div class="text-sm font-semibold">Caption 3</div>
</div>

</div>

<div class="mt-4 text-center text-sm opacity-60">
  💡 Replace placeholder divs with: &lt;img src="/images/file.png" class="h-32 rounded" /&gt;
</div>

---
class: py-10
glowSeed: 412
---

# TEMPLATE: Quote / Testimonial

<div class="mt-12">
  <div class="border-l-4 border-blue-800 bg-blue-800/10 rounded-r-lg p-6">
    <div class="i-carbon:double-quotes text-blue-300 text-4xl mb-4 opacity-50"></div>
    <div class="text-xl italic opacity-90 mb-4">
      "Add your quote or testimonial here. This template is great for customer feedback, team quotes, or important messages."
    </div>
    <div class="flex items-center gap-3">
      <div class="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center text-blue-300 font-bold">
        A
      </div>
      <div>
        <div class="font-semibold">Author Name</div>
        <div class="text-sm opacity-70">Title / Position</div>
      </div>
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 413
---

# TEMPLATE: Timeline / Roadmap

<div class="mt-6">

<div class="border-2 border-solid border-white/5 bg-white/5 rounded-lg p-6">
  <div class="space-y-4">

<div class="flex gap-4">
  <div class="flex flex-col items-center">
    <div class="bg-green-800 rounded-full w-4 h-4 border-2 border-green-400"></div>
    <div class="w-0.5 bg-green-800/50 h-full"></div>
  </div>
  <div class="pb-4">
    <div class="font-bold text-green-300">Phase 1 - Completed</div>
    <div class="text-sm opacity-80 mt-1">Description of completed phase</div>
  </div>
</div>

<div class="flex gap-4">
  <div class="flex flex-col items-center">
    <div class="bg-amber-800 rounded-full w-4 h-4 border-2 border-amber-400 animate-pulse"></div>
    <div class="w-0.5 bg-white/10 h-full"></div>
  </div>
  <div class="pb-4">
    <div class="font-bold text-amber-300">Phase 2 - In Progress</div>
    <div class="text-sm opacity-80 mt-1">Description of current phase</div>
  </div>
</div>

<div class="flex gap-4">
  <div class="flex flex-col items-center">
    <div class="bg-gray-800 rounded-full w-4 h-4 border-2 border-gray-400"></div>
  </div>
  <div>
    <div class="font-bold text-gray-300">Phase 3 - Planned</div>
    <div class="text-sm opacity-80 mt-1">Description of planned phase</div>
  </div>
</div>

  </div>
</div>

</div>

<!-- ======================================================= -->
<!-- END OF TEMPLATES -->
<!-- ======================================================= -->
