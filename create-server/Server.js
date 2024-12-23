const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8000


const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      // console.log(__dirname);
      // console.log(__filename);   
      var filePath = path.join(__dirname, "Home.html");
      fs.readFile(filePath, (err, content) => {
        res.end(content);
      });
      break;
    case '/About':
        var filePath = path.join(__dirname,'About.html')
        fs.readFile(filePath,(err,content)=>{res.end(content)})
        break;
    default:
      res.end("<h4>404 page not Found</h4>");
  }
});

server.listen(PORT, () => {
  console.log(`Listen port Number http://localhost:${PORT}`);
});
