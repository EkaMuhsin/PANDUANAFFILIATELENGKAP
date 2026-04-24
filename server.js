const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const app = express();

console.log("SERVER FINAL NO DB");

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

// ================= TEST =================
app.get("/tes", (req, res) => {
  res.send("SERVER SUDAH UPDATE");
});

// ================= MEDIA LOCAL (OPTIONAL) =================
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

// ================= CLOUDINARY VIDEO =================
app.get("/cloud-media", async (req, res) => {
  try {
    console.log("ENV:", {
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY ? "ADA" : "KOSONG",
      api_secret: process.env.CLOUD_API_SECRET ? "ADA" : "KOSONG"
    });

    const result = await cloudinary.search
      .expression("resource_type:video")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    console.log("RESULT:", result);

    const videos = result.resources.map(v => v.secure_url);

    res.json({ videos });

  } catch (err) {
    console.log("ERROR CLOUDINARY FULL:", err);
    res.status(500).json({
      error: err.message,
      detail: err
    });
  }
});

// ================= RUN SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});