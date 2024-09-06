import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    console.log(process.env.NAME);
    console.log("Hello")
    res.send("Hello Typescript Server");
})

app.listen(3000,() => {
    console.log("Server Listening on port 3000")
})