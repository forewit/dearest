<script lang="ts">
  export let images: string[] = [];
  export let multiselect = false;

  let selectedSlots:boolean[] = [];
</script>

<div class="wrapper">
  {#each images as url, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="slot neu neu-low"
      class:neu-animated-fall={!selectedSlots[i]}
      class:neu-animated-rise={selectedSlots[i]}
      on:click={() => {
        if (multiselect) {
        selectedSlots[i] = !selectedSlots[i];
        } else {
          selectedSlots = [];
          selectedSlots[i] = true;
        }
      }}
    >
      <img src={url} alt="" />
    </div>
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    grid-auto-flow: row;
    width: min-content;
    row-gap: 16px;
    position: absolute;
  }
  .slot {
    width: 100px;
    height: 100px;
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    animation-duration: 200ms;
  }
  .slot img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
