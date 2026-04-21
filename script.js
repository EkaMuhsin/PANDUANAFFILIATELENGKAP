console.log("JS AKTIF");
// ======================
// TAMBAH USER & KODE
// ======================
const users = [
  {loginNama: "yoki", kode: "123"},
  {loginNama: "admin", kode: "842"},
  {loginNama: "glg", kode: "948"},
  {loginNama: "nzr", kode: "715"},
  {loginNama: "hmd", kode: "628"}
];

function cekLogin(){
  let loginNama = document.getElementById("loginNama").value.trim();
  let kode = document.getElementById("kode").value.trim();

  let cocok = users.find(u => u.loginNama === loginNama && u.kode === kode);

  if(cocok){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Nama atau kode salah!";
  }
}

// ======================
// FUNGSI MASUK
// ======================
function masuk(){
  document.getElementById("loginPage").style.display="none";
  document.getElementById("app").style.display="block";
}

// ======================
// FUNGSI BUKA
// ======================
function buka(key){
  document.getElementById("home").style.display="none";
  document.getElementById("hal2").style.display="none";
  document.getElementById("hal3").style.display="none";
  document.getElementById("halTim").style.display="none";

//KHUSUS HALAMAN TIM
if(key=="daftar"){

  document.getElementById("home").style.display="none";

  document.getElementById("halTim").style.display="block";
  loadTim(); //biar data muncul
  return;
}

//////////////////////////////...HALAMAN 2...//////////////////////////////
//selain tim masuk ke hal2
else{
document.getElementById("hal2").style.display="block";

// ======================
// HALAMAN 2
// ======================
  let judul="", isi="", tombol="";

// ======================
// PENGERTIAN AFFILIATE
// ======================
if(key=="pengertian"){
  judul="Pengertian Affiliate";
  isi=`
   <div class="kanan-text">

    <div class="card-prompt">
      <p class="text1">
      Affiliate marketing adalah model bisnis berbasis komisi di mana seseorang (afiliator) mempromosikan produk/layanan milik orang lain atau perusahaan menggunakan tautan khusus. Afiliator akan mendapatkan komisi dari setiap penjualan, klik, atau konversi yang berhasil didatangkan melalui link unik tersebut.
      </p>
    </div>

  </div>
`
}

// ======================
// CARA KERJA AFFILIATE
// ======================
if(key=="kerja"){
  judul="Cara Kerja Affiliate";
  isi=`
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text1">
      1. Cara Kerja: Afiliator membagikan link unik (afiliasi) di media sosial, blog, atau website. Saat audiens membeli melalui link tersebut, perusahaan membayar komisi kepada afiliator.<br>
      2. Tanpa Produk Sendiri: Anda tidak perlu memproduksi barang, mengurus pengiriman, atau layanan pelanggan.<br>
      3. Contoh Populer: Shopee Affiliate Program, TikTok Affiliate, dan program afiliasi berbagai brand digital.<br>
      4. Komisi: Penghasilan berupa persentase harga produk atau nominal tetap per penjualan
      </p>
    </div>
  `;
}

// ======================
// CARA BANGUN AKUN AFFILIATE DARI 0
// ======================
if(key=="bangun"){
  judul="Cara Bangun Akun dari 0";
  isi=`
  <div class="card-prompt">
      <p class="text1">
      1. Buat akun baru<br>
      2. Bikin konten minimal 1 hari 1 konten (Konten bisa random/yang viral sekarang)<br>
      3. Saling follow sesama affiliate/pejuang 600++<br>
      4. Lakukan berulang sampai followers tembus 600++<br>
      <b>Catatan Penting:</b> Kalau kena limit follow, berhenti dulu dan lanjut besok
      </p>
    </div>
  `;
}

// ======================
// JENIS JENIS KONTEN
// ======================
  if(key=="jenis"){
  judul = `Jenis Konten Affiliate di Mastermind`

  isi = `
  <ul class="list">
    <li>
    <div class="atas">
    <span>Konten JJ (Jedag Jedug)</span> 
      <button onclick="lanjut('jj')">NEK KENE CARANE</button>
    </div>
    <video class="video kirii" controls>
    <source src="video/jj.mp4" type="video/mp4">
    </video>
    </li>

    <li>
    <div class="atas">
    <span>Konten Edukasi</span>
      <button onclick="lanjut('edukasi')">NEK KENE CARANE</button>
    </div>
    <video class="video kirii" controls>
    <source src="video/edukasi.mp4" type="video/mp4">
    </video>
    </li>

    <li>
    <div class="atas">
    <span>Konten Shoot Produk</span> 
      <button onclick="lanjut('produk')">NEK KENE CARANE</button>
      </div>
      <video class="video kirii" controls>
    <source src="video/shoot.mp4" type="video/mp4">
    </video>
    </li>

    <li>
    <div class="atas">
    <span>Konten AI</span> 
      <button onclick="lanjut('ai')">NEK KENE CARANE</button>
      </div>
      <video class="video kirii" controls>
    <source src="video/AI.mp4" type="video/mp4">
    </video>
    </li>

    <li>
    <div class="atas">
    <span>Konten Video Slide</span> 
      <button onclick="lanjut('slide')">NEK KENE CARANE</button>
      </div>
      <video class="video kirii" controls>
    <source src="video/slide.mp4" type="video/mp4">
    </video>
    </li>
  </ul>
  `;
}

// ======================
// KENAPA PILIH AFFILIATE MASTERMIND
// ======================
  if(key=="kenapa"){
    judul="Kenapa Pilih Affiliate Mastermind?";
    isi=`
    <div class="card-prompt">
      <p class="text1">
      1. Komisi menarik setiap penjualan<br>
      2. Bisa dikerjakan kapan saja & di mana saja<br>
      3. Sistem mudah cocok untuk pemula<br>
      4. Disediakan materi promosi (Foto & video)<br>
      5. Berpotensi jadi penghasilan utama<br>
      6. Support dan bimbingan sampai bisa closing<br>
      7. Mendapatkan kelas gratis
      </p>
    </div>
    `;
  }

  document.getElementById("judul").innerText=judul;
  document.getElementById("isi").innerHTML=isi;
  document.getElementById("lanjut").innerHTML=tombol;
}
}

// ======================
// TO HTML
// ======================
function lanjut(jenis){
  document.getElementById("hal2").style.display="none";
  document.getElementById("hal3").style.display="block";

  //////////////////////////////...JENIS KONTEN...//////////////////////////////

  let isi = "";

  // ======================
  // KONTEN JJ
  // ======================
  if(jenis=="jj"){
  isi = `
  <h3 class="judul-section">Workflow Video Konten JJ</h3>

  <p class="sub">Contoh Video</p>

  <video class="video tengah" controls>
    <source src="video/jj.mp4" type="video/mp4">
  </video>

  <hr>

  <h3 class="step">Aplikasi yang Harus di Install</h3>
  <p class="desc">Pinterest<br>CapCut<br>TikTok</p>

  <hr>

  <h3 class="step">Cara Buat Konten JJ</h3>

  <p class="desc">Step 1: Buka Pinterest dan cari kata kunci</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj1.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text1">
      saya contohkan jika produk penggemuk badan maka cari foto orang yang gemoy, berisi, yakult juga boleh yang penting gemoy wkwk.<br>kalau sudah download/unduh (cari 2 foto)
      </p>
    </div>
  </div>

  <p class="desc">Step 2: Buat video produk sekitar 10 detik an</p>

  <!-- KIRI (VIDEO) -->
  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/jj2.mp4" type="video/mp4">
    </video>
    <video class="video tengah" controls>
    <source src="video/jj2ai.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text2">
      Bisa shoot sendiri/AI. Untuk video AI bisa lihat di jenis konten AI. (untuk generated AI bisa lihat prompt/perintah di menu Jenis Konten AI.)
      </p>
    </div>
  </div>

  <p class="desc">Step 3: Pergi di CapCut</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj3.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text3">
      Cari Templat JJ yang Viral sekitar 13-16 detik an (cari yang 3 slide).
      </p>
    </div>
  </div>
  <p class="desc">Step 4: Masukkan foto dan video produk</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text4">
      Formatnya foto video foto/foto foto video.
      </p>
    </div>
  </div>
  <p class="desc">Step 5: Ekspor HD dan langsung pergi ke TikTod</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj5.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text5">
      Jangan lupa pilih resolusi yang HD. trus sabar soalnya ada iklan wkwk. bebas iklan pro aja, mimin punya pro nya kalau mau beli😁.
      </p>
    </div>
  </div>
  <p class="desc">Step 6: Beri kata-kata hook dan closing</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj6.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text6">
      Contoh: HOOK (Mau tau rahasia bikin badan berisi?) dan CLOSING (pake ini loh, segera klik keranjang kuning).
      </p>
    </div>
  </div>
  <p class="desc">Step 7: Atur postingan</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/jj7.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text7">
      Beri Hastag, sesuaikan sampul, tambahkan tautan produk/keranjang kuning, atur jadwal kalau mau buat stock konten.
      </p>
    </div>
  </div>

  <p class="desc">Hasil Eksekusi</p>
  <video class="video tengah" controls>
    <source src="video/contohjj.mp4" type="video/mp4">
    </video>

  <hr>

  <h3 class="step">Jam/Waktu Upload yang di rekomendasikan</h3>
  <p class="desc">Jam/Pukul:<br>11.00<br>15.00<br>17.00<br>19.00<br>21.00</p>

  <hr>

  <h3 class="step">Tips & Trik biar cepat closing dan FYP</h3>
  <p class="desc">
  1. Upload sesuai Jam yang telah di rekomendasikan.<br>
  2. Upload Minimal 3 konten 1 hari.<br>
  3. Konsisten Upload biar cepat closing.<br>
  4. Setelah upload biarkan kamu tonton sendiri konten nya selama 5 menit tanpa ngapa"in, habis itu di like, simpan, bagikan gak papa (untuk yang atur jadwal posting tidak lakukan ini juga gak papa) sebenarnya ini untuk mencari traffic.<br>
  5. Jangan sampai 1 hari tidak konten, minimal kalau kepepet buanget 1 konten gak papa.<br>
  6. Tidak usah memandang views yang penting konsisten terus bawahnya kasih kata-kata "semangat konten nya semoga cepat closing".
  </p>
  `;
}

  // ======================
  // KONTEN EDUKASI
  // ======================
  if(jenis=="edukasi"){
    isi = `
    <h3 class="judul-section">Workflow Video Konten Edukasi</h3>

  <p class="sub">Contoh Video</p>

  <video class="video tengah" controls>
    <source src="video/conedu.mp4" type="video/mp4">
  </video>

  <hr>

  <h3 class="step">Aplikasi yang Harus di Install</h3>
  <p class="desc">Pinterest(Jika di perlukan)<br>TikTok</p>

  <hr>

  <h3 class="step">Cara Buat Konten Edukasi</h3>

  <p class="desc">Step 1: Shoot produk/generated produk pakai AI</p>

  <!-- KIRI (VIDEO) -->
  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/edu1.mp4" type="video/mp4">
    </video>
    <video class="video tengah" controls>
    <source src="video/jj2ai.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text8">
      Ambil/rekam video produk atau juga bisa generated dengan AI (untuk generated produk pakai AI bisa lihat prompt/perintah di menu Jenis Konten AI)
      </p>
    </div>
  </div>

  <p class="desc">Step 2: Siapkan video pemandangan/random</p>

  <!-- KIRI (VIDEO) -->
  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/edu2.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text9">
      Bisa shoot/rekam sendiri, atau cari di Pinterest juga banyak
      </p>
    </div>
  </div>

  <p class="desc">Step 3: Masuk ke TikTok untuk edit</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/edu3.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text10">
      Masukkan ke dua video tadi di TikTok, lalu edit manual. tambahkan transisi dan efek semenarik mungkin.
      </p>
    </div>
  </div>

  <p class="desc">Step 4: Buat kata-kata</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/edu4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text11">
      Contoh: HOOK (Jangan beli ini kalau kamu gamau dilirik mantan). CLOSING (Soalnyaa ini bikin mantan kamu ngelirik lagi🤭). untuk kata-kata kalau bingung cari aja prompt nya di menu Jenis Konten AI, langsung gas di chat gpt 50 kata-kata ready.
      </p>
    </div>
  </div>

  <p class="desc">Step 5: Pilih musik</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/edu5.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text12">
      Untuk musik pilih yang komersial, kalau tidak nanti vt kamu di bisukan sama TikTod.
      </p>
    </div>
  </div>

  <p class="desc">Step 6: Atur postingan</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/edu6.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text13">
      Beri Hastag, sesuaikan sampul, tambahkan tautan produk/keranjang kuning, atur jadwal kalau mau buat stock konten.
      </p>
    </div>
  </div>

  <p class="desc">Hasil Eksekusi</p>
  <video class="video tengah" controls>
    <source src="video/conedu.mp4" type="video/mp4">
    </video>

  <hr>

  <h3 class="step">Jam/Waktu Upload yang di rekomendasikan</h3>
  <p class="desc">Jam/Pukul:<br>11.00<br>15.00<br>17.00<br>19.00<br>21.00</p>

  <hr>

  <h3 class="step">Tips & Trik biar cepat closing dan FYP</h3>
  <p class="desc">
  1. Upload sesuai Jam yang telah di rekomendasikan.<br>
  2. Upload Minimal 3 konten 1 hari.<br>
  3. Konsisten Upload biar cepat closing.<br>
  4. Setelah upload biarkan kamu tonton sendiri konten nya selama 5 menit tanpa ngapa"in, habis itu di like, simpan, bagikan gak papa (untuk yang atur jadwal posting tidak lakukan ini juga gak papa) sebenarnya ini untuk mencari traffic.<br>
  5. Jangan sampai 1 hari tidak konten, minimal kalau kepepet buanget 1 konten gak papa.<br>
  6. Tidak usah memandang views yang penting konsisten terus bawahnya kasih kata-kata "semangat konten nya semoga cepat closing".
  </p>
    `;
  }

  // ======================
  // KONTEN PRODUK
  // ======================
  if(jenis=="produk"){
    isi = `
    <h3 class="judul-section">Workflow Video Konten Produk</h3>

  <p class="sub">Contoh Video</p>

  <video class="video tengah" controls>
    <source src="video/conpd.mp4" type="video/mp4">
  </video>

  <hr>

  <h3 class="step">Aplikasi yang Harus di Install</h3>
  <p class="desc">TikTok</p>

  <hr>

  <h3 class="step">Cara Buat Konten Produk</h3>

  <p class="desc">Step 1: Shoot produk</p>

  <!-- KIRI (VIDEO) -->
  <video class="video tengah" controls>
    <source src="video/pd1.mp4" type="video/mp4">
  </video>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text14">
      Untuk konten produk ini full pakai kamera sendiri, tidak menggunakan AI. Shoot/rekam produk antara 13-17 detik.
      </p>
    </div>
  </div>

  <p class="desc">Step 2: Masuk ke Tiktod untuk edit</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/pd2.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text15">
      Masukkan video ke Tiktod, lalu beri kata-kata HOOK dan CLOSING. Hook dan closing bisa di jadikan satu, contoh: "Suka makan pedas tapi sering perut nyeri? pakai ini aja!".
      </p>
    </div>
  </div>

  <p class="desc">Step 3: Teks ke Suara</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/pd3.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text16">
      Ini opsi bisa dipakai bisa tidak. caranya di bagian atas waktu nulis teks itu ada simbol orang berbicara, pencet aja.
      </p>
    </div>
  </div>

  <p class="desc">Step 4: Pilih musik</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/pd4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text17">
      Pilih musik yang komersial biar video kamu tidak dihapus oleh tiktod.
      </p>
    </div>
  </div>

  <p class="desc">Step 5: Atur postingan</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/pd5.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text18">
      Beri Hastag, sesuaikan sampul, tambahkan tautan produk/keranjang kuning, atur jadwal kalau mau buat stock konten.
      </p>
    </div>
  </div>

  <p class="desc">Hasil Eksekusi</p>
  <video class="video tengah" controls>
    <source src="video/conpd.mp4" type="video/mp4">
    </video>

  <hr>

  <h3 class="step">Jam/Waktu Upload yang di rekomendasikan</h3>
  <p class="desc">Jam/Pukul:<br>11.00<br>15.00<br>17.00<br>19.00<br>21.00</p>

  <hr>

  <h3 class="step">Tips & Trik biar cepat closing dan FYP</h3>
  <p class="desc">
  1. Upload sesuai Jam yang telah di rekomendasikan.<br>
  2. Upload Minimal 3 konten 1 hari.<br>
  3. Konsisten Upload biar cepat closing.<br>
  4. Setelah upload biarkan kamu tonton sendiri konten nya selama 5 menit tanpa ngapa"in, habis itu di like, simpan, bagikan gak papa (untuk yang atur jadwal posting tidak lakukan ini juga gak papa) sebenarnya ini untuk mencari traffic.<br>
  5. Jangan sampai 1 hari tidak konten, minimal kalau kepepet buanget 1 konten gak papa.<br>
  6. Tidak usah memandang views yang penting konsisten terus bawahnya kasih kata-kata "semangat konten nya semoga cepat closing".
  </p>
    `;
  }

  // ======================
  // KONTEN AI
  // ======================
  if(jenis=="ai"){
    isi = `
    <h3 class="judul-section">Workflow Video Konten AI</h3>

  <p class="sub">Contoh Video</p>

  <video class="video tengah" controls>
    <source src="video/conai.mp4" type="video/mp4">
  </video>

  <hr>

  <h3 class="step">Aplikasi yang Harus di Install</h3>
  <p class="desc">Chat GPT<br>Chrome<br>TikTok</p>

  <hr>

  <h3 class="step">Cara Buat Konten AI</h3>

  <p class="desc">Step 1: Buat gambar karakter di chat gpt</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai1.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan gambar seorang wanita muda Indonesia yang cantik dan natural, dengan kulit cerah sehat dan sedikit sun-kissed glow khas suasana pantai. Memiliki tubuh berisi, gemoy, proporsional (sekitar 60kg), terlihat lembut, feminin, dan menarik.
      Mengenakan outfit santai khas pantai seperti dress flowy motif tropis atau off-shoulder yang ringan, dengan warna cerah yang menyatu dengan suasana laut. Kain terlihat ringan tertiup angin, memberikan kesan hidup dan natural.
      Gaya rambut medium cut sebahu atau sedikit lebih panjang, hitam alami, tergerai dengan tekstur lembut, sedikit tertiup angin pantai. Beberapa helai rambut jatuh natural di wajah, menambah kesan candid dan estetik.
      Pose menghadap depan dengan creator angle yang engaging, seperti sedang berbicara atau tersenyum ke arah penonton. Ekspresi hangat, ceria, dan relatable, dengan tatapan mata hidup dan penuh energi positif.
      Lokasi di pantai tropis dengan pasir putih, air laut biru jernih, dan langit cerah. Background terdapat ombak lembut dan pohon kelapa yang sedikit blur (depth of field), menjaga fokus utama pada subjek.
      Pencahayaan alami golden hour (pagi atau sore), soft dan hangat, menciptakan highlight lembut di kulit dan bayangan yang halus. Tone warna vibrant namun tetap clean dan aesthetic.
      Detail wajah tajam dan realistis, skin texture halus namun tetap natural (tidak over-smooth). Komposisi medium shot (dada ke atas), framing rapi, depth of field lembut, menciptakan kesan konten kreator lifestyle profesional di pantai.
      no camera, no watermark, no text, no distortion, no extra fingers, no overexposed, no blur face
      </p>
      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Step 2: Download gambarnya!</p>

  <p class="desc">Step 3: Siapkan gambar produk nya!</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai3.png" class="img-content" onclick="zoom(this)">
  </div>

  <!-- BUTTON DOWNLOAD -->
  <a href="img/ai3.png" download class="btn-download">
    Dihh di Download😒
  </a>
</div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text20">
      Bisa download gambar di atas! jika beda produk tanya dan minta pada admin. biar di tambahin disini🤓
      </p>
    </div>
  </div>

  <p class="desc">Step 4: Gabungkan karakter dan produk</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Gunakan karakter pada gambar pertama sebagai subjek utama. Tampilkan subjek sedang memegang produk dari gambar kedua dengan pose yang natural dan proporsional. Sesuaikan pencahayaan produk agar menyatu dengan lingkungan asli pada foto karakter, sehingga tampak berada dalam satu lokasi yang sama tanpa perbedaan tone atau shadow. Lokasi, ambience, tone warna, dan suasana tetap mengikuti foto karakter. Detail wajah dan proporsi tubuh subjek dipertahankan sepenuhnya. Komposisi bersih dan fokus pada interaksi antara karakter dan produk, tanpa menampilkan perangkat atau alat perekaman. no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Step 5: Download gambarnya!</p>

  <p class="desc">Step 6: Buka Chrome</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai6.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text22">
      Ketik dipencarian "google flow"
      </p>
    </div>
  </div>

  <p class="desc">Step 7: Buka link nya dan login</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai7.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text23">
      Setiap akun baru menerima 150 credits, setiap generated satu video dengan 20 credits. maka banyak buat akun google biar bisa konten banyak.
      </p>
    </div>
  </div>

  <p class="desc">Step 8: Masukkan foto di bagian kolom "awal"</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai8.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <p class="desc">Step 9: Masukkan Promt/Perintah</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai9.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan dia berbicara “Dulu aku susah banget naik berat badan, makan banyak tetep kurus, sekarang lebih berisi sejak rutin minum Gomuk, bikin aku makin pede. Cek keranjang kuning!”.<br>//untuk generated lagi tinggal ganti kata-kata di dalam petik
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Step 10: Atur format video</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai10.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text21">
      Atur format video "pilih video", "pilih frame", "rasio 9:16", "pilih 1x", "pilih Veo 3.1-Fast". kalau sudah sesuai semuanya klik generated/tanda panah kanan. Tunggu proses nya. Lalu download.
      </p>
  </div>

  <p class="desc">Step 11: Upload ke TikTok</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/ai11.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text24">
      Upload seperti biasanya, bisa di beri subtitle biar lebih menarik. Jangan lupa tautkan keranjang kuning.
      </p>
    </div>
  </div>

  <p class="desc">Hasil Eksekusi</p>
  <video class="video tengah" controls>
    <source src="video/conai.mp4" type="video/mp4">
    </video>

  <hr>

  <h3 class="step">Jam/Waktu Upload yang di rekomendasikan</h3>
  <p class="desc">Jam/Pukul:<br>11.00<br>15.00<br>17.00<br>19.00<br>21.00</p>

  <hr>

  <h3 class="step">Tips & Trik biar cepat closing dan FYP</h3>
  <p class="desc">
  1. Upload sesuai Jam yang telah di rekomendasikan.<br>
  2. Upload Minimal 3 konten 1 hari.<br>
  3. Konsisten Upload biar cepat closing.<br>
  4. Setelah upload biarkan kamu tonton sendiri konten nya selama 5 menit tanpa ngapa"in, habis itu di like, simpan, bagikan gak papa (untuk yang atur jadwal posting tidak lakukan ini juga gak papa) sebenarnya ini untuk mencari traffic.<br>
  5. Jangan sampai 1 hari tidak konten, minimal kalau kepepet buanget 1 konten gak papa.<br>
  6. Tidak usah memandang views yang penting konsisten terus bawahnya kasih kata-kata "semangat konten nya semoga cepat closing".
  </p>

  <h3 class="step">Kumpulan Prompt/Perintah AI</h3>

  <!-- KARAKTER WANITA -->

  <p class="desc">Karakter Wanita 1</p>
  <!-- PROMPT 1 -->
  <div class="kiri-img">
    <img src="img/kw1.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan gambar seorang wanita muda Indonesia yang cantik dan natural, dengan kulit cerah sehat dan sedikit sun-kissed glow khas suasana pantai. Memiliki tubuh berisi, gemoy, proporsional (sekitar 60kg), terlihat lembut, feminin, dan menarik.
      Mengenakan outfit santai khas pantai seperti dress flowy motif tropis atau off-shoulder yang ringan, dengan warna cerah yang menyatu dengan suasana laut. Kain terlihat ringan tertiup angin, memberikan kesan hidup dan natural.
      Gaya rambut medium cut sebahu atau sedikit lebih panjang, hitam alami, tergerai dengan tekstur lembut, sedikit tertiup angin pantai. Beberapa helai rambut jatuh natural di wajah, menambah kesan candid dan estetik.
      Pose menghadap depan dengan creator angle yang engaging, seperti sedang berbicara atau tersenyum ke arah penonton. Ekspresi hangat, ceria, dan relatable, dengan tatapan mata hidup dan penuh energi positif.
      Lokasi di pantai tropis dengan pasir putih, air laut biru jernih, dan langit cerah. Background terdapat ombak lembut dan pohon kelapa yang sedikit blur (depth of field), menjaga fokus utama pada subjek.
      Pencahayaan alami golden hour (pagi atau sore), soft dan hangat, menciptakan highlight lembut di kulit dan bayangan yang halus. Tone warna vibrant namun tetap clean dan aesthetic.
      Detail wajah tajam dan realistis, skin texture halus namun tetap natural (tidak over-smooth). Komposisi medium shot (dada ke atas), framing rapi, depth of field lembut, menciptakan kesan konten kreator lifestyle profesional di pantai.
      no camera, no watermark, no text, no distortion, no extra fingers, no overexposed, no blur face
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Wanita 2</p>
  <!-- PROMPT 2 -->
  <div class="kiri-img">
    <img src="img/kw2.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan gambar seorang wanita muda Indonesia yang cantik dan natural, dengan kulit cerah sehat dan sedikit sun-kissed glow khas suasana pedesaan. Memiliki tubuh berisi, gemoy, proporsional (sekitar 60kg), terlihat lembut dan feminin. Mengenakan pakaian khas Indonesia seperti kebaya sederhana atau blouse tradisional dengan kain batik atau sarung, warna-warna hangat dan earthy yang menyatu dengan lingkungan sekitar.
      Gaya rambut panjang sebahu atau sedikit lebih panjang, hitam alami, ditata sederhana (diikat longgar atau dibiarkan tergerai), dengan tekstur halus dan natural. Wajah manis dengan ekspresi hangat, senyum lembut, dan tatapan mata yang tenang serta bersahabat.
      Pose berdiri santai atau sedikit menyamping di area pedesaan seperti sawah hijau, jalan tanah, atau depan rumah kayu tradisional. Angle tetap terasa seperti kreator konten, natural dan engaging, seolah sedang berbagi cerita kepada penonton.
      Pencahayaan alami golden hour (pagi atau sore), lembut dan hangat, menciptakan bayangan halus dan nuansa yang tenang. Tone warna earthy, hijau alami, dan sedikit warm untuk memperkuat suasana desa yang asri.
      Background detail berupa alam pedesaan Indonesia: pepohonan, sawah, langit terbuka, atau rumah tradisional yang sedikit blur agar fokus tetap pada subjek. Detail wajah jernih, realistis, skin texture natural (tidak berlebihan).
      Komposisi medium shot hingga setengah badan, framing rapi dengan depth of field lembut, menciptakan kesan hangat, autentik, dan relatable seperti konten kreator lifestyle di desa.
      no camera, no modern equipment, no watermark, no text, no distortion, no extra fingers
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Wanita 3</p>
  <!-- PROMPT 3 -->
  <div class="kiri-img">
    <img src="img/kw3.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan gambar seorang wanita Indonesia usia 21 tahun, berpenampilan cantik natural dengan tubuh gemoy berisi sehat (sekitar 60 kg), proporsional dan tidak obesitas, memberi kesan manis, fresh, dan approachable. Wajah muda dengan fitur lembut khas Indonesia, kulit cerah sawo matang terang, pipi sedikit chubby, senyum hangat. Rambut medium sebahu, halus, natural, sedikit layer dengan belah tengah.
      Berpose seperti influencer atau content creator di studio rumah (home studio), duduk menghadap kamera dengan creator angle natural, ekspresi seperti sedang berbicara kepada penonton. Mengenakan outfit casual stylish seperti cardigan atau outer modern dengan inner yang harmonis, terlihat fashionable namun santai.
      Background berupa studio rumah estetik: meja setup content creator, ring light, tripod, microphone, kamera, rak dekorasi, lampu ambient hangat, dan nuansa ruangan cozy minimalis modern. Pencahayaan soft studio lighting, cinematic namun realistis. Foto ultra-realistic, highly detailed, natural skin texture, professional influencer portrait, 4K.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Wanita 4</p>
  <!-- PROMPT 4 -->
  <div class="kiri-img">
    <img src="img/kw4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Seorang kreator wanita muda Indonesia yang cantik dan berkulit putih, memiliki tubuh berisi, gemoy, dan proporsional (sekitar 60 kg), terlihat sehat, segar, dan menarik. Pipi sedikit chubby dengan kesan lembut dan menggemaskan, namun tetap elegan. Memakai outer hitam dengan inner yang otomatis menyesuaikan secara harmonis.
      Gaya rambut medium cut panjang sebahu, belah tengah, layer tipis di bagian depan, teksturnya halus dan jatuh natural. Terlihat dari front dengan creator angle yang natural, ekspresinya seperti sedang berbicara kepada penonton dengan senyum hangat dan energi positif. Pencahayaan khas studio kreator yang halus dan merata tanpa menampilkan perangkat apa pun. Detail wajah jernih, halus, dan proporsional dengan skin tone bersih dan glowing sehat. Tone warna modern, clean, dan aesthetic. Komposisi fokus pada subjek, menonjolkan kesan profesional namun tetap hangat, friendly, dan relatable. no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <!-- KARAKTER PRIA -->
  <p class="desc">Karakter Pria 1</p>

  <!-- PROMPT 1 -->
  <div class="kiri-img">
    <img src="img/kp1.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Seorang pria dewasa Indonesia dengan kulit cerah dan penampilan rapi, memiliki tubuh berisi, gemoy, dan proporsional (sekitar 60 kg), terlihat sehat, segar, dan menarik. Wajah sedikit chubby dengan pipi yang lebih penuh, memberikan kesan ramah, hangat, dan approachable, namun tetap terlihat maskulin dan elegan.
      Memakai outer formal navy dengan inner yang menyesuaikan secara harmonis, terlihat rapi, modern, dan stylish. Rambut pendek rapi gaya side-part, teksturnya halus dan jatuh natural dengan sedikit volume.
      Terlihat dari front angle dengan creator angle yang natural, ekspresinya komunikatif seperti sedang menjelaskan sesuatu, dengan senyum ringan yang ramah dan percaya diri.
      Pencahayaan khas studio kreator yang halus dan merata tanpa menampilkan perangkat apa pun. Detail wajah jernih, smooth, dan proporsional dengan tampilan kulit sehat dan bersih. Tone warna modern, clean, dan aesthetic.
      Komposisi fokus pada subjek, menonjolkan suasana profesional namun tetap hangat, friendly, dan relatable.
      no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Pria 2</p>
  <!-- PROMPT 2 -->
  <div class="kiri-img">
    <img src="img/kp2.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Seorang remaja pria muda Indonesia dengan kulit cerah, memiliki tubuh berisi, gemoy, dan proporsional (sekitar 60 kg), terlihat sehat, segar, dan energik. Wajah sedikit chubby dengan pipi lebih penuh yang memberi kesan menggemaskan, ceria, dan tetap keren.
      Memakai outer hitam kasual dengan inner yang otomatis menyesuaikan secara harmonis, terlihat santai namun tetap stylish. Rambut medium messy yang tetap rapi, teksturnya halus, jatuh natural, dan sedikit bervolume.
      Terlihat dari front angle dengan creator angle yang natural, ekspresinya antusias seperti sedang berbicara ke penonton, dengan senyum cerah dan penuh semangat.
      Pencahayaan khas studio kreator yang halus dan merata tanpa menampilkan perangkat apa pun. Detail wajah jernih, smooth, dan proporsional dengan tampilan kulit sehat dan bersih. Tone warna modern, clean, dan aesthetic.
      Komposisi fokus pada subjek, menonjolkan suasana profesional namun tetap hangat, friendly, dan relatable.
      no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Pria 3</p>
  <!-- PROMPT 3 -->
  <div class="kiri-img">
    <img src="img/kp3.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Seorang remaja pria muda Indonesia dengan kulit sawo matang cerah, memiliki tubuh berisi, gemoy, dan proporsional (sekitar 60 kg), terlihat sehat, segar, dan energik. Bentuk wajah lebih oval dengan pipi chubby yang lembut, dagu sedikit tegas, memberikan kesan manis, santai, dan percaya diri.
      Memakai hoodie abu-abu oversize dengan kaos putih di dalamnya, dipadukan dengan gaya kasual yang modern dan kekinian. Rambut pendek bergaya textured crop dengan sedikit volume di bagian atas, terlihat natural dan stylish.
      Terlihat dari front angle dengan creator angle yang natural, ekspresinya santai namun tetap engaging, seperti sedang berbicara ringan dan akrab dengan penonton, disertai senyum tipis yang hangat.
      Pencahayaan khas studio kreator yang halus dan merata tanpa menampilkan perangkat apa pun. Detail wajah jernih, smooth, dan proporsional dengan tampilan kulit sehat dan fresh. Tone warna modern, clean, sedikit soft contrast untuk kesan aesthetic.
      Komposisi fokus pada subjek, menonjolkan suasana santai, friendly, dan relatable, namun tetap terlihat rapi dan enak dipandang.
      no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Karakter Pria 4</p>
  <!-- PROMPT 4 -->
  <div class="kiri-img">
    <img src="img/kp4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Seorang remaja pria muda Indonesia dengan kulit kuning langsat cerah, memiliki tubuh berisi, gemoy, dan proporsional (sekitar 60 kg), terlihat sehat, segar, dan penuh energi. Wajah berbentuk bulat dengan pipi chubby yang lembut, hidung kecil proporsional, dan mata sedikit besar yang memberikan kesan polos, ramah, dan menyenangkan.
      Memakai kemeja flanel kotak-kotak warna coklat krem yang dipadukan dengan kaos polos di dalamnya, memberikan tampilan kasual yang hangat dan stylish. Rambut bergaya wavy medium dengan tekstur sedikit bergelombang, terlihat natural dan sedikit bervolume.
      Terlihat dari front angle dengan creator angle yang natural, ekspresinya ceria dan komunikatif, seperti sedang berbagi cerita santai kepada penonton dengan senyum lebar yang tulus.
      Latar tempat berada di dalam kafe modern dengan nuansa hangat dan aesthetic, terdapat elemen kayu, tanaman hijau, dan pencahayaan alami yang lembut dari jendela besar, namun tetap fokus pada subjek tanpa distraksi berlebihan.
      Pencahayaan terlihat soft dan merata, menyatu dengan suasana ruangan tanpa menampilkan perangkat apa pun. Detail wajah jernih, smooth, dan proporsional dengan kulit terlihat sehat dan glowing natural. Tone warna warm, cozy, dan tetap clean.
      Komposisi fokus pada subjek, dengan suasana santai, hangat, dan sangat relatable seperti konten lifestyle sehari-hari.
      no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <!-- GABUNGKAN KARAKTER DAN PRODUK -->
  <p class="desc">Gabungkan karakter dan produk dengan AI</p>

  <div class="kiri-img">
  <img src="img/gb.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Gunakan karakter pada gambar pertama sebagai subjek utama. Tampilkan subjek sedang memegang produk dari gambar kedua dengan pose yang natural dan proporsional. Sesuaikan pencahayaan produk agar menyatu dengan lingkungan asli pada foto karakter, sehingga tampak berada dalam satu lokasi yang sama tanpa perbedaan tone atau shadow. Lokasi, ambience, tone warna, dan suasana tetap mengikuti foto karakter. Detail wajah dan proporsi tubuh subjek dipertahankan sepenuhnya. Komposisi bersih dan fokus pada interaksi antara karakter dan produk, tanpa menampilkan perangkat atau alat perekaman. no camera, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <!-- GENERATED VIDEO PRODUK -->
  <p class="desc">Generated video produk 1<br>#sebelumnya siapkan foto produknya dahulu(kalau bisa yang mentahan/transparan</p>

  <!-- PROMPT 1 -->
  <!-- KIRI (VIDEO) -->
  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/gr1.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Video produk cinematic menampilkan sebuah produk premium di dalam studio aesthetic yang minimalis dan elegan. Produk diletakkan di atas platform bersih dengan background gradasi lembut (cream, beige, atau pastel) serta bayangan halus dan refleksi ringan.
      Opening shot dimulai dengan gerakan kamera slow motion (dolly in / maju perlahan) yang halus, menonjolkan siluet produk secara dramatis. Dilanjutkan dengan macro close-up untuk memperlihatkan tekstur, detail label, dan kualitas material dengan depth of field yang sempit dan efek bokeh yang lembut.
      Pencahayaan soft, merata, dan mewah, menciptakan tampilan high-end seperti iklan profesional, dengan highlight halus dan bayangan yang smooth tanpa menampilkan perangkat apa pun.
      Terdapat shot rotasi produk 360° secara perlahan (turntable effect), dipadukan dengan partikel halus atau efek light leak tipis untuk menambah kesan cinematic.
      Gunakan variasi angle dinamis: tampak atas (top view), samping (side angle), dan extreme close-up untuk memperkuat visual storytelling.
      Transisi antar scene menggunakan efek elegan seperti fade, blur transition, dan light sweep. Opsional: efek asap tipis atau kabut ringan untuk menambah depth dan nuansa premium.
      Color grading modern, bersih, sedikit warm dengan kontras yang seimbang, memberikan kesan brand mewah dan profesional.
      Closing shot: produk berada di tengah frame dengan efek glow halus dan vignette ringan, background sedikit blur untuk fokus maksimal ke produk.
      Resolusi 4K, ultra realistic, detail tinggi, gaya iklan komersial profesional, cinematic lighting, pergerakan kamera sangat halus.
      tanpa teks, tanpa watermark, tanpa logo tambahan, no camera, no crew, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <p class="desc">Generated video produk 2</p>
  <!-- PROMPT 2 -->
  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/gr2.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Video produk cinematic menampilkan produk premium dengan latar belakang studio gelap elegan (dark aesthetic) dipadukan dengan spotlight dramatis dan aksen refleksi glossy seperti kaca hitam.
      Opening shot dimulai dari kondisi hampir gelap (fade in dari hitam), lalu cahaya perlahan menyapu permukaan produk (light sweep), menampilkan siluet secara misterius dan mewah.
      Dilanjutkan dengan teknik reveal unik: kamera bergerak sideways (slide) melewati foreground blur (seperti kaca atau objek transparan) untuk menciptakan depth sinematik.
      Gunakan slow motion tracking shot dari samping dengan fokus tajam ke produk, sementara background tetap gelap dan halus. Tambahkan efek highlight tajam di tepi produk (rim light) untuk menonjolkan bentuk.
      Ambil beberapa shot detail menggunakan extreme macro dengan angle tidak biasa (low angle close-up dan diagonal framing) untuk memberikan kesan eksklusif dan berbeda.
      Gunakan efek refleksi di permukaan bawah (mirror surface) sehingga produk terlihat lebih premium dan dramatis.
      Tambahkan elemen visual seperti asap tipis bergerak lambat atau partikel debu halus yang terkena cahaya untuk memperkuat suasana cinematic.
      Transisi antar scene menggunakan cut cepat yang smooth dipadukan dengan fade gelap (dip to black) untuk menjaga mood elegan.
      Color grading cenderung gelap, kontras tinggi, dengan tone cool (biru gelap / hitam) dipadukan highlight putih lembut untuk kesan luxury dan eksklusif.
      Closing shot: produk muncul dari kegelapan dengan spotlight terpusat, disertai efek glow tipis dan refleksi yang kuat, menciptakan kesan mahal dan powerful.
      Resolusi 4K, ultra realistic, detail tinggi, cinematic commercial style, dramatic lighting, smooth motion.
      tanpa teks, tanpa watermark, tanpa logo tambahan, no camera, no crew, no led, no lamp.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

   <!-- CARI KATA 1 -->
  <p class="desc">Cari kata-kata konten JJ, produk, edukasi, slide.</p>
 
  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan 50 variasi kalimat hook, masalah, dan closing untuk produk herbal penggemuk badan (Herbal Gomuk) dalam format storytelling berdasarkan pengalaman pribadi.
      Gunakan sudut pandang orang pertama (aku/saya) yang menceritakan perjalanan dari tubuh kurus hingga menjadi lebih berisi secara sehat dan percaya diri.
      Struktur setiap poin:
      1. Hook (pembuka yang menarik perhatian, relate, dan natural)
      2. Masalah (cerita struggle seperti susah gemuk, kurang percaya diri, sering dikomentari, dll — tanpa berlebihan)
      3. Closing (solusi yang halus, soft selling, tidak hard claim, tidak menjanjikan hasil instan)
      Ketentuan:
      - Gunakan bahasa santai, natural, dan relatable seperti konten TikTok
      - Hindari klaim berlebihan (seperti hasil instan, angka pasti, atau jaminan)
      - Tidak menyebutkan istilah medis berisiko atau klaim kesehatan yang tidak terbukti
      - Fokus pada pengalaman pribadi, perubahan gaya hidup, dan kesan positif
      - Variasikan gaya penulisan agar tidak monoton
      - Panjang tiap poin 2–4 kalimat (ringkas tapi kuat)
      - Gunakan tone positif, jujur, dan tidak berlebihan
      Output dalam bentuk list 1–50 tanpa penjelasan tambahan.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

  <!-- CARI KATA 2 -->
  <p class="desc">Cari kata-kata konten AI</p>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p class="text-content">
      Buatkan 50 variasi kalimat closing saja untuk produk herbal penggemuk badan (Herbal Gomuk) dengan gaya bahasa gaul Gen Z yang santai, ringan, dan relatable.
      Gunakan sudut pandang pengalaman pribadi (aku/saya) seolah sudah merasakan manfaatnya, namun tetap tidak berlebihan dan tidak membuat klaim yang melanggar kebijakan.
      Karakter closing:
      - Singkat, padat, dan to the point (1 kalimat saja)
      - Mengandung ajakan halus (soft selling), seperti arah ke "keranjang kuning", "cek sekarang", atau "coba sendiri"
      - Tone santai, friendly, dan kekinian khas TikTok
      - Terasa natural, tidak kaku, dan tidak terlalu promosi berlebihan
      Ketentuan:
      - Hindari klaim hasil instan, angka pasti, atau jaminan berlebihan
      - Tidak menggunakan bahasa medis atau klaim kesehatan yang tidak terbukti
      - Tidak terkesan memaksa atau menipu
      - Variasikan gaya bahasa agar tidak monoton
      - Tetap fokus pada pengalaman pribadi yang relatable
      Output dalam bentuk list 1–50 tanpa penjelasan tambahan.
      </p>

      <div class="btn-group">
        <button class="toggle-btn" onclick="toggleText(this)">
           Lihat Lengkap Prompt
        </button>

        <button class="copy-btn" onclick="copyText(this)">
           🗐 Salin Prompt
       </button>
      </div>
    </div>
  </div>

    `;
  }

  // ======================
  // KONTEN SLIDE
  // ======================
  if(jenis=="slide"){
    isi = `
    <h3 class="judul-section">Workflow Video Konten Slide</h3>

  <p class="sub">Contoh Video</p>

  <video class="video tengah" controls>
    <source src="consd.mp4" type="video/mp4">
  </video>

  <hr>

  <h3 class="step">Aplikasi yang Harus di Install</h3>
  <p class="desc">Pinterest<br>TikTok</p>

  <hr>

  <h3 class="step">Cara Buat Konten Slide</h3>

  <p class="desc">Step 1: Cari gambar di pinterest</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/sd1.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text37">
      Cari 2 foto di pinterest dengan ketentuan yang 1 foto orang agak kurus (sebagai hook), 1 lagi foto orang yang berisi/gemuk tapi jangan terlalu obesitas (sebagai testimoni/hasil). 
      </p>
    </div>
  </div>

  <p class="desc">Step 2: Buat generated video di AI</p>

  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/sd2.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text37">
      Generated video dengan 1 foto yang berisi/gemuk. di AI (bisa pake google flow, gemini pro, chat gpt pro, capcut pro, dll). prompt nya (animasikan dengan realistis. anti terdeteksi AI)
      </p>
    </div>
  </div>

  <p class="desc">Step 3: Siapkan video produk</p>

  <div class="konten-row">
    <video class="video tengah" controls>
    <source src="video/sd3.mp4" type="video/mp4">
    </video>
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text37">
      Siapkan video produk bisa AI atau Shoot. Untuk AI, prompt nya bisa dilihat di menu Jenis Konten AI. 
      </p>
    </div>
  </div>

  <p class="desc">Step 4: Buka Tiktod</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/sd4.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text38">
      Langsung aja gas edit di TikTod seperti biasanya. kasih kata-kata hook di slide orang kurus, lalu kasih kata-kata testimoni di orang berisi atau gemuk. Untuk video produk bisa di tengah/ di akhir.
      </p>
    </div>
  </div>

  <p class="desc">Step 5: Atur Postingan</p>

  <!-- KIRI (GAMBAR) -->
  <div class="kiri-img">
    <img src="img/sd5.jpeg" class="img-content" onclick="zoom(this)">
  </div>

  <!-- KANAN (PROMPT) -->
  <div class="kanan-text">

    <div class="card-prompt">
      <p id="text38">
      Seperti biasanya, kasih hastag, atur sampul, tautkan keranjang kuning, jadwal postingan kalau mau buat stock, gas posting.
      </p>
    </div>
  </div>

  <p class="desc">Hasil Eksekusi</p>
  <video class="video tengah" controls>
    <source src="video/consd.mp4" type="video/mp4">
    </video>

  <hr>

  <h3 class="step">Jam/Waktu Upload yang di rekomendasikan</h3>
  <p class="desc">Jam/Pukul:<br>11.00<br>15.00<br>17.00<br>19.00<br>21.00</p>

  <hr>

  <h3 class="step">Tips & Trik biar cepat closing dan FYP</h3>
  <p class="desc">
  1. Upload sesuai Jam yang telah di rekomendasikan.<br>
  2. Upload Minimal 3 konten 1 hari.<br>
  3. Konsisten Upload biar cepat closing.<br>
  4. Setelah upload biarkan kamu tonton sendiri konten nya selama 5 menit tanpa ngapa"in, habis itu di like, simpan, bagikan gak papa (untuk yang atur jadwal posting tidak lakukan ini juga gak papa) sebenarnya ini untuk mencari traffic.<br>
  5. Jangan sampai 1 hari tidak konten, minimal kalau kepepet buanget 1 konten gak papa.<br>
  6. Tidak usah memandang views yang penting konsisten terus bawahnya kasih kata-kata "semangat konten nya semoga cepat closing".
  </p>
    `;
  }

  // MASUKKAN KE HALAMAN
  document.getElementById("isiHal3").innerHTML = isi;
}

function toggleText(btn) {
  const text = btn.parentElement.previousElementSibling;

  text.classList.toggle("expanded");

  btn.innerText = text.classList.contains("expanded")
    ? "Sembunyikan"
    : "Lihat Lengkap Prompt";
}

function copyText(btn) {
  const text = btn.parentElement.previousElementSibling.innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      btn.innerText = "✔ Copied!";
      setTimeout(() => {
        btn.innerText = "🗐 Salin Prompt";
      }, 1500);
    })
    .catch(err => {
      console.error("Gagal copy:", err);
    });
}

  function setPrompt(id, text, btn) {
  const el = document.getElementById(id).innerText;

  if (!el) return;

  // isi text ke p
  el.innerText = text;

  // kalau panjang <= 315, tombol disembunyikan
  if (text.length <= 315) {
    btn.style.display = "none";
  }
  }

function zoom(img){
  let popup = document.createElement("div");

  popup.style.position = "fixed";
  popup.style.top = 0;
  popup.style.left = 0;
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.background = "rgba(0,0,0,0.8)";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";

  popup.innerHTML = `
    <img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:15px;">
  `;

  popup.onclick = function(){
    popup.remove();
  }

  document.body.appendChild(popup);
}

//////////////////////////////...HALAMAN TIM...//////////////////////////////
// LOAD DATA TIM
let dataTim = JSON.parse(localStorage.getItem("tim")) || [];
let editIndex = -1;

function loadTim(filter=""){

let tbody = document.getElementById("tbodyTim");
tbody.innerHTML = "";

dataTim.forEach((item,index)=>{

let text = (item.timNama + item.username).toLowerCase();

if(text.includes(filter.toLowerCase())){

tbody.innerHTML += `
<tr>
<td>${index+1}</td>
<td>${item.timNama}</td>
<td>${item.username}</td>
<td>${item.domisili}</td>
<td>${item.status}</td>

<td>
<button class="btn-yellow" onclick="editTim(${index})">Edit</button>
<button class="btn-red" onclick="hapusTim(${index})">Hapus</button>
</td>
</tr>
`;

}

});

localStorage.setItem("tim",JSON.stringify(dataTim));

}


// buka popup
function bukaPopup(){
document.getElementById("popupTim").style.display="flex";
}


// tutup popup
function tutupPopup(){

document.getElementById("popupTim").style.display="none";

document.getElementById("timNama").value="";
document.getElementById("username").value="";
document.getElementById("domisili").value="";

editIndex=-1;
}


// simpan
function simpanTim(){

let timNama = document.getElementById("timNama").value.trim();
let username = document.getElementById("username").value.trim();
let domisili = document.getElementById("domisili").value.trim();
let status = document.getElementById("status").value;

if(timNama=="" || username==""){
alert("Isi data dulu");
return;
}

if(editIndex>=0){

dataTim[editIndex] = {
timNama: timNama,
username: username,
domisili: domisili,
status: status
};

}else{

dataTim.push({
timNama: timNama,
username: username,
domisili: domisili,
status: status
});

}
localStorage.setItem("tim", JSON.stringify(dataTim));
loadTim();
tutupPopup();

}


// edit
function editTim(i){

bukaPopup();

document.getElementById("timNama").value = dataTim[i].timNama;
document.getElementById("username").value = dataTim[i].username;
document.getElementById("domisili").value = dataTim[i].domisili;
document.getElementById("status").value = dataTim[i].status;

editIndex=i;
}


// hapus
function hapusTim(i){

if(confirm("Hapus data ini?")){
dataTim.splice(i,1);
loadTim();
}

}


// export excel
function exportExcel(){

let csv = "No,Nama,Username TikTok,Domisili,Status\n";

dataTim.forEach((item,index)=>{
csv += `${index+1},${item.timNama},${item.username},${item.domisili},${item.status}\n`;
});

let blob = new Blob([csv],{type:"text/csv"});
let a = document.createElement("a");

a.href = URL.createObjectURL(blob);
a.download = "data_tim.csv";
a.click();

}

//////////////////////////////...FUNGSI KEMBALI...//////////////////////////////

function kembali(){
  document.getElementById("hal2").style.display="none";
  document.getElementById("home").style.display="block";
}

function kembali2(){
  document.getElementById("hal3").style.display="none";
  document.getElementById("hal2").style.display="block";
}

function kembalikehome(){
  document.getElementById("halTim").style.display="none";
  document.getElementById("home").style.display="block";
}