// Funtion expression
const barudak = function (nama) {
  return `Halo ${nama}, selamat`;
};
console.log(barudak("eta"));

const barudak2 = (nama) => {
  return `Halo ${nama}, selamat`;
};
console.log(barudak2("terangkanlah"));

// const barudak3 = () => `hai.`;
// console.log(barudak3());
const barudak3 = (nama) => `hai ${nama}.`;
console.log(barudak3("saipul"));

const barudak4 = (nama, waktu) => `hai ${nama}, selamat ${waktu}`;
console.log(barudak4("mila", "pagi"));

let barudak5 = ["abeli", "bela", "caca aaa"];
let jmlHuruf = barudak5.map(function (nama) {
  return nama.length;
});
console.log(jmlHuruf);

let jumlahHuruf = barudak5.map((nama) => nama.length);
console.log(jumlahHuruf);

// return sebagai objek, tanda {} harus didalam ()
let countHuruf = barudak5.map((nama) => ({
  nama: nama,
  jmlHuruf: barudak5.length,
}));
// console.log(countHuruf);
console.table(countHuruf);
