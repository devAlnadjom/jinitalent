<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import JetNavLink from '@/Components/NavLink.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

const props = defineProps({
    jobs: Object,
    organization: Object,
});


const moneditor = ref(null);
const form = useForm({
    search: '',
    trashed: null
});


onMounted(()=>{
    moneditor.value.setHTML(props.jobs?.description);
});
const reset = () => { form = mapValues(form, () => null) }

</script>

<template>
    <AppLayout title="One Job">
        <template #header>
            <div class="w-full flex justify-center gap-4">
                <div class="flex-1">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Jobs / {{ jobs.name}}
                    </h2>
                </div>
                <div class="flex">

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                                <JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                        Jobs detils
                                </JetNavLink>
                            </div>
                            <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                                <JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                        Applications
                                </JetNavLink>
                            </div>
                            <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                                <JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                        Logs
                                </JetNavLink>
                            </div>
                            <button class="hidden space-x-8 p-2 px-4 sm:-my-px sm:ml-10 sm:flex  rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
                               <span class=" flex-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                               </span> Link Candidate
                            </button>
                </div>
            </div>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="w-full flex gap-4">
                    <!--Details-->
                    <div class=" md:w-2/3 lg:w-3/4 ">
                        <div class="border rounded-md p-4 bg-white">
                            <h3 class="font-semibold text-gray-800 leading-tight">Details</h3>
                            <div class=" w-full grid md:grid-cols-2 lg:grid-cols-3">
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">COD :</h5>
                                    <span class="font-semibold">{{jobs?.code}} </span>
                                </div>
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Title :</h5>
                                    <span class="font-semibold">{{jobs?.name}} </span>
                                </div>
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Type :</h5>
                                    <span class="font-semibold">{{jobs?.style}} </span>
                                </div>
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Requisition :</h5>
                                    <span class="font-semibold">0/4 </span>
                                </div>
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Location :</h5>
                                    <span class="font-semibold p-1 bg-green-200 text-green-700 text-xs rounded ">{{jobs?.style}} </span>
                                </div>
                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Public :</h5>
                                    <span class="font-semibold text-green-600">Yes </span>
                                </div>

                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Due date :</h5>
                                    <span class="font-semibold">{{jobs?.date_start_job}} </span>
                                </div>

                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Salary :</h5>
                                    <span class="font-semibold">{{jobs?.salary}} </span>
                                </div>


                                <div class="flex gap-x-2 text-sm mt-4">
                                    <h5 class=" text-gray-600">Level :</h5>
                                    <span class="font-semibold">{{jobs?.level}} </span>
                                </div>
                            </div>
                        </div>

                        <!--Description-->
                        <div class="border rounded-md p-4 mt-4 bg-white px-4 pb-8">
                            <h3 class="font-semibold text-gray-800 leading-tight">Description</h3>
                            <div  class=" w-full mt-3 border-t text-sm pt-2">

                                <QuillEditor toolbar="#my-toolbar" theme="bubble"  ref="moneditor"  :read-only="true"/>
                                <template>
                                    <div id="my-toolbar">
                                    </div>
                                </template>


                            </div>


                            <h3 class="font-semibold text-gray-800 leading-tight mt-8">Qualifiqations</h3>
                            <div class=" w-full mt-3 border-t text-sm pt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident molestiae, voluptatum deserunt accusamus perspiciatis ut.
                                Obcaecati culpa aliquid iusto quia minus corporis esse animi mollitia deleniti. Reiciendis, dolores eaque.
                                <br />

                            </div>
                        </div>

                    </div>


                    <!--Side Info-->
                    <div class="flex-1">

                        <!--Company Info-->
                        <div class="border rounded-md p-4 bg-white">
                            <h3 class="font-semibold text-gray-800 leading-tight">Company</h3>
                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2">
                                <h5 class=" text-gray-600">Name </h5>
                                    <span class="font-semibold">{{ organization?.name}} </span>
                            </div>
                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2">
                                <h5 class=" text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>

                                </h5>
                                    <span class="font-semibold">{{ organization?.address}} </span>
                            </div>
                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2">
                                <h5 class=" text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>

                                </h5>
                                    <span class="font-semibold">{{ organization?.email}}  </span>
                            </div>
                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2">
                                <h5 class=" text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                </h5>
                                    <span class="font-semibold">{{ organization?.phone_number}}  </span>
                            </div>
                        </div>

                        <!--Candidates Info-->
                        <div class="border rounded-md p-4 bg-white mt-4">
                            <h3 class="font-semibold text-gray-800 leading-tight">Candidates</h3>
                            <span class="text-orange-800 text-sm"> Last application added...</span>

                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row  gap-2">
                                <span class=" text-gray-600 text-xs font-bold bg-orange-300 rounded-full items-center w-10 h-10 p-3">MA</span>
                                <div class="font-semibold">
                                    <span>{{ organization?.address}} </span>
                                    <span class="text-xs text-orange-500 block"> New</span>
                                </div>
                            </div>

                            <div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row  gap-2">
                                <span class=" text-gray-600 text-xs font-bold bg-orange-300 rounded-full items-center w-10 h-10 p-3">MA</span>
                                <div class="font-semibold">
                                    <span>{{ organization?.address}} </span>
                                    <span class="text-xs text-green-500 block"> Hired</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </AppLayout>
</template>