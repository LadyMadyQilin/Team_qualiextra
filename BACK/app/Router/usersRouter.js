import express from 'express';

import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';
import { userController } from '../controllers/userController.js';
import adminController from '../controllers/adminController.js';
import institutionProviderController from '../controllers/ProviderController/InstitutionProviderController.js';


const usersRouter = express.Router();


// a rajouter une fois les tests finis , jwtGuard, roleGuard({ role: ['admin'] })
//permet d'aller récupérer tous les users 
usersRouter.get('/users', adminController.getAll)
//permet d'aller récupérer tous les users role provider
usersRouter.get('/users_provider', jwtGuard, roleGuard({ role: ['admin'] }), adminController.getAllProvider)

//récupérer un utilisateur selon son identifiant 
usersRouter.get('/users/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), adminController.getOneUser);
//récupérer un utilisateur provider selon son identifiant 
usersRouter.get('/users_provider/:id', jwtGuard, roleGuard({ role: ['admin'] }), adminController.getOneProvider);

//récupérer un service selon son identifiant par le provider
usersRouter.get('/users_provider/:id/services/:id', jwtGuard, roleGuard({ role: ['provider'] }), institutionProviderController.getOneInstitutionByIdProvider);
//récupérer toutes institutions selon id utilisateur
usersRouter.get('/users_provider/:id/institutions', jwtGuard, roleGuard({ role: ['provider'] }), providerController.getAllInstitutionByProviderId);
//récupérer une commande selon id utilisateur
purchasesRouter.get('/users/:id/purchases', jwtGuard, roleGuard({ role: ['admin,provider'] }), userController.getAllPuchasesByUserId)

//modifier le profil utilisateur 
usersRouter.put('/users/:id', jwtGuard, roleGuard({ role: ['admin'] }), adminController.updateUser);
//supprimer le profil utilisateur   
usersRouter.delete('/users/:userId', jwtGuard, roleGuard({ role: ['admin'] }), adminController.deleteUser);

export default usersRouter;