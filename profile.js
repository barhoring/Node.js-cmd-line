// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const http = require('http');
const https = require('https');

function printError(e) {
    console.error(e.message);
}

function printMessage(username, bagdges, points) {
    const msg = `${username} has ${bagdges} total badges and ${points} points in javascript`;
    console.log(msg);
};


function get(username) {
    try {
        
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            if (response.statusCode === 200) {
                let body = "";
                response.on('data', data => {
                    body += data.toString();
                });

                response.on('end', () => {
                    try {
                        const profile = JSON.parse(body);
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (e) {
                        printError(e);
                    }


                });
            } else {
                const msg = `There was an error getting the profile of for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(msg);
                printError(statusCodeError);
            }

        });

        request.on('error', printError);
    } catch (e) {
        printError(e);
    }
}


module.exports.get = get;
