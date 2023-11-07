import express from 'express';

import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';


const wishlistRouter = express.Router();

// récupérer toute la liste des favoris 
wishlistRouter.get('/wishlist', jwtGuard, roleGuard({ roles: ['user'] }));
// recupérer une liste favorie
wishlistRouter.get('/wishlist/:id', jwtGuard, roleGuard({ roles: ['user'] }));
// créer un favoris
wishlistRouter.post('/wishlist', jwtGuard, roleGuard({ roles: ['user'] }));
// supprimer un favoris
wishlistRouter.delete('/wishlist/:id', jwtGuard, roleGuard({ roles: ['user'] }));

export default wishlistRouter;