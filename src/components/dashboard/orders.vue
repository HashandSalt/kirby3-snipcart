<template>
  <div>
    <k-table v-if="orders.length" :columns="tablecolumns" :rows="orders"  />
  </div>
</template>
  
  <script lang="js">
  export default {
    props: {
      name: String,
      columns: Object,
      options: Array,
      rows: {
        type: Array,
        default() {
          return [];
        },
      },
      empty: String,
    },
  
    data() {
      return {
        tablecolumns: { invoiceNumber: { label: "Code", type: "text" }, date: {label: "Date", type: "text" }, status: {label: "Status", type: "text" }, total: {label: "Total", type: "text" }, shippingAddressCountry: {label: "Ship to", type: "text" }   },
        orders: [],
      };
    },
  
    async created() {
        let response = await this.$api.get("snipcart/orders?limit=500");
        // console.log(response.items)

        let data = response.items.map(function (element) {
            let date = new Date( Date.parse(element.completionDate));            
            let datestring = ("0" + date.getDate()).slice(-2)+'/'+("0" + (date.getMonth() + 1)).slice(-2)+'/'+date.getFullYear();
                  // console.log(date);
            return {invoiceNumber: element.invoiceNumber, date: datestring, status: element.status, total: element.finalGrandTotal, shippingAddressCountry: element.shippingAddressCountry}
        });  
    this.orders = data;
  
    },
  };
  </script>
  
  <style lang="scss">
</style>
  