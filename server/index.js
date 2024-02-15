// server/index.js
import express from "express";
const PORT = process.env.PORT || 5000;

const app = express();
import { createPool } from "mysql";
import cors from 'cors';


const db = createPool({
  host:"localhost",
  user:"root",
  password:"root",
  database:"movie"
});

app.use(cors());


// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});



app.get("/", (req, res) => {
  db.query("SELECT * FROM movie.imdb",(err,result,)=>{
    res.send(result);
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

