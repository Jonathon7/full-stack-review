const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;

  let user = await db.check_for_user(username);

  if (user[0]) {
    return res.status(403).json("Username taken");
  } else {
    let hash = await bcrypt.hash(password, 10);
    db.add_user(username, hash);

    req.session.user = {
      username
    };

    return res.status(200).json(req.session.user);
  }
};

const login = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;

  let user = await db.check_for_user(username);

  if (!user[0]) {
    return res.status(401).json("Incorrect username or password");
  } else {
    let isAuthenticated = await bcrypt.compareSync(password, user[0].password);

    if (!isAuthenticated) {
      res.status(401).json("Incorrect username or password");
    } else {
      req.session.user = {
        username
      };
      res.status(200).json(req.session.user);
    }
  }
};

const getSession = (req, res) => {
  res.status(200).json(req.session.user);
};

module.exports = {
  signup,
  login,
  getSession
};
