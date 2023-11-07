import express from 'express';

import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';
import packageProviderController from '../controllers/ProviderController/packageProviderController.js';


const packagesRouter = express.Router();

//récupérer les meilleurs packages pour affichage page Home
packagesRouter.get('/packages/:id/favorites', (req, res) => {
    res.json('récupérer un forfait pour la homePage');
});

//récupérer tous les packages
packagesRouter.get('/packages', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), packageProviderController.getAllPackages);

//récupérer un package selon son id 
packagesRouter.get('/packages/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), packageProviderController.getOnePackage);

//récupérer l'identifant d'un package pour avoir avoir son prix
packagesRouter.get('/packages/:id/prices', jwtGuard, roleGuard({ role: ['provider'] }), packageProviderController.getOnePrice);

//création packages
packagesRouter.post('/packages', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), packageProviderController.addPackage);

//modification du forfait 
packagesRouter.put('/packages/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), packageProviderController.updatePackage);

//supprimer forfait 
packagesRouter.delete('/packages/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), packageProviderController.deletePackage);

export default packagesRouter;