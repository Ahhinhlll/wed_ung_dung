const sequelize = require("../config/database");
const DanhMuc = require("./danhMucModel");
const SanPham = require("./sanPhamModel");
const VaiTro = require("./vaiTroModel");
const NguoiDung = require("./nguoiDungModel");

const db = {
  DanhMuc,
  SanPham,
  VaiTro,
  NguoiDung,
};

// Thiết lập các mối quan hệ
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
