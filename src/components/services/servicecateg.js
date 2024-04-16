import axios from "axios";

const useCategory = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllCategories = async () => {
        try {
            const categories = await axios.get(`${baseURL}categories`);
            return categories.data;
        } catch (error) {
            console.error('Error fetching all categories:', error);
            throw error;
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`${baseURL}categories/${id}`);
        } catch (error) {
            console.error('Error deleting category:', error);
            throw error;
        }
    };

    const getCategoryById = async (id) => {
        try {
            const category = await axios.get(`${baseURL}categories/${id}`);
            return category.data;
        } catch (error) {
            console.error('Error fetching category by ID:', error);
            throw error;
        }
    };

    const addCategory = async (category) => {
        try {
            await axios.post(`${baseURL}categories/add`, category);
        } catch (error) {
            console.error('Error adding category:', error);
            throw error;
        }
    };

    const updateCategory = async (id, category) => {
        try {
            await axios.put(`${baseURL}categories/${id}`, category);
        } catch (error) {
            console.error('Error updating category:', error);
            throw error;
        }
    };

    return { getAllCategories, deleteCategory, getCategoryById, addCategory, updateCategory };
};

export default useCategory;
