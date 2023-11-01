<script lang="ts">
  import Auth from "$lib/Components/Auth.svelte";
  import { fade } from "svelte/transition";
  import { authHandlers, authStore } from "../stores/authStore";
  import Spinner from "$lib/Components/Spinner.svelte";
</script>

<svelte:head>
  <title>My Dearest</title>
</svelte:head>

{#if $authStore.isLoading}
  <div class="centered" in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
    <Spinner />
  </div>
{:else if !$authStore.currentUser}
  <div
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
    class="auth-container neu centered"
  >
    <Auth />
  </div>
{:else}
  <div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>

    <button class="logout-btn neu" on:click={authHandlers.logout}>Logout</button>
  </div>
{/if}

<style>
  .auth-container {
    width: min-content;
    animation-delay: 1s;
  }
  .logout-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin: 20px;;
    border: none;
  }
</style>
