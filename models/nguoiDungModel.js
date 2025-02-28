const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NguoiDung = sequelize.define(
  "NguoiDung",
  {
    maND: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    tenND: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diaChi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gioiTinh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    taiKhoan: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    matKhau: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anhThe: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    maVT: {
      type: DataTypes.STRING,
      defaultValue: "U11",
      references: {
        model: "VaiTro",
        key: "maVT",
      },
      allowNull: false,
    },
  },
  {
    tableName: "NguoiDung",
  }
);

NguoiDung.associate = (models) => {
  NguoiDung.belongsTo(models.VaiTro, {
    foreignKey: "maVT",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = NguoiDung;
