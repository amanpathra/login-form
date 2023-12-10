const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');

const port = 3000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/CWAusers');
}

// Mongoose Schema
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    username: String,
    password: String
});

const User = mongoose.model('user', userSchema);

// const loginSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });

// const loginDetail = mongoose.model('loginDetail', loginSchema);

//EXPRESS STUFF
app.use("/static", express.static('static'));
app.use(express.urlencoded());

//PUG STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.status(200).render("home.pug")
});

app.get("/login", (req, res) => {
    res.status(200).render("login.pug")
});

// app.post("/login", (req, res) => {
//     var loginData = new loginDetail(req.body)
//     console.log(User.find());
//     if (loginData.email == User.find().email && loginData.password == User.find().password){
//         res.send("Welcome to your account");
//     }
//     else{
//         res.send("Details not matched. Please try again.");
//     }
//     res.status(200).render("login.pug")
// });

app.get("/signup", (req, res) => {
    res.status(200).render("signup.pug")
});

app.post("/signup", (req, res) => {
    var myData = new User(req.body);
    console.log(myData);
    myData.save().then(()=>{
        res.send("Your account has been created.")
    }).catch(()=>{
        res.status(400).send("Somwthing went wrong.")
    })
    // res.status(200).render("signup.pug");
});

app.listen(port, ()=>{
    console.log(`The Application has started sucessfully on port ${port}`)
});