---
title: "FPT Campus Network Infrastructure Project"
mdc: true
class: "text-left"
---
HI
---
layout: cover
title: FPT CAMPUS NETWORK INFRASTRUCTURE PROJECT
subtitle: A Hybrid Enterprise Network Model for IPv4 & IPv6 Coexistence

---

<div
  v-motion
  :initial="{ y: -30, opacity: 0 }"
  :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }"
>
  <h1 class="text-5xl font-extrabold tracking-tight">
    FPT CAMPUS NETWORK INFRASTRUCTURE PROJECT
  </h1>
  <h2 class="text-5xl font-extrabold tracking-tight">
    A Hybrid Enterprise Network Model for IPv4 & IPv6 Coexistence
  </h2>
</div>

<div
  v-motion
  :initial="{ opacity: 0 }"
  :enter="{ opacity: 1, transition: { delay: 300, duration: 500 } }"
  class="mt-3 text-xl opacity-90"
>
  Group 4
  
</div>






---
layout: default
transition: fade
---

# Project & Team

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-2xl mb-4">📋 Project Details</h3>
    <ul class="space-y-2">
      <li><strong>Project:</strong> FPT Campus Network Infrastructure</li>
      <li><strong>Group:</strong> 4</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-2xl mb-4">👥 Team Members</h3>
    <ul class="space-y-2">
      <li>Nguyen Ngoc Phuc</li>
      <li>Dam Le Tuan Anh</li>
      <li>Than Nhat Huy</li>
      <li>Nguyen Pham An</li>
      <li>Nguyen Phan Minh Tri</li>
    </ul>
  </div>
</div>



---
layout: default
transition: fade
title: Scenario & Project Objectives
notes: |
  Bối cảnh: Tổ chức có 2 site — Main (IPv6-native) và Branch (IPv4 legacy).
  Mục tiêu: Kết nối WAN ổn định, mạng lai IPv4/IPv6, dịch vụ thiết yếu, bảo mật và mở rộng tốt.
---

## 🎯 Scenario & Project Objectives

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-3">📍 Scenario</h3>
    <ul class="space-y-2 text-sm">
      <li>🏢 <strong>Main Site:</strong> IPv6-native, future-ready infrastructure</li>
      <li>🏭 <strong>Branch Site:</strong> Legacy IPv4 systems</li>
      <li>⚡ <strong>Challenge:</strong> Seamless connectivity across protocol stacks</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-xl mb-3">🎯 Key Objectives</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ Robust WAN connectivity</li>
      <li>✅ Hybrid IPv4 & IPv6 network</li>
      <li>✅ Essential services (DNS, Web, FTP, DHCP, WiFi)</li>
      <li>✅ Security, scalability, manageability</li>
    </ul>
  </div>
</div>



---
layout: default
transition: fade
title: Network Topology Overview
notes: |
  Đây là kiến trúc tổng thể: Main Site (IPv6) và Branch Site (IPv4) kết nối qua WAN.
---

## 🗺️ Network Topology Overview

![Overall Topology](/images/overview.png)

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">
  <div class="p-3 bg-blue-500/10 rounded">
    <strong>Main Site</strong><br/>
    IPv6‑Native Infrastructure
  </div>
  <div class="p-3 bg-green-500/10 rounded">
    <strong>WAN Link</strong><br/>
    Serial DCE/DTE Connection
  </div>
  <div class="p-3 bg-purple-500/10 rounded">
    <strong>Branch Site</strong><br/>
    Legacy IPv4 Infrastructure
  </div>
</div>



---
layout: two-cols
transition: fade
title: Solving Interoperability: Dual-Stack Approach
notes: |
  Điểm nhấn kỹ thuật: Dual-Stack trên router lõi và server (DNS/Web/FTP).
---

## 🔄 Solving Interoperability: The Dual-Stack Approach

### ❓ The Problem

How can IPv4-only Branch clients access IPv6‑native Main Site services?

### ✅ The Solution

- 🔧 Dual‑Stack on core routers
- 🖥️ Dual‑Stack on critical servers
- 🌉 Native bridging across networks

::right::
![Tracert Demo](/images/web_branchpc.png)

<p class="text-xs text-center mt-2 opacity-70">tracert web.fpt.local from Branch PC</p>

<div class="absolute bottom-10 right-10"><img src="https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif" alt="Connection" width="120"/></div>


---
layout: default
transition: fade
title: Dynamic Routing with Multi-Protocol OSPF
notes: |
  Định tuyến động: OSPFv2 cho IPv4, OSPFv3 cho IPv6.
---

## 🛣️ Dynamic Routing with Multi-Protocol OSPF

<div class="mb-4">
  <h3 class="text-xl mb-3">⚡ Automated, Scalable Routing</h3>
  <div class="grid grid-cols-2 gap-4 text-sm">
    <div class="p-3 bg-blue-500/10 rounded">
      <strong>OSPFv2</strong> → IPv4 routing domain (both sites)
    </div>
    <div class="p-3 bg-purple-500/10 rounded">
      <strong>OSPFv3</strong> → IPv6 routing domain (Main Site)
    </div>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4">
  <figure>
    <img src="/images/show_ip_route.png" alt="show ip route" class="rounded-lg shadow-md"/>
    <figcaption class="text-xs text-center mt-2 opacity-70">show ip route (OSPF routes)</figcaption>
  </figure>
  <figure>
    <img src="/images/show_ip_ospf.png" alt="show ip ospf neighbor" class="rounded-lg shadow-md"/>
    <figcaption class="text-xs text-center mt-2 opacity-70">show ip ospf neighbor (FULL)</figcaption>
  </figure>
</div>

---
layout: default
transition: fade
title: Multi-Layered Security Implementation
notes: |
  Bảo mật: SSH + ACL IPv6 chặn Student → FTP, cho phép Student → Web.
---

## 🔐 Securing the Network: Multi-Layered Security

<div class="grid grid-cols-2 gap-6 mb-4">
  <div>
    <h3 class="text-lg mb-2">🔑 Administrative Security</h3>
    <ul class="text-sm space-y-1">
      <li>✅ SSH replaces Telnet</li>
      <li>✅ Encrypted management sessions</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-lg mb-2">🛡️ Access Control Policy</h3>
    <ul class="text-sm space-y-1">
      <li>✅ IPv6 ACLs enforce policies</li>
      <li>❌ Block: Student → FTP</li>
      <li>✅ Allow: Student → Web</li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-3 gap-4">
  <figure>
    <img src="/images/SSH.png" alt="SSH Success" class="rounded-lg shadow-md h-70 object-cover"/>
    <figcaption class="text-xs text-center mt-1">SSH login ✅</figcaption>
  </figure>
  <figure>
    <img src="/images/acl.png" alt="FTP Blocked" class="rounded-lg shadow-md h-70 object-cover"/>
    <figcaption class="text-xs text-center mt-1">FTP timeout ❌</figcaption>
  </figure>
  <figure>
    <img src="/images/acl_allow.png" alt="Web Success" class="rounded-lg shadow-md h-65 object-cover"/>
    <figcaption class="text-xs text-center mt-1">Web access ✅</figcaption>
  </figure>
</div>

<div class="absolute top-10 right-10">
  <img src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif" alt="Security" width="120"/>
</div>

---
layout: default
transition: fade
title: Providing Essential Network Services
notes: |
  Dịch vụ: DHCP, DNS, WiFi WPA2-PSK.
---

## 🌐 Providing Essential Network Services

<div class="grid grid-cols-3 gap-4 mb-4 text-sm">
  <div class="p-3 bg-green-500/10 rounded text-center">
    <div class="text-2xl mb-2">📡</div>
    <strong>DHCP</strong><br/>
    Auto IPv4 & IPv6
  </div>
  <div class="p-3 bg-blue-500/10 rounded text-center">
    <div class="text-2xl mb-2">🌍</div>
    <strong>DNS</strong><br/>
    web.fpt.local
  </div>
  <div class="p-3 bg-purple-500/10 rounded text-center">
    <div class="text-2xl mb-2">📶</div>
    <strong>WiFi</strong><br/>
    WPA2-PSK
  </div>
</div>

<div class="grid grid-cols-3 gap-4">
  <figure>
    <img src="/images/auto_config.png" alt="ipconfig" class="rounded-lg shadow-md h-30 object-cover"/>
    <figcaption class="text-xs text-center mt-1">auto config /all</figcaption>
  </figure>
  <figure>
    <img src="/images/nslookup.png" alt="nslookup" class="rounded-lg shadow-md h-45 object-cover"/>
    <figcaption class="text-xs text-center mt-1">nslookup</figcaption>
  </figure>
  <figure>
    <img src="/images/wifi.png" alt="WiFi" class="rounded-lg shadow-md h-75 object-cover"/>
    <figcaption class="text-xs text-center mt-1">WiFi diagram</figcaption>
  </figure>
</div>



---
layout: default
transition: fade
title: Conclusion & Future Work
notes: |
  Tổng kết và hướng phát triển.
---

## ✅ Conclusion & Achievements

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-xl mb-3">🎉 What We Built</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ Functional hybrid IPv4/IPv6 network</li>
      <li>✅ Dual-Stack interoperability</li>
      <li>✅ Secure, scalable, resilient infrastructure</li>
    </ul>
  </div>
  
  <div>
    <h3 class="text-xl mb-3">🚀 Future Enhancements</h3>
    <ul class="space-y-2 text-sm">
      <li>📊 VLANs for better segmentation</li>
      <li>🔒 Site-to-site VPN</li>
      <li>🛡️ Dedicated firewall deployment</li>
    </ul>
  </div>
</div>


---
layout: center
class: text-center
title: Thank You — Q & A
notes: |
  Cảm ơn thầy/cô và các bạn đã lắng nghe. Em sẵn sàng trả lời câu hỏi.
---

<div>
  <h1 class="text-5xl font-bold mb-6">Thank You! 🙏</h1>
  
  <div class="flex justify-center">
    <img src="https://media.giphy.com/media/3o7qDEq2bMbcbPRQ2c/giphy.gif" alt="Thank You" width="300"/>
  </div>
  
</div>