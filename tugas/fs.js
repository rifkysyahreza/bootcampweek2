const fs = require("node:fs").promises;
const path = require("node:path");

// let tes = fs.readFile("./index.html", "utf-8");
// tes.then((coba) => {
//   console.log(coba);
// });

(async () => {
  try {
    let test = await fs.readFile("./index.html", "utf-8");
    console.log(a);
  } catch (error) {
    console.log("error coy");
  }
})();

// function p1() {
//   return new Promise((resolve, reject) => {
//     let a = 0;

//     if (a > 0) {
//       resolve("lebih dari 0");
//     } else {
//       reject("kurang dari 0");
//     }
//   });
// }

// p1()
//   .then((sukses) => {
//     console.log(`masuk ke then = ${sukses}`);
//   })
//   //   .then(null, (gagal) => {
//   //     console.log(`masuk ke catch = ${gagal}`);
//   //   });
//   .catch((gagal) => {
//     console.log(`masuk ke catch = ${gagal}`);
//   });

// console.log(fs);
