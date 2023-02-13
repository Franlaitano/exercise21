const { Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          notNull: true,
          notEmpty: true,
        },
        content: {
          type: DataTypes.TEXT,
          notNull: true,
          notEmpty: true,
        },
        image: {
          type: DataTypes.BLOB,
          defaultValue:
            "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg",
        },
      },
      {
        sequelize,
        modelName: "article",
      },
    );

    return Article;
  }
}

module.exports = Article;
