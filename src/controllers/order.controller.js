import { Order } from "../models/order.models.js";
import { Product } from "../models/product.models.js";

export const userOrder = async (req,res)=>{
    const {userId,productId} = req.body;
    try{
       await Order.create({userId,productId});
       res.status(201).send('Thanks for shopping')
    }catch(err){
         res.status(404).send("The product can't be ordered!")
    }
}

export const orderMadeTill = async (req,res)=>{
    const orders = await Order.find({}).populate('userId','productId').exec();
    res.send(orders)
}

export const userViseOrder = async (req,res)=>{
    const {userId} = req.body;
    console.log(userId)
    try {
        const orders = await Order.find({userId});
        console.log(orders)
        const prodIds = orders.map(ids => ids.productId);
        console.log(prodIds)
        const orderedProd = await Product.find({_id:{$in:prodIds}})
        res.send(orderedProd)
        console.log('after product.find')
        console.log(orderedProd)
    } catch (error) {
        res.send('error finding the ordered products')
    }
}