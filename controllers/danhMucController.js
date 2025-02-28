const db = require("../models");
const DanhMuc = require("../models/danhMucModel");
const SanPham = require("../models/sanPhamModel");
const { Op } = require("sequelize");

exports.getAll = async (req, res) => {
  try {
    const danhMucs = await db.DanhMuc.findAll({
      include: [
        {
          model: SanPham,
          as: "SanPhams",
        },
      ],
    });

    return res.status(200).json(danhMucs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const danhMuc = await db.DanhMuc.findByPk(req.params.id, {
      include: [
        {
          model: SanPham,
          as: "SanPhams",
        },
      ],
    });
    if (danhMuc) {
      res.status(200).json(danhMuc);
    } else {
      res.status(404).json({ message: "Danh mục không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.insert = async (req, res) => {
  try {
    const { tenDM } = req.body;
    const danhMuc = await DanhMuc.create({ tenDM });
    res.status(201).json(danhMuc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { maDM, tenDM } = req.body;
    const danhMuc = await DanhMuc.findByPk(maDM);
    if (danhMuc !== null) {
      await danhMuc.update({ tenDM });
      res.status(200).json(danhMuc);
    } else {
      res.status(404).json({ message: "Danh mục không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const danhMuc = await DanhMuc.findByPk(req.params.id);
    if (danhMuc) {
      await danhMuc.destroy();
      res.status(200).json(danhMuc);
    } else {
      res.status(404).json({ message: "Danh mục không tồn tại" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.search = async (req, res) => {
  try {
    const danhMucs = await db.DanhMuc.findAll({
      where: {
        tenDM: {
          [Op.like]: `%${req.query.q}%`,
        },
      },
      include: [
        {
          model: SanPham,
          as: "SanPhams",
        },
      ],
    });
    res.status(200).json(danhMucs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
