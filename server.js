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

//drinks route index 
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
});

//drinks route show
app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})



//listen route for server  
app.listen(7000, () =>{
    console.log("listening")
})