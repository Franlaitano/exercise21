const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = [];

  for (let i = 0; i < 100; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image:
        "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
    });
    users.push({
      firstname: faker.name.findName(),
      lastname: faker.name.findName(),
      email: faker.name.findName(),
    });
  }

  await Article.bulkCreate(articles);
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Articles.");
};
