import { Cart } from "../models/cart.models.js";

export const addToCart = async function(req , res){
       const {productId , userId} = req.body;
       
       if(Cart.find({productId}) != undefined || Cart.find({productId}) != null){
        await Cart.create({
            productId , userId
           })

        res.status(201).send("Item added to cart Successfully");
       }
}

export const deleteProdCart = async function(req , res){
    const {productId , userId} = req.body;
    await Cart.deleteOne({productId});
    res.status(201).send("Product removed from the cart");
}

export const getProdCart = async function(req,res){
    const data = await Cart.find();
    res.send(data);
}