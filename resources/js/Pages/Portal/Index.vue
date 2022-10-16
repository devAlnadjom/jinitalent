<script setup>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import PortalLayout from '@/Layouts/PortalLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';

const props = defineProps({
    jobs: Object,
    filters: Object,
});

const form = useForm({
    search: '',
    trashed: null
});

watch(form, throttle(function () {
    Inertia.get(route('jobs.index'), pickBy(form), { preserveState: true })
}, 900));

const reset = () => { form = mapValues(form, () => null) }

</script>

<template>
    <PortalLayout title="Portal">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Jobs List
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div>
                    <div class="flex mb-4 w-full justify-between">
                        <div class="flex flex-row w-3/5">
                            <div class=" w-44">
                                <select v-model="form.trashed" class=" rounded-l py-1 w-full border-r-0">
                                    <option :value="null">Category</option>
                                    <option value="0">IT</option>
                                    <option value="1">Administration</option>
                                    <option value="2">Bitcoin Field</option>
                                    <option value="3">Human Ressource</option>
                                </select>
                            </div>
                            <div class="flex w-full bg-white shadow rounded">
                                <input class="relative w-full px-4 py-1 rounded-r -focus:ring border" autocomplete="off"
                                    type="text" name="search" placeholder="Search…" v-model="form.search" />
                            </div>
                            <button class="ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500 "
                                type="button" @click="reset()">Reset</button>

                        </div>
                        <button
                            class="flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded"
                            @click="Inertia.visit(route('jobs.create'))">Add New</button>

                    </div>
                </div>
                <div class="overflow-x-auto w-full">

                    <ul class="w-full border bg-white rounded-lg overflow-hidden mb-20">
                        <Link :href="route('jobs.show',job.id)" v-for="job in jobs.data" :key="job.id"
                            class="text-gray-700">
                            <li class="hover:bg-orange-50 border-b border-orange-50 p-3">
                                <div class="flex justify-between">
                                    <div class="item-start w-1/2">
                                        <h3 class="font-bold text-orange-600"> {{job.job_tite}}</h3>
                                        <div class="inline-flex text-gray-600 font-light mt-1">
                                            <div class="mr-6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                                Categorie
                                            </div>
                                            <div class=" ml-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                Place
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" items-end">
                                        <span
                                            class="block font-bold p-1 rounded-lg bg-orange-300 text-orange-600">{{job.style}}</span>
                                        <div class="inline-flex text-gray-600 font-light mt-2">
                                            <div class="mr-6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                                {{job.style}}
                                            </div>
                                            <div class=" ml-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                Place
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            {{job?.organization?.name}}
                                        </div>

                                    </div>
                                </div>
                            </li>
                        </Link>
                    </ul>

                </div>
            </div>
        </div>
    </PortalLayout>
</template>
