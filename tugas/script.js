let moviesArray = [];
let counter = 0;

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=397031c0&s=avengers")
  .then((response) => response.json())
  .then((data) =>
    data.Search.forEach((element) => {
      moviesArray.push(element);

      const first = document.querySelector(".title-movie");
      first.innerHTML = element.Title;
      counter++;
    })
  );

console.log(moviesArray);
