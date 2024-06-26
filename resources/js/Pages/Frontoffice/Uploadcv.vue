<script setup>
import { computed, ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

import PortalLayout from '@/Layouts/PortalLayout.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetLabel from '@/Components/Label.vue';
import JetText from '@/Components/Textarea.vue';


const props = defineProps({
    status: String,
    canLogin: Boolean,
    canRegister: Boolean,
    honeypot: Object,
});


const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    summary: '',
    country: '',
    city: '',
    address: '',
    title: '',
    resume: null,
    [props.honeypot.nameFieldName]: '',
    [props.honeypot.validFromFieldName]: props.honeypot.encryptedValidFrom,
    /*password: '',
    password_confirmation: '',*/
});

const submit = () => {

    form.post(route('public.storecv'), {
        preserveState: true,
        onError: (e) => (console.error(e)),
    });
};


const change = (e) => {

    console.log(photo.value);
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length) { return }
    const reader = new FileReader();
    /*reader.onload = (e) => {
        this.preview = e.target.result;
    };*/

    reader.readAsDataURL(photo.value.file.files[0]);
    //
    this.$emit('input', e.target.files[0])
        ;
}

const remove = () => {
    this.preview = null;
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>

    <Head title="Commencer à créer votre CV" />

    <PortalLayout title="Commencer à créer votre CV">
        <template #header>
            <div class="w-full flex justify-center gap-4">
                <div class="flex-1">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Commencer à créer votre CV
                    </h2>
                </div>
                <div class="flex">
                </div>
            </div>

        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="w-full md:flex gap-4">

                    <!--Side Info-->
                    <div class="md:flex-1">
                        <div class="p-4">
                            <h3 class="text-2xl font-semibold mb-2">Informations de base</h3>
                            <hr/>
                            <p class="text-sm mt-2"> Veuillez remplir ce formulaire pour commencer à la constitution de votre CV
                            </p>
                        </div>
                    </div>

                    <!--Details-->
                    <div class=" md:w-2/3 lg:w-1/2 bg-white p-4 rounded">
                        <h3 class="my-2 md:my-3 text-xl text-bold">Remplissez ce formulaire</h3>
                        <form @submit.prevent="submit">
                            <div v-if="honeypot.enabled" :name="`${honeypot.nameFieldName}_wrap`" style="display:none;">
                                <input type="text" v-model="form[honeypot.nameFieldName]" :name="honeypot.nameFieldName"
                                    :id="honeypot.nameFieldName" />
                                <input type="text" v-model="form[honeypot.validFromFieldName]"
                                    :name="honeypot.validFromFieldName" />
                            </div>
                            <div class="w-full md:grid md:grid-cols-2 gap-2 mt-4">
                                <div>
                                    <JetLabel for="last_name" value="Nom" />
                                    <JetInput id="last_name" v-model="form.last_name" type="text"
                                        class="mt-1 block w-full" required />
                                    <JetInputError class="mt-2" :message="form.errors.last_name" />
                                </div>
                                <div>
                                    <JetLabel for="first_name" value="Prénom(s)" />
                                    <JetInput id="first_name" v-model="form.first_name" type="text"
                                        class="mt-1 block w-full" required autofocus />
                                    <JetInputError class="mt-2" :message="form.errors.first_name" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <JetLabel for="phone_number" value="Numero de téléphone" />
                                <JetInput id="phone_number" v-model="form.phone_number" type="tel"
                                    class="mt-1 block w-full" required placeholder="" />
                                <JetInputError class="mt-2" :message="form.errors.phone_number" />
                            </div>
                            <div class="mt-4">
                                <JetLabel for="email" value="Email" />
                                <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full"
                                    required />
                                <JetInputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div class="w-full md:grid md:grid-cols-2 gap-2 mt-4">
                                <div>
                                    <JetLabel for="country" value="Pays" />
                                    <JetInput id="country" v-model="form.country" type="text" class="mt-1 block w-full" autocomplete="off"
                                        required />
                                    <JetInputError class="mt-2" :message="form.errors.country" />
                                </div>
                                <div>
                                    <JetLabel for="city" value="Ville" />
                                    <JetInput id="city" v-model="form.city" type="text" class="mt-1 block w-full" />
                                    <JetInputError class="mt-2" :message="form.errors.city" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <JetLabel for="address" value="Adresse" />
                                <JetInput id="address" v-model="form.address" type="tel" class="mt-1 block w-full" autocomplete="off" />
                                <JetInputError class="mt-2" :message="form.errors.address" />
                            </div>

                            <div class="mt-4">
                                <JetLabel for="title" value="Votre Activité ou titre actuele" />
                                <JetInput id="title" v-model="form.title" type="text"
                                    placeholder="Ex: Etudiant, Ingénieur, En formation..."
                                    class="mt-1 block w-full" autocomplete="off" />
                                <JetInputError class="mt-2" :message="form.errors.title" />
                            </div>

                            <div class="mt-4">
                                <JetLabel for="sumary" value="Bio" />
                                <JetText id="sumary" v-model="form.summary" class="mt-1 block w-full text-sm" rows="5"
                                    placehoder="Any Sumamry?..." />
                                <small class="text-gray-500">Ce texte vous présente brièvement.</small>
                                <JetInputError class="mt-2" :message="form.errors.summary" />
                            </div>


                            <!--div class="mt-4">
                                <JetLabel for="sumary" value="Upload Your CV" />
                                <input id="afile" type="file" @input="form.resume = $event.target.files[0]" ref="photo"
                                    accept=".pdf"
                                    class=" w-full px-4 py-2 mt-2 border  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    <JetInputError class="mt-2" :message="form.errors.resume" />
                            </div-->


                            <div class="flex items-center justify-end mt-4">
                                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Etape suivante
                                </JetButton>
                            </div>
                        </form>
                    </div>


                </div>

            </div>


        </div>
    </PortalLayout>

</template>
