module.exports = {
  getRandomPosts: (req, res) => {
    const db = req.app.get("db");

    db.get_random_posts()
      .then((res) => {
        res.status(200).send(res);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },
};
