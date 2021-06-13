"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ktp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ktp.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  ktp.init(
    {
      nik: DataTypes.STRING,
      alamat: DataTypes.STRING,
      jenisKelamin: DataTypes.STRING,
      tglLahir: DataTypes.DATE,
      golDarah: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ktp",
    }
  );
  return ktp;
};
