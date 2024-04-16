
import axios from "axios";

const useUtilisateur = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllUsers = async () => {
        try {
            const utilisateurs = await axios.get(`${baseURL}utilisateurs`);
            return utilisateurs.data;
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${baseURL}utilisateurs/${id}`);
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    };

    const getUserById = async (id) => {
        try {
            const utilisateur = await axios.get(`${baseURL}utilisateurs/${id}`);
            return utilisateur.data;
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            throw error;
        }
    };

    const addUser = async (utilisateur) => {
        try {
            await axios.post(`${baseURL}utilisateurs/add`, utilisateur);
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    };

    const updateUser = async (id, utilisateur) => {
        try {
            await axios.put(`${baseURL}utilisateurs/${id}`, utilisateur);
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    };

    return { getAllUsers, deleteUser, getUserById, addUser, updateUser };
};

export default useUtilisateur;
