//const double = (n) => n * 2;

//console.log(double(10));

//console.log(document);
//console.log(window);

//console.log(global);

//console.log(process.argv);

const [, , n1, n2] = process.argv;
const sum = (a, b) => a + b;
console.log(sum(+n1, +n2));