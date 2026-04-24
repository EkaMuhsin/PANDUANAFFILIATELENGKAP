const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

require("dotenv").config();

const app = express();

console.log("SERVER FINAL TANPA CLOUDINARY");

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
  res.send("SERVER OK");
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

// ================= SIMPAN =================
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

// ================= UPDATE =================
app.put("/update-tim/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const r = await fetch(`${SUPABASE_URL}/rest/v1/tim?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    if (!r.ok) throw new Error();

    res.send("Berhasil update");

  } catch (err) {
    console.log("ERROR UPDATE:", err);
    res.status(500).send("Gagal update");
  }
});

// ================= DELETE =================
app.delete("/hapus-tim/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const r = await fetch(`${SUPABASE_URL}/rest/v1/tim?id=eq.${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
});

    if (!r.ok) throw new Error();

    res.send("Berhasil dihapus");

  } catch (err) {
    console.log("ERROR DELETE:", err);
    res.status(500).send("Gagal hapus");
  }
});

// ================= MEDIA LOCAL =================
app.get("/media", (req, res) => {
  try {
    const videoPath = path.join(__dirname, "public", "video");

    const videoFiles = fs.existsSync(videoPath)
      ? fs.readdirSync(videoPath).filter(f => /\.(mp4|webm|mov)$/i.test(f))
      : [];

    res.json({
      videos: videoFiles
    });

  } catch (err) {
    console.log("ERROR MEDIA:", err);
    res.status(500).json({ error: "Gagal load media" });
  }
});

// ================= RUN =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});