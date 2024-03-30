const ReviewServices = require('../../Services/review.service');
const reviewService = new ReviewServices();



exports.addReview = async (req, res) => {
    try {
        let review = await reviewService.getReview({
            user: req.user._id,
            product:req.query.productId,
            isDelete: false
        });
        if(review) {
            return res.status(400).json({ Message: 'review is alredy exist' });
        }
        review = await reviewService.addNewReview({ ...req.body, user: req.user._id });
        res.status(201).json({review, Message: 'review is Added...' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.getAllReview = async(req , res) => {
    try {
        let review = await reviewService.getAllReview(req.query);
        res.status(200).json(review);
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

exports.deleteReview = async(req , res) => {
    try {
        let review = await reviewService.getReviewById(req.query.Id);
        if(!review){
            return res.status(404).json({Message: 'review is not found'});
        }
        review = await reviewService.updateReview(review._id , {isDelete: true});
        res.status(202).json({review , Message: 'review is Delete'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
}