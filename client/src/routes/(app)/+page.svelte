<script>
        import { currentUser } from "$lib/stores/userStore.js";
        import { goto } from "$app/navigation";
        /** @type {import('./$types').ActionData} */
        /* svelte-ignore unused-export-let */
        export let form;

        $: if (form?.logout) {
                currentUser.set(null);
                goto("/sign-in");
        }
</script>

<h1>Home page</h1>