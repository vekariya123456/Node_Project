const ProductServieces = require('../../Services/product.service');
const productService = new ProductServieces();
const ReviewServieces = require('../../Services/review.service');
const reviewService = new ReviewServieces();

exports.getAllProducts = async(req , res) => {
    try {
        let products = await productService.getAllProducts(req.query);
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({Message: 'Internal server Error'});
    }
};


exports.getProduct = async (req, res) => {
    try {
        let product = await productService.getProductById(req.query.productId);
        let review = await reviewService.getAllReview(req.query.productId);
        let totalRating = review.reduce((total, item) => total + item.rating, 0);
        let avgRating = totalRating / review.length;
        // console.log(avgRating);
        res.status(200).json({product, rating: avgRating});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
}