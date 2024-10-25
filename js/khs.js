document.addEventListener("DOMContentLoaded", function () {
  const menu1Khs = document.getElementById("menu-1-khs");
  const menu2Khs = document.getElementById("menu-2-khs");
  const pembungkusContKhs = document.querySelector(".pembungkus-cont-khs");
  const daftarNilai = document.querySelector(".daftar-nilai");

  // Fungsi untuk menampilkan konten yang sesuai dan mengatur tombol aktif
  function showContent(buttonId) {
    // Reset semua tombol
    menu1Khs.classList.remove("active");
    menu2Khs.classList.remove("active");

    // Sembunyikan semua konten
    daftarNilai.style.display = "none"; // Sembunyikan daftar nilai

    // Tampilkan konten dan aktifkan tombol sesuai dengan buttonId
    if (buttonId === "menu-1-khs") {
      menu1Khs.classList.add("active");
      pembungkusContKhs.style.display = ""; // Kembalikan ke default (flex atau block sesuai CSS)
      daftarNilai.style.display = "none"; // Pastikan daftar nilai disembunyikan
    } else if (buttonId === "menu-2-khs") {
      menu2Khs.classList.add("active");
      daftarNilai.style.display = "block"; // Menampilkan daftar nilai
      pembungkusContKhs.style.display = "none"; // Sembunyikan konten pembungkusContKhs
    }
  }

  // Set default active button saat halaman dimuat
  showContent("menu-1-khs"); // Misalnya, menu-1-khs yang diaktifkan

  // Tambahkan event listener untuk menu
  menu1Khs.addEventListener("click", () => showContent("menu-1-khs"));
  menu2Khs.addEventListener("click", () => showContent("menu-2-khs"));
});

function toggleKHSContent(headerElement, itemElement, arrowIcon) {
  const item = document.querySelector(itemElement);
  const icon = document.querySelector(arrowIcon);
  const header = document.querySelector(headerElement);

  if (item.classList.contains("active")) {
    // Sembunyikan item
    item.classList.remove("active");
    header.style.borderRadius = "10px";
    icon.style.transform = "rotate(0deg)";
  } else {
    // Tampilkan item
    item.classList.add("active");
    header.style.borderRadius = "10px 10px 0 0";
    icon.style.transform = "rotate(180deg)";
  }
}

// Jalankan ketika halaman di-load
document.addEventListener("DOMContentLoaded", function () {
  // Tampilkan item SMT 3 secara default
  const itemSmt3 = document.querySelector(".item-khs-smt-3");
  const arrowSmt3 = document.querySelector(".arrow-icon-khs-smt-3");
  const headerSmt3 = document.querySelector(".header-khs-smt-3");

  // Tambahkan kelas 'active' untuk menampilkan item SMT 3 saat halaman pertama kali dibuka
  itemSmt3.classList.add("active");
  headerSmt3.style.borderRadius = "10px 10px 0 0";
  arrowSmt3.style.transform = "rotate(180deg)";

  // Tambahkan event listener untuk SMT 3
  headerSmt3.addEventListener("click", function () {
    toggleKHSContent(
      ".header-khs-smt-3",
      ".item-khs-smt-3",
      ".arrow-icon-khs-smt-3"
    );
  });

  // Tambahkan event listener untuk SMT 2
  const itemSmt2 = document.querySelector(".item-khs-smt-2");
  const arrowSmt2 = document.querySelector(".arrow-icon-khs-smt-2");
  const headerSmt2 = document.querySelector(".header-khs-smt-2");

  headerSmt2.addEventListener("click", function () {
    toggleKHSContent(
      ".header-khs-smt-2",
      ".item-khs-smt-2",
      ".arrow-icon-khs-smt-2"
    );
  });

  // Tambahkan event listener untuk SMT 1
  const itemSmt1 = document.querySelector(".item-khs-smt-1");
  const arrowSmt1 = document.querySelector(".arrow-icon-khs-smt-1");
  const headerSmt1 = document.querySelector(".header-khs-smt-1");

  headerSmt1.addEventListener("click", function () {
    toggleKHSContent(
      ".header-khs-smt-1",
      ".item-khs-smt-1",
      ".arrow-icon-khs-smt-1"
    );
  });
});

// Grafik IPS Mahasiswa
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("ips-in-khs").getContext("2d"); // Menggunakan ID baru
  const ipsChart = new Chart(ctx, {
    type: "line", // Mengubah tipe grafik menjadi garis
    data: {
      labels: ["SMT 1", "SMT 2"], // Label untuk sumbu X
      datasets: [
        {
          label: "IPS Mahasiswa", // Label untuk grafik
          data: [4, 3], // Data IPS untuk Semester 1 dan Semester 2
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Warna area di bawah garis
          borderColor: "rgba(75, 192, 192, 1)", // Warna garis
          borderWidth: 2, // Lebar garis
          pointBackgroundColor: "rgba(75, 192, 192, 1)", // Warna titik
          pointBorderColor: "rgba(255, 255, 255, 1)", // Warna border titik
          pointRadius: 6, // Ukuran titik data
          pointHoverRadius: 8, // Ukuran titik saat hover
          fill: true, // Isi area di bawah garis
          tension: 0.4, // Membuat garis lebih melengkung
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true, // Mulai sumbu Y dari nol
          max: 4, // Maksimal nilai pada sumbu Y
          ticks: {
            stepSize: 1, // Jarak antar nilai di sumbu Y
            color: "#333", // Warna label Y
          },
          grid: {
            color: "rgba(200, 200, 200, 0.5)", // Warna grid Y
            lineWidth: 1,
          },
        },
        x: {
          ticks: {
            color: "#333", // Warna label X
          },
          grid: {
            color: "rgba(200, 200, 200, 0.5)", // Warna grid X
            lineWidth: 1,
          },
        },
      },
      plugins: {
        legend: {
          display: true, // Tampilkan legend
          labels: {
            color: "#333", // Warna teks legend
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Warna latar belakang tooltip
          titleColor: "#fff", // Warna judul tooltip
          bodyColor: "#fff", // Warna teks tooltip
          borderColor: "#FFA500", // Warna batas tooltip
          borderWidth: 1,
          padding: 10, // Padding dalam tooltip
          cornerRadius: 5, // Sudut tooltip yang melengkung
        },
      },
    },
  });
});
