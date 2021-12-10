<template>
    <div id="login-form">
        <div class="flex flex-col items-center w-full">
            <label for="email" class="w-2/5">
                <p class="pb-1 text-left text-2xl">Adres e-mail</p>
                <input type="text" id="email" name="email" placeholder="E-mail" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <label for="password" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Hasło</p>
                <input type="password" id="password" name="password" placeholder="********" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <p v-if="error" class="text-red-500 pt-2">
                {{ error.message }}
            </p>
            <p v-if="feedback" class="text-green-500 pt-2">
                {{ feedback }}
            </p>
            <button @click="fetchData" name="submit" class="w-2/5 mt-8 py-2 rounded-xl bg-gray-100 hover:bg-gray-300">Zaloguj</button>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    const axios = require('axios');

    export default {
        setup() {
            const error = ref(null)
            const response = ref(null)
            const feedback = ref(null)

            const fetchData = () => {
                let formEmail = document.getElementById('email').value
                let formPassword = document.getElementById('password').value

                axios.post('http://127.0.0.1:8000/api/login', {
                    Accept: 'application/json',
                    email: formEmail,
                    password: formPassword   
                })
                .then(function (res) {
                    response.value = res
                    const token = response.value.data.token
                    sessionStorage.setItem('token', token)
                    feedback.value = "Zalogowano"
                })
                .catch(function (err) {
                    error.value = err
                    error.value = error.value.response.data
                })
            }
            return{
                fetchData,
                error,
                feedback
            }
        }
    }
</script>
