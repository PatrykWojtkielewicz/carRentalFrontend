<template>
    <form action="" method="POST">
        <div class="flex flex-col items-center w-full">
            <label for="name" class="w-2/5">
                <p class="pb-1 text-left text-2xl">Imie</p>
                <input type="text" id="name" name="name" placeholder="Imie" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <label for="surname" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Nazwisko</p>
                <input type="text" id="surname" name="surname" placeholder="Nazwisko" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <label for="email" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Adres e-mail</p>
                <input type="text" id="email" name="email" placeholder="E-mail" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <label for="password" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Hasło</p>
                <input type="password" id="password" name="password" placeholder="********" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <label for="confirmPassword" class="w-2/5 mt-4">
                <p class="pb-1 text-left text-2xl">Potwierdź hasło</p>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="********" class="shadow-lg text-md p-4 w-full"/>
            </label>
            <input type="submit" name="submit" value="Zarejestruj się" class="w-2/5 mt-8 py-2 rounded-xl bg-gray-100 hover:bg-gray-300" />
        </div>
    </form>
</template>