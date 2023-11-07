import express from 'express';

import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';


const categoriesRouter = express.Router();


categoriesRouter.get('/categories', (req, res) => {
    res.json('récupérer de toutes les catégories');
});
categoriesRouter.get('/categories/:id', (req, res) => {
    res.json('récupérer d\'une catégorie');
});
categoriesRouter.post('/categories', jwtGuard, roleGuard({ role: ['admin'] }), (req, res) => {
    res.json('créer d\'une catégorie');
});
categoriesRouter.put('/categories/:id', jwtGuard, roleGuard({ role: ['admin'] }), (req, res) => {
    res.json('modifier une catégorie');
});
categoriesRouter.delete('/categories/:id', jwtGuard, roleGuard({ role: ['admin'] }), (req, res) => {
    res.json('supprimer une catégorie');
});

export default categoriesRouter;