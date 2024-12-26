const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("View engine", "ejs");

app.get("/", (req, res) => {
  // res.render("home", {
  //   title: "homepage",
  // });
  res.end("home page ")
});

var arr = [];
app.post("/user", (req, res) => {
  console.log(req.body);

  const {
    userId,
    HospitalName,
    Address,
    ContactNumber,
    Email,
    TypeOfHospital,
    Website,
  } = req.body;

  const newUser = {
    Id: userId,
    Hospital_Name: HospitalName,
    Address: Address,
    Contact_Num: ContactNumber,
    Email: Email,
    TypeOfHospital: TypeOfHospital,
    Website: Website,
  };
  console.log(newUser);
  arr.push(newUser);

  res.json({
    success: true,
    message: "data inserted",
  });
  res.json("inserted");
});

app.get("/user", (req, res) => {
  console.log("get api ");
  res.json({
    user: arr,
  });
});
app.get("/user/:id", (req, res) => {
  const { index } = req.params;
  const userfind = arr.find((user) => user.id === index);
  res.json(userfind);
});
app.delete("/user/:index", (req, res) => {
  const { index } = req.params;
  arr.splice(index, 1);
  res.json({
    message: "deleted",
  });
});
app.put("/user", (req, res) => {
  const { index } = req.query;
  arr.splice(index, 1, req.body);
  res.json({
    message: "data update",
  });
});
app.listen(PORT, () =>
  console.log(`live server start = http://localhost:${PORT}`)
);
