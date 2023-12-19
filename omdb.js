$.ajax({
  url: "http://www.omdbapi.com/?apikey=38c2cf77&s=furious",
  success: (result) => {
    // biar gadda search nya langsung masuk ke array
    const movies = result.Search;
    console.log(movies);
    let cards = "";
    movies.forEach((m) => {
      cards += `<div class="col-md-4 my-3">
                  <div class="card">
                    <img src="${m.Poster}" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#movieDetailModal">Show details</a>
                    </div>
                  </div>
                </div>`;
      // JQuery carikan elemen dengan class..., lalu html nya sisipkan cards
      $(".movie-container").html(cards);
    });
  },
  error: (e) => console.log(e.responseText),
});
