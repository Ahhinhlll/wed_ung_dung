const express = require("express");
const {
  getAll,
  getById,
  insert,
  update,
  remove,
  search,
} = require("../controllers/danhMucController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DanhMuc
 *   description: API cho Danh Mục
 */

/**
 * @swagger
 * /api/danhmuc/getall:
 *   get:
 *     tags: [DanhMuc]
 *     responses:
 *       200:
 *         description: A list of DanhMuc items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DanhMuc'
 */
router.get("/danhmuc/getall", getAll);

/**
 * @swagger
 * /api/danhmuc/getbyid/{id}:
 *   get:
 *     tags: [DanhMuc]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the DanhMuc item
 *     responses:
 *       200:
 *         description: A DanhMuc item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: DanhMuc item not found
 */
router.get("/danhmuc/getbyid/:id", getById);

/**
 * @swagger
 * /api/danhmuc/insert:
 *   post:
 *     tags: [DanhMuc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tenDM:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created DanhMuc item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 */
router.post("/danhmuc/insert", insert);

/**
 * @swagger
 * /api/danhmuc/update:
 *   put:
 *     tags: [DanhMuc]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               maDM:
 *                 type: string
 *               tenDM:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated DanhMuc item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: DanhMuc item not found
 */
router.put("/danhmuc/update", update);

/**
 * @swagger
 * /api/danhmuc/delete/{id}:
 *   delete:
 *     tags: [DanhMuc]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the DanhMuc item
 *     responses:
 *       200:
 *         description: The deleted DanhMuc item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DanhMuc'
 *       404:
 *         description: DanhMuc item not found
 */
router.delete("/danhmuc/delete/:id", remove);

/**
 * @swagger
 * /api/danhmuc/search:
 *   get:
 *     tags: [DanhMuc]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: The search term
 *     responses:
 *       200:
 *         description: A list of DanhMuc items matching the search term
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DanhMuc'
 */
router.get("/danhmuc/search", search);

module.exports = router;
