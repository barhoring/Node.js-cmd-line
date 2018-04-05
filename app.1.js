// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//Require https module

const https = require('https');


https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    //process.stdout.write(d);
    console.log(d);
  });

}).on('error', (e) => {
  console.error(e);
});
/*
https.get('https://teamtreehouse.com/barhoring.json', (res) => {
    console.log('by barhoring');
    
    res.on('data', (d) => {
        console.log(d);
    });
})
.on('error', (e) => {
    console.log(e);
});*/