<script>
    let title = '';
    let content = '';
    let blogs = [];

    const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5000/api/blog');
        if (response.ok) {
            blogs = await response.json();
        }
    };

    const handleSubmit = async () => {
        const response = await fetch('http://localhost:5000/api/blog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, content})
        });

        if (response.ok) {
            fetchBlogs();
            title = '';
            content = '';
        }
    };

    onMount(fetchBlogs);
</script>

<main>
    <h2>Blog</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="Title" bind:value={title} required/>
        <textarea placeholder="Content" bind:value={content} required></textarea>
        <button type="submit">Create Blog</button>
    </form>

    <h3>Blog Posts</h3>
    {#each blogs as blog}
        <div>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
        </div>
    {/each}
</main>
