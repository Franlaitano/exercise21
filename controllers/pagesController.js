const { Article, User, Comment } = require("../models");
const formidable = require("formidable");

async function showHome(req, res) {
  const user = await req.user;
  const articles = await Article.findAll({
    order: [["id", "DESC"]],
    include: User,
  });

  res.render("home", { articles, user });
}

async function showOneArticle(req, res) {
  const users = await User.findAll({ order: [["firstname"]] });
  const article = await Article.findByPk(req.params.id, { include: User });
  const comments = await Comment.findAll({
    order: [["id", "DESC"]],
    where: { articleId: req.params.id },
    include: User,
  });

  res.render("product", { article, users, comments });
}

async function showUserForm(req, res) {
  res.render("createUser");
}

async function showArticlesApi(req, res) {
  const articles = await Article.findAll({
    include: [User, Comment],
    order: [["id", "DESC"]],
  });

  res.json(articles);
}

module.exports = {
  showHome,
  showArticlesApi,
  showOneArticle,
  showUserForm,
};
