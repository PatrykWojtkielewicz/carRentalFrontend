<template>
    <div class="flex flex-col items-center">
        <table v-if="!loading" class="w-3/5 text-center">
            <tr class="border-black border-b-2">
                <th class="pb-4">ID</th>
                <th class="pb-4">Imie</th>
                <th class="pb-4">Nazwisko</th>
                <th class="pb-4">Adres e-mail</th>
                <th class="pb-4">Uprawnienia</th>
            </tr>
            <tr v-for="user in data.results" :key="user.id">
                <td class="pt-2">{{ user.id }}</td>
                <td class="pt-2">{{ user.name }}</td>
                <td class="pt-2">{{ user.surname }}</td>
                <td class="pt-2">{{ user.email }}</td>
                <td class="pt-2">{{ user.permission_id }}</td>
            </tr>
        </table>
        <p v-else-if="error" class="flex flex-col items-center w-full">
            {{ error.message }}
        </p>
        <p v-else class="flex flex-col items-center w-full">
            Ładowanie...
        </p>
    </div>
</template>

<script>
    import { ref } from 'vue';

    const axios = require('axios');

    export default {
        name: 'Cars',
        setup() {
            const data = ref(null);
            const loading = ref(true);
            const error = ref(null);

            function getToken(){
                const token = sessionStorage.getItem('token')
                return token
            }
            
            axios.get('http://127.0.0.1:8000/api/users', {
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
