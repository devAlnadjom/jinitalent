<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    placeholder: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);
</script>

<template>
    <textarea
        class="text-gray-900 w-full border-gray-300 focus:border-orange-200 focus:ring focus:ring-orange-100 focus:ring-opacity-50 rounded-md shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder || null"
    >
    </textarea>
</template>
