const Tweet = require("../models/Tweet");
const fs = require("fs");

exports.createThing = (req, res, next) => {
  const tweetObjet = req.body;
  console.log(tweetObjet);
  delete req.body._id;
  tweetObjet.likes = 0;
  tweetObjet.usersLiked = [];
  const tweet = new Tweet({
    ...tweetObjet,
    // imageUrl: `${req.protocol}://${req.get("host")}/images/${
    //   req.file.filename
    // }`,
  });
  tweet
    .save()
    .then(() => res.status(201).json({ message: "tweet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
  const tweetModifie = req.file
    ? {
        ...JSON.parse(req.body.tweet),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete tweetModifie._userId;
  Tweet.findOne({ _id: req.params.id })
    .then((tweet) => {
      if (tweet.userId !== req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = tweet.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {});

        Tweet.updateOne(
          { _id: req.params.id },
          { ...tweetModifie, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "tweet modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.deleteThing = (req, res, next) => {
  Tweet.findOne({ _id: req.params.id })
    .then((tweet) => {
      const filename = tweet.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Tweet.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "tweet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneThing = (req, res, next) => {
  Tweet.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
  Tweet.find()
    .then((tweet) => res.status(200).json(tweet))
    .catch((error) => res.status(500).json({ error }));
};

exports.like = (req, res, next) => {
  const tweetLike = req.body.like;
  const userIdupdate = req.body.userId;

  Tweet.findOne({ _id: req.params.id })
    .then((tweet) => {
      let nombreLike = tweet.likes;
      let nombreDislike = tweet.dislikes;
      let tableLike = tweet.usersLiked;
      let tableDislike = tweet.usersDisliked;

      if (tweetLike === 0) {
        if (tableLike.includes(userIdupdate)) {
          // Verifier si user avait like ou dislike
          nombreLike = parseFloat(nombreLike) - 1;
          tableLike = tableLike.filter(
            (alluserId) => alluserId !== userIdupdate
          );
          console.log("tableLike");
          console.log(tableLike);
          // Si il avait like on retire un like et on l'enleve du tableau usersLiked
        } else if (tableDislike.includes(userIdupdate)) {
          nombreDislike = parseFloat(nombreDislike) - 1;
          tableDislike = tableDislike.filter(
            (alluserId) => alluserId !== userIdupdate
          );
          console.log("tabledislikeLike");
          console.log(tableDislike);

          // Si il avait dislike on rajoute un like et on l'enleve du tableau usersDisliked
        }
      } else if (tweetLike === 1) {
        if (tableLike.includes(userIdupdate)) {
          alert("error");
        } else {
          // verifier si il a pas deja like
          nombreLike += 1;
          tableLike.push(userIdupdate);
        }
      } else if (tweetLike === -1) {
        if (tableDislike.includes(userIdupdate)) {
          alert("error");
        } else {
          // verifier si il a pas deja dislike
          nombreDislike += 1;
          tableDislike.push(userIdupdate);
        }
      }
      Tweet.updateOne(
        { _id: req.params.id },
        {
          likes: nombreLike,
          usersLiked: tableLike,
          dislikes: nombreDislike,
          usersDisliked: tableDislike,
        }
      )
        .then(() =>
          res.status(200).json({ message: "Votre avis à été pris en compte!" })
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};
