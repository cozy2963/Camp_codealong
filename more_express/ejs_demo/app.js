var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/fallinlovewith/:thing", function(req, res) {
   var thing = req.params.thing;
   res.render("love", {thingVar: thing});
    
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Green Tea", author: "Amy"},
        {title: "Red Tea", author: "Andrea"}
        ];
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running"); 
});