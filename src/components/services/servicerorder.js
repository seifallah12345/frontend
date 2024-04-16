import axios from "axios";

const useOrder = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllOrders = async () => {
        try {
            const orders = await axios.get(`${baseURL}orders`);
            return orders.data;
        } catch (error) {
            console.error('Error fetching all orders:', error);
            throw error;
        }
    };

    const deleteOrder = async (id) => {
        try {
            await axios.delete(`${baseURL}orders/${id}`);
        } catch (error) {
            console.error('Error deleting order:', error);
            throw error;
        }
    };

    const getOrderById = async (id) => {
        try {
            const order = await axios.get(`${baseURL}orders/${id}`);
            return order.data;
        } catch (error) {
            console.error('Error fetching order by ID:', error);
            throw error;
        }
    };

    const addOrder = async (order) => {
        try {
            await axios.post(`${baseURL}orders/add`, order);
        } catch (error) {
            console.error('Error adding order:', error);
            throw error;
        }
    };

    const updateOrder = async (id, order) => {
        try {
            await axios.put(`${baseURL}orders/${id}`, order);
        } catch (error) {
            console.error('Error updating order:', error);
            throw error;
        }
    };

    return { getAllOrders, deleteOrder, getOrderById, addOrder, updateOrder };
};

export default useOrder;
