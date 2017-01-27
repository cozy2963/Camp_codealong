var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong")
//     } else {
//         console.log("We Saved A Cat to DB:")
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Pur",
   age: 12,
   temperament: "OK"
}, function(err, cat){
    if(err){
        console.log("ERROR");
    } else {
        console.log("Worked");
    }
});

// Cat.find({}, function(err, cats){
//     if(err){
//         console.log("ERROR!");
//     } else {
//         console.log(cats);
//         console.log("ALL THE CATS");
//     }
// });