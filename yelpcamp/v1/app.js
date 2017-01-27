var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3162/2642197987_2c71947286.jpg"},
        {name: "Sterling State Park", image: "https://farm9.staticflickr.com/8035/7930442194_40e37f5ea0.jpg"},
        {name: "Huron Campground", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3162/2642197987_2c71947286.jpg"},
        {name: "Sterling State Park", image: "https://farm9.staticflickr.com/8035/7930442194_40e37f5ea0.jpg"},
        {name: "Huron Campground", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
        {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3162/2642197987_2c71947286.jpg"},
        {name: "Sterling State Park", image: "https://farm9.staticflickr.com/8035/7930442194_40e37f5ea0.jpg"},
        {name: "Huron Campground", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"}
        
        ];

app.get("/", function(req, res) {
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name; 
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground),
    
   res.redirect("/campgrounds"); 
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started"); 
});