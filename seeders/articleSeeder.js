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
      image: faker.datatype.number({ min: 1, max: 3 }) + ".png",
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
