// spread operator
// memecah iterables menjadi single element
const satwa = ["gajah", "semut", "kuda"];
console.log(...satwa);
console.log(...satwa[0]); //stringnya jadi kepisah perhuruf

// Menggabungkan 2 array
const ikan = ["lele", "nila", "bawal"];
// const hewan = [...satwa, ...ikan];
const hewan = [...satwa, "beruang", ...ikan]; // menyisipkan string lain ditengah penggabungan array
console.log(hewan);
console.log(satwa.concat("ayam", ikan));

// Mengcopy array
const unggas = ["ayam", "bebek", "itik"];
// const bin = unggas;
const bin = [...unggas];
bin[0] = "angsa";
console.log(bin);

// Mengambil content dari HTML
const orang = document.querySelectorAll(".nama");
// const a = [];
// for (i = 0; i < orang.length; i++) {
//   a.push(orang[i].textContent);
// }
const a = [...orang].map((m) => m.textContent);
console.log(a);

// spread huruf
const judul = document.querySelector("h1");
const ab = [...judul.textContent]
  .map((huruf) => `<span>${huruf}</span>`)
  .join("");
console.log(ab);
judul.innerHTML = ab;
