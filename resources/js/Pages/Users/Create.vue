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

const props = defineProps({
});

const form = useForm({
    name: '',
    description: '',
    email: '',
    status: 1,
    phone_number: '',
    address: '',
    country: '',
});

const submitForm = () => {
    form.post(route('organizations.store'), {
        errorBag: 'updateProfileInformation',
        preserveScroll: true,
        onSuccess: () => {},
    });
};


</script>

<template>
    <AppLayout title="Create New Organizations">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Organizations - Create
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <JetFormSection @submitted="submitForm">
                            <template #title>
                                Profile Information
                            </template>

                            <template #description>
                                Update your account's profile information and email address.
                            </template>

                            <template #form>
                                <!-- Name -->
                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="name" value="Company Name" />
                                    <JetInput id="name" v-model="form.name" type="text" class="mt-1 block w-full"
                                        autocomplete="name" />
                                    <JetInputError :message="form.errors.name" class="mt-2" />
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="description" value="Company description" />
                                    <JetInput id="description" v-model="form.description" type="text" class="mt-1 block w-full"
                                        autocomplete="name" />
                                    <JetInputError :message="form.errors.description" class="mt-2" />
                                </div>

                                <!-- Phone Number -->
                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="phone_number" value="Contact Phone Number" />
                                    <JetInput id="phone_number" v-model="form.phone_number" type="tel" class="mt-1 block w-full" placeholder="+1 XXX XXXX XXX"
                                         />
                                    <JetInputError :message="form.errors.phone_number" class="mt-2" />
                                </div>

                                <!-- Email -->
                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="email" value="Email" />
                                    <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" placeholder="Ex: example@example.com"/>
                                    <JetInputError :message="form.errors.email" class="mt-2" />

                                </div>
                                <!-- Phone Number -->
                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="address" value="Company Address" />
                                    <JetInput id="address" v-model="form.address" type="text" class="mt-1 block w-full" placeholder="+1 XXX XXXX XXX"
                                         />
                                    <JetInputError :message="form.errors.address" class="mt-2" />
                                </div>

                                <!-- Phone Number -->
                                <div class="col-span-6 sm:col-span-4">
                                    <JetLabel for="country" value="Company Country" />
                                    <JetInput id="country" v-model="form.country" type="text" class="mt-1 block w-full" placeholder="Ex: Canada"
                                         />
                                    <JetInputError :message="form.errors.country" class="mt-2" />
                                </div>


                            </template>

                            <template #actions>
                                <JetActionMessage :on="form.recentlySuccessful" class="mr-3">
                                    Saved.
                                </JetActionMessage>

                                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Save
                                </JetButton>
                            </template>
                        </JetFormSection>
            </div>
        </div>
    </AppLayout>
</template>
