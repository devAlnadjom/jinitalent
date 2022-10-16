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
import JetDialogModal from '@/Components/DialogModal.vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

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
                                <JetNavLink :href="route('jobs.edit',jobs.id)" :active="route().current('dashboard')">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    Edit
                                </JetNavLink>
                            </div>
                            <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                                <JetNavLink :href="route('jobs.applicationlist',jobs.id)" :active="route().current('dashboard')">
                                        Applications
                                </JetNavLink>
                            </div>
                            <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                                <JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                        Logs
                                </JetNavLink>
                            </div>
                            <button @click="openApplicationForm=true"
                                class="hidden space-x-8 p-2 px-4 sm:-my-px sm:ml-10 sm:flex  rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
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
                                <QuillEditor theme="bubble"  ref="moneditor"  :read-only="true"/>

                            </div>

                            <!--h3 class="font-semibold text-gray-800 leading-tight mt-8">Qualifiqations</h3>
                            <div class=" w-full mt-3 border-t text-sm pt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident molestiae, voluptatum deserunt accusamus perspiciatis ut.
                                Obcaecati culpa aliquid iusto quia minus corporis esse animi mollitia deleniti. Reiciendis, dolores eaque.
                                <br />

                            </div-->
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

                            <!--div class=" w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row  gap-2">
                                <span class=" text-gray-600 text-xs font-bold bg-orange-300 rounded-full items-center w-10 h-10 p-3">MA</span>
                                <div class="font-semibold">
                                    <span>{{ organization?.address}} </span>
                                    <span class="text-xs text-orange-500 block"> New</span>
                                </div>
                            </div-->


                        </div>
                    </div>
                </div>

            </div>


            <!--Dialog of Apllication source -->
            <JetDialogModal :show="openApplicationForm" @close="openApplicationForm = !openApplicationForm">
                <template #title>

                    <h2 class="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">
                        <span class="inline-block">Link candidate to this job</span>
                    </h2>
                </template>

                <template #content>

                    <div class="w-full  bg-white   block ">

                        <div class="mb-4">
                                <label class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Liste
                                </label>
                                <vSelect v-model="applicationForm.candidate_id" :options="props.candidates" :reduce="candidate => candidate.id" label="first_name" placeholder="Select. Candidate" >
                                    <template #option="{id, first_name, last_name,resume}">
                                        <em class="text-sm">{{id}} {{ first_name }}-{{ last_name }} <span v-if="!resume" class="ml-8 text-orange-600">No Resume</span></em>

                                    </template>
                                </vSelect>
                                <JetInputError :message="applicationForm.errors.candidate_id" class="mt-2" />
                        </div>
                        <div class="mb-12">
                            <label
                                class="text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide">Description</label>
                            <textarea id="description" rows="3" type="text" v-model="applicationForm.source"
                                placeholder="Description..."
                                class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"></textarea>
                                <JetInputError :message="applicationForm.errors.source" class="mt-2" />
                        </div>


                    </div>
                </template>

                <template #footer>
                    <JetSecondaryButton @click="openApplicationForm = !openApplicationForm">
                        Close
                    </JetSecondaryButton>

                    <JetButton class="ml-3" @click="submitApplication">
                        <span class="flex-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                        </span>
                        Link
                    </JetButton>
                </template>
            </JetDialogModal>
        </div>
    </AppLayout>
</template>
