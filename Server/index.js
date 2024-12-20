import express from "express";
import dotenv from "dotenv";
import connect from "./Config/ConnectToDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
  connect();
});
