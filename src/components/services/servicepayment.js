import axios from "axios";

const usePayment = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllPayments = async () => {
        try {
            const payments = await axios.get(`${baseURL}payments`);
            return payments.data;
        } catch (error) {
            console.error('Error fetching all payments:', error);
            throw error;
        }
    };

    const deletePayment = async (id) => {
        try {
            await axios.delete(`${baseURL}payments/${id}`);
        } catch (error) {
            console.error('Error deleting payment:', error);
            throw error;
        }
    };

    const getPaymentById = async (id) => {
        try {
            const payment = await axios.get(`${baseURL}payments/${id}`);
            return payment.data;
        } catch (error) {
            console.error('Error fetching payment by ID:', error);
            throw error;
        }
    };

    const addPayment = async (payment) => {
        try {
            await axios.post(`${baseURL}payments/add`, payment);
        } catch (error) {
            console.error('Error adding payment:', error);
            throw error;
        }
    };

    const updatePayment = async (id, payment) => {
        try {
            await axios.put(`${baseURL}payments/${id}`, payment);
        } catch (error) {
            console.error('Error updating payment:', error);
            throw error;
        }
    };

    return { getAllPayments, deletePayment, getPaymentById, addPayment, updatePayment };
};

export default usePayment;
