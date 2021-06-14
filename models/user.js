"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.ktp, {
        as: "ktp",
        foreignKey: {
          name: "idUser",
        },
      });
      user.hasMany(models.product, {
        as: "product",
        foreignKey: {
          name: "idUser",
        },
      });
      user.belongsToMany(models.product, {
        as: "products",
        through: {
          model: "transaction",
          as: "transaction",
        },
        foreignKey: {
          name: "idUser",
        },
      });
      user.hasMany(models.transaction, {
        as: "seller",
        foreignKey: {
          name: "idPenjual",
        },
      });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
