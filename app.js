//import { request } from 'http';

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//const username ="barhoring";
// console msg

function printMessage(username, bagdges, points) {
    const msg = `${username} has ${bagdges} total badges and ${points} points in javascript`;
    console.log(msg);
};


function getProfile(username) {
    try {
        const https = require('https');
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = "";
            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                const profile = JSON.parse(body);
                printMessage(username, profile.badges.length, profile.points.JavaScript);
            });
        });

        request.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        });
    } catch (e) {
        console.error(e.message);
    }
}


users = process.argv.slice(2);
users.forEach((val, i) => {
    getProfile(`${val}`);
});

// print process.argv
/*
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
  

const users = ["chalkers", "barhoring", "davemcfarland"];

users.forEach(getProfile);
*/




/* longger version
        
users.forEach( username => {
    getProfile(username)
});
getProfile("chalkers");
getProfile("barhoring");

*/

/* DEBUGGING    
printMessage("barhoring", 100, 257);
console.dir(response.statusCode);
*/