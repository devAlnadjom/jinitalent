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
import Dropdown from '@/Components/Dropdown.vue';

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

const submitApplication = () => {
    applicationForm.post(route('applications.store'), {
        //preserveScroll: true,
        onSuccess: () => { applicationForm.candidate_id = null, openApplicationForm.value = false },
        onError: (e) => { console.log(e) },
    });
};
onMounted(() => {
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
                    <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex bg-orange-50">
                        Applications
                    </div>
                    <div class="hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50">
                        <JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Logs
                        </JetNavLink>
                    </div>
                    <!--button @click="openApplicationForm=true"
                        class="hidden space-x-8 p-2 px-4 sm:-my-px sm:ml-10 sm:flex  rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white">
                        <span class=" flex-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                        </span> Link Candidate
                    </button-->
                </div>
            </div>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div>
                    <div class="flex mb-4 w-full justify-between">
                        <div class="flex flex-row w-3/5">
                            <div class=" w-44">
                                <select v-model="form.trashed" class=" rounded-l py-1 w-full border-r-0">
                                    <option :value="null">STATUS</option>
                                    <option value="0">With Trashed</option>
                                    <option value="1">Paid</option>
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
                            @click="openApplicationForm=true">Link Candidate</button>

                    </div>
                </div>
                <div class="overflow-x-auto w-full pb-60">
                    <table class="w-full  whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 bjob-b">
                                <th class="px-4 py-3">#</th>
                                <th class="px-4 py-3">Candidate</th>
                                <th class="px-4 py-3">infos</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">source</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            <tr v-for="item in jobs.applications" :key="item.id" class="text-gray-700">
                                <td class="px-4 py-3 text-sm">

                                    <span class="flex flex-col">
                                        <span class="mb-1"># - {{ item.id }} </span>
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="flex flex-row">
                                        <span class="mb-1">{{ item.candidate.first_name }} {{ item.candidate.last_name
                                        }}</span>

                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="flex flex-row">
                                        <span class="mb-1">{{ item?.ratings }}/5</span>
                                        <span></span>
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    <span class="flex flex-col">
                                        <!--span class=" mb-1">{{ job.address }}</span-->
                                        <span class=" p-1 text-sm bg-green-50 text-green-700 rounded animate-pulse"
                                            v-if="item.status_text =='New'"><span class=" font-bold text-xs">
                                                {{item.status_text }}</span></span>
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="text-xs mr-2"> {{ item.source }} </span>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <div class="flex items-end justify-end">
                                       <span class="text-xs mr-8"> {{ dayjs(item.created_at).fromNow() }} </span>

                                        <Dropdown>
                                            <template #trigger>
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    </svg>
                                                </button>
                                            </template>
                                            <template #content>
                                                <button
                                                    class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                                                    @click="editing = true">
                                                    Edit
                                                </button>
                                                <Link :href="route('jobs.show',item.id)"
                                                    active class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out">
                                                    <span
                                                        class="">Infos</span>
                                                 </Link>
                                            </template>
                                        </Dropdown>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                            <vSelect v-model="applicationForm.candidate_id" :options="props.candidates"
                                :reduce="candidate => candidate.id" label="first_name" placeholder="Select. Candidate">
                                <template #option="{id, first_name, last_name,resume}">
                                    <em class="text-sm">{{id}} {{ first_name }}-{{ last_name }} <span v-if="!resume"
                                            class="ml-8 text-orange-600">No Resume</span></em>

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
