import express from "express";
import { getOtherUsers, logout, register } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import isAuthenicated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route('/register').post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenicated,getOtherUsers);

export default router;