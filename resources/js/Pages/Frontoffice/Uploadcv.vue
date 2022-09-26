<script setup>
import { computed, ref } from 'vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import JetAuthenticationCard from '@/Components/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import JetButton from '@/Components/Button.vue';
import JetInput from '@/Components/Input.vue';
import JetInputError from '@/Components/InputError.vue';
import JetLabel from '@/Components/Label.vue';

const props = defineProps({
    status: String,
    canLogin: Boolean,
    canRegister: Boolean,
});


const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '+1',
    summary: '',
    country: '',
    city: '',
    address: '',
    resume: null
    /*password: '',
    password_confirmation: '',*/
});

const submit = () => {

    form.post(route('public.storecv'), {
        onFinish: () => (form.reset()),
        onError: (e) => (console.error(e)),
    });
};


const change=(e) =>{

        console.log(photo.value);
    var files = e.target.files || e.dataTransfer.files;
    if(!files.length){return}
    const reader = new FileReader();
    /*reader.onload = (e) => {
        this.preview = e.target.result;
    };*/

    reader.readAsDataURL(photo.value.file.files[0]);
        //
      this.$emit('input', e.target.files[0])
      ;
    }

  const  remove= () =>{
      this.preview = null;
    };

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>

    <Head title="Submit your Cv for Free" />


    <JetAuthenticationCard>
        <template #logo>
            <div class="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center"><span
                    class="text-blue-800">jini</span> <span class="text-orange-600">Talent</span> </div>

        </template>

        <form @submit.prevent="submit">
            <div>
                <JetLabel for="first_name" value="First Name" />
                <JetInput id="first_name" v-model="form.first_name" type="text" class="mt-1 block w-full" required
                    autofocus />
                <JetInputError class="mt-2" :message="form.errors.first_name" />
            </div>
            <div>
                <JetLabel for="last_name" value="Last Name" />
                <JetInput id="last_name" v-model="form.last_name" type="text" class="mt-1 block w-full" required
                    autofocus />
                <JetInputError class="mt-2" :message="form.errors.last_name" />
            </div>
            <div>
                <JetLabel for="phone_number" value="Phone Number" />
                <JetInput id="phone_number" v-model="form.phone_number" type="tel" class="mt-1 block w-full" required
                     />
                <JetInputError class="mt-2" :message="form.errors.phone_number" />
            </div>
            <div>
                <JetLabel for="email" value="Email" />
                <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required  />
                <JetInputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="w-full md:grid md:grid-cols-2 gap-2 mt-4">
                <div>
                    <JetLabel for="country" value="Country" />
                    <JetInput id="country" v-model="form.country" type="text" class="mt-1 block w-full" required
                         />
                    <JetInputError class="mt-2" :message="form.errors.country" />
                </div>
                <div>
                    <JetLabel for="city" value="City" />
                    <JetInput id="city" v-model="form.city" type="text" class="mt-1 block w-full" required  />
                    <JetInputError class="mt-2" :message="form.errors.city" />
                </div>
            </div>

            <div>
                <JetLabel for="address" value="Full Address" />
                <JetInput id="address" v-model="form.address" type="tel" class="mt-1 block w-full" required  />
                <JetInputError class="mt-2" :message="form.errors.address" />
            </div>

            <div>
                <JetLabel for="sumary" value="Summary" />
                <JetInput id="sumary" v-model="form.summary" type="tel" class="mt-1 block w-full" required />
                <JetInputError class="mt-2" :message="form.errors.summary" />
            </div>


            <div class="mt-4">
                <BreezeLabel for="description" value="Upoload Driver license" />
                <input type="file" @input="form.resume = $event.target.files[0]" ref="photo" class="
                              w-full px-4 py-2 mt-2 border  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                          " />


            </div>


            <div class="flex items-center justify-end mt-4">
                <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Subscribe
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard>
</template>
