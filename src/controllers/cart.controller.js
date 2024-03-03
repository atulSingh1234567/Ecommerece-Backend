import { Cart } from "../models/cart.models.js";
import { Product } from "../models/product.models.js";
export const addToCart = async function (req, res) {
    try {
        const { productId, userId } = req.body;
        await Cart.create({
            productId, userId
        })
        
        res.status(201).send("Item is added to cart Successfully");
    } catch (error) {
        res.status(500).send("product couldn't be added to the cart!")
    }

    //    else{
    //     res.send("Item couldn't be added")
    //    }
}

export const deleteProdCart = async function (req, res) {
     try {
        const { productId } = req.body;
        console.log(productId)
        await Cart.deleteMany({ productId:productId });
        res.status(201).send("Product removed from the cart");
     } catch (error) {
        res.status(500).send("Item couldn't be deleted!")
     }
}

export const getProdCart = async function (req, res) {
    const data = await Cart.find().populate('userId', 'productId');
    res.send(data);
}

export const getUsersCart = async function(req,res){
    const {userId} = req.body;
    // console.log(userId)
    const ProdCart = await Cart.find({userId}).populate('userId' , 'productId').exec();
    // console.log(ProdCart)
    const productIds = ProdCart.map(product => product.productId);
    // console.log(productIds)

    const actualProd = await Product.find({_id: {$in: productIds}})
    // console.log(ProdCart)
    // console.log(actualProd)
    res.send(actualProd);
}