const Book = require('../models/book');

exports.addToCart = async (req, res) => {
  const prodId = req.body.productId;
  const fetchedCart = await req.user.getCart();
  const checkProductIsPresent = await fetchedCart.getBooks({ where: { id: prodId } });
  if (checkProductIsPresent.length) {
    const setQuantity = checkProductIsPresent[0].cart_item.quantity + 1;
    await fetchedCart.addBook(checkProductIsPresent[0], { through: { quantity: setQuantity } });
  } else {
    let product = await Book.findByPk(prodId);
    await fetchedCart.addBook(product, {
      through: { quantity: 1 },
    });
  }
};
