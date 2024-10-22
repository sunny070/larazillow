<template>
 <div>
     You need to be Verified first to see this page
</div>   
    <div>
        <Link 
        :href="route('verification.send')"
         method="post" 
         as="button" 
         class="text-indigo-600">
            Resend verification Email
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { route } from 'ziggy-js';


</script>