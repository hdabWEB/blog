<script>
    import { onMount } from 'svelte';
    let isLoggedIn = false;

    // 로그인 체크 함수
    const checkLogin = () => {
        const token = localStorage.getItem('token');
        if (token) {
            isLoggedIn = true;
        }
    };

    onMount(() => {
        checkLogin();
    });
</script>

<main>
    <h1>Welcome to My App</h1>
    {#if isLoggedIn}
        <p>You are logged in.</p>
        <a href="/blog">Go to Blog</a>
    {:else}
        <a href="/login">Login</a>
    {/if}
</main>
