// Callback
// Synchronous callback: sebuah function yg parameternya juga function

// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanNama(callback) {
//   const nama = prompt("Masukkan nama!");
//   callback(nama);
// }
// // tampilkanNama(halo);
// tampilkanNama((nama) => alert(`Halo ${nama}`));

const mhs = [
  {
    nama: "alek",
    umur: 40,
  },
  {
    nama: "mila",
    umur: 20,
  },
  {
    nama: "beliau",
    umur: 23,
  },
];
console.log("mulai");
mhs.forEach((m) => {
  // kasih for biar loopingnya lama, buat contoh minus synchronous
  for (let i = 0; i < 10000000; i++) {
    const date = new Date();
  }
  console.log(m.nama);
});
console.log("selesai");
