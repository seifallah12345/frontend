import axios from "axios";

const useAddress = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllAddresses = async () => {
        try {
            const addresses = await axios.get(`${baseURL}adress`);
            return addresses.data;
        } catch (error) {
            console.error('Error fetching all addresses:', error);
            throw error;
        }
    };

    const deleteAddress = async (id) => {
        try {
            await axios.delete(`${baseURL}adress/${id}`);
        } catch (error) {
            console.error('Error deleting address:', error);
            throw error;
        }
    };

    const getAddressById = async (id) => {
        try {
            const address = await axios.get(`${baseURL}adress/${id}`);
            return address.data;
        } catch (error) {
            console.error('Error fetching address by ID:', error);
            throw error;
        }
    };

    const addAddress = async (address) => {
        try {
            await axios.post(`${baseURL}adress/add`, address);
        } catch (error) {
            console.error('Error adding address:', error);
            throw error;
        }
    };

    const updateAddress = async (id, address) => {
        try {
            await axios.put(`${baseURL}adress/${id}`, address);
        } catch (error) {
            console.error('Error updating address:', error);
            throw error;
        }
    };

    return { getAllAddresses, deleteAddress, getAddressById, addAddress, updateAddress };
};

export default useAddress;
