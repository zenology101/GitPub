//import library 
const express = require("express")

//creating the application object 
const app = express();

/////////////////////////////////////////////
//Routes 
/////////////////////////////////////////////

//render welcome to the Gitpub app!
app.get("/", (req,res) =>{
    res.send("Welcome to the Gitpub App!")
})






//listen route for server  
app.listen(7000, () =>{
    console.log("listening")
})