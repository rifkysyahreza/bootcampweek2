function Siswa(fullname, age) {
  (this.fullname = fullname), (this.age = age);

  Siswa.prototype.sayHello = () => {
    console.log("Hai");
  };
}

// class Siswa {
//   constructor(fullname, age) {
//     (this.fullname = fullname), (this.age = age);
//  }

//   sayHello() {
//     console.log("Hai");
//     return this.fullname;
//   }
// }

const siswa1 = new Siswa("Rifky", 23);

console.log(siswa1.sayHello());
