<template>
    <h1 class="mb-4 text-3xl">Your Listings</h1>
    <section class="mb-4">
        <RealtorFilters :filters="filters"/>
    </section>
    <section class="grid grid-cols-1 gap-2 md:grid-cols-2"> 
        <Box v-for="listing in listings.data" :key="listing.id" :class="{'border-dashed':listing.deleted_at}">
            <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div :class="{'opacity-25':listing.deleted_at}">
                    
                    <div class="items-center gap-2 xl:flex">
                        <Price :price="listing.price" class="text-2xl font-medium"/>
                        <ListingSpace :listing="listing"/>
                    </div>
                    <ListingAddress :listing="listing" class="text-gray-500"/>
                </div>
                    <section>
                        <div class="flex items-center gap-1 text-gray-600">
                        <a class="text-xs font-medium btn-outline" 
                        :href="route('listing.show',{listing:listing.id})" target="_blank">Preview</a>
                        <Link class="text-xs font-medium btn-outline" :href="route('realtor.listing.edit',{listing:listing.id})">Edit</Link>
                        
                        <Link v-if="!listing.deleted_at"
                         class="text-xs font-medium btn-outline" 
                        :href="route('realtor.listing.destroy',{listing:listing.id})" 
                        as="button" method="delete" >Delete</Link>
                        <Link 
                        v-else 
                        class="text-xs font-medium btn-outline" 
                        :href="route('realtor.listing.restore',{listing:listing.id})" 
                        as="button"
                        method="put">Restore</Link>
                    </div>
                    <div class="mt-2">
                        <Link :href="route('realtor.listing.image.create',{listing:listing.id})" class="block w-fill btn-outline text-xs font-medium text-center">Image</Link>
                    </div>
                    </section>
            </div>
        </Box>
    </section>
    <sction v-if="listings.data.length" class="flex w-full mb-4 justify-centermt-4">
        <Pagination :links="listings.links"/>
    </sction>
</template>

<script setup>
import ListingAddress from '@/Components/ListingAddress.vue';
import ListingSpace from '@/Components/ListingSpace.vue';
import Price from '@/Components/Price.vue';
import Box from '@/Components/UI/Box.vue';
import Pagination from '@/Components/UI/Pagination.vue'
import RealtorFilters from '@/Pages/Realtor/Index/Components/RealtorFilters.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { route } from 'ziggy-js';
defineProps({
    listings:Object,
    filters:Object
    })
</script>