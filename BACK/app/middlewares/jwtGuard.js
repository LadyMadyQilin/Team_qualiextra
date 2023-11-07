import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

dotenv.config();


export const jwtGuard = async (req, res, next) => {
    // console.log('route protégé par JWT');

    try {
        // 1- Récupérer le token dans les headers de la requête (authorization)et vérifier qu'il commence bien par 'Bearer'
        const tokenAuth = req.headers.authorization;
        //si le token ne commence pas par 'bearer'renvoyer 401
        try {
            if (tokenAuth.startsWith('Bearer')) {
                const token = tokenAuth.split(' ')[1];

                // 4- Vérifier que le token est correct (jwt.verify),
                // const decodedToken = jwt.verify(token, process.env.SECRET);
                const payload = await jwt.verify(token, process.env.SECRET);

                // si mon admin ou mon provider est retirer de la liste des authorisés alors il n'a plus accès au site/à son compte.
                // en fonction de l'id qui est dans le token ce qui posait problème de sécurité
                const user = await User.findByPk(payload.userId, {
                    attributes: { exclude: ['password'] }
                });
                if (!user) {
                    res.status(401).send('bad token')
                    return;
                }
                req.user = user;

                // Si tout va bien on passe au middleware suivant
                next();
            }

        } catch (error) {
            res.status(401).json({ message: 'accès denied' });
        }



    } catch (error) {
        // 2-sinon 401
        return res.status(401).send(error.message);
    }
}

// quand le token apparait dans le terminal (user_login)
// alors je veux récupéré ce token
// pour le faire vérifier dans ma bdd
// ? SELECT password FROM User
// si je le trouve avec le bearer devant je revois l'utilisateur sur sa page de profil
// si non 401
// 