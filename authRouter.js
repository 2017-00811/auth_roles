const Router = require("express");
const router = new Router();
const controller = require("./authController.js");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware.js");
const roleMiddleware = require("./middleware/roleMiddleware.js");

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
router.get(`/users`, roleMiddleware(["USER", "ADMIN"]), controller.getUsers);

module.exports = router;
