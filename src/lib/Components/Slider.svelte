<script lang="ts">
  export let value = 3;
  export let min = 1;
  export let max = 5;
  export let vertical = false;

</script>

<input
  type="range"
  min="{min}"
  max="{max}"
  bind:value={value}
  class:vertical={vertical}
/>
<style>
  .vertical {
    appearance: slider-vertical;
    width: 40px;
  }
</style>
