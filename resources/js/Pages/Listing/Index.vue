<template>
   <div class="grid gap-4 grid-col-1 md:grid-cols-2 xl:grid-cols-3">
    <Listing v-for="listing in listings" :key="listing.id" :listing="listing"/>
   </div>
</template>

<script setup>


import Listing from '@/Pages/Listing/Index/Components/Listing.vue';


defineProps({
    listings: Array,
})
</script>