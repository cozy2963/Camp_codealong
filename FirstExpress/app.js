var express = require("express");

var app = express();

app.get("/", function(req, res){
   res.send("Hi There!"); 
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    console.log("SOMEONE MADE A GET REQUEST");
    res.send("WOOF!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    res.send("Welcome To Comments!");   
});

app.get("*", function(req, res) {
    res.send("You found a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
});

