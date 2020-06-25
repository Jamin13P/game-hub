module.exports = {
  getRandomPosts: (req, res) => {
    const db = req.app.get("db");

    db.get_random_posts()
      .then((posts) => {
        res.status(200).send(posts);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getRandomPostSelected: (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;

    db.get_random_post_selected(post_id)
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getUserPosts: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;

    db.get_user_posts(user_id)
      .then((posts) => {
        res.status(200).send(posts);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getUserPost: (req, res) => {
    const db = req.app.get("db");
    const { user_id, post_id } = req.params;

    db.get_user_post(user_id, post_id)
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  createPost: (req, res) => {
    const db = req.app.get("db");
    const { post, picture } = req.body;
    const { userId } = req.session.user;
    console.log(req.session);

    db.create_post(userId, post, picture)
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  editPost: (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;
    const { post, picture } = req.body;

    db.edit_post(post_id, post, picture)
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;

    db.delete_post(post_id)
      .then((post) => {
        res.status(200).send(post);
      })
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },
};
