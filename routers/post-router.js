const express = require("express");

const Post = require("../data/helpers/postDb");

const router = express.Router();
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.get();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the posts"
    });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.getById(req.params.id);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the post"
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error adding the post"
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const count = await Post.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The post has been deleted" });
    } else {
      res.status(404).json({ message: "The post could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error removing the post"
    });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const post = await Post.update(req.params.id, req.body);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "The post could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating the post"
    });
  }
});

module.exports = router;
