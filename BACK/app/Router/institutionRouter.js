import express from 'express';

import { jwtGuard } from '../middlewares/jwtGuard.js';
import roleGuard from '../middlewares/roleGuard.js';
import institutionProviderController from '../controllers/ProviderController/InstitutionProviderController.js';
import serviceProviderController from '../controllers/ProviderController/serviceProviderController.js';


const institutionRouter = express.Router();

//récupérer tous les établissements 
institutionRouter.get('/institution', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), institutionProviderController.getAllInstitutions)

//récupérer un établissement 

institutionRouter.get('/institution/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), institutionProviderController.getOneInstitution)

//récupérer un service selon id de l'institution
institutionRouter.get('/institutions/:id/services', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), serviceProviderController.getAllServicesByInstitutionId);


//ajouter un établissement
institutionRouter.post('/institution', jwtGuard, roleGuard({ role: ['provider'] }), institutionProviderController.addInstitution)

//modifier un établissement 
institutionRouter.put('/institution/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), institutionProviderController.updateInstitution)

//supprimer un établissement
institutionRouter.delete('/institution/:id', jwtGuard, roleGuard({ role: ['admin', 'provider'] }), institutionProviderController.deleteInstitution)

export default institutionRouter;