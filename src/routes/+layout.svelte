<script lang="ts">
  import { onMount } from "svelte";
  import { authStore, authHandlers, type UserData } from "../stores/authStore";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import { auth, db } from "$lib/firebase/firebase.client";

  import "./styles.css";
  import { fade } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let data;

  let pagetree = ["/", "/energy", "/warmth", '/success'];
  $: pageIndex = pagetree.indexOf($page.url.pathname);

  function handleNext() {
    setTimeout(() => goto(pagetree[pageIndex + 1]), 0);
  }
  function handleBack() {
    setTimeout(() => goto(pagetree[pageIndex - 1]), 0);
  }

  let notchLeft = 0,
    notchRight = 0,
    notchTop = 0;

  function handleOrientation() {
    notchLeft = screen.orientation.type == "landscape-primary" ? 1 : 0;
    notchRight = screen.orientation.type == "landscape-secondary" ? 1 : 0;
    notchTop = screen.orientation.type == "portrait-primary" ? 1 : 0;
  }

  onMount(() => {
    //todo: auto redirect if it has been a while


    screen.orientation.onchange = handleOrientation;
    handleOrientation();

    // update authStore on authentication state changes
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // logged out
      if (!user) {
        // update authStore
        authStore.update((curr) => {
          return {
            ...curr,
            isLoading: false,
            currentUser: user,
          };
        });
        return;
      }

      // get firestore document data
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      let dataToSetStoreTo: UserData = { text: "" };

      // create a new user doc if it doesn't exist
      if (!docSnap.exists()) {
        console.log("Creating firestore user doc...");
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, dataToSetStoreTo, { merge: true });
      } else {
        console.log("Fetching firestore user doc...");
        const userData = docSnap.data();
        dataToSetStoreTo = userData as UserData;
      }

      // update authStore
      authStore.update((curr) => {
        return {
          ...curr,
          isLoading: false,
          currentUser: user,
          data: dataToSetStoreTo,
        };
      });
    });
  });

  function handleLogout() {
    authHandlers.logout();
    setTimeout(() => goto("/"), 0);
  }
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
</svelte:head>

<div
  class="container"
  style="--notch-left: {notchLeft}; --notch-right: {notchRight}; --notch-top: {notchTop};"
>
  <div class="content">
    {#key data.url}
      <div out:fade={{ duration: 300 }} in:fade={{ duration: 300, delay: 300 }}>
        <slot />
      </div>
    {/key}
    {#if $authStore.currentUser}
      <div in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
          {#if pageIndex < pagetree.length-1}
            <button class="next-btn button" on:click={handleNext}>
              <div class="next-logo" />
            </button>
          {/if}

          {#if pageIndex > 0}
            <button class="back-btn button" on:click={handleBack}>
              <div class="back-logo" />
            </button>
          {/if}

        <button class="logout-btn button" on:click={handleLogout}>
          <div class="logout-logo" />
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    /* make fullscreen */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    /* add margin to account for notch */
    margin-left: calc(env(safe-area-inset-left) * var(--notch-left));
    margin-right: calc(env(safe-area-inset-right) * var(--notch-right));
    margin-top: calc(env(safe-area-inset-top) * var(--notch-top));
  }

  .content {
    /* fill container */
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .next-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 40px;
  }
  .next-logo {
    height: 100%;
    aspect-ratio: 1;
    -webkit-mask: url("/images/arrow-right.svg") no-repeat center / contain;
    mask: url("/images/arrow-right.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }

  .back-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 40px;
  }
  .back-logo {
    height: 100%;
    aspect-ratio: 1;
    -webkit-mask: url("/images/arrow-left.svg") no-repeat center / contain;
    mask: url("/images/arrow-left.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }

  .logout-btn {
    position: absolute;
    top: 0;
    left: 0;
    margin: 40px;
  }
  .logout-logo {
    height: 100%;
    aspect-ratio: 1;
    -webkit-mask: url("/images/logout.svg") no-repeat center / contain;
    mask: url("/images/logout.svg") no-repeat center / contain;
    background-color: var(--accent-color);
  }
</style>
