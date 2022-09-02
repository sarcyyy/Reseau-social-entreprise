const Sauces = require('../models/Tweet');
const fs = require('fs');

exports.createThing = (req, res, next) => {
    const sauceObjet = JSON.parse(req.body.sauce);
    delete req.body._id;
    sauceObjet.likes = 0;
    sauceObjet.dislikes = 0;
    sauceObjet.usersLiked = [];
    sauceObjet.usersDisliked =[];
    const sauce = new Sauces ({
        ...sauceObjet,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce enregistré !'}))
        .catch(error => res.status(400).json({ error }));
};


exports.modifyThing = (req, res, next) => {
    const sauceModifie = req.file ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  
    delete sauceModifie._userId;
    Sauces.findOne({_id: req.params.id})
        .then((sauce) => {
            if (sauce.userId !== req.auth.userId) {
                res.status(401).json({ message : 'Not authorized'});
            } 
            else {
                 const filename = sauce.imageUrl.split('/images/')[1];
                 fs.unlink(`images/${filename}`, () => {
                });
                 
                Sauces.updateOne({ _id: req.params.id}, { ...sauceModifie, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
 };
exports.deleteThing = (req, res, next) => {
    Sauces.findOne({ _id: req.params.id })
        .then(sauce => {
            const filename = sauce.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Sauces.deleteOne ({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Sauce supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json ({error}));
};

exports.getOneThing = (req, res, next) => {
    Sauces.findOne ({ _id: req.params.id })
        .then((sauce) => res.status(200).json(sauce))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
    Sauces.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(500).json({ error }));
};

exports.like = (req, res , next) => {
    const sauceLike = req.body.like;
    const userIdupdate = req.body.userId;

    Sauces.findOne ({ _id: req.params.id })
    .then(sauce => {
        let nombreLike = sauce.likes;
        let nombreDislike = sauce.dislikes;
        let tableLike = sauce.usersLiked;
        let tableDislike = sauce.usersDisliked;
 
        if (sauceLike === 0) {
              if ( tableLike.includes(userIdupdate))// Verifier si user avait like ou dislike
                {          
              
                    nombreLike = parseFloat(nombreLike)-1;
                    tableLike = tableLike.filter(alluserId => alluserId !== userIdupdate);
                    console.log('tableLike');
                    console.log(tableLike);
                // Si il avait like on retire un like et on l'enleve du tableau usersLiked
               }
               else if (tableDislike.includes(userIdupdate)){
                nombreDislike = parseFloat(nombreDislike)-1;
                tableDislike = tableDislike.filter(alluserId => alluserId !== userIdupdate);
                console.log('tabledislikeLike');
                console.log(tableDislike);
      
// Si il avait dislike on rajoute un like et on l'enleve du tableau usersDisliked
               }
        } else if (sauceLike === 1) {
            if ( tableLike.includes(userIdupdate)){
                alert('error');
            }
            else{
            // verifier si il a pas deja like
            nombreLike += 1;
            tableLike.push(userIdupdate);
            }

        } else if (sauceLike === -1) {
            if ( tableDislike.includes(userIdupdate)){
                alert('error');
            }
            else{
            // verifier si il a pas deja dislike
            nombreDislike += 1;
            tableDislike.push(userIdupdate);
            }
        }
    Sauces.updateOne ({ _id: req.params.id}, {likes: nombreLike, usersLiked: tableLike, dislikes: nombreDislike, usersDisliked: tableDislike})
        .then(() =>res.status(200).json({ message: 'Votre avis à été pris en compte!'}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(400).json({ error }));
};