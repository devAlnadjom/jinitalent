<script setup>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-vue3';
import PortalLayout from '@/Layouts/PortalLayout.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AppLayout from '@/Layouts/AppLayout.vue';
import JetButton from '@/Components/Button.vue';
import JetFormSection from '@/Components/FormSection.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetLabel from '@/Components/Label.vue';
import JetTextarea from '@/Components/Textarea.vue';

import Submenu from './partials/Submenu.vue';

dayjs.extend(relativeTime);
const page = usePage()
const props = defineProps({
    educations: Object,
    jobs: Object,
    filters: Object,
});

const showForm = ref(false)

const addNewShow = () => {
    showForm.value = !showForm.value
}
const showDateEnd = ref(false)
const form = useForm({
   //  _method :'PUT',
    title: '',
    description: '',
    date_start: '',
    date_end: null,
    school: '',
    address: '',
    country: '',
    note: '',
});

const submitForm = () => {

    form.post(route('portal.cv.education.add'), {
        // preserveState: false,
        onError: (e) => (console.error(e)),
        onSuccess: () => {
            form.reset();
            addNewShow()
        }
    });
};

const deleteItem = (id) => {
    if( !confirm( "Voulez vous supprimer cette ligne?")) return;

    Inertia.delete(route('portal.cv.education.delete', id), {
        onSuccess: (e) => { console.log(e)},
        onError: (e) => { console.error(e)},
    })
}

</script>

<template>
    <PortalLayout title="Portal">
        <template #header>
            <submenu label="Formations & Educations" btn-label="Ajouter" @add-new="addNewShow"/>
        </template>

        <div class="py-12">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded bg-white pt-4 mb-8">
                <h3 class="font-semibold text-gray-800 leading-tight mb-2">Ajouter une nouvelle éducation</h3>
                <hr />
                <div class="mt-4 py-4 pt-0" v-show="showForm">
                    <form  @submit.prevent="submitForm" >
                                <div class="overflow-hidden .shadow sm:rounded-md">
                                    <div class="bg-white px-4 pb-4 pt-0 sm:p-6">
                                        <div class="grid grid-cols-6 gap-6">
                                            <div class="col-span-2 sm:col-span-3">
                                                <JetLabel for="code" value="Titre/Diplome" />
                                                <JetInput id="code" v-model="form.title" type="text"
                                                    class="mt-1 block w-full"
                                                    placeholder="Ex: Master Ingénieur Systeme"
                                                    />
                                                <JetInputError :message="form.errors.title" class="mt-2" />
                                            </div>

                                            <div class="col-span-4 sm:col-span-3">
                                                <JetLabel for="school" value="Nom de l'ecole" />
                                                <JetInput id="school" v-model="form.school" type="text"
                                                    class="mt-1 block w-full" autocomplete="off"
                                                    placeholder="EX: Ecole Nationnale ..." />
                                                <JetInputError :message="form.errors.school" class="mt-2" />
                                            </div>


                                            <div class="col-span-6 mb-6">
                                                <JetLabel for="description" value="Job Description" class="mb-2"/>
                                                <!--QuillEditor theme="snow"  v-model:content="form.description" ref="moneditor" /-->
                                                <JetTextarea name="description" id="description"  rows="6" v-model="form.description" placeholder="Parlez nous de votre diplome ou votre parcours..." />
                                                <JetInputError :message="form.errors.description" class="mt-2" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <JetLabel for="orange-toggle" value="Concernant cet étude?" />

                                                <label for="orange-toggle" class="inline-flex relative items-center mr-5 mt-2 cursor-pointer">
                                                    <input type="checkbox" v-model="showDateEnd" id="orange-toggle" class="sr-only peer" >
                                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                                                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Êtes vous toujours entrain d'etudier?</span>
                                                </label>

                                                <JetInputError :message="form.errors.public" class="mt-2" />
                                            </div>
                                            <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                                <div>
                                                    <JetLabel for="date_start" value="Début" />
                                                    <JetInput id="date_start" v-model="form.date_start" type="date"
                                                        class="mt-1 block w-full" />
                                                    <JetInputError :message="form.errors.date_start" class="mt-2" />
                                                </div>

                                                <div class="mt-4" v-if="showDateEnd">
                                                    <JetLabel for="date_end" value="Fin" />
                                                    <JetInput id="date_end" v-model="form.date_end" type="date"
                                                        class="mt-1 block w-full" />
                                                    <JetInputError :message="form.errors.date_end" class="mt-2" />
                                                </div>

                                            </div>



                                            <div class="col-span-6 sm:col-span-6 mt-8">
                                                Plus d'infos
                                                <hr class="" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <JetLabel for="location" value="Addresse" />
                                                <JetInput id="location" v-model="form.address" type="text"
                                                    class="mt-1 block w-full" placeholder="EX: City, Country" />
                                                <JetInputError :message="form.errors.address" class="mt-2" />
                                            </div>

                                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <JetLabel for="style" value="Pays" />
                                                <select id="style" name="country"
                                                    v-model="form.country"
                                                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                    <option value="">Selct one.</option>
                                                    <option value="Bénin">Bénin</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Burkina Fasso">Burkina Fasso</option>
                                                    <option value="Other">Autres</option>
                                                </select>
                                                <JetInputError :message="form.errors.country" class="mt-2" />
                                            </div>

                                        </div>
                                    </div>
                                    <div class=".bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <JetButton :class="{ 'opacity-25': form.processing }"
                                            :disabled="form.processing">
                                            Enregistrer
                                        </JetButton>
                                    </div>
                                </div>
                            </form>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded bg-white pt-4">
                <h3 class="font-semibold text-gray-800 leading-tight mb-2">List des Educations</h3>
                <hr />

                <ul role="list" class="divide-y divide-gray-100" >
                    <li class="flex justify-between gap-x-6 py-4 px-1 hover:bg-gray-50"
                        v-for="(item, index) in props.educations" :key="index"
                    >
                        <div class="flex min-w-0 gap-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 h-12 w-12 flex-none rounded-full bg-gray-50">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900"> {{ item.title }}</p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                <!-- {{ item?.address }} -->
                                <button type="button" class="text-green-600 hover:text-green-800 hover:underline mx-2">Détails</button>
                                <button type="button" class="text-red-600 hover:text-red-800 hover:underline mx-2" @click.stop="deleteItem(item.id)">Effacer</button>
                             </p>
                        </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">{{ item.school }}</p>
                        <p class="mt-1 text-xs leading-5 text-gray-500" v-if="item?.date_end" >Terminé le: <time datetime="2023-01-23T13:23Z">{{ item?.date_end }}</time></p>
                        <div v-else class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                            <p class="text-xs leading-5 text-gray-500">Toujours encours</p>
                        </div>
                        </div>
                    </li>

                </ul>


            </div>
        </div>
    </PortalLayout>
</template>
