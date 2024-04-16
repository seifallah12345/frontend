<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="permissionName" class="form-label">Permission Name</label>
            <input type="text" class="form-control" id="permissionName" v-model="permission.permissionName">
        </div>
        <button type="submit" class="btn btn-primary">Add Permission</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import usePermission from '@/components/services/servicepermission.js';

const { addPermission } = usePermission();

const router = useRouter();
const permission = ref({
    permissionName: ''
});

const submitForm = () => {
    const permissionData = {
        permissionName: permission.value.permissionName
    };

    addPermission(permissionData)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => console.error('Error:', err));
};
</script>
