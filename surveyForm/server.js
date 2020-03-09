var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'survey_form',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 80000 }
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.post("/result", function(req, res){
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("result");
})

app.get("/result", function(req, res){
    res.render("results", {results:req.session.results});
})

app.listen(1987, function(){
    console.log("Listening on port: 1987");
})