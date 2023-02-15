const { User, Article, Comment } = require("../models");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local");
const passport = require("passport");
const session = require("express-session");

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

async function showlogin(req, res) {
  res.render("loginUser");
}

async function homeUser(req, res) {
  const articles = await Article.findAll({ include: User });
  const user = await req.user;
  res.render("homeUser", { articles, user });
}

const login = passport.authenticate("local", {
  successRedirect: "/home/user",
  failureRedirect: "/login",
});

module.exports = {
  homeUser,
  login,
  showlogin,
  create,
  store,
  update,
  destroy,
  register,
};

// Show the form for creating a new resource.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}
