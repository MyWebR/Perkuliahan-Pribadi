// Mendapatkan semua elemen div dan tautan materi Semester 2
const materiContentsSmt2 = document.querySelectorAll("#smt2 .materi-content");
const materiLinksSmt2 = document.querySelectorAll("#smt2 .materi-btn");

// Fungsi untuk mengaktifkan tautan dan menampilkan konten yang sesuai
function activateContentSmt2(linkId, contentId) {
  // Sembunyikan semua konten
  materiContentsSmt2.forEach((content) => (content.style.display = "none"));

  // Nonaktifkan semua tautan
  materiLinksSmt2.forEach((link) => link.classList.remove("active"));

  // Tampilkan konten yang sesuai dan aktifkan tautan
  document.getElementById(contentId).style.display = "block";
  document.getElementById(linkId).classList.add("active");
}

// Set konten pertama untuk Semester 2 (Fisika)
activateContentSmt2("fisika-link", "fisika");

// Tambahkan event listener pada setiap tautan
materiLinksSmt2.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Mencegah tautan melakukan navigasi atau refresh halaman
    event.preventDefault();

    // Buat id konten dari id tautan (menghilangkan "-link" dari id tautan)
    const contentId = link.id.replace("-link", "");

    // Aktifkan konten yang sesuai dengan tautan yang diklik
    activateContentSmt2(link.id, contentId);
  });
});
