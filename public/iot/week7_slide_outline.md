# Week 7 Presentation Outline — OPA1 (10–15 phút)

> **Đề tài:** Trạm thanh toán QR thông minh dùng VietQR (PayOS) chi phí thấp cho quán nhỏ
> **Nhóm:** Group 3 — **Môn:** IOT102 (Internet of Things), Summer 2026
> **Cột mốc:** OPA1 — đánh giá tiến độ đầu tiên, demo hardware + Oral Viva
>
> **Cách đọc outline này:** mỗi slide có 5 khối — *(1) Nội dung trên slide* (bullet ngắn, để lên màn hình), *(2) Câu mở miệng* (speaker note, nói ra), *(3) Hình ảnh* (file chèn + vị trí + caption), *(4) Chuyển ý*, *(5) Thời lượng*.
>
> **Thư mục ảnh:** `Mydocs/final/image/` — đã có sẵn 4 ảnh khớp slide 4–7. Các ảnh còn lại cần tìm/chụp/vẽ thêm (xem danh sách cuối file).

---

## Slide 1 — Title
**(1) Nội dung trên slide**
- Đề tài: **Smart QR Payment Station** — VietQR (PayOS) chi phí thấp cho quán nhỏ
- Group 3 · Môn IOT102 — Summer 2026
- Cột mốc: **OPA1 (Week 7)**
- (góc dưới) Logo trường + logo môn nếu có

**(2) Câu mở miệng**
> "Em xin trình bày tiến độ OPA1 của nhóm: một trạm thanh toán QR giá rẻ, đặt ngay tại quầy quán nhỏ — khách quét mã, máy tự đọc to số tiền. Đây là cột mốc đầu tiên trong lộ trình RBL 11 tuần."

**(3) Hình ảnh**
- **Ảnh cần tìm (HERO):** ảnh tổng thiết bị thật đặt tại quầy quán (ESP32 + OLED + loa), hoặc montage VietQR + ESP32. Đặt full-bleed nửa slide, tiêu đề đè lên.
- Caption (nếu có): *Low-cost embedded QR payment terminal — prototype at OPA1.*

**(4) Chuyển ý:** "Trước khi đi vào kiến trúc, vì sao nhóm chọn đề tài này?"

**(5) Thời lượng:** 30–45 giây

---

## Slide 2 — Problem Statement
**(1) Nội dung trên slide**
- Quán nhỏ/quán vỉa hè cần: **thanh toán QR rẻ, gọn, phản hồi ngay tại quầy**.
- POS thương mại: **đắt** (vài triệu/đầu), cồng kềnh, khó tùy biến, phụ thuộc nhà cung cấp.
- Mong muốn: máy để bàn, tự **hiển thị QR + đọc to số tiền** khi khách đã chuyển khoản → thu ngân không phải nhìn điện thoại.
- **Khoảng trống:** thiếu giải pháp nhúng chi phí thấp, có phản hồi thời gian thực (màn + loa).

**(2) Câu mở miệng**
> "Quán nhỏ đang quét QR nhưng thu ngân vẫn phải ngó điện thoại để xác nhận. Mục tiêu nhóm: một thiết bị để bàn dưới vài trăm nghìn, tự hiển thị mã và đọc to số tiền khi thanh toán xong."

**(3) Hình ảnh**
- **Ảnh cần tìm (SPLIT):** chia đôi ảnh — bên trái **POS/ máy tính tiền cồng kềnh** (keyword: "POS terminal cafe"), bên trái dưới ghi "đắt, cứng"; bên phải **thiết bị nhỏ ESP32 + OLED** (chụp thật). Tạo tương phản "đắt & cứng" vs "rẻ & gọn".
- Bổ sung nhỏ: ảnh khách dùng app ngân hàng quét mã QR (keyword: "scan QR payment phone").

**(4) Chuyển ý:** "Vậy ở OPA1 nhóm phải chứng minh được gì?"

**(5) Thời lượng:** ~1 phút

---

## Slide 3 — Mục tiêu OPA1 & deliverables
**(1) Nội dung trên slide**
- OPA1 = chốt **kiến trúc nền** + chứng minh **hiện thực hóa được**.
- 5 deliverables theo rubric:
  - ✅ Block diagram
  - ✅ Circuit schematic
  - ✅ Flowchart
  - ✅ Prototype phần cứng chạy cơ bản
  - ✅ AI Audit Log / AI Reflection

**(2) Câu mở miệng**
> "OPA1 chưa cần hệ thống hoàn chỉnh, nhưng phải cho thấy kiến trúc đủ vững để phát triển. Nhóm sẽ nạp 5 thứ: 3 loại sơ đồ, prototype chạy thật, và phần phản biện với AI."

**(3) Hình ảnh**
- **Ảnh cần tìm (CHECKLIST/TIMELINE):** đồ họa checklist 5 mục (đã đánh dấu ✓), hoặc timeline 11 tuần có đánh dấu nổi "Week 7 — OPA1". Dễ tự vẽ bằng Canva/draw.io.
- Caption tuỳ chọn: *OPA1 deliverables: architecture diagrams, prototype, and AI reflection.*

**(4) Chuyển ý:** "Bắt đầu bằng bức tranh tổng thể của hệ thống."

**(5) Thời lượng:** ~45 giây

---

## Slide 4 — Tổng quan kiến trúc (Block Diagram)
**(1) Nội dung trên slide**
- **Thu ngân (PC):** Streamlit `cashier.py` → tạo đơn.
- **Server (PC/VPS):** FastAPI `app.py` + SQLite `store.py` + trang `/tv`; gọi PayOS, nhận webhook.
- **Thiết bị biên (ESP32):** poll server qua LAN → điều khiển OLED + loa.
- **Display & feedback:** OLED SH1106 (QR + trạng thái) · MAX98357A + loa 3W (đọc số tiền).
- **PayOS (Internet):** sinh QR thật, báo PAID qua webhook.
- **Người dùng:** khách quét QR bằng app ngân hàng; TV xem hàng đợi.
- **Tư tưởng:** **edge-centric** — hiển thị + âm thanh xử lý tại biên, xác thực giao dịch giao cho backend + PayOS.

**(2) Câu mở miệng**
> "Hệ thống theo hướng edge-centric: phần xử lý thời gian thực nằm trên ESP32 ngay tại quầy, còn việc xác nhận tiền nằm ở backend và PayOS. Luồng dữ liệu đi một chiều rõ ràng."

**(3) Hình ảnh** ✅ đã có
- **File:** `Mydocs/final/image/blockDiagram.jpg`
- **Vị trí:** chiếm ~⅔ diện tích slide (trái/trung tâm), bullet phụ bên phải.
- **Caption:** *Overall block diagram of the ESP32-based smart QR payment station with VietQR (PayOS).*

**(4) Chuyển ý:** "Đi vào chi tiết phần cứng biên — các linh kiện nối với nhau thế nào?"

**(5) Thời lượng:** ~1.5 phút

---

## Slide 5 — Hardware Interfacing (Schematic)
**(1) Nội dung trên slide** — bảng nối chân ngắn gọn:

| Ngoại vi | Bus | Chân ESP32 |
|---|---|---|
| OLED SH1106 1.3" | **I2C** (0x3C) | SDA→GPIO21, SCL→GPIO22, VCC→3V3, GND→GND |
| MAX98357A + loa 3W | **I2S** | DIN→GPIO25, BCLK→GPIO26, LRC→GPIO27 |
| MAX98357A (nguồn) | — | VIN→3V3/5V, GAIN→GND (9dB), **SD để trống** |
| Loa 3W (4–8Ω) | — | SPK+ / SPK− |

- **Lưu ý:** GND chung bắt buộc · Wi-Fi là kết nối logic (không dây vật lý).
- **Lý giải:** I2C tiết kiệm GPIO (2 dây cho màn hình); I2S linh hoạt hơn DFPlayer Mini khi cần **đọc số tiền động**.

**(2) Câu mở miệng**
> "Phần cứng cố tình tối giản: chỉ 2 ngoại vi. Màn hình đi I2C để gọn dây, âm thanh đi I2S vì nhóm cần tổng hợp câu đọc số tiền bất kỳ — điều mà module phát file rời không làm tốt."

**(3) Hình ảnh** ✅ đã có
- **File:** `Mydocs/final/image/schema wokwi.jpg` *(lưu ý tên file có dấu cách)*
- **Vị trí:** trung tâm, lớn để đọc rõ số chân. Bảng chân để bên cạnh làm phụ chú.
- **Caption:** *Hardware interfacing: OLED SH1106 over I2C and MAX98357A + 3W speaker over I2S.*

**(4) Chuyển ý:** "Phần cứng nối xong — firmware điều khiển luồng thế nào?"

**(5) Thời lượng:** ~1.5 phút

---

## Slide 6 — Firmware Flowchart
**(1) Nội dung trên slide** (chỉ nêu mốc chính, chi tiết nằm trong ảnh)
1. Bật nguồn → khởi tạo OLED (I2C), Audio I2S + LittleFS, mutex/queue, tạo NetworkTask trên Core 0.
2. NetworkTask kết nối Wi-Fi LAN **ở nền** (setup không chờ Wi-Fi).
3. OLED hiện "Sẵn sàng", chờ đơn.
4. Thu ngân tạo đơn (Streamlit) → server gọi PayOS lấy `qrCode` + `orderCode`.
5. NetworkTask poll `GET /api/device/current` (1.5s) → có đơn PENDING → vẽ QR (zoom ×2).
6. Khách quét QR → PayOS **webhook PAID** → server đánh dấu PAID.
7. NetworkTask poll `GET /api/device/paid-event` → `paid==true` → đẩy vào queue.
8. Core 1: OLED "THANH CÔNG" + loa đọc số tiền → ≥4s → về "Sẵn sàng".
- **Nhánh lỗi:** mất Wi-Fi → NetworkTask tự reconnect; **audio không bị giật**.

**(2) Câu mở miệng**
> "Vòng đời một đơn rất tuyến tính: tạo đơn → hiện QR → khách thanh toán → máy đọc tiền → reset. Điểm then chốt nằm ở bước 8: đọc loa và poll mạng chạy song song nên không giật."

**(3) Hình ảnh** ✅ đã có
- **File:** `Mydocs/final/image/flowchart.jpg`
- **Vị trí:** trung tâm, full-width. Các mốc số (1–8) trên slide nên khớp với nhãn trong ảnh.
- **Caption:** *Firmware flowchart: QR display, payment polling, and spoken-amount feedback.*

**(4) Chuyển ý:** "Vì sao audio không giật khi mạng lag? Nhờ phân luồng dual-core."

**(5) Thời lượng:** ~1.5 phút

---

## Slide 7 — Dual-Core Task Allocation
**(1) Nội dung trên slide**
- **Core 0 (PRO_CPU) — NetworkTask:** giữ/reconnect Wi-Fi, HTTP GET (poll 1.5s), parse JSON thủ công.
- **Core 1 (APP_CPU) — `loop()`:** `audio_loop()` (I2S real-time) + render OLED (U8g2) + đọc MP3 từ LittleFS.
- **Shared state (`sync_state.cpp`):**
  - `current{qr_code, amount, queue_no}` + **mutex** `g_current_mutex`
  - **FreeRTOS queue** paid-event (len=8)
  - `g_wifi_connected` **volatile bool** (atomic)
- **Kết luận:** HTTP blocking kẹt hẳn ở Core 0 → **câu đọc số tiền trên Core 1 không bao giờ bị gián đoạn**.

**(2) Câu mở miệng**
> "Đây là điểm mới kỹ thuật: nhóm tách hẳn mạng sang một nhân. Ba cơ chế đồng bộ — mutex, queue, volatile bool — để hai nhân giao tiếp an toàn mà không block nhau."

**(3) Hình ảnh** ✅ đã có
- **File:** `Mydocs/final/image/dual_core_architecture.jpg`
- **Vị trí:** trung tâm, 2 cột core song song dễ thấy.
- **Caption:** *Dual-core allocation: NetworkTask on Core 0 isolated from audio/UI on Core 1 via mutex + queue.*

**(4) Chuyển ý:** "Mỗi quyết định trên đều đã được phản biện với AI — xem bảng trade-off."

**(5) Thời lượng:** ~1 phút

---

## Slide 8 — Design Trade-off Table  *(mạnh cho rubric AI Reflection)*
**(1) Nội dung trên slide** — bảng 4 cột:

| Design aspect | AI đề xuất | Phương án khác | **Nhóm chọn & lý do** |
|---|---|---|---|
| Vi điều khiển | Raspberry Pi | Arduino | **ESP32** — rẻ, ít điện, có sẵn Wi-Fi, đủ cho tác vụ |
| Device↔Server | Server push / MQTT | — | **HTTP polling trong LAN** — ESP32 không IP công khai, đơn giản, ổn định |
| Báo thanh toán | Backend poll PayOS | Xác nhận tay | **Webhook PayOS** — realtime, ít gọi API, đúng chuẩn khuyến nghị |
| Âm thanh | DFPlayer Mini / buzzer | — | **I2S stitching (MAX98357A)** — đọc số tiền động |
| Hiển thị | Màn cảm ứng / chỉ web | — | **OLED + trang TV `/tv`** — rẻ, vừa đủ |

**(2) Câu mở miệng**
> "Bảng này là cốt lõi phần AI Reflection. Cột cuối là **Human Delta** — chỗ nhóm chốt phương án khác AI dựa trên chi phí, ràng buộc LAN, và nhu cầu đọc số tiền động."

**(3) Hình ảnh** *(tuỳ chọn)*
- **Ảnh cần chụp (TABLE SCREENSHOT):** chụp chính bảng này từ slide/report (hoặc vẽ lại gọn trên Canva) để chữ to, dễ đọc khi trình chiếu. Bảng trên slide thường to hơn ảnh — có thể chỉ cần vẽ trực tiếp, không cần ảnh.

**(4) Chuyển ý:** "Từ bảng này, nhóm có kết quả chạy thật chưa?"

**(5) Thời lượng:** ~1 phút

---

## Slide 9 — Current Prototype Progress
**(1) Nội dung trên slide**
- ✅ ESP32 chạy ổn định firmware **dual-core**.
- ✅ OLED SH1106 vẽ được **QR PayOS** + các màn trạng thái.
- ✅ MAX98357A **đọc to số tiền tiếng Việt** sau thanh toán.
- ✅ Câu kiểm tra loa khi khởi động.
- 📊 Build thật: **RAM 18.3% · Flash 63.9%** → còn nhiều dư địa.
- 🎬 Demo được: tạo đơn (Streamlit) → OLED hiện QR → quét → loa đọc + "THANH CÔNG".

**(2) Câu mở miệng**
> "Đây không phải ý tưởng — đây là prototype chạy thật. Nhóm có ảnh chụp màn hình OLED và ảnh breadboard. RAM mới 18%, Flash 64%, nghĩa là còn rộng chỗ để mở rộng ở các tuần sau."

**(3) Hình ảnh** ⚠️ **cần ảnh thật (quan trọng nhất cho OPA1)**
- **Ảnh cần chụp (REAL DEVICE):** breadboard thật với ESP32 + OLED + loa, đặt trên bàn (góc nghiêng đẹp).
- **Ảnh cần chụp (OLED SCREENS):** 2 ảnh chụp gần màn OLED — (a) đang hiện QR + số tiền, (b) hiện "THANH CÔNG".
- **Ảnh cần chụp (BUILD STATS):** chụp cửa sổ Arduino IDE phần "Sketch uses … (63%) of flash, … (18%) of RAM".
- **Ảnh cần chụp (CASHIER UI):** screenshot giao diện Streamlit `cashier.py`.
- Bố cục đề xuất: 4 ảnh nhỏ dạng gallery 2×2 + 1 dòng số liệu to ở dưới.

**(4) Chuyển ý:** "Tiến độ đủ tốt — nhưng phần đáng điểm nhất là phản biện với AI."

**(5) Thời lượng:** ~1 phút

---

## Slide 10 — AI Reflection / Audit Log
**(1) Nội dung trên slide**
- **Giá trị không nằm ở "dùng AI", mà ở Human Delta** — chỗ nhóm đánh giá / sửa / bác bỏ đề xuất AI.
- Các entry tiêu biểu:
  1. **Hardware selection:** AI gợi ý Pi → nhóm chọn ESP32 (cost, power, Wi-Fi).
  2. **Protocol:** AI hướng tới push/MQTT → nhóm chọn polling vì ràng buộc LAN.
  3. **Payment notification:** AI gợi ý poll PayOS → nhóm chọn webhook (realtime).
  4. **Audio:** AI gợi ý DFPlayer → nhóm chọn I2S stitching (đọc động).
  5. **Debug:** AI hỗ trợ fix lỗi I2C/LittleFS `uploadfs`/thư viện audio → **kiểm chứng lại với wiring thật**.

**(2) Câu mở miệng**
> "Môn yêu cầu AI Reflection có trọng số lớn. Nhóm không copy AI: mỗi entry đều ghi AI đề xuất gì, AI sai/thiếu ở đâu, và nhóm quyết định khác dựa trên điều kiện phần cứng thật."

**(3) Hình ảnh** *(nên có để tăng tính thuyết phục)*
- **Ảnh cần chụp (AUDIT LOG / CHAT):** screenshot một đoạn chat thật với AI (ChatGPT/Claude) ở một trade-off bất kỳ, hoặc screenshot bảng AI Audit Log từ report. Che thông tin nhạy cảm.

**(4) Chuyển ý:** "Mức độ phù hợp với rubric môn học ra sao?"

**(5) Thời lượng:** ~1.5 phút

---

## Slide 11 — Fit với rubric OPA1 (6 lớp IoT)
**(1) Nội dung trên slide** — map đề tài vào 6 lớp của một bài toán IoT:
- **Processing:** ESP32 dual-core ✅
- **Display / visualization:** OLED SH1106 (QR + trạng thái) + trang `/tv` ✅
- **Wireless communication:** Wi-Fi LAN + HTTP polling ✅
- **External service integration:** PayOS / VietQR qua webhook ✅
- **Human interaction:** khách quét QR; thu ngân tạo đơn (Streamlit) ✅
- **Actuation / feedback:** loa I2S đọc số tiền + màn "THANH CÔNG" ✅
- **Lợi thế học thuật:** dễ viết theo hướng *system design + literature-based justification* (có sẵn so sánh Arduino / ESP32+Firebase / RFID campus / vending-WebSocket).

**(2) Câu mở miệng**
> "Đề tài khớp đủ 6 lớp của một hệ thống IoT — từ xử lý, giao tiếp không dây, tới tích hợp dịch vụ ngoài và phản hồi. Đây là lợi thế khi chuyển sang báo cáo final."

**(3) Hình ảnh** *(tuỳ chọn)*
- **Ảnh cần tìm (CHECKLIST 6 LỚP):** sơ đồ 6 ô icon (chip, màn hình, wifi, đám mây, người, loa) đánh dấu ✓. Tự vẽ trên Canva/draw.io.

**(4) Chuyển ý:** "Vẫn còn điểm cần khắc phục — nhóm thành thật nêu ra."

**(5) Thời lượng:** ~45 giây

---

## Slide 12 — Hạn chế hiện tại
**(1) Nội dung trên slide**
- Cơ chế **tự reconnect Wi-Fi** cần củng cố thêm.
- Từ điển âm thanh cho số đặc biệt (**lẻ, mốt, lăm**) cần tinh chỉnh.
- Chưa có **log vận hành** để dựng methodology/result.
- Chưa thử nhiều **khoảng cách quét QR** trên OLED 64px (độ phân giải thấp).

**(2) Câu mở miệng**
> "Nhóm nêu thẳng 4 hạn chế đang mở — chủ yếu là độ mượt reconnect, số đọc, thu thập dữ liệu, và khoảng cách quét thực tế."

**(3) Hình ảnh**
- **Ảnh cần chụp (tuỳ chọn):** ảnh thử quét QR từ xa/gần trên OLED 64px, kèm chú khoảng cách — để minh hoạ điểm hạn chế "độ phân giải".

**(4) Chuyển ý:** "Kế hoạch Week 8 giải mấy hạn chế này."

**(5) Thời lượng:** ~45 giây

---

## Slide 13 — Kế hoạch Week 8
**(1) Nội dung trên slide**
- Hoàn thiện prototype **end-to-end**, đóng gói gọn (hộp/đế in 3D).
- Thu thập **log vận hành** → groundwork cho Methodology + Result.
- Mở rộng **AI Audit Log** (thêm debug + experiment reflection).
- Thử nghiệm khoảng cách quét QR + reconnect Wi-Fi.
- Bắt đầu so sánh literature để chuẩn bị báo cáo final.

**(2) Câu mở miệng**
> "Tuần tới: đóng gói, chạy lấy log, và mở rộng phần phản biện AI để sẵn sàng cho OPA2 và final."

**(3) Hình ảnh**
- **Ảnh cần vẽ (GANTT/ROADMAP):** thanh Gantt ngắn 3–4 tuần (Week 7 → 11), mỗi cột mốc OPA1/OPA2/Final. Tự vẽ draw.io/Canva.

**(4) Chuyển ý:** "Cảm ơn thầy/cô, mời câu hỏi."

**(5) Thời lượng:** ~45 giây

---

## Slide 14 — Q&A / Thank you
**(1) Nội dung trên slide**
- "Cảm ơn thầy/cô — Q&A"
- (nhỏ) thông tin liên hệ nhóm / mã QR repo (tuỳ chọn)

**(2) Câu mở miệng & đáp án mẫu (backup)**
- *Vì sao ESP32 không Pi?* → rẻ hơn nhiều, ít điện, có Wi-Fi sẵn, đủ năng lực cho QR + I2S; Pi thừa cho bài toán này.
- *Vì sao polling không push/MQTT?* → ESP32 trong LAN, không IP công khai, polling 1.5s đủ realtime cho quầy, đơn giản, ít điểm lỗi.
- *Vì sao webhook PayOS không poll PayOS?* → realtime, giảm số lời gọi API, đúng khuyến nghị PayOS (đã có URL công khai).
- *Mất Wi-Fi thì sao?* → NetworkTask tự reconnect trên Core 0; audio/UI trên Core 1 không bị giật; đơn PENDING vẫn hiện QR, khi mạng lại sẽ nhận PAID.
- *Bỏ dual-core thì rủi ro?* → HTTP blocking sẽ giật audio khi mạng chậm → câu đọc số tiền bị ngắt quãng.

**(3) Hình ảnh**
- **Ảnh cần tìm (CLOSING):** ảnh nhẹ nhàng — quán nhỏ buổi tối, hoặc logo trường. Tránh để slide trống.

**(5) Thời lượng:** phần Q&A theo giảng viên.

---

## Tổng quan thời lượng & ưu tiên

| Mức | Nội dung | Thời lượng |
|---|---|---|
| **Ngắn (bị thiếu giờ)** | slide 1→4→6→7→8→10 | ~10 phút |
| **Đầy đủ** | tất cả 14 slide | 12–15 phút |

**3 slide "phải có" nếu phải cắt:** (1) Tổng quan kiến trúc — Slide 4 · (2) Flowchart — Slide 6 · (3) AI Reflection / Trade-off — Slide 8 & 10.

---

## HƯỚNG DẪN CHÈN ẢNH (tóm tắt)

### A. 4 ảnh đã có sẵn — chèn vào slide nào

| Ảnh (`Mydocs/final/image/`) | Slide | Caption gợi ý |
|---|---|---|
| `blockDiagram.jpg` | **Slide 4** — Block Diagram | Overall block diagram of the ESP32-based smart QR payment station with VietQR (PayOS). |
| `schema wokwi.jpg` *(tên có dấu cách)* | **Slide 5** — Hardware | Hardware interfacing: OLED SH1106 over I2C and MAX98357A + 3W speaker over I2S. |
| `flowchart.jpg` | **Slide 6** — Flowchart | Firmware flowchart: QR display, payment polling, and spoken-amount feedback. |
| `dual_core_architecture.jpg` | **Slide 7** — Dual-core | Dual-core allocation: NetworkTask (Core 0) isolated from audio/UI (Core 1). |

**Cách chèn:**
- **PowerPoint / Canva / Google Slides:** Insert → Picture → chọn file; kéo to ~⅔ chiều rộng, căn giữa. Caption để ngay dưới ảnh, font nhỏ, in nghiêng.
- **Nếu làm slide từ Markdown (Marp / reveal.js):** `![Block diagram](../final/image/blockDiagram.jpg)` — đường dẫn tương đối từ file `.md`.
- **Nếu đẩy lên LaTeX report** (đã có trong `latex eng`/`latex vie`): thay `placeholder.png` bằng đường dẫn tới ảnh thật trong `\includegraphics{...}`, giữ nguyên `\caption`/`\label`.

### B. Ảnh CẦN TÌM / CHỤP / VẼ THÊM

| # | Slide | Ảnh cần | Loại | Gợi ý nguồn / keyword |
|---|---|---|---|---|
| 1 | 1 Title | Hero thiết bị thật tại quầy / montage VietQR+ESP32 | chụp thật / ghép | tự chụp; hoặc Unsplash: "point of sale cafe" |
| 2 | 2 Problem | POS cồng kềnh (trái) vs thiết bị ESP32 nhỏ (phải) | tìm + chụp thật | Pexels: "POS terminal"; phần phải chụp thiết bị |
| 3 | 2 Problem | khách quét QR bằng app ngân hàng | tìm | Unsplash: "scan QR code phone" |
| 4 | 3 OPA1 goals | checklist 5 mục ✓ / timeline 11 tuần | vẽ | Canva / draw.io (tự làm) |
| 5 | 8 Trade-off | bảng trade-off (lớn, dễ đọc) | vẽ/chụp | vẽ trực tiếp trên slide là đủ |
| 6 | 9 Prototype | **ảnh breadboard thật** ESP32+OLED+loa | **chụp thật** ⭐ | tự chụp, góc nghiêng đủ sáng |
| 7 | 9 Prototype | **OLED hiện QR** + **OLED "THANH CÔNG"** (2 ảnh) | **chụp thật** ⭐ | chụp gần màn OLED |
| 8 | 9 Prototype | cửa sổ Arduino IDE: Flash 63.9% / RAM 18.3% | **chụp màn hình** | screenshot sau khi build |
| 9 | 9 Prototype | giao diện Streamlit `cashier.py` | **chụp màn hình** | screenshot |
| 10 | 10 AI Reflection | đoạn chat thật với AI / bảng Audit Log | **chụp màn hình** | che thông tin nhạy cảm |
| 11 | 11 Rubric | 6 ô icon (chip/màn/wifi/cloud/người/loa) ✓ | vẽ | Canva / draw.io |
| 12 | 12 Hạn chế | ảnh thử quét QR xa/gần trên OLED 64px | chụp thật | kèm chú khoảng cách |
| 13 | 13 Week 8 | Gantt/roadmap 7→11 tuần | vẽ | draw.io / Canva |
| 14 | 14 Q&A | ảnh nhẹ closing (quán nhỏ buổi tối / logo trường) | tìm | Unsplash: "small cafe night" |

> **Quan trọng nhất (⭐):** ảnh thật ở Slide 9 (breadboard + màn OLED). Đây là bằng chứng "prototype chạy thật" mà rubric OPA1 yêu cầu — ưu tiên chụp trước, chất lượng ảnh quyết định điểm demo.

> **Quy tắc thống nhất:** caption song ngữ (Anh cho tính học thuật), font nhỏ in nghiêng ngay dưới ảnh; tất cả sơ đồ giữ tone ít màu, rõ khối, nhìn được khi in trắng đen.
