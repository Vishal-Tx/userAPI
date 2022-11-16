import express from "express";

import {
  createUser,
  transferAmount,
  checkBalance,
} from "../Controllers/user.js";

const router = express.Router();

router.post("/create", createUser);
router.post("/transferAmount", transferAmount);
router.post("/checkBalance", checkBalance);
export default router;
