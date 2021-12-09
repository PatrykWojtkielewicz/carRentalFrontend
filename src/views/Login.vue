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
            <button @click="fetchData" name="submit" class="w-2/5 mt-8 py-2 rounded-xl bg-gray-100 hover:bg-gray-300">Zaloguj</button>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    // import createApp from 'vue'

    // Vue.createApp({
    //     data() {
    //         return {
    //             name: 'Vue.js'
    //         }
    //     },
    //     methods: {
    //         fetchData() {
    //             console.log("1");
    //             let a = fetch('http://127.0.0.1:8000/api/login', {
    //                 method: 'post',
    //                 headers: {
    //                     Accept: 'application/json',
    //                 },
    //                 body: {
    //                     email: "abc",
    //                     password: "def"
    //                 }
    //             })
    //             console.log(a);
    //         return a;
    //     }
    //     }
    // }).mount('#event-with-method')
</script>
