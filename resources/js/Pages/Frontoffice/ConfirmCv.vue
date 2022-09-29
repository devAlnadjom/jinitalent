<script setup>
import { computed, ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Components/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';


const props = defineProps({
    candidate: Object
});


const form = useForm({
    first_name: '',

    /*password: '',
    password_confirmation: '',*/
});






const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>

    <Head title="We have received your information." />


    <JetAuthenticationCard>
        <template #logo>
            <div class="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center transition-all duration-500 hover:scale-[1.05]">
                <a href="/" title="home">
                    <span
                    class="text-blue-800">jini</span> <span class="text-orange-600">Talent</span>
                </a>

            </div>

        </template>

        <div>
            <h3 class="text-xl ">Dear <span class="font-semibold hover:font-bold duration-500">{{candidate?.first_name}} {{candidate?.last_name}} </span>.</h3>
            <div class="my-4">
                We have received your informations.

                <div class="flex justify-between mt-4 border-b text-gray-600 px-2">
                    <span>Name</span>
                    <span class=" text-orange-600 font-semibold">{{candidate?.first_name}}  {{candidate?.last_name}}</span>
                </div>
                <div class="flex justify-between mt-4 border-b text-gray-600 px-2">
                    <span>Contact</span>
                    <span class=" text-orange-600">{{candidate?.phone_number}}</span>
                </div>
                <div class="flex justify-between mt-4 border-b text-gray-600 px-2">
                    <span>Address</span>
                    <span class=" text-orange-600">{{candidate?.email}}</span>
                </div>

                <div class=" mt-4  text-gray-600 px-2 text-sm">
                    Our system will find the best job for you. You'll receive an email sonner.
                    <br/>
                    An agent can also call you.
                    <br/>
                    If you want to be informed for any update about job, you can just click on the link on your mail.
                    <br/>

                    <div class=" place-items-end  mt-4">
                        <span class="font-semibold text-orange-800"> JiniTalent.</span>
                    </div>

                </div>


            </div>
        </div>
    </JetAuthenticationCard>
</template>
