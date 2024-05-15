<template>
    <form>
        <div class="flex flex-wrap gap-4 mt-4 mb-4">
            <div class="flex items-center gap-2 flex-nowrap">
                <input
                    id="delted"
                    v-model="filterForm.deleted"
                    class="w-4 h-4 text-indigo-600 border rounded rounded-gray-300 focus:ring-indigo-500"
                    type="checkbox"
                />
                <label for="deleted">Deleted</label>
            </div>
            <div>
                <select class="input-filter-l w-24" v-model="filterForm.by">
                    <option value="created_at">Added</option>
                    <option value="price">Price</option>
                </select>
                <select class="input-filter-r 2-32" v-model="filterForm.order">
                    <option :value="option.value" v-for="option in sortOptions" :key="option.value">{{ option.label }}</option>
                </select>
            </div>
        </div>
    </form>
</template>
<script setup>
import { reactive, watch,computed } from "vue";
import {debounce} from 'lodash';
import {Inertia} from "@inertiajs/inertia";

const sortLabels ={
    created_at :[
        {
            label:'Latest',
            value: 'desc',
        },
        {
            label:'Oldest',
            value: 'asc',
        },
    ],
    price:[
    {
            label:'Pricy',
            value: 'desc',
        },
        {
            label:'Cheapest',
            value: 'asc',
        },
    ]
}

const sortOptions = computed(()=> sortLabels[filterForm.by])

const props = defineProps({
    filters:Object
    })


const filterForm = reactive({
    deleted: props.filters.deleted??false,
    by:props.filters.by??'created_at',
    order:props.filters.order??'desc',
});
watch(
    filterForm,debounce( () =>Inertia.get
    (route("realtor.listing.index"),
     filterForm, {
        preserveState: true,
        preserveScroll: true,
    }),1000),)
</script>
