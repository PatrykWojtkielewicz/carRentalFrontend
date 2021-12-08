<template>
    <nav id="header" class="w-full z-30 top-0 bg-gray-100 p-4">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <p class="text-left">
                <img alt="Vue logo" src="./assets/logo.png" class="w-1/4 h-1/4"/>
            </p>
            <p class="text-2xl">
                Vue.JS
            </p>
        </div>
    </nav>
    <Cars class="pt-8"/>
</template>

<script>
    import Cars from './components/Cars.vue'

    export default {
        name: 'App',
        components: {
            Cars
        }
    }
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
</style>
