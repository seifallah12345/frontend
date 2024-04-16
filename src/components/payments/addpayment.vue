<template>
    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="paymentMethod" class="form-label">Payment Method</label>
            <input type="text" class="form-control" id="paymentMethod" v-model="payment.paymentMethod">
        </div>
        <button type="submit" class="btn btn-primary">Add Payment</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import usePayment from '@/components/services/servicepayment.js';

const { addPayment } = usePayment();

const router = useRouter();
const payment = ref({
    paymentMethod: ''
});

const submitForm = () => {
    const paymentData = {
        paymentMethod: payment.value.paymentMethod
    };

    addPayment(paymentData)
        .then(res => {
            console.log(res);
            router.push('/');
        })
        .catch(err => console.error('Error:', err));
};
</script>
