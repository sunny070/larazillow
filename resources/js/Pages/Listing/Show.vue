<template>
    <div class="flex flex-col-reverse gap-4 md:grid md:grid-cols-12">
        <Box class="flex items-center w-full md:col-span-7">
            <div v-if="listing.images.length" class="grid grid-cols-2 gap-1">
                <img v-for="image in listing.images" :key="image.id" 
                :src="image.src">
            </div>
            <div v-else class="w-full font-medium text-center text-gray-500">No Images</div>
        </Box>
        <div class="flex flex-col gap-4 md:col-span-5">
            <Box>
                <template #header>
                    Basic info
                </template>
                <Price :price="listing.price" class="text-2xl font-bold" />
                <ListingSpace :listing="listing" class="text-lg" />
                <ListingAddress :listing="listing" class="text-gray-500" />
            </Box>
            <Box>
                <template #header>
                    Monthly Payment
                </template>
                <div>
                    <label>Interest Rate ({{ interestRate }}%)</label>
                    <input v-model.number="interestRate" type="range" min="0.1" max="30" step="0.1"
                    class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                    
                    <label>Duration ({{ duration }} Years)</label>
                    <input v-model.number="duration" type="range" min="3" max="35" step="1"
                    class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                    <div class="mt-2 text-gray-600">
                        <div class="text-gray-400">Your Monthly Payment</div>
                        <Price :price="monthlyPayment" class="text-3xl"/>
                    </div>
                    <div class="mt-2 text-gray-500">
                        <div class="flex justify-between">
                            <div>Total Paid</div>
                            <div>
                                <Price :price="totalPaid" class="font-medium"/>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div>Principal Paid</div>
                            <div>
                                <Price :price="listing.price" class="font-medium"/>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div>Interest Paid</div>
                            <div>
                                <Price :price="totalInterest" class="font-medium"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Box>

            <MakeOffer 
            v-if="user && !offerMade"
            @offer-updated="offer = $event"
            :listing-id="listing.id" 
            :price="listing.price"/>

            <OfferMade v-if="user && offerMade" :offer="offerMade"/>
        </div>
    </div>
</template>

<script setup>
import Price from '@/Components/Price.vue';
import ListingAddress from '../../Components/ListingAddress.vue';
import ListingSpace from '@/Components/ListingSpace.vue';
import Box from '@/Components/UI/Box.vue';
import { computed, ref } from 'vue';
import { useMonthlyPayments } from '@/Composables/useMonthlyPayments';
import MakeOffer from '@/Pages/Listing/Show/Components/MakeOffer.vue';
import OfferMade from '@/Pages/Listing/Show/Components/OfferMade.vue';
import { usePage } from '@inertiajs/inertia-vue3';



const interestRate = ref(2.5)
const duration = ref(25)
const props = defineProps({
    listing: Object,
    offerMade : Object,
})

const offer = ref(props.listing.price)

const {monthlyPayment,totalPaid,totalInterest} =useMonthlyPayments(offer,interestRate,duration)

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);
const user = computed(() => page.props.value.user);
</script> 