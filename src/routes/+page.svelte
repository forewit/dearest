<script lang="ts">
  import Auth from "$lib/Components/Auth.svelte";
  import { fade } from "svelte/transition";
  import { authStore } from "../stores/authStore";
  import Spinner from "$lib/Components/Spinner.svelte";



</script>

<svelte:head>
  <title>My Dearest</title>
</svelte:head>

{#if $authStore.isLoading}
  <div
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
    class="center"
  >
    <Spinner />
  </div>
{:else if !$authStore.currentUser}
  <div
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
    class="auth-container center"
  >
    <Auth redirect="/energy"/>
  </div>
{:else}
  <div
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
    class="center"
  >
  <a href="/energy">
    <h2>Energy</h2>
  </a>
  </div>
{/if}

<style>
  .auth-container {
    width: min-content;
    animation-delay: 1s;
  }
</style>
