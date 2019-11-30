<template>
<div class="k-snipcart-vital">
  <h3>Total Sales</h3>
  <span>{{ salesCount }}</span>
</div>
</template>
<script>
export default {
  name: 'totalSales',
  data() {
    return {
      totalSales: undefined,
      errors: [],
    }
  },
  computed: {
     salesCount () {
       return (this.totalSales) ? this.totalSales : 'Loading...'
     }
  },
  // Abandoned Carts
  async created() {
    try {
      let response = await this.$api.get('snipcart/orders', {pretty: true})

        let salesTotal = response.items.reduce((acc, item) => acc + item.finalGrandTotal, 0);
        let currencySymbol = '£';
        this.totalSales = currencySymbol + salesTotal;


    } catch (e) {
       this.errors.push(e)
    }
  }
}
</script>
