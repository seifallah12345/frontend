<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="utilisateur.nom">
        </div>
        <div class="mb-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" v-model="utilisateur.prenom">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="utilisateur.email">
        </div>
        <div class="mb-3">
            <label for="mdp" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="mdp" v-model="utilisateur.mot_de_passe">
        </div>
        <div class="mb-3">
            <label for="naissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="naissance" v-model="utilisateur.date_de_naissance">
        </div>
        <div class="mb-3">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="tel" class="form-control" id="telephone" v-model="utilisateur.telephone">
        </div>
        <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <select class="form-control" id="role" v-model="utilisateur.roleId">
                <option disabled value="">Please select one</option>
                <option v-for="role in roles" :key="role.id" :value="role.id">
                    {{ role.nom }}
                </option>
            </select>
        </div>
        <!-- New Address fields -->
        <div class="mb-3">
            <label for="street" class="form-label">Street</label>
            <input type="text" class="form-control" id="street" v-model="address.street">
        </div>
        <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" v-model="address.city">
        </div>

        <!-- Permission Selection -->
        <div class="mb-3">
            <label for="permission" class="form-label">Permission</label>
            <select class="form-control" id="permission" v-model="selectedPermission">
                <option disabled value="">Please select one</option>
                <option v-for="permission in permissions" :key="permission.id" :value="permission.id">
                    {{ permission.permissionName }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="photo" class="form-label">Photo</label>
            <input type="file" class="form-control" id="photo" @change="handlePhotoUpload">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useUtilisateur from '@/components/services/serviceuser.js';
import useRoles from '@/components/services/serviceroles.js';
import usePermissions from '@/components/services/servicepermission.js';  // For permissions list
import useAddress from '@/components/services/serviceaddress.js';  // For adding address

const { addUser } = useUtilisateur();
const { getAllRoles } = useRoles();
const { getAllPermissions } = usePermissions();  // Get permissions
const { addAddress } = useAddress();  // Add address

const router = useRouter();
const utilisateur = ref({
    nom: null,
    prenom: null,
    email: null,
    mot_de_passe: null,
    date_de_naissance: null,
    telephone: null,
    photo: null,
    roleId: null,
});

const address = ref({ street: '', city: '' });
const selectedPermission = ref('');
const roles = ref([]);
const permissions = ref([]);

// Fetch roles and permissions on mounted
onMounted(() => {
    getAllRoles().then(response => roles.value = response.data);
    getAllPermissions().then(response => permissions.value = response.data);
});

const submitForm = () => {
    const userData = {
        // User data
        ...utilisateur.value,
        photo: utilisateur.value.photo ? "photo" : null,
        roleId: utilisateur.value.roleId,
    };
    
    const addressData = {
        ...address.value
    };
    
    Promise.all([
        addUser(userData),
        addAddress(addressData)
        // Can also handle permission if needed
    ]).then(() => {
        console.log('User and address added successfully');
        router.push('/');
    }).catch(err => {
        console.error('Error:', err);
    });
};

const handlePhotoUpload = e => {
    utilisateur.value.photo = e.target.files[0];
};
</script>

