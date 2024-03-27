<script>
        export let data;
        $: console.log(data);
</script>

<div class="flex justify-between">
        <div>
                profile goes here
        </div>

        {#if data.data === "profile"}
                <div>side content</div>
        {/if}
</div>
