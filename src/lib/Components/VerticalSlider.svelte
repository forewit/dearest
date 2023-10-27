<script lang="ts">
  // The slider is "springy" and bounces to the
  // closest position while being pulled to the finger
  // using neumorphic design (see neumorphism.io)

  type Option = {
    position: number; // 0-100
    icon?: string; //url
  };

  let options: Option[] = [];
</script>

{#each options as option}{/each}

<style>
</style>
