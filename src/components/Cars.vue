<template>
    <div class="flex flex-col items-center">
        <table v-if="!loading" class="w-3/5">
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
    import { ref,onMounted } from 'vue';
    
    const token = '26|EUzuPg3iIE5Z24M0QUCK7MohixRpq2opFGsUt36O'

    export default {
        name: 'Cars',
        props: {

        },
        setup() {
            const data = ref(null);
            const loading = ref(true);
            const error = ref(null);

            function fetchData(){
                loading.value = true;
                return fetch('http://127.0.0.1:8000/api/users', {
                    method: 'get',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(res => {
                    if(!res.ok) {
                        const error = new Error(res.statusText);
                        error.json = res.json();
                        throw error;
                    }
                    return res.json();
                })
                .then(json => {
                    data.value = json;
                    console.log(data.value);
                })
                .catch(err => {
                    error.value = err;
                    if(err.json){
                        return err.json.then(json => {
                            error.value.message = json.mesage;
                            error.value.message = token
                        })
                    }
                })
                .then(() => {
                    loading.value = false;
                })
            }

            onMounted(() => {
                fetchData();
            });

            return {
                data,
                loading,
                error
            }
        }
    }
</script>
