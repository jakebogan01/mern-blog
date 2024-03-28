<script>
        import { currentUser } from '$lib/stores/userStore.js';
        import {Avatar, ProgressRadial} from "@skeletonlabs/skeleton";
        import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
        import { app } from "$lib/firebase.js";
        export let data;
        let imageFileUrl, fileUpload, progressError = null;
        let currentProgress = 0;

        $: {
                console.log(currentProgress);
                console.log(progressError);
        }
        const handleUpdateImage = (e) => {
                const file = e.target.files[0];
                const fileName = new Date().getTime() +  file.name;
                if (file) {
                        imageFileUrl = URL.createObjectURL(file);
                        console.log(imageFileUrl);
                }
                const storage = getStorage(app);
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log("Upload is " + progress + "% done");
                                currentProgress = progress.toFixed(0);
                        },
                        (error) => {
                                progressError = "Could not upload image (File must be less than 2MB)";
                                console.log(error);
                        },
                        () => {
                                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                        imageFileUrl = downloadURL;
                                        console.log("File available at", downloadURL);
                                });
                                console.log("Upload is completed");
                        }
                );
        };
        $: console.log(data);
</script>

<div class="flex justify-between">
        <div>
                My profile
                {#if $currentUser}
                        <div>
                                <input type="file" name="imageFile" id="imageFile" accept="image/png, image/jpeg" on:change={handleUpdateImage} bind:this={fileUpload} class="hidden">
                                <Avatar src={imageFileUrl || $currentUser?.profilePicture} on:click={()=>fileUpload.click()} width="w-[160px]" fallback="fallback-image.jpg" border="border-4 border-surface-300-600-token hover:!border-primary-500" cursor="cursor-pointer" />
                                {#if progressError}
                                        <p class="text-red-500">{progressError}</p>
                                {:else}
                                        {#if currentProgress > 0 && currentProgress < 100}
                                                <ProgressRadial value={currentProgress}>
                                                        {currentProgress}%
                                                </ProgressRadial>
                                        {/if}
                                {/if}
                        </div>

                        <form class="space-y-6">

                                <!--{#if form?.responseData.message}<p class="text-red-500">{form?.responseData.message}</p>{/if}-->

                                <div>
                                        <label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
                                        <div class="mt-2">
                                                <input  id="username" name="username" type="text" autocomplete="username" value={$currentUser?.username}  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                        <!--{#if form?.emptyFields?.username}<p class="text-red-500">{form?.emptyFields?.username}</p>{/if}-->
                                </div>

                                <div>
                                        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                                        <div class="mt-2">
                                                <input  id="email" name="email" type="email" autocomplete="email" value={$currentUser?.email}  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                        <!--{#if form?.emptyFields?.email}<p class="text-red-500">{form?.emptyFields?.email}</p>{/if}-->
                                </div>

                                <div>
                                        <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                                        <div class="mt-2 flex rounded-md shadow-sm">
                                                <div class="relative flex flex-grow items-stretch focus-within:z-10">
                                                        <input  type="text" name="password" id="password" autocomplete="new-password" placeholder="Password" value=""  class="block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                                <button type="button" class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                        <!--{#if showPassword}-->
<!--                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" /></svg>-->
<!--                                                        {:else}-->
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true"><path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" /></svg>
                                                        <!--{/if}-->
                                                </button>
                                        </div>
                                        <!--{#if form?.emptyFields?.password}<p class="text-red-500">{form?.emptyFields?.password}</p>{/if}-->
                                </div>

                                <div>
                                        <label for="password_confirmation" class="block text-sm font-medium leading-6 text-white">Confirm Password</label>
                                        <div class="mt-2">
                                                <input type="password" name="password_confirmation" id="password_confirmation" autocomplete="new-password" placeholder="Password" value="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                </div>

                                <div>
                                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                <!--{#if sending}-->
                                                <!--        <span class="sr-only">Loading...</span>-->
                                                <!--        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>-->
                                                <!--{:else}-->
                                                        Update
                                                <!--{/if}-->
                                        </button>
                                        <button type="button" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Delete account
                                        </button>
                                </div>
                        </form>
                {/if}
        </div>

        {#if data.data === "profile"}
                <div>side content</div>
        {/if}
</div>