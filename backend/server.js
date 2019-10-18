const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

const usersDatabase = [
  { email: "admin@email.it", password: "admin" },
  { email: "kajal@gmail.com", password: "kaju" },
  { email: "user1@email.it", password: "user1" },
  { email: "user2@email.it", password: "user2" },
  { email: "user3@email.it", password: "user3" },
  { email: "user4@email.it", password: "user4" }
];
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const queryLogin = user => {
  return new Promise((resolve, reject) => {
    if (
      usersDatabase.find(
        u => u.email === user.email && u.password === user.password
      )
    ) {
      let response = {
        success: true,
        email: user.email,
        token: "thisisatoken",
        errorMessage: null
      };
      resolve(response);
    } else {
      let response = {
        success: false,
        email: user.email,
        token: null,
        errorMessage: "Wrong username/password"
      };
      reject(response);
    }
  });
};

app.post("/api/login", (req, res) => {
  let timer = Math.random() * 2 + 1;
  queryLogin(req.body)
    .then(outcome => {
      setTimeout(() => res.json(outcome), timer);
    })
    .catch(error => {
      setTimeout(() => res.json(error), timer);
    });
});

const queryLogout = user => {
  return new Promise((resolve, reject) => {
    if (
      usersDatabase.find(u => u.email === user.email) &&
      user.token === "thisisatoken"
    ) {
      let response = {
        success: true,
        errorMessage: null
      };
      resolve(response);
    } else {
      let response = {
        success: false,
        errorMessage: "Wrong username/token"
      };
      reject(response);
    }
  });
};

app.post("/api/logout", (req, res) => {
  let timer = Math.random() * 2 + 1;
  queryLogout(req.body)
    .then(outcome => {
      setTimeout(() => res.json(outcome), timer);
    })
    .catch(error => {
      setTimeout(() => res.json(error), timer);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
