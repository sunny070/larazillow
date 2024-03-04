<template>
    <span>
{{ formattedPrice }}
    </span>
</template>

<script setup>
import {computed} from 'vue'
   const props = defineProps({
        price:[Number,String]
    })
const formattedPrice = computed(
    ()=> Number(props.price).toLocaleString('en-INDIA',{
        style:'currency',
        currency:'INR',
        maximumFractionDigits:2,
    })
)
</script> 