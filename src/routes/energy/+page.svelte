<script lang="ts">
  import Slider from "$lib/Components/Slider.svelte";

let value = 2;
</script>



<div class="grid-container center">
    <img src="/images/energy/energy{value}.svg" alt="">
    <Slider bind:value={value} min={1} max={5} vertical={true}></Slider>
</div>




<style>
    .grid-container {
        display: grid;
        grid-auto-flow: column;
    }
img {
    height: 100px;
    align-self: center;
}
</style>