<template>
    &nbsp;
    <!-- <Link href="/listing/create">New Listing</Link> -->
    <!-- dark:bg-gray-800 -->

    <header class="w-full bg-white border-b border-gray-200">
        <div class="container mx-auto">
            <nav class="flex items-center justify-between p-4">
                <div class="text-lg font-medium">
                    <Link :href="route('listing.index')">Listing</Link>
                </div>
                <!-- dark:text-indigo-300 -->
                <div class="text-xl font-bold text-center text-indigo-600">
                    <Link :href="route('listing.index')">LaraZillow</Link>
                </div>
                <div>
                    <Link :href="route('listing.create')"
                        class="btn-primary">+ New Listing
                    </Link>
                </div>
            </nav>
        </div>
    </header>
    <main class="container w-full p-4 mx-auto">
        <div v-if="flashSuccess" class="p-2 mb-4 border border-green-200 rounded-md shadow-sm bg-green-50">
            {{ flashSuccess }}
        </div>

        <slot>Default</slot>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3"



const page = usePage()
const flashSuccess = computed(
    () => page.props.value.flash.success
)

</script>


