<script lang="ts">
  import Auth from "$lib/Components/Auth.svelte";
  import { fade } from "svelte/transition";
  import { authHandlers, authStore } from "../stores/authStore";
  import { onDestroy } from "svelte";
  import Selector from "$lib/Components/Selector.svelte";
</script>

<svelte:head>
  <title>My Dearest</title>
</svelte:head>

{#if $authStore.isLoading}
  <div in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration: 300 }}>
    <h1>loading</h1>
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
    <div class="selector-container">
      <Selector multiselect={true} images={["/images/logo.svg", "/images/logo.svg"]}/>
    </div>
    <button class="logout-btn" on:click={authHandlers.logout}>Logout</button>
  </div>
{/if}

<style>
  .auth-container {
    width: min-content;
    animation-delay: 1s;
  }
  .selector-container {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
  }
  .logout-btn {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }
</style>
