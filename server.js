import express from 'express';
// const connect = require('connect');
const app = express();

function plainText(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function htmlText(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};

function jsonApp(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end('{“message”: “Hello from NodeJS Application as json”}');
};

app.use('/json', jsonApp);
app.use('/html', htmlText);
app.use('/', plainText);


app.listen(3000);

console.log('Server Running at http://localhost:3000/'); 