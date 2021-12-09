<template>
    <div class="flex flex-col items-center w-full">
        <p class="text-2xl">Logged out</p>
    </div>
</template>

<script>
    sessionStorage.removeItem('token')
</script>
