import { Product } from "../models/product.models.js"

export const getProduct = async (req , res)=>{
      try {
        const products = await Product.find({});
        res.status(201).send(products);
      } catch (error) {
          res.error(error)
      }
}
