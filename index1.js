function reqListener() {
  console.log("hai");
  // let data = JSON.parse(this.responseText);

  // data.quotes.forEach((element) => {
  //   console.log(element);
  // });
}

const req = new XMLHttpRequest();

req.addEventListener("load", function () {
  let data = JSON.parse(this.responseText);

  data.quotes.forEach((element) => {
    console.log(element);
  });
});
req.open("GET", "https://dummyjson.com/quotes/");
req.send();
reqListener();

// pakai callback

// function reqListener() {}

// const req = new XMLHttpRequest();
// req.addEventListener("load", function () {
//   let data = JSON.parse(this.responseText);

//   data.quotes.forEach((element) => {
//     console.log(element);
//   });

//   console.log(this);
// });
// req.open("GET", "https://dummyjson.com/quotes/");
// req.send();
