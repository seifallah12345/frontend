<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="taskName" class="form-label">Task Name</label>
            <input type="text" class="form-control" id="taskName" v-model="task.taskName">
        </div>
        <div class="mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="dueDate" v-model="task.dueDate">
        </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useTask from '@/components/services/servicetask.js';

const { addTask } = useTask();

const router = useRouter();
const task = ref({
    taskName: null,
    dueDate: null
});

const submitForm = () => {
    const taskData = {
        taskName: task.value.taskName,
        dueDate: task.value.dueDate
    };

    addTask(taskData)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => console.error('Error:', err));
};
</script>
