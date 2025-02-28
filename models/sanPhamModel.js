const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SanPham = sequelize.define(
  "SanPham",
  {
    maSP: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    maDM: {
      type: DataTypes.UUID,
      references: {
        model: "DanhMuc",
        key: "maDM",
      },
      allowNull: false,
    },
    tenSP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anhSP: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    moTa: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    soLuong: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    giaTien: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    tableName: "SanPham",
  }
);

SanPham.associate = (models) => {
  SanPham.belongsTo(models.DanhMuc, {
    foreignKey: "maDM",
    as: "DanhMuc",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = SanPham;
