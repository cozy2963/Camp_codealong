var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title,  content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);


// USER - email,  name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


/*var newUser = new User({
   email: "w8coz@dm.com",
   name: "Andrea Cozart-Lundin"
});

newUser.posts.push({
    title: "Why My Wife Rocks",
    content: "My wife gives the best massages!"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});*/

/*var newPost = new Post({
    title: "It's So Hot",
    content: "Today is a high of 84 degrees! TOO HOT!"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});*/

User.findOne({name: "Andrea Cozart-Lundin"}, function(err, user){
   if(err){
       console.log(err);
   } else {
       user.posts.push({
           title: "Three Things I Really Love",
           content: "My wife, my car, and my 2 dogs... I guess that's 4!"
       });
       user.save(function(err, user){
          if(err){
              console.log(err);
          } else {
              console.log(user);
          }
       });
   }
});