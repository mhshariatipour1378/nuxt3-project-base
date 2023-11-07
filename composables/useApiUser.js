export function useApiUser(token){

    const runtimeConfig = useRuntimeConfig();
    return useFetch(runtimeConfig.public.apiBase + runtimeConfig.public.pathGetUser, {
        headers:{
            Authorization: `Bearer ${token}`, 
        },
    })

}