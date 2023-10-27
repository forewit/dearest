<script lang="ts">
  import Auth from "$lib/Components/Auth.svelte";
  import { db } from "$lib/firebase/firebase.client";
  import { doc, setDoc } from "firebase/firestore";
  import {
    authHandlers,
    authStore,
    type UserData,
  } from "../../stores/authStore";
  import type { User } from "firebase/auth";
  import { afterNavigate } from "$app/navigation";

  let user: User;
  let data: UserData;
  let newText = "";
  let ready = false;

  // save data object to firestore
  async function publish() {
    if (!$authStore.currentUser) return;
    try {
      const userRef = doc(db, "users", $authStore.currentUser.uid);
      await setDoc(userRef, data, { merge: true });
      console.log("Save successful!");
    } catch (err) {
      console.log("There was an error saving data!", err);
    }
  }

  // update the authStore with new user data
  function updateStoreUserData(newData: UserData) {
    authStore.update((curr) => {
      return {
        ...curr,
        data: newData,
      };
    });

    publish();
  }

  // pull updates from the store
  authStore.subscribe((curr) => {
    if (curr.currentUser) user = curr.currentUser;
    if (curr.data) data = curr.data;
  });

  afterNavigate(()=>{
    console.log("after navigate")
    ready = true;
  })
</script>

<div />
{#if $authStore.currentUser}
  <div>Current User: {user.email}</div>
  <button on:click={authHandlers.logout}>Logout</button>

  <form
    on:submit={() => {
      updateStoreUserData({ text: newText });
    }}
  >
    <input type="text" bind:value={newText} />
    <input type="submit" value="Save!" />
  </form>

  <p>{data.text}</p>
{:else}

<div class="auth-container neu neu-animated-rise">
  <Auth />
</div>
{/if}

<style>
  .auth-container {
    width: min-content;
  }
</style>