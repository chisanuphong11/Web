const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// เปิดใช้ CORS เผื่อเรียก API จาก frontend
app.use(cors());

// ถ้ามีไฟล์ frontend อยู่ในโฟลเดอร์ public ให้เซิร์ฟได้
app.use(express.static('public'));

// รายการของขวัญให้สุ่ม
const gifts = [
  "หูฟังไร้สาย",
  "สมุดโน้ตน่ารักๆ",
  "แก้วน้ำเก็บอุณหภูมิ",
  "ขนมกล่องเล็ก",
  "ตุ๊กตานุ่มฟู",
  "ต้นไม้เล็กประดับโต๊ะ",
  "สายชาร์จเร็ว",
  "ปากกาสีสวย",
  "พวงกุญแจลายน่ารัก",
  "ของขวัญลึกลับ! 🎁"
];

// API สุ่มของขวัญ
app.get('/api/gift', (req, res) => {
  const randomIndex = Math.floor(Math.random() * gifts.length);
  const randomGift = gifts[randomIndex];
  res.json({ gift: randomGift });
});

// เริ่มรัน server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
