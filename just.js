// =============================================================================
// CALLBACK
// -----------------------------------------------------------------------------
// function p1() {
//   console.log("p1 done");
// }

// function p2(callback) {
//   setTimeout(function () {
//     callback("p2 done");
//   }, 3000);
// }

// function p3(callback) {
//   setTimeout(function () {
//     callback("p3 done");
//   }, 1000);
// }

// function p4() {
//   console.log("p4 done");
// }

// p1();
// p2((cbp2) => {
//   console.log(cbp2);
//   p3((cpb3) => {
//     console.log(cpb3);
//     p4();
//   });
// });

// =============================================================================
// PROMISE
// -----------------------------------------------------------------------------
const p1 = (err) =>
  new Promise((resolve, reject) => {
    if (err) {
      reject("error");
    } else {
      setTimeout(() => {
        resolve("p1 done");
      }, 3000);
    }
  });

const p2 = (err) =>
  new Promise((resolve, reject) => {
    if (err) {
      reject("error 2");
    } else {
      setTimeout(() => {
        resolve("p2 done");
      }, 1000);
    }
  });

p1()
  .then((sukses) => {
    console.log(sukses);
    p2().then((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log("ada error coy");
  });

// secara logika javascript dimana yang paling cepat itu di eksekusi duluan
p1();
p2();

// =============================================================================
// ASYNC AWAIT
// -----------------------------------------------------------------------------

// async function main() {
//   const p1Result = await p1();
//   console.log(p1Result);
//   const p2Result = await p2();
//   console.log(p2Result);
// }
