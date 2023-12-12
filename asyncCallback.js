// Asynchronous , AJAX, butuh web server
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

// tes async atau ga
console.log("mulai");
getDataMahasiswa(
  "mahasiswa.json",
  (result) => {
    const mhs = JSON.parse(result);
    // console.log(mhs);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");
