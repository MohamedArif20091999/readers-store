const Book = require('../models/book');

exports.addProduct = async (req, res) => {
  const { title, description, image, rating, ratings_count, price } = req.body;
  const book = await Book.create({
    title,
    description,
    image,
    rating,
    ratings_count,
    price,
  });

  res.status(201).send(book);
};

exports.getProducts = async (req, res) => {
  const books = await Book.findAll();
  res.status(200).send(books);
};
