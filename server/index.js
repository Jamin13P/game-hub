require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const app = express();
const authCtrl = require("./controllers/authController");
const postCtrl = require("./controllers/postController");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("db connected");
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 * 80 },
  })
);

// authorization endpoints
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/user", authCtrl.getUser);
app.post("/auth/logout", authCtrl.logout);

// post endpoints

