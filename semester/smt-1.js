// Mendapatkan semua elemen div dan tautan materi Semester 1
const materiContentsSmt1 = document.querySelectorAll("#smt-1 .materi-content");
const materiLinksSmt1 = document.querySelectorAll("#smt-1 .materi-btn");

// Fungsi untuk mengaktifkan tautan dan menampilkan konten yang sesuai
function activateContentSmt1(linkId, contentId) {
  // Sembunyikan semua konten
  materiContentsSmt1.forEach((content) => (content.style.display = "none"));

  // Nonaktifkan semua tautan
  materiLinksSmt1.forEach((link) => link.classList.remove("active"));

  // Tampilkan konten yang sesuai dan aktifkan tautan
  document.getElementById(contentId).style.display = "block";
  document.getElementById(linkId).classList.add("active");
}

// Set konten pertama untuk Semester 1 (IPA)
activateContentSmt1("ipa-link", "ipa");

// Tambahkan event listener pada setiap tautan
materiLinksSmt1.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Mencegah tautan melakukan navigasi atau refresh halaman
    event.preventDefault();

    // Buat id konten dari id tautan (menghilangkan "-link" dari id tautan)
    const contentId = link.id.replace("-link", "");

    // Aktifkan konten yang sesuai dengan tautan yang diklik
    activateContentSmt1(link.id, contentId);
  });
});
