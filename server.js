//import library 
const express = require("express");
const drinks = require("./models/drinks");

//creating the application object 
const app = express();

/////////////////////////////////////////////
//Routes 
/////////////////////////////////////////////

//render welcome to the Gitpub app!
app.get("/", (req,res) =>{
    res.send("Welcome to the Gitpub App!")
})

//drinks route 
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
});





//listen route for server  
app.listen(7000, () =>{
    console.log("listening")
})