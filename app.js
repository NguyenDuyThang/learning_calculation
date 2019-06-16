var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.get("/tinh", (req, res) => {
  res.render("index");
});

app.post("/tinh", (req, res) => {
  if (req.body.num1.length === 0 || isNaN(req.body.num1)) {
    res.send({ result: -1 });
    res.render("index", {
      number1: req.body.num1,
      number2: req.body.num2,
      result: "",
      check1: "checked",
      error: "Số thứ nhất không hợp lệ"
    });
  } else if (req.body.num2.length === 0 || isNaN(req.body.num2)) {
    res.send({ result: -1 });
    res.render("index", {
      number1: req.body.num1,
      number2: req.body.num2,
      result: "",
      check1: "checked",
      error: "Số thứ hai không hợp lệ"
    });
  }
  var resu = 0;
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  if (req.body.pheptinh === "*") {
    resu = num1 * num2;
    res.send({ result: resu });
    res.render("index", {
      number1: num1,
      number2: num2,
      result: resu,
      check3: "checked"
    });
  } else if (req.body.pheptinh === "/") {
    if (num2 === 0) {
      res.send({ result: resu });
      res.render("index", {
        number1: num1,
        number2: num2,
        result: "",
        check4: "checked",
        error: "Không được chia cho 0"
      });
    } else {
      resu = num1 / num2;
      res.send({ result: resu });
      res.render("index", {
        number1: num1,
        number2: num2,
        result: resu,
        check4: "checked"
      });
    }
  } else if (req.body.pheptinh == "mu") {
    resu = Math.pow(num1, num2);
    res.send({ result: resu });
    res.render("index", {
      number1: num1,
      number2: num2,
      result: resu,
      check5: "checked"
    });
  } else if (req.body.pheptinh == "-") {
    resu = num1 - num2;
    res.send({ result: resu });
    res.render("index", {
      number1: num1,
      number2: num2,
      result: resu,
      check2: "checked"
    });
  } 
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
