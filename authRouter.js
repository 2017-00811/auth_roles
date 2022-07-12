const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");

router.post(
  `/registration`,
  [
    check("username", "username can not be an empty string").notEmpty(),
    check("password", "password should be greater than 4 symbols").isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.registration
);
router.post(`/login`, controller.login);
router.get(`/users`, authMiddleware, controller.getUsers);

module.exports = router;
