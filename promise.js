const hasil = fetch("https://dummyjson.com/quotes/")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log(hasil);
