// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const lanjutan = videos
  .filter((video) => video.textContent.includes("LANJUTAN"))

  // Ambil durasi masing" video
  .map((durasi) => durasi.getAttribute("data-duration")) //bisa pake dataset juga

  // ubah durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    // "15:27" -> "15", "27" split. float -> 15, 27
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((jumlah, detik) => jumlah + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(lanjutan / 3600);
const menit = Math.floor((lanjutan % 3600) / 60);
const detik = Math.floor((lanjutan % 3600) % 60);

// Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `Total video adalah: ${jam} jam, ${menit} menit, ${detik} detik.`; //bisa pake innerHTML

const jmlVideo = videos.filter((video) =>
  video.textContent.includes("LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.innerHTML = `Jumlah video adalah ${jmlVideo}`;
