// Grafik IPS
document.addEventListener("DOMContentLoaded", function () {
  // Grafik IPS (tetap sama seperti sebelumnya)
  const ctx = document.getElementById("ipsChart").getContext("2d");
  const ipsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["SMT 1", "SMT 2"],
      datasets: [
        {
          label: "IPS",
          data: [3.05, 2.6],
          backgroundColor: "rgba(255, 165, 0, 0.2)", // Warna oranye transparan
          borderColor: "rgba(255, 165, 0, 1)", // Warna oranye solid
          borderWidth: 3, // Lebar garis
          pointBackgroundColor: "rgba(255, 165, 0, 1)", // Warna titik
          pointBorderColor: "rgba(255, 255, 255, 1)", // Warna border titik
          pointRadius: 8, // Ukuran titik data
          pointHoverRadius: 10, // Ukuran titik saat hover
          pointHoverBackgroundColor: "rgba(255, 255, 255, 1)", // Warna latar belakang titik saat hover
          fill: true, // Isi area di bawah garis
          tension: 0.4, // Membuat garis lebih melengkung
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 10,
          shadowColor: "rgba(255, 165, 0, 0.5)", // Warna bayangan
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 4, // IPK maksimal
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
          display: false, // Menghilangkan label 'IPS' di atas grafik
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
      animation: {
        tension: {
          duration: 1000,
          easing: "easeOutBounce",
          from: 0.1,
          to: 0.4,
          loop: true,
        },
      },
    },
  });

  // Grafik Pengambilan SKS (modern dan keren)
  const gpkCtx = document.getElementById("gpk").getContext("2d");
  const gpkChart = new Chart(gpkCtx, {
    type: "bar",
    data: {
      labels: ["Semester 1", "Semester 2", "Semester 3"],
      datasets: [
        {
          label: "SKS Diambil",
          data: [21, 20, 20],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 24, // Maksimal SKS
          ticks: {
            stepSize: 2, // Langkah nilai Y
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
          display: true,
          labels: {
            color: "#333",
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "#4bc0c0",
          borderWidth: 1,
          padding: 10,
          cornerRadius: 5,
        },
      },
    },
  });
});