const { Article, User, Comment } = require("../models");
const { use } = require("../routes/userRoutes");

async function showArticlesPanel(req, res) {
  const articles = await Article.findAll({ include: [User, Comment], order: [["id", "DESC"]] });
  res.render("adminArticle", { articles });
}

async function showUsersPanel(req, res) {
  const users = await User.findAll({ order: [["firstname"]] });
  res.render("adminUser", { users });
}

async function showCommentsPanel(req, res) {
  const comments = await Comment.findAll({ include: [User, Article], order: [["id", "DESC"]] });
  //console.log(comments[0].article.title);
  res.render("adminComment", { comments });
}

async function showArticleEditForm(req, res) {
  const article = await Article.findByPk(req.params.id);

  res.render("editArticle", { article });
}

async function showUserEditForm(req, res) {
  const user = await User.findByPk(req.params.id);

  res.render("editUser", { user });
}

async function showCommentEditForm(req, res) {
  const comment = await Comment.findByPk(req.params.id);

  res.render("editComment", { comment });
}

module.exports = {
  showArticlesPanel,
  showUsersPanel,
  showCommentsPanel,
  showArticleEditForm,
  showUserEditForm,
  showCommentEditForm,
};
