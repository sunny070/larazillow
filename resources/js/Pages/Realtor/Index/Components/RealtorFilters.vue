<template>
    <form>
        <div class="flex flex-wrap gap-2 mt-4 mb-4">
            <div class="flex items-center gap-2 flex-nowrap">
                <input
                    id="delted"
                    v-model="filterForm.deleted"
                    class="w-4 h-4 text-indigo-600 border rounded rounded-gray-300 focus:ring-indigo-500"
                    type="checkbox"
                />
                <label for="deleted">Deleted</label>
            </div>
        </div>
    </form>
</template>
<script setup>
import { reactive, watch } from "vue";
import {debounce} from 'lodash';
import {Inertia} from "@inertiajs/inertia";

const filterForm = reactive({
    deleted: false,
});
watch(
    filterForm,debounce( () =>Inertia.get
    (route("realtor.listing.index"),
     filterForm, {
        preserveState: true,
        preserveScroll: true,
    }),1000),)
</script>
