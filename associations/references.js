var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

var User = require("./models/user");


Post.create({
   title: "How to feed our dogs when they are sick pt.13", 
   content: "Andrea is the best!"
 },  function(err, post) {
      User.findOne({email: "cozy2963@gmail.com"}, function(err, foundUser){
          if(err){
              console.log(err);
          } else {
              foundUser.posts.push(post);
              foundUser.save(function(err, data){
                  if(err){
                      console.log(err);
                  } else {
                      console.log(data);
                  }
              });
          }
      });
});   


/*User.create({
    email: "cozy2963@gmail.com", 
    name: "Andrea"
});
*/

/*User.findOne({email:"cozy2963@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
*/