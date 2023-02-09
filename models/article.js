const { Sequelize, Model, Datatypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          primearyKey: true,
          autoIncrement: true,
          type: Datatypes.BIGINT,
        },
        title: {
          allowNull: false,
          type: Datatypes.STRING(100),
        },
        content: {
          allowNull: false,
          type: Datatypes.TEXT,
        },
        image: {
          allowNull: false,
          type: Datatypes.STRING(1500),
        },
        date: {
          allowNull: false,
          type: Datatypes.DATE,
        },
        author_name: {
          allowNull: false,
          type: Datatypes.STRING(100),
        },
        author_last_name: {
          allowNull: false,
          type: Datatypes.STRING(100),
        },
        author_email: {
          allowNull: false,
          type: Datatypes.STRING(100),
        },
        comments: {
          allowNull: false,
          type: Datatypes.STRING(1000),
        },
      },
      { sequelize, modelName: "article" }
    );
    return Article;
  }
}

module.exports = { Article };
