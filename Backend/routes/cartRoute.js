import express from 'express'
import {addToCart , removeFromCart,getCart} from '../controllers/cartController.js' 
import authMiddleware from '../middlewares/auth.js';

const cartRouter=express.Router();

//now create multiple endpoints 
cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post('/remove',authMiddleware,removeFromCart);
cartRouter.post("/get",authMiddleware, getCart);

export default cartRouter;
