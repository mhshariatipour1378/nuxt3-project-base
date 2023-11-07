<template>
    <div>Homepage</div>
    <Form @submit="onSubmit" ref="myForm" class="p-5"> 

        <custom-input 
            v-model="inputs.email" 
            required
            type="password" 
            name="test"
            label="label"
        />

        <check-box 
            v-model="inputs.check"
            label="test"
        />

        <button>Submit</button>
    </Form>
</template>


<script setup>
const { data, pending } = useApiPrivate("public/post/فیلم-پرفروش-تاریخ-سینما");

const inputs = reactive({
    email: "",
    check: false
})

const formEl = ref("myForm")
function onSubmit(values, { resetForm }){
    resetForm();
}
</script>
