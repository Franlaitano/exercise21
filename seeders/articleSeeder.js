const { faker } = require("@faker-js/faker");
const { Article, User, Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const users = [];
  const comments = [];

  for (let i = 0; i < 100; i++) {
    const randomId = () => {
      let result = Math.floor(Math.random() * 99) + 1;
      return result;
    };
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      image:
        "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
      userId: randomId(),
    });
    users.push({
      firstname: await faker.name.firstName(),
      lastname: await faker.name.lastName(),
      email: faker.internet.email(),
    });
    comments.push({
      content: faker.lorem.paragraph(),
      userId: randomId(),
      articleId: randomId(),
    });
  }

  await User.bulkCreate(users);
  await Article.bulkCreate(articles);
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles.");
};
