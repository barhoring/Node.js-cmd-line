const profile = require('./profile.js');
//const config = require('/path/to/file');
users = process.argv.slice(2);
users.forEach(profile.get);
//users.forEach((val, i) => {
    //profile.get(`${val}`);
//});