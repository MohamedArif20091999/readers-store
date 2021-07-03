const Book = require('../models/book');

exports.getCart = async (req, res) => {
  console.log('Fetch and give cartItems');
  const cart = await req.user.getCart();
  const cartItems = await cart.getBooks();
  console.log(cartItems);
  res.status(200).send(cartItems);
};

exports.addToCart = async (req, res) => {
  const prodId = req.body.productId;
  const fetchedCart = await req.user.getCart();
  const checkProductIsPresent = await fetchedCart.getBooks({ where: { id: prodId } });
  if (checkProductIsPresent.length) {
    const setQuantity = checkProductIsPresent[0].cart_item.quantity + 1;
    await fetchedCart.addBook(checkProductIsPresent[0], { through: { quantity: setQuantity } });
    console.log('OLD ITEM:', await fetchedCart.getBooks({ where: { id: prodId } }));
    res.send(await fetchedCart.getBooks({ where: { id: prodId } }));
  } else {
    let product = await Book.findByPk(prodId);
    await fetchedCart.addBook(product, {
      through: { quantity: 1 },
    });
    res.send(await fetchedCart.getBooks({ where: { id: prodId } }));
  }
};
