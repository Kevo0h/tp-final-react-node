var createError = require("http-errors");
const handlebars = require("express-handlebars");
//llamamos al dotenv
require("dotenv").config();
//

//variables de session
var session = require("express-session");
//
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var login = require("./routes/login");
var portalAdmin = require("./routes/portal/admin");
var portalUser = require("./routes/portal/user");
var api = require("./routes/api");
var app = express();

//*CREANDO HANDLEBARS EQUALS

const hbs = handlebars.create({
  extname: "hbs",
  helpers: {
    equals: (a, b) => a === b,
  },
});
////

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//creamos la sesssion
app.use(
  session({
    secret: "G3n3r4c1on.lvl4-tUrb0",
    cookie: { maxAge: null },
    resave: false,
    saveUninitialized: true,
  })
);
//

const cors = require("cors");

// Configura CORS
app.use(
  cors({
    origin: "http://localhost:3001", // Reemplaza con el origen de tu frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

//Generamos la session
secure1 = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario, req.session.nombre);
    if (req.session.nombre === "admin") {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};
secure2 = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario, req.session.nombre);

    if (req.session.nombre === "user") {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

app.use("/", indexRouter);
app.use("/api", api);
app.use("/portal/admin", secure1, portalAdmin);
app.use("/login", login);
app.use("/users", usersRouter);
app.use("/portal/user", secure2, portalUser);
//----------------

//cerrar session

//

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
