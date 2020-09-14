import { createNewGroceries, deleteGroceries, showAllGroceries, showOneGroceries, updateGroceries } from './groceries.handler';
import { Router } from "express";

export const router = Router();

router
    .route('/')
    .get(showAllGroceries)
    .post(createNewGroceries);

router
    .route('/:id')
    .get(showOneGroceries)
    .put(updateGroceries)
    .delete(deleteGroceries);