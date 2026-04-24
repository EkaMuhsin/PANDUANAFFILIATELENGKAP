const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const app = express();

console.log("SERVER FINAL SUPABASE LOADED");
console.log("SUPABASE:", SUPABASE_URL, SUPABASE_KEY ? "ADA" : "KOSONG");

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

// ================= CLOUDINARY =================
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// ================= SUPABASE =================
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

// ================= TEST =================
app.get("/tes", (req, res) => {
  res.send("SERVER SUDAH UPDATE SUPABASE");
});

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

// GET
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
    console.log(err);
    res.status(500).json({ error: "Gagal ambil data" });
  }
});

// POST
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

  } catch {
    res.send("Gagal simpan");
  }
});

// ================= UPDATE =================
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

  } catch {
    res.status(500).send("Gagal update");
  }
});

// ================= DELETE =================
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

  } catch {
    res.status(500).send("Gagal hapus");
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

// ================= CLOUDINARY =================
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

// ================= RUN =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});