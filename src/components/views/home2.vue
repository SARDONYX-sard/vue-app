<template>
  <div
    class="box-cat"
    :style="{
      transform: `translate(${x}px, 250px)`,
    }"
  />
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      x: 300, // キャラのX座標
    };
  },
};
</script>
<style></style>
