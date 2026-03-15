# Hướng Dẫn Tạo Slide Slidev - Phong Cách Game Account Shop

## 📋 Giới Thiệu

Tài liệu này hướng dẫn cách viết file Markdown để tạo presentation slides với **Slidev** - framework tạo slide từ Markdown với power của Vue 3.

---

## 🏗️ Cấu Trúc Cơ Bản

### 1. Frontmatter (Cấu Hình Slide)

Mỗi slide bắt đầu với frontmatter trong dấu `---`:

```yaml
---
layout: center              # Layout: center, default, cover, intro, etc.
highlighter: shiki          # Syntax highlighter
css: unocss                 # CSS framework
colorSchema: dark           # dark | light
transition: fade-out        # Hiệu ứng chuyển slide
title: Tiêu đề              # Tên slide (cho export PDF)
exportFilename: Tên file    # Tên file khi export
lineNumbers: false          # Hiển thị số dòng code
drawings:
  persist: false            # Lưu vẽ khi chuyển slide
mdc: true                   # Markdown components
clicks: 0                   # Số click animation
preload: false              # Preload assets
glowSeed: 42                # Seed cho glow effect
routerMode: hash            # Hash routing mode
---
```

### 2. Chia Slides

Dùng `---` để chia giữa các slides:

```markdown
---
# Slide 1
Nội dung slide 1
---
# Slide 2
Nội dung slide 2
---
```

---

## 🎨 Layout Patterns

### Cover Slide (Slide Mở Đầu)

```markdown
---
layout: center
glowSeed: 42
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
```

### Grid Layout - 3 Cột Tech Stack

```markdown
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
  </div>
</div>

<!-- Replicate cho các cột khác... -->

</v-clicks>

</div>
```

### Grid Layout - 2 Cột So Sánh

```markdown
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
  </div>
</div>

<div v-click class="border-2 border-solid border-red-800 bg-red-800/20 rounded-lg p-6">
  <!-- Nội dung cột 2... -->
</div>

</div>
```

### Center Layout - Statement

```markdown
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

<!-- Replicate cho các box khác... -->

</div>
```

---

## 🎯 Component Patterns

### Card Component (Dùng cho box nội dung)

```markdown
<div class="border-2 border-solid border-[color] bg-[color]/20 rounded-lg p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="i-carbon:[icon-name] text-[color]-300 text-3xl" />
    <span class="font-bold text-2xl">Tiêu đề</span>
  </div>
  <div class="flex flex-col gap-3">
    <!-- Nội dung -->
  </div>
</div>
```

### Header Card (Dùng cho Tech Stack items)

```markdown
<div class="border-2 border-solid border-white/5 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
  <div class="flex items-center bg-blue-800/40 backdrop-blur px-3 py-2 rounded-md">
    <div class="i-devicon:spring text-blue-300 text-2xl mr-2" />
    <div class="font-semibold">Backend</div>
  </div>
  <div class="px-4 py-3 flex flex-col gap-2">
    <!-- List items -->
  </div>
</div>
```

---

## ✨ Animations

### v-click - Hiện từng phần

```markdown
<div v-click>Nội dung hiện sau click 1</div>
<div v-click>Nội dung hiện sau click 2</div>
<div v-click>Nội dung hiện sau click 3</div>
```

### v-clicks - Group animations

```markdown
<v-clicks>

<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>

</v-clicks>
```

---

## 🎨 Styling với UnoCSS

### Màu Sắc (Colors)

| Class | Màu | Công dụng |
|-------|-----|-----------|
| `text-green-300` | Xanh nhạt | Text chính |
| `text-green-400` | Xanh đậm hơn | Nhấn mạnh |
| `text-red-300` | Đỏ nhạt | Cảnh báo |
| `text-blue-300` | Xanh dương | Primary |
| `text-purple-300` | Tím | Secondary |
| `text-amber-300` | Vàng | Accent |

### Background Colors

| Class | Công dụng |
|-------|-----------|
| `bg-green-800/20` | Nền xanh transparent |
| `bg-green-800/40` | Nền xanh đậm hơn |
| `bg-blue-800/40` | Nền blue primary |
| `bg-purple-800/40` | Nền purple secondary |
| `bg-red-900/30` | Nền đỏ warning |

### Border Colors

| Class | Border |
|-------|--------|
| `border-green-800` | Xanh |
| `border-red-800` | Đỏ |
| `border-blue-800` | Blue |
| `border-purple-800` | Tím |
| `border-white/5` | Trắng transparent |

### Spacing

| Class | Khoảng cách |
|-------|-------------|
| `gap-2` | 8px |
| `gap-3` | 12px |
| `gap-4` | 16px |
| `gap-6` | 24px |
| `p-4` | Padding 16px |
| `p-6` | Padding 24px |
| `px-4` | Padding ngang 16px |
| `py-2` | Padding dọc 8px |
| `mt-4` | Margin top 16px |
| `mt-6` | Margin top 24px |
| `mt-8` | Margin top 32px |
| `mb-2` | Margin bottom 8px |
| `mb-3` | Margin bottom 12px |
| `mb-4` | Margin bottom 16px |

### Border & Radius

| Class | Công dụng |
|-------|-----------|
| `border-2` | Border dày 2px |
| `border-solid` | Border kiểu solid |
| `rounded-lg` | Bo góc 8px |
| `rounded-md` | Bo góc 6px |
| `rounded` | Bo góc 4px |

### Flexbox

| Class | Công dụng |
|-------|-----------|
| `flex` | Display flex |
| `flex-col` | Hướng dọc |
| `flex-row` | Hướng ngang (default) |
| `items-center` | Canh giữa trục dọc |
| `justify-center` | Canh giữa trục ngang |
| `justify-between` | Giãn đều |

### Grid

| Class | Công dụng |
|-------|-----------|
| `grid` | Display grid |
| `grid-cols-2` | 2 cột |
| `grid-cols-3` | 3 cột |
| `grid-cols-4` | 4 cột |

### Opacity

| Class | Độ trong suốt |
|-------|---------------|
| `opacity-60` | 60% |
| `opacity-70` | 70% |
| `opacity-80` | 80% |

### Text Size

| Class | Kích thước |
|-------|------------|
| `text-sm` | 14px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-5xl` | 48px |

---

## 🎯 Icon Usage

### Carbon Icons

```markdown
<div class="i-carbon:trending-up text-green-300 text-3xl" />
<div class="i-carbon:warning-alt text-red-300 text-3xl" />
<div class="i-carbon:checkmark-outline text-green-400 text-sm" />
<div class="i-carbon:user text-blue-300 text-5xl" />
<div class="i-carbon:store text-green-300 text-5xl" />
<div class="i-carbon:shield text-purple-300 text-5xl" />
<div class="i-carbon:search text-blue-300 text-3xl" />
<div class="i-carbon:shopping-cart text-green-300 text-3xl" />
<div class="i-carbon:mobile-payment text-purple-300 text-3xl" />
<div class="i-carbon:email text-amber-300 text-3xl" />
<div class="i-carbon:database text-xl" />
<div class="i-carbon:chart-relationship text-xl" />
<div class="i-carbon:add text-blue-300" />
<div class="i-carbon:time text-purple-300" />
<div class="i-carbon:close text-red-400" />
<div class="i-carbon:arrow-right text-blue-300" />
<div class="i-carbon:star text-yellow-300 text-2xl" />
```

### Devicon Icons

```markdown
<div class="i-devicon:spring text-blue-300 text-2xl" />
<div class="i-devicon:mysql text-green-300 text-2xl" />
```

### Size Options

| Class | Size |
|-------|------|
| `text-sm` | 14px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-5xl` | 48px |

---

## 🖼️ Images

```markdown
---
class: py-10
---

# Database ERD Diagram

<div class="mt-6 flex justify-center">
  <img src="/images_fcode_challenge3/ERD.svg" class="max-h-[70vh] w-auto rounded-lg" alt="Entity Relationship Diagram" />
</div>
```

---

## 📝 Code Blocks

```markdown
\`\`\`java
@Service
@RequiredArgsConstructor
public class GameAccountService {
    private final GameAccountRepository repository;

    public Page<GameAccount> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }
}
\`\`\`
```

---

## 🎯 Glow Effect Seeds

Mỗi slide có `glowSeed` khác nhau để tạo hiệu ứng glow ngẫu nhiên nhưng ổn định:

| Slide | glowSeed |
|-------|----------|
| Cover | 42 |
| Tech Stack | 72 |
| Market Context | 88 |
| Problem | 104 |
| Solution | 120 |
| Architecture | 136 |
| Database | 152 |
| ERD | 160 |
| Buyer Journey | 184 |
| Seller Journey | 200 |

---

## 🚀 Commands

```bash
# Development
npm run dev

# Build production
npm run build

# Export PDF
npm run export

# Export PPTX
npm run export -- --format pptx
```

---

## 📁 Folder Structure

```
slidev-osg/
├── slides.md              # Entry point
├── pages/
│   └── game-account-shop.md  # Main slide content
├── public/
│   └── images_fcode_challenge3/
│       └── ERD.svg        # Images
├── components/
│   └── Counter.vue        # Custom components
├── global-bottom.vue      # Global background effects
└── style.css              # Custom styles
```

---

## 🎯 Tips & Best Practices

1. **Mỗi slide nên có glowSeed khác nhau** để tạo hiệu ứng đa dạng
2. **Dùng v-clicks cho danh sách** để hiện từng item
3. **Giữ consistent color scheme** - green cho success, red cho warning, blue cho primary
4. **Dùng grid layouts** cho nội dung cần so sánh
5. **Backdrop blur** tạo hiệu ứng glass morphism
6. **Icons luôn đi kèm text** để rõ nghĩa
7. **Responsive spacing** - dùng gap thay vì margin cố định

---

## 🔗 Tài Liệu Tham Khảo

- [Slidev Official Docs](https://sli.dev/)
- [UnoCSS Docs](https://unocss.dev/)
- [Carbon Icons](https://icones.js.org/collection/carbon)
- [Devicon Icons](https://icones.js.org/collection/devicon)
