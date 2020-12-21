const http = require('http');
const fs = require('fs');


http.createServer((request, response) => {
if (request.url === '/write') {
    fs.writeFile('data.txt', 'oh hi mark', (err) => {
        if (err) {
            console.log(err)
            response.end();
            return;
        }
        response.write('File created!');
        response.end();
    });
} else if (request.url === '/delete') {
    fs.unlink('data.txt', (err) => {
        if (err) {
            console.log(err);
            response.write('no such file')
            response.end();
            return;
        }
        response.write('file deleted!');
        response.end();
    });
} else if (request.url === '/dice') {
            const num = Math.floor(Math.random() * 6 + 1);
        if (num === 4) {
            response.write(`${num} is the winning number!`);
            response.end();
            return;
        } else {
            response.write(`You've got a ${num}. you lost:(`);
            response.end();
        }
        response.end();
    } 

    
else {
    response.write('unauthorized');
    response.end();
}


    
}).listen(8080);


console.log('Listening on: http://localhost:8080');


//  ----- initialy tried to build a function and call it as a response, which did NOT work. why? 
//  ----- how do i call a function in node?
// rollDice = () => {
//     let num = Math.floor(Math.random() * 6 +1);
//     if (0 < num < 1) {
//         num = 1;
//         response.write(`Sorry, you've rolled a ${num} and lost`)
//         response.end()
//         return; 
//     }
//     if (1 < num < 2) {
//         num = 2;
//         response.write(`Sorry, you've rolled a ${num} and lost`)
//         response.end()
//         return;
//     }
//     if (2 < num < 3) {
//         num = 3;
//         response.write(`Sorry, you've rolled a ${num} and lost`)
//         response.end()
//         return;
//     }
//     if (3 < num < 4) {
//         num = 4;
//         response.write(`You've rolled a ${num} and that's the winning number!`)
//         response.end()
//         return;
//     }
//     if (4 < num < 5) {
//         num = 5;
//         response.write(`Sorry, you've rolled a ${num} and lost`)
//         response.end()
//         return;
//     }
//     if (5 < num < 6) {
//         num = 6;
//         response.write(`Sorry, you've rolled a ${num} and lost`)
//         response.end()
//         return;
//     }
// };