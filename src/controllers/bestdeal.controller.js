import { BestDeal } from "../models/bestDeal.models.js";
import { Product } from "../models/product.models.js";

export const showBestDeal = async (req,res)=>{
    const limit = parseInt(req.query.limit) || 50;
    const page = (req.query.pageno);
    // console.log(req.query)
    // console.log(page)
    // console.log(limit + " from best deals")
    const noOfProd = await BestDeal.countDocuments()
    const prodIdsObjArray = await BestDeal.find({}).limit(limit);
    const prodIds = prodIdsObjArray.map(prod =>  prod.productId);
    console.log(prodIds)
    if(limit <= 25){
    const actualProd = await Product.find({_id: {$in: prodIds}});
    console.log(actualProd)
    res.send({actualProd , noOfProd});
    }else{
        const indexOfLastItem = page*limit;
        const indexOfFirstItem = indexOfLastItem - limit;
        const actualProd = await Product.find({_id:{$in: prodIds}}).skip(indexOfFirstItem).limit(indexOfLastItem-1)
        console.log(actualProd)
        res.send({actualProd,noOfProd})
    }
}