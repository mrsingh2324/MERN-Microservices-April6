require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Books DB connected"))
.catch(err=>console.log(err));

const Book = mongoose.model("Book", {
  title: String,
  author: String,
});

app.post("/book", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.listen(5000, () => console.log("Books service running on 5000"));


