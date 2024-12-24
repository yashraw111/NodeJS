const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
require("dotenv").config();
app.use(express.static("public"));

const products = [
  {
    id: 1,
    img: "/Images/pr-1.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 2,
    img: "/Images/pr-2.jpeg",
    title: "Sofa for Living Room",
    discount: "-15%",
    price: 110.0,
    originalPrice: 130.0,
  },
  {
    id: 3,
    img: "/Images/pr-3.jpeg",
    title: "Modern Chair",
    discount: null,
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 4,
    img: "/Images/pr-4.jpeg",
    title: "Product with Video",
    discount: "-10%",
    price: 39.0,
    originalPrice: null,
  },
  {
    id: 5,
    img: "/Images/pr-5.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 6,
    img: "/Images/pr-6.jpeg",
    title: "Sofa for Living Room",
    discount: null,
    price: 110.0,
    originalPrice: 130.0,
  },
  {
    id: 7,
    img: "/Images/pr-7.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 8,
    img: "/Images/pr-8.jpeg",
    title: "Product with Video",
    discount: null,
    price: 39.0,
    originalPrice: null,
  },
];

const OfficeProducts = [
  {
    id: 1,
    img: "/Images/pr-1.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 2,
    img: "/Images/pr-2.jpeg",
    title: "Sofa for Living Room",
    discount: "-15%",
    price: 110.0,
    originalPrice: 130.0,
  },
  {
    id: 3,
    img: "/Images/pr-3.jpeg",
    title: "Modern Chair",
    discount: null,
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 4,
    img: "/Images/pr-4.jpeg",
    title: "Product with Video",
    discount: "-10%",
    price: 39.0,
    originalPrice: null,
  },
  {
    id: 5,
    img: "/Images/pr-5.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 6,
    img: "/Images/pr-6.jpeg",
    title: "Sofa for Living Room",
    discount: null,
    price: 110.0,
    originalPrice: 130.0,
  },
  {
    id: 7,
    img: "/Images/pr-7.jpeg",
    title: "Modern Chair",
    discount: "-10%",
    price: 19.0,
    originalPrice: 21.0,
  },
  {
    id: 8,
    img: "/Images/pr-8.jpeg",
    title: "Product with Video",
    discount: null,
    price: 39.0,
    originalPrice: null,
  },

]

const products2 = [
  { id: 1, img: "Images/badroom.jpeg", title: "BedRoom" },
  { id: 1, img: "Images/dining.jpeg", title: "living" },
  { id: 1, img: "Images/lounge.jpeg", title: "Dining" },
  { id: 1, img: "Images/ofi-chaire.jpeg", title: "Lounge" },
  { id: 1, img: "Images/living.jpeg", title: "Office Chair" },
];

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Home Page",
    products: products, // Pass products to EJS
    products2: products2,
  });
});

app.get("/About", (req, res) => {
  res.render("pages/About", {
    title: "home Page",
  });
});
app.get("/OfficeFur", (req, res) => {
  res.render("pages/OfficeFurniture", {
    title: "Furniture page",
    OfficeProducts:OfficeProducts,

  });
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
