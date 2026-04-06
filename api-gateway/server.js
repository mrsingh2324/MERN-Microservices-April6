require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// AUTH routes
app.post("/auth/register", async (req, res) => { //localhost:3000/auth/register
  const r = await axios.post(process.env.AUTH_SERVICE_URL + "/register", req.body); //localhost:4000/register
  res.json(r.data);
});

app.post("/auth/login", async (req, res) => { //localhost:3000/auth/login
  const r = await axios.post(process.env.AUTH_SERVICE_URL + "/login", req.body); //localhost:4000/login
  res.json(r.data);
});

// BOOK routes
app.post("/books", async (req, res) => { //localhost:3000/books
  const r = await axios.post(process.env.BOOKS_SERVICE_URL + "/books", req.body); //localhost:5000/books
  res.json(r.data);
});

app.get("/books", async (req, res) => { //localhost:3000/books
  const r = await axios.get(process.env.BOOKS_SERVICE_URL + "/books"); //localhost:5000/books
  res.json(r.data);
});

app.listen(process.env.PORT, () => {
  console.log("API Gateway running on " + process.env.PORT); //localhost:3000
});
