const express = require("express");
const app = express();
const port = 3000;
app.set('view engine','ejs')
require('dotenv').config()
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('pages/home',{
        title:'home Page'
    })
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
