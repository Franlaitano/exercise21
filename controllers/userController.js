const { User, Article, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const email = req.body.email;

  await User.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
  });

  res.redirect("/");
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const userToEdit = await User.findByPk(req.params.id);

  userToEdit.firstname = req.body.firstname;
  userToEdit.lastname = req.body.lastname;
  userToEdit.email = req.body.email;

  await userToEdit.save();

  res.redirect("/panel/usuarios");
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const [userToDestroyArticles] = await Article.findAll({
    where: {
      userId: req.params.id,
    },
  });

  // COMODIN
  // userToDestroyArticles.userId = 1;
  // console.log(userToDestroyArticles.userId);
  // await userToDestroyArticles.save();
  const [userToDestroyComments] = await Comment.findAll({
    where: {
      userId: req.params.id,
    },
  });
  // userToDestroyComments.userId = 1;
  // await userToDestroyComments.save();
  // const userToDestroy = await User.destroy({
  //   where: {
  //     id: req.params.id,
  //   },
  // });

  // AGREGADO POR JOACO
  const user = await User.findByPk(req.params.id);
  if (!user) {
    console.error("User not found");
    return;
  }
  // Toma a a las dos promesas dentro del array, y las junta en una unica, y espera a que resuelva para luego poder eliminar al usuario abajo.
  await Promise.all([
    Article.update({ userId: 1 }, { where: { userId: req.params.id } }),
    Comment.update({ userId: 1 }, { where: { userId: req.params.id } }),
  ]);

  await user.destroy();

  res.redirect("/panel/usuarios");
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
