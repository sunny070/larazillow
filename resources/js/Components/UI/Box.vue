<template>
    <div class="p-4 border border-gray-200 rounded-md shadow-sm">
        <div class="mb-1 font-medium text-gray-500">
            <slot name="header"/>
        </div>
        <slot/>
    </div>
</template>