var express = require('express');
const ejs = require('ejs');
var router = express.Router();
var mongoose = require("mongoose");
var list = require("./questions");
var sample = require("./sample");
var User = require("./users")
var passport = require("passport")
const fs = require('fs-extra');
const PDFDocument = require('pdfkit');

const path = require('path');
const { log } = require('console');
const { userInfo } = require('os');

var lists,temp;
router.get("/loadReport",async function(req,res){

  // console.log(score);

  console.log(unserInfo);

  // Define an empty object to store section scores
  var sectionScores = {};

  // Loop through the score object and assign its values to sectionScores
  for (let section in score) {
      sectionScores[section] = score[section];
  }

    console.log(sectionScores);

  var data = {
    unserInfo:unserInfo,
    lists: temp,
    totalScore: totalScore,
    expected: expected,
    actual: actual,
    total_que: total_que,
    sectionScores: sectionScores,
    selected: selected,
    unselected: unselected,
    name: "shrikant",
    hobbies: ["cricket", "swimming"]
};
  
 
    // console.log(lists);
    res.render("report.ejs",data);
})


/* GET home page. */
router.get('/insert',  async function(req, res, next) {
  
  var data= await list.insertMany(sample.data);


  console.log("Entered data ");
});

router.get("/", async function(req,res){

 

  res.render("home.ejs");
})
router.get("/questions",isLoggedin, async function(req,res){

  var lists =await list.find({});
  // console.log(lists);

  res.render("index.ejs",{lists});
})

var expected;
  var totalScore;  
  var total_que;
  var selected;
  var unselected; 
  var sectionScores;
  var actual ; 

  var score;

router.post("/result", async function(req, res) {
  req.flash("success", "Test Submitted Successfully");
  var data = req.body;

   expected = 300;
   totalScore = 0; 
   total_que = 10;
   selected = 0;
   unselected = 0;// Total score
   sectionScores = {
      "Data Backup": 0,
      "Inventory Measures": 0,
      "Cyber Security": 0,
      "Data Protection": 0,
      "Salary Pay": 0
  }; // Object to store section-wise scores

  for (const questionId in data) {
      const selectedAnswer = data[questionId];
      if(!selectedAnswer){
        unselected++;
      }
      else{
        selected++;
      }
     
      const question = await list.findById(questionId);
      var section = question.section;

      // Loop through question options to find the selected option and add its weightage to the section score
      for (option of question.options) {
          if (selectedAnswer === option.optNum) {
              sectionScores[section] += option.weightage; // Add to section score
              totalScore += option.weightage; // Add to total score
          }
      }
  }
  req.flash("success", "Test Submitted Successfully");

   score = sectionScores;

  unselected = total_que - selected;

   actual = expected - totalScore;

  res.render("showresult.ejs", { totalScore, expected, actual,total_que, sectionScores ,selected,unselected});
});




router.get("/domains",isLoggedin, async function(req,res){


  res.render("domains.ejs");
})
router.get("/home", async function(req,res){


  res.render("home.ejs");
})

router.get("/signup", async function(req,res){


  res.render("signup.ejs");
})
var unserInfo ;
router.post("/signup",(req,res,next)=>{

   unserInfo = req.body;
  // console.log(unserInfo);
  
    var {username,email,password,organization_name} = req.body;
  
    
    const newuser =new User({email,username,organization_name});
   const registeredUser = User.register(newuser,password);
  //  console.log(registeredUser);
  req.flash("success","new user registered")
   res.redirect("/home");
  
  
  });

  // console.log(unserInfo);


   router.get("/login",(req,res,next)=>{

    res.render("login.ejs")
  
  })
  

  router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login", // Redirect to the login page if authentication fails
    failureFlash: true // Enable flash messages for authentication failures
  }), (req, res) => {
    // Authentication succeeded
    console.log("User logged in:", req.user); // Log the authenticated user
    req.flash("success", "Login successful!"); // Set a success flash message
    res.redirect("/home"); // Redirect the user to the home page
  });
  
  
//  function saveRedirectUrl(req,res,next){
//   if(req.session.redirectUrl){
//     res.locals.redirectUrl = req.session.redirectUrl
//   }

//   next();
// }
  
router.get("/logout", function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success","Logged out successfully");
    res.redirect('/login');
  });
});


function isLoggedin(req,res,next){
  console.log(req.originalUrl);
  if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error","You should logged in first to start assessment")
    res.redirect("/login")
  }
    next();
 }


 
var data,templatePath,outputPath;
async function abc(){
  lists =await list.find({});
   temp=lists
  //  console.log(temp);
  //  console.log(lists);
    // data = {lists,totalScore, expected, actual,total_que, sectionScores ,selected,unselected, name: "shrikant", hobbies: ["cricket", "swimming"] };
     templatePath = './views/report.ejs';
 outputPath = 'output.pdf';

}
abc();
// Usage





module.exports = router;