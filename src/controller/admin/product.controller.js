const ProductServieces = require('../../Services/product.service');
const productservice = new ProductServieces();



exports.addNewProdut = async (req, res) => {
    try {
        let product = await productservice.getProduct({ title: req.body.title, isDelete: false } );
        if(product) {
            return res.status(400).json({message : 'Product is already is Exist'});
        }
        product = await productservice.addNewProduct({...req.body});
        res.status(201).json({product, message: 'Prouct is Added...'});
    } catch (error) { 
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.getAllProducts = async (req,res) => {
    try {
        let products = await productservice.getAllProducts(req.query);
        res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'}); 
    }
};

exports.getProduct = async (req, res) => {
    try {
       let product = await productservice.getProductById(req.query.productId);
      // console.log(product);
       if(!product){
        return res.status(404).json({ message: 'Product is Not Found'});
        }
        res.status(200).json(product); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'}); 
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let product = await productservice.getProductById(req.query.productId);
        if(!product) {
            return res.status(404).json({ message: 'Product is Not Found'});
        }
        product = await productservice.updateProduct(product._id, {...req.body});
        res.status(202).json({product, message: 'Product is Update'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});  
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let product = await productservice.getProductById(req.query.productId);
        if(!product) {
            return res.status(404).json({ message: 'Product is Not Found'});
        }
        product = await productservice.updateProduct(product._id, {isDelete: true});
        res.status(200).json({product, message: 'Product is Deleted...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});  
    }
}

