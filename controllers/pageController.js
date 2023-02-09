const { Article } = require("../models/article");

const showHome = async (req, res) => {
  res.render("home");
};

const showProduct = (req, res) => {
  const productToShow = ""; //Buscar el articulo en la BBDD donde el ID recibido como parametro por la url coincida con el id del articulo deseado
  res.render("product");
};

const adminView = (req, res) => {
  res.render("adminView");
};

const createArticle = async (req, res) => {
  const { title, content, image, authorName, authorLastName, authorEmail } =
    req.body;

  const newUser = await Article.create({
    title: title,
    content: content,
    image: image,
    date: NOW(),
    author_name: authorName,
    author_last_name: authorLastName,
    author_email: authorEmail,
  });
};

const createArticleForm = async (req, res) => {
  res.render("create");
};

module.exports = { showHome, showProduct, createArticleForm };
