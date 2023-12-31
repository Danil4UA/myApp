import express from "express";
import {getPosts, getSinglePost, createPost, updatePost, deletePost} from "../controllers/posts.js"

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;