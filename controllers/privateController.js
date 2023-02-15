// Require the models that we are going to use
const { Article, User, Comment } = require("../models");

// We use (nameOfTheModel).findAll to store in the const the data of that sequelize bring to us from the DB
async function showArticlesPanel(req, res) {
  const user = await req.user;
  const articles = await Article.findAll({
    include: User,
    where: { userId: user.id },
  });
  res.render("adminArticle", { articles, user });
}

async function showUsersPanel(req, res) {
  const users = await User.findAll({ order: [["firstname"]] });
  res.render("adminUser", { users });
}

async function showCommentsPanel(req, res) {
  const comments = await Comment.findAll({
    include: [User, Article],
    order: [["id", "DESC"]],
  });
  res.render("adminComment", { comments });
}

// In the "findByPk" we only want to bring ONE entity from the DB, that who match his ID with the parametres of the function
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
