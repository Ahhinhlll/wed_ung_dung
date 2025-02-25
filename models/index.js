const sequelize = require("../config/database");
const DanhMuc = require("./danhMucModel");
const SanPham = require("./sanPhamModel");
const VaiTro = require("./vaiTroModel");
const NguoiDung = require("./nguoiDungModel");

const models = {
  DanhMuc,
  SanPham,
  VaiTro,
  NguoiDung,
};

// Thiết lập các mối quan hệ
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models,
};
