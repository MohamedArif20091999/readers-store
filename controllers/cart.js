const Book = require('../models/book');

exports.getCart = async (req, res) => {
  const cart = await req.user.getCart();
  const cartItems = await cart.getBooks();
  res.status(200).send(cartItems);
};

exports.addToCart = async (req, res) => {
  const prodId = req.body.productId;
  const fetchedCart = await req.user.getCart();
  const checkProductIsPresent = await fetchedCart.getBooks({ where: { id: prodId } });
  if (checkProductIsPresent.length) {
    const setQuantity = checkProductIsPresent[0].cart_item.quantity + 1;
    await fetchedCart.addBook(checkProductIsPresent[0], { through: { quantity: setQuantity } });
    res.send(await fetchedCart.getBooks({ where: { id: prodId } }));
  } else {
    let product = await Book.findByPk(prodId);
    await fetchedCart.addBook(product, {
      through: { quantity: 1 },
    });
    res.send(await fetchedCart.getBooks({ where: { id: prodId } }));
  }
};

exports.deleteItem = async (req, res) => {
  const fetchedCart = await req.user.getCart();
  const checkProductIsPresent = await fetchedCart.getBooks({ where: { id: req.body.productId } });
  await checkProductIsPresent[0].cart_item.destroy();
  res.send(req.body.productId);
};
