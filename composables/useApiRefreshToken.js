export function useApiRefreshToken(path){

    const refresh_token =  useCookie('refresh_token');
    const runtimeConfig = useRuntimeConfig();
    return useFetch(runtimeConfig.public.apiBase + runtimeConfig.public.pathRefreshToken, {
        method: 'post',
        body: {
            refresh_token: refresh_token
        }
    })

}