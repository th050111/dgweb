const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");

dotenv.config(); //env파일
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const apiRouter = require("./routes/api");
const homeRouter = require("./routes/home.js");
const scheduleRouter = require("./routes/schedule");
const { isNotLoggedIn, isLoggedIn } = require("./routes/middlewares");

const { database } = require("./mybase");

const app = express();

app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use((req, res, next) => {
  next();
});
app.use("/user", userRouter);
app.use("/home", homeRouter);
app.use("/api", apiRouter);
app.use("/schedule", scheduleRouter);
app.use("/admin", adminRouter);
app.use("/", (req, res) => {
  return res.redirect("/home");
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "포트에서 대기중");
});
