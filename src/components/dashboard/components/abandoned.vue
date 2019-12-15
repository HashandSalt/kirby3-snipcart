<template>
<div class="k-snipcart-vital">
  <h3>Abandonded Carts</h3>
  <span>{{ abandonedCount }}</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      abandoned: null
    }
  },
  computed: {
     abandonedCount () {
       return this.abandoned ? this.abandoned.length : 'Loading...'
     }
  },
  // Abandoned Carts
  async created() {
    let response = await this.$api.get('snipcart/carts/abandoned');
    this.abandoned = response.items;
  }
}
</script>
