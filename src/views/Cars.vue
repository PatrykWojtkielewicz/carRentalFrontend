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
        <p v-if="loading">
            Still loading...
        </p>
        <p v-if="error">
            {{ error }}
        </p>
    </div>
</template>

<script>
    import { ref } from 'vue';
    const axios = require('axios');
    const token = '26|EUzuPg3iIE5Z24M0QUCK7MohixRpq2opFGsUt36O';

    export default {
        name: 'Cars',
        setup() {
            const data = ref(null);
            const loading = ref(true);
            const error = ref(null);
            
            axios.get('http://127.0.0.1:8000/api/users', {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(function (response) {
                data.value = response.data
                loading.value = false
            })
            return {
                data,
                loading,
                error
            }

        }
    }
</script>
