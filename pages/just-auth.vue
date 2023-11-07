<template>
    <div>
        Just for user login
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ['auth']
    })
</script>