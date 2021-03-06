const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const result = await db.get_user(username);
    const existingUser = result[0];

    if (existingUser) {
      return res.status(409).send("Username taken");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registeredUser = await db.register_user(username, hash);

    const user = registeredUser[0];

    req.session.user = {
      username: user.username,
      id: user.id,
    };
    res.status(201).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.get_user(username);

    if (!user[0]) {
      return res
        .status(401)
        .send("User hasn't been created. Please create user.");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (!authenticated) {
        return res.status(403).send("Incorrect password");
      } else {
        if (authenticated) {
          console.log(user[0])
          req.session.user = {
            userId: user[0].user_id,
          };
          res.status(200).send(req.session.user);
        }
      }
    }
  },

  getUser: (req, res) => {
    if (req.session.user) {
      return res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
