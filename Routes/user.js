import express, { application } from "express";

import {
  allUsers,
  createUser,
  transferAmount,
  checkBalance,
} from "../Controllers/user.js";

const router = express.Router();

router.get("/", allUsers);
router.post("/create", createUser);
router.post("/transferAmount", transferAmount);
router.post("/checkBalance", checkBalance);
export default router;
