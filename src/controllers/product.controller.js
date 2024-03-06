import { Product } from "../models/product.models.js"

export const getProduct = async (req , res)=>{
      try {
        const products = await Product.find({});
        res.status(201).send(products);
      } catch (error) {
          res.error(error)
      }
}

export const getCategoryProd = async function(req, res){
    const {category} = req.body;
    // console.log(category)
    // console.log(req.params)
    const limit = parseInt(req.query.limit) || 50;
    const pages = parseInt(req.query.pageno)
    // console.log(typeof pages)
    const noOfProd = await Product.find({category:category}).countDocuments()
    if(limit <= 25){
      const products = await Product.find({category:category}).limit(limit);
      res.send({products,noOfProd})
    }else{
      // console.log(typeof limit, limit)
      // console.log(typeof pages , pages)
      const indexOfLastItem = pages*limit;
      // console.log(indexOfLastItem)
      const indexOfFirstItem = indexOfLastItem - limit;
      // console.log(indexOfFirstItem)
      const products = await Product.find({category:category}).skip(indexOfFirstItem).limit(indexOfLastItem-1)
      // console.log(prd)
      res.send({products , noOfProd})
    }
   

}
