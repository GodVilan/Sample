import dotenv from "dotenv";
dotenv.config();
import Login from "./frontend/src/Components/login/Login";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {StudLoginRoutes} from "./backend/routes/StdLoginRoute";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get("/",(req,resp)=>{
  resp.send(Login)
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, function(){
  console.log("Server running on http://localhost:"+port);
  console.log(`Server running on http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

app.use('/StdLogin', StudLoginRoutes);  