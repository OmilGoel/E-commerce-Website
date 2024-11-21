const express = require("express");
const app = express();
// const userModel = require("./models/user");
// const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
// const upload = require("./config/multerconfig");
const db = require("./config/mongoose-connection")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/owners",ownerRouter);
app.use("/users",userRouter);
app.use("/products",productRouter);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(3000);