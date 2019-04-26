require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { getProducts } = require("./controllers/productsCtlr");
const { signup, login, getSession } = require("./controllers/authCtlr");

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database is connected");
  })
  .catch(err => {
    console.log(err);
  });

// product endpoints
app.get("/api/products", getProducts);

// auth enpoints
app.get("/api/auth/session", getSession);
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
