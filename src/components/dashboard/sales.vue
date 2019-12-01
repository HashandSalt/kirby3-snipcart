<template>
<div class="k-snipcart-vital">
  <h3>Total Sales</h3>
  <span>{{ salesCount }}</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      totalSales: null
    }
  },
  computed: {
     salesCount () {
       return this.totalSales ? this.totalSales : 'Loading...'
     }
  },
  // Abandoned Carts
  async created() {
    let response = await this.$api.get('snipcart/orders');

    let salesTotal = response.items.reduce((acc, item) => acc + item.finalGrandTotal, 0).toFixed(2);
    let currencySymbol = '£';
    this.totalSales = currencySymbol + salesTotal;
  }
}
</script>
