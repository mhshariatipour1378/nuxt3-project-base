<template>
    <div>

        <label class="holder-checkbox">
            <div class="checkbox bounce">
                <input 
                    v-model="checked"
                    type="checkbox"
                >
                <svg viewBox="0 0 21 21">
                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
            </div>
            <span v-if="label">
                {{label}}
            </span>
        </label>

    </div>
</template>


<script setup>
const props = defineProps({
    modelValue:{
        type: Boolean,
        required: true
    },
    label:{
        type: String,
        default: ""
    }
})
const checked = ref(props.modelValue)

//update input value
const emit = defineEmits(['update:modelValue']);
watch(checked, ()=>{
    emit('update:modelValue', checked)
})
</script>

<style scoped lang="scss">

.holder-checkbox{
    @apply inline-flex gap-1.5 items-center cursor-pointer; 
}

.checkbox {
    @apply relative inline-block flex items-center justify-center rounded-[4px] border border-gray-300 overflow-hidden duration-300 z-0;
    width: 20px;
    height: 20px;
    
    input{
        @apply block w-full h-full;
    }

    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        @apply relative outline-none bg-transparent cursor-pointer  m-0 p-0;

        &:checked {
            @apply bg-green-500;
        }
    }

    svg {
        @apply absolute;
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        position: absolute;
        top: 5%;
        left: 5%;
        width: 90%;
        transform: scale(var(--scale, 1)) translateZ(0);
    }

    &.bounce {
        stroke: #fff;
        input {
            &:checked {
                & + svg {
                    animation: bounce .4s linear forwards;
                }
            }
        }
        svg {
            --scale: 0;
        }
    }

}

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}
</style>
