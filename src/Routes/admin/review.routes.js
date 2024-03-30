const express = require('express');
const ReviewRoutes = express.Router();
const { adminverifyToken } = require('../../helpers/veryfyToken');

const { getAllReview ,  deleteReview } = require('../../controller/admin/review.controller');



// GET ALL REVIEW
ReviewRoutes.get('/get-all-review' ,adminverifyToken,  getAllReview);

// DELETE REVIEW
ReviewRoutes.delete('/delete-review' ,adminverifyToken , deleteReview);


module.exports = ReviewRoutes;