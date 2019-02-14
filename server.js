const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routers/user-router");
const postRouter = require("./routers/post-router");

const server = express();
server.use(cors());

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

//Static file declaration
// server.use(express.static(path.join(__dirname, "client/build")));

//production mode
if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "client/build")));
  //
  server.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
//build mode
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

server.get("/", async (req, res, next) => {
  res.send(`
    <h2>Lambda Blog API</h2>
    <p>Welcome to the Lambda Blog API</p>
    `);
  next();
});

module.exports = server;
