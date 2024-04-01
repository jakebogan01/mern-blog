<script>
    import { enhance } from '$app/forms';
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { Editor } from "@tadashi/svelte-editor-quill";
    /** @type {import('./$types').ActionData} */
    /* svelte-ignore unused-export-let */
    export let form;
    $: console.log(form)

    const options = {
        modules: {
            toolbar: true,
        },
        placeholder: 'Hello, World!',
        theme: 'snow',
        plainclipboard: true
    }

    let content;

    function onTextChange(event) {
        content.value = event.detail.html;
    }
</script>

<h1>Create a post</h1>

<svelte:head>
    <link rel="preconnect" href="https://cdn.quilljs.com" crossorigin>
    <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css">
</svelte:head>

<form
    method="POST"
    action="?/createPost"
    enctype="multipart/form-data"
    use:enhance>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" class="text-black">
    <br>
    <label for="category">Category</label>
    <select name="category" id="category" class="text-black">
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
    </select>
    <br>
    <FileDropzone name="file" accept="image/png, image/jpeg" />
    <br>
    <input type="text" id="content" name="content" bind:this={content} class="hidden">
    <Editor {options} on:text-change={onTextChange} />
    <br>
    <button type="submit">Create</button>
</form>