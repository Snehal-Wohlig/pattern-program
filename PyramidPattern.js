let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  console.log("external loop",i);
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
    console.log("string::",string)
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
    console.log("print *::",string)
  }
  string += "\n";
}
console.log(string);
