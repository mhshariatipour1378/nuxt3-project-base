<template>
    <div class="container mx-auto">
        <div class="text-3xl mb-5">Login Page</div>

        <div>
            <b class="block mb-3">Form login</b>

            <Form @submit="handelLogin()">
                <div class="mb-3">
                    <custom-input 
                        v-model="formData.email"
                        type="email"
                        placeholder="Enter email" 
                        name="email"
                        required
                    ></custom-input>
                </div>
                <div class="mb-3">
                    <custom-input 
                        v-model="formData.password"
                        type="password"
                        placeholder="Password" 
                        name="password"
                        required
                    ></custom-input>
                </div>

                <button @click="handelLogin()" class="bg-green-500 text-white rounded-md px-5 py-2 m-2">SUBMIT</button>
            </Form>
            
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