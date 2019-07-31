<template>
  <div v-if="web3.isInjected" class="metamask-info">
    <p>Metamask: {{ web3.isInjected }}</p>
    <p>Network: {{ web3.networkId }}</p>
    <p>Account: {{ web3.coinbase }}</p>
    <p>Balance: {{ web3.balance }}</p>
  </div>
  <div v-else>
    <p>Metamask in unavaible</p>
    <p>
      <button v-on:click="reloadPage">Reload</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "metamask",
  computed: {
    web3() {
      return this.$store.state.web3;
    }
  },
  methods: {
    reloadPage: function(event) {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
</style>