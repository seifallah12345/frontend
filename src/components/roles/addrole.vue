<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="roleName" class="form-label">Role Name</label>
            <input type="text" class="form-control" id="roleName" v-model="role.nom">
        </div>
        <div class="mb-3">
            <label for="permission" class="form-label">Permission</label>
            <select class="form-select" id="permission" v-model="selectedPermission">
                <option disabled value="">Please select a permission</option>
                <option v-for="permission in permissions" :key="permission.id" :value="permission.id">
                    {{ permission.permissionName }}
                </option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Add Role</button>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useRole from '@/components/services/serviceroles.js';
import usePermission from '@/components/services/servicepermission.js';

const { addRole } = useRole();
const { getAllPermissions } = usePermission();

const router = useRouter();
const role = ref({
    nom: null
});

// Selected permission
const selectedPermission = ref(null);

// Array to hold permissions
const permissions = ref([]);

// Fetch permissions on component mount
onMounted(() => {
    getAllPermissions()
        .then(response => {
            permissions.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching permissions:', error);
        });
});

// Submit form
const submitForm = () => {
    if (!selectedPermission.value) {
        alert('Please select a permission.');
        return;
    }

    const roleData = {
        nom: role.value.nom,
        permissionId: selectedPermission.value // Include selected permission ID
    };

    addRole(roleData)
        .then(res => {
            console.log(res);
            router.push('/UI');
        })
        .catch(err => console.error('Error:', err));
};
</script>
