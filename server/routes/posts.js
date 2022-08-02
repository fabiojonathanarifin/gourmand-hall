// import express from "express";
// import { getPosts } from "../controllers/posts.js";

const express = require("express");
const router = express.Router();
const { getPost } = require("../controllers/posts");

router.get("/", getPost);
// router.post("/", createPost);

module.exports = router;
