<script>
        import Rellax from "rellax";
        import { currentUser } from "$lib/stores/userStore.js";
        import { goto } from "$app/navigation";
        import { onMount } from "svelte";
        /** @type {import('./$types').ActionData} */
        /* svelte-ignore unused-export-let */
        export let form;

        $: if (form?.logout) {
                currentUser.set(null);
                goto("/sign-in");
        }

        onMount(() => {
                new Rellax(".rellax");
        });
</script>

<header class="fixed top-0 z-20 w-full">
        <nav class="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
                <div class="flex items-center justify-between">
                        <a href="/" class="text-2xl font-light tracking-widest text-white">UNNAMED</a>
                        <a href="#contact" class="relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                                <span class="relative">Get in touch</span>
                        </a>
                </div>
        </nav>
</header>

<main class="background relative">
        <section id="home" class="relative flex min-h-screen items-center">
                <div aria-hidden="true" class="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
                <img src="https://nemo.wickedtemplates.com/images/heroImage.svg" class="fixed inset-0 h-full w-full object-cover" alt="woman in dark" width="4160" height="6240">
                <div class="relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0">
                        <div class="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
                                <h1 data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" class="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight" style="transform: translate3d(0px, 0px, 0px);">Creative Duo</h1>
                        </div>
                        <div>
                                <div class="ml-auto md:w-2/3 md:pt-12 lg:w-1/2">
                                        <p class="mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal">On an endless journey to create experiences that inspire others. Always motived by design that's honest, aesthetic and natural. Probably the only designer you’ll ever need.</p>
                                        <a data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" href="#work" class="rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10" style="transform: translate3d(0px, 0px, 0px);">
                                                <span class="relative">See our work</span>
                                        </a>
                                </div>
                        </div>
                        <div data-rellax-speed="-5" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" class="rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16" style="transform: translate3d(0px, 0px, 0px);">
                                <span class="text-xs font-light uppercase tracking-widest text-white">Follow us</span>
                                <ul class="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                                        <li>
                                                <a href="#" target="_blank">001 ------ Instagram</a>
                                        </li>
                                        <li>
                                                <a href="#" target="_blank">002 ------ Behance</a>
                                        </li>
                                        <li>
                                                <a href="#" target="_blank">003 ------ Twitter</a>
                                        </li>
                                </ul>
                        </div>
                </div>
        </section>

        <section id="work" class="relative z-10 bg-black pb-20 lg:pt-0">
                <div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
                        <div data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" class="rellax flex flex-wrap items-center gap-6" style="transform: translate3d(0px, 0px, 0px);">
                                <h2 class="text-7xl font-bold text-white xl:text-8xl">Our work</h2>
                                <span class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">12 Projects</span>
                        </div>
                        <div class="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60">
                                <a class="rellax group col-span-2 lg:col-span-1" data-rellax-mobile-speed="0" data-rellax-speed="-2" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/gild/gild-cover.webp" alt="gild cover" width="2000" height="1333">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Gild Sport</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                                <a class="rellax group block" data-rellax-mobile-speed="0" data-rellax-speed="1" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/projects/project2.webp" alt="project description" width="1380" height="920">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Project Name</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                                <a class="rellax group block" data-rellax-mobile-speed="0" data-rellax-speed="-2" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/projects/project3.webp" alt="project description" width="826" height="826">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Project Name</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                                <a class="rellax group col-span-2 block lg:col-span-1" data-rellax-mobile-speed="0" data-rellax-speed="0" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/projects/project4.webp" alt="project description" width="1380" height="1380">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Project Name</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                                <a class="rellax group block" data-rellax-mobile-speed="0" data-rellax-speed="-3" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/projects/project5.webp" alt="project description" width="740" height="1112">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Project Name</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                                <a class="rellax group block" data-rellax-mobile-speed="0" data-rellax-speed="0" data-rellax-tablet-speed="0" data-rellax-xs-speed="0" href="/pages/project" style="transform: translate3d(0px, 0px, 0px);">
                                        <div class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
                                                <img class="transition duration-500" src="https://rdiant.netlify.app/images/projects/project6.webp" alt="project description" width="740" height="1110">
                                        </div>
                                        <div class="flex items-center justify-between p-4">
                                                <h3 class="text-2xl font-normal text-white">Project Name</h3>
                                                <span class="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">01 / 2023</span>
                                        </div>
                                </a>
                        </div>
                </div>
        </section>
        <section id="services" class="relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-96">
                <div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                        <div class="flex flex-wrap items-center gap-6">
                                <h2 class="text-7xl font-bold text-white xl:text-8xl">Our services</h2>
                                <span class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">03 services</span>
                        </div>
                        <div class="mt-24">
                                <div class="">
                                        <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
                                                <div>
                                                        <div class="group border-b border-white/30 pb-8">
                                                                <div class="flex flex-col gap-4 divide-y divide-white/30">
                                                                        <span class="inline-block text-white/60">001</span>
                                                                        <h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                                                </div>
                                                                <div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                                                        <p class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div>
                                                        <div class="group border-b border-white/30 pb-8">
                                                                <div class="flex flex-col gap-4 divide-y divide-white/30">
                                                                        <span class="inline-block text-white/60">002</span>
                                                                        <h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                                                </div>
                                                                <div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                                                        <p class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div>
                                                        <div class="group border-b border-white/30 pb-8">
                                                                <div class="flex flex-col gap-4 divide-y divide-white/30">
                                                                        <span class="inline-block text-white/60">003</span>
                                                                        <h3 class="bg-black pt-6 text-3xl text-white">Branding for Agencies</h3>
                                                                </div>
                                                                <div class="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                                                                        <p class="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl">Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        <section id="about" class="relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0">
                <div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                        <div data-rellax-speed="-0.4" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" class="rellax flex flex-wrap items-center gap-6" style="transform: translate3d(0px, 53px, 0px);">
                                <h2 class="text-7xl font-bold text-white xl:text-8xl">About us</h2>
                                <span class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">01 Duo</span>
                        </div>
                        <div class="mt-24 md:mt-72">
                                <div class="grid gap-6">
                                        <div class="grid md:grid-cols-3">
                                                <div class="overflow-hidden md:col-span-2">
                                                        <img src="https://rdiant.netlify.app/images/un-duo.webp" alt="unnamed duo photo" width="1500" height="1000">
                                                </div>
                                        </div>
                                        <div data-rellax-speed="1" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" data-rellax-tablet-speed="0.5" class="rellax ml-auto md:w-3/5 lg:w-2/5" style="transform: translate3d(0px, -57px, 0px);">
                                                <p class="mt-12 text-2xl font-light text-white">Minima iure saepe necessitatibus ipsa voluptatibus, minus voluptatem in facere maxime quae repellendus nisi inventore libero impedit eligendi, accusantium consequuntur consectetur quidem?</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        <section id="contact" class="relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0">
                <div class="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
                        <div class="flex flex-wrap items-center gap-6">
                                <h2 class="text-7xl font-bold text-white xl:text-8xl">Let's work together</h2>
                                <span class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">__</span>
                        </div>
                        <div class="mt-24">
                                <div class="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                                        <div class="lg:col-span-2">
                                                <form action="" class="mx-auto space-y-8 md:w-3/4">
                                                        <div class="grid gap-8 sm:grid-cols-2 sm:gap-4">
                                                                <div>
                                                                        <label for="firstname" class="tracking-wide text-white">Fistname</label>
                                                                        <input type="text" id="fistname" name="fistname" autocomplete="name" placeholder="Your fistname" class="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary">
                                                                </div>
                                                                <div>
                                                                        <label for="lastname" class="tracking-wide text-white">Last name</label>
                                                                        <input type="text" id="lastname" name="lastname" autocomplete="family-name" placeholder="Your last name" class="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary">
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <label for="email" class="tracking-wide text-white">Mail address</label>
                                                                <input type="email" id="email" name="email" placeholder="Your mail address" class="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary">
                                                        </div>
                                                        <div>
                                                                <label for="message" class="tracking-wide text-white">Your message</label>
                                                                <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message" class="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"></textarea>
                                                        </div>
                                                        <button type="submit" class="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
                                                                <span class="relative uppercase tracking-wide text-black group-hover:text-white"> Send message </span>
                                                        </button>
                                                </form>
                                        </div>
                                        <div class="mt-8 border border-white/30 p-8 sm:p-12">
                                                <div>
                                                        <h3 class="text-xs font-light uppercase tracking-widest text-white">Address</h3>
                                                        <p class="mt-4 text-white">Riverside 25, San Francisco, California</p>
                                                </div>
                                                <div class="mt-16">
                                                        <h3 class="text-xs font-light uppercase tracking-widest text-white">Contact Info</h3>
                                                        <ul class="relative z-20 mt-4 space-y-2 font-light text-white">
                                                                <li>
                                                                        <a href="tel:+243000000000">Phone ------ +243 000 000 000</a>
                                                                </li>
                                                                <li>
                                                                        <a href="mailto:hello@tailus.io">E-mail ------- hello@tailus.io</a>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div class="mt-16">
                                                        <h3 class="text-xs font-light uppercase tracking-widest text-white">Follow us</h3>
                                                        <ul class="relative z-20 mt-4 space-y-2 font-light text-white">
                                                                <li>
                                                                        <a href="#" target="_blank">001 ------ Instagram</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" target="_blank">002 ------ Behance</a>
                                                                </li>
                                                                <li>
                                                                        <a href="#" target="_blank">003 ------ Twitter</a>
                                                                </li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
</main>

<footer class="relative bg-black pt-32 backdrop-opacity-0">
        <div class="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
                <div>
                        <div class="flex flex-wrap items-center gap-6">
                                <h2 class="text-3xl text-white xl:text-6xl">Instagram</h2>
                                <a href="#" target="_blank" class="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">@tailus</a>
                        </div>
                        <div class="mt-12 grid grid-cols-3 md:mt-16 lg:mt-24">
                                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                                        <span class="sr-only">Instagram feed</span>
                                        <img class="transition duration-500" src="https://rdiant.netlify.app/images/gild/gild-cover.webp" alt="insta feed cover" width="2000" height="1333">
                                </a>
                                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                                        <span class="sr-only">Instagram feed</span>
                                        <img class="transition duration-500" src="https://rdiant.netlify.app/images/gild/gild-cover2.webp" alt="insta feed cover" width="2000" height="1334">
                                </a>
                                <a href="#" target="_blank" class="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                                        <span class="sr-only">Instagram feed</span>
                                        <img class="transition duration-500" src="https://rdiant.netlify.app/images/gild/gild-cover3.webp" alt="insta feed cover" width="1800" height="1200">
                                </a>
                        </div>
                </div>
                <div class="mt-12 md:mt-16 lg:mt-24">
                        <div class="space-y-8 md:space-y-12">
                                <a href="/" class="text-2xl font-light tracking-widest text-white">
                                        <img class="h-8 w-auto brightness-200" src="/favicon.svg" alt="logo mark" width="100" height="100">
                                </a>
                                <nav>
                                        <ul class="flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white">
                                                <li>
                                                        <a href="#home">Home</a>
                                                </li>
                                                <li>
                                                        <a href="#work">Work</a>
                                                </li>
                                                <li>
                                                        <a href="#services">Services</a>
                                                </li>
                                                <li>
                                                        <a class="block w-max" href="#about">About us</a>
                                                </li>
                                                <li>
                                                        <a href="#contact">Contact</a>
                                                </li>
                                        </ul>
                                </nav>
                                <div class="flex flex-wrap justify-between gap-3">
                                        <span class="text-sm text-white/50">© Radiant 2021 - Present</span>
                                        <span class="text-sm text-white/50">Designed by <a href="https://tailus.io/" class="text-white">Tailus</a> in Lubumbashi </span>
                                </div>
                        </div>
                </div>
        </div>
</footer>