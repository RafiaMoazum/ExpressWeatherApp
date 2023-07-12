const express=require("express");
const app=express();
const path=require("path")
const hbs=require("hbs")
const port= process.env.PORT || 8000

//to render static index.js
//public static path

const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname, "../templates/partials")


app.set('view engine', 'hbs')
app.set('views',template_path);
hbs.registerPartials(partialsPath);   //registering Partials


app.use(express.static(static_path));


//routing
app.get("", (req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render('about');
});

app.get("/weather", (req,res) => {
    res.render("weather");
});

app.get("*", (req,res) => {
    res.render("error404",{
        errorMsg:"Oops Page Not Found!"
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}💕`);
});