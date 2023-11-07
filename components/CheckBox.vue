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
    @apply flex gap-2 items-center cursor-pointer; 
}

.checkbox {
    @apply flex items-center justify-center;
    position: relative;
    display: inline-block;
    z-index: 0;
    width: 21px;
    height: 21px;
    
    input{
        width: 100%;
        height: 100%;
        display: block;
    }

    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: .3s;
        border: 1px solid #000;

        &:checked {
            background-color: red;
        }
    }

    svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
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
