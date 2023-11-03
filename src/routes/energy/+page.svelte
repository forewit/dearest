<script lang="ts">
  import { goto } from "$app/navigation";

  let value = 4;

  function handleSubmit() {
    setTimeout(() => goto("/warmth"), 0);

    //todo: save data to store
  }
</script>

<form on:submit={handleSubmit} class="grid-container center">
  <img class="energy-level" src="/images/energy/energy{value}.svg" alt="" />
  <input class="range" type="range" min="1" max="5" bind:value />
  <input type="submit" style="display: none" />
</form>

<style>
  input[type="range"]::-webkit-slider-thumb {
    -webkit-mask: url("/images/energy.svg") no-repeat center / contain;
    mask: url("/images/energy.svg") no-repeat center / contain;
  }
  .grid-container {
    display: grid;
    grid-auto-flow: row;
    gap: 40px;
  }
  .energy-level {
    height: 150px;
    aspect-ratio: 1;
    align-self: center;
    justify-self: center;
    user-select: none;
    pointer-events: none;
  }
</style>
