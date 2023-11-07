import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import adminCheckRole from "../../utils/role.js";

dotenv.config();

// ! créer un utilisateur
const authController = {
  // ! si on veut utiliser async et await le mettre en debut de fonction !!
  register: async function (req, res) {
    const { firstname, lastname, password, email, birthday, phone_user } =
      req.body;

    // Engistrer un utilisateur
    try {
      // J'ecris la liste de mes options pour verifier la robustesse d'un mot de passe
      const options = {
        minLength: 12,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      };
      // Si le mot de passe ne respecte pas les crites (1 maj, 1 min, 1 symbol, 1 chiffre)
      if (!validator.isStrongPassword(req.body.password, options)) {
        // Je jette une erreur avec le message: 'le mot de passe doit ...'
        throw new Error(
          "Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      // ! La méthode create d'un modèle est asynchrone, elle renvoie donc une Promise. Pour attendre
      // la création de l'utilisateur avant de passer à la suite, on utilise le mot clé 'await' sinon ne se transforme pas en Promise, objet non utilisable, ne se renvoie pas à l'utilisateur Promise jamais résolut.
      // ! Passer à la suite que si l'utilisatuer est créer.
      const user = await User.create({
        firstname,
        lastname,
        password: hashedPassword,
        email: email.toLowerCase(),
        birthday,
        phone_user: parseInt(phone_user),
      });
      // quand le serveur renvoie un réponse il nous donne juste ses 4 là, ceux qu'on lui demande. Peut aussi avoir une image de profil ou un description...
      // ! doit être envoyer en json
      res.status(201).send("user has been created");

      // Si jamais j'ai eu une erreur n'importe ou dans mon try, je passe dans le catch
    } catch (error) {
      res.status(401).json({ errorMessage: error.message });
    }
  },

  login: async function (req, res) {
    const { email, password } = req.body;

    try {
      //Test pour se loguer
      // J'attend qu'un seul utilisateur de ma bdd soit relier à un email
      const foundUser = await User.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });
      // Si il y a bien un utilisateur avec cet email
      if (foundUser) {
        const passwordMatching = await bcrypt.compare(
          password,
          foundUser.password
        );

        if (passwordMatching) {
          const token = jwt.sign(
            { userId: foundUser.id, role: foundUser.role },
            process.env.SECRET,
            { algorithm: "HS256", expiresIn: "1h" }
          );

          // if (token.expires) {
          //     this.refreshToken(User.id);
          // }

          // si je veux voir mon token dans mon terminal je loggin
          res.json({ token, user: foundUser });
          // sinon je renvoie une page non-autoriser
        } else {
          res
            .status(401)
            .json({
              errorMessage:
                "La combinaison utilisateur mot de passe est erronée",
            });
        }
        // sinon je renvoie une page non-autoriser
      } else {
        res
          .status(401)
          .json({
            errorMessage: "La combinaison utilisateur mot de passe est erronée",
          });
      }
      // sinon je renvoie une page non-autoriser
    } catch (error) {
      res
        .status(401)
        .json({
          errorMessage: "La combinaison utilisateur mot de passe est erronée",
        });
    }
  },

  // refreshToken: async function (req, res) {
  //     const { token } = req.body;

  //     try {
  //         const decoded = jwt.verify(token, process.env.SECRET);
  //         const newToken = jwt.sign({ userId: decoded.userId }, process.env.SECRET, { algorithm: "HS256", expiresIn: '1h' });
  //         res.json({ token: newToken });
  //     } catch (error) {
  //         res.status(401).json({ errorMessage: 'Token invalide' });
  //     }
  // },

  test: (req, res) => {
    res.send("ok");
  },
};

export default authController;
