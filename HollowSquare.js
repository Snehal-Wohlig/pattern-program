let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
    console.log("%%%%%%%",i);
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
        console.log("!!!!!",i);
      string += "*";
      console.log("string",string);
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
        console.log("string J string:::",string);
      }
      else {
        string += "@";
        console.log("String @::",string)
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);