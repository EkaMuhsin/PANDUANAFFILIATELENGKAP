const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const app = express();

console.log("SERVER UPDATE V2");
// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= STATIC =================
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use("/video", express.static(path.join(__dirname, "public/video")));

// ================= ROOT =================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ================= ENV =================
require("dotenv").config();

// ================= CLOUDINARY CONFIG =================
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// ================= DATABASE =================
//const db = mysql.createConnection({
//  host: process.env.DB_HOST,
//  user: process.env.DB_USER,
//  password: process.env.DB_PASS,
//  database: process.env.DB_NAME,
//  port: process.env.DB_PORT
//});

//if (process.env.DB_HOST) {
//  db.connect((err) => {
//    if (err) {
//      console.log("Koneksi gagal:", err);
//    } else {
//      console.log("MySQL Connected");
//    }
//  });
//} else {
//  console.log("DB tidak digunakan");
//}


// ================= API TIM =================

// GET DATA
app.get("/get-tim", (req, res) => {
  db.query("SELECT * FROM tim", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

// SIMPAN
app.post("/simpan-tim", (req, res) => {
  const { timNama, username, domisili, status } = req.body;

  const sql = "INSERT INTO tim (timNama, username, domisili, status) VALUES (?, ?, ?, ?)";
  db.query(sql, [timNama, username, domisili, status], (err) => {
    if (err) return res.send("Gagal simpan");
    res.send("Berhasil simpan");
  });
});

// UPDATE
app.put("/update-tim/:id", (req, res) => {
  const { timNama, username, domisili, status } = req.body;
  const id = req.params.id;

  const sql = `
    UPDATE tim 
    SET timNama=?, username=?, domisili=?, status=? 
    WHERE id=?
  `;

  db.query(sql, [timNama, username, domisili, status, id], (err) => {
    if (err) return res.send("Gagal update");
    res.send("Berhasil update");
  });
});

// DELETE
app.delete("/hapus-tim/:id", (req, res) => {
  db.query("DELETE FROM tim WHERE id=?", [req.params.id], (err) => {
    if (err) return res.send("gagal");
    res.send("berhasil dihapus");
  });
});


// ================= MEDIA LOCAL (OPSIONAL) =================
app.get("/media", (req, res) => {
  try {
    const imgPath = path.join(__dirname, "public", "img");
    const videoPath = path.join(__dirname, "public", "video");

    const imgFiles = fs.readdirSync(imgPath)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();

    const videoFiles = fs.readdirSync(videoPath)
      .filter(f => /\.(mp4|webm|mov)$/i.test(f))
      .sort();

    res.json({
      images: imgFiles,
      videos: videoFiles
    });

  } catch (err) {
    console.log("ERROR MEDIA:", err);
    res.status(500).json({ error: "Gagal load media" });
  }
});


// ================= CLOUDINARY API (🔥 INI PENTING) =================
app.get("/cloud-media", async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression("resource_type:video")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const videos = result.resources.map(v => v.secure_url);

    res.json({ videos });

  } catch (err) {
    console.log("ERROR CLOUDINARY:", err);
    res.status(500).json({ error: "Gagal ambil video dari Cloudinary" });
  }
});

app.get("/tes", (req, res) => {
  res.send("VERSI BARU NIH");
});


// ================= RUN SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});