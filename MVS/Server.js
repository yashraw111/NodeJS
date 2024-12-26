const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const StudentRouter = require('./routes/StudentRouter')
require("dotenv").config();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/cssFile", express.static("public  "));
// app.get("/", (req, res) => res.send("run Server"));
app.use(express.urlencoded({extended:true}))

app.use('/',StudentRouter)


mongoose
  .connect("mongodb+srv://yp8749881:yash123@yash.9nuv0.mongodb.net/rnw")
  .then(() => {
    console.log("db connected..");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);

// yash@pncl123
// AsPgE7UDWWr4f0Rf
