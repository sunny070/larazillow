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
                <div v-if="user" class="flex items-center gap-4">
                    <Link class="text-sm text-gray-500" :href="route('realtor.listing.index')">{{ user.name }}</Link>
                    <Link :href="route('realtor.listing.create')" class="btn-primary"
                        >+ New Listing</Link
                    >
                    <!-- <div>Logout</div> -->
                    <div>
                        <Link
                            :href="route('logout')"
                            method="delete"
                            as="button"
                            >Logout</Link
                        >
                    </div>
                </div>
                <div v-else class="flex items-center gap-4">
                    <Link :href="route('user-account.create')">Register</Link>
                    <Link :href="route('login')">Sign-In</Link>
                </div>
            </nav>
        </div>
    </header>
    <main class="container w-full p-4 mx-auto">
        <div
            v-if="flashSuccess"
            class="p-2 mb-4 border border-green-200 rounded-md shadow-sm bg-green-50"
        >
            {{ flashSuccess }}
        </div>

        <slot>Default</slot>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";

const page = usePage();

const flashSuccess = computed(() => page.props.value.flash.success);
const user = computed(() => page.props.value.user);
</script>
