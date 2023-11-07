export function useApiAuth(path, options){
    const runtimeConfig = useRuntimeConfig();
    return useFetch(runtimeConfig.public.apiBase + path, {
        ...options,
    })
}