<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import PortalLayout from '@/Layouts/PortalLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import JetNavLink from '@/Components/NavLink.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
//import JetDialogModal from '@/Components/DialogModal.vue';

import JetButton from '@/Components/Button.vue';
import JetFormSection from '@/Components/FormSection.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetLabel from '@/Components/Label.vue';
import JetActionMessage from '@/Components/ActionMessage.vue';
import JetSecondaryButton from '@/Components/SecondaryButton.vue';
import JetCheckbox from '@/Components/Checkbox.vue';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const props = defineProps({
    jobs: Object,
    organization: Object,
    candidates: Object,
});

const moneditor = ref(null);
const openApplicationForm = ref(false);
const form = useForm({
    search: '',
    trashed: null
});

const applicationForm = useForm({
    position_id: props.jobs?.id,
    candidate_id: null,
    ratings: 3,
    source: '',
});

const submitApplication =() =>{
    applicationForm.post(route('applications.store'), {
        //preserveScroll: true,
        onSuccess: () => {applicationForm.candidate_id = null, openApplicationForm.value=false},
        onError: (e) => {console.log(e) },
    });
};
onMounted(()=>{
    setTimeout(()=>{moneditor.value.setHTML(props.jobs?.description)},100);
});
const reset = () => { form = mapValues(form, () => null) }

</script>

<template>
    <PortalLayout title="One Job">
        <template #header>
            <div class="w-full flex justify-center gap-4">
                <div class="flex-1">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Jobs / {{ jobs.name}}
                    </h2>
                </div>
                <div class="flex">

                            <!--button @click="openApplicationForm=true"
                                class="hidden space-x-8 p-2 px-4 sm:-my-px sm:ml-10 sm:flex  rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
                               <span class=" flex-1 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>

                               </span> Link Candidate
                            </button-->
                </div>
            </div>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="w-full md:flex gap-4">
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
                                    <span class="font-semibold"> {{ dayjs(jobs?.date_start_job).fromNow() }} </span>
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
                                <QuillEditor  theme="bubble"  ref="moneditor"  :read-only="true"/>

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


                        </div>


                    </div>
                </div>

            </div>


        </div>
    </PortalLayout>
</template>
