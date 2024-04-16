<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="connecter" class="login-form">
        <h1 class="login-title">Welcome Back</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="loginInfo.email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="mdp">Password</label>
          <input type="password" id="mdp" v-model="loginInfo.mot_de_passe" placeholder="Enter your password">
        </div>
        <button type="submit" class="login-button">Log In</button>
      </form>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import useAuth from '@/components/services/auth/serviceauth.js';
import { useRouter } from "vue-router";

const { login } = useAuth();
const router = useRouter();

const loginInfo = ref({
  email: '',
  mot_de_passe: ''
});

const connecter = () => {
  login(loginInfo.value)
      .then(res => {
          console.log('User logged in successfully', res.data);
          router.push({ name: 'UI' });  // Navigate using the name of the route
      })
      .catch(err => {
          console.error('Erreur connexion', err);
          alert("Login failed, please check your credentials.");  // Display an error message
      });
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
}

.login-box {
  padding: 40px;
  background: rgba(255, 255, 255, 0.95); /* Slightly transparent white */
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px); /* Blur the background under the box */
}

.login-title {
  font-size: 26px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #666;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #667eea;
  box-shadow: 0 0 8px rgba(102, 126, 234, 0.6);
}

.login-button {
  width: 100%;
  background-color: #667eea;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.login-button:hover {
  background-color: #5a6edc;
  transform: translateY(-2px);
}

.login-button:active {
  background-color: #4e62cc;
  transform: translateY(0);
}
</style>

