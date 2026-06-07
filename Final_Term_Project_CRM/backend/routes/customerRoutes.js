const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  getAll,
  create,
  update,
  remove,
  getOne,
} = require("../controllers/customerController");

router.get("/", auth, getAll);
router.post("/", auth, create);
router.get("/:id", auth, getOne);
router.put("/:id", auth, update);
router.delete("/:id", auth, remove);

module.exports = router;
