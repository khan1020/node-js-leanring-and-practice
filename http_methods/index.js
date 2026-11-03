const express = require("express")
const fs = require("fs")


const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 5000;
file = "";

app.get("/", (req, res)=>{
    // res.write(`Hello world, this is port ${port}\n`)
    // res.send(file.body)
    file = fs.readFile("MOCK_DATA.csv","utf8",(err, data)=>{
        res.write(data);
        
    })
    
})

app.post("/post",(req, res)=>{
    res.send("how are you?")
    // console.log("how are you?")
    const body = req.body;

    console.log(body)
})

app.put("/put",(req, res)=>{
    const body = req.body;

    console.log(body)
    // res.send("how are you brother")
})

app.listen(port,()=> console.log(`port is listening at: ${port}`))

