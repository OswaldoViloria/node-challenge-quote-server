const { response } = require("express");
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();
const _ = require('lodash');

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
// level 1
app.get("/quotes", function (request, response){
  response.send(quotes);
});

app.get("/quotes/random", function (request, response){
  response.send(_.random(quotes));
});

// level 2
app.get("/quotes/search", function (request, response){
  let termReq = request.query.term
  let termReq2 = request.query.author
  let arr = []
  const quoteJson = obj.quote.toLocaleLowerCase().includes(termReq.toLocaleLowerCase())
  const authorJson = obj.author.toLocaleLowerCase().includes(termReq2.toLocaleLowerCase())
  
  for (const obj of quotes){
    if(quoteJson || authorJson){
      arr.push(obj);
  };
  response.send(arr);
}});
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
