const models = require("../models");

const getUserByEmailMiddleWare = (req, res, next) => {
  // user existe avec cet email?
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        // si l'utilisateur existe on le passe dans req.user pour avoir accès au req.user.id, req.user.firstname...
        [req.user] = users;
        next();
      } else {
        // si l'utilisateur avec ce mail n'existe pas
        console.warn("Mail doesnt exist");
        res.sendStatus(401);
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const register = (req, res) => {
  // récupère les données de la requête provenant de req.body
  const user = req.body;

  models.user
    .insert(user)
    // une fois que la promesse est résolue la valeur est destructurée pour obtenir la première valeur du tableau (result)
    .then(([result]) => {
      console.warn("Result from register request", result);
      // vérifie que le résultat de l'insertion est supérieur à 0
      if (result.affectedRows) res.sendStatus(201);
      else res.sendStatus(400);
    })
    // fonction de rappel exécutée si une erreur se produit
    .catch((error) => {
      console.error(error);
      // vérifie si l'erreur est due à une violation de contrainte unique dans la bdd (un enregistrement déjà existant)
      if (error.errno === 1062) res.sendStatus(409);
      else res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailMiddleWare,
  register,
};
