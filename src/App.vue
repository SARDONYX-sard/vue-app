<template>

    <Header />
    <router-view />
</template>

<script>
import Header from "./components/global/header";

export default {
  name: "App",
  components: {
    Header,

  },
};

</script>
