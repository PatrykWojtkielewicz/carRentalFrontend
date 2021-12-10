<template>
    <nav id="header" class="w-full z-30 top-0 bg-gray-600 p-4">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 text-white">
            <p class="text-left">
                <router-link to="/">
                    <i class="fas fa-car fa-5x"></i>
                </router-link>
            </p>
            <p class="text-2xl">
                <!-- TODO: show certain links when logged in -->
                <router-link to="/login" class="pl-8">Login</router-link>
                <router-link to="/register" class="pl-8">Register</router-link>
                <router-link to="/logout" class="pl-8">Logout</router-link>
                <router-link to="/users" class="pl-8">Users</router-link>
                <router-link to="/rented" class="pl-8">Rented</router-link>
                <router-link to="/rent" class="pl-8">Rent</router-link>
            </p>
        </div>
    </nav>
    <router-view class=""/>
    <footer id="footer" class="w-full z-30 top-0 bg-gray-600 text-white text-center p-6">
        <p class="inline text-center">Blog &copy;2021</p>
    </footer>
</template>
