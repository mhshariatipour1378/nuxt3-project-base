export default defineNuxtPlugin(async nuxtApp => {
    const auth = useAuthStore();

    if(!auth.user){
        const {error: getUserError} = await auth.getUser();

        if(getUserError?.value?.statusCode == 403){
            
            const access_token = useCookie('access_token');
            const refresh_token = useCookie('refresh_token');

            if(refresh_token.value){
                const {data, error: errorRefreshToken} = await useApiRefreshToken("user/refreshtoken");
                
                if(!errorRefreshToken?.value?.statusCode){
                    access_token.value  = data.value.access_token;
                    refresh_token.value = data.value.refresh_token;

                    await auth.getUser(data.value.access_token);
                }else{
                    access_token.value  = null;
                    refresh_token.value = null;
                }

            }

        }

    }
})