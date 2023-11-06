// Destructuring Variable / Assignment
// Destructuring Array, menstruktur kembali array
const perkenalan = ["halo", "nama", "saya", "mila"];
const [aa, bb, cc, dd] = perkenalan;
console.log(bb);

// skipping items, gosah tulis nama variabel tapi ttep tulis koma
const [salam, , , sebutan] = perkenalan;
console.log(sebutan);

// swap item
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

// return value pada function
function coba() {
  return [3, 4];
}
const [c, d] = coba(); //const bisa dihapus
console.log(d);

// rest parameter
const [e, ...values] = [5, 6, 7, 8];
console.log(e);
console.log(values);

// destructuring object
const barudak = {
  nama: "joni",
  umur: 23,
};
// kalau objek, nama variabel harus sama dengan nama variabel yg ada pada objek
const { nama, umur } = barudak;
console.log(nama);

// Assignment tanpa deklarasi objek, awal akhir pake kurung
({ email, alamat } = { email: "mial@gmail.com", alamat: "salemba" });
console.log(email);

// Assign ke variabel baru, pake tanda : titik dua
const barudak2 = {
  nama2: "joni",
  umur2: 23,
};
const { nama2: n, umur2: u } = barudak2;
console.log(n);

// Memberikan default value
const barudak3 = {
  nama3: "joni",
  umur3: 23,
  // mail: "ulala@cont.com",
};
// kalo variabelnya gada, maka akan pakai nilai default
const { nama3, umur3, mail = "mila@default.com" } = barudak3;
console.log(mail);

// Memberi nilai default + Assign variabel baru
const barudak4 = {
  nama4: "joni",
  umur4: 23,
  mail2: "ulala@cont.com",
};
const { nama4: n4, umur4: u4, mail2: m2 = "mila@default.com" } = barudak4;
// console.log(mail2); error
console.log(m2);

// Rest parameter
const barudak5 = {
  nama5: "joni",
  umur5: 23,
  mail3: "ulala@cont.com",
};
const { nama5: n5, ...rest } = barudak5;
console.log(n5);
console.log(rest);

// Mengambil field pada objek, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "yuhuu",
  email: "yuhu@hj.com",
};

function getIDmhs(mhs2) {
  return mhs2.id;
}
// below contoh mengambil item tertentu dari objek
function destruksi({ nama }) {
  return nama;
}

console.log(getIDmhs(mhs));
console.log(destruksi(mhs));

// --------------//-------------------------//------------------------------------//-----
// 1. Destructuring Function return value
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}
console.log(penjumlahanPerkalian(4, 5));
console.log(penjumlahanPerkalian(3, 4)[0]);
const perkalian = penjumlahanPerkalian(3, 4)[1];
console.log(perkalian);

const [tambah2, kali2] = penjumlahanPerkalian(2, 3);
console.log(tambah2);
console.log(kali2);

// biar urutan array tidak berpengaruh, gunakan objek restructuring pada return value nya
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}
const { kali, tambah, bagi, kurang } = kalkulasi(2, 3);
console.log(kurang); //hasil = -1, bukan 2/3

// 2. Destructuring function arguments
const mhs3 = {
  nama: "aqua",
  umur: 26,
  nilai: {
    tugas: 80,
    uts: 78,
    uas: 75,
  },
};
// destructuring bersarang
function cetakMhs3({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama}, umur saya ${umur} tahun. Nilai UAS saya ${uas}`;
}
console.log(cetakMhs3(mhs3));
