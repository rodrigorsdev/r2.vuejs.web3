<template>
  <metamask />
</template>

<script>
import Metamask from "@/components/metamask";
export default {
  name: "jns-dapp",
  beforeCreate() {
    console.log("registerWeb3 action dispatched from jns-dapp.vue component");
    this.$store.dispatch("registerWeb3");
  },
  components: {
    metamask: Metamask
  }
};
</script>

<style scoped>
</style>