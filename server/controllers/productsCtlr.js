const getProducts = async (req, res) => {
  const db = req.app.get("db");
  console.log("hit");
  let products = await db.get_products();

  res.status(200).json(products);
};

module.exports = {
  getProducts
};
