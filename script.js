// Ambil elemen-elemen HTML
const form = document.getElementById('mahasiswaForm');
const tabel = document.querySelector('#tabelMahasiswa tbody');
const infoText = document.getElementById('infoText');

// Array untuk menyimpan data mahasiswa
let dataMahasiswa = [];
let nomor = 1;

// Event ketika form disubmit
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input
  const nama = document.getElementById('nama').value.trim();
  const nim = document.getElementById('nim').value.trim();
  const semester = document.getElementById('semester').value.trim();
  const prodi = document.getElementById('prodi').value;
  const email = document.getElementById('email').value.trim();

  // Validasi sederhana
  if (!nama || !nim || !semester || !prodi || !email) {
    infoText.textContent = "⚠️ Semua field harus diisi!";
    infoText.style.color = "red";
    return;
  }

  // Buat objek mahasiswa baru
  const mahasiswaBaru = {
    no: nomor++,
    nama,
    nim,
    semester,
    prodi,
    email
  };

  // Tambahkan ke array dataMahasiswa
  dataMahasiswa.push(mahasiswaBaru);

  // Tampilkan data ke tabel
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${mahasiswaBaru.no}</td>
    <td>${mahasiswaBaru.nama}</td>
    <td>${mahasiswaBaru.nim}</td>
    <td>${mahasiswaBaru.semester}</td>
    <td>${mahasiswaBaru.prodi}</td>
    <td>${mahasiswaBaru.email}</td>
  `;
  tabel.appendChild(row);

  // Tampilkan data ke console
  console.log("Data Mahasiswa Ditambahkan:", mahasiswaBaru);

  // Info sukses
  infoText.textContent = "✅ Data berhasil ditambahkan!";
  infoText.style.color = "green";

  // Reset form
  form.reset();
});
