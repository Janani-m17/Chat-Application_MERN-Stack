import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import isAuthenicated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenicated,sendMessage);
router.route("/:id").get(isAuthenicated,getMessage);

export default router;