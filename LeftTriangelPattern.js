let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    // console.log("external loop print i value",i);
  for (let j = 0; j < i; j++) {
    // console.log("Internal loop print j value",j);
    string += "*";
    console.log("Internal loop print * value",string)
  }
  string += "\n";
  console.log("print new line",string)
}
console.log(string);