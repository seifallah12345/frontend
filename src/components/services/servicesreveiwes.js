import axios from "axios";

const useReview = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllReviews = async () => {
        try {
            const reviews = await axios.get(`${baseURL}reviews`);
            return reviews.data;
        } catch (error) {
            console.error('Error fetching all reviews:', error);
            throw error;
        }
    };

    const deleteReview = async (id) => {
        try {
            await axios.delete(`${baseURL}reviews/${id}`);
        } catch (error) {
            console.error('Error deleting review:', error);
            throw error;
        }
    };

    const getReviewById = async (id) => {
        try {
            const review = await axios.get(`${baseURL}reviews/${id}`);
            return review.data;
        } catch (error) {
            console.error('Error fetching review by ID:', error);
            throw error;
        }
    };

    const addReview = async (review) => {
        try {
            await axios.post(`${baseURL}reviews/add`, review);
        } catch (error) {
            console.error('Error adding review:', error);
            throw error;
        }
    };

    const updateReview = async (id, review) => {
        try {
            await axios.put(`${baseURL}reviews/${id}`, review);
        } catch (error) {
            console.error('Error updating review:', error);
            throw error;
        }
    };

    return { getAllReviews, deleteReview, getReviewById, addReview, updateReview };
};

export default useReview;
