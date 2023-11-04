// Filter, map, reduce
const angka = [-1, 9, 8, 1, 4, -5, -4, 3, 2, 7];

// menggunakan for: mencari angka >=3, const array bisa diisi, yg gabisa tuh dirubah
const a = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    a.push(angka[i]);
  }
}
console.log(a);

// menggunakan filter
const newAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka); // panggil variabel baru karna menghasilkan array baru

// filter dan arrow function, --//--
const angka2 = angka.filter((a) => a >= 3);
console.log(angka2);

// filter dan arrow function lngsung masukin kedalam clog
console.log(angka.filter((a) => a >= 3));

// map: kalikan semua angka dengan 2, cara tulisnya sama dengan filter
console.log(angka.map((a) => a * 2));

// reduce: jumlahkan seluruh elemen pada array
const jmlAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue
); // klo ga tulis nilai awal, default = 0
console.log(jmlAngka);

const jmlAngka2 = angka.reduce(
  (akumulasi, nowValue) => akumulasi + nowValue,
  3 // 3 adalah angka / nilai awal yg kita tentukan
);
console.log(jmlAngka2);

// method chaining: menggabungkan 3 method diatas sekaligus, bisa ditulis 1 baris
// cari angka > 5, kalikan 3, bagi 2, jumlahkan|| bisa diulang" terus kalo mau
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .map((a) => a / 2)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
