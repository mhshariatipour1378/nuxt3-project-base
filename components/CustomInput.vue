<template>
    <div class="holder-input">

        <template v-if="type == 'text'">
            <label v-if="label" class="block">
                {{label}}
            </label>
            <Field 
                v-on:input="updateValue($event.target.value)"
                :rules="{required}"
                :value="props.modelValue"
                :name="name" 
                :type="type"
            />
            <ErrorMessage :name="name" class="block text-xs text-red-500" />
        </template>

        <template v-else-if="type == 'email'">
            <label v-if="label" class="block">
                {{label}}
            </label>
            <Field 
                v-on:input="updateValue($event.target.value)"
                :rules="{required, email: true}"
                :value="props.modelValue"
                :name="name" 
                :type="type"
            />
            <ErrorMessage :name="name" class="block text-xs text-red-500" />
        </template>

        <template v-else-if="type == 'password'">
            <label v-if="label" class="block">
                {{label}}
            </label>
            <Field 
                v-on:input="updateValue($event.target.value)"
                :rules="{required, min: 8}"
                :value="props.modelValue"
                :name="name" 
                :type="type"
            />
            <ErrorMessage :name="name" class="block text-xs text-red-500" />
        </template>

        <template v-else-if="type == 'number'">
            <label v-if="label" class="block">
                {{label}}
            </label>
            <Field 
                v-on:input="updateValue($event.target.value)"
                :rules="{required}"
                :value="props.modelValue"
                :name="name" 
                :type="type"
            />
            <ErrorMessage :name="name" class="block text-xs text-red-500" />
        </template>

        <template v-else-if="type == 'textarea'">
            <label v-if="label" class="block">
                {{label}}
            </label>
            <Field 
                v-on:input="updateValue($event.target.value)"
                :rules="{required}"
                :value="props.modelValue"
                :name="name"  
                :type="type"
                as="textarea"
                rows="5"
            />
            <ErrorMessage :name="name" class="block text-xs text-red-500" />
        </template>

    </div>
</template>


<script setup>
const props = defineProps({
    name:{
        type: String,
        required: true
    },
    required:{
        type: Boolean,
        default: false
    },
    label:{
        type: String,
    },
    placeholder:{
        type: String,
    },
    type:{
        type: String,
        required: true,
        default: 'text'
    },
    modelValue:{
        type: String,
        required: true
    }
})

//update input value
const emit = defineEmits(['update:modelValue']);
function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.holder-input{
    @apply mb-5;

    input, textarea{
        @apply border resize-none;
    }

}
</style>
