let express = require("express")
let app = express()
const path = require("path")

port = 3000;

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
app.use(express.static(path.join(__dirname,"public")))

app.listen(port,() => {
    console.log(`Listening at - ${port}`)
})

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/roll",(req,res)=>{
    let diceRoll = Math.ceil(Math.random()*6)
    res.render("rolldice.ejs",{diceRoll})
})

////////////////////////////////////////////////////////////////////////////////

app.get("/ig/:username",(req,res)=>{
    let followers = ["Ram","lakshaman","Radha","Krishna"]
    let {username} = req.params
    res.render("ig.ejs",{username,followers})
})

///////////////////////////////////////////////////////////////////////////////

app.get("/insta/:username",(req,res)=>{
    let {username} = req.params
    let postData = require("./data.json")
    let data = postData[username]
    if(data){
        res.render("instagram.ejs",{data})
    }else{
        res.render("err.ejs")
    }
    
})


