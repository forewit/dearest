<script lang="ts">
  import { fade } from "svelte/transition";
  import { authHandlers } from "../../stores/authStore";

  let email = "";
  let password = "";
  let failedLogin = false;

  async function handleSubmit() {
    try {
      failedLogin = false;
      await authHandlers.login(email, password);
    } catch (err) {
      console.log("Login failed!");
      failedLogin = true;
    }
  }
</script>

<form class="container">
  <img class="logo" src="./images/pen.svg" alt="logo" />
  <input
    class="email input"
    bind:value={email}
    type="email"
    placeholder=" "
    required
  />
  <input
    class="password input"
    bind:value={password}
    type="password"
    placeholder=" "
    required
  />
  {#if failedLogin}
    <p transition:fade={{ duration: 150 }} class="error">Failed to login!</p>
  {/if}
  <button class="button login" on:click={handleSubmit}>
    <img src="/images/login.svg" alt="login" />
  </button>
</form>

<style>
  .container {
    width: 300px;
    padding: 20px 24px;
    font-size: 14px;

    display: grid;
    grid-template-columns: min-content max-content 1fr;
    grid-template-rows: 40px 40px 40px;
    row-gap: 10px;
    grid-template-areas:
      "logo email email"
      "logo pass pass"
      "logo login error";
  }

  .logo {
    height: 120px;
    padding-right: 16px;
    align-self: center;
    pointer-events: none;
    grid-area: logo;
  }

  .email {
    grid-area: email;
    background-image: url("images/email.svg");
  }

  .password {
    grid-area: pass;
    background-image: url("images/password.svg");
  }

  .email {
    grid-area: email;
    width: 100%;
    padding-left: 40px;

    background-image: url("images/email.svg");
    background-size: 20px;
    background-position: 10px 50%;
    background-repeat: no-repeat;
  }

  .password {
    grid-area: pass;
    width: 100%;
    padding-left: 40px;

    background-image: url("images/password.svg");
    background-size: 20px;
    background-position: 10px 50%;
    background-repeat: no-repeat;
  }
  .error {
    grid-area: error;
    color: red;
    font-size: 12px;
    align-self: center;
    border-radius: 8px;
    padding: 5px 10px;
    margin-top: 3px;
  }

  .login {
    justify-self: left;
    grid-area: login;
    margin: 3px 8px;
  }
</style>
