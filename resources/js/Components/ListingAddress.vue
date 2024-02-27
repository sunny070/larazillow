<template>
    <span>
        {{ listing.street }} {{ listing.code }} {{ listing.city }} for {{ listing.price }}
    </span>
</template>

<script setup>
    defineProps({
        listing:Object
    })
</script> 