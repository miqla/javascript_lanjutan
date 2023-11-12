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

// Rest parameter --------------------- // ------------------------------------//
function myFunc(a, b, ...rest) {
  // return a;
  // return `a = ${a}, b = ${b}, sisa = ${rest}`;
  // return rest;
  // return arguments;
  return Array.from(arguments);
}
console.log(myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
  // let total = 0;
  // for (const a of angka) {
  //   total += a;
  // }
  // return total;

  return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ["ada", "nasi", "kuning", "dan", "pecel"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// objek destructuring
const kelompok2 = {
  pm: "badak",
  backend1: "ayam",
  backend12: "gla",
  normal: "bela",
};
const { pm, ...sisa } = kelompok2;
console.log(sisa);

// filtering
function filterBy(type, ...value) {
  return value.filter((v) => typeof v === type);
}
console.log(filterBy("string", 1, 2, "bima", "hilih", true, false));
