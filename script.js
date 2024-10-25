// Mendapatkan semua tombol dan section
const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".content-section");

// Fungsi untuk mengaktifkan tombol dan menampilkan konten yang sesuai
function activateButton(buttonId, sectionId) {
  // Nonaktifkan semua tombol dan sembunyikan semua section
  buttons.forEach((button) => button.classList.remove("active"));
  sections.forEach((section) => (section.style.display = "none"));

  // Aktifkan tombol yang diklik dan tampilkan section yang sesuai
  document.getElementById(buttonId).classList.add("active");
  document.getElementById(sectionId).style.display = "block";
}

// Saat halaman pertama kali dibuka, tombol home aktif
activateButton("home-btn", "home");

// Menambahkan event listener untuk setiap tombol
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Buat agar tombol dan section sesuai aktif
    const sectionId = button.id.replace("-btn", ""); // Mengambil id section dari button
    activateButton(button.id, sectionId);
  });
});
