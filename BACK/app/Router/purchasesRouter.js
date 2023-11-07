import express from 'express';
import userController from '../controllers/userController.js';
import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';


const purchasesRouter = express.Router();

//récupérer toutes les commandes
purchasesRouter.get('/purchases', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), userController.getAllPurchases)
//récupérer une commande selon son id
purchasesRouter.get('/purchases/:id', jwtGuard, roleGuard({ role: ['provider'] }), userController.getOnePurchase)

//creation d'une commande
purchasesRouter.post('/purchases', jwtGuard, roleGuard({ role: ['user'] }), userController.addPurchase)
//modifier une commande
purchasesRouter.put('/purchases/:id', jwtGuard, roleGuard({ role: ['user', 'provider'] }), userController.updatePurchase)
//supprimer une commande
purchasesRouter.delete('/purchases/:id', jwtGuard, roleGuard({ role: ['user', 'provider'] }), userController.deletePurchase);

export default purchasesRouter;