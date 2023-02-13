const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.TEXT,
          notNull: true,
          notEmpty: true,
        },
      },
      {
        sequelize,
        modelName: "comment",
      },
    );
    return Comment;
  }
}

module.exports = Comment;
