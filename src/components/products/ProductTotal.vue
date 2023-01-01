<template>
<div class="k-snipcart-product-total">
  <div class="k-snipcart-vital">
    <h3>Total Sales</h3>
    <span>{{ salesCount }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    disabled: Boolean,
    required: Boolean,
    value: String
  },
data() {
  return {
    totalSales: null,
    productID: this.$store.getters["content/values"]()["productid"]
  }
},
  computed: {
     salesCount () {
       return this.totalSales ? this.totalSales : 'Loading...'
     }
  },
  async created() {
    let response = await this.$api.get('snipcart/products/' + this.productID);

    if (response === undefined || response.length == 0) {
      this.totalSales = 0;
    } else {
      this.totalSales = response['statistics']['totalSales'].toFixed(2);
    }

  }
};
</script>
