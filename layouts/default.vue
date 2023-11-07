<template>
    <header class="bg-gray-100 mb-5">
        Header
    </header>

    <div v-if="auth?.user">
        <button @click="handelLogout()" class="bg-red-500 text-white rounded-md px-5 py-2 m-2">Logout</button>
    </div>

    <slot/>

    <footer class="bg-gray-200 mt-5">
        Footer
    </footer>
</template>

<script setup>
const auth = useAuthStore();

async function handelLogout(){
    await auth.logout()
}
</script>
