<script lang="ts">
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

  <form class="container" on:submit={handleSubmit}>
    <img class="logo" src="./images/pen.svg" alt="logo" />
    <input
      class="email neu-inset"
      bind:value={email}
      type="email"
      placeholder="Email"
      required
    />
    <input
      class="password neu-inset"
      bind:value={password}
      type="password"
      placeholder="Password"
      required
    />
    {#if failedLogin}
      <p class="error">Failed to login!</p>
    {/if}
    <input type="submit" value="Login" class="btn" />
  </form>

<style>
  .container {
    width: 305px;
    padding: 20px 24px;
    font-size: 14px;

    display: grid;
    grid-template-columns: min-content max-content 1fr;
    grid-template-rows: 40px 40px 40px;
    row-gap: 10px;
    grid-template-areas:
      "logo email email"
      "logo pass pass"
      "logo error btn";
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
  }
  .password {
    grid-area: pass;
  }
  .error {
    grid-area: error;
    color: red;
    font-size: 12px;
    align-self: center;
    justify-self: left;
    border: 1px solid red;
    border-radius: 8px;
    padding: 5px 6px;
  }

  .password,
  .email {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 14px;
    outline: none;
    background-color: #fdfdfd;
  }

  .password:focus,
  .email:focus {
    border: 2px solid #00a1a7;
    padding: 8px;
  }

  .password::placeholder,
  .email::placeholder {
    color: #ccc;
  }

  .btn {
    margin: 2px 0;
    padding: 0 18px;
    background: #00a1a7;
    color: #fff;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    justify-self: right;
    grid-area: btn;
  }

  .btn:hover {
    background-color: #006f74; /* Darker blue for hover */
  }
</style>
