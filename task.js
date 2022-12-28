console.log("Hello world")
const prompt = require('prompt')
prompt.start();
let world = "Hellow World"
prompt.get(['username'], function (err, result) {
    //
    // Log the results.
    //
    // console.log('Command-line input received:');
    console.log(world + " " +result.username);
    // console.log('  email: ' + result.email);
  });

  