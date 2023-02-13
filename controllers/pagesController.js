/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article, User, Comment } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({
    order: [["id", "DESC"]],
    include: User,
  });

  const popularArticles = await Comment.findAll();

  /* let commentsInPopularArticle = [];
  let counter = 0;
  for (const popularArticle of popularArticles) {
    for (let i = 0; i < popularArticles.length; i++) {
      if (popularArticle.articleId === popularArticles[i].articleId) {
        counter++;
      }

      for (j = 0; j > popularArticles.length; j++) {
        if (popularArticle.articleId !== popularArticles[j].articleId) {
          commentsInPopularArticle.push(popularArticle.articleId);
        }
      }
      if ((commentsInPopularArticle.length = 5)) {
        return console.log("Se hayaron los articulos mas populares");
      }
    }
  }*/
  res.render("home", { articles });
}

async function showArticlesApi(req, res) {
  const articles = await Article.findAll({ include: [User, Comment], order: [["id", "DESC"]] });
  res.json(articles);
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function showArticleForm(req, res) {
  const users = await User.findAll({ order: [["firstname"]] });
  res.render("createArticle", { users });
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
// Otros handlers...
// ...

async function showUserForm(req, res) {
  res.render("createUser");
}

module.exports = {
  showHome,
  showContact,
  showArticlesApi,
  showAboutUs,
  showArticleForm,
  showOneArticle,
  showUserForm,
};
