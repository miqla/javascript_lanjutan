// Menjalankan AJAX dengan menggunakan JQUERY
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=38c2cf77&s=naruto",
//   success: (hasil) => console.log(hasil),
// });

// Menjalankan AJAX dengan vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=38c2cf77&s=avengers");
// xhr.send();

// Menjalankan AJAX dengan fetch -> mengembalikan promise
// const movies = fetch("http://www.omdbapi.com/?apikey=38c2cf77&s=doraemon");
// console.log(movies);

// Jika mau melihat isi fetch
// fetch("http://www.omdbapi.com/?apikey=38c2cf77&s=doraemon")
//   .then((respon) => respon.json())
//   .then((hasil) => console.log(hasil));

// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled/ rejected/ pending) -> keadaan
// callback (resolve/ reject/ finally)
// aksi (then / catch)

// contoh 1, janji langsung ditepati -> membuat objek khusus menggunakan new
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji sudah ditepati");
//   } else {
//     reject("ingkar janji..");
//   }
// });
// // console.log(janji1);
// janji1
//   .then((respon) => console.log("OK: " + respon))
//   .catch((respon) => console.log("Not OK : " + respon));

// contoh 2
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji telah ditepati setelah 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Janji tidak ditepati setelah 2 detik");
    }, 2000);
  }
});

console.log("mulai");
// kalau mau lihat pendingnya dijalankan, pake cara dibawah
// console.log(janji2.then((hasil) => console.log(hasil)));
janji2
  .finally(() => console.log("Janji sudah dijalankan"))
  // finally akan dijalankan right before hasilnya keluar, biasanya buat nyelipin animasi loading
  .then((respon) => console.log("OK: " + respon))
  .catch((respon) => console.log("Not OK : " + respon));
console.log("selesai");
