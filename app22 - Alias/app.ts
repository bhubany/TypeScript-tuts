function combine(
  a: number | String,
  b: number | String,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine(10, 20, "as-number"));
console.log(combine("bhuban", " yadav", "as-string"));

// Here we can see that on function argument we are defining multiple data types for a single argument which is lengthy
// instead of this we can use aliass

let c: string | number | boolean = 20;
let d: string | number | boolean = 20;
let e: string | number | boolean = 20;

// is lenthy process, so defining variable types as shown below

type varType = string | number | boolean;

let f: varType = 20;
let g: varType = "string";
let h: varType = true;

// similarly for function

type argType = string | number;

function combine2(a: argType, b: argType) {
  return { a, b };
}

console.log(combine2(3, 4));
