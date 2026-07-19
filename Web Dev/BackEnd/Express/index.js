let express = require("express");
let app = express();

port = 3000;

app.listen(port,()=>{
    console.log("welcome to express js baby!")
})

// app.use((req,res)=>{
//     console.log("request recieved")
//     let code =  "<h1>Fruits</h1><ul><li>Apple</li><li>banana</li></ul>"
//     res.send(code)
// })

//////////////////////////////////////////////////////////////////////////////////////////////

app.get("/",(req,res)=>{
    console.log("request recieved at root")
    let code =  "<h1>Root</h1><ul><li>Apple</li><li>banana</li></ul>"
    res.send(code)
})

// app.get("/math",(req,res)=>{
//     console.log("request recieved at math")
//     let code =  "<h1>Math</h1><ul><li>sum</li><li>sub</li></ul>"
//     res.send(code)
// })
// app.get("/name",(req,res)=>{
//     console.log("request recieved at name")
//     let code =  "<h1>I am name</h1><ul><li>Ram</li><li>lakshman</li></ul>"
//     res.send(code)
// })

// app.post("/",(req,res)=>{
//     res.send("you sent a post request")
// })

/////////////////////////////////////////////////////////////////////////////////////////////


app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params
    let code = `<h1>You sent a request to ${username} username.<h1/>`
    res.send(code)
})

app.get("/search",(req,res)=>{
    let{q} = req.query
    if(q == ""){
        res.send("<h1>nothing searched<h1/>")
    }
    res.send(`<h1>You searched for ${q}<h1/>`)
})
