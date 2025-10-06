import { Router } from 'express';
import { createIngredient, getIngredients } from '../controllers/ingredientController';

const router = Router();

router.post('/', createIngredient); 
router.get('/', getIngredients);

export default router;
