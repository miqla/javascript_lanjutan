// Cara membuat objek pada javascript
// 1. Object literal
//  PROBLEM: tidak efektif untuk objek yang banyak
let mahasiswa1 = {
  nama: "Mila",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

let mahasiswa2 = {
  nama: "Mila",
  energi: 15,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

// 2. Function Declaration
// PROBLEM: Boros memory, setiap manggil nama mahasiswa, dy menjalankan function yg didalamnya
function mahasiswa3(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
  };
  mahasiswa.main = function (jam) {
    this.energi -= jam;
  };
  return mahasiswa; //kalo ga direturn objeknya nnti undefined
}

let mila = mahasiswa3("Mila", 10);
let doi = mahasiswa3("doi", 25);

// 3.Constructor function
// keyword new -> utk manggil
function mahasiswa4(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
  };
  this.main = function (jam) {
    this.energi -= jam;
  };
}

let beliau = new mahasiswa4("beliau", 30); // jangan lupa keyword new

// 4. Object.create
// buat objek lain untuk nyimpen function method, biar ga boros memori
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat main!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`halo ${this.nama}, selamat tidur!`);
  },
};

function mahasiswa5(nama, energi) {
  // let mahasiswa = {};
  let mahasiswa = Object.create(methodMahasiswa); // apapun function yg kita tambahkan di method itu, gaperlu dipanggil satu"
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  // mahasiswa.main = methodMahasiswa.main; cara panggil objek method yg tidak efektif
  return mahasiswa; //kalo ga direturn objeknya nnti undefined
}

let asoy = mahasiswa5("Mila", 10);
let geboy = mahasiswa5("doi", 25);

// 5. Prototype
// Parent default dari sebuah funtion dalam javascript
function Barudak(nama, tenaga) {
  // let this = Object.create(Barudak.prototype);
  this.nama = nama;
  this.tenaga = tenaga;
}

Barudak.prototype.makan = function (porsi) {
  this.tenaga += porsi;
  // console.log(`hoi ${this.nama}, selamat makan`);
  return `Hai ${this.nama}, selamat makan!`;
};

Barudak.prototype.main = function (jam) {
  this.tenaga -= jam;
  return `halo ${this.nama}, selamat bermain!`;
};

Barudak.prototype.tidur = function (jam) {
  this.tenaga += jam * 2;
  return `halo ${this.nama}, selamat tidur!`;
};

let ucul = new Barudak("ucul", 15);

// 6. Versi class
class molen {
  constructor(nama, tenaga) {
    this.nama = nama;
    this.tenaga = tenaga;
  }
  makan(porsi) {
    this.tenaga += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }
  main(jam) {
    this.tenaga -= jam;
    return `halo ${this.nama}, selamat bermain!`;
  }

  tidur(jam) {
    this.tenaga += jam * 2;
    return `halo ${this.nama}, selamat tidur!`;
  }
}
let brody = new molen("brody", 23);
