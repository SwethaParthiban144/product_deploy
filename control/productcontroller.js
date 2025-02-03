const product = require('../model/product')
const Product = require('../model/product')

exports.getSingleProduct = async(req,res)=>
{
    try{
        const product = await Product.findOne({prodId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product not found'})
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
    
}
exports.getAllProducts = async(req,res)=>
    {
        try
            const products = await Product.find()
            res.json(products)
        }
        catch(err){
            res.status(500).json({msg: err.message})
        }
        
    }
exports.addNewProduct = async(req,res)=>
{
    try{
        const newproduct = req.body;
        const check = await Product.findOne({prodId:newproduct.prodId})
        if(!check)
        {
            await Product.create(req.body);
            res.json(newproduct)
        }
        else{
            return res.json({msg:'Record Already Exists!'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    
}
exports.updateProduct = async(req,res)=>{
    try{
        const product = req.body;
        const check = await Product.findOne({prodId:product.prodId})
        console.log(check);
        
        if(check){
            await Product.updateOne({prodId:product.prodId} , product)
            res.json(product)
        }
        else{
            res.json({msg:'Product doesnt exist'})
        }
    }
    catch(err){
        console.log(err);
    }
}
// exports.deleteProduct = async(req,res)=>{
//     try{
//         const check = await Product.findOne({prodId:req.params.id})
//         if(check){
//             await Product.deleteOne({prodId: check.prodId})
//             res.json(check)
//         }
//         else{
//             res.json({msg:'Product doesnt exist'})
//         }

//     }
//     catch(err){
//         console.log(err);
//     }
// }
exports.deleteProduct = async(req,res)=>{
    try{
        const check = await Product.findOne({prodId:req.params.id})
        if(check){
            await Product.deleteOne({prodId: check.prodId})
            res.json(check)
        }
        else{
            res.json({msg:'Product doesnt exist'})
        }
    }
    catch(err){
        console.log(err);
    }
}
