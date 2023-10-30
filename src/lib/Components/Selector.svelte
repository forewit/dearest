<script lang="ts">
  export let logos: string[] = [];
</script>

<div class="wrapper">
  <div class="handle" />
  {#each logos as url}
    <div class="slot">
      <img src={url} alt="" />
    </div>
  {/each}
</div>

<style>
  .wrapper {
    background-color: lightcoral;
    display: grid;
    grid-auto-flow: row;
    width: min-content;
    row-gap: 16px;
    position: absolute;
  }
  .slot {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
  }
  .slot:active {
    background-color: aquamarine;
  }
  .slot img {
    width: 100%;
    height: 100%;
  }
  .handle {
    position: absolute;
    cursor: pointer;
    width: 50%;
    aspect-ratio: 1;
    background-color: aqua;
  }
</style>
