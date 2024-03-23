<script>
        import {LightSwitch} from "@skeletonlabs/skeleton";
        import { page } from "$app/stores"
</script>

<nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                        <div class="flex items-center px-2 lg:px-0">
                                <div class="flex-shrink-0">
                                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
                                </div>
                                <div class="hidden lg:ml-6 lg:block">
                                        <div class="flex space-x-4">
                                                <a href="/" class="{$page.url.pathname === '/' ? 'variant-filled-primary' : ''} rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white">Home</a>
                                                <a href="/dashboard" class="{$page.url.pathname === '/dashboard' ? 'variant-filled-primary' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
                                                <a href="/projects" class="{$page.url.pathname === '/projects' ? 'variant-filled-primary' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                                <a href="/sign-in" class="{$page.url.pathname === '/sign-in' ? 'variant-filled-primary' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sign in</a>
                                                <a href="/sign-up" class="{$page.url.pathname === '/sign-up' ? 'variant-filled-primary' : ''} rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sign up</a>
                                        </div>
                                </div>
                        </div>
                        <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                                <div class="w-full max-w-lg lg:max-w-xs">
                                        <label for="search" class="sr-only">Search</label>
                                        <div class="relative">
                                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                                                        </svg>
                                                </div>
                                                <input id="search" name="search" class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search" type="search">
                                        </div>
                                </div>
                        </div>
                        <div>
                                <LightSwitch />
                        </div>
                </div>
        </div>
</nav>