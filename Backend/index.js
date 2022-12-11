const express = require("express");
const {connection} = require("./src/Config/db");
const {Authenticate} = require("./src/Middleware/Autentication");
const {AuthRouter} = require("./src/Routes/Auth.Route");
const {TodoRouter} = require("./src/Routes/Todo.route");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors=require("cors")
app.use(express.json());
app.use(cors())

app.use("/todo", Authenticate, TodoRouter);
app.use("/auth", AuthRouter);


app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected To DataBase");
    console.log(`server Started On http://localhost:${port}`)
  } catch (err) {
    console.log("Somenthing Wents Wrong Please Try Again !", err);
  }
});
