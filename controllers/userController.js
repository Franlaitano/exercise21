const { User, Article, Comment } = require("../models");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
/* In the userController we define the handlers functions for the routes that modifies the users table in the DB. */

async function create(req, res) {
  res.render("createUser");
}

async function register(req, res) {
  if (req.isAuthenticated()) {
    res.send(`Te damos la bienvenida, ${req.user.firstname}!!`);
  } else {
    res.redirect("/login");
  }
}

// Show the form for creating a new resource.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function showlogin(req, res) {
  res.render("loginUser");
}

async function authenticate(req, res) {
  return (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  };
}

module.exports = {
  showlogin,
  create,
  store,
  update,
  destroy,
  register,
  authenticate,
};
