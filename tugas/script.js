let moviesArray = [];
let cards = "";
$(".movie-container").html(cards);

$(".search-button").on("click", function () {
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=397031c0&s=avengers")
  .then((response) => response.json())
  .then((data) => {
    data.Search.forEach((element) => {
      cards += `<div class="col-md-4 my-3">
                    <div class="card">
                        <img class="card-img-top" src="${element.Poster}">
                        <div class="card-body">
                          <h5 class="card-title">${element.Title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">${element.Year}</h6>
                          <a href="#" class="btn btn-primary">Show Details</a>
                        </div>
                      </div>
                </div>`;
    });
    // console.log(data);
    $(".movie-container").html(cards);
  }))};
