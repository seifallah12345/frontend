import axios from "axios";

const useTask = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getAllTasks = async () => {
        try {
            const tasks = await axios.get(`${baseURL}tasks`);
            return tasks.data;
        } catch (error) {
            console.error('Error fetching all tasks:', error);
            throw error;
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${baseURL}tasks/${id}`);
        } catch (error) {
            console.error('Error deleting task:', error);
            throw error;
        }
    };

    const getTaskById = async (id) => {
        try {
            const task = await axios.get(`${baseURL}tasks/${id}`);
            return task.data;
        } catch (error) {
            console.error('Error fetching task by ID:', error);
            throw error;
        }
    };

    const addTask = async (task) => {
        try {
            await axios.post(`${baseURL}tasks/add`, task);
        } catch (error) {
            console.error('Error adding task:', error);
            throw error;
        }
    };

    const updateTask = async (id, task) => {
        try {
            await axios.put(`${baseURL}tasks/${id}`, task);
        } catch (error) {
            console.error('Error updating task:', error);
            throw error;
        }
    };

    return { getAllTasks, deleteTask, getTaskById, addTask, updateTask };
};

export default useTask;
