import express from "express";
import { getUsers, createUser, deleteUser, getSingleUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/:id", getSingleUser);

export default router;