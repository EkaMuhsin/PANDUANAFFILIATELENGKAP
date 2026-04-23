const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// folder public (HTML kamu)
app.use(express.static(path.join(__dirname, "public")));

// root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// koneksi mysql
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.log("Koneksi gagal:", err);
  } else {
    console.log("MySQL Connected");
  }
});


// ================= API =================

// GET DATA
app.get("/get-tim",(req,res)=>{

db.query("SELECT * FROM tim",(err,result)=>{
if(err){
res.send(err);
}else{
res.json(result);
}

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
app.delete("/hapus-tim/:id",(req,res)=>{

db.query("DELETE FROM tim WHERE id=?",[req.params.id],(err,result)=>{
if(err){
res.send("gagal");
}else{
res.send("berhasil dihapus");
}
});

});


// ambil semua media
app.get("/media", (req, res) => {
  try {
    const imgFiles = fs.readdirSync("./public/img")
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();

    const videoFiles = fs.readdirSync("./public/video")
      .filter(f => /\.(mp4|webm|mov)$/i.test(f))
      .sort();

    res.json({
      images: imgFiles,
      videos: videoFiles
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Gagal load media" });
  }
});


// ================= RUN SERVER =================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server jalan di port " + PORT);
});