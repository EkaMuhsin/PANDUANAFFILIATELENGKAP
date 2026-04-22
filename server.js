console.log("PAKAI SERVER INI");
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cepluk1!",
  database: "panduanaffiliate"
});

db.connect((err) => {
  if (err) {
    console.log("Koneksi gagal:", err);
  } else {
    console.log("MySQL Connected");
  }
});


// ✅ SIMPAN DATA
app.post("/simpan-tim", (req, res) => {
  const { timNama, username, domisili, status } = req.body;

  if (!timNama || !username) {
    return res.status(400).send("Data tidak lengkap");
  }

  const sql = "INSERT INTO tim (timNama, username, domisili, status) VALUES (?, ?, ?, ?)";

  db.query(sql, [timNama, username, domisili, status], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Gagal simpan");
    } else {
      res.send("Berhasil simpan");
    }
  });
});


// ✅ AMBIL DATA
console.log("Route get-tim aktif");
app.get("/get-tim", (req, res) => {
  console.log("ROOT KEAKSES");

  db.query("SELECT * FROM tim", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("error");
    } else {
      res.json(result);
    }
  });
});

// HAPUS TIM
app.delete("/hapus-tim/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM tim WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(err);
      res.send("Gagal hapus");
    } else {
      res.send("Berhasil hapus");
    }
  });
});

// EDIT TIM
app.put("/update-tim/:id", (req, res) => {
  const id = req.params.id;
  const { timNama, username, domisili, status } = req.body;

  const sql = `
    UPDATE tim 
    SET timNama=?, username=?, domisili=?, status=?
    WHERE id=?
  `;

  db.query(sql, [timNama, username, domisili, status, id], (err) => {
    if (err) {
      console.log(err);
      res.send("Gagal update");
    } else {
      res.send("Berhasil update");
    }
  });
});


// ✅ JALANKAN SERVER (HARUS PALING BAWAH)
app.listen(3000, () => {
  console.log("Server jalan di port 3000");
});