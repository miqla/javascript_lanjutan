// Looping objek yang iterable
// for.. of
// 1. array
const mhs = ["erik", "dodi", "bela"];

for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

mhs.forEach((m) => console.log(m));

for (const m of mhs) {
  console.log(m);
}

// 2. String
const nama = "hepibesdey";
for (const n of nama) {
  console.log(n);
}

// contoh dengan destructuring
const abc = ["gajah", "semut", "orang"];
abc.forEach((m, i) => console.log(`Nama ${m} memiliki index ke ${i}`));

for (const [i, a] of abc.entries()) {
  console.log(`nama saya adalah ${a} dengan index ke ${i}`); //hasil sama kek atasnya
}

// 3. NodeList
const liNama = document.querySelectorAll(".nama");

liNama.forEach((m) => console.log(m.textContent));

for (n of liNama) {
  console.log(n.innerHTML);
}

// 4.Arguments
function jmlAngka() {
  // return arguments.reduce((a, i) => a + i);
  let jumlah = 0;
  // arguments.forEach((a) => (jumlah += a));
  for (c of arguments) {
    jumlah += c;
  }
  return jumlah;
}

console.log(jmlAngka(1, 2, 3, 4, 5));

// for..in
const xyz = {
  nama: "delta",
  umur: 26,
  email: "ulala@coba.com",
};
for (m in xyz) {
  console.log(m); //ambil indexnya
  console.log(xyz[m]); // buat ambil isinya
}
