// Mendapatkan semua elemen div dan tautan materi Semester 3
const materiContentsSmt3 = document.querySelectorAll("#smt3 .materi-content");
const materiLinksSmt3 = document.querySelectorAll("#smt3 .materi-btn");

// Fungsi untuk mengaktifkan tautan dan menampilkan konten yang sesuai
function activateContentSmt3(linkId, contentId) {
  // Sembunyikan semua konten
  materiContentsSmt3.forEach((content) => (content.style.display = "none"));

  // Nonaktifkan semua tautan
  materiLinksSmt3.forEach((link) => link.classList.remove("active"));

  // Tampilkan konten yang sesuai dan aktifkan tautan
  document.getElementById(contentId).style.display = "block";
  document.getElementById(linkId).classList.add("active");
}

// Set konten pertama untuk Semester 3 (Matematika 3)
activateContentSmt3("pbw-link", "pbw");

// Tambahkan event listener pada setiap tautan
materiLinksSmt3.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Mencegah tautan melakukan navigasi atau refresh halaman
    event.preventDefault();

    // Buat id konten dari id tautan (menghilangkan "-link" dari id tautan)
    const contentId = link.id.replace("-link", "");

    // Aktifkan konten yang sesuai dengan tautan yang diklik
    activateContentSmt3(link.id, contentId);
  });
});
