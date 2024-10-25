function toggleContent(classPrefix) {
  const content = document.querySelector(`.item-krs-smt-${classPrefix}`);
  const arrowIcon = document.querySelector(`.arrow-icon-smt-${classPrefix}`);
  const header = document.querySelector(`.header-krs-smt-${classPrefix}`);

  if (content.classList.contains("show")) {
    // Ketika konten disembunyikan
    content.style.maxHeight = content.scrollHeight + "px"; // Set initial height for smooth transition
    setTimeout(() => {
      content.style.maxHeight = 0; // Collapse the content
      content.style.opacity = 0; // Fade out the content
    }, 10); // Small delay for smooth closing animation

    // Hide content after animation is complete
    setTimeout(() => {
      content.classList.remove("show");
      content.style.display = "none"; // Hide content after animation
      header.style.borderRadius = "10px"; // Kembalikan border-radius
    }, 500); // Match with CSS transition duration

    arrowIcon.style.transform = "rotate(0deg)"; // Rotate arrow back to original position
  } else {
    content.style.display = "block"; // Make content visible initially
    setTimeout(() => {
      content.classList.add("show");
      content.style.maxHeight = content.scrollHeight + "px"; // Expand the content
      content.style.opacity = 1; // Fade in the content
      header.style.borderRadius = "10px 10px 0 0"; // Ubah border-radius saat konten ditampilkan
    }, 10); // Small delay for smooth opening animation

    arrowIcon.style.transform = "rotate(180deg)"; // Rotate arrow up
  }
}

// Menambahkan event listener untuk setiap header
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".header-krs");
  headers.forEach((header, index) => {
    header.addEventListener("click", () => toggleContent(index + 1));
  });

  // Menampilkan konten KRS MST 3 secara otomatis saat halaman dimuat
  const defaultContent = document.querySelector(".item-krs-smt-3");
  const defaultArrowIcon = document.querySelector(".arrow-icon-smt-3");
  const defaultHeader = document.querySelector(".header-krs-smt-3");

  if (defaultContent) {
    defaultContent.style.display = "block"; // Buat konten terlihat
    defaultContent.classList.add("show"); // Tambahkan class show
    defaultContent.style.maxHeight = defaultContent.scrollHeight + "auto"; // Atur tinggi maksimum
    defaultContent.style.opacity = 1; // Atur opacity

    defaultHeader.style.borderRadius = "10px 10px 0 0"; // Ubah border-radius
    defaultArrowIcon.style.transform = "rotate(180deg)"; // Putar panah ke atas
  }
});
