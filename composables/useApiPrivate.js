export function useApiPrivate(path, options = {}){

    const runtimeConfig = useRuntimeConfig();
    const access_token =  useCookie('access_token');

    options.headers={
        ...options.headers,
        Authorization: `Bearer ${access_token.value}`, 
    }

    return useFetch(runtimeConfig.public.apiBase + path, {
        ...options,
    })

}