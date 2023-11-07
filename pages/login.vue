<template>
    <div class="container mx-auto">
        <div class="bg-red-500 mb-5">Login Page</div>

        <div>
            <b class="block mb-3">Form login</b>

            <div class="mb-3">
                <input v-model="formData.email" class="border border-gray-400 rounded-md p-3" placeholder="email"/>
            </div>
            <div class="mb-3">
                <input v-model="formData.password" class="border border-gray-400 rounded-md p-3" placeholder="password" type="password"/>
            </div>

            <button @click="handelLogin()" class="bg-green-500 text-white rounded-md px-5 py-2 m-2">SUBMIT</button>
            
            <div v-if="generalPending">
                Loading
            </div>

            <div>
                {{auth.user}}
            </div>
        </div>
    </div>
</template>

<script setup>
const auth =  useAuthStore();

const formData = ref({
    email: "admin@gmail.com",
    password: "admin1812"
})

const generalPending = ref(false)

async function handelLogin(){
    generalPending.value = true;

    const {pending, data, error} = await auth.login(formData.value)

    if(!pending.value){
        generalPending.value = false;
        const access_token = useCookie('access_token');
        const refresh_token = useCookie('refresh_token');
        access_token.value  = data.value.access_token;
        refresh_token.value = data.value.refresh_token;
        return navigateTo("")
    }
    
}
</script>