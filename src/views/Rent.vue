<template>
    <div id="rent-form">
        <div v-if="!loading" class="flex flex-col items-center w-full">
            <h2 class="pb-8 text-3xl">Wybierz samochód który chcesz wynająć</h2>
            <table class="w-3/5 text-center">
                <tr class="border-black border-b-2">
                    <th class="pb-4">ID</th>
                    <th class="pb-4">Nazwa</th>
                    <th class="pb-4">Model</th>
                    <th class="pb-4">Rok produkcji</th>
                    <th class="pb-4">Przebieg</th>
                    <th class="pb-4">Wynajmij</th>
                </tr>
                <tr v-for="car in data.cars" :key="car.id">
                    <td class="pt-2">{{ car.id }}</td>
                    <td class="pt-2">{{ car.name }}</td>
                    <td class="pt-2">{{ car.model }}</td>
                    <td class="pt-2">{{ car.year }}</td>
                    <td class="pt-2">{{ car.mileage }} km</td>
                    <td class="pt-2"><input type="radio" name="rent" :value="car.id"></td>
                </tr>
            </table>
            <div class="w-3/5 flex flex-row">
                <label for="rental_date" class="w-1/2 mt-4 p-4">
                    <p class="pb-1 text-left text-2xl">Data wypożyczenia</p>
                    <input type="date" id="rental_date" name="rental_date" placeholder="Rental date" class="shadow-lg text-md p-4 w-full"/>
                    <!-- <p v-if="error.data.errors.surname" class="text-red-500 pt-2">
                        *{{ error.data.errors.surname[0] }}
                    </p> -->
                </label>
                <label for="return_date" class="w-1/2 mt-4 p-4">
                    <p class="pb-1 text-left text-2xl">Data zwrotu</p>
                    <input type="date" id="return_date" name="return_date" placeholder="Data zwrotu" class="shadow-lg text-md p-4 w-full"/>
                    <!-- <p v-if="error.data.errors.email" class="text-red-500 pt-2">
                        *{{ error.data.errors.email[0] }}
                    </p> -->
                </label>
            </div>
            <button  name="submit" class="w-2/5 mt-8 py-2 rounded-t-xl bg-gray-100 hover:bg-gray-300">Wypożycz samochód</button>
        </div>
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
        setup() {
            const error = ref(null)
            const data = ref(null)
            const loading = ref(true)

            function getToken(){
                const token = sessionStorage.getItem('token')
                return token
            }

            axios.get('http://127.0.0.1:8000/api/rent', {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${getToken()}`
                }
            })
            .then(function (res) {
                data.value = res.data
            })
            .catch(function (err) {
                error.value = err
                error.value = error.value.response.data
            })
            .then(() =>{
                loading.value = false
            })

            return{
                data,
                error,
                loading
            }
        }
    }
</script>