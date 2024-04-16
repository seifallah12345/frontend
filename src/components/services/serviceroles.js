import axios from "axios";

const useRoles = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllRoles = async () => {
        try {
            const roles = await axios.get(`${baseURL}roles`);
            return roles.data;
        } catch (error) {
            console.error('Error fetching all roles:', error);
            throw error;
        }
    };

    const deleteRole = async (id) => {
        try {
            await axios.delete(`${baseURL}roles/${id}`);
        } catch (error) {
            console.error('Error deleting role:', error);
            throw error;
        }
    };

    const getRoleById = async (id) => {
        try {
            const role = await axios.get(`${baseURL}roles/${id}`);
            return role.data;
        } catch (error) {
            console.error('Error fetching role by ID:', error);
            throw error;
        }
    };

    const addRole = async (role) => {
        try {
            await axios.post(`${baseURL}roles/add`, role);
        } catch (error) {
            console.error('Error adding role:', error);
            throw error;
        }
    };

    const updateRole = async (id, role) => {
        try {
            await axios.put(`${baseURL}roles/${id}`, role);
        } catch (error) {
            console.error('Error updating role:', error);
            throw error;
        }
    };

    return { getAllRoles, deleteRole, getRoleById, addRole, updateRole };
};

export default useRoles;
