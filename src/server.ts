import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.send("Hello Typescript Server");
})

app.listen(3000,() => {
    console.log("Server Listening on port 3000")
})