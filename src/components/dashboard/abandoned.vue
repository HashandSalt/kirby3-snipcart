<template>
<div class="k-snipcart-vital">
  <h3>Abandonded Carts</h3>
  <span>{{ abandonedCount }}</span>
</div>
</template>
<script>
export default {
  name: 'abandoned',
  data() {
    return {
      abandoned: undefined,
      errors: [],
    }
  },
  computed: {
     abandonedCount () {
       return (this.abandoned) ? this.abandoned.length : 'Loading...'
     }
  },
  // Abandoned Carts
  async created() {
    try {
      let response = await this.$api.get('snipcart/abandoned', {pretty: true})
      this.abandoned = response.items;
    } catch (e) {
       this.errors.push(e)
    }
  }
}
</script>
