<template>
<Link href="/">Main Page</Link>&nbsp;
<Link href="/hello">Show Page</Link>
<!-- <div>The page with time {{ timer }}</div> -->
<div v-if="page.props.value.flash.message" class="success">
    {{ page.props.value.flash.message }}
</div>

<slot>Default</slot>
</template>

<script setup>
import {Link,usePage} from "@inertiajs/vue3"

// page.props.value.flash.success
const page = usePage()
console.log(page.props.value.flash.success)
// import {ref} from 'vue'
// const timer =ref(0)
// setInterval(() => timer.value++,1000)
</script>

<style scoped>
    .success{
        background-color: green;
        color: #fff;
    }
</style>