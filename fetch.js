// $(".input-value").on("keyup", function () {
//   playAjax();
// });

// $(".tombol-cari").on("click", function () {
//   return playAjax();
// });

// function playAjax() {
//   $.ajax({
//     // Jquery carikan sy elemen dengan kelas input value, lalu ambil semua value nya
//     url: "http://www.omdbapi.com/?apikey=38c2cf77&s=" + $(".input-value").val(),
//     success: (result) => {
//       // biar gadda search nya langsung masuk ke array
//       const movies = result.Search;
//       console.log(movies);
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCard(m);
//         // JQuery carikan elemen dengan class..., lalu html nya sisipkan cards
//         $(".movie-container").html(cards);

//         // Ketika tombol diklik
//         $(".tombol-detail").on("click", function () {
//           $.ajax({
//             url:
//               "http://www.omdbapi.com/?apikey=38c2cf77&i=" +
//               $(this).data("imdbid"),
//             success: (m) => {
//               const movieDetail = showMovieDetail(m);
//               $(".modal-body").html(movieDetail);
//               console.log(m);
//             },
//             error: (e) => console.log(e.responseText),
//           });
//         });
//       });
//     },
//     error: (e) => console.log(e.responseText),
//   });
// }

// fetch
const tombolCari = document.querySelector(".tombol-cari");
tombolCari.addEventListener("click", function () {
  const inputan = document.querySelector(".input-value");
  fetch("http://www.omdbapi.com/?apikey=38c2cf77&s=" + inputan.value)
    .then((response) => response.json()) // sampai sini bentuknya promise, response bole diganti namanya bebas
    // .then((response) => console.log(response)); // disini bentuknya json
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCard(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;
    });
});

function showCard(m) {
  return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${m.Poster}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">${m.Title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
      <a href="#" class="btn btn-primary tombol-detail" data-bs-toggle="modal"
      data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show details</a>
    </div>
  </div>
</div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${m.Poster}" class="img-fluid" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
        <li class="list-group-item">
          <strong>Director : </strong> ${m.Director}
        </li>
        <li class="list-group-item">
          <strong>Actors: </strong> ${m.Actors}
        </li>
        <li class="list-group-item">
          <strong>Writer : </strong>${m.Writer}
        </li>
        <li class="list-group-item">
          <strong>Plot: </strong>${m.Plot}
        </li>
      </ul>
    </div>
  </div>
</div>`;
}
