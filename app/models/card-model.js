const connection = require("../../db/connection");

exports.selectCards = () => {
  return connection
    .query(
      `
  SELECT * FROM cards
  `
    )
    .then((result) => {
      return result.rows;
    });
};

exports.selectCardsByUser = (user) => {
  return connection
    .query(
      `
    SELECT * FROM cards
    WHERE username = $1
    `,
      [user]
    )
    .then((result) => {
      return result.rows;
    });
};

exports.getUserByName = (req, res, next) => {
  const { username } = req.params;
  selectUserByName(username)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};

exports.insertCard = (newCard) => {
  const { name, price, quantity, image, username } = newCard;
  console.log(newCard);
  if (name && price && quantity && image && username) {
    return connection
      .query(
        `INSERT INTO cards
            (name, price, quantity, image, username)
            VALUES
            ($1, $2, $3, $4, $5)
            RETURNING *`,
        [name, price, quantity, image, username]
      )
      .then((result) => {
        return result.rows[0];
      });
  } else {
    return Promise.reject({
      status: 400,
      errorMessage: "Bad Request - Missing fields",
    });
  }
};
