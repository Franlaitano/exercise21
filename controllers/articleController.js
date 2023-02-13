const { Article, Comment } = require("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/img/articlesImg",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const title = fields.title;
    const content = fields.content;
    const user = fields.user;
    const image = files.image.newFilename;

    await Article.create({
      title: title,
      content: content,
      image: image,
      userId: user,
    });

    res.redirect("/");
  });
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
  await Comment.destroy({
    where: { articleId: req.params.id },
  });
  await Article.destroy({
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
