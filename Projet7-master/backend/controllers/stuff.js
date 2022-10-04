const Tweet = require("../models/Tweet");
const fs = require("fs");
const User = require("../models/User");

exports.creerPost = (req, res, next) => {
  const tweetObjet = req.body;
  console.log(req.auth.userId);
  delete req.body._id;
  tweetObjet.likes = 0;
  tweetObjet.usersLiked = [];
  tweetObjet.userId = req.auth.userId;
  console.log(tweetObjet);
  const tweet = new Tweet({
    ...tweetObjet,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file?.filename
    }`,
  });
  tweet
    .save()
    .then(() => res.status(201).json({ message: "tweet enregistré !" }))
    .catch((error) => res.status(400).json({ message: error }));
};

exports.modifierPost = (req, res, next) => {
  User.findOne({ _id: req.auth.userId }).then((adminbrut) => {
    if (adminbrut.admin !== undefined) {
      const admin = adminbrut.admin;
      Tweet.findOne({ _id: req.params.id }).then((tweet) => {
        if (admin !== "true" || req.body.description === "") {
          res.status(401).json({ message: "Not authorized" });
        } else {
          const tweetModifie = req.file
            ? {
                ...req.body,
                imageUrl: `${req.protocol}://${req.get("host")}/images/${
                  req.file.filename
                }`,
              }
            : { ...req.body };
          delete tweetModifie._userId;
          Tweet.findOne({ _id: req.params.id })
            .then((tweet) => {
              const filename = tweet.imageUrl.split("/images/")[1];
              fs.unlink(`images/${filename}`, () => {});
              Tweet.updateOne(
                { _id: req.params.id },
                { ...tweetModifie, _id: req.params.id }
              )
                .then(() => res.status(200).json({ message: "tweet modifié!" }))
                .catch((error) => res.status(401).json({ error }));
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
        }
      });
    } else {
      Tweet.findOne({ _id: req.params.id }).then((tweet) => {
        if (tweet.userId !== req.auth.userId || req.body.description === "") {
          res.status(401).json({ message: "Not authorized" });
        } else {
          const tweetModifie = req.file
            ? {
                ...req.body,
                imageUrl: `${req.protocol}://${req.get("host")}/images/${
                  req.file.filename
                }`,
              }
            : { ...req.body };
          delete tweetModifie._userId;
          Tweet.findOne({ _id: req.params.id })
            .then((tweet) => {
              const filename = tweet.imageUrl.split("/images/")[1];
              fs.unlink(`images/${filename}`, () => {});
              Tweet.updateOne(
                { _id: req.params.id },
                { ...tweetModifie, _id: req.params.id }
              )
                .then(() => res.status(200).json({ message: "tweet modifié!" }))
                .catch((error) => res.status(401).json({ error }));
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
        }
      });
    }
  });
};
exports.supprimerPost = (req, res, next) => {
  User.findOne({ _id: req.auth.userId }).then((adminbrut) => {
    if (adminbrut.admin !== undefined) {
      const admin = adminbrut.admin;
      Tweet.findOne({ _id: req.params.id })

        .then((tweet) => {
          if (req.auth.userId === tweet.userId || admin === "true") {
            const filename = tweet.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
              Tweet.deleteOne({ _id: req.params.id })
                .then(() =>
                  res.status(200).json({ message: "tweet supprimé !" })
                )
                .catch((error) => res.status(400).json({ error }));
            });
          } else {
            res.status(401).json("Not authorized");
          }
        })
        .catch((error) => res.status(500).json({ error }));
    } else {
      Tweet.findOne({ _id: req.params.id })

        .then((tweet) => {
          if (req.auth.userId === tweet.userId) {
            const filename = tweet.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
              Tweet.deleteOne({ _id: req.params.id })
                .then(() =>
                  res.status(200).json({ message: "tweet supprimé !" })
                )
                .catch((error) => res.status(400).json({ error }));
            });
          } else {
            res.status(401).json("Not authorized");
          }
        })
        .catch((error) => res.status(500).json({ error }));
    }
  });
};

exports.recupererPost = (req, res, next) => {
  Tweet.findOne({ _id: req.params.id })
    .then((tweet) => res.status(200).json(tweet))
    .catch((error) => res.status(400).json({ error }));
};

exports.recupererAllPost = (req, res, next) => {
  Tweet.find()
    .sort({ _id: -1 })
    .then((tweet) => res.status(200).json(tweet))
    .catch((error) => res.status(500).json({ error }));
};

exports.like = (req, res, next) => {
  const tweetLike = req.body.like;
  const userIdupdate = req.auth.userId;
  console.log("tweetLike");
  console.log(userIdupdate);
  Tweet.findOne({ _id: req.params.id })

    .then((tweet) => {
      console.log("tweet");
      console.log(tweet);
      let nombreLike = tweet.likes;
      let tableLike = tweet.usersLiked;
      var bool = true;
      console.log(nombreLike);
      console.log(tableLike);

      if (tweetLike === 0) {
        if (tableLike.includes(userIdupdate)) {
          nombreLike = parseFloat(nombreLike) - 1;
          tableLike = tableLike.filter(
            (alluserId) => alluserId !== userIdupdate
          );
        } else {
          bool = false;
        }
      } else if (tweetLike === 1) {
        if (tableLike.includes(userIdupdate)) {
          bool = false;
        } else {
          nombreLike = parseFloat(nombreLike) + 1;
          console.log("debug");
          tableLike.push(userIdupdate);
        }
      }

      Tweet.updateOne(
        { _id: req.params.id },
        {
          likes: nombreLike,
          usersLiked: tableLike,
        }
      )

        .then(() => {
          if (bool === true) {
            res
              .status(200)
              .json({ message: "Votre avis à été pris en compte!" });
          } else {
            res.status(400).json("erreur ");
          }
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};
