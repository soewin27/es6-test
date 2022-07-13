let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);
}
console.log(x);


for (let i = 5; i  >=0; i--) {
  (function (j) {
      setTimeout(function () {
          console.log(j);
      }, 1000);
  })(i);
}