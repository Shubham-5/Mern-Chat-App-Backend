const express = require("express");
const {
  userRegister,
  userLogin,
  allUsers,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(userRegister);
router.post("/login", userLogin);

module.exports = router;
