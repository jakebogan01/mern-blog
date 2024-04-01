<script>
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { Editor } from "@tadashi/svelte-editor-quill";

    const options = {
        modules: {
            toolbar: true,
        },
        placeholder: 'Hello, World!',
        theme: 'snow',
        plainclipboard: true
    }

    function onTextChange(event) {
        console.log(event.detail)
    }
</script>

<h1>Create a post</h1>

<svelte:head>
    <link rel="preconnect" href="https://cdn.quilljs.com" crossorigin>
    <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css">
</svelte:head>

<form>
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    <br>
    <label for="category">Category</label>
    <select name="category" id="category">
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
        <option value="3">Category 3</option>
    </select>
    <br>
    <FileDropzone name="files" />
    <br>
    <Editor {options} on:text-change={onTextChange} data='' />
    <br>
    <button type="submit">Create</button>
</form>