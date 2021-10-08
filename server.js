//import library 
const express = require("express");
const drinks = require("./models/drinks");
const food = require("./models/food");

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
    res.render("drinks_show.ejs", {drink: drinks[req.params.id]})
})

//food route index  
app.get('/food', (req,res) => {
    res.render('food_index.ejs', {food:food})
})

//food route show
app.get('/food/:id', (req,res) => {
    res.render('food_show.ejs', {food:food[req.params.id]})
})


//listen route for server  
app.listen(7000, () =>{
    console.log("listening")
})