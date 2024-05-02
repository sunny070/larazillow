<template>
    <Filters/>
   <div class="grid gap-4 grid-col-1 md:grid-cols-2 xl:grid-cols-3">
    <Listing v-for="listing in listings.data" :key="listing.id" :listing="listing"/>
   </div>
   <div v-if="listings.data.length" class="flex justify-center w-full mt-8 mb-8">
        <Pagination :links="listings.links"/>
   </div>
</template>

<script setup>


import Listing from '@/Pages/Listing/Index/Components/Listing.vue';
import Filters from '@/Pages/Listing/Index/Components/Filters.vue';
import Pagination from '@/Components/UI/Pagination.vue';


defineProps({
    listings: Object,
})
</script>