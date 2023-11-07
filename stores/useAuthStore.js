import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', (event)=>{
    const user = ref(null)

    async function login(params){
        const loginRequest  = await useApiAuth("user/login", {
            body: params,
            method: "POST"
        })

        user.value = loginRequest.data.value.user;

        return loginRequest;
    }

    async function signup(){
        //
    }

    async function logout(){
        const access_token = useCookie('access_token');
        const refresh_token = useCookie('refresh_token');
        access_token.value  = null;
        refresh_token.value = null;
        user.value = null;
    }

    async function getUser(token = null){
        const access_token = token ? token : useCookie('access_token').value;
        const getUserRequest =  await useApiUser(access_token);
        
        if(!getUserRequest?.error?.value?.statusCode){
            user.value = getUserRequest.data.value.user;
        }

        return getUserRequest;
    }

    return{
        user,
        login,
        signup,
        logout,
        getUser
    }
})