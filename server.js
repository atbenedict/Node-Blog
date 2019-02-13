const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const userRouter = require("./routers/user-router");
// const postRouter = require("./server/post/post-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

// server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

server.get("/", async (req, res, next) => {
  res.send(`
    <h2>Lambda Blog API</h2>
    <p>Welcome to the Lambda Blog API</p>
    `);
  next();
});

module.exports = server;
