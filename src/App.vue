<template>
    <nav id="header" class="w-full z-30 top-0 bg-gray-100 p-4">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <p class="text-left">
                <router-link to="/">
                    <img alt="Vue logo" src="./assets/logo.png" class="w-1/4 h-1/4"/>
                </router-link>
            </p>
            <p class="text-2xl">
                <router-link to="/login" class="pl-8">Login</router-link>
                <router-link to="/register" class="pl-8">Register</router-link>
            </p>
        </div>
    </nav>
    <router-view class="pt-8"/>
</template>

<script>
</script>
