let n = 5;
let string = "";
for (let i = 1; i < n; i++) {
  console.log("print i value",i);
  // printing star
  for (let k = 0; k < n-i; k++) {
    console.log("print k value",k);
    string += "*";
    console.log("print * : ", string);
  }
  // printing New Line
  string += "\n";
  console.log("new line",string);
}
console.log(string);
