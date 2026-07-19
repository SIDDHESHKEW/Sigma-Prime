const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require('method-override');
const port = 8080;
const { v4: uuidv4 } = require('uuid'); // to generate unique id's


app.set("views",path.join(__dirname,"./views"))
app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(methodOverride('_method'));    // to override rest methods

app.listen(port,()=>{
    console.log(`Listening at - ${port}`)
})

let posts = [
    {
        id : uuidv4(),
        name:"Siddhesh",
        comment : "Lets build ourselves hard!"
    },
    {
        id : uuidv4(),
        name : "prapti",
        comment : "Someone save me from mummy!"
    },
    {
        id : uuidv4(),
        name : "Narendra Modi",
        comment : "I dont know coding but I can still build systems."
    }
]

app.get("/posts/:id/edit",(req,res) =>{
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("edit.ejs")
})

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs")
})

app.delete("/posts/:id",(req,res) =>{
    let {id} = req.params;
    posts = posts.filter((p)=>{id != p.id})
    res.redirect("/posts")
})

app.patch("/posts/:id",(req,res) =>{
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    post.comment = req.body.comment
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res) =>{
    let { id } = req.params
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs",{ post })
})

app.post("/posts",(req,res) =>{
    let id = uuidv4();
    let {name , comment} = req.body
    posts.push({id,name,comment})
    res.redirect("/posts")
})

app.get("/posts",(req,res) =>{
    res.render("index.ejs",{ posts })
})

app.get("/",(req,res)=>{
    res.send("All working well")
})
