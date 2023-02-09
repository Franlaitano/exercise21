const showHome = (req, res) => {
  res.render("home");
};

const showProduct = (req, res) => {
  const productToShow = ""; //Buscar el articulo en la BBDD donde el ID recibido como parametro por la url coincida con el id del articulo deseado
  res.render("product");
};

const adminView = (req, res) => {
  res.render("adminView");
};

module.exports = { showHome, showProduct };
