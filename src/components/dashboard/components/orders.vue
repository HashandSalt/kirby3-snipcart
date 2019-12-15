<template>
  <tbl
    headline="Orders"
    :columns="columns"
    :rows="orders"
    :is-loading="this.$store.state.isLoading"
    v-bind="config"
  />
</template>

<script>

import Tbl from "tbl-for-kirby";

export default {
  components: {
    Tbl
  },
  data() {
    return {
      orders: []
    }
  },
  computed: {
    columns() {
      return [
        {
          name: "id",
          label: "#",
          field: "invoiceNumber",
          sort: true,
          search: true,
          align: "left",
          width: "id"
        },
        {
          name: "date",
          label: "Order Date",
          field: "creationDate",
          type: "date",
          align: "left",
          width: "date"
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sort: false,
          search: false,
          align: "center",
          width: "status"
        },
        {
          name: "total",
          label: "Total",
          field: "finalGrandTotal",
          type: "decimal",
          sort: true,
          search: false,
          width: "total"
        },
        {
          name: "address",
          label: "Ship to",
          field: "shippingAddressCountry",
          align: "right",
          width: "ship"
        }
      ]
    },
    config() {
      return {
      }
    }
  },
  async created() {
    let response = await this.$api.get('snipcart/orders');
    this.orders = response.items;
  }
}
</script>

<style lang="scss">
.tbl[data-version="1.0.9"] td, .tbl[data-version="1.0.9"] th[data-width="ship"]
{
  width: 100px;
}
.tbl[data-version="1.0.9"] td, .tbl[data-version="1.0.9"] th[data-width="total"]
{
  width: 100px;
}
.tbl[data-version="1.0.9"] td, .tbl[data-version="1.0.9"] th[data-width="status"]
{
  width: 100px;
}
.tbl[data-version="1.0.9"] td, .tbl[data-version="1.0.9"] th[data-width="date"]
{
  // width: 100px;
}
.tbl[data-version="1.0.9"] td, .tbl[data-version="1.0.9"] th[data-width="id"]
{
  width: 100px;
}
</style>
