<script lang="ts">
  let value = 4;
</script>

<div class="grid-container center">
  <img src="/images/energy/energy{value}.svg" alt="" />
  <input class="range" type="range" min="1" max="5" bind:value />
</div>

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
  img {
    height: 150px;
    align-self: center;
    justify-self: center;
  }
</style>
