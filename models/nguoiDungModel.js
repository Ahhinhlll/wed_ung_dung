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
      type: DataTypes.UUID,
      references: {
        model: "VaiTro",
        key: "maVT",
      },
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "NguoiDung",
  }
);
NguoiDung.associations = (models) => {
  NguoiDung.belongsTo(models.VaiTro, { foreignKey: "maVT" });
};
module.exports = NguoiDung;
