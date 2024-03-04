<template>
    <span>
        {{ listing.street }} {{ listing.code }} {{ listing.city }}
    </span>
</template>

<script setup>
    defineProps({
        listing:Object
    })
</script> 