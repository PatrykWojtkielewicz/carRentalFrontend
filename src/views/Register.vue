<template>
    <div id="register-form">
        <div class="flex flex-col items-center w-full">
            <label for="name" class="w-2/5">
                <p class="pb-1 text-left text-2xl">Imie</p>
                <input type="text" id="name" name="name" placeholder="Imie" class="shadow-lg text-md p-4 w-full"/>
                <p v-if="error" class="text-red-500 pt-2">
                    *{{ error.name[0] }}
                </p>
            </label>
            <label for="surname" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Nazwisko</p>
                <input type="text" id="surname" name="surname" placeholder="Nazwisko" class="shadow-lg text-md p-4 w-full"/>
                <p v-if="error" class="text-red-500 pt-2">
                    *{{ error.surname[0] }}
                </p>
            </label>
            <label for="email" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Adres e-mail</p>
                <input type="text" id="email" name="email" placeholder="E-mail" class="shadow-lg text-md p-4 w-full"/>
                <p v-if="error" class="text-red-500 pt-2">
                    *{{ error.email[0] }}
                </p>
            </label>
            <label for="password" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Hasło</p>
                <input type="password" id="password" name="password" placeholder="********" class="shadow-lg text-md p-4 w-full"/>
                <p v-if="error" class="text-red-500 pt-2">
                    *{{ error.password[0] }}
                </p>
            </label>
            <label for="confirmPassword" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Potwierdź hasło</p>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="********" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <p v-if="feedback" class="text-green-500 pt-2">
                {{ feedback }}
            </p>
            <button @click="fetchData" name="submit" class="w-2/5 mt-8 py-2 rounded-xl bg-gray-100 hover:bg-gray-300">Zarejestruj się</button>
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
                let formName = document.getElementById('name').value
                let formSurname = document.getElementById('surname').value
                let formEmail = document.getElementById('email').value
                let formPassword = document.getElementById('password').value
                let fromConfirmPassword = document.getElementById('confirmPassword').value

                axios.post('http://127.0.0.1:8000/api/register', {
                    Accept: 'application/json',
                    name: formName,
                    surname: formSurname,   
                    email: formEmail,   
                    password: formPassword,   
                    password_confirmation: fromConfirmPassword,   
                })
                .then(function (res) {
                    response.value = res
                    const token = response.value.data.token
                    sessionStorage.setItem('token', token)
                    feedback.value = "Zarejestrowano"
                })
                .catch(function (err) {
                    error.value = err
                    error.value = error.value.response.data.errors
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