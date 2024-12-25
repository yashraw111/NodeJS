const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/cssFile", express.static("public  "));
app.get("/", (req, res) => res.send("run Server"));

mongoose
  .connect(
    // "mongodb+srv://yash123:Yashp123@yash.eumlk.mongodb.net/rnw?retryWrites=true&w=majority"
    "mongodb+srv://yashraw111:AsPgE7UDWWr4f0Rf@test-pro-db.zqic9.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db"
  )
  .then(() => {
    console.log("db connect 👍");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
