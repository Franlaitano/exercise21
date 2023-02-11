const { Article, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const title = req.body.title;
  const content = req.body.content;
  const user = req.body.user;

  await Article.create({
    title: title,
    content: content,
    userId: user,
  });

  res.redirect("/");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const title = req.body.title;
  const content = req.body.content;

  const articleToEdit = await Article.findByPk(req.params.id);

  articleToEdit.title = title;
  articleToEdit.content = content;

  await articleToEdit.save();

  res.redirect("/panel/articulos");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  // HAY QUE DESTRUIR PRIMERO EL COMENTARIO***
  const relatedComments = await Comment.destroy({
    where: { articleId: req.params.id },
  });
  const articleToDestroy = await Article.destroy({
    where: { id: req.params.id },
  });
  res.redirect("/panel/articulos");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
