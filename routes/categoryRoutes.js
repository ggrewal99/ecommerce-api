const express = require("express");
const router = express.Router();
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController");
const { protect, admin } = require("../middleware/authMiddleware");

router.get("/", getAllCategories);
router.post("/", protect, admin, createCategory);
router.put("/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

module.exports = router;