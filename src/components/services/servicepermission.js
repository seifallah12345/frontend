import axios from "axios";

const usePermission = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllPermissions = async () => {
        try {
            const permissions = await axios.get(`${baseURL}permissions`);
            return permissions.data;
        } catch (error) {
            console.error('Error fetching all permissions:', error);
            throw error;
        }
    };

    const deletePermission = async (id) => {
        try {
            await axios.delete(`${baseURL}permissions/${id}`);
        } catch (error) {
            console.error('Error deleting permission:', error);
            throw error;
        }
    };

    const getPermissionById = async (id) => {
        try {
            const permission = await axios.get(`${baseURL}permissions/${id}`);
            return permission.data;
        } catch (error) {
            console.error('Error fetching permission by ID:', error);
            throw error;
        }
    };

    const addPermission = async (permission) => {
        try {
            await axios.post(`${baseURL}permissions/add`, permission);
        } catch (error) {
            console.error('Error adding permission:', error);
            throw error;
        }
    };

    const updatePermission = async (id, permission) => {
        try {
            await axios.put(`${baseURL}permissions/${id}`, permission);
        } catch (error) {
            console.error('Error updating permission:', error);
            throw error;
        }
    };

    return { getAllPermissions, deletePermission, getPermissionById, addPermission, updatePermission };
};

export default usePermission;
