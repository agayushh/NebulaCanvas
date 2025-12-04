import express from "express"
const app = express()

app.get("/sign-in", (req, res)=>{
    res.send("Hello")
})
app.get("/sign-up", (req, res)=>{
    res.send("you are loggedin")
})
app.get("/create-canvas", (req, res)=>{
    res.send("Canvas created successfully")
})


app.listen(8000);