import express from 'express';
import userController from '../controllers/userController.js';

const searchRouter = express.Router();
searchRouter.get('/search', userController.search);

export default searchRouter;