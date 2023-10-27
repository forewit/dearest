<script lang="ts">
  import { onMount } from "svelte";
  import { authStore, type UserData } from "../stores/authStore";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import { auth, db } from "$lib/firebase/firebase.client";

  import './styles.css';

  let notchLeft = 0,
    notchRight = 0,
    notchTop = 0;

  function handleOrientation() {
    notchLeft = screen.orientation.type == "landscape-primary" ? 1 : 0;
    notchRight = screen.orientation.type == "landscape-secondary" ? 1 : 0;
    notchTop = screen.orientation.type == "portrait-primary" ? 1 : 0;
  }

  onMount(() => {
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
      let dataToSetStoreTo: UserData = {text:""};

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
    <slot />
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

  
</style>
