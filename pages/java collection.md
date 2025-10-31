---
theme: Dracula
title: 'Làm Chủ Java Collections'
info: |
  ## Bài thuyết trình về Java Collections
  Giải quyết bài toán Quản lý Sinh viên từ A-Z, dành cho người mới bắt đầu.
---

# LÀM CHỦ JAVA COLLECTIONS
### Giải quyết bài toán Quản lý Sinh viên từ A-Z



<!-- Slide 1: Tiêu đề -->

---
layout: default
---

# Lộ Trình Buổi Học

<v-clicks>

1.  **Bài toán:** Chúng ta cần giải quyết vấn đề gì?
2.  **Công cụ:** Giới thiệu "Hộp đồ nghề" Java Collections.
3.  **Bước 1: "Dạy" cho Sinh viên cách tự so sánh** (Lớp `Student` & `Comparable`)
4.  **Bước 2: Xây dựng các chức năng xử lý** (Lớp `ProcessStudent`)
5.  **Tổng kết & Hỏi đáp.**

</v-clicks>

<!-- Slide 2: Agenda -->

---
layout: default
---

# Yêu Cầu Của Bài Toán

Chúng ta có một danh sách (`List`) các đối tượng Sinh viên.
**Cần xây dựng 3 chức năng chính:**

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold text-lg flex items-center gap-2"><mdi:sort-alphabetical-ascending/> Sắp xếp</h3>
  <p class="mt-2 text-sm">Sắp xếp danh sách theo Tên (A-Z). Nếu tên trùng, xếp theo GPA tăng dần.</p>
</div>

<div class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold text-lg flex items-center gap-2"><carbon:search/> Tìm kiếm</h3>
  <p class="mt-2 text-sm">Tìm tất cả sinh viên có tên bắt đầu bằng một chuỗi cho trước.</p>
</div>

<div class="p-4 rounded bg-gray-500/10">
  <h3 class="font-bold text-lg flex items-center gap-2"><mdi:filter-variant/> Lọc</h3>
  <p class="mt-2 text-sm">Lọc ra những sinh viên có điểm GPA cao hơn một ngưỡng nhất định.</p>
</div>

</div>

<!-- Slide 3: Bài toán -->

---
layout: two-cols-header
---

# "Hộp Đồ Nghề" Java Collections

::left::

### `List<Student>`

- Tưởng tượng nó là một cái **"Thùng chứa"** linh hoạt.
- Có thể thêm, bớt, lấy ra các sinh viên.
- `ArrayList` là một loại "thùng chứa" phổ biến nhất.

::right::

### `Collections`

- Đây là một lớp **"Trợ lý"** đa năng.
- Chứa các công cụ (phương thức) để thao tác trên "thùng chứa".
- Công cụ mạnh nhất hôm nay: `Collections.sort()`.

<!-- Slide 4: Giới thiệu công cụ -->

---
layout: center
class: "text-center"
---

# Câu Hỏi Cốt Lõi

<p class="text-3xl mt-8">Làm sao `Collections.sort()` biết cách sắp xếp `Student`?</p>

<v-clicks>

- Nó biết sắp xếp **Số**: `1, 2, 3...`
- Nó biết sắp xếp **Chữ**: `a, b, c...`
- **NHƯNG...** nó không biết nên sắp xếp `Student` theo `id`, `name`, hay `gpa`?

</v-clicks>

<p v-click class="mt-8 text-2xl text-green-500">
➡️ Chúng ta phải "dạy" cho lớp `Student` cách tự so sánh!
</p>

<!-- Slide 5: Câu hỏi cốt lõi -->

---
layout: default
---

# Bước 1: "Dạy" Student Cách So Sánh

### Interface `Comparable` - Ký Một Bản Hợp Đồng

```java
public class Student implements Comparable<Object> {
    // ...
}
```

<div class="mt-6">
<p><mdi:file-sign class="inline-block text-2xl"/> Khi bạn viết `implements Comparable`, lớp `Student` đang ký một hợp đồng, hứa rằng:</p>
<blockquote class="border-l-4 pl-4 italic my-4 text-lg">
"Tôi sẽ cung cấp một phương thức tên là `compareTo` để so sánh chính tôi với một đối tượng khác."
</blockquote>
<p>Khi đã ký, bạn <strong>BẮT BUỘC</strong> phải viết code cho phương thức `compareTo`.</p>
</div>

<!-- Slide 6: Giới thiệu Comparable -->

---
layout: default
---

# Thử Thách: `compareTo(Object other)`

### Tại sao lại là `Object` mà không phải `Student`?

```java
public int compareTo(Object other) { ... }
```
<div class="grid grid-cols-2 gap-8 items-center mt-6">
<div>
<p>`Object` là lớp cha của TẤT CẢ các lớp trong Java.</p>
<p class="mt-4">Điều này có nghĩa là `Student` đang hứa rằng nó có thể so sánh với <strong>BẤT KỲ THỨ GÌ!</strong></p>
<p v-click class="mt-4 text-red-500 font-bold text-xl">
➡️ Tiềm ẩn rủi ro nếu người ta đưa một đối tượng không phải Student vào để so sánh!
</p>
</div>
<div class="text-center" v-click>
  <ph:student-bold class="text-7xl" />
  <span class="text-4xl mx-4"> ? </span>
  <carbon:car class="text-7xl" />
</div>
</div>


<!-- Slide 7: Thử thách với Object -->

---
layout: default
---

# 3 Bước An Toàn cho `compareTo(Object)`

```java {all|3-5|7|9-14}
@Override
public int compareTo(Object other) {
    // Bước 1: "Kiểm tra an ninh" với instanceof
    if (!(other instanceof Student)) {
        return 0; // Hoặc ném ra ngoại lệ
    }
    // Bước 2: "Ép kiểu" để lấy danh tính thật
    Student o = (Student) other;

    // Bước 3: Logic so sánh chính theo yêu cầu
    int nameCompare = this.name.compareTo(o.name);
    if (nameCompare != 0) {
        return nameCompare;
    }
    return Double.compare(this.gpa, o.gpa);
}
```

<!-- Slide 8: 3 bước an toàn -->

---
layout: two-cols-header
---

# Bước 1: "Nhân Viên Bảo Vệ" `instanceof`

Đây là một **chốt chặn an toàn** để ngăn ngừa lỗi.

::left::

### `instanceof`
- Là một toán tử kiểm tra, trả lời câu hỏi: _"Đối tượng này có phải là một thể hiện của Lớp kia không?"_
- `if (!(other instanceof Student))` đọc là: "**Nếu `other` KHÔNG PHẢI là một `Student`...**"
- Giúp ngăn chặn lỗi ép kiểu sai (`ClassCastException`).

::right::

<div class="text-center p-8 rounded bg-gray-500/10">
  <mdi:security class="text-8xl text-blue-500" />
  <p class="mt-4">`instanceof` hoạt động như một nhân viên bảo vệ, kiểm tra "thẻ" (`Student`) trước khi cho vào khu vực xử lý.</p>
</div>

<!-- Slide 9: Giải thích instanceof -->

---
layout: two-cols-header
---

# Bước 2: "Lột Mặt Nạ" - Ép Kiểu (Casting)

Sau khi qua cửa an ninh, `other` vẫn đang "đeo chiếc mặt nạ" `Object`.

::left::

### Ép kiểu
- `(Student)`: Là hành động "lột mặt nạ", để lộ ra bản chất thật.
- `Student o = (Student) other;`
- Giờ đây, thông qua biến `o`, chúng ta có thể truy cập các thuộc tính riêng của Student như `o.name` và `o.gpa`.

::right::

<div class="text-center p-8 rounded bg-gray-500/10">
  <p class="mt-4">Ép kiểu giúp chúng ta làm việc với bản chất thật sự của đối tượng, chứ không phải với "lớp vỏ" `Object` bên ngoài.</p>
</div>

<!-- Slide 10: Giải thích casting -->

---
layout: default
---

# Bước 3: Hoàn Thiện Logic So Sánh

```java {all|3-6|8}
// ... sau khi đã ép kiểu an toàn
// o là một đối tượng Student

// Ưu tiên 1: So sánh tên (A-Z)
int nameCompare = this.name.compareTo(o.name);
if (nameCompare != 0) {
    return nameCompare; // Tên khác nhau, trả về kết quả ngay
}

// Ưu tiên 2: Tên giống nhau -> so sánh GPA tăng dần
return Double.compare(this.gpa, o.gpa);
```
- **`compareTo`** của `String` trả về: `< 0` (tên này đứng trước), `0` (bằng nhau), `> 0` (tên này đứng sau).
- **`Double.compare`** cũng hoạt động tương tự cho số thực.

<!-- Slide 11: Hoàn thiện logic -->

---
layout: center
class: "text-center"
---

# Bước 2: Xây Dựng `ProcessStudent`

<p class="text-2xl mt-8">
Phần khó nhất đã xong! Lớp `Student` của chúng ta giờ đã "thông minh".
</p>
<p class="mt-4">
Giờ là lúc sử dụng sự thông minh này để thực hiện các chức năng một cách dễ dàng.
</p>
<mdi:cogs class="text-8xl mt-8 animate-spin" />

<!-- Slide 12: Chuyển sang ProcessStudent -->

---
layout: two-cols-header
---

# Chức năng 1: `sortStudent`

### Sức mạnh của `Collections.sort()`

::left::

```java
public void sortStudent(List<Student> l){
    // TODO: you should do sort list l here
    
    Collections.sort(l);
}
```

<div v-click class="mt-8 text-center">
  <carbon:magic-wand-filled class="text-7xl text-yellow-400"/>
  <p class="text-2xl font-bold">Chỉ một dòng duy nhất!</p>
</div>

::right::

<div class="p-4 rounded bg-gray-500/10">
<p class="font-bold">Tại sao?</p>
<p class="mt-4">
Khi bạn gọi `Collections.sort(l)`, nó sẽ tự động đi vào từng đối tượng `Student` trong danh sách và gọi phương thức `compareTo` mà chúng ta đã vất vả viết lúc nãy để quyết định thứ tự.
</p>
</div>

<!-- Slide 13: Hàm sort -->

---
layout: two-cols-header
---

# Chức năng 2: `find_by_partial_name`

### Mô Hình Lọc (Filter Pattern)

::left::

```java
public List<Student> find_by_partial_name(List<Student> l, String letter){
    // 1. Tạo list rỗng mới
    ArrayList<Student> filteredL = new ArrayList<>();
    // 2. Duyệt qua list gốc
    for (Student s : l) {
        // 3. Kiểm tra điều kiện
        if (s.name.startsWith(letter)) {
            // 4. Thêm vào list mới nếu thỏa
            filteredL.add(s);
        }
    }
    // 5. Trả về list mới
    return filteredL;
}
```

::right::
<div class="p-4 rounded bg-gray-500/10">
<p class="font-bold">Tưởng tượng:</p>
<p class="mt-4">
Bạn có một rổ đầy trái cây (`l`) và muốn chọn ra những quả táo (`startsWith(letter)`).
</p>
<p class="mt-4">
Bạn lấy một cái rổ rỗng khác (`filteredL`), xem từng quả, quả nào là táo thì bỏ vào rổ mới.
</p>
<mdi:basket-plus-outline class="text-8xl mt-6 mx-auto"/>
</div>

<!-- Slide 14: Hàm find name -->

---
layout: two-cols-header
---

# Chức năng 3: `find_higher_gpa`

### Sử dụng lại Filter Pattern!

::left::

```java
public List<Student> find_higher_gpa(List<Student> l, int gpa){
    ArrayList<Student> filteredL = new ArrayList<>();
    
    for (Student s : l) {
        // Chỉ thay đổi điều kiện ở đây!
        if (s.gpa > gpa) {
            filteredL.add(s);
        }
    }
    return filteredL;
}
```

::right::
<div class="p-4 rounded bg-gray-500/10">
<p class="font-bold">Tư duy lập trình tốt:</p>
<p class="mt-4">
Nhận ra và tái sử dụng các "mô hình" (pattern) lặp đi lặp lại.
</p>
<p class="mt-4">
Logic lọc là giống hệt, chỉ có **điều kiện lọc** là thay đổi.
</p>
<carbon:repeat class="text-8xl mt-6 mx-auto"/>
</div>

<!-- Slide 15: Hàm find gpa -->

---
layout: default
---

# Tổng Kết Luồng Hoạt Động

<div class="text-center mt-6 space-y-2">
  <div v-click class="p-2 rounded bg-gray-500/10">
    <strong>1. Main Program:</strong> Có một `List&lt;Student&gt;`. Gọi `ps.sortStudent(list)`
  </div>
  <carbon:arrow-down class="text-3xl" v-click/>
  <div v-click class="p-2 rounded bg-gray-500/10">
    <strong>2. `Collections.sort()`:</strong> Được gọi. Bắt đầu quá trình sắp xếp.
  </div>
  <carbon:arrow-down class="text-3xl" v-click/>
  <div v-click class="p-2 rounded bg-blue-500/20">
    <strong>3. `sort()` gọi `studentA.compareTo(studentB)`:</strong> "Này hai bạn, ai đứng trước?"
  </div>
  <carbon:arrow-down class="text-3xl" v-click/>
  <div v-click class="p-2 rounded bg-green-500/20">
    <strong>4. `compareTo` trả về kết quả:</strong> "Bạn A đứng trước vì tên bắt đầu bằng 'An'!"
  </div>
  <carbon:arrow-down class="text-3xl" v-click/>
  <div v-click class="p-2 rounded bg-gray-500/10">
    <strong>5. Main Program:</strong> In ra danh sách đã được sắp xếp hoàn hảo.
  </div>
</div>

<!-- Slide 16: Tổng kết luồng -->

---
layout: default
---

# Những Gì Chúng Ta Đã Học

<ul class="mt-8 space-y-4 text-xl">
  <li v-click class="flex items-center gap-4"><carbon:checkbox-checked class="text-green-500 text-3xl"/> **`Comparable`** là "hợp đồng" để dạy cho đối tượng cách tự so sánh.</li>
  <li v-click class="flex items-center gap-4"><carbon:checkbox-checked class="text-green-500 text-3xl"/> **`Collections.sort()`** là công cụ mạnh mẽ, tự động sử dụng `compareTo()` bạn đã viết.</li>
  <li v-click class="flex items-center gap-4"><carbon:checkbox-checked class="text-green-500 text-3xl"/> Luôn dùng **`instanceof`** để kiểm tra an toàn trước khi **ép kiểu (casting)** khi làm việc với `Object`.</li>
  <li v-click class="flex items-center gap-4"><carbon:checkbox-checked class="text-green-500 text-3xl"/> **Filter Pattern** (tạo list mới -> duyệt -> kiểm tra -> thêm) là một kỹ thuật cực kỳ phổ biến.</li>
</ul>

<!-- Slide 17: Key takeaways -->

---
layout: center
class: "text-center"
---

# Cảm Ơn Các Bạn!
### Q & A

<!-- Slide 18: Q&A -->
