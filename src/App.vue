<template>
    <nav id="header" class="w-full z-30 top-0 bg-gray-100 p-4">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <p class="text-left">
                <router-link to="/">
                    <i class="fas fa-car fa-5x"></i>
                </router-link>
            </p>
            <p class="text-2xl">
                <router-link to="/login" class="pl-8">Login</router-link>
                <router-link to="/register" class="pl-8">Register</router-link>
                <router-link to="/logout" class="pl-8">Logout</router-link>
                <router-link to="/users" class="pl-8">Users</router-link>
                <router-link to="/rented" class="pl-8">Rented</router-link>
            </p>
        </div>
    </nav>
    <router-view class="pt-8"/>
</template>
