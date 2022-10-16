<script setup>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import PortalLayout from '@/Layouts/PortalLayout.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const props = defineProps({
    jobs: Object,
    filters: Object,
});

const form = useForm({
    search: '',
    trashed: null
});

watch(form, throttle(function () {
    Inertia.get(route('portal.index'), pickBy(form), { preserveState: true })
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
                        <!--button
                            class="flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded"
                            @click="Inertia.visit(route('jobs.create'))">Add New</button-->

                    </div>
                </div>
                <div class="overflow-x-auto w-full">

                    <ul class="w-full border bg-white rounded-lg overflow-hidden mb-20">
                        <Link :href="route('portal.show',job.id)" v-for="job in jobs.data" :key="job.id"
                            class="text-gray-700">
                            <li class="hover:bg-orange-50 border-b border-orange-50 p-3">
                                <div class="md:flex justify-between text-sm ">
                                    <div class="item-start md:w-1/2">
                                        <h3 class="font-bold text-orange-600"> {{job.job_tite}}</h3>
                                        <div class="inline-flex text-gray-600 font-light mt-1">
                                            <div class="mr-6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                               IT
                                            </div>
                                            <div class=" ml-8 font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5  inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                {{job?.location}}
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            {{job?.organization?.name}}
                                        </div>
                                    </div>

                                    <div class="items-end">
                                        <div class="flex md:flex-row-reverse">
                                            <span
                                            class="font-semibold p-1 rounded-lg  text-orange-600" :class="{'bg-green-200 text-green-700 ':job.style=='Full Remote'}">
                                            <svg v-if="job.style=='Full Remote'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 inline">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                            </svg>

                                                {{job.style}}</span>

                                        </div>
                                       <div class=" text-gray-600 font-light mt-2 flex md:flex-row-reverse gap-6">
                                            <div class="">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                </svg>
                                                <span class="font-semibold p-1 text-xs rounded ">{{job?.style}} </span>
                                            </div>
                                            <div v-if="job?.salary && job?.salary!=0 " class="font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
                                                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                    </svg>

                                                {{job?.salary}} $/m
                                            </div>
                                        </div>
                                        <!--div>
                                            {{ dayjs(job?.date_start_job).fromNow() }}
                                        </div-->

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
