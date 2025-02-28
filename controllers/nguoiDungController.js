const NguoiDung = require("../models/nguoiDungModel");
const { Op } = require("sequelize");

exports.getAll = async (req, res) => {
  try {
    const nguoiDungs = await NguoiDung.findAll();
    res.status(200).json(nguoiDungs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const nguoiDung = await NguoiDung.findByPk(req.params.id);
    if (nguoiDung) {
      res.status(200).json(nguoiDung);
    } else {
      res.status(404).json({ message: "Người dùng không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const { tenND, diaChi, gioiTinh, email, taiKhoan, matKhau, anhThe } = req.body;
    const nguoiDung = await NguoiDung.create({
      tenND,
      diaChi,
      gioiTinh,
      email,
      taiKhoan,
      matKhau,
      anhThe,
      maVT: "U11", 
    });
    res.status(201).json(nguoiDung);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { maND, tenND, diaChi, gioiTinh, email, taiKhoan, matKhau, anhThe, maVT } = req.body;
    const nguoiDung = await NguoiDung.findByPk(maND);
    if (nguoiDung !== null) {
      await nguoiDung.update({
        tenND,
        diaChi,
        gioiTinh,
        email,
        taiKhoan,
        matKhau,
        anhThe,
        maVT,
      });
      res.status(200).json(nguoiDung);
    } else {
      res.status(404).json({ message: "Người dùng không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const nguoiDung = await NguoiDung.findByPk(req.params.id);
    if (nguoiDung) {
      await nguoiDung.destroy();
      res.status(200).json(nguoiDung);
    } else {
      res.status(404).json({ message: "Người dùng không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const nguoiDungs = await NguoiDung.findAll({
      where: {
        [Op.or]: [
          { tenND: { [Op.like]: `%${req.query.q}%` } },
          { diaChi: { [Op.like]: `%${req.query.q}%` } },
          { email: { [Op.like]: `%${req.query.q}%` } },
          { taiKhoan: { [Op.like]: `%${req.query.q}%` } },
        ],
      },
    });
    res.status(200).json(nguoiDungs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
