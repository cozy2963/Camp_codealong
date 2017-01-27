var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "Cloud's Rest", 
    image: "https://farm8.staticflickr.com/7381/9705573948_3f342901d1.jpg",
    description: "A pretty boring place 1!"    
    },
    {name: "Riverview Heights", 
    image: "https://farm4.staticflickr.com/3706/10718494266_56543a9eb7.jpg",
    description: "A pretty boring place 2!"    
    },
    {name: "Sterling State Park", 
    image: "https://farm8.staticflickr.com/7430/13950258797_66fb9e795a.jpg",
    description: "A pretty boring place 3!"    
    }
    ];

function seedDB(){
    // Remove All Campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
           console.log("removed campgrounds!");
            data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
              if(err){
                  console.log(err);
              } else {
                  console.log("Added campground!");
                  Comment.create(
                      {
                          text: "This place is really great!",
                          author: "Cheech" 
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                            }
                        });
                     }
            });
        });
    
    });
   
}

module.exports = seedDB;