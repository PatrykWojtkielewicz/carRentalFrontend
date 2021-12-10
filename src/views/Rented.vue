<template>
    <div class="flex flex-col items-center">
        <table v-if="!loading" class="w-3/5 text-center">
            <tr class="border-black border-b-2">
                <th class="pb-4">Car ID</th>
                <th class="pb-4">Tenant</th>
                <th class="pb-4">User ID</th>
                <th class="pb-4">Name</th>
                <th class="pb-4">Model</th>
                <th class="pb-4">Rental date</th>
                <th class="pb-4">Return date</th>
            </tr>
            <tr v-for="car in data.results" :key="car.id">
                <td class="pt-2">{{ car.car_id }}</td>
                <td class="pt-2">{{ car.username }}</td>
                <td class="pt-2">{{ car.user_id }}</td>
                <td class="pt-2">{{ car.name }}</td>
                <td class="pt-2">{{ car.model }}</td>
                <td class="pt-2">{{ car.rental_date }}</td>
                <td class="pt-2">{{ car.return_date }}</td>
            </tr>
        </table>
        <p v-if="loading">
            Ładowanie...
        </p>
        <p v-if="error">
            {{ error.message }}
        </p>
    </div>
</template>

<script>
    import { ref } from 'vue';
    const axios = require('axios');

    export default {
        name: 'Rented',
        setup() {
            const data = ref(null);
            const loading = ref(true);
            const error = ref(null);

            function getToken(){
                const token = sessionStorage.getItem('token')
                return token
            }

            axios.get('http://127.0.0.1:8000/api/rented', {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${getToken()}`
                }
            })
            
            .then(function (response) {
                data.value = response.data
                error.value = false
                loading.value = false
            })
            .catch(function (err) {
                error.value = err
                error.value = error.value.response.data
            })
            return {
                data,
                loading,
                error
            }

        }
    }
</script>
