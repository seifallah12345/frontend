import axios from "axios";

const useProduct = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllProducts = async () => {
        try {
            const products = await axios.get(`${baseURL}product`);
            return products.data;
        } catch (error) {
            console.error('Error fetching all products:', error);
            throw error;
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${baseURL}product/${id}`);
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    };

    const getProductById = async (id) => {
        try {
            const product = await axios.get(`${baseURL}product/${id}`);
            return product.data;
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    };

    const addProduct = async (product) => {
        try {
            await axios.post(`${baseURL}product/add`, product);
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    };

    const updateProduct = async (id, product) => {
        try {
            await axios.put(`${baseURL}product/${id}`, product);
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    };

    return { getAllProducts, deleteProduct, getProductById, addProduct, updateProduct };
};

export default useProduct;
