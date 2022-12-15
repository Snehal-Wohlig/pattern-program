let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    console.log("External loop show:::",i);
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    console.log("internl loop show",j);
    string += " ";
    console.log("internal loop string",string);
  }
  // printing star
  for (let k = 0; k < i; k++) {
    console.log("internal loop k",k);
    string += "*";
    console.log("print k loop",k);
  }
  string += "\n";
  console.log("print external loop string",string);
}
console.log("!!!!!!!!!!!",string);