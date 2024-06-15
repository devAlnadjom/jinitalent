<script setup>
import JetNavLink from '@/Components/NavLink.vue';

defineProps({
    label: { default: "Informations de base"},
    btnLabel: { default: "Ajouter"}
})

const emit = defineEmits (["addNew"])

</script>
<template>
<div class="flex justify-center gap-4 items-center">
    <div class="flex">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ label || 'Informations CV'}}
        </h2>
    </div>
    <div class="flex-1 flex items-center justify-end">

        <!-- Navigation Links -->
        <div class="hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer">
            <JetNavLink :href="route('portal.cv.index')" :active="route().current('portal.cv.index')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-flex">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <span class="inline-flex">Informations de bases</span>
            </JetNavLink>
        </div>
        <div class="hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer">
            <JetNavLink :href="route('portal.cv.education')" :active="route().current('portal.cv.education')">
                    Education
            </JetNavLink>
        </div>
        <div class="hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer">
            <JetNavLink :href="route('portal.cv.experience')" :active="route().current('portal.cv.experience')">
                    Experiences
            </JetNavLink>
        </div>
        <button @click="emit('addNew')"
            class="hidden space-x-4 p-2 px-4 sm:-my-px sm:ml-6 sm:flex  rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
            <span class=" flex-1 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

            </span> {{ btnLabel }}
        </button>
    </div>
</div>
</template>

