const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}))   // to add a post request
app.use(express.json());                      // to add a post request

app.listen(port,() =>{
    console.log(`Listening at -${port}`)
})

app.get("/", (req,res) => {
    let {username, password} = req.query
    res.send(`Habibi!!! Welcome to get ${username} I will not show your password i.e ${password}`)
})
app.post("/", (req,res) => {
    console.log(req.body)
    let {username, password} = req.body
    res.send(`Habibi!!! Welcome to post ${username} I will not show your password i.e ${password}`)
})



