<script setup>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import JetButton from '@/Components/Button.vue';
import JetFormSection from '@/Components/FormSection.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetLabel from '@/Components/Label.vue';
import JetActionMessage from '@/Components/ActionMessage.vue';
import JetSecondaryButton from '@/Components/SecondaryButton.vue';
import JetText from '@/Components/Textarea.vue';
import JetCheckbox from '@/Components/Checkbox.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


const props = defineProps({
    organization : Object,
});

const textContenu = ref(null);
const moneditor = ref(null);

const form = useForm({
    code: 'JOB-',
    name: '',
    location: '',
    level: '0',
    salary: '0',
    description: '',
    no_of_vacancy: -1,
    status: 1,
    public: 0,
    style: '',
    organization_id:null,
    date_start_job: '',
});

const submitForm = () => {
    form.description = moneditor.value.getHTML();
    //textContenu.value = moneditor.value.getHTML()+"<br/><p><strong>Merci Choupi</strong></p>";
    //setTimeout(()=>{moneditor.value.setHTML(textContenu.value)}, 900);
    //return;
    form.post(route('jobs.store'), {
        //preserveScroll: true,
        onSuccess: () => {},
        onError: (e) => {console.log(e) },
    });
};


</script>

<template>
    <AppLayout title="Create New Jobs">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Jobs - Create New
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive
                                    mail.</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form  @submit.prevent="submitForm">
                                <div class="overflow-hidden shadow sm:rounded-md">
                                    <div class="bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-2 sm:col-span-2">
                                                <JetLabel for="code" value="Job Code" />
                                                <JetInput id="code" v-model="form.code" type="text"
                                                    class="mt-1 block w-full" />
                                                <JetInputError :message="form.errors.code" class="mt-2" />
                                            </div>

                                            <div class="col-span-4 sm:col-span-4">
                                                <JetLabel for="name" value="Job Title" />
                                                <JetInput id="name" v-model="form.name" type="text"
                                                    class="mt-1 block w-full" autocomplete="off"
                                                    placeholder="EX: Manager SKU" />
                                                <JetInputError :message="form.errors.name" class="mt-2" />
                                            </div>

                                            <!--div class="col-span-6">
                                                <JetLabel for="description" value="Job Description" />
                                                <JetText id="description" v-model="textContenu"
                                                    class="mt-1 block w-full" rows="10" />
                                                <JetInputError :message="form.errors.description" class="mt-2" />
                                            </div-->
                                            <div class="col-span-6 mb-6">
                                                <JetLabel for="description" value="Job Description" class="mb-2"/>
                                                <QuillEditor theme="snow"  v-model:content="form.description" ref="moneditor" />
                                                <JetInputError :message="form.errors.description" class="mt-2" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-6 mt-8">
                                                Others Infos
                                                <hr class="" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <JetLabel for="location" value="Location" />
                                                <JetInput id="location" v-model="form.location" type="text"
                                                    class="mt-1 block w-full" placeholder="EX: City, Country" />
                                                <JetInputError :message="form.errors.location" class="mt-2" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <JetLabel for="style" value="Style" />
                                                <select id="style" name="country"
                                                    v-model="form.style"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                    <option value="">Selct one.</option>
                                                    <option value="On Place">On Place</option>
                                                    <option value="Full Remote">Full Remote</option>
                                                    <option value="Mix">Mix</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <JetLabel for="public" value="Should be posted?" />
                                                <label class="flex items-center mt-3">
                                                    <JetCheckbox v-model:checked="form.public" name="public" />
                                                    <span class="ml-2 text-sm text-gray-600">Public</span>
                                                </label>

                                                <JetInputError :message="form.errors.public" class="mt-2" />
                                            </div>


                                            <div class="col-span-6 sm:col-span-6">

                                                <JetLabel for="public" value="Level Required" />
                                                <ul
                                                    class="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                    <li
                                                        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                        <div class="flex items-center pl-3">
                                                            <input id="horizontal-list-radio-license" type="radio"
                                                                value="0" name="list-radio" v-model="form.level"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                            <label for="horizontal-list-radio-license"
                                                                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                All </label>
                                                        </div>
                                                    </li>
                                                    <li
                                                        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                        <div class="flex items-center pl-3">
                                                            <input id="horizontal-list-radio-id" type="radio" value="1"
                                                                name="list-radio" v-model="form.level"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                            <label for="horizontal-list-radio-id"
                                                                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                Junior</label>
                                                        </div>
                                                    </li>
                                                    <li
                                                        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                        <div class="flex items-center pl-3">
                                                            <input id="horizontal-list-radio-millitary" type="radio"
                                                                value="2" name="list-radio" v-model="form.level"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                            <label for="horizontal-list-radio-millitary"
                                                                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> Confirmed</label>
                                                        </div>
                                                    </li>
                                                    <li class="w-full dark:border-gray-600">
                                                        <div class="flex items-center pl-3">
                                                            <input id="horizontal-list-radio-passport" type="radio"
                                                                value="3" name="list-radio" v-model="form.level"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                                            <label for="horizontal-list-radio-passport"
                                                                class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Senior</label>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>

                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <JetLabel for="date_start" value="Begin Date" />
                                                <JetInput id="date_start" v-model="form.date_start_job" type="date"
                                                    class="mt-1 block w-full" />
                                                <JetInputError :message="form.errors.date_start_job" class="mt-2" />
                                            </div>
                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <JetLabel for="position_open" value="Position Open" />
                                                <JetInput id="position_open" v-model="form.no_of_vacancy" type="number"
                                                    class="mt-1 block w-full" />
                                                <JetInputError :message="form.errors.no_of_vacancy" class="mt-2" />
                                            </div>
                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <JetLabel for="position_open" value="Organization" />

                                                <vSelect label="name" :options="organization" v-model="form.organization_id" :key="organization.id" :reduce="data => data.id" ></vSelect>
                                                <JetInputError :message="form.errors.organization_id" class="mt-2" />
                                            </div>


                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <JetButton :class="{ 'opacity-25': form.processing }"
                                            :disabled="form.processing">
                                            Save
                                        </JetButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    </AppLayout>
</template>
