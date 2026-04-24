const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const app = express();

console.log("SERVER FINAL RUNNING");

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= STATIC =================
app.use(express.static(path.join(__dirname, "public")));

// ================= ROOT =================
app.get("/", (req, res) => {
  res.send("SERVER HIDUP");
});

// ================= TEST =================
app.get("/tes", (req, res) => {
  res.send("SERVER SUDAH UPDATE SUPABASE");
});

// ================= SUPABASE =================
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

// ================= GET TIM =================
app.get("/get-tim", async (req, res) => {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/tim`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    const data = await r.json();
    res.json(data);

  } catch (err) {
    console.log("ERROR GET:", err);
    res.status(500).json({ error: "Gagal ambil data" });
  }
});

// ================= SIMPAN TIM =================
app.post("/simpan-tim", async (req, res) => {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/tim`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    res.send("Berhasil simpan");

  } catch (err) {
    console.log("ERROR INSERT:", err);
    res.status(500).send("Gagal simpan");
  }
});

// ================= UPDATE TIM =================
app.put("/update-tim/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/tim?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) throw new Error();

    res.send("Berhasil update");

  } catch (err) {
    console.log("ERROR UPDATE:", err);
    res.status(500).send("Gagal update");
  }
});

// ================= DELETE TIM =================
app.delete("/hapus-tim/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const response = await fetch(`${SUPABASE_URL}/rest/v1/tim?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!response.ok) throw new Error();

    res.send("Berhasil dihapus");

  } catch (err) {
    console.log("ERROR DELETE:", err);
    res.status(500).send("Gagal hapus");
  }
});

// ================= CLOUDINARY =================
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

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
    res.status(500).json({ error: "Gagal ambil video" });
  }
});

// ================= MEDIA LOCAL =================
app.get("/media", (req, res) => {
  try {
    const imgPath = path.join(__dirname, "public", "img");
    const videoPath = path.join(__dirname, "public", "video");

    const imgFiles = fs.existsSync(imgPath)
      ? fs.readdirSync(imgPath).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      : [];

    const videoFiles = fs.existsSync(videoPath)
      ? fs.readdirSync(videoPath).filter(f => /\.(mp4|webm|mov)$/i.test(f))
      : [];

    res.json({
      images: imgFiles,
      videos: videoFiles
    });

  } catch (err) {
    console.log("ERROR MEDIA:", err);
    res.status(500).json({ error: "Gagal load media" });
  }
});

// ================= RUN SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});