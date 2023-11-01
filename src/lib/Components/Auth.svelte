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
  <div class="heart-logo" />
  <div class="email">
    <input class="email input" bind:value={email} type="email" required />
    <div class="email-logo" />
  </div>

  <div class="password">
    <input class="input" bind:value={password} type="password" required />
    <div class="password-logo" />
  </div>

  {#if failedLogin}
    <p transition:fade={{ duration: 150 }} class="error">Failed to login!</p>
  {/if}
  <button class="button login" on:click={handleSubmit}>
    <div class="login-logo" />
  </button>
</form>

<style>
  .container {
    width: 400px;
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

  .heart-logo {
    height: 120px;
    margin-right: 20px;
    aspect-ratio: 1;
    align-self: center;
    pointer-events: none;
    grid-area: logo;

    -webkit-mask: url("images/heart.svg") no-repeat center / contain;
    mask: url("images/heart.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }

  @media only screen and (max-width: 480px) {
    .container {
      width: 280px;
      max-width: 95vw;
      grid-template-columns: max-content 1fr;
    grid-template-rows: min-content 40px 40px 40px;
      grid-template-areas: 
      "logo logo"
      "email email"
      "pass pass"
      "login error";
    }
    .heart-logo {
      justify-self: center;
      margin-right: 0px;
    }
  }

  .email {
    grid-area: email;
    position: relative;
  }
  .password {
    grid-area: pass;
    position: relative;
  }
  .email input,
  .password input {
    width: 100%;
    padding-left: 44px;
  }
  .email-logo,
  .password-logo {
    pointer-events: none;
    user-select: none;
    position: absolute;
    left: 18px;
    top: 10px;
    width: 20px;
    height: 20px;
  }
  .email-logo {
    -webkit-mask: url("images/email.svg") no-repeat center / contain;
    mask: url("images/email.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }
  .password-logo {
    -webkit-mask: url("images/password.svg") no-repeat center / contain;
    mask: url("images/password.svg") no-repeat center / contain;
    background-color: var(--accent-color);
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
  .login-logo {
    height: 100%;
    aspect-ratio: 1;
    -webkit-mask: url("images/login.svg") no-repeat center / contain;
    mask: url("images/login.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }
</style>
