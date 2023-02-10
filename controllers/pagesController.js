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

const { Article, User } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({ order: [["id", "DESC"]], include: User });
  res.render("home", { articles });
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
  console.log(req.params.id);
  const [article] = await Article.findAll({
    where: { id: req.params.id },
    include: User,
  });
  console.log(article);
  // const comments = await Comment.findAll({ order: [["id", "DESC"]] });
  res.render("product", { article });
}
// Otros handlers...
// ...

async function showUserForm(req, res) {
  res.render("createUser");
}

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showArticleForm,
  showOneArticle,
  showUserForm,
};
