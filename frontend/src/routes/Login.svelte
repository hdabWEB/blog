<script>
    let email = '';
    let password = '';
    let error = '';

    const handleLogin = async () => {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '/';
        } else {
            error = 'Invalid credentials';
        }
    };
</script>

<main>
    <h2>Login</h2>
    <form on:submit|preventDefault={handleLogin}>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} required />

        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} required />

        {#if error}
            <p style="color: red;">{error}</p>
        {/if}

        <button type="submit">Login</button>
    </form>
</main>
