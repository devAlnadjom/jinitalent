<script setup>
import { computed, ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';

const props = defineProps({
    organizations: Object,
    filters: Object,
});

const form = useForm({
    search: '',
    trashed: null
});

watch(form, throttle(function() {
        Inertia.get(route('organizations.index'), pickBy(form), { preserveState: true })
      }, 900));

const reset = () =>{form = mapValues(form, () => null)}

</script>

<template>
    <AppLayout title="organizations">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Organizations
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div>
                    <div class="flex mb-4 w-full justify-between">
                        <div class="flex flex-row w-3/5">
                            <div class=" w-44">
                                <select v-model="form.trashed" class=" rounded-l py-1 w-full border-r-0">
                                    <option :value="null" >STATUS</option>
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
                            @click="Inertia.visit(route('organizations.create'))">Add New</button>

                    </div>
                </div>
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 borganization-b">
                                <th class="px-4 py-3">#</th>
                                <th class="px-4 py-3">Company</th>
                                <th class="px-4 py-3">Contact</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y">
                            <tr v-for="organization in organizations.data" :key="organization.id" class="text-gray-700">
                                <td class="px-4 py-3 text-sm">

                                    <span class="flex flex-col">
                                        <span class="mb-1"># - {{ organization.id }} </span>
                                    </span>
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    <span class="flex flex-row">
                                        <span class="mb-1">{{ organization.name }}</span>
                                        <span></span>
                                    </span>

                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="flex flex-col">
                                        <span class=" mb-1">{{ organization.address }}</span>
                                        <span class=" font-bold text-xs">{{organization.phone_number }}</span>
                                    </span>
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    <span class=" p-1 text-xs bg-orange-100 text-orange-500 rounded" v-if="organization.statuts==1">New</span>
                                    <!--span class=" p-1 text-xs bg-blue-100 text-blue-500 rounded" v-if="organization.status==1">Paid</span>
              <span class=" p-1 text-xs bg-yellow-100 text-yellow-500 rounded" v-if="organization.status==2">Planed</span>
              <span class=" p-1 text-xs bg-green-100 text-green-500 rounded" v-if="organization.status==3">Delivered</span>
              <span class=" p-1 text-xs bg-gray-100 text-gray-600 rounded" v-if="organization.status==5">Rembourser</span--->
                                </td>
                                <td class="px-4 py-3 text-sm">

                                    <Link :href="route('organizations.show',organization.id)" active
                                        class="text-sm text-gray-700 block">
                                    <span
                                        class="text-orange-500 hover:text-orange-700 px-2 py-1 font-bold cursor-pointer">Edit</span>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
