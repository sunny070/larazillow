<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Larazillow</title>

        @vite('resources/js/app.js')
        @routes
        @inertiaHead
    </head>
    <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
         @inertia
    </body>
</html>
