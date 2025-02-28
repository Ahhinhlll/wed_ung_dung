const express = require("express");
const {
  getAll,
  getById,
  insert,
  update,
  remove,
  search,
} = require("../controllers/danhMucController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { checkRole } = require("../middlewares/authorizeRole");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DanhMuc
 */

/**
 * @swagger
 * /api/danhmuc/getall:
 *   get:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách danh mục
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DanhMuc'
 */
router.get("/danhmuc/getall", verifyToken, checkRole(["A00"]), getAll);

/**
 * @swagger
 * /api/danhmuc/getbyid/{id}:
 *   get:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của danh mục
 *     responses:
 *       200:
 *         description: Chi tiết danh mục
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.get("/danhmuc/getbyid/:id", verifyToken, getById);

/**
 * @swagger
 * /api/danhmuc/insert:
 *   post:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tenDM:
 *                 type: string
 *                 description: Tên danh mục
 *     responses:
 *       201:
 *         description: Tạo danh mục thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 */
router.post("/danhmuc/insert", verifyToken, checkRole(["A00"]), insert);

/**
 * @swagger
 * /api/danhmuc/update:
 *   put:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               maDM:
 *                 type: string
 *                 description: ID danh mục
 *               tenDM:
 *                 type: string
 *                 description: Tên danh mục mới
 *     responses:
 *       200:
 *         description: Cập nhật danh mục thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.put("/danhmuc/update", verifyToken, checkRole(["A00"]), update);

/**
 * @swagger
 * /api/danhmuc/delete/{id}:
 *   delete:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của danh mục cần xóa
 *     responses:
 *       200:
 *         description: Xóa danh mục thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.delete("/danhmuc/delete/:id", verifyToken, checkRole(["A00"]), remove);

/**
 * @swagger
 * /api/danhmuc/search:
 *   get:
 *     tags: [DanhMuc]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Từ khóa tìm kiếm danh mục
 *     responses:
 *       200:
 *         description: Danh sách danh mục phù hợp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DanhMuc'
 */
router.get("/danhmuc/search", verifyToken, search);

module.exports = router;
