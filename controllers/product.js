const Book = require('../models/book');

exports.addProduct = async (req, res) => {
  await console.log(req);
  const { title, description, image, rating, ratings_count, price } = req.body;
  console.log(title, description, image, rating, ratings_count, price);
  const book = await Book.create({
    title,
    description,
    image,
    rating,
    ratings_count,
    price,
  });
  console.log('product created');
  console.log(book);
  res.status(201).send(book);
};
