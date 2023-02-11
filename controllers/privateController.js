const { Article, User, Comment } = require("../models");

async function showArticlesPanel(req, res) {
  res.render("adminMain");
}

async function showUsersPanel(req, res) {
  res.render("");
}

async function showCommentsPanel(req, res) {
  res.render("");
}

module.exports = {
  showArticlesPanel,
  showUsersPanel,
  showCommentsPanel,
};
