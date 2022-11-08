export {};
let data: number = 100;
// data = "b" //will give errors: initialize as number initially
console.log(data);

let data1: number | string | boolean = 10;
console.log(data1);

data1 = true;
console.log(data1);

data1 = "string";
console.log(data1);

// using any keyword
let data2: any = 10;
console.log(data2);

data2 = true;
console.log(data2);

data2 = "string";
console.log(data2);
